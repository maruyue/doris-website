"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[69599],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},70555:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={title:"ORTHOGONAL_BITMAP_INTERSECT",language:"zh-CN"},i=void 0,l={unversionedId:"sql-manual/sql-functions/bitmap-functions/orthogonal-bitmap-intersect",id:"version-2.0/sql-manual/sql-functions/bitmap-functions/orthogonal-bitmap-intersect",title:"ORTHOGONAL_BITMAP_INTERSECT",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/bitmap-functions/orthogonal-bitmap-intersect.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/orthogonal-bitmap-intersect",permalink:"/zh-CN/docs/sql-manual/sql-functions/bitmap-functions/orthogonal-bitmap-intersect",draft:!1,tags:[],version:"2.0",frontMatter:{title:"ORTHOGONAL_BITMAP_INTERSECT",language:"zh-CN"},sidebar:"docs",previous:{title:"BITMAP_INTERSECT",permalink:"/zh-CN/docs/sql-manual/sql-functions/bitmap-functions/bitmap-intersect"},next:{title:"ORTHOGONAL_BITMAP_INTERSECT_COUNT",permalink:"/zh-CN/docs/sql-manual/sql-functions/bitmap-functions/orthogonal-bitmap-intersect-count"}},s={},c=[{value:"orthogonal_bitmap_intersect",id:"orthogonal_bitmap_intersect",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"orthogonal_bitmap_intersect"},"orthogonal_bitmap_intersect"),(0,o.kt)("h3",{id:"description"},"description"),(0,o.kt)("h4",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"BITMAP ORTHOGONAL_BITMAP_INTERSECT(bitmap_column, column_to_filter, filter_values)"),"\n\u6c42bitmap\u4ea4\u96c6\u51fd\u6570, \u7b2c\u4e00\u4e2a\u53c2\u6570\u662fBitmap\u5217\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u7528\u6765\u8fc7\u6ee4\u7684\u7ef4\u5ea6\u5217\uff0c\u7b2c\u4e09\u4e2a\u53c2\u6570\u662f\u53d8\u957f\u53c2\u6570\uff0c\u542b\u4e49\u662f\u8fc7\u6ee4\u7ef4\u5ea6\u5217\u7684\u4e0d\u540c\u53d6\u503c"),(0,o.kt)("h3",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql> select orthogonal_bitmap_intersect(members, tag_group, 1150000, 1150001, 390006) from tag_map where  tag_group in ( 1150000, 1150001, 390006);\n+-------------------------------------------------------------------------------+\n| orthogonal_bitmap_intersect(`members`, `tag_group`, 1150000, 1150001, 390006) |\n+-------------------------------------------------------------------------------+\n| NULL                                                                          |\n+-------------------------------------------------------------------------------+\n1 row in set (3.505 sec)\n\n")),(0,o.kt)("h3",{id:"keywords"},"keywords"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ORTHOGONAL_BITMAP_INTERSECT,BITMAP\n")))}m.isMDXComponent=!0}}]);