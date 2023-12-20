"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[73745],{3905:(e,t,n)=>{n.d(t,{Zo:()=>T,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},T=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},E=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,T=i(e,["components","mdxType","originalType","parentName"]),c=s(n),E=a,d=c["".concat(p,".").concat(E)]||c[E]||u[E]||l;return n?r.createElement(d,o(o({ref:t},T),{},{components:n})):r.createElement(d,o({ref:t},T))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=E;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}E.displayName="MDXCreateElement"},58508:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={title:"QUANTILE_STATE",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Types/QUANTILE_STATE",id:"sql-manual/sql-reference/Data-Types/QUANTILE_STATE",title:"QUANTILE_STATE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Data-Types/QUANTILE_STATE.md",sourceDirName:"sql-manual/sql-reference/Data-Types",slug:"/sql-manual/sql-reference/Data-Types/QUANTILE_STATE",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Types/QUANTILE_STATE",draft:!1,tags:[],version:"current",frontMatter:{title:"QUANTILE_STATE",language:"zh-CN"},sidebar:"docs",previous:{title:"BITMAP",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Types/BITMAP"},next:{title:"ARRAY",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Types/ARRAY"}},p={},s=[{value:"QUANTILE_STATE",id:"quantile_state",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"notice",id:"notice",level:3},{value:"keywords",id:"keywords",level:3}],T={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},T,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"quantile_state"},"QUANTILE_STATE"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"QUANTILE_STATE\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u57282.0\u4e2d\u6211\u4eec\u652f\u6301\u4e86",(0,a.kt)("a",{parentName:"strong",href:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Types/AGG_STATE"},"agg_state"),"\u529f\u80fd\uff0c\u63a8\u8350\u4f7f\u7528agg_state quantile_union(quantile_state not null)\u6765\u4ee3\u66ff\u672c\u7c7b\u578b\u3002")),(0,a.kt)("p",null,"QUANTILE_STATE\u4e0d\u80fd\u4f5c\u4e3akey\u5217\u4f7f\u7528\uff0c\u652f\u6301\u5728Aggregate\u6a21\u578b\u3001Duplicate\u6a21\u578b\u548cUnique\u6a21\u578b\u7684\u8868\u4e2d\u4f7f\u7528\u3002\u5728Aggregate\u6a21\u578b\u8868\u4e2d\u4f7f\u7528\u65f6\uff0c\u5efa\u8868\u65f6\u914d\u5408\u7684\u805a\u5408\u7c7b\u578b\u4e3aQUANTILE_UNION\u3002\n\u7528\u6237\u4e0d\u9700\u8981\u6307\u5b9a\u957f\u5ea6\u548c\u9ed8\u8ba4\u503c\u3002\u957f\u5ea6\u6839\u636e\u6570\u636e\u7684\u805a\u5408\u7a0b\u5ea6\u7cfb\u7edf\u5185\u63a7\u5236\u3002\n\u5e76\u4e14QUANTILE_STATE\u5217\u53ea\u80fd\u901a\u8fc7\u914d\u5957\u7684QUANTILE_PERCENT\u3001QUANTILE_UNION\u3001TO_QUANTILE_STATE\u7b49\u51fd\u6570\u8fdb\u884c\u67e5\u8be2\u6216\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"QUANTILE_STATE \u662f\u4e00\u79cd\u8ba1\u7b97\u5206\u4f4d\u6570\u8fd1\u4f3c\u503c\u7684\u7c7b\u578b\uff0c\u5728\u5bfc\u5165\u65f6\u4f1a\u5bf9\u76f8\u540c\u7684key\uff0c\u4e0d\u540c value \u8fdb\u884c\u9884\u805a\u5408\uff0c\u5f53value\u6570\u91cf\u4e0d\u8d85\u8fc72048\u65f6\u91c7\u7528\u660e\u7ec6\u8bb0\u5f55\u6240\u6709\u6570\u636e\uff0c\u5f53 value \u6570\u91cf\u5927\u4e8e2048\u65f6\u91c7\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tdunning/t-digest/blob/main/docs/t-digest-paper/histo.pdf"},"TDigest")," \u7b97\u6cd5\uff0c\u5bf9\u6570\u636e\u8fdb\u884c\u805a\u5408\uff08\u805a\u7c7b\uff09\u4fdd\u5b58\u805a\u7c7b\u540e\u7684\u8d28\u5fc3\u70b9\u3002"),(0,a.kt)("p",null,"\u76f8\u5173\u51fd\u6570:"),(0,a.kt)("p",null,"  QUANTILE_UNION(QUANTILE_STATE):\n\u6b64\u51fd\u6570\u4e3a\u805a\u5408\u51fd\u6570\uff0c\u7528\u4e8e\u5c06\u4e0d\u540c\u7684\u5206\u4f4d\u6570\u8ba1\u7b97\u4e2d\u95f4\u7ed3\u679c\u8fdb\u884c\u805a\u5408\u64cd\u4f5c\u3002\u6b64\u51fd\u6570\u8fd4\u56de\u7684\u7ed3\u679c\u4ecd\u662fQUANTILE_STATE"),(0,a.kt)("p",null,"  TO_QUANTILE_STATE(DOUBLE raw_data ","[,FLOAT compression]","):\n\u6b64\u51fd\u6570\u5c06\u6570\u503c\u7c7b\u578b\u8f6c\u5316\u6210QUANTILE_STATE\u7c7b\u578b\ncompression\u53c2\u6570\u662f\u53ef\u9009\u9879\uff0c\u53ef\u8bbe\u7f6e\u8303\u56f4\u662f","[2048, 10000]","\uff0c\u503c\u8d8a\u5927\uff0c\u540e\u7eed\u5206\u4f4d\u6570\u8fd1\u4f3c\u8ba1\u7b97\u7684\u7cbe\u5ea6\u8d8a\u9ad8\uff0c\u5185\u5b58\u6d88\u8017\u8d8a\u5927\uff0c\u8ba1\u7b97\u8017\u65f6\u8d8a\u957f\u3002\ncompression\u53c2\u6570\u672a\u6307\u5b9a\u6216\u8bbe\u7f6e\u7684\u503c\u5728","[2048, 10000]","\u8303\u56f4\u5916\uff0c\u4ee52048\u7684\u9ed8\u8ba4\u503c\u8fd0\u884c"),(0,a.kt)("p",null,"  QUANTILE_PERCENT(QUANTILE_STATE, percent):\n\u6b64\u51fd\u6570\u5c06\u5206\u4f4d\u6570\u8ba1\u7b97\u7684\u4e2d\u95f4\u7ed3\u679c\u53d8\u91cf\uff08QUANTILE_STATE\uff09\u8f6c\u5316\u4e3a\u5177\u4f53\u7684\u5206\u4f4d\u6570\u6570\u503c"),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"select QUANTILE_PERCENT(QUANTILE_UNION(v1), 0.5) from test_table group by k1, k2, k3;\n")),(0,a.kt)("h3",{id:"notice"},"notice"),(0,a.kt)("p",null,"\u4f7f\u7528\u524d\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u6253\u5f00 QUANTILE_STATE \u5f00\u5173:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'$ mysql-client > admin set frontend config("enable_quantile_state_type"="true");\n')),(0,a.kt)("p",null,"\u8fd9\u79cd\u65b9\u5f0f\u4e0b QUANTILE_STATE \u5f00\u5173\u4f1a\u5728Fe\u8fdb\u7a0b\u91cd\u542f\u540e\u91cd\u7f6e\uff0c\u6216\u8005\u5728fe.conf\u4e2d\u6dfb\u52a0",(0,a.kt)("inlineCode",{parentName:"p"},"enable_quantile_state_type=true"),"\u914d\u7f6e\u9879\u53ef\u6c38\u4e45\u751f\u6548\u3002"),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"QUANTILE_STATE, QUANTILE_UNION, TO_QUANTILE_STATE, QUANTILE_PERCENT\n")))}u.isMDXComponent=!0}}]);