"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[7979],{15680:(e,a,t)=>{t.d(a,{xA:()=>p,yg:()=>f});var n=t(296540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),c=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},p=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(t),d=r,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return t?n.createElement(f,s(s({ref:a},p),{},{components:t})):n.createElement(f,s({ref:a},p))}));function f(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[m]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},591449:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=t(58168),r=(t(296540),t(15680));const o={title:"Kafka Data Subscription",language:"en"},s=void 0,i={unversionedId:"data-operate/import/(delete)import-scenes/kafka-load",id:"version-2.0/data-operate/import/(delete)import-scenes/kafka-load",title:"Kafka Data Subscription",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/data-operate/import/(delete)import-scenes/kafka-load.md",sourceDirName:"data-operate/import/(delete)import-scenes",slug:"/data-operate/import/(delete)import-scenes/kafka-load",permalink:"/docs/2.0/data-operate/import/(delete)import-scenes/kafka-load",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Kafka Data Subscription",language:"en"}},l={},c=[{value:"Subscribe to Kafka messages",id:"subscribe-to-kafka-messages",level:2},{value:"Accessing SSL-authenticated Kafka clusters",id:"accessing-ssl-authenticated-kafka-clusters",level:3},{value:"Create a routine import job",id:"create-a-routine-import-job",level:3},{value:"View import job status",id:"view-import-job-status",level:3},{value:"Modify job properties",id:"modify-job-properties",level:3},{value:"Job Control",id:"job-control",level:3},{value:"more help",id:"more-help",level:2}],p={toc:c},m="wrapper";function u(e){let{components:a,...t}=e;return(0,r.yg)(m,(0,n.A)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"subscribe-to-kafka-logs"},"Subscribe to Kafka logs"),(0,r.yg)("p",null,"Users can directly subscribe to message data in Kafka by submitting routine import jobs to synchronize data in near real-time."),(0,r.yg)("p",null,"Doris itself can ensure that messages in Kafka are subscribed without loss or weight, that is, ",(0,r.yg)("inlineCode",{parentName:"p"},"Exactly-Once")," consumption semantics."),(0,r.yg)("h2",{id:"subscribe-to-kafka-messages"},"Subscribe to Kafka messages"),(0,r.yg)("p",null,"Subscribing to Kafka messages uses the Routine Load feature in Doris."),(0,r.yg)("p",null,"The user first needs to create a ",(0,r.yg)("strong",{parentName:"p"},"routine import job"),". The job will send a series of ",(0,r.yg)("strong",{parentName:"p"},"tasks")," continuously through routine scheduling, and each task will consume a certain number of messages in Kafka."),(0,r.yg)("p",null,"Please note the following usage restrictions:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Support unauthenticated Kafka access and SSL-authenticated Kafka clusters."),(0,r.yg)("li",{parentName:"ol"},"The supported message formats are as follows:",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"csv text format. Each message is a line, and the end of the line ",(0,r.yg)("strong",{parentName:"li"},"does not contain")," a newline."),(0,r.yg)("li",{parentName:"ul"},"Json format, see ",(0,r.yg)("a",{parentName:"li",href:"../import-way/load-json-format.md"},"Import Json Format Data"),"."))),(0,r.yg)("li",{parentName:"ol"},"Only supports Kafka 0.10.0.0 (inclusive) and above.")),(0,r.yg)("h3",{id:"accessing-ssl-authenticated-kafka-clusters"},"Accessing SSL-authenticated Kafka clusters"),(0,r.yg)("p",null,"The routine import feature supports unauthenticated Kafka clusters, as well as SSL-authenticated Kafka clusters."),(0,r.yg)("p",null,"Accessing an SSL-authenticated Kafka cluster requires the user to provide a certificate file (ca.pem) for authenticating the Kafka Broker public key. If client authentication is also enabled in the Kafka cluster, the client's public key (client.pem), key file (client.key), and key password must also be provided. The files required here need to be uploaded to Doris through the ",(0,r.yg)("inlineCode",{parentName:"p"},"CREAE FILE")," command, and the catalog name is ",(0,r.yg)("inlineCode",{parentName:"p"},"kafka"),". The specific help of the ",(0,r.yg)("inlineCode",{parentName:"p"},"CREATE FILE")," command can be found in the ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-FILE"},"CREATE FILE")," command manual . Here is an example:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"upload files"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE FILE "ca.pem" PROPERTIES("url" = "https://example_url/kafka-key/ca.pem", "catalog" = "kafka");\nCREATE FILE "client.key" PROPERTIES("url" = "https://example_urlkafka-key/client.key", "catalog" = "kafka");\nCREATE FILE "client.pem" PROPERTIES("url" = "https://example_url/kafka-key/client.pem", "catalog" = "kafka");\n')))),(0,r.yg)("p",null,"After the upload is complete, you can view the uploaded files through the ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-FILE"},"SHOW FILES")," command."),(0,r.yg)("h3",{id:"create-a-routine-import-job"},"Create a routine import job"),(0,r.yg)("p",null,"For specific commands to create routine import tasks, see ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CREATE-ROUTINE-LOAD"},"ROUTINE LOAD")," command manual. Here is an example:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Access the Kafka cluster without authentication"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE ROUTINE LOAD demo.my_first_routine_load_job ON test_1\nCOLUMNS TERMINATED BY ","\nPROPERTIES\n(\n    "max_batch_interval" = "20",\n    "max_batch_rows" = "300000",\n    "max_batch_size" = "209715200",\n)\nFROM KAFKA\n(\n    "kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n    "kafka_topic" = "my_topic",\n    "property.group.id" = "xxx",\n    "property.client.id" = "xxx",\n    "property.kafka_default_offsets" = "OFFSET_BEGINNING"\n);\n')),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"max_batch_interval/max_batch_rows/max_batch_size")," is used to control the running period of a subtask. The running period of a subtask is determined by the longest running time, the maximum number of rows consumed, and the maximum amount of data consumed."))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Access an SSL-authenticated Kafka cluster"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE ROUTINE LOAD demo.my_first_routine_load_job ON test_1\nCOLUMNS TERMINATED BY ",",\nPROPERTIES\n(\n    "max_batch_interval" = "20",\n    "max_batch_rows" = "300000",\n    "max_batch_size" = "209715200",\n)\nFROM KAFKA\n(\n   "kafka_broker_list"= "broker1:9091,broker2:9091",\n   "kafka_topic" = "my_topic",\n   "property.security.protocol" = "ssl",\n   "property.ssl.ca.location" = "FILE:ca.pem",\n   "property.ssl.certificate.location" = "FILE:client.pem",\n   "property.ssl.key.location" = "FILE:client.key",\n   "property.ssl.key.password" = "abcdefg"\n);\n')))),(0,r.yg)("h3",{id:"view-import-job-status"},"View import job status"),(0,r.yg)("p",null,"See ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-ROUTINE-LOAD"},"SHOW ROUTINE LOAD")," for specific commands and examples for checking the status of a ",(0,r.yg)("strong",{parentName:"p"},"job")," ) command documentation."),(0,r.yg)("p",null,"See ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-ROUTINE-LOAD-TASK"},"SHOW ROUTINE LOAD TASK")," command documentation."),(0,r.yg)("p",null,"Only the currently running tasks can be viewed, and the completed and unstarted tasks cannot be viewed."),(0,r.yg)("h3",{id:"modify-job-properties"},"Modify job properties"),(0,r.yg)("p",null,"The user can modify some properties of the job that has been created. For details, please refer to the ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Load/ALTER-ROUTINE-LOAD"},"ALTER ROUTINE LOAD")," command manual."),(0,r.yg)("h3",{id:"job-control"},"Job Control"),(0,r.yg)("p",null,"The user can control the stop, pause and restart of the job through the ",(0,r.yg)("inlineCode",{parentName:"p"},"STOP/PAUSE/RESUME")," three commands."),(0,r.yg)("p",null,"For specific commands, please refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Load/STOP-ROUTINE-LOAD"},"STOP ROUTINE LOAD")," , ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Load/PAUSE-ROUTINE-LOAD"},"PAUSE ROUTINE LOAD"),", ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Load/RESUME-ROUTINE-LOAD"},"RESUME ROUTINE LOAD")," command documentation."),(0,r.yg)("h2",{id:"more-help"},"more help"),(0,r.yg)("p",null,"For more detailed syntax and best practices for ROUTINE LOAD, see ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CREATE-ROUTINE-LOAD"},"ROUTINE LOAD")," command manual."))}u.isMDXComponent=!0}}]);