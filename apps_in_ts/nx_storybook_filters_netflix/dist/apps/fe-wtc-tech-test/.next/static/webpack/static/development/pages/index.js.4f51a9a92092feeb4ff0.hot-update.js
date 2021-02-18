webpackHotUpdate("static/development/pages/index.js",{

/***/ "./app/contentComponents/Card/Card.tsx":
/*!*********************************************!*\
  !*** ./app/contentComponents/Card/Card.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _RatingStarComp_Rating__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../RatingStarComp/Rating */ "./app/contentComponents/RatingStarComp/Rating.tsx");
/* harmony import */ var _IconsStateManagement_IconsStateManagement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./IconsStateManagement/IconsStateManagement */ "./app/contentComponents/Card/IconsStateManagement/IconsStateManagement.tsx");
/* harmony import */ var _pages_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../pages/index */ "./pages/index.tsx");
/* harmony import */ var _CardUtills_calculateAvarageRating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CardUtills/calculateAvarageRating */ "./app/contentComponents/Card/CardUtills/calculateAvarageRating.ts");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  width: 100%;\n  padding-top: 7px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  padding: 10px 10px 0px 10px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  width: 150px;\n  height: 221px;\n  border-radius: 10px;\n  background-image: url(", ");\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  border-radius: 10px;\n  width: 150px;\n  margin: 0 auto;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  display: flex;\n  flex-direction: column;\n  background-color: ", ";\n  /* align-items: center; */\n  max-width: 200px;\n  max-height: 300px;\n  border-radius: 20px;\n  /* justify-content: center; */\n  margin: 10px;\n  -webkit-box-shadow: -1px 0px 21px -5px rgba(0, 0, 0, 0.53);\n  -moz-box-shadow: -1px 0px 21px -5px rgba(0, 0, 0, 0.53);\n  box-shadow: -1px 0px 21px -5px rgba(0, 0, 0, 0.53);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


 //custom





var cardColorMapping = {
  "default": '#FFF',
  savedNotWatched: '#ED6606',
  watchedAndSaved: '#049452',
  watchedNotSaved: '#EEC907'
};
var CardContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject(), function (props) {
  return props.color || cardColorMapping["default"];
});
var Poster = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject2());
var PosterImage = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject3(), function (props) {
  return props.imgURL;
});
var CardHeader = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject4());
var CardFooter = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject5());

function Card(_ref) {
  var cardId = _ref.cardId;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(cardColorMapping["default"]),
      backgroundColor = _useState[0],
      setBgColor = _useState[1]; //register setColor once and dont re-render
  // const setColor = useCallback(({ watch, favorite }) => {


  var setColor = function setColor(_ref2) {
    var watch = _ref2.watch,
        favorite = _ref2.favorite;

    switch (true) {
      case !watch && !favorite:
        setBgColor(cardColorMapping["default"]);
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


  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_pages_index__WEBPACK_IMPORTED_MODULE_6__["MoviesContext"]),
      movies = _useContext.movies;

  var _movies$cardId = movies[cardId],
      Watched = _movies$cardId.Watched,
      Saved = _movies$cardId.Saved,
      Title = _movies$cardId.Title,
      PosterURL = _movies$cardId.Poster,
      Ratings = _movies$cardId.Ratings;
  var movieStatus = {
    watch: JSON.parse(Watched.toLowerCase()),
    favorite: JSON.parse(Saved.toLowerCase())
  };
  return __jsx(CardContainer, {
    color: backgroundColor,
    key: Title
  }, __jsx(CardHeader, null, __jsx(_IconsStateManagement_IconsStateManagement__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    callToActionCardColor: setColor
  }, movieStatus))), __jsx(Poster, null, __jsx(PosterImage, {
    imgURL: PosterURL
  })), __jsx(CardFooter, null, __jsx(_RatingStarComp_Rating__WEBPACK_IMPORTED_MODULE_4__["default"], {
    rating: Object(_CardUtills_calculateAvarageRating__WEBPACK_IMPORTED_MODULE_7__["calculateAvarageRatings"])(Ratings)
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ })

})
//# sourceMappingURL=index.js.4f51a9a92092feeb4ff0.hot-update.js.map