"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[58237],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=s(t),d=i,m=p["".concat(c,".").concat(d)]||p[d]||f[d]||o;return t?r.createElement(m,l(l({ref:n},u),{},{components:t})):r.createElement(m,l({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=d;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[p]="string"==typeof e?e:i,l[1]=a;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},35672:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>a,toc:()=>s});var r=t(87462),i=(t(67294),t(3905));const o={title:"INITCAP",language:"zh-CN"},l=void 0,a={unversionedId:"sql-manual/sql-functions/string-functions/initcap",id:"version-2.0/sql-manual/sql-functions/string-functions/initcap",title:"INITCAP",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/string-functions/initcap.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/initcap",permalink:"/zh-CN/docs/sql-manual/sql-functions/string-functions/initcap",draft:!1,tags:[],version:"2.0",frontMatter:{title:"INITCAP",language:"zh-CN"},sidebar:"docs",previous:{title:"UCASE",permalink:"/zh-CN/docs/sql-manual/sql-functions/string-functions/ucase"},next:{title:"REPEAT",permalink:"/zh-CN/docs/sql-manual/sql-functions/string-functions/repeat"}},c={},s=[{value:"initcap",id:"initcap",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},p="wrapper";function f(e){let{components:n,...t}=e;return(0,i.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"initcap"},"initcap"),(0,i.kt)("h3",{id:"description"},"description"),(0,i.kt)("h4",{id:"syntax"},"Syntax"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"VARCHAR initcap(VARCHAR str)")),(0,i.kt)("p",null,"\u5c06\u53c2\u6570\u4e2d\u5305\u542b\u7684\u5355\u8bcd\u9996\u5b57\u6bcd\u5927\u5199\uff0c\u5176\u4f59\u5b57\u6bcd\u8f6c\u4e3a\u5c0f\u5199\u3002\u5355\u8bcd\u662f\u7531\u975e\u5b57\u6bcd\u6570\u5b57\u5b57\u7b26\u5206\u9694\u7684\u5b57\u6bcd\u6570\u5b57\u5b57\u7b26\u5e8f\u5217\u3002"),(0,i.kt)("h3",{id:"example"},"example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mysql> select initcap('hello hello.,HELLO123HELlo');\n+---------------------------------------+\n| initcap('hello hello.,HELLO123HELlo') |\n+---------------------------------------+\n| Hello Hello.,Hello123hello            |\n+---------------------------------------+\n")),(0,i.kt)("h3",{id:"keywords"},"keywords"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"INITCAP\n")))}f.isMDXComponent=!0}}]);