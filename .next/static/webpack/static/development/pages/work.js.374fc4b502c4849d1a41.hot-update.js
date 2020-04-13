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

  function Page(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Page);

    _this = _super.call(this, props);
    _this.state = {
      count: 0
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Page, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var ul = document.getElementById("slider");
      var li = ul.childNodes;
      var count = 0; // li.forEach((elem) => {
      //   elem.style.display = "none";
      // });
      // li[0].style.display = "flex";
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var images = [_public_NYSL_web_png__WEBPACK_IMPORTED_MODULE_9___default.a, _public_TGIF_png__WEBPACK_IMPORTED_MODULE_10___default.a, _public_NYSL_mob_png__WEBPACK_IMPORTED_MODULE_11___default.a, _public_quiz_png__WEBPACK_IMPORTED_MODULE_12___default.a];
      var count = 0;

      var trigger = function trigger() {
        // count < 3 ? count++ : (count = 0);
        _this2.setState(function (state, props) {
          count: state.count++;
        });

        console.log(count);
      };

      var imgStyle = {
        width: "530px",
        height: "330px"
      };
      var listStyle = {
        listStyle: "none",
        display: "flex",
        justifyContent: "center",
        marginTop: "1.5rem"
      };
      var imgList = images.map(function (image, i) {
        return __jsx("li", {
          className: "list" + i,
          key: i,
          style: listStyle,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 7
          }
        }, __jsx("img", {
          src: image,
          style: imgStyle,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 9
          }
        }));
      });
      return __jsx("div", {
        className: "jsx-298555751" + " " + "main",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 7
        }
      }, __jsx("h1", {
        className: "jsx-298555751",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 9
        }
      }, "Title"), __jsx("div", {
        className: "jsx-298555751" + " " + "cover",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 9
        }
      }, __jsx("ul", {
        id: "slider",
        className: "jsx-298555751",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }
      }, imgList[this.state.count]), __jsx("div", {
        onClick: trigger,
        className: "jsx-298555751",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }
      }, "hey")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "298555751",
        __self: this
      }, ".main.jsx-298555751{width:100%;height:92vh;background-color:#25252b;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#fff;}p.jsx-298555751{font-size:2rem;}img.jsx-298555751{width:530px;height:330px;}.cover.jsx-298555751{background:url(\"/mac.png\");width:700px;height:400px;background-repeat:no-repeat;background-size:cover;}li.jsx-298555751{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;list-style:none;margin-top:1.5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWluYWthbm8vd29ya3NwYWNlL2FuYWthbm8vcGFnZXMvd29yay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RFcsQUFHMEIsQUFVSSxBQUdILEFBSWUsQUFPZCxXQXZCRCxDQWFDLEdBSGYsUUFUMkIsRUFhM0IsRUFHYyxZQUNDLFNBaEJBLElBaUJlLHNCQUtMLE1BSkQsc0JBQ3hCLG9CQWxCd0IsbURBc0JOLGdCQUNFLFdBdEJDLE9BdUJyQixzRkF0QnlCLG1HQUNaLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL2FtaW5ha2Fuby93b3Jrc3BhY2UvYW5ha2Fuby9wYWdlcy93b3JrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGltZyBmcm9tIFwiLi4vcHVibGljL21hYy5wbmdcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTXlMYXlvdXQuanNcIjtcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5cbmltcG9ydCBpbWcxIGZyb20gXCIuLi9wdWJsaWMvTllTTF93ZWIucG5nXCI7XG5pbXBvcnQgaW1nMiBmcm9tIFwiLi4vcHVibGljL1RHSUYucG5nXCI7XG5pbXBvcnQgaW1nMyBmcm9tIFwiLi4vcHVibGljL05ZU0xfbW9iLnBuZ1wiO1xuaW1wb3J0IGltZzQgZnJvbSBcIi4uL3B1YmxpYy9xdWl6LnBuZ1wiO1xuXG5jbGFzcyBQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgY291bnQ6IDAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGlkZXJcIik7XG4gICAgY29uc3QgbGkgPSB1bC5jaGlsZE5vZGVzO1xuXG4gICAgbGV0IGNvdW50ID0gMDtcblxuICAgIC8vIGxpLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAvLyAgIGVsZW0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIC8vIH0pO1xuICAgIC8vIGxpWzBdLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaW1hZ2VzID0gW2ltZzEsIGltZzIsIGltZzMsIGltZzRdO1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgY29uc3QgdHJpZ2dlciA9ICgpID0+IHtcbiAgICAgIC8vIGNvdW50IDwgMyA/IGNvdW50KysgOiAoY291bnQgPSAwKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoKHN0YXRlLCBwcm9wcykgPT4ge1xuICAgICAgICBjb3VudDogc3RhdGUuY291bnQrKztcbiAgICAgIH0pXG4gICAgICBjb25zb2xlLmxvZyhjb3VudCk7XG4gICAgfTtcbiAgICBjb25zdCBpbWdTdHlsZSA9IHtcbiAgICAgIHdpZHRoOiBcIjUzMHB4XCIsXG4gICAgICBoZWlnaHQ6IFwiMzMwcHhcIixcbiAgICB9O1xuICAgIGNvbnN0IGxpc3RTdHlsZSA9IHtcbiAgICAgIGxpc3RTdHlsZTogXCJub25lXCIsXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgbWFyZ2luVG9wOiBcIjEuNXJlbVwiLFxuICAgIH07XG4gICAgY29uc3QgaW1nTGlzdCA9IGltYWdlcy5tYXAoKGltYWdlLCBpKSA9PiAoXG4gICAgICA8bGkgY2xhc3NOYW1lPXtcImxpc3RcIiArIGl9IGtleT17aX0gc3R5bGU9e2xpc3RTdHlsZX0+XG4gICAgICAgIDxpbWcgc3JjPXtpbWFnZX0gc3R5bGU9e2ltZ1N0eWxlfSAvPlxuICAgICAgPC9saT5cbiAgICApKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgICAgPGgxPlRpdGxlPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3ZlclwiPlxuICAgICAgICAgIDx1bCBpZD1cInNsaWRlclwiPntpbWdMaXN0W3RoaXMuc3RhdGUuY291bnRdfTwvdWw+XG4gICAgICAgICAgPGRpdiBvbkNsaWNrPXt0cmlnZ2VyfT5oZXk8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIC5tYWluIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGhlaWdodDogOTJ2aDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI1MjUyYjtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgIHdpZHRoOiA1MzBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMzBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcIi9tYWMucG5nXCIpO1xuICAgICAgICAgICAgICB3aWR0aDogNzAwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG4vLyBjb25zdCBQYWdlID0gKCkgPT4gKFxuLy8gICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbi8vICAgICA8aDE+VGl0bGU8L2gxPlxuLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwiY292ZXJcIj5cbi8vICAgICAgIDx1bD5cbi8vICAgICAgICAgey8qIDxsaT5cbi8vICAgICAgICAgICA8aW1nIHNyYz17aW1nMX0gLz5cbi8vICAgICAgICAgPC9saT4gKi99XG4vLyAgICAgICAgIDxsaT5cbi8vICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWcyfSAvPlxuLy8gICAgICAgICAgIDwvbGk+XG4vLyAgICAgICAgICAgey8qIDxsaT5cbi8vICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWczfSAvPlxuLy8gICAgICAgICAgIDwvbGk+XG4vLyAgICAgICAgICAgPGxpPlxuLy8gICAgICAgICAgICAgPGltZyBzcmM9e2ltZzR9IC8+XG4vLyAgICAgICAgICAgPC9saT4gKi99XG4vLyAgICAgICA8L3VsPlxuLy8gICAgIDwvZGl2PlxuLy8gICAgIDxzdHlsZSBqc3g+XG4vLyAgICAgICB7YFxuLy8gICAgICAgICAubWFpbiB7XG4vLyAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgICAgICAgaGVpZ2h0OiA5MnZoO1xuLy8gICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNTI1MmI7XG4vLyAgICAgICAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuLy8gICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4vLyAgICAgICAgICAgY29sb3I6ICNmZmY7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgcCB7XG4vLyAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGltZyB7XG4vLyAgICAgICAgICAgd2lkdGg6IDUzMHB4O1xuLy8gICAgICAgICAgIGhlaWdodDogMzMwcHg7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgLmNvdmVyIHtcbi8vICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIvbWFjLnBuZ1wiKTtcbi8vICAgICAgICAgICB3aWR0aDogNzAwcHg7XG4vLyAgICAgICAgICAgaGVpZ2h0OiA0MDBweDtcbi8vICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuLy8gICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgbGkge1xuLy8gICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4vLyAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbi8vICAgICAgICAgICBtYXJnaW4tdG9wOiAxLjVyZW07XG4vLyAgICAgICAgIH1cbi8vICAgICAgIGB9XG4vLyAgICAgPC9zdHlsZT5cbi8vICAgPC9kaXY+XG4vLyApO1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQoUGFnZSk7XG4iXX0= */\n/*@ sourceURL=/Users/aminakano/workspace/anakano/pages/work.js */"));
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
//# sourceMappingURL=work.js.374fc4b502c4849d1a41.hot-update.js.map