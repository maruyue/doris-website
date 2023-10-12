"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[36139],{3905:(n,t,e)=>{e.d(t,{Zo:()=>p,kt:()=>f});var r=e(67294);function o(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function a(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function l(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?a(Object(e),!0).forEach((function(t){o(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function u(n,t){if(null==n)return{};var e,r,o=function(n,t){if(null==n)return{};var e,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||(o[e]=n[e]);return o}(n,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(o[e]=n[e])}return o}var s=r.createContext({}),i=function(n){var t=r.useContext(s),e=t;return n&&(e="function"==typeof n?n(t):l(l({},t),n)),e},p=function(n){var t=i(n.components);return r.createElement(s.Provider,{value:t},n.children)},c="mdxType",d={inlineCode:"code",wrapper:function(n){var t=n.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(n,t){var e=n.components,o=n.mdxType,a=n.originalType,s=n.parentName,p=u(n,["components","mdxType","originalType","parentName"]),c=i(e),m=o,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return e?r.createElement(f,l(l({ref:t},p),{},{components:e})):r.createElement(f,l({ref:t},p))}));function f(n,t){var e=arguments,o=t&&t.mdxType;if("string"==typeof n||o){var a=e.length,l=new Array(a);l[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=n,u[c]="string"==typeof n?n:o,l[1]=u;for(var i=2;i<a;i++)l[i]=e[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,e)}m.displayName="MDXCreateElement"},99134:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>i});var r=e(87462),o=(e(67294),e(3905));const a={title:"json_unquote",language:"zh-CN"},l=void 0,u={unversionedId:"sql-manual/sql-functions/json-functions/json_unquote",id:"version-1.2/sql-manual/sql-functions/json-functions/json_unquote",title:"json_unquote",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/json-functions/json_unquote.md",sourceDirName:"sql-manual/sql-functions/json-functions",slug:"/sql-manual/sql-functions/json-functions/json_unquote",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/json-functions/json_unquote",draft:!1,tags:[],version:"1.2",frontMatter:{title:"json_unquote",language:"zh-CN"},sidebar:"docs",previous:{title:"json_quote",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/json-functions/json_quote"},next:{title:"json_valid",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/json-functions/json_valid"}},s={},i=[{value:"json_unquote",id:"json_unquote",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:i},c="wrapper";function d(n){let{components:t,...e}=n;return(0,o.kt)(c,(0,r.Z)({},p,e,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"json_unquote"},"json_unquote"),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("h4",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"VARCHAR json_ununquote(VARCHAR)")),(0,o.kt)("p",null,"\u8fd9\u4e2a\u51fd\u6570\u5c06\u53bb\u6389JSON\u503c\u4e2d\u7684\u5f15\u53f7\uff0c\u5e76\u5c06\u7ed3\u679c\u4f5c\u4e3autf8mb4\u5b57\u7b26\u4e32\u8fd4\u56de\u3002\u5982\u679c\u53c2\u6570\u4e3aNULL\uff0c\u5219\u8fd4\u56deNULL\u3002"),(0,o.kt)("p",null,"\u5728\u5b57\u7b26\u4e32\u4e2d\u663e\u793a\u7684\u5982\u4e0b\u8f6c\u4e49\u5e8f\u5217\u5c06\u88ab\u8bc6\u522b\uff0c\u5bf9\u4e8e\u6240\u6709\u5176\u4ed6\u8f6c\u4e49\u5e8f\u5217\uff0c\u53cd\u659c\u6760\u5c06\u88ab\u5ffd\u7565\u3002"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u8f6c\u4e49\u5e8f\u5217"),(0,o.kt)("th",{parentName:"tr",align:null},"\u5e8f\u5217\u8868\u793a\u7684\u5b57\u7b26"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},'\\"'),(0,o.kt)("td",{parentName:"tr",align:null},'\u53cc\u5f15\u53f7 "')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\\b"),(0,o.kt)("td",{parentName:"tr",align:null},"\u9000\u683c\u5b57\u7b26")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\\f"),(0,o.kt)("td",{parentName:"tr",align:null},"\u6362\u9875\u7b26")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\\n"),(0,o.kt)("td",{parentName:"tr",align:null},"\u6362\u884c\u7b26")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\\r"),(0,o.kt)("td",{parentName:"tr",align:null},"\u56de\u8f66\u7b26")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\\t"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5236\u8868\u7b26")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\\"),(0,o.kt)("td",{parentName:"tr",align:null},"\u53cd\u659c\u6760 \\ ")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\\uxxxx"),(0,o.kt)("td",{parentName:"tr",align:null},"Unicode \u503c XXXX \u7684 UTF-8 \u5b57\u8282")))),(0,o.kt)("h3",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql> SELECT json_unquote('\"doris\"');\n+-------------------------+\n| json_unquote('\"doris\"') |\n+-------------------------+\n| doris                   |\n+-------------------------+\n\nmysql> SELECT json_unquote('[1, 2, 3]');\n+---------------------------+\n| json_unquote('[1, 2, 3]') |\n+---------------------------+\n| [1, 2, 3]                 |\n+---------------------------+\n\n\nmysql> SELECT json_unquote(null);\n+--------------------+\n| json_unquote(NULL) |\n+--------------------+\n| NULL               |\n+--------------------+\n\nmysql> SELECT json_unquote('\"\\\\ttest\"');\n+--------------------------+\n| json_unquote('\"\\ttest\"') |\n+--------------------------+\n|       test                    |\n+--------------------------+\n")),(0,o.kt)("h3",{id:"keywords"},"keywords"),(0,o.kt)("p",null,"json,unquote,json_unquote"))}d.isMDXComponent=!0}}]);