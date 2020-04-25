webpackHotUpdate(1,{

/***/ "./components/Carrousel.js":
/*!*********************************!*\
  !*** ./components/Carrousel.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_glide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-glide */ "./node_modules/react-glide/lib/index.js");
/* harmony import */ var react_glide__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_glide__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_json_data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/json/data.json */ "./public/json/data.json");
var _public_json_data_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../public/json/data.json */ "./public/json/data.json", 1);
var _this = undefined,
    _jsxFileName = "/Users/aminakano/workspace/anakano/components/Carrousel.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var images = _public_json_data_json__WEBPACK_IMPORTED_MODULE_2__.work; // class Carrousel extends Component {
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

var imgStyle = {
  height: "400px",
  width: "300px"
};

var Carrousel = function Carrousel() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_glide__WEBPACK_IMPORTED_MODULE_1__["Glide"], {
    height: 300,
    width: 500,
    autoPlay: true,
    autoPlaySpeed: 2000,
    dots: true,
    infinite: true,
    onSlideChange: function onSlideChange() {
      return console.log("slide changed");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: images[0].img,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }), __jsx("img", {
    src: images[1].img,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }), __jsx("img", {
    src: images[2].img,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }), __jsx("img", {
    src: images[3].img,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Carrousel);

/***/ })

})
//# sourceMappingURL=1.06a4ad78482f5557c77b.hot-update.js.map