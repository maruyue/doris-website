"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[70405],{3905:(e,r,n)=>{n.d(r,{Zo:()=>d,kt:()=>u});var a=n(67294);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,a,t=function(e,r){if(null==e)return{};var n,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var s=a.createContext({}),i=function(e){var r=a.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},d=function(e){var r=i(e.components);return a.createElement(s.Provider,{value:r},e.children)},k="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},c=a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),k=i(n),c=t,u=k["".concat(s,".").concat(c)]||k[c]||m[c]||o;return n?a.createElement(u,l(l({ref:r},d),{},{components:n})):a.createElement(u,l({ref:r},d))}));function u(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,l=new Array(o);l[0]=c;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p[k]="string"==typeof e?e:t,l[1]=p;for(var i=2;i<o;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},27486:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var a=n(87462),t=(n(67294),n(3905));const o={title:"Broker",language:"zh-CN"},l=void 0,p={unversionedId:"advanced/broker",id:"version-2.0/advanced/broker",title:"Broker",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/advanced/broker.md",sourceDirName:"advanced",slug:"/advanced/broker",permalink:"/zh-CN/docs/advanced/broker",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Broker",language:"zh-CN"},sidebar:"docs",previous:{title:"\u81ea\u52a8\u5206\u6876",permalink:"/zh-CN/docs/advanced/autobucket"},next:{title:"\u67e5\u8be2\u5206\u6790",permalink:"/zh-CN/docs/advanced/best-practice/query-analysis"}},s={},i=[{value:"\u652f\u6301\u7684\u5b58\u50a8\u7cfb\u7edf",id:"\u652f\u6301\u7684\u5b58\u50a8\u7cfb\u7edf",level:2},{value:"Broker \u4fe1\u606f",id:"broker-\u4fe1\u606f",level:2},{value:"\u540d\u79f0",id:"\u540d\u79f0",level:3},{value:"\u8ba4\u8bc1\u4fe1\u606f",id:"\u8ba4\u8bc1\u4fe1\u606f",level:3},{value:"Apache HDFS",id:"apache-hdfs",level:4},{value:"\u817e\u8baf\u4e91 CHDFS",id:"\u817e\u8baf\u4e91-chdfs",level:4},{value:"\u963f\u91cc\u4e91 OSS",id:"\u963f\u91cc\u4e91-oss",level:4},{value:"\u767e\u5ea6\u4e91 BOS",id:"\u767e\u5ea6\u4e91-bos",level:4},{value:"\u534e\u4e3a\u4e91 OBS",id:"\u534e\u4e3a\u4e91-obs",level:4},{value:"\u4e9a\u9a6c\u900a S3",id:"\u4e9a\u9a6c\u900a-s3",level:4},{value:"JuiceFS",id:"juicefs",level:4},{value:"GCS",id:"gcs",level:4}],d={toc:i},k="wrapper";function m(e){let{components:r,...n}=e;return(0,t.kt)(k,(0,a.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"broker"},"Broker"),(0,t.kt)("p",null,"Broker \u662f Doris \u96c6\u7fa4\u4e2d\u4e00\u79cd\u53ef\u9009\u8fdb\u7a0b\uff0c\u4e3b\u8981\u7528\u4e8e\u652f\u6301 Doris \u8bfb\u5199\u8fdc\u7aef\u5b58\u50a8\u4e0a\u7684\u6587\u4ef6\u548c\u76ee\u5f55\u3002\u76ee\u524d\u652f\u6301\u4ee5\u4e0b\u8fdc\u7aef\u5b58\u50a8\uff1a"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Apache HDFS"),(0,t.kt)("li",{parentName:"ul"},"\u963f\u91cc\u4e91 OSS"),(0,t.kt)("li",{parentName:"ul"},"\u767e\u5ea6\u4e91 BOS"),(0,t.kt)("li",{parentName:"ul"},"\u817e\u8baf\u4e91 CHDFS"),(0,t.kt)("li",{parentName:"ul"},"\u817e\u8baf\u4e91 GFS (1.2.0 \u7248\u672c\u652f\u6301)"),(0,t.kt)("li",{parentName:"ul"},"\u534e\u4e3a\u4e91 OBS (1.2.0 \u7248\u672c\u540e\u652f\u6301)"),(0,t.kt)("li",{parentName:"ul"},"\u4e9a\u9a6c\u900a S3"),(0,t.kt)("li",{parentName:"ul"},"JuiceFS (2.0.0 \u7248\u672c\u652f\u6301)"),(0,t.kt)("li",{parentName:"ul"},"GCS (2.0.0 \u7248\u672c\u652f\u6301)")),(0,t.kt)("p",null,"Broker \u901a\u8fc7\u63d0\u4f9b\u4e00\u4e2a RPC \u670d\u52a1\u7aef\u53e3\u6765\u63d0\u4f9b\u670d\u52a1\uff0c\u662f\u4e00\u4e2a\u65e0\u72b6\u6001\u7684 Java \u8fdb\u7a0b\uff0c\u8d1f\u8d23\u4e3a\u8fdc\u7aef\u5b58\u50a8\u7684\u8bfb\u5199\u64cd\u4f5c\u5c01\u88c5\u4e00\u4e9b\u7c7b POSIX \u7684\u6587\u4ef6\u64cd\u4f5c\uff0c\u5982 open\uff0cpread\uff0cpwrite \u7b49\u7b49\u3002\u9664\u6b64\u4e4b\u5916\uff0cBroker \u4e0d\u8bb0\u5f55\u4efb\u4f55\u5176\u4ed6\u4fe1\u606f\uff0c\u6240\u4ee5\u5305\u62ec\u8fdc\u7aef\u5b58\u50a8\u7684\u8fde\u63a5\u4fe1\u606f\u3001\u6587\u4ef6\u4fe1\u606f\u3001\u6743\u9650\u4fe1\u606f\u7b49\u7b49\uff0c\u90fd\u9700\u8981\u901a\u8fc7\u53c2\u6570\u5728 RPC \u8c03\u7528\u4e2d\u4f20\u9012\u7ed9 Broker \u8fdb\u7a0b\uff0c\u624d\u80fd\u4f7f\u5f97 Broker \u80fd\u591f\u6b63\u786e\u8bfb\u5199\u6587\u4ef6\u3002"),(0,t.kt)("p",null,"Broker \u4ec5\u4f5c\u4e3a\u4e00\u4e2a\u6570\u636e\u901a\u8def\uff0c\u5e76\u4e0d\u53c2\u4e0e\u4efb\u4f55\u8ba1\u7b97\uff0c\u56e0\u6b64\u4ec5\u9700\u5360\u7528\u8f83\u5c11\u7684\u5185\u5b58\u3002\u901a\u5e38\u4e00\u4e2a Doris \u7cfb\u7edf\u4e2d\u4f1a\u90e8\u7f72\u4e00\u4e2a\u6216\u591a\u4e2a Broker \u8fdb\u7a0b\u3002\u5e76\u4e14\u76f8\u540c\u7c7b\u578b\u7684 Broker \u4f1a\u7ec4\u6210\u4e00\u4e2a\u7ec4\uff0c\u5e76\u8bbe\u5b9a\u4e00\u4e2a ",(0,t.kt)("strong",{parentName:"p"},"\u540d\u79f0\uff08Broker name\uff09"),"\u3002"),(0,t.kt)("p",null,"Broker \u5728 Doris \u7cfb\u7edf\u67b6\u6784\u4e2d\u7684\u4f4d\u7f6e\u5982\u4e0b\uff1a"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-text"},"+----+   +----+\n| FE |   | BE |\n+-^--+   +--^-+\n  |         |\n  |         |\n+-v---------v-+\n|   Broker    |\n+------^------+\n       |\n       |\n+------v------+\n|HDFS/BOS/AFS |\n+-------------+\n")),(0,t.kt)("p",null,"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd Broker \u5728\u8bbf\u95ee\u4e0d\u540c\u8fdc\u7aef\u5b58\u50a8\u65f6\u9700\u8981\u7684\u53c2\u6570\uff0c\u5982\u8fde\u63a5\u4fe1\u606f\u3001\u6743\u9650\u8ba4\u8bc1\u4fe1\u606f\u7b49\u7b49\u3002"),(0,t.kt)("h2",{id:"\u652f\u6301\u7684\u5b58\u50a8\u7cfb\u7edf"},"\u652f\u6301\u7684\u5b58\u50a8\u7cfb\u7edf"),(0,t.kt)("p",null,"\u4e0d\u540c\u7684 Broker \u7c7b\u578b\u652f\u6301\u4e0d\u540c\u7684\u5b58\u50a8\u7cfb\u7edf\u3002"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"\u793e\u533a\u7248 HDFS"),(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},"\u652f\u6301\u7b80\u5355\u8ba4\u8bc1\u8bbf\u95ee"),(0,t.kt)("li",{parentName:"ul"},"\u652f\u6301\u901a\u8fc7 kerberos \u8ba4\u8bc1\u8bbf\u95ee"),(0,t.kt)("li",{parentName:"ul"},"\u652f\u6301 HDFS HA \u6a21\u5f0f\u8bbf\u95ee"))),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"\u5bf9\u8c61\u5b58\u50a8"),(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},"\u6240\u6709\u652f\u6301S3\u534f\u8bae\u7684\u5bf9\u8c61\u5b58\u50a8"))),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("a",{parentName:"p",href:"/zh-CN/docs/data-operate/import/import-way/broker-load-manual"},"Broker Load"))),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("a",{parentName:"p",href:"/zh-CN/docs/data-operate/export/export-manual"},"\u6570\u636e\u5bfc\u51fa\uff08Export\uff09"))),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("a",{parentName:"p",href:"/zh-CN/docs/admin-manual/data-admin/backup"},"\u6570\u636e\u5907\u4efd")))),(0,t.kt)("h2",{id:"broker-\u4fe1\u606f"},"Broker \u4fe1\u606f"),(0,t.kt)("p",null,"Broker \u7684\u4fe1\u606f\u5305\u62ec ",(0,t.kt)("strong",{parentName:"p"},"\u540d\u79f0\uff08Broker name\uff09")," \u548c ",(0,t.kt)("strong",{parentName:"p"},"\u8ba4\u8bc1\u4fe1\u606f")," \u4e24\u90e8\u5206\u3002\u901a\u5e38\u7684\u8bed\u6cd5\u683c\u5f0f\u5982\u4e0b\uff1a"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-text"},'WITH BROKER "broker_name" \n(\n    "username" = "xxx",\n    "password" = "yyy",\n    "other_prop" = "prop_value",\n    ...\n);\n')),(0,t.kt)("h3",{id:"\u540d\u79f0"},"\u540d\u79f0"),(0,t.kt)("p",null,"\u901a\u5e38\u7528\u6237\u9700\u8981\u901a\u8fc7\u64cd\u4f5c\u547d\u4ee4\u4e2d\u7684 ",(0,t.kt)("inlineCode",{parentName:"p"},'WITH BROKER "broker_name"')," \u5b50\u53e5\u6765\u6307\u5b9a\u4e00\u4e2a\u5df2\u7ecf\u5b58\u5728\u7684 Broker Name\u3002Broker Name \u662f\u7528\u6237\u5728\u901a\u8fc7 ",(0,t.kt)("inlineCode",{parentName:"p"},"ALTER SYSTEM ADD BROKER")," \u547d\u4ee4\u6dfb\u52a0 Broker \u8fdb\u7a0b\u65f6\u6307\u5b9a\u7684\u4e00\u4e2a\u540d\u79f0\u3002\u4e00\u4e2a\u540d\u79f0\u901a\u5e38\u5bf9\u5e94\u4e00\u4e2a\u6216\u591a\u4e2a Broker \u8fdb\u7a0b\u3002Doris \u4f1a\u6839\u636e\u540d\u79f0\u9009\u62e9\u53ef\u7528\u7684 Broker \u8fdb\u7a0b\u3002\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 ",(0,t.kt)("inlineCode",{parentName:"p"},"SHOW BROKER")," \u547d\u4ee4\u67e5\u770b\u5f53\u524d\u96c6\u7fa4\u4e2d\u5df2\u7ecf\u5b58\u5728\u7684 Broker\u3002"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"\u6ce8\uff1aBroker Name \u53ea\u662f\u4e00\u4e2a\u7528\u6237\u81ea\u5b9a\u4e49\u540d\u79f0\uff0c\u4e0d\u4ee3\u8868 Broker \u7684\u7c7b\u578b\u3002")),(0,t.kt)("h3",{id:"\u8ba4\u8bc1\u4fe1\u606f"},"\u8ba4\u8bc1\u4fe1\u606f"),(0,t.kt)("p",null,"\u4e0d\u540c\u7684 Broker \u7c7b\u578b\uff0c\u4ee5\u53ca\u4e0d\u540c\u7684\u8bbf\u95ee\u65b9\u5f0f\u9700\u8981\u63d0\u4f9b\u4e0d\u540c\u7684\u8ba4\u8bc1\u4fe1\u606f\u3002\u8ba4\u8bc1\u4fe1\u606f\u901a\u5e38\u5728 ",(0,t.kt)("inlineCode",{parentName:"p"},'WITH BROKER "broker_name"')," \u4e4b\u540e\u7684 Property Map \u4e2d\u4ee5 Key-Value \u7684\u65b9\u5f0f\u63d0\u4f9b\u3002"),(0,t.kt)("h4",{id:"apache-hdfs"},"Apache HDFS"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"\u7b80\u5355\u8ba4\u8bc1"),(0,t.kt)("p",{parentName:"li"},"\u7b80\u5355\u8ba4\u8bc1\u5373 Hadoop \u914d\u7f6e ",(0,t.kt)("inlineCode",{parentName:"p"},"hadoop.security.authentication")," \u4e3a ",(0,t.kt)("inlineCode",{parentName:"p"},"simple"),"\u3002"),(0,t.kt)("p",{parentName:"li"},"\u4f7f\u7528\u7cfb\u7edf\u7528\u6237\u8bbf\u95ee HDFS\u3002\u6216\u8005\u5728 Broker \u542f\u52a8\u7684\u73af\u5883\u53d8\u91cf\u4e2d\u6dfb\u52a0\uff1a",(0,t.kt)("inlineCode",{parentName:"p"},"HADOOP_USER_NAME"),"\u3002"),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-text"},'(\n    "username" = "user",\n    "password" = ""\n);\n')),(0,t.kt)("p",{parentName:"li"},"\u5bc6\u7801\u7f6e\u7a7a\u5373\u53ef\u3002")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"Kerberos \u8ba4\u8bc1"),(0,t.kt)("p",{parentName:"li"},"\u8be5\u8ba4\u8bc1\u65b9\u5f0f\u9700\u63d0\u4f9b\u4ee5\u4e0b\u4fe1\u606f\uff1a"),(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"hadoop.security.authentication"),"\uff1a\u6307\u5b9a\u8ba4\u8bc1\u65b9\u5f0f\u4e3a kerberos\u3002"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"hadoop.kerberos.principal"),"\uff1a\u6307\u5b9a kerberos \u7684 principal\u3002"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"hadoop.kerberos.keytab"),"\uff1a\u6307\u5b9a kerberos \u7684 keytab \u6587\u4ef6\u8def\u5f84\u3002\u8be5\u6587\u4ef6\u5fc5\u987b\u4e3a Broker \u8fdb\u7a0b\u6240\u5728\u670d\u52a1\u5668\u4e0a\u7684\u6587\u4ef6\u7684\u7edd\u5bf9\u8def\u5f84\u3002\u5e76\u4e14\u53ef\u4ee5\u88ab Broker \u8fdb\u7a0b\u8bbf\u95ee\u3002"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"kerberos_keytab_content"),"\uff1a\u6307\u5b9a kerberos \u4e2d keytab \u6587\u4ef6\u5185\u5bb9\u7ecf\u8fc7 base64 \u7f16\u7801\u4e4b\u540e\u7684\u5185\u5bb9\u3002\u8fd9\u4e2a\u8ddf ",(0,t.kt)("inlineCode",{parentName:"li"},"kerberos_keytab")," \u914d\u7f6e\u4e8c\u9009\u4e00\u5373\u53ef\u3002")),(0,t.kt)("p",{parentName:"li"},"\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-text"},'(\n    "hadoop.security.authentication" = "kerberos",\n    "hadoop.kerberos.principal" = "doris@YOUR.COM",\n    "hadoop.kerberos.keytab" = "/home/doris/my.keytab"\n)\n')),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-text"},'(\n    "hadoop.security.authentication" = "kerberos",\n    "hadoop.kerberos.principal" = "doris@YOUR.COM",\n    "kerberos_keytab_content" = "ASDOWHDLAWIDJHWLDKSALDJSDIWALD"\n)\n')),(0,t.kt)("p",{parentName:"li"},"\u5982\u679c\u91c7\u7528Kerberos\u8ba4\u8bc1\u65b9\u5f0f\uff0c\u5219\u90e8\u7f72Broker\u8fdb\u7a0b\u7684\u65f6\u5019\u9700\u8981",(0,t.kt)("a",{parentName:"p",href:"https://web.mit.edu/kerberos/krb5-1.12/doc/admin/conf_files/krb5_conf.html"},"krb5.conf (opens new window)"),"\u6587\u4ef6\uff0c krb5.conf\u6587\u4ef6\u5305\u542bKerberos\u7684\u914d\u7f6e\u4fe1\u606f\uff0c\u901a\u5e38\uff0c\u60a8\u5e94\u8be5\u5c06krb5.conf\u6587\u4ef6\u5b89\u88c5\u5728\u76ee\u5f55/etc\u4e2d\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e\u73af\u5883\u53d8\u91cfKRB5_CONFIG\u8986\u76d6\u9ed8\u8ba4\u4f4d\u7f6e\u3002 krb5.conf\u6587\u4ef6\u7684\u5185\u5bb9\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-text"},"[libdefaults]\n    default_realm = DORIS.HADOOP\n    default_tkt_enctypes = des3-hmac-sha1 des-cbc-crc\n    default_tgs_enctypes = des3-hmac-sha1 des-cbc-crc\n    dns_lookup_kdc = true\n    dns_lookup_realm = false\n\n[realms]\n    DORIS.HADOOP = {\n        kdc = kerberos-doris.hadoop.service:7005\n    }\n"))),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"HDFS HA \u6a21\u5f0f"),(0,t.kt)("p",{parentName:"li"},"\u8fd9\u4e2a\u914d\u7f6e\u7528\u4e8e\u8bbf\u95ee\u4ee5 HA \u6a21\u5f0f\u90e8\u7f72\u7684 HDFS \u96c6\u7fa4\u3002"),(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"dfs.nameservices"),'\uff1a\u6307\u5b9a hdfs \u670d\u52a1\u7684\u540d\u5b57\uff0c\u81ea\u5b9a\u4e49\uff0c\u5982\uff1a"dfs.nameservices" = "my_ha"\u3002'),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"dfs.ha.namenodes.xxx"),"\uff1a\u81ea\u5b9a\u4e49 namenode \u7684\u540d\u5b57,\u591a\u4e2a\u540d\u5b57\u4ee5\u9017\u53f7\u5206\u9694\u3002\u5176\u4e2d xxx \u4e3a ",(0,t.kt)("inlineCode",{parentName:"li"},"dfs.nameservices"),' \u4e2d\u81ea\u5b9a\u4e49\u7684\u540d\u5b57\uff0c\u5982\uff1a "dfs.ha.namenodes.my_ha" = "my_nn"\u3002'),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"dfs.namenode.rpc-address.xxx.nn"),"\uff1a\u6307\u5b9a namenode \u7684rpc\u5730\u5740\u4fe1\u606f\u3002\u5176\u4e2d nn \u8868\u793a ",(0,t.kt)("inlineCode",{parentName:"li"},"dfs.ha.namenodes.xxx"),' \u4e2d\u914d\u7f6e\u7684 namenode \u7684\u540d\u5b57\uff0c\u5982\uff1a"dfs.namenode.rpc-address.my_ha.my_nn" = "host:port"\u3002'),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"dfs.client.failover.proxy.provider"),"\uff1a\u6307\u5b9a client \u8fde\u63a5 namenode \u7684 provider\uff0c\u9ed8\u8ba4\u4e3a\uff1aorg.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider\u3002")),(0,t.kt)("p",{parentName:"li"},"\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-text"},'(\n    "fs.defaultFS" = "hdfs://my_ha",\n    "dfs.nameservices" = "my_ha",\n    "dfs.ha.namenodes.my_ha" = "my_namenode1, my_namenode2",\n    "dfs.namenode.rpc-address.my_ha.my_namenode1" = "nn1_host:rpc_port",\n    "dfs.namenode.rpc-address.my_ha.my_namenode2" = "nn2_host:rpc_port",\n    "dfs.client.failover.proxy.provider" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n)\n')),(0,t.kt)("p",{parentName:"li"},"HA \u6a21\u5f0f\u53ef\u4ee5\u548c\u524d\u9762\u4e24\u79cd\u8ba4\u8bc1\u65b9\u5f0f\u7ec4\u5408\uff0c\u8fdb\u884c\u96c6\u7fa4\u8bbf\u95ee\u3002\u5982\u901a\u8fc7\u7b80\u5355\u8ba4\u8bc1\u8bbf\u95ee HA HDFS\uff1a"),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-text"},'(\n    "username"="user",\n    "password"="passwd",\n    "fs.defaultFS" = "hdfs://my_ha",\n    "dfs.nameservices" = "my_ha",\n    "dfs.ha.namenodes.my_ha" = "my_namenode1, my_namenode2",\n    "dfs.namenode.rpc-address.my_ha.my_namenode1" = "nn1_host:rpc_port",\n    "dfs.namenode.rpc-address.my_ha.my_namenode2" = "nn2_host:rpc_port",\n    "dfs.client.failover.proxy.provider" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n)\n')),(0,t.kt)("p",{parentName:"li"},"\u5173\u4e8eHDFS\u96c6\u7fa4\u7684\u914d\u7f6e\u53ef\u4ee5\u5199\u5165hdfs-site.xml\u6587\u4ef6\u4e2d\uff0c\u7528\u6237\u4f7f\u7528Broker\u8fdb\u7a0b\u8bfb\u53d6HDFS\u96c6\u7fa4\u7684\u4fe1\u606f\u65f6\uff0c\u53ea\u9700\u8981\u586b\u5199\u96c6\u7fa4\u7684\u6587\u4ef6\u8def\u5f84\u540d\u548c\u8ba4\u8bc1\u4fe1\u606f\u5373\u53ef\u3002"))),(0,t.kt)("h4",{id:"\u817e\u8baf\u4e91-chdfs"},"\u817e\u8baf\u4e91 CHDFS"),(0,t.kt)("p",null,"\u540c Apache HDFS"),(0,t.kt)("h4",{id:"\u963f\u91cc\u4e91-oss"},"\u963f\u91cc\u4e91 OSS"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},'(\n    "fs.oss.accessKeyId" = "",\n    "fs.oss.accessKeySecret" = "",\n    "fs.oss.endpoint" = ""\n)\n')),(0,t.kt)("h4",{id:"\u767e\u5ea6\u4e91-bos"},"\u767e\u5ea6\u4e91 BOS"),(0,t.kt)("p",null,"\u5f53\u524d\u4f7f\u7528BOS\u65f6\u9700\u8981\u5c06",(0,t.kt)("a",{parentName:"p",href:"https://sdk.bce.baidu.com/console-sdk/bos-hdfs-sdk-1.0.3-community.jar.zip"},"bos-hdfs-sdk-1.0.3-community.jar.zip"),"\u4e0b\u8f7d\u5e76\u89e3\u538b\u540e\u628ajar\u5305\u653e\u5230broker\u7684lib\u76ee\u5f55\u4e0b\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},'(\n    "fs.bos.access.key" = "xx",\n    "fs.bos.secret.access.key" = "xx",\n    "fs.bos.endpoint" = "xx"\n)\n')),(0,t.kt)("h4",{id:"\u534e\u4e3a\u4e91-obs"},"\u534e\u4e3a\u4e91 OBS"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},'(\n    "fs.obs.access.key" = "xx",\n    "fs.obs.secret.key" = "xx",\n    "fs.obs.endpoint" = "xx"\n)\n')),(0,t.kt)("h4",{id:"\u4e9a\u9a6c\u900a-s3"},"\u4e9a\u9a6c\u900a S3"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},'(\n    "fs.s3a.access.key" = "xx",\n    "fs.s3a.secret.key" = "xx",\n    "fs.s3a.endpoint" = "xx"\n)\n')),(0,t.kt)("h4",{id:"juicefs"},"JuiceFS"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},'(\n    "fs.defaultFS" = "jfs://xxx/",\n    "fs.jfs.impl" = "io.juicefs.JuiceFileSystem",\n    "fs.AbstractFileSystem.jfs.impl" = "io.juicefs.JuiceFS",\n    "juicefs.meta" = "xxx",\n    "juicefs.access-log" = "xxx"\n)\n')),(0,t.kt)("h4",{id:"gcs"},"GCS"),(0,t.kt)("p",null," \u5728\u4f7f\u7528 Broker \u8bbf\u95ee GCS \u65f6\uff0cProject ID \u662f\u5fc5\u987b\u7684\uff0c\u5176\u4ed6\u53c2\u6570\u53ef\u9009,\u6240\u6709\u53c2\u6570\u914d\u7f6e\u8bf7\u53c2\u8003 ",(0,t.kt)("a",{parentName:"p",href:"https://github.com/GoogleCloudDataproc/hadoop-connectors/blob/branch-2.2.x/gcs/CONFIGURATION.md"},"GCS Config")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},'(\n    "fs.gs.project.id" = "\u4f60\u7684 Project ID",\n    "fs.AbstractFileSystem.gs.impl" = "com.google.cloud.hadoop.fs.gcs.GoogleHadoopFS",\n    "fs.gs.impl" = "com.google.cloud.hadoop.fs.gcs.GoogleHadoopFileSystem",\n)\n')))}m.isMDXComponent=!0}}]);