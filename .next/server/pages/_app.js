/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/ErrorBoundary.js":
/*!*************************************!*\
  !*** ./components/ErrorBoundary.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nclass ErrorBoundary extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {\n    constructor(props){\n        super(props);\n        // Define a state variable to track whether is an error or not\n        this.state = {\n            hasError: false\n        };\n    }\n    static getDerivedStateFromError(error) {\n        // Update state so the next render will show the fallback UI\n        return {\n            hasError: true\n        };\n    }\n    componentDidCatch(error, errorInfo) {\n        // You can use your own error logging service here\n        console.log({\n            error,\n            errorInfo\n        });\n    }\n    render() {\n        // Check if the error is thrown\n        if (this.state.hasError) {\n            // You can render any custom fallback UI\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Oops, there is an error!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\hulu-app\\\\components\\\\ErrorBoundary.js\",\n                        lineNumber: 24,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        onClick: ()=>this.setState({\n                                hasError: false\n                            })\n                        ,\n                        children: \"Try again?\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\hulu-app\\\\components\\\\ErrorBoundary.js\",\n                        lineNumber: 25,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\hulu-app\\\\components\\\\ErrorBoundary.js\",\n                lineNumber: 23,\n                columnNumber: 11\n            }, this);\n        }\n        // Return children components in case of no error\n        return this.props.children;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorBoundary);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Vycm9yQm91bmRhcnkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUMxQixNQUFNQyxhQUFhLFNBQVNELHdEQUFlO0lBQ3ZDRyxZQUFZQyxLQUFLLENBQUU7UUFDakIsS0FBSyxDQUFDQSxLQUFLLENBQUM7UUFFWiw4REFBOEQ7UUFDOUQsSUFBSSxDQUFDQyxLQUFLLEdBQUc7WUFBRUMsUUFBUSxFQUFFLEtBQUs7U0FBRTtLQUNqQztJQUNELE9BQU9DLHdCQUF3QixDQUFDQyxLQUFLLEVBQUU7UUFDckMsNERBQTREO1FBRTVELE9BQU87WUFBRUYsUUFBUSxFQUFFLElBQUk7U0FBRTtLQUMxQjtJQUNERyxpQkFBaUIsQ0FBQ0QsS0FBSyxFQUFFRSxTQUFTLEVBQUU7UUFDbEMsa0RBQWtEO1FBQ2xEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQztZQUFFSixLQUFLO1lBQUVFLFNBQVM7U0FBRSxDQUFDO0tBQ2xDO0lBQ0RHLE1BQU0sR0FBRztRQUNQLCtCQUErQjtRQUMvQixJQUFJLElBQUksQ0FBQ1IsS0FBSyxDQUFDQyxRQUFRLEVBQUU7WUFDdkIsd0NBQXdDO1lBQ3hDLHFCQUNFLDhEQUFDUSxLQUFHOztrQ0FDRiw4REFBQ0MsSUFBRTtrQ0FBQywwQkFBd0I7Ozs7OzRCQUFLO2tDQUNqQyw4REFBQ0MsUUFBTTt3QkFDTEMsSUFBSSxFQUFDLFFBQVE7d0JBQ2JDLE9BQU8sRUFBRSxJQUFNLElBQUksQ0FBQ0MsUUFBUSxDQUFDO2dDQUFFYixRQUFRLEVBQUUsS0FBSzs2QkFBRSxDQUFDO3dCQUFBO2tDQUNsRCxZQUVEOzs7Ozs0QkFBUzs7Ozs7O29CQUNMLENBQ1A7U0FDRjtRQUVELGlEQUFpRDtRQUVqRCxPQUFPLElBQUksQ0FBQ0YsS0FBSyxDQUFDZ0IsUUFBUTtLQUMzQjtDQUNGO0FBRUQsaUVBQWVuQixhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaHVsdS1hcHAvLi9jb21wb25lbnRzL0Vycm9yQm91bmRhcnkuanM/YzlhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgIGZyb20gJ3JlYWN0J1xyXG5jbGFzcyBFcnJvckJvdW5kYXJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgIHN1cGVyKHByb3BzKVxyXG4gIFxyXG4gICAgICAvLyBEZWZpbmUgYSBzdGF0ZSB2YXJpYWJsZSB0byB0cmFjayB3aGV0aGVyIGlzIGFuIGVycm9yIG9yIG5vdFxyXG4gICAgICB0aGlzLnN0YXRlID0geyBoYXNFcnJvcjogZmFsc2UgfVxyXG4gICAgfVxyXG4gICAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcihlcnJvcikge1xyXG4gICAgICAvLyBVcGRhdGUgc3RhdGUgc28gdGhlIG5leHQgcmVuZGVyIHdpbGwgc2hvdyB0aGUgZmFsbGJhY2sgVUlcclxuICBcclxuICAgICAgcmV0dXJuIHsgaGFzRXJyb3I6IHRydWUgfVxyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3IsIGVycm9ySW5mbykge1xyXG4gICAgICAvLyBZb3UgY2FuIHVzZSB5b3VyIG93biBlcnJvciBsb2dnaW5nIHNlcnZpY2UgaGVyZVxyXG4gICAgICBjb25zb2xlLmxvZyh7IGVycm9yLCBlcnJvckluZm8gfSlcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgLy8gQ2hlY2sgaWYgdGhlIGVycm9yIGlzIHRocm93blxyXG4gICAgICBpZiAodGhpcy5zdGF0ZS5oYXNFcnJvcikge1xyXG4gICAgICAgIC8vIFlvdSBjYW4gcmVuZGVyIGFueSBjdXN0b20gZmFsbGJhY2sgVUlcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgyPk9vcHMsIHRoZXJlIGlzIGFuIGVycm9yITwvaDI+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgaGFzRXJyb3I6IGZhbHNlIH0pfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgVHJ5IGFnYWluP1xyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAvLyBSZXR1cm4gY2hpbGRyZW4gY29tcG9uZW50cyBpbiBjYXNlIG9mIG5vIGVycm9yXHJcbiAgXHJcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuXHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IEVycm9yQm91bmRhcnkiXSwibmFtZXMiOlsiUmVhY3QiLCJFcnJvckJvdW5kYXJ5IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiaGFzRXJyb3IiLCJnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IiLCJlcnJvciIsImNvbXBvbmVudERpZENhdGNoIiwiZXJyb3JJbmZvIiwiY29uc29sZSIsImxvZyIsInJlbmRlciIsImRpdiIsImgyIiwiYnV0dG9uIiwidHlwZSIsIm9uQ2xpY2siLCJzZXRTdGF0ZSIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ErrorBoundary.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ErrorBoundary */ \"./components/ErrorBoundary.js\");\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\hulu-app\\\\pages\\\\_app.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\hulu-app\\\\pages\\\\_app.js\",\n        lineNumber: 7,\n        columnNumber: 1\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBO0FBQThCO0FBQ3lCO0FBRXZELFNBQVNDLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRSxFQUFFO0lBQ3ZDLHFCQUNGLDhEQUFDSCxpRUFBYTtrQkFDUiw0RUFBQ0UsU0FBUztZQUFHLEdBQUdDLFNBQVM7Ozs7O2dCQUFLOzs7OztZQUNkLENBQ3JCO0NBQUM7QUFFRixpRUFBZUYsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL2h1bHUtYXBwLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgRXJyb3JCb3VuZGFyeSBmcm9tICcuLi9jb21wb25lbnRzL0Vycm9yQm91bmRhcnknXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuPEVycm9yQm91bmRhcnk+XG4gICAgICA8Q29tcG9uZW50IHsgLi4ucGFnZVByb3BzIH0gLz5cbiAgICAgIDwvRXJyb3JCb3VuZGFyeT5cbil9XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwibmFtZXMiOlsiRXJyb3JCb3VuZGFyeSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();