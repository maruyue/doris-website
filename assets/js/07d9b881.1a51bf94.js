"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[64610],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=s,m=p["".concat(l,".").concat(d)]||p[d]||f[d]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:s,a[1]=i;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},76340:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),s=(n(67294),n(3905));const o={title:"JSON_EXISTS_PATH",language:"en"},a=void 0,i={unversionedId:"sql-manual/sql-functions/json-functions/json-exists-path",id:"version-2.0/sql-manual/sql-functions/json-functions/json-exists-path",title:"JSON_EXISTS_PATH",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-functions/json-functions/json-exists-path.md",sourceDirName:"sql-manual/sql-functions/json-functions",slug:"/sql-manual/sql-functions/json-functions/json-exists-path",permalink:"/docs/sql-manual/sql-functions/json-functions/json-exists-path",draft:!1,tags:[],version:"2.0",frontMatter:{title:"JSON_EXISTS_PATH",language:"en"},sidebar:"docs",previous:{title:"JSON_EXTRACT",permalink:"/docs/sql-manual/sql-functions/json-functions/json-extract"},next:{title:"JSON_TYPE",permalink:"/docs/sql-manual/sql-functions/json-functions/json-type"}},l={},c=[{value:"json_exists_path",id:"json_exists_path",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function f(e){let{components:t,...n}=e;return(0,s.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"json_exists_path"},"json_exists_path"),(0,s.kt)("h3",{id:"description"},"description"),(0,s.kt)("p",null,"It is used to judge whether the field specified by json_path exists in the JSON data. If it exists, it returns TRUE, and if it does not exist, it returns FALSE"),(0,s.kt)("h4",{id:"syntax"},"Syntax"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"BOOLEAN json_exists_path(JSON j, VARCHAR json_path)\n")),(0,s.kt)("h3",{id:"example"},"example"),(0,s.kt)("p",null,"Refer to ",(0,s.kt)("a",{parentName:"p",href:"/docs/sql-manual/sql-reference/Data-Types/JSON"},"json tutorial")),(0,s.kt)("h3",{id:"keywords"},"keywords"),(0,s.kt)("p",null,"json_exists_path"))}f.isMDXComponent=!0}}]);