webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Link */ "./components/Link.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_MenuItems__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/MenuItems */ "./components/MenuItems.js");
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! global */ "./node_modules/global/window.js");
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(global__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_hamburger_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-hamburger-menu */ "./node_modules/react-hamburger-menu/dist/HamburgerMenu.js");
/* harmony import */ var react_hamburger_menu__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_hamburger_menu__WEBPACK_IMPORTED_MODULE_12__);







var _jsxFileName = "/Users/aminakano/workspace/anakano/components/NavLink.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

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
      return __jsx(react_hamburger_menu__WEBPACK_IMPORTED_MODULE_12___default.a, {
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
          lineNumber: 21,
          columnNumber: 7
        }
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "displayNavBar", function () {
      return __jsx(_components_MenuItems__WEBPACK_IMPORTED_MODULE_10__["default"], {
        menuType: "nav",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 25
        }
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "displayMobileMenu", function () {
      return __jsx(_components_MenuItems__WEBPACK_IMPORTED_MODULE_10__["default"], {
        menuType: "hamburgerDropDown",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
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
      return __jsx("div", {
        className: "navbar",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 7
        }
      }, this.state.open ? this.displayMobileMenu() : null, global__WEBPACK_IMPORTED_MODULE_11___default.a.innerWidth > 600 ? this.displayNavBar() : this.displayHamburgerMenu());
    }
  }]);

  return NavLink;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]); // const NavLink = () => {
//   const router = useRouter();
//   let href;
//   router.pathname.split("/")[1] === "jp" ? href = "/jp/" : href = "/";
//   return (
//     <>
//       <ul>
//         <Link href={href}>
//           <li>Home</li>
//         </Link>
//         <Link href={href + "about"}>
//           <li>About</li>
//         </Link>
//         <Link href={href + "work"}>
//           <li>Work</li>
//         </Link>
//         <Link href={href + "certifications"}>
//           <li>Certifications</li>
//         </Link>
//       </ul>
//       <style jsx>
//         {`
//           ul {
//             display: flex;
//             margin-right: 3rem;
//           }
//           li {
//             list-style: none;
//             margin-right: 1.25rem;
//             font-size: 1rem;
//             color: #fff;
//             font-weight: 200;
//             text-transform: uppercase;
//             position: relative;
//           }
//           li::after {
//             position: absolute;
//             bottom: 0;
//             left: 0;
//             content: "";
//             height: 1px;
//             width: 100%;
//             background: #fff;
//             opacity: 0;
//             transition: 0.5s;
//           }
//           li:hover {
//             cursor: pointer;
//             text-decoration: underline;
//           }
//           li.selected {
//             font-weight: bold;
//           }
//           @media screen and (max-width: 600px)
//            {
//             ul {
//               margin-right: 0;
//             }
//             li {
//               font-size: 0.9rem;
//             }
//           }
//         `}
//       </style>
//     </>
//   );
// }


/* harmony default export */ __webpack_exports__["default"] = (NavLink);

/***/ })

})
//# sourceMappingURL=index.js.074e299b2d92b02ddc4d.hot-update.js.map