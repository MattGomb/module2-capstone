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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/pokemon-go-hd-wallpaper.jpg */ \"./src/images/pokemon-go-hd-wallpaper.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/pok-mon-go-logo-png-30.png */ \"./src/images/pok-mon-go-logo-png-30.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  box-sizing: border-box;\\r\\n  font-family: 'Barlow', sans-serif;\\r\\n}\\r\\n\\r\\na {\\r\\n  color: black;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\na:hover {\\r\\n  background-color: rgb(71, 71, 71);\\r\\n  border-radius: 0.25rem;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\na:active {\\r\\n  background-color: rgb(200, 200, 200);\\r\\n  color: black;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  background-color: rgb(255, 255, 255, 0.8);\\r\\n  padding: 0.3rem;\\r\\n  margin: 5px;\\r\\n  border-radius: 0.5rem;\\r\\n}\\r\\n\\r\\nmain {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  padding-bottom: 2.5rem;\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  background-attachment: fixed;\\r\\n  background-size: cover;\\r\\n}\\r\\n\\r\\n#navbar {\\r\\n  padding: 0.5rem 1rem;\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: space-around;\\r\\n  border-bottom: 1px solid black;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n#logo {\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\r\\n  background-size: contain;\\r\\n  min-height: 3rem;\\r\\n  min-width: 3rem;\\r\\n}\\r\\n\\r\\n#navbar-links {\\r\\n  list-style: none;\\r\\n  display: flex;\\r\\n  gap: 1rem;\\r\\n  font-size: 1.25rem;\\r\\n}\\r\\n\\r\\n#title {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  padding: 0.5rem;\\r\\n  color: white;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n#footer {\\r\\n  position: fixed;\\r\\n  bottom: 0;\\r\\n  border-top: 1px solid black;\\r\\n  width: 100%;\\r\\n  padding: 0.5rem 1rem;\\r\\n  height: 2.5rem;\\r\\n  background-color: white;\\r\\n}\\r\\n\\r\\n/* POKEMON CARDS */\\r\\n#main-container {\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  justify-content: space-around;\\r\\n}\\r\\n\\r\\n.PokeCard {\\r\\n  background-color: burlywood;\\r\\n  margin: 6px;\\r\\n  width: 80%;\\r\\n  border: 1px solid black;\\r\\n  border-radius: 0.5rem;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.header {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  padding: 0.5rem;\\r\\n  align-items: baseline;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.popup-card .header {\\r\\n  margin-bottom: 2rem;\\r\\n}\\r\\n\\r\\n.id {\\r\\n  font-size: 0.75rem;\\r\\n  font-weight: bold;\\r\\n  padding-right: 0.5rem;\\r\\n}\\r\\n\\r\\n.picDiv,\\r\\n.intro {\\r\\n  border: 1px solid black;\\r\\n  width: 90%;\\r\\n}\\r\\n\\r\\n.picDiv {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  background-color: rgb(255, 255, 255, 0.7);\\r\\n  border-radius: 0.5rem;\\r\\n  margin: 0 0.5rem;\\r\\n  margin-top: 12px;\\r\\n  height: 40%;\\r\\n}\\r\\n\\r\\n.intro {\\r\\n  min-height: 5rem;\\r\\n  margin: 1rem;\\r\\n  margin-bottom: 12px;\\r\\n  padding: 0.5rem;\\r\\n  background-color: rgb(255, 255, 255, 0.5);\\r\\n  border-radius: 0.5rem;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.pokemon-data .intro {\\r\\n  align-items: center;\\r\\n  gap: 1rem;\\r\\n}\\r\\n\\r\\n.buttons {\\r\\n  display: flex;\\r\\n  justify-content: space-around;\\r\\n  padding-bottom: 0.3rem;\\r\\n}\\r\\n\\r\\nbutton:hover {\\r\\n  cursor: pointer;\\r\\n  transform: translateY(-1px);\\r\\n  box-shadow: 1px 1px rgb(71, 71, 71);\\r\\n}\\r\\n\\r\\nbutton:active {\\r\\n  cursor: pointer;\\r\\n  transform: translateY(1px);\\r\\n  box-shadow: 1px 1px rgb(71, 71, 71);\\r\\n}\\r\\n\\r\\n.pokemon-data {\\r\\n  background-color: burlywood;\\r\\n  margin: auto;\\r\\n  margin-top: 24px;\\r\\n  margin-bottom: 24px;\\r\\n  border: 1px solid black;\\r\\n  border-radius: 0.5rem;\\r\\n  height: 80%;\\r\\n  width: 80%;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.comment-section {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n#comment-header {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  padding: 0.5rem;\\r\\n}\\r\\n\\r\\n.new-comments {\\r\\n  padding: 0.5rem;\\r\\n}\\r\\n\\r\\n#comment-area {\\r\\n  border: 1px solid black;\\r\\n  margin: 0.5rem;\\r\\n  border-radius: 0.5rem;\\r\\n  overflow-y: scroll;\\r\\n  height: 10rem;\\r\\n}\\r\\n\\r\\ninput {\\r\\n  width: 90%;\\r\\n  height: 24px;\\r\\n  margin-top: 5px;\\r\\n  padding-left: 5px;\\r\\n  border-radius: 0.5rem;\\r\\n}\\r\\n\\r\\n.new-comments input {\\r\\n  width: 100%;\\r\\n  margin-bottom: 1rem;\\r\\n  border-radius: 0.5rem;\\r\\n}\\r\\n\\r\\n.popup-card,\\r\\n.popup-info,\\r\\n.left-side,\\r\\n.reservation-container,\\r\\n.reservation-form {\\r\\n  border-radius: 1rem;\\r\\n}\\r\\n\\r\\n.popup-card {\\r\\n  position: fixed;\\r\\n  top: 0%;\\r\\n  bottom: 0%;\\r\\n  left: 0%;\\r\\n  right: 0%;\\r\\n  background-color: white;\\r\\n  border: 2px solid black;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.pokemon-name {\\r\\n  font-size: 2rem;\\r\\n  color: black;\\r\\n  font-weight: bold;\\r\\n  width: 100%;\\r\\n  text-align: center;\\r\\n  margin-top: 12px;\\r\\n}\\r\\n\\r\\n.popup-info {\\r\\n  border: 2px solid black;\\r\\n  margin-top: 12px;\\r\\n  height: 90%;\\r\\n  width: 90%;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.reservation-container {\\r\\n  width: 100%;\\r\\n  height: 50%;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.left-side {\\r\\n  width: 100%;\\r\\n  height: 50%;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.pokemon-types {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.type {\\r\\n  list-style: none;\\r\\n  border: 1px solid black;\\r\\n  padding: 5px;\\r\\n  margin-left: 5px;\\r\\n  margin-right: 5px;\\r\\n}\\r\\n\\r\\n.previous-reservations {\\r\\n  border: 2px solid black;\\r\\n  height: 40%;\\r\\n  width: 90%;\\r\\n  margin-top: 12px;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: flex-start;\\r\\n  text-align: center;\\r\\n  color: black;\\r\\n  overflow-y: scroll;\\r\\n}\\r\\n\\r\\ntable {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\nthead {\\r\\n  position: sticky;\\r\\n  top: 0;\\r\\n  height: 24px;\\r\\n  border: 1px solid black;\\r\\n  background-color: black;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\ntbody {\\r\\n  color: black;\\r\\n  padding-top: 24px;\\r\\n}\\r\\n\\r\\ntd {\\r\\n  border: 1px solid black;\\r\\n  height: 36px;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.reservation-form {\\r\\n  height: 50%;\\r\\n  width: 90%;\\r\\n  margin-top: 12px;\\r\\n  margin-bottom: 12px;\\r\\n  border: 2px solid black;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.submit-reservation {\\r\\n  margin-top: 12px;\\r\\n}\\r\\n\\r\\n.close-btn {\\r\\n  border: 2px solid black;\\r\\n  height: 20px;\\r\\n  width: 20px;\\r\\n  color: black;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  position: absolute;\\r\\n  top: 12px;\\r\\n  right: 12px;\\r\\n  cursor: pointer;\\r\\n  transition: all 0.5s ease-in-out;\\r\\n}\\r\\n\\r\\n.close-btn:hover {\\r\\n  transform: scale(1.1);\\r\\n  color: black;\\r\\n}\\r\\n\\r\\n.reservation-title {\\r\\n  color: black;\\r\\n  margin-top: 12px;\\r\\n}\\r\\n\\r\\n.comment-name,\\r\\n.comment-msg,\\r\\n.input-date {\\r\\n  padding: 0.25rem;\\r\\n}\\r\\n\\r\\n.comment-name {\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.comment-msg {\\r\\n  margin-bottom: 0.25rem;\\r\\n}\\r\\n\\r\\n.input-date {\\r\\n  background-color: rgb(200, 200, 200);\\r\\n  border-radius: 0.5rem;\\r\\n  width: fit-content;\\r\\n  padding: 0.25rem;\\r\\n  color: white;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.bottom-div {\\r\\n  display: flex;\\r\\n  flex-wrap: nowrap;\\r\\n  justify-content: space-around;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n#counter {\\r\\n  font-size: 0.75rem;\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 321px) {\\r\\n  .PokeCard {\\r\\n    width: 60%;\\r\\n  }\\r\\n\\r\\n  #navbar {\\r\\n    padding: 0.5rem 2rem;\\r\\n  }\\r\\n\\r\\n  #title {\\r\\n    font-size: 3rem;\\r\\n  }\\r\\n\\r\\n  .popup-card {\\r\\n    left: 10%;\\r\\n    right: 10%;\\r\\n    width: 80%;\\r\\n    align-items: center;\\r\\n    background-image: radial-gradient(circle farthest-side, #fceabb, burlywood);\\r\\n  }\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 769px) {\\r\\n  .PokeCard {\\r\\n    width: 25%;\\r\\n  }\\r\\n\\r\\n  .comment-section {\\r\\n    width: 50%;\\r\\n    flex-direction: column;\\r\\n  }\\r\\n\\r\\n  #comment-area {\\r\\n    height: 70%;\\r\\n  }\\r\\n\\r\\n  .popupCard {\\r\\n    top: 10%;\\r\\n    left: 15%;\\r\\n    z-index: 999;\\r\\n    height: 80%;\\r\\n    width: 70%;\\r\\n  }\\r\\n\\r\\n  .reservation-info {\\r\\n    height: 80%;\\r\\n    margin-top: 24px;\\r\\n  }\\r\\n\\r\\n  .reservation-container {\\r\\n    width: 50%;\\r\\n    height: 100%;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    flex-direction: column;\\r\\n  }\\r\\n\\r\\n  .left-side {\\r\\n    width: 50%;\\r\\n    height: 100%;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n  }\\r\\n\\r\\n  .close-btn {\\r\\n    top: 24px;\\r\\n    right: 24px;\\r\\n  }\\r\\n\\r\\n  .popup-info {\\r\\n    flex-direction: row;\\r\\n    height: 80%;\\r\\n    margin-top: 24px;\\r\\n    background-color: rgb(255, 255, 255, 0.7);\\r\\n  }\\r\\n\\r\\n  .popup-card {\\r\\n    top: 10%;\\r\\n    bottom: 10%;\\r\\n    left: 10%;\\r\\n    right: 10%;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 1280px) {\\r\\n  .PokeCard {\\r\\n    width: 20%;\\r\\n  }\\r\\n\\r\\n  .pokemon-data {\\r\\n    width: 60%;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 1600px) {\\r\\n  .PokeCard {\\r\\n    width: 16%;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_mainOutput_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/mainOutput.js */ \"./src/modules/mainOutput.js\");\n/* harmony import */ var _modules_reservation_popup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/reservation_popup.js */ \"./src/modules/reservation_popup.js\");\n/* harmony import */ var _modules_popupCD_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/popupCD.js */ \"./src/modules/popupCD.js\");\n/* harmony import */ var _modules_commentCounter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/commentCounter.js */ \"./src/modules/commentCounter.js\");\n\n\n\n\n\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/index.js?");

/***/ }),

/***/ "./src/modules/addCommentAPI.js":
/*!**************************************!*\
  !*** ./src/modules/addCommentAPI.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable linebreak-style */\nconst postComment = async (id, name, commentInput) => {\n  if (name.length > 0 && commentInput.length > 0) {\n    await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/q43Np4AB1ka0fqpIWSXs/comments/', {\n      method: 'POST',\n      body: JSON.stringify(\n        {\n          item_id: id,\n          username: name,\n          comment: commentInput,\n        },\n      ),\n      headers: {\n        'Content-Type': 'application/json',\n      },\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postComment);\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/addCommentAPI.js?");

/***/ }),

/***/ "./src/modules/add_reservation.js":
/*!****************************************!*\
  !*** ./src/modules/add_reservation.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable linebreak-style */\n\nconst postReservation = async (id, name, dateStart, dateEnd) => {\n  if (name.length > 0 && dateStart.length > 0 && dateEnd.length > 0) {\n    await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/q43Np4AB1ka0fqpIWSXs/reservations/',\n      {\n        method: 'POST',\n        body: JSON.stringify(\n          {\n            item_id: id,\n            username: name,\n            date_start: dateStart,\n            date_end: dateEnd,\n          },\n        ),\n        headers: {\n          'Content-Type': 'application/json',\n        },\n      });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postReservation);\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/add_reservation.js?");

/***/ }),

/***/ "./src/modules/cardsCounter.js":
/*!*************************************!*\
  !*** ./src/modules/cardsCounter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst cardsNumber = (parameter) => {\n  const cardCounter = document.getElementsByClassName(parameter).length;\n\n  const cardsResult = document.getElementById('title');\n\n  cardsResult.textContent = `PokeCodex (${cardCounter})`;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cardsNumber);\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/cardsCounter.js?");

/***/ }),

/***/ "./src/modules/commentCounter.js":
/*!***************************************!*\
  !*** ./src/modules/commentCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentCounter1 = (classCount, append) => {\n  const counter = classCount.length;\n  const counterText = document.createElement('p');\n  counterText.setAttribute('id', 'counter');\n  counterText.textContent = `Total comments: ${counter}`;\n  append.appendChild(counterText);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentCounter1);\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/commentCounter.js?");

/***/ }),

/***/ "./src/modules/getCommentAPI.js":
/*!**************************************!*\
  !*** ./src/modules/getCommentAPI.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable linebreak-style */\nconst getComment = async (id) => {\n  const comment = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/q43Np4AB1ka0fqpIWSXs/comments?item_id=${id}`);\n  if (comment.status === 200) {\n    const commentJSON = await comment.json();\n    return commentJSON;\n  }\n  return [];\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getComment);\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/getCommentAPI.js?");

/***/ }),

/***/ "./src/modules/get_reservation.js":
/*!****************************************!*\
  !*** ./src/modules/get_reservation.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable linebreak-style */\nconst getReservation = async (id) => {\n  const reservation = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/q43Np4AB1ka0fqpIWSXs/reservations/?item_id=${id}`);\n  if (reservation.status === 200) {\n    const reservationJSON = await reservation.json();\n    return reservationJSON;\n  }\n  return [];\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getReservation);\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/get_reservation.js?");

/***/ }),

/***/ "./src/modules/likesCounter.js":
/*!*************************************!*\
  !*** ./src/modules/likesCounter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ liked)\n/* harmony export */ });\nfunction liked(item) {\n  document.getElementById(item).addEventListener('click', () => {\n    const data = {\n      item_id: item,\n    };\n\n    fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/q43Np4AB1ka0fqpIWSXs/likes/', {\n      method: 'POST',\n      body: JSON.stringify(data),\n      headers: { 'Content-type': 'application/json; charset=UTF-8' },\n    })\n\n      .then((response) => response.json());\n\n    fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/q43Np4AB1ka0fqpIWSXs/likes/')\n      .then((response) => response.json())\n      .then((json) => {\n        const pokeLikes = json;\n\n        for (let i = 0; i < pokeLikes.length; i += 1) {\n          if (pokeLikes[i].item_id === item) {\n            const pokeConst = `likes${item}`;\n            const pokeNumber = document.getElementById(pokeConst);\n            pokeNumber.textContent = pokeLikes[i].likes;\n          }\n        }\n      });\n  });\n}\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/likesCounter.js?");

/***/ }),

/***/ "./src/modules/mainOutput.js":
/*!***********************************!*\
  !*** ./src/modules/mainOutput.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _likesCounter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./likesCounter.js */ \"./src/modules/likesCounter.js\");\n/* harmony import */ var _cardsCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardsCounter.js */ \"./src/modules/cardsCounter.js\");\n/* eslint-disable linebreak-style */\n\n\n\nconst codex = document.querySelector('#main-container');\n\nconst newLikes = (item) => {\n  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/q43Np4AB1ka0fqpIWSXs/likes/')\n    .then((response) => response.json())\n    .then((json) => {\n      const pokeLikes = json;\n\n      for (let i = 0; i < pokeLikes.length; i += 1) {\n        if (pokeLikes[i].item_id === item) {\n          const pokeConst = `likes${item}`;\n          const pokeNumber = document.getElementById(pokeConst);\n          pokeNumber.textContent = pokeLikes[i].likes;\n        }\n      }\n    });\n};\n\nconst retrieve = (item) => {\n  const card = document.createElement('div');\n  card.setAttribute('class', 'PokeCard');\n  codex.appendChild(card);\n\n  const header = document.createElement('div');\n  header.classList.add('header');\n  card.appendChild(header);\n\n  const pokeName = document.createElement('h3');\n  pokeName.classList.add('name');\n  pokeName.innerText = item.name;\n  header.appendChild(pokeName);\n\n  const pokeID = document.createElement('p');\n  pokeID.classList.add('id');\n  pokeID.innerText = `${item.id}`;\n  header.appendChild(pokeID);\n\n  const picDiv = document.createElement('div');\n  picDiv.setAttribute('class', 'picDiv');\n  card.appendChild(picDiv);\n\n  const picture = document.createElement('img');\n  picture.setAttribute('src', item.sprites.front_default);\n  picDiv.appendChild(picture);\n\n  const intro = document.createElement('div');\n  intro.classList.add('intro');\n  card.appendChild(intro);\n\n  const type = document.createElement('p');\n  type.innerHTML = item.types.length === 2 ? `Type: ${item.types[0].type.name}, ${item.types[1].type.name}` : `Type: ${item.types[0].type.name}`;\n  intro.appendChild(type);\n\n  const height = document.createElement('p');\n  height.innerHTML = `Height: ${item.height} '`;\n  intro.appendChild(height);\n\n  const weight = document.createElement('p');\n  weight.innerHTML = `Weight: ${item.weight} lbs`;\n  intro.appendChild(weight);\n\n  const buttonsDiv = document.createElement('div');\n  buttonsDiv.classList.add('buttons');\n  card.appendChild(buttonsDiv);\n\n  const commentBtn = document.createElement('button');\n  commentBtn.classList.add('comment');\n  commentBtn.setAttribute('type', 'button');\n  commentBtn.innerText = 'Comments';\n\n  const reserveBtn = document.createElement('button');\n  reserveBtn.innerText = 'Reserve';\n  reserveBtn.classList.add('reserve');\n  reserveBtn.setAttribute('type', 'button');\n  buttonsDiv.appendChild(commentBtn);\n  buttonsDiv.appendChild(reserveBtn);\n\n  const likeButton = document.createElement('button');\n  likeButton.setAttribute('id', item.name);\n  likeButton.innerHTML = 'Like!';\n  card.appendChild(likeButton);\n\n  const likesNumber = document.createElement('p');\n  likesNumber.setAttribute('id', `likes${item.name}`);\n  likesNumber.innerHTML = 0;\n  card.appendChild(likesNumber);\n\n  (0,_likesCounter_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(item.name);\n  newLikes(item.name);\n  (0,_cardsCounter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('PokeCard');\n};\n\nfor (let i = 1; i < 152; i += 1) {\n  const link = 'https://pokeapi.co/api/v2/pokemon/';\n  const finalLink = link + i;\n  const myFunction = async () => {\n    await fetch(finalLink)\n      .then((response) => response.json())\n      .then((json) => retrieve(json));\n  };\n  myFunction();\n}\n\n/*\n    const myFunction = async () => {\n        await fetch('https://pokeapi.co/api/v2/pokemon/1/')\n       .then((response) => response.json())\n       .then((json) => console.log(json))\n       .catch((err) => console.log(err));\n       }\n       myFunction()\n       */\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/mainOutput.js?");

/***/ }),

/***/ "./src/modules/popupCD.js":
/*!********************************!*\
  !*** ./src/modules/popupCD.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _addCommentAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addCommentAPI.js */ \"./src/modules/addCommentAPI.js\");\n/* harmony import */ var _getCommentAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getCommentAPI.js */ \"./src/modules/getCommentAPI.js\");\n/* harmony import */ var _commentCounter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commentCounter.js */ \"./src/modules/commentCounter.js\");\n/* eslint-disable linebreak-style */\n\n\n\n\nconst createPopup = (object) => {\n  const popupContainer = document.createElement('div');\n  popupContainer.setAttribute('class', 'popup-card');\n  const body = document.querySelector('body');\n  body.appendChild(popupContainer);\n\n  const name = document.createElement('h1');\n  name.setAttribute('class', 'pokemon-name');\n  name.textContent = object.name.toUpperCase();\n  popupContainer.appendChild(name);\n\n  const popupInfo = document.createElement('div');\n  popupInfo.setAttribute('class', 'popup-info');\n  popupContainer.appendChild(popupInfo);\n\n  const leftSide = document.createElement('div');\n  leftSide.classList.add('left-side');\n  popupInfo.appendChild(leftSide);\n\n  const pokemonData = document.createElement('div');\n  pokemonData.classList.add('pokemon-data');\n  leftSide.appendChild(pokemonData);\n\n  const header = document.createElement('div');\n  header.classList.add('header');\n  pokemonData.appendChild(header);\n\n  const pokeName = document.createElement('h3');\n  pokeName.classList.add('name');\n  pokeName.innerText = object.name;\n  header.appendChild(pokeName);\n\n  const pokeID = document.createElement('p');\n  pokeID.classList.add('id');\n  pokeID.innerText = `${object.id}`;\n  header.appendChild(pokeID);\n\n  const imgContainer = document.createElement('div');\n  imgContainer.classList.add('picDiv');\n  const pokemonImage = document.createElement('img');\n  pokemonImage.setAttribute('src', object.sprites.front_default);\n  pokemonImage.setAttribute('alt', 'pokemon image');\n  imgContainer.appendChild(pokemonImage);\n  pokemonData.appendChild(imgContainer);\n\n  const intro = document.createElement('div');\n  intro.classList.add('intro');\n  pokemonData.appendChild(intro);\n  const info = document.createElement('p');\n  info.classList.add('info');\n  info.textContent = ` \n  Height: ${object.height}\n  weight: ${object.weight}\n  `;\n  intro.appendChild(info);\n\n  const pokemonTypes = object.types;\n  const types = document.createElement('ul');\n  types.classList.add('pokemon-types');\n\n  pokemonTypes.forEach((type) => {\n    const li = document.createElement('li');\n    li.textContent = type.type.name;\n    li.classList.add('type');\n    li.classList.add(type.type.name);\n    types.appendChild(li);\n  });\n\n  intro.appendChild(types);\n\n  const commentSection = document.createElement('div');\n  commentSection.classList.add('comment-section');\n  popupInfo.appendChild(commentSection);\n\n  const commentHeader = document.createElement('div');\n  commentHeader.setAttribute('id', 'comment-header');\n  commentSection.appendChild(commentHeader);\n\n  const commentTitle = document.createElement('h3');\n  commentTitle.textContent = 'COMMENTS';\n  commentHeader.appendChild(commentTitle);\n\n  const closeBtn = document.createElement('button');\n  closeBtn.textContent = 'X';\n  closeBtn.setAttribute('class', 'close-btn');\n  popupContainer.appendChild(closeBtn);\n\n  const commentArea = document.createElement('div');\n  commentArea.setAttribute('id', 'comment-area');\n  commentSection.appendChild(commentArea);\n\n  const newComments = document.createElement('div');\n  newComments.classList.add('new-comments');\n  commentSection.appendChild(newComments);\n\n  const addComments = document.createElement('h3');\n  addComments.textContent = 'Add a comment';\n  newComments.appendChild(addComments);\n\n  const input1 = document.createElement('input');\n  input1.setAttribute('type', 'text');\n  input1.setAttribute('placeholder', 'your name');\n  newComments.appendChild(input1);\n\n  const input2 = document.createElement('input');\n  input2.setAttribute('type', 'text');\n  input2.setAttribute('placeholder', 'your insigths');\n  newComments.appendChild(input2);\n\n  const bottom = document.createElement('div');\n  bottom.classList.add('bottom-div');\n  newComments.appendChild(bottom);\n\n  const submitBtn = document.createElement('button');\n  submitBtn.setAttribute('type', 'submit');\n  submitBtn.setAttribute('id', 'submit-button');\n  submitBtn.textContent = 'Submit';\n  bottom.appendChild(submitBtn);\n\n  closeBtn.addEventListener('click', (e) => {\n    e.target.parentElement.remove();\n  });\n\n  const displayComments = async () => {\n    const recentComments = await (0,_getCommentAPI_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(object.id);\n    await recentComments.reverse();\n    recentComments.forEach((comment) => {\n      const newComment = document.createElement('div');\n      newComment.classList.add('new-comment');\n      newComment.innerHTML = `<p class=\"input-date\">${comment.creation_date}</p><p class=\"comment-name\">${comment.username}:</p><p class=\"comment-msg\">${comment.comment}</p>`;\n      commentArea.appendChild(newComment);\n    });\n    /*  const counter = document.querySelectorAll('.new-comment').length;\n    const counterText = document.createElement('p');\n    counterText.setAttribute('id', 'counter');\n    counterText.textContent = `Total comments: ${counter}`;\n    bottom.appendChild(counterText); */\n    const newComment1 = document.querySelectorAll('.new-comment');\n    (0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(newComment1, bottom);\n  };\n\n  displayComments();\n\n  submitBtn.addEventListener('click', async (e) => {\n    e.preventDefault();\n    commentArea.innerHTML = '';\n    document.querySelector('#counter').remove();\n    await (0,_addCommentAPI_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(object.id, input1.value, input2.value);\n    await displayComments();\n    input1.value = '';\n    input2.value = '';\n  });\n};\n\nconst commentsPopup = (name) => {\n  const link = 'https://pokeapi.co/api/v2/pokemon/';\n  const newLink = link + name;\n  const pokemonObject = async () => {\n    await fetch(newLink)\n      .then((response) => response.json())\n      .then((json) => createPopup(json));\n  };\n  pokemonObject();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentsPopup);\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/popupCD.js?");

/***/ }),

/***/ "./src/modules/reservation_counter.js":
/*!********************************************!*\
  !*** ./src/modules/reservation_counter.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable linebreak-style */\n\nconst reservationCounter = (classToCount, append) => {\n  const counter = classToCount.length;\n  const reservationCounter = document.createElement('h3');\n  reservationCounter.className = 'reservation-title';\n  reservationCounter.textContent = `Reservations (${counter})`;\n  append.prepend(reservationCounter);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reservationCounter);\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/reservation_counter.js?");

/***/ }),

/***/ "./src/modules/reservation_popup.js":
/*!******************************************!*\
  !*** ./src/modules/reservation_popup.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _get_reservation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get_reservation.js */ \"./src/modules/get_reservation.js\");\n/* harmony import */ var _add_reservation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add_reservation.js */ \"./src/modules/add_reservation.js\");\n/* harmony import */ var _reservation_counter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reservation_counter.js */ \"./src/modules/reservation_counter.js\");\n/* harmony import */ var _popupCD_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popupCD.js */ \"./src/modules/popupCD.js\");\n/* eslint-disable linebreak-style */\n\n\n\n\n\n// This function is created to display the information of each pokemon in a popup\n\nconst createPopup = (object) => {\n  // First I created a popup container that is going to appear when I click the button\n\n  const popupContainer = document.createElement('div');\n  popupContainer.setAttribute('class', 'popup-card');\n  const body = document.querySelector('body');\n  body.appendChild(popupContainer);\n\n  // After this I will use the name in the object to create the title of the popup\n\n  const name = document.createElement('h1');\n  name.setAttribute('class', 'pokemon-name');\n  name.textContent = object.name.toUpperCase();\n  popupContainer.appendChild(name);\n\n  // I want to create one section to contain the pokemon information and the reservation form\n\n  const popupInfo = document.createElement('div');\n  popupInfo.setAttribute('class', 'popup-info');\n  popupContainer.appendChild(popupInfo);\n\n  // After this I want to create one section to put the pokemon information\n\n  const leftSide = document.createElement('div');\n  leftSide.setAttribute('class', 'left-side');\n  popupInfo.appendChild(leftSide);\n\n  // And I want to create one section to put the reservation form\n\n  const reservationPlace = document.createElement('div');\n  reservationPlace.setAttribute('class', 'reservation-container');\n  popupInfo.appendChild(reservationPlace);\n\n  // To start with the setup of the pokemon information, I will start putting the image\n\n  const pokemonData = document.createElement('div');\n  pokemonData.classList.add('pokemon-data');\n  leftSide.appendChild(pokemonData);\n\n  const header = document.createElement('div');\n  header.classList.add('header');\n  pokemonData.appendChild(header);\n\n  const pokeName = document.createElement('h3');\n  pokeName.classList.add('name');\n  pokeName.innerText = object.name;\n  header.appendChild(pokeName);\n\n  const pokeID = document.createElement('p');\n  pokeID.classList.add('id');\n  pokeID.innerText = `${object.id}`;\n  header.appendChild(pokeID);\n\n  const imgContainer = document.createElement('div');\n  imgContainer.classList.add('picDiv');\n  const pokemonImage = document.createElement('img');\n  pokemonImage.setAttribute('src', object.sprites.front_default);\n  pokemonImage.setAttribute('alt', 'pokemon image');\n  imgContainer.appendChild(pokemonImage);\n  pokemonData.appendChild(imgContainer);\n\n  const intro = document.createElement('div');\n  intro.classList.add('intro');\n  pokemonData.appendChild(intro);\n  const info = document.createElement('p');\n  info.classList.add('info');\n  info.textContent = `\n  Height: ${object.height}\n  weight: ${object.weight}\n  `;\n  intro.appendChild(info);\n\n  // I will display the type of the pokemon\n\n  const pokemonTypes = object.types;\n  const types = document.createElement('ul');\n  types.classList.add('pokemon-types');\n\n  pokemonTypes.forEach((type) => {\n    const li = document.createElement('li');\n    li.textContent = type.type.name;\n    li.classList.add('type');\n    li.classList.add(type.type.name);\n    types.appendChild(li);\n  });\n\n  intro.appendChild(types);\n\n  // I will add the window to display previous reservations\n\n  const previousReservations = document.createElement('div');\n  previousReservations.classList.add('previous-reservations');\n  reservationPlace.appendChild(previousReservations);\n\n  // I will add a new div where I'll put the form\n\n  const reservationForm = document.createElement('form');\n  reservationForm.classList.add('reservation-form');\n  reservationPlace.appendChild(reservationForm);\n\n  // I add all the inputs fields\n\n  reservationForm.innerHTML = '<input type=\"text\" class=\"name-input\" placeholder=\"Your name\" />'\n  + '<input type=\"date\" class=\"date-start-input\" />'\n  + '<input type=\"date\" class=\"date-end-input\" />'\n  + '<button type=\"submit\" class=\"submit-reservation\">Submit</button>';\n\n  // This part is to add the close button\n\n  const closeButton = document.createElement('button');\n  closeButton.setAttribute('type', 'button');\n  closeButton.className = 'close-btn';\n  closeButton.innerHTML = 'X';\n  popupContainer.appendChild(closeButton);\n\n  closeButton.addEventListener('click', (e) => {\n    e.target.parentElement.remove();\n  });\n\n  // I want to display the information in the recent reservation sections\n\n  const table = document.createElement('table');\n  table.className = 'reservations-table';\n  previousReservations.appendChild(table);\n\n  // I want to create the thead\n\n  const thead = document.createElement('thead');\n  thead.innerHTML = '<th>Name</th>'\n  + '<th>Start Date</th>'\n  + '<th>End Date</th>';\n\n  table.appendChild(thead);\n\n  // Now I will take the information from the Api to display it in the table\n\n  const displayReservations = async () => {\n    const recentReservations = await (0,_get_reservation_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(object.id);\n    await recentReservations.reverse();\n    const tbody = document.createElement('tbody');\n    table.appendChild(tbody);\n    recentReservations.forEach((reservation) => {\n      const tr = document.createElement('tr');\n      tr.innerHTML = `<td>${reservation.username}</td><td>${reservation.date_start}</td><td>${reservation.date_end}</td>`;\n      tr.setAttribute('class', 'reserved');\n      tbody.appendChild(tr);\n    });\n\n    // Here is the counter for the reservations\n\n    const reserved1 = document.querySelectorAll('.reserved');\n    (0,_reservation_counter_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(reserved1, reservationPlace);\n  };\n\n  displayReservations();\n\n  // Now I will create an event listener for the submit button\n\n  const submitReservation = document.querySelector('.submit-reservation');\n  const username = document.querySelector('.name-input');\n  const dateStart = document.querySelector('.date-start-input');\n  const dateEnd = document.querySelector('.date-end-input');\n\n  submitReservation.addEventListener('click', async (e) => {\n    const tbody = document.querySelector('tbody');\n    const counter = document.querySelector('.reservation-title');\n    counter.remove();\n    tbody.remove();\n    e.preventDefault();\n    await (0,_add_reservation_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(object.id, username.value, dateStart.value, dateEnd.value);\n    await displayReservations();\n    username.value = '';\n    dateStart.value = '';\n    dateEnd.value = '';\n  });\n};\n\nconst reservationPopup = (name) => {\n  // First I will acced to the information of each pokemon using his name\n\n  const link = 'https://pokeapi.co/api/v2/pokemon/';\n  const newLink = link + name;\n\n  // Now I will create an object with the information of the pokemon\n\n  const pokemonObject = async () => {\n    await fetch(newLink)\n      .then((response) => response.json())\n      .then((json) => createPopup(json));\n  };\n  pokemonObject();\n\n  // Now I will create an\n};\n\nwindow.onload = () => {\n  const btn = document.querySelectorAll('.reserve');\n  btn.forEach((btn) => {\n    btn.addEventListener('click', (e) => {\n      const name = e.target.parentElement.parentElement.firstChild.firstChild.textContent;\n      reservationPopup(name);\n    });\n  });\n\n  const btn2 = document.querySelectorAll('.comment');\n  btn2.forEach((btn) => {\n    btn.addEventListener('click', (e) => {\n      const name = e.target.parentElement.parentElement.children[0].children[0].innerHTML;\n      (0,_popupCD_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(name);\n    });\n  });\n};\n\n// GET and POST reservation functions\n\n/* postReservation(2, 'Jane', '2020-10-15', '2020-10-16'); */\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/reservation_popup.js?");

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