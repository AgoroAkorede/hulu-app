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

/***/ "./components/featuredTv/featuredTv.jsx":
/*!**********************************************!*\
  !*** ./components/featuredTv/featuredTv.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Thumbnail2_Thumbnail2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Thumbnail2/Thumbnail2 */ \"./components/Thumbnail2/Thumbnail2.jsx\");\n/* harmony import */ var _featuredTv_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./featuredTv.module.css */ \"./components/featuredTv/featuredTv.module.css\");\n/* harmony import */ var _featuredTv_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_featuredTv_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar _s = $RefreshSig$();\nfunction FeaturedTv(param) {\n    var results = param.results, title = param.title;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), current = ref[0], setCurrent = ref[1];\n    var length = results.length;\n    var nextSlide = function() {\n        setCurrent(current === length - 1 ? 0 : current + 1);\n    };\n    var prevSlide = function() {\n        setCurrent(current === 0 ? length - 1 : current - 1);\n    };\n    if (!Array.isArray(results) || slides.length <= 0) {\n        return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_featuredTv_module_css__WEBPACK_IMPORTED_MODULE_3___default().featured),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: prevSlide,\n                className: (_featuredTv_module_css__WEBPACK_IMPORTED_MODULE_3___default().buttonLeft),\n                children: \"\\u2190\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\hulu-app\\\\components\\\\featuredTv\\\\featuredTv.jsx\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: prevSlide,\n                className: (_featuredTv_module_css__WEBPACK_IMPORTED_MODULE_3___default().buttonRight),\n                children: \"\\u2192\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\hulu-app\\\\components\\\\featuredTv\\\\featuredTv.jsx\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_featuredTv_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                children: title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\hulu-app\\\\components\\\\featuredTv\\\\featuredTv.jsx\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_featuredTv_module_css__WEBPACK_IMPORTED_MODULE_3___default().results),\n                children: results.map(function(result) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Thumbnail2_Thumbnail2__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            className: (_featuredTv_module_css__WEBPACK_IMPORTED_MODULE_3___default().thumbnail),\n                            result: result\n                        }, result.id, false, {\n                            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\hulu-app\\\\components\\\\featuredTv\\\\featuredTv.jsx\",\n                            lineNumber: 28,\n                            columnNumber: 25\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\hulu-app\\\\components\\\\featuredTv\\\\featuredTv.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 21\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\hulu-app\\\\components\\\\featuredTv\\\\featuredTv.jsx\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\hulu-app\\\\components\\\\featuredTv\\\\featuredTv.jsx\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, this);\n}\n_s(FeaturedTv, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c = FeaturedTv;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FeaturedTv);\nvar _c;\n$RefreshReg$(_c, \"FeaturedTv\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2ZlYXR1cmVkVHYvZmVhdHVyZWRUdi5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUF1QztBQUNVO0FBQ0o7O0FBRTdDLFNBQVNJLFVBQVUsQ0FBQyxLQUFrQixFQUFFO1FBQWxCQyxPQUFPLEdBQVQsS0FBa0IsQ0FBaEJBLE9BQU8sRUFBRUMsS0FBSyxHQUFoQixLQUFrQixDQUFQQSxLQUFLOzs7SUFDaEMsSUFBZ0NMLEdBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsRUFML0MsT0FLbUIsR0FBaUJBLEdBQVcsR0FBNUIsRUFMbkIsVUFLK0IsR0FBS0EsR0FBVyxHQUFoQjtJQUMzQixJQUFNUSxNQUFNLEdBQUdKLE9BQU8sQ0FBQ0ksTUFBTTtJQUM3QixJQUFNQyxTQUFTLEdBQUcsV0FBTTtRQUNwQkYsVUFBVSxDQUFDRCxPQUFPLEtBQUtFLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHRixPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDeEQ7SUFDRCxJQUFNSSxTQUFTLEdBQUcsV0FBTTtRQUNwQkgsVUFBVSxDQUFDRCxPQUFPLEtBQUssQ0FBQyxHQUFFRSxNQUFNLEdBQUMsQ0FBQyxHQUFHRixPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDckQ7SUFFRCxJQUFJLENBQUNLLEtBQUssQ0FBQ0MsT0FBTyxDQUFDUixPQUFPLENBQUMsSUFBSVMsTUFBTSxDQUFDTCxNQUFNLElBQUksQ0FBQyxFQUFFO1FBQy9DLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFFRCxxQkFDSSw4REFBQ00sS0FBRztRQUFDQyxTQUFTLEVBQUdiLHdFQUFnQjs7MEJBQzdCLDhEQUFDZSxRQUFNO2dCQUFDQyxPQUFPLEVBQUVSLFNBQVM7Z0JBQUVLLFNBQVMsRUFBR2IsMEVBQWtCOzBCQUFHLFFBQUM7Ozs7O29CQUFXOzBCQUN2RSw4REFBRGUsUUFBTTtnQkFBQ0MsT0FBTyxFQUFFUixTQUFTO2dCQUFFSyxTQUFTLEVBQUViLDJFQUFtQjswQkFBRSxRQUFDOzs7OztvQkFBUzswQkFDdEUsOERBQUNtQixJQUFFO2dCQUFDTixTQUFTLEVBQUViLHFFQUFhOzBCQUFHRyxLQUFLOzs7OztvQkFBTTswQkFDMUMsOERBQUNTLEtBQUc7Z0JBQUNDLFNBQVMsRUFBR2IsdUVBQWU7MEJBRTVCRSxPQUFPLENBQUNrQixHQUFHLENBQUNDLFNBQUFBLE1BQU07eUNBQ2QsOERBQUNULEtBQUc7a0NBQ0EsNEVBQUNiLDhEQUFVOzRCQUFDYyxTQUFTLEVBQUViLHlFQUFpQjs0QkFBb0JxQixNQUFNLEVBQUdBLE1BQU07MkJBQTNCQSxNQUFNLENBQUNFLEVBQUU7Ozs7aUNBQXVCOzs7Ozs2QkFFOUU7aUJBQ1QsQ0FBQzs7Ozs7b0JBRUo7Ozs7OztZQUNBLENBRVQ7Q0FDSjtHQWhDUXRCLFVBQVU7QUFBVkEsS0FBQUEsVUFBVTtBQWtDbkIsK0RBQWVBLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mZWF0dXJlZFR2L2ZlYXR1cmVkVHYuanN4PzlkMzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBUaHVtYm5haWwyIGZyb20gJy4uL1RodW1ibmFpbDIvVGh1bWJuYWlsMidcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9mZWF0dXJlZFR2Lm1vZHVsZS5jc3MnXHJcblxyXG5mdW5jdGlvbiBGZWF0dXJlZFR2KHsgcmVzdWx0cywgdGl0bGUgfSkge1xyXG4gICAgY29uc3QgWyBjdXJyZW50LCBzZXRDdXJyZW50IF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IGxlbmd0aCA9IHJlc3VsdHMubGVuZ3RoO1xyXG4gICAgY29uc3QgbmV4dFNsaWRlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEN1cnJlbnQoY3VycmVudCA9PT0gbGVuZ3RoIC0gMSA/IDAgOiBjdXJyZW50ICsgMSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBwcmV2U2xpZGUgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0Q3VycmVudChjdXJyZW50ID09PSAwID9sZW5ndGgtMSA6IGN1cnJlbnQgLSAxKTtcclxuICAgIH1cclxuICAgXHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkocmVzdWx0cykgfHwgc2xpZGVzLmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IGNsYXNzZXMuZmVhdHVyZWQgfT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcmV2U2xpZGV9IGNsYXNzTmFtZT17IGNsYXNzZXMuYnV0dG9uTGVmdCB9PuKGkDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3ByZXZTbGlkZX0gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvblJpZ2h0fT7ihpI8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+e3RpdGxlfTwvaDE+IFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IGNsYXNzZXMucmVzdWx0cyB9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRzLm1hcChyZXN1bHQgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUaHVtYm5haWwyIGNsYXNzTmFtZT17Y2xhc3Nlcy50aHVtYm5haWx9IGtleT17IHJlc3VsdC5pZCB9IHJlc3VsdD17IHJlc3VsdCB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmVkVHZcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJUaHVtYm5haWwyIiwiY2xhc3NlcyIsIkZlYXR1cmVkVHYiLCJyZXN1bHRzIiwidGl0bGUiLCJjdXJyZW50Iiwic2V0Q3VycmVudCIsImxlbmd0aCIsIm5leHRTbGlkZSIsInByZXZTbGlkZSIsIkFycmF5IiwiaXNBcnJheSIsInNsaWRlcyIsImRpdiIsImNsYXNzTmFtZSIsImZlYXR1cmVkIiwiYnV0dG9uIiwib25DbGljayIsImJ1dHRvbkxlZnQiLCJidXR0b25SaWdodCIsImgxIiwibWFwIiwicmVzdWx0IiwidGh1bWJuYWlsIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/featuredTv/featuredTv.jsx\n");

/***/ })

});