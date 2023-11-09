"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[62092],{3905:(e,n,r)=>{r.d(n,{Zo:()=>s,kt:()=>d});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=t.createContext({}),c=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},s=function(e){var n=c(e.components);return t.createElement(p.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(r),g=a,d=u["".concat(p,".").concat(g)]||u[g]||f[g]||o;return r?t.createElement(d,l(l({ref:n},s),{},{components:r})):t.createElement(d,l({ref:n},s))}));function d(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=g;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},68777:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var t=r(87462),a=(r(67294),r(3905));const o={title:"REGEXP_REPLACE_ONE",language:"en"},l=void 0,i={unversionedId:"sql-manual/sql-functions/string-functions/regexp/regexp-replace-one",id:"version-2.0/sql-manual/sql-functions/string-functions/regexp/regexp-replace-one",title:"REGEXP_REPLACE_ONE",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-functions/string-functions/regexp/regexp-replace-one.md",sourceDirName:"sql-manual/sql-functions/string-functions/regexp",slug:"/sql-manual/sql-functions/string-functions/regexp/regexp-replace-one",permalink:"/docs/sql-manual/sql-functions/string-functions/regexp/regexp-replace-one",draft:!1,tags:[],version:"2.0",frontMatter:{title:"REGEXP_REPLACE_ONE",language:"en"},sidebar:"docs",previous:{title:"REGEXP_REPLACE",permalink:"/docs/sql-manual/sql-functions/string-functions/regexp/regexp-replace"},next:{title:"NOT REGEXP",permalink:"/docs/sql-manual/sql-functions/string-functions/regexp/not-regexp"}},p={},c=[{value:"regexp_replace_one",id:"regexp_replace_one",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:c},u="wrapper";function f(e){let{components:n,...r}=e;return(0,a.kt)(u,(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"regexp_replace_one"},"regexp_replace_one"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"VARCHAR regexp_replace_one(VARCHAR str, VARCHAR pattern, VARCHAR repl)")),(0,a.kt)("p",null,"Regular matching of STR strings, replacing the part hitting pattern with repl, replacing only the first match."),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> SELECT regexp_replace_one('a b c', \" \", \"-\");\n+-----------------------------------+\n| regexp_replace_one('a b c', ' ', '-') |\n+-----------------------------------+\n| a-b c                             |\n+-----------------------------------+\n\nmysql> SELECT regexp_replace_one('a b b','(b)','<\\\\1>');\n+----------------------------------------+\n| regexp_replace_one('a b b', '(b)', '<\\1>') |\n+----------------------------------------+\n| a <b> b                                |\n+----------------------------------------+\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"REGEXP_REPLACE_ONE,REGEXP,REPLACE,ONE\n")))}f.isMDXComponent=!0}}]);