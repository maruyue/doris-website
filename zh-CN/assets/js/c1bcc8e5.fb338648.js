"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[86185],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),h=i,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||n;return a?r.createElement(m,o(o({ref:t},d),{},{components:a})):r.createElement(m,o({ref:t},d))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<n;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},93734:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var r=a(87462),i=(a(67294),a(3905));const n={title:"The financial sector's choice: fast, secure, and highly available real-time data warehousing based on Apache Doris",summary:"A whole-journey guide for financial users looking for fast data processing performance, data security, and high service availability.",date:"2024-01-08",author:"Apache Doris",tags:["Best Practice"],picked:"true",order:"2",image:"/images/apache-doris-a-fast-secure-and-highly-available-real-time-data-warehouse.png"},o=void 0,s={permalink:"/zh-CN/blog/a-fast-secure-high-available-real-time-data-warehouse-based-on-apache-doris",source:"@site/blog/a-fast-secure-high-available-real-time-data-warehouse-based-on-apache-doris.md",title:"The financial sector's choice: fast, secure, and highly available real-time data warehousing based on Apache Doris",description:"\x3c!--",date:"2024-01-08T00:00:00.000Z",formattedDate:"2024\u5e741\u67088\u65e5",tags:[{label:"Best Practice",permalink:"/zh-CN/blog/tags/best-practice"}],hasTruncateMarker:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"The financial sector's choice: fast, secure, and highly available real-time data warehousing based on Apache Doris",summary:"A whole-journey guide for financial users looking for fast data processing performance, data security, and high service availability.",date:"2024-01-08",author:"Apache Doris",tags:["Best Practice"],picked:"true",order:"2",image:"/images/apache-doris-a-fast-secure-and-highly-available-real-time-data-warehouse.png"},prevItem:{title:"Apache Doris 2.0.4 just released",permalink:"/zh-CN/blog/release-note-2.0.4"},nextItem:{title:"Apache Doris speeds up data reporting, tagging, and data lake analytics",permalink:"/zh-CN/blog/apache-doris-speeds-up-data-reporting-tagging-and-data-lake-analytics"}},l={authorsImageUrls:[void 0]},c=[{value:"Building a real-time data warehouse with Apache Doris",id:"building-a-real-time-data-warehouse-with-apache-doris",level:2},{value:"Choice of data models",id:"choice-of-data-models",level:3},{value:"Partitioning and bucketing strategies",id:"partitioning-and-bucketing-strategies",level:3},{value:"Multi-source data migration",id:"multi-source-data-migration",level:3},{value:"Full data ingestion and incremental data ingestion",id:"full-data-ingestion-and-incremental-data-ingestion",level:3},{value:"Offline data processing",id:"offline-data-processing",level:3},{value:"Enterprise features for financial players",id:"enterprise-features-for-financial-players",level:2},{value:"Multi-tenant resource isolation",id:"multi-tenant-resource-isolation",level:3},{value:"Cluster stability guarantee",id:"cluster-stability-guarantee",level:3},{value:"Cross-cluster replication",id:"cross-cluster-replication",level:3},{value:"Conclusion",id:"conclusion",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This is a whole-journey guide for Apache Doris users, especially those from the financial sector which requires a high level of data security and availability. If you don't know how to build a real-time data pipeline and make the most of the ",(0,i.kt)("a",{parentName:"p",href:"https://doris.apache.org/"},"Apache Doris")," functionalities, start with this post and you will be loaded with inspiration after reading."),(0,i.kt)("p",null,"This is the best practice of a non-banking payment service provider that serves over 25 million retailers and processes data from 40 million end devices. Data sources include MySQL, Oracle, and MongoDB. They were using Apache Hive as an offline data warehouse but feeling the need to add a real-time data processing pipeline. ",(0,i.kt)("strong",{parentName:"p"},"After introducing Apache Doris, they increase their data ingestion speed by 2~5 times, ETL performance by 3~12 times, and query execution speed by 10~15 times.")),(0,i.kt)("p",null,"In this post, you will learn how to integrate Apache Doris into your data architecture, including how to arrange data inside Doris, how to ingest data into it, and how to enable efficient data updates. Plus, you will learn about the enterprise features that Apache Doris provides to guarantee data security, system stability, and service availability."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.selectdb.com/static/offline_vs_real_time_data_warehouse_6b3fd0d1bc.png",alt:"offline-vs-real-time-data-warehouse"})),(0,i.kt)("h2",{id:"building-a-real-time-data-warehouse-with-apache-doris"},"Building a real-time data warehouse with Apache Doris"),(0,i.kt)("h3",{id:"choice-of-data-models"},"Choice of data models"),(0,i.kt)("p",null,"Apache Doris arranges data with three data models. The main difference between these models lies in whether or how they aggregate data."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://doris.apache.org/docs/data-table/data-model#duplicate-model"},"Duplicate Key model")),": for detailed data queries. It supports ad-hoc queries of any dimension."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://doris.apache.org/docs/data-table/data-model#unique-model"},"Unique Key model")),": for use cases with data uniqueness constraints. It supports precise deduplication, multi-stream upserts, and partial column updates."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://doris.apache.org/docs/data-table/data-model#aggregate-model"},"Aggregate Key model")),": for data reporting. It accelerates data reporting by pre-aggregating data.")),(0,i.kt)("p",null,"The financial user adopts different data models in different data warehouse layers:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ODS - Duplicate Key model"),": As a payment service provider, the user receives a million settlement data every day. Since the settlement cycle can span a whole year, the relevant data needs to be kept intact for a year. Thus, the proper way is to put it in the Duplicate Key model, which does not perform any data aggregations. An exception is that some data is prone to constant changes, like order status from retailers. Such data should be put into the Unique Key model so that the newly updated record of the same retailer ID or order ID will always replace the old one."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"DWD & DWS - Unique Key model"),": Data in the DWD and DWS layers are further abstracted, but it is all put in the Unique Key model so that the settlement data can be automatically updated."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ADS - Aggregate Key model"),": Data is highly abstracted in this layer. It is pre-aggregated to mitigate the computation load of downstream analytics.")),(0,i.kt)("h3",{id:"partitioning-and-bucketing-strategies"},"Partitioning and bucketing strategies"),(0,i.kt)("p",null,'The idea of partitioning and bucketing is to "cut" data into smaller pieces to increase data processing speed. The key is to set an appropriate number of data partitions and buckets. Based on their use case, the user tailors the bucketing field and bucket number to each table. For example, they often need to query the dimensional data of different retailers from the retailer flat table, so they specify the retailer ID column as the bucketing field, and list the recommended bucket number for various data sizes.'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.selectdb.com/static/partitioning_and_bucketing_strategies_c91ad6a340.png",alt:"partitioning-and-bucketing-strategies"})),(0,i.kt)("h3",{id:"multi-source-data-migration"},"Multi-source data migration"),(0,i.kt)("p",null,"In the adoption of Apache Doris, the user had to migrate all local data from their branches into Doris, which was when they found out their branches were using ",(0,i.kt)("strong",{parentName:"p"},"different databases")," and had ",(0,i.kt)("strong",{parentName:"p"},"data files of very different formats"),", so the migration could be a mess."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.selectdb.com/static/multi_source_data_migration_2b4f54e005.png",alt:"multi-source-data-migration"})),(0,i.kt)("p",null,"Luckily, Apache Doris supports a rich collection of data integration methods for both real-time data streaming and offline data import."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Real-time data streaming"),": Apache Doris fetches MySQL Binlogs in real time. Part of them is written into Doris directly via Flink CDC, while the high-volume ones are synchronized into Kafka for peak shaving, and then written into Doris via the Flink-Doris-Connector."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Offline data import"),": This includes more diversified data sources and data formats. Historical data and incremental data from S3 and HDFS will be ingested into Doris via the ",(0,i.kt)("a",{parentName:"li",href:"https://doris.apache.org/docs/data-operate/import/import-way/broker-load-manual"},"Broker Load")," method, data from Hive or JDBC will be synchronized to Doris via the ",(0,i.kt)("a",{parentName:"li",href:"https://doris.apache.org/docs/data-operate/import/import-way/insert-into-manual"},"Insert Into")," method, and files will be loaded to Doris via the Flink-Doris-Connector and Flink FTP Connector. (FTP is how the user transfers files across systems internally, so they developed the Flink-FTP-Connector to support the complicated data formats and multiple newline characters in data.)")),(0,i.kt)("h3",{id:"full-data-ingestion-and-incremental-data-ingestion"},"Full data ingestion and incremental data ingestion"),(0,i.kt)("p",null,"To ensure business continuity and data accuracy, the user figures out the following ways to ingest full data and incremental data:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Full data ingestion"),": Create a temporary table of the target schema in Doris, ingest full data into the temporary table, and then use the ",(0,i.kt)("inlineCode",{parentName:"li"},"ALTER TABLE t1 REPLACE WITH TABLE t2")," statement for atomic replacement of the regular table with the temporary table. This method prevents interruptions to queries on the frontend.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-SQL"},"alter table ${DB_NAME}.${TBL_NAME} drop partition IF EXISTS p${P_DOWN_DATE};\nALTER TABLE ${DB_NAME}.${TBL_NAME} ADD PARTITION IF NOT EXISTS  p${P_DOWN_DATE} VALUES [('${P_DOWN_DATE}'), ('${P_UP_DATE}'));\n\nLOAD LABEL ${TBL_NAME}_${load_timestamp} ...\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Incremental data ingestion"),": Create a new data partition to accommodate incremental data.")),(0,i.kt)("h3",{id:"offline-data-processing"},"Offline data processing"),(0,i.kt)("p",null,"The user has moved their offline data processing workload to Apache Doris and thus ",(0,i.kt)("strong",{parentName:"p"},"increased execution speed by 5 times"),". "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.selectdb.com/static/offline_data_processing_82e20fc59a.png",alt:"offline-data-processing"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Before"),": The old Hive-based offline data warehouse used the TEZ execution engine to process 30 million new data records every day. With 2TB computation resources, the whole pipeline took 2.5 hours. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"After"),": Apache Doris finishes the same tasks within only 30 minutes and consumes only 1TB. Script execution takes only 10 seconds instead of 8 minutes.")),(0,i.kt)("h2",{id:"enterprise-features-for-financial-players"},"Enterprise features for financial players"),(0,i.kt)("h3",{id:"multi-tenant-resource-isolation"},"Multi-tenant resource isolation"),(0,i.kt)("p",null,"This is required because it often happens that the same piece of data is requested by multiple teams or business systems. These tasks can lead to resource preemption and thus performance decrease and system instability."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Resource limit for different workloads")),(0,i.kt)("p",null,"The user classifies their analytics workloads into four types and sets a resource limit for each of them. In particular, they have four different types of Doris accounts and set a limit on the CPU and memory resources for each type of account."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.selectdb.com/static/multi_tenant_resource_isolation_772a57a4f1.png",alt:"multi-tenant-resource-isolation"})),(0,i.kt)("p",null,"In this way, when one tenant requires excessive resources, it will only compromise its own efficiency but not affect other tenants."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Resource tag-based isolation")),(0,i.kt)("p",null,"For data security under the parent-subsidiary company hierarchy, the user has set isolated resource groups for the subsidiaries. Data of each subsidiary is stored in its own resource group with three replicas, while data of the parent company is stored with four replicas: three in the parent company resource group, and the other one in the subsidiary resource group. Thus, when an employee from a subsidiary requests data from the parent company, the query will only executed in the subsidiary resource group. Specifically, they take these steps:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.selectdb.com/static/resource_tag_based_isolation_442e20f09c.png",alt:" resource-tag-based-isolation"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Workload group")),(0,i.kt)("p",null,"The resource tag-based isolation plan ensures isolation on a physical level, but as Apache Doris developers, we want to further optimize resource utilization and pursue more fine-grained resource isolation. For these purposes, we released the ",(0,i.kt)("a",{parentName:"p",href:"https://doris.apache.org/docs/admin-manual/workload-group"},"Workload Group")," feature in ",(0,i.kt)("a",{parentName:"p",href:"https://doris.apache.org/blog/release-note-2.0.0"},"Apache Doris 2.0"),". "),(0,i.kt)("p",null,"The Workload Group mechanism relates queries to workload groups, which limit the share of CPU and memory resources of the backend nodes that a query can use. When cluster resources are in short supply, the biggest queries will stop execution. On the contrary, when there are plenty of available cluster resources and a workload group requires more resources than the limit, it will get assigned with the idle resources proportionately. "),(0,i.kt)("p",null,"The user is actively planning their transition to the Workload Group plan and utilizing the task prioritizing mechanism and query queue feature to organize the execution order."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Fine-grained user privilege management")),(0,i.kt)("p",null,"For regulation and compliance reasons, this payment service provider implements strict privilege control to make sure that everyone only has access to what they are supposed to access. This is how they do it:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"User privilege setting"),": System users of different subsidiaries or with different business needs are granted different data access privileges."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Privilege control over databases, tables, and rows"),": The ",(0,i.kt)("inlineCode",{parentName:"li"},"ROW POLICY")," mechanism of Apache Doris makes these operations easy."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Privilege control over columns"),": This is done by creating views.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.selectdb.com/static/fine_grained_user_privilege_management_f0cd060011.png",alt:"fine-grained-user-privilege-management.png"})),(0,i.kt)("h3",{id:"cluster-stability-guarantee"},"Cluster stability guarantee"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Circuit Breaking"),": From time to time, system users might input faulty SQL, causing excessive resource consumption. A circuit-breaking mechanism is in place for that. It will promptly stop these resource-intensive queries and prevent interruption to the system."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Data ingestion concurrency control"),": The user has a frequent need to integrate historical data into their data platform. That involves a lot of data modification tasks and might stress the cluster. To solve that, they turn on the ",(0,i.kt)("a",{parentName:"li",href:"https://doris.apache.org/docs/data-table/data-model#merge-on-write-of-unique-model"},"Merge-on-Write")," mode in the Unique Key model, enable ",(0,i.kt)("a",{parentName:"li",href:"https://doris.apache.org/docs/advanced/best-practice/compaction#vertical-compaction"},"Vertical Compaction")," and ",(0,i.kt)("a",{parentName:"li",href:"https://doris.apache.org/docs/advanced/best-practice/compaction#segment-compaction"},"Segment Compaction"),", and tune the data compaction parameters to control data ingestion concurrency."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Network traffic control"),": Considering their two clusters in different cities, they employ Quality of Service (QoS) strategies tailored to different scenarios for precise network isolation and ensuring network quality and stability."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Monitoring and alerting"),": The user has integrated Doris with their internal monitoring and alerting platform so any detected issues will be notified via their messaging software and email in real time.")),(0,i.kt)("h3",{id:"cross-cluster-replication"},"Cross-cluster replication"),(0,i.kt)("p",null,"Disaster recovery is crucial for the financial industry. The user leverages the Cross-Cluster Replication (CCR) capability and builds a dual-cluster solution. As the primary cluster undertakes all the queries, the major business data is also synchronized into the backup cluster and updated in real time, so that in the case of service downtime in the primary cluster, the backup cluster will take over swiftly and ensure business continuity."),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"We appreciate the user for their active ",(0,i.kt)("a",{parentName:"p",href:"https://join.slack.com/t/apachedoriscommunity/shared_invite/zt-1t3wfymur-0soNPATWQ~gbU8xutFOLog"},"communication")," with us along the way and are glad to see so many Apache Doris features fit in their needs. They are also planning on exploring federated query, compute-storage separation, and auto maintenance with Apache Doris. We look forward to more best practice and feedback from them."))}p.isMDXComponent=!0}}]);