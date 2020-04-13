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
/* harmony import */ var _public_json_data_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/json/data.json */ "./public/json/data.json");
var _public_json_data_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../public/json/data.json */ "./public/json/data.json", 1);
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
    key: "render",
    value: function render() {
      var _this2 = this;

      var images = [_public_NYSL_web_png__WEBPACK_IMPORTED_MODULE_9___default.a, _public_TGIF_png__WEBPACK_IMPORTED_MODULE_10___default.a, _public_NYSL_mob_png__WEBPACK_IMPORTED_MODULE_11___default.a, _public_quiz_png__WEBPACK_IMPORTED_MODULE_12___default.a];
      var work = _public_json_data_json__WEBPACK_IMPORTED_MODULE_8__.work;

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
        transition: "ease 1s all",
        position: "relative"
      };
      var h2 = {
        position: "absolute",
        top: "-100px"
      };
      var p = {
        position: "absolute",
        bottom: "-100px",
        textAlign: "center"
      };
      var imgList = images.map(function (image, i) {
        return __jsx("li", {
          className: "list" + i,
          key: i,
          style: listStyle,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 7
          }
        }, __jsx("h2", {
          style: h2,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 9
          }
        }, work[i].title), __jsx("a", {
          href: work[i].url,
          target: "_blank",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 9
          }
        }, __jsx("img", {
          src: image,
          style: imgStyle,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 11
          }
        })), __jsx("p", {
          style: p,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 9
          }
        }, work[i].content));
      });
      return __jsx("div", {
        className: "jsx-1022742537" + " " + "main",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "jsx-1022742537" + " " + "cover",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 9
        }
      }, __jsx("div", {
        onClick: reverseTrigger,
        className: "jsx-1022742537" + " " + "prev",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }
      }), __jsx("ul", {
        id: "slider",
        className: "jsx-1022742537",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }
      }, imgList[this.state.count]), __jsx("div", {
        onClick: trigger,
        className: "jsx-1022742537" + " " + "next",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1022742537",
        __self: this
      }, ".main.jsx-1022742537{width:100%;height:92vh;background-color:#25252b;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#fff;}p.jsx-1022742537{font-size:2rem;}img.jsx-1022742537{width:530px;height:330px;}.cover.jsx-1022742537{background:url(\"/mac.png\");width:700px;height:400px;background-repeat:no-repeat;background-size:cover;position:relative;}.prev.jsx-1022742537{position:absolute;border-right:3px solid #fff;border-bottom:3px solid #fff;top:180px;height:25px;width:25px;-webkit-transform:rotate(135deg);-ms-transform:rotate(135deg);transform:rotate(135deg);}.next.jsx-1022742537{position:absolute;border-right:3px solid #fff;border-bottom:3px solid #fff;top:180px;right:0;height:25px;width:25px;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);}.prev.jsx-1022742537:hover,.next.jsx-1022742537:hover{cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWluYWthbm8vd29ya3NwYWNlL2FuYWthbm8vcGFnZXMvd29yay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRVcsQUFHMEIsQUFVSSxBQUdILEFBSWUsQUFRVCxBQVNBLEFBV0gsV0E1Q0gsQ0FhQyxHQUhmLEFBbUNBLEdBcEI4QixBQVNBLEtBakNILEVBYTNCLEVBR2MsWUFDQyxPQVFnQixBQVNBLEVBakNoQixJQWlCZSx1QkFRbEIsQUFTQSxLQWhCWSxLQVFWLEFBU0osUUFDSSxJQVRELEtBUk8sR0FrQlAsR0FUYyxRQVVBLElBbEIzQixFQW5Cd0IseUVBNEJ4QixLQTNCcUIsR0FxQ3JCLDBGQXBDeUIsbUdBQ1osV0FDYiIsImZpbGUiOiIvVXNlcnMvYW1pbmFrYW5vL3dvcmtzcGFjZS9hbmFrYW5vL3BhZ2VzL3dvcmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL015TGF5b3V0LmpzXCI7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IGRhdGEgZnJvbSBcIi4uL3B1YmxpYy9qc29uL2RhdGEuanNvblwiO1xuaW1wb3J0IGltZzEgZnJvbSBcIi4uL3B1YmxpYy9OWVNMX3dlYi5wbmdcIjtcbmltcG9ydCBpbWcyIGZyb20gXCIuLi9wdWJsaWMvVEdJRi5wbmdcIjtcbmltcG9ydCBpbWczIGZyb20gXCIuLi9wdWJsaWMvTllTTF9tb2IucG5nXCI7XG5pbXBvcnQgaW1nNCBmcm9tIFwiLi4vcHVibGljL3F1aXoucG5nXCI7XG5cbmNsYXNzIFBhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBjb3VudDogMCB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGltYWdlcyA9IFtpbWcxLCBpbWcyLCBpbWczLCBpbWc0XTtcbiAgICBjb25zdCB3b3JrID0gZGF0YS53b3JrO1xuXG4gICAgY29uc3QgdHJpZ2dlciA9ICgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4ge1xuICAgICAgICByZXR1cm4gc3RhdGUuY291bnQgPCAzID8geyBjb3VudDogc3RhdGUuY291bnQgKyAxIH0gOiB7IGNvdW50OiAwIH07XG4gICAgICB9KVxuICAgIH07XG4gICAgY29uc3QgcmV2ZXJzZVRyaWdnZXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKChzdGF0ZSkgPT4ge1xuICAgICAgICByZXR1cm4gc3RhdGUuY291bnQgPT09IDAgPyB7IGNvdW50OiAzIH0gOiB7IGNvdW50OiBzdGF0ZS5jb3VudCAtMSB9O1xuICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IGltZ1N0eWxlID0ge1xuICAgICAgd2lkdGg6IFwiNTMwcHhcIixcbiAgICAgIGhlaWdodDogXCIzMzBweFwiLFxuICAgIH07XG4gICAgY29uc3QgbGlzdFN0eWxlID0ge1xuICAgICAgbGlzdFN0eWxlOiBcIm5vbmVcIixcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICBtYXJnaW5Ub3A6IFwiMS41cmVtXCIsXG4gICAgICB0cmFuc2l0aW9uOiBcImVhc2UgMXMgYWxsXCIsXG4gICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiXG4gICAgfTtcbiAgICBjb25zdCBoMiA9IHtcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICB0b3A6IFwiLTEwMHB4XCJcbiAgICB9XG4gICAgY29uc3QgcCA9IHtcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICBib3R0b206IFwiLTEwMHB4XCIsXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgICB9O1xuXG4gICAgY29uc3QgaW1nTGlzdCA9IGltYWdlcy5tYXAoKGltYWdlLCBpKSA9PiAoXG4gICAgICA8bGkgY2xhc3NOYW1lPXtcImxpc3RcIiArIGl9IGtleT17aX0gc3R5bGU9e2xpc3RTdHlsZX0+XG4gICAgICAgIDxoMiBzdHlsZT17aDJ9Pnt3b3JrW2ldLnRpdGxlfTwvaDI+XG4gICAgICAgIDxhIGhyZWY9e3dvcmtbaV0udXJsfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICA8aW1nIHNyYz17aW1hZ2V9IHN0eWxlPXtpbWdTdHlsZX0gLz5cbiAgICAgICAgPC9hPlxuICAgICAgICA8cCBzdHlsZT17cH0+e3dvcmtbaV0uY29udGVudH08L3A+XG4gICAgICA8L2xpPlxuICAgICkpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdmVyXCI+XG4gICAgICAgICAgPGRpdiBvbkNsaWNrPXtyZXZlcnNlVHJpZ2dlcn0gY2xhc3NOYW1lPVwicHJldlwiPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDx1bCBpZD1cInNsaWRlclwiPntpbWdMaXN0W3RoaXMuc3RhdGUuY291bnRdfTwvdWw+XG4gICAgICAgICAgPGRpdiBvbkNsaWNrPXt0cmlnZ2VyfSBjbGFzc05hbWU9XCJuZXh0XCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAubWFpbiB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDkydmg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNTI1MmI7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICB3aWR0aDogNTMwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMzMwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY292ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIvbWFjLnBuZ1wiKTtcbiAgICAgICAgICAgICAgd2lkdGg6IDcwMHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucHJldiB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmZmY7XG4gICAgICAgICAgICAgIHRvcDogMTgwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubmV4dCB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmZmY7XG4gICAgICAgICAgICAgIHRvcDogMTgwcHg7XG4gICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByZXY6aG92ZXIsXG4gICAgICAgICAgICAubmV4dDpob3ZlciB7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQoUGFnZSk7XG4iXX0= */\n/*@ sourceURL=/Users/aminakano/workspace/anakano/pages/work.js */"));
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_7__["default"])(Page));

/***/ })

})
//# sourceMappingURL=work.js.c5d0d9a2715eb6bc00e5.hot-update.js.map