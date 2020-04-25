(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

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
//     const slideList = images.map((image, i) => {
//       <img src={image.img} />;
//     });
//     return (
//       <Glide
//         height={400}
//         width={500}
//         autoPlay={true}
//         autoPlaySpeed={3000}
//         dots={true}
//         infinite={true}
//         onSlideChange={() => console.log("slide changed")}
//       >
//         {this.props.slideList}   
//       </Glide>
//     );
//   }
// }

var Carrousel = function Carrousel(_ref) {
  var children = _ref.children;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_glide__WEBPACK_IMPORTED_MODULE_1__["Glide"], {
    height: 300,
    width: 500,
    autoPlay: true,
    autoPlaySpeed: 3000,
    dots: true,
    infinite: true,
    onSlideChange: function onSlideChange() {
      return console.log("slide changed");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: images[0].img,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }), __jsx("img", {
    src: images[1].img,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }), __jsx("img", {
    src: images[2].img,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }), __jsx("img", {
    src: images[3].img,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Carrousel);

/***/ }),

/***/ "./node_modules/react-glide/lib/index.js":
/*!***********************************************!*\
  !*** ./node_modules/react-glide/lib/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){if(true)module.exports=t();else { var r, n; }}(window,function(){return function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}return o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o(o.s=5)}([function(e,t,n){"use strict";e.exports=n(2)},function(e,t,n){"use strict";n.r(t);var o=n(0),l=n.n(o);function i(e){var t=e.width;return l.a.createElement("div",{style:{width:"".concat(t,"px"),height:"".concat(t/66*50,"px")}},l.a.createElement("div",{className:"loading-indicator"}))}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=function(e){function a(){var e,o,t,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a);for(var r=arguments.length,u=new Array(r),i=0;i<r;i++)u[i]=arguments[i];return t=this,n=(e=p(a)).call.apply(e,[this].concat(u)),h(d(o=!n||"object"!==c(n)&&"function"!=typeof n?d(t):n),"urls",[]),h(d(o),"state",{loading:!0,done:!1,loadCount:0}),h(d(o),"preloadImages",function(){var e=o.getImageUrls();0<e.length&&e.map(function(e){var t=new Image;t.src=e,t.onload=o.updateLoadCount}),0===e.length&&o.updateLoadState()}),h(d(o),"getImageUrls",function(){var r=[],e=o.props.children;return l.a.Children.map(e,function(e,t){var n=o.traverseElementTree(e);r=[].concat(s(r),s(n))}),o.urls=s(r),r}),h(d(o),"traverseElementTree",function(e){var t=[];return"img"===e.type&&t.push(e.props.src),e.props&&e.props.children?o.traverseElementTree(e.props.children):t}),h(d(o),"updateLoadCount",function(){return o.setState(function(e){return{loadCount:e.loadCount+1}})}),h(d(o),"updateLoadState",function(){return o.setState(function(e){return{done:!0,loading:!1}})}),o}var t,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(a,o["Component"]),t=a,(n=[{key:"componentDidMount",value:function(){this.preloadImages()}},{key:"componentDidUpdate",value:function(e,t){var n=t.loadCount!==this.state.loadCount,r=this.state.loadCount===this.urls.length,o=this.state.done!==t.done&&this.state.done;n&&r&&this.updateLoadState(),o&&this.props.autoPlay&&this.props.startTimer()}},{key:"render",value:function(){var e=this.props,t=e.children,r=e.currentIndex,n=this.state,o=n.loading,u=n.done;return l.a.createElement(l.a.Fragment,null,o&&l.a.createElement(i,{width:this.props.width}),u&&l.a.Children.map(t,function(e,t){var n=r===t?"current":"";return e&&l.a.createElement(e.type,f({className:"glide--item ".concat(n)},e.props))}))}}])&&u(t.prototype,n),r&&u(t,r),a}();n(4);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"Glide",function(){return r});var r=function(e){function a(){var e,o,t,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a);for(var r=arguments.length,u=new Array(r),i=0;i<r;i++)u[i]=arguments[i];return t=this,n=(e=S(a)).call.apply(e,[this].concat(u)),w(O(o=!n||"object"!==m(n)&&"function"!=typeof n?O(t):n),"autoPlay",void 0),w(O(o),"state",{loading:!0,currentIndex:0,imagesLoaded:!1}),w(O(o),"startTimer",function(){if(o.props.autoPlay){var e=o.props.autoPlaySpeed,t=void 0===e?5e3:e;o.autoPlay=setInterval(function(){return o.goToNextSlide()},t)}}),w(O(o),"goToSelectedDot",function(e){o.setState({currentIndex:e})}),w(O(o),"goToPrevSlide",function(){var e=o.props.children,t=o.state.currentIndex,n=l.a.Children.toArray(e).length-1,r=0===t?n:t-1;o.setState({currentIndex:r})}),w(O(o),"goToNextSlide",function(){var e=o.props.children,t=o.state.currentIndex,n=t===l.a.Children.toArray(e).length-1?0:t+1;o.setState({currentIndex:n})}),o}var t,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(a,l.a.Component),t=a,(n=[{key:"componentWillUnMount",value:function(){clearInterval(this.props.autoPlaySpeed)}},{key:"componentDidUpdate",value:function(e,t){var n=t.currentIndex,r=this.state.currentIndex,o=this.props.onSlideChange;r!==n&&o&&o()}},{key:"render",value:function(){var n=this,r=this.state.currentIndex,e=this.props,t=e.infinite,o=void 0!==t&&t,u=e.children,i=e.dots,a=void 0===i||i,c={height:this.props.height,width:this.props.width};return l.a.createElement("div",{className:"glide--container",style:c},l.a.createElement(v,b({startTimer:function(){return n.startTimer()}},this.props,this.state),u),(o||0!==r)&&l.a.createElement("button",{className:"glide--prev-btn",onClick:function(){clearInterval(n.autoPlay),n.goToPrevSlide()}},"❮"),(o||r!==u.length-1)&&l.a.createElement("button",{className:"glide--next-btn",onClick:function(){clearInterval(n.autoPlay),n.goToNextSlide()}},"❯"),a&&l.a.createElement("section",{className:"glide--dots"},l.a.Children.map(u,function(e,t){return l.a.createElement("span",{key:t,className:r===t?"active-dot":"inactive-dot",onClick:function(){clearInterval(n.autoPlay),n.goToSelectedDot(t)}},"·")})))}}])&&g(t.prototype,n),r&&g(t,r),a}()},function(e,t,n){"use strict";
/** @license React v16.8.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=n(3),r="function"==typeof Symbol&&Symbol.for,s=r?Symbol.for("react.element"):60103,l=r?Symbol.for("react.portal"):60106,o=r?Symbol.for("react.fragment"):60107,u=r?Symbol.for("react.strict_mode"):60108,i=r?Symbol.for("react.profiler"):60114,a=r?Symbol.for("react.provider"):60109,c=r?Symbol.for("react.context"):60110,p=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,y=r?Symbol.for("react.suspense"):60113,h=r?Symbol.for("react.memo"):60115,v=r?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function b(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);!function(e,t,n,r,o,u,i,a){if(!e){if((e=void 0)===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,o,u,i,a],l=0;(e=Error(t.replace(/%s/g,function(){return c[l++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S={};function O(e,t,n){this.props=e,this.context=t,this.refs=S,this.updater=n||g}function j(){}function w(e,t,n){this.props=e,this.context=t,this.refs=S,this.updater=n||g}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&b("85"),this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=O.prototype;var _=w.prototype=new j;_.constructor=w,f(_,O.prototype),_.isPureReactComponent=!0;var P={current:null},x={current:null},C=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,n){var r=void 0,o={},u=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(u=""+t.key),t)C.call(t,r)&&!E.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(1===a)o.children=n;else if(1<a){for(var c=Array(a),l=0;l<a;l++)c[l]=arguments[l+2];o.children=c}if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===o[r]&&(o[r]=a[r]);return{$$typeof:s,type:e,key:u,ref:i,props:o,_owner:x.current}}function I(e){return"object"==typeof e&&null!==e&&e.$$typeof===s}var T=/\/+/g,$=[];function R(e,t,n,r){if($.length){var o=$.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function A(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,$.length<10&&$.push(e)}function N(e,t,n){return null==e?0:function e(t,n,r,o){var u=typeof t;"undefined"!==u&&"boolean"!==u||(t=null);var i=!1;if(null===t)i=!0;else switch(u){case"string":case"number":i=!0;break;case"object":switch(t.$$typeof){case s:case l:i=!0}}if(i)return r(o,t,""===n?"."+M(t,0):n),1;if(i=0,n=""===n?".":n+":",Array.isArray(t))for(var a=0;a<t.length;a++){var c=n+M(u=t[a],a);i+=e(u,c,r,o)}else if("function"==typeof(c=null===t||"object"!=typeof t?null:"function"==typeof(c=m&&t[m]||t["@@iterator"])?c:null))for(t=c.call(t),a=0;!(u=t.next()).done;)i+=e(u=u.value,c=n+M(u,a++),r,o);else"object"===u&&b("31","[object Object]"==(r=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":r,"");return i}(e,"",t,n)}function M(e,t){return"object"==typeof e&&null!==e&&null!=e.key?(n=e.key,r={"=":"=0",":":"=2"},"$"+(""+n).replace(/[=:]/g,function(e){return r[e]})):t.toString(36);var n,r}function U(e,t){e.func.call(e.context,t,e.count++)}function L(e,t,n){var r,o,u=e.result,i=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?D(e,u,n,function(e){return e}):null!=e&&(I(e)&&(o=i+(!(r=e).key||t&&t.key===e.key?"":(""+e.key).replace(T,"$&/")+"/")+n,e={$$typeof:s,type:r.type,key:o,ref:r.ref,props:r.props,_owner:r._owner}),u.push(e))}function D(e,t,n,r,o){var u="";null!=n&&(u=(""+n).replace(T,"$&/")+"/"),N(e,L,t=R(t,u,r,o)),A(t)}function q(){var e=P.current;return null===e&&b("307"),e}var F={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return D(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;N(e,U,t=R(null,null,t,n)),A(t)},count:function(e){return N(e,function(){return null},null)},toArray:function(e){var t=[];return D(e,t,null,function(e){return e}),t},only:function(e){return I(e)||b("143"),e}},createRef:function(){return{current:null}},Component:O,PureComponent:w,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:c,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:d,render:e}},lazy:function(e){return{$$typeof:v,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:h,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return q().useCallback(e,t)},useContext:function(e,t){return q().useContext(e,t)},useEffect:function(e,t){return q().useEffect(e,t)},useImperativeHandle:function(e,t,n){return q().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return q().useLayoutEffect(e,t)},useMemo:function(e,t){return q().useMemo(e,t)},useReducer:function(e,t,n){return q().useReducer(e,t,n)},useRef:function(e){return q().useRef(e)},useState:function(e){return q().useState(e)},Fragment:o,StrictMode:u,Suspense:y,createElement:k,cloneElement:function(e,t,n){null==e&&b("267",e);var r=void 0,o=f({},e.props),u=e.key,i=e.ref,a=e._owner;if(null!=t){void 0!==t.ref&&(i=t.ref,a=x.current),void 0!==t.key&&(u=""+t.key);var c=void 0;for(r in e.type&&e.type.defaultProps&&(c=e.type.defaultProps),t)C.call(t,r)&&!E.hasOwnProperty(r)&&(o[r]=void 0===t[r]&&void 0!==c?c[r]:t[r])}if(1===(r=arguments.length-2))o.children=n;else if(1<r){c=Array(r);for(var l=0;l<r;l++)c[l]=arguments[l+2];o.children=c}return{$$typeof:s,type:e.type,key:u,ref:i,props:o,_owner:a}},createFactory:function(e){var t=k.bind(null,e);return t.type=e,t},isValidElement:I,version:"16.8.2",unstable_ConcurrentMode:p,unstable_Profiler:i,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:P,ReactCurrentOwner:x,assign:f}},V=F;e.exports=V.default||V},function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,r,o=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var i in n=Object(arguments[u]))l.call(n,i)&&(o[i]=n[i]);if(c){r=c(n);for(var a=0;a<r.length;a++)f.call(n,r[a])&&(o[r[a]]=n[r[a]])}}return o}},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1);n.d(t,"Glide",function(){return r.Glide})}])});

/***/ })

}]);
//# sourceMappingURL=1.js.map