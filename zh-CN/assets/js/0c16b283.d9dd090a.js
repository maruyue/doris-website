"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[96659],{3905:(e,n,r)=>{r.d(n,{Zo:()=>s,kt:()=>m});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=t.createContext({}),u=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},s=function(e){var n=u(e.components);return t.createElement(p.Provider,{value:n},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(r),d=a,m=c["".concat(p,".").concat(d)]||c[d]||y[d]||l;return r?t.createElement(m,o(o({ref:n},s),{},{components:r})):t.createElement(m,o({ref:n},s))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},24848:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var t=r(87462),a=(r(67294),r(3905));const l={title:"ARRAY_APPLY",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-functions/array-functions/array-apply",id:"version-2.0/sql-manual/sql-functions/array-functions/array-apply",title:"ARRAY_APPLY",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/array-functions/array-apply.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array-apply",permalink:"/zh-CN/docs/sql-manual/sql-functions/array-functions/array-apply",draft:!1,tags:[],version:"2.0",frontMatter:{title:"ARRAY_APPLY",language:"zh-CN"}},p={},u=[{value:"array_apply",id:"array_apply",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Arguments",id:"arguments",level:4},{value:"Returned value",id:"returned-value",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:u},c="wrapper";function y(e){let{components:n,...r}=e;return(0,a.kt)(c,(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"array_apply"},"array_apply"),(0,a.kt)("version",{since:"1.2.3"},(0,a.kt)("p",null,"array_apply")),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("p",null,"\u6570\u7ec4\u4ee5\u7279\u5b9a\u7684\u4e8c\u5143\u6761\u4ef6\u7b26\u8fc7\u6ee4\u5143\u7d20\uff0c \u5e76\u8fd4\u56de\u8fc7\u6ee4\u540e\u7684\u7ed3\u679c"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"array_apply(arr, op, val)\n")),(0,a.kt)("h4",{id:"arguments"},"Arguments"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"arr")," \u2014 \u8f93\u5165\u7684\u6570\u7ec4\uff0c \u5982\u679c\u662fnull\uff0c \u5219\u8fd4\u56denull\n",(0,a.kt)("inlineCode",{parentName:"p"},"op")," \u2014 \u8fc7\u6ee4\u6761\u4ef6\uff0c \u6761\u4ef6\u5305\u62ec ",(0,a.kt)("inlineCode",{parentName:"p"},"="),", ",(0,a.kt)("inlineCode",{parentName:"p"},">="),", ",(0,a.kt)("inlineCode",{parentName:"p"},"<="),", ",(0,a.kt)("inlineCode",{parentName:"p"},">"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"<"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"!="),"\uff0c\u4ec5\u652f\u6301\u5e38\u91cf\n",(0,a.kt)("inlineCode",{parentName:"p"},"val")," \u2014 \u8fc7\u6ee4\u7684\u6761\u4ef6\u503c\uff0c \u5982\u679c\u662fnull\uff0c \u5219\u8fd4\u56denull\uff0c\u4ec5\u652f\u6301\u5e38\u91cf"),(0,a.kt)("h4",{id:"returned-value"},"Returned value"),(0,a.kt)("p",null,"\u8fc7\u6ee4\u540e\u7684\u6570\u7ec4"),(0,a.kt)("p",null,"\u7c7b\u578b: Array."),(0,a.kt)("h3",{id:"notice"},"notice"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"\u53ea\u652f\u6301\u5728\u5411\u91cf\u5316\u5f15\u64ce\u4e2d\u4f7f\u7528\u3002")),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'mysql> select array_apply([1, 2, 3, 4, 5], ">=", 2);\n+--------------------------------------------+\n| array_apply(ARRAY(1, 2, 3, 4, 5), \'>=\', 2) |\n+--------------------------------------------+\n| [2, 3, 4, 5]                               |\n+--------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> select array_apply([1000000, 1000001, 1000002], "=", "1000002");\n+-------------------------------------------------------------+\n| array_apply(ARRAY(1000000, 1000001, 1000002), \'=\', 1000002) |\n+-------------------------------------------------------------+\n| [1000002]                                                   |\n+-------------------------------------------------------------+\n1 row in set (0.01 sec)\n')),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("p",null,"ARRAY,APPLY,ARRAY_APPLY"))}y.isMDXComponent=!0}}]);