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
        var res, json;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log("called", this.props.name);
                _context.next = 3;
                return fetch('http://localhost:8080/add?name=' + this.props.name);

              case 3:
                res = _context.sent;
                _context.next = 6;
                return res.json();

              case 6:
                json = _context.sent;
                return _context.abrupt("return", json);

              case 8:
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

      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-4285177193" + " " + "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_UI_Title_Title__WEBPACK_IMPORTED_MODULE_13__["default"], {
        username: this.props.name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_UI_Image_Image__WEBPACK_IMPORTED_MODULE_11__["default"], {
        image: this.props.image,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
        onClick: function onClick() {
          return _this2.addFavoriteItem();
        },
        className: "jsx-4285177193",
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
      }, "fa fa-fw fa-heart")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "4285177193",
        __self: this
      }, "img.jsx-4285177193{max-width:100%;height:auto;}a.jsx-4285177193{position:absolute;right:20px;top:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxub29uXFxjbGllbnRcXGNvbXBvbmVudHNcXFBvc3RzXFxQb3N0XFxQb3N0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCYSxBQUdvQyxBQUlHLGVBSE4sR0FJRixTQUhkLEVBSVksU0FDWiIsImZpbGUiOiJEOlxcbm9vblxcY2xpZW50XFxjb21wb25lbnRzXFxQb3N0c1xcUG9zdFxcUG9zdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCAseyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICcuLi8uLi9VSS9JbWFnZS9JbWFnZSc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vVUkvQnV0dG9uL0J1dHRvbic7XHJcbmltcG9ydCBUaXRsZSBmcm9tICcuLi8uLi9VSS9UaXRsZS9UaXRsZSc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY2xhc3MgUG9zdCBleHRlbmRzIENvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7ICAgICAgICBcclxuICAgICAgICB0aGlzLmFkZEZhdm9yaXRlSXRlbSA9IHRoaXMuYWRkRmF2b3JpdGVJdGVtLmJpbmQodGhpcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGFkZEZhdm9yaXRlSXRlbSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNhbGxlZFwiICx0aGlzLnByb3BzLm5hbWUpO1xyXG4gICAgICAgIGNvbnN0IHJlcz0gIGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwODAvYWRkP25hbWU9Jyt0aGlzLnByb3BzLm5hbWUpXHJcbiAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgICAgICByZXR1cm4oanNvbik7XHJcbiAgICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPFRpdGxlIHVzZXJuYW1lPXt0aGlzLnByb3BzLm5hbWV9Lz5cclxuICAgICAgICAgICAgPEltYWdlIGltYWdlPXt0aGlzLnByb3BzLmltYWdlfS8+ICAgICBcclxuICAgICAgICAgICAgPGEgb25DbGljaz17KCk9PnRoaXMuYWRkRmF2b3JpdGVJdGVtKCl9PjxCdXR0b24+ZmEgZmEtZncgZmEtaGVhcnQ8L0J1dHRvbj48L2E+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDoyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDoxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYH0gICAgXHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgIDxoci8+XHJcbiAgICA8L2Rpdj5cclxuICAgICk7XHJcbn19XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3Q7Il19 */\n/*@ sourceURL=D:\\noon\\client\\components\\Posts\\Post\\Post.js */"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("hr", {
        className: "jsx-4285177193",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
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
//# sourceMappingURL=index.js.e14974f6630f741b54ce.hot-update.js.map