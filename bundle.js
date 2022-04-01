// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).nanstdevpn=e()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=function(){try{return r({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,i=n.__defineSetter__,u=n.__lookupGetter__,f=n.__lookupSetter__;var l=t,c=function(r,e,t){var l,c,p,_;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(r,e)||f.call(r,e)?(l=r.__proto__,r.__proto__=n,delete r[e],r[e]=t.value,r.__proto__=l):r[e]=t.value),p="get"in t,_="set"in t,c&&(p||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&a&&a.call(r,e,t.get),_&&i&&i.call(r,e,t.set),r},p=e()?l:c;var _=function(r,e,t){p(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},d=Math.floor;var v=function r(e,t,n,o,a){var i,u,f,l,c,p,_,v,y,s,b,N,j,m;if(i=a,e<8){for(b=0,N=0,m=0;m<e;m++)(j=n[i])==j&&(b+=j,N+=1),i+=o;return t[0]+=b,t[1]+=N,t}if(e<=128){for(u=0,f=0,l=0,c=0,p=0,_=0,v=0,y=0,N=0,s=e%8,m=0;m<e-s;m+=8)(j=n[i])==j&&(u+=j,N+=1),(j=n[i+=o])==j&&(f+=j,N+=1),(j=n[i+=o])==j&&(l+=j,N+=1),(j=n[i+=o])==j&&(c+=j,N+=1),(j=n[i+=o])==j&&(p+=j,N+=1),(j=n[i+=o])==j&&(_+=j,N+=1),(j=n[i+=o])==j&&(v+=j,N+=1),(j=n[i+=o])==j&&(y+=j,N+=1),i+=o;for(b=u+f+(l+c)+(p+_+(v+y));m<e;m++)(j=n[i])==j&&(b+=j,N+=1),i+=o;return t[0]+=b,t[1]+=N,t}return N=d(e/2),r(N-=N%8,t,n,o,i)+r(e-N,t,n,o,i+N*o)},y=v,s=[0,0];var b=v,N=[0,0];var j=function(r,e,t,n){var o,a,i,u,f,l,c,p,_;if(r<=0)return NaN;if(1===r||0===n)return(c=t[0])==c&&r-e>0?0:NaN;if(a=n<0?(1-r)*n:0,s[0]=0,s[1]=0,y(r,s,t,n,a),(u=(p=s[1])-e)<=0)return NaN;for(o=s[0]/p,i=0,f=0,_=0;_<r;_++)(c=t[a])==c&&(i+=(l=c-o)*l,f+=l),a+=n;return i/u-f/p*(f/u)};_(j,"ndarray",(function(r,e,t,n,o){var a,i,u,f,l,c,p,_,d;if(r<=0)return NaN;if(1===r||0===n)return(p=t[o])==p&&r-e>0?0:NaN;if(N[0]=0,N[1]=0,b(r,N,t,n,o),(f=(_=N[1])-e)<=0)return NaN;for(a=N[0]/_,i=o,u=0,l=0,d=0;d<r;d++)(p=t[i])==p&&(u+=(c=p-a)*c,l+=c),i+=n;return u/f-l/_*(l/f)}));var m=j,g=Math.sqrt,h=m,w=g;var O=m.ndarray,P=g;var T=function(r,e,t,n){return w(h(r,e,t,n))};return _(T,"ndarray",(function(r,e,t,n,o){return P(O(r,e,t,n,o))})),T}));
//# sourceMappingURL=bundle.js.map
