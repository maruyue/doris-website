"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[95666],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(a),u=n,m=p["".concat(s,".").concat(u)]||p[u]||h[u]||i;return a?o.createElement(m,r(r({ref:t},d),{},{components:a})):o.createElement(m,r({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,r[1]=l;for(var c=2;c<i;c++)r[c]=a[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},10282:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=a(87462),n=(a(67294),a(3905));const i={title:"Cold Hot Separation",language:"en"},r=void 0,l={unversionedId:"advanced/cold-hot-separation",id:"advanced/cold-hot-separation",title:"Cold Hot Separation",description:"\x3c!--",source:"@site/docs/advanced/cold-hot-separation.md",sourceDirName:"advanced",slug:"/advanced/cold-hot-separation",permalink:"/docs/dev/advanced/cold-hot-separation",draft:!1,tags:[],version:"current",frontMatter:{title:"Cold Hot Separation",language:"en"},sidebar:"docs",previous:{title:"File Manager",permalink:"/docs/dev/advanced/small-file-mgr"},next:{title:"Compute Node",permalink:"/docs/dev/advanced/compute-node"}},s={},c=[{value:"Demand Scenarios",id:"demand-scenarios",level:2},{value:"Solution",id:"solution",level:2},{value:"Storage policy",id:"storage-policy",level:2},{value:"Some restrictions",id:"some-restrictions",level:3},{value:"Show size of objects occupied by cold data",id:"show-size-of-objects-occupied-by-cold-data",level:2},{value:"cold data cache",id:"cold-data-cache",level:2},{value:"cold data compaction",id:"cold-data-compaction",level:2},{value:"cold data schema change",id:"cold-data-schema-change",level:2},{value:"cold data Garbage collection",id:"cold-data-garbage-collection",level:2},{value:"Unfinished Matters",id:"unfinished-matters",level:2},{value:"FAQ",id:"faq",level:2}],d={toc:c},p="wrapper";function h(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"experimental-cold-hot-separation"},"[Experimental]"," Cold Hot Separation"),(0,n.kt)("h2",{id:"demand-scenarios"},"Demand Scenarios"),(0,n.kt)("p",null,"A big usage scenario in the future is similar to the es log storage. In the log scenario, the data will be cut by date. Many data are cold data, with few queries. Therefore, the storage cost of such data needs to be reduced. From the perspective of saving storage costs"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The price of ordinary cloud disks of cloud manufacturers is higher than that of object storage"),(0,n.kt)("li",{parentName:"ol"},"In the actual online use of the doris cluster, the utilization rate of ordinary cloud disks cannot reach 100%"),(0,n.kt)("li",{parentName:"ol"},"Cloud disk is not paid on demand, but object storage can be paid on demand"),(0,n.kt)("li",{parentName:"ol"},"High availability based on ordinary cloud disks requires multiple replicas, and a replica migration is required for a replica exception. This problem does not exist when data is placed on the object store, because the object store is shared\u3002")),(0,n.kt)("h2",{id:"solution"},"Solution"),(0,n.kt)("p",null,"Set the freeze time on the partition level to indicate how long the partition will be frozen, and define the location of remote storage stored after the freeze. On the be, the daemon thread will periodically determine whether the table needs to be frozen. If it does, it will upload the data to s3."),(0,n.kt)("p",null,"The cold and hot separation supports all doris functions, but only places some data on object storage to save costs without sacrificing functions. Therefore, it has the following characteristics:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"When cold data is stored on object storage, users need not worry about data consistency and data security"),(0,n.kt)("li",{parentName:"ul"},"Flexible freeze policy, cooling remote storage property can be applied to table and partition levels"),(0,n.kt)("li",{parentName:"ul"},"Users query data without paying attention to the data distribution location. If the data is not local, they will pull the data on the object and cache it to be local"),(0,n.kt)("li",{parentName:"ul"},"Optimization of replica clone. If the stored data is on the object, the replica clone does not need to pull the stored data locally"),(0,n.kt)("li",{parentName:"ul"},"Remote object space recycling recycler. If the table and partition are deleted, or the space is wasted due to abnormal conditions in the cold and hot separation process, the recycler thread will periodically recycle, saving storage resources"),(0,n.kt)("li",{parentName:"ul"},"Cache optimization, which caches the accessed cold data to be local, achieving the query performance of non cold and hot separation"),(0,n.kt)("li",{parentName:"ul"},"Be thread pool optimization, distinguish whether the data source is local or object storage, and prevent the delay of reading objects from affecting query performance"),(0,n.kt)("li",{parentName:"ul"},"newly created materialized view would inherit storage policy from it's base table's corresponding partition")),(0,n.kt)("h2",{id:"storage-policy"},"Storage policy"),(0,n.kt)("p",null,"The storage policy is the entry to use the cold and hot separation function. Users only need to associate a storage policy with a table or partition during table creation or doris use. that is, they can use the cold and hot separation function."),(0,n.kt)("version",{since:"dev"})," When creating an S3 RESOURCE, the S3 remote link verification will be performed to ensure that the RESOURCE is created correctly.",(0,n.kt)("p",null,"In addition, fe configuration needs to be added: ",(0,n.kt)("inlineCode",{parentName:"p"},"enable_storage_policy=true"),"  "),(0,n.kt)("p",null,"Note: This property will not be synchronized by CCR. If this table is copied by CCR, that is, PROPERTIES contains ",(0,n.kt)("inlineCode",{parentName:"p"},"is_being_synced = true"),", this property will be erased in this table."),(0,n.kt)("p",null,"This is an instance that how to create S3 RESOURCE\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'CREATE RESOURCE "remote_s3"\nPROPERTIES\n(\n    "type" = "s3",\n    "s3.endpoint" = "bj.s3.com",\n    "s3.region" = "bj",\n    "s3.bucket" = "test-bucket",\n    "s3.root.path" = "path/to/root",\n    "s3.access_key" = "bbb",\n    "s3.secret_key" = "aaaa",\n    "s3.connection.maximum" = "50",\n    "s3.connection.request.timeout" = "3000",\n    "s3.connection.timeout" = "1000"\n);\n\nCREATE STORAGE POLICY test_policy\nPROPERTIES(\n    "storage_resource" = "remote_s3",\n    "cooldown_ttl" = "1d"\n);\n\nCREATE TABLE IF NOT EXISTS create_table_use_created_policy \n(\n    k1 BIGINT,\n    k2 LARGEINT,\n    v1 VARCHAR(2048)\n)\nUNIQUE KEY(k1)\nDISTRIBUTED BY HASH (k1) BUCKETS 3\nPROPERTIES(\n    "storage_policy" = "test_policy"\n);\n')),(0,n.kt)("p",null,"and how to create HDFS RESOURCE\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'CREATE RESOURCE "remote_hdfs" PROPERTIES (\n        "type"="hdfs",\n        "fs.defaultFS"="fs_host:default_fs_port",\n        "hadoop.username"="hive",\n        "hadoop.password"="hive",\n        "dfs.nameservices" = "my_ha",\n        "dfs.ha.namenodes.my_ha" = "my_namenode1, my_namenode2",\n        "dfs.namenode.rpc-address.my_ha.my_namenode1" = "nn1_host:rpc_port",\n        "dfs.namenode.rpc-address.my_ha.my_namenode2" = "nn2_host:rpc_prot",\n        "dfs.client.failover.proxy.provider" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n    );\n\n    CREATE STORAGE POLICY test_policy PROPERTIES (\n        "storage_resource" = "remote_hdfs",\n        "cooldown_ttl" = "300"\n    )\n\n    CREATE TABLE IF NOT EXISTS create_table_use_created_policy (\n    k1 BIGINT,\n    k2 LARGEINT,\n    v1 VARCHAR(2048)\n    )\n    UNIQUE KEY(k1)\n    DISTRIBUTED BY HASH (k1) BUCKETS 3\n    PROPERTIES(\n    "storage_policy" = "test_policy"\n    );\n')),(0,n.kt)("p",null,"Or for an existing table, associate the storage policy"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'ALTER TABLE create_table_not_have_policy set ("storage_policy" = "test_policy");\n')),(0,n.kt)("p",null,"Or associate a storage policy with an existing partition"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'ALTER TABLE create_table_partition MODIFY PARTITION (*) SET("storage_policy"="test_policy");\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note"),": If the user specifies different storage policies for the entire table and certain partitions during table creation, the storage policy set for the partitions will be ignored, and all partitions of the table will use the table's policy. If you need a specific partition to have a different policy than the others, you can modify it by associating the partition with the desired storage policy, as mentioned earlier in the context of modifying an existing partition.\nFor details, please refer to the ",(0,n.kt)("a",{parentName:"p",href:"/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-RESOURCE"},"resource"),", ",(0,n.kt)("a",{parentName:"p",href:"/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-POLICY"},"policy"),", create table, alter and other documents in the docs directory"),(0,n.kt)("h3",{id:"some-restrictions"},"Some restrictions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A single table or a single partition can only be associated with one storage policy. After association, the storage policy cannot be dropped\uff0cneed to solve the relationship between the two."),(0,n.kt)("li",{parentName:"ul"},"The object information associated with the storage policy does not support modifying the data storage path information, such as bucket, endpoint, and root_ Path and other information"),(0,n.kt)("li",{parentName:"ul"},"Currently, the storage policy only supports creation,modification and deletion. before deleting, you need to ensure that no table uses this storage policy."),(0,n.kt)("li",{parentName:"ul"},"The Unique model does not support storage policy setting when the Merge-On-Write feature is enabled.")),(0,n.kt)("h2",{id:"show-size-of-objects-occupied-by-cold-data"},"Show size of objects occupied by cold data"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Through show proc '/backends', you can view the size of each object being uploaded to, and the RemoteUsedCapacity item.There is a slight delay in this method")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Through show tables from tableName, you can view the object size occupied by each table, and the RemoteDataSize item."))),(0,n.kt)("h2",{id:"cold-data-cache"},"cold data cache"),(0,n.kt)("p",null,"As above, cold data introduces the cache in order to optimize query performance. After the first hit after cooling, Doris will reload the cooled data to be's local disk. The cache has the following characteristics:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The cache is actually stored on the be local disk and does not occupy memory."),(0,n.kt)("li",{parentName:"ul"},"The cache can limit expansion and clean up data through LRU"),(0,n.kt)("li",{parentName:"ul"},"The implementation of the cache is the same as the cache of the federated query catalog. The documentation is ",(0,n.kt)("a",{parentName:"li",href:"/docs/dev/lakehouse/filecache"},"here"))),(0,n.kt)("h2",{id:"cold-data-compaction"},"cold data compaction"),(0,n.kt)("p",null,"The time when cold data is imported is from the moment when the data rowset file is written to the local disk, plus the cooling time. Since the data is not written and cooled at one time, to avoid the problem of small files in the object storage, doris will also perform compaction of cold data.\nHowever, the frequency of cold data compaction and the priority of resource occupation are not very high, let the local hot data be compacted as much as possible before performing cooling. Specifically, it can be adjusted by the following be parameters:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The be parameter ",(0,n.kt)("inlineCode",{parentName:"li"},"cold_data_compaction_thread_num")," can set the concurrency of executing cold data compaction, the default is 2."),(0,n.kt)("li",{parentName:"ul"},"The be parameter ",(0,n.kt)("inlineCode",{parentName:"li"},"cold_data_compaction_interval_sec")," can set the time interval for executing cold data compaction, the default is 1800, unit: second, that is, half an hour.")),(0,n.kt)("h2",{id:"cold-data-schema-change"},"cold data schema change"),(0,n.kt)("p",null,"The supported schema change types after data cooling are as follows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add and delete columns"),(0,n.kt)("li",{parentName:"ul"},"Modify column type"),(0,n.kt)("li",{parentName:"ul"},"Adjust column order"),(0,n.kt)("li",{parentName:"ul"},"Add and modify Bloom Filter"),(0,n.kt)("li",{parentName:"ul"},"Add and delete bitmap index")),(0,n.kt)("h2",{id:"cold-data-garbage-collection"},"cold data Garbage collection"),(0,n.kt)("p",null,"The garbage data of cold data refers to the data that is not used by any Replica. Object storage may have garbage data generated by the following situations:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Failed to upload rowset but uploaded some segments successfully."),(0,n.kt)("li",{parentName:"ol"},"After the FE re-selects the CooldownReplica, the rowset versions of the old and new CooldownReplicas are inconsistent, and the FollowerReplicas synchronize the CooldownMeta of the new CooldownReplica. The rowsets with inconsistent versions in the old CooldownReplica are not used by the Replica and become garbage data."),(0,n.kt)("li",{parentName:"ol"},"After the cold data compaction, the rowset before the merge cannot be deleted immediately because it may be used by other Replicas, but in the end FollowerReplicas all use the latest merged rowset, and the rowset before the merge becomes garbage data.")),(0,n.kt)("p",null,"In addition, the garbage data on the object will not be cleaned up immediately.\nThe be parameter ",(0,n.kt)("inlineCode",{parentName:"p"},"remove_unused_remote_files_interval_sec")," can set the garbage collection interval of cold data, the default is 21600, unit: second, that is, 6 hours."),(0,n.kt)("h2",{id:"unfinished-matters"},"Unfinished Matters"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Currently, there is no way to query the tables associated with a specific storage policy."),(0,n.kt)("li",{parentName:"ul"},"The acquisition of some remote occupancy indicators is not perfect enough.")),(0,n.kt)("h2",{id:"faq"},"FAQ"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"ERROR 1105 (HY000): errCode = 2, detailMessage = Failed to create repository: connect to s3 failed: Unable to marshall request to JSON: host must not be null.")),(0,n.kt)("p",null,"S3 SDK uses virtual-hosted style by default. However, some object storage systems (such as minio) may not be enabled or support virtual-hosted style access. In this case, we can add the use_path_style parameter to force the use of path style:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},'CREATE RESOURCE "remote_s3"\nPROPERTIES\n(\n    "type" = "s3",\n    "s3.endpoint" = "bj.s3.com",\n    "s3.region" = "bj",\n    "s3.bucket" = "test-bucket",\n    "s3.root.path" = "path/to/root",\n    "s3.access_key" = "bbb",\n    "s3.secret_key" = "aaaa",\n    "s3.connection.maximum" = "50",\n    "s3.connection.request.timeout" = "3000",\n    "s3.connection.timeout" = "1000",\n    "use_path_style" = "true"\n);\n')))}h.isMDXComponent=!0}}]);