"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=t(function(h,i){
var o=require('@stdlib/stats-base-nanvariancepn/dist').ndarray,y=require('@stdlib/math-base-special-sqrt/dist');function f(e,r,a,n,c){return y(o(e,r,a,n,c))}i.exports=f
});var v=t(function(j,u){
var x=require('@stdlib/strided-base-stride2offset/dist'),l=s();function m(e,r,a,n){return l(e,r,a,n,x(e,n))}u.exports=m
});var p=t(function(k,d){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=v(),R=s();O(q,"ndarray",R);d.exports=q
});var b=p();module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
