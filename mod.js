// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(e){var r,n,u;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===e.specifier||10!==r)&&(u=4294967295+u+1),u<0?(n=(-u).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=u.toString(r),u||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(e){return"string"==typeof e}var s=Math.abs,l=String.prototype.toLowerCase,f=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,b=/^(\d+)$/,y=/^(\d+)e/,h=/\.0$/,v=/\.0*e/,m=/(\..*[^0])0*e/;function w(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":s(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=p.call(n,m,"$1e"),n=p.call(n,v,"e"),n=p.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,d,"e-0$1"),e.alternate&&(n=p.call(n,b,"$1."),n=p.call(n,y,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===f.call(e.specifier)?f.call(n):l.call(n)}function j(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function _(e,r,t){var n=r-e.length;return n<0?e:e=t?e+j(n):j(n)+e}var O=String.fromCharCode,E=isNaN,S=Array.isArray;function T(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function A(e){var r,t,n,o,a,s,l,f,p;if(!S(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(s="",l=1,f=0;f<e.length;f++)if(c(n=e[f]))s+=n;else{if(r=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,E(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):O(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),s+=n.arg||"",l+=1}return s}var P=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function V(e){var r,t,n,i;for(t=[],i=0,n=P.exec(e);n;)(r=e.slice(i,P.lastIndex-n[0].length)).length&&t.push(r),t.push(k(n)),i=P.lastIndex,n=P.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function x(e){return"string"==typeof e}function F(e){var r,t,n;if(!x(e))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=V(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return A.apply(null,t)}var I,C=Object.prototype,N=C.toString,$=C.__defineGetter__,L=C.__defineSetter__,B=C.__lookupGetter__,R=C.__lookupSetter__;I=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===N.call(e))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(B.call(e,r)||R.call(e,r)?(n=e.__proto__,e.__proto__=C,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&$&&$.call(e,r,t.get),a&&L&&L.call(e,r,t.set),e};var G=I;function M(e,r,t){G(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var Z=/./;function W(e){return"boolean"==typeof e}var U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return U&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString;var Y=Object.prototype.hasOwnProperty;function D(e,r){return null!=e&&Y.call(e,r)}var J="function"==typeof Symbol?Symbol:void 0,q="function"==typeof J?J.toStringTag:"";var H=X()?function(e){var r,t,n;if(null==e)return z.call(e);t=e[q],r=D(e,q);try{e[q]=void 0}catch(r){return z.call(e)}return n=z.call(e),r?e[q]=t:delete e[q],n}:function(e){return z.call(e)},K=Boolean,Q=Boolean.prototype.toString;var ee=X();function re(e){return"object"==typeof e&&(e instanceof K||(ee?function(e){try{return Q.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===H(e)))}function te(e){return W(e)||re(e)}function ne(){return new Function("return this;")()}M(te,"isPrimitive",W),M(te,"isObject",re);var ie="object"==typeof self?self:null,oe="object"==typeof window?window:null,ae="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ue="object"==typeof ae?ae:null,ce="object"==typeof globalThis?globalThis:null;var se=function(e){if(arguments.length){if(!W(e))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return ne()}if(ce)return ce;if(ie)return ie;if(oe)return oe;if(ue)return ue;throw new Error("unexpected error. Unable to resolve global object.")}(),le=se.document&&se.document.childNodes,fe=Int8Array;function pe(){return/^\s*function\s*([^(]*)/i}var ge=/^\s*function\s*([^(]*)/i;M(pe,"REGEXP",ge);var de=Array.isArray?Array.isArray:function(e){return"[object Array]"===H(e)};function be(e){return null!==e&&"object"==typeof e}function ye(e){var r,t,n,i;if(("Object"===(t=H(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=ge.exec(n.toString()))return r[1]}return be(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}M(be,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!de(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(be));var he="function"==typeof Z||"object"==typeof fe||"function"==typeof le?function(e){return ye(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?ye(e).toLowerCase():r};function ve(e){return"function"===he(e)}var me=Math.floor;function we(e){return me(e)===e}function je(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&we(e.length)&&e.length>=0&&e.length<=9007199254740991}var _e=Number.POSITIVE_INFINITY;var Oe,Ee=Object,Se=Object.getPrototypeOf;Oe=ve(Object.getPrototypeOf)?Se:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===H(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var Te=Oe;var Ae=Object.prototype;function Pe(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!de(e)}(e)&&(r=function(e){return null==e?null:(e=Ee(e),Te(e))}(e),!r||!D(e,"constructor")&&D(r,"constructor")&&ve(r.constructor)&&"[object Function]"===H(r.constructor)&&D(r,"isPrototypeOf")&&ve(r.isPrototypeOf)&&(r===Ae||function(e){var r;for(r in e)if(!D(e,r))return!1;return!0}(e)))}function ke(e){return"number"==typeof e}var Ve=Number,xe=Ve.prototype.toString;var Fe=X();function Ie(e){return"object"==typeof e&&(e instanceof Ve||(Fe?function(e){try{return xe.call(e),!0}catch(e){return!1}}(e):"[object Number]"===H(e)))}function Ce(e){return ke(e)||Ie(e)}M(Ce,"isPrimitive",ke),M(Ce,"isObject",Ie);var Ne=Ve.NEGATIVE_INFINITY;function $e(e){return e<_e&&e>Ne&&we(e)}function Le(e){return ke(e)&&$e(e)}function Be(e){return Ie(e)&&$e(e.valueOf())}function Re(e){return Le(e)||Be(e)}function Ge(e){return Le(e)&&e>0}function Me(e){return Be(e)&&e.valueOf()>0}function Ze(e){return Ge(e)||Me(e)}function We(e){return e!=e}function Ue(e){return ke(e)&&We(e)}function Xe(e){return Ie(e)&&We(e.valueOf())}function ze(e){return Ue(e)||Xe(e)}function Ye(e){return"string"==typeof e}M(Re,"isPrimitive",Le),M(Re,"isObject",Be),M(Ze,"isPrimitive",Ge),M(Ze,"isObject",Me),M(ze,"isPrimitive",Ue),M(ze,"isObject",Xe);var De=String.prototype.valueOf;var Je=X();function qe(e){return"object"==typeof e&&(e instanceof String||(Je?function(e){try{return De.call(e),!0}catch(e){return!1}}(e):"[object String]"===H(e)))}function He(e){return Ye(e)||qe(e)}M(He,"isPrimitive",Ye),M(He,"isObject",qe);var Ke=["values","indices","*"];function Qe(e,r){return Pe(r)?(D(r,"thisArg")&&(e.thisArg=r.thisArg),D(r,"series")&&(e.series=r.series,!W(e.series))?new TypeError(F("invalid option. `%s` option must be a boolean. Option: `%s`.","series",e.series)):D(r,"limit")&&(e.limit=r.limit,!Ge(e.limit))?new TypeError(F("invalid option. `%s` option must be a positive integer. Option: `%s`.","limit",e.limit)):D(r,"returns")&&(e.returns=r.returns,-1===function(e,r,t){var n,i;if(!je(e)&&!Ye(e))throw new TypeError(F("invalid argument. First argument must be an array-like object. Value: `%s`.",e));if(0===(n=e.length))return-1;if(3===arguments.length){if(!Le(t))throw new TypeError(F("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(ze(r)){for(;i<n;i++)if(ze(e[i]))return i}else for(;i<n;i++)if(e[i]===r)return i;return-1}(Ke,e.returns))?new TypeError(F('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"returns",Ke.join('", "'),e.returns)):null):new TypeError(F("invalid argument. Options argument must be an object. Value: `%s`.",r))}function er(e){if(e.__esModule)return e;var r=e.default;if("function"==typeof r){var t=function e(){if(this instanceof e){var t=[null];t.push.apply(t,arguments);var n=Function.bind.apply(r,t);return new n}return r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}var rr=er(Object.freeze({__proto__:null,default:()=>()=>{}}))("bifurcate-by-async:limit");function tr(e,r,t,n){var i,o,a,u,c,s,l,f;if(c=e.length,rr("Collection length: %d",c),l=[],0===c)return rr("Finished processing a collection."),n(null,l);for(l.push([],[]),u=c<r.limit?c:r.limit,rr("Concurrency limit: %d",u),rr("Number of arguments: %d",t.length),i=c-1,o=0,s=-1,f=0;f<u;f++)s<i&&p();function p(){var n,i;function o(e,t){if(!a){if(e)return a=!0,g(e);rr("Collection element %d group: %s.",i,t?"0":"1"),"indices"===r.returns?t?l[0].push(i):l[1].push(i):"*"===r.returns?t?l[0].push([i,n]):l[1].push([i,n]):t?l[0].push(n):l[1].push(n),g()}}n=e[i=s+=1],rr("Collection element %d: %s.",i,JSON.stringify(n)),2===t.length?t.call(r.thisArg,n,o):3===t.length?t.call(r.thisArg,n,i,o):t.call(r.thisArg,n,i,e,o)}function g(e){return e?(rr("Encountered an error: %s",e.message),n(e)):(rr("Processed %d of %d collection elements.",o+=1,c),s<i?p():o===c?(rr("Finished processing a collection."),n(null,l)):void 0)}}function nr(e,r){var t,n,i;if(t={},arguments.length>1){if(n=Qe(t,e))throw n;i=r}else i=e;if(!ve(i))throw new TypeError(F("invalid argument. Last argument must be a function. Value: `%s`.",i));return t.series?t.limit=1:t.limit||(t.limit=_e),o;function o(e,r){if(!je(e))throw new TypeError(F("invalid argument. First argument must be a collection. Value: `%s`.",e));if(!ve(r))throw new TypeError(F("invalid argument. Last argument must be a function. Value: `%s`.",r));return tr(e,t,i,(function(e,t){if(e)return r(e);r(null,t)}))}}function ir(e,r,t,n){if(arguments.length<4)return nr(r)(e,t);nr(r,t)(e,n)}M(ir,"factory",nr);export{ir as default,nr as factory};
//# sourceMappingURL=mod.js.map
