(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return h}));var s=n(4),a=n(1),o=n(2);const i=n(3);class r extends s.a{constructor(t){super({store:a.a,element:document.getElementById("app")}),this.$dom="",this.$router="",t.hasOwnProperty("store")&&t.store instanceof a.a&&(this.store=t.store),t.hasOwnProperty("ele")&&(this.element=this.nodeById(t.ele)||this.element),t.hasOwnProperty("router")&&t.router instanceof o.a&&(this.$router=t.router,this.$router.start())}async setMeta(t,e){const n=document.createElement("meta");n.setAttribute("name",e.name),n.setAttribute("content",e.content),t.insertBefore(n,t.querySelector("link"))}async init(t){this.$dom=t,await this.setMeta(this.$dom.querySelector("head"),{name:"author",content:"Samuel Onyijne"}),window.FundMyLaptop=this}async run(){document.addEventListener("DOMContentLoaded",async t=>{await this.init(t.target)})}nodeById(t){return document.getElementById(""+t)}async loadHTML(t){fetch(t).then(t=>t.text()).then(t=>{this.element.innerHTML=t})}}const c=new r({ele:"fundmylaptopapp"});async function u(t){const e=await async function(t){return fetch(t).then(t=>t.text())}(t);c.element.innerHTML=e}async function h(e){c.element&&(await u(`${i.resolve(t,"../pages")}/${e}`),await window.FundMyLaptop.$router.bindNavigo())}}).call(this,"/")},function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));class s{constructor(){this.events={}}subscribe(t,e){const n=this;return n.events.hasOwnProperty(t)||(n.events[t]=[]),n.events[t].push(e)}publish(t,e={}){return this.events.hasOwnProperty(t)?this.events[t].map(t=>t(e)):[]}}class a{constructor(t){const e=this;e.actions={},e.mutations={},e.state={},e.status="resting",e.events=new s,t.hasOwnProperty("actions")&&(e.actions=t.actions),t.hasOwnProperty("mutations")&&(e.mutations=t.mutations),e.state=new Proxy(t.state||{},{set:function(t,n,s){return t[n]=s,e.events.publish("stateChange",e.state),"mutation"!==e.status&&console.warn("You should use a mutation to set "+n),e.status="resting",!0}})}dispatch(t,e){return"function"!=typeof this.actions[t]?(console.error(`Action "${t} doesn't exist.`),!1):(console.groupCollapsed("ACTION: "+t),this.status="action",this.actions[t](this,e),console.groupEnd(),!0)}commit(t,e){if("function"!=typeof this.mutations[t])return console.log(`Mutation "${t}" doesn't exist`),!1;this.status="mutation";const n=this.mutations[t](this.state,e);return this.state=Object.assign(this.state,n),!0}}},function(t,e,n){"use strict";(function(t){var s=n(5),a=n.n(s),o=n(0);const i=n(3);e.a=class{constructor(e={}){this.routes=new a.a(window.location.host,!1),e.hasOwnProperty("routes")&&this.routes.on(e.routes),this.routes.notFound(async e=>{await Object(o.b)(i.resolve(t,"../../pages")+"/404.html")})}start(){return this.routes.resolve()}bindNavigo(){document.querySelectorAll("a").forEach(t=>{t.setAttribute("data-navigo","");const e=t.getAttribute("href");t.addEventListener("click",t=>{t.preventDefault(),this.routes.navigate(e,!0)})})}}}).call(this,"/")},,function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var s=n(1);class a{constructor(t={}){this.render=this.render||function(){},t.store,s.a,t.hasOwnProperty("element")&&(this.element=t.element)}}},,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);n(6),n(10);var s=n(0);var a={};var o={};var i={},r=new(n(1).a)({actions:a,mutations:o,state:i});var c={login:async()=>{await Object(s.c)("/login.html")},signup:async()=>{await Object(s.c)("/signup.html")},about:async()=>{await Object(s.c)("/about.html")},contact:async()=>{await Object(s.c)("/contact.html")},invest:async()=>{await Object(s.c)("/invest.html")},loan:async()=>{await Object(s.c)("/loan.html")},faq:async()=>{await Object(s.c)("/faq.html")},privacy:async()=>{await Object(s.c)("/privacy.html")},"":async()=>{await Object(s.c)("/home.html")}};var u=new(n(2).a)({routes:c});n(12),n(13);new s.a({ele:"fundmylaptopapp",store:r,router:u}).run()}],[[14,1,2]]]);
//# sourceMappingURL=main.1b9f7ce0.chunk.js.map