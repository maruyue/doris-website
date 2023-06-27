"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[55143],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>s});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(a),k=l,s=d["".concat(c,".").concat(k)]||d[k]||m[k]||r;return a?n.createElement(s,i(i({ref:t},u),{},{components:a})):n.createElement(s,i({ref:t},u))}));function s(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=k;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},4887:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(87462),l=(a(67294),a(3905));const r={title:"\u6587\u4ef6\u7f13\u5b58",language:"zh-CN"},i=void 0,o={unversionedId:"lakehouse/filecache",id:"lakehouse/filecache",title:"\u6587\u4ef6\u7f13\u5b58",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/lakehouse/filecache.md",sourceDirName:"lakehouse",slug:"/lakehouse/filecache",permalink:"/zh-CN/docs/dev/lakehouse/filecache",draft:!1,tags:[],version:"current",frontMatter:{title:"\u6587\u4ef6\u7f13\u5b58",language:"zh-CN"},sidebar:"docs",previous:{title:"\u6587\u4ef6\u5206\u6790",permalink:"/zh-CN/docs/dev/lakehouse/file"},next:{title:"Spark Doris Connector",permalink:"/zh-CN/docs/dev/ecosystem/spark-doris-connector"}},c={},p=[{value:"\u539f\u7406",id:"\u539f\u7406",level:2},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:2},{value:"FE \u914d\u7f6e",id:"fe-\u914d\u7f6e",level:3},{value:"BE \u914d\u7f6e",id:"be-\u914d\u7f6e",level:3},{value:"\u67e5\u770b File Cache \u547d\u4e2d\u60c5\u51b5",id:"\u67e5\u770b-file-cache-\u547d\u4e2d\u60c5\u51b5",level:3}],u={toc:p},d="wrapper";function m(e){let{components:t,...a}=e;return(0,l.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u6587\u4ef6\u7f13\u5b58"},"\u6587\u4ef6\u7f13\u5b58"),(0,l.kt)("p",null,"\u6587\u4ef6\u7f13\u5b58(File Cache)\u901a\u8fc7\u7f13\u5b58\u6700\u8fd1\u8bbf\u95ee\u7684\u8fdc\u7aef\u5b58\u50a8\u7cfb\u7edf(HDFS \u6216\u5bf9\u8c61\u5b58\u50a8)\u7684\u6570\u636e\u6587\u4ef6\uff0c\u52a0\u901f\u540e\u7eed\u8bbf\u95ee\u76f8\u540c\u6570\u636e\u7684\u67e5\u8be2\u3002\u5728\u9891\u7e41\u8bbf\u95ee\u76f8\u540c\u6570\u636e\u7684\u67e5\u8be2\u573a\u666f\u4e2d\uff0cFile Cache \u53ef\u4ee5\u907f\u514d\u91cd\u590d\u7684\u8fdc\u7aef\u6570\u636e\u8bbf\u95ee\u5f00\u9500\uff0c\u63d0\u5347\u70ed\u70b9\u6570\u636e\u7684\u67e5\u8be2\u5206\u6790\u6027\u80fd\u548c\u7a33\u5b9a\u6027\u3002"),(0,l.kt)("h2",{id:"\u539f\u7406"},"\u539f\u7406"),(0,l.kt)("p",null,"File Cache \u5c06\u8bbf\u95ee\u7684\u8fdc\u7a0b\u6570\u636e\u7f13\u5b58\u5230\u672c\u5730\u7684 BE \u8282\u70b9\u3002\u539f\u59cb\u7684\u6570\u636e\u6587\u4ef6\u4f1a\u6839\u636e\u8bbf\u95ee\u7684 IO \u5927\u5c0f\u5207\u5206\u4e3a Block\uff0cBlock \u88ab\u5b58\u50a8\u5230\u672c\u5730\u6587\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"p"},"cache_path/hash(filepath).substr(0, 3)/hash(filepath)/offset")," \u4e2d\uff0c\u5e76\u5728 BE \u8282\u70b9\u4e2d\u4fdd\u5b58 Block \u7684\u5143\u4fe1\u606f\u3002\u5f53\u8bbf\u95ee\u76f8\u540c\u7684\u8fdc\u7a0b\u6587\u4ef6\u65f6\uff0cdoris \u4f1a\u68c0\u67e5\u672c\u5730\u7f13\u5b58\u4e2d\u662f\u5426\u5b58\u5728\u8be5\u6587\u4ef6\u7684\u7f13\u5b58\u6570\u636e\uff0c\u5e76\u6839\u636e Block \u7684 offset \u548c size\uff0c\u786e\u8ba4\u54ea\u4e9b\u6570\u636e\u4ece\u672c\u5730 Block \u8bfb\u53d6\uff0c\u54ea\u4e9b\u6570\u636e\u4ece\u8fdc\u7a0b\u62c9\u8d77\uff0c\u5e76\u7f13\u5b58\u8fdc\u7a0b\u62c9\u53d6\u7684\u65b0\u6570\u636e\u3002BE \u8282\u70b9\u91cd\u542f\u7684\u65f6\u5019\uff0c\u626b\u63cf ",(0,l.kt)("inlineCode",{parentName:"p"},"cache_path")," \u76ee\u5f55\uff0c\u6062\u590d Block \u7684\u5143\u4fe1\u606f\u3002\u5f53\u7f13\u5b58\u5927\u5c0f\u8fbe\u5230\u9608\u503c\u4e0a\u9650\u7684\u65f6\u5019\uff0c\u6309\u7167 LRU \u539f\u5219\u6e05\u7406\u957f\u4e45\u672a\u8bbf\u95ee\u7684 Block\u3002"),(0,l.kt)("h2",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),(0,l.kt)("p",null,"File Cache \u9ed8\u8ba4\u5173\u95ed\uff0c\u9700\u8981\u5728 FE \u548c BE \u4e2d\u8bbe\u7f6e\u76f8\u5173\u53c2\u6570\u8fdb\u884c\u5f00\u542f\u3002"),(0,l.kt)("h3",{id:"fe-\u914d\u7f6e"},"FE \u914d\u7f6e"),(0,l.kt)("p",null,"\u5355\u4e2a\u4f1a\u8bdd\u4e2d\u5f00\u542f File Cache:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"SET enable_file_cache = true;\n")),(0,l.kt)("p",null,"\u5168\u5c40\u5f00\u542f File Cache:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"SET GLOBAL enable_file_cache = true;\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"File Cache \u529f\u80fd\u4ec5\u4f5c\u7528\u4e8e\u9488\u5bf9\u6587\u4ef6\u7684\u5916\u8868\u67e5\u8be2\uff08\u5982 Hive\u3001Hudi \uff09\u3002\u5bf9\u5185\u8868\u67e5\u8be2\uff0c\u6216\u975e\u6587\u4ef6\u7684\u5916\u8868\u67e5\u8be2\uff08\u5982 JDBC\u3001Elasticsearch\uff09\u7b49\u65e0\u5f71\u54cd\u3002")),(0,l.kt)("h3",{id:"be-\u914d\u7f6e"},"BE \u914d\u7f6e"),(0,l.kt)("p",null,"\u6dfb\u52a0\u53c2\u6570\u5230 BE \u8282\u70b9\u7684\u914d\u7f6e\u6587\u4ef6 conf/be.conf \u4e2d\uff0c\u5e76\u91cd\u542f BE \u8282\u70b9\u8ba9\u914d\u7f6e\u751f\u6548\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"enable_file_cache")),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u542f\u7528 File Cache\uff0c\u9ed8\u8ba4 false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"file_cache_path")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7f13\u5b58\u76ee\u5f55\u7684\u76f8\u5173\u914d\u7f6e\uff0cjson\u683c\u5f0f\uff0c\u4f8b\u5b50: ",(0,l.kt)("inlineCode",{parentName:"td"},'[{"path": "/path/to/file_cache1", "total_size":53687091200,"query_limit": "10737418240"},{"path": "/path/to/file_cache2", "total_size":53687091200,"query_limit": "10737418240"},{"path": "/path/to/file_cache3", "total_size":53687091200,"query_limit": "10737418240"}]'),"\u3002",(0,l.kt)("inlineCode",{parentName:"td"},"path")," \u662f\u7f13\u5b58\u7684\u4fdd\u5b58\u8def\u5f84\uff0c",(0,l.kt)("inlineCode",{parentName:"td"},"total_size")," \u662f\u7f13\u5b58\u7684\u5927\u5c0f\u4e0a\u9650\uff0c",(0,l.kt)("inlineCode",{parentName:"td"},"query_limit")," \u662f\u5355\u4e2a\u67e5\u8be2\u80fd\u591f\u4f7f\u7528\u7684\u6700\u5927\u7f13\u5b58\u5927\u5c0f\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"file_cache_min_file_segment_size")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5355\u4e2a Block \u7684\u5927\u5c0f\u4e0b\u9650\uff0c\u9ed8\u8ba4 1MB\uff0c\u9700\u8981\u5927\u4e8e 4096")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"file_cache_max_file_segment_size")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5355\u4e2a Block \u7684\u5927\u5c0f\u4e0a\u9650\uff0c\u9ed8\u8ba4 4MB\uff0c\u9700\u8981\u5927\u4e8e 4096")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"enable_file_cache_query_limit")),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u9650\u5236\u5355\u4e2a query \u4f7f\u7528\u7684\u7f13\u5b58\u5927\u5c0f\uff0c\u9ed8\u8ba4 false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"clear_file_cache")),(0,l.kt)("td",{parentName:"tr",align:null},"BE \u91cd\u542f\u65f6\u662f\u5426\u5220\u9664\u4e4b\u524d\u7684\u7f13\u5b58\u6570\u636e\uff0c\u9ed8\u8ba4 false")))),(0,l.kt)("h3",{id:"\u67e5\u770b-file-cache-\u547d\u4e2d\u60c5\u51b5"},"\u67e5\u770b File Cache \u547d\u4e2d\u60c5\u51b5"),(0,l.kt)("p",null,"\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"set enable_profile=true")," \u6253\u5f00\u4f1a\u8bdd\u53d8\u91cf\uff0c\u53ef\u4ee5\u5728 FE \u7684 web \u9875\u9762\u7684 Queris \u6807\u7b7e\u4e2d\u67e5\u770b\u5230\u4f5c\u4e1a\u7684 Profile\u3002File Cache \u76f8\u5173\u7684\u6307\u6807\u5982\u4e0b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"-  FileCache:\n  -  IOHitCacheNum:  552\n  -  IOTotalNum:  835\n  -  ReadFromFileCacheBytes:  19.98  MB\n  -  ReadFromWriteCacheBytes:  0.00  \n  -  ReadTotalBytes:  29.52  MB\n  -  WriteInFileCacheBytes:  915.77  MB\n  -  WriteInFileCacheNum:  283 \n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"IOTotalNum"),":  \u8fdc\u7a0b\u8bbf\u95ee\u7684\u6b21\u6570"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"IOHitCacheNum"),": \u547d\u4e2d\u7f13\u5b58\u7684\u6b21\u6570"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ReadFromFileCacheBytes"),": \u4ece\u7f13\u5b58\u6587\u4ef6\u4e2d\u8bfb\u53d6\u7684\u6570\u636e\u91cf"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ReadTotalBytes"),": \u603b\u5171\u8bfb\u53d6\u7684\u6570\u636e\u91cf"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SkipCacheBytes"),": \u521b\u5efa\u7f13\u5b58\u6587\u4ef6\u5931\u8d25\uff0c\u6216\u8005\u7f13\u5b58\u6587\u4ef6\u88ab\u5220\uff0c\u9700\u8981\u518d\u6b21\u4ece\u8fdc\u7a0b\u8bfb\u53d6\u7684\u6570\u636e\u91cf"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"WriteInFileCacheBytes"),": \u4fdd\u5b58\u5230\u7f13\u5b58\u6587\u4ef6\u4e2d\u7684\u6570\u636e\u91cf"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"WriteInFileCacheNum"),": \u4fdd\u5b58\u7684 Block \u6570\u91cf\uff0c\u6240\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"li"},"WriteInFileCacheBytes"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"WriteInFileCacheBytes")," \u4e3a Block \u7684\u5e73\u5747\u5927\u5c0f")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"IOHitCacheNum")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"IOTotalNum")," \u7b49\u4e8e1\uff0c\u8868\u793a\u7f13\u5b58\u5b8c\u5168\u547d\u4e2d"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ReadFromFileCacheBytes")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"ReadTotalBytes")," \u7b49\u4e8e1\uff0c\u8868\u793a\u7f13\u5b58\u5b8c\u5168\u547d\u4e2d"))}m.isMDXComponent=!0}}]);