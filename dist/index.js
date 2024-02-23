"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var i=t(function(h,s){
var o=require('@stdlib/stats-base-nanvariancepn/dist'),x=require('@stdlib/math-base-special-sqrt/dist');function y(e,r,n,a){return x(o(e,r,n,a))}s.exports=y
});var v=t(function(j,u){
var f=require('@stdlib/stats-base-nanvariancepn/dist').ndarray,l=require('@stdlib/math-base-special-sqrt/dist');function m(e,r,n,a,d){return l(f(e,r,n,a,d))}u.exports=m
});var c=t(function(k,p){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=i(),R=v();O(q,"ndarray",R);p.exports=q
});var b=c();module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
