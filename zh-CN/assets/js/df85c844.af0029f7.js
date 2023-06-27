"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[62189],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>N});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,N=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(N,i(i({ref:t},c),{},{components:n})):r.createElement(N,i({ref:t},c))}));function N(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},45601:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={title:"INSTALL-PLUGIN",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Database-Administration-Statements/INSTALL-PLUGIN",id:"sql-manual/sql-reference/Database-Administration-Statements/INSTALL-PLUGIN",title:"INSTALL-PLUGIN",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Database-Administration-Statements/INSTALL-PLUGIN.md",sourceDirName:"sql-manual/sql-reference/Database-Administration-Statements",slug:"/sql-manual/sql-reference/Database-Administration-Statements/INSTALL-PLUGIN",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Database-Administration-Statements/INSTALL-PLUGIN",draft:!1,tags:[],version:"current",frontMatter:{title:"INSTALL-PLUGIN",language:"zh-CN"},sidebar:"docs",previous:{title:"SET-VARIABLE",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Database-Administration-Statements/SET-VARIABLE"},next:{title:"UNINSTALL-PLUGIN",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Database-Administration-Statements/UNINSTALL-PLUGIN"}},s={},p=[{value:"INSTALL-PLUGIN",id:"install-plugin",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"install-plugin"},"INSTALL-PLUGIN"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,"INSTALL PLUGIN"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5b89\u88c5\u4e00\u4e2a\u63d2\u4ef6\u3002"),(0,a.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'INSTALL PLUGIN FROM [source] [PROPERTIES ("key"="value", ...)]\n')),(0,a.kt)("p",null,"source \u652f\u6301\u4e09\u79cd\u7c7b\u578b\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6307\u5411\u4e00\u4e2a zip \u6587\u4ef6\u7684\u7edd\u5bf9\u8def\u5f84\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u6307\u5411\u4e00\u4e2a\u63d2\u4ef6\u76ee\u5f55\u7684\u7edd\u5bf9\u8def\u5f84\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u6307\u5411\u4e00\u4e2a http \u6216 https \u534f\u8bae\u7684 zip \u6587\u4ef6\u4e0b\u8f7d\u8def\u5f84")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5b89\u88c5\u4e00\u4e2a\u672c\u5730 zip \u6587\u4ef6\u63d2\u4ef6\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'INSTALL PLUGIN FROM "/home/users/doris/auditdemo.zip";\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5b89\u88c5\u4e00\u4e2a\u672c\u5730\u76ee\u5f55\u4e2d\u7684\u63d2\u4ef6\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'INSTALL PLUGIN FROM "/home/users/doris/auditdemo/";\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4e0b\u8f7d\u5e76\u5b89\u88c5\u4e00\u4e2a\u63d2\u4ef6\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'INSTALL PLUGIN FROM "http://mywebsite.com/plugin.zip";\n')),(0,a.kt)("p",{parentName:"li"},"\u6ce8\u610f\u9700\u8981\u653e\u7f6e\u4e00\u4e2a\u548c ",(0,a.kt)("inlineCode",{parentName:"p"},".zip")," \u6587\u4ef6\u540c\u540d\u7684 md5 \u6587\u4ef6, \u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"http://mywebsite.com/plugin.zip.md5")," \u3002\u5176\u4e2d\u5185\u5bb9\u4e3a .zip \u6587\u4ef6\u7684 MD5 \u503c\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4e0b\u8f7d\u5e76\u5b89\u88c5\u4e00\u4e2a\u63d2\u4ef6,\u540c\u65f6\u8bbe\u7f6e\u4e86zip\u6587\u4ef6\u7684md5sum\u7684\u503c\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'INSTALL PLUGIN FROM "http://mywebsite.com/plugin.zip" PROPERTIES("md5sum" = "73877f6029216f4314d712086a146570");\n')))),(0,a.kt)("h3",{id:"keywords"},"Keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"INSTALL, PLUGIN\n")),(0,a.kt)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);