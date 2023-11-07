"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[72703],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(a),u=n,h=c["".concat(s,".").concat(u)]||c[u]||d[u]||o;return a?r.createElement(h,i(i({ref:t},m),{},{components:a})):r.createElement(h,i({ref:t},m))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},46202:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={title:"STREAM-LOAD",language:"en"},i=void 0,l={unversionedId:"sql-manual/sql-reference/Data-Manipulation-Statements/Load/STREAM-LOAD",id:"sql-manual/sql-reference/Data-Manipulation-Statements/Load/STREAM-LOAD",title:"STREAM-LOAD",description:"\x3c!--",source:"@site/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/STREAM-LOAD.md",sourceDirName:"sql-manual/sql-reference/Data-Manipulation-Statements/Load",slug:"/sql-manual/sql-reference/Data-Manipulation-Statements/Load/STREAM-LOAD",permalink:"/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Load/STREAM-LOAD",draft:!1,tags:[],version:"current",frontMatter:{title:"STREAM-LOAD",language:"en"},sidebar:"docs",previous:{title:"CANCEL-RESTORE",permalink:"/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/CANCEL-RESTORE"},next:{title:"MULTI-LOAD",permalink:"/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Load/MULTI-LOAD"}},s={},p=[{value:"STREAM-LOAD",id:"stream-load",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],m={toc:p},c="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"stream-load"},"STREAM-LOAD"),(0,n.kt)("h3",{id:"name"},"Name"),(0,n.kt)("p",null,"STREAM LOAD"),(0,n.kt)("h3",{id:"description"},"Description"),(0,n.kt)("p",null,"stream-load: load data to table in streaming"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'curl --location-trusted -u user:passwd [-H ""...] -T data.file -XPUT http://fe_host:http_port/api/{db}/{table}/_stream_load\n')),(0,n.kt)("p",null,"This statement is used to import data into the specified table. The difference from ordinary Load is that this import method is synchronous import."),(0,n.kt)("p",null," This import method can still ensure the atomicity of a batch of import tasks, either all data is imported successfully or all of them fail."),(0,n.kt)("p",null," This operation will update the data of the rollup table related to this base table at the same time."),(0,n.kt)("p",null," This is a synchronous operation. After the entire data import work is completed, the import result is returned to the user."),(0,n.kt)("p",null," Currently, HTTP chunked and non-chunked uploads are supported. For non-chunked methods, Content-Length must be used to indicate the length of the uploaded content, which can ensure the integrity of the data."),(0,n.kt)("p",null,"In addition, it is best for users to set the content of the Expect Header field to 100-continue, which can avoid unnecessary data transmission in some error scenarios."),(0,n.kt)("p",null,"Parameter introduction:\nUsers can pass in import parameters through the Header part of HTTP"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"label: The label imported once, the data of the same label cannot be imported multiple times. Users can avoid the problem of duplicate data import by specifying Label."),(0,n.kt)("p",{parentName:"li"},"Currently, Doris retains the most recent successful label within 30 minutes.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"column_separator: used to specify the column separator in the import file, the default is \\t. If it is an invisible character, you need to add \\x as a prefix and use hexadecimal to represent the separator."),(0,n.kt)("p",{parentName:"li"},'For example, the separator \\x01 of the hive file needs to be specified as -H "column_separator:\\x01".'),(0,n.kt)("p",{parentName:"li"},"You can use a combination of multiple characters as column separators.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"line_delimiter: used to specify the newline character in the imported file, the default is \\n. Combinations of multiple characters can be used as newlines.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"columns: used to specify the correspondence between the columns in the import file and the columns in the table. If the column in the source file corresponds exactly to the content in the table, then there is no need to specify the content of this field."),(0,n.kt)("p",{parentName:"li"},"If the source file does not correspond to the table schema, then this field is required for some data conversion. There are two forms of column, one is directly corresponding to the field in the imported file, which is directly represented by the field name;"),(0,n.kt)("p",{parentName:"li"},"One is derived column, the syntax is ",(0,n.kt)("inlineCode",{parentName:"p"},"column_name")," = expression. Give a few examples to help understand."),(0,n.kt)("p",{parentName:"li"},' Example 1: There are 3 columns "c1, c2, c3" in the table, and the three columns in the source file correspond to "c3, c2, c1" at a time; then you need to specify -H "columns: c3, c2, c1 "'),(0,n.kt)("p",{parentName:"li"},' Example 2: There are 3 columns "c1, c2, c3" in the table, the first three columns in the source file correspond in turn, but there is more than 1 column; then you need to specify -H "columns: c1, c2, c3, xxx";'),(0,n.kt)("p",{parentName:"li"}," The last column can be arbitrarily assigned a name and placeholder"),(0,n.kt)("p",{parentName:"li"},' Example 3: There are three columns "year, month, day" in the table, and there is only one time column in the source file, which is in "2018-06-01 01:02:03" format;'),(0,n.kt)("p",{parentName:"li"},' Then you can specify -H "columns: col, year = year(col), month=month(col), day=day(col)" to complete the import')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"where: used to extract part of the data. If the user needs to filter out the unnecessary data, he can achieve this by setting this option."),(0,n.kt)("p",{parentName:"li"},'Example 1: Only import data greater than k1 column equal to 20180601, then you can specify -H "where: k1 = 20180601" when importing')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"max_filter_ratio: The maximum tolerable data ratio that can be filtered (for reasons such as data irregularity). Zero tolerance by default. Data irregularities do not include rows filtered out by where conditions.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"partitions: used to specify the partition designed for this import. If the user can determine the partition corresponding to the data, it is recommended to specify this item. Data that does not satisfy these partitions will be filtered out."),(0,n.kt)("p",{parentName:"li"},'For example, specify import to p1, p2 partition, -H "partitions: p1, p2"')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"timeout: Specify the import timeout. in seconds. The default is 600 seconds. The setting range is from 1 second to 259200 seconds.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'strict_mode: The user specifies whether to enable strict mode for this import. The default is off. The enable mode is -H "strict_mode: true".')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"timezone: Specify the time zone used for this import. The default is Dongba District. This parameter affects the results of all time zone-related functions involved in the import.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"exec_mem_limit: Import memory limit. Default is 2GB. The unit is bytes.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"format: Specify load data format, support csv, json, ",(0,n.kt)("version",{since:"1.2",type:"inline"}," csv_with_names(support csv file line header filter), csv_with_names_and_types(support csv file first two lines filter), parquet, orc"),", default is csv.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"jsonpaths: The way of importing json is divided into: simple mode and matching mode."),(0,n.kt)("p",{parentName:"li"},"Simple mode: The simple mode is not set the jsonpaths parameter. In this mode, the json data is required to be an object type, for example:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'{"k1":1, "k2":2, "k3":"hello"}, where k1, k2, k3 are column names.\n')),(0,n.kt)("p",{parentName:"li"},"Matching mode: It is relatively complex for json data and needs to match the corresponding value through the jsonpaths parameter.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"strip_outer_array: Boolean type, true indicates that the json data starts with an array object and flattens the array object, the default value is false. E.g:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},' [\n  {"k1" : 1, "v1" : 2},\n  {"k1" : 3, "v1" : 4}\n ]\n')),(0,n.kt)("p",{parentName:"li"},"When strip_outer_array is true, the final import into doris will generate two rows of data."))),(0,n.kt)("ol",{start:15},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'json_root: json_root is a valid jsonpath string, used to specify the root node of the json document, the default value is "".')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"merge_type: The merge type of data, which supports three types: APPEND, DELETE, and MERGE. Among them, APPEND is the default value, which means that this batch of data needs to be appended to the existing data, and DELETE means to delete all the data with the same key as this batch of data. Line, the MERGE semantics need to be used in conjunction with the delete condition, which means that the data that meets the delete condition is processed according to the DELETE semantics and the rest is processed according to the APPEND semantics, for example: ",(0,n.kt)("inlineCode",{parentName:"p"},'-H "merge_type: MERGE" -H "delete: flag=1"'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"delete: Only meaningful under MERGE, indicating the deletion condition of the data")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"function_column.sequence_col: Only applicable to UNIQUE_KEYS. Under the same key column, ensure that the value column is REPLACEed according to the source_sequence column. The source_sequence can be a column in the data source or a column in the table structure.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"fuzzy_parse: Boolean type, true means that json will be parsed with the schema of the first row. Enabling this option can improve the efficiency of json import, but requires that the order of the keys of all json objects is the same as the first row, the default is false, only use in json format")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"num_as_string: Boolean type, true means that when parsing json data, the numeric type will be converted to a string, and then imported without losing precision.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"read_json_by_line: Boolean type, true to support reading one json object per line, the default value is false.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"send_batch_parallelism: Integer, used to set the parallelism of sending batch data. If the value of parallelism exceeds ",(0,n.kt)("inlineCode",{parentName:"p"},"max_send_batch_parallelism_per_job")," in the BE configuration, the BE as a coordination point will use the value of ",(0,n.kt)("inlineCode",{parentName:"p"},"max_send_batch_parallelism_per_job"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"hidden_columns: Specify hidden column when no ",(0,n.kt)("inlineCode",{parentName:"p"},"columns")," in Headers\uff0cmulti hidden column shoud be\nseparated by commas."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"   ```\n       hidden_columns: __DORIS_DELETE_SIGN__,__DORIS_SEQUENCE_COL__\n       The system will use the order specified by user. in case above, data should be ended\n       with __DORIS_SEQUENCE_COL__.\n   ```\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"load_to_single_tablet: Boolean type, True means that one task can only load data to one tablet in the corresponding partition at a time. The default value is false. This parameter can only be set when loading data into the OLAP table with random bucketing.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"compress_type: Specify compress type file. Only support compressed csv file now. Support gz, lzo, bz2, lz4, lzop, deflate.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"trim_double_quotes: Boolean type, The default value is false. True means that the outermost double quotes of each field in the csv file are trimmed.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"skip_lines: ",(0,n.kt)("version",{since:"dev",type:"inline"}," Integer type, the default value is 0. It will skip some lines in the head of csv file. It will be disabled when format is ",(0,n.kt)("inlineCode",{parentName:"p"},"csv_with_names")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"csv_with_names_and_types"),". "))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"comment: ",(0,n.kt)("version",{since:"1.2.3",type:"inline"},' String type, the default value is "". '))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"enclose: ",(0,n.kt)("version",{since:"dev",type:"inline"},' When the csv data field contains row delimiters or column delimiters, to prevent accidental truncation, single-byte characters can be specified as brackets for protection. For example, the column separator is ",", the bracket is "\'", and the data is "a,\'b,c\'", then "b,c" will be parsed as a field. '))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"escape ",(0,n.kt)("version",{since:"dev",type:"inline"},' Used to escape characters that appear in a csv field identical to the enclosing characters. For example, if the data is "a,\'b,\'c\'", enclose is "\'", and you want "b,\'c to be parsed as a field, you need to specify a single-byte escape character, such as "\\", and then modify the data to "a,\' b,\\\'c\'". ')))),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Import the data in the local file 'testData' into the table 'testTbl' in the database 'testDb', and use Label for deduplication. Specify a timeout of 100 seconds"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'    curl --location-trusted -u root -H "label:123" -H "timeout:100" -T testData http://host:port/api/testDb/testTbl/_stream_load\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Import the data in the local file 'testData' into the table 'testTbl' in the database 'testDb', use Label for deduplication, and only import data whose k1 is equal to 20180601"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'curl --location-trusted -u root -H "label:123" -H "where: k1=20180601" -T testData http://host:port/api/testDb/testTbl/_stream_load\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Import the data in the local file 'testData' into the table 'testTbl' in the database 'testDb', allowing a 20% error rate (the user is in the defalut_cluster)"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'curl --location-trusted -u root -H "label:123" -H "max_filter_ratio:0.2" -T testData http://host:port/api/testDb/testTbl/_stream_load\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Import the data in the local file 'testData' into the table 'testTbl' in the database 'testDb', allow a 20% error rate, and specify the column name of the file (the user is in the defalut_cluster)"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'curl --location-trusted -u root -H "label:123" -H "max_filter_ratio:0.2" -H "columns: k2, k1, v1" -T testData http://host:port/api/testDb/testTbl /_stream_load\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Import the data in the local file 'testData' into the p1, p2 partitions of the table 'testTbl' in the database 'testDb', allowing a 20% error rate."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'curl --location-trusted -u root -H "label:123" -H "max_filter_ratio:0.2" -H "partitions: p1, p2" -T testData http://host:port/api/testDb/testTbl/_stream_load\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Import using streaming (user is in defalut_cluster)"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"seq 1 10 | awk '{OFS=\"\\t\"}{print $1, $1 * 10}' | curl --location-trusted -u root -T - http://host:port/api/testDb/testTbl/ _stream_load\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Import a table containing HLL columns, which can be columns in the table or columns in the data to generate HLL columns, or use hll_empty to supplement columns that are not in the data"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'curl --location-trusted -u root -H "columns: k1, k2, v1=hll_hash(k1), v2=hll_empty()" -T testData http://host:port/api/testDb/testTbl/_stream_load\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Import data for strict mode filtering and set the time zone to Africa/Abidjan"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'curl --location-trusted -u root -H "strict_mode: true" -H "timezone: Africa/Abidjan" -T testData http://host:port/api/testDb/testTbl/_stream_load\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Import a table with a BITMAP column, which can be a column in the table or a column in the data to generate a BITMAP column, or use bitmap_empty to fill an empty Bitmap"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},' curl --location-trusted -u root -H "columns: k1, k2, v1=to_bitmap(k1), v2=bitmap_empty()" -T testData http://host:port/api/testDb/testTbl/_stream_load\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Simple mode, import json data\nTable Structure:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'`category` varchar(512) NULL COMMENT "",\n`author` varchar(512) NULL COMMENT "",\n`title` varchar(512) NULL COMMENT "",\n`price` double NULL COMMENT ""\n')),(0,n.kt)("p",{parentName:"li"},"json data format:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'{"category":"C++","author":"avc","title":"C++ primer","price":895}\n')),(0,n.kt)("p",{parentName:"li"},"Import command:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'curl --location-trusted -u root -H "label:123" -H "format: json" -T testData http://host:port/api/testDb/testTbl/_stream_load\n')),(0,n.kt)("p",{parentName:"li"},"In order to improve throughput, it supports importing multiple pieces of json data at one time, each line is a json object, and \\n is used as a newline by default. You need to set read_json_by_line to true. The json data format is as follows:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'{"category":"C++","author":"avc","title":"C++ primer","price":89.5}\n{"category":"Java","author":"avc","title":"Effective Java","price":95}\n{"category":"Linux","author":"avc","title":"Linux kernel","price":195}\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Match pattern, import json data\njson data format:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'[\n{"category":"xuxb111","author":"1avc","title":"SayingsoftheCentury","price":895},{"category":"xuxb222","author":"2avc"," title":"SayingsoftheCentury","price":895},\n{"category":"xuxb333","author":"3avc","title":"SayingsoftheCentury","price":895}\n]\n')),(0,n.kt)("p",{parentName:"li"},"Precise import by specifying jsonpath, such as importing only three attributes of category, author, and price"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'curl --location-trusted -u root -H "columns: category, price, author" -H "label:123" -H "format: json" -H "jsonpaths: [\\"$.category\\",\\" $.price\\",\\"$.author\\"]" -H "strip_outer_array: true" -T testData http://host:port/api/testDb/testTbl/_stream_load\n')),(0,n.kt)("p",{parentName:"li"},"illustrate:\n1) If the json data starts with an array, and each object in the array is a record, you need to set strip_outer_array to true, which means flatten the array.\n2) If the json data starts with an array, and each object in the array is a record, when setting jsonpath, our ROOT node is actually an object in the array.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"User specified json root node\njson data format:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'{\n "RECORDS":[\n{"category":"11","title":"SayingsoftheCentury","price":895,"timestamp":1589191587},\n{"category":"22","author":"2avc","price":895,"timestamp":1589191487},\n{"category":"33","author":"3avc","title":"SayingsoftheCentury","timestamp":1589191387}\n]\n}\n')),(0,n.kt)("p",{parentName:"li"},"Precise import by specifying jsonpath, such as importing only three attributes of category, author, and price"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'curl --location-trusted -u root -H "columns: category, price, author" -H "label:123" -H "format: json" -H "jsonpaths: [\\"$.category\\",\\" $.price\\",\\"$.author\\"]" -H "strip_outer_array: true" -H "json_root: $.RECORDS" -T testData http://host:port/api/testDb/testTbl/_stream_load\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Delete the data with the same import key as this batch"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'curl --location-trusted -u root -H "merge_type: DELETE" -T testData http://host:port/api/testDb/testTbl/_stream_load\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Delete the columns in this batch of data that match the data whose flag is listed as true, and append other rows normally"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'curl --location-trusted -u root: -H "column_separator:," -H "columns: siteid, citycode, username, pv, flag" -H "merge_type: MERGE" -H "delete: flag=1" -T testData http://host:port/api/testDb/testTbl/_stream_load\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Import data into UNIQUE_KEYS table with sequence column"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'curl --location-trusted -u root -H "columns: k1,k2,source_sequence,v1,v2" -H "function_column.sequence_col: source_sequence" -T testData http://host:port/api/testDb/testTbl/ _stream_load\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"csv file line header filter import"),(0,n.kt)("p",{parentName:"li"},"file data:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"   id,name,age\n   1,doris,20\n   2,flink,10\n")),(0,n.kt)("p",{parentName:"li"},"Filter the first line import by specifying ",(0,n.kt)("inlineCode",{parentName:"p"},"format=csv_with_names")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'curl --location-trusted -u root -T test.csv  -H "label:1" -H "format:csv_with_names" -H "column_separator:," http://host:port/api/testDb/testTbl/_stream_load\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Import data into a table whose table field contains DEFAULT CURRENT_TIMESTAMP"),(0,n.kt)("p",{parentName:"li"},"Table Structure:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"`id` bigint(30) NOT NULL,\n`order_code` varchar(30) DEFAULT NULL COMMENT '',\n`create_time` datetimev2(3) DEFAULT CURRENT_TIMESTAMP    \n")),(0,n.kt)("p",{parentName:"li"},"JSON data format:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'{"id":1,"order_Code":"avc"}\n')),(0,n.kt)("p",{parentName:"li"},"Import command:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'curl --location-trusted -u root -T test.json -H "label:1" -H "format:json" -H \'columns: id, order_code, create_time=CURRENT_TIMESTAMP()\' http://host:port/api/testDb/testTbl/_stream_load\n')))),(0,n.kt)("h3",{id:"keywords"},"Keywords"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"STREAM, LOAD\n")),(0,n.kt)("h3",{id:"best-practice"},"Best Practice"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Check the import task status"),(0,n.kt)("p",{parentName:"li"},"Stream Load is a synchronous import process. The successful execution of the statement means that the data is imported successfully. The imported execution result will be returned synchronously through the HTTP return value. And display it in Json format. An example is as follows:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "TxnId": 17,\n    "Label": "707717c0-271a-44c5-be0b-4e71bfeacaa5",\n    "Status": "Success",\n    "Message": "OK",\n    "NumberTotalRows": 5,\n    "NumberLoadedRows": 5,\n    "NumberFilteredRows": 0,\n    "NumberUnselectedRows": 0,\n    "LoadBytes": 28,\n    "LoadTimeMs": 27,\n    "BeginTxnTimeMs": 0,\n    "StreamLoadPutTimeMs": 2,\n    "ReadDataTimeMs": 0,\n    "WriteDataTimeMs": 3,\n    "CommitAndPublishTimeMs": 18\n}\n')),(0,n.kt)("p",{parentName:"li"},"The following main explanations are given for the Stream load import result parameters:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"TxnId: The imported transaction ID. Users do not perceive.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Label: Import Label. User specified or automatically generated by the system.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Status: Import completion status."),(0,n.kt)("p",{parentName:"li"},' "Success": Indicates successful import.'),(0,n.kt)("p",{parentName:"li"},' "Publish Timeout": This state also indicates that the import has been completed, except that the data may be delayed and visible without retrying.'),(0,n.kt)("p",{parentName:"li"},' "Label Already Exists": Label duplicate, need to be replaced Label.'),(0,n.kt)("p",{parentName:"li"},' "Fail": Import failed.')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"ExistingJobStatus: The state of the load job corresponding to the existing Label."),(0,n.kt)("p",{parentName:"li"},'  This field is displayed only when the status is "Label Already Exists". The user can know the status of the load job corresponding to Label through this state. "RUNNING" means that the job is still executing, and "FINISHED" means that the job is successful.')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Message: Import error messages.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"NumberTotalRows: Number of rows imported for total processing.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"NumberLoadedRows: Number of rows successfully imported.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"NumberFilteredRows: Number of rows that do not qualify for data quality.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"NumberUnselectedRows: Number of rows filtered by where condition.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"LoadBytes: Number of bytes imported.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"LoadTimeMs: Import completion time. Unit milliseconds.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"BeginTxnTimeMs: The time cost for RPC to Fe to begin a transaction, Unit milliseconds.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"StreamLoadPutTimeMs: The time cost for RPC to Fe to get a stream load plan, Unit milliseconds.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"ReadDataTimeMs: Read data time, Unit milliseconds.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"WriteDataTimeMs: Write data time, Unit milliseconds.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"CommitAndPublishTimeMs: The time cost for RPC to Fe to commit and publish a transaction, Unit milliseconds.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"ErrorURL: If you have data quality problems, visit this URL to see specific error lines."),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"Note: Since Stream load is a synchronous import mode, import information will not be recorded in Doris system. Users cannot see Stream load asynchronously by looking at import commands. You need to listen for the return value of the create import request to get the import result."))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"How to correctly submit the Stream Load job and process the returned results."),(0,n.kt)("p",{parentName:"li"},"Stream Load is a synchronous import operation, so the user needs to wait for the return result of the command synchronously, and decide the next processing method according to the return result."),(0,n.kt)("p",{parentName:"li"},"The user's primary concern is the ",(0,n.kt)("inlineCode",{parentName:"p"},"Status")," field in the returned result."),(0,n.kt)("p",{parentName:"li"},"If it is ",(0,n.kt)("inlineCode",{parentName:"p"},"Success"),", everything is fine and you can do other operations after that."),(0,n.kt)("p",{parentName:"li"},"If the returned result shows a large number of ",(0,n.kt)("inlineCode",{parentName:"p"},"Publish Timeout"),", it may indicate that some resources (such as IO) of the cluster are currently under strain, and the imported data cannot take effect finally. The import task in the state of ",(0,n.kt)("inlineCode",{parentName:"p"},"Publish Timeout")," has succeeded and does not need to be retried. However, it is recommended to slow down or stop the submission of new import tasks and observe the cluster load."),(0,n.kt)("p",{parentName:"li"},"If the returned result is ",(0,n.kt)("inlineCode",{parentName:"p"},"Fail"),", the import failed, and you need to check the problem according to the specific reason. Once resolved, you can retry with the same Label."),(0,n.kt)("p",{parentName:"li"},"In some cases, the user's HTTP connection may be disconnected abnormally and the final returned result cannot be obtained. At this point, you can use the same Label to resubmit the import task, and the resubmitted task may have the following results:"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"Status")," status is ",(0,n.kt)("inlineCode",{parentName:"li"},"Success"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Fail")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"Publish Timeout"),". At this point, it can be processed according to the normal process."),(0,n.kt)("li",{parentName:"ol"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"Status")," status is ",(0,n.kt)("inlineCode",{parentName:"li"},"Label Already Exists"),". At this time, you need to continue to view the ",(0,n.kt)("inlineCode",{parentName:"li"},"ExistingJobStatus")," field. If the value of this field is ",(0,n.kt)("inlineCode",{parentName:"li"},"FINISHED"),", it means that the import task corresponding to this Label has been successful, and there is no need to retry. If it is ",(0,n.kt)("inlineCode",{parentName:"li"},"RUNNING"),", it means that the import task corresponding to this Label is still running. At this time, you need to use the same Label to continue to submit repeatedly at intervals (such as 10 seconds) until ",(0,n.kt)("inlineCode",{parentName:"li"},"Status")," is not ",(0,n.kt)("inlineCode",{parentName:"li"},"Label Already Exists' "),", or until the value of the ",(0,n.kt)("inlineCode",{parentName:"li"},"ExistingJobStatus")," field is ",(0,n.kt)("inlineCode",{parentName:"li"},"FINISHED"),"."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Cancel the import task"),(0,n.kt)("p",{parentName:"li"},"Import tasks that have been submitted and not yet completed can be canceled with the CANCEL LOAD command. After cancellation, the written data will also be rolled back and will not take effect.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Label, import transaction, multi-table atomicity"),(0,n.kt)("p",{parentName:"li"},"All import tasks in Doris are atomic. And the import of multiple tables in the same import task can also guarantee atomicity. At the same time, Doris can also use the Label mechanism to ensure that the data imported is not lost or heavy. For details, see the ",(0,n.kt)("a",{parentName:"p",href:"/docs/dev/data-operate/import/import-scenes/load-atomicity"},"Import Transactions and Atomicity")," documentation.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Column mapping, derived columns and filtering"),(0,n.kt)("p",{parentName:"li"},"Doris can support very rich column transformation and filtering operations in import statements. Most built-in functions and UDFs are supported. For how to use this function correctly, please refer to the ",(0,n.kt)("a",{parentName:"p",href:"/docs/dev/data-operate/import/import-scenes/load-data-convert"},"Column Mapping, Conversion and Filtering")," document.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Error data filtering"),(0,n.kt)("p",{parentName:"li"},"Doris' import tasks can tolerate a portion of malformed data. The tolerance ratio is set via ",(0,n.kt)("inlineCode",{parentName:"p"},"max_filter_ratio"),". The default is 0, which means that the entire import task will fail when there is an error data. If the user wants to ignore some problematic data rows, the secondary parameter can be set to a value between 0 and 1, and Doris will automatically skip the rows with incorrect data format."),(0,n.kt)("p",{parentName:"li"},"For some calculation methods of the tolerance rate, please refer to the ",(0,n.kt)("a",{parentName:"p",href:"/docs/dev/data-operate/import/import-scenes/load-data-convert"},"Column Mapping, Conversion and Filtering")," document.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Strict Mode"),(0,n.kt)("p",{parentName:"li"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},"strict_mode")," attribute is used to set whether the import task runs in strict mode. The format affects the results of column mapping, transformation, and filtering, and it also controls the behavior of partial updates. For a detailed description of strict mode, see the ",(0,n.kt)("a",{parentName:"p",href:"/docs/dev/data-operate/import/import-scenes/load-strict-mode"},"strict mode")," documentation.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Timeout"),(0,n.kt)("p",{parentName:"li"},"The default timeout for Stream Load is 10 minutes. from the time the task is submitted. If it does not complete within the timeout period, the task fails.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Limits on data volume and number of tasks"),(0,n.kt)("p",{parentName:"li"},"Stream Load is suitable for importing data within a few GB. Because the data is processed by single-threaded transmission, the performance of importing excessively large data cannot be guaranteed. When a large amount of local data needs to be imported, multiple import tasks can be submitted in parallel."),(0,n.kt)("p",{parentName:"li"},"Doris also limits the number of import tasks running at the same time in the cluster, usually ranging from 10-20. Import jobs submitted after that will be rejected."))))}d.isMDXComponent=!0}}]);