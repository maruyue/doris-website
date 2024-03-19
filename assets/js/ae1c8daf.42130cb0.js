"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[5976],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>y});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g=a.createContext({}),d=function(e){var t=a.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(g.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=d(n),u=r,y=p["".concat(g,".").concat(u)]||p[u]||s[u]||l;return n?a.createElement(y,i(i({ref:t},m),{},{components:n})):a.createElement(y,i({ref:t},m))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},677560:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(58168),r=(n(296540),n(15680));const l={title:"Unique Key",language:"en"},i=void 0,o={unversionedId:"table-design/data-model/unique",id:"version-2.0/table-design/data-model/unique",title:"Unique Key",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/table-design/data-model/unique.md",sourceDirName:"table-design/data-model",slug:"/table-design/data-model/unique",permalink:"/docs/2.0/table-design/data-model/unique",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Unique Key",language:"en"},sidebar:"docs",previous:{title:"Duplicate Key",permalink:"/docs/2.0/table-design/data-model/duplicate"},next:{title:"Aggregate Key",permalink:"/docs/2.0/table-design/data-model/aggregate"}},g={},d=[{value:"Unique Model",id:"unique-model",level:2},{value:"Merge on Read ( Same Implementation as Aggregate Model)",id:"merge-on-read--same-implementation-as-aggregate-model",level:3},{value:"Merge on Write",id:"merge-on-write",level:3}],m={toc:d},p="wrapper";function s(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,a.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"unique-model"},"Unique Model"),(0,r.yg)("p",null,"When users have data update requirement, they can choose to use the Unique data model. The Unique model ensures the uniqueness of keys, and when a user updates a piece of data, the newly written data will overwrite the old data with the same key."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Two Implementation Methods")),(0,r.yg)("p",null,"The Unique model provides two implementation methods:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Merge-on-read: In the merge-on-read implementation, no data deduplication-related operations are triggered when writing data. All data deduplication operations occur during queries or compaction. Therefore, merge-on-read has better write performance, poorer query performance, and higher memory consumption."),(0,r.yg)("li",{parentName:"ul"},"Merge-on-write: In version 1.2, we introduced the merge-on-write implementation, which performs all data deduplication during the data writing phase, providing excellent query performance.")),(0,r.yg)("p",null,"Since version 2.0, merge-on-write has become a mature and stable, due to its excellent query performance, we recommend the majority of users to choose this implementation. Starting from version 2.1, merge-on-write has become the default implementation for the Unique model.\nFor detailed differences between the two implementation methods, refer to the subsequent sections in this chapter. For performance differences between the two implementation methods, see the description in the following section ",(0,r.yg)("a",{parentName:"p",href:"#limitations-of-aggregate-model"},"Limitations of Aggregate Model"),"."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Semantic of Data Updates")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The default update semantic for the Unique model is ",(0,r.yg)("strong",{parentName:"li"},"whole-row ",(0,r.yg)("inlineCode",{parentName:"strong"},"UPSERT")),", meaning UPDATE OR INSERT. If the key of a row of data exists, it is updated; if it does not exist, new data is inserted. Under the whole-row ",(0,r.yg)("inlineCode",{parentName:"li"},"UPSERT")," semantic, even if users use ",(0,r.yg)("inlineCode",{parentName:"li"},"insert into")," to write into specific columns, Doris will fill in the columns not provided with NULL values or default values in the Planner."),(0,r.yg)("li",{parentName:"ul"},"Partial column updates: If users want to update only specific fields, they need to use the merge-on-write implementation and enable support for partial column updates through specific parameters. Refer to the documentation ",(0,r.yg)("a",{parentName:"li",href:"../data-operate/update-delete/partial-update.md"},"Partial Column Updates")," for relevant usage recommendations.")),(0,r.yg)("h3",{id:"merge-on-read--same-implementation-as-aggregate-model"},"Merge on Read ( Same Implementation as Aggregate Model)"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"ColumnName"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"IsKey"),(0,r.yg)("th",{parentName:"tr",align:null},"Comment"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"user_id"),(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"User ID")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"username"),(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR (50)"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"Username")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"city"),(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR (20)"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"User location city")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"age"),(0,r.yg)("td",{parentName:"tr",align:null},"SMALLINT"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"User age")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sex"),(0,r.yg)("td",{parentName:"tr",align:null},"TINYINT"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"User gender")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"phone"),(0,r.yg)("td",{parentName:"tr",align:null},"LARGEINT"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"User phone number")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"address"),(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR (500)"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"User address")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"register_time"),(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"User registration time")))),(0,r.yg)("p",null,"This is a typical user basic information table. There is no aggregation requirement for such data. The only concern is to ensure the uniqueness of the primary key. (The primary key here is user_id + username). The CREATE TABLE statement for the above table is as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'CREATE TABLE IF NOT EXISTS example_db.example_tbl_unique\n(\n`user_id` LARGEINT NOT NULL COMMENT "User ID",\n`username` VARCHAR (50) NOT NULL COMMENT "Username",\n`city` VARCHAR (20) COMMENT "User location city",\n`age` SMALLINT COMMENT "User age",\n`sex` TINYINT COMMENT "User sex",\n`phone` LARGEINT COMMENT "User phone number",\n`address` VARCHAR (500) COMMENT "User address",\n`register_time` DATETIME COMMENT "User registration time"\n)\nUNIQUE KEY (`user_id`, `username`)\nDISTRIBUTED BY HASH(`user_id`) BUCKETS 1\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1"\n);\n')),(0,r.yg)("p",null,"This is the same table schema and the CREATE TABLE statement as those of the Aggregate Model:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"ColumnName"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"AggregationType"),(0,r.yg)("th",{parentName:"tr",align:null},"Comment"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"user_id"),(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"User ID")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"username"),(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR (50)"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Username")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"city"),(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR (20)"),(0,r.yg)("td",{parentName:"tr",align:null},"REPLACE"),(0,r.yg)("td",{parentName:"tr",align:null},"User location city")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"age"),(0,r.yg)("td",{parentName:"tr",align:null},"SMALLINT"),(0,r.yg)("td",{parentName:"tr",align:null},"REPLACE"),(0,r.yg)("td",{parentName:"tr",align:null},"User age")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sex"),(0,r.yg)("td",{parentName:"tr",align:null},"TINYINT"),(0,r.yg)("td",{parentName:"tr",align:null},"REPLACE"),(0,r.yg)("td",{parentName:"tr",align:null},"User gender")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"phone"),(0,r.yg)("td",{parentName:"tr",align:null},"LARGEINT"),(0,r.yg)("td",{parentName:"tr",align:null},"REPLACE"),(0,r.yg)("td",{parentName:"tr",align:null},"User phone number")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"address"),(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR (500)"),(0,r.yg)("td",{parentName:"tr",align:null},"REPLACE"),(0,r.yg)("td",{parentName:"tr",align:null},"User address")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"register_time"),(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME"),(0,r.yg)("td",{parentName:"tr",align:null},"REPLACE"),(0,r.yg)("td",{parentName:"tr",align:null},"User registration time")))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'CREATE TABLE IF NOT EXISTS example_db.example_tbl_agg3\n(\n`user_id` LARGEINT NOT NULL COMMENT "User ID",\n`username` VARCHAR (50) NOT NULL COMMENT "Username",\n`city` VARCHAR (20) REPLACE COMMENT "User location city",\n`sex` TINYINT REPLACE COMMENT "User gender",\n`phone` LARGEINT REPLACE COMMENT "User phone number",\n`address` VARCHAR(500) REPLACE COMMENT "User address",\n`register_time` DATETIME REPLACE COMMENT "User registration time"\n)\nAGGREGATE KEY(`user_id`, `username`)\nDISTRIBUTED BY HASH(`user_id`) BUCKETS 1\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1"\n);\n')),(0,r.yg)("p",null,"That is to say, the Merge on Read implementation of the Unique Model is equivalent to the REPLACE aggregation type in the Aggregate Model. The internal implementation and data storage are exactly the same."),(0,r.yg)("version",{since:"1.2"},(0,r.yg)("h3",{id:"merge-on-write"},"Merge on Write"),(0,r.yg)("p",null,"The Merge on Write implementation of the Unique Model can deliver better performance in aggregation queries with primary key limitations."),(0,r.yg)("p",null,"In Doris 1.2.0, as a new feature, Merge on Write is disabled by default(before version 2.1), and users can enable it by adding the following property:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'"enable_unique_key_merge_on_write" = "true"\n')),(0,r.yg)("p",null,"In Doris 2.1, Merge on Write is enabled by default."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Note:"),(0,r.yg)("ol",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ol"},"For users on version 1.2:",(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},"It is recommended to use version 1.2.4 or above, as this version addresses some bugs and stability issues."),(0,r.yg)("li",{parentName:"ol"},"Add the configuration item ",(0,r.yg)("inlineCode",{parentName:"li"},"disable_storage_page_cache=false")," in ",(0,r.yg)("inlineCode",{parentName:"li"},"be.conf"),". Failure to add this configuration item may significantly impact data import performance."))),(0,r.yg)("li",{parentName:"ol"},"For new users, it is strongly recommended to use version 2.0 or above. In version 2.0, there has been a significant improvement and optimization in the performance and stability of merge-on-write."))),(0,r.yg)("p",null,"Take the previous table as an example, the corresponding to CREATE TABLE statement should be:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'CREATE TABLE IF NOT EXISTS example_db.example_tbl_unique_merge_on_write\n(\n`user_id` LARGEINT NOT NULL COMMENT "User ID",\n`username` VARCHAR (50) NOT NULL COMMENT "Username",\n`city` VARCHAR (20) COMMENT "User location city",\n`age` SMALLINT COMMENT "Userage",\n`sex` TINYINT COMMENT "User gender",\n`phone` LARGEINT COMMENT "User phone number",\n`address` VARCHAR (500) COMMENT "User address",\n`register_time` DATETIME COMMENT "User registration time"\n)\nUNIQUE KEY (`user_id`, `username`)\nDISTRIBUTED BY HASH(`user_id`) BUCKETS 1\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1"\n"enable_unique_key_merge_on_write" = "true"\n);\n')),(0,r.yg)("p",null,"The table schema produced by the above statement will be different from that of the Aggregate Model."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"ColumnName"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"AggregationType"),(0,r.yg)("th",{parentName:"tr",align:null},"Comment"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"user_id"),(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"User ID")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"username"),(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR (50)"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Username")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"city"),(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR (20)"),(0,r.yg)("td",{parentName:"tr",align:null},"NONE"),(0,r.yg)("td",{parentName:"tr",align:null},"User location city")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"age"),(0,r.yg)("td",{parentName:"tr",align:null},"SMALLINT"),(0,r.yg)("td",{parentName:"tr",align:null},"NONE"),(0,r.yg)("td",{parentName:"tr",align:null},"User age")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sex"),(0,r.yg)("td",{parentName:"tr",align:null},"TINYINT"),(0,r.yg)("td",{parentName:"tr",align:null},"NONE"),(0,r.yg)("td",{parentName:"tr",align:null},"User gender")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"phone"),(0,r.yg)("td",{parentName:"tr",align:null},"LARGEINT"),(0,r.yg)("td",{parentName:"tr",align:null},"NONE"),(0,r.yg)("td",{parentName:"tr",align:null},"User phone number")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"address"),(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR (500)"),(0,r.yg)("td",{parentName:"tr",align:null},"NONE"),(0,r.yg)("td",{parentName:"tr",align:null},"User address")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"register_time"),(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME"),(0,r.yg)("td",{parentName:"tr",align:null},"NONE"),(0,r.yg)("td",{parentName:"tr",align:null},"User registration time")))),(0,r.yg)("p",null,"On a Unique table with the Merge on Write option enabled, during the import stage, the data that are to be overwritten and updated will be marked for deletion, and new data will be written in. When querying, all data marked for deletion will be filtered out at the file level, and only the latest data would be readed. This eliminates the data aggregation cost while reading, and supports many types of predicate pushdown now. Therefore, it can largely improve performance in many scenarios, especially in aggregation queries."),(0,r.yg)("p",null,"[NOTE]"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"The implementation method of a Unique table can only be determined during table creation and cannot be modified through schema changes."),(0,r.yg)("li",{parentName:"ol"},"The old Merge on Read cannot be seamlessly upgraded to the Merge on Write implementation (since they have completely different data organization). If you want to switch to the Merge on Write implementation, you need to manually execute ",(0,r.yg)("inlineCode",{parentName:"li"},"insert into unique-mow-table select * from source table")," to load data to new table."))))}s.isMDXComponent=!0}}]);