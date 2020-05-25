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
/******/ 	__webpack_require__.p = "/build";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/component/app.js":
/*!*************************************!*\
  !*** ./src/client/component/app.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/actions */ \"./src/client/redux/actions/index.js\");\n/* harmony import */ var _filter_filterPane__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter/filterPane */ \"./src/client/component/filter/filterPane.jsx\");\n/* harmony import */ var _content_contentPane__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content/contentPane */ \"./src/client/component/content/contentPane.jsx\");\n/* harmony import */ var _header_headerNav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/headerNav */ \"./src/client/component/header/headerNav.jsx\");\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n    display: flex;\\n    flex-direction: column;\\n    \\n    height: 100%;\\n    width: 78vw;\\n    display: flex;\\n    box-sizing: border-box;\\n   @media only screen and (max-width: 500px) {\\n        width:100%;\\n       };\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n    display: flex;\\n    justify-content: space-around;\\n    @media only screen and (max-width: 500px) {\\n        display: block;\\n       };\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\n\n\n\n\nvar MainSection = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.section(_templateObject());\nvar SubSection = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.section(_templateObject2());\n\nvar App = function App() {\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    dispatch(_redux_actions__WEBPACK_IMPORTED_MODULE_3__[\"default\"].dataFetchActions.itemsFetchData());\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Characters of Rick and Morty\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MainSection, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_filter_filterPane__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubSection, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_header_headerNav__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_content_contentPane__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/client/component/app.js?");

/***/ }),

/***/ "./src/client/component/content/card/card.jsx":
/*!****************************************************!*\
  !*** ./src/client/component/content/card/card.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ \"moment\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ \"./src/client/component/content/card/styles.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n/* eslint-disable no-nested-ternary */\n\n\n\n\n\n\nvar Card = function Card(_ref) {\n  var props = _extends({}, _ref);\n\n  var displayLabels = ['status', 'species', 'gender', 'origin', 'last location'];\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__[\"CardContainer\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__[\"Image\"], {\n    src: \"\".concat(props.image)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__[\"InfoDivOnImage\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: props.name\n  }, props.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"id: \".concat(props.id, \" - created \").concat(moment__WEBPACK_IMPORTED_MODULE_2___default()(props.created, \"YYYYMMDD\").fromNow()))), displayLabels.map(function (label) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      key: label\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__[\"InfoDiv\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, label.toUpperCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, label === 'origin' ? lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(props, 'origin.name') : label === 'last location' ? lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(props, 'location.name') : props[label])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null));\n  }));\n};\n\nCard.propTypes = {\n  name: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,\n  id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number.isRequired,\n  created: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,\n  image: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\n\n//# sourceURL=webpack:///./src/client/component/content/card/card.jsx?");

/***/ }),

/***/ "./src/client/component/content/card/styles.js":
/*!*****************************************************!*\
  !*** ./src/client/component/content/card/styles.js ***!
  \*****************************************************/
/*! exports provided: InfoDiv, InfoDivOnImage, Image, CardContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InfoDiv\", function() { return InfoDiv; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InfoDivOnImage\", function() { return InfoDivOnImage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Image\", function() { return Image; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CardContainer\", function() { return CardContainer; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nfunction _templateObject4() {\n  var data = _taggedTemplateLiteral([\"\\n    display: flex;\\n    width: 100%;\\n    color: darkgray;\\n    box-sizing: border-box;\\n    padding: 0 8px 0 8px;\\n    margin: 5px 0 12px 0;\\n    div {\\n        margin-left: auto;\\n        word-break: break-all;\\n        text-align: right;\\n        color: #b57f17;\\n    }\\n    span {\\n        word-break: break-all;\\n    }\\n\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = _taggedTemplateLiteral([\"\\n    color: white;\\n    width: 100%;\\n    height: 14%;\\n    background-color: rgba(50, 51, 51, 0.4);\\n    position: absolute;\\n    top: 36%;\\n    span {\\n        margin-left: 5px;\\n    }\\n    div {\\n        margin: 10px 0px 10px 5px;\\n        font-size: 1.8rem;\\n        @media only screen and (max-width: 500px) {\\n            font-size: 1.4rem;\\n            margin-bottom: 5px;\\n        };\\n    }\\n   \\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n    height: 50%;\\n    width:100%;\\n    border-top-left-radius: 10px;\\n    border-top-right-radius: 10px;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n    width: 23%;\\n    height: auto;\\n    box-sizing: boredr-box;\\n    background: #323333;\\n    margin-top: 1%;\\n    position: relative;\\n    border-radius: 10px;\\n    hr {\\n        margin: 0 8px;\\n        opacity: 0.2;\\n    }\\n    @media only screen and (max-width: 500px) {\\n        width: 47%;\\n       };\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar CardContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject());\nvar Image = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img(_templateObject2());\nvar InfoDivOnImage = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject3());\nvar InfoDiv = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject4());\n\n\n//# sourceURL=webpack:///./src/client/component/content/card/styles.js?");

/***/ }),

/***/ "./src/client/component/content/contentPane.jsx":
/*!******************************************************!*\
  !*** ./src/client/component/content/contentPane.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _card_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card/card */ \"./src/client/component/content/card/card.jsx\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n\\n    height: 75vh;\\n    width: 78vw;\\n    display: flex;\\n    flex-wrap: wrap;\\n    justify-content: space-around;\\n    overflow: scroll;\\n    box-sizing: border-box;\\n    @media screen and (max-width: 500px)  {\\n        width:100%;\\n        height: auto;\\n       };\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\n\nvar ContainerDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject());\n\nvar ContentPane = function ContentPane() {\n  var data = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.fetchData.data;\n  });\n  var masterData = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.fetchData.masterData;\n  });\n  /*  const handleSortChange = () => {\n      if(sortDir === 0){\n          console.log('came')\n           cardData.sort((a,b) => {return b.id - a.id});\n          setData(cardData => ([ ...cardData]));\n      } else if(sortDir === 1) {\n          cardData.sort((a,b) => {return a.id - b.id});\n          setData(cardData => ([ ...cardData]));\n      }\n  }\n  useEffect(()=> {\n       handleSortChange();\n  }, [sortDir]);  */\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(Array.from(data)),\n      _useState2 = _slicedToArray(_useState, 2),\n      cardData = _useState2[0],\n      setData = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setData(data);\n  }, [data]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContainerDiv, null, cardData.length === 0 && masterData.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Loading...\"), cardData.length === 0 && masterData.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"No data for selected filters\"), cardData.length > 0 && cardData.map(function (info) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_card_card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _extends({\n      key: info.id\n    }, info));\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContentPane);\n\n//# sourceURL=webpack:///./src/client/component/content/contentPane.jsx?");

/***/ }),

/***/ "./src/client/component/filter/filterPane.jsx":
/*!****************************************************!*\
  !*** ./src/client/component/filter/filterPane.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions */ \"./src/client/redux/actions/index.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n    border: 1px solid black;\\n    margin-bottom: 10px;\\n    padding: 10px;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n\\n    height: auto;\\n    width: 20vw;\\n    box-sizing: border-box;\\n    @media only screen and (max-width: 500px)  {\\n      width: auto;\\n    \\n     };\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\n\n\nvar FilterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject());\nvar FilterContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject2());\n\nvar FilterPane = function FilterPane() {\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"])();\n  var checkboxVal = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      _useState2 = _slicedToArray(_useState, 2),\n      filterOptions = _useState2[0],\n      setFilterOptions = _useState2[1]; // const [selectedFilters, setselectedFilters] = useState([]);\n\n\n  var data = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.fetchData.masterData;\n  });\n  var removedFilter = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.fetchData.removedFilter;\n  });\n  var options = []; //options to create\n\n  var createFilterOptions = function createFilterOptions(item) {\n    item.forEach(function (i) {\n      return options.push({\n        title: i,\n        values: i === 'origin' ? lodash__WEBPACK_IMPORTED_MODULE_4___default.a.uniq(data.map(function (j) {\n          return j.origin.name;\n        })) : lodash__WEBPACK_IMPORTED_MODULE_4___default.a.uniq(data.map(function (j) {\n          return j[i];\n        }))\n      });\n    });\n  };\n\n  createFilterOptions(['species', 'gender', 'origin']);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setFilterOptions(options);\n  }, [data]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (removedFilter && removedFilter.selected === false) {\n      var selectedFilter = document.getElementById(\"\".concat(removedFilter.option));\n      selectedFilter.checked = false;\n    }\n  }, [removedFilter]);\n\n  var handleCheckbox = function handleCheckbox(event) {\n    dispatch(_redux_actions__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sortActions.filter({\n      name: event.target.value,\n      selected: event.target.checked,\n      option: event.target.id,\n      title: event.target.name\n    }));\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FilterWrapper, {\n    ref: checkboxVal\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: \"filter\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Filters\"), \"  \"), filterOptions && filterOptions.map(function (option) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FilterContainer, {\n      id: option.title,\n      key: option.title\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, lodash__WEBPACK_IMPORTED_MODULE_4___default.a.startCase(option.title)), option.values && option.values.map(function (item) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        key: \"\".concat(option.title, \"-\").concat(item)\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        type: \"checkbox\",\n        id: \"\".concat(option.title, \"-\").concat(item),\n        name: option.title,\n        value: item,\n        onChange: handleCheckbox\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n        htmlFor: item\n      }, item));\n    }));\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterPane);\n\n//# sourceURL=webpack:///./src/client/component/filter/filterPane.jsx?");

/***/ }),

/***/ "./src/client/component/header/headerNav.jsx":
/*!***************************************************!*\
  !*** ./src/client/component/header/headerNav.jsx ***!
  \***************************************************/
/*! exports provided: SelectedFilters, Search, Sort, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SelectedFilters\", function() { return SelectedFilters; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Search\", function() { return Search; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Sort\", function() { return Sort; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/actions */ \"./src/client/redux/actions/index.js\");\n/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon */ \"./src/client/component/header/icon.jsx\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ \"./src/client/component/header/styles.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\nvar HeaderNav = function HeaderNav() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__[\"HeaderDiv\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectedFilters, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__[\"ContentWrapper\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Search, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Sort, null)));\n};\n\nvar SelectedFilters = function SelectedFilters() {\n  var selectedFilters = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.fetchData.selectedFilters;\n  });\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      _useState2 = _slicedToArray(_useState, 2),\n      dataForBadges = _useState2[0],\n      setData = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setData(selectedFilters);\n  }, [selectedFilters]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__[\"SelectedFiltersWrapper\"], null, dataForBadges.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \" Selected Filter\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__[\"BadgeWrapper\"], null, dataForBadges.length > 0 && dataForBadges.map(function (option) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__[\"Badge\"], {\n      key: option.name\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, option.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      option: option\n    }));\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null)));\n};\nvar Search = function Search() {\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"])();\n  var inputVal = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n\n  var handleSearch = function handleSearch() {\n    dispatch(_redux_actions__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sortActions.search(inputVal.current.value.trim()));\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__[\"SearchWrapper\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    className: \"searchHeading\"\n  }, \"Search By Name\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    id: \"searchInput\",\n    ref: inputVal\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    type: \"button\",\n    onClick: handleSearch\n  }, \"Search\"))));\n};\nvar Sort = function Sort() {\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"])();\n\n  var handleSortChange = function handleSortChange(event) {\n    if (event.target.value === '0') {\n      dispatch(_redux_actions__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sortActions.ascending());\n    } else {\n      dispatch(_redux_actions__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sortActions.descending());\n    }\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__[\"SortDiv\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Sort by ID\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"select\", {\n    name: \"sort-characters\",\n    onChange: handleSortChange\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n    value: \"0\"\n  }, \"Ascending\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n    value: \"1\"\n  }, \"Desending\"))));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeaderNav);\n\n//# sourceURL=webpack:///./src/client/component/header/headerNav.jsx?");

/***/ }),

/***/ "./src/client/component/header/icon.jsx":
/*!**********************************************!*\
  !*** ./src/client/component/header/icon.jsx ***!
  \**********************************************/
/*! exports provided: SvgContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SvgContainer\", function() { return SvgContainer; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions */ \"./src/client/redux/actions/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n    color: rgb(0,0,0);\\n    opacity: 26%;\\n    position: relative;\\n    left: 5px;\\n    cursor: pointer;\\n    width: 1rem;\\n    height: 1rem;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\n\n\nvar SvgContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.svg(_templateObject());\n\nvar CrossIcon = function CrossIcon(_ref) {\n  var option = _ref.option;\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"])();\n\n  var handleClick = function handleClick() {\n    option.selected = false;\n    dispatch(_redux_actions__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sortActions.filter(option));\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SvgContainer, {\n    onClick: handleClick,\n    viewBox: \"0 0 24 24\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n    onClick: handleClick,\n    d: \"M12 0c6.636 0 12 5.364 12 12s-5.364 12-12 12S0 18.636 0 12 5.364 0 12 0zm6 16.308L13.692 12 18 7.692 16.308 6 12 10.308 7.692 6 6 7.692 10.308 12 6 16.308 7.692 18 12 13.692 16.308 18 18 16.308z\"\n  }));\n};\n\nCrossIcon.propTypes = {\n  option: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (CrossIcon);\n\n//# sourceURL=webpack:///./src/client/component/header/icon.jsx?");

/***/ }),

/***/ "./src/client/component/header/styles.js":
/*!***********************************************!*\
  !*** ./src/client/component/header/styles.js ***!
  \***********************************************/
/*! exports provided: HeaderDiv, BadgeWrapper, Badge, SortDiv, SearchWrapper, ContentWrapper, SelectedFiltersWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HeaderDiv\", function() { return HeaderDiv; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BadgeWrapper\", function() { return BadgeWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Badge\", function() { return Badge; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SortDiv\", function() { return SortDiv; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SearchWrapper\", function() { return SearchWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContentWrapper\", function() { return ContentWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SelectedFiltersWrapper\", function() { return SelectedFiltersWrapper; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nfunction _templateObject7() {\n  var data = _taggedTemplateLiteral([\"\\n    display: flex;\\n    flex-direction: column;\\n    h4 {\\n        margin-bottom:8px;\\n    }\\n\"]);\n\n  _templateObject7 = function _templateObject7() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject6() {\n  var data = _taggedTemplateLiteral([\"\\n    display:flex;\\n    margin-bottom:8px;\\n    flex-wrap: wrap;\\n\"]);\n\n  _templateObject6 = function _templateObject6() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject5() {\n  var data = _taggedTemplateLiteral([\"\\n       background: lightgray;\\n       border-radius: 5px;\\n       padding: 6px;\\n       display: flex;\\n       margin-right: 10px;\\n       margin-bottom: 10px;\\n       button {\\n           background: lightgray;\\n           border-radius: 5px;\\n           -moz-appearance: none;\\n           -webkit-appearance: none;\\n           appearance: none;\\n       }\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = _taggedTemplateLiteral([\"\\n       display:flex;\\n       flex-direction:column;\\n       select {\\n        -moz-appearance: none;\\n        -webkit-appearance: none;\\n        appearance: none;\\n        width: 100px;\\n        height: 30px;\\n        float:right;\\n        border-radius: 0px;\\n        padding-left: 5px;\\n       }\\n      \\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = _taggedTemplateLiteral([\"\\n       display:flex;\\n       flex-direction:column;\\n       button {\\n        -moz-appearance: none;\\n        -webkit-appearance: none;\\n        appearance: none;\\n        width: 50px;\\n        height: 36px;\\n        background: lightgray;\\n       }\\n       input {\\n        -moz-appearance: none;\\n        -webkit-appearance: none;\\n        appearance: none;\\n        width: 250px;\\n        height: 30px;\\n       }\\n      \\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n    display:flex;\\n    justify-content: space-between;\\n    flex-direction: row;  \\n    @media screen and (max-width: 500px)  {\\n       flex-direction: column;      \\n    }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n\\n    padding: 10px;\\n    box-sizing: border-box;\\n    h2 {\\n        margin-left: 10px;\\n        margin-top: 0;\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar HeaderDiv = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject());\nvar ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject2());\nvar SearchWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject3());\nvar SortDiv = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject4());\nvar Badge = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject5());\nvar BadgeWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject6());\nvar SelectedFiltersWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject7());\n\n\n//# sourceURL=webpack:///./src/client/component/header/styles.js?");

/***/ }),

/***/ "./src/client/redux/actions/data.js":
/*!******************************************!*\
  !*** ./src/client/redux/actions/data.js ***!
  \******************************************/
/*! exports provided: itemsHasErrored, itemsIsLoading, itemsFetchDataSuccess, itemsFetchData, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"itemsHasErrored\", function() { return itemsHasErrored; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"itemsIsLoading\", function() { return itemsIsLoading; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"itemsFetchDataSuccess\", function() { return itemsFetchDataSuccess; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"itemsFetchData\", function() { return itemsFetchData; });\nfunction itemsHasErrored(bool) {\n  return {\n    type: 'ITEMS_HAS_ERRORED',\n    hasError: bool\n  };\n}\nfunction itemsIsLoading(bool) {\n  return {\n    type: 'ITEMS_IS_LOADING',\n    isLoading: bool\n  };\n}\nfunction itemsFetchDataSuccess(items) {\n  return {\n    type: 'ITEMS_FETCH_DATA_SUCCESS',\n    items: items\n  };\n}\nfunction itemsFetchData() {\n  return function (dispatch) {\n    dispatch(itemsIsLoading(true));\n    var url = 'https://rickandmortyapi.com/api/character/';\n    fetch(url).then(function (response) {\n      if (!response.ok) {\n        throw Error(response.statusText);\n      }\n\n      dispatch(itemsIsLoading(false));\n      return response;\n    }).then(function (response) {\n      return response.json();\n    }).then(function (items) {\n      return dispatch(itemsFetchDataSuccess(items));\n    })[\"catch\"](function () {\n      return dispatch(itemsHasErrored(true));\n    });\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  itemsFetchData: itemsFetchData,\n  itemsFetchDataSuccess: itemsFetchDataSuccess,\n  itemsIsLoading: itemsIsLoading,\n  itemsHasErrored: itemsHasErrored\n});\n\n//# sourceURL=webpack:///./src/client/redux/actions/data.js?");

/***/ }),

/***/ "./src/client/redux/actions/index.js":
/*!*******************************************!*\
  !*** ./src/client/redux/actions/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/client/redux/actions/data.js\");\n/* harmony import */ var _searchSortFilter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./searchSortFilter */ \"./src/client/redux/actions/searchSortFilter.js\");\n\n\nvar allActions = {\n  dataFetchActions: _data__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  sortActions: _searchSortFilter__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (allActions);\n\n//# sourceURL=webpack:///./src/client/redux/actions/index.js?");

/***/ }),

/***/ "./src/client/redux/actions/searchSortFilter.js":
/*!******************************************************!*\
  !*** ./src/client/redux/actions/searchSortFilter.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar ascending = function ascending() {\n  return {\n    type: \"ASCENDING\"\n  };\n};\n\nvar descending = function descending() {\n  return {\n    type: \"DESCENDING\"\n  };\n};\n\nvar search = function search(name) {\n  return function (dispatch, getState) {\n    if (getState().fetchData.selectedFilters.length > 0 && name === '') {\n      return dispatch(filter(getState().fetchData.selectedFilters));\n    }\n\n    if (name === '' && getState().fetchData.data.length === 20) {\n      return false;\n    }\n\n    return dispatch(enterSearch(name));\n  };\n};\n\nvar enterSearch = function enterSearch(name) {\n  return {\n    type: \"SEARCH\",\n    payload: name\n  };\n};\n\nvar filter = function filter(options) {\n  return {\n    type: \"FILTER\",\n    payload: options\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  ascending: ascending,\n  descending: descending,\n  search: search,\n  filter: filter\n});\n\n//# sourceURL=webpack:///./src/client/redux/actions/searchSortFilter.js?");

/***/ }),

/***/ "./src/client/redux/configureStore.js":
/*!********************************************!*\
  !*** ./src/client/redux/configureStore.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/index */ \"./src/client/redux/reducers/index.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (preloadedState) {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_reducers_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"], preloadedState, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a));\n});\n\n//# sourceURL=webpack:///./src/client/redux/configureStore.js?");

/***/ }),

/***/ "./src/client/redux/reducers/data.js":
/*!*******************************************!*\
  !*** ./src/client/redux/reducers/data.js ***!
  \*******************************************/
/*! exports provided: fetchData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchData\", function() { return fetchData; });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar initialState = {\n  hasErrored: false,\n  isLoading: false,\n  data: [],\n  masterData: [],\n  selectedFilters: [],\n  searchField: ''\n};\nfunction fetchData() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case 'ITEMS_HAS_ERRORED':\n      return action.hasErrored;\n\n    case 'ITEMS_IS_LOADING':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoading: action.isLoading\n      });\n\n    case 'ITEMS_FETCH_DATA_SUCCESS':\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          data: action.items.results,\n          masterData: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.cloneDeep(action.items.results)\n        });\n      }\n\n    case 'ASCENDING':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        data: Array.from(state.data).sort(function (a, b) {\n          return a.id - b.id;\n        })\n      });\n\n    case 'DESCENDING':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        data: Array.from(state.data).sort(function (a, b) {\n          return b.id - a.id;\n        })\n      });\n\n    case 'SEARCH':\n      if (action.payload === '' && state.data.length !== 20 && state.selectedFilters.length === 0) {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          searchField: action.payload,\n          data: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.cloneDeep(state.masterData)\n        });\n      }\n\n      if (action.payload.length > 0 && state.selectedFilters.length > 0) {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          searchField: action.payload,\n          data: state.data.filter(function (item) {\n            return item.name.toLowerCase().includes(action.payload);\n          })\n        });\n      }\n\n      return _objectSpread(_objectSpread({}, state), {}, {\n        searchField: action.payload,\n        data: state.masterData.filter(function (item) {\n          return item.name.toLowerCase().includes(action.payload);\n        })\n      });\n\n    case 'FILTER':\n      {\n        var selectedFilters = Array.from(state.selectedFilters);\n        if (action.payload.selected) selectedFilters.push(action.payload);else {\n          var ind = selectedFilters.findIndex(function (i) {\n            return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEqual(i, action.payload);\n          });\n          if (ind >= 0) selectedFilters.splice(ind, 1);\n        }\n        var filteredData = [];\n        var items = state.searchField.length > 0 ? lodash__WEBPACK_IMPORTED_MODULE_0___default.a.cloneDeep(state.data) : lodash__WEBPACK_IMPORTED_MODULE_0___default.a.cloneDeep(state.masterData);\n        selectedFilters.forEach(function (item) {\n          filteredData.push(items.filter(function (i) {\n            return i[item.title] === item.name;\n          }));\n        });\n        var flattenData = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.flatten(filteredData);\n        var finalData = [];\n\n        if (flattenData.length > 0) {\n          finalData = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.uniq(flattenData, 'id');\n          if (state.searchField.length > 0) finalData = finalData.filter(function (item) {\n            return item.name.toLowerCase().includes(state.searchField);\n          });\n        }\n\n        return _objectSpread(_objectSpread({}, state), {}, {\n          selectedFilters: selectedFilters,\n          removedFilter: action.payload.selected ? null : action.payload,\n          data: flattenData.length > 0 ? finalData : state.masterData\n        });\n      }\n\n    default:\n      return state;\n  }\n}\n\n//# sourceURL=webpack:///./src/client/redux/reducers/data.js?");

/***/ }),

/***/ "./src/client/redux/reducers/index.js":
/*!********************************************!*\
  !*** ./src/client/redux/reducers/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/client/redux/reducers/data.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"combineReducers\"])({\n  fetchData: _data__WEBPACK_IMPORTED_MODULE_0__[\"fetchData\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);\n\n//# sourceURL=webpack:///./src/client/redux/reducers/index.js?");

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _client_redux_configureStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client/redux/configureStore */ \"./src/client/redux/configureStore.js\");\n/* harmony import */ var _client_component_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client/component/app */ \"./src/client/component/app.js\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nvar port = 3000; //Serve static files\n\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a[\"static\"]('build/public')); // This is fired every time the server side receives a request\n\napp.get('*', handleRender); // We are going to fill these out in the sections to follow\n\nfunction handleRender(req, res) {\n  // Create a new Redux store instance\n  var store = Object(_client_redux_configureStore__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({}); // Render the component to a string\n\n  var sheet = new styled_components__WEBPACK_IMPORTED_MODULE_6__[\"ServerStyleSheet\"]();\n  var html = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_5__[\"renderToString\"])(sheet.collectStyles( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"Provider\"], {\n    store: store\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_client_component_app__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null))));\n  var styles = sheet.getStyleTags(); // Grab the initial state from our Redux store\n\n  var preloadedState = store.getState(); // Send the rendered page back to the client\n\n  res.send(renderFullPage(html, styles, preloadedState));\n}\n\nfunction renderFullPage(html, styles, preloadedState) {\n  return \"\\n    <!DOCTYPE html>\\n    <html>\\n      <head>\\n        <title>Characters of Rick And Morty Show</title>\\n        \".concat(styles, \"\\n      </head>\\n      <body>\\n        <div id=\\\"root\\\">\").concat(html, \"</div>\\n        <script>\\n          // WARNING: See the following for security issues around embedding JSON in HTML:\\n          // https://redux.js.org/recipes/server-rendering/#security-considerations\\n          window.__PRELOADED_STATE__ = \").concat(JSON.stringify(preloadedState).replace(/</g, \"\\\\u003c\"), \"\\n        </script>\\n        <script src=\\\"client_bundle.js\\\"></script>\\n      </body>\\n    </html>\\n    \");\n}\n\napp.listen(port);\nconsole.log(\"Serving at http://localhost:\".concat(port));\n\n//# sourceURL=webpack:///./src/server.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");\n\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"moment\");\n\n//# sourceURL=webpack:///external_%22moment%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");\n\n//# sourceURL=webpack:///external_%22styled-components%22?");

/***/ })

/******/ });