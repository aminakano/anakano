webpackHotUpdate("static/development/pages/jp/work.js",{

/***/ "./pages/jp/work.js":
/*!**************************!*\
  !*** ./pages/jp/work.js ***!
  \**************************/
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
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Main */ "./components/Main.js");
/* harmony import */ var _public_json_data_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../public/json/data.json */ "./public/json/data.json");
var _public_json_data_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../public/json/data.json */ "./public/json/data.json", 1);
/* harmony import */ var _components_Work_WorkTitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Work/WorkTitle */ "./components/Work/WorkTitle.js");
/* harmony import */ var _components_Work_WorkDesc__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Work/WorkDesc */ "./components/Work/WorkDesc.js");
/* harmony import */ var _components_Work_WorkSlide__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Work/WorkSlide */ "./components/Work/WorkSlide.js");
/* harmony import */ var _components_Work_Arrow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Work/Arrow */ "./components/Work/Arrow.js");
/* harmony import */ var _components_Work_SlideImages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/Work/SlideImages */ "./components/Work/SlideImages.js");





var _jsxFileName = "/Users/aminakano/workspace/anakano/pages/jp/work.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









 //todo: create trigger functions

var work = _public_json_data_json__WEBPACK_IMPORTED_MODULE_8__.work;

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
        container: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        },
        list: {
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          margin: "2rem"
        }
      };
      var contents = work.map(function (item, i) {
        return __jsx("div", {
          key: i,
          style: styles.list,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 7
          }
        }, __jsx(_components_Work_WorkTitle__WEBPACK_IMPORTED_MODULE_9__["default"], {
          title: item.title,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 9
          }
        }), __jsx(_components_Work_SlideImages__WEBPACK_IMPORTED_MODULE_13__["default"], {
          img: item.img,
          url: item.url,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 9
          }
        }), __jsx(_components_Work_WorkDesc__WEBPACK_IMPORTED_MODULE_10__["default"], {
          desc: item.content,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41,
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
          lineNumber: 63,
          columnNumber: 9
        }
      }, __jsx(_components_Work_WorkSlide__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }
      }, __jsx(_components_Work_Arrow__WEBPACK_IMPORTED_MODULE_12__["default"], {
        direction: "prev",
        inner: "prev_inner",
        triggers: this.reverseTrigger,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 13
        }
      }), contents[this.state.count], __jsx(_components_Work_Arrow__WEBPACK_IMPORTED_MODULE_12__["default"], {
        direction: "next",
        inner: "next_inner",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 13
        }
      }))));
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_MyLayout__WEBPACK_IMPORTED_MODULE_6__["default"])(Page));

/***/ })

})
//# sourceMappingURL=work.js.09e0bcd9060098855c74.hot-update.js.map