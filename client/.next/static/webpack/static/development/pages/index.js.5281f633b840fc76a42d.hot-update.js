webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/FavoriteItems/FavoriteItem/FavoriteItem.js":
/*!***************************************************************!*\
  !*** ./components/FavoriteItems/FavoriteItem/FavoriteItem.js ***!
  \***************************************************************/
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








var _jsxFileName = "D:\\noon\\client\\components\\FavoriteItems\\FavoriteItem\\FavoriteItem.js";








var FavoriteItem =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(FavoriteItem, _Component);

  function FavoriteItem(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, FavoriteItem);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(FavoriteItem).call(this, props));
    _this.deleteFavoriteItem = _this.deleteFavoriteItem.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(FavoriteItem, [{
    key: "deleteFavoriteItem",
    value: function () {
      var _deleteFavoriteItem = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res, json;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log("called", this.props.name);
                _context.next = 3;
                return fetch('http://localhost:8080/delete?name=' + this.props.name);

              case 3:
                res = _context.sent;
                _context.next = 6;
                return res.json();

              case 6:
                json = _context.sent;
                next_router__WEBPACK_IMPORTED_MODULE_14___default.a.push('/about');
                return _context.abrupt("return", json);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function deleteFavoriteItem() {
        return _deleteFavoriteItem.apply(this, arguments);
      }

      return deleteFavoriteItem;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-2869930264" + " " + "row",
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
          return _this2.deleteFavoriteItem();
        },
        className: "jsx-2869930264",
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
      }, "fa fa-fw fa-trash")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "2869930264",
        __self: this
      }, "img.jsx-2869930264{max-width:100%;height:auto;}a.jsx-2869930264{position:absolute;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxub29uXFxjbGllbnRcXGNvbXBvbmVudHNcXEZhdm9yaXRlSXRlbXNcXEZhdm9yaXRlSXRlbVxcRmF2b3JpdGVJdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCYSxBQUdvQyxBQUlHLGVBSE4sR0FLaEIsU0FKQSIsImZpbGUiOiJEOlxcbm9vblxcY2xpZW50XFxjb21wb25lbnRzXFxGYXZvcml0ZUl0ZW1zXFxGYXZvcml0ZUl0ZW1cXEZhdm9yaXRlSXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCAseyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICcuLi8uLi9VSS9JbWFnZS9JbWFnZSc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vVUkvQnV0dG9uL0J1dHRvbic7XHJcbmltcG9ydCBUaXRsZSBmcm9tICcuLi8uLi9VSS9UaXRsZS9UaXRsZSc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5jbGFzcyBGYXZvcml0ZUl0ZW0gZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpOyAgICAgICAgXHJcbiAgICAgICAgdGhpcy5kZWxldGVGYXZvcml0ZUl0ZW0gPSB0aGlzLmRlbGV0ZUZhdm9yaXRlSXRlbS5iaW5kKHRoaXMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBkZWxldGVGYXZvcml0ZUl0ZW0oKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjYWxsZWRcIiAsdGhpcy5wcm9wcy5uYW1lKTtcclxuICAgICAgICBjb25zdCByZXM9ICBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDgwL2RlbGV0ZT9uYW1lPScrdGhpcy5wcm9wcy5uYW1lKVxyXG4gICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICAgICAgUm91dGVyLnB1c2goJy9hYm91dCcpXHJcbiAgICAgICAgcmV0dXJuKGpzb24pO1xyXG4gICAgICB9XHJcbiAgICByZW5kZXIoKXsgICAgXHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8VGl0bGUgdXNlcm5hbWU9e3RoaXMucHJvcHMubmFtZX0vPlxyXG4gICAgICAgICAgICA8SW1hZ2UgaW1hZ2U9e3RoaXMucHJvcHMuaW1hZ2V9Lz4gICAgIFxyXG4gICAgICAgICAgICA8YSBvbkNsaWNrPXsoKT0+dGhpcy5kZWxldGVGYXZvcml0ZUl0ZW0oKX0+PEJ1dHRvbj5mYSBmYS1mdyBmYS10cmFzaDwvQnV0dG9uPjwvYT5cclxuICAgICAgICBcclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYH0gICAgXHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgIDxoci8+XHJcbiAgICA8L2Rpdj5cclxuICAgICk7XHJcbn19XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZhdm9yaXRlSXRlbTsiXX0= */\n/*@ sourceURL=D:\\noon\\client\\components\\FavoriteItems\\FavoriteItem\\FavoriteItem.js */"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("hr", {
        className: "jsx-2869930264",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }));
    }
  }]);

  return FavoriteItem;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (FavoriteItem);

/***/ })

})
//# sourceMappingURL=index.js.5281f633b840fc76a42d.hot-update.js.map