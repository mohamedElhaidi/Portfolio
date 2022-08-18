(()=>{var e={957:()=>{window.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".zoomable").forEach((e=>{const t=e.getBoundingClientRect();console.log(t),e.addEventListener("mousemove",(function(i){const{layerX:n,layerY:s}=i,o=n/t.width,a=s/t.width;e.style.backgroundPositionX=`calc(100% *${o})`,e.style.backgroundPositionY=`calc(100% *${a})`,e.style.backgroundSize="150%"})),e.addEventListener("mouseleave",(function(t){e.style.backgroundPositionX="initial",e.style.backgroundPositionY="initial",e.style.backgroundSize="100%"}))}))}))},441:()=>{const e=new class{bodyElement;sideMenuToggler;sideMenu;sideMenuListWrap;sideMenuListItems;constructor(){this.bodyElement=document.body,this.sideMenuToggler=document.getElementById("nav-menu-toggler"),this.sideMenu=document.getElementById("nav-menu-list"),this.sideMenuListWrap=this.sideMenu.getElementsByClassName("nav-menu__list__wrap")[0],this.sideMenuListItems=[...this.sideMenu.getElementsByTagName("li")],this.sideMenuListWrap.addEventListener("click",this.toggleSideMenuList),this.sideMenuToggler.addEventListener("click",this.toggleSideMenuList),this.sideMenuListItems.forEach((e=>{e.addEventListener("click",(t=>{this.highlightListeItem(e),this.toggleSideMenuList()}))}))}highlightListeItem=e=>{this.sideMenuListItems.forEach((e=>e.classList.remove("selected"))),e.classList.add("selected")};highlightListeItemById=e=>{const t=this.sideMenuListItems.find((t=>t.dataset.id===e));t&&(this.sideMenuListItems.forEach((e=>e.classList.remove("selected"))),t.classList.add("selected"))};toggleSideMenuList=()=>{if(this.sideMenu.classList.contains("toggle"))return this.closeSideMenuList(),void this.bodyElement.classList.remove("--noScroll");this.openSideMenuList(),this.bodyElement.classList.add("--noScroll")};openSideMenuList=()=>{this.sideMenu.classList.add("toggle")};closeSideMenuList=()=>{this.sideMenu.classList.remove("toggle")}};let t=window.location.hash;t&&(t=t.replace("#",""),e.highlightListeItemById(t));const i=[...document.getElementsByClassName("page")];const n=e=>{window.innerHeight;return i.reduce(((e,t)=>(pageRect=t.getClientRects()[0],pageTop=pageRect.top,pageMargin=pageRect.top+pageRect.height,pageTop<=100&&pageTop>=-100?t:e)),null)};document.addEventListener("scroll",(t=>{const i=n();i&&e.highlightListeItemById(i.id)})),n()}},t={};function i(n){var s=t[n];if(void 0!==s)return s.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,i),o.exports}i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),(()=>{"use strict";i(441),i(957);i.p;const e=i.p+"images/ecommerce.PNG",t=i.p+"images/bugTracker.PNG",n=i.p+"images/user_cart.PNG",s=(i.p,[{id:0,thumbnail:e,title:"ECOMMERCE SHOP",description:"An ecommerce website made with reactJs, php and mysql as database. simple design using css with responsive layouts. utilise Stripe api for payements.",tags:["ReactJs","React-Router","PHP","MYSQL","STRIPE"],githubURL:"https://github.com/mohamedElhaidi/eCommerce",liveDemoURL:"https://bestshop-reactjs.herokuapp.com/",sections:[{title:"Design",description:"a simple clean design using styled components library.",image:e},{title:"Authentication & Authorization",description:"user can create an account and enjoy all features of the website.",image:i.p+"images/userLoginEcommerce.png"},{title:"Stripe as payement service",description:"payement with stripe payement api.",image:n}]},{id:1,thumbnail:t,title:"BUGS & TASKS TRACKER",description:"a simple bug and task tracking app using ReactJS and firebase (authentication, firestore, storage, functions) as backend. provides simple, flexible and secure way to manage projects.",tags:["ReactJs","React-Router","Firebase","MUI"],githubURL:"https://github.com/mohamedElhaidi/Todo",liveDemoURL:"https://todo-reactjs-firebase.herokuapp.com/",sections:[{title:"title",description:"something",image:t},{title:"title",description:"something",image:t},{title:"title",description:"something",image:t},{title:"title",description:"something",image:t},{title:"title",description:"something",image:t}]}]),o={firstName:"Mohamed",secondName:"El-haidi",dateOfBirth:"1997-03-03",bio:"Hi, my name is Mohamed El-haidi from Morocco, web developer. started to learn frontend web developent 5 months ago by learning HTML and CSS/SCSS first, then moved to JavaScript and recently ReactJs.\n\n          My ambition is to become a Fullstack web developer in the near future by learning even more technologies.\n\n          I choosed to learn Web dev because it's so amazing to be able to create different kind of apps. The challenges I face during this process of learning makes my passion for this grow more and more",imageProfileURL:i.p+"images/portrait.png",frontEndSkills:{name:"Front-end",tags:[{name:"HTML",progress:95},{name:"CSS/SCSS",progress:65},{name:"JavaScript",progress:60},{name:"ReactJs",progress:80}]},backendEndSkills:{name:"Back-end",tags:[{name:"MYSQL",progress:44},{name:"NodeJs",progress:55},{name:"PHP",progress:35},{name:"Firebase",progress:40}]}};class a{#e;#t;#i;#n=!1;constructor(e){document.body.style.overflow="hidden",this.#i=e,this.#e=this.createModal(),document.body.appendChild(this.#e),this.#t=this.#e.getBoundingClientRect();const t=this.#e.querySelector(".project-modal__window"),i=this.#e.querySelector(".project-modal__window__section-wrapper"),n=[];e.sections.forEach((e=>{const t=this.createSection(e);n[n.length]=t,i.appendChild(t)})),this.checkVisibilityOfSections(n),t.addEventListener("scroll",(e=>{this.checkVisibilityOfSections(n)}))}createModal(){const e=`\n    <div id="project-modal" class="project-modal">\n      <div class="project-modal__cover"></div>\n      <div class="project-modal__window">\n        <header class="project-modal__window__header">\n          <h2>${this.#i.title}</h2>\n          <div class="project-modal__window__header__options">\n            <a\n              href="${this.#i.githubURL}"\n              class="project-modal__window__header__options__link"\n              >GitHub</a\n            >\n            <a\n              href="${this.#i.liveDemoURL}"\n              class="project-modal__window__header__options__link"\n              >Live Demo</a\n            >\n          </div>\n        </header>\n\n        <div class="project-modal__window__section-wrapper">\n          \x3c!-- sections here --\x3e\n        </div>\n      </div>\n    </div>\n    `,t=document.createElement("div");return t.innerHTML=e.trim(),t.firstChild.querySelector(".project-modal__cover").addEventListener("click",(e=>{document.body.removeChild(this.#e),document.body.style.overflow="auto"})),t.firstChild}createSection(e){const{title:t,description:i,image:n}=e,s=`\n    <div class="project-modal-section">\n      <div class="project-modal-section__text-holder">\n        <h2>${t}</h2>\n        <p>${i}</p>\n      </div>\n      <div class="project-modal-section__image-holder">\n        <img\n          src=${n}\n          alt=""\n          class="project-modal-section__image-holder__image"\n        />\n      </div>\n    </div>\n    `,o=document.createElement("div");return o.innerHTML=s.trim(),o.firstChild}checkVisibilityOfSections(e){e.forEach((e=>{const t=e.getBoundingClientRect();t.y<.95*this.#t.height&&t.y+t.height>this.#t.x?e.classList.add("visible"):e.classList.remove("visible")}))}}const r=document.querySelector("#featured-projects-page .page__wrap"),c=document.querySelector("#extra-projects-page .extra-projects-page__wrap"),l=document.querySelector("#about-me-page .about-me-page__wrap");s.forEach((e=>{r.appendChild(function(e){const{thumbnail:t,title:i,description:n,tags:o,githubURL:r,liveDemoURL:c}=e,l=`\n  <div data-project-id="${e.id}" class="project-card --scall-on-hover">\n    <div class="project-card__preview zoomable" style="background-image:url(${t})">\n    </div>\n    <div class="project-card__info">\n      <h2>${i}</h2>\n      <p>${n}</p>\n      <div class="project-card__tags">\n      ${o.reduce(((e,t)=>e+`<span>${t}</span>`),"")}\n      </div>\n      <div class="project-card__options">\n        <a href="${r}" class="project-card__options__link">GitHub</a>\n        <a href="${c}" class="project-card__options__link">Live Demo</a>\n      </div>\n    </div>\n  </div>`,d=document.createElement("div");return d.innerHTML=l.trim(),d.querySelectorAll("a").forEach((e=>{e.onclick=e=>{e.cancelBubble=!0}})),d.firstChild.addEventListener("click",(e=>{new a(s[e.currentTarget.dataset.projectId])}),!1),d.firstChild}(e))})),[{id:0,title:"Masongry",description:"A library that provides masonry react component, simple and flexible with responsiveness",tags:["JavaScript","ReactJs"],externalLink:"https://github.com/mohamedElhaidi/masonry-react"},{id:1,title:"Snake game",description:"A simple snake game made using Javascript and canvas",tags:["JavaScript","HTML","CSS"],externalLink:"https://github.com/mohamedElhaidi/snake-game"},{id:2,title:"Porfilio",description:"my porftolio made to fit all screens and with a beautiful design wink wink",tags:["Javascript","SCSS","HTML"],externalLink:"https://github.com/mohamedElhaidi/Portfolio"}].forEach((e=>{c.appendChild(function(e){const{title:t,description:i,tags:n}=e,s=`<div class="extra-project-card --scall-on-hover">\n  <div class="extra-project-card__header">\n    <div class="extra-project-card__header__folder">\n      <svg\n        version="1.1"\n        xmlns="http://www.w3.org/2000/svg"\n        xmlns:xlink="http://www.w3.org/1999/xlink"\n        x="0px"\n        y="0px"\n        viewBox="0 0 64 64"\n        enable-background="new 0 0 64 64"\n        xml:space="preserve"\n      >\n        <polygon\n          stroke-miterlimit="10"\n          points="63,18 63,54 1,54 1,10 22,10 30,18 "\n        />\n      </svg>\n    </div>\n    <a\n      href="#externalLink"\n      class="extra-project-card__header__externalLink"\n    >\n      <svg\n        version="1.1"\n        xmlns="http://www.w3.org/2000/svg"\n        xmlns:xlink="http://www.w3.org/1999/xlink"\n        x="0px"\n        y="0px"\n        viewBox="0 0 64 64"\n        enable-background="new 0 0 64 64"\n        xml:space="preserve"\n      >\n        <path\n          stroke-miterlimit="10"\n          d="M37.004,32.166c1.224,0.533,2.576,0.829,3.997,0.828\n                 c3.271-0.003,6.175-1.576,7.998-4.006L60.99,16.98c1.255-1.673,1.998-3.751,1.996-6.002c-0.003-5.522-4.484-9.997-10.007-9.993\n                 c-2.251,0.002-4.327,0.747-5.999,2.004L33.989,15.998c-1.768,1.805-2.997,4.277-2.996,7.003c0.001,1.424,0.3,2.778,0.837,4.003"\n        />\n        <path stroke-miterlimit="10" d="M37.004,32.166" />\n        <path\n          stroke-miterlimit="10"\n          d="M31.831,27.004c0.053,0.121,0.107,0.24,0.166,0.358"\n        />\n        <path\n          stroke-miterlimit="10"\n          d="M26.997,31.836c-1.225-0.535-2.577-0.831-3.998-0.83\n                 c-2.251,0.002-4.328,0.747-5.999,2.004L4.01,46.02c-1.768,1.804-2.997,4.276-2.995,7.002c0.003,5.522,4.484,9.997,10.007,9.993\n                 c3.271-0.003,6.174-1.576,7.997-4.006L31.01,47.001c1.255-1.673,1.998-3.751,1.996-6.002c-0.001-1.422-0.299-2.774-0.835-3.998"\n        />\n        <line\n          stroke-miterlimit="10"\n          x1="23.006"\n          y1="41.006"\n          x2="40.994"\n          y2="22.994"\n        />\n      </svg>\n    </a>\n  </div>\n  <div class="extra-project-card__info">\n    <h2>${t}</h2>\n    <p>${i}</p>\n    <div class="extra-project-card__tags">\n    ${n.reduce(((e,t)=>e+`<span>${t}</span>`),"")}\n    </div>\n  </div>\n</div>`,o=document.createElement("div");return o.innerHTML=s.trim(),o.firstChild}(e))})),l.appendChild(function(e){const{firstName:t,secondName:i,dateOfBirth:n,bio:s,imageProfileURL:o,frontEndSkills:a,backendEndSkills:r}=e,c=`<div class="myPicture" style=" background-image:url(${o})"></div>\n    <div class="text">\n      <h2>${t+" "+i}</h2>\n      <h4 class="--dim-text"> born in ${n}</h4>\n      ${s.split("\n").reduce(((e,t)=>e+`<p>${t}</p>`),"")}\n        <div class="skills-container">\n        <h4 style="margin-top:2em">Frond-end</h4>\n        ${a.tags.reduce(((e,t)=>e+`<div class="skill">\n              <div class="skill__icon"></div>\n              <div class="skill__title">${t.name}</div>\n              <div class="skill__progress">\n                <div class="skill__progress__bar" style="width:${t.progress}%"></div>\n              </div>\n            </div>`),"")}\n        <h4 style="margin-top:2em">Back-end</h4>\n        ${r.tags.reduce(((e,t)=>e+`<div class="skill">\n              <div class="skill__icon"></div>\n              <div class="skill__title">${t.name}</div>\n              <div class="skill__progress">\n                <div class="skill__progress__bar" style="width:${t.progress}%"></div>\n              </div>\n            </div>`),"")}\n      </div>\n    </div>`,l=document.createElement("div");return l.innerHTML=c.trim(),l.classList.add("profileHolder"),l}(o))})()})();