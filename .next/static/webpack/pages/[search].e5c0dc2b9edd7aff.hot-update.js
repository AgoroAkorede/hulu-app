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

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _thumbnail_Thumbnail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../thumbnail/Thumbnail */ \"./components/thumbnail/Thumbnail.js\");\n/* harmony import */ var _thumbnail_Thumbnail__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_thumbnail_Thumbnail__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Results_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Results.module.css */ \"./components/results/Results.module.css\");\n/* harmony import */ var _Results_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Results_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Results(param) {\n    var results = param.results;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Results_module_css__WEBPACK_IMPORTED_MODULE_2___default().results),\n        children: results.map(function(result) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_thumbnail_Thumbnail__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        className: (_Results_module_css__WEBPACK_IMPORTED_MODULE_2___default().thumbnail),\n                        result: result\n                    }, result.id, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\hulu-app\\\\components\\\\results\\\\Results.js\",\n                        lineNumber: 10,\n                        columnNumber: 25\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Results_module_css__WEBPACK_IMPORTED_MODULE_2___default().more_info),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Release Date: \",\n                                    result.release_date || result.first_air_date\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\hulu-app\\\\components\\\\results\\\\Results.js\",\n                                lineNumber: 13,\n                                columnNumber: 25\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    Math.round(result.popularity * 100),\n                                    \" views\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\hulu-app\\\\components\\\\results\\\\Results.js\",\n                                lineNumber: 14,\n                                columnNumber: 25\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"IMDB rating: \",\n                                    result.vote_average\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\hulu-app\\\\components\\\\results\\\\Results.js\",\n                                lineNumber: 16,\n                                columnNumber: 25\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\hulu-app\\\\components\\\\results\\\\Results.js\",\n                        lineNumber: 12,\n                        columnNumber: 21\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\hulu-app\\\\components\\\\results\\\\Results.js\",\n                lineNumber: 8,\n                columnNumber: 17\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\hulu-app\\\\components\\\\results\\\\Results.js\",\n        lineNumber: 6,\n        columnNumber: 9\n    }, this);\n}\n_c = Results;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Results);\nvar _c;\n$RefreshReg$(_c, \"Results\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Jlc3VsdHMvUmVzdWx0cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7QUFBOEM7QUFDSDtBQUMzQyxTQUFTRSxPQUFPLENBQUMsS0FBUyxFQUFFO1FBQVgsT0FBUSxHQUFSLEtBQVMsQ0FBUkMsT0FBTzs7SUFDckIscUJBQ0ksOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFFSixvRUFBZTtrQkFDekJFLE9BQU8sQ0FBQ0csR0FBRyxDQUFDQyxTQUFBQSxNQUFNO2lDQUNoQiw4REFBQ0gsS0FBRzs7a0NBRUksOERBQUNKLDZEQUFTO3dCQUFDSyxTQUFTLEVBQUdKLHNFQUFpQjt3QkFBcUJNLE1BQU0sRUFBR0EsTUFBTTt1QkFBM0JBLE1BQU0sQ0FBQ0UsRUFBRTs7Ozs2QkFBdUI7a0NBRXJGLDhEQUFDTCxLQUFHO3dCQUFDQyxTQUFTLEVBQUVKLHNFQUFpQjs7MENBQzdCLDhEQUFDVSxHQUFDOztvQ0FBQyxnQkFBYztvQ0FBRUosTUFBTSxDQUFDSyxZQUFZLElBQUlMLE1BQU0sQ0FBQ00sY0FBYzs7Ozs7O3FDQUFNOzBDQUNyRSw4REFBQ0YsR0FBQzs7b0NBQUVHLElBQUksQ0FBQ0MsS0FBSyxDQUFDUixNQUFNLENBQUNTLFVBQVUsR0FBRyxHQUFHLENBQUM7b0NBQUUsUUFBTTs7Ozs7O3FDQUFJOzBDQUVuRCw4REFBQ0wsR0FBQzs7b0NBQUMsZUFBYTtvQ0FBRUosTUFBTSxDQUFDVSxZQUFZOzs7Ozs7cUNBQU07Ozs7Ozs2QkFDekM7Ozs7OztxQkFFSDtTQUNWLENBQUM7Ozs7O1lBQ0EsQ0FDVDtDQUNKO0FBbkJRZixLQUFBQSxPQUFPO0FBcUJoQiwrREFBZUEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Jlc3VsdHMvUmVzdWx0cy5qcz85ZGFlIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgVGh1bWJuYWlsIGZyb20gJy4uL3RodW1ibmFpbC9UaHVtYm5haWwnXHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vUmVzdWx0cy5tb2R1bGUuY3NzJztcclxuZnVuY3Rpb24gUmVzdWx0cyh7cmVzdWx0c30pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucmVzdWx0c30+XHJcbiAgICAgICAgICAgIHsgcmVzdWx0cy5tYXAocmVzdWx0ID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUaHVtYm5haWwgY2xhc3NOYW1lPXsgY2xhc3Nlcy50aHVtYm5haWwgfSBrZXk9eyByZXN1bHQuaWQgfSByZXN1bHQ9eyByZXN1bHQgfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubW9yZV9pbmZvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+UmVsZWFzZSBEYXRlOiB7IHJlc3VsdC5yZWxlYXNlX2RhdGUgfHwgcmVzdWx0LmZpcnN0X2Fpcl9kYXRlIH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntNYXRoLnJvdW5kKHJlc3VsdC5wb3B1bGFyaXR5ICogMTAwKSB9IHZpZXdzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8cD57IHJlc3VsdC5vdmVydmlldyB9PC9wPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+SU1EQiByYXRpbmc6IHsgcmVzdWx0LnZvdGVfYXZlcmFnZSB9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgPC9kaXY+ICAgXHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXN1bHRzXHJcbiJdLCJuYW1lcyI6WyJUaHVtYm5haWwiLCJjbGFzc2VzIiwiUmVzdWx0cyIsInJlc3VsdHMiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJyZXN1bHQiLCJ0aHVtYm5haWwiLCJpZCIsIm1vcmVfaW5mbyIsInAiLCJyZWxlYXNlX2RhdGUiLCJmaXJzdF9haXJfZGF0ZSIsIk1hdGgiLCJyb3VuZCIsInBvcHVsYXJpdHkiLCJ2b3RlX2F2ZXJhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/results/Results.js\n");

/***/ }),

/***/ "./components/thumbnail/Thumbnail.js":
/*!*******************************************!*\
  !*** ./components/thumbnail/Thumbnail.js ***!
  \*******************************************/
/***/ (function(module) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
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
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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
    })();


/***/ })

});