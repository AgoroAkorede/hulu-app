"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/shows/[movieTitle]",{

/***/ "./pages/shows/[movieTitle].js":
/*!*************************************!*\
  !*** ./pages/shows/[movieTitle].js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data */ \"./data.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.module.css */ \"./pages/shows/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _assets_play_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/play.svg */ \"./assets/play.svg\");\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Post = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var posts = _data__WEBPACK_IMPORTED_MODULE_2__.Data;\n    var post = posts[router.query.movieTitle];\n    if (!post) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {}, void 0, false, {\n        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\hulu-app\\\\pages\\\\shows\\\\[movieTitle].js\",\n        lineNumber: 12,\n        columnNumber: 21\n    }, _this);\n    console.log(post.moviedescription);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: post.movieTitle\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\hulu-app\\\\pages\\\\shows\\\\[movieTitle].js\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"https://assetshuluimcom-a.akamaihd.net/h3o/icons/favicon.ico.png\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\hulu-app\\\\pages\\\\shows\\\\[movieTitle].js\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\hulu-app\\\\pages\\\\shows\\\\[movieTitle].js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().page),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().categories),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().header),\n                                children: post.movieTitle\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\hulu-app\\\\pages\\\\shows\\\\[movieTitle].js\",\n                                lineNumber: 27,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().categories_content),\n                                children: [\n                                    post === null || post === void 0 ? void 0 : post.productionYear,\n                                    \" \\u2022 \",\n                                    post.categories,\n                                    \" \\u2022 \",\n                                    post === null || post === void 0 ? void 0 : post.contentRating\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\hulu-app\\\\pages\\\\shows\\\\[movieTitle].js\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().categories_content),\n                                children: [\n                                    \"IMDb Rating :\",\n                                    post === null || post === void 0 ? void 0 : post.rating,\n                                    \"/10 \\uD83D\\uDCC8\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\hulu-app\\\\pages\\\\shows\\\\[movieTitle].js\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().categories_content),\n                                children: post === null || post === void 0 ? void 0 : post.movieDescription\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\hulu-app\\\\pages\\\\shows\\\\[movieTitle].js\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\hulu-app\\\\pages\\\\shows\\\\[movieTitle].js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().image_container),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().play_icon),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_assets_play_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\hulu-app\\\\pages\\\\shows\\\\[movieTitle].js\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\hulu-app\\\\pages\\\\shows\\\\[movieTitle].js\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().images),\n                                layout: \"responsive\",\n                                src: post.imageURl,\n                                height: 1080,\n                                width: 1920,\n                                objectFit: \"contain\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\hulu-app\\\\pages\\\\shows\\\\[movieTitle].js\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\hulu-app\\\\pages\\\\shows\\\\[movieTitle].js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\hulu-app\\\\pages\\\\shows\\\\[movieTitle].js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Post, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaG93cy9bbW92aWVUaXRsZV0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUF3QztBQUNOO0FBQ0g7QUFDRjtBQUNhO0FBQ0c7O0FBRTdDLElBQU1NLElBQUksR0FBRyxXQUFNOztJQUNqQixJQUFNQyxNQUFNLEdBQUdQLHNEQUFTLEVBQUU7SUFDMUIsSUFBTVEsS0FBSyxHQUFHUCx1Q0FBSTtJQUNsQixJQUFNUSxJQUFJLEdBQUdELEtBQUssQ0FBQ0QsTUFBTSxDQUFDRyxLQUFLLENBQUNDLFVBQVUsQ0FBQztJQUMzQyxJQUFJLENBQUNGLElBQUksRUFBRSxxQkFBTyw4REFBQ0csR0FBQzs7OzthQUFLLENBQUM7SUFDMUJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTCxJQUFJLENBQUNNLGdCQUFnQixDQUFDLENBQUM7SUFFbkMscUJBQ0U7OzBCQUNFLDhEQUFDWixrREFBSTs7a0NBQ0gsOERBQUNhLE9BQUs7a0NBQUVQLElBQUksQ0FBQ0UsVUFBVTs7Ozs7NkJBQVM7a0NBQ2hDLDhEQUFDTSxNQUFJO3dCQUNIQyxHQUFHLEVBQUMsTUFBTTt3QkFDVkMsSUFBSSxFQUFDLGtFQUFrRTs7Ozs7NkJBQ3ZFOzs7Ozs7cUJBQ0c7MEJBRVAsOERBQUNDLEtBQUc7Z0JBQUNDLFNBQVMsRUFBRWpCLGdFQUFZOztrQ0FDMUIsOERBQUNtQixJQUFFO3dCQUFDRixTQUFTLEVBQUVqQixzRUFBa0I7OzBDQUMvQiw4REFBQ3FCLElBQUU7Z0NBQUNKLFNBQVMsRUFBRWpCLGtFQUFjOzBDQUFHSyxJQUFJLENBQUNFLFVBQVU7Ozs7O3FDQUFNOzBDQUNyRCw4REFBQ2MsSUFBRTtnQ0FBQ0osU0FBUyxFQUFFakIsOEVBQTBCOztvQ0FDdENLLElBQUksYUFBSkEsSUFBSSxXQUFnQixHQUFwQkEsS0FBQUEsQ0FBb0IsR0FBcEJBLElBQUksQ0FBRW1CLGNBQWM7b0NBQUMsVUFBRztvQ0FBR25CLElBQUksQ0FBQ2UsVUFBVTtvQ0FBQyxVQUFHO29DQUFHZixJQUFJLGFBQUpBLElBQUksV0FBZSxHQUFuQkEsS0FBQUEsQ0FBbUIsR0FBbkJBLElBQUksQ0FBRW9CLGFBQWE7Ozs7OztxQ0FDOUQ7MENBQ1QsOERBQUNKLElBQUU7Z0NBQUNKLFNBQVMsRUFBRWpCLDhFQUEwQjs7b0NBQUUsZUFDNUI7b0NBQUNLLElBQUksYUFBSkEsSUFBSSxXQUFRLEdBQVpBLEtBQUFBLENBQVksR0FBWkEsSUFBSSxDQUFFcUIsTUFBTTtvQ0FBQyxrQkFDN0I7Ozs7OztxQ0FBSzswQ0FDTCw4REFBQ0wsSUFBRTtnQ0FBQ0osU0FBUyxFQUFFakIsOEVBQTBCOzBDQUN0Q0ssSUFBSSxhQUFKQSxJQUFJLFdBQWtCLEdBQXRCQSxLQUFBQSxDQUFzQixHQUF0QkEsSUFBSSxDQUFFc0IsZ0JBQWdCOzs7OztxQ0FDcEI7Ozs7Ozs2QkFDRjtrQ0FDTCw4REFBQ1gsS0FBRzt3QkFBQ0MsU0FBUyxFQUFFakIsMkVBQXVCOzswQ0FDckMsOERBQUNnQixLQUFHO2dDQUFDQyxTQUFTLEVBQUVqQixxRUFBaUI7MENBQy9CLDRFQUFDQyx3REFBUTs7Ozt5Q0FBRzs7Ozs7cUNBQ1I7MENBQ04sOERBQUNILG1EQUFLO2dDQUNKbUIsU0FBUyxFQUFFakIsa0VBQWM7Z0NBQ3pCK0IsTUFBTSxFQUFDLFlBQVk7Z0NBQ25CQyxHQUFHLEVBQUUzQixJQUFJLENBQUM0QixRQUFRO2dDQUNsQkMsTUFBTSxFQUFFLElBQUk7Z0NBQ1pDLEtBQUssRUFBRSxJQUFJO2dDQUNYQyxTQUFTLEVBQUUsU0FBUzs7Ozs7cUNBQ3BCOzs7Ozs7NkJBQ0U7Ozs7OztxQkFDRjs7b0JBQ0wsQ0FDSDtDQUNIO0dBOUNLbEMsSUFBSTs7UUFDT04sa0RBQVM7OztBQURwQk0sS0FBQUEsSUFBSTtBQWdEViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Nob3dzL1ttb3ZpZVRpdGxlXS5qcz83N2Y3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBEYXRhIH0gZnJvbSBcIi4uLy4uL2RhdGFcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vc3R5bGVzLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IFBsYXlJY29uIGZyb20gXCIuLi8uLi9hc3NldHMvcGxheS5zdmdcIjtcclxuXHJcbmNvbnN0IFBvc3QgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgcG9zdHMgPSBEYXRhO1xyXG4gIGNvbnN0IHBvc3QgPSBwb3N0c1tyb3V0ZXIucXVlcnkubW92aWVUaXRsZV07XHJcbiAgaWYgKCFwb3N0KSByZXR1cm4gPHA+PC9wPjtcclxuICBjb25zb2xlLmxvZyhwb3N0Lm1vdmllZGVzY3JpcHRpb24pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPntwb3N0Lm1vdmllVGl0bGV9PC90aXRsZT5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwiaWNvblwiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9hc3NldHNodWx1aW1jb20tYS5ha2FtYWloZC5uZXQvaDNvL2ljb25zL2Zhdmljb24uaWNvLnBuZ1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGFnZX0+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXRlZ29yaWVzfT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyfT57cG9zdC5tb3ZpZVRpdGxlfTwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc2VzLmNhdGVnb3JpZXNfY29udGVudH0+XHJcbiAgICAgICAgICAgIHtwb3N0Py5wcm9kdWN0aW9uWWVhcn0g4oCiIHtwb3N0LmNhdGVnb3JpZXN9IOKAoiB7cG9zdD8uY29udGVudFJhdGluZ31cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc2VzLmNhdGVnb3JpZXNfY29udGVudH0+XHJcbiAgICAgICAgICAgIElNRGIgUmF0aW5nIDp7cG9zdD8ucmF0aW5nfS8xMCDwn5OIXHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXRlZ29yaWVzX2NvbnRlbnR9PlxyXG4gICAgICAgICAgICB7cG9zdD8ubW92aWVEZXNjcmlwdGlvbn1cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZV9jb250YWluZXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGxheV9pY29ufT5cclxuICAgICAgICAgICAgPFBsYXlJY29uIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VzfVxyXG4gICAgICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcclxuICAgICAgICAgICAgc3JjPXtwb3N0LmltYWdlVVJsfVxyXG4gICAgICAgICAgICBoZWlnaHQ9ezEwODB9XHJcbiAgICAgICAgICAgIHdpZHRoPXsxOTIwfVxyXG4gICAgICAgICAgICBvYmplY3RGaXQ9e1wiY29udGFpblwifVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIkRhdGEiLCJJbWFnZSIsIkhlYWQiLCJjbGFzc2VzIiwiUGxheUljb24iLCJQb3N0Iiwicm91dGVyIiwicG9zdHMiLCJwb3N0IiwicXVlcnkiLCJtb3ZpZVRpdGxlIiwicCIsImNvbnNvbGUiLCJsb2ciLCJtb3ZpZWRlc2NyaXB0aW9uIiwidGl0bGUiLCJsaW5rIiwicmVsIiwiaHJlZiIsImRpdiIsImNsYXNzTmFtZSIsInBhZ2UiLCJ1bCIsImNhdGVnb3JpZXMiLCJsaSIsImhlYWRlciIsImNhdGVnb3JpZXNfY29udGVudCIsInByb2R1Y3Rpb25ZZWFyIiwiY29udGVudFJhdGluZyIsInJhdGluZyIsIm1vdmllRGVzY3JpcHRpb24iLCJpbWFnZV9jb250YWluZXIiLCJwbGF5X2ljb24iLCJpbWFnZXMiLCJsYXlvdXQiLCJzcmMiLCJpbWFnZVVSbCIsImhlaWdodCIsIndpZHRoIiwib2JqZWN0Rml0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/shows/[movieTitle].js\n");

/***/ })

});