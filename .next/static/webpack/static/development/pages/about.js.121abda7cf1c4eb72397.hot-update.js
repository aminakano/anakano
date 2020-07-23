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
        style: {
          marginBottom: "0.5rem"
        },
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
          lineNumber: 34,
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
          lineNumber: 36,
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
          margin: "5rem 0 0 0",
          backgroundColor: "lightblue"
        }
      };
      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx("div", {
        style: this.state.open ? burgerStyle.menuBtn : null,
        className: "jsx-3149423566" + " " + "navbar",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 9
        }
      }, global__WEBPACK_IMPORTED_MODULE_10___default.a.innerWidth > 600 ? this.displayNavBar() : this.displayHamburgerMenu(), this.state.open ? this.displayMobileMenu() : null), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3149423566",
        __self: this
      }, "@media screen and (max-width:600px){.navbar.jsx-3149423566{margin:0.5rem;padding:1rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWluYWthbm8vd29ya3NwYWNlL2FuYWthbm8vY29tcG9uZW50cy9OYXZMaW5rLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJEVyxBQUkrQixjQUNELGFBQ2YiLCJmaWxlIjoiL1VzZXJzL2FtaW5ha2Fuby93b3Jrc3BhY2UvYW5ha2Fuby9jb21wb25lbnRzL05hdkxpbmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWVudUl0ZW1zIGZyb20gXCIuLi9jb21wb25lbnRzL01lbnVJdGVtc1wiO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgd2luZG93IGZyb20gXCJnbG9iYWxcIjtcbmltcG9ydCBIYW1idXJnZXJNZW51IGZyb20gXCJyZWFjdC1oYW1idXJnZXItbWVudVwiO1xuXG5jbGFzcyBOYXZMaW5rIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgb3BlbjogZmFsc2UsXG4gICAgfVxuICB9XG4gIGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiAhdGhpcy5zdGF0ZS5vcGVuIH0pO1xuICB9XG5cbiAgZGlzcGxheUhhbWJ1cmdlck1lbnUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxIYW1idXJnZXJNZW51XG4gICAgICAgIGlzT3Blbj17dGhpcy5zdGF0ZS5vcGVufVxuICAgICAgICBtZW51Q2xpY2tlZD17dGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpfVxuICAgICAgICB3aWR0aD17MjV9XG4gICAgICAgIGhlaWdodD17MjB9XG4gICAgICAgIHN0cm9rZVdpZHRoPXszfVxuICAgICAgICByb3RhdGU9ezB9XG4gICAgICAgIGNvbG9yPXtcIiNmZmZcIn1cbiAgICAgICAgYm9yZGVyUmFkaXVzPXsyfVxuICAgICAgICBhbmltYXRpb25EdXJhdGlvbj17MC41fVxuICAgICAgICBzdHlsZT17e21hcmdpbkJvdHRvbTogXCIwLjVyZW1cIn19XG4gICAgICAvPlxuICAgICk7XG4gIH1cblxuICBkaXNwbGF5TmF2QmFyID0gKCkgPT4gPE1lbnVJdGVtcyBtZW51VHlwZT1cIm5hdlwiIC8+O1xuXG4gIGRpc3BsYXlNb2JpbGVNZW51ID0gKCkgPT4gPE1lbnVJdGVtcyBtZW51VHlwZT1cImhhbWJ1cmdlckRyb3BEb3duXCIgLz47XG5cblxuICByZW5kZXIgKCkge1xuXG4gICAgY29uc3QgYnVyZ2VyU3R5bGUgPSB7XG4gICAgICBtZW51QnRuOiB7XG4gICAgICAgIG1hcmdpbjogXCI1cmVtIDAgMCAwXCIsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJsaWdodGJsdWVcIlxuICAgICAgfSxcbiAgICB9O1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyXCJcbiAgICAgICAgICBzdHlsZT17dGhpcy5zdGF0ZS5vcGVuID8gYnVyZ2VyU3R5bGUubWVudUJ0biA6IG51bGx9XG4gICAgICAgID5cbiAgICAgICAgICB7d2luZG93LmlubmVyV2lkdGggPiA2MDBcbiAgICAgICAgICAgID8gdGhpcy5kaXNwbGF5TmF2QmFyKClcbiAgICAgICAgICAgIDogdGhpcy5kaXNwbGF5SGFtYnVyZ2VyTWVudSgpfVxuICAgICAgICAgIHt0aGlzLnN0YXRlLm9wZW4gPyB0aGlzLmRpc3BsYXlNb2JpbGVNZW51KCkgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICAgICAgLm5hdmJhciB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwLjVyZW07XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkxpbms7Il19 */\n/*@ sourceURL=/Users/aminakano/workspace/anakano/components/NavLink.js */"));
    }
  }]);

  return NavLink;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (NavLink);

/***/ })

})
//# sourceMappingURL=about.js.121abda7cf1c4eb72397.hot-update.js.map