"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[93841],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>f});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),d=o,f=p["".concat(l,".").concat(d)]||p[d]||y[d]||s;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},18155:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>y,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=t(58168),o=(t(96540),t(15680));const s={title:"ESQUERY",language:"en"},a=void 0,i={unversionedId:"sql-manual/sql-functions/string-functions/esquery",id:"sql-manual/sql-functions/string-functions/esquery",title:"ESQUERY",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/string-functions/esquery.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/esquery",permalink:"/docs/dev/sql-manual/sql-functions/string-functions/esquery",draft:!1,tags:[],version:"current",frontMatter:{title:"ESQUERY",language:"en"},sidebar:"docs",previous:{title:"SLEEP",permalink:"/docs/dev/sql-manual/sql-functions/string-functions/sleep"},next:{title:"random_bytes",permalink:"/docs/dev/sql-manual/sql-functions/string-functions/random_bytes"}},l={},c=[{value:"esquery",id:"esquery",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function y(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"esquery"},"esquery"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"boolean esquery(varchar field, varchar QueryDSL)")),(0,o.yg)("p",null,"Use the esquery (field, QueryDSL) function to match queries that cannot be expressed in SQL are pushed down to Elasticsearch for filtering.\nThe first column name parameter of esquery is used to associate indexes, and the second parameter is the json expression of the basic query DSL of ES, which is contained in curly brackets {}. There is one and only one root key of json, such as match_phrase\u3001geo_Shape, bool."),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'match_phrase SQL:\n\nselect * from es_table where esquery(k4, \'{\n        "match_phrase": {\n           "k4": "doris on es"\n        }\n    }\');\n\n\ngeo SQL:\n\nselect * from es_table where esquery(k4, \'{\n      "geo_shape": {\n         "location": {\n            "shape": {\n               "type": "envelope",\n               "coordinates": [\n                  [\n                     13,\n                     53\n                  ],\n                  [\n                     14,\n                     52\n                  ]\n               ]\n            },\n            "relation": "within"\n         }\n      }\n   }\');\n')),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"esquery\n")))}y.isMDXComponent=!0}}]);