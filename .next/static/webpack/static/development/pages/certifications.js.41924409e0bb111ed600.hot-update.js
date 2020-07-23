webpackHotUpdate("static/development/pages/certifications.js",{

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
    className: "jsx-676076056" + " " + (menuType || ""),
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
    className: "jsx-676076056",
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
    className: "jsx-676076056",
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
    className: "jsx-676076056",
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
    className: "jsx-676076056",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, "Certifications"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "676076056",
    __self: _this
  }, "ul.jsx-676076056{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-right:3rem;}li.jsx-676076056{list-style:none;margin-right:1.25rem;font-size:1rem;color:#fff;font-weight:200;text-transform:uppercase;position:relative;}li.jsx-676076056::after{position:absolute;bottom:0;left:0;content:\"\";height:1px;width:100%;background:#fff;opacity:0;-webkit-transition:0.5s;transition:0.5s;}li.jsx-676076056:hover{cursor:pointer;-webkit-text-decoration:underline;text-decoration:underline;}li.selected.jsx-676076056{font-weight:bold;}@media screen and (max-width:600px){ul.jsx-676076056{margin-right:0;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}li.jsx-676076056{font-size:0.9rem;margin-right:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWluYWthbm8vd29ya3NwYWNlL2FuYWthbm8vY29tcG9uZW50cy9NZW51SXRlbXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUJTLEFBRzBCLEFBSUcsQUFTRSxBQVdILEFBSUUsQUFLQSxBQUtFLGVBYk8sQUFTRixDQTdCSCxDQXdCdkIsQUFVbUIsQ0F6QlIsU0FDRixLQXlCUCxFQXhCVyxHQVZJLFFBV0osT0FWQSxJQVdBLE9BVkssSUFXQSxPQWxCRSxDQXlCcEIsSUFqQjJCLElBV2YsU0FsQlosQ0FtQmtCLEFBY2hCLFdBekJrQixrQkFDcEIsV0FXQSIsImZpbGUiOiIvVXNlcnMvYW1pbmFrYW5vL3dvcmtzcGFjZS9hbmFrYW5vL2NvbXBvbmVudHMvTWVudUl0ZW1zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGlua1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmNvbnN0IE1lbnVJdGVtcyA9ICh7IG1lbnVUeXBlIH0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGxldCBocmVmO1xuICByb3V0ZXIucGF0aG5hbWUuc3BsaXQoXCIvXCIpWzFdID09PSBcImpwXCIgPyAoaHJlZiA9IFwiL2pwL1wiKSA6IChocmVmID0gXCIvXCIpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDx1bCBjbGFzc05hbWU9e21lbnVUeXBlfT5cbiAgICAgICAgPExpbmsgaHJlZj17aHJlZn0+XG4gICAgICAgICAgPGxpPkhvbWU8L2xpPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9e2hyZWYgKyBcImFib3V0XCJ9PlxuICAgICAgICAgIDxsaT5BYm91dDwvbGk+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj17aHJlZiArIFwid29ya1wifT5cbiAgICAgICAgICA8bGk+V29yazwvbGk+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj17aHJlZiArIFwiY2VydGlmaWNhdGlvbnNcIn0+XG4gICAgICAgICAgPGxpPkNlcnRpZmljYXRpb25zPC9saT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC91bD5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgdWwge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogM3JlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGkge1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMS4yNXJlbTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxpOjphZnRlciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxpOmhvdmVyIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsaS5zZWxlY3RlZCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IE1lbnVJdGVtcztcbiJdfQ== */\n/*@ sourceURL=/Users/aminakano/workspace/anakano/components/MenuItems.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (MenuItems);

/***/ })

})
//# sourceMappingURL=certifications.js.41924409e0bb111ed600.hot-update.js.map