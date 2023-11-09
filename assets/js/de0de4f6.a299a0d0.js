"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[94657],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(a),h=r,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return a?n.createElement(m,s(s({ref:t},u),{},{components:a})):n.createElement(m,s({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},85920:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={title:"What is Apache Doris",language:"en"},s=void 0,o={unversionedId:"get-starting/what-is-apache-doris",id:"version-2.0/get-starting/what-is-apache-doris",title:"What is Apache Doris",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/get-starting/what-is-apache-doris.md",sourceDirName:"get-starting",slug:"/get-starting/what-is-apache-doris",permalink:"/docs/get-starting/what-is-apache-doris",draft:!1,tags:[],version:"2.0",frontMatter:{title:"What is Apache Doris",language:"en"},sidebar:"docs",previous:{title:"Quick Start",permalink:"/docs/get-starting/quick-start"},next:{title:"Standard Deployment",permalink:"/docs/install/standard-deployment"}},l={},c=[],u={toc:c},p="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"what-is-apache-doris-"},"What is Apache Doris ?"),(0,r.kt)("p",null,"Apache Doris is a high-performance, real-time analytical database based on MPP architecture, known for its extreme speed and ease of use. It only requires a sub-second response time to return query results under massive data and can support not only high-concurrent point query scenarios but also high-throughput complex analysis scenarios. All this makes Apache Doris an ideal tool for scenarios including report analysis, ad-hoc query, unified data warehouse, and data lake query acceleration. On Apache Doris, users can build various applications, such as user behavior analysis, AB test platform, log retrieval analysis, user portrait analysis, and order analysis."),(0,r.kt)("p",null,"Apache Doris, formerly known as Palo, was initially created to support Baidu's ad reporting business. It was officially open-sourced in 2017 and donated by Baidu to the Apache Foundation for incubation in July 2018, where it was operated by members of the incubator project management committee under the guidance of Apache mentors. Currently, the Apache Doris community has gathered more than 500 contributors from hundreds of companies in different industries, and the number of active contributors is more than 100 per month. In June 2022, Apache Doris graduated from Apache incubator as a Top-Level Project."),(0,r.kt)("p",null,"Apache Doris now has a wide user base in China and around the world, and as of today, Apache Doris is used in production environments in over 2000 companies worldwide. Of the top 50 Chinese Internet companies by market capitalization (or valuation), more than 80% are long-term users of Apache Doris, including Baidu, Meituan, Xiaomi, Jingdong, Bytedance, Tencent, NetEase, Kwai, Weibo, and Ke Holdings. It is also widely used in some traditional industries such as finance, energy, manufacturing, and telecommunications."),(0,r.kt)("h1",{id:"usage-scenarios"},"Usage Scenarios"),(0,r.kt)("p",null,"As shown in the figure below, after various data integration and processing, the data sources are usually stored in the real-time data warehouse Doris and the offline data lake or data warehouse (in Apache Hive, Apache Iceberg or Apache Hudi).\n",(0,r.kt)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/sekvbs5ih5rb16wz6n9k.png",alt:"Image description"})),(0,r.kt)("p",null,"Apache Doris is widely used in the following scenarios:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Reporting Analysis"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Real-time dashboards"),(0,r.kt)("li",{parentName:"ul"},"Reports for in-house analysts and managers"),(0,r.kt)("li",{parentName:"ul"},"Highly concurrent user-oriented or customer-oriented report analysis: such as website analysis and ad reporting that usually require thousands of QPS and quick response times measured in milliseconds. A successful user case is that Doris has been used by the Chinese e-commerce giant JD.com in ad reporting, where it receives 10 billion rows of data per day, handles over 10,000 QPS, and delivers a 99 percentile query latency of 150 ms."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ad-Hoc Query. Analyst-oriented self-service analytics with irregular query patterns and high throughput requirements. XiaoMi has built a growth analytics platform (Growth Analytics, GA) based on Doris, using user behavior data for business growth analysis, with an average query latency of 10 seconds and a 95th percentile query latency of 30 seconds or less, and tens of thousands of SQL queries per day.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Unified Data Warehouse Construction. Apache Doris allows users to build a unified data warehouse via one single platform and save the trouble of handling complicated software stacks. Chinese hot pot chain Haidilao has built a unified data warehouse with Doris to replace its old complex architecture consisting of Apache Spark, Apache Hive, Apache Kudu, Apache HBase, and Apache Phoenix.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Data Lake Query. Apache Doris avoids data copying by federating the data in Apache Hive, Apache Iceberg, and Apache Hudi using external tables, and thus achieves outstanding query performance."))),(0,r.kt)("h1",{id:"technical-overview"},"Technical Overview"),(0,r.kt)("p",null,"As shown in the figure below, the Apache Doris architecture is simple and neat, with only two types of processes."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Frontend (FE): user request access, query parsing and planning, metadata management, node management, etc."),(0,r.kt)("li",{parentName:"ul"},"Backend (BE): data storage and query plan execution")),(0,r.kt)("p",null,"Both types of processes are horizontally scalable, and a single cluster can support up to hundreds of machines and tens of petabytes of storage capacity. And these two types of processes guarantee high availability of services and high reliability of data through consistency protocols. This highly integrated architecture design greatly reduces the operation and maintenance cost of a distributed system."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mnz20ae3s23vv3e9ltmi.png",alt:"Image description"})),(0,r.kt)("p",null,"In terms of ",(0,r.kt)("strong",{parentName:"p"},"interfaces"),", Apache Doris adopts MySQL protocol, supports standard SQL, and is highly compatible with MySQL dialect. Users can access Doris through various client tools and it supports seamless connection with BI tools. Doris currently supports a variety of mainstream BI products, including but not limited to SmartBI, DataEase, FineBI, Tableau, Power BI, SuperSet, etc. As long as the BI tools that support the MySQL protocol, Doris can provide query support as a data source."),(0,r.kt)("p",null,"Doris uses a ",(0,r.kt)("strong",{parentName:"p"},"columnar storage engine"),", which encodes, compresses, and reads data by column. This enables a very high compression ratio and largely reduces irrelavant data scans, thus making more efficient use of IO and CPU resources."),(0,r.kt)("p",null,"Doris supports various ",(0,r.kt)("strong",{parentName:"p"},"index")," structures to minimize data scans:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sorted Compound Key Index: Users can specify three columns at most to form a compound sort key. This can effectively prune data to better support highly concurrent reporting scenarios."),(0,r.kt)("li",{parentName:"ul"},"MIN/MAX Indexing: This enables effective filtering of equivalence and range queries for numeric types."),(0,r.kt)("li",{parentName:"ul"},"Bloom Filter: very effective in equivalence filtering and pruning of high cardinality columns"),(0,r.kt)("li",{parentName:"ul"},"Invert Index: This enables fast search for any field.")),(0,r.kt)("p",null,"Doris supports a variety of ",(0,r.kt)("strong",{parentName:"p"},"storage models")," and has optimized them for different scenarios:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Aggregate Key Model: able to merge the value columns with the same keys and significantly improve performance"),(0,r.kt)("li",{parentName:"ul"},"Unique Key Model: Keys are unique in this model and data with the same key will be overwritten to achieve row-level data updates."),(0,r.kt)("li",{parentName:"ul"},"Duplicate Key Model: This is a detailed data model capable of detailed storage of fact tables.")),(0,r.kt)("p",null,"Doris also supports strongly consistent materialized views. Materialized views are automatically selected and updated, which greatly reduces maintenance costs for users."),(0,r.kt)("p",null,"Doris adopts the MPP model in its query engine to realize parallel execution between and within nodes. It also supports distributed shuffle join for multiple large tables so as to handle complex queries."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vjlmumwyx728uymsgcw0.png",alt:"Image description"})),(0,r.kt)("p",null,"The Doris query engine is vectorized, with all memory structures laid out in a columnar format. This can largely reduce virtual function calls, improve cache hit rates, and make efficient use of SIMD instructions. Doris delivers a 5\u201310 times higher performance in wide table aggregation scenarios than non-vectorized engines."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ck2m3kbnodn28t28vphp.png",alt:"Image description"})),(0,r.kt)("p",null,"Apache Doris uses ",(0,r.kt)("strong",{parentName:"p"},"Adaptive Query Execution technology")," to dynamically adjust the execution plan based on runtime statistics. For example, it can generate runtime filter, push it to the probe side, and automatically penetrate it to the Scan node at the bottom, which drastically reduces the amount of data in the probe and increases join performance. The runtime filter in Doris supports In/Min/Max/Bloom filter."),(0,r.kt)("p",null,"In terms of ",(0,r.kt)("strong",{parentName:"p"},"optimizers"),", Doris uses a combination of CBO and RBO. RBO supports constant folding, subquery rewriting, predicate pushdown and CBO supports Join Reorder. The Doris CBO is under continuous optimization for more accurate statistical information collection and derivation, and more accurate cost model prediction."))}d.isMDXComponent=!0}}]);