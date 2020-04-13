webpackHotUpdate("static/development/pages/work.js",{

/***/ "./pages/work.js":
/*!***********************!*\
  !*** ./pages/work.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_mac_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/mac.png */ "./public/mac.png");
/* harmony import */ var _public_mac_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_mac_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @glidejs/glide */ "./node_modules/@glidejs/glide/dist/glide.esm.js");
/* harmony import */ var _public_NYSL_web_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/NYSL_web.png */ "./public/NYSL_web.png");
/* harmony import */ var _public_NYSL_web_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_NYSL_web_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_TGIF_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/TGIF.png */ "./public/TGIF.png");
/* harmony import */ var _public_TGIF_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_TGIF_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_NYSL_mob_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/NYSL_mob.png */ "./public/NYSL_mob.png");
/* harmony import */ var _public_NYSL_mob_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_NYSL_mob_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_quiz_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/quiz.png */ "./public/quiz.png");
/* harmony import */ var _public_quiz_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_quiz_png__WEBPACK_IMPORTED_MODULE_8__);
var _this = undefined,
    _jsxFileName = "/Users/aminakano/workspace/anakano/pages/work.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









var Page = function Page() {
  var images = [_public_NYSL_web_png__WEBPACK_IMPORTED_MODULE_5___default.a, _public_TGIF_png__WEBPACK_IMPORTED_MODULE_6___default.a, _public_NYSL_mob_png__WEBPACK_IMPORTED_MODULE_7___default.a, _public_quiz_png__WEBPACK_IMPORTED_MODULE_8___default.a];
  var imgList = images.map(function (image, i) {
    return __jsx("li", {
      className: "list" + i,
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 5
      }
    }, __jsx("img", {
      src: image,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 7
      }
    }));
  });
  var count = 0;
  var li = document.getElementsByTagName("li");
  console.log(li);

  var trigger = function trigger() {
    count < 4 ? count++ : count = 0;
    console.log(count);
  };

  return __jsx("div", {
    className: "jsx-1067066592" + " " + "main",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "jsx-1067066592",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, "Title"), __jsx("div", {
    className: "jsx-1067066592" + " " + "cover",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("ul", {
    className: "jsx-1067066592",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, images.map(function (image, i) {
    return __jsx("li", {
      key: i,
      className: "jsx-1067066592" + " " + ("list" + i || false),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 15
      }
    }, __jsx("img", {
      src: image,
      className: "jsx-1067066592",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 48
      }
    }));
  })), __jsx("div", {
    onClick: trigger,
    className: "jsx-1067066592",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, "hey")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1067066592",
    __self: _this
  }, ".main.jsx-1067066592{width:100%;height:92vh;background-color:#25252b;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#fff;}p.jsx-1067066592{font-size:2rem;}img.jsx-1067066592{width:530px;height:330px;}.cover.jsx-1067066592{background:url(\"/mac.png\");width:700px;height:400px;background-repeat:no-repeat;background-size:cover;}li.jsx-1067066592{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;list-style:none;margin-top:1.5rem;}.list1.jsx-1067066592,.list2.jsx-1067066592,.list3.jsx-1067066592{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWluYWthbm8vd29ya3NwYWNlL2FuYWthbm8vcGFnZXMvd29yay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3Q1csQUFHMEIsQUFVSSxBQUdILEFBSWUsQUFPZCxBQU1ELFdBN0JBLENBYUMsQ0FpQmYsRUFwQkEsUUFUMkIsRUFhM0IsRUFHYyxZQUNDLFNBaEJBLElBaUJlLHNCQUtMLE1BSkQsc0JBQ3hCLG9CQWxCd0IsbURBc0JOLGdCQUNFLFdBdEJDLE9BdUJyQixzRkF0QnlCLG1HQUNaLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL2FtaW5ha2Fuby93b3Jrc3BhY2UvYW5ha2Fuby9wYWdlcy93b3JrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGltZyBmcm9tIFwiLi4vcHVibGljL21hYy5wbmdcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTXlMYXlvdXQuanNcIjtcbmltcG9ydCBHbGlkZSBmcm9tIFwiQGdsaWRlanMvZ2xpZGVcIjtcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5cbmltcG9ydCBpbWcxIGZyb20gXCIuLi9wdWJsaWMvTllTTF93ZWIucG5nXCI7XG5pbXBvcnQgaW1nMiBmcm9tIFwiLi4vcHVibGljL1RHSUYucG5nXCI7XG5pbXBvcnQgaW1nMyBmcm9tIFwiLi4vcHVibGljL05ZU0xfbW9iLnBuZ1wiO1xuaW1wb3J0IGltZzQgZnJvbSBcIi4uL3B1YmxpYy9xdWl6LnBuZ1wiO1xuXG5jb25zdCBQYWdlID0gKCkgPT4ge1xuXG4gIGNvbnN0IGltYWdlcyA9IFtpbWcxLCBpbWcyLCBpbWczLCBpbWc0XTtcbiAgY29uc3QgaW1nTGlzdCA9IGltYWdlcy5tYXAoKGltYWdlLCBpKSA9PiAoXG4gICAgPGxpIGNsYXNzTmFtZT17XCJsaXN0XCIgKyBpfSBrZXk9e2l9PlxuICAgICAgPGltZyBzcmM9e2ltYWdlfSAvPlxuICAgIDwvbGk+XG4gICkpO1xuICBsZXQgY291bnQgPSAwO1xuICBjb25zdCBsaSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibGlcIik7XG4gIGNvbnNvbGUubG9nKGxpKVxuICBjb25zdCB0cmlnZ2VyID0gKCkgPT4ge1xuICAgIGNvdW50IDwgNCA/IGNvdW50ICsrIDogY291bnQgPSAwO1xuICAgIGNvbnNvbGUubG9nKGNvdW50KVxuICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICAgIDxoMT5UaXRsZTwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY292ZXJcIj5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICB7aW1hZ2VzLm1hcCgoaW1hZ2UsIGkpID0+IChcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17XCJsaXN0XCIraX0ga2V5PXtpfT48aW1nIHNyYz17aW1hZ2V9IC8+PC9saT5cbiAgICAgICAgICAgICkpfVxuXG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e3RyaWdnZXJ9PmhleTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLm1haW4ge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA5MnZoO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyNTJiO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDUzMHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDMzMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiL21hYy5wbmdcIik7XG4gICAgICAgICAgICAgIHdpZHRoOiA3MDBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5saXN0MSwubGlzdDIsLmxpc3QzIHtcbiAgICAgICAgICAgICAgZGlzcGxheTpub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG59XG5cblxuLy8gY29uc3QgUGFnZSA9ICgpID0+IChcbi8vICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4vLyAgICAgPGgxPlRpdGxlPC9oMT5cbi8vICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdmVyXCI+XG4vLyAgICAgICA8dWw+XG4vLyAgICAgICAgIHsvKiA8bGk+XG4vLyAgICAgICAgICAgPGltZyBzcmM9e2ltZzF9IC8+XG4vLyAgICAgICAgIDwvbGk+ICovfVxuLy8gICAgICAgICA8bGk+XG4vLyAgICAgICAgICAgICA8aW1nIHNyYz17aW1nMn0gLz5cbi8vICAgICAgICAgICA8L2xpPlxuLy8gICAgICAgICAgIHsvKiA8bGk+XG4vLyAgICAgICAgICAgICA8aW1nIHNyYz17aW1nM30gLz5cbi8vICAgICAgICAgICA8L2xpPlxuLy8gICAgICAgICAgIDxsaT5cbi8vICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWc0fSAvPlxuLy8gICAgICAgICAgIDwvbGk+ICovfVxuLy8gICAgICAgPC91bD5cbi8vICAgICA8L2Rpdj5cbi8vICAgICA8c3R5bGUganN4PlxuLy8gICAgICAge2Bcbi8vICAgICAgICAgLm1haW4ge1xuLy8gICAgICAgICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgICAgICAgIGhlaWdodDogOTJ2aDtcbi8vICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyNTJiO1xuLy8gICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbi8vICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuLy8gICAgICAgICAgIGNvbG9yOiAjZmZmO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIHAge1xuLy8gICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBpbWcge1xuLy8gICAgICAgICAgIHdpZHRoOiA1MzBweDtcbi8vICAgICAgICAgICBoZWlnaHQ6IDMzMHB4O1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIC5jb3ZlciB7XG4vLyAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiL21hYy5wbmdcIik7XG4vLyAgICAgICAgICAgd2lkdGg6IDcwMHB4O1xuLy8gICAgICAgICAgIGhlaWdodDogNDAwcHg7XG4vLyAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbi8vICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGxpIHtcbi8vICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuLy8gICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4vLyAgICAgICAgICAgbWFyZ2luLXRvcDogMS41cmVtO1xuLy8gICAgICAgICB9XG4vLyAgICAgICBgfVxuLy8gICAgIDwvc3R5bGU+XG4vLyAgIDwvZGl2PlxuLy8gKTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0KFBhZ2UpO1xuIl19 */\n/*@ sourceURL=/Users/aminakano/workspace/anakano/pages/work.js */"));
}; // const Page = () => (
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


/* harmony default export */ __webpack_exports__["default"] = (Object(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Page));

/***/ })

})
//# sourceMappingURL=work.js.d9e9230e118cb44cbcbc.hot-update.js.map