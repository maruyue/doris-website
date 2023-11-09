"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[64163],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},E=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),E=a,d=m["".concat(s,".").concat(E)]||m[E]||u[E]||i;return n?r.createElement(d,l(l({ref:t},p),{},{components:n})):r.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=E;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}E.displayName="MDXCreateElement"},22069:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"CREATE-ENCRYPT-KEY",language:"en"},l=void 0,o={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-ENCRYPT-KEY",id:"version-2.0/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-ENCRYPT-KEY",title:"CREATE-ENCRYPT-KEY",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-ENCRYPT-KEY.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Create",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-ENCRYPT-KEY",permalink:"/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-ENCRYPT-KEY",draft:!1,tags:[],version:"2.0",frontMatter:{title:"CREATE-ENCRYPT-KEY",language:"en"},sidebar:"docs",previous:{title:"CREATE-POLICY",permalink:"/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-POLICY"},next:{title:"CREATE-RESOURCE",permalink:"/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-RESOURCE"}},s={},c=[{value:"CREATE-ENCRYPT-KEY",id:"create-encrypt-key",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"create-encrypt-key"},"CREATE-ENCRYPT-KEY"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,"CREATE ENCRYPTKEY"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"This statement creates a custom key. Executing this command requires the user to have ",(0,a.kt)("inlineCode",{parentName:"p"},"ADMIN")," privileges."),(0,a.kt)("p",null,"grammar:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE ENCRYPTKEY key_name AS "key_string"\n')),(0,a.kt)("p",null,"illustrate:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"key_name"),": The name of the key to be created, may contain the name of the database. For example: ",(0,a.kt)("inlineCode",{parentName:"p"},"db1.my_key"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"key_string"),": The string to create the key with."),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"key_name")," contains the database name, then the custom key will be created in the corresponding database, otherwise this function will create the database in the current session. The name of the new key cannot be the same as the existing key in the corresponding database, otherwise the creation will fail."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a custom key"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE ENCRYPTKEY my_key AS "ABCD123456789";\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Use a custom key"),(0,a.kt)("p",{parentName:"li"},"To use a custom key, you need to add the keyword ",(0,a.kt)("inlineCode",{parentName:"p"},"KEY"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"key")," before the key, separated from the ",(0,a.kt)("inlineCode",{parentName:"p"},"key_name")," space."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> SELECT HEX(AES_ENCRYPT(\"Doris is Great\", KEY my_key));\n+------------------------------------------------+\n| hex(aes_encrypt('Doris is Great', key my_key)) |\n+------------------------------------------------+\n| D26DB38579D6A343350EDDC6F2AD47C6 |\n+------------------------------------------------+\n1 row in set (0.02 sec)\n\nmysql> SELECT AES_DECRYPT(UNHEX('D26DB38579D6A343350EDDC6F2AD47C6'), KEY my_key);\n+------------------------------------------------- -------------------+\n| aes_decrypt(unhex('D26DB38579D6A343350EDDC6F2AD47C6'), key my_key) |\n+------------------------------------------------- -------------------+\n| Doris is Great |\n+------------------------------------------------- -------------------+\n1 row in set (0.01 sec)\n")))),(0,a.kt)("h3",{id:"keywords"},"Keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"CREATE, ENCRYPTKEY\n")),(0,a.kt)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);