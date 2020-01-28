var __extends=this&&this.__extends||function(){var e=function(r,n){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var n in r)if(r.hasOwnProperty(n))e[n]=r[n]};return e(r,n)};return function(r,n){e(r,n);function t(){this.constructor=r}r.prototype=n===null?Object.create(n):(t.prototype=n.prototype,new t)}}();var __awaiter=this&&this.__awaiter||function(e,r,n,t){function a(e){return e instanceof n?e:new n((function(r){r(e)}))}return new(n||(n=Promise))((function(n,i){function s(e){try{l(t.next(e))}catch(r){i(r)}}function o(e){try{l(t["throw"](e))}catch(r){i(r)}}function l(e){e.done?n(e.value):a(e.value).then(s,o)}l((t=t.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},t,a,i,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(e){return function(r){return l([e,r])}}function l(s){if(t)throw new TypeError("Generator is already executing.");while(n)try{if(t=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:n.label++;return{value:s[1],done:false};case 5:n.label++;a=s[1];s=[0];continue;case 7:s=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){n.label=s[1];break}if(s[0]===6&&n.label<i[1]){n.label=i[1];i=s;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(s);break}if(i[2])n.ops.pop();n.trys.pop();continue}s=r.call(e,n)}catch(o){s=[6,o];a=0}finally{t=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,r=0,n=arguments.length;r<n;r++)e+=arguments[r].length;for(var t=Array(e),a=0,r=0;r<n;r++)for(var i=arguments[r],s=0,o=i.length;s<o;s++,a++)t[a]=i[s];return t};System.register([],(function(e,r){"use strict";return{execute:function(){var n=this;var t="cat-gif-stencil";var a=0;var i=false;var s;var o;var l=false;var u=typeof window!=="undefined"?window:{};var f=u.document||{head:{}};var c={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,r,n,t){return e.addEventListener(r,n,t)},rel:function(e,r,n,t){return e.removeEventListener(r,n,t)}};var $=function(){return!!f.head.attachShadow}();var v=function(){var e=false;try{f.addEventListener("e",null,Object.defineProperty({},"passive",{get:function(){e=true}}))}catch(r){}return e}();var h=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var d=new WeakMap;var m=function(e){return d.get(e)};var p=e("r",(function(e,r){return d.set(r.$lazyInstance$=e,r)}));var g=function(e){var r={$flags$:0,$hostElement$:e,$instanceValues$:new Map};{r.$onReadyPromise$=new Promise((function(e){return r.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}return d.set(e,r)};var y=function(e,r){return r in e};var w=function(e){return console.error(e)};var b=new Map;var S=function(e,n,t){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleIds$;var s=b.get(i);if(s){return s[a]}return r.import("./"+i+".entry.js"+"").then((function(e){{b.set(i,e)}return e[a]}),w)};var _=new Map;var R=[];var L=[];var E=[];var C=function(e,r){return function(n){e.push(n);if(!i){i=true;if(r&&c.$flags$&4){P(x)}else{c.raf(x)}}}};var j=function(e){for(var r=0;r<e.length;r++){try{e[r](performance.now())}catch(n){w(n)}}e.length=0};var N=function(e,r){var n=0;var t=0;while(n<e.length&&(t=performance.now())<r){try{e[n++](t)}catch(a){w(a)}}if(n===e.length){e.length=0}else if(n!==0){e.splice(0,n)}};var x=function(){a++;j(R);var e=(c.$flags$&6)===2?performance.now()+10*Math.ceil(a*(1/22)):Infinity;N(L,e);N(E,e);if(L.length>0){E.push.apply(E,L);L.length=0}if(i=R.length+L.length+E.length>0){c.raf(x)}else{a=0}};var P=function(e){return Promise.resolve().then(e)};var U=C(L,true);var A={};var k=function(e){return e!=null};var O=function(e){e=typeof e;return e==="object"||e==="function"};var M=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var I=e("a",(function(){if(!(u.CSS&&u.CSS.supports&&u.CSS.supports("color","var(--c)"))){return r.import("./p-447ccb56.system.js").then((function(){c.$cssShim$=u.__stencil_cssshim;if(c.$cssShim$){return c.$cssShim$.initShim()}}))}return Promise.resolve()}));var q=e("p",(function(){{c.$cssShim$=u.__stencil_cssshim}var e=Array.from(f.querySelectorAll("script")).find((function(e){return new RegExp("/"+t+"(\\.esm)?\\.js($|\\?|#)").test(e.src)||e.getAttribute("data-stencil-namespace")===t}));var n=e["data-opts"]||{};var a=r.meta.url;if("onbeforeload"in e&&!history.scrollRestoration&&false){return{then:function(){}}}if(a!==""){n.resourcesUrl=new URL(".",a).href}else{n.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,u.location.href)).href;B(n.resourcesUrl,e);if(!window.customElements){return r.import("./p-7f10eb01.system.js").then((function(){return n}))}}return Promise.resolve(n)}));var B=function(e,r){var n=M(t);try{u[n]=new Function("w","return import(w);//"+Math.random())}catch(i){var a=new Map;u[n]=function(t){var i=new URL(t,e).href;var s=a.get(i);if(!s){var o=f.createElement("script");o.type="module";o.crossOrigin=r.crossOrigin;o.src=URL.createObjectURL(new Blob(["import * as m from '"+i+"'; window."+n+".m = m;"],{type:"application/javascript"}));s=new Promise((function(e){o.onload=function(){e(u[n].m);o.remove()}}));a.set(i,s);f.head.appendChild(o)}return s}}};var z=function(e,r){if(e!=null&&!O(e)){if(r&1){return String(e)}return e}return e};var T="hydrated";var H=function(e,r){if(r===void 0){r=""}{return function(){return}}};var V=function(e,r){{return function(){return}}};var F=new WeakMap;var W=function(e,r,n){var t=_.get(e);if(h&&n){t=t||new CSSStyleSheet;t.replace(r)}else{t=r}_.set(e,t)};var G=function(e,r,n,t){var a=D(r.$tagName$);var i=_.get(a);e=e.nodeType===11?e:f;if(i){if(typeof i==="string"){e=e.head||e;var s=F.get(e);var o=void 0;if(!s){F.set(e,s=new Set)}if(!s.has(a)){{if(c.$cssShim$){o=c.$cssShim$.createHostStyle(t,a,i,!!(r.$flags$&10));var l=o["s-sc"];if(l){a=l;s=null}}else{o=f.createElement("style");o.innerHTML=i}e.insertBefore(o,e.querySelector("link"))}if(s){s.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[i])}}return a};var Q=function(e,r,n){var t=H("attachStyles",r.$tagName$);var a=G($&&e.shadowRoot?e.shadowRoot:e.getRootNode(),r,n,e);if(r.$flags$&10){e["s-sc"]=a;e.classList.add(a+"-h")}t()};var D=function(e,r){return"sc-"+e};var J=e("h",(function(e,r){var n=[];for(var t=2;t<arguments.length;t++){n[t-2]=arguments[t]}var a=null;var i=false;var s=false;var o=[];var l=function(r){for(var n=0;n<r.length;n++){a=r[n];if(Array.isArray(a)){l(a)}else if(a!=null&&typeof a!=="boolean"){if(i=typeof e!=="function"&&!O(a)){a=String(a)}if(i&&s){o[o.length-1].$text$+=a}else{o.push(i?K(null,a):a)}s=i}}};l(n);var u=K(e,null);u.$attrs$=r;if(o.length>0){u.$children$=o}return u}));var K=function(e,r){var n={$flags$:0,$tag$:e,$text$:r,$elm$:null,$children$:null};{n.$attrs$=null}return n};var X={};var Y=function(e){return e&&e.$tag$===X};var Z=function(e,r,n,t,a,i){if(n===t){return}var s=y(e,r);var o=r.toLowerCase();{var l=O(t);if((s||l&&t!==null)&&!a){try{if(!e.tagName.includes("-")){var u=t==null?"":t;if(r==="list"){s=false}else if(n==null||e[r]!=u){e[r]=u}}else{e[r]=t}}catch(f){}}if(t==null||t===false){{e.removeAttribute(r)}}else if((!s||i&4||a)&&!l){t=t===true?"":t;{e.setAttribute(r,t)}}}};var ee=function(e,r,n,t){var a=r.$elm$.nodeType===11&&r.$elm$.host?r.$elm$.host:r.$elm$;var i=e&&e.$attrs$||A;var s=r.$attrs$||A;{for(t in i){if(!(t in s)){Z(a,t,i[t],undefined,n,r.$flags$)}}}for(t in s){Z(a,t,i[t],s[t],n,r.$flags$)}};var re=function(e,r,n,t){var a=r.$children$[n];var i=0;var o;var u;{o=a.$elm$=f.createElement(a.$tag$);{ee(null,a,l)}if(k(s)&&o["s-si"]!==s){o.classList.add(o["s-si"]=s)}if(a.$children$){for(i=0;i<a.$children$.length;++i){u=re(e,a,i);if(u){o.appendChild(u)}}}}return o};var ne=function(e,r,n,t,a,i){var s=e;var l;if(s.shadowRoot&&s.tagName===o){s=s.shadowRoot}for(;a<=i;++a){if(t[a]){l=re(null,n,a);if(l){t[a].$elm$=l;s.insertBefore(l,r)}}}};var te=function(e,r,n,t,a){for(;r<=n;++r){if(t=e[r]){a=t.$elm$;a.remove()}}};var ae=function(e,r,n,t){var a=0;var i=0;var s=r.length-1;var o=r[0];var l=r[s];var u=t.length-1;var f=t[0];var c=t[u];var $;while(a<=s&&i<=u){if(o==null){o=r[++a]}else if(l==null){l=r[--s]}else if(f==null){f=t[++i]}else if(c==null){c=t[--u]}else if(ie(o,f)){se(o,f);o=r[++a];f=t[++i]}else if(ie(l,c)){se(l,c);l=r[--s];c=t[--u]}else if(ie(o,c)){se(o,c);e.insertBefore(o.$elm$,l.$elm$.nextSibling);o=r[++a];c=t[--u]}else if(ie(l,f)){se(l,f);e.insertBefore(l.$elm$,o.$elm$);l=r[--s];f=t[++i]}else{{$=re(r&&r[i],n,i);f=t[++i]}if($){{o.$elm$.parentNode.insertBefore($,o.$elm$)}}}}if(a>s){ne(e,t[u+1]==null?null:t[u+1].$elm$,n,t,i,u)}else if(i>u){te(r,a,s)}};var ie=function(e,r){if(e.$tag$===r.$tag$){return true}return false};var se=function(e,r){var n=r.$elm$=e.$elm$;var t=e.$children$;var a=r.$children$;{{{ee(e,r,l)}}if(t!==null&&a!==null){ae(n,t,r,a)}else if(a!==null){ne(n,null,r,a,0,a.length-1)}else if(t!==null){te(t,0,t.length-1)}}};var oe=function(e,r,n,t){o=e.tagName;var a=r.$vnode$||K(null,null);var i=Y(t)?t:J(null,null,t);i.$tag$=null;i.$flags$|=4;r.$vnode$=i;i.$elm$=a.$elm$=e.shadowRoot||e;{s=e["s-sc"]}se(a,i)};var le=function(e,r){if(r&&!e.$onRenderResolve$){r["s-p"].push(new Promise((function(r){return e.$onRenderResolve$=r})))}};var ue=function(e,r,n,t){{r.$flags$|=16}if(r.$flags$&4){r.$flags$|=512;return}var a=H("scheduleUpdate",n.$tagName$);var i=r.$ancestorComponent$;var s=r.$lazyInstance$;var o=function(){return fe(e,r,n,s,t)};le(r,i);var l;if(t){{r.$flags$|=256;if(r.$queuedListeners$){r.$queuedListeners$.forEach((function(e){var r=e[0],n=e[1];return de(s,r,n)}));r.$queuedListeners$=null}}}a();return me(l,(function(){return U(o)}))};var fe=function(e,r,n,t,a){var i=H("update",n.$tagName$);var s=e["s-rc"];if(a){Q(e,n,r.$modeName$)}var o=H("render",n.$tagName$);{{oe(e,r,n,ce(t))}}if(c.$cssShim$){c.$cssShim$.updateHost(e)}{r.$flags$&=~16}{r.$flags$|=2}if(s){s.forEach((function(e){return e()}));e["s-rc"]=undefined}o();i();{var l=e["s-p"];var u=function(){return $e(e,r,n)};if(l.length===0){u()}else{Promise.all(l).then(u);r.$flags$|=4;l.length=0}}};var ce=function(e,r){try{e=e.render()}catch(n){w(n)}return e};var $e=function(e,r,n){var t=H("postUpdate",n.$tagName$);var a=r.$ancestorComponent$;if(!(r.$flags$&64)){r.$flags$|=64;{e.classList.add(T)}t();{r.$onReadyResolve$(e);if(!a){he()}}}else{t()}{if(r.$onRenderResolve$){r.$onRenderResolve$();r.$onRenderResolve$=undefined}if(r.$flags$&512){P((function(){return ue(e,r,n,false)}))}r.$flags$&=~(4|512)}};var ve=function(e,r){{var n=m(e);var t=n.$hostElement$.isConnected;if(t&&(n.$flags$&(2|16))===2){ue(e,n,r,false)}return t}};var he=function(e){{f.documentElement.classList.add(T)}{c.$flags$|=2}};var de=function(e,r,n){if(e&&e[r]){try{return e[r](n)}catch(t){w(t)}}return undefined};var me=function(e,r){return e&&e.then?e.then(r):r()};var pe=function(e,r){return m(e).$instanceValues$.get(r)};var ge=function(e,r,n,t){var a=m(e);var i=a.$hostElement$;var s=a.$instanceValues$.get(r);var o=a.$flags$;var l=a.$lazyInstance$;n=z(n,t.$members$[r][0]);if(n!==s&&(!(o&8)||s===undefined)){a.$instanceValues$.set(r,n);if(l){if(t.$watchers$&&o&128){var u=t.$watchers$[r];if(u){u.forEach((function(e){try{l[e](n,s,r)}catch(t){w(t)}}))}}if((o&(2|16))===2){ue(i,a,t,false)}}}};var ye=function(e,r,n){if(r.$members$){if(e.watchers){r.$watchers$=e.watchers}var t=Object.entries(r.$members$);var a=e.prototype;t.forEach((function(e){var t=e[0],i=e[1][0];if(i&31||n&2&&i&32){Object.defineProperty(a,t,{get:function(){return pe(this,t)},set:function(e){ge(this,t,e,r)},configurable:true,enumerable:true})}}));if(n&1){var i=new Map;a.attributeChangedCallback=function(e,r,n){var t=this;c.jmp((function(){var r=i.get(e);t[r]=n===null&&typeof t[r]==="boolean"?false:n}))};e.observedAttributes=t.filter((function(e){var r=e[0],n=e[1];return n[0]&15})).map((function(e){var r=e[0],n=e[1];var t=n[1]||r;i.set(t,r);return t}))}}return e};var we=function(e,r,n){r.$queuedListeners$=r.$queuedListeners$||[];var t=n.map((function(n){var t=n[0],a=n[1],i=n[2];var s=e;var o=be(r,i);var l=Se(t);c.ael(s,a,o,l);return function(){return c.rel(s,a,o,l)}}));return function(){return t.forEach((function(e){return e()}))}};var be=function(e,r){return function(n){{if(e.$flags$&256){e.$lazyInstance$[r](n)}else{e.$queuedListeners$.push([r,n])}}}};var Se=function(e){return v?{passive:(e&1)!==0,capture:(e&2)!==0}:(e&2)!==0};var _e=function(e,t,a,i,s){return __awaiter(n,void 0,void 0,(function(){var n,i,o,l,u,f,c;return __generator(this,(function($){switch($.label){case 0:if(!((t.$flags$&32)===0))return[3,5];t.$flags$|=32;s=S(a);if(!s.then)return[3,2];n=V();return[4,s];case 1:s=$.sent();n();$.label=2;case 2:if(!s.isProxied){{a.$watchers$=s.watchers}ye(s,a,2);s.isProxied=true}i=H("createInstance",a.$tagName$);{t.$flags$|=8}try{new s(t)}catch(v){w(v)}{t.$flags$&=~8}{t.$flags$|=128}i();Re(t.$lazyInstance$);o=D(a.$tagName$);if(!(!_.has(o)&&s.style))return[3,5];l=H("registerStyles",a.$tagName$);u=s.style;if(!(a.$flags$&8))return[3,4];return[4,r.import("./p-ed968002.system.js").then((function(e){return e.scopeCss(u,o,false)}))];case 3:u=$.sent();$.label=4;case 4:W(o,u,!!(a.$flags$&1));l();$.label=5;case 5:f=t.$ancestorComponent$;c=function(){return ue(e,t,a,true)};if(f&&f["s-rc"]){f["s-rc"].push(c)}else{c()}return[2]}}))}))};var Re=function(e){{de(e,"connectedCallback")}};var Le=function(e,r){if((c.$flags$&1)===0){var n=H("connectedCallback",r.$tagName$);var t=m(e);if(r.$listeners$){t.$rmListeners$=we(e,t,r.$listeners$)}if(!(t.$flags$&1)){t.$flags$|=1;{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){le(t,t.$ancestorComponent$=a);break}}}if(r.$members$){Object.entries(r.$members$).forEach((function(r){var n=r[0],t=r[1][0];if(t&31&&e.hasOwnProperty(n)){var a=e[n];delete e[n];e[n]=a}}))}{P((function(){return _e(e,t,r)}))}}Re(t.$lazyInstance$);n()}};var Ee=function(e){if((c.$flags$&1)===0){var r=m(e);{if(r.$rmListeners$){r.$rmListeners$();r.$rmListeners$=undefined}}if(c.$cssShim$){c.$cssShim$.removeHost(e)}}};var Ce=e("b",(function(e,r){if(r===void 0){r={}}var n=H();var t=[];var a=r.exclude||[];var i=f.head;var s=u.customElements;var o=i.querySelector("meta[charset]");var l=f.createElement("style");var v=[];var h;var d=true;Object.assign(c,r);c.$resourcesUrl$=new URL(r.resourcesUrl||"./",f.baseURI).href;if(r.syncQueue){c.$flags$|=4}e.forEach((function(e){return e[1].forEach((function(r){var n={$flags$:r[0],$tagName$:r[1],$members$:r[2],$listeners$:r[3]};{n.$members$=r[2]}{n.$listeners$=r[3]}{n.$watchers$={}}if(!$&&n.$flags$&1){n.$flags$|=8}var i=n.$tagName$;var o=function(e){__extends(r,e);function r(r){var t=e.call(this,r)||this;r=t;g(r);if(n.$flags$&1){if($){{r.attachShadow({mode:"open"})}}else if(!("shadowRoot"in r)){r.shadowRoot=r}}return t}r.prototype.connectedCallback=function(){var e=this;if(h){clearTimeout(h);h=null}if(d){v.push(this)}else{c.jmp((function(){return Le(e,n)}))}};r.prototype.disconnectedCallback=function(){var e=this;c.jmp((function(){return Ee(e)}))};r.prototype.forceUpdate=function(){ve(this,n)};r.prototype.componentOnReady=function(){return m(this).$onReadyPromise$};return r}(HTMLElement);n.$lazyBundleIds$=e[0];if(!a.includes(i)&&!s.get(i)){t.push(i);s.define(i,ye(o,n,1))}}))}));l.innerHTML=t+"{visibility:hidden}.hydrated{visibility:inherit}";l.setAttribute("data-styles","");i.insertBefore(l,o?o.nextSibling:i.firstChild);d=false;if(v.length>0){v.forEach((function(e){return e.connectedCallback()}))}else{c.jmp((function(){return h=setTimeout(he,30,"timeout")}))}n()}))}}}));