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

.task-container {
    display: flex;
    align-items: center;
    padding: 0.5rem 0;
    border-radius: 0.5rem;
    width: calc(100% - 10px);
    background-color: #80808066;
    border-left: 10px solid;
}

.task-data-container {
    display: flex;
    justify-content: center;
}

.task-status-checkbox {
    width: 1rem;
    height: 1rem;
    border-radius: 0.5rem;
    margin: auto 1rem;
}

.task-title {
    margin-right: auto;
}

.task-date {
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n    -webkit-tap-highlight-color: rgba(255, 255, 255, 0) !important;\r\n    outline: none !important;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n    height: 100vh;\r\n    background-color: #f5f5f5;\r\n}\r\n\r\n.content {\r\n    display: flex;\r\n    height: calc(100vh - 7.7rem);\r\n}\r\n\r\nheader {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 0.5rem;\r\n    border-bottom: 1px solid black;\r\n    font-size: 1.5rem;\r\n}\r\n\r\nbutton,\r\ni {\r\n    cursor: pointer;\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n}\r\n\r\n.title {\r\n    text-shadow: 0px 0px 15px rgba(0, 0, 0, 0.6);\r\n}\r\n\r\n.title-container {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.5rem;\r\n}\r\n\r\n.title-image {\r\n    width: 3rem;\r\n    height: 3rem;\r\n    border-radius: 50%;\r\n    box-shadow: 0 0 15px 3px #000000;\r\n}\r\n\r\n.header-buttons {\r\n    display: flex;\r\n    gap: 0.5rem;\r\n    font-size: 1rem;\r\n    padding: 0.5rem;\r\n    margin-right: auto;\r\n}\r\n\r\n.title-container {\r\n    position: absolute;\r\n}\r\n\r\n.pages {\r\n    display: none;\r\n    flex-direction: column;\r\n    padding: 1rem 1.5rem 0 1.5rem;\r\n    background-color: #dcdcdc;\r\n    width: calc(100vw - 23rem);\r\n    transition: 0.3s ease-in-out;\r\n}\r\n\r\n.page-active {\r\n    display: flex;\r\n}\r\n\r\n.pages-full {\r\n    width: calc(100vw - 3rem);\r\n}\r\n\r\n.page-titles {\r\n    font-size: 2rem;\r\n    text-align: center;\r\n    border-radius: 0.5rem;\r\n    padding: 0.5rem;\r\n    background-color: #80808066;\r\n}\r\n\r\n.menu-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 20rem;\r\n    transition: 0.3s ease-in-out;\r\n}\r\n\r\n.hidden-menu {\r\n    transform: translateX(-20rem);\r\n    width: 0;\r\n}\r\n\r\n.menu-titles {\r\n    padding-bottom: 0.5rem;\r\n    border-bottom: 3px double black;\r\n}\r\n\r\n.lists {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    word-wrap: break-word;\r\n    gap: 1rem;\r\n    padding: 1.5rem 0 1rem 0;\r\n    border-radius: 0.5rem;\r\n}\r\n\r\n.task-container {\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 0.5rem 0;\r\n    border-radius: 0.5rem;\r\n    width: calc(100% - 10px);\r\n    background-color: #80808066;\r\n    border-left: 10px solid;\r\n}\r\n\r\n.task-data-container {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.task-status-checkbox {\r\n    width: 1rem;\r\n    height: 1rem;\r\n    border-radius: 0.5rem;\r\n    margin: auto 1rem;\r\n}\r\n\r\n.task-title {\r\n    margin-right: auto;\r\n}\r\n\r\n.task-date {\r\n    margin-right: 3rem;\r\n}\r\n\r\n.buttons-container {\r\n    display: flex;\r\n    gap: 0.5rem;\r\n    margin-right: 1rem;\r\n}\r\n\r\n.no-tasks-image,\r\n.no-notes-image {\r\n    display: none;\r\n    height: 75%;\r\n    opacity: 0.5;\r\n    margin: auto;\r\n}\r\n\r\n.image-active {\r\n    display: block;\r\n}\r\n\r\n.sections {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1.5rem;\r\n    padding: 1.5rem;\r\n}\r\n\r\n.menu-buttons-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: start;\r\n    gap: 0.5rem;\r\n}\r\n\r\n.menu-buttons,\r\n.creation-button,\r\ni {\r\n    transition: 0.3s ease-in-out;\r\n}\r\n\r\n.menu-buttons {\r\n    display: flex;\r\n    justify-content: start;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    padding: 0.5rem 1rem;\r\n    width: 100%;\r\n    border: none;\r\n    border-radius: 0.5rem;\r\n    font-weight: bold;\r\n    font-size: 1rem;\r\n    background-color: #d7d7d7;\r\n    white-space: nowrap;\r\n}\r\n\r\n.menu-buttons .fas {\r\n    width: 2.5rem;\r\n}\r\n\r\n.creation-button {\r\n    text-align: center;\r\n    width: 75%;\r\n    background-color: rgba(124, 124, 255, 0.5);\r\n    align-self: center;\r\n    border: none;\r\n    border-radius: 1rem;\r\n    font-size: 4rem;\r\n    font-weight: bold;\r\n    margin: 0 auto auto auto;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    color: rgba(0, 0, 0, 0.75);\r\n    box-shadow: inset 0 0 35px 5px rgba(0, 0, 0, 0.25), inset 0 2px 1px 1px rgba(255, 255, 255, 0.9), inset 0 -2px 1px rgba(0, 0, 0, 0.25);\r\n}\r\n\r\nfooter {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 0.5rem;\r\n    height: 3rem;\r\n    position: absolute;\r\n    bottom: 0;\r\n    width: 100%;\r\n    font-weight: bold;\r\n    border-top: 1px solid black;\r\n}\r\n\r\n.github-link {\r\n    color: inherit;\r\n    text-decoration: none;\r\n}\r\n\r\nheader i {\r\n    border-radius: 0.5rem;\r\n    padding: 0.3rem;\r\n}\r\n\r\n.overlay {\r\n    display: none;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: #00000080;\r\n    backdrop-filter: blur(8px);\r\n    z-index: 9998;\r\n}\r\n\r\n.overlay-active {\r\n    display: block;\r\n}\r\n\r\n.creation-and-edit-windows {\r\n    display: flex;\r\n    flex-direction: column;\r\n    border: none;\r\n    border-radius: 1rem;\r\n    width: 55rem;\r\n    height: 35rem;\r\n    background-color: #d3d3d3;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%) scale(0);\r\n    transition: 0.3s ease-in-out;\r\n    transition-duration: 0.3s;\r\n    transition-timing-function: ease;\r\n    transition-delay: 0s;\r\n    position: absolute;\r\n    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;\r\n    z-index: 9999;\r\n}\r\n\r\n#edit-task-window {\r\n    height: 30rem;\r\n}\r\n\r\n#edit-window-main-section {\r\n    margin: 0;\r\n}\r\n\r\n#edit-task-form {\r\n    margin: auto;\r\n}\r\n\r\n.open-window {\r\n    visibility: visible;\r\n    transform: translate(-50%, -50%) scale(1);\r\n}\r\n\r\n.creation-and-edit-windows-header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    background: #aaaaff;\r\n    border-top-left-radius: 1rem;\r\n    border-top-right-radius: 1rem;\r\n    padding: 1.5rem;\r\n}\r\n\r\n.creation-and-edit-windows-title {\r\n    font-size: 1.8rem;\r\n}\r\n\r\n.creation-and-edit-windows-main-section {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    gap: 1rem;\r\n    flex-direction: column;\r\n    margin: auto;\r\n    height: 80%;\r\n}\r\n\r\n.selection-section {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    gap: 1rem;\r\n    padding: 0 0 1rem 0;\r\n    border-bottom: 3px double black;\r\n}\r\n\r\n.selection-buttons {\r\n    width: 100%;\r\n    height: 2.5rem;\r\n    border: none;\r\n    border-radius: 0.5rem;\r\n    font-size: 1.2rem;\r\n    font-weight: bold;\r\n    transition: 0.3s ease-in-out;\r\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\r\n}\r\n\r\n.creation-and-edit-windows-forms {\r\n    display: none;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n    width: 50rem;\r\n}\r\n\r\n.form-active {\r\n    display: flex;\r\n}\r\n\r\n.creation-and-edit-windows-textareas {\r\n    resize: none;\r\n    padding: 0.5rem;\r\n}\r\n\r\ntextarea {\r\n    border: none;\r\n    border-radius: 0.5rem;\r\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\r\n}\r\n\r\n.creation-and-edit-windows-button {\r\n    width: 25%;\r\n    height: 3rem;\r\n    border: none;\r\n    border-radius: 0.5rem;\r\n    margin: 0.5rem auto 0 auto;\r\n    font-size: 1rem;\r\n    font-weight: bold;\r\n    background-color: hsla(0, 0%, 0%, 0.75);\r\n    color: #ffffff;\r\n    transition: 0.3s ease-in-out;\r\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\r\n}\r\n\r\n.creation-and-edit-windows label {\r\n    margin-right: 0.3rem;\r\n    font-weight: bold;\r\n    margin: auto 0.3rem auto 0;\r\n    font-size: 1rem;\r\n}\r\n\r\n.textareas-titles {\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.textareas-descriptions {\r\n    font-size: 1rem;\r\n}\r\n\r\n#task-description-input,\r\n#edit-task-description-input {\r\n    height: 10rem;\r\n}\r\n\r\n#project-title-input {\r\n    height: 17.5rem;\r\n}\r\n\r\n#note-description-input {\r\n    height: 12.7rem;\r\n}\r\n\r\n.creation-and-edit-windows-inputs-section {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    gap: 0.5rem;\r\n    height: 1.7rem;\r\n}\r\n\r\n.creation-and-edit-windows-inputs-section input,\r\nselect {\r\n    cursor: pointer;\r\n    width: 10rem;\r\n    padding: 0.3rem;\r\n    border: none;\r\n    border-radius: 0.3rem;\r\n    font-weight: bold;\r\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\r\n}\r\n\r\n.creation-and-edit-windows-sections {\r\n    display: flex;\r\n}\r\n\r\n.menu-buttons:hover,\r\nheader i:hover,\r\n.menu-button-active {\r\n    background-color: #68686866;\r\n}\r\n\r\nfooter i:hover {\r\n    transform: rotate(360deg);\r\n}\r\n\r\n.creation-button:hover {\r\n    background-color: #7c7cffd9;\r\n}\r\n\r\n.selection-buttons:hover,\r\n.selection-button-active {\r\n    background: #707070;\r\n    color: #ffffff;\r\n}\r\n\r\n.creation-and-edit-windows-button:hover {\r\n    background-color: #000000e6;\r\n}"],"sourceRoot":""}]);
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
/* harmony export */   ContainerCreator: () => (/* binding */ ContainerCreator),
/* harmony export */   CreationWindow: () => (/* binding */ CreationWindow),
/* harmony export */   EditWindow: () => (/* binding */ EditWindow),
/* harmony export */   ImageHandler: () => (/* binding */ ImageHandler),
/* harmony export */   Menu: () => (/* binding */ Menu)
/* harmony export */ });
/* harmony import */ var _images_checklist_image_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/checklist-image.png */ "./src/images/checklist-image.png");
/* harmony import */ var _images_no_tasks_image_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/no-tasks-image.png */ "./src/images/no-tasks-image.png");
/* harmony import */ var _images_no_notes_image_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/no-notes-image.png */ "./src/images/no-notes-image.png");
/* harmony import */ var _mainLogic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mainLogic */ "./src/mainLogic.js");
/* harmony import */ var _images_tab_icon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/tab-icon.png */ "./src/images/tab-icon.png");






const ImageHandler = () => {
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

    function createTabIcon() {
        const head = document.querySelector('head');
        const tabIcon = document.createElement('link');
        tabIcon.rel = 'icon';
        tabIcon.href = _images_tab_icon_png__WEBPACK_IMPORTED_MODULE_4__;
        head.appendChild(tabIcon);
    }

    function handlePageImageDisplaying() {
        const noTasksImage = document.querySelector('.no-tasks-image');
        const noNotesImage = document.querySelector('.no-notes-image');
        const task = (0,_mainLogic__WEBPACK_IMPORTED_MODULE_3__.Task)();
        const note = (0,_mainLogic__WEBPACK_IMPORTED_MODULE_3__.Note)();
        if (task.tasksArray && task.tasksArray.length === 0) {
            noTasksImage.classList.add('image-active');
        } else {
            noTasksImage.classList.remove('image-active');
        }
        if (note.notesArray && note.notesArray.length === 0) {
            noNotesImage.classList.add('image-active');
        } else {
            noNotesImage.classList.remove('image-active');
        }
    }

    function createImages() {
        createTitleImage();
        createNoTasksImage();
        createNoNotesImage();
        createTabIcon();
    }

    return { createImages, handlePageImageDisplaying };
};

const CreationWindow = () => {
    const creationTaskForm = document.querySelector('#creation-task-form');
    const projectForm = document.querySelector('#project-form');
    const noteForm = document.querySelector('#note-form');
    const taskButton = document.querySelector('#task-button');
    const projectButton = document.querySelector('#project-button');
    const noteButton = document.querySelector('#note-button');
    const creationWindow = document.querySelector('#creation-task-window');
    const taskTitleInput = document.querySelector('#task-title-input');
    const taskDescriptionInput = document.querySelector('#task-description-input');
    const taskDueDateInput = document.querySelector('#task-date-input');
    const taskProjectInput = document.querySelector('#task-project-input');
    const taskPriorityInput = document.querySelector('#task-priority-input');
    const projectTitleInput = document.querySelector('#project-title-input');
    const noteTitleInput = document.querySelector('#note-title-input');
    const noteDescriptionInput = document.querySelector('#note-description-input');
    const overlay = document.querySelector('.overlay');

    function openCreationWindow() {
        creationWindow.classList.add('open-window');
        taskButton.classList.add('selection-button-active');
        overlay.classList.add('overlay-active');
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

    return { openCreationWindow, closeCreationWindow, showTaskForm, showProjectForm, showNoteForm };
};

const EditWindow = () => {
    const editWindow = document.querySelector('#edit-task-window');
    const editTaskTitleInput = document.querySelector('#edit-task-title-input');
    const editTaskDescriptionInput = document.querySelector('#edit-task-description-input');
    const editTaskDueDateInput = document.querySelector('#edit-task-date-input');
    const editTaskPriorityInput = document.querySelector('#edit-task-priority-input');
    const editTaskProjectInput = document.querySelector('#edit-task-project-input');
    const overlay = document.querySelector('.overlay');

    let currentTaskTitle = '';

    function openEditWindow(taskToEdit) {
        const task = (0,_mainLogic__WEBPACK_IMPORTED_MODULE_3__.Task)();
        const indexToEdit = parseInt(taskToEdit.getAttribute('data-task'), 10);
        editWindow.classList.add('open-window');
        overlay.classList.add('overlay-active');
        currentTaskTitle = task.taskTitlesArray[indexToEdit];
        editTaskTitleInput.value = task.tasksArray[indexToEdit].title.trim();
        editTaskDescriptionInput.value = task.tasksArray[indexToEdit].description.trim();
        editTaskDueDateInput.value = task.tasksArray[indexToEdit].dueDate;
        editTaskPriorityInput.value = task.tasksArray[indexToEdit].priority;
        editTaskProjectInput.value = task.tasksArray[indexToEdit].project;
    }

    function closeEditWindow() {
        editWindow.classList.remove('open-window');
        overlay.classList.remove('overlay-active');
        clearFormInputs();
    }

    return { openEditWindow, closeEditWindow };
};

const Menu = () => {
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

    return { switchToAllTasksView, switchToTodayTasksView, switchToWeekTasksView, switchToAllNotesView, toggleMenuVisibility };
};

const ContainerCreator = () => {
    function setTaskContainerId() {
        const listOfAllTasks = document.querySelector('#list-of-all-tasks');
        let numberOfTasks = listOfAllTasks.childElementCount;
        let taskContainerId = 0 + (numberOfTasks - 1);
        return taskContainerId;
    }

    function createNewTaskContainer() {
        const listOfAllTasks = document.querySelector('#list-of-all-tasks');
        const taskTitleInput = document.querySelector('#task-title-input');
        const taskDueDateInput = document.querySelector('#task-date-input');
        const taskPriorityInput = document.querySelector('#task-priority-input');
        const newTaskContainer = document.createElement('div');
        newTaskContainer.classList.add('task-container');
        newTaskContainer.setAttribute('data-task', setTaskContainerId());
        listOfAllTasks.appendChild(newTaskContainer);
        const newTaskStatus = document.createElement('input');
        newTaskStatus.setAttribute('type', 'checkbox');
        newTaskStatus.classList.add('task-data-container', 'task-status-checkbox');
        newTaskContainer.appendChild(newTaskStatus);
        const newTaskTitle = document.createElement('h3');
        newTaskTitle.classList.add('task-data-container', 'task-title');
        newTaskTitle.setAttribute('data-task-title', newTaskContainer.getAttribute('data-task'));
        newTaskTitle.textContent = taskTitleInput.value;
        newTaskContainer.appendChild(newTaskTitle);
        const newTaskDueDate = document.createElement('p');
        newTaskDueDate.classList.add('task-data-container', 'task-date');
        newTaskDueDate.setAttribute('data-task-date', newTaskContainer.getAttribute('data-task'));
        newTaskDueDate.textContent = taskDueDateInput.value;
        newTaskContainer.appendChild(newTaskDueDate);
        setNewTaskColor(newTaskContainer, taskPriorityInput);
        createEditAndDeleteButtons(newTaskContainer);
    }

    function createEditAndDeleteButtons(container) {
        const buttonsContainer = document.createElement('div');
        buttonsContainer.classList.add('task-data-container', 'buttons-container');
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
        const noteDescriptionInput = document.querySelector('#note-description-input');
        const newNoteContainer = document.createElement("div");
        newNoteContainer.classList.add('note-container');
        const listOfAllNotes = document.querySelector('#list-of-all-notes');
        listOfAllNotes.appendChild(newNoteContainer);
        const newNoteTitle = document.createElement('h3');
        newNoteTitle.classList.add('note-title');
        newNoteTitle.textContent = noteTitleInput.value;
        newNoteContainer.appendChild(newNoteTitle);
        const newNoteDescription = document.createElement('p');
        newNoteDescription.classList.add('note-description');
        newNoteDescription.textContent = noteDescriptionInput.value;
        newNoteContainer.appendChild(newNoteDescription);
    }

    return { createNewTaskContainer, createNewNoteContainer };
};












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
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validation */ "./src/validation.js");
/* harmony import */ var _mainLogic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainLogic */ "./src/mainLogic.js");




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
    const task = (0,_mainLogic__WEBPACK_IMPORTED_MODULE_2__.Task)();
    const project = (0,_mainLogic__WEBPACK_IMPORTED_MODULE_2__.Project)();
    const note = (0,_mainLogic__WEBPACK_IMPORTED_MODULE_2__.Note)();
    const imageHandler = (0,_domManipulation__WEBPACK_IMPORTED_MODULE_0__.ImageHandler)();
    const creationWindow = (0,_domManipulation__WEBPACK_IMPORTED_MODULE_0__.CreationWindow)();
    const editWindow = (0,_domManipulation__WEBPACK_IMPORTED_MODULE_0__.EditWindow)();
    const menu = (0,_domManipulation__WEBPACK_IMPORTED_MODULE_0__.Menu)();
    const validation = (0,_validation__WEBPACK_IMPORTED_MODULE_1__.Validation)();
    const containerCreator = (0,_domManipulation__WEBPACK_IMPORTED_MODULE_0__.ContainerCreator)();
    homeButton.addEventListener('click', () => menu.switchToAllTasksView());
    allTasksButton.addEventListener('click', () => menu.switchToAllTasksView());
    menuToggle.addEventListener('click', () => menu.toggleMenuVisibility());
    todayTasksButton.addEventListener('click', () => menu.switchToTodayTasksView());
    weekTasksButton.addEventListener('click', () => menu.switchToWeekTasksView());
    allNotesButton.addEventListener('click', () => menu.switchToAllNotesView());
    creationButton.addEventListener('click', () => creationWindow.openCreationWindow());
    taskButton.addEventListener('click', () => creationWindow.showTaskForm());
    projectButton.addEventListener('click', () => creationWindow.showProjectForm());
    noteButton.addEventListener('click', () => creationWindow.showNoteForm());
    creationWindowCloseButton.addEventListener('click', () => creationWindow.closeCreationWindow());
    editWindowCloseButton.addEventListener('click', () => editWindow.closeEditWindow());
    taskTitleInput.addEventListener('input', validation.clearValidationMessage);
    taskDescriptionInput.addEventListener('input', validation.clearValidationMessage);
    taskDueDateInput.addEventListener('input', validation.clearValidationMessage);
    taskPriorityInput.addEventListener('input', validation.clearValidationMessage);
    editTaskTitleInput.addEventListener('input', validation.clearValidationMessage);
    editTaskDescriptionInput.addEventListener('input', validation.clearValidationMessage);
    editTaskDueDateInput.addEventListener('input', validation.clearValidationMessage);
    editTaskPriorityInput.addEventListener('input', validation.clearValidationMessage);
    projectTitleInput.addEventListener('input', validation.clearValidationMessage);
    noteTitleInput.addEventListener('input', validation.clearValidationMessage);
    noteDescriptionInput.addEventListener('input', validation.clearValidationMessage);
    addTaskSubmitButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (validation.validateCreationTaskForm()) {
            containerCreator.createNewTaskContainer();
            task.createNewTask();
            imageHandler.handlePageImageDisplaying();
            creationWindow.closeCreationWindow();
        }
    });
    listOfAllTasks.addEventListener('click', (e) => {
        const taskToEdit = e.target.closest('.task-container');
        const editButton = e.target.closest('.edit-button');
        chosenTask = taskToEdit;
        if (editButton) {
            editWindow.openEditWindow(chosenTask);
        }
    });
    editTaskSubmitButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (validation.validateEditTaskForm()) {
            task.editChosenTask(chosenTask, editTaskTitleInput.value, editTaskDueDateInput.value, editTaskPriorityInput);
            editWindow.closeEditWindow();
        }
    });
    addProjectSubmitButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (validation.validateProjectForm()) {
            project.createNewProject();
            creationWindow.closeCreationWindow();
        }
    });
    // addNoteSubmitButton.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     if (validation.validateNoteForm()) {
    //         createNewNoteContainer();
    //         note.createNewNote();
    //         imageHandler.handlePageImageDisplaying();
    //         creationWindow.closeCreationWindow();
    //     }
    // });
    listOfAllTasks.addEventListener('click', (e) => {
        const taskToDelete = e.target.closest('.task-container');
        const deleteButton = e.target.closest('.delete-button');
        chosenTask = taskToDelete;
        if (deleteButton) {
            chosenTask.remove();
            task.deleteChosenTask(chosenTask);
        }
        imageHandler.handlePageImageDisplaying();
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
/* harmony export */   Note: () => (/* binding */ Note),
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   Task: () => (/* binding */ Task)
/* harmony export */ });
const Task = () => {
    const tasksArray = [];
    const taskTitlesArray = [];

    function taskFactory(title, description, dueDate, project, priority, isDone = false) {
        return { title, description, dueDate, project, priority, isDone };
    }

    function addTask(newTask) {
        tasksArray.push(newTask);
        taskTitlesArray.push(newTask.title);

        console.log('Updated tasksArray:', tasksArray);
    }

    function deleteTask(taskToDelete) {
        const indexToDelete = parseInt(taskToDelete.getAttribute('data-task'), 10);
        const taskContainers = document.querySelectorAll('.task-container');
        const taskTitles = document.querySelectorAll('.task-title');
        const taskDueDates = document.querySelectorAll('.task-date');
        tasksArray.splice(indexToDelete, 1);
        taskTitlesArray.splice(indexToDelete, 1);
        taskContainers.forEach((task, index) => {
            task.setAttribute('data-task', index);
        });
        taskTitles.forEach((task, index) => {
            task.setAttribute('data-task-title', index);
        });
        taskDueDates.forEach((task, index) => {
            task.setAttribute('data-task-date', index);
        });

        console.log('Updated tasksArray:', tasksArray);
    }

    function editTask(chosenTask, newTitle, newDescription, newDueDate, newPriority) {
        const indexToEdit = parseInt(chosenTask.getAttribute('data-task'), 10);
        const taskToEdit = this.tasksArray[indexToEdit];
        taskToEdit.title = newTitle;
        taskToEdit.description = newDescription;
        taskToEdit.dueDate = newDueDate;
        taskToEdit.priority = newPriority;
        console.log(indexToEdit);
        taskTitlesArray.splice(indexToEdit, 1, newTitle);
        tasksArray.splice(indexToEdit, 1, taskToEdit);

        console.log('Updated tasksArray:', tasksArray);
    }

    function createNewTask() {
        const creationTaskForm = document.querySelector('#creation-task-form');
        const taskTitleInput = document.querySelector('#task-title-input');
        const taskDescriptionInput = document.querySelector('#task-description-input');
        const taskDueDateInput = document.querySelector('#task-date-input');
        const taskProjectInput = document.querySelector('#task-project-input');
        const taskPriorityInput = document.querySelector('#task-priority-input');
        const newTask = taskFactory(taskTitleInput.value, taskDescriptionInput.value, taskDueDateInput.value, taskProjectInput.value, taskPriorityInput.value);
        addTask(newTask);
        creationTaskForm.reset();
    }

    function editChosenTask(chosenTask, newTitle, newDueDate, newPriority) {
        const editTaskTitleInput = document.querySelector('#edit-task-title-input');
        const editTaskDescriptionInput = document.querySelector('#edit-task-description-input');
        const editTaskDueDateInput = document.querySelector('#edit-task-date-input');
        const editTaskPriorityInput = document.querySelector('#edit-task-priority-input');
        const taskTitle = document.querySelector(`[data-task-title="${chosenTask.getAttribute('data-task')}"]`);
        const taskDueDate = document.querySelector(`[data-task-date="${chosenTask.getAttribute('data-task')}"]`);
        taskTitle.setAttribute('data-task-title', chosenTask.getAttribute('data-task'));
        taskDueDate.setAttribute('data-task-date', chosenTask.getAttribute('data-task'));
        editTask(chosenTask, editTaskTitleInput.value, editTaskDescriptionInput.value, editTaskDueDateInput.value, editTaskPriorityInput.value);
        taskTitle.textContent = newTitle;
        taskDueDate.textContent = newDueDate;
        setNewTaskColor(chosenTask, newPriority);
    }

    function deleteChosenTask(chosenTask) {
        deleteTask(chosenTask);
    }

    return { createNewTask, editChosenTask, deleteChosenTask };
};

const Project = () => {
    const projectsArray = [];

    function projectFactory(title) {
        return { title };
    }

    function addProject(newProject) {
        projectsArray.push(newProject);
        console.log(projectsArray);
    }

    function createNewProject() {
        const projectForm = document.querySelector('#project-form');
        const projectTitleInput = document.querySelector('#project-title-input');
        const newProject = projectFactory(projectTitleInput.value);
        addProject(newProject);
        projectForm.reset();
    }

    return { createNewProject };
};

const Note = () => {
    const notesArray = [];

    function noteFactory(title, description) {
        return { title, description };
    }

    function addNote(newNote) {
        notesArray.push(newNote);
        console.log(notesArray);
    }

    function createNewNote() {
        const noteForm = document.querySelector('#note-form');
        const noteTitleInput = document.querySelector('#note-title-input');
        const noteDescriptionInput = document.querySelector('#note-description-input');
        const newNote = noteFactory(noteTitleInput.value, noteDescriptionInput.value);
        addNote(newNote);
        noteForm.reset();
    }

    return { createNewNote };
};







/***/ }),

/***/ "./src/validation.js":
/*!***************************!*\
  !*** ./src/validation.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Validation: () => (/* binding */ Validation)
/* harmony export */ });
/* harmony import */ var _mainLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainLogic */ "./src/mainLogic.js");
/* harmony import */ var _domManipulation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domManipulation */ "./src/domManipulation.js");



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

const Validation = () => {
    const task = (0,_mainLogic__WEBPACK_IMPORTED_MODULE_0__.Task)();
    const editWindow = (0,_domManipulation__WEBPACK_IMPORTED_MODULE_1__.EditWindow)();
    function validateCreationTaskForm() {
        if (task.taskTitlesArray && task.taskTitlesArray.includes(taskTitleInput.value.trim())) {
            taskTitleInput.setCustomValidity('Please enter a unique task title.');
            taskTitleInput.reportValidity();
            return false;
        } if (taskTitleInput.value === '') {
            taskTitleInput.setCustomValidity('Please enter a title for your task.');
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
        } if (taskTitleInput.value.trim().length > 20) {
            taskTitleInput.setCustomValidity('Please enter a title of no more than 20 characters.');
            taskTitleInput.reportValidity();
            return false;
        }
        return true;
    }

    function validateEditTaskForm() {
        if (editTaskTitleInput.value === '') {
            editTaskTitleInput.setCustomValidity('Please enter a title for your task.');
            editTaskTitleInput.reportValidity();
            return false;
        } else if (task.taskTitlesArray.includes(editTaskTitleInput.value.trim()) && editTaskTitleInput.value.trim() !== editWindow.currentTaskTitle.trim()) {
            editTaskTitleInput.setCustomValidity('Please enter a unique task title.');
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
        } if (editTaskTitleInput.value.trim().length > 20) {
            editTaskTitleInput.setCustomValidity('Please enter a title of no more than 20 characters.');
            editTaskTitleInput.reportValidity();
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

    return { validateCreationTaskForm, validateEditTaskForm, validateProjectForm, validateNoteForm, clearValidationMessage };
};



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
/* harmony import */ var _domManipulation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domManipulation */ "./src/domManipulation.js");
/* harmony import */ var _handleEventListeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handleEventListeners */ "./src/handleEventListeners.js");




const imageHandler = (0,_domManipulation__WEBPACK_IMPORTED_MODULE_1__.ImageHandler)();

imageHandler.createImages();
(0,_handleEventListeners__WEBPACK_IMPORTED_MODULE_2__.handleEventListeners)();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4wNDU0YmZiOTkwMTdkZGI4NGJhZi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLE9BQU8sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8s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Q3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7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O1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQzRCO0FBQ2E7QUFDOUQ7QUFDQSxxQkFBcUIsOERBQVk7QUFDakM7QUFDQTtBQUNBLDJFQUFvQjtBQUNwQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tTWFuaXB1bGF0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9oYW5kbGVFdmVudExpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbWFpbkxvZ2ljLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92YWxpZGF0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xyXG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApICFpbXBvcnRhbnQ7XHJcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDcuN3JlbSk7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbmJ1dHRvbixcclxuaSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbn1cclxuXHJcbi50aXRsZS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDAuNXJlbTtcclxufVxyXG5cclxuLnRpdGxlLWltYWdlIHtcclxuICAgIHdpZHRoOiAzcmVtO1xyXG4gICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDE1cHggM3B4ICMwMDAwMDA7XHJcbn1cclxuXHJcbi5oZWFkZXItYnV0dG9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi50aXRsZS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4ucGFnZXMge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbSAwIDEuNXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkY2RjZGM7XHJcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDIzcmVtKTtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5wYWdlLWFjdGl2ZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ucGFnZXMtZnVsbCB7XHJcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDNyZW0pO1xyXG59XHJcblxyXG4ucGFnZS10aXRsZXMge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgwODA4MDY2O1xyXG59XHJcblxyXG4ubWVudS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMjByZW07XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uaGlkZGVuLW1lbnUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHJlbSk7XHJcbiAgICB3aWR0aDogMDtcclxufVxyXG5cclxuLm1lbnUtdGl0bGVzIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XHJcbiAgICBib3JkZXItYm90dG9tOiAzcHggZG91YmxlIGJsYWNrO1xyXG59XHJcblxyXG4ubGlzdHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMS41cmVtIDAgMXJlbSAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG59XHJcblxyXG4udGFzay1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MDgwODA2NjtcclxuICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkO1xyXG59XHJcblxyXG4udGFzay1kYXRhLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi50YXNrLXN0YXR1cy1jaGVja2JveCB7XHJcbiAgICB3aWR0aDogMXJlbTtcclxuICAgIGhlaWdodDogMXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgIG1hcmdpbjogYXV0byAxcmVtO1xyXG59XHJcblxyXG4udGFzay10aXRsZSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi50YXNrLWRhdGUge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xyXG59XHJcblxyXG4uYnV0dG9ucy1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMC41cmVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG4ubm8tdGFza3MtaW1hZ2UsXHJcbi5uby1ub3Rlcy1pbWFnZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgaGVpZ2h0OiA3NSU7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5pbWFnZS1hY3RpdmUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5zZWN0aW9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMS41cmVtO1xyXG4gICAgcGFkZGluZzogMS41cmVtO1xyXG59XHJcblxyXG4ubWVudS1idXR0b25zLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcclxuICAgIGdhcDogMC41cmVtO1xyXG59XHJcblxyXG4ubWVudS1idXR0b25zLFxyXG4uY3JlYXRpb24tYnV0dG9uLFxyXG5pIHtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5tZW51LWJ1dHRvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q3ZDdkNztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi5tZW51LWJ1dHRvbnMgLmZhcyB7XHJcbiAgICB3aWR0aDogMi41cmVtO1xyXG59XHJcblxyXG4uY3JlYXRpb24tYnV0dG9uIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyNCwgMTI0LCAyNTUsIDAuNSk7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW46IDAgYXV0byBhdXRvIGF1dG87XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDM1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIGluc2V0IDAgMnB4IDFweCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpLCBpbnNldCAwIC0ycHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcbiAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4uZ2l0aHViLWxpbmsge1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmhlYWRlciBpIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgIHBhZGRpbmc6IDAuM3JlbTtcclxufVxyXG5cclxuLm92ZXJsYXkge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA4MDtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xyXG4gICAgei1pbmRleDogOTk5ODtcclxufVxyXG5cclxuLm92ZXJsYXktYWN0aXZlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uY3JlYXRpb24tYW5kLWVkaXQtd2luZG93cyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICB3aWR0aDogNTVyZW07XHJcbiAgICBoZWlnaHQ6IDM1cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QzZDNkMztcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCk7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcclxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNTYpIDBweCAyMnB4IDcwcHggNHB4O1xyXG4gICAgei1pbmRleDogOTk5OTtcclxufVxyXG5cclxuI2VkaXQtdGFzay13aW5kb3cge1xyXG4gICAgaGVpZ2h0OiAzMHJlbTtcclxufVxyXG5cclxuI2VkaXQtd2luZG93LW1haW4tc2VjdGlvbiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbiNlZGl0LXRhc2stZm9ybSB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5vcGVuLXdpbmRvdyB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XHJcbn1cclxuXHJcbi5jcmVhdGlvbi1hbmQtZWRpdC13aW5kb3dzLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYmFja2dyb3VuZDogI2FhYWFmZjtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDFyZW07XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMXJlbTtcclxuICAgIHBhZGRpbmc6IDEuNXJlbTtcclxufVxyXG5cclxuLmNyZWF0aW9uLWFuZC1lZGl0LXdpbmRvd3MtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjhyZW07XHJcbn1cclxuXHJcbi5jcmVhdGlvbi1hbmQtZWRpdC13aW5kb3dzLW1haW4tc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGhlaWdodDogODAlO1xyXG59XHJcblxyXG4uc2VsZWN0aW9uLXNlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMCAwIDFyZW0gMDtcclxuICAgIGJvcmRlci1ib3R0b206IDNweCBkb3VibGUgYmxhY2s7XHJcbn1cclxuXHJcbi5zZWxlY3Rpb24tYnV0dG9ucyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMi41cmVtO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcclxufVxyXG5cclxuLmNyZWF0aW9uLWFuZC1lZGl0LXdpbmRvd3MtZm9ybXMge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDFyZW07XHJcbiAgICB3aWR0aDogNTByZW07XHJcbn1cclxuXHJcbi5mb3JtLWFjdGl2ZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uY3JlYXRpb24tYW5kLWVkaXQtd2luZG93cy10ZXh0YXJlYXMge1xyXG4gICAgcmVzaXplOiBub25lO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG59XHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcclxufVxyXG5cclxuLmNyZWF0aW9uLWFuZC1lZGl0LXdpbmRvd3MtYnV0dG9uIHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICBtYXJnaW46IDAuNXJlbSBhdXRvIDAgYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAwJSwgMCUsIDAuNzUpO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XHJcbn1cclxuXHJcbi5jcmVhdGlvbi1hbmQtZWRpdC13aW5kb3dzIGxhYmVsIHtcclxuICAgIG1hcmdpbi1yaWdodDogMC4zcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW46IGF1dG8gMC4zcmVtIGF1dG8gMDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLnRleHRhcmVhcy10aXRsZXMge1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbn1cclxuXHJcbi50ZXh0YXJlYXMtZGVzY3JpcHRpb25zIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuI3Rhc2stZGVzY3JpcHRpb24taW5wdXQsXHJcbiNlZGl0LXRhc2stZGVzY3JpcHRpb24taW5wdXQge1xyXG4gICAgaGVpZ2h0OiAxMHJlbTtcclxufVxyXG5cclxuI3Byb2plY3QtdGl0bGUtaW5wdXQge1xyXG4gICAgaGVpZ2h0OiAxNy41cmVtO1xyXG59XHJcblxyXG4jbm90ZS1kZXNjcmlwdGlvbi1pbnB1dCB7XHJcbiAgICBoZWlnaHQ6IDEyLjdyZW07XHJcbn1cclxuXHJcbi5jcmVhdGlvbi1hbmQtZWRpdC13aW5kb3dzLWlucHV0cy1zZWN0aW9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDAuNXJlbTtcclxuICAgIGhlaWdodDogMS43cmVtO1xyXG59XHJcblxyXG4uY3JlYXRpb24tYW5kLWVkaXQtd2luZG93cy1pbnB1dHMtc2VjdGlvbiBpbnB1dCxcclxuc2VsZWN0IHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHdpZHRoOiAxMHJlbTtcclxuICAgIHBhZGRpbmc6IDAuM3JlbTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XHJcbn1cclxuXHJcbi5jcmVhdGlvbi1hbmQtZWRpdC13aW5kb3dzLXNlY3Rpb25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5tZW51LWJ1dHRvbnM6aG92ZXIsXHJcbmhlYWRlciBpOmhvdmVyLFxyXG4ubWVudS1idXR0b24tYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ODY4Njg2NjtcclxufVxyXG5cclxuZm9vdGVyIGk6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxufVxyXG5cclxuLmNyZWF0aW9uLWJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2M3Y2ZmZDk7XHJcbn1cclxuXHJcbi5zZWxlY3Rpb24tYnV0dG9uczpob3ZlcixcclxuLnNlbGVjdGlvbi1idXR0b24tYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICM3MDcwNzA7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmNyZWF0aW9uLWFuZC1lZGl0LXdpbmRvd3MtYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBlNjtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDhEQUE4RDtJQUM5RCx3QkFBd0I7SUFDeEIsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLHNIQUFzSDtJQUN0SCxhQUFhO0lBQ2IseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZiw4QkFBOEI7SUFDOUIsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLGVBQWU7SUFDZixzSEFBc0g7QUFDMUg7O0FBRUE7SUFDSSw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsZUFBZTtJQUNmLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7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QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksZUFBZTtJQUNmLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsNENBQTRDO0FBQ2hEOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTs7O0lBR0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBOztJQUVJLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgIWltcG9ydGFudDtcXHJcXG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDcuN3JlbSk7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbixcXHJcXG5pIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC42KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUtaW1hZ2Uge1xcclxcbiAgICB3aWR0aDogM3JlbTtcXHJcXG4gICAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4IDNweCAjMDAwMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWJ1dHRvbnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDAuNXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlLWNvbnRhaW5lciB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2VzIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW0gMCAxLjVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkY2RjZGM7XFxyXFxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMjNyZW0pO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1hY3RpdmUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZXMtZnVsbCB7XFxyXFxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gM3JlbSk7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXRpdGxlcyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgwODA4MDY2O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB3aWR0aDogMjByZW07XFxyXFxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4tbWVudSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjByZW0pO1xcclxcbiAgICB3aWR0aDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtdGl0bGVzIHtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IGRvdWJsZSBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3RzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IDEuNXJlbSAwIDFyZW0gMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW0gMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MDgwODA2NjtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQ7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWRhdGEtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50YXNrLXN0YXR1cy1jaGVja2JveCB7XFxyXFxuICAgIHdpZHRoOiAxcmVtO1xcclxcbiAgICBoZWlnaHQ6IDFyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gICAgbWFyZ2luOiBhdXRvIDFyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrLXRpdGxlIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1kYXRlIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9ucy1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDAuNXJlbTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubm8tdGFza3MtaW1hZ2UsXFxyXFxuLm5vLW5vdGVzLWltYWdlIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgaGVpZ2h0OiA3NSU7XFxyXFxuICAgIG9wYWNpdHk6IDAuNTtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2UtYWN0aXZlIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9ucyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMS41cmVtO1xcclxcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5tZW51LWJ1dHRvbnMtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcclxcbiAgICBnYXA6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtYnV0dG9ucyxcXHJcXG4uY3JlYXRpb24tYnV0dG9uLFxcclxcbmkge1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1idXR0b25zIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDdkN2Q3O1xcclxcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1idXR0b25zIC5mYXMge1xcclxcbiAgICB3aWR0aDogMi41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRpb24tYnV0dG9uIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB3aWR0aDogNzUlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyNCwgMTI0LCAyNTUsIDAuNSk7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgICBmb250LXNpemU6IDRyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBtYXJnaW46IDAgYXV0byBhdXRvIGF1dG87XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcXHJcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDM1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIGluc2V0IDAgMnB4IDFweCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpLCBpbnNldCAwIC0ycHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDAuNXJlbTtcXHJcXG4gICAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5naXRodWItbGluayB7XFxyXFxuICAgIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBpIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgICBwYWRkaW5nOiAwLjNyZW07XFxyXFxufVxcclxcblxcclxcbi5vdmVybGF5IHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA4MDtcXHJcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XFxyXFxuICAgIHotaW5kZXg6IDk5OTg7XFxyXFxufVxcclxcblxcclxcbi5vdmVybGF5LWFjdGl2ZSB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRpb24tYW5kLWVkaXQtd2luZG93cyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gICAgd2lkdGg6IDU1cmVtO1xcclxcbiAgICBoZWlnaHQ6IDM1cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNkM2QzO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcXHJcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcXHJcXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XFxyXFxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC41NikgMHB4IDIycHggNzBweCA0cHg7XFxyXFxuICAgIHotaW5kZXg6IDk5OTk7XFxyXFxufVxcclxcblxcclxcbiNlZGl0LXRhc2std2luZG93IHtcXHJcXG4gICAgaGVpZ2h0OiAzMHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2VkaXQtd2luZG93LW1haW4tc2VjdGlvbiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuI2VkaXQtdGFzay1mb3JtIHtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ub3Blbi13aW5kb3cge1xcclxcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0aW9uLWFuZC1lZGl0LXdpbmRvd3MtaGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjYWFhYWZmO1xcclxcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxcmVtO1xcclxcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRpb24tYW5kLWVkaXQtd2luZG93cy10aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRpb24tYW5kLWVkaXQtd2luZG93cy1tYWluLXNlY3Rpb24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBoZWlnaHQ6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdGlvbi1zZWN0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogMCAwIDFyZW0gMDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IGRvdWJsZSBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdGlvbi1idXR0b25zIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMi41cmVtO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0aW9uLWFuZC1lZGl0LXdpbmRvd3MtZm9ybXMge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIHdpZHRoOiA1MHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tYWN0aXZlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0aW9uLWFuZC1lZGl0LXdpbmRvd3MtdGV4dGFyZWFzIHtcXHJcXG4gICAgcmVzaXplOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRpb24tYW5kLWVkaXQtd2luZG93cy1idXR0b24ge1xcclxcbiAgICB3aWR0aDogMjUlO1xcclxcbiAgICBoZWlnaHQ6IDNyZW07XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgICBtYXJnaW46IDAuNXJlbSBhdXRvIDAgYXV0bztcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAwJSwgMCUsIDAuNzUpO1xcclxcbiAgICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5jcmVhdGlvbi1hbmQtZWRpdC13aW5kb3dzIGxhYmVsIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjNyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBtYXJnaW46IGF1dG8gMC4zcmVtIGF1dG8gMDtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dGFyZWFzLXRpdGxlcyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dGFyZWFzLWRlc2NyaXB0aW9ucyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2stZGVzY3JpcHRpb24taW5wdXQsXFxyXFxuI2VkaXQtdGFzay1kZXNjcmlwdGlvbi1pbnB1dCB7XFxyXFxuICAgIGhlaWdodDogMTByZW07XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0LXRpdGxlLWlucHV0IHtcXHJcXG4gICAgaGVpZ2h0OiAxNy41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jbm90ZS1kZXNjcmlwdGlvbi1pbnB1dCB7XFxyXFxuICAgIGhlaWdodDogMTIuN3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0aW9uLWFuZC1lZGl0LXdpbmRvd3MtaW5wdXRzLXNlY3Rpb24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAwLjVyZW07XFxyXFxuICAgIGhlaWdodDogMS43cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRpb24tYW5kLWVkaXQtd2luZG93cy1pbnB1dHMtc2VjdGlvbiBpbnB1dCxcXHJcXG5zZWxlY3Qge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHdpZHRoOiAxMHJlbTtcXHJcXG4gICAgcGFkZGluZzogMC4zcmVtO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRpb24tYW5kLWVkaXQtd2luZG93cy1zZWN0aW9ucyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWJ1dHRvbnM6aG92ZXIsXFxyXFxuaGVhZGVyIGk6aG92ZXIsXFxyXFxuLm1lbnUtYnV0dG9uLWFjdGl2ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ODY4Njg2NjtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIGk6aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRpb24tYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdjN2NmZmQ5O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0aW9uLWJ1dHRvbnM6aG92ZXIsXFxyXFxuLnNlbGVjdGlvbi1idXR0b24tYWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzcwNzA3MDtcXHJcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxyXFxufVxcclxcblxcclxcbi5jcmVhdGlvbi1hbmQtZWRpdC13aW5kb3dzLWJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBlNjtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB0aXRsZUltYWdlU3JjIGZyb20gJy4vaW1hZ2VzL2NoZWNrbGlzdC1pbWFnZS5wbmcnO1xyXG5pbXBvcnQgbm9UYXNrc0ltYWdlU3JjIGZyb20gJy4vaW1hZ2VzL25vLXRhc2tzLWltYWdlLnBuZyc7XHJcbmltcG9ydCBub05vdGVzSW1hZ2VTcmMgZnJvbSAnLi9pbWFnZXMvbm8tbm90ZXMtaW1hZ2UucG5nJztcclxuaW1wb3J0IHsgVGFzaywgTm90ZSB9IGZyb20gJy4vbWFpbkxvZ2ljJztcclxuaW1wb3J0IEljb24gZnJvbSAnLi9pbWFnZXMvdGFiLWljb24ucG5nJztcclxuXHJcbmV4cG9ydCBjb25zdCBJbWFnZUhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVUaXRsZUltYWdlKCkge1xyXG4gICAgICAgIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlJyk7XHJcbiAgICAgICAgY29uc3QgdGl0bGVJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRpdGxlSW1hZ2Uuc3JjID0gdGl0bGVJbWFnZVNyYztcclxuICAgICAgICB0aXRsZUltYWdlLmFsdCA9ICdDaGVja2xpc3QnO1xyXG4gICAgICAgIHRpdGxlSW1hZ2UuY2xhc3NMaXN0LmFkZCgndGl0bGUtaW1hZ2UnKTtcclxuICAgICAgICB0aXRsZUNvbnRhaW5lci5pbnNlcnRCZWZvcmUodGl0bGVJbWFnZSwgdGl0bGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZU5vVGFza3NJbWFnZSgpIHtcclxuICAgICAgICBjb25zdCBsaXN0c09mVGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlzdHMtb2YtdGFza3MnKTtcclxuICAgICAgICBsaXN0c09mVGFza3MuZm9yRWFjaChsaXN0ID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgbm9UYXNrc0ltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgICAgIG5vVGFza3NJbWFnZS5zcmMgPSBub1Rhc2tzSW1hZ2VTcmM7XHJcbiAgICAgICAgICAgIG5vVGFza3NJbWFnZS5hbHQgPSAnTm8gVGFza3MnO1xyXG4gICAgICAgICAgICBub1Rhc2tzSW1hZ2UuY2xhc3NMaXN0LmFkZCgnbm8tdGFza3MtaW1hZ2UnLCAnaW1hZ2UtYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQobm9UYXNrc0ltYWdlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVOb05vdGVzSW1hZ2UoKSB7XHJcbiAgICAgICAgY29uc3QgbGlzdE9mTm90ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlzdC1vZi1hbGwtbm90ZXMnKTtcclxuICAgICAgICBjb25zdCBub05vdGVzSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBub05vdGVzSW1hZ2Uuc3JjID0gbm9Ob3Rlc0ltYWdlU3JjO1xyXG4gICAgICAgIG5vTm90ZXNJbWFnZS5hbHQgPSAnTm8gTm90ZXMnO1xyXG4gICAgICAgIG5vTm90ZXNJbWFnZS5jbGFzc0xpc3QuYWRkKCduby1ub3Rlcy1pbWFnZScsICdpbWFnZS1hY3RpdmUnKTtcclxuICAgICAgICBsaXN0T2ZOb3Rlcy5hcHBlbmRDaGlsZChub05vdGVzSW1hZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRhYkljb24oKSB7XHJcbiAgICAgICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWQnKTtcclxuICAgICAgICBjb25zdCB0YWJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xyXG4gICAgICAgIHRhYkljb24ucmVsID0gJ2ljb24nO1xyXG4gICAgICAgIHRhYkljb24uaHJlZiA9IEljb247XHJcbiAgICAgICAgaGVhZC5hcHBlbmRDaGlsZCh0YWJJY29uKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVQYWdlSW1hZ2VEaXNwbGF5aW5nKCkge1xyXG4gICAgICAgIGNvbnN0IG5vVGFza3NJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uby10YXNrcy1pbWFnZScpO1xyXG4gICAgICAgIGNvbnN0IG5vTm90ZXNJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uby1ub3Rlcy1pbWFnZScpO1xyXG4gICAgICAgIGNvbnN0IHRhc2sgPSBUYXNrKCk7XHJcbiAgICAgICAgY29uc3Qgbm90ZSA9IE5vdGUoKTtcclxuICAgICAgICBpZiAodGFzay50YXNrc0FycmF5ICYmIHRhc2sudGFza3NBcnJheS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgbm9UYXNrc0ltYWdlLmNsYXNzTGlzdC5hZGQoJ2ltYWdlLWFjdGl2ZScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5vVGFza3NJbWFnZS5jbGFzc0xpc3QucmVtb3ZlKCdpbWFnZS1hY3RpdmUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5vdGUubm90ZXNBcnJheSAmJiBub3RlLm5vdGVzQXJyYXkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIG5vTm90ZXNJbWFnZS5jbGFzc0xpc3QuYWRkKCdpbWFnZS1hY3RpdmUnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBub05vdGVzSW1hZ2UuY2xhc3NMaXN0LnJlbW92ZSgnaW1hZ2UtYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUltYWdlcygpIHtcclxuICAgICAgICBjcmVhdGVUaXRsZUltYWdlKCk7XHJcbiAgICAgICAgY3JlYXRlTm9UYXNrc0ltYWdlKCk7XHJcbiAgICAgICAgY3JlYXRlTm9Ob3Rlc0ltYWdlKCk7XHJcbiAgICAgICAgY3JlYXRlVGFiSWNvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IGNyZWF0ZUltYWdlcywgaGFuZGxlUGFnZUltYWdlRGlzcGxheWluZyB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IENyZWF0aW9uV2luZG93ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY3JlYXRpb25UYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGlvbi10YXNrLWZvcm0nKTtcclxuICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtZm9ybScpO1xyXG4gICAgY29uc3Qgbm90ZUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbm90ZS1mb3JtJyk7XHJcbiAgICBjb25zdCB0YXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stYnV0dG9uJyk7XHJcbiAgICBjb25zdCBwcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtYnV0dG9uJyk7XHJcbiAgICBjb25zdCBub3RlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vdGUtYnV0dG9uJyk7XHJcbiAgICBjb25zdCBjcmVhdGlvbldpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGlvbi10YXNrLXdpbmRvdycpO1xyXG4gICAgY29uc3QgdGFza1RpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay10aXRsZS1pbnB1dCcpO1xyXG4gICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1kZXNjcmlwdGlvbi1pbnB1dCcpO1xyXG4gICAgY29uc3QgdGFza0R1ZURhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWRhdGUtaW5wdXQnKTtcclxuICAgIGNvbnN0IHRhc2tQcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1wcm9qZWN0LWlucHV0Jyk7XHJcbiAgICBjb25zdCB0YXNrUHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLXByaW9yaXR5LWlucHV0Jyk7XHJcbiAgICBjb25zdCBwcm9qZWN0VGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LXRpdGxlLWlucHV0Jyk7XHJcbiAgICBjb25zdCBub3RlVGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub3RlLXRpdGxlLWlucHV0Jyk7XHJcbiAgICBjb25zdCBub3RlRGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub3RlLWRlc2NyaXB0aW9uLWlucHV0Jyk7XHJcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKTtcclxuXHJcbiAgICBmdW5jdGlvbiBvcGVuQ3JlYXRpb25XaW5kb3coKSB7XHJcbiAgICAgICAgY3JlYXRpb25XaW5kb3cuY2xhc3NMaXN0LmFkZCgnb3Blbi13aW5kb3cnKTtcclxuICAgICAgICB0YXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGlvbi1idXR0b24tYWN0aXZlJyk7XHJcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdvdmVybGF5LWFjdGl2ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsb3NlQ3JlYXRpb25XaW5kb3coKSB7XHJcbiAgICAgICAgY3JlYXRpb25XaW5kb3cuY2xhc3NMaXN0LnJlbW92ZSgnb3Blbi13aW5kb3cnKTtcclxuICAgICAgICBwcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGlvbi1idXR0b24tYWN0aXZlJyk7XHJcbiAgICAgICAgbm90ZUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3Rpb24tYnV0dG9uLWFjdGl2ZScpO1xyXG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcmxheS1hY3RpdmUnKTtcclxuICAgICAgICBjcmVhdGlvblRhc2tGb3JtLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tYWN0aXZlJyk7XHJcbiAgICAgICAgcHJvamVjdEZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1hY3RpdmUnKTtcclxuICAgICAgICBub3RlRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtLWFjdGl2ZScpO1xyXG4gICAgICAgIGNsZWFyRm9ybUlucHV0cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsZWFyRm9ybUlucHV0cygpIHtcclxuICAgICAgICB0YXNrVGl0bGVJbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbklucHV0LnZhbHVlID0gJyc7XHJcbiAgICAgICAgdGFza0R1ZURhdGVJbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgICAgIHRhc2tQcmlvcml0eUlucHV0LnZhbHVlID0gJyc7XHJcbiAgICAgICAgdGFza1Byb2plY3RJbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgICAgIHByb2plY3RUaXRsZUlucHV0LnZhbHVlID0gJyc7XHJcbiAgICAgICAgbm90ZVRpdGxlSW5wdXQudmFsdWUgPSAnJztcclxuICAgICAgICBub3RlRGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dUYXNrRm9ybSgpIHtcclxuICAgICAgICBjcmVhdGlvblRhc2tGb3JtLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tYWN0aXZlJyk7XHJcbiAgICAgICAgcHJvamVjdEZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1hY3RpdmUnKTtcclxuICAgICAgICBub3RlRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtLWFjdGl2ZScpO1xyXG4gICAgICAgIHRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0aW9uLWJ1dHRvbi1hY3RpdmUnKTtcclxuICAgICAgICBwcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGlvbi1idXR0b24tYWN0aXZlJyk7XHJcbiAgICAgICAgbm90ZUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3Rpb24tYnV0dG9uLWFjdGl2ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dQcm9qZWN0Rm9ybSgpIHtcclxuICAgICAgICBwcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKCdmb3JtLWFjdGl2ZScpO1xyXG4gICAgICAgIGNyZWF0aW9uVGFza0Zvcm0uY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1hY3RpdmUnKTtcclxuICAgICAgICBub3RlRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtLWFjdGl2ZScpO1xyXG4gICAgICAgIHByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0aW9uLWJ1dHRvbi1hY3RpdmUnKTtcclxuICAgICAgICB0YXNrQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGlvbi1idXR0b24tYWN0aXZlJyk7XHJcbiAgICAgICAgbm90ZUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3Rpb24tYnV0dG9uLWFjdGl2ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dOb3RlRm9ybSgpIHtcclxuICAgICAgICBub3RlRm9ybS5jbGFzc0xpc3QuYWRkKCdmb3JtLWFjdGl2ZScpO1xyXG4gICAgICAgIGNyZWF0aW9uVGFza0Zvcm0uY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1hY3RpdmUnKTtcclxuICAgICAgICBwcm9qZWN0Rm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtLWFjdGl2ZScpO1xyXG4gICAgICAgIG5vdGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0aW9uLWJ1dHRvbi1hY3RpdmUnKTtcclxuICAgICAgICB0YXNrQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGlvbi1idXR0b24tYWN0aXZlJyk7XHJcbiAgICAgICAgcHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3Rpb24tYnV0dG9uLWFjdGl2ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IG9wZW5DcmVhdGlvbldpbmRvdywgY2xvc2VDcmVhdGlvbldpbmRvdywgc2hvd1Rhc2tGb3JtLCBzaG93UHJvamVjdEZvcm0sIHNob3dOb3RlRm9ybSB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEVkaXRXaW5kb3cgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBlZGl0V2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGFzay13aW5kb3cnKTtcclxuICAgIGNvbnN0IGVkaXRUYXNrVGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2stdGl0bGUtaW5wdXQnKTtcclxuICAgIGNvbnN0IGVkaXRUYXNrRGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2stZGVzY3JpcHRpb24taW5wdXQnKTtcclxuICAgIGNvbnN0IGVkaXRUYXNrRHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGFzay1kYXRlLWlucHV0Jyk7XHJcbiAgICBjb25zdCBlZGl0VGFza1ByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrLXByaW9yaXR5LWlucHV0Jyk7XHJcbiAgICBjb25zdCBlZGl0VGFza1Byb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2stcHJvamVjdC1pbnB1dCcpO1xyXG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5Jyk7XHJcblxyXG4gICAgbGV0IGN1cnJlbnRUYXNrVGl0bGUgPSAnJztcclxuXHJcbiAgICBmdW5jdGlvbiBvcGVuRWRpdFdpbmRvdyh0YXNrVG9FZGl0KSB7XHJcbiAgICAgICAgY29uc3QgdGFzayA9IFRhc2soKTtcclxuICAgICAgICBjb25zdCBpbmRleFRvRWRpdCA9IHBhcnNlSW50KHRhc2tUb0VkaXQuZ2V0QXR0cmlidXRlKCdkYXRhLXRhc2snKSwgMTApO1xyXG4gICAgICAgIGVkaXRXaW5kb3cuY2xhc3NMaXN0LmFkZCgnb3Blbi13aW5kb3cnKTtcclxuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ292ZXJsYXktYWN0aXZlJyk7XHJcbiAgICAgICAgY3VycmVudFRhc2tUaXRsZSA9IHRhc2sudGFza1RpdGxlc0FycmF5W2luZGV4VG9FZGl0XTtcclxuICAgICAgICBlZGl0VGFza1RpdGxlSW5wdXQudmFsdWUgPSB0YXNrLnRhc2tzQXJyYXlbaW5kZXhUb0VkaXRdLnRpdGxlLnRyaW0oKTtcclxuICAgICAgICBlZGl0VGFza0Rlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSB0YXNrLnRhc2tzQXJyYXlbaW5kZXhUb0VkaXRdLmRlc2NyaXB0aW9uLnRyaW0oKTtcclxuICAgICAgICBlZGl0VGFza0R1ZURhdGVJbnB1dC52YWx1ZSA9IHRhc2sudGFza3NBcnJheVtpbmRleFRvRWRpdF0uZHVlRGF0ZTtcclxuICAgICAgICBlZGl0VGFza1ByaW9yaXR5SW5wdXQudmFsdWUgPSB0YXNrLnRhc2tzQXJyYXlbaW5kZXhUb0VkaXRdLnByaW9yaXR5O1xyXG4gICAgICAgIGVkaXRUYXNrUHJvamVjdElucHV0LnZhbHVlID0gdGFzay50YXNrc0FycmF5W2luZGV4VG9FZGl0XS5wcm9qZWN0O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsb3NlRWRpdFdpbmRvdygpIHtcclxuICAgICAgICBlZGl0V2luZG93LmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4td2luZG93Jyk7XHJcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdvdmVybGF5LWFjdGl2ZScpO1xyXG4gICAgICAgIGNsZWFyRm9ybUlucHV0cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IG9wZW5FZGl0V2luZG93LCBjbG9zZUVkaXRXaW5kb3cgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBNZW51ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYWxsVGFza3NCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWxsLXRhc2tzLWJ1dHRvbicpO1xyXG4gICAgY29uc3QgdG9kYXlUYXNrc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RheS10YXNrcy1idXR0b24nKTtcclxuICAgIGNvbnN0IHdlZWtUYXNrc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3ZWVrLXRhc2tzLWJ1dHRvbicpO1xyXG4gICAgY29uc3QgYWxsTm90ZXNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWxsLW5vdGVzLWJ1dHRvbicpO1xyXG4gICAgY29uc3QgYWxsVGFza3NQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FsbC10YXNrcy1wYWdlJyk7XHJcbiAgICBjb25zdCB0b2RheVRhc2tzUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RheS10YXNrcy1wYWdlJyk7XHJcbiAgICBjb25zdCB3ZWVrVGFza3NQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dlZWstdGFza3MtcGFnZScpO1xyXG4gICAgY29uc3QgYWxsTm90ZXNQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FsbC1ub3Rlcy1wYWdlJyk7XHJcbiAgICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBwYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYWdlcycpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHN3aXRjaFRvQWxsVGFza3NWaWV3KCkge1xyXG4gICAgICAgIGFsbFRhc2tzQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ21lbnUtYnV0dG9uLWFjdGl2ZScpO1xyXG4gICAgICAgIHRvZGF5VGFza3NCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1idXR0b24tYWN0aXZlJyk7XHJcbiAgICAgICAgd2Vla1Rhc2tzQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtYnV0dG9uLWFjdGl2ZScpO1xyXG4gICAgICAgIGFsbE5vdGVzQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtYnV0dG9uLWFjdGl2ZScpO1xyXG4gICAgICAgIGFsbFRhc2tzUGFnZS5jbGFzc0xpc3QuYWRkKCdwYWdlLWFjdGl2ZScpO1xyXG4gICAgICAgIHRvZGF5VGFza3NQYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ3BhZ2UtYWN0aXZlJyk7XHJcbiAgICAgICAgd2Vla1Rhc2tzUGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdwYWdlLWFjdGl2ZScpO1xyXG4gICAgICAgIGFsbE5vdGVzUGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdwYWdlLWFjdGl2ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN3aXRjaFRvVG9kYXlUYXNrc1ZpZXcoKSB7XHJcbiAgICAgICAgdG9kYXlUYXNrc0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdtZW51LWJ1dHRvbi1hY3RpdmUnKTtcclxuICAgICAgICBhbGxUYXNrc0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LWJ1dHRvbi1hY3RpdmUnKTtcclxuICAgICAgICB3ZWVrVGFza3NCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1idXR0b24tYWN0aXZlJyk7XHJcbiAgICAgICAgYWxsTm90ZXNCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1idXR0b24tYWN0aXZlJyk7XHJcbiAgICAgICAgdG9kYXlUYXNrc1BhZ2UuY2xhc3NMaXN0LmFkZCgncGFnZS1hY3RpdmUnKTtcclxuICAgICAgICBhbGxUYXNrc1BhZ2UuY2xhc3NMaXN0LnJlbW92ZSgncGFnZS1hY3RpdmUnKTtcclxuICAgICAgICB3ZWVrVGFza3NQYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ3BhZ2UtYWN0aXZlJyk7XHJcbiAgICAgICAgYWxsTm90ZXNQYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ3BhZ2UtYWN0aXZlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3dpdGNoVG9XZWVrVGFza3NWaWV3KCkge1xyXG4gICAgICAgIHdlZWtUYXNrc0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdtZW51LWJ1dHRvbi1hY3RpdmUnKTtcclxuICAgICAgICBhbGxUYXNrc0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LWJ1dHRvbi1hY3RpdmUnKTtcclxuICAgICAgICB0b2RheVRhc2tzQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtYnV0dG9uLWFjdGl2ZScpO1xyXG4gICAgICAgIGFsbE5vdGVzQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtYnV0dG9uLWFjdGl2ZScpO1xyXG4gICAgICAgIHdlZWtUYXNrc1BhZ2UuY2xhc3NMaXN0LmFkZCgncGFnZS1hY3RpdmUnKTtcclxuICAgICAgICB0b2RheVRhc2tzUGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdwYWdlLWFjdGl2ZScpO1xyXG4gICAgICAgIGFsbFRhc2tzUGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdwYWdlLWFjdGl2ZScpO1xyXG4gICAgICAgIGFsbE5vdGVzUGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdwYWdlLWFjdGl2ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN3aXRjaFRvQWxsTm90ZXNWaWV3KCkge1xyXG4gICAgICAgIGFsbE5vdGVzQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ21lbnUtYnV0dG9uLWFjdGl2ZScpO1xyXG4gICAgICAgIGFsbFRhc2tzQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtYnV0dG9uLWFjdGl2ZScpO1xyXG4gICAgICAgIHRvZGF5VGFza3NCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1idXR0b24tYWN0aXZlJyk7XHJcbiAgICAgICAgd2Vla1Rhc2tzQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtYnV0dG9uLWFjdGl2ZScpO1xyXG4gICAgICAgIGFsbE5vdGVzUGFnZS5jbGFzc0xpc3QuYWRkKCdwYWdlLWFjdGl2ZScpO1xyXG4gICAgICAgIHdlZWtUYXNrc1BhZ2UuY2xhc3NMaXN0LnJlbW92ZSgncGFnZS1hY3RpdmUnKTtcclxuICAgICAgICB0b2RheVRhc2tzUGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdwYWdlLWFjdGl2ZScpO1xyXG4gICAgICAgIGFsbFRhc2tzUGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdwYWdlLWFjdGl2ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRvZ2dsZU1lbnVWaXNpYmlsaXR5KCkge1xyXG4gICAgICAgIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuLW1lbnUnKTtcclxuICAgICAgICBwYWdlcy5mb3JFYWNoKHBhZ2UgPT4ge1xyXG4gICAgICAgICAgICBwYWdlLmNsYXNzTGlzdC50b2dnbGUoJ3BhZ2VzLWZ1bGwnKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzd2l0Y2hUb0FsbFRhc2tzVmlldywgc3dpdGNoVG9Ub2RheVRhc2tzVmlldywgc3dpdGNoVG9XZWVrVGFza3NWaWV3LCBzd2l0Y2hUb0FsbE5vdGVzVmlldywgdG9nZ2xlTWVudVZpc2liaWxpdHkgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXJDcmVhdG9yID0gKCkgPT4ge1xyXG4gICAgZnVuY3Rpb24gc2V0VGFza0NvbnRhaW5lcklkKCkge1xyXG4gICAgICAgIGNvbnN0IGxpc3RPZkFsbFRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpc3Qtb2YtYWxsLXRhc2tzJyk7XHJcbiAgICAgICAgbGV0IG51bWJlck9mVGFza3MgPSBsaXN0T2ZBbGxUYXNrcy5jaGlsZEVsZW1lbnRDb3VudDtcclxuICAgICAgICBsZXQgdGFza0NvbnRhaW5lcklkID0gMCArIChudW1iZXJPZlRhc2tzIC0gMSk7XHJcbiAgICAgICAgcmV0dXJuIHRhc2tDb250YWluZXJJZDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVOZXdUYXNrQ29udGFpbmVyKCkge1xyXG4gICAgICAgIGNvbnN0IGxpc3RPZkFsbFRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpc3Qtb2YtYWxsLXRhc2tzJyk7XHJcbiAgICAgICAgY29uc3QgdGFza1RpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay10aXRsZS1pbnB1dCcpO1xyXG4gICAgICAgIGNvbnN0IHRhc2tEdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1kYXRlLWlucHV0Jyk7XHJcbiAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1wcmlvcml0eS1pbnB1dCcpO1xyXG4gICAgICAgIGNvbnN0IG5ld1Rhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBuZXdUYXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29udGFpbmVyJyk7XHJcbiAgICAgICAgbmV3VGFza0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFzaycsIHNldFRhc2tDb250YWluZXJJZCgpKTtcclxuICAgICAgICBsaXN0T2ZBbGxUYXNrcy5hcHBlbmRDaGlsZChuZXdUYXNrQ29udGFpbmVyKTtcclxuICAgICAgICBjb25zdCBuZXdUYXNrU3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBuZXdUYXNrU3RhdHVzLnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xyXG4gICAgICAgIG5ld1Rhc2tTdGF0dXMuY2xhc3NMaXN0LmFkZCgndGFzay1kYXRhLWNvbnRhaW5lcicsICd0YXNrLXN0YXR1cy1jaGVja2JveCcpO1xyXG4gICAgICAgIG5ld1Rhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3VGFza1N0YXR1cyk7XHJcbiAgICAgICAgY29uc3QgbmV3VGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICBuZXdUYXNrVGl0bGUuY2xhc3NMaXN0LmFkZCgndGFzay1kYXRhLWNvbnRhaW5lcicsICd0YXNrLXRpdGxlJyk7XHJcbiAgICAgICAgbmV3VGFza1RpdGxlLnNldEF0dHJpYnV0ZSgnZGF0YS10YXNrLXRpdGxlJywgbmV3VGFza0NvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFzaycpKTtcclxuICAgICAgICBuZXdUYXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrVGl0bGVJbnB1dC52YWx1ZTtcclxuICAgICAgICBuZXdUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Rhc2tUaXRsZSk7XHJcbiAgICAgICAgY29uc3QgbmV3VGFza0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgbmV3VGFza0R1ZURhdGUuY2xhc3NMaXN0LmFkZCgndGFzay1kYXRhLWNvbnRhaW5lcicsICd0YXNrLWRhdGUnKTtcclxuICAgICAgICBuZXdUYXNrRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFzay1kYXRlJywgbmV3VGFza0NvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFzaycpKTtcclxuICAgICAgICBuZXdUYXNrRHVlRGF0ZS50ZXh0Q29udGVudCA9IHRhc2tEdWVEYXRlSW5wdXQudmFsdWU7XHJcbiAgICAgICAgbmV3VGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUYXNrRHVlRGF0ZSk7XHJcbiAgICAgICAgc2V0TmV3VGFza0NvbG9yKG5ld1Rhc2tDb250YWluZXIsIHRhc2tQcmlvcml0eUlucHV0KTtcclxuICAgICAgICBjcmVhdGVFZGl0QW5kRGVsZXRlQnV0dG9ucyhuZXdUYXNrQ29udGFpbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVFZGl0QW5kRGVsZXRlQnV0dG9ucyhjb250YWluZXIpIHtcclxuICAgICAgICBjb25zdCBidXR0b25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgYnV0dG9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrLWRhdGEtY29udGFpbmVyJywgJ2J1dHRvbnMtY29udGFpbmVyJyk7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbnNDb250YWluZXIpO1xyXG4gICAgICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICAgICAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmYXMnLCAnZmEtZWRpdCcsICdlZGl0LWJ1dHRvbicsICdpY29uJyk7XHJcbiAgICAgICAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcclxuICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICAgICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2ZhcycsICdmYS10cmFzaCcsICdkZWxldGUtYnV0dG9uJywgJ2ljb24nKTtcclxuICAgICAgICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0TmV3VGFza0NvbG9yKG5ld1Rhc2ssIG5ld1Rhc2tQcmlvcml0eSkge1xyXG4gICAgICAgIGlmIChuZXdUYXNrUHJpb3JpdHkudmFsdWUgPT09ICdMb3cnKSB7XHJcbiAgICAgICAgICAgIG5ld1Rhc2suc3R5bGUuYm9yZGVyTGVmdENvbG9yID0gJyMwMDY0MDAnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobmV3VGFza1ByaW9yaXR5LnZhbHVlID09PSAnTWVkaXVtJykge1xyXG4gICAgICAgICAgICBuZXdUYXNrLnN0eWxlLmJvcmRlckxlZnRDb2xvciA9ICcjZmY4YzAwJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuZXdUYXNrLnN0eWxlLmJvcmRlckxlZnRDb2xvciA9ICcjOGIwMDAwJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlTmV3Tm90ZUNvbnRhaW5lcigpIHtcclxuICAgICAgICBjb25zdCBub3RlRGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub3RlLWRlc2NyaXB0aW9uLWlucHV0Jyk7XHJcbiAgICAgICAgY29uc3QgbmV3Tm90ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbmV3Tm90ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdub3RlLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIGNvbnN0IGxpc3RPZkFsbE5vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpc3Qtb2YtYWxsLW5vdGVzJyk7XHJcbiAgICAgICAgbGlzdE9mQWxsTm90ZXMuYXBwZW5kQ2hpbGQobmV3Tm90ZUNvbnRhaW5lcik7XHJcbiAgICAgICAgY29uc3QgbmV3Tm90ZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICBuZXdOb3RlVGl0bGUuY2xhc3NMaXN0LmFkZCgnbm90ZS10aXRsZScpO1xyXG4gICAgICAgIG5ld05vdGVUaXRsZS50ZXh0Q29udGVudCA9IG5vdGVUaXRsZUlucHV0LnZhbHVlO1xyXG4gICAgICAgIG5ld05vdGVDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3Tm90ZVRpdGxlKTtcclxuICAgICAgICBjb25zdCBuZXdOb3RlRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgbmV3Tm90ZURlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ25vdGUtZGVzY3JpcHRpb24nKTtcclxuICAgICAgICBuZXdOb3RlRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBub3RlRGVzY3JpcHRpb25JbnB1dC52YWx1ZTtcclxuICAgICAgICBuZXdOb3RlQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld05vdGVEZXNjcmlwdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgY3JlYXRlTmV3VGFza0NvbnRhaW5lciwgY3JlYXRlTmV3Tm90ZUNvbnRhaW5lciB9O1xyXG59O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHsgSW1hZ2VIYW5kbGVyLCBDcmVhdGlvbldpbmRvdywgRWRpdFdpbmRvdywgTWVudSwgQ29udGFpbmVyQ3JlYXRvciB9IGZyb20gXCIuL2RvbU1hbmlwdWxhdGlvblwiO1xyXG5pbXBvcnQgeyBWYWxpZGF0aW9uIH0gZnJvbSBcIi4vdmFsaWRhdGlvblwiO1xyXG5pbXBvcnQgeyBUYXNrLCBQcm9qZWN0LCBOb3RlIH0gZnJvbSAnLi9tYWluTG9naWMnO1xyXG5cclxuY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob21lLWJ1dHRvbicpO1xyXG5jb25zdCBtZW51VG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUtdG9nZ2xlJyk7XHJcbmNvbnN0IGFsbFRhc2tzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FsbC10YXNrcy1idXR0b24nKTtcclxuY29uc3QgdG9kYXlUYXNrc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RheS10YXNrcy1idXR0b24nKTtcclxuY29uc3Qgd2Vla1Rhc2tzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dlZWstdGFza3MtYnV0dG9uJyk7XHJcbmNvbnN0IGFsbE5vdGVzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FsbC1ub3Rlcy1idXR0b24nKTtcclxuY29uc3QgY3JlYXRpb25CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRpb24tYnV0dG9uJyk7XHJcbmNvbnN0IGNyZWF0aW9uV2luZG93Q2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRpb24td2luZG93LWNsb3NlLWJ1dHRvbicpO1xyXG5jb25zdCBlZGl0V2luZG93Q2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC13aW5kb3ctY2xvc2UtYnV0dG9uJyk7XHJcbmNvbnN0IHRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1idXR0b24nKTtcclxuY29uc3QgcHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWJ1dHRvbicpO1xyXG5jb25zdCBub3RlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vdGUtYnV0dG9uJyk7XHJcbmNvbnN0IGFkZFRhc2tTdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2stc3VibWl0LWJ1dHRvbicpO1xyXG5jb25zdCBlZGl0VGFza1N1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2stc3VibWl0LWJ1dHRvbicpO1xyXG5jb25zdCBhZGRQcm9qZWN0U3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1wcm9qZWN0LXN1Ym1pdC1idXR0b24nKTtcclxuY29uc3QgYWRkTm90ZVN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtbm90ZS1zdWJtaXQtYnV0dG9uJyk7XHJcbmNvbnN0IHRhc2tUaXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stdGl0bGUtaW5wdXQnKTtcclxuY29uc3QgdGFza0Rlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1kZXNjcmlwdGlvbi1pbnB1dCcpO1xyXG5jb25zdCB0YXNrRHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZGF0ZS1pbnB1dCcpO1xyXG5jb25zdCB0YXNrUHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLXByaW9yaXR5LWlucHV0Jyk7XHJcbmNvbnN0IHByb2plY3RUaXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtdGl0bGUtaW5wdXQnKTtcclxuY29uc3Qgbm90ZVRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbm90ZS10aXRsZS1pbnB1dCcpO1xyXG5jb25zdCBub3RlRGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub3RlLWRlc2NyaXB0aW9uLWlucHV0Jyk7XHJcbmNvbnN0IGxpc3RPZkFsbFRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpc3Qtb2YtYWxsLXRhc2tzJyk7XHJcbmNvbnN0IGVkaXRUYXNrVGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2stdGl0bGUtaW5wdXQnKTtcclxuY29uc3QgZWRpdFRhc2tEZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGFzay1kZXNjcmlwdGlvbi1pbnB1dCcpO1xyXG5jb25zdCBlZGl0VGFza0R1ZURhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2stZGF0ZS1pbnB1dCcpO1xyXG5jb25zdCBlZGl0VGFza1ByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrLXByaW9yaXR5LWlucHV0Jyk7XHJcblxyXG5sZXQgY2hvc2VuVGFzayA9ICcnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgY29uc3QgdGFzayA9IFRhc2soKTtcclxuICAgIGNvbnN0IHByb2plY3QgPSBQcm9qZWN0KCk7XHJcbiAgICBjb25zdCBub3RlID0gTm90ZSgpO1xyXG4gICAgY29uc3QgaW1hZ2VIYW5kbGVyID0gSW1hZ2VIYW5kbGVyKCk7XHJcbiAgICBjb25zdCBjcmVhdGlvbldpbmRvdyA9IENyZWF0aW9uV2luZG93KCk7XHJcbiAgICBjb25zdCBlZGl0V2luZG93ID0gRWRpdFdpbmRvdygpO1xyXG4gICAgY29uc3QgbWVudSA9IE1lbnUoKTtcclxuICAgIGNvbnN0IHZhbGlkYXRpb24gPSBWYWxpZGF0aW9uKCk7XHJcbiAgICBjb25zdCBjb250YWluZXJDcmVhdG9yID0gQ29udGFpbmVyQ3JlYXRvcigpO1xyXG4gICAgaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1lbnUuc3dpdGNoVG9BbGxUYXNrc1ZpZXcoKSk7XHJcbiAgICBhbGxUYXNrc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1lbnUuc3dpdGNoVG9BbGxUYXNrc1ZpZXcoKSk7XHJcbiAgICBtZW51VG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbWVudS50b2dnbGVNZW51VmlzaWJpbGl0eSgpKTtcclxuICAgIHRvZGF5VGFza3NCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBtZW51LnN3aXRjaFRvVG9kYXlUYXNrc1ZpZXcoKSk7XHJcbiAgICB3ZWVrVGFza3NCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBtZW51LnN3aXRjaFRvV2Vla1Rhc2tzVmlldygpKTtcclxuICAgIGFsbE5vdGVzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbWVudS5zd2l0Y2hUb0FsbE5vdGVzVmlldygpKTtcclxuICAgIGNyZWF0aW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY3JlYXRpb25XaW5kb3cub3BlbkNyZWF0aW9uV2luZG93KCkpO1xyXG4gICAgdGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNyZWF0aW9uV2luZG93LnNob3dUYXNrRm9ybSgpKTtcclxuICAgIHByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjcmVhdGlvbldpbmRvdy5zaG93UHJvamVjdEZvcm0oKSk7XHJcbiAgICBub3RlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY3JlYXRpb25XaW5kb3cuc2hvd05vdGVGb3JtKCkpO1xyXG4gICAgY3JlYXRpb25XaW5kb3dDbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNyZWF0aW9uV2luZG93LmNsb3NlQ3JlYXRpb25XaW5kb3coKSk7XHJcbiAgICBlZGl0V2luZG93Q2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBlZGl0V2luZG93LmNsb3NlRWRpdFdpbmRvdygpKTtcclxuICAgIHRhc2tUaXRsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdmFsaWRhdGlvbi5jbGVhclZhbGlkYXRpb25NZXNzYWdlKTtcclxuICAgIHRhc2tEZXNjcmlwdGlvbklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdmFsaWRhdGlvbi5jbGVhclZhbGlkYXRpb25NZXNzYWdlKTtcclxuICAgIHRhc2tEdWVEYXRlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB2YWxpZGF0aW9uLmNsZWFyVmFsaWRhdGlvbk1lc3NhZ2UpO1xyXG4gICAgdGFza1ByaW9yaXR5SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB2YWxpZGF0aW9uLmNsZWFyVmFsaWRhdGlvbk1lc3NhZ2UpO1xyXG4gICAgZWRpdFRhc2tUaXRsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdmFsaWRhdGlvbi5jbGVhclZhbGlkYXRpb25NZXNzYWdlKTtcclxuICAgIGVkaXRUYXNrRGVzY3JpcHRpb25JbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHZhbGlkYXRpb24uY2xlYXJWYWxpZGF0aW9uTWVzc2FnZSk7XHJcbiAgICBlZGl0VGFza0R1ZURhdGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHZhbGlkYXRpb24uY2xlYXJWYWxpZGF0aW9uTWVzc2FnZSk7XHJcbiAgICBlZGl0VGFza1ByaW9yaXR5SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB2YWxpZGF0aW9uLmNsZWFyVmFsaWRhdGlvbk1lc3NhZ2UpO1xyXG4gICAgcHJvamVjdFRpdGxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB2YWxpZGF0aW9uLmNsZWFyVmFsaWRhdGlvbk1lc3NhZ2UpO1xyXG4gICAgbm90ZVRpdGxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB2YWxpZGF0aW9uLmNsZWFyVmFsaWRhdGlvbk1lc3NhZ2UpO1xyXG4gICAgbm90ZURlc2NyaXB0aW9uSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB2YWxpZGF0aW9uLmNsZWFyVmFsaWRhdGlvbk1lc3NhZ2UpO1xyXG4gICAgYWRkVGFza1N1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmICh2YWxpZGF0aW9uLnZhbGlkYXRlQ3JlYXRpb25UYXNrRm9ybSgpKSB7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lckNyZWF0b3IuY3JlYXRlTmV3VGFza0NvbnRhaW5lcigpO1xyXG4gICAgICAgICAgICB0YXNrLmNyZWF0ZU5ld1Rhc2soKTtcclxuICAgICAgICAgICAgaW1hZ2VIYW5kbGVyLmhhbmRsZVBhZ2VJbWFnZURpc3BsYXlpbmcoKTtcclxuICAgICAgICAgICAgY3JlYXRpb25XaW5kb3cuY2xvc2VDcmVhdGlvbldpbmRvdygpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgbGlzdE9mQWxsVGFza3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhc2tUb0VkaXQgPSBlLnRhcmdldC5jbG9zZXN0KCcudGFzay1jb250YWluZXInKTtcclxuICAgICAgICBjb25zdCBlZGl0QnV0dG9uID0gZS50YXJnZXQuY2xvc2VzdCgnLmVkaXQtYnV0dG9uJyk7XHJcbiAgICAgICAgY2hvc2VuVGFzayA9IHRhc2tUb0VkaXQ7XHJcbiAgICAgICAgaWYgKGVkaXRCdXR0b24pIHtcclxuICAgICAgICAgICAgZWRpdFdpbmRvdy5vcGVuRWRpdFdpbmRvdyhjaG9zZW5UYXNrKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGVkaXRUYXNrU3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKHZhbGlkYXRpb24udmFsaWRhdGVFZGl0VGFza0Zvcm0oKSkge1xyXG4gICAgICAgICAgICB0YXNrLmVkaXRDaG9zZW5UYXNrKGNob3NlblRhc2ssIGVkaXRUYXNrVGl0bGVJbnB1dC52YWx1ZSwgZWRpdFRhc2tEdWVEYXRlSW5wdXQudmFsdWUsIGVkaXRUYXNrUHJpb3JpdHlJbnB1dCk7XHJcbiAgICAgICAgICAgIGVkaXRXaW5kb3cuY2xvc2VFZGl0V2luZG93KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBhZGRQcm9qZWN0U3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKHZhbGlkYXRpb24udmFsaWRhdGVQcm9qZWN0Rm9ybSgpKSB7XHJcbiAgICAgICAgICAgIHByb2plY3QuY3JlYXRlTmV3UHJvamVjdCgpO1xyXG4gICAgICAgICAgICBjcmVhdGlvbldpbmRvdy5jbG9zZUNyZWF0aW9uV2luZG93KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLyBhZGROb3RlU3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIC8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyAgICAgaWYgKHZhbGlkYXRpb24udmFsaWRhdGVOb3RlRm9ybSgpKSB7XHJcbiAgICAvLyAgICAgICAgIGNyZWF0ZU5ld05vdGVDb250YWluZXIoKTtcclxuICAgIC8vICAgICAgICAgbm90ZS5jcmVhdGVOZXdOb3RlKCk7XHJcbiAgICAvLyAgICAgICAgIGltYWdlSGFuZGxlci5oYW5kbGVQYWdlSW1hZ2VEaXNwbGF5aW5nKCk7XHJcbiAgICAvLyAgICAgICAgIGNyZWF0aW9uV2luZG93LmNsb3NlQ3JlYXRpb25XaW5kb3coKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9KTtcclxuICAgIGxpc3RPZkFsbFRhc2tzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBjb25zdCB0YXNrVG9EZWxldGUgPSBlLnRhcmdldC5jbG9zZXN0KCcudGFzay1jb250YWluZXInKTtcclxuICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBlLnRhcmdldC5jbG9zZXN0KCcuZGVsZXRlLWJ1dHRvbicpO1xyXG4gICAgICAgIGNob3NlblRhc2sgPSB0YXNrVG9EZWxldGU7XHJcbiAgICAgICAgaWYgKGRlbGV0ZUJ1dHRvbikge1xyXG4gICAgICAgICAgICBjaG9zZW5UYXNrLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB0YXNrLmRlbGV0ZUNob3NlblRhc2soY2hvc2VuVGFzayk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltYWdlSGFuZGxlci5oYW5kbGVQYWdlSW1hZ2VEaXNwbGF5aW5nKCk7XHJcbiAgICB9KTtcclxufVxyXG4iLCJleHBvcnQgY29uc3QgVGFzayA9ICgpID0+IHtcclxuICAgIGNvbnN0IHRhc2tzQXJyYXkgPSBbXTtcclxuICAgIGNvbnN0IHRhc2tUaXRsZXNBcnJheSA9IFtdO1xyXG5cclxuICAgIGZ1bmN0aW9uIHRhc2tGYWN0b3J5KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJvamVjdCwgcHJpb3JpdHksIGlzRG9uZSA9IGZhbHNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcm9qZWN0LCBwcmlvcml0eSwgaXNEb25lIH07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkVGFzayhuZXdUYXNrKSB7XHJcbiAgICAgICAgdGFza3NBcnJheS5wdXNoKG5ld1Rhc2spO1xyXG4gICAgICAgIHRhc2tUaXRsZXNBcnJheS5wdXNoKG5ld1Rhc2sudGl0bGUpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnVXBkYXRlZCB0YXNrc0FycmF5OicsIHRhc2tzQXJyYXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRlbGV0ZVRhc2sodGFza1RvRGVsZXRlKSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXhUb0RlbGV0ZSA9IHBhcnNlSW50KHRhc2tUb0RlbGV0ZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFzaycpLCAxMCk7XHJcbiAgICAgICAgY29uc3QgdGFza0NvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzay1jb250YWluZXInKTtcclxuICAgICAgICBjb25zdCB0YXNrVGl0bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2stdGl0bGUnKTtcclxuICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzay1kYXRlJyk7XHJcbiAgICAgICAgdGFza3NBcnJheS5zcGxpY2UoaW5kZXhUb0RlbGV0ZSwgMSk7XHJcbiAgICAgICAgdGFza1RpdGxlc0FycmF5LnNwbGljZShpbmRleFRvRGVsZXRlLCAxKTtcclxuICAgICAgICB0YXNrQ29udGFpbmVycy5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICB0YXNrLnNldEF0dHJpYnV0ZSgnZGF0YS10YXNrJywgaW5kZXgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRhc2tUaXRsZXMuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgdGFzay5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFzay10aXRsZScsIGluZGV4KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0YXNrRHVlRGF0ZXMuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgdGFzay5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFzay1kYXRlJywgaW5kZXgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnVXBkYXRlZCB0YXNrc0FycmF5OicsIHRhc2tzQXJyYXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGVkaXRUYXNrKGNob3NlblRhc2ssIG5ld1RpdGxlLCBuZXdEZXNjcmlwdGlvbiwgbmV3RHVlRGF0ZSwgbmV3UHJpb3JpdHkpIHtcclxuICAgICAgICBjb25zdCBpbmRleFRvRWRpdCA9IHBhcnNlSW50KGNob3NlblRhc2suZ2V0QXR0cmlidXRlKCdkYXRhLXRhc2snKSwgMTApO1xyXG4gICAgICAgIGNvbnN0IHRhc2tUb0VkaXQgPSB0aGlzLnRhc2tzQXJyYXlbaW5kZXhUb0VkaXRdO1xyXG4gICAgICAgIHRhc2tUb0VkaXQudGl0bGUgPSBuZXdUaXRsZTtcclxuICAgICAgICB0YXNrVG9FZGl0LmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XHJcbiAgICAgICAgdGFza1RvRWRpdC5kdWVEYXRlID0gbmV3RHVlRGF0ZTtcclxuICAgICAgICB0YXNrVG9FZGl0LnByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XHJcbiAgICAgICAgY29uc29sZS5sb2coaW5kZXhUb0VkaXQpO1xyXG4gICAgICAgIHRhc2tUaXRsZXNBcnJheS5zcGxpY2UoaW5kZXhUb0VkaXQsIDEsIG5ld1RpdGxlKTtcclxuICAgICAgICB0YXNrc0FycmF5LnNwbGljZShpbmRleFRvRWRpdCwgMSwgdGFza1RvRWRpdCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdVcGRhdGVkIHRhc2tzQXJyYXk6JywgdGFza3NBcnJheSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlTmV3VGFzaygpIHtcclxuICAgICAgICBjb25zdCBjcmVhdGlvblRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0aW9uLXRhc2stZm9ybScpO1xyXG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stdGl0bGUtaW5wdXQnKTtcclxuICAgICAgICBjb25zdCB0YXNrRGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWRlc2NyaXB0aW9uLWlucHV0Jyk7XHJcbiAgICAgICAgY29uc3QgdGFza0R1ZURhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWRhdGUtaW5wdXQnKTtcclxuICAgICAgICBjb25zdCB0YXNrUHJvamVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stcHJvamVjdC1pbnB1dCcpO1xyXG4gICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stcHJpb3JpdHktaW5wdXQnKTtcclxuICAgICAgICBjb25zdCBuZXdUYXNrID0gdGFza0ZhY3RvcnkodGFza1RpdGxlSW5wdXQudmFsdWUsIHRhc2tEZXNjcmlwdGlvbklucHV0LnZhbHVlLCB0YXNrRHVlRGF0ZUlucHV0LnZhbHVlLCB0YXNrUHJvamVjdElucHV0LnZhbHVlLCB0YXNrUHJpb3JpdHlJbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgYWRkVGFzayhuZXdUYXNrKTtcclxuICAgICAgICBjcmVhdGlvblRhc2tGb3JtLnJlc2V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZWRpdENob3NlblRhc2soY2hvc2VuVGFzaywgbmV3VGl0bGUsIG5ld0R1ZURhdGUsIG5ld1ByaW9yaXR5KSB7XHJcbiAgICAgICAgY29uc3QgZWRpdFRhc2tUaXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGFzay10aXRsZS1pbnB1dCcpO1xyXG4gICAgICAgIGNvbnN0IGVkaXRUYXNrRGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2stZGVzY3JpcHRpb24taW5wdXQnKTtcclxuICAgICAgICBjb25zdCBlZGl0VGFza0R1ZURhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2stZGF0ZS1pbnB1dCcpO1xyXG4gICAgICAgIGNvbnN0IGVkaXRUYXNrUHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2stcHJpb3JpdHktaW5wdXQnKTtcclxuICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10YXNrLXRpdGxlPVwiJHtjaG9zZW5UYXNrLmdldEF0dHJpYnV0ZSgnZGF0YS10YXNrJyl9XCJdYCk7XHJcbiAgICAgICAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10YXNrLWRhdGU9XCIke2Nob3NlblRhc2suZ2V0QXR0cmlidXRlKCdkYXRhLXRhc2snKX1cIl1gKTtcclxuICAgICAgICB0YXNrVGl0bGUuc2V0QXR0cmlidXRlKCdkYXRhLXRhc2stdGl0bGUnLCBjaG9zZW5UYXNrLmdldEF0dHJpYnV0ZSgnZGF0YS10YXNrJykpO1xyXG4gICAgICAgIHRhc2tEdWVEYXRlLnNldEF0dHJpYnV0ZSgnZGF0YS10YXNrLWRhdGUnLCBjaG9zZW5UYXNrLmdldEF0dHJpYnV0ZSgnZGF0YS10YXNrJykpO1xyXG4gICAgICAgIGVkaXRUYXNrKGNob3NlblRhc2ssIGVkaXRUYXNrVGl0bGVJbnB1dC52YWx1ZSwgZWRpdFRhc2tEZXNjcmlwdGlvbklucHV0LnZhbHVlLCBlZGl0VGFza0R1ZURhdGVJbnB1dC52YWx1ZSwgZWRpdFRhc2tQcmlvcml0eUlucHV0LnZhbHVlKTtcclxuICAgICAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSBuZXdUaXRsZTtcclxuICAgICAgICB0YXNrRHVlRGF0ZS50ZXh0Q29udGVudCA9IG5ld0R1ZURhdGU7XHJcbiAgICAgICAgc2V0TmV3VGFza0NvbG9yKGNob3NlblRhc2ssIG5ld1ByaW9yaXR5KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkZWxldGVDaG9zZW5UYXNrKGNob3NlblRhc2spIHtcclxuICAgICAgICBkZWxldGVUYXNrKGNob3NlblRhc2spO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IGNyZWF0ZU5ld1Rhc2ssIGVkaXRDaG9zZW5UYXNrLCBkZWxldGVDaG9zZW5UYXNrIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUHJvamVjdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHByb2plY3RzQXJyYXkgPSBbXTtcclxuXHJcbiAgICBmdW5jdGlvbiBwcm9qZWN0RmFjdG9yeSh0aXRsZSkge1xyXG4gICAgICAgIHJldHVybiB7IHRpdGxlIH07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkUHJvamVjdChuZXdQcm9qZWN0KSB7XHJcbiAgICAgICAgcHJvamVjdHNBcnJheS5wdXNoKG5ld1Byb2plY3QpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzQXJyYXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QoKSB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1mb3JtJyk7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC10aXRsZS1pbnB1dCcpO1xyXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBwcm9qZWN0RmFjdG9yeShwcm9qZWN0VGl0bGVJbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgYWRkUHJvamVjdChuZXdQcm9qZWN0KTtcclxuICAgICAgICBwcm9qZWN0Rm9ybS5yZXNldCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IGNyZWF0ZU5ld1Byb2plY3QgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBOb3RlID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgbm90ZXNBcnJheSA9IFtdO1xyXG5cclxuICAgIGZ1bmN0aW9uIG5vdGVGYWN0b3J5KHRpdGxlLCBkZXNjcmlwdGlvbikge1xyXG4gICAgICAgIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiB9O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZE5vdGUobmV3Tm90ZSkge1xyXG4gICAgICAgIG5vdGVzQXJyYXkucHVzaChuZXdOb3RlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhub3Rlc0FycmF5KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVOZXdOb3RlKCkge1xyXG4gICAgICAgIGNvbnN0IG5vdGVGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vdGUtZm9ybScpO1xyXG4gICAgICAgIGNvbnN0IG5vdGVUaXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vdGUtdGl0bGUtaW5wdXQnKTtcclxuICAgICAgICBjb25zdCBub3RlRGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub3RlLWRlc2NyaXB0aW9uLWlucHV0Jyk7XHJcbiAgICAgICAgY29uc3QgbmV3Tm90ZSA9IG5vdGVGYWN0b3J5KG5vdGVUaXRsZUlucHV0LnZhbHVlLCBub3RlRGVzY3JpcHRpb25JbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgYWRkTm90ZShuZXdOb3RlKTtcclxuICAgICAgICBub3RlRm9ybS5yZXNldCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IGNyZWF0ZU5ld05vdGUgfTtcclxufTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vbWFpbkxvZ2ljXCI7XHJcbmltcG9ydCB7IEVkaXRXaW5kb3cgfSBmcm9tIFwiLi9kb21NYW5pcHVsYXRpb25cIjtcclxuXHJcbmNvbnN0IHRhc2tUaXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stdGl0bGUtaW5wdXQnKTtcclxuY29uc3QgdGFza0Rlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1kZXNjcmlwdGlvbi1pbnB1dCcpO1xyXG5jb25zdCB0YXNrRHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZGF0ZS1pbnB1dCcpO1xyXG5jb25zdCB0YXNrUHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLXByaW9yaXR5LWlucHV0Jyk7XHJcbmNvbnN0IGVkaXRUYXNrVGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2stdGl0bGUtaW5wdXQnKTtcclxuY29uc3QgZWRpdFRhc2tEZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGFzay1kZXNjcmlwdGlvbi1pbnB1dCcpO1xyXG5jb25zdCBlZGl0VGFza0R1ZURhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2stZGF0ZS1pbnB1dCcpO1xyXG5jb25zdCBlZGl0VGFza1ByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrLXByaW9yaXR5LWlucHV0Jyk7XHJcbmNvbnN0IHByb2plY3RUaXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtdGl0bGUtaW5wdXQnKTtcclxuY29uc3Qgbm90ZVRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbm90ZS10aXRsZS1pbnB1dCcpO1xyXG5jb25zdCBub3RlRGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub3RlLWRlc2NyaXB0aW9uLWlucHV0Jyk7XHJcblxyXG5leHBvcnQgY29uc3QgVmFsaWRhdGlvbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IHRhc2sgPSBUYXNrKCk7XHJcbiAgICBjb25zdCBlZGl0V2luZG93ID0gRWRpdFdpbmRvdygpO1xyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVDcmVhdGlvblRhc2tGb3JtKCkge1xyXG4gICAgICAgIGlmICh0YXNrLnRhc2tUaXRsZXNBcnJheSAmJiB0YXNrLnRhc2tUaXRsZXNBcnJheS5pbmNsdWRlcyh0YXNrVGl0bGVJbnB1dC52YWx1ZS50cmltKCkpKSB7XHJcbiAgICAgICAgICAgIHRhc2tUaXRsZUlucHV0LnNldEN1c3RvbVZhbGlkaXR5KCdQbGVhc2UgZW50ZXIgYSB1bmlxdWUgdGFzayB0aXRsZS4nKTtcclxuICAgICAgICAgICAgdGFza1RpdGxlSW5wdXQucmVwb3J0VmFsaWRpdHkoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gaWYgKHRhc2tUaXRsZUlucHV0LnZhbHVlID09PSAnJykge1xyXG4gICAgICAgICAgICB0YXNrVGl0bGVJbnB1dC5zZXRDdXN0b21WYWxpZGl0eSgnUGxlYXNlIGVudGVyIGEgdGl0bGUgZm9yIHlvdXIgdGFzay4nKTtcclxuICAgICAgICAgICAgdGFza1RpdGxlSW5wdXQucmVwb3J0VmFsaWRpdHkoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGFza0Rlc2NyaXB0aW9uSW5wdXQudmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIHRhc2tEZXNjcmlwdGlvbklucHV0LnNldEN1c3RvbVZhbGlkaXR5KCdQbGVhc2UgZW50ZXIgYSBkZXNjcmlwdGlvbiBmb3IgeW91ciB0YXNrLicpO1xyXG4gICAgICAgICAgICB0YXNrRGVzY3JpcHRpb25JbnB1dC5yZXBvcnRWYWxpZGl0eSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0YXNrRHVlRGF0ZUlucHV0LnZhbHVlID09PSAnJykge1xyXG4gICAgICAgICAgICB0YXNrRHVlRGF0ZUlucHV0LnNldEN1c3RvbVZhbGlkaXR5KCdQbGVhc2UgZW50ZXIgYSBkdWUgZGF0ZSBmb3IgeW91ciB0YXNrLicpO1xyXG4gICAgICAgICAgICB0YXNrRHVlRGF0ZUlucHV0LnJlcG9ydFZhbGlkaXR5KCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRhc2tQcmlvcml0eUlucHV0LnZhbHVlID09PSAnJykge1xyXG4gICAgICAgICAgICB0YXNrUHJpb3JpdHlJbnB1dC5zZXRDdXN0b21WYWxpZGl0eSgnUGxlYXNlIGVudGVyIGEgcHJpb3JpdHkgZm9yIHlvdXIgdGFzay4nKTtcclxuICAgICAgICAgICAgdGFza1ByaW9yaXR5SW5wdXQucmVwb3J0VmFsaWRpdHkoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gaWYgKHRhc2tUaXRsZUlucHV0LnZhbHVlLnRyaW0oKS5sZW5ndGggPiAyMCkge1xyXG4gICAgICAgICAgICB0YXNrVGl0bGVJbnB1dC5zZXRDdXN0b21WYWxpZGl0eSgnUGxlYXNlIGVudGVyIGEgdGl0bGUgb2Ygbm8gbW9yZSB0aGFuIDIwIGNoYXJhY3RlcnMuJyk7XHJcbiAgICAgICAgICAgIHRhc2tUaXRsZUlucHV0LnJlcG9ydFZhbGlkaXR5KCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVFZGl0VGFza0Zvcm0oKSB7XHJcbiAgICAgICAgaWYgKGVkaXRUYXNrVGl0bGVJbnB1dC52YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgZWRpdFRhc2tUaXRsZUlucHV0LnNldEN1c3RvbVZhbGlkaXR5KCdQbGVhc2UgZW50ZXIgYSB0aXRsZSBmb3IgeW91ciB0YXNrLicpO1xyXG4gICAgICAgICAgICBlZGl0VGFza1RpdGxlSW5wdXQucmVwb3J0VmFsaWRpdHkoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGFzay50YXNrVGl0bGVzQXJyYXkuaW5jbHVkZXMoZWRpdFRhc2tUaXRsZUlucHV0LnZhbHVlLnRyaW0oKSkgJiYgZWRpdFRhc2tUaXRsZUlucHV0LnZhbHVlLnRyaW0oKSAhPT0gZWRpdFdpbmRvdy5jdXJyZW50VGFza1RpdGxlLnRyaW0oKSkge1xyXG4gICAgICAgICAgICBlZGl0VGFza1RpdGxlSW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJ1BsZWFzZSBlbnRlciBhIHVuaXF1ZSB0YXNrIHRpdGxlLicpO1xyXG4gICAgICAgICAgICBlZGl0VGFza1RpdGxlSW5wdXQucmVwb3J0VmFsaWRpdHkoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZWRpdFRhc2tEZXNjcmlwdGlvbklucHV0LnZhbHVlID09PSAnJykge1xyXG4gICAgICAgICAgICBlZGl0VGFza0Rlc2NyaXB0aW9uSW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJ1BsZWFzZSBlbnRlciBhIGRlc2NyaXB0aW9uIGZvciB5b3VyIHRhc2suJyk7XHJcbiAgICAgICAgICAgIGVkaXRUYXNrRGVzY3JpcHRpb25JbnB1dC5yZXBvcnRWYWxpZGl0eSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlZGl0VGFza0R1ZURhdGVJbnB1dC52YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgZWRpdFRhc2tEdWVEYXRlSW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJ1BsZWFzZSBlbnRlciBhIGR1ZSBkYXRlIGZvciB5b3VyIHRhc2suJyk7XHJcbiAgICAgICAgICAgIGVkaXRUYXNrRHVlRGF0ZUlucHV0LnJlcG9ydFZhbGlkaXR5KCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKGVkaXRUYXNrUHJpb3JpdHlJbnB1dC52YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgZWRpdFRhc2tQcmlvcml0eUlucHV0LnNldEN1c3RvbVZhbGlkaXR5KCdQbGVhc2UgZW50ZXIgYSBwcmlvcml0eSBmb3IgeW91ciB0YXNrLicpO1xyXG4gICAgICAgICAgICBlZGl0VGFza1ByaW9yaXR5SW5wdXQucmVwb3J0VmFsaWRpdHkoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gaWYgKGVkaXRUYXNrVGl0bGVJbnB1dC52YWx1ZS50cmltKCkubGVuZ3RoID4gMjApIHtcclxuICAgICAgICAgICAgZWRpdFRhc2tUaXRsZUlucHV0LnNldEN1c3RvbVZhbGlkaXR5KCdQbGVhc2UgZW50ZXIgYSB0aXRsZSBvZiBubyBtb3JlIHRoYW4gMjAgY2hhcmFjdGVycy4nKTtcclxuICAgICAgICAgICAgZWRpdFRhc2tUaXRsZUlucHV0LnJlcG9ydFZhbGlkaXR5KCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVQcm9qZWN0Rm9ybSgpIHtcclxuICAgICAgICBpZiAocHJvamVjdFRpdGxlSW5wdXQudmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIHByb2plY3RUaXRsZUlucHV0LnNldEN1c3RvbVZhbGlkaXR5KCdQbGVhc2UgZW50ZXIgYSB0aXRsZSBmb3IgeW91ciBwcm9qZWN0LicpO1xyXG4gICAgICAgICAgICBwcm9qZWN0VGl0bGVJbnB1dC5yZXBvcnRWYWxpZGl0eSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlTm90ZUZvcm0oKSB7XHJcbiAgICAgICAgaWYgKG5vdGVUaXRsZUlucHV0LnZhbHVlID09PSAnJykge1xyXG4gICAgICAgICAgICBub3RlVGl0bGVJbnB1dC5zZXRDdXN0b21WYWxpZGl0eSgnUGxlYXNlIGVudGVyIGEgdGl0bGUgZm9yIHlvdXIgbm90ZS4nKTtcclxuICAgICAgICAgICAgbm90ZVRpdGxlSW5wdXQucmVwb3J0VmFsaWRpdHkoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobm90ZURlc2NyaXB0aW9uSW5wdXQudmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIG5vdGVEZXNjcmlwdGlvbklucHV0LnNldEN1c3RvbVZhbGlkaXR5KCdQbGVhc2UgZW50ZXIgYSBkZXNjcmlwdGlvbiBmb3IgeW91ciBub3RlLicpO1xyXG4gICAgICAgICAgICBub3RlRGVzY3JpcHRpb25JbnB1dC5yZXBvcnRWYWxpZGl0eSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsZWFyVmFsaWRhdGlvbk1lc3NhZ2UoKSB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzKSB7XHJcbiAgICAgICAgICAgIGNhc2UgdGFza1RpdGxlSW5wdXQ6XHJcbiAgICAgICAgICAgIGNhc2UgdGFza0Rlc2NyaXB0aW9uSW5wdXQ6XHJcbiAgICAgICAgICAgIGNhc2UgdGFza0R1ZURhdGVJbnB1dDpcclxuICAgICAgICAgICAgY2FzZSB0YXNrUHJpb3JpdHlJbnB1dDpcclxuICAgICAgICAgICAgY2FzZSBlZGl0VGFza1RpdGxlSW5wdXQ6XHJcbiAgICAgICAgICAgIGNhc2UgZWRpdFRhc2tEZXNjcmlwdGlvbklucHV0OlxyXG4gICAgICAgICAgICBjYXNlIGVkaXRUYXNrRHVlRGF0ZUlucHV0OlxyXG4gICAgICAgICAgICBjYXNlIGVkaXRUYXNrUHJpb3JpdHlJbnB1dDpcclxuICAgICAgICAgICAgY2FzZSBwcm9qZWN0VGl0bGVJbnB1dDpcclxuICAgICAgICAgICAgY2FzZSBub3RlVGl0bGVJbnB1dDpcclxuICAgICAgICAgICAgY2FzZSBub3RlRGVzY3JpcHRpb25JbnB1dDpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q3VzdG9tVmFsaWRpdHkoJycpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHZhbGlkYXRlQ3JlYXRpb25UYXNrRm9ybSwgdmFsaWRhdGVFZGl0VGFza0Zvcm0sIHZhbGlkYXRlUHJvamVjdEZvcm0sIHZhbGlkYXRlTm90ZUZvcm0sIGNsZWFyVmFsaWRhdGlvbk1lc3NhZ2UgfTtcclxufTtcclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7IEltYWdlSGFuZGxlciB9IGZyb20gJy4vZG9tTWFuaXB1bGF0aW9uJztcclxuaW1wb3J0IHsgaGFuZGxlRXZlbnRMaXN0ZW5lcnMgfSBmcm9tICcuL2hhbmRsZUV2ZW50TGlzdGVuZXJzJztcclxuXHJcbmNvbnN0IGltYWdlSGFuZGxlciA9IEltYWdlSGFuZGxlcigpO1xyXG5cclxuaW1hZ2VIYW5kbGVyLmNyZWF0ZUltYWdlcygpO1xyXG5oYW5kbGVFdmVudExpc3RlbmVycygpO1xyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9