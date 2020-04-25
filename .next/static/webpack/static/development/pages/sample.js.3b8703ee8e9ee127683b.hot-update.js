webpackHotUpdate("static/development/pages/sample.js",{

/***/ "./pages/sample.js":
/*!*************************!*\
  !*** ./pages/sample.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_json_data_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/json/data.json */ "./public/json/data.json");
var _public_json_data_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../public/json/data.json */ "./public/json/data.json", 1);
var _this = undefined,
    _jsxFileName = "/Users/aminakano/workspace/anakano/pages/sample.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Carrousel = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../components/Carrousel */ "./components/Carrousel.js"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../components/Carrousel */ "./components/Carrousel.js")];
    },
    modules: ["../components/Carrousel"]
  }
});
var images = _public_json_data_json__WEBPACK_IMPORTED_MODULE_3__.work;

var Page = function Page() {
  return __jsx(Carrousel, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 3
    }
  });
}; // class Page extends Component {
//   constructor(props) {
//     super(props)
//     props = {
//       images: [
//         { id: 0, text: img1 },
//         { id: 1, text: img2 },
//         { id: 2, text: img3 },
//         { id: 3, text: img4 },
//       ],
//       messages: [
//         { id: 0, text: "hi" },
//         { id: 1, text: "ciao" },
//         { id: 2, text: "tag" },
//         { id: 3, text: "dag" },
//       ],
//     };
//   }
//   render() {
//     return (
//       <div className="main">
//         <Carrousel>
//           {this.props.messages.map((message, i) => {
//             <li>{message.text}</li>;
//           })}
//         </Carrousel>
//         <style jsx>{``}</style>
//       </div>
//     );
//   }
// }


/* harmony default export */ __webpack_exports__["default"] = (Object(_components_MyLayout__WEBPACK_IMPORTED_MODULE_1__["default"])(Page));

/***/ })

})
//# sourceMappingURL=sample.js.3b8703ee8e9ee127683b.hot-update.js.map