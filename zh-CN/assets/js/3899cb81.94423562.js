"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[20923],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=i,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},41829:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));const r={title:"The Application of Apache Doris in NIO",summary:"NIO Inc. (NYSE: NIO)is a leading company in the premium smart electric vehicle market. Founded in November 2014, NIO designs, develops, jointly manufactures and sells premium smart electric vehicles, driving innovations in autonomous driving, digital technologies, electric powertrains and batteries. Recently, NIO planned to enter the U.S. market alongside other western markets by the end of 2025. The company has already established a U.S. headquarters in San Jose, California, where they started hiring people..",date:"2022-11-28",author:"Huaidong Tang",tags:["Best Practice"]},o=void 0,l={permalink:"/zh-CN/blog/NIO",source:"@site/blog/NIO.md",title:"The Application of Apache Doris in NIO",description:"\x3c!--",date:"2022-11-28T00:00:00.000Z",formattedDate:"2022\u5e7411\u670828\u65e5",tags:[{label:"Best Practice",permalink:"/zh-CN/blog/tags/best-practice"}],hasTruncateMarker:!1,authors:[{name:"Huaidong Tang"}],frontMatter:{title:"The Application of Apache Doris in NIO",summary:"NIO Inc. (NYSE: NIO)is a leading company in the premium smart electric vehicle market. Founded in November 2014, NIO designs, develops, jointly manufactures and sells premium smart electric vehicles, driving innovations in autonomous driving, digital technologies, electric powertrains and batteries. Recently, NIO planned to enter the U.S. market alongside other western markets by the end of 2025. The company has already established a U.S. headquarters in San Jose, California, where they started hiring people..",date:"2022-11-28",author:"Huaidong Tang",tags:["Best Practice"]},prevItem:{title:"Apache Doris Helped Netease Create a Refined Operation DMP System",permalink:"/zh-CN/blog/Netease"},nextItem:{title:"How Does Apache Doris Help AISPEACH Build a Datawherehouse in AI Chatbots Scenario",permalink:"/zh-CN/blog/scenario"}},s={authorsImageUrls:[void 0]},p=[{value:"About NIO",id:"about-nio",level:2},{value:"The Architecture Evolution of OLAP in NIO",id:"the-architecture-evolution-of-olap-in-nio",level:2},{value:"1. Introduced Apache Druid",id:"1-introduced-apache-druid",level:3},{value:"2. Introduced TiDB",id:"2-introduced-tidb",level:3},{value:"3. Introduced Apache Doris",id:"3-introduced-apache-doris",level:3},{value:"Apache Doris-the Unified OLAP Datawarehouse",id:"apache-doris-the-unified-olap-datawarehouse",level:2},{value:"1. Data Source",id:"1-data-source",level:3},{value:"2. Data Import",id:"2-data-import",level:3},{value:"3. Data Processing",id:"3-data-processing",level:3},{value:"4. Data Warehouse",id:"4-data-warehouse",level:3},{value:"5. Data Service",id:"5-data-service",level:3},{value:"6. Application",id:"6-application",level:3},{value:"Best Practice of Apache Doris on CDP Architecture",id:"best-practice-of-apache-doris-on-cdp-architecture",level:2},{value:"1. CDP Architecture",id:"1-cdp-architecture",level:3},{value:"2. Considerations for CDP Storage Selection",id:"2-considerations-for-cdp-storage-selection",level:3},{value:"Summery and Benefits",id:"summery-and-benefits",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(c,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"the-application-of-apache-doris-in-nio"},"The Application of Apache Doris in NIO"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"NIO",src:a(70579).Z,width:"900",height:"383"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Guide: The topic of this sharing is the application of Apache Doris in NIO, which mainly includes the following topics:"),(0,i.kt)("ol",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ol"},"Introduction about NIO"),(0,i.kt)("li",{parentName:"ol"},"The Development of OLAP in NIO"),(0,i.kt)("li",{parentName:"ol"},"Apache Doris-the Unified OLAP Data warehouse"),(0,i.kt)("li",{parentName:"ol"},"Best Practice of Apache Doris on CDP Architecture"),(0,i.kt)("li",{parentName:"ol"},"Summery and Benefits"))),(0,i.kt)("p",null,"Author\uff1aHuaidong Tang, Data Team Leader, NIO INC"),(0,i.kt)("h2",{id:"about-nio"},"About NIO"),(0,i.kt)("p",null,"NIO Inc. (NYSE: NIO)is a leading company in the premium smart electric vehicle market. Founded in November 2014, NIO designs, develops, jointly manufactures and sells premium smart electric vehicles, driving innovations in autonomous driving, digital technologies, electric powertrains and batteries."),(0,i.kt)("p",null,"Recently, NIO planned to enter the U.S. market alongside other western markets by the end of 2025. The company has already established a U.S. headquarters in San Jose, California, where they started hiring people."),(0,i.kt)("h2",{id:"the-architecture-evolution-of-olap-in-nio"},"The Architecture Evolution of OLAP in NIO"),(0,i.kt)("p",null,"The architectural evolution of OLAP in NIO took several steps for years."),(0,i.kt)("h3",{id:"1-introduced-apache-druid"},"1. Introduced Apache Druid"),(0,i.kt)("p",null,"At that time, there were not so many OLAP storage and query engines to choose from. The more common ones were Apache Druid and Apache Kylin. There are 2 reasons why we didn't choose Kylin."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The most suitable and optimal storage at the bottom of Kylin is HBase and adding it would increase the cost of operation and maintenance.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Kylin's precalculation involves various dimensions and indicators. Too many dimensions and indicators would cause great pressure on storage."))),(0,i.kt)("p",null,"We prefer Druid because we used to be users and are familiar with it. Apache Druid has obvious advantages. It supports real-time and offline data import, columnar storage, high concurrency, and high query efficiency. But it has downsides as well:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Standard protocols such as JDBC are not used")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The capability of JOIN is weak")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Significant performance downhill when performing dedeplication")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"High in operation and maintenance costs, different components have separate installation methods and different dependencies; Data import needs extra integration with Hadoop and the dependencies of JAR packages"))),(0,i.kt)("h3",{id:"2-introduced-tidb"},"2. Introduced TiDB"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"TiDB is a mature datawarehouse focused on OLTP+OLAP, which also has distinctive advantages and disadvantages:")),(0,i.kt)("p",null,"Advantage:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"OLTP database, can be updated friendly")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Supports detailed and aggregated query, which can handle dashboard statistical reports or query of detailed data at the same time")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Supports standard SQL, which has low cost of use")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Low operation and maintenance cost"))),(0,i.kt)("p",null,"Disadvantages:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"It is not an independent OLAP. TiFlash relies on OLTP and will increase storage. Its OLAP ability is insufficient")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The overall performance should be measured separately by each scene"))),(0,i.kt)("h3",{id:"3-introduced-apache-doris"},"3. Introduced Apache Doris"),(0,i.kt)("p",null,"Since 2021, we have officially introduced Apache Doris. In the process of selection, we are most concerned about various factors such as product performance, SQL protocol, system compatibility, learning and operation and maintenance costs. After deep research and detailed comparison of the following systems, we came to the following conclusions:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Apache Doris, whose advantages fully meet our demands:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Supports high concurrent query (what we concerned most)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Supports both real-time and offline data")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Supports detailed and aggregated query")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"UNIQ model can be updated")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ability of Materialized View can greatly speed up query efficiency")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Fully compatible with the MySQL protocol and the cost of development is relatively low")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The performance fully meets our requirements")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Lower operation and maintenance costs"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Moreover, there is another competitor, Clickhouse. Its stand-alone performance is extremely strong, but its disadvantages are hard to accept:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In some cases, its multi-table JOIN is weak")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Relatively low in concurrency")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"High operation and maintenance costs"))),(0,i.kt)("p",null,"With multiple good performances, Apache Doris outstands Druid and TiDB. Meanwhile Clickhouse did not fit well in our business, which lead us to Apache Doris."),(0,i.kt)("h2",{id:"apache-doris-the-unified-olap-datawarehouse"},"Apache Doris-the Unified OLAP Datawarehouse"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"NIO",src:a(4685).Z,width:"1018",height:"669"})),(0,i.kt)("p",null,"This diagram basically describes our OLAP Architecuture, including data source, data import, data processing, data warehouse, data service and application."),(0,i.kt)("h3",{id:"1-data-source"},"1. Data Source"),(0,i.kt)("p",null,"In NIO, the data source not only refers to database, but also event tracking data, device data, vehicle data, etc. The data will be ingested into the big data platform. "),(0,i.kt)("h3",{id:"2-data-import"},"2. Data Import"),(0,i.kt)("p",null,"For business data, you can trigger CDC and convert it into a data stream, store it in Kafka, and then perform stream processing. Some data that can only be passed in batches will directly enter our distributed storage."),(0,i.kt)("h3",{id:"3-data-processing"},"3. Data Processing"),(0,i.kt)("p",null,"We took the Lambda architecture rather than stream-batch integration."),(0,i.kt)("p",null,"Our own business determines that our Lambda architecture should be divided into two paths: offline and real-time:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Some data is streamed.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Some data can be stored in the data stream, and some historical data will not be stored in Kafka.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Some data requires high precision in some circumstances. In order to ensure the accuracy of the data, an offline pipeline will recalculate and refresh the entire data."))),(0,i.kt)("h3",{id:"4-data-warehouse"},"4. Data Warehouse"),(0,i.kt)("p",null,"From data processing to the data warehouse, we did not adopt Flink or Spark Doris Connector. We use Routine Load to connect Apache Doris and Flink, and Broker Load to connect Doris and Spark. The data generated in batches by Spark will be backed up to Hive for further use in other scenarios. In this way, each calculation is used for multiple scenarios at the same time, which greatly improves the efficiency. It also works for Flink."),(0,i.kt)("h3",{id:"5-data-service"},"5. Data Service"),(0,i.kt)("p",null,"What behind Doris is One Service. By registering the data source or flexible configuration, the API with flow and authority control is automatically generated, which greatly improves flexibility. And with the k8s serverless solution, the entire service is much more flexible."),(0,i.kt)("h3",{id:"6-application"},"6. Application"),(0,i.kt)("p",null,"In the application layer, we mainly deploy some reporting applications and other services."),(0,i.kt)("p",null,"We mainly have two types of scenarios:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"User-oriented")," , which is similar to the Internet, contains a data dashboard and data indicators.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Car-oriented")," , car data enters Doris in this way. After certain aggregation, the volume of Doris data is about billions. But the overall performance can still meet our requirements."))),(0,i.kt)("h2",{id:"best-practice-of-apache-doris-on-cdp-architecture"},"Best Practice of Apache Doris on CDP Architecture"),(0,i.kt)("h3",{id:"1-cdp-architecture"},"1. CDP Architecture"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"NIO",src:a(91997).Z,width:"1471",height:"422"})),(0,i.kt)("p",null,"Next, let me introduce Doris' practice on the operating platform. This is what happens in our real business. Nowadays, Internet companies will make their own CDP, which includes several modules:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Tags")," , which is the most basic part.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Target")," , based on tags, select people according to some certain logic.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Insight")," , aiming at a group of people, clarify the distribution and characteristics of the group.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Touch")," , use methods such as text messages, phone calls, voices, APP notifications, IM, etc. to reach users, and cooperate with flow control.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Effect analysis,")," to improve the integrity of the operation platform, with action, effect and feedback."))),(0,i.kt)("p",null,"Doris plays the most important role here, including: tags storage, groups storage, and effect analysis."),(0,i.kt)("p",null,"Tags are divided into basic tags and basic data of user behavior. We can flexibly customize other tags based on those facts. From the perspective of time effectiveness, tags are also divided into real-time tags and offline tags."),(0,i.kt)("h3",{id:"2-considerations-for-cdp-storage-selection"},"2. Considerations for CDP Storage Selection"),(0,i.kt)("p",null,"We took five dimensions into account when we select CDP storage."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"(1) Unification of Offline and Real-time")),(0,i.kt)("p",null,"As mentioned earlier, there are offline tags and real-time tags. Currently we are close to quasi-real-time. For some data, quasi-real-time is good enough to meet our needs. A large number of tags are still offline tags. The methods used are Doris's Routine Load and Broker Load."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Scenes")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Requirements")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Apache Doris's Function")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Real-time tags"),(0,i.kt)("td",{parentName:"tr",align:null},"Real-time data updates"),(0,i.kt)("td",{parentName:"tr",align:null},"Routine Load")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Offline tags"),(0,i.kt)("td",{parentName:"tr",align:null},"Highly efficient batch import"),(0,i.kt)("td",{parentName:"tr",align:null},"Broker Load")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Unification of offline and real-time"),(0,i.kt)("td",{parentName:"tr",align:null},"Unification of offline and real-time data storage"),(0,i.kt)("td",{parentName:"tr",align:null},"Routine Load and Broker Load update different columns of the same table")))),(0,i.kt)("p",null,"In addition, on the same table, the update frequency of different columns is also different. For example, we need to update the user's identity in real time because the user's identity changes all the time. T+1's update does not meet our needs. Some tags are offline, such as the user's gender, age and other basic tags, T+1 update is sufficient to meet our standards. The maintenance cost caused by putting the tags of basic users on the same table is very low. When customizing tags later, the number of tables will be greatly reduced, which benefits the overall performance."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"(2) Efficient Targets")),(0,i.kt)("p",null,"When users tags are done, is time to target right group of people. The target is to filter out all the people who meet the conditions according to different combinations of tags. At this time, there will be queries with different combinations of tag conditions. There was an obvious improvement when Apache Doris upgraded to vectorization."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Scenes")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Requirements")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Apache Doris's Function")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Complex Condition Targets"),(0,i.kt)("td",{parentName:"tr",align:null},"Highly efficient combination of tags"),(0,i.kt)("td",{parentName:"tr",align:null},"Optimization of SIMD")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"(3) Efficient Polymerization")),(0,i.kt)("p",null,"The user insights and effect analysis statistics mentioned above require statistical analysis of the data, which is not a simple thing of obtaining tags by user ID. The amount of data read and query efficiency have a great impact on the distribution of our tags, the distribution of groups, and the statistics of effect analysis. Apache Doris helps a lot:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Data Partition. We shard the data by time order and the analysis and statistics will greatly reduce the amount of data, which can greatly speed up the efficiency of query and analysis.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Node aggregation. Then we collect them for unified aggregation.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Vectorization. The vectorization execution engine has significant performance improvement."))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Scenes")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Requirements")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Apache Doris's Function")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Distribution of Tags Values"),(0,i.kt)("td",{parentName:"tr",align:null},"The distribution values \u200b\u200bof all tags need to be updated every day. Fast and efficient statistics are required"),(0,i.kt)("td",{parentName:"tr",align:null},"Data partition lessens data transfer and calculation")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Distribution of Groups"),(0,i.kt)("td",{parentName:"tr",align:null},"Same as Above"),(0,i.kt)("td",{parentName:"tr",align:null},"Unified storage and calculation, each node aggregates first")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Statistics for Performance Analysis"),(0,i.kt)("td",{parentName:"tr",align:null},"Same as Above"),(0,i.kt)("td",{parentName:"tr",align:null},"Speed up SIMD")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"(4) Multi-table Association")),(0,i.kt)("p",null,"Our CDP might be different from common CDP scenarios in the industry, because common CDP tags in some scenarios are estimated in advance and no custom tags, which leaves the flexibility to users who use CDP to customize tags themselves. The underlying data is scattered in different database tables. If you want to create a custom tag, you must associate the tables."),(0,i.kt)("p",null,"A very important reason we chose Doris is the ability to associate multiple tables. Through performance tests, Apache Doris is able to meet our requirements. And Doris provides users with powerful capabilities because tags are dynamic."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Scenes")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Requirements")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Apache Doris's Function")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Distributed Characteristics of the Population"),(0,i.kt)("td",{parentName:"tr",align:null},"The distribution of statistical groups under a certain characteristic"),(0,i.kt)("td",{parentName:"tr",align:null},"Table Association")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Single Tag"),(0,i.kt)("td",{parentName:"tr",align:null},"Display tags"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"(5) Query Federation")),(0,i.kt)("p",null,"Whether the user is successfully reached or not will be recorded in TiDB. Notifications during operations may only affect user experience. If a transaction is involved, such as gift cards or coupons, the task execution must be done without repetition. TiDB is more suitable for this OLTP scenario."),(0,i.kt)("p",null,"But for effect analysis, it is necessary to understand the extent to which the operation plan is implemented, whether the goal is achieved and its distribution. It is necessary to combine task execution and group selection for analysis, which requires the query association between Doris and TiDB."),(0,i.kt)("p",null,"The size of the tag is probably small, so we would like to save it into Elasticsearch. However, it proves us wrong later."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Scenes")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Requirements")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Apache Doris's Function")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Effect Analysis Associated with Execution Details"),(0,i.kt)("td",{parentName:"tr",align:null},"Doris query associated with TiDB"),(0,i.kt)("td",{parentName:"tr",align:null},"Query Association with other databases")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Group Tags Associated with Behavior Aggregation"),(0,i.kt)("td",{parentName:"tr",align:null},"Doris query associated with Elasticsearch"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h2",{id:"summery-and-benefits"},"Summery and Benefits"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"bitmap"),". Our volume are not big enough to test its full efficiency. If the volume reaches a certain level, using bitmap might have a good performance improvement. For example, when calculating UV , bitmap aggregation can be considered if the full set of Ids is greater than 50 million.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"The performance is good")," when Elasticsearch single-table query is associated with Doris.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Better to update columns in batches"),". In order to reduce the number of tables and improve the performance of the JOIN table, the table designed should be as streamlined as possible and aggregated as much as possible. However, fields of the same type may have different update frequencies. Some fields need to be updated at daily level, while others may need to be updated at hourly level. Updating a column alone is an important requirement. The solution from Apache Doris is to use REPLACE","_","IF","_","NOT","_","NULL. Note: It is impossible to replace the original non-null value with null. You can replace all nulls with meaningful default values, such as unknown.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Online Services"),". Apache Doris serves online and offline scenarios at the same time, which requires high resource isolation."))))}u.isMDXComponent=!0},70579:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/NIO_kv-7601d71a49c7ecd7fb42f03de600ae6c.png"},91997:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cdp-3d65926e741a2837759b07514e914bbf.png"},4685:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/olap-96ad3bb86cebd92a200a0581f0418d3c.png"}}]);