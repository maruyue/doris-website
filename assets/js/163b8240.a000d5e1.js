"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[54735],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),f=a,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},11131:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=t(87462),a=(t(67294),t(3905));const o={title:"inner_product",language:"en"},i=void 0,c={unversionedId:"sql-manual/sql-functions/distance-functions/inner-product",id:"version-2.0/sql-manual/sql-functions/distance-functions/inner-product",title:"inner_product",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-functions/distance-functions/inner-product.md",sourceDirName:"sql-manual/sql-functions/distance-functions",slug:"/sql-manual/sql-functions/distance-functions/inner-product",permalink:"/docs/sql-manual/sql-functions/distance-functions/inner-product",draft:!1,tags:[],version:"2.0",frontMatter:{title:"inner_product",language:"en"},sidebar:"docs",previous:{title:"cosine_distance",permalink:"/docs/sql-manual/sql-functions/distance-functions/cosine-distance"},next:{title:"l1_distance",permalink:"/docs/sql-manual/sql-functions/distance-functions/l1-distance"}},l={},s=[{value:"inner_product",id:"inner_product",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Notice",id:"notice",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},p="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"inner_product"},"inner_product"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"DOUBLE inner_product(ARRAY<T> array1, ARRAY<T> array2)\n")),(0,a.kt)("p",null,"Calculates the scalar product of two vectors of the same size.\nReturn NULL if input array is NULL or any element of array is NULL."),(0,a.kt)("h4",{id:"notice"},"Notice"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"nested type of input array support: TINYINT, SMALLINT, INT, BIGINT, LARGEINT, FLOAT, DOUBLE"),(0,a.kt)("li",{parentName:"ul"},"input array1 and array2 should have the same element size")),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sql> SELECT inner_product([1, 2], [2, 3]);\n+-----------------------------------------+\n| inner_product(ARRAY(1, 2), ARRAY(2, 3)) |\n+-----------------------------------------+\n|                                       8 |\n+-----------------------------------------+\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"INNER_PRODUCT,DISTANCE,ARRAY\n")))}d.isMDXComponent=!0}}]);