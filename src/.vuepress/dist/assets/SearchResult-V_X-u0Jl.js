import{B as j,j as ae,C as se,D as _,E as te,P as le,G as ue,H as re,I as F,p as H,J as ie,w as I,K as s,L as ne,R as Y,M as oe,N as ce,O as Ee,Q as ve,S as ye,T as pe,v as de,U as he,V as Ae,W as S,X as Be,Y as me,Z as ge,_ as O,$ as P,a0 as fe}from"./app-B0StrNFs.js";const Re=["/","/portfolio.html","/%E7%9B%AE%E5%BD%95.html","/Minecraft/%E7%9B%AE%E5%BD%95.html","/guide/","/yl/","/yunzai/%E7%9B%AE%E5%BD%95.html","/%E6%88%91%E7%9A%84%E6%9C%BA%E5%99%A8%E4%BA%BA/%E7%9B%AE%E5%BD%95.html","/Minecraft/%E8%AF%B4%E6%98%8E/","/guide/bar/","/guide/bar/baz.html","/guide/for/","/guide/for/ray.html","/yunzai/TRSS/","/yunzai/qs/","/%E6%88%91%E7%9A%84%E6%9C%BA%E5%99%A8%E4%BA%BA/%E6%88%91%E7%9A%84%E6%9C%BA%E5%99%A8%E4%BA%BA/","/%E6%88%91%E7%9A%84%E6%9C%BA%E5%99%A8%E4%BA%BA/%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%8A%9F%E8%83%BD/","/Minecraft/%E5%90%AF%E5%8A%A8%E5%99%A8/%E5%90%AF%E5%8A%A8%E5%99%A8/","/yunzai/TRSS/Windows/","/yunzai/TRSS/liunx/","/yunzai/TRSS/%E5%AE%89%E5%8D%93/","/yunzai/YunzaiJS/YZJS/","/yunzai/%E6%88%91%E7%9A%84%E6%8F%92%E4%BB%B6/plugin/","/yunzai/%E6%88%91%E7%9A%84%E6%8F%92%E4%BB%B6/%E5%8D%95js/","/yunzai/%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98/","/yunzai/%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95/%E7%99%BB%E5%BD%95/","/yunzai/%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95/%E9%97%AE%E9%A2%98/","/yunzai/Yunzai/Miao/linux/","/404.html","/Minecraft/","/yunzai/","/%E6%88%91%E7%9A%84%E6%9C%BA%E5%99%A8%E4%BA%BA/","/Minecraft/%E5%90%AF%E5%8A%A8%E5%99%A8/","/yunzai/YunzaiJS/","/yunzai/%E6%88%91%E7%9A%84%E6%8F%92%E4%BB%B6/","/yunzai/%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95/","/yunzai/Yunzai/Miao/","/yunzai/Yunzai/"],ze="SEARCH_PRO_QUERY_HISTORY",A=j(ze,[]),He=()=>{const{queryHistoryCount:t}=S,l=t>0;return{enabled:l,queryHistory:A,addQueryHistory:u=>{l&&(A.value=Array.from(new Set([u,...A.value.slice(0,t-1)])))},removeQueryHistory:u=>{A.value=[...A.value.slice(0,u),...A.value.slice(u+1)]}}},b=t=>Re[t.id]+("anchor"in t?`#${t.anchor}`:""),Se="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:$}=S,B=j(Se,[]),Ce=()=>{const t=$>0;return{enabled:t,resultHistory:B,addResultHistory:l=>{if(t){const u={link:b(l),display:l.display};"header"in l&&(u.header=l.header),B.value=[u,...B.value.slice(0,$-1)]}},removeResultHistory:l=>{B.value=[...B.value.slice(0,l),...B.value.slice(l+1)]}}},ke=t=>{const l=ve(),u=_(),C=ye(),i=F(0),f=H(()=>i.value>0),p=pe([]);return de(()=>{const{search:d,terminate:k}=he(),m=Ae(c=>{const g=c.join(" "),{searchFilter:w=y=>y,splitWord:D,suggestionsFilter:L,...h}=l.value;g?(i.value+=1,d(c.join(" "),u.value,h).then(y=>w(y,g,u.value,C.value)).then(y=>{i.value-=1,p.value=y}).catch(y=>{console.warn(y),i.value-=1,i.value||(p.value=[])})):p.value=[]},S.searchDelay-S.suggestDelay);I([t,u],([c])=>m(c),{immediate:!0}),Be(()=>{k()})}),{isSearching:f,results:p}};var De=ae({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(t,{emit:l}){const u=se(),C=_(),i=te(le),{enabled:f,addQueryHistory:p,queryHistory:d,removeQueryHistory:k}=He(),{enabled:m,resultHistory:c,addResultHistory:g,removeResultHistory:w}=Ce(),D=f||m,L=ue(t,"queries"),{results:h,isSearching:y}=ke(L),r=re({isQuery:!0,index:0}),E=F(0),v=F(0),T=H(()=>D&&(d.value.length>0||c.value.length>0)),Q=H(()=>h.value.length>0),x=H(()=>h.value[E.value]||null),U=()=>{const{isQuery:e,index:a}=r;a===0?(r.isQuery=!e,r.index=e?c.value.length-1:d.value.length-1):r.index=a-1},J=()=>{const{isQuery:e,index:a}=r;a===(e?d.value.length-1:c.value.length-1)?(r.isQuery=!e,r.index=0):r.index=a+1},V=()=>{E.value=E.value>0?E.value-1:h.value.length-1,v.value=x.value.contents.length-1},W=()=>{E.value=E.value<h.value.length-1?E.value+1:0,v.value=0},Z=()=>{v.value<x.value.contents.length-1?v.value+=1:W()},G=()=>{v.value>0?v.value-=1:V()},q=e=>e.map(a=>fe(a)?a:s(a[0],a[1])),K=e=>{if(e.type==="customField"){const a=me[e.index]||"$content",[n,z=""]=ge(a)?a[C.value].split("$content"):a.split("$content");return e.display.map(o=>s("div",q([n,...o,z])))}return e.display.map(a=>s("div",q(a)))},R=()=>{E.value=0,v.value=0,l("updateQuery",""),l("close")},N=()=>f?s("ul",{class:"search-pro-result-list"},s("li",{class:"search-pro-result-list-item"},[s("div",{class:"search-pro-result-title"},i.value.queryHistory),d.value.map((e,a)=>s("div",{class:["search-pro-result-item",{active:r.isQuery&&r.index===a}],onClick:()=>{l("updateQuery",e)}},[s(O,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},e),s("button",{class:"search-pro-remove-icon",innerHTML:P,onClick:n=>{n.preventDefault(),n.stopPropagation(),k(a)}})]))])):null,X=()=>m?s("ul",{class:"search-pro-result-list"},s("li",{class:"search-pro-result-list-item"},[s("div",{class:"search-pro-result-title"},i.value.resultHistory),c.value.map((e,a)=>s(Y,{to:e.link,class:["search-pro-result-item",{active:!r.isQuery&&r.index===a}],onClick:()=>{R()}},()=>[s(O,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},[e.header?s("div",{class:"content-header"},e.header):null,s("div",e.display.map(n=>q(n)).flat())]),s("button",{class:"search-pro-remove-icon",innerHTML:P,onClick:n=>{n.preventDefault(),n.stopPropagation(),w(a)}})]))])):null;return ie("keydown",e=>{if(t.isFocusing){if(Q.value){if(e.key==="ArrowUp")G();else if(e.key==="ArrowDown")Z();else if(e.key==="Enter"){const a=x.value.contents[v.value];p(t.queries.join(" ")),g(a),u.push(b(a)),R()}}else if(m){if(e.key==="ArrowUp")U();else if(e.key==="ArrowDown")J();else if(e.key==="Enter"){const{index:a}=r;r.isQuery?(l("updateQuery",d.value[a]),e.preventDefault()):(u.push(c.value[a].link),R())}}}}),I([E,v],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>s("div",{class:["search-pro-result-wrapper",{empty:t.queries.length?!Q.value:!T.value}],id:"search-pro-results"},t.queries.length?y.value?s(ne,{hint:i.value.searching}):Q.value?s("ul",{class:"search-pro-result-list"},h.value.map(({title:e,contents:a},n)=>{const z=E.value===n;return s("li",{class:["search-pro-result-list-item",{active:z}]},[s("div",{class:"search-pro-result-title"},e||i.value.defaultTitle),a.map((o,ee)=>{const M=z&&v.value===ee;return s(Y,{to:b(o),class:["search-pro-result-item",{active:M,"aria-selected":M}],onClick:()=>{p(t.queries.join(" ")),g(o),R()}},()=>[o.type==="text"?null:s(o.type==="title"?oe:o.type==="heading"?ce:Ee,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},[o.type==="text"&&o.header?s("div",{class:"content-header"},o.header):null,s("div",K(o))])])})])})):i.value.emptyResult:D?T.value?[N(),X()]:i.value.emptyHistory:i.value.emptyResult)}});export{De as default};
