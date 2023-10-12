"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[65379],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return a?r.createElement(h,o(o({ref:t},c),{},{components:a})):r.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8886:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={title:"Zipping up the Lambda Architecture for 40% Faster Performance",summary:"Instead of pooling real-time and offline data after they are fully ready for queries, Douyu engineers use Apache Doris to share part of the pre-query computation burden.",date:"2023-05-05",author:"Tongyang Han",tags:["Best Practice"]},o=void 0,s={permalink:"/blog/Zipping-up-the-Lambda-Architecture-for-40-Percent-Faster-Performance",source:"@site/blog/Zipping-up-the-Lambda-Architecture-for-40-Percent-Faster-Performance.md",title:"Zipping up the Lambda Architecture for 40% Faster Performance",description:"\x3c!--",date:"2023-05-05T00:00:00.000Z",formattedDate:"May 5, 2023",tags:[{label:"Best Practice",permalink:"/blog/tags/best-practice"}],hasTruncateMarker:!1,authors:[{name:"Tongyang Han"}],frontMatter:{title:"Zipping up the Lambda Architecture for 40% Faster Performance",summary:"Instead of pooling real-time and offline data after they are fully ready for queries, Douyu engineers use Apache Doris to share part of the pre-query computation burden.",date:"2023-05-05",author:"Tongyang Han",tags:["Best Practice"]},prevItem:{title:"Building a Data Warehouse for Traditional Industry",permalink:"/blog/Building-a-Data-Warehouse-for-Traditional-Industry"},nextItem:{title:"Step-by-step Guide to Building a High-Performing Risk Data Mart",permalink:"/blog/Step-by-step-Guide-to-Building-a-High-Performing-Risk-Data-Mart"}},l={authorsImageUrls:[void 0]},p=[{value:"<strong>Zipping up Lambda Architecture</strong>",id:"zipping-up-lambda-architecture",level:2},{value:"<strong>Computational Pipeline of Wide-Time-Range Real-Time Tags</strong>",id:"computational-pipeline-of-wide-time-range-real-time-tags",level:2},{value:"Overwrite",id:"overwrite",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...i}=e;return(0,n.kt)(u,(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Author: Tongyang Han, Senior Data Engineer at Douyu"),(0,n.kt)("p",null,"The Lambda architecture has been common practice in big data processing. The concept is to separate stream (real time data) and batch (offline data) processing, and that's exactly what we did. These two types of data of ours were processed in two isolated tubes before they were pooled together and ready for searches and queries."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Lambda-architecture",src:a(9884).Z,width:"1276",height:"613"})),(0,n.kt)("p",null,"Then we run into a few problems:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Isolation of real-time and offline data warehouses"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"I know this is kind of the essence of Lambda architecture, but that means we could not reuse real-time data since it was not layered as offline data, so further customized development was required."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Complex Pipeline from Data Sources to Data Application"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Data had to go through multi-step processing before it reached our data users. As our architecture involved too many components, navigating and maintaining these tech stacks was a lot of work."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Lack of management of real-time data sources"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"In extreme cases, this worked like a data silo and we had no way to find out whether the ingested data was duplicated or reusable.")))),(0,n.kt)("p",null,'So we decided to "zip up" the Lambda architecture a little bit. By "zipping up", I mean to introduce an OLAP engine that is capable of processing, storing, and analyzing data, so real-time data and offline data converge a little earlier than they used to. It is not a revolution of Lambda, but a minor change in the choice of components, which made our real-time data processing 40% faster.'),(0,n.kt)("h2",{id:"zipping-up-lambda-architecture"},(0,n.kt)("strong",{parentName:"h2"},"Zipping up Lambda Architecture")),(0,n.kt)("p",null,"I am going to elaborate on how this is done using our data tagging process as an example."),(0,n.kt)("p",null,"Previously, our offline tags were produced by the data warehouse, put into a flat table, and then written in ",(0,n.kt)("strong",{parentName:"p"},"HBase"),", while real-time tags were produced by ",(0,n.kt)("strong",{parentName:"p"},"Flink"),", and put into ",(0,n.kt)("strong",{parentName:"p"},"HBase")," directly. Then ",(0,n.kt)("strong",{parentName:"p"},"Spark")," would work as the computing engine."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"HBase-Redis-Spark",src:a(7301).Z,width:"1280",height:"602"})),(0,n.kt)("p",null,"The problem with this stemmed from the low computation efficiency of ",(0,n.kt)("strong",{parentName:"p"},"Flink")," and ",(0,n.kt)("strong",{parentName:"p"},"Spark"),". "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Real-time tag production"),": When computing real-time tags that involve data within a long time range, Flink did not deliver stable performance and consumed more resources than expected. And when a task failed, it would take a really long time for checkpoint recovery."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Tag query"),": As a tag query engine, Spark could be slow.")),(0,n.kt)("p",null,"As a solution, we replaced ",(0,n.kt)("strong",{parentName:"p"},"HBase")," and ",(0,n.kt)("strong",{parentName:"p"},"Spark")," with ",(0,n.kt)("strong",{parentName:"p"},"Apache Doris"),", a real-time analytic database, and moved part of the computational logic of the foregoing wide-time-range real-time tags from ",(0,n.kt)("strong",{parentName:"p"},"Flink")," to ",(0,n.kt)("strong",{parentName:"p"},"Apache Doris"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Apache-Doris-Redis",src:a(19250).Z,width:"1280",height:"577"})),(0,n.kt)("p",null,"Instead of putting our flat tables in HBase, we place them in Apache Doris. These tables are divided into partitions based on time sensitivity. Offline tags will be updated daily while real-time tags will be updated in real time. We organize these tables in the Aggregate Model of Apache Doris, which allows partial update of data."),(0,n.kt)("p",null,"Instead of using Spark for queries, we parse the query rules into SQL for execution in Apache Doris. For pattern matching, we use Redis to cache the hot data from Apache Doris, so the system can respond to such queries much faster."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Real-time-and-offline-data-processing-in-Apache-Doris",src:a(84555).Z,width:"1280",height:"486"})),(0,n.kt)("h2",{id:"computational-pipeline-of-wide-time-range-real-time-tags"},(0,n.kt)("strong",{parentName:"h2"},"Computational Pipeline of Wide-Time-Range Real-Time Tags")),(0,n.kt)("p",null,"In some cases, the computation of wide-time-range real-time tags entails the aggregation of historical (offline) data with real-time data. The following figure shows our old computational pipeline for these tags. "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"offline-data-processing-link",src:a(88497).Z,width:"1280",height:"695"})),(0,n.kt)("p",null,"As you can see, it required multiple tasks to finish computing one real-time tag. Also, in complicated aggregations that involve a collection of aggregation operations, any improper resource allocation could lead to back pressure or waste of resources. This adds to the difficulty of task scheduling. The maintenance and stability guarantee of such a long pipeline could be an issue, too."),(0,n.kt)("p",null,"To improve on that, we decided to move such aggregation workload to Apache Doris."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"real-time-data-processing-link",src:a(12777).Z,width:"1280",height:"717"})),(0,n.kt)("p",null,"We have around 400 million customer tags in our system, and each customer is attached with over 300 tags. We divide customers into more than 10,000 groups, and we have to update 5000 of them on a daily basis. The above improvement has sped up the computation of our wide-time-range real-time queries by ",(0,n.kt)("strong",{parentName:"p"},"40%"),"."),(0,n.kt)("h2",{id:"overwrite"},"Overwrite"),(0,n.kt)("p",null,"To atomically replace data tables and partitions in Apache Doris, we customized the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris-spark-connector"},"Doris-Spark-Connector"),', and added an "Overwrite" mode to the Connector.'),(0,n.kt)("p",null,"When a Spark job is submitted, Apache Doris will call an interface to fetch information of the data tables and partitions."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If it is a non-partitioned table, we create a temporary table for the target table, ingest data into it, and then perform atomic replacement. If the data ingestion fails, we clear the temporary table;"),(0,n.kt)("li",{parentName:"ul"},"If it is a dynamic partitioned table, we create a temporary partition for the target partition, ingest data into it, and then perform atomic replacement. If the data ingestion fails, we clear the temporary partition;"),(0,n.kt)("li",{parentName:"ul"},"If it is a non-dynamic partitioned table, we need to extend the Doris-Spark-Connector parameter configuration first. Then we create a temporary partition and take steps as above.")),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"One prominent advantage of Lambda architecture is the stability it provides. However, in our practice, the processing of real-time data and offline data sometimes intertwines. For example, the computation of certain real-time tags requires historical (offline) data. Such interaction becomes a root cause of instability. Thus, instead of pooling real-time and offline data after they are fully ready for queries, we use an OLAP engine to share part of the pre-query computation burden and make things faster, simpler, and more cost-effective."))}d.isMDXComponent=!0},9884:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Douyu_1-cfd4fa7607d4bf15315307b50436d676.png"},7301:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Douyu_2-9cd11673aa896382f99ca957435efd84.png"},19250:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Douyu_3-684e3028f23e722b9892e0afdf472e4b.png"},84555:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Douyu_4-afd928fc30baf4ec825e80ab3638e984.png"},88497:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Douyu_5-104e16d5c9830069f513dc4c25665bcf.png"},12777:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Douyu_6-4243729274c033573acca9a2c621bf45.png"}}]);