"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[4774],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},48070:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"UTC_TIMESTAMP",language:"zh-CN"},o=void 0,l={unversionedId:"sql-manual/sql-functions/date-time-functions/utc-timestamp",id:"version-2.0/sql-manual/sql-functions/date-time-functions/utc-timestamp",title:"UTC_TIMESTAMP",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/date-time-functions/utc-timestamp.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/utc-timestamp",permalink:"/zh-CN/docs/sql-manual/sql-functions/date-time-functions/utc-timestamp",draft:!1,tags:[],version:"2.0",frontMatter:{title:"UTC_TIMESTAMP",language:"zh-CN"},sidebar:"docs",previous:{title:"UNIX_TIMESTAMP",permalink:"/zh-CN/docs/sql-manual/sql-functions/date-time-functions/unix-timestamp"},next:{title:"TO_DATE",permalink:"/zh-CN/docs/sql-manual/sql-functions/date-time-functions/to-date"}},s={},c=[{value:"utc_timestamp",id:"utc_timestamp",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"utc_timestamp"},"utc_timestamp"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"DATETIME UTC_TIMESTAMP()")),(0,a.kt)("p",null,'\u8fd4\u56de\u5f53\u524dUTC\u65e5\u671f\u548c\u65f6\u95f4\u5728 "YYYY-MM-DD HH:MM:SS" \u6216'),(0,a.kt)("p",null,'"YYYYMMDDHHMMSS"\u683c\u5f0f\u7684\u4e00\u4e2a\u503c'),(0,a.kt)("p",null,"\u6839\u636e\u8be5\u51fd\u6570\u662f\u5426\u7528\u5728\u5b57\u7b26\u4e32\u6216\u6570\u5b57\u8bed\u5883\u4e2d"),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> select utc_timestamp(),utc_timestamp() + 1;\n+---------------------+---------------------+\n| utc_timestamp()     | utc_timestamp() + 1 |\n+---------------------+---------------------+\n| 2019-07-10 12:31:18 |      20190710123119 |\n+---------------------+---------------------+\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"UTC_TIMESTAMP,UTC,TIMESTAMP\n")))}m.isMDXComponent=!0}}]);