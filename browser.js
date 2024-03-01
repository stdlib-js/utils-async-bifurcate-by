// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(e){var r,n,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(n=(-c).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(r),c||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,f=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,h=/^(\d+)$/,d=/^(\d+)e/,y=/\.0$/,b=/\.0*e/,v=/(\..*[^0])0*e/;function m(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":u(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=f.call(n,v,"$1e"),n=f.call(n,b,"e"),n=f.call(n,y,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=f.call(n,p,"e+0$1"),n=f.call(n,g,"e-0$1"),e.alternate&&(n=f.call(n,h,"$1."),n=f.call(n,d,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===l.call(e.specifier)?l.call(n):s.call(n)}function w(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var j=String.fromCharCode,_=isNaN,E=Array.isArray;function O(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function T(e){var r,t,n,o,a,u,s,l,f,p,g,h,d;if(!E(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(u="",s=1,l=0;l<e.length;l++)if("string"==typeof(n=e[l]))u+=n;else{if(r=void 0!==n.precision,!(n=O(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(o=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,_(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,h=n.padRight,d=void 0,(d=g-p.length)<0?p:p=h?p+w(d):w(d)+p)),u+=n.arg||"",s+=1}return u}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function A(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function P(e){var r,t,n,i;for(t=[],i=0,n=S.exec(e);n;)(r=e.slice(i,S.lastIndex-n[0].length)).length&&t.push(r),t.push(A(n)),i=S.lastIndex,n=S.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function k(e){var r,t;if("string"!=typeof e)throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[P(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return T.apply(null,r)}var x,I=Object.prototype,V=I.toString,F=I.__defineGetter__,C=I.__defineSetter__,N=I.__lookupGetter__,$=I.__lookupSetter__;x=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===V.call(e))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===V.call(t))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(N.call(e,r)||$.call(e,r)?(n=e.__proto__,e.__proto__=I,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&F&&F.call(e,r,t.get),a&&C&&C.call(e,r,t.set),e};var R=x;function B(e,r,t){R(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var Q=/./;function G(e){return"boolean"==typeof e}var L="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function M(){return L&&"symbol"==typeof Symbol.toStringTag}var Z=Object.prototype.toString,U=Object.prototype.hasOwnProperty;function W(e,r){return null!=e&&U.call(e,r)}var X="function"==typeof Symbol?Symbol:void 0,q="function"==typeof X?X.toStringTag:"",z=M()?function(e){var r,t,n;if(null==e)return Z.call(e);t=e[q],r=W(e,q);try{e[q]=void 0}catch(r){return Z.call(e)}return n=Z.call(e),r?e[q]=t:delete e[q],n}:function(e){return Z.call(e)},Y=Boolean,D=Boolean.prototype.toString,J=M();function H(e){return"object"==typeof e&&(e instanceof Y||(J?function(e){try{return D.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===z(e)))}function K(e){return G(e)||H(e)}B(K,"isPrimitive",G),B(K,"isObject",H);var ee="object"==typeof self?self:null,re="object"==typeof window?window:null,te="object"==typeof globalThis?globalThis:null,ne=function(e){if(arguments.length){if(!G(e))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(te)return te;if(ee)return ee;if(re)return re;throw new Error("unexpected error. Unable to resolve global object.")}(),ie=ne.document&&ne.document.childNodes,oe=Int8Array;function ae(){return/^\s*function\s*([^(]*)/i}var ce=/^\s*function\s*([^(]*)/i;B(ae,"REGEXP",ce);var ue=Array.isArray?Array.isArray:function(e){return"[object Array]"===z(e)};function se(e){return null!==e&&"object"==typeof e}function le(e){var r,t,n,i;if(("Object"===(t=z(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=ce.exec(n.toString()))return r[1]}return se(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}B(se,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!ue(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(se));var fe="function"==typeof Q||"object"==typeof oe||"function"==typeof ie?function(e){return le(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?le(e).toLowerCase():r};function pe(e){return"function"===fe(e)}var ge=Math.floor;function he(e){return ge(e)===e}var de=9007199254740991;function ye(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&he(e.length)&&e.length>=0&&e.length<=de}function be(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}var ve,me=Number.POSITIVE_INFINITY,we=Object,je=Object.getPrototypeOf;ve=pe(Object.getPrototypeOf)?je:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===z(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var _e=ve,Ee=Object.prototype;function Oe(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!ue(e)}(e)&&(r=function(e){return null==e?null:(e=we(e),_e(e))}(e),!r||!W(e,"constructor")&&W(r,"constructor")&&pe(r.constructor)&&"[object Function]"===z(r.constructor)&&W(r,"isPrototypeOf")&&pe(r.isPrototypeOf)&&(r===Ee||function(e){var r;for(r in e)if(!W(e,r))return!1;return!0}(e)))}function Te(e){return"number"==typeof e}var Se=Number,Ae=Se.prototype.toString,Pe=M();function ke(e){return"object"==typeof e&&(e instanceof Se||(Pe?function(e){try{return Ae.call(e),!0}catch(e){return!1}}(e):"[object Number]"===z(e)))}function xe(e){return Te(e)||ke(e)}B(xe,"isPrimitive",Te),B(xe,"isObject",ke);var Ie=Se.NEGATIVE_INFINITY;function Ve(e){return e<me&&e>Ie&&he(e)}function Fe(e){return Te(e)&&Ve(e)}function Ce(e){return ke(e)&&Ve(e.valueOf())}function Ne(e){return Fe(e)||Ce(e)}function $e(e){return Fe(e)&&e>0}function Re(e){return Ce(e)&&e.valueOf()>0}function Be(e){return $e(e)||Re(e)}function Qe(e){return e!=e}function Ge(e){return Te(e)&&Qe(e)}function Le(e){return ke(e)&&Qe(e.valueOf())}function Me(e){return Ge(e)||Le(e)}function Ze(e){return"string"==typeof e}B(Ne,"isPrimitive",Fe),B(Ne,"isObject",Ce),B(Be,"isPrimitive",$e),B(Be,"isObject",Re),B(Me,"isPrimitive",Ge),B(Me,"isObject",Le);var Ue=String.prototype.valueOf,We=M();function Xe(e){return"object"==typeof e&&(e instanceof String||(We?function(e){try{return Ue.call(e),!0}catch(e){return!1}}(e):"[object String]"===z(e)))}function qe(e){return Ze(e)||Xe(e)}B(qe,"isPrimitive",Ze),B(qe,"isObject",Xe);var ze=["values","indices","*"];function Ye(e,r){return Oe(r)?(W(r,"thisArg")&&(e.thisArg=r.thisArg),W(r,"series")&&(e.series=r.series,!G(e.series))?new TypeError(be("1Qt2o","series",e.series)):W(r,"limit")&&(e.limit=r.limit,!$e(e.limit))?new TypeError(be("1Qt3P","limit",e.limit)):W(r,"returns")&&(e.returns=r.returns,-1===function(e,r,t){var n,i;if(!ye(e)&&!Ze(e))throw new TypeError(k("invalid argument. First argument must be an array-like object. Value: `%s`.",e));if(0===(n=e.length))return-1;if(3===arguments.length){if(!Fe(t))throw new TypeError(k("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(Me(r)){for(;i<n;i++)if(Me(e[i]))return i}else for(;i<n;i++)if(e[i]===r)return i;return-1}(ze,e.returns))?new TypeError(be("1Qt4S","returns",ze.join('", "'),e.returns)):null):new TypeError(be("1Qt2V",r))}function De(e){if(e.__esModule)return e;var r=e.default;if("function"==typeof r){var t=function e(){return this instanceof e?Reflect.construct(r,arguments,this.constructor):r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}var Je=De(Object.freeze({__proto__:null,default:()=>()=>{}}))("bifurcate-by-async:limit");function He(e,r){var t,n,i;if(t={},arguments.length>1){if(n=Ye(t,e))throw n;i=r}else i=e;if(!pe(i))throw new TypeError(be("1Qt3q",i));return t.series?t.limit=1:t.limit||(t.limit=me),function(e,r){if(!ye(e))throw new TypeError(be("1QtAh",e));if(!pe(r))throw new TypeError(be("1Qt3q",r));return function(e,r,t,n){var i,o,a,c,u,s,l,f;if(u=e.length,Je("Collection length: %d",u),l=[],0===u)return Je("Finished processing a collection."),n(null,l);for(l.push([],[]),c=u<r.limit?u:r.limit,Je("Concurrency limit: %d",c),Je("Number of arguments: %d",t.length),i=u-1,o=0,s=-1,f=0;f<c;f++)s<i&&p();function p(){var n,i;function o(e,t){if(!a){if(e)return a=!0,g(e);Je("Collection element %d group: %s.",i,t?"0":"1"),"indices"===r.returns?t?l[0].push(i):l[1].push(i):"*"===r.returns?t?l[0].push([i,n]):l[1].push([i,n]):t?l[0].push(n):l[1].push(n),g()}}n=e[i=s+=1],Je("Collection element %d: %s.",i,JSON.stringify(n)),2===t.length?t.call(r.thisArg,n,o):3===t.length?t.call(r.thisArg,n,i,o):t.call(r.thisArg,n,i,e,o)}function g(e){return e?(Je("Encountered an error: %s",e.message),n(e)):(Je("Processed %d of %d collection elements.",o+=1,u),s<i?p():o===u?(Je("Finished processing a collection."),n(null,l)):void 0)}}(e,t,i,(function(e,t){if(e)return r(e);r(null,t)}))}}function Ke(e,r,t,n){if(arguments.length<4)return He(r)(e,t);He(r,t)(e,n)}return B(Ke,"factory",He),Ke},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).bifurcateByAsync=r();
//# sourceMappingURL=browser.js.map
