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
      var count = 0;

      var trigger = function trigger() {
        _this2.setState(function (state) {
          return state.count < 3 ? {
            count: state.count + 1
          } : {
            count: 0
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
            lineNumber: 47,
            columnNumber: 7
          }
        }, __jsx("img", {
          src: image,
          style: imgStyle,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 9
          }
        }));
      });
      return __jsx("div", {
        className: "jsx-3900521507" + " " + "main",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 7
        }
      }, __jsx("h1", {
        className: "jsx-3900521507",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 9
        }
      }, "Title"), __jsx("div", {
        className: "jsx-3900521507" + " " + "cover",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "jsx-3900521507" + " " + "prev",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }
      }, "Prev"), __jsx("ul", {
        id: "slider",
        className: "jsx-3900521507",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }
      }, imgList[this.state.count]), __jsx("div", {
        onClick: trigger,
        className: "jsx-3900521507" + " " + "next",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3900521507",
        __self: this
      }, ".main.jsx-3900521507{width:100%;height:92vh;background-color:#25252b;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#fff;}p.jsx-3900521507{font-size:2rem;}img.jsx-3900521507{width:530px;height:330px;}.cover.jsx-3900521507{background:url(\"/mac.png\");width:700px;height:400px;background-repeat:no-repeat;background-size:cover;position:relative;}.prev.jsx-3900521507{position:absolute;background:yellow;top:180px;}.next.jsx-3900521507{position:absolute;border-right:3px solid green;border-bottom:3px solid green;top:180px;right:0;height:20px;width:20px;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWluYWthbm8vd29ya3NwYWNlL2FuYWthbm8vcGFnZXMvd29yay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RFcsQUFHMEIsQUFVSSxBQUdILEFBSWUsQUFRVCxBQUtBLFdBN0JOLENBYUMsR0FIZixHQWVvQixBQUtXLEtBN0JKLEVBYTNCLEVBR2MsU0FTRixHQVJHLE9BU2YsQ0FJZ0MsQ0E3QmpCLElBaUJlLHlCQWFsQixHQVpZLE9BYWQsUUFDSSxPQWJNLEtBY1AsV0FDYSxFQWQxQixFQW5Cd0IsOEVBQ0gsRUFpQ3JCLDJGQWhDeUIsbUdBQ1osV0FDYiIsImZpbGUiOiIvVXNlcnMvYW1pbmFrYW5vL3dvcmtzcGFjZS9hbmFrYW5vL3BhZ2VzL3dvcmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL015TGF5b3V0LmpzXCI7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IGltZzEgZnJvbSBcIi4uL3B1YmxpYy9OWVNMX3dlYi5wbmdcIjtcbmltcG9ydCBpbWcyIGZyb20gXCIuLi9wdWJsaWMvVEdJRi5wbmdcIjtcbmltcG9ydCBpbWczIGZyb20gXCIuLi9wdWJsaWMvTllTTF9tb2IucG5nXCI7XG5pbXBvcnQgaW1nNCBmcm9tIFwiLi4vcHVibGljL3F1aXoucG5nXCI7XG5cbmNsYXNzIFBhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBjb3VudDogMCB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsaWRlclwiKTtcbiAgICBjb25zdCBsaSA9IHVsLmNoaWxkTm9kZXM7XG5cbiAgICBsZXQgY291bnQgPSAwO1xuXG4gICAgLy8gbGkuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgIC8vICAgZWxlbS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgLy8gfSk7XG4gICAgLy8gbGlbMF0uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpbWFnZXMgPSBbaW1nMSwgaW1nMiwgaW1nMywgaW1nNF07XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBjb25zdCB0cmlnZ2VyID0gKCkgPT4ge1xuXG4gICAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+IHtcblxuICAgICAgICByZXR1cm4gc3RhdGUuY291bnQgPCAzID8geyBjb3VudDogc3RhdGUuY291bnQgKyAxIH0gOiB7IGNvdW50OiAwIH07XG4gICAgICB9KVxuICAgIH07XG4gICAgY29uc3QgaW1nU3R5bGUgPSB7XG4gICAgICB3aWR0aDogXCI1MzBweFwiLFxuICAgICAgaGVpZ2h0OiBcIjMzMHB4XCIsXG4gICAgfTtcbiAgICBjb25zdCBsaXN0U3R5bGUgPSB7XG4gICAgICBsaXN0U3R5bGU6IFwibm9uZVwiLFxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgIG1hcmdpblRvcDogXCIxLjVyZW1cIixcbiAgICB9O1xuICAgIGNvbnN0IGltZ0xpc3QgPSBpbWFnZXMubWFwKChpbWFnZSwgaSkgPT4gKFxuICAgICAgPGxpIGNsYXNzTmFtZT17XCJsaXN0XCIgKyBpfSBrZXk9e2l9IHN0eWxlPXtsaXN0U3R5bGV9PlxuICAgICAgICA8aW1nIHNyYz17aW1hZ2V9IHN0eWxlPXtpbWdTdHlsZX0gLz5cbiAgICAgIDwvbGk+XG4gICAgKSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICAgIDxoMT5UaXRsZTwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY292ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZXZcIj5QcmV2PC9kaXY+XG4gICAgICAgICAgPHVsIGlkPVwic2xpZGVyXCI+e2ltZ0xpc3RbdGhpcy5zdGF0ZS5jb3VudF19PC91bD5cbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e3RyaWdnZXJ9IGNsYXNzTmFtZT1cIm5leHRcIj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIC5tYWluIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGhlaWdodDogOTJ2aDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI1MjUyYjtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgIHdpZHRoOiA1MzBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMzBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcIi9tYWMucG5nXCIpO1xuICAgICAgICAgICAgICB3aWR0aDogNzAwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcmV2IHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB5ZWxsb3c7XG4gICAgICAgICAgICAgIHRvcDogMTgwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubmV4dCB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgZ3JlZW47XG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBncmVlbjtcbiAgICAgICAgICAgICAgdG9wOiAxODBweDtcbiAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTsgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAge1xuICAgICAgICAgICAgICAvKiAubmV4dDo6YWZ0ZXIge1xuICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMjBweCBzb2xpZCBncmVlbjtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMjBweCBzb2xpZCBncmVlbjtcbiAgICAgICAgICAgIH0gKi9cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQoUGFnZSk7XG4iXX0= */\n/*@ sourceURL=/Users/aminakano/workspace/anakano/pages/work.js */"));
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_7__["default"])(Page));

/***/ })

})
//# sourceMappingURL=work.js.c037fe5d851cd96bcd3a.hot-update.js.map