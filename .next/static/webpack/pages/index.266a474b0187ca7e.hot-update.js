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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Thumbnail2_Thumbnail2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Thumbnail2/Thumbnail2 */ \"./components/Thumbnail2/Thumbnail2.jsx\");\n/* harmony import */ var _featuredTv_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./featuredTv.module.css */ \"./components/featuredTv/featuredTv.module.css\");\n/* harmony import */ var _featuredTv_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_featuredTv_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar _s = $RefreshSig$();\nfunction FeaturedTv(param) {\n    var results = param.results, title = param.title;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), current = ref[0], setCurrent = ref[1];\n    var length = results.length;\n    var nextSlide = function() {\n        document.getElementById(\"results\").scrollLeft += 10;\n    };\n    var prevSlide = function() {\n        document.getElementById(\"results\").scrollLeft -= 700;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_featuredTv_module_css__WEBPACK_IMPORTED_MODULE_3___default().featured),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: prevSlide,\n                className: (_featuredTv_module_css__WEBPACK_IMPORTED_MODULE_3___default().buttonLeft),\n                children: \"\\u2190\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\hulu-app\\\\components\\\\featuredTv\\\\featuredTv.jsx\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: nextSlide,\n                className: (_featuredTv_module_css__WEBPACK_IMPORTED_MODULE_3___default().buttonRight),\n                children: \"\\u2192\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\hulu-app\\\\components\\\\featuredTv\\\\featuredTv.jsx\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_featuredTv_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                children: title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\hulu-app\\\\components\\\\featuredTv\\\\featuredTv.jsx\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"results\",\n                className: (_featuredTv_module_css__WEBPACK_IMPORTED_MODULE_3___default().results),\n                children: results.map(function(result) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Thumbnail2_Thumbnail2__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            className: (_featuredTv_module_css__WEBPACK_IMPORTED_MODULE_3___default().thumbnail),\n                            result: result\n                        }, result.id, false, {\n                            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\hulu-app\\\\components\\\\featuredTv\\\\featuredTv.jsx\",\n                            lineNumber: 26,\n                            columnNumber: 25\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\hulu-app\\\\components\\\\featuredTv\\\\featuredTv.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 21\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\hulu-app\\\\components\\\\featuredTv\\\\featuredTv.jsx\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\hulu-app\\\\components\\\\featuredTv\\\\featuredTv.jsx\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, this);\n}\n_s(FeaturedTv, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c = FeaturedTv;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FeaturedTv);\nvar _c;\n$RefreshReg$(_c, \"FeaturedTv\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2ZlYXR1cmVkVHYvZmVhdHVyZWRUdi5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUF1QztBQUNVO0FBQ0o7O0FBRTdDLFNBQVNJLFVBQVUsQ0FBQyxLQUFrQixFQUFFO1FBQWxCQyxPQUFPLEdBQVQsS0FBa0IsQ0FBaEJBLE9BQU8sRUFBRUMsS0FBSyxHQUFoQixLQUFrQixDQUFQQSxLQUFLOzs7SUFDaEMsSUFBZ0NMLEdBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsRUFML0MsT0FLbUIsR0FBaUJBLEdBQVcsR0FBNUIsRUFMbkIsVUFLK0IsR0FBS0EsR0FBVyxHQUFoQjtJQUMzQixJQUFNUSxNQUFNLEdBQUdKLE9BQU8sQ0FBQ0ksTUFBTTtJQUM3QixJQUFNQyxTQUFTLEdBQUcsV0FBTTtRQUNwQkMsUUFBUSxDQUFDQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUNDLFVBQVUsSUFBRyxFQUFFO0tBQ3JEO0lBQ0QsSUFBTUMsU0FBUyxHQUFHLFdBQU07UUFDcEJILFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDQyxVQUFVLElBQUcsR0FBRztLQUN0RDtJQUlELHFCQUNJLDhEQUFDRSxLQUFHO1FBQUNDLFNBQVMsRUFBR2Isd0VBQWdCOzswQkFDN0IsOERBQUNlLFFBQU07Z0JBQUNDLE9BQU8sRUFBRUwsU0FBUztnQkFBRUUsU0FBUyxFQUFHYiwwRUFBa0I7MEJBQUcsUUFBQzs7Ozs7b0JBQVc7MEJBQ3ZFLDhEQUFEZSxRQUFNO2dCQUFDQyxPQUFPLEVBQUVULFNBQVM7Z0JBQUVNLFNBQVMsRUFBRWIsMkVBQW1COzBCQUFFLFFBQUM7Ozs7O29CQUFTOzBCQUN0RSw4REFBQ21CLElBQUU7Z0JBQUNOLFNBQVMsRUFBRWIscUVBQWE7MEJBQUdHLEtBQUs7Ozs7O29CQUFNOzBCQUMxQyw4REFBQ1MsS0FBRztnQkFBQ1EsRUFBRSxFQUFDLFNBQVM7Z0JBQUNQLFNBQVMsRUFBR2IsdUVBQWU7MEJBRXpDRSxPQUFPLENBQUNtQixHQUFHLENBQUNDLFNBQUFBLE1BQU07eUNBQ2QsOERBQUNWLEtBQUc7a0NBQ0EsNEVBQUNiLDhEQUFVOzRCQUFDYyxTQUFTLEVBQUViLHlFQUFpQjs0QkFBb0JzQixNQUFNLEVBQUdBLE1BQU07MkJBQTNCQSxNQUFNLENBQUNGLEVBQUU7Ozs7aUNBQXVCOzs7Ozs2QkFFOUU7aUJBQ1QsQ0FBQzs7Ozs7b0JBRUo7Ozs7OztZQUNBLENBRVQ7Q0FDSjtHQTlCUW5CLFVBQVU7QUFBVkEsS0FBQUEsVUFBVTtBQWdDbkIsK0RBQWVBLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mZWF0dXJlZFR2L2ZlYXR1cmVkVHYuanN4PzlkMzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBUaHVtYm5haWwyIGZyb20gJy4uL1RodW1ibmFpbDIvVGh1bWJuYWlsMidcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9mZWF0dXJlZFR2Lm1vZHVsZS5jc3MnXHJcblxyXG5mdW5jdGlvbiBGZWF0dXJlZFR2KHsgcmVzdWx0cywgdGl0bGUgfSkge1xyXG4gICAgY29uc3QgWyBjdXJyZW50LCBzZXRDdXJyZW50IF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IGxlbmd0aCA9IHJlc3VsdHMubGVuZ3RoO1xyXG4gICAgY29uc3QgbmV4dFNsaWRlID0gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHRzJykuc2Nyb2xsTGVmdCArPTEwXHJcbiAgICB9XHJcbiAgICBjb25zdCBwcmV2U2xpZGUgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdHMnKS5zY3JvbGxMZWZ0IC09NzAwXHJcbiAgICB9XHJcbiAgIFxyXG4gIFxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgY2xhc3Nlcy5mZWF0dXJlZCB9PlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3ByZXZTbGlkZX0gY2xhc3NOYW1lPXsgY2xhc3Nlcy5idXR0b25MZWZ0IH0+4oaQPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17bmV4dFNsaWRlfSBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uUmlnaHR9PuKGkjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT57dGl0bGV9PC9oMT4gXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJyZXN1bHRzXCIgY2xhc3NOYW1lPXsgY2xhc3Nlcy5yZXN1bHRzIH0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdHMubWFwKHJlc3VsdCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRodW1ibmFpbDIgY2xhc3NOYW1lPXtjbGFzc2VzLnRodW1ibmFpbH0ga2V5PXsgcmVzdWx0LmlkIH0gcmVzdWx0PXsgcmVzdWx0IH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmVhdHVyZWRUdlxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlRodW1ibmFpbDIiLCJjbGFzc2VzIiwiRmVhdHVyZWRUdiIsInJlc3VsdHMiLCJ0aXRsZSIsImN1cnJlbnQiLCJzZXRDdXJyZW50IiwibGVuZ3RoIiwibmV4dFNsaWRlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbExlZnQiLCJwcmV2U2xpZGUiLCJkaXYiLCJjbGFzc05hbWUiLCJmZWF0dXJlZCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJidXR0b25MZWZ0IiwiYnV0dG9uUmlnaHQiLCJoMSIsImlkIiwibWFwIiwicmVzdWx0IiwidGh1bWJuYWlsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/featuredTv/featuredTv.jsx\n");

/***/ })

});