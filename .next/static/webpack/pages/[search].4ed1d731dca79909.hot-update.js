"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[search]",{

/***/ "./components/results/Results.js":
/*!***************************************!*\
  !*** ./components/results/Results.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _thumbnail_Thumbnail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../thumbnail/Thumbnail */ \"./components/thumbnail/Thumbnail.js\");\n\n\nim;\nfunction Results(param) {\n    var results = param.results;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: results.map(function(result) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_thumbnail_Thumbnail__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        result: result\n                    }, result.id, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\hulu-app\\\\components\\\\results\\\\Results.js\",\n                        lineNumber: 9,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: result.title || result.original_name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\hulu-app\\\\components\\\\results\\\\Results.js\",\n                        lineNumber: 11,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Release Date: \",\n                            result.release_date || result.first_air_date\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\hulu-app\\\\components\\\\results\\\\Results.js\",\n                        lineNumber: 12,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            Math.round(result.popularity * 1000),\n                            \" views\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\hulu-app\\\\components\\\\results\\\\Results.js\",\n                        lineNumber: 13,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: result.overview\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\hulu-app\\\\components\\\\results\\\\Results.js\",\n                        lineNumber: 14,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"IMDB rating: \",\n                            result.vote_average\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\hulu-app\\\\components\\\\results\\\\Results.js\",\n                        lineNumber: 15,\n                        columnNumber: 21\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\hulu-app\\\\components\\\\results\\\\Results.js\",\n                lineNumber: 8,\n                columnNumber: 17\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\hulu-app\\\\components\\\\results\\\\Results.js\",\n        lineNumber: 6,\n        columnNumber: 9\n    }, this);\n}\n_c = Results;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Results);\nvar _c;\n$RefreshReg$(_c, \"Results\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Jlc3VsdHMvUmVzdWx0cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQ0E7QUFBOEM7QUFDOUNDLEVBQUU7QUFDRixTQUFTQyxPQUFPLENBQUMsS0FBUyxFQUFFO1FBQVgsT0FBUSxHQUFSLEtBQVMsQ0FBUkMsT0FBTzs7SUFDckIscUJBQ0ksOERBQUNDLEtBQUc7a0JBQ0VELE9BQU8sQ0FBQ0UsR0FBRyxDQUFDQyxTQUFBQSxNQUFNO2lDQUNoQiw4REFBQ0YsS0FBRzs7a0NBQ0osOERBQUNKLDREQUFTO3dCQUFpQk0sTUFBTSxFQUFFQSxNQUFNO3VCQUF6QkEsTUFBTSxDQUFDQyxFQUFFOzs7OzZCQUFvQjtrQ0FFN0MsOERBQUNDLElBQUU7a0NBQUdGLE1BQU0sQ0FBQ0csS0FBSyxJQUFJSCxNQUFNLENBQUNJLGFBQWE7Ozs7OzZCQUFPO2tDQUNqRCw4REFBQ0MsR0FBQzs7NEJBQUMsZ0JBQWM7NEJBQUVMLE1BQU0sQ0FBQ00sWUFBWSxJQUFJTixNQUFNLENBQUNPLGNBQWM7Ozs7Ozs2QkFBTTtrQ0FDakUsOERBQUNGLEdBQUM7OzRCQUFFRyxJQUFJLENBQUNDLEtBQUssQ0FBQ1QsTUFBTSxDQUFDVSxVQUFVLEdBQUcsSUFBSSxDQUFDOzRCQUFFLFFBQU07Ozs7Ozs2QkFBSTtrQ0FDeEQsOERBQUNMLEdBQUM7a0NBQUdMLE1BQU0sQ0FBQ1csUUFBUTs7Ozs7NkJBQU07a0NBQ3RCLDhEQUFDTixHQUFDOzs0QkFBQyxlQUFhOzRCQUFFTCxNQUFNLENBQUNZLFlBQVk7Ozs7Ozs2QkFBTTs7Ozs7O3FCQUN4QztTQUNWLENBQUM7Ozs7O1lBQ0EsQ0FDVDtDQUNKO0FBaEJRaEIsS0FBQUEsT0FBTztBQWtCaEIsK0RBQWVBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXN1bHRzL1Jlc3VsdHMuanM/OWRhZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFRodW1ibmFpbCBmcm9tICcuLi90aHVtYm5haWwvVGh1bWJuYWlsJ1xyXG5pbVxyXG5mdW5jdGlvbiBSZXN1bHRzKHtyZXN1bHRzfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7IHJlc3VsdHMubWFwKHJlc3VsdCA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFRodW1ibmFpbCBrZXk9e3Jlc3VsdC5pZH0gcmVzdWx0PXtyZXN1bHR9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGgyPnsgcmVzdWx0LnRpdGxlIHx8IHJlc3VsdC5vcmlnaW5hbF9uYW1lIH08L2gyPlxyXG4gICAgICAgICAgICAgICAgPHA+UmVsZWFzZSBEYXRlOiB7IHJlc3VsdC5yZWxlYXNlX2RhdGUgfHwgcmVzdWx0LmZpcnN0X2Fpcl9kYXRlIH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e01hdGgucm91bmQocmVzdWx0LnBvcHVsYXJpdHkgKiAxMDAwKSB9IHZpZXdzPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+eyByZXN1bHQub3ZlcnZpZXcgfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5JTURCIHJhdGluZzogeyByZXN1bHQudm90ZV9hdmVyYWdlIH08L3A+XHJcbiAgICAgICAgICAgICAgICAgPC9kaXY+ICAgXHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXN1bHRzXHJcbiJdLCJuYW1lcyI6WyJUaHVtYm5haWwiLCJpbSIsIlJlc3VsdHMiLCJyZXN1bHRzIiwiZGl2IiwibWFwIiwicmVzdWx0IiwiaWQiLCJoMiIsInRpdGxlIiwib3JpZ2luYWxfbmFtZSIsInAiLCJyZWxlYXNlX2RhdGUiLCJmaXJzdF9haXJfZGF0ZSIsIk1hdGgiLCJyb3VuZCIsInBvcHVsYXJpdHkiLCJvdmVydmlldyIsInZvdGVfYXZlcmFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/results/Results.js\n");

/***/ })

});