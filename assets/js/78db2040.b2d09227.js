"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[13313],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=s(a),u=r,k=c["".concat(p,".").concat(u)]||c[u]||d[u]||l;return a?n.createElement(k,o(o({ref:t},m),{},{components:a})):n.createElement(k,o({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},77177:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={title:"Compilation with Arm",language:"en"},o=void 0,i={unversionedId:"install/source-install/compilation-arm",id:"version-2.0/install/source-install/compilation-arm",title:"Compilation with Arm",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/install/source-install/compilation-arm.md",sourceDirName:"install/source-install",slug:"/install/source-install/compilation-arm",permalink:"/docs/install/source-install/compilation-arm",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Compilation with Arm",language:"en"},sidebar:"docs",previous:{title:"Compiling with LDB Toolchain",permalink:"/docs/install/source-install/compilation-with-ldb-toolchain"},next:{title:"Compilation on Windows",permalink:"/docs/install/source-install/compilation-win"}},p={},s=[{value:"KylinOS",id:"kylinos",level:2},{value:"Software and Hardware Environment",id:"software-and-hardware-environment",level:3},{value:"Compile with ldb-Toolchain",id:"compile-with-ldb-toolchain",level:3},{value:"CentOS &amp; Ubuntu",id:"centos--ubuntu",level:2},{value:"Hardware Environment",id:"hardware-environment",level:3},{value:"Software Environment",id:"software-environment",level:3},{value:"Software Environment List",id:"software-environment-list",level:4},{value:"Software Environment Installation Command",id:"software-environment-installation-command",level:4},{value:"CentOS 8.4",id:"centos-84",level:5},{value:"Ubuntu 20.04",id:"ubuntu-2004",level:5},{value:"Download Source Code",id:"download-source-code",level:4},{value:"Install and Deploy",id:"install-and-deploy",level:4},{value:"Check if the AVX2 instruction set is supported",id:"check-if-the-avx2-instruction-set-is-supported",level:5},{value:"Execute compilation",id:"execute-compilation",level:5},{value:"FAQ",id:"faq",level:3}],m={toc:s},c="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"compile-with-arm"},"Compile with ARM"),(0,r.kt)("p",null,"This topic is about how to compile Doris on the ARM64 platform."),(0,r.kt)("p",null,"Note that this is for reference only. Other errors may occur when compiling in different environments."),(0,r.kt)("h2",{id:"kylinos"},"KylinOS"),(0,r.kt)("h3",{id:"software-and-hardware-environment"},"Software and Hardware Environment"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"KylinOS Version\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"$> cat /etc/.kyinfo\nname=Kylin-Server\nmilestone=10-SP1-Release-Build04-20200711\narch=arm64\nbeta=False\ntime=2020-07-11 17:16:54\ndist_id=Kylin-Server-10-SP1-Release-Build04-20200711-arm64-2020-07-11 17:16:54\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"CPU Model:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"$> cat /proc/cpuinfo\nmodel name  : Phytium,FT-2000+/64\n")))),(0,r.kt)("h3",{id:"compile-with-ldb-toolchain"},"Compile with ldb-Toolchain"),(0,r.kt)("p",null,"This method works for Doris versions after ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/commit/7f3564cca62de49c9f2ea67fcf735921dbebb4d1"},"commit 7f3564"),"."),(0,r.kt)("p",null,"Download ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/amosbird/ldb_toolchain_gen/releases/download/v0.9.1/ldb_toolchain_gen.aarch64.sh"},"ldb","_","toolchain","_","gen.aarch64.sh")),(0,r.kt)("p",null,"For detailed instructions, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/install/source-install/compilation-with-ldb-toolchain"},"Compile with ldb-toolchain")),(0,r.kt)("p",null,"Note that you need to download the corresponding aarch64 versions of jdk and nodejs:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://doris-thirdparty-repo.bj.bcebos.com/thirdparty/jdk-8u291-linux-aarch64.tar.gz"},"Java8-aarch64")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://doris-thirdparty-repo.bj.bcebos.com/thirdparty/node-v16.3.0-linux-arm64.tar.xz"},"Node v12.13.0-aarch64"))),(0,r.kt)("h2",{id:"centos--ubuntu"},"CentOS & Ubuntu"),(0,r.kt)("h3",{id:"hardware-environment"},"Hardware Environment"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"System Version: CentOS 8.4, Ubuntu 20.04"),(0,r.kt)("li",{parentName:"ol"},"System Architecture: ARM X64"),(0,r.kt)("li",{parentName:"ol"},"CPU: 4C"),(0,r.kt)("li",{parentName:"ol"},"Memory: 16 GB"),(0,r.kt)("li",{parentName:"ol"},"Hard Disk: 40GB (SSD), 100GB (SSD)")),(0,r.kt)("h3",{id:"software-environment"},"Software Environment"),(0,r.kt)("h4",{id:"software-environment-list"},"Software Environment List"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Component Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Component Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Git"),(0,r.kt)("td",{parentName:"tr",align:null},"2.0+")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"JDK"),(0,r.kt)("td",{parentName:"tr",align:null},"1.8.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Maven"),(0,r.kt)("td",{parentName:"tr",align:null},"3.6.3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NodeJS"),(0,r.kt)("td",{parentName:"tr",align:null},"16.3.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LDB-Toolchain"),(0,r.kt)("td",{parentName:"tr",align:null},"0.9.1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Commonly Used Components",(0,r.kt)("br",null),"byacc",(0,r.kt)("br",null),"patch",(0,r.kt)("br",null),"automake",(0,r.kt)("br",null),"libtool",(0,r.kt)("br",null),"make",(0,r.kt)("br",null),"which",(0,r.kt)("br",null),"file",(0,r.kt)("br",null),"ncurses-devel",(0,r.kt)("br",null),"gettext-devel",(0,r.kt)("br",null),"unzip",(0,r.kt)("br",null),"bzip2",(0,r.kt)("br",null),"zip",(0,r.kt)("br",null),"util-linux",(0,r.kt)("br",null),"wget",(0,r.kt)("br",null),"git",(0,r.kt)("br",null),"python2"),(0,r.kt)("td",{parentName:"tr",align:null},"yum install or apt-get install")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"autoconf"),(0,r.kt)("td",{parentName:"tr",align:null},"2.69")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bison"),(0,r.kt)("td",{parentName:"tr",align:null},"3.0.4")))),(0,r.kt)("h4",{id:"software-environment-installation-command"},"Software Environment Installation Command"),(0,r.kt)("h5",{id:"centos-84"},"CentOS 8.4"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create root directories"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Create root directory for software download and installation packages\nmkdir /opt/tools\n# Create root directory for software installation\nmkdir /opt/software\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Git"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# yum install (save the trouble of compilation)\nyum install -y git\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"JDK8 (2 methods)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# 1. yum install, which can avoid additional download and configuration. Installing the devel package is to get tools such as the jps command.\nyum install -y java-1.8.0-openjdk java-1.8.0-openjdk-devel\n\n# 2. Download the installation package of the arm64 architecture, decompress it, and configure the environment variables.\ncd /opt/tools\nwget https://doris-thirdparty-repo.bj.bcebos.com/thirdparty/jdk-8u291-linux-aarch64.tar.gz && \\\ntar -zxvf jdk-8u291-linux-aarch64.tar.gz && \\\nmv jdk1.8.0_291 /opt/software/jdk8\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Maven"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd /opt/tools\n# Download the wget tool, decompress it, and configure the environment variables.\nwget https://dlcdn.apache.org/maven/maven-3/3.6.3/binaries/apache-maven-3.6.3-bin.tar.gz && \\\ntar -zxvf apache-maven-3.6.3-bin.tar.gz && \\\nmv apache-maven-3.6.3 /opt/software/maven\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"NodeJS"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd /opt/tools\n# Download the installation package of the arm64 architecture\nwget https://doris-thirdparty-repo.bj.bcebos.com/thirdparty/node-v16.3.0-linux-arm64.tar.xz && \\\ntar -xvf node-v16.3.0-linux-arm64.tar.xz && \\\nmv node-v16.3.0-linux-arm64 /opt/software/nodejs\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"ldb-toolchain"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd /opt/tools\n# Download ldb-toolchain ARM version\nwget https://github.com/amosbird/ldb_toolchain_gen/releases/download/v0.9.1/ldb_toolchain_gen.aarch64.sh && \\\nsh ldb_toolchain_gen.aarch64.sh /opt/software/ldb_toolchain/\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Configure environment variables"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# Configure environment variables\nvim /etc/profile.d/doris.sh\nexport JAVA_HOME=/opt/software/jdk8\nexport MAVEN_HOME=/opt/software/maven\nexport NODE_JS_HOME=/opt/software/nodejs\nexport LDB_HOME=/opt/software/ldb_toolchain\nexport PATH=$JAVA_HOME/bin:$MAVEN_HOME/bin:$NODE_JS_HOME/bin:$LDB_HOME/bin:$PATH\n\n# Save, exit, and refresh environment variables\nsource /etc/profile.d/doris.sh\n\n# Test\njava -version\n> java version "1.8.0_291"\nmvn -version\n> Apache Maven 3.6.3\nnode --version\n> v16.3.0\ngcc --version\n> gcc-11\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install other environments and components"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Install required system packages\nsudo yum install -y byacc patch automake libtool make which file ncurses-devel gettext-devel unzip bzip2 bison zip util-linux wget git python2\n\n# Install autoconf-2.69\ncd /opt/tools\nwget http://ftp.gnu.org/gnu/autoconf/autoconf-2.69.tar.gz && \\\n    tar zxf autoconf-2.69.tar.gz && \\\n    mv autoconf-2.69 /opt/software/autoconf && \\\n    cd /opt/software/autoconf && \\\n    ./configure && \\\n    make && \\\n    make install\n")))),(0,r.kt)("h5",{id:"ubuntu-2004"},"Ubuntu 20.04"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Update apt-get repository"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"apt-get update\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Check the shell command set"),(0,r.kt)("p",{parentName:"li"},"The Ubuntu shell installs dash instead of bash by default. It needs to be switched to bash for proper execution. Run the following command to view the details of sh and confirm which program corresponds to the shell:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"ls -al /bin/sh\n")),(0,r.kt)("p",{parentName:"li"},"The shell can be switched back to bash by:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo dpkg-reconfigure dash\n")),(0,r.kt)("p",{parentName:"li"},"Then select no to confirm."),(0,r.kt)("p",{parentName:"li"},"After these steps, dash will no longer be the default shell tool.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create root directories"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Create root directory for software download and installation packages\nmkdir /opt/tools\n# Create root directory for software installation\nmkdir /opt/software\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Git"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# apt-get install, which can save the trouble of compilation\napt-get -y install git\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"JDK8"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Download the installation package of the ARM64 architecture, decompress it, and configure environment variables.\ncd /opt/tools\nwget https://doris-thirdparty-repo.bj.bcebos.com/thirdparty/jdk-8u291-linux-aarch64.tar.gz && \\\ntar -zxvf jdk-8u291-linux-aarch64.tar.gz && \\\nmv jdk1.8.0_291 /opt/software/jdk8\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Maven"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd /opt/tools\n# Download the wget tool, decompress it, and configure the environment variables.\nwget https://dlcdn.apache.org/maven/maven-3/3.6.3/binaries/apache-maven-3.6.3-bin.tar.gz && \\\ntar -zxvf apache-maven-3.6.3-bin.tar.gz && \\\nmv apache-maven-3.6.3 /opt/software/maven\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"NodeJS"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd /opt/tools\n# Download the installation package of ARM64 architecture.\nwget https://doris-thirdparty-repo.bj.bcebos.com/thirdparty/node-v16.3.0-linux-arm64.tar.xz && \\\ntar -xvf node-v16.3.0-linux-arm64.tar.xz && \\\nmv node-v16.3.0-linux-arm64 /opt/software/nodejs\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"ldb-toolchain"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd /opt/tools\n# Download ldb-toolchain ARM version\nwget https://github.com/amosbird/ldb_toolchain_gen/releases/download/v0.9.1/ldb_toolchain_gen.aarch64.sh && \\\nsh ldb_toolchain_gen.aarch64.sh /opt/software/ldb_toolchain/\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Configure environment variables"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# Configure environment variables\nvim /etc/profile.d/doris.sh\nexport JAVA_HOME=/opt/software/jdk8\nexport MAVEN_HOME=/opt/software/maven\nexport NODE_JS_HOME=/opt/software/nodejs\nexport LDB_HOME=/opt/software/ldb_toolchain\nexport PATH=$JAVA_HOME/bin:$MAVEN_HOME/bin:$NODE_JS_HOME/bin:$LDB_HOME/bin:$PATH\n\n# Save, exit, and refresh environment variables\nsource /etc/profile.d/doris.sh\n\n# Test\njava -version\n> java version "1.8.0_291"\nmvn -version\n> Apache Maven 3.6.3\nnode --version\n> v16.3.0\ngcc --version\n   > gcc-11\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install other environments and components"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Install required system packages\nsudo apt install -y build-essential cmake flex automake bison binutils-dev libiberty-dev zip libncurses5-dev curl ninja-build\nsudo apt-get install -y make\nsudo apt-get install -y unzip\nsudo apt-get install -y python2\nsudo apt-get install -y byacc\nsudo apt-get install -y automake\nsudo apt-get install -y libtool\nsudo apt-get install -y bzip2\nsudo add-apt-repository ppa:ubuntu-toolchain-r/ppa\nsudo apt update\nsudo apt install gcc-11 g++-11\nsudo apt-get -y install autoconf autopoint\n\n# Install autoconf-2.69\ncd /opt/tools\nwget http://ftp.gnu.org/gnu/autoconf/autoconf-2.69.tar.gz && \\\n    tar zxf autoconf-2.69.tar.gz && \\\n    mv autoconf-2.69 /opt/software/autoconf && \\\n    cd /opt/software/autoconf && \\\n    ./configure && \\\n    make && \\\n    make install\n")))),(0,r.kt)("h4",{id:"download-source-code"},"Download Source Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd /opt\ngit clone https://github.com/apache/doris.git\n")),(0,r.kt)("h4",{id:"install-and-deploy"},"Install and Deploy"),(0,r.kt)("h5",{id:"check-if-the-avx2-instruction-set-is-supported"},"Check if the AVX2 instruction set is supported"),(0,r.kt)("p",null,"If there is data returned, that means AVX2 is supported; otherwise, AVX2 is not supported."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cat /proc/cpuinfo | grep avx2\n")),(0,r.kt)("h5",{id:"execute-compilation"},"Execute compilation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# For machines that support the AVX2 instruction set, compile directly\nsh build.sh\n# For machines that do not support the AVX2 instruction set, use the following command to compile\nUSE_AVX2=OFF sh build.sh\n")),(0,r.kt)("h3",{id:"faq"},"FAQ"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"File not found when compiling the third-party library libhdfs3.a."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Problem Description"),(0,r.kt)("p",{parentName:"li"},"During the compilation and installation process, the following error occurrs:"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"not found lib/libhdfs3.a file or directory"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cause"),(0,r.kt)("p",{parentName:"li"},"The third-party library dependency is improperly downloaded.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Solution"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use a third-party download repository"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"export REPOSITORY_URL=https://doris-thirdparty-repo.bj.bcebos.com/thirdparty\nsh /opt/doris/thirdparty/build-thirdparty.sh\n")),(0,r.kt)("p",{parentName:"li"},"REPOSITORY_URL contains all third-party library source packages and their historical versions.")))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"python command not found"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Problem Description"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"An exception is thrown when executing build.sh"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"/opt/doris/env.sh: line 46: python: command not found"),(0,r.kt)("p",{parentName:"blockquote"},"Python 2.7.18"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cause"),(0,r.kt)("p",{parentName:"li"},"The system uses ",(0,r.kt)("inlineCode",{parentName:"p"},"python2.7"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"python3.6"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"python2"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"python3")," by default to execute python commands. Doris only requires python 2.7+ to install dependencies, so you just need to add a command  ",(0,r.kt)("inlineCode",{parentName:"p"},"python")," to connect. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Solution"),(0,r.kt)("p",{parentName:"li"},"Establish a soft link to the ",(0,r.kt)("inlineCode",{parentName:"p"},"python")," command in ",(0,r.kt)("inlineCode",{parentName:"p"},"\\usr\\bin")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# View python installation directory\nwhereis python\n# Establish soft connection\nsudo ln -s /usr/bin/python2.7 /usr/bin/python\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"There is no output directory after compilation"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Problem Description"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Cannot find the output folder in the directory after the execution of build.sh."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cause"),(0,r.kt)("p",{parentName:"li"},"Compilation fails. Try again.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Solution"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sh build.sh --clean\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"spark-dpp compilation fails"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Problem Description"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"After compiling build.sh, compiling to Spark-DPP fails with an error"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Failed to execute goal on project spark-dpp"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cause"),(0,r.kt)("p",{parentName:"li"},"This error message is caused by download failure (connection to the ",(0,r.kt)("inlineCode",{parentName:"p"},"repo.maven.apache.org")," central repository fails)."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Could not transfer artifact org.apache.spark:spark-sql_2.12:jar:2.4.6 from/to central (",(0,r.kt)("a",{parentName:"p",href:"https://repo.maven.apache.org/maven2"},"https://repo.maven.apache.org/maven2"),"): Transfer failed for https://repo .maven.apache.org/maven2/org/apache/spark/spark-sql_2.12/2.4.6/spark-sql_2.12-2.4.6.jar: Unknown host repo.maven.apache.org"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Solution"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Rebuild"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"No space left, compilation fails"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Problem Description"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Failed to build CXX object during compilation, error message showing no space left"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"fatal error: error writing to /tmp/ccKn4nPK.s: No space left on device\n1112 | } // namespace doris::vectorized\ncompilation terminated."))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cause"),(0,r.kt)("p",{parentName:"li"},"Insufficient free space on the device")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Solution"),(0,r.kt)("p",{parentName:"li"},"Expand the free space on the device by deleting files you don't need, etc.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Failed to start FE, transaction error -20"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Problem Description"),(0,r.kt)("p",{parentName:"li"},"When starting FE, a transaction error 20 is reported with UNKNOWN status."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"[BDBEnvironment.setup():198]"," error to open replicated environment. will exit.\ncom.sleepycat.je.rep.ReplicaWriteException: (JE 18.3.12) Problem closing transaction 20. The current state is:UNKNOWN. The node transitioned to this state at:Fri Apr 22 12:48:08 CST 2022"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cause"),(0,r.kt)("p",{parentName:"li"},"Insufficient hard disk space")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Solution"),(0,r.kt)("p",{parentName:"li"},"Free up hard disk space or mount a new hard disk")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Abnormal BDB environment setting, disk search error"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Problem Description"),(0,r.kt)("p",{parentName:"li"},"An exception is reported when starting FE after migrating the drive letter where FE is located"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"2022-04-22 16:21:44,092 ERROR (MASTER 172.28.7.231_9010_1650606822109(-1)|1) ","[BDBJEJournal.open():306]"," catch an exception when setup bdb environment. will exit.\ncom.sleepycat.je.DiskLimitException: (JE 18.3.12) Disk usage is not within je.maxDisk or je.freeDisk limits and write operations are prohibited: maxDiskLimit=0 freeDiskLimit=5,368,709,120 adjustedMaxDiskLimit=0 maxDiskOverage=0 freeDiskShortage=1,536,552,960 diskFreeSpace =3,832,156,160 availableLogSize=-1,536,552,960 totalLogSize=4,665 activeLogSize=4,665 reservedLogSize=0 protectedLogSize=0 protectedLogSizeMap={}"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cause"),(0,r.kt)("p",{parentName:"li"},"FE has been migrated to another location, which doesn't match the hard disk information stored in the metadata; or the hard disk is damaged or not mounted")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Solution"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Check if the hard disk is normal, initialized and mounted correctly"),(0,r.kt)("li",{parentName:"ul"},"Fix FE metadata"),(0,r.kt)("li",{parentName:"ul"},"If it is a test machine, you can delete the metadata directory and restart"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Could not find pkg.m4 file in pkg.config"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Problem Description"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'A "file not found" error occurrs during compilation:'),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Couldn't find pkg.m4 from pkg-config. Install the appropriate package for your distribution or set ACLOCAL_PATH to the directory containing pkg.m4."))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cause"),(0,r.kt)("p",{parentName:"li"},"There is something wrong with the compilation of the third-party library ",(0,r.kt)("inlineCode",{parentName:"p"},"libxml2")," ."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Possible Reasons:"))),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"An exception occurs when the Ubuntu system loads the environment variables so the index under the ldb directory is not successfully loaded."),(0,r.kt)("li",{parentName:"ol"},"The retrieval of environment variables during libxml2 compilation fails, so the ldb/aclocal directory is not retrieved."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Solution"),(0,r.kt)("p",{parentName:"li"},"Copy the ",(0,r.kt)("inlineCode",{parentName:"p"},"pkg.m4")," file in the ldb/aclocal directory into the libxml2/m4 directory, and recompile the third-party library."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cp /opt/software/ldb_toolchain/share/aclocal/pkg.m4 /opt/incubator-doris/thirdparty/src/libxml2-v2.9.10/m4\nsh /opt/incubator-doris/thirdparty/build-thirdparty.sh\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Failed to execute test CURL_HAS_TLS_PROXY"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Problem Description"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"An error is reported during the compilation process of the third-party package:"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},'-- Performing Test CURL_HAS_TLS_PROXY - Failed\nCMake Error at cmake/dependencies.cmake:15 (get_property):\nINTERFACE_LIBRARY targets may only have whitelisted properties. The\nproperty "LINK_LIBRARIES_ALL" is not allowed.'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The log shows: curl ",(0,r.kt)("inlineCode",{parentName:"p"},"No such file or directory")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"fatal error: curl/curl.h: No such file or directory\n2 | #include <curl/curl.h>\ncompilation terminated.\nninja: build stopped: subcommand failed."))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cause"),(0,r.kt)("p",{parentName:"li"},"There is an error in the compilation environment. The gcc is of version 9.3.0 that comes with the system, so it is not compiled with ldb, so you need to configure the ldb environment variable.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Solution"),(0,r.kt)("p",{parentName:"li"},"Configure ldb environment variables"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Configure environment variables\nvim /etc/profile.d/ldb.sh\nexport LDB_HOME=/opt/software/ldb_toolchain\nexport PATH=$LDB_HOME/bin:$PATH\n# Save, exit, and refresh environment variables\nsource /etc/profile.d/ldb.sh\n# Test\ngcc --version\n> gcc-11\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Other problems"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Problem Description"),(0,r.kt)("p",{parentName:"li"},"The follow error prompts are all due to one root cause."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"bison related",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"fseterr.c error when installing bison-3.0.4"))),(0,r.kt)("li",{parentName:"ul"},"flex related",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"flex command not found"))),(0,r.kt)("li",{parentName:"ul"},"cmake related",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"cmake command not found"),(0,r.kt)("li",{parentName:"ol"},"cmake cannot find the dependent library"),(0,r.kt)("li",{parentName:"ol"},"cmake cannot find CMAKE_ROOT"),(0,r.kt)("li",{parentName:"ol"},"Compiler set not found in cmake environment variable CXX"))),(0,r.kt)("li",{parentName:"ul"},"boost related",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Boost.Build build engine failed"))),(0,r.kt)("li",{parentName:"ul"},"mysql related",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Could not find mysql client dependency a file"))),(0,r.kt)("li",{parentName:"ul"},"gcc related",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"GCC version requires 11+"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cause"),(0,r.kt)("p",{parentName:"li"},"Not compiled with ldb-toolschain")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Solution"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Check if the ldb-toolschain environment variable is configured"),(0,r.kt)("li",{parentName:"ul"},"Check if gcc version is ",(0,r.kt)("inlineCode",{parentName:"li"},"gcc-11")),(0,r.kt)("li",{parentName:"ul"},"Delete the ldb directory after the ",(0,r.kt)("inlineCode",{parentName:"li"},"ldb-toolschain.sh")," script is executed, re-execute and configure the environment variables, and verify the gcc version")))))}d.isMDXComponent=!0}}]);