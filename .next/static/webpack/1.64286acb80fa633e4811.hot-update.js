webpackHotUpdate(1,{

/***/ "./components/Carrousel.js":
/*!*********************************!*\
  !*** ./components/Carrousel.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_glide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-glide */ "./node_modules/react-glide/lib/index.js");
/* harmony import */ var react_glide__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_glide__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_json_data_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/json/data.json */ "./public/json/data.json");
var _public_json_data_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../public/json/data.json */ "./public/json/data.json", 1);





var _jsxFileName = "/Users/aminakano/workspace/anakano/components/Carrousel.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var images = _public_json_data_json__WEBPACK_IMPORTED_MODULE_7__.work;

var Carrousel = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Carrousel, _Component);

  var _super = _createSuper(Carrousel);

  function Carrousel(props) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Carrousel);

    return _super.call(this, props);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Carrousel, [{
    key: "render",
    value: function render() {
      var _this = this;

      var images = _public_json_data_json__WEBPACK_IMPORTED_MODULE_7__.work;
      var slideList = images.map(function (image, i) {
        __jsx("img", {
          src: image.img,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 7
          }
        });
      });
      return __jsx(react_glide__WEBPACK_IMPORTED_MODULE_6__["Glide"], {
        height: 400,
        width: 400,
        autoPlay: true,
        autoPlaySpeed: 3000,
        dots: true,
        infinite: true,
        onSlideChange: function onSlideChange() {
          return console.log("slide changed");
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 7
        }
      }, this.props.slideList);
    }
  }]);

  return Carrousel;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]); // const Carrousel = () => (  
//   <>
//     <Glide
//       height={300}
//       width={500}
//       autoPlay={true}
//       autoPlaySpeed={2000}
//       dots={true}
//       infinite={true}
//       onSlideChange={() => console.log("slide changed")}
//         >
//       <img src={images[0].img} />
//       <img src={images[1].img} />
//       <img src={images[2].img} />
//       <img src={images[3].img} />
//     </Glide>
//   </>
// )


/* harmony default export */ __webpack_exports__["default"] = (Carrousel);

/***/ })

})
//# sourceMappingURL=1.64286acb80fa633e4811.hot-update.js.map