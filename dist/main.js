/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/pokemon-go-hd-wallpaper.jpg */ \"./src/images/pokemon-go-hd-wallpaper.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/pok-mon-go-logo-png-30.png */ \"./src/images/pok-mon-go-logo-png-30.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  box-sizing: border-box;\\r\\n  font-family: 'Barlow', sans-serif;\\r\\n}\\r\\n\\r\\n#page-container {\\r\\n  position: relative;\\r\\n  height: 100vh;\\r\\n}\\r\\n\\r\\nmain {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  padding-bottom: 2.5rem;\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  background-attachment: fixed;\\r\\n  background-size: cover;\\r\\n}\\r\\n\\r\\n#navbar {\\r\\n  padding: 0.5rem 1rem;\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: space-around;\\r\\n  border-bottom: 1px solid black;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n#logo {\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\r\\n  background-size: contain;\\r\\n  min-height: 3rem;\\r\\n  min-width: 3rem;\\r\\n}\\r\\n\\r\\n#navbar-links {\\r\\n  list-style: none;\\r\\n  display: flex;\\r\\n  gap: 1rem;\\r\\n  font-size: 1.25rem;\\r\\n}\\r\\n\\r\\n#title {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  padding: 0.5rem;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n#footer {\\r\\n  position: fixed;\\r\\n  bottom: 0;\\r\\n  border-top: 1px solid black;\\r\\n  width: 100%;\\r\\n  padding: 0.5rem 1rem;\\r\\n  height: 2.5rem;\\r\\n  background-color: white;\\r\\n}\\r\\n\\r\\n/* POKEMON CARDS */\\r\\n#main-container {\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  justify-content: space-around;\\r\\n}\\r\\n\\r\\n.PokeCard {\\r\\n  background-color: burlywood;\\r\\n  margin: 6px;\\r\\n  width: 80%;\\r\\n  border: 1px solid black;\\r\\n  border-radius: 0.5rem;\\r\\n}\\r\\n\\r\\n.header {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  padding: 0.5rem;\\r\\n  align-items: baseline;\\r\\n}\\r\\n\\r\\n.id {\\r\\n  font-size: 0.75rem;\\r\\n  font-weight: bold;\\r\\n  padding-right: 0.5rem;\\r\\n}\\r\\n\\r\\n.picDiv,\\r\\n.intro {\\r\\n  border: 1px solid black;\\r\\n}\\r\\n\\r\\n.picDiv {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  background-color: rgb(255, 255, 255, 0.7);\\r\\n  border-radius: 0.5rem;\\r\\n  margin: 0 0.5rem;\\r\\n}\\r\\n\\r\\n.intro {\\r\\n  min-height: 6rem;\\r\\n  margin: 1rem;\\r\\n  padding: 0.5rem;\\r\\n  background-color: rgb(255, 255, 255, 0.5);\\r\\n  border-radius: 0.5rem;\\r\\n}\\r\\n\\r\\n.buttons {\\r\\n  display: flex;\\r\\n  justify-content: space-around;\\r\\n  padding-bottom: 0.5rem;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  padding: 0.5rem;\\r\\n  border-radius: 0.5rem;\\r\\n}\\r\\n\\r\\nbutton:hover {\\r\\n  cursor: pointer;\\r\\n  transform: translateY(-1px);\\r\\n  box-shadow: 1px 1px rgb(71, 71, 71);\\r\\n}\\r\\n\\r\\nbutton:active {\\r\\n  cursor: pointer;\\r\\n  transform: translateY(1px);\\r\\n  box-shadow: 1px 1px rgb(71, 71, 71);\\r\\n}\\r\\n\\r\\n.popupCard {\\r\\n  position: fixed;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  top: 10%;\\r\\n  left: 2%;\\r\\n  z-index: 999;\\r\\n  height: 80%;\\r\\n  width: 95%;\\r\\n  background-color: white;\\r\\n  border: 3px solid black;\\r\\n  border-radius: 1rem;\\r\\n}\\r\\n\\r\\n.left-side, .comment-section {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.popupPoke {\\r\\n  margin: 1rem;\\r\\n  border: 1px solid black;\\r\\n  border-radius: 0.5rem;\\r\\n}\\r\\n\\r\\n.comment-section {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n#comment-header {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  padding: 0.5rem;\\r\\n}\\r\\n\\r\\n.new-comments {\\r\\n  padding: 0.5rem;\\r\\n}\\r\\n\\r\\n.comment-area {\\r\\n  min-height: 60%;\\r\\n  border: 1px solid black;\\r\\n  margin: 0.5rem;\\r\\n  border-radius: 0.5rem;\\r\\n}\\r\\n\\r\\n.new-comments input {\\r\\n  width: 100%;\\r\\n  padding: 0.5rem;\\r\\n  margin-bottom: 1rem;\\r\\n  border-radius: 0.5rem;\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 321px) {\\r\\n  .PokeCard {\\r\\n    width: 60%;\\r\\n  }\\r\\n\\r\\n  #navbar {\\r\\n    padding: 0.5rem 2rem;\\r\\n  }\\r\\n\\r\\n  #title {\\r\\n    font-size: 3rem;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 769px) {\\r\\n  .PokeCard {\\r\\n    width: 25%;\\r\\n  }\\r\\n\\r\\n  .popupCard {\\r\\n    flex-direction: row;\\r\\n    top: 10%;\\r\\n    left: 15%;\\r\\n    z-index: 999;\\r\\n    height: 80%;\\r\\n    width: 70%;\\r\\n  }\\r\\n  \\r\\n  .left-side, .comment-section {\\r\\n    width: 100%;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 1280px) {\\r\\n  .PokeCard {\\r\\n    width: 20%;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 1600px) {\\r\\n  .PokeCard {\\r\\n    width: 16%;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_mainOutput_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/mainOutput.js */ \"./src/modules/mainOutput.js\");\n/* harmony import */ var _modules_mainOutput_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_mainOutput_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modules_popupCD_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/popupCD.js */ \"./src/modules/popupCD.js\");\n\n\n\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/index.js?");

/***/ }),

/***/ "./src/modules/addCommentAPI.js":
/*!**************************************!*\
  !*** ./src/modules/addCommentAPI.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst postComment = async (id, name, commentInput, date) => {\n  if (name.length > 0 && commentInput.length > 0) {\n    await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/q43Np4AB1ka0fqpIWSXs/comments/',\n      {\n        method: 'POST',\n        body: JSON.stringify(\n          {\n            item_id: id,\n            username: name,\n            comment: commentInput,\n            creation_date: date,\n          },\n        ),\n        headers: {\n          'Content-Type': 'application/json',\n        },\n      });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postComment);\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/addCommentAPI.js?");

/***/ }),

/***/ "./src/modules/getCommentAPI.js":
/*!**************************************!*\
  !*** ./src/modules/getCommentAPI.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getComment = async (id) => {\n  const comment = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/q43Np4AB1ka0fqpIWSXs/comments/?item_id=${id}`);\n  if (comment.status === 200) {\n    const commentJSON = await comment.json();\n    return commentJSON;\n  }\n  return [];\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getComment);\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/getCommentAPI.js?");

/***/ }),

/***/ "./src/modules/mainOutput.js":
/*!***********************************!*\
  !*** ./src/modules/mainOutput.js ***!
  \***********************************/
/***/ (() => {

eval("const codex = document.querySelector('#main-container');\n\nconst retrieve = (item) => {\n  const card = document.createElement('div'); // Card Div\n  card.setAttribute('class', 'PokeCard');\n  codex.appendChild(card);\n\n  const header = document.createElement('div');\n  header.classList.add('header');\n  card.appendChild(header);\n\n  const pokeName = document.createElement('h3'); // Card Tittle\n  pokeName.classList.add('name');\n  pokeName.innerText = item.name;\n  header.appendChild(pokeName);\n\n  const pokeID = document.createElement('p')\n  pokeID.classList.add('id')\n  pokeID.innerText = `${item.id}`;\n  header.appendChild(pokeID);\n\n  const picDiv = document.createElement('div');\n  picDiv.setAttribute('class', 'picDiv');\n  card.appendChild(picDiv);\n\n  const picture = document.createElement('img');\n  picture.setAttribute('src', item.sprites.front_default);\n  picDiv.appendChild(picture);\n\n  const intro = document.createElement('div');\n  intro.classList.add('intro');\n  card.appendChild(intro);\n\n  const type = document.createElement('p');\n  type.innerHTML = item.types.length === 2 ? `Type: ${item.types[0].type.name}, ${item.types[1].type.name}` : `Type: ${item.types[0].type.name}`;\n  intro.appendChild(type);\n\n  const height = document.createElement('p');\n  height.innerHTML = `Height: ${item.height} '`;\n  intro.appendChild(height);\n\n  const weight = document.createElement('p');\n  weight.innerHTML = `Weight: ${item.weight} lbs`;\n  intro.appendChild(weight);\n\n  const buttonsDiv = document.createElement('div');\n  buttonsDiv.classList.add('buttons');\n  card.appendChild(buttonsDiv);\n\n  const commentBtn = document.createElement('button');\n  commentBtn.classList.add('comment');\n  commentBtn.setAttribute('type', 'button');\n  commentBtn.innerText = 'Comments';\n\n  const reserveBtn = document.createElement('button');\n  reserveBtn.innerText = 'Reserve';\n  reserveBtn.classList.add('reserve');\n  reserveBtn.setAttribute('type', 'button');\n  buttonsDiv.appendChild(commentBtn);\n  buttonsDiv.appendChild(reserveBtn);\n};\n\nfor (let i = 1; i < 152; i += 1) {\n  const link = 'https://pokeapi.co/api/v2/pokemon/';\n  const finalLink = link + i;\n  const myFunction = async () => {\n    await fetch(finalLink)\n      .then((response) => response.json())\n      .then((json) => retrieve(json))\n      .catch((err) => console.log(err));\n  };\n  myFunction();\n}\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/mainOutput.js?");

/***/ }),

/***/ "./src/modules/popupCD.js":
/*!********************************!*\
  !*** ./src/modules/popupCD.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _addCommentAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addCommentAPI.js */ \"./src/modules/addCommentAPI.js\");\n/* harmony import */ var _getCommentAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getCommentAPI.js */ \"./src/modules/getCommentAPI.js\");\n\n\n\nconst createPopup = (object) => {\n  const popupContainer = document.createElement('div');\n  popupContainer.setAttribute('class', 'popupCard');\n  const body = document.getElementById('main-container');\n  body.appendChild(popupContainer);\n\n  const leftSide = document.createElement('div');\n  leftSide.classList.add('left-side');\n  popupContainer.appendChild(leftSide);\n\n  const popupPoke = document.createElement('div');\n  popupPoke.classList.add('popupPoke');\n  leftSide.appendChild(popupPoke);\n\n  const name = document.createElement('h3');\n  name.setAttribute('class', 'name');\n  name.textContent = object.name;\n  popupPoke.appendChild(name);\n\n  const id = document.createElement('p');\n  id.classList.add('id');\n  popupPoke.appendChild(id);\n\n  const imgContainer = document.createElement('div');\n  imgContainer.classList.add('picDiv');\n  const pokemonImage = document.createElement('img');\n  pokemonImage.setAttribute('src', object.sprites.front_default);\n  pokemonImage.setAttribute('alt', 'pokemon image');\n  imgContainer.appendChild(pokemonImage);\n  popupPoke.appendChild(imgContainer);\n  \n  const intro = document.createElement('div');\n  intro.classList.add('intro');\n  popupPoke.appendChild(intro);\n  const info = document.createElement('p');\n  info.classList.add('info');\n  info.textContent = `Type: \n  Height: ${object.height}\n  weight: ${object.weight}\n  `\n  intro.appendChild(info);\n  \n  const commentSection = document.createElement('div');\n  commentSection.classList.add('comment-section')\n  popupContainer.appendChild(commentSection);\n  \n  const commentHeader = document.createElement('div');\n  commentHeader.setAttribute('id', 'comment-header');\n  commentSection.appendChild(commentHeader);\n\n  const commentTitle = document.createElement('h3');\n  commentTitle.textContent = 'COMMENTS';\n  commentHeader.appendChild(commentTitle); \n\n  const closeBtn = document.createElement('button');\n  closeBtn.textContent = 'X';\n  closeBtn.setAttribute('id', 'close-btn');\n  commentHeader.appendChild(closeBtn);\n\n  const commentArea = document.createElement('div');\n  commentArea.classList.add('comment-area');\n  commentSection.appendChild(commentArea);\n\n  const newComments = document.createElement('div');\n  newComments.classList.add('new-comments');\n  commentSection.appendChild(newComments);\n\n  const addComments = document.createElement('h3')\n  addComments.textContent = 'Add a comment';\n  newComments.appendChild(addComments);\n\n  const input1 = document.createElement('input');\n  input1.setAttribute('type', 'text');\n  input1.setAttribute('placeholder', 'your name');\n  newComments.appendChild(input1);\n\n  const input2 = document.createElement('input');\n  input2.setAttribute('type', 'text');\n  input2.setAttribute('placeholder', 'your insigths');\n  newComments.appendChild(input2);\n\n  const submitBtn = document.createElement('button')\n  submitBtn.setAttribute('type', 'submit');\n  submitBtn.setAttribute('id', 'submit-button')\n  submitBtn.textContent = 'Submit';\n  newComments.appendChild(submitBtn);\n\n  closeBtn.addEventListener('click', (e) => {\n    e.target.parentElement.parentElement.parentElement.remove();\n  });\n\n  const displayComments = async () => {\n    const recentComments= await (0,_getCommentAPI_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(object.id);\n    await recentComments.reverse();\n    const newComment = document.createElement('div');\n    recentComments.forEach((comment) => {\n      newComment.innerHTML = `<p class=\"input-date\">${comment.creation_date}</p><p class=\"comment-name\">${comment.username}</p><p class=\"comment-msg\">${comment.comment}</p>`;\n      commentArea.appendChild(newComment);\n    });\n  };\n\n  displayComments();\n  \n  submitBtn.addEventListener('click', async (e) => {\n    e.preventDefault();\n    await (0,_addCommentAPI_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(object.id, input1.value, input2.value);\n    await displayComments();\n    input1.value = '';\n    input2.value = '';\n  })\n\n};\n\n\n\nconst reservationPopup = (name) => {\n  const link = 'https://pokeapi.co/api/v2/pokemon/';\n  const newLink = link + name;\n  const pokemonObject = async () => {\n    await fetch(newLink)\n      .then((response) => response.json())\n      .then((json) => createPopup(json));\n  };\n  pokemonObject();\n};\n\nwindow.onload = () => {\n  const btn = document.querySelectorAll('.comment');\n  btn.forEach((btn) => {\n    btn.addEventListener('click', (e) => {\n      const name = e.target.parentElement.parentElement.children[0].children[0].innerHTML\n      reservationPopup(name);\n    });\n  });\n};\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/popupCD.js?");

/***/ }),

/***/ "./src/images/pok-mon-go-logo-png-30.png":
/*!***********************************************!*\
  !*** ./src/images/pok-mon-go-logo-png-30.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"a4a49d7a315b725de60c.png\";\n\n//# sourceURL=webpack://webpack-boilerplate/./src/images/pok-mon-go-logo-png-30.png?");

/***/ }),

/***/ "./src/images/pokemon-go-hd-wallpaper.jpg":
/*!************************************************!*\
  !*** ./src/images/pokemon-go-hd-wallpaper.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
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