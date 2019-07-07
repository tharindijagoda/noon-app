webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Posts/Posts.js":
/*!***********************************!*\
  !*** ./components/Posts/Posts.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Post_Post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Post/Post */ "./components/Posts/Post/Post.js");
var _jsxFileName = "D:\\noon\\client\\components\\Posts\\Posts.js";



var posts = function posts(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, props.postsData.map(function (ctrl) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Post_Post__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: ctrl.username,
      name: ctrl.username,
      image: ctrl.image,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    });
  })) // {/*<div>
  //      <div>        
  //     </div>
  //     <style jsx>
  //     {`
  //         div{
  //             width: 100%;
  //             display: flex;
  //             flex-flow: column;
  //             align-items: center;
  //             box-shadow: 0 2px 1px #ccc;
  //             margin: auto;
  //             padding: 10px 0;
  //         }
  //     `}    
  //     </style>
  // </div> */}
  ;
};

/* harmony default export */ __webpack_exports__["default"] = (posts);

/***/ })

})
//# sourceMappingURL=index.js.083cedbfa2ee670597d5.hot-update.js.map