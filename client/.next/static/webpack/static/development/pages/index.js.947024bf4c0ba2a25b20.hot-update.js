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
    className: "jsx-3381546150" + " " + "row ",
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
    id: "3381546150",
    __self: this
  }, "div.jsx-3381546150{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;box-shadow:0 2px 1px #ccc;margin:auto;margin-top:20px;padding-top:40px;}@media(min-width:1000px )and (min-height:700px){div.jsx-3381546150{width:700px;height:600px;}}@media(min-width:500px )and (min-height:401px){div.jsx-3381546150{width:450px;height:400px;}}@media(min-width:500px )and (min-height:400px){div.jsx-3381546150{width:350px;height:300px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxub29uXFxjbGllbnRcXGNvbXBvbmVudHNcXFBvc3RzXFxQb3N0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlUyxBQUc0QixBQWFTLEFBT0EsQUFPQSxXQTFCUCxDQWFRLEFBT0EsQUFPQSxhQWJqQixBQU9BLEFBT0EsNERBM0JhLCtEQUVTLDBCQUNkLFlBRUcsZ0JBQ0MsaUJBQ3BCIiwiZmlsZSI6IkQ6XFxub29uXFxjbGllbnRcXGNvbXBvbmVudHNcXFBvc3RzXFxQb3N0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQb3N0IGZyb20gJy4vUG9zdC9Qb3N0JztcclxuXHJcbmNvbnN0IHBvc3RzID0gKHByb3BzKT0+KFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgXCI+XHJcbiAgICAgICBcclxuICAgICAgICAgICAge3Byb3BzLnBvc3RzRGF0YS5tYXAoY3RybD0+KFxyXG4gICAgICAgICAgICAgICAgPFBvc3QgXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtjdHJsLnVzZXJuYW1lfSBcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtjdHJsLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlPXtjdHJsLmltYWdlfS8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICBcclxuICAgXHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgICBkaXZ7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAycHggMXB4ICNjY2M7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6MjBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOjQwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYShtaW4td2lkdGg6MTAwMHB4IClhbmQgKG1pbi1oZWlnaHQ6IDcwMHB4KXtcclxuICAgICAgICAgICAgICAgICAgICBkaXZ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MDBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhKG1pbi13aWR0aDo1MDBweCApYW5kIChtaW4taGVpZ2h0OiA0MDFweCl7XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYShtaW4td2lkdGg6NTAwcHggKWFuZCAobWluLWhlaWdodDogNDAwcHgpe1xyXG4gICAgICAgICAgICAgICAgICAgIGRpdntcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBgfSAgICBcclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbik7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBvc3RzOyJdfQ== */\n/*@ sourceURL=D:\\noon\\client\\components\\Posts\\Posts.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (posts);

/***/ })

})
//# sourceMappingURL=index.js.947024bf4c0ba2a25b20.hot-update.js.map