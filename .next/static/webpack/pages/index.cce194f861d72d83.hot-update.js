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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Thumbnail2_Thumbnail2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Thumbnail2/Thumbnail2 */ \"./components/Thumbnail2/Thumbnail2.jsx\");\n/* harmony import */ var _featuredTv_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./featuredTv.module.css */ \"./components/featuredTv/featuredTv.module.css\");\n/* harmony import */ var _featuredTv_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_featuredTv_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar _s = $RefreshSig$();\nfunction FeaturedTv(param) {\n    var results = param.results, title = param.title;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), current = ref[0], setCurrent = ref[1];\n    var nextSlide = function() {\n        // document.getElementById('results').scrollLeft += 700  \n        // console.log( document.querySelectorAll('#results'))\n        var resultsArr = document.querySelectorAll(\"#results\");\n        resultsArr[1].scrollLeft += 700;\n    };\n    console.log(document.getE);\n    var prevSlide = function() {\n        document.getElementById(\"results\").scrollLeft -= 700;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_featuredTv_module_css__WEBPACK_IMPORTED_MODULE_3___default().featured),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: prevSlide,\n                className: (_featuredTv_module_css__WEBPACK_IMPORTED_MODULE_3___default().buttonLeft),\n                children: \"\\u2190\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\hulu-app\\\\components\\\\featuredTv\\\\featuredTv.jsx\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: nextSlide,\n                className: (_featuredTv_module_css__WEBPACK_IMPORTED_MODULE_3___default().buttonRight),\n                children: \"\\u2192\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\hulu-app\\\\components\\\\featuredTv\\\\featuredTv.jsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_featuredTv_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                children: title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\hulu-app\\\\components\\\\featuredTv\\\\featuredTv.jsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"results\",\n                className: (_featuredTv_module_css__WEBPACK_IMPORTED_MODULE_3___default().results),\n                children: results.map(function(result) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Thumbnail2_Thumbnail2__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            className: (_featuredTv_module_css__WEBPACK_IMPORTED_MODULE_3___default().thumbnail),\n                            result: result\n                        }, result.id, false, {\n                            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\hulu-app\\\\components\\\\featuredTv\\\\featuredTv.jsx\",\n                            lineNumber: 31,\n                            columnNumber: 25\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\hulu-app\\\\components\\\\featuredTv\\\\featuredTv.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 21\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\hulu-app\\\\components\\\\featuredTv\\\\featuredTv.jsx\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\hulu-app\\\\components\\\\featuredTv\\\\featuredTv.jsx\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, this);\n}\n_s(FeaturedTv, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c = FeaturedTv;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FeaturedTv);\nvar _c;\n$RefreshReg$(_c, \"FeaturedTv\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2ZlYXR1cmVkVHYvZmVhdHVyZWRUdi5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUF1QztBQUNVO0FBQ0o7O0FBRTdDLFNBQVNJLFVBQVUsQ0FBQyxLQUFrQixFQUFFO1FBQWxCQyxPQUFPLEdBQVQsS0FBa0IsQ0FBaEJBLE9BQU8sRUFBRUMsS0FBSyxHQUFoQixLQUFrQixDQUFQQSxLQUFLOzs7SUFDaEMsSUFBZ0NMLEdBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsRUFML0MsT0FLbUIsR0FBaUJBLEdBQVcsR0FBNUIsRUFMbkIsVUFLK0IsR0FBS0EsR0FBVyxHQUFoQjtJQUUzQixJQUFNUSxTQUFTLEdBQUcsV0FBTTtRQUNwQix5REFBeUQ7UUFDekQsc0RBQXNEO1FBQ3RELElBQU1DLFVBQVUsR0FBR0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUM7UUFFeERGLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQ0csVUFBVSxJQUFJLEdBQUc7S0FDbEM7SUFDREMsT0FBTyxDQUFDQyxHQUFHLENBQUNKLFFBQVEsQ0FBQ0ssSUFBSSxDQUFDO0lBQzFCLElBQU1DLFNBQVMsR0FBRyxXQUFNO1FBQ3BCTixRQUFRLENBQUNPLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQ0wsVUFBVSxJQUFHLEdBQUc7S0FDdEQ7SUFJRCxxQkFDSSw4REFBQ00sS0FBRztRQUFFQyxTQUFTLEVBQUdqQix3RUFBZ0I7OzBCQUM5Qiw4REFBQ21CLFFBQU07Z0JBQUNDLE9BQU8sRUFBRU4sU0FBUztnQkFBRUcsU0FBUyxFQUFHakIsMEVBQWtCOzBCQUFHLFFBQUM7Ozs7O29CQUFXOzBCQUN2RSw4REFBRG1CLFFBQU07Z0JBQUNDLE9BQU8sRUFBRWQsU0FBUztnQkFBRVcsU0FBUyxFQUFFakIsMkVBQW1COzBCQUFFLFFBQUM7Ozs7O29CQUFTOzBCQUN0RSw4REFBQ3VCLElBQUU7Z0JBQUNOLFNBQVMsRUFBRWpCLHFFQUFhOzBCQUFHRyxLQUFLOzs7OztvQkFBTTswQkFDMUMsOERBQUNhLEtBQUc7Z0JBQUVRLEVBQUUsRUFBQyxTQUFTO2dCQUFDUCxTQUFTLEVBQUdqQix1RUFBZTswQkFFMUNFLE9BQU8sQ0FBQ3VCLEdBQUcsQ0FBQ0MsU0FBQUEsTUFBTTt5Q0FDZCw4REFBQ1YsS0FBRztrQ0FDQSw0RUFBQ2pCLDhEQUFVOzRCQUFDa0IsU0FBUyxFQUFFakIseUVBQWlCOzRCQUFvQjBCLE1BQU0sRUFBR0EsTUFBTTsyQkFBM0JBLE1BQU0sQ0FBQ0YsRUFBRTs7OztpQ0FBdUI7Ozs7OzZCQUU5RTtpQkFDVCxDQUFDOzs7OztvQkFFSjs7Ozs7O1lBQ0EsQ0FFVDtDQUNKO0dBbkNRdkIsVUFBVTtBQUFWQSxLQUFBQSxVQUFVO0FBcUNuQiwrREFBZUEsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2ZlYXR1cmVkVHYvZmVhdHVyZWRUdi5qc3g/OWQzNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFRodW1ibmFpbDIgZnJvbSAnLi4vVGh1bWJuYWlsMi9UaHVtYm5haWwyJ1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL2ZlYXR1cmVkVHYubW9kdWxlLmNzcydcclxuXHJcbmZ1bmN0aW9uIEZlYXR1cmVkVHYoeyByZXN1bHRzLCB0aXRsZSB9KSB7XHJcbiAgICBjb25zdCBbIGN1cnJlbnQsIHNldEN1cnJlbnQgXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAgIGNvbnN0IG5leHRTbGlkZSA9ICgpID0+IHtcclxuICAgICAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0cycpLnNjcm9sbExlZnQgKz0gNzAwICBcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyggZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3Jlc3VsdHMnKSlcclxuICAgICAgICBjb25zdCByZXN1bHRzQXJyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3Jlc3VsdHMnKVxyXG5cclxuICAgICAgICByZXN1bHRzQXJyWzFdLnNjcm9sbExlZnQgKz0gNzAwIFxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coZG9jdW1lbnQuZ2V0RSlcclxuICAgIGNvbnN0IHByZXZTbGlkZSA9ICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0cycpLnNjcm9sbExlZnQgLT03MDBcclxuICAgIH1cclxuICAgXHJcbiAgXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiAgY2xhc3NOYW1lPXsgY2xhc3Nlcy5mZWF0dXJlZCB9PlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3ByZXZTbGlkZX0gY2xhc3NOYW1lPXsgY2xhc3Nlcy5idXR0b25MZWZ0IH0+4oaQPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17bmV4dFNsaWRlfSBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uUmlnaHR9PuKGkjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT57dGl0bGV9PC9oMT4gXHJcbiAgICAgICAgICAgIDxkaXYgIGlkPVwicmVzdWx0c1wiIGNsYXNzTmFtZT17IGNsYXNzZXMucmVzdWx0cyB9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRzLm1hcChyZXN1bHQgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUaHVtYm5haWwyIGNsYXNzTmFtZT17Y2xhc3Nlcy50aHVtYm5haWx9IGtleT17IHJlc3VsdC5pZCB9IHJlc3VsdD17IHJlc3VsdCB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmVkVHZcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJUaHVtYm5haWwyIiwiY2xhc3NlcyIsIkZlYXR1cmVkVHYiLCJyZXN1bHRzIiwidGl0bGUiLCJjdXJyZW50Iiwic2V0Q3VycmVudCIsIm5leHRTbGlkZSIsInJlc3VsdHNBcnIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzY3JvbGxMZWZ0IiwiY29uc29sZSIsImxvZyIsImdldEUiLCJwcmV2U2xpZGUiLCJnZXRFbGVtZW50QnlJZCIsImRpdiIsImNsYXNzTmFtZSIsImZlYXR1cmVkIiwiYnV0dG9uIiwib25DbGljayIsImJ1dHRvbkxlZnQiLCJidXR0b25SaWdodCIsImgxIiwiaWQiLCJtYXAiLCJyZXN1bHQiLCJ0aHVtYm5haWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/featuredTv/featuredTv.jsx\n");

/***/ })

});