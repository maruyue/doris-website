"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[11732],{15680:(e,a,t)=>{t.d(a,{xA:()=>d,yg:()=>c});var n=t(296540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),s=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},d=function(e){var a=s(e.components);return n.createElement(p.Provider,{value:a},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(t),g=r,c=u["".concat(p,".").concat(g)]||u[g]||m[g]||i;return t?n.createElement(c,l(l({ref:a},d),{},{components:t})):n.createElement(c,l({ref:a},d))}));function c(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=g;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},606524:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=t(58168),r=(t(296540),t(15680));const i={title:"Hudi",language:"en"},l=void 0,o={unversionedId:"lakehouse/datalake/hudi",id:"version-2.0/lakehouse/datalake/hudi",title:"Hudi",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/lakehouse/datalake/hudi.md",sourceDirName:"lakehouse/datalake",slug:"/lakehouse/datalake/hudi",permalink:"/docs/2.0/lakehouse/datalake/hudi",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Hudi",language:"en"},sidebar:"docs",previous:{title:"Hive",permalink:"/docs/2.0/lakehouse/datalake/hive"},next:{title:"Iceberg",permalink:"/docs/2.0/lakehouse/datalake/iceberg"}},p={},s=[{value:"Usage",id:"usage",level:2},{value:"Create Catalog",id:"create-catalog",level:2},{value:"Column Type Mapping",id:"column-type-mapping",level:2},{value:"Skip Merge",id:"skip-merge",level:2},{value:"Query Optimization",id:"query-optimization",level:2},{value:"Time Travel",id:"time-travel",level:2}],d={toc:s},u="wrapper";function m(e){let{components:a,...t}=e;return(0,r.yg)(u,(0,n.A)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"hudi"},"Hudi"),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"The query types supported by the Hudi table are as follows, and the Incremental Query will be supported in the future.")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Table Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Supported Query types"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Copy On Write"),(0,r.yg)("td",{parentName:"tr",align:null},"Snapshot Query + Time Travel")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Merge On Read"),(0,r.yg)("td",{parentName:"tr",align:null},"Snapshot Queries + Read Optimized Queries + Time Travel")))),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Doris supports Hive Metastore(Including catalogs compatible with Hive MetaStore, like ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.0/lakehouse/datalake/hive"},"AWS Glue"),"/",(0,r.yg)("a",{parentName:"li",href:"./dlf.md"},"Alibaba DLF"),") Catalogs.")),(0,r.yg)("h2",{id:"create-catalog"},"Create Catalog"),(0,r.yg)("p",null,"Same as creating Hive Catalogs. A simple example is provided here. See ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.0/lakehouse/datalake/hive"},"Hive")," for more information."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG hudi PROPERTIES (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://172.21.0.1:7004',\n    'hadoop.username' = 'hive',\n    'dfs.nameservices'='your-nameservice',\n    'dfs.ha.namenodes.your-nameservice'='nn1,nn2',\n    'dfs.namenode.rpc-address.your-nameservice.nn1'='172.21.0.2:4007',\n    'dfs.namenode.rpc-address.your-nameservice.nn2'='172.21.0.3:4007',\n    'dfs.client.failover.proxy.provider.your-nameservice'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider'\n);\n")),(0,r.yg)("p",null,"Optional configuration parameters:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"description"),(0,r.yg)("th",{parentName:"tr",align:null},"default"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"use_hive_sync_partition"),(0,r.yg)("td",{parentName:"tr",align:null},"Use hms synchronized partition data"),(0,r.yg)("td",{parentName:"tr",align:null},"false")))),(0,r.yg)("h2",{id:"column-type-mapping"},"Column Type Mapping"),(0,r.yg)("p",null,"Same as that in Hive Catalogs. See the relevant section in ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.0/lakehouse/datalake/hive"},"Hive"),"."),(0,r.yg)("h2",{id:"skip-merge"},"Skip Merge"),(0,r.yg)("p",null,"Spark will create the read optimize table with ",(0,r.yg)("inlineCode",{parentName:"p"},"_ro")," suffix when generating hudi mor table. Doris will skip the log files when reading optimize table. Doris does not determine whether a table is read optimize by the ",(0,r.yg)("inlineCode",{parentName:"p"},"_ro")," suffix instead of the hive inputformat. Users can observe whether the inputformat of the 'cow/mor/read optimize' table is the same through the ",(0,r.yg)("inlineCode",{parentName:"p"},"SHOW CREATE TABLE")," command. In addition, Doris supports adding hoodie related configurations to catalog properties, which are compatible with ",(0,r.yg)("a",{parentName:"p",href:"https://hudi.apache.org/docs/configurations/#Read-Options"},"Spark Datasource Configs"),", so users can add ",(0,r.yg)("inlineCode",{parentName:"p"},"hoodie.datasource.merge.type=skip_merge")," in catalog properties to skip merge logs files."),(0,r.yg)("h2",{id:"query-optimization"},"Query Optimization"),(0,r.yg)("p",null,"Doris uses the parquet native reader to read the data files of the COW table, and uses the Java SDK (By calling hudi-bundle through JNI) to read the data files of the MOR table. In ",(0,r.yg)("inlineCode",{parentName:"p"},"upsert")," scenario, there may still remains base files that have not been updated in the MOR table, which can be read through the parquet native reader. Users can view the execution plan of hudi scan through the ",(0,r.yg)("a",{parentName:"p",href:"../../advanced/best-practice/query-analysis.md"},"explain")," command, where ",(0,r.yg)("inlineCode",{parentName:"p"},"hudiNativeReadSplits")," indicates how many split files are read through the parquet native reader."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"|0:VHUDI_SCAN_NODE                                                             |\n|      table: minbatch_mor_rt                                                  |\n|      predicates: `o_orderkey` = 100030752                                    |\n|      inputSplitNum=810, totalFileSize=5645053056, scanRanges=810             |\n|      partition=80/80                                                         |\n|      numNodes=6                                                              |\n|      hudiNativeReadSplits=717/810                                            |\n")),(0,r.yg)("p",null,"Users can view the perfomace of Java SDK through ",(0,r.yg)("a",{parentName:"p",href:"../../admin-manual/http-actions/fe/profile-action.md"},"profile"),", for exmpale:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"-  HudiJniScanner:  0ns\n  -  FillBlockTime:  31.29ms\n  -  GetRecordReaderTime:  1m5s\n  -  JavaScanTime:  35s991ms\n  -  OpenScannerTime:  1m6s\n")),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"OpenScannerTime"),": Time to create and initialize JNI reader"),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"JavaScanTime"),": Time to read data by Java SDK"),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"FillBlockTime"),": Time co convert Java column data into C++ column data"),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"GetRecordReaderTime"),": Time to create and initialize Hudi Record Reader")),(0,r.yg)("h2",{id:"time-travel"},"Time Travel"),(0,r.yg)("p",null,"Supports reading snapshots specified in Hudi table."),(0,r.yg)("p",null,"Every write operation to the Hudi table will generate a new snapshot."),(0,r.yg)("p",null,"By default, query requests will only read the latest version of the snapshot."),(0,r.yg)("p",null,"You can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"FOR TIME AS OF")," statement, based on the time of the snapshot to read historical version data. Examples are as follows:"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},'SELECT * FROM hudi_tbl FOR TIME AS OF "2022-10-07 17:20:37";')),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},'SELECT * FROM hudi_tbl FOR TIME AS OF "20221007172037";')),(0,r.yg)("p",null,"Hudi table does not support the ",(0,r.yg)("inlineCode",{parentName:"p"},"FOR VERSION AS OF")," statement. Using this syntax to query the Hudi table will throw an error."))}m.isMDXComponent=!0}}]);