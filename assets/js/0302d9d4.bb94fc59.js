"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[41627],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var a=n(296540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),d=o,y=s["".concat(c,".").concat(d)]||s[d]||m[d]||r;return n?a.createElement(y,i(i({ref:t},u),{},{components:n})):a.createElement(y,i({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},710866:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(58168),o=(n(296540),n(15680));const r={title:"Alibaba Cloud Max Compute",language:"en"},i=void 0,l={unversionedId:"lakehouse/database/max-compute",id:"version-2.0/lakehouse/database/max-compute",title:"Alibaba Cloud Max Compute",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/lakehouse/database/max-compute.md",sourceDirName:"lakehouse/database",slug:"/lakehouse/database/max-compute",permalink:"/docs/2.0/lakehouse/database/max-compute",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Alibaba Cloud Max Compute",language:"en"},sidebar:"docs",previous:{title:"JDBC",permalink:"/docs/2.0/lakehouse/database/jdbc"},next:{title:"File Analysis",permalink:"/docs/2.0/lakehouse/file"}},c={},p=[{value:"Connect to MaxCompute",id:"connect-to-maxcompute",level:2},{value:"Quotas",id:"quotas",level:2},{value:"Column type mapping",id:"column-type-mapping",level:2},{value:"User-defined service address",id:"user-defined-service-address",level:2}],u={toc:p},s="wrapper";function m(e){let{components:t,...n}=e;return(0,o.yg)(s,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"alibaba-cloud-maxcompute"},"Alibaba Cloud MaxCompute"),(0,o.yg)("p",null,"MaxCompute (previously known as ODPS) is a data warehousing solution that can process terabytes or petabytes of data."),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},(0,o.yg)("a",{parentName:"p",href:"https://www.alibabacloud.com/help/en/maxcompute/product-overview/what-is-maxcompute"},"What is MaxCompute"))),(0,o.yg)("h2",{id:"connect-to-maxcompute"},"Connect to MaxCompute"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG mc PROPERTIES (\n  "type" = "max_compute",\n  "mc.region" = "cn-beijing",\n  "mc.default.project" = "your-project",\n  "mc.access_key" = "ak",\n  "mc.secret_key" = "sk"\n);\n')),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"mc.region"),": MaxCompute Region. Can Get the Region From ",(0,o.yg)("a",{parentName:"li",href:"https://www.alibabacloud.com/help/en/maxcompute/user-guide/endpoints"},"Endpoints"),"."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"mc.default.project"),": MaxCompute Project. See Your ",(0,o.yg)("a",{parentName:"li",href:"https://maxcompute.console.aliyun.com/cn-beijing/project-list"},"MaxCompute Projects"),"."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"mc.access_key"),": AccessKey, which you can create and manage on the ",(0,o.yg)("a",{parentName:"li",href:"https://ram.console.aliyun.com/manage/ak"},"Alibaba Cloud console"),"."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"mc.secret_key"),": SecretKey, which you can create and manage on the ",(0,o.yg)("a",{parentName:"li",href:"https://ram.console.aliyun.com/manage/ak"},"Alibaba Cloud console"),"."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"mc.public_access"),": You can enable public network access for test, when set ",(0,o.yg)("inlineCode",{parentName:"li"},'"mc.public_access"="true"'),".")),(0,o.yg)("h2",{id:"quotas"},"Quotas"),(0,o.yg)("p",null,"Pay-as-you-go quota has limited concurrency and usage. For additional resources, please refer to the documentation. See ",(0,o.yg)("a",{parentName:"p",href:"https://www.alibabacloud.com/help/en/maxcompute/user-guide/manage-quotas-in-the-new-maxcompute-console"},"Manage quotas"),"."),(0,o.yg)("h2",{id:"column-type-mapping"},"Column type mapping"),(0,o.yg)("p",null,"Consistent with Hive Catalog, please refer to the ",(0,o.yg)("strong",{parentName:"p"},"column type mapping")," section in ",(0,o.yg)("a",{parentName:"p",href:"./hive.md"},"Hive Catalog"),"."),(0,o.yg)("h2",{id:"user-defined-service-address"},"User-defined service address"),(0,o.yg)("p",null,"The region property is specified to generate a default endpoint of public network."),(0,o.yg)("p",null,"In addition to default endpoint addresses, Max Compute Catalog also supports custom service addresses in properties."),(0,o.yg)("p",null,"Use the following properties:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"mc.odps_endpoint"),"\uff1aMax Compute Endpoint\u3002"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"mc.tunnel_endpoint"),": Tunnel Endpoint\uff0cMax Compute Catalog uses the Tunnel SDK to obtain data.")),(0,o.yg)("p",null,"For more information about Max Compute Endpoint and Tunnel Endpoint that are used in different regions and network connection modes, see ",(0,o.yg)("a",{parentName:"p",href:"https://www.alibabacloud.com/help/en/maxcompute/user-guide/endpoints"},"Endpoint")),(0,o.yg)("p",null,"For example:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG mc PROPERTIES (\n  "type" = "max_compute",\n  "mc.region" = "cn-beijing",\n  "mc.default.project" = "your-project",\n  "mc.access_key" = "ak",\n  "mc.secret_key" = "sk"\n  "mc.odps_endpoint" = "http://service.cn-beijing.maxcompute.aliyun-inc.com/api",\n  "mc.tunnel_endpoint" = "http://dt.cn-beijing.maxcompute.aliyun-inc.com"\n);\n')))}m.isMDXComponent=!0}}]);