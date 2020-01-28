var __awaiter=this&&this.__awaiter||function(t,e,r,n){function i(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,a){function o(t){try{c(n.next(t))}catch(e){a(e)}}function u(t){try{c(n["throw"](t))}catch(e){a(e)}}function c(t){t.done?r(t.value):i(t.value).then(o,u)}c((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var r={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,i,a,o;return o={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function u(t){return function(e){return c([t,e])}}function c(o){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,i&&(a=o[0]&2?i["return"]:o[0]?i["throw"]||((a=i["return"])&&a.call(i),0):i.next)&&!(a=a.call(i,o[1])).done)return a;if(i=0,a)o=[o[0]&2,a.value];switch(o[0]){case 0:case 1:a=o;break;case 4:r.label++;return{value:o[1],done:false};case 5:r.label++;i=o[1];o=[0];continue;case 7:o=r.ops.pop();r.trys.pop();continue;default:if(!(a=r.trys,a=a.length>0&&a[a.length-1])&&(o[0]===6||o[0]===2)){r=0;continue}if(o[0]===3&&(!a||o[1]>a[0]&&o[1]<a[3])){r.label=o[1];break}if(o[0]===6&&r.label<a[1]){r.label=a[1];a=o;break}if(a&&r.label<a[2]){r.label=a[2];r.ops.push(o);break}if(a[2])r.ops.pop();r.trys.pop();continue}o=e.call(t,r)}catch(u){o=[6,u];i=0}finally{n=a=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-f83d703e.system.js"],(function(t){"use strict";var e,r;return{setters:[function(t){e=t.r;r=t.h}],execute:function(){var n=t("cat_gif",function(){function t(t){e(this,t);this.images=[];this.imageUrl=""}t.prototype.watchHandler=function(t,e){if(e===t){return}this.images=[];this.updateImage()};t.prototype.connectedCallback=function(){this.updateImage()};t.prototype.handleClick=function(){this.updateImage()};t.prototype.fetchGifs=function(){return __awaiter(this,void 0,void 0,(function(){var t,e,r,n,i;return __generator(this,(function(a){switch(a.label){case 0:t="gwWthNT5DFpvrh04kt4PYiakYO12aM3B";e="cat";if(this.keyword){e+=" "+this.keyword}r=window.location.protocol+"//api.giphy.com/v1/gifs/search?api_key="+t+"&q="+encodeURI(e);return[4,fetch(r)];case 1:n=a.sent();return[4,n.json()];case 2:i=a.sent();this.images=i.data.map((function(t){return t.images.original.url}));return[2]}}))}))};t.prototype.getRandomImageUrl=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:if(!!this.images.length)return[3,2];return[4,this.fetchGifs()];case 1:t.sent();t.label=2;case 2:return[2,this.images[Math.floor(Math.random()*this.images.length)]]}}))}))};t.prototype.updateImage=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(e){switch(e.label){case 0:t=this;return[4,this.getRandomImageUrl()];case 1:t.imageUrl=e.sent();return[2]}}))}))};t.prototype.render=function(){return r("img",{src:this.imageUrl,alt:"Cat"+(this.keyword?" "+this.keyword:"")+" gif"})};Object.defineProperty(t,"watchers",{get:function(){return{keyword:["watchHandler"]}},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return"img{border:10px solid purple}"},enumerable:true,configurable:true});return t}())}}}));