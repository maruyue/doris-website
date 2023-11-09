"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[98474],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),s=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(m.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,y=c["".concat(m,".").concat(d)]||c[d]||p[d]||i;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68109:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={title:"\u5ba1\u8ba1\u65e5\u5fd7\u63d2\u4ef6",language:"zh-CN"},o=void 0,l={unversionedId:"ecosystem/audit-plugin",id:"version-2.0/ecosystem/audit-plugin",title:"\u5ba1\u8ba1\u65e5\u5fd7\u63d2\u4ef6",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/ecosystem/audit-plugin.md",sourceDirName:"ecosystem",slug:"/ecosystem/audit-plugin",permalink:"/zh-CN/docs/ecosystem/audit-plugin",draft:!1,tags:[],version:"2.0",frontMatter:{title:"\u5ba1\u8ba1\u65e5\u5fd7\u63d2\u4ef6",language:"zh-CN"},sidebar:"docs",previous:{title:"\u63d2\u4ef6\u5f00\u53d1\u624b\u518c",permalink:"/zh-CN/docs/ecosystem/plugin-development-manual"},next:{title:"CloudCanal \u6570\u636e\u5bfc\u5165",permalink:"/zh-CN/docs/ecosystem/cloudcanal"}},m={},s=[{value:"\u7f16\u8bd1\u3001\u914d\u7f6e\u548c\u90e8\u7f72",id:"\u7f16\u8bd1\u914d\u7f6e\u548c\u90e8\u7f72",level:2},{value:"FE \u914d\u7f6e",id:"fe-\u914d\u7f6e",level:3},{value:"AuditLoader \u914d\u7f6e",id:"auditloader-\u914d\u7f6e",level:3},{value:"\u521b\u5efa\u5e93\u8868",id:"\u521b\u5efa\u5e93\u8868",level:3},{value:"\u90e8\u7f72",id:"\u90e8\u7f72",level:3},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3}],u={toc:s},c="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5ba1\u8ba1\u65e5\u5fd7\u63d2\u4ef6"},"\u5ba1\u8ba1\u65e5\u5fd7\u63d2\u4ef6"),(0,a.kt)("p",null,"Doris \u7684\u5ba1\u8ba1\u65e5\u5fd7\u63d2\u4ef6\u662f\u5728 FE \u7684\u63d2\u4ef6\u6846\u67b6\u57fa\u7840\u4e0a\u5f00\u53d1\u7684\u3002\u662f\u4e00\u4e2a\u53ef\u9009\u63d2\u4ef6\u3002\u7528\u6237\u53ef\u4ee5\u5728\u8fd0\u884c\u65f6\u5b89\u88c5\u6216\u5378\u8f7d\u8fd9\u4e2a\u63d2\u4ef6\u3002"),(0,a.kt)("p",null,"\u8be5\u63d2\u4ef6\u53ef\u4ee5\u5c06 FE \u7684\u5ba1\u8ba1\u65e5\u5fd7\u5b9a\u671f\u7684\u5bfc\u5165\u5230\u6307\u5b9a Doris \u96c6\u7fa4\u4e2d\uff0c\u4ee5\u65b9\u4fbf\u7528\u6237\u901a\u8fc7 SQL \u5bf9\u5ba1\u8ba1\u65e5\u5fd7\u8fdb\u884c\u67e5\u770b\u548c\u5206\u6790\u3002"),(0,a.kt)("h2",{id:"\u7f16\u8bd1\u914d\u7f6e\u548c\u90e8\u7f72"},"\u7f16\u8bd1\u3001\u914d\u7f6e\u548c\u90e8\u7f72"),(0,a.kt)("h3",{id:"fe-\u914d\u7f6e"},"FE \u914d\u7f6e"),(0,a.kt)("p",null,"\u5ba1\u8ba1\u65e5\u5fd7\u63d2\u4ef6\u6846\u67b6\u5728 Doris \u4e2d\u662f\u9ed8\u8ba4\u5f00\u542f\u7684\u7684\uff0c\u7531 FE \u7684\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"plugin_enable")," \u63a7\u5236"),(0,a.kt)("h3",{id:"auditloader-\u914d\u7f6e"},"AuditLoader \u914d\u7f6e"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4e0b\u8f7d Audit Loader \u63d2\u4ef6"),(0,a.kt)("p",{parentName:"li"},"Audit Loader \u63d2\u4ef6\u5728 Doris \u7684\u53d1\u884c\u7248\u4e2d\u9ed8\u8ba4\u63d0\u4f9b\uff0c\u901a\u8fc7 ",(0,a.kt)("a",{parentName:"p",href:"https://doris.apache.org/zh-CN/download"},"DOWNLOAD")," \u4e0b\u8f7d Doris \u5b89\u88c5\u5305\u89e3\u538b\u5e76\u8fdb\u5165\u76ee\u5f55\u540e\u5373\u53ef\u5728 extensions/audit_loader \u5b50\u76ee\u5f55\u4e0b\u627e\u5230 auditloader.zip \u6587\u4ef6\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u89e3\u538b\u5b89\u88c5\u5305"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"unzip auditloader.zip\n")),(0,a.kt)("p",{parentName:"li"},"\u89e3\u538b\u751f\u6210\u4ee5\u4e0b\u6587\u4ef6\uff1a"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"auditloader.jar\uff1a\u63d2\u4ef6\u4ee3\u7801\u5305\u3002"),(0,a.kt)("li",{parentName:"ul"},"plugin.properties\uff1a\u63d2\u4ef6\u5c5e\u6027\u6587\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},"plugin.conf\uff1a\u63d2\u4ef6\u914d\u7f6e\u6587\u4ef6\u3002")))),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u5c06\u8fd9\u4e2a\u6587\u4ef6\u653e\u7f6e\u5728\u4e00\u4e2a http \u670d\u52a1\u5668\u4e0a\uff0c\u6216\u8005\u62f7\u8d1d",(0,a.kt)("inlineCode",{parentName:"p"},"auditloader.zip"),"(\u6216\u8005\u89e3\u538b",(0,a.kt)("inlineCode",{parentName:"p"},"auditloader.zip"),")\u5230\u6240\u6709 FE \u7684\u6307\u5b9a\u76ee\u5f55\u4e0b\u3002\u8fd9\u91cc\u6211\u4eec\u4f7f\u7528\u540e\u8005\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u8be5\u63d2\u4ef6\u7684\u5b89\u88c5\u53ef\u4ee5\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/sql-manual/sql-reference/Database-Administration-Statements/INSTALL-PLUGIN"},"INSTALL"),(0,a.kt)("br",{parentName:"p"}),"\n","\u6267\u884cinstall\u540e\u4f1a\u81ea\u52a8\u751f\u6210AuditLoader\u76ee\u5f55"),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4fee\u6539 plugin.conf "),(0,a.kt)("p",{parentName:"li"},"\u4ee5\u4e0b\u914d\u7f6e\u53ef\u4f9b\u4fee\u6539\uff1a"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"frontend_host_port\uff1aFE \u8282\u70b9 IP \u5730\u5740\u548c HTTP \u7aef\u53e3\uff0c\u683c\u5f0f\u4e3a <fe_ip>:<fe_http_port>\u3002 \u9ed8\u8ba4\u503c\u4e3a 127.0.0.1:8030\u3002"),(0,a.kt)("li",{parentName:"ul"},"database\uff1a\u5ba1\u8ba1\u65e5\u5fd7\u5e93\u540d\u3002"),(0,a.kt)("li",{parentName:"ul"},"audit_log_table\uff1a\u5ba1\u8ba1\u65e5\u5fd7\u8868\u540d\u3002"),(0,a.kt)("li",{parentName:"ul"},"slow_log_table\uff1a\u6162\u67e5\u8be2\u65e5\u5fd7\u8868\u540d\u3002"),(0,a.kt)("li",{parentName:"ul"},"enable_slow_log\uff1a\u662f\u5426\u5f00\u542f\u6162\u67e5\u8be2\u65e5\u5fd7\u5bfc\u5165\u529f\u80fd\u3002\u9ed8\u8ba4\u503c\u4e3a false\u3002"),(0,a.kt)("li",{parentName:"ul"},"user\uff1a\u96c6\u7fa4\u7528\u6237\u540d\u3002\u8be5\u7528\u6237\u5fc5\u987b\u5177\u6709\u5bf9\u5e94\u8868\u7684 INSERT \u6743\u9650\u3002"),(0,a.kt)("li",{parentName:"ul"},"password\uff1a\u96c6\u7fa4\u7528\u6237\u5bc6\u7801\u3002"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u91cd\u65b0\u6253\u5305 Audit Loader \u63d2\u4ef6"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"zip -r -q -m auditloader.zip auditloader.jar plugin.properties plugin.conf\n")))),(0,a.kt)("h3",{id:"\u521b\u5efa\u5e93\u8868"},"\u521b\u5efa\u5e93\u8868"),(0,a.kt)("p",null,"\u5728 Doris \u4e2d\uff0c\u9700\u8981\u521b\u5efa\u5ba1\u8ba1\u65e5\u5fd7\u7684\u5e93\u548c\u8868\uff0c\u8868\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,a.kt)("p",null,"\u82e5\u9700\u5f00\u542f\u6162\u67e5\u8be2\u65e5\u5fd7\u5bfc\u5165\u529f\u80fd\uff0c\u8fd8\u9700\u8981\u989d\u5916\u521b\u5efa\u6162\u8868 ",(0,a.kt)("inlineCode",{parentName:"p"},"doris_slow_log_tbl__"),"\uff0c\u5176\u8868\u7ed3\u6784\u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"doris_audit_log_tbl__")," \u4e00\u81f4\u3002"),(0,a.kt)("p",null,"\u5176\u4e2d ",(0,a.kt)("inlineCode",{parentName:"p"},"dynamic_partition")," \u5c5e\u6027\u6839\u636e\u81ea\u5df1\u7684\u9700\u8981\uff0c\u9009\u62e9\u5ba1\u8ba1\u65e5\u5fd7\u4fdd\u7559\u7684\u5929\u6570\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'create database doris_audit_db__;\n\ncreate table doris_audit_db__.doris_audit_log_tbl__\n(\n    query_id varchar(48) comment "Unique query id",\n    `time` datetime not null comment "Query start time",\n    client_ip varchar(32) comment "Client IP",\n    user varchar(64) comment "User name",\n    catalog varchar(128) comment "Catalog of this query",\n    db varchar(96) comment "Database of this query",\n    state varchar(8) comment "Query result state. EOF, ERR, OK",\n    error_code int comment "Error code of failing query.",\n    error_message string comment "Error message of failing query.",\n    query_time bigint comment "Query execution time in millisecond",\n    scan_bytes bigint comment "Total scan bytes of this query",\n    scan_rows bigint comment "Total scan rows of this query",\n    return_rows bigint comment "Returned rows of this query",\n    stmt_id int comment "An incremental id of statement",\n    is_query tinyint comment "Is this statemt a query. 1 or 0",\n    frontend_ip varchar(32) comment "Frontend ip of executing this statement",\n    cpu_time_ms bigint comment "Total scan cpu time in millisecond of this query",\n    sql_hash varchar(48) comment "Hash value for this query",\n    sql_digest varchar(48) comment "Sql digest for this query",\n    peak_memory_bytes bigint comment "Peak memory bytes used on all backends of this query",\n    stmt string comment "The original statement, trimed if longer than 2G"\n) engine=OLAP\nduplicate key(query_id, `time`, client_ip)\npartition by range(`time`) ()\ndistributed by hash(query_id) buckets 1\nproperties(\n    "dynamic_partition.time_unit" = "DAY",\n    "dynamic_partition.start" = "-30",\n    "dynamic_partition.end" = "3",\n    "dynamic_partition.prefix" = "p",\n    "dynamic_partition.buckets" = "1",\n    "dynamic_partition.enable" = "true",\n    "replication_num" = "3"\n);\n\ncreate table doris_audit_db__.doris_slow_log_tbl__\n(\n    query_id varchar(48) comment "Unique query id",\n    `time` datetime not null comment "Query start time",\n    client_ip varchar(32) comment "Client IP",\n    user varchar(64) comment "User name",\n    catalog varchar(128) comment "Catalog of this query",\n    db varchar(96) comment "Database of this query",\n    state varchar(8) comment "Query result state. EOF, ERR, OK",\n    error_code int comment "Error code of failing query.",\n    error_message string comment "Error message of failing query.",\n    query_time bigint comment "Query execution time in millisecond",\n    scan_bytes bigint comment "Total scan bytes of this query",\n    scan_rows bigint comment "Total scan rows of this query",\n    return_rows bigint comment "Returned rows of this query",\n    stmt_id int comment "An incremental id of statement",\n    is_query tinyint comment "Is this statemt a query. 1 or 0",\n    frontend_ip varchar(32) comment "Frontend ip of executing this statement",\n    cpu_time_ms bigint comment "Total scan cpu time in millisecond of this query",\n    sql_hash varchar(48) comment "Hash value for this query",\n    sql_digest varchar(48) comment "Sql digest for this query",\n    peak_memory_bytes bigint comment "Peak memory bytes used on all backends of this query",\n    stmt string comment "The original statement, trimed if longer than 2G "\n) engine=OLAP\nduplicate key(query_id, `time`, client_ip)\npartition by range(`time`) ()\ndistributed by hash(query_id) buckets 1\nproperties(\n    "dynamic_partition.time_unit" = "DAY",\n    "dynamic_partition.start" = "-30",\n    "dynamic_partition.end" = "3",\n    "dynamic_partition.prefix" = "p",\n    "dynamic_partition.buckets" = "1",\n    "dynamic_partition.enable" = "true",\n    "replication_num" = "3"\n);\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f")),(0,a.kt)("p",{parentName:"blockquote"},"\u4e0a\u9762\u8868\u7ed3\u6784\u4e2d\uff1astmt string \uff0c\u8fd9\u4e2a\u53ea\u80fd\u57280.15\u53ca\u4e4b\u540e\u7248\u672c\u4e2d\u4f7f\u7528\uff0c\u4e4b\u524d\u7248\u672c\uff0c\u5b57\u6bb5\u7c7b\u578b\u4f7f\u7528varchar")),(0,a.kt)("h3",{id:"\u90e8\u7f72"},"\u90e8\u7f72"),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u5c06 \u6253\u5305\u597d\u7684 auditloader.zip \u653e\u7f6e\u5728\u4e00\u4e2a http \u670d\u52a1\u5668\u4e0a\uff0c\u6216\u8005\u62f7\u8d1d",(0,a.kt)("inlineCode",{parentName:"p"},"auditloader.zip")," \u5230\u6240\u6709 FE \u7684\u76f8\u540c\u6307\u5b9a\u76ee\u5f55\u4e0b\u3002"),(0,a.kt)("h3",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,a.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0b\u8bed\u53e5\u5b89\u88c5 Audit Loader \u63d2\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'INSTALL PLUGIN FROM [source] [PROPERTIES ("key"="value", ...)]\n')),(0,a.kt)("p",null,"\u8be6\u7ec6\u547d\u4ee4\u53c2\u8003\uff1a",(0,a.kt)("a",{parentName:"p",href:"../sql-manual/sql-reference/Database-Administration-Statements/INSTALL-PLUGIN"},"INSTALL-PLUGIN.md")),(0,a.kt)("p",null,"\u5b89\u88c5\u6210\u529f\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"SHOW PLUGINS")," \u770b\u5230\u5df2\u7ecf\u5b89\u88c5\u7684\u63d2\u4ef6\uff0c\u5e76\u4e14\u72b6\u6001\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"INSTALLED"),"\u3002"),(0,a.kt)("p",null,"\u5b8c\u6210\u540e\uff0c\u63d2\u4ef6\u4f1a\u4e0d\u65ad\u7684\u4ee5\u6307\u5b9a\u7684\u65f6\u95f4\u95f4\u9694\u5c06\u5ba1\u8ba1\u65e5\u5fd7\u63d2\u5165\u5230\u8fd9\u4e2a\u8868\u4e2d\u3002"))}p.isMDXComponent=!0}}]);