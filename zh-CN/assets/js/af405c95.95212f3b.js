"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[66803],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,k=u["".concat(s,".").concat(d)]||u[d]||c[d]||l;return n?a.createElement(k,i(i({ref:t},m),{},{components:n})):a.createElement(k,i({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58001:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"SET-VARIABLE",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Database-Administration-Statements/SET-VARIABLE",id:"sql-manual/sql-reference/Database-Administration-Statements/SET-VARIABLE",title:"SET-VARIABLE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Database-Administration-Statements/SET-VARIABLE.md",sourceDirName:"sql-manual/sql-reference/Database-Administration-Statements",slug:"/sql-manual/sql-reference/Database-Administration-Statements/SET-VARIABLE",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Database-Administration-Statements/SET-VARIABLE",draft:!1,tags:[],version:"current",frontMatter:{title:"SET-VARIABLE",language:"zh-CN"},sidebar:"docs",previous:{title:"ADMIN-SET-CONFIG",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SET-CONFIG"},next:{title:"INSTALL-PLUGIN",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Database-Administration-Statements/INSTALL-PLUGIN"}},s={},p=[{value:"SET-VARIABLE",id:"set-variable",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],m={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"set-variable"},"SET-VARIABLE"),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("p",null,"SET VARIABLE"),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"\u8be5\u8bed\u53e5\u4e3b\u8981\u662f\u7528\u6765\u4fee\u6539 Doris \u7cfb\u7edf\u53d8\u91cf\uff0c\u8fd9\u4e9b\u7cfb\u7edf\u53d8\u91cf\u53ef\u4ee5\u5206\u4e3a\u5168\u5c40\u4ee5\u53ca\u4f1a\u8bdd\u7ea7\u522b\u5c42\u9762\u6765\u4fee\u6539\uff0c\u6709\u4e9b\u4e5f\u53ef\u4ee5\u8fdb\u884c\u52a8\u6001\u4fee\u6539\u3002\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"SHOW VARIABLE")," \u6765\u67e5\u770b\u8fd9\u4e9b\u7cfb\u7edf\u53d8\u91cf\u3002"),(0,r.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SET variable_assignment [, variable_assignment] ...\n")),(0,r.kt)("p",null,"\u8bf4\u660e\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"variable_assignment:\nuser_var_name = expr\n| ","[GLOBAL | SESSION]"," system_var_name = expr")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a"),(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},"\u53ea\u6709 ADMIN \u7528\u6237\u53ef\u4ee5\u8bbe\u7f6e\u53d8\u91cf\u7684\u5168\u5c40\u751f\u6548"),(0,r.kt)("li",{parentName:"ol"},"\u5168\u5c40\u751f\u6548\u7684\u53d8\u91cf\u4e0d\u5f71\u54cd\u5f53\u524d\u4f1a\u8bdd\u7684\u53d8\u91cf\u503c\uff0c\u4ec5\u5f71\u54cd\u65b0\u7684\u4f1a\u8bdd\u4e2d\u7684\u53d8\u91cf\u3002"))),(0,r.kt)("p",null,"\u65e2\u652f\u6301\u5f53\u524d\u4f1a\u8bdd\u751f\u6548\u53c8\u652f\u6301\u5168\u5c40\u751f\u6548\u7684\u53d8\u91cf\u5305\u62ec\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"time_zone")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"wait_timeout")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sql_mode")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"enable_profile")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"query_timeout")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("version",{since:"dev",type:"inline"},"`insert_timeout`")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"exec_mem_limit")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"batch_size")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"allow_partition_column_nullable")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"insert_visible_timeout_ms")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"enable_fold_constant_by_be"))),(0,r.kt)("p",null,"\u53ea\u652f\u6301\u5168\u5c40\u751f\u6548\u7684\u53d8\u91cf\u5305\u62ec\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"default_rowset_type"))),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u8bbe\u7f6e\u65f6\u533a\u4e3a\u4e1c\u516b\u533a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'SET time_zone = "Asia/Shanghai";\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u8bbe\u7f6e\u5168\u5c40\u7684\u6267\u884c\u5185\u5b58\u5927\u5c0f"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"SET GLOBAL exec_mem_limit = 137438953472\n")))),(0,r.kt)("h3",{id:"keywords"},"Keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"SET, VARIABLE\n")),(0,r.kt)("h3",{id:"best-practice"},"Best Practice"))}c.isMDXComponent=!0}}]);