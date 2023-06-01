// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).bifurcateByAsync=r()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,e=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,c=n.__lookupGetter__,f=n.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,r,e){var l,a,s,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(c.call(t,r)||f.call(t,r)?(l=t.__proto__,t.__proto__=n,delete t[r],t[r]=e.value,t.__proto__=l):t[r]=e.value),s="get"in e,p="set"in e,a&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&i&&i.call(t,r,e.get),p&&u&&u.call(t,r,e.set),t};var l=r;function a(t,r,e){l(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}var s=/./;function p(t){return"boolean"==typeof t}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return y&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function g(t,r){return null!=t&&d.call(t,r)}var m="function"==typeof Symbol?Symbol.toStringTag:"";var h=b()?function(t){var r,e,n;if(null==t)return v.call(t);e=t[m],r=g(t,m);try{t[m]=void 0}catch(r){return v.call(t)}return n=v.call(t),r?t[m]=e:delete t[m],n}:function(t){return v.call(t)},j=Boolean.prototype.toString;var w=b();function _(t){return"object"==typeof t&&(t instanceof Boolean||(w?function(t){try{return j.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===h(t)))}function O(t){return p(t)||_(t)}function E(){return new Function("return this;")()}a(O,"isPrimitive",p),a(O,"isObject",_);var P="object"==typeof self?self:null,T="object"==typeof window?window:null,I="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},S="object"==typeof I?I:null;var A=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return E()}if(P)return P;if(T)return T;if(S)return S;throw new Error("unexpected error. Unable to resolve global object.")}(),N=A.document&&A.document.childNodes,F=Int8Array;function B(){return/^\s*function\s*([^(]*)/i}var C=/^\s*function\s*([^(]*)/i;a(B,"REGEXP",C);var V=Array.isArray?Array.isArray:function(t){return"[object Array]"===h(t)};function x(t){return null!==t&&"object"==typeof t}function k(t){var r,e,n,o;if(("Object"===(e=h(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=C.exec(n.toString()))return r[1]}return x(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}a(x,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!V(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(x));var M="function"==typeof s||"object"==typeof F||"function"==typeof N?function(t){return k(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?k(t).toLowerCase():r};function G(t){return"function"===M(t)}var L=Math.floor;function R(t){return L(t)===t}function U(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&R(t.length)&&t.length>=0&&t.length<=9007199254740991}function Y(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}var z=Number.POSITIVE_INFINITY;var D,J=Object.getPrototypeOf;D=G(Object.getPrototypeOf)?J:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===h(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var X=D;var q=Object.prototype;function H(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!V(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),X(t))}(t),!r||!g(t,"constructor")&&g(r,"constructor")&&G(r.constructor)&&"[object Function]"===h(r.constructor)&&g(r,"isPrototypeOf")&&G(r.isPrototypeOf)&&(r===q||function(t){var r;for(r in t)if(!g(t,r))return!1;return!0}(t)))}function K(t){return"number"==typeof t}var Q=Number,W=Q.prototype.toString;var Z=b();function $(t){return"object"==typeof t&&(t instanceof Q||(Z?function(t){try{return W.call(t),!0}catch(t){return!1}}(t):"[object Number]"===h(t)))}function tt(t){return K(t)||$(t)}a(tt,"isPrimitive",K),a(tt,"isObject",$);var rt=Q.NEGATIVE_INFINITY;function et(t){return t<z&&t>rt&&R(t)}function nt(t){return K(t)&&et(t)}function ot(t){return $(t)&&et(t.valueOf())}function it(t){return nt(t)||ot(t)}function ut(t){return nt(t)&&t>0}function ct(t){return ot(t)&&t.valueOf()>0}function ft(t){return ut(t)||ct(t)}function lt(t){return t!=t}function at(t){return K(t)&&lt(t)}function st(t){return $(t)&&lt(t.valueOf())}function pt(t){return at(t)||st(t)}function yt(t){return"string"==typeof t}a(it,"isPrimitive",nt),a(it,"isObject",ot),a(ft,"isPrimitive",ut),a(ft,"isObject",ct),a(pt,"isPrimitive",at),a(pt,"isObject",st);var bt=String.prototype.valueOf;var vt=b();function dt(t){return"object"==typeof t&&(t instanceof String||(vt?function(t){try{return bt.call(t),!0}catch(t){return!1}}(t):"[object String]"===h(t)))}function gt(t){return yt(t)||dt(t)}a(gt,"isPrimitive",yt),a(gt,"isObject",dt);var mt=["values","indices","*"];function ht(t,r){return H(r)?(g(r,"thisArg")&&(t.thisArg=r.thisArg),g(r,"series")&&(t.series=r.series,!p(t.series))?new TypeError(Y("0iI30","series",t.series)):g(r,"limit")&&(t.limit=r.limit,!ut(t.limit))?new TypeError(Y("0iI3b","limit",t.limit)):g(r,"returns")&&(t.returns=r.returns,-1===function(t,r,e){var n,o;if(!U(t)&&!yt(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!nt(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(pt(r)){for(;o<n;o++)if(pt(t[o]))return o}else for(;o<n;o++)if(t[o]===r)return o;return-1}(mt,t.returns))?new TypeError(Y("0iI3t","returns",mt.join('", "'),t.returns)):null):new TypeError(Y("0iI2h",r))}function jt(t){if(t.__esModule)return t;var r=t.default;if("function"==typeof r){var e=function t(){if(this instanceof t){var e=[null];e.push.apply(e,arguments);var n=Function.bind.apply(r,e);return new n}return r.apply(this,arguments)};e.prototype=r.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(t).forEach((function(r){var n=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:function(){return t[r]}})})),e}var wt=jt(Object.freeze({__proto__:null,default:()=>()=>{}}))("bifurcate-by-async:limit");function _t(t,r,e,n){var o,i,u,c,f,l,a,s;if(f=t.length,wt("Collection length: %d",f),a=[],0===f)return wt("Finished processing a collection."),n(null,a);for(a.push([],[]),c=f<r.limit?f:r.limit,wt("Concurrency limit: %d",c),wt("Number of arguments: %d",e.length),o=f-1,i=0,l=-1,s=0;s<c;s++)l<o&&p();function p(){var n,o;function i(t,e){if(!u){if(t)return u=!0,y(t);wt("Collection element %d group: %s.",o,e?"0":"1"),"indices"===r.returns?e?a[0].push(o):a[1].push(o):"*"===r.returns?e?a[0].push([o,n]):a[1].push([o,n]):e?a[0].push(n):a[1].push(n),y()}}n=t[o=l+=1],wt("Collection element %d: %s.",o,JSON.stringify(n)),2===e.length?e.call(r.thisArg,n,i):3===e.length?e.call(r.thisArg,n,o,i):e.call(r.thisArg,n,o,t,i)}function y(t){return t?(wt("Encountered an error: %s",t.message),n(t)):(wt("Processed %d of %d collection elements.",i+=1,f),l<o?p():i===f?(wt("Finished processing a collection."),n(null,a)):void 0)}}function Ot(t,r){var e,n,o;if(e={},arguments.length>1){if(n=ht(e,t))throw n;o=r}else o=t;if(!G(o))throw new TypeError(Y("0iI43",o));return e.series?e.limit=1:e.limit||(e.limit=z),i;function i(t,r){if(!U(t))throw new TypeError(Y("0iIBO",t));if(!G(r))throw new TypeError(Y("0iI43",r));return _t(t,e,o,(function(t,e){if(t)return r(t);r(null,e)}))}}function Et(t,r,e,n){if(arguments.length<4)return Ot(r)(t,e);Ot(r,e)(t,n)}return a(Et,"factory",Ot),Et}));
//# sourceMappingURL=browser.js.map
