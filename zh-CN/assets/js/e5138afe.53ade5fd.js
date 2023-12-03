"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[74142],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),f=i,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8122:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(87462),i=(t(67294),t(3905));const o={title:"INET6_NTOA",language:"en"},a=void 0,l={unversionedId:"sql-manual/sql-functions/ip-functions/inet6-ntoa",id:"sql-manual/sql-functions/ip-functions/inet6-ntoa",title:"INET6_NTOA",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/ip-functions/inet6-ntoa.md",sourceDirName:"sql-manual/sql-functions/ip-functions",slug:"/sql-manual/sql-functions/ip-functions/inet6-ntoa",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/ip-functions/inet6-ntoa",draft:!1,tags:[],version:"current",frontMatter:{title:"INET6_NTOA",language:"en"},sidebar:"docs",previous:{title:"IPV6_NUM_TO_STRING",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/ip-functions/ipv6-num-to-string"},next:{title:"cosine_distance",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/distance-functions/cosine-distance"}},s={},c=[{value:"INET6_NTOA",id:"inet6_ntoa",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"inet6_ntoa"},"INET6_NTOA"),(0,i.kt)("version",{since:"dev"},(0,i.kt)("p",null,"INET6_NTOA")),(0,i.kt)("h3",{id:"description"},"description"),(0,i.kt)("h4",{id:"syntax"},"Syntax"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"VARCHAR INET6_NTOA(VARCHAR ipv6_num)")),(0,i.kt)("p",null,"\u63a5\u53d7\u5b57\u7b26\u4e32\u7c7b\u578b\u7684\u4e8c\u8fdb\u5236\u683c\u5f0f\u7684IPv6\u5730\u5740\u3002\u4ee5\u6587\u672c\u683c\u5f0f\u8fd4\u56de\u6b64\u5730\u5740\u7684\u5b57\u7b26\u4e32\u3002\nIPv6\u6620\u5c04\u7684IPv4\u5730\u5740\u4ee5::ffff:111.222.33\u3002"),(0,i.kt)("h3",{id:"example"},"example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mysql> select inet6_ntoa(unhex('2A0206B8000000000000000000000011')) as addr;\n+--------------+\n| addr         |\n+--------------+\n| 2a02:6b8::11 |\n+--------------+\n1 row in set (0.01 sec)\n")),(0,i.kt)("h3",{id:"keywords"},"keywords"),(0,i.kt)("p",null,"INET6_NTOA, IP"))}d.isMDXComponent=!0}}]);