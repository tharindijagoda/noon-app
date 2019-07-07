webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Posts/Posts.js":
/*!***********************************!*\
  !*** ./components/Posts/Posts.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Post_Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Post/Post */ "./components/Posts/Post/Post.js");
var _jsxFileName = "D:\\noon\\client\\components\\Posts\\Posts.js";




var posts = function posts(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3728824022" + " " + "row box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, props.postsData.map(function (ctrl) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Post_Post__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: ctrl.username,
      name: ctrl.username,
      image: ctrl.image,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    });
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3728824022",
    __self: this
  }, "div.jsx-3728824022{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-shadow:0 2px 1px #ccc;margin:auto;margin-top:20px;padding-top:40px;}@media(min-width:1000px )and (min-height:700px){div.jsx-3728824022{width:700px;height:600px;}}@media(min-width:500px )and (min-height:401px){div.jsx-3728824022{width:450px;height:400px;}}@media(min-width:500px )and (min-height:400px){div.jsx-3728824022{width:350px;height:300px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxub29uXFxjbGllbnRcXGNvbXBvbmVudHNcXFBvc3RzXFxQb3N0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlUyxBQUc0QixBQWFTLEFBT0EsQUFPQSxXQTFCUCxDQWFRLEFBT0EsQUFPQSxhQWJqQixBQU9BLEFBT0EsNERBM0JhLCtEQUNFLDZGQUNPLDBCQUNkLFlBRUcsZ0JBQ0MsaUJBQ3BCIiwiZmlsZSI6IkQ6XFxub29uXFxjbGllbnRcXGNvbXBvbmVudHNcXFBvc3RzXFxQb3N0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQb3N0IGZyb20gJy4vUG9zdC9Qb3N0JztcclxuXHJcbmNvbnN0IHBvc3RzID0gKHByb3BzKT0+KFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgYm94XCI+XHJcbiAgICAgICBcclxuICAgICAgICAgICAge3Byb3BzLnBvc3RzRGF0YS5tYXAoY3RybD0+KFxyXG4gICAgICAgICAgICAgICAgPFBvc3QgXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtjdHJsLnVzZXJuYW1lfSBcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtjdHJsLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlPXtjdHJsLmltYWdlfS8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICBcclxuICAgXHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgICBkaXZ7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCAxcHggI2NjYztcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDoyMHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6NDBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQG1lZGlhKG1pbi13aWR0aDoxMDAwcHggKWFuZCAobWluLWhlaWdodDogNzAwcHgpe1xyXG4gICAgICAgICAgICAgICAgICAgIGRpdntcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDcwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEobWluLXdpZHRoOjUwMHB4IClhbmQgKG1pbi1oZWlnaHQ6IDQwMXB4KXtcclxuICAgICAgICAgICAgICAgICAgICBkaXZ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhKG1pbi13aWR0aDo1MDBweCApYW5kIChtaW4taGVpZ2h0OiA0MDBweCl7XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGB9ICAgIFxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuKTtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcG9zdHM7Il19 */\n/*@ sourceURL=D:\\noon\\client\\components\\Posts\\Posts.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (posts);

/***/ })

})
//# sourceMappingURL=index.js.76b01a5e30475e00a289.hot-update.js.map