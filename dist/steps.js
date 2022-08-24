(()=>{"use strict";var n={43:n=>{n.exports=function(n){var o=[];return o.toString=function(){return this.map((function(o){var r="",t=void 0!==o[5];return o[4]&&(r+="@supports (".concat(o[4],") {")),o[2]&&(r+="@media ".concat(o[2]," {")),t&&(r+="@layer".concat(o[5].length>0?" ".concat(o[5]):""," {")),r+=n(o),t&&(r+="}"),o[2]&&(r+="}"),o[4]&&(r+="}"),r})).join("")},o.i=function(n,r,t,e,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var p=[].concat(n[l]);t&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),r&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=r):p[2]=r),e&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=e):p[4]="".concat(e)),o.push(p))}},o}},313:n=>{n.exports=function(n){return n[1]}},117:(n,o,r)=>{r.d(o,{Z:()=>l});var t=r(313),e=r.n(t),a=r(43),i=r.n(a),c=r(740),s=i()(e());s.i(c.Z),s.push([n.id,"/* Solid border */\nhr.solid {\n    border-top: 1px solid var(--color-wine-200);\n    margin-bottom: 3rem;\n    margin-top: 1px;\n}\n\n.title-step {\n    font-size: 2.2rem;\n    font-weight: 700;\n    color: var(--color-wine-400);\n    margin-bottom: 0;\n}\n\n.section-instructions {\n    border-radius: .25rem;\n    width: auto;\n    height: auto;\n}\n\n.img-step {\n    width: auto;\n    height: auto;\n    max-width: 100%;\n    max-height: 100%;\n    object-fit: cover;\n}",""]);const l=s},740:(n,o,r)=>{r.d(o,{Z:()=>c});var t=r(313),e=r.n(t),a=r(43),i=r.n(a)()(e());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Montserrat:wght@700&display=swap);"]),i.push([n.id,"* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    font-family: 'Inter', sans-serif;\n    font-size: 1rem;\n    line-height: 1.5;\n    color: var(--color-black);\n    background: var(--color-white);\n}\n\n:root {\n    --color-wine-800: #470D21;\n    --color-wine-400: #9a0c4a;\n    --color-wine-200: #AE3C6E;\n    --color-white: #F9F9F9;\n    --color-black: #1E1E1E;\n}\n\n/*Recipe appp*/\n.title {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 2rem;\n    font-weight: 700;\n    margin-bottom: 20px;\n    color: var(--color-white);\n}\n\n/* The best  */\n.subtitle {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 1.5rem;\n    font-weight: 400;\n    margin-bottom: 20px;\n    color: var(--color-white);\n}\n\n/* paragraf of Recipes */\n.text {\n    font-family: 'Inter', sans-serif;\n    font-size: 1.2rem;\n    font-weight: 400;\n    margin-bottom: 20px;\n    color: var(--color-black);\n}\n\n/* title of Recipes and text of boton random */\n.title-recipe {\n    font-family: 'Inter', sans-serif;\n    font-size: 1.3rem;\n    font-weight: 700;\n    margin-bottom: 20px;\n    color: var(--color-wine-800);\n}\n\n.searh-button {\n    font-family: 'Inter', sans-serif;\n    color: var(--color-white);\n    width: 65px;\n    height: 36px;\n    border-radius: 4px;\n    border: 1px solid var(--color-wine-400);\n    background: var(--color-wine-400);\n    cursor: pointer\n}\n\n.searh-button:hover {\n    background: var(--color-white);\n    color: var(--color-wine-400);\n    border: 1px solid var(--color-wine-400);\n}\n\n\n\n.box1 {\n    background: var(--color-wine-800);\n    color: var(--color-white);\n    padding: 20px;\n    margin-bottom: 20px;\n    width: 100px;\n    height: 100px;\n}\n\n.box2 {\n    background: var(--color-wine-400);\n    color: var(--color-white);\n    padding: 20px;\n    margin-bottom: 20px;\n    width: 100px;\n    height: 100px;\n}\n\n.box3 {\n    background: var(--color-wine-200);\n    color: var(--color-white);\n    padding: 20px;\n    margin-bottom: 20px;\n    width: 100px;\n    height: 100px;\n}\n\n.box4 {\n    background: var(--color-black);\n    padding: 20px;\n    margin-bottom: 20px;\n    width: auto;\n    height: auto;\n}\n\n.link-back{\n    color: var(--color-wine-400);\n    font-size: 1.2rem;\n}\n\n.link-back:hover{\n    color: var(--color-wine-400);\n}",""]);const c=i},379:n=>{var o=[];function r(n){for(var r=-1,t=0;t<o.length;t++)if(o[t].identifier===n){r=t;break}return r}function t(n,t){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],l=t.base?s[0]+t.base:s[0],p=a[l]||0,d="".concat(l," ").concat(p);a[l]=p+1;var u=r(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)o[u].references++,o[u].updater(f);else{var h=e(f,t);t.byIndex=c,o.splice(c,0,{identifier:d,updater:h,references:1})}i.push(d)}return i}function e(n,o){var r=o.domAPI(o);return r.update(n),function(o){if(o){if(o.css===n.css&&o.media===n.media&&o.sourceMap===n.sourceMap&&o.supports===n.supports&&o.layer===n.layer)return;r.update(n=o)}else r.remove()}}n.exports=function(n,e){var a=t(n=n||[],e=e||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=r(a[i]);o[c].references--}for(var s=t(n,e),l=0;l<a.length;l++){var p=r(a[l]);0===o[p].references&&(o[p].updater(),o.splice(p,1))}a=s}}},569:n=>{var o={};n.exports=function(n,r){var t=function(n){if(void 0===o[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}o[n]=r}return o[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var o=document.createElement("style");return n.setAttributes(o,n.attributes),n.insert(o,n.options),o}},565:(n,o,r)=>{n.exports=function(n){var o=r.nc;o&&n.setAttribute("nonce",o)}},795:n=>{n.exports=function(n){var o=n.insertStyleElement(n);return{update:function(r){!function(n,o,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var e=void 0!==r.layer;e&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,e&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),o.styleTagTransform(t,n,o.options)}(o,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(o)}}}},589:n=>{n.exports=function(n,o){if(o.styleSheet)o.styleSheet.cssText=n;else{for(;o.firstChild;)o.removeChild(o.firstChild);o.appendChild(document.createTextNode(n))}}}},o={};function r(t){var e=o[t];if(void 0!==e)return e.exports;var a=o[t]={id:t,exports:{}};return n[t](a,a.exports,r),a.exports}r.n=n=>{var o=n&&n.__esModule?()=>n.default:()=>n;return r.d(o,{a:o}),o},r.d=(n,o)=>{for(var t in o)r.o(o,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:o[t]})},r.o=(n,o)=>Object.prototype.hasOwnProperty.call(n,o),r.nc=void 0,(()=>{var n=r(379),o=r.n(n),t=r(795),e=r.n(t),a=r(569),i=r.n(a),c=r(565),s=r.n(c),l=r(216),p=r.n(l),d=r(589),u=r.n(d),f=r(740),h={};h.styleTagTransform=u(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=e(),h.insertStyleElement=p(),o()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;var m=r(117),v={};v.styleTagTransform=u(),v.setAttributes=s(),v.insert=i().bind(null,"head"),v.domAPI=e(),v.insertStyleElement=p(),o()(m.Z,v),m.Z&&m.Z.locals&&m.Z.locals})()})();