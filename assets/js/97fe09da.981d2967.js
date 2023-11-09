"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[55507],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=c(r),m=n,k=s["".concat(p,".").concat(m)]||s[m]||u[m]||o;return r?a.createElement(k,i(i({ref:t},d),{},{components:r})):a.createElement(k,i({ref:t},d))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},32923:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={title:"Build Docker Image",language:"en"},i=void 0,l={unversionedId:"install/construct-docker/build-docker-image",id:"version-2.0/install/construct-docker/build-docker-image",title:"Build Docker Image",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/install/construct-docker/build-docker-image.md",sourceDirName:"install/construct-docker",slug:"/install/construct-docker/build-docker-image",permalink:"/docs/install/construct-docker/build-docker-image",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Build Docker Image",language:"en"},sidebar:"docs",previous:{title:"Standard Deployment",permalink:"/docs/install/standard-deployment"},next:{title:"Deploy Docker Cluster",permalink:"/docs/install/construct-docker/run-docker-cluster"}},p={},c=[{value:"Software and Hardware Requirements",id:"software-and-hardware-requirements",level:2},{value:"Overview",id:"overview",level:3},{value:"Hardware Requirements",id:"hardware-requirements",level:3},{value:"Software Requirements",id:"software-requirements",level:3},{value:"Build Docker Image",id:"build-docker-image-1",level:2},{value:"Script Preparation",id:"script-preparation",level:3},{value:"Prepare Binary Package",id:"prepare-binary-package",level:3},{value:"Steps",id:"steps",level:3},{value:"Build FE",id:"build-fe",level:4},{value:"Build BE",id:"build-be",level:4},{value:"Build Broker",id:"build-broker",level:4},{value:"Push Image to DockerHub or Private Warehouse",id:"push-image-to-dockerhub-or-private-warehouse",level:2}],d={toc:c},s="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(s,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"build-docker-image"},"Build Docker Image"),(0,n.kt)("p",null,"This topic is about how to build a running image of Apache Doris through Dockerfile, so that an Apache Doris image can be quickly pulled in a container orchestration tool or during a quick test to complete the cluster creation."),(0,n.kt)("h2",{id:"software-and-hardware-requirements"},"Software and Hardware Requirements"),(0,n.kt)("h3",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Prepare the production machine before building a Docker image. The platform architecture of the Docker image will be the same as that of the machine. For example, if you use an X86_64 machine to build a Docker image, you need to download the Doris binary program of X86_64, and the Docker image built can only run on the X86_64 platform. The ARM platform (or M1), likewise."),(0,n.kt)("h3",{id:"hardware-requirements"},"Hardware Requirements"),(0,n.kt)("p",null,"Minimum configuration: 2C 4G"),(0,n.kt)("p",null,"Recommended configuration: 4C 16G"),(0,n.kt)("h3",{id:"software-requirements"},"Software Requirements"),(0,n.kt)("p",null,"Docker Version: 20.10 or newer"),(0,n.kt)("h2",{id:"build-docker-image-1"},"Build Docker Image"),(0,n.kt)("p",null,"During Dockerfile scripting, please note that:"),(0,n.kt)("blockquote",null,(0,n.kt)("ol",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ol"},"Use the official OpenJDK image certified by Docker-Hub as the base parent image (Version: JDK 1.8)."),(0,n.kt)("li",{parentName:"ol"},"Use the official binary package for download; do not use binary packages from unknown sources."),(0,n.kt)("li",{parentName:"ol"},"Use embedded scripts for tasks such as FE startup, multi-FE registration, FE status check, BE startup, registration of BE to FE, and BE status check."),(0,n.kt)("li",{parentName:"ol"},"Do not use ",(0,n.kt)("inlineCode",{parentName:"li"},"--daemon"),"  to start applications in Docker. Otherwise there will be exceptions during the deployment of orchestration tools such as K8S."))),(0,n.kt)("p",null,"Apache Doris 1.2 and the subsequent versions support JavaUDF, so you also need a JDK environment for BE. The recommended images are as follows:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Doris Program"),(0,n.kt)("th",{parentName:"tr",align:null},"Recommended Base Parent Image"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Frontend"),(0,n.kt)("td",{parentName:"tr",align:null},"openjdk:8u342-jdk")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Backend"),(0,n.kt)("td",{parentName:"tr",align:null},"openjdk:8u342-jdk")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Broker"),(0,n.kt)("td",{parentName:"tr",align:null},"openjdk:8u342-jdk")))),(0,n.kt)("h3",{id:"script-preparation"},"Script Preparation"),(0,n.kt)("p",null,"In the Dockerfile script for compiling the Docker Image, there are two methods to load the binary package of the Apache Doris program:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Execute the download command via wget / curl when compiling, and then start the docker build process."),(0,n.kt)("li",{parentName:"ol"},"Download the binary package to the compilation directory in advance, and then load it into the docker build process through the ADD or COPY command.")),(0,n.kt)("p",null,"Method 1 can produce a smaller Docker image, but if the docker build process fails, the download operation might be repeated and result in longer build time; Method 2 is more suitable for less-than-ideal network environments."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"The examples below are based on Method 2. If you prefer to go for Method 1, you may modify the steps accordingly.")),(0,n.kt)("h3",{id:"prepare-binary-package"},"Prepare Binary Package"),(0,n.kt)("p",null,"Please noted that if you have a need for custom development, you need to modify the source code, ",(0,n.kt)("a",{parentName:"p",href:"/docs/install/source-install/compilation-general"},"compile")," and package it, and then place it in the build directory."),(0,n.kt)("p",null,"If you have no such needs, you can just ",(0,n.kt)("a",{parentName:"p",href:"https://doris.apache.org/download"},"download")," the binary package from the official website."),(0,n.kt)("h3",{id:"steps"},"Steps"),(0,n.kt)("h4",{id:"build-fe"},"Build FE"),(0,n.kt)("p",null,"The build environment directory is as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"\u2514\u2500\u2500 docker-build                                       // build root directory\n     \u2514\u2500\u2500 fe                                            // FE build directory\n         \u251c\u2500\u2500 dockerfile                                // dockerfile script\n         \u2514\u2500\u2500 resource                                  // resource directory\n             \u251c\u2500\u2500 init_fe.sh                            // startup and registration script\n             \u2514\u2500\u2500 apache-doris-x.x.x-bin-fe.tar.gz      // binary package\n")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a build environment directory"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir -p ./docker-build/fe/resource\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Download ",(0,n.kt)("a",{parentName:"p",href:"https://doris.apache.org/download"},"official binary package"),"/compiled binary package"),(0,n.kt)("p",{parentName:"li"},"Copy the binary package to the ",(0,n.kt)("inlineCode",{parentName:"p"},"./docker-build/fe/resource")," directory")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Write the Dockerfile script for FE"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},'# Select the base image\nFROM openjdk:8u342-jdk\n\n# Set environment variables\nENV JAVA_HOME="/usr/local/openjdk-8/" \\\n    PATH="/opt/apache-doris/fe/bin:$PATH"\n\n# Download the software into the image (you can modify based on your own needs)\nADD ./resource/apache-doris-fe-${x.x.x}-bin.tar.gz /opt/\n\nRUN apt-get update && \\\n    apt-get install -y default-mysql-client && \\\n    apt-get clean && \\\n    mkdir /opt/apache-doris && \\\n    cd /opt && \\\n    mv apache-doris-fe-${x.x.x}-bin /opt/apache-doris/fe\n\nADD ./resource/init_fe.sh /opt/apache-doris/fe/bin\nRUN chmod 755 /opt/apache-doris/fe/bin/init_fe.sh\n\nENTRYPOINT ["/opt/apache-doris/fe/bin/init_fe.sh"]\n')),(0,n.kt)("p",{parentName:"li"},"After writing, name it ",(0,n.kt)("inlineCode",{parentName:"p"},"Dockerfile")," and save it to the ",(0,n.kt)("inlineCode",{parentName:"p"},"./docker-build/fe")," directory.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Write the execution script of FE"),(0,n.kt)("p",{parentName:"li"},"You can refer to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/tree/master/docker/runtime/fe/resource/init_fe.sh"},"init_fe.sh"),"."),(0,n.kt)("p",{parentName:"li"},"After writing, name it ",(0,n.kt)("inlineCode",{parentName:"p"},"init_fe.sh")," and save it to the ",(0,n.kt)("inlineCode",{parentName:"p"},"./docker-build/fe/resouce")," directory.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Execute the build"),(0,n.kt)("p",{parentName:"li"},"Please note that ",(0,n.kt)("inlineCode",{parentName:"p"},"${tagName}")," needs to be replaced with the tag name you want to package and name, such as: ",(0,n.kt)("inlineCode",{parentName:"p"},"apache-doris:1.1.3-fe")),(0,n.kt)("p",{parentName:"li"},"Build FE:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"cd ./docker-build/fe\ndocker build . -t ${fe-tagName}\n")))),(0,n.kt)("h4",{id:"build-be"},"Build BE"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create a build environment directory")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir -p ./docker-build/be/resource\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The build environment directory is as follows:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"\u2514\u2500\u2500 docker-build                                            // build root directory\n    \u2514\u2500\u2500 be                                                  // BE build directory\n        \u251c\u2500\u2500 dockerfile                                      // dockerfile script\n        \u2514\u2500\u2500 resource                                        // resource directory\n            \u251c\u2500\u2500 init_be.sh                                  // startup and registration script\n            \u2514\u2500\u2500 apache-doris-x.x.x-bin-x86_64/arm-be.tar.gz // binary package\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Write the Dockerfile script for BE"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},'# Select the base image\nFROM openjdk:8u342-jdk\n\n# Set environment variables\nENV JAVA_HOME="/usr/local/openjdk-8/" \\\n    PATH="/opt/apache-doris/be/bin:$PATH"\n\n# Download the software into the image (you can modify based on your own needs)\nADD ./resource/apache-doris-be-${x.x.x}-bin-x86_64.tar.gz /opt/\n\nRUN apt-get update && \\\n    apt-get install -y default-mysql-client && \\\n    apt-get clean && \\\n    mkdir /opt/apache-doris && \\\n    cd /opt && \\\n    mv apache-doris-be-${x.x.x}-bin-x86_64 /opt/apache-doris/be\n\nADD ./resource/init_be.sh /opt/apache-doris/be/bin\nRUN chmod 755 /opt/apache-doris/be/bin/init_be.sh\n\nENTRYPOINT ["/opt/apache-doris/be/bin/init_be.sh"]\n')),(0,n.kt)("p",{parentName:"li"},"After writing, name it ",(0,n.kt)("inlineCode",{parentName:"p"},"Dockerfile")," and save it to the ",(0,n.kt)("inlineCode",{parentName:"p"},"./docker-build/be")," directory")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Write the execution script of BE"),(0,n.kt)("p",{parentName:"li"},"You can refer to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/tree/master/docker/runtime/be/resource/init_be.sh"},"init_be.sh"),"."),(0,n.kt)("p",{parentName:"li"},"After writing, name it ",(0,n.kt)("inlineCode",{parentName:"p"},"init_be.sh")," and save it to the ",(0,n.kt)("inlineCode",{parentName:"p"},"./docker-build/be/resouce")," directory.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Execute the build"),(0,n.kt)("p",{parentName:"li"},"Please note that ",(0,n.kt)("inlineCode",{parentName:"p"},"${tagName}")," needs to be replaced with the tag name you want to package and name, such as: ",(0,n.kt)("inlineCode",{parentName:"p"},"apache-doris:1.1.3-be")),(0,n.kt)("p",{parentName:"li"},"Build BE:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"cd ./docker-build/be\ndocker build . -t ${be-tagName}\n")),(0,n.kt)("p",{parentName:"li"},"After the build process is completed, you will see the prompt  ",(0,n.kt)("inlineCode",{parentName:"p"},"Success"),". Then, you can check the built image using the following command."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"docker images\n")))),(0,n.kt)("h4",{id:"build-broker"},"Build Broker"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create a build environment directory")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir -p ./docker-build/broker/resource\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The build environment directory is as follows:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"\u2514\u2500\u2500 docker-build                                     // build root directory\n    \u2514\u2500\u2500 broker                                       // BROKER build directory\n        \u251c\u2500\u2500 dockerfile                               // dockerfile script\n        \u2514\u2500\u2500 resource                                 // resource directory\n            \u251c\u2500\u2500 init_broker.sh                       // startup and registration script\n            \u2514\u2500\u2500 apache-doris-x.x.x-bin-broker.tar.gz // binary package\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Write the Dockerfile script for Broker"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},'# Select the base image\nFROM openjdk:8u342-jdk\n\n# Set environment variables\nENV JAVA_HOME="/usr/local/openjdk-8/" \\\n    PATH="/opt/apache-doris/broker/bin:$PATH"\n\n# Download the software into the image, where the broker directory is synchronously compressed to the binary package of FE, which needs to be decompressed and repackaged (you can modify based on your own needs)\nADD ./resource/apache_hdfs_broker.tar.gz /opt/\n\nRUN apt-get update && \\\n    apt-get install -y default-mysql-client && \\\n    apt-get clean && \\\n    mkdir /opt/apache-doris && \\\n    cd /opt && \\\n    mv apache_hdfs_broker /opt/apache-doris/broker\n\nADD ./resource/init_broker.sh /opt/apache-doris/broker/bin\nRUN chmod 755 /opt/apache-doris/broker/bin/init_broker.sh\n\nENTRYPOINT ["/opt/apache-doris/broker/bin/init_broker.sh"]\n')),(0,n.kt)("p",{parentName:"li"},"After writing, name it ",(0,n.kt)("inlineCode",{parentName:"p"},"Dockerfile")," and save it to the ",(0,n.kt)("inlineCode",{parentName:"p"},"./docker-build/broker")," directory")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Write the execution script of BE"),(0,n.kt)("p",{parentName:"li"},"You can refer to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/tree/master/docker/runtime/broker/resource/init_broker.sh"},"init_broker.sh"),"."),(0,n.kt)("p",{parentName:"li"},"After writing, name it ",(0,n.kt)("inlineCode",{parentName:"p"},"init_broker.sh")," and save it to the ",(0,n.kt)("inlineCode",{parentName:"p"},"./docker-build/broker/resouce")," directory.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Execute the build"),(0,n.kt)("p",{parentName:"li"},"Please note that ",(0,n.kt)("inlineCode",{parentName:"p"},"${tagName}")," needs to be replaced with the tag name you want to package and name, such as: ",(0,n.kt)("inlineCode",{parentName:"p"},"apache-doris:1.1.3-broker")),(0,n.kt)("p",{parentName:"li"},"Build Broker:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"cd ./docker-build/broker\ndocker build . -t ${broker-tagName}\n")),(0,n.kt)("p",{parentName:"li"},"After the build process is completed, you will see the prompt  ",(0,n.kt)("inlineCode",{parentName:"p"},"Success"),". Then, you can check the built image using the following command."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"docker images\n")))),(0,n.kt)("h2",{id:"push-image-to-dockerhub-or-private-warehouse"},"Push Image to DockerHub or Private Warehouse"),(0,n.kt)("p",null,"Log into your DockerHub account"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"docker login\n")),(0,n.kt)("p",null,"If the login succeeds, you will see the prompt ",(0,n.kt)("inlineCode",{parentName:"p"},"Success")," , and then you can push the Docker image to the warehouse."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"docker push ${tagName}\n")))}u.isMDXComponent=!0}}]);