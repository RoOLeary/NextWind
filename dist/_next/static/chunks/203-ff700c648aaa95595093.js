(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[203],{676:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,{Z:function(){return n}})},4699:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(2961);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var u,s=e[Symbol.iterator]();!(n=(u=s.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(i){o=!0,a=i}finally{try{n||null==s.return||s.return()}finally{if(o)throw a}}return r}}(e,t)||(0,n.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},2961:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(676);function o(e,t){if(e){if("string"===typeof e)return(0,n.Z)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,n.Z)(e,t):void 0}}},8633:function(e,t,r){"use strict";var n=r(4155),o=r(2980),a=r(6063);t.kP=g;var u=o(r(224)),s=o(r(1396)),i=o(r(1481)),c=o(r(7516)),l=r(7294),f=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!==typeof e)return{default:e};var r=d(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var s=o?Object.getOwnPropertyDescriptor(e,u):null;s&&(s.get||s.set)?Object.defineProperty(n,u,s):n[u]=e[u]}n.default=e,r&&r.set(e,n);return n}(r(8016)),p=o(r(5831));function d(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(d=function(e){return e?r:t})(e)}function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){(0,s.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h={baseUrl:(0,p.default)(n.env.NEXTAUTH_URL||n.env.VERCEL_URL).baseUrl,basePath:(0,p.default)(n.env.NEXTAUTH_URL).basePath,baseUrlServer:(0,p.default)(n.env.NEXTAUTH_URL_INTERNAL||n.env.NEXTAUTH_URL||n.env.VERCEL_URL).baseUrl,basePathServer:(0,p.default)(n.env.NEXTAUTH_URL_INTERNAL||n.env.NEXTAUTH_URL).basePath,keepAlive:0,clientMaxAge:0,_clientLastSync:0,_clientSyncTimer:null,_eventListenersAdded:!1,_clientSession:void 0,_getSession:function(){}},y=(0,f.proxyLogger)(f.default,h.basePath),x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"nextauth.message";return{receive:function(t){"undefined"!==typeof window&&window.addEventListener("storage",function(){var r=(0,i.default)(u.default.mark((function r(n){var o;return u.default.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n.key===e){r.next=2;break}return r.abrupt("return");case 2:if("session"===(null===(o=JSON.parse(n.newValue))||void 0===o?void 0:o.event)&&null!==o&&void 0!==o&&o.data){r.next=5;break}return r.abrupt("return");case 5:t(o);case 6:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())},post:function(t){"undefined"!==typeof localStorage&&localStorage.setItem(e,JSON.stringify(b(b({},t),{},{timestamp:C()})))}}}();"undefined"===typeof window||h._eventListenersAdded||(h._eventListenersAdded=!0,x.receive((function(){return h._getSession({event:"storage"})})),document.addEventListener("visibilitychange",(function(){!document.hidden&&h._getSession({event:"visibilitychange"})}),!1));var w=(0,l.createContext)();function g(e){var t=(0,l.useContext)(w);return t||function(e){var t=(0,l.useState)(e),r=(0,c.default)(t,2),n=r[0],o=r[1],a=(0,l.useState)(!n),s=(0,c.default)(a,2),f=s[0],p=s[1];return(0,l.useEffect)((function(){h._getSession=(0,i.default)(u.default.mark((function e(){var t,r,n,a,s,i,c,l,f,d,v=arguments;return u.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=v.length>0&&void 0!==v[0]?v[0]:{},r=t.event,n=void 0===r?null:r,e.prev=1,a=null!==n,s="storage"===n,i=h.clientMaxAge,c=parseInt(h._clientLastSync),l=C(),f=h._clientSession,s||void 0===f){e.next=19;break}if(0!==i||!0===a){e.next=13;break}return e.abrupt("return");case 13:if(!(i>0&&null===f)){e.next=17;break}return e.abrupt("return");case 17:if(!(i>0&&l<c+i)){e.next=19;break}return e.abrupt("return");case 19:return void 0===f&&(h._clientSession=null),h._clientLastSync=C(),e.next=23,_({triggerEvent:!s});case 23:d=e.sent,h._clientSession=d,o(d),p(!1),e.next=33;break;case 29:e.prev=29,e.t0=e.catch(1),y.error("CLIENT_USE_SESSION_ERROR",e.t0),p(!1);case 33:case"end":return e.stop()}}),e,null,[[1,29]])}))),h._getSession()})),[n,f]}(e)}function _(e){return m.apply(this,arguments)}function m(){return(m=(0,i.default)(u.default.mark((function e(t){var r,n;return u.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R("session",t);case 2:return n=e.sent,(null===(r=null===t||void 0===t?void 0:t.triggerEvent)||void 0===r||r)&&x.post({event:"session",data:{trigger:"getSession"}}),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e){return k.apply(this,arguments)}function k(){return(k=(0,i.default)(u.default.mark((function e(t){var r;return u.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R("csrf",t);case 2:if(e.t1=r=e.sent,e.t0=null===e.t1,e.t0){e.next=6;break}e.t0=void 0===r;case 6:if(!e.t0){e.next=10;break}e.t2=void 0,e.next=11;break;case 10:e.t2=r.csrfToken;case 11:return e.abrupt("return",e.t2);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(){return O.apply(this,arguments)}function O(){return(O=(0,i.default)(u.default.mark((function e(){return u.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R("providers");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e){return L.apply(this,arguments)}function L(){return(L=(0,i.default)(u.default.mark((function e(t){var r,n,o,a,s,i,c,l,f,p,d,v,y,x,w,g,_,m,k=arguments;return u.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=k.length>1&&void 0!==k[1]?k[1]:{},n=k.length>2&&void 0!==k[2]?k[2]:{},o=r.callbackUrl,a=void 0===o?window.location.href:o,s=r.redirect,i=void 0===s||s,c=N(),e.next=6,U();case 6:if(l=e.sent){e.next=9;break}return e.abrupt("return",window.location.replace("".concat(c,"/error")));case 9:if(t in l){e.next=11;break}return e.abrupt("return",window.location.replace("".concat(c,"/signin?callbackUrl=").concat(encodeURIComponent(a))));case 11:return f="credentials"===l[t].type,p="email"===l[t].type,d=f||p,v=f?"".concat(c,"/callback/").concat(t):"".concat(c,"/signin/").concat(t),y="".concat(v,"?").concat(new URLSearchParams(n)),e.t0=fetch,e.t1=y,e.t2={"Content-Type":"application/x-www-form-urlencoded"},e.t3=URLSearchParams,e.t4=b,e.t5=b({},r),e.t6={},e.next=25,S();case 25:return e.t7=e.sent,e.t8=a,e.t9={csrfToken:e.t7,callbackUrl:e.t8,json:!0},e.t10=(0,e.t4)(e.t5,e.t6,e.t9),e.t11=new e.t3(e.t10),e.t12={method:"post",headers:e.t2,body:e.t11},e.next=33,(0,e.t0)(e.t1,e.t12);case 33:return x=e.sent,e.next=36,x.json();case 36:if(w=e.sent,!i&&d){e.next=42;break}return _=null!==(g=w.url)&&void 0!==g?g:a,window.location.replace(_),_.includes("#")&&window.location.reload(),e.abrupt("return");case 42:if(m=new URL(w.url).searchParams.get("error"),!x.ok){e.next=46;break}return e.next=46,h._getSession({event:"storage"});case 46:return e.abrupt("return",{error:m,status:x.status,ok:x.ok,url:m?null:w.url});case 47:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(){return E.apply(this,arguments)}function E(){return(E=(0,i.default)(u.default.mark((function e(){var t,r,n,o,a,s,i,c,l,f,p,d=arguments;return u.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=d.length>0&&void 0!==d[0]?d[0]:{},r=t.callbackUrl,n=void 0===r?window.location.href:r,o=t.redirect,a=void 0===o||o,s=N(),e.t0={"Content-Type":"application/x-www-form-urlencoded"},e.t1=URLSearchParams,e.next=7,S();case 7:return e.t2=e.sent,e.t3=n,e.t4={csrfToken:e.t2,callbackUrl:e.t3,json:!0},e.t5=new e.t1(e.t4),i={method:"post",headers:e.t0,body:e.t5},e.next=14,fetch("".concat(s,"/signout"),i);case 14:return c=e.sent,e.next=17,c.json();case 17:if(l=e.sent,x.post({event:"session",data:{trigger:"signout"}}),!a){e.next=24;break}return p=null!==(f=l.url)&&void 0!==f?f:n,window.location.replace(p),p.includes("#")&&window.location.reload(),e.abrupt("return");case 24:return e.next=26,h._getSession({event:"storage"});case 26:return e.abrupt("return",l);case 27:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.baseUrl,r=e.basePath,n=e.clientMaxAge,o=e.keepAlive;if(t&&(h.baseUrl=t),r&&(h.basePath=r),n&&(h.clientMaxAge=n),o){if(h.keepAlive=o,"undefined"===typeof window)return;null!==h._clientSyncTimer&&clearTimeout(h._clientSyncTimer),h._clientSyncTimer=setTimeout((0,i.default)(u.default.mark((function e(){return u.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h._clientSession){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,h._getSession({event:"timer"});case 4:case"end":return e.stop()}}),e)}))),1e3*o)}}function A(e){var t=e.children,r=e.session;return P(e.options),(0,l.createElement)(w.Provider,{value:g(r)},t)}function R(e){return M.apply(this,arguments)}function M(){return(M=(0,i.default)(u.default.mark((function e(t){var r,n,o,a,s,i,c,l,f=arguments;return u.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=f.length>1&&void 0!==f[1]?f[1]:{},n=r.ctx,o=r.req,a=void 0===o?null===n||void 0===n?void 0:n.req:o,e.prev=1,e.next=4,N();case 4:return s=e.sent,i=a?{headers:{cookie:a.headers.cookie}}:{},e.next=8,fetch("".concat(s,"/").concat(t),i);case 8:return c=e.sent,e.next=11,c.json();case 11:if(l=e.sent,c.ok){e.next=14;break}throw l;case 14:return e.abrupt("return",Object.keys(l).length>0?l:null);case 17:return e.prev=17,e.t0=e.catch(1),y.error("CLIENT_FETCH_ERROR",t,e.t0),e.abrupt("return",null);case 21:case"end":return e.stop()}}),e,null,[[1,17]])})))).apply(this,arguments)}function N(){return"undefined"===typeof window?(n.env.NEXTAUTH_URL||y.warn("NEXTAUTH_URL","NEXTAUTH_URL environment variable not set"),"".concat(h.baseUrlServer).concat(h.basePathServer)):h.basePath}function C(){return Math.floor(Date.now()/1e3)}},8016:function(e,t,r){"use strict";var n=r(4155);Object.defineProperty(t,"__esModule",{value:!0}),t.setLogger=function(e={}){e.error&&(o.error=e.error);e.warn&&(o.warn=e.warn);e.debug&&(o.debug=e.debug)},t.proxyLogger=function(e=o,t){try{if("undefined"===typeof window)return e;const r={};for(const n in e)r[n]=(e,...r)=>{o[n](e,...r);const a=`${t}/_log`,u=new URLSearchParams({level:n,code:e,message:JSON.stringify(r.map((e=>e instanceof Error?{name:e.name,message:e.message,stack:e.stack}:e)))});return navigator.sendBeacon?navigator.sendBeacon(a,u):fetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:u})};return r}catch(r){return o}},t.default=void 0;const o={error(e,...t){console.error(`[next-auth][error][${e.toLowerCase()}]`,`\nhttps://next-auth.js.org/errors#${e.toLowerCase()}`,...t)},warn(e,...t){console.warn(`[next-auth][warn][${e.toLowerCase()}]`,`\nhttps://next-auth.js.org/warnings#${e.toLowerCase()}`,...t)},debug(e,...t){var r,o;null!==(r=n)&&void 0!==n&&null!==(o=r.env)&&void 0!==o&&o._NEXTAUTH_DEBUG&&console.log(`[next-auth][debug][${e.toLowerCase()}]`,...t)}};var a=o;t.default=a},5831:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){const t="http://localhost:3000",r="/api/auth";e||(e=`${t}/api/auth`);const n=e.startsWith("http:")?"http":"https";e=e.replace(/^https?:\/\//,"").replace(/\/$/,"");const[o,...a]=e.split("/"),u=o?`${n}://${o}`:t,s=a.length>0?`/${a.join("/")}`:r;return{baseUrl:u,basePath:s}}},4790:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},6987:function(e){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},1481:function(e){function t(e,t,r,n,o,a,u){try{var s=e[a](u),i=s.value}catch(c){return void r(c)}s.done?t(i):Promise.resolve(i).then(n,o)}e.exports=function(e){return function(){var r=this,n=arguments;return new Promise((function(o,a){var u=e.apply(r,n);function s(e){t(u,o,a,s,i,"next",e)}function i(e){t(u,o,a,s,i,"throw",e)}s(void 0)}))}},e.exports.default=e.exports,e.exports.__esModule=!0},1396:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},2980:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.default=e.exports,e.exports.__esModule=!0},1129:function(e){e.exports=function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],u=!0,s=!1;try{for(r=r.call(e);!(u=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);u=!0);}catch(i){s=!0,o=i}finally{try{u||null==r.return||r.return()}finally{if(s)throw o}}return a}},e.exports.default=e.exports,e.exports.__esModule=!0},1370:function(e){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},7516:function(e,t,r){var n=r(6987),o=r(1129),a=r(4692),u=r(1370);e.exports=function(e,t){return n(e)||o(e,t)||a(e,t)||u()},e.exports.default=e.exports,e.exports.__esModule=!0},6063:function(e){function t(r){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?(e.exports=t=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=t=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),t(r)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},4692:function(e,t,r){var n=r(4790);e.exports=function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},224:function(e,t,r){e.exports=r(5666)}}]);