"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[74503],{15680:(t,e,a)=>{a.d(e,{xA:()=>u,yg:()=>o});var n=a(296540);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function g(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function y(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var p=n.createContext({}),i=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):g(g({},e),t)),a},u=function(t){var e=i(t.components);return n.createElement(p.Provider,{value:e},t.children)},m="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,u=y(t,["components","mdxType","originalType","parentName"]),m=i(a),N=l,o=m["".concat(p,".").concat(N)]||m[N]||d[N]||r;return a?n.createElement(o,g(g({ref:e},u),{},{components:a})):n.createElement(o,g({ref:e},u))}));function o(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,g=new Array(r);g[0]=N;var y={};for(var p in e)hasOwnProperty.call(e,p)&&(y[p]=e[p]);y.originalType=t,y[m]="string"==typeof t?t:l,g[1]=y;for(var i=2;i<r;i++)g[i]=a[i];return n.createElement.apply(null,g)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},488886:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>g,default:()=>d,frontMatter:()=>r,metadata:()=>y,toc:()=>i});var n=a(58168),l=(a(296540),a(15680));const r={title:"\u4f7f\u7528\u6ce8\u610f",language:"zh-CN"},g=void 0,y={unversionedId:"table-design/data-model/tips",id:"version-2.0/table-design/data-model/tips",title:"\u4f7f\u7528\u6ce8\u610f",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/table-design/data-model/tips.md",sourceDirName:"table-design/data-model",slug:"/table-design/data-model/tips",permalink:"/zh-CN/docs/2.0/table-design/data-model/tips",draft:!1,tags:[],version:"2.0",frontMatter:{title:"\u4f7f\u7528\u6ce8\u610f",language:"zh-CN"},sidebar:"docs",previous:{title:"\u805a\u5408\u6a21\u578b",permalink:"/zh-CN/docs/2.0/table-design/data-model/aggregate"},next:{title:"\u6570\u636e\u7c7b\u578b",permalink:"/zh-CN/docs/2.0/table-design/data-type"}},p={},i=[{value:"\u5efa\u8868\u65f6\u5217\u7c7b\u578b\u5efa\u8bae",id:"\u5efa\u8868\u65f6\u5217\u7c7b\u578b\u5efa\u8bae",level:2},{value:"\u805a\u5408\u6a21\u578b\u7684\u5c40\u9650\u6027",id:"\u805a\u5408\u6a21\u578b\u7684\u5c40\u9650\u6027",level:2},{value:"Unique \u6a21\u578b\u7684\u5199\u65f6\u5408\u5e76\u5b9e\u73b0",id:"unique-\u6a21\u578b\u7684\u5199\u65f6\u5408\u5e76\u5b9e\u73b0",level:2},{value:"Duplicate \u6a21\u578b",id:"duplicate-\u6a21\u578b",level:2},{value:"Key \u5217\u7684\u4e0d\u540c\u610f\u4e49",id:"key-\u5217\u7684\u4e0d\u540c\u610f\u4e49",level:2},{value:"\u6a21\u578b\u9009\u62e9\u5efa\u8bae",id:"\u6a21\u578b\u9009\u62e9\u5efa\u8bae",level:2}],u={toc:i},m="wrapper";function d(t){let{components:e,...a}=t;return(0,l.yg)(m,(0,n.A)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"\u5efa\u8868\u65f6\u5217\u7c7b\u578b\u5efa\u8bae"},"\u5efa\u8868\u65f6\u5217\u7c7b\u578b\u5efa\u8bae"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Key \u5217\u5fc5\u987b\u5728\u6240\u6709 Value \u5217\u4e4b\u524d\u3002")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u5c3d\u91cf\u9009\u62e9\u6574\u578b\u7c7b\u578b\u3002\u56e0\u4e3a\u6574\u578b\u7c7b\u578b\u7684\u8ba1\u7b97\u548c\u67e5\u627e\u6548\u7387\u8fdc\u9ad8\u4e8e\u5b57\u7b26\u4e32\u3002")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u5bf9\u4e8e\u4e0d\u540c\u957f\u5ea6\u7684\u6574\u578b\u7c7b\u578b\u7684\u9009\u62e9\u539f\u5219\uff0c\u9075\u5faa\u591f\u7528\u5373\u53ef\u3002")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u5bf9\u4e8e VARCHAR \u548c STRING \u7c7b\u578b\u7684\u957f\u5ea6\uff0c\u9075\u5faa\u591f\u7528\u5373\u53ef\u3002"))),(0,l.yg)("h2",{id:"\u805a\u5408\u6a21\u578b\u7684\u5c40\u9650\u6027"},"\u805a\u5408\u6a21\u578b\u7684\u5c40\u9650\u6027"),(0,l.yg)("p",null,"\u8fd9\u91cc\u9488\u5bf9 Aggregate \u6a21\u578b\uff0c\u6765\u4ecb\u7ecd\u4e0b\u805a\u5408\u6a21\u578b\u7684\u5c40\u9650\u6027\u3002"),(0,l.yg)("p",null,"\u5728\u805a\u5408\u6a21\u578b\u4e2d\uff0c\u6a21\u578b\u5bf9\u5916\u5c55\u73b0\u7684\uff0c\u662f\u6700\u7ec8\u805a\u5408\u540e\u7684\u6570\u636e\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u4efb\u4f55\u8fd8\u672a\u805a\u5408\u7684\u6570\u636e\uff08\u6bd4\u5982\u8bf4\u4e24\u4e2a\u4e0d\u540c\u5bfc\u5165\u6279\u6b21\u7684\u6570\u636e\uff09\uff0c\u5fc5\u987b\u901a\u8fc7\u67d0\u79cd\u65b9\u5f0f\uff0c\u4ee5\u4fdd\u8bc1\u5bf9\u5916\u5c55\u793a\u7684\u4e00\u81f4\u6027\u3002\u4e3e\u4f8b\u8bf4\u660e\u3002"),(0,l.yg)("p",null,"\u5047\u8bbe\u8868\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"ColumnName"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"AggregationType"),(0,l.yg)("th",{parentName:"tr",align:null},"Comment"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"user_id"),(0,l.yg)("td",{parentName:"tr",align:null},"LARGEINT"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"\u7528\u6237 id")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"date"),(0,l.yg)("td",{parentName:"tr",align:null},"DATE"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"\u6570\u636e\u704c\u5165\u65e5\u671f")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"cost"),(0,l.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,l.yg)("td",{parentName:"tr",align:null},"SUM"),(0,l.yg)("td",{parentName:"tr",align:null},"\u7528\u6237\u603b\u6d88\u8d39")))),(0,l.yg)("p",null,"\u5047\u8bbe\u5b58\u50a8\u5f15\u64ce\u4e2d\u6709\u5982\u4e0b\u4e24\u4e2a\u5df2\u7ecf\u5bfc\u5165\u5b8c\u6210\u7684\u6279\u6b21\u7684\u6570\u636e\uff1a"),(0,l.yg)("p",null,"batch 1"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"user_id"),(0,l.yg)("th",{parentName:"tr",align:null},"date"),(0,l.yg)("th",{parentName:"tr",align:null},"cost"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"10001"),(0,l.yg)("td",{parentName:"tr",align:null},"2017/11/20"),(0,l.yg)("td",{parentName:"tr",align:null},"50")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"10002"),(0,l.yg)("td",{parentName:"tr",align:null},"2017/11/21"),(0,l.yg)("td",{parentName:"tr",align:null},"39")))),(0,l.yg)("p",null,"batch 2"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"user_id"),(0,l.yg)("th",{parentName:"tr",align:null},"date"),(0,l.yg)("th",{parentName:"tr",align:null},"cost"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"10001"),(0,l.yg)("td",{parentName:"tr",align:null},"2017/11/20"),(0,l.yg)("td",{parentName:"tr",align:null},"1")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"10001"),(0,l.yg)("td",{parentName:"tr",align:null},"2017/11/21"),(0,l.yg)("td",{parentName:"tr",align:null},"5")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"10003"),(0,l.yg)("td",{parentName:"tr",align:null},"2017/11/22"),(0,l.yg)("td",{parentName:"tr",align:null},"22")))),(0,l.yg)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u7528\u6237 10001 \u5206\u5c5e\u5728\u4e24\u4e2a\u5bfc\u5165\u6279\u6b21\u4e2d\u7684\u6570\u636e\u8fd8\u6ca1\u6709\u805a\u5408\u3002\u4f46\u662f\u4e3a\u4e86\u4fdd\u8bc1\u7528\u6237\u53ea\u80fd\u67e5\u8be2\u5230\u5982\u4e0b\u6700\u7ec8\u805a\u5408\u540e\u7684\u6570\u636e\uff1a"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"user_id"),(0,l.yg)("th",{parentName:"tr",align:null},"date"),(0,l.yg)("th",{parentName:"tr",align:null},"cost"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"10001"),(0,l.yg)("td",{parentName:"tr",align:null},"2017/11/20"),(0,l.yg)("td",{parentName:"tr",align:null},"51")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"10001"),(0,l.yg)("td",{parentName:"tr",align:null},"2017/11/21"),(0,l.yg)("td",{parentName:"tr",align:null},"5")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"10002"),(0,l.yg)("td",{parentName:"tr",align:null},"2017/11/21"),(0,l.yg)("td",{parentName:"tr",align:null},"39")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"10003"),(0,l.yg)("td",{parentName:"tr",align:null},"2017/11/22"),(0,l.yg)("td",{parentName:"tr",align:null},"22")))),(0,l.yg)("p",null,"\u6211\u4eec\u5728\u67e5\u8be2\u5f15\u64ce\u4e2d\u52a0\u5165\u4e86\u805a\u5408\u7b97\u5b50\uff0c\u6765\u4fdd\u8bc1\u6570\u636e\u5bf9\u5916\u7684\u4e00\u81f4\u6027\u3002"),(0,l.yg)("p",null,"\u53e6\u5916\uff0c\u5728\u805a\u5408\u5217\uff08Value\uff09\u4e0a\uff0c\u6267\u884c\u4e0e\u805a\u5408\u7c7b\u578b\u4e0d\u4e00\u81f4\u7684\u805a\u5408\u7c7b\u67e5\u8be2\u65f6\uff0c\u8981\u6ce8\u610f\u8bed\u610f\u3002\u6bd4\u5982\u5728\u5982\u4e0a\u793a\u4f8b\u4e2d\u6267\u884c\u5982\u4e0b\u67e5\u8be2\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-Plain"},"SELECT MIN(cost) FROM table;\n")),(0,l.yg)("p",null,"\u5f97\u5230\u7684\u7ed3\u679c\u662f 5\uff0c\u800c\u4e0d\u662f 1\u3002"),(0,l.yg)("p",null,"\u540c\u65f6\uff0c\u8fd9\u79cd\u4e00\u81f4\u6027\u4fdd\u8bc1\uff0c\u5728\u67d0\u4e9b\u67e5\u8be2\u4e2d\uff0c\u4f1a\u6781\u5927\u5730\u964d\u4f4e\u67e5\u8be2\u6548\u7387\u3002"),(0,l.yg)("p",null,"\u4ee5\u6700\u57fa\u672c\u7684 count(*) \u67e5\u8be2\u4e3a\u4f8b\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-Plain"},"SELECT COUNT(*) FROM table;\n")),(0,l.yg)("p",null,"\u5728\u5176\u4ed6\u6570\u636e\u5e93\u4e2d\uff0c\u8fd9\u7c7b\u67e5\u8be2\u90fd\u4f1a\u5f88\u5feb\u5730\u8fd4\u56de\u7ed3\u679c\u3002\u56e0\u4e3a\u5728\u5b9e\u73b0\u4e0a\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u5982\u201c\u5bfc\u5165\u65f6\u5bf9\u884c\u8fdb\u884c\u8ba1\u6570\uff0c\u4fdd\u5b58 count \u7684\u7edf\u8ba1\u4fe1\u606f\u201d\uff0c\u6216\u8005\u5728\u67e5\u8be2\u65f6\u201c\u4ec5\u626b\u63cf\u67d0\u4e00\u5217\u6570\u636e\uff0c\u83b7\u5f97 count \u503c\u201d\u7684\u65b9\u5f0f\uff0c\u53ea\u9700\u5f88\u5c0f\u7684\u5f00\u9500\uff0c\u5373\u53ef\u83b7\u5f97\u67e5\u8be2\u7ed3\u679c\u3002\u4f46\u662f\u5728 Doris \u7684\u805a\u5408\u6a21\u578b\u4e2d\uff0c\u8fd9\u79cd\u67e5\u8be2\u7684\u5f00\u9500\u975e\u5e38\u5927\u3002"),(0,l.yg)("p",null,"\u4ee5\u521a\u624d\u7684\u6570\u636e\u4e3a\u4f8b\uff1a"),(0,l.yg)("p",null,"batch 1"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"user_id"),(0,l.yg)("th",{parentName:"tr",align:null},"date"),(0,l.yg)("th",{parentName:"tr",align:null},"cost"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"10001"),(0,l.yg)("td",{parentName:"tr",align:null},"2017/11/20"),(0,l.yg)("td",{parentName:"tr",align:null},"50")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"10002"),(0,l.yg)("td",{parentName:"tr",align:null},"2017/11/21"),(0,l.yg)("td",{parentName:"tr",align:null},"39")))),(0,l.yg)("p",null,"batch 2"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"user_id"),(0,l.yg)("th",{parentName:"tr",align:null},"date"),(0,l.yg)("th",{parentName:"tr",align:null},"cost"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"10001"),(0,l.yg)("td",{parentName:"tr",align:null},"2017/11/20"),(0,l.yg)("td",{parentName:"tr",align:null},"1")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"10001"),(0,l.yg)("td",{parentName:"tr",align:null},"2017/11/21"),(0,l.yg)("td",{parentName:"tr",align:null},"5")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"10003"),(0,l.yg)("td",{parentName:"tr",align:null},"2017/11/22"),(0,l.yg)("td",{parentName:"tr",align:null},"22")))),(0,l.yg)("p",null,"\u56e0\u4e3a\u6700\u7ec8\u7684\u805a\u5408\u7ed3\u679c\u4e3a\uff1a"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"user_id"),(0,l.yg)("th",{parentName:"tr",align:null},"date"),(0,l.yg)("th",{parentName:"tr",align:null},"cost"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"10001"),(0,l.yg)("td",{parentName:"tr",align:null},"2017/11/20"),(0,l.yg)("td",{parentName:"tr",align:null},"51")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"10001"),(0,l.yg)("td",{parentName:"tr",align:null},"2017/11/21"),(0,l.yg)("td",{parentName:"tr",align:null},"5")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"10002"),(0,l.yg)("td",{parentName:"tr",align:null},"2017/11/21"),(0,l.yg)("td",{parentName:"tr",align:null},"39")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"10003"),(0,l.yg)("td",{parentName:"tr",align:null},"2017/11/22"),(0,l.yg)("td",{parentName:"tr",align:null},"22")))),(0,l.yg)("p",null,"\u6240\u4ee5\uff0c",(0,l.yg)("inlineCode",{parentName:"p"},"select count(*) from table;")," \u7684\u6b63\u786e\u7ed3\u679c\u5e94\u8be5\u4e3a 4\u3002\u4f46\u5982\u679c\u53ea\u626b\u63cf ",(0,l.yg)("inlineCode",{parentName:"p"},"user_id")," \u8fd9\u4e00\u5217\uff0c\u5982\u679c\u52a0\u4e0a\u67e5\u8be2\u65f6\u805a\u5408\uff0c\u6700\u7ec8\u5f97\u5230\u7684\u7ed3\u679c\u662f 3\uff0810001, 10002, 10003\uff09\u3002\u800c\u5982\u679c\u4e0d\u52a0\u67e5\u8be2\u65f6\u805a\u5408\uff0c\u5219\u5f97\u5230\u7684\u7ed3\u679c\u662f 5\uff08\u4e24\u6279\u6b21\u4e00\u5171 5 \u884c\u6570\u636e\uff09\u3002\u53ef\u89c1\u8fd9\u4e24\u4e2a\u7ed3\u679c\u90fd\u662f\u4e0d\u5bf9\u7684\u3002"),(0,l.yg)("p",null,"\u4e3a\u4e86\u5f97\u5230\u6b63\u786e\u7684\u7ed3\u679c\uff0c\u5fc5\u987b\u540c\u65f6\u8bfb\u53d6 ",(0,l.yg)("inlineCode",{parentName:"p"},"user_id")," \u548c ",(0,l.yg)("inlineCode",{parentName:"p"},"date")," \u8fd9\u4e24\u5217\u7684\u6570\u636e\uff0c\u518d\u52a0\u4e0a\u67e5\u8be2\u65f6\u805a\u5408\uff0c\u624d\u80fd\u8fd4\u56de 4 \u8fd9\u4e2a\u6b63\u786e\u7684\u7ed3\u679c\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u5728 count(","*",")"," \u67e5\u8be2\u4e2d\uff0c",(0,l.yg)("em",{parentName:"p"},"Doris \u5fc5\u987b\u626b\u63cf\u6240\u6709\u7684 AGGREGATE KEY \u5217\uff08\u8fd9\u91cc\u5c31\u662f",(0,l.yg)("inlineCode",{parentName:"em"},"user_id")," ",(0,l.yg)("inlineCode",{parentName:"em"},"date"),"\uff09\uff0c\u5e76\u4e14\u805a\u5408\u540e\uff0c\u624d\u80fd\u5f97\u5230\u8bed\u610f\u6b63\u786e\u7684\u7ed3\u679c\u3002")," \u5f53\u805a\u5408\u5217\u975e\u5e38\u591a\u65f6\uff0ccount(*) \u67e5\u8be2\u9700\u8981\u626b\u63cf\u5927\u91cf\u7684\u6570\u636e\u3002"),(0,l.yg)("p",null,"\u56e0\u6b64\uff0c\u5f53\u4e1a\u52a1\u4e0a\u6709\u9891\u7e41\u7684 count(","*",")"," \u67e5\u8be2\u65f6\uff0c\u5efa\u8bae\u7528\u6237\u901a\u8fc7\u589e\u52a0\u4e00\u4e2a\u503c\u6052\u4e3a 1 \u7684\uff0c\u805a\u5408\u7c7b\u578b\u4e3a SUM \u7684\u5217\u6765\u6a21\u62df count(*)\u3002\u5982\u521a\u624d\u7684\u4f8b\u5b50\u4e2d\u7684\u8868\u7ed3\u6784\uff0c\u6211\u4eec\u4fee\u6539\u5982\u4e0b\uff1a"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"ColumnName"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"AggregateType"),(0,l.yg)("th",{parentName:"tr",align:null},"Comment"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"user_id"),(0,l.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"\u7528\u6237 id")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"date"),(0,l.yg)("td",{parentName:"tr",align:null},"DATE"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"\u6570\u636e\u704c\u5165\u65e5\u671f")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"cost"),(0,l.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,l.yg)("td",{parentName:"tr",align:null},"SUM"),(0,l.yg)("td",{parentName:"tr",align:null},"\u7528\u6237\u603b\u6d88\u8d39")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"count"),(0,l.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,l.yg)("td",{parentName:"tr",align:null},"SUM"),(0,l.yg)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u8ba1\u7b97 count")))),(0,l.yg)("p",null,"\u589e\u52a0\u4e00\u4e2a count \u5217\uff0c\u5e76\u4e14\u5bfc\u5165\u6570\u636e\u4e2d\uff0c\u8be5\u5217\u503c\u6052\u4e3a 1\u3002\u5219 ",(0,l.yg)("inlineCode",{parentName:"p"},"select count(*) from table;")," \u7684\u7ed3\u679c\u7b49\u4ef7\u4e8e ",(0,l.yg)("inlineCode",{parentName:"p"},"select sum(count) from table;"),"\u3002\u800c\u540e\u8005\u7684\u67e5\u8be2\u6548\u7387\u5c06\u8fdc\u9ad8\u4e8e\u524d\u8005\u3002\u4e0d\u8fc7\u8fd9\u79cd\u65b9\u5f0f\u4e5f\u6709\u4f7f\u7528\u9650\u5236\uff0c\u5c31\u662f\u7528\u6237\u9700\u8981\u81ea\u884c\u4fdd\u8bc1\uff0c\u4e0d\u4f1a\u91cd\u590d\u5bfc\u5165 AGGREGATE KEY \u5217\u90fd\u76f8\u540c\u5730\u884c\u3002\u5426\u5219\uff0c",(0,l.yg)("inlineCode",{parentName:"p"},"select sum(count) from table;")," \u53ea\u80fd\u8868\u8ff0\u539f\u59cb\u5bfc\u5165\u7684\u884c\u6570\uff0c\u800c\u4e0d\u662f ",(0,l.yg)("inlineCode",{parentName:"p"},"select count(*) from table;")," \u7684\u8bed\u4e49\u3002"),(0,l.yg)("p",null,"\u53e6\u4e00\u79cd\u65b9\u5f0f\uff0c\u5c31\u662f\u5c06\u5982\u4e0a\u7684 ",(0,l.yg)("inlineCode",{parentName:"p"},"count")," \u5217\u7684\u805a\u5408\u7c7b\u578b\u6539\u4e3a REPLACE\uff0c\u4e14\u4f9d\u7136\u503c\u6052\u4e3a 1\u3002\u90a3\u4e48 ",(0,l.yg)("inlineCode",{parentName:"p"},"select sum(count) from table;")," \u548c ",(0,l.yg)("inlineCode",{parentName:"p"},"select count(*) from table;")," \u7684\u7ed3\u679c\u5c06\u662f\u4e00\u81f4\u7684\u3002\u5e76\u4e14\u8fd9\u79cd\u65b9\u5f0f\uff0c\u6ca1\u6709\u5bfc\u5165\u91cd\u590d\u884c\u7684\u9650\u5236\u3002"),(0,l.yg)("h2",{id:"unique-\u6a21\u578b\u7684\u5199\u65f6\u5408\u5e76\u5b9e\u73b0"},"Unique \u6a21\u578b\u7684\u5199\u65f6\u5408\u5e76\u5b9e\u73b0"),(0,l.yg)("p",null,"Unique \u6a21\u578b\u7684\u5199\u65f6\u5408\u5e76\u5b9e\u73b0\u6ca1\u6709\u805a\u5408\u6a21\u578b\u7684\u5c40\u9650\u6027\uff0c\u8fd8\u662f\u4ee5\u521a\u624d\u7684\u6570\u636e\u4e3a\u4f8b\uff0c\u5199\u65f6\u5408\u5e76\u4e3a\u6bcf\u6b21\u5bfc\u5165\u7684 rowset \u589e\u52a0\u4e86\u5bf9\u5e94\u7684 delete bitmap\uff0c\u6765\u6807\u8bb0\u54ea\u4e9b\u6570\u636e\u88ab\u8986\u76d6\u3002\u7b2c\u4e00\u6279\u6570\u636e\u5bfc\u5165\u540e\u72b6\u6001\u5982\u4e0b"),(0,l.yg)("p",null,"batch 1"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"user_id"),(0,l.yg)("th",{parentName:"tr",align:null},"date"),(0,l.yg)("th",{parentName:"tr",align:null},"cost"),(0,l.yg)("th",{parentName:"tr",align:null},"delete bit"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"10001"),(0,l.yg)("td",{parentName:"tr",align:null},"2017/11/20"),(0,l.yg)("td",{parentName:"tr",align:null},"50"),(0,l.yg)("td",{parentName:"tr",align:null},"FALSE")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"10002"),(0,l.yg)("td",{parentName:"tr",align:null},"2017/11/21"),(0,l.yg)("td",{parentName:"tr",align:null},"39"),(0,l.yg)("td",{parentName:"tr",align:null},"FALSE")))),(0,l.yg)("p",null,"\u5f53\u7b2c\u4e8c\u6279\u6570\u636e\u5bfc\u5165\u5b8c\u6210\u540e\uff0c\u7b2c\u4e00\u6279\u6570\u636e\u4e2d\u91cd\u590d\u7684\u884c\u5c31\u4f1a\u88ab\u6807\u8bb0\u4e3a\u5df2\u5220\u9664\uff0c\u6b64\u65f6\u4e24\u6279\u6570\u636e\u72b6\u6001\u5982\u4e0b"),(0,l.yg)("p",null,"batch 1"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"user_id"),(0,l.yg)("th",{parentName:"tr",align:null},"date"),(0,l.yg)("th",{parentName:"tr",align:null},"cost"),(0,l.yg)("th",{parentName:"tr",align:null},"delete bit"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"10001"),(0,l.yg)("td",{parentName:"tr",align:null},"2017/11/20"),(0,l.yg)("td",{parentName:"tr",align:null},"50"),(0,l.yg)("td",{parentName:"tr",align:null},"TRUE")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"10002"),(0,l.yg)("td",{parentName:"tr",align:null},"2017/11/21"),(0,l.yg)("td",{parentName:"tr",align:null},"39"),(0,l.yg)("td",{parentName:"tr",align:null},"FALSE")))),(0,l.yg)("p",null,"batch 2"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"user_id"),(0,l.yg)("th",{parentName:"tr",align:null},"date"),(0,l.yg)("th",{parentName:"tr",align:null},"cost"),(0,l.yg)("th",{parentName:"tr",align:null},"delete bit"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"10001"),(0,l.yg)("td",{parentName:"tr",align:null},"2017/11/20"),(0,l.yg)("td",{parentName:"tr",align:null},"1"),(0,l.yg)("td",{parentName:"tr",align:null},"FALSE")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"10001"),(0,l.yg)("td",{parentName:"tr",align:null},"2017/11/21"),(0,l.yg)("td",{parentName:"tr",align:null},"5"),(0,l.yg)("td",{parentName:"tr",align:null},"FALSE")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"10003"),(0,l.yg)("td",{parentName:"tr",align:null},"2017/11/22"),(0,l.yg)("td",{parentName:"tr",align:null},"22"),(0,l.yg)("td",{parentName:"tr",align:null},"FALSE")))),(0,l.yg)("p",null,"\u5728\u67e5\u8be2\u65f6\uff0c\u6240\u6709\u5728 delete bitmap \u4e2d\u88ab\u6807\u8bb0\u5220\u9664\u7684\u6570\u636e\u90fd\u4e0d\u4f1a\u8bfb\u51fa\u6765\uff0c\u56e0\u6b64\u4e5f\u65e0\u9700\u8fdb\u884c\u505a\u4efb\u4f55\u6570\u636e\u805a\u5408\uff0c\u4e0a\u8ff0\u6570\u636e\u4e2d\u6709\u6548\u5730\u884c\u6570\u4e3a 4 \u884c\uff0c\u67e5\u8be2\u51fa\u7684\u7ed3\u679c\u4e5f\u5e94\u8be5\u662f 4 \u884c\uff0c\u4e5f\u5c31\u53ef\u4ee5\u91c7\u53d6\u5f00\u9500\u6700\u5c0f\u7684\u65b9\u5f0f\u6765\u83b7\u53d6\u7ed3\u679c\uff0c\u5373\u524d\u9762\u63d0\u5230\u7684\u201c\u4ec5\u626b\u63cf\u67d0\u4e00\u5217\u6570\u636e\uff0c\u83b7\u5f97 count \u503c\u201d\u7684\u65b9\u5f0f\u3002"),(0,l.yg)("p",null,"\u5728\u6d4b\u8bd5\u73af\u5883\u4e2d\uff0ccount(*) \u67e5\u8be2\u5728 Unique \u6a21\u578b\u7684\u5199\u65f6\u5408\u5e76\u5b9e\u73b0\u4e0a\u7684\u6027\u80fd\uff0c\u76f8\u6bd4\u805a\u5408\u6a21\u578b\u6709 10 \u500d\u4ee5\u4e0a\u7684\u63d0\u5347\u3002"),(0,l.yg)("h2",{id:"duplicate-\u6a21\u578b"},"Duplicate \u6a21\u578b"),(0,l.yg)("p",null,"Duplicate \u6a21\u578b\u6ca1\u6709\u805a\u5408\u6a21\u578b\u7684\u8fd9\u4e2a\u5c40\u9650\u6027\u3002\u56e0\u4e3a\u8be5\u6a21\u578b\u4e0d\u6d89\u53ca\u805a\u5408\u8bed\u610f\uff0c\u5728\u505a count(*) \u67e5\u8be2\u65f6\uff0c\u4efb\u610f\u9009\u62e9\u4e00\u5217\u67e5\u8be2\uff0c\u5373\u53ef\u5f97\u5230\u8bed\u610f\u6b63\u786e\u7684\u7ed3\u679c\u3002"),(0,l.yg)("h2",{id:"key-\u5217\u7684\u4e0d\u540c\u610f\u4e49"},"Key \u5217\u7684\u4e0d\u540c\u610f\u4e49"),(0,l.yg)("p",null,'Duplicate\u3001Aggregate\u3001Unique \u6a21\u578b\uff0c\u90fd\u4f1a\u5728\u5efa\u8868\u6307\u5b9a Key \u5217\uff0c\u7136\u800c\u5b9e\u9645\u4e0a\u662f\u6709\u6240\u533a\u522b\u7684\uff1a\u5bf9\u4e8e Duplicate \u6a21\u578b\uff0c\u8868\u7684 Key \u5217\uff0c\u53ef\u4ee5\u8ba4\u4e3a\u53ea\u662f "\u6392\u5e8f\u5217"\uff0c\u5e76\u975e\u8d77\u5230\u552f\u4e00\u6807\u8bc6\u7684\u4f5c\u7528\u3002\u800c Aggregate\u3001Unique \u6a21\u578b\u8fd9\u79cd\u805a\u5408\u7c7b\u578b\u7684\u8868\uff0cKey \u5217\u662f\u517c\u987e "\u6392\u5e8f\u5217" \u548c "\u552f\u4e00\u6807\u8bc6\u5217"\uff0c\u662f\u771f\u6b63\u610f\u4e49\u4e0a\u7684 "Key \u5217"\u3002'),(0,l.yg)("h2",{id:"\u6a21\u578b\u9009\u62e9\u5efa\u8bae"},"\u6a21\u578b\u9009\u62e9\u5efa\u8bae"),(0,l.yg)("p",null,"\u56e0\u4e3a\u6570\u636e\u6a21\u578b\u5728\u5efa\u8868\u65f6\u5c31\u5df2\u7ecf\u786e\u5b9a\uff0c\u4e14\u65e0\u6cd5\u4fee\u6539\u3002\u6240\u4ee5\uff0c\u9009\u62e9\u4e00\u4e2a\u5408\u9002\u7684\u6570\u636e\u6a21\u578b\u975e\u5e38\u91cd\u8981\u3002"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Aggregate \u6a21\u578b\u53ef\u4ee5\u901a\u8fc7\u9884\u805a\u5408\uff0c\u6781\u5927\u5730\u964d\u4f4e\u805a\u5408\u67e5\u8be2\u65f6\u6240\u9700\u626b\u63cf\u7684\u6570\u636e\u91cf\u548c\u67e5\u8be2\u7684\u8ba1\u7b97\u91cf\uff0c\u975e\u5e38\u9002\u5408\u6709\u56fa\u5b9a\u6a21\u5f0f\u7684\u62a5\u8868\u7c7b\u67e5\u8be2\u573a\u666f\u3002\u4f46\u662f\u8be5\u6a21\u578b\u5bf9 count(*) \u67e5\u8be2\u5f88\u4e0d\u53cb\u597d\u3002\u540c\u65f6\u56e0\u4e3a\u56fa\u5b9a\u4e86 Value \u5217\u4e0a\u7684\u805a\u5408\u65b9\u5f0f\uff0c\u5728\u8fdb\u884c\u5176\u4ed6\u7c7b\u578b\u7684\u805a\u5408\u67e5\u8be2\u65f6\uff0c\u9700\u8981\u8003\u8651\u8bed\u610f\u6b63\u786e\u6027\u3002")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Unique \u6a21\u578b\u9488\u5bf9\u9700\u8981\u552f\u4e00\u4e3b\u952e\u7ea6\u675f\u7684\u573a\u666f\uff0c\u53ef\u4ee5\u4fdd\u8bc1\u4e3b\u952e\u552f\u4e00\u6027\u7ea6\u675f\u3002\u4f46\u662f\u65e0\u6cd5\u5229\u7528 ROLLUP \u7b49\u9884\u805a\u5408\u5e26\u6765\u7684\u67e5\u8be2\u4f18\u52bf\u3002\u5bf9\u4e8e\u805a\u5408\u67e5\u8be2\u6709\u8f83\u9ad8\u6027\u80fd\u9700\u6c42\u7684\u7528\u6237\uff0c\u63a8\u8350\u4f7f\u7528\u81ea 1.2 \u7248\u672c\u52a0\u5165\u7684\u5199\u65f6\u5408\u5e76\u5b9e\u73b0\u3002")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Duplicate \u9002\u5408\u4efb\u610f\u7ef4\u5ea6\u7684 Ad-hoc \u67e5\u8be2\u3002\u867d\u7136\u540c\u6837\u65e0\u6cd5\u5229\u7528\u9884\u805a\u5408\u7684\u7279\u6027\uff0c\u4f46\u662f\u4e0d\u53d7\u805a\u5408\u6a21\u578b\u7684\u7ea6\u675f\uff0c\u53ef\u4ee5\u53d1\u6325\u5217\u5b58\u6a21\u578b\u7684\u4f18\u52bf\uff08\u53ea\u8bfb\u53d6\u76f8\u5173\u5217\uff0c\u800c\u4e0d\u9700\u8981\u8bfb\u53d6\u6240\u6709 Key \u5217\uff09\u3002")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u5982\u679c\u6709\u90e8\u5206\u5217\u66f4\u65b0\u7684\u9700\u6c42\uff0c\u8bf7\u67e5\u9605\u6587\u6863",(0,l.yg)("a",{parentName:"p",href:"../../data-operate/update/partial-update"},"\u90e8\u5206\u5217\u66f4\u65b0"),"\u83b7\u53d6\u76f8\u5173\u4f7f\u7528\u5efa\u8bae"))))}d.isMDXComponent=!0}}]);