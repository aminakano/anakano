webpackHotUpdate("static/development/pages/jp/about.js",{

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
var _this = undefined,
    _jsxFileName = "/Users/aminakano/workspace/anakano/components/NavLink.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var NavLink = function NavLink() {
  console.log(location.pathname);
  var href;
  location.pathname.split("/")[1] === "jp" ? href = "jp/" : null;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("ul", {
    className: "jsx-2490482695",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx(_components_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/" + href,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("li", {
    className: "jsx-2490482695",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, "Home")), __jsx(_components_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/about",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("li", {
    className: "jsx-2490482695",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, "About")), __jsx(_components_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/work",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("li", {
    className: "jsx-2490482695",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, "Work"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2490482695",
    __self: _this
  }, "ul.jsx-2490482695{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}li.jsx-2490482695{list-style:none;margin-right:1.25rem;font-size:1.5rem;color:#fff;font-weight:200;text-transform:uppercase;position:relative;}li.jsx-2490482695::after{position:absolute;bottom:0;left:0;content:\"\";height:1px;width:100%;background:#fff;opacity:0;-webkit-transition:0.5s;transition:0.5s;}li.jsx-2490482695:hover{cursor:pointer;-webkit-text-decoration:underline;text-decoration:underline;}li.selected.jsx-2490482695{font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWluYWthbm8vd29ya3NwYWNlL2FuYWthbm8vY29tcG9uZW50cy9OYXZMaW5rLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCUyxBQUcwQixBQUdHLEFBU0UsQUFXSCxBQUlFLGVBSFMsQ0FwQkwsQ0F3QnZCLENBZlcsU0FDRixPQUNJLEdBVk0sUUFXTixTQVZBLEVBV0EsU0FWSyxFQVdBLE9BakJsQixDQXdCQSxNQWpCMkIsRUFXZixVQUNNLGFBWEUsa0JBQ3BCLFNBV0EiLCJmaWxlIjoiL1VzZXJzL2FtaW5ha2Fuby93b3Jrc3BhY2UvYW5ha2Fuby9jb21wb25lbnRzL05hdkxpbmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwiLi4vY29tcG9uZW50cy9MaW5rXCI7XG5cbmNvbnN0IE5hdkxpbmsgPSAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGxvY2F0aW9uLnBhdGhuYW1lKVxuICBsZXQgaHJlZjtcbiAgbG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpWzFdID09PSBcImpwXCIgPyBocmVmID0gXCJqcC9cIiA6IG51bGw7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHVsPlxuICAgICAgICA8TGluayBocmVmPXtcIi9cIisgaHJlZn0+XG4gICAgICAgICAgPGxpPkhvbWU8L2xpPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cbiAgICAgICAgICA8bGk+QWJvdXQ8L2xpPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvd29ya1wiPlxuICAgICAgICAgIDxsaT5Xb3JrPC9saT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICB7LyogPGxpPkNvbnRhY3Q8L2xpPiAqL31cbiAgICAgIDwvdWw+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuMjVyZW07XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxpOjphZnRlciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxpOmhvdmVyIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsaS5zZWxlY3RlZCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvPlxuICApO1xufVxuZXhwb3J0IGRlZmF1bHQgTmF2TGluazsiXX0= */\n/*@ sourceURL=/Users/aminakano/workspace/anakano/components/NavLink.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (NavLink);

/***/ })

})
//# sourceMappingURL=about.js.deb6dc5313b7394eb057.hot-update.js.map