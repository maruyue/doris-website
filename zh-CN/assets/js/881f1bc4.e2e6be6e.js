"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[71621],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},E="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),E=m(n),u=r,d=E["".concat(o,".").concat(u)]||E[u]||c[u]||l;return n?a.createElement(d,i(i({ref:t},s),{},{components:n})):a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[E]="string"==typeof e?e:r,i[1]=p;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},82663:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const l={title:"CREATE-JOB",language:"zh-CN"},i=void 0,p={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-JOB",id:"version-2.0/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-JOB",title:"CREATE-JOB",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-JOB.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Create",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-JOB",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-JOB",draft:!1,tags:[],version:"2.0",frontMatter:{title:"CREATE-JOB",language:"zh-CN"},sidebar:"docs",previous:{title:"CREATE-INDEX",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-INDEX"},next:{title:"CREATE-VIEW",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-VIEW"}},o={},m=[{value:"CREATE-JOB",id:"create-job",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],s={toc:m},E="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(E,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"create-job"},"CREATE-JOB"),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("p",null,"CREATE JOB"),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"Doris Job \u662f\u6839\u636e\u65e2\u5b9a\u8ba1\u5212\u8fd0\u884c\u7684\u4efb\u52a1\uff0c\u7528\u4e8e\u5728\u7279\u5b9a\u65f6\u95f4\u6216\u6307\u5b9a\u65f6\u95f4\u95f4\u9694\u89e6\u53d1\u9884\u5b9a\u4e49\u7684\u64cd\u4f5c\uff0c\u4ece\u800c\u5e2e\u52a9\u6211\u4eec\u81ea\u52a8\u6267\u884c\u4e00\u4e9b\u4efb\u52a1\u3002\u4ece\u529f\u80fd\u4e0a\u6765\u8bb2\uff0c\u5b83\u7c7b\u4f3c\u4e8e\u64cd\u4f5c\u7cfb\u7edf\u4e0a\u7684\n\u5b9a\u65f6\u4efb\u52a1\uff08\u5982\uff1aLinux \u4e2d\u7684 cron\u3001Windows \u4e2d\u7684\u8ba1\u5212\u4efb\u52a1\uff09\u3002\u4f46 Doris \u7684 Job \u8c03\u5ea6\u53ef\u4ee5\u7cbe\u786e\u5230\u79d2\u7ea7\u3002"),(0,r.kt)("p",null,"Job \u6709\u4e24\u79cd\u7c7b\u578b\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"ONE_TIME")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"BATCH"),"\u3002\u5176\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"ONE_TIME")," \u7c7b\u578b\u7684 Job \u4f1a\u5728\u6307\u5b9a\u7684\u65f6\u95f4\u70b9\u89e6\u53d1\uff0c\u5b83\u4e3b\u8981\u7528\u4e8e\u4e00\u6b21\u6027\u4efb\u52a1\uff0c\u800c ",(0,r.kt)("inlineCode",{parentName:"p"},"BATCH")," \u7c7b\u578b\u7684 Job \u4f1a\u5728\u6307\u5b9a\u7684\u65f6\u95f4\u95f4\u9694\u5185\u5faa\u73af\u89e6\u53d1\u3002\n\u4e3b\u8981\u7528\u4e8e\u5468\u671f\u6027\u6267\u884c\u7684\u4efb\u52a1\u3002"),(0,r.kt)("p",null,"\u76ee\u524d\u4ec5\u652f\u6301 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"ADMIN"))," \u6743\u9650\u6267\u884c\u6b64\u64cd\u4f5c\u3002"),(0,r.kt)("p",null," \u8bed\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE\n    JOB\n    job_name\n    ON SCHEDULE schedule\n    [COMMENT 'string']\n    DO sql_body;\n\nschedule: {\n   AT timestamp \n   | EVERY interval\n    [STARTS timestamp ]\n    [ENDS timestamp ]\n}\n\ninterval:\n    quantity { DAY | HOUR | MINUTE |\n              WEEK | SECOND }\n")),(0,r.kt)("p",null,"\u4e00\u6761\u6709\u6548\u7684 Job \u8bed\u53e5\u5fc5\u987b\u5305\u542b\u4ee5\u4e0b\u5185\u5bb9"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5173\u952e\u5b57 CREATE JOB \u52a0\u4e0a\u4f5c\u4e1a\u540d\u79f0\uff0c\u5b83\u5728\u4e00\u4e2a db \u4e2d\u6807\u8bc6\u552f\u4e00\u4e8b\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ul"},"ON SCHEDULE \u5b50\u53e5\uff0c\u5b83\u6307\u5b9a\u4e86 Job \u4f5c\u4e1a\u7684\u7c7b\u578b\u548c\u89e6\u53d1\u65f6\u95f4\u4ee5\u53ca\u9891\u7387\u3002"),(0,r.kt)("li",{parentName:"ul"},"DO \u5b50\u53e5\uff0c\u5b83\u6307\u5b9a\u4e86 Job \u4f5c\u4e1a\u89e6\u53d1\u65f6\u9700\u8981\u6267\u884c\u7684\u64cd\u4f5c\u3002")),(0,r.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u6700\u7b80\u5355\u7684\u4f8b\u5b50\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE JOB my_job ON SCHEDULE EVERY 1 MINUTE DO INSERT INTO db1.tbl1 SELECT * FROM db2.tbl2;\n")),(0,r.kt)("p",null,"\u8be5\u8bed\u53e5\u8868\u793a\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a my_job \u7684\u4f5c\u4e1a\uff0c\u6bcf\u5206\u949f\u6267\u884c\u4e00\u6b21\uff0c\u6267\u884c\u7684\u64cd\u4f5c\u662f\u5c06 db2.tbl2 \u4e2d\u7684\u6570\u636e\u5bfc\u5165\u5230 db1.tbl1 \u4e2d\u3002"),(0,r.kt)("p",null,"SCHEDULER \u8bed\u53e5\u7528\u4e8e\u5b9a\u4e49\u4f5c\u4e1a\u7684\u6267\u884c\u65f6\u95f4\uff0c\u9891\u7387\u4ee5\u53ca\u6301\u7eed\u65f6\u95f4\uff0c\u5b83\u53ef\u4ee5\u6307\u5b9a\u4e00\u6b21\u6027\u4f5c\u4e1a\u6216\u8005\u5468\u671f\u6027\u4f5c\u4e1a\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"AT timestamp"),(0,r.kt)("p",{parentName:"li"},"\u7528\u4e8e\u4e00\u6b21\u6027\u4e8b\u4ef6\uff0c\u5b83\u6307\u5b9a\u4e8b\u4ef6\u4ec5\u5728 \u7ed9\u5b9a\u7684\u65e5\u671f\u548c\u65f6\u95f4\u6267\u884c\u4e00\u6b21 timestamp\uff0c\u8be5\u65e5\u671f\u548c\u65f6\u95f4\u5fc5\u987b\u5305\u542b\u65e5\u671f\u548c\u65f6\u95f4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"EVERY"),(0,r.kt)("p",{parentName:"li"}," \u8868\u793a\u5b9a\u671f\u91cd\u590d\u64cd\u4f5c\uff0c\u5b83\u6307\u5b9a\u4e86\u4f5c\u4e1a\u7684\u6267\u884c\u9891\u7387\uff0c\u5173\u952e\u5b57\u540e\u9762\u8981\u6307\u5b9a\u4e00\u4e2a\u65f6\u95f4\u95f4\u9694\uff0c\u8be5\u65f6\u95f4\u95f4\u9694\u53ef\u4ee5\u662f\u5929\u3001\u5c0f\u65f6\u3001\u5206\u949f\u3001\u79d2\u3001\u5468\u3002"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"interval"),(0,r.kt)("p",{parentName:"li"},"\u7528\u4e8e\u6307\u5b9a\u4f5c\u4e1a\u6267\u884c\u9891\u7387\uff0c\u5b83\u53ef\u4ee5\u662f\u5929\u3001\u5c0f\u65f6\u3001\u5206\u949f\u3001\u79d2\u3001\u5468\u3002\u4f8b\u5982\uff1a",(0,r.kt)("inlineCode",{parentName:"p"}," 1 DAY")," \u8868\u793a\u6bcf\u5929\u6267\u884c\u4e00\u6b21\uff0c",(0,r.kt)("inlineCode",{parentName:"p"}," 1 HOUR")," \u8868\u793a\u6bcf\u5c0f\u65f6\u6267\u884c\u4e00\u6b21\uff0c",(0,r.kt)("inlineCode",{parentName:"p"}," 1 MINUTE")," \u8868\u793a\u6bcf\u5206\u949f\u6267\u884c\u4e00\u6b21\uff0c",(0,r.kt)("inlineCode",{parentName:"p"}," 1 WEEK")," \u8868\u793a\u6bcf\u5468\u6267\u884c\u4e00\u6b21\uff0c",(0,r.kt)("inlineCode",{parentName:"p"}," 1 SECOND")," \u8868\u793a\u6bcf\u79d2\u6267\u884c\u4e00\u6b21\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"STARTS timestamp"),(0,r.kt)("p",{parentName:"li"},"\u7528\u4e8e\u6307\u5b9a\u4f5c\u4e1a\u7684\u5f00\u59cb\u65f6\u95f4\uff0c\u5982\u679c\u6ca1\u6709\u6307\u5b9a\uff0c\u5219\u4ece\u5f53\u524d\u65f6\u95f4\u7684\u4e0b\u4e00\u4e2a\u65f6\u95f4\u70b9\u5f00\u59cb\u6267\u884c\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"ENDS timestamp"),(0,r.kt)("p",{parentName:"li"},"\u7528\u4e8e\u6307\u5b9a\u4f5c\u4e1a\u7684\u7ed3\u675f\u65f6\u95f4\uff0c\u5982\u679c\u6ca1\u6709\u6307\u5b9a\uff0c\u5219\u8868\u793a\u6c38\u4e45\u6267\u884c\u3002")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"DO"),(0,r.kt)("p",{parentName:"li"}," \u7528\u4e8e\u6307\u5b9a\u4f5c\u4e1a\u89e6\u53d1\u65f6\u9700\u8981\u6267\u884c\u7684\u64cd\u4f5c\uff0c\u76ee\u524d\u652f\u6301\u6240\u6709\u7684 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"INSERT,UPDATE"))," \u64cd\u4f5c\u3002\u540e\u7eed\u6211\u4eec\u4f1a\u652f\u6301\u66f4\u591a\u7684\u64cd\u4f5c\u3002"))),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u4e00\u6b21\u6027\u7684 Job\uff0c\u5b83\u4f1a\u5728 2020-01-01 00:00:00 \u65f6\u6267\u884c\u4e00\u6b21\uff0c\u6267\u884c\u7684\u64cd\u4f5c\u662f\u5c06 db2.tbl2 \u4e2d\u7684\u6570\u636e\u5bfc\u5165\u5230 db1.tbl1 \u4e2d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"\nCREATE JOB my_job ON SCHEDULE AT '2020-01-01 00:00:00' DO INSERT INTO db1.tbl1 SELECT * FROM db2.tbl2;\n\n")),(0,r.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u5468\u671f\u6027\u7684 Job\uff0c\u5b83\u4f1a\u5728 2020-01-01 00:00:00 \u65f6\u5f00\u59cb\u6267\u884c\uff0c\u6bcf\u5929\u6267\u884c\u4e00\u6b21\uff0c\u6267\u884c\u7684\u64cd\u4f5c\u662f\u5c06 db2.tbl2 \u4e2d\u7684\u6570\u636e\u5bfc\u5165\u5230 db1.tbl1 \u4e2d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE JOB my_job ON SCHEDULE EVERY 1 DAY STARTS '2020-01-01 00:00:00' DO INSERT INTO db1.tbl1 SELECT * FROM db2.tbl2 WHERE  create_time >=  days_add(now(),-1);\n")),(0,r.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u5468\u671f\u6027\u7684 Job\uff0c\u5b83\u4f1a\u5728 2020-01-01 00:00:00 \u65f6\u5f00\u59cb\u6267\u884c\uff0c\u6bcf\u5929\u6267\u884c\u4e00\u6b21\uff0c\u6267\u884c\u7684\u64cd\u4f5c\u662f\u5c06 db2.tbl2 \u4e2d\u7684\u6570\u636e\u5bfc\u5165\u5230 db1.tbl1 \u4e2d\uff0c\u8be5 Job \u5728 2020-01-01 00:10:00 \u65f6\u7ed3\u675f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE JOB my_job ON SCHEDULER EVERY 1 DAY STARTS '2020-01-01 00:00:00' ENDS '2020-01-01 00:10:00' DO INSERT INTO db1.tbl1 SELECT * FROM db2.tbl2 create_time >=  days_add(now(),-1);\n")),(0,r.kt)("h3",{id:"keywords"},"Keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"CREATE, JOB\n")),(0,r.kt)("h3",{id:"best-practice"},"Best Practice"))}c.isMDXComponent=!0}}]);