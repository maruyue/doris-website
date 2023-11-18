"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[6908],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>v});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(t),m=i,v=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return t?r.createElement(v,l(l({ref:n},c),{},{components:t})):r.createElement(v,l({ref:n},c))}));function v(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=m;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[p]="string"==typeof e?e:i,l[1]=a;for(var u=2;u<o;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},76266:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var r=t(87462),i=(t(67294),t(3905));const o={title:"IPV4_STRING_TO_NUM",language:"zh-CN"},l=void 0,a={unversionedId:"sql-manual/sql-functions/ip-functions/ipv4-string-to-num",id:"sql-manual/sql-functions/ip-functions/ipv4-string-to-num",title:"IPV4_STRING_TO_NUM",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/ip-functions/ipv4-string-to-num.md",sourceDirName:"sql-manual/sql-functions/ip-functions",slug:"/sql-manual/sql-functions/ip-functions/ipv4-string-to-num",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/ip-functions/ipv4-string-to-num",draft:!1,tags:[],version:"current",frontMatter:{title:"IPV4_STRING_TO_NUM",language:"zh-CN"},sidebar:"docs",previous:{title:"INET_NTOA",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/ip-functions/inet-ntoa"},next:{title:"INET_ATON",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/ip-functions/inet-aton"}},s={},u=[{value:"IPv4StringToNum",id:"ipv4stringtonum",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:u},p="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(p,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"ipv4stringtonum"},"IPv4StringToNum"),(0,i.kt)("version",{since:"dev"},(0,i.kt)("p",null,"IPv4StringToNum")),(0,i.kt)("h3",{id:"description"},"description"),(0,i.kt)("h4",{id:"syntax"},"Syntax"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"BIGINT IPv4StringToNum(VARCHAR ipv4_string)")),(0,i.kt)("p",null,"\u83b7\u53d6\u5305\u542b IPv4 \u5730\u5740\u7684\u5b57\u7b26\u4e32\uff0c\u683c\u5f0f\u4e3a A.B.C.D\uff08\u70b9\u5206\u9694\u7684\u5341\u8fdb\u5236\u6570\u5b57\uff09\u3002\u8fd4\u56de\u4e00\u4e2a BIGINT \u6570\u5b57\uff0c\u8868\u793a\u76f8\u5e94\u7684\u5927\u7aef IPv4 \u5730\u5740\u3002"),(0,i.kt)("h3",{id:"notice"},"notice"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"\u5982\u679c\u8f93\u5165\u5b57\u7b26\u4e32\u4e0d\u662f\u6709\u6548\u7684 IPv4 \u5730\u5740\uff0c\u5c06\u8fd4\u56de\u9519\u8bef")),(0,i.kt)("h3",{id:"example"},"example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mysql> select ipv4stringtonum('192.168.0.1'); \n+--------------------------------+ \n| ipv4stringtonum('192.168.0.1') | \n+--------------------------------+ \n| 3232235521                     | \n+--------------------------------+ \n1 row in set (0.01 sec)\n\nmysql> SELECT ipv4stringtonum('192.168');\nERROR 1105 (HY000): errCode = 2, detailMessage = (172.17.0.2)[CANCELLED][INVALID_ARGUMENT][E33] Invalid IPv4 value\n")),(0,i.kt)("h3",{id:"keywords"},"keywords"),(0,i.kt)("p",null,"IPV4STRINGTONUM, IP"))}d.isMDXComponent=!0}}]);