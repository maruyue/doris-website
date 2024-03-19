"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[47063],{15680:(e,r,a)=>{a.d(r,{xA:()=>c,yg:()=>m});var t=a(296540);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function o(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?o(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function l(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=t.createContext({}),d=function(e){var r=t.useContext(p),a=r;return e&&(a="function"==typeof e?e(r):i(i({},r),e)),a},c=function(e){var r=d(e.components);return t.createElement(p.Provider,{value:r},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},g=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=d(a),g=n,m=s["".concat(p,".").concat(g)]||s[g]||u[g]||o;return a?t.createElement(m,i(i({ref:r},c),{},{components:a})):t.createElement(m,i({ref:r},c))}));function m(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=g;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l[s]="string"==typeof e?e:n,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"},143998:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var t=a(58168),n=(a(296540),a(15680));const o={title:"Build Docker Image",language:"en"},i=void 0,l={unversionedId:"install/(delete)construct-docker/build-docker-image",id:"version-2.0/install/(delete)construct-docker/build-docker-image",title:"Build Docker Image",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/install/(delete)construct-docker/build-docker-image.md",sourceDirName:"install/(delete)construct-docker",slug:"/install/(delete)construct-docker/build-docker-image",permalink:"/zh-CN/docs/2.0/install/(delete)construct-docker/build-docker-image",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Build Docker Image",language:"en"}},p={},d=[{value:"Software and Hardware Requirements",id:"software-and-hardware-requirements",level:2},{value:"Overview",id:"overview",level:3},{value:"Hardware Requirements",id:"hardware-requirements",level:3},{value:"Software Requirements",id:"software-requirements",level:3},{value:"Build Docker Image",id:"build-docker-image-1",level:2},{value:"Script Preparation",id:"script-preparation",level:3},{value:"Prepare Binary Package",id:"prepare-binary-package",level:3},{value:"Steps",id:"steps",level:3},{value:"Build FE",id:"build-fe",level:4},{value:"Build BE",id:"build-be",level:4},{value:"Build Broker",id:"build-broker",level:4},{value:"Push Image to DockerHub or Private Warehouse",id:"push-image-to-dockerhub-or-private-warehouse",level:2}],c={toc:d},s="wrapper";function u(e){let{components:r,...a}=e;return(0,n.yg)(s,(0,t.A)({},c,a,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"build-docker-image"},"Build Docker Image"),(0,n.yg)("p",null,"This topic is about how to build a running image of Apache Doris through Dockerfile, so that an Apache Doris image can be quickly pulled in a container orchestration tool or during a quick test to complete the cluster creation."),(0,n.yg)("h2",{id:"software-and-hardware-requirements"},"Software and Hardware Requirements"),(0,n.yg)("h3",{id:"overview"},"Overview"),(0,n.yg)("p",null,"Prepare the production machine before building a Docker image. The platform architecture of the Docker image will be the same as that of the machine. For example, if you use an X86_64 machine to build a Docker image, you need to download the Doris binary program of X86_64, and the Docker image built can only run on the X86_64 platform. The ARM platform (or M1), likewise."),(0,n.yg)("h3",{id:"hardware-requirements"},"Hardware Requirements"),(0,n.yg)("p",null,"Minimum configuration: 2C 4G"),(0,n.yg)("p",null,"Recommended configuration: 4C 16G"),(0,n.yg)("h3",{id:"software-requirements"},"Software Requirements"),(0,n.yg)("p",null,"Docker Version: 20.10 or newer"),(0,n.yg)("h2",{id:"build-docker-image-1"},"Build Docker Image"),(0,n.yg)("p",null,"During Dockerfile scripting, please note that:"),(0,n.yg)("blockquote",null,(0,n.yg)("ol",{parentName:"blockquote"},(0,n.yg)("li",{parentName:"ol"},"Use the official OpenJDK image certified by Docker-Hub as the base parent image (Version: JDK 1.8)."),(0,n.yg)("li",{parentName:"ol"},"Use the official binary package for download; do not use binary packages from unknown sources."),(0,n.yg)("li",{parentName:"ol"},"Use embedded scripts for tasks such as FE startup, multi-FE registration, FE status check, BE startup, registration of BE to FE, and BE status check."),(0,n.yg)("li",{parentName:"ol"},"Do not use ",(0,n.yg)("inlineCode",{parentName:"li"},"--daemon"),"  to start applications in Docker. Otherwise there will be exceptions during the deployment of orchestration tools such as K8S."))),(0,n.yg)("p",null,"Apache Doris 1.2 and the subsequent versions support JavaUDF, so you also need a JDK environment for BE. The recommended images are as follows:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Doris Program"),(0,n.yg)("th",{parentName:"tr",align:null},"Recommended Base Parent Image"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Frontend"),(0,n.yg)("td",{parentName:"tr",align:null},"openjdk:8u342-jdk")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Backend"),(0,n.yg)("td",{parentName:"tr",align:null},"openjdk:8u342-jdk")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Broker"),(0,n.yg)("td",{parentName:"tr",align:null},"openjdk:8u342-jdk")))),(0,n.yg)("h3",{id:"script-preparation"},"Script Preparation"),(0,n.yg)("p",null,"In the Dockerfile script for compiling the Docker Image, there are two methods to load the binary package of the Apache Doris program:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Execute the download command via wget / curl when compiling, and then start the docker build process."),(0,n.yg)("li",{parentName:"ol"},"Download the binary package to the compilation directory in advance, and then load it into the docker build process through the ADD or COPY command.")),(0,n.yg)("p",null,"Method 1 can produce a smaller Docker image, but if the docker build process fails, the download operation might be repeated and result in longer build time; Method 2 is more suitable for less-than-ideal network environments."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"The examples below are based on Method 2. If you prefer to go for Method 1, you may modify the steps accordingly.")),(0,n.yg)("h3",{id:"prepare-binary-package"},"Prepare Binary Package"),(0,n.yg)("p",null,"Please noted that if you have a need for custom development, you need to modify the source code, ",(0,n.yg)("a",{parentName:"p",href:"../source-install/compilation-general.md"},"compile")," and package it, and then place it in the build directory."),(0,n.yg)("p",null,"If you have no such needs, you can just ",(0,n.yg)("a",{parentName:"p",href:"https://doris.apache.org/download"},"download")," the binary package from the official website."),(0,n.yg)("h3",{id:"steps"},"Steps"),(0,n.yg)("h4",{id:"build-fe"},"Build FE"),(0,n.yg)("p",null,"The build environment directory is as follows:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"\u2514\u2500\u2500 docker-build                                       // build root directory\n     \u2514\u2500\u2500 fe                                            // FE build directory\n         \u251c\u2500\u2500 dockerfile                                // dockerfile script\n         \u2514\u2500\u2500 resource                                  // resource directory\n             \u251c\u2500\u2500 init_fe.sh                            // startup and registration script\n             \u2514\u2500\u2500 apache-doris-x.x.x-bin-fe.tar.gz      // binary package\n")),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Create a build environment directory"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"mkdir -p ./docker-build/fe/resource\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Download ",(0,n.yg)("a",{parentName:"p",href:"https://doris.apache.org/download"},"official binary package"),"/compiled binary package"),(0,n.yg)("p",{parentName:"li"},"Copy the binary package to the ",(0,n.yg)("inlineCode",{parentName:"p"},"./docker-build/fe/resource")," directory")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Write the Dockerfile script for FE"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-powershell"},'# Select the base image\nFROM openjdk:8u342-jdk\n\n# Set environment variables\nENV JAVA_HOME="/usr/local/openjdk-8/" \\\n    PATH="/opt/apache-doris/fe/bin:$PATH"\n\n# Download the software into the image (you can modify based on your own needs)\nADD ./resource/apache-doris-fe-${x.x.x}-bin.tar.gz /opt/\n\nRUN apt-get update && \\\n    apt-get install -y default-mysql-client && \\\n    apt-get clean && \\\n    mkdir /opt/apache-doris && \\\n    cd /opt && \\\n    mv apache-doris-fe-${x.x.x}-bin /opt/apache-doris/fe\n\nADD ./resource/init_fe.sh /opt/apache-doris/fe/bin\nRUN chmod 755 /opt/apache-doris/fe/bin/init_fe.sh\n\nENTRYPOINT ["/opt/apache-doris/fe/bin/init_fe.sh"]\n')),(0,n.yg)("p",{parentName:"li"},"After writing, name it ",(0,n.yg)("inlineCode",{parentName:"p"},"Dockerfile")," and save it to the ",(0,n.yg)("inlineCode",{parentName:"p"},"./docker-build/fe")," directory.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Write the execution script of FE"),(0,n.yg)("p",{parentName:"li"},"You can refer to ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/tree/master/docker/runtime/fe/resource/init_fe.sh"},"init_fe.sh"),"."),(0,n.yg)("p",{parentName:"li"},"After writing, name it ",(0,n.yg)("inlineCode",{parentName:"p"},"init_fe.sh")," and save it to the ",(0,n.yg)("inlineCode",{parentName:"p"},"./docker-build/fe/resouce")," directory.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Execute the build"),(0,n.yg)("p",{parentName:"li"},"Please note that ",(0,n.yg)("inlineCode",{parentName:"p"},"${tagName}")," needs to be replaced with the tag name you want to package and name, such as: ",(0,n.yg)("inlineCode",{parentName:"p"},"apache-doris:1.1.3-fe")),(0,n.yg)("p",{parentName:"li"},"Build FE:"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"cd ./docker-build/fe\ndocker build . -t ${fe-tagName}\n")))),(0,n.yg)("h4",{id:"build-be"},"Build BE"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Create a build environment directory")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"mkdir -p ./docker-build/be/resource\n")),(0,n.yg)("ol",{start:2},(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"The build environment directory is as follows:"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"\u2514\u2500\u2500 docker-build                                            // build root directory\n    \u2514\u2500\u2500 be                                                  // BE build directory\n        \u251c\u2500\u2500 dockerfile                                      // dockerfile script\n        \u2514\u2500\u2500 resource                                        // resource directory\n            \u251c\u2500\u2500 init_be.sh                                  // startup and registration script\n            \u2514\u2500\u2500 apache-doris-x.x.x-bin-x86_64/arm-be.tar.gz // binary package\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Write the Dockerfile script for BE"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-powershell"},'# Select the base image\nFROM openjdk:8u342-jdk\n\n# Set environment variables\nENV JAVA_HOME="/usr/local/openjdk-8/" \\\n    PATH="/opt/apache-doris/be/bin:$PATH"\n\n# Download the software into the image (you can modify based on your own needs)\nADD ./resource/apache-doris-be-${x.x.x}-bin-x86_64.tar.gz /opt/\n\nRUN apt-get update && \\\n    apt-get install -y default-mysql-client && \\\n    apt-get clean && \\\n    mkdir /opt/apache-doris && \\\n    cd /opt && \\\n    mv apache-doris-be-${x.x.x}-bin-x86_64 /opt/apache-doris/be\n\nADD ./resource/init_be.sh /opt/apache-doris/be/bin\nRUN chmod 755 /opt/apache-doris/be/bin/init_be.sh\n\nENTRYPOINT ["/opt/apache-doris/be/bin/init_be.sh"]\n')),(0,n.yg)("p",{parentName:"li"},"After writing, name it ",(0,n.yg)("inlineCode",{parentName:"p"},"Dockerfile")," and save it to the ",(0,n.yg)("inlineCode",{parentName:"p"},"./docker-build/be")," directory")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Write the execution script of BE"),(0,n.yg)("p",{parentName:"li"},"You can refer to ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/tree/master/docker/runtime/be/resource/init_be.sh"},"init_be.sh"),"."),(0,n.yg)("p",{parentName:"li"},"After writing, name it ",(0,n.yg)("inlineCode",{parentName:"p"},"init_be.sh")," and save it to the ",(0,n.yg)("inlineCode",{parentName:"p"},"./docker-build/be/resouce")," directory.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Execute the build"),(0,n.yg)("p",{parentName:"li"},"Please note that ",(0,n.yg)("inlineCode",{parentName:"p"},"${tagName}")," needs to be replaced with the tag name you want to package and name, such as: ",(0,n.yg)("inlineCode",{parentName:"p"},"apache-doris:1.1.3-be")),(0,n.yg)("p",{parentName:"li"},"Build BE:"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"cd ./docker-build/be\ndocker build . -t ${be-tagName}\n")),(0,n.yg)("p",{parentName:"li"},"After the build process is completed, you will see the prompt  ",(0,n.yg)("inlineCode",{parentName:"p"},"Success"),". Then, you can check the built image using the following command."),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"docker images\n")))),(0,n.yg)("h4",{id:"build-broker"},"Build Broker"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Create a build environment directory")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"mkdir -p ./docker-build/broker/resource\n")),(0,n.yg)("ol",{start:2},(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"The build environment directory is as follows:"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"\u2514\u2500\u2500 docker-build                                     // build root directory\n    \u2514\u2500\u2500 broker                                       // BROKER build directory\n        \u251c\u2500\u2500 dockerfile                               // dockerfile script\n        \u2514\u2500\u2500 resource                                 // resource directory\n            \u251c\u2500\u2500 init_broker.sh                       // startup and registration script\n            \u2514\u2500\u2500 apache-doris-x.x.x-bin-broker.tar.gz // binary package\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Write the Dockerfile script for Broker"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-powershell"},'# Select the base image\nFROM openjdk:8u342-jdk\n\n# Set environment variables\nENV JAVA_HOME="/usr/local/openjdk-8/" \\\n    PATH="/opt/apache-doris/broker/bin:$PATH"\n\n# Download the software into the image, where the broker directory is synchronously compressed to the binary package of FE, which needs to be decompressed and repackaged (you can modify based on your own needs)\nADD ./resource/apache_hdfs_broker.tar.gz /opt/\n\nRUN apt-get update && \\\n    apt-get install -y default-mysql-client && \\\n    apt-get clean && \\\n    mkdir /opt/apache-doris && \\\n    cd /opt && \\\n    mv apache_hdfs_broker /opt/apache-doris/broker\n\nADD ./resource/init_broker.sh /opt/apache-doris/broker/bin\nRUN chmod 755 /opt/apache-doris/broker/bin/init_broker.sh\n\nENTRYPOINT ["/opt/apache-doris/broker/bin/init_broker.sh"]\n')),(0,n.yg)("p",{parentName:"li"},"After writing, name it ",(0,n.yg)("inlineCode",{parentName:"p"},"Dockerfile")," and save it to the ",(0,n.yg)("inlineCode",{parentName:"p"},"./docker-build/broker")," directory")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Write the execution script of BE"),(0,n.yg)("p",{parentName:"li"},"You can refer to ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/tree/master/docker/runtime/broker/resource/init_broker.sh"},"init_broker.sh"),"."),(0,n.yg)("p",{parentName:"li"},"After writing, name it ",(0,n.yg)("inlineCode",{parentName:"p"},"init_broker.sh")," and save it to the ",(0,n.yg)("inlineCode",{parentName:"p"},"./docker-build/broker/resouce")," directory.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Execute the build"),(0,n.yg)("p",{parentName:"li"},"Please note that ",(0,n.yg)("inlineCode",{parentName:"p"},"${tagName}")," needs to be replaced with the tag name you want to package and name, such as: ",(0,n.yg)("inlineCode",{parentName:"p"},"apache-doris:1.1.3-broker")),(0,n.yg)("p",{parentName:"li"},"Build Broker:"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"cd ./docker-build/broker\ndocker build . -t ${broker-tagName}\n")),(0,n.yg)("p",{parentName:"li"},"After the build process is completed, you will see the prompt  ",(0,n.yg)("inlineCode",{parentName:"p"},"Success"),". Then, you can check the built image using the following command."),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"docker images\n")))),(0,n.yg)("h2",{id:"push-image-to-dockerhub-or-private-warehouse"},"Push Image to DockerHub or Private Warehouse"),(0,n.yg)("p",null,"Log into your DockerHub account"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"docker login\n")),(0,n.yg)("p",null,"If the login succeeds, you will see the prompt ",(0,n.yg)("inlineCode",{parentName:"p"},"Success")," , and then you can push the Docker image to the warehouse."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"docker push ${tagName}\n")))}u.isMDXComponent=!0}}]);