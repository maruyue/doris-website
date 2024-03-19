"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[28259],{15680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>m});var i=t(296540);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,i,n=function(e,r){if(null==e)return{};var t,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=i.createContext({}),s=function(e){var r=i.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=s(e.components);return i.createElement(c.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},y=i.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),y=n,m=p["".concat(c,".").concat(y)]||p[y]||d[y]||a;return t?i.createElement(m,o(o({ref:r},u),{},{components:t})):i.createElement(m,o({ref:r},u))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,o=new Array(a);o[0]=y;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[p]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}y.displayName="MDXCreateElement"},165912:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=t(58168),n=(t(296540),t(15680));const a={title:"Asynchronous Materialized View",language:"en"},o=void 0,l={unversionedId:"query/view-materialized-view/asyn-materialized-view",id:"version-2.0/query/view-materialized-view/asyn-materialized-view",title:"Asynchronous Materialized View",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/query/view-materialized-view/asyn-materialized-view.md",sourceDirName:"query/view-materialized-view",slug:"/query/view-materialized-view/asyn-materialized-view",permalink:"/docs/2.0/query/view-materialized-view/asyn-materialized-view",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Asynchronous Materialized View",language:"en"},sidebar:"docs",previous:{title:"Materialized View",permalink:"/docs/2.0/query/view-materialized-view/materialized-view"},next:{title:"Doris Join Optimization Principle",permalink:"/docs/2.0/query/join-optimization/doris-join-optimization"}},c={},s=[],u={toc:s},p="wrapper";function d(e){let{components:r,...t}=e;return(0,n.yg)(p,(0,i.A)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"The asynchronous materialized view feature is released in Doris 2.1, see Doris 2.1 documentation.")))}d.isMDXComponent=!0}}]);