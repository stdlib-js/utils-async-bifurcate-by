"use strict";var h=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var C=h(function(_,P){
var L=require('@stdlib/assert-is-plain-object/dist'),y=require('@stdlib/assert-has-own-property/dist'),J=require('@stdlib/assert-is-boolean/dist').isPrimitive,R=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,S=require('@stdlib/utils-index-of/dist'),q=require('@stdlib/error-tools-fmtprodmsg/dist'),T=["values","indices","*"];function z(e,r){return L(r)?(y(r,"thisArg")&&(e.thisArg=r.thisArg),y(r,"series")&&(e.series=r.series,!J(e.series))?new TypeError(q('1Qt2o',"series",e.series)):y(r,"limit")&&(e.limit=r.limit,!R(e.limit))?new TypeError(q('1Qt3P',"limit",e.limit)):y(r,"returns")&&(e.returns=r.returns,S(T,e.returns)===-1)?new TypeError(q('1Qt4S',"returns",T.join('", "'),e.returns)):null):new TypeError(q('1Qt2V',r));}P.exports=z
});var j=h(function($,F){
var D=require("debug"),v=D("bifurcate-by-async:limit");function G(e,r,i,a){var l,c,g,f,u,m,n,b;if(u=e.length,v("Collection length: %d",u),n=[],u===0)return v("Finished processing a collection."),a(null,n);for(n.push([],[]),u<r.limit?f=u:f=r.limit,v("Concurrency limit: %d",f),v("Number of arguments: %d",i.length),l=u-1,c=0,m=-1,b=0;b<f;b++)m<l&&O();function O(){var t,s;m+=1,s=m,t=e[s],v("Collection element %d: %s.",s,JSON.stringify(t)),i.length===2?i.call(r.thisArg,t,d):i.length===3?i.call(r.thisArg,t,s,d):i.call(r.thisArg,t,s,e,d);function d(E,o){if(!g){if(E)return g=!0,A(E);v("Collection element %d group: %s.",s,o?"0":"1"),r.returns==="indices"?o?n[0].push(s):n[1].push(s):r.returns==="*"?o?n[0].push([s,t]):n[1].push([s,t]):o?n[0].push(t):n[1].push(t),A()}}}function A(t){if(t)return v("Encountered an error: %s",t.message),a(t);if(c+=1,v("Processed %d of %d collection elements.",c,u),m<l)return O();if(c===u)return v("Finished processing a collection."),a(null,n)}}F.exports=G
});var x=h(function(rr,p){
var V=require('@stdlib/assert-is-function/dist'),H=require('@stdlib/assert-is-collection/dist'),w=require('@stdlib/error-tools-fmtprodmsg/dist'),K=require('@stdlib/constants-float64-pinf/dist'),M=C(),Q=j();function U(e,r){var i,a,l;if(i={},arguments.length>1){if(a=M(i,e),a)throw a;l=r}else l=e;if(!V(l))throw new TypeError(w('1Qt3q',l));return i.series?i.limit=1:i.limit||(i.limit=K),c;function c(g,f){if(!H(g))throw new TypeError(w('1QtAh',g));if(!V(f))throw new TypeError(w('1Qt3q',f));return Q(g,i,l,u);function u(m,n){if(m)return f(m);f(null,n)}}}p.exports=U
});var N=h(function(er,I){
var B=x();function W(e,r,i,a){if(arguments.length<4)return B(r)(e,i);B(r,i)(e,a)}I.exports=W
});var X=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=N(),Y=x();X(k,"factory",Y);module.exports=k;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
