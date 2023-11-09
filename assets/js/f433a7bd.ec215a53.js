"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[13370],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=d(r),u=o,f=s["".concat(c,".").concat(u)]||s[u]||m[u]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,a[1]=l;for(var d=2;d<i;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},80938:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=r(87462),o=(r(67294),r(3905));const i={title:"Setting Up Dev Env on Mac for Doris FE - IntelliJ IDEA",language:"en"},a=void 0,l={unversionedId:"developer-guide/mac-dev/fe-idea-dev",id:"developer-guide/mac-dev/fe-idea-dev",title:"Setting Up Dev Env on Mac for Doris FE - IntelliJ IDEA",description:"\x3c!--",source:"@site/community/developer-guide/mac-dev/fe-idea-dev.md",sourceDirName:"developer-guide/mac-dev",slug:"/developer-guide/mac-dev/fe-idea-dev",permalink:"/community/developer-guide/mac-dev/fe-idea-dev",draft:!1,tags:[],version:"current",frontMatter:{title:"Setting Up Dev Env on Mac for Doris FE - IntelliJ IDEA",language:"en"},sidebar:"community",previous:{title:"Setting Up Dev Env on Mac for Doris BE - CLion",permalink:"/community/developer-guide/mac-dev/be-clion-dev"},next:{title:"Java Format Code",permalink:"/community/developer-guide/java-format-code"}},c={},d=[{value:"Open the FE directory of the Doris code",id:"open-the-fe-directory-of-the-doris-code",level:2},{value:"Generate FE code",id:"generate-fe-code",level:2},{value:"Configure Debug FE",id:"configure-debug-fe",level:2},{value:"Start FE",id:"start-fe",level:2}],p={toc:d},s="wrapper";function m(e){let{components:t,...i}=e;return(0,o.kt)(s,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"open-the-fe-directory-of-the-doris-code"},"Open the FE directory of the Doris code"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Here we do not directly open the root directory of the Doris project, but open the FE directory (very important!! In order not to conflict with CLion")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"deployment1",src:r(76359).Z,width:"2136",height:"1628"})),(0,o.kt)("h2",{id:"generate-fe-code"},"Generate FE code"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the IDEA terminal and go to the root directory of the code to execute"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"sh generated-source.sh")),(0,o.kt)("p",{parentName:"li"},"Just wait for Done to be displayed"),(0,o.kt)("p",{parentName:"li"}," ",(0,o.kt)("img",{alt:"deployment2",src:r(65553).Z,width:"3362",height:"1956"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Copy help-resource.zip"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"Enter the dorisdocs directory and execute the following command\ncd doris/docs\nsh build_help_zip.sh\ncp -r build/help-resource.zip ../fe/fe-core/target/classes\n")))),(0,o.kt)("h2",{id:"configure-debug-fe"},"Configure Debug FE"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"select edit configuration"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"deployment3",src:r(61671).Z,width:"538",height:"266"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Add DorisFE configuration"),(0,o.kt)("p",{parentName:"li"},"Add an application configuration with the + sign in the upper left corner. For specific configuration, refer to the figure below"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"deployment4",src:r(70181).Z,width:"2080",height:"1352"})),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Select the fe directory under the source code directory as the working directory"),(0,o.kt)("li",{parentName:"ul"},"Refer to the environment variables of export in ",(0,o.kt)("inlineCode",{parentName:"li"},"fe/bin/start_fe.sh")," in the root directory of the Doris code to configure the environment variables.\nThe Doris directory value of the environment variable points to the directory copied by myself in the preparation work.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Environment variable reference:")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"JAVA_OPTS=-Xmx8092m;\nLOG_DIR=~/DorisDev/doris-run/fe/log;\nPID_DIR=~/DorisDev/doris-run/fe/log;\nDORIS_HOME=~/DorisDev/doris-run/fe\n")),(0,o.kt)("img",{alt:"deployment5",src:r(4381).Z,width:"1902",height:"1262"}))))),(0,o.kt)("h2",{id:"start-fe"},"Start FE"),(0,o.kt)("p",null,"Click Run or Debug to start compiling, and fe will start after compiling"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"deployment6",src:r(59484).Z,width:"3362",height:"1956"})))}m.isMDXComponent=!0},76359:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/mac-idea-deployment1-6a71e6b5d18053343060c5e12b5ebe0c.png"},65553:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/mac-idea-deployment2-74555a6718d55d8fccd866b1226a5b68.png"},61671:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/mac-idea-deployment3-312e48028024a463eed2ab941b141b44.png"},70181:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/mac-idea-deployment4-a436d91762e04253c407c652b0fcdc71.png"},4381:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/mac-idea-deployment5-9b2c80a14c06385d3976ac59d3978a13.png"},59484:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/mac-idea-deployment6-1050e8a64bb894f07c670be63fb73f54.png"}}]);