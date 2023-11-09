"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[68849],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>O});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,O=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(O,s(s({ref:t},p),{},{components:n})):r.createElement(O,s({ref:t},p))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75836:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"SHOW-RESTORE",language:"en"},s=void 0,i={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-RESTORE",id:"version-2.0/sql-manual/sql-reference/Show-Statements/SHOW-RESTORE",title:"SHOW-RESTORE",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-reference/Show-Statements/SHOW-RESTORE.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-RESTORE",permalink:"/docs/sql-manual/sql-reference/Show-Statements/SHOW-RESTORE",draft:!1,tags:[],version:"2.0",frontMatter:{title:"SHOW-RESTORE",language:"en"},sidebar:"docs",previous:{title:"SHOW-FRONTENDS-DISKS",permalink:"/docs/sql-manual/sql-reference/Show-Statements/SHOW-FRONTENDS-DISKS"},next:{title:"SHOW-PROPERTY",permalink:"/docs/sql-manual/sql-reference/Show-Statements/SHOW-PROPERTY"}},l={},c=[{value:"SHOW-RESTORE",id:"show-restore",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"show-restore"},"SHOW-RESTORE"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,"SHOW RESTORE"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"This statement is used to view RESTORE tasks"),(0,a.kt)("p",null,"grammar:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-SQL"},"SHOW [BRIEF] RESTORE [FROM DB_NAME]\n")),(0,a.kt)("p",null,"illustrate:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    1. Only the most recent RESTORE task is saved in Doris.\n            2. The meaning of each column is as follows:\n        JobId: Unique job id\n        Label: The name of the backup to restore\n        Timestamp: The time version of the backup to restore\n        DbName: belongs to the database\n        State: current stage\n            PENDING: The initial state after submitting the job\n            SNAPSHOTING: Executing snapshot\n            DOWNLOAD: The snapshot is complete, ready to download the snapshot in the repository\n            DOWNLOADING: Snapshot downloading\n            COMMIT: Snapshot download is complete, ready to take effect\n            COMMITING: in effect\n            FINISHED: The job was successful\n            CANCELLED: Job failed\n        AllowLoad: Whether to allow import when restoring (currently not supported)\n        ReplicationNum: Specifies the number of replicas to restore\n        RestoreJobs: Tables and partitions to restore\n        CreateTime: task submission time\n        MetaPreparedTime: Metadata preparation completion time\n        SnapshotFinishedTime: Snapshot completion time\n        DownloadFinishedTime: Snapshot download completion time\n        FinishedTime: Job finish time\n        UnfinishedTasks: Displays unfinished subtask ids during SNAPSHOTING, DOWNLOADING and COMMITING stages\n        Status: If the job fails, display the failure message\n        Timeout: Job timeout, in seconds\n")),(0,a.kt)("version",{since:"dev"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    2. brief: only show key information of RESTORE tasks, columns RestoreObjs, Progress, TaskErrMsg will not show\n"))),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"View the latest RESTORE task under example_db."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW RESTORE FROM example_db;\n")))),(0,a.kt)("h3",{id:"keywords"},"Keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SHOW, RESTORE\n")),(0,a.kt)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);