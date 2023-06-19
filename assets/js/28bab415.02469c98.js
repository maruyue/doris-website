"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[20469],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(a),h=n,m=d["".concat(p,".").concat(h)]||d[h]||u[h]||i;return a?r.createElement(m,o(o({ref:t},c),{},{components:a})):r.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},8522:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const i={title:"Release 2.0.0 Alpha1",language:"en"},o=void 0,l={unversionedId:"releasenotes/release-2.0.0Alpha1",id:"releasenotes/release-2.0.0Alpha1",title:"Release 2.0.0 Alpha1",description:"\x3c!--",source:"@site/docs/releasenotes/release-2.0.0Alpha1.md",sourceDirName:"releasenotes",slug:"/releasenotes/release-2.0.0Alpha1",permalink:"/docs/dev/releasenotes/release-2.0.0Alpha1",draft:!1,tags:[],version:"current",frontMatter:{title:"Release 2.0.0 Alpha1",language:"en"},sidebar:"docs",previous:{title:"TPC-H Benchmark",permalink:"/docs/dev/benchmark/tpch"},next:{title:"Release 1.2.5",permalink:"/docs/dev/releasenotes/release-1.2.5"}},p={},s=[{value:"1. Semi-Structured Data Storage and Fast Analysis",id:"1-semi-structured-data-storage-and-fast-analysis",level:3},{value:"2. High Concurrent and Low Latency Point Query",id:"2-high-concurrent-and-low-latency-point-query",level:3},{value:"3. Vertical Compaction Enable by Default",id:"3-vertical-compaction-enable-by-default",level:3},{value:"4. Separation of Hot and Cold Data",id:"4-separation-of-hot-and-cold-data",level:3},{value:"5. Pipeline Execution Engine Adapted to the Architecture of Modern Multi-Core CPUs (disable by default)",id:"5-pipeline-execution-engine-adapted-to-the-architecture-of-modern-multi-core-cpus-disable-by-default",level:3},{value:"6. Nereids - The Brand New Optimizier (disable by default)",id:"6-nereids---the-brand-new-optimizier-disable-by-default",level:3}],c={toc:s},d="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Apache Doris 2.0.0 alpha1 version is an alpha release that is aimed to be used for evaluating the new features of Doris 2.0."),(0,n.kt)("p",null,"It's recommended to deploy 2.0.0 alpha1 version in a new test cluster for testing but ",(0,n.kt)("strong",{parentName:"p"},"it should not be deployed in production clusters"),"."),(0,n.kt)("h1",{id:"highlight-features"},"Highlight Features"),(0,n.kt)("h3",{id:"1-semi-structured-data-storage-and-fast-analysis"},"1. Semi-Structured Data Storage and Fast Analysis"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Inverted Index: Supports both fulltext search and normal equal, range query."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Supports fulltext search query",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Supports Chinese, English and Unicode standard tokenizer."),(0,n.kt)("li",{parentName:"ul"},"Supports both STRING and ARRAY types."))),(0,n.kt)("li",{parentName:"ul"},"Supports normal equal, range query on STRING, NUMERIC, DATE, DATETIME types."),(0,n.kt)("li",{parentName:"ul"},"Supports logical combination of multiple conditions, not only AND but also OR and NOT."),(0,n.kt)("li",{parentName:"ul"},"Much more efficient compared to ElasticSearch in esrally http logs benchmark: 4x speed up for data load, 80% storage space reduced, 2x speed up for 11 queries.")),(0,n.kt)("p",{parentName:"li"},"Refer to: ",(0,n.kt)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/data-table/index/inverted-index"},"https://doris.apache.org/docs/dev/data-table/index/inverted-index"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Dynamic Schema Table (Experimental)"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Automatically infer field names and types of semi structured JSON data"),(0,n.kt)("li",{parentName:"ul"},"Dynamically extend table schema correspondingly.")),(0,n.kt)("p",{parentName:"li"},"Refer to: ",(0,n.kt)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/data-table/dynamic-schema-table"},"https://doris.apache.org/docs/dev/data-table/dynamic-schema-table"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Complex Datatypes"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"JSONB data type is more efficient with fast simdjson first time data parsing"),(0,n.kt)("li",{parentName:"ul"},"ARRAY data type is more mature, adding dozens of array functions"),(0,n.kt)("li",{parentName:"ul"},"MAP data type is added for key-value pairs data, such as extensible user behavior properties"),(0,n.kt)("li",{parentName:"ul"},"STRUCT data type is add for traditional struct")))),(0,n.kt)("h3",{id:"2-high-concurrent-and-low-latency-point-query"},"2. High Concurrent and Low Latency Point Query"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Implement row storage and row cache to speed up fetch whole rows.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Implement short circuit query plan and execution for primary key query like ",(0,n.kt)("inlineCode",{parentName:"p"},"SELECT * FROM tablex WHERE id = xxx"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Cache compiled query plan using PreparedStatement.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"High QPS (30K+) on a single cloud host with 16 cpu core and 64g memory."),(0,n.kt)("p",{parentName:"li"},"Refer to: ",(0,n.kt)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/query-acceleration/hight-concurrent-point-query"},"https://doris.apache.org/docs/dev/query-acceleration/hight-concurrent-point-query")))),(0,n.kt)("h3",{id:"3-vertical-compaction-enable-by-default"},"3. Vertical Compaction Enable by Default"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Vertical compaction divides the schema into column groups, and then merges data by column, which can effectively reduce the memory overhead of compaction and improve the execution speed of compaction.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"In the actual test, the memory used by vertical compaction is only 1/10 of the original compaction algorithm, and the compaction rate is increased by 15%."),(0,n.kt)("p",{parentName:"li"},"Refer to: ",(0,n.kt)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/query-acceleration/hight-concurrent-point-query"},"https://doris.apache.org/docs/dev/advanced/best-practice/compaction/#vertical-compaction")))),(0,n.kt)("h3",{id:"4-separation-of-hot-and-cold-data"},"4. Separation of Hot and Cold Data"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Users can set the hot and cold data strategy through SQL, so as to move historical data to cheap storage such as object storage to reduce storage costs.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Cold data can still be accessed, and Doris provides a local cache to speed up the access efficiency of cold data."),(0,n.kt)("p",{parentName:"li"},"Refer to: ",(0,n.kt)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/advanced/cold_hot_separation"},"https://doris.apache.org/docs/dev/advanced/cold_hot_separation")))),(0,n.kt)("h3",{id:"5-pipeline-execution-engine-adapted-to-the-architecture-of-modern-multi-core-cpus-disable-by-default"},"5. Pipeline Execution Engine Adapted to the Architecture of Modern Multi-Core CPUs (disable by default)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Asynchronous blocking operators: blocking operators will no longer occupy thread resources, and will no longer generate thread switching overhead.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Adaptive load: adopts Multi-Level Feedback Queue to schedule query priorities. In mixed load scenarios, each query can be fairly allocated to a fixed thread scheduling time slice, thus ensuring that Doris can perform different tasks under different loads with more stable performance.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Controllable number of threads: The default number of execution threads of the pipeLine execution engine is the number of CPUs and cores, and Doris starts the corresponding execution thread pool to manage the execution threads."),(0,n.kt)("p",{parentName:"li"},"Refer to: ",(0,n.kt)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/query-acceleration/pipeline-execution-engine"},"https://doris.apache.org/docs/dev/query-acceleration/pipeline-execution-engine")))),(0,n.kt)("h3",{id:"6-nereids---the-brand-new-optimizier-disable-by-default"},"6. Nereids - The Brand New Optimizier (disable by default)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Smarter: The new optimizer presents the optimization points of each RBO and CBO in the form of rules. For each rule, the new optimizer provides a set of patterns used to describe the shape of the query plan, which can exactly match the query plan that can be optimized. Based on this, the new optimizer can better support more complex query statements such as multi-level subquery nesting. At the same time, the CBO of the new optimizer is based on the advanced cascades framework, uses richer data statistics, and applies a cost model with more scientific dimensions. This makes the new optimizer more handy when faced with multi-table join queries.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"More robust: All optimization rules of the new optimizer are completed on the logical execution plan tree. After the query syntax and semantic analysis is completed, it will be transformed into a tree structure. Compared with the internal data structure of the old optimizer, it is more reasonable and unified. Taking subquery processing as an example, the new optimizer is based on a new data structure, which avoids separate processing of subqueries by many rules in the old optimizer. In turn, the possibility of logic errors in optimization rules is reduced.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"More flexible: The architectural design of the new optimizer is more reasonable and modern. Optimization rules and processing stages can be easily extended. Optimizer developers can respond to user needs more easier and quickly."),(0,n.kt)("p",{parentName:"li"},"Refer to: ",(0,n.kt)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/query-acceleration/nereids"},"https://doris.apache.org/docs/dev/query-acceleration/nereids")))),(0,n.kt)("h1",{id:"behavior-changed"},"Behavior Changed"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Enable light weight schema change by default.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"By default, datev2, datetimev2, and decimalv3 are used to create tables, and datav1, datetimev1, and decimalv2 are not supported for creating tables. "),(0,n.kt)("p",{parentName:"li"},"Refer to: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/19077"},"https://github.com/apache/doris/pull/19077"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"In the JDBC and Iceberg catalogs, decimalv3 is used by default. "),(0,n.kt)("p",{parentName:"li"},"Refer to: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/18926"},"https://github.com/apache/doris/pull/18926"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Added max_openfiles and swap checks in the startup script of be, so if the system configuration is not reasonable, be may fail to start. "),(0,n.kt)("p",{parentName:"li"},"Refer to: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/18888"},"https://github.com/apache/doris/pull/18888"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"It is forbidden to log in without a password when accessing FE on localhost. "),(0,n.kt)("p",{parentName:"li"},"Refer to: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/18816"},"https://github.com/apache/doris/pull/18816"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"When there is a multi catalog in the system, when querying the data of the information schema, only the data of the internal catalog will be displayed by default. "),(0,n.kt)("p",{parentName:"li"},"Refer to: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/18662"},"https://github.com/apache/doris/pull/18662"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Renamed the process name of Doris to DorisFE and DorisBE. "),(0,n.kt)("p",{parentName:"li"},"Refer to: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/18167"},"https://github.com/apache/doris/pull/18167"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The non-vectorized code has been removed from the system, so the enable_vectorized_engine parameter no longer works. "),(0,n.kt)("p",{parentName:"li"},"Refer to: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/18166"},"https://github.com/apache/doris/pull/18166"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Limit the depth of the expression tree, the default is 200. "),(0,n.kt)("p",{parentName:"li"},"Refer to: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/17314"},"https://github.com/apache/doris/pull/17314"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"In order to be compatible with BI tools, datev2 and datetimev2 are displayed as date and datetime when show create table. "),(0,n.kt)("p",{parentName:"li"},"Refer to: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/18358"},"https://github.com/apache/doris/pull/18358")))))}u.isMDXComponent=!0}}]);