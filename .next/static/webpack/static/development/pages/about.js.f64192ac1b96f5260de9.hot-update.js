webpackHotUpdate("static/development/pages/about.js",{

/***/ "./components/NavLink.js":
/*!*******************************!*\
  !*** ./components/NavLink.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_MenuItems__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/MenuItems */ "./components/MenuItems.js");
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! global */ "./node_modules/global/window.js");
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(global__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_hamburger_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-hamburger-menu */ "./node_modules/react-hamburger-menu/dist/HamburgerMenu.js");
/* harmony import */ var react_hamburger_menu__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_hamburger_menu__WEBPACK_IMPORTED_MODULE_11__);







var _jsxFileName = "/Users/aminakano/workspace/anakano/components/NavLink.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var NavLink = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(NavLink, _Component);

  var _super = _createSuper(NavLink);

  function NavLink() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NavLink);

    _this = _super.call(this);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleClick", function () {
      _this.setState({
        open: !_this.state.open
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "displayHamburgerMenu", function () {
      return __jsx(react_hamburger_menu__WEBPACK_IMPORTED_MODULE_11___default.a, {
        isOpen: _this.state.open,
        menuClicked: _this.handleClick.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this)),
        width: 25,
        height: 20,
        strokeWidth: 3,
        rotate: 0,
        color: "#fff",
        borderRadius: 2,
        animationDuration: 0.5,
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 7
        }
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "displayNavBar", function () {
      return __jsx(_components_MenuItems__WEBPACK_IMPORTED_MODULE_9__["default"], {
        menuType: "nav",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 25
        }
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "displayMobileMenu", function () {
      return __jsx(_components_MenuItems__WEBPACK_IMPORTED_MODULE_9__["default"], {
        menuType: "hamburgerDropDown",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 29
        }
      });
    });

    _this.state = {
      open: false
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NavLink, [{
    key: "render",
    value: function render() {
      var burgerStyle = {
        menuBtn: {
          marginTop: "5rem"
        }
      };
      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx("div", {
        style: this.state.open ? burgerStyle.menuBtn : null,
        className: "jsx-3625601429" + " " + "navbar",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 9
        }
      }, global__WEBPACK_IMPORTED_MODULE_10___default.a.innerWidth > 600 ? this.displayNavBar() : this.displayHamburgerMenu(), this.state.open ? this.displayMobileMenu() : null), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3625601429",
        __self: this
      }, "@media screen and (max-width:600px){.navbar.jsx-3625601429{margin:0.5rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWluYWthbm8vd29ya3NwYWNlL2FuYWthbm8vY29tcG9uZW50cy9OYXZMaW5rLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlEVyxBQUkrQixjQUNoQiIsImZpbGUiOiIvVXNlcnMvYW1pbmFrYW5vL3dvcmtzcGFjZS9hbmFrYW5vL2NvbXBvbmVudHMvTmF2TGluay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNZW51SXRlbXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvTWVudUl0ZW1zXCI7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB3aW5kb3cgZnJvbSBcImdsb2JhbFwiO1xuaW1wb3J0IEhhbWJ1cmdlck1lbnUgZnJvbSBcInJlYWN0LWhhbWJ1cmdlci1tZW51XCI7XG5cbmNsYXNzIE5hdkxpbmsgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBvcGVuOiBmYWxzZSxcbiAgICB9XG4gIH1cbiAgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW46ICF0aGlzLnN0YXRlLm9wZW4gfSk7XG4gIH1cblxuICBkaXNwbGF5SGFtYnVyZ2VyTWVudSA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPEhhbWJ1cmdlck1lbnVcbiAgICAgICAgaXNPcGVuPXt0aGlzLnN0YXRlLm9wZW59XG4gICAgICAgIG1lbnVDbGlja2VkPXt0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyl9XG4gICAgICAgIHdpZHRoPXsyNX1cbiAgICAgICAgaGVpZ2h0PXsyMH1cbiAgICAgICAgc3Ryb2tlV2lkdGg9ezN9XG4gICAgICAgIHJvdGF0ZT17MH1cbiAgICAgICAgY29sb3I9e1wiI2ZmZlwifVxuICAgICAgICBib3JkZXJSYWRpdXM9ezJ9XG4gICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uPXswLjV9XG4gICAgICAvPlxuICAgICk7XG4gIH1cblxuICBkaXNwbGF5TmF2QmFyID0gKCkgPT4gPE1lbnVJdGVtcyBtZW51VHlwZT1cIm5hdlwiIC8+O1xuXG4gIGRpc3BsYXlNb2JpbGVNZW51ID0gKCkgPT4gPE1lbnVJdGVtcyBtZW51VHlwZT1cImhhbWJ1cmdlckRyb3BEb3duXCIgLz47XG5cblxuICByZW5kZXIgKCkge1xuXG4gICAgY29uc3QgYnVyZ2VyU3R5bGUgPSB7XG4gICAgICBtZW51QnRuOiB7XG4gICAgICAgIG1hcmdpblRvcDogXCI1cmVtXCIsXG4gICAgICB9LFxuICAgIH07XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJuYXZiYXJcIlxuICAgICAgICAgIHN0eWxlPXt0aGlzLnN0YXRlLm9wZW4gPyBidXJnZXJTdHlsZS5tZW51QnRuIDogbnVsbH1cbiAgICAgICAgPlxuICAgICAgICAgIHt3aW5kb3cuaW5uZXJXaWR0aCA+IDYwMFxuICAgICAgICAgICAgPyB0aGlzLmRpc3BsYXlOYXZCYXIoKVxuICAgICAgICAgICAgOiB0aGlzLmRpc3BsYXlIYW1idXJnZXJNZW51KCl9XG4gICAgICAgICAge3RoaXMuc3RhdGUub3BlbiA/IHRoaXMuZGlzcGxheU1vYmlsZU1lbnUoKSA6IG51bGx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgICAgICAubmF2YmFyIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAuNXJlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkxpbms7Il19 */\n/*@ sourceURL=/Users/aminakano/workspace/anakano/components/NavLink.js */"));
    }
  }]);

  return NavLink;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (NavLink);

/***/ })

})
//# sourceMappingURL=about.js.f64192ac1b96f5260de9.hot-update.js.map