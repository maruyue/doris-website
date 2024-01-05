"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[22075],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),d=i,m=p["".concat(s,".").concat(d)]||p[d]||f[d]||o;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},53676:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(87462),i=(t(67294),t(3905));const o={title:"INET6_ATON",language:"zh-CN"},a=void 0,l={unversionedId:"sql-manual/sql-functions/ip-functions/inet6-aton",id:"sql-manual/sql-functions/ip-functions/inet6-aton",title:"INET6_ATON",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/ip-functions/inet6-aton.md",sourceDirName:"sql-manual/sql-functions/ip-functions",slug:"/sql-manual/sql-functions/ip-functions/inet6-aton",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/ip-functions/inet6-aton",draft:!1,tags:[],version:"current",frontMatter:{title:"INET6_ATON",language:"zh-CN"},sidebar:"docs",previous:{title:"IPV6_NUM_TO_STRING",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/ip-functions/ipv6-num-to-string"},next:{title:"IPV6_STRING_TO_NUM_OR_DEFAULT",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/ip-functions/ipv6-string-to-num-or-default"}},s={},c=[{value:"INET6_ATON",id:"inet6_aton",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function f(e){let{components:n,...t}=e;return(0,i.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"inet6_aton"},"INET6_ATON"),(0,i.kt)("version",{since:"dev"},(0,i.kt)("p",null,"inet6_aton")),(0,i.kt)("h3",{id:"description"},"description"),(0,i.kt)("h4",{id:"syntax"},"Syntax"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"VARCHAR INET6_ATON(VARCHAR ipv6_string)")),(0,i.kt)("p",null,"IPv6NumToString \u7684\u53cd\u5411\u51fd\u6570\uff0c\u5b83\u63a5\u53d7\u4e00\u4e2a IP \u5730\u5740\u5b57\u7b26\u4e32\u5e76\u8fd4\u56de\u4e8c\u8fdb\u5236\u683c\u5f0f\u7684 IPv6 \u5730\u5740\u3002\n\u5982\u679c\u8f93\u5165\u5b57\u7b26\u4e32\u5305\u542b\u6709\u6548\u7684 IPv4 \u5730\u5740\uff0c\u5219\u8fd4\u56de\u5176\u7b49\u6548\u7684 IPv6 \u5730\u5740\u3002"),(0,i.kt)("h3",{id:"notice"},"notice"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"\u5982\u679c\u8f93\u5165\u975e\u6cd5\u7684IP\u5730\u5740\uff0c\u4f1a\u629b\u51fa\u5f02\u5e38")),(0,i.kt)("h3",{id:"example"},"example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mysql> select hex(inet6_aton('1111::ffff'));\n+----------------------------------+\n| hex(inet6_aton('1111::ffff'))    |\n+----------------------------------+\n| 1111000000000000000000000000FFFF |\n+----------------------------------+\n1 row in set (0.02 sec)\n\nmysql> select hex(inet6_aton('192.168.0.1'));\n+----------------------------------+\n| hex(inet6_aton('192.168.0.1'))   |\n+----------------------------------+\n| 00000000000000000000FFFFC0A80001 |\n+----------------------------------+\n1 row in set (0.02 sec)\n\nmysql> select hex(inet6_aton('notaaddress'));\nERROR 1105 (HY000): errCode = 2, detailMessage = (172.17.0.2)[CANCELLED][E33] Invalid IPv6 value\n")),(0,i.kt)("h3",{id:"keywords"},"keywords"),(0,i.kt)("p",null,"INET6_ATON, IP"))}f.isMDXComponent=!0}}]);