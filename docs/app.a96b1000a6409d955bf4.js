/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_main_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/main.sass */ \"./src/sass/main.sass\");\n/* harmony import */ var _sass_main_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_main_sass__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_matrixModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libs/matrixModel */ \"./src/js/libs/matrixModel.js\");\n/* harmony import */ var _libs_mapView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./libs/mapView */ \"./src/js/libs/mapView.js\");\n/* harmony import */ var _libs_gameCtrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./libs/gameCtrl */ \"./src/js/libs/gameCtrl.js\");\n\n\n\n\nvar controller = new _libs_gameCtrl__WEBPACK_IMPORTED_MODULE_3__[\"default\"](_libs_matrixModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _libs_mapView__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\ncontroller.run();\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/libs/gameCtrl.js":
/*!*********************************!*\
  !*** ./src/js/libs/gameCtrl.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar GameCtrl =\n/*#__PURE__*/\nfunction () {\n  function GameCtrl(model, view) {\n    _classCallCheck(this, GameCtrl);\n\n    this.isGameRunning = true;\n    var startPoint = [0, 0],\n        size = [4, 4];\n    var words = [];\n    this.model = new model();\n    words = this.model.run(size).getArrows();\n    this.view = new view('.map', '.controls', size, 10);\n    this.view.generateMap();\n    this.view.generateControlsField();\n    this.view.setStartPoint(startPoint);\n    var i = words.length;\n    this.view.addArrows(words);\n    this.view.setEndPoint(words[i - 1].cors);\n    this.setEvents();\n  }\n\n  _createClass(GameCtrl, [{\n    key: \"setEvents\",\n    value: function setEvents() {\n      var _this = this;\n\n      var cells = this.view.getMapCells();\n      cells.forEach(function (cell, index) {\n        cell.addEventListener('click', _this.checkWinner.bind(_this));\n      });\n    }\n  }, {\n    key: \"checkWinner\",\n    value: function checkWinner(e) {\n      var _this2 = this;\n\n      if (!this.isGameRunning) return;\n\n      if (e.target === this.view.point.startCell) {\n        return;\n      } else if (e.target === this.view.point.endCell) {\n        this.view.showWinPopup(function () {\n          return _this2.view.markWinner(e);\n        });\n        this.isGameRunning = false;\n      } else {\n        this.isGameRunning = false;\n        this.view.showFailPopUp(function () {\n          return _this2.view.markFail(e);\n        });\n      }\n    }\n  }, {\n    key: \"run\",\n    value: function run() {\n      return this;\n    }\n  }]);\n\n  return GameCtrl;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameCtrl);\n\n//# sourceURL=webpack:///./src/js/libs/gameCtrl.js?");

/***/ }),

/***/ "./src/js/libs/mapView.js":
/*!********************************!*\
  !*** ./src/js/libs/mapView.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar GameView =\n/*#__PURE__*/\nfunction () {\n  function GameView(idMap, idControls, sizeMap, sizeControls) {\n    _classCallCheck(this, GameView);\n\n    this.size = {};\n    this.point = {};\n    this.id = {};\n    this.id.mapCells = [];\n    var mapElement = document.querySelector(idMap);\n    var controlsElement = document.querySelector(idControls);\n    this.id.mapElement = mapElement;\n    this.id.controlsElement = controlsElement;\n    this.size.map = _toConsumableArray(sizeMap);\n    this.size.controls = sizeControls;\n    this.size.moves = 10;\n  }\n\n  _createClass(GameView, [{\n    key: \"showFailPopUp\",\n    value: function showFailPopUp(cb) {\n      var popup = document.querySelector('.popup-fail');\n      var video = document.querySelector('.video-fail');\n      popup.classList.add('popup__show');\n\n      video.onended = function () {\n        return cb();\n      };\n\n      video.play();\n    }\n  }, {\n    key: \"showWinPopup\",\n    value: function showWinPopup(cb) {\n      var popup = document.querySelector('.popup-win');\n      var video = document.querySelector('.video-win');\n      popup.classList.add('popup__show');\n\n      video.onended = function () {\n        return cb();\n      };\n\n      video.play();\n    }\n  }, {\n    key: \"hideFailPopUp\",\n    value: function hideFailPopUp() {\n      var popup = document.querySelector('.popup-fail');\n      popup.classList.remove('popup__show');\n    }\n  }, {\n    key: \"hideWinPopUp\",\n    value: function hideWinPopUp() {\n      var popup = document.querySelector('.popup-win');\n      popup.classList.remove('popup__show');\n    }\n  }, {\n    key: \"getMapCells\",\n    value: function getMapCells() {\n      return this.id.mapElement.querySelectorAll('.map-cell');\n    }\n  }, {\n    key: \"getArrowCells\",\n    value: function getArrowCells() {\n      return this.id.controlsElement.querySelectorAll(\".controls-cell\");\n    }\n  }, {\n    key: \"addArrows\",\n    value: function addArrows(words) {\n      var cells = this.getArrowCells();\n      cells.forEach(function (elemt, index) {\n        if (words[index] != undefined) {\n          setTimeout(function () {\n            return elemt.classList.add(words[index][\"class\"]);\n          }, index * 500);\n        }\n      });\n    }\n  }, {\n    key: \"generateMap\",\n    value: function generateMap() {\n      var _this$size$map = _slicedToArray(this.size.map, 2),\n          sizeY = _this$size$map[0],\n          sizeX = _this$size$map[1];\n\n      var table = document.createElement('table');\n      table.classList.add('map-table');\n\n      for (var i = 0; i < sizeY; i++) {\n        var row = document.createElement('tr');\n        row.classList.add('map-row');\n\n        for (var j = 0; j < sizeX; j++) {\n          var cell = document.createElement('td');\n          cell.classList.add('map-cell');\n          cell.style.width = 100 / sizeX + \"%\";\n          cell.style.height = 100 / sizeX + \"%\";\n          this.id.mapCells.push(cell);\n          row.append(cell);\n        }\n\n        table.append(row);\n      }\n\n      this.id.mapElement.append(table);\n    }\n  }, {\n    key: \"generateControlsField\",\n    value: function generateControlsField() {\n      var table = document.createElement(\"table\");\n      table.classList.add(\"controls-table\");\n\n      for (var i = 0; i < this.size.moves / 5; i++) {\n        var row = document.createElement(\"tr\");\n        row.classList.add(\"controls-row\");\n\n        for (var j = 0; j < this.size.moves / 2; j++) {\n          var cell = document.createElement(\"td\");\n          cell.classList.add(\"controls-cell\");\n          row.append(cell);\n        }\n\n        table.append(row);\n      }\n\n      this.id.controlsElement.append(table);\n    }\n  }, {\n    key: \"setStartPoint\",\n    value: function setStartPoint(point) {\n      var _point = _slicedToArray(point, 2),\n          y = _point[0],\n          x = _point[1];\n\n      var cell = this.id.mapElement.querySelectorAll('.map-row')[y].querySelectorAll('.map-cell')[x];\n      cell.classList.add('start-point');\n      this.point.startPoint = point;\n      this.point.startCell = cell;\n    }\n  }, {\n    key: \"setEndPoint\",\n    value: function setEndPoint(point) {\n      var _point2 = _slicedToArray(point, 2),\n          y = _point2[0],\n          x = _point2[1];\n\n      var cell = this.id.mapElement.querySelectorAll('.map-row')[y].querySelectorAll('.map-cell')[x];\n      this.point.endPoint = point;\n      this.point.endCell = cell;\n      console.log(this.point.endCell);\n      return this;\n    }\n  }, {\n    key: \"markWinner\",\n    value: function markWinner() {\n      this.point.endCell.classList.add('win-point');\n    }\n  }, {\n    key: \"markFail\",\n    value: function markFail(e) {\n      e.target.classList.add('fail-point');\n    }\n  }, {\n    key: \"getStartPoint\",\n    value: function getStartPoint() {\n      return this.point.startPoint;\n    }\n  }, {\n    key: \"getStartCell\",\n    value: function getStartCell() {\n      return this.point.startCell;\n    }\n  }, {\n    key: \"getEndCell\",\n    value: function getEndCell() {\n      return this.point.endCell;\n    }\n  }, {\n    key: \"getEndPoint\",\n    value: function getEndPoint() {\n      return this.point.endPoint;\n    }\n  }, {\n    key: \"deleteStartPoint\",\n    value: function deleteStartPoint() {\n      this.id.mapElement.querySelector('.start-point').classList.remove('start-point');\n    }\n  }]);\n\n  return GameView;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameView);\n\n//# sourceURL=webpack:///./src/js/libs/mapView.js?");

/***/ }),

/***/ "./src/js/libs/matrixModel.js":
/*!************************************!*\
  !*** ./src/js/libs/matrixModel.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar MatrixModel =\n/*#__PURE__*/\nfunction () {\n  function MatrixModel() {\n    _classCallCheck(this, MatrixModel);\n\n    this.matrix = [];\n    this.steps = [];\n    this.matrixSize = 0;\n    this.MAX_STEPS = 10;\n    return this;\n  }\n\n  _createClass(MatrixModel, [{\n    key: \"run\",\n    value: function run(size) {\n      this.matrixSize = size;\n      this.matrix = this.generateMatrix(size);\n      var currPos = [0, 0];\n\n      for (var i = 0; i < this.MAX_STEPS; i++) {\n        currPos = this.makeSteps(currPos);\n        this.steps.push(currPos);\n      }\n\n      return this;\n    }\n  }, {\n    key: \"makeSteps\",\n    value: function makeSteps(currentPos) {\n      var _this = this;\n\n      var isSafe = function isSafe(y, x) {\n        if (_this.matrix[y] && _this.matrix[y][x] !== undefined) {\n          return [y, x];\n        }\n\n        return false;\n      };\n\n      var check = function check(y, x) {\n        var cors = false;\n\n        switch (_this.range(1, 4)) {\n          case 1:\n            // left\n            cors = isSafe(y, x - 1);\n            break;\n\n          case 2:\n            // right\n            cors = isSafe(y, x + 1);\n            break;\n\n          case 3:\n            // top\n            cors = isSafe(y - 1, x);\n            break;\n\n          case 4:\n            // bottom\n            cors = isSafe(y + 1, x);\n            break;\n        }\n\n        return cors;\n      };\n\n      var randomStep = function randomStep(currPos) {\n        var _currPos = _slicedToArray(currPos, 2),\n            y = _currPos[0],\n            x = _currPos[1];\n\n        var cors = check(y, x);\n\n        while (!Array.isArray(cors)) {\n          cors = check(y, x);\n        }\n\n        return cors;\n      };\n\n      return randomStep(currentPos);\n    }\n  }, {\n    key: \"getArrows\",\n    value: function getArrows() {\n      return this.getWords();\n    }\n  }, {\n    key: \"getRandomPoint\",\n    value: function getRandomPoint(matrixSize) {\n      var _matrixSize = _slicedToArray(matrixSize, 2),\n          y = _matrixSize[0],\n          x = _matrixSize[1];\n\n      return [this.range(1, y), this.range(1, x)];\n    }\n  }, {\n    key: \"range\",\n    value: function range(min, max) {\n      return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);\n    }\n  }, {\n    key: \"generateMatrix\",\n    value: function generateMatrix(size) {\n      var _size = _slicedToArray(size, 2),\n          y = _size[0],\n          x = _size[1];\n\n      var sMatrix = [];\n\n      for (var i = 0; i < y; i++) {\n        sMatrix[i] = [];\n\n        for (var j = 0; j < x; j++) {\n          sMatrix[i][j] = -1;\n        }\n      }\n\n      return sMatrix.map(function (row) {\n        return row.slice();\n      });\n    }\n  }, {\n    key: \"getWords\",\n    value: function getWords() {\n      var path = [];\n      var current = [0, 0]; //this.steps.shift()\n\n      var translate = function translate(currentPoint, movePos) {\n        var _currentPoint = _slicedToArray(currentPoint, 2),\n            cY = _currentPoint[0],\n            cX = _currentPoint[1];\n\n        var _movePos = _slicedToArray(movePos, 2),\n            mY = _movePos[0],\n            mX = _movePos[1];\n\n        if (cY === mY - 1 && cX === mX) {\n          path.push({\n            name: \"DOWN\",\n            \"class\": \"arrow-down\",\n            cors: [mY, mX]\n          });\n          return [mY, mX];\n        }\n\n        if (cY === mY && cX + 1 === mX) {\n          path.push({\n            name: \"RIGHT\",\n            \"class\": \"arrow-right\",\n            cors: [mY, mX]\n          });\n          return [mY, mX];\n        }\n\n        if (cY === mY + 1 && cX === mX) {\n          path.push({\n            name: \"UP\",\n            \"class\": \"arrow-up\",\n            cors: [mY, mX]\n          });\n          return [mY, mX];\n        }\n\n        if (cY === mY && cX - 1 === mX) {\n          path.push({\n            name: \"LEFT\",\n            \"class\": \"arrow-left\",\n            cors: [mY, mX]\n          });\n          return [mY, mX];\n        }\n\n        return [mY, mX];\n      };\n\n      while (this.steps.length > 0) {\n        var movePos = this.steps.shift();\n        current = translate(current, movePos);\n      }\n\n      return path;\n    }\n  }]);\n\n  return MatrixModel;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MatrixModel);\n\n//# sourceURL=webpack:///./src/js/libs/matrixModel.js?");

/***/ }),

/***/ "./src/sass/main.sass":
/*!****************************!*\
  !*** ./src/sass/main.sass ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/sass/main.sass?");

/***/ })

/******/ });