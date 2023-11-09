"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[78343],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>N});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(t),p=o,N=f["".concat(i,".").concat(p)]||f[p]||d[p]||l;return t?r.createElement(N,a(a({ref:n},u),{},{components:t})):r.createElement(N,a({ref:n},u))}));function N(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=p;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[f]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<l;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},24295:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=t(87462),o=(t(67294),t(3905));const l={title:"FRONTENDS",language:"zh-CN"},a=void 0,s={unversionedId:"sql-manual/sql-functions/table-functions/frontends",id:"version-2.0/sql-manual/sql-functions/table-functions/frontends",title:"FRONTENDS",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/table-functions/frontends.md",sourceDirName:"sql-manual/sql-functions/table-functions",slug:"/sql-manual/sql-functions/table-functions/frontends",permalink:"/zh-CN/docs/sql-manual/sql-functions/table-functions/frontends",draft:!1,tags:[],version:"2.0",frontMatter:{title:"FRONTENDS",language:"zh-CN"},sidebar:"docs",previous:{title:"BACKENDS",permalink:"/zh-CN/docs/sql-manual/sql-functions/table-functions/backends"},next:{title:"WORKLOAD_GROUPS",permalink:"/zh-CN/docs/sql-manual/sql-functions/table-functions/workload-group"}},i={},c=[{value:"<code>frontends</code>",id:"frontends",level:2},{value:"Name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},f="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(f,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"frontends"},(0,o.kt)("inlineCode",{parentName:"h2"},"frontends")),(0,o.kt)("h3",{id:"name"},"Name"),(0,o.kt)("version",{since:"dev"},(0,o.kt)("p",null,"frontends")),(0,o.kt)("h3",{id:"description"},"description"),(0,o.kt)("p",null,"\u8868\u51fd\u6570\uff0c\u751f\u6210frontends\u4e34\u65f6\u8868\uff0c\u53ef\u4ee5\u67e5\u770b\u5f53\u524ddoris\u96c6\u7fa4\u4e2d\u7684 FE \u8282\u70b9\u4fe1\u606f\u3002"),(0,o.kt)("p",null,"\u8be5\u51fd\u6570\u7528\u4e8efrom\u5b50\u53e5\u4e2d\u3002"),(0,o.kt)("h4",{id:"syntax"},"syntax"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"frontends()")),(0,o.kt)("p",null,"frontends()\u8868\u7ed3\u6784\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql> desc function frontends();\n+-------------------+------+------+-------+---------+-------+\n| Field             | Type | Null | Key   | Default | Extra |\n+-------------------+------+------+-------+---------+-------+\n| Name              | TEXT | No   | false | NULL    | NONE  |\n| Host              | TEXT | No   | false | NULL    | NONE  |\n| EditLogPort       | TEXT | No   | false | NULL    | NONE  |\n| HttpPort          | TEXT | No   | false | NULL    | NONE  |\n| QueryPort         | TEXT | No   | false | NULL    | NONE  |\n| RpcPort           | TEXT | No   | false | NULL    | NONE  |\n| ArrowFlightSqlPort| TEXT | No   | false | NULL    | NONE  |\n| Role              | TEXT | No   | false | NULL    | NONE  |\n| IsMaster          | TEXT | No   | false | NULL    | NONE  |\n| ClusterId         | TEXT | No   | false | NULL    | NONE  |\n| Join              | TEXT | No   | false | NULL    | NONE  |\n| Alive             | TEXT | No   | false | NULL    | NONE  |\n| ReplayedJournalId | TEXT | No   | false | NULL    | NONE  |\n| LastHeartbeat     | TEXT | No   | false | NULL    | NONE  |\n| IsHelper          | TEXT | No   | false | NULL    | NONE  |\n| ErrMsg            | TEXT | No   | false | NULL    | NONE  |\n| Version           | TEXT | No   | false | NULL    | NONE  |\n| CurrentConnected  | TEXT | No   | false | NULL    | NONE  |\n+-------------------+------+------+-------+---------+-------+\n17 rows in set (0.022 sec)\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"frontends()")," tvf\u5c55\u793a\u51fa\u6765\u7684\u4fe1\u606f\u57fa\u672c\u4e0e ",(0,o.kt)("inlineCode",{parentName:"p"},"show frontends")," \u8bed\u53e5\u5c55\u793a\u51fa\u7684\u4fe1\u606f\u4e00\u81f4,\u4f46\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"frontends()")," tvf\u7684\u5404\u4e2a\u5b57\u6bb5\u7c7b\u578b\u66f4\u52a0\u660e\u786e\uff0c\u4e14\u53ef\u4ee5\u5229\u7528tvf\u751f\u6210\u7684\u8868\u53bb\u505a\u8fc7\u6ee4\u3001join\u7b49\u64cd\u4f5c\u3002"),(0,o.kt)("p",null,"\u5bf9 ",(0,o.kt)("inlineCode",{parentName:"p"},"frontends()")," tvf\u4fe1\u606f\u5c55\u793a\u8fdb\u884c\u4e86\u9274\u6743\uff0c\u4e0e ",(0,o.kt)("inlineCode",{parentName:"p"},"show frontends")," \u884c\u4e3a\u4fdd\u6301\u4e00\u81f4\uff0c\u8981\u6c42\u7528\u6237\u5177\u6709 ADMIN/OPERATOR \u6743\u9650\u3002"),(0,o.kt)("h3",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql> select * from frontends()\\G\n*************************** 1. row ***************************\n             Name: fe_5fa8bf19_fd6b_45cb_89c5_25a5ebc45582\n               IP: 10.xx.xx.14\n      EditLogPort: 9013\n         HttpPort: 8034\n        QueryPort: 9033\n          RpcPort: 9023\nArrowFlightSqlPort: 9040\n             Role: FOLLOWER\n         IsMaster: true\n        ClusterId: 1258341841\n             Join: true\n            Alive: true\nReplayedJournalId: 186\n    LastHeartbeat: 2023-06-15 16:53:12\n         IsHelper: true\n           ErrMsg: \n          Version: doris-0.0.0-trunk-4b18cde0c7\n CurrentConnected: Yes\n1 row in set (0.060 sec)\n")),(0,o.kt)("h3",{id:"keywords"},"keywords"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"frontends\n")))}d.isMDXComponent=!0}}]);