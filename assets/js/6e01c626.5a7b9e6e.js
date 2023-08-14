"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[76947],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),m=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=m(a),u=o,h=d["".concat(l,".").concat(u)]||d[u]||c[u]||n;return a?r.createElement(h,i(i({ref:t},p),{},{components:a})):r.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var m=2;m<n;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},35988:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>m});var r=a(87462),o=(a(67294),a(3905));const n={title:"Stream Load",language:"en"},i=void 0,s={unversionedId:"data-operate/import/import-way/stream-load-manual",id:"data-operate/import/import-way/stream-load-manual",title:"Stream Load",description:"\x3c!--",source:"@site/docs/data-operate/import/import-way/stream-load-manual.md",sourceDirName:"data-operate/import/import-way",slug:"/data-operate/import/import-way/stream-load-manual",permalink:"/docs/dev/data-operate/import/import-way/stream-load-manual",draft:!1,tags:[],version:"current",frontMatter:{title:"Stream Load",language:"en"},sidebar:"docs",previous:{title:"Spark Load",permalink:"/docs/dev/data-operate/import/import-way/spark-load-manual"},next:{title:"MySql Load",permalink:"/docs/dev/data-operate/import/import-way/mysql-load-manual"}},l={},m=[{value:"Basic Principles",id:"basic-principles",level:2},{value:"Support data format",id:"support-data-format",level:2},{value:"Basic operations",id:"basic-operations",level:2},{value:"Create Load",id:"create-load",level:3},{value:"Use stream load with SQL",id:"use-stream-load-with-sql",level:3},{value:"Return results",id:"return-results",level:3},{value:"Cancel Load",id:"cancel-load",level:3},{value:"View Stream Load",id:"view-stream-load",level:3},{value:"Relevant System Configuration",id:"relevant-system-configuration",level:2},{value:"FE configuration",id:"fe-configuration",level:3},{value:"BE configuration",id:"be-configuration",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Application scenarios",id:"application-scenarios",level:3},{value:"Data volume",id:"data-volume",level:3},{value:"Complete examples",id:"complete-examples",level:3},{value:"Coding with StreamLoad",id:"coding-with-streamload",level:3},{value:"Common Questions",id:"common-questions",level:2},{value:"More Help",id:"more-help",level:2}],p={toc:m},d="wrapper";function c(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"stream-load"},"Stream Load"),(0,o.kt)("p",null,"Stream load is a synchronous way of importing. Users import local files or data streams into Doris by sending HTTP protocol requests. Stream load synchronously executes the import and returns the import result. Users can directly determine whether the import is successful by the return body of the request."),(0,o.kt)("p",null,"Stream load is mainly suitable for importing local files or data from data streams through procedures."),(0,o.kt)("h2",{id:"basic-principles"},"Basic Principles"),(0,o.kt)("p",null,"The following figure shows the main flow of Stream load, omitting some import details."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"                         ^      +\n                         |      |\n                         |      | 1A. User submit load to FE\n                         |      |\n                         |   +--v-----------+\n                         |   | FE           |\n5. Return result to user |   +--+-----------+\n                         |      |\n                         |      | 2. Redirect to BE\n                         |      |\n                         |   +--v-----------+\n                         +---+Coordinator BE| 1B. User submit load to BE\n                             +-+-----+----+-+\n                               |     |    |\n                         +-----+     |    +-----+\n                         |           |          | 3. Distrbute data\n                         |           |          |\n                       +-v-+       +-v-+      +-v-+\n                       |BE |       |BE |      |BE |\n                       +---+       +---+      +---+\n")),(0,o.kt)("p",null,"In Stream load, Doris selects a node as the Coordinator node. This node is responsible for receiving data and distributing data to other data nodes."),(0,o.kt)("p",null,"Users submit import commands through HTTP protocol. If submitted to FE, FE forwards the request to a BE via the HTTP redirect instruction. Users can also submit import commands directly to a specified BE."),(0,o.kt)("p",null,"The final result of the import is returned to the user by Coordinator BE."),(0,o.kt)("h2",{id:"support-data-format"},"Support data format"),(0,o.kt)("p",null,"Stream Load currently supports data formats: CSV (text), JSON"),(0,o.kt)("version",{since:"1.2"},"supports PARQUET and ORC"),(0,o.kt)("h2",{id:"basic-operations"},"Basic operations"),(0,o.kt)("h3",{id:"create-load"},"Create Load"),(0,o.kt)("p",null,"Stream load submits and transfers data through HTTP protocol. Here, the ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," command shows how to submit an import."),(0,o.kt)("p",null,"Users can also operate through other HTTP clients."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl --location-trusted -u user:passwd [-H ""...] -T data.file -XPUT http://fe_host:http_port/api/{db}/{table}/_stream_load\n\nThe properties supported in the header are described in "Load Parameters" below\nThe format is: - H "key1: value1"\n')),(0,o.kt)("p",null,"Examples:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl --location-trusted -u root -T date -H "label:123" http://abc.com:8030/api/test/date/_stream_load\n')),(0,o.kt)("p",null,"The detailed syntax for creating imports helps to execute ",(0,o.kt)("inlineCode",{parentName:"p"},"HELP STREAM LOAD")," view. The following section focuses on the significance of creating some parameters of Stream load."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature parameters")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"user/passwd"),(0,o.kt)("p",{parentName:"li"},"Stream load uses the HTTP protocol to create the imported protocol and signs it through the Basic Access authentication. The Doris system verifies user identity and import permissions based on signatures."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Load Parameters")),(0,o.kt)("p",null,"Stream load uses HTTP protocol, so all parameters related to import tasks are set in the header. The significance of some parameters of the import task parameters of Stream load is mainly introduced below."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"label"),(0,o.kt)("p",{parentName:"li"},"Identity of import task. Each import task has a unique label inside a single database. Label is a user-defined name in the import command. With this label, users can view the execution of the corresponding import task."),(0,o.kt)("p",{parentName:"li"},"Another function of label is to prevent users from importing the same data repeatedly. ",(0,o.kt)("strong",{parentName:"p"},"It is strongly recommended that users use the same label for the same batch of data. This way, repeated requests for the same batch of data will only be accepted once, guaranteeing at-Most-Once")),(0,o.kt)("p",{parentName:"li"},"When the corresponding import operation state of label is CANCELLED, the label can be used again."))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"column_separator"),(0,o.kt)("p",{parentName:"li"},"  Used to specify the column separator in the load file. The default is ",(0,o.kt)("inlineCode",{parentName:"p"},"\\t"),". If it is an invisible character, you need to add ",(0,o.kt)("inlineCode",{parentName:"p"},"\\x")," as a prefix and hexadecimal to indicate the separator."),(0,o.kt)("p",{parentName:"li"},"  For example, the separator ",(0,o.kt)("inlineCode",{parentName:"p"},"\\x01")," of the hive file needs to be specified as ",(0,o.kt)("inlineCode",{parentName:"p"},'-H "column_separator:\\x01"'),"."),(0,o.kt)("p",{parentName:"li"},"  You can use a combination of multiple characters as the column separator.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"line_delimiter"),(0,o.kt)("p",{parentName:"li"}," Used to specify the line delimiter in the load file. The default is ",(0,o.kt)("inlineCode",{parentName:"p"},"\\n"),"."),(0,o.kt)("p",{parentName:"li"}," You can use a combination of multiple characters as the column separator.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"max","_","filter","_","ratio"),(0,o.kt)("p",{parentName:"li"},"The maximum tolerance rate of the import task is 0 by default, and the range of values is 0-1. When the import error rate exceeds this value, the import fails."),(0,o.kt)("p",{parentName:"li"},"If the user wishes to ignore the wrong row, the import can be successful by setting this parameter greater than 0."),(0,o.kt)("p",{parentName:"li"},"The calculation formula is as follows:"),(0,o.kt)("p",{parentName:"li"},"  ",(0,o.kt)("inlineCode",{parentName:"p"},"(dpp.abnorm.ALL / (dpp.abnorm.ALL + dpp.norm.ALL ) ) > max_filter_ratio")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"}," dpp.abnorm.ALL")," denotes the number of rows whose data quality is not up to standard. Such as type mismatch, column mismatch, length mismatch and so on."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"dpp.norm.ALL")," refers to the number of correct data in the import process. The correct amount of data for the import task can be queried by the `",(0,o.kt)("inlineCode",{parentName:"p"},"SHOW LOAD")," command."),(0,o.kt)("p",{parentName:"li"},"The number of rows in the original file = ",(0,o.kt)("inlineCode",{parentName:"p"},"dpp.abnorm.ALL + dpp.norm.ALL"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"where"),(0,o.kt)("p",{parentName:"li"},"  Import the filter conditions specified by the task. Stream load supports filtering of where statements specified for raw data. The filtered data will not be imported or participated in the calculation of filter ratio, but will be counted as ",(0,o.kt)("inlineCode",{parentName:"p"},"num_rows_unselected"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"partitions"),(0,o.kt)("p",{parentName:"li"},"  Partitions information for tables to be imported will not be imported if the data to be imported does not belong to the specified Partition. These data will be included in ",(0,o.kt)("inlineCode",{parentName:"p"},"dpp.abnorm.ALL"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"columns"),(0,o.kt)("p",{parentName:"li"},"  The function transformation configuration of data to be imported includes the sequence change of columns and the expression transformation, in which the expression transformation method is consistent with the query statement."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"Examples of column order transformation: There are three columns of original data (src_c1,src_c2,src_c3), and there are also three columns \uff08dst_c1,dst_c2,dst_c3) in the doris table at present.\nwhen the first column src_c1 of the original file corresponds to the dst_c1 column of the target table, while the second column src_c2 of the original file corresponds to the dst_c2 column of the target table and the third column src_c3 of the original file corresponds to the dst_c3 column of the target table,which is written as follows:\ncolumns: dst_c1, dst_c2, dst_c3\n\nwhen the first column src_c1 of the original file corresponds to the dst_c2 column of the target table, while the second column src_c2 of the original file corresponds to the dst_c3 column of the target table and the third column src_c3 of the original file corresponds to the dst_c1 column of the target table,which is written as follows:\ncolumns: dst_c2, dst_c3, dst_c1\n\nExample of expression transformation: There are two columns in the original file and two columns in the target table (c1, c2). However, both columns in the original file need to be transformed by functions to correspond to the two columns in the target table.\ncolumns: tmp_c1, tmp_c2, c1 = year(tmp_c1), c2 = mouth(tmp_c2)\nTmp_* is a placeholder, representing two original columns in the original file.\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"format"),(0,o.kt)("p",{parentName:"li"},"Specify the import data format, support csv, json, the default is csv"),(0,o.kt)("version",{since:"1.2"},"supports `csv_with_names` (csv file line header filter), `csv_with_names_and_types` (csv file first two lines filter), parquet, orc")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"exec","_","mem","_","limit"),(0,o.kt)("p",{parentName:"li"},"  Memory limit. Default is 2GB. Unit is Bytes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"merge","_","type"),(0,o.kt)("p",{parentName:"li"},"   The type of data merging supports three types: APPEND, DELETE, and MERGE. APPEND is the default value, which means that all this batch of data needs to be appended to the existing data. DELETE means to delete all rows with the same key as this batch of data. MERGE semantics Need to be used in conjunction with the delete condition, which means that the data that meets the delete condition is processed according to DELETE semantics and the rest is processed according to APPEND semantics")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"two","_","phase","_","commit"),(0,o.kt)("p",{parentName:"li"},"Stream load import can enable two-stage transaction commit mode: in the stream load process, the data is written and the information is returned to the user. At this time, the data is invisible and the transaction status is ",(0,o.kt)("inlineCode",{parentName:"p"},"PRECOMMITTED"),". After the user manually triggers the commit operation, the data is visible.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"enable_profile"),(0,o.kt)("version",{since:"1.2.7"},"When `enable_profile` is true, the Stream Load profile will be printed to logs (be.INFO)."),(0,o.kt)("p",{parentName:"li"},"Example\uff1a"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Initiate a stream load pre-commit operation")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl  --location-trusted -u user:passwd -H "two_phase_commit:true" -T test.txt http://fe_host:http_port/api/{db}/{table}/_stream_load\n{\n    "TxnId": 18036,\n    "Label": "55c8ffc9-1c40-4d51-b75e-f2265b3602ef",\n    "TwoPhaseCommit": "true",\n    "Status": "Success",\n    "Message": "OK",\n    "NumberTotalRows": 100,\n    "NumberLoadedRows": 100,\n    "NumberFilteredRows": 0,\n    "NumberUnselectedRows": 0,\n    "LoadBytes": 1031,\n    "LoadTimeMs": 77,\n    "BeginTxnTimeMs": 1,\n    "StreamLoadPutTimeMs": 1,\n    "ReadDataTimeMs": 0,\n    "WriteDataTimeMs": 58,\n    "CommitAndPublishTimeMs": 0\n}\n')),(0,o.kt)("ol",{parentName:"li",start:2},(0,o.kt)("li",{parentName:"ol"},"Trigger the commit operation on the transaction.\nNote 1) requesting to fe and be both works\nNote 2) ",(0,o.kt)("inlineCode",{parentName:"li"},"{table}")," in url can be omit when commit")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X PUT --location-trusted -u user:passwd  -H "txn_id:18036" -H "txn_operation:commit"  http://fe_host:http_port/api/{db}/{table}/_stream_load_2pc\n{\n    "status": "Success",\n    "msg": "transaction [18036] commit successfully."\n}\n')),(0,o.kt)("ol",{parentName:"li",start:3},(0,o.kt)("li",{parentName:"ol"},"Trigger an abort operation on a transaction\nNote 1) requesting to fe and be both works\nNote 2) ",(0,o.kt)("inlineCode",{parentName:"li"},"{table}")," in url can be omit when abort")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X PUT --location-trusted -u user:passwd  -H "txn_id:18037" -H "txn_operation:abort"  http://fe_host:http_port/api/{db}/{table}/_stream_load_2pc\n{\n    "status": "Success",\n    "msg": "transaction [18037] abort successfully."\n}\n')))),(0,o.kt)("h3",{id:"use-stream-load-with-sql"},"Use stream load with SQL"),(0,o.kt)("p",null,"You can add a ",(0,o.kt)("inlineCode",{parentName:"p"},"sql")," parameter to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Header")," to replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"column_separator"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"line_delimiter"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"where"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"columns")," in the previous parameter, which is convenient to use."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl --location-trusted -u user:passwd \n[-H "sql: ${load_sql}"...] \n-T data.file \n-XPUT http://fe_host:http_port/api/{db}/{table}/_stream_load_with_sql\n\n\n# -- load_sql\n# insert into db.table (col, ...) select stream_col, ... from stream("property1"="value1");\n\n# stream\n# (\n#     "column_separator" = ",",\n#     "format" = "CSV",\n#     ...\n# )\n')),(0,o.kt)("p",null,"Examples\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl  --location-trusted -u root: -T test.csv  -H "sql:insert into demo.example_tbl_1(user_id, age, cost) select c1, c4, c7 * 2 from stream("format" = "CSV", "column_separator" = "," ) where age >= 30"  http://127.0.0.1:28030/api/demo/example_tbl_1/_stream_load_with_sql\n')),(0,o.kt)("h3",{id:"return-results"},"Return results"),(0,o.kt)("p",null,"Since Stream load is a synchronous import method, the result of the import is directly returned to the user by creating the return value of the import."),(0,o.kt)("p",null,"Examples:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "TxnId": 1003,\n    "Label": "b6f3bc78-0d2c-45d9-9e4c-faa0a0149bee",\n    "Status": "Success",\n    "ExistingJobStatus": "FINISHED", // optional\n    "Message": "OK",\n    "NumberTotalRows": 1000000,\n    "NumberLoadedRows": 1000000,\n    "NumberFilteredRows": 1,\n    "NumberUnselectedRows": 0,\n    "LoadBytes": 40888898,\n    "LoadTimeMs": 2144,\n    "BeginTxnTimeMs": 1,\n    "StreamLoadPutTimeMs": 2,\n    "ReadDataTimeMs": 325,\n    "WriteDataTimeMs": 1933,\n    "CommitAndPublishTimeMs": 106,\n    "ErrorURL": "http://192.168.1.1:8042/api/_load_error_log?file=__shard_0/error_log_insert_stmt_db18266d4d9b4ee5-abb00ddd64bdf005_db18266d4d9b4ee5_abb00ddd64bdf005"\n}\n')),(0,o.kt)("p",null,"The following main explanations are given for the Stream load import result parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"TxnId: The imported transaction ID. Users do not perceive.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Label: Import Label. User specified or automatically generated by the system.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Status: Import completion status."),(0,o.kt)("p",{parentName:"li"},'"Success": Indicates successful import.'),(0,o.kt)("p",{parentName:"li"},'"Publish Timeout": This state also indicates that the import has been completed, except that the data may be delayed and visible without retrying.'),(0,o.kt)("p",{parentName:"li"},'"Label Already Exists": Label duplicate, need to be replaced Label.'),(0,o.kt)("p",{parentName:"li"},'"Fail": Import failed.')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"ExistingJobStatus: The state of the load job corresponding to the existing Label."),(0,o.kt)("p",{parentName:"li"},'  This field is displayed only when the status is "Label Already Exists". The user can know the status of the load job corresponding to Label through this state. "RUNNING" means that the job is still executing, and "FINISHED" means that the job is successful.')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Message: Import error messages.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"NumberTotalRows: Number of rows imported for total processing.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"NumberLoadedRows: Number of rows successfully imported.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"NumberFilteredRows: Number of rows that do not qualify for data quality.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"NumberUnselectedRows: Number of rows filtered by where condition.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"LoadBytes: Number of bytes imported.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"LoadTimeMs: Import completion time. Unit milliseconds.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"BeginTxnTimeMs: The time cost for RPC to Fe to begin a transaction, Unit milliseconds.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"StreamLoadPutTimeMs: The time cost for RPC to Fe to get a stream load plan, Unit milliseconds.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"ReadDataTimeMs: Read data time, Unit milliseconds.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"WriteDataTimeMs: Write data time, Unit milliseconds.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"CommitAndPublishTimeMs: The time cost for RPC to Fe to commit and publish a transaction, Unit milliseconds.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"ErrorURL: If you have data quality problems, visit this URL to see specific error lines."))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: Since Stream load is a synchronous import mode, import information will not be recorded in Doris system. Users cannot see Stream load asynchronously by looking at import commands. You need to listen for the return value of the create import request to get the import result.")),(0,o.kt)("h3",{id:"cancel-load"},"Cancel Load"),(0,o.kt)("p",null,"Users can't cancel Stream load manually. Stream load will be cancelled automatically by the system after a timeout or import error."),(0,o.kt)("h3",{id:"view-stream-load"},"View Stream Load"),(0,o.kt)("p",null,"Users can view completed stream load tasks through ",(0,o.kt)("inlineCode",{parentName:"p"},"show stream load"),"."),(0,o.kt)("p",null,"By default, BE does not record Stream Load records. If you want to view records that need to be enabled on BE, the configuration parameter is: ",(0,o.kt)("inlineCode",{parentName:"p"},"enable_stream_load_record=true"),". For details, please refer to ","[BE Configuration Items]","(",(0,o.kt)("a",{parentName:"p",href:"https://doris.apache."},"https://doris.apache.")," org/zh-CN/docs/admin-manual/config/be-config)"),(0,o.kt)("h2",{id:"relevant-system-configuration"},"Relevant System Configuration"),(0,o.kt)("h3",{id:"fe-configuration"},"FE configuration"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"stream","_","load","_","default","_","timeout","_","second"),(0,o.kt)("p",{parentName:"li"},"The timeout time of the import task (in seconds) will be cancelled by the system if the import task is not completed within the set timeout time, and will become CANCELLED."),(0,o.kt)("p",{parentName:"li"},"At present, Stream load does not support custom import timeout time. All Stream load import timeout time is uniform. The default timeout time is 600 seconds. If the imported source file can no longer complete the import within the specified time, the FE parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"stream_load_default_timeout_second")," needs to be adjusted."))),(0,o.kt)("h3",{id:"be-configuration"},"BE configuration"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"streaming","_","load","_","max","_","mb"),(0,o.kt)("p",{parentName:"li"},"The maximum import size of Stream load is 10G by default, in MB. If the user's original file exceeds this value, the BE parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"streaming_load_max_mb")," needs to be adjusted."))),(0,o.kt)("h2",{id:"best-practices"},"Best Practices"),(0,o.kt)("h3",{id:"application-scenarios"},"Application scenarios"),(0,o.kt)("p",null,"The most appropriate scenario for using Stream load is that the original file is in memory or on disk. Secondly, since Stream load is a synchronous import method, users can also use this import if they want to obtain the import results in a synchronous manner."),(0,o.kt)("h3",{id:"data-volume"},"Data volume"),(0,o.kt)("p",null,"Since Stream load is based on the BE initiative to import and distribute data, the recommended amount of imported data is between 1G and 10G. Since the default maximum Stream load import data volume is 10G, the configuration of BE ",(0,o.kt)("inlineCode",{parentName:"p"},"streaming_load_max_mb")," needs to be modified if files exceeding 10G are to be imported."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"For example, the size of the file to be imported is 15G\nModify the BE configuration streaming_load_max_mb to 16000\n")),(0,o.kt)("p",null,"Stream load default timeout is 600 seconds, according to Doris currently the largest import speed limit, about more than 3G files need to modify the import task default timeout."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Import Task Timeout = Import Data Volume / 10M / s (Specific Average Import Speed Requires Users to Calculate Based on Their Cluster Conditions)\nFor example, import a 10G file\nTimeout = 1000s -31561;. 20110G / 10M /s\n")),(0,o.kt)("h3",{id:"complete-examples"},"Complete examples"),(0,o.kt)("p",null,"Data situation: In the local disk path /home/store_sales of the sending and importing requester, the imported data is about 15G, and it is hoped to be imported into the table store","_","sales of the database bj_sales."),(0,o.kt)("p",null,"Cluster situation: The concurrency of Stream load is not affected by cluster size."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Step 1: Does the import file size exceed the default maximum import size of 10G"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"BE conf\nstreaming_load_max_mb = 16000\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Step 2: Calculate whether the approximate import time exceeds the default timeout value"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"Import time 15000/10 = 1500s\nOver the default timeout time, you need to modify the FE configuration\nstream_load_default_timeout_second = 1500\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Step 3: Create Import Tasks"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'curl --location-trusted -u user:password -T /home/store_sales -H "label:abc" http://abc.com:8030/api/bj_sales/store_sales/_stream_load\n')))),(0,o.kt)("h3",{id:"coding-with-streamload"},"Coding with StreamLoad"),(0,o.kt)("p",null,"You can initiate HTTP requests for Stream Load using any language. Before initiating HTTP requests, you need to set several necessary headers:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},"Content-Type: text/plain; charset=UTF-8\nExpect: 100-continue\nAuthorization: Basic <Base64 encoded username and password>\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<Base64 encoded username and password>"),": a string consist with Doris's ",(0,o.kt)("inlineCode",{parentName:"p"},"username"),", ",(0,o.kt)("inlineCode",{parentName:"p"},":")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"password")," and then do a base64 encode."),(0,o.kt)("p",null,"Additionally, it should be noted that if you directly initiate an HTTP request to FE, as Doris will redirect to BE, some frameworks will remove the ",(0,o.kt)("inlineCode",{parentName:"p"},"Authorization")," HTTP header during this process, which requires manual processing."),(0,o.kt)("p",null,"Doris provides StreamLoad examples in three languages: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/tree/master/samples/stream_load/java"},"Java"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/tree/master/samples/stream_load/go"},"Go"),", and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/tree/master/samples/stream_load/python"},"Python")," for reference."),(0,o.kt)("h2",{id:"common-questions"},"Common Questions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Label Already Exists"),(0,o.kt)("p",{parentName:"li"},"The Label repeat checking steps of Stream load are as follows:"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Is there an import Label conflict that already exists with other import methods?"),(0,o.kt)("p",{parentName:"li"},"Because imported Label in Doris system does not distinguish between import methods, there is a problem that other import methods use the same Label."),(0,o.kt)("p",{parentName:"li"},"Through ",(0,o.kt)("inlineCode",{parentName:"p"},'SHOW LOAD WHERE LABEL = "xxx"\''),", where XXX is a duplicate Label string, see if there is already a Label imported by FINISHED that is the same as the Label created by the user.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Are Stream loads submitted repeatedly for the same job?"),(0,o.kt)("p",{parentName:"li"},"Since Stream load is an HTTP protocol submission creation import task, HTTP Clients in various languages usually have their own request retry logic. After receiving the first request, the Doris system has started to operate Stream load, but because the result is not returned to the Client side in time, the Client side will retry to create the request. At this point, the Doris system is already operating on the first request, so the second request will be reported to Label Already Exists."),(0,o.kt)("p",{parentName:"li"},"To sort out the possible methods mentioned above: Search FE Master's log with Label to see if there are two ",(0,o.kt)("inlineCode",{parentName:"p"},"redirect load action to destination = "),"redirect load action to destination cases in the same Label. If so, the request is submitted repeatedly by the Client side."),(0,o.kt)("p",{parentName:"li"},"It is recommended that the user calculate the approximate import time based on the amount of data currently requested, and change the request overtime on the client side to a value greater than the import timeout time according to the import timeout time to avoid multiple submissions of the request by the client side.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Connection reset abnormal"),(0,o.kt)("p",{parentName:"li"},"In the community version 0.14.0 and earlier versions, the connection reset exception occurred after Http V2 was enabled, because the built-in web container is tomcat, and Tomcat has pits in 307 (Temporary Redirect). There is a problem with the implementation of this protocol. All In the case of using Stream load to import a large amount of data, a connect reset exception will occur. This is because tomcat started data transmission before the 307 jump, which resulted in the lack of authentication information when the BE received the data request. Later, changing the built-in container to Jetty solved this problem. If you encounter this problem, please upgrade your Doris or disable Http V2 (",(0,o.kt)("inlineCode",{parentName:"p"},"enable_http_server_v2=false"),")."),(0,o.kt)("p",{parentName:"li"},"After the upgrade, also upgrade the http client version of your program to ",(0,o.kt)("inlineCode",{parentName:"p"},"4.5.13"),"\uff0cIntroduce the following dependencies in your pom.xml file"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"    <dependency>\n      <groupId>org.apache.httpcomponents</groupId>\n      <artifactId>httpclient</artifactId>\n      <version>4.5.13</version>\n    </dependency>\n"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"After enabling the Stream Load record on the BE, the record cannot be queried"),(0,o.kt)("p",{parentName:"li"},"This is caused by the slowness of fetching records, you can try to adjust the following parameters:"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Increase the BE configuration ",(0,o.kt)("inlineCode",{parentName:"li"},"stream_load_record_batch_size"),". This configuration indicates how many Stream load records can be pulled from BE each time. The default value is 50, which can be increased to 500."),(0,o.kt)("li",{parentName:"ol"},"Reduce the FE configuration ",(0,o.kt)("inlineCode",{parentName:"li"},"fetch_stream_load_record_interval_second"),", this configuration indicates the interval for obtaining Stream load records, the default is to fetch once every 120 seconds, and it can be adjusted to 60 seconds."),(0,o.kt)("li",{parentName:"ol"},"If you want to save more Stream load records (not recommended, it will take up more resources of FE), you can increase the configuration ",(0,o.kt)("inlineCode",{parentName:"li"},"max_stream_load_record_size")," of FE, the default is 5000.")))),(0,o.kt)("h2",{id:"more-help"},"More Help"),(0,o.kt)("p",null,"For more detailed syntax used by ",(0,o.kt)("strong",{parentName:"p"},"Stream Load"),",  you can enter ",(0,o.kt)("inlineCode",{parentName:"p"},"HELP STREAM LOAD")," on the Mysql client command line for more help."))}c.isMDXComponent=!0}}]);