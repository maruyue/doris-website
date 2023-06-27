"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[87683],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),h=r,u=d["".concat(s,".").concat(h)]||d[h]||m[h]||l;return a?n.createElement(u,i(i({ref:t},c),{},{components:a})):n.createElement(u,i({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},58818:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={title:"Multi Catalog",language:"en"},i=void 0,o={unversionedId:"lakehouse/multi-catalog/multi-catalog",id:"lakehouse/multi-catalog/multi-catalog",title:"Multi Catalog",description:"\x3c!--",source:"@site/docs/lakehouse/multi-catalog/multi-catalog.md",sourceDirName:"lakehouse/multi-catalog",slug:"/lakehouse/multi-catalog/",permalink:"/docs/dev/lakehouse/multi-catalog/",draft:!1,tags:[],version:"current",frontMatter:{title:"Multi Catalog",language:"en"},sidebar:"docs",previous:{title:"Doris Join optimization principle",permalink:"/docs/dev/query-acceleration/join-optimization/doris-join-optimization"},next:{title:"Hive",permalink:"/docs/dev/lakehouse/multi-catalog/hive"}},s={},p=[{value:"Basic Concepts",id:"basic-concepts",level:2},{value:"Examples",id:"examples",level:2},{value:"Connect to Hive",id:"connect-to-hive",level:3},{value:"Column Type Mapping",id:"column-type-mapping",level:2},{value:"Privilege Management",id:"privilege-management",level:2},{value:"Database synchronizing management",id:"database-synchronizing-management",level:2},{value:"Metadata Refresh",id:"metadata-refresh",level:2},{value:"Manual Refresh",id:"manual-refresh",level:3},{value:"Automatic Refresh",id:"automatic-refresh",level:3},{value:"Hive Metastore",id:"hive-metastore",level:4},{value:"Timed Refresh",id:"timed-refresh",level:4},{value:"Example",id:"example",level:5}],c={toc:p},d="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"multi-catalog"},"Multi Catalog"),(0,r.kt)("p",null,"Multi-Catalog is designed to make it easier to connect to external data catalogs to enhance Doris's data lake analysis and federated data query capabilities."),(0,r.kt)("p",null,"In older versions of Doris, user data is in a two-tiered structure: database and table. Thus, connections to external catalogs could only be done at the database or table level. For example, users could create a mapping to a table in an external catalog via ",(0,r.kt)("inlineCode",{parentName:"p"},"create external table"),", or to a database via ",(0,r.kt)("inlineCode",{parentName:"p"},"create external database")," . If there were large amounts of databases or tables in the external catalog, users would need to create mappings to them one by one, which could be a heavy workload."),(0,r.kt)("p",null,"With the advent of Multi-Catalog, Doris now has a new three-tiered metadata hierarchy (catalog -> database -> table), which means users can connect to external data at the catalog level. The currently supported external catalogs include:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Apache Hive"),(0,r.kt)("li",{parentName:"ol"},"Apache Iceberg"),(0,r.kt)("li",{parentName:"ol"},"Apache Hudi"),(0,r.kt)("li",{parentName:"ol"},"Elasticsearch"),(0,r.kt)("li",{parentName:"ol"},"JDBC"),(0,r.kt)("li",{parentName:"ol"},"Apache Paimon(Incubating)")),(0,r.kt)("p",null,"Multi-Catalog works as an additional and enhanced external table connection method. It helps users conduct multi-catalog federated queries quickly. "),(0,r.kt)("h2",{id:"basic-concepts"},"Basic Concepts"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Internal Catalog"),(0,r.kt)("p",{parentName:"li"},"Existing databases and tables in Doris are all under the Internal Catalog, which is the default catalog in Doris and cannot be modified or deleted.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"External Catalog"),(0,r.kt)("p",{parentName:"li"},"Users can create an External Catalog using the ",(0,r.kt)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-CATALOG/"},"CREATE CATALOG")," command, and view the existing Catalogs via the ",(0,r.kt)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-CATALOGS/"},"SHOW CATALOGS")," command.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Switch Catalog"),(0,r.kt)("p",{parentName:"li"},"After login, you will enter the Internal Catalog by default. Then, you can view or switch to your target database via ",(0,r.kt)("inlineCode",{parentName:"p"},"SHOW DATABASES")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"USE DB")," . "),(0,r.kt)("p",{parentName:"li"},"Example of switching catalog:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"SWITCH internal;\nSWITCH hive_catalog;\n")),(0,r.kt)("p",{parentName:"li"},"After switching catalog, you can view or switch to your target database in that catalog via ",(0,r.kt)("inlineCode",{parentName:"p"},"SHOW DATABASES")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"USE DB")," . You can view and access data in External Catalogs the same way as doing that in the Internal Catalog."),(0,r.kt)("p",{parentName:"li"},"Doris only supports read-only access to data in External Catalogs currently. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Delete Catalog"),(0,r.kt)("p",{parentName:"li"},"Databases and tables in External Catalogs are for read only, but External Catalogs are deletable via the ",(0,r.kt)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-CATALOG/"},"DROP CATALOG")," command. (The Internal Catalog cannot be deleted.)"),(0,r.kt)("p",{parentName:"li"},"The deletion only means to remove the mapping in Doris to the corresponding catalog. It doesn't change the external catalog itself by all means."))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"connect-to-hive"},"Connect to Hive"),(0,r.kt)("p",null,"The followings are the instruction on how to connect to a Hive catalog using the Catalog feature."),(0,r.kt)("p",null,"For more information about Hive, please see ",(0,r.kt)("a",{parentName:"p",href:"/docs/dev/lakehouse/multi-catalog/hive"},"Hive"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create Catalog"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG hive PROPERTIES (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://172.21.0.1:7004'\n);\n")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Syntax Help: ",(0,r.kt)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-CATALOG/"},"CREATE CATALOG")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"View Catalog"),(0,r.kt)("p",{parentName:"li"},"View existing Catalogs via the ",(0,r.kt)("inlineCode",{parentName:"p"},"SHOW CATALOGS")," command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"mysql> SHOW CATALOGS;\n+-----------+-------------+----------+\n| CatalogId | CatalogName | Type     |\n+-----------+-------------+----------+\n|     10024 | hive        | hms      |\n|         0 | internal    | internal |\n+-----------+-------------+----------+\n")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Syntax Help: ",(0,r.kt)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-CATALOGS/"},"SHOW CATALOGS"))),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"You can view the CREATE CATALOG statement via ",(0,r.kt)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-CREATE-CATALOG/"},"SHOW CREATE CATALOG"),".")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"You can modify the Catalog PROPERTIES via ",(0,r.kt)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-CATALOG/"},"ALTER CATALOG"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Switch Catalog"),(0,r.kt)("p",{parentName:"li"},"Switch to the Hive Catalog using the ",(0,r.kt)("inlineCode",{parentName:"p"},"SWITCH"),"  command, and view the databases in it:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"mysql> SWITCH hive;\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> SHOW DATABASES;\n+-----------+\n| Database  |\n+-----------+\n| default   |\n| random    |\n| ssb100    |\n| tpch1     |\n| tpch100   |\n| tpch1_orc |\n+-----------+\n")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Syntax Help: ",(0,r.kt)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/sql-manual/sql-reference/Utility-Statements/SWITCH/"},"SWITCH")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use the Catalog"),(0,r.kt)("p",{parentName:"li"},"After switching to the Hive Catalog, you can use the relevant features."),(0,r.kt)("p",{parentName:"li"},"For example, you can switch to Database tpch100, and view the tables in it:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"mysql> USE tpch100;\nDatabase changed\n\nmysql> SHOW TABLES;\n+-------------------+\n| Tables_in_tpch100 |\n+-------------------+\n| customer          |\n| lineitem          |\n| nation            |\n| orders            |\n| part              |\n| partsupp          |\n| region            |\n| supplier          |\n+-------------------+\n")),(0,r.kt)("p",{parentName:"li"},"You can view the schema of Table lineitem:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"mysql> DESC lineitem;\n+-----------------+---------------+------+------+---------+-------+\n| Field           | Type          | Null | Key  | Default | Extra |\n+-----------------+---------------+------+------+---------+-------+\n| l_shipdate      | DATE          | Yes  | true | NULL    |       |\n| l_orderkey      | BIGINT        | Yes  | true | NULL    |       |\n| l_linenumber    | INT           | Yes  | true | NULL    |       |\n| l_partkey       | INT           | Yes  | true | NULL    |       |\n| l_suppkey       | INT           | Yes  | true | NULL    |       |\n| l_quantity      | DECIMAL(15,2) | Yes  | true | NULL    |       |\n| l_extendedprice | DECIMAL(15,2) | Yes  | true | NULL    |       |\n| l_discount      | DECIMAL(15,2) | Yes  | true | NULL    |       |\n| l_tax           | DECIMAL(15,2) | Yes  | true | NULL    |       |\n| l_returnflag    | TEXT          | Yes  | true | NULL    |       |\n| l_linestatus    | TEXT          | Yes  | true | NULL    |       |\n| l_commitdate    | DATE          | Yes  | true | NULL    |       |\n| l_receiptdate   | DATE          | Yes  | true | NULL    |       |\n| l_shipinstruct  | TEXT          | Yes  | true | NULL    |       |\n| l_shipmode      | TEXT          | Yes  | true | NULL    |       |\n| l_comment       | TEXT          | Yes  | true | NULL    |       |\n+-----------------+---------------+------+------+---------+-------+\n")),(0,r.kt)("p",{parentName:"li"},"You can perform a query:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"mysql> SELECT l_shipdate, l_orderkey, l_partkey FROM lineitem limit 10;\n+------------+------------+-----------+\n| l_shipdate | l_orderkey | l_partkey |\n+------------+------------+-----------+\n| 1998-01-21 |   66374304 |    270146 |\n| 1997-11-17 |   66374304 |    340557 |\n| 1997-06-17 |   66374400 |   6839498 |\n| 1997-08-21 |   66374400 |  11436870 |\n| 1997-08-07 |   66374400 |  19473325 |\n| 1997-06-16 |   66374400 |   8157699 |\n| 1998-09-21 |   66374496 |  19892278 |\n| 1998-08-07 |   66374496 |   9509408 |\n| 1998-10-27 |   66374496 |   4608731 |\n| 1998-07-14 |   66374592 |  13555929 |\n+------------+------------+-----------+\n")),(0,r.kt)("p",{parentName:"li"},"Or you can conduct a join query:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"mysql> SELECT l.l_shipdate FROM hive.tpch100.lineitem l WHERE l.l_partkey IN (SELECT p_partkey FROM internal.db1.part) LIMIT 10;\n+------------+\n| l_shipdate |\n+------------+\n| 1993-02-16 |\n| 1995-06-26 |\n| 1995-08-19 |\n| 1992-07-23 |\n| 1998-05-23 |\n| 1997-07-12 |\n| 1994-03-06 |\n| 1996-02-07 |\n| 1997-06-01 |\n| 1996-08-23 |\n+------------+\n")),(0,r.kt)("p",{parentName:"li"},"The table is identified in the format of ",(0,r.kt)("inlineCode",{parentName:"p"},"catalog.database.table")," . For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"internal.db1.part"),"  in the above snippet."),(0,r.kt)("p",{parentName:"li"},"If the target table is in the current Database of the current Catalog,  ",(0,r.kt)("inlineCode",{parentName:"p"},"catalog")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"database")," in the format can be omitted."),(0,r.kt)("p",{parentName:"li"},"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT INTO")," command to insert table data from the Hive Catalog into a table in the Internal Catalog. This is how you can ",(0,r.kt)("strong",{parentName:"p"},"import data from External Catalogs to the Internal Catalog"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"mysql> SWITCH internal;\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> USE db1;\nDatabase changed\n\nmysql> INSERT INTO part SELECT * FROM hive.tpch100.part limit 1000;\nQuery OK, 1000 rows affected (0.28 sec)\n{'label':'insert_212f67420c6444d5_9bfc184bf2e7edb8', 'status':'VISIBLE', 'txnId':'4'}\n")))),(0,r.kt)("h2",{id:"column-type-mapping"},"Column Type Mapping"),(0,r.kt)("p",null,"After you create a Catalog, Doris will automatically synchronize the databases and tables from the corresponding external catalog to it. The following shows how Doris maps different types of catalogs and tables."),(0,r.kt)("p",null,"As for types that cannot be mapped to a Doris column type, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"UNION")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"INTERVAL")," , Doris will map them to an UNSUPPORTED type. Here are examples of queries in a table containing UNSUPPORTED types:"),(0,r.kt)("p",null,"Suppose the table is of the following schema:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"k1 INT,\nk2 INT,\nk3 UNSUPPORTED,\nk4 INT\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"select * from table;                // Error: Unsupported type 'UNSUPPORTED_TYPE' in '`k3`\nselect * except(k3) from table;     // Query OK.\nselect k1, k3 from table;           // Error: Unsupported type 'UNSUPPORTED_TYPE' in '`k3`\nselect k1, k4 from table;           // Query OK.\n")),(0,r.kt)("p",null,"You can find more details of the mapping of various data sources (Hive, Iceberg, Hudi, Elasticsearch, and JDBC) in the corresponding pages."),(0,r.kt)("h2",{id:"privilege-management"},"Privilege Management"),(0,r.kt)("p",null,"When using Doris to access the data in the External Catalog, by default, it relies on Doris's own permission access management function."),(0,r.kt)("p",null,"Along with the new Multi-Catalog feature, we also added privilege management at the Catalog level (See ",(0,r.kt)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/admin-manual/privilege-ldap/user-privilege/"},"Privilege Management")," for details)."),(0,r.kt)("p",null,"Users can also specify a custom authentication class through the ",(0,r.kt)("inlineCode",{parentName:"p"},"access_controller.class")," attribute. As specified by:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'"access_controller.class" = "org.apache.doris.catalog.authorizer.RangerHiveAccessControllerFactory"')),(0,r.kt)("p",null,"Then you can use Apache Range to perform authentication management on Hive Catalog. For more information see: ",(0,r.kt)("a",{parentName:"p",href:"/docs/dev/lakehouse/multi-catalog/hive"},"Hive Catalog")),(0,r.kt)("h2",{id:"database-synchronizing-management"},"Database synchronizing management"),(0,r.kt)("p",null,"Setting ",(0,r.kt)("inlineCode",{parentName:"p"},"include_database_list")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"exclude_database_list")," in Catalog properties to specify databases to synchronize."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"include_database_list"),": Only synchronize the specified databases. split with ",(0,r.kt)("inlineCode",{parentName:"p"},","),", default is to synchronize all databases. db name is case sensitive."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"exclude_database_list"),": Specify databases that do not need to synchronize. split with ",(0,r.kt)("inlineCode",{parentName:"p"},","),", default is to synchronize all databases. db name is case sensitive."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"When ",(0,r.kt)("inlineCode",{parentName:"p"},"include_database_list")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"exclude_database_list")," specify overlapping databases, ",(0,r.kt)("inlineCode",{parentName:"p"},"exclude_database_list")," would take effect with higher privilege over ",(0,r.kt)("inlineCode",{parentName:"p"},"include_database_list"),"."),(0,r.kt)("p",{parentName:"blockquote"},"To connect JDBC, these two properties should work with ",(0,r.kt)("inlineCode",{parentName:"p"},"only_specified_database"),", see ",(0,r.kt)("a",{parentName:"p",href:"/docs/dev/lakehouse/multi-catalog/jdbc"},"JDBC")," for more detail.")),(0,r.kt)("h2",{id:"metadata-refresh"},"Metadata Refresh"),(0,r.kt)("h3",{id:"manual-refresh"},"Manual Refresh"),(0,r.kt)("p",null,"By default, changes in metadata of external data sources, including addition or deletion of tables and columns, will not be synchronized into Doris."),(0,r.kt)("p",null,"Users need to manually update the metadata using the  ",(0,r.kt)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/sql-manual/sql-reference/Utility-Statements/REFRESH/"},"REFRESH CATALOG")," command."),(0,r.kt)("h3",{id:"automatic-refresh"},"Automatic Refresh"),(0,r.kt)("h4",{id:"hive-metastore"},"Hive Metastore"),(0,r.kt)("p",null,"Currently, Doris only supports automatic update of metadata in Hive Metastore (HMS). It perceives changes in metadata by the FE node which regularly reads the notification events from HMS. The supported events are as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Event"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Corresponding Update Operation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"CREATE DATABASE"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Create a database in the corresponding catalog.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"DROP DATABASE"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Delete a database in the corresponding catalog.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ALTER DATABASE"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Such alterations mainly include changes in properties, comments, or storage location of databases. They do not affect Doris' queries in External Catalogs so they will not be synchronized.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"CREATE TABLE"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Create a table in the corresponding database.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"DROP TABLE"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Delete a table in the corresponding database, and invalidate the cache of that table.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ALTER TABLE"),(0,r.kt)("td",{parentName:"tr",align:"left"},"If it is a renaming, delete the table of the old name, and then create a new table with the new name; otherwise, invalidate the cache of that table.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ADD PARTITION"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Add a partition to the cached partition list of the corresponding table.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"DROP PARTITION"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Delete a partition from the cached partition list of the corresponding table, and invalidate the cache of that partition.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ALTER PARTITION"),(0,r.kt)("td",{parentName:"tr",align:"left"},"If it is a renaming, delete the partition of the old name, and then create a new partition with the new name; otherwise, invalidate the cache of that partition.")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"After data ingestion, changes in partition tables will follow the ",(0,r.kt)("inlineCode",{parentName:"p"},"ALTER PARTITION")," logic, while those in non-partition tables will follow the ",(0,r.kt)("inlineCode",{parentName:"p"},"ALTER TABLE")," logic."),(0,r.kt)("p",{parentName:"blockquote"},"If changes are conducted on the file system directly instead of through the HMS, the HMS will not generate an event. As a result, such changes will not be perceived by Doris.")),(0,r.kt)("p",null,"The automatic update feature involves the following parameters in fe.conf:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"enable_hms_events_incremental_sync"),": This specifies whether to enable automatic incremental synchronization for metadata, which is disabled by default. "),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"hms_events_polling_interval_ms"),": This specifies the interval between two readings, which is set to 10000 by default. (Unit: millisecond) "),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"hms_events_batch_size_per_rpc"),": This specifies the maximum number of events that are read at a time, which is set to 500 by default.")),(0,r.kt)("p",null,"To enable automatic update(Excluding Huawei MRS), you need to modify the hive-site.xml of HMS and then restart HMS and HiveServer2:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<property>\n    <name>hive.metastore.event.db.notification.api.auth</name>\n    <value>false</value>\n</property>\n<property>\n    <name>hive.metastore.dml.events</name>\n    <value>true</value>\n</property>\n<property>\n    <name>hive.metastore.transactional.event.listeners</name>\n    <value>org.apache.hive.hcatalog.listener.DbNotificationListener</value>\n</property>\n\n")),(0,r.kt)("p",null,"Huawei's MRS needs to change hivemetastore-site.xml and restart HMS and HiveServer2:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<property>\n    <name>metastore.transactional.event.listeners</name>\n    <value>org.apache.hive.hcatalog.listener.DbNotificationListener</value>\n</property>\n")),(0,r.kt)("p",null,"Note: Value is appended with commas separated from the original value, not overwritten.For example, the default configuration for MRS 3.1.0 is"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<property>\n    <name>metastore.transactional.event.listeners</name>\n    <value>com.huawei.bigdata.hive.listener.TableKeyFileManagerListener,org.apache.hadoop.hive.metastore.listener.FileAclListener</value>\n</property>\n")),(0,r.kt)("p",null,"We need to change to"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<property>\n    <name>metastore.transactional.event.listeners</name>\n    <value>com.huawei.bigdata.hive.listener.TableKeyFileManagerListener,org.apache.hadoop.hive.metastore.listener.FileAclListener,org.apache.hive.hcatalog.listener.DbNotificationListener</value>\n</property>\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: To enable automatic update, whether for existing Catalogs or newly created Catalogs, all you need is to set ",(0,r.kt)("inlineCode",{parentName:"p"},"enable_hms_events_incremental_sync")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", and then restart the FE node. You don't need to manually update the metadata before or after the restart.")),(0,r.kt)("h4",{id:"timed-refresh"},"Timed Refresh"),(0,r.kt)("p",null,"When creating a catalog, specify the refresh time parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"metadata_refresh_interval_sec")," in the properties, in seconds. If this parameter is set when creating a catalog, the master node of FE will refresh the catalog regularly according to the parameter value. Three types are currently supported"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"hms: Hive MetaStore\n-es: Elasticsearch"),(0,r.kt)("li",{parentName:"ul"},"jdbc: Standard interface for database access (JDBC)")),(0,r.kt)("h5",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'-- Set the catalog refresh interval to 20 seconds\nCREATE CATALOG es PROPERTIES (\n     "type"="es",\n     "hosts"="http://127.0.0.1:9200",\n     "metadata_refresh_interval_sec"="20"\n);\n')))}m.isMDXComponent=!0}}]);