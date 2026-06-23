"use strict";var q=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var s=q(function(f,n){
var d=require('@stdlib/ndarray-base-numel-dimension/dist'),t=require('@stdlib/ndarray-base-stride/dist'),u=require('@stdlib/ndarray-base-offset/dist'),v=require('@stdlib/ndarray-base-data-buffer/dist'),c=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),l=require('@stdlib/blas-base-zaxpy/dist').ndarray;function o(a){var r=c(a[2]),e=a[0],i=a[1];return l(d(e,0),r,v(e),t(e,0),u(e),v(i),t(i,0),u(i)),i}n.exports=o
});var p=s();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
