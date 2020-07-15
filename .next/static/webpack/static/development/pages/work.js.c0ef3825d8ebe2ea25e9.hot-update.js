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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Main */ "./components/Main.js");
/* harmony import */ var _components_Work_WorkTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Work/WorkTitle */ "./components/Work/WorkTitle.js");
/* harmony import */ var _components_Work_WorkDesc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Work/WorkDesc */ "./components/Work/WorkDesc.js");
/* harmony import */ var _components_Work_WorkSlide__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Work/WorkSlide */ "./components/Work/WorkSlide.js");
/* harmony import */ var _components_Work_Arrow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Work/Arrow */ "./components/Work/Arrow.js");
/* harmony import */ var _components_Work_SlideImages__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Work/SlideImages */ "./components/Work/SlideImages.js");
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! global */ "./node_modules/global/window.js");
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(global__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _public_json_data_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../public/json/data.json */ "./public/json/data.json");
var _public_json_data_json__WEBPACK_IMPORTED_MODULE_14___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../public/json/data.json */ "./public/json/data.json", 1);





var _jsxFileName = "/Users/aminakano/workspace/anakano/pages/work.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }











var work = _public_json_data_json__WEBPACK_IMPORTED_MODULE_14__.work;

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
    key: "render",
    value: function render() {
      var _this2 = this;

      var styles = {
        list: {
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          overflow: "hidden",
          width: "530px"
        }
      };
      var contents = work.map(function (item, i) {
        return __jsx("div", {
          key: i,
          style: styles.list,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 7
          }
        }, __jsx(_components_Work_WorkTitle__WEBPACK_IMPORTED_MODULE_8__["default"], {
          title: item.title,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 9
          }
        }), __jsx(_components_Work_SlideImages__WEBPACK_IMPORTED_MODULE_12__["default"], {
          img: global__WEBPACK_IMPORTED_MODULE_13___default.a.innerWidth > 600 ? item.img : item.mobImg,
          url: item.url,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 9
          }
        }), __jsx(_components_Work_WorkDesc__WEBPACK_IMPORTED_MODULE_9__["default"], {
          desc: item.content,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 9
          }
        }));
      });

      var trigger = function trigger() {
        _this2.setState(function (state) {
          return state.count < work.length - 1 ? {
            count: state.count + 1
          } : {
            count: 0
          };
        });
      };

      var reverseTrigger = function reverseTrigger() {
        _this2.setState(function (state) {
          return state.count === 0 ? {
            count: work.length - 1
          } : {
            count: state.count - 1
          };
        });
      };

      return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(_components_Main__WEBPACK_IMPORTED_MODULE_7__["default"], {
        bg: "#25252b",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 9
        }
      }, __jsx(_components_Work_WorkSlide__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }
      }, __jsx(_components_Work_Arrow__WEBPACK_IMPORTED_MODULE_11__["default"], {
        direction: "prev",
        inner: "prev_inner",
        triggers: reverseTrigger,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 13
        }
      }), contents[this.state.count], __jsx(_components_Work_Arrow__WEBPACK_IMPORTED_MODULE_11__["default"], {
        direction: "next",
        inner: "next_inner",
        triggers: trigger,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 13
        }
      }))));
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]); // class Page extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }
//   render() {
//     const works = data.work;
//     const trigger = () => {
//       this.setState(state => {
//         return state.count < works.length -1  ? { count: state.count + 1 } : { count: 0 };
//       })
//     };
//     const reverseTrigger = () => {
//       this.setState((state) => {
//         return state.count === 0
//           ? { count: works.length - 1 }
//           : { count: state.count - 1 };
//       });
//     }
//     const imgStyle = {
//       width: "530px",
//       height: "330px",
//       transition: "opacity 1s ease-in-out"
//     };
//     const listStyle = {
//       listStyle: "none",
//       display: "flex",
//       justifyContent: "center",
//       marginTop: "1.5rem",
//       position: "relative",
//       transform: "translateX(0)",
//       transition: "opacity 1s ease-in-out",
//     };
//     const h2 = {
//       position: "absolute",
//       top: "-100px"
//     }
//     const p = {
//       position: "absolute",
//       bottom: "-100px",
//       textAlign: "center"
//     };
//     const imgList = works.map((work, i) => (
//       <li key={i} style={listStyle}>        
//         <h2 style={h2}>{work.title}</h2>
//         <a href={work.url} target="_blank">
//           <img src={work.img} style={imgStyle} className="slider-img"/>
//         </a>
//         <p style={p}>{work.content}</p>
//       </li>
//     ));
//     return (
//       <div className="main">
//         <div className="cover">
//           <div onClick={reverseTrigger} className="prev">
//             <div className="prev_inner"></div>
//           </div>
//           <ul>{imgList[this.state.count]}</ul>
//           <div onClick={trigger} className="next">
//             <div className="next_inner"></div>
//           </div>
//         </div>
//         <style jsx>
//           {`
//             .main {
//               width: 100%;
//               height: 92vh;
//               background-color: #25252b;
//               display: flex;
//               flex-direction: column;
//               align-items: center;
//               justify-content: center;
//               color: #fff;
//             }
//             p {
//               font-size: 2rem;
//             }
//             .cover {
//               background: url("/mac.png");
//               width: 700px;
//               height: 400px;
//               background-repeat: no-repeat;
//               background-size: cover;
//               position: relative;
//             }
//             .prev {
//               position: absolute;
//               display: flex;
//               justify-content: center;
//               align-items: center;
//               height: 60px;
//               width: 60px;
//               top: 160px;
//               z-index: 100;
//             }
//             .prev_inner {
//               border-right: 3px solid #fff;
//               border-bottom: 3px solid #fff;
//               height: 25px;
//               width: 25px;
//               transform: rotate(135deg);
//             }
//             .next {
//               position: absolute;
//               display: flex;
//               justify-content: center;
//               align-items: center;
//               right: 0;
//               height: 60px;
//               width: 60px;
//               top: 160px;
//               z-index: 100;
//             }
//             .next_inner {
//               border-right: 3px solid #fff;
//               border-bottom: 3px solid #fff;
//               height: 25px;
//               width: 25px;
//               transform: rotate(-45deg);
//             }
//             .prev:hover,
//             .next:hover {
//               cursor: pointer;
//             }
//           `}
//         </style>
//       </div>
//     );
//   }
// }


/* harmony default export */ __webpack_exports__["default"] = (Object(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_6__["default"])(Page));

/***/ })

})
//# sourceMappingURL=work.js.c0ef3825d8ebe2ea25e9.hot-update.js.map