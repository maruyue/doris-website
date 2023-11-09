"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[77738],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,g=u["".concat(c,".").concat(d)]||u[d]||f[d]||l;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},37434:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={title:"PERCENTILE",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-functions/aggregate-functions/percentile",id:"version-2.0/sql-manual/sql-functions/aggregate-functions/percentile",title:"PERCENTILE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/aggregate-functions/percentile.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/percentile",permalink:"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/percentile",draft:!1,tags:[],version:"2.0",frontMatter:{title:"PERCENTILE",language:"zh-CN"},sidebar:"docs",previous:{title:"AVG_WEIGHTED",permalink:"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/avg-weighted"},next:{title:"PERCENTILE_ARRAY",permalink:"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/percentile-array"}},c={},s=[{value:"PERCENTILE",id:"percentile",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:s},u="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"percentile"},"PERCENTILE"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"PERCENTILE(expr, DOUBLE p)")),(0,a.kt)("p",null,"\u8ba1\u7b97\u7cbe\u786e\u7684\u767e\u5206\u4f4d\u6570\uff0c\u9002\u7528\u4e8e\u5c0f\u6570\u636e\u91cf\u3002\u5148\u5bf9\u6307\u5b9a\u5217\u964d\u5e8f\u6392\u5217\uff0c\u7136\u540e\u53d6\u7cbe\u786e\u7684\u7b2c p \u4f4d\u767e\u5206\u6570\u3002p\u7684\u503c\u4ecb\u4e8e0\u52301\u4e4b\u95f4"),(0,a.kt)("p",null,"\u53c2\u6570\u8bf4\u660e\nexpr\uff1a\u5fc5\u586b\u3002\u503c\u4e3a\u6574\u6570\uff08\u6700\u5927\u4e3abigint\uff09 \u7c7b\u578b\u7684\u5217\u3002\np\uff1a\u5e38\u91cf\u5fc5\u586b\u3002\u9700\u8981\u7cbe\u786e\u7684\u767e\u5206\u4f4d\u6570\u3002\u53d6\u503c\u4e3a ","[0.0,1.0]","\u3002"),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"MySQL > select `table`, percentile(cost_time,0.99) from log_statis group by `table`;\n+---------------------+---------------------------+\n| table    |        percentile(`cost_time`, 0.99) |\n+----------+--------------------------------------+\n| test     |                                54.22 |\n+----------+--------------------------------------+\n\nMySQL > select percentile(NULL,0.3) from table1;\n+-----------------------+\n| percentile(NULL, 0.3) |\n+-----------------------+\n|                  NULL |\n+-----------------------+\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("p",null,"PERCENTILE"))}f.isMDXComponent=!0}}]);