self["webpackHotUpdatenexckycort_github_io"]('main', {
"./src/components/icons/index.ts": (function (module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ContactIcon: function() { return _contact__WEBPACK_IMPORTED_MODULE_0__["default"]; },
  MoonIcon: function() { return _moon__WEBPACK_IMPORTED_MODULE_1__["default"]; },
  SunIcon: function() { return _sun__WEBPACK_IMPORTED_MODULE_2__["default"]; },
  UserIcon: function() { return _user__WEBPACK_IMPORTED_MODULE_3__["default"]; }
});
/* harmony import */var _contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact */"./src/components/icons/contact/index.ts");
/* harmony import */var _moon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moon */"./src/components/icons/moon/index.ts");
/* harmony import */var _sun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sun */"./src/components/icons/sun/index.ts");
/* harmony import */var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */"./src/components/icons/user/index.ts");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__(/*! /home/nexckycort/projects/typescript/nexckycort.github.io/node_modules/.pnpm/@rspack+plugin-react-refresh@0.5.4_react-refresh@0.14.0/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js */"./node_modules/.pnpm/@rspack+plugin-react-refresh@0.5.4_react-refresh@0.14.0/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");




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
"./src/components/layout/navbar/index.ts": (function (module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _helpers_selectedLang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/selectedLang */"./src/helpers/selectedLang.ts");
/* harmony import */var _helpers_selectedTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helpers/selectedTheme */"./src/helpers/selectedTheme.ts");
/* harmony import */var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../icons */"./src/components/icons/index.ts");
/* harmony import */var _style_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.module.scss */"./src/components/layout/navbar/style.module.scss");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__(/*! /home/nexckycort/projects/typescript/nexckycort.github.io/node_modules/.pnpm/@rspack+plugin-react-refresh@0.5.4_react-refresh@0.14.0/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js */"./node_modules/.pnpm/@rspack+plugin-react-refresh@0.5.4_react-refresh@0.14.0/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");




const selectNavLink = (navElement)=>{
    const navLinks = navElement.querySelectorAll(".lined-link");
    for (const navLink of navLinks)navLink.addEventListener("click", ()=>{
        if (!navLink.classList.contains("active")) {
            var _navElement_querySelector;
            (_navElement_querySelector = navElement.querySelector(".lined-link.active")) === null || _navElement_querySelector === void 0 || _navElement_querySelector.classList.remove("active");
            navLink.classList.add("active");
        }
    });
};
const selectTheme = (navElement)=>{
    const toggleTheme = navElement.querySelector("#toggleTheme");
    toggleTheme.addEventListener("click", ()=>{
        document.body.classList.toggle("dark");
        const { theme, setTheme } = (0, _helpers_selectedTheme__WEBPACK_IMPORTED_MODULE_1__.selectedTheme)();
        if (theme === _helpers_selectedTheme__WEBPACK_IMPORTED_MODULE_1__.THEME.LIGTH) {
            toggleTheme.innerHTML = _icons__WEBPACK_IMPORTED_MODULE_2__.SunIcon;
            setTheme(_helpers_selectedTheme__WEBPACK_IMPORTED_MODULE_1__.THEME.DARK);
            return;
        }
        toggleTheme.innerHTML = _icons__WEBPACK_IMPORTED_MODULE_2__.MoonIcon;
        setTheme(_helpers_selectedTheme__WEBPACK_IMPORTED_MODULE_1__.THEME.LIGTH);
    });
};
const selectLanguage = (navElement)=>{
    const langElement = navElement.querySelector("#lang");
    langElement.addEventListener("click", ()=>{
        const { language, setLanguage, changeLanguage } = (0, _helpers_selectedLang__WEBPACK_IMPORTED_MODULE_0__.selectedLanguage)();
        let lang;
        if (language === _helpers_selectedLang__WEBPACK_IMPORTED_MODULE_0__.LANGUAGE.ES) lang = _helpers_selectedLang__WEBPACK_IMPORTED_MODULE_0__.LANGUAGE.EN;
        else lang = _helpers_selectedLang__WEBPACK_IMPORTED_MODULE_0__.LANGUAGE.ES;
        langElement.innerHTML = lang;
        setLanguage(lang);
        changeLanguage(lang);
    });
};
const routes = [
    {
        name: "Sobre mi",
        path: "#",
        icon: _icons__WEBPACK_IMPORTED_MODULE_2__.UserIcon,
        key: "aboutMe"
    },
    {
        name: "Cont\xe1ctame",
        path: "#/contact",
        icon: _icons__WEBPACK_IMPORTED_MODULE_2__.ContactIcon,
        key: "contact"
    }
];
const Navbar = ()=>{
    const currentPath = location.hash === "" ? "#" : location.hash;
    const toggleThemeIcon = ()=>{
        const { theme } = (0, _helpers_selectedTheme__WEBPACK_IMPORTED_MODULE_1__.selectedTheme)();
        if (theme === "dark") document.body.classList.toggle("dark");
        return theme === "light" ? _icons__WEBPACK_IMPORTED_MODULE_2__.MoonIcon : _icons__WEBPACK_IMPORTED_MODULE_2__.SunIcon;
    };
    const isActive = (path)=>{
        return currentPath === path ? "active" : "";
    };
    const { language } = (0, _helpers_selectedLang__WEBPACK_IMPORTED_MODULE_0__.selectedLanguage)();
    const navElement = document.createElement("nav");
    navElement.classList.add(_style_module_scss__WEBPACK_IMPORTED_MODULE_3__.nav);
    navElement.innerHTML = /* html */ `
    <div>
      <ul class="${_style_module_scss__WEBPACK_IMPORTED_MODULE_3__.navbarNav}">
        <li class="${_style_module_scss__WEBPACK_IMPORTED_MODULE_3__.navItem}">
          ${routes.map((param)=>{
        let { path, icon, key, name } = param;
        return /* html */ `<a class="${_style_module_scss__WEBPACK_IMPORTED_MODULE_3__.navLink} ${isActive(path)} lined-link" href="${path}">
                ${icon}<span data-section="navbar" data-value="${key}">${name}</span>
              </a>`;
    }).join("")}
        </li>
      </ul>
    </div>
    <div class="${_style_module_scss__WEBPACK_IMPORTED_MODULE_3__.wrapperLangTheme}">
      <button id="lang" class="${_style_module_scss__WEBPACK_IMPORTED_MODULE_3__.lang}" aria-label="btn lang">
        ${language}
      </button>
      <button id="toggleTheme" class="${_style_module_scss__WEBPACK_IMPORTED_MODULE_3__.toggleTheme}" aria-label="btn toggle theme">
        ${toggleThemeIcon()}
      </button>
    </div>
`;
    selectNavLink(navElement);
    selectTheme(navElement);
    selectLanguage(navElement);
    return navElement;
};
/* harmony default export */ __webpack_exports__["default"] = (Navbar);
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
    </div>`;
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
/* harmony import */var _pages_project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/project */"./src/pages/project/index.ts");
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
    else {
        const [, , project] = hash.split("/");
        content.append(await (0, _pages_project__WEBPACK_IMPORTED_MODULE_3__.ProjectPage)(project));
    }
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
	return "1078ea90359ca786ab00";
};

}();

}
);
//# sourceMappingURL=main.507ddbcf32f527651469.hot-update.js.map