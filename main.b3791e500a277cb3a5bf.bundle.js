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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0) !important;
    outline: none !important;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    height: 100vh;
    background-color: #f5f5f5;
}

.content {
    display: flex;
    height: calc(100vh - 7.7rem);
}

header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    border-bottom: 1px solid black;
    font-size: 1.5rem;
}

button,
i {
    cursor: pointer;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.title {
    text-shadow: 0px 0px 15px rgba(0, 0, 0, 0.6);
}

.title-container {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.title-image {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    box-shadow: 0 0 15px 3px #000000;
}

.header-buttons {
    display: flex;
    gap: 0.5rem;
    font-size: 1rem;
    padding: 0.5rem;
    margin-right: auto;
}

.title-container {
    position: absolute;
}

.pages {
    display: none;
    flex-direction: column;
    padding: 1rem 1.5rem 0 1.5rem;
    background-color: #dcdcdc;
    width: calc(100vw - 23rem);
    transition: 0.3s ease-in-out;
}

.page-active {
    display: flex;
}

.pages-full {
    width: calc(100vw - 3rem);
}

.page-titles {
    font-size: 2rem;
    text-align: center;
    border-radius: 0.5rem;
    padding: 0.5rem;
    background-color: #80808066;
}

.menu-container {
    display: flex;
    flex-direction: column;
    width: 20rem;
    transition: 0.3s ease-in-out;
}

.hidden-menu {
    transform: translateX(-20rem);
    width: 0;
}

.menu-titles {
    padding-bottom: 0.5rem;
    border-bottom: 3px double black;
}

.lists {
    display: flex;
    flex-direction: column;
    align-items: center;
    word-wrap: break-word;
    gap: 1rem;
    padding: 1.5rem 0 1rem 0;
    border-radius: 0.5rem;
}

.new-task-container {
    display: flex;
    align-items: center;
    padding: 0.5rem 0;
    border-radius: 0.5rem;
    width: calc(100% - 10px);
    background-color: #80808066;
    border-left: 10px solid;
}

.new-task-data-container {
    display: flex;
    justify-content: center;
}

.new-task-status {
    width: 1rem;
    height: 1rem;
    border-radius: 0.5rem;
    margin: auto 1rem;
}

.new-task-title {
    margin-right: auto;
}

.new-task-date {
    margin-right: 3rem;
}

.buttons-container {
    display: flex;
    gap: 0.5rem;
    margin-right: 1rem;
}

.no-tasks-image,
.no-notes-image {
    display: none;
    height: 75%;
    opacity: 0.5;
    margin: auto;
}

.image-active {
    display: block;
}

.sections {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.5rem;
}

.menu-buttons-container {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 0.5rem;
}

.menu-buttons,
.creation-button,
i {
    transition: 0.3s ease-in-out;
}

.menu-buttons {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem 1rem;
    width: 100%;
    border: none;
    border-radius: 0.5rem;
    font-weight: bold;
    font-size: 1rem;
    background-color: #d7d7d7;
    white-space: nowrap;
}

.menu-buttons .fas {
    width: 2.5rem;
}

.creation-button {
    text-align: center;
    width: 75%;
    background-color: rgba(124, 124, 255, 0.5);
    align-self: center;
    border: none;
    border-radius: 1rem;
    font-size: 4rem;
    font-weight: bold;
    margin: 0 auto auto auto;
    font-family: Arial, Helvetica, sans-serif;
    color: rgba(0, 0, 0, 0.75);
    box-shadow: inset 0 0 35px 5px rgba(0, 0, 0, 0.25), inset 0 2px 1px 1px rgba(255, 255, 255, 0.9), inset 0 -2px 1px rgba(0, 0, 0, 0.25);
}

footer {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    height: 3rem;
    position: absolute;
    bottom: 0;
    width: 100%;
    font-weight: bold;
    border-top: 1px solid black;
}

.github-link {
    color: inherit;
    text-decoration: none;
}

header i {
    border-radius: 0.5rem;
    padding: 0.3rem;
}

.overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #00000080;
    backdrop-filter: blur(8px);
    z-index: 9998;
}

.overlay-active {
    display: block;
}

.creation-and-edit-windows {
    display: flex;
    flex-direction: column;
    border: none;
    border-radius: 1rem;
    width: 55rem;
    height: 35rem;
    background-color: #d3d3d3;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: 0.3s ease-in-out;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    transition-delay: 0s;
    position: absolute;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    z-index: 9999;
}

#edit-task-window {
    height: 30rem;
}

#edit-window-main-section {
    margin: 0;
}

#edit-task-form {
    margin: auto;
}

.open-window {
    visibility: visible;
    transform: translate(-50%, -50%) scale(1);
}

.creation-and-edit-windows-header {
    display: flex;
    justify-content: space-between;
    background: #aaaaff;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    padding: 1.5rem;
}

.creation-and-edit-windows-title {
    font-size: 1.8rem;
}

.creation-and-edit-windows-main-section {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    flex-direction: column;
    margin: auto;
    height: 80%;
}

.selection-section {
    display: flex;
    justify-content: space-around;
    gap: 1rem;
    padding: 0 0 1rem 0;
    border-bottom: 3px double black;
}

.selection-buttons {
    width: 100%;
    height: 2.5rem;
    border: none;
    border-radius: 0.5rem;
    font-size: 1.2rem;
    font-weight: bold;
    transition: 0.3s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.creation-and-edit-windows-forms {
    display: none;
    flex-direction: column;
    gap: 1rem;
    width: 50rem;
}

.form-active {
    display: flex;
}

.creation-and-edit-windows-textareas {
    resize: none;
    padding: 0.5rem;
}

textarea {
    border: none;
    border-radius: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.creation-and-edit-windows-button {
    width: 25%;
    height: 3rem;
    border: none;
    border-radius: 0.5rem;
    margin: 0.5rem auto 0 auto;
    font-size: 1rem;
    font-weight: bold;
    background-color: hsla(0, 0%, 0%, 0.75);
    color: #ffffff;
    transition: 0.3s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.creation-and-edit-windows label {
    margin-right: 0.3rem;
    font-weight: bold;
    margin: auto 0.3rem auto 0;
    font-size: 1rem;
}

.textareas-titles {
    font-size: 1.2rem;
}

.textareas-descriptions {
    font-size: 1rem;
}

#task-description-input,
#edit-task-description-input {
    height: 10rem;
}

#project-title-input {
    height: 17.5rem;
}

#note-description-input {
    height: 12.7rem;
}

.creation-and-edit-windows-inputs-section {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 0.5rem;
    height: 1.7rem;
}

.creation-and-edit-windows-inputs-section input,
select {
    cursor: pointer;
    width: 10rem;
    padding: 0.3rem;
    border: none;
    border-radius: 0.3rem;
    font-weight: bold;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.creation-and-edit-windows-sections {
    display: flex;
}

.menu-buttons:hover,
header i:hover,
.menu-button-active {
    background-color: #68686866;
}

footer i:hover {
    transform: rotate(360deg);
}

.creation-button:hover {
    background-color: #7c7cffd9;
}

.selection-buttons:hover,
.selection-button-active {
    background: #707070;
    color: #ffffff;
}

.creation-and-edit-windows-button:hover {
    background-color: #000000e6;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n    -webkit-tap-highlight-color: rgba(255, 255, 255, 0) !important;\r\n    outline: none !important;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n    height: 100vh;\r\n    background-color: #f5f5f5;\r\n}\r\n\r\n.content {\r\n    display: flex;\r\n    height: calc(100vh - 7.7rem);\r\n}\r\n\r\nheader {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 0.5rem;\r\n    border-bottom: 1px solid black;\r\n    font-size: 1.5rem;\r\n}\r\n\r\nbutton,\r\ni {\r\n    cursor: pointer;\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n}\r\n\r\n.title {\r\n    text-shadow: 0px 0px 15px rgba(0, 0, 0, 0.6);\r\n}\r\n\r\n.title-container {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.5rem;\r\n}\r\n\r\n.title-image {\r\n    width: 3rem;\r\n    height: 3rem;\r\n    border-radius: 50%;\r\n    box-shadow: 0 0 15px 3px #000000;\r\n}\r\n\r\n.header-buttons {\r\n    display: flex;\r\n    gap: 0.5rem;\r\n    font-size: 1rem;\r\n    padding: 0.5rem;\r\n    margin-right: auto;\r\n}\r\n\r\n.title-container {\r\n    position: absolute;\r\n}\r\n\r\n.pages {\r\n    display: none;\r\n    flex-direction: column;\r\n    padding: 1rem 1.5rem 0 1.5rem;\r\n    background-color: #dcdcdc;\r\n    width: calc(100vw - 23rem);\r\n    transition: 0.3s ease-in-out;\r\n}\r\n\r\n.page-active {\r\n    display: flex;\r\n}\r\n\r\n.pages-full {\r\n    width: calc(100vw - 3rem);\r\n}\r\n\r\n.page-titles {\r\n    font-size: 2rem;\r\n    text-align: center;\r\n    border-radius: 0.5rem;\r\n    padding: 0.5rem;\r\n    background-color: #80808066;\r\n}\r\n\r\n.menu-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 20rem;\r\n    transition: 0.3s ease-in-out;\r\n}\r\n\r\n.hidden-menu {\r\n    transform: translateX(-20rem);\r\n    width: 0;\r\n}\r\n\r\n.menu-titles {\r\n    padding-bottom: 0.5rem;\r\n    border-bottom: 3px double black;\r\n}\r\n\r\n.lists {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    word-wrap: break-word;\r\n    gap: 1rem;\r\n    padding: 1.5rem 0 1rem 0;\r\n    border-radius: 0.5rem;\r\n}\r\n\r\n.new-task-container {\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 0.5rem 0;\r\n    border-radius: 0.5rem;\r\n    width: calc(100% - 10px);\r\n    background-color: #80808066;\r\n    border-left: 10px solid;\r\n}\r\n\r\n.new-task-data-container {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.new-task-status {\r\n    width: 1rem;\r\n    height: 1rem;\r\n    border-radius: 0.5rem;\r\n    margin: auto 1rem;\r\n}\r\n\r\n.new-task-title {\r\n    margin-right: auto;\r\n}\r\n\r\n.new-task-date {\r\n    margin-right: 3rem;\r\n}\r\n\r\n.buttons-container {\r\n    display: flex;\r\n    gap: 0.5rem;\r\n    margin-right: 1rem;\r\n}\r\n\r\n.no-tasks-image,\r\n.no-notes-image {\r\n    display: none;\r\n    height: 75%;\r\n    opacity: 0.5;\r\n    margin: auto;\r\n}\r\n\r\n.image-active {\r\n    display: block;\r\n}\r\n\r\n.sections {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1.5rem;\r\n    padding: 1.5rem;\r\n}\r\n\r\n.menu-buttons-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: start;\r\n    gap: 0.5rem;\r\n}\r\n\r\n.menu-buttons,\r\n.creation-button,\r\ni {\r\n    transition: 0.3s ease-in-out;\r\n}\r\n\r\n.menu-buttons {\r\n    display: flex;\r\n    justify-content: start;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    padding: 0.5rem 1rem;\r\n    width: 100%;\r\n    border: none;\r\n    border-radius: 0.5rem;\r\n    font-weight: bold;\r\n    font-size: 1rem;\r\n    background-color: #d7d7d7;\r\n    white-space: nowrap;\r\n}\r\n\r\n.menu-buttons .fas {\r\n    width: 2.5rem;\r\n}\r\n\r\n.creation-button {\r\n    text-align: center;\r\n    width: 75%;\r\n    background-color: rgba(124, 124, 255, 0.5);\r\n    align-self: center;\r\n    border: none;\r\n    border-radius: 1rem;\r\n    font-size: 4rem;\r\n    font-weight: bold;\r\n    margin: 0 auto auto auto;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    color: rgba(0, 0, 0, 0.75);\r\n    box-shadow: inset 0 0 35px 5px rgba(0, 0, 0, 0.25), inset 0 2px 1px 1px rgba(255, 255, 255, 0.9), inset 0 -2px 1px rgba(0, 0, 0, 0.25);\r\n}\r\n\r\nfooter {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 0.5rem;\r\n    height: 3rem;\r\n    position: absolute;\r\n    bottom: 0;\r\n    width: 100%;\r\n    font-weight: bold;\r\n    border-top: 1px solid black;\r\n}\r\n\r\n.github-link {\r\n    color: inherit;\r\n    text-decoration: none;\r\n}\r\n\r\nheader i {\r\n    border-radius: 0.5rem;\r\n    padding: 0.3rem;\r\n}\r\n\r\n.overlay {\r\n    display: none;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: #00000080;\r\n    backdrop-filter: blur(8px);\r\n    z-index: 9998;\r\n}\r\n\r\n.overlay-active {\r\n    display: block;\r\n}\r\n\r\n.creation-and-edit-windows {\r\n    display: flex;\r\n    flex-direction: column;\r\n    border: none;\r\n    border-radius: 1rem;\r\n    width: 55rem;\r\n    height: 35rem;\r\n    background-color: #d3d3d3;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%) scale(0);\r\n    transition: 0.3s ease-in-out;\r\n    transition-duration: 0.3s;\r\n    transition-timing-function: ease;\r\n    transition-delay: 0s;\r\n    position: absolute;\r\n    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;\r\n    z-index: 9999;\r\n}\r\n\r\n#edit-task-window {\r\n    height: 30rem;\r\n}\r\n\r\n#edit-window-main-section {\r\n    margin: 0;\r\n}\r\n\r\n#edit-task-form {\r\n    margin: auto;\r\n}\r\n\r\n.open-window {\r\n    visibility: visible;\r\n    transform: translate(-50%, -50%) scale(1);\r\n}\r\n\r\n.creation-and-edit-windows-header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    background: #aaaaff;\r\n    border-top-left-radius: 1rem;\r\n    border-top-right-radius: 1rem;\r\n    padding: 1.5rem;\r\n}\r\n\r\n.creation-and-edit-windows-title {\r\n    font-size: 1.8rem;\r\n}\r\n\r\n.creation-and-edit-windows-main-section {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    gap: 1rem;\r\n    flex-direction: column;\r\n    margin: auto;\r\n    height: 80%;\r\n}\r\n\r\n.selection-section {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    gap: 1rem;\r\n    padding: 0 0 1rem 0;\r\n    border-bottom: 3px double black;\r\n}\r\n\r\n.selection-buttons {\r\n    width: 100%;\r\n    height: 2.5rem;\r\n    border: none;\r\n    border-radius: 0.5rem;\r\n    font-size: 1.2rem;\r\n    font-weight: bold;\r\n    transition: 0.3s ease-in-out;\r\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\r\n}\r\n\r\n.creation-and-edit-windows-forms {\r\n    display: none;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n    width: 50rem;\r\n}\r\n\r\n.form-active {\r\n    display: flex;\r\n}\r\n\r\n.creation-and-edit-windows-textareas {\r\n    resize: none;\r\n    padding: 0.5rem;\r\n}\r\n\r\ntextarea {\r\n    border: none;\r\n    border-radius: 0.5rem;\r\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\r\n}\r\n\r\n.creation-and-edit-windows-button {\r\n    width: 25%;\r\n    height: 3rem;\r\n    border: none;\r\n    border-radius: 0.5rem;\r\n    margin: 0.5rem auto 0 auto;\r\n    font-size: 1rem;\r\n    font-weight: bold;\r\n    background-color: hsla(0, 0%, 0%, 0.75);\r\n    color: #ffffff;\r\n    transition: 0.3s ease-in-out;\r\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\r\n}\r\n\r\n.creation-and-edit-windows label {\r\n    margin-right: 0.3rem;\r\n    font-weight: bold;\r\n    margin: auto 0.3rem auto 0;\r\n    font-size: 1rem;\r\n}\r\n\r\n.textareas-titles {\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.textareas-descriptions {\r\n    font-size: 1rem;\r\n}\r\n\r\n#task-description-input,\r\n#edit-task-description-input {\r\n    height: 10rem;\r\n}\r\n\r\n#project-title-input {\r\n    height: 17.5rem;\r\n}\r\n\r\n#note-description-input {\r\n    height: 12.7rem;\r\n}\r\n\r\n.creation-and-edit-windows-inputs-section {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    gap: 0.5rem;\r\n    height: 1.7rem;\r\n}\r\n\r\n.creation-and-edit-windows-inputs-section input,\r\nselect {\r\n    cursor: pointer;\r\n    width: 10rem;\r\n    padding: 0.3rem;\r\n    border: none;\r\n    border-radius: 0.3rem;\r\n    font-weight: bold;\r\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\r\n}\r\n\r\n.creation-and-edit-windows-sections {\r\n    display: flex;\r\n}\r\n\r\n.menu-buttons:hover,\r\nheader i:hover,\r\n.menu-button-active {\r\n    background-color: #68686866;\r\n}\r\n\r\nfooter i:hover {\r\n    transform: rotate(360deg);\r\n}\r\n\r\n.creation-button:hover {\r\n    background-color: #7c7cffd9;\r\n}\r\n\r\n.selection-buttons:hover,\r\n.selection-button-active {\r\n    background: #707070;\r\n    color: #ffffff;\r\n}\r\n\r\n.creation-and-edit-windows-button:hover {\r\n    background-color: #000000e6;\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/domManipulation.js":
/*!********************************!*\
  !*** ./src/domManipulation.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeCreationWindow: () => (/* binding */ closeCreationWindow),
/* harmony export */   closeEditWindow: () => (/* binding */ closeEditWindow),
/* harmony export */   createImages: () => (/* binding */ createImages),
/* harmony export */   createNewNoteContainer: () => (/* binding */ createNewNoteContainer),
/* harmony export */   createNewTaskContainer: () => (/* binding */ createNewTaskContainer),
/* harmony export */   handlePageImageDisplaying: () => (/* binding */ handlePageImageDisplaying),
/* harmony export */   openCreationWindow: () => (/* binding */ openCreationWindow),
/* harmony export */   openEditTaskWindow: () => (/* binding */ openEditTaskWindow),
/* harmony export */   setNewTaskColor: () => (/* binding */ setNewTaskColor),
/* harmony export */   showNoteForm: () => (/* binding */ showNoteForm),
/* harmony export */   showProjectForm: () => (/* binding */ showProjectForm),
/* harmony export */   showTaskForm: () => (/* binding */ showTaskForm),
/* harmony export */   switchToAllNotesView: () => (/* binding */ switchToAllNotesView),
/* harmony export */   switchToAllTasksView: () => (/* binding */ switchToAllTasksView),
/* harmony export */   switchToTodayTasksView: () => (/* binding */ switchToTodayTasksView),
/* harmony export */   switchToWeekTasksView: () => (/* binding */ switchToWeekTasksView),
/* harmony export */   toggleMenuVisibility: () => (/* binding */ toggleMenuVisibility)
/* harmony export */ });
/* harmony import */ var _images_checklist_image_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/checklist-image.png */ "./src/images/checklist-image.png");
/* harmony import */ var _images_no_tasks_image_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/no-tasks-image.png */ "./src/images/no-tasks-image.png");
/* harmony import */ var _images_no_notes_image_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/no-notes-image.png */ "./src/images/no-notes-image.png");
/* harmony import */ var _mainLogic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mainLogic */ "./src/mainLogic.js");





const creationTaskForm = document.querySelector('#creation-task-form');
const projectForm = document.querySelector('#project-form');
const noteForm = document.querySelector('#note-form');
const taskTitleInput = document.querySelector('#task-title-input');
const taskDescriptionInput = document.querySelector('#task-description-input');
const taskDueDateInput = document.querySelector('#task-date-input');
const taskProjectInput = document.querySelector('#task-project-input');
const taskPriorityInput = document.querySelector('#task-priority-input');
const projectTitleInput = document.querySelector('#project-title-input');
const noteTitleInput = document.querySelector('#note-title-input');
const noteDescriptionInput = document.querySelector('#note-description-input');
const overlay = document.querySelector(".overlay");
const taskButton = document.querySelector('#task-button');
const projectButton = document.querySelector('#project-button');
const noteButton = document.querySelector('#note-button');
const creationWindow = document.querySelector('#creation-task-window');
const editWindow = document.querySelector('#edit-task-window');
const allTasksButton = document.querySelector('#all-tasks-button');
const todayTasksButton = document.querySelector('#today-tasks-button');
const weekTasksButton = document.querySelector('#week-tasks-button');
const allNotesButton = document.querySelector('#all-notes-button');
const allTasksPage = document.querySelector('#all-tasks-page');
const todayTasksPage = document.querySelector('#today-tasks-page');
const weekTasksPage = document.querySelector('#week-tasks-page');
const allNotesPage = document.querySelector('#all-notes-page');
const menuContainer = document.querySelector('.menu-container');
const pages = document.querySelectorAll('.pages');
const listOfAllTasks = document.querySelector('#list-of-all-tasks');
const listOfAllNotes = document.querySelector('#list-of-all-notes');
const editTaskTitleInput = document.querySelector('#edit-task-title-input');
const editTaskDescriptionInput = document.querySelector('#edit-task-description-input');
const editTaskDueDateInput = document.querySelector('#edit-task-date-input');
const editTaskPriorityInput = document.querySelector('#edit-task-priority-input');
const editTaskProjectInput = document.querySelector('#edit-task-project-input');

function createImages() {
    createTitleImage();
    createNoTasksImage();
    createNoNotesImage();
}

function createTitleImage() {
    const titleContainer = document.querySelector('.title-container');
    const title = document.querySelector('.title');
    const titleImage = new Image();
    titleImage.src = _images_checklist_image_png__WEBPACK_IMPORTED_MODULE_0__;
    titleImage.alt = 'Checklist';
    titleImage.classList.add('title-image');
    titleContainer.insertBefore(titleImage, title);
}

function createNoTasksImage() {
    const listsOfTasks = document.querySelectorAll('.lists-of-tasks');
    listsOfTasks.forEach(list => {
        const noTasksImage = new Image();
        noTasksImage.src = _images_no_tasks_image_png__WEBPACK_IMPORTED_MODULE_1__;
        noTasksImage.alt = 'No Tasks';
        noTasksImage.classList.add('no-tasks-image', 'image-active');
        list.appendChild(noTasksImage);
    });
}

function createNoNotesImage() {
    const listOfNotes = document.querySelector('#list-of-all-notes');
    const noNotesImage = new Image();
    noNotesImage.src = _images_no_notes_image_png__WEBPACK_IMPORTED_MODULE_2__;
    noNotesImage.alt = 'No Notes';
    noNotesImage.classList.add('no-notes-image', 'image-active');
    listOfNotes.appendChild(noNotesImage);
}

function closeCreationWindow() {
    creationWindow.classList.remove('open-window');
    projectButton.classList.remove('selection-button-active');
    noteButton.classList.remove('selection-button-active');
    overlay.classList.remove('overlay-active');
    creationTaskForm.classList.add('form-active');
    projectForm.classList.remove('form-active');
    noteForm.classList.remove('form-active');
    clearFormInputs();
}

function closeEditWindow() {
    editWindow.classList.remove('open-window');
    overlay.classList.remove('overlay-active');
    clearFormInputs();
}

function clearFormInputs() {
    taskTitleInput.value = '';
    taskDescriptionInput.value = '';
    taskDueDateInput.value = '';
    taskPriorityInput.value = '';
    taskProjectInput.value = '';
    projectTitleInput.value = '';
    noteTitleInput.value = '';
    noteDescriptionInput.value = '';
}

function switchToAllTasksView() {
    allTasksButton.classList.add('menu-button-active');
    todayTasksButton.classList.remove('menu-button-active');
    weekTasksButton.classList.remove('menu-button-active');
    allNotesButton.classList.remove('menu-button-active');
    allTasksPage.classList.add('page-active');
    todayTasksPage.classList.remove('page-active');
    weekTasksPage.classList.remove('page-active');
    allNotesPage.classList.remove('page-active');
}

function switchToTodayTasksView() {
    todayTasksButton.classList.add('menu-button-active');
    allTasksButton.classList.remove('menu-button-active');
    weekTasksButton.classList.remove('menu-button-active');
    allNotesButton.classList.remove('menu-button-active');
    todayTasksPage.classList.add('page-active');
    allTasksPage.classList.remove('page-active');
    weekTasksPage.classList.remove('page-active');
    allNotesPage.classList.remove('page-active');
}

function switchToWeekTasksView() {
    weekTasksButton.classList.add('menu-button-active');
    allTasksButton.classList.remove('menu-button-active');
    todayTasksButton.classList.remove('menu-button-active');
    allNotesButton.classList.remove('menu-button-active');
    weekTasksPage.classList.add('page-active');
    todayTasksPage.classList.remove('page-active');
    allTasksPage.classList.remove('page-active');
    allNotesPage.classList.remove('page-active');
}

function switchToAllNotesView() {
    allNotesButton.classList.add('menu-button-active');
    allTasksButton.classList.remove('menu-button-active');
    todayTasksButton.classList.remove('menu-button-active');
    weekTasksButton.classList.remove('menu-button-active');
    allNotesPage.classList.add('page-active');
    weekTasksPage.classList.remove('page-active');
    todayTasksPage.classList.remove('page-active');
    allTasksPage.classList.remove('page-active');
}

function toggleMenuVisibility() {
    menuContainer.classList.toggle('hidden-menu');
    pages.forEach(page => {
        page.classList.toggle('pages-full');
    });
}

function openCreationWindow() {
    creationWindow.classList.add('open-window');
    taskButton.classList.add('selection-button-active');
    overlay.classList.add('overlay-active');
}

function showTaskForm() {
    creationTaskForm.classList.add('form-active');
    projectForm.classList.remove('form-active');
    noteForm.classList.remove('form-active');
    taskButton.classList.add('selection-button-active');
    projectButton.classList.remove('selection-button-active');
    noteButton.classList.remove('selection-button-active');
}

function showProjectForm() {
    projectForm.classList.add('form-active');
    creationTaskForm.classList.remove('form-active');
    noteForm.classList.remove('form-active');
    projectButton.classList.add('selection-button-active');
    taskButton.classList.remove('selection-button-active');
    noteButton.classList.remove('selection-button-active');
}

function showNoteForm() {
    noteForm.classList.add('form-active');
    creationTaskForm.classList.remove('form-active');
    projectForm.classList.remove('form-active');
    noteButton.classList.add('selection-button-active');
    taskButton.classList.remove('selection-button-active');
    projectButton.classList.remove('selection-button-active');
}

function setTaskContainerId() {
    let numberOfTasks = listOfAllTasks.childElementCount;
    let taskContainerId = 0 + (numberOfTasks - 1);
    return taskContainerId;
}

function createNewTaskContainer() {
    const newTaskContainer = document.createElement('div');
    newTaskContainer.classList.add('new-task-container');
    newTaskContainer.setAttribute('data-task', setTaskContainerId());
    listOfAllTasks.appendChild(newTaskContainer);
    const newTaskStatus = document.createElement('input');
    newTaskStatus.setAttribute('type', 'checkbox');
    newTaskStatus.classList.add('new-task-data-container', 'new-task-status');
    newTaskContainer.appendChild(newTaskStatus);
    const newTaskTitle = document.createElement('h3');
    newTaskTitle.classList.add('new-task-data-container', 'new-task-title');
    newTaskTitle.setAttribute('data-task-title', newTaskContainer.getAttribute('data-task'));
    newTaskTitle.textContent = taskTitleInput.value;
    newTaskContainer.appendChild(newTaskTitle);
    const newTaskDueDate = document.createElement('p');
    newTaskDueDate.classList.add('new-task-data-container', 'new-task-date');
    newTaskDueDate.setAttribute('data-task-date', newTaskContainer.getAttribute('data-task'));
    newTaskDueDate.textContent = taskDueDateInput.value;
    newTaskContainer.appendChild(newTaskDueDate);
    setNewTaskColor(newTaskContainer, taskPriorityInput);
    createEditAndDeleteButtons(newTaskContainer);
}

function createEditAndDeleteButtons(container) {
    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('new-task-data-container', 'buttons-container');
    container.appendChild(buttonsContainer);
    const editButton = document.createElement('i');
    editButton.classList.add('fas', 'fa-edit', 'edit-button', 'icon');
    buttonsContainer.appendChild(editButton);
    const deleteButton = document.createElement('i');
    deleteButton.classList.add('fas', 'fa-trash', 'delete-button', 'icon');
    buttonsContainer.appendChild(deleteButton);
}

function setNewTaskColor(newTask, newTaskPriority) {
    if (newTaskPriority.value === 'Low') {
        newTask.style.borderLeftColor = '#006400';
    } else if (newTaskPriority.value === 'Medium') {
        newTask.style.borderLeftColor = '#ff8c00';
    } else {
        newTask.style.borderLeftColor = '#8b0000';
    }
}

function createNewNoteContainer() {
    const newNoteContainer = document.createElement("div");
    newNoteContainer.classList.add('new-note-container');
    listOfAllNotes.appendChild(newNoteContainer);
    const newNoteTitle = document.createElement('h3');
    newNoteTitle.classList.add('new-note-title');
    newNoteTitle.textContent = noteTitleInput.value;
    newNoteContainer.appendChild(newNoteTitle);
    const newNoteDescription = document.createElement('p');
    newNoteDescription.classList.add('new-note-description');
    newNoteDescription.textContent = noteDescriptionInput.value;
    newNoteContainer.appendChild(newNoteDescription);
}

function handlePageImageDisplaying() {
    const noTasksImage = document.querySelector('.no-tasks-image');
    const noNotesImage = document.querySelector('.no-notes-image');
    if (_mainLogic__WEBPACK_IMPORTED_MODULE_3__.taskObject.tasksArray.length === 0) {
        noTasksImage.classList.add('image-active');
    } else {
        noTasksImage.classList.remove('image-active');
    }
    if (_mainLogic__WEBPACK_IMPORTED_MODULE_3__.noteObject.notesArray.length === 0) {
        noNotesImage.classList.add('image-active');
    } else {
        noNotesImage.classList.remove('image-active');
    }
}

function openEditTaskWindow(taskToEdit) {
    const allTasksArray = _mainLogic__WEBPACK_IMPORTED_MODULE_3__.taskObject.tasksArray;
    const indexToEdit = parseInt(taskToEdit.getAttribute('data-task'), 10);
    editWindow.classList.add('open-window');
    overlay.classList.add('overlay-active');
    editTaskTitleInput.value = allTasksArray[indexToEdit].title;
    editTaskDescriptionInput.value = allTasksArray[indexToEdit].description;
    editTaskDueDateInput.value = allTasksArray[indexToEdit].dueDate;
    editTaskPriorityInput.value = allTasksArray[indexToEdit].priority;
    // editTaskProjectInput.value = allTasksArray[indexToEdit].project;
}






/***/ }),

/***/ "./src/handleEventListeners.js":
/*!*************************************!*\
  !*** ./src/handleEventListeners.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleEventListeners: () => (/* binding */ handleEventListeners)
/* harmony export */ });
/* harmony import */ var _domManipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domManipulation */ "./src/domManipulation.js");
/* harmony import */ var _mainLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainLogic */ "./src/mainLogic.js");
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validation */ "./src/validation.js");




const homeButton = document.querySelector('#home-button');
const menuToggle = document.querySelector('#menu-toggle');
const allTasksButton = document.querySelector('#all-tasks-button');
const todayTasksButton = document.querySelector('#today-tasks-button');
const weekTasksButton = document.querySelector('#week-tasks-button');
const allNotesButton = document.querySelector('#all-notes-button');
const creationButton = document.querySelector('.creation-button');
const creationWindowCloseButton = document.querySelector('#creation-window-close-button');
const editWindowCloseButton = document.querySelector('#edit-window-close-button');
const taskButton = document.querySelector('#task-button');
const projectButton = document.querySelector('#project-button');
const noteButton = document.querySelector('#note-button');
const addTaskSubmitButton = document.querySelector('#add-task-submit-button');
const editTaskSubmitButton = document.querySelector('#edit-task-submit-button');
const addProjectSubmitButton = document.querySelector('#add-project-submit-button');
const addNoteSubmitButton = document.querySelector('#add-note-submit-button');
const taskTitleInput = document.querySelector('#task-title-input');
const taskDescriptionInput = document.querySelector('#task-description-input');
const taskDueDateInput = document.querySelector('#task-date-input');
const taskPriorityInput = document.querySelector('#task-priority-input');
const projectTitleInput = document.querySelector('#project-title-input');
const noteTitleInput = document.querySelector('#note-title-input');
const noteDescriptionInput = document.querySelector('#note-description-input');
const listOfAllTasks = document.querySelector('#list-of-all-tasks');
const editTaskTitleInput = document.querySelector('#edit-task-title-input');
const editTaskDescriptionInput = document.querySelector('#edit-task-description-input');
const editTaskDueDateInput = document.querySelector('#edit-task-date-input');
const editTaskPriorityInput = document.querySelector('#edit-task-priority-input');

let chosenTask = '';

function handleEventListeners() {
    homeButton.addEventListener('click', () => (0,_domManipulation__WEBPACK_IMPORTED_MODULE_0__.switchToAllTasksView)());
    allTasksButton.addEventListener('click', () => (0,_domManipulation__WEBPACK_IMPORTED_MODULE_0__.switchToAllTasksView)());
    menuToggle.addEventListener('click', () => (0,_domManipulation__WEBPACK_IMPORTED_MODULE_0__.toggleMenuVisibility)());
    todayTasksButton.addEventListener('click', () => (0,_domManipulation__WEBPACK_IMPORTED_MODULE_0__.switchToTodayTasksView)());
    weekTasksButton.addEventListener('click', () => (0,_domManipulation__WEBPACK_IMPORTED_MODULE_0__.switchToWeekTasksView)());
    allNotesButton.addEventListener('click', () => (0,_domManipulation__WEBPACK_IMPORTED_MODULE_0__.switchToAllNotesView)());
    creationButton.addEventListener('click', () => (0,_domManipulation__WEBPACK_IMPORTED_MODULE_0__.openCreationWindow)());
    taskButton.addEventListener('click', () => (0,_domManipulation__WEBPACK_IMPORTED_MODULE_0__.showTaskForm)());
    projectButton.addEventListener('click', () => (0,_domManipulation__WEBPACK_IMPORTED_MODULE_0__.showProjectForm)());
    noteButton.addEventListener('click', () => (0,_domManipulation__WEBPACK_IMPORTED_MODULE_0__.showNoteForm)());
    creationWindowCloseButton.addEventListener('click', () => (0,_domManipulation__WEBPACK_IMPORTED_MODULE_0__.closeCreationWindow)());
    editWindowCloseButton.addEventListener('click', () => (0,_domManipulation__WEBPACK_IMPORTED_MODULE_0__.closeEditWindow)());
    taskTitleInput.addEventListener('input', _validation__WEBPACK_IMPORTED_MODULE_2__.clearValidationMessage);
    taskDescriptionInput.addEventListener('input', _validation__WEBPACK_IMPORTED_MODULE_2__.clearValidationMessage);
    taskDueDateInput.addEventListener('input', _validation__WEBPACK_IMPORTED_MODULE_2__.clearValidationMessage);
    taskPriorityInput.addEventListener('input', _validation__WEBPACK_IMPORTED_MODULE_2__.clearValidationMessage);
    editTaskTitleInput.addEventListener('input', _validation__WEBPACK_IMPORTED_MODULE_2__.clearValidationMessage);
    editTaskDescriptionInput.addEventListener('input', _validation__WEBPACK_IMPORTED_MODULE_2__.clearValidationMessage);
    editTaskDueDateInput.addEventListener('input', _validation__WEBPACK_IMPORTED_MODULE_2__.clearValidationMessage);
    editTaskPriorityInput.addEventListener('input', _validation__WEBPACK_IMPORTED_MODULE_2__.clearValidationMessage);
    projectTitleInput.addEventListener('input', _validation__WEBPACK_IMPORTED_MODULE_2__.clearValidationMessage);
    noteTitleInput.addEventListener('input', _validation__WEBPACK_IMPORTED_MODULE_2__.clearValidationMessage);
    noteDescriptionInput.addEventListener('input', _validation__WEBPACK_IMPORTED_MODULE_2__.clearValidationMessage);
    addTaskSubmitButton.addEventListener('click', (e) => {
        e.preventDefault();
        if ((0,_validation__WEBPACK_IMPORTED_MODULE_2__.validateCreationTaskForm)()) {
            (0,_domManipulation__WEBPACK_IMPORTED_MODULE_0__.createNewTaskContainer)();
            (0,_mainLogic__WEBPACK_IMPORTED_MODULE_1__.addNewTask)();
            (0,_domManipulation__WEBPACK_IMPORTED_MODULE_0__.handlePageImageDisplaying)();
            (0,_domManipulation__WEBPACK_IMPORTED_MODULE_0__.closeCreationWindow)();
        }
    });
    listOfAllTasks.addEventListener('click', (e) => {
        const taskToEdit = e.target.closest('.new-task-container');
        const editButton = e.target.closest('.edit-button');
        chosenTask = taskToEdit;
        if (editButton) {
            (0,_domManipulation__WEBPACK_IMPORTED_MODULE_0__.openEditTaskWindow)(chosenTask);
        }
    });
    editTaskSubmitButton.addEventListener('click', (e) => {
        e.preventDefault();
        if ((0,_validation__WEBPACK_IMPORTED_MODULE_2__.validateEditTaskForm)()) {
            (0,_mainLogic__WEBPACK_IMPORTED_MODULE_1__.editChosenTask)(chosenTask, editTaskTitleInput.value, editTaskDueDateInput.value, editTaskPriorityInput);
            (0,_domManipulation__WEBPACK_IMPORTED_MODULE_0__.closeEditWindow)();
        }
    });
    addProjectSubmitButton.addEventListener('click', (e) => {
        e.preventDefault();
        if ((0,_validation__WEBPACK_IMPORTED_MODULE_2__.validateProjectForm)()) {
            (0,_mainLogic__WEBPACK_IMPORTED_MODULE_1__.addNewProject)();
            (0,_domManipulation__WEBPACK_IMPORTED_MODULE_0__.closeCreationWindow)();
        }
    });
    addNoteSubmitButton.addEventListener('click', (e) => {
        e.preventDefault();
        if ((0,_validation__WEBPACK_IMPORTED_MODULE_2__.validateNoteForm)()) {
            (0,_domManipulation__WEBPACK_IMPORTED_MODULE_0__.createNewNoteContainer)();
            (0,_mainLogic__WEBPACK_IMPORTED_MODULE_1__.addNewNote)();
            (0,_domManipulation__WEBPACK_IMPORTED_MODULE_0__.handlePageImageDisplaying)();
            (0,_domManipulation__WEBPACK_IMPORTED_MODULE_0__.closeCreationWindow)();
        }
    });
    listOfAllTasks.addEventListener('click', (e) => {
        const taskToDelete = e.target.closest('.new-task-container');
        const deleteButton = e.target.closest('.delete-button');
        if (deleteButton) {
            taskToDelete.remove();
            (0,_mainLogic__WEBPACK_IMPORTED_MODULE_1__.deleteChosenTask)(taskToDelete);
        }
        (0,_domManipulation__WEBPACK_IMPORTED_MODULE_0__.handlePageImageDisplaying)();
    });
}


/***/ }),

/***/ "./src/mainLogic.js":
/*!**************************!*\
  !*** ./src/mainLogic.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addNewNote: () => (/* binding */ addNewNote),
/* harmony export */   addNewProject: () => (/* binding */ addNewProject),
/* harmony export */   addNewTask: () => (/* binding */ addNewTask),
/* harmony export */   deleteChosenTask: () => (/* binding */ deleteChosenTask),
/* harmony export */   editChosenTask: () => (/* binding */ editChosenTask),
/* harmony export */   noteObject: () => (/* binding */ noteObject),
/* harmony export */   projectObject: () => (/* binding */ projectObject),
/* harmony export */   taskObject: () => (/* binding */ taskObject)
/* harmony export */ });
/* harmony import */ var _domManipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domManipulation */ "./src/domManipulation.js");


const creationTaskForm = document.querySelector('#creation-task-form');
const projectForm = document.querySelector('#project-form');
const noteForm = document.querySelector('#note-form');
const taskTitleInput = document.querySelector('#task-title-input');
const taskDescriptionInput = document.querySelector('#task-description-input');
const taskDueDateInput = document.querySelector('#task-date-input');
const taskProjectInput = document.querySelector('#task-project-input');
const taskPriorityInput = document.querySelector('#task-priority-input');
const projectTitleInput = document.querySelector('#project-title-input');
const noteTitleInput = document.querySelector('#note-title-input');
const noteDescriptionInput = document.querySelector('#note-description-input');
const editTaskTitleInput = document.querySelector('#edit-task-title-input');
const editTaskDescriptionInput = document.querySelector('#edit-task-description-input');
const editTaskDueDateInput = document.querySelector('#edit-task-date-input');
const editTaskPriorityInput = document.querySelector('#edit-task-priority-input');

const taskObject = {
    tasksArray: [],
    taskTitlesArray: [],

    taskFactory(title, description, dueDate, project, priority, isDone = false) {
        return { title, description, dueDate, project, priority, isDone };
    },

    addTask(newTask) {
        const allTasksArray = this.tasksArray;
        const allTaskTitlesArray = this.taskTitlesArray;
        allTasksArray.push(newTask);
        allTaskTitlesArray.push(newTask.title);

        console.log('Updated allTasksArray:', allTasksArray);
    },

    deleteTask(taskToDelete) {
        const allTasksArray = this.tasksArray;
        const allTaskTitlesArray = this.taskTitlesArray;
        const indexToDelete = parseInt(taskToDelete.getAttribute('id'), 10);
        const taskContainers = document.querySelectorAll('.new-task-container');
        const taskTitles = document.querySelectorAll('.new-task-title');
        const taskDueDates = document.querySelectorAll('.new-task-date');
        allTasksArray.splice(indexToDelete, 1);
        allTaskTitlesArray.splice(indexToDelete, 1);
        taskContainers.forEach((task, index) => {
            task.setAttribute('data-task', index);
        });
        taskTitles.forEach((task, index) => {
            task.setAttribute('data-task-title', index);
        });
        taskDueDates.forEach((task, index) => {
            task.setAttribute('data-task-date', index);
        });

        console.log('Updated allTasksArray:', allTasksArray);
    },

    editTask(chosenTask, newTitle, newDescription, newDueDate, newPriority) {
        const allTasksArray = this.tasksArray;
        const allTaskTitlesArray = this.taskTitlesArray;
        const indexToEdit = parseInt(chosenTask.getAttribute('data-task'), 10);
        const taskToEdit = allTasksArray[indexToEdit];
        taskToEdit.title = newTitle;
        taskToEdit.description = newDescription;
        taskToEdit.dueDate = newDueDate;
        taskToEdit.priority = newPriority;
        console.log(indexToEdit);
        allTaskTitlesArray.splice(indexToEdit, 1, newTitle);
        allTasksArray.splice(indexToEdit, 1, taskToEdit);

        console.log('Updated allTasksArray:', allTasksArray);
    }
};

const projectObject = {
    projectsArray: [],

    projectFactory(title) {
        return { title };
    },

    addProject(newProject) {
        const allProjectsArray = this.projectsArray;
        allProjectsArray.push(newProject);
        console.log(allProjectsArray);
    }
};

const noteObject = {
    notesArray: [],

    noteFactory(title, description) {
        return { title, description };
    },

    addNote(newNote) {
        const allNotesArray = this.notesArray;
        allNotesArray.push(newNote);
        console.log(allNotesArray);
    }
};

function addNewTask() {
    const newTask = taskObject.taskFactory(taskTitleInput.value, taskDescriptionInput.value, taskDueDateInput.value, taskProjectInput.value, taskPriorityInput.value);
    taskObject.addTask(newTask);
    creationTaskForm.reset();
}

function editChosenTask(chosenTask, newTitle, newDueDate, newPriority) {
    const taskTitle = document.querySelector(`[data-task-title="${chosenTask.getAttribute('data-task')}"]`);
    const taskDueDate = document.querySelector(`[data-task-date="${chosenTask.getAttribute('data-task')}"]`);
    taskTitle.setAttribute('data-task-title', chosenTask.getAttribute('data-task'));
    taskDueDate.setAttribute('data-task-date', chosenTask.getAttribute('data-task'));
    taskObject.editTask(chosenTask, editTaskTitleInput.value, editTaskDescriptionInput.value, editTaskDueDateInput.value, editTaskPriorityInput.value);
    taskTitle.textContent = newTitle;
    taskDueDate.textContent = newDueDate;
    (0,_domManipulation__WEBPACK_IMPORTED_MODULE_0__.setNewTaskColor)(chosenTask, newPriority);
}

function deleteChosenTask(chosenTask) {
    taskObject.deleteTask(chosenTask);
}

function addNewProject() {
    const newProject = projectObject.projectFactory(projectTitleInput.value);
    projectObject.addProject(newProject);
    projectForm.reset();
}

function addNewNote() {
    const newNote = noteObject.noteFactory(noteTitleInput.value, noteDescriptionInput.value);
    noteObject.addNote(newNote);
    noteForm.reset();
}



/***/ }),

/***/ "./src/validation.js":
/*!***************************!*\
  !*** ./src/validation.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearValidationMessage: () => (/* binding */ clearValidationMessage),
/* harmony export */   validateCreationTaskForm: () => (/* binding */ validateCreationTaskForm),
/* harmony export */   validateEditTaskForm: () => (/* binding */ validateEditTaskForm),
/* harmony export */   validateNoteForm: () => (/* binding */ validateNoteForm),
/* harmony export */   validateProjectForm: () => (/* binding */ validateProjectForm)
/* harmony export */ });
/* harmony import */ var _mainLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainLogic */ "./src/mainLogic.js");


const taskTitleInput = document.querySelector('#task-title-input');
const taskDescriptionInput = document.querySelector('#task-description-input');
const taskDueDateInput = document.querySelector('#task-date-input');
const taskPriorityInput = document.querySelector('#task-priority-input');
const editTaskTitleInput = document.querySelector('#edit-task-title-input');
const editTaskDescriptionInput = document.querySelector('#edit-task-description-input');
const editTaskDueDateInput = document.querySelector('#edit-task-date-input');
const editTaskPriorityInput = document.querySelector('#edit-task-priority-input');
const projectTitleInput = document.querySelector('#project-title-input');
const noteTitleInput = document.querySelector('#note-title-input');
const noteDescriptionInput = document.querySelector('#note-description-input');

function validateCreationTaskForm() {
    if (_mainLogic__WEBPACK_IMPORTED_MODULE_0__.taskObject.taskTitlesArray.includes(taskTitleInput.value)) {
        taskTitleInput.setCustomValidity('Please enter a unique task title.');
        taskTitleInput.reportValidity();
        return false;
    } if (taskTitleInput.value === '') {
        taskTitleInput.setCustomValidity('Please enter a title for your task.');
        taskTitleInput.reportValidity();
        return false;
    } if (taskTitleInput.value.length > 20) {
        taskTitleInput.setCustomValidity('Please enter a title of no more than 20 characters.');
        taskTitleInput.reportValidity();
        return false;
    } else if (taskDescriptionInput.value === '') {
        taskDescriptionInput.setCustomValidity('Please enter a description for your task.');
        taskDescriptionInput.reportValidity();
        return false;
    } else if (taskDueDateInput.value === '') {
        taskDueDateInput.setCustomValidity('Please enter a due date for your task.');
        taskDueDateInput.reportValidity();
        return false;
    } else if (taskPriorityInput.value === '') {
        taskPriorityInput.setCustomValidity('Please enter a priority for your task.');
        taskPriorityInput.reportValidity();
        return false;
    }
    return true;
}

function validateEditTaskForm() {
    if (_mainLogic__WEBPACK_IMPORTED_MODULE_0__.taskObject.taskTitlesArray[_mainLogic__WEBPACK_IMPORTED_MODULE_0__.taskObject.taskTitlesArray.indexOf(editTaskTitleInput.value)] === editTaskTitleInput.textContent) {
        return true;
    }
    else if (_mainLogic__WEBPACK_IMPORTED_MODULE_0__.taskObject.taskTitlesArray.includes(editTaskTitleInput.value)) {
        editTaskTitleInput.setCustomValidity('Please enter a unique task title.');
        editTaskTitleInput.reportValidity();
        return false;
    } if (editTaskTitleInput.value === '') {
        editTaskTitleInput.setCustomValidity('Please enter a title for your task.');
        editTaskTitleInput.reportValidity();
        return false;
    } if (editTaskTitleInput.value.length > 20) {
        editTaskTitleInput.setCustomValidity('Please enter a title of no more than 20 characters.');
        editTaskTitleInput.reportValidity();
        return false;
    } else if (editTaskDescriptionInput.value === '') {
        editTaskDescriptionInput.setCustomValidity('Please enter a description for your task.');
        editTaskDescriptionInput.reportValidity();
        return false;
    } else if (editTaskDueDateInput.value === '') {
        editTaskDueDateInput.setCustomValidity('Please enter a due date for your task.');
        editTaskDueDateInput.reportValidity();
        return false;
    } else if (editTaskPriorityInput.value === '') {
        editTaskPriorityInput.setCustomValidity('Please enter a priority for your task.');
        editTaskPriorityInput.reportValidity();
        return false;
    }
    return true;
}

function validateProjectForm() {
    if (projectTitleInput.value === '') {
        projectTitleInput.setCustomValidity('Please enter a title for your project.');
        projectTitleInput.reportValidity();
        return false;
    }
    return true;
}

function validateNoteForm() {
    if (noteTitleInput.value === '') {
        noteTitleInput.setCustomValidity('Please enter a title for your note.');
        noteTitleInput.reportValidity();
        return false;
    } else if (noteDescriptionInput.value === '') {
        noteDescriptionInput.setCustomValidity('Please enter a description for your note.');
        noteDescriptionInput.reportValidity();
        return false;
    }
    return true;
}

function clearValidationMessage() {
    switch (this) {
        case taskTitleInput:
        case taskDescriptionInput:
        case taskDueDateInput:
        case taskPriorityInput:
        case editTaskTitleInput:
        case editTaskDescriptionInput:
        case editTaskDueDateInput:
        case editTaskPriorityInput:
        case projectTitleInput:
        case noteTitleInput:
        case noteDescriptionInput:
            this.setCustomValidity('');
            break;
    }
}

/***/ }),

/***/ "./src/images/checklist-image.png":
/*!****************************************!*\
  !*** ./src/images/checklist-image.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/checklist-image.2c192296e30a3e43034e.png";

/***/ }),

/***/ "./src/images/no-notes-image.png":
/*!***************************************!*\
  !*** ./src/images/no-notes-image.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/no-notes-image.04cfa1129a57fbfe33aa.png";

/***/ }),

/***/ "./src/images/no-tasks-image.png":
/*!***************************************!*\
  !*** ./src/images/no-tasks-image.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/no-tasks-image.e20620a551aa4b7c724a.png";

/***/ }),

/***/ "./src/images/tab-icon.png":
/*!*********************************!*\
  !*** ./src/images/tab-icon.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/tab-icon.fcca87b1e90b5fe2399a.png";

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
/* harmony import */ var _images_tab_icon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/tab-icon.png */ "./src/images/tab-icon.png");
/* harmony import */ var _domManipulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domManipulation */ "./src/domManipulation.js");
/* harmony import */ var _handleEventListeners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handleEventListeners */ "./src/handleEventListeners.js");
/* harmony import */ var _mainLogic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mainLogic */ "./src/mainLogic.js");






const head = document.querySelector('head');
const tabIcon = document.createElement('link');
tabIcon.rel = 'icon';
tabIcon.href = _images_tab_icon_png__WEBPACK_IMPORTED_MODULE_1__;
head.appendChild(tabIcon);

(0,_domManipulation__WEBPACK_IMPORTED_MODULE_2__.createImages)();
(0,_handleEventListeners__WEBPACK_IMPORTED_MODULE_3__.handleEventListeners)();

console.log(_mainLogic__WEBPACK_IMPORTED_MODULE_4__.taskObject.tasksArray.length);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iMzc5MWU1MDBhMjc3Y2IzYTViZi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLE9BQU8sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8s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QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsd0RBQWE7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHVEQUFlO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHVEQUFlO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxRQUFRLGtEQUFVO0FBQ2xCO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxRQUFRLGtEQUFVO0FBQ2xCO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCwwQkFBMEIsa0RBQVU7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFSMFY7QUFDcFA7QUFDdUM7QUFDN0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsK0NBQStDLHNFQUFvQjtBQUNuRSxtREFBbUQsc0VBQW9CO0FBQ3ZFLCtDQUErQyxzRUFBb0I7QUFDbkUscURBQXFELHdFQUFzQjtBQUMzRSxvREFBb0QsdUVBQXFCO0FBQ3pFLG1EQUFtRCxzRUFBb0I7QUFDdkUsbURBQW1ELG9FQUFrQjtBQUNyRSwrQ0FBK0MsOERBQVk7QUFDM0Qsa0RBQWtELGlFQUFlO0FBQ2pFLCtDQUErQyw4REFBWTtBQUMzRCw4REFBOEQscUVBQW1CO0FBQ2pGLDBEQUEwRCxpRUFBZTtBQUN6RSw2Q0FBNkMsK0RBQXNCO0FBQ25FLG1EQUFtRCwrREFBc0I7QUFDekUsK0NBQStDLCtEQUFzQjtBQUNyRSxnREFBZ0QsK0RBQXNCO0FBQ3RFLGlEQUFpRCwrREFBc0I7QUFDdkUsdURBQXVELCtEQUFzQjtBQUM3RSxtREFBbUQsK0RBQXNCO0FBQ3pFLG9EQUFvRCwrREFBc0I7QUFDMUUsZ0RBQWdELCtEQUFzQjtBQUN0RSw2Q0FBNkMsK0RBQXNCO0FBQ25FLG1EQUFtRCwrREFBc0I7QUFDekU7QUFDQTtBQUNBLFlBQVkscUVBQXdCO0FBQ3BDLFlBQVksd0VBQXNCO0FBQ2xDLFlBQVksc0RBQVU7QUFDdEIsWUFBWSwyRUFBeUI7QUFDckMsWUFBWSxxRUFBbUI7QUFDL0I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksb0VBQWtCO0FBQzlCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZLGlFQUFvQjtBQUNoQyxZQUFZLDBEQUFjO0FBQzFCLFlBQVksaUVBQWU7QUFDM0I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVksZ0VBQW1CO0FBQy9CLFlBQVkseURBQWE7QUFDekIsWUFBWSxxRUFBbUI7QUFDL0I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVksNkRBQWdCO0FBQzVCLFlBQVksd0VBQXNCO0FBQ2xDLFlBQVksc0RBQVU7QUFDdEIsWUFBWSwyRUFBeUI7QUFDckMsWUFBWSxxRUFBbUI7QUFDL0I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksNERBQWdCO0FBQzVCO0FBQ0EsUUFBUSwyRUFBeUI7QUFDakMsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVHb0Q7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLGtFQUFrRSxxQ0FBcUM7QUFDdkcsbUVBQW1FLHFDQUFxQztBQUN4RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpRUFBZTtBQUNuQjtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEl5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsUUFBUSxrREFBVTtBQUNsQjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxRQUFRLGtEQUFVLGlCQUFpQixrREFBVTtBQUM3QztBQUNBO0FBQ0EsYUFBYSxrREFBVTtBQUN2QjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqSEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ29CO0FBQ1E7QUFDYTtBQUNyQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaURBQUk7QUFDbkI7QUFDQTtBQUNBLDhEQUFZO0FBQ1osMkVBQW9CO0FBQ3BCO0FBQ0EsWUFBWSxrREFBVSxvQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tTWFuaXB1bGF0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9oYW5kbGVFdmVudExpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbWFpbkxvZ2ljLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92YWxpZGF0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xyXG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApICFpbXBvcnRhbnQ7XHJcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDcuN3JlbSk7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbmJ1dHRvbixcclxuaSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbn1cclxuXHJcbi50aXRsZS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDAuNXJlbTtcclxufVxyXG5cclxuLnRpdGxlLWltYWdlIHtcclxuICAgIHdpZHRoOiAzcmVtO1xyXG4gICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDE1cHggM3B4ICMwMDAwMDA7XHJcbn1cclxuXHJcbi5oZWFkZXItYnV0dG9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi50aXRsZS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4ucGFnZXMge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbSAwIDEuNXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkY2RjZGM7XHJcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDIzcmVtKTtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5wYWdlLWFjdGl2ZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ucGFnZXMtZnVsbCB7XHJcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDNyZW0pO1xyXG59XHJcblxyXG4ucGFnZS10aXRsZXMge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgwODA4MDY2O1xyXG59XHJcblxyXG4ubWVudS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMjByZW07XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uaGlkZGVuLW1lbnUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHJlbSk7XHJcbiAgICB3aWR0aDogMDtcclxufVxyXG5cclxuLm1lbnUtdGl0bGVzIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XHJcbiAgICBib3JkZXItYm90dG9tOiAzcHggZG91YmxlIGJsYWNrO1xyXG59XHJcblxyXG4ubGlzdHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMS41cmVtIDAgMXJlbSAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG59XHJcblxyXG4ubmV3LXRhc2stY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMC41cmVtIDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODA4MDgwNjY7XHJcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZDtcclxufVxyXG5cclxuLm5ldy10YXNrLWRhdGEtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLm5ldy10YXNrLXN0YXR1cyB7XHJcbiAgICB3aWR0aDogMXJlbTtcclxuICAgIGhlaWdodDogMXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgIG1hcmdpbjogYXV0byAxcmVtO1xyXG59XHJcblxyXG4ubmV3LXRhc2stdGl0bGUge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4ubmV3LXRhc2stZGF0ZSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDNyZW07XHJcbn1cclxuXHJcbi5idXR0b25zLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbi5uby10YXNrcy1pbWFnZSxcclxuLm5vLW5vdGVzLWltYWdlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDc1JTtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmltYWdlLWFjdGl2ZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnNlY3Rpb25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxLjVyZW07XHJcbiAgICBwYWRkaW5nOiAxLjVyZW07XHJcbn1cclxuXHJcbi5tZW51LWJ1dHRvbnMtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcbn1cclxuXHJcbi5tZW51LWJ1dHRvbnMsXHJcbi5jcmVhdGlvbi1idXR0b24sXHJcbmkge1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLm1lbnUtYnV0dG9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDFyZW07XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDdkN2Q3O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLm1lbnUtYnV0dG9ucyAuZmFzIHtcclxuICAgIHdpZHRoOiAyLjVyZW07XHJcbn1cclxuXHJcbi5jcmVhdGlvbi1idXR0b24ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI0LCAxMjQsIDI1NSwgMC41KTtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbjogMCBhdXRvIGF1dG8gYXV0bztcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMzVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjI1KSwgaW5zZXQgMCAycHggMXB4IDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSksIGluc2V0IDAgLTJweCAxcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxufVxyXG5cclxuZm9vdGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDAuNXJlbTtcclxuICAgIGhlaWdodDogM3JlbTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbi5naXRodWItbGluayB7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuaGVhZGVyIGkge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgcGFkZGluZzogMC4zcmVtO1xyXG59XHJcblxyXG4ub3ZlcmxheSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDgwO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XHJcbiAgICB6LWluZGV4OiA5OTk4O1xyXG59XHJcblxyXG4ub3ZlcmxheS1hY3RpdmUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5jcmVhdGlvbi1hbmQtZWRpdC13aW5kb3dzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgIHdpZHRoOiA1NXJlbTtcclxuICAgIGhlaWdodDogMzVyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNkM2QzO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKTtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xyXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC41NikgMHB4IDIycHggNzBweCA0cHg7XHJcbiAgICB6LWluZGV4OiA5OTk5O1xyXG59XHJcblxyXG4jZWRpdC10YXNrLXdpbmRvdyB7XHJcbiAgICBoZWlnaHQ6IDMwcmVtO1xyXG59XHJcblxyXG4jZWRpdC13aW5kb3ctbWFpbi1zZWN0aW9uIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuI2VkaXQtdGFzay1mb3JtIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLm9wZW4td2luZG93IHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcclxufVxyXG5cclxuLmNyZWF0aW9uLWFuZC1lZGl0LXdpbmRvd3MtaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBiYWNrZ3JvdW5kOiAjYWFhYWZmO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMXJlbTtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMS41cmVtO1xyXG59XHJcblxyXG4uY3JlYXRpb24tYW5kLWVkaXQtd2luZG93cy10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuOHJlbTtcclxufVxyXG5cclxuLmNyZWF0aW9uLWFuZC1lZGl0LXdpbmRvd3MtbWFpbi1zZWN0aW9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBnYXA6IDFyZW07XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbn1cclxuXHJcbi5zZWxlY3Rpb24tc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBnYXA6IDFyZW07XHJcbiAgICBwYWRkaW5nOiAwIDAgMXJlbSAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IGRvdWJsZSBibGFjaztcclxufVxyXG5cclxuLnNlbGVjdGlvbi1idXR0b25zIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyLjVyZW07XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xyXG59XHJcblxyXG4uY3JlYXRpb24tYW5kLWVkaXQtd2luZG93cy1mb3JtcyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMXJlbTtcclxuICAgIHdpZHRoOiA1MHJlbTtcclxufVxyXG5cclxuLmZvcm0tYWN0aXZlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5jcmVhdGlvbi1hbmQtZWRpdC13aW5kb3dzLXRleHRhcmVhcyB7XHJcbiAgICByZXNpemU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbn1cclxuXHJcbnRleHRhcmVhIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xyXG59XHJcblxyXG4uY3JlYXRpb24tYW5kLWVkaXQtd2luZG93cy1idXR0b24ge1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIGhlaWdodDogM3JlbTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgIG1hcmdpbjogMC41cmVtIGF1dG8gMCBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDAlLCAwJSwgMC43NSk7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcclxufVxyXG5cclxuLmNyZWF0aW9uLWFuZC1lZGl0LXdpbmRvd3MgbGFiZWwge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjNyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbjogYXV0byAwLjNyZW0gYXV0byAwO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG4udGV4dGFyZWFzLXRpdGxlcyB7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuLnRleHRhcmVhcy1kZXNjcmlwdGlvbnMge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG4jdGFzay1kZXNjcmlwdGlvbi1pbnB1dCxcclxuI2VkaXQtdGFzay1kZXNjcmlwdGlvbi1pbnB1dCB7XHJcbiAgICBoZWlnaHQ6IDEwcmVtO1xyXG59XHJcblxyXG4jcHJvamVjdC10aXRsZS1pbnB1dCB7XHJcbiAgICBoZWlnaHQ6IDE3LjVyZW07XHJcbn1cclxuXHJcbiNub3RlLWRlc2NyaXB0aW9uLWlucHV0IHtcclxuICAgIGhlaWdodDogMTIuN3JlbTtcclxufVxyXG5cclxuLmNyZWF0aW9uLWFuZC1lZGl0LXdpbmRvd3MtaW5wdXRzLXNlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMC41cmVtO1xyXG4gICAgaGVpZ2h0OiAxLjdyZW07XHJcbn1cclxuXHJcbi5jcmVhdGlvbi1hbmQtZWRpdC13aW5kb3dzLWlucHV0cy1zZWN0aW9uIGlucHV0LFxyXG5zZWxlY3Qge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgd2lkdGg6IDEwcmVtO1xyXG4gICAgcGFkZGluZzogMC4zcmVtO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcclxufVxyXG5cclxuLmNyZWF0aW9uLWFuZC1lZGl0LXdpbmRvd3Mtc2VjdGlvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLm1lbnUtYnV0dG9uczpob3ZlcixcclxuaGVhZGVyIGk6aG92ZXIsXHJcbi5tZW51LWJ1dHRvbi1hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY4Njg2ODY2O1xyXG59XHJcblxyXG5mb290ZXIgaTpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG59XHJcblxyXG4uY3JlYXRpb24tYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3YzdjZmZkOTtcclxufVxyXG5cclxuLnNlbGVjdGlvbi1idXR0b25zOmhvdmVyLFxyXG4uc2VsZWN0aW9uLWJ1dHRvbi1hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogIzcwNzA3MDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uY3JlYXRpb24tYW5kLWVkaXQtd2luZG93cy1idXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGU2O1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksOERBQThEO0lBQzlELHdCQUF3QjtJQUN4QixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksc0hBQXNIO0lBQ3RILGFBQWE7SUFDYix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLDhCQUE4QjtJQUM5QixpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksZUFBZTtJ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SUFDMUIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQix1Q0FBdUM7SUFDdkMsY0FBYztJQUNkLDRCQUE0QjtJQUM1Qiw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsY0FBYztBQUNsQjs7QUFFQTs7SUFFSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQiw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBOzs7SUFHSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7O0lBRUksbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAhaW1wb3J0YW50O1xcclxcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNy43cmVtKTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcbmkge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjYpO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi50aXRsZS1pbWFnZSB7XFxyXFxuICAgIHdpZHRoOiAzcmVtO1xcclxcbiAgICBoZWlnaHQ6IDNyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDE1cHggM3B4ICMwMDAwMDA7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItYnV0dG9ucyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMC41cmVtO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUtY29udGFpbmVyIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZXMge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbSAwIDEuNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjZGNkYztcXHJcXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAyM3JlbSk7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLWFjdGl2ZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5wYWdlcy1mdWxsIHtcXHJcXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAzcmVtKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2UtdGl0bGVzIHtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODA4MDgwNjY7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiAyMHJlbTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGRlbi1tZW51IHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHJlbSk7XFxyXFxuICAgIHdpZHRoOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS10aXRsZXMge1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAzcHggZG91YmxlIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdHMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogMS41cmVtIDAgMXJlbSAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5uZXctdGFzay1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW0gMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MDgwODA2NjtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQ7XFxyXFxufVxcclxcblxcclxcbi5uZXctdGFzay1kYXRhLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LXRhc2stc3RhdHVzIHtcXHJcXG4gICAgd2lkdGg6IDFyZW07XFxyXFxuICAgIGhlaWdodDogMXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgICBtYXJnaW46IGF1dG8gMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy10YXNrLXRpdGxlIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LXRhc2stZGF0ZSB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbnMtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAwLjVyZW07XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5vLXRhc2tzLWltYWdlLFxcclxcbi5uby1ub3Rlcy1pbWFnZSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGhlaWdodDogNzUlO1xcclxcbiAgICBvcGFjaXR5OiAwLjU7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlLWFjdGl2ZSB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDEuNXJlbTtcXHJcXG4gICAgcGFkZGluZzogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1idXR0b25zLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXHJcXG4gICAgZ2FwOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5tZW51LWJ1dHRvbnMsXFxyXFxuLmNyZWF0aW9uLWJ1dHRvbixcXHJcXG5pIHtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtYnV0dG9ucyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q3ZDdkNztcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtYnV0dG9ucyAuZmFzIHtcXHJcXG4gICAgd2lkdGg6IDIuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0aW9uLWJ1dHRvbiB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDc1JTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjQsIDEyNCwgMjU1LCAwLjUpO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG8gYXV0byBhdXRvO1xcclxcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxyXFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAzNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCBpbnNldCAwIDJweCAxcHggMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KSwgaW5zZXQgMCAtMnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAwLjVyZW07XFxyXFxuICAgIGhlaWdodDogM3JlbTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2l0aHViLWxpbmsge1xcclxcbiAgICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgaSB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gICAgcGFkZGluZzogMC4zcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ub3ZlcmxheSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwODA7XFxyXFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xcclxcbiAgICB6LWluZGV4OiA5OTk4O1xcclxcbn1cXHJcXG5cXHJcXG4ub3ZlcmxheS1hY3RpdmUge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0aW9uLWFuZC1lZGl0LXdpbmRvd3Mge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICAgIHdpZHRoOiA1NXJlbTtcXHJcXG4gICAgaGVpZ2h0OiAzNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QzZDNkMztcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCk7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XFxyXFxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xcclxcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNTYpIDBweCAyMnB4IDcwcHggNHB4O1xcclxcbiAgICB6LWluZGV4OiA5OTk5O1xcclxcbn1cXHJcXG5cXHJcXG4jZWRpdC10YXNrLXdpbmRvdyB7XFxyXFxuICAgIGhlaWdodDogMzByZW07XFxyXFxufVxcclxcblxcclxcbiNlZGl0LXdpbmRvdy1tYWluLXNlY3Rpb24ge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbiNlZGl0LXRhc2stZm9ybSB7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLm9wZW4td2luZG93IHtcXHJcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxyXFxufVxcclxcblxcclxcbi5jcmVhdGlvbi1hbmQtZWRpdC13aW5kb3dzLWhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYmFja2dyb3VuZDogI2FhYWFmZjtcXHJcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMXJlbTtcXHJcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0aW9uLWFuZC1lZGl0LXdpbmRvd3MtdGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0aW9uLWFuZC1lZGl0LXdpbmRvd3MtbWFpbi1zZWN0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgaGVpZ2h0OiA4MCU7XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3Rpb24tc2VjdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAgMCAxcmVtIDA7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDNweCBkb3VibGUgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3Rpb24tYnV0dG9ucyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5jcmVhdGlvbi1hbmQtZWRpdC13aW5kb3dzLWZvcm1zIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICB3aWR0aDogNTByZW07XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWFjdGl2ZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5jcmVhdGlvbi1hbmQtZWRpdC13aW5kb3dzLXRleHRhcmVhcyB7XFxyXFxuICAgIHJlc2l6ZTogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0aW9uLWFuZC1lZGl0LXdpbmRvd3MtYnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IDI1JTtcXHJcXG4gICAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gICAgbWFyZ2luOiAwLjVyZW0gYXV0byAwIGF1dG87XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMCUsIDAlLCAwLjc1KTtcXHJcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRpb24tYW5kLWVkaXQtd2luZG93cyBsYWJlbCB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMC4zcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvIDAuM3JlbSBhdXRvIDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHRhcmVhcy10aXRsZXMge1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHRhcmVhcy1kZXNjcmlwdGlvbnMge1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiN0YXNrLWRlc2NyaXB0aW9uLWlucHV0LFxcclxcbiNlZGl0LXRhc2stZGVzY3JpcHRpb24taW5wdXQge1xcclxcbiAgICBoZWlnaHQ6IDEwcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdC10aXRsZS1pbnB1dCB7XFxyXFxuICAgIGhlaWdodDogMTcuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI25vdGUtZGVzY3JpcHRpb24taW5wdXQge1xcclxcbiAgICBoZWlnaHQ6IDEyLjdyZW07XFxyXFxufVxcclxcblxcclxcbi5jcmVhdGlvbi1hbmQtZWRpdC13aW5kb3dzLWlucHV0cy1zZWN0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMC41cmVtO1xcclxcbiAgICBoZWlnaHQ6IDEuN3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0aW9uLWFuZC1lZGl0LXdpbmRvd3MtaW5wdXRzLXNlY3Rpb24gaW5wdXQsXFxyXFxuc2VsZWN0IHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB3aWR0aDogMTByZW07XFxyXFxuICAgIHBhZGRpbmc6IDAuM3JlbTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0aW9uLWFuZC1lZGl0LXdpbmRvd3Mtc2VjdGlvbnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1idXR0b25zOmhvdmVyLFxcclxcbmhlYWRlciBpOmhvdmVyLFxcclxcbi5tZW51LWJ1dHRvbi1hY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjg2ODY4NjY7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciBpOmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0aW9uLWJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3YzdjZmZkOTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdGlvbi1idXR0b25zOmhvdmVyLFxcclxcbi5zZWxlY3Rpb24tYnV0dG9uLWFjdGl2ZSB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM3MDcwNzA7XFxyXFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRpb24tYW5kLWVkaXQtd2luZG93cy1idXR0b246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwZTY7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgdGl0bGVJbWFnZVNyYyBmcm9tICcuL2ltYWdlcy9jaGVja2xpc3QtaW1hZ2UucG5nJztcclxuaW1wb3J0IG5vVGFza3NJbWFnZVNyYyBmcm9tICcuL2ltYWdlcy9uby10YXNrcy1pbWFnZS5wbmcnO1xyXG5pbXBvcnQgbm9Ob3Rlc0ltYWdlU3JjIGZyb20gJy4vaW1hZ2VzL25vLW5vdGVzLWltYWdlLnBuZyc7XHJcbmltcG9ydCB7IHRhc2tPYmplY3QsIG5vdGVPYmplY3QgfSBmcm9tICcuL21haW5Mb2dpYyc7XHJcblxyXG5jb25zdCBjcmVhdGlvblRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0aW9uLXRhc2stZm9ybScpO1xyXG5jb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWZvcm0nKTtcclxuY29uc3Qgbm90ZUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbm90ZS1mb3JtJyk7XHJcbmNvbnN0IHRhc2tUaXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stdGl0bGUtaW5wdXQnKTtcclxuY29uc3QgdGFza0Rlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1kZXNjcmlwdGlvbi1pbnB1dCcpO1xyXG5jb25zdCB0YXNrRHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZGF0ZS1pbnB1dCcpO1xyXG5jb25zdCB0YXNrUHJvamVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stcHJvamVjdC1pbnB1dCcpO1xyXG5jb25zdCB0YXNrUHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLXByaW9yaXR5LWlucHV0Jyk7XHJcbmNvbnN0IHByb2plY3RUaXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtdGl0bGUtaW5wdXQnKTtcclxuY29uc3Qgbm90ZVRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbm90ZS10aXRsZS1pbnB1dCcpO1xyXG5jb25zdCBub3RlRGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub3RlLWRlc2NyaXB0aW9uLWlucHV0Jyk7XHJcbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XHJcbmNvbnN0IHRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1idXR0b24nKTtcclxuY29uc3QgcHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWJ1dHRvbicpO1xyXG5jb25zdCBub3RlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vdGUtYnV0dG9uJyk7XHJcbmNvbnN0IGNyZWF0aW9uV2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0aW9uLXRhc2std2luZG93Jyk7XHJcbmNvbnN0IGVkaXRXaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrLXdpbmRvdycpO1xyXG5jb25zdCBhbGxUYXNrc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhbGwtdGFza3MtYnV0dG9uJyk7XHJcbmNvbnN0IHRvZGF5VGFza3NCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kYXktdGFza3MtYnV0dG9uJyk7XHJcbmNvbnN0IHdlZWtUYXNrc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3ZWVrLXRhc2tzLWJ1dHRvbicpO1xyXG5jb25zdCBhbGxOb3Rlc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhbGwtbm90ZXMtYnV0dG9uJyk7XHJcbmNvbnN0IGFsbFRhc2tzUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhbGwtdGFza3MtcGFnZScpO1xyXG5jb25zdCB0b2RheVRhc2tzUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RheS10YXNrcy1wYWdlJyk7XHJcbmNvbnN0IHdlZWtUYXNrc1BhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2Vlay10YXNrcy1wYWdlJyk7XHJcbmNvbnN0IGFsbE5vdGVzUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhbGwtbm90ZXMtcGFnZScpO1xyXG5jb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtY29udGFpbmVyJyk7XHJcbmNvbnN0IHBhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhZ2VzJyk7XHJcbmNvbnN0IGxpc3RPZkFsbFRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpc3Qtb2YtYWxsLXRhc2tzJyk7XHJcbmNvbnN0IGxpc3RPZkFsbE5vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpc3Qtb2YtYWxsLW5vdGVzJyk7XHJcbmNvbnN0IGVkaXRUYXNrVGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2stdGl0bGUtaW5wdXQnKTtcclxuY29uc3QgZWRpdFRhc2tEZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGFzay1kZXNjcmlwdGlvbi1pbnB1dCcpO1xyXG5jb25zdCBlZGl0VGFza0R1ZURhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2stZGF0ZS1pbnB1dCcpO1xyXG5jb25zdCBlZGl0VGFza1ByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrLXByaW9yaXR5LWlucHV0Jyk7XHJcbmNvbnN0IGVkaXRUYXNrUHJvamVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGFzay1wcm9qZWN0LWlucHV0Jyk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW1hZ2VzKCkge1xyXG4gICAgY3JlYXRlVGl0bGVJbWFnZSgpO1xyXG4gICAgY3JlYXRlTm9UYXNrc0ltYWdlKCk7XHJcbiAgICBjcmVhdGVOb05vdGVzSW1hZ2UoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGl0bGVJbWFnZSgpIHtcclxuICAgIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlLWNvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKTtcclxuICAgIGNvbnN0IHRpdGxlSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRpdGxlSW1hZ2Uuc3JjID0gdGl0bGVJbWFnZVNyYztcclxuICAgIHRpdGxlSW1hZ2UuYWx0ID0gJ0NoZWNrbGlzdCc7XHJcbiAgICB0aXRsZUltYWdlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlLWltYWdlJyk7XHJcbiAgICB0aXRsZUNvbnRhaW5lci5pbnNlcnRCZWZvcmUodGl0bGVJbWFnZSwgdGl0bGUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOb1Rhc2tzSW1hZ2UoKSB7XHJcbiAgICBjb25zdCBsaXN0c09mVGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlzdHMtb2YtdGFza3MnKTtcclxuICAgIGxpc3RzT2ZUYXNrcy5mb3JFYWNoKGxpc3QgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5vVGFza3NJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIG5vVGFza3NJbWFnZS5zcmMgPSBub1Rhc2tzSW1hZ2VTcmM7XHJcbiAgICAgICAgbm9UYXNrc0ltYWdlLmFsdCA9ICdObyBUYXNrcyc7XHJcbiAgICAgICAgbm9UYXNrc0ltYWdlLmNsYXNzTGlzdC5hZGQoJ25vLXRhc2tzLWltYWdlJywgJ2ltYWdlLWFjdGl2ZScpO1xyXG4gICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQobm9UYXNrc0ltYWdlKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOb05vdGVzSW1hZ2UoKSB7XHJcbiAgICBjb25zdCBsaXN0T2ZOb3RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsaXN0LW9mLWFsbC1ub3RlcycpO1xyXG4gICAgY29uc3Qgbm9Ob3Rlc0ltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICBub05vdGVzSW1hZ2Uuc3JjID0gbm9Ob3Rlc0ltYWdlU3JjO1xyXG4gICAgbm9Ob3Rlc0ltYWdlLmFsdCA9ICdObyBOb3Rlcyc7XHJcbiAgICBub05vdGVzSW1hZ2UuY2xhc3NMaXN0LmFkZCgnbm8tbm90ZXMtaW1hZ2UnLCAnaW1hZ2UtYWN0aXZlJyk7XHJcbiAgICBsaXN0T2ZOb3Rlcy5hcHBlbmRDaGlsZChub05vdGVzSW1hZ2UpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VDcmVhdGlvbldpbmRvdygpIHtcclxuICAgIGNyZWF0aW9uV2luZG93LmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4td2luZG93Jyk7XHJcbiAgICBwcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGlvbi1idXR0b24tYWN0aXZlJyk7XHJcbiAgICBub3RlQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGlvbi1idXR0b24tYWN0aXZlJyk7XHJcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ292ZXJsYXktYWN0aXZlJyk7XHJcbiAgICBjcmVhdGlvblRhc2tGb3JtLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tYWN0aXZlJyk7XHJcbiAgICBwcm9qZWN0Rm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtLWFjdGl2ZScpO1xyXG4gICAgbm90ZUZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1hY3RpdmUnKTtcclxuICAgIGNsZWFyRm9ybUlucHV0cygpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VFZGl0V2luZG93KCkge1xyXG4gICAgZWRpdFdpbmRvdy5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuLXdpbmRvdycpO1xyXG4gICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdvdmVybGF5LWFjdGl2ZScpO1xyXG4gICAgY2xlYXJGb3JtSW5wdXRzKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFyRm9ybUlucHV0cygpIHtcclxuICAgIHRhc2tUaXRsZUlucHV0LnZhbHVlID0gJyc7XHJcbiAgICB0YXNrRGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgdGFza0R1ZURhdGVJbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgdGFza1ByaW9yaXR5SW5wdXQudmFsdWUgPSAnJztcclxuICAgIHRhc2tQcm9qZWN0SW5wdXQudmFsdWUgPSAnJztcclxuICAgIHByb2plY3RUaXRsZUlucHV0LnZhbHVlID0gJyc7XHJcbiAgICBub3RlVGl0bGVJbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgbm90ZURlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSAnJztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN3aXRjaFRvQWxsVGFza3NWaWV3KCkge1xyXG4gICAgYWxsVGFza3NCdXR0b24uY2xhc3NMaXN0LmFkZCgnbWVudS1idXR0b24tYWN0aXZlJyk7XHJcbiAgICB0b2RheVRhc2tzQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtYnV0dG9uLWFjdGl2ZScpO1xyXG4gICAgd2Vla1Rhc2tzQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtYnV0dG9uLWFjdGl2ZScpO1xyXG4gICAgYWxsTm90ZXNCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1idXR0b24tYWN0aXZlJyk7XHJcbiAgICBhbGxUYXNrc1BhZ2UuY2xhc3NMaXN0LmFkZCgncGFnZS1hY3RpdmUnKTtcclxuICAgIHRvZGF5VGFza3NQYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ3BhZ2UtYWN0aXZlJyk7XHJcbiAgICB3ZWVrVGFza3NQYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ3BhZ2UtYWN0aXZlJyk7XHJcbiAgICBhbGxOb3Rlc1BhZ2UuY2xhc3NMaXN0LnJlbW92ZSgncGFnZS1hY3RpdmUnKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN3aXRjaFRvVG9kYXlUYXNrc1ZpZXcoKSB7XHJcbiAgICB0b2RheVRhc2tzQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ21lbnUtYnV0dG9uLWFjdGl2ZScpO1xyXG4gICAgYWxsVGFza3NCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1idXR0b24tYWN0aXZlJyk7XHJcbiAgICB3ZWVrVGFza3NCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1idXR0b24tYWN0aXZlJyk7XHJcbiAgICBhbGxOb3Rlc0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LWJ1dHRvbi1hY3RpdmUnKTtcclxuICAgIHRvZGF5VGFza3NQYWdlLmNsYXNzTGlzdC5hZGQoJ3BhZ2UtYWN0aXZlJyk7XHJcbiAgICBhbGxUYXNrc1BhZ2UuY2xhc3NMaXN0LnJlbW92ZSgncGFnZS1hY3RpdmUnKTtcclxuICAgIHdlZWtUYXNrc1BhZ2UuY2xhc3NMaXN0LnJlbW92ZSgncGFnZS1hY3RpdmUnKTtcclxuICAgIGFsbE5vdGVzUGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdwYWdlLWFjdGl2ZScpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3dpdGNoVG9XZWVrVGFza3NWaWV3KCkge1xyXG4gICAgd2Vla1Rhc2tzQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ21lbnUtYnV0dG9uLWFjdGl2ZScpO1xyXG4gICAgYWxsVGFza3NCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1idXR0b24tYWN0aXZlJyk7XHJcbiAgICB0b2RheVRhc2tzQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtYnV0dG9uLWFjdGl2ZScpO1xyXG4gICAgYWxsTm90ZXNCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1idXR0b24tYWN0aXZlJyk7XHJcbiAgICB3ZWVrVGFza3NQYWdlLmNsYXNzTGlzdC5hZGQoJ3BhZ2UtYWN0aXZlJyk7XHJcbiAgICB0b2RheVRhc2tzUGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdwYWdlLWFjdGl2ZScpO1xyXG4gICAgYWxsVGFza3NQYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ3BhZ2UtYWN0aXZlJyk7XHJcbiAgICBhbGxOb3Rlc1BhZ2UuY2xhc3NMaXN0LnJlbW92ZSgncGFnZS1hY3RpdmUnKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN3aXRjaFRvQWxsTm90ZXNWaWV3KCkge1xyXG4gICAgYWxsTm90ZXNCdXR0b24uY2xhc3NMaXN0LmFkZCgnbWVudS1idXR0b24tYWN0aXZlJyk7XHJcbiAgICBhbGxUYXNrc0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LWJ1dHRvbi1hY3RpdmUnKTtcclxuICAgIHRvZGF5VGFza3NCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1idXR0b24tYWN0aXZlJyk7XHJcbiAgICB3ZWVrVGFza3NCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1idXR0b24tYWN0aXZlJyk7XHJcbiAgICBhbGxOb3Rlc1BhZ2UuY2xhc3NMaXN0LmFkZCgncGFnZS1hY3RpdmUnKTtcclxuICAgIHdlZWtUYXNrc1BhZ2UuY2xhc3NMaXN0LnJlbW92ZSgncGFnZS1hY3RpdmUnKTtcclxuICAgIHRvZGF5VGFza3NQYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ3BhZ2UtYWN0aXZlJyk7XHJcbiAgICBhbGxUYXNrc1BhZ2UuY2xhc3NMaXN0LnJlbW92ZSgncGFnZS1hY3RpdmUnKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZU1lbnVWaXNpYmlsaXR5KCkge1xyXG4gICAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4tbWVudScpO1xyXG4gICAgcGFnZXMuZm9yRWFjaChwYWdlID0+IHtcclxuICAgICAgICBwYWdlLmNsYXNzTGlzdC50b2dnbGUoJ3BhZ2VzLWZ1bGwnKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb3BlbkNyZWF0aW9uV2luZG93KCkge1xyXG4gICAgY3JlYXRpb25XaW5kb3cuY2xhc3NMaXN0LmFkZCgnb3Blbi13aW5kb3cnKTtcclxuICAgIHRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0aW9uLWJ1dHRvbi1hY3RpdmUnKTtcclxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnb3ZlcmxheS1hY3RpdmUnKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dUYXNrRm9ybSgpIHtcclxuICAgIGNyZWF0aW9uVGFza0Zvcm0uY2xhc3NMaXN0LmFkZCgnZm9ybS1hY3RpdmUnKTtcclxuICAgIHByb2plY3RGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tYWN0aXZlJyk7XHJcbiAgICBub3RlRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtLWFjdGl2ZScpO1xyXG4gICAgdGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdzZWxlY3Rpb24tYnV0dG9uLWFjdGl2ZScpO1xyXG4gICAgcHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3Rpb24tYnV0dG9uLWFjdGl2ZScpO1xyXG4gICAgbm90ZUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3Rpb24tYnV0dG9uLWFjdGl2ZScpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd1Byb2plY3RGb3JtKCkge1xyXG4gICAgcHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZCgnZm9ybS1hY3RpdmUnKTtcclxuICAgIGNyZWF0aW9uVGFza0Zvcm0uY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1hY3RpdmUnKTtcclxuICAgIG5vdGVGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tYWN0aXZlJyk7XHJcbiAgICBwcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGlvbi1idXR0b24tYWN0aXZlJyk7XHJcbiAgICB0YXNrQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGlvbi1idXR0b24tYWN0aXZlJyk7XHJcbiAgICBub3RlQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGlvbi1idXR0b24tYWN0aXZlJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93Tm90ZUZvcm0oKSB7XHJcbiAgICBub3RlRm9ybS5jbGFzc0xpc3QuYWRkKCdmb3JtLWFjdGl2ZScpO1xyXG4gICAgY3JlYXRpb25UYXNrRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtLWFjdGl2ZScpO1xyXG4gICAgcHJvamVjdEZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1hY3RpdmUnKTtcclxuICAgIG5vdGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0aW9uLWJ1dHRvbi1hY3RpdmUnKTtcclxuICAgIHRhc2tCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0aW9uLWJ1dHRvbi1hY3RpdmUnKTtcclxuICAgIHByb2plY3RCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0aW9uLWJ1dHRvbi1hY3RpdmUnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0VGFza0NvbnRhaW5lcklkKCkge1xyXG4gICAgbGV0IG51bWJlck9mVGFza3MgPSBsaXN0T2ZBbGxUYXNrcy5jaGlsZEVsZW1lbnRDb3VudDtcclxuICAgIGxldCB0YXNrQ29udGFpbmVySWQgPSAwICsgKG51bWJlck9mVGFza3MgLSAxKTtcclxuICAgIHJldHVybiB0YXNrQ29udGFpbmVySWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOZXdUYXNrQ29udGFpbmVyKCkge1xyXG4gICAgY29uc3QgbmV3VGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbmV3VGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCduZXctdGFzay1jb250YWluZXInKTtcclxuICAgIG5ld1Rhc2tDb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXRhc2snLCBzZXRUYXNrQ29udGFpbmVySWQoKSk7XHJcbiAgICBsaXN0T2ZBbGxUYXNrcy5hcHBlbmRDaGlsZChuZXdUYXNrQ29udGFpbmVyKTtcclxuICAgIGNvbnN0IG5ld1Rhc2tTdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgbmV3VGFza1N0YXR1cy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcclxuICAgIG5ld1Rhc2tTdGF0dXMuY2xhc3NMaXN0LmFkZCgnbmV3LXRhc2stZGF0YS1jb250YWluZXInLCAnbmV3LXRhc2stc3RhdHVzJyk7XHJcbiAgICBuZXdUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Rhc2tTdGF0dXMpO1xyXG4gICAgY29uc3QgbmV3VGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIG5ld1Rhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKCduZXctdGFzay1kYXRhLWNvbnRhaW5lcicsICduZXctdGFzay10aXRsZScpO1xyXG4gICAgbmV3VGFza1RpdGxlLnNldEF0dHJpYnV0ZSgnZGF0YS10YXNrLXRpdGxlJywgbmV3VGFza0NvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFzaycpKTtcclxuICAgIG5ld1Rhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRhc2tUaXRsZUlucHV0LnZhbHVlO1xyXG4gICAgbmV3VGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUYXNrVGl0bGUpO1xyXG4gICAgY29uc3QgbmV3VGFza0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBuZXdUYXNrRHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCduZXctdGFzay1kYXRhLWNvbnRhaW5lcicsICduZXctdGFzay1kYXRlJyk7XHJcbiAgICBuZXdUYXNrRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFzay1kYXRlJywgbmV3VGFza0NvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFzaycpKTtcclxuICAgIG5ld1Rhc2tEdWVEYXRlLnRleHRDb250ZW50ID0gdGFza0R1ZURhdGVJbnB1dC52YWx1ZTtcclxuICAgIG5ld1Rhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3VGFza0R1ZURhdGUpO1xyXG4gICAgc2V0TmV3VGFza0NvbG9yKG5ld1Rhc2tDb250YWluZXIsIHRhc2tQcmlvcml0eUlucHV0KTtcclxuICAgIGNyZWF0ZUVkaXRBbmREZWxldGVCdXR0b25zKG5ld1Rhc2tDb250YWluZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVFZGl0QW5kRGVsZXRlQnV0dG9ucyhjb250YWluZXIpIHtcclxuICAgIGNvbnN0IGJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGJ1dHRvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbmV3LXRhc2stZGF0YS1jb250YWluZXInLCAnYnV0dG9ucy1jb250YWluZXInKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25zQ29udGFpbmVyKTtcclxuICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICBlZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2ZhcycsICdmYS1lZGl0JywgJ2VkaXQtYnV0dG9uJywgJ2ljb24nKTtcclxuICAgIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XHJcbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZmFzJywgJ2ZhLXRyYXNoJywgJ2RlbGV0ZS1idXR0b24nLCAnaWNvbicpO1xyXG4gICAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0TmV3VGFza0NvbG9yKG5ld1Rhc2ssIG5ld1Rhc2tQcmlvcml0eSkge1xyXG4gICAgaWYgKG5ld1Rhc2tQcmlvcml0eS52YWx1ZSA9PT0gJ0xvdycpIHtcclxuICAgICAgICBuZXdUYXNrLnN0eWxlLmJvcmRlckxlZnRDb2xvciA9ICcjMDA2NDAwJztcclxuICAgIH0gZWxzZSBpZiAobmV3VGFza1ByaW9yaXR5LnZhbHVlID09PSAnTWVkaXVtJykge1xyXG4gICAgICAgIG5ld1Rhc2suc3R5bGUuYm9yZGVyTGVmdENvbG9yID0gJyNmZjhjMDAnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBuZXdUYXNrLnN0eWxlLmJvcmRlckxlZnRDb2xvciA9ICcjOGIwMDAwJztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5ld05vdGVDb250YWluZXIoKSB7XHJcbiAgICBjb25zdCBuZXdOb3RlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG5ld05vdGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbmV3LW5vdGUtY29udGFpbmVyJyk7XHJcbiAgICBsaXN0T2ZBbGxOb3Rlcy5hcHBlbmRDaGlsZChuZXdOb3RlQ29udGFpbmVyKTtcclxuICAgIGNvbnN0IG5ld05vdGVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBuZXdOb3RlVGl0bGUuY2xhc3NMaXN0LmFkZCgnbmV3LW5vdGUtdGl0bGUnKTtcclxuICAgIG5ld05vdGVUaXRsZS50ZXh0Q29udGVudCA9IG5vdGVUaXRsZUlucHV0LnZhbHVlO1xyXG4gICAgbmV3Tm90ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdOb3RlVGl0bGUpO1xyXG4gICAgY29uc3QgbmV3Tm90ZURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgbmV3Tm90ZURlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ25ldy1ub3RlLWRlc2NyaXB0aW9uJyk7XHJcbiAgICBuZXdOb3RlRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBub3RlRGVzY3JpcHRpb25JbnB1dC52YWx1ZTtcclxuICAgIG5ld05vdGVDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3Tm90ZURlc2NyaXB0aW9uKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVBhZ2VJbWFnZURpc3BsYXlpbmcoKSB7XHJcbiAgICBjb25zdCBub1Rhc2tzSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm8tdGFza3MtaW1hZ2UnKTtcclxuICAgIGNvbnN0IG5vTm90ZXNJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uby1ub3Rlcy1pbWFnZScpO1xyXG4gICAgaWYgKHRhc2tPYmplY3QudGFza3NBcnJheS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBub1Rhc2tzSW1hZ2UuY2xhc3NMaXN0LmFkZCgnaW1hZ2UtYWN0aXZlJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5vVGFza3NJbWFnZS5jbGFzc0xpc3QucmVtb3ZlKCdpbWFnZS1hY3RpdmUnKTtcclxuICAgIH1cclxuICAgIGlmIChub3RlT2JqZWN0Lm5vdGVzQXJyYXkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgbm9Ob3Rlc0ltYWdlLmNsYXNzTGlzdC5hZGQoJ2ltYWdlLWFjdGl2ZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBub05vdGVzSW1hZ2UuY2xhc3NMaXN0LnJlbW92ZSgnaW1hZ2UtYWN0aXZlJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvcGVuRWRpdFRhc2tXaW5kb3codGFza1RvRWRpdCkge1xyXG4gICAgY29uc3QgYWxsVGFza3NBcnJheSA9IHRhc2tPYmplY3QudGFza3NBcnJheTtcclxuICAgIGNvbnN0IGluZGV4VG9FZGl0ID0gcGFyc2VJbnQodGFza1RvRWRpdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFzaycpLCAxMCk7XHJcbiAgICBlZGl0V2luZG93LmNsYXNzTGlzdC5hZGQoJ29wZW4td2luZG93Jyk7XHJcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ292ZXJsYXktYWN0aXZlJyk7XHJcbiAgICBlZGl0VGFza1RpdGxlSW5wdXQudmFsdWUgPSBhbGxUYXNrc0FycmF5W2luZGV4VG9FZGl0XS50aXRsZTtcclxuICAgIGVkaXRUYXNrRGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IGFsbFRhc2tzQXJyYXlbaW5kZXhUb0VkaXRdLmRlc2NyaXB0aW9uO1xyXG4gICAgZWRpdFRhc2tEdWVEYXRlSW5wdXQudmFsdWUgPSBhbGxUYXNrc0FycmF5W2luZGV4VG9FZGl0XS5kdWVEYXRlO1xyXG4gICAgZWRpdFRhc2tQcmlvcml0eUlucHV0LnZhbHVlID0gYWxsVGFza3NBcnJheVtpbmRleFRvRWRpdF0ucHJpb3JpdHk7XHJcbiAgICAvLyBlZGl0VGFza1Byb2plY3RJbnB1dC52YWx1ZSA9IGFsbFRhc2tzQXJyYXlbaW5kZXhUb0VkaXRdLnByb2plY3Q7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7IGNsb3NlQ3JlYXRpb25XaW5kb3csIGNsb3NlRWRpdFdpbmRvdywgb3BlbkNyZWF0aW9uV2luZG93LCBvcGVuRWRpdFRhc2tXaW5kb3csIHNob3dOb3RlRm9ybSwgc2hvd1Byb2plY3RGb3JtLCBzaG93VGFza0Zvcm0sIHN3aXRjaFRvQWxsTm90ZXNWaWV3LCBzd2l0Y2hUb0FsbFRhc2tzVmlldywgc3dpdGNoVG9Ub2RheVRhc2tzVmlldywgc3dpdGNoVG9XZWVrVGFza3NWaWV3LCB0b2dnbGVNZW51VmlzaWJpbGl0eSwgY3JlYXRlTmV3VGFza0NvbnRhaW5lciwgY3JlYXRlTmV3Tm90ZUNvbnRhaW5lciwgaGFuZGxlUGFnZUltYWdlRGlzcGxheWluZyB9IGZyb20gXCIuL2RvbU1hbmlwdWxhdGlvblwiO1xyXG5pbXBvcnQgeyBhZGROZXdUYXNrLCBhZGROZXdQcm9qZWN0LCBhZGROZXdOb3RlLCBlZGl0Q2hvc2VuVGFzaywgZGVsZXRlQ2hvc2VuVGFzayB9IGZyb20gXCIuL21haW5Mb2dpY1wiO1xyXG5pbXBvcnQgeyB2YWxpZGF0ZUNyZWF0aW9uVGFza0Zvcm0sIHZhbGlkYXRlRWRpdFRhc2tGb3JtLCB2YWxpZGF0ZVByb2plY3RGb3JtLCB2YWxpZGF0ZU5vdGVGb3JtLCBjbGVhclZhbGlkYXRpb25NZXNzYWdlIH0gZnJvbSBcIi4vdmFsaWRhdGlvblwiO1xyXG5cclxuY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob21lLWJ1dHRvbicpO1xyXG5jb25zdCBtZW51VG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUtdG9nZ2xlJyk7XHJcbmNvbnN0IGFsbFRhc2tzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FsbC10YXNrcy1idXR0b24nKTtcclxuY29uc3QgdG9kYXlUYXNrc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RheS10YXNrcy1idXR0b24nKTtcclxuY29uc3Qgd2Vla1Rhc2tzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dlZWstdGFza3MtYnV0dG9uJyk7XHJcbmNvbnN0IGFsbE5vdGVzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FsbC1ub3Rlcy1idXR0b24nKTtcclxuY29uc3QgY3JlYXRpb25CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRpb24tYnV0dG9uJyk7XHJcbmNvbnN0IGNyZWF0aW9uV2luZG93Q2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRpb24td2luZG93LWNsb3NlLWJ1dHRvbicpO1xyXG5jb25zdCBlZGl0V2luZG93Q2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC13aW5kb3ctY2xvc2UtYnV0dG9uJyk7XHJcbmNvbnN0IHRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1idXR0b24nKTtcclxuY29uc3QgcHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWJ1dHRvbicpO1xyXG5jb25zdCBub3RlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vdGUtYnV0dG9uJyk7XHJcbmNvbnN0IGFkZFRhc2tTdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2stc3VibWl0LWJ1dHRvbicpO1xyXG5jb25zdCBlZGl0VGFza1N1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2stc3VibWl0LWJ1dHRvbicpO1xyXG5jb25zdCBhZGRQcm9qZWN0U3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1wcm9qZWN0LXN1Ym1pdC1idXR0b24nKTtcclxuY29uc3QgYWRkTm90ZVN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtbm90ZS1zdWJtaXQtYnV0dG9uJyk7XHJcbmNvbnN0IHRhc2tUaXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stdGl0bGUtaW5wdXQnKTtcclxuY29uc3QgdGFza0Rlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1kZXNjcmlwdGlvbi1pbnB1dCcpO1xyXG5jb25zdCB0YXNrRHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZGF0ZS1pbnB1dCcpO1xyXG5jb25zdCB0YXNrUHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLXByaW9yaXR5LWlucHV0Jyk7XHJcbmNvbnN0IHByb2plY3RUaXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtdGl0bGUtaW5wdXQnKTtcclxuY29uc3Qgbm90ZVRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbm90ZS10aXRsZS1pbnB1dCcpO1xyXG5jb25zdCBub3RlRGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub3RlLWRlc2NyaXB0aW9uLWlucHV0Jyk7XHJcbmNvbnN0IGxpc3RPZkFsbFRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpc3Qtb2YtYWxsLXRhc2tzJyk7XHJcbmNvbnN0IGVkaXRUYXNrVGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2stdGl0bGUtaW5wdXQnKTtcclxuY29uc3QgZWRpdFRhc2tEZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGFzay1kZXNjcmlwdGlvbi1pbnB1dCcpO1xyXG5jb25zdCBlZGl0VGFza0R1ZURhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2stZGF0ZS1pbnB1dCcpO1xyXG5jb25zdCBlZGl0VGFza1ByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrLXByaW9yaXR5LWlucHV0Jyk7XHJcblxyXG5sZXQgY2hvc2VuVGFzayA9ICcnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHN3aXRjaFRvQWxsVGFza3NWaWV3KCkpO1xyXG4gICAgYWxsVGFza3NCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzd2l0Y2hUb0FsbFRhc2tzVmlldygpKTtcclxuICAgIG1lbnVUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0b2dnbGVNZW51VmlzaWJpbGl0eSgpKTtcclxuICAgIHRvZGF5VGFza3NCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzd2l0Y2hUb1RvZGF5VGFza3NWaWV3KCkpO1xyXG4gICAgd2Vla1Rhc2tzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc3dpdGNoVG9XZWVrVGFza3NWaWV3KCkpO1xyXG4gICAgYWxsTm90ZXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzd2l0Y2hUb0FsbE5vdGVzVmlldygpKTtcclxuICAgIGNyZWF0aW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gb3BlbkNyZWF0aW9uV2luZG93KCkpO1xyXG4gICAgdGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNob3dUYXNrRm9ybSgpKTtcclxuICAgIHByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzaG93UHJvamVjdEZvcm0oKSk7XHJcbiAgICBub3RlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2hvd05vdGVGb3JtKCkpO1xyXG4gICAgY3JlYXRpb25XaW5kb3dDbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNsb3NlQ3JlYXRpb25XaW5kb3coKSk7XHJcbiAgICBlZGl0V2luZG93Q2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjbG9zZUVkaXRXaW5kb3coKSk7XHJcbiAgICB0YXNrVGl0bGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGNsZWFyVmFsaWRhdGlvbk1lc3NhZ2UpO1xyXG4gICAgdGFza0Rlc2NyaXB0aW9uSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBjbGVhclZhbGlkYXRpb25NZXNzYWdlKTtcclxuICAgIHRhc2tEdWVEYXRlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBjbGVhclZhbGlkYXRpb25NZXNzYWdlKTtcclxuICAgIHRhc2tQcmlvcml0eUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgY2xlYXJWYWxpZGF0aW9uTWVzc2FnZSk7XHJcbiAgICBlZGl0VGFza1RpdGxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBjbGVhclZhbGlkYXRpb25NZXNzYWdlKTtcclxuICAgIGVkaXRUYXNrRGVzY3JpcHRpb25JbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGNsZWFyVmFsaWRhdGlvbk1lc3NhZ2UpO1xyXG4gICAgZWRpdFRhc2tEdWVEYXRlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBjbGVhclZhbGlkYXRpb25NZXNzYWdlKTtcclxuICAgIGVkaXRUYXNrUHJpb3JpdHlJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGNsZWFyVmFsaWRhdGlvbk1lc3NhZ2UpO1xyXG4gICAgcHJvamVjdFRpdGxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBjbGVhclZhbGlkYXRpb25NZXNzYWdlKTtcclxuICAgIG5vdGVUaXRsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgY2xlYXJWYWxpZGF0aW9uTWVzc2FnZSk7XHJcbiAgICBub3RlRGVzY3JpcHRpb25JbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGNsZWFyVmFsaWRhdGlvbk1lc3NhZ2UpO1xyXG4gICAgYWRkVGFza1N1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmICh2YWxpZGF0ZUNyZWF0aW9uVGFza0Zvcm0oKSkge1xyXG4gICAgICAgICAgICBjcmVhdGVOZXdUYXNrQ29udGFpbmVyKCk7XHJcbiAgICAgICAgICAgIGFkZE5ld1Rhc2soKTtcclxuICAgICAgICAgICAgaGFuZGxlUGFnZUltYWdlRGlzcGxheWluZygpO1xyXG4gICAgICAgICAgICBjbG9zZUNyZWF0aW9uV2luZG93KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBsaXN0T2ZBbGxUYXNrcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFza1RvRWRpdCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5uZXctdGFzay1jb250YWluZXInKTtcclxuICAgICAgICBjb25zdCBlZGl0QnV0dG9uID0gZS50YXJnZXQuY2xvc2VzdCgnLmVkaXQtYnV0dG9uJyk7XHJcbiAgICAgICAgY2hvc2VuVGFzayA9IHRhc2tUb0VkaXQ7XHJcbiAgICAgICAgaWYgKGVkaXRCdXR0b24pIHtcclxuICAgICAgICAgICAgb3BlbkVkaXRUYXNrV2luZG93KGNob3NlblRhc2spO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgZWRpdFRhc2tTdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAodmFsaWRhdGVFZGl0VGFza0Zvcm0oKSkge1xyXG4gICAgICAgICAgICBlZGl0Q2hvc2VuVGFzayhjaG9zZW5UYXNrLCBlZGl0VGFza1RpdGxlSW5wdXQudmFsdWUsIGVkaXRUYXNrRHVlRGF0ZUlucHV0LnZhbHVlLCBlZGl0VGFza1ByaW9yaXR5SW5wdXQpO1xyXG4gICAgICAgICAgICBjbG9zZUVkaXRXaW5kb3coKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGFkZFByb2plY3RTdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAodmFsaWRhdGVQcm9qZWN0Rm9ybSgpKSB7XHJcbiAgICAgICAgICAgIGFkZE5ld1Byb2plY3QoKTtcclxuICAgICAgICAgICAgY2xvc2VDcmVhdGlvbldpbmRvdygpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgYWRkTm90ZVN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmICh2YWxpZGF0ZU5vdGVGb3JtKCkpIHtcclxuICAgICAgICAgICAgY3JlYXRlTmV3Tm90ZUNvbnRhaW5lcigpO1xyXG4gICAgICAgICAgICBhZGROZXdOb3RlKCk7XHJcbiAgICAgICAgICAgIGhhbmRsZVBhZ2VJbWFnZURpc3BsYXlpbmcoKTtcclxuICAgICAgICAgICAgY2xvc2VDcmVhdGlvbldpbmRvdygpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgbGlzdE9mQWxsVGFza3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhc2tUb0RlbGV0ZSA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5uZXctdGFzay1jb250YWluZXInKTtcclxuICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBlLnRhcmdldC5jbG9zZXN0KCcuZGVsZXRlLWJ1dHRvbicpO1xyXG4gICAgICAgIGlmIChkZWxldGVCdXR0b24pIHtcclxuICAgICAgICAgICAgdGFza1RvRGVsZXRlLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBkZWxldGVDaG9zZW5UYXNrKHRhc2tUb0RlbGV0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGhhbmRsZVBhZ2VJbWFnZURpc3BsYXlpbmcoKTtcclxuICAgIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IHNldE5ld1Rhc2tDb2xvciB9IGZyb20gXCIuL2RvbU1hbmlwdWxhdGlvblwiO1xyXG5cclxuY29uc3QgY3JlYXRpb25UYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGlvbi10YXNrLWZvcm0nKTtcclxuY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1mb3JtJyk7XHJcbmNvbnN0IG5vdGVGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vdGUtZm9ybScpO1xyXG5jb25zdCB0YXNrVGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLXRpdGxlLWlucHV0Jyk7XHJcbmNvbnN0IHRhc2tEZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZGVzY3JpcHRpb24taW5wdXQnKTtcclxuY29uc3QgdGFza0R1ZURhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWRhdGUtaW5wdXQnKTtcclxuY29uc3QgdGFza1Byb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLXByb2plY3QtaW5wdXQnKTtcclxuY29uc3QgdGFza1ByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1wcmlvcml0eS1pbnB1dCcpO1xyXG5jb25zdCBwcm9qZWN0VGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LXRpdGxlLWlucHV0Jyk7XHJcbmNvbnN0IG5vdGVUaXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vdGUtdGl0bGUtaW5wdXQnKTtcclxuY29uc3Qgbm90ZURlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbm90ZS1kZXNjcmlwdGlvbi1pbnB1dCcpO1xyXG5jb25zdCBlZGl0VGFza1RpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrLXRpdGxlLWlucHV0Jyk7XHJcbmNvbnN0IGVkaXRUYXNrRGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2stZGVzY3JpcHRpb24taW5wdXQnKTtcclxuY29uc3QgZWRpdFRhc2tEdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrLWRhdGUtaW5wdXQnKTtcclxuY29uc3QgZWRpdFRhc2tQcmlvcml0eUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGFzay1wcmlvcml0eS1pbnB1dCcpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHRhc2tPYmplY3QgPSB7XHJcbiAgICB0YXNrc0FycmF5OiBbXSxcclxuICAgIHRhc2tUaXRsZXNBcnJheTogW10sXHJcblxyXG4gICAgdGFza0ZhY3RvcnkodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcm9qZWN0LCBwcmlvcml0eSwgaXNEb25lID0gZmFsc2UpIHtcclxuICAgICAgICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByb2plY3QsIHByaW9yaXR5LCBpc0RvbmUgfTtcclxuICAgIH0sXHJcblxyXG4gICAgYWRkVGFzayhuZXdUYXNrKSB7XHJcbiAgICAgICAgY29uc3QgYWxsVGFza3NBcnJheSA9IHRoaXMudGFza3NBcnJheTtcclxuICAgICAgICBjb25zdCBhbGxUYXNrVGl0bGVzQXJyYXkgPSB0aGlzLnRhc2tUaXRsZXNBcnJheTtcclxuICAgICAgICBhbGxUYXNrc0FycmF5LnB1c2gobmV3VGFzayk7XHJcbiAgICAgICAgYWxsVGFza1RpdGxlc0FycmF5LnB1c2gobmV3VGFzay50aXRsZSk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdVcGRhdGVkIGFsbFRhc2tzQXJyYXk6JywgYWxsVGFza3NBcnJheSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGRlbGV0ZVRhc2sodGFza1RvRGVsZXRlKSB7XHJcbiAgICAgICAgY29uc3QgYWxsVGFza3NBcnJheSA9IHRoaXMudGFza3NBcnJheTtcclxuICAgICAgICBjb25zdCBhbGxUYXNrVGl0bGVzQXJyYXkgPSB0aGlzLnRhc2tUaXRsZXNBcnJheTtcclxuICAgICAgICBjb25zdCBpbmRleFRvRGVsZXRlID0gcGFyc2VJbnQodGFza1RvRGVsZXRlLmdldEF0dHJpYnV0ZSgnaWQnKSwgMTApO1xyXG4gICAgICAgIGNvbnN0IHRhc2tDb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5ldy10YXNrLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmV3LXRhc2stdGl0bGUnKTtcclxuICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmV3LXRhc2stZGF0ZScpO1xyXG4gICAgICAgIGFsbFRhc2tzQXJyYXkuc3BsaWNlKGluZGV4VG9EZWxldGUsIDEpO1xyXG4gICAgICAgIGFsbFRhc2tUaXRsZXNBcnJheS5zcGxpY2UoaW5kZXhUb0RlbGV0ZSwgMSk7XHJcbiAgICAgICAgdGFza0NvbnRhaW5lcnMuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgdGFzay5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFzaycsIGluZGV4KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0YXNrVGl0bGVzLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHRhc2suc2V0QXR0cmlidXRlKCdkYXRhLXRhc2stdGl0bGUnLCBpbmRleCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGFza0R1ZURhdGVzLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHRhc2suc2V0QXR0cmlidXRlKCdkYXRhLXRhc2stZGF0ZScsIGluZGV4KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1VwZGF0ZWQgYWxsVGFza3NBcnJheTonLCBhbGxUYXNrc0FycmF5KTtcclxuICAgIH0sXHJcblxyXG4gICAgZWRpdFRhc2soY2hvc2VuVGFzaywgbmV3VGl0bGUsIG5ld0Rlc2NyaXB0aW9uLCBuZXdEdWVEYXRlLCBuZXdQcmlvcml0eSkge1xyXG4gICAgICAgIGNvbnN0IGFsbFRhc2tzQXJyYXkgPSB0aGlzLnRhc2tzQXJyYXk7XHJcbiAgICAgICAgY29uc3QgYWxsVGFza1RpdGxlc0FycmF5ID0gdGhpcy50YXNrVGl0bGVzQXJyYXk7XHJcbiAgICAgICAgY29uc3QgaW5kZXhUb0VkaXQgPSBwYXJzZUludChjaG9zZW5UYXNrLmdldEF0dHJpYnV0ZSgnZGF0YS10YXNrJyksIDEwKTtcclxuICAgICAgICBjb25zdCB0YXNrVG9FZGl0ID0gYWxsVGFza3NBcnJheVtpbmRleFRvRWRpdF07XHJcbiAgICAgICAgdGFza1RvRWRpdC50aXRsZSA9IG5ld1RpdGxlO1xyXG4gICAgICAgIHRhc2tUb0VkaXQuZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcclxuICAgICAgICB0YXNrVG9FZGl0LmR1ZURhdGUgPSBuZXdEdWVEYXRlO1xyXG4gICAgICAgIHRhc2tUb0VkaXQucHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcclxuICAgICAgICBjb25zb2xlLmxvZyhpbmRleFRvRWRpdCk7XHJcbiAgICAgICAgYWxsVGFza1RpdGxlc0FycmF5LnNwbGljZShpbmRleFRvRWRpdCwgMSwgbmV3VGl0bGUpO1xyXG4gICAgICAgIGFsbFRhc2tzQXJyYXkuc3BsaWNlKGluZGV4VG9FZGl0LCAxLCB0YXNrVG9FZGl0KTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1VwZGF0ZWQgYWxsVGFza3NBcnJheTonLCBhbGxUYXNrc0FycmF5KTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9qZWN0T2JqZWN0ID0ge1xyXG4gICAgcHJvamVjdHNBcnJheTogW10sXHJcblxyXG4gICAgcHJvamVjdEZhY3RvcnkodGl0bGUpIHtcclxuICAgICAgICByZXR1cm4geyB0aXRsZSB9O1xyXG4gICAgfSxcclxuXHJcbiAgICBhZGRQcm9qZWN0KG5ld1Byb2plY3QpIHtcclxuICAgICAgICBjb25zdCBhbGxQcm9qZWN0c0FycmF5ID0gdGhpcy5wcm9qZWN0c0FycmF5O1xyXG4gICAgICAgIGFsbFByb2plY3RzQXJyYXkucHVzaChuZXdQcm9qZWN0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhhbGxQcm9qZWN0c0FycmF5KTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBub3RlT2JqZWN0ID0ge1xyXG4gICAgbm90ZXNBcnJheTogW10sXHJcblxyXG4gICAgbm90ZUZhY3RvcnkodGl0bGUsIGRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uIH07XHJcbiAgICB9LFxyXG5cclxuICAgIGFkZE5vdGUobmV3Tm90ZSkge1xyXG4gICAgICAgIGNvbnN0IGFsbE5vdGVzQXJyYXkgPSB0aGlzLm5vdGVzQXJyYXk7XHJcbiAgICAgICAgYWxsTm90ZXNBcnJheS5wdXNoKG5ld05vdGUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGFsbE5vdGVzQXJyYXkpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld1Rhc2soKSB7XHJcbiAgICBjb25zdCBuZXdUYXNrID0gdGFza09iamVjdC50YXNrRmFjdG9yeSh0YXNrVGl0bGVJbnB1dC52YWx1ZSwgdGFza0Rlc2NyaXB0aW9uSW5wdXQudmFsdWUsIHRhc2tEdWVEYXRlSW5wdXQudmFsdWUsIHRhc2tQcm9qZWN0SW5wdXQudmFsdWUsIHRhc2tQcmlvcml0eUlucHV0LnZhbHVlKTtcclxuICAgIHRhc2tPYmplY3QuYWRkVGFzayhuZXdUYXNrKTtcclxuICAgIGNyZWF0aW9uVGFza0Zvcm0ucmVzZXQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRDaG9zZW5UYXNrKGNob3NlblRhc2ssIG5ld1RpdGxlLCBuZXdEdWVEYXRlLCBuZXdQcmlvcml0eSkge1xyXG4gICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGFzay10aXRsZT1cIiR7Y2hvc2VuVGFzay5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFzaycpfVwiXWApO1xyXG4gICAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10YXNrLWRhdGU9XCIke2Nob3NlblRhc2suZ2V0QXR0cmlidXRlKCdkYXRhLXRhc2snKX1cIl1gKTtcclxuICAgIHRhc2tUaXRsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFzay10aXRsZScsIGNob3NlblRhc2suZ2V0QXR0cmlidXRlKCdkYXRhLXRhc2snKSk7XHJcbiAgICB0YXNrRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFzay1kYXRlJywgY2hvc2VuVGFzay5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFzaycpKTtcclxuICAgIHRhc2tPYmplY3QuZWRpdFRhc2soY2hvc2VuVGFzaywgZWRpdFRhc2tUaXRsZUlucHV0LnZhbHVlLCBlZGl0VGFza0Rlc2NyaXB0aW9uSW5wdXQudmFsdWUsIGVkaXRUYXNrRHVlRGF0ZUlucHV0LnZhbHVlLCBlZGl0VGFza1ByaW9yaXR5SW5wdXQudmFsdWUpO1xyXG4gICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gbmV3VGl0bGU7XHJcbiAgICB0YXNrRHVlRGF0ZS50ZXh0Q29udGVudCA9IG5ld0R1ZURhdGU7XHJcbiAgICBzZXROZXdUYXNrQ29sb3IoY2hvc2VuVGFzaywgbmV3UHJpb3JpdHkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlQ2hvc2VuVGFzayhjaG9zZW5UYXNrKSB7XHJcbiAgICB0YXNrT2JqZWN0LmRlbGV0ZVRhc2soY2hvc2VuVGFzayk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdQcm9qZWN0KCkge1xyXG4gICAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3RPYmplY3QucHJvamVjdEZhY3RvcnkocHJvamVjdFRpdGxlSW5wdXQudmFsdWUpO1xyXG4gICAgcHJvamVjdE9iamVjdC5hZGRQcm9qZWN0KG5ld1Byb2plY3QpO1xyXG4gICAgcHJvamVjdEZvcm0ucmVzZXQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld05vdGUoKSB7XHJcbiAgICBjb25zdCBuZXdOb3RlID0gbm90ZU9iamVjdC5ub3RlRmFjdG9yeShub3RlVGl0bGVJbnB1dC52YWx1ZSwgbm90ZURlc2NyaXB0aW9uSW5wdXQudmFsdWUpO1xyXG4gICAgbm90ZU9iamVjdC5hZGROb3RlKG5ld05vdGUpO1xyXG4gICAgbm90ZUZvcm0ucmVzZXQoKTtcclxufVxyXG5cclxuIiwiaW1wb3J0IHsgdGFza09iamVjdCB9IGZyb20gXCIuL21haW5Mb2dpY1wiO1xyXG5cclxuY29uc3QgdGFza1RpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay10aXRsZS1pbnB1dCcpO1xyXG5jb25zdCB0YXNrRGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWRlc2NyaXB0aW9uLWlucHV0Jyk7XHJcbmNvbnN0IHRhc2tEdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1kYXRlLWlucHV0Jyk7XHJcbmNvbnN0IHRhc2tQcmlvcml0eUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stcHJpb3JpdHktaW5wdXQnKTtcclxuY29uc3QgZWRpdFRhc2tUaXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGFzay10aXRsZS1pbnB1dCcpO1xyXG5jb25zdCBlZGl0VGFza0Rlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrLWRlc2NyaXB0aW9uLWlucHV0Jyk7XHJcbmNvbnN0IGVkaXRUYXNrRHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGFzay1kYXRlLWlucHV0Jyk7XHJcbmNvbnN0IGVkaXRUYXNrUHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2stcHJpb3JpdHktaW5wdXQnKTtcclxuY29uc3QgcHJvamVjdFRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC10aXRsZS1pbnB1dCcpO1xyXG5jb25zdCBub3RlVGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub3RlLXRpdGxlLWlucHV0Jyk7XHJcbmNvbnN0IG5vdGVEZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vdGUtZGVzY3JpcHRpb24taW5wdXQnKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUNyZWF0aW9uVGFza0Zvcm0oKSB7XHJcbiAgICBpZiAodGFza09iamVjdC50YXNrVGl0bGVzQXJyYXkuaW5jbHVkZXModGFza1RpdGxlSW5wdXQudmFsdWUpKSB7XHJcbiAgICAgICAgdGFza1RpdGxlSW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJ1BsZWFzZSBlbnRlciBhIHVuaXF1ZSB0YXNrIHRpdGxlLicpO1xyXG4gICAgICAgIHRhc2tUaXRsZUlucHV0LnJlcG9ydFZhbGlkaXR5KCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBpZiAodGFza1RpdGxlSW5wdXQudmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgdGFza1RpdGxlSW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJ1BsZWFzZSBlbnRlciBhIHRpdGxlIGZvciB5b3VyIHRhc2suJyk7XHJcbiAgICAgICAgdGFza1RpdGxlSW5wdXQucmVwb3J0VmFsaWRpdHkoKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGlmICh0YXNrVGl0bGVJbnB1dC52YWx1ZS5sZW5ndGggPiAyMCkge1xyXG4gICAgICAgIHRhc2tUaXRsZUlucHV0LnNldEN1c3RvbVZhbGlkaXR5KCdQbGVhc2UgZW50ZXIgYSB0aXRsZSBvZiBubyBtb3JlIHRoYW4gMjAgY2hhcmFjdGVycy4nKTtcclxuICAgICAgICB0YXNrVGl0bGVJbnB1dC5yZXBvcnRWYWxpZGl0eSgpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSBpZiAodGFza0Rlc2NyaXB0aW9uSW5wdXQudmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uSW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJ1BsZWFzZSBlbnRlciBhIGRlc2NyaXB0aW9uIGZvciB5b3VyIHRhc2suJyk7XHJcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uSW5wdXQucmVwb3J0VmFsaWRpdHkoKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2UgaWYgKHRhc2tEdWVEYXRlSW5wdXQudmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgdGFza0R1ZURhdGVJbnB1dC5zZXRDdXN0b21WYWxpZGl0eSgnUGxlYXNlIGVudGVyIGEgZHVlIGRhdGUgZm9yIHlvdXIgdGFzay4nKTtcclxuICAgICAgICB0YXNrRHVlRGF0ZUlucHV0LnJlcG9ydFZhbGlkaXR5KCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIGlmICh0YXNrUHJpb3JpdHlJbnB1dC52YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICB0YXNrUHJpb3JpdHlJbnB1dC5zZXRDdXN0b21WYWxpZGl0eSgnUGxlYXNlIGVudGVyIGEgcHJpb3JpdHkgZm9yIHlvdXIgdGFzay4nKTtcclxuICAgICAgICB0YXNrUHJpb3JpdHlJbnB1dC5yZXBvcnRWYWxpZGl0eSgpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVFZGl0VGFza0Zvcm0oKSB7XHJcbiAgICBpZiAodGFza09iamVjdC50YXNrVGl0bGVzQXJyYXlbdGFza09iamVjdC50YXNrVGl0bGVzQXJyYXkuaW5kZXhPZihlZGl0VGFza1RpdGxlSW5wdXQudmFsdWUpXSA9PT0gZWRpdFRhc2tUaXRsZUlucHV0LnRleHRDb250ZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0YXNrT2JqZWN0LnRhc2tUaXRsZXNBcnJheS5pbmNsdWRlcyhlZGl0VGFza1RpdGxlSW5wdXQudmFsdWUpKSB7XHJcbiAgICAgICAgZWRpdFRhc2tUaXRsZUlucHV0LnNldEN1c3RvbVZhbGlkaXR5KCdQbGVhc2UgZW50ZXIgYSB1bmlxdWUgdGFzayB0aXRsZS4nKTtcclxuICAgICAgICBlZGl0VGFza1RpdGxlSW5wdXQucmVwb3J0VmFsaWRpdHkoKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGlmIChlZGl0VGFza1RpdGxlSW5wdXQudmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgZWRpdFRhc2tUaXRsZUlucHV0LnNldEN1c3RvbVZhbGlkaXR5KCdQbGVhc2UgZW50ZXIgYSB0aXRsZSBmb3IgeW91ciB0YXNrLicpO1xyXG4gICAgICAgIGVkaXRUYXNrVGl0bGVJbnB1dC5yZXBvcnRWYWxpZGl0eSgpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gaWYgKGVkaXRUYXNrVGl0bGVJbnB1dC52YWx1ZS5sZW5ndGggPiAyMCkge1xyXG4gICAgICAgIGVkaXRUYXNrVGl0bGVJbnB1dC5zZXRDdXN0b21WYWxpZGl0eSgnUGxlYXNlIGVudGVyIGEgdGl0bGUgb2Ygbm8gbW9yZSB0aGFuIDIwIGNoYXJhY3RlcnMuJyk7XHJcbiAgICAgICAgZWRpdFRhc2tUaXRsZUlucHV0LnJlcG9ydFZhbGlkaXR5KCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIGlmIChlZGl0VGFza0Rlc2NyaXB0aW9uSW5wdXQudmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgZWRpdFRhc2tEZXNjcmlwdGlvbklucHV0LnNldEN1c3RvbVZhbGlkaXR5KCdQbGVhc2UgZW50ZXIgYSBkZXNjcmlwdGlvbiBmb3IgeW91ciB0YXNrLicpO1xyXG4gICAgICAgIGVkaXRUYXNrRGVzY3JpcHRpb25JbnB1dC5yZXBvcnRWYWxpZGl0eSgpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSBpZiAoZWRpdFRhc2tEdWVEYXRlSW5wdXQudmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgZWRpdFRhc2tEdWVEYXRlSW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJ1BsZWFzZSBlbnRlciBhIGR1ZSBkYXRlIGZvciB5b3VyIHRhc2suJyk7XHJcbiAgICAgICAgZWRpdFRhc2tEdWVEYXRlSW5wdXQucmVwb3J0VmFsaWRpdHkoKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2UgaWYgKGVkaXRUYXNrUHJpb3JpdHlJbnB1dC52YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICBlZGl0VGFza1ByaW9yaXR5SW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJ1BsZWFzZSBlbnRlciBhIHByaW9yaXR5IGZvciB5b3VyIHRhc2suJyk7XHJcbiAgICAgICAgZWRpdFRhc2tQcmlvcml0eUlucHV0LnJlcG9ydFZhbGlkaXR5KCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVByb2plY3RGb3JtKCkge1xyXG4gICAgaWYgKHByb2plY3RUaXRsZUlucHV0LnZhbHVlID09PSAnJykge1xyXG4gICAgICAgIHByb2plY3RUaXRsZUlucHV0LnNldEN1c3RvbVZhbGlkaXR5KCdQbGVhc2UgZW50ZXIgYSB0aXRsZSBmb3IgeW91ciBwcm9qZWN0LicpO1xyXG4gICAgICAgIHByb2plY3RUaXRsZUlucHV0LnJlcG9ydFZhbGlkaXR5KCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZU5vdGVGb3JtKCkge1xyXG4gICAgaWYgKG5vdGVUaXRsZUlucHV0LnZhbHVlID09PSAnJykge1xyXG4gICAgICAgIG5vdGVUaXRsZUlucHV0LnNldEN1c3RvbVZhbGlkaXR5KCdQbGVhc2UgZW50ZXIgYSB0aXRsZSBmb3IgeW91ciBub3RlLicpO1xyXG4gICAgICAgIG5vdGVUaXRsZUlucHV0LnJlcG9ydFZhbGlkaXR5KCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIGlmIChub3RlRGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICBub3RlRGVzY3JpcHRpb25JbnB1dC5zZXRDdXN0b21WYWxpZGl0eSgnUGxlYXNlIGVudGVyIGEgZGVzY3JpcHRpb24gZm9yIHlvdXIgbm90ZS4nKTtcclxuICAgICAgICBub3RlRGVzY3JpcHRpb25JbnB1dC5yZXBvcnRWYWxpZGl0eSgpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJWYWxpZGF0aW9uTWVzc2FnZSgpIHtcclxuICAgIHN3aXRjaCAodGhpcykge1xyXG4gICAgICAgIGNhc2UgdGFza1RpdGxlSW5wdXQ6XHJcbiAgICAgICAgY2FzZSB0YXNrRGVzY3JpcHRpb25JbnB1dDpcclxuICAgICAgICBjYXNlIHRhc2tEdWVEYXRlSW5wdXQ6XHJcbiAgICAgICAgY2FzZSB0YXNrUHJpb3JpdHlJbnB1dDpcclxuICAgICAgICBjYXNlIGVkaXRUYXNrVGl0bGVJbnB1dDpcclxuICAgICAgICBjYXNlIGVkaXRUYXNrRGVzY3JpcHRpb25JbnB1dDpcclxuICAgICAgICBjYXNlIGVkaXRUYXNrRHVlRGF0ZUlucHV0OlxyXG4gICAgICAgIGNhc2UgZWRpdFRhc2tQcmlvcml0eUlucHV0OlxyXG4gICAgICAgIGNhc2UgcHJvamVjdFRpdGxlSW5wdXQ6XHJcbiAgICAgICAgY2FzZSBub3RlVGl0bGVJbnB1dDpcclxuICAgICAgICBjYXNlIG5vdGVEZXNjcmlwdGlvbklucHV0OlxyXG4gICAgICAgICAgICB0aGlzLnNldEN1c3RvbVZhbGlkaXR5KCcnKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgSWNvbiBmcm9tICcuL2ltYWdlcy90YWItaWNvbi5wbmcnO1xyXG5pbXBvcnQgeyBjcmVhdGVJbWFnZXMgfSBmcm9tICcuL2RvbU1hbmlwdWxhdGlvbic7XHJcbmltcG9ydCB7IGhhbmRsZUV2ZW50TGlzdGVuZXJzIH0gZnJvbSAnLi9oYW5kbGVFdmVudExpc3RlbmVycyc7XHJcbmltcG9ydCB7IHRhc2tPYmplY3QgfSBmcm9tICcuL21haW5Mb2dpYyc7XHJcblxyXG5jb25zdCBoZWFkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZCcpO1xyXG5jb25zdCB0YWJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xyXG50YWJJY29uLnJlbCA9ICdpY29uJztcclxudGFiSWNvbi5ocmVmID0gSWNvbjtcclxuaGVhZC5hcHBlbmRDaGlsZCh0YWJJY29uKTtcclxuXHJcbmNyZWF0ZUltYWdlcygpO1xyXG5oYW5kbGVFdmVudExpc3RlbmVycygpO1xyXG5cclxuY29uc29sZS5sb2codGFza09iamVjdC50YXNrc0FycmF5Lmxlbmd0aCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9