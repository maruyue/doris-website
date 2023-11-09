"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[54323],{3905:(e,t,l)=>{l.d(t,{Zo:()=>p,kt:()=>k});var a=l(67294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function o(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function r(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?o(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):o(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)l=o[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)l=o[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var m=a.createContext({}),u=function(e){var t=a.useContext(m),l=t;return e&&(l="function"==typeof e?e(t):r(r({},t),e)),l},p=function(e){var t=u(e.components);return a.createElement(m.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var l=e.components,n=e.mdxType,o=e.originalType,m=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(l),d=n,k=c["".concat(m,".").concat(d)]||c[d]||s[d]||o;return l?a.createElement(k,r(r({ref:t},p),{},{components:l})):a.createElement(k,r({ref:t},p))}));function k(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=l.length,r=new Array(o);r[0]=d;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[c]="string"==typeof e?e:n,r[1]=i;for(var u=2;u<o;u++)r[u]=l[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,l)}d.displayName="MDXCreateElement"},20923:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>m,contentTitle:()=>r,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=l(87462),n=(l(67294),l(3905));const o={title:"ALTER-TABLE-COLUMN",language:"en"},r=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-COLUMN",id:"version-2.0/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-COLUMN",title:"ALTER-TABLE-COLUMN",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-COLUMN.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Alter",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-COLUMN",permalink:"/docs/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-COLUMN",draft:!1,tags:[],version:"2.0",frontMatter:{title:"ALTER-TABLE-COLUMN",language:"en"},sidebar:"docs",previous:{title:"ALTER-DATABASE",permalink:"/docs/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-DATABASE"},next:{title:"ALTER-TABLE-PARTITION",permalink:"/docs/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-PARTITION"}},m={},u=[{value:"ALTER-TABLE-COLUMN",id:"alter-table-column",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:u},c="wrapper";function s(e){let{components:t,...l}=e;return(0,n.kt)(c,(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"alter-table-column"},"ALTER-TABLE-COLUMN"),(0,n.kt)("h3",{id:"name"},"Name"),(0,n.kt)("p",null,"ALTER TABLE COLUMN"),(0,n.kt)("h3",{id:"description"},"Description"),(0,n.kt)("p",null,"This statement is used to perform a schema change operation on an existing table. The schema change is asynchronous, and the task is returned when the task is submitted successfully. After that, you can use the ",(0,n.kt)("a",{parentName:"p",href:"/docs/sql-manual/sql-reference/Show-Statements/SHOW-ALTER"},"SHOW ALTER TABLE COLUMN")," command to view the progress."),(0,n.kt)("p",null,"grammar:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE [database.]table alter_clause;\n")),(0,n.kt)("p",null,"The alter_clause of schema change supports the following modification methods:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Add a column to the specified position at the specified index")),(0,n.kt)("p",null,"grammar:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'ADD COLUMN column_name column_type [KEY | agg_type] [DEFAULT "default_value"]\n[AFTER column_name|FIRST]\n[TO rollup_index_name]\n[PROPERTIES ("key"="value", ...)]\n')),(0,n.kt)("p",null," Notice:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If you add a value column to the aggregation model, you need to specify agg_type"),(0,n.kt)("li",{parentName:"ul"},"For non-aggregated models (such as DUPLICATE KEY), if you add a key column, you need to specify the KEY keyword"),(0,n.kt)("li",{parentName:"ul"},"You cannot add columns that already exist in the base index to the rollup index (you can recreate a rollup index if necessary)")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Add multiple columns to the specified index")),(0,n.kt)("p",null,"grammar:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'ADD COLUMN (column_name1 column_type [KEY | agg_type] DEFAULT "default_value", ...)\n[TO rollup_index_name]\n[PROPERTIES ("key"="value", ...)]\n')),(0,n.kt)("p",null,"Notice:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If you add a value column to the aggregation model, you need to specify agg_type"),(0,n.kt)("li",{parentName:"ul"},"If you add a key column to the aggregation model, you need to specify the KEY keyword"),(0,n.kt)("li",{parentName:"ul"},"You cannot add columns that already exist in the base index to the rollup index (you can recreate a rollup index if necessary)")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Delete a column from the specified index")),(0,n.kt)("p",null,"grammar:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"DROP COLUMN column_name\n[FROM rollup_index_name]\n")),(0,n.kt)("p",null,"Notice:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Cannot drop partition column"),(0,n.kt)("li",{parentName:"ul"},"If the column is removed from the base index, it will also be removed if it is included in the rollup index")),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Modify the column type and column position of the specified index"),(0,n.kt)("p",{parentName:"li"},"grammar:"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'MODIFY COLUMN column_name column_type [KEY | agg_type] [NULL | NOT NULL] [DEFAULT "default_value"]\n[AFTER column_name|FIRST]\n[FROM rollup_index_name]\n[PROPERTIES ("key"="value", ...)]\n')),(0,n.kt)("p",null,"Notice:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If you modify the value column in the aggregation model, you need to specify agg_type"),(0,n.kt)("li",{parentName:"ul"},"If you modify the key column for non-aggregate types, you need to specify the KEY keyword"),(0,n.kt)("li",{parentName:"ul"},"Only the type of the column can be modified, and other attributes of the column remain as they are (that is, other attributes need to be explicitly written in the statement according to the original attributes, see example 8)"),(0,n.kt)("li",{parentName:"ul"},"Partitioning and bucketing columns cannot be modified in any way"),(0,n.kt)("li",{parentName:"ul"},"The following types of conversions are currently supported (loss of precision is guaranteed by the user)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Conversion of TINYINT/SMALLINT/INT/BIGINT/LARGEINT/FLOAT/DOUBLE types to larger numeric types"),(0,n.kt)("li",{parentName:"ul"},"Convert TINTINT/SMALLINT/INT/BIGINT/LARGEINT/FLOAT/DOUBLE/DECIMAL to VARCHAR"),(0,n.kt)("li",{parentName:"ul"},"VARCHAR supports modifying the maximum length"),(0,n.kt)("li",{parentName:"ul"},"VARCHAR/CHAR converted to TINTINT/SMALLINT/INT/BIGINT/LARGEINT/FLOAT/DOUBLE"),(0,n.kt)("li",{parentName:"ul"},'Convert VARCHAR/CHAR to DATE (currently supports "%Y-%m-%d", "%y-%m-%d", "%Y%m%d", "%y%m%d", "%Y/%m/%d, "%y/%m/%d" six formats)'),(0,n.kt)("li",{parentName:"ul"},"Convert DATETIME to DATE (only keep year-month-day information, for example: ",(0,n.kt)("inlineCode",{parentName:"li"},"2019-12-09 21:47:05")," <--\x3e ",(0,n.kt)("inlineCode",{parentName:"li"},"2019-12-09"),")"),(0,n.kt)("li",{parentName:"ul"},"DATE is converted to DATETIME (hours, minutes and seconds are automatically filled with zeros, for example: ",(0,n.kt)("inlineCode",{parentName:"li"},"2019-12-09")," <--\x3e ",(0,n.kt)("inlineCode",{parentName:"li"},"2019-12-09 00:00:00"),")"),(0,n.kt)("li",{parentName:"ul"},"Convert FLOAT to DOUBLE"),(0,n.kt)("li",{parentName:"ul"},"INT is converted to DATE (if the INT type data is illegal, the conversion fails, and the original data remains unchanged)"),(0,n.kt)("li",{parentName:"ul"},"All can be converted to STRING except DATE and DATETIME, but STRING cannot be converted to any other type")))),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"Reorder the column at the specified index")),(0,n.kt)("p",null,"grammar:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'ORDER BY (column_name1, column_name2, ...)\n[FROM rollup_index_name]\n[PROPERTIES ("key"="value", ...)]\n')),(0,n.kt)("p",null,"Notice:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"All columns in index are written out"),(0,n.kt)("li",{parentName:"ul"},"the value column comes after the key column")),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Add a key column new_col after col1 of example_rollup_index (non-aggregated model)")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nADD COLUMN new_col INT KEY DEFAULT "0" AFTER col1\nTO example_rollup_index;\n')),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Add a value column new_col after col1 of example_rollup_index (non-aggregation model)")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nADD COLUMN new_col INT DEFAULT "0" AFTER col1\nTO example_rollup_index;\n')),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Add a key column new_col (aggregation model) after col1 of example_rollup_index")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nADD COLUMN new_col INT DEFAULT "0" AFTER col1\nTO example_rollup_index;\n')),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Add a value column new_col SUM aggregation type (aggregation model) after col1 of example_rollup_index")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nADD COLUMN new_col INT SUM DEFAULT "0" AFTER col1\nTO example_rollup_index;\n')),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"Add multiple columns to example_rollup_index (aggregation model)")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nADD COLUMN (col1 INT DEFAULT "1", col2 FLOAT SUM DEFAULT "2.3")\nTO example_rollup_index;\n')),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},"Remove a column from example_rollup_index")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE example_db.my_table\nDROP COLUMN col2\nFROM example_rollup_index;\n")),(0,n.kt)("ol",{start:7},(0,n.kt)("li",{parentName:"ol"},"Modify the type of the key column col1 of the base index to BIGINT and move it to the back of the col2 column.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nMODIFY COLUMN col1 BIGINT KEY DEFAULT "1" AFTER col2;\n')),(0,n.kt)("p",null,"Note: Whether you modify the key column or the value column, you need to declare complete column information"),(0,n.kt)("ol",{start:8},(0,n.kt)("li",{parentName:"ol"},'Modify the maximum length of the val1 column of base index. The original val1 is (val1 VARCHAR(32) REPLACE DEFAULT "abc")')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nMODIFY COLUMN val1 VARCHAR(64) REPLACE DEFAULT "abc";\n')),(0,n.kt)("p",null,"Note: You can only modify the column's data type; other attributes of the column must remain unchanged."),(0,n.kt)("ol",{start:9},(0,n.kt)("li",{parentName:"ol"},"Reorder the columns in example_rollup_index (set the original column order as: k1,k2,k3,v1,v2)")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE example_db.my_table\nORDER BY (k3,k1,k2,v2,v1)\nFROM example_rollup_index;\n")),(0,n.kt)("ol",{start:10},(0,n.kt)("li",{parentName:"ol"},"Do Two Actions Simultaneously")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nADD COLUMN v2 INT MAX DEFAULT "0" AFTER k2 TO example_rollup_index,\nORDER BY (k3,k1,k2,v2,v1) FROM example_rollup_index;\n')),(0,n.kt)("ol",{start:11},(0,n.kt)("li",{parentName:"ol"},"Modify the length of a field in the Key column of the Duplicate key table")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"alter table example_tbl modify column k3 varchar(50) key null comment 'to 50'\n")),(0,n.kt)("h3",{id:"keywords"},"Keywords"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"ALTER, TABLE, COLUMN, ALTER TABLE\n")),(0,n.kt)("h3",{id:"best-practice"},"Best Practice"))}s.isMDXComponent=!0}}]);