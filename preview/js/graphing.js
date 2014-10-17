angular.module('iadventure-graphing', ['storydata'])


.factory('StoryGraphData', function(StoryData) {
  var data = this;
  data.raw = StoryData;
  data.links = [];
  angular.forEach(StoryData.toc, function(value, key) {
    angular.forEach(value.choices, function(choice) {
      data.links.push({
        source: key,
        target: choice.slug,
        ifkey: choice.ifkey,
        ifnotkey: choice.ifnotkey,
        optional: (choice.ifkey || choice.ifnotkey) !== null,
      });
    });
  });
  
  return data;
})

.directive('storyGraph', function() {
  var margin = 20;
  return {
    restrict: 'E',
    scope: {
      width: '@',
      height: '@',
      data: '=',
      ref: '=',
      labels: '=',
    },
    link: function(scope, element, attrs) {
      scope.selected_nodes = [];
      scope.in_path = [];
      scope.reverse_ref = {};
      scope.keys = [];

      scope.$watch('ref', function(new_ref) {
        scope.reverse_ref = {};
        var tovisit = ['start'];
        while (tovisit.length) {
          var node_name = tovisit.shift();
          var node = new_ref.toc[node_name];
          if (node !== undefined && node.choices !== undefined) {
            angular.forEach(node.choices, function(choice) {
              tovisit.push(choice.slug);
              if (scope.reverse_ref[choice.slug] === undefined) {
                scope.reverse_ref[choice.slug] = [];
              }
              if (scope.reverse_ref[choice.slug].indexOf(node_name) === -1) {
                scope.reverse_ref[choice.slug].push(node_name);  
              }
            })
          }
        }
      });

      scope.findLawfulDescendants = function(node_name, keys) {
        var descendants = [node_name];
        var node = scope.ref.toc[node_name];
        if (node === undefined || node.choices === undefined) {
          // do nothing
        } else {
          var these_keys = angular.copy(keys).concat(node.keys);
          
          _.each(node.choices, function(choice) {
            var doit = false;
            if (choice.ifkey !== null) {
              if (_.contains(keys, choice.ifkey)) {
                doit = true;
              }
            } else if (choice.ifnotkey !== null) {
              if (!_.contains(keys, choice.ifnotkey)) {
                doit = true;
              }
            } else {
              // this choice is always available
              doit = true;
            }

            if (doit) {
              descendants = descendants.concat(
                scope.findLawfulDescendants(choice.slug, these_keys));  
            }
          });
        }
        return _.uniq(descendants);
      }

      scope.findLawfulAncestors = function(node_name) {
        var ancestors = [];
        var tovisit = [node_name];
        while (tovisit.length) {
          var node_name = tovisit.shift();
          ancestors.push(node_name);
          var parents = scope.reverse_ref[node_name];
          angular.forEach(parents, function(parent) {
            tovisit.push(parent);
          });
        }
        return ancestors;
      }

      scope.$watchCollection('selected_nodes', function(selected_nodes) {
        // set keys
        scope.keys.length = 0;
        scope.keys = _(selected_nodes)
          .map(function(selected_node) {
            var item = scope.ref.toc[selected_node];
            if (item !== undefined) {
              return item.keys || [];
            }
            return [];
          })
          .flatten()
          .uniq()
          .value()

        // find descendants and ascendants
        var all_paths = _(selected_nodes)
          .map(function(selected_node) {
            // descendants
            var descendants = scope.findLawfulDescendants(selected_node, scope.keys);
            var ancestors = scope.findLawfulAncestors(selected_node, scope.keys);
            return _.uniq(descendants.concat(ancestors));
          })
          .value();
        

        // reduce nodes in path
        all_paths.push(Object.keys(scope.ref.toc));
        scope.in_path = _(all_paths)
          .reduce(function(a, b) {
            return _.intersection(a, b);
          });
      });
      var vis = d3.select(element[0])
        .append('svg')
          .attr('width', parseInt(scope.width) + margin)
          .attr('height', parseInt(scope.height) + margin);

      vis.append('defs').append('marker')
        .attr('id', 'marker')
        .attr('viewBox', '0 -5 10 10')
        .attr('refX', 15)
        .attr('refY', -1.5)
        .attr('markerWidth', 6)
        .attr('markerHeight', 6)
        .attr('orient', 'auto')
        .append('path')
          .attr('class', 'marker')
          .attr('d', 'M0,-5L10,0L0,5"');

      scope.$watch('data', function(links, oldVal) {
        if (!links) {
          return;
        }
        
        var nodes = {};

        links.forEach(function(link) {
          link.source = nodes[link.source] || (nodes[link.source] = {name: link.source, ifkey: link.ifkey, ifnotkey: link.ifnotkey});
          link.target = nodes[link.target] || (nodes[link.target] = {name: link.target, ifkey: link.ifkey, ifnotkey: link.ifnotkey});
        });

        var force = d3.layout.force()
          .nodes(d3.values(nodes))
          .links(links)
          .size([scope.width, scope.height])
          .linkDistance(10)
          .linkStrength(0.5)
          .charge(-600)
          .gravity(0.05)
          .on("tick", tick)
          .start();

        var link = vis.append('g').selectAll('line')
          .data(force.links())
          .enter().append('line')
            .attr('class', 'link')
            .attr('marker-end', 'url(#marker)')

        var circle = vis.append('g').selectAll('circle')
          .data(force.nodes())
          .enter().append('circle')
            .attr('r', 8)
            .attr('class', circleClass)
            .on('click', function(item) {
              toggleNode(item.name);
              tick();
            })
            .call(force.drag)

        var text = vis.append('g').selectAll('text')
          .data(force.nodes())
          .enter().append('text')
            .attr('x', 10)
            .attr('y', '.31em')
            .attr('class', textClass)
            .text(function(d) { return d.name });

        function tick() {
          link
            .attr("x1", function(d) { return d.source.x; })
            .attr("y1", function(d) { return d.source.y; })
            .attr("x2", function(d) { return d.target.x; })
            .attr("y2", function(d) { return d.target.y; })
            .attr('class', linkClass);
          circle
            .attr('transform', transform)
            .attr('class', circleClass);
          text
            .attr('transform', transform)
            .attr('class', textClass);
        }

        function toggleNode(name) {
          scope.$apply(function() {
            if (!_.contains(scope.in_path, name)) {
              return;
            }
            var idx = scope.selected_nodes.indexOf(name);
            if (idx === -1) {

              scope.selected_nodes.push(name);
            } else {
              scope.selected_nodes.splice(idx, 1);
            }
          });
        }

        function linkArc(d) {
          var dx = d.target.x - d.source.x,
              dy = d.target.y - d.source.y,
              dr = Math.sqrt(dx * dx + dy * dy);
          return "M" + d.source.x + "," + d.source.y + "A" + dr + "," + dr + " 0 0,1 " + d.target.x + "," + d.target.y;
        }

        function transform(d) {
          return "translate(" + d.x + "," + d.y + ")";
        }

        function ancestryClass(name) {
          var cls = [];
          if (scope.selected_nodes.length === 0) {
            return '';
          } else {
            if (_.contains(scope.selected_nodes, name)) {
              cls.push('selected');
            }
            if (_.contains(scope.in_path, name)) {
              cls.push('in-path');
            } else {
              cls.push('unselected');
            }
            return cls.join(' ');
          }
        }

        function circleClass(d) {
          var cls = [d.name];
          if (scope.ref.toc[d.name].ending) {
            cls.push('end');
          } else {
            // if there are no choices, it's unfinished.
            var choices = scope.ref.toc[d.name].choices
            if (!choices || !choices.length) {
              cls.push('unfinished');
            }
          }
          cls.push(ancestryClass(d.name));

          // keys?
          var node = scope.ref.toc[d.name];
          if (node !== undefined && node.keys !== undefined && node.keys.length) {
            cls.push('has-keys');
          }
          if (node !== undefined && node.incomplete) {
            cls.push('incomplete');
          }
          return cls.join(' ');
        }

        function textClass(d) {
          if (!scope.labels) {
            return 'hidden';
          }
          cls = [];
          cls.push(ancestryClass(d.name));
          return cls.join(' ');
        }

        function linkClass(d) {
          cls = ['link'];
          if (d.optional) {
            cls.push('optional');
          }
          cls.push(ancestryClass(d.target.name));
          cls.push(ancestryClass(d.source.name));
          return cls.join(' ');
        }

      })
    }
  }
})

.controller('MainCtrl', function(StoryGraphData) {
  var ctrl = this;
  ctrl.data = StoryGraphData;
  ctrl.show_labels = true;

  return ctrl;
});