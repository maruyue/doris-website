"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[99835],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,k=m["".concat(o,".").concat(u)]||m[u]||d[u]||l;return a?n.createElement(k,s(s({ref:t},c),{},{components:a})):n.createElement(k,s({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[m]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<l;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},77377:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={title:"GRANT",language:"en"},s=void 0,i={unversionedId:"sql-manual/sql-reference/Account-Management-Statements/GRANT",id:"sql-manual/sql-reference/Account-Management-Statements/GRANT",title:"GRANT",description:"\x3c!--",source:"@site/docs/sql-manual/sql-reference/Account-Management-Statements/GRANT.md",sourceDirName:"sql-manual/sql-reference/Account-Management-Statements",slug:"/sql-manual/sql-reference/Account-Management-Statements/GRANT",permalink:"/docs/dev/sql-manual/sql-reference/Account-Management-Statements/GRANT",draft:!1,tags:[],version:"current",frontMatter:{title:"GRANT",language:"en"},sidebar:"docs",previous:{title:"LDAP",permalink:"/docs/dev/sql-manual/sql-reference/Account-Management-Statements/LDAP"},next:{title:"REVOKE",permalink:"/docs/dev/sql-manual/sql-reference/Account-Management-Statements/REVOKE"}},o={},p=[{value:"GRANT",id:"grant",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:p},m="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"grant"},"GRANT"),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("p",null,"GRANT"),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"The GRANT command has the following functions:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Grant the specified permissions to a user or role."),(0,r.kt)("li",{parentName:"ol"},"Grant the specified role to a user.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note that."),(0,r.kt)("p",{parentName:"blockquote"},'"Grant specified roles to user" is supported in versions 2.0 and later')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT privilege_list ON priv_level TO user_identity [ROLE role_name]\n\nGRANT privilege_list ON RESOURCE resource_name TO user_identity [ROLE role_name]\n\nGRANT role_list TO user_identity\n")),(0,r.kt)("version",{since:"dev"},"GRANT privilege_list ON WORKLOAD GROUP workload_group_name TO user_identity [ROLE role_name]"),(0,r.kt)("p",null,"privilege_list is a list of privileges to be granted, separated by commas. Currently Doris supports the following permissions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"NODE_PRIV: Cluster node operation permissions, including node online and offline operations. Only the root user has this permission and cannot be granted to other users.\nADMIN_PRIV: All privileges except NODE_PRIV.\nGRANT_PRIV: Privilege for operation privileges. Including creating and deleting users, roles, authorization and revocation, setting passwords, etc.\nSELECT_PRIV: read permission on the specified database or table\nLOAD_PRIV: Import privileges on the specified database or table\nALTER_PRIV: Schema change permission for the specified database or table\nCREATE_PRIV: Create permission on the specified database or table\nDROP_PRIV: drop privilege on the specified database or table\nUSAGE_PRIV: access to the specified resource\n\nALL and READ_WRITE in legacy permissions will be converted to: SELECT_PRIV,LOAD_PRIV,ALTER_PRIV,CREATE_PRIV,DROP_PRIV;\nREAD_ONLY is converted to SELECT_PRIV.\n")),(0,r.kt)("p",null,"Permission classification:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'1. Node Privilege: NODE_PRIV\n2. database table permissions: SELECT_PRIV, LOAD_PRIV, ALTER_PRIV, CREATE_PRIV, DROP_PRIV\n3. Resource  <version since="dev" type="inline" >and workload groups</version> Privilege: USAGE_PRIV\n')),(0,r.kt)("p",null,"Priv_level supports the following four forms:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"1. *.*.* permissions can be applied to all catalogs, all databases and all tables in them\n2. catalog_name.*.* permissions can be applied to all databases and all tables in them\n3. catalog_name.db.* permissions can be applied to all tables under the specified database\n4. catalog_name.db.tbl permission can be applied to the specified table under the specified database\n\nThe catalog or database, table specified here may be not exist.\n")),(0,r.kt)("p",null,"resource_name supports the following two forms:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"1. * Permissions apply to all resources\n2. The resource permission applies to the specified resource\n\nThe resource specified here can be a non-existing resource. In addition, please distinguish the resources here from external tables, and use catalog as an alternative if you use external tables.\n")),(0,r.kt)("p",null,"workload",(0,r.kt)("em",{parentName:"p"},"group_name specifies the workload group name and supports ",(0,r.kt)("inlineCode",{parentName:"em"},"%")," and `"),(0,r.kt)("inlineCode",{parentName:"p"},"match characters,"),"%",(0,r.kt)("inlineCode",{parentName:"p"},"can match any string and"),"_` matches any single character."),(0,r.kt)("p",null,"user_identity:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"The user_identity syntax here is the same as CREATE USER. And must be a user_identity created with CREATE USER. The host in user_identity can be a domain name. If it is a domain name, the effective time of the authority may be delayed by about 1 minute.\n\nYou can also assign permissions to the specified ROLE, if the specified ROLE does not exist, it will be created automatically.\n")),(0,r.kt)("p",null,"role_list is the list of roles to be assigned, separated by commas,the specified role must exist."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Grant permissions to all catalog and databases and tables to the user"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT SELECT_PRIV ON *.*.* TO 'jack'@'%';\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Grant permissions to the specified database table to the user"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT SELECT_PRIV,ALTER_PRIV,LOAD_PRIV ON ctl1.db1.tbl1 TO 'jack'@'192.8.%';\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Grant permissions to the specified database table to the role"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT LOAD_PRIV ON ctl1.db1.* TO ROLE 'my_role';\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Grant access to all resources to users"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT USAGE_PRIV ON RESOURCE * TO 'jack'@'%';\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Grant the user permission to use the specified resource"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT USAGE_PRIV ON RESOURCE 'spark_resource' TO 'jack'@'%';\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Grant access to specified resources to roles"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT USAGE_PRIV ON RESOURCE 'spark_resource' TO ROLE 'my_role';\n")))),(0,r.kt)("version",{since:"2.0.0"}),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Grant the specified role to a user"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT 'role1','role2' TO 'jack'@'%';\n")))),(0,r.kt)("version",{since:"dev"}),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Grant the specified workload group 'g1' to user jack"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT USAGE_PRIV ON WORKLOAD GROUP 'g1' TO 'jack'@'%'.\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"match all workload groups granted to user jack"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT USAGE_PRIV ON WORKLOAD GROUP '%' TO 'jack'@'%'.\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"grant the workload group 'g1' to the role my_role"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT USAGE_PRIV ON WORKLOAD GROUP 'g1' TO ROLE 'my_role'.\n")))),(0,r.kt)("h3",{id:"keywords"},"Keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GRANT\n")),(0,r.kt)("h3",{id:"best-practice"},"Best Practice"))}d.isMDXComponent=!0}}]);