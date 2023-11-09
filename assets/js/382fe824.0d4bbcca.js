"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[76625],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>O});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,O=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(O,l(l({ref:t},p),{},{components:n})):a.createElement(O,l({ref:t},p))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},40671:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"STOP-SYNC-JOB",language:"en"},l=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Manipulation-Statements/Load/STOP-SYNC-JOB",id:"version-2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Load/STOP-SYNC-JOB",title:"STOP-SYNC-JOB",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Load/STOP-SYNC-JOB.md",sourceDirName:"sql-manual/sql-reference/Data-Manipulation-Statements/Load",slug:"/sql-manual/sql-reference/Data-Manipulation-Statements/Load/STOP-SYNC-JOB",permalink:"/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/STOP-SYNC-JOB",draft:!1,tags:[],version:"2.0",frontMatter:{title:"STOP-SYNC-JOB",language:"en"},sidebar:"docs",previous:{title:"RESUME-SYNC-JOB",permalink:"/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/RESUME-SYNC-JOB"},next:{title:"CANCEL-LOAD",permalink:"/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CANCEL-LOAD"}},s={},c=[{value:"STOP-SYNC-JOB",id:"stop-sync-job",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"stop-sync-job"},"STOP-SYNC-JOB"),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("p",null,"STOP SYNC JOB"),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"Stop a non-stop resident data synchronization job in a database by ",(0,r.kt)("inlineCode",{parentName:"p"},"job_name"),"."),(0,r.kt)("p",null,"grammar:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"STOP SYNC JOB [db.]job_name\n")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Stop the data sync job named ",(0,r.kt)("inlineCode",{parentName:"p"},"job_name")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"STOP SYNC JOB `job_name`;\n")))),(0,r.kt)("h3",{id:"keywords"},"Keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"STOP, SYNC, JOB\n")),(0,r.kt)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);