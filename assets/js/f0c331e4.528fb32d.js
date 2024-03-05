"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[32404],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>m});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),g=a,m=p["".concat(s,".").concat(g)]||p[g]||u[g]||o;return n?r.createElement(m,l(l({ref:t},d),{},{components:n})):r.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},41277:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(58168),a=(n(96540),n(15680));const o={title:"Doris Kafka Connector",language:"en"},l=void 0,i={unversionedId:"ecosystem/doris-kafka-connector",id:"ecosystem/doris-kafka-connector",title:"Doris Kafka Connector",description:"\x3c!--",source:"@site/docs/ecosystem/doris-kafka-connector.md",sourceDirName:"ecosystem",slug:"/ecosystem/doris-kafka-connector",permalink:"/docs/dev/ecosystem/doris-kafka-connector",draft:!1,tags:[],version:"current",frontMatter:{title:"Doris Kafka Connector",language:"en"},sidebar:"docs",previous:{title:"Flink Doris Connector",permalink:"/docs/dev/ecosystem/flink-doris-connector"},next:{title:"Doris Streamloader",permalink:"/docs/dev/ecosystem/doris-streamloader"}},s={},c=[{value:"Usage Doris Kafka Connector",id:"usage-doris-kafka-connector",level:2},{value:"Standalone mode startup",id:"standalone-mode-startup",level:3},{value:"Distributed mode startup",id:"distributed-mode-startup",level:3},{value:"Access an SSL-certified Kafka cluster",id:"access-an-ssl-certified-kafka-cluster",level:3},{value:"Dead letter queue",id:"dead-letter-queue",level:3},{value:"Configuration items",id:"configuration-items",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://docs.confluent.io/platform/current/connect/index.html"},"Kafka Connect")," is a scalable and reliable tool for data transmission between Apache Kafka and other systems. Connectors can be defined Move large amounts of data in and out of Kafka."),(0,a.yg)("p",null,"Doris provides the Sink Connector plug-in, which can write data from Kafka topics to Doris."),(0,a.yg)("h2",{id:"usage-doris-kafka-connector"},"Usage Doris Kafka Connector"),(0,a.yg)("h3",{id:"standalone-mode-startup"},"Standalone mode startup"),(0,a.yg)("p",null,"Configure connect-standalone.properties"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-properties"},"# Modify broker address\nbootstrap.servers=127.0.0.1:9092\n")),(0,a.yg)("p",null,"Configure doris-connector-sink.properties\nCreate doris-connector-sink.properties in the config directory and configure the following content:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-properties"},"name=test-doris-sink\nconnector.class=org.apache.doris.kafka.connector.DorisSinkConnector\ntopics=topic_test\ndoris.topic2table.map=topic_test:test_kafka_tbl\nbuffer.count.records=10000\nbuffer.flush.time=120\nbuffer.size.bytes=5000000\ndoris.urls=10.10.10.1\ndoris.http.port=8030\ndoris.query.port=9030\ndoris.user=root\ndoris.password=\ndoris.database=test_db\nkey.converter=org.apache.kafka.connect.storage.StringConverter\nvalue.converter=org.apache.kafka.connect.json.JsonConverter\nkey.converter.schemas.enable=false\nvalue.converter.schemas.enable=false\n")),(0,a.yg)("p",null,"Start Standalone"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"$KAFKA_HOME/bin/connect-standalone.sh -daemon $KAFKA_HOME/config/connect-standalone.properties $KAFKA_HOME/config/doris-connector-sink.properties\n")),(0,a.yg)("admonition",{type:"warning"},(0,a.yg)("p",{parentName:"admonition"},"Note: It is generally not recommended to use standalone mode in a production environment.")),(0,a.yg)("h3",{id:"distributed-mode-startup"},"Distributed mode startup"),(0,a.yg)("p",null,"Configure connect-distributed.properties"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-properties"},"# Modify broker address\nbootstrap.servers=127.0.0.1:9092\n\n# Modify group.id, the same cluster needs to be consistent\ngroup.id=connect-cluster\n")),(0,a.yg)("p",null,"Start Distributed"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"$KAFKA_HOME/bin/connect-distributed.sh -daemon $KAFKA_HOME/config/connect-distributed.properties\n")),(0,a.yg)("p",null,"Add Connector"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:8083/connectors -H "Content-Type: application/json" -X POST -d \'{\n  "name":"test-doris-sink-cluster",\n  "config":{\n    "connector.class":"org.apache.doris.kafka.connector.DorisSinkConnector",\n    "topics":"topic_test",\n    "doris.topic2table.map": "topic_test:test_kafka_tbl",\n    "buffer.count.records":"10000",\n    "buffer.flush.time":"120",\n    "buffer.size.bytes":"5000000",\n    "doris.urls":"10.10.10.1",\n    "doris.user":"root",\n    "doris.password":"",\n    "doris.http.port":"8030",\n    "doris.query.port":"9030",\n    "doris.database":"test_db",\n    "key.converter":"org.apache.kafka.connect.storage.StringConverter",\n    "value.converter":"org.apache.kafka.connect.json.JsonConverter",\n    "key.converter.schemas.enable":"false",\n    "value.converter.schemas.enable":"false",\n  }\n}\'\n')),(0,a.yg)("p",null,"Operation Connector"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"# View connector status\ncurl -i http://127.0.0.1:8083/connectors/test-doris-sink-cluster/status -X GET\n# Delete connector\ncurl -i http://127.0.0.1:8083/connectors/test-doris-sink-cluster -X DELETE\n# Pause connector\ncurl -i http://127.0.0.1:8083/connectors/test-doris-sink-cluster/pause -X PUT\n# Restart connector\ncurl -i http://127.0.0.1:8083/connectors/test-doris-sink-cluster/resume -X PUT\n# Restart tasks within the connector\ncurl -i http://127.0.0.1:8083/connectors/test-doris-sink-cluster/tasks/0/restart -X POST\n")),(0,a.yg)("p",null,"Refer to: ",(0,a.yg)("a",{parentName:"p",href:"https://docs.confluent.io/platform/current/connect/references/restapi.html#kconnect-rest-interface"},"Connect REST Interface")),(0,a.yg)("admonition",{type:"warning"},(0,a.yg)("p",{parentName:"admonition"},"Note that when kafka-connect is started for the first time, three topics ",(0,a.yg)("inlineCode",{parentName:"p"},"config.storage.topic")," ",(0,a.yg)("inlineCode",{parentName:"p"},"offset.storage.topic")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"status.storage.topic")," will be created in the kafka cluster to record the shared connector configuration of kafka-connect. Offset data and status updates. ",(0,a.yg)("a",{parentName:"p",href:"https://docs.confluent.io/platform/current/connect/userguide.html"},"How to Use Kafka Connect - Get Started"))),(0,a.yg)("h3",{id:"access-an-ssl-certified-kafka-cluster"},"Access an SSL-certified Kafka cluster"),(0,a.yg)("p",null,"Accessing an SSL-certified Kafka cluster through kafka-connect requires the user to provide a certificate file (client.truststore.jks) used to authenticate the Kafka Broker public key. You can add the following configuration in the ",(0,a.yg)("inlineCode",{parentName:"p"},"connect-distributed.properties")," file:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"# Connect worker\nsecurity.protocol=SSL\nssl.truststore.location=/var/ssl/private/client.truststore.jks\nssl.truststore.password=test1234\n\n# Embedded consumer for sink connectors\nconsumer.security.protocol=SSL\nconsumer.ssl.truststore.location=/var/ssl/private/client.truststore.jks\nconsumer.ssl.truststore.password=test1234\n")),(0,a.yg)("p",null,"For instructions on configuring a Kafka cluster connected to SSL authentication through kafka-connect, please refer to: ",(0,a.yg)("a",{parentName:"p",href:"https://docs.confluent.io/5.1.2/tutorials/security_tutorial.html#configure-kconnect-long"},"Configure Kafka Connect")),(0,a.yg)("h3",{id:"dead-letter-queue"},"Dead letter queue"),(0,a.yg)("p",null,"By default, any errors encountered during or during the conversion will cause the connector to fail. Each connector configuration can also tolerate such errors by skipping them, optionally writing the details of each error and failed operation as well as the records in question (with varying levels of detail) to a dead-letter queue for logging."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"errors.tolerance=all\nerrors.deadletterqueue.topic.name=test_error_topic\nerrors.deadletterqueue.context.headers.enable=true\nerrors.deadletterqueue.topic.replication.factor=1\n")),(0,a.yg)("h2",{id:"configuration-items"},"Configuration items"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Key"),(0,a.yg)("th",{parentName:"tr",align:null},"Default Value"),(0,a.yg)("th",{parentName:"tr",align:null},(0,a.yg)("strong",{parentName:"th"},"Required")),(0,a.yg)("th",{parentName:"tr",align:null},(0,a.yg)("strong",{parentName:"th"},"Description")))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"name"),(0,a.yg)("td",{parentName:"tr",align:null},"-"),(0,a.yg)("td",{parentName:"tr",align:null},"Y"),(0,a.yg)("td",{parentName:"tr",align:null},"Connect application name, must be unique within the Kafka Connect environment")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"connector.class"),(0,a.yg)("td",{parentName:"tr",align:null},"-"),(0,a.yg)("td",{parentName:"tr",align:null},"Y"),(0,a.yg)("td",{parentName:"tr",align:null},"org.apache.doris.kafka.connector.DorisSinkConnector")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"topics"),(0,a.yg)("td",{parentName:"tr",align:null},"-"),(0,a.yg)("td",{parentName:"tr",align:null},"Y"),(0,a.yg)("td",{parentName:"tr",align:null},"List of subscribed topics, separated by commas. like: topic1, topic2")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"doris.urls"),(0,a.yg)("td",{parentName:"tr",align:null},"-"),(0,a.yg)("td",{parentName:"tr",align:null},"Y"),(0,a.yg)("td",{parentName:"tr",align:null},"Doris FE connection address. If there are multiple, separate them with commas. like: 10.20.30.1,10.20.30.2,10.20.30.3")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"doris.http.port"),(0,a.yg)("td",{parentName:"tr",align:null},"-"),(0,a.yg)("td",{parentName:"tr",align:null},"Y"),(0,a.yg)("td",{parentName:"tr",align:null},"Doris HTTP protocol port")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"doris.query.port"),(0,a.yg)("td",{parentName:"tr",align:null},"-"),(0,a.yg)("td",{parentName:"tr",align:null},"Y"),(0,a.yg)("td",{parentName:"tr",align:null},"Doris MySQL protocol port")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"doris.user"),(0,a.yg)("td",{parentName:"tr",align:null},"-"),(0,a.yg)("td",{parentName:"tr",align:null},"Y"),(0,a.yg)("td",{parentName:"tr",align:null},"Doris username")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"doris.password"),(0,a.yg)("td",{parentName:"tr",align:null},"-"),(0,a.yg)("td",{parentName:"tr",align:null},"Y"),(0,a.yg)("td",{parentName:"tr",align:null},"Doris password")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"doris.database"),(0,a.yg)("td",{parentName:"tr",align:null},"-"),(0,a.yg)("td",{parentName:"tr",align:null},"Y"),(0,a.yg)("td",{parentName:"tr",align:null},"The database to write to. It can be empty when there are multiple libraries. At the same time, the specific library name needs to be configured in topic2table.map.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"doris.topic2table.map"),(0,a.yg)("td",{parentName:"tr",align:null},"-"),(0,a.yg)("td",{parentName:"tr",align:null},"N"),(0,a.yg)("td",{parentName:"tr",align:null},"The corresponding relationship between topic and table table, for example: topic1:tb1,topic2:tb2",(0,a.yg)("br",null),"The default is empty, indicating that topic and table names correspond one to one. ",(0,a.yg)("br",null),"The format of multiple libraries is topic1:db1.tbl1,topic2:db2.tbl2")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"buffer.count.records"),(0,a.yg)("td",{parentName:"tr",align:null},"10000"),(0,a.yg)("td",{parentName:"tr",align:null},"N"),(0,a.yg)("td",{parentName:"tr",align:null},"The number of records each Kafka partition buffers in memory before flushing to doris. Default 10000 records")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"buffer.flush.time"),(0,a.yg)("td",{parentName:"tr",align:null},"120"),(0,a.yg)("td",{parentName:"tr",align:null},"N"),(0,a.yg)("td",{parentName:"tr",align:null},"Buffer refresh interval, in seconds, default 120 seconds")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"buffer.size.bytes"),(0,a.yg)("td",{parentName:"tr",align:null},"5000000(5MB)"),(0,a.yg)("td",{parentName:"tr",align:null},"N"),(0,a.yg)("td",{parentName:"tr",align:null},"The cumulative size of records buffered in memory for each Kafka partition, in bytes, default 5MB")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"jmx"),(0,a.yg)("td",{parentName:"tr",align:null},"true"),(0,a.yg)("td",{parentName:"tr",align:null},"N"),(0,a.yg)("td",{parentName:"tr",align:null},"To obtain connector internal monitoring indicators through JMX, please refer to: ",(0,a.yg)("a",{parentName:"td",href:"https://github.com/apache/doris-kafka-connector/blob/master/docs/en/Doris-Connector-JMX.md"},"Doris-Connector-JMX"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"enable.delete"),(0,a.yg)("td",{parentName:"tr",align:null},"false"),(0,a.yg)("td",{parentName:"tr",align:null},"N"),(0,a.yg)("td",{parentName:"tr",align:null},"Whether to delete records synchronously, default false")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"label.prefix"),(0,a.yg)("td",{parentName:"tr",align:null},"${name}"),(0,a.yg)("td",{parentName:"tr",align:null},"N"),(0,a.yg)("td",{parentName:"tr",align:null},"Stream load label prefix when importing data. Defaults to the Connector application name.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"auto.redirect"),(0,a.yg)("td",{parentName:"tr",align:null},"true"),(0,a.yg)("td",{parentName:"tr",align:null},"N"),(0,a.yg)("td",{parentName:"tr",align:null},"Whether to redirect StreamLoad requests. After being turned on, StreamLoad will redirect to the BE where data needs to be written through FE, and the BE information will no longer be displayed.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"load.model"),(0,a.yg)("td",{parentName:"tr",align:null},"stream_load"),(0,a.yg)("td",{parentName:"tr",align:null},"N"),(0,a.yg)("td",{parentName:"tr",align:null},"How to import data. Supports ",(0,a.yg)("inlineCode",{parentName:"td"},"stream_load")," to directly import data into Doris; also supports ",(0,a.yg)("inlineCode",{parentName:"td"},"copy_into")," to import data into object storage, and then load the data into Doris.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"sink.properties.*"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"'sink.properties.format':'json'"),", ",(0,a.yg)("br",null),(0,a.yg)("inlineCode",{parentName:"td"},"'sink.properties.read_json_by_line':'true'")),(0,a.yg)("td",{parentName:"tr",align:null},"N"),(0,a.yg)("td",{parentName:"tr",align:null},"Import parameters for Stream Load. ",(0,a.yg)("br",null),"For example: define column separator ",(0,a.yg)("inlineCode",{parentName:"td"},"'sink.properties.column_separator':','")," ",(0,a.yg)("br",null),"Detailed parameter reference ",(0,a.yg)("a",{parentName:"td",href:"https://doris.apache.org/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/STREAM-LOAD/"},"here"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"delivery.guarantee"),(0,a.yg)("td",{parentName:"tr",align:null},"at_least_once"),(0,a.yg)("td",{parentName:"tr",align:null},"N"),(0,a.yg)("td",{parentName:"tr",align:null},"How to ensure data consistency when consuming Kafka data is imported into Doris. Supports ",(0,a.yg)("inlineCode",{parentName:"td"},"at_least_once")," ",(0,a.yg)("inlineCode",{parentName:"td"},"exactly_once"),", default is ",(0,a.yg)("inlineCode",{parentName:"td"},"at_least_once"),". Doris needs to be upgraded to 2.1.0 or above to ensure data ",(0,a.yg)("inlineCode",{parentName:"td"},"exactly_once"))))),(0,a.yg)("p",null,"For other Kafka Connect Sink common configuration items, please refer to: ",(0,a.yg)("a",{parentName:"p",href:"https://docs.confluent.io/platform/current/installation/configuration/connect/sink-connect-configs.html#kconnect-long-sink-configuration-properties-for-cp"},"Kafka Connect Sink Configuration Properties")))}u.isMDXComponent=!0}}]);