"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[38141],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(a),c=r,h=d["".concat(p,".").concat(c)]||d[c]||u[c]||o;return a?n.createElement(h,i(i({ref:t},m),{},{components:a})):n.createElement(h,i({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},70870:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={title:"Importing Data in JSON Format",language:"en"},i=void 0,l={unversionedId:"data-operate/import/import-way/load-json-format",id:"version-2.0/data-operate/import/import-way/load-json-format",title:"Importing Data in JSON Format",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/data-operate/import/import-way/load-json-format.md",sourceDirName:"data-operate/import/import-way",slug:"/data-operate/import/import-way/load-json-format",permalink:"/docs/data-operate/import/import-way/load-json-format",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Importing Data in JSON Format",language:"en"},sidebar:"docs",previous:{title:"Insert Into",permalink:"/docs/data-operate/import/import-way/insert-into-manual"},next:{title:"Min Load Replica Num",permalink:"/docs/data-operate/import/import-advanced/min-load-replica-num"}},p={},s=[{value:"Supported import methods",id:"supported-import-methods",level:2},{value:"Supported JSON Formats",id:"supported-json-formats",level:2},{value:"streaming_load_json_max_mb parameters",id:"streaming_load_json_max_mb-parameters",level:3},{value:"fuzzy_parse parameters",id:"fuzzy_parse-parameters",level:3},{value:"JSON Path",id:"json-path",level:2},{value:"JSON Path and Columns",id:"json-path-and-columns",level:2},{value:"JSON root",id:"json-root",level:2},{value:"NULL and Default values",id:"null-and-default-values",level:2},{value:"Application example",id:"application-example",level:2},{value:"Stream Load",id:"stream-load",level:3},{value:"Routine Load",id:"routine-load",level:3}],m={toc:s},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"importing-data-in-json-format"},"Importing Data in JSON Format"),(0,r.kt)("p",null,"Doris supports importing data in JSON format. This document mainly describes the precautions when importing data in JSON format."),(0,r.kt)("h2",{id:"supported-import-methods"},"Supported import methods"),(0,r.kt)("p",null,"Currently, only the following import methods support data import in JSON format:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Through ",(0,r.kt)("a",{parentName:"li",href:"/docs/sql-manual/sql-functions/table-functions/s3"},"S3 table function")," import statement: insert into table select * from S3();"),(0,r.kt)("li",{parentName:"ul"},"Import the local JSON format file through ",(0,r.kt)("a",{parentName:"li",href:"/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/STREAM-LOAD"},"STREAM LOAD"),"."),(0,r.kt)("li",{parentName:"ul"},"Subscribe and consume JSON format in Kafka via ",(0,r.kt)("a",{parentName:"li",href:"/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CREATE-ROUTINE-LOAD"},"ROUTINE LOAD")," information.")),(0,r.kt)("p",null,"Other ways of importing data in JSON format are not currently supported."),(0,r.kt)("h2",{id:"supported-json-formats"},"Supported JSON Formats"),(0,r.kt)("p",null,"Currently only the following two JSON formats are supported:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Multiple rows of data represented by Array"),(0,r.kt)("p",{parentName:"li"},"JSON format with Array as root node. Each element in the Array represents a row of data to be imported, usually an Object. An example is as follows:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n    { "id": 123, "city" : "beijing"},\n    { "id": 456, "city" : "shanghai"},\n    ...\n]\n')),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n    { "id": 123, "city" : { "name" : "beijing", "region" : "haidian"}},\n    { "id": 456, "city" : { "name" : "beijing", "region" : "chaoyang"}},\n    ...\n]\n')),(0,r.kt)("p",{parentName:"li"},"This method is typically used for Stream Load import methods to represent multiple rows of data in a batch of imported data."),(0,r.kt)("p",{parentName:"li"},"This method must be used with the setting ",(0,r.kt)("inlineCode",{parentName:"p"},"strip_outer_array=true"),". Doris will expand the array when parsing, and then parse each Object in turn as a row of data.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"A single row of data represented by Object\nJSON format with Object as root node. The entire Object represents a row of data to be imported. An example is as follows:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "id": 123, "city" : "beijing"}\n')),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "id": 123, "city" : { "name" : "beijing", "region" : "haidian" }}\n')),(0,r.kt)("p",{parentName:"li"},"This method is usually used for the Routine Load import method, such as representing a message in Kafka, that is, a row of data.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Multiple lines of Object data separated by a fixed delimiter"),(0,r.kt)("p",{parentName:"li"},"A row of data represented by Object represents a row of data to be imported. The example is as follows:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "id": 123, "city" : "beijing"}\n{ "id": 456, "city" : "shanghai"}\n...\n')),(0,r.kt)("p",{parentName:"li"},"This method is typically used for Stream Load import methods to represent multiple rows of data in a batch of imported data."),(0,r.kt)("p",{parentName:"li"},"This method must be used with the setting ",(0,r.kt)("inlineCode",{parentName:"p"},"read_json_by_line=true"),", the special delimiter also needs to specify the ",(0,r.kt)("inlineCode",{parentName:"p"},"line_delimiter")," parameter, the default is ",(0,r.kt)("inlineCode",{parentName:"p"},"\\n"),". When Doris parses, it will be separated according to the delimiter, and then parse each line of Object as a line of data."))),(0,r.kt)("h3",{id:"streaming_load_json_max_mb-parameters"},"streaming_load_json_max_mb parameters"),(0,r.kt)("p",null,"Some data formats, such as JSON, cannot be split. Doris must read all the data into the memory before parsing can begin. Therefore, this value is used to limit the maximum amount of data that can be loaded in a single Stream load."),(0,r.kt)("p",null,"The default value is 100, The unit is MB, modify this parameter by referring to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/admin-manual/config/be-config"},"BE configuration"),"."),(0,r.kt)("h3",{id:"fuzzy_parse-parameters"},"fuzzy_parse parameters"),(0,r.kt)("p",null,"In ",(0,r.kt)("a",{parentName:"p",href:"/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/STREAM-LOAD"},"STREAM LOAD")," ",(0,r.kt)("inlineCode",{parentName:"p"},"fuzzy_parse")," parameter can be added to speed up JSON Data import efficiency."),(0,r.kt)("p",null,"This parameter is usually used to import the format of ",(0,r.kt)("strong",{parentName:"p"},"multi-line data represented by Array"),", so it is generally used with ",(0,r.kt)("inlineCode",{parentName:"p"},"strip_outer_array=true"),"."),(0,r.kt)("p",null,"This feature requires that each row of data in the Array has exactly the same order of fields. Doris will only parse according to the field order of the first row, and then access the subsequent data in the form of subscripts. This method can improve the import efficiency by 3-5X."),(0,r.kt)("h2",{id:"json-path"},"JSON Path"),(0,r.kt)("p",null,"Doris supports extracting data specified in JSON through JSON Path."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note: Because for Array type data, Doris will expand the array first, and finally process it in a single line according to the Object format. So the examples later in this document are all explained with Json data in a single Object format. ")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"do not specify JSON Path"),(0,r.kt)("p",{parentName:"li"},"If JSON Path is not specified, Doris will use the column name in the table to find the element in Object by default. An example is as follows:"),(0,r.kt)("p",{parentName:"li"},"The table contains two columns: ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"city")),(0,r.kt)("p",{parentName:"li"},"The JSON data is as follows:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "id": 123, "city" : "beijing"}\n')),(0,r.kt)("p",{parentName:"li"},"Then Doris will use ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"city")," for matching, and get the final data ",(0,r.kt)("inlineCode",{parentName:"p"},"123")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"beijing"),"."),(0,r.kt)("p",{parentName:"li"},"If the JSON data is as follows:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "id": 123, "name" : "beijing"}\n')),(0,r.kt)("p",{parentName:"li"},"Then use ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"city")," for matching, and get the final data ",(0,r.kt)("inlineCode",{parentName:"p"},"123")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Specify JSON Path"),(0,r.kt)("p",{parentName:"li"},"Specify a set of JSON Path in the form of a JSON data. Each element in the array represents a column to extract. An example is as follows:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'["$.id", "$.name"]\n')),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'["$.id.sub_id", "$.name[0]", "$.city[0]"]\n')),(0,r.kt)("p",{parentName:"li"},"Doris will use the specified JSON Path for data matching and extraction.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"matches non-primitive types"),(0,r.kt)("p",{parentName:"li"},"The values that are finally matched in the preceding examples are all primitive types, such as integers, strings, and so on. Doris currently does not support composite types, such as Array, Map, etc. So when a non-basic type is matched, Doris will convert the type to a string in Json format and import it as a string type. An example is as follows:"),(0,r.kt)("p",{parentName:"li"},"The JSON data is:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "id": 123, "city" : { "name" : "beijing", "region" : "haidian" }}\n')),(0,r.kt)("p",{parentName:"li"},"JSON Path is ",(0,r.kt)("inlineCode",{parentName:"p"},'["$.city"]'),". The matched elements are:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "name" : "beijing", "region" : "haidian" }\n')),(0,r.kt)("p",{parentName:"li"},"The element will be converted to a string for subsequent import operations:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},"\"{'name':'beijing','region':'haidian'}\"\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"match failed"),(0,r.kt)("p",{parentName:"li"},"When the match fails, ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," will be returned. An example is as follows:"),(0,r.kt)("p",{parentName:"li"},"The JSON data is:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "id": 123, "name" : "beijing"}\n')),(0,r.kt)("p",{parentName:"li"},"JSON Path is ",(0,r.kt)("inlineCode",{parentName:"p"},'["$.id", "$.info"]'),". The matched elements are ",(0,r.kt)("inlineCode",{parentName:"p"},"123")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,r.kt)("p",{parentName:"li"},"Doris currently does not distinguish between null values represented in JSON data and null values produced when a match fails. Suppose the JSON data is:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "id": 123, "name" : null }\n')),(0,r.kt)("p",{parentName:"li"},"The same result would be obtained with the following two JSON Paths: ",(0,r.kt)("inlineCode",{parentName:"p"},"123")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'["$.id", "$.name"]\n')),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'["$.id", "$.info"]\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Exact match failed"),(0,r.kt)("p",{parentName:"li"},"In order to prevent misoperation caused by some parameter setting errors. When Doris tries to match a row of data, if all columns fail to match, it considers this to be an error row. Suppose the Json data is:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "id": 123, "city" : "beijing" }\n')),(0,r.kt)("p",{parentName:"li"},"If the JSON Path is written incorrectly as (or if the JSON Path is not specified, the columns in the table do not contain ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"city"),"):"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'["$.ad", "$.infa"]\n')),(0,r.kt)("p",{parentName:"li"},"would cause the exact match to fail, and the line would be marked as an error line instead of yielding ",(0,r.kt)("inlineCode",{parentName:"p"},"null, null"),"."))),(0,r.kt)("h2",{id:"json-path-and-columns"},"JSON Path and Columns"),(0,r.kt)("p",null,"JSON Path is used to specify how to extract data in JSON format, while Columns specifies the mapping and conversion relationship of columns. Both can be used together."),(0,r.kt)("p",null,"In other words, it is equivalent to rearranging the columns of a JSON format data according to the column order specified in JSON Path through JSON Path. After that, you can map the rearranged source data to the columns of the table through Columns. An example is as follows:"),(0,r.kt)("p",null,"Data content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"k1": 1, "k2": 2}\n')),(0,r.kt)("p",null,"Table Structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"k2 int, k1 int\n")),(0,r.kt)("p",null,"Import statement 1 (take Stream Load as an example):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -v --location-trusted -u root: -H "format: json" -H "jsonpaths: [\\"$.k2\\", \\"$.k1\\"]" -T example.json http:/ /127.0.0.1:8030/api/db1/tbl1/_stream_load\n')),(0,r.kt)("p",null,"In import statement 1, only JSON Path is specified, and Columns is not specified. The role of JSON Path is to extract the JSON data in the order of the fields in the JSON Path, and then write it in the order of the table structure. The final imported data results are as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"+------+------+\n| k1 | k2 |\n+------+------+\n| 2 | 1 |\n+------+------+\n")),(0,r.kt)("p",null,'You can see that the actual k1 column imports the value of the "k2" column in the JSON data. This is because the field name in JSON is not equivalent to the field name in the table structure. We need to explicitly specify the mapping between the two.'),(0,r.kt)("p",null,"Import statement 2:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -v --location-trusted -u root: -H "format: json" -H "jsonpaths: [\\"$.k2\\", \\"$.k1\\"]" -H "columns: k2, k1 " -T example.json http://127.0.0.1:8030/api/db1/tbl1/_stream_load\n')),(0,r.kt)("p",null,"Compared with the import statement 1, the Columns field is added here to describe the mapping relationship of the columns, in the order of ",(0,r.kt)("inlineCode",{parentName:"p"},"k2, k1"),". That is, after extracting in the order of fields in JSON Path, specify the value of column k2 in the table for the first column, and the value of column k1 in the table for the second column. The final imported data results are as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"+------+------+\n| k1 | k2 |\n+------+------+\n| 1 | 2 |\n+------+------+\n")),(0,r.kt)("p",null,"Of course, as with other imports, column transformations can be performed in Columns. An example is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -v --location-trusted -u root: -H "format: json" -H "jsonpaths: [\\"$.k2\\", \\"$.k1\\"]" -H "columns: k2, tmp_k1 , k1 = tmp_k1 * 100" -T example.json http://127.0.0.1:8030/api/db1/tbl1/_stream_load\n')),(0,r.kt)("p",null,"The above example will import the value of k1 multiplied by 100. The final imported data results are as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"+------+------+\n| k1 | k2 |\n+------+------+\n| 100 | 2 |\n+------+------+\n")),(0,r.kt)("h2",{id:"json-root"},"JSON root"),(0,r.kt)("p",null,"Doris supports extracting data specified in JSON through JSON root."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note: Because for Array type data, Doris will expand the array first, and finally process it in a single line according to the Object format. So the examples later in this document are all explained with Json data in a single Object format. ")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"do not specify JSON root"),(0,r.kt)("p",{parentName:"li"},"If JSON root is not specified, Doris will use the column name in the table to find the element in Object by default. An example is as follows:"),(0,r.kt)("p",{parentName:"li"},"The table contains two columns: ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"city")),(0,r.kt)("p",{parentName:"li"},"The JSON data is as follows:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "id": 123, "name" : { "id" : "321", "city" : "shanghai" }}\n')),(0,r.kt)("p",{parentName:"li"},"Then use ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"city")," for matching, and get the final data ",(0,r.kt)("inlineCode",{parentName:"p"},"123")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"null"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Specify JSON root"),(0,r.kt)("p",{parentName:"li"},"When the import data format is JSON, you can specify the root node of the JSON data through json_root. Doris will extract the elements of the root node through json_root for parsing. Default is empty."),(0,r.kt)("p",{parentName:"li"},"Specify JSON root ",(0,r.kt)("inlineCode",{parentName:"p"},'-H "json_root: $.name"'),". The matched elements are:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "id" : "321", "city" : "shanghai" }\n')),(0,r.kt)("p",{parentName:"li"},"The element will be treated as new JSON for subsequent import operations,and get the final data 321 and shanghai"))),(0,r.kt)("h2",{id:"null-and-default-values"},"NULL and Default values"),(0,r.kt)("p",null,"Example data is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {"k1": 1, "k2": "a"},\n    {"k1": 2},\n    {"k1": 3, "k2": "c"}\n]\n')),(0,r.kt)("p",null,"The table structure is: ",(0,r.kt)("inlineCode",{parentName:"p"},'k1 int null, k2 varchar(32) null default "x"')),(0,r.kt)("p",null,"The import statement is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -v --location-trusted -u root: -H "format: json" -H "strip_outer_array: true" -T example.json http://127.0.0.1:8030/api/db1/tbl1/_stream_load\n')),(0,r.kt)("p",null,"The import results that users may expect are as follows, that is, for missing columns, fill in the default values."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"+------+------+\n| k1 | k2 |\n+------+------+\n| 1 | a |\n+------+------+\n| 2 | x |\n+------+------+\n|3|c|\n+------+------+\n")),(0,r.kt)("p",null,"But the actual import result is as follows, that is, for the missing column, NULL is added."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"+------+------+\n| k1 | k2 |\n+------+------+\n| 1 | a |\n+------+------+\n| 2 | NULL |\n+------+------+\n|3|c|\n+------+------+\n")),(0,r.kt)("p",null,'This is because Doris doesn\'t know "the missing column is column k2 in the table" from the information in the import statement. If you want to import the above data according to the expected result, the import statement is as follows:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -v --location-trusted -u root: -H "format: json" -H "strip_outer_array: true" -H "jsonpaths: [\\"$.k1\\", \\"$.k2\\"]" - H "columns: k1, tmp_k2, k2 = ifnull(tmp_k2, \'x\')" -T example.json http://127.0.0.1:8030/api/db1/tbl1/_stream_load\n')),(0,r.kt)("h2",{id:"application-example"},"Application example"),(0,r.kt)("h3",{id:"stream-load"},"Stream Load"),(0,r.kt)("p",null,"Because of the inseparability of the JSON format, when using Stream Load to import a JSON format file, the file content will be fully loaded into the memory before processing begins. Therefore, if the file is too large, it may take up more memory."),(0,r.kt)("p",null,"Suppose the table structure is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"id INT NOT NULL,\ncity VARHCAR NULL,\ncode INT NULL\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Import a single row of data 1"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"id": 100, "city": "beijing", "code" : 1}\n')),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"do not specify JSON Path"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location-trusted -u user:passwd -H "format: json" -T data.json http://localhost:8030/api/db1/tbl1/_stream_load\n')),(0,r.kt)("p",{parentName:"li"},"Import result:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"100 beijing 1\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Specify JSON Path"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location-trusted -u user:passwd -H "format: json" -H "jsonpaths: [\\"$.id\\",\\"$.city\\",\\"$.code\\"]" - T data.json http://localhost:8030/api/db1/tbl1/_stream_load\n')),(0,r.kt)("p",{parentName:"li"},"Import result:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"100 beijing 1\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Import a single row of data 2"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"id": 100, "content": {"city": "beijing", "code": 1}}\n')),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Specify JSON Path"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location-trusted -u user:passwd -H "format: json" -H "jsonpaths: [\\"$.id\\",\\"$.content.city\\",\\"$.content.code\\ "]" -T data.json http://localhost:8030/api/db1/tbl1/_stream_load\n')),(0,r.kt)("p",{parentName:"li"},"Import result:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"100 beijing 1\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Import multiple rows of data as Array"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {"id": 100, "city": "beijing", "code" : 1},\n    {"id": 101, "city": "shanghai"},\n    {"id": 102, "city": "tianjin", "code" : 3},\n    {"id": 103, "city": "chongqing", "code" : 4},\n    {"id": 104, "city": ["zhejiang", "guangzhou"], "code" : 5},\n    {\n        "id": 105,\n        "city": {\n            "order1": ["guangzhou"]\n        },\n        "code" : 6\n    }\n]\n')),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Specify JSON Path"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location-trusted -u user:passwd -H "format: json" -H "jsonpaths: [\\"$.id\\",\\"$.city\\",\\"$.code\\"]" - H "strip_outer_array: true" -T data.json http://localhost:8030/api/db1/tbl1/_stream_load\n')),(0,r.kt)("p",{parentName:"li"},"Import result:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},'100 beijing 1\n101 shanghai NULL\n102 tianjin 3\n103 chongqing 4\n104 ["zhejiang","guangzhou"] 5\n105 {"order1":["guangzhou"]} 6\n'))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Import multi-line data as multi-line Object"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"id": 100, "city": "beijing", "code" : 1}\n{"id": 101, "city": "shanghai"}\n{"id": 102, "city": "tianjin", "code" : 3}\n{"id": 103, "city": "chongqing", "code" : 4}\n')),(0,r.kt)("p",{parentName:"li"}," StreamLoad import\uff1a"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location-trusted -u user:passwd -H "format: json" -H "read_json_by_line: true" -T data.json http://localhost:8030/api/db1/tbl1/_stream_load\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"   Import result:\n\n100     beijing                     1\n101     shanghai                    NULL\n102     tianjin                     3\n103     chongqing                   4\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Transform the imported data")),(0,r.kt)("p",null,"The data is still the multi-line data in Example 3, and now it is necessary to add 1 to the ",(0,r.kt)("inlineCode",{parentName:"p"},"code")," column in the imported data before importing."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location-trusted -u user:passwd -H "format: json" -H "jsonpaths: [\\"$.id\\",\\"$.city\\",\\"$.code\\"]" - H "strip_outer_array: true" -H "columns: id, city, tmpc, code=tmpc+1" -T data.json http://localhost:8030/api/db1/tbl1/_stream_load\n')),(0,r.kt)("p",null,"Import result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'100 beijing 2\n101 shanghai NULL\n102 tianjin 4\n103 chongqing 5\n104 ["zhejiang","guangzhou"] 6\n105 {"order1":["guangzhou"]} 7\n')),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Import Array by JSON\nSince the Rapidjson handles decimal and largeint numbers which will cause precision problems,\nwe suggest you to use JSON string to import data to ",(0,r.kt)("inlineCode",{parentName:"li"},"array<decimal>")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"array<largeint>")," column.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"k1": 39, "k2": ["-818.2173181"]}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"k1": 40, "k2": ["10000000000000000000.1111111222222222"]}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location-trusted -u root:  -H "max_filter_ration:0.01" -H "format:json" -H "timeout:300" -T test_decimal.json http://localhost:8035/api/example_db/array_test_decimal/_stream_load\n')),(0,r.kt)("p",null,"Import result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"MySQL > select * from array_test_decimal;\n+------+----------------------------------+\n| k1   | k2                               |\n+------+----------------------------------+\n|   39 | [-818.2173181]                   |\n|   40 | [100000000000000000.001111111]   |\n+------+----------------------------------+\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"k1": 999, "k2": ["76959836937749932879763573681792701709", "26017042825937891692910431521038521227"]}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location-trusted -u root:  -H "max_filter_ration:0.01" -H "format:json" -H "timeout:300" -T test_largeint.json http://localhost:8035/api/example_db/array_test_largeint/_stream_load\n')),(0,r.kt)("p",null,"Import result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"MySQL > select * from array_test_largeint;\n+------+------------------------------------------------------------------------------------+\n| k1   | k2                                                                                 |\n+------+------------------------------------------------------------------------------------+\n|  999 | [76959836937749932879763573681792701709, 26017042825937891692910431521038521227]   |\n+------+------------------------------------------------------------------------------------+\n")),(0,r.kt)("h3",{id:"routine-load"},"Routine Load"),(0,r.kt)("p",null,"The processing principle of Routine Load for JSON data is the same as that of Stream Load. It is not repeated here."),(0,r.kt)("p",null,"For Kafka data sources, the content in each Massage is treated as a complete JSON data. If there are multiple rows of data represented in Array format in a Massage, multiple rows will be imported, and the offset of Kafka will only increase by 1. If an Array format Json represents multiple lines of data, but the Json parsing fails due to the wrong Json format, the error line will only increase by 1 (because the parsing fails, in fact, Doris cannot determine how many lines of data are contained in it, and can only error by one line data record)"))}u.isMDXComponent=!0}}]);