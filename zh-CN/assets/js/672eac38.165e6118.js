"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[42593],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=u(n),m=o,k=s["".concat(p,".").concat(m)]||s[m]||c[m]||r;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77620:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var a=n(87462),o=(n(67294),n(3905));const r={title:"\u4ee3\u7801\u6253\u6869",language:"zh-CN"},l=void 0,i={unversionedId:"admin-manual/http-actions/fe/debug-point-action",id:"admin-manual/http-actions/fe/debug-point-action",title:"\u4ee3\u7801\u6253\u6869",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/http-actions/fe/debug-point-action.md",sourceDirName:"admin-manual/http-actions/fe",slug:"/admin-manual/http-actions/fe/debug-point-action",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/fe/debug-point-action",draft:!1,tags:[],version:"current",frontMatter:{title:"\u4ee3\u7801\u6253\u6869",language:"zh-CN"},sidebar:"docs",previous:{title:"Meta Info Action",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/fe/meta-info-action-V2"},next:{title:"Statistic Action",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/fe/statistic-action"}},p={},u=[{value:"\u6728\u6869\u4ee3\u7801\u793a\u4f8b",id:"\u6728\u6869\u4ee3\u7801\u793a\u4f8b",level:2},{value:"\u603b\u5f00\u5173",id:"\u603b\u5f00\u5173",level:2},{value:"\u6253\u5f00\u6728\u6869",id:"\u6253\u5f00\u6728\u6869",level:2},{value:"API",id:"api",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:3},{value:"Request body",id:"request-body",level:3},{value:"Response",id:"response",level:3},{value:"Examples",id:"examples",level:3},{value:"\u5173\u95ed\u6728\u6869",id:"\u5173\u95ed\u6728\u6869",level:2},{value:"API",id:"api-1",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-1",level:3},{value:"Request body",id:"request-body-1",level:3},{value:"Response",id:"response-1",level:3},{value:"Examples",id:"examples-1",level:3},{value:"\u6e05\u9664\u6240\u6709\u6728\u6869",id:"\u6e05\u9664\u6240\u6709\u6728\u6869",level:2},{value:"API",id:"api-2",level:3},{value:"Request body",id:"request-body-2",level:3},{value:"Response",id:"response-2",level:3},{value:"Examples",id:"examples-2",level:3}],d={toc:u},s="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u4ee3\u7801\u6253\u6869"},"\u4ee3\u7801\u6253\u6869"),(0,o.kt)("p",null,"\u4ee3\u7801\u6253\u6869\u662f\u4ee3\u7801\u6d4b\u8bd5\u4f7f\u7528\u7684\u3002\u6fc0\u6d3b\u6728\u6869\u540e\uff0c\u53ef\u4ee5\u6267\u884c\u6728\u6869\u4ee3\u7801\u3002\u6728\u6869\u7684\u540d\u5b57\u662f\u4efb\u610f\u53d6\u7684\u3002"),(0,o.kt)("p",null,"FE \u548c BE \u90fd\u652f\u6301\u4ee3\u7801\u6253\u6869\u3002"),(0,o.kt)("h2",{id:"\u6728\u6869\u4ee3\u7801\u793a\u4f8b"},"\u6728\u6869\u4ee3\u7801\u793a\u4f8b"),(0,o.kt)("p",null,"FE \u6869\u5b50\u793a\u4f8b\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'private Status foo() {  \n    // dbug_fe_foo_do_nothing \u662f\u4e00\u4e2a\u6728\u6869\u540d\u5b57\uff0c\n    // \u6253\u5f00\u8fd9\u4e2a\u6728\u6869\u4e4b\u540e\uff0cDebugPointUtil.isEnable("dbug_fe_foo_do_nothing") \u5c06\u4f1a\u8fd4\u56detrue\n    if (DebugPointUtil.isEnable("dbug_fe_foo_do_nothing")) {\n        return Status.Nothing;\n    }\n        \n     do_foo_action();\n     \n     return Status.Ok;\n}\n')),(0,o.kt)("p",null,"BE \u6869\u5b50\u793a\u4f8b\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c++"},'void Status foo() {\n\n     // dbug_be_foo_do_nothing \u662f\u4e00\u4e2a\u6728\u6869\u540d\u5b57\uff0c\n     // \u6253\u5f00\u8fd9\u4e2a\u6728\u6869\u4e4b\u540e\uff0cDEBUG_EXECUTE_IF \u5c06\u4f1a\u6267\u884c\u5b8f\u53c2\u6570\u4e2d\u7684\u4ee3\u7801\u5757\n     DEBUG_EXECUTE_IF("dbug_be_foo_do_nothing",  { return Status.Nothing; });\n   \n     do_foo_action();\n     \n     return Status.Ok;\n}\n')),(0,o.kt)("h2",{id:"\u603b\u5f00\u5173"},"\u603b\u5f00\u5173"),(0,o.kt)("p",null,"\u9700\u8981\u628a\u6728\u6869\u603b\u5f00\u5173 ",(0,o.kt)("inlineCode",{parentName:"p"},"enable_debug_points")," \u6253\u5f00\u4e4b\u540e\uff0c\u624d\u80fd\u6fc0\u6d3b\u6728\u6869\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6728\u6869\u603b\u5f00\u5173\u662f\u5173\u95ed\u7684\u3002"),(0,o.kt)("p",null,"\u603b\u5f00\u5173",(0,o.kt)("inlineCode",{parentName:"p"},"enable_debug_points")," \u5206\u522b\u5728 FE \u7684 fe.conf \u548c BE \u7684 be.conf \u4e2d\u914d\u7f6e\u3002"),(0,o.kt)("h2",{id:"\u6253\u5f00\u6728\u6869"},"\u6253\u5f00\u6728\u6869"),(0,o.kt)("h3",{id:"api"},"API"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    POST /api/debug_point/add/{debug_point_name}[?timeout=<int>&execute=<int>]\n")),(0,o.kt)("h3",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"debug_point_name"),"\n\u6728\u6869\u540d\u5b57\u3002\u5fc5\u586b\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"timeout"),"\n\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u79d2\u3002\u8d85\u65f6\u4e4b\u540e\uff0c\u6728\u6869\u5931\u6d3b\u3002\u9ed8\u8ba4\u503c-1\u8868\u793a\u6c38\u8fdc\u4e0d\u8d85\u65f6\u3002\u53ef\u586b\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"execute"),"\n\u6728\u6869\u6700\u5927\u6fc0\u6d3b\u6b21\u6570\u3002\u9ed8\u8ba4\u503c-1\u8868\u793a\u4e0d\u9650\u6fc0\u6d3b\u6b21\u6570\u3002\u53ef\u586b\u3002       "))),(0,o.kt)("h3",{id:"request-body"},"Request body"),(0,o.kt)("p",null,"\u65e0"),(0,o.kt)("h3",{id:"response"},"Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```\n{\n    msg: "OK",\n    code: 0\n}\n```\n')),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("p",null,"\u6253\u5f00\u6728\u6869 ",(0,o.kt)("inlineCode",{parentName:"p"},"foo"),"\uff0c\u6700\u591a\u6fc0\u6d3b5\u6b21\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```\ncurl -X POST "http://127.0.0.1:8030/api/debug_point/add/foo?execute=5"\n\n```\n')),(0,o.kt)("h2",{id:"\u5173\u95ed\u6728\u6869"},"\u5173\u95ed\u6728\u6869"),(0,o.kt)("h3",{id:"api-1"},"API"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    POST /api/debug_point/remove/{debug_point_name}\n")),(0,o.kt)("h3",{id:"\u53c2\u6570-1"},"\u53c2\u6570"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"debug_point_name"),"\n\u6728\u6869\u540d\u5b57\u3002\u5fc5\u586b\u3002     ")),(0,o.kt)("h3",{id:"request-body-1"},"Request body"),(0,o.kt)("p",null,"\u65e0"),(0,o.kt)("h3",{id:"response-1"},"Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'    {\n        msg: "OK",\n        code: 0\n    }\n')),(0,o.kt)("h3",{id:"examples-1"},"Examples"),(0,o.kt)("p",null,"\u5173\u95ed\u6728\u6869",(0,o.kt)("inlineCode",{parentName:"p"},"foo"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```\ncurl -X POST "http://127.0.0.1:8030/api/debug_point/remove/foo"\n\n```\n')),(0,o.kt)("h2",{id:"\u6e05\u9664\u6240\u6709\u6728\u6869"},"\u6e05\u9664\u6240\u6709\u6728\u6869"),(0,o.kt)("h3",{id:"api-2"},"API"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    POST /api/debug_point/clear\n")),(0,o.kt)("h3",{id:"request-body-2"},"Request body"),(0,o.kt)("p",null,"\u65e0"),(0,o.kt)("h3",{id:"response-2"},"Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```\n{\n    msg: "OK",\n    code: 0\n}\n```\n')),(0,o.kt)("h3",{id:"examples-2"},"Examples"),(0,o.kt)("p",null,"\u6e05\u9664\u6240\u6709\u6728\u6869\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```\ncurl -X POST "http://127.0.0.1:8030/api/debug_point/clear"\n```\n')))}c.isMDXComponent=!0}}]);