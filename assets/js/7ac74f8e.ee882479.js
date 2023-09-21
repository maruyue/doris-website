"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[62137],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(t),h=o,m=p["".concat(i,".").concat(h)]||p[h]||f[h]||l;return t?r.createElement(m,s(s({ref:n},u),{},{components:t})):r.createElement(m,s({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,s=new Array(l);s[0]=h;var a={};for(var i in n)hasOwnProperty.call(n,i)&&(a[i]=n[i]);a.originalType=e,a[p]="string"==typeof e?e:o,s[1]=a;for(var c=2;c<l;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},58910:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var r=t(87462),o=(t(67294),t(3905));const l={title:"JSON_LENGTH",language:"en"},s=void 0,a={unversionedId:"sql-manual/sql-functions/json-functions/json-length",id:"sql-manual/sql-functions/json-functions/json-length",title:"JSON_LENGTH",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/json-functions/json-length.md",sourceDirName:"sql-manual/sql-functions/json-functions",slug:"/sql-manual/sql-functions/json-functions/json-length",permalink:"/docs/dev/sql-manual/sql-functions/json-functions/json-length",draft:!1,tags:[],version:"current",frontMatter:{title:"JSON_LENGTH",language:"en"},sidebar:"docs",previous:{title:"JSON_CONTAINS",permalink:"/docs/dev/sql-manual/sql-functions/json-functions/json-contains"},next:{title:"GET_JSON_DOUBLE",permalink:"/docs/dev/sql-manual/sql-functions/json-functions/get-json-double"}},i={},c=[{value:"json_length",id:"json_length",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function f(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"json_length"},"json_length"),(0,o.kt)("h3",{id:"description"},"description"),(0,o.kt)("h4",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"INT json_length(JSON json_str)"),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"INT json_length(JSON json_str, VARCHAR json_path)")),(0,o.kt)("p",null,"If specified path, the JSON_LENGTH() function returns the length of the data matching the path in the JSON document, otherwise it returns the length of the JSON document. The function calculates the length of the JSON document according to the following rules:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The length of a scalar is 1. For example, the length of 1, '\"x\"', true, false, null is all 1."),(0,o.kt)("li",{parentName:"ul"},"The length of an array is the number of array elements. For example, the length of ","[1, 2]"," is 2."),(0,o.kt)("li",{parentName:"ul"},'The length of an object is the number of object members. For example, the length of {"x": 1} is 1.')),(0,o.kt)("h3",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'mysql> SELECT json_length(\'{"k1":"v31","k2":300}\');\n+--------------------------------------+\n| json_length(\'{"k1":"v31","k2":300}\') |\n+--------------------------------------+\n|                                    2 |\n+--------------------------------------+\n1 row in set (0.26 sec)\n\nmysql> SELECT json_length(\'"abc"\');\n+----------------------+\n| json_length(\'"abc"\') |\n+----------------------+\n|                    1 |\n+----------------------+\n1 row in set (0.17 sec)\n\nmysql> SELECT json_length(\'{"x": 1, "y": [1, 2]}\', \'$.y\');\n+---------------------------------------------+\n| json_length(\'{"x": 1, "y": [1, 2]}\', \'$.y\') |\n+---------------------------------------------+\n|                                           2 |\n+---------------------------------------------+\n1 row in set (0.07 sec)\n')),(0,o.kt)("h3",{id:"keywords"},"keywords"),(0,o.kt)("p",null,"json,json_length"))}f.isMDXComponent=!0}}]);