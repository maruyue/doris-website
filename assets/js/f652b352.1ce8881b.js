"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[68386],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>y});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,y=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(y,i(i({ref:n},s),{},{components:t})):r.createElement(y,i({ref:n},s))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},669344:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(58168),a=(t(296540),t(15680));const o={title:"Show Proc Action",language:"en"},i=void 0,l={unversionedId:"admin-manual/fe/show-proc-action",id:"version-2.0/admin-manual/fe/show-proc-action",title:"Show Proc Action",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/admin-manual/fe/show-proc-action.md",sourceDirName:"admin-manual/fe",slug:"/admin-manual/fe/show-proc-action",permalink:"/docs/2.0/admin-manual/fe/show-proc-action",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Show Proc Action",language:"en"},sidebar:"docs",previous:{title:"Show Meta Info Action",permalink:"/docs/2.0/admin-manual/fe/show-meta-info-action"},next:{title:"Show Runtime Info Action",permalink:"/docs/2.0/admin-manual/fe/show-runtime-info-action"}},p={},c=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],s={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"show-proc-action"},"Show Proc Action"),(0,a.yg)("h2",{id:"request"},"Request"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"GET /api/show_proc")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"Used to obtain PROC information."),(0,a.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,a.yg)("p",null,"None"),(0,a.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"path"),(0,a.yg)("p",{parentName:"li"},"  Specify Proc Path\n")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"forward"),(0,a.yg)("p",{parentName:"li"},"  Whether to forward to Master FE for execution"))),(0,a.yg)("h2",{id:"request-body"},"Request body"),(0,a.yg)("p",null,"None"),(0,a.yg)("h2",{id:"response"},"Response"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": [\n        proc infos ...\n    ],\n    "count": 0\n}\n')),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"View ",(0,a.yg)("inlineCode",{parentName:"p"},"/statistic")," information"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},'GET /api/show_proc?path=/statistic\n\nResponse:\n{\n    "msg": "success",\n    "code": 0,\n    "data": [\n        ["10003", "default_cluster:db1", "2", "3", "3", "3", "3", "0", "0", "0"],\n        ["10013", "default_cluster:doris_audit_db__", "1", "4", "4", "4", "4", "0", "0", "0"],\n        ["Total", "2", "3", "7", "7", "7", "7", "0", "0", "0"]\n    ],\n    "count": 0\n}\n'))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Forward to Master for execution"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},'GET /api/show_proc?path=/statistic&forward=true\n\nResponse:\n{\n    "msg": "success",\n    "code": 0,\n    "data": [\n        ["10003", "default_cluster:db1", "2", "3", "3", "3", "3", "0", "0", "0"],\n        ["10013", "default_cluster:doris_audit_db__", "1", "4", "4", "4", "4", "0", "0", "0"],\n        ["Total", "2", "3", "7", "7", "7", "7", "0", "0", "0"]\n    ],\n    "count": 0\n}\n')))))}d.isMDXComponent=!0}}]);