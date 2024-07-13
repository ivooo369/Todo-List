/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
      /*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js"
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js"
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          );
        // Imports

        var ___CSS_LOADER_EXPORT___ =
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          `* {
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0) !important;
  outline: none !important;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
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
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
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
  width: 100vw;
  height: calc(100% - 1rem);
  transition: 0.3s ease-in-out;
}

.page-active {
  display: flex;
}

.pages-full {
  width: 100vw;
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
  gap: 5rem;
  width: 25rem;
  padding: 5rem 0;
}

.hidden-menu {
  display: none;
}

.menu-titles {
  padding-bottom: 0.5rem;
  border-bottom: 3px double black;
}

.lists {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  word-wrap: break-word;
  gap: 0.9rem;
  padding: 1rem 0;
  margin-bottom: 1.5rem;
  border-radius: 0.5rem;
  overflow-y: auto;
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
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
}

.task-date {
  margin-right: 3rem;
  font-weight: bold;
}

.buttons-container {
  display: flex;
  gap: 0.5rem;
  margin-right: 1rem;
}

.no-tasks-image,
.no-notes-image {
  display: none;
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
  padding: 0 2rem;
}

.menu-buttons-container {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.5rem;
}

.menu-buttons,
#creation-button,
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

#creation-button {
  text-align: center;
  width: 75%;
  background-color: rgba(124, 124, 255, 0.5);
  align-self: center;
  border: none;
  border-radius: 1rem;
  font-size: 6rem;
  font-weight: bold;
  margin: auto;
  font-family: Arial, Helvetica, sans-serif;
  color: rgba(0, 0, 0, 0.75);
  box-shadow: inset 0 0 35px 5px rgba(0, 0, 0, 0.25),
    inset 0 2px 1px 1px rgba(255, 255, 255, 0.9),
    inset 0 -2px 1px rgba(0, 0, 0, 0.25);
}

footer {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  height: 2.5rem;
  position: fixed;
  bottom: 0;
  background-color: hsla(0, 0%, 0%, 0.75);
  color: #ffffff;
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
  height: 32rem;
}

#edit-window-main-section {
  gap: 1.6rem;
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
  background-color: #000000bf;
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

.textareas-titles,
.textareas-descriptions {
  font-size: 1rem;
}

#task-description-input,
#edit-task-description-input {
  height: 10rem;
}

#note-description-input {
  height: 12.7rem;
}

.creation-and-edit-windows-inputs-section {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
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
  gap: 0.5rem;
}

.menu-buttons:hover,
header i:hover,
.menu-button-active {
  background-color: #68686866;
}

footer i:hover {
  transform: rotate(360deg);
}

#creation-button:hover {
  background-color: #7c7cffd9;
}

.selection-buttons:hover,
.selection-button-active {
  background: #707070;
  color: #ffffff;
}

.creation-and-edit-windows-button:hover {
  background-color: #000000e6;
}

input[type="checkbox"]:hover {
  cursor: pointer;
}

#list-of-all-notes {
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}

.note-container {
  width: 20rem;
  height: 20rem;
  padding: 1rem;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  overflow-y: auto;
}

.note-title {
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 3px double;
}

.delete-note-button {
  margin-left: calc(100% - 1rem);
  font-weight: bold;
  border: none;
  font-size: 1.2rem;
  background-color: #ffffff;
}

@media (max-width: 880px) {
  .content {
    flex-direction: column;
  }
  .menu-container,
  .pages {
    width: auto;
    padding: 1rem 0;
    gap: 1rem;
  }
  .lists img {
    margin-bottom: 5rem;
  }
  .creation-and-edit-windows {
    width: 45rem;
  }
  #creation-task-form,
  #edit-task-form,
  #note-form {
    width: 40rem;
  }
}

@media (max-width: 720px) {
  .creation-and-edit-windows {
    width: 35rem;
    height: 38rem;
  }
  #creation-task-form,
  #edit-task-form,
  #note-form {
    width: 30rem;
  }
  #edit-task-window {
    height: 35rem;
  }
  .creation-and-edit-windows-button {
    width: 30%;
  }
  .creation-and-edit-windows-inputs-section {
    flex-direction: column;
    gap: 1rem;
  }
}

@media (max-width: 560px) {
  .title-container {
    font-size: 1rem;
  }
  .creation-and-edit-windows,
  #edit-task-window {
    width: 25rem;
  }
  #creation-task-form,
  #edit-task-form,
  #note-form {
    width: 20rem;
  }
  .creation-and-edit-windows-button {
    width: 50%;
  }
}

@media (max-width: 480px) {
  .title-container {
    font-size: 0.6rem;
  }
  .title-image {
    width: 2.5rem;
    height: 2.5rem;
  }
}

@media (max-width: 400px) {
  .creation-and-edit-windows {
    width: 20rem;
  }
  #edit-task-window {
    width: 20rem;
  }
  #creation-task-form,
  #edit-task-form,
  #note-form {
    width: 15rem;
    height: 25rem;
  }
  .creation-and-edit-windows-inputs-section {
    text-align: center;
    gap: 1rem;
  }
  .creation-and-edit-windows-button {
    width: 60%;
  }
  .creation-and-edit-windows-sections {
    flex-direction: column;
  }
}

@media (max-width: 380px) {
  .title-container {
    font-size: 0.5rem;
  }
  .title-image {
    width: 2rem;
    height: 2rem;
  }
  .header-buttons {
    font-size: 0.8rem;
    gap: 0;
  }
}

@media (max-height: 800px) {
  .content {
    height: 46rem;
  }
}

@media (max-width: 1000px) and (max-height: 560px) {
  #creation-task-window {
    height: 23rem;
  }
  #task-description-input,
  #edit-task-description-input {
    height: 2.5rem;
  }
  #creation-task-window {
    height: 23rem;
  }
  #edit-task-window {
    height: 20rem;
  }
  #edit-window-main-section {
    gap: 0.8rem;
  }
  .creation-and-edit-windows-header {
    padding: 0.8rem;
  }
  .creation-and-edit-windows-main-section,
  .creation-and-edit-windows-forms {
    justify-content: start;
    gap: 0.5rem;
  }
  .selection-buttons {
    height: 2rem;
    font-size: 1rem;
  }
  .selection-section {
    padding: 0 0 0.7rem 0;
  }
  .textareas-titles {
    font-size: 1rem;
  }
  .creation-and-edit-windows-button {
    height: 2rem;
  }
  #task-description-input {
    height: 5.2rem;
  }
  #edit-task-description-input {
    height: 4.5rem;
  }
  #note-description-input {
    height: 7.4rem;
  }
  .creation-and-edit-windows-title,
  #creation-window-close-button,
  #edit-window-close-button {
    font-size: 1.2rem;
  }
}
`,
          "",
          {
            version: 3,
            sources: ["webpack://./src/style.css"],
            names: [],
            mappings:
              "AAAA;EACE,8DAA8D;EAC9D,wBAAwB;EACxB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE;sDACoD;EACpD,aAAa;EACb,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,8BAA8B;EAC9B,iBAAiB;AACnB;;AAEA;;EAEE,eAAe;EACf;sDACoD;AACtD;;AAEA;EACE,4CAA4C;AAC9C;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,gCAAgC;AAClC;;AAEA;EACE,aAAa;EACb,WAAW;EACX,eAAe;EACf,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,yBAAyB;EACzB,YAAY;EACZ,yBAAyB;EACzB,4BAA4B;AAC9B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,qBAAqB;EACrB,eAAe;EACf,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,sBAAsB;EACtB,+BAA+B;AACjC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,YAAY;EACZ,qBAAqB;EACrB,WAAW;EACX,eAAe;EACf,qBAAqB;EACrB,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,qBAAqB;EACrB,wBAAwB;EACxB,2BAA2B;EAC3B,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,qBAAqB;EACrB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,WAAW;EACX,kBAAkB;AACpB;;AAEA;;EAEE,aAAa;EACb,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,WAAW;AACb;;AAEA;;;EAGE,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;EACT,oBAAoB;EACpB,WAAW;EACX,YAAY;EACZ,qBAAqB;EACrB,iBAAiB;EACjB,eAAe;EACf,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,0CAA0C;EAC1C,kBAAkB;EAClB,YAAY;EACZ,mBAAmB;EACnB,eAAe;EACf,iBAAiB;EACjB,YAAY;EACZ,yCAAyC;EACzC,0BAA0B;EAC1B;;wCAEsC;AACxC;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,cAAc;EACd,eAAe;EACf,SAAS;EACT,uCAAuC;EACvC,cAAc;EACd,WAAW;EACX,iBAAiB;EACjB,2BAA2B;AAC7B;;AAEA;EACE,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,2BAA2B;EAC3B,0BAA0B;EAC1B,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,yBAAyB;EACzB,QAAQ;EACR,SAAS;EACT,yCAAyC;EACzC,4BAA4B;EAC5B,yBAAyB;EACzB,gCAAgC;EAChC,oBAAoB;EACpB,kBAAkB;EAClB,iDAAiD;EACjD,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,mBAAmB;EACnB,yCAAyC;AAC3C;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,4BAA4B;EAC5B,6BAA6B;EAC7B,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,SAAS;EACT,sBAAsB;EACtB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,SAAS;EACT,mBAAmB;EACnB,+BAA+B;AACjC;;AAEA;EACE,WAAW;EACX,cAAc;EACd,YAAY;EACZ,qBAAqB;EACrB,iBAAiB;EACjB,iBAAiB;EACjB,4BAA4B;EAC5B,4CAA4C;AAC9C;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,qBAAqB;EACrB,4CAA4C;AAC9C;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,YAAY;EACZ,qBAAqB;EACrB,0BAA0B;EAC1B,eAAe;EACf,iBAAiB;EACjB,2BAA2B;EAC3B,cAAc;EACd,4BAA4B;EAC5B,4CAA4C;AAC9C;;AAEA;EACE,oBAAoB;EACpB,iBAAiB;EACjB,0BAA0B;EAC1B,eAAe;AACjB;;AAEA;;EAEE,eAAe;AACjB;;AAEA;;EAEE,aAAa;AACf;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;;AAEA;;EAEE,eAAe;EACf,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,qBAAqB;EACrB,iBAAiB;EACjB,4CAA4C;AAC9C;;AAEA;EACE,aAAa;EACb,WAAW;AACb;;AAEA;;;EAGE,2BAA2B;AAC7B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;;EAEE,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,yBAAyB;EACzB,mDAAmD;EACnD,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;EACnB,sBAAsB;EACtB,yBAAyB;AAC3B;;AAEA;EACE,8BAA8B;EAC9B,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;EACjB,yBAAyB;AAC3B;;AAEA;EACE;IACE,sBAAsB;EACxB;EACA;;IAEE,WAAW;IACX,eAAe;IACf,SAAS;EACX;EACA;IACE,mBAAmB;EACrB;EACA;IACE,YAAY;EACd;EACA;;;IAGE,YAAY;EACd;AACF;;AAEA;EACE;IACE,YAAY;IACZ,aAAa;EACf;EACA;;;IAGE,YAAY;EACd;EACA;IACE,aAAa;EACf;EACA;IACE,UAAU;EACZ;EACA;IACE,sBAAsB;IACtB,SAAS;EACX;AACF;;AAEA;EACE;IACE,eAAe;EACjB;EACA;;IAEE,YAAY;EACd;EACA;;;IAGE,YAAY;EACd;EACA;IACE,UAAU;EACZ;AACF;;AAEA;EACE;IACE,iBAAiB;EACnB;EACA;IACE,aAAa;IACb,cAAc;EAChB;AACF;;AAEA;EACE;IACE,YAAY;EACd;EACA;IACE,YAAY;EACd;EACA;;;IAGE,YAAY;IACZ,aAAa;EACf;EACA;IACE,kBAAkB;IAClB,SAAS;EACX;EACA;IACE,UAAU;EACZ;EACA;IACE,sBAAsB;EACxB;AACF;;AAEA;EACE;IACE,iBAAiB;EACnB;EACA;IACE,WAAW;IACX,YAAY;EACd;EACA;IACE,iBAAiB;IACjB,MAAM;EACR;AACF;;AAEA;EACE;IACE,aAAa;EACf;AACF;;AAEA;EACE;IACE,aAAa;EACf;EACA;;IAEE,cAAc;EAChB;EACA;IACE,aAAa;EACf;EACA;IACE,aAAa;EACf;EACA;IACE,WAAW;EACb;EACA;IACE,eAAe;EACjB;EACA;;IAEE,sBAAsB;IACtB,WAAW;EACb;EACA;IACE,YAAY;IACZ,eAAe;EACjB;EACA;IACE,qBAAqB;EACvB;EACA;IACE,eAAe;EACjB;EACA;IACE,YAAY;EACd;EACA;IACE,cAAc;EAChB;EACA;IACE,cAAc;EAChB;EACA;IACE,cAAc;EAChB;EACA;;;IAGE,iBAAiB;EACnB;AACF",
            sourcesContent: [
              '* {\r\n  -webkit-tap-highlight-color: rgba(255, 255, 255, 0) !important;\r\n  outline: none !important;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",\r\n    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;\r\n  height: 100vh;\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n.content {\r\n  display: flex;\r\n  height: calc(100vh - 7.7rem);\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 0.5rem;\r\n  border-bottom: 1px solid black;\r\n  font-size: 1.5rem;\r\n}\r\n\r\nbutton,\r\ni {\r\n  cursor: pointer;\r\n  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",\r\n    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;\r\n}\r\n\r\n.title {\r\n  text-shadow: 0px 0px 15px rgba(0, 0, 0, 0.6);\r\n}\r\n\r\n.title-container {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.title-image {\r\n  width: 3rem;\r\n  height: 3rem;\r\n  border-radius: 50%;\r\n  box-shadow: 0 0 15px 3px #000000;\r\n}\r\n\r\n.header-buttons {\r\n  display: flex;\r\n  gap: 0.5rem;\r\n  font-size: 1rem;\r\n  padding: 0.5rem;\r\n  margin-right: auto;\r\n}\r\n\r\n.title-container {\r\n  position: absolute;\r\n}\r\n\r\n.pages {\r\n  display: none;\r\n  flex-direction: column;\r\n  padding: 1rem 1.5rem 0 1.5rem;\r\n  background-color: #dcdcdc;\r\n  width: 100vw;\r\n  height: calc(100% - 1rem);\r\n  transition: 0.3s ease-in-out;\r\n}\r\n\r\n.page-active {\r\n  display: flex;\r\n}\r\n\r\n.pages-full {\r\n  width: 100vw;\r\n}\r\n\r\n.page-titles {\r\n  font-size: 2rem;\r\n  text-align: center;\r\n  border-radius: 0.5rem;\r\n  padding: 0.5rem;\r\n  background-color: #80808066;\r\n}\r\n\r\n.menu-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 5rem;\r\n  width: 25rem;\r\n  padding: 5rem 0;\r\n}\r\n\r\n.hidden-menu {\r\n  display: none;\r\n}\r\n\r\n.menu-titles {\r\n  padding-bottom: 0.5rem;\r\n  border-bottom: 3px double black;\r\n}\r\n\r\n.lists {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  height: 100%;\r\n  word-wrap: break-word;\r\n  gap: 0.9rem;\r\n  padding: 1rem 0;\r\n  margin-bottom: 1.5rem;\r\n  border-radius: 0.5rem;\r\n  overflow-y: auto;\r\n}\r\n\r\n.task-container {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 0.5rem 0;\r\n  border-radius: 0.5rem;\r\n  width: calc(100% - 10px);\r\n  background-color: #80808066;\r\n  border-left: 10px solid;\r\n}\r\n\r\n.task-data-container {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.task-status-checkbox {\r\n  width: 1rem;\r\n  height: 1rem;\r\n  border-radius: 0.5rem;\r\n  margin: auto 1rem;\r\n}\r\n\r\n.task-title {\r\n  margin-right: auto;\r\n  display: block;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  max-width: 100%;\r\n}\r\n\r\n.task-date {\r\n  margin-right: 3rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.buttons-container {\r\n  display: flex;\r\n  gap: 0.5rem;\r\n  margin-right: 1rem;\r\n}\r\n\r\n.no-tasks-image,\r\n.no-notes-image {\r\n  display: none;\r\n  opacity: 0.5;\r\n  margin: auto;\r\n}\r\n\r\n.image-active {\r\n  display: block;\r\n}\r\n\r\n.sections {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1.5rem;\r\n  padding: 0 2rem;\r\n}\r\n\r\n.menu-buttons-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: start;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.menu-buttons,\r\n#creation-button,\r\ni {\r\n  transition: 0.3s ease-in-out;\r\n}\r\n\r\n.menu-buttons {\r\n  display: flex;\r\n  justify-content: start;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  padding: 0.5rem 1rem;\r\n  width: 100%;\r\n  border: none;\r\n  border-radius: 0.5rem;\r\n  font-weight: bold;\r\n  font-size: 1rem;\r\n  background-color: #d7d7d7;\r\n  white-space: nowrap;\r\n}\r\n\r\n.menu-buttons .fas {\r\n  width: 2.5rem;\r\n}\r\n\r\n#creation-button {\r\n  text-align: center;\r\n  width: 75%;\r\n  background-color: rgba(124, 124, 255, 0.5);\r\n  align-self: center;\r\n  border: none;\r\n  border-radius: 1rem;\r\n  font-size: 6rem;\r\n  font-weight: bold;\r\n  margin: auto;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  color: rgba(0, 0, 0, 0.75);\r\n  box-shadow: inset 0 0 35px 5px rgba(0, 0, 0, 0.25),\r\n    inset 0 2px 1px 1px rgba(255, 255, 255, 0.9),\r\n    inset 0 -2px 1px rgba(0, 0, 0, 0.25);\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n  height: 2.5rem;\r\n  position: fixed;\r\n  bottom: 0;\r\n  background-color: hsla(0, 0%, 0%, 0.75);\r\n  color: #ffffff;\r\n  width: 100%;\r\n  font-weight: bold;\r\n  border-top: 1px solid black;\r\n}\r\n\r\n.github-link {\r\n  color: inherit;\r\n  text-decoration: none;\r\n}\r\n\r\nheader i {\r\n  border-radius: 0.5rem;\r\n  padding: 0.3rem;\r\n}\r\n\r\n.overlay {\r\n  display: none;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: #00000080;\r\n  backdrop-filter: blur(8px);\r\n  z-index: 9998;\r\n}\r\n\r\n.overlay-active {\r\n  display: block;\r\n}\r\n\r\n.creation-and-edit-windows {\r\n  display: flex;\r\n  flex-direction: column;\r\n  border: none;\r\n  border-radius: 1rem;\r\n  width: 55rem;\r\n  height: 35rem;\r\n  background-color: #d3d3d3;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%) scale(0);\r\n  transition: 0.3s ease-in-out;\r\n  transition-duration: 0.3s;\r\n  transition-timing-function: ease;\r\n  transition-delay: 0s;\r\n  position: absolute;\r\n  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;\r\n  z-index: 9999;\r\n}\r\n\r\n#edit-task-window {\r\n  height: 32rem;\r\n}\r\n\r\n#edit-window-main-section {\r\n  gap: 1.6rem;\r\n}\r\n\r\n#edit-window-main-section {\r\n  margin: 0;\r\n}\r\n\r\n#edit-task-form {\r\n  margin: auto;\r\n}\r\n\r\n.open-window {\r\n  visibility: visible;\r\n  transform: translate(-50%, -50%) scale(1);\r\n}\r\n\r\n.creation-and-edit-windows-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  background: #aaaaff;\r\n  border-top-left-radius: 1rem;\r\n  border-top-right-radius: 1rem;\r\n  padding: 1.5rem;\r\n}\r\n\r\n.creation-and-edit-windows-title {\r\n  font-size: 1.8rem;\r\n}\r\n\r\n.creation-and-edit-windows-main-section {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  gap: 1rem;\r\n  flex-direction: column;\r\n  margin: auto;\r\n  height: 80%;\r\n}\r\n\r\n.selection-section {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  gap: 1rem;\r\n  padding: 0 0 1rem 0;\r\n  border-bottom: 3px double black;\r\n}\r\n\r\n.selection-buttons {\r\n  width: 100%;\r\n  height: 2.5rem;\r\n  border: none;\r\n  border-radius: 0.5rem;\r\n  font-size: 1.2rem;\r\n  font-weight: bold;\r\n  transition: 0.3s ease-in-out;\r\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\r\n}\r\n\r\n.creation-and-edit-windows-forms {\r\n  display: none;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  width: 50rem;\r\n}\r\n\r\n.form-active {\r\n  display: flex;\r\n}\r\n\r\n.creation-and-edit-windows-textareas {\r\n  resize: none;\r\n  padding: 0.5rem;\r\n}\r\n\r\ntextarea {\r\n  border: none;\r\n  border-radius: 0.5rem;\r\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\r\n}\r\n\r\n.creation-and-edit-windows-button {\r\n  width: 25%;\r\n  height: 3rem;\r\n  border: none;\r\n  border-radius: 0.5rem;\r\n  margin: 0.5rem auto 0 auto;\r\n  font-size: 1rem;\r\n  font-weight: bold;\r\n  background-color: #000000bf;\r\n  color: #ffffff;\r\n  transition: 0.3s ease-in-out;\r\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\r\n}\r\n\r\n.creation-and-edit-windows label {\r\n  margin-right: 0.3rem;\r\n  font-weight: bold;\r\n  margin: auto 0.3rem auto 0;\r\n  font-size: 1rem;\r\n}\r\n\r\n.textareas-titles,\r\n.textareas-descriptions {\r\n  font-size: 1rem;\r\n}\r\n\r\n#task-description-input,\r\n#edit-task-description-input {\r\n  height: 10rem;\r\n}\r\n\r\n#note-description-input {\r\n  height: 12.7rem;\r\n}\r\n\r\n.creation-and-edit-windows-inputs-section {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 2rem;\r\n}\r\n\r\n.creation-and-edit-windows-inputs-section input,\r\nselect {\r\n  cursor: pointer;\r\n  width: 10rem;\r\n  padding: 0.3rem;\r\n  border: none;\r\n  border-radius: 0.3rem;\r\n  font-weight: bold;\r\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\r\n}\r\n\r\n.creation-and-edit-windows-sections {\r\n  display: flex;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.menu-buttons:hover,\r\nheader i:hover,\r\n.menu-button-active {\r\n  background-color: #68686866;\r\n}\r\n\r\nfooter i:hover {\r\n  transform: rotate(360deg);\r\n}\r\n\r\n#creation-button:hover {\r\n  background-color: #7c7cffd9;\r\n}\r\n\r\n.selection-buttons:hover,\r\n.selection-button-active {\r\n  background: #707070;\r\n  color: #ffffff;\r\n}\r\n\r\n.creation-and-edit-windows-button:hover {\r\n  background-color: #000000e6;\r\n}\r\n\r\ninput[type="checkbox"]:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n#list-of-all-notes {\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.note-container {\r\n  width: 20rem;\r\n  height: 20rem;\r\n  padding: 1rem;\r\n  border-radius: 10px;\r\n  background-color: #ffffff;\r\n  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\r\n  overflow-y: auto;\r\n}\r\n\r\n.note-title {\r\n  text-align: center;\r\n  font-size: 1.5rem;\r\n  margin-bottom: 1rem;\r\n  padding-bottom: 0.5rem;\r\n  border-bottom: 3px double;\r\n}\r\n\r\n.delete-note-button {\r\n  margin-left: calc(100% - 1rem);\r\n  font-weight: bold;\r\n  border: none;\r\n  font-size: 1.2rem;\r\n  background-color: #ffffff;\r\n}\r\n\r\n@media (max-width: 880px) {\r\n  .content {\r\n    flex-direction: column;\r\n  }\r\n  .menu-container,\r\n  .pages {\r\n    width: auto;\r\n    padding: 1rem 0;\r\n    gap: 1rem;\r\n  }\r\n  .lists img {\r\n    margin-bottom: 5rem;\r\n  }\r\n  .creation-and-edit-windows {\r\n    width: 45rem;\r\n  }\r\n  #creation-task-form,\r\n  #edit-task-form,\r\n  #note-form {\r\n    width: 40rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 720px) {\r\n  .creation-and-edit-windows {\r\n    width: 35rem;\r\n    height: 38rem;\r\n  }\r\n  #creation-task-form,\r\n  #edit-task-form,\r\n  #note-form {\r\n    width: 30rem;\r\n  }\r\n  #edit-task-window {\r\n    height: 35rem;\r\n  }\r\n  .creation-and-edit-windows-button {\r\n    width: 30%;\r\n  }\r\n  .creation-and-edit-windows-inputs-section {\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 560px) {\r\n  .title-container {\r\n    font-size: 1rem;\r\n  }\r\n  .creation-and-edit-windows,\r\n  #edit-task-window {\r\n    width: 25rem;\r\n  }\r\n  #creation-task-form,\r\n  #edit-task-form,\r\n  #note-form {\r\n    width: 20rem;\r\n  }\r\n  .creation-and-edit-windows-button {\r\n    width: 50%;\r\n  }\r\n}\r\n\r\n@media (max-width: 480px) {\r\n  .title-container {\r\n    font-size: 0.6rem;\r\n  }\r\n  .title-image {\r\n    width: 2.5rem;\r\n    height: 2.5rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 400px) {\r\n  .creation-and-edit-windows {\r\n    width: 20rem;\r\n  }\r\n  #edit-task-window {\r\n    width: 20rem;\r\n  }\r\n  #creation-task-form,\r\n  #edit-task-form,\r\n  #note-form {\r\n    width: 15rem;\r\n    height: 25rem;\r\n  }\r\n  .creation-and-edit-windows-inputs-section {\r\n    text-align: center;\r\n    gap: 1rem;\r\n  }\r\n  .creation-and-edit-windows-button {\r\n    width: 60%;\r\n  }\r\n  .creation-and-edit-windows-sections {\r\n    flex-direction: column;\r\n  }\r\n}\r\n\r\n@media (max-width: 380px) {\r\n  .title-container {\r\n    font-size: 0.5rem;\r\n  }\r\n  .title-image {\r\n    width: 2rem;\r\n    height: 2rem;\r\n  }\r\n  .header-buttons {\r\n    font-size: 0.8rem;\r\n    gap: 0;\r\n  }\r\n}\r\n\r\n@media (max-height: 800px) {\r\n  .content {\r\n    height: 46rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 1000px) and (max-height: 560px) {\r\n  #creation-task-window {\r\n    height: 23rem;\r\n  }\r\n  #task-description-input,\r\n  #edit-task-description-input {\r\n    height: 2.5rem;\r\n  }\r\n  #creation-task-window {\r\n    height: 23rem;\r\n  }\r\n  #edit-task-window {\r\n    height: 20rem;\r\n  }\r\n  #edit-window-main-section {\r\n    gap: 0.8rem;\r\n  }\r\n  .creation-and-edit-windows-header {\r\n    padding: 0.8rem;\r\n  }\r\n  .creation-and-edit-windows-main-section,\r\n  .creation-and-edit-windows-forms {\r\n    justify-content: start;\r\n    gap: 0.5rem;\r\n  }\r\n  .selection-buttons {\r\n    height: 2rem;\r\n    font-size: 1rem;\r\n  }\r\n  .selection-section {\r\n    padding: 0 0 0.7rem 0;\r\n  }\r\n  .textareas-titles {\r\n    font-size: 1rem;\r\n  }\r\n  .creation-and-edit-windows-button {\r\n    height: 2rem;\r\n  }\r\n  #task-description-input {\r\n    height: 5.2rem;\r\n  }\r\n  #edit-task-description-input {\r\n    height: 4.5rem;\r\n  }\r\n  #note-description-input {\r\n    height: 7.4rem;\r\n  }\r\n  .creation-and-edit-windows-title,\r\n  #creation-window-close-button,\r\n  #edit-window-close-button {\r\n    font-size: 1.2rem;\r\n  }\r\n}\r\n',
            ],
            sourceRoot: "",
          },
        ]);
        // Exports
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ___CSS_LOADER_EXPORT___;

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/api.js":
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      /***/ (module) => {
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
                content += "@layer".concat(
                  item[5].length > 0 ? " ".concat(item[5]) : "",
                  " {"
                );
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
                  item[1] = "@layer"
                    .concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {")
                    .concat(item[1], "}");
                  item[5] = layer;
                }
              }
              if (media) {
                if (!item[2]) {
                  item[2] = media;
                } else {
                  item[1] = "@media "
                    .concat(item[2], " {")
                    .concat(item[1], "}");
                  item[2] = media;
                }
              }
              if (supports) {
                if (!item[4]) {
                  item[4] = "".concat(supports);
                } else {
                  item[1] = "@supports ("
                    .concat(item[4], ") {")
                    .concat(item[1], "}");
                  item[4] = supports;
                }
              }
              list.push(item);
            }
          };
          return list;
        };

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
      /*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
      /***/ (module) => {
        module.exports = function (item) {
          var content = item[1];
          var cssMapping = item[3];
          if (!cssMapping) {
            return content;
          }
          if (typeof btoa === "function") {
            var base64 = btoa(
              unescape(encodeURIComponent(JSON.stringify(cssMapping)))
            );
            var data =
              "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                base64
              );
            var sourceMapping = "/*# ".concat(data, " */");
            return [content].concat([sourceMapping]).join("\n");
          }
          return [content].join("\n");
        };

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
      /*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ addLeadingZeros,
          /* harmony export */
        });
        function addLeadingZeros(number, targetLength) {
          var sign = number < 0 ? "-" : "";
          var output = Math.abs(number).toString();
          while (output.length < targetLength) {
            output = "0" + output;
          }
          return sign + output;
        }

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/assign/index.js":
      /*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/assign/index.js ***!
  \********************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ assign,
          /* harmony export */
        });
        function assign(target, object) {
          if (target == null) {
            throw new TypeError(
              "assign requires that input parameter not be null or undefined"
            );
          }
          for (var property in object) {
            if (Object.prototype.hasOwnProperty.call(object, property)) {
              target[property] = object[property];
            }
          }
          return target;
        }

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js":
      /*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultLocale/index.js ***!
  \***************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js"
          );

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__["default"];

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
      /*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ getDefaultOptions: () =>
            /* binding */ getDefaultOptions,
          /* harmony export */ setDefaultOptions: () =>
            /* binding */ setDefaultOptions,
          /* harmony export */
        });
        var defaultOptions = {};
        function getDefaultOptions() {
          return defaultOptions;
        }
        function setDefaultOptions(newOptions) {
          defaultOptions = newOptions;
        }

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
      /*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../../../_lib/getUTCDayOfYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js"
          );
        /* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ../../../_lib/getUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js"
          );
        /* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../../../_lib/getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js"
          );
        /* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../../../_lib/getUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js"
          );
        /* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js"
          );
        /* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js"
          );
        /* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../lightFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js"
          );

        var dayPeriodEnum = {
          am: "am",
          pm: "pm",
          midnight: "midnight",
          noon: "noon",
          morning: "morning",
          afternoon: "afternoon",
          evening: "evening",
          night: "night",
        };
        /*
         * |     | Unit                           |     | Unit                           |
         * |-----|--------------------------------|-----|--------------------------------|
         * |  a  | AM, PM                         |  A* | Milliseconds in day            |
         * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
         * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
         * |  d  | Day of month                   |  D  | Day of year                    |
         * |  e  | Local day of week              |  E  | Day of week                    |
         * |  f  |                                |  F* | Day of week in month           |
         * |  g* | Modified Julian day            |  G  | Era                            |
         * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
         * |  i! | ISO day of week                |  I! | ISO week of year               |
         * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
         * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
         * |  l* | (deprecated)                   |  L  | Stand-alone month              |
         * |  m  | Minute                         |  M  | Month                          |
         * |  n  |                                |  N  |                                |
         * |  o! | Ordinal number modifier        |  O  | currentTimeZone (GMT)                 |
         * |  p! | Long localized time            |  P! | Long localized date            |
         * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
         * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
         * |  s  | Second                         |  S  | Fraction of second             |
         * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
         * |  u  | Extended year                  |  U* | Cyclic year                    |
         * |  v* | currentTimeZone (generic non-locat.)  |  V* | currentTimeZone (location)            |
         * |  w  | Local week of year             |  W* | Week of month                  |
         * |  x  | currentTimeZone (ISO-8601 w/o Z)      |  X  | currentTimeZone (ISO-8601)            |
         * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
         * |  z  | currentTimeZone (specific non-locat.) |  Z* | currentTimeZone (aliases)             |
         *
         * Letters marked by * are not implemented but reserved by Unicode standard.
         *
         * Letters marked by ! are non-standard, but implemented by date-fns:
         * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
         * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
         *   i.e. 7 for Sunday, 1 for Monday, etc.
         * - `I` is ISO week of year, as opposed to `w` which is local week of year.
         * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
         *   `R` is supposed to be used in conjunction with `I` and `i`
         *   for universal ISO week-numbering date, whereas
         *   `Y` is supposed to be used in conjunction with `w` and `e`
         *   for week-numbering date specific to the locale.
         * - `P` is long localized date format
         * - `p` is long localized time format
         */

        var formatters = {
          // Era
          G: function G(date, token, localize) {
            var era = date.getUTCFullYear() > 0 ? 1 : 0;
            switch (token) {
              // AD, BC
              case "G":
              case "GG":
              case "GGG":
                return localize.era(era, {
                  width: "abbreviated",
                });
              // A, B
              case "GGGGG":
                return localize.era(era, {
                  width: "narrow",
                });
              // Anno Domini, Before Christ
              case "GGGG":
              default:
                return localize.era(era, {
                  width: "wide",
                });
            }
          },
          // Year
          y: function y(date, token, localize) {
            // Ordinal number
            if (token === "yo") {
              var signedYear = date.getUTCFullYear();
              // Returns 1 for 1 BC (which is year 0 in JavaScript)
              var year = signedYear > 0 ? signedYear : 1 - signedYear;
              return localize.ordinalNumber(year, {
                unit: "year",
              });
            }
            return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ].y(date, token);
          },
          // Local week-numbering year
          Y: function Y(date, token, localize, options) {
            var signedWeekYear = (0,
            _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__[
              "default"
            ])(date, options);
            // Returns 1 for 1 BC (which is year 0 in JavaScript)
            var weekYear =
              signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;

            // Two digit year
            if (token === "YY") {
              var twoDigitYear = weekYear % 100;
              return (0,
              _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(twoDigitYear, 2);
            }

            // Ordinal number
            if (token === "Yo") {
              return localize.ordinalNumber(weekYear, {
                unit: "year",
              });
            }

            // Padding
            return (0,
            _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
              weekYear,
              token.length
            );
          },
          // ISO week-numbering year
          R: function R(date, token) {
            var isoWeekYear = (0,
            _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__[
              "default"
            ])(date);

            // Padding
            return (0,
            _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
              isoWeekYear,
              token.length
            );
          },
          // Extended year. This is a single number designating the year of this calendar system.
          // The main difference between `y` and `u` localizers are B.C. years:
          // | Year | `y` | `u` |
          // |------|-----|-----|
          // | AC 1 |   1 |   1 |
          // | BC 1 |   1 |   0 |
          // | BC 2 |   2 |  -1 |
          // Also `yy` always returns the last two digits of a year,
          // while `uu` pads single digit years to 2 characters and returns other years unchanged.
          u: function u(date, token) {
            var year = date.getUTCFullYear();
            return (0,
            _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
              year,
              token.length
            );
          },
          // Quarter
          Q: function Q(date, token, localize) {
            var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
            switch (token) {
              // 1, 2, 3, 4
              case "Q":
                return String(quarter);
              // 01, 02, 03, 04
              case "QQ":
                return (0,
                _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__[
                  "default"
                ])(quarter, 2);
              // 1st, 2nd, 3rd, 4th
              case "Qo":
                return localize.ordinalNumber(quarter, {
                  unit: "quarter",
                });
              // Q1, Q2, Q3, Q4
              case "QQQ":
                return localize.quarter(quarter, {
                  width: "abbreviated",
                  context: "formatting",
                });
              // 1, 2, 3, 4 (narrow quarter; could be not numerical)
              case "QQQQQ":
                return localize.quarter(quarter, {
                  width: "narrow",
                  context: "formatting",
                });
              // 1st quarter, 2nd quarter, ...
              case "QQQQ":
              default:
                return localize.quarter(quarter, {
                  width: "wide",
                  context: "formatting",
                });
            }
          },
          // Stand-alone quarter
          q: function q(date, token, localize) {
            var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
            switch (token) {
              // 1, 2, 3, 4
              case "q":
                return String(quarter);
              // 01, 02, 03, 04
              case "qq":
                return (0,
                _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__[
                  "default"
                ])(quarter, 2);
              // 1st, 2nd, 3rd, 4th
              case "qo":
                return localize.ordinalNumber(quarter, {
                  unit: "quarter",
                });
              // Q1, Q2, Q3, Q4
              case "qqq":
                return localize.quarter(quarter, {
                  width: "abbreviated",
                  context: "standalone",
                });
              // 1, 2, 3, 4 (narrow quarter; could be not numerical)
              case "qqqqq":
                return localize.quarter(quarter, {
                  width: "narrow",
                  context: "standalone",
                });
              // 1st quarter, 2nd quarter, ...
              case "qqqq":
              default:
                return localize.quarter(quarter, {
                  width: "wide",
                  context: "standalone",
                });
            }
          },
          // Month
          M: function M(date, token, localize) {
            var month = date.getUTCMonth();
            switch (token) {
              case "M":
              case "MM":
                return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__[
                  "default"
                ].M(date, token);
              // 1st, 2nd, ..., 12th
              case "Mo":
                return localize.ordinalNumber(month + 1, {
                  unit: "month",
                });
              // Jan, Feb, ..., Dec
              case "MMM":
                return localize.month(month, {
                  width: "abbreviated",
                  context: "formatting",
                });
              // J, F, ..., D
              case "MMMMM":
                return localize.month(month, {
                  width: "narrow",
                  context: "formatting",
                });
              // January, February, ..., December
              case "MMMM":
              default:
                return localize.month(month, {
                  width: "wide",
                  context: "formatting",
                });
            }
          },
          // Stand-alone month
          L: function L(date, token, localize) {
            var month = date.getUTCMonth();
            switch (token) {
              // 1, 2, ..., 12
              case "L":
                return String(month + 1);
              // 01, 02, ..., 12
              case "LL":
                return (0,
                _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__[
                  "default"
                ])(month + 1, 2);
              // 1st, 2nd, ..., 12th
              case "Lo":
                return localize.ordinalNumber(month + 1, {
                  unit: "month",
                });
              // Jan, Feb, ..., Dec
              case "LLL":
                return localize.month(month, {
                  width: "abbreviated",
                  context: "standalone",
                });
              // J, F, ..., D
              case "LLLLL":
                return localize.month(month, {
                  width: "narrow",
                  context: "standalone",
                });
              // January, February, ..., December
              case "LLLL":
              default:
                return localize.month(month, {
                  width: "wide",
                  context: "standalone",
                });
            }
          },
          // Local week of year
          w: function w(date, token, localize, options) {
            var week = (0,
            _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
              date,
              options
            );
            if (token === "wo") {
              return localize.ordinalNumber(week, {
                unit: "week",
              });
            }
            return (0,
            _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
              week,
              token.length
            );
          },
          // ISO week of year
          I: function I(date, token, localize) {
            var isoWeek = (0,
            _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(date);
            if (token === "Io") {
              return localize.ordinalNumber(isoWeek, {
                unit: "week",
              });
            }
            return (0,
            _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
              isoWeek,
              token.length
            );
          },
          // Day of the month
          d: function d(date, token, localize) {
            if (token === "do") {
              return localize.ordinalNumber(date.getUTCDate(), {
                unit: "date",
              });
            }
            return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ].d(date, token);
          },
          // Day of year
          D: function D(date, token, localize) {
            var dayOfYear = (0,
            _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__[
              "default"
            ])(date);
            if (token === "Do") {
              return localize.ordinalNumber(dayOfYear, {
                unit: "dayOfYear",
              });
            }
            return (0,
            _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
              dayOfYear,
              token.length
            );
          },
          // Day of week
          E: function E(date, token, localize) {
            var dayOfWeek = date.getUTCDay();
            switch (token) {
              // Tue
              case "E":
              case "EE":
              case "EEE":
                return localize.day(dayOfWeek, {
                  width: "abbreviated",
                  context: "formatting",
                });
              // T
              case "EEEEE":
                return localize.day(dayOfWeek, {
                  width: "narrow",
                  context: "formatting",
                });
              // Tu
              case "EEEEEE":
                return localize.day(dayOfWeek, {
                  width: "short",
                  context: "formatting",
                });
              // Tuesday
              case "EEEE":
              default:
                return localize.day(dayOfWeek, {
                  width: "wide",
                  context: "formatting",
                });
            }
          },
          // Local day of week
          e: function e(date, token, localize, options) {
            var dayOfWeek = date.getUTCDay();
            var localDayOfWeek =
              (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
            switch (token) {
              // Numerical value (Nth day of week with current locale or weekStartsOn)
              case "e":
                return String(localDayOfWeek);
              // Padded numerical value
              case "ee":
                return (0,
                _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__[
                  "default"
                ])(localDayOfWeek, 2);
              // 1st, 2nd, ..., 7th
              case "eo":
                return localize.ordinalNumber(localDayOfWeek, {
                  unit: "day",
                });
              case "eee":
                return localize.day(dayOfWeek, {
                  width: "abbreviated",
                  context: "formatting",
                });
              // T
              case "eeeee":
                return localize.day(dayOfWeek, {
                  width: "narrow",
                  context: "formatting",
                });
              // Tu
              case "eeeeee":
                return localize.day(dayOfWeek, {
                  width: "short",
                  context: "formatting",
                });
              // Tuesday
              case "eeee":
              default:
                return localize.day(dayOfWeek, {
                  width: "wide",
                  context: "formatting",
                });
            }
          },
          // Stand-alone local day of week
          c: function c(date, token, localize, options) {
            var dayOfWeek = date.getUTCDay();
            var localDayOfWeek =
              (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
            switch (token) {
              // Numerical value (same as in `e`)
              case "c":
                return String(localDayOfWeek);
              // Padded numerical value
              case "cc":
                return (0,
                _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__[
                  "default"
                ])(localDayOfWeek, token.length);
              // 1st, 2nd, ..., 7th
              case "co":
                return localize.ordinalNumber(localDayOfWeek, {
                  unit: "day",
                });
              case "ccc":
                return localize.day(dayOfWeek, {
                  width: "abbreviated",
                  context: "standalone",
                });
              // T
              case "ccccc":
                return localize.day(dayOfWeek, {
                  width: "narrow",
                  context: "standalone",
                });
              // Tu
              case "cccccc":
                return localize.day(dayOfWeek, {
                  width: "short",
                  context: "standalone",
                });
              // Tuesday
              case "cccc":
              default:
                return localize.day(dayOfWeek, {
                  width: "wide",
                  context: "standalone",
                });
            }
          },
          // ISO day of week
          i: function i(date, token, localize) {
            var dayOfWeek = date.getUTCDay();
            var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
            switch (token) {
              // 2
              case "i":
                return String(isoDayOfWeek);
              // 02
              case "ii":
                return (0,
                _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__[
                  "default"
                ])(isoDayOfWeek, token.length);
              // 2nd
              case "io":
                return localize.ordinalNumber(isoDayOfWeek, {
                  unit: "day",
                });
              // Tue
              case "iii":
                return localize.day(dayOfWeek, {
                  width: "abbreviated",
                  context: "formatting",
                });
              // T
              case "iiiii":
                return localize.day(dayOfWeek, {
                  width: "narrow",
                  context: "formatting",
                });
              // Tu
              case "iiiiii":
                return localize.day(dayOfWeek, {
                  width: "short",
                  context: "formatting",
                });
              // Tuesday
              case "iiii":
              default:
                return localize.day(dayOfWeek, {
                  width: "wide",
                  context: "formatting",
                });
            }
          },
          // AM or PM
          a: function a(date, token, localize) {
            var hours = date.getUTCHours();
            var dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
            switch (token) {
              case "a":
              case "aa":
                return localize.dayPeriod(dayPeriodEnumValue, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "aaa":
                return localize
                  .dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting",
                  })
                  .toLowerCase();
              case "aaaaa":
                return localize.dayPeriod(dayPeriodEnumValue, {
                  width: "narrow",
                  context: "formatting",
                });
              case "aaaa":
              default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                  width: "wide",
                  context: "formatting",
                });
            }
          },
          // AM, PM, midnight, noon
          b: function b(date, token, localize) {
            var hours = date.getUTCHours();
            var dayPeriodEnumValue;
            if (hours === 12) {
              dayPeriodEnumValue = dayPeriodEnum.noon;
            } else if (hours === 0) {
              dayPeriodEnumValue = dayPeriodEnum.midnight;
            } else {
              dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
            }
            switch (token) {
              case "b":
              case "bb":
                return localize.dayPeriod(dayPeriodEnumValue, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "bbb":
                return localize
                  .dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting",
                  })
                  .toLowerCase();
              case "bbbbb":
                return localize.dayPeriod(dayPeriodEnumValue, {
                  width: "narrow",
                  context: "formatting",
                });
              case "bbbb":
              default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                  width: "wide",
                  context: "formatting",
                });
            }
          },
          // in the morning, in the afternoon, in the evening, at night
          B: function B(date, token, localize) {
            var hours = date.getUTCHours();
            var dayPeriodEnumValue;
            if (hours >= 17) {
              dayPeriodEnumValue = dayPeriodEnum.evening;
            } else if (hours >= 12) {
              dayPeriodEnumValue = dayPeriodEnum.afternoon;
            } else if (hours >= 4) {
              dayPeriodEnumValue = dayPeriodEnum.morning;
            } else {
              dayPeriodEnumValue = dayPeriodEnum.night;
            }
            switch (token) {
              case "B":
              case "BB":
              case "BBB":
                return localize.dayPeriod(dayPeriodEnumValue, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "BBBBB":
                return localize.dayPeriod(dayPeriodEnumValue, {
                  width: "narrow",
                  context: "formatting",
                });
              case "BBBB":
              default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                  width: "wide",
                  context: "formatting",
                });
            }
          },
          // Hour [1-12]
          h: function h(date, token, localize) {
            if (token === "ho") {
              var hours = date.getUTCHours() % 12;
              if (hours === 0) hours = 12;
              return localize.ordinalNumber(hours, {
                unit: "hour",
              });
            }
            return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ].h(date, token);
          },
          // Hour [0-23]
          H: function H(date, token, localize) {
            if (token === "Ho") {
              return localize.ordinalNumber(date.getUTCHours(), {
                unit: "hour",
              });
            }
            return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ].H(date, token);
          },
          // Hour [0-11]
          K: function K(date, token, localize) {
            var hours = date.getUTCHours() % 12;
            if (token === "Ko") {
              return localize.ordinalNumber(hours, {
                unit: "hour",
              });
            }
            return (0,
            _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
              hours,
              token.length
            );
          },
          // Hour [1-24]
          k: function k(date, token, localize) {
            var hours = date.getUTCHours();
            if (hours === 0) hours = 24;
            if (token === "ko") {
              return localize.ordinalNumber(hours, {
                unit: "hour",
              });
            }
            return (0,
            _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
              hours,
              token.length
            );
          },
          // Minute
          m: function m(date, token, localize) {
            if (token === "mo") {
              return localize.ordinalNumber(date.getUTCMinutes(), {
                unit: "minute",
              });
            }
            return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ].m(date, token);
          },
          // Second
          s: function s(date, token, localize) {
            if (token === "so") {
              return localize.ordinalNumber(date.getUTCSeconds(), {
                unit: "second",
              });
            }
            return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ].s(date, token);
          },
          // Fraction of second
          S: function S(date, token) {
            return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ].S(date, token);
          },
          // currentTimeZone (ISO-8601. If offset is 0, output is always `'Z'`)
          X: function X(date, token, _localize, options) {
            var originalDate = options._originalDate || date;
            var currentTimeZoneOffset = originalDate.getcurrentTimeZoneOffset();
            if (currentTimeZoneOffset === 0) {
              return "Z";
            }
            switch (token) {
              // Hours and optional minutes
              case "X":
                return formatcurrentTimeZoneWithOptionalMinutes(
                  currentTimeZoneOffset
                );

              // Hours, minutes and optional seconds without `:` delimiter
              // Note: neither ISO-8601 nor JavaScript supports seconds in currentTimeZone offsets
              // so this token always has the same output as `XX`
              case "XXXX":
              case "XX":
                // Hours and minutes without `:` delimiter
                return formatcurrentTimeZone(currentTimeZoneOffset);

              // Hours, minutes and optional seconds with `:` delimiter
              // Note: neither ISO-8601 nor JavaScript supports seconds in currentTimeZone offsets
              // so this token always has the same output as `XXX`
              case "XXXXX":
              case "XXX": // Hours and minutes with `:` delimiter
              default:
                return formatcurrentTimeZone(currentTimeZoneOffset, ":");
            }
          },
          // currentTimeZone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
          x: function x(date, token, _localize, options) {
            var originalDate = options._originalDate || date;
            var currentTimeZoneOffset = originalDate.getcurrentTimeZoneOffset();
            switch (token) {
              // Hours and optional minutes
              case "x":
                return formatcurrentTimeZoneWithOptionalMinutes(
                  currentTimeZoneOffset
                );

              // Hours, minutes and optional seconds without `:` delimiter
              // Note: neither ISO-8601 nor JavaScript supports seconds in currentTimeZone offsets
              // so this token always has the same output as `xx`
              case "xxxx":
              case "xx":
                // Hours and minutes without `:` delimiter
                return formatcurrentTimeZone(currentTimeZoneOffset);

              // Hours, minutes and optional seconds with `:` delimiter
              // Note: neither ISO-8601 nor JavaScript supports seconds in currentTimeZone offsets
              // so this token always has the same output as `xxx`
              case "xxxxx":
              case "xxx": // Hours and minutes with `:` delimiter
              default:
                return formatcurrentTimeZone(currentTimeZoneOffset, ":");
            }
          },
          // currentTimeZone (GMT)
          O: function O(date, token, _localize, options) {
            var originalDate = options._originalDate || date;
            var currentTimeZoneOffset = originalDate.getcurrentTimeZoneOffset();
            switch (token) {
              // Short
              case "O":
              case "OO":
              case "OOO":
                return (
                  "GMT" + formatcurrentTimeZoneShort(currentTimeZoneOffset, ":")
                );
              // Long
              case "OOOO":
              default:
                return (
                  "GMT" + formatcurrentTimeZone(currentTimeZoneOffset, ":")
                );
            }
          },
          // currentTimeZone (specific non-location)
          z: function z(date, token, _localize, options) {
            var originalDate = options._originalDate || date;
            var currentTimeZoneOffset = originalDate.getcurrentTimeZoneOffset();
            switch (token) {
              // Short
              case "z":
              case "zz":
              case "zzz":
                return (
                  "GMT" + formatcurrentTimeZoneShort(currentTimeZoneOffset, ":")
                );
              // Long
              case "zzzz":
              default:
                return (
                  "GMT" + formatcurrentTimeZone(currentTimeZoneOffset, ":")
                );
            }
          },
          // Seconds timestamp
          t: function t(date, token, _localize, options) {
            var originalDate = options._originalDate || date;
            var timestamp = Math.floor(originalDate.getTime() / 1000);
            return (0,
            _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
              timestamp,
              token.length
            );
          },
          // Milliseconds timestamp
          T: function T(date, token, _localize, options) {
            var originalDate = options._originalDate || date;
            var timestamp = originalDate.getTime();
            return (0,
            _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
              timestamp,
              token.length
            );
          },
        };
        function formatcurrentTimeZoneShort(offset, dirtyDelimiter) {
          var sign = offset > 0 ? "-" : "+";
          var absOffset = Math.abs(offset);
          var hours = Math.floor(absOffset / 60);
          var minutes = absOffset % 60;
          if (minutes === 0) {
            return sign + String(hours);
          }
          var delimiter = dirtyDelimiter || "";
          return (
            sign +
            String(hours) +
            delimiter +
            (0,
            _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
              minutes,
              2
            )
          );
        }
        function formatcurrentTimeZoneWithOptionalMinutes(
          offset,
          dirtyDelimiter
        ) {
          if (offset % 60 === 0) {
            var sign = offset > 0 ? "-" : "+";
            return (
              sign +
              (0,
              _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(Math.abs(offset) / 60, 2)
            );
          }
          return formatcurrentTimeZone(offset, dirtyDelimiter);
        }
        function formatcurrentTimeZone(offset, dirtyDelimiter) {
          var delimiter = dirtyDelimiter || "";
          var sign = offset > 0 ? "-" : "+";
          var absOffset = Math.abs(offset);
          var hours = (0,
          _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
            Math.floor(absOffset / 60),
            2
          );
          var minutes = (0,
          _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
            absOffset % 60,
            2
          );
          return sign + hours + delimiter + minutes;
        }
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          formatters;

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
      /*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js"
          );

        /*
         * |     | Unit                           |     | Unit                           |
         * |-----|--------------------------------|-----|--------------------------------|
         * |  a  | AM, PM                         |  A* |                                |
         * |  d  | Day of month                   |  D  |                                |
         * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
         * |  m  | Minute                         |  M  | Month                          |
         * |  s  | Second                         |  S  | Fraction of second             |
         * |  y  | Year (abs)                     |  Y  |                                |
         *
         * Letters marked by * are not implemented but reserved by Unicode standard.
         */
        var formatters = {
          // Year
          y: function y(date, token) {
            // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
            // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
            // |----------|-------|----|-------|-------|-------|
            // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
            // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
            // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
            // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
            // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |

            var signedYear = date.getUTCFullYear();
            // Returns 1 for 1 BC (which is year 0 in JavaScript)
            var year = signedYear > 0 ? signedYear : 1 - signedYear;
            return (0,
            _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
              token === "yy" ? year % 100 : year,
              token.length
            );
          },
          // Month
          M: function M(date, token) {
            var month = date.getUTCMonth();
            return token === "M"
              ? String(month + 1)
              : (0,
                _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__[
                  "default"
                ])(month + 1, 2);
          },
          // Day of the month
          d: function d(date, token) {
            return (0,
            _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
              date.getUTCDate(),
              token.length
            );
          },
          // AM or PM
          a: function a(date, token) {
            var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? "pm" : "am";
            switch (token) {
              case "a":
              case "aa":
                return dayPeriodEnumValue.toUpperCase();
              case "aaa":
                return dayPeriodEnumValue;
              case "aaaaa":
                return dayPeriodEnumValue[0];
              case "aaaa":
              default:
                return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
            }
          },
          // Hour [1-12]
          h: function h(date, token) {
            return (0,
            _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
              date.getUTCHours() % 12 || 12,
              token.length
            );
          },
          // Hour [0-23]
          H: function H(date, token) {
            return (0,
            _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
              date.getUTCHours(),
              token.length
            );
          },
          // Minute
          m: function m(date, token) {
            return (0,
            _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
              date.getUTCMinutes(),
              token.length
            );
          },
          // Second
          s: function s(date, token) {
            return (0,
            _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
              date.getUTCSeconds(),
              token.length
            );
          },
          // Fraction of second
          S: function S(date, token) {
            var numberOfDigits = token.length;
            var milliseconds = date.getUTCMilliseconds();
            var fractionalSeconds = Math.floor(
              milliseconds * Math.pow(10, numberOfDigits - 3)
            );
            return (0,
            _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
              fractionalSeconds,
              token.length
            );
          },
        };
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          formatters;

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
      /*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        var dateLongFormatter = function dateLongFormatter(
          pattern,
          formatLong
        ) {
          switch (pattern) {
            case "P":
              return formatLong.date({
                width: "short",
              });
            case "PP":
              return formatLong.date({
                width: "medium",
              });
            case "PPP":
              return formatLong.date({
                width: "long",
              });
            case "PPPP":
            default:
              return formatLong.date({
                width: "full",
              });
          }
        };
        var timeLongFormatter = function timeLongFormatter(
          pattern,
          formatLong
        ) {
          switch (pattern) {
            case "p":
              return formatLong.time({
                width: "short",
              });
            case "pp":
              return formatLong.time({
                width: "medium",
              });
            case "ppp":
              return formatLong.time({
                width: "long",
              });
            case "pppp":
            default:
              return formatLong.time({
                width: "full",
              });
          }
        };
        var dateTimeLongFormatter = function dateTimeLongFormatter(
          pattern,
          formatLong
        ) {
          var matchResult = pattern.match(/(P+)(p+)?/) || [];
          var datePattern = matchResult[1];
          var timePattern = matchResult[2];
          if (!timePattern) {
            return dateLongFormatter(pattern, formatLong);
          }
          var dateTimeFormat;
          switch (datePattern) {
            case "P":
              dateTimeFormat = formatLong.dateTime({
                width: "short",
              });
              break;
            case "PP":
              dateTimeFormat = formatLong.dateTime({
                width: "medium",
              });
              break;
            case "PPP":
              dateTimeFormat = formatLong.dateTime({
                width: "long",
              });
              break;
            case "PPPP":
            default:
              dateTimeFormat = formatLong.dateTime({
                width: "full",
              });
              break;
          }
          return dateTimeFormat
            .replace("{{date}}", dateLongFormatter(datePattern, formatLong))
            .replace("{{time}}", timeLongFormatter(timePattern, formatLong));
        };
        var longFormatters = {
          p: timeLongFormatter,
          P: dateTimeLongFormatter,
        };
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          longFormatters;

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/getcurrentTimeZoneOffsetInMilliseconds/index.js":
      /*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getcurrentTimeZoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () =>
            /* binding */ getcurrentTimeZoneOffsetInMilliseconds,
          /* harmony export */
        });
        /**
         * Google Chrome as of 67.0.3396.87 introduced currentTimeZones with offset that includes seconds.
         * They usually appear for dates that denote time before the currentTimeZones were introduced
         * (e.g. for 'Europe/Prague' currentTimeZone the offset is GMT+00:57:44 before 1 October 1891
         * and GMT+01:00:00 after that date)
         *
         * Date#getcurrentTimeZoneOffset returns the offset in minutes and would return 57 for the example above,
         * which would lead to incorrect calculations.
         *
         * This function returns the currentTimeZone offset in milliseconds that takes seconds in account.
         */
        function getcurrentTimeZoneOffsetInMilliseconds(date) {
          var utcDate = new Date(
            Date.UTC(
              date.getFullYear(),
              date.getMonth(),
              date.getDate(),
              date.getHours(),
              date.getMinutes(),
              date.getSeconds(),
              date.getMilliseconds()
            )
          );
          utcDate.setUTCFullYear(date.getFullYear());
          return date.getTime() - utcDate.getTime();
        }

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
      /*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ getUTCDayOfYear,
          /* harmony export */
        });
        /* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js"
          );
        /* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js"
          );

        var MILLISECONDS_IN_DAY = 86400000;
        function getUTCDayOfYear(dirtyDate) {
          (0, _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
            1,
            arguments
          );
          var date = (0,
          _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
          var timestamp = date.getTime();
          date.setUTCMonth(0, 1);
          date.setUTCHours(0, 0, 0, 0);
          var startOfYearTimestamp = date.getTime();
          var difference = timestamp - startOfYearTimestamp;
          return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
        }

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
      /*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ getUTCISOWeekYear,
          /* harmony export */
        });
        /* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js"
          );
        /* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js"
          );
        /* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js"
          );

        function getUTCISOWeekYear(dirtyDate) {
          (0, _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
            1,
            arguments
          );
          var date = (0,
          _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
          var year = date.getUTCFullYear();
          var fourthOfJanuaryOfNextYear = new Date(0);
          fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
          fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
          var startOfNextYear = (0,
          _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
            fourthOfJanuaryOfNextYear
          );
          var fourthOfJanuaryOfThisYear = new Date(0);
          fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
          fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
          var startOfThisYear = (0,
          _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
            fourthOfJanuaryOfThisYear
          );
          if (date.getTime() >= startOfNextYear.getTime()) {
            return year + 1;
          } else if (date.getTime() >= startOfThisYear.getTime()) {
            return year;
          } else {
            return year - 1;
          }
        }

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
      /*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ getUTCISOWeek,
          /* harmony export */
        });
        /* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js"
          );
        /* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js"
          );
        /* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../startOfUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js"
          );
        /* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js"
          );

        var MILLISECONDS_IN_WEEK = 604800000;
        function getUTCISOWeek(dirtyDate) {
          (0, _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
            1,
            arguments
          );
          var date = (0,
          _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
          var diff =
            (0,
            _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__[
              "default"
            ])(date).getTime() -
            (0,
            _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__[
              "default"
            ])(date).getTime();

          // Round the number of days to the nearest integer
          // because the number of milliseconds in a week is not constant
          // (e.g. it's different in the week of the daylight saving time clock shift)
          return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
        }

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
      /*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ getUTCWeekYear,
          /* harmony export */
        });
        /* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js"
          );
        /* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js"
          );
        /* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js"
          );
        /* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js"
          );
        /* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js"
          );

        function getUTCWeekYear(dirtyDate, options) {
          var _ref,
            _ref2,
            _ref3,
            _options$firstWeekCon,
            _options$locale,
            _options$locale$optio,
            _defaultOptions$local,
            _defaultOptions$local2;
          (0, _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
            1,
            arguments
          );
          var date = (0,
          _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
          var year = date.getUTCFullYear();
          var defaultOptions = (0,
          _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__.getDefaultOptions)();
          var firstWeekContainsDate = (0,
          _toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
            (_ref =
              (_ref2 =
                (_ref3 =
                  (_options$firstWeekCon =
                    options === null || options === void 0
                      ? void 0
                      : options.firstWeekContainsDate) !== null &&
                  _options$firstWeekCon !== void 0
                    ? _options$firstWeekCon
                    : options === null || options === void 0
                    ? void 0
                    : (_options$locale = options.locale) === null ||
                      _options$locale === void 0
                    ? void 0
                    : (_options$locale$optio = _options$locale.options) ===
                        null || _options$locale$optio === void 0
                    ? void 0
                    : _options$locale$optio.firstWeekContainsDate) !== null &&
                _ref3 !== void 0
                  ? _ref3
                  : defaultOptions.firstWeekContainsDate) !== null &&
              _ref2 !== void 0
                ? _ref2
                : (_defaultOptions$local = defaultOptions.locale) === null ||
                  _defaultOptions$local === void 0
                ? void 0
                : (_defaultOptions$local2 = _defaultOptions$local.options) ===
                    null || _defaultOptions$local2 === void 0
                ? void 0
                : _defaultOptions$local2.firstWeekContainsDate) !== null &&
              _ref !== void 0
              ? _ref
              : 1
          );

          // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
          if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
            throw new RangeError(
              "firstWeekContainsDate must be between 1 and 7 inclusively"
            );
          }
          var firstWeekOfNextYear = new Date(0);
          firstWeekOfNextYear.setUTCFullYear(
            year + 1,
            0,
            firstWeekContainsDate
          );
          firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
          var startOfNextYear = (0,
          _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
            firstWeekOfNextYear,
            options
          );
          var firstWeekOfThisYear = new Date(0);
          firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
          firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
          var startOfThisYear = (0,
          _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
            firstWeekOfThisYear,
            options
          );
          if (date.getTime() >= startOfNextYear.getTime()) {
            return year + 1;
          } else if (date.getTime() >= startOfThisYear.getTime()) {
            return year;
          } else {
            return year - 1;
          }
        }

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
      /*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ getUTCWeek,
          /* harmony export */
        });
        /* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js"
          );
        /* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js"
          );
        /* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../startOfUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js"
          );
        /* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js"
          );

        var MILLISECONDS_IN_WEEK = 604800000;
        function getUTCWeek(dirtyDate, options) {
          (0, _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
            1,
            arguments
          );
          var date = (0,
          _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
          var diff =
            (0,
            _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
              date,
              options
            ).getTime() -
            (0,
            _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__[
              "default"
            ])(date, options).getTime();

          // Round the number of days to the nearest integer
          // because the number of milliseconds in a week is not constant
          // (e.g. it's different in the week of the daylight saving time clock shift)
          return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
        }

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
      /*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ isProtectedDayOfYearToken: () =>
            /* binding */ isProtectedDayOfYearToken,
          /* harmony export */ isProtectedWeekYearToken: () =>
            /* binding */ isProtectedWeekYearToken,
          /* harmony export */ throwProtectedError: () =>
            /* binding */ throwProtectedError,
          /* harmony export */
        });
        var protectedDayOfYearTokens = ["D", "DD"];
        var protectedWeekYearTokens = ["YY", "YYYY"];
        function isProtectedDayOfYearToken(token) {
          return protectedDayOfYearTokens.indexOf(token) !== -1;
        }
        function isProtectedWeekYearToken(token) {
          return protectedWeekYearTokens.indexOf(token) !== -1;
        }
        function throwProtectedError(token, format, input) {
          if (token === "YYYY") {
            throw new RangeError(
              "Use `yyyy` instead of `YYYY` (in `"
                .concat(format, "`) for formatting years to the input `")
                .concat(
                  input,
                  "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
                )
            );
          } else if (token === "YY") {
            throw new RangeError(
              "Use `yy` instead of `YY` (in `"
                .concat(format, "`) for formatting years to the input `")
                .concat(
                  input,
                  "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
                )
            );
          } else if (token === "D") {
            throw new RangeError(
              "Use `d` instead of `D` (in `"
                .concat(
                  format,
                  "`) for formatting days of the month to the input `"
                )
                .concat(
                  input,
                  "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
                )
            );
          } else if (token === "DD") {
            throw new RangeError(
              "Use `dd` instead of `DD` (in `"
                .concat(
                  format,
                  "`) for formatting days of the month to the input `"
                )
                .concat(
                  input,
                  "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
                )
            );
          }
        }

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
      /*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ requiredArgs,
          /* harmony export */
        });
        function requiredArgs(required, args) {
          if (args.length < required) {
            throw new TypeError(
              required +
                " argument" +
                (required > 1 ? "s" : "") +
                " required, but only " +
                args.length +
                " present"
            );
          }
        }

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/setUTCDay/index.js":
      /*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/setUTCDay/index.js ***!
  \***********************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ setUTCDay,
          /* harmony export */
        });
        /* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js"
          );
        /* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js"
          );
        /* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js"
          );
        /* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js"
          );

        function setUTCDay(dirtyDate, dirtyDay, options) {
          var _ref,
            _ref2,
            _ref3,
            _options$weekStartsOn,
            _options$locale,
            _options$locale$optio,
            _defaultOptions$local,
            _defaultOptions$local2;
          (0, _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
            2,
            arguments
          );
          var defaultOptions = (0,
          _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
          var weekStartsOn = (0,
          _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
            (_ref =
              (_ref2 =
                (_ref3 =
                  (_options$weekStartsOn =
                    options === null || options === void 0
                      ? void 0
                      : options.weekStartsOn) !== null &&
                  _options$weekStartsOn !== void 0
                    ? _options$weekStartsOn
                    : options === null || options === void 0
                    ? void 0
                    : (_options$locale = options.locale) === null ||
                      _options$locale === void 0
                    ? void 0
                    : (_options$locale$optio = _options$locale.options) ===
                        null || _options$locale$optio === void 0
                    ? void 0
                    : _options$locale$optio.weekStartsOn) !== null &&
                _ref3 !== void 0
                  ? _ref3
                  : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0
                ? _ref2
                : (_defaultOptions$local = defaultOptions.locale) === null ||
                  _defaultOptions$local === void 0
                ? void 0
                : (_defaultOptions$local2 = _defaultOptions$local.options) ===
                    null || _defaultOptions$local2 === void 0
                ? void 0
                : _defaultOptions$local2.weekStartsOn) !== null &&
              _ref !== void 0
              ? _ref
              : 0
          );

          // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
          if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
            throw new RangeError(
              "weekStartsOn must be between 0 and 6 inclusively"
            );
          }
          var date = (0,
          _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
          var day = (0,
          _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
            dirtyDay
          );
          var currentDay = date.getUTCDay();
          var remainder = day % 7;
          var dayIndex = (remainder + 7) % 7;
          var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
          date.setUTCDate(date.getUTCDate() + diff);
          return date;
        }

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/setUTCISODay/index.js":
      /*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/setUTCISODay/index.js ***!
  \**************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ setUTCISODay,
          /* harmony export */
        });
        /* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js"
          );
        /* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js"
          );
        /* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js"
          );

        function setUTCISODay(dirtyDate, dirtyDay) {
          (0, _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
            2,
            arguments
          );
          var day = (0,
          _toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
            dirtyDay
          );
          if (day % 7 === 0) {
            day = day - 7;
          }
          var weekStartsOn = 1;
          var date = (0,
          _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
          var currentDay = date.getUTCDay();
          var remainder = day % 7;
          var dayIndex = (remainder + 7) % 7;
          var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
          date.setUTCDate(date.getUTCDate() + diff);
          return date;
        }

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/setUTCISOWeek/index.js":
      /*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/setUTCISOWeek/index.js ***!
  \***************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ setUTCISOWeek,
          /* harmony export */
        });
        /* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js"
          );
        /* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js"
          );
        /* harmony import */ var _getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../getUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js"
          );
        /* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js"
          );

        function setUTCISOWeek(dirtyDate, dirtyISOWeek) {
          (0, _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
            2,
            arguments
          );
          var date = (0,
          _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
          var isoWeek = (0,
          _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
            dirtyISOWeek
          );
          var diff =
            (0,
            _getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
              date
            ) - isoWeek;
          date.setUTCDate(date.getUTCDate() - diff * 7);
          return date;
        }

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/setUTCWeek/index.js":
      /*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/setUTCWeek/index.js ***!
  \************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ setUTCWeek,
          /* harmony export */
        });
        /* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js"
          );
        /* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js"
          );
        /* harmony import */ var _getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../getUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js"
          );
        /* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js"
          );

        function setUTCWeek(dirtyDate, dirtyWeek, options) {
          (0, _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
            2,
            arguments
          );
          var date = (0,
          _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
          var week = (0,
          _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
            dirtyWeek
          );
          var diff =
            (0, _getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
              date,
              options
            ) - week;
          date.setUTCDate(date.getUTCDate() - diff * 7);
          return date;
        }

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
      /*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () =>
            /* binding */ startOfUTCISOWeekYear,
          /* harmony export */
        });
        /* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js"
          );
        /* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js"
          );
        /* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js"
          );

        function startOfUTCISOWeekYear(dirtyDate) {
          (0, _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
            1,
            arguments
          );
          var year = (0,
          _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
            dirtyDate
          );
          var fourthOfJanuary = new Date(0);
          fourthOfJanuary.setUTCFullYear(year, 0, 4);
          fourthOfJanuary.setUTCHours(0, 0, 0, 0);
          var date = (0,
          _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
            fourthOfJanuary
          );
          return date;
        }

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
      /*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ startOfUTCISOWeek,
          /* harmony export */
        });
        /* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js"
          );
        /* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js"
          );

        function startOfUTCISOWeek(dirtyDate) {
          (0, _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
            1,
            arguments
          );
          var weekStartsOn = 1;
          var date = (0,
          _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
          var day = date.getUTCDay();
          var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
          date.setUTCDate(date.getUTCDate() - diff);
          date.setUTCHours(0, 0, 0, 0);
          return date;
        }

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
      /*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ startOfUTCWeekYear,
          /* harmony export */
        });
        /* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js"
          );
        /* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js"
          );
        /* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js"
          );
        /* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js"
          );
        /* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js"
          );

        function startOfUTCWeekYear(dirtyDate, options) {
          var _ref,
            _ref2,
            _ref3,
            _options$firstWeekCon,
            _options$locale,
            _options$locale$optio,
            _defaultOptions$local,
            _defaultOptions$local2;
          (0, _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
            1,
            arguments
          );
          var defaultOptions = (0,
          _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
          var firstWeekContainsDate = (0,
          _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
            (_ref =
              (_ref2 =
                (_ref3 =
                  (_options$firstWeekCon =
                    options === null || options === void 0
                      ? void 0
                      : options.firstWeekContainsDate) !== null &&
                  _options$firstWeekCon !== void 0
                    ? _options$firstWeekCon
                    : options === null || options === void 0
                    ? void 0
                    : (_options$locale = options.locale) === null ||
                      _options$locale === void 0
                    ? void 0
                    : (_options$locale$optio = _options$locale.options) ===
                        null || _options$locale$optio === void 0
                    ? void 0
                    : _options$locale$optio.firstWeekContainsDate) !== null &&
                _ref3 !== void 0
                  ? _ref3
                  : defaultOptions.firstWeekContainsDate) !== null &&
              _ref2 !== void 0
                ? _ref2
                : (_defaultOptions$local = defaultOptions.locale) === null ||
                  _defaultOptions$local === void 0
                ? void 0
                : (_defaultOptions$local2 = _defaultOptions$local.options) ===
                    null || _defaultOptions$local2 === void 0
                ? void 0
                : _defaultOptions$local2.firstWeekContainsDate) !== null &&
              _ref !== void 0
              ? _ref
              : 1
          );
          var year = (0,
          _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
            dirtyDate,
            options
          );
          var firstWeek = new Date(0);
          firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
          firstWeek.setUTCHours(0, 0, 0, 0);
          var date = (0,
          _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
            firstWeek,
            options
          );
          return date;
        }

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
      /*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ startOfUTCWeek,
          /* harmony export */
        });
        /* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js"
          );
        /* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js"
          );
        /* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js"
          );
        /* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js"
          );

        function startOfUTCWeek(dirtyDate, options) {
          var _ref,
            _ref2,
            _ref3,
            _options$weekStartsOn,
            _options$locale,
            _options$locale$optio,
            _defaultOptions$local,
            _defaultOptions$local2;
          (0, _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
            1,
            arguments
          );
          var defaultOptions = (0,
          _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
          var weekStartsOn = (0,
          _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
            (_ref =
              (_ref2 =
                (_ref3 =
                  (_options$weekStartsOn =
                    options === null || options === void 0
                      ? void 0
                      : options.weekStartsOn) !== null &&
                  _options$weekStartsOn !== void 0
                    ? _options$weekStartsOn
                    : options === null || options === void 0
                    ? void 0
                    : (_options$locale = options.locale) === null ||
                      _options$locale === void 0
                    ? void 0
                    : (_options$locale$optio = _options$locale.options) ===
                        null || _options$locale$optio === void 0
                    ? void 0
                    : _options$locale$optio.weekStartsOn) !== null &&
                _ref3 !== void 0
                  ? _ref3
                  : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0
                ? _ref2
                : (_defaultOptions$local = defaultOptions.locale) === null ||
                  _defaultOptions$local === void 0
                ? void 0
                : (_defaultOptions$local2 = _defaultOptions$local.options) ===
                    null || _defaultOptions$local2 === void 0
                ? void 0
                : _defaultOptions$local2.weekStartsOn) !== null &&
              _ref !== void 0
              ? _ref
              : 0
          );

          // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
          if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
            throw new RangeError(
              "weekStartsOn must be between 0 and 6 inclusively"
            );
          }
          var date = (0,
          _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
          var day = date.getUTCDay();
          var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
          date.setUTCDate(date.getUTCDate() - diff);
          date.setUTCHours(0, 0, 0, 0);
          return date;
        }

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
      /*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ toInteger,
          /* harmony export */
        });
        function toInteger(dirtyNumber) {
          if (
            dirtyNumber === null ||
            dirtyNumber === true ||
            dirtyNumber === false
          ) {
            return NaN;
          }
          var number = Number(dirtyNumber);
          if (isNaN(number)) {
            return number;
          }
          return number < 0 ? Math.ceil(number) : Math.floor(number);
        }

        /***/
      },

    /***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
      /*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ addMilliseconds,
          /* harmony export */
        });
        /* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js"
          );
        /* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js"
          );
        /* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js"
          );

        /**
         * @name addMilliseconds
         * @category Millisecond Helpers
         * @summary Add the specified number of milliseconds to the given date.
         *
         * @description
         * Add the specified number of milliseconds to the given date.
         *
         * @param {Date|Number} date - the date to be changed
         * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
         * @returns {Date} the new date with the milliseconds added
         * @throws {TypeError} 2 arguments required
         *
         * @example
         * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
         * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
         * //=> Thu Jul 10 2014 12:45:30.750
         */
        function addMilliseconds(dirtyDate, dirtyAmount) {
          (0,
          _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
            2,
            arguments
          );
          var timestamp = (0,
          _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
            dirtyDate
          ).getTime();
          var amount = (0,
          _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
            dirtyAmount
          );
          return new Date(timestamp + amount);
        }

        /***/
      },

    /***/ "./node_modules/date-fns/esm/constants/index.js":
      /*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ daysInWeek: () => /* binding */ daysInWeek,
          /* harmony export */ daysInYear: () => /* binding */ daysInYear,
          /* harmony export */ maxTime: () => /* binding */ maxTime,
          /* harmony export */ millisecondsInHour: () =>
            /* binding */ millisecondsInHour,
          /* harmony export */ millisecondsInMinute: () =>
            /* binding */ millisecondsInMinute,
          /* harmony export */ millisecondsInSecond: () =>
            /* binding */ millisecondsInSecond,
          /* harmony export */ minTime: () => /* binding */ minTime,
          /* harmony export */ minutesInHour: () => /* binding */ minutesInHour,
          /* harmony export */ monthsInQuarter: () =>
            /* binding */ monthsInQuarter,
          /* harmony export */ monthsInYear: () => /* binding */ monthsInYear,
          /* harmony export */ quartersInYear: () =>
            /* binding */ quartersInYear,
          /* harmony export */ secondsInDay: () => /* binding */ secondsInDay,
          /* harmony export */ secondsInHour: () => /* binding */ secondsInHour,
          /* harmony export */ secondsInMinute: () =>
            /* binding */ secondsInMinute,
          /* harmony export */ secondsInMonth: () =>
            /* binding */ secondsInMonth,
          /* harmony export */ secondsInQuarter: () =>
            /* binding */ secondsInQuarter,
          /* harmony export */ secondsInWeek: () => /* binding */ secondsInWeek,
          /* harmony export */ secondsInYear: () => /* binding */ secondsInYear,
          /* harmony export */
        });
        /**
         * Days in 1 week.
         *
         * @name daysInWeek
         * @constant
         * @type {number}
         * @default
         */
        var daysInWeek = 7;

        /**
         * Days in 1 year
         * One years equals 365.2425 days according to the formula:
         *
         * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
         * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
         *
         * @name daysInYear
         * @constant
         * @type {number}
         * @default
         */
        var daysInYear = 365.2425;

        /**
         * Maximum allowed time.
         *
         * @name maxTime
         * @constant
         * @type {number}
         * @default
         */
        var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;

        /**
         * Milliseconds in 1 minute
         *
         * @name millisecondsInMinute
         * @constant
         * @type {number}
         * @default
         */
        var millisecondsInMinute = 60000;

        /**
         * Milliseconds in 1 hour
         *
         * @name millisecondsInHour
         * @constant
         * @type {number}
         * @default
         */
        var millisecondsInHour = 3600000;

        /**
         * Milliseconds in 1 second
         *
         * @name millisecondsInSecond
         * @constant
         * @type {number}
         * @default
         */
        var millisecondsInSecond = 1000;

        /**
         * Minimum allowed time.
         *
         * @name minTime
         * @constant
         * @type {number}
         * @default
         */
        var minTime = -maxTime;

        /**
         * Minutes in 1 hour
         *
         * @name minutesInHour
         * @constant
         * @type {number}
         * @default
         */
        var minutesInHour = 60;

        /**
         * Months in 1 quarter
         *
         * @name monthsInQuarter
         * @constant
         * @type {number}
         * @default
         */
        var monthsInQuarter = 3;

        /**
         * Months in 1 year
         *
         * @name monthsInYear
         * @constant
         * @type {number}
         * @default
         */
        var monthsInYear = 12;

        /**
         * Quarters in 1 year
         *
         * @name quartersInYear
         * @constant
         * @type {number}
         * @default
         */
        var quartersInYear = 4;

        /**
         * Seconds in 1 hour
         *
         * @name secondsInHour
         * @constant
         * @type {number}
         * @default
         */
        var secondsInHour = 3600;

        /**
         * Seconds in 1 minute
         *
         * @name secondsInMinute
         * @constant
         * @type {number}
         * @default
         */
        var secondsInMinute = 60;

        /**
         * Seconds in 1 day
         *
         * @name secondsInDay
         * @constant
         * @type {number}
         * @default
         */
        var secondsInDay = secondsInHour * 24;

        /**
         * Seconds in 1 week
         *
         * @name secondsInWeek
         * @constant
         * @type {number}
         * @default
         */
        var secondsInWeek = secondsInDay * 7;

        /**
         * Seconds in 1 year
         *
         * @name secondsInYear
         * @constant
         * @type {number}
         * @default
         */
        var secondsInYear = secondsInDay * daysInYear;

        /**
         * Seconds in 1 month
         *
         * @name secondsInMonth
         * @constant
         * @type {number}
         * @default
         */
        var secondsInMonth = secondsInYear / 12;

        /**
         * Seconds in 1 quarter
         *
         * @name secondsInQuarter
         * @constant
         * @type {number}
         * @default
         */
        var secondsInQuarter = secondsInMonth * 3;

        /***/
      },

    /***/ "./node_modules/date-fns/esm/format/index.js":
      /*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ format,
          /* harmony export */
        });
        /* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ../isValid/index.js */ "./node_modules/date-fns/esm/isValid/index.js"
          );
        /* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../subMilliseconds/index.js */ "./node_modules/date-fns/esm/subMilliseconds/index.js"
          );
        /* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js"
          );
        /* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! ../_lib/format/formatters/index.js */ "./node_modules/date-fns/esm/_lib/format/formatters/index.js"
          );
        /* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ../_lib/format/longFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js"
          );
        /* harmony import */ var _lib_getcurrentTimeZoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../_lib/getcurrentTimeZoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getcurrentTimeZoneOffsetInMilliseconds/index.js"
          );
        /* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            /*! ../_lib/protectedTokens/index.js */ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js"
          );
        /* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js"
          );
        /* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js"
          );
        /* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js"
          );
        /* harmony import */ var _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../_lib/defaultLocale/index.js */ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js"
          );

        // This RegExp consists of three parts separated by `|`:
        // - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
        //   (one of the certain letters followed by `o`)
        // - (\w)\1* matches any sequences of the same letter
        // - '' matches two quote characters in a row
        // - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
        //   except a single quote symbol, which ends the sequence.
        //   Two quote characters do not end the sequence.
        //   If there is no matching single quote
        //   then the sequence will continue until the end of the string.
        // - . matches any single character unmatched by previous parts of the RegExps
        var formattingTokensRegExp =
          /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

        // This RegExp catches symbols escaped by quotes, and also
        // sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
        var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
        var escapedStringRegExp = /^'([^]*?)'?$/;
        var doubleQuoteRegExp = /''/g;
        var unescapedLatinCharacterRegExp = /[a-zA-Z]/;

        /**
         * @name format
         * @category Common Helpers
         * @summary Format the date.
         *
         * @description
         * Return the formatted date string in the given format. The result may vary by locale.
         *
         * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
         * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
         *
         * The characters wrapped between two single quotes characters (') are escaped.
         * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
         * (see the last example)
         *
         * Format of the string is based on Unicode Technical Standard #35:
         * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
         * with a few additions (see note 7 below the table).
         *
         * Accepted patterns:
         * | Unit                            | Pattern | Result examples                   | Notes |
         * |---------------------------------|---------|-----------------------------------|-------|
         * | Era                             | G..GGG  | AD, BC                            |       |
         * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
         * |                                 | GGGGG   | A, B                              |       |
         * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
         * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
         * |                                 | yy      | 44, 01, 00, 17                    | 5     |
         * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
         * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
         * |                                 | yyyyy   | ...                               | 3,5   |
         * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
         * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
         * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
         * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
         * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
         * |                                 | YYYYY   | ...                               | 3,5   |
         * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
         * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
         * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
         * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
         * |                                 | RRRRR   | ...                               | 3,5,7 |
         * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
         * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
         * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
         * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
         * |                                 | uuuuu   | ...                               | 3,5   |
         * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
         * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
         * |                                 | QQ      | 01, 02, 03, 04                    |       |
         * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
         * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
         * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
         * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
         * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
         * |                                 | qq      | 01, 02, 03, 04                    |       |
         * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
         * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
         * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
         * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
         * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
         * |                                 | MM      | 01, 02, ..., 12                   |       |
         * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
         * |                                 | MMMM    | January, February, ..., December  | 2     |
         * |                                 | MMMMM   | J, F, ..., D                      |       |
         * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
         * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
         * |                                 | LL      | 01, 02, ..., 12                   |       |
         * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
         * |                                 | LLLL    | January, February, ..., December  | 2     |
         * |                                 | LLLLL   | J, F, ..., D                      |       |
         * | Local week of year              | w       | 1, 2, ..., 53                     |       |
         * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
         * |                                 | ww      | 01, 02, ..., 53                   |       |
         * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
         * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
         * |                                 | II      | 01, 02, ..., 53                   | 7     |
         * | Day of month                    | d       | 1, 2, ..., 31                     |       |
         * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
         * |                                 | dd      | 01, 02, ..., 31                   |       |
         * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
         * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
         * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
         * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
         * |                                 | DDDD    | ...                               | 3     |
         * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
         * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
         * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
         * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
         * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
         * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
         * |                                 | ii      | 01, 02, ..., 07                   | 7     |
         * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
         * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
         * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
         * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
         * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
         * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
         * |                                 | ee      | 02, 03, ..., 01                   |       |
         * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
         * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
         * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
         * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
         * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
         * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
         * |                                 | cc      | 02, 03, ..., 01                   |       |
         * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
         * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
         * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
         * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
         * | AM, PM                          | a..aa   | AM, PM                            |       |
         * |                                 | aaa     | am, pm                            |       |
         * |                                 | aaaa    | a.m., p.m.                        | 2     |
         * |                                 | aaaaa   | a, p                              |       |
         * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
         * |                                 | bbb     | am, pm, noon, midnight            |       |
         * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
         * |                                 | bbbbb   | a, p, n, mi                       |       |
         * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
         * |                                 | BBBB    | at night, in the morning, ...     | 2     |
         * |                                 | BBBBB   | at night, in the morning, ...     |       |
         * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
         * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
         * |                                 | hh      | 01, 02, ..., 11, 12               |       |
         * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
         * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
         * |                                 | HH      | 00, 01, 02, ..., 23               |       |
         * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
         * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
         * |                                 | KK      | 01, 02, ..., 11, 00               |       |
         * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
         * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
         * |                                 | kk      | 24, 01, 02, ..., 23               |       |
         * | Minute                          | m       | 0, 1, ..., 59                     |       |
         * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
         * |                                 | mm      | 00, 01, ..., 59                   |       |
         * | Second                          | s       | 0, 1, ..., 59                     |       |
         * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
         * |                                 | ss      | 00, 01, ..., 59                   |       |
         * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
         * |                                 | SS      | 00, 01, ..., 99                   |       |
         * |                                 | SSS     | 000, 001, ..., 999                |       |
         * |                                 | SSSS    | ...                               | 3     |
         * | currentTimeZone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
         * |                                 | XX      | -0800, +0530, Z                   |       |
         * |                                 | XXX     | -08:00, +05:30, Z                 |       |
         * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
         * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
         * | currentTimeZone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
         * |                                 | xx      | -0800, +0530, +0000               |       |
         * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
         * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
         * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
         * | currentTimeZone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
         * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
         * | currentTimeZone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
         * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
         * | Seconds timestamp               | t       | 512969520                         | 7     |
         * |                                 | tt      | ...                               | 3,7   |
         * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
         * |                                 | TT      | ...                               | 3,7   |
         * | Long localized date             | P       | 04/29/1453                        | 7     |
         * |                                 | PP      | Apr 29, 1453                      | 7     |
         * |                                 | PPP     | April 29th, 1453                  | 7     |
         * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
         * | Long localized time             | p       | 12:00 AM                          | 7     |
         * |                                 | pp      | 12:00:00 AM                       | 7     |
         * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
         * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
         * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
         * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
         * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
         * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
         * Notes:
         * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
         *    are the same as "stand-alone" units, but are different in some languages.
         *    "Formatting" units are declined according to the rules of the language
         *    in the context of a date. "Stand-alone" units are always nominative singular:
         *
         *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
         *
         *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
         *
         * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
         *    the single quote characters (see below).
         *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
         *    the output will be the same as default pattern for this unit, usually
         *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
         *    are marked with "2" in the last column of the table.
         *
         *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
         *
         *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
         *
         *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
         *
         *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
         *
         *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
         *
         * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
         *    The output will be padded with zeros to match the length of the pattern.
         *
         *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
         *
         * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
         *    These tokens represent the shortest form of the quarter.
         *
         * 5. The main difference between `y` and `u` patterns are B.C. years:
         *
         *    | Year | `y` | `u` |
         *    |------|-----|-----|
         *    | AC 1 |   1 |   1 |
         *    | BC 1 |   1 |   0 |
         *    | BC 2 |   2 |  -1 |
         *
         *    Also `yy` always returns the last two digits of a year,
         *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
         *
         *    | Year | `yy` | `uu` |
         *    |------|------|------|
         *    | 1    |   01 |   01 |
         *    | 14   |   14 |   14 |
         *    | 376  |   76 |  376 |
         *    | 1453 |   53 | 1453 |
         *
         *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
         *    except local week-numbering years are dependent on `options.weekStartsOn`
         *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
         *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
         *
         * 6. Specific non-location currentTimeZones are currently unavailable in `date-fns`,
         *    so right now these tokens fall back to GMT currentTimeZones.
         *
         * 7. These patterns are not in the Unicode Technical Standard #35:
         *    - `i`: ISO day of week
         *    - `I`: ISO week of year
         *    - `R`: ISO week-numbering year
         *    - `t`: seconds timestamp
         *    - `T`: milliseconds timestamp
         *    - `o`: ordinal number modifier
         *    - `P`: long localized date
         *    - `p`: long localized time
         *
         * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
         *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
         *
         * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
         *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
         *
         * @param {Date|Number} date - the original date
         * @param {String} format - the string of tokens
         * @param {Object} [options] - an object with options.
         * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
         * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
         * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
         * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
         *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
         * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
         *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
         * @returns {String} the formatted date string
         * @throws {TypeError} 2 arguments required
         * @throws {RangeError} `date` must not be Invalid Date
         * @throws {RangeError} `options.locale` must contain `localize` property
         * @throws {RangeError} `options.locale` must contain `formatLong` property
         * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
         * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
         * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
         * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
         * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
         * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
         * @throws {RangeError} format string contains an unescaped latin alphabet character
         *
         * @example
         * // Represent 11 February 2014 in middle-endian format:
         * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
         * //=> '02/11/2014'
         *
         * @example
         * // Represent 2 July 2014 in Esperanto:
         * import { eoLocale } from 'date-fns/locale/eo'
         * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
         *   locale: eoLocale
         * })
         * //=> '2-a de julio 2014'
         *
         * @example
         * // Escape string by single quote characters:
         * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
         * //=> "3 o'clock"
         */

        function format(dirtyDate, dirtyFormatStr, options) {
          var _ref,
            _options$locale,
            _ref2,
            _ref3,
            _ref4,
            _options$firstWeekCon,
            _options$locale2,
            _options$locale2$opti,
            _defaultOptions$local,
            _defaultOptions$local2,
            _ref5,
            _ref6,
            _ref7,
            _options$weekStartsOn,
            _options$locale3,
            _options$locale3$opti,
            _defaultOptions$local3,
            _defaultOptions$local4;
          (0,
          _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
            2,
            arguments
          );
          var formatStr = String(dirtyFormatStr);
          var defaultOptions = (0,
          _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
          var locale =
            (_ref =
              (_options$locale =
                options === null || options === void 0
                  ? void 0
                  : options.locale) !== null && _options$locale !== void 0
                ? _options$locale
                : defaultOptions.locale) !== null && _ref !== void 0
              ? _ref
              : _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__[
                  "default"
                ];
          var firstWeekContainsDate = (0,
          _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
            (_ref2 =
              (_ref3 =
                (_ref4 =
                  (_options$firstWeekCon =
                    options === null || options === void 0
                      ? void 0
                      : options.firstWeekContainsDate) !== null &&
                  _options$firstWeekCon !== void 0
                    ? _options$firstWeekCon
                    : options === null || options === void 0
                    ? void 0
                    : (_options$locale2 = options.locale) === null ||
                      _options$locale2 === void 0
                    ? void 0
                    : (_options$locale2$opti = _options$locale2.options) ===
                        null || _options$locale2$opti === void 0
                    ? void 0
                    : _options$locale2$opti.firstWeekContainsDate) !== null &&
                _ref4 !== void 0
                  ? _ref4
                  : defaultOptions.firstWeekContainsDate) !== null &&
              _ref3 !== void 0
                ? _ref3
                : (_defaultOptions$local = defaultOptions.locale) === null ||
                  _defaultOptions$local === void 0
                ? void 0
                : (_defaultOptions$local2 = _defaultOptions$local.options) ===
                    null || _defaultOptions$local2 === void 0
                ? void 0
                : _defaultOptions$local2.firstWeekContainsDate) !== null &&
              _ref2 !== void 0
              ? _ref2
              : 1
          );

          // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
          if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
            throw new RangeError(
              "firstWeekContainsDate must be between 1 and 7 inclusively"
            );
          }
          var weekStartsOn = (0,
          _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
            (_ref5 =
              (_ref6 =
                (_ref7 =
                  (_options$weekStartsOn =
                    options === null || options === void 0
                      ? void 0
                      : options.weekStartsOn) !== null &&
                  _options$weekStartsOn !== void 0
                    ? _options$weekStartsOn
                    : options === null || options === void 0
                    ? void 0
                    : (_options$locale3 = options.locale) === null ||
                      _options$locale3 === void 0
                    ? void 0
                    : (_options$locale3$opti = _options$locale3.options) ===
                        null || _options$locale3$opti === void 0
                    ? void 0
                    : _options$locale3$opti.weekStartsOn) !== null &&
                _ref7 !== void 0
                  ? _ref7
                  : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0
                ? _ref6
                : (_defaultOptions$local3 = defaultOptions.locale) === null ||
                  _defaultOptions$local3 === void 0
                ? void 0
                : (_defaultOptions$local4 = _defaultOptions$local3.options) ===
                    null || _defaultOptions$local4 === void 0
                ? void 0
                : _defaultOptions$local4.weekStartsOn) !== null &&
              _ref5 !== void 0
              ? _ref5
              : 0
          );

          // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
          if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
            throw new RangeError(
              "weekStartsOn must be between 0 and 6 inclusively"
            );
          }
          if (!locale.localize) {
            throw new RangeError("locale must contain localize property");
          }
          if (!locale.formatLong) {
            throw new RangeError("locale must contain formatLong property");
          }
          var originalDate = (0,
          _toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyDate);
          if (
            !(0, _isValid_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(
              originalDate
            )
          ) {
            throw new RangeError("Invalid time value");
          }

          // Convert the date in system currentTimeZone to the same date in UTC+00:00 currentTimeZone.
          // This ensures that when UTC functions will be implemented, locales will be compatible with them.
          // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376
          var currentTimeZoneOffset = (0,
          _lib_getcurrentTimeZoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ])(originalDate);
          var utcDate = (0,
          _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(
            originalDate,
            currentTimeZoneOffset
          );
          var formatterOptions = {
            firstWeekContainsDate: firstWeekContainsDate,
            weekStartsOn: weekStartsOn,
            locale: locale,
            _originalDate: originalDate,
          };
          var result = formatStr
            .match(longFormattingTokensRegExp)
            .map(function (substring) {
              var firstCharacter = substring[0];
              if (firstCharacter === "p" || firstCharacter === "P") {
                var longFormatter =
                  _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__[
                    "default"
                  ][firstCharacter];
                return longFormatter(substring, locale.formatLong);
              }
              return substring;
            })
            .join("")
            .match(formattingTokensRegExp)
            .map(function (substring) {
              // Replace two single quote characters with one single quote character
              if (substring === "''") {
                return "'";
              }
              var firstCharacter = substring[0];
              if (firstCharacter === "'") {
                return cleanEscapedString(substring);
              }
              var formatter =
                _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__[
                  "default"
                ][firstCharacter];
              if (formatter) {
                if (
                  !(
                    options !== null &&
                    options !== void 0 &&
                    options.useAdditionalWeekYearTokens
                  ) &&
                  (0,
                  _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedWeekYearToken)(
                    substring
                  )
                ) {
                  (0,
                  _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(
                    substring,
                    dirtyFormatStr,
                    String(dirtyDate)
                  );
                }
                if (
                  !(
                    options !== null &&
                    options !== void 0 &&
                    options.useAdditionalDayOfYearTokens
                  ) &&
                  (0,
                  _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedDayOfYearToken)(
                    substring
                  )
                ) {
                  (0,
                  _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(
                    substring,
                    dirtyFormatStr,
                    String(dirtyDate)
                  );
                }
                return formatter(
                  utcDate,
                  substring,
                  locale.localize,
                  formatterOptions
                );
              }
              if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
                throw new RangeError(
                  "Format string contains an unescaped latin alphabet character `" +
                    firstCharacter +
                    "`"
                );
              }
              return substring;
            })
            .join("");
          return result;
        }
        function cleanEscapedString(input) {
          var matched = input.match(escapedStringRegExp);
          if (!matched) {
            return input;
          }
          return matched[1].replace(doubleQuoteRegExp, "'");
        }

        /***/
      },

    /***/ "./node_modules/date-fns/esm/isDate/index.js":
      /*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ isDate,
          /* harmony export */
        });
        /* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js"
          );
        /* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js"
          );

        /**
         * @name isDate
         * @category Common Helpers
         * @summary Is the given value a date?
         *
         * @description
         * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
         *
         * @param {*} value - the value to check
         * @returns {boolean} true if the given value is a date
         * @throws {TypeError} 1 arguments required
         *
         * @example
         * // For a valid date:
         * const result = isDate(new Date())
         * //=> true
         *
         * @example
         * // For an invalid date:
         * const result = isDate(new Date(NaN))
         * //=> true
         *
         * @example
         * // For some value:
         * const result = isDate('2014-02-31')
         * //=> false
         *
         * @example
         * // For an object:
         * const result = isDate({})
         * //=> false
         */
        function isDate(value) {
          (0,
          _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
            1,
            arguments
          );
          return (
            value instanceof Date ||
            ((0,
            _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ])(value) === "object" &&
              Object.prototype.toString.call(value) === "[object Date]")
          );
        }

        /***/
      },

    /***/ "./node_modules/date-fns/esm/isValid/index.js":
      /*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ isValid,
          /* harmony export */
        });
        /* harmony import */ var _isDate_index_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../isDate/index.js */ "./node_modules/date-fns/esm/isDate/index.js"
          );
        /* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js"
          );
        /* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js"
          );

        /**
         * @name isValid
         * @category Common Helpers
         * @summary Is the given date valid?
         *
         * @description
         * Returns false if argument is Invalid Date and true otherwise.
         * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
         * Invalid Date is a Date, whose time value is NaN.
         *
         * Time value of Date: http://es5.github.io/#x15.9.1.1
         *
         * @param {*} date - the date to check
         * @returns {Boolean} the date is valid
         * @throws {TypeError} 1 argument required
         *
         * @example
         * // For the valid date:
         * const result = isValid(new Date(2014, 1, 31))
         * //=> true
         *
         * @example
         * // For the value, convertable into a date:
         * const result = isValid(1393804800000)
         * //=> true
         *
         * @example
         * // For the invalid date:
         * const result = isValid(new Date(''))
         * //=> false
         */
        function isValid(dirtyDate) {
          (0,
          _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
            1,
            arguments
          );
          if (
            !(0, _isDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
              dirtyDate
            ) &&
            typeof dirtyDate !== "number"
          ) {
            return false;
          }
          var date = (0,
          _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
          return !isNaN(Number(date));
        }

        /***/
      },

    /***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
      /*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ buildFormatLongFn,
          /* harmony export */
        });
        function buildFormatLongFn(args) {
          return function () {
            var options =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : {};
            // TODO: Remove String()
            var width = options.width
              ? String(options.width)
              : args.defaultWidth;
            var format = args.formats[width] || args.formats[args.defaultWidth];
            return format;
          };
        }

        /***/
      },

    /***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
      /*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ buildLocalizeFn,
          /* harmony export */
        });
        function buildLocalizeFn(args) {
          return function (dirtyIndex, options) {
            var context =
              options !== null && options !== void 0 && options.context
                ? String(options.context)
                : "standalone";
            var valuesArray;
            if (context === "formatting" && args.formattingValues) {
              var defaultWidth =
                args.defaultFormattingWidth || args.defaultWidth;
              var width =
                options !== null && options !== void 0 && options.width
                  ? String(options.width)
                  : defaultWidth;
              valuesArray =
                args.formattingValues[width] ||
                args.formattingValues[defaultWidth];
            } else {
              var _defaultWidth = args.defaultWidth;
              var _width =
                options !== null && options !== void 0 && options.width
                  ? String(options.width)
                  : args.defaultWidth;
              valuesArray = args.values[_width] || args.values[_defaultWidth];
            }
            var index = args.argumentCallback
              ? args.argumentCallback(dirtyIndex)
              : dirtyIndex;
            // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
            return valuesArray[index];
          };
        }

        /***/
      },

    /***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ buildMatchFn,
          /* harmony export */
        });
        function buildMatchFn(args) {
          return function (string) {
            var options =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : {};
            var width = options.width;
            var matchPattern =
              (width && args.matchPatterns[width]) ||
              args.matchPatterns[args.defaultMatchWidth];
            var matchResult = string.match(matchPattern);
            if (!matchResult) {
              return null;
            }
            var matchedString = matchResult[0];
            var parsePatterns =
              (width && args.parsePatterns[width]) ||
              args.parsePatterns[args.defaultParseWidth];
            var key = Array.isArray(parsePatterns)
              ? findIndex(parsePatterns, function (pattern) {
                  return pattern.test(matchedString);
                })
              : findKey(parsePatterns, function (pattern) {
                  return pattern.test(matchedString);
                });
            var value;
            value = args.valueCallback ? args.valueCallback(key) : key;
            value = options.valueCallback
              ? options.valueCallback(value)
              : value;
            var rest = string.slice(matchedString.length);
            return {
              value: value,
              rest: rest,
            };
          };
        }
        function findKey(object, predicate) {
          for (var key in object) {
            if (object.hasOwnProperty(key) && predicate(object[key])) {
              return key;
            }
          }
          return undefined;
        }
        function findIndex(array, predicate) {
          for (var key = 0; key < array.length; key++) {
            if (predicate(array[key])) {
              return key;
            }
          }
          return undefined;
        }

        /***/
      },

    /***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ buildMatchPatternFn,
          /* harmony export */
        });
        function buildMatchPatternFn(args) {
          return function (string) {
            var options =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : {};
            var matchResult = string.match(args.matchPattern);
            if (!matchResult) return null;
            var matchedString = matchResult[0];
            var parseResult = string.match(args.parsePattern);
            if (!parseResult) return null;
            var value = args.valueCallback
              ? args.valueCallback(parseResult[0])
              : parseResult[0];
            value = options.valueCallback
              ? options.valueCallback(value)
              : value;
            var rest = string.slice(matchedString.length);
            return {
              value: value,
              rest: rest,
            };
          };
        }

        /***/
      },

    /***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
      /*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        var formatDistanceLocale = {
          lessThanXSeconds: {
            one: "less than a second",
            other: "less than {{count}} seconds",
          },
          xSeconds: {
            one: "1 second",
            other: "{{count}} seconds",
          },
          halfAMinute: "half a minute",
          lessThanXMinutes: {
            one: "less than a minute",
            other: "less than {{count}} minutes",
          },
          xMinutes: {
            one: "1 minute",
            other: "{{count}} minutes",
          },
          aboutXHours: {
            one: "about 1 hour",
            other: "about {{count}} hours",
          },
          xHours: {
            one: "1 hour",
            other: "{{count}} hours",
          },
          xDays: {
            one: "1 day",
            other: "{{count}} days",
          },
          aboutXWeeks: {
            one: "about 1 week",
            other: "about {{count}} weeks",
          },
          xWeeks: {
            one: "1 week",
            other: "{{count}} weeks",
          },
          aboutXMonths: {
            one: "about 1 month",
            other: "about {{count}} months",
          },
          xMonths: {
            one: "1 month",
            other: "{{count}} months",
          },
          aboutXYears: {
            one: "about 1 year",
            other: "about {{count}} years",
          },
          xYears: {
            one: "1 year",
            other: "{{count}} years",
          },
          overXYears: {
            one: "over 1 year",
            other: "over {{count}} years",
          },
          almostXYears: {
            one: "almost 1 year",
            other: "almost {{count}} years",
          },
        };
        var formatDistance = function formatDistance(token, count, options) {
          var result;
          var tokenValue = formatDistanceLocale[token];
          if (typeof tokenValue === "string") {
            result = tokenValue;
          } else if (count === 1) {
            result = tokenValue.one;
          } else {
            result = tokenValue.other.replace("{{count}}", count.toString());
          }
          if (options !== null && options !== void 0 && options.addSuffix) {
            if (options.comparison && options.comparison > 0) {
              return "in " + result;
            } else {
              return result + " ago";
            }
          }
          return result;
        };
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          formatDistance;

        /***/
      },

    /***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
      /*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js"
          );

        var dateFormats = {
          full: "EEEE, MMMM do, y",
          long: "MMMM do, y",
          medium: "MMM d, y",
          short: "MM/dd/yyyy",
        };
        var timeFormats = {
          full: "h:mm:ss a zzzz",
          long: "h:mm:ss a z",
          medium: "h:mm:ss a",
          short: "h:mm a",
        };
        var dateTimeFormats = {
          full: "{{date}} 'at' {{time}}",
          long: "{{date}} 'at' {{time}}",
          medium: "{{date}}, {{time}}",
          short: "{{date}}, {{time}}",
        };
        var formatLong = {
          date: (0,
          _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__[
            "default"
          ])({
            formats: dateFormats,
            defaultWidth: "full",
          }),
          time: (0,
          _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__[
            "default"
          ])({
            formats: timeFormats,
            defaultWidth: "full",
          }),
          dateTime: (0,
          _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__[
            "default"
          ])({
            formats: dateTimeFormats,
            defaultWidth: "full",
          }),
        };
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          formatLong;

        /***/
      },

    /***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
      /*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        var formatRelativeLocale = {
          lastWeek: "'last' eeee 'at' p",
          yesterday: "'yesterday at' p",
          today: "'today at' p",
          tomorrow: "'tomorrow at' p",
          nextWeek: "eeee 'at' p",
          other: "P",
        };
        var formatRelative = function formatRelative(
          token,
          _date,
          _baseDate,
          _options
        ) {
          return formatRelativeLocale[token];
        };
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          formatRelative;

        /***/
      },

    /***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
      /*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js"
          );

        var eraValues = {
          narrow: ["B", "A"],
          abbreviated: ["BC", "AD"],
          wide: ["Before Christ", "Anno Domini"],
        };
        var quarterValues = {
          narrow: ["1", "2", "3", "4"],
          abbreviated: ["Q1", "Q2", "Q3", "Q4"],
          wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
        };

        // Note: in English, the names of days of the week and months are capitalized.
        // If you are making a new locale based on this one, check if the same is true for the language you're working on.
        // Generally, formatted dates should look like they are in the middle of a sentence,
        // e.g. in Spanish language the weekdays and months should be in the lowercase.
        var monthValues = {
          narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
          abbreviated: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          wide: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
        };
        var dayValues = {
          narrow: ["S", "M", "T", "W", "T", "F", "S"],
          short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
          abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          wide: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
        };
        var dayPeriodValues = {
          narrow: {
            am: "a",
            pm: "p",
            midnight: "mi",
            noon: "n",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night",
          },
          abbreviated: {
            am: "AM",
            pm: "PM",
            midnight: "midnight",
            noon: "noon",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night",
          },
          wide: {
            am: "a.m.",
            pm: "p.m.",
            midnight: "midnight",
            noon: "noon",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night",
          },
        };
        var formattingDayPeriodValues = {
          narrow: {
            am: "a",
            pm: "p",
            midnight: "mi",
            noon: "n",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night",
          },
          abbreviated: {
            am: "AM",
            pm: "PM",
            midnight: "midnight",
            noon: "noon",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night",
          },
          wide: {
            am: "a.m.",
            pm: "p.m.",
            midnight: "midnight",
            noon: "noon",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night",
          },
        };
        var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
          var number = Number(dirtyNumber);

          // If ordinal numbers depend on context, for example,
          // if they are different for different grammatical genders,
          // use `options.unit`.
          //
          // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
          // 'day', 'hour', 'minute', 'second'.

          var rem100 = number % 100;
          if (rem100 > 20 || rem100 < 10) {
            switch (rem100 % 10) {
              case 1:
                return number + "st";
              case 2:
                return number + "nd";
              case 3:
                return number + "rd";
            }
          }
          return number + "th";
        };
        var localize = {
          ordinalNumber: ordinalNumber,
          era: (0,
          _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__[
            "default"
          ])({
            values: eraValues,
            defaultWidth: "wide",
          }),
          quarter: (0,
          _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__[
            "default"
          ])({
            values: quarterValues,
            defaultWidth: "wide",
            argumentCallback: function argumentCallback(quarter) {
              return quarter - 1;
            },
          }),
          month: (0,
          _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__[
            "default"
          ])({
            values: monthValues,
            defaultWidth: "wide",
          }),
          day: (0,
          _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__[
            "default"
          ])({
            values: dayValues,
            defaultWidth: "wide",
          }),
          dayPeriod: (0,
          _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__[
            "default"
          ])({
            values: dayPeriodValues,
            defaultWidth: "wide",
            formattingValues: formattingDayPeriodValues,
            defaultFormattingWidth: "wide",
          }),
        };
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          localize;

        /***/
      },

    /***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
      /*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js"
          );
        /* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js"
          );

        var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
        var parseOrdinalNumberPattern = /\d+/i;
        var matchEraPatterns = {
          narrow: /^(b|a)/i,
          abbreviated:
            /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
          wide: /^(before christ|before common era|anno domini|common era)/i,
        };
        var parseEraPatterns = {
          any: [/^b/i, /^(a|c)/i],
        };
        var matchQuarterPatterns = {
          narrow: /^[1234]/i,
          abbreviated: /^q[1234]/i,
          wide: /^[1234](th|st|nd|rd)? quarter/i,
        };
        var parseQuarterPatterns = {
          any: [/1/i, /2/i, /3/i, /4/i],
        };
        var matchMonthPatterns = {
          narrow: /^[jfmasond]/i,
          abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
          wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
        };
        var parseMonthPatterns = {
          narrow: [
            /^j/i,
            /^f/i,
            /^m/i,
            /^a/i,
            /^m/i,
            /^j/i,
            /^j/i,
            /^a/i,
            /^s/i,
            /^o/i,
            /^n/i,
            /^d/i,
          ],
          any: [
            /^ja/i,
            /^f/i,
            /^mar/i,
            /^ap/i,
            /^may/i,
            /^jun/i,
            /^jul/i,
            /^au/i,
            /^s/i,
            /^o/i,
            /^n/i,
            /^d/i,
          ],
        };
        var matchDayPatterns = {
          narrow: /^[smtwf]/i,
          short: /^(su|mo|tu|we|th|fr|sa)/i,
          abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
          wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
        };
        var parseDayPatterns = {
          narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
          any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
        };
        var matchDayPeriodPatterns = {
          narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
          any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
        };
        var parseDayPeriodPatterns = {
          any: {
            am: /^a/i,
            pm: /^p/i,
            midnight: /^mi/i,
            noon: /^no/i,
            morning: /morning/i,
            afternoon: /afternoon/i,
            evening: /evening/i,
            night: /night/i,
          },
        };
        var match = {
          ordinalNumber: (0,
          _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__[
            "default"
          ])({
            matchPattern: matchOrdinalNumberPattern,
            parsePattern: parseOrdinalNumberPattern,
            valueCallback: function valueCallback(value) {
              return parseInt(value, 10);
            },
          }),
          era: (0,
          _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
            matchPatterns: matchEraPatterns,
            defaultMatchWidth: "wide",
            parsePatterns: parseEraPatterns,
            defaultParseWidth: "any",
          }),
          quarter: (0,
          _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
            matchPatterns: matchQuarterPatterns,
            defaultMatchWidth: "wide",
            parsePatterns: parseQuarterPatterns,
            defaultParseWidth: "any",
            valueCallback: function valueCallback(index) {
              return index + 1;
            },
          }),
          month: (0,
          _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
            matchPatterns: matchMonthPatterns,
            defaultMatchWidth: "wide",
            parsePatterns: parseMonthPatterns,
            defaultParseWidth: "any",
          }),
          day: (0,
          _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
            matchPatterns: matchDayPatterns,
            defaultMatchWidth: "wide",
            parsePatterns: parseDayPatterns,
            defaultParseWidth: "any",
          }),
          dayPeriod: (0,
          _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
            matchPatterns: matchDayPeriodPatterns,
            defaultMatchWidth: "any",
            parsePatterns: parseDayPeriodPatterns,
            defaultParseWidth: "any",
          }),
        };
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = match;

        /***/
      },

    /***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
      /*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js"
          );
        /* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js"
          );
        /* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js"
          );
        /* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js"
          );
        /* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js"
          );

        /**
         * @type {Locale}
         * @category Locales
         * @summary English locale (United States).
         * @language English
         * @iso-639-2 eng
         * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
         * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
         */
        var locale = {
          code: "en-US",
          formatDistance:
            _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ],
          formatLong:
            _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
          formatRelative:
            _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__[
              "default"
            ],
          localize:
            _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
          match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
          options: {
            weekStartsOn: 0 /* Sunday */,
            firstWeekContainsDate: 1,
          },
        };
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = locale;

        /***/
      },

    /***/ "./node_modules/date-fns/esm/parse/_lib/Parser.js":
      /*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/Parser.js ***!
  \********************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ Parser: () => /* binding */ Parser,
          /* harmony export */
        });
        /* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js"
          );
        /* harmony import */ var _Setter_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ./Setter.js */ "./node_modules/date-fns/esm/parse/_lib/Setter.js"
          );

        var Parser = /*#__PURE__*/ (function () {
          function Parser() {
            (0,
            _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ])(this, Parser);
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[
              "default"
            ])(this, "incompatibleTokens", void 0);
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[
              "default"
            ])(this, "priority", void 0);
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[
              "default"
            ])(this, "subPriority", void 0);
          }
          (0,
          _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[
            "default"
          ])(Parser, [
            {
              key: "run",
              value: function run(dateString, token, match, options) {
                var result = this.parse(dateString, token, match, options);
                if (!result) {
                  return null;
                }
                return {
                  setter:
                    new _Setter_js__WEBPACK_IMPORTED_MODULE_3__.ValueSetter(
                      result.value,
                      this.validate,
                      this.set,
                      this.priority,
                      this.subPriority
                    ),
                  rest: result.rest,
                };
              },
            },
            {
              key: "validate",
              value: function validate(_utcDate, _value, _options) {
                return true;
              },
            },
          ]);
          return Parser;
        })();

        /***/
      },

    /***/ "./node_modules/date-fns/esm/parse/_lib/Setter.js":
      /*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/Setter.js ***!
  \********************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ DateToSystemcurrentTimeZoneSetter: () =>
            /* binding */ DateToSystemcurrentTimeZoneSetter,
          /* harmony export */ Setter: () => /* binding */ Setter,
          /* harmony export */ ValueSetter: () => /* binding */ ValueSetter,
          /* harmony export */
        });
        /* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js"
          );

        var currentTimeZone_UNIT_PRIORITY = 10;
        var Setter = /*#__PURE__*/ (function () {
          function Setter() {
            (0,
            _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[
              "default"
            ])(this, Setter);
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(this, "priority", void 0);
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(this, "subPriority", 0);
          }
          (0,
          _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[
            "default"
          ])(Setter, [
            {
              key: "validate",
              value: function validate(_utcDate, _options) {
                return true;
              },
            },
          ]);
          return Setter;
        })();
        var ValueSetter = /*#__PURE__*/ (function (_Setter) {
          (0,
          _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__[
            "default"
          ])(ValueSetter, _Setter);
          var _super = (0,
          _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__[
            "default"
          ])(ValueSetter);
          function ValueSetter(
            value,
            validateValue,
            setValue,
            priority,
            subPriority
          ) {
            var _this;
            (0,
            _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[
              "default"
            ])(this, ValueSetter);
            _this = _super.call(this);
            _this.value = value;
            _this.validateValue = validateValue;
            _this.setValue = setValue;
            _this.priority = priority;
            if (subPriority) {
              _this.subPriority = subPriority;
            }
            return _this;
          }
          (0,
          _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[
            "default"
          ])(ValueSetter, [
            {
              key: "validate",
              value: function validate(utcDate, options) {
                return this.validateValue(utcDate, this.value, options);
              },
            },
            {
              key: "set",
              value: function set(utcDate, flags, options) {
                return this.setValue(utcDate, flags, this.value, options);
              },
            },
          ]);
          return ValueSetter;
        })(Setter);
        var DateToSystemcurrentTimeZoneSetter = /*#__PURE__*/ (function (
          _Setter2
        ) {
          (0,
          _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__[
            "default"
          ])(DateToSystemcurrentTimeZoneSetter, _Setter2);
          var _super2 = (0,
          _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__[
            "default"
          ])(DateToSystemcurrentTimeZoneSetter);
          function DateToSystemcurrentTimeZoneSetter() {
            var _this2;
            (0,
            _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[
              "default"
            ])(this, DateToSystemcurrentTimeZoneSetter);
            for (
              var _len = arguments.length, args = new Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }
            _this2 = _super2.call.apply(_super2, [this].concat(args));
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__[
                "default"
              ])(_this2),
              "priority",
              currentTimeZone_UNIT_PRIORITY
            );
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__[
                "default"
              ])(_this2),
              "subPriority",
              -1
            );
            return _this2;
          }
          (0,
          _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[
            "default"
          ])(DateToSystemcurrentTimeZoneSetter, [
            {
              key: "set",
              value: function set(date, flags) {
                if (flags.timestampIsSet) {
                  return date;
                }
                var convertedDate = new Date(0);
                convertedDate.setFullYear(
                  date.getUTCFullYear(),
                  date.getUTCMonth(),
                  date.getUTCDate()
                );
                convertedDate.setHours(
                  date.getUTCHours(),
                  date.getUTCMinutes(),
                  date.getUTCSeconds(),
                  date.getUTCMilliseconds()
                );
                return convertedDate;
              },
            },
          ]);
          return DateToSystemcurrentTimeZoneSetter;
        })(Setter);

        /***/
      },

    /***/ "./node_modules/date-fns/esm/parse/_lib/constants.js":
      /*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/constants.js ***!
  \***********************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ numericPatterns: () =>
            /* binding */ numericPatterns,
          /* harmony export */ currentTimeZonePatterns: () =>
            /* binding */ currentTimeZonePatterns,
          /* harmony export */
        });
        var numericPatterns = {
          month: /^(1[0-2]|0?\d)/,
          // 0 to 12
          date: /^(3[0-1]|[0-2]?\d)/,
          // 0 to 31
          dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
          // 0 to 366
          week: /^(5[0-3]|[0-4]?\d)/,
          // 0 to 53
          hour23h: /^(2[0-3]|[0-1]?\d)/,
          // 0 to 23
          hour24h: /^(2[0-4]|[0-1]?\d)/,
          // 0 to 24
          hour11h: /^(1[0-1]|0?\d)/,
          // 0 to 11
          hour12h: /^(1[0-2]|0?\d)/,
          // 0 to 12
          minute: /^[0-5]?\d/,
          // 0 to 59
          second: /^[0-5]?\d/,
          // 0 to 59

          singleDigit: /^\d/,
          // 0 to 9
          twoDigits: /^\d{1,2}/,
          // 0 to 99
          threeDigits: /^\d{1,3}/,
          // 0 to 999
          fourDigits: /^\d{1,4}/,
          // 0 to 9999

          anyDigitsSigned: /^-?\d+/,
          singleDigitSigned: /^-?\d/,
          // 0 to 9, -0 to -9
          twoDigitsSigned: /^-?\d{1,2}/,
          // 0 to 99, -0 to -99
          threeDigitsSigned: /^-?\d{1,3}/,
          // 0 to 999, -0 to -999
          fourDigitsSigned: /^-?\d{1,4}/, // 0 to 9999, -0 to -9999
        };

        var currentTimeZonePatterns = {
          basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
          basic: /^([+-])(\d{2})(\d{2})|Z/,
          basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
          extended: /^([+-])(\d{2}):(\d{2})|Z/,
          extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/,
        };

        /***/
      },

    /***/ "./node_modules/date-fns/esm/parse/_lib/parsers/AMPMMidnightParser.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/AMPMMidnightParser.js ***!
  \****************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ AMPMMidnightParser: () =>
            /* binding */ AMPMMidnightParser,
          /* harmony export */
        });
        /* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js"
          );
        /* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../Parser.js */ "./node_modules/date-fns/esm/parse/_lib/Parser.js"
          );
        /* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../utils.js */ "./node_modules/date-fns/esm/parse/_lib/utils.js"
          );

        var AMPMMidnightParser = /*#__PURE__*/ (function (_Parser) {
          (0,
          _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[
            "default"
          ])(AMPMMidnightParser, _Parser);
          var _super = (0,
          _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[
            "default"
          ])(AMPMMidnightParser);
          function AMPMMidnightParser() {
            var _this;
            (0,
            _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ])(this, AMPMMidnightParser);
            for (
              var _len = arguments.length, args = new Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }
            _this = _super.call.apply(_super, [this].concat(args));
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(_this),
              "priority",
              80
            );
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(_this),
              "incompatibleTokens",
              ["a", "B", "H", "k", "t", "T"]
            );
            return _this;
          }
          (0,
          _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[
            "default"
          ])(AMPMMidnightParser, [
            {
              key: "parse",
              value: function parse(dateString, token, match) {
                switch (token) {
                  case "b":
                  case "bb":
                  case "bbb":
                    return (
                      match.dayPeriod(dateString, {
                        width: "abbreviated",
                        context: "formatting",
                      }) ||
                      match.dayPeriod(dateString, {
                        width: "narrow",
                        context: "formatting",
                      })
                    );
                  case "bbbbb":
                    return match.dayPeriod(dateString, {
                      width: "narrow",
                      context: "formatting",
                    });
                  case "bbbb":
                  default:
                    return (
                      match.dayPeriod(dateString, {
                        width: "wide",
                        context: "formatting",
                      }) ||
                      match.dayPeriod(dateString, {
                        width: "abbreviated",
                        context: "formatting",
                      }) ||
                      match.dayPeriod(dateString, {
                        width: "narrow",
                        context: "formatting",
                      })
                    );
                }
              },
            },
            {
              key: "set",
              value: function set(date, _flags, value) {
                date.setUTCHours(
                  (0,
                  _utils_js__WEBPACK_IMPORTED_MODULE_6__.dayPeriodEnumToHours)(
                    value
                  ),
                  0,
                  0,
                  0
                );
                return date;
              },
            },
          ]);
          return AMPMMidnightParser;
        })(_Parser_js__WEBPACK_IMPORTED_MODULE_7__.Parser);

        /***/
      },

    /***/ "./node_modules/date-fns/esm/parse/_lib/parsers/AMPMParser.js":
      /*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/AMPMParser.js ***!
  \********************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ AMPMParser: () => /* binding */ AMPMParser,
          /* harmony export */
        });
        /* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js"
          );
        /* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../Parser.js */ "./node_modules/date-fns/esm/parse/_lib/Parser.js"
          );
        /* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../utils.js */ "./node_modules/date-fns/esm/parse/_lib/utils.js"
          );

        var AMPMParser = /*#__PURE__*/ (function (_Parser) {
          (0,
          _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[
            "default"
          ])(AMPMParser, _Parser);
          var _super = (0,
          _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[
            "default"
          ])(AMPMParser);
          function AMPMParser() {
            var _this;
            (0,
            _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ])(this, AMPMParser);
            for (
              var _len = arguments.length, args = new Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }
            _this = _super.call.apply(_super, [this].concat(args));
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(_this),
              "priority",
              80
            );
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(_this),
              "incompatibleTokens",
              ["b", "B", "H", "k", "t", "T"]
            );
            return _this;
          }
          (0,
          _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[
            "default"
          ])(AMPMParser, [
            {
              key: "parse",
              value: function parse(dateString, token, match) {
                switch (token) {
                  case "a":
                  case "aa":
                  case "aaa":
                    return (
                      match.dayPeriod(dateString, {
                        width: "abbreviated",
                        context: "formatting",
                      }) ||
                      match.dayPeriod(dateString, {
                        width: "narrow",
                        context: "formatting",
                      })
                    );
                  case "aaaaa":
                    return match.dayPeriod(dateString, {
                      width: "narrow",
                      context: "formatting",
                    });
                  case "aaaa":
                  default:
                    return (
                      match.dayPeriod(dateString, {
                        width: "wide",
                        context: "formatting",
                      }) ||
                      match.dayPeriod(dateString, {
                        width: "abbreviated",
                        context: "formatting",
                      }) ||
                      match.dayPeriod(dateString, {
                        width: "narrow",
                        context: "formatting",
                      })
                    );
                }
              },
            },
            {
              key: "set",
              value: function set(date, _flags, value) {
                date.setUTCHours(
                  (0,
                  _utils_js__WEBPACK_IMPORTED_MODULE_6__.dayPeriodEnumToHours)(
                    value
                  ),
                  0,
                  0,
                  0
                );
                return date;
              },
            },
          ]);
          return AMPMParser;
        })(_Parser_js__WEBPACK_IMPORTED_MODULE_7__.Parser);

        /***/
      },

    /***/ "./node_modules/date-fns/esm/parse/_lib/parsers/DateParser.js":
      /*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/DateParser.js ***!
  \********************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ DateParser: () => /* binding */ DateParser,
          /* harmony export */
        });
        /* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js"
          );
        /* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../utils.js */ "./node_modules/date-fns/esm/parse/_lib/utils.js"
          );
        /* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ../Parser.js */ "./node_modules/date-fns/esm/parse/_lib/Parser.js"
          );
        /* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../constants.js */ "./node_modules/date-fns/esm/parse/_lib/constants.js"
          );

        var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        var DAYS_IN_MONTH_LEAP_YEAR = [
          31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,
        ];

        // Day of the month
        var DateParser = /*#__PURE__*/ (function (_Parser) {
          (0,
          _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[
            "default"
          ])(DateParser, _Parser);
          var _super = (0,
          _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[
            "default"
          ])(DateParser);
          function DateParser() {
            var _this;
            (0,
            _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ])(this, DateParser);
            for (
              var _len = arguments.length, args = new Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }
            _this = _super.call.apply(_super, [this].concat(args));
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(_this),
              "priority",
              90
            );
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(_this),
              "subPriority",
              1
            );
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(_this),
              "incompatibleTokens",
              ["Y", "R", "q", "Q", "w", "I", "D", "i", "e", "c", "t", "T"]
            );
            return _this;
          }
          (0,
          _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[
            "default"
          ])(DateParser, [
            {
              key: "parse",
              value: function parse(dateString, token, match) {
                switch (token) {
                  case "d":
                    return (0,
                    _utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNumericPattern)(
                      _constants_js__WEBPACK_IMPORTED_MODULE_7__.numericPatterns
                        .date,
                      dateString
                    );
                  case "do":
                    return match.ordinalNumber(dateString, {
                      unit: "date",
                    });
                  default:
                    return (0,
                    _utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNDigits)(
                      token.length,
                      dateString
                    );
                }
              },
            },
            {
              key: "validate",
              value: function validate(date, value) {
                var year = date.getUTCFullYear();
                var isLeapYear = (0,
                _utils_js__WEBPACK_IMPORTED_MODULE_6__.isLeapYearIndex)(year);
                var month = date.getUTCMonth();
                if (isLeapYear) {
                  return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR[month];
                } else {
                  return value >= 1 && value <= DAYS_IN_MONTH[month];
                }
              },
            },
            {
              key: "set",
              value: function set(date, _flags, value) {
                date.setUTCDate(value);
                date.setUTCHours(0, 0, 0, 0);
                return date;
              },
            },
          ]);
          return DateParser;
        })(_Parser_js__WEBPACK_IMPORTED_MODULE_8__.Parser);

        /***/
      },

    /***/ "./node_modules/date-fns/esm/parse/_lib/parsers/DayOfYearParser.js":
      /*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/DayOfYearParser.js ***!
  \*************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ DayOfYearParser: () =>
            /* binding */ DayOfYearParser,
          /* harmony export */
        });
        /* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js"
          );
        /* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ../Parser.js */ "./node_modules/date-fns/esm/parse/_lib/Parser.js"
          );
        /* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../constants.js */ "./node_modules/date-fns/esm/parse/_lib/constants.js"
          );
        /* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../utils.js */ "./node_modules/date-fns/esm/parse/_lib/utils.js"
          );

        var DayOfYearParser = /*#__PURE__*/ (function (_Parser) {
          (0,
          _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[
            "default"
          ])(DayOfYearParser, _Parser);
          var _super = (0,
          _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[
            "default"
          ])(DayOfYearParser);
          function DayOfYearParser() {
            var _this;
            (0,
            _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ])(this, DayOfYearParser);
            for (
              var _len = arguments.length, args = new Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }
            _this = _super.call.apply(_super, [this].concat(args));
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(_this),
              "priority",
              90
            );
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(_this),
              "subpriority",
              1
            );
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(_this),
              "incompatibleTokens",
              [
                "Y",
                "R",
                "q",
                "Q",
                "M",
                "L",
                "w",
                "I",
                "d",
                "E",
                "i",
                "e",
                "c",
                "t",
                "T",
              ]
            );
            return _this;
          }
          (0,
          _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[
            "default"
          ])(DayOfYearParser, [
            {
              key: "parse",
              value: function parse(dateString, token, match) {
                switch (token) {
                  case "D":
                  case "DD":
                    return (0,
                    _utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNumericPattern)(
                      _constants_js__WEBPACK_IMPORTED_MODULE_7__.numericPatterns
                        .dayOfYear,
                      dateString
                    );
                  case "Do":
                    return match.ordinalNumber(dateString, {
                      unit: "date",
                    });
                  default:
                    return (0,
                    _utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNDigits)(
                      token.length,
                      dateString
                    );
                }
              },
            },
            {
              key: "validate",
              value: function validate(date, value) {
                var year = date.getUTCFullYear();
                var isLeapYear = (0,
                _utils_js__WEBPACK_IMPORTED_MODULE_6__.isLeapYearIndex)(year);
                if (isLeapYear) {
                  return value >= 1 && value <= 366;
                } else {
                  return value >= 1 && value <= 365;
                }
              },
            },
            {
              key: "set",
              value: function set(date, _flags, value) {
                date.setUTCMonth(0, value);
                date.setUTCHours(0, 0, 0, 0);
                return date;
              },
            },
          ]);
          return DayOfYearParser;
        })(_Parser_js__WEBPACK_IMPORTED_MODULE_8__.Parser);

        /***/
      },

    /***/ "./node_modules/date-fns/esm/parse/_lib/parsers/DayParser.js":
      /*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/DayParser.js ***!
  \*******************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ DayParser: () => /* binding */ DayParser,
          /* harmony export */
        });
        /* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js"
          );
        /* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../Parser.js */ "./node_modules/date-fns/esm/parse/_lib/Parser.js"
          );
        /* harmony import */ var _lib_setUTCDay_index_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../../../_lib/setUTCDay/index.js */ "./node_modules/date-fns/esm/_lib/setUTCDay/index.js"
          );

        // Day of week
        var DayParser = /*#__PURE__*/ (function (_Parser) {
          (0,
          _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[
            "default"
          ])(DayParser, _Parser);
          var _super = (0,
          _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[
            "default"
          ])(DayParser);
          function DayParser() {
            var _this;
            (0,
            _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ])(this, DayParser);
            for (
              var _len = arguments.length, args = new Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }
            _this = _super.call.apply(_super, [this].concat(args));
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(_this),
              "priority",
              90
            );
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(_this),
              "incompatibleTokens",
              ["D", "i", "e", "c", "t", "T"]
            );
            return _this;
          }
          (0,
          _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[
            "default"
          ])(DayParser, [
            {
              key: "parse",
              value: function parse(dateString, token, match) {
                switch (token) {
                  // Tue
                  case "E":
                  case "EE":
                  case "EEE":
                    return (
                      match.day(dateString, {
                        width: "abbreviated",
                        context: "formatting",
                      }) ||
                      match.day(dateString, {
                        width: "short",
                        context: "formatting",
                      }) ||
                      match.day(dateString, {
                        width: "narrow",
                        context: "formatting",
                      })
                    );
                  // T
                  case "EEEEE":
                    return match.day(dateString, {
                      width: "narrow",
                      context: "formatting",
                    });
                  // Tu
                  case "EEEEEE":
                    return (
                      match.day(dateString, {
                        width: "short",
                        context: "formatting",
                      }) ||
                      match.day(dateString, {
                        width: "narrow",
                        context: "formatting",
                      })
                    );
                  // Tuesday
                  case "EEEE":
                  default:
                    return (
                      match.day(dateString, {
                        width: "wide",
                        context: "formatting",
                      }) ||
                      match.day(dateString, {
                        width: "abbreviated",
                        context: "formatting",
                      }) ||
                      match.day(dateString, {
                        width: "short",
                        context: "formatting",
                      }) ||
                      match.day(dateString, {
                        width: "narrow",
                        context: "formatting",
                      })
                    );
                }
              },
            },
            {
              key: "validate",
              value: function validate(_date, value) {
                return value >= 0 && value <= 6;
              },
            },
            {
              key: "set",
              value: function set(date, _flags, value, options) {
                date = (0,
                _lib_setUTCDay_index_js__WEBPACK_IMPORTED_MODULE_6__[
                  "default"
                ])(date, value, options);
                date.setUTCHours(0, 0, 0, 0);
                return date;
              },
            },
          ]);
          return DayParser;
        })(_Parser_js__WEBPACK_IMPORTED_MODULE_7__.Parser);

        /***/
      },

    /***/ "./node_modules/date-fns/esm/parse/_lib/parsers/DayPeriodParser.js":
      /*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/DayPeriodParser.js ***!
  \*************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ DayPeriodParser: () =>
            /* binding */ DayPeriodParser,
          /* harmony export */
        });
        /* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js"
          );
        /* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../Parser.js */ "./node_modules/date-fns/esm/parse/_lib/Parser.js"
          );
        /* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../utils.js */ "./node_modules/date-fns/esm/parse/_lib/utils.js"
          );

        // in the morning, in the afternoon, in the evening, at night
        var DayPeriodParser = /*#__PURE__*/ (function (_Parser) {
          (0,
          _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[
            "default"
          ])(DayPeriodParser, _Parser);
          var _super = (0,
          _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[
            "default"
          ])(DayPeriodParser);
          function DayPeriodParser() {
            var _this;
            (0,
            _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ])(this, DayPeriodParser);
            for (
              var _len = arguments.length, args = new Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }
            _this = _super.call.apply(_super, [this].concat(args));
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(_this),
              "priority",
              80
            );
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(_this),
              "incompatibleTokens",
              ["a", "b", "t", "T"]
            );
            return _this;
          }
          (0,
          _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[
            "default"
          ])(DayPeriodParser, [
            {
              key: "parse",
              value: function parse(dateString, token, match) {
                switch (token) {
                  case "B":
                  case "BB":
                  case "BBB":
                    return (
                      match.dayPeriod(dateString, {
                        width: "abbreviated",
                        context: "formatting",
                      }) ||
                      match.dayPeriod(dateString, {
                        width: "narrow",
                        context: "formatting",
                      })
                    );
                  case "BBBBB":
                    return match.dayPeriod(dateString, {
                      width: "narrow",
                      context: "formatting",
                    });
                  case "BBBB":
                  default:
                    return (
                      match.dayPeriod(dateString, {
                        width: "wide",
                        context: "formatting",
                      }) ||
                      match.dayPeriod(dateString, {
                        width: "abbreviated",
                        context: "formatting",
                      }) ||
                      match.dayPeriod(dateString, {
                        width: "narrow",
                        context: "formatting",
                      })
                    );
                }
              },
            },
            {
              key: "set",
              value: function set(date, _flags, value) {
                date.setUTCHours(
                  (0,
                  _utils_js__WEBPACK_IMPORTED_MODULE_6__.dayPeriodEnumToHours)(
                    value
                  ),
                  0,
                  0,
                  0
                );
                return date;
              },
            },
          ]);
          return DayPeriodParser;
        })(_Parser_js__WEBPACK_IMPORTED_MODULE_7__.Parser);

        /***/
      },

    /***/ "./node_modules/date-fns/esm/parse/_lib/parsers/EraParser.js":
      /*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/EraParser.js ***!
  \*******************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ EraParser: () => /* binding */ EraParser,
          /* harmony export */
        });
        /* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js"
          );
        /* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../Parser.js */ "./node_modules/date-fns/esm/parse/_lib/Parser.js"
          );

        var EraParser = /*#__PURE__*/ (function (_Parser) {
          (0,
          _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[
            "default"
          ])(EraParser, _Parser);
          var _super = (0,
          _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[
            "default"
          ])(EraParser);
          function EraParser() {
            var _this;
            (0,
            _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ])(this, EraParser);
            for (
              var _len = arguments.length, args = new Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }
            _this = _super.call.apply(_super, [this].concat(args));
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(_this),
              "priority",
              140
            );
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(_this),
              "incompatibleTokens",
              ["R", "u", "t", "T"]
            );
            return _this;
          }
          (0,
          _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[
            "default"
          ])(EraParser, [
            {
              key: "parse",
              value: function parse(dateString, token, match) {
                switch (token) {
                  // AD, BC
                  case "G":
                  case "GG":
                  case "GGG":
                    return (
                      match.era(dateString, {
                        width: "abbreviated",
                      }) ||
                      match.era(dateString, {
                        width: "narrow",
                      })
                    );
                  // A, B
                  case "GGGGG":
                    return match.era(dateString, {
                      width: "narrow",
                    });
                  // Anno Domini, Before Christ
                  case "GGGG":
                  default:
                    return (
                      match.era(dateString, {
                        width: "wide",
                      }) ||
                      match.era(dateString, {
                        width: "abbreviated",
                      }) ||
                      match.era(dateString, {
                        width: "narrow",
                      })
                    );
                }
              },
            },
            {
              key: "set",
              value: function set(date, flags, value) {
                flags.era = value;
                date.setUTCFullYear(value, 0, 1);
                date.setUTCHours(0, 0, 0, 0);
                return date;
              },
            },
          ]);
          return EraParser;
        })(_Parser_js__WEBPACK_IMPORTED_MODULE_6__.Parser);

        /***/
      },

    /***/ "./node_modules/date-fns/esm/parse/_lib/parsers/ExtendedYearParser.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/ExtendedYearParser.js ***!
  \****************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ ExtendedYearParser: () =>
            /* binding */ ExtendedYearParser,
          /* harmony export */
        });
        /* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js"
          );
        /* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../Parser.js */ "./node_modules/date-fns/esm/parse/_lib/Parser.js"
          );
        /* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../utils.js */ "./node_modules/date-fns/esm/parse/_lib/utils.js"
          );

        var ExtendedYearParser = /*#__PURE__*/ (function (_Parser) {
          (0,
          _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[
            "default"
          ])(ExtendedYearParser, _Parser);
          var _super = (0,
          _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[
            "default"
          ])(ExtendedYearParser);
          function ExtendedYearParser() {
            var _this;
            (0,
            _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ])(this, ExtendedYearParser);
            for (
              var _len = arguments.length, args = new Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }
            _this = _super.call.apply(_super, [this].concat(args));
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(_this),
              "priority",
              130
            );
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(_this),
              "incompatibleTokens",
              ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]
            );
            return _this;
          }
          (0,
          _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[
            "default"
          ])(ExtendedYearParser, [
            {
              key: "parse",
              value: function parse(dateString, token) {
                if (token === "u") {
                  return (0,
                  _utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNDigitsSigned)(
                    4,
                    dateString
                  );
                }
                return (0,
                _utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNDigitsSigned)(
                  token.length,
                  dateString
                );
              },
            },
            {
              key: "set",
              value: function set(date, _flags, value) {
                date.setUTCFullYear(value, 0, 1);
                date.setUTCHours(0, 0, 0, 0);
                return date;
              },
            },
          ]);
          return ExtendedYearParser;
        })(_Parser_js__WEBPACK_IMPORTED_MODULE_7__.Parser);

        /***/
      },

    /***/ "./node_modules/date-fns/esm/parse/_lib/parsers/FractionOfSecondParser.js":
      /*!********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/FractionOfSecondParser.js ***!
  \********************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ FractionOfSecondParser: () =>
            /* binding */ FractionOfSecondParser,
          /* harmony export */
        });
        /* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js"
          );
        /* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../Parser.js */ "./node_modules/date-fns/esm/parse/_lib/Parser.js"
          );
        /* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../utils.js */ "./node_modules/date-fns/esm/parse/_lib/utils.js"
          );

        var FractionOfSecondParser = /*#__PURE__*/ (function (_Parser) {
          (0,
          _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[
            "default"
          ])(FractionOfSecondParser, _Parser);
          var _super = (0,
          _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[
            "default"
          ])(FractionOfSecondParser);
          function FractionOfSecondParser() {
            var _this;
            (0,
            _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ])(this, FractionOfSecondParser);
            for (
              var _len = arguments.length, args = new Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }
            _this = _super.call.apply(_super, [this].concat(args));
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(_this),
              "priority",
              30
            );
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(_this),
              "incompatibleTokens",
              ["t", "T"]
            );
            return _this;
          }
          (0,
          _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[
            "default"
          ])(FractionOfSecondParser, [
            {
              key: "parse",
              value: function parse(dateString, token) {
                var valueCallback = function valueCallback(value) {
                  return Math.floor(value * Math.pow(10, -token.length + 3));
                };
                return (0, _utils_js__WEBPACK_IMPORTED_MODULE_6__.mapValue)(
                  (0, _utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNDigits)(
                    token.length,
                    dateString
                  ),
                  valueCallback
                );
              },
            },
            {
              key: "set",
              value: function set(date, _flags, value) {
                date.setUTCMilliseconds(value);
                return date;
              },
            },
          ]);
          return FractionOfSecondParser;
        })(_Parser_js__WEBPACK_IMPORTED_MODULE_7__.Parser);

        /***/
      },

    /***/ "./node_modules/date-fns/esm/parse/_lib/parsers/Hour0To11Parser.js":
      /*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/Hour0To11Parser.js ***!
  \*************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ Hour0To11Parser: () =>
            /* binding */ Hour0To11Parser,
          /* harmony export */
        });
        /* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js"
          );
        /* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ../Parser.js */ "./node_modules/date-fns/esm/parse/_lib/Parser.js"
          );
        /* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../constants.js */ "./node_modules/date-fns/esm/parse/_lib/constants.js"
          );
        /* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../utils.js */ "./node_modules/date-fns/esm/parse/_lib/utils.js"
          );

        var Hour0To11Parser = /*#__PURE__*/ (function (_Parser) {
          (0,
          _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[
            "default"
          ])(Hour0To11Parser, _Parser);
          var _super = (0,
          _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[
            "default"
          ])(Hour0To11Parser);
          function Hour0To11Parser() {
            var _this;
            (0,
            _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ])(this, Hour0To11Parser);
            for (
              var _len = arguments.length, args = new Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }
            _this = _super.call.apply(_super, [this].concat(args));
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(_this),
              "priority",
              70
            );
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(_this),
              "incompatibleTokens",
              ["h", "H", "k", "t", "T"]
            );
            return _this;
          }
          (0,
          _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[
            "default"
          ])(Hour0To11Parser, [
            {
              key: "parse",
              value: function parse(dateString, token, match) {
                switch (token) {
                  case "K":
                    return (0,
                    _utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNumericPattern)(
                      _constants_js__WEBPACK_IMPORTED_MODULE_7__.numericPatterns
                        .hour11h,
                      dateString
                    );
                  case "Ko":
                    return match.ordinalNumber(dateString, {
                      unit: "hour",
                    });
                  default:
                    return (0,
                    _utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNDigits)(
                      token.length,
                      dateString
                    );
                }
              },
            },
            {
              key: "validate",
              value: function validate(_date, value) {
                return value >= 0 && value <= 11;
              },
            },
            {
              key: "set",
              value: function set(date, _flags, value) {
                var isPM = date.getUTCHours() >= 12;
                if (isPM && value < 12) {
                  date.setUTCHours(value + 12, 0, 0, 0);
                } else {
                  date.setUTCHours(value, 0, 0, 0);
                }
                return date;
              },
            },
          ]);
          return Hour0To11Parser;
        })(_Parser_js__WEBPACK_IMPORTED_MODULE_8__.Parser);

        /***/
      },

    /***/ "./node_modules/date-fns/esm/parse/_lib/parsers/Hour0to23Parser.js":
      /*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/Hour0to23Parser.js ***!
  \*************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ Hour0to23Parser: () =>
            /* binding */ Hour0to23Parser,
          /* harmony export */
        });
        /* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js"
          );
        /* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ../Parser.js */ "./node_modules/date-fns/esm/parse/_lib/Parser.js"
          );
        /* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../constants.js */ "./node_modules/date-fns/esm/parse/_lib/constants.js"
          );
        /* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../utils.js */ "./node_modules/date-fns/esm/parse/_lib/utils.js"
          );

        var Hour0to23Parser = /*#__PURE__*/ (function (_Parser) {
          (0,
          _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[
            "default"
          ])(Hour0to23Parser, _Parser);
          var _super = (0,
          _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[
            "default"
          ])(Hour0to23Parser);
          function Hour0to23Parser() {
            var _this;
            (0,
            _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ])(this, Hour0to23Parser);
            for (
              var _len = arguments.length, args = new Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }
            _this = _super.call.apply(_super, [this].concat(args));
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(_this),
              "priority",
              70
            );
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(_this),
              "incompatibleTokens",
              ["a", "b", "h", "K", "k", "t", "T"]
            );
            return _this;
          }
          (0,
          _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[
            "default"
          ])(Hour0to23Parser, [
            {
              key: "parse",
              value: function parse(dateString, token, match) {
                switch (token) {
                  case "H":
                    return (0,
                    _utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNumericPattern)(
                      _constants_js__WEBPACK_IMPORTED_MODULE_7__.numericPatterns
                        .hour23h,
                      dateString
                    );
                  case "Ho":
                    return match.ordinalNumber(dateString, {
                      unit: "hour",
                    });
                  default:
                    return (0,
                    _utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNDigits)(
                      token.length,
                      dateString
                    );
                }
              },
            },
            {
              key: "validate",
              value: function validate(_date, value) {
                return value >= 0 && value <= 23;
              },
            },
            {
              key: "set",
              value: function set(date, _flags, value) {
                date.setUTCHours(value, 0, 0, 0);
                return date;
              },
            },
          ]);
          return Hour0to23Parser;
        })(_Parser_js__WEBPACK_IMPORTED_MODULE_8__.Parser);

        /***/
      },

    /***/ "./node_modules/date-fns/esm/parse/_lib/parsers/Hour1To24Parser.js":
      /*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/Hour1To24Parser.js ***!
  \*************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ Hour1To24Parser: () =>
            /* binding */ Hour1To24Parser,
          /* harmony export */
        });
        /* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js"
          );
        /* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ../Parser.js */ "./node_modules/date-fns/esm/parse/_lib/Parser.js"
          );
        /* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../constants.js */ "./node_modules/date-fns/esm/parse/_lib/constants.js"
          );
        /* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../utils.js */ "./node_modules/date-fns/esm/parse/_lib/utils.js"
          );

        var Hour1To24Parser = /*#__PURE__*/ (function (_Parser) {
          (0,
          _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[
            "default"
          ])(Hour1To24Parser, _Parser);
          var _super = (0,
          _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[
            "default"
          ])(Hour1To24Parser);
          function Hour1To24Parser() {
            var _this;
            (0,
            _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ])(this, Hour1To24Parser);
            for (
              var _len = arguments.length, args = new Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }
            _this = _super.call.apply(_super, [this].concat(args));
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(_this),
              "priority",
              70
            );
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(_this),
              "incompatibleTokens",
              ["a", "b", "h", "H", "K", "t", "T"]
            );
            return _this;
          }
          (0,
          _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[
            "default"
          ])(Hour1To24Parser, [
            {
              key: "parse",
              value: function parse(dateString, token, match) {
                switch (token) {
                  case "k":
                    return (0,
                    _utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNumericPattern)(
                      _constants_js__WEBPACK_IMPORTED_MODULE_7__.numericPatterns
                        .hour24h,
                      dateString
                    );
                  case "ko":
                    return match.ordinalNumber(dateString, {
                      unit: "hour",
                    });
                  default:
                    return (0,
                    _utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNDigits)(
                      token.length,
                      dateString
                    );
                }
              },
            },
            {
              key: "validate",
              value: function validate(_date, value) {
                return value >= 1 && value <= 24;
              },
            },
            {
              key: "set",
              value: function set(date, _flags, value) {
                var hours = value <= 24 ? value % 24 : value;
                date.setUTCHours(hours, 0, 0, 0);
                return date;
              },
            },
          ]);
          return Hour1To24Parser;
        })(_Parser_js__WEBPACK_IMPORTED_MODULE_8__.Parser);

        /***/
      },

    /***/ "./node_modules/date-fns/esm/parse/_lib/parsers/Hour1to12Parser.js":
      /*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/Hour1to12Parser.js ***!
  \*************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ Hour1to12Parser: () =>
            /* binding */ Hour1to12Parser,
          /* harmony export */
        });
        /* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js"
          );
        /* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ../Parser.js */ "./node_modules/date-fns/esm/parse/_lib/Parser.js"
          );
        /* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../constants.js */ "./node_modules/date-fns/esm/parse/_lib/constants.js"
          );
        /* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../utils.js */ "./node_modules/date-fns/esm/parse/_lib/utils.js"
          );

        var Hour1to12Parser = /*#__PURE__*/ (function (_Parser) {
          (0,
          _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[
            "default"
          ])(Hour1to12Parser, _Parser);
          var _super = (0,
          _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[
            "default"
          ])(Hour1to12Parser);
          function Hour1to12Parser() {
            var _this;
            (0,
            _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ])(this, Hour1to12Parser);
            for (
              var _len = arguments.length, args = new Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }
            _this = _super.call.apply(_super, [this].concat(args));
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(_this),
              "priority",
              70
            );
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(_this),
              "incompatibleTokens",
              ["H", "K", "k", "t", "T"]
            );
            return _this;
          }
          (0,
          _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[
            "default"
          ])(Hour1to12Parser, [
            {
              key: "parse",
              value: function parse(dateString, token, match) {
                switch (token) {
                  case "h":
                    return (0,
                    _utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNumericPattern)(
                      _constants_js__WEBPACK_IMPORTED_MODULE_7__.numericPatterns
                        .hour12h,
                      dateString
                    );
                  case "ho":
                    return match.ordinalNumber(dateString, {
                      unit: "hour",
                    });
                  default:
                    return (0,
                    _utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNDigits)(
                      token.length,
                      dateString
                    );
                }
              },
            },
            {
              key: "validate",
              value: function validate(_date, value) {
                return value >= 1 && value <= 12;
              },
            },
            {
              key: "set",
              value: function set(date, _flags, value) {
                var isPM = date.getUTCHours() >= 12;
                if (isPM && value < 12) {
                  date.setUTCHours(value + 12, 0, 0, 0);
                } else if (!isPM && value === 12) {
                  date.setUTCHours(0, 0, 0, 0);
                } else {
                  date.setUTCHours(value, 0, 0, 0);
                }
                return date;
              },
            },
          ]);
          return Hour1to12Parser;
        })(_Parser_js__WEBPACK_IMPORTED_MODULE_8__.Parser);

        /***/
      },

    /***/ "./node_modules/date-fns/esm/parse/_lib/parsers/ISODayParser.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/ISODayParser.js ***!
  \**********************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ ISODayParser: () => /* binding */ ISODayParser,
          /* harmony export */
        });
        /* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js"
          );
        /* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ../Parser.js */ "./node_modules/date-fns/esm/parse/_lib/Parser.js"
          );
        /* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../utils.js */ "./node_modules/date-fns/esm/parse/_lib/utils.js"
          );
        /* harmony import */ var _lib_setUTCISODay_index_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../../../_lib/setUTCISODay/index.js */ "./node_modules/date-fns/esm/_lib/setUTCISODay/index.js"
          );

        // ISO day of week
        var ISODayParser = /*#__PURE__*/ (function (_Parser) {
          (0,
          _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[
            "default"
          ])(ISODayParser, _Parser);
          var _super = (0,
          _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[
            "default"
          ])(ISODayParser);
          function ISODayParser() {
            var _this;
            (0,
            _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ])(this, ISODayParser);
            for (
              var _len = arguments.length, args = new Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }
            _this = _super.call.apply(_super, [this].concat(args));
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(_this),
              "priority",
              90
            );
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(_this),
              "incompatibleTokens",
              [
                "y",
                "Y",
                "u",
                "q",
                "Q",
                "M",
                "L",
                "w",
                "d",
                "D",
                "E",
                "e",
                "c",
                "t",
                "T",
              ]
            );
            return _this;
          }
          (0,
          _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[
            "default"
          ])(ISODayParser, [
            {
              key: "parse",
              value: function parse(dateString, token, match) {
                var valueCallback = function valueCallback(value) {
                  if (value === 0) {
                    return 7;
                  }
                  return value;
                };
                switch (token) {
                  // 2
                  case "i":
                  case "ii":
                    // 02
                    return (0,
                    _utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNDigits)(
                      token.length,
                      dateString
                    );
                  // 2nd
                  case "io":
                    return match.ordinalNumber(dateString, {
                      unit: "day",
                    });
                  // Tue
                  case "iii":
                    return (0, _utils_js__WEBPACK_IMPORTED_MODULE_6__.mapValue)(
                      match.day(dateString, {
                        width: "abbreviated",
                        context: "formatting",
                      }) ||
                        match.day(dateString, {
                          width: "short",
                          context: "formatting",
                        }) ||
                        match.day(dateString, {
                          width: "narrow",
                          context: "formatting",
                        }),
                      valueCallback
                    );
                  // T
                  case "iiiii":
                    return (0, _utils_js__WEBPACK_IMPORTED_MODULE_6__.mapValue)(
                      match.day(dateString, {
                        width: "narrow",
                        context: "formatting",
                      }),
                      valueCallback
                    );
                  // Tu
                  case "iiiiii":
                    return (0, _utils_js__WEBPACK_IMPORTED_MODULE_6__.mapValue)(
                      match.day(dateString, {
                        width: "short",
                        context: "formatting",
                      }) ||
                        match.day(dateString, {
                          width: "narrow",
                          context: "formatting",
                        }),
                      valueCallback
                    );
                  // Tuesday
                  case "iiii":
                  default:
                    return (0, _utils_js__WEBPACK_IMPORTED_MODULE_6__.mapValue)(
                      match.day(dateString, {
                        width: "wide",
                        context: "formatting",
                      }) ||
                        match.day(dateString, {
                          width: "abbreviated",
                          context: "formatting",
                        }) ||
                        match.day(dateString, {
                          width: "short",
                          context: "formatting",
                        }) ||
                        match.day(dateString, {
                          width: "narrow",
                          context: "formatting",
                        }),
                      valueCallback
                    );
                }
              },
            },
            {
              key: "validate",
              value: function validate(_date, value) {
                return value >= 1 && value <= 7;
              },
            },
            {
              key: "set",
              value: function set(date, _flags, value) {
                date = (0,
                _lib_setUTCISODay_index_js__WEBPACK_IMPORTED_MODULE_7__[
                  "default"
                ])(date, value);
                date.setUTCHours(0, 0, 0, 0);
                return date;
              },
            },
          ]);
          return ISODayParser;
        })(_Parser_js__WEBPACK_IMPORTED_MODULE_8__.Parser);

        /***/
      },

    /***/ "./node_modules/date-fns/esm/parse/_lib/parsers/ISOcurrentTimeZoneParser.js":
      /*!***************************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/ISOcurrentTimeZoneParser.js ***!
  \***************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ ISOcurrentTimeZoneParser: () =>
            /* binding */ ISOcurrentTimeZoneParser,
          /* harmony export */
        });
        /* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js"
          );
        /* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ../Parser.js */ "./node_modules/date-fns/esm/parse/_lib/Parser.js"
          );
        /* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../constants.js */ "./node_modules/date-fns/esm/parse/_lib/constants.js"
          );
        /* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../utils.js */ "./node_modules/date-fns/esm/parse/_lib/utils.js"
          );

        // currentTimeZone (ISO-8601)
        var ISOcurrentTimeZoneParser = /*#__PURE__*/ (function (_Parser) {
          (0,
          _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[
            "default"
          ])(ISOcurrentTimeZoneParser, _Parser);
          var _super = (0,
          _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[
            "default"
          ])(ISOcurrentTimeZoneParser);
          function ISOcurrentTimeZoneParser() {
            var _this;
            (0,
            _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ])(this, ISOcurrentTimeZoneParser);
            for (
              var _len = arguments.length, args = new Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }
            _this = _super.call.apply(_super, [this].concat(args));
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(_this),
              "priority",
              10
            );
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(_this),
              "incompatibleTokens",
              ["t", "T", "X"]
            );
            return _this;
          }
          (0,
          _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[
            "default"
          ])(ISOcurrentTimeZoneParser, [
            {
              key: "parse",
              value: function parse(dateString, token) {
                switch (token) {
                  case "x":
                    return (0,
                    _utils_js__WEBPACK_IMPORTED_MODULE_6__.parsecurrentTimeZonePattern)(
                      _constants_js__WEBPACK_IMPORTED_MODULE_7__
                        .currentTimeZonePatterns.basicOptionalMinutes,
                      dateString
                    );
                  case "xx":
                    return (0,
                    _utils_js__WEBPACK_IMPORTED_MODULE_6__.parsecurrentTimeZonePattern)(
                      _constants_js__WEBPACK_IMPORTED_MODULE_7__
                        .currentTimeZonePatterns.basic,
                      dateString
                    );
                  case "xxxx":
                    return (0,
                    _utils_js__WEBPACK_IMPORTED_MODULE_6__.parsecurrentTimeZonePattern)(
                      _constants_js__WEBPACK_IMPORTED_MODULE_7__
                        .currentTimeZonePatterns.basicOptionalSeconds,
                      dateString
                    );
                  case "xxxxx":
                    return (0,
                    _utils_js__WEBPACK_IMPORTED_MODULE_6__.parsecurrentTimeZonePattern)(
                      _constants_js__WEBPACK_IMPORTED_MODULE_7__
                        .currentTimeZonePatterns.extendedOptionalSeconds,
                      dateString
                    );
                  case "xxx":
                  default:
                    return (0,
                    _utils_js__WEBPACK_IMPORTED_MODULE_6__.parsecurrentTimeZonePattern)(
                      _constants_js__WEBPACK_IMPORTED_MODULE_7__
                        .currentTimeZonePatterns.extended,
                      dateString
                    );
                }
              },
            },
            {
              key: "set",
              value: function set(date, flags, value) {
                if (flags.timestampIsSet) {
                  return date;
                }
                return new Date(date.getTime() - value);
              },
            },
          ]);
          return ISOcurrentTimeZoneParser;
        })(_Parser_js__WEBPACK_IMPORTED_MODULE_8__.Parser);

        /***/
      },

    /***/ "./node_modules/date-fns/esm/parse/_lib/parsers/ISOcurrentTimeZoneWithZParser.js":
      /*!********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/ISOcurrentTimeZoneWithZParser.js ***!
  \********************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ ISOcurrentTimeZoneWithZParser: () =>
            /* binding */ ISOcurrentTimeZoneWithZParser,
          /* harmony export */
        });
        /* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js"
          );
        /* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ../Parser.js */ "./node_modules/date-fns/esm/parse/_lib/Parser.js"
          );
        /* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../constants.js */ "./node_modules/date-fns/esm/parse/_lib/constants.js"
          );
        /* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../utils.js */ "./node_modules/date-fns/esm/parse/_lib/utils.js"
          );

        // currentTimeZone (ISO-8601. +00:00 is `'Z'`)
        var ISOcurrentTimeZoneWithZParser = /*#__PURE__*/ (function (_Parser) {
          (0,
          _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[
            "default"
          ])(ISOcurrentTimeZoneWithZParser, _Parser);
          var _super = (0,
          _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[
            "default"
          ])(ISOcurrentTimeZoneWithZParser);
          function ISOcurrentTimeZoneWithZParser() {
            var _this;
            (0,
            _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ])(this, ISOcurrentTimeZoneWithZParser);
            for (
              var _len = arguments.length, args = new Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }
            _this = _super.call.apply(_super, [this].concat(args));
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(_this),
              "priority",
              10
            );
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(_this),
              "incompatibleTokens",
              ["t", "T", "x"]
            );
            return _this;
          }
          (0,
          _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[
            "default"
          ])(ISOcurrentTimeZoneWithZParser, [
            {
              key: "parse",
              value: function parse(dateString, token) {
                switch (token) {
                  case "X":
                    return (0,
                    _utils_js__WEBPACK_IMPORTED_MODULE_6__.parsecurrentTimeZonePattern)(
                      _constants_js__WEBPACK_IMPORTED_MODULE_7__
                        .currentTimeZonePatterns.basicOptionalMinutes,
                      dateString
                    );
                  case "XX":
                    return (0,
                    _utils_js__WEBPACK_IMPORTED_MODULE_6__.parsecurrentTimeZonePattern)(
                      _constants_js__WEBPACK_IMPORTED_MODULE_7__
                        .currentTimeZonePatterns.basic,
                      dateString
                    );
                  case "XXXX":
                    return (0,
                    _utils_js__WEBPACK_IMPORTED_MODULE_6__.parsecurrentTimeZonePattern)(
                      _constants_js__WEBPACK_IMPORTED_MODULE_7__
                        .currentTimeZonePatterns.basicOptionalSeconds,
                      dateString
                    );
                  case "XXXXX":
                    return (0,
                    _utils_js__WEBPACK_IMPORTED_MODULE_6__.parsecurrentTimeZonePattern)(
                      _constants_js__WEBPACK_IMPORTED_MODULE_7__
                        .currentTimeZonePatterns.extendedOptionalSeconds,
                      dateString
                    );
                  case "XXX":
                  default:
                    return (0,
                    _utils_js__WEBPACK_IMPORTED_MODULE_6__.parsecurrentTimeZonePattern)(
                      _constants_js__WEBPACK_IMPORTED_MODULE_7__
                        .currentTimeZonePatterns.extended,
                      dateString
                    );
                }
              },
            },
            {
              key: "set",
              value: function set(date, flags, value) {
                if (flags.timestampIsSet) {
                  return date;
                }
                return new Date(date.getTime() - value);
              },
            },
          ]);
          return ISOcurrentTimeZoneWithZParser;
        })(_Parser_js__WEBPACK_IMPORTED_MODULE_8__.Parser);

        /***/
      },

    /***/ "./node_modules/date-fns/esm/parse/_lib/parsers/ISOWeekParser.js":
      /*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/ISOWeekParser.js ***!
  \***********************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ ISOWeekParser: () => /* binding */ ISOWeekParser,
          /* harmony export */
        });
        /* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js"
          );
        /* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            /*! ../Parser.js */ "./node_modules/date-fns/esm/parse/_lib/Parser.js"
          );
        /* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../constants.js */ "./node_modules/date-fns/esm/parse/_lib/constants.js"
          );
        /* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../utils.js */ "./node_modules/date-fns/esm/parse/_lib/utils.js"
          );
        /* harmony import */ var _lib_setUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! ../../../_lib/setUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/setUTCISOWeek/index.js"
          );
        /* harmony import */ var _lib_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ../../../_lib/startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js"
          );

        // ISO week of year
        var ISOWeekParser = /*#__PURE__*/ (function (_Parser) {
          (0,
          _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[
            "default"
          ])(ISOWeekParser, _Parser);
          var _super = (0,
          _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[
            "default"
          ])(ISOWeekParser);
          function ISOWeekParser() {
            var _this;
            (0,
            _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ])(this, ISOWeekParser);
            for (
              var _len = arguments.length, args = new Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }
            _this = _super.call.apply(_super, [this].concat(args));
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(_this),
              "priority",
              100
            );
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(_this),
              "incompatibleTokens",
              [
                "y",
                "Y",
                "u",
                "q",
                "Q",
                "M",
                "L",
                "w",
                "d",
                "D",
                "e",
                "c",
                "t",
                "T",
              ]
            );
            return _this;
          }
          (0,
          _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[
            "default"
          ])(ISOWeekParser, [
            {
              key: "parse",
              value: function parse(dateString, token, match) {
                switch (token) {
                  case "I":
                    return (0,
                    _utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNumericPattern)(
                      _constants_js__WEBPACK_IMPORTED_MODULE_7__.numericPatterns
                        .week,
                      dateString
                    );
                  case "Io":
                    return match.ordinalNumber(dateString, {
                      unit: "week",
                    });
                  default:
                    return (0,
                    _utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNDigits)(
                      token.length,
                      dateString
                    );
                }
              },
            },
            {
              key: "validate",
              value: function validate(_date, value) {
                return value >= 1 && value <= 53;
              },
            },
            {
              key: "set",
              value: function set(date, _flags, value) {
                return (0,
                _lib_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_8__[
                  "default"
                ])(
                  (0,
                  _lib_setUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_9__[
                    "default"
                  ])(date, value)
                );
              },
            },
          ]);
          return ISOWeekParser;
        })(_Parser_js__WEBPACK_IMPORTED_MODULE_10__.Parser);

        /***/
      },

    /***/ "./node_modules/date-fns/esm/parse/_lib/parsers/ISOWeekYearParser.js":
      /*!***************************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/ISOWeekYearParser.js ***!
  \***************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ ISOWeekYearParser: () =>
            /* binding */ ISOWeekYearParser,
          /* harmony export */
        });
        /* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js"
          );
        /* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ../Parser.js */ "./node_modules/date-fns/esm/parse/_lib/Parser.js"
          );
        /* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../utils.js */ "./node_modules/date-fns/esm/parse/_lib/utils.js"
          );
        /* harmony import */ var _lib_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../../../_lib/startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js"
          );

        // ISO week-numbering year
        var ISOWeekYearParser = /*#__PURE__*/ (function (_Parser) {
          (0,
          _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[
            "default"
          ])(ISOWeekYearParser, _Parser);
          var _super = (0,
          _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[
            "default"
          ])(ISOWeekYearParser);
          function ISOWeekYearParser() {
            var _this;
            (0,
            _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ])(this, ISOWeekYearParser);
            for (
              var _len = arguments.length, args = new Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }
            _this = _super.call.apply(_super, [this].concat(args));
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(_this),
              "priority",
              130
            );
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(_this),
              "incompatibleTokens",
              [
                "G",
                "y",
                "Y",
                "u",
                "Q",
                "q",
                "M",
                "L",
                "w",
                "d",
                "D",
                "e",
                "c",
                "t",
                "T",
              ]
            );
            return _this;
          }
          (0,
          _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[
            "default"
          ])(ISOWeekYearParser, [
            {
              key: "parse",
              value: function parse(dateString, token) {
                if (token === "R") {
                  return (0,
                  _utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNDigitsSigned)(
                    4,
                    dateString
                  );
                }
                return (0,
                _utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNDigitsSigned)(
                  token.length,
                  dateString
                );
              },
            },
            {
              key: "set",
              value: function set(_date, _flags, value) {
                var firstWeekOfYear = new Date(0);
                firstWeekOfYear.setUTCFullYear(value, 0, 4);
                firstWeekOfYear.setUTCHours(0, 0, 0, 0);
                return (0,
                _lib_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_7__[
                  "default"
                ])(firstWeekOfYear);
              },
            },
          ]);
          return ISOWeekYearParser;
        })(_Parser_js__WEBPACK_IMPORTED_MODULE_8__.Parser);

        /***/
      },

    /***/ "./node_modules/date-fns/esm/parse/_lib/parsers/LocalDayParser.js":
      /*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/LocalDayParser.js ***!
  \************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ LocalDayParser: () =>
            /* binding */ LocalDayParser,
          /* harmony export */
        });
        /* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js"
          );
        /* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ../Parser.js */ "./node_modules/date-fns/esm/parse/_lib/Parser.js"
          );
        /* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../utils.js */ "./node_modules/date-fns/esm/parse/_lib/utils.js"
          );
        /* harmony import */ var _lib_setUTCDay_index_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../../../_lib/setUTCDay/index.js */ "./node_modules/date-fns/esm/_lib/setUTCDay/index.js"
          );

        // Local day of week
        var LocalDayParser = /*#__PURE__*/ (function (_Parser) {
          (0,
          _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[
            "default"
          ])(LocalDayParser, _Parser);
          var _super = (0,
          _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[
            "default"
          ])(LocalDayParser);
          function LocalDayParser() {
            var _this;
            (0,
            _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ])(this, LocalDayParser);
            for (
              var _len = arguments.length, args = new Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }
            _this = _super.call.apply(_super, [this].concat(args));
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(_this),
              "priority",
              90
            );
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(_this),
              "incompatibleTokens",
              [
                "y",
                "R",
                "u",
                "q",
                "Q",
                "M",
                "L",
                "I",
                "d",
                "D",
                "E",
                "i",
                "c",
                "t",
                "T",
              ]
            );
            return _this;
          }
          (0,
          _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[
            "default"
          ])(LocalDayParser, [
            {
              key: "parse",
              value: function parse(dateString, token, match, options) {
                var valueCallback = function valueCallback(value) {
                  var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
                  return (
                    ((value + options.weekStartsOn + 6) % 7) + wholeWeekDays
                  );
                };
                switch (token) {
                  // 3
                  case "e":
                  case "ee":
                    // 03
                    return (0, _utils_js__WEBPACK_IMPORTED_MODULE_6__.mapValue)(
                      (0, _utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNDigits)(
                        token.length,
                        dateString
                      ),
                      valueCallback
                    );
                  // 3rd
                  case "eo":
                    return (0, _utils_js__WEBPACK_IMPORTED_MODULE_6__.mapValue)(
                      match.ordinalNumber(dateString, {
                        unit: "day",
                      }),
                      valueCallback
                    );
                  // Tue
                  case "eee":
                    return (
                      match.day(dateString, {
                        width: "abbreviated",
                        context: "formatting",
                      }) ||
                      match.day(dateString, {
                        width: "short",
                        context: "formatting",
                      }) ||
                      match.day(dateString, {
                        width: "narrow",
                        context: "formatting",
                      })
                    );
                  // T
                  case "eeeee":
                    return match.day(dateString, {
                      width: "narrow",
                      context: "formatting",
                    });
                  // Tu
                  case "eeeeee":
                    return (
                      match.day(dateString, {
                        width: "short",
                        context: "formatting",
                      }) ||
                      match.day(dateString, {
                        width: "narrow",
                        context: "formatting",
                      })
                    );
                  // Tuesday
                  case "eeee":
                  default:
                    return (
                      match.day(dateString, {
                        width: "wide",
                        context: "formatting",
                      }) ||
                      match.day(dateString, {
                        width: "abbreviated",
                        context: "formatting",
                      }) ||
                      match.day(dateString, {
                        width: "short",
                        context: "formatting",
                      }) ||
                      match.day(dateString, {
                        width: "narrow",
                        context: "formatting",
                      })
                    );
                }
              },
            },
            {
              key: "validate",
              value: function validate(_date, value) {
                return value >= 0 && value <= 6;
              },
            },
            {
              key: "set",
              value: function set(date, _flags, value, options) {
                date = (0,
                _lib_setUTCDay_index_js__WEBPACK_IMPORTED_MODULE_7__[
                  "default"
                ])(date, value, options);
                date.setUTCHours(0, 0, 0, 0);
                return date;
              },
            },
          ]);
          return LocalDayParser;
        })(_Parser_js__WEBPACK_IMPORTED_MODULE_8__.Parser);

        /***/
      },

    /***/ "./node_modules/date-fns/esm/parse/_lib/parsers/LocalWeekParser.js":
      /*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/LocalWeekParser.js ***!
  \*************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ LocalWeekParser: () =>
            /* binding */ LocalWeekParser,
          /* harmony export */
        });
        /* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js"
          );
        /* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            /*! ../Parser.js */ "./node_modules/date-fns/esm/parse/_lib/Parser.js"
          );
        /* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../constants.js */ "./node_modules/date-fns/esm/parse/_lib/constants.js"
          );
        /* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../utils.js */ "./node_modules/date-fns/esm/parse/_lib/utils.js"
          );
        /* harmony import */ var _lib_setUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! ../../../_lib/setUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/setUTCWeek/index.js"
          );
        /* harmony import */ var _lib_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ../../../_lib/startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js"
          );

        // Local week of year
        var LocalWeekParser = /*#__PURE__*/ (function (_Parser) {
          (0,
          _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[
            "default"
          ])(LocalWeekParser, _Parser);
          var _super = (0,
          _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[
            "default"
          ])(LocalWeekParser);
          function LocalWeekParser() {
            var _this;
            (0,
            _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ])(this, LocalWeekParser);
            for (
              var _len = arguments.length, args = new Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }
            _this = _super.call.apply(_super, [this].concat(args));
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(_this),
              "priority",
              100
            );
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(_this),
              "incompatibleTokens",
              ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "i", "t", "T"]
            );
            return _this;
          }
          (0,
          _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[
            "default"
          ])(LocalWeekParser, [
            {
              key: "parse",
              value: function parse(dateString, token, match) {
                switch (token) {
                  case "w":
                    return (0,
                    _utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNumericPattern)(
                      _constants_js__WEBPACK_IMPORTED_MODULE_7__.numericPatterns
                        .week,
                      dateString
                    );
                  case "wo":
                    return match.ordinalNumber(dateString, {
                      unit: "week",
                    });
                  default:
                    return (0,
                    _utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNDigits)(
                      token.length,
                      dateString
                    );
                }
              },
            },
            {
              key: "validate",
              value: function validate(_date, value) {
                return value >= 1 && value <= 53;
              },
            },
            {
              key: "set",
              value: function set(date, _flags, value, options) {
                return (0,
                _lib_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_8__[
                  "default"
                ])(
                  (0,
                  _lib_setUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_9__[
                    "default"
                  ])(date, value, options),
                  options
                );
              },
            },
          ]);
          return LocalWeekParser;
        })(_Parser_js__WEBPACK_IMPORTED_MODULE_10__.Parser);

        /***/
      },

    /***/ "./node_modules/date-fns/esm/parse/_lib/parsers/LocalWeekYearParser.js":
      /*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/LocalWeekYearParser.js ***!
  \*****************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ LocalWeekYearParser: () =>
            /* binding */ LocalWeekYearParser,
          /* harmony export */
        });
        /* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js"
          );
        /* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! ../Parser.js */ "./node_modules/date-fns/esm/parse/_lib/Parser.js"
          );
        /* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../utils.js */ "./node_modules/date-fns/esm/parse/_lib/utils.js"
          );
        /* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js"
          );
        /* harmony import */ var _lib_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ../../../_lib/startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js"
          );

        // Local week-numbering year
        var LocalWeekYearParser = /*#__PURE__*/ (function (_Parser) {
          (0,
          _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[
            "default"
          ])(LocalWeekYearParser, _Parser);
          var _super = (0,
          _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[
            "default"
          ])(LocalWeekYearParser);
          function LocalWeekYearParser() {
            var _this;
            (0,
            _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ])(this, LocalWeekYearParser);
            for (
              var _len = arguments.length, args = new Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }
            _this = _super.call.apply(_super, [this].concat(args));
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(_this),
              "priority",
              130
            );
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(_this),
              "incompatibleTokens",
              ["y", "R", "u", "Q", "q", "M", "L", "I", "d", "D", "i", "t", "T"]
            );
            return _this;
          }
          (0,
          _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[
            "default"
          ])(LocalWeekYearParser, [
            {
              key: "parse",
              value: function parse(dateString, token, match) {
                var valueCallback = function valueCallback(year) {
                  return {
                    year: year,
                    isTwoDigitYear: token === "YY",
                  };
                };
                switch (token) {
                  case "Y":
                    return (0, _utils_js__WEBPACK_IMPORTED_MODULE_6__.mapValue)(
                      (0, _utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNDigits)(
                        4,
                        dateString
                      ),
                      valueCallback
                    );
                  case "Yo":
                    return (0, _utils_js__WEBPACK_IMPORTED_MODULE_6__.mapValue)(
                      match.ordinalNumber(dateString, {
                        unit: "year",
                      }),
                      valueCallback
                    );
                  default:
                    return (0, _utils_js__WEBPACK_IMPORTED_MODULE_6__.mapValue)(
                      (0, _utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNDigits)(
                        token.length,
                        dateString
                      ),
                      valueCallback
                    );
                }
              },
            },
            {
              key: "validate",
              value: function validate(_date, value) {
                return value.isTwoDigitYear || value.year > 0;
              },
            },
            {
              key: "set",
              value: function set(date, flags, value, options) {
                var currentYear = (0,
                _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_7__[
                  "default"
                ])(date, options);
                if (value.isTwoDigitYear) {
                  var normalizedTwoDigitYear = (0,
                  _utils_js__WEBPACK_IMPORTED_MODULE_6__.normalizeTwoDigitYear)(
                    value.year,
                    currentYear
                  );
                  date.setUTCFullYear(
                    normalizedTwoDigitYear,
                    0,
                    options.firstWeekContainsDate
                  );
                  date.setUTCHours(0, 0, 0, 0);
                  return (0,
                  _lib_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_8__[
                    "default"
                  ])(date, options);
                }
                var year =
                  !("era" in flags) || flags.era === 1
                    ? value.year
                    : 1 - value.year;
                date.setUTCFullYear(year, 0, options.firstWeekContainsDate);
                date.setUTCHours(0, 0, 0, 0);
                return (0,
                _lib_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_8__[
                  "default"
                ])(date, options);
              },
            },
          ]);
          return LocalWeekYearParser;
        })(_Parser_js__WEBPACK_IMPORTED_MODULE_9__.Parser);

        /***/
      },

    /***/ "./node_modules/date-fns/esm/parse/_lib/parsers/MinuteParser.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/MinuteParser.js ***!
  \**********************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ MinuteParser: () => /* binding */ MinuteParser,
          /* harmony export */
        });
        /* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js"
          );
        /* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ../Parser.js */ "./node_modules/date-fns/esm/parse/_lib/Parser.js"
          );
        /* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../constants.js */ "./node_modules/date-fns/esm/parse/_lib/constants.js"
          );
        /* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../utils.js */ "./node_modules/date-fns/esm/parse/_lib/utils.js"
          );

        var MinuteParser = /*#__PURE__*/ (function (_Parser) {
          (0,
          _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[
            "default"
          ])(MinuteParser, _Parser);
          var _super = (0,
          _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[
            "default"
          ])(MinuteParser);
          function MinuteParser() {
            var _this;
            (0,
            _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ])(this, MinuteParser);
            for (
              var _len = arguments.length, args = new Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }
            _this = _super.call.apply(_super, [this].concat(args));
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(_this),
              "priority",
              60
            );
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(_this),
              "incompatibleTokens",
              ["t", "T"]
            );
            return _this;
          }
          (0,
          _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[
            "default"
          ])(MinuteParser, [
            {
              key: "parse",
              value: function parse(dateString, token, match) {
                switch (token) {
                  case "m":
                    return (0,
                    _utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNumericPattern)(
                      _constants_js__WEBPACK_IMPORTED_MODULE_7__.numericPatterns
                        .minute,
                      dateString
                    );
                  case "mo":
                    return match.ordinalNumber(dateString, {
                      unit: "minute",
                    });
                  default:
                    return (0,
                    _utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNDigits)(
                      token.length,
                      dateString
                    );
                }
              },
            },
            {
              key: "validate",
              value: function validate(_date, value) {
                return value >= 0 && value <= 59;
              },
            },
            {
              key: "set",
              value: function set(date, _flags, value) {
                date.setUTCMinutes(value, 0, 0);
                return date;
              },
            },
          ]);
          return MinuteParser;
        })(_Parser_js__WEBPACK_IMPORTED_MODULE_8__.Parser);

        /***/
      },

    /***/ "./node_modules/date-fns/esm/parse/_lib/parsers/MonthParser.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/MonthParser.js ***!
  \*********************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ MonthParser: () => /* binding */ MonthParser,
          /* harmony export */
        });
        /* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js"
          );
        /* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../utils.js */ "./node_modules/date-fns/esm/parse/_lib/utils.js"
          );
        /* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ../Parser.js */ "./node_modules/date-fns/esm/parse/_lib/Parser.js"
          );
        /* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../constants.js */ "./node_modules/date-fns/esm/parse/_lib/constants.js"
          );

        var MonthParser = /*#__PURE__*/ (function (_Parser) {
          (0,
          _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[
            "default"
          ])(MonthParser, _Parser);
          var _super = (0,
          _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[
            "default"
          ])(MonthParser);
          function MonthParser() {
            var _this;
            (0,
            _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ])(this, MonthParser);
            for (
              var _len = arguments.length, args = new Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }
            _this = _super.call.apply(_super, [this].concat(args));
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(_this),
              "incompatibleTokens",
              ["Y", "R", "q", "Q", "L", "w", "I", "D", "i", "e", "c", "t", "T"]
            );
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(_this),
              "priority",
              110
            );
            return _this;
          }
          (0,
          _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[
            "default"
          ])(MonthParser, [
            {
              key: "parse",
              value: function parse(dateString, token, match) {
                var valueCallback = function valueCallback(value) {
                  return value - 1;
                };
                switch (token) {
                  // 1, 2, ..., 12
                  case "M":
                    return (0, _utils_js__WEBPACK_IMPORTED_MODULE_6__.mapValue)(
                      (0,
                      _utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNumericPattern)(
                        _constants_js__WEBPACK_IMPORTED_MODULE_7__
                          .numericPatterns.month,
                        dateString
                      ),
                      valueCallback
                    );
                  // 01, 02, ..., 12
                  case "MM":
                    return (0, _utils_js__WEBPACK_IMPORTED_MODULE_6__.mapValue)(
                      (0, _utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNDigits)(
                        2,
                        dateString
                      ),
                      valueCallback
                    );
                  // 1st, 2nd, ..., 12th
                  case "Mo":
                    return (0, _utils_js__WEBPACK_IMPORTED_MODULE_6__.mapValue)(
                      match.ordinalNumber(dateString, {
                        unit: "month",
                      }),
                      valueCallback
                    );
                  // Jan, Feb, ..., Dec
                  case "MMM":
                    return (
                      match.month(dateString, {
                        width: "abbreviated",
                        context: "formatting",
                      }) ||
                      match.month(dateString, {
                        width: "narrow",
                        context: "formatting",
                      })
                    );
                  // J, F, ..., D
                  case "MMMMM":
                    return match.month(dateString, {
                      width: "narrow",
                      context: "formatting",
                    });
                  // January, February, ..., December
                  case "MMMM":
                  default:
                    return (
                      match.month(dateString, {
                        width: "wide",
                        context: "formatting",
                      }) ||
                      match.month(dateString, {
                        width: "abbreviated",
                        context: "formatting",
                      }) ||
                      match.month(dateString, {
                        width: "narrow",
                        context: "formatting",
                      })
                    );
                }
              },
            },
            {
              key: "validate",
              value: function validate(_date, value) {
                return value >= 0 && value <= 11;
              },
            },
            {
              key: "set",
              value: function set(date, _flags, value) {
                date.setUTCMonth(value, 1);
                date.setUTCHours(0, 0, 0, 0);
                return date;
              },
            },
          ]);
          return MonthParser;
        })(_Parser_js__WEBPACK_IMPORTED_MODULE_8__.Parser);

        /***/
      },

    /***/ "./node_modules/date-fns/esm/parse/_lib/parsers/QuarterParser.js":
      /*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/QuarterParser.js ***!
  \***********************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ QuarterParser: () => /* binding */ QuarterParser,
          /* harmony export */
        });
        /* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js"
          );
        /* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../Parser.js */ "./node_modules/date-fns/esm/parse/_lib/Parser.js"
          );
        /* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../utils.js */ "./node_modules/date-fns/esm/parse/_lib/utils.js"
          );

        var QuarterParser = /*#__PURE__*/ (function (_Parser) {
          (0,
          _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[
            "default"
          ])(QuarterParser, _Parser);
          var _super = (0,
          _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[
            "default"
          ])(QuarterParser);
          function QuarterParser() {
            var _this;
            (0,
            _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ])(this, QuarterParser);
            for (
              var _len = arguments.length, args = new Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }
            _this = _super.call.apply(_super, [this].concat(args));
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(_this),
              "priority",
              120
            );
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(_this),
              "incompatibleTokens",
              [
                "Y",
                "R",
                "q",
                "M",
                "L",
                "w",
                "I",
                "d",
                "D",
                "i",
                "e",
                "c",
                "t",
                "T",
              ]
            );
            return _this;
          }
          (0,
          _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[
            "default"
          ])(QuarterParser, [
            {
              key: "parse",
              value: function parse(dateString, token, match) {
                switch (token) {
                  // 1, 2, 3, 4
                  case "Q":
                  case "QQ":
                    // 01, 02, 03, 04
                    return (0,
                    _utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNDigits)(
                      token.length,
                      dateString
                    );
                  // 1st, 2nd, 3rd, 4th
                  case "Qo":
                    return match.ordinalNumber(dateString, {
                      unit: "quarter",
                    });
                  // Q1, Q2, Q3, Q4
                  case "QQQ":
                    return (
                      match.quarter(dateString, {
                        width: "abbreviated",
                        context: "formatting",
                      }) ||
                      match.quarter(dateString, {
                        width: "narrow",
                        context: "formatting",
                      })
                    );
                  // 1, 2, 3, 4 (narrow quarter; could be not numerical)
                  case "QQQQQ":
                    return match.quarter(dateString, {
                      width: "narrow",
                      context: "formatting",
                    });
                  // 1st quarter, 2nd quarter, ...
                  case "QQQQ":
                  default:
                    return (
                      match.quarter(dateString, {
                        width: "wide",
                        context: "formatting",
                      }) ||
                      match.quarter(dateString, {
                        width: "abbreviated",
                        context: "formatting",
                      }) ||
                      match.quarter(dateString, {
                        width: "narrow",
                        context: "formatting",
                      })
                    );
                }
              },
            },
            {
              key: "validate",
              value: function validate(_date, value) {
                return value >= 1 && value <= 4;
              },
            },
            {
              key: "set",
              value: function set(date, _flags, value) {
                date.setUTCMonth((value - 1) * 3, 1);
                date.setUTCHours(0, 0, 0, 0);
                return date;
              },
            },
          ]);
          return QuarterParser;
        })(_Parser_js__WEBPACK_IMPORTED_MODULE_7__.Parser);

        /***/
      },

    /***/ "./node_modules/date-fns/esm/parse/_lib/parsers/SecondParser.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/SecondParser.js ***!
  \**********************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ SecondParser: () => /* binding */ SecondParser,
          /* harmony export */
        });
        /* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js"
          );
        /* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ../Parser.js */ "./node_modules/date-fns/esm/parse/_lib/Parser.js"
          );
        /* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../constants.js */ "./node_modules/date-fns/esm/parse/_lib/constants.js"
          );
        /* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../utils.js */ "./node_modules/date-fns/esm/parse/_lib/utils.js"
          );

        var SecondParser = /*#__PURE__*/ (function (_Parser) {
          (0,
          _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[
            "default"
          ])(SecondParser, _Parser);
          var _super = (0,
          _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[
            "default"
          ])(SecondParser);
          function SecondParser() {
            var _this;
            (0,
            _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ])(this, SecondParser);
            for (
              var _len = arguments.length, args = new Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }
            _this = _super.call.apply(_super, [this].concat(args));
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(_this),
              "priority",
              50
            );
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(_this),
              "incompatibleTokens",
              ["t", "T"]
            );
            return _this;
          }
          (0,
          _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[
            "default"
          ])(SecondParser, [
            {
              key: "parse",
              value: function parse(dateString, token, match) {
                switch (token) {
                  case "s":
                    return (0,
                    _utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNumericPattern)(
                      _constants_js__WEBPACK_IMPORTED_MODULE_7__.numericPatterns
                        .second,
                      dateString
                    );
                  case "so":
                    return match.ordinalNumber(dateString, {
                      unit: "second",
                    });
                  default:
                    return (0,
                    _utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNDigits)(
                      token.length,
                      dateString
                    );
                }
              },
            },
            {
              key: "validate",
              value: function validate(_date, value) {
                return value >= 0 && value <= 59;
              },
            },
            {
              key: "set",
              value: function set(date, _flags, value) {
                date.setUTCSeconds(value, 0);
                return date;
              },
            },
          ]);
          return SecondParser;
        })(_Parser_js__WEBPACK_IMPORTED_MODULE_8__.Parser);

        /***/
      },

    /***/ "./node_modules/date-fns/esm/parse/_lib/parsers/StandAloneLocalDayParser.js":
      /*!**********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/StandAloneLocalDayParser.js ***!
  \**********************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ StandAloneLocalDayParser: () =>
            /* binding */ StandAloneLocalDayParser,
          /* harmony export */
        });
        /* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js"
          );
        /* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ../Parser.js */ "./node_modules/date-fns/esm/parse/_lib/Parser.js"
          );
        /* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../utils.js */ "./node_modules/date-fns/esm/parse/_lib/utils.js"
          );
        /* harmony import */ var _lib_setUTCDay_index_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../../../_lib/setUTCDay/index.js */ "./node_modules/date-fns/esm/_lib/setUTCDay/index.js"
          );

        // Stand-alone local day of week
        var StandAloneLocalDayParser = /*#__PURE__*/ (function (_Parser) {
          (0,
          _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[
            "default"
          ])(StandAloneLocalDayParser, _Parser);
          var _super = (0,
          _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[
            "default"
          ])(StandAloneLocalDayParser);
          function StandAloneLocalDayParser() {
            var _this;
            (0,
            _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ])(this, StandAloneLocalDayParser);
            for (
              var _len = arguments.length, args = new Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }
            _this = _super.call.apply(_super, [this].concat(args));
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(_this),
              "priority",
              90
            );
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(_this),
              "incompatibleTokens",
              [
                "y",
                "R",
                "u",
                "q",
                "Q",
                "M",
                "L",
                "I",
                "d",
                "D",
                "E",
                "i",
                "e",
                "t",
                "T",
              ]
            );
            return _this;
          }
          (0,
          _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[
            "default"
          ])(StandAloneLocalDayParser, [
            {
              key: "parse",
              value: function parse(dateString, token, match, options) {
                var valueCallback = function valueCallback(value) {
                  var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
                  return (
                    ((value + options.weekStartsOn + 6) % 7) + wholeWeekDays
                  );
                };
                switch (token) {
                  // 3
                  case "c":
                  case "cc":
                    // 03
                    return (0, _utils_js__WEBPACK_IMPORTED_MODULE_6__.mapValue)(
                      (0, _utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNDigits)(
                        token.length,
                        dateString
                      ),
                      valueCallback
                    );
                  // 3rd
                  case "co":
                    return (0, _utils_js__WEBPACK_IMPORTED_MODULE_6__.mapValue)(
                      match.ordinalNumber(dateString, {
                        unit: "day",
                      }),
                      valueCallback
                    );
                  // Tue
                  case "ccc":
                    return (
                      match.day(dateString, {
                        width: "abbreviated",
                        context: "standalone",
                      }) ||
                      match.day(dateString, {
                        width: "short",
                        context: "standalone",
                      }) ||
                      match.day(dateString, {
                        width: "narrow",
                        context: "standalone",
                      })
                    );
                  // T
                  case "ccccc":
                    return match.day(dateString, {
                      width: "narrow",
                      context: "standalone",
                    });
                  // Tu
                  case "cccccc":
                    return (
                      match.day(dateString, {
                        width: "short",
                        context: "standalone",
                      }) ||
                      match.day(dateString, {
                        width: "narrow",
                        context: "standalone",
                      })
                    );
                  // Tuesday
                  case "cccc":
                  default:
                    return (
                      match.day(dateString, {
                        width: "wide",
                        context: "standalone",
                      }) ||
                      match.day(dateString, {
                        width: "abbreviated",
                        context: "standalone",
                      }) ||
                      match.day(dateString, {
                        width: "short",
                        context: "standalone",
                      }) ||
                      match.day(dateString, {
                        width: "narrow",
                        context: "standalone",
                      })
                    );
                }
              },
            },
            {
              key: "validate",
              value: function validate(_date, value) {
                return value >= 0 && value <= 6;
              },
            },
            {
              key: "set",
              value: function set(date, _flags, value, options) {
                date = (0,
                _lib_setUTCDay_index_js__WEBPACK_IMPORTED_MODULE_7__[
                  "default"
                ])(date, value, options);
                date.setUTCHours(0, 0, 0, 0);
                return date;
              },
            },
          ]);
          return StandAloneLocalDayParser;
        })(_Parser_js__WEBPACK_IMPORTED_MODULE_8__.Parser);

        /***/
      },

    /***/ "./node_modules/date-fns/esm/parse/_lib/parsers/StandAloneMonthParser.js":
      /*!*******************************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/StandAloneMonthParser.js ***!
  \*******************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ StandAloneMonthParser: () =>
            /* binding */ StandAloneMonthParser,
          /* harmony export */
        });
        /* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js"
          );
        /* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ../Parser.js */ "./node_modules/date-fns/esm/parse/_lib/Parser.js"
          );
        /* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../constants.js */ "./node_modules/date-fns/esm/parse/_lib/constants.js"
          );
        /* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../utils.js */ "./node_modules/date-fns/esm/parse/_lib/utils.js"
          );

        var StandAloneMonthParser = /*#__PURE__*/ (function (_Parser) {
          (0,
          _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[
            "default"
          ])(StandAloneMonthParser, _Parser);
          var _super = (0,
          _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[
            "default"
          ])(StandAloneMonthParser);
          function StandAloneMonthParser() {
            var _this;
            (0,
            _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ])(this, StandAloneMonthParser);
            for (
              var _len = arguments.length, args = new Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }
            _this = _super.call.apply(_super, [this].concat(args));
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(_this),
              "priority",
              110
            );
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(_this),
              "incompatibleTokens",
              ["Y", "R", "q", "Q", "M", "w", "I", "D", "i", "e", "c", "t", "T"]
            );
            return _this;
          }
          (0,
          _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[
            "default"
          ])(StandAloneMonthParser, [
            {
              key: "parse",
              value: function parse(dateString, token, match) {
                var valueCallback = function valueCallback(value) {
                  return value - 1;
                };
                switch (token) {
                  // 1, 2, ..., 12
                  case "L":
                    return (0, _utils_js__WEBPACK_IMPORTED_MODULE_6__.mapValue)(
                      (0,
                      _utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNumericPattern)(
                        _constants_js__WEBPACK_IMPORTED_MODULE_7__
                          .numericPatterns.month,
                        dateString
                      ),
                      valueCallback
                    );
                  // 01, 02, ..., 12
                  case "LL":
                    return (0, _utils_js__WEBPACK_IMPORTED_MODULE_6__.mapValue)(
                      (0, _utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNDigits)(
                        2,
                        dateString
                      ),
                      valueCallback
                    );
                  // 1st, 2nd, ..., 12th
                  case "Lo":
                    return (0, _utils_js__WEBPACK_IMPORTED_MODULE_6__.mapValue)(
                      match.ordinalNumber(dateString, {
                        unit: "month",
                      }),
                      valueCallback
                    );
                  // Jan, Feb, ..., Dec
                  case "LLL":
                    return (
                      match.month(dateString, {
                        width: "abbreviated",
                        context: "standalone",
                      }) ||
                      match.month(dateString, {
                        width: "narrow",
                        context: "standalone",
                      })
                    );
                  // J, F, ..., D
                  case "LLLLL":
                    return match.month(dateString, {
                      width: "narrow",
                      context: "standalone",
                    });
                  // January, February, ..., December
                  case "LLLL":
                  default:
                    return (
                      match.month(dateString, {
                        width: "wide",
                        context: "standalone",
                      }) ||
                      match.month(dateString, {
                        width: "abbreviated",
                        context: "standalone",
                      }) ||
                      match.month(dateString, {
                        width: "narrow",
                        context: "standalone",
                      })
                    );
                }
              },
            },
            {
              key: "validate",
              value: function validate(_date, value) {
                return value >= 0 && value <= 11;
              },
            },
            {
              key: "set",
              value: function set(date, _flags, value) {
                date.setUTCMonth(value, 1);
                date.setUTCHours(0, 0, 0, 0);
                return date;
              },
            },
          ]);
          return StandAloneMonthParser;
        })(_Parser_js__WEBPACK_IMPORTED_MODULE_8__.Parser);

        /***/
      },

    /***/ "./node_modules/date-fns/esm/parse/_lib/parsers/StandAloneQuarterParser.js":
      /*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/StandAloneQuarterParser.js ***!
  \*********************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ StandAloneQuarterParser: () =>
            /* binding */ StandAloneQuarterParser,
          /* harmony export */
        });
        /* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js"
          );
        /* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../Parser.js */ "./node_modules/date-fns/esm/parse/_lib/Parser.js"
          );
        /* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../utils.js */ "./node_modules/date-fns/esm/parse/_lib/utils.js"
          );

        var StandAloneQuarterParser = /*#__PURE__*/ (function (_Parser) {
          (0,
          _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[
            "default"
          ])(StandAloneQuarterParser, _Parser);
          var _super = (0,
          _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[
            "default"
          ])(StandAloneQuarterParser);
          function StandAloneQuarterParser() {
            var _this;
            (0,
            _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ])(this, StandAloneQuarterParser);
            for (
              var _len = arguments.length, args = new Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }
            _this = _super.call.apply(_super, [this].concat(args));
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(_this),
              "priority",
              120
            );
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(_this),
              "incompatibleTokens",
              [
                "Y",
                "R",
                "Q",
                "M",
                "L",
                "w",
                "I",
                "d",
                "D",
                "i",
                "e",
                "c",
                "t",
                "T",
              ]
            );
            return _this;
          }
          (0,
          _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[
            "default"
          ])(StandAloneQuarterParser, [
            {
              key: "parse",
              value: function parse(dateString, token, match) {
                switch (token) {
                  // 1, 2, 3, 4
                  case "q":
                  case "qq":
                    // 01, 02, 03, 04
                    return (0,
                    _utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNDigits)(
                      token.length,
                      dateString
                    );
                  // 1st, 2nd, 3rd, 4th
                  case "qo":
                    return match.ordinalNumber(dateString, {
                      unit: "quarter",
                    });
                  // Q1, Q2, Q3, Q4
                  case "qqq":
                    return (
                      match.quarter(dateString, {
                        width: "abbreviated",
                        context: "standalone",
                      }) ||
                      match.quarter(dateString, {
                        width: "narrow",
                        context: "standalone",
                      })
                    );
                  // 1, 2, 3, 4 (narrow quarter; could be not numerical)
                  case "qqqqq":
                    return match.quarter(dateString, {
                      width: "narrow",
                      context: "standalone",
                    });
                  // 1st quarter, 2nd quarter, ...
                  case "qqqq":
                  default:
                    return (
                      match.quarter(dateString, {
                        width: "wide",
                        context: "standalone",
                      }) ||
                      match.quarter(dateString, {
                        width: "abbreviated",
                        context: "standalone",
                      }) ||
                      match.quarter(dateString, {
                        width: "narrow",
                        context: "standalone",
                      })
                    );
                }
              },
            },
            {
              key: "validate",
              value: function validate(_date, value) {
                return value >= 1 && value <= 4;
              },
            },
            {
              key: "set",
              value: function set(date, _flags, value) {
                date.setUTCMonth((value - 1) * 3, 1);
                date.setUTCHours(0, 0, 0, 0);
                return date;
              },
            },
          ]);
          return StandAloneQuarterParser;
        })(_Parser_js__WEBPACK_IMPORTED_MODULE_7__.Parser);

        /***/
      },

    /***/ "./node_modules/date-fns/esm/parse/_lib/parsers/TimestampMillisecondsParser.js":
      /*!*************************************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/TimestampMillisecondsParser.js ***!
  \*************************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ TimestampMillisecondsParser: () =>
            /* binding */ TimestampMillisecondsParser,
          /* harmony export */
        });
        /* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js"
          );
        /* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../Parser.js */ "./node_modules/date-fns/esm/parse/_lib/Parser.js"
          );
        /* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../utils.js */ "./node_modules/date-fns/esm/parse/_lib/utils.js"
          );

        var TimestampMillisecondsParser = /*#__PURE__*/ (function (_Parser) {
          (0,
          _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[
            "default"
          ])(TimestampMillisecondsParser, _Parser);
          var _super = (0,
          _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[
            "default"
          ])(TimestampMillisecondsParser);
          function TimestampMillisecondsParser() {
            var _this;
            (0,
            _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ])(this, TimestampMillisecondsParser);
            for (
              var _len = arguments.length, args = new Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }
            _this = _super.call.apply(_super, [this].concat(args));
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(_this),
              "priority",
              20
            );
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(_this),
              "incompatibleTokens",
              "*"
            );
            return _this;
          }
          (0,
          _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[
            "default"
          ])(TimestampMillisecondsParser, [
            {
              key: "parse",
              value: function parse(dateString) {
                return (0,
                _utils_js__WEBPACK_IMPORTED_MODULE_6__.parseAnyDigitsSigned)(
                  dateString
                );
              },
            },
            {
              key: "set",
              value: function set(_date, _flags, value) {
                return [
                  new Date(value),
                  {
                    timestampIsSet: true,
                  },
                ];
              },
            },
          ]);
          return TimestampMillisecondsParser;
        })(_Parser_js__WEBPACK_IMPORTED_MODULE_7__.Parser);

        /***/
      },

    /***/ "./node_modules/date-fns/esm/parse/_lib/parsers/TimestampSecondsParser.js":
      /*!********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/TimestampSecondsParser.js ***!
  \********************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ TimestampSecondsParser: () =>
            /* binding */ TimestampSecondsParser,
          /* harmony export */
        });
        /* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js"
          );
        /* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../Parser.js */ "./node_modules/date-fns/esm/parse/_lib/Parser.js"
          );
        /* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../utils.js */ "./node_modules/date-fns/esm/parse/_lib/utils.js"
          );

        var TimestampSecondsParser = /*#__PURE__*/ (function (_Parser) {
          (0,
          _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[
            "default"
          ])(TimestampSecondsParser, _Parser);
          var _super = (0,
          _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[
            "default"
          ])(TimestampSecondsParser);
          function TimestampSecondsParser() {
            var _this;
            (0,
            _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ])(this, TimestampSecondsParser);
            for (
              var _len = arguments.length, args = new Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }
            _this = _super.call.apply(_super, [this].concat(args));
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(_this),
              "priority",
              40
            );
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(_this),
              "incompatibleTokens",
              "*"
            );
            return _this;
          }
          (0,
          _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[
            "default"
          ])(TimestampSecondsParser, [
            {
              key: "parse",
              value: function parse(dateString) {
                return (0,
                _utils_js__WEBPACK_IMPORTED_MODULE_6__.parseAnyDigitsSigned)(
                  dateString
                );
              },
            },
            {
              key: "set",
              value: function set(_date, _flags, value) {
                return [
                  new Date(value * 1000),
                  {
                    timestampIsSet: true,
                  },
                ];
              },
            },
          ]);
          return TimestampSecondsParser;
        })(_Parser_js__WEBPACK_IMPORTED_MODULE_7__.Parser);

        /***/
      },

    /***/ "./node_modules/date-fns/esm/parse/_lib/parsers/YearParser.js":
      /*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/YearParser.js ***!
  \********************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ YearParser: () => /* binding */ YearParser,
          /* harmony export */
        });
        /* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js"
          );
        /* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../Parser.js */ "./node_modules/date-fns/esm/parse/_lib/Parser.js"
          );
        /* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../utils.js */ "./node_modules/date-fns/esm/parse/_lib/utils.js"
          );

        // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_Patterns
        // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
        // |----------|-------|----|-------|-------|-------|
        // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
        // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
        // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
        // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
        // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
        var YearParser = /*#__PURE__*/ (function (_Parser) {
          (0,
          _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[
            "default"
          ])(YearParser, _Parser);
          var _super = (0,
          _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[
            "default"
          ])(YearParser);
          function YearParser() {
            var _this;
            (0,
            _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ])(this, YearParser);
            for (
              var _len = arguments.length, args = new Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }
            _this = _super.call.apply(_super, [this].concat(args));
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(_this),
              "priority",
              130
            );
            (0,
            _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ])(
              (0,
              _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ])(_this),
              "incompatibleTokens",
              ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]
            );
            return _this;
          }
          (0,
          _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[
            "default"
          ])(YearParser, [
            {
              key: "parse",
              value: function parse(dateString, token, match) {
                var valueCallback = function valueCallback(year) {
                  return {
                    year: year,
                    isTwoDigitYear: token === "yy",
                  };
                };
                switch (token) {
                  case "y":
                    return (0, _utils_js__WEBPACK_IMPORTED_MODULE_6__.mapValue)(
                      (0, _utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNDigits)(
                        4,
                        dateString
                      ),
                      valueCallback
                    );
                  case "yo":
                    return (0, _utils_js__WEBPACK_IMPORTED_MODULE_6__.mapValue)(
                      match.ordinalNumber(dateString, {
                        unit: "year",
                      }),
                      valueCallback
                    );
                  default:
                    return (0, _utils_js__WEBPACK_IMPORTED_MODULE_6__.mapValue)(
                      (0, _utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNDigits)(
                        token.length,
                        dateString
                      ),
                      valueCallback
                    );
                }
              },
            },
            {
              key: "validate",
              value: function validate(_date, value) {
                return value.isTwoDigitYear || value.year > 0;
              },
            },
            {
              key: "set",
              value: function set(date, flags, value) {
                var currentYear = date.getUTCFullYear();
                if (value.isTwoDigitYear) {
                  var normalizedTwoDigitYear = (0,
                  _utils_js__WEBPACK_IMPORTED_MODULE_6__.normalizeTwoDigitYear)(
                    value.year,
                    currentYear
                  );
                  date.setUTCFullYear(normalizedTwoDigitYear, 0, 1);
                  date.setUTCHours(0, 0, 0, 0);
                  return date;
                }
                var year =
                  !("era" in flags) || flags.era === 1
                    ? value.year
                    : 1 - value.year;
                date.setUTCFullYear(year, 0, 1);
                date.setUTCHours(0, 0, 0, 0);
                return date;
              },
            },
          ]);
          return YearParser;
        })(_Parser_js__WEBPACK_IMPORTED_MODULE_7__.Parser);

        /***/
      },

    /***/ "./node_modules/date-fns/esm/parse/_lib/parsers/index.js":
      /*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/index.js ***!
  \***************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ parsers: () => /* binding */ parsers,
          /* harmony export */
        });
        /* harmony import */ var _EraParser_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./EraParser.js */ "./node_modules/date-fns/esm/parse/_lib/parsers/EraParser.js"
          );
        /* harmony import */ var _YearParser_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./YearParser.js */ "./node_modules/date-fns/esm/parse/_lib/parsers/YearParser.js"
          );
        /* harmony import */ var _LocalWeekYearParser_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./LocalWeekYearParser.js */ "./node_modules/date-fns/esm/parse/_lib/parsers/LocalWeekYearParser.js"
          );
        /* harmony import */ var _ISOWeekYearParser_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ./ISOWeekYearParser.js */ "./node_modules/date-fns/esm/parse/_lib/parsers/ISOWeekYearParser.js"
          );
        /* harmony import */ var _ExtendedYearParser_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ./ExtendedYearParser.js */ "./node_modules/date-fns/esm/parse/_lib/parsers/ExtendedYearParser.js"
          );
        /* harmony import */ var _QuarterParser_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ./QuarterParser.js */ "./node_modules/date-fns/esm/parse/_lib/parsers/QuarterParser.js"
          );
        /* harmony import */ var _StandAloneQuarterParser_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ./StandAloneQuarterParser.js */ "./node_modules/date-fns/esm/parse/_lib/parsers/StandAloneQuarterParser.js"
          );
        /* harmony import */ var _MonthParser_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ./MonthParser.js */ "./node_modules/date-fns/esm/parse/_lib/parsers/MonthParser.js"
          );
        /* harmony import */ var _StandAloneMonthParser_js__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ./StandAloneMonthParser.js */ "./node_modules/date-fns/esm/parse/_lib/parsers/StandAloneMonthParser.js"
          );
        /* harmony import */ var _LocalWeekParser_js__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! ./LocalWeekParser.js */ "./node_modules/date-fns/esm/parse/_lib/parsers/LocalWeekParser.js"
          );
        /* harmony import */ var _ISOWeekParser_js__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            /*! ./ISOWeekParser.js */ "./node_modules/date-fns/esm/parse/_lib/parsers/ISOWeekParser.js"
          );
        /* harmony import */ var _DateParser_js__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(
            /*! ./DateParser.js */ "./node_modules/date-fns/esm/parse/_lib/parsers/DateParser.js"
          );
        /* harmony import */ var _DayOfYearParser_js__WEBPACK_IMPORTED_MODULE_12__ =
          __webpack_require__(
            /*! ./DayOfYearParser.js */ "./node_modules/date-fns/esm/parse/_lib/parsers/DayOfYearParser.js"
          );
        /* harmony import */ var _DayParser_js__WEBPACK_IMPORTED_MODULE_13__ =
          __webpack_require__(
            /*! ./DayParser.js */ "./node_modules/date-fns/esm/parse/_lib/parsers/DayParser.js"
          );
        /* harmony import */ var _LocalDayParser_js__WEBPACK_IMPORTED_MODULE_14__ =
          __webpack_require__(
            /*! ./LocalDayParser.js */ "./node_modules/date-fns/esm/parse/_lib/parsers/LocalDayParser.js"
          );
        /* harmony import */ var _StandAloneLocalDayParser_js__WEBPACK_IMPORTED_MODULE_15__ =
          __webpack_require__(
            /*! ./StandAloneLocalDayParser.js */ "./node_modules/date-fns/esm/parse/_lib/parsers/StandAloneLocalDayParser.js"
          );
        /* harmony import */ var _ISODayParser_js__WEBPACK_IMPORTED_MODULE_16__ =
          __webpack_require__(
            /*! ./ISODayParser.js */ "./node_modules/date-fns/esm/parse/_lib/parsers/ISODayParser.js"
          );
        /* harmony import */ var _AMPMParser_js__WEBPACK_IMPORTED_MODULE_17__ =
          __webpack_require__(
            /*! ./AMPMParser.js */ "./node_modules/date-fns/esm/parse/_lib/parsers/AMPMParser.js"
          );
        /* harmony import */ var _AMPMMidnightParser_js__WEBPACK_IMPORTED_MODULE_18__ =
          __webpack_require__(
            /*! ./AMPMMidnightParser.js */ "./node_modules/date-fns/esm/parse/_lib/parsers/AMPMMidnightParser.js"
          );
        /* harmony import */ var _DayPeriodParser_js__WEBPACK_IMPORTED_MODULE_19__ =
          __webpack_require__(
            /*! ./DayPeriodParser.js */ "./node_modules/date-fns/esm/parse/_lib/parsers/DayPeriodParser.js"
          );
        /* harmony import */ var _Hour1to12Parser_js__WEBPACK_IMPORTED_MODULE_20__ =
          __webpack_require__(
            /*! ./Hour1to12Parser.js */ "./node_modules/date-fns/esm/parse/_lib/parsers/Hour1to12Parser.js"
          );
        /* harmony import */ var _Hour0to23Parser_js__WEBPACK_IMPORTED_MODULE_21__ =
          __webpack_require__(
            /*! ./Hour0to23Parser.js */ "./node_modules/date-fns/esm/parse/_lib/parsers/Hour0to23Parser.js"
          );
        /* harmony import */ var _Hour0To11Parser_js__WEBPACK_IMPORTED_MODULE_22__ =
          __webpack_require__(
            /*! ./Hour0To11Parser.js */ "./node_modules/date-fns/esm/parse/_lib/parsers/Hour0To11Parser.js"
          );
        /* harmony import */ var _Hour1To24Parser_js__WEBPACK_IMPORTED_MODULE_23__ =
          __webpack_require__(
            /*! ./Hour1To24Parser.js */ "./node_modules/date-fns/esm/parse/_lib/parsers/Hour1To24Parser.js"
          );
        /* harmony import */ var _MinuteParser_js__WEBPACK_IMPORTED_MODULE_24__ =
          __webpack_require__(
            /*! ./MinuteParser.js */ "./node_modules/date-fns/esm/parse/_lib/parsers/MinuteParser.js"
          );
        /* harmony import */ var _SecondParser_js__WEBPACK_IMPORTED_MODULE_25__ =
          __webpack_require__(
            /*! ./SecondParser.js */ "./node_modules/date-fns/esm/parse/_lib/parsers/SecondParser.js"
          );
        /* harmony import */ var _FractionOfSecondParser_js__WEBPACK_IMPORTED_MODULE_26__ =
          __webpack_require__(
            /*! ./FractionOfSecondParser.js */ "./node_modules/date-fns/esm/parse/_lib/parsers/FractionOfSecondParser.js"
          );
        /* harmony import */ var _ISOcurrentTimeZoneWithZParser_js__WEBPACK_IMPORTED_MODULE_27__ =
          __webpack_require__(
            /*! ./ISOcurrentTimeZoneWithZParser.js */ "./node_modules/date-fns/esm/parse/_lib/parsers/ISOcurrentTimeZoneWithZParser.js"
          );
        /* harmony import */ var _ISOcurrentTimeZoneParser_js__WEBPACK_IMPORTED_MODULE_28__ =
          __webpack_require__(
            /*! ./ISOcurrentTimeZoneParser.js */ "./node_modules/date-fns/esm/parse/_lib/parsers/ISOcurrentTimeZoneParser.js"
          );
        /* harmony import */ var _TimestampSecondsParser_js__WEBPACK_IMPORTED_MODULE_29__ =
          __webpack_require__(
            /*! ./TimestampSecondsParser.js */ "./node_modules/date-fns/esm/parse/_lib/parsers/TimestampSecondsParser.js"
          );
        /* harmony import */ var _TimestampMillisecondsParser_js__WEBPACK_IMPORTED_MODULE_30__ =
          __webpack_require__(
            /*! ./TimestampMillisecondsParser.js */ "./node_modules/date-fns/esm/parse/_lib/parsers/TimestampMillisecondsParser.js"
          );

        /*
         * |     | Unit                           |     | Unit                           |
         * |-----|--------------------------------|-----|--------------------------------|
         * |  a  | AM, PM                         |  A* | Milliseconds in day            |
         * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
         * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
         * |  d  | Day of month                   |  D  | Day of year                    |
         * |  e  | Local day of week              |  E  | Day of week                    |
         * |  f  |                                |  F* | Day of week in month           |
         * |  g* | Modified Julian day            |  G  | Era                            |
         * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
         * |  i! | ISO day of week                |  I! | ISO week of year               |
         * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
         * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
         * |  l* | (deprecated)                   |  L  | Stand-alone month              |
         * |  m  | Minute                         |  M  | Month                          |
         * |  n  |                                |  N  |                                |
         * |  o! | Ordinal number modifier        |  O* | currentTimeZone (GMT)                 |
         * |  p  |                                |  P  |                                |
         * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
         * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
         * |  s  | Second                         |  S  | Fraction of second             |
         * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
         * |  u  | Extended year                  |  U* | Cyclic year                    |
         * |  v* | currentTimeZone (generic non-locat.)  |  V* | currentTimeZone (location)            |
         * |  w  | Local week of year             |  W* | Week of month                  |
         * |  x  | currentTimeZone (ISO-8601 w/o Z)      |  X  | currentTimeZone (ISO-8601)            |
         * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
         * |  z* | currentTimeZone (specific non-locat.) |  Z* | currentTimeZone (aliases)             |
         *
         * Letters marked by * are not implemented but reserved by Unicode standard.
         *
         * Letters marked by ! are non-standard, but implemented by date-fns:
         * - `o` modifies the previous token to turn it into an ordinal (see `parse` docs)
         * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
         *   i.e. 7 for Sunday, 1 for Monday, etc.
         * - `I` is ISO week of year, as opposed to `w` which is local week of year.
         * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
         *   `R` is supposed to be used in conjunction with `I` and `i`
         *   for universal ISO week-numbering date, whereas
         *   `Y` is supposed to be used in conjunction with `w` and `e`
         *   for week-numbering date specific to the locale.
         */
        var parsers = {
          G: new _EraParser_js__WEBPACK_IMPORTED_MODULE_0__.EraParser(),
          y: new _YearParser_js__WEBPACK_IMPORTED_MODULE_1__.YearParser(),
          Y: new _LocalWeekYearParser_js__WEBPACK_IMPORTED_MODULE_2__.LocalWeekYearParser(),
          R: new _ISOWeekYearParser_js__WEBPACK_IMPORTED_MODULE_3__.ISOWeekYearParser(),
          u: new _ExtendedYearParser_js__WEBPACK_IMPORTED_MODULE_4__.ExtendedYearParser(),
          Q: new _QuarterParser_js__WEBPACK_IMPORTED_MODULE_5__.QuarterParser(),
          q: new _StandAloneQuarterParser_js__WEBPACK_IMPORTED_MODULE_6__.StandAloneQuarterParser(),
          M: new _MonthParser_js__WEBPACK_IMPORTED_MODULE_7__.MonthParser(),
          L: new _StandAloneMonthParser_js__WEBPACK_IMPORTED_MODULE_8__.StandAloneMonthParser(),
          w: new _LocalWeekParser_js__WEBPACK_IMPORTED_MODULE_9__.LocalWeekParser(),
          I: new _ISOWeekParser_js__WEBPACK_IMPORTED_MODULE_10__.ISOWeekParser(),
          d: new _DateParser_js__WEBPACK_IMPORTED_MODULE_11__.DateParser(),
          D: new _DayOfYearParser_js__WEBPACK_IMPORTED_MODULE_12__.DayOfYearParser(),
          E: new _DayParser_js__WEBPACK_IMPORTED_MODULE_13__.DayParser(),
          e: new _LocalDayParser_js__WEBPACK_IMPORTED_MODULE_14__.LocalDayParser(),
          c: new _StandAloneLocalDayParser_js__WEBPACK_IMPORTED_MODULE_15__.StandAloneLocalDayParser(),
          i: new _ISODayParser_js__WEBPACK_IMPORTED_MODULE_16__.ISODayParser(),
          a: new _AMPMParser_js__WEBPACK_IMPORTED_MODULE_17__.AMPMParser(),
          b: new _AMPMMidnightParser_js__WEBPACK_IMPORTED_MODULE_18__.AMPMMidnightParser(),
          B: new _DayPeriodParser_js__WEBPACK_IMPORTED_MODULE_19__.DayPeriodParser(),
          h: new _Hour1to12Parser_js__WEBPACK_IMPORTED_MODULE_20__.Hour1to12Parser(),
          H: new _Hour0to23Parser_js__WEBPACK_IMPORTED_MODULE_21__.Hour0to23Parser(),
          K: new _Hour0To11Parser_js__WEBPACK_IMPORTED_MODULE_22__.Hour0To11Parser(),
          k: new _Hour1To24Parser_js__WEBPACK_IMPORTED_MODULE_23__.Hour1To24Parser(),
          m: new _MinuteParser_js__WEBPACK_IMPORTED_MODULE_24__.MinuteParser(),
          s: new _SecondParser_js__WEBPACK_IMPORTED_MODULE_25__.SecondParser(),
          S: new _FractionOfSecondParser_js__WEBPACK_IMPORTED_MODULE_26__.FractionOfSecondParser(),
          X: new _ISOcurrentTimeZoneWithZParser_js__WEBPACK_IMPORTED_MODULE_27__.ISOcurrentTimeZoneWithZParser(),
          x: new _ISOcurrentTimeZoneParser_js__WEBPACK_IMPORTED_MODULE_28__.ISOcurrentTimeZoneParser(),
          t: new _TimestampSecondsParser_js__WEBPACK_IMPORTED_MODULE_29__.TimestampSecondsParser(),
          T: new _TimestampMillisecondsParser_js__WEBPACK_IMPORTED_MODULE_30__.TimestampMillisecondsParser(),
        };

        /***/
      },

    /***/ "./node_modules/date-fns/esm/parse/_lib/utils.js":
      /*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/utils.js ***!
  \*******************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ dayPeriodEnumToHours: () =>
            /* binding */ dayPeriodEnumToHours,
          /* harmony export */ isLeapYearIndex: () =>
            /* binding */ isLeapYearIndex,
          /* harmony export */ mapValue: () => /* binding */ mapValue,
          /* harmony export */ normalizeTwoDigitYear: () =>
            /* binding */ normalizeTwoDigitYear,
          /* harmony export */ parseAnyDigitsSigned: () =>
            /* binding */ parseAnyDigitsSigned,
          /* harmony export */ parseNDigits: () => /* binding */ parseNDigits,
          /* harmony export */ parseNDigitsSigned: () =>
            /* binding */ parseNDigitsSigned,
          /* harmony export */ parseNumericPattern: () =>
            /* binding */ parseNumericPattern,
          /* harmony export */ parsecurrentTimeZonePattern: () =>
            /* binding */ parsecurrentTimeZonePattern,
          /* harmony export */
        });
        /* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../../constants/index.js */ "./node_modules/date-fns/esm/constants/index.js"
          );
        /* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./constants.js */ "./node_modules/date-fns/esm/parse/_lib/constants.js"
          );

        function mapValue(parseFnResult, mapFn) {
          if (!parseFnResult) {
            return parseFnResult;
          }
          return {
            value: mapFn(parseFnResult.value),
            rest: parseFnResult.rest,
          };
        }
        function parseNumericPattern(pattern, dateString) {
          var matchResult = dateString.match(pattern);
          if (!matchResult) {
            return null;
          }
          return {
            value: parseInt(matchResult[0], 10),
            rest: dateString.slice(matchResult[0].length),
          };
        }
        function parsecurrentTimeZonePattern(pattern, dateString) {
          var matchResult = dateString.match(pattern);
          if (!matchResult) {
            return null;
          }

          // Input is 'Z'
          if (matchResult[0] === "Z") {
            return {
              value: 0,
              rest: dateString.slice(1),
            };
          }
          var sign = matchResult[1] === "+" ? 1 : -1;
          var hours = matchResult[2] ? parseInt(matchResult[2], 10) : 0;
          var minutes = matchResult[3] ? parseInt(matchResult[3], 10) : 0;
          var seconds = matchResult[5] ? parseInt(matchResult[5], 10) : 0;
          return {
            value:
              sign *
              (hours *
                _constants_index_js__WEBPACK_IMPORTED_MODULE_0__.millisecondsInHour +
                minutes *
                  _constants_index_js__WEBPACK_IMPORTED_MODULE_0__.millisecondsInMinute +
                seconds *
                  _constants_index_js__WEBPACK_IMPORTED_MODULE_0__.millisecondsInSecond),
            rest: dateString.slice(matchResult[0].length),
          };
        }
        function parseAnyDigitsSigned(dateString) {
          return parseNumericPattern(
            _constants_js__WEBPACK_IMPORTED_MODULE_1__.numericPatterns
              .anyDigitsSigned,
            dateString
          );
        }
        function parseNDigits(n, dateString) {
          switch (n) {
            case 1:
              return parseNumericPattern(
                _constants_js__WEBPACK_IMPORTED_MODULE_1__.numericPatterns
                  .singleDigit,
                dateString
              );
            case 2:
              return parseNumericPattern(
                _constants_js__WEBPACK_IMPORTED_MODULE_1__.numericPatterns
                  .twoDigits,
                dateString
              );
            case 3:
              return parseNumericPattern(
                _constants_js__WEBPACK_IMPORTED_MODULE_1__.numericPatterns
                  .threeDigits,
                dateString
              );
            case 4:
              return parseNumericPattern(
                _constants_js__WEBPACK_IMPORTED_MODULE_1__.numericPatterns
                  .fourDigits,
                dateString
              );
            default:
              return parseNumericPattern(
                new RegExp("^\\d{1," + n + "}"),
                dateString
              );
          }
        }
        function parseNDigitsSigned(n, dateString) {
          switch (n) {
            case 1:
              return parseNumericPattern(
                _constants_js__WEBPACK_IMPORTED_MODULE_1__.numericPatterns
                  .singleDigitSigned,
                dateString
              );
            case 2:
              return parseNumericPattern(
                _constants_js__WEBPACK_IMPORTED_MODULE_1__.numericPatterns
                  .twoDigitsSigned,
                dateString
              );
            case 3:
              return parseNumericPattern(
                _constants_js__WEBPACK_IMPORTED_MODULE_1__.numericPatterns
                  .threeDigitsSigned,
                dateString
              );
            case 4:
              return parseNumericPattern(
                _constants_js__WEBPACK_IMPORTED_MODULE_1__.numericPatterns
                  .fourDigitsSigned,
                dateString
              );
            default:
              return parseNumericPattern(
                new RegExp("^-?\\d{1," + n + "}"),
                dateString
              );
          }
        }
        function dayPeriodEnumToHours(dayPeriod) {
          switch (dayPeriod) {
            case "morning":
              return 4;
            case "evening":
              return 17;
            case "pm":
            case "noon":
            case "afternoon":
              return 12;
            case "am":
            case "midnight":
            case "night":
            default:
              return 0;
          }
        }
        function normalizeTwoDigitYear(twoDigitYear, currentYear) {
          var isCommonEra = currentYear > 0;
          // Absolute number of the current year:
          // 1 -> 1 AC
          // 0 -> 1 BC
          // -1 -> 2 BC
          var absCurrentYear = isCommonEra ? currentYear : 1 - currentYear;
          var result;
          if (absCurrentYear <= 50) {
            result = twoDigitYear || 100;
          } else {
            var rangeEnd = absCurrentYear + 50;
            var rangeEndCentury = Math.floor(rangeEnd / 100) * 100;
            var isPreviousCentury = twoDigitYear >= rangeEnd % 100;
            result =
              twoDigitYear + rangeEndCentury - (isPreviousCentury ? 100 : 0);
          }
          return isCommonEra ? result : 1 - result;
        }
        function isLeapYearIndex(year) {
          return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
        }

        /***/
      },

    /***/ "./node_modules/date-fns/esm/parse/index.js":
      /*!**************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/index.js ***!
  \**************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ parse,
          /* harmony export */
        });
        /* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js"
          );
        /* harmony import */ var _babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/createForOfIteratorHelper */ "./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js"
          );
        /* harmony import */ var _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../_lib/defaultLocale/index.js */ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js"
          );
        /* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(
            /*! ../subMilliseconds/index.js */ "./node_modules/date-fns/esm/subMilliseconds/index.js"
          );
        /* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js"
          );
        /* harmony import */ var _lib_assign_index_js__WEBPACK_IMPORTED_MODULE_13__ =
          __webpack_require__(
            /*! ../_lib/assign/index.js */ "./node_modules/date-fns/esm/_lib/assign/index.js"
          );
        /* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ../_lib/format/longFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js"
          );
        /* harmony import */ var _lib_getcurrentTimeZoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_12__ =
          __webpack_require__(
            /*! ../_lib/getcurrentTimeZoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getcurrentTimeZoneOffsetInMilliseconds/index.js"
          );
        /* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! ../_lib/protectedTokens/index.js */ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js"
          );
        /* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js"
          );
        /* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js"
          );
        /* harmony import */ var _lib_Setter_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ./_lib/Setter.js */ "./node_modules/date-fns/esm/parse/_lib/Setter.js"
          );
        /* harmony import */ var _lib_parsers_index_js__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            /*! ./_lib/parsers/index.js */ "./node_modules/date-fns/esm/parse/_lib/parsers/index.js"
          );
        /* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js"
          );

        // This RegExp consists of three parts separated by `|`:
        // - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
        //   (one of the certain letters followed by `o`)
        // - (\w)\1* matches any sequences of the same letter
        // - '' matches two quote characters in a row
        // - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
        //   except a single quote symbol, which ends the sequence.
        //   Two quote characters do not end the sequence.
        //   If there is no matching single quote
        //   then the sequence will continue until the end of the string.
        // - . matches any single character unmatched by previous parts of the RegExps
        var formattingTokensRegExp =
          /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

        // This RegExp catches symbols escaped by quotes, and also
        // sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
        var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
        var escapedStringRegExp = /^'([^]*?)'?$/;
        var doubleQuoteRegExp = /''/g;
        var notWhitespaceRegExp = /\S/;
        var unescapedLatinCharacterRegExp = /[a-zA-Z]/;

        /**
         * @name parse
         * @category Common Helpers
         * @summary Parse the date.
         *
         * @description
         * Return the date parsed from string using the given format string.
         *
         * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
         * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
         *
         * The characters in the format string wrapped between two single quotes characters (') are escaped.
         * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
         *
         * Format of the format string is based on Unicode Technical Standard #35:
         * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
         * with a few additions (see note 5 below the table).
         *
         * Not all tokens are compatible. Combinations that don't make sense or could lead to bugs are prohibited
         * and will throw `RangeError`. For example usage of 24-hour format token with AM/PM token will throw an exception:
         *
         * ```javascript
         * parse('23 AM', 'HH a', new Date())
         * //=> RangeError: The format string mustn't contain `HH` and `a` at the same time
         * ```
         *
         * See the compatibility table: https://docs.google.com/spreadsheets/d/e/2PACX-1vQOPU3xUhplll6dyoMmVUXHKl_8CRDs6_ueLmex3SoqwhuolkuN3O05l4rqx5h1dKX8eb46Ul-CCSrq/pubhtml?gid=0&single=true
         *
         * Accepted format string patterns:
         * | Unit                            |Prior| Pattern | Result examples                   | Notes |
         * |---------------------------------|-----|---------|-----------------------------------|-------|
         * | Era                             | 140 | G..GGG  | AD, BC                            |       |
         * |                                 |     | GGGG    | Anno Domini, Before Christ        | 2     |
         * |                                 |     | GGGGG   | A, B                              |       |
         * | Calendar year                   | 130 | y       | 44, 1, 1900, 2017, 9999           | 4     |
         * |                                 |     | yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
         * |                                 |     | yy      | 44, 01, 00, 17                    | 4     |
         * |                                 |     | yyy     | 044, 001, 123, 999                | 4     |
         * |                                 |     | yyyy    | 0044, 0001, 1900, 2017            | 4     |
         * |                                 |     | yyyyy   | ...                               | 2,4   |
         * | Local week-numbering year       | 130 | Y       | 44, 1, 1900, 2017, 9000           | 4     |
         * |                                 |     | Yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
         * |                                 |     | YY      | 44, 01, 00, 17                    | 4,6   |
         * |                                 |     | YYY     | 044, 001, 123, 999                | 4     |
         * |                                 |     | YYYY    | 0044, 0001, 1900, 2017            | 4,6   |
         * |                                 |     | YYYYY   | ...                               | 2,4   |
         * | ISO week-numbering year         | 130 | R       | -43, 1, 1900, 2017, 9999, -9999   | 4,5   |
         * |                                 |     | RR      | -43, 01, 00, 17                   | 4,5   |
         * |                                 |     | RRR     | -043, 001, 123, 999, -999         | 4,5   |
         * |                                 |     | RRRR    | -0043, 0001, 2017, 9999, -9999    | 4,5   |
         * |                                 |     | RRRRR   | ...                               | 2,4,5 |
         * | Extended year                   | 130 | u       | -43, 1, 1900, 2017, 9999, -999    | 4     |
         * |                                 |     | uu      | -43, 01, 99, -99                  | 4     |
         * |                                 |     | uuu     | -043, 001, 123, 999, -999         | 4     |
         * |                                 |     | uuuu    | -0043, 0001, 2017, 9999, -9999    | 4     |
         * |                                 |     | uuuuu   | ...                               | 2,4   |
         * | Quarter (formatting)            | 120 | Q       | 1, 2, 3, 4                        |       |
         * |                                 |     | Qo      | 1st, 2nd, 3rd, 4th                | 5     |
         * |                                 |     | QQ      | 01, 02, 03, 04                    |       |
         * |                                 |     | QQQ     | Q1, Q2, Q3, Q4                    |       |
         * |                                 |     | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
         * |                                 |     | QQQQQ   | 1, 2, 3, 4                        | 4     |
         * | Quarter (stand-alone)           | 120 | q       | 1, 2, 3, 4                        |       |
         * |                                 |     | qo      | 1st, 2nd, 3rd, 4th                | 5     |
         * |                                 |     | qq      | 01, 02, 03, 04                    |       |
         * |                                 |     | qqq     | Q1, Q2, Q3, Q4                    |       |
         * |                                 |     | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
         * |                                 |     | qqqqq   | 1, 2, 3, 4                        | 3     |
         * | Month (formatting)              | 110 | M       | 1, 2, ..., 12                     |       |
         * |                                 |     | Mo      | 1st, 2nd, ..., 12th               | 5     |
         * |                                 |     | MM      | 01, 02, ..., 12                   |       |
         * |                                 |     | MMM     | Jan, Feb, ..., Dec                |       |
         * |                                 |     | MMMM    | January, February, ..., December  | 2     |
         * |                                 |     | MMMMM   | J, F, ..., D                      |       |
         * | Month (stand-alone)             | 110 | L       | 1, 2, ..., 12                     |       |
         * |                                 |     | Lo      | 1st, 2nd, ..., 12th               | 5     |
         * |                                 |     | LL      | 01, 02, ..., 12                   |       |
         * |                                 |     | LLL     | Jan, Feb, ..., Dec                |       |
         * |                                 |     | LLLL    | January, February, ..., December  | 2     |
         * |                                 |     | LLLLL   | J, F, ..., D                      |       |
         * | Local week of year              | 100 | w       | 1, 2, ..., 53                     |       |
         * |                                 |     | wo      | 1st, 2nd, ..., 53th               | 5     |
         * |                                 |     | ww      | 01, 02, ..., 53                   |       |
         * | ISO week of year                | 100 | I       | 1, 2, ..., 53                     | 5     |
         * |                                 |     | Io      | 1st, 2nd, ..., 53th               | 5     |
         * |                                 |     | II      | 01, 02, ..., 53                   | 5     |
         * | Day of month                    |  90 | d       | 1, 2, ..., 31                     |       |
         * |                                 |     | do      | 1st, 2nd, ..., 31st               | 5     |
         * |                                 |     | dd      | 01, 02, ..., 31                   |       |
         * | Day of year                     |  90 | D       | 1, 2, ..., 365, 366               | 7     |
         * |                                 |     | Do      | 1st, 2nd, ..., 365th, 366th       | 5     |
         * |                                 |     | DD      | 01, 02, ..., 365, 366             | 7     |
         * |                                 |     | DDD     | 001, 002, ..., 365, 366           |       |
         * |                                 |     | DDDD    | ...                               | 2     |
         * | Day of week (formatting)        |  90 | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
         * |                                 |     | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
         * |                                 |     | EEEEE   | M, T, W, T, F, S, S               |       |
         * |                                 |     | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
         * | ISO day of week (formatting)    |  90 | i       | 1, 2, 3, ..., 7                   | 5     |
         * |                                 |     | io      | 1st, 2nd, ..., 7th                | 5     |
         * |                                 |     | ii      | 01, 02, ..., 07                   | 5     |
         * |                                 |     | iii     | Mon, Tue, Wed, ..., Sun           | 5     |
         * |                                 |     | iiii    | Monday, Tuesday, ..., Sunday      | 2,5   |
         * |                                 |     | iiiii   | M, T, W, T, F, S, S               | 5     |
         * |                                 |     | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 5     |
         * | Local day of week (formatting)  |  90 | e       | 2, 3, 4, ..., 1                   |       |
         * |                                 |     | eo      | 2nd, 3rd, ..., 1st                | 5     |
         * |                                 |     | ee      | 02, 03, ..., 01                   |       |
         * |                                 |     | eee     | Mon, Tue, Wed, ..., Sun           |       |
         * |                                 |     | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
         * |                                 |     | eeeee   | M, T, W, T, F, S, S               |       |
         * |                                 |     | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
         * | Local day of week (stand-alone) |  90 | c       | 2, 3, 4, ..., 1                   |       |
         * |                                 |     | co      | 2nd, 3rd, ..., 1st                | 5     |
         * |                                 |     | cc      | 02, 03, ..., 01                   |       |
         * |                                 |     | ccc     | Mon, Tue, Wed, ..., Sun           |       |
         * |                                 |     | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
         * |                                 |     | ccccc   | M, T, W, T, F, S, S               |       |
         * |                                 |     | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
         * | AM, PM                          |  80 | a..aaa  | AM, PM                            |       |
         * |                                 |     | aaaa    | a.m., p.m.                        | 2     |
         * |                                 |     | aaaaa   | a, p                              |       |
         * | AM, PM, noon, midnight          |  80 | b..bbb  | AM, PM, noon, midnight            |       |
         * |                                 |     | bbbb    | a.m., p.m., noon, midnight        | 2     |
         * |                                 |     | bbbbb   | a, p, n, mi                       |       |
         * | Flexible day period             |  80 | B..BBB  | at night, in the morning, ...     |       |
         * |                                 |     | BBBB    | at night, in the morning, ...     | 2     |
         * |                                 |     | BBBBB   | at night, in the morning, ...     |       |
         * | Hour [1-12]                     |  70 | h       | 1, 2, ..., 11, 12                 |       |
         * |                                 |     | ho      | 1st, 2nd, ..., 11th, 12th         | 5     |
         * |                                 |     | hh      | 01, 02, ..., 11, 12               |       |
         * | Hour [0-23]                     |  70 | H       | 0, 1, 2, ..., 23                  |       |
         * |                                 |     | Ho      | 0th, 1st, 2nd, ..., 23rd          | 5     |
         * |                                 |     | HH      | 00, 01, 02, ..., 23               |       |
         * | Hour [0-11]                     |  70 | K       | 1, 2, ..., 11, 0                  |       |
         * |                                 |     | Ko      | 1st, 2nd, ..., 11th, 0th          | 5     |
         * |                                 |     | KK      | 01, 02, ..., 11, 00               |       |
         * | Hour [1-24]                     |  70 | k       | 24, 1, 2, ..., 23                 |       |
         * |                                 |     | ko      | 24th, 1st, 2nd, ..., 23rd         | 5     |
         * |                                 |     | kk      | 24, 01, 02, ..., 23               |       |
         * | Minute                          |  60 | m       | 0, 1, ..., 59                     |       |
         * |                                 |     | mo      | 0th, 1st, ..., 59th               | 5     |
         * |                                 |     | mm      | 00, 01, ..., 59                   |       |
         * | Second                          |  50 | s       | 0, 1, ..., 59                     |       |
         * |                                 |     | so      | 0th, 1st, ..., 59th               | 5     |
         * |                                 |     | ss      | 00, 01, ..., 59                   |       |
         * | Seconds timestamp               |  40 | t       | 512969520                         |       |
         * |                                 |     | tt      | ...                               | 2     |
         * | Fraction of second              |  30 | S       | 0, 1, ..., 9                      |       |
         * |                                 |     | SS      | 00, 01, ..., 99                   |       |
         * |                                 |     | SSS     | 000, 001, ..., 999                |       |
         * |                                 |     | SSSS    | ...                               | 2     |
         * | Milliseconds timestamp          |  20 | T       | 512969520900                      |       |
         * |                                 |     | TT      | ...                               | 2     |
         * | currentTimeZone (ISO-8601 w/ Z)        |  10 | X       | -08, +0530, Z                     |       |
         * |                                 |     | XX      | -0800, +0530, Z                   |       |
         * |                                 |     | XXX     | -08:00, +05:30, Z                 |       |
         * |                                 |     | XXXX    | -0800, +0530, Z, +123456          | 2     |
         * |                                 |     | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
         * | currentTimeZone (ISO-8601 w/o Z)       |  10 | x       | -08, +0530, +00                   |       |
         * |                                 |     | xx      | -0800, +0530, +0000               |       |
         * |                                 |     | xxx     | -08:00, +05:30, +00:00            | 2     |
         * |                                 |     | xxxx    | -0800, +0530, +0000, +123456      |       |
         * |                                 |     | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
         * | Long localized date             |  NA | P       | 05/29/1453                        | 5,8   |
         * |                                 |     | PP      | May 29, 1453                      |       |
         * |                                 |     | PPP     | May 29th, 1453                    |       |
         * |                                 |     | PPPP    | Sunday, May 29th, 1453            | 2,5,8 |
         * | Long localized time             |  NA | p       | 12:00 AM                          | 5,8   |
         * |                                 |     | pp      | 12:00:00 AM                       |       |
         * | Combination of date and time    |  NA | Pp      | 05/29/1453, 12:00 AM              |       |
         * |                                 |     | PPpp    | May 29, 1453, 12:00:00 AM         |       |
         * |                                 |     | PPPpp   | May 29th, 1453 at ...             |       |
         * |                                 |     | PPPPpp  | Sunday, May 29th, 1453 at ...     | 2,5,8 |
         * Notes:
         * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
         *    are the same as "stand-alone" units, but are different in some languages.
         *    "Formatting" units are declined according to the rules of the language
         *    in the context of a date. "Stand-alone" units are always nominative singular.
         *    In `format` function, they will produce different result:
         *
         *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
         *
         *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
         *
         *    `parse` will try to match both formatting and stand-alone units interchangably.
         *
         * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
         *    the single quote characters (see below).
         *    If the sequence is longer than listed in table:
         *    - for numerical units (`yyyyyyyy`) `parse` will try to match a number
         *      as wide as the sequence
         *    - for text units (`MMMMMMMM`) `parse` will try to match the widest variation of the unit.
         *      These variations are marked with "2" in the last column of the table.
         *
         * 3. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
         *    These tokens represent the shortest form of the quarter.
         *
         * 4. The main difference between `y` and `u` patterns are B.C. years:
         *
         *    | Year | `y` | `u` |
         *    |------|-----|-----|
         *    | AC 1 |   1 |   1 |
         *    | BC 1 |   1 |   0 |
         *    | BC 2 |   2 |  -1 |
         *
         *    Also `yy` will try to guess the century of two digit year by proximity with `referenceDate`:
         *
         *    `parse('50', 'yy', new Date(2018, 0, 1)) //=> Sat Jan 01 2050 00:00:00`
         *
         *    `parse('75', 'yy', new Date(2018, 0, 1)) //=> Wed Jan 01 1975 00:00:00`
         *
         *    while `uu` will just assign the year as is:
         *
         *    `parse('50', 'uu', new Date(2018, 0, 1)) //=> Sat Jan 01 0050 00:00:00`
         *
         *    `parse('75', 'uu', new Date(2018, 0, 1)) //=> Tue Jan 01 0075 00:00:00`
         *
         *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
         *    except local week-numbering years are dependent on `options.weekStartsOn`
         *    and `options.firstWeekContainsDate` (compare [setISOWeekYear]{@link https://date-fns.org/docs/setISOWeekYear}
         *    and [setWeekYear]{@link https://date-fns.org/docs/setWeekYear}).
         *
         * 5. These patterns are not in the Unicode Technical Standard #35:
         *    - `i`: ISO day of week
         *    - `I`: ISO week of year
         *    - `R`: ISO week-numbering year
         *    - `o`: ordinal number modifier
         *    - `P`: long localized date
         *    - `p`: long localized time
         *
         * 6. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
         *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
         *
         * 7. `D` and `DD` tokens represent days of the year but they are ofthen confused with days of the month.
         *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
         *
         * 8. `P+` tokens do not have a defined priority since they are merely aliases to other tokens based
         *    on the given locale.
         *
         *    using `en-US` locale: `P` => `MM/dd/yyyy`
         *    using `en-US` locale: `p` => `hh:mm a`
         *    using `pt-BR` locale: `P` => `dd/MM/yyyy`
         *    using `pt-BR` locale: `p` => `HH:mm`
         *
         * Values will be assigned to the date in the descending order of its unit's priority.
         * Units of an equal priority overwrite each other in the order of appearance.
         *
         * If no values of higher priority are parsed (e.g. when parsing string 'January 1st' without a year),
         * the values will be taken from 3rd argument `referenceDate` which works as a context of parsing.
         *
         * `referenceDate` must be passed for correct work of the function.
         * If you're not sure which `referenceDate` to supply, create a new instance of Date:
         * `parse('02/11/2014', 'MM/dd/yyyy', new Date())`
         * In this case parsing will be done in the context of the current date.
         * If `referenceDate` is `Invalid Date` or a value not convertible to valid `Date`,
         * then `Invalid Date` will be returned.
         *
         * The result may vary by locale.
         *
         * If `formatString` matches with `dateString` but does not provides tokens, `referenceDate` will be returned.
         *
         * If parsing failed, `Invalid Date` will be returned.
         * Invalid Date is a Date, whose time value is NaN.
         * Time value of Date: http://es5.github.io/#x15.9.1.1
         *
         * @param {String} dateString - the string to parse
         * @param {String} formatString - the string of tokens
         * @param {Date|Number} referenceDate - defines values missing from the parsed dateString
         * @param {Object} [options] - an object with options.
         * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
         * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
         * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
         * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
         *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
         * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
         *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
         * @returns {Date} the parsed date
         * @throws {TypeError} 3 arguments required
         * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
         * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
         * @throws {RangeError} `options.locale` must contain `match` property
         * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
         * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
         * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
         * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
         * @throws {RangeError} format string contains an unescaped latin alphabet character
         *
         * @example
         * // Parse 11 February 2014 from middle-endian format:
         * var result = parse('02/11/2014', 'MM/dd/yyyy', new Date())
         * //=> Tue Feb 11 2014 00:00:00
         *
         * @example
         * // Parse 28th of February in Esperanto locale in the context of 2010 year:
         * import eo from 'date-fns/locale/eo'
         * var result = parse('28-a de februaro', "do 'de' MMMM", new Date(2010, 0, 1), {
         *   locale: eo
         * })
         * //=> Sun Feb 28 2010 00:00:00
         */
        function parse(
          dirtyDateString,
          dirtyFormatString,
          dirtyReferenceDate,
          options
        ) {
          var _ref,
            _options$locale,
            _ref2,
            _ref3,
            _ref4,
            _options$firstWeekCon,
            _options$locale2,
            _options$locale2$opti,
            _defaultOptions$local,
            _defaultOptions$local2,
            _ref5,
            _ref6,
            _ref7,
            _options$weekStartsOn,
            _options$locale3,
            _options$locale3$opti,
            _defaultOptions$local3,
            _defaultOptions$local4;
          (0,
          _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
            3,
            arguments
          );
          var dateString = String(dirtyDateString);
          var formatString = String(dirtyFormatString);
          var defaultOptions = (0,
          _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_3__.getDefaultOptions)();
          var locale =
            (_ref =
              (_options$locale =
                options === null || options === void 0
                  ? void 0
                  : options.locale) !== null && _options$locale !== void 0
                ? _options$locale
                : defaultOptions.locale) !== null && _ref !== void 0
              ? _ref
              : _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_4__[
                  "default"
                ];
          if (!locale.match) {
            throw new RangeError("locale must contain match property");
          }
          var firstWeekContainsDate = (0,
          _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(
            (_ref2 =
              (_ref3 =
                (_ref4 =
                  (_options$firstWeekCon =
                    options === null || options === void 0
                      ? void 0
                      : options.firstWeekContainsDate) !== null &&
                  _options$firstWeekCon !== void 0
                    ? _options$firstWeekCon
                    : options === null || options === void 0
                    ? void 0
                    : (_options$locale2 = options.locale) === null ||
                      _options$locale2 === void 0
                    ? void 0
                    : (_options$locale2$opti = _options$locale2.options) ===
                        null || _options$locale2$opti === void 0
                    ? void 0
                    : _options$locale2$opti.firstWeekContainsDate) !== null &&
                _ref4 !== void 0
                  ? _ref4
                  : defaultOptions.firstWeekContainsDate) !== null &&
              _ref3 !== void 0
                ? _ref3
                : (_defaultOptions$local = defaultOptions.locale) === null ||
                  _defaultOptions$local === void 0
                ? void 0
                : (_defaultOptions$local2 = _defaultOptions$local.options) ===
                    null || _defaultOptions$local2 === void 0
                ? void 0
                : _defaultOptions$local2.firstWeekContainsDate) !== null &&
              _ref2 !== void 0
              ? _ref2
              : 1
          );

          // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
          if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
            throw new RangeError(
              "firstWeekContainsDate must be between 1 and 7 inclusively"
            );
          }
          var weekStartsOn = (0,
          _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(
            (_ref5 =
              (_ref6 =
                (_ref7 =
                  (_options$weekStartsOn =
                    options === null || options === void 0
                      ? void 0
                      : options.weekStartsOn) !== null &&
                  _options$weekStartsOn !== void 0
                    ? _options$weekStartsOn
                    : options === null || options === void 0
                    ? void 0
                    : (_options$locale3 = options.locale) === null ||
                      _options$locale3 === void 0
                    ? void 0
                    : (_options$locale3$opti = _options$locale3.options) ===
                        null || _options$locale3$opti === void 0
                    ? void 0
                    : _options$locale3$opti.weekStartsOn) !== null &&
                _ref7 !== void 0
                  ? _ref7
                  : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0
                ? _ref6
                : (_defaultOptions$local3 = defaultOptions.locale) === null ||
                  _defaultOptions$local3 === void 0
                ? void 0
                : (_defaultOptions$local4 = _defaultOptions$local3.options) ===
                    null || _defaultOptions$local4 === void 0
                ? void 0
                : _defaultOptions$local4.weekStartsOn) !== null &&
              _ref5 !== void 0
              ? _ref5
              : 0
          );

          // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
          if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
            throw new RangeError(
              "weekStartsOn must be between 0 and 6 inclusively"
            );
          }
          if (formatString === "") {
            if (dateString === "") {
              return (0,
              _toDate_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(
                dirtyReferenceDate
              );
            } else {
              return new Date(NaN);
            }
          }
          var subFnOptions = {
            firstWeekContainsDate: firstWeekContainsDate,
            weekStartsOn: weekStartsOn,
            locale: locale,
          };

          // If currentTimeZone isn't specified, it will be set to the system currentTimeZone
          var setters = [
            new _lib_Setter_js__WEBPACK_IMPORTED_MODULE_7__.DateToSystemcurrentTimeZoneSetter(),
          ];
          var tokens = formatString
            .match(longFormattingTokensRegExp)
            .map(function (substring) {
              var firstCharacter = substring[0];
              if (
                firstCharacter in
                _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__[
                  "default"
                ]
              ) {
                var longFormatter =
                  _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__[
                    "default"
                  ][firstCharacter];
                return longFormatter(substring, locale.formatLong);
              }
              return substring;
            })
            .join("")
            .match(formattingTokensRegExp);
          var usedTokens = [];
          var _iterator = (0,
            _babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__[
              "default"
            ])(tokens),
            _step;
          try {
            var _loop = function _loop() {
              var token = _step.value;
              if (
                !(
                  options !== null &&
                  options !== void 0 &&
                  options.useAdditionalWeekYearTokens
                ) &&
                (0,
                _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.isProtectedWeekYearToken)(
                  token
                )
              ) {
                (0,
                _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.throwProtectedError)(
                  token,
                  formatString,
                  dirtyDateString
                );
              }
              if (
                !(
                  options !== null &&
                  options !== void 0 &&
                  options.useAdditionalDayOfYearTokens
                ) &&
                (0,
                _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.isProtectedDayOfYearToken)(
                  token
                )
              ) {
                (0,
                _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.throwProtectedError)(
                  token,
                  formatString,
                  dirtyDateString
                );
              }
              var firstCharacter = token[0];
              var parser =
                _lib_parsers_index_js__WEBPACK_IMPORTED_MODULE_10__.parsers[
                  firstCharacter
                ];
              if (parser) {
                var incompatibleTokens = parser.incompatibleTokens;
                if (Array.isArray(incompatibleTokens)) {
                  var incompatibleToken = usedTokens.find(function (usedToken) {
                    return (
                      incompatibleTokens.includes(usedToken.token) ||
                      usedToken.token === firstCharacter
                    );
                  });
                  if (incompatibleToken) {
                    throw new RangeError(
                      "The format string mustn't contain `"
                        .concat(incompatibleToken.fullToken, "` and `")
                        .concat(token, "` at the same time")
                    );
                  }
                } else if (
                  parser.incompatibleTokens === "*" &&
                  usedTokens.length > 0
                ) {
                  throw new RangeError(
                    "The format string mustn't contain `".concat(
                      token,
                      "` and any other token at the same time"
                    )
                  );
                }
                usedTokens.push({
                  token: firstCharacter,
                  fullToken: token,
                });
                var parseResult = parser.run(
                  dateString,
                  token,
                  locale.match,
                  subFnOptions
                );
                if (!parseResult) {
                  return {
                    v: new Date(NaN),
                  };
                }
                setters.push(parseResult.setter);
                dateString = parseResult.rest;
              } else {
                if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
                  throw new RangeError(
                    "Format string contains an unescaped latin alphabet character `" +
                      firstCharacter +
                      "`"
                  );
                }

                // Replace two single quote characters with one single quote character
                if (token === "''") {
                  token = "'";
                } else if (firstCharacter === "'") {
                  token = cleanEscapedString(token);
                }

                // Cut token from string, or, if string doesn't match the token, return Invalid Date
                if (dateString.indexOf(token) === 0) {
                  dateString = dateString.slice(token.length);
                } else {
                  return {
                    v: new Date(NaN),
                  };
                }
              }
            };
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var _ret = _loop();
              if (
                (0,
                _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[
                  "default"
                ])(_ret) === "object"
              )
                return _ret.v;
            }

            // Check if the remaining input contains something other than whitespace
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          if (dateString.length > 0 && notWhitespaceRegExp.test(dateString)) {
            return new Date(NaN);
          }
          var uniquePrioritySetters = setters
            .map(function (setter) {
              return setter.priority;
            })
            .sort(function (a, b) {
              return b - a;
            })
            .filter(function (priority, index, array) {
              return array.indexOf(priority) === index;
            })
            .map(function (priority) {
              return setters
                .filter(function (setter) {
                  return setter.priority === priority;
                })
                .sort(function (a, b) {
                  return b.subPriority - a.subPriority;
                });
            })
            .map(function (setterArray) {
              return setterArray[0];
            });
          var date = (0,
          _toDate_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(
            dirtyReferenceDate
          );
          if (isNaN(date.getTime())) {
            return new Date(NaN);
          }

          // Convert the date in system currentTimeZone to the same date in UTC+00:00 currentTimeZone.
          var utcDate = (0,
          _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_11__["default"])(
            date,
            (0,
            _lib_getcurrentTimeZoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_12__[
              "default"
            ])(date)
          );
          var flags = {};
          var _iterator2 = (0,
            _babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__[
              "default"
            ])(uniquePrioritySetters),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              var setter = _step2.value;
              if (!setter.validate(utcDate, subFnOptions)) {
                return new Date(NaN);
              }
              var result = setter.set(utcDate, flags, subFnOptions);
              // Result is tuple (date, flags)
              if (Array.isArray(result)) {
                utcDate = result[0];
                (0,
                _lib_assign_index_js__WEBPACK_IMPORTED_MODULE_13__["default"])(
                  flags,
                  result[1]
                );
                // Result is date
              } else {
                utcDate = result;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          return utcDate;
        }
        function cleanEscapedString(input) {
          return input
            .match(escapedStringRegExp)[1]
            .replace(doubleQuoteRegExp, "'");
        }

        /***/
      },

    /***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
      /*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ subMilliseconds,
          /* harmony export */
        });
        /* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../addMilliseconds/index.js */ "./node_modules/date-fns/esm/addMilliseconds/index.js"
          );
        /* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js"
          );
        /* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js"
          );

        /**
         * @name subMilliseconds
         * @category Millisecond Helpers
         * @summary Subtract the specified number of milliseconds from the given date.
         *
         * @description
         * Subtract the specified number of milliseconds from the given date.
         *
         * @param {Date|Number} date - the date to be changed
         * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
         * @returns {Date} the new date with the milliseconds subtracted
         * @throws {TypeError} 2 arguments required
         *
         * @example
         * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
         * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
         * //=> Thu Jul 10 2014 12:45:29.250
         */
        function subMilliseconds(dirtyDate, dirtyAmount) {
          (0,
          _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
            2,
            arguments
          );
          var amount = (0,
          _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
            dirtyAmount
          );
          return (0,
          _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
            dirtyDate,
            -amount
          );
        }

        /***/
      },

    /***/ "./node_modules/date-fns/esm/toDate/index.js":
      /*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ toDate,
          /* harmony export */
        });
        /* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js"
          );
        /* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js"
          );

        /**
         * @name toDate
         * @category Common Helpers
         * @summary Convert the given argument to an instance of Date.
         *
         * @description
         * Convert the given argument to an instance of Date.
         *
         * If the argument is an instance of Date, the function returns its clone.
         *
         * If the argument is a number, it is treated as a timestamp.
         *
         * If the argument is none of the above, the function returns Invalid Date.
         *
         * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
         *
         * @param {Date|Number} argument - the value to convert
         * @returns {Date} the parsed date in the local time zone
         * @throws {TypeError} 1 argument required
         *
         * @example
         * // Clone the date:
         * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
         * //=> Tue Feb 11 2014 11:30:30
         *
         * @example
         * // Convert the timestamp to date:
         * const result = toDate(1392098430000)
         * //=> Tue Feb 11 2014 11:30:30
         */
        function toDate(argument) {
          (0,
          _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
            1,
            arguments
          );
          var argStr = Object.prototype.toString.call(argument);

          // Clone the date
          if (
            argument instanceof Date ||
            ((0,
            _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ])(argument) === "object" &&
              argStr === "[object Date]")
          ) {
            // Prevent the date to lose the milliseconds when passed to new Date() in IE10
            return new Date(argument.getTime());
          } else if (
            typeof argument === "number" ||
            argStr === "[object Number]"
          ) {
            return new Date(argument);
          } else {
            if (
              (typeof argument === "string" || argStr === "[object String]") &&
              typeof console !== "undefined"
            ) {
              // eslint-disable-next-line no-console
              console.warn(
                "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"
              );
              // eslint-disable-next-line no-console
              console.warn(new Error().stack);
            }
            return new Date(NaN);
          }
        }

        /***/
      },

    /***/ "./src/style.css":
      /*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__
          );
        /* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
          );

        var options = {};

        options.styleTagTransform =
          _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
        options.setAttributes =
          _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();

        options.insert =
          _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
            null,
            "head"
          );

        options.domAPI =
          _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
        options.insertStyleElement =
          _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

        var update =
          _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
            _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
              "default"
            ],
            options
          );

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ] &&
          _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ].locals
            ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
                "default"
              ].locals
            : undefined;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
      /***/ (module) => {
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
              layer: item[5],
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
                references: 1,
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
              if (
                newObj.css === obj.css &&
                newObj.media === obj.media &&
                newObj.sourceMap === obj.sourceMap &&
                newObj.supports === obj.supports &&
                newObj.layer === obj.layer
              ) {
                return;
              }
              api.update((obj = newObj));
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

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
      /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
      /***/ (module) => {
        var memo = {};

        /* istanbul ignore next  */
        function getTarget(target) {
          if (typeof memo[target] === "undefined") {
            var styleTarget = document.querySelector(target);

            // Special case to return head of iframe instead of iframe itself
            if (
              window.HTMLIFrameElement &&
              styleTarget instanceof window.HTMLIFrameElement
            ) {
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
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          }
          target.appendChild(style);
        }
        module.exports = insertBySelector;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
      /***/ (module) => {
        /* istanbul ignore next  */
        function insertStyleElement(options) {
          var element = document.createElement("style");
          options.setAttributes(element, options.attributes);
          options.insert(element, options.options);
          return element;
        }
        module.exports = insertStyleElement;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
      /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        /* istanbul ignore next  */
        function setAttributesWithoutAttributes(styleElement) {
          var nonce = true ? __webpack_require__.nc : 0;
          if (nonce) {
            styleElement.setAttribute("nonce", nonce);
          }
        }
        module.exports = setAttributesWithoutAttributes;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
      /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
      /***/ (module) => {
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
            css += "@layer".concat(
              obj.layer.length > 0 ? " ".concat(obj.layer) : "",
              " {"
            );
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
            css +=
              "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))),
                " */"
              );
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
              remove: function remove() {},
            };
          }
          var styleElement = options.insertStyleElement(options);
          return {
            update: function update(obj) {
              apply(styleElement, options, obj);
            },
            remove: function remove() {
              removeStyleElement(styleElement);
            },
          };
        }
        module.exports = domAPI;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
      /***/ (module) => {
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

        /***/
      },

    /***/ "./node_modules/uuid/dist/esm-browser/native.js":
      /*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        var randomUUID =
          typeof crypto !== "undefined" &&
          crypto.randomUUID &&
          crypto.randomUUID.bind(crypto);
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = {
          randomUUID,
        };

        /***/
      },

    /***/ "./node_modules/uuid/dist/esm-browser/regex.js":
      /*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;

        /***/
      },

    /***/ "./node_modules/uuid/dist/esm-browser/rng.js":
      /*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ rng,
          /* harmony export */
        });
        // Unique ID creation requires a high quality random # generator. In the browser we therefore
        // require the crypto API and do not support built-in fallback to lower quality random number
        // generators (like Math.random()).

        var getRandomValues;
        var rnds8 = new Uint8Array(16);
        function rng() {
          // lazy load so that environments that need to polyfill have a chance to do so
          if (!getRandomValues) {
            // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
            getRandomValues =
              typeof crypto !== "undefined" &&
              crypto.getRandomValues &&
              crypto.getRandomValues.bind(crypto);
            if (!getRandomValues) {
              throw new Error(
                "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
              );
            }
          }
          return getRandomValues(rnds8);
        }

        /***/
      },

    /***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
      /*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */ unsafeStringify: () =>
            /* binding */ unsafeStringify,
          /* harmony export */
        });
        /* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js"
          );

        /**
         * Convert array of 16 byte values to UUID string format of the form:
         * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
         */
        var byteToHex = [];
        for (var i = 0; i < 256; ++i) {
          byteToHex.push((i + 0x100).toString(16).slice(1));
        }
        function unsafeStringify(arr, offset = 0) {
          // Note: Be careful editing this code!  It's been tuned for performance
          // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
          //
          // Note to future-self: No, you can't remove the `toLowerCase()` call.
          // REF: https://github.com/uuidjs/uuid/pull/677#issuecomment-1757351351
          return (
            byteToHex[arr[offset + 0]] +
            byteToHex[arr[offset + 1]] +
            byteToHex[arr[offset + 2]] +
            byteToHex[arr[offset + 3]] +
            "-" +
            byteToHex[arr[offset + 4]] +
            byteToHex[arr[offset + 5]] +
            "-" +
            byteToHex[arr[offset + 6]] +
            byteToHex[arr[offset + 7]] +
            "-" +
            byteToHex[arr[offset + 8]] +
            byteToHex[arr[offset + 9]] +
            "-" +
            byteToHex[arr[offset + 10]] +
            byteToHex[arr[offset + 11]] +
            byteToHex[arr[offset + 12]] +
            byteToHex[arr[offset + 13]] +
            byteToHex[arr[offset + 14]] +
            byteToHex[arr[offset + 15]]
          ).toLowerCase();
        }
        function stringify(arr, offset = 0) {
          var uuid = unsafeStringify(arr, offset);
          // Consistency check for valid UUID.  If this throws, it's likely due to one
          // of the following:
          // - One or more input array values don't map to a hex octet (leading to
          // "undefined" in the uuid)
          // - Invalid input values for the RFC `version` or `variant` fields
          if (
            !(0, _validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)
          ) {
            throw TypeError("Stringified UUID is invalid");
          }
          return uuid;
        }
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          stringify;

        /***/
      },

    /***/ "./node_modules/uuid/dist/esm-browser/v4.js":
      /*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./native.js */ "./node_modules/uuid/dist/esm-browser/native.js"
          );
        /* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js"
          );
        /* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js"
          );

        function v4(options, buf, offset) {
          if (
            _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID &&
            !buf &&
            !options
          ) {
            return _native_js__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ].randomUUID();
          }
          options = options || {};
          var rnds =
            options.random ||
            (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

          // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
          rnds[6] = (rnds[6] & 0x0f) | 0x40;
          rnds[8] = (rnds[8] & 0x3f) | 0x80;

          // Copy bytes to buffer, if provided
          if (buf) {
            offset = offset || 0;
            for (var i = 0; i < 16; ++i) {
              buf[offset + i] = rnds[i];
            }
            return buf;
          }
          return (0,
          _stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
        }
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = v4;

        /***/
      },

    /***/ "./node_modules/uuid/dist/esm-browser/validate.js":
      /*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js"
          );

        function validate(uuid) {
          return (
            typeof uuid === "string" &&
            _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid)
          );
        }
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          validate;

        /***/
      },

    /***/ "./src/domManipulation.js":
      /*!********************************!*\
  !*** ./src/domManipulation.js ***!
  \********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ ContainerCreator: () =>
            /* binding */ ContainerCreator,
          /* harmony export */ CreationWindow: () =>
            /* binding */ CreationWindow,
          /* harmony export */ EditWindow: () => /* binding */ EditWindow,
          /* harmony export */ ImageHandler: () => /* binding */ ImageHandler,
          /* harmony export */ Menu: () => /* binding */ Menu,
          /* harmony export */ currentTaskTitle: () =>
            /* binding */ currentTaskTitle,
          /* harmony export */
        });
        /* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! date-fns */ "./node_modules/date-fns/esm/parse/index.js"
          );
        /* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! date-fns */ "./node_modules/date-fns/esm/format/index.js"
          );
        /* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js"
          );
        /* harmony import */ var _images_checklist_image_png__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./images/checklist-image.png */ "./src/images/checklist-image.png"
          );
        /* harmony import */ var _images_no_tasks_image_png__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./images/no-tasks-image.png */ "./src/images/no-tasks-image.png"
          );
        /* harmony import */ var _images_no_notes_image_png__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./images/no-notes-image.png */ "./src/images/no-notes-image.png"
          );
        /* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! . */ "./src/index.js");
        /* harmony import */ var _images_tab_icon_png__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ./images/tab-icon.png */ "./src/images/tab-icon.png"
          );

        let currentTaskTitle = "";

        const ImageHandler = () => {
          function createTitleImage() {
            const titleContainer = document.querySelector(".title-container");
            const title = document.querySelector(".title");
            const titleImage = new Image();
            titleImage.src =
              _images_checklist_image_png__WEBPACK_IMPORTED_MODULE_0__;
            titleImage.alt = "Checklist";
            titleImage.classList.add("title-image");
            titleContainer.insertBefore(titleImage, title);
          }

          function createNoTasksImage() {
            const listsOfTasks = document.querySelectorAll(".lists-of-tasks");
            let imageId = 1;
            listsOfTasks.forEach((list) => {
              const noTasksImage = new Image();
              noTasksImage.src =
                _images_no_tasks_image_png__WEBPACK_IMPORTED_MODULE_1__;
              noTasksImage.alt = "No Tasks";
              noTasksImage.setAttribute("id", `no-tasks-image-${imageId}`);
              noTasksImage.classList.add("no-tasks-image", "image-active");
              list.appendChild(noTasksImage);
              imageId++;
            });
          }

          function createNoNotesImage() {
            const listOfNotes = document.querySelector("#list-of-all-notes");
            const noNotesImage = new Image();
            noNotesImage.src =
              _images_no_notes_image_png__WEBPACK_IMPORTED_MODULE_2__;
            noNotesImage.alt = "No Notes";
            noNotesImage.classList.add("no-notes-image", "image-active");
            noNotesImage.classList.add("image-active");
            listOfNotes.appendChild(noNotesImage);
          }

          function createTabIcon() {
            const head = document.querySelector("head");
            const tabIcon = document.createElement("link");
            tabIcon.rel = "icon";
            tabIcon.href = _images_tab_icon_png__WEBPACK_IMPORTED_MODULE_4__;
            head.appendChild(tabIcon);
          }

          function handlePageImageDisplaying() {
            const noTasksImage1 = document.querySelector("#no-tasks-image-1");
            const noTasksImage2 = document.querySelector("#no-tasks-image-2");
            const noTasksImage3 = document.querySelector("#no-tasks-image-3");
            const noNotesImage = document.querySelector(".no-notes-image");

            if (___WEBPACK_IMPORTED_MODULE_3__.task.tasksArray.length === 0) {
              noTasksImage1.classList.add("image-active");
              noTasksImage2.classList.add("image-active");
              noTasksImage3.classList.add("image-active");
            } else {
              noTasksImage1.classList.remove("image-active");
              noTasksImage2.classList.remove("image-active");
              noTasksImage3.classList.remove("image-active");
            }

            if (___WEBPACK_IMPORTED_MODULE_3__.note.notesArray.length === 0) {
              noNotesImage.classList.add("image-active");
            } else {
              noNotesImage.classList.remove("image-active");
            }

            const todayTasks =
              ___WEBPACK_IMPORTED_MODULE_3__.task.tasksArray.filter(
                (chosenTask) => {
                  const taskDueDate = (0,
                  date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(
                    chosenTask.dueDate,
                    "dd-MM-yyyy",
                    new Date()
                  );
                  return ___WEBPACK_IMPORTED_MODULE_3__.task.isToday(
                    taskDueDate
                  );
                }
              );

            const upcomingTasks =
              ___WEBPACK_IMPORTED_MODULE_3__.task.tasksArray.filter(
                (chosenTask) => {
                  const taskDueDate = (0,
                  date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(
                    chosenTask.dueDate,
                    "dd-MM-yyyy",
                    new Date()
                  );
                  return ___WEBPACK_IMPORTED_MODULE_3__.task.isUpcoming(
                    taskDueDate
                  );
                }
              );

            if (todayTasks.length === 0) {
              noTasksImage2.classList.add("image-active");
            } else {
              noTasksImage2.classList.remove("image-active");
            }

            if (upcomingTasks.length === 0) {
              noTasksImage3.classList.add("image-active");
            } else {
              noTasksImage3.classList.remove("image-active");
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
          const creationTaskForm = document.querySelector(
            "#creation-task-form"
          );
          const noteForm = document.querySelector("#note-form");
          const taskButton = document.querySelector("#task-button");
          const noteButton = document.querySelector("#note-button");
          const creationTaskWindow = document.querySelector(
            "#creation-task-window"
          );
          const taskTitleInput = document.querySelector("#task-title-input");
          const taskDescriptionInput = document.querySelector(
            "#task-description-input"
          );
          const taskDueDateInput = document.querySelector("#task-date-input");
          const taskPriorityInput = document.querySelector(
            "#task-priority-input"
          );
          const noteTitleInput = document.querySelector("#note-title-input");
          const noteDescriptionInput = document.querySelector(
            "#note-description-input"
          );
          const overlay = document.querySelector(".overlay");

          function openCreationWindow() {
            creationTaskWindow.classList.add("open-window");
            taskButton.classList.add("selection-button-active");
            overlay.classList.add("overlay-active");
            taskDueDateInput.setAttribute("placeholder", "dd-MM-yyyy");
          }

          function closeCreationWindow() {
            creationTaskWindow.classList.remove("open-window");
            noteButton.classList.remove("selection-button-active");
            overlay.classList.remove("overlay-active");
            creationTaskForm.classList.add("form-active");
            noteForm.classList.remove("form-active");
            clearFormInputs();
          }

          function clearFormInputs() {
            taskTitleInput.value = "";
            taskDescriptionInput.value = "";
            taskDueDateInput.value = "";
            taskPriorityInput.value = "";
            noteTitleInput.value = "";
            noteDescriptionInput.value = "";
          }

          function showTaskForm() {
            creationTaskForm.classList.add("form-active");
            noteForm.classList.remove("form-active");
            taskButton.classList.add("selection-button-active");
            noteButton.classList.remove("selection-button-active");
          }

          function showNoteForm() {
            noteForm.classList.add("form-active");
            creationTaskForm.classList.remove("form-active");
            noteButton.classList.add("selection-button-active");
            taskButton.classList.remove("selection-button-active");
          }

          return {
            openCreationWindow,
            closeCreationWindow,
            showTaskForm,
            showNoteForm,
            clearFormInputs,
          };
        };

        const EditWindow = () => {
          const editTaskWindow = document.querySelector("#edit-task-window");
          const editTaskTitleInput = document.querySelector(
            "#edit-task-title-input"
          );
          const editTaskDescriptionInput = document.querySelector(
            "#edit-task-description-input"
          );
          const editTaskDateInput = document.querySelector(
            "#edit-task-date-input"
          );
          const editTaskPriorityInput = document.querySelector(
            "#edit-task-priority-input"
          );
          const overlay = document.querySelector(".overlay");

          function openEditWindow(taskToEdit) {
            const indexToEdit = parseInt(
              taskToEdit.getAttribute("data-task"),
              10
            );
            editTaskWindow.classList.add("open-window");
            overlay.classList.add("overlay-active");
            currentTaskTitle =
              ___WEBPACK_IMPORTED_MODULE_3__.task.taskTitlesArray[indexToEdit];
            editTaskTitleInput.value =
              ___WEBPACK_IMPORTED_MODULE_3__.task.tasksArray[
                indexToEdit
              ].title.trim();
            editTaskDescriptionInput.value =
              ___WEBPACK_IMPORTED_MODULE_3__.task.tasksArray[
                indexToEdit
              ].description.trim();

            const taskDueDate =
              ___WEBPACK_IMPORTED_MODULE_3__.task.tasksArray[indexToEdit]
                .dueDate;
            const parsedDueDate = (0,
            date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(
              taskDueDate,
              "dd-MM-yyyy",
              new Date()
            );
            const formattedDueDate = (0,
            date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(
              parsedDueDate,
              "yyyy-MM-dd"
            );

            editTaskDateInput.value = formattedDueDate;
            editTaskPriorityInput.value =
              ___WEBPACK_IMPORTED_MODULE_3__.task.tasksArray[
                indexToEdit
              ].priority;
          }

          function closeEditWindow() {
            editTaskWindow.classList.remove("open-window");
            overlay.classList.remove("overlay-active");
            ___WEBPACK_IMPORTED_MODULE_3__.creationWindow.clearFormInputs();
          }

          return { openEditWindow, closeEditWindow };
        };

        const Menu = () => {
          const allTasksButton = document.querySelector("#all-tasks-button");
          const todayTasksButton = document.querySelector(
            "#today-tasks-button"
          );
          const weekTasksButton = document.querySelector("#week-tasks-button");
          const allNotesButton = document.querySelector("#all-notes-button");
          const allTasksPage = document.querySelector("#all-tasks-page");
          const todayTasksPage = document.querySelector("#today-tasks-page");
          const weekTasksPage = document.querySelector("#week-tasks-page");
          const allNotesPage = document.querySelector("#all-notes-page");
          const menuContainer = document.querySelector(".menu-container");
          const pages = document.querySelectorAll(".pages");

          function switchToAllTasksView() {
            allTasksButton.classList.add("menu-button-active");
            todayTasksButton.classList.remove("menu-button-active");
            weekTasksButton.classList.remove("menu-button-active");
            allNotesButton.classList.remove("menu-button-active");
            allTasksPage.classList.add("page-active");
            todayTasksPage.classList.remove("page-active");
            weekTasksPage.classList.remove("page-active");
            allNotesPage.classList.remove("page-active");
          }

          function switchToTodayTasksView() {
            todayTasksButton.classList.add("menu-button-active");
            allTasksButton.classList.remove("menu-button-active");
            weekTasksButton.classList.remove("menu-button-active");
            allNotesButton.classList.remove("menu-button-active");
            todayTasksPage.classList.add("page-active");
            allTasksPage.classList.remove("page-active");
            weekTasksPage.classList.remove("page-active");
            allNotesPage.classList.remove("page-active");
          }

          function switchToWeekTasksView() {
            weekTasksButton.classList.add("menu-button-active");
            allTasksButton.classList.remove("menu-button-active");
            todayTasksButton.classList.remove("menu-button-active");
            allNotesButton.classList.remove("menu-button-active");
            weekTasksPage.classList.add("page-active");
            todayTasksPage.classList.remove("page-active");
            allTasksPage.classList.remove("page-active");
            allNotesPage.classList.remove("page-active");
          }

          function switchToAllNotesView() {
            allNotesButton.classList.add("menu-button-active");
            allTasksButton.classList.remove("menu-button-active");
            todayTasksButton.classList.remove("menu-button-active");
            weekTasksButton.classList.remove("menu-button-active");
            allNotesPage.classList.add("page-active");
            weekTasksPage.classList.remove("page-active");
            todayTasksPage.classList.remove("page-active");
            allTasksPage.classList.remove("page-active");
          }

          function toggleMenuVisibility() {
            menuContainer.classList.toggle("hidden-menu");
            pages.forEach((page) => {
              page.classList.toggle("pages-full");
            });
          }

          return {
            switchToAllTasksView,
            switchToTodayTasksView,
            switchToWeekTasksView,
            switchToAllNotesView,
            toggleMenuVisibility,
          };
        };

        const ContainerCreator = () => {
          function setTaskAndNoteContainerId() {
            return (0, uuid__WEBPACK_IMPORTED_MODULE_7__["default"])();
          }

          function createNewTaskContainer() {
            const listOfAllTasks = document.querySelector("#list-of-all-tasks");
            const listOfTodayTasks = document.querySelector(
              "#list-of-today-tasks"
            );
            const listOfNextWeekTasks = document.querySelector(
              "#list-of-next-week-tasks"
            );
            const taskTitleInput = document.querySelector("#task-title-input");
            const taskDueDateInput = document.querySelector("#task-date-input");
            const taskPriorityInput = document.querySelector(
              "#task-priority-input"
            );
            const newTaskContainer = document.createElement("div");
            newTaskContainer.classList.add("task-container");
            newTaskContainer.setAttribute("id", setTaskAndNoteContainerId());
            newTaskContainer.setAttribute(
              "data-task",
              ___WEBPACK_IMPORTED_MODULE_3__.task.tasksArray.length
            );
            listOfAllTasks.appendChild(newTaskContainer);
            const newTaskStatus = document.createElement("input");
            newTaskStatus.setAttribute("type", "checkbox");
            newTaskStatus.classList.add(
              "task-data-container",
              "task-status-checkbox"
            );
            newTaskContainer.appendChild(newTaskStatus);
            const newTaskTitle = document.createElement("h3");
            newTaskTitle.classList.add("task-data-container", "task-title");
            newTaskTitle.setAttribute(
              "data-task-title",
              newTaskContainer.getAttribute("data-task")
            );
            newTaskTitle.textContent = taskTitleInput.value;
            newTaskContainer.appendChild(newTaskTitle);
            const newTaskDueDateLabel = document.createElement("label");
            newTaskDueDateLabel.classList.add(
              "task-data-container",
              "task-date"
            );
            newTaskDueDateLabel.setAttribute(
              "data-task-date",
              newTaskContainer.getAttribute("data-task")
            );
            newTaskDueDateLabel.textContent = (0,
            date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(
              new Date(taskDueDateInput.value),
              "dd-MM-yyyy"
            );
            newTaskContainer.appendChild(newTaskDueDateLabel);
            setNewTaskColor(newTaskContainer, taskPriorityInput);
            createEditAndDeleteButtons(newTaskContainer);

            if (
              ___WEBPACK_IMPORTED_MODULE_3__.task.isToday(
                new Date(taskDueDateInput.value)
              )
            ) {
              listOfTodayTasks.appendChild(newTaskContainer.cloneNode(true));
            } else if (
              ___WEBPACK_IMPORTED_MODULE_3__.task.isUpcoming(
                new Date(taskDueDateInput.value)
              )
            ) {
              listOfNextWeekTasks.appendChild(newTaskContainer.cloneNode(true));
            }
          }

          function createEditAndDeleteButtons(container) {
            const buttonsContainer = document.createElement("div");
            buttonsContainer.classList.add(
              "task-data-container",
              "buttons-container"
            );
            container.appendChild(buttonsContainer);
            const editButton = document.createElement("i");
            editButton.classList.add("fas", "fa-edit", "edit-button", "icon");
            buttonsContainer.appendChild(editButton);
            const deleteButton = document.createElement("i");
            deleteButton.classList.add(
              "fas",
              "fa-trash",
              "delete-button",
              "icon"
            );
            buttonsContainer.appendChild(deleteButton);
          }

          function setNewTaskColor(newTask, newTaskPriority) {
            if (newTaskPriority.value === "Low") {
              newTask.style.borderLeftColor = "#006400";
            } else if (newTaskPriority.value === "Medium") {
              newTask.style.borderLeftColor = "#ff8c00";
            } else {
              newTask.style.borderLeftColor = "#8b0000";
            }
          }

          function createNewNoteContainer() {
            const noteTitleInput = document.querySelector("#note-title-input");
            const noteDescriptionInput = document.querySelector(
              "#note-description-input"
            );
            const newNoteContainer = document.createElement("div");
            newNoteContainer.classList.add("note-container");
            newNoteContainer.setAttribute("id", setTaskAndNoteContainerId());
            newNoteContainer.setAttribute(
              "data-note",
              ___WEBPACK_IMPORTED_MODULE_3__.note.notesArray.length
            );
            const listOfAllNotes = document.querySelector("#list-of-all-notes");
            listOfAllNotes.appendChild(newNoteContainer);
            const deleteNoteButton = document.createElement("button");
            deleteNoteButton.classList.add("delete-note-button");
            deleteNoteButton.textContent = "x";
            newNoteContainer.appendChild(deleteNoteButton);
            const newNoteTitle = document.createElement("h3");
            newNoteTitle.classList.add("note-title");
            newNoteTitle.textContent = noteTitleInput.value;
            newNoteContainer.appendChild(newNoteTitle);
            const newNoteDescription = document.createElement("p");
            newNoteDescription.classList.add("note-description");
            newNoteDescription.textContent = noteDescriptionInput.value;
            newNoteContainer.appendChild(newNoteDescription);
          }

          return {
            createNewTaskContainer,
            createNewNoteContainer,
            createEditAndDeleteButtons,
            setNewTaskColor,
          };
        };

        /***/
      },

    /***/ "./src/handleEventListeners.js":
      /*!*************************************!*\
  !*** ./src/handleEventListeners.js ***!
  \*************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ AllEventListeners: () =>
            /* binding */ AllEventListeners,
          /* harmony export */ CreationWindowEventListeners: () =>
            /* binding */ CreationWindowEventListeners,
          /* harmony export */ EditWindowEventListeners: () =>
            /* binding */ EditWindowEventListeners,
          /* harmony export */ MainInterfaceEventListeners: () =>
            /* binding */ MainInterfaceEventListeners,
          /* harmony export */ MenuEventListeners: () =>
            /* binding */ MenuEventListeners,
          /* harmony export */
        });
        /* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! . */ "./src/index.js");

        let chosenTask = "";
        let chosenNote = "";

        window.addEventListener("load", () => {
          const storedTasks =
            JSON.parse(localStorage.getItem("tasksArray")) || [];
          const storedNotes =
            JSON.parse(localStorage.getItem("notesArray")) || [];

          if (storedTasks) {
            ___WEBPACK_IMPORTED_MODULE_0__.task.renderTasks(storedTasks);
          }
          if (storedNotes) {
            ___WEBPACK_IMPORTED_MODULE_0__.note.renderNotes(storedNotes);
          }
          ___WEBPACK_IMPORTED_MODULE_0__.imageHandler.handlePageImageDisplaying();
        });

        const MenuEventListeners = () => {
          const homeButton = document.querySelector("#home-button");
          const allTasksButton = document.querySelector("#all-tasks-button");
          const menuToggle = document.querySelector("#menu-toggle");
          const todayTasksButton = document.querySelector(
            "#today-tasks-button"
          );
          const weekTasksButton = document.querySelector("#week-tasks-button");
          const allNotesButton = document.querySelector("#all-notes-button");
          const creationButton = document.querySelector("#creation-button");

          function handleMenuEventListeners() {
            homeButton.addEventListener("click", () =>
              ___WEBPACK_IMPORTED_MODULE_0__.menu.switchToAllTasksView()
            );
            allTasksButton.addEventListener("click", () =>
              ___WEBPACK_IMPORTED_MODULE_0__.menu.switchToAllTasksView()
            );
            menuToggle.addEventListener("click", () =>
              ___WEBPACK_IMPORTED_MODULE_0__.menu.toggleMenuVisibility()
            );
            todayTasksButton.addEventListener("click", () =>
              ___WEBPACK_IMPORTED_MODULE_0__.menu.switchToTodayTasksView()
            );
            weekTasksButton.addEventListener("click", () =>
              ___WEBPACK_IMPORTED_MODULE_0__.menu.switchToWeekTasksView()
            );
            allNotesButton.addEventListener("click", () =>
              ___WEBPACK_IMPORTED_MODULE_0__.menu.switchToAllNotesView()
            );
            creationButton.addEventListener("click", () =>
              ___WEBPACK_IMPORTED_MODULE_0__.creationWindow.openCreationWindow()
            );
          }
          return { handleMenuEventListeners };
        };

        const CreationWindowEventListeners = () => {
          const taskButton = document.querySelector("#task-button");
          const noteButton = document.querySelector("#note-button");
          const taskTitleInput = document.querySelector("#task-title-input");
          const taskDescriptionInput = document.querySelector(
            "#task-description-input"
          );
          const taskDueDateInput = document.querySelector("#task-date-input");
          const taskPriorityInput = document.querySelector(
            "#task-priority-input"
          );
          const noteTitleInput = document.querySelector("#note-title-input");
          const noteDescriptionInput = document.querySelector(
            "#note-description-input"
          );
          const creationWindowCloseButton = document.querySelector(
            "#creation-window-close-button"
          );
          const addTaskSubmitButton = document.querySelector(
            "#add-task-submit-button"
          );
          const addNoteSubmitButton = document.querySelector(
            "#add-note-submit-button"
          );

          function handleCreationWindowEventListeners() {
            taskButton.addEventListener("click", () =>
              ___WEBPACK_IMPORTED_MODULE_0__.creationWindow.showTaskForm()
            );
            noteButton.addEventListener("click", () =>
              ___WEBPACK_IMPORTED_MODULE_0__.creationWindow.showNoteForm()
            );
            taskTitleInput.addEventListener(
              "input",
              ___WEBPACK_IMPORTED_MODULE_0__.validation.clearValidationMessage
            );
            taskDescriptionInput.addEventListener(
              "input",
              ___WEBPACK_IMPORTED_MODULE_0__.validation.clearValidationMessage
            );
            taskDueDateInput.addEventListener(
              "input",
              ___WEBPACK_IMPORTED_MODULE_0__.validation.clearValidationMessage
            );
            taskPriorityInput.addEventListener(
              "input",
              ___WEBPACK_IMPORTED_MODULE_0__.validation.clearValidationMessage
            );
            noteTitleInput.addEventListener(
              "input",
              ___WEBPACK_IMPORTED_MODULE_0__.validation.clearValidationMessage
            );
            noteDescriptionInput.addEventListener(
              "input",
              ___WEBPACK_IMPORTED_MODULE_0__.validation.clearValidationMessage
            );
            creationWindowCloseButton.addEventListener("click", () =>
              ___WEBPACK_IMPORTED_MODULE_0__.creationWindow.closeCreationWindow()
            );
            addTaskSubmitButton.addEventListener("click", (e) => {
              e.preventDefault();
              if (
                ___WEBPACK_IMPORTED_MODULE_0__.validation.validateCreationTaskForm()
              ) {
                ___WEBPACK_IMPORTED_MODULE_0__.containerCreator.createNewTaskContainer();
                ___WEBPACK_IMPORTED_MODULE_0__.task.createNewTask();
                ___WEBPACK_IMPORTED_MODULE_0__.imageHandler.handlePageImageDisplaying();
                ___WEBPACK_IMPORTED_MODULE_0__.creationWindow.closeCreationWindow();
              }
            });
            addNoteSubmitButton.addEventListener("click", (e) => {
              e.preventDefault();
              if (
                ___WEBPACK_IMPORTED_MODULE_0__.validation.validateNoteForm()
              ) {
                ___WEBPACK_IMPORTED_MODULE_0__.containerCreator.createNewNoteContainer();
                ___WEBPACK_IMPORTED_MODULE_0__.note.createNewNote();
                ___WEBPACK_IMPORTED_MODULE_0__.imageHandler.handlePageImageDisplaying();
                ___WEBPACK_IMPORTED_MODULE_0__.creationWindow.closeCreationWindow();
              }
            });
          }
          return { handleCreationWindowEventListeners };
        };

        const EditWindowEventListeners = () => {
          const editTaskTitleInput = document.querySelector(
            "#edit-task-title-input"
          );
          const editTaskDescriptionInput = document.querySelector(
            "#edit-task-description-input"
          );
          const editTaskDateInput = document.querySelector(
            "#edit-task-date-input"
          );
          const editTaskPriorityInput = document.querySelector(
            "#edit-task-priority-input"
          );
          const editWindowCloseButton = document.querySelector(
            "#edit-window-close-button"
          );
          const editTaskSubmitButton = document.querySelector(
            "#edit-task-submit-button"
          );

          function handleEditWindowEventListeners() {
            editTaskTitleInput.addEventListener(
              "input",
              ___WEBPACK_IMPORTED_MODULE_0__.validation.clearValidationMessage
            );
            editTaskDescriptionInput.addEventListener(
              "input",
              ___WEBPACK_IMPORTED_MODULE_0__.validation.clearValidationMessage
            );
            editTaskDateInput.addEventListener(
              "input",
              ___WEBPACK_IMPORTED_MODULE_0__.validation.clearValidationMessage
            );
            editTaskPriorityInput.addEventListener(
              "input",
              ___WEBPACK_IMPORTED_MODULE_0__.validation.clearValidationMessage
            );
            editWindowCloseButton.addEventListener("click", () =>
              ___WEBPACK_IMPORTED_MODULE_0__.editWindow.closeEditWindow()
            );
            editTaskSubmitButton.addEventListener("click", (e) => {
              e.preventDefault();
              if (
                ___WEBPACK_IMPORTED_MODULE_0__.validation.validateEditTaskForm()
              ) {
                ___WEBPACK_IMPORTED_MODULE_0__.task.editChosenTask(
                  chosenTask,
                  editTaskTitleInput.value,
                  editTaskPriorityInput
                );
                ___WEBPACK_IMPORTED_MODULE_0__.editWindow.closeEditWindow();
              }
            });
          }
          return { handleEditWindowEventListeners };
        };

        const MainInterfaceEventListeners = () => {
          const listsOfTasks = document.querySelectorAll(".lists-of-tasks");
          const listsOfAllNotes =
            document.querySelectorAll("#list-of-all-notes");

          function handleMainInterfaceEventListeners() {
            listsOfTasks.forEach((list) => {
              list.addEventListener("click", (e) => {
                const taskContainer = e.target.closest(".task-container");
                const taskContainers =
                  document.querySelectorAll(".task-container");
                const editButton = e.target.closest(".edit-button");
                const deleteButton = e.target.closest(".delete-button");

                chosenTask = taskContainer;

                if (editButton) {
                  ___WEBPACK_IMPORTED_MODULE_0__.editWindow.openEditWindow(
                    chosenTask
                  );
                } else if (deleteButton) {
                  taskContainers.forEach((container) => {
                    if (
                      container.getAttribute("data-task") ===
                      chosenTask.getAttribute("data-task")
                    ) {
                      container.remove();
                      chosenTask.remove();
                    }
                  });
                  ___WEBPACK_IMPORTED_MODULE_0__.task.deleteChosenTask(
                    chosenTask
                  );
                  ___WEBPACK_IMPORTED_MODULE_0__.imageHandler.handlePageImageDisplaying();
                }
              });
            });

            listsOfAllNotes.forEach((item) => {
              item.addEventListener("click", (e) => {
                const noteContainer = e.target.closest(".note-container");
                const noteContainers =
                  document.querySelectorAll(".note-container");
                const deleteNoteButton = e.target.closest(
                  ".delete-note-button"
                );

                chosenNote = noteContainer;

                if (deleteNoteButton) {
                  noteContainers.forEach((container) => {
                    if (
                      container.getAttribute("data-note") ===
                      chosenNote.getAttribute("data-note")
                    ) {
                      container.remove();
                      chosenNote.remove();
                    }
                  });
                  ___WEBPACK_IMPORTED_MODULE_0__.note.deleteChosenNote(
                    chosenNote
                  );
                  ___WEBPACK_IMPORTED_MODULE_0__.imageHandler.handlePageImageDisplaying();
                }
              });
            });
          }

          return { handleMainInterfaceEventListeners };
        };

        const AllEventListeners = () => {
          function handleAllEventListeners() {
            ___WEBPACK_IMPORTED_MODULE_0__.menuEventListeners.handleMenuEventListeners();
            ___WEBPACK_IMPORTED_MODULE_0__.creationWindowEventListeners.handleCreationWindowEventListeners();
            ___WEBPACK_IMPORTED_MODULE_0__.editWindowEventListeners.handleEditWindowEventListeners();
            ___WEBPACK_IMPORTED_MODULE_0__.mainInterfaceEventListeners.handleMainInterfaceEventListeners();
          }
          return { handleAllEventListeners };
        };

        /***/
      },

    /***/ "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ containerCreator: () =>
            /* binding */ containerCreator,
          /* harmony export */ creationWindow: () =>
            /* binding */ creationWindow,
          /* harmony export */ creationWindowEventListeners: () =>
            /* binding */ creationWindowEventListeners,
          /* harmony export */ editWindow: () => /* binding */ editWindow,
          /* harmony export */ editWindowEventListeners: () =>
            /* binding */ editWindowEventListeners,
          /* harmony export */ imageHandler: () => /* binding */ imageHandler,
          /* harmony export */ mainInterfaceEventListeners: () =>
            /* binding */ mainInterfaceEventListeners,
          /* harmony export */ menu: () => /* binding */ menu,
          /* harmony export */ menuEventListeners: () =>
            /* binding */ menuEventListeners,
          /* harmony export */ note: () => /* binding */ note,
          /* harmony export */ task: () => /* binding */ task,
          /* harmony export */ validation: () => /* binding */ validation,
          /* harmony export */
        });
        /* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./style.css */ "./src/style.css");
        /* harmony import */ var _mainLogic__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./mainLogic */ "./src/mainLogic.js");
        /* harmony import */ var _domManipulation__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./domManipulation */ "./src/domManipulation.js"
          );
        /* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ./validation */ "./src/validation.js");
        /* harmony import */ var _handleEventListeners__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ./handleEventListeners */ "./src/handleEventListeners.js"
          );

        const task = (0, _mainLogic__WEBPACK_IMPORTED_MODULE_1__.Task)();
        const note = (0, _mainLogic__WEBPACK_IMPORTED_MODULE_1__.Note)();
        const validation = (0,
        _validation__WEBPACK_IMPORTED_MODULE_3__.Validation)();
        const creationWindow = (0,
        _domManipulation__WEBPACK_IMPORTED_MODULE_2__.CreationWindow)();
        const editWindow = (0,
        _domManipulation__WEBPACK_IMPORTED_MODULE_2__.EditWindow)();
        const menu = (0, _domManipulation__WEBPACK_IMPORTED_MODULE_2__.Menu)();
        const containerCreator = (0,
        _domManipulation__WEBPACK_IMPORTED_MODULE_2__.ContainerCreator)();
        const imageHandler = (0,
        _domManipulation__WEBPACK_IMPORTED_MODULE_2__.ImageHandler)();
        const menuEventListeners = (0,
        _handleEventListeners__WEBPACK_IMPORTED_MODULE_4__.MenuEventListeners)();
        const creationWindowEventListeners = (0,
        _handleEventListeners__WEBPACK_IMPORTED_MODULE_4__.CreationWindowEventListeners)();
        const editWindowEventListeners = (0,
        _handleEventListeners__WEBPACK_IMPORTED_MODULE_4__.EditWindowEventListeners)();
        const mainInterfaceEventListeners = (0,
        _handleEventListeners__WEBPACK_IMPORTED_MODULE_4__.MainInterfaceEventListeners)();
        const allEventListeners = (0,
        _handleEventListeners__WEBPACK_IMPORTED_MODULE_4__.AllEventListeners)();

        allEventListeners.handleAllEventListeners();
        imageHandler.createImages();

        /***/
      },

    /***/ "./src/mainLogic.js":
      /*!**************************!*\
  !*** ./src/mainLogic.js ***!
  \**************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ Note: () => /* binding */ Note,
          /* harmony export */ Task: () => /* binding */ Task,
          /* harmony export */
        });
        /* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! date-fns */ "./node_modules/date-fns/esm/format/index.js"
          );
        /* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! date-fns */ "./node_modules/date-fns/esm/parse/index.js"
          );
        /* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js"
          );
        /* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! . */ "./src/index.js");

        const Task = () => {
          const tasksArray =
            JSON.parse(localStorage.getItem("tasksArray")) || [];
          const taskTitlesArray = tasksArray.map((task) => task.title);

          function taskFactory(
            id,
            title,
            description,
            dueDate,
            priority,
            isDone = false
          ) {
            const formattedDate = (0,
            date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(
              new Date(dueDate),
              "dd-MM-yyyy"
            );
            return {
              id,
              title,
              description,
              dueDate: formattedDate,
              priority,
              isDone,
            };
          }

          function addTask(newTask) {
            tasksArray.push(newTask);
            taskTitlesArray.push(newTask.title);
            localStorage.setItem("tasksArray", JSON.stringify(tasksArray));
          }

          function deleteTask(taskToDelete) {
            const indexToDelete = parseInt(
              taskToDelete.getAttribute("data-task"),
              10
            );
            if (indexToDelete !== -1 && indexToDelete < tasksArray.length) {
              tasksArray.splice(indexToDelete, 1);
              taskTitlesArray.splice(indexToDelete, 1);

              updateDataTaskAttributes(indexToDelete);
              localStorage.setItem("tasksArray", JSON.stringify(tasksArray));
            }
          }

          function updateDataTaskAttributes(startIndex) {
            const taskContainers = document.querySelectorAll(".task-container");
            const taskDataContainers = document.querySelectorAll(
              ".task-data-container"
            );
            taskContainers.forEach((taskContainer) => {
              let currentDataTask = parseInt(
                taskContainer.getAttribute("data-task"),
                10
              );
              if (currentDataTask > startIndex) {
                currentDataTask -= 1;
                taskContainer.setAttribute("data-task", currentDataTask);
              }
            });

            taskDataContainers.forEach((taskDataContainer) => {
              let currentDataTask = parseInt(
                taskDataContainer.getAttribute("data-task-title"),
                10
              );
              if (currentDataTask > startIndex) {
                currentDataTask -= 1;
                taskDataContainer.setAttribute(
                  "data-task-title",
                  currentDataTask
                );
              }
            });
          }

          function editTask(
            taskIdToEdit,
            newTitle,
            newDescription,
            newDueDate,
            newPriority
          ) {
            const indexToEdit = parseInt(
              taskIdToEdit.getAttribute("data-task"),
              10
            );
            if (indexToEdit !== -1) {
              const taskToEdit = tasksArray[indexToEdit];
              taskToEdit.title = newTitle;
              taskToEdit.description = newDescription;
              taskToEdit.dueDate = (0,
              date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(
                new Date(newDueDate),
                "dd-MM-yyyy"
              );
              taskToEdit.priority = newPriority;
              tasksArray[indexToEdit] = taskToEdit;
              taskTitlesArray[indexToEdit] = newTitle;

              localStorage.setItem("tasksArray", JSON.stringify(tasksArray));
            }
          }

          function createNewTask() {
            const taskId = (0, uuid__WEBPACK_IMPORTED_MODULE_2__["default"])();
            const creationTaskForm = document.querySelector(
              "#creation-task-form"
            );
            const taskTitleInput = document.querySelector("#task-title-input");
            const taskDescriptionInput = document.querySelector(
              "#task-description-input"
            );
            const taskDueDateInput = document.querySelector("#task-date-input");

            const taskPriorityInput = document.querySelector(
              "#task-priority-input"
            );
            const newTask = taskFactory(
              taskId,
              taskTitleInput.value,
              taskDescriptionInput.value,
              taskDueDateInput.value,
              taskPriorityInput.value
            );
            addTask(newTask);
            creationTaskForm.reset();
          }

          function editChosenTask(chosenTask) {
            const editTaskTitleInput = document.querySelector(
              "#edit-task-title-input"
            );
            const editTaskDescriptionInput = document.querySelector(
              "#edit-task-description-input"
            );
            const editTaskDueDateInput = document.querySelector(
              "#edit-task-date-input"
            );
            const editTaskPriorityInput = document.querySelector(
              "#edit-task-priority-input"
            );

            const taskId = chosenTask.getAttribute("data-task");

            editTask(
              chosenTask,
              editTaskTitleInput.value,
              editTaskDescriptionInput.value,
              editTaskDueDateInput.value,
              editTaskPriorityInput.value
            );

            const taskContainers = document.querySelectorAll(
              `.task-container[data-task="${taskId}"]`
            );
            taskContainers.forEach((taskContainer) => {
              ___WEBPACK_IMPORTED_MODULE_0__.containerCreator.setNewTaskColor(
                taskContainer,
                editTaskPriorityInput.value
              );
            });

            const taskTitleElements = document.querySelectorAll(
              `.task-data-container[data-task-title="${taskId}"]`
            );
            taskTitleElements.forEach((element) => {
              element.textContent = editTaskTitleInput.value;
            });

            const taskDueDateElements = document.querySelectorAll(
              `.task-data-container[data-task-date="${taskId}"]`
            );
            taskDueDateElements.forEach((element) => {
              element.textContent = (0,
              date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(
                new Date(editTaskDueDateInput.value),
                "dd-MM-yyyy"
              );
            });
            location.reload();
          }

          function deleteChosenTask(chosenTask) {
            deleteTask(chosenTask);
          }

          function isToday(date) {
            const today = new Date();
            return (
              date.getFullYear() === today.getFullYear() &&
              date.getMonth() === today.getMonth() &&
              date.getDate() === today.getDate()
            );
          }

          function isUpcoming(date) {
            const today = new Date();
            const sevenDaysFromNow = new Date();
            sevenDaysFromNow.setDate(today.getDate() + 7);
            return date > today && date <= sevenDaysFromNow;
          }

          function renderTasks(tasks) {
            tasks.forEach((taskData) => {
              const taskContainer = document.createElement("div");
              taskContainer.classList.add("task-container");
              taskContainer.setAttribute("id", taskData.id);
              taskContainer.setAttribute("data-task", tasks.indexOf(taskData));

              const taskStatus = document.createElement("input");
              taskStatus.setAttribute("type", "checkbox");
              taskStatus.classList.add(
                "task-data-container",
                "task-status-checkbox"
              );
              taskStatus.checked = taskData.isDone;
              taskContainer.appendChild(taskStatus);

              const taskTitle = document.createElement("h3");
              taskTitle.classList.add("task-data-container", "task-title");
              taskTitle.setAttribute(
                "data-task-title",
                tasks.indexOf(taskData)
              );
              taskTitle.textContent = taskData.title;
              taskContainer.appendChild(taskTitle);

              const taskDueDate = document.createElement("label");
              taskDueDate.classList.add("task-data-container", "task-date");
              taskDueDate.setAttribute(
                "data-task-date",
                tasks.indexOf(taskData)
              );
              taskDueDate.textContent = taskData.dueDate;
              taskContainer.appendChild(taskDueDate);

              if (taskData.priority === "Low") {
                taskContainer.style.borderLeftColor = "#006400";
              } else if (taskData.priority === "Medium") {
                taskContainer.style.borderLeftColor = "#ff8c00";
              } else {
                taskContainer.style.borderLeftColor = "#8b0000";
              }

              ___WEBPACK_IMPORTED_MODULE_0__.containerCreator.createEditAndDeleteButtons(
                taskContainer
              );

              document
                .querySelector("#list-of-all-tasks")
                .appendChild(taskContainer);

              const taskDueDateObj = (0,
              date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(
                taskData.dueDate,
                "dd-MM-yyyy",
                new Date()
              );
              if (isToday(taskDueDateObj)) {
                document
                  .querySelector("#list-of-today-tasks")
                  .appendChild(taskContainer.cloneNode(true));
              } else if (isUpcoming(taskDueDateObj)) {
                document
                  .querySelector("#list-of-next-week-tasks")
                  .appendChild(taskContainer.cloneNode(true));
              }
            });
          }

          return {
            taskFactory,
            createNewTask,
            editChosenTask,
            deleteChosenTask,
            isToday,
            isUpcoming,
            renderTasks,
            tasksArray,
            taskTitlesArray,
          };
        };

        const Note = () => {
          const notesArray =
            JSON.parse(localStorage.getItem("notesArray")) || [];

          function noteFactory(id, title, description) {
            return { id, title, description };
          }

          function addNote(newNote) {
            notesArray.push(newNote);
            localStorage.setItem("notesArray", JSON.stringify(notesArray));
          }

          function deleteNote(noteToDelete) {
            const indexToDelete = parseInt(
              noteToDelete.getAttribute("data-note"),
              10
            );
            if (indexToDelete !== -1 && indexToDelete < notesArray.length) {
              notesArray.splice(indexToDelete, 1);

              updateDataNoteAttributes(indexToDelete);
              localStorage.setItem("notesArray", JSON.stringify(notesArray));
            }
          }

          function updateDataNoteAttributes(startIndex) {
            const noteContainers = document.querySelectorAll(".note-container");

            noteContainers.forEach((noteContainer) => {
              let currentDataNote = parseInt(
                noteContainer.getAttribute("data-note"),
                10
              );
              if (currentDataNote > startIndex) {
                currentDataNote -= 1;
                noteContainer.setAttribute("data-note", currentDataNote);
              }
            });
          }

          function createNewNote() {
            const noteId = (0, uuid__WEBPACK_IMPORTED_MODULE_2__["default"])();
            const noteForm = document.querySelector("#note-form");
            const noteTitleInput = document.querySelector("#note-title-input");
            const noteDescriptionInput = document.querySelector(
              "#note-description-input"
            );
            const newNote = noteFactory(
              noteId,
              noteTitleInput.value,
              noteDescriptionInput.value
            );
            addNote(newNote);
            noteForm.reset();
          }

          function deleteChosenNote(chosenNote) {
            deleteNote(chosenNote);
          }

          function renderNotes(notes) {
            notes.forEach((note) => {
              const noteContainer = document.createElement("div");
              noteContainer.classList.add("note-container");
              noteContainer.setAttribute("id", note.id);
              noteContainer.setAttribute("data-note", notes.indexOf(note));

              const deleteNoteButton = document.createElement("button");
              deleteNoteButton.classList.add("delete-note-button");
              deleteNoteButton.textContent = "x";
              noteContainer.appendChild(deleteNoteButton);

              const noteTitle = document.createElement("h3");
              noteTitle.classList.add("note-title");
              noteTitle.textContent = note.title;
              noteContainer.appendChild(noteTitle);

              const noteDescription = document.createElement("p");
              noteDescription.classList.add("note-description");
              noteDescription.textContent = note.description;
              noteContainer.appendChild(noteDescription);

              document
                .querySelector("#list-of-all-notes")
                .appendChild(noteContainer);
            });
          }

          return {
            noteFactory,
            createNewNote,
            deleteChosenNote,
            renderNotes,
            notesArray,
          };
        };

        /***/
      },

    /***/ "./src/validation.js":
      /*!***************************!*\
  !*** ./src/validation.js ***!
  \***************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ Validation: () => /* binding */ Validation,
          /* harmony export */
        });
        /* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! . */ "./src/index.js");
        /* harmony import */ var _domManipulation__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./domManipulation */ "./src/domManipulation.js"
          );

        const Validation = () => {
          const taskTitleInput = document.querySelector("#task-title-input");
          const taskDescriptionInput = document.querySelector(
            "#task-description-input"
          );
          const taskDueDateInput = document.querySelector("#task-date-input");
          const taskPriorityInput = document.querySelector(
            "#task-priority-input"
          );
          const editTaskTitleInput = document.querySelector(
            "#edit-task-title-input"
          );
          const editTaskDescriptionInput = document.querySelector(
            "#edit-task-description-input"
          );
          const editTaskPriorityInput = document.querySelector(
            "#edit-task-priority-input"
          );
          const noteTitleInput = document.querySelector("#note-title-input");
          const noteDescriptionInput = document.querySelector(
            "#note-description-input"
          );

          function validateCreationTaskForm() {
            if (
              ___WEBPACK_IMPORTED_MODULE_0__.task.taskTitlesArray &&
              ___WEBPACK_IMPORTED_MODULE_0__.task.taskTitlesArray.includes(
                taskTitleInput.value.trim()
              )
            ) {
              taskTitleInput.setCustomValidity(
                "Please enter a unique task title."
              );
              taskTitleInput.reportValidity();
              return false;
            }
            if (taskTitleInput.value === "") {
              taskTitleInput.setCustomValidity(
                "Please enter a title for your task."
              );
              taskTitleInput.reportValidity();
              return false;
            } else if (taskDescriptionInput.value === "") {
              taskDescriptionInput.setCustomValidity(
                "Please enter a description for your task."
              );
              taskDescriptionInput.reportValidity();
              return false;
            } else if (taskDueDateInput.value === "") {
              taskDueDateInput.setCustomValidity(
                "Please enter a due date for your task."
              );
              taskDueDateInput.reportValidity();
              return false;
            } else if (taskPriorityInput.value === "") {
              taskPriorityInput.setCustomValidity(
                "Please enter a priority for your task."
              );
              taskPriorityInput.reportValidity();
              return false;
            }
            if (taskTitleInput.value.trim().length > 20) {
              taskTitleInput.setCustomValidity(
                "Please enter a title of no more than 20 characters."
              );
              taskTitleInput.reportValidity();
              return false;
            }
            return true;
          }

          function validateEditTaskForm() {
            if (editTaskTitleInput.value === "") {
              editTaskTitleInput.setCustomValidity(
                "Please enter a title for your task."
              );
              editTaskTitleInput.reportValidity();
              return false;
            } else if (
              ___WEBPACK_IMPORTED_MODULE_0__.task.taskTitlesArray.includes(
                editTaskTitleInput.value.trim()
              ) &&
              editTaskTitleInput.value.trim() !==
                _domManipulation__WEBPACK_IMPORTED_MODULE_1__.currentTaskTitle.trim()
            ) {
              editTaskTitleInput.setCustomValidity(
                "Please enter a unique task title."
              );
              editTaskTitleInput.reportValidity();
              return false;
            } else if (editTaskDescriptionInput.value === "") {
              editTaskDescriptionInput.setCustomValidity(
                "Please enter a description for your task."
              );
              editTaskDescriptionInput.reportValidity();
              return false;
            } else if (editTaskPriorityInput.value === "") {
              editTaskPriorityInput.setCustomValidity(
                "Please enter a priority for your task."
              );
              editTaskPriorityInput.reportValidity();
              return false;
            }
            if (editTaskTitleInput.value.trim().length > 20) {
              editTaskTitleInput.setCustomValidity(
                "Please enter a title of no more than 20 characters."
              );
              editTaskTitleInput.reportValidity();
              return false;
            }
            return true;
          }

          function validateNoteForm() {
            if (noteTitleInput.value === "") {
              noteTitleInput.setCustomValidity(
                "Please enter a title for your note."
              );
              noteTitleInput.reportValidity();
              return false;
            } else if (noteDescriptionInput.value === "") {
              noteDescriptionInput.setCustomValidity(
                "Please enter a description for your note."
              );
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
              case editTaskPriorityInput:
              case noteTitleInput:
              case noteDescriptionInput:
                this.setCustomValidity("");
                break;
            }
          }

          return {
            validateCreationTaskForm,
            validateEditTaskForm,
            validateNoteForm,
            clearValidationMessage,
          };
        };

        /***/
      },

    /***/ "./src/images/checklist-image.png":
      /*!****************************************!*\
  !*** ./src/images/checklist-image.png ***!
  \****************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports =
          __webpack_require__.p +
          "images/checklist-image.2c192296e30a3e43034e.png";

        /***/
      },

    /***/ "./src/images/no-notes-image.png":
      /*!***************************************!*\
  !*** ./src/images/no-notes-image.png ***!
  \***************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports =
          __webpack_require__.p +
          "images/no-notes-image.04cfa1129a57fbfe33aa.png";

        /***/
      },

    /***/ "./src/images/no-tasks-image.png":
      /*!***************************************!*\
  !*** ./src/images/no-tasks-image.png ***!
  \***************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports =
          __webpack_require__.p +
          "images/no-tasks-image.e20620a551aa4b7c724a.png";

        /***/
      },

    /***/ "./src/images/tab-icon.png":
      /*!*********************************!*\
  !*** ./src/images/tab-icon.png ***!
  \*********************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports =
          __webpack_require__.p + "images/tab-icon.fcca87b1e90b5fe2399a.png";

        /***/
      },

    /***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ _arrayLikeToArray,
          /* harmony export */
        });
        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
          return arr2;
        }

        /***/
      },

    /***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
      /*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () =>
            /* binding */ _assertThisInitialized,
          /* harmony export */
        });
        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return self;
        }

        /***/
      },

    /***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
      /*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ _classCallCheck,
          /* harmony export */
        });
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        /***/
      },

    /***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
      /*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ _createClass,
          /* harmony export */
        });
        /* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js"
          );

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(
              target,
              (0, _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
                descriptor.key
              ),
              descriptor
            );
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          Object.defineProperty(Constructor, "prototype", {
            writable: false,
          });
          return Constructor;
        }

        /***/
      },

    /***/ "./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js":
      /*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js ***!
  \******************************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () =>
            /* binding */ _createForOfIteratorHelper,
          /* harmony export */
        });
        /* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js"
          );

        function _createForOfIteratorHelper(o, allowArrayLike) {
          var it =
            (typeof Symbol !== "undefined" && o[Symbol.iterator]) ||
            o["@@iterator"];
          if (!it) {
            if (
              Array.isArray(o) ||
              (it = (0,
              _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_0__[
                "default"
              ])(o)) ||
              (allowArrayLike && o && typeof o.length === "number")
            ) {
              if (it) o = it;
              var i = 0;
              var F = function F() {};
              return {
                s: F,
                n: function n() {
                  if (i >= o.length)
                    return {
                      done: true,
                    };
                  return {
                    done: false,
                    value: o[i++],
                  };
                },
                e: function e(_e) {
                  throw _e;
                },
                f: F,
              };
            }
            throw new TypeError(
              "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          }
          var normalCompletion = true,
            didErr = false,
            err;
          return {
            s: function s() {
              it = it.call(o);
            },
            n: function n() {
              var step = it.next();
              normalCompletion = step.done;
              return step;
            },
            e: function e(_e2) {
              didErr = true;
              err = _e2;
            },
            f: function f() {
              try {
                if (!normalCompletion && it["return"] != null) it["return"]();
              } finally {
                if (didErr) throw err;
              }
            },
          };
        }

        /***/
      },

    /***/ "./node_modules/@babel/runtime/helpers/esm/createSuper.js":
      /*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createSuper.js ***!
  \****************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ _createSuper,
          /* harmony export */
        });
        /* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"
          );
        /* harmony import */ var _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./isNativeReflectConstruct.js */ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js"
          );
        /* harmony import */ var _possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./possibleConstructorReturn.js */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"
          );

        function _createSuper(Derived) {
          var hasNativeReflectConstruct = (0,
          _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__[
            "default"
          ])();
          return function _createSuperInternal() {
            var Super = (0,
              _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
                Derived
              ),
              result;
            if (hasNativeReflectConstruct) {
              var NewTarget = (0,
              _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
                this
              ).constructor;
              result = Reflect.construct(Super, arguments, NewTarget);
            } else {
              result = Super.apply(this, arguments);
            }
            return (0,
            _possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_2__[
              "default"
            ])(this, result);
          };
        }

        /***/
      },

    /***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
      /*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ _defineProperty,
          /* harmony export */
        });
        /* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js"
          );

        function _defineProperty(obj, key, value) {
          key = (0, _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
            key
          );
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true,
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }

        /***/
      },

    /***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
      /*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ _getPrototypeOf,
          /* harmony export */
        });
        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o);
              };
          return _getPrototypeOf(o);
        }

        /***/
      },

    /***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
      /*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ _inherits,
          /* harmony export */
        });
        /* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js"
          );

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                writable: true,
                configurable: true,
              },
            }
          );
          Object.defineProperty(subClass, "prototype", {
            writable: false,
          });
          if (superClass)
            (0, _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
              subClass,
              superClass
            );
        }

        /***/
      },

    /***/ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js":
      /*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js ***!
  \*****************************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () =>
            /* binding */ _isNativeReflectConstruct,
          /* harmony export */
        });
        function _isNativeReflectConstruct() {
          if (typeof Reflect === "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham) return false;
          if (typeof Proxy === "function") return true;
          try {
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            );
            return true;
          } catch (e) {
            return false;
          }
        }

        /***/
      },

    /***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
      /*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () =>
            /* binding */ _possibleConstructorReturn,
          /* harmony export */
        });
        /* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js"
          );
        /* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"
          );

        function _possibleConstructorReturn(self, call) {
          if (
            call &&
            ((0, _typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(call) ===
              "object" ||
              typeof call === "function")
          ) {
            return call;
          } else if (call !== void 0) {
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
          }
          return (0,
          _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
            self
          );
        }

        /***/
      },

    /***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
      /*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ _setPrototypeOf,
          /* harmony export */
        });
        function _setPrototypeOf(o, p) {
          _setPrototypeOf = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function _setPrototypeOf(o, p) {
                o.__proto__ = p;
                return o;
              };
          return _setPrototypeOf(o, p);
        }

        /***/
      },

    /***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
      /*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ _toPrimitive,
          /* harmony export */
        });
        /* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js"
          );

        function _toPrimitive(input, hint) {
          if (
            (0, _typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(input) !==
              "object" ||
            input === null
          )
            return input;
          var prim = input[Symbol.toPrimitive];
          if (prim !== undefined) {
            var res = prim.call(input, hint || "default");
            if (
              (0, _typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(res) !==
              "object"
            )
              return res;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (hint === "string" ? String : Number)(input);
        }

        /***/
      },

    /***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
      /*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ _toPropertyKey,
          /* harmony export */
        });
        /* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js"
          );
        /* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js"
          );

        function _toPropertyKey(arg) {
          var key = (0,
          _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
            arg,
            "string"
          );
          return (0, _typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
            key
          ) === "symbol"
            ? key
            : String(key);
        }

        /***/
      },

    /***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
      /*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ _typeof,
          /* harmony export */
        });
        function _typeof(o) {
          "@babel/helpers - typeof";

          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (o) {
                    return typeof o;
                  }
                : function (o) {
                    return o &&
                      "function" == typeof Symbol &&
                      o.constructor === Symbol &&
                      o !== Symbol.prototype
                      ? "symbol"
                      : typeof o;
                  }),
            _typeof(o)
          );
        }

        /***/
      },

    /***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
      /*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () =>
            /* binding */ _unsupportedIterableToArray,
          /* harmony export */
        });
        /* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js"
          );

        function _unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === "string")
            return (0,
            _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
              o,
              minLen
            );
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor) n = o.constructor.name;
          if (n === "Map" || n === "Set") return Array.from(o);
          if (
            n === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return (0,
            _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
              o,
              minLen
            );
        }

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ id: moduleId,
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module["default"]
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/global */
  /******/ (() => {
    /******/ __webpack_require__.g = (function () {
      /******/ if (typeof globalThis === "object") return globalThis;
      /******/ try {
        /******/ return this || new Function("return this")();
        /******/
      } catch (e) {
        /******/ if (typeof window === "object") return window;
        /******/
      }
      /******/
    })();
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/publicPath */
  /******/ (() => {
    /******/ var scriptUrl;
    /******/ if (__webpack_require__.g.importScripts)
      scriptUrl = __webpack_require__.g.location + "";
    /******/ var document = __webpack_require__.g.document;
    /******/ if (!scriptUrl && document) {
      /******/ if (document.currentScript)
        /******/ scriptUrl = document.currentScript.src;
      /******/ if (!scriptUrl) {
        /******/ var scripts = document.getElementsByTagName("script");
        /******/ if (scripts.length) {
          /******/ var i = scripts.length - 1;
          /******/ while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
          /******/
        }
        /******/
      }
      /******/
    }
    /******/ // When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
    /******/ // or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
    /******/ if (!scriptUrl)
      throw new Error("Automatic publicPath is not supported in this browser");
    /******/ scriptUrl = scriptUrl
      .replace(/#.*$/, "")
      .replace(/\?.*$/, "")
      .replace(/\/[^\/]+$/, "/");
    /******/ __webpack_require__.p = scriptUrl;
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/nonce */
  /******/ (() => {
    /******/ __webpack_require__.nc = undefined;
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module is referenced by other modules so it can't be inlined
  /******/ var __webpack_exports__ = __webpack_require__("./src/index.js");
  /******/
  /******/
})();