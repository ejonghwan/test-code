webpackHotUpdate("static\\development\\pages\\signup.js",{

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_GlobalStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/GlobalStyles */ "./component/GlobalStyles.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\jjong\\Desktop\\test-code\\front\\pages\\signup.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Signup = function Signup() {
  _s();

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    !chek ? setChekErr(true) : setChekErr(false);
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      id = _useState[0],
      setId = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      password = _useState3[0],
      setPassword = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      passwordCheck = _useState4[0],
      setPasswordCheck = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      chek = _useState5[0],
      setChek = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      passwordCheckErr = _useState6[0],
      setPasswordCheckErr = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      chekErr = _useState7[0],
      setChekErr = _useState7[1];

  var handleId = function handleId(e) {
    setId(e.target.value);
  };

  var handleName = function handleName(e) {
    setName(e.target.value);
  };

  var handlePassword = function handlePassword(e) {
    setPassword(e.target.value);
  };

  var handlePasswordCheck = function handlePasswordCheck(e) {
    setPasswordCheckErr(password !== passwordCheck);
    console.log(password !== passwordCheck);
    setPasswordCheck(e.target.value);
  };

  var handleCheckbox = function handleCheckbox(e) {
    setChek(e.target.checked); // chek ? setChekErr(false) : null

    setChekErr(false);
    console.log(chek);
  };

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx(_component_GlobalStyles__WEBPACK_IMPORTED_MODULE_1__["GlobalStyles"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }), __jsx("form", {
    onSubmit: handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, __jsx("label", {
    htmlFor: "id",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }, "id"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 51
    }
  }), __jsx("input", {
    id: "id",
    onChange: handleId,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, __jsx("label", {
    htmlFor: "name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  }, "name"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 55
    }
  }), __jsx("input", {
    id: "name",
    onChange: handleName,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, __jsx("label", {
    htmlFor: "password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }, "password"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 63
    }
  }), __jsx("input", {
    id: "password",
    onChange: handlePassword,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 21
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }, __jsx("label", {
    htmlFor: "password-check",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }
  }, "password-check"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 75
    }
  }), __jsx("input", {
    id: "password-check",
    onChange: handlePasswordCheck,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  }), passwordCheckErr && __jsx("div", {
    style: {
      color: "red"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 43
    }
  }, "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }, __jsx("input", {
    id: "checkbox",
    type: "checkbox",
    checked: chek,
    onChange: handleCheckbox,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 21
    }
  }), __jsx("label", {
    htmlFor: "checkbox",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 21
    }
  }, "\uC885\uD658\uC758 \uB9D0\uC744 \uB4E4\uC744\uAC83\uC744 \uB9F9\uC138\uD569\uB2C8\uB2E4"), chekErr && __jsx("div", {
    style: {
      color: "red"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 34
    }
  }, "\uB0B4 \uB9D0\uC744 \uC548\uB4E3\uACA0\uB2E4\uACE0 ?")), __jsx(_component_GlobalStyles__WEBPACK_IMPORTED_MODULE_1__["ActiveBtn"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }, "signup")));
};

_s(Signup, "JPn3C7InvPoGxaL1Vy8jC00yCZk=");

_c = Signup;
/* harmony default export */ __webpack_exports__["default"] = (Signup);

var _c;

$RefreshReg$(_c, "Signup");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zaWdudXAuanMiXSwibmFtZXMiOlsiU2lnbnVwIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY2hlayIsInNldENoZWtFcnIiLCJ1c2VTdGF0ZSIsImlkIiwic2V0SWQiLCJuYW1lIiwic2V0TmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJwYXNzd29yZENoZWNrIiwic2V0UGFzc3dvcmRDaGVjayIsInNldENoZWsiLCJwYXNzd29yZENoZWNrRXJyIiwic2V0UGFzc3dvcmRDaGVja0VyciIsImNoZWtFcnIiLCJoYW5kbGVJZCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlTmFtZSIsImhhbmRsZVBhc3N3b3JkIiwiaGFuZGxlUGFzc3dvcmRDaGVjayIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDaGVja2JveCIsImNoZWNrZWQiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUVqQixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxDQUFELEVBQU87QUFDeEJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBLEtBQUNDLElBQUQsR0FBUUMsVUFBVSxDQUFDLElBQUQsQ0FBbEIsR0FBMkJBLFVBQVUsQ0FBQyxLQUFELENBQXJDO0FBR0gsR0FMRDs7QUFGaUIsa0JBU0dDLHNEQUFRLEVBVFg7QUFBQSxNQVNWQyxFQVRVO0FBQUEsTUFTTkMsS0FUTTs7QUFBQSxtQkFVT0Ysc0RBQVEsRUFWZjtBQUFBLE1BVVZHLElBVlU7QUFBQSxNQVVKQyxPQVZJOztBQUFBLG1CQVdlSixzREFBUSxFQVh2QjtBQUFBLE1BV1ZLLFFBWFU7QUFBQSxNQVdBQyxXQVhBOztBQUFBLG1CQVl5Qk4sc0RBQVEsQ0FBQyxLQUFELENBWmpDO0FBQUEsTUFZVk8sYUFaVTtBQUFBLE1BWUtDLGdCQVpM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cC5qcy44YWExYzdkNDQ3ZGFjZDBmMGE5Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEdsb2JhbFN0eWxlcywgQnV0dG9uLCBBY3RpdmVCdG4gfSBmcm9tICcuLi9jb21wb25lbnQvR2xvYmFsU3R5bGVzJ1xyXG5cclxuY29uc3QgU2lnbnVwID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICFjaGVrID8gc2V0Q2hla0Vycih0cnVlKSA6IHNldENoZWtFcnIoZmFsc2UpIFxyXG5cclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFtpZCwgc2V0SWRdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbcGFzc3dvcmRDaGVjaywgc2V0UGFzc3dvcmRDaGVja10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbY2hlaywgc2V0Q2hla10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcGFzc3dvcmRDaGVja0Vyciwgc2V0UGFzc3dvcmRDaGVja0Vycl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbY2hla0Vyciwgc2V0Q2hla0Vycl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgXHJcbiAgICBjb25zdCBoYW5kbGVJZCA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0SWQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZU5hbWUgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldE5hbWUoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUGFzc3dvcmQgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVBhc3N3b3JkQ2hlY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldFBhc3N3b3JkQ2hlY2tFcnIocGFzc3dvcmQgIT09IHBhc3N3b3JkQ2hlY2spXHJcbiAgICAgICAgY29uc29sZS5sb2cocGFzc3dvcmQgIT09IHBhc3N3b3JkQ2hlY2spXHJcbiAgICAgICAgc2V0UGFzc3dvcmRDaGVjayhlLnRhcmdldC52YWx1ZSlcclxuICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoZWNrYm94ID0gKGUpID0+IHtcclxuICAgICAgICBzZXRDaGVrKGUudGFyZ2V0LmNoZWNrZWQpXHJcbiAgICAgICAgLy8gY2hlayA/IHNldENoZWtFcnIoZmFsc2UpIDogbnVsbFxyXG4gICAgICAgIHNldENoZWtFcnIoZmFsc2UpXHJcbiAgICAgICAgY29uc29sZS5sb2coY2hlaylcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxHbG9iYWxTdHlsZXMgLz5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaWRcIj5pZDwvbGFiZWw+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiaWRcIiBvbkNoYW5nZT17aGFuZGxlSWR9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+bmFtZTwvbGFiZWw+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwibmFtZVwiIG9uQ2hhbmdlPXtoYW5kbGVOYW1lfS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPnBhc3N3b3JkPC9sYWJlbD48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJwYXNzd29yZFwiIG9uQ2hhbmdlPXtoYW5kbGVQYXNzd29yZH0vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmQtY2hlY2tcIj5wYXNzd29yZC1jaGVjazwvbGFiZWw+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwicGFzc3dvcmQtY2hlY2tcIiBvbkNoYW5nZT17aGFuZGxlUGFzc3dvcmRDaGVja30vPlxyXG4gICAgICAgICAgICAgICAgICAgIHsgcGFzc3dvcmRDaGVja0VyciAmJiA8ZGl2IHN0eWxlPXt7Y29sb3I6IFwicmVkXCIsIH19Puu5hOuwgOuyiO2YuOqwgCDsnbzsuZjtlZjsp4Ag7JWK7Iq164uI64ukPC9kaXY+IH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIGNoZWNrZWQg7IaN7ISx7JeQIHN0YXRl6rCS7J2EIOuEo+yWtOyVvO2VqC4g6re466as6rOgIO2VqOyImOyXkOuKlCBlLnRhcmdldC5jaGVja2VkICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImNoZWNrYm94XCIgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17Y2hla30gb25DaGFuZ2U9e2hhbmRsZUNoZWNrYm94fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjaGVja2JveFwiPuyihe2ZmOydmCDrp5DsnYQg65Ok7J2E6rKD7J2EIOunueyEuO2VqeuLiOuLpDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgeyBjaGVrRXJyICYmIDxkaXYgc3R5bGU9e3tjb2xvcjogXCJyZWRcIiwgfX0+64K0IOunkOydhCDslYjrk6PqsqDri6Tqs6AgPzwvZGl2PiB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxBY3RpdmVCdG4+c2lnbnVwPC9BY3RpdmVCdG4+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWdudXA7Il0sInNvdXJjZVJvb3QiOiIifQ==