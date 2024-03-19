"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[68661],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>d});var n=r(296540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),g=a,d=c["".concat(s,".").concat(g)]||c[g]||m[g]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},244045:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(58168),a=(r(296540),r(15680));const o={title:"Release 2.0.6",language:"en"},i=void 0,l={unversionedId:"releasenotes/release-2.0.6",id:"version-2.0/releasenotes/release-2.0.6",title:"Release 2.0.6",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/releasenotes/release-2.0.6.md",sourceDirName:"releasenotes",slug:"/releasenotes/release-2.0.6",permalink:"/docs/2.0/releasenotes/release-2.0.6",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Release 2.0.6",language:"en"},sidebar:"docs",previous:{title:"FAQ",permalink:"/docs/2.0/faq/lakehouse-faq"},next:{title:"Release 2.0.5",permalink:"/docs/2.0/releasenotes/release-2.0.5"}},s={},p=[{value:"Behavior change",id:"behavior-change",level:2},{value:"New features",id:"new-features",level:2},{value:"Improvement and optimizations",id:"improvement-and-optimizations",level:2},{value:"Credits",id:"credits",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(c,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Thanks to our community users and developers, about 114 improvements and bug fixes have been created by 51 contributors in Doris 2.0.6 version."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Quick Download\uff1a")," ",(0,a.yg)("a",{parentName:"p",href:"https://doris.apache.org/download/"},"https://doris.apache.org/download/")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"GitHub\uff1a")," ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/releases"},"https://github.com/apache/doris/releases")),(0,a.yg)("h2",{id:"behavior-change"},"Behavior change"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"N/A")),(0,a.yg)("h2",{id:"new-features"},"New features"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Support match a function with alias in materialized-view"),(0,a.yg)("li",{parentName:"ul"},"Add a command to drop a tablet replica safely on backend"),(0,a.yg)("li",{parentName:"ul"},"Add row count cache for external table."),(0,a.yg)("li",{parentName:"ul"},"Support analyze rollup to gather statistics for optimizer")),(0,a.yg)("h2",{id:"improvement-and-optimizations"},"Improvement and optimizations"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Improve tablet schema cache memory by using deterministic way to serialize protobuf"),(0,a.yg)("li",{parentName:"ul"},"Improve show column stats performance"),(0,a.yg)("li",{parentName:"ul"},"Support estimate row count for iceberg and paimon"),(0,a.yg)("li",{parentName:"ul"},"Support sqlserver timestamp type read for JDBC catalog")),(0,a.yg)("p",null,"See the complete list of improvements and bug fixes on ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/compare/2.0.5-rc02...2.0.6"},"github"),"."),(0,a.yg)("h2",{id:"credits"},"Credits"),(0,a.yg)("p",null,"Thanks all who contribute to this release:"),(0,a.yg)("p",null,"924060929, AshinGau, BePPPower, BiteTheDDDDt, CalvinKirs, cambyzju, deardeng, DongLiang-0, eldenmoon, englefly, feelshana, feiniaofeiafei, felixwluo, HappenLee, hust-hhb, iwanttobepowerful, ixzc, JackDrogon, Jibing-Li, KassieZ, larshelge, liaoxin01, LiBinfeng-01, liutang123, luennng, morningman, morrySnow, mrhhsg, qidaye, starocean999, TangSiyang2001, wangbo, wsjz, wuwenchi, xiaokang, XieJiann, xuwei0912, xy720, xzj7019, yiguolei, yujun777, Yukang-Lian, Yulei-Yang, zclllyybb, zddr, zhangstar333, zhannngchen, zhiqiang-hhhh, zy-kkk, zzzxl1993"))}m.isMDXComponent=!0}}]);