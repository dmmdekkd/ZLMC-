import{a as h}from"./axios-CCb-kr4I.js";import{_ as m}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o,c as a,a as p,h as d,t as u,F as g,ac as y,m as f,d as _}from"./app-B0StrNFs.js";const v={data(){return{loading:!0,checkingProvider:null,messages:[],signData:{date:"2024-11-21",dmmdekkd:{memo:"无限制免费使用",9090:"http://api.yunzaibot.cn/?key=0852369"},zhaodice:{memo:"签名除了(5)都要挂梯子","9055-910-1":"https://qsign.trpgbot.com","9055-910-2":"http://qsign-v3.trpgbot.com","9055-910-3":"https://qsign.chahuyun.cn","9055-910-4":"https://qsign.chahuyun.cn?key=miraibbs","9055-910-5":"https://zyr15r-astralqsign.hf.space"},豆花:{memo:"核心服务由豆花提供，这里是负载均衡站由其他人提供，核心服务基于HOOK实现",910:"https://q-sign.wuliya.cn"},寒暄:{memo:"暂时停止服务，请查看 QSign.icu 更换服务地址，可通过脚本一键配置",9070:"https://api.qsign.icu/?key=Free"}}}},methods:{displayMessage(s,e=!1){this.messages.push({content:s,isError:e})},showLoadingMessage(s){this.loading=!0,this.displayMessage(s)},async checkLocalApiStatus(s){const e=[];for(const[t,n]of Object.entries(s))if(t!=="memo")try{const i=Date.now(),c=(await h.get(n,{timeout:5e3})).status===200?"✅ 正常":"❎ 异常",l=`${Date.now()-i}ms`;e.push(`🔢 序号: ${t}
📍 版本: ${t}
✅ 状态: ${c}
⏱ 延迟: ${l}
🔗 地址: ${n}`)}catch(i){const r=i.code==="ECONNABORTED"?"超时":"网络异常";e.push(`🔢 序号: ${t}
📍 版本: ${t}
❎ 异常 (${r})
🔗 地址: ${n}`)}return e},async fetchSignList(){try{this.showLoadingMessage("🌟 欢迎使用"),this.displayMessage("🌐 本地签名 API 列表：");const s=this.signData,e=this.signData.date||"未知";let t=0;for(const[n,i]of Object.entries(s))n!=="date"&&(t++,this.checkingProvider=n,await this.displayProviderInfo(n,i),this.checkingProvider=null);this.displayMessage(`📅 数据更新于: ${e}`),this.loading=!1}catch{this.loading=!1,this.displayMessage("❌ 获取签名列表失败，请稍后再试。",!0)}},async displayProviderInfo(s,e){try{const t=await this.checkLocalApiStatus(e);this.displayMessage(`💡 提供者: ${s}`),e.memo&&this.displayMessage(`📝 说明: ${e.memo}`),t.forEach(n=>this.displayMessage(n))}catch{this.displayMessage(`❌ 无法检查提供者 ${s} 的状态。`,!0)}}},mounted(){this.fetchSignList()}},M={class:"app"},$={key:0,class:"loading"},k={key:1,class:"loading"},x=["innerHTML"];function P(s,e,t,n,i,r){return o(),a("div",M,[e[0]||(e[0]=p("h1",null,"星点签名 API 状态列表",-1)),i.loading?(o(),a("div",$,"🌟 正在获取本地签名 API 列表信息，请稍候...")):d("v-if",!0),i.checkingProvider?(o(),a("div",k," 🔍 正在检查："+u(i.checkingProvider)+"，请稍候... ",1)):d("v-if",!0),(o(!0),a(g,null,y(i.messages,(c,l)=>(o(),a("div",{key:l,class:f(["message-content",{"error-message":c.isError}])},[p("div",{innerHTML:c.content},null,8,x)],2))),128))])}const q=m(v,[["render",P],["__scopeId","data-v-116f0cb7"],["__file","MyComponent.vue"]]),b={__name:"index.html",setup(s,{expose:e}){e();const t={get MyComponent(){return q}};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}};function z(s,e,t,n,i,r){return o(),a("div",null,[e[0]||(e[0]=p("hr",null,null,-1)),_(n.MyComponent),e[1]||(e[1]=p("hr",null,null,-1))])}const C=m(b,[["render",z],["__file","index.html.vue"]]),D=JSON.parse('{"path":"/yunzai/qs/","title":"公共 Qsign","lang":"zh-CN","frontmatter":{"title":"公共 Qsign","icon":null,"head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/yunzai/qs/"}],["meta",{"property":"og:site_name","content":"Sixflowers"}],["meta",{"property":"og:title","content":"公共 Qsign"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-21T12:01:51.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-21T12:01:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"公共 Qsign\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-21T12:01:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"\\"}]}"]]},"headers":[],"git":{"createdTime":1732190511000,"updatedTime":1732190511000,"contributors":[{"name":"zlmx","email":"3448585471@qq.com","commits":1}]},"readingTime":{"minutes":0.05,"words":14},"filePathRelative":"yunzai/qs/README.md","localizedDate":"2024年11月21日","excerpt":"<hr>\\n"}');export{C as comp,D as data};
