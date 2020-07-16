webpackHotUpdate("static/development/pages/work.js",{

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
  var lang = router.pathname.split("/").slice(-2, -1);
  console.log(lang); //todo: style the links

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("ul", {
    className: "jsx-488832737",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("li", {
    className: "jsx-488832737" + " " + ((lang !== "jp" ? "active" : null) || ""),
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
    className: "jsx-488832737",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, "en"))), __jsx("li", {
    className: "jsx-488832737" + " " + ((lang === "jp" ? "active" : "") || ""),
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
    className: "jsx-488832737",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, "jp")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "488832737",
    __self: _this
  }, "ul.jsx-488832737{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-right:2rem;}li.jsx-488832737{list-style:none;margin-right:1rem;font-weight:200;text-transform:uppercase;-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;position:relative;}li.jsx-488832737:first-child{border-right:1px solid #fff;padding-right:1rem;}li.jsx-488832737 a.jsx-488832737{color:#fff;}@media screen and (max-width:600px){ul.jsx-488832737{margin-right:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWluYWthbm8vd29ya3NwYWNlL2FuYWthbm8vY29tcG9uZW50cy9MYW5ndWFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QlMsQUFHMEIsQUFJRyxBQVFZLEFBSWpCLEFBS00sV0FKbkIsSUFLRSxDQWpCa0IsWUFRQyxNQVBILGFBUWxCLEdBUDJCLHdCQU5QLENBT0ksaUJBTnhCLDZEQU9vQixrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL2FtaW5ha2Fuby93b3Jrc3BhY2UvYW5ha2Fuby9jb21wb25lbnRzL0xhbmd1YWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgd2luZG93IGZyb20gXCJnbG9iYWxcIjtcbmNvbnN0IExhbmd1YWdlID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgbGlua0l0ZW0gPSByb3V0ZXIucGF0aG5hbWUuc3BsaXQoXCIvXCIpLnNsaWNlKC0xKTtcbiAgY29uc3QgbGFuZyA9IHJvdXRlci5wYXRobmFtZS5zcGxpdChcIi9cIikuc2xpY2UoLTIsIC0xKTtcbiAgY29uc29sZS5sb2cobGFuZylcbiAgLy90b2RvOiBzdHlsZSB0aGUgbGlua3NcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHVsPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPXtsYW5nICE9PSBcImpwXCIgPyBcImFjdGl2ZVwiIDogbnVsbH0+XG4gICAgICAgICAgPExpbmsgaHJlZj17XCIvXCIgKyBsaW5rSXRlbX0+XG4gICAgICAgICAgICA8YT5lbjwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9e2xhbmcgPT09IFwianBcIiA/IFwiYWN0aXZlXCIgOiBcIlwifT5cbiAgICAgICAgICA8TGluayBocmVmPXtcIi9qcC9cIiArIGxpbmtJdGVtfT5cbiAgICAgICAgICAgIDxhPmpwPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogMjAwO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxpOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmZmY7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsaSBhIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMYW5ndWFnZTtcbiJdfQ== */\n/*@ sourceURL=/Users/aminakano/workspace/anakano/components/Language.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Language);

/***/ })

})
//# sourceMappingURL=work.js.ff0fdbd75f5013b72d45.hot-update.js.map