"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[13778],{3905:(e,a,t)=>{t.d(a,{Zo:()=>s,kt:()=>u});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=n.createContext({}),o=function(e){var a=n.useContext(m),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},s=function(e){var a=o(e.components);return n.createElement(m.Provider,{value:a},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},b=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=o(t),b=r,u=d["".concat(m,".").concat(b)]||d[b]||c[b]||l;return t?n.createElement(u,i(i({ref:a},s),{},{components:t})):n.createElement(u,i({ref:a},s))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=b;var p={};for(var m in a)hasOwnProperty.call(a,m)&&(p[m]=a[m]);p.originalType=e,p[d]="string"==typeof e?e:r,i[1]=p;for(var o=2;o<l;o++)i[o]=t[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}b.displayName="MDXCreateElement"},43527:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var n=t(87462),r=(t(67294),t(3905));const l={title:"RECOVER",language:"en"},i=void 0,p={unversionedId:"sql-manual/sql-reference/Database-Administration-Statements/RECOVER",id:"sql-manual/sql-reference/Database-Administration-Statements/RECOVER",title:"RECOVER",description:"\x3c!--",source:"@site/docs/sql-manual/sql-reference/Database-Administration-Statements/RECOVER.md",sourceDirName:"sql-manual/sql-reference/Database-Administration-Statements",slug:"/sql-manual/sql-reference/Database-Administration-Statements/RECOVER",permalink:"/docs/dev/sql-manual/sql-reference/Database-Administration-Statements/RECOVER",draft:!1,tags:[],version:"current",frontMatter:{title:"RECOVER",language:"en"},sidebar:"docs",previous:{title:"ADMIN-CLEAN-TRASH",permalink:"/docs/dev/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CLEAN-TRASH"},next:{title:"KILL",permalink:"/docs/dev/sql-manual/sql-reference/Database-Administration-Statements/KILL"}},m={},o=[{value:"RECOVER",id:"recover",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],s={toc:o},d="wrapper";function c(e){let{components:a,...t}=e;return(0,r.kt)(d,(0,n.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"recover"},"RECOVER"),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("p",null,"RECOVER"),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"This statement is used to restore a previously deleted database, table or partition. It supports recover meta information by name or id, and you can set new name for recovered meta information."),(0,r.kt)("p",null,"You can get all meta informations that can be recovered by statement ",(0,r.kt)("inlineCode",{parentName:"p"},"SHOW CATALOG RECYCLE BIN"),"."),(0,r.kt)("p",null,"grammar:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"restore database by name"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"RECOVER DATABASE db_name;\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"restore table by name"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"RECOVER TABLE [db_name.]table_name;\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"restore partition by name"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"RECOVER PARTITION partition_name FROM [db_name.]table_name;\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"restore database by name and id"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"RECOVER DATABASE db_name db_id;\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"restore table by name and id"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"RECOVER TABLE [db_name.]table_name table_id;\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"restore partition by name and id"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"RECOVER PARTITION partition_name partition_id FROM [db_name.]table_name;\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"restore database by name, and set new db name"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"RECOVER DATABASE db_name AS new_db_name;\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"restore table by name and id, and set new table name"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"RECOVER TABLE [db_name.]table_name table_id AS new_db_name;\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"restore partition by name and id, and set new partition name"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"RECOVER PARTITION partition_name partition_id AS new_db_name FROM [db_name.]table_name;\n")))),(0,r.kt)("p",null,"illustrate:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This operation can only restore meta information that was deleted in the previous period. Default is 1 day. (Configurable through the ",(0,r.kt)("inlineCode",{parentName:"li"},"catalog_trash_expire_second")," parameter in fe.conf)"),(0,r.kt)("li",{parentName:"ul"},"If you recover a meta information by name without id, it will recover the last dropped one which has same name."),(0,r.kt)("li",{parentName:"ul"},"You can get all meta informations that can be recovered by statement ",(0,r.kt)("inlineCode",{parentName:"li"},"SHOW CATALOG RECYCLE BIN"),".")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Restore the database named example_db")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"RECOVER DATABASE example_db;\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Restore the table named example_tbl")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"RECOVER TABLE example_db.example_tbl;\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Restore the partition named p1 in table example_tbl")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"RECOVER PARTITION p1 FROM example_tbl;\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Restore the database named example_db with id example_db_id")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"RECOVER DATABASE example_db example_db_id;\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Restore the table named example_tbl with id example_tbl_id")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"RECOVER TABLE example_db.example_tbl example_tbl_id;\n")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Restore the partition named p1 with id p1_id in table example_tbl")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"RECOVER PARTITION p1 p1_id FROM example_tbl;\n")),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"Restore the database named example_db with id example_db_id, and set new name new_example_db")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"RECOVER DATABASE example_db example_db_id AS new_example_db;\n")),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},"Restore the table named example_tbl, and set new name new_example_tbl")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"RECOVER TABLE example_db.example_tbl AS new_example_tbl;\n")),(0,r.kt)("ol",{start:9},(0,r.kt)("li",{parentName:"ol"},"Restore the partition named p1 with id p1_id in table example_tbl, and new name new_p1")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"RECOVER PARTITION p1 p1_id AS new_p1 FROM example_tbl;\n")),(0,r.kt)("h3",{id:"keywords"},"Keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," RECOVER\n")),(0,r.kt)("h3",{id:"best-practice"},"Best Practice"))}c.isMDXComponent=!0}}]);