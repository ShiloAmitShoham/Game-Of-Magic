/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"plugins": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// run deferred modules from other chunks
/******/ 	checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./game/lib/plugins/attack/health/visualizer/js/Attack.js":
/*!****************************************************************!*\
  !*** ./game/lib/plugins/attack/health/visualizer/js/Attack.js ***!
  \****************************************************************/
/*! exports provided: Attack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Attack", function() { return Attack; });
/* harmony import */ var _root_canvasObjects_CanvasObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~root/canvasObjects/CanvasObject */ "./game/lib/plugins/root/visualizer/js/canvasObjects/CanvasObject.js");
/* harmony import */ var _root_Util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~root/Util */ "./game/lib/plugins/root/visualizer/js/Util.js");
/* harmony import */ var _AttackPlug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AttackPlug */ "./game/lib/plugins/attack/health/visualizer/js/AttackPlug.js");
/* harmony import */ var _root_canvasObjects_metaObjects_MetaObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~root/canvasObjects/metaObjects/MetaObject */ "./game/lib/plugins/root/visualizer/js/canvasObjects/metaObjects/MetaObject.js");
/* harmony import */ var _root_canvasObjects_Location__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~root/canvasObjects/Location */ "./game/lib/plugins/root/visualizer/js/canvasObjects/Location.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






// typehints-only

/**
 * Metaobject that creates the attack line between the attacker and the attacked.
 */
var Attack =
/*#__PURE__*/
function (_MetaObject) {
  _inherits(Attack, _MetaObject);

  /**
   * @param {CanvasObject} attacker - The attacking actor.
   * @param {number} targetId - The attack's target uniqueId.
   */
  function Attack(attacker, targetId) {
    var _this;

    _classCallCheck(this, Attack);

    if (!(attacker instanceof _AttackPlug__WEBPACK_IMPORTED_MODULE_2__["AttackPlug"])) {
      throw new TypeError('Attack can only be assigned to an attacker Object');
    }

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Attack).call(this, attacker));
    _this.targetId = targetId;
    return _this;
  }
  /**
   * The target of this attack.
   *
   * @type {CanvasObject}
   * @readonly
   */


  _createClass(Attack, [{
    key: "isAlive",

    /**
     * Whether or not the object is alive in a given turn.
     *
     * @param {number} turn - The turn.
     * @return {boolean} - Is the object alive.
     */
    value: function isAlive(turn) {
      return this.creator.isAlive(turn) && this.creator.history[turn + 1] && this.creator.history[turn + 1].healthAttack === this.targetId;
    }
    /**
     * Return the attack's image to display.
     *
     * @return {AnimatableImage} The image to display of the attack.
     */

  }, {
    key: "getImage",
    value: function getImage() {
      return this.creator.attackImage || this.map.images.attack;
    }
    /**
     * Draws the object on the canvas.
     */

  }, {
    key: "draw",
    value: function draw() {
      var map = this.map;
      var ATTACK_SIZE = 1;
      var LINE_COLOR = Object(_root_Util__WEBPACK_IMPORTED_MODULE_1__["getColor"])(this.creator.ownerId);
      var LINE_WIDTH = 2;
      var attackerLocation = this.creator.getDrawLocation();
      var target = map.getCanvasObjectByUniqueId(this.targetId);
      var targetLocation = target.getDrawLocation(); // Draw attack line

      if (map.state.config.showAttackLines.is('on')) {
        map.drawLine(attackerLocation, targetLocation, LINE_COLOR, LINE_WIDTH, true);
      } // Draw attack-entities


      var image = this.getImage();
      var drawLocation;

      if (this.creator.base.getAttackPath) {
        drawLocation = this.creator.base.getAttackPath(targetLocation);
      } else {
        drawLocation = _root_canvasObjects_Location__WEBPACK_IMPORTED_MODULE_4__["Location"].linearInterpolation(attackerLocation, targetLocation, map.turnTime * 0.85);
      }

      var frame = this.getAnimationState(image);
      map.drawFromFrame(image, frame, drawLocation, ATTACK_SIZE, ATTACK_SIZE, this.creator.angle);
    }
  }, {
    key: "target",
    get: function get() {
      return this.map.getCanvasObjectByUniqueId(this.targetId);
    }
  }]);

  return Attack;
}(_root_canvasObjects_metaObjects_MetaObject__WEBPACK_IMPORTED_MODULE_3__["MetaObject"]);

/***/ }),

/***/ "./game/lib/plugins/attack/health/visualizer/js/AttackPlug.js":
/*!********************************************************************!*\
  !*** ./game/lib/plugins/attack/health/visualizer/js/AttackPlug.js ***!
  \********************************************************************/
/*! exports provided: AttackPlug */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttackPlug", function() { return AttackPlug; });
/* harmony import */ var _root_canvasObjects_Extension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~root/canvasObjects/Extension */ "./game/lib/plugins/root/visualizer/js/canvasObjects/Extension.js");
/* harmony import */ var _Attack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Attack */ "./game/lib/plugins/attack/health/visualizer/js/Attack.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



// typehints-only

/**
 * An extension for an object that attacks. Creates an Attack metaobject.
 */
var AttackPlug =
/*#__PURE__*/
function (_Extension) {
  _inherits(AttackPlug, _Extension);

  /**
   * @param {ExtensibleObject} base - The object that is being extended.
   */
  function AttackPlug(base) {
    var _this;

    _classCallCheck(this, AttackPlug);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AttackPlug).call(this, base));
    _this.attackRange = null;
    _this.healthAttack = null;

    _this.assignMethodOrder('playAudio', 3);

    return _this;
  }
  /**
   * Creates all the object's metaObjects.
   */


  _createClass(AttackPlug, [{
    key: "createMetaObjects",
    value: function createMetaObjects() {
      var _this2 = this;

      this.base.getHistoryValues('healthAttack').forEach(function (target) {
        return new _Attack__WEBPACK_IMPORTED_MODULE_1__["Attack"](_this2, target);
      });
    }
    /**
     * The attack range of this attack object.
     */

  }, {
    key: "playAudio",

    /**
     * Play audio based on the map's state.
     */
    value: function playAudio() {
      var map = this.map;
      /**
       * @type {Pirate}
       */

      var base = this.base; // Play sound on pirate death

      if (base.endTurn === map.attackTurn && base.reasonOfDeath === 'attacked' && map.turnTime > 0.75) {
        var audioName = 'pirateDie';
        var reason = base.uniqueId + ' ' + map.turn;
        map.state.audioManager.play(audioName, reason, 0.375);
      }
    }
    /**
     * Return the location the object should look at in the given turn. This location is determined by the object's actions in this turn.
     * For the health attacker it's the target he attacks (if he attacks this turn).
     *
     * @param {number} turn - The turn.
     * @return {Location} Destination - The location that the object should look at.
     */

  }, {
    key: "calcDirection",
    value: function calcDirection(turn) {
      if (!this.base.history[turn] || !this.base.history[turn].attacl) {
        return null;
      }

      var victim = this.map.getCanvasObjectByUniqueId(this.base.history[turn]);
      return victim ? victim.location : null;
    }
  }, {
    key: "range",
    get: function get() {
      return this.attackRange;
    }
    /**
     * Alpha value of range metaObject.
     *
     * @readonly
     */

  }, {
    key: 'range.alpha',
    get: function get() {
      return 0.5;
    }
  }]);

  return AttackPlug;
}(_root_canvasObjects_Extension__WEBPACK_IMPORTED_MODULE_0__["Extension"]);

/***/ }),

/***/ "./game/lib/plugins/attack/health/visualizer/js/AttackedPlug.js":
/*!**********************************************************************!*\
  !*** ./game/lib/plugins/attack/health/visualizer/js/AttackedPlug.js ***!
  \**********************************************************************/
/*! exports provided: AttackedPlug */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttackedPlug", function() { return AttackedPlug; });
/* harmony import */ var _root_canvasObjects_Extension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~root/canvasObjects/Extension */ "./game/lib/plugins/root/visualizer/js/canvasObjects/Extension.js");
/* harmony import */ var _root_Util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~root/Util */ "./game/lib/plugins/root/visualizer/js/Util.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



// typehints-only

/**
 * Extension for an object that is attacked.
 */
var AttackedPlug =
/*#__PURE__*/
function (_Extension) {
  _inherits(AttackedPlug, _Extension);

  /**
   * @param {ExtensibleObject} base - The object that is being extended.
   */
  function AttackedPlug(base) {
    var _this;

    _classCallCheck(this, AttackedPlug);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AttackedPlug).call(this, base));

    _this.assignMethodOrder('getImageName', 1);

    return _this;
  }
  /**
   * Returns the object's image name.
   *
   * @return {(string|string[])} The object's image name.
   */


  _createClass(AttackedPlug, [{
    key: "getImageName",
    value: function getImageName() {
      var map = this.map;
      var HIT_TIME = 0.15;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.base.getHistoryTurns('attacked')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var attackedTurn = _step.value;

          if (attackedTurn === map.attackTurn && map.turnTime > 1 - HIT_TIME || attackedTurn === map.turn && map.turnTime < HIT_TIME) {
            return 'hit';
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return null;
    }
  }]);

  return AttackedPlug;
}(_root_canvasObjects_Extension__WEBPACK_IMPORTED_MODULE_0__["Extension"]);

/***/ }),

/***/ "./game/lib/plugins/classes/building/base/visualizer/js/BuildingPlug.js":
/*!******************************************************************************!*\
  !*** ./game/lib/plugins/classes/building/base/visualizer/js/BuildingPlug.js ***!
  \******************************************************************************/
/*! exports provided: BuildingPlug */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingPlug", function() { return BuildingPlug; });
/* harmony import */ var _root_canvasObjects_Extension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~root/canvasObjects/Extension */ "./game/lib/plugins/root/visualizer/js/canvasObjects/Extension.js");
/* harmony import */ var _root_GameMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~root/GameMap */ "./game/lib/plugins/root/visualizer/js/GameMap.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



// typehints-only

/**
 * Object to extend a building object. Makes the hint show building location.
 */
var BuildingPlug =
/*#__PURE__*/
function (_Extension) {
  _inherits(BuildingPlug, _Extension);

  /**
   * @param {ExtensibleObject} base - The object that is being extended.
   */
  function BuildingPlug(base) {
    var _this;

    _classCallCheck(this, BuildingPlug);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BuildingPlug).call(this, base));
    /**
     * @type Building
     */

    _this.base = base;

    _this.assignMethodOrder('getHint', 1);

    return _this;
  }
  /**
   * Returns this object's hint.
   *
   * @return {string} This object's hint.
   */


  _createClass(BuildingPlug, [{
    key: "getHint",
    value: function getHint() {
      return "".concat(this.base.id).concat(this.base.location);
    }
  }]);

  return BuildingPlug;
}(_root_canvasObjects_Extension__WEBPACK_IMPORTED_MODULE_0__["Extension"]);

/***/ }),

/***/ "./game/lib/plugins/classes/building/castle/visualizer/js/Castle.js":
/*!**************************************************************************!*\
  !*** ./game/lib/plugins/classes/building/castle/visualizer/js/Castle.js ***!
  \**************************************************************************/
/*! exports provided: Castle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Castle", function() { return Castle; });
/* harmony import */ var _root_canvasObjects_livingObjects_LivingObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~root/canvasObjects/livingObjects/LivingObject */ "./game/lib/plugins/root/visualizer/js/canvasObjects/livingObjects/LivingObject.js");
/* harmony import */ var _plugins_health_visualizer_js_CircularHealthBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~plugins/health/visualizer/js/CircularHealthBar */ "./game/lib/plugins/health/visualizer/js/CircularHealthBar.js");
/* harmony import */ var _root_Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~root/Util */ "./game/lib/plugins/root/visualizer/js/Util.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// typehints-only



/**
 * This class represents a castle
 */

var Castle =
/*#__PURE__*/
function (_LivingObject) {
  _inherits(Castle, _LivingObject);

  /**
   * @param {GameMap} map - The map this object belongs to.
   * @param {Object} obj - An object parsed from the replay, containing all this class' attribute.
   */
  function Castle(map, obj) {
    var _this;

    _classCallCheck(this, Castle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Castle).call(this, map));
    _this.range = obj.territoryRange;

    _this.overrideAttributes(obj);

    return _this;
  }
  /**
   * Returns the object's image name.
   *
   * @return {(string|string[])} The object's image name.
   */


  _createClass(Castle, [{
    key: "getImageName",
    value: function getImageName() {
      if (this.map.turn < 1) {
        return 'castleGreen';
      }

      if (this.health < this.maxHealth / 3) {
        return 'castleC';
      }

      if (this.health < this.maxHealth * (2 / 3)) {
        return 'castleB';
      }

      return 'castleA';
    }
    /**
     * Returns the locations around this object is collected. Used in {@see CanvasObject.IsInMouseRange}.
     *
     * @return {number[][]} The locations around this object is collected.
     */

  }, {
    key: "draw",

    /**
     * Draws the object.
     */
    value: function draw() {
      var SIZE_MULT = 7;
      var image = this.getImage();
      var drawLocation = this.getDrawLocation();
      var frame = this.getAnimationState(image);
      this.map.drawFromFrame(image, frame, drawLocation, SIZE_MULT, SIZE_MULT);
    }
    /**
     * Creates all the object's metaObjects.
     */

  }, {
    key: "createMetaObjects",
    value: function createMetaObjects() {
      _get(_getPrototypeOf(Castle.prototype), "createMetaObjects", this).call(this);

      new _plugins_health_visualizer_js_CircularHealthBar__WEBPACK_IMPORTED_MODULE_1__["CircularHealthBar"](this);
    }
  }, {
    key: "collectLocations",
    get: function get() {
      return [this.location];
    }
  }]);

  return Castle;
}(_root_canvasObjects_livingObjects_LivingObject__WEBPACK_IMPORTED_MODULE_0__["LivingObject"]);

/***/ }),

/***/ "./game/lib/plugins/classes/building/castle/visualizer/js/scorebarCastleHealth.js":
/*!****************************************************************************************!*\
  !*** ./game/lib/plugins/classes/building/castle/visualizer/js/scorebarCastleHealth.js ***!
  \****************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _root_Visualizer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~root/Visualizer */ "./game/lib/plugins/root/visualizer/js/Visualizer.js");
/* harmony import */ var _Castle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Castle */ "./game/lib/plugins/classes/building/castle/visualizer/js/Castle.js");



_root_Visualizer__WEBPACK_IMPORTED_MODULE_0__["Visualizer"].prototype.getScoreBarFraction = function (playerId, turn) {
  var castle = this.map.canvasObjects.find(function (obj) {
    return obj.ownerId === playerId && obj instanceof _Castle__WEBPACK_IMPORTED_MODULE_1__["Castle"];
  });

  if (!castle) {
    if (turn === 0) {
      return 1;
    }

    return 0;
  }

  return castle.history[turn].health / castle.maxHealth;
};

/***/ }),

/***/ "./game/lib/plugins/classes/elf/visualizer/js/Elf.js":
/*!***********************************************************!*\
  !*** ./game/lib/plugins/classes/elf/visualizer/js/Elf.js ***!
  \***********************************************************/
/*! exports provided: Elf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Elf", function() { return Elf; });
/* harmony import */ var _plugins_move_base_visualizer_js_MovingObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~plugins/move/base/visualizer/js/MovingObject */ "./game/lib/plugins/move/base/visualizer/js/MovingObject.js");
/* harmony import */ var _root_canvasObjects_metaObjects_Glow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~root/canvasObjects/metaObjects/Glow */ "./game/lib/plugins/root/visualizer/js/canvasObjects/metaObjects/Glow.js");
/* harmony import */ var _root_canvasObjects_metaObjects_Label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~root/canvasObjects/metaObjects/Label */ "./game/lib/plugins/root/visualizer/js/canvasObjects/metaObjects/Label.js");
/* harmony import */ var _root_canvasObjects_Location__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~root/canvasObjects/Location */ "./game/lib/plugins/root/visualizer/js/canvasObjects/Location.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




// typehints-only

/**
 * This class represents an elf object.
 */

var Elf =
/*#__PURE__*/
function (_MovingObject) {
  _inherits(Elf, _MovingObject);

  /**
   * @param {GameMap} map - The map this object belongs to.
   * @param {Object} obj - An object parsed from the replay, containing all this class' attribute.
   */
  function Elf(map, obj) {
    var _this;

    _classCallCheck(this, Elf);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Elf).call(this, map));

    _this.overrideAttributes(obj);

    _this.hasCountLabel = true;
    _this.BAR_Y_OFFSET = 2.4 * _this.map.state.replay.resizeFactor;
    return _this;
  }
  /**
   * Creates all the object's metaObjects.
   */


  _createClass(Elf, [{
    key: "createMetaObjects",
    value: function createMetaObjects() {
      var _this2 = this;

      _get(_getPrototypeOf(Elf.prototype), "createMetaObjects", this).call(this);

      new _root_canvasObjects_metaObjects_Label__WEBPACK_IMPORTED_MODULE_2__["Label"](this);

      if (this.range !== undefined) {
        new _root_canvasObjects_metaObjects_Glow__WEBPACK_IMPORTED_MODULE_1__["Glow"](this);
      }

      Object.keys(this.extensions).map(function (ext) {
        return _this2.extensions[ext];
      }).filter(function (ext) {
        return ext.range !== undefined;
      }).forEach(function (ext) {
        return new _root_canvasObjects_metaObjects_Glow__WEBPACK_IMPORTED_MODULE_1__["Glow"](ext);
      });
    }
    /**
     * Returns the object's image name.
     *
     * @return {(string|string[])} The object's image name.
     */

  }, {
    key: "getImageName",
    value: function getImageName() {
      return this.currentlyAttacking() ? 'elfAttack' : this.currentlyFast() ? 'elfSpeedUp' : 'elf';
    }
    /**
     * @return {boolean} - Weather the creature is currently attacking or not.
     */

  }, {
    key: "currentlyAttacking",
    value: function currentlyAttacking() {
      return this.history[this.map.turn + 1].healthAttack !== undefined;
    }
    /**
     * @return {boolean} - Weather the creature is currently speed up or not.
     */

  }, {
    key: "currentlyFast",
    value: function currentlyFast() {
      return this.spells && this.spells.some(function (spell) {
        return spell.spellType === 'SpeedUp';
      });
    }
    /**
     * Return the projectile image for this character.
     */

  }, {
    key: "getAttackPath",

    /**
     * Calculate the linear interpolation of attack path for this attacker.
     *
     * @param {Location} targetLocation - Location of the target object.
     */
    value: function getAttackPath(targetLocation) {
      return _root_canvasObjects_Location__WEBPACK_IMPORTED_MODULE_3__["Location"].linearInterpolation(this.getDrawLocation().add(targetLocation.sub(this.getDrawLocation()).scale(0.1)), targetLocation, this.map.turnTime * 0.85);
    }
    /**
     * The opacity to the elf.
     *
     * @return {number} The opacity to the elf.
     */

  }, {
    key: "checkOpacity",
    value: function checkOpacity() {
      return this.spells && this.spells.some(function (spell) {
        return spell.spellType === 'Invisibility';
      }) ? this.map.ctx.globalAlpha / 2 : this.map.ctx.globalAlpha;
    }
    /**
     * Draws the object on the canvas.
     */

  }, {
    key: "draw",
    value: function draw() {
      var SIZE_MULT = 3;
      var size = this.size * SIZE_MULT; // Find the correct image to display

      var image = this.getImage();
      var drawLocation = this.getDrawLocation();
      var ratio = image.frameWidth / image.frameHeight;
      var frame = this.getAnimationState(image);

      if (this.callFirstExtensionsMethodByOrder('noAnimationWhileIdle') && !this.currentlyAttacking()) {
        frame = this.getNoIdleWhileAnimationFrame(frame);
      }

      var oldOpacity = this.map.ctx.globalAlpha;
      this.map.ctx.globalAlpha = this.checkOpacity();
      this.map.drawFromFrame(image, frame, drawLocation, size * ratio, size, this.angle);
      this.map.ctx.globalAlpha = oldOpacity;
    }
    /**
     * Returns the correct frame for no idle animation.
     *
     * @param {number} frame - The frame.
     * @return {number} The first frame if the actor is idle.
     */

  }, {
    key: "getNoIdleWhileAnimationFrame",
    value: function getNoIdleWhileAnimationFrame(frame) {
      if (this.location && this.history[this.map.turn - 1] && this.history[this.map.turn - 1].location && this.location.eq(this.history[this.map.turn - 1].location)) {
        return 0;
      }

      return frame;
    }
    /**
     * Play audio based on the map's state.
     */

  }, {
    key: "playAudio",
    value: function playAudio() {
      this.playExtensionsAudio();
    }
  }, {
    key: "attackImage",
    get: function get() {
      return this.ownerId === 0 ? this.map.images.magic0 : this.map.images.magic1;
    }
  }]);

  return Elf;
}(_plugins_move_base_visualizer_js_MovingObject__WEBPACK_IMPORTED_MODULE_0__["MovingObject"]);

/***/ }),

/***/ "./game/lib/plugins/classes/ice_troll/visualizer/js/IceTroll.js":
/*!**********************************************************************!*\
  !*** ./game/lib/plugins/classes/ice_troll/visualizer/js/IceTroll.js ***!
  \**********************************************************************/
/*! exports provided: IceTroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IceTroll", function() { return IceTroll; });
/* harmony import */ var _plugins_move_base_visualizer_js_MovingObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~plugins/move/base/visualizer/js/MovingObject */ "./game/lib/plugins/move/base/visualizer/js/MovingObject.js");
/* harmony import */ var _root_GameMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~root/GameMap */ "./game/lib/plugins/root/visualizer/js/GameMap.js");
/* harmony import */ var _root_canvasObjects_metaObjects_Label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~root/canvasObjects/metaObjects/Label */ "./game/lib/plugins/root/visualizer/js/canvasObjects/metaObjects/Label.js");
/* harmony import */ var _root_canvasObjects_Location__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~root/canvasObjects/Location */ "./game/lib/plugins/root/visualizer/js/canvasObjects/Location.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




// typehints-only

/**
 * This class represents a creature.
 */

var IceTroll =
/*#__PURE__*/
function (_MovingObject) {
  _inherits(IceTroll, _MovingObject);

  /**
   * @param {GameMap} map - The map this object belongs to.
   * @param {Object} obj - An object parsed from the replay, containing all this class' attribute.
   */
  function IceTroll(map, obj) {
    var _this;

    _classCallCheck(this, IceTroll);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(IceTroll).call(this, map));
    /** @see MovingObject.countLabelOnly */

    _this.countLabelOnly = true;
    _this.hasCountLabel = true;

    _this.overrideAttributes(obj);

    return _this;
  }
  /**
   * Returns the object's image name.
   *
   * @return {(string|string[])} The object's image name.
   */


  _createClass(IceTroll, [{
    key: "getImageName",
    value: function getImageName() {
      return this.currentlyAttacking() ? 'iceTrollAttack' : 'iceTroll';
    }
    /**
     * @return {boolean} - Weather the creature is currently attacking or not.
     */

  }, {
    key: "currentlyAttacking",
    value: function currentlyAttacking() {
      return this.history[this.map.turn + 1].healthAttack !== undefined;
    }
    /**
     * Calculate the linear interpolation of attack path for this attacker.
     *
     * @param {Location} targetLocation - Location of the target object.
     */

  }, {
    key: "getAttackPath",
    value: function getAttackPath(targetLocation) {
      return _root_canvasObjects_Location__WEBPACK_IMPORTED_MODULE_3__["Location"].linearInterpolation(this.getDrawLocation().add(targetLocation.sub(this.getDrawLocation()).scale(0.1)), targetLocation, this.map.turnTime * 0.85);
    }
    /**
     * Draws the object on the canvas.
     */

  }, {
    key: "draw",
    value: function draw() {
      var SIZE_MULT = 3;
      var size = this.size * SIZE_MULT;
      var frame = _root_GameMap__WEBPACK_IMPORTED_MODULE_1__["GameMap"].ORIENTATION[this.orientation];
      var image = this.getImage();
      var drawLocation = this.getDrawLocation();
      var angle = this.angle;
      frame = this.getAnimationState(image);

      if (this.callFirstExtensionsMethodByOrder('noAnimationWhileIdle') && !this.currentlyAttacking()) {
        frame = this.getNoIdleWhileAnimationFrame(frame);
      }

      this.map.drawFromFrame(image, frame, drawLocation, size, size, angle);
    }
    /**
     * Returns the correct frame for no idle animation.
     *
     * @param {number} frame - The frame.
     * @return {number} The first frame if the actor is idle.
     */

  }, {
    key: "getNoIdleWhileAnimationFrame",
    value: function getNoIdleWhileAnimationFrame(frame) {
      if (this.location && this.history[this.map.turn - 1] && this.history[this.map.turn - 1].location && this.location.eq(this.history[this.map.turn - 1].location)) {
        return 0;
      }

      return frame;
    }
    /**
     * Creates all the object's metaObjects.
     */

  }, {
    key: "createMetaObjects",
    value: function createMetaObjects() {
      _get(_getPrototypeOf(IceTroll.prototype), "createMetaObjects", this).call(this);

      new _root_canvasObjects_metaObjects_Label__WEBPACK_IMPORTED_MODULE_2__["Label"](this);
    }
  }]);

  return IceTroll;
}(_plugins_move_base_visualizer_js_MovingObject__WEBPACK_IMPORTED_MODULE_0__["MovingObject"]);

/***/ }),

/***/ "./game/lib/plugins/classes/lava_giant/visualizer/js/LavaGiant.js":
/*!************************************************************************!*\
  !*** ./game/lib/plugins/classes/lava_giant/visualizer/js/LavaGiant.js ***!
  \************************************************************************/
/*! exports provided: LavaGiant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LavaGiant", function() { return LavaGiant; });
/* harmony import */ var _plugins_move_base_visualizer_js_MovingObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~plugins/move/base/visualizer/js/MovingObject */ "./game/lib/plugins/move/base/visualizer/js/MovingObject.js");
/* harmony import */ var _root_GameMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~root/GameMap */ "./game/lib/plugins/root/visualizer/js/GameMap.js");
/* harmony import */ var _root_canvasObjects_metaObjects_Label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~root/canvasObjects/metaObjects/Label */ "./game/lib/plugins/root/visualizer/js/canvasObjects/metaObjects/Label.js");
/* harmony import */ var _root_canvasObjects_Location__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~root/canvasObjects/Location */ "./game/lib/plugins/root/visualizer/js/canvasObjects/Location.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




// typehints-only

/**
 * This class represents a creature.
 */

var LavaGiant =
/*#__PURE__*/
function (_MovingObject) {
  _inherits(LavaGiant, _MovingObject);

  /**
   * @param {GameMap} map - The map this object belongs to.
   * @param {Object} obj - An object parsed from the replay, containing all this class' attribute.
   */
  function LavaGiant(map, obj) {
    var _this;

    _classCallCheck(this, LavaGiant);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LavaGiant).call(this, map));
    /** @see MovingObject.countLabelOnly */

    _this.countLabelOnly = true;
    _this.hasCountLabel = true;

    _this.overrideAttributes(obj);

    return _this;
  }
  /**
   * Returns the object's image name.
   *
   * @return {(string|string[])} The object's image name.
   */


  _createClass(LavaGiant, [{
    key: "getImageName",
    value: function getImageName() {
      return this.currentlyAttacking() ? 'lavaGiantAttack' : 'lavaGiant';
    }
    /**
     * @return {boolean} - Weather the creature is currently attacking or not.
     */

  }, {
    key: "currentlyAttacking",
    value: function currentlyAttacking() {
      return this.history[this.map.turn + 1].healthAttack !== undefined;
    }
    /**
     * Draws the object on the canvas.
     */

  }, {
    key: "draw",
    value: function draw() {
      this.predrawExtensions();
      var SIZE_MULT = this.currentlyAttacking() ? 3.2 : 2.5;
      var drawLocation = this.getDrawLocation();
      var size = this.size * SIZE_MULT;
      var frame = _root_GameMap__WEBPACK_IMPORTED_MODULE_1__["GameMap"].ORIENTATION[this.orientation];
      var image = this.getImage();
      var angle = 0;

      if (this.callFirstExtensionsMethodByOrder('rotatableImage')) {
        angle = this.angle;
        frame = this.getAnimationState(image);
      }

      if (this.callFirstExtensionsMethodByOrder('noAnimationWhileIdle') && !this.currentlyAttacking()) {
        frame = this.getNoIdleWhileAnimationFrame(frame);
      }

      this.map.drawFromFrame(image, frame, drawLocation, size, size, angle);
    }
    /**
     * Returns the correct frame for no idle animation.
     *
     * @param {number} frame - The frame.
     * @return {number} The first frame if the actor is idle.
     */

  }, {
    key: "getNoIdleWhileAnimationFrame",
    value: function getNoIdleWhileAnimationFrame(frame) {
      if (this.location && this.history[this.map.turn - 1] && this.history[this.map.turn - 1].location && this.location.eq(this.history[this.map.turn - 1].location)) {
        return 0;
      }

      return frame;
    }
    /**
     * Calculate the linear interpolation of attack path for this attacker.
     *
     * @param {Location} targetLocation - Location of the target object.
     */

  }, {
    key: "getAttackPath",
    value: function getAttackPath(targetLocation) {
      return _root_canvasObjects_Location__WEBPACK_IMPORTED_MODULE_3__["Location"].linearInterpolation(this.getDrawLocation().add(targetLocation.sub(this.getDrawLocation()).scale(0.1)), targetLocation, this.map.turnTime * 0.85);
    }
    /**
     * Return the projectile image for this character.
     */

  }, {
    key: "createMetaObjects",

    /**
     * Creates all the object's metaObjects.
     */
    value: function createMetaObjects() {
      _get(_getPrototypeOf(LavaGiant.prototype), "createMetaObjects", this).call(this);

      new _root_canvasObjects_metaObjects_Label__WEBPACK_IMPORTED_MODULE_2__["Label"](this);
    }
  }, {
    key: "attackImage",
    get: function get() {
      return this.ownerId === 0 ? this.map.images.fire0 : this.map.images.fire1;
    }
  }]);

  return LavaGiant;
}(_plugins_move_base_visualizer_js_MovingObject__WEBPACK_IMPORTED_MODULE_0__["MovingObject"]);

/***/ }),

/***/ "./game/lib/plugins/classes/tornado/visualizer/js/Tornado.js":
/*!*******************************************************************!*\
  !*** ./game/lib/plugins/classes/tornado/visualizer/js/Tornado.js ***!
  \*******************************************************************/
/*! exports provided: Tornado */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tornado", function() { return Tornado; });
/* harmony import */ var _plugins_move_base_visualizer_js_MovingObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~plugins/move/base/visualizer/js/MovingObject */ "./game/lib/plugins/move/base/visualizer/js/MovingObject.js");
/* harmony import */ var _root_GameMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~root/GameMap */ "./game/lib/plugins/root/visualizer/js/GameMap.js");
/* harmony import */ var _root_canvasObjects_metaObjects_Label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~root/canvasObjects/metaObjects/Label */ "./game/lib/plugins/root/visualizer/js/canvasObjects/metaObjects/Label.js");
/* harmony import */ var _root_canvasObjects_Location__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~root/canvasObjects/Location */ "./game/lib/plugins/root/visualizer/js/canvasObjects/Location.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




// typehints-only

/**
 * This class represents a Tornado.
 */

var Tornado =
/*#__PURE__*/
function (_MovingObject) {
  _inherits(Tornado, _MovingObject);

  /**
   * @param {GameMap} map - The map this object belongs to.
   * @param {Object} obj - An object parsed from the replay, containing all this class' attribute.
   */
  function Tornado(map, obj) {
    var _this;

    _classCallCheck(this, Tornado);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tornado).call(this, map));
    /** @see MovingObject.countLabelOnly */

    _this.countLabelOnly = true;
    _this.hasCountLabel = true;

    _this.overrideAttributes(obj);

    return _this;
  }
  /**
   * Returns the object's image name.
   *
   * @return {(string|string[])} The object's image name.
   */


  _createClass(Tornado, [{
    key: "getImageName",
    value: function getImageName() {
      return 'tornado';
    }
    /**
     * @return {boolean} - Weather the tornado is currently attacking or not.
     */

  }, {
    key: "currentlyAttacking",
    value: function currentlyAttacking() {
      return this.history[this.map.turn + 1].healthAttack !== undefined;
    }
    /**
     * Calculate the linear interpolation of attack path for this attacker.
     *
     * @param {Location} targetLocation - Location of the target object.
     */

  }, {
    key: "getAttackPath",
    value: function getAttackPath(targetLocation) {
      return _root_canvasObjects_Location__WEBPACK_IMPORTED_MODULE_3__["Location"].linearInterpolation(this.getDrawLocation().add(targetLocation.sub(this.getDrawLocation()).scale(0.1)), targetLocation, this.map.turnTime * 0.85);
    }
    /**
     Draws the object on the canvas.
    **/

  }, {
    key: "draw",
    value: function draw() {
      var SIZE_MULT = 3;
      var size = this.size * SIZE_MULT;
      var image = this.getImage();
      var drawLocation = this.getDrawLocation();
      var frame = this.getAnimationState(image);

      if (this.callFirstExtensionsMethodByOrder('noAnimationWhileIdle') && !this.currentlyAttacking()) {
        frame = this.getNoIdleWhileAnimationFrame(frame);
      }

      this.map.drawFromFrame(image, frame, drawLocation, size, size);
    }
    /**
     * Returns the correct frame for no idle animation.
     *
     * @param {number} frame - The frame.
     * @return {number} The first frame if the actor is idle.
     */

  }, {
    key: "getNoIdleWhileAnimationFrame",
    value: function getNoIdleWhileAnimationFrame(frame) {
      if (this.location && this.history[this.map.turn - 1] && this.history[this.map.turn - 1].location && this.location.eq(this.history[this.map.turn - 1].location)) {
        return 0;
      }

      return frame;
    }
    /**
     * Creates all the object's metaObjects.
     */

  }, {
    key: "createMetaObjects",
    value: function createMetaObjects() {
      _get(_getPrototypeOf(Tornado.prototype), "createMetaObjects", this).call(this);

      new _root_canvasObjects_metaObjects_Label__WEBPACK_IMPORTED_MODULE_2__["Label"](this);
    }
  }]);

  return Tornado;
}(_plugins_move_base_visualizer_js_MovingObject__WEBPACK_IMPORTED_MODULE_0__["MovingObject"]);

/***/ }),

/***/ "./game/lib/plugins/health/visualizer/js/CircularHealthBar.js":
/*!********************************************************************!*\
  !*** ./game/lib/plugins/health/visualizer/js/CircularHealthBar.js ***!
  \********************************************************************/
/*! exports provided: CircularHealthBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircularHealthBar", function() { return CircularHealthBar; });
/* harmony import */ var _root_canvasObjects_metaObjects_MetaObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~root/canvasObjects/metaObjects/MetaObject */ "./game/lib/plugins/root/visualizer/js/canvasObjects/metaObjects/MetaObject.js");
/* harmony import */ var _root_Util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~root/Util */ "./game/lib/plugins/root/visualizer/js/Util.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



/**
 * Meta object for adding a frozen image around a frozen pirate.
 */

var CircularHealthBar =
/*#__PURE__*/
function (_MetaObject) {
  _inherits(CircularHealthBar, _MetaObject);

  function CircularHealthBar() {
    _classCallCheck(this, CircularHealthBar);

    return _possibleConstructorReturn(this, _getPrototypeOf(CircularHealthBar).apply(this, arguments));
  }

  _createClass(CircularHealthBar, [{
    key: "isAlive",

    /**
     * Whether or not the object is alive in a given turn.
     *
     * @param {number} turn - The turn.
     * @return {boolean} - Is the object alive.
     */
    value: function isAlive(turn) {
      return this.creator.isAlive(turn) && this.map.state.config.healthBar.is('on');
    }
    /**
     * Draws the object on the canvas.
     */

  }, {
    key: "draw",
    value: function draw() {
      var map = this.map;
      var SCALE = map.scale;
      var SIZE_MULT = 7; // Draw health bars

      var baseLocation = this.creator.getDrawLocation();
      var remainingHealth = this.creator.health / this.creator.maxHealth;
      var barX = baseLocation.col;
      var barY = baseLocation.row;
      this.map.drawCircularHealthBar(barX, barY, SIZE_MULT * 0.73 * this.map.scale * this.map.state.replay.resizeFactor, Object(_root_Util__WEBPACK_IMPORTED_MODULE_1__["getColor"])(this.creator.ownerId), remainingHealth);
    }
  }]);

  return CircularHealthBar;
}(_root_canvasObjects_metaObjects_MetaObject__WEBPACK_IMPORTED_MODULE_0__["MetaObject"]);

/***/ }),

/***/ "./game/lib/plugins/health/visualizer/js/HealthBar.js":
/*!************************************************************!*\
  !*** ./game/lib/plugins/health/visualizer/js/HealthBar.js ***!
  \************************************************************/
/*! exports provided: HealthBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthBar", function() { return HealthBar; });
/* harmony import */ var _root_canvasObjects_metaObjects_MetaObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~root/canvasObjects/metaObjects/MetaObject */ "./game/lib/plugins/root/visualizer/js/canvasObjects/metaObjects/MetaObject.js");
/* harmony import */ var _root_Util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~root/Util */ "./game/lib/plugins/root/visualizer/js/Util.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



/**
 * Meta object for adding a frozen image around a frozen pirate.
 */

var HealthBar =
/*#__PURE__*/
function (_MetaObject) {
  _inherits(HealthBar, _MetaObject);

  function HealthBar() {
    _classCallCheck(this, HealthBar);

    return _possibleConstructorReturn(this, _getPrototypeOf(HealthBar).apply(this, arguments));
  }

  _createClass(HealthBar, [{
    key: "isAlive",

    /**
     * Whether or not the object is alive in a given turn.
     *
     * @param {number} turn - The turn.
     * @return {boolean} - Is the object alive.
     */
    value: function isAlive(turn) {
      return this.creator.base.isAlive(turn) && this.map.state.config.healthBar.is('on');
    }
    /**
     * Draws the object on the canvas.
     */

  }, {
    key: "draw",
    value: function draw() {
      var map = this.map;
      var SCALE = map.scale;
      var X_OFFSET = -0.75 * SCALE * this.replay.resizeFactor; // Draw health bars

      var BAR_WIDTH = map.drawScale * 1.5;
      var BAR_HEIGHT = 0.2 * map.drawScale;
      var BAR_Y_OFFSET = this.creator.BAR_Y_OFFSET || 2.75 * this.replay.resizeFactor;
      var baseLocation = this.creator.base.getDrawLocation();
      var remainingHealth = this.creator.getHealth(map.turn) / this.creator.base.maxHealth;
      var barX = baseLocation.col + X_OFFSET;
      var barY = baseLocation.row - SCALE * BAR_Y_OFFSET;

      if (this.creator.base.orientation === 'n' || this.creator.base.orientation === 's') {
        // Adjusting the bar height to the pirate calcOrientation
        barY -= SCALE * 2 / 3;
      }

      map.drawBar(barX, barY, BAR_HEIGHT, BAR_WIDTH, Object(_root_Util__WEBPACK_IMPORTED_MODULE_1__["getColor"])(this.creator.base.ownerId), remainingHealth);
    }
  }]);

  return HealthBar;
}(_root_canvasObjects_metaObjects_MetaObject__WEBPACK_IMPORTED_MODULE_0__["MetaObject"]);

/***/ }),

/***/ "./game/lib/plugins/health/visualizer/js/HealthPlug.js":
/*!*************************************************************!*\
  !*** ./game/lib/plugins/health/visualizer/js/HealthPlug.js ***!
  \*************************************************************/
/*! exports provided: HealthPlug */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthPlug", function() { return HealthPlug; });
/* harmony import */ var _root_canvasObjects_Extension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~root/canvasObjects/Extension */ "./game/lib/plugins/root/visualizer/js/canvasObjects/Extension.js");
/* harmony import */ var _HealthBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HealthBar */ "./game/lib/plugins/health/visualizer/js/HealthBar.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


// typehints-only

/**
 * This class is an extension for an object with health.
 */

var HealthPlug =
/*#__PURE__*/
function (_Extension) {
  _inherits(HealthPlug, _Extension);

  /**
   * @param {ExtensibleObject} base - The object that is being extended.
   */
  function HealthPlug(base) {
    var _this;

    _classCallCheck(this, HealthPlug);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HealthPlug).call(this, base));
    _this.base = base;
    _this.health = 0;
    return _this;
  }
  /**
   * Returns the object's hp in the given turn.
   *
   * @param {number} turn - The turn to check.
   * @return {number} The object's hp in the given turn.
   */


  _createClass(HealthPlug, [{
    key: "getHealth",
    value: function getHealth(turn) {
      return this.health !== undefined ? this.health : 0;
    }
    /**
     * Return whether or not the object is alive in a given time.
     *
     * @param {number} time - The time to check.
     * @return {boolean} Whether or not the object is alive.
     */

  }, {
    key: "isAlive",
    value: function isAlive(time) {
      return Boolean(this.health);
    }
    /**
     * Creates all the object's metaObjects.
     */

  }, {
    key: "createMetaObjects",
    value: function createMetaObjects() {
      new _HealthBar__WEBPACK_IMPORTED_MODULE_1__["HealthBar"](this);
    }
  }]);

  return HealthPlug;
}(_root_canvasObjects_Extension__WEBPACK_IMPORTED_MODULE_0__["Extension"]);

/***/ }),

/***/ "./game/lib/plugins/mana/base/visualizer/js/showManaInScoreSlot.js":
/*!*************************************************************************!*\
  !*** ./game/lib/plugins/mana/base/visualizer/js/showManaInScoreSlot.js ***!
  \*************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _root_Visualizer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~root/Visualizer */ "./game/lib/plugins/root/visualizer/js/Visualizer.js");

/**
 * Returns the scores of the players. Each element in the array contains the score of the player in every turn.
 *
 * @return {number[][]} An array of the scores of the players.
 */

_root_Visualizer__WEBPACK_IMPORTED_MODULE_0__["Visualizer"].prototype.getScores = function () {
  return this.state.replay.manaHistories;
};

/***/ }),

/***/ "./game/lib/plugins/mana/produce/base/visualizer/js/BuildingHealthBar.js":
/*!*******************************************************************************!*\
  !*** ./game/lib/plugins/mana/produce/base/visualizer/js/BuildingHealthBar.js ***!
  \*******************************************************************************/
/*! exports provided: BuildingHealthBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingHealthBar", function() { return BuildingHealthBar; });
/* harmony import */ var _root_canvasObjects_Location__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~root/canvasObjects/Location */ "./game/lib/plugins/root/visualizer/js/canvasObjects/Location.js");
/* harmony import */ var _root_canvasObjects_metaObjects_MetaObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~root/canvasObjects/metaObjects/MetaObject */ "./game/lib/plugins/root/visualizer/js/canvasObjects/metaObjects/MetaObject.js");
/* harmony import */ var _root_Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~root/Util */ "./game/lib/plugins/root/visualizer/js/Util.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




/**
 * Meta object for adding a frozen image around a frozen pirate.
 */

var BuildingHealthBar =
/*#__PURE__*/
function (_MetaObject) {
  _inherits(BuildingHealthBar, _MetaObject);

  function BuildingHealthBar() {
    _classCallCheck(this, BuildingHealthBar);

    return _possibleConstructorReturn(this, _getPrototypeOf(BuildingHealthBar).apply(this, arguments));
  }

  _createClass(BuildingHealthBar, [{
    key: "isAlive",

    /**
     * Whether or not the object is alive in a given turn.
     *
     * @param {number} turn - The turn.
     * @return {boolean} - Is the object alive.
     */
    value: function isAlive(turn) {
      return this.creator.isAlive(turn) && this.map.state.config.healthBar.is('on');
    }
    /**
    * Returns the offset needed to draw the image.
     * @return {Location} The offset needed to draw the image.
    */

  }, {
    key: "getOffset",
    value: function getOffset() {
      return new _root_canvasObjects_Location__WEBPACK_IMPORTED_MODULE_0__["Location"](this.creator.size * 4, 0);
    }
    /**
     * Return the healthbar's image to display.
     *
     * @return {string} The image to display of the freeze.
     */

  }, {
    key: "getImageName",
    value: function getImageName() {
      return 'heart';
    }
    /**
     * Draws the object on the canvas.
     */

  }, {
    key: "draw",
    value: function draw() {
      var percentage = this.creator.health / this.creator.maxHealth;
      var BAR_WIDTH = 4.5 * this.map.scale * this.map.state.replay.resizeFactor;
      var BAR_HEIGHT = 0.3 * this.map.scale * this.map.state.replay.resizeFactor;
      var location = this.getDrawLocation();
      var barX = location.col - 0.5 * BAR_WIDTH;
      var barY = location.row - 4 * this.map.scale * this.map.state.replay.resizeFactor;
      this.map.drawBar(barX, barY, BAR_HEIGHT, BAR_WIDTH, Object(_root_Util__WEBPACK_IMPORTED_MODULE_2__["getColor"])(this.creator.ownerId), percentage);
      var SIZE_MULT = 0.5;
      var size = SIZE_MULT;
      var image = this.getImage();
      var drawLocation = this.getDrawLocation();
      drawLocation.row = barY;
      drawLocation.col -= 0.5 * BAR_WIDTH + 0.5 * this.map.scale * this.map.state.replay.resizeFactor;
      var frame = this.getAnimationState(image);
      this.map.drawFromFrame(image, frame, drawLocation, size, size);
    }
  }]);

  return BuildingHealthBar;
}(_root_canvasObjects_metaObjects_MetaObject__WEBPACK_IMPORTED_MODULE_1__["MetaObject"]);

/***/ }),

/***/ "./game/lib/plugins/mana/produce/base/visualizer/js/PreProduceEffect.js":
/*!******************************************************************************!*\
  !*** ./game/lib/plugins/mana/produce/base/visualizer/js/PreProduceEffect.js ***!
  \******************************************************************************/
/*! exports provided: PreProduceEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreProduceEffect", function() { return PreProduceEffect; });
/* harmony import */ var _root_canvasObjects_Location__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~root/canvasObjects/Location */ "./game/lib/plugins/root/visualizer/js/canvasObjects/Location.js");
/* harmony import */ var _root_canvasObjects_metaObjects_MetaObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~root/canvasObjects/metaObjects/MetaObject */ "./game/lib/plugins/root/visualizer/js/canvasObjects/metaObjects/MetaObject.js");
/* harmony import */ var _root_canvasObjects_CanvasObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~root/canvasObjects/CanvasObject */ "./game/lib/plugins/root/visualizer/js/canvasObjects/CanvasObject.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




/**
 * Meta object for adding a spell animation to a portal in construction.
 */

var PreProduceEffect =
/*#__PURE__*/
function (_MetaObject) {
  _inherits(PreProduceEffect, _MetaObject);

  /**
   *
   * @param {CanvasObject} creator - The object in production.
   */
  function PreProduceEffect(creator) {
    var _this;

    _classCallCheck(this, PreProduceEffect);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PreProduceEffect).call(this, creator));
    _this.startTurn = _this.creator.startTurn;
    _this.creationTurns = _this.creator.creationTurns;
    _this.startProduction = _this.startTurn - _this.creationTurns;
    _this.ownerId = _this.creator.ownerId;
    return _this;
  }
  /**
   * Whether or not the object is alive in a given turn.
   *
   * @param {number} turn - The turn.
   * @return {boolean} - Is the object alive.
   */


  _createClass(PreProduceEffect, [{
    key: "isAlive",
    value: function isAlive(turn) {
      return this.startProduction <= turn && turn < this.startTurn;
    }
    /**
     * Returns the object's image name.
     *
     * @return {(string|string[])} The object's image name.
     */

  }, {
    key: "getImageName",
    value: function getImageName() {
      return 'preProduce';
    }
    /**
     * Draws the object on the canvas.
     */

  }, {
    key: "draw",
    value: function draw() {
      var SIZE_DIVISION = 0.045;
      var size = SIZE_DIVISION * this.map.state.replay.resizeFactor;
      this.size = size;
      var image = this.getImage();
      var drawLocation = this.getDrawLocation();
      var frame = this.getAnimationState(image);
      this.map.drawFromFrame(image, frame, drawLocation, this.size, this.size);
    }
  }]);

  return PreProduceEffect;
}(_root_canvasObjects_metaObjects_MetaObject__WEBPACK_IMPORTED_MODULE_1__["MetaObject"]);

/***/ }),

/***/ "./game/lib/plugins/mana/produce/base/visualizer/js/PreProduceObject.js":
/*!******************************************************************************!*\
  !*** ./game/lib/plugins/mana/produce/base/visualizer/js/PreProduceObject.js ***!
  \******************************************************************************/
/*! exports provided: PreProduceObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreProduceObject", function() { return PreProduceObject; });
/* harmony import */ var _root_canvasObjects_Location__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~root/canvasObjects/Location */ "./game/lib/plugins/root/visualizer/js/canvasObjects/Location.js");
/* harmony import */ var _root_canvasObjects_metaObjects_MetaObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~root/canvasObjects/metaObjects/MetaObject */ "./game/lib/plugins/root/visualizer/js/canvasObjects/metaObjects/MetaObject.js");
/* harmony import */ var _root_canvasObjects_CanvasObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~root/canvasObjects/CanvasObject */ "./game/lib/plugins/root/visualizer/js/canvasObjects/CanvasObject.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




/**
 * Meta object for adding a fading image of the creator product during it's production.
 */

var PreProduceObject =
/*#__PURE__*/
function (_MetaObject) {
  _inherits(PreProduceObject, _MetaObject);

  /**
   *
   * @param {CanvasObject} creator - The object in production.
   */
  function PreProduceObject(creator) {
    var _this;

    _classCallCheck(this, PreProduceObject);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PreProduceObject).call(this, creator));
    _this.startTurn = _this.creator.startTurn;
    _this.creationTurns = _this.creator.creationTurns;
    _this.startProduction = _this.startTurn - _this.creationTurns;
    return _this;
  }
  /**
   * Whether or not the object is alive in a given turn.
   *
   * @param {number} turn - The turn.
   * @return {boolean} - Is the object alive.
   */


  _createClass(PreProduceObject, [{
    key: "isAlive",
    value: function isAlive(turn) {
      return this.startProduction <= turn && turn < this.startTurn;
    }
    /**
     * Returns the current's oppacity for creator.
     *
     * @return {number} The alpha value.
     */

  }, {
    key: "getAlpha",
    value: function getAlpha() {
      return Math.min((this.map.time - this.startProduction) / this.creationTurns, 1);
    }
    /**
     * Draws the object on the canvas.
     */

  }, {
    key: "draw",
    value: function draw() {
      var oldAlpha = this.map.ctx.globalAlpha;
      this.map.ctx.globalAlpha = this.getAlpha();
      this.creator.draw(this.map.ctx.globalAlpha + 0.1);
      this.map.ctx.globalAlpha = oldAlpha;
    }
  }]);

  return PreProduceObject;
}(_root_canvasObjects_metaObjects_MetaObject__WEBPACK_IMPORTED_MODULE_1__["MetaObject"]);

/***/ }),

/***/ "./game/lib/plugins/mana/produce/base/visualizer/js/PreProducePlug.js":
/*!****************************************************************************!*\
  !*** ./game/lib/plugins/mana/produce/base/visualizer/js/PreProducePlug.js ***!
  \****************************************************************************/
/*! exports provided: PreProducePlug */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreProducePlug", function() { return PreProducePlug; });
/* harmony import */ var _root_canvasObjects_Extension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~root/canvasObjects/Extension */ "./game/lib/plugins/root/visualizer/js/canvasObjects/Extension.js");
/* harmony import */ var _PreProduceObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PreProduceObject */ "./game/lib/plugins/mana/produce/base/visualizer/js/PreProduceObject.js");
/* harmony import */ var _PreProduceEffect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PreProduceEffect */ "./game/lib/plugins/mana/produce/base/visualizer/js/PreProduceEffect.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


// typehints-only


/**
 * An extension for a product. Creates an PreProduceObject MetaObject.
 */

var PreProducePlug =
/*#__PURE__*/
function (_Extension) {
  _inherits(PreProducePlug, _Extension);

  function PreProducePlug() {
    _classCallCheck(this, PreProducePlug);

    return _possibleConstructorReturn(this, _getPrototypeOf(PreProducePlug).apply(this, arguments));
  }

  _createClass(PreProducePlug, [{
    key: "createMetaObjects",

    /**
     * Creates all the object's metaObjects.
     */
    value: function createMetaObjects() {
      new _PreProduceObject__WEBPACK_IMPORTED_MODULE_1__["PreProduceObject"](this);
      new _PreProduceEffect__WEBPACK_IMPORTED_MODULE_2__["PreProduceEffect"](this);
    }
  }]);

  return PreProducePlug;
}(_root_canvasObjects_Extension__WEBPACK_IMPORTED_MODULE_0__["Extension"]);

/***/ }),

/***/ "./game/lib/plugins/mana/produce/mana_fountain/visualizer/js/ManaFountain.js":
/*!***********************************************************************************!*\
  !*** ./game/lib/plugins/mana/produce/mana_fountain/visualizer/js/ManaFountain.js ***!
  \***********************************************************************************/
/*! exports provided: ManaFountain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManaFountain", function() { return ManaFountain; });
/* harmony import */ var _root_canvasObjects_livingObjects_LivingObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~root/canvasObjects/livingObjects/LivingObject */ "./game/lib/plugins/root/visualizer/js/canvasObjects/livingObjects/LivingObject.js");
/* harmony import */ var _base_visualizer_js_BuildingHealthBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../base/visualizer/js/BuildingHealthBar */ "./game/lib/plugins/mana/produce/base/visualizer/js/BuildingHealthBar.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


// typehints-only

/**
 * This class represents the mana fountain object.
 */

var ManaFountain =
/*#__PURE__*/
function (_LivingObject) {
  _inherits(ManaFountain, _LivingObject);

  /**
   * @param {GameMap} map - The map this object belongs to.
   * @param {Object} obj - An object parsed from the replay, containing all this class' attribute.
   */
  function ManaFountain(map, obj) {
    var _this;

    _classCallCheck(this, ManaFountain);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ManaFountain).call(this, map));
    _this.range = obj.territoryRange;

    _this.overrideAttributes(obj);

    return _this;
  }
  /**
   * Returns the object's image name.
   *
   * @return {(string|string[])} The object's image name.
   */


  _createClass(ManaFountain, [{
    key: "getImageName",
    value: function getImageName() {
      return 'manaFountain';
    }
    /**
     * Draws the object on the canvas.
     *
     * @param {number} mul - Multiply factor for pre produce.
     */

  }, {
    key: "draw",
    value: function draw() {
      var mul = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var SIZE_DIVISION = 0.045;
      var size = SIZE_DIVISION * this.map.state.replay.resizeFactor;
      this.size = size * mul;
      var image = this.getImage();
      var drawLocation = this.getDrawLocation();
      var frame = this.getAnimationState(image);
      this.map.drawFromFrame(image, frame, drawLocation, this.size, this.size);
    }
    /**
     * Creates all the object's metaObjects.
     */

  }, {
    key: "createMetaObjects",
    value: function createMetaObjects() {
      _get(_getPrototypeOf(ManaFountain.prototype), "createMetaObjects", this).call(this);

      new _base_visualizer_js_BuildingHealthBar__WEBPACK_IMPORTED_MODULE_1__["BuildingHealthBar"](this);
    }
  }]);

  return ManaFountain;
}(_root_canvasObjects_livingObjects_LivingObject__WEBPACK_IMPORTED_MODULE_0__["LivingObject"]);

/***/ }),

/***/ "./game/lib/plugins/mana/produce/portal/visualizer/js/Portal.js":
/*!**********************************************************************!*\
  !*** ./game/lib/plugins/mana/produce/portal/visualizer/js/Portal.js ***!
  \**********************************************************************/
/*! exports provided: Portal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Portal", function() { return Portal; });
/* harmony import */ var _root_canvasObjects_livingObjects_LivingObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~root/canvasObjects/livingObjects/LivingObject */ "./game/lib/plugins/root/visualizer/js/canvasObjects/livingObjects/LivingObject.js");
/* harmony import */ var _SummonBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SummonBar */ "./game/lib/plugins/mana/produce/portal/visualizer/js/SummonBar.js");
/* harmony import */ var _base_visualizer_js_BuildingHealthBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../base/visualizer/js/BuildingHealthBar */ "./game/lib/plugins/mana/produce/base/visualizer/js/BuildingHealthBar.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


// typehints-only


/**
 * This class represents the portal object.
 */

var Portal =
/*#__PURE__*/
function (_LivingObject) {
  _inherits(Portal, _LivingObject);

  /**
   * @param {GameMap} map - The map this object belongs to.
   * @param {Object} obj - An object parsed from the replay, containing all this class' attribute.
   */
  function Portal(map, obj) {
    var _this;

    _classCallCheck(this, Portal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Portal).call(this, map, obj));
    _this.range = obj.territoryRange;
    _this.size = null;

    _this.overrideAttributes(obj);

    return _this;
  }
  /**
   * Returns the object's image name.
   *
   * @return {(string|string[])} The object's image name.
   */


  _createClass(Portal, [{
    key: "getImageName",
    value: function getImageName() {
      var produce = this.history[this.map.turn].produce;

      if (produce && produce.productTurnsToCreation !== 0) {
        return 'portalSummoning';
      }

      if (this.health < this.maxHealth / 3) {
        return 'portalC';
      }

      if (this.health < this.maxHealth * (2 / 3)) {
        return 'portalB';
      }

      return 'portalA';
    }
    /**
     * Draws the object on the canvas.
     *
     * @param {number} mul - Multiply factor for pre produce.
     */

  }, {
    key: "draw",
    value: function draw() {
      var mul = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var SIZE_DIVISION = 0.045;
      var size = SIZE_DIVISION * this.map.state.replay.resizeFactor;
      this.size = size * mul;
      var image = this.getImage();
      var drawLocation = this.getDrawLocation();
      var frame = this.getAnimationState(image);
      this.map.drawFromFrame(image, frame, drawLocation, this.size, this.size);
    }
    /**
     * Creates all the object's metaObjects.
     */

  }, {
    key: "createMetaObjects",
    value: function createMetaObjects() {
      _get(_getPrototypeOf(Portal.prototype), "createMetaObjects", this).call(this);

      new _SummonBar__WEBPACK_IMPORTED_MODULE_1__["SummonBar"](this);
      new _base_visualizer_js_BuildingHealthBar__WEBPACK_IMPORTED_MODULE_2__["BuildingHealthBar"](this);
    }
  }]);

  return Portal;
}(_root_canvasObjects_livingObjects_LivingObject__WEBPACK_IMPORTED_MODULE_0__["LivingObject"]);

/***/ }),

/***/ "./game/lib/plugins/mana/produce/portal/visualizer/js/SummonBar.js":
/*!*************************************************************************!*\
  !*** ./game/lib/plugins/mana/produce/portal/visualizer/js/SummonBar.js ***!
  \*************************************************************************/
/*! exports provided: SummonBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummonBar", function() { return SummonBar; });
/* harmony import */ var _root_canvasObjects_Location__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~root/canvasObjects/Location */ "./game/lib/plugins/root/visualizer/js/canvasObjects/Location.js");
/* harmony import */ var _root_canvasObjects_metaObjects_MetaObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~root/canvasObjects/metaObjects/MetaObject */ "./game/lib/plugins/root/visualizer/js/canvasObjects/metaObjects/MetaObject.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



/**
 * Meta object for adding a frozen image around a frozen pirate.
 */

var SummonBar =
/*#__PURE__*/
function (_MetaObject) {
  _inherits(SummonBar, _MetaObject);

  function SummonBar() {
    _classCallCheck(this, SummonBar);

    return _possibleConstructorReturn(this, _getPrototypeOf(SummonBar).apply(this, arguments));
  }

  _createClass(SummonBar, [{
    key: "isAlive",

    /**
     * Whether or not the object is alive in a given turn.
     *
     * @param {number} turn - The turn.
     * @return {boolean} - Is the object alive.
     */
    value: function isAlive(turn) {
      var produce = this.creator.history[this.map.turn].produce;
      return this.creator.isAlive(turn) && produce && produce.productTurnsToCreation !== 0;
    }
    /**
    * Returns the offset needed to draw the image.
     * @return {Location} The offset needed to draw the image.
    */

  }, {
    key: "getOffset",
    value: function getOffset() {
      return new _root_canvasObjects_Location__WEBPACK_IMPORTED_MODULE_0__["Location"](-0.1, 0);
    }
    /**
     * Return the summonbar's image to display.
     *
     * @return {string} The image to display of the freeze.
     */

  }, {
    key: "getImageName",
    value: function getImageName() {
      return 'clock';
    }
    /**
     * Draws the object on the canvas.
     */

  }, {
    key: "draw",
    value: function draw() {
      var percentage = 1 - this.creator.produce.productTurnsToCreation / this.creator.produce.productCreationTurns + 1 / this.creator.produce.productCreationTurns;
      var BAR_WIDTH = 4.5 * this.map.scale * this.map.state.replay.resizeFactor;
      var BAR_HEIGHT = 0.3 * this.map.scale * this.map.state.replay.resizeFactor;
      var location = this.getDrawLocation();
      var barX = location.col - 0.5 * BAR_WIDTH;
      var barY = location.row - 3 * this.map.scale * this.map.state.replay.resizeFactor;
      this.map.drawBar(barX, barY, BAR_HEIGHT, BAR_WIDTH, '#00bfff', percentage);
      var SIZE_MULT = 0.7;
      var size = SIZE_MULT;
      var image = this.getImage();
      var drawLocation = this.getDrawLocation();
      drawLocation.row = barY + 3;
      drawLocation.col -= 0.5 * BAR_WIDTH + 0.5 * this.map.scale * this.map.state.replay.resizeFactor;
      var frame = this.getAnimationState(image);
      this.map.drawFromFrame(image, frame, drawLocation, size, size);
    }
  }]);

  return SummonBar;
}(_root_canvasObjects_metaObjects_MetaObject__WEBPACK_IMPORTED_MODULE_1__["MetaObject"]);

/***/ }),

/***/ "./game/lib/plugins/map/base/visualizer/js/Range.js":
/*!**********************************************************!*\
  !*** ./game/lib/plugins/map/base/visualizer/js/Range.js ***!
  \**********************************************************/
/*! exports provided: Range */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Range", function() { return Range; });
/* harmony import */ var _root_canvasObjects_metaObjects_MetaObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~root/canvasObjects/metaObjects/MetaObject */ "./game/lib/plugins/root/visualizer/js/canvasObjects/metaObjects/MetaObject.js");
/* harmony import */ var _root_Util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~root/Util */ "./game/lib/plugins/root/visualizer/js/Util.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



// typehints-only

/**
 * A range around an object.
 */
var Range =
/*#__PURE__*/
function (_MetaObject) {
  _inherits(Range, _MetaObject);

  function Range() {
    _classCallCheck(this, Range);

    return _possibleConstructorReturn(this, _getPrototypeOf(Range).apply(this, arguments));
  }

  _createClass(Range, [{
    key: "isAlive",

    /**
     * Whether or not the object is alive in a given turn.
     *
     * @param {number} turn - The turn.
     * @return {boolean} - Is the object alive.
     */
    value: function isAlive(turn) {
      var creator = this.creator,
          map = this.map;
      var alive = !('isAlive' in creator) || creator.isAlive(turn);
      var showRangeConfig = map.state.config["showRanges".concat(this.creator.baseType || this.creator.objectType)] || map.state.config.showRanges;
      var showRange = this.creator['range.toShow'] || creator.isInMouseRange();
      return !this.creator['range.notToShow'] && alive && showRangeConfig.is('on') && showRange;
    }
    /**
     * Draws the object on the canvas.
     */

  }, {
    key: "draw",
    value: function draw() {
      var map = this.map,
          range = this.range,
          color = this.color,
          alpha = this.alpha;
      var loc = this.getDrawLocation();
      var LINE_WIDTH = 2;
      map.ctx.save();
      map.ctx.strokeStyle = color;
      this.constructor.drawRange(map, loc.col, loc.row, range, LINE_WIDTH, alpha);
      map.ctx.restore();
    }
    /**
     * Returns the range's definition, used to draw each range once.
     *
     * @return {string} The range's definition.
     */

  }, {
    key: "range",

    /**
     * The radius of the range.
     *
     * @type {number}
     * @readonly
     */
    get: function get() {
      return this.creator.range;
    }
    /**
     * The color of the range.
     *
     * @type {string}
     * @readonly
     */

  }, {
    key: "color",
    get: function get() {
      return this.creator['range.color'] || Object(_root_Util__WEBPACK_IMPORTED_MODULE_1__["getColor"])(this.creator.ownerId);
    }
    /**
     * The alpha value of the range.
     *
     * @type {number}
     * @readonly
     */

  }, {
    key: "alpha",
    get: function get() {
      return this.creator['range.alpha'] || 1;
    }
  }, {
    key: "rangeDef",
    get: function get() {
      return "".concat(this.creator.ownerId, "|").concat(this.alpha, "|").concat(this.range, "|").concat(this.location);
    }
    /**
     * Draws a range around the given object.
     *
     * @param {GameMap} map - The canvas map.
     * @param {number} x - The (map) x of the object.
     * @param {number} y - The (map) y of the object.
     * @param {number} range - The length of the range to draw around the object.
     * @param {number} lineWidth - The width of the drawn lines.
     * @param {number} globalAlpha - The global alpha to use.
     */

  }], [{
    key: "drawRange",
    value: function drawRange(map, x, y, range, lineWidth, globalAlpha) {
      throw TypeError('must be implemented');
    }
  }]);

  return Range;
}(_root_canvasObjects_metaObjects_MetaObject__WEBPACK_IMPORTED_MODULE_0__["MetaObject"]);

/***/ }),

/***/ "./game/lib/plugins/map/vectoric/visualizer/js/MapUtils.js":
/*!*****************************************************************!*\
  !*** ./game/lib/plugins/map/vectoric/visualizer/js/MapUtils.js ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _root_canvasObjects_Location__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~root/canvasObjects/Location */ "./game/lib/plugins/root/visualizer/js/canvasObjects/Location.js");
/* harmony import */ var _root_Const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~root/Const */ "./game/lib/plugins/root/visualizer/js/Const.js");
/* harmony import */ var _root_canvasObjects_metaObjects_Label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~root/canvasObjects/metaObjects/Label */ "./game/lib/plugins/root/visualizer/js/canvasObjects/metaObjects/Label.js");
/* harmony import */ var _root_canvasObjects_CanvasObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~root/canvasObjects/CanvasObject */ "./game/lib/plugins/root/visualizer/js/canvasObjects/CanvasObject.js");
/* harmony import */ var _root_Visualizer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~root/Visualizer */ "./game/lib/plugins/root/visualizer/js/Visualizer.js");
/* harmony import */ var _plugins_map_base_visualizer_js_Range__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~plugins/map/base/visualizer/js/Range */ "./game/lib/plugins/map/base/visualizer/js/Range.js");






// typehints-only
_root_canvasObjects_metaObjects_Label__WEBPACK_IMPORTED_MODULE_2__["Label"].SAME_LOCATION_FACTOR = 1000;
/**
 * Calculates the location to draw the object.
 */

_root_canvasObjects_CanvasObject__WEBPACK_IMPORTED_MODULE_3__["CanvasObject"].prototype.getDrawLocation = function () {
  return this.location.add(this.getOffset()).scale(this.map.scale).round();
};
/**
 * Sets the scale of the map.
 */


_root_Visualizer__WEBPACK_IMPORTED_MODULE_4__["Visualizer"].prototype.setScale = function () {
  if (!this.state.replay) {
    return;
  }

  var _this$state$replay$ma = this.state.replay.map,
      rows = _this$state$replay$ma.rows,
      cols = _this$state$replay$ma.cols;
  var scale = Math.max(this.map.w / cols, this.map.h / rows);
  scale = Math.min(_root_Const__WEBPACK_IMPORTED_MODULE_1__["MAX_ZOOM_SCALE"], scale);
  var resizeFactor = this.state.replay.resizeFactor;
  var SIZE_FACTOR = 0.78; // Normalizing the map sizes to the old size, so every thing will stay the same on default maps
  // The map will not zoom out more than if there were 50 cols\rows.

  var factoredCols = cols / resizeFactor * SIZE_FACTOR;
  var factoredRows = rows / resizeFactor * SIZE_FACTOR;
  this.state.drawScale = Math.min(this.map.w / factoredCols, this.map.h / factoredRows);
  this.state.drawScale = Math.min(_root_Const__WEBPACK_IMPORTED_MODULE_1__["MAX_ZOOM_SCALE"], this.state.drawScale);
  this.state.scale = Math.min(_root_Const__WEBPACK_IMPORTED_MODULE_1__["MAX_ZOOM_SCALE"], scale);
};
/**
 * Empty function so that there is no square drawn around the mouse but also doesn't throw an error.
 */


_root_Visualizer__WEBPACK_IMPORTED_MODULE_4__["Visualizer"].prototype.drawMouseSquare = function () {};
/**
 * Returns the distance between this and another Location.
 *
 * @param {Location} other - The other location.
 * @return {number} The distance between the locations.
 */


_root_canvasObjects_Location__WEBPACK_IMPORTED_MODULE_0__["Location"].prototype.distance = function (other) {
  var dx = this.row - other.row;
  var dy = this.col - other.col;
  return Math.sqrt(dx * dx + dy * dy);
};
/**
 * Draws a range around the given object.
 *
 * @param {GameMap} map - The canvas map.
 * @param {number} x - The (map) x of the object.
 * @param {number} y - The (map) y of the object.
 * @param {number} range - The length of the range to draw around the object.
 * @param {number} lineWidth - The width of the drawn lines.
 * @param {number} globalAlpha - The global alpha to use.
 */


_plugins_map_base_visualizer_js_Range__WEBPACK_IMPORTED_MODULE_5__["Range"].drawRange = function (map, x, y, range, lineWidth, globalAlpha) {
  range *= map.scale;
  var prevAlpha = map.ctx.globalAlpha;
  map.ctx.save();
  map.ctx.beginPath();
  map.ctx.globalAlpha = globalAlpha;
  map.ctx.lineWidth = lineWidth;
  map.ctx.arc(x, y, range, 0, Math.PI * 2);
  map.ctx.stroke();
  map.ctx.restore();
  map.ctx.globalAlpha = prevAlpha; // Restore previous globalAlpha
};

/***/ }),

/***/ "./game/lib/plugins/move/base/visualizer/js/MovingObject.js":
/*!******************************************************************!*\
  !*** ./game/lib/plugins/move/base/visualizer/js/MovingObject.js ***!
  \******************************************************************/
/*! exports provided: MovingObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovingObject", function() { return MovingObject; });
/* harmony import */ var _root_canvasObjects_livingObjects_LivingObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~root/canvasObjects/livingObjects/LivingObject */ "./game/lib/plugins/root/visualizer/js/canvasObjects/livingObjects/LivingObject.js");
/* harmony import */ var _root_Util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~root/Util */ "./game/lib/plugins/root/visualizer/js/Util.js");
/* harmony import */ var _root_canvasObjects_Location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~root/canvasObjects/Location */ "./game/lib/plugins/root/visualizer/js/canvasObjects/Location.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




// typehints-only

/**
 * An object on the canvas - That moves
 */
var MovingObject =
/*#__PURE__*/
function (_LivingObject) {
  _inherits(MovingObject, _LivingObject);

  /**
   * @param {GameMap} map - The map this object belongs to.
   */
  function MovingObject(map) {
    var _this;

    _classCallCheck(this, MovingObject);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MovingObject).call(this, map));
    _this.uniqueId = 0;
    /**
     * If true, only 'count' labels will be drawn for this object.
     * If false, all label types will be drawn for this object.
     * @type {boolean}
     */

    _this.countLabelOnly = false;
    _this.hasCountLabel = false;
    return _this;
  }
  /**
   * Returns the location of the object in the given time.
   * The location is a linear interpolation of Math.Floor(time) and Math.Floor(time) + 1.
   * If the object isn't alive in the given time, null will be returned.
   *
   * @return {Location} The object's location in the given time.
   */


  _createClass(MovingObject, [{
    key: "calcLocation",
    value: function calcLocation() {
      // Find the destination according to all the extensions, if they return null continue to the default
      var location = this.callFirstExtensionsMethodByOrder('calcLocation');

      if (location !== null) {
        return location;
      }

      var _this$map = this.map,
          time = _this$map.time,
          turn = _this$map.turn;

      if (!this.isAlive(time)) {
        // The object isn't alive, return default location
        return null;
      } // On the last turn, return the last turn location


      if ((!this.history[turn + 1] || !this.history[turn + 1].location) && this.endLocation === null) {
        return this.history[turn].location;
      } // Else, the location in linear interpolation of the locations in turn and turn + 1


      var loc1 = this.history[turn].location;
      var loc2;

      if (this.history[turn + 1] && this.history[turn + 1].location) {
        loc2 = this.history[turn + 1].location;
      } else {
        loc2 = new _root_canvasObjects_Location__WEBPACK_IMPORTED_MODULE_2__["Location"](this.endLocation);
      }

      return _root_canvasObjects_Location__WEBPACK_IMPORTED_MODULE_2__["Location"].linearInterpolation(loc1, loc2, this.map.turnTime);
    }
    /**
     * Returns the orientation of the object in the given time.
     *
     * @param {number} time - The given time.
     * @return {string} The object's orientation in the given time.
     */

  }, {
    key: "calcOrientation",
    value: function calcOrientation(time) {
      if (!this.isAlive(time)) {
        // The object isn't alive, return default orientation
        return '';
      }

      var turn = Math.floor(time);
      var loc1, loc2;

      if (!this.history[turn] || !this.history[turn].location) {
        return 'n';
      }

      if (!this.history[turn + 1] || !this.history[turn + 1].location) {
        // On the last turn, return the previous orientation
        loc1 = this.history[turn - 1].location ? this.history[turn - 1].location : this.history[turn].location;
        loc2 = this.history[turn].location;
      } else {
        loc1 = this.history[turn].location;
        loc2 = this.history[turn + 1].location;
      } // The orientation in calculated by the difference of the locations.
      // Note: if dx equals dy the orientation tends to favor n\s over e\w,
      // Similarly, if dx\dy equals 0, the orientation tends to favor n\e over s\w.


      var dx = loc2.col - loc1.col;
      var dy = loc2.row - loc1.row;

      if (dx === 0 && dy === 0) {
        return this.calcOrientation(time - 1);
      }

      if (Math.abs(dy) >= Math.abs(dx)) {
        if (dy <= 0) {
          return 'n';
        }

        return 's';
      }

      if (dx >= 0) {
        return 'e';
      }

      return 'w';
    }
    /**
     * Returns the angle of the rotating object in the given time.
     *
     * @param {number} time - The given time.
     * @return {number} The object's orientation in radians.
     */

  }, {
    key: "calcRotationAngle",
    value: function calcRotationAngle(time) {
      // Find the angle according to all the extensions, if they return null continue to the default
      var parameters = [time];
      var angle = this.callFirstExtensionsMethodByOrder('calcRotationAngle', parameters);

      if (angle !== null) {
        return angle;
      }

      if (!this.isAlive(time)) {
        // The object isn't alive, return default orientation
        return 0;
      }

      var turn = Math.floor(time);

      if (!this.history[turn] || !this.history[turn].location) {
        // If lived 1 turn only, return -pi/2 (up)
        return -Math.PI / 2;
      }

      var loc1, loc2;
      loc1 = this.history[turn].location;
      loc2 = this.calcDirection(turn);
      var dx = loc2.col - loc1.col;
      var dy = loc2.row - loc1.row;

      if (dx === 0 && dy === 0) {
        return this.calcRotationAngle(Math.ceil(time - 1)); // Return previous angle
      }

      return Math.atan2(dy, dx);
    }
    /**
     * Return the location the object should look at in the given turn. This location is determined by the object's actions in this turn.
     * If no other extension is returning a direction it will return where the object is moving to.
     *
     * @param {number} turn - The turn to calc the destination for.
     * @param {boolean} callExtensionsMethod - Whether to call extension methods to calculate the location.
     * @return {Location} Destination - The location that the object should look at.
     */

  }, {
    key: "calcDirection",
    value: function calcDirection(turn) {
      var callExtensionsMethod = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var destination; // Find the destination according to all the extensions, if they return null continue to the default

      if (callExtensionsMethod) {
        var parameters = [turn];
        destination = this.callFirstExtensionsMethodByOrder('calcDirection', parameters);

        if (destination !== null) {
          return destination;
        }
      }

      if (!this.history[turn + 1] || !this.history[turn + 1].location) {
        // On the last turn, return a destination on the same line as last turn
        var loc1 = this.history[turn - 1].location ? this.history[turn - 1].location : this.history[turn].location;
        var loc2 = this.history[turn].location;
        destination = loc2.scale(2).sub(loc1); // 2 * loc2 - loc1
      } else {
        destination = this.history[turn + 1].location;
      }

      return destination;
    }
    /**
     * Return the size factor for a given time. This is a hook to all the extensions so they could change the size of the object.
     *
     * @param {number} time - The time to calc size for.
     * @return {number} The size factor.
     */

  }, {
    key: "calcSizeFactor",
    value: function calcSizeFactor(time) {
      // Find the size according to all the extensions, if they return null continue to the default
      var parameters = [time];
      return this.callExtensionsMethod('calcSizeFactor', parameters).reduce(function (a, b) {
        return a * (b || 1);
      }, 1);
    }
    /**
     * Dynamically assign properties to the object for the given map state.
     */

  }, {
    key: "calcKeyFrame",
    value: function calcKeyFrame() {
      _get(_getPrototypeOf(MovingObject.prototype), "calcKeyFrame", this).call(this);

      var _this$map2 = this.map,
          time = _this$map2.time,
          scale = _this$map2.scale;
      var location = this.calcLocation();

      if (location !== null) {
        this.location = location;
      }

      this.size = this.calcSizeFactor(time); // The size factor for this turn's image size

      this.orientation = this.calcOrientation(time);
      this.angle = this.calcRotationAngle(time);
    }
    /**
     * Returns the locations around this object is collected. Used in {@see CanvasObject.IsInMouseRange}.
     *
     * @return {Location[]} The locations around this object is collected.
     */

  }, {
    key: "getHint",

    /**
     * Returns this object's hint.
     *
     * @return {string} This object's hint.
     */
    value: function getHint() {
      return "".concat(this.id).concat(this.history[this.map.turn].location).concat(this.callExtensionsMethod('getHint').join(''));
    }
  }, {
    key: "collectLocations",
    get: function get() {
      return [this.location];
    }
    /**
     * Returns internal sort functions for objects from this type.
     *
     * @return {Function} Internal sort functions for objects from this type.
     */

  }], [{
    key: "internalSortFunction",
    get: function get() {
      return function (a, b) {
        return Object(_root_Util__WEBPACK_IMPORTED_MODULE_1__["sortOnMap"])(a, b);
      };
    }
  }]);

  return MovingObject;
}(_root_canvasObjects_livingObjects_LivingObject__WEBPACK_IMPORTED_MODULE_0__["LivingObject"]);

/***/ }),

/***/ "./game/lib/plugins/move/base/visualizer/js/Shreddable.js":
/*!****************************************************************!*\
  !*** ./game/lib/plugins/move/base/visualizer/js/Shreddable.js ***!
  \****************************************************************/
/*! exports provided: Shreddable, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shreddable", function() { return Shreddable; });
/* harmony import */ var _root_canvasObjects_Extension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~root/canvasObjects/Extension */ "./game/lib/plugins/root/visualizer/js/canvasObjects/Extension.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


// typehints-only

/**
 * An object that has a shredding/exploding animation when it dies.
 */
var Shreddable =
/*#__PURE__*/
function (_Extension) {
  _inherits(Shreddable, _Extension);

  /**
   * @param {ExtensibleObject} base - The object that is being extended.
   */
  function Shreddable(base) {
    var _this;

    _classCallCheck(this, Shreddable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Shreddable).call(this, base));

    _this.assignMethodOrder('getImageName', 3);

    return _this;
  }
  /**
   * Returns whether or not the object is alive in a given time.
   *
   * @param {number} time - The time to check.
   * @return {boolean} Whether or not the object is alive.
   */


  _createClass(Shreddable, [{
    key: "forceAlive",
    value: function forceAlive(time) {
      return this.isShredding(time);
    }
    /**
     * The turn the shredding starts.
     *
     * @type {number}
     * @readonly
     */

  }, {
    key: "isShredding",

    /**
     * Returns whether the object is shredding in {time}.
     *
     * @param {number} time - The time to check for.
     * @return {boolean} Whether the object is shredding.
     */
    value: function isShredding() {
      var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.map.time;
      return time >= this.shredStart && time < this.shredEnd;
    }
    /**
     * Returns the object's image name.
     *
     * @return {(string|string[])} The object's image name.
     */

  }, {
    key: "getImageName",
    value: function getImageName() {
      return this.isShredding() ? 'Explosion' : '';
    }
    /**
     * Get the animation state while ensuring it is legal (assuming image is this object's current image).
     *
     * @param {AnimatableImage} image - The image to get the animation state of.
     * @return {number} The updated and legal animation state of the object.
     */

  }, {
    key: "getAnimationState",
    value: function getAnimationState(image) {
      var time = this.map.time;
      var shredStart = this.shredStart,
          shredEnd = this.shredEnd;
      var frames = isFinite(image.frames) ? image.frames : 0;
      var state = Math.floor((time - shredStart) / (shredEnd - shredStart) * frames);
      return state >= 0 ? state : null;
    }
  }, {
    key: "shredStart",
    get: function get() {
      return this.base.endTurn - 0.5;
    }
    /**
     * The turn the shredding ends.
     *
     * @type {number}
     * @readonly
     */

  }, {
    key: "shredEnd",
    get: function get() {
      return this.base.endTurn + 0.5;
    }
  }]);

  return Shreddable;
}(_root_canvasObjects_Extension__WEBPACK_IMPORTED_MODULE_0__["Extension"]);
/* harmony default export */ __webpack_exports__["default"] = (Shreddable);

/***/ }),

/***/ "./game/lib/plugins/root/visualizer/js/AudioManager.js":
/*!*************************************************************!*\
  !*** ./game/lib/plugins/root/visualizer/js/AudioManager.js ***!
  \*************************************************************/
/*! exports provided: AudioManager, AudioPrototype, AudioInfo, AudioType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioManager", function() { return AudioManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioPrototype", function() { return AudioPrototype; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioInfo", function() { return AudioInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioType", function() { return AudioType; });
/* harmony import */ var _PluginManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~PluginManager */ "./game/lib/visualizer/src/bin/PluginManager.json");
var _PluginManager__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ~PluginManager */ "./game/lib/visualizer/src/bin/PluginManager.json", 1);
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Util */ "./game/lib/plugins/root/visualizer/js/Util.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



// typehints-only

/**
 * The maximum speed factor of the director for which audio that is speed tolerant {@see AllAudio} can be played
 */
var MAX_SPEED_FOR_AUDIO = 3;
/**
 * Manages the visualizer's audio
 */

var AudioManager =
/*#__PURE__*/
function () {
  /**
   *
   * @param {string} audioDir - The directory of the audio files.
   * @param {Visualizer} visualizer - The visualizer.
   */
  function AudioManager(audioDir, visualizer) {
    _classCallCheck(this, AudioManager);

    this.audioDir = audioDir;
    this.visualizer = visualizer;
    /**
     * Dictionary of all audioPrototypes by audioNames
     * @type {Object.<string, AudioPrototype>}
     */

    this.audioPrototypes = {};
  }
  /* ============================== In play audio related methods ============================== */

  /**
   * Plays the audio with the given name.
   *
   * @param {string} audioName - The name of the audio to be played.
   * @param {string} reason - The reason to play the audio. No two similar audio will be played at the same time
   *                          for the same reason.
   * @param {number} volumeMultiplier - Multiplier to the audio's volume.
   * @param {boolean} loop - Whether or not to play audio in loop.
   */


  _createClass(AudioManager, [{
    key: "play",
    value: function play(audioName, reason) {
      var volumeMultiplier = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var loop = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      if (audioName in this.audioPrototypes) {
        this.audioPrototypes[audioName].createAudio(reason, volumeMultiplier, loop);
      }
    }
    /**
     * Mute or unmute all playing audio.
     *
     * @param {Object.<string, string>} audioType - The type of audio to mute / unmute.
     */

  }, {
    key: "toggleInPlayAudioMute",
    value: function toggleInPlayAudioMute(audioType) {
      var mute = this.visualizer.state.config[audioType.muteConfig].is('true');
      var inPlayAudio = this.getInPlayAudio();
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = inPlayAudio[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var audioInfo = _step.value;

          if (audioInfo.prototype.audioType === audioType) {
            audioInfo.audio.muted = mute;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
    /**
     * Updates the volume of all playing audio, according to {@link Config.SoundsVolume} and {@link Config.musicVolume}.
     *
     * @param {Object.<string, string>} audioType - The type of audio to update the volume for.
     */

  }, {
    key: "updateInPlayAudioVolume",
    value: function updateInPlayAudioVolume(audioType) {
      var volume = this.visualizer.state.config[audioType.volumeConfig].value;
      var inPlayAudio = this.getInPlayAudio();
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = inPlayAudio[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var audioInfo = _step2.value;

          if (audioInfo.prototype.audioType === audioType) {
            audioInfo.audio.volume = audioInfo.volumeMultiplier * volume;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
    /**
     * Returns all the audio that is currently being played.
     *
     * @return {AudioInfo[]} All the audio that is currently being played.
     */

  }, {
    key: "getInPlayAudio",
    value: function getInPlayAudio() {
      var inPlayAudio = [];

      for (var audioName in this.audioPrototypes) {
        var audioPrototype = this.audioPrototypes[audioName];

        for (var reason in audioPrototype.inPlayAudio) {
          inPlayAudio.push(audioPrototype.inPlayAudio[reason]);
        }
      }

      return inPlayAudio;
    }
    /* ============================== Audio end and clear related methods ============================== */

    /**
     * End the audio with the given name played for the given reason.
     *
     * @param {string} audioName - The name of the audio.
     * @param {string|undefined} reason - The reason the audio was played. If undefined, all audio with the given name will be stopped.
     */

  }, {
    key: "endAudio",
    value: function endAudio(audioName) {
      var reason = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

      if (audioName in this.audioPrototypes) {
        var audioPrototype = this.audioPrototypes[audioName];

        if (reason === undefined) {
          // End all audio of this prototype
          for (var _reason in audioPrototype.inPlayAudio) {
            var audioInfo = audioPrototype.inPlayAudio[_reason];
            audioInfo.endAudio();
          }
        } else if (reason in audioPrototype.inPlayAudio) {
          // End the audio with the given reason of this prototype
          var _audioInfo = audioPrototype.inPlayAudio[reason];

          _audioInfo.endAudio();
        }
      }
    }
    /**
     * Clears all audio that-
     *    a. Has ended and wasn't started this turn
     *       or
     *    b. Care about the speed limit and the speed is too fast.
     */

  }, {
    key: "clearEndedAudio",
    value: function clearEndedAudio() {
      var inPlayAudio = this.getInPlayAudio();
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = inPlayAudio[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var audioInfo = _step3.value;

          // If the audio has ended and it wasn't started this turn OR
          // If the speed went over the speed limit, and the audio care about the speed limit
          if (audioInfo.ended && audioInfo.creationTurn !== Math.floor(this.visualizer.state.time) || !audioInfo.prototype.playWhenFast && this.visualizer.state.speedFactor > MAX_SPEED_FOR_AUDIO) {
            audioInfo.clear();
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }
    /**
     * The clean up method for the AudioManager stop all audio.
     *
     * @see Visualizer#cleanUp
     */

  }, {
    key: "cleanUp",
    value: function cleanUp() {
      var inPlayAudio = this.getInPlayAudio();
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = inPlayAudio[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var audioInfo = _step4.value;
          audioInfo.clear();
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }
    }
    /* ============================== Audio preloading methods ============================== */

    /**
     * Loads all audio specified in {@link AllAudio}, and returns a promise that is resolved when all of the loadings
     * are resolved\rejected.
     *
     * @return {Promise} Promise that is resolved when the loading is done.
     */

  }, {
    key: "loadAudio",
    value: function loadAudio() {
      var _this = this;

      var audioPromises = [];

      var _loop = function _loop(audioFullPath) {
        var audioData = _PluginManager__WEBPACK_IMPORTED_MODULE_0__["AllAudio"][audioFullPath];
        var playWhenFast = audioData.playWhenFast;
        var audioTypeName = audioData.type;
        var audioType = AudioType[audioTypeName];
        /**
         * The path relative to audio/
         */

        var audioPath = audioFullPath.split('audio/')[1];
        var audioName = audioPath.substring(0, audioPath.lastIndexOf('.'));

        if (audioType === undefined) {
          throw new Error('illegal music type in PluginManager.json: ' + audioTypeName + ' in audio ' + audioName);
        } // Create AudioPrototype for this audio


        if (!(audioName in _this.audioPrototypes)) {
          _this.audioPrototypes[audioName] = new AudioPrototype(audioName, _this.audioDir + audioFullPath, playWhenFast, audioType, _this);
        } // Try download the audio and add its promise to the list


        var audioPromise = _this.downloadAudio(audioName).then(function () {
          _this.audioPrototypes[audioName].downloaded = true;

          _this.visualizer.rootScope.$apply();
        });

        audioPromises.push(Object(_Util__WEBPACK_IMPORTED_MODULE_1__["promiseWrapper"])(audioPromise));
      };

      for (var audioFullPath in _PluginManager__WEBPACK_IMPORTED_MODULE_0__["AllAudio"]) {
        _loop(audioFullPath);
      } // Executed when all the promises in audioPromises are resolved/rejected


      return Promise.all(audioPromises);
    }
    /**
     * Returns a promise that is resolved when the audio with the given name is ready.
     *
     * @param {string} audioName - The name of the audio to load.
     * @return {Promise} A Promise that is resolved when the audio is ready.
     */

  }, {
    key: "downloadAudio",
    value: function downloadAudio(audioName) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        var audio = _this2.audioPrototypes[audioName].audio;

        audio.oncanplaythrough = function () {
          resolve(audio.src);
        };

        audio.onerror = function () {
          reject(audio.src);
        };
      });
    }
  }]);

  return AudioManager;
}();
/**
 * Stores a prototypical information about a single audio file.
 * Used for producing {@see AudioInfo} which represents real audio.
 */

var AudioPrototype =
/*#__PURE__*/
function () {
  /**
   * Creates new audio prototype.
   *
   * @param {string} name - The audio name.
   * @param {string} src - The audio file source.
   * @param {boolean} playWhenFast - Whether or not the audio should be played passed the {@link MAX_SPEED_FOR_AUDIO}.
   * @param {Object.<string, string>} audioType - The type of the audio (@see AudioType).
   * @param {AudioManager} audioManager - The AudioManager.
   */
  function AudioPrototype(name, src, playWhenFast, audioType, audioManager) {
    _classCallCheck(this, AudioPrototype);

    this.name = name;
    this.src = src;
    this.playWhenFast = playWhenFast;
    this.audioType = audioType;
    this.audio = new Audio(src);
    /**
     * A dictionary containing all the audio currently being played, in the format {reason: audioInfo}
     * @type {Object.<string, AudioInfo>}
     */

    this.inPlayAudio = {}; // The AudioManager

    this.audioManager = audioManager;
    this.downloaded = false;
  }
  /**
   * Creates a new audio from this prototype and play it.
   *
   * @param {string} reason - The reason to play the audio. No two similar audio will be played at the same time
   *                          for the same reason.
   * @param {number} volumeMultiplier - Multiplier to the audio's volume.
   * @param {boolean} loop - Whether or not to play audio in loop.
   */


  _createClass(AudioPrototype, [{
    key: "createAudio",
    value: function createAudio(reason, volumeMultiplier, loop) {
      // Don't create audio if another one is played from the same reason
      if (this.inPlayAudio[reason] !== undefined) {
        return;
      } // Don't create audio if the speed is too high


      if (!this.playWhenFast && this.audioManager.visualizer.state.speedFactor > MAX_SPEED_FOR_AUDIO) {
        return;
      } // Create and store the audio


      this.inPlayAudio[reason] = new AudioInfo(reason, this, volumeMultiplier, loop);
    }
  }]);

  return AudioPrototype;
}();
/**
 * Stores information about a single audio file.
 */

var AudioInfo =
/*#__PURE__*/
function () {
  /**
   * Creates a new AudioInfo.
   *
   * @param {string} reason - The reason to play the audio. No two similar audio will be played at the same time
   *                          for the same reason.
   * @param {AudioPrototype} audioPrototype - The AudioPrototype of this audio.
   * @param {number} volumeMultiplier - Multiplier to the audio's volume.
   * @param {boolean} loop - Whether or not to play audio in loop.
   */
  function AudioInfo(reason, audioPrototype, volumeMultiplier, loop) {
    _classCallCheck(this, AudioInfo);

    // The AudioPrototype of this audio
    this.prototype = audioPrototype; // The actual audio

    this.audio = audioPrototype.audio.cloneNode(); // The reason this audio is played

    this.reason = reason; // The turn the audio was created

    this.creationTurn = Math.floor(audioPrototype.audioManager.visualizer.state.time); // Whether or not the audio has ended

    this.ended = false; // Multiplier to the audio's volume

    this.volumeMultiplier = volumeMultiplier;
    this.initializeAudio(loop); // Play the audio

    this.play();
  }
  /**
   * Initializes the audio properties.
   *
   * @param {boolean} loop - Whether or not to play audio in loop.
   */


  _createClass(AudioInfo, [{
    key: "initializeAudio",
    value: function initializeAudio(loop) {
      var _this3 = this;

      this.audio.muted = this.prototype.audioManager.visualizer.state.config[this.prototype.audioType.muteConfig].is('true');
      var volume = this.prototype.audioManager.visualizer.state.config[this.prototype.audioType.volumeConfig].value;
      this.audio.volume = this.volumeMultiplier * volume;
      this.audio.loop = loop;

      this.audio.onended = function () {
        _this3.ended = true;
      };
    }
    /**
     * Clears the audio from the prototype's inPlayAudio so other audio can be played for the same reason.
     */

  }, {
    key: "clear",
    value: function clear() {
      this.endAudio(); // End audio just in case

      delete this.prototype.inPlayAudio[this.reason];
    }
    /**
     * Ends the audio.
     */

  }, {
    key: "endAudio",
    value: function endAudio() {
      this.pause();
      this.ended = true;
    }
    /**
     * Plays the audio.
     */

  }, {
    key: "play",
    value: function play() {
      if (this.audio.paused) {
        this.audio.play().catch(function (err) {
          // Without this, an annoying error is raised if the player didn't click the document before
          if (!(err instanceof DOMException)) {
            // eslint-disable-next-line no-console
            console.error(err);
          }
        });
      }
    }
    /**
     * Pauses the audio.
     */

  }, {
    key: "pause",
    value: function pause() {
      if (!this.audio.paused) {
        this.audio.pause();
      }
    }
  }]);

  return AudioInfo;
}();
/**
 * The config keys of each audio type.
 */

var AudioType = {
  SOUND: {
    volumeConfig: 'soundsVolume',
    muteConfig: 'muteSounds'
  },
  MUSIC: {
    volumeConfig: 'musicVolume',
    muteConfig: 'muteMusic'
  }
};

/***/ }),

/***/ "./game/lib/plugins/root/visualizer/js/Config.js":
/*!*******************************************************!*\
  !*** ./game/lib/plugins/root/visualizer/js/Config.js ***!
  \*******************************************************/
/*! exports provided: Config, Configuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return Config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Configuration", function() { return Configuration; });
/* harmony import */ var _PluginManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~PluginManager */ "./game/lib/visualizer/src/bin/PluginManager.json");
var _PluginManager__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ~PluginManager */ "./game/lib/visualizer/src/bin/PluginManager.json", 1);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/**
 * @class This class keeps track of configuration values. The values are stored in
 *        the browser's local storage under "visualizerConfig" identifier.
 */

var Config =
/*#__PURE__*/
function () {
  /**
   * Creates new config.
   *
   * @param {boolean} loadFromLocalStorage - Whether or not to try to load the config values from local storage.
   */
  function Config() {
    var loadFromLocalStorage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    _classCallCheck(this, Config);

    /**
     * The list of menu items.
     * @type {Configuration[]}
     */
    this.menuConfigs = [];
    this.generateConfigurations();

    if (loadFromLocalStorage) {
      this.loadConfig();
    }
  }
  /**
   * Go over all of the MenuItems given in the plugins, and use them to generate Configurations.
   */


  _createClass(Config, [{
    key: "generateConfigurations",
    value: function generateConfigurations() {
      var MAX_INHERITANCE_DEPTH = 2; // The maximum depth of "inheritance" that menuItems are allowed to have.

      var undefinedNames = Object.keys(_PluginManager__WEBPACK_IMPORTED_MODULE_0__["MenuItems"]);
      var cycles = 0;
      /**
       * Go until all names exist, and no more than MAX_INHERITANCE_DEPTH times
       */

      while (undefinedNames.length > 0 && cycles < MAX_INHERITANCE_DEPTH) {
        var configNames = undefinedNames;
        undefinedNames = [];
        /**
         * Go over the currently undefined configurations
         */

        for (var _i = 0; _i < configNames.length; _i++) {
          var configName = configNames[_i];
          var menuTitle = _PluginManager__WEBPACK_IMPORTED_MODULE_0__["MenuItems"][configName][0];
          var options = _PluginManager__WEBPACK_IMPORTED_MODULE_0__["MenuItems"][configName][1];
          var order = _PluginManager__WEBPACK_IMPORTED_MODULE_0__["MenuItems"][configName][2];
          var optionalDefault = _PluginManager__WEBPACK_IMPORTED_MODULE_0__["MenuItems"][configName][3];
          /* This options is based on another option */

          if (typeof options === 'string') {
            if (this[options] instanceof Configuration) {
              // The base option already exists
              // Take options, order and default values if they are not defined
              var newOptions = this[options].valueToString;

              if (order === undefined) {
                order = this[options].order;
              }

              if (optionalDefault === undefined) {
                optionalDefault = this[options].value;
              }

              options = newOptions;
            } else {
              // The base option is not defined yet. Add it to the unvisited options
              undefinedNames.push(configName);
              continue;
            }
          }

          if (typeof menuTitle !== 'string' || options === undefined || typeof order !== 'number') {
            throw new Error('Illegal Configuration arguments for configuration ' + configName);
          }

          var config = new Configuration(menuTitle, options, order, optionalDefault);
          this[configName] = config; // Negative order hides the option from the menu

          if (order >= 0) {
            this.menuConfigs.push(config);
          }
        }

        cycles++; // Go to the next cycle
      }

      if (undefinedNames.length > 0) {
        throw new Error('Could not resolve options for the menu items: ' + undefinedNames);
      } // Sort items by order - lower order comes first in the menu (upper)


      this.menuConfigs.sort(function (a, b) {
        return a.order - b.order;
      });
    }
    /**
     * Saves the config values to local storage (if supported).
     */

  }, {
    key: "saveConfig",
    value: function saveConfig() {
      if (Config.hasLocalStorage()) {
        window.localStorage.visualizerConfig = JSON.stringify(this);
      }
    }
    /**
     * Loads the config from local storage.
     *
     * @return {boolean} True on success.
     */

  }, {
    key: "loadConfig",
    value: function loadConfig() {
      if (Config.hasLocalStorage()) {
        try {
          var localStorageData = JSON.parse(window.localStorage.visualizerConfig);

          if (_typeof(localStorageData) === 'object') {
            for (var key in localStorageData) {
              if (this[key] === undefined || key === 'menuConfigs') {
                // Don't load irrelevant configurations
                continue;
              } // It is a Configuration. Can't check directly, because it was JSON serialized.


              if (localStorageData[key].value !== undefined && this[key] instanceof Configuration) {
                var localValue = localStorageData[key].value;
                var newValue = localValue; // Try to get the correct option according to the string displayed, and not according to the value.

                var optionName = localStorageData[key].valueToString[localValue];

                if (optionName !== undefined) {
                  newValue = this[key].options[optionName];
                }

                this[key].trySetValue(newValue);
              } else if (!(this[key] instanceof Configuration) && _typeof(this[key]) === _typeof(localStorageData[key])) {
                this[key] = localStorageData[key];
              }
            }
          }
        } catch (e) {
          return false;
        }

        return true;
      }

      return false;
    }
    /**
     * Checks if browser "local storage" is available.
     *
     * @return {boolean} True, if the browser supports local storage.
     */

  }], [{
    key: "hasLocalStorage",
    value: function hasLocalStorage() {
      try {
        return window.localStorage !== undefined;
      } catch (error) {
        return false;
      }
    }
  }]);

  return Config;
}();
/**
 * This class represents a configuration used by the visualizer.
 * Each configuration has the corresponding options (which are the names displayed in the menu), and a menu title.
 *
 * @class Configuration
 */

var Configuration =
/*#__PURE__*/
function () {
  /**
   * Creates an instance of Configuration.
   *
   * @param {string} menuTitle - The configuration's title, shown in the game menu.
   * @param {string[]} options - The configuration's options, shown in the game menu and also used throughout the code.
   * @param {number} order - The configuration's order in the menu (lower is upper in the menu).
   * @param {number?} value - The initial value the configuration is initialized with.
   */
  function Configuration(menuTitle, options, order) {
    var value = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    _classCallCheck(this, Configuration);

    /**
     * The title that will be shown in the game menu for this configuration.
     * @type {string}
     */
    this.menuTitle = menuTitle;
    /**
     * A dictionary containing for each option name the corresponding configuration value
     * @type {Object.<string, number>}
     */

    this.options = {};
    /**
     * Keeps the different configuration values in the original order, for an easier use in the angular templates
     */

    this.valueToString = options; // Generate an "enum" for the options

    for (var option in options) {
      var optionName = options[option];
      /** @type {string} */

      this.options[optionName] = parseInt(option); // ParseInt is used as it was treated as a string
    }
    /**
     * The configuration's order. A lower order means that the configuration will be earlier in the menu (upper).
     * @type {number}
     */


    this.order = order;
    /**
     * The current value of the configuration
     * @type {number}
     */

    this.value = this.legalValue(value) ? value : 0;
  }
  /**
   * Toggles to the next configuration.
   *
   * @param {number} newValue - Optional, the new configuration value.
   */


  _createClass(Configuration, [{
    key: "toggleValue",
    value: function toggleValue() {
      var newValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (!this.trySetValue(newValue)) {
        // Check if the input value is legal
        this.value = (this.value + 1) % this.valueToString.length;
      }
    }
    /**
     * Set the config to the given value, if this value is legal.
     * Return whether the value was changed.
     *
     * @param {number} newValue - The value to be set.
     * @return {boolean} Whether the value was changed.
     */

  }, {
    key: "trySetValue",
    value: function trySetValue(newValue) {
      if (this.legalValue(newValue)) {
        // Check if the input value is legal
        this.value = newValue;
        return true;
      }

      return false;
    }
    /**
     * Check if a value is legal for this configuration.
     *
     * @param {number} value - The value to check.
     * @return {boolean} Whether the given value is legal for this configuration.
     */

  }, {
    key: "legalValue",
    value: function legalValue(value) {
      return typeof value === 'number' && value >= 0 && value < this.valueToString.length;
    }
    /**
     * Check if the current configuration value is the configuration defined by the given name.
     *
     * @param {string} name - The queried name of the configuration.
     * @return {boolean} Whether the current configuration corresponds to the current name.
     */

  }, {
    key: "is",
    value: function is(name) {
      return this.options[name] === this.value;
    }
    /**
     * The value of the config.
     *
     * @type {string}
     * @readonly
     */

  }, {
    key: "stringValue",
    get: function get() {
      return this.valueToString[this.value];
    }
  }]);

  return Configuration;
}();

/***/ }),

/***/ "./game/lib/plugins/root/visualizer/js/Const.js":
/*!******************************************************!*\
  !*** ./game/lib/plugins/root/visualizer/js/Const.js ***!
  \******************************************************/
/*! exports provided: MAX_ZOOM_SCALE, FPS, Key */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_ZOOM_SCALE", function() { return MAX_ZOOM_SCALE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FPS", function() { return FPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Key", function() { return Key; });
/**
 * @fileOverview Miscellaneous constant values.
 * @author <a href="mailto:marco.leise@gmx.de">Marco Leise</a>
 */

/**
 * Maximum pixel size of map squares
 */
var MAX_ZOOM_SCALE = 70;
/**
 * Maximum animation's frames per second
 * @type {number}
 */

var FPS = 50;
/**
 * Names for common key-codes.
 *
 * @namespace
 */

var Key = {
  ESCAPE: 27,
  LEFT: 37,
  RIGHT: 39,
  UP: 38,
  DOWN: 40,
  SPACE: 32,
  PGUP: 33,
  PGDOWN: 34,
  HOME: 36,
  END: 35,
  PLUS: 107,
  PLUS_OPERA: 61,
  PLUS_JAVA: 521,
  MINUS: 109,
  MINUS_JAVA: 45,
  M: 77,
  TAB: 9
};

/***/ }),

/***/ "./game/lib/plugins/root/visualizer/js/Director.js":
/*!*********************************************************!*\
  !*** ./game/lib/plugins/root/visualizer/js/Director.js ***!
  \*********************************************************/
/*! exports provided: Director */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Director", function() { return Director; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// typehints-only

/**
 * The director is supposed to keep track of playback speed and position and keep an eye on
 * CPU usage. It does that in an acceptable fashion.
 */
var Director =
/*#__PURE__*/
function () {
  /**
   * Creates a new director.
   *
   * @param {Visualizer} vis - The visualizer that the director communicates with.
   */
  function Director(vis) {
    _classCallCheck(this, Director);

    /**
     * The visualizer that the director communicates with
     * @type {Visualizer}
     */
    this.vis = vis;
    /* ---------------------- speed related values ---------------------- */

    /**
     * The actual playing speed - 0 if stopped
     */

    this.speed = 0;
    /**
     * The internal playing speed - Always equals to 'speed', except on slow motion or stop
     */

    this.playSpeed = 1;
    /* ---------------------- time related values ---------------------- */

    /**
     * The director time (position in turns), starting with 0 at the start of 'turn 1'
     */

    this.time = 0;
    /**
     * The duration (in turns) of the game
     */

    this.duration = 0;
    /**
     * The last time that the director loop was called
     * @type {number}
     */

    this.lastLoopTime = null;
    /**
     * The time the director will stop at once reached
     * @type {number}
     */

    this.stopAt = null;
    /**
     * Used for scheduling calls for {@link loop}, and to cancel them if needed.
     * {@see window.clearTimeout}.
     * @type {number}
     */

    this.timeout = null;
    /* ---------------------- FPS and CPU related values ---------------------- */

    /**
     * {@see State.cpu}
     */

    this.cpu = vis.state.cpu;
    /**
     * The time the director started to count frames - Used for fps calculation
     * @type {number}
     */

    this.frameStart = null;
    /**
     * The number of frames counted since frameStart - Used for fps calculation
     */

    this.frameCounter = 0;
    /**
     * The number of cpuTime passed since frameStart - Used for cpu calculation
     */

    this.frameCpu = 0;
  }
  /* --------------------------------- play/stop related functions --------------------------------- */

  /**
   * Returns whether or not the director is currently playing.
   *
   * @return {boolean} True if the current speed is not 0, otherwise false.
   */


  _createClass(Director, [{
    key: "togglePlay",

    /**
     * Toggles between playing and pausing by calling play() and stop().
     */
    value: function togglePlay() {
      this.isPlaying ? this.stop() : this.play();
    }
    /**
     * Starts or resumes playback. If the visualizer is at the end of the replay it starts over again.
     * This method will also start profiling {@link Config#profile} is true.
     */

  }, {
    key: "play",
    value: function () {
      var _play = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (this.isPlaying) {
                  _context.next = 13;
                  break;
                }

                this.vis.map.playAnimation = true;
                this.speed = this.playSpeed;

                if (this.time === this.duration) {
                  this.vis.state.time = this.time = 0;
                  this.vis.rootScope.$emit('removeAnimations');
                  this.vis.rootScope.$emit('doStartingAnimation');
                }

                this.stopAt = this.duration;
                this.vis.rootScope.$emit('loaded-background');
                _context.next = 8;
                return new Promise(function (resolve) {
                  return setTimeout(resolve, 200);
                });

              case 8:
                this.vis.runOpeningAnimation();
                _context.next = 11;
                return this.vis.getAnimationPromise();

              case 11:
                this.loop(0);

                if (this.vis.state.options.profile) {
                  // eslint-disable-next-line no-console
                  console.profile();
                }

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function play() {
        return _play.apply(this, arguments);
      }

      return play;
    }()
    /**
     * Pauses playback. If play() started a profiling session, it will be stopped here and the result
     * will appear in Chrome's profiling view.
     */

  }, {
    key: "stop",
    value: function stop() {
      if (this.isPlaying) {
        this.vis.map.playAnimation = false;

        if (this.vis.state.options.profile) {
          // eslint-disable-next-line no-console
          console.profileEnd();
        }

        this.speed = 0;
        this.lastLoopTime = null;
      }
    }
    /**
     * Stops playback and jumps to a specific time. This is usually used to jump to the start of a turn.
     *
     * @param {number} time - The time in question. 0 will jump to the start of 'turn 1'. Out of range values will
     *        be clamped.
     */

  }, {
    key: "gotoTick",
    value: function () {
      var _gotoTick = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(time) {
        var effectiveTime;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (time <= 0) {
                  this.vis.rootScope.$emit('doStartingAnimation');
                } else if (time < this.vis.state.replay.turns) {
                  this.vis.backgroundImage = this.vis.state.imageManager.images.frozen.src;
                }

                this.stop();
                effectiveTime = Math.clamp(time, 0, this.duration);

                if (this.vis.state.time !== effectiveTime) {
                  this.vis.state.time = this.time = effectiveTime;
                  this.vis.draw();
                }

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function gotoTick(_x) {
        return _gotoTick.apply(this, arguments);
      }

      return gotoTick;
    }()
    /* --------------------------------- draw related functions --------------------------------- */

    /**
     * Performs one playback step. Basically it calls {@link Visualizer#draw}, and will schedule the
     * next call to itself if the playback hasn't met an end condition (like the target time for a
     * slow-mo). The CPU usage limit is obeyed here and if the visualizer is in {@link Config#debug}
     * mode the title bar of the browser is updated with an FPS counter.
     *
     * @param {number} delay - This is the delay that was artificially introduced to meet the CPU usage limit given
     *        in the {@link Config}. It is used to calculate a CPU usage estimate.
     */

  }, {
    key: "loop",
    value: function loop(delay) {
      var _this = this;

      var lastLoopTime = this.lastLoopTime;
      var cpuTime = null;
      var currentLoopTime = new Date().getTime();
      this.lastLoopTime = currentLoopTime;

      if (lastLoopTime !== null) {
        cpuTime = currentLoopTime - lastLoopTime - delay;
        this.time += (currentLoopTime - lastLoopTime) * this.speed * 0.002;
      } // Check if we can go on after this frame, stop if not


      var goOn = true;

      if (this.speed < 0) {
        if (this.time <= this.stopAt) {
          this.time = this.stopAt;
          goOn = false;
          this.stop();
        }
      } else if (this.speed > 0) {
        if (this.time >= this.stopAt) {
          this.time = this.stopAt;
          goOn = false;
          this.stop();
        }
      }

      this.vis.state.time = Math.clamp(this.time, 0, this.duration); // Draw and play audio

      this.vis.draw();
      this.manageSlowMotion();
      this.vis.state.audioManager.clearEndedAudio(); // Display fps and cpu if needed

      if (this.vis.state.options.debug && cpuTime !== null) {
        this.displayFPSAndCPU(currentLoopTime, lastLoopTime, cpuTime);
      } // Schedule the next loop based on the CPU usage


      if (goOn) {
        if (this.cpu <= 0 || this.cpu > 1 || cpuTime === null) {
          this.timeout = window.setTimeout(function () {
            _this.loop(delay);
          }, 0);
        } else {
          var newDelay = Math.ceil(cpuTime / this.cpu - cpuTime); // Looks odd, but synchronizes JS and rendering threads so we get
          // Accurate CPU times

          this.timeout = window.setTimeout(function () {
            _this.timeout = window.setTimeout(function () {
              _this.loop(newDelay);
            }, newDelay);
          }, 0);
        }
      }
    }
    /**
     * The clean up method for the director resets the loop timeout and calls stop().
     *
     * @see Visualizer#cleanUp
     */

  }, {
    key: "cleanUp",
    value: function cleanUp() {
      window.clearTimeout(this.timeout);
      this.stop();
    }
    /**
     * Causes the visualizer to draw the current game state.
     *
     * @param {boolean} urgent - When the director is currently playing back, the call would be a no-op and the
     *        redraw delayed to the next invocation of loop(). If this is not desired because - for
     *        example a resize occurred, this flag can be set to true.
     */

  }, {
    key: "draw",
    value: function draw() {
      var urgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (this.isPlaying) {
        if (urgent) {
          window.clearTimeout(this.timeout);
          this.loop(0);
        }
      } else {
        this.vis.draw();
      }
    }
    /* --------------------------------- speed related functions --------------------------------- */

    /**
     * Adds 50% speed to the playback.
     */

  }, {
    key: "speedUp",
    value: function speedUp() {
      this.playSpeed *= 1.5;
      this.speed *= 1.5;
    }
    /**
     * The inverse of {@link Director#speedUp}.
     */

  }, {
    key: "slowDown",
    value: function slowDown() {
      this.playSpeed /= 1.5;
      this.speed /= 1.5;
    }
    /**
     * Activates slow motion mode if needed, by getting all requested slow motions from
     * {@link GameMap.RequestSlowMotion}, and slowing down by the slowest requested speed factor
     * (but not slower than 1).
     *
     * Called from {@link loop}.
     */

  }, {
    key: "manageSlowMotion",
    value: function manageSlowMotion() {
      if (this.speed !== 0) {
        if (this.vis.state.config.slowMotion.is('enabled')) {
          var requestedSlowMotions = this.vis.map.requestSlowMotion();

          if (requestedSlowMotions.length > 0) {
            var slowest = Math.min.apply(Math, _toConsumableArray(requestedSlowMotions));
            this.speed = Math.max(Math.floor(this.speed * slowest), 1);
          } else {
            this.speed = this.playSpeed;
          }
        } else {
          this.speed = this.playSpeed;
        }
      }
    }
    /**
     * Starts a slow motion playback (forward or backward) from the current position to a given time at
     * a rate of one turn per second.
     *
     * @param {number} time - The time in question. 0 will jump to the start of 'turn 1'. Out of range values will
     *        be clamped.
     */

  }, {
    key: "slowmoTo",
    value: function slowmoTo(time) {
      var effectiveTime = Math.clamp(time, 0, this.duration);

      if (this.vis.state.time !== effectiveTime) {
        this.stopAt = effectiveTime;
        var wasPlaying = this.isPlaying; // Speed of 1 for if we need to move forward in time, and -1 if we need to move backward

        this.speed = this.vis.state.time < effectiveTime ? 1 : -1;

        if (!wasPlaying) {
          this.loop(0);
        }
      }
    }
    /* --------------------------------- debug related functions --------------------------------- */

    /**
     * Displays FPS and CPU counter at the title bar.
     * Called from {@link loop}.
     *
     * @param {number} currentLoopTime - The time of the current loop.
     * @param {number} lastLoopTime - The time of the previous loop.
     * @param {number} cpuTime - The time took for the visualizer to do its job.
     */

  }, {
    key: "displayFPSAndCPU",
    value: function displayFPSAndCPU(currentLoopTime, lastLoopTime, cpuTime) {
      var CALCULATION_TIME = 1000; // The time intervals used to calculate fps and cpu (in milliseconds)
      // If frameStart is null, start calculating from now

      if (this.frameStart === null) {
        this.frameStart = lastLoopTime;
        this.frameCounter = 0;
        this.frameCpu = 0;
      }

      this.frameCounter++;
      this.frameCpu += cpuTime; // If the calculation time passed, display the result and restart calculation

      if (currentLoopTime - this.frameStart >= CALCULATION_TIME) {
        var delta = currentLoopTime - this.frameStart; // The result is multiplied by 1000 to convert from 1/milliseconds to 1/seconds

        var fps = Math.round(1000 * this.frameCounter / delta); // The result is multiplied by 100 because the cpu is displayed in percentages

        var cpu = Math.round(100 * this.frameCpu / delta);
        document.title = fps + ' fps @ ' + cpu + '% cpu';
        this.frameStart = currentLoopTime;
        this.frameCounter = 0;
        this.frameCpu = 0;
      }
    }
  }, {
    key: "isPlaying",
    get: function get() {
      return this.speed !== 0;
    }
  }]);

  return Director;
}();

/***/ }),

/***/ "./game/lib/plugins/root/visualizer/js/GameMap.js":
/*!********************************************************!*\
  !*** ./game/lib/plugins/root/visualizer/js/GameMap.js ***!
  \********************************************************/
/*! exports provided: GameMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameMap", function() { return GameMap; });
/* harmony import */ var _canvasObjects_visualizerInternalObjects_Board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvasObjects/visualizerInternalObjects/Board */ "./game/lib/plugins/root/visualizer/js/canvasObjects/visualizerInternalObjects/Board.js");
/* harmony import */ var _canvasObjects_visualizerInternalObjects_Hint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvasObjects/visualizerInternalObjects/Hint */ "./game/lib/plugins/root/visualizer/js/canvasObjects/visualizerInternalObjects/Hint.js");
/* harmony import */ var _Const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Const */ "./game/lib/plugins/root/visualizer/js/Const.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




// typehints-only

/**
 * The main map including pirates and indicators
 */

var GameMap =
/*#__PURE__*/
function () {
  /**
   * @param {State} state - The visualizer state for reference.
   */
  function GameMap(state) {
    _classCallCheck(this, GameMap);

    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.w = this.canvas.width;
    this.h = this.canvas.height;
    this.invalid = true;
    this.playAnimation = false;
    this.state = state;
    /**
     * @type {Object.<string, AnimatableImage>}
     */

    this.images = {};
    this.time = 0;
    this.scale = 1;
    this.drawScale = 1;
    this.highlightedPirate = null;
    /**
     * List of all locations glows are drawn in
     * @type {Location[]}
     */

    this.glowingLocations = []; // Set of strings representing (ownerId, alpha, range, location). each element defines a drawn ranged.
    // This set purpose is to make sure no range is drawn twice.

    this.drawnRanges = new Set();
    /**
     * Dictionary from locations to the counted objects in it.
     * Used for drawing 'count' labels.
     * @type {Object.<[number, number], number>}
     */

    this.labelCount = {};
    this.countLabelGroups = []; // Groups of objects on the map that will have the same count label

    this.mouseOverVis = false;
    this.mouseCol = 0;
    this.mouseRow = 0;
    this.animationLastDrawn = 0;
    /**
     * Array of all VisualizerInternalObjects
     * @type {VisualizerInternalObject[]}
     */

    this.visualizerInternalObjects = [];
    /**
     * List of all the canvasObjects needed to draw. Recalculated every time the state change.
     * @type {CanvasObject[]}
     */

    this.canvasObjects = []; // Create board and hint

    new _canvasObjects_visualizerInternalObjects_Board__WEBPACK_IMPORTED_MODULE_0__["Board"](this);
    new _canvasObjects_visualizerInternalObjects_Hint__WEBPACK_IMPORTED_MODULE_1__["Hint"](this);
  }
  /**
   * The current turn of the game.
   *
   * @type {number}
   * @readonly
   */


  _createClass(GameMap, [{
    key: "checkState",

    /* ------------------------------------------ State related functions ------------------------------------------ */

    /**
     * Causes a comparison of the relevant values that make up the visible content of this canvas
     * between the visualizer and cached values. If the cached values are out of date the canvas is
     * marked as invalid.
     *
     * @return {boolean} True, if the internal state has changed.
     */
    value: function checkState() {
      var _this = this;

      var timeChanged = this.time !== this.state.time;
      var mouseMoved = this.mouseOverVis !== this.state.mouseOverVis || this.mouseOverVis && (this.mouseCol !== this.state.mouseCol || this.mouseRow !== this.state.mouseRow);

      if (this.state.replay && (timeChanged || mouseMoved || this.scale !== this.state.scale || this.state.redrawRequired)) {
        this.invalid = true;
        this.time = this.state.time;
        this.scale = this.state.scale;
        this.drawScale = this.state.drawScale;
        this.mouseOverVis = this.state.mouseOverVis;
        this.mouseCol = this.state.mouseCol;
        this.mouseRow = this.state.mouseRow;
        this.glowingLocations = [];
        this.state.highlightedPirate[0] = null;
        this.drawnRanges = new Set();
        this.labelCount = {};
        this.state.replay.allCanvasObjects.forEach(function (obj) {
          var turn = _this.turn;

          if (turn > obj._lastHistoryTurn) {
            obj.overrideAttributes(obj.history[_this.turn]);
            _this._lastHistoryTurn = turn;
          }
        }); // Update this.canvasObject according to this map's state

        this.state.replay.calculateAllObjectsInState(this); // Calculate key frames for the objects who need that

        this.canvasObjects.forEach(function (obj) {
          return obj.calcKeyFrame();
        });
        this.state.redrawRequired = false;
      } // Update animations' state


      if (this.checkAnimationsState()) {
        this.invalid = true;
      }
    }
    /**
     * Checks if the animations' states need to be updated, and updates them if so.
     *
     * @return {boolean} Whether or not the animations' states were updated.
     */

  }, {
    key: "checkAnimationsState",
    value: function checkAnimationsState() {
      if (this.state.config.drawAnimations.is('enabled') && this.playAnimation) {
        var d = new Date(); // Initializing animations time

        if (this.animationLastDrawn === 0) {
          this.animationLastDrawn = d.getTime();
        } // If 1 / fps from the last update have passed, update animations' states


        if ((d.getTime() - this.animationLastDrawn) / 1000 >= 1 / _Const__WEBPACK_IMPORTED_MODULE_2__["FPS"]) {
          this.animationLastDrawn = d.getTime();
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this.canvasObjects[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var object = _step.value;
              var objectsImage = object.getImage();

              if (objectsImage !== null && objectsImage !== undefined) {
                // If 1 / maxFPS from the last object's update have passed, update animations' states
                if ((d.getTime() - object.animationStateLastChange) / 1000 >= 1 / objectsImage.maxFPS) {
                  object.toggleAnimationState();
                }
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          return true;
        }
      }

      return false;
    }
    /**
     * Given a unique id, returns the canvas object with that id.
     *
     * @param {number} uniqueId - The unique id of the object.
     * @return {CanvasObject} The canvas object.
     */

  }, {
    key: "getCanvasObjectByUniqueId",
    value: function getCanvasObjectByUniqueId(uniqueId) {
      return this.state.replay.getCanvasObjectByUniqueId(uniqueId, this.turn);
    }
    /* ------------------------------------------ Draw helper functions ------------------------------------------ */

    /**
     * Draw an image frame on the canvas.
     * The image's width and height will be scaled according to the map's scale size.
     *
     * @param {Image} image - The image to draw.
     * @param {number} frame - The image's frame to use.
     * @param {Location} loc - The coordinates where to place the image on the canvas.
     * @param {number} width - The image's draw width.
     * @param {number} height - The image's draw height.
     * @param {number} angle - The angle to rotate the image (or null for unrotated).
     */

  }, {
    key: "drawFromFrame",
    value: function drawFromFrame(image, frame, loc, width, height) {
      var angle = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;

      if (!image) {
        return;
      }

      if (angle === null) {
        this.drawImage(image, image.getSX(frame), image.getSY(frame), image.frameWidth, image.frameHeight, loc, width, height);
      } else {
        this.drawRotatedImage(image, image.getSX(frame), image.getSY(frame), image.frameWidth, image.frameHeight, loc, width, height, angle);
      }
    }
    /**
     * Draw an image on the canvas.
     * The image's width and height will be scaled according to the map's scale size.
     *
     * @param {Image} image - The image to draw.
     * @param {number} sX - The x coordinate where to start clipping.
     * @param {number} sY - The y coordinate where to start clipping.
     * @param {number} sWidth - The width of the clipped image.
     * @param {number} sHeight - The height of the clipped image.
     * @param {Location} loc - The coordinates where to place the image on the canvas.
     * @param {number} width - The image's draw width.
     * @param {number} height - The image's draw height.
     */

  }, {
    key: "drawImage",
    value: function drawImage(image, sX, sY, sWidth, sHeight, loc, width, height) {
      var scaleSize = this.drawScale;
      width = width * scaleSize;
      height = height * scaleSize;
      var x = loc.col - width / 2;
      var y = loc.row - height / 2;

      try {
        this.ctx.drawImage(image, sX, sY, sWidth, sHeight, x, y, width, height);
      } catch (err) {
        if (true) {
          // eslint-disable-next-line no-console
          console.log(err.message);
        } else {}
      }
    }
    /**
     * Draws the bar with the given parameters on the map.
     * The given values are already multiplied by scale.
     *
     * @param {number} x - Top left x.
     * @param {number} y - Top left y.
     * @param {number} hight - The hight of the given bar.
     * @param {number} width - The width of the given bar.
     * @param {string} color - The color of the bar.
     * @param {number} percent - The percent of the bar to fill.
     * @param {string} baseColor - The background color of the bar, default black.baseColor.
     */

  }, {
    key: "drawBar",
    value: function drawBar(x, y, hight, width, color, percent) {
      var baseColor = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : '#000000';
      var LINE_WIDTH_X = 0.02 * this.scale + 1; // draw black rectangle

      var oldWidth = this.ctx.lineWidth;
      this.ctx.beginPath();
      this.ctx.strokeStyle = '#000000';
      this.ctx.lineWidth = LINE_WIDTH_X;
      this.ctx.rect(x, y, width, hight);
      this.ctx.stroke();
      this.ctx.fillStyle = baseColor;
      this.ctx.fill(); // fill bar

      var barLength = width * percent;
      this.ctx.beginPath();
      this.ctx.lineWidth = oldWidth;
      this.ctx.strokeStyle = color;
      this.ctx.rect(x, y, barLength, hight);
      this.ctx.fillStyle = color;
      this.ctx.fill();
    }
    /**
     * Draw the round health bar above given object with the given radius.
     *
     * @param {number} x - Top left x.
     * @param {number} y - Top left y.
     * @param {number} radius - A radius of the health bar.
     * @param {string} color - The color of the bar.
     * @param {number} percent - The percent of the bar to fill.
     * @param {string} baseColor - The background color of the bar, default black.baseColor.
     */

  }, {
    key: "drawCircularHealthBar",
    value: function drawCircularHealthBar(x, y, radius, color, percent) {
      var baseColor = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '#000000';
      var LINE_WIDTH_FACTOR = 0.2 * this.state.replay.resizeFactor; // Draw black bar first

      this.ctx.beginPath();
      this.ctx.strokeStyle = baseColor;
      this.ctx.lineCap = 'square';
      this.ctx.lineWidth = this.scale * LINE_WIDTH_FACTOR + 1;
      this.ctx.arc(x, y, radius, -Math.PI, 0, false);
      this.ctx.stroke(); // Draw health

      this.ctx.beginPath();
      this.ctx.strokeStyle = color;
      this.ctx.lineCap = 'square';
      this.ctx.lineWidth = this.scale * LINE_WIDTH_FACTOR;
      this.ctx.arc(x, y, radius, -Math.PI, -(1 - percent) * Math.PI, false);
      this.ctx.stroke();
    }
    /**
     * Draw a rotated image on the canvas.
     * The image's width and height will be scaled according to the map's scale size.
     *
     * @param {Image} image - The image to draw.
     * @param {number} sX - The x coordinate where to start clipping.
     * @param {number} sY - The y coordinate where to start clipping.
     * @param {number} sWidth - The width of the clipped image.
     * @param {number} sHeight - The height of the clipped image.
     * @param {Location} loc - The coordinates where to place the image on the canvas.
     * @param {number} width - The image's draw width.
     * @param {number} height - The image's draw height.
     * @param {number} angle - The angle to rotate the image.
     */

  }, {
    key: "drawRotatedImage",
    value: function drawRotatedImage(image, sX, sY, sWidth, sHeight, loc, width, height, angle) {
      var tX = Math.round(loc.col);
      var tY = Math.round(loc.row);
      this.ctx.save();
      this.ctx.translate(tX, tY);
      this.ctx.rotate(angle);
      this.ctx.translate(-tX, -tY);
      this.drawImage(image, sX, sY, sWidth, sHeight, loc, width, height);
      this.ctx.restore();
    }
    /**
     * Draws a dashed line on the canvas.
     *
     * @param {Location} start - The starting point of the line.
     * @param {Location} end - The ending point of the line.
     * @param {string} color - The RGB color of the line.
     * @param {number} width - The width of the line.
     * @param {boolean} dash - Whether the line will be drawn dashed or not.
     */

  }, {
    key: "drawLine",
    value: function drawLine(start, end, color, width) {
      var dash = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      this.ctx.save();
      this.ctx.beginPath();
      this.ctx.moveTo(start.col, start.row);
      this.ctx.lineTo(end.col, end.row);

      if (dash) {
        this.ctx.setLineDash([this.drawScale / 2, this.drawScale / 8]);
      }

      this.ctx.strokeStyle = color;
      this.ctx.lineWidth = width;
      this.ctx.stroke();
      this.ctx.restore();
    }
    /**
     * Draws all objects onto the map image.
     */

  }, {
    key: "draw",
    value: function draw() {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.canvasObjects[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var obj = _step2.value;
          obj.draw();
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
    /**
     * Plays audio for all map objects.
     */

  }, {
    key: "playAudio",
    value: function playAudio() {
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this.canvasObjects[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var obj = _step3.value;

          if ('playAudio' in obj) {
            obj.playAudio();
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }
    /* ------------------------------------------ slowmo related functions ------------------------------------------ */

    /**
     * Returns all requested slow motions for the director.
     * {@link Director.manageSlowMotion}.
     *
     * @return {number[]} The requested slow motions factors.
     */

  }, {
    key: "requestSlowMotion",
    value: function requestSlowMotion() {
      var requestedSlowMotions = [];
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = this.canvasObjects[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var obj = _step4.value;

          if ('requestSlowMotion' in obj) {
            var slowMotion = obj.requestSlowMotion();

            if (slowMotion !== null) {
              requestedSlowMotions.push(slowMotion);
            }
          }

          var extSlowMotion = obj.callExtensionsMethod('requestSlowMotion');
          extSlowMotion = extSlowMotion.filter(function (a) {
            return a !== null;
          });

          if (extSlowMotion.length > 0) {
            requestedSlowMotions.push(extSlowMotion);
          }
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      return requestedSlowMotions;
    }
    /**
     * Checks if a coordinate pair is within the canvas area.
     *
     * @param {number} x - The x coordinate in question.
     * @param {number} y - The y coordinate in question.
     * @return {boolean} True, if the coordinates are contained within the canvas area.
     */

  }, {
    key: "contains",
    value: function contains(x, y) {
      return x >= 0 && x < this.w && y >= 0 && y < this.h;
    }
    /**
     * Sets the size of this canvas and invalidates it, if an actual change is detected.
     *
     * @param {number} width - The new width.
     * @param {number} height - The new height.
     */

  }, {
    key: "setSize",
    value: function setSize(width, height) {
      if (this.w !== width || this.h !== height) {
        this.w = width;
        this.h = height;

        if (width > 0 && height > 0) {
          this.canvas.width = width;
          this.canvas.height = height;
        }

        this.invalid = true;
      }
    }
    /**
     * Ensure that the contents of the canvas are up to date. A redraw is triggered if necessary.
     *
     * @return {boolean} True, if the canvas had to be redrawn.
     */

  }, {
    key: "validate",
    value: function validate() {
      this.checkState();

      if (this.invalid) {
        // Clear the inner canvas
        this.ctx.clearRect(0, 0, this.w, this.h);
        this.draw();
        this.playAudio();
        this.invalid = false;
        return true;
      }

      return false;
    }
  }, {
    key: "turn",
    get: function get() {
      return Math.floor(this.time);
    }
    /**
     * The next turn of the game, used to draw the attacks.
     *
     * @type {number}
     * @readonly
     */

  }, {
    key: "attackTurn",
    get: function get() {
      return this.turn + 1;
    }
    /**
     * The time passed since the beginning of the current turn.
     *
     * @type {number}
     * @readonly
     */

  }, {
    key: "turnTime",
    get: function get() {
      return this.time - this.turn;
    }
    /**
     * Set this to determine the offset of the directional-ship images.
     */

  }], [{
    key: "ORIENTATION",
    get: function get() {
      return {
        w: 0,
        n: 1,
        e: 2,
        s: 3
      };
    }
  }]);

  return GameMap;
}();

/***/ }),

/***/ "./game/lib/plugins/root/visualizer/js/ImageManager.js":
/*!*************************************************************!*\
  !*** ./game/lib/plugins/root/visualizer/js/ImageManager.js ***!
  \*************************************************************/
/*! exports provided: ImageManager, ImageInfo, AnimatableImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageManager", function() { return ImageManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageInfo", function() { return ImageInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimatableImage", function() { return AnimatableImage; });
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Util */ "./game/lib/plugins/root/visualizer/js/Util.js");
/* harmony import */ var _PluginManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~PluginManager */ "./game/lib/visualizer/src/bin/PluginManager.json");
var _PluginManager__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ~PluginManager */ "./game/lib/visualizer/src/bin/PluginManager.json", 1);
/* harmony import */ var _Const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Const */ "./game/lib/plugins/root/visualizer/js/Const.js");
/* harmony import */ var _Visualizer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Visualizer */ "./game/lib/plugins/root/visualizer/js/Visualizer.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





/**
 * This class is responsible for loading all images in the background.
 */

var ImageManager =
/*#__PURE__*/
function () {
  /**
   * Creates a new ImageManager.
   *
   * @param {string} dataDir - The base directory string that will be prepended to all image load requests.
   * @param {Visualizer} visualizer - The visualizer.
   */
  function ImageManager(dataDir, visualizer) {
    _classCallCheck(this, ImageManager);

    this.dataDir = dataDir;
    this.visualizer = visualizer;
    /**
     * Dictionary from imageNames to their corresponding ImageInfo.
     * Used for containing info about all images that were\need to be downloaded.
     * @type {Object.<string, ImageInfo>}
     */

    this.images = {};
  }
  /**
   * Loads all images specified in {@link AllImages}, and returns a promise that is resolved when all of the loadings
   * are resolved\rejected.
   *
   * @return {Promise} Promise that is resolved when the loading is done.
   */


  _createClass(ImageManager, [{
    key: "loadImages",
    value: function loadImages() {
      var _this = this;

      var imagePromises = [];

      var _loop = function _loop(imageFullPath) {
        var imageData = _PluginManager__WEBPACK_IMPORTED_MODULE_1__["AllImages"][imageFullPath];
        var imagePath = imageFullPath.split('img/')[1];
        var imageName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('.'));
        var frames = [imageData.framesX || 1, imageData.framesY || 1]; // The default values are 1

        var maxFPS = imageData.fps || 0; // 0 is unlimited

        if (!(imageName in _this.images)) {
          _this.images[imageName] = new ImageInfo(_this.dataDir + imageFullPath, frames, maxFPS);
        } // Try download the image and add its promise to the list


        var imagePromise = _this.downloadImage(imageName).then(function () {
          _this.images[imageName].downloaded = true;

          _this.visualizer.rootScope.$apply();
        });

        imagePromises.push(Object(_Util__WEBPACK_IMPORTED_MODULE_0__["promiseWrapper"])(imagePromise));
      };

      for (var imageFullPath in _PluginManager__WEBPACK_IMPORTED_MODULE_1__["AllImages"]) {
        _loop(imageFullPath);
      } // Executed when all the promises in imagePromises are resolved/rejected


      return Promise.all(imagePromises);
    }
    /**
     * Returns a promise that downloads the image with the given name.
     *
     * @param {string} imageName - The name of the image to download.
     * @return {Promise} A Promise that downloads the image.
     */

  }, {
    key: "downloadImage",
    value: function downloadImage(imageName) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        var img = new Image();
        _this2.images[imageName].image = img;
        img.src = _this2.images[imageName].src;

        img.onload = function () {
          resolve(img.src);
          img.frameWidth = img.width / img.framesX;
          img.frameHeight = img.height / img.framesY;
        };

        img.onerror = function () {
          reject(img.src);
        };

        img.onabort = img.onerror; // The number of x and y frames in the image

        img.framesX = _this2.images[imageName].framesX;
        img.framesY = _this2.images[imageName].framesY;
        img.frames = img.framesX * img.framesY; // The maximum FPS this image can be played in

        var maxFPS = _this2.images[imageName].maxFPS;
        img.maxFPS = maxFPS === 0 ? _Const__WEBPACK_IMPORTED_MODULE_2__["FPS"] : maxFPS; // Functions to retrieve the sx and sy of the image from the frame

        /**
         * {@see AnimatableImage.getSX}.
         *
         * @param {number} frame - The frame.
         */

        img.getSX = function (frame) {
          var x = frame % img.framesX;
          return x * img.frameWidth;
        };
        /**
         * {@see AnimatableImage.getSY}.
         *
         * @param {number} frame - The frame.
         */


        img.getSY = function (frame) {
          var y = Math.floor(frame / img.framesX);
          return y * img.frameHeight;
        };
      });
    }
  }]);

  return ImageManager;
}();
/**
 * Stores information about an image
 */

var ImageInfo =
/**
 * Creates new ImageInfo.
 *
 * @param {string} src - The image source.
 * @param {number[]} frames - The number of frames (x, y) the image contains.
 * It is assumed that all farmes have the same width and height.
 * @param {number} maxFPS - The maximum FPS this image can be played in.
 */
function ImageInfo(src, frames, maxFPS) {
  _classCallCheck(this, ImageInfo);

  this.src = src;
  /**
   * The image.
   * @type {Image}
   */

  this.image = null;
  this.framesX = frames[0];
  this.framesY = frames[1];
  this.maxFPS = maxFPS;
  this.downloaded = false;
};
/**
 * Extends Image to makes it animatable.
 * This class is used for type-hinting only!
 */

var AnimatableImage =
/*#__PURE__*/
function (_ref) {
  _inherits(AnimatableImage, _ref);

  /**
   * Create an object for an image that is animated.
   */
  function AnimatableImage() {
    var _this3;

    _classCallCheck(this, AnimatableImage);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(AnimatableImage).call(this));
    /**
     * The number of frames in the image
     * @type {number}
     */

    _this3.frames = null;
    /**
     * The number of x frames in the image
     * @type {number}
     */

    _this3.framesX = null;
    /**
     * The number of y frames in the image
     * @type {number}
     */

    _this3.framesY = null;
    /**
     * A single image frame width
     * @type {number}
     */

    _this3.frameWidth = null;
    /**
     * A single image frame Height
     * @type {number}
     */

    _this3.frameHeight = null;
    /**
     * The maximum FPS this image can be played in
     * @type {number}
     */

    _this3.maxFPS = null;
    return _this3;
  }
  /**
   * Get the image's sx of the given frame.
   *
   * @param {number} frame - The frame.
   * @return {number} The image's sx.
   */


  _createClass(AnimatableImage, [{
    key: "getSX",
    value: function getSX(frame) {}
    /**
     * Get the image's sy of the given frame.
     *
     * @param {number} frame - The frame.
     * @return {number} The image's sy.
     */

  }, {
    key: "getSY",
    value: function getSY(frame) {}
  }]);

  return AnimatableImage;
}(typeof Image !== 'undefined' ? Image : null);

/***/ }),

/***/ "./game/lib/plugins/root/visualizer/js/Replay.js":
/*!*******************************************************!*\
  !*** ./game/lib/plugins/root/visualizer/js/Replay.js ***!
  \*******************************************************/
/*! exports provided: Replay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Replay", function() { return Replay; });
/* harmony import */ var _src_bin_plugins_entry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~src/bin/plugins.entry */ "./game/lib/visualizer/src/bin/plugins.entry.js");
/* harmony import */ var _canvasObjects_CanvasObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvasObjects/CanvasObject */ "./game/lib/plugins/root/visualizer/js/canvasObjects/CanvasObject.js");
/* harmony import */ var _PluginManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~PluginManager */ "./game/lib/visualizer/src/bin/PluginManager.json");
var _PluginManager__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ~PluginManager */ "./game/lib/visualizer/src/bin/PluginManager.json", 1);
/* harmony import */ var _canvasObjects_Location__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./canvasObjects/Location */ "./game/lib/plugins/root/visualizer/js/canvasObjects/Location.js");
/* harmony import */ var _canvasObjects_GameObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./canvasObjects/GameObject */ "./game/lib/plugins/root/visualizer/js/canvasObjects/GameObject.js");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Util */ "./game/lib/plugins/root/visualizer/js/Util.js");
function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable import/namespace */





// typehints-only

/**
 * @typedef {Object} TypeObject
 * @property {CanvasObject[]} objects - the canvas objects
 * @property {typeof CanvasObject} type - class of the objects
 */

/** @typedef {Object.<string, CanvasObject[]>} GroupedCanvasObjects */

/**
 * A class responsible for parsing the replay data (and storing it for the rest of the game).
 */

var Replay =
/*#__PURE__*/
function () {
  /**
   * @param {string} replayStr - The replay string.
   * @param {GameMap} map - The map object.
   * @param {boolean} debug - If true, then partially corrupt replays are loaded instead of throwing an error.
   * @see StartupOptions
   */
  function Replay(replayStr, map) {
    var _this = this;

    var debug = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    _classCallCheck(this, Replay);

    map.state.replay = this;
    this.meta = JSON.parse(replayStr);
    /** @type {CanvasObject[]} */

    this.allCanvasObjects = [];
    var replay = this.meta.replayData;
    Object.assign(this, replay);
    /** @type {Object<string, object[]>} */

    var objects = replay.objects;

    var _arr = Object.entries(objects);

    var _loop = function _loop() {
      var _arr$_i = _slicedToArray(_arr[_i], 2),
          objectType = _arr$_i[0],
          objectList = _arr$_i[1];

      if (!(objectType in _src_bin_plugins_entry__WEBPACK_IMPORTED_MODULE_0__)) {
        throw new Error("Object of type ".concat(objectType, " received from replay, ") + 'but there is no corresponding class for this object in the loaded plugins.' + 'if this type of object should not be sent to the replay (e.g. it is an abstract object), ' + 'make sure it does not have bases.');
      }

      var cls = _src_bin_plugins_entry__WEBPACK_IMPORTED_MODULE_0__[objectType];
      objectList.forEach(function (object) {
        // Change manually every (Number, Number) array that represent location, to a location object.
        // REFACTOR: Move me to better place
        for (var turn in object.history) {
          if (object.history[turn].location) {
            object.history[turn].location = new _canvasObjects_Location__WEBPACK_IMPORTED_MODULE_3__["Location"](object.history[turn].location);
          }
        }

        ['location', 'initialLocation'].filter(function (key) {
          return key in object;
        }).map(function (key) {
          return {
            key: key,
            value: object[key]
          };
        }).forEach(function (_ref7) {
          var key = _ref7.key,
              value = _ref7.value;
          return object[key] = _construct(_canvasObjects_Location__WEBPACK_IMPORTED_MODULE_3__["Location"], _toConsumableArray(value));
        });
      });
      objectList.forEach(function (object) {
        try {
          new cls(map, object);
        } catch (error) {
          error.message = "Error encountered in dynamic object generating from replay: ".concat(error.message);
          throw error;
        }
      });
    };

    for (var _i = 0; _i < _arr.length; _i++) {
      _loop();
    } // If some of the expected values are missing, fill with default values


    Object.keys(_PluginManager__WEBPACK_IMPORTED_MODULE_2__["replayDataDefaultValues"]).filter(function (key) {
      return !_this[key];
    }) // To key-value entry
    .map(function (key) {
      return {
        key: key,
        value: _PluginManager__WEBPACK_IMPORTED_MODULE_2__["replayDataDefaultValues"][key]
      };
    }).forEach(function (_ref) {
      var key = _ref.key,
          value = _ref.value;
      return _this[key] = value;
    }); // Assign drawOrder as static property of the corresponding class

    _PluginManager__WEBPACK_IMPORTED_MODULE_2__["DrawOrder"] // To {class, index}
    .map(function (type, index) {
      return {
        klass: _src_bin_plugins_entry__WEBPACK_IMPORTED_MODULE_0__[type],
        index: index,
        type: type
      };
    }).forEach(function (_ref2) {
      var klass = _ref2.klass,
          index = _ref2.index,
          type = _ref2.type;

      try {
        klass.drawOrder = index;
      } catch (e) {
        // TypeError: "undefined" has no attribute "drawOrder"
        throw TypeError("Cannot find \"".concat(type, "\". Make sure it is defined in a loaded plugin and exported."));
      }
    }); // Validate that all objects have drawOrder, and throws exception if some don't

    var objectTypes = Object.entries(_src_bin_plugins_entry__WEBPACK_IMPORTED_MODULE_0__).filter(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
          name = _ref4[0],
          cls = _ref4[1];

      return name in _this.objects;
    }).map(function (_ref5) {
      var _ref6 = _slicedToArray(_ref5, 2),
          name = _ref6[0],
          cls = _ref6[1];

      return cls;
    });
    var objectWithoutDrawOrder = objectTypes.filter(function (a) {
      return a.drawOrder === undefined;
    });

    if (objectWithoutDrawOrder.length > 0) {
      var objectWithoutDrawOrderNames = objectWithoutDrawOrder.map(function (a) {
        return a.name;
      }).join(', ');
      throw new Error("Error! The objects ".concat(objectWithoutDrawOrderNames, " don't have drawOrder!"));
    }

    this.allCanvasObjects.filter(function (obj) {
      return obj instanceof _canvasObjects_GameObject__WEBPACK_IMPORTED_MODULE_4__["GameObject"];
    }).forEach(function (obj) {
      obj.createMetaObjects();
      obj.createExtensionsMetaObjects();
    });
    /** @type {Object.<number, CanvasObject[]>} The canvas objects, grouped by uniqueId*/

    this.canvasObjectsByUniqueId = Object(_Util__WEBPACK_IMPORTED_MODULE_5__["groupByProperty"])(this.allCanvasObjects, 'uniqueId');
    /** @type {string[]} Array containing all canvasObjects' types. */

    this.allCanvasObjectsTypes = _toConsumableArray(new Set(this.allCanvasObjects.map(function (obj) {
      return obj.objectType;
    })));
  }
  /* ----------- Methods - allCanvasObjects custom getters ---------- */

  /**
   * Return all objects representing the canvas object with the given uniqueId.
   *
   * @param {number} uniqueId - The objects' uniqueId.
   * @param {string[]} types - The possible types, null for all types.
   * @return {CanvasObject[]} The canvas objects with the given uniqueId.
   */


  _createClass(Replay, [{
    key: "getAllInstancesByUniqueId",
    value: function getAllInstancesByUniqueId(uniqueId) {
      var types = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (uniqueId !== 0 && !uniqueId) {
        return [];
      }

      if (this.canvasObjectsByUniqueId[uniqueId] === undefined) {
        return [];
      }

      if (types === null) {
        return this.canvasObjectsByUniqueId[uniqueId];
      }

      return this.canvasObjectsByUniqueId[uniqueId].filter(function (obj) {
        return types.includes(obj.objectType);
      });
    }
    /**
     * Return the object representing the canvas object with the given uniqueId.
     *
     * @param {number} uniqueId - The objects' uniqueId.
     * @param {number} turn - The turn.
     * @param {string[]} types - The possible types, null for all types.
     * @return {CanvasObject} The canvas object with the given uniqueId.
     */

  }, {
    key: "getCanvasObjectByUniqueId",
    value: function getCanvasObjectByUniqueId(uniqueId, turn) {
      var types = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var instances = this.getAllInstancesByUniqueId(uniqueId, types);
      return instances.find(function (x) {
        return Replay.isInTurn(turn, x);
      }) || null;
    }
    /* ----------- Methods - canvasObject of state calculation ---------- */

    /**
     * Calculates all objects for the given map's state, including all livingObjects in the given time,
     * all staticObjects, all visualizer internal objects, and all metaObjects in the given map's state,
     * and set them as the given map canasObjects.
     *
     * @param {GameMap} map - The given map's state.
     */

  }, {
    key: "calculateAllObjectsInState",
    value: function calculateAllObjectsInState(map) {
      var objectsByDrawPriority = {};
      var turn = map.turn;
      var allObjects = this.allCanvasObjects.concat(map.visualizerInternalObjects);
      var objs = Object(_Util__WEBPACK_IMPORTED_MODULE_5__["groupByProperty"])(allObjects, 'objectType');
      Replay.getTypeArray(objs, turn).map(function (_ref8) {
        var objects = _ref8.objects,
            type = _ref8.type;
        return {
          objects: objects,
          type: type,
          arr: objectsByDrawPriority[type.drawOrder] || []
        };
      }).forEach(function (_ref9) {
        var objects = _ref9.objects,
            type = _ref9.type,
            arr = _ref9.arr;

        if (!('drawOrder' in type)) {
          throw new Error("type ".concat(type.name, " has no draw order!"));
        }

        return objectsByDrawPriority[type.drawOrder] = arr.concat(objects);
      });
      map.canvasObjects = Object.keys(objectsByDrawPriority).sort(function (a, b) {
        return a - b;
      }).reduce(function (arr, key) {
        return [].concat(_toConsumableArray(arr), _toConsumableArray(objectsByDrawPriority[key]));
      }, []);
    }
    /* ----------- Static methods - allCanvasObjects convertors utilities ---------- */

    /**
     * Get the TyepObject of type {typeName} from {allTypes} in turn {turn}.
     *
     * @static
     * @param {string} typeName - The type name.
     * @param {GroupedCanvasObjects} allTypes - The grouped canvas objects types.
     * @param {number} [turn=undefined] - If given, return only the ones from this turn.
     * @return {TypeObject} The TypeObject of type {typeName} from {allTypes} in turn {turn}.
     */

  }], [{
    key: "getTypeObjects",
    value: function getTypeObjects(typeName, allTypes) {
      var turn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
      var objects = allTypes[typeName];
      var type = _src_bin_plugins_entry__WEBPACK_IMPORTED_MODULE_0__[typeName];
      objects = objects.filter(this.isInTurn.bind(this, turn));

      if ('internalSortFunction' in type) {
        objects = objects.sort(type.internalSortFunction);
      }

      return {
        objects: objects,
        type: type
      };
    }
    /**
     * Get all TyepObjects in array {allTypes} in turn {turn}.
     *
     * @static
     * @param {GroupedCanvasObjects} allTypes - The grouped canvas objects types.
     * @param {number} [turn=undefined] - If given, return only the ones from this turn.
     * @return {TypeObject[]} The TypeObjects.
     */

  }, {
    key: "getTypeArray",
    value: function getTypeArray(allTypes) {
      var turn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      return Object.keys(allTypes).map(function (type) {
        return Replay.getTypeObjects(type, allTypes, turn);
      });
    }
    /* ----------- Static methods - CanvasObject Helpers ---------- */

    /**
     * Return whether or not {object} is present in this turn by the replay's point of view.
     *
     * @static
     * @param {number} turn - The turn to check for.
     * @param {CanvasObject} object - The object to check.
     * @return {boolean} Whether or not {object} is present in this turn.
     */

  }, {
    key: "isInTurn",
    value: function isInTurn(turn, object) {
      return turn === undefined || !('isAlive' in object) || object.isAlive(turn);
    }
  }]);

  return Replay;
}();

/***/ }),

/***/ "./game/lib/plugins/root/visualizer/js/StartupOptions.js":
/*!***************************************************************!*\
  !*** ./game/lib/plugins/root/visualizer/js/StartupOptions.js ***!
  \***************************************************************/
/*! exports provided: StartupOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartupOptions", function() { return StartupOptions; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * This class defines startup options that set immutable configuration items for the visualizer instance.
 * Some of the options can be set by appending them as a parameter to the URL (For example
 * '...?game=1&turn=20' will display game 1 and jump to turn 20 immediately) {@link Visualizer.parseURL}.
 * Other options are extracted from the 'window'.
 */
var StartupOptions =
/*#__PURE__*/
function () {
  _createClass(StartupOptions, [{
    key: "data_dir",

    /**
     * The directory that contains the 'img' directory as a relative or absolute path.
     * You will get an error message if you forget the tailing '/'.
     *
     * @type {string}
     */
    get: function get() {
      // eslint-disable-line camelcase
      return typeof window !== 'undefined' && window.pirates_data_dir ? window.pirates_data_dir : '../visualizer/data/';
    }
    /**
     * Create a StartupOptions object.
     */

  }]);

  function StartupOptions() {
    _classCallCheck(this, StartupOptions);

    /**
     * Set this to true, to enable loading of some kinds of partially corrupt
     * replays and display an FPS counter in the title bar.
     */
    this.debug = false;
    /**
     * Set this to true, to enable rendering code profiling though
     * 'console.profile()' in execution environments that support it.
     */

    this.profile = false;
    /**
     * Set this to true, to disable the fullscreen option.
     */

    this.embedded = true;
    /**
     * If this is set, the visualizer will jump to this turn when playback
     * starts and stop there. This is often used with {@link StartupOptions#col} and
     * {@link StartupOptions#row} to jump to a specific event.
     */

    this.turn = 0;
  }
  /**
   * The avatars of the players.
   */


  _createClass(StartupOptions, [{
    key: "playersAvatar",
    get: function get() {
      return  false ? undefined : [window.player0avatar, window.player1avatar];
    }
    /**
     * The team icons of the players.
     */

  }, {
    key: "playersTeamIcon",
    get: function get() {
      return  false ? undefined : [window.player0teamIcon, window.player1teamIcon];
    }
    /**
     * The names of the players.
     */

  }, {
    key: "playerNames",
    get: function get() {
      return  false ? undefined : [window.player0name, window.player1name];
    }
    /**
     * If true, DisplayLog will be set to false.
     */

  }, {
    key: "local_run",
    get: function get() {
      // eslint-disable-line camelcase
      return window.local_run;
    }
  }]);

  return StartupOptions;
}();

/***/ }),

/***/ "./game/lib/plugins/root/visualizer/js/State.js":
/*!******************************************************!*\
  !*** ./game/lib/plugins/root/visualizer/js/State.js ***!
  \******************************************************/
/*! exports provided: State */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "State", function() { return State; });
/* harmony import */ var _AudioManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AudioManager */ "./game/lib/plugins/root/visualizer/js/AudioManager.js");
/* harmony import */ var _ImageManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageManager */ "./game/lib/plugins/root/visualizer/js/ImageManager.js");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Config */ "./game/lib/plugins/root/visualizer/js/Config.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




// typehints-only

/**
 * Holds public variables that need to be accessed from multiple modules of the visualizer.
 */
var State =
/*#__PURE__*/
function () {
  /**
   * Creates new State.
   *
   * @param {StartupOptions} options - Immutable options, see {@link Visualizer} for more info.
   * @param {Visualizer} visualizer - The visualizer.
   */
  function State(options, visualizer) {
    _classCallCheck(this, State);

    this.options = options;
    this.config = new _Config__WEBPACK_IMPORTED_MODULE_2__["Config"]();
    this.debugPlayer = 0;
    var dataDir = this.options.data_dir || '';
    this.audioManager = new _AudioManager__WEBPACK_IMPORTED_MODULE_0__["AudioManager"](dataDir, visualizer);
    this.imageManager = new _ImageManager__WEBPACK_IMPORTED_MODULE_1__["ImageManager"](dataDir, visualizer);
    this.cleanUp();
  }
  /**
   * Resets the state to initial values.
   */


  _createClass(State, [{
    key: "cleanUp",
    value: function cleanUp() {
      /**
       * The currently loaded replay
       * @type {Replay}
       */
      this.replay = null;
      /**
       * Whether or not win song have been played this turn
       */

      this.hasPlayedWinSong = false;
      /**
       * Whether or not the visualizer is in full screen mode
       */

      this.fullscreen = false;
      /* -------------------- map related values -------------------- */

      /**
       * The size of map squares in pixels.
       * @type {number}
       */

      this.scale = NaN;
      /**
       * The minimum size of an image which should be drawn on the map's squares
       * Add a comment to this line.
       * @type {number}
       */

      this.drawScale = NaN;
      /**
       * The current visualizer time or position in turns, starting with 0 at the
       * start of 'turn 1'.
       */

      this.time = 0;
      /* -------------------- mouse related values -------------------- */

      /**
       * True, if the mouse is currently in the active area of the map.
       */

      this.mouseOverVis = false;
      /**
       * The current map column, the mouse is hovering over.
       * This value is only valid when {@link State#mouseOverVis} is true.
       * @type {number}
       */

      this.mouseCol = null;
      /**
       * The current map row, the mouse is hovering over.
       * This value is only valid when {@link State#mouseOverVis} is true.
       * @type {number}
       */

      this.mouseRow = null;
      /**
       * Whether or not the mouse ic currently clicked.
       */

      this.mouseDown = false;
      /* -------------------- playing speed related values -------------------- */

      /**
       * Overrides the duration in case the replay is so short that the
       * playback rate would be below this turns per second.
       */

      this.speedSlowest = 0;
      /**
       * Overrides the duration in case the replay is so long that the
       * playback rate would be over this turns per second.
       */

      this.speedFastest = 6;
      /**
       * An additional speed factor that is applied (logarithmically) to the result of the calculation and
       * can be modified with the speed buttons in the visualizer
       */

      this.speedFactor = 1;
      /**
       * Cpu How much CPU juice the visualizer should consume during regular playback.
       * After each rendered frame, pauses will be inserted to shape an average CPU utilization.
       * It is far from exact, but serves the purpose to keep the CPU from maxing out and people
       * from complaining.
       */

      this.cpu = 0.5;
      /* -------------------- canvas related values -------------------- */

      /**
       * The Pirate object who's currently highlighted -
       * highlightedPirate[0] is the pirate highlighted because the cursor is on it on canvas.
       * highlightedPirate[1] is the pirate highlighted because the cursor is on its icon on pirateMenu.
       * normally, only one of those 2 can't be null.
       *
       * @type {Pirate[]}
       */

      this.highlightedPirate = [null, null];
      /**
       * Whether or not the canvas needs to be redrawn because of config changes.
       */

      this.redrawRequired = false;
      this.audioManager.cleanUp(); // Clean Up the audio manager.
    }
  }]);

  return State;
}();

/***/ }),

/***/ "./game/lib/plugins/root/visualizer/js/Util.js":
/*!*****************************************************!*\
  !*** ./game/lib/plugins/root/visualizer/js/Util.js ***!
  \*****************************************************/
/*! exports provided: sortOnMap, sortByBoolFunc, numberToColor, getColor, getGradientTopColor, getTeamImage, promiseWrapper, throwError, groupByProperty, UnimplementedError, snakeToCamelCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortOnMap", function() { return sortOnMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByBoolFunc", function() { return sortByBoolFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberToColor", function() { return numberToColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getColor", function() { return getColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGradientTopColor", function() { return getGradientTopColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTeamImage", function() { return getTeamImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "promiseWrapper", function() { return promiseWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwError", function() { return throwError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupByProperty", function() { return groupByProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnimplementedError", function() { return UnimplementedError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snakeToCamelCase", function() { return snakeToCamelCase; });
/* harmony import */ var _PluginManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~PluginManager */ "./game/lib/visualizer/src/bin/PluginManager.json");
var _PluginManager__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ~PluginManager */ "./game/lib/visualizer/src/bin/PluginManager.json", 1);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



// typehints-only

/**
 * @fileOverview Utility functions used in the visualizer.
 * @author <a href="mailto:marco.leise@gmx.de">Marco Leise</a>
 */

/**
 * On a infinite repeating map, this maps a coordinate x into the 'original' instance of the map
 * area. That is the area starting at (0;0) ranging to (width;height). This function operates on a
 * single coordinate so the range parameter can be either the width or height.
 *
 * @param {number} x - The coordinate that should be remapped.
 * @param {number} range - The maximum for that coordinate.
 * @return {number} X' such that, 0 &lt;= x &lt; range.
 */
Math.wrapAround = function (x, range) {
  return x - Math.floor(x / range) * range;
};
/**
 * A simple clamp function that makes sure, a value x doesn't violate a given range.
 *
 * @param {number} x - The value that should be clamped to the range.
 * @param {number} min - The minimum value of a range.
 * @param {number} max - The maximum value of a range.
 * @return {number} The value of x, clamped to the range [min..max].
 */


Math.clamp = function (x, min, max) {
  return x < min ? min : x > max ? max : x;
};
/**
 * Sort canvas objects on map.
 *
 * @param {MovingObject} a - A canvas object.
 * @param {MovingObject} b - A canvas object.
 * @return {number} Positive if a is above b, otherwise negative.
 */


function sortOnMap(a, b) {
  if (a.mapY === b.mapY) {
    if (a.mapX === b.mapX) {
      return b.uniqueId - a.uniqueId;
    }

    return b.mapX - a.mapX; // Draw 'righter' objects first
  }

  return a.mapY - b.mapY; // Draw higher objects first
}
/**
 * Sorts a given array by a given boolean function.
 * All elements x for which boolFunc(x) is true will appear before
 * all elements x for which boolFunc(x) is false.
 *
 * @param {Array} arr - An array to sort.
 * @param {Function} boolFunc - Boolean function.
 */

function sortByBoolFunc(arr, boolFunc) {
  arr.sort(function (a, b) {
    return Number(boolFunc(b)) - Number(boolFunc(a));
  });
}
/**
 * Converts the given hex number to color.
 *
 * @param {number} num - The hex number.
 * @return {string} The color.
 */

function numberToColor(num) {
  var c = Number(num).toString(16);
  return '#' + ('000000'.substr(0, 6 - c.length) + c.toUpperCase());
}
/**
 * Returns the color of the given attribute.
 * If the attribute is a number (a player id), the player's team color is returned.
 * Otherwise, the color matching the given string is returned.
 *
 * @param {string | number} attr - Attribute whose color is requested.
 * @return {string} The color of the given attribute, in RGB-hexa format.
 */

function getColor(attr) {
  attr = String(attr);

  if (!(attr in _PluginManager__WEBPACK_IMPORTED_MODULE_0__["Colors"])) {
    // Attr is not a valid color
    return null;
  }

  return _PluginManager__WEBPACK_IMPORTED_MODULE_0__["Colors"][attr];
}
/**
 * Returns the top gradient color of the given attribute.
 * If the attribute is a number (a player id), the player's team top gradient color is returned.
 * Otherwise, the color matching the given string is returned.
 *
 * @param {string | number} attr - Attribute whose color is requested.
 * @return {string} The top gradient color of the given attribute, in RGB-hexa format.
 */

function getGradientTopColor(attr) {
  attr = String(attr);

  if (!(attr in _PluginManager__WEBPACK_IMPORTED_MODULE_0__["Colors"])) {
    // Attr is not a valid color
    throw new Error("Warning: ".concat(attr, " does not match any known color!"));
  } else {
    return _PluginManager__WEBPACK_IMPORTED_MODULE_0__["Colors"][attr];
  }
}
/**
 * Returns the image with the given name for the player with the given teamId,
 * or throws error if no such image exist.
 *
 * @param {GameMap} map - The given map's state.
 * @param {string} imageName - The name of the image.
 * @param {number} teamId - The team (-1 for the neutral team).
 *
 * @return {AnimatableImage} The image with the given name for the player with the given teamId.
 */

function getTeamImage(map, imageName, teamId) {
  return map.images[imageName + teamId] || map.images[imageName];
}
/**
 * Wraps a Promise so it will be resolved both on resolve and on reject, and specifies which is the case.
 *
 * @param {Promise} promise - The promise to wrap.
 * @return {Promise} A Promise wrapper.
 */

function promiseWrapper(promise) {
  return promise.then(function (value) {
    return {
      value: value,
      resolved: true
    };
  }, function (value) {
    return {
      value: value,
      resolved: false
    };
  });
}
/**
 * Throw error of type {type} with message {msg}.
 *
 * @param {string} msg - The message of the error.
 * @param {Object} [type=Error] - Type of the error class.
 */

function throwError(msg) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Error;
  throw new type(msg);
}
/**
 * Groups an array by a property name.
 *
 * @param {Array<Object>} arr - The object to group.
 * @param {string} prop - The name of the property to group by.
 * @return {Object<any, Object>} The grouped items.
 */

function groupByProperty(arr, prop) {
  return arr.reduce(function (curr, next) {
    curr[next[prop]] = curr[next[prop]] || [];
    curr[next[prop]].push(next);
    return curr;
  }, {});
}
/**
 * Used for throwing when a method is not implemented.
 */

var UnimplementedError =
/*#__PURE__*/
function (_Error) {
  _inherits(UnimplementedError, _Error);

  /**
   * @param {string} message - The message of the error.
   */
  function UnimplementedError() {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Unimplemented method. Make sure one of your plugins or subclasses implements this method.';

    _classCallCheck(this, UnimplementedError);

    return _possibleConstructorReturn(this, _getPrototypeOf(UnimplementedError).call(this, message));
  }

  return UnimplementedError;
}(_wrapNativeSuper(Error));
/**
 * Converts a string from snake_case to camelCase.
 *
 * @param {string} snake - The string to convert.
 * @return {string} The string in camelCase.
 */

function snakeToCamelCase(snake) {
  return snake.split('_').map(function (str, i) {
    return i === 0 ? str : str.slice(0, 1).toUpperCase() + str.slice(1);
  }).join('');
}

/***/ }),

/***/ "./game/lib/plugins/root/visualizer/js/Visualizer.js":
/*!***********************************************************!*\
  !*** ./game/lib/plugins/root/visualizer/js/Visualizer.js ***!
  \***********************************************************/
/*! exports provided: Visualizer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Visualizer", function() { return Visualizer; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hamsterjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hamsterjs */ "./node_modules/hamsterjs/hamster.js");
/* harmony import */ var hamsterjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hamsterjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _State__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./State */ "./game/lib/plugins/root/visualizer/js/State.js");
/* harmony import */ var _Director__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Director */ "./game/lib/plugins/root/visualizer/js/Director.js");
/* harmony import */ var _Replay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Replay */ "./game/lib/plugins/root/visualizer/js/Replay.js");
/* harmony import */ var _GameMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GameMap */ "./game/lib/plugins/root/visualizer/js/GameMap.js");
/* harmony import */ var _Const__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Const */ "./game/lib/plugins/root/visualizer/js/Const.js");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Util */ "./game/lib/plugins/root/visualizer/js/Util.js");
/* harmony import */ var _StartupOptions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./StartupOptions */ "./game/lib/plugins/root/visualizer/js/StartupOptions.js");
/* harmony import */ var _AudioManager__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./AudioManager */ "./game/lib/plugins/root/visualizer/js/AudioManager.js");
/* harmony import */ var _ImageManager__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ImageManager */ "./game/lib/plugins/root/visualizer/js/ImageManager.js");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Config */ "./game/lib/plugins/root/visualizer/js/Config.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }














/**
 * @enum
 * Enum for the different states, the visualizer can be in.
 */

var LoadingState = {
  /**
   * The visualizer is not currently loading a replay or map.
   * @const
   */
  IDLE: 0,

  /**
   * The visualizer is loading a replay or map and cannot take any load requests.
   * @const
   */
  LOADING: 1,

  /**
   * The visualizer is currently cleaning up.
   * @const
   * @see Visualizer#cleanUp
   */
  CLEANUP: 2
};
/**
 * The main object that provides all necessary methods for the use in a web
 * page. Usually you just construct an instance and then call {@link Visualizer#loadReplayData}.
 */

var Visualizer =
/*#__PURE__*/
function () {
  /**
   * Creates an instance of Visualizer.
   *
   * @param {angular.IRootScopeService} $rootScope - The root angular scope.
   */
  function Visualizer($rootScope) {
    var _this = this;

    _classCallCheck(this, Visualizer);

    this.rootScope = $rootScope;
    this.options = new _StartupOptions__WEBPACK_IMPORTED_MODULE_9__["StartupOptions"]();
    /**
     * @protected
     * The HTML element that contains the visualizer.
     *
     * @type {HTMLElement}
     */

    this.container = null;
    /**
     * @private
     * An html logger that is displayed until the visualizer is fully loaded, to report progress and errors.
     * @type {HTMLDivElement}
     */

    this.log = null;
    /**
     * @private
     * The current loading state of the visualizer.
     */

    this.loading = LoadingState.LOADING;
    /**
     * @type {HTMLDivElement}
     */

    this.log = this.initializeLog();
    /**
     * The Visualizer's state.
     */

    this.state = new _State__WEBPACK_IMPORTED_MODULE_3__["State"](this.options, this);
    /**
     * The Visualizer's map.
     */

    this.map = new _GameMap__WEBPACK_IMPORTED_MODULE_6__["GameMap"](this.state);
    /**
     * The Visualizer's director.
     */

    this.director = new _Director__WEBPACK_IMPORTED_MODULE_4__["Director"](this);
    /**
     * @private
     * The current mouse X coordinate.
     */

    this.mouseX = -1;
    /**
     * @private
     * The current mouse Y coordinate.
     */

    this.mouseY = -1;
    /**
     * @protected
     * A list represnting the Visualizer's progress.
     */

    this.progressList = [];
    /**
     * The Visualizer's replay string.
     * @private
     * @type {string}
     */

    this.replayStr = null;
    /**
     * The Visualizer's canvas.
     * @type {HTMLCanvasElement}
     */

    this.canvas = null;
    /**
     * The Canvas's context.
     * @type {CanvasRenderingContext2D}
     */

    this.ctx = null;
    /**
     * Resolves the this.isLoading promise.
     */

    this.finishLoading = null;
    /**
     * The source of the background image.
     * @type {string}
     */

    this.backgroundImage = '';
    /**
     * @type {Promise}
     */

    this.isLoading = new Promise(function (resolve) {
      return _this.finishLoading = resolve;
    }).then(function () {
      _this.backgroundImage = _this.state.imageManager.images.background.src;

      _this.rootScope.$apply();
    });
    /**
     * Controls whether the settings menu is open.
     */

    this.settingsOpen = false;
    /**
     * Controls whether the information is open.
     */

    this.informationOpen = false;
    /**
     * The possible play speeds.
     *
     * @type {Array<number>}
     */

    this.playSpeeds = [0.25, 0.5, 1, 1.5, 2, 3, 5];
    var imagePromise = this.state.imageManager.loadImages();
    var audioPromise = this.state.audioManager.loadAudio();
    /**
     * @type {Promise<Array<Array<any>>>}
     */

    this.assetsPromise = Promise.all([imagePromise, audioPromise]).catch(function (e) {
      // eslint-disable-next-line no-console
      console.error(e);

      _this.logError(e.message);
    });
  }
  /**
   * Initializes the visualizer, with the given element as the canvas cotnainer.
   *
   * @param {HTMLElement} container - The canvas container.
   */


  _createClass(Visualizer, [{
    key: "init",
    value: function init(container) {
      var _this2 = this;

      this.container = container; // Proceed with initialization

      try {
        /**
         * @private
         * @type {Hamster}
         */
        this.hamster = new hamsterjs__WEBPACK_IMPORTED_MODULE_2___default.a(document.getElementById('game-canvas')); // Override options data from URL parameters

        this.parseURL();
        this.loading = LoadingState.IDLE;
        this.assetsPromise.then(function (results) {
          var _results = _slicedToArray(results, 2),
              imagesResults = _results[0],
              audioResults = _results[1];

          _this2.completedPreloading(imagesResults.concat(audioResults));
        });
        this.resize(true);
      } catch (error) {
        this.logError(error.message);
        throw error;
      }
    }
    /**
     * A hook function for running any pre-game animations.
     */

  }, {
    key: "runOpeningAnimation",
    value: function runOpeningAnimation() {}
    /**
     * A hook function for running any end-game animations.
     */

  }, {
    key: "runEndingAnimation",
    value: function runEndingAnimation() {}
    /**
     * An array containing both the images and the audio.
     *
     * @type {Array<(AudioPrototype|ImageInfo)>}
     * @readonly
     */

  }, {
    key: "initializeLog",

    /**
     *
     * This method initializes and returns the visualizer logger - an html logger that is displayed until the visualizer is fully loaded.
     *
     * @return {HTMLDivElement} The new visualizer logger (displayed on screen while loading).
     */
    value: function initializeLog() {
      return document.querySelector('#log-text');
    }
    /**
     * Override options/config data from URL parameters.
     */

  }, {
    key: "parseURL",
    value: function parseURL() {
      var parameters = window.location.href;
      var ind = parameters.indexOf('?');

      if (ind !== -1) {
        parameters = parameters.substr(ind + 1).split('#')[0].split('&'); // Parse all the parameters.

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = parameters[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var parameter = _step.value;
            var equalPos = parameter.indexOf('=');
            var key = parameter.substr(0, equalPos);
            var value = parameter.substr(equalPos + 1);

            switch (key) {
              case 'debug':
              case 'profile':
              case 'embedded':
              case 'display':
                this.state.options[key] = value === 'true' || value === '1';
                break;

              case 'turn':
                this.state.options[key] = parseInt(value);
                break;
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }
    /**
     * The names of the players.
     *
     * @type {Array<string>}
     */

  }, {
    key: "progress",

    /**
     * Prints a message on the screen and then executes a function. Usually the screen is not updated
     * until the current thread of execution has finished. To work around that limitation, this method
     * adds the function to be called to the browser's timer queue. Additionally any thrown errors are
     * also printed.
     *
     * @private
     * @param {string} log - A message to be logged before executing the function.
     * @param {Function} func - A function to be called after displaying the message.
     * @param {string} id - An identification of the progress that will be used to filter duplicates in the queue.
     */
    value: function progress(log, func, id) {
      var _this3 = this;

      if (this.progressList.indexOf(id) !== -1) {
        return;
      }

      this.progressList.push(id);

      if (log) {
        this.logOut(log);
      }

      window.setTimeout(function () {
        try {
          func();

          var ind = _this3.progressList.indexOf(id);

          if (ind !== -1) {
            _this3.progressList.splice(ind, 1);
          }
        } catch (error) {
          _this3.logError('An error has occured. See console log for more details.');

          throw error;
        }
      }, 50);
    }
    /**
     * Places a paragraph with a message in the visualizer DOM element.
     *
     * @private
     * @param {string} text - The message text.
     */

  }, {
    key: "logOut",
    value: function logOut(text) {
      if (!this.log) {
        return;
      }

      this.log.innerHTML += text.replace(/\n/g, '<br>') + '<br>';
    }
    /**
     * Sets the output log do display an error message, and changes the color to red.
     *
     * @param {string} text - The error message to be displayed .
     */

  }, {
    key: "logError",
    value: function logError(text) {
      this.log.style.color = 'red';
      this.logOut(text);
      this.cleanUp();
    }
    /**
     * Resets the visualizer and associated objects to an initial state. This method is also called in
     * case of an error.
     */

  }, {
    key: "cleanUp",
    value: function cleanUp() {
      this.loading = LoadingState.CLEANUP;
      this.director.cleanUp();
      this.state.cleanUp(); // Clear the replay string

      this.replayStr = null; // Hide the canvas.

      if (this.canvas !== null && this.container.firstChild === this.canvas) {
        this.container.removeChild(this.canvas);
      } // Disable event listeners.


      document.onkeydown = null;
      document.onkeyup = null;
      document.onkeypress = null;
      window.onresize = null; // Show the logger.

      this.log.style.display = 'block';
    }
    /**
     * This is called before a replay or map is loaded to ensure the visualizer is in an idle state at
     * that time. It then sets the state to {@link LoadingState}.LOADING.
     *
     * @private
     * @return {boolean} True, if the visualizer was idle.
     */

  }, {
    key: "preload",
    value: function preload() {
      if (this.loading !== LoadingState.IDLE) {
        return true;
      }

      this.cleanUp();
      this.loading = LoadingState.LOADING;
      return false;
    }
    /**
     * Loads a replay string directly.
     *
     * @param {string} data - The replay string.
     */

  }, {
    key: "loadReplayData",
    value: function () {
      var _loadReplayData = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(data) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.isLoading;

              case 2:
                this.replayStr = data;
                this.loadCanvas();

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function loadReplayData(_x) {
        return _loadReplayData.apply(this, arguments);
      }

      return loadReplayData;
    }()
    /**
     * In this method the replay string that has been passed directly or downloaded is parsed into a
     * {@link Replay}. Afterwards an attempt is made to start the visualization ({@link Visualizer#tryStart}).
     *
     * @private
     */

  }, {
    key: "loadParseReplay",
    value: function loadParseReplay() {
      var _this4 = this;

      this.progress('Parsing the replay...', function () {
        try {
          if (_this4.replayStr !== null) {
            new _Replay__WEBPACK_IMPORTED_MODULE_5__["Replay"](_this4.replayStr, _this4.map, _this4.state.options.debug); // Generate the replay.

            _this4.replayStr = null;

            _this4.updatePlayerNamesFromReplay();
          } else if (_this4.loading !== LoadingState.CLEANUP) {
            throw new Error('Replay is undefined.');
          }
        } catch (error) {
          _this4.logError('The visualizer does not support this replay! <br>');

          throw error;
        }

        _this4.tryStart();
      }, 'PARSE');
    }
    /**
     * Override the player names from the replay.
     */

  }, {
    key: "updatePlayerNamesFromReplay",
    value: function updatePlayerNamesFromReplay() {
      for (var i = 0; i < this.state.replay.players; i++) {
        var playerName = 'player' + i + 'name';
        this.state.options.playerNames[i] = window[playerName] || this.state.replay.meta.playerNames[i];
      }
    }
    /**
     * Creates the main canvas element and insert it into the web page. An attempt is made to start the
     * visualization ({@link Visualizer#tryStart}).
     *
     * @private
     */

  }, {
    key: "loadCanvas",
    value: function loadCanvas() {
      var _this5 = this;

      this.progress('Creating canvas...', function () {
        // If the canvas does not exist, create it.
        if (_this5.canvas === null) {
          _this5.canvas = document.createElement('canvas');
          _this5.canvas.style.display = 'none';
          _this5.canvas.style.height = '100%';
          _this5.canvas.style.width = '100%';
          _this5.ctx = _this5.canvas.getContext('2d');
        } // Make sure the canvas is the first child of the container.


        if (_this5.container.firstChild !== _this5.canvas) {
          _this5.container.insertBefore(_this5.canvas, _this5.container.firstChild);
        } // Try to start the visualizer.


        _this5.tryStart();
      }, 'CANVAS');
    }
    /**
     * Called when no more images or audio are loading.
     * An attempt is made to start the visualization ({@link Visualizer#tryStart}).
     * If some files didn't load, the visualizer is stopped with an error message.
     *
     * @param {Object[]} results - The results of the files' loading, in the format - {resolved: boolean, value: string}.
     */

  }, {
    key: "completedPreloading",
    value: function completedPreloading(results) {
      this.finishLoading();
      var failedFiles = results.filter(function (x) {
        return x.resolved === false;
      });

      if (failedFiles.length === 0) {
        // If all files were resolved, try to start the visualizer.
        this.tryStart();
        this.resize(true);
      } else {
        // Some files were not resolved. Notify the user and throw an error.
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = failedFiles[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var file = _step2.value;
            // eslint-disable-next-line no-console
            console.error("failed to load file ".concat(file.value, "!"));
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        this.logError('An error has occured while loading files. See console log for more details.');
        throw Error('An error has occured while loading files');
      }
    }
    /**
     * Checks if we have a drawing context (canvas), the images and the replay. If all components
     * are loaded, some remaining items that depend on them are created and playback is started.
     * TryStart() is called after any long during action that runs in the background, like downloading
     * images and the replay to check if that was the last missing component.
     *
     * @protected
     */

  }, {
    key: "tryStart",
    value: function tryStart() {
      // If the replay is already defined.
      if (this.state.replay !== null) {
        if (this.ctx === null) {
          return;
        } // Make all images accessible from the map.


        for (var imageName in this.state.imageManager.images) {
          if (this.state.imageManager.images.hasOwnProperty(imageName) && this.state.imageManager.images[imageName].image !== null) {
            this.map.images[imageName] = this.state.imageManager.images[imageName].image;
          }
        } // Calculate speed from duration and config settings.


        this.director.duration = this.state.replay.turns;
        this.calculateReplaySpeed(); // Set events handlers.

        this.setEventHandlers();
        Visualizer.focused = this; // 'Visualizer.focus' is used for the webkit

        this.log.style.display = 'none';
        this.canvas.style.display = 'inline';
        this.loading = LoadingState.IDLE;
        this.setFullscreen(this.state.fullscreen);
        this.state.audioManager.play('background', 'background', 1, true); // Start play background music

        if (this.state.replay.turns) {
          if (!isNaN(this.state.options.turn)) {
            this.director.gotoTick(this.state.options.turn - 1);
          } else {
            this.director.gotoTick(0);
          }

          this.director.time = 0;
          this.director.play();
        }
      } else if (this.replayStr !== null) {
        this.loadParseReplay();
      }
    }
    /**
     * Changes the replay speed by {modifier} levels.
     *
     * @param {number} modifier - {@link State#speedFactor} Is changed by this amount.
     */

  }, {
    key: "modifySpeed",
    value: function modifySpeed(modifier) {
      var currentSpeedIndex = this.playSpeeds.indexOf(this.director.playSpeed);
      var maxSpeedIndex = this.playSpeeds.length - 1;
      var newIndex = Math.clamp(currentSpeedIndex + modifier, 0, maxSpeedIndex);
      this.state.speedFactor = this.playSpeeds[newIndex];
      this.calculateReplaySpeed();
    }
    /**
     * Sets the replay speed to the given factor.
     *
     * @param {number} factor - {@link State#speedFactor} Is changed to this amount.
     */

  }, {
    key: "setSpeed",
    value: function setSpeed(factor) {
      this.state.speedFactor = Math.clamp(factor, this.state.speedSlowest, this.state.speedFastest);
      this.calculateReplaySpeed();
    }
    /**
     * This method calculates the playback speed from {@link State#speedFactor}.
     *
     * @private
     */

  }, {
    key: "calculateReplaySpeed",
    value: function calculateReplaySpeed() {
      this.director.playSpeed = this.state.speedFactor;

      if (this.director.speed !== 0) {
        this.director.speed = this.director.playSpeed;
      }
    }
    /**
     * Calculates the visualizer display size depending on the constructor arguments and whether
     * fullscreen mode is supported and enabled.
     *
     * @private
     * @return {{w: number, h: number}} - The size the visualizer should have.
     */

  }, {
    key: "calculateCanvasSize",
    value: function calculateCanvasSize() {
      var replay = this.state.replay && this.state.replay.meta.replayData;
      var rows = replay ? replay.map.rows : 1;
      var cols = replay ? replay.map.cols : 1;
      var unitSize = Math.min(jquery__WEBPACK_IMPORTED_MODULE_0___default()('#game-bg').height() / rows, jquery__WEBPACK_IMPORTED_MODULE_0___default()('#game-bg').width() / cols);
      var width = unitSize * cols;
      var height = unitSize * rows;
      return {
        w: width,
        h: height
      };
    }
    /**
     * Enables or disables fullscreen mode. In fullscreen mode the &lt;body&gt; element is replaced with
     * a new one that contains only the visualizer. For the Java/Rhino version a special setFullscreen()
     * method on the window object is called.
     *
     * @private
     * @param {boolean} enable - If true, the visualizer will switch to fullscreen mode if supported.
     */

  }, {
    key: "setFullscreen",
    value: function setFullscreen(enable) {
      if (!this.state.options.embedded) {
        if (window.setFullscreen) {
          this.state.fullscreen = window.setFullscreen(enable);
        } else {
          this.state.fullscreen = enable;

          if (enable || this.savedBody) {
            var html = document.getElementsByTagName('html')[0];

            if (enable) {
              this.container.removeChild(this.canvas);
              this.savedOverflow = html.style.overflow;
              html.style.overflow = 'hidden';
              var tempBody = document.createElement('body');
              var tmpGameCanvas = document.createElement('div');
              tmpGameCanvas.setAttribute('id', 'game-canvas');
              tmpGameCanvas.appendChild(this.canvas);
              tempBody.appendChild(tmpGameCanvas);
              this.savedBody = html.replaceChild(tempBody, document.body);
            } else if (this.savedBody) {
              document.body.removeChild(this.canvas.parentNode);
              this.container.appendChild(this.canvas);
              html.replaceChild(this.savedBody, document.body);
              html.style.overflow = this.savedOverflow;
              delete this.savedBody;
            }
          }
        }
      }

      this.resize(true);
    }
    /**
     * Hook for end animation promise assignment.
    */

  }, {
    key: "getAnimationPromise",
    value: function getAnimationPromise() {
      return new Promise(function (resolve) {
        return resolve();
      });
    }
    /**
     * Orders the director to resume playing if stopped, or to stop if playing.
     */

  }, {
    key: "togglePlay",
    value: function togglePlay() {
      this.director.togglePlay();
      this.director.draw();
    }
    /**
     * Called upon window size changes to layout the visualizer elements.
     *
     * @public
     * @param {boolean} forced - If true, the layouting and redrawing is performed even if no size change can be
     *        detected. This is useful on startup or if the canvas content has been invalidated.
     */

  }, {
    key: "resize",
    value: function resize(forced) {
      var SCORE_WIDTH = 150;

      if (!this.canvas) {
        return;
      }

      var _this$canvas = this.canvas,
          oldWidth = _this$canvas.width,
          oldHeight = _this$canvas.height;

      var _this$calculateCanvas = this.calculateCanvasSize(),
          newWidth = _this$calculateCanvas.w,
          newHeight = _this$calculateCanvas.h;

      var resizing = newWidth !== oldWidth || newHeight !== oldHeight;

      if (resizing || forced) {
        if (resizing) {
          this.canvas.width = newWidth;
          this.canvas.height = newHeight;
        }

        if (forced) {
          // Because of the zones we want to draw the map again if resize is forced
          this.map.invalid = true;
        }

        this.map.setSize(newWidth, newHeight);
        this.setScale(); // Redraw everything

        this.director.draw(true);
      }
    }
    /**
     * Redraws the map display and it's overlays. It is called by the {@link Director} and resembles the
     * core of the visualization.
     */

  }, {
    key: "draw",
    value: function () {
      var _draw = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var map;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.isLoading;

              case 2:
                if (!(this.loading === LoadingState.CLEANUP || !this.state.replay)) {
                  _context2.next = 4;
                  break;
                }

                return _context2.abrupt("return");

              case 4:
                map = this.map; // Clears the outer canvas

                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                map.validate();
                this.ctx.drawImage(map.canvas, 0, 0); // Mouse cursor (super complicated position calculation)

                this.drawMouseSquare();
                this.rootScope.$emit('visualizer-drawn');

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function draw() {
        return _draw.apply(this, arguments);
      }

      return draw;
    }()
    /**
     * Returns the turn for display.
     *
     * @readonly
     * @type {number}
     */

  }, {
    key: "setEventHandlers",

    /* --------------- Event handling related functions --------------- */

    /**
     * Override events handlers for the window, document and canvas.
     */
    value: function setEventHandlers() {
      var _this6 = this;

      /**
       * This is a handler for the key down event.
       *
       * @param {KeyboardEvent} event - The input event.
       * @return {boolean} True, if the browser should handle the event.
       */
      document.onkeydown = function (event) {
        // Used for the webkit
        if (document.activeElement.className === 'ace_text-input') {
          if (event.keyCode === _Const__WEBPACK_IMPORTED_MODULE_7__["Key"].ESCAPE) {
            // Only defined in the webkit
            // eslint-disable-next-line no-undef
            toggleEditorFullScreen();
          }

          return true;
        }

        if (!(event.shiftKey || event.ctrlKey || event.altKey || event.metaKey || (document.activeElement || {}).tagName === 'INPUT')) {
          if (Visualizer.focused.keyPressed(event.keyCode)) {
            if (event.preventDefault) {
              event.preventDefault();
            } else {
              event.returnValue = false;
            }

            return false;
          }
        }

        return true;
      };
      /**
       * This is a handler for the mouse move event.
       *
       * @param {MouseEvent} event - The input event.
       */


      this.canvas.onmousemove = function (event) {
        var mx = 0,
            my = 0;
        var currentObject = _this6.canvas;

        if (currentObject.offsetParent) {
          do {
            mx += currentObject.offsetLeft;
            my += currentObject.offsetTop;
          } while (currentObject = currentObject.offsetParent);
        }

        mx = event.clientX - mx + (window.scrollX === undefined ? document.body.parentNode.scrollLeft !== undefined ? document.body.parentNode.scrollLeft : document.body.scrollLeft : window.scrollX);
        my = event.clientY - my + (window.scrollY === undefined ? document.body.parentNode.scrollTop !== undefined ? document.body.parentNode.scrollTop : document.body.scrollTop : window.scrollY);

        _this6.mouseMoved(mx, my);
      };
      /**
       * This is a handler for the mouse exit event.
       */


      this.canvas.onmouseout = function () {
        return _this6.mouseExited();
      };
      /**
       * This is a handler for the mouse down event.
       *
       * @param {MouseEvent} event - The input event.
       */


      this.canvas.onmousedown = function (event) {
        if (event.button === 0) {
          Visualizer.focused = _this6; // Used for the webkit

          _this6.mousePressed();
        }
      };
      /**
       * This is a handler for the mouse up event.
       *
       * @param {MouseEvent} event - The input event.
       */


      this.canvas.onmouseup = function (event) {
        if (event.button === 0) {
          _this6.mouseReleased();
        }
      };
      /**
       * Handle mouse-scroll using hamster (an external library) to pass turns.
       */


      this.hamster.wheel(function (event, delta) {
        _this6.director.gotoTick(Math.ceil(_this6.state.time) + Math.sign(delta));

        event.preventDefault();

        _this6.rootScope.$emit('removeAnimations');
      }, true);
      /**
       * Handle page resize event.
       */

      window.onresize = function () {
        return _this6.resize(false);
      };
    }
    /**
     * Internal wrapper around mouse move events.
     *
     * @protected
     * @param {number} mx - The X coordinate of the mouse relative to the upper-left corner of the visualizer.
     * @param {number} my - The Y coordinate of the mouse relative to the upper-left corner of the visualizer.
     */

  }, {
    key: "mouseMoved",
    value: function mouseMoved(mx, my) {
      this.mouseX = mx;
      this.mouseY = my;
      this.state.mouseCol = Math.wrapAround(mx, this.state.scale * this.state.replay.map.cols) / this.state.scale | 0;
      this.state.mouseRow = Math.wrapAround(my, this.state.scale * this.state.replay.map.rows) / this.state.scale | 0;
      this.state.mouseOverVis = this.isMouseInVisualizer();
    }
    /**
     * Returns whether or not the mouse is in the visualizer boundaries.
     *
     * @return {boolean} Whether or not the mouse is in the visualizer boundaries.
     */

  }, {
    key: "isMouseInVisualizer",
    value: function isMouseInVisualizer() {
      return this.mouseX >= 0 && this.mouseX < this.state.scale * this.state.replay.map.cols && this.mouseY >= 0 && this.mouseY < this.state.scale * this.state.replay.map.rows;
    }
    /**
     * Internal wrapper around mouse down events.
     *
     * @protected
     */

  }, {
    key: "mousePressed",
    value: function mousePressed() {
      if (this.map.contains(this.mouseX, this.mouseY)) {
        this.state.mouseDown = true;
        this.mouseMoved(this.mouseX, this.mouseY);
      }
    }
    /**
     * Internal wrapper around mouse button release events.
     *
     * @protected
     */

  }, {
    key: "mouseReleased",
    value: function mouseReleased() {
      this.state.mouseDown = false;
      this.mouseMoved(this.mouseX, this.mouseY);
    }
    /**
     * Internal wrapper around mouse exit window events.
     *
     * @protected
     */

  }, {
    key: "mouseExited",
    value: function mouseExited() {
      this.state.mouseDown = false;
      this.state.mouseOverVis = false;
    }
    /**
     * Internal wrapper around key press events.
     *
     * @private
     * @param {number} key - A key code for the pressed button.
     * @return {boolean} - False, if the browser should handle this key and true, if the visualizer
     *          handled the key.
     */

  }, {
    key: "keyPressed",
    value: function keyPressed(key) {
      var d = this.director;

      switch (key) {
        case _Const__WEBPACK_IMPORTED_MODULE_7__["Key"].HOME:
          this.changeTurnByUser();
          d.gotoTick(0);
          break;

        case _Const__WEBPACK_IMPORTED_MODULE_7__["Key"].END:
          this.changeTurnByUser();
          d.gotoTick(d.duration);
          break;

        case _Const__WEBPACK_IMPORTED_MODULE_7__["Key"].SPACE:
          d.togglePlay();
          break;

        case _Const__WEBPACK_IMPORTED_MODULE_7__["Key"].LEFT:
          this.changeTurnByUser();
          d.gotoTick(Math.ceil(this.state.time) - 1);
          break;

        case _Const__WEBPACK_IMPORTED_MODULE_7__["Key"].RIGHT:
          this.changeTurnByUser();
          d.gotoTick(Math.floor(this.state.time) + 1);
          break;

        case _Const__WEBPACK_IMPORTED_MODULE_7__["Key"].PLUS:
        case _Const__WEBPACK_IMPORTED_MODULE_7__["Key"].PLUS_OPERA:
        case _Const__WEBPACK_IMPORTED_MODULE_7__["Key"].PLUS_JAVA:
        case _Const__WEBPACK_IMPORTED_MODULE_7__["Key"].UP:
          this.modifySpeed(+1);
          break;

        case _Const__WEBPACK_IMPORTED_MODULE_7__["Key"].MINUS:
        case _Const__WEBPACK_IMPORTED_MODULE_7__["Key"].MINUS_JAVA:
        case _Const__WEBPACK_IMPORTED_MODULE_7__["Key"].DOWN:
          this.modifySpeed(-1);
          break;

        case _Const__WEBPACK_IMPORTED_MODULE_7__["Key"].ESCAPE:
          window.toggleGameFullScreen && window.toggleGameFullScreen();
          break;

        case _Const__WEBPACK_IMPORTED_MODULE_7__["Key"].TAB:
          break;

        default:
          var keyStr = String.fromCharCode(key);

          switch (keyStr) {
            case 'F':
              this.setFullscreen(!this.state.fullscreen);
              break;

            case 'H':
              this.state.config.showHint.toggleValue();
              break;

            case 'S':
              this.toggleSettingsMenu();
              break;

            case 'I':
              this.changeAfterClickInfo();
              break;

            default:
              return false;
          }

      }

      return true;
    }
    /**
     * Create emit to remove animations.
     */

  }, {
    key: "changeTurnByUser",
    value: function changeTurnByUser() {
      this.rootScope.$emit('removeAnimations');
    }
    /**
     * Opens/Closes the settings menu.
     */

  }, {
    key: "toggleSettingsMenu",
    value: function toggleSettingsMenu() {
      this.settingsOpen = !this.settingsOpen;
    }
    /**
     * Opens/Closes the information menu.
     */

  }, {
    key: "changeAfterClickInfo",
    value: function changeAfterClickInfo() {
      this.informationOpen = !this.informationOpen;
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#info-params').addClass('shake');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#info-params').one('animationend', function (event) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#info-params').removeClass('shake');
      });
    }
    /**
     * @abstract
     * Draws a square around the mouse position to indicate where it is.
     */

  }, {
    key: "drawMouseSquare",
    value: function drawMouseSquare() {
      throw new _Util__WEBPACK_IMPORTED_MODULE_8__["UnimplementedError"]();
    }
    /**
     * @abstract
     * Calculates the scale size of the map.
     */

  }, {
    key: "setScale",
    value: function setScale() {
      throw new _Util__WEBPACK_IMPORTED_MODULE_8__["UnimplementedError"]();
    }
    /**
     * Returns the fraction of the score bar that should be full.
     *
     * @param {number} playerId - The id of the player to get the score for.
     * @param {number} turn - The turn to get the ratio for.
     * @return {number} Returns the points / maxPoints ratio of the player.
     */

  }, {
    key: "getScoreBarFraction",
    value: function getScoreBarFraction(playerId, turn) {
      return this.state.replay.scores[playerId][turn] / this.state.replay.maxPoints;
    }
    /**
     * Returns the string of current health status.
     *
     * @param {number} playerId - The id of the player to get the score for.
     * @param {number} turn - The turn to get the ratio for.
     * @return {number} Returns the points / maxPoints of the player.
     */

  }, {
    key: "getScoreBarLabel",
    value: function getScoreBarLabel(playerId, turn) {
      return this.state.replay.maxPoints - this.state.replay.scores[playerId][turn] + '/' + this.state.replay.maxPoints;
    }
    /**
     * Returns the scores of the players. Each element in the array contains the score of the player in every turn.
     *
     * @return {number[][]} An array of the scores of the players.
     */

  }, {
    key: "getScores",
    value: function getScores() {
      return this.state.replay.scores;
    }
    /**
     * Whether to show the ornaments (קישוטים).
     *
     * @type {boolean}
     */

  }, {
    key: "toggleConfigValue",

    /**
     * Toggles a config value.
     *
     * @param {Configuration} value - The config value to toggle, {@see Configuration.toggleValue}.
     * @param {Object} newValue - Optional, the new config value.
     */
    value: function toggleConfigValue(value) {
      var newValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      value.toggleValue(newValue); // Redraw

      this.state.redrawRequired = true;
      this.director.draw(); // Save the options to local storage

      this.state.config.saveConfig();
    }
  }, {
    key: "allAssets",
    get: function get() {
      return Object.values(this.state.audioManager.audioPrototypes).concat(Object.values(this.state.imageManager.images));
    }
    /**
     * Returns the assets that finished downloading.
     *
     * @type {Array<(AudioPrototype|ImageInfo)>}
     * @readonly
     */

  }, {
    key: "downloadedAssets",
    get: function get() {
      return this.allAssets.filter(function (asset) {
        return asset.downloaded;
      });
    }
  }, {
    key: "playerNames",
    get: function get() {
      var names = _toConsumableArray(this.options.playerNames);

      for (var i = 0; i < names.length; i++) {
        if (names[i] === undefined) {
          names[i] = this.state.replay.meta.playerNames[i];
        }
      }

      return names;
    }
  }, {
    key: "displayTurn",
    get: function get() {
      return Math.ceil(this.state.time);
    }
    /**
     * The current turn.
     *
     * @readonly
     * @type {number}
     */

  }, {
    key: "turn",
    get: function get() {
      return this.map.turn;
    }
  }, {
    key: "showOrnaments",
    get: function get() {
      return document.querySelector('.game').offsetWidth > 900;
    }
  }]);

  return Visualizer;
}();
Visualizer.$inject = ['$rootScope'];

/***/ }),

/***/ "./game/lib/plugins/root/visualizer/js/canvasObjects/CanvasObject.js":
/*!***************************************************************************!*\
  !*** ./game/lib/plugins/root/visualizer/js/canvasObjects/CanvasObject.js ***!
  \***************************************************************************/
/*! exports provided: CanvasObject, objectTypeToClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasObject", function() { return CanvasObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectTypeToClass", function() { return objectTypeToClass; });
/* harmony import */ var _ExtensibleObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExtensibleObject */ "./game/lib/plugins/root/visualizer/js/canvasObjects/ExtensibleObject.js");
/* harmony import */ var _Location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Location */ "./game/lib/plugins/root/visualizer/js/canvasObjects/Location.js");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Util */ "./game/lib/plugins/root/visualizer/js/Util.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




// typehints-only

/**
 * An object on the canvas. all canvasObjects classes inherit from this class.
 */
var CanvasObject =
/*#__PURE__*/
function (_ExtensibleObject) {
  _inherits(CanvasObject, _ExtensibleObject);

  /**
   * @param {GameMap} map - The map this object belongs to.
   */
  function CanvasObject(map) {
    var _this;

    _classCallCheck(this, CanvasObject);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CanvasObject).call(this, map));
    _this.id = -1;
    _this.ownerId = -1;
    _this.hasCountLabel = false; // Whether to include objects of this type when counting overlapping objects for labeling.

    /**
     * This is an internal variable representing the current animation state.
     * It shouldn't be accessed directly, but only through @see getAnimationState.
     *
     * @private
     */

    _this.animationState = 0;
    /**
     * The last time the image's animation state changed. Used for fps limiting.
     * For more precise performance, this should be divisor of {@see FPS}
     */

    _this.animationStateLastChange = new Date().getTime();

    _this.addToObjectsDict();
    /**
        The history dict of this object
        @type {Object<Int, Object<string, *>>}
    */


    _this.history = {};
    /** The last turn we updated the history
     * @type {Number}
     **/

    _this._lastHistoryTurn = -1;
    return _this;
  }
  /**
   * @abstract
   * Returns the location to draw the object in.
   */


  _createClass(CanvasObject, [{
    key: "getDrawLocation",
    value: function getDrawLocation() {
      throw new _Util__WEBPACK_IMPORTED_MODULE_2__["UnimplementedError"]();
    }
    /**
     * Like {@link CanvasObject.getDrawLocation} but accepts a location and calculates the draw location.
     *
     * @param {GameMap} map - The map.
     * @param {Location} location - The location to calculate with.
     * @param {Location} offset - The offset to use for calculating the draw location.
     */

  }, {
    key: "toggleAnimationState",

    /**
     * Go to the next animation state.
     * NOTE: Using the animation state directly is unsafe. It must be done with the safeAnimationState method.
     */
    value: function toggleAnimationState() {
      this.animationState++;
      this.animationStateLastChange = new Date().getTime();
    }
    /**
     * Get the animation state while ensuring it is legal (assuming image is this object's current image).
     *
     * @param {AnimatableImage} image - The image to get the animation state of.
     * @return {number} The updated and legal animation state of the object.
     */

  }, {
    key: "getAnimationState",
    value: function getAnimationState(image) {
      // Just make sure you don't count to infinity when an object has no animations.
      var extState = this.callFirstExtensionsMethodByOrder('getAnimationState', [image]);
      this.animationState %= image && isFinite(image.frames) ? image.frames : 0;
      return extState !== null ? extState : this.animationState;
    }
    /**
     * Add the object to the proper dictionary of all objects.
     */

  }, {
    key: "addToObjectsDict",
    value: function addToObjectsDict() {
      this.replay.allCanvasObjects.push(this);
    }
    /**
     * Returns whether or not this object is in the object's range from the mouse cursor.
     *
     * @return {boolean} Whether or not this object is in the given range from the mouse cursor.
     */

  }, {
    key: "isInMouseRange",
    value: function isInMouseRange() {
      var map = this.map;

      if (!map.mouseOverVis) {
        return false;
      }

      var range = this.getExtensionsProperty('range') || this.range; // If the object has no 'collect locations' or 'range', it can't be collected

      if (!('collectLocations' in this) || range === undefined) {
        return false;
      }

      var mousePos = new _Location__WEBPACK_IMPORTED_MODULE_1__["Location"](map.mouseRow, map.mouseCol);
      var locations = this.collectLocations;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = locations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var loc = _step.value;
          var d = mousePos.distance(loc); // If the distance from the object to one of the collectLocations is smaller than range, collect it

          if (d <= range) {
            return true;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return false;
    }
    /**
     * Returns whether or not this object is under the mouse cursor.
     *
     * @return {boolean} Whether or not this object is under the mouse cursor.
     */

  }, {
    key: "isUnderMouse",
    value: function isUnderMouse() {
      var map = this.map;

      if (!map.mouseOverVis) {
        return false;
      } // If the object has no 'collect locations', it can't be collected


      if (!('collectLocations' in this)) {
        return false;
      }

      var scale = map.scale;
      var mousePos = new _Location__WEBPACK_IMPORTED_MODULE_1__["Location"](map.mouseRow, map.mouseCol);
      var locations = this.collectLocations;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = locations[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var loc = _step2.value;
          var d = mousePos.scale(scale).distance(loc.scale(scale)); // If the distance from the object to one of the collectLocations is smaller than half a square, collect it

          if (d <= scale / 2) {
            return true;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return false;
    }
    /**
     * Abstract method for drawing the object.
     *
     * @abstract
     */

  }, {
    key: "draw",
    value: function draw() {
      throw new _Util__WEBPACK_IMPORTED_MODULE_2__["UnimplementedError"]("unimplemented abstract method in class ".concat(this.objectType));
    }
    /**
     * Abstract method for returning the object's image to display.
     *
     * @return {AnimatableImage} The object's image to display.
     * @abstract
     */

  }, {
    key: "getImage",
    value: function getImage() {
      var imageNames = this.getImageName ? [this.getImageName()] : [];
      imageNames = imageNames.concat(this.callExtensionsMethod('getImageName'));
      imageNames = imageNames.map(function (name) {
        return name instanceof Array ? name : [name];
      }).reduce(function (arr, val) {
        return arr.concat(val);
      }, []) // Reduce the images names to one array
      .filter(function (name) {
        return name !== undefined && name !== null && name !== '';
      }).map(String).map(function (name, index) {
        return index === 0 ? name : name[0].toUpperCase() + name.slice(1);
      }); // Map the array to be lowerCamelCase when joined

      if (imageNames.length === 0) {
        return null;
      }

      var imageName = imageNames.join('');
      return Object(_Util__WEBPACK_IMPORTED_MODULE_2__["getTeamImage"])(this.map, imageName, this.ownerId) || Object(_Util__WEBPACK_IMPORTED_MODULE_2__["throwError"])("Image ".concat(imageName, " of team ").concat(this.ownerId, " not found"));
    }
    /**
     * Returns the offset needed to draw the image.
     *
     * @param {AnimatableImage} image - The image to calculate offset.
     * @return {Location} The offset needed to draw the image.
    */

  }, {
    key: "getOffset",
    value: function getOffset(image) {
      // The default offset is x=0, y=0
      return new _Location__WEBPACK_IMPORTED_MODULE_1__["Location"](0, 0);
    }
    /**
     * Returns the image of this object based on its extensions, or null if they don't define one.
     *
     * @return {AnimatableImage} The image of this object based on its extensions.
     */

  }, {
    key: "getExtensionsImage",
    value: function getExtensionsImage() {
      return this.callFirstExtensionsMethodByOrder('getImage');
    }
    /**
     * Draws all the object's extensions that should be drawn before the base is.
     */

  }, {
    key: "predrawExtensions",
    value: function predrawExtensions() {
      this.callExtensionsMethod('predraw');
    }
    /**
     * Draws all the object's extensions that should be drawn after the base is.
     */

  }, {
    key: "postdrawExtensions",
    value: function postdrawExtensions() {
      this.callExtensionsMethod('postdraw');
    }
    /**
     * Plays audio for all the object's extensions.
     */

  }, {
    key: "playExtensionsAudio",
    value: function playExtensionsAudio() {
      this.callExtensionsMethod('playAudio');
    }
    /**
     * Returns the identifier, which is the key simillar hints are grouped by.
     *
     * @example
     * pirate.getHintIdentifier();
     * // Returns 'Pirate(Player 0):'
     *
     * @return {string} The hint's identifier, the key simillar hints are grouped by.
     */

  }, {
    key: "getHintIdentifier",
    value: function getHintIdentifier() {
      var type = this.objectType;

      if (this.ownerId === -1) {
        return type;
      }

      return "".concat(type, "(Player ").concat(this.ownerId, ")");
    }
    /**
     * Returns this object's hint.
     *
     * @return {string} This object's hint.
     */

  }, {
    key: "getHint",
    value: function getHint() {
      return '';
    }
    /**
     * Dynamically assign properties to the object for the given map state.
     */

  }, {
    key: "calcKeyFrame",
    value: function calcKeyFrame() {}
    /**
     * Returns all the turns the given history type is present.
      * @param {string} type - History type to check.
     * @return {number[]} A list of all turns.
     */

  }, {
    key: "getHistoryTurns",
    value: function getHistoryTurns(type) {
      var _this2 = this;

      return Object.keys(this.history).filter(function (turn) {
        return type in _this2.history[turn];
      });
    }
    /**
     * Returns all the values of the given history type in every turn.
      * @param {string} type - History type to check.
     * @return {Array<*>} A list of all values.
     */

  }, {
    key: "getHistoryValues",
    value: function getHistoryValues(type) {
      var _this3 = this;

      return this.getHistoryTurns(type).map(function (turnHist) {
        return _this3.history[turnHist][type];
      });
    }
    /**
     * Returns the locations around this object is collected. Used in {@see CanvasObject.IsInMouseRange}.
     *
     * @return {Location[]} The locations around this object is collected.
     */

  }, {
    key: "collectLocations",
    get: function get() {
      return [this.location];
    }
  }], [{
    key: "calcDrawLocation",
    value: function calcDrawLocation(map, location) {
      var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new _Location__WEBPACK_IMPORTED_MODULE_1__["Location"](0, 0);
      return CanvasObject.prototype.getDrawLocation.apply({
        map: map,
        location: location,
        getOffset: function getOffset() {
          return offset;
        }
      });
    }
  }]);

  return CanvasObject;
}(_ExtensibleObject__WEBPACK_IMPORTED_MODULE_0__["ExtensibleObject"]);
var objectTypeToClass = new Proxy({}, {
  set: function set() {
    throw new Error('objectTypeToClass is deprecated. You can safely remove this line.');
  }
});

/***/ }),

/***/ "./game/lib/plugins/root/visualizer/js/canvasObjects/ExtensibleObject.js":
/*!*******************************************************************************!*\
  !*** ./game/lib/plugins/root/visualizer/js/canvasObjects/ExtensibleObject.js ***!
  \*******************************************************************************/
/*! exports provided: ExtensibleObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtensibleObject", function() { return ExtensibleObject; });
/* harmony import */ var _src_bin_plugins_entry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~src/bin/plugins.entry */ "./game/lib/visualizer/src/bin/plugins.entry.js");
/* harmony import */ var _PluginManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~PluginManager */ "./game/lib/visualizer/src/bin/PluginManager.json");
var _PluginManager__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ~PluginManager */ "./game/lib/visualizer/src/bin/PluginManager.json", 1);
/* harmony import */ var _Extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Extension */ "./game/lib/plugins/root/visualizer/js/canvasObjects/Extension.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable import/namespace */


// typehints-only

/**
 * An object that can be extended by {@see Extension}
 */

var ExtensibleObject =
/*#__PURE__*/
function () {
  /**
   * @param {GameMap} map - The map this object belongs to.
   */
  function ExtensibleObject(map) {
    _classCallCheck(this, ExtensibleObject);

    this.map = map;
    this.extensions = {};
    this.objectType = this.constructor.name;
    this.createExtensions();
  }
  /**
   * The replay object.
   *
   * @type {Replay}
   * @readonly
   */


  _createClass(ExtensibleObject, [{
    key: "getExtensionsMethod",

    /**
     * Returns all the extension's methods with the given name, in the format [method, extension],
     * sorted by priority.
     *
     * @param {string} method - The method's name.
     * @return {Object.<Function, Object>[]} All the extension's methods with the given name.
     */
    value: function getExtensionsMethod(method) {
      var extensionMethods = [];

      for (var extensionName in this.extensions) {
        var extension = this.extensions[extensionName];

        if (method in extension) {
          extensionMethods.push([extension[method], extension, extension.methodOrder[method]]);
        }
      }

      extensionMethods.sort(function (a, b) {
        return a[2] - b[2];
      }); // Sort by order (lower order first)

      extensionMethods = extensionMethods.map(function (a) {
        return [a[0], a[1]];
      }); // Getting rid of order, as it is not needed anymore

      return extensionMethods;
    }
    /**
     * Calls all the extension's methods with the given name, with the given parameters,
     * and returns their returning values.
     * The methods will be called in order of their methodOrder.
     *
     * @param {string} method - The method's name.
     * @param {Array} parameters - The parameters to call the functions with.
     * @return {Array} The extension's methods return values.
     */

  }, {
    key: "callExtensionsMethod",
    value: function callExtensionsMethod(method) {
      var parameters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var extensionMethods = this.getExtensionsMethod(method);
      var returnValues = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = extensionMethods[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var extensionMethod = _step.value;
          var _method = extensionMethod[0];
          var extension = extensionMethod[1];
          returnValues.push(_method.call.apply(_method, [extension].concat(_toConsumableArray(parameters))));
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return returnValues;
    }
    /**
     * Calls the first extension's method with the given name (according to order),
     * with the given parameters, and returns its returning value.
     *
     * @param {string} method - The method's name.
     * @param {Array} parameters - The parameters to call the functions with.
     * @return {*} The first extension's method return values.
     */

  }, {
    key: "callFirstExtensionsMethodByOrder",
    value: function callFirstExtensionsMethodByOrder(method) {
      var parameters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var extensionMethods = this.getExtensionsMethod(method);
      var returnValue;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = extensionMethods[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var extensionMethod = _step2.value;
          var _method2 = extensionMethod[0];
          var extension = extensionMethod[1];
          returnValue = _method2.call.apply(_method2, [extension].concat(_toConsumableArray(parameters)));

          if (returnValue !== null && returnValue !== undefined) {
            return returnValue;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return null;
    }
    /**
     * Overrides this object's and its extension's attributes with the given object's attributes.
     *
     * @param {Object} obj - Object containing attributes.
     */

  }, {
    key: "overrideAttributes",
    value: function overrideAttributes(obj) {
      for (var attr in obj) {
        var attrBelongsToExtension = false;

        for (var extensionName in this.extensions) {
          var extension = this.extensions[extensionName];

          if (attr in extension) {
            // This attribute belongs to extension
            extension[attr] = obj[attr];
            attrBelongsToExtension = true;
          }
        }

        if (!attrBelongsToExtension) {
          this[attr] = obj[attr];
        }

        if (attr === 'history') {
          this.history = new Proxy(this.history, {
            get: function get(target, key) {
              return Reflect.get.apply(Reflect, arguments) || {};
            }
          });
        }
      }
    }
    /**
     * Creates extensions' objects for this object.
     */

  }, {
    key: "createExtensions",
    value: function createExtensions() {
      if (this.objectType in _PluginManager__WEBPACK_IMPORTED_MODULE_1__["Extensions"]) {
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = _PluginManager__WEBPACK_IMPORTED_MODULE_1__["Extensions"][this.objectType][Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var extension = _step3.value;

            if (!(extension in _src_bin_plugins_entry__WEBPACK_IMPORTED_MODULE_0__)) {
              throw new Error("Extension ".concat(extension, " was given to class ").concat(this.objectType, " but doesn't exist. Make sure it is exported!"));
            }

            var extensionClass = _src_bin_plugins_entry__WEBPACK_IMPORTED_MODULE_0__[extension];

            if (!(extensionClass.prototype instanceof _Extension__WEBPACK_IMPORTED_MODULE_2__["Extension"])) {
              throw new Error("".concat(extension, " was specified as an extension for ").concat(this.objectType, " but is not an extension!"));
            }

            try {
              this.extensions[extension] = new extensionClass(this);
            } catch (error) {
              error.message = 'Error encountered in dynamic object extension generating from replay, from type ' + extension + ':\n' + error.message;
              throw error;
            }
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      }
    }
    /**
     * If the object has the specified proprty, it would be returned. If not, it will return the first property found when iterating the extensions.
     *
     * @param {string} property - The property to get.
     * @return {*} The value of the property, or null if neither the object nor the extensions have the property.
     */

  }, {
    key: "getExtensionsProperty",
    value: function getExtensionsProperty(property) {
      if (property in this) {
        return this[property];
      }

      var _arr = Object.values(this.extensions);

      for (var _i = 0; _i < _arr.length; _i++) {
        var extension = _arr[_i];

        if (property in extension) {
          return extension[property];
        }
      }

      return null;
    }
  }, {
    key: "replay",
    get: function get() {
      return this.map.state.replay;
    }
  }]);

  return ExtensibleObject;
}();

/***/ }),

/***/ "./game/lib/plugins/root/visualizer/js/canvasObjects/Extension.js":
/*!************************************************************************!*\
  !*** ./game/lib/plugins/root/visualizer/js/canvasObjects/Extension.js ***!
  \************************************************************************/
/*! exports provided: Extension, extensionTypeToClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Extension", function() { return Extension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extensionTypeToClass", function() { return extensionTypeToClass; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// typehints-only
// typehints-only
// typehints-only

/**
 * An object that extends another object
 */
var Extension =
/*#__PURE__*/
function () {
  /**
   * @param {ExtensibleObject} base - The object that is being extended.
   */
  function Extension(base) {
    _classCallCheck(this, Extension);

    this.objectType = this.constructor.name;
    this.base = base;
    /**
     * Dictionary from a method name to its order.
     * Methods with a lower order are called before methods with the same name with a higher order.
     * @type {Object.<string, number>}
     */

    this.methodOrder = {};
  }
  /**
   * The Map Object.
   *
   * @type {GameMap}
   * @readonly
   */


  _createClass(Extension, [{
    key: "getMetaObjects",

    /** @deprecated */
    value: function getMetaObjects() {
      throw new Error('getMetaObjects is deprecated, use createMetaObjects instead.');
    }
    /**
     * The type of the base element.
     *
     * @type {string}
     * @readonly
     */

  }, {
    key: "assignMethodOrder",

    /**
     * Assign order to a method.
     * Methods with a lower order are called before methods with the same name with a higher order.
     *
     * @param {string} method - The given method.
     * @param {number} order - The order.
     */
    value: function assignMethodOrder(method, order) {
      this.methodOrder[method] = order;
    }
  }, {
    key: "map",
    get: function get() {
      return this.base.map;
    }
  }, {
    key: "baseType",
    get: function get() {
      return this.base.objectType;
    }
    /**
     * The Replay Object.
     *
     * @type {Replay}
     * @readonly
     * @memberof Extension
     */

  }, {
    key: "replay",
    get: function get() {
      return this.base.replay;
    }
  }]);

  return Extension;
}();
var extensionTypeToClass = new Proxy({}, {
  set: function set() {
    throw new Error('extensionTypeToClass is deprecated. You can safely remove this line.');
  }
});

/***/ }),

/***/ "./game/lib/plugins/root/visualizer/js/canvasObjects/GameObject.js":
/*!*************************************************************************!*\
  !*** ./game/lib/plugins/root/visualizer/js/canvasObjects/GameObject.js ***!
  \*************************************************************************/
/*! exports provided: GameObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameObject", function() { return GameObject; });
/* harmony import */ var _CanvasObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CanvasObject */ "./game/lib/plugins/root/visualizer/js/canvasObjects/CanvasObject.js");
/* harmony import */ var _plugins_map_base_visualizer_js_Range__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~plugins/map/base/visualizer/js/Range */ "./game/lib/plugins/map/base/visualizer/js/Range.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



/**
 * An object that can have meta objects.
 */

var GameObject =
/*#__PURE__*/
function (_CanvasObject) {
  _inherits(GameObject, _CanvasObject);

  function GameObject() {
    _classCallCheck(this, GameObject);

    return _possibleConstructorReturn(this, _getPrototypeOf(GameObject).apply(this, arguments));
  }

  _createClass(GameObject, [{
    key: "createMetaObjects",

    /**
     * Creates all the object's metaObjects.
     */
    value: function createMetaObjects() {
      var _this = this;

      if (this.range !== undefined) {
        new _plugins_map_base_visualizer_js_Range__WEBPACK_IMPORTED_MODULE_1__["Range"](this);
      }

      Object.keys(this.extensions).map(function (ext) {
        return _this.extensions[ext];
      }).filter(function (ext) {
        return ext.range !== undefined;
      }).forEach(function (ext) {
        return new _plugins_map_base_visualizer_js_Range__WEBPACK_IMPORTED_MODULE_1__["Range"](ext);
      });
    }
    /** @deprecated */

  }, {
    key: "getMetaObjects",
    value: function getMetaObjects() {
      throw new Error('getMetaObjects is deprecated, use createMetaObjects instead.');
    }
    /**
     * Creates all the metaObjects of this object's extensions.
     */

  }, {
    key: "createExtensionsMetaObjects",
    value: function createExtensionsMetaObjects() {
      this.callExtensionsMethod('createMetaObjects');
    }
  }]);

  return GameObject;
}(_CanvasObject__WEBPACK_IMPORTED_MODULE_0__["CanvasObject"]);

/***/ }),

/***/ "./game/lib/plugins/root/visualizer/js/canvasObjects/Location.js":
/*!***********************************************************************!*\
  !*** ./game/lib/plugins/root/visualizer/js/canvasObjects/Location.js ***!
  \***********************************************************************/
/*! exports provided: Location */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Location", function() { return Location; });
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Util */ "./game/lib/plugins/root/visualizer/js/Util.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/**
 * This class represents a location on the map. Locations are defined by a row and a col.
 * This class also includes many functions for manipulating locations.
 */

var Location =
/*#__PURE__*/
function () {
  /**
   * @param {number | number[]} row - The row of the location, or a length 2 array of numbers [row, col].
   * @param {number} col - The col of the location.
   * */
  function Location(row, col) {
    _classCallCheck(this, Location);

    if (row.constructor === Array) {
      //If the first argument is given as an array
      if (row.length === 2) {
        this.row = row[0];
        this.col = row[1];
      } else {
        throw Error('constructor of Location given an array of the wrong size. Should be 2.');
      }
    } else {
      this.row = row;
      this.col = col;
    }
  }
  /**
   * Returns the location in string form.
   *
   * @return {string} The location in string form.
   * */


  _createClass(Location, [{
    key: "toString",
    value: function toString() {
      return '(' + this.row + ', ' + this.col + ')';
    }
    /**
     * Converts the location into an array of two numbers for JSON.
     *
     * @return {number[]} The location in array form.
     */

  }, {
    key: "toArray",
    value: function toArray() {
      return [this.row, this.col];
    }
    /**
     * Adds term-by-term to another location.
     *
     * @param {Location} other - The other location.
     * @return {Location} The addition of the locations.
     */

  }, {
    key: "add",
    value: function add(other) {
      return new Location(this.row + other.row, this.col + other.col);
    }
    /**
     * Subtract term-by-term from another location.
     *
     * @param {Location} other - The other location.
     * @return {Location} The subtraction of the locations.
     */

  }, {
    key: "sub",
    value: function sub(other) {
      return new Location(this.row - other.row, this.col - other.col);
    }
    /**
     * Compares between two locations.
     *
     * @param {Location} other - The location to compare with.
     * @return {boolean} Whether the locations are equal or not.
     */

  }, {
    key: "eq",
    value: function eq(other) {
      return this.row === other.row && this.col === other.col;
    }
    /**
     * Scalar multiplication.
     *
     * @param {number} scalar - The scalar to multply by.
     * @return {Location} The scaled location.
     */

  }, {
    key: "scale",
    value: function scale(scalar) {
      return new Location(scalar * this.row, scalar * this.col);
    }
    /**
     * Floors both coordinates.
     *
     * @return {Location} A new location with that floored coordinates.
     */

  }, {
    key: "floor",
    value: function floor() {
      return new Location(Math.floor(this.row), Math.floor(this.col));
    }
    /**
     * Rounds both coordinates.
     *
     * @return {Location} A new location with the rounded coordinates.
     */

  }, {
    key: "round",
    value: function round() {
      return new Location(Math.round(this.row), Math.round(this.col));
    }
    /**
     * @abstract
     * Returns the distance between this and another Location.
     *
     * @param {Location} other - The other location.
     * @return {number} The distance between the locations.
     */

  }, {
    key: "distance",
    value: function distance(other) {
      throw new _Util__WEBPACK_IMPORTED_MODULE_0__["UnimplementedError"]();
    }
    /**
     * Returns the linear interpolation of two locations at a certain 0<=time<=1.
     *
     * @param {Location} loc1 - The first location.
     * @param {Location} loc2 - The second location.
     * @param {number} time - The time to calculate the linear interpolation of, between 0 and 1.
     * @return {Location} The interpolation.
     */

  }], [{
    key: "linearInterpolation",
    value: function linearInterpolation(loc1, loc2, time) {
      return loc1.scale(1 - time).add(loc2.scale(time));
    }
  }]);

  return Location;
}();

/***/ }),

/***/ "./game/lib/plugins/root/visualizer/js/canvasObjects/livingObjects/LivingObject.js":
/*!*****************************************************************************************!*\
  !*** ./game/lib/plugins/root/visualizer/js/canvasObjects/livingObjects/LivingObject.js ***!
  \*****************************************************************************************/
/*! exports provided: LivingObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LivingObject", function() { return LivingObject; });
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GameObject */ "./game/lib/plugins/root/visualizer/js/canvasObjects/GameObject.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


// typehints-only

/**
 * An object on the canvas that 'lives' and 'dies' - has a start and end turn.
 */
var LivingObject =
/*#__PURE__*/
function (_GameObject) {
  _inherits(LivingObject, _GameObject);

  /**
   * @param {GameMap} map - The map this object belongs to.
   */
  function LivingObject(map) {
    var _this;

    _classCallCheck(this, LivingObject);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LivingObject).call(this, map));
    _this.startTurn = 0;
    _this.endTurn = _this.replay.turns + 1;
    _this.endLocation = null;
    _this.reasonOfDeath = '';
    return _this;
  }
  /**
   * Return whether or not the object is alive in a given time.
   *
   * @param {number} time - The time to check.
   * @return {boolean} Whether or not the object is alive.
   */


  _createClass(LivingObject, [{
    key: "isAlive",
    value: function isAlive(time) {
      return this.startTurn <= time && time < this.endTurn && this.isAliveExt(time) || this.forceAliveExt();
    }
    /**
     * Return whether to force the object to be alive at the given turn.
     *
     * @param {number} time - The time to force.
     * @return {boolean} Whether or not the object is forced to be alive.
     */

  }, {
    key: "forceAliveExt",
    value: function forceAliveExt(time) {
      return this.callExtensionsMethod('forceAlive', [time]).reduce(function (a, b) {
        return a || b;
      }, false);
    }
    /**
     * Return whether or not any of the object's extensions is alive in a given time.
     *
     * @param {number} time - The time to check.
     * @return {boolean} Whether or not any of the object's extensions is alive.
     */

  }, {
    key: "isAliveExt",
    value: function isAliveExt(time) {
      return this.callExtensionsMethod('isAlive', [time]).reduce(function (a, b) {
        return a && b;
      }, true);
    }
  }]);

  return LivingObject;
}(_GameObject__WEBPACK_IMPORTED_MODULE_0__["GameObject"]);

/***/ }),

/***/ "./game/lib/plugins/root/visualizer/js/canvasObjects/metaObjects/Glow.js":
/*!*******************************************************************************!*\
  !*** ./game/lib/plugins/root/visualizer/js/canvasObjects/metaObjects/Glow.js ***!
  \*******************************************************************************/
/*! exports provided: Glow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Glow", function() { return Glow; });
/* harmony import */ var _MetaObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MetaObject */ "./game/lib/plugins/root/visualizer/js/canvasObjects/metaObjects/MetaObject.js");
/* harmony import */ var _CanvasObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CanvasObject */ "./game/lib/plugins/root/visualizer/js/canvasObjects/CanvasObject.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



// typehints-only

/**
 * This class represents the glow around certain objects.
 */
var Glow =
/*#__PURE__*/
function (_MetaObject) {
  _inherits(Glow, _MetaObject);

  function Glow() {
    _classCallCheck(this, Glow);

    return _possibleConstructorReturn(this, _getPrototypeOf(Glow).apply(this, arguments));
  }

  _createClass(Glow, [{
    key: "getImage",

    /**
     * Return the glow's image to display.
     *
     * @return {AnimatableImage} The image to display of the glow.
     */
    value: function getImage() {
      return this.map.images.glow;
    }
    /**
     * Whether or not the object is alive in a given turn.
     *
     * @param {number} turn - The turn.
     * @return {boolean} - Is the object alive.
     */

  }, {
    key: "isAlive",
    value: function isAlive(turn) {
      var creator = this.creator;
      var alive = !('isAlive' in creator) || creator.isAlive(turn);
      var highlightedFromMenu = this.map.state.highlightedPirate[1] !== null && this.map.state.highlightedPirate[1].uniqueId === creator.uniqueId;
      return alive && (highlightedFromMenu || creator.isInMouseRange());
    }
    /**
     * Draws the object on the canvas.
     */

  }, {
    key: "draw",
    value: function draw() {
      var SIZE_MULT = 5.4;
      var size = this.creator.size * SIZE_MULT,
          image = this.getImage(),
          drawLocation = this.getDrawLocation();
      this.map.drawFromFrame(image, this.getAnimationState(image), drawLocation, size, size);
    }
  }]);

  return Glow;
}(_MetaObject__WEBPACK_IMPORTED_MODULE_0__["MetaObject"]);

/***/ }),

/***/ "./game/lib/plugins/root/visualizer/js/canvasObjects/metaObjects/Label.js":
/*!********************************************************************************!*\
  !*** ./game/lib/plugins/root/visualizer/js/canvasObjects/metaObjects/Label.js ***!
  \********************************************************************************/
/*! exports provided: Label */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony import */ var _MetaObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MetaObject */ "./game/lib/plugins/root/visualizer/js/canvasObjects/metaObjects/MetaObject.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


// typehints-only

/**
 * @typedef {Object} CountLabelGroup
 * @property {Location} location
 * @property {CanvasObject[]} objects
 */

/**
 * This class represents the label. A small text appearing above objects.
 *
 * @class Label
 * @extends {MetaObject}
 */
var Label =
/*#__PURE__*/
function (_MetaObject) {
  _inherits(Label, _MetaObject);

  function Label() {
    _classCallCheck(this, Label);

    return _possibleConstructorReturn(this, _getPrototypeOf(Label).apply(this, arguments));
  }

  _createClass(Label, [{
    key: "isAlive",

    /**
     * Whether or not the object is alive in a given turn.
     *
     * @param {number} turn - The turn.
     * @return {boolean} - Is the object alive.
     */
    value: function isAlive(turn) {
      return _get(_getPrototypeOf(Label.prototype), "isAlive", this).call(this, turn) && this.text;
    }
    /**
     * Draws the object on the canvas.
     */

  }, {
    key: "draw",
    value: function draw() {
      var map = this.map;
      var FONT_SIZE = Math.ceil(Math.max(map.drawScale, 10) / 1.25);
      var LINE_WIDTH = 0.2 * FONT_SIZE;
      var FILL_COLOR = '#000000';
      var LINE_COLOR = '#ffffff';
      var drawLocation = this.getDrawLocation();
      map.ctx.save();
      map.ctx.font = 'bold ' + FONT_SIZE + 'px Arial';
      map.ctx.textBaseline = 'middle';
      map.ctx.textAlign = 'center';
      map.ctx.fillStyle = FILL_COLOR;
      map.ctx.strokeStyle = LINE_COLOR;
      map.ctx.lineWidth = LINE_WIDTH;
      map.ctx.strokeText(this.text, drawLocation.col, drawLocation.row);
      map.ctx.fillText(this.text, drawLocation.col, drawLocation.row);
      map.ctx.restore();
    }
    /**
     * Return whether or not the object are in the nearly same location.
     *
     * @static
     * @param {GameMap} { - Scale }.
     * @param {Location} location1 - The first location.
     * @param {Location} location2 - The second location.
     * @return {boolean} - Are those location are really close.
     */

  }, {
    key: "config",

    /**
     * The config object.
     *
     * @type {Configuration}
     * @readonly
     */
    get: function get() {
      return this.map.state.config.label;
    }
    /**
     * The text to be displayed.
     *
     * @type {string}
     * @abstract
     * @readonly
     */

  }, {
    key: "text",
    get: function get() {
      switch (this.config.stringValue) {
        case 'team':
          var ALPHA_CHAR_CODE = 945;
          return String.fromCharCode(ALPHA_CHAR_CODE + this.creator.ownerId);

        case 'game-id':
          var id = this.creator.id;
          return id !== -1 ? id.toString() : '';

        case 'count':
          var count = this.group.objects.length;
          return count >= 2 ? count.toString() : '';

        case 'off':
          break;

        default:
          throw new Error("unimplemented label settings: ".concat(this.config.stringValue));
      }

      return '';
    }
    /**
     *
     *
     * @type {CountLabelGroup}
     * @readonly
     */

  }, {
    key: "group",
    get: function get() {
      var _this = this;

      var map = this.map,
          LABEL_TYPE = this.config.stringValue;

      if (LABEL_TYPE === 'count') {
        map.countLabelGroups = Label.calcCountLabelGroups(map);
        var group = map.countLabelGroups.find(function (obj) {
          return Label.isInNearlyTheSameLocation(map, _this.creator.location, obj.location);
        });

        if (group) {
          return group;
        }

        group = {
          location: this.creator.location,
          objects: [this.creator]
        };
        map.countLabelGroups.push(group);
        return group;
      }

      throw new Error("unimplemented label settings: ".concat(LABEL_TYPE));
    }
    /**
     * Location.
     *
     * @type {Location}
     * @readonly
     * @memberof Label
     */

  }, {
    key: "location",
    get: function get() {
      switch (this.config.stringValue) {
        case 'count':
          return this.group.location;

        default:
          return _get(_getPrototypeOf(Label.prototype), "location", this);
      }
    }
  }], [{
    key: "isInNearlyTheSameLocation",
    value: function isInNearlyTheSameLocation(_ref, location1, location2) {
      var scale = _ref.scale;
      var radius = scale * Label.SAME_LOCATION_FACTOR;
      return location1.distance(location2) <= radius;
    }
    /**
     * Distributes the objects with count labels to different groups, each group has one label.
     *
     * @param {GameMap} map - The game map.
     * @return {CountLabelGroup[]} Groups of objects which are within a radius, and are labeled together.
     */

  }, {
    key: "calcCountLabelGroups",
    value: function calcCountLabelGroups(map) {
      var groups = [];
      var objects = map.canvasObjects.filter(function (obj) {
        return obj.hasCountLabel;
      });
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = objects[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var object = _step.value;
          var isDone = false;

          for (var _i = 0; _i < groups.length; _i++) {
            var group = groups[_i];

            if (this.isInNearlyTheSameLocation(map, group.location, object.location)) {
              // If this object is in the radius of a group
              // Add it to that group
              group.objects.push(object); // Calculate the average location of the objects in the group after adding the new one
              // This uses the formula newX = oldX * (n-1)/n + objX/n for weighted average

              var factor = 1 / group.objects.length;
              var groupFactor = factor * (group.objects.length - 1); // This wouldn't cause an exception because if the group exists it has already 1 object and another one we just added,
              // Therefore length >= 2

              /**
               * @type: Location
               */

              group.location = group.location.scale(groupFactor).add(object.location.scale(factor)).round();
              isDone = true;
              break;
            }
          }

          if (!isDone) {
            // If not in range of any group, add to a new group
            groups.push({
              location: object.location,
              objects: [object]
            });
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return groups;
    }
  }]);

  return Label;
}(_MetaObject__WEBPACK_IMPORTED_MODULE_0__["MetaObject"]);
Label.SAME_LOCATION_FACTOR = 0;

/***/ }),

/***/ "./game/lib/plugins/root/visualizer/js/canvasObjects/metaObjects/MetaObject.js":
/*!*************************************************************************************!*\
  !*** ./game/lib/plugins/root/visualizer/js/canvasObjects/metaObjects/MetaObject.js ***!
  \*************************************************************************************/
/*! exports provided: MetaObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaObject", function() { return MetaObject; });
/* harmony import */ var _Extension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Extension */ "./game/lib/plugins/root/visualizer/js/canvasObjects/Extension.js");
/* harmony import */ var _ExtensibleObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ExtensibleObject */ "./game/lib/plugins/root/visualizer/js/canvasObjects/ExtensibleObject.js");
/* harmony import */ var _CanvasObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CanvasObject */ "./game/lib/plugins/root/visualizer/js/canvasObjects/CanvasObject.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




/**
 * A MetaObject is an object drawn on the canvas, that has no independent existence - all data regarding this object
 * is extracted from another object.
 * In contrast to regular canvasObjects, metaObjects are created when needed and not when parsing the replay data.
 */

var MetaObject =
/*#__PURE__*/
function (_CanvasObject) {
  _inherits(MetaObject, _CanvasObject);

  /**
   * @param {CanvasObject} creator - The object that created this object.
   */
  function MetaObject(creator) {
    var _this;

    _classCallCheck(this, MetaObject);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MetaObject).call(this, creator.map));
    _this.creator = MetaObject.getCreatorProxy(creator);
    return _this;
  }
  /**
   * The location of the object.
   *
   * @type {Location}
   * @readonly
   */


  _createClass(MetaObject, [{
    key: "isAlive",

    /**
     * Whether or not the object is alive in a given turn.
     *
     * @param {number} turn - The turn.
     * @return {boolean} - Is the object alive.
     */
    value: function isAlive(turn) {
      return this.creator.isAlive(turn);
    }
    /**
     * Return a new proxy-merged object of both extension and base (if {creator} is Extension).
     *
     * @static
     * @param {ExtensibleObject|Extension} creator - The object that created the meta.
     * @return {ExtensibleObject} Merged object.
     * @throws {TypeError} invalid type of {creator}
     */

  }, {
    key: "location",
    get: function get() {
      if ('calcLocation' in this.creator) {
        var loc = this.creator.calcLocation();

        if (loc !== null) {
          return loc;
        }
      }

      return this.creator.location;
    }
  }], [{
    key: "getCreatorProxy",
    value: function getCreatorProxy(creator) {
      if (creator instanceof _ExtensibleObject__WEBPACK_IMPORTED_MODULE_1__["ExtensibleObject"]) {
        return creator;
      } else if (creator instanceof _Extension__WEBPACK_IMPORTED_MODULE_0__["Extension"]) {
        return new Proxy(creator, {
          get: function get(obj, prop) {
            return obj[prop] || obj.base[prop];
          },
          has: function has(obj, prop) {
            return prop in obj || prop in obj.base;
          }
        });
      }

      throw new TypeError('Only an {ExtensibleObject} or an {Extension} can be given as a parameter to this function');
    }
  }]);

  return MetaObject;
}(_CanvasObject__WEBPACK_IMPORTED_MODULE_2__["CanvasObject"]);

/***/ }),

/***/ "./game/lib/plugins/root/visualizer/js/canvasObjects/staticObjects/ImageObject.js":
/*!****************************************************************************************!*\
  !*** ./game/lib/plugins/root/visualizer/js/canvasObjects/staticObjects/ImageObject.js ***!
  \****************************************************************************************/
/*! exports provided: ImageObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageObject", function() { return ImageObject; });
/* harmony import */ var _StaticObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StaticObject */ "./game/lib/plugins/root/visualizer/js/canvasObjects/staticObjects/StaticObject.js");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Util */ "./game/lib/plugins/root/visualizer/js/Util.js");
/* harmony import */ var _CanvasObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CanvasObject */ "./game/lib/plugins/root/visualizer/js/canvasObjects/CanvasObject.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




// typehints-only

/**
 * This class represents an Image object on the canvas
 */
var ImageObject =
/*#__PURE__*/
function (_StaticObject) {
  _inherits(ImageObject, _StaticObject);

  /**
   * @param {GameMap} map - The map this object belongs to.
   * @param {Object} obj - An object parsed from the replay, containing all this class' attributes.
   */
  function ImageObject(map, obj) {
    var _this;

    _classCallCheck(this, ImageObject);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ImageObject).call(this, map));

    _this.overrideAttributes(obj);

    return _this;
  }
  /**
   * Returns the Image's image to display.
   *
   * @return {AnimatableImage} The pirate's image to display.
   */


  _createClass(ImageObject, [{
    key: "getImage",
    value: function getImage() {
      return Object(_Util__WEBPACK_IMPORTED_MODULE_1__["getTeamImage"])(this.map, this.name, -1);
    }
    /**
     * Draws the object on the canvas.
     */

  }, {
    key: "draw",
    value: function draw() {
      this.predrawExtensions(); // Find the correct image to display

      var image = this.getImage();
      var drawLocation = this.getDrawLocation();
      var frame = this.getAnimationState(image);
      var width = image.frameWidth * this.width;
      var height = image.frameHeight * this.height;
      this.map.drawFromFrame(image, frame, drawLocation, width, height);
      this.postdrawExtensions();
    }
  }]);

  return ImageObject;
}(_StaticObject__WEBPACK_IMPORTED_MODULE_0__["StaticObject"]);

/***/ }),

/***/ "./game/lib/plugins/root/visualizer/js/canvasObjects/staticObjects/StaticObject.js":
/*!*****************************************************************************************!*\
  !*** ./game/lib/plugins/root/visualizer/js/canvasObjects/staticObjects/StaticObject.js ***!
  \*****************************************************************************************/
/*! exports provided: StaticObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticObject", function() { return StaticObject; });
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GameObject */ "./game/lib/plugins/root/visualizer/js/canvasObjects/GameObject.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


// typehints-only

/**
 * An object on the canvas that has a fixed location and is visible for the entire game.
 */
var StaticObject =
/*#__PURE__*/
function (_GameObject) {
  _inherits(StaticObject, _GameObject);

  /**
   * @param {GameMap} map - The map this object belongs to.
   */
  function StaticObject(map) {
    var _this;

    _classCallCheck(this, StaticObject);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StaticObject).call(this, map));
    _this.location = [-1, -1];
    return _this;
  }
  /**
   * Returns the locations around this object is collected. Used in {@see CanvasObject.IsInMouseRange}.
   *
   * @return {number[][]} The locations around this object is collected.
   */


  _createClass(StaticObject, [{
    key: "collectLocations",
    get: function get() {
      return [this.location];
    }
  }]);

  return StaticObject;
}(_GameObject__WEBPACK_IMPORTED_MODULE_0__["GameObject"]);

/***/ }),

/***/ "./game/lib/plugins/root/visualizer/js/canvasObjects/visualizerInternalObjects/Board.js":
/*!**********************************************************************************************!*\
  !*** ./game/lib/plugins/root/visualizer/js/canvasObjects/visualizerInternalObjects/Board.js ***!
  \**********************************************************************************************/
/*! exports provided: Board */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Board", function() { return Board; });
/* harmony import */ var _VisualizerInternalObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VisualizerInternalObject */ "./game/lib/plugins/root/visualizer/js/canvasObjects/visualizerInternalObjects/VisualizerInternalObject.js");
/* harmony import */ var _CanvasObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CanvasObject */ "./game/lib/plugins/root/visualizer/js/canvasObjects/CanvasObject.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



// typehints-only

/**
 * The border around the map.
 */
var Board =
/*#__PURE__*/
function (_VisualizerInternalOb) {
  _inherits(Board, _VisualizerInternalOb);

  function Board() {
    _classCallCheck(this, Board);

    return _possibleConstructorReturn(this, _getPrototypeOf(Board).apply(this, arguments));
  }

  _createClass(Board, [{
    key: "draw",

    /**
     * Draws the object on the canvas.
     */
    value: function draw() {
      var map = this.map;
      var LINE_COLOR = 'rgba(155,155,155,0.5)';
      var LINE_WIDTH = 2.5;
      map.ctx.save();
      map.ctx.beginPath();
      map.ctx.strokeStyle = LINE_COLOR;
      map.ctx.lineWidth = LINE_WIDTH;
      map.ctx.rect(0, 0, map.w - 1, map.h - 1);
      map.ctx.closePath();
      map.ctx.stroke();
      map.ctx.restore();
    }
  }]);

  return Board;
}(_VisualizerInternalObject__WEBPACK_IMPORTED_MODULE_0__["VisualizerInternalObject"]);

/***/ }),

/***/ "./game/lib/plugins/root/visualizer/js/canvasObjects/visualizerInternalObjects/Hint.js":
/*!*********************************************************************************************!*\
  !*** ./game/lib/plugins/root/visualizer/js/canvasObjects/visualizerInternalObjects/Hint.js ***!
  \*********************************************************************************************/
/*! exports provided: Hint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hint", function() { return Hint; });
/* harmony import */ var _VisualizerInternalObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VisualizerInternalObject */ "./game/lib/plugins/root/visualizer/js/canvasObjects/visualizerInternalObjects/VisualizerInternalObject.js");
/* harmony import */ var _CanvasObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CanvasObject */ "./game/lib/plugins/root/visualizer/js/canvasObjects/CanvasObject.js");
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../GameObject */ "./game/lib/plugins/root/visualizer/js/canvasObjects/GameObject.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



// typehints-only

/**
 * This class represents the hint. All the hints can be seen in the little black square in the game.
 */

var Hint =
/*#__PURE__*/
function (_VisualizerInternalOb) {
  _inherits(Hint, _VisualizerInternalOb);

  /**
   * @param {GameMap} map - The map.
   */
  function Hint(map) {
    var _this;

    _classCallCheck(this, Hint);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Hint).call(this, map));

    _this.initHint();

    return _this;
  }
  /**
   * Initialize the event handlers for the hint.
   */


  _createClass(Hint, [{
    key: "initHint",
    value: function initHint() {
      var mousePosition;
      var offset = [0, 0];
      var isDragging = false; // The hint div is contained inside a resizable element.

      var hintDiv = document.getElementById('hint');
      var hintContainer = hintDiv.parentElement;

      if ('hint' in localStorage) {
        var hintLoc = JSON.parse(localStorage.hint);
        Object.assign(hintContainer.style, hintLoc);
      }

      var gameContainer = hintContainer.parentElement; // The game where the hint is allowed to be dragged

      /**
       * If the hint is clicked, start dragging
       */

      hintDiv.addEventListener('mousedown', function (event) {
        event.preventDefault();
        isDragging = true; // Signal that the dragging started.

        offset = [hintContainer.offsetLeft - event.clientX, hintContainer.offsetTop - event.clientY];
      });
      /**
       * The two following events are added to the document instead of the hintDiv is to make sure that the hint movement isn't laggy.
       */

      document.addEventListener('mouseup', function () {
        // When the mouse is up, signal that the dragging has stopped.
        isDragging = false;
        var _hintContainer$style = hintContainer.style,
            left = _hintContainer$style.left,
            top = _hintContainer$style.top,
            width = _hintContainer$style.width,
            height = _hintContainer$style.height;
        localStorage.hint = JSON.stringify({
          left: left,
          top: top,
          width: width,
          height: height
        });
      });
      document.addEventListener('mousemove', function (event) {
        if (isDragging) {
          event.preventDefault(); // These are relative to the parent div.

          var newLeft = event.clientX + offset[0];
          var newTop = event.clientY + offset[1];
          var boundingRect = gameContainer.getBoundingClientRect(); // Make sure the new location is inside the map

          if (newTop < 0) {
            newTop = 0;
          } else if (newTop >= boundingRect.height - hintContainer.clientHeight) {
            newTop = boundingRect.height - hintContainer.clientHeight - 1;
          }

          if (newLeft < 0) {
            newLeft = 0;
          } else if (newLeft >= boundingRect.width - hintContainer.clientWidth) {
            newLeft = boundingRect.width - hintContainer.clientWidth - 1;
          }

          hintContainer.style.left = newLeft + 'px';
          hintContainer.style.top = newTop + 'px';
        }
      });
      this.hintDiv = hintDiv;
      this.hintContainer = hintContainer;
    }
    /**
     * Draws the object on the canvas.
     */

  }, {
    key: "draw",
    value: function draw() {
      var map = this.map;
      var hintTypeConfig = map.state.config.showHint;
      var hintContentConfig = map.state.config.hintContent;

      if (hintTypeConfig.is('on')) {
        this.hintContainer.style.display = 'block';
      } else {
        this.hintContainer.style.display = 'none';
      }

      this.hintDiv.innerText = ''; // Draw hint text

      if (map.mouseOverVis && !hintTypeConfig.is('off')) {
        // Collect the hinted objects into hintByObjectType
        var hintByObjectType = {};

        if (hintContentConfig.is('all')) {
          hintByObjectType = Hint.getHintText(map);
        } // Prepare the lines of the hint


        var hintLines = []; // The first line is the map coordinates

        var text = '(' + map.mouseRow + ',' + map.mouseCol + ')';
        hintLines.push(text);

        for (var key in hintByObjectType) {
          text = key + ': ' + hintByObjectType[key];

          if (text.endsWith(', ')) {
            text = text.substring(0, text.length - 2);
          }

          hintLines.push(text);
        }

        this.hintDiv.innerText = hintLines.join('\n');
        this.hintDiv.style.fontSize = "".concat(Hint.calculateFontSize(map), "px");
      }
    }
    /**
    * Calculates the desired hint font size using the map scale and the text size chosen in the menu.
    *
    * @param {GameMap} map - The canvas map.
    * @return {number} The desired font size.
    */

  }], [{
    key: "calculateFontSize",
    value: function calculateFontSize(map) {
      if (window === undefined || window.innerHeight === undefined) {
        return 1;
      }

      var fontMult;

      if (map.state.config.textSize.is('small')) {
        fontMult = 0.7;
      } else if (map.state.config.textSize.is('normal')) {
        fontMult = 1.1;
      } else if (map.state.config.textSize.is('large')) {
        fontMult = 1.7;
      }

      return fontMult * window.innerHeight / 50;
    }
    /**
     * Returns a dictionary from identifier (usually an object type) to the hint text for the given map state.
     *
     * @param {GameMap} map - The canvas map.
     * @return {Object.<string, string>} A dictionary from identifier to the hint text.
     */

  }, {
    key: "getHintText",
    value: function getHintText(map) {
      var hintByObjectType = {};
      var hintList = {};
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = map.canvasObjects[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var object = _step.value;

          if (object instanceof _GameObject__WEBPACK_IMPORTED_MODULE_2__["GameObject"] && object.isInMouseRange()) {
            var objectHint = object.getHint();
            var extensionHints = object.callExtensionsMethod('getHint', []);
            objectHint = objectHint.concat(extensionHints.join(','));

            var _identifier = object.getHintIdentifier();

            if (hintList[_identifier] === undefined) {
              hintList[_identifier] = [];
            }

            hintList[_identifier].push(objectHint);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      for (var identifier in hintList) {
        hintByObjectType[identifier] = hintList[identifier].join(',\n');
      }

      return hintByObjectType;
    }
  }]);

  return Hint;
}(_VisualizerInternalObject__WEBPACK_IMPORTED_MODULE_0__["VisualizerInternalObject"]);

/***/ }),

/***/ "./game/lib/plugins/root/visualizer/js/canvasObjects/visualizerInternalObjects/VisualizerInternalObject.js":
/*!*****************************************************************************************************************!*\
  !*** ./game/lib/plugins/root/visualizer/js/canvasObjects/visualizerInternalObjects/VisualizerInternalObject.js ***!
  \*****************************************************************************************************************/
/*! exports provided: VisualizerInternalObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualizerInternalObject", function() { return VisualizerInternalObject; });
/* harmony import */ var _CanvasObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CanvasObject */ "./game/lib/plugins/root/visualizer/js/canvasObjects/CanvasObject.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/**
 * An object internal to the visualizer.
 */

var VisualizerInternalObject =
/*#__PURE__*/
function (_CanvasObject) {
  _inherits(VisualizerInternalObject, _CanvasObject);

  function VisualizerInternalObject() {
    _classCallCheck(this, VisualizerInternalObject);

    return _possibleConstructorReturn(this, _getPrototypeOf(VisualizerInternalObject).apply(this, arguments));
  }

  _createClass(VisualizerInternalObject, [{
    key: "addToObjectsDict",

    /**
     * Add the object to the proper dictionary of all objects.
     */
    value: function addToObjectsDict() {
      this.map.visualizerInternalObjects.push(this);
    }
  }]);

  return VisualizerInternalObject;
}(_CanvasObject__WEBPACK_IMPORTED_MODULE_0__["CanvasObject"]);

/***/ }),

/***/ "./game/lib/plugins/theme/knightz/visualizer/js/FadeAnimation.js":
/*!***********************************************************************!*\
  !*** ./game/lib/plugins/theme/knightz/visualizer/js/FadeAnimation.js ***!
  \***********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _root_Visualizer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~root/Visualizer */ "./game/lib/plugins/root/visualizer/js/Visualizer.js");


_root_Visualizer__WEBPACK_IMPORTED_MODULE_0__["Visualizer"].prototype.getAnimationPromise = function () {
  var _this = this;

  return new Promise(function (resolve) {
    if (_this.state.config.showAmulet.is('on')) {
      setTimeout(resolve, 4900);
    } else {
      resolve();
    }
  });
};

_root_Visualizer__WEBPACK_IMPORTED_MODULE_0__["Visualizer"].prototype.runOpeningAnimation = function () {
  var _this2 = this;

  if (this.state.config.showAmulet.is('on')) {
    if (this.map.turn === 0) {
      this.backgroundImage = this.state.imageManager.images.background.src; // this.rootScope.$emit('removeAnimations');
    }

    var startingTimeOut = setTimeout(function () {
      _this2.backgroundImage = _this2.state.imageManager.images.frozen.src;

      _this2.rootScope.$apply();

      _this2.rootScope.$emit('openingAnimation');
    }, 1800);
    this.rootScope.$on('endingAnimation', function () {
      clearTimeout(startingTimeOut);
    });
  } else {
    //this.ctrl.loadedBackground = true;
    this.backgroundImage = this.state.imageManager.images.frozen.src;
  }
};

_root_Visualizer__WEBPACK_IMPORTED_MODULE_0__["Visualizer"].prototype.runEndingAnimation = function () {
  var _this3 = this;

  if (this.state.config.showAmulet.is('on')) {
    this.rootScope.$emit('endingAnimation');
    setTimeout(function () {
      _this3.backgroundImage = _this3.state.imageManager.images.background.src;
    }, 2000);
  }
};

/***/ }),

/***/ "./game/lib/plugins/theme/knightz/visualizer/js/NoAnimationWhileIdlePlug.js":
/*!**********************************************************************************!*\
  !*** ./game/lib/plugins/theme/knightz/visualizer/js/NoAnimationWhileIdlePlug.js ***!
  \**********************************************************************************/
/*! exports provided: NoAnimationWhileIdlePlug */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoAnimationWhileIdlePlug", function() { return NoAnimationWhileIdlePlug; });
/* harmony import */ var _root_canvasObjects_Extension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~root/canvasObjects/Extension */ "./game/lib/plugins/root/visualizer/js/canvasObjects/Extension.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


// typehints-only

/**
 * An extension for a object that is has no idle animation
 */
var NoAnimationWhileIdlePlug =
/*#__PURE__*/
function (_Extension) {
  _inherits(NoAnimationWhileIdlePlug, _Extension);

  function NoAnimationWhileIdlePlug() {
    _classCallCheck(this, NoAnimationWhileIdlePlug);

    return _possibleConstructorReturn(this, _getPrototypeOf(NoAnimationWhileIdlePlug).apply(this, arguments));
  }

  _createClass(NoAnimationWhileIdlePlug, [{
    key: "noAnimationWhileIdle",

    /**
     * A function that returns whether the object uses it's animation while idle.
     *
     * @return {boolean}  Whether the object uses it's animation while idle.
     */
    value: function noAnimationWhileIdle() {
      return true;
    }
  }]);

  return NoAnimationWhileIdlePlug;
}(_root_canvasObjects_Extension__WEBPACK_IMPORTED_MODULE_0__["Extension"]);

/***/ }),

/***/ "./game/lib/plugins/theme/knightz/visualizer/js/RotatablePlug.js":
/*!***********************************************************************!*\
  !*** ./game/lib/plugins/theme/knightz/visualizer/js/RotatablePlug.js ***!
  \***********************************************************************/
/*! exports provided: RotatablePlug */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RotatablePlug", function() { return RotatablePlug; });
/* harmony import */ var _root_canvasObjects_Extension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~root/canvasObjects/Extension */ "./game/lib/plugins/root/visualizer/js/canvasObjects/Extension.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


// typehints-only

/**
 * An extension for a drone that can be rotated.
 */
var RotatablePlug =
/*#__PURE__*/
function (_Extension) {
  _inherits(RotatablePlug, _Extension);

  function RotatablePlug() {
    _classCallCheck(this, RotatablePlug);

    return _possibleConstructorReturn(this, _getPrototypeOf(RotatablePlug).apply(this, arguments));
  }

  _createClass(RotatablePlug, [{
    key: "rotatableImage",

    /**
     * A function that returns whether the image should be rotated using the object's angle.
     *
     * @return {boolean} Whether the image should be rotated using the object's angle.
     */
    value: function rotatableImage() {
      return true;
    }
  }]);

  return RotatablePlug;
}(_root_canvasObjects_Extension__WEBPACK_IMPORTED_MODULE_0__["Extension"]);

/***/ }),

/***/ "./game/lib/visualizer/src/bin/PluginManager.json":
/*!********************************************************!*\
  !*** ./game/lib/visualizer/src/bin/PluginManager.json ***!
  \********************************************************/
/*! exports provided: plugins, replayDataDefaultValues, Extensions, AllAudio, AllImages, Colors, MenuItems, DrawOrder, default */
/***/ (function(module) {

module.exports = {"plugins":["root","_bin/templates/ai_health_attacker_1","_bin/templates/as_creature_7","_bin/templates/as_creature_8","_bin/templates/as_creature_9","_bin/templates/build_methods_25","_bin/templates/build_methods_26","_bin/templates/game_attack_parameters_2","_bin/templates/game_attack_parameters_3","_bin/templates/game_attack_parameters_4","_bin/templates/game_attack_parameters_5","_bin/templates/health_attacker_6","_bin/templates/health_game_parameters_10","_bin/templates/health_game_parameters_11","_bin/templates/health_game_parameters_12","_bin/templates/health_game_parameters_13","_bin/templates/health_game_parameters_14","_bin/templates/health_game_parameters_15","_bin/templates/health_game_parameters_16","_bin/templates/health_object_17","_bin/templates/make_building_47","_bin/templates/make_building_48","_bin/templates/make_building_49","_bin/templates/move_game_parameters_39","_bin/templates/move_game_parameters_40","_bin/templates/move_game_parameters_41","_bin/templates/move_game_parameters_42","_bin/templates/moving_actor_43","_bin/templates/prioritiable_18","_bin/templates/prioritiable_19","_bin/templates/prioritiable_20","_bin/templates/prioritiable_21","_bin/templates/prioritiable_22","_bin/templates/prioritiable_23","_bin/templates/prioritiable_24","_bin/templates/produce_methods_27","_bin/templates/produce_methods_28","_bin/templates/produce_methods_29","_bin/templates/producer_attributes_30","_bin/templates/producer_attributes_31","_bin/templates/product_attributes_32","_bin/templates/product_attributes_33","_bin/templates/product_attributes_34","_bin/templates/product_attributes_35","_bin/templates/product_attributes_36","_bin/templates/spell_attributes_37","_bin/templates/spell_attributes_38","_bin/templates/suffocating_object_44","_bin/templates/suffocating_object_45","_bin/templates/suffocating_object_46","abstract/spawnable","ai/base","classes/building/base","cloak/base","health","mana/base","map/base","move/base","_bin/templates/as_spawnable_0","abstract/respawnable","attack/health","classes/building/castle","mana/produce/base","mana/spells/base","map/map_2d","move/per_actor/base","suffocate","_bin/templates/as_respawnable_50","ai/attacker/base","classes/elf","integrations/building_attack","integrations/building_product","mana/produce/portal","mana/spells/cloak","mana/spells/speedup","map/vectoric","move/per_actor/vectoric/base","ai/attacker/moving_attacker","classes/creature","integrations/attack_cloak_spell","integrations/produce_cloak_spell","mana/produce/mana_fountain","classes/ice_troll","classes/lava_giant","classes/tornado","integrations/ai_attacker_priority/ice_troll_priorities","integrations/ice_troll_cloak","theme/knightz"],"replayDataDefaultValues":{"players":2,"maxTurns":1000,"scores":[[0],[0]],"maxPoints":1000,"turns":0,"cutoff":"","maxHealth":0,"attackRange":0,"map":{"rows":0,"cols":0}},"Extensions":{"Pirate":["AttackPlug"],"Portal":["PreProducePlug","BuildingPlug"],"ManaFountain":["PreProducePlug","BuildingPlug"],"IceTroll":["PreProducePlug","HealthPlug","RotatablePlug","AttackPlug","NoAnimationWhileIdlePlug"],"LavaGiant":["PreProducePlug","HealthPlug","RotatablePlug","AttackPlug","NoAnimationWhileIdlePlug"],"Tornado":["PreProducePlug","HealthPlug","AttackPlug","NoAnimationWhileIdlePlug"],"Castle":["BuildingPlug"],"Elf":["HealthPlug","AttackPlug","NoAnimationWhileIdlePlug"]},"AllAudio":{"root/visualizer/data/audio/win.mp3":{"playWhenFast":true,"type":"MUSIC"},"root/visualizer/data/audio/points.mp3":{"playWhenFast":false,"type":"SOUND"},"health/visualizer/data/audio/pirateDie.mp3":{"playWhenFast":false,"type":"SOUND"},"mana/base/visualizer/data/audio/brake.mp3":{"playWhenFast":false,"type":"SOUND"},"mana/base/visualizer/data/audio/unite.mp3":{"playWhenFast":true,"type":"SOUND"},"theme/knightz/visualizer/data/audio/background.mp3":{"playWhenFast":true,"type":"MUSIC"}},"AllImages":{"root/visualizer/data/img/Glows/glow.png":{},"root/visualizer/data/img/debug_line.png":{},"root/visualizer/data/img/debug_pic.png":{},"mana/base/visualizer/data/img/mana.png":{},"mana/base/visualizer/data/img/bottom_bg.png":{},"mana/base/visualizer/data/img/top_bg.png":{},"mana/base/visualizer/data/img/bottom_left.png":{},"mana/base/visualizer/data/img/bottom_right.png":{},"mana/base/visualizer/data/img/turn_bg.png":{},"mana/base/visualizer/data/img/left_avatar.png":{},"mana/base/visualizer/data/img/right_avatar.png":{},"mana/base/visualizer/data/img/top_center.png":{},"mana/base/visualizer/data/img/left_avatar_hover.png":{},"mana/base/visualizer/data/img/right_avatar_hover.png":{},"mana/base/visualizer/data/img/settings_bg.png":{},"mana/base/visualizer/data/img/frozen_broken_amulet.png":{},"mana/base/visualizer/data/img/amulet.png":{},"mana/base/visualizer/data/img/broken_amulet.png":{},"mana/base/visualizer/data/img/left_half_amulet.png":{},"mana/base/visualizer/data/img/right_half_amulet.png":{},"mana/base/visualizer/data/img/small_particles.png":{},"mana/base/visualizer/data/img/big_particles.png":{},"mana/base/visualizer/data/img/information_line.png":{},"mana/base/visualizer/data/img/info_title.png":{},"mana/base/visualizer/data/img/winner_mep.png":{},"mana/base/visualizer/data/img/winner_amulet_orange.png":{},"mana/base/visualizer/data/img/winner_amulet_pink.png":{},"classes/building/castle/visualizer/data/img/castleA0.png":{"fps":50,"framesX":17,"framesY":1},"classes/building/castle/visualizer/data/img/castleA1.png":{"fps":50,"framesX":17,"framesY":1},"classes/building/castle/visualizer/data/img/castleB0.png":{"fps":50,"framesX":34,"framesY":1},"classes/building/castle/visualizer/data/img/castleB1.png":{"fps":50,"framesX":34,"framesY":1},"classes/building/castle/visualizer/data/img/castleC0.png":{"fps":50,"framesX":34,"framesY":1},"classes/building/castle/visualizer/data/img/castleC1.png":{"fps":50,"framesX":34,"framesY":1},"classes/building/castle/visualizer/data/img/castleGreen0.png":{"fps":30,"framesX":17,"framesY":1},"classes/building/castle/visualizer/data/img/castleGreen1.png":{"fps":30,"framesX":17,"framesY":1},"mana/produce/base/visualizer/data/img/heart.png":{},"mana/produce/base/visualizer/data/img/preProduce0.png":{"fps":30,"framesX":26,"framesY":1},"mana/produce/base/visualizer/data/img/preProduce1.png":{"fps":30,"framesX":26,"framesY":1},"classes/elf/visualizer/data/img/elf0.png":{"fps":30,"framesX":15,"framesY":1},"classes/elf/visualizer/data/img/elf1.png":{"fps":30,"framesX":15,"framesY":1},"classes/elf/visualizer/data/img/elfAttack0.png":{"fps":60,"framesX":30,"framesY":1},"classes/elf/visualizer/data/img/elfAttack1.png":{"fps":60,"framesX":30,"framesY":1},"classes/elf/visualizer/data/img/magic0.png":{"fps":30,"framesX":12,"framesY":1},"classes/elf/visualizer/data/img/magic1.png":{"fps":30,"framesX":12,"framesY":1},"classes/elf/visualizer/data/img/elfSpeedUp0.png":{"fps":30,"framesX":15,"framesY":1},"classes/elf/visualizer/data/img/elfSpeedUp1.png":{"fps":30,"framesX":15,"framesY":1},"mana/produce/portal/visualizer/data/img/portalA0.png":{"fps":30,"framesX":16,"framesY":1},"mana/produce/portal/visualizer/data/img/portalA1.png":{"fps":30,"framesX":16,"framesY":1},"mana/produce/portal/visualizer/data/img/portalB0.png":{"fps":30,"framesX":16,"framesY":1},"mana/produce/portal/visualizer/data/img/portalB1.png":{"fps":30,"framesX":16,"framesY":1},"mana/produce/portal/visualizer/data/img/portalC0.png":{},"mana/produce/portal/visualizer/data/img/portalC1.png":{},"mana/produce/portal/visualizer/data/img/portalSummoning0.png":{"fps":12,"framesX":16,"framesY":1},"mana/produce/portal/visualizer/data/img/portalSummoning1.png":{"fps":12,"framesX":16,"framesY":1},"mana/produce/portal/visualizer/data/img/clock.png":{},"mana/produce/mana_fountain/visualizer/data/img/manaFountain0.png":{"fps":40,"framesX":24,"framesY":1},"mana/produce/mana_fountain/visualizer/data/img/manaFountain1.png":{"fps":40,"framesX":24,"framesY":1},"classes/ice_troll/visualizer/data/img/Creatures/iceTroll0.png":{"fps":30,"framesX":15,"framesY":1},"classes/ice_troll/visualizer/data/img/Creatures/iceTroll1.png":{"fps":30,"framesX":15,"framesY":1},"classes/ice_troll/visualizer/data/img/Creatures/iceTrollAttack0.png":{"fps":32,"framesX":16,"framesY":1},"classes/ice_troll/visualizer/data/img/Creatures/iceTrollAttack1.png":{"fps":32,"framesX":16,"framesY":1},"classes/lava_giant/visualizer/data/img/Creatures/lavaGiant0.png":{"fps":30,"framesX":15,"framesY":1},"classes/lava_giant/visualizer/data/img/Creatures/lavaGiant1.png":{"fps":30,"framesX":15,"framesY":1},"classes/lava_giant/visualizer/data/img/Creatures/lavaGiantAttack0.png":{"fps":55,"framesX":33,"framesY":1},"classes/lava_giant/visualizer/data/img/Creatures/lavaGiantAttack1.png":{"fps":55,"framesX":33,"framesY":1},"classes/lava_giant/visualizer/data/img/fire0.png":{},"classes/lava_giant/visualizer/data/img/fire1.png":{},"classes/tornado/visualizer/data/img/tornado0.png":{"fps":30,"framesX":28,"framesY":1},"classes/tornado/visualizer/data/img/tornado1.png":{"fps":30,"framesX":28,"framesY":1},"theme/knightz/visualizer/data/img/attack.png":{},"theme/knightz/visualizer/data/img/background.png":{},"theme/knightz/visualizer/data/img/frozen.png":{}},"Colors":{"0":"#FEB100","1":"#DF00DA","2":"#0000FF","3":"#CC6600","-1":"#FFFFFF","attackLine":"#0011FF","0_grad":"#FFF400","1_grad":"#E497FF"},"MenuItems":{"showHint":["Toggle hint",["on","off"],0],"hintContent":["Hint content",["all","coords"],0],"label":["Toggle labels",["count","team","game-id","off"],1],"slowMotion":["Slow motion",["disabled","enabled"],6],"drawAnimations":["Toggle animation",["enabled","disabled"],7],"muteSounds":["",["false","true"],-1],"muteMusic":["",["false","true"],-1],"soundsVolume":["",["1","0"],-1,0.5],"musicVolume":["",["1","0"],-1,1],"textSize":["Hint text size",["small","normal","large"],1,1],"healthBar":["Show health-bars",["on","off"],3],"showAmulet":["Show amulet animation",["on","off"],2],"showAttackLines":["Show Attack Lines",["off","on"],2],"showRangesElf":["Show elves' ranges","showRanges"],"showRanges":["Show structures' ranges",["on","off"],2]},"DrawOrder":["Board","ImageObject","Glow","CircularHealthBar","Castle","Portal","ManaFountain","SummonBar","HealthBar","PreProduceEffect","PreProduceObject","BuildingHealthBar","Elf","LavaGiant","IceTroll","Attack","Tornado","Label","Hint","Range"]};

/***/ }),

/***/ "./game/lib/visualizer/src/bin/plugins.entry.js":
/*!******************************************************!*\
  !*** ./game/lib/visualizer/src/bin/plugins.entry.js ***!
  \******************************************************/
/*! exports provided: Config, Configuration, State, AudioManager, AudioPrototype, AudioInfo, AudioType, ImageManager, ImageInfo, AnimatableImage, MAX_ZOOM_SCALE, FPS, Key, StartupOptions, GameMap, Replay, sortOnMap, sortByBoolFunc, numberToColor, getColor, getGradientTopColor, getTeamImage, promiseWrapper, throwError, groupByProperty, UnimplementedError, snakeToCamelCase, Director, Extension, extensionTypeToClass, GameObject, Location, CanvasObject, objectTypeToClass, ExtensibleObject, LivingObject, Glow, Label, MetaObject, ImageObject, StaticObject, Board, VisualizerInternalObject, Hint, BuildingPlug, CircularHealthBar, HealthBar, HealthPlug, Range, MovingObject, Shreddable, Attack, AttackPlug, AttackedPlug, Castle, PreProduceObject, PreProduceEffect, PreProducePlug, BuildingHealthBar, Elf, SummonBar, Portal, ManaFountain, IceTroll, LavaGiant, Tornado, NoAnimationWhileIdlePlug, RotatablePlug */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _plugins_root_visualizer_js_Config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../plugins/root/visualizer/js/Config.js */ "./game/lib/plugins/root/visualizer/js/Config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return _plugins_root_visualizer_js_Config_js__WEBPACK_IMPORTED_MODULE_0__["Config"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Configuration", function() { return _plugins_root_visualizer_js_Config_js__WEBPACK_IMPORTED_MODULE_0__["Configuration"]; });

/* harmony import */ var _plugins_root_visualizer_js_State_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../plugins/root/visualizer/js/State.js */ "./game/lib/plugins/root/visualizer/js/State.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "State", function() { return _plugins_root_visualizer_js_State_js__WEBPACK_IMPORTED_MODULE_1__["State"]; });

/* harmony import */ var _plugins_root_visualizer_js_AudioManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../plugins/root/visualizer/js/AudioManager.js */ "./game/lib/plugins/root/visualizer/js/AudioManager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AudioManager", function() { return _plugins_root_visualizer_js_AudioManager_js__WEBPACK_IMPORTED_MODULE_2__["AudioManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AudioPrototype", function() { return _plugins_root_visualizer_js_AudioManager_js__WEBPACK_IMPORTED_MODULE_2__["AudioPrototype"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AudioInfo", function() { return _plugins_root_visualizer_js_AudioManager_js__WEBPACK_IMPORTED_MODULE_2__["AudioInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AudioType", function() { return _plugins_root_visualizer_js_AudioManager_js__WEBPACK_IMPORTED_MODULE_2__["AudioType"]; });

/* harmony import */ var _plugins_root_visualizer_js_ImageManager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../plugins/root/visualizer/js/ImageManager.js */ "./game/lib/plugins/root/visualizer/js/ImageManager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageManager", function() { return _plugins_root_visualizer_js_ImageManager_js__WEBPACK_IMPORTED_MODULE_3__["ImageManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageInfo", function() { return _plugins_root_visualizer_js_ImageManager_js__WEBPACK_IMPORTED_MODULE_3__["ImageInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimatableImage", function() { return _plugins_root_visualizer_js_ImageManager_js__WEBPACK_IMPORTED_MODULE_3__["AnimatableImage"]; });

/* harmony import */ var _plugins_root_visualizer_js_Const_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../plugins/root/visualizer/js/Const.js */ "./game/lib/plugins/root/visualizer/js/Const.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAX_ZOOM_SCALE", function() { return _plugins_root_visualizer_js_Const_js__WEBPACK_IMPORTED_MODULE_4__["MAX_ZOOM_SCALE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FPS", function() { return _plugins_root_visualizer_js_Const_js__WEBPACK_IMPORTED_MODULE_4__["FPS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Key", function() { return _plugins_root_visualizer_js_Const_js__WEBPACK_IMPORTED_MODULE_4__["Key"]; });

/* harmony import */ var _plugins_root_visualizer_js_StartupOptions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../plugins/root/visualizer/js/StartupOptions.js */ "./game/lib/plugins/root/visualizer/js/StartupOptions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StartupOptions", function() { return _plugins_root_visualizer_js_StartupOptions_js__WEBPACK_IMPORTED_MODULE_5__["StartupOptions"]; });

/* harmony import */ var _plugins_root_visualizer_js_GameMap_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../plugins/root/visualizer/js/GameMap.js */ "./game/lib/plugins/root/visualizer/js/GameMap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GameMap", function() { return _plugins_root_visualizer_js_GameMap_js__WEBPACK_IMPORTED_MODULE_6__["GameMap"]; });

/* harmony import */ var _plugins_root_visualizer_js_Replay_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../plugins/root/visualizer/js/Replay.js */ "./game/lib/plugins/root/visualizer/js/Replay.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Replay", function() { return _plugins_root_visualizer_js_Replay_js__WEBPACK_IMPORTED_MODULE_7__["Replay"]; });

/* harmony import */ var _plugins_root_visualizer_js_Util_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../plugins/root/visualizer/js/Util.js */ "./game/lib/plugins/root/visualizer/js/Util.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sortOnMap", function() { return _plugins_root_visualizer_js_Util_js__WEBPACK_IMPORTED_MODULE_8__["sortOnMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sortByBoolFunc", function() { return _plugins_root_visualizer_js_Util_js__WEBPACK_IMPORTED_MODULE_8__["sortByBoolFunc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numberToColor", function() { return _plugins_root_visualizer_js_Util_js__WEBPACK_IMPORTED_MODULE_8__["numberToColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getColor", function() { return _plugins_root_visualizer_js_Util_js__WEBPACK_IMPORTED_MODULE_8__["getColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getGradientTopColor", function() { return _plugins_root_visualizer_js_Util_js__WEBPACK_IMPORTED_MODULE_8__["getGradientTopColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTeamImage", function() { return _plugins_root_visualizer_js_Util_js__WEBPACK_IMPORTED_MODULE_8__["getTeamImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "promiseWrapper", function() { return _plugins_root_visualizer_js_Util_js__WEBPACK_IMPORTED_MODULE_8__["promiseWrapper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throwError", function() { return _plugins_root_visualizer_js_Util_js__WEBPACK_IMPORTED_MODULE_8__["throwError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupByProperty", function() { return _plugins_root_visualizer_js_Util_js__WEBPACK_IMPORTED_MODULE_8__["groupByProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnimplementedError", function() { return _plugins_root_visualizer_js_Util_js__WEBPACK_IMPORTED_MODULE_8__["UnimplementedError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "snakeToCamelCase", function() { return _plugins_root_visualizer_js_Util_js__WEBPACK_IMPORTED_MODULE_8__["snakeToCamelCase"]; });

/* harmony import */ var _plugins_root_visualizer_js_Director_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../plugins/root/visualizer/js/Director.js */ "./game/lib/plugins/root/visualizer/js/Director.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Director", function() { return _plugins_root_visualizer_js_Director_js__WEBPACK_IMPORTED_MODULE_9__["Director"]; });

/* harmony import */ var _plugins_root_visualizer_js_canvasObjects_Extension_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../plugins/root/visualizer/js/canvasObjects/Extension.js */ "./game/lib/plugins/root/visualizer/js/canvasObjects/Extension.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Extension", function() { return _plugins_root_visualizer_js_canvasObjects_Extension_js__WEBPACK_IMPORTED_MODULE_10__["Extension"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extensionTypeToClass", function() { return _plugins_root_visualizer_js_canvasObjects_Extension_js__WEBPACK_IMPORTED_MODULE_10__["extensionTypeToClass"]; });

/* harmony import */ var _plugins_root_visualizer_js_canvasObjects_GameObject_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../plugins/root/visualizer/js/canvasObjects/GameObject.js */ "./game/lib/plugins/root/visualizer/js/canvasObjects/GameObject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GameObject", function() { return _plugins_root_visualizer_js_canvasObjects_GameObject_js__WEBPACK_IMPORTED_MODULE_11__["GameObject"]; });

/* harmony import */ var _plugins_root_visualizer_js_canvasObjects_Location_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../plugins/root/visualizer/js/canvasObjects/Location.js */ "./game/lib/plugins/root/visualizer/js/canvasObjects/Location.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Location", function() { return _plugins_root_visualizer_js_canvasObjects_Location_js__WEBPACK_IMPORTED_MODULE_12__["Location"]; });

/* harmony import */ var _plugins_root_visualizer_js_canvasObjects_CanvasObject_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../plugins/root/visualizer/js/canvasObjects/CanvasObject.js */ "./game/lib/plugins/root/visualizer/js/canvasObjects/CanvasObject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CanvasObject", function() { return _plugins_root_visualizer_js_canvasObjects_CanvasObject_js__WEBPACK_IMPORTED_MODULE_13__["CanvasObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "objectTypeToClass", function() { return _plugins_root_visualizer_js_canvasObjects_CanvasObject_js__WEBPACK_IMPORTED_MODULE_13__["objectTypeToClass"]; });

/* harmony import */ var _plugins_root_visualizer_js_canvasObjects_ExtensibleObject_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../plugins/root/visualizer/js/canvasObjects/ExtensibleObject.js */ "./game/lib/plugins/root/visualizer/js/canvasObjects/ExtensibleObject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExtensibleObject", function() { return _plugins_root_visualizer_js_canvasObjects_ExtensibleObject_js__WEBPACK_IMPORTED_MODULE_14__["ExtensibleObject"]; });

/* harmony import */ var _plugins_root_visualizer_js_canvasObjects_livingObjects_LivingObject_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../plugins/root/visualizer/js/canvasObjects/livingObjects/LivingObject.js */ "./game/lib/plugins/root/visualizer/js/canvasObjects/livingObjects/LivingObject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LivingObject", function() { return _plugins_root_visualizer_js_canvasObjects_livingObjects_LivingObject_js__WEBPACK_IMPORTED_MODULE_15__["LivingObject"]; });

/* harmony import */ var _plugins_root_visualizer_js_canvasObjects_metaObjects_Glow_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../plugins/root/visualizer/js/canvasObjects/metaObjects/Glow.js */ "./game/lib/plugins/root/visualizer/js/canvasObjects/metaObjects/Glow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Glow", function() { return _plugins_root_visualizer_js_canvasObjects_metaObjects_Glow_js__WEBPACK_IMPORTED_MODULE_16__["Glow"]; });

/* harmony import */ var _plugins_root_visualizer_js_canvasObjects_metaObjects_Label_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../plugins/root/visualizer/js/canvasObjects/metaObjects/Label.js */ "./game/lib/plugins/root/visualizer/js/canvasObjects/metaObjects/Label.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _plugins_root_visualizer_js_canvasObjects_metaObjects_Label_js__WEBPACK_IMPORTED_MODULE_17__["Label"]; });

/* harmony import */ var _plugins_root_visualizer_js_canvasObjects_metaObjects_MetaObject_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../plugins/root/visualizer/js/canvasObjects/metaObjects/MetaObject.js */ "./game/lib/plugins/root/visualizer/js/canvasObjects/metaObjects/MetaObject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MetaObject", function() { return _plugins_root_visualizer_js_canvasObjects_metaObjects_MetaObject_js__WEBPACK_IMPORTED_MODULE_18__["MetaObject"]; });

/* harmony import */ var _plugins_root_visualizer_js_canvasObjects_staticObjects_ImageObject_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../plugins/root/visualizer/js/canvasObjects/staticObjects/ImageObject.js */ "./game/lib/plugins/root/visualizer/js/canvasObjects/staticObjects/ImageObject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageObject", function() { return _plugins_root_visualizer_js_canvasObjects_staticObjects_ImageObject_js__WEBPACK_IMPORTED_MODULE_19__["ImageObject"]; });

/* harmony import */ var _plugins_root_visualizer_js_canvasObjects_staticObjects_StaticObject_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../plugins/root/visualizer/js/canvasObjects/staticObjects/StaticObject.js */ "./game/lib/plugins/root/visualizer/js/canvasObjects/staticObjects/StaticObject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaticObject", function() { return _plugins_root_visualizer_js_canvasObjects_staticObjects_StaticObject_js__WEBPACK_IMPORTED_MODULE_20__["StaticObject"]; });

/* harmony import */ var _plugins_root_visualizer_js_canvasObjects_visualizerInternalObjects_Board_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../plugins/root/visualizer/js/canvasObjects/visualizerInternalObjects/Board.js */ "./game/lib/plugins/root/visualizer/js/canvasObjects/visualizerInternalObjects/Board.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Board", function() { return _plugins_root_visualizer_js_canvasObjects_visualizerInternalObjects_Board_js__WEBPACK_IMPORTED_MODULE_21__["Board"]; });

/* harmony import */ var _plugins_root_visualizer_js_canvasObjects_visualizerInternalObjects_VisualizerInternalObject_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../plugins/root/visualizer/js/canvasObjects/visualizerInternalObjects/VisualizerInternalObject.js */ "./game/lib/plugins/root/visualizer/js/canvasObjects/visualizerInternalObjects/VisualizerInternalObject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisualizerInternalObject", function() { return _plugins_root_visualizer_js_canvasObjects_visualizerInternalObjects_VisualizerInternalObject_js__WEBPACK_IMPORTED_MODULE_22__["VisualizerInternalObject"]; });

/* harmony import */ var _plugins_root_visualizer_js_canvasObjects_visualizerInternalObjects_Hint_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../plugins/root/visualizer/js/canvasObjects/visualizerInternalObjects/Hint.js */ "./game/lib/plugins/root/visualizer/js/canvasObjects/visualizerInternalObjects/Hint.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hint", function() { return _plugins_root_visualizer_js_canvasObjects_visualizerInternalObjects_Hint_js__WEBPACK_IMPORTED_MODULE_23__["Hint"]; });

/* harmony import */ var _plugins_classes_building_base_visualizer_js_BuildingPlug_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../plugins/classes/building/base/visualizer/js/BuildingPlug.js */ "./game/lib/plugins/classes/building/base/visualizer/js/BuildingPlug.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BuildingPlug", function() { return _plugins_classes_building_base_visualizer_js_BuildingPlug_js__WEBPACK_IMPORTED_MODULE_24__["BuildingPlug"]; });

/* harmony import */ var _plugins_health_visualizer_js_CircularHealthBar_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../plugins/health/visualizer/js/CircularHealthBar.js */ "./game/lib/plugins/health/visualizer/js/CircularHealthBar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CircularHealthBar", function() { return _plugins_health_visualizer_js_CircularHealthBar_js__WEBPACK_IMPORTED_MODULE_25__["CircularHealthBar"]; });

/* harmony import */ var _plugins_health_visualizer_js_HealthBar_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../plugins/health/visualizer/js/HealthBar.js */ "./game/lib/plugins/health/visualizer/js/HealthBar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HealthBar", function() { return _plugins_health_visualizer_js_HealthBar_js__WEBPACK_IMPORTED_MODULE_26__["HealthBar"]; });

/* harmony import */ var _plugins_health_visualizer_js_HealthPlug_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../plugins/health/visualizer/js/HealthPlug.js */ "./game/lib/plugins/health/visualizer/js/HealthPlug.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HealthPlug", function() { return _plugins_health_visualizer_js_HealthPlug_js__WEBPACK_IMPORTED_MODULE_27__["HealthPlug"]; });

/* harmony import */ var _plugins_mana_base_visualizer_js_showManaInScoreSlot_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../plugins/mana/base/visualizer/js/showManaInScoreSlot.js */ "./game/lib/plugins/mana/base/visualizer/js/showManaInScoreSlot.js");
/* empty/unused harmony star reexport *//* harmony import */ var _plugins_map_base_visualizer_js_Range_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../plugins/map/base/visualizer/js/Range.js */ "./game/lib/plugins/map/base/visualizer/js/Range.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Range", function() { return _plugins_map_base_visualizer_js_Range_js__WEBPACK_IMPORTED_MODULE_29__["Range"]; });

/* harmony import */ var _plugins_move_base_visualizer_js_MovingObject_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../plugins/move/base/visualizer/js/MovingObject.js */ "./game/lib/plugins/move/base/visualizer/js/MovingObject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MovingObject", function() { return _plugins_move_base_visualizer_js_MovingObject_js__WEBPACK_IMPORTED_MODULE_30__["MovingObject"]; });

/* harmony import */ var _plugins_move_base_visualizer_js_Shreddable_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../plugins/move/base/visualizer/js/Shreddable.js */ "./game/lib/plugins/move/base/visualizer/js/Shreddable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Shreddable", function() { return _plugins_move_base_visualizer_js_Shreddable_js__WEBPACK_IMPORTED_MODULE_31__["Shreddable"]; });

/* harmony import */ var _plugins_attack_health_visualizer_js_Attack_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../plugins/attack/health/visualizer/js/Attack.js */ "./game/lib/plugins/attack/health/visualizer/js/Attack.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Attack", function() { return _plugins_attack_health_visualizer_js_Attack_js__WEBPACK_IMPORTED_MODULE_32__["Attack"]; });

/* harmony import */ var _plugins_attack_health_visualizer_js_AttackPlug_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../plugins/attack/health/visualizer/js/AttackPlug.js */ "./game/lib/plugins/attack/health/visualizer/js/AttackPlug.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttackPlug", function() { return _plugins_attack_health_visualizer_js_AttackPlug_js__WEBPACK_IMPORTED_MODULE_33__["AttackPlug"]; });

/* harmony import */ var _plugins_attack_health_visualizer_js_AttackedPlug_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../../plugins/attack/health/visualizer/js/AttackedPlug.js */ "./game/lib/plugins/attack/health/visualizer/js/AttackedPlug.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttackedPlug", function() { return _plugins_attack_health_visualizer_js_AttackedPlug_js__WEBPACK_IMPORTED_MODULE_34__["AttackedPlug"]; });

/* harmony import */ var _plugins_classes_building_castle_visualizer_js_scorebarCastleHealth_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../plugins/classes/building/castle/visualizer/js/scorebarCastleHealth.js */ "./game/lib/plugins/classes/building/castle/visualizer/js/scorebarCastleHealth.js");
/* empty/unused harmony star reexport *//* harmony import */ var _plugins_classes_building_castle_visualizer_js_Castle_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../../plugins/classes/building/castle/visualizer/js/Castle.js */ "./game/lib/plugins/classes/building/castle/visualizer/js/Castle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Castle", function() { return _plugins_classes_building_castle_visualizer_js_Castle_js__WEBPACK_IMPORTED_MODULE_36__["Castle"]; });

/* harmony import */ var _plugins_mana_produce_base_visualizer_js_PreProduceObject_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../../plugins/mana/produce/base/visualizer/js/PreProduceObject.js */ "./game/lib/plugins/mana/produce/base/visualizer/js/PreProduceObject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PreProduceObject", function() { return _plugins_mana_produce_base_visualizer_js_PreProduceObject_js__WEBPACK_IMPORTED_MODULE_37__["PreProduceObject"]; });

/* harmony import */ var _plugins_mana_produce_base_visualizer_js_PreProduceEffect_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../../plugins/mana/produce/base/visualizer/js/PreProduceEffect.js */ "./game/lib/plugins/mana/produce/base/visualizer/js/PreProduceEffect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PreProduceEffect", function() { return _plugins_mana_produce_base_visualizer_js_PreProduceEffect_js__WEBPACK_IMPORTED_MODULE_38__["PreProduceEffect"]; });

/* harmony import */ var _plugins_mana_produce_base_visualizer_js_PreProducePlug_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../../../plugins/mana/produce/base/visualizer/js/PreProducePlug.js */ "./game/lib/plugins/mana/produce/base/visualizer/js/PreProducePlug.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PreProducePlug", function() { return _plugins_mana_produce_base_visualizer_js_PreProducePlug_js__WEBPACK_IMPORTED_MODULE_39__["PreProducePlug"]; });

/* harmony import */ var _plugins_mana_produce_base_visualizer_js_BuildingHealthBar_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../../plugins/mana/produce/base/visualizer/js/BuildingHealthBar.js */ "./game/lib/plugins/mana/produce/base/visualizer/js/BuildingHealthBar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BuildingHealthBar", function() { return _plugins_mana_produce_base_visualizer_js_BuildingHealthBar_js__WEBPACK_IMPORTED_MODULE_40__["BuildingHealthBar"]; });

/* harmony import */ var _plugins_classes_elf_visualizer_js_Elf_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../../../plugins/classes/elf/visualizer/js/Elf.js */ "./game/lib/plugins/classes/elf/visualizer/js/Elf.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Elf", function() { return _plugins_classes_elf_visualizer_js_Elf_js__WEBPACK_IMPORTED_MODULE_41__["Elf"]; });

/* harmony import */ var _plugins_mana_produce_portal_visualizer_js_SummonBar_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../../../plugins/mana/produce/portal/visualizer/js/SummonBar.js */ "./game/lib/plugins/mana/produce/portal/visualizer/js/SummonBar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SummonBar", function() { return _plugins_mana_produce_portal_visualizer_js_SummonBar_js__WEBPACK_IMPORTED_MODULE_42__["SummonBar"]; });

/* harmony import */ var _plugins_mana_produce_portal_visualizer_js_Portal_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../../../plugins/mana/produce/portal/visualizer/js/Portal.js */ "./game/lib/plugins/mana/produce/portal/visualizer/js/Portal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Portal", function() { return _plugins_mana_produce_portal_visualizer_js_Portal_js__WEBPACK_IMPORTED_MODULE_43__["Portal"]; });

/* harmony import */ var _plugins_map_vectoric_visualizer_js_MapUtils_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../../../plugins/map/vectoric/visualizer/js/MapUtils.js */ "./game/lib/plugins/map/vectoric/visualizer/js/MapUtils.js");
/* empty/unused harmony star reexport *//* harmony import */ var _plugins_mana_produce_mana_fountain_visualizer_js_ManaFountain_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../../../plugins/mana/produce/mana_fountain/visualizer/js/ManaFountain.js */ "./game/lib/plugins/mana/produce/mana_fountain/visualizer/js/ManaFountain.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ManaFountain", function() { return _plugins_mana_produce_mana_fountain_visualizer_js_ManaFountain_js__WEBPACK_IMPORTED_MODULE_45__["ManaFountain"]; });

/* harmony import */ var _plugins_classes_ice_troll_visualizer_js_IceTroll_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../../../plugins/classes/ice_troll/visualizer/js/IceTroll.js */ "./game/lib/plugins/classes/ice_troll/visualizer/js/IceTroll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IceTroll", function() { return _plugins_classes_ice_troll_visualizer_js_IceTroll_js__WEBPACK_IMPORTED_MODULE_46__["IceTroll"]; });

/* harmony import */ var _plugins_classes_lava_giant_visualizer_js_LavaGiant_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../../../plugins/classes/lava_giant/visualizer/js/LavaGiant.js */ "./game/lib/plugins/classes/lava_giant/visualizer/js/LavaGiant.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LavaGiant", function() { return _plugins_classes_lava_giant_visualizer_js_LavaGiant_js__WEBPACK_IMPORTED_MODULE_47__["LavaGiant"]; });

/* harmony import */ var _plugins_classes_tornado_visualizer_js_Tornado_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../../../plugins/classes/tornado/visualizer/js/Tornado.js */ "./game/lib/plugins/classes/tornado/visualizer/js/Tornado.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tornado", function() { return _plugins_classes_tornado_visualizer_js_Tornado_js__WEBPACK_IMPORTED_MODULE_48__["Tornado"]; });

/* harmony import */ var _plugins_theme_knightz_visualizer_js_NoAnimationWhileIdlePlug_js__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../../../plugins/theme/knightz/visualizer/js/NoAnimationWhileIdlePlug.js */ "./game/lib/plugins/theme/knightz/visualizer/js/NoAnimationWhileIdlePlug.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoAnimationWhileIdlePlug", function() { return _plugins_theme_knightz_visualizer_js_NoAnimationWhileIdlePlug_js__WEBPACK_IMPORTED_MODULE_49__["NoAnimationWhileIdlePlug"]; });

/* harmony import */ var _plugins_theme_knightz_visualizer_js_RotatablePlug_js__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../../../plugins/theme/knightz/visualizer/js/RotatablePlug.js */ "./game/lib/plugins/theme/knightz/visualizer/js/RotatablePlug.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RotatablePlug", function() { return _plugins_theme_knightz_visualizer_js_RotatablePlug_js__WEBPACK_IMPORTED_MODULE_50__["RotatablePlug"]; });

/* harmony import */ var _plugins_theme_knightz_visualizer_js_FadeAnimation_js__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../../../plugins/theme/knightz/visualizer/js/FadeAnimation.js */ "./game/lib/plugins/theme/knightz/visualizer/js/FadeAnimation.js");
/* empty/unused harmony star reexport */




















































/***/ }),

/***/ "./node_modules/inherits/inherits_browser.js":
/*!***************************************************!*\
  !*** ./node_modules/inherits/inherits_browser.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/util/support/isBufferBrowser.js":
/*!******************************************************!*\
  !*** ./node_modules/util/support/isBufferBrowser.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ "./node_modules/util/util.js":
/*!***********************************!*\
  !*** ./node_modules/util/util.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ "./node_modules/util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(/*! inherits */ "./node_modules/inherits/inherits_browser.js");

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb, null, ret) },
            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ })

/******/ });
//# sourceMappingURL=plugins.bundle.js.map