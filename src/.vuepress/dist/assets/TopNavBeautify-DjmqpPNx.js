import{j as p,v as f,a1 as u,C as _,r as g,o as v,i as h,f as E,a as b}from"./app-B0StrNFs.js";import{_ as C}from"./plugin-vue_export-helper-DlAUqK2U.js";const L=p({__name:"TopNavBeautify",setup(d,{expose:t}){t();const s=()=>{o()},o=()=>{const l=document.getElementsByClassName("theme-container");if(l.length<1)return null;const e=l[0],a=document.getElementsByClassName("vp-blog-hero");let n=null;a.length>0&&(n=a[0]),n?e.classList.add("mo7-blog-hero"):e.classList.remove("mo7-blog-hero");const c=document.documentElement.scrollTop;c<60?e.classList.add("mo7-scroll-top"):e.classList.remove("mo7-scroll-top"),n&&(c<n.clientHeight-30?e.classList.add("mo7-scroll-blog-hero-inner"):e.classList.remove("mo7-scroll-blog-hero-inner"));const i=document.getElementsByClassName("vp-toggle-sidebar-button");if(i.length>0){const m=i[0];m.removeEventListener("click",s),m.addEventListener("click",s)}};f(()=>{u(()=>{o(),window.removeEventListener("scroll",()=>{}),window.addEventListener("scroll",()=>{o()})}),_().afterEach(()=>{u(()=>{setTimeout(()=>{o()},50)})})});const r={CheckSidebarOpen:s,CheckScrollTopClass:o};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}});function y(d,t,s,o,r,l){const e=g("ClientOnly");return v(),h(e,null,{default:E(()=>t[0]||(t[0]=[b("div",{class:"none"},null,-1)])),_:1})}const k=C(L,[["render",y],["__file","TopNavBeautify.vue"]]);export{k as default};
