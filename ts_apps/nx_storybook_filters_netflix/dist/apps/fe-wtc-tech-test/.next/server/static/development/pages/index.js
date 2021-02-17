module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../libs/ui/src/index.ts":
/*!****************************************************************************!*\
  !*** /Users/gilg/dev/job_tests/fe-tech-test-greg-gil/libs/ui/src/index.ts ***!
  \****************************************************************************/
/*! exports provided: Progress, Button, ButtonLink, ExternalButtonLink, VisibilityIcon, VisibilityOffIcon, FavoriteIcon, FavoriteBorderIcon, StarIcon, StarBorderIcon, StarHalfIcon, ExpandMoreIcon, ExpandLessIcon, Grid, DetailsBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_progress_progress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/progress/progress */ "../../libs/ui/src/lib/progress/progress.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return _lib_progress_progress__WEBPACK_IMPORTED_MODULE_0__["Progress"]; });

/* harmony import */ var _lib_button_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/button/button */ "../../libs/ui/src/lib/button/button.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _lib_button_button__WEBPACK_IMPORTED_MODULE_1__["Button"]; });

/* harmony import */ var _lib_buttonLink_buttonLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/buttonLink/buttonLink */ "../../libs/ui/src/lib/buttonLink/buttonLink.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonLink", function() { return _lib_buttonLink_buttonLink__WEBPACK_IMPORTED_MODULE_2__["ButtonLink"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExternalButtonLink", function() { return _lib_buttonLink_buttonLink__WEBPACK_IMPORTED_MODULE_2__["ExternalButtonLink"]; });

/* harmony import */ var _lib_icons_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/icons/icons */ "../../libs/ui/src/lib/icons/icons.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisibilityIcon", function() { return _lib_icons_icons__WEBPACK_IMPORTED_MODULE_3__["VisibilityIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisibilityOffIcon", function() { return _lib_icons_icons__WEBPACK_IMPORTED_MODULE_3__["VisibilityOffIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FavoriteIcon", function() { return _lib_icons_icons__WEBPACK_IMPORTED_MODULE_3__["FavoriteIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FavoriteBorderIcon", function() { return _lib_icons_icons__WEBPACK_IMPORTED_MODULE_3__["FavoriteBorderIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StarIcon", function() { return _lib_icons_icons__WEBPACK_IMPORTED_MODULE_3__["StarIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StarBorderIcon", function() { return _lib_icons_icons__WEBPACK_IMPORTED_MODULE_3__["StarBorderIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StarHalfIcon", function() { return _lib_icons_icons__WEBPACK_IMPORTED_MODULE_3__["StarHalfIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpandMoreIcon", function() { return _lib_icons_icons__WEBPACK_IMPORTED_MODULE_3__["ExpandMoreIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpandLessIcon", function() { return _lib_icons_icons__WEBPACK_IMPORTED_MODULE_3__["ExpandLessIcon"]; });

/* harmony import */ var _lib_grid_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/grid/grid */ "../../libs/ui/src/lib/grid/grid.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return _lib_grid_grid__WEBPACK_IMPORTED_MODULE_4__["Grid"]; });

/* harmony import */ var _lib_detailsBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/detailsBox */ "../../libs/ui/src/lib/detailsBox/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsBox", function() { return _lib_detailsBox__WEBPACK_IMPORTED_MODULE_5__["DetailsBox"]; });








/***/ }),

/***/ "../../libs/ui/src/lib/button/button.tsx":
/*!*****************************************************************************************!*\
  !*** /Users/gilg/dev/job_tests/fe-tech-test-greg-gil/libs/ui/src/lib/button/button.tsx ***!
  \*****************************************************************************************/
/*! exports provided: Button, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Button = props => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], props, props.children);
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "../../libs/ui/src/lib/buttonLink/buttonLink.tsx":
/*!*************************************************************************************************!*\
  !*** /Users/gilg/dev/job_tests/fe-tech-test-greg-gil/libs/ui/src/lib/buttonLink/buttonLink.tsx ***!
  \*************************************************************************************************/
/*! exports provided: ButtonLink, ExternalButtonLink, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonLink", function() { return ButtonLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalButtonLink", function() { return ExternalButtonLink; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../index */ "../../libs/ui/src/index.ts");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Link = Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((props, ref) => {
  const {
    children
  } = props,
        rest = _objectWithoutProperties(props, ["children"]);

  return __jsx(_index__WEBPACK_IMPORTED_MODULE_2__["Button"], _extends({
    innerRef: ref
  }, rest), children);
});
const ButtonLink = props => {
  const {
    children,
    href
  } = props,
        rest = _objectWithoutProperties(props, ["children", "href"]);

  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: href,
    passHref: true
  }, __jsx(Link, rest, children));
};
const ExternalButtonLink = props => {
  const {
    children,
    href
  } = props,
        rest = _objectWithoutProperties(props, ["children", "href"]);

  return __jsx(_index__WEBPACK_IMPORTED_MODULE_2__["Button"], _extends({
    href: href
  }, rest), children);
};
/* harmony default export */ __webpack_exports__["default"] = (ButtonLink);

/***/ }),

/***/ "../../libs/ui/src/lib/detailsBox/index.tsx":
/*!********************************************************************************************!*\
  !*** /Users/gilg/dev/job_tests/fe-tech-test-greg-gil/libs/ui/src/lib/detailsBox/index.tsx ***!
  \********************************************************************************************/
/*! exports provided: DetailsBox, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsBox", function() { return DetailsBox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const DetailsBox = props => {
  const {
    summaryDescription,
    children
  } = props;
  return __jsx("details", null, __jsx("summary", null, summaryDescription), __jsx("pre", null, children));
};
/* harmony default export */ __webpack_exports__["default"] = (DetailsBox);

/***/ }),

/***/ "../../libs/ui/src/lib/grid/grid.tsx":
/*!*************************************************************************************!*\
  !*** /Users/gilg/dev/job_tests/fe-tech-test-greg-gil/libs/ui/src/lib/grid/grid.tsx ***!
  \*************************************************************************************/
/*! exports provided: Grid, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return Grid; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Grid = props => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], props, props.children);
/* harmony default export */ __webpack_exports__["default"] = (Grid);

/***/ }),

/***/ "../../libs/ui/src/lib/icons/icons.tsx":
/*!***************************************************************************************!*\
  !*** /Users/gilg/dev/job_tests/fe-tech-test-greg-gil/libs/ui/src/lib/icons/icons.tsx ***!
  \***************************************************************************************/
/*! exports provided: VisibilityIcon, VisibilityOffIcon, FavoriteIcon, FavoriteBorderIcon, StarIcon, StarBorderIcon, StarHalfIcon, ExpandMoreIcon, ExpandLessIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/icons/Visibility */ "@material-ui/icons/Visibility");
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "VisibilityIcon", function() { return _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var _material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/VisibilityOff */ "@material-ui/icons/VisibilityOff");
/* harmony import */ var _material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "VisibilityOffIcon", function() { return _material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_1___default.a; });
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "@material-ui/icons/Favorite");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "FavoriteIcon", function() { return _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_2___default.a; });
/* harmony import */ var _material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/FavoriteBorder */ "@material-ui/icons/FavoriteBorder");
/* harmony import */ var _material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "FavoriteBorderIcon", function() { return _material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_3___default.a; });
/* harmony import */ var _material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Star */ "@material-ui/icons/Star");
/* harmony import */ var _material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "StarIcon", function() { return _material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_4___default.a; });
/* harmony import */ var _material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/StarBorder */ "@material-ui/icons/StarBorder");
/* harmony import */ var _material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_5__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "StarBorderIcon", function() { return _material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_5___default.a; });
/* harmony import */ var _material_ui_icons_StarHalf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/StarHalf */ "@material-ui/icons/StarHalf");
/* harmony import */ var _material_ui_icons_StarHalf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_StarHalf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "StarHalfIcon", function() { return _material_ui_icons_StarHalf__WEBPACK_IMPORTED_MODULE_6___default.a; });
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "@material-ui/icons/ExpandMore");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_7__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "ExpandMoreIcon", function() { return _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_7___default.a; });
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/ExpandLess */ "@material-ui/icons/ExpandLess");
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_8__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "ExpandLessIcon", function() { return _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_8___default.a; });











/***/ }),

/***/ "../../libs/ui/src/lib/progress/progress.tsx":
/*!*********************************************************************************************!*\
  !*** /Users/gilg/dev/job_tests/fe-tech-test-greg-gil/libs/ui/src/lib/progress/progress.tsx ***!
  \*********************************************************************************************/
/*! exports provided: Progress, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return Progress; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Progress = props => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CircularProgress"], props);
/* harmony default export */ __webpack_exports__["default"] = (Progress);

/***/ }),

/***/ "../../node_modules/next/dist/client/link.js":
/*!*********************************************************************************************!*\
  !*** /Users/gilg/dev/job_tests/fe-tech-test-greg-gil/node_modules/next/dist/client/link.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../../node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../../node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "../../node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "../../node_modules/next/dist/client/router.js":
/*!***********************************************************************************************!*\
  !*** /Users/gilg/dev/job_tests/fe-tech-test-greg-gil/node_modules/next/dist/client/router.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../../node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "../../node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../../node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "../../node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "../../node_modules/next/dist/client/with-router.js":
/*!****************************************************************************************************!*\
  !*** /Users/gilg/dev/job_tests/fe-tech-test-greg-gil/node_modules/next/dist/client/with-router.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "../../node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "../../node_modules/next/dist/next-server/lib/mitt.js":
/*!******************************************************************************************************!*\
  !*** /Users/gilg/dev/job_tests/fe-tech-test-greg-gil/node_modules/next/dist/next-server/lib/mitt.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "../../node_modules/next/dist/next-server/lib/router-context.js":
/*!****************************************************************************************************************!*\
  !*** /Users/gilg/dev/job_tests/fe-tech-test-greg-gil/node_modules/next/dist/next-server/lib/router-context.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "../../node_modules/next/dist/next-server/lib/router/router.js":
/*!***************************************************************************************************************!*\
  !*** /Users/gilg/dev/job_tests/fe-tech-test-greg-gil/node_modules/next/dist/next-server/lib/router/router.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "../../node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "../../node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "../../node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "../../node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "../../node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "../../node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!*************************************************************************************************************************!*\
  !*** /Users/gilg/dev/job_tests/fe-tech-test-greg-gil/node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "../../node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!****************************************************************************************************************************!*\
  !*** /Users/gilg/dev/job_tests/fe-tech-test-greg-gil/node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "../../node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!**************************************************************************************************************************!*\
  !*** /Users/gilg/dev/job_tests/fe-tech-test-greg-gil/node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "../../node_modules/next/dist/next-server/lib/utils.js":
/*!*******************************************************************************************************!*\
  !*** /Users/gilg/dev/job_tests/fe-tech-test-greg-gil/node_modules/next/dist/next-server/lib/utils.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "../../node_modules/next/link.js":
/*!*********************************************************************************!*\
  !*** /Users/gilg/dev/job_tests/fe-tech-test-greg-gil/node_modules/next/link.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "../../node_modules/next/dist/client/link.js")


/***/ }),

/***/ "../../node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**************************************************************************************************************************************!*\
  !*** /Users/gilg/dev/job_tests/fe-tech-test-greg-gil/node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "../../node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***************************************************************************************************************************************!*\
  !*** /Users/gilg/dev/job_tests/fe-tech-test-greg-gil/node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "../../node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "../../node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!***********************************************************************************************************************!*\
  !*** /Users/gilg/dev/job_tests/fe-tech-test-greg-gil/node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./app/contentComponents/Accordion/Accordion.tsx":
/*!*******************************************************!*\
  !*** ./app/contentComponents/Accordion/Accordion.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 //styles

const AccordionHeader = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button`
  display: flex;
  width: 100%;
  height: 30px;
  align-items: center;
  padding: 10px;
  justify-content: space-between;
  border: none;
  background-color: transparent;
  color: white;
  font-weight: bold;
  ${props => props.disabled && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      color: white;
    `}
  &.active {
    background-color: transparent;
  }
  &:focus {
    outline: none;
  }
`;
const AccordionContent = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  overflow: hidden;
  height: auto;
  width: 100%;
  transition: height 0.6s ease;
`;
const Chevron = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span`
  transition: transform 0.6s ease;
  &:before {
    border-style: solid;
    border-width: 0.1em 0.1em 0 0;
    content: '';
    display: inline-block;
    height: 0.45em;
    left: 0.15em;
    position: relative;
    top: 0.15em;
    transform: rotate(45deg) translate(30%, 30%);
    vertical-align: top;
    width: 0.45em;
  }

  &.active {
    transform: rotate(90deg) translate(-50%, 0);
  }
`;

function Accordion(props) {
  var _refContent$current;

  const {
    children,
    open = false,
    shevron = true,
    clickDisable = false,
    directional = false,
    title
  } = props;
  const refContent = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const {
    0: isOpen,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(open ? 'active' : '');
  return __jsx("div", {
    className: "accordion"
  }, (directional && !isOpen || !directional) && __jsx(AccordionHeader, {
    className: `accordionHeader ${isOpen}`,
    onClick: () => {
      setOpen(!isOpen ? 'active' : '');
    },
    disabled: clickDisable
  }, __jsx("span", {
    className: "accordionTitle"
  }, title), shevron && __jsx(Chevron, {
    className: `${isOpen}`
  })), __jsx(AccordionContent, {
    ref: refContent,
    style: {
      height: `${isOpen !== '' ? Number((_refContent$current = refContent.current) === null || _refContent$current === void 0 ? void 0 : _refContent$current.scrollHeight) : 0}px`
    }
  }, children, directional && __jsx(AccordionHeader, {
    className: `accordionHeader ${isOpen}`,
    onClick: () => {
      setOpen(!isOpen ? 'active' : '');
    },
    disabled: clickDisable
  }, __jsx("span", {
    className: "accordionTitle"
  }, 'See less'))));
}

/* harmony default export */ __webpack_exports__["default"] = (Accordion);

/***/ }),

/***/ "./app/contentComponents/Card/Card.tsx":
/*!*********************************************!*\
  !*** ./app/contentComponents/Card/Card.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _RatingStarComp_Rating__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../RatingStarComp/Rating */ "./app/contentComponents/RatingStarComp/Rating.tsx");
/* harmony import */ var _IconsStateManagement_IconsStateManagement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IconsStateManagement/IconsStateManagement */ "./app/contentComponents/Card/IconsStateManagement/IconsStateManagement.tsx");
/* harmony import */ var _pages_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../pages/index */ "./pages/index.tsx");
/* harmony import */ var _CardUtills_calculateAvarageRating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CardUtills/calculateAvarageRating */ "./app/contentComponents/Card/CardUtills/calculateAvarageRating.ts");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}


 //custom





const cardColorMapping = {
  default: '#FFF',
  savedNotWatched: '#ED6606',
  watchedAndSaved: '#049452',
  watchedNotSaved: '#EEC907'
};
const CardContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.color || cardColorMapping.default};
  /* align-items: center; */
  max-width: 200px;
  max-height: 300px;
  border-radius: 20px;
  /* justify-content: center; */
  margin: 10px;
  -webkit-box-shadow: -1px 0px 21px -5px rgba(0, 0, 0, 0.53);
  -moz-box-shadow: -1px 0px 21px -5px rgba(0, 0, 0, 0.53);
  box-shadow: -1px 0px 21px -5px rgba(0, 0, 0, 0.53);
`;
const Poster = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  border-radius: 10px;
  width: 150px;
  margin: 0 auto;
`;
const PosterImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 150px;
  height: 221px;
  border-radius: 10px;
  background-image: url(${props => props.imgURL});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;
const CardHeader = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 10px 0px 10px;
`;
const CardFooter = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 100%;
  padding-top: 7px;
`;

function Card({
  cardId
}) {
  const {
    0: backgroundColor,
    1: setBgColor
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(cardColorMapping.default);
  const {
    0: count,
    1: setCount
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  /*
      useCallback(()={},[depends]) and useMemo(()=>{}(),[depends]) 
      and 
      React.memo(ChildComponent) they are somehow related to each other
     
     HOW ?
     useCallBack and useMemo will memoized function so it is unique so it is not being re-created
     with next update of functional component (** explanation below **)
      The child component if also has to stay controlled , so it wont re-render
     unnecessary it needs to have props change check, and this is what React.Memo()
     HOC does. 
       let init = 0
      const callToAction1 = () => {
        init = init + 2
        callToActionCardCount(init)
      };
       if we don t use React.memo() let init = 0 will be called 
      every time component update messing up the counter every time resets to 0. Wrapping 
      with React.memo(component) will prevent unnecessary re-render. Will only re-render if props has changed
      but not otherwise.
       However if we don t care about re-renders and use useState() hook then hook keeps track of 
      value change we count on and re-render doesn t  matter at all for it value.
      Simply useState keeps track of the value we using independently. then React.Memo() is unnecessary
       const [count, setCount] = useState(0);
      const callToAction1 = () => {
        setCount(count + 1)
        callToActionCardCount(count)
      };
  */

  /*
       (** explanation **)
      how javascript creates Objects
      in javascript World if Object has been re-created  (functions are as well objects)
     even with the same name, args etc ...in reality it is not the SAME! 
     because it was re-created again with the same 
     name but with different memory allocations. So the only way to make sure the 
     function is locked is to wrap it with useCallback or useMemo, due to the fact the 
     hook component will re-render everything every time it updates something.
  
  */
  //register setColor once and dont re-render
  // const setColor = useCallback(({ watch, favorite }) => {

  const setColor = ({
    watch,
    favorite
  }) => {
    switch (true) {
      case !watch && !favorite:
        setBgColor(cardColorMapping.default);
        console.log('cardColorMapping.default');
        break;

      case watch && !favorite:
        setBgColor(cardColorMapping.watchedNotSaved);
        break;

      case !watch && favorite:
        setBgColor(cardColorMapping.savedNotWatched);
        break;

      case watch && favorite:
        setBgColor(cardColorMapping.watchedAndSaved);
        break;

      default:
        break;
    }
  }; //}, []);


  const increaseCount = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(value => {
    setCount(value);
  }, []);
  const {
    movies
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_pages_index__WEBPACK_IMPORTED_MODULE_4__["MoviesContext"]);
  const {
    Watched,
    Saved,
    Title,
    Poster: PosterURL,
    Ratings
  } = movies[cardId];
  const movieStatus = {
    watch: JSON.parse(Watched.toLowerCase()),
    favorite: JSON.parse(Saved.toLowerCase())
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setColor(_objectSpread({}, movieStatus));
  }, []);
  return __jsx(CardContainer, {
    color: backgroundColor,
    key: Title
  }, __jsx("p", null, `count:${count}`), __jsx(CardHeader, null, __jsx(_IconsStateManagement_IconsStateManagement__WEBPACK_IMPORTED_MODULE_3__["default"] //callToActionCardColor={setColor}
  , _extends({
    callToActionCardCount: increaseCount
  }, movieStatus))), __jsx(Poster, null, __jsx(PosterImage, {
    imgURL: PosterURL
  })), __jsx(CardFooter, null, __jsx(_RatingStarComp_Rating__WEBPACK_IMPORTED_MODULE_2__["default"], {
    rating: Object(_CardUtills_calculateAvarageRating__WEBPACK_IMPORTED_MODULE_5__["calculateAvarageRatings"])(Ratings)
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./app/contentComponents/Card/CardUtills/calculateAvarageRating.ts":
/*!*************************************************************************!*\
  !*** ./app/contentComponents/Card/CardUtills/calculateAvarageRating.ts ***!
  \*************************************************************************/
/*! exports provided: calculateAvarageRatings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateAvarageRatings", function() { return calculateAvarageRatings; });
const calculateAvarageRatings = Ratings => {
  const percentageValue = [];
  const overAllPerc = Ratings.map(({
    Value
  }) => Value).reduce((avaragePerc, rating, index) => {
    if (rating.includes('/')) {
      const [ratio, all] = rating.split('/').map(value => Number(value));
      const calcPercentage = ratio * 100 / all;
      percentageValue.push(calcPercentage);
    }

    if (rating.includes('%')) {
      const value = rating.match(/\d+/)[0];
      const percentage = Number(value);
      percentageValue.push(percentage);
    }

    if (index === Ratings.length - 1) {
      const sumPercentage = percentageValue.reduce((acc, value) => acc + value);
      avaragePerc = sumPercentage / Ratings.length;
      const avaragePercFloat = parseFloat(String(avaragePerc)).toFixed(2);
      return Number(avaragePercFloat);
    }

    return 0;
  }, 0);
  return overAllPerc;
};

/***/ }),

/***/ "./app/contentComponents/Card/IconsStateManagement/IconsStateManagement.tsx":
/*!**********************************************************************************!*\
  !*** ./app/contentComponents/Card/IconsStateManagement/IconsStateManagement.tsx ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mono_nx_test_with_nextjs_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mono-nx-test-with-nextjs/ui */ "../../libs/ui/src/index.ts");
/* harmony import */ var _material_ui_icons_VisibilityOffOutlined__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/VisibilityOffOutlined */ "@material-ui/icons/VisibilityOffOutlined");
/* harmony import */ var _material_ui_icons_VisibilityOffOutlined__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VisibilityOffOutlined__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "@material-ui/icons/Favorite");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/FavoriteBorder */ "@material-ui/icons/FavoriteBorder");
/* harmony import */ var _material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _IconCTA_IconAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../IconCTA/IconAction */ "./app/contentComponents/IconCTA/IconAction.tsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}





 //custom


const VisibilityWatchedIcon = Object(_IconCTA_IconAction__WEBPACK_IMPORTED_MODULE_5__["default"])(_material_ui_icons_VisibilityOffOutlined__WEBPACK_IMPORTED_MODULE_2___default.a, _mono_nx_test_with_nextjs_ui__WEBPACK_IMPORTED_MODULE_1__["VisibilityIcon"]);
const VisibilitySavedIcon = Object(_IconCTA_IconAction__WEBPACK_IMPORTED_MODULE_5__["default"])(_material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_4___default.a, _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_3___default.a);
/*---------*/

const IconsStateManagement = ({
  callToActionCardColor,
  callToActionCardCount,
  watch,
  favorite
}) => {
  //initial state here at let declaration;
  console.log('watch', watch, 'favorite', favorite);
  let prevState = {
    watch,
    favorite
  };

  const callToAction = iconState => {
    callToActionCardColor(_objectSpread({}, prevState, {}, iconState));
    prevState = _objectSpread({}, prevState, {}, iconState);
  };

  let tt = 0;
  const {
    0: count,
    1: setCount
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);

  const callToAction1 = () => {
    // tt = tt + 2
    setCount(count + 1);
    callToActionCardCount(count);
  }; // callToActionCardColor({ watch, favorite });
  //initial state
  //optional to set prevState here after setting initial card colors
  //prevState = { watch, favorite }


  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
    onClick: callToAction1
  }, 'click me'), __jsx(VisibilityWatchedIcon, {
    callToAction: callToAction,
    icon: "watch",
    isActive: watch
  }), __jsx(VisibilitySavedIcon, {
    callToAction: callToAction,
    icon: "favorite",
    isActive: favorite
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconsStateManagement); //export default React.memo(IconsStateManagement);
//React.memo HOC will make sure the component will remember its props
//and only re-render the entire component body if any of props has
//changed 
//without React.memo it will re-render anyway even without a prop change
//notice this component doesn`t use hooks is simple functional components
//that check the pros changes 

/*
    from documentation:

    React.memo only checks for prop changes.
    By default it will only shallowly compare complex objects in the props object.
    If you want control over the comparison, you can also provide a custom comparison function as the second argument

*/

/***/ }),

/***/ "./app/contentComponents/FiltersGroup/FiltersGroup.tsx":
/*!*************************************************************!*\
  !*** ./app/contentComponents/FiltersGroup/FiltersGroup.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Accordion_Accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Accordion/Accordion */ "./app/contentComponents/Accordion/Accordion.tsx");
/* harmony import */ var _FiltersGroup_generateFilters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FiltersGroup/generateFilters */ "./app/contentComponents/FiltersGroup/generateFilters.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../pages/index */ "./pages/index.tsx");
/* harmony import */ var _contentComponents_Input_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../contentComponents/Input/Input */ "./app/contentComponents/Input/Input.tsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 //custom






const FilterContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div`
  display: flex;
  flex-direction: column;
  color: white;
`;

function FiltersGroup() {
  const {
    movies,
    updateState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_pages_index__WEBPACK_IMPORTED_MODULE_4__["MoviesContext"]);

  const updateViewWithFiltersResponse = (genre, filter, filterSelected) => {
    console.log(`?${genre}=${filter}`);
    console.log(`selected=${filterSelected}`);
  };

  const callToAction = genre => filter => {
    const objectValues = Object.keys(filter).map(key => {
      const keyLowerCase = key.toLowerCase();
      const value = filter[key];
      return [keyLowerCase, value];
    });
    const [filterKey, filterValue] = objectValues[0];
    updateViewWithFiltersResponse(genre.toLowerCase(), filterKey, filterValue); //updateState(yes ? 'True' : 'False');
  };

  const showFilters = 2;

  const displayFilters = (ArrOfFilters, length) => ({
    displayed: ArrOfFilters.slice(0, showFilters),
    hidden: ArrOfFilters.slice(showFilters, length)
  });

  let metaScoreStrings = '';

  const calculateMetaScore = score => {
    if (score < 60) {
      metaScoreStrings = '< 60';
    }

    if (score > 60 && score < 80) {
      metaScoreStrings = 'between 60 & 80';
    }

    if (score > 80 && score < 90) {
      metaScoreStrings = 'between 80 & 90';
    }

    if (score > 90) {
      metaScoreStrings = '> 90';
    }

    return metaScoreStrings;
  };

  const generate = value => (obj, element) => {
    if (value === 'Metascore') {
      obj = Object(_FiltersGroup_generateFilters__WEBPACK_IMPORTED_MODULE_2__["generateFilters"])(calculateMetaScore(Number(element[value])), movies.length);
      return obj;
    }

    obj = Object(_FiltersGroup_generateFilters__WEBPACK_IMPORTED_MODULE_2__["generateFilters"])(element[value], movies.length);
    return obj;
  }; //static filters


  const watched = Object.entries({
    YES: movies.filter(({
      Watched
    }) => Watched === 'True').length,
    NO: movies.filter(({
      Watched
    }) => Watched === 'False').length
  });
  const savedInWatched = Object.entries({
    YES: movies.filter(({
      Saved
    }) => Saved === 'True').length,
    NO: movies.filter(({
      Saved
    }) => Saved === 'False').length
  });
  const type = Object.entries({
    MOVIE: movies.filter(({
      Type
    }) => Type === 'movie').length,
    SERIES: movies.filter(({
      Type
    }) => Type === 'series').length
  }); //generated filters

  const metasArr = Object.entries(movies.reduce(generate('Metascore'), {}));
  const YearArr = Object.entries(movies.reduce(generate('Year'), {}));
  const genreArr = Object.entries(movies.reduce(generate('Genre'), {}));
  const actorsArr = Object.entries(movies.reduce(generate('Actors'), {}));
  const directorArr = Object.entries(movies.reduce(generate('Director'), {}));
  const metasArrFormat = displayFilters(metasArr, metasArr.length);
  const yearArrFormat = displayFilters(YearArr, YearArr.length);
  const genreArrFormat = displayFilters(genreArr, genreArr.length);
  const actorsArrFormat = displayFilters(actorsArr, actorsArr.length);
  const directorArrFormat = displayFilters(directorArr, directorArr.length);
  const filtersLabels = {
    TYPE: displayFilters(type, type.length),
    YEARS: yearArrFormat,
    METASCORE: metasArrFormat,
    GENRE: genreArrFormat,
    WATCHED: displayFilters(watched, watched.length),
    'SAVED IN WATCHED LIST': displayFilters(savedInWatched, savedInWatched.length),
    ACTORS: actorsArrFormat,
    DIRECTORS: directorArrFormat
  };
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(FilterContainer, null, Object.entries(filtersLabels).map(([title, filters]) => __jsx("div", {
    className: "accordion",
    key: title
  }, __jsx(_Accordion_Accordion__WEBPACK_IMPORTED_MODULE_1__["default"], {
    open: true,
    shevron: false,
    clickDisable: true,
    title: title
  }, __jsx("div", null, filters['displayed'].map(([key, value]) => __jsx("div", {
    key: key
  }, __jsx(_contentComponents_Input_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: key,
    value: `${key}(${value})`,
    callback: callToAction(title)
  }))))), filters['hidden'].length > 0 && __jsx(_Accordion_Accordion__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: 'see more',
    directional: true,
    shevron: false
  }, filters['hidden'].map(([key, value]) => __jsx("div", {
    key: key
  }, __jsx(_contentComponents_Input_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: key,
    value: `${key}(${value})`,
    callback: callToAction
  }))))))));
} //make sure it render only the amount of movies.length


/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(FiltersGroup));

/***/ }),

/***/ "./app/contentComponents/FiltersGroup/generateFilters.tsx":
/*!****************************************************************!*\
  !*** ./app/contentComponents/FiltersGroup/generateFilters.tsx ***!
  \****************************************************************/
/*! exports provided: generateFilters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFilters", function() { return generateFilters; });
let stringDataArg = '';
let trackIndex = 1;

const generateFilters = (stringData, numberOfIteration) => {
  stringDataArg += stringData + ',';

  function findDuplicate(arr) {
    const object = {};
    arr.forEach(function (item) {
      const trimStirng = item.trim();
      if (!object[trimStirng]) object[trimStirng] = 0;
      object[trimStirng] += 1;
    });
    return object;
  }

  if (trackIndex === numberOfIteration) {
    const trimLastComa = stringDataArg.trim().replace(/,$/, '');
    const concatenatedString = [...trimLastComa.split(',')];
    trackIndex = 1;
    stringDataArg = '';
    return findDuplicate(concatenatedString);
  } else {
    trackIndex++;
  }
};



/***/ }),

/***/ "./app/contentComponents/IconCTA/IconAction.tsx":
/*!******************************************************!*\
  !*** ./app/contentComponents/IconCTA/IconAction.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 //import useIconsState from './useIconsState';

const IconContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  cursor: pointer;
`;

const wrapperComponentMethod = (Icon1, Icon2) => ({
  callToAction,
  icon,
  isActive = false
}) => {
  const {
    0: iconVisiblity,
    1: setVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(isActive);

  const iconCTA = () => {
    setVisible(!iconVisiblity);
    callToAction({
      [icon]: !iconVisiblity
    });
  };

  return __jsx(IconContainer, {
    onClick: iconCTA
  }, !iconVisiblity && __jsx(Icon1, null), iconVisiblity && __jsx(Icon2, null));
};

/* harmony default export */ __webpack_exports__["default"] = (wrapperComponentMethod);

/***/ }),

/***/ "./app/contentComponents/Input/Input.tsx":
/*!***********************************************!*\
  !*** ./app/contentComponents/Input/Input.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Input({
  value,
  checked = false,
  callback,
  name
}) {
  const {
    0: checkedState,
    1: setcheckedState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(checked);
  return __jsx("label", {
    className: "container-checkbox"
  }, __jsx("input", {
    name: name,
    type: "checkbox",
    checked: checkedState,
    onChange: () => {
      setcheckedState(!checkedState);
      callback({
        [name]: !checkedState
      });
    }
  }), value, __jsx("span", {
    className: "checkmark"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "./app/contentComponents/RatingStarComp/Rating.tsx":
/*!*********************************************************!*\
  !*** ./app/contentComponents/RatingStarComp/Rating.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _RatingStarUtills_ratingCalculation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RatingStarUtills/ratingCalculation */ "./app/contentComponents/RatingStarComp/RatingStarUtills/ratingCalculation.tsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 //custom


const RatingContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 10px;
`;

function Rating(props) {
  const {
    rating
  } = props;
  const allStars = 5;
  const stars = Object(_RatingStarUtills_ratingCalculation__WEBPACK_IMPORTED_MODULE_2__["showStarRating"])(rating, allStars);
  const percentage = rating * allStars / 100;
  return __jsx(RatingContainer, null, stars.map((Comp, i) => __jsx(Comp, {
    key: `star${i}`
  })), __jsx("span", null, "(", String(percentage.toFixed(2)), ")"));
}

/* harmony default export */ __webpack_exports__["default"] = (Rating);

/***/ }),

/***/ "./app/contentComponents/RatingStarComp/RatingStarUtills/ratingCalculation.tsx":
/*!*************************************************************************************!*\
  !*** ./app/contentComponents/RatingStarComp/RatingStarUtills/ratingCalculation.tsx ***!
  \*************************************************************************************/
/*! exports provided: showStarRating */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showStarRating", function() { return showStarRating; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/Star */ "@material-ui/icons/Star");
/* harmony import */ var _material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_StarHalf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/StarHalf */ "@material-ui/icons/StarHalf");
/* harmony import */ var _material_ui_icons_StarHalf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_StarHalf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_StarBorderOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/StarBorderOutlined */ "@material-ui/icons/StarBorderOutlined");
/* harmony import */ var _material_ui_icons_StarBorderOutlined__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_StarBorderOutlined__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const showStarRating = (rating, allStars) => {
  const percentage = String(rating * allStars / 100);
  const calculateRating = percentage.split('.');
  const wholeStars = Number(calculateRating[0]);
  const decimalNumber = Number(calculateRating[1]);
  const halfStar = isNaN(decimalNumber) || decimalNumber === 0 ? 0 : 1;
  const emptyStars = allStars - wholeStars - halfStar;
  const startMap = {
    wholeStar: props => __jsx(_material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_1___default.a, props),
    halfStar: props => __jsx(_material_ui_icons_StarHalf__WEBPACK_IMPORTED_MODULE_2___default.a, props),
    emptyStar: props => __jsx(_material_ui_icons_StarBorderOutlined__WEBPACK_IMPORTED_MODULE_3___default.a, props)
  };
  const wholeStarts = Array(wholeStars).fill(startMap['wholeStar']);
  const halfStarts = Array(halfStar).fill(startMap['halfStar']);
  const emptyStarts = Array(emptyStars).fill(startMap['emptyStar']);
  return [...wholeStarts, ...halfStarts, ...emptyStarts];
};

/***/ }),

/***/ "./app/services/apiService.ts":
/*!************************************!*\
  !*** ./app/services/apiService.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ENV__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/ENV */ "./app/services/utils/ENV.ts");
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
} // custom




const apiService = () => {
  const errorInterceptor = response => {
    switch (response.status) {
      case 401:
      case 405:
        // events.emit('NOT_AUTHENTICATED');
        break;

      case 403:
        // events.emit('NOT_AUTHORISED');
        // break;
        // case 405:
        //   events.emit('METHOD_NOT_ALLOWED');
        break;

      default:
    }

    throw response;
  };

  const responseMiddleware = res => res;

  const requestPath = (path, params) => {
    const PATH = _utils_ENV__WEBPACK_IMPORTED_MODULE_0__["ENV_MOVIES"].BASE_URL;

    if (params && Object.keys(params).length > 1) {
      let query = '';

      for (const keys in params) {
        query += keys + '=' + params[keys] + '&';
      }

      return PATH + path + '?' + query.replace(/&$/, '').trim();
    }

    return PATH + path;
  };

  const requestInterceptor = (serviceConfig, customRequestHeaders) => {
    const requestHeaders = {
      'Content-Type': 'application/json'
    };
    let request = {
      method: serviceConfig.method,
      //mode: 'no-cors', // no-cors, *cors, same-origin
      cache: 'default',
      // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin',
      // include, *same-origin, omit
      headers: _objectSpread({}, requestHeaders, {}, customRequestHeaders)
    }; //request with body object not empty {}

    if (serviceConfig.body && Object.keys(serviceConfig.body).length > 1) {
      request = Object.assign(request, {
        //convert to JSON object
        body: JSON.stringify(serviceConfig.body)
      });
    }

    return request;
  };

  const sendRequest = async (serviceConfig, customRequestHeaders) => {
    try {
      const path = requestPath(serviceConfig.path, serviceConfig.params);
      const params = requestInterceptor(serviceConfig, customRequestHeaders);
      const response = await fetch(path, params);
      const res = await response.json();
      return responseMiddleware(res);
    } catch (err) {
      return errorInterceptor(err);
    }
  };

  const get = (path, {
    params = {}
  } = {}, {
    customRequestHeaders = {}
  } = {}) => sendRequest({
    method: 'GET',
    path,
    params
  }, customRequestHeaders);

  const post = (path, {
    body
  }, {
    customRequestHeaders = {}
  } = {}) => sendRequest({
    method: 'POST',
    path,
    body
  }, customRequestHeaders);

  const put = (path, {
    body
  }, {
    customRequestHeaders = {}
  } = {}) => sendRequest({
    method: 'PUT',
    path,
    body
  }, customRequestHeaders);

  const patch = (path, {
    body
  }, {
    customRequestHeaders = {}
  } = {}) => sendRequest({
    method: 'PATCH',
    path,
    body
  }, customRequestHeaders);

  const del = (path, {
    params
  }, {
    customRequestHeaders = {}
  } = {} //this syntax means optional with defualt {}
  ) => sendRequest({
    method: 'DELETE',
    path,
    params
  }, customRequestHeaders);

  return {
    get,
    post,
    put,
    patch,
    delete: del
  };
};

/* harmony default export */ __webpack_exports__["default"] = (apiService());

/***/ }),

/***/ "./app/services/utils/ENV.ts":
/*!***********************************!*\
  !*** ./app/services/utils/ENV.ts ***!
  \***********************************/
/*! exports provided: ENV_MOVIES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENV_MOVIES", function() { return ENV_MOVIES; });
/* eslint-disable max-len */
const ENV_MOVIES = {
  BASE_URL: 'http://localhost:3333'
};

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: MoviesContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesContext", function() { return MoviesContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_contentComponents_Card_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/contentComponents/Card/Card */ "./app/contentComponents/Card/Card.tsx");
/* harmony import */ var _app_services_apiService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/services/apiService */ "./app/services/apiService.ts");
/* harmony import */ var _app_contentComponents_FiltersGroup_FiltersGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/contentComponents/FiltersGroup/FiltersGroup */ "./app/contentComponents/FiltersGroup/FiltersGroup.tsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}


 //custom




const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: flex;
  width: 100%;
`;
const Header = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: center;
  align-items: center;
`;
const Filters = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: flex;
  max-width: 280px;
  background-color: grey;
  overflow: auto;
  align-self: flex-start;
  border-radius: 20px;
  margin-top: 10px;
  padding-top: 20px;
`;
const Movies = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  align-self: flex-start;
  flex-wrap: wrap;
`;
const initialState = {
  movies: [{
    Title: 'string',
    Poster: 'string',
    Ratings: [{}],
    key: 'string',
    Saved: 'True',
    Watched: 'False',
    Type: 'movie',
    Actors: 'string',
    Director: 'string',
    Genre: 'string',
    Year: 'string',
    Metascore: 'string'
  }],
  updateState: state => {
    console.log('....state', state);
  }
};
const MoviesContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(initialState);
const {
  Provider,
  Consumer
} = MoviesContext;
/*eslint no-case-declarations: "off"*/

const movieReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FROM_FETCH':
      return _objectSpread({}, state, {
        movies: [...action.payload]
      });

    case 'FILTER_WATCH':
      return _objectSpread({}, state, {
        movies: [...state.movies.filter(({
          Watched
        }) => Watched === action.payload)]
      });

    default:
      return state;
  }
};

const Home = () => {
  const {
    0: loading,
    1: isLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: store,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(movieReducer, initialState);
  const reduceData = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(response => {
    return response.map(({
      Title,
      Poster,
      Ratings,
      Watched,
      Saved,
      Actors,
      Director,
      Genre,
      Year,
      Type,
      Metascore
    }) => {
      return {
        Title,
        Poster,
        Ratings,
        Watched,
        Saved,
        Actors,
        Director,
        Genre,
        Year,
        Type,
        Metascore
      };
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    isLoading(true);

    const fetchData = async () => {
      const result = await _app_services_apiService__WEBPACK_IMPORTED_MODULE_3__["default"].get('/api/movies');
      const reducedData = reduceData(result);
      dispatch({
        type: 'UPDATE_FROM_FETCH',
        payload: reducedData
      });
      isLoading(false);
    };

    fetchData();
  }, [reduceData]);
  return __jsx("main", null, loading && 'movies are loading', !loading && __jsx(Provider, {
    value: _objectSpread({}, store, {
      updateState: state => dispatch({
        type: 'FILTER_WATCH',
        payload: state
      })
    })
  }, __jsx(Header, null, __jsx(Consumer, null, ({
    movies
  }) => `All (${movies.length})`)), __jsx(Wrapper, null, __jsx(Filters, null, __jsx(_app_contentComponents_FiltersGroup_FiltersGroup__WEBPACK_IMPORTED_MODULE_4__["default"], null)), __jsx(Movies, null, __jsx(Consumer, null, ({
    movies
  }) => movies.map((fields, i) => __jsx(_app_contentComponents_Card_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: fields.Title,
    cardId: i
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gilg/dev/job_tests/fe-tech-test-greg-gil/apps/fe-wtc-tech-test/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/icons/ExpandLess":
/*!************************************************!*\
  !*** external "@material-ui/icons/ExpandLess" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandLess");

/***/ }),

/***/ "@material-ui/icons/ExpandMore":
/*!************************************************!*\
  !*** external "@material-ui/icons/ExpandMore" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandMore");

/***/ }),

/***/ "@material-ui/icons/Favorite":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Favorite" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Favorite");

/***/ }),

/***/ "@material-ui/icons/FavoriteBorder":
/*!****************************************************!*\
  !*** external "@material-ui/icons/FavoriteBorder" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/FavoriteBorder");

/***/ }),

/***/ "@material-ui/icons/Star":
/*!******************************************!*\
  !*** external "@material-ui/icons/Star" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Star");

/***/ }),

/***/ "@material-ui/icons/StarBorder":
/*!************************************************!*\
  !*** external "@material-ui/icons/StarBorder" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/StarBorder");

/***/ }),

/***/ "@material-ui/icons/StarBorderOutlined":
/*!********************************************************!*\
  !*** external "@material-ui/icons/StarBorderOutlined" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/StarBorderOutlined");

/***/ }),

/***/ "@material-ui/icons/StarHalf":
/*!**********************************************!*\
  !*** external "@material-ui/icons/StarHalf" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/StarHalf");

/***/ }),

/***/ "@material-ui/icons/Visibility":
/*!************************************************!*\
  !*** external "@material-ui/icons/Visibility" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Visibility");

/***/ }),

/***/ "@material-ui/icons/VisibilityOff":
/*!***************************************************!*\
  !*** external "@material-ui/icons/VisibilityOff" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/VisibilityOff");

/***/ }),

/***/ "@material-ui/icons/VisibilityOffOutlined":
/*!***********************************************************!*\
  !*** external "@material-ui/icons/VisibilityOffOutlined" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/VisibilityOffOutlined");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map