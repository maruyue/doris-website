"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[52919],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),d=o,m=p["".concat(s,".").concat(d)]||p[d]||f[d]||l;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},11538:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=t(87462),o=(t(67294),t(3905));const l={title:"LOWER",language:"zh-CN"},a=void 0,i={unversionedId:"sql-manual/sql-functions/string-functions/lower",id:"version-2.0/sql-manual/sql-functions/string-functions/lower",title:"LOWER",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/string-functions/lower.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/lower",permalink:"/zh-CN/docs/sql-manual/sql-functions/string-functions/lower",draft:!1,tags:[],version:"2.0",frontMatter:{title:"LOWER",language:"zh-CN"},sidebar:"docs",previous:{title:"RPAD",permalink:"/zh-CN/docs/sql-manual/sql-functions/string-functions/rpad"},next:{title:"LCASE",permalink:"/zh-CN/docs/sql-manual/sql-functions/string-functions/lcase"}},s={},c=[{value:"lower",id:"lower",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function f(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"lower"},"lower"),(0,o.kt)("h3",{id:"description"},"description"),(0,o.kt)("h4",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"VARCHAR lower(VARCHAR str)")),(0,o.kt)("p",null,"\u5c06\u53c2\u6570\u4e2d\u6240\u6709\u7684\u5b57\u7b26\u4e32\u90fd\u8f6c\u6362\u6210\u5c0f\u5199\uff0c\u8be5\u51fd\u6570\u7684\u53e6\u4e00\u4e2a\u522b\u540d\u4e3a",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/sql-manual/sql-functions/string-functions/lcase"},"lcase"),"\u3002"),(0,o.kt)("h3",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql> SELECT lower(\"AbC123\");\n+-----------------+\n| lower('AbC123') |\n+-----------------+\n| abc123          |\n+-----------------+\n")),(0,o.kt)("h3",{id:"keywords"},"keywords"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"LOWER\n")))}f.isMDXComponent=!0}}]);