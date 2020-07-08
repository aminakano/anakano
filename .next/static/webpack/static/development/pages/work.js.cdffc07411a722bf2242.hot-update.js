webpackHotUpdate("static/development/pages/work.js",{

/***/ "./components/NavLink.js":
/*!*******************************!*\
  !*** ./components/NavLink.js ***!
  \*******************************/
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
    _jsxFileName = "/Users/aminakano/workspace/anakano/components/NavLink.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var NavLink = function NavLink() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var href;
  router.pathname.split("/")[1] === "jp" ? href = "/jp/" : href = "/";
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("ul", {
    className: "jsx-1401199524",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx(_components_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: href,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("li", {
    className: "jsx-1401199524",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, "Home")), __jsx(_components_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: href + "about",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("li", {
    className: "jsx-1401199524",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, "About")), __jsx(_components_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: href + "work",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("li", {
    className: "jsx-1401199524",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, "Work")), __jsx(_components_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: href + "certifications",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx("li", {
    className: "jsx-1401199524",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, "Certifications"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1401199524",
    __self: _this
  }, "@media screen and (max-width:600px);ul.jsx-1401199524{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}li.jsx-1401199524{list-style:none;margin-right:1.25rem;font-size:1.5rem;color:#fff;font-weight:200;text-transform:uppercase;position:relative;}li.jsx-1401199524::after{position:absolute;bottom:0;left:0;content:\"\";height:1px;width:100%;background:#fff;opacity:0;-webkit-transition:0.5s;transition:0.5s;}li.jsx-1401199524:hover{cursor:pointer;-webkit-text-decoration:underline;text-decoration:underline;}li.selected.jsx-1401199524{font-weight:bold;}li.jsx-1401199524{font-size:0.9rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWluYWthbm8vd29ya3NwYWNlL2FuYWthbm8vY29tcG9uZW50cy9OYXZMaW5rLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdCUyxBQUcwQixBQUdHLEFBU0UsQUFXSCxBQUlFLEFBR2lCLEFBRWYsZUFSTyxDQXBCTCxDQXdCdkIsQUFLRSxDQXBCUyxTQUNGLE9BQ0ksR0FWTSxRQVdOLFNBVkEsRUFXQSxTQVZLLEVBV0EsT0FqQmxCLENBd0JBLE1BakIyQixFQVdmLFVBQ00sYUFYRSxrQkFDcEIsU0FXQSIsImZpbGUiOiIvVXNlcnMvYW1pbmFrYW5vL3dvcmtzcGFjZS9hbmFrYW5vL2NvbXBvbmVudHMvTmF2TGluay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCIuLi9jb21wb25lbnRzL0xpbmtcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuY29uc3QgTmF2TGluayA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGxldCBocmVmO1xuICByb3V0ZXIucGF0aG5hbWUuc3BsaXQoXCIvXCIpWzFdID09PSBcImpwXCIgPyBocmVmID0gXCIvanAvXCIgOiBocmVmID0gXCIvXCI7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHVsPlxuICAgICAgICA8TGluayBocmVmPXtocmVmfT5cbiAgICAgICAgICA8bGk+SG9tZTwvbGk+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj17aHJlZiArIFwiYWJvdXRcIn0+XG4gICAgICAgICAgPGxpPkFib3V0PC9saT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPXtocmVmICsgXCJ3b3JrXCJ9PlxuICAgICAgICAgIDxsaT5Xb3JrPC9saT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPXtocmVmICsgXCJjZXJ0aWZpY2F0aW9uc1wifT5cbiAgICAgICAgICA8bGk+Q2VydGlmaWNhdGlvbnM8L2xpPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L3VsPlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICB1bCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBsaSB7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjI1cmVtO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsaTo6YWZ0ZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsaTpob3ZlciB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGkuc2VsZWN0ZWQge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpOyB7XG4gICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBOYXZMaW5rOyJdfQ== */\n/*@ sourceURL=/Users/aminakano/workspace/anakano/components/NavLink.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (NavLink);

/***/ })

})
//# sourceMappingURL=work.js.cdffc07411a722bf2242.hot-update.js.map