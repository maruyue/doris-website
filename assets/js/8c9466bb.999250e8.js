"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[14242],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||s;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=f;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<s;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},13276:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const s={title:"SHA",language:"en"},l=void 0,o={unversionedId:"sql-manual/sql-functions/encrypt-digest-functions/sha",id:"sql-manual/sql-functions/encrypt-digest-functions/sha",title:"SHA",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/encrypt-digest-functions/sha.md",sourceDirName:"sql-manual/sql-functions/encrypt-digest-functions",slug:"/sql-manual/sql-functions/encrypt-digest-functions/sha",permalink:"/docs/dev/sql-manual/sql-functions/encrypt-digest-functions/sha",draft:!1,tags:[],version:"current",frontMatter:{title:"SHA",language:"en"},sidebar:"docs",previous:{title:"SM3SUM",permalink:"/docs/dev/sql-manual/sql-functions/encrypt-digest-functions/sm3sum"},next:{title:"SHA2",permalink:"/docs/dev/sql-manual/sql-functions/encrypt-digest-functions/sha2"}},i={},c=[{value:"SHA",id:"sha",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Arguments",id:"arguments",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"sha"},"SHA"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("p",null,"Use SHA1 to digest the message."),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SHA(str)")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"SHA1(str)")),(0,a.kt)("h4",{id:"arguments"},"Arguments"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"str"),": content to be encrypted")),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-SQL"},"mysql> select sha(\"123\");\n+------------------------------------------+\n| sha1('123')                              |\n+------------------------------------------+\n| 40bd001563085fc35165329ea1ff5c5ecbdbbeef |\n+------------------------------------------+\n1 row in set (0.13 sec)\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SHA,SHA1\n")))}d.isMDXComponent=!0}}]);