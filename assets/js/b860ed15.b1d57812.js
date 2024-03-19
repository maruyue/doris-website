"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[42262],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>y});var r=a(296540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(a),c=n,y=u["".concat(s,".").concat(c)]||u[c]||d[c]||o;return a?r.createElement(y,l(l({ref:t},m),{},{components:a})):r.createElement(y,l({ref:t},m))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},771154:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=a(58168),n=(a(296540),a(15680));const o={title:"Export Overview",language:"en"},l=void 0,i={unversionedId:"data-operate/export/export-manual",id:"version-2.0/data-operate/export/export-manual",title:"Export Overview",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/data-operate/export/export-manual.md",sourceDirName:"data-operate/export",slug:"/data-operate/export/export-manual",permalink:"/docs/2.0/data-operate/export/export-manual",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Export Overview",language:"en"},sidebar:"docs",previous:{title:"Temporary Partition",permalink:"/docs/2.0/data-operate/delete/table-temp-partition"},next:{title:"Export Query Result",permalink:"/docs/2.0/data-operate/export/outfile"}},s={},p=[{value:"Principles",id:"principles",level:2},{value:"Start Export",id:"start-export",level:2},{value:"Export to HDFS",id:"export-to-hdfs",level:3},{value:"Export to Object Storage (Supports S3 Protocol)",id:"export-to-object-storage-supports-s3-protocol",level:3},{value:"View Export Status",id:"view-export-status",level:3},{value:"Cancel Export Job",id:"cancel-export-job",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Concurrent Export",id:"concurrent-export",level:3},{value:"exec_mem_limit",id:"exec_mem_limit",level:3},{value:"Notes",id:"notes",level:2},{value:"Relevant configuration",id:"relevant-configuration",level:2},{value:"FE",id:"fe",level:3},{value:"More Help",id:"more-help",level:2}],m={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,n.yg)(u,(0,r.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"export-overview"},"Export Overview"),(0,n.yg)("p",null," ",(0,n.yg)("inlineCode",{parentName:"p"},"Export")," is a feature provided by Doris that allows for the asynchronous export of data. This feature allows the user to export the data of specified tables or partitions in a specified file format through the Broker process or S3 protocol/ HDFS protocol, to remote storage such as object storage or HDFS."),(0,n.yg)("p",null,"Currently, ",(0,n.yg)("inlineCode",{parentName:"p"},"EXPORT")," supports exporting Doris local tables / views / external tables and supports exporting to file formats including parquet, orc, csv, csv_with_names, and csv_with_names_and_types."),(0,n.yg)("p",null,"This document mainly introduces the basic principles, usage, best practices and precautions of Export."),(0,n.yg)("h2",{id:"principles"},"Principles"),(0,n.yg)("p",null,"After a user submits an ",(0,n.yg)("inlineCode",{parentName:"p"},"Export Job"),", Doris will calculate all the Tablets involved in this job. Then, based on the ",(0,n.yg)("inlineCode",{parentName:"p"},"parallelism")," parameter specified by the user, these tablets will be grouped. Each thread is responsible for a group of tablets, generating multiple ",(0,n.yg)("inlineCode",{parentName:"p"},"SELECT INTO OUTFILE")," query plans. The query plan will read the data from the included tablets and then write the data to the specified path in remote storage through S3 protocol/ HDFS protocol/ Broker."),(0,n.yg)("p",null,"The overall execution process is as follows:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"The user submits an Export job to FE.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"FE calculates all the tablets to be exported and groups them based on the ",(0,n.yg)("inlineCode",{parentName:"p"},"parallelism")," parameter. Each group generates multiple ",(0,n.yg)("inlineCode",{parentName:"p"},"SELECT INTO OUTFILE")," query plans based on the ",(0,n.yg)("inlineCode",{parentName:"p"},"maximum_number_of_export_partitions")," parameter.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Based on the parallelism parameter, an equal number of ",(0,n.yg)("inlineCode",{parentName:"p"},"ExportTaskExecutor")," are generated, and each ",(0,n.yg)("inlineCode",{parentName:"p"},"ExportTaskExecutor")," is responsible for a thread, which is scheduled and executed by FE's ",(0,n.yg)("inlineCode",{parentName:"p"},"Job scheduler")," framework.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"FE's ",(0,n.yg)("inlineCode",{parentName:"p"},"Job scheduler")," schedules and executes the ",(0,n.yg)("inlineCode",{parentName:"p"},"ExportTaskExecutor"),", and each ",(0,n.yg)("inlineCode",{parentName:"p"},"ExportTaskExecutor")," serially executes the multiple ",(0,n.yg)("inlineCode",{parentName:"p"},"SELECT INTO OUTFILE")," query plans it is responsible for."))),(0,n.yg)("h2",{id:"start-export"},"Start Export"),(0,n.yg)("p",null,"For detailed usage of Export, please refer to ",(0,n.yg)("a",{parentName:"p",href:"/docs/2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/EXPORT"},"EXPORT"),"."),(0,n.yg)("p",null,"Export's detailed commands can be passed through ",(0,n.yg)("inlineCode",{parentName:"p"},"HELP EXPORT;")," in mysql client. Examples are as follows:"),(0,n.yg)("h3",{id:"export-to-hdfs"},"Export to HDFS"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'EXPORT TABLE db1.tbl1 \nPARTITION (p1,p2)\n[WHERE [expr]]\nTO "hdfs://host/path/to/export/" \nPROPERTIES\n(\n    "label" = "mylabel",\n    "column_separator"=",",\n    "columns" = "col1,col2",\n    "parallelusm" = "3"\n)\nWITH BROKER "hdfs"\n(\n    "username" = "user",\n    "password" = "passwd"\n);\n')),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"label"),": The identifier of this export job. You can use this identifier to view the job status later."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"column_separator"),": Column separator. The default is ",(0,n.yg)("inlineCode",{parentName:"li"},"\\t"),". Supports invisible characters, such as'\\x07'."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"column"),": columns to be exported, separated by commas, if this parameter is not filled in, all columns of the table will be exported by default."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"line_delimiter"),": Line separator. The default is ",(0,n.yg)("inlineCode",{parentName:"li"},"\\n"),". Supports invisible characters, such as'\\x07'."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"parallelusm"),"\uff1aExporting with 3 concurrent threads.")),(0,n.yg)("h3",{id:"export-to-object-storage-supports-s3-protocol"},"Export to Object Storage (Supports S3 Protocol)"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'EXPORT TABLE test TO "s3://bucket/path/to/export/dir/"\nWITH S3 (\n    "s3.endpoint" = "http://host",\n    "s3.access_key" = "AK",\n    "s3.secret_key"="SK",\n    "s3.region" = "region"\n);\n')),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"s3.access_key"),"/",(0,n.yg)("inlineCode",{parentName:"li"},"s3.secret_key"),"\uff1aIs your key to access the object storage API."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"s3.endpoint"),"\uff1aEndpoint indicates the access domain name of object storage external services."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"s3.region"),"\uff1aRegion indicates the region where the object storage data center is located.")),(0,n.yg)("h3",{id:"view-export-status"},"View Export Status"),(0,n.yg)("p",null,"After submitting a job, the job status can be viewed by querying the   ",(0,n.yg)("a",{parentName:"p",href:"/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-EXPORT"},"SHOW EXPORT"),"  command. The results are as follows:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> show EXPORT\\G;\n*************************** 1. row ***************************\n     JobId: 14008\n     State: FINISHED\n  Progress: 100%\n  TaskInfo: {"partitions":[],"max_file_size":"","delete_existing_files":"","columns":"","format":"csv","column_separator":"\\t","line_delimiter":"\\n","db":"default_cluster:demo","tbl":"student4","tablet_num":30}\n      Path: hdfs://host/path/to/export/\nCreateTime: 2019-06-25 17:08:24\n StartTime: 2019-06-25 17:08:28\nFinishTime: 2019-06-25 17:08:34\n   Timeout: 3600\n  ErrorMsg: NULL\n  OutfileInfo: [\n  [\n    {\n      "fileNumber": "1",\n      "totalRows": "4",\n      "fileSize": "34bytes",\n      "url": "file:///127.0.0.1/Users/fangtiewei/tmp_data/export/f1ab7dcc31744152-bbb4cda2f5c88eac_"\n    }\n  ]\n]\n1 row in set (0.01 sec)\n')),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"JobId: The unique ID of the job"),(0,n.yg)("li",{parentName:"ul"},"State: Job status:",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"PENDING: Jobs to be Scheduled"),(0,n.yg)("li",{parentName:"ul"},"EXPORTING: Data Export"),(0,n.yg)("li",{parentName:"ul"},"FINISHED: Operation Successful"),(0,n.yg)("li",{parentName:"ul"},"CANCELLED: Job Failure"))),(0,n.yg)("li",{parentName:"ul"},"Progress: Work progress. The schedule is based on the query plan. Assuming there are 10 threads in total and 3 have been completed, the progress will be 30%."),(0,n.yg)("li",{parentName:"ul"},"TaskInfo: Job information in Json format:",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"db: database name"),(0,n.yg)("li",{parentName:"ul"},"tbl: Table name"),(0,n.yg)("li",{parentName:"ul"},"partitions: Specify the exported partition. ",(0,n.yg)("inlineCode",{parentName:"li"},"empty")," Represents all partitions."),(0,n.yg)("li",{parentName:"ul"},"column separator: The column separator for the exported file."),(0,n.yg)("li",{parentName:"ul"},"line delimiter: The line separator for the exported file."),(0,n.yg)("li",{parentName:"ul"},"tablet num: The total number of tablets involved."),(0,n.yg)("li",{parentName:"ul"},"Broker: The name of the broker used.",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"max_file_size: The maximum size of an export file."),(0,n.yg)("li",{parentName:"ul"},"delete_existing_files: Whether to delete existing files and directories in the specified export directory. "),(0,n.yg)("li",{parentName:"ul"},"columns: Specifies the column names to be exported. Empty values represent exporting all columns."),(0,n.yg)("li",{parentName:"ul"},"format: The file format for export."))))),(0,n.yg)("li",{parentName:"ul"},"Path: Export path on remote storage."),(0,n.yg)("li",{parentName:"ul"},"CreateTime/StartTime/FinishTime: Creation time, start scheduling time and end time of jobs."),(0,n.yg)("li",{parentName:"ul"},"Timeout: Job timeout. The unit is seconds. This time is calculated from CreateTime."),(0,n.yg)("li",{parentName:"ul"},"Error Msg: If there is an error in the job, the cause of the error is shown here."),(0,n.yg)("li",{parentName:"ul"},"OutfileInfo\uff1aIf the export job is successful, specific ",(0,n.yg)("inlineCode",{parentName:"li"},"SELECT INTO OUTFILE")," result information will be displayed here.")),(0,n.yg)("h3",{id:"cancel-export-job"},"Cancel Export Job"),(0,n.yg)("version",{since:"dev"}),(0,n.yg)("p",null,"After submitting a job, the job can be canceled by using the  ",(0,n.yg)("a",{parentName:"p",href:"/docs/2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/CANCEL-EXPORT"},"CANCEL EXPORT"),"  command. For example:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'CANCEL EXPORT\nFROM example_db\nWHERE LABEL like "%example%";\n')),(0,n.yg)("h2",{id:"best-practices"},"Best Practices"),(0,n.yg)("h3",{id:"concurrent-export"},"Concurrent Export"),(0,n.yg)("p",null,"An Export job can be configured with the ",(0,n.yg)("inlineCode",{parentName:"p"},"parallelism")," parameter to concurrently export data. The ",(0,n.yg)("inlineCode",{parentName:"p"},"parallelism")," parameter specifies the number of threads to execute the ",(0,n.yg)("inlineCode",{parentName:"p"},"EXPORT Job"),". Each thread is responsible for exporting a subset of the total tablets."),(0,n.yg)("p",null,"The underlying execution logic of an ",(0,n.yg)("inlineCode",{parentName:"p"},"Export Job "),"is actually the ",(0,n.yg)("inlineCode",{parentName:"p"},"SELECT INTO OUTFILE")," statement. Each thread specified by the ",(0,n.yg)("inlineCode",{parentName:"p"},"parallelism")," parameter executes independent ",(0,n.yg)("inlineCode",{parentName:"p"},"SELECT INTO OUTFILE")," statements."),(0,n.yg)("p",null,"The specific logic for splitting an ",(0,n.yg)("inlineCode",{parentName:"p"},"Export Job")," into multiple ",(0,n.yg)("inlineCode",{parentName:"p"},"SELECT INTO OUTFILE")," is, to evenly distribute all the tablets of the table among all parallel threads. For example:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"If num(tablets) = 40 and parallelism = 3, then the three threads will be responsible for 14, 13, and 13 tablets, respectively."),(0,n.yg)("li",{parentName:"ul"},"If num(tablets) = 2 and parallelism = 3, then Doris automatically sets the parallelism to 2, and each thread is responsible for one tablet.")),(0,n.yg)("p",null,"When the number of tablets responsible for a thread exceeds the ",(0,n.yg)("inlineCode",{parentName:"p"},"maximum_tablets_of_outfile_in_export")," value (default is 10, and can be modified by adding the ",(0,n.yg)("inlineCode",{parentName:"p"},"maximum_tablets_of_outfile_in_export")," parameter in fe.conf), the thread will split the tablets which are responsibled for this thread into multiple ",(0,n.yg)("inlineCode",{parentName:"p"},"SELECT INTO OUTFILE")," statements. For example:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"If a thread is responsible for 14 tablets and ",(0,n.yg)("inlineCode",{parentName:"li"},"maximum_tablets_of_outfile_in_export = 10"),", then the thread will be responsible for two ",(0,n.yg)("inlineCode",{parentName:"li"},"SELECT INTO OUTFILE")," statements. The first ",(0,n.yg)("inlineCode",{parentName:"li"},"SELECT INTO OUTFILE")," statement exports 10 tablets, and the second ",(0,n.yg)("inlineCode",{parentName:"li"},"SELECT INTO OUTFILE")," statement exports 4 tablets. The two ",(0,n.yg)("inlineCode",{parentName:"li"},"SELECT INTO OUTFILE")," statements are executed serially by this thread.")),(0,n.yg)("h3",{id:"exec_mem_limit"},"exec","_","mem","_","limit"),(0,n.yg)("p",null,"The query plan for an ",(0,n.yg)("inlineCode",{parentName:"p"},"Export Job")," typically involves only ",(0,n.yg)("inlineCode",{parentName:"p"},"scanning and exporting"),", and does not involve compute logic that requires a lot of memory. Therefore, the default memory limit of 2GB is usually sufficient to meet the requirements."),(0,n.yg)("p",null,"However, in certain scenarios, such as a query plan that requires scanning too many tablets on the same BE, or when there are too many data versions of tablets, it may result in insufficient memory. In these cases, you can adjust the session variable ",(0,n.yg)("inlineCode",{parentName:"p"},"exec_mem_limit")," to increase the memory usage limit."),(0,n.yg)("h2",{id:"notes"},"Notes"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"It is not recommended to export large amounts of data at one time. The maximum amount of exported data recommended by an Export job is tens of GB. Excessive export results in more junk files and higher retry costs."),(0,n.yg)("li",{parentName:"ul"},"If the amount of table data is too large, it is recommended to export it by partition."),(0,n.yg)("li",{parentName:"ul"},"During the operation of the Export job, if FE restarts or cuts the master, the Export job will fail, requiring the user to resubmit."),(0,n.yg)("li",{parentName:"ul"},"If the Export job fails, the temporary files and directory generated in the remote storage will not be deleted, requiring the user to delete them manually."),(0,n.yg)("li",{parentName:"ul"},"Export jobs scan data and occupy IO resources, which may affect the query latency of the system."),(0,n.yg)("li",{parentName:"ul"},"The Export job can export data from  ",(0,n.yg)("inlineCode",{parentName:"li"},"Doris Base tables"),", ",(0,n.yg)("inlineCode",{parentName:"li"},"View"),", and ",(0,n.yg)("inlineCode",{parentName:"li"},"External tables"),", but not from ",(0,n.yg)("inlineCode",{parentName:"li"},"Rollup Index"),"."),(0,n.yg)("li",{parentName:"ul"},"When using the EXPORT command, please ensure that the target path exists, otherwise the export may fail."),(0,n.yg)("li",{parentName:"ul"},"When concurrent export is enabled, please configure the thread count and parallelism appropriately to fully utilize system resources and avoid performance bottlenecks."),(0,n.yg)("li",{parentName:"ul"},"When exporting to a local file, pay attention to file permissions and the path, ensure that you have sufficient permissions to write, and follow the appropriate file system path."),(0,n.yg)("li",{parentName:"ul"},"It is possible to monitor progress and performance metrics in real-time during the export process to identify issues promptly and make optimal adjustments."),(0,n.yg)("li",{parentName:"ul"},"It is recommended to verify the integrity and accuracy of the exported data after the export operation is completed to ensure the quality and integrity of the data.")),(0,n.yg)("h2",{id:"relevant-configuration"},"Relevant configuration"),(0,n.yg)("h3",{id:"fe"},"FE"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"maximum_tablets_of_outfile_in_export"),": The maximum number of tablets allowed for an OutFile statement in an ExportExecutorTask.")),(0,n.yg)("h2",{id:"more-help"},"More Help"),(0,n.yg)("p",null,"For more detailed syntax and best practices used by Export, please refer to the ",(0,n.yg)("a",{parentName:"p",href:"/docs/2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/EXPORT"},"Export")," command manual, You can also enter ",(0,n.yg)("inlineCode",{parentName:"p"},"HELP EXPORT")," at the command line of the MySql client for more help."),(0,n.yg)("p",null,"The underlying implementation of the ",(0,n.yg)("inlineCode",{parentName:"p"},"EXPORT")," command is the ",(0,n.yg)("inlineCode",{parentName:"p"},"SELECT INTO OUTFILE")," statement. For more information about SELECT INTO OUTFILE, please refer to ",(0,n.yg)("a",{parentName:"p",href:"/docs/2.0/data-operate/export/outfile"},"Export Query Result")," and ",(0,n.yg)("a",{parentName:"p",href:"/docs/2.0/sql-manual/sql-reference/Data-Manipulation-Statements/OUTFILE"},"SELECT INTO OUTFILE"),"."))}d.isMDXComponent=!0}}]);