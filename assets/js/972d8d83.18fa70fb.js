"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[75863],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,b=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return a?n.createElement(b,o(o({ref:t},s),{},{components:a})):n.createElement(b,o({ref:t},s))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},60116:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const l={title:"Reload Tablet",language:"en"},o=void 0,i={unversionedId:"admin-manual/http-actions/be/tablet-reload",id:"admin-manual/http-actions/be/tablet-reload",title:"Reload Tablet",description:"\x3c!--",source:"@site/docs/admin-manual/http-actions/be/tablet-reload.md",sourceDirName:"admin-manual/http-actions/be",slug:"/admin-manual/http-actions/be/tablet-reload",permalink:"/docs/dev/admin-manual/http-actions/be/tablet-reload",draft:!1,tags:[],version:"current",frontMatter:{title:"Reload Tablet",language:"en"},sidebar:"docs",previous:{title:"Check Alive",permalink:"/docs/dev/admin-manual/http-actions/be/health"},next:{title:"Restore Tablet",permalink:"/docs/dev/admin-manual/http-actions/be/tablet-restore"}},p={},c=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],s={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"reload-tablet"},"Reload Tablet"),(0,r.kt)("h2",{id:"request"},"Request"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'GET /api/reload_tablet?tablet_id={int}&schema_hash={int}&path={string}"')),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Reload tablet"),(0,r.kt)("h2",{id:"query-parameters"},"Query parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"tablet_id"),"\nID of the tablet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"schema_hash"),"\nSchema hash      ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"path"),"\nPath of file    "))),(0,r.kt)("h2",{id:"request-body"},"Request body"),(0,r.kt)("p",null,"None"),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```\nload header succeed\n```\n")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'```\ncurl "http://127.0.0.1:8040/api/reload_tablet?tablet_id=123456&schema_hash=1111111&path=/abc"\n\n```\n')))}d.isMDXComponent=!0}}]);