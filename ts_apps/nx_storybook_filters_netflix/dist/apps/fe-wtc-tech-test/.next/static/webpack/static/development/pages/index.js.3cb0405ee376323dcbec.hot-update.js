webpackHotUpdate("static/development/pages/index.js",{

/***/ "./app/contentComponents/Card/IconsStateManagement/IconsStateManagement.tsx":
/*!**********************************************************************************!*\
  !*** ./app/contentComponents/Card/IconsStateManagement/IconsStateManagement.tsx ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "../../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mono_nx_test_with_nextjs_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mono-nx-test-with-nextjs/ui */ "../../libs/ui/src/index.ts");
/* harmony import */ var _material_ui_icons_VisibilityOffOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/VisibilityOffOutlined */ "../../node_modules/@material-ui/icons/VisibilityOffOutlined.js");
/* harmony import */ var _material_ui_icons_VisibilityOffOutlined__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VisibilityOffOutlined__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "../../node_modules/@material-ui/icons/Favorite.js");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/FavoriteBorder */ "../../node_modules/@material-ui/icons/FavoriteBorder.js");
/* harmony import */ var _material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _IconCTA_IconAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../IconCTA/IconAction */ "./app/contentComponents/IconCTA/IconAction.tsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

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
        Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
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





 //custom


var VisibilityWatchedIcon = Object(_IconCTA_IconAction__WEBPACK_IMPORTED_MODULE_6__["default"])(_material_ui_icons_VisibilityOffOutlined__WEBPACK_IMPORTED_MODULE_3___default.a, _mono_nx_test_with_nextjs_ui__WEBPACK_IMPORTED_MODULE_2__["VisibilityIcon"]);
var VisibilitySavedIcon = Object(_IconCTA_IconAction__WEBPACK_IMPORTED_MODULE_6__["default"])(_material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_5___default.a, _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_4___default.a);
/*---------*/

var IconsStateManagement = function IconsStateManagement(_ref) {
  var callToActionCardColor = _ref.callToActionCardColor,
      watch = _ref.watch,
      favorite = _ref.favorite; //initial state here at let declaration;

  var prevState = {
    watch: watch,
    favorite: favorite
  };

  var callToAction = function callToAction(iconState) {
    callToActionCardColor(_objectSpread({}, prevState, {}, iconState));
    prevState = _objectSpread({}, prevState, {}, iconState);
  };

  callToActionCardColor({
    watch: watch,
    favorite: favorite
  }); //initial state
  //optional to set prevState here after setting initial card colors
  //prevState = { watch, favorite }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(VisibilityWatchedIcon, {
    callToAction: callToAction,
    icon: "watch",
    isActive: watch
  }), __jsx(VisibilitySavedIcon, {
    callToAction: callToAction,
    icon: "favorite",
    isActive: favorite
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(IconsStateManagement)); //React.memo HOC will make sure the component will remember its props
//and only re-render the entire component body if any of props has
//changed 
//without React.memo it will re-render anyway even without a prop change

/*
    from documentation:

    React.memo only checks for prop changes.
    By default it will only shallowly compare complex objects in the props object.
    If you want control over the comparison, you can also provide a custom comparison function as the second argument

*/

/***/ })

})
//# sourceMappingURL=index.js.3cb0405ee376323dcbec.hot-update.js.map