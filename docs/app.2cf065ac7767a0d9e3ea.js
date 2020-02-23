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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_main_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/main.sass */ \"./src/sass/main.sass\");\n/* harmony import */ var _sass_main_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_main_sass__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_matrixModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libs/matrixModel */ \"./src/js/libs/matrixModel.js\");\n/* harmony import */ var _libs_mapView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./libs/mapView */ \"./src/js/libs/mapView.js\");\n/* harmony import */ var _libs_gameCtrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./libs/gameCtrl */ \"./src/js/libs/gameCtrl.js\");\n\n\n\n\nvar controller = new _libs_gameCtrl__WEBPACK_IMPORTED_MODULE_3__[\"default\"](_libs_matrixModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _libs_mapView__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/libs/gameCtrl.js":
/*!*********************************!*\
  !*** ./src/js/libs/gameCtrl.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar GameCtrl =\n/*#__PURE__*/\nfunction () {\n  function GameCtrl(model, view) {\n    _classCallCheck(this, GameCtrl);\n\n    this.view = new view();\n    this.model = new model();\n    this.isChecked = false;\n    this.setupStartEvent();\n  }\n\n  _createClass(GameCtrl, [{\n    key: \"setupStartEvent\",\n    value: function setupStartEvent() {\n      var _this = this;\n\n      var startGameBtn = this.view.getSelector(\"startGame\");\n      startGameBtn.addEventListener(\"click\", function () {\n        return _this.startGame();\n      });\n    }\n  }, {\n    key: \"setupCellEvent\",\n    value: function setupCellEvent() {\n      var _this2 = this;\n\n      var cells = this.view.getSelector('mapCells');\n      cells.forEach(function (cell, index) {\n        cell.addEventListener(\"click\", function (e) {\n          return _this2.checkWinner(e);\n        });\n      });\n    }\n  }, {\n    key: \"setupNewGameEvent\",\n    value: function setupNewGameEvent() {\n      var _this3 = this;\n\n      var btn = this.view.getNewGameBtn();\n      btn.addEventListener(\"click\", function () {\n        _this3.restart();\n      });\n    }\n  }, {\n    key: \"checkWinner\",\n    value: function checkWinner(e) {\n      var _this4 = this;\n\n      if (this.isChecked) {\n        return;\n      }\n\n      var clicked = e.target;\n      var goalCell = this.view.getEndPoint();\n\n      if (clicked == this.view.getStartPoint()) {\n        return;\n      }\n\n      if (clicked === goalCell) {\n        this.view.showPopup(\"winner\", function () {\n          _this4.view.markWinner();\n\n          _this4.view.show('uiBtn');\n        });\n      } else {\n        this.view.showPopup(\"fail\", function () {\n          _this4.view.markLooser(clicked);\n\n          _this4.view.show('uiBtn');\n        });\n      }\n\n      this.setupNewGameEvent();\n      this.isChecked = true;\n    }\n  }, {\n    key: \"startGame\",\n    value: function startGame() {\n      this.view.hide('welcomeBlock');\n      this.view.show(\"uiBlock\");\n      var nSize = this.model.range(3, 6);\n      var startPoint = [this.model.range(0, nSize - 1), this.model.range(0, nSize - 1)];\n      var size = [nSize, nSize];\n      var path = this.model.run(startPoint, size).getArrows();\n      var endPos = path[path.length - 1].cors;\n      this.view.init(startPoint, size);\n      this.view.setEnd(endPos);\n      this.setupCellEvent();\n      this.view.startArrows(path);\n    }\n  }, {\n    key: \"restart\",\n    value: function restart() {\n      location.reload();\n    }\n  }]);\n\n  return GameCtrl;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameCtrl);\n\n//# sourceURL=webpack:///./src/js/libs/gameCtrl.js?");

/***/ }),

/***/ "./src/js/libs/mapView.js":
/*!********************************!*\
  !*** ./src/js/libs/mapView.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar MapView =\n/*#__PURE__*/\nfunction () {\n  function MapView() {\n    _classCallCheck(this, MapView);\n\n    // shortcut\n    var el = function el(selector) {\n      return document.querySelector(selector);\n    };\n\n    this.el = {\n      header: el('.hero-heading'),\n      mapRoot: el(\"#map\"),\n      mapWrapper: el('#map-wrapper'),\n      uiBlock: el(\".ui-block\"),\n      arrowsBlock: el(\"#arrows-block\"),\n      arrows: el(\"#arrows\"),\n      popup: el(\"#popup\"),\n      uiBtn: el(\"#ui-btn\"),\n      startGame: el(\"#start-game\"),\n      welcomeBlock: el(\".welcome\"),\n      mapCells: [],\n      arrowsCells: [],\n      startPoint: 0,\n      endPos: 0,\n      newGame: 0\n    };\n    this.ARROWS_SIZE = 10;\n  }\n\n  _createClass(MapView, [{\n    key: \"init\",\n    value: function init(start, size) {\n      this.renderMap(size);\n      this.setStart(start);\n      this.renderArrowMap();\n    }\n  }, {\n    key: \"getNewGameBtn\",\n    value: function getNewGameBtn() {\n      return document.querySelector('#new-game');\n    }\n  }, {\n    key: \"getVideoTag\",\n    value: function getVideoTag(file, cl) {\n      var video = document.createElement(\"video\");\n      var source = document.createElement(\"source\");\n      video.setAttribute('preload', 'auto');\n      video.classList.add(cl);\n      source.src = file;\n      video.append(source);\n      return video;\n    }\n  }, {\n    key: \"showPopup\",\n    value: function showPopup(mode, cb) {\n      var video = \"\";\n\n      if (mode == 'winner') {\n        video = this.getVideoTag(\"video/win.mp4\", 'video-win');\n      }\n\n      if (mode == 'fail') {\n        video = this.getVideoTag(\"video/fail.mp4\", 'video-fail');\n      }\n\n      this.hide('arrows');\n      this.show('popup');\n      this.el.popup.append(video);\n\n      video.onended = function () {\n        return cb();\n      };\n\n      video.play();\n    }\n  }, {\n    key: \"markWinner\",\n    value: function markWinner() {\n      this.el.endPos.classList.add('win-pos');\n      document.querySelector('#game-result').innerHTML = 'Вы помогли Арнольду :)';\n    }\n  }, {\n    key: \"markLooser\",\n    value: function markLooser(e) {\n      e.classList.add('fail-pos');\n      document.querySelector(\"#game-result\").innerHTML = \"Вы не помогли Арнольду :(\";\n    }\n  }, {\n    key: \"getSelector\",\n    value: function getSelector(selector) {\n      return this.el[selector];\n    }\n  }, {\n    key: \"hide\",\n    value: function hide(selector) {\n      this.el[selector].classList.remove('show');\n      this.el[selector].classList.toggle('hide');\n    }\n  }, {\n    key: \"show\",\n    value: function show(selector) {\n      this.el[selector].classList.remove('hide');\n      this.el[selector].classList.toggle('show');\n    }\n  }, {\n    key: \"renderMap\",\n    value: function renderMap(size) {\n      this.el.mapTable = document.createElement(\"table\");\n      this.el.mapTable.classList.add(\"map-table\");\n\n      var _size = _slicedToArray(size, 2),\n          cols = _size[0],\n          rows = _size[1];\n\n      for (var i = 0; i < cols; i++) {\n        var tr = document.createElement(\"tr\");\n        tr.classList.add(\"map-row\");\n\n        for (var j = 0; j < rows; j++) {\n          var td = document.createElement(\"td\");\n          td.classList.add(\"map-cell\");\n          td.style.width = 100 / rows + \"%\";\n          td.style.height = 100 / cols + \"%\";\n          this.el.mapCells.push(td);\n          tr.append(td);\n        }\n\n        this.el.mapTable.append(tr);\n      }\n\n      this.el.mapWrapper.append(this.el.mapTable);\n      return this;\n    }\n  }, {\n    key: \"reset\",\n    value: function reset() {\n      this.el.mapWrapper.innerHTML = '';\n      this.el.arrows.innerHTML = '';\n      return this;\n    }\n  }, {\n    key: \"startArrows\",\n    value: function startArrows(path) {\n      this.el.arrowsCells.forEach(function (el, i) {\n        setTimeout(function () {\n          el.classList.add(path[i][\"class\"]);\n        }, i * 800);\n      });\n      return this;\n    }\n  }, {\n    key: \"renderArrowMap\",\n    value: function renderArrowMap() {\n      var table = document.createElement(\"table\");\n      table.classList.add(\"arrow-table\");\n      var cols = this.ARROWS_SIZE / 5;\n      var rows = this.ARROWS_SIZE / 2;\n\n      for (var i = 0; i < cols; i++) {\n        var tr = document.createElement(\"tr\");\n        tr.classList.add(\"arrow-row\");\n\n        for (var j = 0; j < rows; j++) {\n          var td = document.createElement('td');\n          td.classList.add(\"arrow-cell\");\n          this.el.arrowsCells.push(td);\n          tr.append(td);\n        }\n\n        table.append(tr);\n      }\n\n      this.el.arrows.append(table);\n      return this;\n    }\n  }, {\n    key: \"setStart\",\n    value: function setStart(point) {\n      var _point = _slicedToArray(point, 2),\n          y = _point[0],\n          x = _point[1];\n\n      var startPoint = this.el.mapWrapper.querySelectorAll(\".start-point\");\n\n      if (startPoint.length != 0) {\n        this.el.mapWrapper.querySelector(\".start-point\").classList.remove(\"start-point\");\n      }\n\n      this.el.startPoint = this.el.mapWrapper.querySelectorAll('.map-row')[y].querySelectorAll('.map-cell')[x];\n      this.el.startPoint.classList.add('start-point');\n      return this;\n    }\n  }, {\n    key: \"setEnd\",\n    value: function setEnd(endPos) {\n      var _endPos = _slicedToArray(endPos, 2),\n          y = _endPos[0],\n          x = _endPos[1];\n\n      this.el.endPos = this.el.mapWrapper.querySelectorAll('.map-row')[y].querySelectorAll('.map-cell')[x];\n      this.el.endPos.classList.add('end-point');\n    }\n  }, {\n    key: \"getStartPoint\",\n    value: function getStartPoint() {\n      return this.el.startPoint;\n    }\n  }, {\n    key: \"getEndPoint\",\n    value: function getEndPoint() {\n      return this.el.endPos;\n    }\n  }]);\n\n  return MapView;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MapView);\n\n//# sourceURL=webpack:///./src/js/libs/mapView.js?");

/***/ }),

/***/ "./src/js/libs/matrixModel.js":
/*!************************************!*\
  !*** ./src/js/libs/matrixModel.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar MatrixModel =\n/*#__PURE__*/\nfunction () {\n  function MatrixModel() {\n    _classCallCheck(this, MatrixModel);\n\n    this.matrix = [];\n    this.steps = [];\n    this.matrixSize = 0;\n    this.MAX_STEPS = 10;\n    this.startPoint = [];\n    return this;\n  }\n\n  _createClass(MatrixModel, [{\n    key: \"run\",\n    value: function run(startPoint, size) {\n      this.matrixSize = size;\n      this.matrix = this.generateMatrix(size);\n      var currPos = startPoint;\n      this.startPoint = startPoint;\n\n      for (var i = 0; i < this.MAX_STEPS; i++) {\n        currPos = this.makeSteps(currPos);\n        this.steps.push(currPos);\n      }\n\n      return this;\n    }\n  }, {\n    key: \"makeSteps\",\n    value: function makeSteps(currentPos) {\n      var _this = this;\n\n      var isSafe = function isSafe(y, x) {\n        if (_this.matrix[y] && _this.matrix[y][x] !== undefined) {\n          return [y, x];\n        }\n\n        return false;\n      };\n\n      var check = function check(y, x) {\n        var cors = false;\n\n        switch (_this.range(1, 4)) {\n          case 1:\n            // left\n            cors = isSafe(y, x - 1);\n            break;\n\n          case 2:\n            // right\n            cors = isSafe(y, x + 1);\n            break;\n\n          case 3:\n            // top\n            cors = isSafe(y - 1, x);\n            break;\n\n          case 4:\n            // bottom\n            cors = isSafe(y + 1, x);\n            break;\n        }\n\n        return cors;\n      };\n\n      var randomStep = function randomStep(currPos) {\n        var _currPos = _slicedToArray(currPos, 2),\n            y = _currPos[0],\n            x = _currPos[1];\n\n        var cors = check(y, x);\n\n        while (!Array.isArray(cors)) {\n          cors = check(y, x);\n        }\n\n        return cors;\n      };\n\n      return randomStep(currentPos);\n    }\n  }, {\n    key: \"getArrows\",\n    value: function getArrows() {\n      return this.getWords();\n    }\n  }, {\n    key: \"setEndPoint\",\n    value: function setEndPoint(point) {\n      this.endPoint = point;\n    }\n  }, {\n    key: \"getRandomPoint\",\n    value: function getRandomPoint(matrixSize) {\n      var _matrixSize = _slicedToArray(matrixSize, 2),\n          y = _matrixSize[0],\n          x = _matrixSize[1];\n\n      return [this.range(1, y), this.range(1, x)];\n    }\n  }, {\n    key: \"range\",\n    value: function range(min, max) {\n      return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);\n    }\n  }, {\n    key: \"generateMatrix\",\n    value: function generateMatrix(size) {\n      var _size = _slicedToArray(size, 2),\n          y = _size[0],\n          x = _size[1];\n\n      var sMatrix = [];\n\n      for (var i = 0; i < y; i++) {\n        sMatrix[i] = [];\n\n        for (var j = 0; j < x; j++) {\n          sMatrix[i][j] = -1;\n        }\n      }\n\n      return sMatrix.map(function (row) {\n        return row.slice();\n      });\n    }\n  }, {\n    key: \"getWords\",\n    value: function getWords() {\n      var path = [];\n      var current = this.startPoint;\n\n      var translate = function translate(currentPoint, movePos) {\n        var _currentPoint = _slicedToArray(currentPoint, 2),\n            cY = _currentPoint[0],\n            cX = _currentPoint[1];\n\n        var _movePos = _slicedToArray(movePos, 2),\n            mY = _movePos[0],\n            mX = _movePos[1];\n\n        if (cY === mY - 1 && cX === mX) {\n          path.push({\n            name: \"DOWN\",\n            \"class\": \"arrow-down\",\n            cors: [mY, mX]\n          });\n          return [mY, mX];\n        }\n\n        if (cY === mY && cX + 1 === mX) {\n          path.push({\n            name: \"RIGHT\",\n            \"class\": \"arrow-right\",\n            cors: [mY, mX]\n          });\n          return [mY, mX];\n        }\n\n        if (cY === mY + 1 && cX === mX) {\n          path.push({\n            name: \"UP\",\n            \"class\": \"arrow-up\",\n            cors: [mY, mX]\n          });\n          return [mY, mX];\n        }\n\n        if (cY === mY && cX - 1 === mX) {\n          path.push({\n            name: \"LEFT\",\n            \"class\": \"arrow-left\",\n            cors: [mY, mX]\n          });\n          return [mY, mX];\n        }\n\n        return [mY, mX];\n      };\n\n      while (this.steps.length > 0) {\n        var movePos = this.steps.shift();\n        current = translate(current, movePos);\n      }\n\n      return path;\n    }\n  }]);\n\n  return MatrixModel;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MatrixModel);\n\n//# sourceURL=webpack:///./src/js/libs/matrixModel.js?");

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