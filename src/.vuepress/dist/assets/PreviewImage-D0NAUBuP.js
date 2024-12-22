import O from"./MyIcon-Dn35PnRG.js";import{j,I as M,v as R,a1 as v,C as q,r as U,o as b,i as G,f as J,c as D,a as l,m as F,d as a,A as y,t as p,h as T}from"./app-B0StrNFs.js";import{_ as K}from"./plugin-vue_export-helper-DlAUqK2U.js";const Q=j({__name:"PreviewImage",setup(V,{expose:P}){P();let c=M([]),t=M(!1),r=M(0);function k(){t.value=!1,document.body.style.overflow="auto"}function _(){const e=document.getElementById("Mo7PreviewBox-img");let n=e.clientWidth,o=e.clientHeight;n=n*1.1,e.style.width=n+"px",o=o*1.1,e.style.height=o+"px"}function H(){const e=document.getElementById("Mo7PreviewBox-img");let n=e.clientWidth,o=e.clientHeight;n=n*.9,e.style.width=n+"px",o=o*.9,e.style.height=o+"px"}function z(){const e=document.getElementById("Mo7PreviewBox-img");window.open(e.getAttribute("src"))}function L(){r.value>0&&r.value--,v(()=>{x()})}function N(){r.value<c.value.length-1&&r.value++,v(()=>{x()})}function x(){const e=document.getElementById("Mo7PreviewBox"),n=e.clientWidth,o=e.clientHeight,i=document.getElementById("Mo7PreviewBox-img");i.style.width=n*.9+"px",i.style.height="",i.style.maxWidth="",i.style.maxHeight="",i.style.left="",i.style.top="",i.style.cursor="",i.clientHeight>o&&(i.style.width="",i.style.height=o*.9+"px")}function B(e){const o=e.target.getAttribute("src");let i=r.value;for(let s=0;s<c.value.length;s++)if(c.value[s].src===o){i=s;break}r.value=i,t.value=!0,document.body.style.overflow="hidden",v(()=>{x()})}function w(e){console.log("初始化图片预览",e);let n=document.getElementsByClassName("theme-hope-content"),o=null;if(n.length>0&&(o=n[0]),!o)return;const i=o.getElementsByTagName("img"),s=[];for(let m=0;m<i.length;m++){const I=i[m];e==="bind"&&s.push({alt:I.getAttribute("alt"),src:I.getAttribute("src")}),I.removeEventListener("click",B),e==="bind"&&I.addEventListener("click",B)}c.value=s}let u=!1,d=0,g=0,h=0,f=0;function C(e){if(!u)return;const n=e.clientX-d,o=e.clientY-g,i=h+n,s=f+o,m=document.getElementById("Mo7PreviewBox-img");m.style.left=i+"px",m.style.top=s+"px"}function A(){const e=document.getElementById("Mo7PreviewBox-img");e.style.cursor="default",u=!1,d=0,g=0,h=0,f=0}function E(e){const n=document.getElementById("Mo7PreviewBox-img");n.style.cursor="move",u=!0,console.log("按下",e),d=e.clientX,g=e.clientY;let o;window.getComputedStyle?o=window.getComputedStyle(n,null):o=n.currentStyle,h=parseInt(o.left),f=parseInt(o.top)}function W(e){e.type==="touchmove"&&e.touches.length==1&&C(e.touches[0]),e.type==="mousemove"&&C(e)}function X(e){A()}function Y(e){e.type==="touchstart"&&e.touches.length==1&&E(e.touches[0]),e.type==="mousedown"&&E(e)}R(()=>{v(()=>{w("bind")});const e=q();e.beforeEach((n,o)=>{n.path!==o.path&&w("unbind")}),e.afterEach((n,o)=>{n.path!==o.path&&v(()=>{setTimeout(()=>{w("bind")},1e3)})})});const S={get ImageArr(){return c},set ImageArr(e){c=e},get ShowPreviewBox(){return t},set ShowPreviewBox(e){t=e},get CurrentImgIdx(){return r},set CurrentImgIdx(e){r=e},ClosePreviewBox:k,zoomFunc:_,shrinkFunc:H,fullscreenFunc:z,leftFunc:L,rightFunc:N,ImageBoxReset:x,ImageClick:B,InitPreviewImage:w,get mouseStatus(){return u},set mouseStatus(e){u=e},get mouseDownX(){return d},set mouseDownX(e){d=e},get mouseDownY(){return g},set mouseDownY(e){g=e},get imgElmLeft(){return h},set imgElmLeft(e){h=e},get imgElmTop(){return f},set imgElmTop(e){f=e},Mousemove:C,ImgMouseUp:A,ImgMouseDown:E,on_mousemove:W,on_mouseup:X,on_mousedown:Y,MyIcon:O};return Object.defineProperty(S,"__isScriptSetup",{enumerable:!1,value:!0}),S}}),Z={class:"Mo7PreviewBox-topBar"},$=["href"],ee=["src","alt"],te={class:"Mo7PreviewBox-idxView"},oe={class:"Mo7PreviewBox-idxView-box"},ne={class:"Mo7PreviewBox-idxView-idx"},ie={key:0,class:"Mo7PreviewBox-idxView-alt"};function le(V,P,c,t,r,k){const _=U("ClientOnly");return b(),G(_,null,{default:J(()=>[t.ShowPreviewBox?(b(),D("div",{key:0,id:"Mo7PreviewBox",onMousemove:t.on_mousemove,onTouchmove:t.on_mousemove,onMouseup:t.on_mouseup,onTouchend:t.on_mouseup},[l("div",Z,[l("div",{class:F(["btn",{hide:t.CurrentImgIdx===0}]),onClick:t.leftFunc},[a(t.MyIcon,{class:"icon",name:"xiangzuo"})],2),l("div",{class:F(["btn",{hide:t.CurrentImgIdx===t.ImageArr.length-1}]),onClick:t.rightFunc},[a(t.MyIcon,{class:"icon",name:"xiangyou"})],2),l("div",{class:"btn",onClick:y(t.zoomFunc,["stop"])},[a(t.MyIcon,{class:"icon",name:"fangda"})]),l("div",{class:"btn",onClick:y(t.shrinkFunc,["stop"])},[a(t.MyIcon,{class:"icon",name:"suoxiao"})]),l("div",{class:"btn",onClick:y(t.fullscreenFunc,["stop"])},[a(t.MyIcon,{class:"icon",name:"quanping"})]),l("a",{class:"btn",href:t.ImageArr[t.CurrentImgIdx].src,download:""},[a(t.MyIcon,{class:"icon",name:"xiazai"})],8,$),l("div",{class:"btn",onClick:y(t.ClosePreviewBox,["stop"])},[a(t.MyIcon,{class:"icon",name:"guanbi"})])]),l("img",{id:"Mo7PreviewBox-img",onMousedown:t.on_mousedown,onTouchstart:t.on_mousedown,src:t.ImageArr[t.CurrentImgIdx].src,alt:t.ImageArr[t.CurrentImgIdx].alt,srcset:""},null,40,ee),l("div",te,[l("div",oe,[l("div",ne,p(t.CurrentImgIdx+1)+"/"+p(t.ImageArr.length),1),t.ImageArr[t.CurrentImgIdx].alt?(b(),D("div",ie,p(t.ImageArr[t.CurrentImgIdx].alt),1)):T("v-if",!0)])])],32)):T("v-if",!0)]),_:1})}const me=K(Q,[["render",le],["__file","PreviewImage.vue"]]);export{me as default};
