webpackHotUpdate("static/development/pages/jp/certifications.js",{

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
var _this = undefined,
    _jsxFileName = "/Users/aminakano/workspace/anakano/pages/jp/certifications.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var certs = _public_json_data_json__WEBPACK_IMPORTED_MODULE_5__.certificates; // class Page extends Component {
//   render() {
// console.log(certs);
//     return (
//       <>
//         <Main bg="#a5d0e1">
//           <div>
//           </div>
//         </Main>
//       </>
//     );
//   }
// }

var Page = function Page() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_Main__WEBPACK_IMPORTED_MODULE_3__["default"], {
    bg: "#a5d0e1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-322144544",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, certs.map(function (cert, i) {
    return __jsx(_components_CertificateShow__WEBPACK_IMPORTED_MODULE_4__["default"], {
      certPath: cert.certificate,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 11
      }
    });
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "322144544",
    __self: _this
  }, "div.jsx-322144544{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWluYWthbm8vd29ya3NwYWNlL2FuYWthbm8vcGFnZXMvanAvY2VydGlmaWNhdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUNPLEFBR3dCLDBFQUNFLHlEQUNqQiIsImZpbGUiOiIvVXNlcnMvYW1pbmFrYW5vL3dvcmtzcGFjZS9hbmFrYW5vL3BhZ2VzL2pwL2NlcnRpZmljYXRpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9NeUxheW91dFwiO1xuaW1wb3J0IE1haW4gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTWFpblwiO1xuaW1wb3J0IENlcnRpZmljYXRlU2hvdyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9DZXJ0aWZpY2F0ZVNob3dcIjtcbmltcG9ydCBkYXRhIGZyb20gXCIuLi8uLi9wdWJsaWMvanNvbi9kYXRhLmpzb25cIjtcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBjZXJ0cyA9IGRhdGEuY2VydGlmaWNhdGVzO1xuXG4vLyBjbGFzcyBQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcbi8vICAgcmVuZGVyKCkge1xuLy8gY29uc29sZS5sb2coY2VydHMpO1xuXG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgIDw+XG4vLyAgICAgICAgIDxNYWluIGJnPVwiI2E1ZDBlMVwiPlxuLy8gICAgICAgICAgIDxkaXY+XG4vLyAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgIDwvTWFpbj5cbi8vICAgICAgIDwvPlxuLy8gICAgICk7XG4vLyAgIH1cbiAgXG4vLyB9XG5jb25zdCBQYWdlID0gKCkgPT4gKFxuICA8PlxuICAgIDxNYWluIGJnPVwiI2E1ZDBlMVwiPlxuICAgICAgPGRpdj5cbiAgICAgICAge2NlcnRzLm1hcCgoY2VydCwgaSkgPT4gKFxuICAgICAgICAgIDxDZXJ0aWZpY2F0ZVNob3cgY2VydFBhdGg9e2NlcnQuY2VydGlmaWNhdGV9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9NYWluPlxuICAgIDxzdHlsZSBqc3g+XG4gICAgICB7YFxuICAgICAgICBkaXYge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0KFBhZ2UpO1xuIl19 */\n/*@ sourceURL=/Users/aminakano/workspace/anakano/pages/jp/certifications.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_MyLayout__WEBPACK_IMPORTED_MODULE_2__["default"])(Page));

/***/ })

})
//# sourceMappingURL=certifications.js.63e78a866751642bdf8d.hot-update.js.map