"use strict";var q=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=q(function(f,n){
var d=require('@stdlib/ndarray-base-numel-dimension/dist'),t=require('@stdlib/ndarray-base-stride/dist'),u=require('@stdlib/ndarray-base-offset/dist'),v=require('@stdlib/ndarray-base-data-buffer/dist'),c=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),l=require('@stdlib/blas-base-zaxpy/dist').ndarray;function o(e){var r=c(e[2]),a=e[0],i=e[1];return l(d(a,0),r,v(a),t(a,0),u(a),v(i),t(i,0),u(i)),i}n.exports=o
});var p=s();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
