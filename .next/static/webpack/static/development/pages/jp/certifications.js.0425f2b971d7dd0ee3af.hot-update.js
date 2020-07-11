webpackHotUpdate("static/development/pages/jp/certifications.js",{

/***/ "./node_modules/global/window.js":
/*!***************************************!*\
  !*** ./node_modules/global/window.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var win;

if (typeof window !== "undefined") {
    win = window;
} else if (typeof global !== "undefined") {
    win = global;
} else if (typeof self !== "undefined"){
    win = self;
} else {
    win = {};
}

module.exports = win;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./pages/jp/certifications.js":
/*!************************************!*\
  !*** ./pages/jp/certifications.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Main */ "./components/Main.js");
/* harmony import */ var _components_CertificateShow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/CertificateShow */ "./components/CertificateShow.js");
/* harmony import */ var _public_json_data_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/json/data.json */ "./public/json/data.json");
var _public_json_data_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../public/json/data.json */ "./public/json/data.json", 1);
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! global */ "./node_modules/global/window.js");
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(global__WEBPACK_IMPORTED_MODULE_6__);
var _this = undefined,
    _jsxFileName = "/Users/aminakano/workspace/anakano/pages/jp/certifications.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var certs = _public_json_data_json__WEBPACK_IMPORTED_MODULE_5__.certificates;


var Page = function Page() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_Main__WEBPACK_IMPORTED_MODULE_3__["default"], {
    bg: "#a5d0e1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-869944847",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, console.log(global__WEBPACK_IMPORTED_MODULE_6___default.a), certs.map(function (cert, i) {
    return __jsx(_components_CertificateShow__WEBPACK_IMPORTED_MODULE_4__["default"], {
      certPath: cert.certificate,
      org: cert.name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 11
      }
    });
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "869944847",
    __self: _this
  }, "div.jsx-869944847{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:80%;margin:2% 20%;overflow-y:scroll;}@media screen and (max-width:600px){div.jsx-869944847{margin:15% 5% 25%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWluYWthbm8vd29ya3NwYWNlL2FuYWthbm8vcGFnZXMvanAvY2VydGlmaWNhdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJPLEFBR3dCLEFBVU8sa0JBQ3BCLHdEQVZlLHlEQUNRLG1HQUNiLFVBQ0ksY0FDSSxrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL2FtaW5ha2Fuby93b3Jrc3BhY2UvYW5ha2Fuby9wYWdlcy9qcC9jZXJ0aWZpY2F0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTXlMYXlvdXRcIjtcbmltcG9ydCBNYWluIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL01haW5cIjtcbmltcG9ydCBDZXJ0aWZpY2F0ZVNob3cgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ2VydGlmaWNhdGVTaG93XCI7XG5pbXBvcnQgZGF0YSBmcm9tIFwiLi4vLi4vcHVibGljL2pzb24vZGF0YS5qc29uXCI7XG5jb25zdCBjZXJ0cyA9IGRhdGEuY2VydGlmaWNhdGVzO1xuaW1wb3J0IHdpbmRvdyBmcm9tIFwiZ2xvYmFsXCI7XG5jb25zdCBQYWdlID0gKCkgPT4gKFxuICA8PlxuICAgIDxNYWluIGJnPVwiI2E1ZDBlMVwiPlxuICAgICAgPGRpdj5cbiAgICAgICAge2NvbnNvbGUubG9nKHdpbmRvdyl9XG4gICAgICAgIHtjZXJ0cy5tYXAoKGNlcnQsIGkpID0+IChcbiAgICAgICAgICA8Q2VydGlmaWNhdGVTaG93IGNlcnRQYXRoPXtjZXJ0LmNlcnRpZmljYXRlfSBvcmc9e2NlcnQubmFtZX0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L01haW4+XG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgICAgIGRpdiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICBtYXJnaW46IDIlIDIwJTtcbiAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICBtYXJnaW46IDE1JSA1JSAyNSU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0KFBhZ2UpO1xuIl19 */\n/*@ sourceURL=/Users/aminakano/workspace/anakano/pages/jp/certifications.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_MyLayout__WEBPACK_IMPORTED_MODULE_2__["default"])(Page));

/***/ })

})
//# sourceMappingURL=certifications.js.0425f2b971d7dd0ee3af.hot-update.js.map