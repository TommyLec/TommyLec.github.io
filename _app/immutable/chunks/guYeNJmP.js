import{a5 as m,a1 as w,a6 as O,G as L,a7 as j,p as C,a8 as W,a9 as k,aa as q,ab as B,ac as H,ad as T,N as b,M as I,J as Y,c as v,ae as G,af as $,ag as z,ah as F,ai as J,aj as U,ak as x,a as K,h as S,q as Q,e as X,v as Z}from"./CPaQajlR.js";import{b as ee}from"./BF2Bh0SQ.js";function ce(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const te=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function le(e){return te.includes(e)}const re={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function de(e){return e=e.toLowerCase(),re[e]??e}const ae=["touchstart","touchmove"];function oe(e){return ae.includes(e)}function ne(e){var t=O,a=L;m(null),w(null);try{return e()}finally{m(t),w(a)}}const V=new Set,N=new Set;function fe(e,t,a,s={}){function i(r){if(s.capture||y.call(t,r),!r.cancelBubble)return ne(()=>a==null?void 0:a.call(this,r))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?W(()=>{t.addEventListener(e,i,s)}):t.addEventListener(e,i,s),i}function _e(e){for(var t=0;t<e.length;t++)V.add(e[t]);for(var a of N)a(e)}function y(e){var R;var t=this,a=t.ownerDocument,s=e.type,i=((R=e.composedPath)==null?void 0:R.call(e))||[],r=i[0]||e.target,l=0,_=e.__root;if(_){var d=i.indexOf(_);if(d!==-1&&(t===document||t===window)){e.__root=t;return}var p=i.indexOf(t);if(p===-1)return;d<=p&&(l=d)}if(r=i[l]||e.target,r!==t){j(e,"currentTarget",{configurable:!0,get(){return r||a}});var E=O,u=L;m(null),w(null);try{for(var o,n=[];r!==null;){var c=r.assignedSlot||r.parentNode||r.host||null;try{var f=r["__"+s];if(f!==void 0&&!r.disabled)if(C(f)){var[M,...P]=f;M.apply(r,[e,...P])}else f.call(r,e)}catch(g){o?n.push(g):o=g}if(e.cancelBubble||c===t||c===null)break;r=c}if(o){for(let g of n)queueMicrotask(()=>{throw g});throw o}}finally{e.__root=t,delete e.currentTarget,m(E),w(u)}}}function pe(e,t){var a=t==null?"":typeof t=="object"?t+"":t;a!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=a,e.nodeValue=a+"")}function ie(e,t){return D(e,t)}function he(e,t){k(),t.intro=t.intro??!1;const a=t.target,s=S,i=v;try{for(var r=q(a);r&&(r.nodeType!==8||r.data!==B);)r=H(r);if(!r)throw T;b(!0),I(r),Y();const l=D(e,{...t,anchor:r});if(v===null||v.nodeType!==8||v.data!==G)throw $(),T;return b(!1),l}catch(l){if(l===T)return t.recover===!1&&z(),k(),F(a),b(!1),ie(e,t);throw l}finally{b(s),I(i)}}const h=new Map;function D(e,{target:t,anchor:a,props:s={},events:i,context:r,intro:l=!0}){k();var _=new Set,d=u=>{for(var o=0;o<u.length;o++){var n=u[o];if(!_.has(n)){_.add(n);var c=oe(n);t.addEventListener(n,y,{passive:c});var f=h.get(n);f===void 0?(document.addEventListener(n,y,{passive:c}),h.set(n,1)):h.set(n,f+1)}}};d(J(V)),N.add(d);var p=void 0,E=U(()=>{var u=a??t.appendChild(x());return K(()=>{if(r){Q({});var o=X;o.c=r}i&&(s.$$events=i),S&&ee(u,null),p=e(u,s)||{},S&&(L.nodes_end=v),r&&Z()}),()=>{var c;for(var o of _){t.removeEventListener(o,y);var n=h.get(o);--n===0?(document.removeEventListener(o,y),h.delete(o)):h.set(o,n)}N.delete(d),u!==a&&((c=u.parentNode)==null||c.removeChild(u))}});return A.set(p,E),p}let A=new WeakMap;function ve(e,t){const a=A.get(e);return a?(A.delete(e),a(t)):Promise.resolve()}export{le as a,fe as c,_e as d,he as h,ce as i,ie as m,de as n,pe as s,ve as u};
