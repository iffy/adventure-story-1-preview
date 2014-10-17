var app = angular.module('storydata', []);
app.value('StoryData', {
  "toc": {
    "continue-reading": {}, 
    "finish-report": {
      "keys": [], 
      "choices": [
        {
          "text": "Stay, and read the confidential report.", 
          "ifkey": null, 
          "index": 0, 
          "ifnotkey": null, 
          "slug": "read-report"
        }, 
        {
          "text": "Lock the screen and leave.", 
          "ifkey": null, 
          "index": 1, 
          "ifnotkey": null, 
          "slug": "go-to-elevator"
        }
      ], 
      "incomplete": false, 
      "ending": false
    }, 
    "meet-with-tara": {
      "keys": [
        "you-know-tara-is-involved"
      ], 
      "choices": [
        {
          "text": "Tell her the truth", 
          "ifkey": null, 
          "index": 0, 
          "ifnotkey": null, 
          "slug": "tell-tara-the-truth"
        }, 
        {
          "text": "Feign ignorance", 
          "ifkey": null, 
          "index": 1, 
          "ifnotkey": null, 
          "slug": "feign-ignorance-to-tara"
        }
      ], 
      "incomplete": false, 
      "ending": false
    }, 
    "ask-mitchell": {}, 
    "shock-and-awe-t-shirts": {
      "keys": [], 
      "choices": [], 
      "incomplete": false, 
      "ending": true
    }, 
    "pretend-to-finish": {}, 
    "help-tara-by-waiting": {}, 
    "feign-ignorance-to-tara": {
      "keys": [], 
      "choices": [
        {
          "text": "Get some much-needed shut eye", 
          "ifkey": null, 
          "index": 0, 
          "ifnotkey": null, 
          "slug": "wake-up-in-sandstone-cell"
        }
      ], 
      "incomplete": false, 
      "ending": false
    }, 
    "surrender-to-mitchell": {
      "keys": [], 
      "choices": [], 
      "incomplete": false, 
      "ending": false
    }, 
    "tell-mitchell-the-truth": {
      "keys": [
        "mitchell-caught", 
        "mitchell-trust", 
        "saw-mitchell-caught"
      ], 
      "choices": [
        {
          "text": "Lie about on floors and in the trunks of cars.", 
          "ifkey": null, 
          "index": 0, 
          "ifnotkey": null, 
          "slug": "wake-up-in-sandstone-cell"
        }
      ], 
      "incomplete": false, 
      "ending": false
    }, 
    "wake-up-in-sandstone-cell": {
      "keys": [], 
      "choices": [
        {
          "text": "Talk to Mitchell.", 
          "ifkey": "mitchell-trust", 
          "index": 0, 
          "ifnotkey": null, 
          "slug": "catch-up-with-mitchell"
        }, 
        {
          "text": "Follow the line of people.", 
          "ifkey": null, 
          "index": 1, 
          "ifnotkey": "mitchell-trust", 
          "slug": "follow-line-of-people"
        }, 
        {
          "text": "Escape over the dune.", 
          "ifkey": null, 
          "index": 2, 
          "ifnotkey": null, 
          "slug": "escape-over-the-dune"
        }
      ], 
      "incomplete": false, 
      "ending": false
    }, 
    "wait-for-mitchell-outside": {
      "keys": [], 
      "choices": [
        {
          "text": "Confront Mitchell", 
          "ifkey": null, 
          "index": 0, 
          "ifnotkey": null, 
          "slug": "confront-mitchell"
        }, 
        {
          "text": "Sneak in after he leaves", 
          "ifkey": null, 
          "index": 1, 
          "ifnotkey": null, 
          "slug": "sneak-in-after-mitchell-leaves"
        }
      ], 
      "incomplete": false, 
      "ending": false
    }, 
    "go-back-to-office": {
      "keys": [], 
      "choices": [
        {
          "text": "Follow Mitchell inside.", 
          "ifkey": null, 
          "index": 0, 
          "ifnotkey": null, 
          "slug": "follow-mitchell-inside"
        }, 
        {
          "text": "Wait for Mitchell to come back out.", 
          "ifkey": null, 
          "index": 1, 
          "ifnotkey": null, 
          "slug": "wait-for-mitchell-outside"
        }
      ], 
      "incomplete": false, 
      "ending": false
    }, 
    "ask-charles": {}, 
    "go-in-to-work": {
      "keys": [], 
      "choices": [
        {
          "text": "Meet with Tara", 
          "ifkey": "charles-knows", 
          "index": 0, 
          "ifnotkey": null, 
          "slug": "meet-with-tara"
        }, 
        {
          "text": "Ignore the note and leave", 
          "ifkey": "charles-knows", 
          "index": 1, 
          "ifnotkey": null, 
          "slug": "leave-work"
        }, 
        {
          "text": "Ask Charles", 
          "ifkey": null, 
          "index": 2, 
          "ifnotkey": "charles-knows", 
          "slug": "ask-charles"
        }, 
        {
          "text": "Ask Carol", 
          "ifkey": null, 
          "index": 3, 
          "ifnotkey": "charles-knows", 
          "slug": "ask-carol"
        }, 
        {
          "text": "Ask Mitchell", 
          "ifkey": null, 
          "index": 4, 
          "ifnotkey": "charles-knows", 
          "slug": "ask-mitchell"
        }
      ], 
      "incomplete": false, 
      "ending": false
    }, 
    "quit": {}, 
    "wake-up-at-home": {
      "keys": [], 
      "choices": [
        {
          "text": "Call in sick.", 
          "ifkey": null, 
          "index": 0, 
          "ifnotkey": null, 
          "slug": "call-in-sick"
        }, 
        {
          "text": "Go to work.", 
          "ifkey": null, 
          "index": 1, 
          "ifnotkey": null, 
          "slug": "go-in-to-work"
        }
      ], 
      "incomplete": false, 
      "ending": false
    }, 
    "follow-mitchell-home": {}, 
    "start": {
      "keys": [], 
      "choices": [
        {
          "text": "Stay and finish the report.", 
          "ifkey": null, 
          "index": 0, 
          "ifnotkey": null, 
          "slug": "finish-report"
        }, 
        {
          "text": "Quit your job.", 
          "ifkey": null, 
          "index": 1, 
          "ifnotkey": null, 
          "slug": "quit"
        }, 
        {
          "text": "Sneak out as soon as she's gone.", 
          "ifkey": null, 
          "index": 2, 
          "ifnotkey": null, 
          "slug": "pretend-to-finish"
        }
      ], 
      "incomplete": false, 
      "ending": false
    }, 
    "hide-behind-copier": {
      "keys": [], 
      "choices": [
        {
          "text": "Go to bed and figure it out tomorrow.", 
          "ifkey": null, 
          "index": 0, 
          "ifnotkey": null, 
          "slug": "wake-up-at-home"
        }, 
        {
          "text": "Call the police.", 
          "ifkey": null, 
          "index": 1, 
          "ifnotkey": null, 
          "slug": "call-police"
        }
      ], 
      "incomplete": false, 
      "ending": false
    }, 
    "tell-tara-the-truth": {
      "keys": [], 
      "choices": [
        {
          "text": "Help uncover Mitchell's gang", 
          "ifkey": null, 
          "index": 0, 
          "ifnotkey": null, 
          "slug": "help-tara"
        }, 
        {
          "text": "\"I'd rather not.\"", 
          "ifkey": null, 
          "index": 1, 
          "ifnotkey": null, 
          "slug": "no-thanks-tara"
        }
      ], 
      "incomplete": false, 
      "ending": false
    }, 
    "throw-glass": {
      "keys": [], 
      "choices": [], 
      "incomplete": false, 
      "ending": true
    }, 
    "escape-over-the-dune": {
      "keys": [], 
      "choices": [], 
      "incomplete": false, 
      "ending": true
    }, 
    "run-to-elevator-with-printout": {
      "keys": [
        "charles-knows"
      ], 
      "choices": [
        {
          "text": "Try to sleep and hope for the best tomorrow.", 
          "ifkey": null, 
          "index": 0, 
          "ifnotkey": null, 
          "slug": "wake-up-at-home"
        }, 
        {
          "text": "Call the police.", 
          "ifkey": null, 
          "index": 1, 
          "ifnotkey": null, 
          "slug": "call-police"
        }, 
        {
          "text": "Go back to the office to look for the missing page.", 
          "ifkey": null, 
          "index": 2, 
          "ifnotkey": null, 
          "slug": "go-back-to-office"
        }
      ], 
      "incomplete": false, 
      "ending": false
    }, 
    "leave-after-reading": {}, 
    "attack-the-doctor": {
      "keys": [], 
      "choices": [
        {
          "text": "All out offense", 
          "ifkey": null, 
          "index": 0, 
          "ifnotkey": null, 
          "slug": "throw-glass"
        }, 
        {
          "text": "Run fast", 
          "ifkey": null, 
          "index": 1, 
          "ifnotkey": null, 
          "slug": "run-fast-through-lab"
        }
      ], 
      "incomplete": false, 
      "ending": false
    }, 
    "read-report": {
      "keys": [], 
      "choices": [
        {
          "text": "Leave, quickly.", 
          "ifkey": null, 
          "index": 0, 
          "ifnotkey": null, 
          "slug": "leave-after-reading"
        }, 
        {
          "text": "Continue reading the report.", 
          "ifkey": null, 
          "index": 1, 
          "ifnotkey": null, 
          "slug": "continue-reading"
        }, 
        {
          "text": "Print the report and leave.", 
          "ifkey": null, 
          "index": 2, 
          "ifnotkey": null, 
          "slug": "print-report"
        }
      ], 
      "incomplete": false, 
      "ending": false
    }, 
    "bluff-mitchell": {
      "keys": [
        "mitchell-caught", 
        "mitchell-not-trust"
      ], 
      "choices": [
        {
          "text": "Hold very still and dream sweet dreams.", 
          "ifkey": null, 
          "index": 0, 
          "ifnotkey": null, 
          "slug": "wake-up-in-sandstone-cell"
        }
      ], 
      "incomplete": false, 
      "ending": false
    }, 
    "help-tara": {
      "keys": [], 
      "choices": [
        {
          "text": "Follow Mitchell home at lunch", 
          "ifkey": null, 
          "index": 0, 
          "ifnotkey": null, 
          "slug": "follow-mitchell-home"
        }, 
        {
          "text": "Wait", 
          "ifkey": null, 
          "index": 1, 
          "ifnotkey": null, 
          "slug": "help-tara-by-waiting"
        }, 
        {
          "text": "Use a little shock and awe", 
          "ifkey": null, 
          "index": 2, 
          "ifnotkey": null, 
          "slug": "shock-and-awe-t-shirts"
        }
      ], 
      "incomplete": false, 
      "ending": false
    }, 
    "catch-up-with-mitchell": {
      "keys": [
        "mitchell-plan"
      ], 
      "choices": [
        {
          "text": "Attack him and run.", 
          "ifkey": null, 
          "index": 0, 
          "ifnotkey": null, 
          "slug": "attack-the-doctor"
        }, 
        {
          "text": "Let him poke you.", 
          "ifkey": null, 
          "index": 1, 
          "ifnotkey": null, 
          "slug": "take-the-needle"
        }
      ], 
      "incomplete": false, 
      "ending": false
    }, 
    "take-the-needle": {
      "keys": [], 
      "choices": [], 
      "incomplete": false, 
      "ending": false
    }, 
    "call-in-sick": {
      "keys": [], 
      "choices": [
        {
          "text": "Gracefully be dragged into the back of a waiting van.", 
          "ifkey": "charles-knows", 
          "index": 0, 
          "ifnotkey": null, 
          "slug": "wake-up-in-sandstone-cell"
        }
      ], 
      "incomplete": true, 
      "ending": false
    }, 
    "no-thanks-tara": {}, 
    "run-fast-through-lab": {
      "keys": [], 
      "choices": [], 
      "incomplete": false, 
      "ending": true
    }, 
    "follow-mitchell-inside": {
      "keys": [], 
      "choices": [
        {
          "text": "Bluff and try to escape.", 
          "ifkey": null, 
          "index": 0, 
          "ifnotkey": null, 
          "slug": "bluff-mitchell"
        }, 
        {
          "text": "Tell Mitchell the truth.", 
          "ifkey": null, 
          "index": 1, 
          "ifnotkey": null, 
          "slug": "tell-mitchell-the-truth"
        }
      ], 
      "incomplete": false, 
      "ending": false
    }, 
    "go-to-elevator": {}, 
    "run-away-from-mitchell": {
      "keys": [], 
      "choices": [], 
      "incomplete": false, 
      "ending": true
    }, 
    "leave-work": {}, 
    "call-police": {}, 
    "sneak-in-after-mitchell-leaves": {
      "keys": [], 
      "choices": [
        {
          "text": "Get some well deserved rest on the tile.", 
          "ifkey": null, 
          "index": 0, 
          "ifnotkey": null, 
          "slug": "wake-up-in-sandstone-cell"
        }
      ], 
      "incomplete": false, 
      "ending": false
    }, 
    "confront-mitchell": {
      "keys": [], 
      "choices": [
        {
          "text": "Surrender", 
          "ifkey": null, 
          "index": 0, 
          "ifnotkey": null, 
          "slug": "surrender-to-mitchell"
        }, 
        {
          "text": "Run for the strip mall", 
          "ifkey": null, 
          "index": 1, 
          "ifnotkey": null, 
          "slug": "run-away-from-mitchell"
        }
      ], 
      "incomplete": false, 
      "ending": false
    }, 
    "follow-line-of-people": {
      "keys": [], 
      "choices": [
        {
          "text": "Attack him and run.", 
          "ifkey": null, 
          "index": 0, 
          "ifnotkey": null, 
          "slug": "attack-the-doctor"
        }, 
        {
          "text": "Let him poke you.", 
          "ifkey": null, 
          "index": 1, 
          "ifnotkey": null, 
          "slug": "take-the-needle"
        }
      ], 
      "incomplete": false, 
      "ending": false
    }, 
    "print-report": {
      "keys": [], 
      "choices": [
        {
          "text": "Hide behind the copier.", 
          "ifkey": null, 
          "index": 0, 
          "ifnotkey": null, 
          "slug": "hide-behind-copier"
        }, 
        {
          "text": "Run to the elevator.", 
          "ifkey": null, 
          "index": 1, 
          "ifnotkey": null, 
          "slug": "run-to-elevator-with-printout"
        }
      ], 
      "incomplete": false, 
      "ending": false
    }, 
    "ask-carol": {}
  }, 
  "paths": [
    [
      {
        "index": 0, 
        "finished": true, 
        "slug": "finish-report", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "read-report", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": false, 
        "slug": "leave-after-reading", 
        "ending": false
      }
    ], 
    [
      {
        "index": 0, 
        "finished": true, 
        "slug": "finish-report", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "read-report", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": false, 
        "slug": "continue-reading", 
        "ending": false
      }
    ], 
    [
      {
        "index": 0, 
        "finished": true, 
        "slug": "finish-report", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "read-report", 
        "ending": false
      }, 
      {
        "index": 2, 
        "finished": true, 
        "slug": "print-report", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "hide-behind-copier", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "wake-up-at-home", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "go-in-to-work", 
        "ending": false
      }, 
      {
        "index": 2, 
        "finished": false, 
        "slug": "ask-charles", 
        "ending": false
      }
    ], 
    [
      {
        "index": 0, 
        "finished": true, 
        "slug": "finish-report", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "read-report", 
        "ending": false
      }, 
      {
        "index": 2, 
        "finished": true, 
        "slug": "print-report", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "hide-behind-copier", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "wake-up-at-home", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "go-in-to-work", 
        "ending": false
      }, 
      {
        "index": 3, 
        "finished": false, 
        "slug": "ask-carol", 
        "ending": false
      }
    ], 
    [
      {
        "index": 0, 
        "finished": true, 
        "slug": "finish-report", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "read-report", 
        "ending": false
      }, 
      {
        "index": 2, 
        "finished": true, 
        "slug": "print-report", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "hide-behind-copier", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "wake-up-at-home", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "go-in-to-work", 
        "ending": false
      }, 
      {
        "index": 4, 
        "finished": false, 
        "slug": "ask-mitchell", 
        "ending": false
      }
    ], 
    [
      {
        "index": 0, 
        "finished": true, 
        "slug": "finish-report", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "read-report", 
        "ending": false
      }, 
      {
        "index": 2, 
        "finished": true, 
        "slug": "print-report", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "hide-behind-copier", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": false, 
        "slug": "call-police", 
        "ending": false
      }
    ], 
    [
      {
        "index": 0, 
        "finished": true, 
        "slug": "finish-report", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "read-report", 
        "ending": false
      }, 
      {
        "index": 2, 
        "finished": true, 
        "slug": "print-report", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "run-to-elevator-with-printout", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "wake-up-at-home", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "call-in-sick", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "wake-up-in-sandstone-cell", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "follow-line-of-people", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "attack-the-doctor", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "throw-glass", 
        "ending": true
      }
    ], 
    [
      {
        "index": 0, 
        "finished": true, 
        "slug": "finish-report", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "read-report", 
        "ending": false
      }, 
      {
        "index": 2, 
        "finished": true, 
        "slug": "print-report", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "run-to-elevator-with-printout", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "wake-up-at-home", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "call-in-sick", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "wake-up-in-sandstone-cell", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "follow-line-of-people", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "attack-the-doctor", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "run-fast-through-lab", 
        "ending": true
      }
    ], 
    [
      {
        "index": 0, 
        "finished": true, 
        "slug": "finish-report", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "read-report", 
        "ending": false
      }, 
      {
        "index": 2, 
        "finished": true, 
        "slug": "print-report", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "run-to-elevator-with-printout", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "wake-up-at-home", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "call-in-sick", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "wake-up-in-sandstone-cell", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "follow-line-of-people", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": false, 
        "slug": "take-the-needle", 
        "ending": false
      }
    ], 
    [
      {
        "index": 0, 
        "finished": true, 
        "slug": "finish-report", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "read-report", 
        "ending": false
      }, 
      {
        "index": 2, 
        "finished": true, 
        "slug": "print-report", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "run-to-elevator-with-printout", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "wake-up-at-home", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "call-in-sick", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "wake-up-in-sandstone-cell", 
        "ending": false
      }, 
      {
        "index": 2, 
        "finished": true, 
        "slug": "escape-over-the-dune", 
        "ending": true
      }
    ], 
    [
      {
        "index": 0, 
        "finished": true, 
        "slug": "finish-report", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "read-report", 
        "ending": false
      }, 
      {
        "index": 2, 
        "finished": true, 
        "slug": "print-report", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "run-to-elevator-with-printout", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "wake-up-at-home", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "go-in-to-work", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "meet-with-tara", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "tell-tara-the-truth", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "help-tara", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": false, 
        "slug": "follow-mitchell-home", 
        "ending": false
      }
    ], 
    [
      {
        "index": 0, 
        "finished": true, 
        "slug": "finish-report", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "read-report", 
        "ending": false
      }, 
      {
        "index": 2, 
        "finished": true, 
        "slug": "print-report", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "run-to-elevator-with-printout", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "wake-up-at-home", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "go-in-to-work", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "meet-with-tara", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "tell-tara-the-truth", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "help-tara", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": false, 
        "slug": "help-tara-by-waiting", 
        "ending": false
      }
    ], 
    [
      {
        "index": 0, 
        "finished": true, 
        "slug": "finish-report", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "read-report", 
        "ending": false
      }, 
      {
        "index": 2, 
        "finished": true, 
        "slug": "print-report", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "run-to-elevator-with-printout", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "wake-up-at-home", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "go-in-to-work", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "meet-with-tara", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "tell-tara-the-truth", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "help-tara", 
        "ending": false
      }, 
      {
        "index": 2, 
        "finished": true, 
        "slug": "shock-and-awe-t-shirts", 
        "ending": true
      }
    ], 
    [
      {
        "index": 0, 
        "finished": true, 
        "slug": "finish-report", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "read-report", 
        "ending": false
      }, 
      {
        "index": 2, 
        "finished": true, 
        "slug": "print-report", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "run-to-elevator-with-printout", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "wake-up-at-home", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "go-in-to-work", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "meet-with-tara", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "tell-tara-the-truth", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": false, 
        "slug": "no-thanks-tara", 
        "ending": false
      }
    ], 
    [
      {
        "index": 0, 
        "finished": true, 
        "slug": "finish-report", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "read-report", 
        "ending": false
      }, 
      {
        "index": 2, 
        "finished": true, 
        "slug": "print-report", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "run-to-elevator-with-printout", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "wake-up-at-home", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "go-in-to-work", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "meet-with-tara", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "feign-ignorance-to-tara", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "wake-up-in-sandstone-cell", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "follow-line-of-people", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "attack-the-doctor", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "throw-glass", 
        "ending": true
      }
    ], 
    [
      {
        "index": 0, 
        "finished": true, 
        "slug": "finish-report", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "read-report", 
        "ending": false
      }, 
      {
        "index": 2, 
        "finished": true, 
        "slug": "print-report", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "run-to-elevator-with-printout", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "wake-up-at-home", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "go-in-to-work", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "meet-with-tara", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "feign-ignorance-to-tara", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "wake-up-in-sandstone-cell", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "follow-line-of-people", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "attack-the-doctor", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "run-fast-through-lab", 
        "ending": true
      }
    ], 
    [
      {
        "index": 0, 
        "finished": true, 
        "slug": "finish-report", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "read-report", 
        "ending": false
      }, 
      {
        "index": 2, 
        "finished": true, 
        "slug": "print-report", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "run-to-elevator-with-printout", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "wake-up-at-home", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "go-in-to-work", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "meet-with-tara", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "feign-ignorance-to-tara", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "wake-up-in-sandstone-cell", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "follow-line-of-people", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": false, 
        "slug": "take-the-needle", 
        "ending": false
      }
    ], 
    [
      {
        "index": 0, 
        "finished": true, 
        "slug": "finish-report", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "read-report", 
        "ending": false
      }, 
      {
        "index": 2, 
        "finished": true, 
        "slug": "print-report", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "run-to-elevator-with-printout", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "wake-up-at-home", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "go-in-to-work", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "meet-with-tara", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "feign-ignorance-to-tara", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "wake-up-in-sandstone-cell", 
        "ending": false
      }, 
      {
        "index": 2, 
        "finished": true, 
        "slug": "escape-over-the-dune", 
        "ending": true
      }
    ], 
    [
      {
        "index": 0, 
        "finished": true, 
        "slug": "finish-report", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "read-report", 
        "ending": false
      }, 
      {
        "index": 2, 
        "finished": true, 
        "slug": "print-report", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "run-to-elevator-with-printout", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "wake-up-at-home", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "go-in-to-work", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": false, 
        "slug": "leave-work", 
        "ending": false
      }
    ], 
    [
      {
        "index": 0, 
        "finished": true, 
        "slug": "finish-report", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "read-report", 
        "ending": false
      }, 
      {
        "index": 2, 
        "finished": true, 
        "slug": "print-report", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "run-to-elevator-with-printout", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "wake-up-at-home", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "go-in-to-work", 
        "ending": false
      }, 
      {
        "index": 2, 
        "finished": false, 
        "slug": "ask-charles", 
        "ending": false
      }
    ], 
    [
      {
        "index": 0, 
        "finished": true, 
        "slug": "finish-report", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "read-report", 
        "ending": false
      }, 
      {
        "index": 2, 
        "finished": true, 
        "slug": "print-report", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "run-to-elevator-with-printout", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "wake-up-at-home", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "go-in-to-work", 
        "ending": false
      }, 
      {
        "index": 3, 
        "finished": false, 
        "slug": "ask-carol", 
        "ending": false
      }
    ], 
    [
      {
        "index": 0, 
        "finished": true, 
        "slug": "finish-report", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "read-report", 
        "ending": false
      }, 
      {
        "index": 2, 
        "finished": true, 
        "slug": "print-report", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "run-to-elevator-with-printout", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "wake-up-at-home", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "go-in-to-work", 
        "ending": false
      }, 
      {
        "index": 4, 
        "finished": false, 
        "slug": "ask-mitchell", 
        "ending": false
      }
    ], 
    [
      {
        "index": 0, 
        "finished": true, 
        "slug": "finish-report", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "read-report", 
        "ending": false
      }, 
      {
        "index": 2, 
        "finished": true, 
        "slug": "print-report", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "run-to-elevator-with-printout", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": false, 
        "slug": "call-police", 
        "ending": false
      }
    ], 
    [
      {
        "index": 0, 
        "finished": true, 
        "slug": "finish-report", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "read-report", 
        "ending": false
      }, 
      {
        "index": 2, 
        "finished": true, 
        "slug": "print-report", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "run-to-elevator-with-printout", 
        "ending": false
      }, 
      {
        "index": 2, 
        "finished": true, 
        "slug": "go-back-to-office", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "follow-mitchell-inside", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "bluff-mitchell", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "wake-up-in-sandstone-cell", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "follow-line-of-people", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "attack-the-doctor", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "throw-glass", 
        "ending": true
      }
    ], 
    [
      {
        "index": 0, 
        "finished": true, 
        "slug": "finish-report", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "read-report", 
        "ending": false
      }, 
      {
        "index": 2, 
        "finished": true, 
        "slug": "print-report", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "run-to-elevator-with-printout", 
        "ending": false
      }, 
      {
        "index": 2, 
        "finished": true, 
        "slug": "go-back-to-office", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "follow-mitchell-inside", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "bluff-mitchell", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "wake-up-in-sandstone-cell", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "follow-line-of-people", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "attack-the-doctor", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "run-fast-through-lab", 
        "ending": true
      }
    ], 
    [
      {
        "index": 0, 
        "finished": true, 
        "slug": "finish-report", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "read-report", 
        "ending": false
      }, 
      {
        "index": 2, 
        "finished": true, 
        "slug": "print-report", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "run-to-elevator-with-printout", 
        "ending": false
      }, 
      {
        "index": 2, 
        "finished": true, 
        "slug": "go-back-to-office", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "follow-mitchell-inside", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "bluff-mitchell", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "wake-up-in-sandstone-cell", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "follow-line-of-people", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": false, 
        "slug": "take-the-needle", 
        "ending": false
      }
    ], 
    [
      {
        "index": 0, 
        "finished": true, 
        "slug": "finish-report", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "read-report", 
        "ending": false
      }, 
      {
        "index": 2, 
        "finished": true, 
        "slug": "print-report", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "run-to-elevator-with-printout", 
        "ending": false
      }, 
      {
        "index": 2, 
        "finished": true, 
        "slug": "go-back-to-office", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "follow-mitchell-inside", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "bluff-mitchell", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "wake-up-in-sandstone-cell", 
        "ending": false
      }, 
      {
        "index": 2, 
        "finished": true, 
        "slug": "escape-over-the-dune", 
        "ending": true
      }
    ], 
    [
      {
        "index": 0, 
        "finished": true, 
        "slug": "finish-report", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "read-report", 
        "ending": false
      }, 
      {
        "index": 2, 
        "finished": true, 
        "slug": "print-report", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "run-to-elevator-with-printout", 
        "ending": false
      }, 
      {
        "index": 2, 
        "finished": true, 
        "slug": "go-back-to-office", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "follow-mitchell-inside", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "tell-mitchell-the-truth", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "wake-up-in-sandstone-cell", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "catch-up-with-mitchell", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "attack-the-doctor", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "throw-glass", 
        "ending": true
      }
    ], 
    [
      {
        "index": 0, 
        "finished": true, 
        "slug": "finish-report", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "read-report", 
        "ending": false
      }, 
      {
        "index": 2, 
        "finished": true, 
        "slug": "print-report", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "run-to-elevator-with-printout", 
        "ending": false
      }, 
      {
        "index": 2, 
        "finished": true, 
        "slug": "go-back-to-office", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "follow-mitchell-inside", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "tell-mitchell-the-truth", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "wake-up-in-sandstone-cell", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "catch-up-with-mitchell", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "attack-the-doctor", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "run-fast-through-lab", 
        "ending": true
      }
    ], 
    [
      {
        "index": 0, 
        "finished": true, 
        "slug": "finish-report", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "read-report", 
        "ending": false
      }, 
      {
        "index": 2, 
        "finished": true, 
        "slug": "print-report", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "run-to-elevator-with-printout", 
        "ending": false
      }, 
      {
        "index": 2, 
        "finished": true, 
        "slug": "go-back-to-office", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "follow-mitchell-inside", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "tell-mitchell-the-truth", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "wake-up-in-sandstone-cell", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "catch-up-with-mitchell", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": false, 
        "slug": "take-the-needle", 
        "ending": false
      }
    ], 
    [
      {
        "index": 0, 
        "finished": true, 
        "slug": "finish-report", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "read-report", 
        "ending": false
      }, 
      {
        "index": 2, 
        "finished": true, 
        "slug": "print-report", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "run-to-elevator-with-printout", 
        "ending": false
      }, 
      {
        "index": 2, 
        "finished": true, 
        "slug": "go-back-to-office", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "follow-mitchell-inside", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "tell-mitchell-the-truth", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "wake-up-in-sandstone-cell", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "follow-line-of-people", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "attack-the-doctor", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "throw-glass", 
        "ending": true
      }
    ], 
    [
      {
        "index": 0, 
        "finished": true, 
        "slug": "finish-report", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "read-report", 
        "ending": false
      }, 
      {
        "index": 2, 
        "finished": true, 
        "slug": "print-report", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "run-to-elevator-with-printout", 
        "ending": false
      }, 
      {
        "index": 2, 
        "finished": true, 
        "slug": "go-back-to-office", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "follow-mitchell-inside", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "tell-mitchell-the-truth", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "wake-up-in-sandstone-cell", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "follow-line-of-people", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "attack-the-doctor", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "run-fast-through-lab", 
        "ending": true
      }
    ], 
    [
      {
        "index": 0, 
        "finished": true, 
        "slug": "finish-report", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "read-report", 
        "ending": false
      }, 
      {
        "index": 2, 
        "finished": true, 
        "slug": "print-report", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "run-to-elevator-with-printout", 
        "ending": false
      }, 
      {
        "index": 2, 
        "finished": true, 
        "slug": "go-back-to-office", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "follow-mitchell-inside", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "tell-mitchell-the-truth", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "wake-up-in-sandstone-cell", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "follow-line-of-people", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": false, 
        "slug": "take-the-needle", 
        "ending": false
      }
    ], 
    [
      {
        "index": 0, 
        "finished": true, 
        "slug": "finish-report", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "read-report", 
        "ending": false
      }, 
      {
        "index": 2, 
        "finished": true, 
        "slug": "print-report", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "run-to-elevator-with-printout", 
        "ending": false
      }, 
      {
        "index": 2, 
        "finished": true, 
        "slug": "go-back-to-office", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "follow-mitchell-inside", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "tell-mitchell-the-truth", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "wake-up-in-sandstone-cell", 
        "ending": false
      }, 
      {
        "index": 2, 
        "finished": true, 
        "slug": "escape-over-the-dune", 
        "ending": true
      }
    ], 
    [
      {
        "index": 0, 
        "finished": true, 
        "slug": "finish-report", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "read-report", 
        "ending": false
      }, 
      {
        "index": 2, 
        "finished": true, 
        "slug": "print-report", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "run-to-elevator-with-printout", 
        "ending": false
      }, 
      {
        "index": 2, 
        "finished": true, 
        "slug": "go-back-to-office", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "wait-for-mitchell-outside", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "confront-mitchell", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": false, 
        "slug": "surrender-to-mitchell", 
        "ending": false
      }
    ], 
    [
      {
        "index": 0, 
        "finished": true, 
        "slug": "finish-report", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "read-report", 
        "ending": false
      }, 
      {
        "index": 2, 
        "finished": true, 
        "slug": "print-report", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "run-to-elevator-with-printout", 
        "ending": false
      }, 
      {
        "index": 2, 
        "finished": true, 
        "slug": "go-back-to-office", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "wait-for-mitchell-outside", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "confront-mitchell", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "run-away-from-mitchell", 
        "ending": true
      }
    ], 
    [
      {
        "index": 0, 
        "finished": true, 
        "slug": "finish-report", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "read-report", 
        "ending": false
      }, 
      {
        "index": 2, 
        "finished": true, 
        "slug": "print-report", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "run-to-elevator-with-printout", 
        "ending": false
      }, 
      {
        "index": 2, 
        "finished": true, 
        "slug": "go-back-to-office", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "wait-for-mitchell-outside", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "sneak-in-after-mitchell-leaves", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "wake-up-in-sandstone-cell", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "follow-line-of-people", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "attack-the-doctor", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "throw-glass", 
        "ending": true
      }
    ], 
    [
      {
        "index": 0, 
        "finished": true, 
        "slug": "finish-report", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "read-report", 
        "ending": false
      }, 
      {
        "index": 2, 
        "finished": true, 
        "slug": "print-report", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "run-to-elevator-with-printout", 
        "ending": false
      }, 
      {
        "index": 2, 
        "finished": true, 
        "slug": "go-back-to-office", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "wait-for-mitchell-outside", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "sneak-in-after-mitchell-leaves", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "wake-up-in-sandstone-cell", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "follow-line-of-people", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "attack-the-doctor", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "run-fast-through-lab", 
        "ending": true
      }
    ], 
    [
      {
        "index": 0, 
        "finished": true, 
        "slug": "finish-report", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "read-report", 
        "ending": false
      }, 
      {
        "index": 2, 
        "finished": true, 
        "slug": "print-report", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "run-to-elevator-with-printout", 
        "ending": false
      }, 
      {
        "index": 2, 
        "finished": true, 
        "slug": "go-back-to-office", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "wait-for-mitchell-outside", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "sneak-in-after-mitchell-leaves", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "wake-up-in-sandstone-cell", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "follow-line-of-people", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": false, 
        "slug": "take-the-needle", 
        "ending": false
      }
    ], 
    [
      {
        "index": 0, 
        "finished": true, 
        "slug": "finish-report", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "read-report", 
        "ending": false
      }, 
      {
        "index": 2, 
        "finished": true, 
        "slug": "print-report", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "run-to-elevator-with-printout", 
        "ending": false
      }, 
      {
        "index": 2, 
        "finished": true, 
        "slug": "go-back-to-office", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "wait-for-mitchell-outside", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": true, 
        "slug": "sneak-in-after-mitchell-leaves", 
        "ending": false
      }, 
      {
        "index": 0, 
        "finished": true, 
        "slug": "wake-up-in-sandstone-cell", 
        "ending": false
      }, 
      {
        "index": 2, 
        "finished": true, 
        "slug": "escape-over-the-dune", 
        "ending": true
      }
    ], 
    [
      {
        "index": 0, 
        "finished": true, 
        "slug": "finish-report", 
        "ending": false
      }, 
      {
        "index": 1, 
        "finished": false, 
        "slug": "go-to-elevator", 
        "ending": false
      }
    ], 
    [
      {
        "index": 1, 
        "finished": false, 
        "slug": "quit", 
        "ending": false
      }
    ], 
    [
      {
        "index": 2, 
        "finished": false, 
        "slug": "pretend-to-finish", 
        "ending": false
      }
    ]
  ]
});
