"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[78295],{15680:(e,n,r)=>{r.d(n,{xA:()=>u,yg:()=>m});var a=r(296540);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var p=a.createContext({}),o=function(e){var n=a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},u=function(e){var n=o(e.components);return a.createElement(p.Provider,{value:n},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=o(r),c=t,m=d["".concat(p,".").concat(c)]||d[c]||y[c]||i;return r?a.createElement(m,l(l({ref:n},u),{},{components:r})):a.createElement(m,l({ref:n},u))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,l=new Array(i);l[0]=c;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[d]="string"==typeof e?e:t,l[1]=s;for(var o=2;o<i;o++)l[o]=r[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},980704:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var a=r(58168),t=(r(296540),r(15680));const i={title:"Query Profile Action",language:"en"},l=void 0,s={unversionedId:"admin-manual/fe/query-profile-action",id:"version-2.0/admin-manual/fe/query-profile-action",title:"Query Profile Action",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/admin-manual/fe/query-profile-action.md",sourceDirName:"admin-manual/fe",slug:"/admin-manual/fe/query-profile-action",permalink:"/docs/2.0/admin-manual/fe/query-profile-action",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Query Profile Action",language:"en"},sidebar:"docs",previous:{title:"Node Action",permalink:"/docs/2.0/admin-manual/fe/node-action"},next:{title:"Backends Action",permalink:"/docs/2.0/admin-manual/fe/backends-action"}},p={},o=[{value:"Request",id:"request",level:2},{value:"Get the query information",id:"get-the-query-information",level:2},{value:"Description",id:"description",level:3},{value:"Query parameters",id:"query-parameters",level:3},{value:"Response",id:"response",level:3},{value:"Examples",id:"examples",level:3},{value:"Get Query Id By Trace Id",id:"get-query-id-by-trace-id",level:2},{value:"Description",id:"description-1",level:3},{value:"Path parameters",id:"path-parameters",level:3},{value:"Query parameters",id:"query-parameters-1",level:3},{value:"Response",id:"response-1",level:3},{value:"Get the sql and text profile for the specified query",id:"get-the-sql-and-text-profile-for-the-specified-query",level:2},{value:"Description",id:"description-2",level:3},{value:"Path parameters",id:"path-parameters-1",level:3},{value:"Query parameters",id:"query-parameters-2",level:3},{value:"Response",id:"response-2",level:3},{value:"Get the specified query fragment and instance information",id:"get-the-specified-query-fragment-and-instance-information",level:2},{value:"Description",id:"description-3",level:3},{value:"Path parameters",id:"path-parameters-2",level:3},{value:"Query parameters",id:"query-parameters-3",level:3},{value:"Response",id:"response-3",level:3},{value:"Get the specified query id tree profile information",id:"get-the-specified-query-id-tree-profile-information",level:2},{value:"Description",id:"description-4",level:3},{value:"Path parameters",id:"path-parameters-3",level:3},{value:"Query parameters",id:"query-parameters-4",level:3},{value:"Response",id:"response-4",level:3},{value:"Current running queries",id:"current-running-queries",level:2},{value:"Description",id:"description-5",level:3},{value:"Path parameters",id:"path-parameters-4",level:3},{value:"Query parameters",id:"query-parameters-5",level:3},{value:"Response",id:"response-5",level:3},{value:"Cancel query",id:"cancel-query",level:2},{value:"Description",id:"description-6",level:3},{value:"Path parameters",id:"path-parameters-5",level:3},{value:"Query parameters",id:"query-parameters-6",level:3},{value:"Response",id:"response-6",level:3}],u={toc:o},d="wrapper";function y(e){let{components:n,...r}=e;return(0,t.yg)(d,(0,a.A)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"query-profile-action"},"Query Profile Action"),(0,t.yg)("h2",{id:"request"},"Request"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/query/query_info")),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/query/trace/{trace_id}")),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/query/sql/{query_id}")),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/query/profile/text/{query_id}")),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/query/profile/graph/{query_id}")),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/query/profile/json/{query_id}")),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/query/profile/fragments/{query_id}")),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/query/current_queries")),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/query/kill/{query_id}")),(0,t.yg)("h2",{id:"get-the-query-information"},"Get the query information"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/query/query_info")),(0,t.yg)("h3",{id:"description"},"Description"),(0,t.yg)("p",null,"Gets information about select queries for all fe nodes in the cluster."),(0,t.yg)("h3",{id:"query-parameters"},"Query parameters"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"query_id")),(0,t.yg)("p",{parentName:"li"},"  Optional, specifies the query ID of the query to be returned, default returns information for all queries.\n")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"search")),(0,t.yg)("p",{parentName:"li"},"  Optional, specifies that query information containing strings is returned, currently only string matches are performed.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"is_all_node")),(0,t.yg)("p",{parentName:"li"},"  Optional, if true, returns query information for all fe nodes, if false, returns query information for the current fe node. The default is true."))),(0,t.yg)("h3",{id:"response"},"Response"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "column_names": [\n            "Query ID",\n            "FE\u8282\u70b9",\n            "\u67e5\u8be2\u7528\u6237",\n            "\u6267\u884c\u6570\u636e\u5e93",\n            "Sql",\n            "\u67e5\u8be2\u7c7b\u578b",\n            "\u5f00\u59cb\u65f6\u95f4",\n            "\u7ed3\u675f\u65f6\u95f4",\n            "\u6267\u884c\u65f6\u957f",\n            "\u72b6\u6001"\n        ],\n        "rows": [\n            [\n                ...\n            ]\n        ]\n    },\n    "count": 0\n}\n')),(0,t.yg)("version",{since:"1.2"},(0,t.yg)("p",null,"Admin \u548c Root \u7528\u6237\u53ef\u4ee5\u67e5\u770b\u6240\u6709 Query\u3002\u666e\u901a\u7528\u6237\u4ec5\u80fd\u67e5\u770b\u81ea\u5df1\u53d1\u9001\u7684 Query\u3002")),(0,t.yg)("h3",{id:"examples"},"Examples"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'GET /rest/v2/manager/query/query_info\n\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "column_names": [\n            "Query ID",\n            "FE\u8282\u70b9",\n            "\u67e5\u8be2\u7528\u6237",\n            "\u6267\u884c\u6570\u636e\u5e93",\n            "Sql",\n            "\u67e5\u8be2\u7c7b\u578b",\n            "\u5f00\u59cb\u65f6\u95f4",\n            "\u7ed3\u675f\u65f6\u95f4",\n            "\u6267\u884c\u65f6\u957f",\n            "\u72b6\u6001"\n        ],\n        "rows": [\n            [\n                "d7c93d9275334c35-9e6ac5f295a7134b",\n                "127.0.0.1:8030",\n                "root",\n                "default_cluster:testdb",\n                "select c.id, c.name, p.age, p.phone, c.date, c.cost from cost c join people p on c.id = p.id where p.age > 20 order by c.id",\n                "Query",\n                "2021-07-29 16:59:12",\n                "2021-07-29 16:59:12",\n                "109ms",\n                "EOF"\n            ]\n        ]\n    },\n    "count": 0\n}\n')),(0,t.yg)("h2",{id:"get-query-id-by-trace-id"},"Get Query Id By Trace Id"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/query/trace_id/{trace_id}")),(0,t.yg)("h3",{id:"description-1"},"Description"),(0,t.yg)("p",null,"Get query id by trance id."),(0,t.yg)("p",null,"Before executing a Query, set a unique trace id:"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},'set session_context="trace_id:your_trace_id";')),(0,t.yg)("p",null,"After executing the Query within the same Session, the query id can be obtained through the trace id."),(0,t.yg)("h3",{id:"path-parameters"},"Path parameters"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"{trace_id}")),(0,t.yg)("p",{parentName:"li"},"  User specific trace id."))),(0,t.yg)("h3",{id:"query-parameters-1"},"Query parameters"),(0,t.yg)("h3",{id:"response-1"},"Response"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'{\n    "msg": "success", \n    "code": 0, \n    "data": "fb1d9737de914af1-a498d5c5dec638d3", \n    "count": 0\n}\n')),(0,t.yg)("version",{since:"1.2"},(0,t.yg)("p",null,"Admin and Root user can view all queries. Ordinary users can only view the Query sent by themselves. If the specified trace id does not exist or has no permission, it will return Bad Request:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'{\n    "msg": "Bad Request", \n    "code": 403, \n    "data": "error messages",\n    "count": 0\n}\n'))),(0,t.yg)("h2",{id:"get-the-sql-and-text-profile-for-the-specified-query"},"Get the sql and text profile for the specified query"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/query/sql/{query_id}")),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/query/profile/text/{query_id}")),(0,t.yg)("h3",{id:"description-2"},"Description"),(0,t.yg)("p",null,"Get the sql and profile text for the specified query id."),(0,t.yg)("h3",{id:"path-parameters-1"},"Path parameters"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"query_id")),(0,t.yg)("p",{parentName:"li"},"  The query id."))),(0,t.yg)("h3",{id:"query-parameters-2"},"Query parameters"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"is_all_node")),(0,t.yg)("p",{parentName:"li"},"  Optional, if true then query for the specified query id in all fe nodes, if false then query for the specified query id in the currently connected fe nodes. The default is true."))),(0,t.yg)("h3",{id:"response-2"},"Response"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "sql": ""\n    },\n    "count": 0\n}\n')),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "profile": ""\n    },\n    "count": 0\n}\n')),(0,t.yg)("version",{since:"1.2"},(0,t.yg)("p",null,"Admin and Root user can view all queries. Ordinary users can only view the Query sent by themselves. If the specified trace id does not exist or has no permission, it will return Bad Request:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'{\n    "msg": "Bad Request", \n    "code": 403, \n    "data": "error messages",\n    "count": 0\n}\n'))),"### Examples",(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"get sql."),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre"},'GET /rest/v2/manager/query/sql/d7c93d9275334c35-9e6ac5f295a7134b\n\nResponse:\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "sql": "select c.id, c.name, p.age, p.phone, c.date, c.cost from cost c join people p on c.id = p.id where p.age > 20 order by c.id"\n    },\n    "count": 0\n}\n')))),(0,t.yg)("h2",{id:"get-the-specified-query-fragment-and-instance-information"},"Get the specified query fragment and instance information"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/query/profile/fragments/{query_id}")),(0,t.yg)("h3",{id:"description-3"},"Description"),(0,t.yg)("p",null,"Get the fragment name, instance id, host ip/port and execution time for the specified query id."),(0,t.yg)("h3",{id:"path-parameters-2"},"Path parameters"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"query_id")),(0,t.yg)("p",{parentName:"li"},"  The query id."))),(0,t.yg)("h3",{id:"query-parameters-3"},"Query parameters"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"is_all_node")),(0,t.yg)("p",{parentName:"li"},"  Optional, if true then query for the specified query id in all fe nodes, if false then query for the specified query id in the currently connected fe nodes. The default is true."))),(0,t.yg)("h3",{id:"response-3"},"Response"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": [\n        {\n            "fragment_id": "",\n            "time": "",\n            "instance_id": {\n                "": {\n                  "host": "",\n                  "active_time": ""\n                }\n            }\n        }\n    ],\n    "count": 0\n}\n')),(0,t.yg)("version",{since:"1.2"},(0,t.yg)("p",null,"Admin and Root user can view all queries. Ordinary users can only view the Query sent by themselves. If the specified trace id does not exist or has no permission, it will return Bad Request:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'{\n    "msg": "Bad Request", \n    "code": 403, \n    "data": "error messages",\n    "count": 0\n}\n'))),"### Examples",(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'GET /rest/v2/manager/query/profile/fragments/d7c93d9275334c35-9e6ac5f295a7134b\n\nResponse:\n{\n    "msg": "success",\n    "code": 0,\n    "data": [\n        {\n            "fragment_id": "0",\n            "time": "36.169ms",\n            "instance_id": {\n                "d7c93d9275334c35-9e6ac5f295a7134e": {\n                    "host": "172.19.0.4:9060",\n                    "active_time": "36.169ms"\n                }\n            }\n        },\n        {\n            "fragment_id": "1",\n            "time": "20.710ms",\n            "instance_id": {\n                "d7c93d9275334c35-9e6ac5f295a7134c": {\n                    "host": "172.19.0.5:9060",\n                    "active_time": "20.710ms"\n                }\n            }\n        },\n        {\n            "fragment_id": "2",\n            "time": "7.83ms",\n            "instance_id": {\n                "d7c93d9275334c35-9e6ac5f295a7134d": {\n                    "host": "172.19.0.6:9060",\n                    "active_time": "7.83ms"\n                },\n                "d7c93d9275334c35-9e6ac5f295a7134f": {\n                    "host": "172.19.0.7:9060",\n                    "active_time": "10.873ms"\n                }\n            }\n        }\n    ],\n    "count": 0\n}\n')),(0,t.yg)("h2",{id:"get-the-specified-query-id-tree-profile-information"},"Get the specified query id tree profile information"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/query/profile/graph/{query_id}")),(0,t.yg)("h3",{id:"description-4"},"Description"),(0,t.yg)("p",null,"Get the tree profile information of the specified query id, same as ",(0,t.yg)("inlineCode",{parentName:"p"},"show query profile")," command."),(0,t.yg)("h3",{id:"path-parameters-3"},"Path parameters"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"query_id")),(0,t.yg)("p",{parentName:"li"},"  The query id."))),(0,t.yg)("h3",{id:"query-parameters-4"},"Query parameters"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"fragment_id")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"instance_id")),(0,t.yg)("p",{parentName:"li"},"  Optional, both parameters must be specified or not.",(0,t.yg)("br",{parentName:"p"}),"\n","If both are not specified, a simple tree of profiles is returned, equivalent to ",(0,t.yg)("inlineCode",{parentName:"p"},"show query profile '/query_id'"),";",(0,t.yg)("br",{parentName:"p"}),"\n","If both are specified, a detailed profile tree is returned, which is equivalent to ",(0,t.yg)("inlineCode",{parentName:"p"},"show query profile '/query_id/fragment_id/instance_id'"),".")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"is_all_node")),(0,t.yg)("p",{parentName:"li"},"  Optional, if true then query information about the specified query id in all fe nodes, if false then query information about the specified query id in the currently connected fe nodes. The default is true."))),(0,t.yg)("h3",{id:"response-4"},"Response"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "graph":""\n    },\n    "count": 0\n}\n')),(0,t.yg)("version",{since:"1.2"},(0,t.yg)("p",null,"Admin and Root user can view all queries. Ordinary users can only view the Query sent by themselves. If the specified trace id does not exist or has no permission, it will return Bad Request:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'{\n    "msg": "Bad Request", \n    "code": 403, \n    "data": "error messages",\n    "count": 0\n}\n'))),(0,t.yg)("h2",{id:"current-running-queries"},"Current running queries"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/query/current_queries")),(0,t.yg)("h3",{id:"description-5"},"Description"),(0,t.yg)("p",null,"Same as ",(0,t.yg)("inlineCode",{parentName:"p"},'show proc "/current_query_stmts"'),", return current running queries."),(0,t.yg)("h3",{id:"path-parameters-4"},"Path parameters"),(0,t.yg)("h3",{id:"query-parameters-5"},"Query parameters"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"is_all_node")),(0,t.yg)("p",{parentName:"li"},"  Optional. Return current running queries from all FE if set to true. Default is true."))),(0,t.yg)("h3",{id:"response-5"},"Response"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "columnNames": ["Frontend", "QueryId", "ConnectionId", "Database", "User", "ExecTime", "SqlHash", "Statement"],\n        "rows": [\n            ["172.19.0.3", "108e47ab438a4560-ab1651d16c036491", "2", "", "root", "6074", "1a35f62f4b14b9d7961b057b77c3102f", "select sleep(60)"],\n            ["172.19.0.11", "3606cad4e34b49c6-867bf6862cacc645", "3", "", "root", "9306", "1a35f62f4b14b9d7961b057b77c3102f", "select sleep(60)"]\n        ]\n    },\n    "count": 0\n}\n')),(0,t.yg)("h2",{id:"cancel-query"},"Cancel query"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"POST /rest/v2/manager/query/kill/{query_id}")),(0,t.yg)("h3",{id:"description-6"},"Description"),(0,t.yg)("p",null,"Cancel query of specified connection."),(0,t.yg)("h3",{id:"path-parameters-5"},"Path parameters"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"{query_id}")),(0,t.yg)("p",{parentName:"li"},"  query id. You can get query id by ",(0,t.yg)("inlineCode",{parentName:"p"},"trance_id")," api."))),(0,t.yg)("h3",{id:"query-parameters-6"},"Query parameters"),(0,t.yg)("h3",{id:"response-6"},"Response"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": null,\n    "count": 0\n}\n')))}y.isMDXComponent=!0}}]);