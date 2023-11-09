"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[44893],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(a),u=n,k=m["".concat(i,".").concat(u)]||m[u]||c[u]||s;return a?r.createElement(k,o(o({ref:t},d),{},{components:a})):r.createElement(k,o({ref:t},d))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[m]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<s;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},94391:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const s={title:"CREATE-RESOURCE",language:"en"},o=void 0,l={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-RESOURCE",id:"version-2.0/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-RESOURCE",title:"CREATE-RESOURCE",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-RESOURCE.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Create",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-RESOURCE",permalink:"/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-RESOURCE",draft:!1,tags:[],version:"2.0",frontMatter:{title:"CREATE-RESOURCE",language:"en"},sidebar:"docs",previous:{title:"CREATE-ENCRYPT-KEY",permalink:"/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-ENCRYPT-KEY"},next:{title:"CREATE-WORKLOAD-GORUP",permalink:"/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-WORKLOAD-GROUP"}},i={},p=[{value:"CREATE-RESOURCE",id:"create-resource",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],d={toc:p},m="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"create-resource"},"CREATE-RESOURCE"),(0,n.kt)("h3",{id:"name"},"Name"),(0,n.kt)("p",null,"CREATE RESOURCE"),(0,n.kt)("h3",{id:"description"},"Description"),(0,n.kt)("p",null,"This statement is used to create a resource. Only the root or admin user can create resources. Currently supports Spark, ODBC, S3 external resources.\nIn the future, other external resources may be added to Doris for use, such as Spark/GPU for query, HDFS/S3 for external storage, MapReduce for ETL, etc."),(0,n.kt)("p",null,"grammar:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE [EXTERNAL] RESOURCE "resource_name"\nPROPERTIES ("key"="value", ...);\n')),(0,n.kt)("p",null,"illustrate:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'The type of resource needs to be specified in PROPERTIES "type" = "',"[spark|odbc_catalog|s3]",'", currently supports spark, odbc_catalog, s3.'),(0,n.kt)("li",{parentName:"ul"},"PROPERTIES differs depending on the resource type, see the example for details.")),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a Spark resource named spark0 in yarn cluster mode."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE EXTERNAL RESOURCE "spark0"\nPROPERTIES\n(\n  "type" = "spark",\n  "spark.master" = "yarn",\n  "spark.submit.deployMode" = "cluster",\n  "spark.jars" = "xxx.jar,yyy.jar",\n  "spark.files" = "/tmp/aaa,/tmp/bbb",\n  "spark.executor.memory" = "1g",\n  "spark.yarn.queue" = "queue0",\n  "spark.hadoop.yarn.resourcemanager.address" = "127.0.0.1:9999",\n  "spark.hadoop.fs.defaultFS" = "hdfs://127.0.0.1:10000",\n  "working_dir" = "hdfs://127.0.0.1:10000/tmp/doris",\n  "broker" = "broker0",\n  "broker.username" = "user0",\n  "broker.password" = "password0"\n);\n')),(0,n.kt)("p",{parentName:"li"},"Spark related parameters are as follows:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"spark.master: Required, currently supports yarn, spark://host:port."),(0,n.kt)("li",{parentName:"ul"},"spark.submit.deployMode: The deployment mode of the Spark program, required, supports both cluster and client."),(0,n.kt)("li",{parentName:"ul"},"spark.hadoop.yarn.resourcemanager.address: Required when master is yarn."),(0,n.kt)("li",{parentName:"ul"},"spark.hadoop.fs.defaultFS: Required when master is yarn."),(0,n.kt)("li",{parentName:"ul"},"Other parameters are optional, refer to ",(0,n.kt)("a",{parentName:"li",href:"http://spark.apache.org/docs/latest/configuration.html"},"here"))))),(0,n.kt)("p",null,"   Working_dir and broker need to be specified when Spark is used for ETL. described as follows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"working_dir: The directory used by the ETL. Required when spark is used as an ETL resource. For example: hdfs://host:port/tmp/doris."),(0,n.kt)("li",{parentName:"ul"},"broker: broker name. Required when spark is used as an ETL resource. Configuration needs to be done in advance using the ",(0,n.kt)("inlineCode",{parentName:"li"},"ALTER SYSTEM ADD BROKER")," command."),(0,n.kt)("li",{parentName:"ul"},"broker.property_key: The authentication information that the broker needs to specify when reading the intermediate file generated by ETL.")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create an ODBC resource"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE EXTERNAL RESOURCE `oracle_odbc`\nPROPERTIES (\n"type" = "odbc_catalog",\n"host" = "192.168.0.1",\n"port" = "8086",\n"user" = "test",\n"password" = "test",\n"database" = "test",\n"odbc_type" = "oracle",\n"driver" = "Oracle 19 ODBC driver"\n);\n')),(0,n.kt)("p",{parentName:"li"},"The relevant parameters of ODBC are as follows:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"hosts: IP address of the external database"),(0,n.kt)("li",{parentName:"ul"},"driver: The driver name of the ODBC appearance, which must be the same as the Driver name in be/conf/odbcinst.ini."),(0,n.kt)("li",{parentName:"ul"},"odbc_type: the type of the external database, currently supports oracle, mysql, postgresql"),(0,n.kt)("li",{parentName:"ul"},"user: username of the foreign database"),(0,n.kt)("li",{parentName:"ul"},"password: the password information of the corresponding user"),(0,n.kt)("li",{parentName:"ul"},"charset: connection charset"),(0,n.kt)("li",{parentName:"ul"},"There is also support for implementing custom parameters per ODBC Driver, see the description of the corresponding ODBC Driver"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create S3 resource"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE RESOURCE "remote_s3"\nPROPERTIES\n(\n   "type" = "s3",\n   "s3.endpoint" = "bj.s3.com",\n   "s3.region" = "bj",\n   "s3.access_key" = "bbb",\n   "s3.secret_key" = "aaaa",\n   -- the followings are optional\n   "s3.connection.maximum" = "50",\n   "s3.connection.request.timeout" = "3000",\n   "s3.connection.timeout" = "1000"\n);\n')),(0,n.kt)("p",{parentName:"li"},"If S3 resource is used for ",(0,n.kt)("a",{parentName:"p",href:"../../../../../docs/advanced/cold_hot_separation.md"},"cold hot separation"),", we should add more required fields."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE RESOURCE "remote_s3"\nPROPERTIES\n(\n   "type" = "s3",\n   "s3.endpoint" = "bj.s3.com",\n   "s3.region" = "bj",\n   "s3.access_key" = "bbb",\n   "s3.secret_key" = "aaaa",\n   -- required by cooldown\n   "s3.root.path" = "/path/to/root",\n   "s3.bucket" = "test-bucket"\n);\n')),(0,n.kt)("p",{parentName:"li"},"S3 related parameters are as follows:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Required parameters",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"s3.endpoint"),": s3 endpoint"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"s3.region"),":s3 region"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"s3.root.path"),": s3 root directory"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"s3.access_key"),": s3 access key"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"s3.secret_key"),": s3 secret key"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"s3.bucket"),"\uff1as3 bucket"))),(0,n.kt)("li",{parentName:"ul"},"optional parameter",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"s3.connection.maximum"),": the maximum number of s3 connections, the default is 50"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"s3.connection.request.timeout"),": s3 request timeout, in milliseconds, the default is 3000"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"s3.connection.timeout"),": s3 connection timeout, in milliseconds, the default is 1000"))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create JDBC resource"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE RESOURCE mysql_resource PROPERTIES (\n   "type"="jdbc",\n   "user"="root",\n   "password"="123456",\n   "jdbc_url" = "jdbc:mysql://127.0.0.1:3316/doris_test?useSSL=false",\n   "driver_url" = "https://doris-community-test-1308700295.cos.ap-hongkong.myqcloud.com/jdbc_driver/mysql-connector-java-8.0.25.jar",\n"driver_class" = "com.mysql.cj.jdbc.Driver"\n);\n')),(0,n.kt)("p",{parentName:"li"},"JDBC related parameters are as follows:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"user\uff1aThe username used to connect to the database"),(0,n.kt)("li",{parentName:"ul"},"password\uff1aThe password used to connect to the database"),(0,n.kt)("li",{parentName:"ul"},"jdbc_url: The identifier used to connect to the specified database"),(0,n.kt)("li",{parentName:"ul"},"driver_url: The url of JDBC driver package"),(0,n.kt)("li",{parentName:"ul"},"driver_class: The class of JDBC driver"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create HDFS resource"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE RESOURCE hdfs_resource PROPERTIES (\n   "type"="hdfs",\n   "username"="user",\n   "password"="passwd",\n   "dfs.nameservices" = "my_ha",\n   "dfs.ha.namenodes.my_ha" = "my_namenode1, my_namenode2",\n   "dfs.namenode.rpc-address.my_ha.my_namenode1" = "nn1_host:rpc_port",\n   "dfs.namenode.rpc-address.my_ha.my_namenode2" = "nn2_host:rpc_port",\n   "dfs.client.failover.proxy.provider" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n);\n')),(0,n.kt)("p",{parentName:"li"},"HDFS related parameters are as follows:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"fs.defaultFS: namenode address and port"),(0,n.kt)("li",{parentName:"ul"},"username: hdfs username"),(0,n.kt)("li",{parentName:"ul"},"dfs.nameservices: if hadoop enable HA, please set fs nameservice. See hdfs-site.xml"),(0,n.kt)("li",{parentName:"ul"},"dfs.ha.namenodes.","[nameservice ID]","\uff1aunique identifiers for each NameNode in the nameservice. See hdfs-site.xml"),(0,n.kt)("li",{parentName:"ul"},"dfs.namenode.rpc-address.","[nameservice ID]",".","[name node ID]","`\uff1athe fully-qualified RPC address for each NameNode to listen on. See hdfs-site.xml"),(0,n.kt)("li",{parentName:"ul"},"dfs.client.failover.proxy.provider.","[nameservice ID]","\uff1athe Java class that HDFS clients use to contact the Active NameNode, usually it is org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create HMS resource"),(0,n.kt)("p",{parentName:"li"},"HMS resource is used to create ",(0,n.kt)("a",{parentName:"p",href:"/docs/lakehouse/multi-catalog/"},"hms catalog")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE RESOURCE hms_resource PROPERTIES (\n   'type'='hms',\n   'hive.metastore.uris' = 'thrift://127.0.0.1:7004',\n   'dfs.nameservices'='HANN',\n   'dfs.ha.namenodes.HANN'='nn1,nn2',\n   'dfs.namenode.rpc-address.HANN.nn1'='nn1_host:rpc_port',\n   'dfs.namenode.rpc-address.HANN.nn2'='nn2_host:rpc_port',\n   'dfs.client.failover.proxy.provider.HANN'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider'\n);\n")),(0,n.kt)("p",{parentName:"li"},"HMS related parameters are as follows:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"hive.metastore.uris: hive metastore server address\nOptional:"),(0,n.kt)("li",{parentName:"ul"},"dfs.*: If hive data is on hdfs, HDFS resource parameters should be added, or copy hive-site.xml into fe/conf."),(0,n.kt)("li",{parentName:"ul"},"s3.*: If hive data is on s3, S3 resource parameters should be added. If using ",(0,n.kt)("a",{parentName:"li",href:"https://www.aliyun.com/product/bigdata/dlf"},"Aliyun Data Lake Formation"),", copy hive-site.xml into fe/conf."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create ES resource"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE RESOURCE es_resource PROPERTIES (\n   "type"="es",\n   "hosts"="http://127.0.0.1:29200",\n   "nodes_discovery"="false",\n   "enable_keyword_sniff"="true"\n);\n')),(0,n.kt)("p",{parentName:"li"},"ES related parameters are as follows:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"hosts: ES Connection Address, maybe one or more node, load-balance is also accepted"),(0,n.kt)("li",{parentName:"ul"},"user: username for ES"),(0,n.kt)("li",{parentName:"ul"},"password: password for the user"),(0,n.kt)("li",{parentName:"ul"},"enable_docvalue_scan: whether to enable ES/Lucene column storage to get the value of the query field, the default is true"),(0,n.kt)("li",{parentName:"ul"},"enable_keyword_sniff: Whether to probe the string segmentation type text.fields in ES, query by keyword (the default is true, false matches the content after the segmentation)"),(0,n.kt)("li",{parentName:"ul"},"nodes_discovery: Whether or not to enable ES node discovery, the default is true. In network isolation, set this parameter to false. Only the specified node is connected"),(0,n.kt)("li",{parentName:"ul"},"http_ssl_enabled: Whether ES cluster enables https access mode, the current FE/BE implementation is to trust all")))),(0,n.kt)("h3",{id:"keywords"},"Keywords"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"CREATE, RESOURCE\n")),(0,n.kt)("h3",{id:"best-practice"},"Best Practice"))}c.isMDXComponent=!0}}]);