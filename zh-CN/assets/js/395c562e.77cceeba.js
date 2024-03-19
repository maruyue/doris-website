"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[30261],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>g});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),d=a,g=u["".concat(s,".").concat(d)]||u[d]||y[d]||o;return t?r.createElement(g,i(i({ref:n},p),{},{components:t})):r.createElement(g,i({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},735115:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(58168),a=(t(296540),t(15680));const o={title:"\u6570\u636e\u5e93\u8fde\u63a5",language:"zh-CN"},i=void 0,l={unversionedId:"db-connect/database-connect",id:"version-2.0/db-connect/database-connect",title:"\u6570\u636e\u5e93\u8fde\u63a5",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/db-connect/database-connect.md",sourceDirName:"db-connect",slug:"/db-connect/database-connect",permalink:"/zh-CN/docs/2.0/db-connect/database-connect",draft:!1,tags:[],version:"2.0",frontMatter:{title:"\u6570\u636e\u5e93\u8fde\u63a5",language:"zh-CN"},sidebar:"docs",previous:{title:"\u670d\u52a1 Crash \u60c5\u51b5\u4e0b\u5982\u4f55\u8fdb\u5165\u5bb9\u5668",permalink:"/zh-CN/docs/2.0/install/cluster-deployment/k8s-deploy/debug-crash"},next:{title:"\u6a21\u578b\u6982\u8ff0",permalink:"/zh-CN/docs/2.0/table-design/data-model/overview"}},s={},c=[{value:"MySQL Client",id:"mysql-client",level:2},{value:"MySQL JDBC Connector",id:"mysql-jdbc-connector",level:2},{value:"DBeaver",id:"dbeaver",level:2},{value:"Doris \u5185\u7f6e\u7684 Web UI",id:"doris-\u5185\u7f6e\u7684-web-ui",level:2}],p={toc:c},u="wrapper";function y(e){let{components:n,...o}=e;return(0,a.yg)(u,(0,r.A)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Apache Doris \u91c7\u7528 MySQL \u7f51\u7edc\u8fde\u63a5\u534f\u8bae\uff0c\u517c\u5bb9 MySQL \u751f\u6001\u7684\u547d\u4ee4\u884c\u5de5\u5177\u3001JDBC/ODBC \u548c\u5404\u79cd\u53ef\u89c6\u5316\u5de5\u5177\u3002\u540c\u65f6 Apache Doris \u4e5f\u5185\u7f6e\u4e86\u4e00\u4e2a\u7b80\u5355\u7684 Web UI\uff0c\u65b9\u4fbf\u4f7f\u7528\u3002\u4e0b\u9762\u5206\u522b\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7 MySQL Client\u3001MySQL JDBC Connector\u3001DBeaver \u548c Doris \u5185\u7f6e\u7684 Web UI \u6765\u8fde\u63a5 Doris\u3002"),(0,a.yg)("h2",{id:"mysql-client"},"MySQL Client"),(0,a.yg)("p",null,"\u4ece MySQL \u5b98\u65b9\u7f51\u7ad9\u4e0b\u8f7d MySQL Client\uff0c\u6216\u8005\u4e0b\u8f7d\u6211\u4eec\u63d0\u4f9b\u7684 Linux \u4e0a\u514d\u5b89\u88c5\u7684 ",(0,a.yg)("a",{parentName:"p",href:"https://cdn.selectdb.com/download/mysql-client/mysql-5.7.22-linux-glibc2.12-x86_64.tar.gz"},"MySQL \u5ba2\u6237\u7aef"),"\u3002\u5f53\u524d Doris \u4e3b\u8981\u517c\u5bb9 MySQL 5.7 \u53ca\u5176\u4ee5\u4e0a\u7684\u5ba2\u6237\u7aef\u3002"),(0,a.yg)("p",null,"\u89e3\u538b\u4e0b\u8f7d\u7684 MySQL \u5ba2\u6237\u7aef\uff0c\u5728 ",(0,a.yg)("inlineCode",{parentName:"p"},"bin/")," \u76ee\u5f55\u4e0b\u53ef\u4ee5\u627e\u5230 ",(0,a.yg)("inlineCode",{parentName:"p"},"mysql")," \u547d\u4ee4\u884c\u5de5\u5177\u3002\u7136\u540e\u6267\u884c\u4e0b\u9762\u7684\u547d\u4ee4\u8fde\u63a5 Doris\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Bash"},"# FE_IP \u4e3a FE \u7684\u76d1\u542c\u5730\u5740\uff0c FE_QUERY_PORT \u4e3a FE \u7684 MYSQL \u534f\u8bae\u670d\u52a1\u7684\u7aef\u53e3\uff0c\u5728 fe.conf \u4e2d\u5bf9\u5e94 query_port, \u9ed8\u8ba4\u4e3a 9030.\nmysql -h FE_IP -P FE_QUERY_PORT -u USER_NAME \n")),(0,a.yg)("p",null,"\u767b\u5f55\u540e\uff0c\u663e\u793a\u5982\u4e0b\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Bash"},"Welcome to the MySQL monitor.  Commands end with ; or \\g.                                                                                                                                                                                  \nYour MySQL connection id is 236                                                                                                                                                                                                            \nServer version: 5.7.99 Doris version doris-2.0.3-rc06-37d31a5                                                                                                                                                                              \n                                                                                                                                                                                                                                           \nCopyright (c) 2000, 2018, Oracle and/or its affiliates. All rights reserved.                                                                                                                                                               \n                                                                                                                                                                                                                                           \nOracle is a registered trademark of Oracle Corporation and/or its                                                                                                                                                                          \naffiliates. Other names may be trademarks of their respective                                                                                                                                                                              \nowners.                                                                                                                                                                                                                                    \n                                                                                                                                                                                                                                           \nType 'help;' or '\\h' for help. Type '\\c' to clear the current input statement.                                                                                                                                                             \n                                                                                                                                                                                                                                           \nmysql> \n")),(0,a.yg)("h2",{id:"mysql-jdbc-connector"},"MySQL JDBC Connector"),(0,a.yg)("p",null,"\u8bf7\u5728 MySQL \u5b98\u65b9\u7f51\u7ad9\u4e0b\u8f7d\u76f8\u5e94\u7684 JDBC Connector\u3002"),(0,a.yg)("p",null,"\u8fde\u63a5\u4ee3\u7801\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Java"},'String user = "user_name";\nString password = "user_password";\nString newUrl = "jdbc:mysql://FE_IP:FE_PORT/demo\uff1fuseUnicode=true&characterEncoding=utf8&useTimezone=true&serverTimezone=Asia/Shanghai&useSSL=false&allowPublicKeyRetrieval=true";\ntry {\n    Connection myCon = DriverManager.getConnection(newUrl, user, password);\n    Statement stmt = myCon.createStatement();\n    ResultSet result = stmt.executeQuery("show databases");\n    ResultSetMetaData metaData = result.getMetaData();\n    int columnCount = metaData.getColumnCount();\n    while (result.next()) {\n        for (int i = 1; i <= columnCount; i++) {\n            System.out.println(result.getObject(i));\n        }\n    }\n} catch (SQLException e) {\n    log.error("get JDBC connection exception.", e);\n}\n')),(0,a.yg)("h2",{id:"dbeaver"},"DBeaver"),(0,a.yg)("p",null,"\u521b\u5efa\u4e00\u4e2a\u5230 Apache Doris \u7684 MySQL \u8fde\u63a5\uff1a"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"\u521b\u5efa\u5230 Apache Doris \u7684 MySQL \u8fde\u63a5",src:t(826965).A,width:"1280",height:"1083"})),(0,a.yg)("p",null,"\u5728 DBeaver \u4e2d\u8fdb\u884c\u67e5\u8be2\uff1a"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"DBeaver Connect",src:t(314034).A,width:"1280",height:"946"})),(0,a.yg)("h2",{id:"doris-\u5185\u7f6e\u7684-web-ui"},"Doris \u5185\u7f6e\u7684 Web UI"),(0,a.yg)("p",null,"Doris FE \u5185\u7f6e Web UI\u3002\u7528\u6237\u65e0\u987b\u5b89\u88c5 MySQL \u5ba2\u6237\u7aef\uff0c\u5373\u53ef\u901a\u8fc7\u5185\u7f6e\u7684 Web UI \u8fdb\u884c SQL \u67e5\u8be2\u548c\u5176\u5b83\u76f8\u5173\u4fe1\u606f\u7684\u67e5\u770b\u3002"),(0,a.yg)("p",null,"\u5728\u6d4f\u89c8\u5668\u4e2d\u8f93\u5165 http://fe_ip:fe_port,  \u6bd4\u5982 ",(0,a.yg)("a",{parentName:"p",href:"http://172.20.63.118:8030%EF%BC%8C%E6%89%93%E5%BC%80"},"http://172.20.63.118:8030\uff0c\u6253\u5f00")," Doris \u5185\u7f6e\u7684 Web \u63a7\u5236\u53f0\u3002"),(0,a.yg)("p",null,"\u5185\u7f6e Web \u63a7\u5236\u53f0\uff0c\u4e3b\u8981\u4f9b\u96c6\u7fa4 root \u8d26\u6237\u4f7f\u7528\uff0c\u9ed8\u8ba4\u5b89\u88c5\u540e root \u8d26\u6237\u5bc6\u7801\u4e3a\u7a7a\u3002"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"WebUI",src:t(223118).A,width:"1280",height:"724"})),(0,a.yg)("p",null,"\u6bd4\u5982\uff0c\u5728 Playground \u4e2d\uff0c\u6267\u884c\u5982\u4e0b\u8bed\u53e5\uff0c\u53ef\u4ee5\u5b8c\u6210\u5bf9 BE \u8282\u70b9\u7684\u6dfb\u52a0\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER SYSTEM ADD BACKEND "be_host_ip:heartbeat_service_port";\n')),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Playground",src:t(106034).A,width:"1280",height:"654"})),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"Playground \u4e2d\u6267\u884c\u8fd9\u79cd\u548c\u5177\u4f53\u6570\u636e\u5e93/\u8868\u6ca1\u6709\u5173\u7cfb\u7684\u8bed\u53e5\uff0c\u52a1\u5fc5\u5728\u5de6\u4fa7\u5e93\u680f\u91cc\u968f\u610f\u9009\u62e9\u4e00\u4e2a\u6570\u636e\u5e93\uff0c\u624d\u80fd\u6267\u884c\u6210\u529f\uff0c\u8fd9\u4e2a\u9650\u5236\uff0c\u7a0d\u540e\u4f1a\u53bb\u6389\u3002"),(0,a.yg)("p",{parentName:"admonition"},"\u5f53\u524d\u5185\u7f6e\u7684 Web \u63a7\u5236\u53f0\uff0c\u8fd8\u4e0d\u80fd\u6267\u884c SET \u7c7b\u578b\u7684 SQL \u8bed\u53e5\uff0c\u6240\u4ee5\uff0c\u5728 Web \u63a7\u5236\u53f0\uff0c\u5f53\u524d\u8fd8\u4e0d\u80fd\u901a\u8fc7\u6267\u884c SET PASSWORD FOR 'user' = PASSWORD('user_password') `\u7c7b\u4f3c\u8bed\u53e5\u3002")))}y.isMDXComponent=!0},314034:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/DBeaver-query-11f3e80e04942de7bd200a685655da3c.png"},826965:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/DBeaver-e74120612bdbc9d4a14b79a5819ba6d5.png"},106034:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/Doris-WebUI-Playground-f5c92b371f51f1ab721e68d0f9752a86.png"},223118:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/Doris-WebUI-0e96b0a7f82ba3609666352a6f56b26a.png"}}]);