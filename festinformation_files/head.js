var M=M||{},_m=_m||{},DEBUG=DEBUG||!1;_m.cutsTheMustard="querySelector"in document&&"localStorage"in window&&"addEventListener"in window&&!!Array.prototype.forEach&&!!Array.prototype.indexOf,_m.usePolyfills=_m.cutsTheMustard&&!window.matchMedia,_m.namespace=function(n){"use strict";var r,i,t=n.split("."),u=t[0];if(u!=="_m"&&u!=="M")throw new Error("Namespace - Parent (M or _m) must be specified.");else r=window[u],t=t.slice(1);for(i=0;i<t.length;i+=1){if(typeof r[t[i]]=="undefined")r[t[i]]={};else if(i===t.length-1)throw new Error(u+".namespace - namespace already defined. Please rename.");r=r[t[i]]}return r},_m.namespace("_m.mod"),_m.mod=[],function(){"use strict";function u(n,t){return e.call(n,t)}function f(t,r,f){var e,s,o;if(t!==null){if(n.forEach&&t.forEach===n.forEach)t.forEach(r,f);else if(t.length===+t.length){for(e=0,s=t.length;e<s;e+=1)if(r.call(f,t[e],e,t)===i)return}else for(o in t)if(u(t,o)&&r.call(f,t[o],o,t)===i)return;return t}}var n=Array.prototype,t=Object.prototype,i={},r=t.toString,e=t.hasOwnProperty;_m.namespace("_m.has"),_m.has=u,_m.namespace("_m.each"),_m.each=f,f(["Arguments","Function","String","Number","Date","RegExp"],function(n){_m.namespace("_m.is"+n),_m["is"+n]=function(t){return r.call(t)==="[object "+n+"]"}}),_m.isArray=Array.isArray||function(n){return r.call(n)==="[object Array]"},_m.namespace("_m.hasClass"),_m.hasClass=function(n,t){return new RegExp("(\\s|^)"+t+"(\\s|$)").test(n.className)},_m.namespace("_m.replaceClass"),_m.replaceClass=function(n,t,i){function f(n,t){var i=new RegExp("\\b"+n+"\\b","g");u=u.replace(i,t)}var r,u=n.className;if(_m.isArray(t)&&!i)for(r=0;r<t.length;r++)_m.isArray(t[r])&&t[r].length===2&&f(t[r][0],t[r][1]);return _m.isString(t)&&i&&f(t,i),n.className=u,n}}(),_m.namespace("_m.onload"),function(n){"use strict";function t(n){_m.isFunction(n)&&n()}var i=!1;_m.onload=function(r){var u;i?t(r):(u=n.onload,n.onload=function(){t(u),t(r)})};_m.onload(function(){i=!0})}(window),_m.namespace("_m.init"),_m.namespace("_m.inInit"),function(n,t){"use strict";function e(n){r.push(n)}function s(n){if(typeof n=="function")return n;for(var u=n.split("."),r=0,f=u.length;r<f;r+=1)if(i[u[r]])i=i[u[r]];else return t;return i}function o(t){var e,f,o;for(t=t||r,f=0,o=t.length;f<o;f+=1)i=n,_m.isString(t[f])&&u.indexOf(t[f])===-1&&(u.push(t[f]),e=s(t[f]),typeof e=="function"&&e())}if(!_m.cutsTheMustard){_m.init=function(){},_m.inInit=function(){};return}var r=[],u=[],i,f=!1;_m.init=function(n){if(f){_m.isString(n)&&(n=[n]),o(n);return}if(!n){r.length>0&&o(),f=!0;return}_m.isString(n)||typeof n=="function"?e(n):_m.isArray(n)&&n.forEach(function(n){e(n)})},_m.inInit=function(n){return r.indexOf(n)>-1||u.indexOf(n)>-1}}(window),_m.namespace("_m.load"),function(n,t){"use strict";_m.load={js:function(i,r){var u=n.createElement(t);return r=r||n.getElementsByTagName(t)[0],u.src=i,r.parentNode.insertBefore(u,r),u},css:function(i,r,u,f){var e=n.createElement("link");return u=u||n.getElementsByTagName(t)[0],r=r||!1,e.rel="stylesheet",e.href=i,e.media=f||"all",_m.isFunction(r)&&e.addEventListener&&e.addEventListener("load",r,!1),u.parentNode.insertBefore(e,u),e}}}(document,"script"),function(n,t,i){"use strict";function u(n){DEBUG||_m.load.js(r.getAttribute(n),r)}var r=t.getElementById("js-init");r&&(_m.cutsTheMustard?(u(_m.usePolyfills?"data-js-poly":"data-js-main"),_m.replaceClass(i,[["no-js","js js-adv"],["css-basic","css-adv"]])):(u("data-js-basic"),_m.replaceClass(i,"no-js","js js-basic")))}(window,document,document.documentElement),_m.namespace("_m.simpleNavToggler"),function(n){"use strict";function u(){var r=n.getElementById("nav");i=n.getElementById("top-nav"),t.href="#adv-nav",r&&(r.style.display="none")}var t,i,r=!1;if(_m.simpleNavToggler=function(n){return n&&n.preventDefault&&n.preventDefault(),i.style.display=r?"none":"block",r=!r,!1},_m.cutsTheMustard)n.addEventListener("DOMContentLoaded",function(){t=n.getElementById("to-nav"),t&&(u(),t.addEventListener("click",_m.simpleNavToggler,!1))},!1);else _m.onload(function(){(t=n.getElementById("to-nav"),t)&&(u(),t.addEventListener?t.addEventListener("click",_m.simpleNavToggler,!1):t.attachEvent?t.attachEvent("onclick",_m.simpleNavToggler):t.onclick=_m.simpleNavToggler)})}(document),function(n){"use strict";function t(){var n=document.getElementById(location.hash.substring(1));n&&(/^(?:a|select|input|button|textarea)$/i.test(n.tagName)||(n.tabIndex=-1),n.focus())}n.addEventListener?n.addEventListener("hashchange",t,!1):n.attachEvent&&n.attachEvent("onhashchange",t)}(window),_m.namespace("_m.simpleAccordionToggler"),function(n){"use strict";_m.onload(function(){for(var i=n.querySelectorAll(".accordion-list.has-children .submenu-trigger"),t=0;t<i.length;t++)i[t].addEventListener("click",function(){var n=this.parentElement.className;n.indexOf("closed")>-1?this.parentElement.className=n.replace("closed",""):this.parentElement.className+=" closed"})})}(document),function(n){function u(n,t){return typeof n===t}function s(n,i){for(r in n)if(t=n[r],t.indexOf("-")===-1&&e[t]!==undefined)return i=="pfx"?t:!0;return!1}function h(n,t,i){var r=n.charAt(0).toUpperCase()+n.slice(1),f=(n+" "+o.join(r+" ")+r).split(" ");return u(t,"string")||u(t,"undefined")?s(f,t):(f=(n+" "+domPrefixes.join(r+" ")+r).split(" "),testDOMProps(f,t,i))}var i={},r,t,f=n.createElement("modernizr"),e=f.style,o="Webkit Moz O ms".split(" ");i.flexbox=function(){return h("flexWrap")},i.flexbox()&&_m.replaceClass(n.documentElement,"no-flex","flex")}(document)