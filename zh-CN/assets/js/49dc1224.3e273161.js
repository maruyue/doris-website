"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[48754],{15680:(e,n,a)=>{a.d(n,{xA:()=>c,yg:()=>g});var t=a(296540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),p=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},c=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},N=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(a),N=r,g=m["".concat(s,".").concat(N)]||m[N]||u[N]||l;return a?t.createElement(g,o(o({ref:n},c),{},{components:a})):t.createElement(g,o({ref:n},c))}));function g(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=N;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}N.displayName="MDXCreateElement"},952603:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var t=a(58168),r=(a(296540),a(15680));const l={title:"SHOW-PROC",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-PROC",id:"version-2.0/sql-manual/sql-reference/Show-Statements/SHOW-PROC",title:"SHOW-PROC",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-reference/Show-Statements/SHOW-PROC.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-PROC",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-PROC",draft:!1,tags:[],version:"2.0",frontMatter:{title:"SHOW-PROC",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-ROUTINE-LOAD-TASK",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-ROUTINE-LOAD-TASK"},next:{title:"SHOW-TABLE-STATS",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-TABLE-STATS"}},s={},p=[{value:"SHOW-PROC",id:"show-proc",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:p},m="wrapper";function u(e){let{components:n,...a}=e;return(0,r.yg)(m,(0,t.A)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"show-proc"},"SHOW-PROC"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"SHOW PROC "),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"Proc \u7cfb\u7edf\u662f Doris \u7684\u4e00\u4e2a\u6bd4\u8f83\u6709\u7279\u8272\u7684\u529f\u80fd\u3002\u4f7f\u7528\u8fc7 Linux \u7684\u540c\u5b66\u53ef\u80fd\u6bd4\u8f83\u4e86\u89e3\u8fd9\u4e2a\u6982\u5ff5\u3002\u5728 Linux \u7cfb\u7edf\u4e2d\uff0cproc \u662f\u4e00\u4e2a\u865a\u62df\u7684\u6587\u4ef6\u7cfb\u7edf\uff0c\u901a\u5e38\u6302\u8f7d\u5728 /proc \u76ee\u5f55\u4e0b\u3002\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e2a\u6587\u4ef6\u7cfb\u7edf\u6765\u67e5\u770b\u7cfb\u7edf\u5185\u90e8\u7684\u6570\u636e\u7ed3\u6784\u3002\u6bd4\u5982\u53ef\u4ee5\u901a\u8fc7 /proc/pid \u67e5\u770b\u6307\u5b9a pid \u8fdb\u7a0b\u7684\u8be6\u7ec6\u60c5\u51b5\u3002"),(0,r.yg)("p",null,"\u548c Linux \u4e2d\u7684 proc \u7cfb\u7edf\u7c7b\u4f3c\uff0cDoris \u4e2d\u7684 proc \u7cfb\u7edf\u4e5f\u88ab\u7ec4\u7ec7\u6210\u4e00\u4e2a\u7c7b\u4f3c\u76ee\u5f55\u7684\u7ed3\u6784\uff0c\u6839\u636e\u7528\u6237\u6307\u5b9a\u7684\u201c\u76ee\u5f55\u8def\u5f84\uff08proc \u8def\u5f84\uff09\u201d\uff0c\u6765\u67e5\u770b\u4e0d\u540c\u7684\u7cfb\u7edf\u4fe1\u606f\u3002"),(0,r.yg)("p",null,"proc \u7cfb\u7edf\u88ab\u8bbe\u8ba1\u4e3a\u4e3b\u8981\u9762\u5411\u7cfb\u7edf\u7ba1\u7406\u4eba\u5458\uff0c\u65b9\u4fbf\u5176\u67e5\u770b\u7cfb\u7edf\u5185\u90e8\u7684\u4e00\u4e9b\u8fd0\u884c\u72b6\u6001\u3002\u5982\u8868\u7684tablet\u72b6\u6001\u3001\u96c6\u7fa4\u5747\u8861\u72b6\u6001\u3001\u5404\u79cd\u4f5c\u4e1a\u7684\u72b6\u6001\u7b49\u7b49\u3002\u662f\u4e00\u4e2a\u975e\u5e38\u5b9e\u7528\u7684\u529f\u80fd"),(0,r.yg)("p",null,"Doris \u4e2d\u6709\u4e24\u79cd\u65b9\u5f0f\u53ef\u4ee5\u67e5\u770b proc \u7cfb\u7edf\u3002"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u901a\u8fc7 Doris \u63d0\u4f9b\u7684 WEB UI \u754c\u9762\u67e5\u770b\uff0c\u8bbf\u95ee\u5730\u5740\uff1a",(0,r.yg)("inlineCode",{parentName:"li"},"http://FE_IP:FE_HTTP_PORT")),(0,r.yg)("li",{parentName:"ol"},"\u53e6\u5916\u4e00\u79cd\u65b9\u5f0f\u662f\u901a\u8fc7\u547d\u4ee4")),(0,r.yg)("p",null,"\u901a\u8fc7 ",(0,r.yg)("inlineCode",{parentName:"p"},' SHOW PROC  "/";')," \u53ef\u770b\u5230 Doris PROC\u652f\u6301\u7684\u6240\u6709\u547d\u4ee4"),(0,r.yg)("p",null,'\u901a\u8fc7 MySQL \u5ba2\u6237\u7aef\u8fde\u63a5 Doris \u540e\uff0c\u53ef\u4ee5\u6267\u884c SHOW PROC \u8bed\u53e5\u67e5\u770b\u6307\u5b9a proc \u76ee\u5f55\u7684\u4fe1\u606f\u3002proc \u76ee\u5f55\u662f\u4ee5 "/" \u5f00\u5934\u7684\u7edd\u5bf9\u8def\u5f84\u3002'),(0,r.yg)("p",null,"show proc \u8bed\u53e5\u7684\u7ed3\u679c\u4ee5\u4e8c\u7ef4\u8868\u7684\u5f62\u5f0f\u5c55\u73b0\u3002\u800c\u901a\u5e38\u7ed3\u679c\u8868\u7684\u7b2c\u4e00\u5217\u7684\u503c\u4e3a proc \u7684\u4e0b\u4e00\u7ea7\u5b50\u76ee\u5f55\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> show proc "/";\n+---------------------------+\n| name                      |\n+---------------------------+\n| auth                      |\n| backends                  |\n| bdbje                     |\n| brokers                   |\n| catalogs                  |\n| cluster_balance           |\n| cluster_health            |\n| colocation_group          |\n| current_backend_instances |\n| current_queries           |\n| current_query_stmts       |\n| dbs                       |\n| frontends                 |\n| jobs                      |\n| load_error_hub            |\n| monitor                   |\n| resources                 |\n| routine_loads             |\n| statistic                 |\n| stream_loads              |\n| tasks                     |\n| transactions              |\n| trash                     |\n+---------------------------+\n23 rows in set (0.00 sec)\n')),(0,r.yg)("p",null,"\u8bf4\u660e\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"auth\uff1a\u7528\u6237\u540d\u79f0\u53ca\u5bf9\u5e94\u7684\u6743\u9650\u4fe1\u606f"),(0,r.yg)("li",{parentName:"ol"},"backends \uff1a\u663e\u793a\u96c6\u7fa4\u4e2d BE \u7684\u8282\u70b9\u5217\u8868  \uff0c \u7b49\u540c\u4e8e ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-BACKENDS"},"SHOW BACKENDS"),"        "),(0,r.yg)("li",{parentName:"ol"},"bdbje\uff1a\u67e5\u770b bdbje \u6570\u636e\u5e93\u5217\u8868\uff0c\u9700\u8981\u4fee\u6539 ",(0,r.yg)("inlineCode",{parentName:"li"},"fe.conf")," \u6587\u4ef6\u589e\u52a0 ",(0,r.yg)("inlineCode",{parentName:"li"},"enable_bdbje_debug_mode=true")," , \u7136\u540e\u901a\u8fc7 ",(0,r.yg)("inlineCode",{parentName:"li"},"sh start_fe.sh --daemon")," \u542f\u52a8 ",(0,r.yg)("inlineCode",{parentName:"li"},"FE")," \u5373\u53ef\u8fdb\u5165 ",(0,r.yg)("inlineCode",{parentName:"li"},"debug")," \u6a21\u5f0f\u3002 \u8fdb\u5165 ",(0,r.yg)("inlineCode",{parentName:"li"},"debug")," \u6a21\u5f0f\u4e4b\u540e\uff0c\u4ec5\u4f1a\u542f\u52a8 ",(0,r.yg)("inlineCode",{parentName:"li"},"http server")," \u548c  ",(0,r.yg)("inlineCode",{parentName:"li"},"MySQLServer")," \u5e76\u6253\u5f00 ",(0,r.yg)("inlineCode",{parentName:"li"},"BDBJE")," \u5b9e\u4f8b\uff0c\u4f46\u4e0d\u4f1a\u8fdb\u5165\u4efb\u4f55\u5143\u6570\u636e\u7684\u52a0\u8f7d\u53ca\u540e\u7eed\u5176\u4ed6\u542f\u52a8\u6d41\u7a0b\uff0c"),(0,r.yg)("li",{parentName:"ol"},"brokers : \u67e5\u770b\u96c6\u7fa4 Broker \u8282\u70b9\u4fe1\u606f\uff0c\u7b49\u540c\u4e8e ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-BROKER"},"SHOW BROKER")),(0,r.yg)("li",{parentName:"ol"},"catalogs : \u67e5\u770b\u5f53\u524d\u5df2\u521b\u5efa\u7684\u6570\u636e\u76ee\u5f55\uff0c\u7b49\u540c\u4e8e ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-CATALOGS"},"SHOW CATALOGS")),(0,r.yg)("li",{parentName:"ol"},"cluster_balance  \uff1a \u67e5\u770b\u96c6\u7fa4\u5747\u8861\u60c5\u51b5\uff0c\u5177\u4f53\u53c2\u7167 ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.0/admin-manual/maint-monitor/tablet-repair-and-balance"},"\u6570\u636e\u526f\u672c\u7ba1\u7406")),(0,r.yg)("li",{parentName:"ol"},"cluster_health : \u901a\u8fc7 ",(0,r.yg)("code",null,"SHOW PROC '/cluster_health/tablet_health'"),"; \u547d\u4ee4\u53ef\u4ee5\u67e5\u770b\u6574\u4e2a\u96c6\u7fa4\u7684\u526f\u672c\u72b6\u6001\u3002"),(0,r.yg)("li",{parentName:"ol"},"colocation_group :   \u8be5\u547d\u4ee4\u53ef\u4ee5\u67e5\u770b\u96c6\u7fa4\u5185\u5df2\u5b58\u5728\u7684 Group \u4fe1\u606f, \u5177\u4f53\u53ef\u4ee5\u67e5\u770b ",(0,r.yg)("a",{parentName:"li",href:"../../../query-acceleration/join-optimization/colocation-join.md"},"Colocation Join")," \u7ae0\u8282"),(0,r.yg)("li",{parentName:"ol"},"current_backend_instances \uff1a\u663e\u793a\u5f53\u524d\u6b63\u5728\u6267\u884c\u4f5c\u4e1a\u7684be\u8282\u70b9\u5217\u8868"),(0,r.yg)("li",{parentName:"ol"},"current_queries  : \u67e5\u770b\u6b63\u5728\u6267\u884c\u7684\u67e5\u8be2\u5217\u8868\uff0c\u5f53\u524d\u6b63\u5728\u8fd0\u884c\u7684SQL\u8bed\u53e5\u3002                          "),(0,r.yg)("li",{parentName:"ol"},"current_query_stmts : \u8fd4\u56de\u5f53\u524d\u6b63\u5728\u6267\u884c\u7684 query\u3002"),(0,r.yg)("li",{parentName:"ol"},"dbs \uff1a \u4e3b\u8981\u7528\u4e8e\u67e5\u770b Doris \u96c6\u7fa4\u4e2d\u5404\u4e2a\u6570\u636e\u5e93\u4ee5\u53ca\u5176\u4e2d\u7684\u8868\u7684\u5143\u6570\u636e\u4fe1\u606f\u3002\u8fd9\u4e9b\u4fe1\u606f\u5305\u62ec\u8868\u7ed3\u6784\u3001\u5206\u533a\u3001\u7269\u5316\u89c6\u56fe\u3001\u6570\u636e\u5206\u7247\u548c\u526f\u672c\u7b49\u7b49\u3002\u901a\u8fc7\u8fd9\u4e2a\u76ee\u5f55\u548c\u5176\u5b50\u76ee\u5f55\uff0c\u53ef\u4ee5\u6e05\u695a\u7684\u5c55\u793a\u96c6\u7fa4\u4e2d\u7684\u8868\u5143\u6570\u636e\u60c5\u51b5\uff0c\u4ee5\u53ca\u5b9a\u4f4d\u4e00\u4e9b\u5982\u6570\u636e\u503e\u659c\u3001\u526f\u672c\u6545\u969c\u7b49\u95ee\u9898"),(0,r.yg)("li",{parentName:"ol"},"frontends \uff1a\u663e\u793a\u96c6\u7fa4\u4e2d\u6240\u6709\u7684 FE \u8282\u70b9\u4fe1\u606f\uff0c\u5305\u62ecIP\u5730\u5740\u3001\u89d2\u8272\u3001\u72b6\u6001\u3001\u662f\u5426\u662fmater\u7b49\uff0c\u7b49\u540c\u4e8e ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-FRONTENDS"},"SHOW FRONTENDS"),"   "),(0,r.yg)("li",{parentName:"ol"},"jobs \uff1a\u5404\u7c7b\u4efb\u52a1\u7684\u7edf\u8ba1\u4fe1\u606f\uff0c\u53ef\u67e5\u770b\u6307\u5b9a\u6570\u636e\u5e93\u7684 Job \u7684\u7edf\u8ba1\u4fe1\u606f\uff0c\u5982\u679c ",(0,r.yg)("inlineCode",{parentName:"li"},"dbId")," = -1, \u5219\u8fd4\u56de\u6240\u6709\u5e93\u7684\u6c47\u603b\u4fe1\u606f"),(0,r.yg)("li",{parentName:"ol"},"load_error_hub \uff1aDoris \u652f\u6301\u5c06 load \u4f5c\u4e1a\u4ea7\u751f\u7684\u9519\u8bef\u4fe1\u606f\u96c6\u4e2d\u5b58\u50a8\u5230\u4e00\u4e2a error hub \u4e2d\u3002\u7136\u540e\u76f4\u63a5\u901a\u8fc7 ",(0,r.yg)("code",null,"SHOW LOAD WARNINGS;")," \u8bed\u53e5\u67e5\u770b\u9519\u8bef\u4fe1\u606f\u3002\u8fd9\u91cc\u5c55\u793a\u7684\u5c31\u662f error hub \u7684\u914d\u7f6e\u4fe1\u606f\u3002"),(0,r.yg)("li",{parentName:"ol"},"monitor : \u663e\u793a\u7684\u662f FE JVM \u7684\u8d44\u6e90\u4f7f\u7528\u60c5\u51b5     "),(0,r.yg)("li",{parentName:"ol"},"resources : \u67e5\u770b\u7cfb\u7edf\u8d44\u6e90\uff0c\u666e\u901a\u8d26\u6237\u53ea\u80fd\u770b\u5230\u81ea\u5df1\u6709 USAGE_PRIV \u4f7f\u7528\u6743\u9650\u7684\u8d44\u6e90\u3002\u53ea\u6709root\u548cadmin\u8d26\u6237\u53ef\u4ee5\u770b\u5230\u6240\u6709\u7684\u8d44\u6e90\u3002\u7b49\u540c\u4e8e ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-RESOURCES"},"SHOW RESOURCES")),(0,r.yg)("li",{parentName:"ol"},"routine_loads \uff1a \u663e\u793a\u6240\u6709\u7684 routine load \u4f5c\u4e1a\u4fe1\u606f\uff0c\u5305\u62ec\u4f5c\u4e1a\u540d\u79f0\u3001\u72b6\u6001\u7b49"),(0,r.yg)("li",{parentName:"ol"},"statistics\uff1a\u4e3b\u8981\u7528\u4e8e\u6c47\u603b\u67e5\u770b Doris \u96c6\u7fa4\u4e2d\u6570\u636e\u5e93\u3001\u8868\u3001\u5206\u533a\u3001\u5206\u7247\u3001\u526f\u672c\u7684\u6570\u91cf\u3002\u4ee5\u53ca\u4e0d\u5065\u5eb7\u526f\u672c\u7684\u6570\u91cf\u3002\u8fd9\u4e2a\u4fe1\u606f\u6709\u52a9\u4e8e\u6211\u4eec\u603b\u4f53\u628a\u63a7\u96c6\u7fa4\u5143\u4fe1\u606f\u7684\u89c4\u6a21\u3002\u5e2e\u52a9\u6211\u4eec\u4ece\u6574\u4f53\u89c6\u89d2\u67e5\u770b\u96c6\u7fa4\u5206\u7247\u60c5\u51b5\uff0c\u80fd\u591f\u5feb\u901f\u67e5\u770b\u96c6\u7fa4\u5206\u7247\u7684\u5065\u5eb7\u60c5\u51b5\u3002\u4ece\u800c\u8fdb\u4e00\u6b65\u5b9a\u4f4d\u6709\u95ee\u9898\u7684\u6570\u636e\u5206\u7247\u3002"),(0,r.yg)("li",{parentName:"ol"},"stream_loads : \u8fd4\u56de\u5f53\u524d\u6b63\u5728\u6267\u884c\u7684stream load \u4efb\u52a1\u3002"),(0,r.yg)("li",{parentName:"ol"},"tasks :  \u663e\u793a\u73b0\u5728\u5404\u79cd\u4f5c\u4e1a\u7684\u4efb\u52a1\u603b\u91cf\uff0c\u53ca\u5931\u8d25\u7684\u6570\u91cf\u3002"),(0,r.yg)("li",{parentName:"ol"},"transactions \uff1a\u7528\u4e8e\u67e5\u770b\u6307\u5b9a transaction id \u7684\u4e8b\u52a1\u8be6\u60c5\uff0c\u7b49\u540c\u4e8e ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-TRANSACTION"},"SHOW TRANSACTION")),(0,r.yg)("li",{parentName:"ol"},"trash \uff1a\u8be5\u8bed\u53e5\u7528\u4e8e\u67e5\u770b backend \u5185\u7684\u5783\u573e\u6570\u636e\u5360\u7528\u7a7a\u95f4\u3002 \u7b49\u540c\u4e8e ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-TRASH"},"SHOW TRASH"),"    ")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},'\u5982 "/dbs" \u5c55\u793a\u6240\u6709\u6570\u636e\u5e93\uff0c\u800c "/dbs/10002" \u5c55\u793a id \u4e3a 10002 \u7684\u6570\u636e\u5e93\u4e0b\u7684\u6240\u6709\u8868'),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> show proc "/dbs/10002";\n+---------+----------------------+----------+---------------------+--------------+--------+------+--------------------------+--------------+\n| TableId | TableName            | IndexNum | PartitionColumnName | PartitionNum | State  | Type | LastConsistencyCheckTime | ReplicaCount |\n+---------+----------------------+----------+---------------------+--------------+--------+------+--------------------------+--------------+\n| 10065   | dwd_product_live     | 1        | dt                  | 9            | NORMAL | OLAP | NULL                     | 18           |\n| 10109   | ODS_MR_BILL_COSTS_DO | 1        | NULL                | 1            | NORMAL | OLAP | NULL                     | 1            |\n| 10119   | test                 | 1        | NULL                | 1            | NORMAL | OLAP | NULL                     | 1            |\n| 10124   | test_parquet_import  | 1        | NULL                | 1            | NORMAL | OLAP | NULL                     | 1            |\n+---------+----------------------+----------+---------------------+--------------+--------+------+--------------------------+--------------+\n4 rows in set (0.00 sec)\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5c55\u793a\u96c6\u7fa4\u4e2d\u6240\u6709\u5e93\u8868\u4e2a\u6570\u76f8\u5173\u7684\u4fe1\u606f\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> show proc '/statistic';\n+-------+----------------------+----------+--------------+----------+-----------+------------+\n| DbId  | DbName               | TableNum | PartitionNum | IndexNum | TabletNum | ReplicaNum |\n+-------+----------------------+----------+--------------+----------+-----------+------------+\n| 10002 | default_cluster:test | 4        | 12           | 12       | 21        | 21         |\n| Total | 1                    | 4        | 12           | 12       | 21        | 21         |\n+-------+----------------------+----------+--------------+----------+-----------+------------+\n2 rows in set (0.00 sec)\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u4ee5\u4e0b\u547d\u4ee4\u53ef\u4ee5\u67e5\u770b\u96c6\u7fa4\u5185\u5df2\u5b58\u5728\u7684 Group \u4fe1\u606f\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW PROC '/colocation_group';\n\n+-------------+--------------+--------------+------------+----------------+----------+----------+\n| GroupId     | GroupName    | TableIds     | BucketsNum | ReplicationNum | DistCols | IsStable |\n+-------------+--------------+--------------+------------+----------------+----------+----------+\n| 10005.10008 | 10005_group1 | 10007, 10040 | 10         | 3              | int(11)  | true     |\n+-------------+--------------+--------------+------------+----------------+----------+----------+\n")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"GroupId\uff1a \u4e00\u4e2a Group \u7684\u5168\u96c6\u7fa4\u552f\u4e00\u6807\u8bc6\uff0c\u524d\u534a\u90e8\u5206\u4e3a db id\uff0c\u540e\u534a\u90e8\u5206\u4e3a group id\u3002"),(0,r.yg)("li",{parentName:"ul"},"GroupName\uff1a Group \u7684\u5168\u540d\u3002"),(0,r.yg)("li",{parentName:"ul"},"TabletIds\uff1a \u8be5 Group \u5305\u542b\u7684 Table \u7684 id \u5217\u8868\u3002"),(0,r.yg)("li",{parentName:"ul"},"BucketsNum\uff1a \u5206\u6876\u6570\u3002"),(0,r.yg)("li",{parentName:"ul"},"ReplicationNum\uff1a \u526f\u672c\u6570\u3002"),(0,r.yg)("li",{parentName:"ul"},"DistCols\uff1a Distribution columns\uff0c\u5373\u5206\u6876\u5217\u7c7b\u578b\u3002"),(0,r.yg)("li",{parentName:"ul"},"IsStable\uff1a \u8be5 Group \u662f\u5426\u7a33\u5b9a\uff08\u7a33\u5b9a\u7684\u5b9a\u4e49\uff0c\u89c1 ",(0,r.yg)("inlineCode",{parentName:"li"},"Colocation \u526f\u672c\u5747\u8861\u548c\u4fee\u590d")," \u4e00\u8282\uff09\u3002"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u53ef\u4ee5\u8fdb\u4e00\u6b65\u67e5\u770b\u4e00\u4e2a Group \u7684\u6570\u636e\u5206\u5e03\u60c5\u51b5\uff1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW PROC '/colocation_group/10005.10008';\n\n+-------------+---------------------+\n| BucketIndex | BackendIds          |\n+-------------+---------------------+\n| 0           | 10004, 10002, 10001 |\n| 1           | 10003, 10002, 10004 |\n| 2           | 10002, 10004, 10001 |\n| 3           | 10003, 10002, 10004 |\n| 4           | 10002, 10004, 10003 |\n| 5           | 10003, 10002, 10001 |\n| 6           | 10003, 10004, 10001 |\n| 7           | 10003, 10004, 10002 |\n+-------------+---------------------+\n")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"BucketIndex\uff1a \u5206\u6876\u5e8f\u5217\u7684\u4e0b\u6807\u3002"),(0,r.yg)("li",{parentName:"ul"},"BackendIds\uff1a \u5206\u6876\u4e2d\u6570\u636e\u5206\u7247\u6240\u5728\u7684 BE \u8282\u70b9 id \u5217\u8868\u3002"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u663e\u793a\u73b0\u5728\u5404\u79cd\u4f5c\u4e1a\u7684\u4efb\u52a1\u603b\u91cf\uff0c\u53ca\u5931\u8d25\u7684\u6570\u91cf\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> show proc '/tasks';\n+-------------------------+-----------+----------+\n| TaskType                | FailedNum | TotalNum |\n+-------------------------+-----------+----------+\n| CREATE                  | 0         | 0        |\n| DROP                    | 0         | 0        |\n| PUSH                    | 0         | 0        |\n| CLONE                   | 0         | 0        |\n| STORAGE_MEDIUM_MIGRATE  | 0         | 0        |\n| ROLLUP                  | 0         | 0        |\n| SCHEMA_CHANGE           | 0         | 0        |\n| CANCEL_DELETE           | 0         | 0        |\n| MAKE_SNAPSHOT           | 0         | 0        |\n| RELEASE_SNAPSHOT        | 0         | 0        |\n| CHECK_CONSISTENCY       | 0         | 0        |\n| UPLOAD                  | 0         | 0        |\n| DOWNLOAD                | 0         | 0        |\n| CLEAR_REMOTE_FILE       | 0         | 0        |\n| MOVE                    | 0         | 0        |\n| REALTIME_PUSH           | 0         | 0        |\n| PUBLISH_VERSION         | 0         | 0        |\n| CLEAR_ALTER_TASK        | 0         | 0        |\n| CLEAR_TRANSACTION_TASK  | 0         | 0        |\n| RECOVER_TABLET          | 0         | 0        |\n| STREAM_LOAD             | 0         | 0        |\n| UPDATE_TABLET_META_INFO | 0         | 0        |\n| ALTER                   | 0         | 0        |\n| INSTALL_PLUGIN          | 0         | 0        |\n| UNINSTALL_PLUGIN        | 0         | 0        |\n| Total                   | 0         | 0        |\n+-------------------------+-----------+----------+\n26 rows in set (0.01 sec)\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u663e\u793a\u6574\u4e2a\u96c6\u7fa4\u7684\u526f\u672c\u72b6\u6001\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> show proc '/cluster_health/tablet_health';\n+----------+---------------------------+-----------+------------+-------------------+----------------------+----------------------+--------------+----------------------------+-------------------------+-------------------+---------------------+----------------------+----------------------+------------------+-----------------------------+-----------------+-------------+------------+\n| DbId     | DbName                    | TabletNum | HealthyNum | ReplicaMissingNum | VersionIncompleteNum | ReplicaRelocatingNum | RedundantNum | ReplicaMissingInClusterNum | ReplicaMissingForTagNum | ForceRedundantNum | ColocateMismatchNum | ColocateRedundantNum | NeedFurtherRepairNum | UnrecoverableNum | ReplicaCompactionTooSlowNum | InconsistentNum | OversizeNum | CloningNum |\n+----------+---------------------------+-----------+------------+-------------------+----------------------+----------------------+--------------+----------------------------+-------------------------+-------------------+---------------------+----------------------+----------------------+------------------+-----------------------------+-----------------+-------------+------------+\n| 25852112 | default_cluster:bowen     | 1920      | 1920       | 0                 | 0                    | 0                    | 0            | 0                          | 0                       | 0                 | 0                   | 0                    | 0                    | 0                | 0                           | 0               | 0           | 0          |\n| 25342914 | default_cluster:bw        | 128       | 128        | 0                 | 0                    | 0                    | 0            | 0                          | 0                       | 0                 | 0                   | 0                    | 0                    | 0                | 0                           | 0               | 0           | 0          |\n| 2575532  | default_cluster:cps       | 1440      | 1440       | 0                 | 0                    | 0                    | 0            | 0                          | 0                       | 0                 | 0                   | 0                    | 0                    | 0                | 0                           | 0               | 16          | 0          |\n| 26150325 | default_cluster:db        | 38374     | 38374      | 0                 | 0                    | 0                    | 0            | 0                          | 0                       | 0                 | 0                   | 0                    | 0                    | 0                | 0                           | 0               | 453         | 0          |\n+----------+---------------------------+-----------+------------+-------------------+----------------------+----------------------+--------------+----------------------------+-------------------------+-------------------+---------------------+----------------------+----------------------+------------------+-----------------------------+-----------------+-------------+------------+\n4 rows in set (0.01 sec)\n")),(0,r.yg)("p",{parentName:"li"},"\u67e5\u770b\u67d0\u4e2a\u6570\u636e\u5e93\u4e0b\u9762\u7684\u526f\u672c\u72b6\u6001, \u5982 DbId \u4e3a 25852112 \u7684\u6570\u636e\u5e93\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> show proc '/cluster_health/tablet_health/25852112';\n")))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"SHOW, PROC \n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);