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
      var li = document.getElementsByTagName("li"); // const slideLi = li.forEach(elem => {
      //   return elem[i] >= 4;
      // })

      console.log(li[1]);
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
      }, ".main.jsx-1067066592{width:100%;height:92vh;background-color:#25252b;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#fff;}p.jsx-1067066592{font-size:2rem;}img.jsx-1067066592{width:530px;height:330px;}.cover.jsx-1067066592{background:url(\"/mac.png\");width:700px;height:400px;background-repeat:no-repeat;background-size:cover;}li.jsx-1067066592{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;list-style:none;margin-top:1.5rem;}.list1.jsx-1067066592,.list2.jsx-1067066592,.list3.jsx-1067066592{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWluYWthbm8vd29ya3NwYWNlL2FuYWthbm8vcGFnZXMvd29yay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RFcsQUFHMEIsQUFVSSxBQUdILEFBSWUsQUFPZCxBQU1ELFdBN0JBLENBYUMsQ0FpQmYsRUFwQkEsUUFUMkIsRUFhM0IsRUFHYyxZQUNDLFNBaEJBLElBaUJlLHNCQUtMLE1BSkQsc0JBQ3hCLG9CQWxCd0IsbURBc0JOLGdCQUNFLFdBdEJDLE9BdUJyQixzRkF0QnlCLG1HQUNaLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL2FtaW5ha2Fuby93b3Jrc3BhY2UvYW5ha2Fuby9wYWdlcy93b3JrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGltZyBmcm9tIFwiLi4vcHVibGljL21hYy5wbmdcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTXlMYXlvdXQuanNcIjtcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5cbmltcG9ydCBpbWcxIGZyb20gXCIuLi9wdWJsaWMvTllTTF93ZWIucG5nXCI7XG5pbXBvcnQgaW1nMiBmcm9tIFwiLi4vcHVibGljL1RHSUYucG5nXCI7XG5pbXBvcnQgaW1nMyBmcm9tIFwiLi4vcHVibGljL05ZU0xfbW9iLnBuZ1wiO1xuaW1wb3J0IGltZzQgZnJvbSBcIi4uL3B1YmxpYy9xdWl6LnBuZ1wiO1xuXG5jbGFzcyBQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBcblxuICAgIGxldCBjb3VudCA9IDA7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImxpXCIpO1xuICAgIC8vIGNvbnN0IHNsaWRlTGkgPSBsaS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgIC8vICAgcmV0dXJuIGVsZW1baV0gPj0gNDtcbiAgICAvLyB9KVxuICAgIGNvbnNvbGUubG9nKGxpWzFdKTtcbiAgICBcbiAgfVxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IGltYWdlcyA9IFtpbWcxLCBpbWcyLCBpbWczLCBpbWc0XTtcbiAgICBjb25zdCB0cmlnZ2VyID0gKCkgPT4ge1xuICAgICAgY291bnQgPCAzID8gY291bnQrKyA6IChjb3VudCA9IDApO1xuICAgICAgY29uc29sZS5sb2coY291bnQpO1xuICAgIH07XG4gICAgY29uc3QgaW1nU3R5bGUgPSB7XG4gICAgICB3aWR0aDogXCI1MzBweFwiLFxuICAgICAgaGVpZ2h0OiBcIjMzMHB4XCJcbiAgICB9XG4gICAgY29uc3QgbGlzdFN0eWxlID0ge1xuICAgICAgbGlzdFN0eWxlOiBcIm5vbmVcIlxuICAgIH1cbiAgICBjb25zdCBpbWdMaXN0ID0gaW1hZ2VzLm1hcCgoaW1hZ2UsIGkpID0+IChcbiAgICAgIDxsaSBjbGFzc05hbWU9e1wibGlzdFwiICsgaX0ga2V5PXtpfSBzdHlsZT17bGlzdFN0eWxlfT5cbiAgICAgICAgPGltZyBzcmM9e2ltYWdlfSBzdHlsZT17aW1nU3R5bGV9IC8+XG4gICAgICA8L2xpPlxuICAgICkpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICA8aDE+VGl0bGU8L2gxPlxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJjb3ZlclwiPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIHtpbWFnZXMubWFwKChpbWFnZSwgaSkgPT4gKFxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtcImxpc3RcIitpfSBrZXk9e2l9PjxpbWcgc3JjPXtpbWFnZX0gLz48L2xpPlxuICAgICAgICAgICAgKSl9XG5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDxkaXYgb25DbGljaz17dHJpZ2dlcn0+aGV5PC9kaXY+XG4gICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3ZlclwiPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIHtpbWdMaXN0fVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPGRpdiBvbkNsaWNrPXt0cmlnZ2VyfT5oZXk8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIC5tYWluIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGhlaWdodDogOTJ2aDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI1MjUyYjtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgIHdpZHRoOiA1MzBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMzBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcIi9tYWMucG5nXCIpO1xuICAgICAgICAgICAgICB3aWR0aDogNzAwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGlzdDEsLmxpc3QyLC5saXN0MyB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuLy8gY29uc3QgUGFnZSA9ICgpID0+IChcbi8vICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4vLyAgICAgPGgxPlRpdGxlPC9oMT5cbi8vICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdmVyXCI+XG4vLyAgICAgICA8dWw+XG4vLyAgICAgICAgIHsvKiA8bGk+XG4vLyAgICAgICAgICAgPGltZyBzcmM9e2ltZzF9IC8+XG4vLyAgICAgICAgIDwvbGk+ICovfVxuLy8gICAgICAgICA8bGk+XG4vLyAgICAgICAgICAgICA8aW1nIHNyYz17aW1nMn0gLz5cbi8vICAgICAgICAgICA8L2xpPlxuLy8gICAgICAgICAgIHsvKiA8bGk+XG4vLyAgICAgICAgICAgICA8aW1nIHNyYz17aW1nM30gLz5cbi8vICAgICAgICAgICA8L2xpPlxuLy8gICAgICAgICAgIDxsaT5cbi8vICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWc0fSAvPlxuLy8gICAgICAgICAgIDwvbGk+ICovfVxuLy8gICAgICAgPC91bD5cbi8vICAgICA8L2Rpdj5cbi8vICAgICA8c3R5bGUganN4PlxuLy8gICAgICAge2Bcbi8vICAgICAgICAgLm1haW4ge1xuLy8gICAgICAgICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgICAgICAgIGhlaWdodDogOTJ2aDtcbi8vICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyNTJiO1xuLy8gICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbi8vICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuLy8gICAgICAgICAgIGNvbG9yOiAjZmZmO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIHAge1xuLy8gICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBpbWcge1xuLy8gICAgICAgICAgIHdpZHRoOiA1MzBweDtcbi8vICAgICAgICAgICBoZWlnaHQ6IDMzMHB4O1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIC5jb3ZlciB7XG4vLyAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiL21hYy5wbmdcIik7XG4vLyAgICAgICAgICAgd2lkdGg6IDcwMHB4O1xuLy8gICAgICAgICAgIGhlaWdodDogNDAwcHg7XG4vLyAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbi8vICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGxpIHtcbi8vICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuLy8gICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4vLyAgICAgICAgICAgbWFyZ2luLXRvcDogMS41cmVtO1xuLy8gICAgICAgICB9XG4vLyAgICAgICBgfVxuLy8gICAgIDwvc3R5bGU+XG4vLyAgIDwvZGl2PlxuLy8gKTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0KFBhZ2UpO1xuIl19 */\n/*@ sourceURL=/Users/aminakano/workspace/anakano/pages/work.js */"));
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
//# sourceMappingURL=work.js.224a37551b7a11c6d2e5.hot-update.js.map