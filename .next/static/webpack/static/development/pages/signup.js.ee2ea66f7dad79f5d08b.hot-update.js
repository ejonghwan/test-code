webpackHotUpdate("static\\development\\pages\\signup.js",{

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_GlobalStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/GlobalStyles */ "./component/GlobalStyles.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\jjong\\Desktop\\test-code\\front\\pages\\signup.js",
    _s2 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var Signup = function Signup() {
  _s2();

  var _s = $RefreshSig$();

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    !chek ? setChekErr(true) : setChekErr(false);
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      id = _useState[0],
      setId = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      password = _useState3[0],
      setPassword = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      passwordCheck = _useState4[0],
      setPasswordCheck = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      chek = _useState5[0],
      setChek = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      passwordCheckErr = _useState6[0],
      setPasswordCheckErr = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      chekErr = _useState7[0],
      setChekErr = _useState7[1];

  var useInput = function useInput() {
    _s();

    var initalState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initalState),
        state = _useState8[0],
        handler = _useState8[1];

    handler = (Object(_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__["default"])("handler"), function (e) {
      state: e.target.value;
    });
    return [state, handler];
  }; // const handleId = (e) => {
  //     setId(e.target.value);
  // }


  _s(useInput, "VKm4XMWmY8oAAyjLPEKv+DJmPOM=");

  var handleName = function handleName(e) {
    setName(e.target.value);
  };

  var handlePassword = function handlePassword(e) {
    setPassword(e.target.value);
  };

  var handlePasswordCheck = function handlePasswordCheck(e) {
    // setPasswordCheckErr(password !== e.target.value)
    password !== e.target.value ? setPasswordCheckErr(true) : setPasswordCheckErr(false);
    console.log(password !== e.target.value);
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
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx(_component_GlobalStyles__WEBPACK_IMPORTED_MODULE_2__["GlobalStyles"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }), __jsx("form", {
    onSubmit: handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, __jsx("label", {
    htmlFor: "id",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  }, "id"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 51
    }
  }), __jsx("input", {
    id: "id",
    onChange: handleId,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }, __jsx("label", {
    htmlFor: "name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 21
    }
  }, "name"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 55
    }
  }), __jsx("input", {
    id: "name",
    onChange: handleName,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }, __jsx("label", {
    htmlFor: "password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 21
    }
  }, "password"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 63
    }
  }), __jsx("input", {
    id: "password",
    onChange: handlePassword,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 21
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }, __jsx("label", {
    htmlFor: "password-check",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 21
    }
  }, "password-check"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 75
    }
  }), __jsx("input", {
    id: "password-check",
    onChange: handlePasswordCheck,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 21
    }
  }), passwordCheckErr && __jsx("div", {
    style: {
      color: "red"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 43
    }
  }, "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
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
      lineNumber: 83,
      columnNumber: 21
    }
  }), __jsx("label", {
    htmlFor: "checkbox",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 21
    }
  }, "\uC885\uD658\uC758 \uB9D0\uC744 \uB4E4\uC744\uAC83\uC744 \uB9F9\uC138\uD569\uB2C8\uB2E4"), chekErr && __jsx("div", {
    style: {
      color: "red"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 34
    }
  }, "\uB0B4 \uB9D0\uC744 \uC548\uB4E3\uACA0\uB2E4\uACE0 ?")), __jsx(_component_GlobalStyles__WEBPACK_IMPORTED_MODULE_2__["ActiveBtn"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }, "signup")));
};

_s2(Signup, "JPn3C7InvPoGxaL1Vy8jC00yCZk=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zaWdudXAuanMiXSwibmFtZXMiOlsiU2lnbnVwIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY2hlayIsInNldENoZWtFcnIiLCJ1c2VTdGF0ZSIsImlkIiwic2V0SWQiLCJuYW1lIiwic2V0TmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJwYXNzd29yZENoZWNrIiwic2V0UGFzc3dvcmRDaGVjayIsInNldENoZWsiLCJwYXNzd29yZENoZWNrRXJyIiwic2V0UGFzc3dvcmRDaGVja0VyciIsImNoZWtFcnIiLCJ1c2VJbnB1dCIsImluaXRhbFN0YXRlIiwic3RhdGUiLCJoYW5kbGVyIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVOYW1lIiwiaGFuZGxlUGFzc3dvcmQiLCJoYW5kbGVQYXNzd29yZENoZWNrIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNoZWNrYm94IiwiY2hlY2tlZCIsImhhbmRsZUlkIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFBQTs7QUFFakIsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3hCQSxLQUFDLENBQUNDLGNBQUY7QUFDQSxLQUFDQyxJQUFELEdBQVFDLFVBQVUsQ0FBQyxJQUFELENBQWxCLEdBQTJCQSxVQUFVLENBQUMsS0FBRCxDQUFyQztBQUdILEdBTEQ7O0FBRmlCLGtCQVNHQyxzREFBUSxFQVRYO0FBQUEsTUFTVkMsRUFUVTtBQUFBLE1BU05DLEtBVE07O0FBQUEsbUJBVU9GLHNEQUFRLEVBVmY7QUFBQSxNQVVWRyxJQVZVO0FBQUEsTUFVSkMsT0FWSTs7QUFBQSxtQkFXZUosc0RBQVEsRUFYdkI7QUFBQSxNQVdWSyxRQVhVO0FBQUEsTUFXQUMsV0FYQTs7QUFBQSxtQkFZeUJOLHNE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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFHSTtBQUFPLFdBQU8sRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0ZBSEosRUFJTVosT0FBTyxJQUFJO0FBQUssU0FBSyxFQUFFO0FBQUNlLFdBQUssRUFBRTtBQUFSLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0REFKakIsQ0FuQkosRUF5QkksTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBekJKLENBRkosQ0FESjtBQWdDSCxDQXZGRDs7SUFBTWpDLE07O0tBQUFBLE07QUF5RlNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxzaWdudXAuanMuZWUyZWE2NmY3ZGFkNzlmNWQwOGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBHbG9iYWxTdHlsZXMsIEJ1dHRvbiwgQWN0aXZlQnRuIH0gZnJvbSAnLi4vY29tcG9uZW50L0dsb2JhbFN0eWxlcydcclxuXHJcbmNvbnN0IFNpZ251cCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAhY2hlayA/IHNldENoZWtFcnIodHJ1ZSkgOiBzZXRDaGVrRXJyKGZhbHNlKSBcclxuXHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkQ2hlY2ssIHNldFBhc3N3b3JkQ2hlY2tdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2NoZWssIHNldENoZWtdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkQ2hlY2tFcnIsIHNldFBhc3N3b3JkQ2hlY2tFcnJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2NoZWtFcnIsIHNldENoZWtFcnJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHJcbiAgICBjb25zdCB1c2VJbnB1dCA9IChpbml0YWxTdGF0ZSA9IG51bGwpID0+IHtcclxuICAgICAgICBjb25zdCBbc3RhdGUsIGhhbmRsZXJdID0gdXNlU3RhdGUoaW5pdGFsU3RhdGUpO1xyXG4gICAgICAgIGhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZTogZS50YXJnZXQudmFsdWVcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFtzdGF0ZSwgaGFuZGxlcl1cclxuICAgIH1cclxuXHJcblxyXG4gICAgXHJcbiAgICAvLyBjb25zdCBoYW5kbGVJZCA9IChlKSA9PiB7XHJcbiAgICAvLyAgICAgc2V0SWQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZU5hbWUgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldE5hbWUoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUGFzc3dvcmQgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVBhc3N3b3JkQ2hlY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgIC8vIHNldFBhc3N3b3JkQ2hlY2tFcnIocGFzc3dvcmQgIT09IGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgIHBhc3N3b3JkICE9PSBlLnRhcmdldC52YWx1ZSA/IHNldFBhc3N3b3JkQ2hlY2tFcnIodHJ1ZSkgOiBzZXRQYXNzd29yZENoZWNrRXJyKGZhbHNlKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHBhc3N3b3JkICE9PSBlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICBzZXRQYXNzd29yZENoZWNrKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hlY2tib3ggPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldENoZWsoZS50YXJnZXQuY2hlY2tlZClcclxuICAgICAgICAvLyBjaGVrID8gc2V0Q2hla0VycihmYWxzZSkgOiBudWxsXHJcbiAgICAgICAgc2V0Q2hla0VycihmYWxzZSlcclxuICAgICAgICBjb25zb2xlLmxvZyhjaGVrKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEdsb2JhbFN0eWxlcyAvPlxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpZFwiPmlkPC9sYWJlbD48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJpZFwiIG9uQ2hhbmdlPXtoYW5kbGVJZH0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5uYW1lPC9sYWJlbD48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJuYW1lXCIgb25DaGFuZ2U9e2hhbmRsZU5hbWV9Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+cGFzc3dvcmQ8L2xhYmVsPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInBhc3N3b3JkXCIgb25DaGFuZ2U9e2hhbmRsZVBhc3N3b3JkfS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZC1jaGVja1wiPnBhc3N3b3JkLWNoZWNrPC9sYWJlbD48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJwYXNzd29yZC1jaGVja1wiIG9uQ2hhbmdlPXtoYW5kbGVQYXNzd29yZENoZWNrfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgeyBwYXNzd29yZENoZWNrRXJyICYmIDxkaXYgc3R5bGU9e3tjb2xvcjogXCJyZWRcIiwgfX0+67mE67CA67KI7Zi46rCAIOydvOy5mO2VmOyngCDslYrsirXri4jri6Q8L2Rpdj4gfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogY2hlY2tlZCDsho3shLHsl5Agc3RhdGXqsJLsnYQg64Sj7Ja07JW87ZWoLiDqt7jrpqzqs6Ag7ZWo7IiY7JeQ64qUIGUudGFyZ2V0LmNoZWNrZWQgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiY2hlY2tib3hcIiB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXtjaGVrfSBvbkNoYW5nZT17aGFuZGxlQ2hlY2tib3h9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNoZWNrYm94XCI+7KKF7ZmY7J2YIOunkOydhCDrk6TsnYTqsoPsnYQg66e57IS47ZWp64uI64ukPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICB7IGNoZWtFcnIgJiYgPGRpdiBzdHlsZT17e2NvbG9yOiBcInJlZFwiLCB9fT7rgrQg66eQ7J2EIOyViOuTo+qyoOuLpOqzoCA/PC9kaXY+IH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPEFjdGl2ZUJ0bj5zaWdudXA8L0FjdGl2ZUJ0bj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ251cDsiXSwic291cmNlUm9vdCI6IiJ9