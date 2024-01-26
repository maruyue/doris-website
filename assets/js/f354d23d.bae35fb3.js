"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[92891],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(a),d=n,h=c["".concat(p,".").concat(d)]||c[d]||m[d]||i;return a?r.createElement(h,o(o({ref:t},u),{},{components:a})):r.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},90143:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const i={title:"Apache Doris 2.0.4 just released",summary:"Thanks to our community users and developers, 333 improvements and bug fixes have been made in Doris 2.0.4.",date:"2024-01-26",author:"Apache Doris",tags:["Release Notes"],picked:"true",order:"1",image:"/images/2.0.4.png"},o=void 0,l={permalink:"/blog/release-note-2.0.4",source:"@site/blog/release-note-2.0.4.md",title:"Apache Doris 2.0.4 just released",description:"\x3c!--",date:"2024-01-26T00:00:00.000Z",formattedDate:"January 26, 2024",tags:[{label:"Release Notes",permalink:"/blog/tags/release-notes"}],hasTruncateMarker:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"Apache Doris 2.0.4 just released",summary:"Thanks to our community users and developers, 333 improvements and bug fixes have been made in Doris 2.0.4.",date:"2024-01-26",author:"Apache Doris",tags:["Release Notes"],picked:"true",order:"1",image:"/images/2.0.4.png"},nextItem:{title:"The financial sector's choice: fast, secure, and highly available real-time data warehousing based on Apache Doris",permalink:"/blog/a-fast-secure-high-available-real-time-data-warehouse-based-on-apache-doris"}},p={authorsImageUrls:[void 0]},s=[{value:"Behavior change",id:"behavior-change",level:2},{value:"New features",id:"new-features",level:2},{value:"Three Improvement and optimizations",id:"three-improvement-and-optimizations",level:2},{value:"Credits",id:"credits",level:2}],u={toc:s},c="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Thanks to our community users and developers, about 333 improvements and bug fixes have been made in Doris 2.0.4 version."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Quick Download")," : ",(0,n.kt)("a",{parentName:"p",href:"https://doris.apache.org/download/"},"https://doris.apache.org/download/")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"GitHub")," : ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/releases"},"https://github.com/apache/doris/releases")),(0,n.kt)("h2",{id:"behavior-change"},"Behavior change"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"More reasonable and accurate precision and scale inference for decimal data type\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/28034"},"[improvement](decimal) use new way for decimal arithmetic precision promotion(#27787) #28034"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Support drop policy for user or role\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/29488"},"[fix](polixy)support drop policy for user or role #29488")))),(0,n.kt)("h2",{id:"new-features"},"New features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Support datev1, datetimev1 and decimalv2 datatypes in new optimizer Nereids."),(0,n.kt)("li",{parentName:"ul"},"Support ODBC table for new optimizer Nereids."),(0,n.kt)("li",{parentName:"ul"},"Add ",(0,n.kt)("inlineCode",{parentName:"li"},"lower_case")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"ignore_above")," option for inverted index"),(0,n.kt)("li",{parentName:"ul"},"Support ",(0,n.kt)("inlineCode",{parentName:"li"},"match_regexp")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"match_phrase_prefix")," optimization by inverted index"),(0,n.kt)("li",{parentName:"ul"},"Support paimon native reader in datalake"),(0,n.kt)("li",{parentName:"ul"},"Support audit-log for ",(0,n.kt)("inlineCode",{parentName:"li"},"insert into")," SQL"),(0,n.kt)("li",{parentName:"ul"},"Support reading parquet file in lzo compressed format")),(0,n.kt)("h2",{id:"three-improvement-and-optimizations"},"Three Improvement and optimizations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Improve storage management including balance, migration, publish and others."),(0,n.kt)("li",{parentName:"ul"},"Improve storage cooldown policy to use save disk space."),(0,n.kt)("li",{parentName:"ul"},"Performance optimization for substr with ascii string."),(0,n.kt)("li",{parentName:"ul"},"Improve partition prune when date function is used."),(0,n.kt)("li",{parentName:"ul"},"Improve auto analyze visibility and performance.")),(0,n.kt)("p",null,"See the complete list of improvements and bug fixes on github ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/issues?q=label%3Adev%2F2.0.4-merged+is%3Aclosed"},"dev/2.0.4-merged")),(0,n.kt)("h2",{id:"credits"},"Credits"),(0,n.kt)("p",null,"Last but not least, this release would not have been possible without the following contributors: "),(0,n.kt)("p",null,"airborne12, amorynan, AshinGau, BePPPower, bingquanzhao, BiteTheDDDDt, bobhan1, ByteYue, caiconghui,CalvinKirs, cambyzju, caoliang-web, catpineapple, csun5285, dataroaring, deardeng, dutyu, eldenmoon, englefly, feifeifeimoon, fornaix, Gabriel39, gnehil, HappenLee, hello-stephen, HHoflittlefish777,hubgeter, hust-hhb, ixzc, jacktengg, jackwener, Jibing-Li, kaka11chen, KassieZ, LemonLiTree,liaoxin01, LiBinfeng-01, lihuigang, liugddx, luwei16, morningman, morrySnow, mrhhsg, Mryange, nextdreamblue, Nitin-Kashyap, platoneko, py023, qidaye, shuke987, starocean999, SWJTU-ZhangLei, w41ter, wangbo, wsjz, wuwenchi, Xiaoccer, xiaokang, XieJiann, xingyingone, xinyiZzz, xuwei0912, xy720, xzj7019, yujun777, zclllyybb, zddr, zhangguoqiang666, zhangstar333, zhannngchen, zhiqiang-hhhh, zy-kkk, zzzxl1993"))}m.isMDXComponent=!0}}]);