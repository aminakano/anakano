exports.ids = [0];
exports.modules = {

/***/ "./components/Carrousel.js":
/*!*********************************!*\
  !*** ./components/Carrousel.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_glide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-glide */ "react-glide");
/* harmony import */ var react_glide__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_glide__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_json_data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/json/data.json */ "./public/json/data.json");
var _public_json_data_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../public/json/data.json */ "./public/json/data.json", 1);
var _jsxFileName = "/Users/aminakano/workspace/anakano/components/Carrousel.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const images = _public_json_data_json__WEBPACK_IMPORTED_MODULE_2__.work; // class Carrousel extends Component {
//   constructor(props){
//     super(props)
//   }
//   render(){
//     const images = data.work;
//     return (
//       <Glide
//         height={400}
//         width={400}
//         autoPlay={true}
//         autoPlaySpeed={2000}
//         dots={true}
//         infinite={true}
//         onSlideChange={() => console.log("slide changed")}
//       >
//         {images.map((image, i) => {
//           <img src={image.img} />
//         })}      
//       </Glide>
//     );
//   }
// }

const imgStyle = {
  height: "400px",
  width: "300px"
};

const Carrousel = () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_glide__WEBPACK_IMPORTED_MODULE_1__["Glide"], {
  height: 300,
  width: 400,
  autoPlay: true,
  autoPlaySpeed: 2000,
  dots: true,
  infinite: true,
  onSlideChange: () => console.log("slide changed"),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }
}, __jsx("img", {
  src: images[0].img,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 7
  }
}), __jsx("img", {
  src: images[1].img,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 7
  }
}), __jsx("img", {
  src: images[2].img,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 7
  }
}), __jsx("img", {
  src: images[3].img,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 7
  }
})));

/* harmony default export */ __webpack_exports__["default"] = (Carrousel);

/***/ }),

/***/ "./public/json/data.json":
/*!*******************************!*\
  !*** ./public/json/data.json ***!
  \*******************************/
/*! exports provided: work, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"work\":[{\"title\":\"Soccer League\",\"content\":\"A static multi-paged website with HTML & CSS\",\"url\":\"https://aminakano.github.io/nysl-project/html/index.html\",\"img\":\"../image/NYSL_web.png\"},{\"title\":\"US Government Congress Tracking\",\"content\":\"A dynamic website using fetch API with HTML, CSS + Bootstrap & JavaScript\",\"url\":\"https://t-g-i-f.herokuapp.com/\",\"img\":\"../image/TGIF.png\"},{\"title\":\"Soccer League Mobile\",\"content\":\"A mobile optimised Single Page Application with HTML, CSS, JavaScript + Vue.js and synchronous chat using Firebase\",\"url\":\"https://ami-nyslmobile.firebaseapp.com/\",\"img\":\"../image/NYSL_mob.png\"},{\"title\":\"Trivia Quiz\",\"content\":\"A fully responsive Single Page Application with TypeScript, CSS preprocessor (SCSS) and Axios\",\"url\":\"https://trivia-quiz-vue.herokuapp.com/\",\"img\":\"../image/quiz.png\"}]}");

/***/ })

};;
//# sourceMappingURL=0.js.map