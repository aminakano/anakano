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
      var count = 0;
      var li = document.getElementsByTagName("li");
      var slideLi = li.forEach(function (elem) {
        return elem[i] >= 4;
      });
      console.log(slideLi);
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
      }, ".main.jsx-1067066592{width:100%;height:92vh;background-color:#25252b;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#fff;}p.jsx-1067066592{font-size:2rem;}img.jsx-1067066592{width:530px;height:330px;}.cover.jsx-1067066592{background:url(\"/mac.png\");width:700px;height:400px;background-repeat:no-repeat;background-size:cover;}li.jsx-1067066592{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;list-style:none;margin-top:1.5rem;}.list1.jsx-1067066592,.list2.jsx-1067066592,.list3.jsx-1067066592{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWluYWthbm8vd29ya3NwYWNlL2FuYWthbm8vcGFnZXMvd29yay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RFcsQUFHMEIsQUFVSSxBQUdILEFBSWUsQUFPZCxBQU1ELFdBN0JBLENBYUMsQ0FpQmYsRUFwQkEsUUFUMkIsRUFhM0IsRUFHYyxZQUNDLFNBaEJBLElBaUJlLHNCQUtMLE1BSkQsc0JBQ3hCLG9CQWxCd0IsbURBc0JOLGdCQUNFLFdBdEJDLE9BdUJyQixzRkF0QnlCLG1HQUNaLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL2FtaW5ha2Fuby93b3Jrc3BhY2UvYW5ha2Fuby9wYWdlcy93b3JrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGltZyBmcm9tIFwiLi4vcHVibGljL21hYy5wbmdcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTXlMYXlvdXQuanNcIjtcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5cbmltcG9ydCBpbWcxIGZyb20gXCIuLi9wdWJsaWMvTllTTF93ZWIucG5nXCI7XG5pbXBvcnQgaW1nMiBmcm9tIFwiLi4vcHVibGljL1RHSUYucG5nXCI7XG5pbXBvcnQgaW1nMyBmcm9tIFwiLi4vcHVibGljL05ZU0xfbW9iLnBuZ1wiO1xuaW1wb3J0IGltZzQgZnJvbSBcIi4uL3B1YmxpYy9xdWl6LnBuZ1wiO1xuXG5jbGFzcyBQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBcblxuICAgIGxldCBjb3VudCA9IDA7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImxpXCIpO1xuICAgIGNvbnN0IHNsaWRlTGkgPSBsaS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgcmV0dXJuIGVsZW1baV0gPj0gNDtcbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKHNsaWRlTGkpO1xuICAgIFxuICB9XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgaW1hZ2VzID0gW2ltZzEsIGltZzIsIGltZzMsIGltZzRdO1xuICAgIGNvbnN0IHRyaWdnZXIgPSAoKSA9PiB7XG4gICAgICBjb3VudCA8IDMgPyBjb3VudCsrIDogKGNvdW50ID0gMCk7XG4gICAgICBjb25zb2xlLmxvZyhjb3VudCk7XG4gICAgfTtcbiAgICBjb25zdCBpbWdTdHlsZSA9IHtcbiAgICAgIHdpZHRoOiBcIjUzMHB4XCIsXG4gICAgICBoZWlnaHQ6IFwiMzMwcHhcIlxuICAgIH1cbiAgICBjb25zdCBsaXN0U3R5bGUgPSB7XG4gICAgICBsaXN0U3R5bGU6IFwibm9uZVwiXG4gICAgfVxuICAgIGNvbnN0IGltZ0xpc3QgPSBpbWFnZXMubWFwKChpbWFnZSwgaSkgPT4gKFxuICAgICAgPGxpIGNsYXNzTmFtZT17XCJsaXN0XCIgKyBpfSBrZXk9e2l9IHN0eWxlPXtsaXN0U3R5bGV9PlxuICAgICAgICA8aW1nIHNyYz17aW1hZ2V9IHN0eWxlPXtpbWdTdHlsZX0gLz5cbiAgICAgIDwvbGk+XG4gICAgKSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICAgIDxoMT5UaXRsZTwvaDE+XG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNvdmVyXCI+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAge2ltYWdlcy5tYXAoKGltYWdlLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e1wibGlzdFwiK2l9IGtleT17aX0+PGltZyBzcmM9e2ltYWdlfSAvPjwvbGk+XG4gICAgICAgICAgICApKX1cblxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPGRpdiBvbkNsaWNrPXt0cmlnZ2VyfT5oZXk8L2Rpdj5cbiAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdmVyXCI+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAge2ltZ0xpc3R9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e3RyaWdnZXJ9PmhleTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLm1haW4ge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA5MnZoO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyNTJiO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDUzMHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDMzMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiL21hYy5wbmdcIik7XG4gICAgICAgICAgICAgIHdpZHRoOiA3MDBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5saXN0MSwubGlzdDIsLmxpc3QzIHtcbiAgICAgICAgICAgICAgZGlzcGxheTpub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG4vLyBjb25zdCBQYWdlID0gKCkgPT4gKFxuLy8gICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbi8vICAgICA8aDE+VGl0bGU8L2gxPlxuLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwiY292ZXJcIj5cbi8vICAgICAgIDx1bD5cbi8vICAgICAgICAgey8qIDxsaT5cbi8vICAgICAgICAgICA8aW1nIHNyYz17aW1nMX0gLz5cbi8vICAgICAgICAgPC9saT4gKi99XG4vLyAgICAgICAgIDxsaT5cbi8vICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWcyfSAvPlxuLy8gICAgICAgICAgIDwvbGk+XG4vLyAgICAgICAgICAgey8qIDxsaT5cbi8vICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWczfSAvPlxuLy8gICAgICAgICAgIDwvbGk+XG4vLyAgICAgICAgICAgPGxpPlxuLy8gICAgICAgICAgICAgPGltZyBzcmM9e2ltZzR9IC8+XG4vLyAgICAgICAgICAgPC9saT4gKi99XG4vLyAgICAgICA8L3VsPlxuLy8gICAgIDwvZGl2PlxuLy8gICAgIDxzdHlsZSBqc3g+XG4vLyAgICAgICB7YFxuLy8gICAgICAgICAubWFpbiB7XG4vLyAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgICAgICAgaGVpZ2h0OiA5MnZoO1xuLy8gICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNTI1MmI7XG4vLyAgICAgICAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuLy8gICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4vLyAgICAgICAgICAgY29sb3I6ICNmZmY7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgcCB7XG4vLyAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGltZyB7XG4vLyAgICAgICAgICAgd2lkdGg6IDUzMHB4O1xuLy8gICAgICAgICAgIGhlaWdodDogMzMwcHg7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgLmNvdmVyIHtcbi8vICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIvbWFjLnBuZ1wiKTtcbi8vICAgICAgICAgICB3aWR0aDogNzAwcHg7XG4vLyAgICAgICAgICAgaGVpZ2h0OiA0MDBweDtcbi8vICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuLy8gICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgbGkge1xuLy8gICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4vLyAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbi8vICAgICAgICAgICBtYXJnaW4tdG9wOiAxLjVyZW07XG4vLyAgICAgICAgIH1cbi8vICAgICAgIGB9XG4vLyAgICAgPC9zdHlsZT5cbi8vICAgPC9kaXY+XG4vLyApO1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQoUGFnZSk7XG4iXX0= */\n/*@ sourceURL=/Users/aminakano/workspace/anakano/pages/work.js */"));
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
//# sourceMappingURL=work.js.4164dbc905b9bba14bdf.hot-update.js.map