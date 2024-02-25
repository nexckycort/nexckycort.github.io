self["webpackHotUpdatenexckycort_github_io"]('main', {
"./src/routes/index.ts": (function (module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  router: function() { return router; },
  routes: function() { return routes; }
});
/* harmony import */var _components_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/layout */"./src/components/layout/index.ts");
/* harmony import */var _pages_aboutme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/aboutme */"./src/pages/aboutme/index.ts");
/* harmony import */var _pages_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/contact */"./src/pages/contact/index.ts");
/* harmony import */var _helpers_selectedLang__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/selectedLang */"./src/helpers/selectedLang.ts");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__(/*! /home/nexckycort/projects/typescript/nexckycort.github.io/node_modules/.pnpm/@rspack+plugin-react-refresh@0.5.4_react-refresh@0.14.0/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js */"./node_modules/.pnpm/@rspack+plugin-react-refresh@0.5.4_react-refresh@0.14.0/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");




const routes = {
    "": _pages_aboutme__WEBPACK_IMPORTED_MODULE_1__.AboutMePage,
    "#/contact": _pages_contact__WEBPACK_IMPORTED_MODULE_2__.ContactPage
};
const router = async ()=>{
    const header = document.getElementById("header");
    const content = document.getElementById("content");
    const footer = document.getElementById("footer");
    if (header.childNodes.length === 0 && footer.childNodes.length === 0) {
        header.append((0, _components_layout__WEBPACK_IMPORTED_MODULE_0__.Navbar)());
        footer.append((0, _components_layout__WEBPACK_IMPORTED_MODULE_0__.Footer)());
    }
    const hash = location.hash.toLowerCase();
    content.innerHTML = "";
    if (routes[hash] !== undefined) content.append(await routes[hash]());
    const { changeLanguage } = (0, _helpers_selectedLang__WEBPACK_IMPORTED_MODULE_4__.selectedLanguage)();
    await changeLanguage();
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
	return "ed8baa628df35220f63c";
};

}();

}
);
//# sourceMappingURL=main.7c141ebe133288fc634b.hot-update.js.map