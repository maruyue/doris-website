"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[27555],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(t),f=o,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||s;return t?r.createElement(m,l(l({ref:n},c),{},{components:t})):r.createElement(m,l({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,l=new Array(s);l[0]=f;var a={};for(var i in n)hasOwnProperty.call(n,i)&&(a[i]=n[i]);a.originalType=e,a[p]="string"==typeof e?e:o,l[1]=a;for(var u=2;u<s;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},39294:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var r=t(87462),o=(t(67294),t(3905));const s={title:"JSON_SET",language:"zh-CN"},l=void 0,a={unversionedId:"sql-manual/sql-functions/json-functions/json-set",id:"sql-manual/sql-functions/json-functions/json-set",title:"JSON_SET",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/json-functions/json-set.md",sourceDirName:"sql-manual/sql-functions/json-functions",slug:"/sql-manual/sql-functions/json-functions/json-set",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/json-functions/json-set",draft:!1,tags:[],version:"current",frontMatter:{title:"JSON_SET",language:"zh-CN"},sidebar:"docs",previous:{title:"JSON_REPLACE",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/json-functions/json-replace"},next:{title:"MURMUR_HASH3_32",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/hash-functions/murmur-hash3-32"}},i={},u=[{value:"json_set",id:"json_set",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:u},p="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"json_set"},"json_set"),(0,o.kt)("version",{since:"dev"}),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("h4",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"VARCHAR json_set(VARCHAR json_str, VARCHAR path, VARCHAR val[, VARCHAR path, VARCHAR val] ...)")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"json_set")," \u51fd\u6570\u5728 JSON \u4e2d\u63d2\u5165\u6216\u66f4\u65b0\u6570\u636e\u5e76\u8fd4\u56de\u7ed3\u679c\u3002\u5982\u679c ",(0,o.kt)("inlineCode",{parentName:"p"},"json_str")," \u6216 ",(0,o.kt)("inlineCode",{parentName:"p"},"path")," \u4e3a NULL\uff0c\u5219\u8fd4\u56de NULL\u3002\u5426\u5219\uff0c\u5982\u679c ",(0,o.kt)("inlineCode",{parentName:"p"},"json_str")," \u4e0d\u662f\u6709\u6548\u7684 JSON \u6216\u4efb\u4f55 ",(0,o.kt)("inlineCode",{parentName:"p"},"path")," \u53c2\u6570\u4e0d\u662f\u6709\u6548\u7684\u8def\u5f84\u8868\u8fbe\u5f0f\u6216\u5305\u542b\u4e86 * \u901a\u914d\u7b26\uff0c\u5219\u4f1a\u8fd4\u56de\u9519\u8bef\u3002"),(0,o.kt)("p",null,"\u8def\u5f84\u503c\u5bf9\u6309\u4ece\u5de6\u5230\u53f3\u7684\u987a\u5e8f\u8fdb\u884c\u8bc4\u4f30\u3002"),(0,o.kt)("p",null,"\u5982\u679c JSON \u4e2d\u5df2\u5b58\u5728\u67d0\u4e2a\u8def\u5f84\uff0c\u5219\u8def\u5f84\u503c\u5bf9\u4f1a\u5c06\u73b0\u6709 JSON \u503c\u8986\u76d6\u4e3a\u65b0\u503c\u3002\u5982\u679c JSON \u4e2d\u4e0d\u5b58\u5728\u8be5\u8def\u5f84\uff0c\u5219\u8def\u5f84\u503c\u5bf9\u4f1a\u6dfb\u52a0\u8be5\u503c\u5230 JSON \u4e2d\uff0c\u5982\u679c\u8def\u5f84\u6807\u8bc6\u67d0\u4e2a\u7c7b\u578b\u7684\u503c\uff0c\u5219\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u73b0\u6709\u5bf9\u8c61\u4e2d\u4e0d\u5b58\u5728\u7684\u6210\u5458\uff0c\u4f1a\u5c06\u65b0\u6210\u5458\u6dfb\u52a0\u5230\u8be5\u5bf9\u8c61\u4e2d\u5e76\u4e0e\u65b0\u503c\u76f8\u5173\u8054\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u73b0\u6709\u6570\u7ec4\u7ed3\u675f\u540e\u7684\u4f4d\u7f6e\uff0c\u8be5\u6570\u7ec4\u5c06\u6269\u5c55\u4e3a\u5305\u542b\u65b0\u503c\u3002\u5982\u679c\u73b0\u6709\u503c\u4e0d\u662f\u6570\u7ec4\uff0c\u5219\u81ea\u52a8\u8f6c\u6362\u4e3a\u6570\u7ec4\uff0c\u7136\u540e\u518d\u6269\u5c55\u4e3a\u5305\u542b\u65b0\u503c\u7684\u6570\u7ec4\u3002")),(0,o.kt)("p",null,"\u5426\u5219\uff0c\u5bf9\u4e8e JSON \u4e2d\u4e0d\u5b58\u5728\u7684\u67d0\u4e2a\u8def\u5f84\u7684\u8def\u5f84\u503c\u5bf9\u5c06\u88ab\u5ffd\u7565\u4e14\u4e0d\u4f1a\u4ea7\u751f\u4efb\u4f55\u5f71\u54cd\u3002"),(0,o.kt)("h3",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"MySQL> select json_set(null, null, null);\n+------------------------------+\n| json_set(NULL, NULL, 'NULL') |\n+------------------------------+\n| NULL                         |\n+------------------------------+\n\nMySQL> select json_set('{\"k\": 1}', \"$.k\", 2);\n+------------------------------------+\n| json_set('{\\\"k\\\": 1}', '$.k', '2') |\n+------------------------------------+\n| {\"k\":2}                            |\n+------------------------------------+\n\nMySQL> select json_set('{\"k\": 1}', \"$.j\", 2);\n+------------------------------------+\n| json_set('{\\\"k\\\": 1}', '$.j', '2') |\n+------------------------------------+\n| {\"k\":1,\"j\":2}                      |\n+------------------------------------+\n")),(0,o.kt)("h3",{id:"keywords"},"keywords"),(0,o.kt)("p",null,"JSON, json_set"))}d.isMDXComponent=!0}}]);