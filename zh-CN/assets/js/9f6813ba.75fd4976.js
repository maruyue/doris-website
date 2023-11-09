"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[53267],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",_={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(i,".").concat(m)]||p[m]||_[m]||s;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<s;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46666:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>_,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const s={title:"ST_AREA",language:"zh-CN"},o=void 0,l={unversionedId:"sql-manual/sql-functions/spatial-functions/st-area",id:"version-2.0/sql-manual/sql-functions/spatial-functions/st-area",title:"ST_AREA",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/spatial-functions/st-area.md",sourceDirName:"sql-manual/sql-functions/spatial-functions",slug:"/sql-manual/sql-functions/spatial-functions/st-area",permalink:"/zh-CN/docs/sql-manual/sql-functions/spatial-functions/st-area",draft:!1,tags:[],version:"2.0",frontMatter:{title:"ST_AREA",language:"zh-CN"},sidebar:"docs",previous:{title:"ST_ANGLE_SPHERE",permalink:"/zh-CN/docs/sql-manual/sql-functions/spatial-functions/st-angle-sphere"},next:{title:"ST_POINT",permalink:"/zh-CN/docs/sql-manual/sql-functions/spatial-functions/st-point"}},i={},u=[{value:"ST_Area_Square_Meters,ST_Area_Square_Km",id:"st_area_square_metersst_area_square_km",level:2},{value:"Syntax",id:"syntax",level:3},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:u},p="wrapper";function _(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"st_area_square_metersst_area_square_km"},"ST_Area_Square_Meters,ST_Area_Square_Km"),(0,a.kt)("h3",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"DOUBLE ST_Area_Square_Meters(GEOMETRY geo)\nDOUBLE ST_Area_Square_Km(GEOMETRY geo)\n")),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("p",null,"\u8ba1\u7b97\u5730\u7403\u7403\u9762\u4e0a\u533a\u57df\u7684\u9762\u79ef\uff0c\u76ee\u524d\u53c2\u6570geo\u652f\u6301St_Point,St_LineString,St_Circle\u548cSt_Polygon\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u8f93\u5165\u7684\u662fSt_Point,St_LineString\uff0c\u5219\u8fd4\u56de\u96f6\u3002"),(0,a.kt)("p",null,"\u5176\u4e2d\uff0cST_Area_Square_Meters(GEOMETRY geo)\u8fd4\u56de\u7684\u5355\u4f4d\u662f\u5e73\u65b9\u7c73\uff0cST_Area_Square_Km(GEOMETRY geo)\u8fd4\u56de\u7684\u5355\u4f4d\u662f\u5e73\u65b9\u5343\u7c73\u3002"),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> SELECT ST_Area_Square_Meters(ST_Circle(0, 0, 1));\n+-------------------------------------------------+\n| st_area_square_meters(st_circle(0.0, 0.0, 1.0)) |\n+-------------------------------------------------+\n|                              3.1415926535897869 |\n+-------------------------------------------------+\n1 row in set (0.04 sec)\n\nmysql> SELECT ST_Area_Square_Km(ST_Polygon(\"POLYGON ((0 0, 1 0, 1 1, 0 1, 0 0))\"));\n+----------------------------------------------------------------------+\n| st_area_square_km(st_polygon('POLYGON ((0 0, 1 0, 1 1, 0 1, 0 0))')) |\n+----------------------------------------------------------------------+\n|                                                   12364.036567076409 |\n+----------------------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> SELECT ST_Area_Square_Meters(ST_Point(0, 1));\n+-------------------------------------------+\n| st_area_square_meters(st_point(0.0, 1.0)) |\n+-------------------------------------------+\n|                                         0 |\n+-------------------------------------------+\n1 row in set (0.05 sec)\n\nmysql> SELECT ST_Area_Square_Meters(ST_LineFromText(\"LINESTRING (1 1, 2 2)\"));\n+-----------------------------------------------------------------+\n| st_area_square_meters(st_linefromtext('LINESTRING (1 1, 2 2)')) |\n+-----------------------------------------------------------------+\n|                                                               0 |\n+-----------------------------------------------------------------+\n1 row in set (0.03 sec)\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("p",null,"ST_Area_Square_Meters,ST_Area_Square_Km,ST_Area,ST,Area"))}_.isMDXComponent=!0}}]);