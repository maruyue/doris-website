"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[75026],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,m=p["".concat(o,".").concat(f)]||p[f]||d[f]||s;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=f;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<s;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},25914:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const s={title:"SHA2",language:"en"},l=void 0,i={unversionedId:"sql-manual/sql-functions/encrypt-digest-functions/sha2",id:"sql-manual/sql-functions/encrypt-digest-functions/sha2",title:"SHA2",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/encrypt-digest-functions/sha2.md",sourceDirName:"sql-manual/sql-functions/encrypt-digest-functions",slug:"/sql-manual/sql-functions/encrypt-digest-functions/sha2",permalink:"/docs/dev/sql-manual/sql-functions/encrypt-digest-functions/sha2",draft:!1,tags:[],version:"current",frontMatter:{title:"SHA2",language:"en"},sidebar:"docs",previous:{title:"SHA",permalink:"/docs/dev/sql-manual/sql-functions/encrypt-digest-functions/sha"},next:{title:"EXPLODE_JSON_ARRAY",permalink:"/docs/dev/sql-manual/sql-functions/table-functions/explode-json-array"}},o={},c=[{value:"SHA2",id:"sha2",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Arguments",id:"arguments",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"sha2"},"SHA2"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("p",null,"Use SHA2 to digest the message."),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SHA2(str, digest_length)")),(0,a.kt)("h4",{id:"arguments"},"Arguments"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"str"),": content to be encrypted"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"digest_length"),": the length of the digest")),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-SQL"},"mysql> select sha2('abc', 224);\n+----------------------------------------------------------+\n| sha2('abc', 224)                                         |\n+----------------------------------------------------------+\n| 23097d223405d8228642a477bda255b32aadbce4bda0b3f7e36c9da7 |\n+----------------------------------------------------------+\n1 row in set (0.13 sec)\n\nmysql> select sha2('abc', 384);\n+--------------------------------------------------------------------------------------------------+\n| sha2('abc', 384)                                                                                 |\n+--------------------------------------------------------------------------------------------------+\n| cb00753f45a35e8bb5a03d699ac65007272c32ab0eded1631a8b605a43ff5bed8086072ba1e7cc2358baeca134c825a7 |\n+--------------------------------------------------------------------------------------------------+\n1 row in set (0.13 sec)\n\nmysql> select sha2(NULL, 512);\n+-----------------+\n| sha2(NULL, 512) |\n+-----------------+\n| NULL            |\n+-----------------+\n1 row in set (0.09 sec)\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SHA2\n")))}d.isMDXComponent=!0}}]);