// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import{isPrimitive as l}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import{isPrimitive as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-index-of@esm/index.mjs";var h=["values","indices","*"];function u(r,s){return n(s)?(o(s,"thisArg")&&(r.thisArg=s.thisArg),o(s,"series")&&(r.series=s.series,!l(r.series))?new TypeError(e("0iI30","series",r.series)):o(s,"limit")&&(r.limit=s.limit,!m(r.limit))?new TypeError(e("0iI3b","limit",r.limit)):o(s,"returns")&&(r.returns=s.returns,-1===d(h,r.returns))?new TypeError(e("0iI3t","returns",h.join('", "'),r.returns)):null):new TypeError(e("0iI2h",s))}var p=()=>{};function f(r,s,t,e){var i,n,o,l,m,d,h,u;if(m=r.length,h=[],0===m)return e(null,h);for(h.push([],[]),l=m<s.limit?m:s.limit,p("Number of arguments: %d",t.length),i=m-1,n=0,d=-1,u=0;u<l;u++)d<i&&f();function f(){var e,i;function n(r,t){if(!o){if(r)return o=!0,c(r);"indices"===s.returns?t?h[0].push(i):h[1].push(i):"*"===s.returns?t?h[0].push([i,e]):h[1].push([i,e]):t?h[0].push(e):h[1].push(e),c()}}e=r[i=d+=1],p("Collection element %d: %s.",i,JSON.stringify(e)),2===t.length?t.call(s.thisArg,e,n):3===t.length?t.call(s.thisArg,e,i,n):t.call(s.thisArg,e,i,r,n)}function c(r){return r?(p("Encountered an error: %s",r.message),e(r)):(n+=1,d<i?f():n===m?e(null,h):void 0)}}function c(r,n){var o,l,m;if(o={},arguments.length>1){if(l=u(o,r))throw l;m=n}else m=r;if(!s(m))throw new TypeError(e("0iI43",m));return o.series?o.limit=1:o.limit||(o.limit=i),d;function d(r,i){if(!t(r))throw new TypeError(e("0iIBO",r));if(!s(i))throw new TypeError(e("0iI43",i));return f(r,o,m,(function(r,s){if(r)return i(r);i(null,s)}))}}function j(r,s,t,e){if(arguments.length<4)return c(s)(r,t);c(s,t)(r,e)}r(j,"factory",c);export{j as default,c as factory};
//# sourceMappingURL=index.mjs.map
