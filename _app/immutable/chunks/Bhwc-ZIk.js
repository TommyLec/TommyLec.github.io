import{S as A,z as V,A as J,B as g,C as Q,j as P,U as c,D as R,F as N,G as F,H as W,I as X,p as k,b as ee,h as C,J as re,E as ne,K as ae,L as ie,M as te,N as p,O as q,a as K,P as M,c as se,Q as U,R as fe,T as ue,V as z,W as le,X as _e,g as j,Y as de,Z as ve,o as ce,_ as oe,$ as be,a0 as he,a1 as G,a2 as Pe,l as H,a3 as ye,a4 as ge}from"./CPaQajlR.js";function I(e,n=null,o){if(typeof e!="object"||e===null||A in e)return e;const d=X(e);if(d!==V&&d!==J)return e;var s=new Map,_=k(e),b=g(0);_&&s.set("length",g(e.length));var y;return new Proxy(e,{defineProperty(f,r,a){(!("value"in a)||a.configurable===!1||a.enumerable===!1||a.writable===!1)&&W();var t=s.get(r);return t===void 0?(t=g(a.value),s.set(r,t)):R(t,I(a.value,y)),!0},deleteProperty(f,r){var a=s.get(r);if(a===void 0)r in f&&s.set(r,g(c));else{if(_&&typeof r=="string"){var t=s.get("length"),i=Number(r);Number.isInteger(i)&&i<t.v&&R(t,i)}R(a,c),Z(b)}return!0},get(f,r,a){var v;if(r===A)return e;var t=s.get(r),i=r in f;if(t===void 0&&(!i||(v=N(f,r))!=null&&v.writable)&&(t=g(I(i?f[r]:c,y)),s.set(r,t)),t!==void 0){var u=P(t);return u===c?void 0:u}return Reflect.get(f,r,a)},getOwnPropertyDescriptor(f,r){var a=Reflect.getOwnPropertyDescriptor(f,r);if(a&&"value"in a){var t=s.get(r);t&&(a.value=P(t))}else if(a===void 0){var i=s.get(r),u=i==null?void 0:i.v;if(i!==void 0&&u!==c)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return a},has(f,r){var u;if(r===A)return!0;var a=s.get(r),t=a!==void 0&&a.v!==c||Reflect.has(f,r);if(a!==void 0||F!==null&&(!t||(u=N(f,r))!=null&&u.writable)){a===void 0&&(a=g(t?I(f[r],y):c),s.set(r,a));var i=P(a);if(i===c)return!1}return t},set(f,r,a,t){var w;var i=s.get(r),u=r in f;if(_&&r==="length")for(var v=a;v<i.v;v+=1){var m=s.get(v+"");m!==void 0?R(m,c):v in f&&(m=g(c),s.set(v+"",m))}i===void 0?(!u||(w=N(f,r))!=null&&w.writable)&&(i=g(void 0),R(i,I(a,y)),s.set(r,i)):(u=i.v!==c,R(i,I(a,y)));var h=Reflect.getOwnPropertyDescriptor(f,r);if(h!=null&&h.set&&h.set.call(t,a),!u){if(_&&typeof r=="string"){var S=s.get("length"),O=Number(r);Number.isInteger(O)&&O>=S.v&&R(S,O+1)}Z(b)}return!0},ownKeys(f){P(b);var r=Reflect.ownKeys(f).filter(i=>{var u=s.get(i);return u===void 0||u.v!==c});for(var[a,t]of s)t.v!==c&&!(a in f)&&r.push(a);return r},setPrototypeOf(){Q()}})}function Z(e,n=1){R(e,e.v+n)}function Ie(e,n,o=!1){C&&re();var d=e,s=null,_=null,b=c,y=o?ne:0,f=!1;const r=(t,i=!0)=>{f=!0,a(i,t)},a=(t,i)=>{if(b===(b=t))return;let u=!1;if(C){const v=d.data===ae;!!b===v&&(d=ie(),te(d),p(!1),u=!0)}b?(s?q(s):i&&(s=K(()=>i(d))),_&&M(_,()=>{_=null})):(_?q(_):i&&(_=K(()=>i(d))),s&&M(s,()=>{s=null})),u&&p(!0)};ee(()=>{f=!1,n(r),f||a(null,null)},y),C&&(d=se)}let x=!1;function Re(e){var n=x;try{return x=!1,[e(),x]}finally{x=n}}const me={get(e,n){if(!e.exclude.includes(n))return P(e.version),n in e.special?e.special[n]():e.props[n]},set(e,n,o){return n in e.special||(e.special[n]=we({get[n](){return e.props[n]}},n,z)),e.special[n](o),U(e.version),!0},getOwnPropertyDescriptor(e,n){if(!e.exclude.includes(n)&&n in e.props)return{enumerable:!0,configurable:!0,value:e.props[n]}},deleteProperty(e,n){return e.exclude.includes(n)||(e.exclude.push(n),U(e.version)),!0},has(e,n){return e.exclude.includes(n)?!1:n in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(n=>!e.exclude.includes(n))}};function Se(e,n){return new Proxy({props:e,exclude:n,special:{},version:g(0)},me)}function $(e){for(var n=F,o=F;n!==null&&!(n.f&(be|he));)n=n.parent;try{return G(n),e()}finally{G(o)}}function we(e,n,o,d){var Y;var s=(o&Pe)!==0,_=!ce||(o&oe)!==0,b=(o&de)!==0,y=(o&ye)!==0,f=!1,r;b?[r,f]=Re(()=>e[n]):r=e[n];var a=A in e||ve in e,t=b&&(((Y=N(e,n))==null?void 0:Y.set)??(a&&n in e&&(l=>e[n]=l)))||void 0,i=d,u=!0,v=!1,m=()=>(v=!0,u&&(u=!1,y?i=j(d):i=d),i);r===void 0&&d!==void 0&&(t&&_&&fe(),r=m(),t&&t(r));var h;if(_)h=()=>{var l=e[n];return l===void 0?m():(u=!0,v=!1,l)};else{var S=$(()=>(s?H:ge)(()=>e[n]));S.f|=ue,h=()=>{var l=P(S);return l!==void 0&&(i=void 0),l===void 0?i:l}}if(!(o&z))return h;if(t){var O=e.$$legacy;return function(l,E){return arguments.length>0?((!_||!E||O||f)&&t(E?h():l),l):h()}}var w=!1,B=!1,D=_e(r),T=$(()=>H(()=>{var l=h(),E=P(D);return w?(w=!1,B=!0,E):(B=!1,D.v=l)}));return s||(T.equals=le),function(l,E){if(arguments.length>0){const L=E?P(T):_&&b?I(l):l;return T.equals(L)||(w=!0,R(D,L),v&&i!==void 0&&(i=L),j(()=>P(T))),l}return P(T)}}export{I as a,Ie as i,Se as l,we as p};
