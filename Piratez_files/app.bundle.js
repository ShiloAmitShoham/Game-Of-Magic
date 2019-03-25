(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./game/lib/plugins/root/visualizer/js/Controls.js":
/*!*********************************************************!*\
  !*** ./game/lib/plugins/root/visualizer/js/Controls.js ***!
  \*********************************************************/
/*! exports provided: $, jquery, jQuery, registerVisualizerRecipes, VisualizerController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerVisualizerRecipes", function() { return registerVisualizerRecipes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualizerController", function() { return VisualizerController; });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "$", function() { return jquery__WEBPACK_IMPORTED_MODULE_1___default.a; });
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "jquery", function() { return jquery__WEBPACK_IMPORTED_MODULE_1___default.a; });
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "jQuery", function() { return jquery__WEBPACK_IMPORTED_MODULE_1___default.a; });
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Replay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Replay */ "./game/lib/plugins/root/visualizer/js/Replay.js");
/* harmony import */ var _StartupOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StartupOptions */ "./game/lib/plugins/root/visualizer/js/StartupOptions.js");
/* harmony import */ var _AudioManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AudioManager */ "./game/lib/plugins/root/visualizer/js/AudioManager.js");
/* harmony import */ var _Visualizer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Visualizer */ "./game/lib/plugins/root/visualizer/js/Visualizer.js");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Config */ "./game/lib/plugins/root/visualizer/js/Config.js");
/* harmony import */ var _visualizer_src_components_mana_container_mana_container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../visualizer/src/components/mana-container/mana-container */ "./game/lib/visualizer/src/components/mana-container/mana-container.js");
/* harmony import */ var _visualizer_src_components_player_ui_player_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../visualizer/src/components/player-ui/player-ui */ "./game/lib/visualizer/src/components/player-ui/player-ui.js");
/* harmony import */ var _visualizer_src_components_controls_bar_controls_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../visualizer/src/components/controls-bar/controls-bar */ "./game/lib/visualizer/src/components/controls-bar/controls-bar.js");
/* harmony import */ var _visualizer_src_components_volume_button_volume_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../visualizer/src/components/volume-button/volume-button */ "./game/lib/visualizer/src/components/volume-button/volume-button.js");
/* harmony import */ var _visualizer_src_components_debug_window_debug_window__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../visualizer/src/components/debug-window/debug-window */ "./game/lib/visualizer/src/components/debug-window/debug-window.js");
/* harmony import */ var _visualizer_src_components_amulet_amulet__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../visualizer/src/components/amulet/amulet */ "./game/lib/visualizer/src/components/amulet/amulet.js");
/* harmony import */ var _visualizer_src_components_information_information__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../visualizer/src/components/information/information */ "./game/lib/visualizer/src/components/information/information.js");
/* harmony import */ var _visualizer_src_components_amulet_after_amulet_after__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../visualizer/src/components/amulet-after/amulet-after */ "./game/lib/visualizer/src/components/amulet-after/amulet-after.js");
/* harmony import */ var _visualizer_src_components_intro_video_intro_video__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../visualizer/src/components/intro-video/intro-video */ "./game/lib/visualizer/src/components/intro-video/intro-video.js");
/* harmony import */ var _PluginManager__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ~PluginManager */ "./game/lib/visualizer/src/bin/PluginManager.json");
var _PluginManager__WEBPACK_IMPORTED_MODULE_17___namespace = /*#__PURE__*/__webpack_require__.t(/*! ~PluginManager */ "./game/lib/visualizer/src/bin/PluginManager.json", 1);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



 // This is necessary to resolve circular imports. Don't ask, don't touch.

















var registerVisualizerRecipes = function registerVisualizerRecipes(app) {
  return app.service('visualizer', _Visualizer__WEBPACK_IMPORTED_MODULE_6__["Visualizer"]).component('playerUi', _visualizer_src_components_player_ui_player_ui__WEBPACK_IMPORTED_MODULE_9__["PlayerUI"]).component('controlsBar', _visualizer_src_components_controls_bar_controls_bar__WEBPACK_IMPORTED_MODULE_10__["controlsBar"]).component('manaContainer', _visualizer_src_components_mana_container_mana_container__WEBPACK_IMPORTED_MODULE_8__["ManaContainer"]).component('volumeButton', _visualizer_src_components_volume_button_volume_button__WEBPACK_IMPORTED_MODULE_11__["VolumeButton"]).component('debugWindow', _visualizer_src_components_debug_window_debug_window__WEBPACK_IMPORTED_MODULE_12__["debugWindow"]).component('amulet', _visualizer_src_components_amulet_amulet__WEBPACK_IMPORTED_MODULE_13__["amulet"]).component('information', _visualizer_src_components_information_information__WEBPACK_IMPORTED_MODULE_14__["information"]).component('amuletAfter', _visualizer_src_components_amulet_after_amulet_after__WEBPACK_IMPORTED_MODULE_15__["amuletAfter"]).component('introVideo', _visualizer_src_components_intro_video_intro_video__WEBPACK_IMPORTED_MODULE_16__["introVideo"]).controller('VisualizerController', VisualizerController);
};
/**
 * The class of the controller for the visualizer's angular.
 */

var VisualizerController =
/*#__PURE__*/
function () {
  /**
   * Creates a controller for the visualizer's angular.
   *
   * @param {angular.IScope} $scope - The angular's scope.
   * @param {angular.IRootScopeService} $rootScope - The angular's root scope.
   * @param {angular.IWindowService} $window - The window service.
   * @param {Visualizer} visualizer - The visualizer service.
   */
  function VisualizerController($scope, $rootScope, $window, visualizer) {
    var _this = this;

    _classCallCheck(this, VisualizerController);

    this.scope = $scope;
    this.visualizer = visualizer;
    this.webkitDebugTurn = null;
    this.window = $window;
    this.updateSeekBar(); // Preload avatar background images

    this.avatarBackgroundImage = this.visualizer.options.data_dir + 'root/visualizer/data/css/images/map/avatars/Avatar_Background.png'; // Initialize the visualizer

    this.init(); // Used by the webkit - called when a new game is run

    $rootScope.$on('initVisualizer', function (event, data) {
      var replayData = JSON.parse(window.replayData);

      if (_this.visualizer.state.replay) {
        _this.visualizer.state.replay.meta.debugMessages = replayData.debugMessages;
        _this.scope.debugMessages = null;
      }

      _this.init(); // Initialize the new visualizer

    });
    this.loadedBackground = false;
    $rootScope.$on('visualizer-drawn', this.updateExternalView.bind(this));
    $rootScope.$on('loaded-background',
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.loadedBackground = true;
              _context.next = 3;
              return new Promise(function (resolve) {
                return setTimeout(resolve, 200);
              });

            case 3:
              _this.scope.$apply();

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))); // These are the different music types allowed in the game. Required for angular to work correctly on the html.

    this.AudioType = _AudioManager__WEBPACK_IMPORTED_MODULE_5__["AudioType"]; // Generate the keyboard shortcuts

    this.createKeyboardShortcuts();
    this.displayModeOn = false;
    this.mainPageShowing = true;
    /**
     * This is a handler for when the window loses focus (isn't active).
     *
     * @param {FocusEvent} event - The input event.
     */

    window.onblur = function (event) {
      if (_this.visualizer.director.isPlaying) {
        _this.visualizer.togglePlay();
      }
    };
    /**
     * This is a handler for when the window gains focus (is active).
     *
     * @param {FocusEvent} event - The input event.
     */


    window.onfocus = function (event) {
      window.setTimeout(function () {
        return _this.visualizer.director.loop(0);
      }, 0);
    };
    /**
     * @type {boolean}
     */


    this.shouldDrawThronezExtensions = _PluginManager__WEBPACK_IMPORTED_MODULE_17__.plugins.includes('theme/knightz');
  }
  /**
   * Whether the settings menu is open.
   *
   * @type {boolean}
   */


  _createClass(VisualizerController, [{
    key: "init",

    /**
     * Initializing the visualizer.
     * This is called both when the visualizer is starting and when a new game is being run in the webkit.
     */
    value: function init() {
      var _this2 = this;

      this.webkitDebugTurn = null; // Starts the visualizer

      setTimeout(function () {
        // If there is already one, clean it up
        if (_this2.visualizer !== undefined) {
          _this2.visualizer.cleanUp();
        } // Creates a new visualizer and proceeds initializing it


        var canvas = document.getElementById('game-canvas');

        _this2.visualizer.init(canvas);

        _this2.visualizer.loadReplayData(window.replayData).then(function () {
          return _this2.scope.$apply();
        });

        _this2.visualizer.isLoading.then(function () {
          _this2.backgroundImage = _this2.visualizer.state.imageManager.images.background.src;
          _this2.visualizer.state.time = 0;
        });
      }, 0);
      var resizeId;
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).resize(function () {
        clearTimeout(resizeId);
        resizeId = setTimeout(function () {
          return _this2.visualizer.resize(true);
        }, 250);
      });
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('.game').toggleClass('full-screen');
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('.game *').toggleClass('full-screen');
    }
    /**
     * The current turn.
     *
     * @readonly
     * @type {number}
     */

  }, {
    key: "updateExternalView",

    /**
     * Recalculates the controller's properties given the current state,
     * and updates the HTML view by calling to scope.$apply.
     */
    value: function updateExternalView() {
      var _this3 = this;

      setTimeout(function () {
        _this3.scope.$apply(function () {
          var state = _this3.visualizer.state;
          var replay = state.replay;

          if (!replay) {
            return;
          } // Send debug messages to parent scope, so that the "debug message" area in webkit gets the messages\


          if (!_this3.scope.debugMessages && replay) {
            var res = _this3.debugMessages;
            _this3.scope.debugMessages = res;

            _this3.scope.$emit('updateDebugMessages', res);
          }

          var isLastTurn = _this3.turn >= replay.turns; // Send turn to parent scope, for the use of the debug area in the webkit

          if (_this3.webkitDebugTurn === null || _this3.webkitDebugTurn !== _this3.displayTurn) {
            _this3.webkitDebugTurn = _this3.displayTurn;

            _this3.scope.$emit('updateTurn', _this3.webkitDebugTurn);
          } // Update info related to the menu


          _this3.updateMenuInfo();

          if (isLastTurn) {
            // Play win song
            if (!state.hasPlayedWinSong) {
              // Amulet music instead of pirate win theme.
              // this.visualizer.state.audioManager.play('win', 'win', 0.4);
              state.hasPlayedWinSong = true;

              _this3.visualizer.director.stop();

              _this3.visualizer.runEndingAnimation();
            }
          } else {
            // DON'T play win song
            _this3.visualizer.state.audioManager.endAudio('win');

            state.hasPlayedWinSong = false;
          }
        });
      }, 0);
    }
    /**
     * Updates info related to the menu.
     */

  }, {
    key: "updateMenuInfo",
    value: function updateMenuInfo() {
      var config = this.visualizer.state.config;

      if (!this.menuInfo) {
        this.menuInfo = config.menuConfigs;
      }
    }
    /**
     * Create array of descriptions of keyboard shortcuts, displayed in the visualizer sidebar.
     */

  }, {
    key: "createKeyboardShortcuts",
    value: function createKeyboardShortcuts() {
      this.shortcuts = [["\u2192", 'Go one turn forward'], ["\u2190", 'Go one turn back'], ["\u2191", 'Play faster'], ["\u2193", 'Play slower'], ['Space', 'Play / pause'], ['Home', 'Go to first turn'], ['End', 'Go to last turn'], ['Esc', 'Toggle full screen mode'], ['H', 'Toggle whether the hint is displayed or not'], ['M', 'Open settings menu'], ['S', 'Open settings menu']];
    }
    /**
     * Resets the options back to default.
     */

  }, {
    key: "resetOptions",
    value: function resetOptions() {
      this.visualizer.state.config = new _Config__WEBPACK_IMPORTED_MODULE_7__["Config"](false);
      this.menuInfo = this.visualizer.state.config.menuConfigs;
      this.visualizer.state.audioManager.toggleInPlayAudioMute(_AudioManager__WEBPACK_IMPORTED_MODULE_5__["AudioType"].SOUND); // Unmute sounds

      this.visualizer.state.audioManager.toggleInPlayAudioMute(_AudioManager__WEBPACK_IMPORTED_MODULE_5__["AudioType"].MUSIC); // Unmute music

      this.visualizer.state.redrawRequired = true;
      this.visualizer.director.draw(); // Save the options to local storage

      this.visualizer.state.config.saveConfig();
    }
    /**
     * The debug messages of the bots.
     *
     * @type {Array<Object<number, string>>}
     */

  }, {
    key: "updateSeekBar",

    /**
     * Updates the seek bar.
     * Adds all the listeners to the seek bar.
     */
    value: function updateSeekBar() {
      var _this4 = this;

      var barContainer = document.querySelector('.seek-bar-container');
      var progressBar = document.querySelector('#progress-bar');
      var mouseDown = false;

      var updateTurn = function updateTurn(e) {
        var x = e.clientX;
        progressBar.style.width = "".concat(x / barContainer.offsetWidth * 100, "%");
        var tick = x / barContainer.offsetWidth * _this4.visualizer.state.replay.turns;

        if (tick < _this4.visualizer.state.replay.turns) {
          _this4.scope.$emit('removeAnimations');
        }

        _this4.visualizer.director.gotoTick(tick);
      };

      barContainer.addEventListener('mousedown', function (e) {
        barContainer.classList.add('mouse-down');
        mouseDown = true;
        updateTurn(e);
      });
      this.window.addEventListener('mouseup', function (_) {
        mouseDown = false;
        barContainer.classList.remove('mouse-down');
      });
      this.window.addEventListener('dragend', function (e) {
        if (mouseDown) {
          barContainer.classList.remove('mouse-down');
          updateTurn(e);
        }

        mouseDown = false;
      });
      this.window.addEventListener('drag', function (e) {
        if (mouseDown) {
          barContainer.classList.add('mouse-down');
          updateTurn(e);
        }
      });
      this.window.addEventListener('mousemove', function (e) {
        if (mouseDown) {
          barContainer.classList.add('mouse-down');
          updateTurn(e);
        }
      });
    }
    /**
    * @param {string} str - String that the first char in whice word change to upper case.
    */

  }, {
    key: "title",
    value: function title(str) {
      return str.split(' ').map(function (s) {
        return s.charAt(0).toUpperCase() + s.substring(1);
      }).join(' ');
    }
  }, {
    key: "settingsOpen",
    get: function get() {
      return this.visualizer.settingsOpen;
    }
    /**
     * Whether the information is open.
     *
     * @type {boolean}
     */

  }, {
    key: "informationOpen",
    get: function get() {
      return this.visualizer.informationOpen;
    }
    /**
     * @type {StartupOptions}
     */

  }, {
    key: "options",
    get: function get() {
      return this.visualizer.options;
    }
  }, {
    key: "turn",
    get: function get() {
      return this.visualizer.turn;
    }
    /**
     * Returns the turn for display.
     *
     * @readonly
     * @type {number}
     */

  }, {
    key: "displayTurn",
    get: function get() {
      return this.visualizer.displayTurn;
    }
    /**
     * @type {Object}
     */

  }, {
    key: "mainElementStyle",
    get: function get() {
      return {
        'background-image': "url('".concat(this.visualizer.backgroundImage, "')"),
        transition: this.loadedBackground && this.visualizer.state.config.showAmulet && this.visualizer.state.config.showAmulet.is('on') ? 'background 2s linear' : 'none',
        position: 'relative'
      };
    }
  }, {
    key: "debugMessages",
    get: function get() {
      return this.visualizer.state.replay.meta.debugMessages;
    }
  }]);

  return VisualizerController;
}();
VisualizerController.$inject = ['$scope', '$rootScope', '$window', 'visualizer'];

if (!window.isWebkit) {
  registerVisualizerRecipes(angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('visualizerApp', []));
}

/***/ }),

/***/ "./game/lib/visualizer/src/components/amulet-after/amulet-after.html":
/*!***************************************************************************!*\
  !*** ./game/lib/visualizer/src/components/amulet-after/amulet-after.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"amulet-after-div\" id=\"kamea-after\">\n    <img ng-src=\"{{ $ctrl.amulet }}\" id=\"amuletAfter\">\n    <img ng-src=\"{{ $ctrl.brokenAmulet }}\" id=\"brokenAfter\">\n    <img ng-src=\"{{ $ctrl.amuletLeft }}\" id=\"amuletLeftAfter\">\n    <img ng-src=\"{{ $ctrl.amuletRight }}\" id=\"amuletRightAfter\">\n    <img ng-src=\"{{ $ctrl.winner }}\" id=\"winner-image\">\n    <img ng-src=\"{{ $ctrl.winnerAmulet }}\" id=\"winnerAmulet\">\n    <img ng-src=\"{{ $ctrl.winnerMep }}\" id=\"winner-image-mep\">\n    <p id=\"winner-name\"> {{ $ctrl.winnerName }} </p>\n</div>"

/***/ }),

/***/ "./game/lib/visualizer/src/components/amulet-after/amulet-after.js":
/*!*************************************************************************!*\
  !*** ./game/lib/visualizer/src/components/amulet-after/amulet-after.js ***!
  \*************************************************************************/
/*! exports provided: amuletAfter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amuletAfter", function() { return amuletAfter; });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _root_Visualizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~root/Visualizer */ "./game/lib/plugins/root/visualizer/js/Visualizer.js");
/* harmony import */ var _amulet_after_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./amulet-after.html */ "./game/lib/visualizer/src/components/amulet-after/amulet-after.html");
/* harmony import */ var _amulet_after_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_amulet_after_html__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _amulet_after_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./amulet-after.scss */ "./game/lib/visualizer/src/components/amulet-after/amulet-after.scss");
/* harmony import */ var _amulet_after_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_amulet_after_scss__WEBPACK_IMPORTED_MODULE_3__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





/**
 * The amulet including in the game.
 */

var AmuletAfterController =
/*#__PURE__*/
function () {
  /**
   * @param {Visualizer} visualizer - The visualizer service.
   * @param {angular.IRootScopeService} $rootScope - The visualizer service.
   */
  function AmuletAfterController(visualizer, $rootScope) {
    var _this = this;

    _classCallCheck(this, AmuletAfterController);

    this.visualizer = visualizer;
    this.$rootScope = $rootScope;

    if (visualizer.state.config.showAmulet.is('on')) {
      this.$rootScope.$on('removeAnimations', function () {
        _this.visualizer.canvas.style.animation = 'add-opacity 0ms forwards';
        document.getElementById('amulets-after-container').style.display = 'none';
      });
      this.$rootScope.$on('openingAnimation', function () {
        _this.visualizer.canvas.style.animation = 'add-opacity 0ms forwards';
        document.getElementById('amulets-after-container').style.display = 'none !important';
      });
      this.$rootScope.$on('endingAnimation', function () {
        if (document.getElementById('amulets-after-container').style.display === 'none') {
          _this.visualizer.state.audioManager.play('unite', 'unite', 1, false); // Start play background music


          _this.visualizer.canvas.style.animation = 'remove-opacity 1000ms forwards';
          document.getElementById('amulets-container').style.display = 'none';
          document.getElementById('kamea-after').style.display = 'block';
          document.getElementById('amulets-after-container').style.display = 'block';
          var winnerNames = _this.visualizer.state.replay.meta.winnerNames;

          if (winnerNames.length !== 1) {
            document.getElementById('winner-image').style.display = 'none';
            document.getElementById('winnerAmulet').style.display = 'none';
          }
        }
      });
    } else {
      document.getElementById('amulets-after-container').style.display = 'none';
    }
  }
  /**
   * Returns the winner background color.
   */


  _createClass(AmuletAfterController, [{
    key: "winnerAmulet",
    get: function get() {
      if (this.visualizer.state.replay) {
        var winnerNames = this.visualizer.state.replay.meta.winnerNames;

        if (winnerNames.length === 1) {
          if (this.visualizer.state.replay.meta.playerNames.indexOf(winnerNames[0]) == 0) {
            return this.visualizer.state.imageManager.images.winner_amulet_orange.src;
          }

          return this.visualizer.state.imageManager.images.winner_amulet_pink.src;
        }
      }

      return null;
    }
    /**
     * Returns the mep background of the winner.
     */

  }, {
    key: "winnerMep",
    get: function get() {
      return this.visualizer.state.imageManager.images.winner_mep.src;
    }
    /**
     * Returns the winner icon.
     */

  }, {
    key: "winner",
    get: function get() {
      if (this.visualizer.state.replay) {
        var winnerNames = this.visualizer.state.replay.meta.winnerNames;

        if (winnerNames.length === 1) {
          return this.visualizer.state.options.playersAvatar[this.visualizer.state.replay.meta.playerNames.indexOf(winnerNames[0])];
        }
      }

      return null;
    }
    /**
     * The real winner name (The ones from the replays will be the id's in the backend instead of the real names).
     *
     * @type {string}
     */

  }, {
    key: "winnerName",
    get: function get() {
      if (!this.visualizer.state.replay) {
        return 'Draw';
      }

      var replayWinners = this.visualizer.state.replay.meta.winnerNames;

      if (replayWinners.length !== 1) {
        return 'Draw';
      }

      var winner = replayWinners[0];
      return this.visualizer.playerNames[this.visualizer.state.replay.meta.playerNames.indexOf(winner)];
    }
    /**
     * Returns the regular amulet image.
     */

  }, {
    key: "amulet",
    get: function get() {
      return this.visualizer.state.imageManager.images.amulet.src;
    }
    /**
     * Returns the broken amulet image.
     */

  }, {
    key: "brokenAmulet",
    get: function get() {
      return this.visualizer.state.imageManager.images.broken_amulet.src;
    }
    /**
     * Returns the frozen amulet image.
     */

  }, {
    key: "frozenBrokenAmulet",
    get: function get() {
      return this.visualizer.state.imageManager.images.frozen_broken_amulet.src;
    }
    /**
     * Returns the left side of the amulet image.
     */

  }, {
    key: "amuletLeft",
    get: function get() {
      return this.visualizer.state.imageManager.images.left_half_amulet.src;
    }
    /**
     * Returns the right side of the amulet image.
     */

  }, {
    key: "amuletRight",
    get: function get() {
      return this.visualizer.state.imageManager.images.right_half_amulet.src;
    }
    /**
     * Returns the bigger image of particles.
     */

  }, {
    key: "bigParticles",
    get: function get() {
      return this.visualizer.state.imageManager.images.big_particles.src;
    }
    /**
     * Returns the image of particles.
     */

  }, {
    key: "smallParticles",
    get: function get() {
      return this.visualizer.state.imageManager.images.small_particles.src;
    }
  }]);

  return AmuletAfterController;
}();

AmuletAfterController.$inject = ['visualizer', '$rootScope'];
/**
 * @type {angular.IComponentOptions}
 */

var amuletAfter = {
  controller: AmuletAfterController,
  template: _amulet_after_html__WEBPACK_IMPORTED_MODULE_2___default.a
};

/***/ }),

/***/ "./game/lib/visualizer/src/components/amulet-after/amulet-after.scss":
/*!***************************************************************************!*\
  !*** ./game/lib/visualizer/src/components/amulet-after/amulet-after.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/sass-loader/lib/loader.js!./amulet-after.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./game/lib/visualizer/src/components/amulet-after/amulet-after.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./game/lib/visualizer/src/components/amulet/amulet.html":
/*!***************************************************************!*\
  !*** ./game/lib/visualizer/src/components/amulet/amulet.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"amulet-div\" id=\"amulet-before\">\n    <img ng-src=\"{{ $ctrl.amulet }}\" id=\"amulet\">\n    <img ng-src=\"{{ $ctrl.brokenAmulet }}\" id=\"broken\">\n    <img ng-src=\"{{ $ctrl.frozenBrokenAmulet }}\" id=\"frozenBroken\">\n    <img ng-src=\"{{ $ctrl.amuletLeft }}\" id=\"amuletLeft\">\n    <img ng-src=\"{{ $ctrl.amuletRight }}\" id=\"amuletRight\">\n    <img ng-src=\"{{ $ctrl.smallParticles }}\" id=\"smallParticles\">\n    <img ng-src=\"{{ $ctrl.bigParticles }}\" id=\"bigParticles\">\n</div>"

/***/ }),

/***/ "./game/lib/visualizer/src/components/amulet/amulet.js":
/*!*************************************************************!*\
  !*** ./game/lib/visualizer/src/components/amulet/amulet.js ***!
  \*************************************************************/
/*! exports provided: amulet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amulet", function() { return amulet; });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _root_Visualizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~root/Visualizer */ "./game/lib/plugins/root/visualizer/js/Visualizer.js");
/* harmony import */ var _amulet_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./amulet.html */ "./game/lib/visualizer/src/components/amulet/amulet.html");
/* harmony import */ var _amulet_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_amulet_html__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _amulet_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./amulet.scss */ "./game/lib/visualizer/src/components/amulet/amulet.scss");
/* harmony import */ var _amulet_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_amulet_scss__WEBPACK_IMPORTED_MODULE_3__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





/**
 * The amulet including in the game.
 */

var AmuletController =
/*#__PURE__*/
function () {
  /**
   * @param {Visualizer} visualizer - The visualizer service.
   * @param {angular.IRootScopeService} $rootScope - The visualizer service.
   */
  function AmuletController(visualizer, $rootScope) {
    var _this = this;

    _classCallCheck(this, AmuletController);

    this.visualizer = visualizer;
    this.$rootScope = $rootScope;

    if (visualizer.state.config.showAmulet.is('on')) {
      this.$rootScope.$on('doStartingAnimation', function () {
        _this.visualizer.state.audioManager.audioPrototypes.background.audio.volume = 0.1;

        _this.visualizer.state.audioManager.play('brake', 'brake', 1, false);

        setTimeout(function () {
          _this.visualizer.state.audioManager.audioPrototypes.background.audio.volume = 1;
        }, 8000);
        visualizer.backgroundImage = visualizer.state.imageManager.images.background.src;
        document.getElementById('amulets-after-container').style.display = 'none';
        setTimeout(function () {
          visualizer.map.canvasObjects = visualizer.map.canvasObjects.filter(function (i) {
            return i.objectType === 'Castle';
          });
          visualizer.ctx.clearRect(0, 0, visualizer.canvas.width, visualizer.canvas.height);
          visualizer.map.validate();
          visualizer.ctx.drawImage(visualizer.map.canvas, 0, 0);
          visualizer.drawMouseSquare();
        }, 100);
        document.getElementById('amulets-container').style.display = 'block';
        document.getElementById('amulet-before').style.display = 'block';
        document.getElementById('amulet').style.display = 'block';
        document.getElementById('broken').style.display = 'block';
        document.getElementById('frozenBroken').style.display = 'block';
        document.getElementById('amuletLeft').style.display = 'block';
        document.getElementById('amuletRight').style.display = 'block';
        setTimeout(function () {
          document.getElementById('amulets-container').style.display = 'none';
        }, 7000);
      });
      this.$rootScope.$on('endingAnimation', function () {
        document.getElementById('amulets-container').style.display = 'none';
      });
      this.$rootScope.$on('removeAnimations', function () {
        document.getElementById('amulets-container').style.display = 'none';
        document.getElementById('amulet').style.display = 'none';
        document.getElementById('broken').style.display = 'none';
        document.getElementById('frozenBroken').style.display = 'none';
        document.getElementById('amuletLeft').style.display = 'none';
        document.getElementById('amuletRight').style.display = 'none';
      });
    } else {
      document.getElementById('amulets-container').style.display = 'none';
    }
  }
  /**
   * Returns the regular amulet image.
   */


  _createClass(AmuletController, [{
    key: "amulet",
    get: function get() {
      return this.visualizer.state.imageManager.images.amulet.src;
    }
    /**
     * Returns the broken amulet image.
     */

  }, {
    key: "brokenAmulet",
    get: function get() {
      return this.visualizer.state.imageManager.images.broken_amulet.src;
    }
    /**
     * Returns the frozen amulet image.
     */

  }, {
    key: "frozenBrokenAmulet",
    get: function get() {
      return this.visualizer.state.imageManager.images.frozen_broken_amulet.src;
    }
    /**
     * Returns the left side of the amulet image.
     */

  }, {
    key: "amuletLeft",
    get: function get() {
      return this.visualizer.state.imageManager.images.left_half_amulet.src;
    }
    /**
     * Returns the right side of the amulet image.
     */

  }, {
    key: "amuletRight",
    get: function get() {
      return this.visualizer.state.imageManager.images.right_half_amulet.src;
    }
    /**
     * Returns the bigger image of particles.
     */

  }, {
    key: "bigParticles",
    get: function get() {
      return this.visualizer.state.imageManager.images.big_particles.src;
    }
    /**
     * Returns the image of particles.
     */

  }, {
    key: "smallParticles",
    get: function get() {
      return this.visualizer.state.imageManager.images.small_particles.src;
    }
  }]);

  return AmuletController;
}();

AmuletController.$inject = ['visualizer', '$rootScope'];
/**
 * @type {angular.IComponentOptions}
 */

var amulet = {
  controller: AmuletController,
  template: _amulet_html__WEBPACK_IMPORTED_MODULE_2___default.a
};

/***/ }),

/***/ "./game/lib/visualizer/src/components/amulet/amulet.scss":
/*!***************************************************************!*\
  !*** ./game/lib/visualizer/src/components/amulet/amulet.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/sass-loader/lib/loader.js!./amulet.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./game/lib/visualizer/src/components/amulet/amulet.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./game/lib/visualizer/src/components/controls-bar/controls-bar.html":
/*!***************************************************************************!*\
  !*** ./game/lib/visualizer/src/components/controls-bar/controls-bar.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img ng-if=\"$ctrl.visualizer.showOrnaments\" class=\"bottom-ornament\" ng-src=\"{{ $ctrl.visualizer.state.imageManager.images.bottom_left.src }}\">\n\n<div id=\"left-settings\" class=\"controls-bar-section\">\n    <i class=\"button fas fa-caret-left\" ng-click=\"$ctrl.prevTurn()\"></i>\n    <i class=\"button fas {{$ctrl.isPlaying ? 'fa-pause' : 'fa-play'}}\" ng-click=\"$ctrl.visualizer.togglePlay()\"></i>\n    <i class=\"button fas fa-caret-right\" ng-click=\"$ctrl.nextTurn()\"></i>\n    <div class=\"controls-speed-section\">\n        <select class=\"custom-select menu-text\" ng-model=\"currentSpeed\" ng-change=\"$ctrl.updateSpeed()\" ng-init=\"1\"\n            ng-options=\"speed as 'Speed ' + speed + 'x' for speed in $ctrl.visualizer.playSpeeds\">\n        </select>\n    </div>\n</div>\n<div class=\"controls-bar-section\" id=\"turn-container\" ng-style=\"{'background-image': 'url(' + $ctrl.visualizer.state.imageManager.images.turn_bg.src + ')'}\">\n    <span id=\"turn\">\n        Turn {{ $ctrl.displayTurn }}/{{ $ctrl.visualizer.state.replay && $ctrl.visualizer.state.replay.turns }}\n    </span>\n</div>\n<div class=\"controls-bar-section\" id=\"right-settings\">\n    <i id=\"info-params\" class=\"fas fa-book-open button\" ng-click=\"$ctrl.visualizer.changeAfterClickInfo()\" ></i>\n    <volume-button></volume-button>\n    <i id=\"settings-button\" class=\"button fas fa-cog rotate-{{$ctrl.settingsOpen ? 'open' : 'close'}}\" ng-click=\"$ctrl.visualizer.toggleSettingsMenu()\"></i>\n    <i class=\"fas fa-expand game-full-screen button\" ng-click=\"$ctrl.toggleFullScreen()\"></i>\n</div>\n<img ng-if=\"$ctrl.visualizer.showOrnaments\" class=\"bottom-ornament\" ng-src=\"{{ $ctrl.visualizer.state.imageManager.images.bottom_right.src }}\">"

/***/ }),

/***/ "./game/lib/visualizer/src/components/controls-bar/controls-bar.js":
/*!*************************************************************************!*\
  !*** ./game/lib/visualizer/src/components/controls-bar/controls-bar.js ***!
  \*************************************************************************/
/*! exports provided: controlsBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "controlsBar", function() { return controlsBar; });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controls_bar_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controls-bar.html */ "./game/lib/visualizer/src/components/controls-bar/controls-bar.html");
/* harmony import */ var _controls_bar_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_controls_bar_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _root_Visualizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~root/Visualizer */ "./game/lib/plugins/root/visualizer/js/Visualizer.js");
/* harmony import */ var _controls_bar_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controls-bar.scss */ "./game/lib/visualizer/src/components/controls-bar/controls-bar.scss");
/* harmony import */ var _controls_bar_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_controls_bar_scss__WEBPACK_IMPORTED_MODULE_3__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





/** */

var controlsBarController =
/*#__PURE__*/
function () {
  /**
   * @param {Visualizer} visualizer - The visualizer service.
   * @param {angular.IScope} scope - The angular scope.
   */
  function controlsBarController(visualizer, scope) {
    var _this = this;

    _classCallCheck(this, controlsBarController);

    this.visualizer = visualizer;
    this.scope = scope;
    this.scope.$watch('$ctrl.visualizer.director.playSpeed', function (newSpeed) {
      _this.scope.currentSpeed = newSpeed;
    });
  }
  /** */


  _createClass(controlsBarController, [{
    key: "$onInit",
    value: function $onInit() {
      this.scope.currentSpeed = 1;
    }
    /**
     * Current turn.
     *
     * @type {number}
     * @readonly
     */

  }, {
    key: "play",

    /**
     * Orders the director to resume playing.
     */
    value: function play() {
      this.visualizer.director.play();
    }
    /**
     * Orders the director to go to the first turn.
     */

  }, {
    key: "firstTurn",
    value: function firstTurn() {
      this.visualizer.director.gotoTick(0);
    }
    /**
     * Orders the director to go to the last turn.
     */

  }, {
    key: "lastTurn",
    value: function lastTurn() {
      this.visualizer.director.gotoTick(this.visualizer.director.duration);
    }
    /**
     * Orders the director to go to the previous turn.
     */

  }, {
    key: "prevTurn",
    value: function prevTurn() {
      this.scope.$emit('removeAnimations');
      this.visualizer.director.gotoTick(Math.ceil(this.visualizer.state.time) - 1);
    }
    /**
     * Orders the director to go to the next turn.
     */

  }, {
    key: "nextTurn",
    value: function nextTurn() {
      this.scope.$emit('removeAnimations');
      this.visualizer.director.gotoTick(this.turn + 1);
    }
    /**
     * Whether the settings menu is open.
     *
     * @type {boolean}
     */

  }, {
    key: "updateSpeed",

    /**
     * Changes the replay speed. {@see Visualizer.setSpeed}.
     *
     */
    value: function updateSpeed() {
      this.visualizer.setSpeed(this.scope.currentSpeed);
    }
  }, {
    key: "turn",
    get: function get() {
      return this.visualizer && this.visualizer.map ? this.visualizer.map.turn : 0;
    }
    /**
     * Set turn.
     *
     * @param {number} turn - The turn to set to.
     */
    ,
    set: function set(turn) {
      if (!this.visualizer || !this.visualizer.director) {
        return;
      }

      this.visualizer.director.gotoTick(turn);
    }
    /**
     * Returns the turn for display.
     */

  }, {
    key: "displayTurn",
    get: function get() {
      return this.visualizer ? this.visualizer.displayTurn : 0;
    }
  }, {
    key: "settingsOpen",
    get: function get() {
      return this.visualizer.settingsOpen;
    }
    /**
     * Whether the visualizer is playing or paused.
     *
     * @type {boolean}
     */

  }, {
    key: "isPlaying",
    get: function get() {
      return this.visualizer.director.isPlaying;
    }
  }]);

  return controlsBarController;
}();

controlsBarController.$inject = ['visualizer', '$scope'];
/**
 * @type {angular.IComponentOptions}
 */

var controlsBar = {
  controller: controlsBarController,
  template: _controls_bar_html__WEBPACK_IMPORTED_MODULE_1___default.a
};

/***/ }),

/***/ "./game/lib/visualizer/src/components/controls-bar/controls-bar.scss":
/*!***************************************************************************!*\
  !*** ./game/lib/visualizer/src/components/controls-bar/controls-bar.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/sass-loader/lib/loader.js!./controls-bar.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./game/lib/visualizer/src/components/controls-bar/controls-bar.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./game/lib/visualizer/src/components/debug-window/debug-window.html":
/*!***************************************************************************!*\
  !*** ./game/lib/visualizer/src/components/debug-window/debug-window.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"debug-window\"\nng-style=\"$ctrl.styleBySide()\"\n>   \n    <img ng-src=\"{{ $ctrl.debugPictureTitle }}\" class=\"debug-title\">\n    <div class=\"inner-debug\">\n        <div class=\"scroll-debug\">\n            <div ng-repeat=\"debug in $ctrl.degubMesseges track by $index\" class=\"debug-text\">\n                {{ debug }} <hr/>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./game/lib/visualizer/src/components/debug-window/debug-window.js":
/*!*************************************************************************!*\
  !*** ./game/lib/visualizer/src/components/debug-window/debug-window.js ***!
  \*************************************************************************/
/*! exports provided: debugWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debugWindow", function() { return debugWindow; });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _root_Visualizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~root/Visualizer */ "./game/lib/plugins/root/visualizer/js/Visualizer.js");
/* harmony import */ var _debug_window_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./debug-window.html */ "./game/lib/visualizer/src/components/debug-window/debug-window.html");
/* harmony import */ var _debug_window_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_debug_window_html__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _debug_window_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./debug-window.scss */ "./game/lib/visualizer/src/components/debug-window/debug-window.scss");
/* harmony import */ var _debug_window_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_debug_window_scss__WEBPACK_IMPORTED_MODULE_3__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





/**
 * The debug window for each player.
 */

var DebugWindowController =
/*#__PURE__*/
function () {
  /**
      * @param {Visualizer} visualizer - The visualizer service.
      * @param {angular.IRootScopeService} $rootScope - The visualizer service.
  */
  function DebugWindowController(visualizer, $rootScope) {
    var _this = this;

    _classCallCheck(this, DebugWindowController);

    this.visualizer = visualizer;
    this.$rootScope = $rootScope;
    this.debugOpen = false;
    this.$rootScope.$on('toggleDebugForPlayer', function (_, playerId) {
      if (playerId === _this.playerId) {
        _this.debugOpen = !_this.debugOpen;
      }
    });
  }
  /**
   * Returns the styles of debug window according to the side.
   */


  _createClass(DebugWindowController, [{
    key: "styleBySide",
    value: function styleBySide() {
      var sameStyle = {
        'background-image': 'url(' + this.visualizer.state.imageManager.images.debug_line.src + ')'
      };

      if (this.playerId === 0) {
        return Object.assign(sameStyle, {
          left: '0px',
          transform: this.debugOpen ? 'translateX(0)' : 'translateX(-220%)'
        });
      }

      return Object.assign(sameStyle, {
        right: '0px',
        transform: this.debugOpen ? 'translateX(0)' : 'translateX(220%)'
      });
    }
    /**
     * Returns the game debug title picture.
     */

  }, {
    key: "debugPictureTitle",
    get: function get() {
      return this.visualizer.state.imageManager.images.debug_pic.src;
    }
    /**
     * Debugs of the player in each turn.
     */

  }, {
    key: "degubMesseges",
    get: function get() {
      return this.visualizer.state.replay ? this.visualizer.state.replay.meta.debugMessages[this.playerId][this.visualizer.displayTurn] : null;
    }
  }]);

  return DebugWindowController;
}();

DebugWindowController.$inject = ['visualizer', '$rootScope'];
/**
 * @type {angular.IComponentOptions}
 */

var debugWindow = {
  controller: DebugWindowController,
  template: _debug_window_html__WEBPACK_IMPORTED_MODULE_2___default.a,
  bindings: {
    playerId: '<'
  }
};

/***/ }),

/***/ "./game/lib/visualizer/src/components/debug-window/debug-window.scss":
/*!***************************************************************************!*\
  !*** ./game/lib/visualizer/src/components/debug-window/debug-window.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/sass-loader/lib/loader.js!./debug-window.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./game/lib/visualizer/src/components/debug-window/debug-window.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./game/lib/visualizer/src/components/information/information.html":
/*!*************************************************************************!*\
  !*** ./game/lib/visualizer/src/components/information/information.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"information\" class=\"{{ $ctrl.visualizer.informationOpen ? 'show-information' : '' }}\" ng-style=\"$ctrl.backgroundLine\">\n    <img ng-src=\"{{ $ctrl.infoTitle }}\" id=\"info-title\">\n    <div class=\"information-container\">\n        <div class=\"inner-information-container\">\n            <table class=\"table\" style=\"direction: rtl;\">\n                <thead>\n                    <tr>\n                        <th scope=\"col\">קטגוריה</th>\n                        <th scope=\"col\" dir=\"rtl\">קבוע</th>\n                        <th scope=\"col\">ערך ממשי</th>\n                        <th scope=\"col\">משתנה</th>\n                    </tr>\n                </thead>\n                <tbody ng-repeat=\"category in $ctrl.infoTable\">\n                    <tr ng-repeat=\"item in category.items\" ng-if=\"$ctrl.options[item.api] !== undefined\">\n                        <th dir=\"rtl\" scope=\"row\">\n                            <span ng-if=\"$first\">\n                                {{ category.category }}\n                            </span>\n                        </th>\n                        <td>\n                            {{ item.name }}\n                        </td>\n                        <td class=\"icon-value-container\">\n                            <img ng-if=\"category.iconType === 'image'\" class=\"icon\" ng-src=\"{{ category.icon }}\"\n                                ng-style=\"category.iconStyle || {}\">\n                            <i ng-if=\"category.iconType === 'fontAwesome'\" class=\"{{ category.icon }}\" ng-style=\"category.iconStyle || {}\"></i>\n                            {{ $ctrl.options[item.api] }}\n                        </td>\n                        <td>\n                            game.{{ snakeToCamelCase(item.api) }}\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./game/lib/visualizer/src/components/information/information.js":
/*!***********************************************************************!*\
  !*** ./game/lib/visualizer/src/components/information/information.js ***!
  \***********************************************************************/
/*! exports provided: information */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "information", function() { return information; });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _information_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./information.html */ "./game/lib/visualizer/src/components/information/information.html");
/* harmony import */ var _information_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_information_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _root_Visualizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~root/Visualizer */ "./game/lib/plugins/root/visualizer/js/Visualizer.js");
/* harmony import */ var _root_Util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~root/Util */ "./game/lib/plugins/root/visualizer/js/Util.js");
/* harmony import */ var _information_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./information.scss */ "./game/lib/visualizer/src/components/information/information.scss");
/* harmony import */ var _information_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_information_scss__WEBPACK_IMPORTED_MODULE_4__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






/** */

var InformationController =
/*#__PURE__*/
function () {
  /**
   * @param {Visualizer} visualizer - The visualizer service.
   * @param {angular.IScope} scope - The angular scope.
   */
  function InformationController(visualizer, scope) {
    _classCallCheck(this, InformationController);

    this.visualizer = visualizer;
    this.scope = scope;
    this.scope.snakeToCamelCase = _root_Util__WEBPACK_IMPORTED_MODULE_3__["snakeToCamelCase"];
    /**
     * @type {Array<{category: string, icon: string, iconType: string, iconStyle?: Object, items: Array<{ name: string, api: string }>}>}
     */

    this.infoTable = [{
      category: 'מאנה',
      icon: this.manaIcon,
      iconType: 'image',
      items: [{
        name: 'מאנה לתור',
        api: 'default_mana_per_turn'
      }, {
        name: 'מאנה התחלתית',
        api: 'initial_mana'
      }, {
        name: 'מאנה ממזרקת מאנה',
        api: 'mana_fountain_mana_per_turn'
      }]
    }, {
      category: 'מחירים',
      icon: this.manaIcon,
      iconType: 'image',
      items: [{
        name: 'פורטל',
        api: 'portal_cost'
      }, {
        name: 'ענק לבה',
        api: 'lava_giant_cost'
      }, {
        name: 'טרול קרח',
        api: 'ice_troll_cost'
      }, {
        name: 'מזרקת מאנה',
        api: 'mana_fountain_cost'
      }, {
        name: 'לחש היעלמות',
        api: 'invisibility_cost'
      }, {
        name: 'לחש מהירות',
        api: 'speed_up_cost'
      }, {
        name: 'טורנדו',
        api: 'tornado_cost'
      }]
    }, {
      category: 'נקודות חיים',
      icon: this.heartIcon,
      iconType: 'image',
      iconStyle: {
        width: '15px'
      },
      items: [{
        name: 'טירה',
        api: 'castle_max_health'
      }, {
        name: 'פורטל',
        api: 'portal_max_health'
      }, {
        name: 'ענק לבה',
        api: 'lava_giant_max_health'
      }, {
        name: 'טרול קרח',
        api: 'ice_troll_max_health'
      }, {
        name: 'אלפית',
        api: 'elf_max_health'
      }, {
        name: 'מזרקת מאנה',
        api: 'mana_fountain_max_health'
      }, {
        name: 'טורנדו',
        api: 'tornado_max_health'
      }]
    }, {
      category: 'נקודות פגיעה',
      icon: 'fas fa-bullseye target',
      iconType: 'fontAwesome',
      items: [{
        name: 'ענק לבה',
        api: 'lava_giant_attack_multiplier'
      }, {
        name: 'טרול קרח',
        api: 'ice_troll_attack_multiplier'
      }, {
        name: 'אלפית',
        api: 'elf_attack_multiplier'
      }, {
        name: 'טורנדו',
        api: 'tornado_attack_multiplier'
      }]
    }, {
      category: 'תורות עד חזרה לחיים',
      icon: 'fas fa-ghost ghost',
      iconType: 'fontAwesome',
      items: [{
        name: 'אלפית',
        api: 'elf_spawn_turns'
      }]
    }, {
      category: 'משך',
      icon: this.clockIcon,
      iconType: 'image',
      items: [{
        name: 'זימון ענק לבה',
        api: 'lava_giant_summoning_duration'
      }, {
        name: 'זימון טרול קרח',
        api: 'ice_troll_summoning_duration'
      }, {
        name: 'בניית פורטל',
        api: 'portal_building_duration'
      }, {
        name: 'בניית מזרקת מאנה',
        api: 'mana_fountain_building_duration'
      }, {
        name: 'לחש היעלמות',
        api: 'invisibility_expiration_turns'
      }, {
        name: 'לחש מהירות',
        api: 'speed_up_expiration_turns'
      }, {
        name: 'זימון טורנדו',
        api: 'tornado_summoning_duration'
      }]
    }, {
      category: 'גודל מפה',
      icon: 'fas fa-crop-alt',
      iconType: 'fontAwesome',
      iconStyle: {
        display: 'flex'
      },
      items: [{
        name: 'שורות',
        api: 'rows'
      }, {
        name: 'עמודות',
        api: 'cols'
      }]
    }, {
      category: 'מהירויות',
      icon: 'fas fa-angle-double-right ghost',
      iconType: 'fontAwesome',
      items: [{
        name: 'אלפית',
        api: 'elf_max_speed'
      }, {
        name: 'ענק לבה',
        api: 'lava_giant_max_speed'
      }, {
        name: 'טרול קרח',
        api: 'ice_troll_max_speed'
      }, {
        name: 'טורנדו',
        api: 'tornado_max_speed'
      }]
    }, {
      category: 'גודל מבנים',
      icon: 'fas fa-drafting-compass',
      iconType: 'fontAwesome',
      iconStyle: {
        display: 'flex'
      },
      items: [{
        name: 'גודל טירה',
        api: 'castle_size'
      }, {
        name: 'גודל פורטל',
        api: 'portal_size'
      }, {
        name: 'גודל מזרקת מאנה',
        api: 'mana_fountain_size'
      }]
    }];
  }
  /**
   * Heart icon.
   */


  _createClass(InformationController, [{
    key: "heartIcon",
    get: function get() {
      return this.visualizer.state.imageManager.images.heart.src;
    }
    /**
     * The options of the map, from the replay.
     */

  }, {
    key: "options",
    get: function get() {
      return this.visualizer.state.replay ? this.visualizer.state.replay.meta.replayData.options : {};
    }
    /**
     * Mana icon.
     */

  }, {
    key: "manaIcon",
    get: function get() {
      return this.visualizer.state.imageManager.images.mana.src;
    }
    /**
     * Clock icon.
     */

  }, {
    key: "clockIcon",
    get: function get() {
      return this.visualizer.state.imageManager.images.clock.src;
    }
    /**
     * Information title.
     */

  }, {
    key: "infoTitle",
    get: function get() {
      return this.visualizer.state.imageManager.images.info_title.src;
    }
    /**
     * Return the background picture.
     */

  }, {
    key: "backgroundLine",
    get: function get() {
      return {
        'background-image': "url(".concat(this.visualizer.state.imageManager.images.information_line.src, ")")
      };
    }
  }]);

  return InformationController;
}();

InformationController.$inject = ['visualizer', '$scope'];
/**
 * @type {angular.IComponentOptions}
 */

var information = {
  controller: InformationController,
  template: _information_html__WEBPACK_IMPORTED_MODULE_1___default.a
};

/***/ }),

/***/ "./game/lib/visualizer/src/components/information/information.scss":
/*!*************************************************************************!*\
  !*** ./game/lib/visualizer/src/components/information/information.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/sass-loader/lib/loader.js!./information.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./game/lib/visualizer/src/components/information/information.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./game/lib/visualizer/src/components/intro-video/intro-video.html":
/*!*************************************************************************!*\
  !*** ./game/lib/visualizer/src/components/intro-video/intro-video.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"background\" ng-if=\"!$ctrl.seenVideo\">\n    <div id=\"skip\" ng-click=\"$ctrl.skip()\" ng-style=\"$ctrl.skipStyle\"><i class=\"fas fa-times\"></i></div>\n    <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/cfpFs8G7HGg?autoplay=1&controls=1&showinfo=0&modestbranding=1&rel=0\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n</div> "

/***/ }),

/***/ "./game/lib/visualizer/src/components/intro-video/intro-video.js":
/*!***********************************************************************!*\
  !*** ./game/lib/visualizer/src/components/intro-video/intro-video.js ***!
  \***********************************************************************/
/*! exports provided: introVideo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "introVideo", function() { return introVideo; });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _intro_video_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intro-video.html */ "./game/lib/visualizer/src/components/intro-video/intro-video.html");
/* harmony import */ var _intro_video_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_intro_video_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _root_Visualizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~root/Visualizer */ "./game/lib/plugins/root/visualizer/js/Visualizer.js");
/* harmony import */ var _intro_video_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./intro-video.scss */ "./game/lib/visualizer/src/components/intro-video/intro-video.scss");
/* harmony import */ var _intro_video_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_intro_video_scss__WEBPACK_IMPORTED_MODULE_3__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





/**
 * IntroVideo Component controller.
*/

var IntroVideoController =
/*#__PURE__*/
function () {
  /**
   * @param {Visualizer} visualizer - The visualizer service.
   * @param {angular.IScope} scope - The angular scope.
   */
  function IntroVideoController(visualizer, scope) {
    var _this = this;

    _classCallCheck(this, IntroVideoController);

    this.visualizer = visualizer;
    this.scope = scope;
    this.seenVideo = localStorage.seenVideo;
    this.skipTimeout = 60000;

    if (this.seenVideo === undefined) {
      // Stop the game after 3 seconds (The time it takes for the map to freeze)
      setTimeout(function () {
        return _this.visualizer.director.stop();
      }, 3000);
      setTimeout(function () {
        localStorage.seenVideo = true;
      }, this.skipTimeout);
    }
  }
  /**
   * Style for the skip button.
   *
   */


  _createClass(IntroVideoController, [{
    key: "skip",

    /**
     * Set the local storage var to true to disable future video showing.
     *
     */
    value: function skip() {
      localStorage.seenVideo = true;
      this.seenVideo = true;
    }
  }, {
    key: "skipStyle",
    get: function get() {
      return {
        color: localStorage.seenVideo ? 'red' : ''
      };
    }
  }]);

  return IntroVideoController;
}();

IntroVideoController.$inject = ['visualizer', '$scope'];
/**
 * @type {angular.IComponentOptions}
 */

var introVideo = {
  controller: IntroVideoController,
  template: _intro_video_html__WEBPACK_IMPORTED_MODULE_1___default.a
};

/***/ }),

/***/ "./game/lib/visualizer/src/components/intro-video/intro-video.scss":
/*!*************************************************************************!*\
  !*** ./game/lib/visualizer/src/components/intro-video/intro-video.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/sass-loader/lib/loader.js!./intro-video.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./game/lib/visualizer/src/components/intro-video/intro-video.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./game/lib/visualizer/src/components/mana-container/mana-container.html":
/*!*******************************************************************************!*\
  !*** ./game/lib/visualizer/src/components/mana-container/mana-container.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<span class=\"increase-mana\" ng-style=\"$ctrl.manaPerTurnStyle\">\n    {{\n        ($ctrl.side === 'left') \n            ? ('+' + $ctrl.manaPerTurn)\n            : ($ctrl.manaPerTurn + '+')\n    }}\n</span>\n<img class=\"mana-image\" ng-src=\"{{ $ctrl.visualizer.map.images.mana.src }}\" ng-style=\"$ctrl.manaImageStyle\"/>\n<div class=\"mana\">\n    <span class=\"current-mana\">{{ $ctrl.mana }}</span>\n</div>\n"

/***/ }),

/***/ "./game/lib/visualizer/src/components/mana-container/mana-container.js":
/*!*****************************************************************************!*\
  !*** ./game/lib/visualizer/src/components/mana-container/mana-container.js ***!
  \*****************************************************************************/
/*! exports provided: ManaContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManaContainer", function() { return ManaContainer; });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mana_container_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mana-container.html */ "./game/lib/visualizer/src/components/mana-container/mana-container.html");
/* harmony import */ var _mana_container_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mana_container_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _root_Visualizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~root/Visualizer */ "./game/lib/plugins/root/visualizer/js/Visualizer.js");
/* harmony import */ var _mana_container_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mana-container.scss */ "./game/lib/visualizer/src/components/mana-container/mana-container.scss");
/* harmony import */ var _mana_container_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mana_container_scss__WEBPACK_IMPORTED_MODULE_3__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





/** */

var ManaContainerController =
/*#__PURE__*/
function () {
  /**
   * @param {Visualizer} visualizer - The visualizer service.
   */
  function ManaContainerController(visualizer) {
    _classCallCheck(this, ManaContainerController);

    /**
     * @type {Visualizer}
     */
    this.visualizer = visualizer;
  }
  /** */


  _createClass(ManaContainerController, [{
    key: "$onInit",
    value: function $onInit() {
      if (this.side != 'left' && this.side != 'right') {
        throw new Error("ManaContainer expected side=left or side=right but received side=".concat(this.side));
      }
    }
    /**
     * @type {Object}
     */

  }, {
    key: "manaPerTurnStyle",
    get: function get() {
      return {
        'margin-auto': this.side === 'left' ? '0 -15px 0 0' : '0 0 0 0'
      };
    }
    /**
     * @type {Object}
     */

  }, {
    key: "manaImageStyle",
    get: function get() {
      return {
        'width': !this.visualizer.showOrnaments ? '44px' : '66px',
        'height': !this.visualizer.showOrnaments ? '38px' : '57px'
      };
    }
  }]);

  return ManaContainerController;
}();

ManaContainerController.$inject = ['visualizer'];
/**
 * @type {angular.IComponentOptions}
 */

var ManaContainer = {
  controller: ManaContainerController,
  template: _mana_container_html__WEBPACK_IMPORTED_MODULE_1___default.a,
  bindings: {
    side: '@',
    // 'left' or 'right'
    image: '@',
    // Todo: This shouldn't be a binding. Need some way of accessing the visualizer from here.
    mana: '<',
    manaPerTurn: '<'
  }
};

/***/ }),

/***/ "./game/lib/visualizer/src/components/mana-container/mana-container.scss":
/*!*******************************************************************************!*\
  !*** ./game/lib/visualizer/src/components/mana-container/mana-container.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/sass-loader/lib/loader.js!./mana-container.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./game/lib/visualizer/src/components/mana-container/mana-container.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./game/lib/visualizer/src/components/player-ui/player-ui.html":
/*!*********************************************************************!*\
  !*** ./game/lib/visualizer/src/components/player-ui/player-ui.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"player-container\" title=\"{{ $ctrl.visualizer.playerNames[$ctrl.playerId] }}\">\n    <div>\n        <img class=\"player-image-background\"\n         ng-src=\"{{ $ctrl.circleAroundAvatarSrc }}\" \n         ng-mouseenter=\"$ctrl.playerImageHover = true\" \n         ng-mouseleave=\"$ctrl.playerImageHover = false\" \n         ng-click=\"$ctrl.onClick()\">\n        <img class=\"player-image\" ng-src=\"{{ $ctrl.avatarSrc }}\">\n    </div>\n    <div class=\"score-container\" ng-style=\"$ctrl.scoreContainerStyle\">\n        <div class=\"player-name\" dir=auto ng-style=\"$ctrl.playerNameStyle\">\n            {{ $ctrl.visualizer.playerNames[$ctrl.playerId] }}\n        </div>\n        <div class=\"score-bar\">\n            <div class=\"score-bar-inner\" ng-style=\"$ctrl.scoreBarStyle\">\n                <span class=\"score-bar-text\">\n                    {{ $ctrl.visualizer.getScoreBarLabel(1 - $ctrl.playerId, $ctrl.visualizer.map.turn) }}\n                </span>\n            </div>\n        </div>\n    </div>\n</div>\n<mana-container\n    mana=\"$ctrl.score.mana\"\n    mana-per-turn=\"$ctrl.score.mana_per_turn\"\n    side=\"{{ playerId === 0 ? 'left' : 'right' }}\"\n></mana-container>"

/***/ }),

/***/ "./game/lib/visualizer/src/components/player-ui/player-ui.js":
/*!*******************************************************************!*\
  !*** ./game/lib/visualizer/src/components/player-ui/player-ui.js ***!
  \*******************************************************************/
/*! exports provided: PlayerUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerUI", function() { return PlayerUI; });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _root_Visualizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~root/Visualizer */ "./game/lib/plugins/root/visualizer/js/Visualizer.js");
/* harmony import */ var _root_Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~root/Util */ "./game/lib/plugins/root/visualizer/js/Util.js");
/* harmony import */ var _player_ui_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player-ui.html */ "./game/lib/visualizer/src/components/player-ui/player-ui.html");
/* harmony import */ var _player_ui_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_player_ui_html__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _player_ui_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./player-ui.scss */ "./game/lib/visualizer/src/components/player-ui/player-ui.scss");
/* harmony import */ var _player_ui_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_player_ui_scss__WEBPACK_IMPORTED_MODULE_4__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






/**
 * The UI of a single player - including the mana and the castle health bar.
 */

var PlayerUIController =
/*#__PURE__*/
function () {
  /**
   * @param {Visualizer} visualizer - The visualizer service.
   * @param {angular.IRootScopeService} $rootScope - The root scope.
   */
  function PlayerUIController(visualizer, $rootScope) {
    _classCallCheck(this, PlayerUIController);

    this.playerImageHover = false;
    this.visualizer = visualizer;
    this.$rootScope = $rootScope;
  }
  /**
   * @type {{mana: number, mana_per_turn: number}}
   */


  _createClass(PlayerUIController, [{
    key: "onClick",

    /**
     * Emits toggle debug event.
     */
    value: function onClick() {
      this.$rootScope.$emit('toggleDebugForPlayer', this.playerId);
    }
  }, {
    key: "score",
    get: function get() {
      return this.visualizer.getScores()[this.playerId][this.visualizer.map.turn];
    }
    /**
     * @type {string}
     */

  }, {
    key: "circleAroundAvatarSrc",
    get: function get() {
      return !this.playerImageHover ? this.visualizer.state.imageManager.images[['left_avatar', 'right_avatar'][this.playerId]].src : this.visualizer.state.imageManager.images[['left_avatar_hover', 'right_avatar_hover'][this.playerId]].src;
    }
    /**
     * @type {string}
     */

  }, {
    key: "avatarSrc",
    get: function get() {
      return this.visualizer.state.options.playersAvatar[this.playerId];
    }
    /** */

  }, {
    key: "scoreBarStyle",
    get: function get() {
      var turn = this.visualizer.map.turn;
      var color = Object(_root_Util__WEBPACK_IMPORTED_MODULE_2__["getColor"])(this.playerId).replace('#', '');
      var outerColor = Object(_root_Util__WEBPACK_IMPORTED_MODULE_2__["getColor"])(this.playerId + '_grad') || Object(_root_Util__WEBPACK_IMPORTED_MODULE_2__["getColor"])(this.playerId);
      return {
        'background-image': 'linear-gradient(' + outerColor + ',#' + color + ',' + outerColor + ')',
        width: Math.floor(100 * this.visualizer.getScoreBarFraction(this.playerId, turn)) + '%',
        height: '13px'
      };
    }
    /**
     * @type {Object<string, string>} - Style for the player name text.
     */

  }, {
    key: "playerNameStyle",
    get: function get() {
      if (this.visualizer.showOrnaments) {
        return {
          'font-size': '1.6vw'
        };
      }

      return {
        'font-size': String(document.getElementsByClassName('score-container')[0].offsetWidth / 8) + 'px'
      };
    }
    /**
     * @type {Object<string, string>} - Style for the score container.
     */

  }, {
    key: "scoreContainerStyle",
    get: function get() {
      return {
        'margin': this.playerId === 0 ? '0 0 0 45px' : '0 45px 0 0'
      };
    }
  }]);

  return PlayerUIController;
}();

PlayerUIController.$inject = ['visualizer', '$rootScope'];
/**
 * @type {angular.IComponentOptions}
 */

var PlayerUI = {
  controller: PlayerUIController,
  template: _player_ui_html__WEBPACK_IMPORTED_MODULE_3___default.a,
  bindings: {
    playerId: '<'
  }
};

/***/ }),

/***/ "./game/lib/visualizer/src/components/player-ui/player-ui.scss":
/*!*********************************************************************!*\
  !*** ./game/lib/visualizer/src/components/player-ui/player-ui.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/sass-loader/lib/loader.js!./player-ui.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./game/lib/visualizer/src/components/player-ui/player-ui.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./game/lib/visualizer/src/components/volume-button/volume-button.html":
/*!*****************************************************************************!*\
  !*** ./game/lib/visualizer/src/components/volume-button/volume-button.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<i class=\"audio-button button\" ng-click=\"$ctrl.toggleMute()\" ng-class=\"$ctrl.updateVolumeIcon()\"></i>\n<div class=\"audio-bar-container\" ng-show=\"mouseInAudioSlider || mouseDraggingAudioSlider\">\n    <div class=\"audio-bar\" style=\"height: {{100 * $ctrl.soundsVolume}}%;\">\n        <div class=\"audio-circle\"></div>\n    </div>\n</div>"

/***/ }),

/***/ "./game/lib/visualizer/src/components/volume-button/volume-button.js":
/*!***************************************************************************!*\
  !*** ./game/lib/visualizer/src/components/volume-button/volume-button.js ***!
  \***************************************************************************/
/*! exports provided: VolumeButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VolumeButton", function() { return VolumeButton; });
/* harmony import */ var _root_Visualizer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~root/Visualizer */ "./game/lib/plugins/root/visualizer/js/Visualizer.js");
/* harmony import */ var _root_AudioManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~root/AudioManager */ "./game/lib/plugins/root/visualizer/js/AudioManager.js");
/* harmony import */ var _volume_button_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./volume-button.html */ "./game/lib/visualizer/src/components/volume-button/volume-button.html");
/* harmony import */ var _volume_button_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_volume_button_html__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _volume_button_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./volume-button.scss */ "./game/lib/visualizer/src/components/volume-button/volume-button.scss");
/* harmony import */ var _volume_button_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_volume_button_scss__WEBPACK_IMPORTED_MODULE_3__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





/**
 * The volume button and bar.
 */

var VolumeButtonController =
/*#__PURE__*/
function () {
  /**
   * @param {Visualizer} visualizer - The visualizer service.
   * @param {Object} scope - The angular scope.
   */
  function VolumeButtonController(visualizer, scope) {
    _classCallCheck(this, VolumeButtonController);

    this.visualizer = visualizer;
    this.scope = scope;
  }
  /**
   * Called by angular when the component is initialized.
   */


  _createClass(VolumeButtonController, [{
    key: "$onInit",
    value: function $onInit() {
      this.updateAudioBar();
      this.scope.mouseInAudioSlider = false;
      this.scope.mouseDraggingAudioSlider = false;
    }
    /**
     * Toggles mute for music and sound.
     */

  }, {
    key: "toggleMute",
    value: function toggleMute() {
      var _arr = Object.values(_root_AudioManager__WEBPACK_IMPORTED_MODULE_1__["AudioType"]);

      for (var _i = 0; _i < _arr.length; _i++) {
        var audioType = _arr[_i];
        var config = this.visualizer.state.config[audioType.muteConfig];
        this.visualizer.toggleConfigValue(config);
        this.visualizer.state.audioManager.toggleInPlayAudioMute(audioType);
      }
    }
    /**
     * Sets the volume of music or sound.
     *
     * @param {number} volume - The requested volume, as a float between 0 and 1.
     */

  }, {
    key: "setVolume",
    value: function setVolume(volume) {
      var _arr2 = Object.values(_root_AudioManager__WEBPACK_IMPORTED_MODULE_1__["AudioType"]);

      for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
        var audioType = _arr2[_i2];
        this.visualizer.state.config[audioType.volumeConfig].trySetValue(volume);
        this.visualizer.state.audioManager.updateInPlayAudioVolume(audioType); // Save the options to local storage

        if (this.visualizer.state.config[audioType.muteConfig].is('true')) {
          this.toggleMute();
        }

        this.visualizer.state.config.saveConfig();
      }
    }
    /**
     * Updates audio button images.
     */

  }, {
    key: "updateVolumeIcon",
    value: function updateVolumeIcon() {
      if (!this.visualizer) {
        return '';
      }

      var config = this.visualizer.state.config; // Music related info

      this.soundsVolume = config.soundsVolume.value;

      if (config.muteSounds.is('false')) {
        if (this.soundsVolume > 0.3) {
          return 'fas fa-volume-up';
        } else if (this.soundsVolume !== 0) {
          return 'fas fa-volume-down';
        }

        return 'fas fa-volume-off';
      }

      return 'fas fa-volume-mute';
    }
    /**
     * Updates the audi bar.
     * Adds all the listeners to the audio bar.
     */

  }, {
    key: "updateAudioBar",
    value: function updateAudioBar() {
      var _this = this;

      var barContainer = document.querySelector('.audio-bar-container');
      var progressBar = document.querySelector('.audio-bar');
      var audioButtonContainer = document.querySelector('volume-button');
      var mouseDown = false;

      var updateSoundLevel = function updateSoundLevel(e) {
        var bottom = barContainer.getBoundingClientRect().bottom;
        var top = barContainer.getBoundingClientRect().top;
        var y = e.clientY;
        var volume = Math.clamp((bottom - y) / (bottom - top), 0, 1);
        progressBar.style.height = "".concat(volume * 100, "%");

        _this.setVolume(volume);
      };

      barContainer.addEventListener('mousedown', function (e) {
        mouseDown = true;
        barContainer.classList.add('mouse-down');
        _this.scope.mouseInAudioSlider = true;
        updateSoundLevel(e);
      });
      barContainer.addEventListener('mouseover', function (e) {
        _this.scope.mouseInAudioSlider = true;
      });
      progressBar.addEventListener('mouseover', function (e) {
        _this.scope.mouseInAudioSlider = true;
      });
      audioButtonContainer.addEventListener('mouseover', function (e) {
        _this.scope.mouseInAudioSlider = true;
      });
      audioButtonContainer.addEventListener('mouseout', function (e) {
        _this.scope.mouseInAudioSlider = false;
      });
      window.addEventListener('mouseup', function (_) {
        mouseDown = false;
        _this.scope.mouseInAudioSlider = false;
        barContainer.classList.remove('mouse-down');
      });
      window.addEventListener('dragend', function (e) {
        if (mouseDown) {
          barContainer.classList.remove('mouse-down');
          updateSoundLevel(e);
        }

        mouseDown = false;
        _this.scope.mouseDraggingAudioSlider = false;
      });
      window.addEventListener('drag', function (e) {
        if (mouseDown) {
          barContainer.classList.add('mouse-down');
          _this.scope.mouseInAudioSlider = true;
          updateSoundLevel(e);
        }
      });
      window.addEventListener('mousemove', function (e) {
        if (mouseDown) {
          barContainer.classList.add('mouse-down');
          _this.scope.mouseInAudioSlider = true;
          updateSoundLevel(e);
        }
      });
    }
  }]);

  return VolumeButtonController;
}();

VolumeButtonController.$inject = ['visualizer', '$scope'];
var VolumeButton = {
  controller: VolumeButtonController,
  template: _volume_button_html__WEBPACK_IMPORTED_MODULE_2___default.a
};

/***/ }),

/***/ "./game/lib/visualizer/src/components/volume-button/volume-button.scss":
/*!*****************************************************************************!*\
  !*** ./game/lib/visualizer/src/components/volume-button/volume-button.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/sass-loader/lib/loader.js!./volume-button.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./game/lib/visualizer/src/components/volume-button/volume-button.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./game/lib/visualizer/src/components/amulet-after/amulet-after.scss":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./game/lib/visualizer/src/components/amulet-after/amulet-after.scss ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "amulet-after {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0px;\n  top: 0px; }\n  amulet-after #kamea-after {\n    display: none; }\n  amulet-after .amulet-after-div {\n    width: 100%;\n    height: 100%;\n    position: relative;\n    opacity: 1;\n    transition: opacity;\n    transition-duration: 100ms;\n    transition-timing-function: ease-in-out; }\n    amulet-after .amulet-after-div p {\n      opacity: 0;\n      z-index: 4;\n      top: calc(50% + 121px);\n      font-size: 25px;\n      left: 50%;\n      transform: translateX(-50%);\n      font-weight: bold;\n      font-family: 'Old Standard TT';\n      color: #291f1d;\n      overflow: hidden;\n      direction: rtl;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      max-width: 300px;\n      max-height: 40px;\n      position: absolute;\n      animation: add-opacity 2000ms 3000ms ease-in-out forwards; }\n    amulet-after .amulet-after-div img {\n      position: absolute;\n      top: 0px;\n      left: 50%;\n      transform: translate(-50%, calc(-60px - 50%));\n      width: 200px;\n      height: 268px;\n      z-index: 1; }\n    amulet-after .amulet-after-div #after-game {\n      display: none; }\n    amulet-after .amulet-after-div #amuletAfter {\n      z-index: 3;\n      opacity: 0;\n      top: 50%;\n      left: 50%;\n      animation: add-opacity 500ms 2500ms ease-in-out forwards; }\n    amulet-after .amulet-after-div #brokenAfter {\n      z-index: 1;\n      opacity: 0;\n      top: 50%;\n      left: 50%;\n      animation: add-opacity 300ms 1600ms ease-in-out forwards; }\n    amulet-after .amulet-after-div #winner-image {\n      width: 105px;\n      height: 105px;\n      z-index: 5;\n      opacity: 0;\n      top: 50%;\n      left: 50%;\n      animation: add-opacity 2000ms 3000ms ease-in-out forwards; }\n    amulet-after .amulet-after-div #amuletLeftAfter {\n      z-index: 2;\n      opacity: 1;\n      top: 50%;\n      width: 104px;\n      left: calc(50% - 4px);\n      transform: translate(-90%, calc(-60px - 50%));\n      animation: why-choose-can-fuze-left 1500ms, remove-opacity 700ms 1800ms forwards; }\n    amulet-after .amulet-after-div #amuletRightAfter {\n      z-index: 2;\n      opacity: 1;\n      top: 50%;\n      width: 104px;\n      left: calc(50% - 4px);\n      transform: translate(0px, calc(-60px - 50%)) scale(1);\n      animation: why-choose-can-fuze-right 1500ms, remove-opacity 700ms 1800ms forwards; }\n    amulet-after .amulet-after-div #winner-image-mep {\n      opacity: 0;\n      z-index: 3;\n      top: calc(50% + 190px);\n      left: 50%;\n      height: 80px;\n      width: 400px;\n      position: absolute;\n      animation: add-opacity 2000ms 3000ms ease-in-out forwards; }\n    amulet-after .amulet-after-div #winnerAmulet {\n      z-index: 4;\n      opacity: 0;\n      top: 50%;\n      left: 50%;\n      animation: add-opacity 2000ms 3000ms ease-in-out forwards; }\n\n@keyframes add-opacity {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes remove-opacity {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n@keyframes why-choose-can-fuze-left {\n  0% {\n    opacity: 1;\n    left: 0%;\n    top: 50%;\n    transform: translate(-90%, calc(-60px - 50%)); }\n  40% {\n    left: 40%;\n    top: 50%; }\n  100% {\n    opacity: 1;\n    left: 50%;\n    top: 50%;\n    transform: translate(-90%, calc(-60px - 50%)); } }\n\n@keyframes why-choose-can-fuze-right {\n  0% {\n    opacity: 1;\n    left: 100%;\n    top: 50%;\n    transform: translate(-50%, calc(-60px - 50%)); }\n  40% {\n    left: 60%;\n    top: 50%; }\n  100% {\n    opacity: 1;\n    left: 50%;\n    top: 50%;\n    transform: translate(0px, calc(-60px - 50%)) scale(1); } }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./game/lib/visualizer/src/components/amulet/amulet.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./game/lib/visualizer/src/components/amulet/amulet.scss ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "amulet {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0px;\n  top: 0px; }\n  amulet #amulet-before {\n    display: none; }\n  amulet .amulet-div {\n    width: 100%;\n    height: 100%;\n    position: relative;\n    opacity: 1;\n    transition: opacity;\n    transition-duration: 100ms;\n    transition-timing-function: ease-in-out; }\n    amulet .amulet-div img {\n      position: absolute;\n      top: 0px;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      width: 200px;\n      height: 268px;\n      z-index: 1; }\n    amulet .amulet-div #amulet {\n      animation: move-down 3200ms linear 1, remove-opacity 200ms 1800ms ease-in-out forwards; }\n    amulet .amulet-div #broken {\n      animation: move-down 3200ms linear 1, add-opacity 500ms 1400ms ease-in-out forwards, remove-opacity 100ms 2500ms forwards; }\n    amulet .amulet-div #frozenBroken {\n      width: 208px;\n      height: 276px;\n      top: 50%;\n      left: 50%;\n      animation: move-down 3200ms linear 1, add-opacity 1000ms 1700ms ease-in-out forwards, remove-opacity 700ms 3000ms forwards; }\n    amulet .amulet-div #amuletLeft {\n      top: 50%;\n      width: 110px;\n      height: 278px;\n      left: calc(50% - 4px);\n      transform: translate(-90%, -50%);\n      animation: move-down 3200ms linear 1, add-opacity 600ms 2600ms ease-in-out forwards, move-left-amulet 800ms 3900ms ease-in-out forwards, fly-left-amulet 500ms 4500ms ease-in-out forwards; }\n    amulet .amulet-div #amuletRight {\n      top: 50%;\n      width: 110px;\n      height: 278px;\n      left: calc(50% - 4px);\n      transform: translate(0%, -50%);\n      animation: move-down 3200ms linear 1, add-opacity 600ms 2600ms ease-in-out forwards, move-right-amulet 800ms 3900ms ease-in-out forwards, fly-right-amulet 500ms 4500ms ease-in-out forwards; }\n    amulet .amulet-div img:not(:nth-child(1)) {\n      opacity: 0; }\n    amulet .amulet-div #bigParticles, amulet .amulet-div #smallParticles {\n      top: 50%;\n      left: 50%;\n      z-index: 0; }\n    amulet .amulet-div #bigParticles {\n      animation: particles-shake 1500ms 3950ms cubic-bezier(0.17, 0.67, 0.56, 1.52) 1; }\n    amulet .amulet-div #smallParticles {\n      animation: particles-shake 1500ms 3700ms cubic-bezier(0.17, 0.67, 0.56, 1.52) 1; }\n\n@keyframes particles-shake {\n  0% {\n    transform: translate(-50%, -50%) scale(0); }\n  10% {\n    opacity: 1; }\n  40% {\n    opacity: 0.7; }\n  90% {\n    transform: translate(-50%, -50%) scale(1.5); }\n  100% {\n    opacity: 0;\n    transform: translate(-50%, -50%) scale(1.5); } }\n\n@keyframes add-opacity {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes remove-opacity {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n@keyframes fly-left-amulet {\n  0% {\n    left: 45%;\n    top: 50%;\n    transform: translate(-90%, -50%) scale(1) rotate(0deg); }\n  100% {\n    left: 7.5%;\n    top: 87.5%;\n    transform: translate(-50%, -50%) scale(0) rotate(360deg); } }\n\n@keyframes fly-right-amulet {\n  0% {\n    left: 55%;\n    top: 50%;\n    transform: translate(0px, -50%) scale(1) rotate(0deg); }\n  100% {\n    left: 92.5%;\n    top: 12.5%;\n    transform: translate(-50%, -50%) scale(0) rotate(360deg); } }\n\n@keyframes move-left-amulet {\n  0% {\n    left: calc(50% + 3px);\n    top: 50%;\n    transform: translate(-90%, -50%) scale(1) rotate(0deg); }\n  100% {\n    left: 45%;\n    top: 50%;\n    transform: translate(-90%, -50%) scale(1) rotate(0deg); } }\n\n@keyframes move-right-amulet {\n  0% {\n    left: calc(50% + 3px);\n    top: 50%;\n    transform: translate(0px, -50%) scale(1) rotate(0deg); }\n  100% {\n    left: 55%;\n    top: 50%;\n    transform: translate(0px, -50%) scale(1) rotate(0deg); } }\n\n@keyframes move-down {\n  0% {\n    top: 0%; }\n  40% {\n    top: 50%; }\n  100% {\n    top: 50%; } }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./game/lib/visualizer/src/components/controls-bar/controls-bar.scss":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./game/lib/visualizer/src/components/controls-bar/controls-bar.scss ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "controls-bar {\n  width: 100%;\n  height: 40px;\n  display: flex;\n  justify-content: space-between;\n  font-weight: 600;\n  color: #fee191;\n  z-index: 1;\n  background-size: 100px 100%; }\n  controls-bar .controls-speed-section {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    min-height: 100%;\n    padding: 5px;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n  controls-bar .controls-bar-section {\n    display: flex;\n    justify-self: flex-end;\n    align-items: center;\n    justify-content: center;\n    flex: 1; }\n  controls-bar .controls-bar-section > * {\n    min-width: 30px;\n    min-height: 100%;\n    padding: 5px;\n    margin: 3px;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n  controls-bar .controls-bar-section > i {\n    display: flex; }\n  controls-bar .controls-bar-section > i::before {\n    margin: auto; }\n  controls-bar .button {\n    cursor: pointer;\n    background-size: contain !important;\n    background-position: center !important; }\n  controls-bar .custom-select {\n    border: none;\n    overflow: hidden;\n    color: #fee191 !important;\n    width: 100%;\n    background: rgba(60, 60, 60, 0);\n    padding: 7px;\n    outline: transparent;\n    border: 0px;\n    vertical-align: top; }\n  controls-bar .custom-select .Select-menu-outer {\n    top: auto;\n    bottom: 0;\n    vertical-align: top; }\n  controls-bar .custom-select option {\n    background-color: var(--main-color);\n    font-weight: bold;\n    text-align: start;\n    color: black;\n    outline: transparent;\n    position: relative; }\n  controls-bar #settings-button {\n    margin: 0; }\n  controls-bar #left-settings {\n    justify-content: flex-start; }\n  controls-bar #right-settings {\n    justify-content: flex-end; }\n  controls-bar .bottom-ornament {\n    background-color: transparent;\n    pointer-events: none;\n    transform: scale(1, 1.9) translateY(-24%);\n    z-index: 3; }\n  controls-bar .top-ornament {\n    height: 100%;\n    transform: scale(1, 1.15); }\n  controls-bar #turn-container {\n    width: 80%;\n    height: 120%;\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-position: center;\n    transform: translateY(5%);\n    margin-top: -5px;\n    z-index: 5; }\n  controls-bar #turn {\n    font-size: 100%;\n    padding-bottom: 14px;\n    align-self: center;\n    justify-self: center;\n    transform: translateY(-1px);\n    color: white; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./game/lib/visualizer/src/components/debug-window/debug-window.scss":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./game/lib/visualizer/src/components/debug-window/debug-window.scss ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "debug-window .debug-window {\n  position: absolute;\n  height: 100%;\n  width: 40%;\n  max-width: 270px;\n  top: 0;\n  z-index: 1;\n  transition: 500ms ease-in-out;\n  position: absolute; }\n\ndebug-window .debug-title {\n  padding-top: 15px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%; }\n\ndebug-window .debug-text {\n  padding: 5px 0 0 0;\n  flex-grow: 1;\n  text-align: left;\n  margin-right: 15px;\n  font-weight: bold;\n  color: #e7c6a4;\n  word-wrap: break-word;\n  font-family: \"Open Sans\";\n  font-size: 14px; }\n  debug-window .debug-text hr {\n    border: 0;\n    margin-top: 5px;\n    height: 1px;\n    background-image: linear-gradient(to right, rgba(90, 61, 23, 0.7), #c79d66, rgba(90, 61, 23, 0.7)); }\n\ndebug-window .inner-debug {\n  padding: 7px 4% 70px 5%;\n  width: 100%;\n  height: 100%; }\n\ndebug-window .scroll-debug {\n  height: 100%;\n  overflow-y: auto;\n  overflow-x: hidden; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./game/lib/visualizer/src/components/information/information.scss":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./game/lib/visualizer/src/components/information/information.scss ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "information #information {\n  position: absolute;\n  height: 100%;\n  width: 450px;\n  top: 0px;\n  left: 0px;\n  z-index: 2;\n  transition: 500ms ease-in-out;\n  transform: translateX(-120%); }\n  information #information.show-information {\n    transform: translateX(0); }\n\ninformation .icon {\n  padding-top: 3px;\n  width: 20px;\n  height: 20px; }\n\ninformation .target {\n  color: coral; }\n\ninformation .ghost {\n  color: aliceblue; }\n\ninformation #info-title {\n  position: absolute;\n  left: 145px;\n  margin-top: 10px;\n  width: 160px; }\n\ninformation .information-container {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  padding: 70px 12px 15px 10px; }\n  information .information-container .inner-information-container {\n    overflow-y: auto;\n    overflow-x: hidden;\n    height: 100%;\n    width: 100%;\n    padding-right: 8px; }\n    information .information-container .inner-information-container::-webkit-scrollbar {\n      width: 11px; }\n    information .information-container .inner-information-container .table {\n      border-collapse: collapse; }\n      information .information-container .inner-information-container .table tr {\n        border-bottom: #e7c6a488 solid 1px; }\n        information .information-container .inner-information-container .table tr th, information .information-container .inner-information-container .table tr td {\n          color: #e7c6a4;\n          padding: 5px 0px 5px 0px;\n          text-align: right; }\n          information .information-container .inner-information-container .table tr th:last-child, information .information-container .inner-information-container .table tr td:last-child {\n            text-align: left !important; }\n        information .information-container .inner-information-container .table tr .icon-value-container {\n          display: flex;\n          flex-direction: row;\n          height: fit-content;\n          align-items: center;\n          align-self: center; }\n          information .information-container .inner-information-container .table tr .icon-value-container i, information .information-container .inner-information-container .table tr .icon-value-container img {\n            margin: 0px 5px 0 5px; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./game/lib/visualizer/src/components/intro-video/intro-video.scss":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./game/lib/visualizer/src/components/intro-video/intro-video.scss ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "intro-video #background {\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  top: 0px;\n  left: 0px;\n  z-index: 1000;\n  background-color: #00000090; }\n  intro-video #background #skip {\n    position: absolute;\n    top: calc(50%-100px);\n    left: 100%;\n    transform: translateX(-220%);\n    font-size: 3em;\n    color: #4d4d4d; }\n  intro-video #background iframe {\n    top: 50%;\n    left: 50%;\n    transform: translateX(50%) translateY(50%);\n    width: 50%;\n    height: 50%; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./game/lib/visualizer/src/components/mana-container/mana-container.scss":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./game/lib/visualizer/src/components/mana-container/mana-container.scss ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mana-container {\n  flex-shrink: 0;\n  position: relative;\n  display: flex;\n  align-items: center;\n  align-self: center;\n  margin-right: 0.5%;\n  margin-left: 5%;\n  direction: ltr; }\n  mana-container .mana {\n    width: 40px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    font-size: 16px;\n    margin: 0 -10px 0 0;\n    z-index: 2; }\n  mana-container .increase-mana {\n    direction: inherit;\n    font-size: 16px;\n    z-index: 5;\n    color: #f5de53;\n    text-shadow: 3px 0px 1px black;\n    margin-right: -20px; }\n  mana-container .mana-image {\n    margin-left: 1.5%;\n    margin-right: 1.5%;\n    width: 66px;\n    height: 57px;\n    z-index: 1; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./game/lib/visualizer/src/components/player-ui/player-ui.scss":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./game/lib/visualizer/src/components/player-ui/player-ui.scss ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "player-ui {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  width: 50%;\n  z-index: 1; }\n  player-ui * {\n    user-select: none;\n    -moz-user-select: none;\n    -webkit-user-drag: none;\n    -webkit-user-select: none;\n    -ms-user-select: none; }\n  player-ui .player-container {\n    display: flex;\n    justify-content: space-between;\n    align-content: center;\n    align-items: center;\n    justify-self: flex-start;\n    align-self: flex-start;\n    width: 100%; }\n    player-ui .player-container .player-image-background {\n      z-index: 10;\n      width: fit-content;\n      position: absolute;\n      cursor: pointer; }\n    player-ui .player-container .score-container {\n      width: 70px;\n      align-self: center;\n      flex-grow: 1; }\n    player-ui .player-container .player-image {\n      height: 70px;\n      z-index: 1;\n      position: relative;\n      left: 20px;\n      right: 20px; }\n    player-ui .player-container .player-name {\n      text-align: center;\n      justify-self: center;\n      justify-content: center;\n      display: block;\n      margin: 0px 0.1% 0px 0.1%;\n      white-space: nowrap;\n      overflow-x: hidden;\n      overflow-y: hidden;\n      text-overflow: ellipsis; }\n    player-ui .player-container .score-bar {\n      height: 15px;\n      -webkit-box-shadow: 0px 5px 12px 1px rgba(0, 0, 0, 0.75);\n      -moz-box-shadow: 0px 5px 12px 1px rgba(0, 0, 0, 0.75);\n      box-shadow: 0px 5px 12px 1px rgba(0, 0, 0, 0.5);\n      border: 1px black solid;\n      background-color: #333;\n      margin: 0px -5px;\n      position: relative;\n      border-radius: 50px; }\n      player-ui .player-container .score-bar .score-bar-inner {\n        border-radius: 50px; }\n        player-ui .player-container .score-bar .score-bar-inner .score-bar-text {\n          color: white;\n          font-size: small;\n          justify-content: center;\n          align-content: center;\n          text-align: center;\n          position: absolute;\n          width: 100%;\n          height: 100%;\n          line-height: 100%;\n          top: 0;\n          bottom: 0;\n          left: 0;\n          right: 0; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./game/lib/visualizer/src/components/volume-button/volume-button.scss":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./game/lib/visualizer/src/components/volume-button/volume-button.scss ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "volume-button {\n  display: flex;\n  z-index: 600;\n  align-self: center;\n  align-content: center;\n  justify-content: center;\n  position: relative;\n  width: 14px;\n  height: 14px;\n  right: 0; }\n  volume-button .audio-button {\n    position: absolute; }\n  volume-button .audio-bar-container {\n    position: absolute;\n    background-color: #000000b7;\n    border-radius: 15px;\n    width: 20px;\n    height: 150%;\n    margin: 0;\n    padding: 0;\n    transform: translate(-5%, -75%);\n    z-index: 201; }\n    volume-button .audio-bar-container .audio-bar {\n      position: absolute;\n      background-color: #3498db;\n      border-radius: 15px;\n      width: 100%;\n      bottom: 0; }\n      volume-button .audio-bar-container .audio-bar .audio-circle {\n        width: 20px;\n        height: 20px;\n        position: relative;\n        left: 0;\n        border-radius: 15px;\n        transform: translateY(-50%);\n        background-color: var(--blue-color);\n        box-shadow: 0 0 0.3em rgba(0, 0, 0, 0.7);\n        pointer-events: none; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })

},[["./game/lib/plugins/root/visualizer/js/Controls.js","plugins","vendors"]]]);
});
//# sourceMappingURL=app.bundle.js.map