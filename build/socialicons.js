/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************************!*\
  !*** ./custom-blocks/socialicons.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);


(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)("rollinoats/socialicons", {
  title: "Rollin Oats Social Icons",
  edit: SocialIconsComponent,
  save: SocialIconsComponent
});

function SocialIconsComponent() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ro--social-icons"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "ro--social-icons__facebook",
    href: "https://www.facebook.com/RollinOats",
    target: "_blank"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    "data-name": "Group 24",
    xmlns: "http://www.w3.org/2000/svg",
    width: "11.665",
    height: "25.104",
    viewBox: "0 0 11.665 25.104"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
    id: "a"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    "data-name": "Rectangle 41",
    fill: "#355a24",
    d: "M0 0h11.665v25.104H0z"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    "data-name": "Group 23",
    "clip-path": "url(#a)"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    "data-name": "Path 1193",
    d: "M11.665 8.129H7.693V5.523A1.06 1.06 0 0 1 8.8 4.317h2.8V.016L7.74 0C3.454 0 2.478 3.208 2.478 5.261v2.868H0v4.432h2.478V25.1h5.215V12.561h3.517Z",
    fill: "#355a24"
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "ro--social-icons__instagram",
    href: "https://www.instagram.com/rollinoatsstpete/",
    target: "_blank"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    "data-name": "Group 26",
    xmlns: "http://www.w3.org/2000/svg",
    width: "25.104",
    height: "25.104",
    viewBox: "0 0 25.104 25.104"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
    id: "a"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    "data-name": "Rectangle 42",
    fill: "#355a24",
    d: "M0 0h25.104v25.104H0z"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    "data-name": "Group 25",
    "clip-path": "url(#a)",
    fill: "#355a24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    "data-name": "Path 1194",
    d: "M12.551 6.02a6.459 6.459 0 1 0 6.459 6.459 6.466 6.466 0 0 0-6.459-6.459m0 10.606a4.148 4.148 0 1 1 4.148-4.148 4.152 4.152 0 0 1-4.148 4.151"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    "data-name": "Path 1195",
    d: "M19.253 4.398a1.466 1.466 0 1 0 1.466 1.466 1.466 1.466 0 0 0-1.466-1.466"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    "data-name": "Path 1196",
    d: "M23.081 2.054A7.287 7.287 0 0 0 17.765 0H7.34A6.949 6.949 0 0 0 0 7.339v10.368a7.318 7.318 0 0 0 2.114 5.406A7.4 7.4 0 0 0 7.4 25.1h10.31a7.431 7.431 0 0 0 5.328-1.987 7.267 7.267 0 0 0 2.062-5.349V7.339a7.307 7.307 0 0 0-2.024-5.285m-.287 15.71a5.019 5.019 0 0 1-1.372 3.7 5.177 5.177 0 0 1-3.714 1.329H7.4a5.139 5.139 0 0 1-3.675-1.339 5.067 5.067 0 0 1-1.412-3.747V7.339a5.056 5.056 0 0 1 1.351-3.688A5.067 5.067 0 0 1 7.34 2.31h10.425a5.033 5.033 0 0 1 3.675 1.372 5.051 5.051 0 0 1 1.354 3.657Z"
  })))));
}
})();

/******/ })()
;
//# sourceMappingURL=socialicons.js.map