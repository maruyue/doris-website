"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[62955],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(n),f=l,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},31721:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var r=n(87462),l=(n(67294),n(3905));const a={title:"HLL_CARDINALITY",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-functions/hll-functions/hll-cardinality",id:"version-2.0/sql-manual/sql-functions/hll-functions/hll-cardinality",title:"HLL_CARDINALITY",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/hll-functions/hll-cardinality.md",sourceDirName:"sql-manual/sql-functions/hll-functions",slug:"/sql-manual/sql-functions/hll-functions/hll-cardinality",permalink:"/zh-CN/docs/sql-manual/sql-functions/hll-functions/hll-cardinality",draft:!1,tags:[],version:"2.0",frontMatter:{title:"HLL_CARDINALITY",language:"zh-CN"},sidebar:"docs",previous:{title:"MURMUR_HASH3_64",permalink:"/zh-CN/docs/sql-manual/sql-functions/hash-functions/murmur-hash3-64"},next:{title:"HLL_EMPTY",permalink:"/zh-CN/docs/sql-manual/sql-functions/hll-functions/hll-empty"}},c={},s=[{value:"HLL_CARDINALITY",id:"hll_cardinality",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"hll_cardinality"},"HLL_CARDINALITY"),(0,l.kt)("h3",{id:"description"},"description"),(0,l.kt)("h4",{id:"syntax"},"Syntax"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"HLL_CARDINALITY(hll)")),(0,l.kt)("p",null,"HLL_CARDINALITY \u7528\u4e8e\u8ba1\u7b97 HLL \u7c7b\u578b\u503c\u7684\u57fa\u6570\u3002"),(0,l.kt)("h3",{id:"example"},"example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"MySQL > select HLL_CARDINALITY(uv_set) from test_uv;\n+---------------------------+\n| hll_cardinality(`uv_set`) |\n+---------------------------+\n|                         3 |\n+---------------------------+\n")),(0,l.kt)("h3",{id:"keywords"},"keywords"),(0,l.kt)("p",null,"HLL,HLL_CARDINALITY"))}d.isMDXComponent=!0}}]);