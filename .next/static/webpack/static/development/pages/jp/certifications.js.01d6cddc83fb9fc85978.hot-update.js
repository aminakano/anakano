webpackHotUpdate("static/development/pages/jp/certifications.js",{

/***/ "./components/Language.js":
/*!********************************!*\
  !*** ./components/Language.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! global */ "./node_modules/global/window.js");
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(global__WEBPACK_IMPORTED_MODULE_4__);
var _this = undefined,
    _jsxFileName = "/Users/aminakano/workspace/anakano/components/Language.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Language = function Language() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var linkItem = router.pathname.split("/").slice(-1);
  var lang = router.pathname.split("/").slice(-2, -1); //todo: style the links

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("ul", {
    className: "jsx-3582253384",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("li", {
    className: "jsx-3582253384" + " " + ((lang == "" ? "active" : null) || ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/" + linkItem,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "jsx-3582253384",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, "en"))), __jsx("li", {
    className: "jsx-3582253384" + " " + ((lang == "jp" ? "active" : "") || ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/jp/" + linkItem,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "jsx-3582253384",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, "jp")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3582253384",
    __self: _this
  }, "ul.jsx-3582253384{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-right:2rem;}li.jsx-3582253384{list-style:none;margin-right:1rem;font-weight:200;text-transform:uppercase;-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;position:relative;}li.jsx-3582253384:first-child{border-right:1px solid #fff;padding-right:1rem;}li.jsx-3582253384 a.jsx-3582253384{color:#fff;-webkit-text-decoration:none;text-decoration:none;}@media screen and (max-width:600px){ul.jsx-3582253384{margin-right:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWluYWthbm8vd29ya3NwYWNlL2FuYWthbm8vY29tcG9uZW50cy9MYW5ndWFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QlMsQUFHMEIsQUFJRyxBQVFZLEFBSWpCLEFBTU0sV0FMSSxJQU1yQixDQWxCa0IsWUFRQyxNQVBILGFBUWxCLEdBUDJCLFdBVzNCLGFBakJvQixDQU9JLGlCQU54Qiw2REFPb0Isa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9hbWluYWthbm8vd29ya3NwYWNlL2FuYWthbm8vY29tcG9uZW50cy9MYW5ndWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHdpbmRvdyBmcm9tIFwiZ2xvYmFsXCI7XG5jb25zdCBMYW5ndWFnZSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGxpbmtJdGVtID0gcm91dGVyLnBhdGhuYW1lLnNwbGl0KFwiL1wiKS5zbGljZSgtMSk7XG4gIGNvbnN0IGxhbmcgPSByb3V0ZXIucGF0aG5hbWUuc3BsaXQoXCIvXCIpLnNsaWNlKC0yLCAtMSk7XG5cbiAgLy90b2RvOiBzdHlsZSB0aGUgbGlua3NcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHVsPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPXtsYW5nID09IFwiXCIgPyBcImFjdGl2ZVwiIDogbnVsbH0+XG4gICAgICAgICAgPExpbmsgaHJlZj17XCIvXCIgKyBsaW5rSXRlbX0+XG4gICAgICAgICAgICA8YT5lbjwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9e2xhbmcgPT0gXCJqcFwiID8gXCJhY3RpdmVcIiA6IFwiXCJ9PlxuICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL2pwL1wiICsgbGlua0l0ZW19PlxuICAgICAgICAgICAgPGE+anA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgdWwge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMnJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGkge1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGk6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIGxpIGEge1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExhbmd1YWdlO1xuIl19 */\n/*@ sourceURL=/Users/aminakano/workspace/anakano/components/Language.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Language);

/***/ })

})
//# sourceMappingURL=certifications.js.01d6cddc83fb9fc85978.hot-update.js.map