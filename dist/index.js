"use strict";var i=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var t=i(function(R,s){
var c=require('@stdlib/stats-base-nanvariancepn/dist').ndarray,o=require('@stdlib/math-base-special-sqrt/dist');function p(e,r,n,a,d){return o(c(e,r,n,a,d))}s.exports=p
});var v=i(function(b,u){
var y=require('@stdlib/strided-base-stride2offset/dist'),f=t();function x(e,r,n,a){return f(e,r,n,a,y(e,a))}u.exports=x
});var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=v(),m=t();l(q,"ndarray",m);module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
