"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/thumbnail/Thumbnail.js":
/*!*******************************************!*\
  !*** ./components/thumbnail/Thumbnail.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Thumbnail_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Thumbnail.module.css */ \"./components/thumbnail/Thumbnail.module.css\");\n/* harmony import */ var _Thumbnail_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Thumbnail_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Thumbnail(param) {\n    var result = param.result;\n    var BASE_URL = \"https://image.tmdb.org/t/p/original/\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: classe,\n                children: result.title || result.original_name\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\hulu-app\\\\components\\\\thumbnail\\\\Thumbnail.js\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                className: (_Thumbnail_module_css__WEBPACK_IMPORTED_MODULE_2___default().img),\n                layout: \"responsive\",\n                src: \"\".concat(BASE_URL).concat(result.backdrop_path || result.poster_path) || \"\".concat(BASE_URL).concat(result.poster_path),\n                height: 1080,\n                width: 1920\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\hulu-app\\\\components\\\\thumbnail\\\\Thumbnail.js\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\hulu-app\\\\components\\\\thumbnail\\\\Thumbnail.js\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, this);\n}\n_c = Thumbnail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Thumbnail);\nvar _c;\n$RefreshReg$(_c, \"Thumbnail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RodW1ibmFpbC9UaHVtYm5haWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQThCO0FBRWU7QUFFN0MsU0FBU0UsU0FBUyxDQUFDLEtBQVUsRUFBRTtRQUFaLE1BQVEsR0FBUixLQUFVLENBQVJDLE1BQU07SUFDdkIsSUFBTUMsUUFBUSxHQUFDLHNDQUFzQztJQUNyRCxxQkFDSSw4REFBQ0MsS0FBRzs7MEJBQ0EsOERBQUNDLElBQUU7Z0JBQUNDLFNBQVMsRUFBRUMsTUFBTTswQkFBSUwsTUFBTSxDQUFDTSxLQUFLLElBQUlOLE1BQU0sQ0FBQ08sYUFBYTs7Ozs7b0JBQU87MEJBQ3BFLDhEQUFDVixtREFBSztnQkFDRk8sU0FBUyxFQUFFTixrRUFBVztnQkFDdEJXLE1BQU0sRUFBQyxZQUFZO2dCQUNuQkMsR0FBRyxFQUNELEVBQUMsQ0FBYVYsTUFBMEMsQ0FBckRDLFFBQVEsQ0FBOEMsUUFBM0NELE1BQU0sQ0FBQ1csYUFBYSxJQUFJWCxNQUFNLENBQUNZLFdBQVcsQ0FBRSxJQUN4RCxFQUFDLENBQWFaLE1BQWtCLENBQTdCQyxRQUFRLENBQXNCLFFBQW5CRCxNQUFNLENBQUNZLFdBQVcsQ0FBRTtnQkFFdENDLE1BQU0sRUFBRyxJQUFJO2dCQUFHQyxLQUFLLEVBQUcsSUFBSTs7Ozs7b0JBRTFCOzs7Ozs7WUFDSixDQUNUO0NBQ0o7QUFqQlFmLEtBQUFBLFNBQVM7QUFtQmxCLCtEQUFlQSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdGh1bWJuYWlsL1RodW1ibmFpbC5qcz9jZWI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXHJcblxyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL1RodW1ibmFpbC5tb2R1bGUuY3NzJztcclxuXHJcbmZ1bmN0aW9uIFRodW1ibmFpbCh7IHJlc3VsdCB9KSB7XHJcbiAgICBjb25zdCBCQVNFX1VSTD1cImh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL29yaWdpbmFsL1wiXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2NsYXNzZX0+eyByZXN1bHQudGl0bGUgfHwgcmVzdWx0Lm9yaWdpbmFsX25hbWUgfTwvaDI+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ31cclxuICAgICAgICAgICAgICAgIGxheW91dD0ncmVzcG9uc2l2ZSdcclxuICAgICAgICAgICAgICAgIHNyYz1cclxuICAgICAgICAgICAgICAgIHsgYCR7QkFTRV9VUkx9JHtyZXN1bHQuYmFja2Ryb3BfcGF0aCB8fCByZXN1bHQucG9zdGVyX3BhdGh9YCB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGAke0JBU0VfVVJMfSR7cmVzdWx0LnBvc3Rlcl9wYXRofWBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGhlaWdodD17IDEwODAgfSB3aWR0aD17IDE5MjAgfSBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGh1bWJuYWlsXHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsImNsYXNzZXMiLCJUaHVtYm5haWwiLCJyZXN1bHQiLCJCQVNFX1VSTCIsImRpdiIsImgyIiwiY2xhc3NOYW1lIiwiY2xhc3NlIiwidGl0bGUiLCJvcmlnaW5hbF9uYW1lIiwiaW1nIiwibGF5b3V0Iiwic3JjIiwiYmFja2Ryb3BfcGF0aCIsInBvc3Rlcl9wYXRoIiwiaGVpZ2h0Iiwid2lkdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/thumbnail/Thumbnail.js\n");

/***/ })

});