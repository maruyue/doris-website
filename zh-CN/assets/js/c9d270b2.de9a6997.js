"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[57478],{3905:(e,r,n)=>{n.d(r,{Zo:()=>c,kt:()=>d});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=t.createContext({}),i=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},c=function(e){var r=i(e.components);return t.createElement(u.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},y=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=i(n),y=a,d=p["".concat(u,".").concat(y)]||p[y]||f[y]||o;return n?t.createElement(d,l(l({ref:r},c),{},{components:n})):t.createElement(d,l({ref:r},c))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=y;var s={};for(var u in r)hasOwnProperty.call(r,u)&&(s[u]=r[u]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var i=2;i<o;i++)l[i]=n[i];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"},4438:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var t=n(87462),a=(n(67294),n(3905));const o={title:"ARRAY_PUSHFRONT",language:"zh-CN"},l=void 0,s={unversionedId:"sql-manual/sql-functions/array-functions/array-pushfront",id:"version-2.0/sql-manual/sql-functions/array-functions/array-pushfront",title:"ARRAY_PUSHFRONT",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/array-functions/array-pushfront.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array-pushfront",permalink:"/zh-CN/docs/sql-manual/sql-functions/array-functions/array-pushfront",draft:!1,tags:[],version:"2.0",frontMatter:{title:"ARRAY_PUSHFRONT",language:"zh-CN"},sidebar:"docs",previous:{title:"ARRAY_POPFRONT",permalink:"/zh-CN/docs/sql-manual/sql-functions/array-functions/array-popfront"},next:{title:"ARRAY_PUSHBACK",permalink:"/zh-CN/docs/sql-manual/sql-functions/array-functions/array-pushback"}},u={},i=[{value:"array_pushfront",id:"array_pushfront",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Returned value",id:"returned-value",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:i},p="wrapper";function f(e){let{components:r,...n}=e;return(0,a.kt)(p,(0,t.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"array_pushfront"},"array_pushfront"),(0,a.kt)("version",{since:"2.0"},(0,a.kt)("p",null,"array_pushfront")),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Array<T> array_pushfront(Array<T> arr, T value)"),"\n\u5c06value\u6dfb\u52a0\u5230\u6570\u7ec4\u7684\u5f00\u5934."),(0,a.kt)("h4",{id:"returned-value"},"Returned value"),(0,a.kt)("p",null,"\u8fd4\u56de\u6dfb\u52a0value\u540e\u7684\u6570\u7ec4"),(0,a.kt)("p",null,"\u7c7b\u578b: Array."),(0,a.kt)("h3",{id:"notice"},"notice"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"\u53ea\u652f\u6301\u5728\u5411\u91cf\u5316\u5f15\u64ce\u4e2d\u4f7f\u7528")),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> select array_pushfront([1, 2], 3);\n+---------------------------------+\n| array_pushfront(ARRAY(1, 2), 3) |\n+---------------------------------+\n| [3, 1, 2]                       |\n+---------------------------------+\n\nmysql> select col3, array_pushfront(col3, 6) from array_test;\n+-----------+----------------------------+\n| col3      | array_pushfront(`col3`, 6) |\n+-----------+----------------------------+\n| [3, 4, 5] | [6, 3, 4, 5]               |\n| [NULL]    | [6, NULL]                  |\n| NULL      | NULL                       |\n| []        | [6]                        |\n+-----------+----------------------------+\n\nmysql> select col1, col3, array_pushfront(col3, col1) from array_test;\n+------+-----------+---------------------------------+\n| col1 | col3      | array_pushfront(`col3`, `col1`) |\n+------+-----------+---------------------------------+\n|    0 | [3, 4, 5] | [0, 3, 4, 5]                    |\n|    1 | [NULL]    | [1, NULL]                       |\n|    2 | NULL      | NULL                            |\n|    3 | []        | [3]                             |\n+------+-----------+---------------------------------+\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("p",null,"ARRAY,PUSHFRONT,ARRAY_PUSHFRONT"))}f.isMDXComponent=!0}}]);