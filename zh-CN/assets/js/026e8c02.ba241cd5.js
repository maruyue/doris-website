"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[44883],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},O="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),O=c(r),m=a,d=O["".concat(s,".").concat(m)]||O[m]||u[m]||o;return r?n.createElement(d,l(l({ref:t},p),{},{components:r})):n.createElement(d,l({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[O]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},15179:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={title:"DROP-WORKLOAD-GROUP",language:"zh-CN"},l=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-WORKLOAD-GROUP",id:"version-2.0/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-WORKLOAD-GROUP",title:"DROP-WORKLOAD-GROUP",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-WORKLOAD-GROUP.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Drop",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-WORKLOAD-GROUP",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-WORKLOAD-GROUP",draft:!1,tags:[],version:"2.0",frontMatter:{title:"DROP-WORKLOAD-GROUP",language:"zh-CN"},sidebar:"docs",previous:{title:"DROP-RESOURCE",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-RESOURCE"},next:{title:"DROP-SQL-BLOCK-RULE",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-SQL-BLOCK-RULE"}},s={},c=[{value:"DROP-WORKLOAD-GROUP",id:"drop-workload-group",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},O="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(O,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"drop-workload-group"},"DROP-WORKLOAD-GROUP"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,"DROP WORKLOAD GROUP"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("version",{since:"dev"}),(0,a.kt)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5220\u9664\u8d44\u6e90\u7ec4\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"DROP WORKLOAD GROUP [IF EXISTS] 'rg_name'\n")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5220\u9664\u540d\u4e3a g1 \u7684\u8d44\u6e90\u7ec4\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"drop workload group if exists g1;\n")))),(0,a.kt)("h3",{id:"keywords"},"Keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"DROP, WORKLOAD, GROUP\n")),(0,a.kt)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);