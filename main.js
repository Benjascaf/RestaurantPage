/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Gavency Free Regular.otf */ "./src/fonts/Gavency Free Regular.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./imgs/restaurant.jpg */ "./src/imgs/restaurant.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --black: #161616;
  --white: #fff;
  --topPageMargin: 100px;
}

@font-face {
  font-family: "Gavency";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  font-style: normal;
}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

body {
  line-height: 1.5;
}

h1,
h2,
button {
  font-family: "Gavency";
}
ol,
ul {
  list-style: none;
}

body {
  min-height: 100vh;
}

#content {
  margin-top: var(--topPageMargin);
  margin-bottom: 50px;
}

button:hover {
  cursor: pointer;
  text-decoration: underline;
}
/* Navbar astyling */
.header {
  background-color: var(--black);
  font-size: 2rem;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr;
  padding: 20px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
}

.header > ul {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.header button {
  color: var(--white);
  background: none;
  outline: none;
  border: none;
  border-right: 2px solid var(--white);
  padding-right: 30px;
  font-size: inherit;
}

.header button:last-child {
  border: none;
}

.header i {
  color: var(--white);
  font-size: 5rem;
  align-self: center;
}

/* Home page styling */
.home-page {
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 10%;
}
.top {
  color: var(--white);
  background-color: var(--black);
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 3rem;
}

.welcome {
  margin-top: 25%;
  display: flex;
  flex-direction: column;
  align-content: start;
  padding-left: 50px;
  gap: 30px;
}
.welcome button {
  color: var(--white);
  align-self: start;
  background: none;
  border-radius: 30px;
  font-size: 2rem;
  outline: none;
  border: 3px solid var(--white);
  padding: 15px 40px;
}
.top img {
  width: 90%;
}
.bottom {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  background-size: cover;
  height: 700px;
  margin-bottom: 50px;
  display: flex;
  align-items: start;
  justify-content: end;
}
.about-us {
  line-height: 1.5;
  margin-top: 20px;
  background-color: #fff;
  opacity: 0.9;
  font-size: 1.4rem;
  padding: 20px 60px;
}

.about-us h1 {
  font-weight: bold;
  font-size: 2.6rem;
}

/* for the menu page */
.menu-page {
  display: grid;
  grid-template-rows: auto 1fr;
  padding: 40px;
  gap: 40px;
}

.menu-page > h1 {
  align-self: center;
  justify-self: center;
  font-weight: bold;
  font-size: 3rem;
}

.menu-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.card {
  background-color: var(--white);
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 5px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
}

.description-container {
  display: grid;
  padding: 10px;
}

.description-container h1 {
  justify-self: center;
  font-size: 2rem;
  font-weight: bold;
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

/* Contact pages */

.contact-page {
  display: grid;
  grid-template-rows: 1fr 1fr 2fr;
  grid-template-columns: 600px;
  gap: 20px;
  margin-bottom: 50px;
  justify-content: center;
  padding: 100px;
}
.staff-info-container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr;
  gap: 20px;
}

.staff-info-container img {
  height: 100%;
}

.info {
  display: grid;
  grid-template-rows: auto auto 1fr;
}
.info h1 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: -15px;
}

.info h2 {
  font-size: 1.6rem;
  font-weight: 500;
  align-self: start;
}
.info p {
  margin-top: 20px;
  font-size: 1.4rem;
}
.location-info-container {
  display: grid;
  grid-template-rows: 1fr auto 1fr;
  gap: 10px;
}

.location-info-container > h1 {
  grid-column: 1/3;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
}

.location-info-container img {
  grid-column: 1/3;
  object-fit: cover;
}

.contact-info {
  grid-column: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 30px;
}

.contact-info h1 {
  font-size: 1.6rem;
  font-weight: 500;
}

.social-icons {
  padding: 30px;
  grid-column: 2;
  display: flex;
  flex-direction: column;
  font-size: 3rem;
  gap: 20px;
  align-items: center;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --black: #161616;\n  --white: #fff;\n  --topPageMargin: 100px;\n}\n\n@font-face {\n  font-family: \"Gavency\";\n  src: url(\"./fonts/Gavency\\ Free\\ Regular.otf\");\n  font-style: normal;\n}\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\nbody {\n  line-height: 1.5;\n}\n\nh1,\nh2,\nbutton {\n  font-family: \"Gavency\";\n}\nol,\nul {\n  list-style: none;\n}\n\nbody {\n  min-height: 100vh;\n}\n\n#content {\n  margin-top: var(--topPageMargin);\n  margin-bottom: 50px;\n}\n\nbutton:hover {\n  cursor: pointer;\n  text-decoration: underline;\n}\n/* Navbar astyling */\n.header {\n  background-color: var(--black);\n  font-size: 2rem;\n  display: grid;\n  grid-auto-flow: column;\n  grid-template-columns: 1fr 1fr;\n  padding: 20px;\n  position: fixed;\n  width: 100%;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n\n.header > ul {\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n}\n\n.header button {\n  color: var(--white);\n  background: none;\n  outline: none;\n  border: none;\n  border-right: 2px solid var(--white);\n  padding-right: 30px;\n  font-size: inherit;\n}\n\n.header button:last-child {\n  border: none;\n}\n\n.header i {\n  color: var(--white);\n  font-size: 5rem;\n  align-self: center;\n}\n\n/* Home page styling */\n.home-page {\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  gap: 10%;\n}\n.top {\n  color: var(--white);\n  background-color: var(--black);\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  font-size: 3rem;\n}\n\n.welcome {\n  margin-top: 25%;\n  display: flex;\n  flex-direction: column;\n  align-content: start;\n  padding-left: 50px;\n  gap: 30px;\n}\n.welcome button {\n  color: var(--white);\n  align-self: start;\n  background: none;\n  border-radius: 30px;\n  font-size: 2rem;\n  outline: none;\n  border: 3px solid var(--white);\n  padding: 15px 40px;\n}\n.top img {\n  width: 90%;\n}\n.bottom {\n  background: url(\"./imgs/restaurant.jpg\");\n  background-size: cover;\n  height: 700px;\n  margin-bottom: 50px;\n  display: flex;\n  align-items: start;\n  justify-content: end;\n}\n.about-us {\n  line-height: 1.5;\n  margin-top: 20px;\n  background-color: #fff;\n  opacity: 0.9;\n  font-size: 1.4rem;\n  padding: 20px 60px;\n}\n\n.about-us h1 {\n  font-weight: bold;\n  font-size: 2.6rem;\n}\n\n/* for the menu page */\n.menu-page {\n  display: grid;\n  grid-template-rows: auto 1fr;\n  padding: 40px;\n  gap: 40px;\n}\n\n.menu-page > h1 {\n  align-self: center;\n  justify-self: center;\n  font-weight: bold;\n  font-size: 3rem;\n}\n\n.menu-container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}\n\n.card {\n  background-color: var(--white);\n  display: grid;\n  grid-template-rows: auto 1fr;\n  gap: 5px;\n  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);\n}\n\n.description-container {\n  display: grid;\n  padding: 10px;\n}\n\n.description-container h1 {\n  justify-self: center;\n  font-size: 2rem;\n  font-weight: bold;\n}\n\n.card img {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n}\n\n/* Contact pages */\n\n.contact-page {\n  display: grid;\n  grid-template-rows: 1fr 1fr 2fr;\n  grid-template-columns: 600px;\n  gap: 20px;\n  margin-bottom: 50px;\n  justify-content: center;\n  padding: 100px;\n}\n.staff-info-container {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  grid-template-rows: 1fr;\n  gap: 20px;\n}\n\n.staff-info-container img {\n  height: 100%;\n}\n\n.info {\n  display: grid;\n  grid-template-rows: auto auto 1fr;\n}\n.info h1 {\n  font-size: 2rem;\n  font-weight: bold;\n  margin-bottom: -15px;\n}\n\n.info h2 {\n  font-size: 1.6rem;\n  font-weight: 500;\n  align-self: start;\n}\n.info p {\n  margin-top: 20px;\n  font-size: 1.4rem;\n}\n.location-info-container {\n  display: grid;\n  grid-template-rows: 1fr auto 1fr;\n  gap: 10px;\n}\n\n.location-info-container > h1 {\n  grid-column: 1/3;\n  text-align: center;\n  font-size: 2rem;\n  font-weight: bold;\n}\n\n.location-info-container img {\n  grid-column: 1/3;\n  object-fit: cover;\n}\n\n.contact-info {\n  grid-column: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 30px;\n}\n\n.contact-info h1 {\n  font-size: 1.6rem;\n  font-weight: 500;\n}\n\n.social-icons {\n  padding: 30px;\n  grid-column: 2;\n  display: flex;\n  flex-direction: column;\n  font-size: 3rem;\n  gap: 20px;\n  align-items: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _imgs_cook_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgs/cook.jpg */ "./src/imgs/cook.jpg");
/* harmony import */ var _imgs_manager_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/manager.jpg */ "./src/imgs/manager.jpg");
/* harmony import */ var _imgs_restaurant_outside_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgs/restaurant-outside.jpg */ "./src/imgs/restaurant-outside.jpg");




const ContactInfo = [
  {
    header: "Find Us At:",
    info: "Our Location 123",
  },
  {
    header: "Email Us:",
    info: "ourMail@imaginary.com",
  },
  {
    header: "Call Us:",
    info: "1120334456",
  },
];

const Icons = [
  "fa-brands fa-twitter",
  "fa-brands fa-facebook",
  "fa-brands fa-instagram",
];
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  const mainContainer = document.querySelector("#content");
  mainContainer.classList.add("contact-page");

  mainContainer.append(
    createStaffCard(_imgs_cook_jpg__WEBPACK_IMPORTED_MODULE_0__, "Javierr Sanchez", "Cook"),
    createStaffCard(_imgs_manager_jpg__WEBPACK_IMPORTED_MODULE_1__, "John Smith", "Manager")
  );

  mainContainer.append(createContactCard());
}

function createStaffCard(srcImage, name, occupation) {
  const container = document.createElement("div");
  container.classList.add("staff-info-container", "card");

  const staffImage = new Image();
  staffImage.src = srcImage;

  const infoContainer = document.createElement("div");
  infoContainer.classList.add("info");
  const staffName = document.createElement("h1");
  staffName.textContent = name;
  const staffOcuppation = document.createElement("h2");
  staffOcuppation.textContent = `Our ${occupation}`;
  const staffDescription = document.createElement("p");
  staffDescription.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod elit id bibendum placerat. Ut euismod aliquam nunc. Quisque";
  infoContainer.append(staffName, staffOcuppation, staffDescription);

  container.append(staffImage, infoContainer);

  return container;
}

function createContactCard() {
  const container = document.createElement("div");
  container.classList.add("location-info-container", "card");

  const contactImage = new Image();
  contactImage.src = _imgs_restaurant_outside_jpg__WEBPACK_IMPORTED_MODULE_2__;

  const mainHeader = document.createElement("h1");
  mainHeader.textContent = "Get In Touch";

  const contactInfoContainer = document.createElement("div");
  contactInfoContainer.classList.add("contact-info");
  for (let i = 0; i < ContactInfo.length; i++) {
    const contactContainer = document.createElement("div");
    const contactMethod = document.createElement("h1");
    contactMethod.textContent = ContactInfo[i].header;
    const info = document.createElement("p");
    info.textContent = ContactInfo[i].info;

    contactContainer.append(contactMethod, info);
    contactInfoContainer.append(contactContainer);
  }

  const socialIconsContainer = document.createElement("div");
  socialIconsContainer.classList.add("social-icons");
  for (let i = 0; i < Icons.length; i++) {
    const icon = document.createElement("i");
    icon.classList.add(...Icons[i].split(" "));
    socialIconsContainer.append(icon);
  }

  container.append(
    contactImage,
    mainHeader,
    contactInfoContainer,
    socialIconsContainer
  );

  return container;
}


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _imgs_mussels_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgs/mussels.jpeg */ "./src/imgs/mussels.jpeg");

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(loadMenuPage) {
  const mainContainer = document.querySelector("#content");
  mainContainer.classList.add("home-page");
  mainContainer.append(createTop(loadMenuPage), createBottom());
}

function createBottom() {
  const bottomContainer = document.createElement("div");
  bottomContainer.classList.add("bottom");
  const aboutUsContainer = document.createElement("div");
  aboutUsContainer.classList.add("about-us");
  const aboutUsHeader = document.createElement("h1");
  aboutUsHeader.textContent = "Why us?";
  const aboutUsText = document.createElement("p");
  aboutUsText.innerHTML =
    "Welcome to [Your Restaurant Name], where culinary artistry meets warm hospitality. <br/> Indulge in our exquisite cuisine meticulously crafted with <br/> the freshest ingredients, offering a delightful symphony of flavors that <br/> cater to every palate. Immerse yourself in the inviting ambiance, <br/> perfect for intimate gatherings or special occasions. Our dedicated <br/> staff ensures impeccable service, going above and beyond to create a <br/> memorable experience. Experience affordable luxury and a passion for <br/> customer satisfaction, making [Your Restaurant Name] the ultimate dining <br/> destination. Come, savor the magic; your taste buds will thank you.";

  aboutUsContainer.append(aboutUsHeader, aboutUsText);
  bottomContainer.append(aboutUsContainer);
  return bottomContainer;
}

function createTop(loadPage) {
  const topContainer = document.createElement("div");
  topContainer.classList.add("top");
  const welcomeContainer = document.createElement("div");
  welcomeContainer.classList.add("welcome");

  const welcomeMessage = document.createElement("h1");
  welcomeMessage.innerHTML =
    "Welcome to our restaurant,<br /> where delight is guaranteed";

  const menuBtn = document.createElement("button");
  menuBtn.textContent = "Menu";
  menuBtn.addEventListener("click", loadPage);

  welcomeContainer.append(welcomeMessage, menuBtn);

  const muussels = new Image();
  muussels.src = _imgs_mussels_jpeg__WEBPACK_IMPORTED_MODULE_0__;
  topContainer.append(welcomeContainer, muussels);
  return topContainer;
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _imgs_pancakes_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgs/pancakes.jpg */ "./src/imgs/pancakes.jpg");
/* harmony import */ var _imgs_french_toast_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/french-toast.jpg */ "./src/imgs/french-toast.jpg");
/* harmony import */ var _imgs_grill_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgs/grill.jpg */ "./src/imgs/grill.jpg");
/* harmony import */ var _imgs_pizza_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imgs/pizza.jpg */ "./src/imgs/pizza.jpg");
/* harmony import */ var _imgs_salad_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./imgs/salad.jpg */ "./src/imgs/salad.jpg");
/* harmony import */ var _imgs_salmon_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./imgs/salmon.jpg */ "./src/imgs/salmon.jpg");







/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  const mainContainer = document.querySelector("#content");
  mainContainer.classList.add("menu-page");

  const menuHeader = document.createElement("h1");
  menuHeader.textContent = "Our Menu";

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  fillContainer(menuContainer);

  mainContainer.append(menuHeader, menuContainer);
}

function fillContainer(container) {
  const imageSrcs = [_imgs_pancakes_jpg__WEBPACK_IMPORTED_MODULE_0__, _imgs_french_toast_jpg__WEBPACK_IMPORTED_MODULE_1__, _imgs_grill_jpg__WEBPACK_IMPORTED_MODULE_2__, _imgs_pizza_jpg__WEBPACK_IMPORTED_MODULE_3__, _imgs_salad_jpg__WEBPACK_IMPORTED_MODULE_4__, _imgs_salmon_jpg__WEBPACK_IMPORTED_MODULE_5__];
  for (let i = 0; i < 6; i++) {
    const card = document.createElement("div");
    card.classList.add("card");

    const itemImage = new Image();
    itemImage.src = imageSrcs[i];

    const descriptionContainer = document.createElement("div");
    descriptionContainer.classList.add("description-container");

    const descriptionHeader = document.createElement("h1");
    descriptionHeader.textContent = "Our food";

    const description = document.createElement("p");
    description.textContent =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod elit id bibendum placerat. Ut euismod aliquam nunc. Quisque ac velit ut nisi finibus tincidunt. In tempus neque eu dolor euismod facilisis. Sed bibendum risus et odio consequat, eget consectetur elit dictum. Aenean a metus eget orci ultricies finibus nec a odio";

    descriptionContainer.append(descriptionHeader, description);
    card.append(itemImage, descriptionContainer);

    container.append(card);
  }
}


/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(loadHomePage, loadMenuPage, loadContactPage) {
  const navBar = document.createElement("div");
  navBar.classList.add("header");

  const myIcon = document.createElement("i");
  myIcon.classList.add("fa-solid", "fa-bowl-food");

  const buttonList = document.createElement("ul");

  const homeButton = document.createElement("button");
  homeButton.textContent = "Home";
  homeButton.addEventListener("click", loadHomePage);
  buttonList.appendChild(document.createElement("li").appendChild(homeButton));

  const menuButton = document.createElement("button");
  menuButton.textContent = "Our Menu";
  menuButton.addEventListener("click", loadMenuPage);
  buttonList.appendChild(document.createElement("li").appendChild(menuButton));

  const contactButton = document.createElement("button");
  contactButton.textContent = "Contact Us";
  contactButton.addEventListener("click", loadContactPage);
  buttonList.appendChild(
    document.createElement("li").appendChild(contactButton)
  );

  navBar.append(myIcon, buttonList);

  return navBar;
}


/***/ }),

/***/ "./src/fonts/Gavency Free Regular.otf":
/*!********************************************!*\
  !*** ./src/fonts/Gavency Free Regular.otf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ea666fd52ca4ed23c4f6.otf";

/***/ }),

/***/ "./src/imgs/cook.jpg":
/*!***************************!*\
  !*** ./src/imgs/cook.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f214a0b9253846c067d1.jpg";

/***/ }),

/***/ "./src/imgs/french-toast.jpg":
/*!***********************************!*\
  !*** ./src/imgs/french-toast.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9e230ab34f6c8c04c44b.jpg";

/***/ }),

/***/ "./src/imgs/grill.jpg":
/*!****************************!*\
  !*** ./src/imgs/grill.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "528d0f6103ad7ec13602.jpg";

/***/ }),

/***/ "./src/imgs/manager.jpg":
/*!******************************!*\
  !*** ./src/imgs/manager.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9e249c7ad9a3e1f16cf8.jpg";

/***/ }),

/***/ "./src/imgs/mussels.jpeg":
/*!*******************************!*\
  !*** ./src/imgs/mussels.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "91df94580aa5f699e1d3.jpeg";

/***/ }),

/***/ "./src/imgs/pancakes.jpg":
/*!*******************************!*\
  !*** ./src/imgs/pancakes.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c787ce8dd7bf2c104e1e.jpg";

/***/ }),

/***/ "./src/imgs/pizza.jpg":
/*!****************************!*\
  !*** ./src/imgs/pizza.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f2d47d78833d0c06e370.jpg";

/***/ }),

/***/ "./src/imgs/restaurant-outside.jpg":
/*!*****************************************!*\
  !*** ./src/imgs/restaurant-outside.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dc7760348d078c89bb1f.jpg";

/***/ }),

/***/ "./src/imgs/restaurant.jpg":
/*!*********************************!*\
  !*** ./src/imgs/restaurant.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b507d796787e73745c8d.jpg";

/***/ }),

/***/ "./src/imgs/salad.jpg":
/*!****************************!*\
  !*** ./src/imgs/salad.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "533ef8d8e67467c3aebf.jpg";

/***/ }),

/***/ "./src/imgs/salmon.jpg":
/*!*****************************!*\
  !*** ./src/imgs/salmon.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4844c1404cacafb4b99c.jpg";

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _navbar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.js */ "./src/navbar.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");






const mainContainer = document.querySelector("#content");
document
  .querySelector("body")
  .insertBefore(
    (0,_navbar_js__WEBPACK_IMPORTED_MODULE_1__["default"])(loadHomePage, loadMenuPage, loadContactPage),
    mainContainer
  );

function loadHomePage() {
  clearMainContainer();
  (0,_home_js__WEBPACK_IMPORTED_MODULE_2__["default"])(loadMenuPage);
}

function loadMenuPage() {
  clearMainContainer();
  (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

function loadContactPage() {
  clearMainContainer();
  (0,_contact_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
}

function clearMainContainer() {
  const mainContainer = document.querySelector("#content");
  mainContainer.replaceChildren();
  mainContainer.classList.remove(...mainContainer.classList);
}
loadHomePage();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDZJQUFtRDtBQUMvRiw0Q0FBNEMsdUhBQXdDO0FBQ3BGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsbUNBQW1DO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8scUZBQXFGLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sT0FBTyxZQUFZLE1BQU0sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxNQUFNLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVks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Q0E7QUFDQTtBQUNBLElBQUksc0RBQU07QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFLG9EQUFJO0FBQ047O0FBRUE7QUFDQTtBQUNBLEVBQUUsb0RBQUk7QUFDTjs7QUFFQTtBQUNBO0FBQ0EsRUFBRSx1REFBTztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9HYXZlbmN5IEZyZWUgUmVndWxhci5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltZ3MvcmVzdGF1cmFudC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gIC0tYmxhY2s6ICMxNjE2MTY7XG4gIC0td2hpdGU6ICNmZmY7XG4gIC0tdG9wUGFnZU1hcmdpbjogMTAwcHg7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJHYXZlbmN5XCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbmh0bWwsXG5ib2R5LFxuZGl2LFxuc3BhbixcbmFwcGxldCxcbm9iamVjdCxcbmlmcmFtZSxcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbnAsXG5ibG9ja3F1b3RlLFxucHJlLFxuYSxcbmFiYnIsXG5hY3JvbnltLFxuYWRkcmVzcyxcbmJpZyxcbmNpdGUsXG5jb2RlLFxuZGVsLFxuZGZuLFxuZW0sXG5pbWcsXG5pbnMsXG5rYmQsXG5xLFxucyxcbnNhbXAsXG5zbWFsbCxcbnN0cmlrZSxcbnN0cm9uZyxcbnN1YixcbnN1cCxcbnR0LFxudmFyLFxuYixcbnUsXG5pLFxuY2VudGVyLFxuZGwsXG5kdCxcbmRkLFxub2wsXG51bCxcbmxpLFxuZmllbGRzZXQsXG5mb3JtLFxubGFiZWwsXG5sZWdlbmQsXG50YWJsZSxcbmNhcHRpb24sXG50Ym9keSxcbnRmb290LFxudGhlYWQsXG50cixcbnRoLFxudGQsXG5hcnRpY2xlLFxuYXNpZGUsXG5jYW52YXMsXG5kZXRhaWxzLFxuZW1iZWQsXG5maWd1cmUsXG5maWdjYXB0aW9uLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbm91dHB1dCxcbnJ1YnksXG5zZWN0aW9uLFxuc3VtbWFyeSxcbnRpbWUsXG5tYXJrLFxuYXVkaW8sXG52aWRlbyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDEwMCU7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuYm9keSB7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbmgxLFxuaDIsXG5idXR0b24ge1xuICBmb250LWZhbWlseTogXCJHYXZlbmN5XCI7XG59XG5vbCxcbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG4jY29udGVudCB7XG4gIG1hcmdpbi10b3A6IHZhcigtLXRvcFBhZ2VNYXJnaW4pO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG5idXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLyogTmF2YmFyIGFzdHlsaW5nICovXG4uaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICBmb250LXNpemU6IDJyZW07XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgcGFkZGluZzogMjBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4uaGVhZGVyID4gdWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAyMHB4O1xufVxuXG4uaGVhZGVyIGJ1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgdmFyKC0td2hpdGUpO1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG59XG5cbi5oZWFkZXIgYnV0dG9uOmxhc3QtY2hpbGQge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5oZWFkZXIgaSB7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGZvbnQtc2l6ZTogNXJlbTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4vKiBIb21lIHBhZ2Ugc3R5bGluZyAqL1xuLmhvbWUtcGFnZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcbiAgZ2FwOiAxMCU7XG59XG4udG9wIHtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbn1cblxuLndlbGNvbWUge1xuICBtYXJnaW4tdG9wOiAyNSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gIGdhcDogMzBweDtcbn1cbi53ZWxjb21lIGJ1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBmb250LXNpemU6IDJyZW07XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLXdoaXRlKTtcbiAgcGFkZGluZzogMTVweCA0MHB4O1xufVxuLnRvcCBpbWcge1xuICB3aWR0aDogOTAlO1xufVxuLmJvdHRvbSB7XG4gIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgaGVpZ2h0OiA3MDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbn1cbi5hYm91dC11cyB7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG9wYWNpdHk6IDAuOTtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIHBhZGRpbmc6IDIwcHggNjBweDtcbn1cblxuLmFib3V0LXVzIGgxIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMi42cmVtO1xufVxuXG4vKiBmb3IgdGhlIG1lbnUgcGFnZSAqL1xuLm1lbnUtcGFnZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XG4gIHBhZGRpbmc6IDQwcHg7XG4gIGdhcDogNDBweDtcbn1cblxuLm1lbnUtcGFnZSA+IGgxIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbn1cblxuLm1lbnUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgZ2FwOiAyMHB4O1xufVxuXG4uY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcbiAgZ2FwOiA1cHg7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5kZXNjcmlwdGlvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uZGVzY3JpcHRpb24tY29udGFpbmVyIGgxIHtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jYXJkIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLyogQ29udGFjdCBwYWdlcyAqL1xuXG4uY29udGFjdC1wYWdlIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDJmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2MDBweDtcbiAgZ2FwOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMTAwcHg7XG59XG4uc3RhZmYtaW5mby1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICBnYXA6IDIwcHg7XG59XG5cbi5zdGFmZi1pbmZvLWNvbnRhaW5lciBpbWcge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5pbmZvIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gMWZyO1xufVxuLmluZm8gaDEge1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAtMTVweDtcbn1cblxuLmluZm8gaDIge1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XG59XG4uaW5mbyBwIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC1zaXplOiAxLjRyZW07XG59XG4ubG9jYXRpb24taW5mby1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvIDFmcjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4ubG9jYXRpb24taW5mby1jb250YWluZXIgPiBoMSB7XG4gIGdyaWQtY29sdW1uOiAxLzM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmxvY2F0aW9uLWluZm8tY29udGFpbmVyIGltZyB7XG4gIGdyaWQtY29sdW1uOiAxLzM7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uY29udGFjdC1pbmZvIHtcbiAgZ3JpZC1jb2x1bW46IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTBweDtcbiAgcGFkZGluZzogMzBweDtcbn1cblxuLmNvbnRhY3QtaW5mbyBoMSB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uc29jaWFsLWljb25zIHtcbiAgcGFkZGluZzogMzBweDtcbiAgZ3JpZC1jb2x1bW46IDI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgZ2FwOiAyMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsNENBQThDO0VBQzlDLGtCQUFrQjtBQUNwQjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaUZFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsU0FBUztFQUNULGVBQWU7RUFDZixhQUFhO0VBQ2Isd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBOzs7RUFHRSxzQkFBc0I7QUFDeEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7O0FBRUE7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aUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLFNBQVM7RUFDVCxtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1ibGFjazogIzE2MTYxNjtcXG4gIC0td2hpdGU6ICNmZmY7XFxuICAtLXRvcFBhZ2VNYXJnaW46IDEwMHB4O1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR2F2ZW5jeVxcXCI7XFxuICBzcmM6IHVybChcXFwiLi9mb250cy9HYXZlbmN5XFxcXCBGcmVlXFxcXCBSZWd1bGFyLm90ZlxcXCIpO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5odG1sLFxcbmJvZHksXFxuZGl2LFxcbnNwYW4sXFxuYXBwbGV0LFxcbm9iamVjdCxcXG5pZnJhbWUsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5ibG9ja3F1b3RlLFxcbnByZSxcXG5hLFxcbmFiYnIsXFxuYWNyb255bSxcXG5hZGRyZXNzLFxcbmJpZyxcXG5jaXRlLFxcbmNvZGUsXFxuZGVsLFxcbmRmbixcXG5lbSxcXG5pbWcsXFxuaW5zLFxcbmtiZCxcXG5xLFxcbnMsXFxuc2FtcCxcXG5zbWFsbCxcXG5zdHJpa2UsXFxuc3Ryb25nLFxcbnN1YixcXG5zdXAsXFxudHQsXFxudmFyLFxcbmIsXFxudSxcXG5pLFxcbmNlbnRlcixcXG5kbCxcXG5kdCxcXG5kZCxcXG5vbCxcXG51bCxcXG5saSxcXG5maWVsZHNldCxcXG5mb3JtLFxcbmxhYmVsLFxcbmxlZ2VuZCxcXG50YWJsZSxcXG5jYXB0aW9uLFxcbnRib2R5LFxcbnRmb290LFxcbnRoZWFkLFxcbnRyLFxcbnRoLFxcbnRkLFxcbmFydGljbGUsXFxuYXNpZGUsXFxuY2FudmFzLFxcbmRldGFpbHMsXFxuZW1iZWQsXFxuZmlndXJlLFxcbmZpZ2NhcHRpb24sXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxub3V0cHV0LFxcbnJ1YnksXFxuc2VjdGlvbixcXG5zdW1tYXJ5LFxcbnRpbWUsXFxubWFyayxcXG5hdWRpbyxcXG52aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cXG5oMSxcXG5oMixcXG5idXR0b24ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJHYXZlbmN5XFxcIjtcXG59XFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgbWFyZ2luLXRvcDogdmFyKC0tdG9wUGFnZU1hcmdpbik7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcbi8qIE5hdmJhciBhc3R5bGluZyAqL1xcbi5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLmhlYWRlciA+IHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLmhlYWRlciBidXR0b24ge1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgdmFyKC0td2hpdGUpO1xcbiAgcGFkZGluZy1yaWdodDogMzBweDtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG59XFxuXFxuLmhlYWRlciBidXR0b246bGFzdC1jaGlsZCB7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5oZWFkZXIgaSB7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4vKiBIb21lIHBhZ2Ugc3R5bGluZyAqL1xcbi5ob21lLXBhZ2Uge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gIGdhcDogMTAlO1xcbn1cXG4udG9wIHtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4ud2VsY29tZSB7XFxuICBtYXJnaW4tdG9wOiAyNSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcbiAgZ2FwOiAzMHB4O1xcbn1cXG4ud2VsY29tZSBidXR0b24ge1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0td2hpdGUpO1xcbiAgcGFkZGluZzogMTVweCA0MHB4O1xcbn1cXG4udG9wIGltZyB7XFxuICB3aWR0aDogOTAlO1xcbn1cXG4uYm90dG9tIHtcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiLi9pbWdzL3Jlc3RhdXJhbnQuanBnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgaGVpZ2h0OiA3MDBweDtcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxufVxcbi5hYm91dC11cyB7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBvcGFjaXR5OiAwLjk7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIHBhZGRpbmc6IDIwcHggNjBweDtcXG59XFxuXFxuLmFib3V0LXVzIGgxIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAyLjZyZW07XFxufVxcblxcbi8qIGZvciB0aGUgbWVudSBwYWdlICovXFxuLm1lbnUtcGFnZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG4gIHBhZGRpbmc6IDQwcHg7XFxuICBnYXA6IDQwcHg7XFxufVxcblxcbi5tZW51LXBhZ2UgPiBoMSB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4ubWVudS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5jYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbiAgZ2FwOiA1cHg7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uZGVzY3JpcHRpb24tY29udGFpbmVyIGgxIHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jYXJkIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxuLyogQ29udGFjdCBwYWdlcyAqL1xcblxcbi5jb250YWN0LXBhZ2Uge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAyZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDYwMHB4O1xcbiAgZ2FwOiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMTAwcHg7XFxufVxcbi5zdGFmZi1pbmZvLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5zdGFmZi1pbmZvLWNvbnRhaW5lciBpbWcge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uaW5mbyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gMWZyO1xcbn1cXG4uaW5mbyBoMSB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbi1ib3R0b206IC0xNXB4O1xcbn1cXG5cXG4uaW5mbyBoMiB7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBhbGlnbi1zZWxmOiBzdGFydDtcXG59XFxuLmluZm8gcCB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxufVxcbi5sb2NhdGlvbi1pbmZvLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0byAxZnI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5sb2NhdGlvbi1pbmZvLWNvbnRhaW5lciA+IGgxIHtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmxvY2F0aW9uLWluZm8tY29udGFpbmVyIGltZyB7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi5jb250YWN0LWluZm8ge1xcbiAgZ3JpZC1jb2x1bW46IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIHBhZGRpbmc6IDMwcHg7XFxufVxcblxcbi5jb250YWN0LWluZm8gaDEge1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uc29jaWFsLWljb25zIHtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBncmlkLWNvbHVtbjogMjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZ2FwOiAyMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgY29va0ltYWdlIGZyb20gXCIuL2ltZ3MvY29vay5qcGdcIjtcbmltcG9ydCBtYW5hZ2VySW1hZ2UgZnJvbSBcIi4vaW1ncy9tYW5hZ2VyLmpwZ1wiO1xuaW1wb3J0IG91dHNpZGVWaWV3IGZyb20gXCIuL2ltZ3MvcmVzdGF1cmFudC1vdXRzaWRlLmpwZ1wiO1xuXG5jb25zdCBDb250YWN0SW5mbyA9IFtcbiAge1xuICAgIGhlYWRlcjogXCJGaW5kIFVzIEF0OlwiLFxuICAgIGluZm86IFwiT3VyIExvY2F0aW9uIDEyM1wiLFxuICB9LFxuICB7XG4gICAgaGVhZGVyOiBcIkVtYWlsIFVzOlwiLFxuICAgIGluZm86IFwib3VyTWFpbEBpbWFnaW5hcnkuY29tXCIsXG4gIH0sXG4gIHtcbiAgICBoZWFkZXI6IFwiQ2FsbCBVczpcIixcbiAgICBpbmZvOiBcIjExMjAzMzQ0NTZcIixcbiAgfSxcbl07XG5cbmNvbnN0IEljb25zID0gW1xuICBcImZhLWJyYW5kcyBmYS10d2l0dGVyXCIsXG4gIFwiZmEtYnJhbmRzIGZhLWZhY2Vib29rXCIsXG4gIFwiZmEtYnJhbmRzIGZhLWluc3RhZ3JhbVwiLFxuXTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1wYWdlXCIpO1xuXG4gIG1haW5Db250YWluZXIuYXBwZW5kKFxuICAgIGNyZWF0ZVN0YWZmQ2FyZChjb29rSW1hZ2UsIFwiSmF2aWVyciBTYW5jaGV6XCIsIFwiQ29va1wiKSxcbiAgICBjcmVhdGVTdGFmZkNhcmQobWFuYWdlckltYWdlLCBcIkpvaG4gU21pdGhcIiwgXCJNYW5hZ2VyXCIpXG4gICk7XG5cbiAgbWFpbkNvbnRhaW5lci5hcHBlbmQoY3JlYXRlQ29udGFjdENhcmQoKSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0YWZmQ2FyZChzcmNJbWFnZSwgbmFtZSwgb2NjdXBhdGlvbikge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcInN0YWZmLWluZm8tY29udGFpbmVyXCIsIFwiY2FyZFwiKTtcblxuICBjb25zdCBzdGFmZkltYWdlID0gbmV3IEltYWdlKCk7XG4gIHN0YWZmSW1hZ2Uuc3JjID0gc3JjSW1hZ2U7XG5cbiAgY29uc3QgaW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGluZm9Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG4gIGNvbnN0IHN0YWZmTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgc3RhZmZOYW1lLnRleHRDb250ZW50ID0gbmFtZTtcbiAgY29uc3Qgc3RhZmZPY3VwcGF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBzdGFmZk9jdXBwYXRpb24udGV4dENvbnRlbnQgPSBgT3VyICR7b2NjdXBhdGlvbn1gO1xuICBjb25zdCBzdGFmZkRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHN0YWZmRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPVxuICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gRnVzY2UgZXVpc21vZCBlbGl0IGlkIGJpYmVuZHVtIHBsYWNlcmF0LiBVdCBldWlzbW9kIGFsaXF1YW0gbnVuYy4gUXVpc3F1ZVwiO1xuICBpbmZvQ29udGFpbmVyLmFwcGVuZChzdGFmZk5hbWUsIHN0YWZmT2N1cHBhdGlvbiwgc3RhZmZEZXNjcmlwdGlvbik7XG5cbiAgY29udGFpbmVyLmFwcGVuZChzdGFmZkltYWdlLCBpbmZvQ29udGFpbmVyKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250YWN0Q2FyZCgpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJsb2NhdGlvbi1pbmZvLWNvbnRhaW5lclwiLCBcImNhcmRcIik7XG5cbiAgY29uc3QgY29udGFjdEltYWdlID0gbmV3IEltYWdlKCk7XG4gIGNvbnRhY3RJbWFnZS5zcmMgPSBvdXRzaWRlVmlldztcblxuICBjb25zdCBtYWluSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBtYWluSGVhZGVyLnRleHRDb250ZW50ID0gXCJHZXQgSW4gVG91Y2hcIjtcblxuICBjb25zdCBjb250YWN0SW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhY3RJbmZvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWluZm9cIik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgQ29udGFjdEluZm8ubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBjb250YWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBjb250YWN0TWV0aG9kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGNvbnRhY3RNZXRob2QudGV4dENvbnRlbnQgPSBDb250YWN0SW5mb1tpXS5oZWFkZXI7XG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGluZm8udGV4dENvbnRlbnQgPSBDb250YWN0SW5mb1tpXS5pbmZvO1xuXG4gICAgY29udGFjdENvbnRhaW5lci5hcHBlbmQoY29udGFjdE1ldGhvZCwgaW5mbyk7XG4gICAgY29udGFjdEluZm9Db250YWluZXIuYXBwZW5kKGNvbnRhY3RDb250YWluZXIpO1xuICB9XG5cbiAgY29uc3Qgc29jaWFsSWNvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzb2NpYWxJY29uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic29jaWFsLWljb25zXCIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IEljb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgIGljb24uY2xhc3NMaXN0LmFkZCguLi5JY29uc1tpXS5zcGxpdChcIiBcIikpO1xuICAgIHNvY2lhbEljb25zQ29udGFpbmVyLmFwcGVuZChpY29uKTtcbiAgfVxuXG4gIGNvbnRhaW5lci5hcHBlbmQoXG4gICAgY29udGFjdEltYWdlLFxuICAgIG1haW5IZWFkZXIsXG4gICAgY29udGFjdEluZm9Db250YWluZXIsXG4gICAgc29jaWFsSWNvbnNDb250YWluZXJcbiAgKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuIiwiaW1wb3J0IG11c3NlbHNJbWFnZSBmcm9tIFwiLi9pbWdzL211c3NlbHMuanBlZ1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGxvYWRNZW51UGFnZSkge1xuICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJob21lLXBhZ2VcIik7XG4gIG1haW5Db250YWluZXIuYXBwZW5kKGNyZWF0ZVRvcChsb2FkTWVudVBhZ2UpLCBjcmVhdGVCb3R0b20oKSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJvdHRvbSgpIHtcbiAgY29uc3QgYm90dG9tQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYm90dG9tQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJib3R0b21cIik7XG4gIGNvbnN0IGFib3V0VXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhYm91dFVzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhYm91dC11c1wiKTtcbiAgY29uc3QgYWJvdXRVc0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgYWJvdXRVc0hlYWRlci50ZXh0Q29udGVudCA9IFwiV2h5IHVzP1wiO1xuICBjb25zdCBhYm91dFVzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBhYm91dFVzVGV4dC5pbm5lckhUTUwgPVxuICAgIFwiV2VsY29tZSB0byBbWW91ciBSZXN0YXVyYW50IE5hbWVdLCB3aGVyZSBjdWxpbmFyeSBhcnRpc3RyeSBtZWV0cyB3YXJtIGhvc3BpdGFsaXR5LiA8YnIvPiBJbmR1bGdlIGluIG91ciBleHF1aXNpdGUgY3Vpc2luZSBtZXRpY3Vsb3VzbHkgY3JhZnRlZCB3aXRoIDxici8+IHRoZSBmcmVzaGVzdCBpbmdyZWRpZW50cywgb2ZmZXJpbmcgYSBkZWxpZ2h0ZnVsIHN5bXBob255IG9mIGZsYXZvcnMgdGhhdCA8YnIvPiBjYXRlciB0byBldmVyeSBwYWxhdGUuIEltbWVyc2UgeW91cnNlbGYgaW4gdGhlIGludml0aW5nIGFtYmlhbmNlLCA8YnIvPiBwZXJmZWN0IGZvciBpbnRpbWF0ZSBnYXRoZXJpbmdzIG9yIHNwZWNpYWwgb2NjYXNpb25zLiBPdXIgZGVkaWNhdGVkIDxici8+IHN0YWZmIGVuc3VyZXMgaW1wZWNjYWJsZSBzZXJ2aWNlLCBnb2luZyBhYm92ZSBhbmQgYmV5b25kIHRvIGNyZWF0ZSBhIDxici8+IG1lbW9yYWJsZSBleHBlcmllbmNlLiBFeHBlcmllbmNlIGFmZm9yZGFibGUgbHV4dXJ5IGFuZCBhIHBhc3Npb24gZm9yIDxici8+IGN1c3RvbWVyIHNhdGlzZmFjdGlvbiwgbWFraW5nIFtZb3VyIFJlc3RhdXJhbnQgTmFtZV0gdGhlIHVsdGltYXRlIGRpbmluZyA8YnIvPiBkZXN0aW5hdGlvbi4gQ29tZSwgc2F2b3IgdGhlIG1hZ2ljOyB5b3VyIHRhc3RlIGJ1ZHMgd2lsbCB0aGFuayB5b3UuXCI7XG5cbiAgYWJvdXRVc0NvbnRhaW5lci5hcHBlbmQoYWJvdXRVc0hlYWRlciwgYWJvdXRVc1RleHQpO1xuICBib3R0b21Db250YWluZXIuYXBwZW5kKGFib3V0VXNDb250YWluZXIpO1xuICByZXR1cm4gYm90dG9tQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUb3AobG9hZFBhZ2UpIHtcbiAgY29uc3QgdG9wQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9wQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b3BcIik7XG4gIGNvbnN0IHdlbGNvbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB3ZWxjb21lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ3ZWxjb21lXCIpO1xuXG4gIGNvbnN0IHdlbGNvbWVNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICB3ZWxjb21lTWVzc2FnZS5pbm5lckhUTUwgPVxuICAgIFwiV2VsY29tZSB0byBvdXIgcmVzdGF1cmFudCw8YnIgLz4gd2hlcmUgZGVsaWdodCBpcyBndWFyYW50ZWVkXCI7XG5cbiAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG1lbnVCdG4udGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbG9hZFBhZ2UpO1xuXG4gIHdlbGNvbWVDb250YWluZXIuYXBwZW5kKHdlbGNvbWVNZXNzYWdlLCBtZW51QnRuKTtcblxuICBjb25zdCBtdXVzc2VscyA9IG5ldyBJbWFnZSgpO1xuICBtdXVzc2Vscy5zcmMgPSBtdXNzZWxzSW1hZ2U7XG4gIHRvcENvbnRhaW5lci5hcHBlbmQod2VsY29tZUNvbnRhaW5lciwgbXV1c3NlbHMpO1xuICByZXR1cm4gdG9wQ29udGFpbmVyO1xufVxuIiwiaW1wb3J0IHBhbmNha2VzIGZyb20gXCIuL2ltZ3MvcGFuY2FrZXMuanBnXCI7XG5pbXBvcnQgZnJlbmNoVG9hc3QgZnJvbSBcIi4vaW1ncy9mcmVuY2gtdG9hc3QuanBnXCI7XG5pbXBvcnQgZ3JpbGwgZnJvbSBcIi4vaW1ncy9ncmlsbC5qcGdcIjtcbmltcG9ydCBwaXp6YSBmcm9tIFwiLi9pbWdzL3BpenphLmpwZ1wiO1xuaW1wb3J0IHNhbGFkIGZyb20gXCIuL2ltZ3Mvc2FsYWQuanBnXCI7XG5pbXBvcnQgc2FsbW9uIGZyb20gXCIuL2ltZ3Mvc2FsbW9uLmpwZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gIG1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1lbnUtcGFnZVwiKTtcblxuICBjb25zdCBtZW51SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBtZW51SGVhZGVyLnRleHRDb250ZW50ID0gXCJPdXIgTWVudVwiO1xuXG4gIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtZW51LWNvbnRhaW5lclwiKTtcblxuICBmaWxsQ29udGFpbmVyKG1lbnVDb250YWluZXIpO1xuXG4gIG1haW5Db250YWluZXIuYXBwZW5kKG1lbnVIZWFkZXIsIG1lbnVDb250YWluZXIpO1xufVxuXG5mdW5jdGlvbiBmaWxsQ29udGFpbmVyKGNvbnRhaW5lcikge1xuICBjb25zdCBpbWFnZVNyY3MgPSBbcGFuY2FrZXMsIGZyZW5jaFRvYXN0LCBncmlsbCwgcGl6emEsIHNhbGFkLCBzYWxtb25dO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG5cbiAgICBjb25zdCBpdGVtSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBpdGVtSW1hZ2Uuc3JjID0gaW1hZ2VTcmNzW2ldO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvbi1jb250YWluZXJcIik7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBkZXNjcmlwdGlvbkhlYWRlci50ZXh0Q29udGVudCA9IFwiT3VyIGZvb2RcIjtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPVxuICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBGdXNjZSBldWlzbW9kIGVsaXQgaWQgYmliZW5kdW0gcGxhY2VyYXQuIFV0IGV1aXNtb2QgYWxpcXVhbSBudW5jLiBRdWlzcXVlIGFjIHZlbGl0IHV0IG5pc2kgZmluaWJ1cyB0aW5jaWR1bnQuIEluIHRlbXB1cyBuZXF1ZSBldSBkb2xvciBldWlzbW9kIGZhY2lsaXNpcy4gU2VkIGJpYmVuZHVtIHJpc3VzIGV0IG9kaW8gY29uc2VxdWF0LCBlZ2V0IGNvbnNlY3RldHVyIGVsaXQgZGljdHVtLiBBZW5lYW4gYSBtZXR1cyBlZ2V0IG9yY2kgdWx0cmljaWVzIGZpbmlidXMgbmVjIGEgb2Rpb1wiO1xuXG4gICAgZGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kKGRlc2NyaXB0aW9uSGVhZGVyLCBkZXNjcmlwdGlvbik7XG4gICAgY2FyZC5hcHBlbmQoaXRlbUltYWdlLCBkZXNjcmlwdGlvbkNvbnRhaW5lcik7XG5cbiAgICBjb250YWluZXIuYXBwZW5kKGNhcmQpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAobG9hZEhvbWVQYWdlLCBsb2FkTWVudVBhZ2UsIGxvYWRDb250YWN0UGFnZSkge1xuICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuYXZCYXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcblxuICBjb25zdCBteUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgbXlJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1zb2xpZFwiLCBcImZhLWJvd2wtZm9vZFwiKTtcblxuICBjb25zdCBidXR0b25MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuXG4gIGNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBob21lQnV0dG9uLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG4gIGhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxvYWRIb21lUGFnZSk7XG4gIGJ1dHRvbkxpc3QuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpLmFwcGVuZENoaWxkKGhvbWVCdXR0b24pKTtcblxuICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbWVudUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiT3VyIE1lbnVcIjtcbiAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbG9hZE1lbnVQYWdlKTtcbiAgYnV0dG9uTGlzdC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIikuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbikpO1xuXG4gIGNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb250YWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJDb250YWN0IFVzXCI7XG4gIGNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxvYWRDb250YWN0UGFnZSk7XG4gIGJ1dHRvbkxpc3QuYXBwZW5kQ2hpbGQoXG4gICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpLmFwcGVuZENoaWxkKGNvbnRhY3RCdXR0b24pXG4gICk7XG5cbiAgbmF2QmFyLmFwcGVuZChteUljb24sIGJ1dHRvbkxpc3QpO1xuXG4gIHJldHVybiBuYXZCYXI7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgbmF2QmFyIGZyb20gXCIuL25hdmJhci5qc1wiO1xuaW1wb3J0IGhvbWUgZnJvbSBcIi4vaG9tZS5qc1wiO1xuaW1wb3J0IG1lbnUgZnJvbSBcIi4vbWVudS5qc1wiO1xuaW1wb3J0IGNvbnRhY3QgZnJvbSBcIi4vY29udGFjdC5qc1wiO1xuXG5jb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuZG9jdW1lbnRcbiAgLnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpXG4gIC5pbnNlcnRCZWZvcmUoXG4gICAgbmF2QmFyKGxvYWRIb21lUGFnZSwgbG9hZE1lbnVQYWdlLCBsb2FkQ29udGFjdFBhZ2UpLFxuICAgIG1haW5Db250YWluZXJcbiAgKTtcblxuZnVuY3Rpb24gbG9hZEhvbWVQYWdlKCkge1xuICBjbGVhck1haW5Db250YWluZXIoKTtcbiAgaG9tZShsb2FkTWVudVBhZ2UpO1xufVxuXG5mdW5jdGlvbiBsb2FkTWVudVBhZ2UoKSB7XG4gIGNsZWFyTWFpbkNvbnRhaW5lcigpO1xuICBtZW51KCk7XG59XG5cbmZ1bmN0aW9uIGxvYWRDb250YWN0UGFnZSgpIHtcbiAgY2xlYXJNYWluQ29udGFpbmVyKCk7XG4gIGNvbnRhY3QoKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJNYWluQ29udGFpbmVyKCkge1xuICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICBtYWluQ29udGFpbmVyLnJlcGxhY2VDaGlsZHJlbigpO1xuICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoLi4ubWFpbkNvbnRhaW5lci5jbGFzc0xpc3QpO1xufVxubG9hZEhvbWVQYWdlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=