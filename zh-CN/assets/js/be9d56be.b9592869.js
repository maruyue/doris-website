"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[65125],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>d});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,d=m["".concat(s,".").concat(u)]||m[u]||y[u]||o;return n?a.createElement(d,l(l({ref:t},p),{},{components:n})):a.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},741542:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(58168),r=(n(296540),n(15680));const o={title:"SQL \u65b9\u8a00\u517c\u5bb9",language:"zh-CN"},l=void 0,i={unversionedId:"lakehouse/sql-dialect",id:"version-2.0/lakehouse/sql-dialect",title:"SQL \u65b9\u8a00\u517c\u5bb9",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/lakehouse/sql-dialect.md",sourceDirName:"lakehouse",slug:"/lakehouse/sql-dialect",permalink:"/zh-CN/docs/2.0/lakehouse/sql-dialect",draft:!1,tags:[],version:"2.0",frontMatter:{title:"SQL \u65b9\u8a00\u517c\u5bb9",language:"zh-CN"},sidebar:"docs",previous:{title:"\u5916\u8868\u7edf\u8ba1\u4fe1\u606f",permalink:"/zh-CN/docs/2.0/lakehouse/external-statistics"},next:{title:"\u96c6\u7fa4\u5347\u7ea7",permalink:"/zh-CN/docs/2.0/admin-manual/cluster-management/upgrade"}},s={},c=[{value:"\u90e8\u7f72\u670d\u52a1",id:"\u90e8\u7f72\u670d\u52a1",level:2},{value:"\u4f7f\u7528 SQL \u65b9\u8a00",id:"\u4f7f\u7528-sql-\u65b9\u8a00",level:2},{value:"Presto",id:"presto",level:3},{value:"Clickhouse",id:"clickhouse",level:3}],p={toc:c},m="wrapper";function y(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"\u4ece 2.1 \u7248\u672c\u5f00\u59cb\uff0cDoris \u53ef\u4ee5\u652f\u6301\u591a\u79cd SQL \u65b9\u8a00\uff0c\u5982 Presto\u3001Trino\u3001Hive\u3001PostgreSQL\u3001Spark\u3001Clickhouse \u7b49\u7b49\u3002\u901a\u8fc7\u8fd9\u4e2a\u529f\u80fd\uff0c\u7528\u6237\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u5bf9\u5e94\u7684 SQL \u65b9\u8a00\u67e5\u8be2 Doris \u4e2d\u7684\u6570\u636e\uff0c\u65b9\u4fbf\u7528\u6237\u5c06\u539f\u5148\u7684\u4e1a\u52a1\u5e73\u6ed1\u7684\u8fc1\u79fb\u5230 Doris \u4e2d\u3002")),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("ol",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u8be5\u529f\u80fd\u76ee\u524d\u662f\u5b9e\u9a8c\u6027\u529f\u80fd\uff0c\u60a8\u5728\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u5982\u9047\u5230\u4efb\u4f55\u95ee\u9898\uff0c\u6b22\u8fce\u901a\u8fc7\u90ae\u4ef6\u7ec4\u3001",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/issues"},"GitHub Issue")," \u7b49\u65b9\u5f0f\u8fdb\u884c\u53cd\u9988\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u8be5\u529f\u80fd\u53ea\u652f\u6301\u67e5\u8be2\u8bed\u53e5\uff0c\u4e0d\u652f\u6301 DDL\u3001DML \u8bed\u53e5\u3002")))),(0,r.yg)("h2",{id:"\u90e8\u7f72\u670d\u52a1"},"\u90e8\u7f72\u670d\u52a1"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"1. \u4e0b\u8f7d\u6700\u65b0\u7248\u672c\u7684 ",(0,r.yg)("a",{parentName:"strong",href:"https://doris-build-1308700295.cos.ap-beijing.myqcloud.com/transform-doris-tool/doris-sql-convertor-1.0.1-bin-x86"},"SQL \u65b9\u8a00\u8f6c\u6362\u5de5\u5177 (1.0.1)"))),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5728\u4efb\u610f FE \u8282\u70b9\uff0c\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u542f\u52a8\u670d\u52a1\uff1a"),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"nohup ./doris-sql-convertor-1.0.1-bin-x86 run --host=0.0.0.0 --port=5001 &")),(0,r.yg)("admonition",{parentName:"li",type:"note"},(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("strong",{parentName:"p"},"1. \u8be5\u670d\u52a1\u662f\u4e00\u4e2a\u65e0\u72b6\u6001\u7684\u670d\u52a1\uff0c\u53ef\u968f\u65f6\u542f\u505c\u3002")),(0,r.yg)("ol",{parentName:"admonition",start:2},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"5001")," \u662f\u670d\u52a1\u7aef\u53e3\uff0c\u53ef\u4ee5\u4efb\u610f\u6307\u5b9a\u4e3a\u4e00\u4e2a\u53ef\u7528\u7aef\u53e3\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5efa\u8bae\u5728\u6bcf\u4e2a FE \u8282\u70b9\u90fd\u5355\u72ec\u542f\u52a8\u4e00\u4e2a\u670d\u52a1\u3002"))))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u542f\u52a8 Doris \u96c6\u7fa4\uff082.1 \u6216\u66f4\u9ad8\u7248\u672c\uff09")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\uff0c\u5728 Doris \u4e2d\u8bbe\u7f6e SQL \u65b9\u8a00\u8f6c\u6362\u670d\u52a1\u7684 URL\uff1a"),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},'MySQL> set global sql_converter_service_url = "http://127.0.0.1:5001/api/v1/convert"')),(0,r.yg)("admonition",{parentName:"li",type:"note"},(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("inlineCode",{parentName:"p"},"127.0.0.1:5001")," \u662f SQL \u65b9\u8a00\u8f6c\u6362\u670d\u52a1\u7684\u90e8\u7f72\u8282\u70b9 ip \u548c\u7aef\u53e3\u3002")))),(0,r.yg)("h2",{id:"\u4f7f\u7528-sql-\u65b9\u8a00"},"\u4f7f\u7528 SQL \u65b9\u8a00"),(0,r.yg)("p",null,"\u76ee\u524d\u652f\u6301\u7684\u65b9\u8a00\u7c7b\u578b\u5305\u62ec\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"presto"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"trino"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"hive"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"spark"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"postgres"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"clickhouse")))),(0,r.yg)("p",null,"\u793a\u4f8b\uff1a"),(0,r.yg)("h3",{id:"presto"},"Presto"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> set sql_dialect=presto;\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> SELECT cast(start_time as varchar(20)) as col1,\n    ->        array_distinct(arr_int) as col2,\n    ->        FILTER(arr_str, x -> x LIKE '%World%') as col3,\n    ->        to_date(value,'%Y-%m-%d')as col4,\n    ->        YEAR(start_time) as col5,\n    ->        date_add('month', 1, start_time) as col6,\n    ->        date_format(start_time, '%Y%m%d')as col7,\n    ->        REGEXP_EXTRACT_ALL(value, '-.') as col8,\n    ->        JSON_EXTRACT('{\"id\": \"33\"}', '$.id')as col9,\n    ->        element_at(arr_int, 1) as col10,\n    ->        date_trunc('day',start_time) as col11\n    ->     FROM test_sqlconvert\n    ->     where date_trunc('day',start_time)= DATE'2024-05-20'     \n    -> order by id; \n+---------------------+-----------+-----------+-------------+------+---------------------+----------+-------------+------+-------+---------------------+\n| col1                | col2      | col3      | col4        | col5 | col6                | col7     | col8        | col9 | col10 | col11               |\n+---------------------+-----------+-----------+-------------+------+---------------------+----------+-------------+------+-------+---------------------+\n| 2024-05-20 13:14:52 | [1, 2, 3] | [\"World\"] | 2024-01-14  | 2024 | 2024-06-20 13:14:52 | 20240520 | ['-0','-1'] | \"33\" |     1 | 2024-05-20 00:00:00 |\n+---------------------+-----------+-----------+-------------+------+---------------------+----------+-------------+------+-------+---------------------+\n1 row in set (0.13 sec)\n\n")),(0,r.yg)("h3",{id:"clickhouse"},"Clickhouse"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> set sql_dialect=clickhouse;\nQuery OK, 0 rows affected (0.01 sec)\n\nmysql> select toString(start_time) as col1,\n    ->        arrayCompact(arr_int) as col2,\n    ->        arrayFilter(x -> x like '%World%',arr_str)as col3,\n    ->        toDate(value) as col4,\n    ->        toYear(start_time)as col5,\n    ->        addMonths(start_time, 1)as col6,\n    ->        toYYYYMMDD(start_time, 'US/Eastern')as col7,\n    ->        extractAll(value, '-.')as co8,\n    ->        JSONExtractString('{\"id\": \"33\"}' , 'id')as col9,\n    ->        arrayElement(arr_int, 1) as col10,\n    ->        date_trunc('day',start_time) as col11\n    ->      FROM test_sqlconvert\n    ->      where date_trunc('day',start_time)= '2024-05-20 00:00:00'\n    -> order by id;\n+---------------------+-----------+-----------+------------+------+---------------------+----------+-------------+------+-------+---------------------+\n| col1                | col2      | col3      | col4       | col5 | col6                | col7     | co8         | col9 | col10 | col11               |\n+---------------------+-----------+-----------+------------+------+---------------------+----------+-------------+------+-------+---------------------+\n| 2024-05-20 13:14:52 | [1, 2, 3] | [\"World\"] | 2024-01-14 | 2024 | 2024-06-20 13:14:52 | 20240520 | ['-0','-1'] | \"33\" |     1 | 2024-05-20 00:00:00 |\n+---------------------+-----------+-----------+------------+------+---------------------+----------+-------------+------+-------+---------------------+\n1 row in set (0.04 sec)\n")))}y.isMDXComponent=!0}}]);