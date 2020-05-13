webpackHotUpdate("static/development/pages/jp/work.js",{

/***/ "./components/Work/WorkTitle.js":
/*!**************************************!*\
  !*** ./components/Work/WorkTitle.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "/Users/aminakano/workspace/anakano/components/Work/WorkTitle.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var WorkTitle = function WorkTitle(_ref) {
  var title = _ref.title;
  return __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2,
      columnNumber: 3
    }
  }, title);
};

/* harmony default export */ __webpack_exports__["default"] = (WorkTitle);

/***/ }),

/***/ "./pages/jp/work.js":
/*!**************************!*\
  !*** ./pages/jp/work.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Main */ "./components/Main.js");
/* harmony import */ var _public_json_data_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/json/data.json */ "./public/json/data.json");
var _public_json_data_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../public/json/data.json */ "./public/json/data.json", 1);
/* harmony import */ var _components_Work_WorkTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Work/WorkTitle */ "./components/Work/WorkTitle.js");
var _this = undefined,
    _jsxFileName = "/Users/aminakano/workspace/anakano/pages/jp/work.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var work = _public_json_data_json__WEBPACK_IMPORTED_MODULE_3__.work;

var Page = function Page() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Main__WEBPACK_IMPORTED_MODULE_2__["default"], {
    bg: "#25252b",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(_components_Work_WorkTitle__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: work.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }), __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, "This is work")));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_MyLayout__WEBPACK_IMPORTED_MODULE_1__["default"])(Page));

/***/ })

})
//# sourceMappingURL=work.js.bfa2e3f549c355866744.hot-update.js.map