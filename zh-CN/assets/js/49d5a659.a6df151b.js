"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[92682],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),d=l,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function f(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:l,o[1]=i;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},60465:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=t(87462),l=(t(67294),t(3905));const a={title:"NUMBERS",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-functions/table-functions/numbers",id:"version-2.0/sql-manual/sql-functions/table-functions/numbers",title:"NUMBERS",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/table-functions/numbers.md",sourceDirName:"sql-manual/sql-functions/table-functions",slug:"/sql-manual/sql-functions/table-functions/numbers",permalink:"/zh-CN/docs/sql-manual/sql-functions/table-functions/numbers",draft:!1,tags:[],version:"2.0",frontMatter:{title:"NUMBERS",language:"zh-CN"},sidebar:"docs",previous:{title:"EXPLODE_BITMAP",permalink:"/zh-CN/docs/sql-manual/sql-functions/table-functions/explode-bitmap"},next:{title:"EXPLODE_NUMBERS",permalink:"/zh-CN/docs/sql-manual/sql-functions/table-functions/explode-numbers"}},s={},u=[{value:"<code>numbers</code>",id:"numbers",level:2},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:u},p="wrapper";function m(e){let{components:n,...t}=e;return(0,l.kt)(p,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"numbers"},(0,l.kt)("inlineCode",{parentName:"h2"},"numbers")),(0,l.kt)("h3",{id:"description"},"description"),(0,l.kt)("p",null,"\u8868\u51fd\u6570\uff0c\u751f\u6210\u4e00\u5f20\u53ea\u542b\u6709\u4e00\u5217\u7684\u4e34\u65f6\u8868\uff0c\u5217\u540d\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"number"),"\uff0c\u884c\u7684\u503c\u4e3a[0,n)\u3002"),(0,l.kt)("p",null,"\u8be5\u51fd\u6570\u7528\u4e8efrom\u5b50\u53e5\u4e2d\u3002"),(0,l.kt)("h4",{id:"syntax"},"syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'numbers(\n  "number" = "n"\n  );\n')),(0,l.kt)("p",null,"\u53c2\u6570\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"number"),": \u4ee3\u8868\u751f\u6210[0,n)\u7684\u884c\u3002")),(0,l.kt)("h3",{id:"example"},"example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'mysql> select * from numbers("number" = "10");\n+--------+\n| number |\n+--------+\n|      0 |\n|      1 |\n|      2 |\n|      3 |\n|      4 |\n|      5 |\n|      6 |\n|      7 |\n|      8 |\n|      9 |\n+--------+\n')),(0,l.kt)("h3",{id:"keywords"},"keywords"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"numbers\n")))}m.isMDXComponent=!0}}]);