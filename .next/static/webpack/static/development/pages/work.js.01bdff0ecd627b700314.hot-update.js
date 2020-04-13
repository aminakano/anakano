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
        className: "jsx-3358235150" + " " + "main",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 7
        }
      }, __jsx("h1", {
        className: "jsx-3358235150",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 9
        }
      }, "Title"), __jsx("div", {
        className: "jsx-3358235150" + " " + "cover",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 9
        }
      }, __jsx("div", {
        onClick: reverseTrigger,
        className: "jsx-3358235150" + " " + "prev",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }
      }, "Prev"), __jsx("ul", {
        id: "slider",
        className: "jsx-3358235150",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }
      }, imgList[this.state.count]), __jsx("div", {
        onClick: trigger,
        className: "jsx-3358235150" + " " + "next",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3358235150",
        __self: this
      }, ".main.jsx-3358235150{width:100%;height:92vh;background-color:#25252b;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#fff;}p.jsx-3358235150{font-size:2rem;}img.jsx-3358235150{width:530px;height:330px;}.cover.jsx-3358235150{background:url(\"/mac.png\");width:700px;height:400px;background-repeat:no-repeat;background-size:cover;position:relative;}.prev.jsx-3358235150{position:absolute;background:yellow;top:180px;}.next.jsx-3358235150{position:absolute;border-right:3px solid #fff;border-bottom:3px solid #fff;top:180px;right:0;height:20px;width:20px;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWluYWthbm8vd29ya3NwYWNlL2FuYWthbm8vcGFnZXMvd29yay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRFcsQUFHMEIsQUFVSSxBQUdILEFBSWUsQUFRVCxBQUtBLFdBN0JOLENBYUMsR0FIZixHQWVvQixBQUtVLEtBN0JILEVBYTNCLEVBR2MsU0FTRixHQVJHLE9BU2YsQUFJK0IsRUE3QmhCLElBaUJlLHVCQWFsQixLQVpZLEtBYWQsUUFDSSxTQWJNLEdBY1AsV0FDYyxJQWQzQixFQW5Cd0IsOEVBQ0gsR0FpQ3JCLDBGQWhDeUIsbUdBQ1osV0FDYiIsImZpbGUiOiIvVXNlcnMvYW1pbmFrYW5vL3dvcmtzcGFjZS9hbmFrYW5vL3BhZ2VzL3dvcmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL015TGF5b3V0LmpzXCI7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IGltZzEgZnJvbSBcIi4uL3B1YmxpYy9OWVNMX3dlYi5wbmdcIjtcbmltcG9ydCBpbWcyIGZyb20gXCIuLi9wdWJsaWMvVEdJRi5wbmdcIjtcbmltcG9ydCBpbWczIGZyb20gXCIuLi9wdWJsaWMvTllTTF9tb2IucG5nXCI7XG5pbXBvcnQgaW1nNCBmcm9tIFwiLi4vcHVibGljL3F1aXoucG5nXCI7XG5cbmNsYXNzIFBhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBjb3VudDogMCB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsaWRlclwiKTtcbiAgICBjb25zdCBsaSA9IHVsLmNoaWxkTm9kZXM7XG5cbiAgICBsZXQgY291bnQgPSAwO1xuXG4gICAgLy8gbGkuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgIC8vICAgZWxlbS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgLy8gfSk7XG4gICAgLy8gbGlbMF0uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpbWFnZXMgPSBbaW1nMSwgaW1nMiwgaW1nMywgaW1nNF07XG4gICAgY29uc3QgdHJpZ2dlciA9ICgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4ge1xuICAgICAgICByZXR1cm4gc3RhdGUuY291bnQgPCAzID8geyBjb3VudDogc3RhdGUuY291bnQgKyAxIH0gOiB7IGNvdW50OiAwIH07XG4gICAgICB9KVxuICAgIH07XG4gICAgY29uc3QgcmV2ZXJzZVRyaWdnZXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKChzdGF0ZSkgPT4ge1xuICAgICAgICByZXR1cm4gc3RhdGUuY291bnQgPT09IDAgPyB7IGNvdW50OiAzIH0gOiB7IGNvdW50OiBzdGF0ZS5jb3VudCAtMSB9O1xuICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IGltZ1N0eWxlID0ge1xuICAgICAgd2lkdGg6IFwiNTMwcHhcIixcbiAgICAgIGhlaWdodDogXCIzMzBweFwiLFxuICAgIH07XG4gICAgY29uc3QgbGlzdFN0eWxlID0ge1xuICAgICAgbGlzdFN0eWxlOiBcIm5vbmVcIixcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICBtYXJnaW5Ub3A6IFwiMS41cmVtXCIsXG4gICAgfTtcbiAgICBjb25zdCBpbWdMaXN0ID0gaW1hZ2VzLm1hcCgoaW1hZ2UsIGkpID0+IChcbiAgICAgIDxsaSBjbGFzc05hbWU9e1wibGlzdFwiICsgaX0ga2V5PXtpfSBzdHlsZT17bGlzdFN0eWxlfT5cbiAgICAgICAgPGltZyBzcmM9e2ltYWdlfSBzdHlsZT17aW1nU3R5bGV9IC8+XG4gICAgICA8L2xpPlxuICAgICkpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICA8aDE+VGl0bGU8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdmVyXCI+XG4gICAgICAgICAgPGRpdiBvbkNsaWNrPXtyZXZlcnNlVHJpZ2dlcn0gY2xhc3NOYW1lPVwicHJldlwiPlByZXY8L2Rpdj5cbiAgICAgICAgICA8dWwgaWQ9XCJzbGlkZXJcIj57aW1nTGlzdFt0aGlzLnN0YXRlLmNvdW50XX08L3VsPlxuICAgICAgICAgIDxkaXYgb25DbGljaz17dHJpZ2dlcn0gY2xhc3NOYW1lPVwibmV4dFwiPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLm1haW4ge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA5MnZoO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyNTJiO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDUzMHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDMzMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiL21hYy5wbmdcIik7XG4gICAgICAgICAgICAgIHdpZHRoOiA3MDBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByZXYge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHllbGxvdztcbiAgICAgICAgICAgICAgdG9wOiAxODBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5uZXh0IHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAjZmZmO1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgICAgdG9wOiAxODBweDtcbiAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7IFxuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dChQYWdlKTtcbiJdfQ== */\n/*@ sourceURL=/Users/aminakano/workspace/anakano/pages/work.js */"));
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_7__["default"])(Page));

/***/ })

})
//# sourceMappingURL=work.js.01bdff0ecd627b700314.hot-update.js.map