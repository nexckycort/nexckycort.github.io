self["webpackHotUpdatenexckycort_github_io"]('main', {
"./src/pages/aboutme/index.ts": (function (module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AboutMePage: function() { return AboutMePage; }
});
/* harmony import */var _style_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.module.scss */"./src/pages/aboutme/style.module.scss");
/* harmony import */var _lang_es_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lang/es.json */"./src/lang/es.json");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__(/*! /home/nexckycort/projects/typescript/nexckycort.github.io/node_modules/.pnpm/@rspack+plugin-react-refresh@0.5.4_react-refresh@0.14.0/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js */"./node_modules/.pnpm/@rspack+plugin-react-refresh@0.5.4_react-refresh@0.14.0/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");


const AboutMePage = async ()=>{
    const me = await __webpack_require__.e("public_me_png").then(__webpack_require__.t.bind(__webpack_require__, /*! ../../../public/me.png */"./public/me.png", 17)).then((module)=>module.default);
    const divElement = document.createElement("div");
    divElement.classList.add(_style_module_scss__WEBPACK_IMPORTED_MODULE_0__.aboutMeWrapper);
    divElement.innerHTML = /* html */ `
    <div class="${_style_module_scss__WEBPACK_IMPORTED_MODULE_0__.meWrapper}">
      <img src="${me}" class="${_style_module_scss__WEBPACK_IMPORTED_MODULE_0__.me}" alt="me" />
      <h2 class="${_style_module_scss__WEBPACK_IMPORTED_MODULE_0__.rol} data-section="profile" data-value="rol"">${_lang_es_json__WEBPACK_IMPORTED_MODULE_1__.profile.rol}</h2>
    </div>
    <div class="${_style_module_scss__WEBPACK_IMPORTED_MODULE_0__.aboutMe}">
      <h1 class="${_style_module_scss__WEBPACK_IMPORTED_MODULE_0__.title}" data-section="profile" data-value="title">${_lang_es_json__WEBPACK_IMPORTED_MODULE_1__.profile.title}</h1>
      <p class="${_style_module_scss__WEBPACK_IMPORTED_MODULE_0__.description}" data-section="profile" data-value="description">${_lang_es_json__WEBPACK_IMPORTED_MODULE_1__.profile.description}</p>
      <a class="${_style_module_scss__WEBPACK_IMPORTED_MODULE_0__.resume}" id="btnModalViewCV" rel="noopener" data-section="profile" data-value="cv">${_lang_es_json__WEBPACK_IMPORTED_MODULE_1__.profile.cv}</a>
    </div>
    <div id="modalViewCV" class="${_style_module_scss__WEBPACK_IMPORTED_MODULE_0__.modal}">
      <div class="${_style_module_scss__WEBPACK_IMPORTED_MODULE_0__.modalContent}">
        <span class="${_style_module_scss__WEBPACK_IMPORTED_MODULE_0__.modalClose}">&times;</span>
        <iframe class="${_style_module_scss__WEBPACK_IMPORTED_MODULE_0__.cv}" src="https://drive.google.com/file/d/1NU44MD0QEHZ9XSHlh1pQsLwqunrMn5t3/preview"></iframe>
      </div>
    </div>`;
    const modalElement = divElement.querySelector("#modalViewCV");
    const btnModalViewCVElement = divElement.querySelector("#btnModalViewCV");
    btnModalViewCVElement.addEventListener("click", (e)=>{
        e.preventDefault();
        modalElement.style.display = "block";
    });
    const closeModalElement = divElement.getElementsByClassName(_style_module_scss__WEBPACK_IMPORTED_MODULE_0__.modalClose)[0];
    closeModalElement.addEventListener("click", (e)=>{
        e.preventDefault();
        modalElement.style.display = "none";
    });
    window.onclick = function(event) {
        if (event.target === modalElement) modalElement.style.display = "none";
    };
    return divElement;
};
function $RefreshSig$() {
    return $ReactRefreshRuntime$.createSignatureFunctionForTransform();
}
function $RefreshReg$(type, id) {
    $ReactRefreshRuntime$.register(type, module.id + "_" + id);
}
Promise.resolve().then(function() {
    $ReactRefreshRuntime$.refresh(module.id, module.hot);
});
}),

},function(__webpack_require__) {
// webpack/runtime/get_full_hash
!function() {
__webpack_require__.h = function () {
	return "71cb46b7f8587e4d40db";
};

}();

}
);
//# sourceMappingURL=main.b4d5fa4bf44166074253.hot-update.js.map