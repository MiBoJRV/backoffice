import{r as c,a as k}from"./react-e4f9e9db.js";import{R as O,N as _,u as x,a as F,b as P,c as B}from"./react-router-1e2a8358.js";import{c as j,s as K,b as R}from"./@remix-run-671dfa1a.js";/**
 * React Router DOM v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},b.apply(this,arguments)}function N(e,t){if(e==null)return{};var a={},n=Object.keys(e),s,i;for(i=0;i<n.length;i++)s=n[i],!(t.indexOf(s)>=0)&&(a[s]=e[s]);return a}function I(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function A(e,t){return e.button===0&&(!t||t==="_self")&&!I(e)}const W=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],z="startTransition",y=k[z];function J(e){let{basename:t,children:a,future:n,window:s}=e,i=c.useRef();i.current==null&&(i.current=j({window:s,v5Compat:!0}));let o=i.current,[u,l]=c.useState({action:o.action,location:o.location}),{v7_startTransition:r}=n||{},f=c.useCallback(d=>{r&&y?y(()=>l(d)):l(d)},[l,r]);return c.useLayoutEffect(()=>o.listen(f),[o,f]),c.createElement(O,{basename:t,children:a,location:u.location,navigationType:u.action,navigator:o})}const V=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",G=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Q=c.forwardRef(function(t,a){let{onClick:n,relative:s,reloadDocument:i,replace:o,state:u,target:l,to:r,preventScrollReset:f,unstable_viewTransition:d}=t,m=N(t,W),{basename:U}=c.useContext(_),v,w=!1;if(typeof r=="string"&&G.test(r)&&(v=r,V))try{let h=new URL(window.location.href),p=r.startsWith("//")?new URL(h.protocol+r):new URL(r),g=K(p.pathname,U);p.origin===h.origin&&g!=null?r=g+p.search+p.hash:w=!0}catch{}let L=x(r,{relative:s}),C=M(r,{replace:o,state:u,target:l,preventScrollReset:f,relative:s,unstable_viewTransition:d});function E(h){n&&n(h),h.defaultPrevented||C(h)}return c.createElement("a",b({},m,{href:v||L,onClick:w||i?n:E,ref:a,target:l}))});var S;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(S||(S={}));var T;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(T||(T={}));function M(e,t){let{target:a,replace:n,state:s,preventScrollReset:i,relative:o,unstable_viewTransition:u}=t===void 0?{}:t,l=F(),r=P(),f=B(e,{relative:o});return c.useCallback(d=>{if(A(d,a)){d.preventDefault();let m=n!==void 0?n:R(r)===R(f);l(e,{replace:m,state:s,preventScrollReset:i,relative:o,unstable_viewTransition:u})}},[r,l,f,n,s,a,e,i,o,u])}export{J as B,Q as L};
