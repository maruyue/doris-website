"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[6652],{15680:(e,r,n)=>{n.d(r,{xA:()=>s,yg:()=>p});var t=n(296540);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=t.createContext({}),d=function(e){var r=t.useContext(m),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},s=function(e){var r=d(e.components);return t.createElement(m.Provider,{value:r},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},g=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,l=e.originalType,m=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=d(n),g=o,p=c["".concat(m,".").concat(g)]||c[g]||u[g]||l;return n?t.createElement(p,a(a({ref:r},s),{},{components:n})):t.createElement(p,a({ref:r},s))}));function p(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=g;var i={};for(var m in r)hasOwnProperty.call(r,m)&&(i[m]=r[m]);i.originalType=e,i[c]="string"==typeof e?e:o,a[1]=i;for(var d=2;d<l;d++)a[d]=n[d];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},906093:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>m,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var t=n(58168),o=(n(296540),n(15680));const l={title:"NGram BloomFilter Index",language:"en"},a=void 0,i={unversionedId:"table-design/index/ngram-bloomfilter-index",id:"version-2.0/table-design/index/ngram-bloomfilter-index",title:"NGram BloomFilter Index",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/table-design/index/ngram-bloomfilter-index.md",sourceDirName:"table-design/index",slug:"/table-design/index/ngram-bloomfilter-index",permalink:"/docs/2.0/table-design/index/ngram-bloomfilter-index",draft:!1,tags:[],version:"2.0",frontMatter:{title:"NGram BloomFilter Index",language:"en"},sidebar:"docs",previous:{title:"BloomFilter Index",permalink:"/docs/2.0/table-design/index/bloomfilter"},next:{title:"Bitmap Index",permalink:"/docs/2.0/table-design/index/bitmap-index"}},m={},d=[{value:"Create Column with NGram BloomFilter Index",id:"create-column-with-ngram-bloomfilter-index",level:2},{value:"Show NGram BloomFilter Index",id:"show-ngram-bloomfilter-index",level:2},{value:"Drop NGram BloomFilter Index",id:"drop-ngram-bloomfilter-index",level:2},{value:"Add NGram BloomFilter Index",id:"add-ngram-bloomfilter-index",level:2},{value:"<strong>Some Notes about Doris NGram BloomFilter</strong>",id:"some-notes-about-doris-ngram-bloomfilter",level:2}],s={toc:d},c="wrapper";function u(e){let{components:r,...n}=e;return(0,o.yg)(c,(0,t.A)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"ngram-bloomfilter-index"},"NGram BloomFilter Index"),(0,o.yg)("version",{since:"2.0.0"}),(0,o.yg)("p",null,"In order to improve the like query performance, the NGram BloomFilter index was implemented."),(0,o.yg)("h2",{id:"create-column-with-ngram-bloomfilter-index"},"Create Column with NGram BloomFilter Index"),(0,o.yg)("p",null,"During create table\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE `table3` (\n  `siteid` int(11) NULL DEFAULT "10" COMMENT "",\n  `citycode` smallint(6) NULL COMMENT "",\n  `username` varchar(100) NULL DEFAULT "" COMMENT "",\n  INDEX idx_ngrambf (`username`) USING NGRAM_BF PROPERTIES("gram_size"="3", "bf_size"="256") COMMENT \'username ngram_bf index\'\n) ENGINE=OLAP\nAGGREGATE KEY(`siteid`, `citycode`, `username`) COMMENT "OLAP"\nDISTRIBUTED BY HASH(`siteid`) BUCKETS 10\nPROPERTIES (\n"replication_num" = "1"\n);\n\n-- PROPERTIES("gram_size"="3", "bf_size"="1024")\uff0cindicate the number of gram and bytes of bloom filter respectively.\n-- the gram size set to same as the like query pattern string length. and the suitable bytes of bloom filter can be get by test, more larger more better, 256 maybe is a good start.\n-- Usually, if the data\'s cardinality is small, you can increase the bytes of bloom filter to improve the efficiency.\n')),(0,o.yg)("h2",{id:"show-ngram-bloomfilter-index"},"Show NGram BloomFilter Index"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"show index from example_db.table3;\n")),(0,o.yg)("h2",{id:"drop-ngram-bloomfilter-index"},"Drop NGram BloomFilter Index"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"alter table example_db.table3 drop index idx_ngrambf;\n")),(0,o.yg)("h2",{id:"add-ngram-bloomfilter-index"},"Add NGram BloomFilter Index"),(0,o.yg)("p",null,"Add NGram BloomFilter Index for old column:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},'alter table example_db.table3 add index idx_ngrambf(username) using NGRAM_BF PROPERTIES("gram_size"="3", "bf_size"="512")comment \'username ngram_bf index\' \n')),(0,o.yg)("h2",{id:"some-notes-about-doris-ngram-bloomfilter"},(0,o.yg)("strong",{parentName:"h2"},"Some Notes about Doris NGram BloomFilter")),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"NGram BloomFilter only support CHAR/VARCHAR/String column."),(0,o.yg)("li",{parentName:"ol"},"NGram BloomFilter index and BloomFilter index should be exclusive on same column"),(0,o.yg)("li",{parentName:"ol"},"The gram number and bytes of BloomFilter can be adjust and optimize. Like if gram is too small, you can increase the bytes of BloomFilter."),(0,o.yg)("li",{parentName:"ol"},"To find some query whether use the NGram BloomFilter index, you can check the query profile.")))}u.isMDXComponent=!0}}]);