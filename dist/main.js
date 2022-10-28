/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/pokemon-go-hd-wallpaper.jpg */ \"./src/images/pokemon-go-hd-wallpaper.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/pok-mon-go-logo-png-30.png */ \"./src/images/pok-mon-go-logo-png-30.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  box-sizing: border-box;\\r\\n  font-family: 'Barlow', sans-serif;\\r\\n}\\r\\n\\r\\n#page-container {\\r\\n  position: relative;\\r\\n  height: 100vh;\\r\\n}\\r\\n\\r\\nmain {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  padding-bottom: 2.5rem;\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  background-attachment: fixed;\\r\\n  background-size: cover;\\r\\n}\\r\\n\\r\\n#navbar {\\r\\n  padding: 0.5rem 1rem;\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: space-around;\\r\\n  border-bottom: 1px solid black;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n#logo {\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\r\\n  background-size: contain;\\r\\n  min-height: 3rem;\\r\\n  min-width: 3rem;\\r\\n}\\r\\n\\r\\n#navbar-links {\\r\\n  list-style: none;\\r\\n  display: flex;\\r\\n  gap: 1rem;\\r\\n  font-size: 1.25rem;\\r\\n}\\r\\n\\r\\n#title {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  padding: 0.5rem;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n#footer {\\r\\n  position: fixed;\\r\\n  bottom: 0;\\r\\n  border-top: 1px solid black;\\r\\n  width: 100%;\\r\\n  padding: 0.5rem 1rem;\\r\\n  height: 2.5rem;\\r\\n  background-color: white;\\r\\n}\\r\\n\\r\\n/* POKEMON CARDS */\\r\\n#main-container {\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  justify-content: space-around;\\r\\n}\\r\\n\\r\\n.PokeCard {\\r\\n  background-color: burlywood;\\r\\n  margin: 6px;\\r\\n  width: 80%;\\r\\n  border: 1px solid black;\\r\\n  border-radius: 0.5rem;\\r\\n}\\r\\n\\r\\n.header {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  padding: 0.5rem;\\r\\n  align-items: baseline;\\r\\n}\\r\\n\\r\\n.id {\\r\\n  font-size: 0.75rem;\\r\\n  font-weight: bold;\\r\\n  padding-right: 0.5rem;\\r\\n}\\r\\n\\r\\n.picDiv,\\r\\n.intro {\\r\\n  border: 1px solid black;\\r\\n}\\r\\n\\r\\n.picDiv {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  background-color: rgb(255, 255, 255, 0.7);\\r\\n  border-radius: 0.5rem;\\r\\n  margin: 0 0.5rem;\\r\\n}\\r\\n\\r\\n.intro {\\r\\n  min-height: 6rem;\\r\\n  margin: 1rem;\\r\\n  padding: 0.5rem;\\r\\n  background-color: rgb(255, 255, 255, 0.5);\\r\\n  border-radius: 0.5rem;\\r\\n}\\r\\n\\r\\n.buttons {\\r\\n  display: flex;\\r\\n  justify-content: space-around;\\r\\n  padding-bottom: 0.5rem;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  padding: 0.5rem;\\r\\n  border-radius: 0.5rem;\\r\\n}\\r\\n\\r\\nbutton:hover {\\r\\n  cursor: pointer;\\r\\n  transform: translateY(-1px);\\r\\n  box-shadow: 1px 1px rgb(71, 71, 71);\\r\\n}\\r\\n\\r\\nbutton:active {\\r\\n  cursor: pointer;\\r\\n  transform: translateY(1px);\\r\\n  box-shadow: 1px 1px rgb(71, 71, 71);\\r\\n}\\r\\n\\r\\n.popupCard {\\r\\n  position: fixed;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  top: 10%;\\r\\n  left: 2%;\\r\\n  z-index: 999;\\r\\n  height: 80%;\\r\\n  width: 95%;\\r\\n  background-color: white;\\r\\n  border: 3px solid black;\\r\\n  border-radius: 1rem;\\r\\n}\\r\\n\\r\\n.left-side,\\r\\n.comment-section {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.popupPoke {\\r\\n  margin: 1rem;\\r\\n  border: 1px solid black;\\r\\n  border-radius: 0.5rem;\\r\\n}\\r\\n\\r\\n.comment-section {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n#comment-header {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  padding: 0.5rem;\\r\\n}\\r\\n\\r\\n.new-comments {\\r\\n  padding: 0.5rem;\\r\\n}\\r\\n\\r\\n.comment-area {\\r\\n  min-height: 60%;\\r\\n  border: 1px solid black;\\r\\n  margin: 0.5rem;\\r\\n  border-radius: 0.5rem;\\r\\n  overflow-y: scroll;\\r\\n}\\r\\n\\r\\ninput {\\r\\n  width: 90%;\\r\\n  height: 24px;\\r\\n  margin-top: 5px;\\r\\n  padding-left: 5px;\\r\\n}\\r\\n\\r\\n.new-comments input {\\r\\n  width: 100%;\\r\\n  padding: 0.5rem;\\r\\n  margin-bottom: 1rem;\\r\\n  border-radius: 0.5rem;\\r\\n}\\r\\n\\r\\n.reservation-popup {\\r\\n  position: fixed;\\r\\n  top: 5%;\\r\\n  bottom: 5%;\\r\\n  left: 10%;\\r\\n  right: 10%;\\r\\n  background-color: rgb(158, 2, 2);\\r\\n  border: 2px solid black;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.pokemon-name {\\r\\n  font-size: 2rem;\\r\\n  color: white;\\r\\n  font-weight: bold;\\r\\n  width: 100%;\\r\\n  text-align: center;\\r\\n  margin-top: 12px;\\r\\n}\\r\\n\\r\\n.reservation-info {\\r\\n  border: 2px solid white;\\r\\n  margin-top: 12px;\\r\\n  height: 90%;\\r\\n  width: 90%;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.reservation-container {\\r\\n  width: 100%;\\r\\n  height: 50%;\\r\\n  border: 2px solid black;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.pokemon-info {\\r\\n  width: 100%;\\r\\n  height: 50%;\\r\\n  border: 2px solid black;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  background-color: white;\\r\\n}\\r\\n\\r\\n.pokemon-image-container {\\r\\n  width: 50%;\\r\\n  height: 50%;\\r\\n  border: 2px solid black;\\r\\n  margin-top: 12px;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.pokemon-types {\\r\\n  width: 150px;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  margin-top: 12px;\\r\\n}\\r\\n\\r\\n.type {\\r\\n  list-style: none;\\r\\n  border: 1px solid black;\\r\\n  padding: 5px;\\r\\n  margin-left: 5px;\\r\\n  margin-right: 5px;\\r\\n}\\r\\n\\r\\n.previous-reservations {\\r\\n  border: 2px solid blue;\\r\\n  height: 40%;\\r\\n  width: 90%;\\r\\n  margin-top: 12px;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: flex-start;\\r\\n  text-align: center;\\r\\n  color: white;\\r\\n  overflow-y: scroll;\\r\\n}\\r\\n\\r\\ntable {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\nthead {\\r\\n  position: sticky;\\r\\n  top: 0;\\r\\n  height: 24px;\\r\\n  border: 1px solid white;\\r\\n  background-color: black;\\r\\n}\\r\\n\\r\\ntbody {\\r\\n  color: white;\\r\\n  padding-top: 24px;\\r\\n}\\r\\n\\r\\ntd {\\r\\n  border: 1px solid white;\\r\\n  height: 36px;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.reservation-form {\\r\\n  height: 50%;\\r\\n  width: 90%;\\r\\n  margin-top: 12px;\\r\\n  margin-bottom: 12px;\\r\\n  border: 2px solid blue;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.submit-reservation {\\r\\n  margin-top: 12px;\\r\\n}\\r\\n\\r\\n.close-btn {\\r\\n  border: 2px solid blue;\\r\\n  height: 20px;\\r\\n  width: 20px;\\r\\n  color: blue;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  position: absolute;\\r\\n  top: 12px;\\r\\n  right: 12px;\\r\\n  cursor: pointer;\\r\\n  transition: all 0.5s ease-in-out;\\r\\n}\\r\\n\\r\\n.close-btn:hover {\\r\\n  transform: scale(1.1);\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.reservation-title {\\r\\n  color: white;\\r\\n  margin-top: 12px;\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 321px) {\\r\\n  .PokeCard {\\r\\n    width: 60%;\\r\\n  }\\r\\n\\r\\n  #navbar {\\r\\n    padding: 0.5rem 2rem;\\r\\n  }\\r\\n\\r\\n  #title {\\r\\n    font-size: 3rem;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 769px) {\\r\\n  .PokeCard {\\r\\n    width: 25%;\\r\\n  }\\r\\n\\r\\n  .popupCard {\\r\\n    flex-direction: row;\\r\\n    top: 10%;\\r\\n    left: 15%;\\r\\n    z-index: 999;\\r\\n    height: 80%;\\r\\n    width: 70%;\\r\\n  }\\r\\n\\r\\n  .left-side,\\r\\n  .comment-section,\\r\\n  .reservation-info {\\r\\n    width: 100%;\\r\\n    flex-direction: row;\\r\\n    height: 80%;\\r\\n    margin-top: 24px;\\r\\n  }\\r\\n\\r\\n  .reservation-container {\\r\\n    width: 50%;\\r\\n    height: 100%;\\r\\n    border: 2px solid white;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    flex-direction: column;\\r\\n  }\\r\\n\\r\\n  .pokemon-info {\\r\\n    width: 50%;\\r\\n    height: 100%;\\r\\n    border: 2px solid black;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    background-color: white;\\r\\n  }\\r\\n\\r\\n  .pokemon-image-container {\\r\\n    width: 30%;\\r\\n    height: 30%;\\r\\n    border: 2px solid black;\\r\\n    margin-top: 12px;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n  }\\r\\n\\r\\n  .close-btn {\\r\\n    top: 24px;\\r\\n    right: 24px;\\r\\n  }\\r\\n\\r\\n  .reservation-info {\\r\\n    flex-direction: row;\\r\\n    height: 80%;\\r\\n    margin-top: 24px;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 1280px) {\\r\\n  .PokeCard {\\r\\n    width: 20%;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 1600px) {\\r\\n  .PokeCard {\\r\\n    width: 16%;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_mainOutput_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/mainOutput.js */ \"./src/modules/mainOutput.js\");\n/* harmony import */ var _modules_popupCD_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/popupCD.js */ \"./src/modules/popupCD.js\");\n/* harmony import */ var _modules_reservation_popup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/reservation_popup.js */ \"./src/modules/reservation_popup.js\");\n/* eslint-disable linebreak-style */\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/index.js?");

/***/ }),

/***/ "./src/modules/addCommentAPI.js":
/*!**************************************!*\
  !*** ./src/modules/addCommentAPI.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable linebreak-style */\r\nconst postComment = async (id, name, commentInput) => {\r\n  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/q43Np4AB1ka0fqpIWSXs/comments/', {\r\n    method: 'POST',\r\n    body: JSON.stringify(\r\n      {\r\n        item_id: id,\r\n        username: name,\r\n        comment: commentInput,\r\n      },\r\n    ),\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postComment);\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/addCommentAPI.js?");

/***/ }),

/***/ "./src/modules/add_reservation.js":
/*!****************************************!*\
  !*** ./src/modules/add_reservation.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable linebreak-style */\r\n\r\nconst postReservation = async (id, name, dateStart, dateEnd) => {\r\n  if (name.length > 0 && dateStart.length > 0 && dateEnd.length > 0) {\r\n    await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/q43Np4AB1ka0fqpIWSXs/reservations/',\r\n      {\r\n        method: 'POST',\r\n        body: JSON.stringify(\r\n          {\r\n            item_id: id,\r\n            username: name,\r\n            date_start: dateStart,\r\n            date_end: dateEnd,\r\n          },\r\n        ),\r\n        headers: {\r\n          'Content-Type': 'application/json',\r\n        },\r\n      });\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postReservation);\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/add_reservation.js?");

/***/ }),

/***/ "./src/modules/cardsCounter.js":
/*!*************************************!*\
  !*** ./src/modules/cardsCounter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cardsNumber\": () => (/* binding */ cardsNumber)\n/* harmony export */ });\n/* harmony import */ var _mainOutput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainOutput */ \"./src/modules/mainOutput.js\");\n\r\n\r\n\r\n\r\nconst cardsNumber = (parameter) => {\r\n\r\n    const cardCounter = document.getElementsByClassName(parameter).length;\r\n    \r\n    const cardsResult = document.createElement('h3');\r\n    cardsResult.innerText = cardCounter;\r\n    \r\n    _mainOutput__WEBPACK_IMPORTED_MODULE_0__.codex.appendChild(cardsResult)\r\n\r\n    console.log(cardCounter)\r\n\r\n\r\n}\r\n\r\n/*\r\n\r\nconst mainSite = document.getElementsByTagName('main');\r\n    const cardCounter = document.querySelectorAll('.PokeCard').length;\r\n    const countingCards = document.createElement('h3');\r\n    countingCards.setAttribute('id','countingCards');\r\n    countingCards.innerText = \"Total Cards: \" + cardCounter;\r\n    mainSite.appendChild(countingCards);\r\n\r\n\r\n*/\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/cardsCounter.js?");

/***/ }),

/***/ "./src/modules/getCommentAPI.js":
/*!**************************************!*\
  !*** ./src/modules/getCommentAPI.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable linebreak-style */\r\nconst getComment = async (id) => {\r\n  const comment = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/q43Np4AB1ka0fqpIWSXs/comments?item_id=${id}`);\r\n  if (comment.status === 200) {\r\n    const commentJSON = await comment.json();\r\n    return commentJSON;\r\n  }\r\n  return [];\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getComment);\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/getCommentAPI.js?");

/***/ }),

/***/ "./src/modules/get_reservation.js":
/*!****************************************!*\
  !*** ./src/modules/get_reservation.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable linebreak-style */\r\nconst getReservation = async (id) => {\r\n  const reservation = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/q43Np4AB1ka0fqpIWSXs/reservations/?item_id=${id}`);\r\n  if (reservation.status === 200) {\r\n    const reservationJSON = await reservation.json();\r\n    return reservationJSON;\r\n  }\r\n  return [];\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getReservation);\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/get_reservation.js?");

/***/ }),

/***/ "./src/modules/likesCounter.js":
/*!*************************************!*\
  !*** ./src/modules/likesCounter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ liked)\n/* harmony export */ });\nfunction liked(item) {\r\n  document.getElementById(item).addEventListener('click', () => {\r\n    const data = {\r\n      item_id: item,\r\n    };\r\n\r\n    fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/q43Np4AB1ka0fqpIWSXs/likes/', {\r\n      method: 'POST',\r\n      body: JSON.stringify(data),\r\n      headers: { 'Content-type': 'application/json; charset=UTF-8' },\r\n    })\r\n\r\n      .then((response) => response.json())\r\n      .then((json) => console.log(json))\r\n      .catch((err) => console.log(err));\r\n\r\n    fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/q43Np4AB1ka0fqpIWSXs/likes/')\r\n      .then((response) => response.json())\r\n      .then((json) => {\r\n        const pokeLikes = json;\r\n\r\n        for (let i = 0; i < pokeLikes.length; i += 1) {\r\n          if (pokeLikes[i].item_id === item) {\r\n            const pokeConst = `likes${item}`;\r\n            const pokeNumber = document.getElementById(pokeConst);\r\n            pokeNumber.textContent = pokeLikes[i].likes;\r\n          }\r\n        }\r\n      })\r\n      .catch((err) => console.log(err));\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/likesCounter.js?");

/***/ }),

/***/ "./src/modules/mainOutput.js":
/*!***********************************!*\
  !*** ./src/modules/mainOutput.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"codex\": () => (/* binding */ codex)\n/* harmony export */ });\n/* harmony import */ var _likesCounter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./likesCounter.js */ \"./src/modules/likesCounter.js\");\n/* harmony import */ var _cardsCounter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardsCounter */ \"./src/modules/cardsCounter.js\");\n/* eslint-disable linebreak-style */\r\n\r\n\r\nconst codex = document.querySelector('#main-container');\r\n\r\nconst newLikes = (item) => {\r\n  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/q43Np4AB1ka0fqpIWSXs/likes/')\r\n    .then((response) => response.json())\r\n    .then((json) => {\r\n      const pokeLikes = json;\r\n\r\n      for (let i = 0; i < pokeLikes.length; i += 1) {\r\n        if (pokeLikes[i].item_id === item) {\r\n          const pokeConst = `likes${item}`;\r\n          const pokeNumber = document.getElementById(pokeConst);\r\n          pokeNumber.textContent = pokeLikes[i].likes;\r\n        }\r\n      }\r\n    })\r\n    .catch((err) => console.log(err));\r\n};\r\n\r\nconst retrieve = (item) => {\r\n  const card = document.createElement('div'); // Card Div\r\n  card.setAttribute('class', 'PokeCard');\r\n  codex.appendChild(card);\r\n\r\n  const header = document.createElement('div');\r\n  header.classList.add('header');\r\n  card.appendChild(header);\r\n\r\n  const pokeName = document.createElement('h3'); // Card Tittle\r\n  pokeName.classList.add('name');\r\n  pokeName.innerText = item.name;\r\n  header.appendChild(pokeName);\r\n\r\n  const pokeID = document.createElement('p');\r\n  pokeID.classList.add('id');\r\n  pokeID.innerText = `${item.id}`;\r\n  header.appendChild(pokeID);\r\n\r\n  const picDiv = document.createElement('div');\r\n  picDiv.setAttribute('class', 'picDiv');\r\n  card.appendChild(picDiv);\r\n\r\n  const picture = document.createElement('img');\r\n  picture.setAttribute('src', item.sprites.front_default);\r\n  picDiv.appendChild(picture);\r\n\r\n  const intro = document.createElement('div');\r\n  intro.classList.add('intro');\r\n  card.appendChild(intro);\r\n\r\n  const type = document.createElement('p');\r\n  type.innerHTML = item.types.length === 2 ? `Type: ${item.types[0].type.name}, ${item.types[1].type.name}` : `Type: ${item.types[0].type.name}`;\r\n  intro.appendChild(type);\r\n\r\n  const height = document.createElement('p');\r\n  height.innerHTML = `Height: ${item.height} '`;\r\n  intro.appendChild(height);\r\n\r\n  const weight = document.createElement('p');\r\n  weight.innerHTML = `Weight: ${item.weight} lbs`;\r\n  intro.appendChild(weight);\r\n\r\n  const buttonsDiv = document.createElement('div');\r\n  buttonsDiv.classList.add('buttons');\r\n  card.appendChild(buttonsDiv);\r\n\r\n  const commentBtn = document.createElement('button');\r\n  commentBtn.classList.add('comment');\r\n  commentBtn.setAttribute('type', 'button');\r\n  commentBtn.innerText = 'Comments';\r\n\r\n  const reserveBtn = document.createElement('button');\r\n  reserveBtn.innerText = 'Reserve';\r\n  reserveBtn.classList.add('reserve');\r\n  reserveBtn.setAttribute('type', 'button');\r\n  buttonsDiv.appendChild(commentBtn);\r\n  buttonsDiv.appendChild(reserveBtn);\r\n\r\n  const likeButton = document.createElement('button');\r\n  likeButton.setAttribute('id', item.name);\r\n  likeButton.innerHTML = 'Like!';\r\n  card.appendChild(likeButton);\r\n\r\n  const likesNumber = document.createElement('p');\r\n  likesNumber.setAttribute('id', `likes${item.name}`);\r\n  likesNumber.innerHTML = 0;\r\n  card.appendChild(likesNumber);\r\n\r\n  (0,_likesCounter_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(item.name);\r\n  newLikes(item.name);\r\n  \r\n};\r\n\r\nsetTimeout((0,_cardsCounter__WEBPACK_IMPORTED_MODULE_1__.cardsNumber)('PokeCard'), 5000)\r\n\r\n\r\nfor (let i = 1; i < 152; i += 1) {\r\n  const link = 'https://pokeapi.co/api/v2/pokemon/';\r\n  const finalLink = link + i;\r\n  const myFunction = async () => {\r\n    await fetch(finalLink)\r\n      .then((response) => response.json())\r\n      .then((json) => retrieve(json));\r\n  };\r\n  myFunction();\r\n}\r\n\r\n/*\r\n    const myFunction = async () => {\r\n        await fetch('https://pokeapi.co/api/v2/pokemon/1/')\r\n       .then((response) => response.json())\r\n       .then((json) => console.log(json))\r\n       .catch((err) => console.log(err));\r\n       }\r\n       myFunction()\r\n       */\r\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/mainOutput.js?");

/***/ }),

/***/ "./src/modules/popupCD.js":
/*!********************************!*\
  !*** ./src/modules/popupCD.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _addCommentAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addCommentAPI.js */ \"./src/modules/addCommentAPI.js\");\n/* harmony import */ var _getCommentAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getCommentAPI.js */ \"./src/modules/getCommentAPI.js\");\n/* eslint-disable linebreak-style */\r\n\r\n\r\n\r\nconst createPopup = (object) => {\r\n  const popupContainer = document.createElement('div');\r\n  popupContainer.setAttribute('class', 'popupCard');\r\n  const body = document.getElementById('main-container');\r\n  body.appendChild(popupContainer);\r\n\r\n  const leftSide = document.createElement('div');\r\n  leftSide.classList.add('left-side');\r\n  popupContainer.appendChild(leftSide);\r\n\r\n  const popupPoke = document.createElement('div');\r\n  popupPoke.classList.add('popupPoke');\r\n  leftSide.appendChild(popupPoke);\r\n\r\n  const name = document.createElement('h3');\r\n  name.setAttribute('class', 'name');\r\n  name.textContent = object.name;\r\n  popupPoke.appendChild(name);\r\n\r\n  const id = document.createElement('p');\r\n  id.classList.add('id');\r\n  popupPoke.appendChild(id);\r\n\r\n  const imgContainer = document.createElement('div');\r\n  imgContainer.classList.add('picDiv');\r\n  const pokemonImage = document.createElement('img');\r\n  pokemonImage.setAttribute('src', object.sprites.front_default);\r\n  pokemonImage.setAttribute('alt', 'pokemon image');\r\n  imgContainer.appendChild(pokemonImage);\r\n  popupPoke.appendChild(imgContainer);\r\n\r\n  const intro = document.createElement('div');\r\n  intro.classList.add('intro');\r\n  popupPoke.appendChild(intro);\r\n  const info = document.createElement('p');\r\n  info.classList.add('info');\r\n  info.textContent = `Type: \r\n  Height: ${object.height}\r\n  weight: ${object.weight}\r\n  `;\r\n  intro.appendChild(info);\r\n\r\n  const commentSection = document.createElement('div');\r\n  commentSection.classList.add('comment-section');\r\n  popupContainer.appendChild(commentSection);\r\n\r\n  const commentHeader = document.createElement('div');\r\n  commentHeader.setAttribute('id', 'comment-header');\r\n  commentSection.appendChild(commentHeader);\r\n\r\n  const commentTitle = document.createElement('h3');\r\n  commentTitle.textContent = 'COMMENTS';\r\n  commentHeader.appendChild(commentTitle);\r\n\r\n  const closeBtn = document.createElement('button');\r\n  closeBtn.textContent = 'X';\r\n  closeBtn.setAttribute('id', 'close-btn');\r\n  commentHeader.appendChild(closeBtn);\r\n\r\n  const commentArea = document.createElement('div');\r\n  commentArea.classList.add('comment-area');\r\n  commentSection.appendChild(commentArea);\r\n\r\n  const newComments = document.createElement('div');\r\n  newComments.classList.add('new-comments');\r\n  commentSection.appendChild(newComments);\r\n\r\n  const addComments = document.createElement('h3');\r\n  addComments.textContent = 'Add a comment';\r\n  newComments.appendChild(addComments);\r\n\r\n  const input1 = document.createElement('input');\r\n  input1.setAttribute('type', 'text');\r\n  input1.setAttribute('placeholder', 'your name');\r\n  newComments.appendChild(input1);\r\n\r\n  const input2 = document.createElement('input');\r\n  input2.setAttribute('type', 'text');\r\n  input2.setAttribute('placeholder', 'your insigths');\r\n  newComments.appendChild(input2);\r\n\r\n  const submitBtn = document.createElement('button');\r\n  submitBtn.setAttribute('type', 'submit');\r\n  submitBtn.setAttribute('id', 'submit-button');\r\n  submitBtn.textContent = 'Submit';\r\n  newComments.appendChild(submitBtn);\r\n\r\n  closeBtn.addEventListener('click', (e) => {\r\n    e.target.parentElement.parentElement.parentElement.remove();\r\n  });\r\n\r\n  const displayComments = async () => {\r\n    const recentComments = await (0,_getCommentAPI_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(object.id);\r\n    await recentComments.reverse();\r\n    recentComments.forEach((comment) => {\r\n      const newComment = document.createElement('div');\r\n      newComment.innerHTML = `<p class=\"input-date\">${comment.creation_date}</p><p class=\"comment-name\">${comment.username}</p><p class=\"comment-msg\">${comment.comment}</p>`;\r\n      commentArea.appendChild(newComment);\r\n    });\r\n  };\r\n\r\n  displayComments();\r\n\r\n  submitBtn.addEventListener('click', async (e) => {\r\n    e.preventDefault();\r\n    commentArea.innerHTML = '';\r\n    await (0,_addCommentAPI_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(object.id, input1.value, input2.value);\r\n    await displayComments();\r\n    input1.value = '';\r\n    input2.value = '';\r\n  });\r\n};\r\n\r\nconst commentsPopup = (name) => {\r\n  const link = 'https://pokeapi.co/api/v2/pokemon/';\r\n  const newLink = link + name;\r\n  const pokemonObject = async () => {\r\n    await fetch(newLink)\r\n      .then((response) => response.json())\r\n      .then((json) => createPopup(json));\r\n  };\r\n  pokemonObject();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentsPopup);\r\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/popupCD.js?");

/***/ }),

/***/ "./src/modules/reservation_counter.js":
/*!********************************************!*\
  !*** ./src/modules/reservation_counter.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable linebreak-style */\r\n\r\nconst reservationCounter = (classToCount, append) => {\r\n  const counter = classToCount.length;\r\n  const reservationCounter = document.createElement('h3');\r\n  reservationCounter.className = 'reservation-title';\r\n  reservationCounter.textContent = `Recent Reservations (${counter})`;\r\n  append.prepend(reservationCounter);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reservationCounter);\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/reservation_counter.js?");

/***/ }),

/***/ "./src/modules/reservation_popup.js":
/*!******************************************!*\
  !*** ./src/modules/reservation_popup.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _get_reservation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get_reservation.js */ \"./src/modules/get_reservation.js\");\n/* harmony import */ var _add_reservation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add_reservation.js */ \"./src/modules/add_reservation.js\");\n/* harmony import */ var _reservation_counter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reservation_counter.js */ \"./src/modules/reservation_counter.js\");\n/* harmony import */ var _popupCD_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popupCD.js */ \"./src/modules/popupCD.js\");\n/* eslint-disable linebreak-style */\r\n\r\n\r\n\r\n\r\n\r\n// This function is created to display the information of each pokemon in a popup\r\n\r\nconst createPopup = (object) => {\r\n  // First I created a popup container that is going to appear when I click the button\r\n\r\n  const popupContainer = document.createElement('div');\r\n  popupContainer.setAttribute('class', 'reservation-popup');\r\n  const body = document.querySelector('body');\r\n  body.appendChild(popupContainer);\r\n\r\n  // After this I will use the name in the object to create the title of the popup\r\n\r\n  const name = document.createElement('h1');\r\n  name.setAttribute('class', 'pokemon-name');\r\n  name.textContent = object.name.toUpperCase();\r\n  popupContainer.appendChild(name);\r\n\r\n  // I want to create one section to contain the pokemon information and the reservation form\r\n\r\n  const reservationInfo = document.createElement('div');\r\n  reservationInfo.setAttribute('class', 'reservation-info');\r\n  popupContainer.appendChild(reservationInfo);\r\n\r\n  // After this I want to create one section to put the pokemon information\r\n\r\n  const pokemonInfo = document.createElement('div');\r\n  pokemonInfo.setAttribute('class', 'pokemon-info');\r\n  reservationInfo.appendChild(pokemonInfo);\r\n\r\n  // And I want to create one section to put the reservation form\r\n\r\n  const reservationPlace = document.createElement('div');\r\n  reservationPlace.setAttribute('class', 'reservation-container');\r\n  reservationInfo.appendChild(reservationPlace);\r\n\r\n  // To start with the setup of the pokemon information, I will start putting the image\r\n\r\n  const pokemonImage = document.createElement('img');\r\n  const pokemonImageContainer = document.createElement('div');\r\n  pokemonImageContainer.setAttribute('class', 'pokemon-image-container');\r\n  pokemonImage.setAttribute('src', object.sprites.front_default);\r\n  pokemonInfo.appendChild(pokemonImageContainer);\r\n  pokemonImageContainer.appendChild(pokemonImage);\r\n\r\n  // I will display the type of the pokemon\r\n\r\n  const pokemonTypes = object.types;\r\n  const types = document.createElement('ul');\r\n  types.classList.add('pokemon-types');\r\n\r\n  pokemonTypes.forEach((type) => {\r\n    const li = document.createElement('li');\r\n    li.textContent = type.type.name;\r\n    li.classList.add('type');\r\n    li.classList.add(type.type.name);\r\n    types.appendChild(li);\r\n  });\r\n\r\n  pokemonInfo.appendChild(types);\r\n\r\n  // I will add the window to display previous reservations\r\n\r\n  const previousReservations = document.createElement('div');\r\n  previousReservations.classList.add('previous-reservations');\r\n  reservationPlace.appendChild(previousReservations);\r\n\r\n  // I will add a new div where I'll put the form\r\n\r\n  const reservationForm = document.createElement('form');\r\n  reservationForm.classList.add('reservation-form');\r\n  reservationPlace.appendChild(reservationForm);\r\n\r\n  // I add all the inputs fields\r\n\r\n  reservationForm.innerHTML = '<input type=\"text\" class=\"name-input\" placeholder=\"Your name\" />'\r\n  + '<input type=\"date\" class=\"date-start-input\" />'\r\n  + '<input type=\"date\" class=\"date-end-input\" />'\r\n  + '<button type=\"submit\" class=\"submit-reservation\">Submit</button>';\r\n\r\n  // This part is to add the close button\r\n\r\n  const closeButton = document.createElement('div');\r\n  closeButton.className = 'close-btn';\r\n  closeButton.innerHTML = 'X';\r\n  popupContainer.appendChild(closeButton);\r\n\r\n  closeButton.addEventListener('click', (e) => {\r\n    e.target.parentElement.remove();\r\n  });\r\n\r\n  // I want to display the information in the recent reservation sections\r\n\r\n  const table = document.createElement('table');\r\n  table.className = 'reservations-table';\r\n  previousReservations.appendChild(table);\r\n\r\n  // I want to create the thead\r\n\r\n  const thead = document.createElement('thead');\r\n  thead.innerHTML = '<th>Name</th>'\r\n  + '<th>Start Date</th>'\r\n  + '<th>End Date</th>';\r\n\r\n  table.appendChild(thead);\r\n\r\n  // Now I will take the information from the Api to display it in the table\r\n\r\n  const displayReservations = async () => {\r\n    const recentReservations = await (0,_get_reservation_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(object.id);\r\n    await recentReservations.reverse();\r\n    const tbody = document.createElement('tbody');\r\n    table.appendChild(tbody);\r\n    recentReservations.forEach((reservation) => {\r\n      const tr = document.createElement('tr');\r\n      tr.innerHTML = `<td>${reservation.username}</td><td>${reservation.date_start}</td><td>${reservation.date_end}</td>`;\r\n      tr.setAttribute('class', 'reserved');\r\n      tbody.appendChild(tr);\r\n    });\r\n\r\n    // Here is the counter for the reservations\r\n\r\n    const reserved1 = document.querySelectorAll('.reserved');\r\n    (0,_reservation_counter_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(reserved1, reservationPlace);\r\n  };\r\n\r\n  displayReservations();\r\n\r\n  // Now I will create an event listener for the submit button\r\n\r\n  const submitReservation = document.querySelector('.submit-reservation');\r\n  const username = document.querySelector('.name-input');\r\n  const dateStart = document.querySelector('.date-start-input');\r\n  const dateEnd = document.querySelector('.date-end-input');\r\n\r\n  submitReservation.addEventListener('click', async (e) => {\r\n    const tbody = document.querySelector('tbody');\r\n    const counter = document.querySelector('.reservation-title');\r\n    counter.remove();\r\n    tbody.remove();\r\n    e.preventDefault();\r\n    await (0,_add_reservation_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(object.id, username.value, dateStart.value, dateEnd.value);\r\n    await displayReservations();\r\n    username.value = '';\r\n    dateStart.value = '';\r\n    dateEnd.value = '';\r\n  });\r\n};\r\n\r\nconst reservationPopup = (name) => {\r\n  // First I will acced to the information of each pokemon using his name\r\n\r\n  const link = 'https://pokeapi.co/api/v2/pokemon/';\r\n  const newLink = link + name;\r\n\r\n  // Now I will create an object with the information of the pokemon\r\n\r\n  const pokemonObject = async () => {\r\n    await fetch(newLink)\r\n      .then((response) => response.json())\r\n      .then((json) => createPopup(json));\r\n  };\r\n  pokemonObject();\r\n\r\n  // Now I will create an\r\n};\r\n\r\nwindow.onload = () => {\r\n  const btn = document.querySelectorAll('.reserve');\r\n  btn.forEach((btn) => {\r\n    btn.addEventListener('click', (e) => {\r\n      const name = e.target.parentElement.parentElement.firstChild.firstChild.textContent;\r\n      reservationPopup(name);\r\n    });\r\n  });\r\n\r\n  const btn2 = document.querySelectorAll('.comment');\r\n  btn2.forEach((btn) => {\r\n    btn.addEventListener('click', (e) => {\r\n      const name = e.target.parentElement.parentElement.children[0].children[0].innerHTML;\r\n      (0,_popupCD_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(name);\r\n    });\r\n  });\r\n};\r\n\r\n// GET and POST reservation functions\r\n\r\n/* postReservation(2, 'Jane', '2020-10-15', '2020-10-16'); */\r\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/reservation_popup.js?");

/***/ }),

/***/ "./src/images/pok-mon-go-logo-png-30.png":
/*!***********************************************!*\
  !*** ./src/images/pok-mon-go-logo-png-30.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a4a49d7a315b725de60c.png\";\n\n//# sourceURL=webpack://webpack-boilerplate/./src/images/pok-mon-go-logo-png-30.png?");

/***/ }),

/***/ "./src/images/pokemon-go-hd-wallpaper.jpg":
/*!************************************************!*\
  !*** ./src/images/pokemon-go-hd-wallpaper.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8830efa9ae17cffc4239.jpg\";\n\n//# sourceURL=webpack://webpack-boilerplate/./src/images/pokemon-go-hd-wallpaper.jpg?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;