(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"9a8T":function(e,t,a){(function(t){e.exports=function(){"use strict";var e="undefined"!=typeof window?window:"undefined"!=typeof t?t:"undefined"!=typeof self?self:{},a="Expected a function",i=NaN,o="[object Symbol]",n=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,d="object"==typeof e&&e&&e.Object===Object&&e,m="object"==typeof self&&self&&self.Object===Object&&self,u=d||m||Function("return this")(),f=Object.prototype.toString,p=Math.max,b=Math.min,v=function(){return u.Date.now()};function g(e,t,i){var o,n,r,s,l,c,d=0,m=!1,u=!1,f=!0;if("function"!=typeof e)throw new TypeError(a);function g(t){var a=o,i=n;return o=n=void 0,d=t,s=e.apply(i,a)}function y(e){var a=e-c;return void 0===c||a>=t||a<0||u&&e-d>=r}function x(){var e=v();if(y(e))return N(e);l=setTimeout(x,function(e){var a=t-(e-c);return u?b(a,r-(e-d)):a}(e))}function N(e){return l=void 0,f&&o?g(e):(o=n=void 0,s)}function k(){var e=v(),a=y(e);if(o=arguments,n=this,c=e,a){if(void 0===l)return function(e){return d=e,l=setTimeout(x,t),m?g(e):s}(c);if(u)return l=setTimeout(x,t),g(c)}return void 0===l&&(l=setTimeout(x,t)),s}return t=h(t)||0,w(i)&&(m=!!i.leading,r=(u="maxWait"in i)?p(h(i.maxWait)||0,t):r,f="trailing"in i?!!i.trailing:f),k.cancel=function(){void 0!==l&&clearTimeout(l),d=0,o=c=n=l=void 0},k.flush=function(){return void 0===l?s:N(v())},k}function w(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&f.call(e)==o}(e))return i;if(w(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=w(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var a=s.test(e);return a||l.test(e)?c(e.slice(2),a?2:8):r.test(e)?i:+e}var y=function(e,t,i){var o=!0,n=!0;if("function"!=typeof e)throw new TypeError(a);return w(i)&&(o="leading"in i?!!i.leading:o,n="trailing"in i?!!i.trailing:n),g(e,t,{leading:o,maxWait:t,trailing:n})},x="Expected a function",N=NaN,k="[object Symbol]",j=/^\s+|\s+$/g,E=/^[-+]0x[0-9a-f]+$/i,O=/^0b[01]+$/i,T=/^0o[0-7]+$/i,C=parseInt,S="object"==typeof e&&e&&e.Object===Object&&e,z="object"==typeof self&&self&&self.Object===Object&&self,A=S||z||Function("return this")(),M=Object.prototype.toString,L=Math.max,q=Math.min,D=function(){return A.Date.now()};function H(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function W(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&M.call(e)==k}(e))return N;if(H(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=H(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(j,"");var a=O.test(e);return a||T.test(e)?C(e.slice(2),a?2:8):E.test(e)?N:+e}var I=function(e,t,a){var i,o,n,r,s,l,c=0,d=!1,m=!1,u=!0;if("function"!=typeof e)throw new TypeError(x);function f(t){var a=i,n=o;return i=o=void 0,c=t,r=e.apply(n,a)}function p(e){var a=e-l;return void 0===l||a>=t||a<0||m&&e-c>=n}function b(){var e=D();if(p(e))return v(e);s=setTimeout(b,function(e){var a=t-(e-l);return m?q(a,n-(e-c)):a}(e))}function v(e){return s=void 0,u&&i?f(e):(i=o=void 0,r)}function g(){var e=D(),a=p(e);if(i=arguments,o=this,l=e,a){if(void 0===s)return function(e){return c=e,s=setTimeout(b,t),d?f(e):r}(l);if(m)return s=setTimeout(b,t),f(l)}return void 0===s&&(s=setTimeout(b,t)),r}return t=W(t)||0,H(a)&&(d=!!a.leading,n=(m="maxWait"in a)?L(W(a.maxWait)||0,t):n,u="trailing"in a?!!a.trailing:u),g.cancel=function(){void 0!==s&&clearTimeout(s),c=0,i=l=o=s=void 0},g.flush=function(){return void 0===s?r:v(D())},g},B=function(){};function P(e){e&&e.forEach((function(e){var t=Array.prototype.slice.call(e.addedNodes),a=Array.prototype.slice.call(e.removedNodes);if(function e(t){var a=void 0,i=void 0;for(a=0;a<t.length;a+=1){if((i=t[a]).dataset&&i.dataset.aos)return!0;if(i.children&&e(i.children))return!0}return!1}(t.concat(a)))return B()}))}function R(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}var $={isSupported:function(){return!!R()},ready:function(e,t){var a=window.document,i=new(R())(P);B=t,i.observe(a.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}},_=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,a,i){return a&&e(t.prototype,a),i&&e(t,i),t}}(),J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},U=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,Y=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,G=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,Q=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;function Z(){return navigator.userAgent||navigator.vendor||window.opera||""}var V=new(function(){function e(){_(this,e)}return F(e,[{key:"phone",value:function(){var e=Z();return!(!U.test(e)&&!Y.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=Z();return!(!G.test(e)&&!Q.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}},{key:"ie11",value:function(){return"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style}}]),e}()),K=function(e,t){var a=void 0;return V.ie11()?(a=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,{detail:t}):a=new CustomEvent(e,{detail:t}),document.dispatchEvent(a)},X=function(e){return e.forEach((function(e,t){return function(e,t){var a=e.options,i=e.position,o=e.node,n=(e.data,function(){e.animated&&(function(e,t){t&&t.forEach((function(t){return e.classList.remove(t)}))}(o,a.animatedClassNames),K("aos:out",o),e.options.id&&K("aos:in:"+e.options.id,o),e.animated=!1)});a.mirror&&t>=i.out&&!a.once?n():t>=i.in?e.animated||(function(e,t){t&&t.forEach((function(t){return e.classList.add(t)}))}(o,a.animatedClassNames),K("aos:in",o),e.options.id&&K("aos:in:"+e.options.id,o),e.animated=!0):e.animated&&!a.once&&n()}(e,window.pageYOffset)}))},ee=function(e){for(var t=0,a=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),a+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:a,left:t}},te=function(e,t,a){var i=e.getAttribute("data-aos-"+t);if(void 0!==i){if("true"===i)return!0;if("false"===i)return!1}return i||a},ae=function(e,t){return e.forEach((function(e,a){var i=te(e.node,"mirror",t.mirror),o=te(e.node,"once",t.once),n=te(e.node,"id"),r=t.useClassNames&&e.node.getAttribute("data-aos"),s=[t.animatedClassName].concat(r?r.split(" "):[]).filter((function(e){return"string"==typeof e}));t.initClassName&&e.node.classList.add(t.initClassName),e.position={in:function(e,t,a){var i=window.innerHeight,o=te(e,"anchor"),n=te(e,"anchor-placement"),r=Number(te(e,"offset",n?0:t)),s=n||a,l=e;o&&document.querySelectorAll(o)&&(l=document.querySelectorAll(o)[0]);var c=ee(l).top-i;switch(s){case"top-bottom":break;case"center-bottom":c+=l.offsetHeight/2;break;case"bottom-bottom":c+=l.offsetHeight;break;case"top-center":c+=i/2;break;case"center-center":c+=i/2+l.offsetHeight/2;break;case"bottom-center":c+=i/2+l.offsetHeight;break;case"top-top":c+=i;break;case"bottom-top":c+=i+l.offsetHeight;break;case"center-top":c+=i+l.offsetHeight/2}return c+r}(e.node,t.offset,t.anchorPlacement),out:i&&function(e,t){window.innerHeight;var a=te(e,"anchor"),i=te(e,"offset",t),o=e;return a&&document.querySelectorAll(a)&&(o=document.querySelectorAll(a)[0]),ee(o).top+o.offsetHeight-i}(e.node,t.offset)},e.options={once:o,mirror:i,animatedClassNames:s,id:n}})),e},ie=function(){var e=document.querySelectorAll("[data-aos]");return Array.prototype.map.call(e,(function(e){return{node:e}}))},oe=[],ne=!1,re={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,mirror:!1,anchorPlacement:"top-bottom",startEvent:"DOMContentLoaded",animatedClassName:"aos-animate",initClassName:"aos-init",useClassNames:!1,disableMutationObserver:!1,throttleDelay:99,debounceDelay:50},se=function(){return document.all&&!window.atob},le=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(ne=!0),ne&&(oe=ae(oe,re),X(oe),window.addEventListener("scroll",y((function(){X(oe,re.once)}),re.throttleDelay)))},ce=function(){if(oe=ie(),me(re.disable)||se())return de();le()},de=function(){oe.forEach((function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay"),re.initClassName&&e.node.classList.remove(re.initClassName),re.animatedClassName&&e.node.classList.remove(re.animatedClassName)}))},me=function(e){return!0===e||"mobile"===e&&V.mobile()||"phone"===e&&V.phone()||"tablet"===e&&V.tablet()||"function"==typeof e&&!0===e()};return{init:function(e){return re=J(re,e),oe=ie(),re.disableMutationObserver||$.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),re.disableMutationObserver=!0),re.disableMutationObserver||$.ready("[data-aos]",ce),me(re.disable)||se()?de():(document.querySelector("body").setAttribute("data-aos-easing",re.easing),document.querySelector("body").setAttribute("data-aos-duration",re.duration),document.querySelector("body").setAttribute("data-aos-delay",re.delay),-1===["DOMContentLoaded","load"].indexOf(re.startEvent)?document.addEventListener(re.startEvent,(function(){le(!0)})):window.addEventListener("load",(function(){le(!0)})),"DOMContentLoaded"===re.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1&&le(!0),window.addEventListener("resize",I(le,re.debounceDelay,!0)),window.addEventListener("orientationchange",I(le,re.debounceDelay,!0)),oe)},refresh:le,refreshHard:ce}}()}).call(this,a("yLpj"))},o5vx:function(e,t,a){"use strict";var i=a("9a8T"),o=a.n(i),n=a("q1tI"),r=a.n(n),s=a("f/Gm"),l=r.a.createElement;t.a=function(){var e=Object(n.useState)(!0),t=(e[0],e[1]);return Object(n.useEffect)((function(){o.a.init()}),[]),Object(n.useEffect)((function(){setTimeout((function(){t(!1)}),2e3)}),[]),l(r.a.Fragment,null,l("div",{className:"py-24 px-12 md:px-32"},l("div",{className:"container mx-auto"},l("h1",{className:"text-2xl md:text-6xl font-black  text-black tracking-widest leading-normal mb-12 pl-10"},"Hello There, I'm Ronan"),l("div",{className:"font-serif leading-loose tracking-wide text-base md:text-lg text-black opacity-50 max-w-lg md:ml-64"},l("p",null,"Versatile, experienced Web Developer and architect, with 12 years professional experience, predominantly in front-end engineering, but not shy of working with back-end languages, technologies and configurations.")))),l("div",{className:"bg-gray-200 py-24 relative"},l("div",{className:"bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20",style:{height:"80px",transform:"translateZ(0)"}},l("svg",{className:"absolute bottom-0 overflow-hidden",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",version:"1.1",viewBox:"0 0 2560 100",x:"0",y:"0"},l("polygon",{className:"text-gray-200 fill-current",points:"2560 0 2560 100 0 100"}))),l("div",{className:"w-full h-full top-0 left-0 absolute flex flex-col items-center justify-start"}),l("div",{className:"container mx-auto px-12"},l("h2",{className:"text-black uppercase font-bold tracking-widest text-3xl pb-4"}),l("div",{className:"relative z-10 w-full flex flex-wrap"},l("div",{className:"md:mb-2 md:mb-0 w-full md:w-2/3 h-64 md:h-96 bg-black overflow-hidden relative"},l("img",{src:"https://images.unsplash.com/photo-1545060894-7b45236d00b3?w=1200",alt:"Citybrand Website Design by Digizu",className:"w-full h-auto opacity-50"}),l("h2",{className:"text-white uppercase font-bold tracking-widest text-3xl absolute bottom-0 left-0 pl-10 pb-10"},"TNW")),l("div",{className:"flex-1 h-64 md:h-96 flex flex-wrap md:pl-1"},l("div",{className:"w-1/2 h-1/2 md:px-1 md:pb-1"},l("img",{src:"https://images.unsplash.com/photo-1545060894-7b45236d00b3?w=1200",alt:"",className:"px-6 bg-white w-full h-full object-contain filter-grayscale"})),l("div",{className:"w-1/2 h-1/2 md:px-1 md:pb-1"},l("img",{src:"https://images.unsplash.com/photo-1545060894-7b45236d00b3?w=1200",alt:"",className:"w-full h-full object-cover filter-grayscale"})))),l("div",{className:"relative z-10 w-full flex flex-wrap pb-12"},l("div",{className:"w-full md:flex-1 h-64 md:h-96 flex flex-wrap md:pr-1"},l("div",{className:"w-1/2 h-1/2 md:px-1 md:pb-1"},l("img",{src:"https://placedog.net/1200/350",alt:"",className:"w-full h-full object-cover filter-grayscale"}),l("h2",{className:"text-white uppercase font-bold tracking-widest text-3xl absolute bottom-0 left-0 pl-10 pb-10"},"WEB SUMMIT")),l("div",{className:"w-1/2 h-1/2 md:px-1 md:pb-1"},l("img",{src:"https://placedog.net/1200/350",alt:"TEST UNIT Branding Design by Digizu",className:"w-full h-full object-cover filter-grayscale"}))),l("div",{className:"w-full md:w-2/3 h-64 md:h-96 bg-black overflow-hidden relative"},l("img",{src:"https://placedog.net/1200/350",alt:"TEST UNIT Design by Digizu",className:"w-full h-auto opacity-50"}),l("h2",{className:"text-white text-right uppercase font-bold tracking-widest text-3xl absolute bottom-0 right-0 pr-10 pb-10"},"AGENCY/FREELANCE")))),l("div",{className:"relative mt-24 -mb-24 bg-black px-12 py-24 flex items-center"},l("div",{className:"bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20",style:{height:"80px",transform:"translateZ(0)"}},l("svg",{className:"absolute bottom-0 overflow-hidden",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",version:"1.1",viewBox:"0 0 2560 100",x:"0",y:"0"},l("polygon",{className:"text-black fill-current",points:"2560 0 2560 100 0 100"}))),l("div",{className:"hidden md:block w-3/12"}),l("div",{className:"flex-1 relative"},l("div",{className:"font-serif text-white opacity-75 text-base md:text-xl max-w-2xl leading-loose"},l("h2",{className:"text-white font-bold tracking-widest text-3xl pb-4"},"About Me"),l("p",null,"Branding is the foundation of your business. A fantastic digital experience relies on the brand resonating perfectly with your target audience. We help businesses assert their position in their industry by providing a brand identity that's solid and memorable.")),l("span",{className:"absolute top-0 left-0 w-4 h-full bg-white opacity-50 -ml-20"})))),l("div",{className:"w-full bg-white flex flex-wrap"},l("div",{className:"px-12 md:-px-0 w-full md:w-4/12 bg-white flex items-center justify-start md:justify-end"},l("div",{className:"shadow-xl md:shadow-none sm:px-4 px-12 py-12 md:pl-36 md:pr-24 bg-white md:-mr-64 relative z-10"},l("h1",{className:"mb-8 text-3xl md:text-5xl text-black text-bold uppercase font-bold tracking-widest leading-tight"},"LATEST TOUR ANNOUNCEMENTS"),l("h2",{className:"text-lg md:text-2xl font-serif text-gray-500"},"Excellent Italian Greyhound"))),l("div",{className:"-mt-64 md:mt-0 w-full md:flex-1"},l("img",{src:"https://images.unsplash.com/photo-1566981731417-d4c8e17a9e82?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=800",className:"w-full h-full object-cover"}))),l("div",{className:"bg-black px-12 py-24 flex items-center"},l("div",{className:"hidden md:block w-3/12"}),l("div",{className:"flex-1 relative"},l("h2",{className:"mb-8 text-white text-2xl font-bold tracking-widest"},"My Expertise"),l("p",{className:"font-serif text-gray-500 text-base md:text-xl max-w-2xl leading-loose"},"I made my first website in 2008(!) and was hooked from the moment I hit save. Since then I have gained experience across an array of award-winning and globally recognised tech, media, events and advertising companies.",l("br",null),"These days, I build on top of the amazing Craft CMS and WordPress platforms, or with super-cutting edge stuff like React and my current favourite, Next.js.",l("br",null),l("br",null),"In my career thus far, I have worked for several award winning advertising, tech event conference, online media and software development companies.",l("br",null),l("br",null),"I'm an expert in HTML, JavaScript, PHP and specialise in developing (and scaling) CMS sites and applications (some of whom serve millions of users per month). Among my weapons of choice are Craft CMS, WordPress, Laravel, React, Vue, SCSS and Tailwind CSS."),l("span",{className:"absolute top-0 left-0 w-4 h-full bg-gray-300 -ml-20"}))),l("div",{className:"w-full h-24 border-black bg-white flex justify-end"},l("div",{className:"w-64 bg-black"})),l("div",{className:"w-full flex items-center justify-start relative","data-aos":"fade-down-right","data-aos-mirror":"true"},l("div",{className:"w-auto md:w-3/12"}),l("div",{className:"w-full md:w-8/12 bg-gray-100 py-12 relative flex"},l("a",{href:"/work",className:"block relative z-10 bg-white h-full w-full px-12 md:px-0 md:w-6/12 py-24 md:-ml-24"},l("h3",{className:"mb-2 uppercase text-gray-800 text-3xl font-bold tracking-widest"},"Work"),l("p",{className:"text-lg md:text-xl font-serif text-gray-400"},"Completed Builds")),l("img",{src:"https://images.unsplash.com/photo-1566981731417-d4c8e17a9e82?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1200",className:"absolute top-0 left-0 block w-full h-full object-cover"})),l("div",{className:"w-1/12 absolute top-0 right-0 h-full bg-black"})),l("div",{className:"w-full h-12 border-black bg-white flex justify-end"},l("div",{className:"w-64 bg-black"})),l("div",{className:"w-full flex items-center justify-start relative","data-aos":"fade-up-right","data-aos-mirror":"true"},l("div",{className:"w-auto md:w-3/12"}),l("div",{className:"w-full md:w-8/12 bg-gray-100 py-12 relative flex"},l("a",{href:"#",className:"block relative z-10 bg-white h-full w-full px-12 md:px-0 md:w-6/12 py-24 md:-ml-24"},l("h3",{className:"mb-2 uppercase text-gray-800 text-3xl font-bold tracking-widest"},"TOOLS"),l("p",{className:"text-lg md:text-xl font-serif text-gray-400"},"Current Developments")),l("img",{src:"https://images.unsplash.com/photo-1566981731417-d4c8e17a9e82?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1200",className:"absolute top-0 left-0 block w-full h-full object-cover"})),l("div",{className:"w-1/12 absolute top-0 right-0 h-full bg-black"})),l("div",{className:"w-full h-12 border-black bg-white flex justify-end"},l("div",{className:"w-64 bg-black"})),l("div",{className:"w-full flex items-center justify-start relative"},l("div",{className:"w-1/12 absolute top-0 right-0 h-full bg-black"})),l("div",{className:"w-full h-24 border-black bg-white flex justify-end"},l("div",{className:"w-64 bg-black"})),l("div",{className:"relative bg-black px-12 py-24 flex items-center"},l("div",{className:"hidden md:block w-3/12"}),l("div",{className:"relative flex flex-col min-w-0 break-words md:w-1/2 mb-6 shadow-lg bg-gray-300"},l("div",{className:"flex-auto p-5 lg:p-10"},l(s.a,null)))),l("footer",{className:"relative bg-gray-300 pt-8 pb-6"},l("div",{className:"bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20",style:{height:"80px",transform:"translateZ(0)"}},l("svg",{className:"absolute bottom-0 overflow-hidden",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",version:"1.1",viewBox:"0 0 2560 100",x:"0",y:"0"},l("polygon",{className:"text-gray-300 fill-current",points:"2560 0 2560 100 0 100"})))))}}}]);