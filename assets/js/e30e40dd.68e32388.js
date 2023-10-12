"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[78031],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=c(a),d=i,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||r;return a?n.createElement(m,o(o({ref:t},h),{},{components:a})):n.createElement(m,o({ref:t},h))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},12371:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(87462),i=(a(67294),a(3905));const r={title:"LLM-Powered OLAP: the Tencent Experience with Apache Doris",summary:"The exploration of a LLM+OLAP solution is a bumpy journey, but phew, it now works well for the Tencent case, and they're writing down every lesson learned to share with you.",date:"2023-08-29",author:"Jun Zhang & Lei Luo",tags:["Best Practice"]},o=void 0,s={permalink:"/blog/Tencent-LLM",source:"@site/blog/Tencent-LLM.md",title:"LLM-Powered OLAP: the Tencent Experience with Apache Doris",description:"\x3c!--",date:"2023-08-29T00:00:00.000Z",formattedDate:"August 29, 2023",tags:[{label:"Best Practice",permalink:"/blog/tags/best-practice"}],hasTruncateMarker:!1,authors:[{name:"Jun Zhang & Lei Luo"}],frontMatter:{title:"LLM-Powered OLAP: the Tencent Experience with Apache Doris",summary:"The exploration of a LLM+OLAP solution is a bumpy journey, but phew, it now works well for the Tencent case, and they're writing down every lesson learned to share with you.",date:"2023-08-29",author:"Jun Zhang & Lei Luo",tags:["Best Practice"]},prevItem:{title:"Apache Doris announced the official release of version 2.0.1",permalink:"/blog/release-note-2.0.1"},nextItem:{title:"Choosing an OLAP Engine for Financial Risk Management: What to Consider?",permalink:"/blog/Choosing-an-OLAP-Engine-for-Financial-Risk-Management-What-to-Consider"}},l={authorsImageUrls:[void 0]},c=[{value:"LLM + OLAP",id:"llm--olap",level:2},{value:"1. A semantic layer",id:"1-a-semantic-layer",level:3},{value:"2. LLM parsing rules",id:"2-llm-parsing-rules",level:3},{value:"3. Schema Mapper and external knowledge base",id:"3-schema-mapper-and-external-knowledge-base",level:3},{value:"4. Plugins",id:"4-plugins",level:3},{value:"The SuperSonic framework",id:"the-supersonic-framework",level:2},{value:"OLAP Architecture",id:"olap-architecture",level:2},{value:"Other Tricks",id:"other-tricks",level:2},{value:"What&#39;s Next",id:"whats-next",level:2}],h={toc:c},u="wrapper";function p(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Six months ago, I wrote about ",(0,i.kt)("a",{parentName:"p",href:"https://doris.apache.org/blog/Tencent-Data-Engineers-Why-We-Went-from-ClickHouse-to-Apache-Doris"},"why we replaced ClickHouse with Apache Doris as an OLAP engine")," for our data management system. Back then, we were struggling with the auto-generation of SQL statements. As days pass, we have made progresses big enough to be references for you (I think), so here I am again. "),(0,i.kt)("p",null,"We have adopted Large Language Models (LLM) to empower our Doris-based OLAP services."),(0,i.kt)("h2",{id:"llm--olap"},"LLM + OLAP"),(0,i.kt)("p",null,"Our incentive was to save our internal staff from the steep learning curve of SQL writing. Thus, we used LLM as an intermediate. It transforms natural language questions into SQL statements and sends the SQLs to the OLAP engine for execution."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"LLM-OLAP-solution",src:a(88902).Z,width:"1280",height:"253"})),(0,i.kt)("p",null,"Like every AI-related experience, we came across some friction:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'LLM does not understand data jargons, like "fields", "rows", "columns" and "tables". Instead, they can perfectly translate business terms like "corporate income" and "DAU", which are basically what the fields/rows/columns are about. That means it can work well only if the analysts use the exact right word to refer to the metric they need when typing their questions.'),(0,i.kt)("li",{parentName:"ol"},"The LLM we are using is slow in inference. It takes over 10 seconds to respond. As it charges fees by token, cost-effectiveness becomes a problem."),(0,i.kt)("li",{parentName:"ol"},"Although the LLM is trained on a large collection of public datasets, it is under-informed of niche knowledge. In our case, the LLM is super unfamiliar with indie songs, so even if the songs are included in our database, the LLM will not able to identify them properly. "),(0,i.kt)("li",{parentName:"ol"},"Sometimes our input questions require adequate and latest legal, political, financial, and regulatory information, which is hard to be included in a training dataset or knowledge base. We need to connect the LLM to wider info bases in order to perform more diversified tasks.")),(0,i.kt)("p",null,"We knock these problems down one by one."),(0,i.kt)("h3",{id:"1-a-semantic-layer"},"1. A semantic layer"),(0,i.kt)("p",null,"For problem No.1, we introduce a semantic layer between the LLM and the OLAP engine. This layer translates business terms into the corresponding data fields. It can identify data filtering conditions from the various natural language wordings, relate them to the metrics involved, and then generate SQL statements. "),(0,i.kt)("p",null,"Besides that, the semantic layer can optimize the computation logic. When analysts input a question that involves a complicated query, let's say, a multi-table join, the semantic layer can split that into multiple single-table queries to reduce semantic distortion."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"LLM-OLAP-semantic-layer",src:a(45978).Z,width:"1280",height:"289"})),(0,i.kt)("h3",{id:"2-llm-parsing-rules"},"2. LLM parsing rules"),(0,i.kt)("p",null,"To increase cost-effectiveness in using LLM, we evaluate the computation complexity of all scenarios, such as metric computation, detailed record retrieval, and user segmentation. Then, we create rules and dedicate the LLM-parsing step to only complicated tasks. That means for the simple computation tasks, it will skip the parsing. "),(0,i.kt)("p",null,'For example, when an analyst inputs "tell me the earnings of the major musical platforms", the LLM identifies that this question only entails several metrics or dimensions, so it will not further parse it but send it straight for SQL generation and execution. This can largely shorten query response time and reduce API expenses. '),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"LLM-OLAP-parsing-rules",src:a(35940).Z,width:"1280",height:"406"})),(0,i.kt)("h3",{id:"3-schema-mapper-and-external-knowledge-base"},"3. Schema Mapper and external knowledge base"),(0,i.kt)("p",null,"To empower the LLM with niche knowledge, we added a Schema Mapper upstream from the LLM. The Schema Mapper maps the input question to an external knowledge base, and then the LLM will do parsing."),(0,i.kt)("p",null,"We are constantly testing and optimizing the Schema Mapper. We categorize and rate content in the external knowledge base, and do various levels of mapping (full-text mapping and fuzzy mapping) to enable better semantic parsing."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"LLM-OLAP-schema-mapper",src:a(77079).Z,width:"2001",height:"647"})),(0,i.kt)("h3",{id:"4-plugins"},"4. Plugins"),(0,i.kt)("p",null,"We used plugins to connect the LLM to more fields of information, and we have different integration methods for different types of plugins:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Embedding local files"),': This is especially useful when we need to "teach" the LLM the latest regulatory policies, which are often text files. Firstly, the system vectorizes the local text file, executes semantic searches to find matching or similar terms in the local file, extracts the relevant contents and puts them into the LLM parsing window to generate output. '),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Third-party plugins"),": The marketplace is full of third-party plugins that are designed for all kinds of sectors. With them, the LLM is able to deal with wide-ranging topics. Each plugin has its own prompts and calling function. Once the input question hits a prompt, the relevant plugin will be called.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"LLM-OLAP-plugins",src:a(84854).Z,width:"2001",height:"645"})),(0,i.kt)("p",null,"After we are done with above four optimizations, the SuperSonic framework comes into being."),(0,i.kt)("h2",{id:"the-supersonic-framework"},"The SuperSonic framework"),(0,i.kt)("p",null,"Now let me walk you through this ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tencentmusic/supersonic"},"framework"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"LLM-OLAP-supersonic-framework",src:a(47158).Z,width:"1280",height:"1117"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An analyst inputs a question."),(0,i.kt)("li",{parentName:"ul"},"The Schema Mapper maps the question to an external knowledge base."),(0,i.kt)("li",{parentName:"ul"},"If there are matching fields in the external knowledge base, the question will not be parsed by the LLM. Instead, a metric computation formula will trigger the OLAP engine to start querying. If there is no matching field, the question will enter the LLM."),(0,i.kt)("li",{parentName:"ul"},"Based on the pre-defined rules, the LLM rates the complexity level of the question. If it is a simple query, it will go directly to the OLAP engine; if it is a complicated query, it will be semantically parsed and converted to a DSL statement."),(0,i.kt)("li",{parentName:"ul"},"At the Semantic Layer, the DSL statement will be split based on its query scenario. For example, if it is a multi-table join query, this layer will generate multiple single-table query SQL statements."),(0,i.kt)("li",{parentName:"ul"},"If the question involves external knowledge, the LLM will call a third-party plugin.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"LLM-OLAP-chatbot-query-interface",src:a(24680).Z,width:"2001",height:"1126"})),(0,i.kt)("p",null,"To answer whether a certain song can be performed on variety shows, the system retrieves the OLAP data warehouse for details about the song, and presents it with results from the Commercial Use Query third-party plugin."),(0,i.kt)("h2",{id:"olap-architecture"},"OLAP Architecture"),(0,i.kt)("p",null,"As for the OLAP part of this framework, after several rounds of architectural evolution, this is what our current OLAP pipeline looks like. "),(0,i.kt)("p",null,"Raw data is sorted into tags and metrics, which are custom-defined by the analysts. The tags and metrics are under unified management in order to avoid inconsistent definitions. Then, they are combined into various tagsets and metricsets for various queries. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"LLM-OLAP-architecture",src:a(9041).Z,width:"1709",height:"1119"})),(0,i.kt)("p",null,"We have drawn two main takeaways for you from our architectural optimization experience."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1. Streamline the links")),(0,i.kt)("p",null,"Before we adopted Apache Doris, we used to have ClickHouse to accelerate the computation of tags and metrics, and Elasticsearch to process dimensional data. That's two analytic engines and requires us to adapt the query statements to both of them. It was high-maintenance."),(0,i.kt)("p",null,"Thus, we replaced ClickHouse with Apache Doris, and utilized the ",(0,i.kt)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/es"},"Elasticsearch Catalog")," functionality to connect Elasticsearch data to Doris. In this way, we make Doris our unified query gateway. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"2. Split the flat tables")),(0,i.kt)("p",null,"In early versions of our OLAP architecture, we used to put data into flat tables, which made things tricky. For one thing, flat tables absorbed all the writing latency from upstreams, and that added up to considerable loss in data realtimeliness. For another, 50% of data in a flat table was dimensional data, which was rarely updated. With every new flat table came some bulky dimensional data that consumed lots of storage space. "),(0,i.kt)("p",null,"Therefore, we split the flat tables into metric tables and dimension tables. As they are updated in different paces, we put them into different data models."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Metric tables"),": We arrange metric data in the Aggregate Key model of Apache Doris, which means new data will be merged with the old data by way of SUM, MAX, MIN, etc."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Dimension tables"),": These tables are in the Unique Key model of Apache Doris, which means new data record will replace the old. This can greatly increase performance in our query scenarios.")),(0,i.kt)("p",null,"You might ask, does this cause trouble in queries, since most queries require data from both types of tables? Don't worry, we address that with the Rollup feature of Doris. On the basis of the base tables, we can select the dimensions we need to create Rollup views, which will automatically execute ",(0,i.kt)("inlineCode",{parentName:"p"},"GROUP BY"),". This relieves us of the need to define tags for each Rollup view and largely speed up queries."),(0,i.kt)("h2",{id:"other-tricks"},"Other Tricks"),(0,i.kt)("p",null,"In our experience with Apache Doris, we also find some other functionalities handy, so I list them here for you, too:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1. Materialized View")),(0,i.kt)("p",null,"A Materialized View is a pre-computed dataset. It is a way to accelerate queries when you frequently need to access data of certain dimensions. In these scenarios, we define derived tags and metrics based on the original ones. For example, we create a derived metric by combining Metric 1, Metric 2, and Metric 3: ",(0,i.kt)("inlineCode",{parentName:"p"},"sum(m1+m2+m3)"),". Then, we can create a Materialized View for it. According to the Doris release schedule, version 2.1 will support multi-table Materialized Views, and we look forward to that."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"2. Flink-Doris-Connector")),(0,i.kt)("p",null,"This is for Exactly-Once guarantee in data ingestion. The Flink-Doris-Connector implements a checkpoint mechanism and two-stage commit, and allows for auto data synchronization from relational databases to Doris."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"3. Compaction")),(0,i.kt)("p",null,"When the number of aggregation tasks or data volume becomes overwhelming for Flink, there might be huge latency in data compaction. We solve that with Vertical Compaction and Segment Compaction. Vertical Compaction supports loading of only part of the columns, so it can reduce storage consumption when compacting flat tables. Segment Compaction can avoid generating too much segments during data writing, and allows for compaction while writing simultaneously.   "),(0,i.kt)("h2",{id:"whats-next"},"What's Next"),(0,i.kt)("p",null,"With an aim to reduce costs and increase service availability, we plan to test the newly released Storage-Compute Separation and Cross-Cluster Replication of Doris, and we embrace any ideas and inputs about the SuperSonic framework and the Apache Doris project."))}p.isMDXComponent=!0},88902:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Tencent_LLM_1-6672112c0d09d75171d8ed9a749ff196.png"},45978:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Tencent_LLM_2-bb2fdaed64ef15214c0542204dd45832.png"},35940:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Tencent_LLM_3-3ab023081e1acb069d34a4ce24aef010.png"},77079:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Tencent_LLM_4-261ee680cf77335b25f32e41d7a4924b.png"},84854:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Tencent_LLM_5-70a170e771dd9eadcc1488b94d892478.png"},47158:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Tencent_LLM_6-cbbbb25041c807376b2b9d14609e82c8.png"},24680:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Tencent_LLM_7-c20b3cc2b0b00b32bc2825c1d62b1d5d.png"},9041:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Tencent_LLM_8-6d517a787c782510bf3869176730ce3a.png"}}]);