"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[65957],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>_});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(t),f=i,_=u["".concat(l,".").concat(f)]||u[f]||d[f]||s;return t?r.createElement(_,a(a({ref:n},p),{},{components:t})):r.createElement(_,a({ref:n},p))}));function _(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,a=new Array(s);a[0]=f;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[u]="string"==typeof e?e:i,a[1]=o;for(var c=2;c<s;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},88809:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=t(87462),i=(t(67294),t(3905));const s={title:"IS_IP_ADDRESS_IN_RANGE",language:"en"},a=void 0,o={unversionedId:"sql-manual/sql-functions/ip-functions/is-ip-address-in-range",id:"sql-manual/sql-functions/ip-functions/is-ip-address-in-range",title:"IS_IP_ADDRESS_IN_RANGE",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/ip-functions/is-ip-address-in-range.md",sourceDirName:"sql-manual/sql-functions/ip-functions",slug:"/sql-manual/sql-functions/ip-functions/is-ip-address-in-range",permalink:"/docs/dev/sql-manual/sql-functions/ip-functions/is-ip-address-in-range",draft:!1,tags:[],version:"current",frontMatter:{title:"IS_IP_ADDRESS_IN_RANGE",language:"en"},sidebar:"docs",previous:{title:"IPV6_CIDR_TO_RANGE",permalink:"/docs/dev/sql-manual/sql-functions/ip-functions/ipv6-cidr-to-range"},next:{title:"IS_IPV4_STRING",permalink:"/docs/dev/sql-manual/sql-functions/ip-functions/is-ipv4-string"}},l={},c=[{value:"IS_IP_ADDRESS_IN_RANGE",id:"is_ip_address_in_range",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"is_ip_address_in_range"},"IS_IP_ADDRESS_IN_RANGE"),(0,i.kt)("version",{since:"dev"},(0,i.kt)("p",null,"IS_IP_ADDRESS_IN_RANGE")),(0,i.kt)("h3",{id:"description"},"description"),(0,i.kt)("h4",{id:"syntax"},"Syntax"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"BOOLEAN IS_IP_ADDRESS_IN_RANGE(STRING ip_str, STRING cidr_prefix)")),(0,i.kt)("p",null,"Determine whether the IP (IPv4 or IPv6) address is included in the network represented by CIDR notation. If yes, return true; otherwise, return false."),(0,i.kt)("h3",{id:"notice"},"notice"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ip_str and cidr_prefix both cannot be NULL")),(0,i.kt)("h3",{id:"example"},"example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mysql> SELECT is_ip_address_in_range('127.0.0.1', '127.0.0.0/8');\n+----------------------------------------------------+\n| is_ip_address_in_range('127.0.0.1', '127.0.0.0/8') |\n+----------------------------------------------------+\n|                                                  1 |\n+----------------------------------------------------+\n\nmysql> SELECT is_ip_address_in_range('::ffff:192.168.0.1', '::ffff:192.168.0.4/128');\n+------------------------------------------------------------------------+\n| is_ip_address_in_range('::ffff:192.168.0.1', '::ffff:192.168.0.4/128') |\n+------------------------------------------------------------------------+\n|                                                                      0 |\n+------------------------------------------------------------------------+\n")),(0,i.kt)("h3",{id:"keywords"},"keywords"),(0,i.kt)("p",null,"IS_IP_ADDRESS_IN_RANGE, IP"))}d.isMDXComponent=!0}}]);