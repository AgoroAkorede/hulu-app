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

/***/ "./components/thumbnail/Thumbnail.js":
/*!*******************************************!*\
  !*** ./components/thumbnail/Thumbnail.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Thumbnail_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Thumbnail.module.css */ \"./components/thumbnail/Thumbnail.module.css\");\n/* harmony import */ var _Thumbnail_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Thumbnail_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Thumbnail(param) {\n    var result = param.result;\n    var BASE_URL = \"https://image.tmdb.org/t/p/original/\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                className: (_Thumbnail_module_css__WEBPACK_IMPORTED_MODULE_2___default().img),\n                layout: \"responsive\",\n                src: \"\".concat(BASE_URL).concat(result.backdrop_path || result.poster_path) || \"\".concat(BASE_URL).concat(result.poster_path),\n                height: 1080,\n                width: 1920\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\hulu-app\\\\components\\\\thumbnail\\\\Thumbnail.js\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: (_Thumbnail_module_css__WEBPACK_IMPORTED_MODULE_2___default().title),\n                children: result.title || result.original_name\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\hulu-app\\\\components\\\\thumbnail\\\\Thumbnail.js\",\n                lineNumber: 19,\n                columnNumber: 18\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\hulu-app\\\\components\\\\thumbnail\\\\Thumbnail.js\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, this);\n}\n_c = Thumbnail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Thumbnail);\nvar _c;\n$RefreshReg$(_c, \"Thumbnail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RodW1ibmFpbC9UaHVtYm5haWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQThCO0FBRWU7QUFFN0MsU0FBU0UsU0FBUyxDQUFDLEtBQVUsRUFBRTtRQUFaLE1BQVEsR0FBUixLQUFVLENBQVJDLE1BQU07SUFDdkIsSUFBTUMsUUFBUSxHQUFDLHNDQUFzQztJQUNyRCxxQkFDSSw4REFBQ0MsS0FBRzs7MEJBQ0EsOERBQUNMLG1EQUFLO2dCQUNGTSxTQUFTLEVBQUVMLGtFQUFXO2dCQUN0Qk8sTUFBTSxFQUFDLFlBQVk7Z0JBQ25CQyxHQUFHLEVBQ0QsRUFBQyxDQUFhTixNQUEwQyxDQUFyREMsUUFBUSxDQUE4QyxRQUEzQ0QsTUFBTSxDQUFDTyxhQUFhLElBQUlQLE1BQU0sQ0FBQ1EsV0FBVyxDQUFFLElBQ3hELEVBQUMsQ0FBYVIsTUFBa0IsQ0FBN0JDLFFBQVEsQ0FBc0IsUUFBbkJELE1BQU0sQ0FBQ1EsV0FBVyxDQUFFO2dCQUV0Q0MsTUFBTSxFQUFHLElBQUk7Z0JBQUdDLEtBQUssRUFBRyxJQUFJOzs7OztvQkFFMUI7MEJBQ0QsOERBQUNDLElBQUU7Z0JBQUNSLFNBQVMsRUFBRUwsb0VBQWE7MEJBQUlFLE1BQU0sQ0FBQ1ksS0FBSyxJQUFJWixNQUFNLENBQUNhLGFBQWE7Ozs7O29CQUFPOzs7Ozs7WUFDOUUsQ0FDVDtDQUNKO0FBakJRZCxLQUFBQSxTQUFTO0FBbUJsQiwrREFBZUEsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3RodW1ibmFpbC9UaHVtYm5haWwuanM/Y2ViNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxyXG5cclxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9UaHVtYm5haWwubW9kdWxlLmNzcyc7XHJcblxyXG5mdW5jdGlvbiBUaHVtYm5haWwoeyByZXN1bHQgfSkge1xyXG4gICAgY29uc3QgQkFTRV9VUkw9XCJodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC9vcmlnaW5hbC9cIlxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9XHJcbiAgICAgICAgICAgICAgICBsYXlvdXQ9J3Jlc3BvbnNpdmUnXHJcbiAgICAgICAgICAgICAgICBzcmM9XHJcbiAgICAgICAgICAgICAgICB7IGAke0JBU0VfVVJMfSR7cmVzdWx0LmJhY2tkcm9wX3BhdGggfHwgcmVzdWx0LnBvc3Rlcl9wYXRofWAgfHxcclxuICAgICAgICAgICAgICAgICAgICBgJHtCQVNFX1VSTH0ke3Jlc3VsdC5wb3N0ZXJfcGF0aH1gXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9eyAxMDgwIH0gd2lkdGg9eyAxOTIwIH0gXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+eyByZXN1bHQudGl0bGUgfHwgcmVzdWx0Lm9yaWdpbmFsX25hbWUgfTwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRodW1ibmFpbFxyXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJjbGFzc2VzIiwiVGh1bWJuYWlsIiwicmVzdWx0IiwiQkFTRV9VUkwiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJsYXlvdXQiLCJzcmMiLCJiYWNrZHJvcF9wYXRoIiwicG9zdGVyX3BhdGgiLCJoZWlnaHQiLCJ3aWR0aCIsImgyIiwidGl0bGUiLCJvcmlnaW5hbF9uYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/thumbnail/Thumbnail.js\n");

/***/ })

});