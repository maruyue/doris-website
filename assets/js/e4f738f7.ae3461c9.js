"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[25789],{15680:(e,t,o)=>{o.d(t,{xA:()=>h,yg:()=>g});var a=o(296540);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=a.createContext({}),d=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},h=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),c=d(o),u=n,g=c["".concat(l,".").concat(u)]||c[u]||p[u]||r;return o?a.createElement(g,i(i({ref:t},h),{},{components:o})):a.createElement(g,i({ref:t},h))}));function g(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var d=2;d<r;d++)i[d]=o[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},580751:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=o(58168),n=(o(296540),o(15680));const r={title:"Install Error",language:"en"},i=void 0,s={unversionedId:"faq/install-faq",id:"version-2.0/faq/install-faq",title:"Install Error",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/faq/install-faq.md",sourceDirName:"faq",slug:"/faq/install-faq",permalink:"/docs/2.0/faq/install-faq",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Install Error",language:"en"},sidebar:"docs",previous:{title:"TPC-H Benchmark",permalink:"/docs/2.0/benchmark/tpch"},next:{title:"Data Operation Error",permalink:"/docs/2.0/faq/data-faq"}},l={},d=[{value:"Q1. Why is there always some tablet left when I log off the BE node through DECOMMISSION?",id:"q1-why-is-there-always-some-tablet-left-when-i-log-off-the-be-node-through-decommission",level:3},{value:"Q2. How should priorty_network be set?",id:"q2-how-should-priorty_network-be-set",level:3},{value:"Q3. What are the Master, Follower and Observer of FE?",id:"q3-what-are-the-master-follower-and-observer-of-fe",level:3},{value:"Q4. A new disk is added to the node, why is the data not balanced to the new disk?",id:"q4-a-new-disk-is-added-to-the-node-why-is-the-data-not-balanced-to-the-new-disk",level:3},{value:"Q5. How to read FE/BE logs correctly?",id:"q5-how-to-read-febe-logs-correctly",level:3},{value:"Q6. How to troubleshoot the FE/BE node is down?",id:"q6-how-to-troubleshoot-the-febe-node-is-down",level:3},{value:"Q7. About the configuration of data directory SSD and HDD, create table encounter error <code>Failed to find enough host with storage medium and tag</code>",id:"q7-about-the-configuration-of-data-directory-ssd-and-hdd-create-table-encounter-error-failed-to-find-enough-host-with-storage-medium-and-tag",level:3},{value:"Q8. Multiple FEs cannot log in when using Nginx to implement web UI load balancing",id:"q8-multiple-fes-cannot-log-in-when-using-nginx-to-implement-web-ui-load-balancing",level:3},{value:"Q9. FE fails to start, &quot;wait catalog to be ready. FE type UNKNOWN&quot; keeps scrolling in fe.log",id:"q9-fe-fails-to-start-wait-catalog-to-be-ready-fe-type-unknown-keeps-scrolling-in-felog",level:3},{value:"Q10. Lost connection to MySQL server at &#39;reading initial communication packet&#39;, system error: 0",id:"q10-lost-connection-to-mysql-server-at-reading-initial-communication-packet-system-error-0",level:3},{value:"Q11. recoveryTracker should overlap or follow on disk last VLSN of 4,422,880 recoveryFirst= 4,422,882 UNEXPECTED_STATE_FATAL",id:"q11-recoverytracker-should-overlap-or-follow-on-disk-last-vlsn-of-4422880-recoveryfirst-4422882-unexpected_state_fatal",level:3},{value:"Q12. Doris compile and install JDK version incompatibility problem",id:"q12-doris-compile-and-install-jdk-version-incompatibility-problem",level:3},{value:"Q13. Error starting FE or unit test locally Cannot find external parser table action_table.dat",id:"q13-error-starting-fe-or-unit-test-locally-cannot-find-external-parser-table-action_tabledat",level:3},{value:"### Q14. Doris upgrades to version 1.0 or later and reports error `<code>Failed to set ciphers to use (2026)</code> in MySQL appearance via ODBC.",id:"-q14-doris-upgrades-to-version-10-or-later-and-reports-error-failed-to-set-ciphers-to-use-2026-in-mysql-appearance-via-odbc",level:3},{value:"Q15. After upgrading to version 1.2, the BE NoClassDefFoundError issue failed to start",id:"q15-after-upgrading-to-version-12-the-be-noclassdeffounderror-issue-failed-to-start",level:3},{value:"Q16. After upgrading to version 1.2, BE startup shows Failed to initialize JNI",id:"q16-after-upgrading-to-version-12-be-startup-shows-failed-to-initialize-jni",level:3},{value:"Q17. Docker: backend fails to start",id:"q17-docker-backend-fails-to-start",level:3}],h={toc:d},c="wrapper";function p(e){let{components:t,...o}=e;return(0,n.yg)(c,(0,a.A)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"operation-and-maintenance-error"},"Operation and Maintenance Error"),(0,n.yg)("p",null,"This document is mainly used to record the common problems of operation and maintenance during the use of Doris. It will be updated from time to time."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"The name of the BE binary that appears in this doc is ",(0,n.yg)("inlineCode",{parentName:"strong"},"doris_be"),", which was ",(0,n.yg)("inlineCode",{parentName:"strong"},"palo_be")," in previous versions.")),(0,n.yg)("h3",{id:"q1-why-is-there-always-some-tablet-left-when-i-log-off-the-be-node-through-decommission"},"Q1. Why is there always some tablet left when I log off the BE node through DECOMMISSION?"),(0,n.yg)("p",null,"During the offline process, use show backends to view the tabletNum of the offline node, and you will observe that the number of tabletNum is decreasing, indicating that data shards are being migrated from this node. When the number is reduced to 0, the system will automatically delete the node. But in some cases, tabletNum will not change after it drops to a certain value. This is usually possible for two reasons:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"The tablets belong to the table, partition, or materialized view that was just dropped. Objects that have just been deleted remain in the recycle bin. The offline logic will not process these shards. The time an object resides in the recycle bin can be modified by modifying the FE configuration parameter catalog_trash_expire_second. These tablets are disposed of when the object is removed from the recycle bin."),(0,n.yg)("li",{parentName:"ol"},"There is a problem with the migration task for these tablets. At this point, you need to view the errors of specific tasks through show proc ",(0,n.yg)("inlineCode",{parentName:"li"},'show proc "/cluster_balance"'),".")),(0,n.yg)("p",null,"For the above situation, you can first check whether there are unhealthy shards in the cluster through ",(0,n.yg)("inlineCode",{parentName:"p"},'show proc "/cluster_health/tablet_health";'),". If it is 0, you can delete the BE directly through the drop backend statement. Otherwise, you also need to check the replicas of unhealthy shards in detail."),(0,n.yg)("h3",{id:"q2-how-should-priorty_network-be-set"},"Q2. How should priorty_network be set?"),(0,n.yg)("p",null,"priorty_network is a configuration parameter for both FE and BE. This parameter is mainly used to help the system select the correct network card IP as its own IP. It is recommended to explicitly set this parameter in any case to prevent the problem of incorrect IP selection caused by adding new network cards to subsequent machines."),(0,n.yg)("p",null,"The value of priorty_network is expressed in CIDR format. Divided into two parts, the first part is the IP address in dotted decimal, and the second part is a prefix length. For example 10.168.1.0/8 will match all 10.xx.xx.xx IP addresses, and 10.168.1.0/16 will match all 10.168.xx.xx IP addresses."),(0,n.yg)("p",null,"The reason why the CIDR format is used instead of specifying a specific IP directly is to ensure that all nodes can use a uniform configuration value. For example, there are two nodes: 10.168.10.1 and 10.168.10.2, then we can use 10.168.10.0/24 as the value of priorty_network."),(0,n.yg)("h3",{id:"q3-what-are-the-master-follower-and-observer-of-fe"},"Q3. What are the Master, Follower and Observer of FE?"),(0,n.yg)("p",null,"First of all, make it clear that FE has only two roles: Follower and Observer. The Master is just an FE selected from a group of Follower nodes. Master can be regarded as a special kind of Follower. So when we were asked how many FEs a cluster had and what roles they were, the correct answer should be the number of all FE nodes, the number of Follower roles and the number of Observer roles."),(0,n.yg)("p",null,"All FE nodes of the Follower role will form an optional group, similar to the group concept in the Paxos consensus protocol. A Follower will be elected as the Master in the group. When the Master hangs up, a new Follower will be automatically selected as the Master. The Observer will not participate in the election, so the Observer will not be called Master."),(0,n.yg)("p",null,"A metadata log needs to be successfully written in most Follower nodes to be considered successful. For example, if there are 3 FEs, only 2 can be successfully written. This is why the number of Follower roles needs to be an odd number."),(0,n.yg)("p",null,"The role of Observer is the same as the meaning of this word. It only acts as an observer to synchronize the metadata logs that have been successfully written, and provides metadata reading services. He will not be involved in the logic of the majority writing."),(0,n.yg)("p",null,"Typically, 1 Follower + 2 Observer or 3 Follower + N Observer can be deployed. The former is simple to operate and maintain, and there is almost no consistency agreement between followers to cause such complex error situations (Most companies use this method). The latter can ensure the high availability of metadata writing. If it is a high concurrent query scenario, Observer can be added appropriately."),(0,n.yg)("h3",{id:"q4-a-new-disk-is-added-to-the-node-why-is-the-data-not-balanced-to-the-new-disk"},"Q4. A new disk is added to the node, why is the data not balanced to the new disk?"),(0,n.yg)("p",null,"The current Doris balancing strategy is based on nodes. That is to say, the cluster load is judged according to the overall load index of the node (number of shards and total disk utilization). And migrate data shards from high-load nodes to low-load nodes. If each node adds a disk, from the overall point of view of the node, the load does not change, so the balancing logic cannot be triggered."),(0,n.yg)("p",null,"In addition, Doris currently does not support balancing operations between disks within a single node. Therefore, after adding a new disk, the data will not be balanced to the new disk."),(0,n.yg)("p",null,"However, when data is migrated between nodes, Doris takes the disk into account. For example, when a shard is migrated from node A to node B, the disk with low disk space utilization in node B will be preferentially selected."),(0,n.yg)("p",null,"Here we provide 3 ways to solve this problem:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Rebuild the new table"),(0,n.yg)("p",{parentName:"li"},"Create a new table through the create table like statement, and then use the insert into select method to synchronize data from the old table to the new table. Because when a new table is created, the data shards of the new table will be distributed in the new disk, so the data will also be written to the new disk. This method is suitable for situations where the amount of data is small (within tens of GB).")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Through the Decommission command"),(0,n.yg)("p",{parentName:"li"},'The decommission command is used to safely decommission a BE node. This command will first migrate the data shards on the node to other nodes, and then delete the node. As mentioned earlier, during data migration, the disk with low disk utilization will be prioritized, so this method can "force" the data to be migrated to the disks of other nodes. When the data migration is completed, we cancel the decommission operation, so that the data will be rebalanced back to this node. When we perform the above steps on all BE nodes, the data will be evenly distributed on all disks of all nodes.'),(0,n.yg)("p",{parentName:"li"},"Note that before executing the decommission command, execute the following command to avoid the node being deleted after being offline."),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},'admin set frontend config("drop_backend_after_decommission" = "false");'))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Manually migrate data using the API"),(0,n.yg)("p",{parentName:"li"},"Doris provides ",(0,n.yg)("a",{parentName:"p",href:"https://doris.apache.org/zh-CN/docs/dev/admin-manual/http-actions/be/tablet-migration"},"HTTP API"),", which can manually specify the migration of data shards on one disk to another disk."))),(0,n.yg)("h3",{id:"q5-how-to-read-febe-logs-correctly"},"Q5. How to read FE/BE logs correctly?"),(0,n.yg)("p",null,"In many cases, we need to troubleshoot problems through logs. The format and viewing method of the FE/BE log are described here."),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"FE"),(0,n.yg)("p",{parentName:"li"},"FE logs mainly include:"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"fe.log: main log. Includes everything except fe.out."),(0,n.yg)("li",{parentName:"ul"},"fe.warn.log: A subset of the main log, only WARN and ERROR level logs are logged."),(0,n.yg)("li",{parentName:"ul"},"fe.out: log for standard/error output (stdout and stderr)."),(0,n.yg)("li",{parentName:"ul"},"fe.audit.log: Audit log, which records all SQL requests received by this FE.")),(0,n.yg)("p",{parentName:"li"},"A typical FE log is as follows:"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-text"},"2021-09-16 23:13:22,502 INFO (tablet scheduler|43) [BeLoadRebalancer.selectAlternativeTabletsForCluster():85] cluster is balance: default_cluster with medium: HDD.skip\n")),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"2021-09-16 23:13:22,502"),": log time."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"INFO: log level, default is INFO"),"."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"(tablet scheduler|43)"),": thread name and thread id. Through the thread id, you can view the context information of this thread and check what happened in this thread."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"BeLoadRebalancer.selectAlternativeTabletsForCluster():85"),": class name, method name and code line number."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"cluster is balance xxx"),": log content.")),(0,n.yg)("p",{parentName:"li"},"Usually, we mainly view the fe.log log. In special cases, some logs may be output to fe.out.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"BE"),(0,n.yg)("p",{parentName:"li"},"BE logs mainly include:"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"be.INFO: main log. This is actually a soft link, connected to the latest be.INFO.xxxx."),(0,n.yg)("li",{parentName:"ul"},"be.WARNING: A subset of the main log, only WARN and FATAL level logs are logged. This is actually a soft link, connected to the latest be.WARN.xxxx."),(0,n.yg)("li",{parentName:"ul"},"be.out: log for standard/error output (stdout and stderr).")),(0,n.yg)("p",{parentName:"li"},"A typical BE log is as follows:"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-text"},"I0916 23:21:22.038795 28087 task_worker_pool.cpp:1594] finish report TASK. master host: 10.10.10.10, port: 9222\n")),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"I0916 23:21:22.038795"),": log level and datetime. The capital letter I means INFO, W means WARN, and F means FATAL."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"28087"),": thread id. Through the thread id, you can view the context information of this thread and check what happened in this thread."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"task_worker_pool.cpp:1594"),": code file and line number."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"finish report TASK xxx"),": log content.")),(0,n.yg)("p",{parentName:"li"},"Usually we mainly look at the be.INFO log. In special cases, such as BE downtime, you need to check be.out."))),(0,n.yg)("h3",{id:"q6-how-to-troubleshoot-the-febe-node-is-down"},"Q6. How to troubleshoot the FE/BE node is down?"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"BE"),(0,n.yg)("p",{parentName:"li"},"The BE process is a C/C++ process, which may hang due to some program bugs (memory out of bounds, illegal address access, etc.) or Out Of Memory (OOM). At this point, we can check the cause of the error through the following steps:"),(0,n.yg)("ol",{parentName:"li"},(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"View be.out"),(0,n.yg)("p",{parentName:"li"},"The BE process realizes that when the program exits due to an exception, it will print the current error stack to be.out (note that it is be.out, not be.INFO or be.WARNING). Through the error stack, you can usually get a rough idea of where the program went wrong."),(0,n.yg)("p",{parentName:"li"},"Note that if there is an error stack in be.out, it is usually due to a program bug, and ordinary users may not be able to solve it by themselves. Welcome to the WeChat group, github discussion or dev mail group for help, and post the corresponding error stack, so that you can quickly Troubleshoot problems.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"dmesg"),(0,n.yg)("p",{parentName:"li"},"If there is no stack information in be.out, the probability is that OOM was forcibly killed by the system. At this time, you can use the dmesg -T command to view the Linux system log. If a log similar to Memory cgroup out of memory: Kill process 7187 (doris_be) score 1007 or sacrifice child appears at the end, it means that it is caused by OOM."),(0,n.yg)("p",{parentName:"li"},"Memory problems can have many reasons, such as large queries, imports, compactions, etc. Doris is also constantly optimizing memory usage. Welcome to the WeChat group, github discussion or dev mail group for help.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Check whether there are logs beginning with F in be.INFO."),(0,n.yg)("p",{parentName:"li"},"Logs starting with F are Fatal logs. For example, F0916 , indicating the Fatal log on September 16th. Fatal logs usually indicate a program assertion error, and an assertion error will directly cause the process to exit (indicating a bug in the program). Welcome to the WeChat group, github discussion or dev mail group for help.")))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"FE"),(0,n.yg)("p",{parentName:"li"},"FE is a java process, and the robustness is better than the C/C++ program. Usually the reason for FE to hang up may be OOM (Out-of-Memory) or metadata write failure. These errors usually have an error stack in fe.log or fe.out. Further investigation is required based on the error stack information."))),(0,n.yg)("h3",{id:"q7-about-the-configuration-of-data-directory-ssd-and-hdd-create-table-encounter-error-failed-to-find-enough-host-with-storage-medium-and-tag"},"Q7. About the configuration of data directory SSD and HDD, create table encounter error ",(0,n.yg)("inlineCode",{parentName:"h3"},"Failed to find enough host with storage medium and tag")),(0,n.yg)("p",null,"Doris supports one BE node to configure multiple storage paths. Usually, one storage path can be configured for each disk. At the same time, Doris supports storage media properties that specify paths, such as SSD or HDD. SSD stands for high-speed storage device and HDD stands for low-speed storage device."),(0,n.yg)("p",null,"If the cluster only has one type of medium, such as all HDD or all SSD, the best practice is not to explicitly specify the medium property in be.conf. If encountering the error ",(0,n.yg)("inlineCode",{parentName:"p"},"Failed to find enough host with storage medium and tag")," mentioned above, it is generally because be.conf only configures the SSD medium, while the table creation stage explicitly specifies ",(0,n.yg)("inlineCode",{parentName:"p"},'properties {"storage_medium" = "hdd"}'),"; similarly, if be.conf only configures the HDD medium, and the table creation stage explicitly specifies ",(0,n.yg)("inlineCode",{parentName:"p"},'properties {"storage_medium" = "ssd"}'),", the same error will occur. The solution is to modify the properties parameter in the table creation to match the configuration; or remove the explicit configuration of SSD/HDD in be.conf."),(0,n.yg)("p",null,"By specifying the storage medium properties of the path, we can take advantage of Doris's hot and cold data partition storage function to store hot data in SSD at the partition level, while cold data is automatically transferred to HDD."),(0,n.yg)("p",null,'It should be noted that Doris does not automatically perceive the actual storage medium type of the disk where the storage path is located. This type needs to be explicitly indicated by the user in the path configuration. For example, the path "/path/to/data1.SSD" means that this path is an SSD storage medium. And "data1.SSD" is the actual directory name. Doris determines the storage media type based on the ".SSD" suffix after the directory name, not the actual storage media type. That is to say, the user can specify any path as the SSD storage medium, and Doris only recognizes the directory suffix and does not judge whether the storage medium matches. If no suffix is written, it will default to HDD.'),(0,n.yg)("p",null,'In other words, ".HDD" and ".SSD" are only used to identify the "relative" "low speed" and "high speed" of the storage directory, not the actual storage medium type. Therefore, if the storage path on the BE node has no medium difference, the suffix does not need to be filled in.'),(0,n.yg)("h3",{id:"q8-multiple-fes-cannot-log-in-when-using-nginx-to-implement-web-ui-load-balancing"},"Q8. Multiple FEs cannot log in when using Nginx to implement web UI load balancing"),(0,n.yg)("p",null,"Doris can deploy multiple FEs. When accessing the Web UI, if Nginx is used for load balancing, there will be a constant prompt to log in again because of the session problem. This problem is actually a problem of session sharing. Nginx provides centralized session sharing. The solution, here we use the ip_hash technology in nginx, ip_hash can direct the request of an ip to the same backend, so that a client and a backend under this ip can establish a stable session, ip_hash is defined in the upstream configuration:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-text"},"upstream doris.com {\n   server 172.22.197.238:8030 weight=3;\n   server 172.22.197.239:8030 weight=4;\n   server 172.22.197.240:8030 weight=4;\n   ip_hash;\n}\n")),(0,n.yg)("p",null,"The complete Nginx example configuration is as follows:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-text"},'user nginx;\nworker_processes auto;\nerror_log /var/log/nginx/error.log;\npid /run/nginx.pid;\n\n# Load dynamic modules. See /usr/share/doc/nginx/README.dynamic.\ninclude /usr/share/nginx/modules/*.conf;\n\nevents {\n    worker_connections 1024;\n}\n\nhttp {\n    log_format main \'$remote_addr - $remote_user [$time_local] "$request" \'\n                      \'$status $body_bytes_sent "$http_referer" \'\n                      \'"$http_user_agent" "$http_x_forwarded_for"\';\n\n    access_log /var/log/nginx/access.log main;\n\n    sendfile on;\n    tcp_nopush on;\n    tcp_nodelay on;\n    keepalive_timeout 65;\n    types_hash_max_size 2048;\n\n    include /etc/nginx/mime.types;\n    default_type application/octet-stream;\n\n    # Load modular configuration files from the /etc/nginx/conf.d directory.\n    # See http://nginx.org/en/docs/ngx_core_module.html#include\n    # for more information.\n    include /etc/nginx/conf.d/*.conf;\n    #include /etc/nginx/custom/*.conf;\n    upstream doris.com {\n      server 172.22.197.238:8030 weight=3;\n      server 172.22.197.239:8030 weight=4;\n      server 172.22.197.240:8030 weight=4;\n      ip_hash;\n    }\n\n    server {\n        listen 80;\n        server_name gaia-pro-bigdata-fe02;\n        if ($request_uri ~ _load) {\n           return 307 http://$host$request_uri ;\n        }\n\n        location / {\n            proxy_pass http://doris.com;\n            proxy_redirect default;\n        }\n        error_page 500 502 503 504 /50x.html;\n        location = /50x.html {\n            root html;\n        }\n    }\n }\n')),(0,n.yg)("h3",{id:"q9-fe-fails-to-start-wait-catalog-to-be-ready-fe-type-unknown-keeps-scrolling-in-felog"},'Q9. FE fails to start, "wait catalog to be ready. FE type UNKNOWN" keeps scrolling in fe.log'),(0,n.yg)("p",null,"There are usually two reasons for this problem:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"The local IP obtained when FE is started this time is inconsistent with the last startup, usually because ",(0,n.yg)("inlineCode",{parentName:"li"},"priority_network")," is not set correctly, which causes FE to match the wrong IP address when it starts. Restart FE after modifying ",(0,n.yg)("inlineCode",{parentName:"li"},"priority_network"),"."),(0,n.yg)("li",{parentName:"ol"},"Most Follower FE nodes in the cluster are not started. For example, there are 3 Followers, and only one is started. At this time, at least one other FE needs to be started, so that the FE electable group can elect the Master to provide services.")),(0,n.yg)("p",null,"If the above situation cannot be solved, you can restore it according to the ","[metadata operation and maintenance document]"," (../admin-manual/maint-monitor/metadata-operation.md) in the Doris official website document."),(0,n.yg)("h3",{id:"q10-lost-connection-to-mysql-server-at-reading-initial-communication-packet-system-error-0"},"Q10. Lost connection to MySQL server at 'reading initial communication packet', system error: 0"),(0,n.yg)("p",null,"If the following problems occur when using MySQL client to connect to Doris, this is usually caused by the different jdk version used when compiling FE and the jdk version used when running FE. Note that when using docker to compile the image, the default JDK version is openjdk 11, and you can switch to openjdk 8 through the command (see the compilation documentation for details)."),(0,n.yg)("h3",{id:"q11-recoverytracker-should-overlap-or-follow-on-disk-last-vlsn-of-4422880-recoveryfirst-4422882-unexpected_state_fatal"},"Q11. recoveryTracker should overlap or follow on disk last VLSN of 4,422,880 recoveryFirst= 4,422,882 UNEXPECTED_STATE_FATAL"),(0,n.yg)("p",null,"Sometimes when FE is restarted, the above error will occur (usually only in the case of multiple Followers). And the two values in the error differ by 2. Causes FE to fail to start."),(0,n.yg)("p",null,"This is a bug in bdbje that has not yet been resolved. In this case, you can only restore the metadata by performing the operation of failure recovery in ",(0,n.yg)("a",{parentName:"p",href:"/docs/2.0/admin-manual/maint-monitor/metadata-operation"},"Metadata Operation and Maintenance Documentation"),"."),(0,n.yg)("h3",{id:"q12-doris-compile-and-install-jdk-version-incompatibility-problem"},"Q12. Doris compile and install JDK version incompatibility problem"),(0,n.yg)("p",null,"When compiling Doris using Docker, start FE after compiling and installing, and the exception message ",(0,n.yg)("inlineCode",{parentName:"p"},"java.lang.Suchmethoderror: java.nio.ByteBuffer.limit (I)Ljava/nio/ByteBuffer;")," appears, this is because the default in Docker It is JDK 11. If your installation environment is using JDK8, you need to switch the JDK environment to JDK8 in Docker. For the specific switching method, please refer to ",(0,n.yg)("a",{parentName:"p",href:"../install/source-install/compilation-general.md"},"Compile Documentation")),(0,n.yg)("h3",{id:"q13-error-starting-fe-or-unit-test-locally-cannot-find-external-parser-table-action_tabledat"},"Q13. Error starting FE or unit test locally Cannot find external parser table action_table.dat"),(0,n.yg)("p",null,"Run the following command"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"cd fe && mvn clean install -DskipTests\n")),(0,n.yg)("p",null,"If the same error is reported, Run the following command"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"cp fe-core/target/generated-sources/cup/org/apache/doris/analysis/action_table.dat fe-core/target/classes/org/apache/doris/analysis\n")),(0,n.yg)("h3",{id:"-q14-doris-upgrades-to-version-10-or-later-and-reports-error-failed-to-set-ciphers-to-use-2026-in-mysql-appearance-via-odbc"},"### Q14. Doris upgrades to version 1.0 or later and reports error `",(0,n.yg)("inlineCode",{parentName:"h3"},"Failed to set ciphers to use (2026)")," in MySQL appearance via ODBC."),(0,n.yg)("p",null,"This problem occurs after doris upgrades to version 1.0 and uses Connector/ODBC 8.0.x or higher. Connector/ODBC 8.0.x has multiple access methods, such as ",(0,n.yg)("inlineCode",{parentName:"p"},"/usr/lib64/libmyodbc8w.so")," which is installed via yum and relies on ",(0,n.yg)("inlineCode",{parentName:"p"}," libssl.so.10")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"libcrypto.so.10"),".\nIn doris 1.0 onwards, openssl has been upgraded to 1.1 and is built into the doris binary package, so this can lead to openssl conflicts and errors like the following"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"ERROR 1105 (HY000): errCode = 2, detailMessage = driver connect Error: HY000 [MySQL][ODBC 8.0(w) Driver]SSL connection error: Failed to set ciphers to use (2026)\n")),(0,n.yg)("p",null,"The solution is to use the ",(0,n.yg)("inlineCode",{parentName:"p"},"Connector/ODBC 8.0.28")," version of ODBC Connector and select ",(0,n.yg)("inlineCode",{parentName:"p"},"Linux - Generic")," in the operating system, this version of ODBC Driver uses openssl version 1.1. Or use a lower version of ODBC connector, e.g. ",(0,n.yg)("a",{parentName:"p",href:"https://dev.mysql.com/downloads/connector/odbc/5.3.html"},"Connector/ODBC 5.3.14"),". For details, see the ",(0,n.yg)("a",{parentName:"p",href:"../lakehouse/external-table/odbc.md"},"ODBC exterior documentation"),"."),(0,n.yg)("p",null,"You can verify the version of openssl used by MySQL ODBC Driver by"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"ldd /path/to/libmyodbc8w.so |grep libssl.so\n")),(0,n.yg)("p",null,"If the output contains ",(0,n.yg)("inlineCode",{parentName:"p"},"libssl.so.10"),", there may be problems using it, if it contains ",(0,n.yg)("inlineCode",{parentName:"p"},"libssl.so.1.1"),", it is compatible with doris 1.0"),(0,n.yg)("h3",{id:"q15-after-upgrading-to-version-12-the-be-noclassdeffounderror-issue-failed-to-start"},"Q15. After upgrading to version 1.2, the BE NoClassDefFoundError issue failed to start"),(0,n.yg)("version",{since:"1.2"}," Java UDF dependency error "),'If the upgrade support starts be, the following Java `NoClassDefFoundError` error occurs ``` Exception in thread "main" java.lang.NoClassDefFoundError: org/apache/doris/udf/IniUtil Caused by: java.lang.ClassNotFoundException: org.apache.doris.udf.JniUtil ``` You need to download the Java UDF function dependency package of `apache-doris-java-udf-jar-with-dependencies-1.2.0` from the official website, put it in the lib directory under the BE installation directory, and then restart BE',(0,n.yg)("h3",{id:"q16-after-upgrading-to-version-12-be-startup-shows-failed-to-initialize-jni"},"Q16. After upgrading to version 1.2, BE startup shows Failed to initialize JNI"),(0,n.yg)("version",{since:"1.2"}),"If the following `Failed to initialize JNI` error occurs when starting BE after upgrading ``` Failed to initialize JNI: Failed to find the library libjvm.so. ``` You need to set the `JAVA_HOME` environment variable, or set `JAVA_HOME` variable in be.conf and restart the BE node.",(0,n.yg)("h3",{id:"q17-docker-backend-fails-to-start"},"Q17. Docker: backend fails to start"),(0,n.yg)("p",null,"This may be due to the CPU not supporting AVX2, check the backend logs with ",(0,n.yg)("inlineCode",{parentName:"p"},"docker logs -f be"),".\nIf the CPU does not support AVX2, the ",(0,n.yg)("inlineCode",{parentName:"p"},"apache/doris:1.2.2-be-x86_64-noavx2")," image must be used,\ninstead of ",(0,n.yg)("inlineCode",{parentName:"p"},"apache/doris:1.2.2-be-x86_64"),".\nNote that the image version number will change over time, check ",(0,n.yg)("a",{parentName:"p",href:"https://registry.hub.docker.com/r/apache/doris/tags?page=1&name=avx2"},"Dockerhub")," for the most recent version."))}p.isMDXComponent=!0}}]);