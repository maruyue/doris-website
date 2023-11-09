"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[42709],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>f});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=t.createContext({}),i=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},c=function(e){var n=i(e.components);return t.createElement(u.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=i(r),h=a,f=m["".concat(u,".").concat(h)]||m[h]||p[h]||l;return r?t.createElement(f,o(o({ref:n},c),{},{components:r})):t.createElement(f,o({ref:n},c))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=h;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var i=2;i<l;i++)o[i]=r[i];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}h.displayName="MDXCreateElement"},9955:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var t=r(87462),a=(r(67294),r(3905));const l={title:"MURMUR_HASH3_64",language:"en"},o=void 0,s={unversionedId:"sql-manual/sql-functions/hash-functions/murmur-hash3-64",id:"version-2.0/sql-manual/sql-functions/hash-functions/murmur-hash3-64",title:"MURMUR_HASH3_64",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-functions/hash-functions/murmur-hash3-64.md",sourceDirName:"sql-manual/sql-functions/hash-functions",slug:"/sql-manual/sql-functions/hash-functions/murmur-hash3-64",permalink:"/docs/sql-manual/sql-functions/hash-functions/murmur-hash3-64",draft:!1,tags:[],version:"2.0",frontMatter:{title:"MURMUR_HASH3_64",language:"en"},sidebar:"docs",previous:{title:"MURMUR_HASH3_32",permalink:"/docs/sql-manual/sql-functions/hash-functions/murmur-hash3-32"},next:{title:"HLL_CARDINALITY",permalink:"/docs/sql-manual/sql-functions/hll-functions/hll-cardinality"}},u={},i=[{value:"murmur_hash3_64",id:"murmur_hash3_64",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:i},m="wrapper";function p(e){let{components:n,...r}=e;return(0,a.kt)(m,(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"murmur_hash3_64"},"murmur_hash3_64"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"BIGINT MURMUR_HASH3_64(VARCHAR input, ...)")),(0,a.kt)("p",null,"Return the 64 bits murmur3 hash of input string."),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> select murmur_hash3_64(null);\n+-----------------------+\n| murmur_hash3_64(NULL) |\n+-----------------------+\n|                  NULL |\n+-----------------------+\n\nmysql> select murmur_hash3_64(\"hello\");\n+--------------------------+\n| murmur_hash3_64('hello') |\n+--------------------------+\n|     -3215607508166160593 |\n+--------------------------+\n\nmysql> select murmur_hash3_64(\"hello\", \"world\");\n+-----------------------------------+\n| murmur_hash3_64('hello', 'world') |\n+-----------------------------------+\n|               3583109472027628045 |\n+-----------------------------------+\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"MURMUR_HASH3_64,HASH\n")))}p.isMDXComponent=!0}}]);