"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[2680],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,l(l({ref:t},s),{},{components:n})):a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88991:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"\u4f7f\u7528 LDB Toolchain \u7f16\u8bd1",language:"zh-CN"},l=void 0,i={unversionedId:"install/source-install/compilation-with-ldb-toolchain",id:"version-2.0/install/source-install/compilation-with-ldb-toolchain",title:"\u4f7f\u7528 LDB Toolchain \u7f16\u8bd1",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/install/source-install/compilation-with-ldb-toolchain.md",sourceDirName:"install/source-install",slug:"/install/source-install/compilation-with-ldb-toolchain",permalink:"/zh-CN/docs/install/source-install/compilation-with-ldb-toolchain",draft:!1,tags:[],version:"2.0",frontMatter:{title:"\u4f7f\u7528 LDB Toolchain \u7f16\u8bd1",language:"zh-CN"},sidebar:"docs",previous:{title:"\u901a\u7528\u7f16\u8bd1",permalink:"/zh-CN/docs/install/source-install/compilation-general"},next:{title:"\u5728 Arm \u5e73\u53f0\u4e0a\u7f16\u8bd1",permalink:"/zh-CN/docs/install/source-install/compilation-arm"}},p={},c=[{value:"\u51c6\u5907\u7f16\u8bd1\u73af\u5883",id:"\u51c6\u5907\u7f16\u8bd1\u73af\u5883",level:2},{value:"\u7f16\u8bd1 Doris",id:"\u7f16\u8bd1-doris",level:2},{value:"\u9884\u7f16\u8bd1\u4e09\u65b9\u5e93",id:"\u9884\u7f16\u8bd1\u4e09\u65b9\u5e93",level:2}],s={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u4f7f\u7528-ldb-toolchain-\u7f16\u8bd1"},"\u4f7f\u7528 LDB Toolchain \u7f16\u8bd1"),(0,r.kt)("p",null,"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 LDB toolchain \u7f16\u8bd1 Doris\u3002\u8be5\u65b9\u5f0f\u76ee\u524d\u4f5c\u4e3a Docker \u7f16\u8bd1\u65b9\u5f0f\u7684\u8865\u5145\uff0c\u65b9\u4fbf\u6ca1\u6709 Docker \u73af\u5883\u7684\u5f00\u53d1\u8005\u548c\u7528\u6237\u7f16\u8bd1 Doris \u6e90\u7801\u3002\nDoris\u76ee\u524d\u63a8\u8350\u7684LDB toolchain\u7248\u672c\u4e3a 0.17, \u5176\u4e2d\u542b\u6709clang-16\u548cgcc-11\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u60a8\u4f9d\u7136\u53ef\u4ee5\u4f7f\u7528 Docker \u5f00\u53d1\u955c\u50cf\u7f16\u8bd1\u6700\u65b0\u4ee3\u7801\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"apache/doris:build-env-ldb-toolchain-latest"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u611f\u8c22 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/amosbird"},"Amos Bird")," \u7684\u8d21\u732e\u3002")),(0,r.kt)("h2",{id:"\u51c6\u5907\u7f16\u8bd1\u73af\u5883"},"\u51c6\u5907\u7f16\u8bd1\u73af\u5883"),(0,r.kt)("p",null,"\u8be5\u65b9\u5f0f\u9002\u7528\u4e8e\u7edd\u5927\u591a\u6570 Linux \u53d1\u884c\u7248\uff08CentOS\uff0cUbuntu \u7b49\uff09\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4e0b\u8f7d ",(0,r.kt)("inlineCode",{parentName:"p"},"ldb_toolchain_gen.sh")),(0,r.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u4ece ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/amosbird/ldb_toolchain_gen/releases"},"\u8fd9\u91cc")," \u4e0b\u8f7d\u6700\u65b0\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"ldb_toolchain_gen.sh"),"\u3002\u8be5\u811a\u672c\u7528\u4e8e\u751f\u6210 ldb toolchain\u3002"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"\u66f4\u591a\u4fe1\u606f\uff0c\u53ef\u8bbf\u95ee ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/amosbird/ldb_toolchain_gen"},"https://github.com/amosbird/ldb_toolchain_gen")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u751f\u6210 ldb toolchain"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"sh ldb_toolchain_gen.sh /path/to/ldb_toolchain/\n")),(0,r.kt)("p",{parentName:"li"},"\u5176\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"/path/to/ldb_toolchain/")," \u4e3a\u5b89\u88c5 toolchain \u76ee\u5f55\u3002"),(0,r.kt)("p",{parentName:"li"},"\u6267\u884c\u6210\u529f\u540e\uff0c\u4f1a\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"/path/to/ldb_toolchain/")," \u4e0b\u751f\u6210\u5982\u4e0b\u76ee\u5f55\u7ed3\u6784\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 bin\n\u251c\u2500\u2500 include\n\u251c\u2500\u2500 lib\n\u251c\u2500\u2500 share\n\u251c\u2500\u2500 test\n\u2514\u2500\u2500 usr\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4e0b\u8f7d\u5e76\u5b89\u88c5\u5176\u4ed6\u7f16\u8bd1\u7ec4\u4ef6"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://doris-thirdparty-repo.bj.bcebos.com/thirdparty/jdk-8u131-linux-x64.tar.gz"},"Java8")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://doris-thirdparty-repo.bj.bcebos.com/thirdparty/apache-maven-3.6.3-bin.tar.gz"},"Apache Maven 3.6.3")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://doris-thirdparty-repo.bj.bcebos.com/thirdparty/node-v12.13.0-linux-x64.tar.gz"},"Node v12.13.0"))),(0,r.kt)("p",{parentName:"li"},"\u5bf9\u4e8e\u4e0d\u540c\u7684 Linux \u53d1\u884c\u7248\uff0c\u53ef\u80fd\u9ed8\u8ba4\u5305\u542b\u7684\u7ec4\u4ef6\u4e0d\u540c\u3002\u56e0\u6b64\u53ef\u80fd\u9700\u8981\u5b89\u88c5\u4e00\u4e9b\u989d\u5916\u7684\u7ec4\u4ef6\u3002\u4e0b\u9762\u4ee5 centos6 \u4e3a\u4f8b\uff0c\u5176\u4ed6\u53d1\u884c\u7248\u7c7b\u4f3c\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"# install required system packages\nsudo yum install -y byacc patch automake libtool make which file ncurses-devel gettext-devel unzip bzip2 zip util-linux wget git python2\n\n# install autoconf-2.69\nwget http://ftp.gnu.org/gnu/autoconf/autoconf-2.69.tar.gz && \\\n    tar zxf autoconf-2.69.tar.gz && \\\n    cd autoconf-2.69 && \\\n    ./configure && \\\n    make && \\\n    make install\n\n# install bison-3.0.4\nwget http://ftp.gnu.org/gnu/bison/bison-3.0.4.tar.gz && \\\n    tar xzf bison-3.0.4.tar.gz && \\\n    cd bison-3.0.4 && \\\n    ./configure && \\\n    make && \\\n    make install\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4e0b\u8f7d Doris \u6e90\u7801"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"git clone https://github.com/apache/doris.git\n")),(0,r.kt)("p",{parentName:"li"},"\u4e0b\u8f7d\u5b8c\u6210\u540e\uff0c\u8fdb\u5165\u5230 doris \u6e90\u7801\u76ee\u5f55\uff0c\u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"p"},"custom_env.sh"),"\uff0c\u6587\u4ef6\uff0c\u5e76\u8bbe\u7f6e PATH \u73af\u5883\u53d8\u91cf\uff0c\u5982\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"export JAVA_HOME=/path/to/java/\nexport PATH=$JAVA_HOME/bin:$PATH\nexport PATH=/path/to/maven/bin:$PATH\nexport PATH=/path/to/node/bin:$PATH\nexport PATH=/path/to/ldb_toolchain/bin:$PATH\n")))),(0,r.kt)("h2",{id:"\u7f16\u8bd1-doris"},"\u7f16\u8bd1 Doris"),(0,r.kt)("p",null,"\u8fdb\u5165 Doris \u6e90\u7801\u76ee\u5f55\uff0c\u6267\u884c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ cat /proc/cpuinfo | grep avx2\n")),(0,r.kt)("p",null,"\u67e5\u770b\u7f16\u8bd1\u673a\u5668\u662f\u5426\u652f\u6301avx2\u6307\u4ee4\u96c6"),(0,r.kt)("p",null,"\u4e0d\u652f\u6301\u5219\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u8fdb\u884c\u7f16\u8bd1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ USE_AVX2=0 sh build.sh\n")),(0,r.kt)("p",null,"\u82e5\u652f\u6301\u5219\u76f4\u63a5\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"sh build.sh")," \u5373\u53ef"),(0,r.kt)("p",null,"\u5982\u9700\u7f16\u8bd1Debug\u7248\u672c\u7684BE\uff0c\u589e\u52a0 BUILD_TYPE=Debug"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ BUILD_TYPE=Debug sh build.sh\n")),(0,r.kt)("p",null,"\u8be5\u811a\u672c\u4f1a\u5148\u7f16\u8bd1\u7b2c\u4e09\u65b9\u5e93\uff0c\u4e4b\u540e\u518d\u7f16\u8bd1 Doris \u7ec4\u4ef6\uff08FE\u3001BE\uff09\u3002\u7f16\u8bd1\u4ea7\u51fa\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"output/")," \u76ee\u5f55\u4e0b\u3002"),(0,r.kt)("h2",{id:"\u9884\u7f16\u8bd1\u4e09\u65b9\u5e93"},"\u9884\u7f16\u8bd1\u4e09\u65b9\u5e93"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"build.sh")," \u811a\u672c\u4f1a\u5148\u7f16\u8bd1\u7b2c\u4e09\u65b9\u5e93\u3002\u4f60\u4e5f\u53ef\u4ee5\u76f4\u63a5\u4e0b\u8f7d\u9884\u7f16\u8bd1\u597d\u7684\u4e09\u65b9\u5e93\uff1a"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"https://github.com/apache/doris-thirdparty/releases")),(0,r.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u63d0\u4f9b\u4e86 Linux X86(with AVX2) \u548c MacOS(X86\u82af\u7247) \u7684\u9884\u7f16\u8bd1\u4e09\u65b9\u5e93\u3002\u5982\u679c\u548c\u4f60\u7684\u7f16\u8bd1\u8fd0\u884c\u73af\u5883\u4e00\u81f4\uff0c\u53ef\u4ee5\u76f4\u63a5\u4e0b\u8f7d\u4f7f\u7528\u3002"),(0,r.kt)("p",null,"\u4e0b\u8f7d\u597d\u540e\uff0c\u89e3\u538b\u4f1a\u5f97\u5230\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"installed/")," \u76ee\u5f55\uff0c\u5c06\u8fd9\u4e2a\u76ee\u5f55\u62f7\u8d1d\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"thirdparty/")," \u76ee\u5f55\u4e0b\uff0c\u4e4b\u540e\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"build.sh")," \u5373\u53ef\u3002"))}d.isMDXComponent=!0}}]);