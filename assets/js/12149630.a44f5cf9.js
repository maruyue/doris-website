"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[88770],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>h});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},u=Object.keys(e);for(a=0;a<u.length;a++)t=u[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(a=0;a<u.length;a++)t=u[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),i=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=i(e.components);return a.createElement(c.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,u=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=i(t),d=r,h=m["".concat(c,".").concat(d)]||m[d]||p[d]||u;return t?a.createElement(h,o(o({ref:n},l),{},{components:t})):a.createElement(h,o({ref:n},l))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var u=t.length,o=new Array(u);o[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var i=2;i<u;i++)o[i]=t[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},21097:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>u,metadata:()=>s,toc:()=>i});var a=t(87462),r=(t(67294),t(3905));const u={title:"SEQUENCE-COUNT",language:"en"},o=void 0,s={unversionedId:"sql-manual/sql-functions/aggregate-functions/sequence-count",id:"version-2.0/sql-manual/sql-functions/aggregate-functions/sequence-count",title:"SEQUENCE-COUNT",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-functions/aggregate-functions/sequence-count.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/sequence-count",permalink:"/docs/sql-manual/sql-functions/aggregate-functions/sequence-count",draft:!1,tags:[],version:"2.0",frontMatter:{title:"SEQUENCE-COUNT",language:"en"},sidebar:"docs",previous:{title:"SEQUENCE_MATCH",permalink:"/docs/sql-manual/sql-functions/aggregate-functions/sequence-match"},next:{title:"GROUPING",permalink:"/docs/sql-manual/sql-functions/aggregate-functions/grouping"}},c={},i=[{value:"SEQUENCE-COUNT",id:"sequence-count",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Arguments",id:"arguments",level:4},{value:"Returned value",id:"returned-value",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],l={toc:i},m="wrapper";function p(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"sequence-count"},"SEQUENCE-COUNT"),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sequence_count(pattern, timestamp, cond1, cond2, ...);")),(0,r.kt)("p",null,"Counts the number of event chains that matched the pattern. The function searches event chains that do not overlap. It starts to search for the next chain after the current chain is matched."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"WARNING!")," "),(0,r.kt)("p",null,"Events that occur at the same second may lay in the sequence in an undefined order affecting the result."),(0,r.kt)("h4",{id:"arguments"},"Arguments"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pattern")," \u2014 Pattern string."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Pattern syntax")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"(?N)")," \u2014 Matches the condition argument at position N. Conditions are numbered in the ",(0,r.kt)("inlineCode",{parentName:"p"},"[1, 32]")," range. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"(?1)")," matches the argument passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"cond1")," parameter."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},".*")," \u2014 Matches any number of events. You do not need conditional arguments to count this element of the pattern."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"(?t operator value)")," \u2014  Sets the time in seconds that should separate two events."),(0,r.kt)("p",null,"We define ",(0,r.kt)("inlineCode",{parentName:"p"},"t")," as the difference in seconds between two times,  For example, pattern ",(0,r.kt)("inlineCode",{parentName:"p"},"(?1)(?t>1800)(?2)")," matches events that occur more than 1800 seconds from each other. pattern ",(0,r.kt)("inlineCode",{parentName:"p"},"(?1)(?t>10000)(?2)")," matches events that occur more than 10000 seconds from each other. An arbitrary number of any events can lay between these events. You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},">="),", ",(0,r.kt)("inlineCode",{parentName:"p"},">"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<="),", ",(0,r.kt)("inlineCode",{parentName:"p"},"==")," operators."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"timestamp")," \u2014 Column considered to contain time data. Typical data types are ",(0,r.kt)("inlineCode",{parentName:"p"},"Date")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"DateTime"),". You can also use any of the supported UInt data types."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"cond1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"cond2")," \u2014 Conditions that describe the chain of events. Data type: ",(0,r.kt)("inlineCode",{parentName:"p"},"UInt8"),". You can pass up to 32 condition arguments. The function takes only the events described in these conditions into account. If the sequence contains data that isn\u2019t described in a condition, the function skips them."),(0,r.kt)("h4",{id:"returned-value"},"Returned value"),(0,r.kt)("p",null,"Number of non-overlapping event chains that are matched."),(0,r.kt)("h3",{id:"example"},"example"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"count examples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DROP TABLE IF EXISTS sequence_count_test2;\n\nCREATE TABLE sequence_count_test2(\n                `uid` int COMMENT 'user id',\n                `date` datetime COMMENT 'date time', \n                `number` int NULL COMMENT 'number' \n                )\nDUPLICATE KEY(uid) \nDISTRIBUTED BY HASH(uid) BUCKETS 3 \nPROPERTIES ( \n    \"replication_num\" = \"1\"\n); \n\nINSERT INTO sequence_count_test2(uid, date, number) values (1, '2022-11-02 10:41:00', 1),\n                                                   (2, '2022-11-02 13:28:02', 2),\n                                                   (3, '2022-11-02 16:15:01', 1),\n                                                   (4, '2022-11-02 19:05:04', 2),\n                                                   (5, '2022-11-02 20:08:44', 3); \n\nSELECT * FROM sequence_count_test2 ORDER BY date;\n\n+------+---------------------+--------+\n| uid  | date                | number |\n+------+---------------------+--------+\n|    1 | 2022-11-02 10:41:00 |      1 |\n|    2 | 2022-11-02 13:28:02 |      2 |\n|    3 | 2022-11-02 16:15:01 |      1 |\n|    4 | 2022-11-02 19:05:04 |      2 |\n|    5 | 2022-11-02 20:08:44 |      3 |\n+------+---------------------+--------+\n\nSELECT sequence_count('(?1)(?2)', date, number = 1, number = 3) FROM sequence_count_test2;\n\n+----------------------------------------------------------------+\n| sequence_count('(?1)(?2)', `date`, `number` = 1, `number` = 3) |\n+----------------------------------------------------------------+\n|                                                              1 |\n+----------------------------------------------------------------+\n\nSELECT sequence_count('(?1)(?2)', date, number = 1, number = 2) FROM sequence_count_test2;\n\n+----------------------------------------------------------------+\n| sequence_count('(?1)(?2)', `date`, `number` = 1, `number` = 2) |\n+----------------------------------------------------------------+\n|                                                              2 |\n+----------------------------------------------------------------+\n\nSELECT sequence_count('(?1)(?t>=10000)(?2)', date, number = 1, number = 2) FROM sequence_count_test1;\n\n+---------------------------------------------------------------------------+\n| sequence_count('(?1)(?t>=3600)(?2)', `date`, `number` = 1, `number` = 2) |\n+---------------------------------------------------------------------------+\n|                                                                         2 |\n+---------------------------------------------------------------------------+\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"not count examples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DROP TABLE IF EXISTS sequence_count_test1;\n\nCREATE TABLE sequence_count_test1(\n                `uid` int COMMENT 'user id',\n                `date` datetime COMMENT 'date time', \n                `number` int NULL COMMENT 'number' \n                )\nDUPLICATE KEY(uid) \nDISTRIBUTED BY HASH(uid) BUCKETS 3 \nPROPERTIES ( \n    \"replication_num\" = \"1\"\n); \n\nINSERT INTO sequence_count_test1(uid, date, number) values (1, '2022-11-02 10:41:00', 1),\n                                                   (2, '2022-11-02 11:41:00', 7),\n                                                   (3, '2022-11-02 16:15:01', 3),\n                                                   (4, '2022-11-02 19:05:04', 4),\n                                                   (5, '2022-11-02 21:24:12', 5);\n\nSELECT * FROM sequence_count_test1 ORDER BY date;\n\n+------+---------------------+--------+\n| uid  | date                | number |\n+------+---------------------+--------+\n|    1 | 2022-11-02 10:41:00 |      1 |\n|    2 | 2022-11-02 11:41:00 |      7 |\n|    3 | 2022-11-02 16:15:01 |      3 |\n|    4 | 2022-11-02 19:05:04 |      4 |\n|    5 | 2022-11-02 21:24:12 |      5 |\n+------+---------------------+--------+\n\nSELECT sequence_count('(?1)(?2)', date, number = 1, number = 2) FROM sequence_count_test1;\n\n+----------------------------------------------------------------+\n| sequence_count('(?1)(?2)', `date`, `number` = 1, `number` = 2) |\n+----------------------------------------------------------------+\n|                                                              0 |\n+----------------------------------------------------------------+\n\nSELECT sequence_count('(?1)(?2).*', date, number = 1, number = 2) FROM sequence_count_test1;\n\n+------------------------------------------------------------------+\n| sequence_count('(?1)(?2).*', `date`, `number` = 1, `number` = 2) |\n+------------------------------------------------------------------+\n|                                                                0 |\n+------------------------------------------------------------------+\n\nSELECT sequence_count('(?1)(?t>3600)(?2)', date, number = 1, number = 7) FROM sequence_count_test1;\n\n+--------------------------------------------------------------------------+\n| sequence_count('(?1)(?t>3600)(?2)', `date`, `number` = 1, `number` = 7) |\n+--------------------------------------------------------------------------+\n|                                                                        0 |\n+--------------------------------------------------------------------------+\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"special examples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DROP TABLE IF EXISTS sequence_count_test3;\n\nCREATE TABLE sequence_count_test3(\n                `uid` int COMMENT 'user id',\n                `date` datetime COMMENT 'date time', \n                `number` int NULL COMMENT 'number' \n                )\nDUPLICATE KEY(uid) \nDISTRIBUTED BY HASH(uid) BUCKETS 3 \nPROPERTIES ( \n    \"replication_num\" = \"1\"\n); \n\nINSERT INTO sequence_count_test3(uid, date, number) values (1, '2022-11-02 10:41:00', 1),\n                                                   (2, '2022-11-02 11:41:00', 7),\n                                                   (3, '2022-11-02 16:15:01', 3),\n                                                   (4, '2022-11-02 19:05:04', 4),\n                                                   (5, '2022-11-02 21:24:12', 5);\n\nSELECT * FROM sequence_count_test3 ORDER BY date;\n\n+------+---------------------+--------+\n| uid  | date                | number |\n+------+---------------------+--------+\n|    1 | 2022-11-02 10:41:00 |      1 |\n|    2 | 2022-11-02 11:41:00 |      7 |\n|    3 | 2022-11-02 16:15:01 |      3 |\n|    4 | 2022-11-02 19:05:04 |      4 |\n|    5 | 2022-11-02 21:24:12 |      5 |\n+------+---------------------+--------+\n")),(0,r.kt)("p",null,"Perform the query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT sequence_count('(?1)(?2)', date, number = 1, number = 5) FROM sequence_count_test3;\n\n+----------------------------------------------------------------+\n| sequence_count('(?1)(?2)', `date`, `number` = 1, `number` = 5) |\n+----------------------------------------------------------------+\n|                                                              1 |\n+----------------------------------------------------------------+\n")),(0,r.kt)("p",null,"This is a very simple example. The function found the event chain where number 5 follows number 1. It skipped number 7,3,4 between them, because the number is not described as an event. If we want to take this number into account when searching for the event chain given in the example, we should make a condition for it."),(0,r.kt)("p",null,"Now, perform this query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT sequence_count('(?1)(?2)', date, number = 1, number = 5, number = 4) FROM sequence_count_test3;\n\n+------------------------------------------------------------------------------+\n| sequence_count('(?1)(?2)', `date`, `number` = 1, `number` = 5, `number` = 4) |\n+------------------------------------------------------------------------------+\n|                                                                            0 |\n+------------------------------------------------------------------------------+\n")),(0,r.kt)("p",null,"The result is kind of confusing. In this case, the function couldn\u2019t find the event chain matching the pattern, because the event for number 4 occurred between 1 and 5. If in the same case we checked the condition for number 6, the sequence would count the pattern."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT sequence_count('(?1)(?2)', date, number = 1, number = 5, number = 6) FROM sequence_count_test3;\n\n+------------------------------------------------------------------------------+\n| sequence_count('(?1)(?2)', `date`, `number` = 1, `number` = 5, `number` = 6) |\n+------------------------------------------------------------------------------+\n|                                                                            1 |\n+------------------------------------------------------------------------------+\n")),(0,r.kt)("h3",{id:"keywords"},"keywords"),(0,r.kt)("p",null,"SEQUENCE_COUNT"))}p.isMDXComponent=!0}}]);