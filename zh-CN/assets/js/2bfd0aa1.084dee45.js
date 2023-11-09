"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[13114],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>s});var n=a(67294);function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,p=function(e,t){if(null==e)return{};var a,n,p={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(p[a]=e[a]);return p}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(p[a]=e[a])}return p}var m=n.createContext({}),N=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},o=function(e){var t=N(e.components);return n.createElement(m.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},T=n.forwardRef((function(e,t){var a=e.components,p=e.mdxType,l=e.originalType,m=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),u=N(a),T=p,s=u["".concat(m,".").concat(T)]||u[T]||k[T]||l;return a?n.createElement(s,r(r({ref:t},o),{},{components:a})):n.createElement(s,r({ref:t},o))}));function s(e,t){var a=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var l=a.length,r=new Array(l);r[0]=T;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[u]="string"==typeof e?e:p,r[1]=i;for(var N=2;N<l;N++)r[N]=a[N];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}T.displayName="MDXCreateElement"},97703:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>r,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>N});var n=a(87462),p=(a(67294),a(3905));const l={title:"\u4e34\u65f6\u5206\u533a",language:"zh-CN"},r=void 0,i={unversionedId:"advanced/partition/table-temp-partition",id:"version-2.0/advanced/partition/table-temp-partition",title:"\u4e34\u65f6\u5206\u533a",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/advanced/partition/table-temp-partition.md",sourceDirName:"advanced/partition",slug:"/advanced/partition/table-temp-partition",permalink:"/zh-CN/docs/advanced/partition/table-temp-partition",draft:!1,tags:[],version:"2.0",frontMatter:{title:"\u4e34\u65f6\u5206\u533a",language:"zh-CN"},sidebar:"docs",previous:{title:"\u52a8\u6001\u5206\u533a",permalink:"/zh-CN/docs/advanced/partition/dynamic-partition"},next:{title:"\u81ea\u52a8\u5206\u533a",permalink:"/zh-CN/docs/advanced/partition/auto-partition"}},m={},N=[{value:"\u89c4\u5219",id:"\u89c4\u5219",level:2},{value:"\u652f\u6301\u7684\u64cd\u4f5c",id:"\u652f\u6301\u7684\u64cd\u4f5c",level:2},{value:"\u6dfb\u52a0\u4e34\u65f6\u5206\u533a",id:"\u6dfb\u52a0\u4e34\u65f6\u5206\u533a",level:3},{value:"\u5220\u9664\u4e34\u65f6\u5206\u533a",id:"\u5220\u9664\u4e34\u65f6\u5206\u533a",level:3},{value:"\u66ff\u6362\u5206\u533a",id:"\u66ff\u6362\u5206\u533a",level:3},{value:"\u4e34\u65f6\u5206\u533a\u7684\u5bfc\u5165\u548c\u67e5\u8be2",id:"\u4e34\u65f6\u5206\u533a\u7684\u5bfc\u5165\u548c\u67e5\u8be2",level:2},{value:"\u548c\u5176\u4ed6\u64cd\u4f5c\u7684\u5173\u7cfb",id:"\u548c\u5176\u4ed6\u64cd\u4f5c\u7684\u5173\u7cfb",level:2},{value:"DROP",id:"drop",level:3},{value:"TRUNCATE",id:"truncate",level:3},{value:"ALTER",id:"alter",level:3},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:2}],o={toc:N},u="wrapper";function k(e){let{components:t,...a}=e;return(0,p.kt)(u,(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"\u4e34\u65f6\u5206\u533a"},"\u4e34\u65f6\u5206\u533a"),(0,p.kt)("p",null,"\u5728 0.12 \u7248\u672c\u4e2d\uff0cDoris \u652f\u6301\u4e86\u4e34\u65f6\u5206\u533a\u529f\u80fd\u3002"),(0,p.kt)("p",null,"\u4e34\u65f6\u5206\u533a\u662f\u5f52\u5c5e\u4e8e\u67d0\u4e00\u5206\u533a\u8868\u7684\u3002\u53ea\u6709\u5206\u533a\u8868\u53ef\u4ee5\u521b\u5efa\u4e34\u65f6\u5206\u533a\u3002"),(0,p.kt)("h2",{id:"\u89c4\u5219"},"\u89c4\u5219"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u4e34\u65f6\u5206\u533a\u7684\u5206\u533a\u5217\u548c\u6b63\u5f0f\u5206\u533a\u76f8\u540c\uff0c\u4e14\u4e0d\u53ef\u4fee\u6539\u3002"),(0,p.kt)("li",{parentName:"ul"},"\u4e00\u5f20\u8868\u6240\u6709\u4e34\u65f6\u5206\u533a\u4e4b\u95f4\u7684\u5206\u533a\u8303\u56f4\u4e0d\u53ef\u91cd\u53e0\uff0c\u4f46\u4e34\u65f6\u5206\u533a\u7684\u8303\u56f4\u548c\u6b63\u5f0f\u5206\u533a\u8303\u56f4\u53ef\u4ee5\u91cd\u53e0\u3002"),(0,p.kt)("li",{parentName:"ul"},"\u4e34\u65f6\u5206\u533a\u7684\u5206\u533a\u540d\u79f0\u4e0d\u80fd\u548c\u6b63\u5f0f\u5206\u533a\u4ee5\u53ca\u5176\u4ed6\u4e34\u65f6\u5206\u533a\u91cd\u590d\u3002")),(0,p.kt)("h2",{id:"\u652f\u6301\u7684\u64cd\u4f5c"},"\u652f\u6301\u7684\u64cd\u4f5c"),(0,p.kt)("p",null,"\u4e34\u65f6\u5206\u533a\u652f\u6301\u6dfb\u52a0\u3001\u5220\u9664\u3001\u66ff\u6362\u64cd\u4f5c\u3002"),(0,p.kt)("h3",{id:"\u6dfb\u52a0\u4e34\u65f6\u5206\u533a"},"\u6dfb\u52a0\u4e34\u65f6\u5206\u533a"),(0,p.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",(0,p.kt)("inlineCode",{parentName:"p"},"ALTER TABLE ADD TEMPORARY PARTITION")," \u8bed\u53e5\u5bf9\u4e00\u4e2a\u8868\u6dfb\u52a0\u4e34\u65f6\u5206\u533a\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-text"},'ALTER TABLE tbl1 ADD TEMPORARY PARTITION tp1 VALUES LESS THAN("2020-02-01");\n\nALTER TABLE tbl2 ADD TEMPORARY PARTITION tp1 VALUES [("2020-01-01"), ("2020-02-01"));\n\nALTER TABLE tbl1 ADD TEMPORARY PARTITION tp1 VALUES LESS THAN("2020-02-01")\n("replication_num" = "1")\nDISTRIBUTED BY HASH(k1) BUCKETS 5;\n\nALTER TABLE tbl3 ADD TEMPORARY PARTITION tp1 VALUES IN ("Beijing", "Shanghai");\n\nALTER TABLE tbl4 ADD TEMPORARY PARTITION tp1 VALUES IN ((1, "Beijing"), (1, "Shanghai"));\n\nALTER TABLE tbl3 ADD TEMPORARY PARTITION tp1 VALUES IN ("Beijing", "Shanghai")\n("replication_num" = "1")\nDISTRIBUTED BY HASH(k1) BUCKETS 5;\n')),(0,p.kt)("p",null,"\u901a\u8fc7 ",(0,p.kt)("inlineCode",{parentName:"p"},"HELP ALTER TABLE;")," \u67e5\u770b\u66f4\u591a\u5e2e\u52a9\u548c\u793a\u4f8b\u3002"),(0,p.kt)("p",null,"\u6dfb\u52a0\u64cd\u4f5c\u7684\u4e00\u4e9b\u8bf4\u660e\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u4e34\u65f6\u5206\u533a\u7684\u6dfb\u52a0\u548c\u6b63\u5f0f\u5206\u533a\u7684\u6dfb\u52a0\u64cd\u4f5c\u76f8\u4f3c\u3002\u4e34\u65f6\u5206\u533a\u7684\u5206\u533a\u8303\u56f4\u72ec\u7acb\u4e8e\u6b63\u5f0f\u5206\u533a\u3002"),(0,p.kt)("li",{parentName:"ul"},"\u4e34\u65f6\u5206\u533a\u53ef\u4ee5\u72ec\u7acb\u6307\u5b9a\u4e00\u4e9b\u5c5e\u6027\u3002\u5305\u62ec\u5206\u6876\u6570\u3001\u526f\u672c\u6570\u3001\u5b58\u50a8\u4ecb\u8d28\u7b49\u4fe1\u606f\u3002")),(0,p.kt)("h3",{id:"\u5220\u9664\u4e34\u65f6\u5206\u533a"},"\u5220\u9664\u4e34\u65f6\u5206\u533a"),(0,p.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",(0,p.kt)("inlineCode",{parentName:"p"},"ALTER TABLE DROP TEMPORARY PARTITION")," \u8bed\u53e5\u5220\u9664\u4e00\u4e2a\u8868\u7684\u4e34\u65f6\u5206\u533a\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-text"},"ALTER TABLE tbl1 DROP TEMPORARY PARTITION tp1;\n")),(0,p.kt)("p",null,"\u901a\u8fc7 ",(0,p.kt)("inlineCode",{parentName:"p"},"HELP ALTER TABLE;")," \u67e5\u770b\u66f4\u591a\u5e2e\u52a9\u548c\u793a\u4f8b\u3002"),(0,p.kt)("p",null,"\u5220\u9664\u64cd\u4f5c\u7684\u4e00\u4e9b\u8bf4\u660e\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u5220\u9664\u4e34\u65f6\u5206\u533a\uff0c\u4e0d\u5f71\u54cd\u6b63\u5f0f\u5206\u533a\u7684\u6570\u636e\u3002")),(0,p.kt)("h3",{id:"\u66ff\u6362\u5206\u533a"},"\u66ff\u6362\u5206\u533a"),(0,p.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",(0,p.kt)("inlineCode",{parentName:"p"},"ALTER TABLE REPLACE PARTITION")," \u8bed\u53e5\u5c06\u4e00\u4e2a\u8868\u7684\u6b63\u5f0f\u5206\u533a\u66ff\u6362\u4e3a\u4e34\u65f6\u5206\u533a\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-text"},'ALTER TABLE tbl1 REPLACE PARTITION (p1) WITH TEMPORARY PARTITION (tp1);\n\nALTER TABLE tbl1 REPLACE PARTITION (p1, p2) WITH TEMPORARY PARTITION (tp1, tp2, tp3);\n\nALTER TABLE tbl1 REPLACE PARTITION (p1, p2) WITH TEMPORARY PARTITION (tp1, tp2)\nPROPERTIES (\n    "strict_range" = "false",\n    "use_temp_partition_name" = "true"\n);\n')),(0,p.kt)("p",null,"\u901a\u8fc7 ",(0,p.kt)("inlineCode",{parentName:"p"},"HELP ALTER TABLE;")," \u67e5\u770b\u66f4\u591a\u5e2e\u52a9\u548c\u793a\u4f8b\u3002"),(0,p.kt)("p",null,"\u66ff\u6362\u64cd\u4f5c\u6709\u4e24\u4e2a\u7279\u6b8a\u7684\u53ef\u9009\u53c2\u6570\uff1a"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"strict_range")),(0,p.kt)("p",{parentName:"li"},"\u9ed8\u8ba4\u4e3a true\u3002"),(0,p.kt)("p",{parentName:"li"},"\u5bf9\u4e8e Range \u5206\u533a\uff0c\u5f53\u8be5\u53c2\u6570\u4e3a true \u65f6\uff0c\u8868\u793a\u8981\u88ab\u66ff\u6362\u7684\u6240\u6709\u6b63\u5f0f\u5206\u533a\u7684\u8303\u56f4\u5e76\u96c6\u9700\u8981\u548c\u66ff\u6362\u7684\u4e34\u65f6\u5206\u533a\u7684\u8303\u56f4\u5e76\u96c6\u5b8c\u5168\u76f8\u540c\u3002\u5f53\u7f6e\u4e3a false \u65f6\uff0c\u53ea\u9700\u8981\u4fdd\u8bc1\u66ff\u6362\u540e\uff0c\u65b0\u7684\u6b63\u5f0f\u5206\u533a\u95f4\u7684\u8303\u56f4\u4e0d\u91cd\u53e0\u5373\u53ef\u3002"),(0,p.kt)("p",{parentName:"li"},"\u5bf9\u4e8e List \u5206\u533a\uff0c\u8be5\u53c2\u6570\u6052\u4e3a true\u3002\u8981\u88ab\u66ff\u6362\u7684\u6240\u6709\u6b63\u5f0f\u5206\u533a\u7684\u679a\u4e3e\u503c\u5fc5\u987b\u548c\u66ff\u6362\u7684\u4e34\u65f6\u5206\u533a\u679a\u4e3e\u503c\u5b8c\u5168\u76f8\u540c\u3002"),(0,p.kt)("p",{parentName:"li"},"\u4e0b\u9762\u4e3e\u4f8b\u8bf4\u660e\uff1a"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u793a\u4f8b1"),(0,p.kt)("p",{parentName:"li"},"\u5f85\u66ff\u6362\u7684\u5206\u533a p1, p2, p3 \u7684\u8303\u56f4 (=> \u5e76\u96c6)\uff1a"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-text"},"[10, 20), [20, 30), [40, 50) => [10, 30), [40, 50)\n")),(0,p.kt)("p",{parentName:"li"},"\u66ff\u6362\u5206\u533a tp1, tp2 \u7684\u8303\u56f4(=> \u5e76\u96c6)\uff1a"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-text"},"[10, 30), [40, 45), [45, 50) => [10, 30), [40, 50)\n")),(0,p.kt)("p",{parentName:"li"},"\u8303\u56f4\u5e76\u96c6\u76f8\u540c\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528 tp1 \u548c tp2 \u66ff\u6362 p1, p2, p3\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u793a\u4f8b2"),(0,p.kt)("p",{parentName:"li"},"\u5f85\u66ff\u6362\u7684\u5206\u533a p1 \u7684\u8303\u56f4 (=> \u5e76\u96c6)\uff1a"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-text"},"[10, 50) => [10, 50)\n")),(0,p.kt)("p",{parentName:"li"},"\u66ff\u6362\u5206\u533a tp1, tp2 \u7684\u8303\u56f4(=> \u5e76\u96c6)\uff1a"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-text"},"[10, 30), [40, 50) => [10, 30), [40, 50)\n")),(0,p.kt)("p",{parentName:"li"},"\u8303\u56f4\u5e76\u96c6\u4e0d\u76f8\u540c\uff0c\u5982\u679c ",(0,p.kt)("inlineCode",{parentName:"p"},"strict_range")," \u4e3a true\uff0c\u5219\u4e0d\u53ef\u4ee5\u4f7f\u7528 tp1 \u548c tp2 \u66ff\u6362 p1\u3002\u5982\u679c\u4e3a false\uff0c\u4e14\u66ff\u6362\u540e\u7684\u4e24\u4e2a\u5206\u533a\u8303\u56f4 ",(0,p.kt)("inlineCode",{parentName:"p"},"[10, 30), [40, 50)")," \u548c\u5176\u4ed6\u6b63\u5f0f\u5206\u533a\u4e0d\u91cd\u53e0\uff0c\u5219\u53ef\u4ee5\u66ff\u6362\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u793a\u4f8b3"),(0,p.kt)("p",{parentName:"li"},"\u5f85\u66ff\u6362\u7684\u5206\u533a p1, p2 \u7684\u679a\u4e3e\u503c(=> \u5e76\u96c6)\uff1a"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-text"},"(1, 2, 3), (4, 5, 6) => (1, 2, 3, 4, 5, 6)\n")),(0,p.kt)("p",{parentName:"li"},"\u66ff\u6362\u5206\u533a tp1, tp2, tp3 \u7684\u679a\u4e3e\u503c(=> \u5e76\u96c6)\uff1a"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-text"},"(1, 2, 3), (4), (5, 6) => (1, 2, 3, 4, 5, 6)\n")),(0,p.kt)("p",{parentName:"li"},"\u679a\u4e3e\u503c\u5e76\u96c6\u76f8\u540c\uff0c\u53ef\u4ee5\u4f7f\u7528 tp1\uff0ctp2\uff0ctp3 \u66ff\u6362 p1\uff0cp2")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u793a\u4f8b4"),(0,p.kt)("p",{parentName:"li"},"\u5f85\u66ff\u6362\u7684\u5206\u533a p1, p2\uff0cp3 \u7684\u679a\u4e3e\u503c(=> \u5e76\u96c6)\uff1a"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-text"},'(("1","beijing"), ("1", "shanghai")), (("2","beijing"), ("2", "shanghai")), (("3","beijing"), ("3", "shanghai")) => (("1","beijing"), ("1", "shanghai"), ("2","beijing"), ("2", "shanghai"), ("3","beijing"), ("3", "shanghai"))\n')),(0,p.kt)("p",{parentName:"li"},"\u66ff\u6362\u5206\u533a tp1, tp2 \u7684\u679a\u4e3e\u503c(=> \u5e76\u96c6)\uff1a"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-text"},'(("1","beijing"), ("1", "shanghai")), (("2","beijing"), ("2", "shanghai"), ("3","beijing"), ("3", "shanghai")) => (("1","beijing"), ("1", "shanghai"), ("2","beijing"), ("2", "shanghai"), ("3","beijing"), ("3", "shanghai"))\n')),(0,p.kt)("p",{parentName:"li"},"\u679a\u4e3e\u503c\u5e76\u96c6\u76f8\u540c\uff0c\u53ef\u4ee5\u4f7f\u7528 tp1\uff0ctp2 \u66ff\u6362 p1\uff0cp2\uff0cp3")))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"use_temp_partition_name")),(0,p.kt)("p",{parentName:"li"},"\u9ed8\u8ba4\u4e3a false\u3002\u5f53\u8be5\u53c2\u6570\u4e3a false\uff0c\u5e76\u4e14\u5f85\u66ff\u6362\u7684\u5206\u533a\u548c\u66ff\u6362\u5206\u533a\u7684\u4e2a\u6570\u76f8\u540c\u65f6\uff0c\u5219\u66ff\u6362\u540e\u7684\u6b63\u5f0f\u5206\u533a\u540d\u79f0\u7ef4\u6301\u4e0d\u53d8\u3002\u5982\u679c\u4e3a true\uff0c\u5219\u66ff\u6362\u540e\uff0c\u6b63\u5f0f\u5206\u533a\u7684\u540d\u79f0\u4e3a\u66ff\u6362\u5206\u533a\u7684\u540d\u79f0\u3002\u4e0b\u9762\u4e3e\u4f8b\u8bf4\u660e\uff1a"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u793a\u4f8b1"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-text"},"ALTER TABLE tbl1 REPLACE PARTITION (p1) WITH TEMPORARY PARTITION (tp1);\n")),(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"use_temp_partition_name")," \u9ed8\u8ba4\u4e3a false\uff0c\u5219\u5728\u66ff\u6362\u540e\uff0c\u5206\u533a\u7684\u540d\u79f0\u4f9d\u7136\u4e3a p1\uff0c\u4f46\u662f\u76f8\u5173\u7684\u6570\u636e\u548c\u5c5e\u6027\u90fd\u66ff\u6362\u4e3a tp1 \u7684\u3002"),(0,p.kt)("p",{parentName:"li"},"\u5982\u679c ",(0,p.kt)("inlineCode",{parentName:"p"},"use_temp_partition_name")," \u9ed8\u8ba4\u4e3a true\uff0c\u5219\u5728\u66ff\u6362\u540e\uff0c\u5206\u533a\u7684\u540d\u79f0\u4e3a tp1\u3002p1 \u5206\u533a\u4e0d\u518d\u5b58\u5728\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u793a\u4f8b2"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-text"},"ALTER TABLE tbl1 REPLACE PARTITION (p1, p2) WITH TEMPORARY PARTITION (tp1);\n")),(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"use_temp_partition_name")," \u9ed8\u8ba4\u4e3a false\uff0c\u4f46\u56e0\u4e3a\u5f85\u66ff\u6362\u5206\u533a\u7684\u4e2a\u6570\u548c\u66ff\u6362\u5206\u533a\u7684\u4e2a\u6570\u4e0d\u540c\uff0c\u5219\u8be5\u53c2\u6570\u65e0\u6548\u3002\u66ff\u6362\u540e\uff0c\u5206\u533a\u540d\u79f0\u4e3a tp1\uff0cp1 \u548c p2 \u4e0d\u518d\u5b58\u5728\u3002"))))),(0,p.kt)("p",null,"\u66ff\u6362\u64cd\u4f5c\u7684\u4e00\u4e9b\u8bf4\u660e\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u5206\u533a\u66ff\u6362\u6210\u529f\u540e\uff0c\u88ab\u66ff\u6362\u7684\u5206\u533a\u5c06\u88ab\u5220\u9664\u4e14\u4e0d\u53ef\u6062\u590d\u3002")),(0,p.kt)("h2",{id:"\u4e34\u65f6\u5206\u533a\u7684\u5bfc\u5165\u548c\u67e5\u8be2"},"\u4e34\u65f6\u5206\u533a\u7684\u5bfc\u5165\u548c\u67e5\u8be2"),(0,p.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u5c06\u6570\u636e\u5bfc\u5165\u5230\u4e34\u65f6\u5206\u533a\uff0c\u4e5f\u53ef\u4ee5\u6307\u5b9a\u4e34\u65f6\u5206\u533a\u8fdb\u884c\u67e5\u8be2\u3002"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u5bfc\u5165\u4e34\u65f6\u5206\u533a"),(0,p.kt)("p",{parentName:"li"},"\u6839\u636e\u5bfc\u5165\u65b9\u5f0f\u7684\u4e0d\u540c\uff0c\u6307\u5b9a\u5bfc\u5165\u4e34\u65f6\u5206\u533a\u7684\u8bed\u6cd5\u7a0d\u6709\u5dee\u522b\u3002\u8fd9\u91cc\u901a\u8fc7\u793a\u4f8b\u8fdb\u884c\u7b80\u5355\u8bf4\u660e"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-text"},"INSERT INTO tbl TEMPORARY PARTITION(tp1, tp2, ...) SELECT ....\n")),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-text"},'curl --location-trusted -u root: -H "label:123" -H "temporary_partitions: tp1, tp2, ..." -T testData http://host:port/api/testDb/testTbl/_stream_load    \n')),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-text"},'LOAD LABEL example_db.label1\n(\nDATA INFILE("hdfs://hdfs_host:hdfs_port/user/palo/data/input/file")\nINTO TABLE `my_table`\nTEMPORARY PARTITION (tp1, tp2, ...)\n...\n)\nWITH BROKER hdfs ("username"="hdfs_user", "password"="hdfs_password");\n')),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-text"},"CREATE ROUTINE LOAD example_db.test1 ON example_tbl\nCOLUMNS(k1, k2, k3, v1, v2, v3 = k1 * 100),\nTEMPORARY PARTITIONS(tp1, tp2, ...),\nWHERE k1 > 100\nPROPERTIES\n(...)\nFROM KAFKA\n(...);\n"))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u67e5\u8be2\u4e34\u65f6\u5206\u533a"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-text"},"SELECT ... FROM\ntbl1 TEMPORARY PARTITION(tp1, tp2, ...)\nJOIN\ntbl2 TEMPORARY PARTITION(tp1, tp2, ...)\nON ...\nWHERE ...;\n")))),(0,p.kt)("h2",{id:"\u548c\u5176\u4ed6\u64cd\u4f5c\u7684\u5173\u7cfb"},"\u548c\u5176\u4ed6\u64cd\u4f5c\u7684\u5173\u7cfb"),(0,p.kt)("h3",{id:"drop"},"DROP"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u4f7f\u7528 Drop \u64cd\u4f5c\u76f4\u63a5\u5220\u9664\u6570\u636e\u5e93\u6216\u8868\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7 Recover \u547d\u4ee4\u6062\u590d\u6570\u636e\u5e93\u6216\u8868\uff08\u9650\u5b9a\u65f6\u95f4\u5185\uff09\uff0c\u4f46\u4e34\u65f6\u5206\u533a\u4e0d\u4f1a\u88ab\u6062\u590d\u3002"),(0,p.kt)("li",{parentName:"ul"},"\u4f7f\u7528 Alter \u547d\u4ee4\u5220\u9664\u6b63\u5f0f\u5206\u533a\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7 Recover \u547d\u4ee4\u6062\u590d\u5206\u533a\uff08\u9650\u5b9a\u65f6\u95f4\u5185\uff09\u3002\u64cd\u4f5c\u6b63\u5f0f\u5206\u533a\u548c\u4e34\u65f6\u5206\u533a\u65e0\u5173\u3002"),(0,p.kt)("li",{parentName:"ul"},"\u4f7f\u7528 Alter \u547d\u4ee4\u5220\u9664\u4e34\u65f6\u5206\u533a\u540e\uff0c\u65e0\u6cd5\u901a\u8fc7 Recover \u547d\u4ee4\u6062\u590d\u4e34\u65f6\u5206\u533a\u3002")),(0,p.kt)("h3",{id:"truncate"},"TRUNCATE"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u4f7f\u7528 Truncate \u547d\u4ee4\u6e05\u7a7a\u8868\uff0c\u8868\u7684\u4e34\u65f6\u5206\u533a\u4f1a\u88ab\u5220\u9664\uff0c\u4e14\u4e0d\u53ef\u6062\u590d\u3002"),(0,p.kt)("li",{parentName:"ul"},"\u4f7f\u7528 Truncate \u547d\u4ee4\u6e05\u7a7a\u6b63\u5f0f\u5206\u533a\u65f6\uff0c\u4e0d\u5f71\u54cd\u4e34\u65f6\u5206\u533a\u3002"),(0,p.kt)("li",{parentName:"ul"},"\u4e0d\u53ef\u4f7f\u7528 Truncate \u547d\u4ee4\u6e05\u7a7a\u4e34\u65f6\u5206\u533a\u3002")),(0,p.kt)("h3",{id:"alter"},"ALTER"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u5f53\u8868\u5b58\u5728\u4e34\u65f6\u5206\u533a\u65f6\uff0c\u65e0\u6cd5\u4f7f\u7528 Alter \u547d\u4ee4\u5bf9\u8868\u8fdb\u884c Schema Change\u3001Rollup \u7b49\u53d8\u66f4\u64cd\u4f5c\u3002"),(0,p.kt)("li",{parentName:"ul"},"\u5f53\u8868\u5728\u8fdb\u884c\u53d8\u66f4\u64cd\u4f5c\u65f6\uff0c\u65e0\u6cd5\u5bf9\u8868\u6dfb\u52a0\u4e34\u65f6\u5206\u533a\u3002")),(0,p.kt)("h2",{id:"\u6700\u4f73\u5b9e\u8df5"},"\u6700\u4f73\u5b9e\u8df5"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u539f\u5b50\u7684\u8986\u76d6\u5199\u64cd\u4f5c"),(0,p.kt)("p",{parentName:"li"},"\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u7528\u6237\u5e0c\u671b\u80fd\u591f\u91cd\u5199\u67d0\u4e00\u5206\u533a\u7684\u6570\u636e\uff0c\u4f46\u5982\u679c\u91c7\u7528\u5148\u5220\u9664\u518d\u5bfc\u5165\u7684\u65b9\u5f0f\u8fdb\u884c\uff0c\u5728\u4e2d\u95f4\u4f1a\u6709\u4e00\u6bb5\u65f6\u95f4\u65e0\u6cd5\u67e5\u770b\u6570\u636e\u3002\u8fd9\u65f6\uff0c\u7528\u6237\u53ef\u4ee5\u5148\u521b\u5efa\u4e00\u4e2a\u5bf9\u5e94\u7684\u4e34\u65f6\u5206\u533a\uff0c\u5c06\u65b0\u7684\u6570\u636e\u5bfc\u5165\u5230\u4e34\u65f6\u5206\u533a\u540e\uff0c\u901a\u8fc7\u66ff\u6362\u64cd\u4f5c\uff0c\u539f\u5b50\u7684\u66ff\u6362\u539f\u6709\u5206\u533a\uff0c\u4ee5\u8fbe\u5230\u76ee\u7684\u3002\u5bf9\u4e8e\u975e\u5206\u533a\u8868\u7684\u539f\u5b50\u8986\u76d6\u5199\u64cd\u4f5c\uff0c\u8bf7\u53c2\u9605",(0,p.kt)("a",{parentName:"p",href:"/zh-CN/docs/advanced/alter-table/replace-table"},"\u66ff\u6362\u8868\u6587\u6863"))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u4fee\u6539\u5206\u6876\u6570"),(0,p.kt)("p",{parentName:"li"},"\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u7528\u6237\u5728\u521b\u5efa\u5206\u533a\u65f6\u4f7f\u7528\u4e86\u4e0d\u5408\u9002\u7684\u5206\u6876\u6570\u3002\u5219\u7528\u6237\u53ef\u4ee5\u5148\u521b\u5efa\u4e00\u4e2a\u5bf9\u5e94\u5206\u533a\u8303\u56f4\u7684\u4e34\u65f6\u5206\u533a\uff0c\u5e76\u6307\u5b9a\u65b0\u7684\u5206\u6876\u6570\u3002\u7136\u540e\u901a\u8fc7 ",(0,p.kt)("inlineCode",{parentName:"p"},"INSERT INTO")," \u547d\u4ee4\u5c06\u6b63\u5f0f\u5206\u533a\u7684\u6570\u636e\u5bfc\u5165\u5230\u4e34\u65f6\u5206\u533a\u4e2d\uff0c\u901a\u8fc7\u66ff\u6362\u64cd\u4f5c\uff0c\u539f\u5b50\u7684\u66ff\u6362\u539f\u6709\u5206\u533a\uff0c\u4ee5\u8fbe\u5230\u76ee\u7684\u3002")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u5408\u5e76\u6216\u5206\u5272\u5206\u533a"),(0,p.kt)("p",{parentName:"li"},"\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u7528\u6237\u5e0c\u671b\u5bf9\u5206\u533a\u7684\u8303\u56f4\u8fdb\u884c\u4fee\u6539\uff0c\u6bd4\u5982\u5408\u5e76\u4e24\u4e2a\u5206\u533a\uff0c\u6216\u5c06\u4e00\u4e2a\u5927\u5206\u533a\u5206\u5272\u6210\u591a\u4e2a\u5c0f\u5206\u533a\u3002\u5219\u7528\u6237\u53ef\u4ee5\u5148\u5efa\u7acb\u5bf9\u5e94\u5408\u5e76\u6216\u5206\u5272\u540e\u8303\u56f4\u7684\u4e34\u65f6\u5206\u533a\uff0c\u7136\u540e\u901a\u8fc7 ",(0,p.kt)("inlineCode",{parentName:"p"},"INSERT INTO")," \u547d\u4ee4\u5c06\u6b63\u5f0f\u5206\u533a\u7684\u6570\u636e\u5bfc\u5165\u5230\u4e34\u65f6\u5206\u533a\u4e2d\uff0c\u901a\u8fc7\u66ff\u6362\u64cd\u4f5c\uff0c\u539f\u5b50\u7684\u66ff\u6362\u539f\u6709\u5206\u533a\uff0c\u4ee5\u8fbe\u5230\u76ee\u7684\u3002"))))}k.isMDXComponent=!0}}]);