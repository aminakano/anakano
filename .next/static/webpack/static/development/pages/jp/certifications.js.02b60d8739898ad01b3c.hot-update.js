webpackHotUpdate("static/development/pages/jp/certifications.js",{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./pages/jp/certifications.js":
/*!************************************!*\
  !*** ./pages/jp/certifications.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Main */ "./components/Main.js");
/* harmony import */ var _components_CertificateShow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/CertificateShow */ "./components/CertificateShow.js");
/* harmony import */ var _public_json_data_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../public/json/data.json */ "./public/json/data.json");
var _public_json_data_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../public/json/data.json */ "./public/json/data.json", 1);
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! global */ "./node_modules/global/window.js");
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(global__WEBPACK_IMPORTED_MODULE_12__);






var _jsxFileName = "/Users/aminakano/workspace/anakano/pages/jp/certifications.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var certs = _public_json_data_json__WEBPACK_IMPORTED_MODULE_11__.certificates;




var Page = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Page, _Component);

  var _super = _createSuper(Page);

  function Page() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Page);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Page, [{
    key: "render",
    value: function render() {
      var _this = this;

      // useEffect(() => {
      //   const div = document.getElementById("cert-container");
      //   console.log(div)
      // }, []);
      var _React$useState = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState(null),
          _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
          _document = _React$useState2[0],
          set_document = _React$useState2[1];

      react__WEBPACK_IMPORTED_MODULE_7___default.a.useEffect(function () {
        set_document(document);
      }, []);
      var div = document.getElementById("cert-container");
      console.log(div);
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx(_components_Main__WEBPACK_IMPORTED_MODULE_9__["default"], {
        bg: "#a5d0e1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 9
        }
      }, __jsx("div", {
        id: "cert-container",
        className: "jsx-1007820007",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }
      }, console.log(global__WEBPACK_IMPORTED_MODULE_12___default.a), certs.map(function (cert, i) {
        return __jsx(_components_CertificateShow__WEBPACK_IMPORTED_MODULE_10__["default"], {
          certPath: cert.certificate,
          org: cert.name,
          key: i,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 15
          }
        });
      }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1007820007",
        __self: this
      }, "div.jsx-1007820007{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:80%;margin:2% 20%;overflow-y:scroll;}@media screen and (max-width:600px){div.jsx-1007820007{margin:15% 5% 25%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWluYWthbm8vd29ya3NwYWNlL2FuYWthbm8vcGFnZXMvanAvY2VydGlmaWNhdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0NXLEFBRzRCLEFBVU8sa0JBQ3BCLHdEQVZlLHlEQUNRLG1HQUNiLFVBQ0ksY0FDSSxrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL2FtaW5ha2Fuby93b3Jrc3BhY2UvYW5ha2Fuby9wYWdlcy9qcC9jZXJ0aWZpY2F0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTXlMYXlvdXRcIjtcbmltcG9ydCBNYWluIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL01haW5cIjtcbmltcG9ydCBDZXJ0aWZpY2F0ZVNob3cgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ2VydGlmaWNhdGVTaG93XCI7XG5pbXBvcnQgZGF0YSBmcm9tIFwiLi4vLi4vcHVibGljL2pzb24vZGF0YS5qc29uXCI7XG5jb25zdCBjZXJ0cyA9IGRhdGEuY2VydGlmaWNhdGVzO1xuaW1wb3J0IHdpbmRvdyBmcm9tIFwiZ2xvYmFsXCI7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyICgpIHtcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgLy8gICBjb25zdCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNlcnQtY29udGFpbmVyXCIpO1xuICAgIC8vICAgY29uc29sZS5sb2coZGl2KVxuICAgIC8vIH0sIFtdKTtcbiAgICBjb25zdCBbX2RvY3VtZW50LCBzZXRfZG9jdW1lbnRdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XG5cbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgc2V0X2RvY3VtZW50KGRvY3VtZW50KTtcbiAgICB9LCBbXSk7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjZXJ0LWNvbnRhaW5lclwiKTtcbiAgICAgIGNvbnNvbGUubG9nKGRpdilcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPE1haW4gYmc9XCIjYTVkMGUxXCI+XG4gICAgICAgICAgPGRpdiBpZD1cImNlcnQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICB7Y29uc29sZS5sb2cod2luZG93KX1cbiAgICAgICAgICAgIHtjZXJ0cy5tYXAoKGNlcnQsIGkpID0+IChcbiAgICAgICAgICAgICAgPENlcnRpZmljYXRlU2hvd1xuICAgICAgICAgICAgICAgIGNlcnRQYXRoPXtjZXJ0LmNlcnRpZmljYXRlfVxuICAgICAgICAgICAgICAgIG9yZz17Y2VydC5uYW1lfVxuICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L01haW4+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgIG1hcmdpbjogMiUgMjAlO1xuICAgICAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxNSUgNSUgMjUlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbn1cbi8vIGNvbnN0IFBhZ2UgPSAoKSA9PiAoXG4vLyAgIDw+XG4vLyAgICAgPE1haW4gYmc9XCIjYTVkMGUxXCI+XG4vLyAgICAgICA8ZGl2PlxuLy8gICAgICAgICB7Y29uc29sZS5sb2cod2luZG93KX1cbi8vICAgICAgICAge2NlcnRzLm1hcCgoY2VydCwgaSkgPT4gKFxuLy8gICAgICAgICAgIDxDZXJ0aWZpY2F0ZVNob3cgY2VydFBhdGg9e2NlcnQuY2VydGlmaWNhdGV9IG9yZz17Y2VydC5uYW1lfSBrZXk9e2l9IC8+XG4vLyAgICAgICAgICkpfVxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgPC9NYWluPlxuLy8gICAgIDxzdHlsZSBqc3g+XG4vLyAgICAgICB7YFxuLy8gICAgICAgICBkaXYge1xuLy8gICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuLy8gICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuLy8gICAgICAgICAgIHdpZHRoOiA4MCU7XG4vLyAgICAgICAgICAgbWFyZ2luOiAyJSAyMCU7XG4vLyAgICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuLy8gICAgICAgICB9XG5cbi8vICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbi8vICAgICAgICAgICBkaXYge1xuLy8gICAgICAgICAgICAgbWFyZ2luOiAxNSUgNSUgMjUlO1xuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgfVxuLy8gICAgICAgYH1cbi8vICAgICA8L3N0eWxlPlxuLy8gICA8Lz5cbi8vICk7XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dChQYWdlKTtcbiJdfQ== */\n/*@ sourceURL=/Users/aminakano/workspace/anakano/pages/jp/certifications.js */"));
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]); // const Page = () => (
//   <>
//     <Main bg="#a5d0e1">
//       <div>
//         {console.log(window)}
//         {certs.map((cert, i) => (
//           <CertificateShow certPath={cert.certificate} org={cert.name} key={i} />
//         ))}
//       </div>
//     </Main>
//     <style jsx>
//       {`
//         div {
//           display: flex;
//           flex-wrap: wrap;
//           justify-content: center;
//           width: 80%;
//           margin: 2% 20%;
//           overflow-y: scroll;
//         }
//         @media screen and (max-width: 600px) {
//           div {
//             margin: 15% 5% 25%;
//           }
//         }
//       `}
//     </style>
//   </>
// );


/* harmony default export */ __webpack_exports__["default"] = (Object(_components_MyLayout__WEBPACK_IMPORTED_MODULE_8__["default"])(Page));

/***/ })

})
//# sourceMappingURL=certifications.js.02b60d8739898ad01b3c.hot-update.js.map