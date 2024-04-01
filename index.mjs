// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.1-esm/index.mjs";import{isPrimitive as l}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.2.1-esm/index.mjs";import{isPrimitive as u}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.2.1-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-index-of@v0.2.1-esm/index.mjs";var d=["values","indices","*"];function m(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var r=function e(){return this instanceof e?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var s=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,s.get?s:{enumerable:!0,get:function(){return e[t]}})})),r}var f=m(Object.freeze({__proto__:null,default:()=>()=>{}}))("bifurcate-by-async:limit");function p(e,m){var p,h,a;if(p={},arguments.length>1){if(h=function(e,t){return n(t)?(o(t,"thisArg")&&(e.thisArg=t.thisArg),o(t,"series")&&(e.series=t.series,!l(e.series))?new TypeError(s("1Qt2o","series",e.series)):o(t,"limit")&&(e.limit=t.limit,!u(e.limit))?new TypeError(s("1Qt3P","limit",e.limit)):o(t,"returns")&&(e.returns=t.returns,-1===c(d,e.returns))?new TypeError(s("1Qt4S","returns",d.join('", "'),e.returns)):null):new TypeError(s("1Qt2V",t))}(p,e),h)throw h;a=m}else a=e;if(!t(a))throw new TypeError(s("1Qt3q",a));return p.series?p.limit=1:p.limit||(p.limit=i),function(e,i){if(!r(e))throw new TypeError(s("1QtAh",e));if(!t(i))throw new TypeError(s("1Qt3q",i));return function(e,t,r,s){var i,n,o,l,u,c,d,m;if(u=e.length,f("Collection length: %d",u),d=[],0===u)return f("Finished processing a collection."),s(null,d);for(d.push([],[]),l=u<t.limit?u:t.limit,f("Concurrency limit: %d",l),f("Number of arguments: %d",r.length),i=u-1,n=0,c=-1,m=0;m<l;m++)c<i&&p();function p(){var s,i;function n(e,r){if(!o){if(e)return o=!0,h(e);f("Collection element %d group: %s.",i,r?"0":"1"),"indices"===t.returns?r?d[0].push(i):d[1].push(i):"*"===t.returns?r?d[0].push([i,s]):d[1].push([i,s]):r?d[0].push(s):d[1].push(s),h()}}s=e[i=c+=1],f("Collection element %d: %s.",i,JSON.stringify(s)),2===r.length?r.call(t.thisArg,s,n):3===r.length?r.call(t.thisArg,s,i,n):r.call(t.thisArg,s,i,e,n)}function h(e){return e?(f("Encountered an error: %s",e.message),s(e)):(f("Processed %d of %d collection elements.",n+=1,u),c<i?p():n===u?(f("Finished processing a collection."),s(null,d)):void 0)}}(e,p,a,(function(e,t){if(e)return i(e);i(null,t)}))}}function h(e,t,r,s){if(arguments.length<4)return p(t)(e,r);p(t,r)(e,s)}e(h,"factory",p);export{h as default,p as factory};
//# sourceMappingURL=index.mjs.map