webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./Component/LoginForm.js":
/*!********************************!*\
  !*** ./Component/LoginForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _GlobalStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GlobalStyles */ "./Component/GlobalStyles.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_signup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/signup */ "./pages/signup.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\jjong\\Desktop\\test-code\\front\\Component\\LoginForm.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var LoginForm = function LoginForm(_ref) {
  var isLogged = _ref.isLogged;
  var dummy = {
    isLogged: true,
    user: 'ejonghwan',
    post: [],
    foolowing: [],
    follower: []
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    console.log({
      id: id,
      password: password
    }); // isLogged = true
    // console.log(isLogged)
  };

  return __jsx("div", {
    className: "login-window",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx("form", {
    onSubmit: handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, __jsx("label", {
    htmlFor: "id",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }, "id"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 51
    }
  }), __jsx("input", {
    id: "id",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, __jsx("label", {
    htmlFor: "password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }, "password"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 63
    }
  }), __jsx("input", {
    id: "password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  })), __jsx(_GlobalStyles__WEBPACK_IMPORTED_MODULE_1__["ActiveBtn"], {
    onClick: handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, "login"), __jsx(_GlobalStyles__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/signup",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 25
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 46
    }
  }, "signup")))));
};

_c = LoginForm;
/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

var _c;

$RefreshReg$(_c, "LoginForm");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9Db21wb25lbnQvTG9naW5Gb3JtLmpzIl0sIm5hbWVzIjpbIkxvZ2luRm9ybSIsImlzTG9nZ2VkIiwiZHVtbXkiLCJ1c2VyIiwicG9zdCIsImZvb2xvd2luZyIsImZvbGxvd2VyIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImlkIiwicGFzc3dvcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQWtCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBRWhDLE1BQU1DLEtBQUssR0FBRztBQUNWRCxZQUFRLEVBQUUsSUFEQTtBQUVWRSxRQUFJLEVBQUUsV0FGSTtBQUdWQyxRQUFJLEVBQUUsRUFISTtBQUlWQyxhQUFTLEVBQUUsRUFKRDtBQUtWQyxZQUFRLEVBQUU7QUFMQSxHQUFkOztBQVVBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQsRUFBTztBQUN4QkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQ1JDLFFBQUUsRUFBRkEsRUFEUTtBQUVSQyxjQUFRLEVBQVJBO0FBRlEsS0FBWixFQUZ3QixDQU14QjtBQUNBO0FBQ0gsR0FSRDs7QUFVQSxTQUNJO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU0sWUFBUSxFQUFFTixZQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU8sV0FBTyxFQUFDLElBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKLEVBQ2tDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEbEMsRUFFSTtBQUFPLE1BQUUsRUFBQyxJQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixDQURKLEVBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU8sV0FBTyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixFQUM4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRDlDLEVBRUk7QUFBTyxNQUFFLEVBQUMsVUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosQ0FMSixFQVNJLE1BQUMsdURBQUQ7QUFBVyxXQUFPLEVBQUVBLFlBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFUSixFQVVJLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsU0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBckIsQ0FBUixDQVZKLENBREosQ0FESjtBQWdCSCxDQXRDRDs7S0FBTVAsUztBQXdDU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuZDU3YTI0YjUyN2JlMTU5NGNlYmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEFjdGl2ZUJ0biwgQnV0dG9uIH0gZnJvbSAnLi9HbG9iYWxTdHlsZXMnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlSW5wdXQgfSBmcm9tICcuLi9wYWdlcy9zaWdudXAnXHJcblxyXG5jb25zdCBMb2dpbkZvcm0gPSAoeyBpc0xvZ2dlZCB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgZHVtbXkgPSB7XHJcbiAgICAgICAgaXNMb2dnZWQ6IHRydWUsXHJcbiAgICAgICAgdXNlcjogJ2Vqb25naHdhbicsXHJcbiAgICAgICAgcG9zdDogW10sXHJcbiAgICAgICAgZm9vbG93aW5nOiBbXSxcclxuICAgICAgICBmb2xsb3dlcjogW11cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgY29uc29sZS5sb2coe1xyXG4gICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgcGFzc3dvcmQsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLyBpc0xvZ2dlZCA9IHRydWVcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhpc0xvZ2dlZClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4td2luZG93XCI+XHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImlkXCI+aWQ8L2xhYmVsPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImlkXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+cGFzc3dvcmQ8L2xhYmVsPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInBhc3N3b3JkXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPEFjdGl2ZUJ0biBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PmxvZ2luPC9BY3RpdmVCdG4+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uPjxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+PGE+c2lnbnVwPC9hPjwvTGluaz48L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtOyJdLCJzb3VyY2VSb290IjoiIn0=