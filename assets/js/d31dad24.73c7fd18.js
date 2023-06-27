"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[20233],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,f=m["".concat(o,".").concat(d)]||m[d]||p[d]||l;return a?n.createElement(f,i(i({ref:t},u),{},{components:a})):n.createElement(f,i({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},17100:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const l={title:"CREATE-SQL-BLOCK-RULE",language:"en"},i=void 0,s={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-SQL-BLOCK-RULE",id:"sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-SQL-BLOCK-RULE",title:"CREATE-SQL-BLOCK-RULE",description:"\x3c!--",source:"@site/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-SQL-BLOCK-RULE.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Create",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-SQL-BLOCK-RULE",permalink:"/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-SQL-BLOCK-RULE",draft:!1,tags:[],version:"current",frontMatter:{title:"CREATE-SQL-BLOCK-RULE",language:"en"},sidebar:"docs",previous:{title:"CREATE-WORKLOAD-GORUP",permalink:"/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-WORKLOAD-GROUP"},next:{title:"ALTER-DATABASE",permalink:"/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-DATABASE"}},o={},c=[{value:"CREATE-SQL-BLOCK-RULE",id:"create-sql-block-rule",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],u={toc:c},m="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"create-sql-block-rule"},"CREATE-SQL-BLOCK-RULE"),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("p",null,"CREATE SQL BLOCK RULE"),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"This statement creates a SQL blocking rule. it can restrict any kind of sql statements(no matter DDL or DML statement)."),(0,r.kt)("p",null,"Supports configuring SQL blacklists by user:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Refuse to specify SQL by regular matching"),(0,r.kt)("li",{parentName:"ul"},"Check if a sql reaches one of these limits by setting partition_num, tablet_num, cardinality",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"partition_num, tablet_num, cardinality can be set together, once a query reaches one of these limits, the query will be intercepted")))),(0,r.kt)("p",null,"grammar:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE SQL_BLOCK_RULE rule_name\n[PROPERTIES ("key"="value", ...)];\n')),(0,r.kt)("p",null,"Parameter Description:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"sql: matching rule (based on regular matching, special characters need to be translated,for example",(0,r.kt)("inlineCode",{parentName:"li"},"select *"),"use",(0,r.kt)("inlineCode",{parentName:"li"},"select \\\\*"),'), optional, the default value is "NULL"'),(0,r.kt)("li",{parentName:"ul"},"sqlHash: sql hash value, used for exact matching, we will print this value in ",(0,r.kt)("inlineCode",{parentName:"li"},"fe.audit.log"),', optional, this parameter and sql can only be selected one, the default value is "NULL"'),(0,r.kt)("li",{parentName:"ul"},"partition_num: the maximum number of partitions a scan node will scan, the default value is 0L"),(0,r.kt)("li",{parentName:"ul"},"tablet_num: The maximum number of tablets that a scanning node will scan, the default value is 0L"),(0,r.kt)("li",{parentName:"ul"},"cardinality: the rough scan line number of a scan node, the default value is 0L"),(0,r.kt)("li",{parentName:"ul"},"global: Whether to take effect globally (all users), the default is false"),(0,r.kt)("li",{parentName:"ul"},"enable: whether to enable blocking rules, the default is true")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a block rule named test_rule"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE SQL_BLOCK_RULE test_rule\nPROPERTIES(\n"sql"="select \\\\* from order_analysis",\n"global"="false",\n"enable"="true"\n);\n')),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Notes:"),(0,r.kt)("p",{parentName:"blockquote"},"That the sql statement here does not end with a semicolon")),(0,r.kt)("p",{parentName:"li"},"When we execute the sql we just defined in the rule, an exception error will be returned. The example is as follows:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select * from order_analysis;\nERROR 1064 (HY000): errCode = 2, detailMessage = sql match regex sql block rule: order_analysis_rule\n")))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create test_rule2, limit the maximum number of scanned partitions to 30, and limit the maximum scan base to 10 billion rows. The example is as follows:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},' CREATE SQL_BLOCK_RULE test_rule2\n PROPERTIES (\n "partition_num" = "30",\n "cardinality" = "10000000000",\n "global" = "false",\n "enable" = "true"\n );\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create SQL BLOCK RULE with special chars"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE SQL_BLOCK_RULE test_rule3\nPROPERTIES\n( \n"sql" = "select count\\\\(1\\\\) from db1.tbl1"\n);\nCREATE SQL_BLOCK_RULE test_rule4\nPROPERTIES\n( \n"sql" = "select \\\\* from db1.tbl1"\n);\n')))),(0,r.kt)("h3",{id:"keywords"},"Keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"CREATE, SQL_BLCOK_RULE\n")),(0,r.kt)("h3",{id:"best-practice"},"Best Practice"))}p.isMDXComponent=!0}}]);