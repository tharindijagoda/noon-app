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
    className: "jsx-3728824022" + " " + "box",
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
  }, "div.jsx-3728824022{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-shadow:0 2px 1px #ccc;margin:auto;margin-top:20px;padding-top:40px;}@media(min-width:1000px )and (min-height:700px){div.jsx-3728824022{width:700px;height:600px;}}@media(min-width:500px )and (min-height:401px){div.jsx-3728824022{width:450px;height:400px;}}@media(min-width:500px )and (min-height:400px){div.jsx-3728824022{width:350px;height:300px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxub29uXFxjbGllbnRcXGNvbXBvbmVudHNcXFBvc3RzXFxQb3N0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlUyxBQUc0QixBQWFTLEFBT0EsQUFPQSxXQTFCUCxDQWFRLEFBT0EsQUFPQSxhQWJqQixBQU9BLEFBT0EsNERBM0JhLCtEQUNFLDZGQUNPLDBCQUNkLFlBRUcsZ0JBQ0MsaUJBQ3BCIiwiZmlsZSI6IkQ6XFxub29uXFxjbGllbnRcXGNvbXBvbmVudHNcXFBvc3RzXFxQb3N0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQb3N0IGZyb20gJy4vUG9zdC9Qb3N0JztcclxuXHJcbmNvbnN0IHBvc3RzID0gKHByb3BzKT0+KFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cclxuICAgICAgIFxyXG4gICAgICAgICAgICB7cHJvcHMucG9zdHNEYXRhLm1hcChjdHJsPT4oXHJcbiAgICAgICAgICAgICAgICA8UG9zdCBcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2N0cmwudXNlcm5hbWV9IFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e2N0cmwudXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e2N0cmwuaW1hZ2V9Lz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIFxyXG4gICBcclxuICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAgIGRpdntcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDFweCAjY2NjO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjIwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDo0MHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEobWluLXdpZHRoOjEwMDBweCApYW5kIChtaW4taGVpZ2h0OiA3MDBweCl7XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYShtaW4td2lkdGg6NTAwcHggKWFuZCAobWluLWhlaWdodDogNDAxcHgpe1xyXG4gICAgICAgICAgICAgICAgICAgIGRpdntcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEobWluLXdpZHRoOjUwMHB4IClhbmQgKG1pbi1oZWlnaHQ6IDQwMHB4KXtcclxuICAgICAgICAgICAgICAgICAgICBkaXZ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgYH0gICAgXHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBwb3N0czsiXX0= */\n/*@ sourceURL=D:\\noon\\client\\components\\Posts\\Posts.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (posts);

/***/ })

})
//# sourceMappingURL=index.js.06897412dff680783b06.hot-update.js.map