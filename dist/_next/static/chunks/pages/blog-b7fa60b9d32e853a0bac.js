_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"/yi9":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return ge}));var r=n("a3WO");var u=n("BsWD");function a(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(u.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=n("q1tI"),o=n.n(i),c=Object.prototype.hasOwnProperty;function l(e,t,n,r){return new(n||(n=Promise))((function(u,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function o(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?u(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,o)}c((r=r.apply(e,t||[])).next())}))}function f(e,t){var n,r,u,a,i={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return a={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function o(a){return function(o){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(u=2&a[0]?r.return:a[0]?r.throw||((u=r.return)&&u.call(r),0):r.next)&&!(u=u.call(r,a[1])).done)return u;switch(r=0,u&&(a=[2&a[0],u.value]),a[0]){case 0:case 1:u=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!((u=(u=i.trys).length>0&&u[u.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!u||a[1]>u[0]&&a[1]<u[3])){i.label=a[1];break}if(6===a[0]&&i.label<u[1]){i.label=u[1],u=a;break}if(u&&i.label<u[2]){i.label=u[2],i.ops.push(a);break}u[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=u=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,o])}}}var s={}[0],d=function(e){return e===s},v=function(e){return"function"==typeof e},b=function(){},p=function(e,t){return Object.assign({},e,t)},h=!0,g="undefined"!=typeof window,y="undefined"!=typeof document,w=g&&window.addEventListener||b,m=y&&document.addEventListener||b,O={isOnline:function(){return h},isVisible:function(){var e=y&&document.visibilityState;return!!d(e)||"hidden"!==e}},j={initFocus:function(e){m("visibilitychange",e),w("focus",e)},initReconnect:function(e){w("online",(function(){h=!0,e()})),w("offline",(function(){h=!1}))}},k="undefined"==typeof window||"Deno"in window,x=k?null:window.requestAnimationFrame,S=x?function(e){return x(e)}:function(e){return setTimeout(e,1)},E=k?i.useEffect:i.useLayoutEffect,R="undefined"!=typeof navigator&&navigator.connection,T=!k&&R&&(["slow-2g","2g"].includes(R.effectiveType)||R.saveData),C=new WeakMap,V=0;function $(e){if(v(e))try{e=e()}catch(t){e=""}var t;return Array.isArray(e)?(t=e,e=function(e){if(!e.length)return"";for(var t="arg",n=0;n<e.length;++n){var r=e[n],u=s;null===r||"object"!=typeof r&&!v(r)?u=JSON.stringify(r):C.has(r)?u=C.get(r):(u=V,C.set(r,V++)),t+="$"+u}return t}(e)):t=[e=String(e||"")],[e,t,e?"$err$"+e:"",e?"$req$"+e:""]}var N=new WeakMap,A=function(e,t,n,r,u,a){void 0===a&&(a=!1);var i=N.get(e),o=i[0],c=i[1],l=o[t],f=c[t];if(f)for(var s=0;s<f.length;++s)f[s](n,r,u);return a&&l&&l[0]?l[0](2).then((function(){return e.get(t)})):e.get(t)},I=0,_=function(){return++I},W=function(e,t,n,r){return void 0===r&&(r=!0),l(void 0,void 0,void 0,(function(){var u,a,i,o,c,l,b,p,h,g,y;return f(this,(function(f){switch(f.label){case 0:if(u=$(t),a=u[0],i=u[2],!a)return[2];if(o=N.get(e),c=o[2],l=o[3],d(n))return[2,A(e,a,e.get(a),e.get(i),s,r)];if(h=c[a]=_(),l[a]=0,v(n))try{n=n(e.get(a))}catch(e){n=s,p=e}if(!n||!v(n.then))return[3,5];f.label=1;case 1:return f.trys.push([1,3,,4]),[4,n];case 2:return b=f.sent(),[3,4];case 3:return g=f.sent(),p=g,[3,4];case 4:if(h!==c[a]){if(p)throw p;return[2,b]}return[3,6];case 5:b=n,f.label=6;case 6:return d(b)||e.set(a,b),e.set(i,p),l[a]=_(),[4,A(e,a,b,p,s,r)];case 7:if(y=f.sent(),p)throw p;return[2,y]}}))}))};function D(e,t){for(var n in e)e[n][0]&&e[n][0](t)}function L(e,t){if(!N.has(e)){var n=p(j,t),r={},u=W.bind(s,e);return N.set(e,[r,{},{},{},{},{},u]),k||(n.initFocus(D.bind(s,r,0)),n.initReconnect(D.bind(s,r,1))),[e,u]}}var P=L(new Map),M=P[0],z=P[1],q=p({onLoadingSlow:b,onSuccess:b,onError:b,onErrorRetry:function(e,t,n,r,u){if(O.isVisible()){var a=n.errorRetryCount,i=u.retryCount,o=~~((Math.random()+.5)*(1<<(i<8?i:8)))*n.errorRetryInterval;!d(a)&&i>a||setTimeout(r,o,u)}},revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:T?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:T?5e3:3e3,compare:function e(t,n){var r,u;if(t===n)return!0;if(t&&n&&(r=t.constructor)===n.constructor){if(r===Date)return t.getTime()===n.getTime();if(r===RegExp)return t.toString()===n.toString();if(r===Array){if((u=t.length)===n.length)for(;u--&&e(t[u],n[u]););return-1===u}if(!r||"object"===typeof t){for(r in u=0,t){if(c.call(t,r)&&++u&&!c.call(n,r))return!1;if(!(r in n)||!e(t[r],n[r]))return!1}return Object.keys(n).length===u}}return t!==t&&n!==n},isPaused:function(){return!1},cache:M,mutate:z,fallback:{}},O);function F(e,t){var n=p(e,t);if(!t)return n;var r=e.use,u=e.fallback,a=t.use,i=t.fallback;return r&&a&&(n.use=r.concat(a)),u&&i&&(n.fallback=p(u,i)),n}var J=Object(i.createContext)({});function B(e){return v(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}]}var G,U=function(e,t,n){var r=t[e]||(t[e]=[]);return r.push(n),function(){var e=r.indexOf(n);e>=0&&(r[e]=r[r.length-1],r.pop())}},H={dedupe:!0},X=(Object.defineProperty((function(e){var t=e.children,n=e.value,r=F(Object(i.useContext)(J),n),u=n&&n.provider,a=Object(i.useState)((function(){return u?L(u(r.cache||M),n):s}))[0];return a&&(r.cache=a[0],r.mutate=a[1]),Object(i.createElement)(J.Provider,{value:r},t)}),"default",{value:q}),G=function(e,t,n){var r=n.cache,u=n.compare,a=n.fallbackData,o=n.suspense,c=n.revalidateOnMount,v=n.refreshInterval,b=n.refreshWhenHidden,h=n.refreshWhenOffline,g=N.get(r),y=g[0],w=g[1],m=g[2],O=g[3],j=g[4],x=g[5],R=$(e),T=R[0],C=R[1],V=R[2],I=R[3],D=Object(i.useRef)(!1),L=Object(i.useRef)(!1),P=Object(i.useRef)(T),M=Object(i.useRef)(n),z=function(){return M.current},q=r.get(T),F=d(a)?n.fallback[T]:a,J=d(q)?F:q,B=r.get(V);if(o&&(!T||!t))throw new Error("useSWR requires either key or fetcher with suspense mode");var G=function(){return d(c)?o?!D.current&&!d(J):d(J)||n.revalidateIfStale:c},X=!(!T||!t)&&(!!r.get(I)||!D.current&&G()),Y=function(e,t){var n=Object(i.useState)({})[1],r=Object(i.useRef)(e),u=Object(i.useRef)({data:!1,error:!1,isValidating:!1}),a=Object(i.useCallback)((function(e){var a=!1,i=r.current;for(var o in e){var c=o;i[c]!==e[c]&&(i[c]=e[c],u.current[c]&&(a=!0))}a&&!t.current&&n({})}),[]);return E((function(){r.current=e})),[r,u.current,a]}({data:J,error:B,isValidating:X},L),K=Y[0],Q=Y[1],Z=Y[2],ee=Object(i.useCallback)((function(e){return l(void 0,void 0,void 0,(function(){var a,i,o,c,l,v,b,p,h;return f(this,(function(f){switch(f.label){case 0:if(!T||!t||L.current||z().isPaused())return[2,!1];o=!0,c=e||{},l=!d(j[T])&&c.dedupe,v=function(){return!L.current&&T===P.current&&D.current},b=function(){delete j[T],delete x[T]},f.label=1;case 1:return f.trys.push([1,6,,7]),r.set(I,!0),Z({isValidating:!0}),l||A(r,T,K.current.data,K.current.error,!0),l?(i=x[T],[4,j[T]]):[3,3];case 2:return a=f.sent(),[3,5];case 3:return n.loadingTimeout&&!r.get(T)&&setTimeout((function(){o&&v()&&z().onLoadingSlow(T,n)}),n.loadingTimeout),x[T]=i=_(),[4,j[T]=t.apply(t,C)];case 4:a=f.sent(),setTimeout((function(){x[T]===i&&b()}),n.dedupingInterval),v()&&z().onSuccess(a,T,n),f.label=5;case 5:return x[T]!==i?[2,!1]:(r.set(V,s),r.set(I,!1),p={isValidating:!1},!d(m[T])&&(i<=m[T]||i<=O[T]||0===O[T])?(Z(p),[2,!1]):(d(K.current.error)||(p.error=s),u(K.current.data,a)||(p.data=a),u(r.get(T),a)||r.set(T,a),Z(p),l||A(r,T,a,p.error,!1),[3,7]));case 6:return h=f.sent(),b(),r.set(I,!1),z().isPaused()?(Z({isValidating:!1}),[2,!1]):(r.set(V,h),K.current.error!==h&&(Z({isValidating:!1,error:h}),l||A(r,T,s,h,!1)),v()&&(z().onError(h,T,n),n.shouldRetryOnError&&z().onErrorRetry(h,T,n,ee,{retryCount:(c.retryCount||0)+1,dedupe:!0})),[3,7]);case 7:return o=!1,[2,!0]}}))}))}),[T]),te=Object(i.useCallback)((function(e,t){return W(r,P.current,e,t)}),[]);if(E((function(){M.current=n})),E((function(){if(T){var e=D.current,t=ee.bind(s,H),n=function(){return z().isVisible()&&z().isOnline()},r=0,a=U(T,w,(function(e,t,n){Z(p({error:t,isValidating:n},u(e,K.current.data)?null:{data:e}))})),i=U(T,y,(function(e){if(0===e){var u=Date.now();z().revalidateOnFocus&&u>r&&n()&&(r=u+z().focusThrottleInterval,t())}else if(1===e)z().revalidateOnReconnect&&n()&&t();else if(2===e)return ee()}));return L.current=!1,P.current=T,e&&Z({data:J,error:B,isValidating:X}),G()&&(d(J)||k?t():S(t)),D.current=!0,function(){L.current=!0,a(),i()}}}),[T,ee]),E((function(){var e;function t(){v&&-1!==e&&(e=setTimeout(n,v))}function n(){K.current.error||!b&&!z().isVisible()||!h&&!z().isOnline()?t():ee(H).then((function(){return t()}))}return t(),function(){e&&(clearTimeout(e),e=-1)}}),[v,b,h,ee]),Object(i.useDebugValue)(J),o&&d(J))throw d(B)?ee(H):B;return{mutate:te,get data(){return Q.data=!0,J},get error(){return Q.error=!0,B},get isValidating(){return Q.isValidating=!0,X}}},function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=B(e),r=n[0],u=n[1],a=n[2],o=p(q,Object(i.useContext)(J)),c=F(o,a),l=G,f=c.use;if(f)for(var s=f.length;s-- >0;)l=f[s](l);return l(r,u||c.fetcher,c)});var Y="undefined"==typeof window||"Deno"in window,K=Y?i.useEffect:i.useLayoutEffect,Q="undefined"!=typeof navigator&&navigator.connection;!Y&&Q&&(["slow-2g","2g"].includes(Q.effectiveType)||Q.saveData);var Z={}[0],ee=function(e){return e===Z},te=function(e){return"function"==typeof e},ne=new WeakMap,re=0;function ue(e){if(te(e))try{e=e()}catch(t){e=""}var t;return Array.isArray(e)?(t=e,e=function(e){if(!e.length)return"";for(var t="arg",n=0;n<e.length;++n){var r=e[n],u=Z;null===r||"object"!=typeof r&&!te(r)?u=JSON.stringify(r):ne.has(r)?u=ne.get(r):(u=re,ne.set(r,re++)),t+="$"+u}return t}(e)):t=[e=String(e||"")],[e,t,e?"$err$"+e:"",e?"$req$"+e:""]}function ae(e){return te(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}]}var ie,oe,ce=function(e){return ue(e?e(0,null):null)[0]},le=(ie=X,oe=function(e){return function(t,n,r){var u=r.cache,a=r.initialSize,o=void 0===a?1:a,c=r.revalidateAll,l=void 0!==c&&c,f=r.persistSize,s=void 0!==f&&f,d=null;try{d=ce(t)}catch(e){}var v=Object(i.useState)({})[1],b=null;d&&(b="$ctx$"+d);var p=null;d&&(p="$len$"+d);var h=Object(i.useRef)(!1),g=Object(i.useCallback)((function(){var e=u.get(p);return ee(e)?o:e}),[p,o]),y=Object(i.useRef)(g());K((function(){h.current?d&&u.set(p,s?y.current:o):h.current=!0}),[d]);var w=Object(i.useRef)(),m=e(d?"$inf$"+d:null,(function(){return function(e,t,n,r){return new(n||(n=Promise))((function(u,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function o(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?u(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,o)}c((r=r.apply(e,t||[])).next())}))}(void 0,void 0,void 0,(function(){var e,a,i,o,c,f,s,d,v,p,h,y;return function(e,t){var n,r,u,a,i={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return a={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function o(a){return function(o){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(u=2&a[0]?r.return:a[0]?r.throw||((u=r.return)&&u.call(r),0):r.next)&&!(u=u.call(r,a[1])).done)return u;switch(r=0,u&&(a=[2&a[0],u.value]),a[0]){case 0:case 1:u=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!((u=(u=i.trys).length>0&&u[u.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!u||a[1]>u[0]&&a[1]<u[3])){i.label=a[1];break}if(6===a[0]&&i.label<u[1]){i.label=u[1],u=a;break}if(u&&i.label<u[2]){i.label=u[2],i.ops.push(a);break}u[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=u=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,o])}}}(this,(function(m){switch(m.label){case 0:e=u.get(b)||[],a=e[0],i=e[1],o=[],c=g(),f=null,s=0,m.label=1;case 1:return s<c?(d=ue(t?t(s,f):null),v=d[0],p=d[1],v?(h=u.get(v),y=l||a||ee(h)||!s&&!ee(w.current)||i&&!ee(i[s])&&!r.compare(i[s],h),n&&y?[4,n.apply(void 0,p)]:[3,3]):[3,5]):[3,5];case 2:h=m.sent(),u.set(v,h),m.label=3;case 3:o.push(h),f=h,m.label=4;case 4:return++s,[3,1];case 5:return u.delete(b),[2,o]}}))}))}),r);K((function(){w.current=m.data}),[m.data]);var O=Object(i.useCallback)((function(e,t){if(void 0===t&&(t=!0),b){if(t&&!ee(e)){var n=w.current;u.set(b,[!1,n])}else t&&u.set(b,[!0]);return m.mutate(e,t)}}),[b]),j=Object(i.useCallback)((function(e){var n;if(p&&(te(e)?n=e(g()):"number"==typeof e&&(n=e),"number"==typeof n))return u.set(p,n),y.current=n,v({}),O(function(e){for(var n=[],r=null,a=0;a<e;++a){var i=ue(t?t(a,r):null)[0],o=i?u.get(i):Z;if(ee(o))return w.current;n.push(o),r=o}return n}(n))}),[p,g,O]);return{size:g(),setSize:j,mutate:O,get error(){return m.error},get data(){return m.data},get isValidating(){return m.isValidating}}}},function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=ae(e),r=n[0],u=n[1],a=n[2];return a.use=(a.use||[]).concat(oe),ie(r,u,a)}),fe=n("CafY"),se=n("YFqc"),de=n.n(se),ve=o.a.createElement;function be(e){var t=e.post,n=t.title,r=t.excerpt,u=t.slug;return ve("li",{className:"Card"},ve(de.a,{href:"/blog/".concat(u),as:"/blog/".concat(u)},ve("a",null,ve("h1",{className:"Card--title"},ve("strong",null,n.rendered)),ve("p",{dangerouslySetInnerHTML:{__html:r.rendered}}))))}var pe=o.a.createElement,he=function(e){return fetch(e).then((function(e){return e.json()}))};function ge(){var e,t,n,r=le((function(e){return"https://ronan-oleary.com/wp-json/wp/v2/posts?page=".concat(e+1)}),he),u=r.data,i=r.error,o=(r.mutate,r.size),c=r.setSize,l=r.isValidating,f=u?(e=[]).concat.apply(e,a(u)):[],s=!u&&!i||o>0&&u&&"undefined"===typeof u[o-1],d=0===(null===u||void 0===u||null===(t=u[0])||void 0===t?void 0:t.length)||u&&(null===(n=u[u.length-1])||void 0===n?void 0:n.length)<10;l&&u&&u.length;return pe(fe.a,null,pe("div",{className:"container mx-auto md:px-12"},pe("article",{className:"relative z-10 w-full flex flex-wrap mb-24"},pe("div",{className:"w-full bg-white p-12 md:p-24 bg-white"},pe("h1",{className:"text-2xl md:text-5xl font-black uppercase text-gray-800 tracking-widest leading-tight mb-12 hover:opacity-50"},"BLOG"),pe("div",{className:"max-w-xl font-serif leading-loose tracking-wide text-lg text-black mb-12 format-content"},pe("ul",null,f.map((function(e,t){return pe(be,{post:e,key:t})}))),pe("br",null),pe("button",{className:"bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded",disabled:s||d,onClick:function(){return c(o+1)}},s?"Loading...":d?"That's all for now!":"Load More"))))))}},BsWD:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("a3WO");function u(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},JUhy:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n("/yi9")}])},a3WO:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))}},[["JUhy",1,2,4,0,3]]]);