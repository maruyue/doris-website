"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[26455],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>E});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,E=u["".concat(c,".").concat(d)]||u[d]||m[d]||l;return r?a.createElement(E,i(i({ref:t},p),{},{components:r})):a.createElement(E,i({ref:t},p))}));function E(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},11846:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const l={title:"CREATE-DATABASE",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-DATABASE",id:"sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-DATABASE",title:"CREATE-DATABASE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-DATABASE.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Create",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-DATABASE",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-DATABASE",draft:!1,tags:[],version:"current",frontMatter:{title:"CREATE-DATABASE",language:"zh-CN"},sidebar:"docs",previous:{title:"CREATE-CATALOG",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-CATALOG"},next:{title:"CREATE-TABLE",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE"}},c={},s=[{value:"CREATE-DATABASE",id:"create-database",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"create-database"},"CREATE-DATABASE"),(0,n.kt)("h3",{id:"name"},"Name"),(0,n.kt)("p",null,"CREATE DATABASE"),(0,n.kt)("h3",{id:"description"},"Description"),(0,n.kt)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u65b0\u5efa\u6570\u636e\u5e93\uff08database\uff09"),(0,n.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE DATABASE [IF NOT EXISTS] db_name\n    [PROPERTIES ("key"="value", ...)];\n')),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"PROPERTIES")," \u8be5\u6570\u636e\u5e93\u7684\u9644\u52a0\u4fe1\u606f\uff0c\u53ef\u4ee5\u7f3a\u7701\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5982\u679c\u521b\u5efa Iceberg \u6570\u636e\u5e93\uff0c\u5219\u9700\u8981\u5728 properties \u4e2d\u63d0\u4f9b\u4ee5\u4e0b\u4fe1\u606f\uff1a"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'PROPERTIES (\n  "iceberg.database" = "iceberg_db_name",\n  "iceberg.hive.metastore.uris" = "thrift://127.0.0.1:9083",\n  "iceberg.catalog.type" = "HIVE_CATALOG"\n)\n')),(0,n.kt)("p",{parentName:"li"},"\u53c2\u6570\u8bf4\u660e\uff1a"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ceberg.database")," \uff1aIceberg \u5bf9\u5e94\u7684\u5e93\u540d\uff1b"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"iceberg.hive.metastore.uris")," \uff1ahive metastore \u670d\u52a1\u5730\u5740;"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"iceberg.catalog.type"),"\uff1a \u9ed8\u8ba4\u4e3a ",(0,n.kt)("inlineCode",{parentName:"li"},"HIVE_CATALOG"),"\uff1b\u5f53\u524d\u4ec5\u652f\u6301 ",(0,n.kt)("inlineCode",{parentName:"li"},"HIVE_CATALOG"),"\uff0c\u540e\u7eed\u4f1a\u652f\u6301\u66f4\u591a Iceberg catalog \u7c7b\u578b\u3002")))),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u65b0\u5efa\u6570\u636e\u5e93 db_test"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE db_test;\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u65b0\u5efa Iceberg \u6570\u636e\u5e93 iceberg_test"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE DATABASE `iceberg_test`\nPROPERTIES (\n    "iceberg.database" = "doris",\n    "iceberg.hive.metastore.uris" = "thrift://127.0.0.1:9083",\n    "iceberg.catalog.type" = "HIVE_CATALOG"\n);\n')))),(0,n.kt)("h3",{id:"keywords"},"Keywords"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"CREATE, DATABASE\n")),(0,n.kt)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);