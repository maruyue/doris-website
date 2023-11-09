"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[93721],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,d=p["".concat(c,".").concat(m)]||p[m]||f[m]||o;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},61774:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={title:"EXTRACT_URL_PARAMETER",language:"zh-CN"},l=void 0,i={unversionedId:"sql-manual/sql-functions/string-functions/extract-url-parameter",id:"version-2.0/sql-manual/sql-functions/string-functions/extract-url-parameter",title:"EXTRACT_URL_PARAMETER",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/string-functions/extract-url-parameter.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/extract-url-parameter",permalink:"/zh-CN/docs/sql-manual/sql-functions/string-functions/extract-url-parameter",draft:!1,tags:[],version:"2.0",frontMatter:{title:"EXTRACT_URL_PARAMETER",language:"zh-CN"},sidebar:"docs",previous:{title:"CONVERT_TO",permalink:"/zh-CN/docs/sql-manual/sql-functions/string-functions/convert-to"},next:{title:"UUID",permalink:"/zh-CN/docs/sql-manual/sql-functions/string-functions/uuid"}},c={},s=[{value:"extract_url_parameter",id:"extract_url_parameter",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"keywords",id:"keywords",level:3}],u={toc:s},p="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"extract_url_parameter"},"extract_url_parameter"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"VARCHAR  extract_url_parameter(VARCHAR url, VARCHAR  name)")),(0,a.kt)("p",null,"\u8fd4\u56de URL \u4e2d\u201cname\u201d\u53c2\u6570\u7684\u503c\uff08\u5982\u679c\u5b58\u5728\uff09\u3002\u5426\u5219\u4e3a\u7a7a\u5b57\u7b26\u4e32\u3002\n\u5982\u679c\u6709\u8bb8\u591a\u5177\u6709\u6b64\u540d\u79f0\u7684\u53c2\u6570\uff0c\u5219\u8fd4\u56de\u7b2c\u4e00\u4e2a\u51fa\u73b0\u7684\u53c2\u6570\u3002\n\u6b64\u51fd\u6570\u7684\u5de5\u4f5c\u5047\u8bbe\u53c2\u6570\u540d\u79f0\u5728 URL \u4e2d\u7684\u7f16\u7801\u65b9\u5f0f\u4e0e\u5728\u4f20\u9012\u53c2\u6570\u4e2d\u7684\u7f16\u7801\u65b9\u5f0f\u5b8c\u5168\u76f8\u540c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> SELECT extract_url_parameter (\"http://doris.apache.org?k1=aa&k2=bb&test=cc#999\", \"k2\");\n+--------------------------------------------------------------------------------+\n| extract_url_parameter('http://doris.apache.org?k1=aa&k2=bb&test=cc#999', 'k2') |\n+--------------------------------------------------------------------------------+\n| bb                                                                             |\n+--------------------------------------------------------------------------------+\n")),(0,a.kt)("p",null,"\u5982\u679c\u60f3\u83b7\u53d6 URL \u4e2d\u7684\u5176\u4ed6\u90e8\u5206\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("a",{parentName:"p",href:"./parse_url.md"},"parse_url"),"\u3002"),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"EXTRACT URL PARAMETER\n")))}f.isMDXComponent=!0}}]);