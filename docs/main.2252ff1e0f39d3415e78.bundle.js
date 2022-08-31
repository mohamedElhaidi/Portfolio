(()=>{var e={957:()=>{window.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".zoomable").forEach((e=>{e.addEventListener("mousemove",(function(t){const i=e.getBoundingClientRect(),{layerX:n,layerY:s}=t,a=n/i.width,o=s/i.height;e.style.backgroundPositionX=`calc(100% * ${a})`,e.style.backgroundPositionY=`calc(100% * ${o})`,e.style.backgroundSize="120%"})),e.addEventListener("mouseleave",(function(t){e.style.backgroundPositionX="initial",e.style.backgroundPositionY="initial",e.style.backgroundSize="100%"}))}))}))},441:()=>{const e=new class{bodyElement;sideMenuToggler;sideMenu;sideMenuListWrap;sideMenuListItems;constructor(){this.bodyElement=document.body,this.sideMenuToggler=document.getElementById("nav-menu-toggler"),this.sideMenu=document.getElementById("nav-menu-list"),this.sideMenuListWrap=this.sideMenu.getElementsByClassName("bg")[0],this.sideMenuListItems=[...this.sideMenu.getElementsByTagName("li")],this.sideMenuListWrap.addEventListener("click",this.toggleSideMenuList),this.sideMenuToggler.addEventListener("click",this.toggleSideMenuList),this.sideMenuListItems.forEach((e=>{e.addEventListener("click",(t=>{this.highlightListeItem(e)}))})),this.highlightListeItemById("front-page")}highlightListeItem=e=>{this.sideMenuListItems.forEach((e=>e.classList.remove("selected"))),e.classList.add("selected")};highlightListeItemById=e=>{const t=this.sideMenuListItems.find((t=>t.dataset.id===e));t&&(this.sideMenuListItems.forEach((e=>e.classList.remove("selected"))),t.classList.add("selected"))};toggleSideMenuList=()=>{if(this.sideMenu.classList.contains("toggle"))return this.closeSideMenuList(),void this.bodyElement.classList.remove("--noScroll");this.openSideMenuList(),this.bodyElement.classList.add("--noScroll")};openSideMenuList=()=>{this.sideMenu.classList.add("toggle")};closeSideMenuList=()=>{this.sideMenu.classList.remove("toggle")}};let t=window.location.hash;t&&(t=t.replace("#",""),e.highlightListeItemById(t));const i=[...document.getElementsByClassName("section")];const n=e=>{window.innerHeight;return i.reduce(((e,t)=>(pageRect=t.getClientRects()[0],pageTop=pageRect.top,pageMargin=pageRect.top+pageRect.height,pageTop<=100&&pageTop>=-100?t:e)),null)};document.addEventListener("scroll",(t=>{const i=n();i&&e.highlightListeItemById(i.id)})),n()}},t={};function i(n){var s=t[n];if(void 0!==s)return s.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,i),a.exports}i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),(()=>{"use strict";i(441),i(957);const e=i.p+"images/ecommerce.PNG",t=i.p+"images/bugTracker.PNG",n=i.p+"images/bugtrackerTicket.PNG",s=i.p+"images/bugTrackerTodo.PNG",a=i.p+"images/bugtrackerRoles.PNG",o=i.p+"images/user_cart.PNG",r=(i.p,[{id:0,thumbnail:e,title:"ECOMMERCE SHOP",description:"An ecommerce website made with reactJs, php and mysql as database. simple design using css with responsive layouts. utilise Stripe api for payements.",tags:["ReactJs","React-Router","PHP","MYSQL","STRIPE"],githubURL:"https://github.com/mohamedElhaidi/eCommerce",liveDemoURL:"https://bestshop.hantercodes.com",sections:[{title:"Design",description:"a simple clean design using styled components library.",image:e},{title:"Authentication & Authorization",description:"user can create an account and enjoy all features of the website.",image:i.p+"images/userLoginEcommerce.png"},{title:"Stripe as payement service",description:"payement with stripe payement api.",image:o}]},{id:1,thumbnail:t,title:"BUGS & TASKS TRACKER",description:"a simple bug and task tracking app using ReactJS and firebase (authentication, firestore, storage, functions) as backend. provides simple, flexible and secure way to manage projects.",tags:["ReactJs","React-Router","Firebase","MUI"],githubURL:"https://github.com/mohamedElhaidi/Todo",liveDemoURL:"https://bugtracker.hantercodes.com",sections:[{title:"Design",description:"Clean design using MUI Components.",image:t},{title:"Security",description:"by using google authentication service, it provides secure and flexible methods of authentication. With a roles based authorization system, a role can be created and given to a user.",image:a},{title:"Tasks managmenet",description:"Includes Tasks managmenet system for each projects",image:n},{title:"Bug tracking",description:"Includes Bug tracking system for each projects",image:s}]}]),c={firstName:"Mohamed",secondName:"El-haidi",dateOfBirth:"1997",bio:"Hi, my name is Mohamed El-haidi from Morocco,A self-taught web developer. Coding is my love of life since I was little and always had a dream of making amazing Apps. I started learing to code by watching and reading online courses.\n\n          My ambition is to become a Fullstack web developer in the near future by learning even more technologies.\n\n          ",imageProfileURL:i.p+"images/portrait.png",frontEndSkills:{name:"Front-end",tags:[{name:"HTML",progress:95,color:"white"},{name:"CSS/SCSS",progress:65,color:"white"},{name:"JavaScript",progress:60,color:"white"},{name:"ReactJs",progress:80,color:"white"}]},backendEndSkills:{name:"Back-end",tags:[{name:"MYSQL",progress:35,color:"white"},{name:"NodeJs",progress:50,color:"white"},{name:"Firebase",progress:60,color:"white"}]}},l=i.p+"6b0f01e667a60497f03d2bc7f91a574b.pdf",d=[{name:"Instagram",icon:'<svg xmlns="http://www.w3.org/2000/svg" class="bi bi-instagram" viewBox="0 0 16 16">\n<path\n  d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />\n</svg>',url:"https://www.instagram.com/_hanter.dev"},{name:"Youtube",icon:'<svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">\n<path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>\n</svg>',url:"https://www.youtube.com/channel/UCEYiteucynVHLvd7oM-Uwpw"},{name:"GitHub",icon:'<svg xmlns="http://www.w3.org/2000/svg" class="bi bi-github" viewBox="0 0 16 16">\n  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />\n</svg>',url:"https://github.com/mohamedElhaidi"},{name:"LinkedIn",icon:'<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">\n<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />\n</svg>',url:"https://www.linkedin.com/in/elhaidimohamed/"},{name:"Twitter",icon:'<svg xmlns="http://www.w3.org/2000/svg" class="bi bi-twitter" viewBox="0 0 16 16">\n<path\n  d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />\n</svg>',url:"https://twitter.com/elhaidi_mohamed"}];class h{#e;#t;#i;#n=!1;constructor(e){document.body.style.overflow="hidden",this.#i=e,this.#e=this.createModal(),document.body.appendChild(this.#e),this.#t=this.#e.getBoundingClientRect();const t=this.#e.querySelector(".project-modal__window"),i=this.#e.querySelector(".project-modal__window__section-wrapper"),n=[];e.sections.forEach((e=>{const t=this.createSection(e);n[n.length]=t,i.appendChild(t)})),this.checkVisibilityOfSections(n),t.addEventListener("scroll",(e=>{this.checkVisibilityOfSections(n)}))}createModal(){const e=`\n    <div id="project-modal" class="project-modal">\n      <div class="project-modal__cover"></div>\n      <div class="project-modal__window">\n        <header class="project-modal__window__header">\n          <h2>${this.#i.title}</h2>\n          <div class="project-modal__window__header__options">\n            <a\n              href="${this.#i.githubURL}"\n              class="project-modal__window__header__options__link"\n              >GitHub</a\n            >\n            <a\n              href="${this.#i.liveDemoURL}"\n              class="project-modal__window__header__options__link"\n              >Live Demo</a\n            >\n          </div>\n        </header>\n\n        <div class="project-modal__window__section-wrapper">\n          \x3c!-- sections here --\x3e\n        </div>\n      </div>\n    </div>\n    `,t=document.createElement("div");return t.innerHTML=e.trim(),t.firstChild.querySelector(".project-modal__cover").addEventListener("click",(e=>{document.body.removeChild(this.#e),document.body.style.overflow="auto"})),t.firstChild}createSection(e){const{title:t,description:i,image:n}=e,s=`\n    <div class="project-modal-section">\n      <div class="project-modal-section__text-holder">\n        <h2>${t}</h2>\n        <p>${i}</p>\n      </div>\n      <div class="project-modal-section__image-holder">\n        <img\n          src=${n}\n          alt=""\n          class="project-modal-section__image-holder__image"\n        />\n      </div>\n    </div>\n    `,a=document.createElement("div");return a.innerHTML=s.trim(),a.firstChild}checkVisibilityOfSections(e){e.forEach((e=>{const t=e.getBoundingClientRect();t.y<.95*this.#t.height&&t.y+t.height>this.#t.x?e.classList.add("visible"):e.classList.remove("visible")}))}}document.getElementById("ResumeLink").href=l;const m=document.querySelector("#featured-projects .section__content"),p=document.querySelector("#extra-projects .extra-projects-page__wrap"),g=document.querySelector("#about-me .about-me-page__wrap");r.forEach((e=>{m.appendChild(function(e){const{thumbnail:t,title:i,description:n,tags:s,githubURL:a,liveDemoURL:o}=e,c=`\n    <div data-project-id="${e.id}" class="project-card --scall-on-hover vanisher --darkCard --rounded-mid" data-delay="100">\n      <div class="project-card__preview zoomable" style="background-image:url(${t})">\n      </div>\n      <div class="project-card__info">\n        <h2>${i}</h2>\n        <p>${n}</p>\n        <div class="project-card__tags">\n        ${s.reduce(((e,t)=>e+`<span>${t}</span>`),"")}\n        </div>\n        <div class="project-card__options">\n          <a href="${a}" target="_blank" class="project-card__options__link " >GitHub</a>\n          <a href="${o}" target="_blank" class="project-card__options__link " >Live Demo</a>\n        </div>\n      </div>\n    </div>`,l=document.createElement("div");return l.innerHTML=c.trim(),l.querySelectorAll("a").forEach((e=>{e.onclick=e=>{e.cancelBubble=!0}})),l.firstChild.addEventListener("click",(e=>{new h(r[e.currentTarget.dataset.projectId])}),!1),l.firstChild}(e))})),[{id:0,title:"Masongry",description:"A library that provides masonry react component, simple and flexible with responsiveness",tags:["JavaScript","ReactJs"],externalLink:"https://github.com/mohamedElhaidi/masonry-react"},{id:1,title:"Snake game",description:"A simple snake game made using Javascript and canvas",tags:["JavaScript","HTML","CSS"],externalLink:"https://github.com/mohamedElhaidi/snake-game"},{id:2,title:"Porfilio",description:"my porftolio made to fit all screens and with a beautiful design wink wink",tags:["Javascript","SCSS","HTML"],externalLink:"https://github.com/mohamedElhaidi/Portfolio"}].forEach((e=>{p.appendChild(function(e){const{title:t,description:i,tags:n,externalLink:s}=e,a=`<div class="extra-project-card --scall-on-hover vanisher --darkCard --rounded-mid">\n    <div class="extra-project-card__header">\n      <div class="extra-project-card__header__folder">\n        <svg\n          version="1.1"\n          xmlns="http://www.w3.org/2000/svg"\n          xmlns:xlink="http://www.w3.org/1999/xlink"\n          x="0px"\n          y="0px"\n          viewBox="0 0 64 64"\n          enable-background="new 0 0 64 64"\n          xml:space="preserve"\n        >\n          <polygon\n            stroke-miterlimit="10"\n            points="63,18 63,54 1,54 1,10 22,10 30,18 "\n          />\n        </svg>\n      </div>\n      <a\n        href="${s}"\n        target="_blank"\n        class="extra-project-card__header__externalLink"\n      >\n        <svg\n          version="1.1"\n          xmlns="http://www.w3.org/2000/svg"\n          xmlns:xlink="http://www.w3.org/1999/xlink"\n          x="0px"\n          y="0px"\n          viewBox="0 0 64 64"\n          enable-background="new 0 0 64 64"\n          xml:space="preserve"\n        >\n          <path\n            stroke-miterlimit="10"\n            d="M37.004,32.166c1.224,0.533,2.576,0.829,3.997,0.828\n                   c3.271-0.003,6.175-1.576,7.998-4.006L60.99,16.98c1.255-1.673,1.998-3.751,1.996-6.002c-0.003-5.522-4.484-9.997-10.007-9.993\n                   c-2.251,0.002-4.327,0.747-5.999,2.004L33.989,15.998c-1.768,1.805-2.997,4.277-2.996,7.003c0.001,1.424,0.3,2.778,0.837,4.003"\n          />\n          <path stroke-miterlimit="10" d="M37.004,32.166" />\n          <path\n            stroke-miterlimit="10"\n            d="M31.831,27.004c0.053,0.121,0.107,0.24,0.166,0.358"\n          />\n          <path\n            stroke-miterlimit="10"\n            d="M26.997,31.836c-1.225-0.535-2.577-0.831-3.998-0.83\n                   c-2.251,0.002-4.328,0.747-5.999,2.004L4.01,46.02c-1.768,1.804-2.997,4.276-2.995,7.002c0.003,5.522,4.484,9.997,10.007,9.993\n                   c3.271-0.003,6.174-1.576,7.997-4.006L31.01,47.001c1.255-1.673,1.998-3.751,1.996-6.002c-0.001-1.422-0.299-2.774-0.835-3.998"\n          />\n          <line\n            stroke-miterlimit="10"\n            x1="23.006"\n            y1="41.006"\n            x2="40.994"\n            y2="22.994"\n          />\n        </svg>\n      </a>\n    </div>\n    <div class="extra-project-card__info">\n      <h2>${t}</h2>\n      <p>${i}</p>\n      <div class="extra-project-card__tags">\n      ${n.reduce(((e,t)=>e+`<span>${t}</span>`),"")}\n      </div>\n    </div>\n  </div>`,o=document.createElement("div");return o.innerHTML=a.trim(),o.firstChild}(e))})),g.appendChild(function(e){const{firstName:t,secondName:i,dateOfBirth:n,bio:s,imageProfileURL:a,frontEndSkills:o,backendEndSkills:r}=e,c=[...o.tags,...r.tags],l=`\n    <div class="myPicture vanisher" style=" background-image:url(${a})"></div>\n      <div class="text vanisher">\n        <h2>${t+" "+i}</h2>\n        <h4 class="--dim-text"> born in ${n}</h4>\n        ${s.split("\n").reduce(((e,t)=>e+`<p>${t}</p>`),"")}\n      </div>\n      <h1>Skills</h1>\n          <div class="skills">\n          \n            ${c.reduce(((e,t,i)=>e+`<div class="skill vanisher" data-delay="${100*i}">\n                <span>${t.name}</span>\n                <svg>\n                <circle cx="50%" cy="50%" r="40%" stroke-width="3" stroke-dashoffset="0"\n                    stroke="#fff" fill="none" />\n                  <circle class="path" cx="50%" cy="50%" r="40%" stroke-dashoffset="calc(2 * 40% * 3.14 * ${t.progress/100+1})"\n                    stroke="${t.color}" fill="none" />\n                  \n                </svg>\n              </div>`),"")}\n    </div>`,d=document.createElement("div");return d.innerHTML=l.trim(),d.classList.add("profileHolder"),d}(c));const u=document.querySelectorAll(".social-media-list ul");d.forEach((e=>u.forEach(((t,i)=>t.appendChild(function(e,t){const i=`<a href="${e.url}"  data-tooltip="${e.name}" class="vanisher" >\n      ${e.icon}\n    </a>`,n=document.createElement("li");return n.innerHTML=i.trim(),n}(e))))));const v=document.querySelector("#navBar-logo"),w=document.querySelectorAll(".vanisher");w.forEach((e=>{e.dataset.delay})),document.addEventListener("scroll",(()=>{const e=window.scrollY,t=150/Math.ceil(document.body.offsetHeight-window.innerHeight)*e;v.children[1].style.width=t+"px",w.forEach((e=>{const{y:t,height:i}=e.getClientRects()[0],n=t+.2*i,s=t+.8*i,a=window.innerHeight;n>0&&n<a||s>0&&s<a?e.classList.add("--unvanish"):e.classList.remove("--unvanish")}))}))})()})();