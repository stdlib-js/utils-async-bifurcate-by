// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.1.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.1-esm/index.mjs";import{isPrimitive as l}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.1.1-esm/index.mjs";import{isPrimitive as u}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-index-of@v0.1.0-esm/index.mjs";var a=["values","indices","*"];function p(e,t){return s(t)?(o(t,"thisArg")&&(e.thisArg=t.thisArg),o(t,"series")&&(e.series=t.series,!l(e.series))?new TypeError(n("invalid option. `%s` option must be a boolean. Option: `%s`.","series",e.series)):o(t,"limit")&&(e.limit=t.limit,!u(e.limit))?new TypeError(n("invalid option. `%s` option must be a positive integer. Option: `%s`.","limit",e.limit)):o(t,"returns")&&(e.returns=t.returns,-1===m(a,e.returns))?new TypeError(n('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"returns",a.join('", "'),e.returns)):null):new TypeError(n("invalid argument. Options argument must be an object. Value: `%s`.",t))}function d(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var i=function e(){if(this instanceof e){var i=[null];i.push.apply(i,arguments);var n=Function.bind.apply(t,i);return new n}return t.apply(this,arguments)};i.prototype=t.prototype}else i={};return Object.defineProperty(i,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(i,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})})),i}var c=d(Object.freeze({__proto__:null,default:()=>()=>{}}))("bifurcate-by-async:limit");function f(e,t,i,n){var r,s,o,l,u,m,a,p;if(u=e.length,c("Collection length: %d",u),a=[],0===u)return c("Finished processing a collection."),n(null,a);for(a.push([],[]),l=u<t.limit?u:t.limit,c("Concurrency limit: %d",l),c("Number of arguments: %d",i.length),r=u-1,s=0,m=-1,p=0;p<l;p++)m<r&&d();function d(){var n,r;function s(e,i){if(!o){if(e)return o=!0,f(e);c("Collection element %d group: %s.",r,i?"0":"1"),"indices"===t.returns?i?a[0].push(r):a[1].push(r):"*"===t.returns?i?a[0].push([r,n]):a[1].push([r,n]):i?a[0].push(n):a[1].push(n),f()}}n=e[r=m+=1],c("Collection element %d: %s.",r,JSON.stringify(n)),2===i.length?i.call(t.thisArg,n,s):3===i.length?i.call(t.thisArg,n,r,s):i.call(t.thisArg,n,r,e,s)}function f(e){return e?(c("Encountered an error: %s",e.message),n(e)):(c("Processed %d of %d collection elements.",s+=1,u),m<r?d():s===u?(c("Finished processing a collection."),n(null,a)):void 0)}}function h(e,s){var o,l,u;if(o={},arguments.length>1){if(l=p(o,e))throw l;u=s}else u=e;if(!t(u))throw new TypeError(n("invalid argument. Last argument must be a function. Value: `%s`.",u));return o.series?o.limit=1:o.limit||(o.limit=r),m;function m(e,r){if(!i(e))throw new TypeError(n("invalid argument. First argument must be a collection. Value: `%s`.",e));if(!t(r))throw new TypeError(n("invalid argument. Last argument must be a function. Value: `%s`.",r));return f(e,o,u,(function(e,t){if(e)return r(e);r(null,t)}))}}function g(e,t,i,n){if(arguments.length<4)return h(t)(e,i);h(t,i)(e,n)}e(g,"factory",h);export{g as default,h as factory};
//# sourceMappingURL=index.mjs.map
