(()=>{var e={704:function(e,t,o){var n={"./en.json":["870","907"],"./es.json":["107"]};function a(e){if(!o.o(n,e))return Promise.resolve().then(function(){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=n[e],a=t[0];return Promise.all(t.slice(1).map(o.e)).then(function(){return o.t(a,19)})}a.keys=()=>Object.keys(n),a.id="704",e.exports=a},107:function(e){"use strict";e.exports=JSON.parse('{"navbar":{"aboutMe":"Sobre mi","portfolio":"Portafolio","contact":"Cont\xe1ctame"},"profile":{"title":"Hola, yo soy Nestor","rol":"Software Engineer","description":"Un Software Engineer que se enfoca principalmente en el backend, pero me siento c\xf3modo con el Frontend u otras \xe1reas si es necesario. Me importa el rendimiento (y espero que a ti tambi\xe9n). He liderado proyectos desde cero, construido m\xfaltiples bibliotecas internas para optimizar el flujo de trabajo. Mis habilidades abarcan tecnolog\xedas como TypeScript, Node.js, Go y React. Me motiva resolver desaf\xedos tecnol\xf3gicos y ayudar a las empresas a lograr sus objetivos de manera efectiva."},"footer":{"quote":"Estoy disponible en casi todas las redes sociales. Puede enviarme un mensaje, le responder\xe9 dentro de las 24 horas. Puedo ayudarte con Node.js, TypeScript, React, Arquitectura de software, CI/CD, Cloud y desarrollo Open Source.","contactMe":"cont\xe1ctame","btnContactMe":"enviar un correo electr\xf3nico","poweredBy":"Desarrollado por Nestor Cortina"}}')}},t={};function o(n){var a=t[n];if(void 0!==a)return a.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,o),r.exports}o.m=e,(()=>{var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};o.t=function(n,a){if(1&a&&(n=this(n)),8&a||"object"==typeof n&&n&&(4&a&&n.__esModule||16&a&&"function"==typeof n.then))return n;var r=Object.create(null);o.r(r);var i={};e=e||[null,t({}),t([]),t(t)];for(var l=2&a&&n;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach(function(e){i[e]=function(){return n[e]}});return i.default=function(){return n},o.d(r,i),r}})(),o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce(function(t,n){return o.f[n](e,t),t},[]))},o.u=function(e){return"static/js/async/"+e+".9431ce40.js"},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},(()=>{var e={},t="nexckycort.github.io:";o.l=function(n,a,r,i){if(e[n]){e[n].push(a);return}if(void 0!==r){for(var l,s,c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+r){l=u;break}}}!l&&(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.setAttribute("data-webpack",t+r),l.src=n),e[n]=[a];var m=function(t,o){l.onerror=l.onload=null,clearTimeout(p);var a=e[n];if(delete e[n],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach(function(e){return e(o)}),t)return t(o)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=m.bind(null,l.onerror),l.onload=m.bind(null,l.onload),s&&document.head.appendChild(l)}})(),o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="/nexckycort.github.io/",o.rv=function(){return"1.0.14"},(()=>{var e={980:0};o.f.j=function(t,n){var a=o.o(e,t)?e[t]:void 0;if(0!==a){if(a)n.push(a[2]);else{var r=new Promise(function(o,n){a=e[t]=[o,n]});n.push(a[2]=r);var i=o.p+o.u(t),l=Error();o.l(i,function(n){if(o.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var r=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",l.name="ChunkLoadError",l.type=r,l.request=i,a[1](l)}},"chunk-"+t,t)}}};var t=function(t,n){var a=n[0],r=n[1],i=n[2],l,s,c=0;if(a.some(function(t){return 0!==e[t]})){for(l in r)o.o(r,l)&&(o.m[l]=r[l]);i&&i(o)}for(t&&t(n);c<a.length;c++)s=a[c],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0},n=self.webpackChunknexckycort_github_io=self.webpackChunknexckycort_github_io||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),o.ruid="bundler=rspack@1.0.14",(()=>{"use strict";var e=o("107");let t={footer:"footer-b31o8f",poweredBy:"poweredBy-_8UOwT"},n=()=>{let o=document.createElement("footer");return o.classList.add(t.footer),o.innerHTML=`
  <div class="${t.poweredBy}">
    <p data-section="footer" data-value="poweredBy">${e.footer.poweredBy}</p>
  </div>`,o};var a=function(e){return e.ES="es",e.EN="en",e}({});let r=()=>{let e=localStorage.getItem("lang")??"es",t=document.querySelectorAll("[data-section]"),n=async function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,a=await o(704)(`./${n}.json`).then(e=>e.default);for(let e of t){let t=e.dataset.section,o=e.dataset.value;e.textContent=a[t][o]}};return{language:e,setLanguage:e=>localStorage.setItem("lang",e.toLowerCase()),changeLanguage:n}};var i=function(e){return e.LIGTH="light",e.DARK="dark",e}({});let l=()=>{let e=localStorage.getItem("theme")??"light";return{theme:e,setTheme:e=>localStorage.setItem("theme",e)}},s=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
<path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
</svg>`,c=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
<path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
</svg>`,d=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sun" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
<circle cx="12" cy="12" r="4" />
<path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
</svg>`,u=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
<circle cx="12" cy="7" r="4" />
<path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
</svg>`,m={nav:"nav-pRHAIk",navbarNav:"navbarNav-zDGgvU",navItem:"navItem-As3O9R",navLink:"navLink-fD3lHC",lang:"lang-fKTKS5",toggleTheme:"toggleTheme-KNf5zD",wrapperLangTheme:"wrapperLangTheme-hvOQrr"},p=e=>{for(let t of e.querySelectorAll(".lined-link"))t.addEventListener("click",()=>{if(!t.classList.contains("active")){var o;null===(o=e.querySelector(".lined-link.active"))||void 0===o||o.classList.remove("active"),t.classList.add("active")}})},f=e=>{let t=e.querySelector("#toggleTheme");t.addEventListener("click",()=>{document.body.classList.toggle("dark");let{theme:e,setTheme:o}=l();if(e===i.LIGTH){t.innerHTML=d,o(i.DARK);return}t.innerHTML=c,o(i.LIGTH)})},h=e=>{let t=e.querySelector("#lang");t.addEventListener("click",()=>{let e;let{language:o,setLanguage:n,changeLanguage:i}=r();e=o===a.ES?a.EN:a.ES,t.innerHTML=e,n(e),i(e)})},v=[{name:"Sobre mi",path:"#",icon:u,key:"aboutMe"},{name:"Cont\xe1ctame",path:"#/contact",icon:s,key:"contact"}],b=()=>{let e=""===location.hash?"#":location.hash,t=t=>e===t?"active":"",{language:o}=r(),n=document.createElement("nav");return n.classList.add(m.nav),n.innerHTML=`
    <div>
      <ul class="${m.navbarNav}">
        <li class="${m.navItem}">
          ${v.map(e=>{let{path:o,icon:n,key:a,name:r}=e;return`<a class="${m.navLink} ${t(o)} lined-link" href="${o}">
                ${n}<span data-section="navbar" data-value="${a}">${r}</span>
              </a>`}).join("")}
        </li>
      </ul>
    </div>
    <div class="${m.wrapperLangTheme}">
      <button id="lang" class="${m.lang}" aria-label="btn lang">
        ${o}
      </button>
      <button id="toggleTheme" class="${m.toggleTheme}" aria-label="btn toggle theme">
        ${(()=>{let{theme:e}=l();return"dark"===e&&document.body.classList.toggle("dark"),"light"===e?c:d})()}
      </button>
    </div>
`,p(n),f(n),h(n),n},g={aboutMeWrapper:"aboutMeWrapper-prMAlM",meWrapper:"meWrapper-HMwwlN",me:"me-aylGkj",rol:"rol-XuavxD",title:"title-o8ESTh",description:"description-hV6lpP",aboutMe:"aboutMe-f6KVP0"},y=async()=>{let t=document.createElement("div");return t.classList.add(g.aboutMeWrapper),t.innerHTML=`
    <div class="${g.meWrapper}">
      <img src="data:image/webp;base64,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" class="${g.me}" alt="me" />
      <h2 class="${g.rol} data-section="profile" data-value="rol"">${e.profile.rol}</h2>
    </div>
    <div class="${g.aboutMe}">
      <h1 class="${g.title}" data-section="profile" data-value="title">${e.profile.title}</h1>
      <p class="${g.description}" data-section="profile" data-value="description">${e.profile.description}</p>
    </div>`,t},L=o.p+"static/svg/contact.f03f427f.svg";var w=JSON.parse('[{"id":0,"name":"github","url":"https://github.com/nexckycort"},{"id":1,"name":"linkedin","url":"https://www.linkedin.com/in/nexckycort"},{"id":2,"name":"twitter","url":"https://twitter.com/nexckycort"},{"id":3,"name":"instagram","url":"https://www.instagram.com/nexckycort"}]');let k={footer:"footer-pLLqsX",wrapperImage:"wrapperImage-JSdeSn",image:"image-AeYLw0",body:"body-NZgpdw",contactTitle:"contactTitle-pjSDQi",quote:"quote-ZB87VN",mediaLink:"mediaLink-j3KqJR",btnContactMe:"btnContactMe-fBM_J1"},x={"":y,"#/contact":async()=>{let t=document.createElement("div");return t.classList.add(k.footer),t.innerHTML=`
  <div class="${k.wrapperImage}">
    <img class="${k.image}" src="${L}" alt="contact image" />
  </div>
  <div class="${k.body}">
    <h1 class="${k.contactTitle}" data-section="footer" data-value="contactMe">${e.footer.contactMe}</h1>
    <p class="${k.quote}" data-section="footer" data-value="quote">${e.footer.quote}</p>
    <div>
      ${w.map(e=>{let{url:t,name:o}=e;return`
          <a class="${k.mediaLink} lined-link" href="${t}" target="_blank" rel="noopener noreferrer">
            ${o}
          </a>`}).join("")}
    </div>
    <a class="${k.btnContactMe}" href="mailto:nexckycort@gmail.com" data-section="footer" data-value="btnContactMe">${e.footer.contactMe}</a>
  </div>`,t}},M=async()=>{let e=document.getElementById("header"),t=document.getElementById("content"),o=document.getElementById("footer");0===e.childNodes.length&&0===o.childNodes.length&&(e.append(b()),o.append(n()));let a=location.hash.toLowerCase();t.innerHTML="",void 0!==x[a]&&t.append(await x[a]());let{changeLanguage:i}=r();await i()};window.addEventListener("load",M),window.addEventListener("hashchange",M)})()})();