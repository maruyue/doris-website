"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[72977],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||r;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},56074:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={title:"Auto-Synchronization of an Entire MySQL Database for Data Analysis",summary:"Flink-Doris-Connector 1.4.0 allows users to ingest a whole database (MySQL or Oracle) that contains thousands of tables into Apache Doris, in one step.",date:"2023-08-16",author:"Apache Doris",tags:["Tech Sharing"]},i=void 0,s={permalink:"/zh-CN/blog/FDC",source:"@site/blog/FDC.md",title:"Auto-Synchronization of an Entire MySQL Database for Data Analysis",description:"\x3c!--",date:"2023-08-16T00:00:00.000Z",formattedDate:"2023\u5e748\u670816\u65e5",tags:[{label:"Tech Sharing",permalink:"/zh-CN/blog/tags/tech-sharing"}],hasTruncateMarker:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"Auto-Synchronization of an Entire MySQL Database for Data Analysis",summary:"Flink-Doris-Connector 1.4.0 allows users to ingest a whole database (MySQL or Oracle) that contains thousands of tables into Apache Doris, in one step.",date:"2023-08-16",author:"Apache Doris",tags:["Tech Sharing"]},nextItem:{title:"For Entry-Level Data Engineers: How to Build a Simple but Solid Data Architecture",permalink:"/zh-CN/blog/Poly"}},l={authorsImageUrls:[void 0]},c=[{value:"Quick Start",id:"quick-start",level:2},{value:"How to Use It",id:"how-to-use-it",level:2},{value:"How It Performs",id:"how-it-performs",level:2},{value:"How It Benefits Data Engineers",id:"how-it-benefits-data-engineers",level:2},{value:"Other Features",id:"other-features",level:2},{value:"Example Usage",id:"example-usage",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Flink-Doris-Connector 1.4.0 allows users to ingest a whole database (",(0,o.kt)("strong",{parentName:"p"},"MySQL")," or ",(0,o.kt)("strong",{parentName:"p"},"Oracle"),") that contains thousands of tables into ",(0,o.kt)("a",{parentName:"p",href:"https://doris.apache.org/zh-CN/"},"Apache Doris"),", a real-time analytic database, ",(0,o.kt)("strong",{parentName:"p"},"in one step"),"."),(0,o.kt)("p",null,"With built-in Flink CDC, the Connector can directly synchronize the table schema and data from the upstream source to Apache Doris, which means users no longer have to write a DataStream program or pre-create mapping tables in Doris. "),(0,o.kt)("p",null,"When a Flink job starts, the Connector automatically checks for data equivalence between the source database and Apache Doris. If the data source contains tables which do not exist in Doris, the Connector will automatically create those same tables in Doris, and utilizes the side outputs of Flink to facilitate the ingestion of multiple tables at once; if there is a schema change in the source, it will automatically obtain the DDL statement and make the same schema change in Doris. "),(0,o.kt)("h2",{id:"quick-start"},"Quick Start"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"For MySQL"),":"),(0,o.kt)("p",null,"Download JAR file: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/doris-flink-connector/releases/tag/1.4.0"},"https://github.com/apache/doris-flink-connector/releases/tag/1.4.0")),(0,o.kt)("p",null,"Maven: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-SQL"},"<dependency>\n  <groupId>org.apache.doris</groupId>\n  <artifactId>flink-doris-connector-1.15</artifactId>\n  \x3c!--artifactId>flink-doris-connector-1.16</artifactId--\x3e\n  \x3c!--artifactId>flink-doris-connector-1.17</artifactId--\x3e\n  <version>1.4.0</version>\n</dependency>\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"For Oracle"),":"),(0,o.kt)("p",null,"Download JAR file: ",(0,o.kt)("a",{parentName:"p",href:"http://justtmp-bj-1308700295.cos.ap-beijing.myqcloud.com/oracle/flink-doris-connector-1.15-1.5.0-SNAPSHOT.jar"},"Flink 1.15"),", ",(0,o.kt)("a",{parentName:"p",href:"http://justtmp-bj-1308700295.cos.ap-beijing.myqcloud.com/oracle/flink-doris-connector-1.16-1.5.0-SNAPSHOT.jar"},"Flink 1.16"),", ",(0,o.kt)("a",{parentName:"p",href:"http://justtmp-bj-1308700295.cos.ap-beijing.myqcloud.com/oracle/flink-doris-connector-1.17-1.5.0-SNAPSHOT.jar"},"Flink 1.17")),(0,o.kt)("h2",{id:"how-to-use-it"},"How to Use It"),(0,o.kt)("p",null,"For example, to ingest a whole MySQL database ",(0,o.kt)("inlineCode",{parentName:"p"},"mysql_db")," into Doris (the MySQL table names start with ",(0,o.kt)("inlineCode",{parentName:"p"},"tbl")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"test"),"), simply execute the following command (no need to create the tables in Doris in advance):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Shell"},'<FLINK_HOME>/bin/flink run \\\n    -Dexecution.checkpointing.interval=10s \\\n    -Dparallelism.default=1 \\\n    -c org.apache.doris.flink.tools.cdc.CdcTools \\\n    lib/flink-doris-connector-1.16-1.4.0.jar \\\n    mysql-sync-database \\\n    --database test_db \\\n    --mysql-conf hostname=127.0.0.1 \\\n    --mysql-conf username=root \\\n    --mysql-conf password=123456 \\\n    --mysql-conf database-name=mysql_db \\\n    --including-tables "tbl|test.*" \\\n    --sink-conf fenodes=127.0.0.1:8030 \\\n    --sink-conf username=root \\\n    --sink-conf password=123456 \\\n    --sink-conf jdbc-url=jdbc:mysql://127.0.0.1:9030 \\\n    --sink-conf sink.label-prefix=label1 \\\n    --table-conf replication_num=1 \n')),(0,o.kt)("p",null,"To ingest an Oracle database: please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/doris-flink-connector/pull/156"},"example code"),"."),(0,o.kt)("h2",{id:"how-it-performs"},"How It Performs"),(0,o.kt)("p",null,"When it comes to synchronizing a whole database (containing hundreds or even thousands of tables, active or inactive), most users want it to be done within seconds. So we tested the Connector to see if it came up to scratch:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"1000 MySQL tables, each having 100 fields. All tables were active (which meant they were continuously updated and each data writing involved over a hundred rows)"),(0,o.kt)("li",{parentName:"ul"},"Flink job checkpoint: 10s")),(0,o.kt)("p",null,"Under pressure test, the system showed high stability, with key metrics as follows:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(51284).Z,width:"1280",height:"243"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(85285).Z,width:"1280",height:"487"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(16024).Z,width:"1280",height:"306"})),(0,o.kt)("p",null,"According to feedback from early adopters, the Connector has also delivered high performance and system stability in 10,000-table database synchronization in their production environment. This proves that the combination of Apache Doris and Flink CDC is capable of large-scale data synchronization with high efficiency and reliability."),(0,o.kt)("h2",{id:"how-it-benefits-data-engineers"},"How It Benefits Data Engineers"),(0,o.kt)("p",null,"Engineers no longer have to worry about table creation or table schema maintenance, saving them days of tedious and error-prone work. Previously in Flink CDC, you need to create a Flink job for each table and build a log parsing link at the source end, but now with whole-database ingestion, resouce consumption in the source database is largely reduced. It is also a unified solution for incremental update and full update."),(0,o.kt)("h2",{id:"other-features"},"Other Features"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1. Joining dimension table and fact table")),(0,o.kt)("p",null,"The common practice is to put dimension tables in Doris and run join queries via the real-time stream of Flink. Based on the ",(0,o.kt)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/docs/dev/datastream/operators/asyncio/"},"Async I/O of Flink"),", Flink-Doris-Connector 1.4.0 implements asynchronous Lookup Join, so the Flink real-time stream won't be blocked due to queries. Also, the Connector allows you to combine mulitple queries into one big query, and send it to Doris at once for processing. This improves the efficiency and throughput of such join queries."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2. Thrift")," ",(0,o.kt)("strong",{parentName:"p"},"SDK")),(0,o.kt)("p",null,"We introduced Thrift-Service SDK into the Connector so users no longer have to use Thrift plug-ins or configure a Thrift environment in compilation. This makes the compilation process much simpler."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3. On-Demand Stream Load")),(0,o.kt)("p",null,"During data synchronization, when there is no new data ingestion, no Stream Load requests will be issued. This avoids unnecessary consumption of cluster resources."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4. Polling of Backend Nodes")),(0,o.kt)("p",null,"For data ingestion, Doris calls a frontend node to obtain a list of the backend nodes, and randomly chooses one to launch an ingestion request. That backend node will be the Coordinator. Flink-Doris-Connector 1.4.0 allows users to enable the polling mechanism, which is to have a different backend node to be the Coordinator at each Flink checkpoint to avoid too much pressure on a single backend node for a long time."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"5. Support for More Data Types")),(0,o.kt)("p",null,"In addition to the common data types, Flink-Doris-Connector 1.4.0 supports DecimalV3/DateV2/DateTimev2/Array/JSON in Doris."),(0,o.kt)("h2",{id:"example-usage"},"Example Usage"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Read from Apache Doris:")," "),(0,o.kt)("p",null,"You can read data from Doris via DataStream or FlinkSQL (bounded stream). Predicate pushdown is supported."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Java"},"CREATE TABLE flink_doris_source (\n    name STRING,\n    age INT,\n    score DECIMAL(5,2)\n    ) \n    WITH (\n      'connector' = 'doris',\n      'fenodes' = '127.0.0.1:8030',\n      'table.identifier' = 'database.table',\n      'username' = 'root',\n      'password' = 'password',\n      'doris.filter.query' = 'age=18'\n);\n\nSELECT * FROM flink_doris_source;\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Join dimension table and fact table"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Java"},"CREATE TABLE fact_table (\n  `id` BIGINT,\n  `name` STRING,\n  `city` STRING,\n  `process_time` as proctime()\n) WITH (\n  'connector' = 'kafka',\n  ...\n);\n\ncreate table dim_city(\n  `city` STRING,\n  `level` INT ,\n  `province` STRING,\n  `country` STRING\n) WITH (\n  'connector' = 'doris',\n  'fenodes' = '127.0.0.1:8030',\n  'jdbc-url' = 'jdbc:mysql://127.0.0.1:9030',\n  'lookup.jdbc.async' = 'true',\n  'table.identifier' = 'dim.dim_city',\n  'username' = 'root',\n  'password' = ''\n);\n\nSELECT a.id, a.name, a.city, c.province, c.country,c.level \nFROM fact_table a\nLEFT JOIN dim_city FOR SYSTEM_TIME AS OF a.process_time AS c\nON a.city = c.city\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Write to Apache Doris"),": "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Java"},"CREATE TABLE doris_sink (\n    name STRING,\n    age INT,\n    score DECIMAL(5,2)\n    ) \n    WITH (\n      'connector' = 'doris',\n      'fenodes' = '127.0.0.1:8030',\n      'table.identifier' = 'database.table',\n      'username' = 'root',\n      'password' = '',\n      'sink.label-prefix' = 'doris_label',\n      //json write in\n      'sink.properties.format' = 'json',\n      'sink.properties.read_json_by_line' = 'true'\n);\n")),(0,o.kt)("p",null,"If you've got any questions, find Apache Doris developers on ",(0,o.kt)("a",{parentName:"p",href:"https://join.slack.com/t/apachedoriscommunity/shared_invite/zt-1t3wfymur-0soNPATWQ~gbU8xutFOLog"},"Slack"),"."))}u.isMDXComponent=!0},51284:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/FDC_1-ce2b3c35d3126c743a9b9df1105dd1ce.png"},85285:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/FDC_2-18b4e1b3346d90e6430b992d74e9a64f.png"},16024:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/FDC_3-5e973914e448c11df5e3e408823f2ded.png"}}]);