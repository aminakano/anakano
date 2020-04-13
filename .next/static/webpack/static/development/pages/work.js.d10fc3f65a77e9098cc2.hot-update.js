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
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var _public_NYSL_web_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/NYSL_web.png */ "./public/NYSL_web.png");
/* harmony import */ var _public_NYSL_web_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_NYSL_web_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_TGIF_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/TGIF.png */ "./public/TGIF.png");
/* harmony import */ var _public_TGIF_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_TGIF_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_NYSL_mob_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../public/NYSL_mob.png */ "./public/NYSL_mob.png");
/* harmony import */ var _public_NYSL_mob_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_NYSL_mob_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _public_quiz_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../public/quiz.png */ "./public/quiz.png");
/* harmony import */ var _public_quiz_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_quiz_png__WEBPACK_IMPORTED_MODULE_11__);





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
    key: "render",
    value: function render() {
      var _this2 = this;

      var images = [_public_NYSL_web_png__WEBPACK_IMPORTED_MODULE_8___default.a, _public_TGIF_png__WEBPACK_IMPORTED_MODULE_9___default.a, _public_NYSL_mob_png__WEBPACK_IMPORTED_MODULE_10___default.a, _public_quiz_png__WEBPACK_IMPORTED_MODULE_11___default.a];

      var trigger = function trigger() {
        _this2.setState(function (state) {
          return state.count < 3 ? {
            count: state.count + 1
          } : {
            count: 0
          };
        });
      };

      var reverseTrigger = function reverseTrigger() {
        _this2.setState(function (state) {
          return state.count === 0 ? {
            count: 3
          } : {
            count: state.count - 1
          };
        });
      };

      var imgStyle = {
        width: "530px",
        height: "330px"
      };
      var listStyle = {
        listStyle: "none",
        display: "flex",
        justifyContent: "center",
        marginTop: "1.5rem",
        transition: "ease 1s all"
      };
      var imgList = images.map(function (image, i) {
        return __jsx("li", {
          className: "list" + i,
          key: i,
          style: listStyle,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 7
          }
        }, __jsx("img", {
          src: image,
          style: imgStyle,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 9
          }
        }));
      });
      return __jsx("div", {
        className: "jsx-1022742537" + " " + "main",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 7
        }
      }, __jsx("h1", {
        className: "jsx-1022742537",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 9
        }
      }, "Title"), __jsx("div", {
        className: "jsx-1022742537" + " " + "cover",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 9
        }
      }, __jsx("div", {
        onClick: reverseTrigger,
        className: "jsx-1022742537" + " " + "prev",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }
      }), __jsx("ul", {
        id: "slider",
        className: "jsx-1022742537",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }
      }, imgList[this.state.count]), __jsx("div", {
        onClick: trigger,
        className: "jsx-1022742537" + " " + "next",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1022742537",
        __self: this
      }, ".main.jsx-1022742537{width:100%;height:92vh;background-color:#25252b;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#fff;}p.jsx-1022742537{font-size:2rem;}img.jsx-1022742537{width:530px;height:330px;}.cover.jsx-1022742537{background:url(\"/mac.png\");width:700px;height:400px;background-repeat:no-repeat;background-size:cover;position:relative;}.prev.jsx-1022742537{position:absolute;border-right:3px solid #fff;border-bottom:3px solid #fff;top:180px;height:25px;width:25px;-webkit-transform:rotate(135deg);-ms-transform:rotate(135deg);transform:rotate(135deg);}.next.jsx-1022742537{position:absolute;border-right:3px solid #fff;border-bottom:3px solid #fff;top:180px;right:0;height:25px;width:25px;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);}.prev.jsx-1022742537:hover,.next.jsx-1022742537:hover{cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWluYWthbm8vd29ya3NwYWNlL2FuYWthbm8vcGFnZXMvd29yay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRFcsQUFHMEIsQUFVSSxBQUdILEFBSWUsQUFRVCxBQVNBLEFBV0gsV0E1Q0gsQ0FhQyxHQUhmLEFBbUNBLEdBcEI4QixBQVNBLEtBakNILEVBYTNCLEVBR2MsWUFDQyxPQVFnQixBQVNBLEVBakNoQixJQWlCZSx1QkFRbEIsQUFTQSxLQWhCWSxLQVFWLEFBU0osUUFDSSxJQVRELEtBUk8sR0FrQlAsR0FUYyxRQVVBLElBbEIzQixFQW5Cd0IseUVBNEJ4QixLQTNCcUIsR0FxQ3JCLDBGQXBDeUIsbUdBQ1osV0FDYiIsImZpbGUiOiIvVXNlcnMvYW1pbmFrYW5vL3dvcmtzcGFjZS9hbmFrYW5vL3BhZ2VzL3dvcmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL015TGF5b3V0LmpzXCI7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IGltZzEgZnJvbSBcIi4uL3B1YmxpYy9OWVNMX3dlYi5wbmdcIjtcbmltcG9ydCBpbWcyIGZyb20gXCIuLi9wdWJsaWMvVEdJRi5wbmdcIjtcbmltcG9ydCBpbWczIGZyb20gXCIuLi9wdWJsaWMvTllTTF9tb2IucG5nXCI7XG5pbXBvcnQgaW1nNCBmcm9tIFwiLi4vcHVibGljL3F1aXoucG5nXCI7XG5cbmNsYXNzIFBhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBjb3VudDogMCB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGltYWdlcyA9IFtpbWcxLCBpbWcyLCBpbWczLCBpbWc0XTtcbiAgICBjb25zdCB0cmlnZ2VyID0gKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiB7XG4gICAgICAgIHJldHVybiBzdGF0ZS5jb3VudCA8IDMgPyB7IGNvdW50OiBzdGF0ZS5jb3VudCArIDEgfSA6IHsgY291bnQ6IDAgfTtcbiAgICAgIH0pXG4gICAgfTtcbiAgICBjb25zdCByZXZlcnNlVHJpZ2dlciA9ICgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoKHN0YXRlKSA9PiB7XG4gICAgICAgIHJldHVybiBzdGF0ZS5jb3VudCA9PT0gMCA/IHsgY291bnQ6IDMgfSA6IHsgY291bnQ6IHN0YXRlLmNvdW50IC0xIH07XG4gICAgICB9KTtcbiAgICB9XG4gICAgY29uc3QgaW1nU3R5bGUgPSB7XG4gICAgICB3aWR0aDogXCI1MzBweFwiLFxuICAgICAgaGVpZ2h0OiBcIjMzMHB4XCIsXG4gICAgfTtcbiAgICBjb25zdCBsaXN0U3R5bGUgPSB7XG4gICAgICBsaXN0U3R5bGU6IFwibm9uZVwiLFxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgIG1hcmdpblRvcDogXCIxLjVyZW1cIixcbiAgICAgIHRyYW5zaXRpb246IFwiZWFzZSAxcyBhbGxcIlxuICAgIH07XG4gICAgY29uc3QgaW1nTGlzdCA9IGltYWdlcy5tYXAoKGltYWdlLCBpKSA9PiAoXG4gICAgICA8bGkgY2xhc3NOYW1lPXtcImxpc3RcIiArIGl9IGtleT17aX0gc3R5bGU9e2xpc3RTdHlsZX0+XG4gICAgICAgIDxpbWcgc3JjPXtpbWFnZX0gc3R5bGU9e2ltZ1N0eWxlfSAvPlxuICAgICAgPC9saT5cbiAgICApKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgICAgPGgxPlRpdGxlPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3ZlclwiPlxuICAgICAgICAgIDxkaXYgb25DbGljaz17cmV2ZXJzZVRyaWdnZXJ9IGNsYXNzTmFtZT1cInByZXZcIj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8dWwgaWQ9XCJzbGlkZXJcIj57aW1nTGlzdFt0aGlzLnN0YXRlLmNvdW50XX08L3VsPlxuICAgICAgICAgIDxkaXYgb25DbGljaz17dHJpZ2dlcn0gY2xhc3NOYW1lPVwibmV4dFwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLm1haW4ge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA5MnZoO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyNTJiO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDUzMHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDMzMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiL21hYy5wbmdcIik7XG4gICAgICAgICAgICAgIHdpZHRoOiA3MDBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByZXYge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICNmZmY7XG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZmZmO1xuICAgICAgICAgICAgICB0b3A6IDE4MHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5leHQge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICNmZmY7XG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZmZmO1xuICAgICAgICAgICAgICB0b3A6IDE4MHB4O1xuICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcmV2OmhvdmVyLFxuICAgICAgICAgICAgLm5leHQ6aG92ZXIge1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0KFBhZ2UpO1xuIl19 */\n/*@ sourceURL=/Users/aminakano/workspace/anakano/pages/work.js */"));
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_7__["default"])(Page));

/***/ })

})
//# sourceMappingURL=work.js.d10fc3f65a77e9098cc2.hot-update.js.map