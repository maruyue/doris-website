"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[50793],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},k="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),k=s(a),d=l,c=k["".concat(o,".").concat(d)]||k[d]||u[d]||r;return a?n.createElement(c,p(p({ref:t},m),{},{components:a})):n.createElement(c,p({ref:t},m))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,p=new Array(r);p[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[k]="string"==typeof e?e:l,p[1]=i;for(var s=2;s<r;s++)p[s]=a[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},41699:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var n=a(87462),l=(a(67294),a(3905));const r={title:"EXPORT",language:"zh-CN"},p=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/EXPORT",id:"version-2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/EXPORT",title:"EXPORT",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/EXPORT.md",sourceDirName:"sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation",slug:"/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/EXPORT",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/EXPORT",draft:!1,tags:[],version:"2.0",frontMatter:{title:"EXPORT",language:"zh-CN"},sidebar:"docs",previous:{title:"UPDATE",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/UPDATE"},next:{title:"CANCEL-EXPORT",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/CANCEL-EXPORT"}},o={},s=[{value:"EXPORT",id:"export",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"export\u6570\u636e\u5230\u672c\u5730",id:"export\u6570\u636e\u5230\u672c\u5730",level:4},{value:"export with S3",id:"export-with-s3",level:4},{value:"export with HDFS",id:"export-with-hdfs",level:4},{value:"export with Broker",id:"export-with-broker",level:4},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3},{value:"\u5e76\u53d1\u6267\u884c",id:"\u5e76\u53d1\u6267\u884c",level:4},{value:"\u5185\u5b58\u9650\u5236",id:"\u5185\u5b58\u9650\u5236",level:4},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:4}],m={toc:s},k="wrapper";function u(e){let{components:t,...a}=e;return(0,l.kt)(k,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"export"},"EXPORT"),(0,l.kt)("h3",{id:"name"},"Name"),(0,l.kt)("p",null,"EXPORT"),(0,l.kt)("h3",{id:"description"},"Description"),(0,l.kt)("p",null," ",(0,l.kt)("inlineCode",{parentName:"p"},"EXPORT")," \u547d\u4ee4\u7528\u4e8e\u5c06\u6307\u5b9a\u8868\u7684\u6570\u636e\u5bfc\u51fa\u4e3a\u6587\u4ef6\u5230\u6307\u5b9a\u4f4d\u7f6e\u3002\u76ee\u524d\u652f\u6301\u901a\u8fc7 Broker \u8fdb\u7a0b, S3 \u534f\u8bae\u6216HDFS \u534f\u8bae\uff0c\u5bfc\u51fa\u5230\u8fdc\u7aef\u5b58\u50a8\uff0c\u5982 HDFS\uff0cS3\uff0cBOS\uff0cCOS\uff08\u817e\u8baf\u4e91\uff09\u4e0a\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"EXPORT"),"\u662f\u4e00\u4e2a\u5f02\u6b65\u64cd\u4f5c\uff0c\u8be5\u547d\u4ee4\u4f1a\u63d0\u4ea4\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"EXPORT JOB"),"\u5230Doris\uff0c\u4efb\u52a1\u63d0\u4ea4\u6210\u529f\u7acb\u5373\u8fd4\u56de\u3002\u6267\u884c\u540e\u53ef\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/sql-manual/sql-reference/Show-Statements/SHOW-EXPORT"},"SHOW EXPORT")," \u547d\u4ee4\u67e5\u770b\u8fdb\u5ea6\u3002"),(0,l.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"EXPORT TABLE table_name\n[PARTITION (p1[,p2])]\n[WHERE]\nTO export_path\n[opt_properties]\nWITH BROKER/S3/HDFS\n[broker_properties];\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf4\u660e"),"\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"table_name")),(0,l.kt)("p",{parentName:"li"},"\u5f53\u524d\u8981\u5bfc\u51fa\u7684\u8868\u7684\u8868\u540d\u3002\u652f\u6301 Doris \u672c\u5730\u8868\u3001\u89c6\u56feView\u3001Catalog\u5916\u8868\u6570\u636e\u7684\u5bfc\u51fa\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"partition")),(0,l.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u53ea\u5bfc\u51fa\u6307\u5b9a\u8868\u7684\u67d0\u4e9b\u6307\u5b9a\u5206\u533a\uff0c\u53ea\u5bf9Doris\u672c\u5730\u8868\u6709\u6548\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"export_path")),(0,l.kt)("p",{parentName:"li"},"\u5bfc\u51fa\u7684\u6587\u4ef6\u8def\u5f84\u3002\u53ef\u4ee5\u662f\u76ee\u5f55\uff0c\u4e5f\u53ef\u4ee5\u662f\u6587\u4ef6\u76ee\u5f55\u52a0\u6587\u4ef6\u524d\u7f00\uff0c\u5982",(0,l.kt)("inlineCode",{parentName:"p"},"hdfs://path/to/my_file_"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"opt_properties")),(0,l.kt)("p",{parentName:"li"},"\u7528\u4e8e\u6307\u5b9a\u4e00\u4e9b\u5bfc\u51fa\u53c2\u6570\u3002"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'[PROPERTIES ("key"="value", ...)]\n')),(0,l.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u6307\u5b9a\u5982\u4e0b\u53c2\u6570\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"label"),": \u53ef\u9009\u53c2\u6570\uff0c\u6307\u5b9a\u6b64\u6b21Export\u4efb\u52a1\u7684label\uff0c\u5f53\u4e0d\u6307\u5b9a\u65f6\u7cfb\u7edf\u4f1a\u968f\u673a\u751f\u6210\u4e00\u4e2alabel\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"column_separator"),"\uff1a\u6307\u5b9a\u5bfc\u51fa\u7684\u5217\u5206\u9694\u7b26\uff0c\u9ed8\u8ba4\u4e3a\\t\uff0c\u652f\u6301\u591a\u5b57\u8282\u3002\u8be5\u53c2\u6570\u53ea\u7528\u4e8ecsv\u6587\u4ef6\u683c\u5f0f\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"line_delimiter"),"\uff1a\u6307\u5b9a\u5bfc\u51fa\u7684\u884c\u5206\u9694\u7b26\uff0c\u9ed8\u8ba4\u4e3a\\n\uff0c\u652f\u6301\u591a\u5b57\u8282\u3002\u8be5\u53c2\u6570\u53ea\u7528\u4e8ecsv\u6587\u4ef6\u683c\u5f0f\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"columns"),"\uff1a\u6307\u5b9a\u5bfc\u51fa\u8868\u7684\u67d0\u4e9b\u5217\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"format"),"\uff1a\u6307\u5b9a\u5bfc\u51fa\u4f5c\u4e1a\u7684\u6587\u4ef6\u683c\u5f0f\uff0c\u652f\u6301\uff1aparquet, orc, csv, csv_with_names\u3001csv_with_names_and_types\u3002\u9ed8\u8ba4\u4e3acsv\u683c\u5f0f\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"max_file_size"),"\uff1a\u5bfc\u51fa\u4f5c\u4e1a\u5355\u4e2a\u6587\u4ef6\u5927\u5c0f\u9650\u5236\uff0c\u5982\u679c\u7ed3\u679c\u8d85\u8fc7\u8fd9\u4e2a\u503c\uff0c\u5c06\u5207\u5272\u6210\u591a\u4e2a\u6587\u4ef6\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"max_file_size"),"\u53d6\u503c\u8303\u56f4\u662f","[5MB, 2GB]",", \u9ed8\u8ba4\u4e3a1GB\u3002\uff08\u5f53\u6307\u5b9a\u5bfc\u51fa\u4e3aorc\u6587\u4ef6\u683c\u5f0f\u65f6\uff0c\u5b9e\u9645\u5207\u5206\u6587\u4ef6\u7684\u5927\u5c0f\u5c06\u662f64MB\u7684\u500d\u6570\uff0c\u5982\uff1a\u6307\u5b9amax_file_size = 5MB, \u5b9e\u9645\u5c06\u4ee564MB\u4e3a\u5207\u5206\uff1b\u6307\u5b9amax_file_size = 65MB, \u5b9e\u9645\u5c06\u4ee5128MB\u4e3a\u5207\u5206\uff09")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"parallelism"),"\uff1a\u5bfc\u51fa\u4f5c\u4e1a\u7684\u5e76\u53d1\u5ea6\uff0c\u9ed8\u8ba4\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"1"),"\uff0c\u5bfc\u51fa\u4f5c\u4e1a\u4f1a\u5f00\u542f",(0,l.kt)("inlineCode",{parentName:"p"},"parallelism"),"\u4e2a\u6570\u7684\u7ebf\u7a0b\u53bb\u6267\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"select into outfile"),"\u8bed\u53e5\u3002\uff08\u5982\u679cparallelism\u4e2a\u6570\u5927\u4e8e\u8868\u7684tablets\u4e2a\u6570\uff0c\u7cfb\u7edf\u5c06\u81ea\u52a8\u628aparallelism\u8bbe\u7f6e\u4e3atablets\u4e2a\u6570\u5927\u5c0f\uff0c\u5373\u6bcf\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"select into outfile"),"\u8bed\u53e5\u8d1f\u8d23\u4e00\u4e2atablets\uff09")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"delete_existing_files"),": \u9ed8\u8ba4\u4e3afalse\uff0c\u82e5\u6307\u5b9a\u4e3atrue,\u5219\u4f1a\u5148\u5220\u9664",(0,l.kt)("inlineCode",{parentName:"p"},"export_path"),'\u6240\u6307\u5b9a\u76ee\u5f55\u4e0b\u7684\u6240\u6709\u6587\u4ef6\uff0c\u7136\u540e\u5bfc\u51fa\u6570\u636e\u5230\u8be5\u76ee\u5f55\u4e0b\u3002\u4f8b\u5982\uff1a"export_path" = "/user/tmp", \u5219\u4f1a\u5220\u9664"/user/"\u4e0b\u6240\u6709\u6587\u4ef6\u53ca\u76ee\u5f55\uff1b"file_path" = "/user/tmp/", \u5219\u4f1a\u5220\u9664"/user/tmp/"\u4e0b\u6240\u6709\u6587\u4ef6\u53ca\u76ee\u5f55\u3002')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"timeout"),"\uff1a\u5bfc\u51fa\u4f5c\u4e1a\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u9ed8\u8ba4\u4e3a2\u5c0f\u65f6\uff0c\u5355\u4f4d\u662f\u79d2\u3002"))),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u8981\u4f7f\u7528delete_existing_files\u53c2\u6570\uff0c\u8fd8\u9700\u8981\u5728fe.conf\u4e2d\u6dfb\u52a0\u914d\u7f6e",(0,l.kt)("inlineCode",{parentName:"p"},"enable_delete_existing_files = true"),"\u5e76\u91cd\u542ffe\uff0c\u6b64\u65f6delete_existing_files\u624d\u4f1a\u751f\u6548\u3002delete_existing_files = true \u662f\u4e00\u4e2a\u5371\u9669\u7684\u64cd\u4f5c\uff0c\u5efa\u8bae\u53ea\u5728\u6d4b\u8bd5\u73af\u5883\u4e2d\u4f7f\u7528\u3002")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"WITH BROKER")),(0,l.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u901a\u8fc7 Broker \u8fdb\u7a0b\u5199\u6570\u636e\u5230\u8fdc\u7aef\u5b58\u50a8\u4e0a\u3002\u8fd9\u91cc\u9700\u8981\u5b9a\u4e49\u76f8\u5173\u7684\u8fde\u63a5\u4fe1\u606f\u4f9b Broker \u4f7f\u7528\u3002"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'\u8bed\u6cd5\uff1a\nWITH BROKER "broker_name"\n("key"="value"[,...])\n\nBroker\u76f8\u5173\u5c5e\u6027\uff1a\n  username: \u7528\u6237\u540d\n  password: \u5bc6\u7801\n  hadoop.security.authentication: \u6307\u5b9a\u8ba4\u8bc1\u65b9\u5f0f\u4e3a kerberos\n  kerberos_principal: \u6307\u5b9a kerberos \u7684 principal\n  kerberos_keytab: \u6307\u5b9a kerberos \u7684 keytab \u6587\u4ef6\u8def\u5f84\u3002\u8be5\u6587\u4ef6\u5fc5\u987b\u4e3a Broker \u8fdb\u7a0b\u6240\u5728\u670d\u52a1\u5668\u4e0a\u7684\u6587\u4ef6\u7684\u7edd\u5bf9\u8def\u5f84\u3002\u5e76\u4e14\u53ef\u4ee5\u88ab Broker \u8fdb\u7a0b\u8bbf\u95ee\n')))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"WITH HDFS")),(0,l.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u76f4\u63a5\u5c06\u6570\u636e\u5199\u5230\u8fdc\u7aefHDFS\u4e0a\u3002"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'\u8bed\u6cd5\uff1a\nWITH HDFS ("key"="value"[,...])\n\nHDFS \u76f8\u5173\u5c5e\u6027:\n  fs.defaultFS: namenode \u5730\u5740\u548c\u7aef\u53e3\n  hadoop.username: hdfs \u7528\u6237\u540d\n  dfs.nameservices: name service\u540d\u79f0\uff0c\u4e0ehdfs-site.xml\u4fdd\u6301\u4e00\u81f4\n  dfs.ha.namenodes.[nameservice ID]: namenode\u7684id\u5217\u8868,\u4e0ehdfs-site.xml\u4fdd\u6301\u4e00\u81f4\n  dfs.namenode.rpc-address.[nameservice ID].[name node ID]: Name node\u7684rpc\u5730\u5740\uff0c\u6570\u91cf\u4e0enamenode\u6570\u91cf\u76f8\u540c\uff0c\u4e0ehdfs-site.xml\u4fdd\n\n  \u5bf9\u4e8e\u5f00\u542fkerberos\u8ba4\u8bc1\u7684Hadoop \u96c6\u7fa4\uff0c\u8fd8\u9700\u8981\u989d\u5916\u8bbe\u7f6e\u5982\u4e0b PROPERTIES \u5c5e\u6027:\n  dfs.namenode.kerberos.principal: HDFS namenode \u670d\u52a1\u7684 principal \u540d\u79f0\n  hadoop.security.authentication: \u8ba4\u8bc1\u65b9\u5f0f\u8bbe\u7f6e\u4e3a kerberos\n  hadoop.kerberos.principal: \u8bbe\u7f6e Doris \u8fde\u63a5 HDFS \u65f6\u4f7f\u7528\u7684 Kerberos \u4e3b\u4f53\n  hadoop.kerberos.keytab: \u8bbe\u7f6e keytab \u672c\u5730\u6587\u4ef6\u8def\u5f84\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"WITH S3")),(0,l.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u76f4\u63a5\u5c06\u6570\u636e\u5199\u5230\u8fdc\u7aefS3\u5bf9\u8c61\u5b58\u50a8\u4e0a\u3002"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'\u8bed\u6cd5\uff1a\nWITH S3 ("key"="value"[,...])\n\nS3 \u76f8\u5173\u5c5e\u6027:\n  AWS_ENDPOINT\n  AWS_ACCESS_KEY\n  AWS_SECRET_KEY\n  AWS_REGION\n  use_path_stype: (\u9009\u586b) \u9ed8\u8ba4\u4e3afalse \u3002S3 SDK \u9ed8\u8ba4\u4f7f\u7528 virtual-hosted style \u65b9\u5f0f\u3002\u4f46\u67d0\u4e9b\u5bf9\u8c61\u5b58\u50a8\u7cfb\u7edf\u53ef\u80fd\u6ca1\u5f00\u542f\u6216\u4e0d\u652f\u6301virtual-hosted style \u65b9\u5f0f\u7684\u8bbf\u95ee\uff0c\u6b64\u65f6\u53ef\u4ee5\u6dfb\u52a0 use_path_style \u53c2\u6570\u6765\u5f3a\u5236\u4f7f\u7528 path style \u8bbf\u95ee\u65b9\u5f0f\u3002\n')))),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("h4",{id:"export\u6570\u636e\u5230\u672c\u5730"},"export\u6570\u636e\u5230\u672c\u5730"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"export\u6570\u636e\u5230\u672c\u5730\u6587\u4ef6\u7cfb\u7edf\uff0c\u9700\u8981\u5728fe.conf\u4e2d\u6dfb\u52a0",(0,l.kt)("inlineCode",{parentName:"p"},"enable_outfile_to_local=true"),"\u5e76\u4e14\u91cd\u542fFE\u3002")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5c06test\u8868\u4e2d\u7684\u6240\u6709\u6570\u636e\u5bfc\u51fa\u5230\u672c\u5730\u5b58\u50a8, \u9ed8\u8ba4\u5bfc\u51facsv\u683c\u5f0f\u6587\u4ef6")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'EXPORT TABLE test TO "file:///home/user/tmp/";\n')),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u5c06test\u8868\u4e2d\u7684k1,k2\u5217\u5bfc\u51fa\u5230\u672c\u5730\u5b58\u50a8, \u9ed8\u8ba4\u5bfc\u51facsv\u6587\u4ef6\u683c\u5f0f\uff0c\u5e76\u8bbe\u7f6elabel")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'EXPORT TABLE test TO "file:///home/user/tmp/"\nPROPERTIES (\n  "label" = "label1",\n  "columns" = "k1,k2"\n);\n')),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u5c06test\u8868\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"k1 < 50")," \u7684\u884c\u5bfc\u51fa\u5230\u672c\u5730\u5b58\u50a8, \u9ed8\u8ba4\u5bfc\u51facsv\u683c\u5f0f\u6587\u4ef6\uff0c\u5e76\u4ee5",(0,l.kt)("inlineCode",{parentName:"li"},","),"\u4f5c\u4e3a\u5217\u5206\u5272\u7b26")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'EXPORT TABLE test WHERE k1 < 50 TO "file:///home/user/tmp/"\nPROPERTIES (\n  "columns" = "k1,k2",\n  "column_separator"=","\n);\n')),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"\u5c06 test \u8868\u4e2d\u7684\u5206\u533ap1,p2\u5bfc\u51fa\u5230\u672c\u5730\u5b58\u50a8, \u9ed8\u8ba4\u5bfc\u51facsv\u683c\u5f0f\u6587\u4ef6")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'EXPORT TABLE test PARTITION (p1,p2) TO "file:///home/user/tmp/" \nPROPERTIES ("columns" = "k1,k2");\n')),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"\u5c06test\u8868\u4e2d\u7684\u6240\u6709\u6570\u636e\u5bfc\u51fa\u5230\u672c\u5730\u5b58\u50a8,\u5bfc\u51fa\u5176\u4ed6\u683c\u5f0f\u7684\u6587\u4ef6")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'// parquet\u683c\u5f0f\nEXPORT TABLE test TO "file:///home/user/tmp/"\nPROPERTIES (\n  "columns" = "k1,k2",\n  "format" = "parquet"\n);\n\n// orc\u683c\u5f0f\nEXPORT TABLE test TO "file:///home/user/tmp/"\nPROPERTIES (\n  "columns" = "k1,k2",\n  "format" = "orc"\n);\n\n// csv_with_names\u683c\u5f0f, \u4ee5\u2019AA\u2018\u4e3a\u5217\u5206\u5272\u7b26\uff0c\u2018zz\u2019\u4e3a\u884c\u5206\u5272\u7b26\nEXPORT TABLE test TO "file:///home/user/tmp/"\nPROPERTIES (\n  "format" = "csv_with_names",\n  "column_separator"="AA",\n  "line_delimiter" = "zz"\n);\n\n// csv_with_names_and_types\u683c\u5f0f\nEXPORT TABLE test TO "file:///home/user/tmp/"\nPROPERTIES (\n  "format" = "csv_with_names_and_types"\n);\n')),(0,l.kt)("ol",{start:6},(0,l.kt)("li",{parentName:"ol"},"\u8bbe\u7f6emax_file_sizes\u5c5e\u6027")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'EXPORT TABLE test TO "file:///home/user/tmp/"\nPROPERTIES (\n  "format" = "parquet",\n  "max_file_size" = "5MB"\n);\n')),(0,l.kt)("p",null,"\u5f53\u5bfc\u51fa\u6587\u4ef6\u5927\u4e8e5MB\u65f6\uff0c\u5c06\u5207\u5272\u6570\u636e\u4e3a\u591a\u4e2a\u6587\u4ef6\uff0c\u6bcf\u4e2a\u6587\u4ef6\u6700\u5927\u4e3a5MB\u3002"),(0,l.kt)("ol",{start:7},(0,l.kt)("li",{parentName:"ol"},"\u8bbe\u7f6eparallelism\u5c5e\u6027")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'EXPORT TABLE test TO "file:///home/user/tmp/"\nPROPERTIES (\n  "format" = "parquet",\n  "max_file_size" = "5MB",\n  "parallelism" = "5"\n);\n')),(0,l.kt)("ol",{start:8},(0,l.kt)("li",{parentName:"ol"},"\u8bbe\u7f6edelete_existing_files\u5c5e\u6027")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'EXPORT TABLE test TO "file:///home/user/tmp"\nPROPERTIES (\n  "format" = "parquet",\n  "max_file_size" = "5MB",\n  "delete_existing_files" = "true"\n);\n')),(0,l.kt)("p",null,"Export\u5bfc\u51fa\u6570\u636e\u65f6\u4f1a\u5148\u5c06",(0,l.kt)("inlineCode",{parentName:"p"},"/home/user/"),"\u76ee\u5f55\u4e0b\u6240\u6709\u6587\u4ef6\u53ca\u76ee\u5f55\u5220\u9664\uff0c\u7136\u540e\u5bfc\u51fa\u6570\u636e\u5230\u8be5\u76ee\u5f55\u4e0b\u3002"),(0,l.kt)("h4",{id:"export-with-s3"},"export with S3"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},'\u5c06 s3_test \u8868\u4e2d\u7684\u6240\u6709\u6570\u636e\u5bfc\u51fa\u5230 s3 \u4e0a\uff0c\u4ee5\u4e0d\u53ef\u89c1\u5b57\u7b26 "\\x07" \u4f5c\u4e3a\u5217\u6216\u8005\u884c\u5206\u9694\u7b26\u3002\u5982\u679c\u9700\u8981\u5c06\u6570\u636e\u5bfc\u51fa\u5230minio\uff0c\u8fd8\u9700\u8981\u6307\u5b9ause_path_style=true\u3002')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'EXPORT TABLE s3_test TO "s3://bucket/a/b/c" \nPROPERTIES (\n  "column_separator"="\\\\x07", \n  "line_delimiter" = "\\\\x07"\n) WITH s3 (\n  "s3.endpoint" = "xxxxx",\n  "s3.region" = "xxxxx",\n  "s3.secret_key"="xxxx",\n  "s3.access_key" = "xxxxx"\n)\n')),(0,l.kt)("h4",{id:"export-with-hdfs"},"export with HDFS"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5c06 test \u8868\u4e2d\u7684\u6240\u6709\u6570\u636e\u5bfc\u51fa\u5230 HDFS \u4e0a\uff0c\u5bfc\u51fa\u6587\u4ef6\u683c\u5f0f\u4e3aparquet\uff0c\u5bfc\u51fa\u4f5c\u4e1a\u5355\u4e2a\u6587\u4ef6\u5927\u5c0f\u9650\u5236\u4e3a512MB\uff0c\u4fdd\u7559\u6240\u6307\u5b9a\u76ee\u5f55\u4e0b\u7684\u6240\u6709\u6587\u4ef6\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'EXPORT TABLE test TO "hdfs://hdfs_host:port/a/b/c/" \nPROPERTIES(\n    "format" = "parquet",\n    "max_file_size" = "512MB",\n    "delete_existing_files" = "false"\n)\nwith HDFS (\n"fs.defaultFS"="hdfs://hdfs_host:port",\n"hadoop.username" = "hadoop"\n);\n')),(0,l.kt)("h4",{id:"export-with-broker"},"export with Broker"),(0,l.kt)("p",null,"\u9700\u8981\u5148\u542f\u52a8broker\u8fdb\u7a0b\uff0c\u5e76\u5728FE\u4e2d\u6dfb\u52a0\u8be5broker\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5c06 test \u8868\u4e2d\u7684\u6240\u6709\u6570\u636e\u5bfc\u51fa\u5230 hdfs \u4e0a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'EXPORT TABLE test TO "hdfs://hdfs_host:port/a/b/c" \nWITH BROKER "broker_name" \n(\n  "username"="xxx",\n  "password"="yyy"\n);\n')),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},'\u5c06 testTbl \u8868\u4e2d\u7684\u5206\u533ap1,p2\u5bfc\u51fa\u5230 hdfs \u4e0a\uff0c\u4ee5","\u4f5c\u4e3a\u5217\u5206\u9694\u7b26\uff0c\u5e76\u6307\u5b9alabel')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'EXPORT TABLE testTbl PARTITION (p1,p2) TO "hdfs://hdfs_host:port/a/b/c" \nPROPERTIES (\n  "label" = "mylabel",\n  "column_separator"=","\n) \nWITH BROKER "broker_name" \n(\n  "username"="xxx",\n  "password"="yyy"\n);\n')),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},'\u5c06 testTbl \u8868\u4e2d\u7684\u6240\u6709\u6570\u636e\u5bfc\u51fa\u5230 hdfs \u4e0a\uff0c\u4ee5\u4e0d\u53ef\u89c1\u5b57\u7b26 "\\x07" \u4f5c\u4e3a\u5217\u6216\u8005\u884c\u5206\u9694\u7b26\u3002')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'EXPORT TABLE testTbl TO "hdfs://hdfs_host:port/a/b/c" \nPROPERTIES (\n  "column_separator"="\\\\x07", \n  "line_delimiter" = "\\\\x07"\n) \nWITH BROKER "broker_name" \n(\n  "username"="xxx", \n  "password"="yyy"\n)\n')),(0,l.kt)("h3",{id:"keywords"},"Keywords"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"EXPORT\n")),(0,l.kt)("h3",{id:"best-practice"},"Best Practice"),(0,l.kt)("h4",{id:"\u5e76\u53d1\u6267\u884c"},"\u5e76\u53d1\u6267\u884c"),(0,l.kt)("p",null,"\u4e00\u4e2a Export \u4f5c\u4e1a\u53ef\u4ee5\u8bbe\u7f6e",(0,l.kt)("inlineCode",{parentName:"p"},"parallelism"),"\u53c2\u6570\u6765\u5e76\u53d1\u5bfc\u51fa\u6570\u636e\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"parallelism"),"\u53c2\u6570\u5b9e\u9645\u5c31\u662f\u6307\u5b9a\u6267\u884c EXPORT \u4f5c\u4e1a\u7684\u7ebf\u7a0b\u6570\u91cf\u3002\u6bcf\u4e00\u4e2a\u7ebf\u7a0b\u4f1a\u8d1f\u8d23\u5bfc\u51fa\u8868\u7684\u90e8\u5206Tablets\u3002"),(0,l.kt)("p",null,"\u4e00\u4e2a Export \u4f5c\u4e1a\u7684\u5e95\u5c42\u6267\u884c\u903b\u8f91\u5b9e\u9645\u4e0a\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT INTO OUTFILE"),"\u8bed\u53e5\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"parallelism"),"\u53c2\u6570\u8bbe\u7f6e\u7684\u6bcf\u4e00\u4e2a\u7ebf\u7a0b\u90fd\u4f1a\u53bb\u6267\u884c\u72ec\u7acb\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT INTO OUTFILE"),"\u8bed\u53e5\u3002"),(0,l.kt)("p",null,"Export \u4f5c\u4e1a\u62c6\u5206\u6210\u591a\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT INTO OUTFILE"),"\u7684\u5177\u4f53\u903b\u8f91\u662f\uff1a\u5c06\u8be5\u8868\u7684\u6240\u6709tablets\u5e73\u5747\u7684\u5206\u7ed9\u6240\u6709parallel\u7ebf\u7a0b\uff0c\u5982\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"num(tablets) = 40, parallelism = 3\uff0c\u5219\u8fd93\u4e2a\u7ebf\u7a0b\u5404\u81ea\u8d1f\u8d23\u7684tablets\u6570\u91cf\u5206\u522b\u4e3a 14\uff0c13\uff0c13\u4e2a\u3002"),(0,l.kt)("li",{parentName:"ul"},"num(tablets) = 2, parallelism = 3\uff0c\u5219Doris\u4f1a\u81ea\u52a8\u5c06parallelism\u8bbe\u7f6e\u4e3a2\uff0c\u6bcf\u4e00\u4e2a\u7ebf\u7a0b\u8d1f\u8d23\u4e00\u4e2atablets\u3002")),(0,l.kt)("p",null,"\u5f53\u4e00\u4e2a\u7ebf\u7a0b\u8d1f\u8d23\u7684tablest\u8d85\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"maximum_tablets_of_outfile_in_export")," \u6570\u503c\uff08\u9ed8\u8ba4\u4e3a10\uff0c\u53ef\u5728fe.conf\u4e2d\u6dfb\u52a0",(0,l.kt)("inlineCode",{parentName:"p"},"maximum_tablets_of_outfile_in_export"),"\u53c2\u6570\u6765\u4fee\u6539\u8be5\u503c\uff09\u65f6\uff0c\u8be5\u7ebf\u7a0b\u5c31\u4f1a\u62c6\u5206\u4e3a\u591a\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT INTO OUTFILE"),"\u8bed\u53e5\uff0c\u5982\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u7ebf\u7a0b\u8d1f\u8d23\u7684tablets\u6570\u91cf\u5206\u522b\u4e3a 14\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"maximum_tablets_of_outfile_in_export = 10"),"\uff0c\u5219\u8be5\u7ebf\u7a0b\u8d1f\u8d23\u4e24\u4e2a",(0,l.kt)("inlineCode",{parentName:"li"},"SELECT INTO OUTFILE"),"\u8bed\u53e5\uff0c\u7b2c\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"li"},"SELECT INTO OUTFILE"),"\u8bed\u53e5\u5bfc\u51fa10\u4e2atablets\uff0c\u7b2c\u4e8c\u4e2a",(0,l.kt)("inlineCode",{parentName:"li"},"SELECT INTO OUTFILE"),"\u8bed\u53e5\u5bfc\u51fa4\u4e2atablets\uff0c\u4e24\u4e2a",(0,l.kt)("inlineCode",{parentName:"li"},"SELECT INTO OUTFILE"),"\u8bed\u53e5\u7531\u8be5\u7ebf\u7a0b\u4e32\u884c\u6267\u884c\u3002")),(0,l.kt)("p",null,"\u5f53\u6240\u8981\u5bfc\u51fa\u7684\u6570\u636e\u91cf\u5f88\u5927\u65f6\uff0c\u53ef\u4ee5\u8003\u8651\u9002\u5f53\u8c03\u5927",(0,l.kt)("inlineCode",{parentName:"p"},"parallelism"),"\u53c2\u6570\u6765\u589e\u52a0\u5e76\u53d1\u5bfc\u51fa\u3002\u82e5\u673a\u5668\u6838\u6570\u7d27\u5f20\uff0c\u65e0\u6cd5\u518d\u589e\u52a0",(0,l.kt)("inlineCode",{parentName:"p"},"parallelism")," \u800c\u5bfc\u51fa\u8868\u7684Tablets\u53c8\u8f83\u591a \u65f6\uff0c\u53ef\u4ee5\u8003\u8651\u8c03\u5927",(0,l.kt)("inlineCode",{parentName:"p"},"maximum_tablets_of_outfile_in_export"),"\u6765\u589e\u52a0\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT INTO OUTFILE"),"\u8bed\u53e5\u8d1f\u8d23\u7684tablets\u6570\u91cf\uff0c\u4e5f\u53ef\u4ee5\u52a0\u5feb\u5bfc\u51fa\u901f\u5ea6\u3002"),(0,l.kt)("h4",{id:"\u5185\u5b58\u9650\u5236"},"\u5185\u5b58\u9650\u5236"),(0,l.kt)("p",null,"\u901a\u5e38\u4e00\u4e2a Export \u4f5c\u4e1a\u7684\u67e5\u8be2\u8ba1\u5212\u53ea\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"\u626b\u63cf-\u5bfc\u51fa")," \u4e24\u90e8\u5206\uff0c\u4e0d\u6d89\u53ca\u9700\u8981\u592a\u591a\u5185\u5b58\u7684\u8ba1\u7b97\u903b\u8f91\u3002\u6240\u4ee5\u901a\u5e38 2GB \u7684\u9ed8\u8ba4\u5185\u5b58\u9650\u5236\u53ef\u4ee5\u6ee1\u8db3\u9700\u6c42\u3002"),(0,l.kt)("p",null,"\u4f46\u5728\u67d0\u4e9b\u573a\u666f\u4e0b\uff0c\u6bd4\u5982\u4e00\u4e2a\u67e5\u8be2\u8ba1\u5212\uff0c\u5728\u540c\u4e00\u4e2a BE \u4e0a\u9700\u8981\u626b\u63cf\u7684 Tablet \u8fc7\u591a\uff0c\u6216\u8005 Tablet \u7684\u6570\u636e\u7248\u672c\u8fc7\u591a\u65f6\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u5185\u5b58\u4e0d\u8db3\u3002\u53ef\u4ee5\u8c03\u6574session\u53d8\u91cf",(0,l.kt)("inlineCode",{parentName:"p"},"exec_mem_limit"),"\u6765\u8c03\u5927\u5185\u5b58\u4f7f\u7528\u9650\u5236\u3002"),(0,l.kt)("h4",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4e0d\u5efa\u8bae\u4e00\u6b21\u6027\u5bfc\u51fa\u5927\u91cf\u6570\u636e\u3002\u4e00\u4e2a Export \u4f5c\u4e1a\u5efa\u8bae\u7684\u5bfc\u51fa\u6570\u636e\u91cf\u6700\u5927\u5728\u51e0\u5341 GB\u3002\u8fc7\u5927\u7684\u5bfc\u51fa\u4f1a\u5bfc\u81f4\u66f4\u591a\u7684\u5783\u573e\u6587\u4ef6\u548c\u66f4\u9ad8\u7684\u91cd\u8bd5\u6210\u672c\u3002\u5982\u679c\u8868\u6570\u636e\u91cf\u8fc7\u5927\uff0c\u5efa\u8bae\u6309\u7167\u5206\u533a\u5bfc\u51fa\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5982\u679c Export \u4f5c\u4e1a\u8fd0\u884c\u5931\u8d25\uff0c\u5df2\u7ecf\u751f\u6210\u7684\u6587\u4ef6\u4e0d\u4f1a\u88ab\u5220\u9664\uff0c\u9700\u8981\u7528\u6237\u624b\u52a8\u5220\u9664\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Export \u4f5c\u4e1a\u4f1a\u626b\u63cf\u6570\u636e\uff0c\u5360\u7528 IO \u8d44\u6e90\uff0c\u53ef\u80fd\u4f1a\u5f71\u54cd\u7cfb\u7edf\u7684\u67e5\u8be2\u5ef6\u8fdf\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u76ee\u524d\u5728export\u65f6\u53ea\u662f\u7b80\u5355\u68c0\u67e5tablets\u7248\u672c\u662f\u5426\u4e00\u81f4\uff0c\u5efa\u8bae\u5728\u6267\u884cexport\u8fc7\u7a0b\u4e2d\u4e0d\u8981\u5bf9\u8be5\u8868\u8fdb\u884c\u5bfc\u5165\u6570\u636e\u64cd\u4f5c\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4e00\u4e2aExport Job\u5141\u8bb8\u5bfc\u51fa\u7684\u5206\u533a\u6570\u91cf\u6700\u5927\u4e3a2000\uff0c\u53ef\u4ee5\u5728fe.conf\u4e2d\u6dfb\u52a0\u53c2\u6570",(0,l.kt)("inlineCode",{parentName:"p"},"maximum_number_of_export_partitions"),"\u5e76\u91cd\u542fFE\u6765\u4fee\u6539\u8be5\u8bbe\u7f6e\u3002"))))}u.isMDXComponent=!0}}]);