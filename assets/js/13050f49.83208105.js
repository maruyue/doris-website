"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[31068],{3905:(r,e,a)=>{a.d(e,{Zo:()=>y,kt:()=>m});var t=a(67294);function n(r,e,a){return e in r?Object.defineProperty(r,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[e]=a,r}function l(r,e){var a=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),a.push.apply(a,t)}return a}function i(r){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(r,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(a,e))}))}return r}function o(r,e){if(null==r)return{};var a,t,n=function(r,e){if(null==r)return{};var a,t,n={},l=Object.keys(r);for(t=0;t<l.length;t++)a=l[t],e.indexOf(a)>=0||(n[a]=r[a]);return n}(r,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(r);for(t=0;t<l.length;t++)a=l[t],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(r,a)&&(n[a]=r[a])}return n}var s=t.createContext({}),c=function(r){var e=t.useContext(s),a=e;return r&&(a="function"==typeof r?r(e):i(i({},e),r)),a},y=function(r){var e=c(r.components);return t.createElement(s.Provider,{value:e},r.children)},u="mdxType",f={inlineCode:"code",wrapper:function(r){var e=r.children;return t.createElement(t.Fragment,{},e)}},p=t.forwardRef((function(r,e){var a=r.components,n=r.mdxType,l=r.originalType,s=r.parentName,y=o(r,["components","mdxType","originalType","parentName"]),u=c(a),p=n,m=u["".concat(s,".").concat(p)]||u[p]||f[p]||l;return a?t.createElement(m,i(i({ref:e},y),{},{components:a})):t.createElement(m,i({ref:e},y))}));function m(r,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof r||n){var l=a.length,i=new Array(l);i[0]=p;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=r,o[u]="string"==typeof r?r:n,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}p.displayName="MDXCreateElement"},46087:(r,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var t=a(87462),n=(a(67294),a(3905));const l={title:"ARRAY_FILTER",language:"en"},i=void 0,o={unversionedId:"sql-manual/sql-functions/array-functions/array-filter",id:"version-2.0/sql-manual/sql-functions/array-functions/array-filter",title:"ARRAY_FILTER",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-functions/array-functions/array-filter.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array-filter",permalink:"/docs/sql-manual/sql-functions/array-functions/array-filter",draft:!1,tags:[],version:"2.0",frontMatter:{title:"ARRAY_FILTER",language:"en"},sidebar:"docs",previous:{title:"ARRAY_MAP",permalink:"/docs/sql-manual/sql-functions/array-functions/array-map"},next:{title:"ARRAY_AVG",permalink:"/docs/sql-manual/sql-functions/array-functions/array-avg"}},s={},c=[{value:"array_filter",id:"array_filter",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],y={toc:c},u="wrapper";function f(r){let{components:e,...a}=r;return(0,n.kt)(u,(0,t.Z)({},y,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"array_filter"},"array_filter"),(0,n.kt)("version",{since:"2.0"},(0,n.kt)("p",null,"array_filter(lambda,array)")),(0,n.kt)("version",{since:"2.0.2"},(0,n.kt)("p",null,"array array_filter(array arr, array_bool filter_column)")),(0,n.kt)("h3",{id:"description"},"description"),(0,n.kt)("h4",{id:"syntax"},"Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"ARRAY<T> array_filter(lambda, ARRAY<T> arr)\nARRAY<T> array_filter(ARRAY<T> arr, ARRAY<Bool> filter_column)\n")),(0,n.kt)("p",null,"Use the lambda expression as the input parameter to calculate and filter the data of the ARRAY column of the other input parameter.\nAnd filter out the values of 0 and NULL in the result."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"array_filter(x->x>0, array1);\narray_filter(x->(x+2)=10, array1);\narray_filter(x->(abs(x)-2)>0, array1);\narray_filter(c_array,[0,1,0]);\n")),(0,n.kt)("h3",{id:"example"},"example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"mysql [test]>select c_array,array_filter(c_array,[0,1,0]) from array_test;\n+-----------------+----------------------------------------------------+\n| c_array         | array_filter(`c_array`, ARRAY(FALSE, TRUE, FALSE)) |\n+-----------------+----------------------------------------------------+\n| [1, 2, 3, 4, 5] | [2]                                                |\n| [6, 7, 8]       | [7]                                                |\n| []              | []                                                 |\n| NULL            | NULL                                               |\n+-----------------+----------------------------------------------------+\n\nmysql [test]>select array_filter(x->(x > 1),[1,2,3,0,null]);\n+----------------------------------------------------------------------------------------------+\n| array_filter(ARRAY(1, 2, 3, 0, NULL), array_map([x] -> (x(0) > 1), ARRAY(1, 2, 3, 0, NULL))) |\n+----------------------------------------------------------------------------------------------+\n| [2, 3]                                                                                       |\n+----------------------------------------------------------------------------------------------+\n\nmysql [test]>select *, array_filter(x->x>0,c_array2) from array_test2;\n+------+-----------------+-------------------------+------------------------------------------------------------------+\n| id   | c_array1        | c_array2                | array_filter(`c_array2`, array_map([x] -> x(0) > 0, `c_array2`)) |\n+------+-----------------+-------------------------+------------------------------------------------------------------+\n|    1 | [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [10, 20, 80]                                                     |\n|    2 | [6, 7, 8]       | [10, 12, 13]            | [10, 12, 13]                                                     |\n|    3 | [1]             | [-100]                  | []                                                               |\n|    4 | NULL            | NULL                    | NULL                                                             |\n+------+-----------------+-------------------------+------------------------------------------------------------------+\n4 rows in set (0.01 sec)\n\nmysql [test]>select *, array_filter(x->x%2=0,c_array2) from array_test2;\n+------+-----------------+-------------------------+----------------------------------------------------------------------+\n| id   | c_array1        | c_array2                | array_filter(`c_array2`, array_map([x] -> x(0) % 2 = 0, `c_array2`)) |\n+------+-----------------+-------------------------+----------------------------------------------------------------------+\n|    1 | [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [10, 20, -40, 80, -100]                                              |\n|    2 | [6, 7, 8]       | [10, 12, 13]            | [10, 12]                                                             |\n|    3 | [1]             | [-100]                  | [-100]                                                               |\n|    4 | NULL            | NULL                    | NULL                                                                 |\n+------+-----------------+-------------------------+----------------------------------------------------------------------+\n\nmysql [test]>select *, array_filter(x->(x*(-10)>0),c_array2) from array_test2;\n+------+-----------------+-------------------------+----------------------------------------------------------------------------+\n| id   | c_array1        | c_array2                | array_filter(`c_array2`, array_map([x] -> (x(0) * (-10) > 0), `c_array2`)) |\n+------+-----------------+-------------------------+----------------------------------------------------------------------------+\n|    1 | [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [-40, -100]                                                                |\n|    2 | [6, 7, 8]       | [10, 12, 13]            | []                                                                         |\n|    3 | [1]             | [-100]                  | [-100]                                                                     |\n|    4 | NULL            | NULL                    | NULL                                                                       |\n+------+-----------------+-------------------------+----------------------------------------------------------------------------+\n\nmysql [test]>select *, array_filter(x->x>0, array_map((x,y)->(x>y), c_array1,c_array2)) as res from array_test2;\n+------+-----------------+-------------------------+--------+\n| id   | c_array1        | c_array2                | res    |\n+------+-----------------+-------------------------+--------+\n|    1 | [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [1, 1] |\n|    2 | [6, 7, 8]       | [10, 12, 13]            | []     |\n|    3 | [1]             | [-100]                  | [1]    |\n|    4 | NULL            | NULL                    | NULL   |\n+------+-----------------+-------------------------+--------+\n")),(0,n.kt)("h3",{id:"keywords"},"keywords"),(0,n.kt)("p",null,"ARRAY,FILTER,ARRAY_FILTER"))}f.isMDXComponent=!0}}]);