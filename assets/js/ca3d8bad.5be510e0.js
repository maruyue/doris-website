"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[56304],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),f=i,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return t?r.createElement(m,a(a({ref:n},c),{},{components:t})):r.createElement(m,a({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8358:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=t(87462),i=(t(67294),t(3905));const o={title:"IPV6_STRING_TO_NUM",language:"en"},a=void 0,s={unversionedId:"sql-manual/sql-functions/ip-functions/ipv6-string-to-num",id:"sql-manual/sql-functions/ip-functions/ipv6-string-to-num",title:"IPV6_STRING_TO_NUM",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/ip-functions/ipv6-string-to-num.md",sourceDirName:"sql-manual/sql-functions/ip-functions",slug:"/sql-manual/sql-functions/ip-functions/ipv6-string-to-num",permalink:"/docs/dev/sql-manual/sql-functions/ip-functions/ipv6-string-to-num",draft:!1,tags:[],version:"current",frontMatter:{title:"IPV6_STRING_TO_NUM",language:"en"}},l={},u=[{value:"IPV6_STRING_TO_NUM",id:"ipv6_string_to_num",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:u},p="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(p,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"ipv6_string_to_num"},"IPV6_STRING_TO_NUM"),(0,i.kt)("version",{since:"dev"},(0,i.kt)("p",null,"IPV6_STRING_TO_NUM")),(0,i.kt)("h3",{id:"description"},"description"),(0,i.kt)("h4",{id:"syntax"},"Syntax"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"VARCHAR IPV6_STRING_TO_NUM(VARCHAR ipv6_string)")),(0,i.kt)("p",null,"The reverse function of IPv6NumToString, it takes an IP address String and returns an IPv6 address in binary format.\nIf the input string contains a valid IPv4 address, returns its IPv6 equivalent."),(0,i.kt)("h3",{id:"notice"},"notice"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"will return an error if the input string is not a valid IP address")),(0,i.kt)("h3",{id:"example"},"example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mysql> select hex(ipv6_string_to_num('1111::ffff'));\n+---------------------------------------+\n| hex(ipv6_string_to_num('1111::ffff')) |\n+---------------------------------------+\n| 1111000000000000000000000000FFFF      |\n+---------------------------------------+\n1 row in set (0.02 sec)\n\nmysql> select hex(ipv6_string_to_num('192.168.0.1'));\n+----------------------------------------+\n| hex(ipv6_string_to_num('192.168.0.1')) |\n+----------------------------------------+\n| 00000000000000000000FFFFC0A80001       |\n+----------------------------------------+\n1 row in set (0.02 sec)\n\nmysql> select hex(ipv6_string_to_num('notaaddress'));\nERROR 1105 (HY000): errCode = 2, detailMessage = (172.17.0.2)[CANCELLED][E33] Invalid IPv6 value\n")),(0,i.kt)("h3",{id:"keywords"},"keywords"),(0,i.kt)("p",null,"IPV6_STRING_TO_NUM, IP"))}d.isMDXComponent=!0}}]);