// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(e){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,i=n.__defineSetter__,u=n.__lookupGetter__,f=n.__lookupSetter__,l=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var l,c,p,_;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(e,r)||f.call(e,r)?(l=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=l):e[r]=t.value),p="get"in t,_="set"in t,c&&(p||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&a&&a.call(e,r,t.get),_&&i&&i.call(e,r,t.set),e};function c(e,r,t){l(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var p=Math.floor;function _(e,r,t,n,o){var a,i,u,f,l,c,d,s,y,b,v,j,N,g;if(a=o,e<8){for(v=0,j=0,g=0;g<e;g++)(N=t[a])==N&&(v+=N,j+=1),a+=n;return r[0]+=v,r[1]+=j,r}if(e<=128){for(i=0,u=0,f=0,l=0,c=0,d=0,s=0,y=0,j=0,b=e%8,g=0;g<e-b;g+=8)(N=t[a])==N&&(i+=N,j+=1),(N=t[a+=n])==N&&(u+=N,j+=1),(N=t[a+=n])==N&&(f+=N,j+=1),(N=t[a+=n])==N&&(l+=N,j+=1),(N=t[a+=n])==N&&(c+=N,j+=1),(N=t[a+=n])==N&&(d+=N,j+=1),(N=t[a+=n])==N&&(s+=N,j+=1),(N=t[a+=n])==N&&(y+=N,j+=1),a+=n;for(v=i+u+(f+l)+(c+d+(s+y));g<e;g++)(N=t[a])==N&&(v+=N,j+=1),a+=n;return r[0]+=v,r[1]+=j,r}return j=p(e/2),_(j-=j%8,r,t,n,a)+_(e-j,r,t,n,a+j*n)}var d=[0,0];function s(e,r,t,n){var o,a,i,u,f,l,c,p,s;if(e<=0)return NaN;if(1===e||0===n)return(c=t[0])==c&&e-r>0?0:NaN;if(a=n<0?(1-e)*n:0,d[0]=0,d[1]=0,_(e,d,t,n,a),(u=(p=d[1])-r)<=0)return NaN;for(o=d[0]/p,i=0,f=0,s=0;s<e;s++)(c=t[a])==c&&(i+=(l=c-o)*l,f+=l),a+=n;return i/u-f/p*(f/u)}var y=[0,0];c(s,"ndarray",(function(e,r,t,n,o){var a,i,u,f,l,c,p,d,s;if(e<=0)return NaN;if(1===e||0===n)return(p=t[o])==p&&e-r>0?0:NaN;if(y[0]=0,y[1]=0,_(e,y,t,n,o),(f=(d=y[1])-r)<=0)return NaN;for(a=y[0]/d,i=o,u=0,l=0,s=0;s<e;s++)(p=t[i])==p&&(u+=(c=p-a)*c,l+=c),i+=n;return u/f-l/d*(l/f)}));const{ndarray:b}=s;var v=Math.sqrt;function j(e,r,t,n){return v(s(e,r,t,n))}function N(e,r,t,n,o){return v(b(e,r,t,n,o))}c(j,"ndarray",N),e.default=j,e.ndarray=N,Object.defineProperty(e,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).nanstdevpn={});
//# sourceMappingURL=index.js.map
