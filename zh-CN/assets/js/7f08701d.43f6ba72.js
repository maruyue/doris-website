"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[73018],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},E=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),E=a,d=p["".concat(s,".").concat(E)]||p[E]||m[E]||l;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=E;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}E.displayName="MDXCreateElement"},55678:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={title:"CREATE-SQL-BLOCK-RULE",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-SQL-BLOCK-RULE",id:"sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-SQL-BLOCK-RULE",title:"CREATE-SQL-BLOCK-RULE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-SQL-BLOCK-RULE.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Create",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-SQL-BLOCK-RULE",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-SQL-BLOCK-RULE",draft:!1,tags:[],version:"current",frontMatter:{title:"CREATE-SQL-BLOCK-RULE",language:"zh-CN"},sidebar:"docs",previous:{title:"CREATE-WORKLOAD-GROUP",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-WORKLOAD-GROUP"},next:{title:"ALTER-DATABASE",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-DATABASE"}},s={},c=[{value:"CREATE-SQL-BLOCK-RULE",id:"create-sql-block-rule",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"create-sql-block-rule"},"CREATE-SQL-BLOCK-RULE"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,"CREATE SQL BLOCK RULE"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"\u8be5\u8bed\u53e5\u521b\u5efaSQL\u963b\u6b62\u89c4\u5219\uff0c\u8be5\u529f\u80fd\u53ef\u7528\u4e8e\u9650\u5236\u4efb\u4f55sql\u8bed\u53e5\uff08\u5305\u62ec DDL \u548c DML \u8bed\u53e5\uff09\u3002"),(0,a.kt)("p",null,"\u652f\u6301\u6309\u7528\u6237\u914d\u7f6eSQL\u9ed1\u540d\u5355\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u6b63\u5219\u5339\u914d\u7684\u65b9\u5f0f\u62d2\u7edd\u6307\u5b9aSQL"),(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u8bbe\u7f6epartition_num, tablet_num, cardinality, \u68c0\u67e5\u4e00\u4e2a\u67e5\u8be2\u662f\u5426\u8fbe\u5230\u5176\u4e2d\u4e00\u4e2a\u9650\u5236",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"partition_num, tablet_num, cardinality \u53ef\u4ee5\u4e00\u8d77\u8bbe\u7f6e\uff0c\u4e00\u65e6\u4e00\u4e2a\u67e5\u8be2\u8fbe\u5230\u5176\u4e2d\u4e00\u4e2a\u9650\u5236\uff0c\u67e5\u8be2\u5c06\u4f1a\u88ab\u62e6\u622a")))),(0,a.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE SQL_BLOCK_RULE rule_name \n[PROPERTIES ("key"="value", ...)];\n')),(0,a.kt)("p",null,"\u53c2\u6570\u8bf4\u660e\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"sql\uff1a\u5339\u914d\u89c4\u5219(\u57fa\u4e8e\u6b63\u5219\u5339\u914d,\u7279\u6b8a\u5b57\u7b26\u9700\u8981\u8f6c\u8bd1,\u5982",(0,a.kt)("inlineCode",{parentName:"li"},"select *"),"\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"select \\\\*"),')\uff0c\u53ef\u9009\uff0c\u9ed8\u8ba4\u503c\u4e3a "NULL", \u6700\u540e\u4e0d\u8981\u5e26\u5206\u53f7'),(0,a.kt)("li",{parentName:"ul"},"sqlHash: sql hash\u503c\uff0c\u7528\u4e8e\u5b8c\u5168\u5339\u914d\uff0c\u6211\u4eec\u4f1a\u5728",(0,a.kt)("inlineCode",{parentName:"li"},"fe.audit.log"),'\u6253\u5370\u8fd9\u4e2a\u503c\uff0c\u53ef\u9009\uff0c\u8fd9\u4e2a\u53c2\u6570\u548csql\u53ea\u80fd\u4e8c\u9009\u4e00\uff0c\u9ed8\u8ba4\u503c\u4e3a "NULL"'),(0,a.kt)("li",{parentName:"ul"},"partition_num: \u4e00\u4e2a\u626b\u63cf\u8282\u70b9\u4f1a\u626b\u63cf\u7684\u6700\u5927partition\u6570\u91cf\uff0c\u9ed8\u8ba4\u503c\u4e3a0L"),(0,a.kt)("li",{parentName:"ul"},"tablet_num: \u4e00\u4e2a\u626b\u63cf\u8282\u70b9\u4f1a\u626b\u63cf\u7684\u6700\u5927tablet\u6570\u91cf\uff0c\u9ed8\u8ba4\u503c\u4e3a0L"),(0,a.kt)("li",{parentName:"ul"},"cardinality: \u4e00\u4e2a\u626b\u63cf\u8282\u70b9\u7c97\u7565\u7684\u626b\u63cf\u884c\u6570\uff0c\u9ed8\u8ba4\u503c\u4e3a0L"),(0,a.kt)("li",{parentName:"ul"},"global\uff1a\u662f\u5426\u5168\u5c40(\u6240\u6709\u7528\u6237)\u751f\u6548\uff0c\u9ed8\u8ba4\u4e3afalse"),(0,a.kt)("li",{parentName:"ul"},"enable\uff1a\u662f\u5426\u5f00\u542f\u963b\u6b62\u89c4\u5219\uff0c\u9ed8\u8ba4\u4e3atrue")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u540d\u79f0\u4e3a test_rule \u7684\u963b\u6b62\u89c4\u5219"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE SQL_BLOCK_RULE test_rule \nPROPERTIES(\n  "sql"="select \\\\* from order_analysis;",\n  "global"="false",\n  "enable"="true"\n);\n')))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," \u5f53\u6211\u4eec\u53bb\u6267\u884c\u521a\u624d\u6211\u4eec\u5b9a\u4e49\u5728\u89c4\u5219\u91cc\u7684sql\u65f6\u5c31\u4f1a\u8fd4\u56de\u5f02\u5e38\u9519\u8bef\uff0c\u793a\u4f8b\u5982\u4e0b\uff1a\n\n ```sql\n mysql> select * from order_analysis;\n ERROR 1064 (HY000): errCode = 2, detailMessage = sql match regex sql block rule: order_analysis_rule\n ```\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u521b\u5efa test_rule2\uff0c\u5c06\u6700\u5927\u626b\u63cf\u7684\u5206\u533a\u6570\u91cf\u9650\u5236\u572830\u4e2a\uff0c\u6700\u5927\u626b\u63cf\u57fa\u6570\u9650\u5236\u5728100\u4ebf\u884c\uff0c\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE SQL_BLOCK_RULE test_rule2 \nPROPERTIES\n(\n   "partition_num" = "30",\n   "cardinality" = "10000000000",\n   "global" = "false",\n   "enable" = "true"\n);\nQuery OK, 0 rows affected (0.01 sec)\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u521b\u5efa\u5305\u542b\u7279\u6b8a\u5b57\u7b26\u7684 SQL BLOCK RULE\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE SQL_BLOCK_RULE test_rule3\nPROPERTIES\n( \n"sql" = "select count\\\\(1\\\\) from db1.tbl1"\n);\nCREATE SQL_BLOCK_RULE test_rule4\nPROPERTIES\n( \n"sql" = "select \\\\* from db1.tbl1"\n);\n')))),(0,a.kt)("h3",{id:"keywords"},"Keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"CREATE, SQL_BLCOK_RULE\n")),(0,a.kt)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);