import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as n,a as e,h as r}from"./app-B0StrNFs.js";const d={data(){return{isLoading:!1}},mounted(){sessionStorage.getItem("hasShownLoader")||(this.isLoading=!0,setTimeout(()=>{this.isLoading=!1,sessionStorage.setItem("hasShownLoader","true")},2e3))}},c={key:0,class:"container"};function f(o,s,m,_,t,l){return t.isLoading?(i(),n("div",c,s[0]||(s[0]=[e("div",{class:"loading"},[e("i"),e("i"),e("i"),e("i")],-1),e("div",{class:"welcome-text"}," 欢迎来到我的文档 ",-1)]))):r("v-if",!0)}const p=a(d,[["render",f],["__scopeId","data-v-f770a082"],["__file","jz.vue"]]);export{p as default};