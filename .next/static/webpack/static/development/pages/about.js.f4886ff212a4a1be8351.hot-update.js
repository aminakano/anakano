webpackHotUpdate("static/development/pages/about.js",{

/***/ "./components/MenuItems.js":
/*!*********************************!*\
  !*** ./components/MenuItems.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Link */ "./components/Link.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "/Users/aminakano/workspace/anakano/components/MenuItems.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var MenuItems = function MenuItems(_ref) {
  var menuType = _ref.menuType;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var href;
  router.pathname.split("/")[1] === "jp" ? href = "/jp/" : href = "/";
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("ul", {
    className: "jsx-324667893" + " " + (menuType || ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx(_components_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: href,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("li", {
    className: "jsx-324667893",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, "Home")), __jsx(_components_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: href + "about",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("li", {
    className: "jsx-324667893",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, "About")), __jsx(_components_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: href + "work",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("li", {
    className: "jsx-324667893",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, "Work")), __jsx(_components_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: href + "certifications",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx("li", {
    className: "jsx-324667893",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, "Certifications"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "324667893",
    __self: _this
  }, "ul.jsx-324667893{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-right:3rem;}li.jsx-324667893{list-style:none;margin-right:1.25rem;font-size:1rem;color:#fff;font-weight:200;text-transform:uppercase;position:relative;}li.jsx-324667893::after{position:absolute;bottom:0;left:0;content:\"\";height:1px;width:100%;background:#fff;opacity:0;-webkit-transition:0.5s;transition:0.5s;}li.jsx-324667893:hover{cursor:pointer;-webkit-text-decoration:underline;text-decoration:underline;}li.selected.jsx-324667893{font-weight:bold;}@media screen and (max-width:600px){ul.jsx-324667893{margin-right:0;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}li.jsx-324667893{font-size:0.9rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWluYWthbm8vd29ya3NwYWNlL2FuYWthbm8vY29tcG9uZW50cy9NZW51SXRlbXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUJTLEFBRzBCLEFBSUcsQUFTRSxBQVdILEFBSUUsQUFLQSxBQUtFLGVBYk8sQUFTRixDQTdCSCxDQXdCdkIsQUFVRSxDQXpCUyxTQUNGLE9BQ0ksR0FWSSxRQVdKLE9BVkEsSUFXQSxPQVZLLElBV0EsT0FsQkUsQ0F5QnBCLElBakIyQixJQVdmLFNBbEJaLENBbUJrQixBQWNoQixXQXpCa0Isa0JBQ3BCLFdBV0EiLCJmaWxlIjoiL1VzZXJzL2FtaW5ha2Fuby93b3Jrc3BhY2UvYW5ha2Fuby9jb21wb25lbnRzL01lbnVJdGVtcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCIuLi9jb21wb25lbnRzL0xpbmtcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5jb25zdCBNZW51SXRlbXMgPSAoeyBtZW51VHlwZSB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBsZXQgaHJlZjtcbiAgcm91dGVyLnBhdGhuYW1lLnNwbGl0KFwiL1wiKVsxXSA9PT0gXCJqcFwiID8gKGhyZWYgPSBcIi9qcC9cIikgOiAoaHJlZiA9IFwiL1wiKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8dWwgY2xhc3NOYW1lPXttZW51VHlwZX0+XG4gICAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9PlxuICAgICAgICAgIDxsaT5Ib21lPC9saT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPXtocmVmICsgXCJhYm91dFwifT5cbiAgICAgICAgICA8bGk+QWJvdXQ8L2xpPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9e2hyZWYgKyBcIndvcmtcIn0+XG4gICAgICAgICAgPGxpPldvcms8L2xpPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9e2hyZWYgKyBcImNlcnRpZmljYXRpb25zXCJ9PlxuICAgICAgICAgIDxsaT5DZXJ0aWZpY2F0aW9uczwvbGk+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvdWw+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDNyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuMjVyZW07XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsaTo6YWZ0ZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsaTpob3ZlciB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGkuc2VsZWN0ZWQge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgTWVudUl0ZW1zO1xuIl19 */\n/*@ sourceURL=/Users/aminakano/workspace/anakano/components/MenuItems.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (MenuItems);

/***/ })

})
//# sourceMappingURL=about.js.f4886ff212a4a1be8351.hot-update.js.map