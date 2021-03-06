webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Posts/Post/Post.js":
/*!***************************************!*\
  !*** ./components/Posts/Post/Post.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _UI_Image_Image__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../UI/Image/Image */ "./components/UI/Image/Image.js");
/* harmony import */ var _UI_Button_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../UI/Button/Button */ "./components/UI/Button/Button.js");
/* harmony import */ var _UI_Title_Title__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../UI/Title/Title */ "./components/UI/Title/Title.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);








var _jsxFileName = "D:\\noon\\client\\components\\Posts\\Post\\Post.js";








var Post =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Post, _Component);

  function Post(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Post);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Post).call(this, props));
    _this.addFavoriteItem = _this.addFavoriteItem.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Post, [{
    key: "addFavoriteItem",
    value: function () {
      var _addFavoriteItem = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log("called", this.props.key);
                _context.next = 3;
                return fetch('http://localhost:8080/add?name=' + this.props.key);

              case 3:
                res = _context.sent;

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function addFavoriteItem() {
        return _addFavoriteItem.apply(this, arguments);
      }

      return addFavoriteItem;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-2719585156" + " " + "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_UI_Title_Title__WEBPACK_IMPORTED_MODULE_13__["default"], {
        username: this.props.name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
        onClick: function onClick() {
          return _this2.addFavoriteItem();
        },
        className: "jsx-2719585156",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_UI_Button_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "fa fa-fw fa-heart"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-2719585156" + " " + "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_UI_Image_Image__WEBPACK_IMPORTED_MODULE_11__["default"], {
        image: this.props.image,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "2719585156",
        __self: this
      }, "img.jsx-2719585156{max-width:100%;height:auto;}a.jsx-2719585156{position:absolute;right:20px;text-align:left;}@media (min-width:600px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxub29uXFxjbGllbnRcXGNvbXBvbmVudHNcXFBvc3RzXFxQb3N0XFxQb3N0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDYSxBQUdvQyxBQUlHLEFBTXZCLEFBSUksZUFiYSxHQUlGLFNBSGQsRUFJbUIsZ0JBQ25CIiwiZmlsZSI6IkQ6XFxub29uXFxjbGllbnRcXGNvbXBvbmVudHNcXFBvc3RzXFxQb3N0XFxQb3N0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0ICx7IENvbXBvbmVudCAsRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICcuLi8uLi9VSS9JbWFnZS9JbWFnZSc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vVUkvQnV0dG9uL0J1dHRvbic7XHJcbmltcG9ydCBUaXRsZSBmcm9tICcuLi8uLi9VSS9UaXRsZS9UaXRsZSc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY2xhc3MgUG9zdCBleHRlbmRzIENvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7ICAgICAgICBcclxuICAgICAgICB0aGlzLmFkZEZhdm9yaXRlSXRlbSA9IHRoaXMuYWRkRmF2b3JpdGVJdGVtLmJpbmQodGhpcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGFkZEZhdm9yaXRlSXRlbSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNhbGxlZFwiICx0aGlzLnByb3BzLmtleSk7XHJcbiAgICAgICAgY29uc3QgcmVzPSAgYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hZGQ/bmFtZT0nK3RoaXMucHJvcHMua2V5KVxyXG4gICAgICAgIC8vIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICAgICAgLy8gcmV0dXJuKGpzb24pO1xyXG4gICAgICB9XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxGcmFnbWVudD4gXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8VGl0bGUgdXNlcm5hbWU9e3RoaXMucHJvcHMubmFtZX0vPlxyXG4gICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCk9PnRoaXMuYWRkRmF2b3JpdGVJdGVtKCl9PjxCdXR0b24+ZmEgZmEtZncgZmEtaGVhcnQ8L0J1dHRvbj48L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIGltYWdlPXt0aGlzLnByb3BzLmltYWdlfS8+ICBcclxuICAgICAgICAgICAgPC9kaXY+ICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6MjBweDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYm94e1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aCA6XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAuYm94e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGggOlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGB9ICAgIFxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICA8L0ZyYWdtZW50PiBcclxuICAgICk7XHJcbn19XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3Q7Il19 */\n/*@ sourceURL=D:\\noon\\client\\components\\Posts\\Post\\Post.js */"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("hr", {
        className: "jsx-2719585156",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }));
    }
  }]);

  return Post;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ })

})
//# sourceMappingURL=index.js.60183a437a2edd57b95f.hot-update.js.map