webpackHotUpdate("static/development/pages/jp/certifications.js",{

/***/ "./pages/jp/certifications.js":
/*!************************************!*\
  !*** ./pages/jp/certifications.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Main */ "./components/Main.js");
/* harmony import */ var _components_CertificateShow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/CertificateShow */ "./components/CertificateShow.js");
/* harmony import */ var _public_json_data_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../public/json/data.json */ "./public/json/data.json");
var _public_json_data_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../public/json/data.json */ "./public/json/data.json", 1);
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! global */ "./node_modules/global/window.js");
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(global__WEBPACK_IMPORTED_MODULE_11__);





var _jsxFileName = "/Users/aminakano/workspace/anakano/pages/jp/certifications.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var certs = _public_json_data_json__WEBPACK_IMPORTED_MODULE_10__.certificates;



var Page = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Page, _Component);

  var _super = _createSuper(Page);

  function Page() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Page);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Page, [{
    key: "render",
    value: function render() {
      var _this = this;

      var div = document.querySelector("div");
      console.log(div);
      return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(_components_Main__WEBPACK_IMPORTED_MODULE_8__["default"], {
        bg: "#a5d0e1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "jsx-1007820007",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }
      }, console.log(global__WEBPACK_IMPORTED_MODULE_11___default.a), certs.map(function (cert, i) {
        return __jsx(_components_CertificateShow__WEBPACK_IMPORTED_MODULE_9__["default"], {
          certPath: cert.certificate,
          org: cert.name,
          key: i,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 15
          }
        });
      }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1007820007",
        __self: this
      }, "div.jsx-1007820007{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:80%;margin:2% 20%;overflow-y:scroll;}@media screen and (max-width:600px){div.jsx-1007820007{margin:15% 5% 25%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWluYWthbm8vd29ya3NwYWNlL2FuYWthbm8vcGFnZXMvanAvY2VydGlmaWNhdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEJXLEFBRzRCLEFBVU8sa0JBQ3BCLHdEQVZlLHlEQUNRLG1HQUNiLFVBQ0ksY0FDSSxrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL2FtaW5ha2Fuby93b3Jrc3BhY2UvYW5ha2Fuby9wYWdlcy9qcC9jZXJ0aWZpY2F0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTXlMYXlvdXRcIjtcbmltcG9ydCBNYWluIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL01haW5cIjtcbmltcG9ydCBDZXJ0aWZpY2F0ZVNob3cgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ2VydGlmaWNhdGVTaG93XCI7XG5pbXBvcnQgZGF0YSBmcm9tIFwiLi4vLi4vcHVibGljL2pzb24vZGF0YS5qc29uXCI7XG5jb25zdCBjZXJ0cyA9IGRhdGEuY2VydGlmaWNhdGVzO1xuaW1wb3J0IHdpbmRvdyBmcm9tIFwiZ2xvYmFsXCI7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuXG5jbGFzcyBQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2XCIpO1xuICAgIGNvbnNvbGUubG9nKGRpdilcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPE1haW4gYmc9XCIjYTVkMGUxXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtjb25zb2xlLmxvZyh3aW5kb3cpfVxuICAgICAgICAgICAge2NlcnRzLm1hcCgoY2VydCwgaSkgPT4gKFxuICAgICAgICAgICAgICA8Q2VydGlmaWNhdGVTaG93XG4gICAgICAgICAgICAgICAgY2VydFBhdGg9e2NlcnQuY2VydGlmaWNhdGV9XG4gICAgICAgICAgICAgICAgb3JnPXtjZXJ0Lm5hbWV9XG4gICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTWFpbj5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAyJSAyMCU7XG4gICAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDE1JSA1JSAyNSU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxufVxuLy8gY29uc3QgUGFnZSA9ICgpID0+IChcbi8vICAgPD5cbi8vICAgICA8TWFpbiBiZz1cIiNhNWQwZTFcIj5cbi8vICAgICAgIDxkaXY+XG4vLyAgICAgICAgIHtjb25zb2xlLmxvZyh3aW5kb3cpfVxuLy8gICAgICAgICB7Y2VydHMubWFwKChjZXJ0LCBpKSA9PiAoXG4vLyAgICAgICAgICAgPENlcnRpZmljYXRlU2hvdyBjZXJ0UGF0aD17Y2VydC5jZXJ0aWZpY2F0ZX0gb3JnPXtjZXJ0Lm5hbWV9IGtleT17aX0gLz5cbi8vICAgICAgICAgKSl9XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICA8L01haW4+XG4vLyAgICAgPHN0eWxlIGpzeD5cbi8vICAgICAgIHtgXG4vLyAgICAgICAgIGRpdiB7XG4vLyAgICAgICAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4vLyAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4vLyAgICAgICAgICAgd2lkdGg6IDgwJTtcbi8vICAgICAgICAgICBtYXJnaW46IDIlIDIwJTtcbi8vICAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4vLyAgICAgICAgIH1cblxuLy8gICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuLy8gICAgICAgICAgIGRpdiB7XG4vLyAgICAgICAgICAgICBtYXJnaW46IDE1JSA1JSAyNSU7XG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG4vLyAgICAgICBgfVxuLy8gICAgIDwvc3R5bGU+XG4vLyAgIDwvPlxuLy8gKTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0KFBhZ2UpO1xuIl19 */\n/*@ sourceURL=/Users/aminakano/workspace/anakano/pages/jp/certifications.js */"));
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]); // const Page = () => (
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


/* harmony default export */ __webpack_exports__["default"] = (Object(_components_MyLayout__WEBPACK_IMPORTED_MODULE_7__["default"])(Page));

/***/ })

})
//# sourceMappingURL=certifications.js.f79bdafe57e4c723376e.hot-update.js.map