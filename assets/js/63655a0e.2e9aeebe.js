"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[78234],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>h});var a=n(296540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),g=i,h=d["".concat(s,".").concat(g)]||d[g]||c[g]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},856250:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(58168),i=(n(296540),n(15680));const r={title:"LDAP",language:"en"},o=void 0,l={unversionedId:"admin-manual/privilege-ldap/ldap",id:"version-2.0/admin-manual/privilege-ldap/ldap",title:"LDAP",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/admin-manual/privilege-ldap/ldap.md",sourceDirName:"admin-manual/privilege-ldap",slug:"/admin-manual/privilege-ldap/ldap",permalink:"/docs/2.0/admin-manual/privilege-ldap/ldap",draft:!1,tags:[],version:"2.0",frontMatter:{title:"LDAP",language:"en"},sidebar:"docs",previous:{title:"FE SSL certificate",permalink:"/docs/2.0/admin-manual/privilege-ldap/fe-certificate"},next:{title:"Apache Ranger",permalink:"/docs/2.0/admin-manual/privilege-ldap/apache-ranger"}},s={},u=[{value:"Noun Interpretation",id:"noun-interpretation",level:2},{value:"LDAP related concepts",id:"ldap-related-concepts",level:2},{value:"Example (the following introduction will be expanded based on this example)",id:"example-the-following-introduction-will-be-expanded-based-on-this-example",level:3},{value:"Explanation of LDAP Terms",id:"explanation-of-ldap-terms",level:3},{value:"Enable LDAP Authentication",id:"enable-ldap-authentication",level:2},{value:"Server-side Configuration",id:"server-side-configuration",level:3},{value:"Configure the fe/conf/ldap.conf file\uff1a",id:"configure-the-feconfldapconf-file",level:4},{value:"Set the LDAP administrator password:",id:"set-the-ldap-administrator-password",level:4},{value:"Client-side configuration",id:"client-side-configuration",level:3},{value:"MySQL Client",id:"mysql-client",level:4},{value:"Jdbc Client",id:"jdbc-client",level:4},{value:"LDAP authentication detailed explanation",id:"ldap-authentication-detailed-explanation",level:2},{value:"LDAP authentication login details",id:"ldap-authentication-login-details",level:3},{value:"1:Accounts exist in both Doris and LDAP.",id:"1accounts-exist-in-both-doris-and-ldap",level:4},{value:"2:The user exists in LDAP and the corresponding account does not exist in Doris.",id:"2the-user-exists-in-ldap-and-the-corresponding-account-does-not-exist-in-doris",level:4},{value:"3:LDAP does not exist for the user.",id:"3ldap-does-not-exist-for-the-user",level:4},{value:"LDAP group authorization details",id:"ldap-group-authorization-details",level:3},{value:"LDAP information cache",id:"ldap-information-cache",level:3},{value:"Limitations of LDAP authentication",id:"limitations-of-ldap-authentication",level:2},{value:"FAQ",id:"faq",level:2}],p={toc:u},d="wrapper";function c(e){let{components:t,...n}=e;return(0,i.yg)(d,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"ldap"},"LDAP"),(0,i.yg)("p",null,"Access to third-party LDAP services to provide authentication login and group authorization services for Doris."),(0,i.yg)("p",null,"LDAP authentication login complements Doris authentication login by accessing the LDAP service for password authentication; Doris uses LDAP to authenticate the user's password first; if the user does not exist in the LDAP service, it continues to use Doris to authenticate the password; if the LDAP password is correct but there is no corresponding account in Doris, a temporary user is created to log in to Doris."),(0,i.yg)("p",null,"LDAP group authorization, is to map the group in LDAP to the Role in Doris, if the user belongs to multiple user groups in LDAP, after logging into Doris the user will get the permission of all groups corresponding to the Role, requiring the group name to be the same as the Role name."),(0,i.yg)("h2",{id:"noun-interpretation"},"Noun Interpretation"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"LDAP: Lightweight directory access protocol that enables centralized management of account passwords."),(0,i.yg)("li",{parentName:"ul"},"Privilege: Permissions act on nodes, databases or tables. Different permissions represent different permission to operate."),(0,i.yg)("li",{parentName:"ul"},"Role: Doris can create custom named roles. A role can be thought of as a collection of permissions.")),(0,i.yg)("h2",{id:"ldap-related-concepts"},"LDAP related concepts"),(0,i.yg)("p",null,"In LDAP, data is organized in a tree structure."),(0,i.yg)("h3",{id:"example-the-following-introduction-will-be-expanded-based-on-this-example"},"Example (the following introduction will be expanded based on this example)"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"dc=example,dc=com"),(0,i.yg)("li",{parentName:"ul"},"ou = ou1",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"cn = group1"),(0,i.yg)("li",{parentName:"ul"},"cn = user1"))),(0,i.yg)("li",{parentName:"ul"},"ou = ou2",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"cn = group2",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"cn = user2"))))),(0,i.yg)("li",{parentName:"ul"},"cn = user3")),(0,i.yg)("h3",{id:"explanation-of-ldap-terms"},"Explanation of LDAP Terms"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"dc(Domain Component): It can be understood as the domain name of an organization, serving as the root node of a tree"),(0,i.yg)("li",{parentName:"ul"},"dn(Distinguished Name): Equivalent to a unique name, for example, the dn of user1 is cn=user1,ou=ou1,dc=example,dc=com the dn of user2 is cn=user2,cn=group2,ou=ou2,dc=example,dc=com"),(0,i.yg)("li",{parentName:"ul"},"rdn(Relative Distinguished Name): As part of dn, the four rdns of user1 are cn=user1 ou=ou1 dc=example and dc=com"),(0,i.yg)("li",{parentName:"ul"},"ou(Organization Unit): It can be understood as a sub organization, where users can be placed in ou or directly in the example.com domain"),(0,i.yg)("li",{parentName:"ul"},"cn(common name):name"),(0,i.yg)("li",{parentName:"ul"},"group: Group, which can be understood as the role of Doris"),(0,i.yg)("li",{parentName:"ul"},"user: User, equivalent to Doris' user"),(0,i.yg)("li",{parentName:"ul"},"objectClass\uff1aIt can be understood as the type of data in each row, such as how to distinguish whether group1 is a group or a user. Each type of data requires different attributes below, such as CN and member (user list) for group, CN, password, uid, etc. for user")),(0,i.yg)("h2",{id:"enable-ldap-authentication"},"Enable LDAP Authentication"),(0,i.yg)("h3",{id:"server-side-configuration"},"Server-side Configuration"),(0,i.yg)("p",null,"You need to configure the LDAP basic information in the fe/conf/ldap.conf file, and the LDAP administrator password needs to be set using sql statements."),(0,i.yg)("h4",{id:"configure-the-feconfldapconf-file"},"Configure the fe/conf/ldap.conf file\uff1a"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"ldap_authentication_enabled = false",(0,i.yg)("br",{parentName:"p"}),"\n",'Set the value to "true" to enable LDAP authentication; when the value is "false", LDAP authentication is not enabled and all other configuration items of this profile are invalid.Set the value to "true" to enable LDAP authentication; when the value is "false", LDAP authentication is not enabled and all other configuration items of this profile are invalid.')),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"ldap_host = 127.0.0.1",(0,i.yg)("br",{parentName:"p"}),"\n","LDAP service ip.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"ldap_port = 389",(0,i.yg)("br",{parentName:"p"}),"\n","LDAP service port, the default plaintext transfer port is 389, currently Doris' LDAP function only supports plaintext password transfer.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"ldap_admin_name = cn=admin,dc=domain,dc=com",(0,i.yg)("br",{parentName:"p"}),"\n",'LDAP administrator account "Distinguished Name". When a user logs into Doris using LDAP authentication, Doris will bind the administrator account to search for user information in LDAP.')),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"ldap_user_basedn = ou=people,dc=domain,dc=com\nDoris base dn when searching for user information in LDAP,For example, only user2 in the above example is allowed to log in to Doris, which is configured as ou=ou2, dc=example, dc=com. If user1, user2, and user3 in the above example are allowed to log in to Doris, which is configured as dc=example, dc=com")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"ldap_user_filter = (&(uid={login}))"),(0,i.yg)("p",{parentName:"li"},'For Doris\' filtering criteria when searching for user information in LDAP, the placeholder "{login}" will be replaced with the login username. You must ensure that the user searched by this filter is unique, otherwise Doris will not be able to verify the password through LDAP and the error message "ERROR 5081 (42000): user is not unique in LDAP server." will appear when logging in.'),(0,i.yg)("p",{parentName:"li"},"For example, if you use the LDAP user node uid attribute as the username to log into Doris, you can configure it as:",(0,i.yg)("br",{parentName:"p"}),"\n","ldap_user_filter = (&(uid={login}))\uff1b",(0,i.yg)("br",{parentName:"p"}),"\n","This item can be configured using the LDAP user mailbox prefix as the user name:",(0,i.yg)("br",{parentName:"p"}),"\n","ldap_user_filter = (&(mail={login}@baidu.com))\u3002")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"ldap",(0,i.yg)("em",{parentName:"p"},"group_basedn = ou=group,dc=domain,dc=com\nbase dn when Doris searches for group information in LDAP. if this item is not configured, LDAP group authorization will not be enabled. Same as ldap")," User_ Similar to basedn, it limits the scope of Doris searching for groups."))),(0,i.yg)("h4",{id:"set-the-ldap-administrator-password"},"Set the LDAP administrator password:"),(0,i.yg)("p",null,"After configuring the ldap.conf file, start fe, log in to Doris with the root or admin account, and execute sql:  "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"set ldap_admin_password = password('ldap_admin_password');\n")),(0,i.yg)("h3",{id:"client-side-configuration"},"Client-side configuration"),(0,i.yg)("h4",{id:"mysql-client"},"MySQL Client"),(0,i.yg)("p",null,"Client-side LDAP authentication requires the mysql client-side explicit authentication plugin to be enabled. Logging into Doris using the command line enables the mysql explicit authentication plugin in one of two ways."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Set the environment variable LIBMYSQL_ENABLE_CLEARTEXT_PLUGIN to value 1.\nFor example, in a linux or max environment you can use the command:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-bash"},'echo "export LIBMYSQL_ENABLE_CLEARTEXT_PLUGIN=1" >> \uff5e/.bash_profile && source \uff5e/.bash_profile\n'))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},'Add the parameter "--enable-cleartext-plugin" each time you log in to Doris.'),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"mysql -hDORIS_HOST -PDORIS_PORT -u user -p --enable-cleartext-plugin\n\nEnter ldap password\n")))),(0,i.yg)("h4",{id:"jdbc-client"},"Jdbc Client"),(0,i.yg)("p",null,"When using Jdbc Client to connect in to Doris, you need to customize the plugin."),(0,i.yg)("p",null,"First, create a class called ",(0,i.yg)("inlineCode",{parentName:"p"},"MysqlClearPasswordPluginWithoutSSL")," that inherits from ",(0,i.yg)("inlineCode",{parentName:"p"},"MysqlClearPasswordPlugin"),". In this class, override the ",(0,i.yg)("inlineCode",{parentName:"p"},"requiresConfidentiality()")," method and return false."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},"public class MysqlClearPasswordPluginWithoutSSL extends MysqlClearPasswordPlugin {\n@Override  \npublic boolean requiresConfidentiality() {\n    return false;\n  }\n}\n")),(0,i.yg)("p",null,"When obtaining a database connection, you need to configure the custom plugin into the properties"),(0,i.yg)("p",null,"That is (xxx is the package name of the custom class)"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"authenticationPlugins=xxx.xxx.xxx.MysqlClearPasswordPluginWithoutSSL"),(0,i.yg)("li",{parentName:"ul"},"defaultAuthenticationPlugin=xxx.xxx.xxx.MysqlClearPasswordPluginWithoutSSL"),(0,i.yg)("li",{parentName:"ul"},"disabledAuthenticationPlugins=com.mysql.jdbc.authentication.MysqlClearPasswordPlugin")),(0,i.yg)("p",null,"eg:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},' jdbcUrl = "jdbc:mysql://localhost:9030/mydatabase?authenticationPlugins=xxx.xxx.xxx.MysqlClearPasswordPluginWithoutSSL&defaultAuthenticationPlugin=xxx.xxx.xxx.MysqlClearPasswordPluginWithoutSSL&disabledAuthenticationPlugins=com.mysql.jdbc.authentication.MysqlClearPasswordPlugin";\n')),(0,i.yg)("h2",{id:"ldap-authentication-detailed-explanation"},"LDAP authentication detailed explanation"),(0,i.yg)("p",null,"LDAP password authentication and group authorization are complementary to Doris password authentication and authorization. Enabling LDAP functionality does not completely replace Doris password authentication and authorization, but coexists with Doris password authentication and authorization."),(0,i.yg)("h3",{id:"ldap-authentication-login-details"},"LDAP authentication login details"),(0,i.yg)("p",null,"When LDAP is enabled, users have the following in Doris and LDAP:  "),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"LDAP User"),(0,i.yg)("th",{parentName:"tr",align:null},"Doris User"),(0,i.yg)("th",{parentName:"tr",align:null},"Password"),(0,i.yg)("th",{parentName:"tr",align:null},"Login Status"),(0,i.yg)("th",{parentName:"tr",align:null},"Login to Doris users"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Existent"),(0,i.yg)("td",{parentName:"tr",align:null},"Existent"),(0,i.yg)("td",{parentName:"tr",align:null},"LDAP Password"),(0,i.yg)("td",{parentName:"tr",align:null},"Login successful"),(0,i.yg)("td",{parentName:"tr",align:null},"Doris User")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Existent"),(0,i.yg)("td",{parentName:"tr",align:null},"Existent"),(0,i.yg)("td",{parentName:"tr",align:null},"Doris Password"),(0,i.yg)("td",{parentName:"tr",align:null},"Login failure"),(0,i.yg)("td",{parentName:"tr",align:null},"None")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Non-Existent"),(0,i.yg)("td",{parentName:"tr",align:null},"Existent"),(0,i.yg)("td",{parentName:"tr",align:null},"Doris Password"),(0,i.yg)("td",{parentName:"tr",align:null},"Login successful"),(0,i.yg)("td",{parentName:"tr",align:null},"Doris User")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Existent"),(0,i.yg)("td",{parentName:"tr",align:null},"Non-Existent"),(0,i.yg)("td",{parentName:"tr",align:null},"LDAP Password"),(0,i.yg)("td",{parentName:"tr",align:null},"Login successful"),(0,i.yg)("td",{parentName:"tr",align:null},"Ldap Temporary user")))),(0,i.yg)("p",null,"After LDAP is enabled, when a user logs in using mysql client, Doris will first verify the user's password through the LDAP service, and if the LDAP user exists and the password is correct, Doris will use the user to log in; at this time, if the corresponding account exists, Doris will directly log in to the account, and if the corresponding account does not exist, it will create a temporary account for the user and log in to the account. The temporary account has the appropriate pair of permissions (see LDAP Group Authorization) and is only valid for the current connection. doris does not create the user and does not generate metadata for creating the user pair.",(0,i.yg)("br",{parentName:"p"}),"\n","If no login user exists in the LDAP service, Doris is used for password authentication."),(0,i.yg)("p",null,"The following assumes that LDAP authentication is enabled, ldap_user_filter = (&(uid={login})) is configured, and all other configuration items are correct, and the client sets the environment variable LIBMYSQL_ENABLE_CLEARTEXT_PLUGIN=1  "),(0,i.yg)("p",null,"For example:"),(0,i.yg)("h4",{id:"1accounts-exist-in-both-doris-and-ldap"},"1:Accounts exist in both Doris and LDAP."),(0,i.yg)("p",null,"Doris account exists: jack@'172.10.1.10', password: 123456",(0,i.yg)("br",{parentName:"p"}),"\n","LDAP user node presence attribute: uid: jack user password: abcdef",(0,i.yg)("br",{parentName:"p"}),"\n","The jack@'172.10.1.10' account can be logged into by logging into Doris using the following command:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"mysql -hDoris_HOST -PDoris_PORT -ujack -p abcdef\n")),(0,i.yg)("p",null,"Login will fail with the following command:  "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"mysql -hDoris_HOST -PDoris_PORT -ujack -p 123456\n")),(0,i.yg)("h4",{id:"2the-user-exists-in-ldap-and-the-corresponding-account-does-not-exist-in-doris"},"2:The user exists in LDAP and the corresponding account does not exist in Doris."),(0,i.yg)("p",null,"LDAP user node presence attribute: uid: jack User password: abcdef",(0,i.yg)("br",{parentName:"p"}),"\n","Use the following command to create a temporary user and log in to jack@'%', the temporary user has basic privileges DatabasePrivs: Select_priv, Doris will delete the temporary user after the user logs out and logs in:  "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"mysql -hDoris_HOST -PDoris_PORT -ujack -p abcdef\n")),(0,i.yg)("h4",{id:"3ldap-does-not-exist-for-the-user"},"3:LDAP does not exist for the user."),(0,i.yg)("p",null,"Doris account exists: jack@'172.10.1.10', password: 123456",(0,i.yg)("br",{parentName:"p"}),"\n","Login to the account using the Doris password, successfully:  "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"mysql -hDoris_HOST -PDoris_PORT -ujack -p 123456\n")),(0,i.yg)("h3",{id:"ldap-group-authorization-details"},"LDAP group authorization details"),(0,i.yg)("p",null,'If a DLAP user dn is the "member" attribute of an LDAP group node, Doris assumes that the user belongs to the group. Doris will revoke the corresponding role privileges after the user logs out. Before using LDAP group authorization, you should create the corresponding role pairs in Doris and authorize the roles.'),(0,i.yg)("p",null,"Login user Privileges are related to Doris user and group Privileges, as shown in the following table:",(0,i.yg)("br",{parentName:"p"}),"\n","|LDAP Users|Doris Users|Login User Privileges|\n|--|--|--|\n|exist|exist|LDAP group Privileges + Doris user Privileges|\n|Does not exist|Exists|Doris user Privileges|\n|exist|non-exist|LDAP group Privileges|"),(0,i.yg)("p",null,"If the logged-in user is a temporary user and no group permission exists, the user has the select_priv permission of the information_schema by default"),(0,i.yg)("p",null,"Example:",(0,i.yg)("br",{parentName:"p"}),"\n",'LDAP user dn is the "member" attribute of the LDAP group node then the user is considered to belong to the group, Doris will intercept the first Rdn of group dn as the group name.',(0,i.yg)("br",{parentName:"p"}),"\n",'For example, if user dn is "uid=jack,ou=aidp,dc=domain,dc=com", the group information is as follows:  '),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-text"},"dn: cn=doris_rd,ou=group,dc=domain,dc=com  \nobjectClass: groupOfNames  \nmember: uid=jack,ou=aidp,dc=domain,dc=com  \n")),(0,i.yg)("p",null,"Then the group name is doris_rd."),(0,i.yg)("p",null,"If jack also belongs to the LDAP groups doris_qa, doris_pm; Doris exists roles: doris_rd, doris_qa, doris_pm, after logging in using LDAP authentication, the user will not only have the original permissions of the account, but will also get the roles doris_rd, doris_qa and doris _pm privileges."),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"Attention:"),(0,i.yg)("p",{parentName:"blockquote"},"The group to which user belongs is not related to the organizational structure of the LDAP tree, and user2 in the example section may not necessarily belong to group2\nIf you want user2 to belong to group2, you need to add user2 to the member attribute of group2")),(0,i.yg)("h3",{id:"ldap-information-cache"},"LDAP information cache"),(0,i.yg)("p",null,"To avoid frequent access to LDAP service, Doris will cache LDAP information into memory, you can specify the cache time for LDAP users through the ",(0,i.yg)("inlineCode",{parentName:"p"},"ldap_user_cache_timeout_s")," configuration item in ldap.conf, the default is 12 hours; after modifying the information in LDAP service or modifying the After modifying the information in the LDAP service or modifying the Role permissions of the LDAP user group, the cache may not take effect in time because of the cache, so you can refresh the cache with the refresh ldap statement, see ","[REFRESH-LDAP]","(... /... /sql-manual/sql-reference/Utility-Statements/REFRESH-LDAP.md)."),(0,i.yg)("h2",{id:"limitations-of-ldap-authentication"},"Limitations of LDAP authentication"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"The current LDAP feature of Doris only supports plaintext password authentication, that is, when a user logs in, the password is transmitted in plaintext between client and fe and between fe and LDAP service.")),(0,i.yg)("h2",{id:"faq"},"FAQ"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"How to determine which roles an LDAP user has in Doris?"),(0,i.yg)("p",{parentName:"li"},"Log in to Doris using an LDAP user, ",(0,i.yg)("inlineCode",{parentName:"p"}," show grants")," Can view which roles the current user has. Among them, ldapDefaultRole is the default role that every ldap user has in Doris.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"How to troubleshoot when the roles of LDAP users in Doris are less than expected?"),(0,i.yg)("ol",{parentName:"li"},(0,i.yg)("li",{parentName:"ol"},"Through 'show roles",(0,i.yg)("inlineCode",{parentName:"li"}," Check if the expected role exists in Doris. If it does not exist, you need to use the 'CREATE ROLE role'_ Name")," Create a character."),(0,i.yg)("li",{parentName:"ol"},"Check if the expected group is in 'ldap'",(0,i.yg)("em",{parentName:"li"}," Group")," Based on the corresponding organizational structure."),(0,i.yg)("li",{parentName:"ol"},"Check if the expected group contains the member attribute."),(0,i.yg)("li",{parentName:"ol"},"Check if the member attribute of the expected group contains the current user.")))))}c.isMDXComponent=!0}}]);