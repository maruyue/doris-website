"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[22965],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||p;return n?a.createElement(h,o(o({ref:t},s),{},{components:n})):a.createElement(h,o({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,o=new Array(p);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<p;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},59739:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>p,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const p={title:"Show Table Data Action",language:"zh-CN"},o=void 0,i={unversionedId:"admin-manual/http-actions/fe/show-table-data-action",id:"admin-manual/http-actions/fe/show-table-data-action",title:"Show Table Data Action",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/http-actions/fe/show-table-data-action.md",sourceDirName:"admin-manual/http-actions/fe",slug:"/admin-manual/http-actions/fe/show-table-data-action",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/fe/show-table-data-action",draft:!1,tags:[],version:"current",frontMatter:{title:"Show Table Data Action",language:"zh-CN"},sidebar:"docs",previous:{title:"Show Runtime Info Action",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/fe/show-runtime-info-action"},next:{title:"Statement Execution Action",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/fe/statement-execution-action"}},l={},c=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],s={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"show-table-data-action"},"Show Table Data Action"),(0,r.kt)("h2",{id:"request"},"Request"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET /api/show_table_data")),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"\u7528\u4e8e\u83b7\u53d6\u6240\u6709internal\u6e90\u4e0b\u6240\u6709\u6570\u636e\u5e93\u6240\u6709\u8868\u7684\u6570\u636e\u91cf\uff0c\u6216\u8005\u6307\u5b9a\u6570\u636e\u5e93\u6216\u6307\u5b9a\u8868\u7684\u6570\u636e\u91cf\u3002\u5355\u4f4d\u5b57\u8282\u3002"),(0,r.kt)("h2",{id:"path-parameters"},"Path parameters"),(0,r.kt)("p",null,"\u65e0"),(0,r.kt)("h2",{id:"query-parameters"},"Query parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"db")),(0,r.kt)("p",{parentName:"li"},"  \u53ef\u9009\u3002\u5982\u679c\u6307\u5b9a\uff0c\u5219\u83b7\u53d6\u6307\u5b9a\u6570\u636e\u5e93\u4e0b\u8868\u7684\u6570\u636e\u91cf\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"table")),(0,r.kt)("p",{parentName:"li"},"  \u53ef\u9009\u3002\u5982\u679c\u6307\u5b9a\uff0c\u5219\u83b7\u53d6\u6307\u5b9a\u8868\u7684\u6570\u636e\u91cf\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"single_replica")),(0,r.kt)("p",{parentName:"li"},"  \u53ef\u9009\u3002\u5982\u679c\u6307\u5b9a\uff0c\u5219\u83b7\u53d6\u8868\u5355\u526f\u672c\u6240\u5360\u7528\u7684\u6570\u636e\u91cf\u3002"))),(0,r.kt)("h2",{id:"request-body"},"Request body"),(0,r.kt)("p",null,"\u65e0"),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6307\u5b9a\u6570\u636e\u5e93\u6240\u6709\u8868\u7684\u6570\u636e\u91cf\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'{\n    "msg":"success",\n    "code":0,\n    "data":{\n        "tpch":{\n            "partsupp":9024548244,\n            "revenue0":0,\n            "customer":1906421482\n        }\n    },\n    "count":0\n}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6307\u5b9a\u6570\u636e\u5e93\u6307\u5b9a\u8868\u7684\u6570\u636e\u91cf\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'{\n    "msg":"success",\n    "code":0,\n    "data":{\n        "tpch":{\n            "partsupp":9024548244\n        }\n    },\n    "count":0\n}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6307\u5b9a\u6570\u636e\u5e93\u6307\u5b9a\u8868\u5355\u526f\u672c\u7684\u6570\u636e\u91cf\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'{\n    "msg":"success",\n    "code":0,\n    "data":{\n        "tpch":{\n            "partsupp":3008182748\n        }\n    },\n    "count":0\n}\n')))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u83b7\u53d6\u6307\u5b9a\u6570\u636e\u5e93\u7684\u6570\u636e\u91cf"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'GET /api/show_table_data?db=tpch\n\nResponse:\n{\n    "msg":"success",\n    "code":0,\n    "data":{\n        "tpch":{\n            "partsupp":9024548244,\n            "revenue0":0,\n            "customer":1906421482\n        }\n    },\n    "count":0\n}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6307\u5b9a\u6570\u636e\u5e93\u6307\u5b9a\u8868\u7684\u6570\u636e\u91cf\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'GET /api/show_table_data?db=tpch&table=partsupp\n    \nResponse:\n{\n    "msg":"success",\n    "code":0,\n    "data":{\n        "tpch":{\n            "partsupp":9024548244\n        }\n    },\n    "count":0\n}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6307\u5b9a\u6570\u636e\u5e93\u6307\u5b9a\u8868\u5355\u526f\u672c\u7684\u6570\u636e\u91cf\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'GET /api/show_table_data?db=tpch&table=partsupp&single_replica=true\n    \nResponse:\n{\n    "msg":"success",\n    "code":0,\n    "data":{\n        "tpch":{\n            "partsupp":3008182748\n        }\n    },\n    "count":0\n}\n')))))}m.isMDXComponent=!0}}]);