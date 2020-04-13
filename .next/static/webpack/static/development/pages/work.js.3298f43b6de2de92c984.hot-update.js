webpackHotUpdate("static/development/pages/work.js",{

/***/ "./pages/work.js":
/*!***********************!*\
  !*** ./pages/work.js ***!
  \***********************/
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
/* harmony import */ var _public_mac_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/mac.png */ "./public/mac.png");
/* harmony import */ var _public_mac_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_mac_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var _public_NYSL_web_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/NYSL_web.png */ "./public/NYSL_web.png");
/* harmony import */ var _public_NYSL_web_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_NYSL_web_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_TGIF_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../public/TGIF.png */ "./public/TGIF.png");
/* harmony import */ var _public_TGIF_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_TGIF_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _public_NYSL_mob_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../public/NYSL_mob.png */ "./public/NYSL_mob.png");
/* harmony import */ var _public_NYSL_mob_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_NYSL_mob_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _public_quiz_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../public/quiz.png */ "./public/quiz.png");
/* harmony import */ var _public_quiz_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_public_quiz_png__WEBPACK_IMPORTED_MODULE_12__);





var _jsxFileName = "/Users/aminakano/workspace/anakano/pages/work.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









var Page = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Page, _Component);

  var _super = _createSuper(Page);

  function Page() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Page);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Page, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var count = 0; // const li = document.getElementsByTagName("li");

      var ul = document.getElementById("slider");
      var slider = [];
      console.log(ul.childNodes);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var images = [_public_NYSL_web_png__WEBPACK_IMPORTED_MODULE_9___default.a, _public_TGIF_png__WEBPACK_IMPORTED_MODULE_10___default.a, _public_NYSL_mob_png__WEBPACK_IMPORTED_MODULE_11___default.a, _public_quiz_png__WEBPACK_IMPORTED_MODULE_12___default.a];

      var trigger = function trigger() {
        count < 3 ? count++ : count = 0;
        console.log(count);
      };

      var imgStyle = {
        width: "530px",
        height: "330px"
      };
      var listStyle = {
        listStyle: "none"
      };
      var imgList = images.map(function (image, i) {
        return __jsx("li", {
          className: "list" + i,
          key: i,
          style: listStyle,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 7
          }
        }, __jsx("img", {
          src: image,
          style: imgStyle,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 9
          }
        }));
      });
      return __jsx("div", {
        className: "jsx-1067066592" + " " + "main",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 7
        }
      }, __jsx("h1", {
        className: "jsx-1067066592",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 9
        }
      }, "Title"), __jsx("div", {
        className: "jsx-1067066592" + " " + "cover",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 9
        }
      }, __jsx("ul", {
        id: "slider",
        className: "jsx-1067066592",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }
      }, imgList), __jsx("div", {
        onClick: trigger,
        className: "jsx-1067066592",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }
      }, "hey")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1067066592",
        __self: this
      }, ".main.jsx-1067066592{width:100%;height:92vh;background-color:#25252b;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#fff;}p.jsx-1067066592{font-size:2rem;}img.jsx-1067066592{width:530px;height:330px;}.cover.jsx-1067066592{background:url(\"/mac.png\");width:700px;height:400px;background-repeat:no-repeat;background-size:cover;}li.jsx-1067066592{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;list-style:none;margin-top:1.5rem;}.list1.jsx-1067066592,.list2.jsx-1067066592,.list3.jsx-1067066592{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWluYWthbm8vd29ya3NwYWNlL2FuYWthbm8vcGFnZXMvd29yay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RFcsQUFHMEIsQUFVSSxBQUdILEFBSWUsQUFPZCxBQU1ELFdBN0JBLENBYUMsQ0FpQmYsRUFwQkEsUUFUMkIsRUFhM0IsRUFHYyxZQUNDLFNBaEJBLElBaUJlLHNCQUtMLE1BSkQsc0JBQ3hCLG9CQWxCd0IsbURBc0JOLGdCQUNFLFdBdEJDLE9BdUJyQixzRkF0QnlCLG1HQUNaLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL2FtaW5ha2Fuby93b3Jrc3BhY2UvYW5ha2Fuby9wYWdlcy93b3JrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGltZyBmcm9tIFwiLi4vcHVibGljL21hYy5wbmdcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTXlMYXlvdXQuanNcIjtcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5cbmltcG9ydCBpbWcxIGZyb20gXCIuLi9wdWJsaWMvTllTTF93ZWIucG5nXCI7XG5pbXBvcnQgaW1nMiBmcm9tIFwiLi4vcHVibGljL1RHSUYucG5nXCI7XG5pbXBvcnQgaW1nMyBmcm9tIFwiLi4vcHVibGljL05ZU0xfbW9iLnBuZ1wiO1xuaW1wb3J0IGltZzQgZnJvbSBcIi4uL3B1YmxpYy9xdWl6LnBuZ1wiO1xuXG5jbGFzcyBQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBcblxuICAgIGxldCBjb3VudCA9IDA7XG4gICAgLy8gY29uc3QgbGkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImxpXCIpO1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGlkZXJcIik7XG4gICAgY29uc3Qgc2xpZGVyID0gW107XG4gICAgY29uc29sZS5sb2codWwuY2hpbGROb2RlcylcblxuICAgIFxuICB9XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgaW1hZ2VzID0gW2ltZzEsIGltZzIsIGltZzMsIGltZzRdO1xuICAgIGNvbnN0IHRyaWdnZXIgPSAoKSA9PiB7XG4gICAgICBjb3VudCA8IDMgPyBjb3VudCsrIDogKGNvdW50ID0gMCk7XG4gICAgICBjb25zb2xlLmxvZyhjb3VudCk7XG4gICAgfTtcbiAgICBjb25zdCBpbWdTdHlsZSA9IHtcbiAgICAgIHdpZHRoOiBcIjUzMHB4XCIsXG4gICAgICBoZWlnaHQ6IFwiMzMwcHhcIlxuICAgIH1cbiAgICBjb25zdCBsaXN0U3R5bGUgPSB7XG4gICAgICBsaXN0U3R5bGU6IFwibm9uZVwiXG4gICAgfVxuICAgIGNvbnN0IGltZ0xpc3QgPSBpbWFnZXMubWFwKChpbWFnZSwgaSkgPT4gKFxuICAgICAgPGxpIGNsYXNzTmFtZT17XCJsaXN0XCIgKyBpfSBrZXk9e2l9IHN0eWxlPXtsaXN0U3R5bGV9PlxuICAgICAgICA8aW1nIHNyYz17aW1hZ2V9IHN0eWxlPXtpbWdTdHlsZX0gLz5cbiAgICAgIDwvbGk+XG4gICAgKSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICAgIDxoMT5UaXRsZTwvaDE+XG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNvdmVyXCI+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAge2ltYWdlcy5tYXAoKGltYWdlLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e1wibGlzdFwiK2l9IGtleT17aX0+PGltZyBzcmM9e2ltYWdlfSAvPjwvbGk+XG4gICAgICAgICAgICApKX1cblxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPGRpdiBvbkNsaWNrPXt0cmlnZ2VyfT5oZXk8L2Rpdj5cbiAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdmVyXCI+XG4gICAgICAgICAgPHVsIGlkPVwic2xpZGVyXCI+XG4gICAgICAgICAgICB7aW1nTGlzdH1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDxkaXYgb25DbGljaz17dHJpZ2dlcn0+aGV5PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAubWFpbiB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDkydmg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNTI1MmI7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICB3aWR0aDogNTMwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMzMwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY292ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIvbWFjLnBuZ1wiKTtcbiAgICAgICAgICAgICAgd2lkdGg6IDcwMHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMS41cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxpc3QxLC5saXN0MiwubGlzdDMge1xuICAgICAgICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cbi8vIGNvbnN0IFBhZ2UgPSAoKSA9PiAoXG4vLyAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuLy8gICAgIDxoMT5UaXRsZTwvaDE+XG4vLyAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3ZlclwiPlxuLy8gICAgICAgPHVsPlxuLy8gICAgICAgICB7LyogPGxpPlxuLy8gICAgICAgICAgIDxpbWcgc3JjPXtpbWcxfSAvPlxuLy8gICAgICAgICA8L2xpPiAqL31cbi8vICAgICAgICAgPGxpPlxuLy8gICAgICAgICAgICAgPGltZyBzcmM9e2ltZzJ9IC8+XG4vLyAgICAgICAgICAgPC9saT5cbi8vICAgICAgICAgICB7LyogPGxpPlxuLy8gICAgICAgICAgICAgPGltZyBzcmM9e2ltZzN9IC8+XG4vLyAgICAgICAgICAgPC9saT5cbi8vICAgICAgICAgICA8bGk+XG4vLyAgICAgICAgICAgICA8aW1nIHNyYz17aW1nNH0gLz5cbi8vICAgICAgICAgICA8L2xpPiAqL31cbi8vICAgICAgIDwvdWw+XG4vLyAgICAgPC9kaXY+XG4vLyAgICAgPHN0eWxlIGpzeD5cbi8vICAgICAgIHtgXG4vLyAgICAgICAgIC5tYWluIHtcbi8vICAgICAgICAgICB3aWR0aDogMTAwJTtcbi8vICAgICAgICAgICBoZWlnaHQ6IDkydmg7XG4vLyAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI1MjUyYjtcbi8vICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4vLyAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbi8vICAgICAgICAgICBjb2xvcjogI2ZmZjtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBwIHtcbi8vICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgaW1nIHtcbi8vICAgICAgICAgICB3aWR0aDogNTMwcHg7XG4vLyAgICAgICAgICAgaGVpZ2h0OiAzMzBweDtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICAuY292ZXIge1xuLy8gICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcIi9tYWMucG5nXCIpO1xuLy8gICAgICAgICAgIHdpZHRoOiA3MDBweDtcbi8vICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xuLy8gICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4vLyAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBsaSB7XG4vLyAgICAgICAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbi8vICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuLy8gICAgICAgICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgYH1cbi8vICAgICA8L3N0eWxlPlxuLy8gICA8L2Rpdj5cbi8vICk7XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dChQYWdlKTtcbiJdfQ== */\n/*@ sourceURL=/Users/aminakano/workspace/anakano/pages/work.js */"));
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]); // const Page = () => (
//   <div className="main">
//     <h1>Title</h1>
//     <div className="cover">
//       <ul>
//         {/* <li>
//           <img src={img1} />
//         </li> */}
//         <li>
//             <img src={img2} />
//           </li>
//           {/* <li>
//             <img src={img3} />
//           </li>
//           <li>
//             <img src={img4} />
//           </li> */}
//       </ul>
//     </div>
//     <style jsx>
//       {`
//         .main {
//           width: 100%;
//           height: 92vh;
//           background-color: #25252b;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           color: #fff;
//         }
//         p {
//           font-size: 2rem;
//         }
//         img {
//           width: 530px;
//           height: 330px;
//         }
//         .cover {
//           background: url("/mac.png");
//           width: 700px;
//           height: 400px;
//           background-repeat: no-repeat;
//           background-size: cover;
//         }
//         li {
//           display: flex;
//           justify-content: center;
//           list-style: none;
//           margin-top: 1.5rem;
//         }
//       `}
//     </style>
//   </div>
// );


/* harmony default export */ __webpack_exports__["default"] = (Object(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_8__["default"])(Page));

/***/ })

})
//# sourceMappingURL=work.js.3298f43b6de2de92c984.hot-update.js.map