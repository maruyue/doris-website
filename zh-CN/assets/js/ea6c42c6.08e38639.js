"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[63413],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(t),d=i,m=p["".concat(l,".").concat(d)]||p[d]||f[d]||a;return t?r.createElement(m,s(s({ref:n},u),{},{components:t})):r.createElement(m,s({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[p]="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9891:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=t(87462),i=(t(67294),t(3905));const a={title:"ASCII",language:"zh-CN"},s=void 0,o={unversionedId:"sql-manual/sql-functions/string-functions/ascii",id:"version-2.0/sql-manual/sql-functions/string-functions/ascii",title:"ASCII",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/string-functions/ascii.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/ascii",permalink:"/zh-CN/docs/sql-manual/sql-functions/string-functions/ascii",draft:!1,tags:[],version:"2.0",frontMatter:{title:"ASCII",language:"zh-CN"},sidebar:"docs",previous:{title:"FROM_BASE64",permalink:"/zh-CN/docs/sql-manual/sql-functions/string-functions/from-base64"},next:{title:"LENGTH",permalink:"/zh-CN/docs/sql-manual/sql-functions/string-functions/length"}},l={},c=[{value:"ascii",id:"ascii",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function f(e){let{components:n,...t}=e;return(0,i.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"ascii"},"ascii"),(0,i.kt)("h3",{id:"description"},"description"),(0,i.kt)("h4",{id:"syntax"},"Syntax"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"INT ascii(VARCHAR str)")),(0,i.kt)("p",null,"\u8fd4\u56de\u5b57\u7b26\u4e32\u7b2c\u4e00\u4e2a\u5b57\u7b26\u5bf9\u5e94\u7684 ascii \u7801"),(0,i.kt)("h3",{id:"example"},"example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mysql> select ascii('1');\n+------------+\n| ascii('1') |\n+------------+\n|         49 |\n+------------+\n\nmysql> select ascii('234');\n+--------------+\n| ascii('234') |\n+--------------+\n|           50 |\n+--------------+\n")),(0,i.kt)("h3",{id:"keywords"},"keywords"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ASCII\n")))}f.isMDXComponent=!0}}]);