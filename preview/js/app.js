// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('iadventure', ['ionic', 'storydata'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('home', {
      url: "/home",
      templateUrl: "templates/home.html"
    })

    // Each tab has its own nav history stack:
    .state('page', {
      url: '/story/:slug?code',
      templateUrl: function($stateParams) {
        return 'templates/story/' + $stateParams.slug + '.html';
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/story/start');

})

.factory('StoryState', function($rootScope, $state, $stateParams, StoryData) {
  var state = this;
  state.keys = [];

  //
  // Start over at the beginning
  //
  state.clear = function() {
    state.keys.length = 0;
    state.current_code = '';
    state.current_slug = 'start';
  };
  state.clear();

  //
  // Turn a story key on
  //
  state.setKey = function(key) {
    if (state.keys.indexOf(key) === -1) {
      state.keys.push(key);
    }
  };
  
  //
  // Turn a story key off
  //
  state.unsetKey = function(key) {
    var idx = state.keys.indexOf(key);
    if (idx !== -1) {
      state.keys.splice(idx, 1);
    }
  };
  
  //
  // Check if the given key is on
  //
  state.hasKey = function(key) {
    return state.keys.indexOf(key) !== -1;
  };

  //
  // Get the data for the current slug (or another one)
  //
  state.slugData = function(slug) {
    if (slug === undefined) {
      slug = state.current_slug;
    }
    return StoryData.toc[slug];
  }

  //
  // Choose the next state by choice number.
  //
  state.makeChoiceNumber = function(choice_number) {
    var slug_data = state.slugData();
    state._makeChoice(slug_data.choices[choice_number].slug);
  };

  //
  // Choose the next state by slug.
  //
  state._makeChoice = function(slug) {
    var current_slug_data = state.slugData();
    var choice = null;
    for (var i = 0; i < current_slug_data.choices.length; i++) {
      choice = current_slug_data.choices[i];
      if (choice.slug === slug) {
        break;
      }
    }
    state.current_slug = slug;
    state.current_code += choice.index;

    // set keys found on this page
    var new_slug_data = state.slugData();
    angular.forEach(new_slug_data.keys, function(key) {
      state.setKey(key);
    });
  };

  state._goToCurrentState = function() {
    $state.go('page',
      {slug: state.current_slug, code: state.current_code},
      {inherit: false});
  }

  state.choose = function(slug) {
    state._makeChoice(slug);
    state._goToCurrentState();
  };

  //
  // Jump to the given spot in a storyline
  //
  state.jumpToCode = function(code) {
    console.log('jumping to code', code);
    state.clear();
    for (var i = 0; i < code.length; i++) {
      var num = parseInt(code[i]);
      state.makeChoiceNumber(num);
    }
    state._goToCurrentState();
  };

  $rootScope.$on('$stateChangeSuccess',function(){
    window.scrollTo(0, 0);
    if ($state.current.name === 'page') {
      if ($stateParams.code !== state.current_code && $stateParams.code !== null) {
        state.jumpToCode($stateParams.code);
      }
    }
    // if ($state.current.name === 'page') {
    //   if ($stateParams.slug === 'start') {
    //     StoryState.clear();  
    //   } else if ($stateParams.code !== StoryState.current_code) {
    //     StoryState.jumpToCode($stateParams.code);
    //   }
    // }
  });

  return state;
})

.factory('SVGMark', function() {
  var svgmark = this;
  svgmark.random = function(seed, i) {
    return Math.sin(seed + i) / 2 + 0.5;
  }
  svgmark.hashCode = function() {
    var hash = 0, i, chr, len;
    if (this.length == 0) return hash;
    for (i = 0, len = this.length; i < len; i++) {
      chr   = this.charCodeAt(i);
      hash  = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  };
  svgmark.curve = function(width, height, code, seed) {
    var points = [];
    var x_chunk_size = width / code.length;
    for (var i = 0; i < code.length; i++) {
      var ch = code[i];
      var n = parseInt(ch) + (seed * 2);
      var x = svgmark.random(n, i);
      var y = svgmark.random(n + 1, i);
      // curvy in chunks
      var actual_x = Math.floor(x_chunk_size * (i + x));
      var actual_y = Math.floor(height * y);
      if (!points.length) {
        points = ['M', actual_x, actual_y];
      } else {
        //var mag = i % 2 ? height : -height;
        //var h1_x = actual_x
        points = points.concat(['L', actual_x, actual_y]);  
      } 
    }
    return points.join(' ');
  }
  return svgmark;
})

.directive('choice', function($http, $stateParams, StoryState) {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    scope: {
      'goto': '@',
      'ifkey': '@',
      'ifnotkey': '@',
    },
    template: '<a class="choice" ng-click="go()" ng-class="{broken:!available}" ng-transclude ng-show="show()"></a>',
    link: function(scope, element, attrs) {
      // XXX this can be set to true and the http request commented out for
      // production.
      scope.available = false;
      $http.get('templates/story/' + attrs.goto + '.html').then(function(response) {
        scope.available = true;
      });
      scope.show = function() {
        if (scope.ifkey !== undefined) {
          return StoryState.hasKey(scope.ifkey);
        }
        if (scope.ifnotkey !== undefined) {
          return ! StoryState.hasKey(scope.ifnotkey);
        }
        return true;
      };
      scope.go = function() {
        if (scope.available) {
          StoryState.choose(scope.goto);
        }
      }
    }
  };
})

.directive('endButton', function(StoryState) {
  return {
    restrict: 'E',
    replace: true,
    template: '<a class="start-over" ng-click="startOver()">Begin again</a>',
    controller: function($scope) {
      $scope.startOver = function() {
        StoryState.jumpToCode('');
      }
    }
  };
})

.directive('if', function(StoryState) {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    scope: {
      'any': '@',
    },
    template: '<span ng-transclude></span>',
    link: function(scope, element, attrs) {
      scope.show = false;
      scope.computeShow = function() {
        var parts = attrs.any.split(',');
        for (var i = 0; i < parts.length; i++) {
          if (StoryState.hasKey(parts[i])) {
            scope.show = true;
            break
          }
        }
      }
      scope.computeShow();
    },
    controller: function($scope, $element) {
      var ctrl = this;
      ctrl.isTrue = function() {
        return $scope.show;
      }
      return ctrl;
    }
  }
})

.directive('true', function(StoryState) {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    require: '^if',
    template: '<span ng-transclude ng-show="ifctrl.isTrue()"></span>',
    link: function(scope, element, attrs, ifCtrl) {
      scope.ifctrl = ifCtrl;
    }
  }
})

.directive('else', function(StoryState) {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    require: '^if',
    template: '<span ng-transclude ng-show="!ifctrl.isTrue()"></span>',
    link: function(scope, element, attrs, ifCtrl) {
      scope.ifctrl = ifCtrl;
    }
  }
})

.controller('MainCtrl', function(StoryState, SVGMark) {
  var ctrl = this;
  ctrl.state = StoryState;
  ctrl.svgmark = SVGMark;
  return ctrl;
})