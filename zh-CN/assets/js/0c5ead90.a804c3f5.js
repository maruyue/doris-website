"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[24133],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),i=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=i(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=i(t),f=a,d=p["".concat(c,".").concat(f)]||p[f]||y[f]||l;return t?r.createElement(d,o(o({ref:n},s),{},{components:t})):r.createElement(d,o({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=f;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u[p]="string"==typeof e?e:a,o[1]=u;for(var i=2;i<l;i++)o[i]=t[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9950:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>u,toc:()=>i});var r=t(87462),a=(t(67294),t(3905));const l={title:"COUNTEQUAL",language:"zh-CN"},o=void 0,u={unversionedId:"sql-manual/sql-functions/array-functions/countequal",id:"version-2.0/sql-manual/sql-functions/array-functions/countequal",title:"COUNTEQUAL",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/array-functions/countequal.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/countequal",permalink:"/zh-CN/docs/sql-manual/sql-functions/array-functions/countequal",draft:!1,tags:[],version:"2.0",frontMatter:{title:"COUNTEQUAL",language:"zh-CN"},sidebar:"docs",previous:{title:"ARRAY_COUNT",permalink:"/zh-CN/docs/sql-manual/sql-functions/array-functions/array-count"},next:{title:"ELEMENT_AT",permalink:"/zh-CN/docs/sql-manual/sql-functions/array-functions/element-at"}},c={},i=[{value:"countequal",id:"countequal",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:i},p="wrapper";function y(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"countequal"},"countequal"),(0,a.kt)("version",{since:"1.2.0"},(0,a.kt)("p",null,"countequal")),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"BIGINT countequal(ARRAY<T> arr, T value)")),(0,a.kt)("p",null,"\u5224\u65ad\u6570\u7ec4\u4e2d\u5305\u542bvalue\u5143\u7d20\u7684\u4e2a\u6570\u3002\u8fd4\u56de\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"num      - value\u5728array\u4e2d\u7684\u6570\u91cf\uff1b\n0        - value\u4e0d\u5b58\u5728\u6570\u7ec4arr\u4e2d\uff1b\nNULL     - \u5982\u679c\u6570\u7ec4\u4e3aNULL\u3002\n")),(0,a.kt)("h3",{id:"notice"},"notice"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"\u4ec5\u652f\u6301\u5411\u91cf\u5316\u5f15\u64ce\u4e2d\u4f7f\u7528")),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> set enable_vectorized_engine=true;\n\nmysql> select *, countEqual(c_array,5) from array_test;\n+------+-----------------+--------------------------+\n| id   | c_array         | countequal(`c_array`, 5) |\n+------+-----------------+--------------------------+\n|    1 | [1, 2, 3, 4, 5] |                        1 |\n|    2 | [6, 7, 8]       |                        0 |\n|    3 | []              |                        0 |\n|    4 | NULL            |                     NULL |\n+------+-----------------+--------------------------+\n\nmysql> select *,countEqual(c_array, 1),countEqual(c_array, 5),countEqual(c_array, NULL) from array_test;\n+------+-----------------------+--------------------------+--------------------------+-----------------------------+\n| id   | c_array               | countequal(`c_array`, 1) | countequal(`c_array`, 5) | countequal(`c_array`, NULL) |\n+------+-----------------------+--------------------------+--------------------------+-----------------------------+\n|    1 | [1, 2, 3, 4, 5]       |                        1 |                        1 |                           0 |\n|    2 | [6, 7, 8]             |                        0 |                        0 |                           0 |\n|    3 | []                    |                        0 |                        0 |                           0 |\n|    4 | NULL                  |                     NULL |                     NULL |                        NULL |\n|    5 | [66, 77]              |                        0 |                        0 |                           0 |\n|    5 | [66, 77]              |                        0 |                        0 |                           0 |\n|    6 | NULL                  |                     NULL |                     NULL |                        NULL |\n|    7 | [NULL, NULL, NULL]    |                        0 |                        0 |                           3 |\n|    8 | [1, 2, 3, 4, 5, 5, 5] |                        1 |                        3 |                           0 |\n+------+-----------------------+--------------------------+--------------------------+-----------------------------+\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("p",null,"ARRAY,COUNTEQUAL"))}y.isMDXComponent=!0}}]);