"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[60589],{15680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>m});var n=t(96540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),y=o,m=u["".concat(s,".").concat(y)]||u[y]||d[y]||a;return t?n.createElement(m,l(l({ref:r},c),{},{components:t})):n.createElement(m,l({ref:r},c))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=y;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},24294:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=t(58168),o=(t(96540),t(15680));const a={title:"Root \u7528\u6237\u4f7f\u7528",language:"zh-CN"},l=void 0,i={unversionedId:"install/k8s-deploy/root-user-use",id:"install/k8s-deploy/root-user-use",title:"Root \u7528\u6237\u4f7f\u7528",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/install/k8s-deploy/root-user-use.md",sourceDirName:"install/k8s-deploy",slug:"/install/k8s-deploy/root-user-use",permalink:"/zh-CN/docs/dev/install/k8s-deploy/root-user-use",draft:!1,tags:[],version:"current",frontMatter:{title:"Root \u7528\u6237\u4f7f\u7528",language:"zh-CN"},sidebar:"docs",previous:{title:"\u6301\u4e45\u5316\u5b58\u50a8 \u4e0e ConfigMap",permalink:"/zh-CN/docs/dev/install/k8s-deploy/persistent-volume"},next:{title:"\u670d\u52a1\u6269\u7f29\u5bb9",permalink:"/zh-CN/docs/dev/install/k8s-deploy/expansion-and-contraction"}},s={},p=[{value:"\u4fee\u6539 root \u8d26\u53f7\u53ca\u5176\u5bc6\u7801",id:"\u4fee\u6539-root-\u8d26\u53f7\u53ca\u5176\u5bc6\u7801",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:3}],c={toc:p},u="wrapper";function d(e){let{components:r,...t}=e;return(0,o.yg)(u,(0,n.A)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Doris-Operator \u5728\u90e8\u7f72\u7ba1\u7406\u76f8\u5173\u670d\u52a1\u8282\u70b9\u4f7f\u7528\u7684\u662f root \u8d26\u53f7\u65e0\u5bc6\u7801\u7684\u6a21\u5f0f\u3002\u7528\u6237\u540d\u5bc6\u7801\u53ea\u6709\u5728\u90e8\u7f72\u540e\u624d\u80fd\u91cd\u65b0\u8bbe\u7f6e\u3002"),(0,o.yg)("h2",{id:"\u4fee\u6539-root-\u8d26\u53f7\u53ca\u5176\u5bc6\u7801"},"\u4fee\u6539 root \u8d26\u53f7\u53ca\u5176\u5bc6\u7801"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"\u53c2\u9605 ",(0,o.yg)("a",{parentName:"p",href:"../../admin-manual/privilege-ldap/user-privilege"},"\u6743\u9650\u7ba1\u7406")," \u6587\u6863\uff0c\u4fee\u6539\u6216\u521b\u5efa\u76f8\u5e94\u5bc6\u7801\u6216\u8d26\u6237\u540d\uff0c\u5e76\u5728 Doris \u4e2d\u7ed9\u4e88\u8be5\u8d26\u53f7\u7ba1\u7406\u8282\u70b9\u7684\u6743\u9650\u3002")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"\u5728 DorisCluster CRD \u6587\u4ef6\u4e2d\u7684\u914d\u7f6e\u6dfb\u52a0 spec.adminUser.* \u6837\u4f8b\u5982\u4e0b\uff1a"))),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"  apiVersion: doris.selectdb.com/v1\n  kind: DorisCluster\n  metadata:\n    annotations:\n      selectdb/doriscluster: doriscluster-sample\n    labels:\n      app.kubernetes.io/instance: doris-sample\n    name: doris-sample\n    namespace: doris\n  spec:\n    adminUser:\n      name: root\n      password: root_pwd\n")),(0,o.yg)("ol",{start:3},(0,o.yg)("li",{parentName:"ol"},"\u5c06\u65b0\u7684\u8d26\u53f7\u548c\u5bc6\u7801\u66f4\u65b0\u5230\u90e8\u7f72\u7684 DorisCluster \u4e2d, \u7ecf\u8fc7 Doris-Operator \u4e0b\u53d1\uff0c\u8ba9\u5404\u4e2a\u8282\u70b9\u611f\u77e5\u5e76\u751f\u6548\u3002\u53c2\u8003\u547d\u4ee4\uff1a")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"  kubectl apply --namespace ${your_namespace} -f ${your_crd_yaml_file} \n")),(0,o.yg)("h3",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"\u96c6\u7fa4\u7ba1\u7406\u8d26\u6237\u662f root \uff0c\u9ed8\u8ba4\u65e0\u5bc6\u7801\u3002"),(0,o.yg)("li",{parentName:"ul"},"\u7528\u6237\u540d\u5bc6\u7801\u53ea\u6709\u5728\u90e8\u7f72\u6210\u529f\u540e\u624d\u80fd\u91cd\u65b0\u8bbe\u7f6e\u3002\u521d\u6b21\u90e8\u7f72\uff0c\u6dfb\u52a0 ",(0,o.yg)("inlineCode",{parentName:"li"},"adminUser")," \u53ef\u80fd\u4f1a\u5bfc\u81f4\u542f\u52a8\u5f02\u5e38\u3002"),(0,o.yg)("li",{parentName:"ul"},"\u4fee\u6539\u7528\u6237\u540d\u548c\u5bc6\u7801\u5e76\u4e0d\u662f\u5fc5\u987b\u7684\u64cd\u4f5c\uff0c\u53ea\u6709\u5728 Doris \u5185\u4fee\u6539\u4e86\u5f53\u524d\u7684\u96c6\u7fa4\u7ba1\u7406\u7684\u7528\u6237\uff08\u9ed8\u8ba4 root \uff09\u6216\u5bc6\u7801\u65f6 \u9700\u8981\u901a\u8fc7 Doris-Operator \u4e0b\u53d1\u3002"),(0,o.yg)("li",{parentName:"ul"},"\u5982\u679c\u4fee\u6539\u7528\u6237\u540d ",(0,o.yg)("inlineCode",{parentName:"li"},"spec.adminUser.name")," \u9700\u8981\u7ed9\u65b0\u7684\u7528\u6237\u5206\u914d\u62e5\u6709\u7ba1\u7406 Doris \u7684\u8282\u70b9\u7684\u6743\u9650\u3002"),(0,o.yg)("li",{parentName:"ul"},"\u6b64\u64cd\u4f5c\u4f1a\u4f9d\u6b21\u91cd\u542f\u6240\u6709\u8282\u70b9\u3002")))}d.isMDXComponent=!0}}]);