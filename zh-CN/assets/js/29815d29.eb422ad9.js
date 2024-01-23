"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[64065],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),v=a,f=u["".concat(s,".").concat(v)]||u[v]||d[v]||l;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=v;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},66175:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={title:"IPV4",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Data-Types/IPV4",id:"sql-manual/sql-reference/Data-Types/IPV4",title:"IPV4",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Data-Types/IPV4.md",sourceDirName:"sql-manual/sql-reference/Data-Types",slug:"/sql-manual/sql-reference/Data-Types/IPV4",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Types/IPV4",draft:!1,tags:[],version:"current",frontMatter:{title:"IPV4",language:"zh-CN"},sidebar:"docs",previous:{title:"VARIANT",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Types/VARIANT"},next:{title:"IPV6",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Types/IPV6"}},s={},p=[{value:"IPV4",id:"ipv4",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"ipv4"},"IPV4"),(0,a.kt)("version",{since:"dev"},(0,a.kt)("p",null,"IPV4")),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("p",null,"IPV4\nIPv4\u7c7b\u578b\uff0c\u4ee5UInt32\u7684\u5f62\u5f0f\u5b58\u50a8\u57284\u4e2a\u5b57\u8282\u4e2d\uff0c\u7528\u4e8e\u8868\u793aIPv4\u5730\u5740\u3002\n\u53d6\u503c\u8303\u56f4\u662f ","['0.0.0.0', '255.255.255.255']","\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"\u8d85\u51fa\u53d6\u503c\u8303\u56f4\u6216\u8005\u683c\u5f0f\u975e\u6cd5\u7684\u8f93\u5165\u5c06\u8fd4\u56deNULL")),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("p",null,"\u5efa\u8868\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'CREATE TABLE ipv4_test (\n  `id` int,\n  `ip_v4` ipv4\n) ENGINE=OLAP\nDISTRIBUTED BY HASH(`id`) BUCKETS 4\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1"\n);\n')),(0,a.kt)("p",null,"\u63d2\u5165\u6570\u636e\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"insert into ipv4_test values(1, '0.0.0.0');\ninsert into ipv4_test values(2, '127.0.0.1');\ninsert into ipv4_test values(3, '59.50.185.152');\ninsert into ipv4_test values(4, '255.255.255.255');\ninsert into ipv4_test values(5, '255.255.255.256'); // invalid data\n")),(0,a.kt)("p",null,"\u67e5\u8be2\u6570\u636e\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> select * from ipv4_test order by id;\n+------+-----------------+\n| id   | ip_v4           |\n+------+-----------------+\n|    1 | 0.0.0.0         |\n|    2 | 127.0.0.1       |\n|    3 | 59.50.185.152   |\n|    4 | 255.255.255.255 |\n|    5 | NULL            |\n+------+-----------------+\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("p",null,"IPV4"))}d.isMDXComponent=!0}}]);