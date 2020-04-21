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
/* harmony import */ var react_keyframes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-keyframes */ "./node_modules/react-keyframes/dist/index.js");
/* harmony import */ var react_keyframes__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_keyframes__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_json_data_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/json/data.json */ "./public/json/data.json");
var _public_json_data_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../public/json/data.json */ "./public/json/data.json", 1);
/* harmony import */ var _public_NYSL_web_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../public/NYSL_web.png */ "./public/NYSL_web.png");
/* harmony import */ var _public_NYSL_web_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_NYSL_web_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _public_TGIF_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../public/TGIF.png */ "./public/TGIF.png");
/* harmony import */ var _public_TGIF_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_TGIF_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _public_NYSL_mob_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../public/NYSL_mob.png */ "./public/NYSL_mob.png");
/* harmony import */ var _public_NYSL_mob_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_public_NYSL_mob_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _public_quiz_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../public/quiz.png */ "./public/quiz.png");
/* harmony import */ var _public_quiz_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_public_quiz_png__WEBPACK_IMPORTED_MODULE_13__);





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

      var images = [_public_NYSL_web_png__WEBPACK_IMPORTED_MODULE_10___default.a, _public_TGIF_png__WEBPACK_IMPORTED_MODULE_11___default.a, _public_NYSL_mob_png__WEBPACK_IMPORTED_MODULE_12___default.a, _public_quiz_png__WEBPACK_IMPORTED_MODULE_13___default.a];
      var work = _public_json_data_json__WEBPACK_IMPORTED_MODULE_9__.work;

      var trigger = function trigger() {
        _this2.setState(function (state) {
          return state.count < images.length - 1 ? {
            count: state.count + 1
          } : {
            count: 0
          };
        });
      };

      var reverseTrigger = function reverseTrigger() {
        _this2.setState(function (state) {
          return state.count === 0 ? {
            count: images.length - 1
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
            lineNumber: 55,
            columnNumber: 7
          }
        }, __jsx("h2", {
          style: h2,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 9
          }
        }, work[i].title), __jsx("a", {
          href: work[i].url,
          target: "_blank",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 9
          }
        }, __jsx("img", {
          src: image,
          style: imgStyle,
          className: "slider-img",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 11
          }
        })), __jsx("p", {
          style: p,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 9
          }
        }, work[i].content));
      });
      return __jsx("div", {
        className: "jsx-321957253" + " " + "main",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "jsx-321957253" + " " + "cover",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 9
        }
      }, __jsx("div", {
        onClick: reverseTrigger,
        className: "jsx-321957253" + " " + "prev",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "jsx-321957253" + " " + "prev_inner",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 13
        }
      })), __jsx("ul", {
        id: "slider",
        className: "jsx-321957253",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }
      }, imgList[this.state.count]), __jsx("div", {
        onClick: trigger,
        className: "jsx-321957253" + " " + "next",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "jsx-321957253" + " " + "next_inner",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 13
        }
      }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "321957253",
        __self: this
      }, ".main.jsx-321957253{width:100%;height:92vh;background-color:#25252b;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#fff;}p.jsx-321957253{font-size:2rem;}.cover.jsx-321957253{background:url(\"/mac.png\");width:700px;height:400px;background-repeat:no-repeat;background-size:cover;position:relative;}.prev.jsx-321957253{position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:60px;width:60px;top:160px;z-index:100;}.prev_inner.jsx-321957253{border-right:3px solid #fff;border-bottom:3px solid #fff;height:25px;width:25px;-webkit-transform:rotate(135deg);-ms-transform:rotate(135deg);transform:rotate(135deg);}.next.jsx-321957253{position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;right:0;height:60px;width:60px;top:160px;z-index:100;}.next_inner.jsx-321957253{border-right:3px solid #fff;border-bottom:3px solid #fff;height:25px;width:25px;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);}.prev.jsx-321957253:hover,.next.jsx-321957253:hover{cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWluYWthbm8vd29ya3NwYWNlL2FuYWthbm8vcGFnZXMvd29yay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4RVcsQUFHMEIsQUFVSSxBQUdZLEFBUVQsQUFVVSxBQU9WLEFBV1UsQUFRYixXQXhESCxJQVVkLEFBK0NBLEdBcENlLEFBaUJBLEtBckNZLElBWWIsQ0FrQmlCLEFBa0JBLFdBbkNoQixTQVpBLElBYWUsS0FpQmhCLEFBa0JBLFlBakJELEFBa0JBLFdBbkNXLEFBa0JHLEFBa0JBLFlBOUJGLEFBaUJBLFVBdEJMLGtCQUNwQixFQWZ3Qiw2Q0FnQ3hCLEFBa0JBLHdCQTlCcUIsQUFpQkEsU0FwQ0Esb0ZBb0JQLEFBaUJKLFFBQ0ksQ0FyQ1csR0FvQlosUUFrQkEsR0FqQkQsUUFrQkEsRUFqQkUsUUFrQkEsSUFqQmQsUUFrQkEsdURBeENhLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL2FtaW5ha2Fuby93b3Jrc3BhY2UvYW5ha2Fuby9wYWdlcy93b3JrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9NeUxheW91dC5qc1wiO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBLZXlmcmFtZXMsIEZyYW1lIH0gZnJvbSBcInJlYWN0LWtleWZyYW1lc1wiO1xuXG5pbXBvcnQgZGF0YSBmcm9tIFwiLi4vcHVibGljL2pzb24vZGF0YS5qc29uXCI7XG5pbXBvcnQgaW1nMSBmcm9tIFwiLi4vcHVibGljL05ZU0xfd2ViLnBuZ1wiO1xuaW1wb3J0IGltZzIgZnJvbSBcIi4uL3B1YmxpYy9UR0lGLnBuZ1wiO1xuaW1wb3J0IGltZzMgZnJvbSBcIi4uL3B1YmxpYy9OWVNMX21vYi5wbmdcIjtcbmltcG9ydCBpbWc0IGZyb20gXCIuLi9wdWJsaWMvcXVpei5wbmdcIjtcblxuY2xhc3MgUGFnZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGNvdW50OiAwIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaW1hZ2VzID0gW2ltZzEsIGltZzIsIGltZzMsIGltZzRdO1xuICAgIGNvbnN0IHdvcmsgPSBkYXRhLndvcms7XG5cbiAgICBjb25zdCB0cmlnZ2VyID0gKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiB7XG4gICAgICAgIHJldHVybiBzdGF0ZS5jb3VudCA8IGltYWdlcy5sZW5ndGggLTEgID8geyBjb3VudDogc3RhdGUuY291bnQgKyAxIH0gOiB7IGNvdW50OiAwIH07XG4gICAgICB9KVxuICAgIH07XG4gICAgY29uc3QgcmV2ZXJzZVRyaWdnZXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKChzdGF0ZSkgPT4ge1xuICAgICAgICByZXR1cm4gc3RhdGUuY291bnQgPT09IDBcbiAgICAgICAgICA/IHsgY291bnQ6IGltYWdlcy5sZW5ndGggLSAxIH1cbiAgICAgICAgICA6IHsgY291bnQ6IHN0YXRlLmNvdW50IC0gMSB9O1xuICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IGltZ1N0eWxlID0ge1xuICAgICAgd2lkdGg6IFwiNTMwcHhcIixcbiAgICAgIGhlaWdodDogXCIzMzBweFwiXG4gICAgfTtcbiAgICBjb25zdCBsaXN0U3R5bGUgPSB7XG4gICAgICBsaXN0U3R5bGU6IFwibm9uZVwiLFxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgIG1hcmdpblRvcDogXCIxLjVyZW1cIixcbiAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCJcbiAgICB9O1xuICAgIGNvbnN0IGgyID0ge1xuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgIHRvcDogXCItMTAwcHhcIlxuICAgIH1cbiAgICBjb25zdCBwID0ge1xuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgIGJvdHRvbTogXCItMTAwcHhcIixcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICAgIH07XG5cbiAgICBjb25zdCBpbWdMaXN0ID0gaW1hZ2VzLm1hcCgoaW1hZ2UsIGkpID0+IChcbiAgICAgIDxsaSBjbGFzc05hbWU9e1wibGlzdFwiICsgaX0ga2V5PXtpfSBzdHlsZT17bGlzdFN0eWxlfT4gICAgICAgIFxuICAgICAgICA8aDIgc3R5bGU9e2gyfT57d29ya1tpXS50aXRsZX08L2gyPlxuICAgICAgICA8YSBocmVmPXt3b3JrW2ldLnVybH0gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgPGltZyBzcmM9e2ltYWdlfSBzdHlsZT17aW1nU3R5bGV9IGNsYXNzTmFtZT1cInNsaWRlci1pbWdcIi8+XG4gICAgICAgIDwvYT5cbiAgICAgICAgPHAgc3R5bGU9e3B9Pnt3b3JrW2ldLmNvbnRlbnR9PC9wPlxuICAgICAgPC9saT5cbiAgICApKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3ZlclwiPlxuICAgICAgICAgIDxkaXYgb25DbGljaz17cmV2ZXJzZVRyaWdnZXJ9IGNsYXNzTmFtZT1cInByZXZcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJldl9pbm5lclwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHsvKiB0b2RvOiBhZGQga2V5ZnJhbWUgY29tcG9uZW50ICovfVxuICAgICAgICAgIDx1bCBpZD1cInNsaWRlclwiPlxuICAgICAgICAgICAge2ltZ0xpc3RbdGhpcy5zdGF0ZS5jb3VudF19XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e3RyaWdnZXJ9IGNsYXNzTmFtZT1cIm5leHRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV4dF9pbm5lclwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLm1haW4ge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA5MnZoO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyNTJiO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiL21hYy5wbmdcIik7XG4gICAgICAgICAgICAgIHdpZHRoOiA3MDBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByZXYge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgICB0b3A6IDE2MHB4O1xuICAgICAgICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucHJldl9pbm5lciB7XG4gICAgICAgICAgICAgIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICNmZmY7XG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZmZmO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5leHQge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgICAgICAgdG9wOiAxNjBweDtcbiAgICAgICAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5leHRfaW5uZXIge1xuICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAjZmZmO1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcmV2OmhvdmVyLFxuICAgICAgICAgICAgLm5leHQ6aG92ZXIge1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0KFBhZ2UpO1xuIl19 */\n/*@ sourceURL=/Users/aminakano/workspace/anakano/pages/work.js */"));
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_7__["default"])(Page));

/***/ })

})
//# sourceMappingURL=work.js.da4766bce4fd34d26de9.hot-update.js.map