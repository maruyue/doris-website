"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[44346],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>h});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(a),m=r,h=c["".concat(p,".").concat(m)]||c[m]||g[m]||i;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},923424:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(58168),r=(a(296540),a(15680));const i={title:"FAQ About Multi-catalog",language:"en"},o=void 0,l={unversionedId:"lakehouse/database/(delete)faq-multi-catalog",id:"version-2.0/lakehouse/database/(delete)faq-multi-catalog",title:"FAQ About Multi-catalog",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/lakehouse/database/(delete)faq-multi-catalog.md",sourceDirName:"lakehouse/database",slug:"/lakehouse/database/(delete)faq-multi-catalog",permalink:"/docs/2.0/lakehouse/database/(delete)faq-multi-catalog",draft:!1,tags:[],version:"2.0",frontMatter:{title:"FAQ About Multi-catalog",language:"en"}},p={},s=[{value:"HDFS",id:"hdfs",level:2}],d={toc:s},c="wrapper";function g(e){let{components:t,...a}=e;return(0,r.yg)(c,(0,n.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"faq"},"FAQ"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"What to do with errors such as  ",(0,r.yg)("inlineCode",{parentName:"p"},"failed to get schema")," and  ",(0,r.yg)("inlineCode",{parentName:"p"},"Storage schema reading not supported"),"  when accessing Icerberg tables via Hive Metastore?"),(0,r.yg)("p",{parentName:"li"},"To fix this, please place the Jar file package of ",(0,r.yg)("inlineCode",{parentName:"p"},"iceberg")," runtime in the ",(0,r.yg)("inlineCode",{parentName:"p"},"lib/")," directory of Hive."),(0,r.yg)("p",{parentName:"li"},"And configure as follows in  ",(0,r.yg)("inlineCode",{parentName:"p"},"hive-site.xml")," :"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"metastore.storage.schema.reader.impl=org.apache.hadoop.hive.metastore.SerDeStorageSchemaReader\n")),(0,r.yg)("p",{parentName:"li"},"After configuring, please restart Hive Metastore.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"What to do with the ",(0,r.yg)("inlineCode",{parentName:"p"},"GSS initiate failed")," error when connecting to Hive Metastore with Kerberos authentication?"),(0,r.yg)("p",{parentName:"li"},"Usually it is caused by incorrect Kerberos authentication information, you can troubleshoot by the following steps:"),(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"In versions before  1.2.1, the libhdfs3 library that Doris depends on does not enable gsasl. Please update to a version later than 1.2.2.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Confirm that the correct keytab and principal are set for each component, and confirm that the keytab file exists on all FE and BE nodes."),(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"hadoop.kerberos.keytab"),"/",(0,r.yg)("inlineCode",{parentName:"li"},"hadoop.kerberos.principal"),": for Hadoop HDFS"),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"hive.metastore.kerberos.principal"),": for hive metastore."))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Try to replace the IP in the principal with a domain name (do not use the default ",(0,r.yg)("inlineCode",{parentName:"p"},"_HOST")," placeholder)")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Confirm that the ",(0,r.yg)("inlineCode",{parentName:"p"},"/etc/krb5.conf")," file exists on all FE and BE nodes.")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"What to do with the",(0,r.yg)("inlineCode",{parentName:"p"},"java.lang.VerifyError: xxx")," error when accessing HDFS 3.x?"),(0,r.yg)("p",{parentName:"li"},"Doris 1.2.1 and the older versions rely on Hadoop 2.8. Please update Hadoop to 2.10.2 or update Doris to 1.2.2 or newer.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"An error is reported when using KMS to access HDFS: ",(0,r.yg)("inlineCode",{parentName:"p"},"java.security.InvalidKeyException: Illegal key size")),(0,r.yg)("p",{parentName:"li"},"Upgrade the JDK version to a version >= Java 8 u162. Or download and install the JCE Unlimited Strength Jurisdiction Policy Files corresponding to the JDK.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"When querying a table in ORC format, FE reports an error ",(0,r.yg)("inlineCode",{parentName:"p"},"Could not obtain block")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"Caused by: java.lang.NoSuchFieldError: types")),(0,r.yg)("p",{parentName:"li"},"For ORC files, by default, FE will access HDFS to obtain file information and split files. In some cases, FE may not be able to access HDFS. It can be solved by adding the following parameters:"),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},'"hive.exec.orc.split.strategy" = "BI"')),(0,r.yg)("p",{parentName:"li"},"Other options: HYBRID (default), ETL.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"An error is reported when connecting to SQLServer through JDBC Catalog: ",(0,r.yg)("inlineCode",{parentName:"p"},"unable to find valid certification path to requested target")),(0,r.yg)("p",{parentName:"li"},"Please add ",(0,r.yg)("inlineCode",{parentName:"p"},"trustServerCertificate=true")," option in ",(0,r.yg)("inlineCode",{parentName:"p"},"jdbc_url"),".")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"When connecting to the MySQL database through the JDBC Catalog, the Chinese characters are garbled, or the Chinese character condition query is incorrect"),(0,r.yg)("p",{parentName:"li"},"Please add ",(0,r.yg)("inlineCode",{parentName:"p"},"useUnicode=true&characterEncoding=utf-8")," in ",(0,r.yg)("inlineCode",{parentName:"p"},"jdbc_url")),(0,r.yg)("blockquote",{parentName:"li"},(0,r.yg)("p",{parentName:"blockquote"},"Note: After version 1.2.3, these parameters will be automatically added when using JDBC Catalog to connect to the MySQL database."))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"An error is reported when connecting to the MySQL database through the JDBC Catalog: ",(0,r.yg)("inlineCode",{parentName:"p"},"Establishing SSL connection without server's identity verification is not recommended")),(0,r.yg)("p",{parentName:"li"},"Please add ",(0,r.yg)("inlineCode",{parentName:"p"},"useSSL=true")," in ",(0,r.yg)("inlineCode",{parentName:"p"},"jdbc_url"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"An error is reported when connecting Hive Catalog: ",(0,r.yg)("inlineCode",{parentName:"p"},"Caused by: java.lang.NullPointerException")),(0,r.yg)("p",{parentName:"li"},"If there is stack trace in fe.log:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"Caused by: java.lang.NullPointerException\n    at org.apache.hadoop.hive.ql.security.authorization.plugin.AuthorizationMetaStoreFilterHook.getFilteredObjects(AuthorizationMetaStoreFilterHook.java:78) ~[hive-exec-3.1.3-core.jar:3.1.3]\n    at org.apache.hadoop.hive.ql.security.authorization.plugin.AuthorizationMetaStoreFilterHook.filterDatabases(AuthorizationMetaStoreFilterHook.java:55) ~[hive-exec-3.1.3-core.jar:3.1.3]\n    at org.apache.hadoop.hive.metastore.HiveMetaStoreClient.getAllDatabases(HiveMetaStoreClient.java:1548) ~[doris-fe.jar:3.1.3]\n    at org.apache.hadoop.hive.metastore.HiveMetaStoreClient.getAllDatabases(HiveMetaStoreClient.java:1542) ~[doris-fe.jar:3.1.3]\n    at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method) ~[?:1.8.0_181]\n")),(0,r.yg)("p",{parentName:"li"},"Try adding ",(0,r.yg)("inlineCode",{parentName:"p"},'"metastore.filter.hook" = "org.apache.hadoop.hive.metastore.DefaultMetaStoreFilterHookImpl"')," in ",(0,r.yg)("inlineCode",{parentName:"p"},"create catalog")," statement.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"An error is reported when connecting to the Hive database through the Hive Catalog: ",(0,r.yg)("inlineCode",{parentName:"p"},"RemoteException: SIMPLE authentication is not enabled. Available: [TOKEN, KERBEROS]")),(0,r.yg)("p",{parentName:"li"},"If both ",(0,r.yg)("inlineCode",{parentName:"p"},"show databases")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"show tables")," are OK, and the above error occurs when querying, we need to perform the following two operations:"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Core-site.xml and hdfs-site.xml need to be placed in the fe/conf and be/conf directories"),(0,r.yg)("li",{parentName:"ul"},"The BE node executes the kinit of Kerberos, restarts the BE, and then executes the query."))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"If the ",(0,r.yg)("inlineCode",{parentName:"p"},"show tables")," is normal after creating the Hive Catalog, but the query report ",(0,r.yg)("inlineCode",{parentName:"p"},"java.net.UnknownHostException: xxxxx")),(0,r.yg)("p",{parentName:"li"},"Add a property in CATALOG:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"'fs.defaultFS' = 'hdfs://<your_nameservice_or_actually_HDFS_IP_and_port>'\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"The values of the partition fields in the hudi table can be found on hive, but they cannot be found on doris."),(0,r.yg)("p",{parentName:"li"},"Doris and hive currently query hudi differently. Doris needs to add partition fields to the avsc file of the hudi table structure. If not added, it will cause Doris to query partition_ Val is empty (even if home. datasource. live_sync. partition_fields=partition_val is set)"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'{\n    "type": "record",\n    "name": "record",\n    "fields": [{\n        "name": "partition_val",\n        "type": [\n            "null",\n            "string"\n            ],\n        "doc": "Preset partition field, empty string when not partitioned",\n        "default": null\n        },\n        {\n        "name": "name",\n        "type": "string",\n        "doc": "\u540d\u79f0"\n        },\n        {\n        "name": "create_time",\n        "type": "string",\n        "doc": "\u521b\u5efa\u65f6\u95f4"\n        }\n    ]\n}\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"The table in orc format of Hive 1.x may encounter system column names such as ",(0,r.yg)("inlineCode",{parentName:"p"},"_col0"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"_col1"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"_col2"),"... in the underlying orc file schema, which need to be specified in the catalog configuration. Add ",(0,r.yg)("inlineCode",{parentName:"p"},"hive.version")," to 1.x.x so that it will use the column names in the hive table for mapping."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG hive PROPERTIES (\n    'hive.version' = '1.x.x'\n);\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"When using JDBC Catalog to synchronize MySQL data to Doris, the date data synchronization error occurs. It is necessary to check whether the MySQL version corresponds to the MySQL driver package. For example, the driver com.mysql.cj.jdbc.Driver is required for MySQL8 and above."),(0,r.yg)("p",{parentName:"li"},"Starting from version 2.0.2, this file can be placed in BE's ",(0,r.yg)("inlineCode",{parentName:"p"},"custom_lib/")," directory (if it does not exist, just create it manually) to prevent the file from being lost due to the replacement of the lib directory when upgrading the cluster."))),(0,r.yg)("h2",{id:"hdfs"},"HDFS"),(0,r.yg)("ol",{start:15},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"If an error is reported while configuring Kerberos in the catalog: ",(0,r.yg)("inlineCode",{parentName:"p"},"SIMPLE authentication is not enabled. Available:[TOKEN, KERBEROS]"),"."),(0,r.yg)("p",{parentName:"li"},"Need to put ",(0,r.yg)("inlineCode",{parentName:"p"},"core-site.xml")," to the ",(0,r.yg)("inlineCode",{parentName:"p"},'"${DORIS_HOME}/be/conf"')," directory."),(0,r.yg)("p",{parentName:"li"},"If an error is reported while accessing HDFS: ",(0,r.yg)("inlineCode",{parentName:"p"},"No common protection layer between client and server"),", check the ",(0,r.yg)("inlineCode",{parentName:"p"},"hadoop.rpc.protection")," on the client and server to make them consistent."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'    <?xml version="1.0" encoding="UTF-8"?>\n    <?xml-stylesheet type="text/xsl" href="configuration.xsl"?>\n    \n    <configuration>\n    \n        <property>\n            <name>hadoop.security.authentication</name>\n            <value>kerberos</value>\n        </property>\n    \n    </configuration>\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"The solutions when configuring Kerberos in the catalog and encounter an error: ",(0,r.yg)("inlineCode",{parentName:"p"},"Unable to obtain password from user"),"."),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"The principal used must exist in the klist, use ",(0,r.yg)("inlineCode",{parentName:"li"},"klist -kt your.keytab")," to check."),(0,r.yg)("li",{parentName:"ul"},"Ensure the catalog configuration correct, such as missing the ",(0,r.yg)("inlineCode",{parentName:"li"},"yarn.resourcemanager.principal"),"."),(0,r.yg)("li",{parentName:"ul"},"If the preceding checks are correct, the JDK version installed by yum or other package-management utility in the current system maybe have an unsupported encryption algorithm. It is recommended to install JDK by yourself and set ",(0,r.yg)("inlineCode",{parentName:"li"},"JAVA_HOME")," environment variable."))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"If an error is reported while querying the catalog with Kerberos: ",(0,r.yg)("inlineCode",{parentName:"p"},"GSSException: No valid credentials provided (Mechanism level: Failed to find any Kerberos Ticket)"),"."),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Restarting FE and BE can solve the problem in most cases. "),(0,r.yg)("li",{parentName:"ul"},"Before the restart all the nodes, can put ",(0,r.yg)("inlineCode",{parentName:"li"},"-Djavax.security.auth.useSubjectCredsOnly=false")," to the ",(0,r.yg)("inlineCode",{parentName:"li"},"JAVA_OPTS")," in ",(0,r.yg)("inlineCode",{parentName:"li"},'"${DORIS_HOME}/be/conf/be.conf"'),", which can obtain credentials through the underlying mechanism, rather than through the application."),(0,r.yg)("li",{parentName:"ul"},"Get more solutions to common JAAS errors from the ",(0,r.yg)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/technotes/guides/security/jgss/tutorials/Troubleshooting.html"},"JAAS Troubleshooting"),"."))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"If an error related to the Hive Metastore is reported while querying the catalog: ",(0,r.yg)("inlineCode",{parentName:"p"},"Invalid method name"),"."),(0,r.yg)("p",{parentName:"li"},"Configure the ",(0,r.yg)("inlineCode",{parentName:"p"},"hive.version"),"."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG hive PROPERTIES (\n    'hive.version' = '2.x.x'\n);\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Use Hedged Read to optimize the problem of slow HDFS reading."),(0,r.yg)("p",{parentName:"li"}," In some cases, the high load of HDFS may lead to a long time to read the data on HDFS, thereby slowing down the overall query efficiency. HDFS Client provides Hedged Read.\nThis function can start another read thread to read the same data when a read request exceeds a certain threshold and is not returned, and whichever is returned first will use the result."),(0,r.yg)("p",{parentName:"li"}," This feature can be enabled in two ways:"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Specify in the parameters to create the Catalog:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"create catalog regression properties (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://172.21.16.47:7004',\n    'dfs.client.hedged.read.threadpool.size' = '128',\n    'dfs.client.hedged.read.threshold.millis' = \"500\"\n);\n")),(0,r.yg)("p",{parentName:"li"},"  ",(0,r.yg)("inlineCode",{parentName:"p"},"dfs.client.hedged.read.threadpool.size")," indicates the number of threads used for Hedged Read, which are shared by one HDFS Client. Usually, for an HDFS cluster, BE nodes will share an HDFS Client."),(0,r.yg)("p",{parentName:"li"},"  ",(0,r.yg)("inlineCode",{parentName:"p"},"dfs.client.hedged.read.threshold.millis")," is the read threshold in milliseconds. When a read request exceeds this threshold and is not returned, Hedged Read will be triggered.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Configure parameters in be.conf"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"```\nenable_hdfs_hedged_read = true\nhdfs_hedged_read_thread_num = 128\nhdfs_hedged_read_threshold_time = 500\n```\n\nThis method will enable Hedged Read globally on BE nodes (not enabled by default). And ignore the Hedged Read property set when creating the Catalog.\n")),(0,r.yg)("p",{parentName:"li"},"After enabling it, you can see related parameters in Query Profile:"),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"TotalHedgedRead"),": The number of Hedged Reads initiated."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"HedgedReadWins"),": The number of successful Hedged Reads (numbers initiated and returned faster than the original request)"),(0,r.yg)("p",{parentName:"li"},"Note that the value here is the cumulative value of a single HDFS Client, not the value of a single query. The same HDFS Client will be reused by multiple queries."))))))}g.isMDXComponent=!0}}]);