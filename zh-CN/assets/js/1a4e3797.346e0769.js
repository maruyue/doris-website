"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[97920],{88824:(e,t,n)=>{n.d(t,{c:()=>u});var r=n(67294),s=n(52263);const l=["zero","one","two","few","many","other"];function o(e){return l.filter((t=>e.includes(t)))}const a={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,s.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),a}}),[e])}function u(){const e=c();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const s=n.select(t),l=n.pluralForms.indexOf(s);return r[Math.min(l,r.length-1)]}(n,t,e)}}},28403:(e,t,n)=>{n.r(t),n.d(t,{default:()=>$});var r=n(67294),s=n(52263),l=n(4824),o=n(35742),a=n(39960),c=n(95999),u=n(60373),i=n(902),h=n(88824),m=n(80143),d=n(16550),g=n(10412);const f=function(){const e=(0,d.k6)(),t=(0,d.TH)(),{siteConfig:{baseUrl:n}}=(0,s.Z)();return{searchValue:g.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:n=>{const r=new URLSearchParams(t.search);n?r.set("q",n):r.delete("q"),e.replace({search:r.toString()})},generateSearchPageLink:e=>`${n}search?q=${encodeURIComponent(e)}`}};var p=n(31336),y=n.n(p),I=n(20895);function x(e){return b(e).concat(b(e.filter((e=>{const t=e[e.length-1];return!t.trailing&&t.maybeTyping})),!0))}function b(e,t){return e.map((e=>({tokens:e.map((e=>e.value)),term:e.map((e=>({value:e.value,presence:y().Query.presence.REQUIRED,wildcard:(t?e.trailing||e.maybeTyping:e.trailing)?y().Query.wildcard.TRAILING:y().Query.wildcard.NONE})))})))}function E(e,t,n){return function(r,s){const l=function(e,t){if(1===t.length&&["ja","jp","th"].includes(t[0]))return y()[t[0]].tokenizer(e).map((e=>e.toString()));let n=/[^-\s]+/g;return t.includes("zh")&&(n=/\w+|\p{Unified_Ideograph}+/gu),e.toLowerCase().match(n)||[]}(r,I.dK);if(0===l.length)return void s([]);const o=function(e,t){const n=function(e,t){const n=[];return function e(r,s){if(0===r.length)return void n.push(s);const l=r[0];if(/\p{Unified_Ideograph}/u.test(l)){const n=function(e,t){const n=[];return function e(r,s){let l=0,o=!1;for(const a of t)if(r.substr(0,a.length)===a){const t={missed:s.missed,term:s.term.concat({value:a})};r.length>a.length?e(r.substr(a.length),t):n.push(t),o=!0}else for(let t=a.length-1;t>l;t-=1){const c=a.substr(0,t);if(r.substr(0,t)===c){l=t;const a={missed:s.missed,term:s.term.concat({value:c,trailing:!0})};r.length>t?e(r.substr(t),a):n.push(a),o=!0;break}}o||(r.length>0?e(r.substr(1),{missed:s.missed+1,term:s.term}):s.term.length>0&&n.push(s))}(e,{missed:0,term:[]}),n.sort(((e,t)=>{const n=e.missed>0?1:0,r=t.missed>0?1:0;return n!==r?n-r:e.term.length-t.term.length})).map((e=>e.term))}(l,t);for(const t of n){const n=s.concat(...t);e(r.slice(1),n)}}else{const t=s.concat({value:l});e(r.slice(1),t)}}(e,[]),n}(e,t);if(0===n.length)return[{tokens:e,term:e.map((e=>({value:e,presence:y().Query.presence.REQUIRED,wildcard:y().Query.wildcard.LEADING|y().Query.wildcard.TRAILING})))}];for(const o of n)o[o.length-1].maybeTyping=!0;const r=[];for(const o of I.dK)if("en"===o)I._k||r.unshift(y().stopWordFilter);else{const e=y()[o];e.stopWordFilter&&r.unshift(e.stopWordFilter)}let s;if(r.length>0){const e=e=>r.reduce(((e,t)=>e.filter((e=>t(e.value)))),e);s=[];const t=[];for(const r of n){const n=e(r);s.push(n),n.length<r.length&&n.length>0&&t.push(n)}n.push(...t)}else s=n.slice();const l=[];for(const o of s)if(o.length>2)for(let e=o.length-1;e>=0;e-=1)l.push(o.slice(0,e).concat(o.slice(e+1)));return x(n).concat(x(l))}(l,t),a=[];e:for(const{term:t,tokens:c}of o)for(const{documents:r,index:s,type:l}of e)if(a.push(...s.query((e=>{for(const n of t)e.term(n.value,{wildcard:n.wildcard,presence:n.presence})})).slice(0,n).filter((e=>!a.some((t=>t.document.i.toString()===e.ref)))).slice(0,n-a.length).map((t=>{const n=r.find((e=>e.i.toString()===t.ref));return{document:n,type:l,page:0!==l&&e[0].documents.find((e=>e.i===n.p)),metadata:t.matchData.metadata,tokens:c,score:t.score}}))),a.length>=n)break e;!function(e){e.forEach(((e,t)=>{e.index=t})),e.sort(((t,n)=>{let r=t.type>0&&t.page?e.findIndex((e=>e.document===t.page)):t.index,s=n.type>0&&n.page?e.findIndex((e=>e.document===n.page)):n.index;return-1===r&&(r=t.index),-1===s&&(s=n.index),r===s?0===t.type?-1:0===n.type?1:t.index-n.index:r-s}))}(a),function(e){e.forEach(((t,n)=>{n>0&&t.page&&e.some((e=>e.document===t.page))&&(n<e.length-1&&e[n+1].page===t.page?t.isInterOfTree=!0:t.isLastOfTree=!0)}))}(a),s(a)}}function w(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function k(e,t,n){const r=[];for(const s of t){const n=e.toLowerCase().indexOf(s);if(n>=0){n>0&&r.push(k(e.substr(0,n),t)),r.push(`<mark>${w(e.substr(n,s.length))}</mark>`);const l=n+s.length;l<e.length&&r.push(k(e.substr(l),t));break}}return 0===r.length?n?`<mark>${w(e)}</mark>`:w(e):r.join("")}const v=/\w+|\p{Unified_Ideograph}/u;function R(e){const t=[];let n=0,r=e;for(;r.length>0;){const s=r.match(v);if(!s){t.push(r);break}s.index>0&&t.push(r.substring(0,s.index)),t.push(s[0]),n+=s.index+s[0].length,r=e.substring(n)}return t}function S(e,t,n,r){void 0===r&&(r=I.Hk);const{chunkIndex:s,chunks:l}=function(e,t,n){const r=[];let s=0,l=0,o=-1;for(;s<t.length;){const[a,c]=t[s];if(s+=1,!(a<l)){if(a>l){const t=R(e.substring(l,a)).map((e=>({html:w(e),textLength:e.length})));for(const e of t)r.push(e)}-1===o&&(o=r.length),l=a+c,r.push({html:k(e.substring(a,l),n,!0),textLength:c})}}if(l<e.length){const t=R(e.substring(l)).map((e=>({html:w(e),textLength:e.length})));for(const e of t)r.push(e)}return{chunkIndex:o,chunks:r}}(e,t,n),o=l.slice(0,s),a=l[s],c=[a.html],u=l.slice(s+1);let i=a.textLength,h=0,m=0,d=!1,g=!1;for(;i<r;)if((h<=m||0===u.length)&&o.length>0){const e=o.pop();i+e.textLength<=r?(c.unshift(e.html),h+=e.textLength,i+=e.textLength):(d=!0,o.length=0)}else{if(!(u.length>0))break;{const e=u.shift();i+e.textLength<=r?(c.push(e.html),m+=e.textLength,i+=e.textLength):(g=!0,u.length=0)}}return(d||o.length>0)&&c.unshift("\u2026"),(g||u.length>0)&&c.push("\u2026"),c.join("")}function L(e,t){const n=[];for(const r of Object.values(e))r[t]&&n.push(...r[t].position);return n.sort(((e,t)=>e[0]-t[0]||t[1]-e[1]))}var _=n(86010);const F={loadingRing:"loadingRing_RJI3","loading-ring":"loading-ring_FB5o"};function T(e){let{className:t}=e;return r.createElement("div",{className:(0,_.Z)(F.loadingRing,t)},r.createElement("div",null),r.createElement("div",null),r.createElement("div",null),r.createElement("div",null))}const P={searchQueryInput:"searchQueryInput_CFBF",searchResultItem:"searchResultItem_U687",searchResultItemPath:"searchResultItemPath_uIbk",searchResultItemSummary:"searchResultItemSummary_oZHr"};function U(){const{siteConfig:{baseUrl:e}}=(0,s.Z)(),t=(0,m.gA)();let n=e;try{const{preferredVersion:e}=(0,u.J)(t?.pluginId??I.gQ);e&&!e.isLast&&(n=e.path+"/")}catch(S){if(I.l9&&!(S instanceof i.i6))throw S}const{selectMessage:l}=(0,h.c)(),{searchValue:a,updateSearchPath:d}=f(),[g,p]=(0,r.useState)(a),[x,b]=(0,r.useState)(),[w,k]=(0,r.useState)(),v=(0,r.useMemo)((()=>g?(0,c.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:g}):(0,c.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[g]);(0,r.useEffect)((()=>{d(g),x&&(g?x(g,(e=>{k(e)})):k(void 0))}),[g,x]);const R=(0,r.useCallback)((e=>{p(e.target.value)}),[]);return(0,r.useEffect)((()=>{a&&a!==g&&p(a)}),[a]),(0,r.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=await async function(e){{const t=await(await fetch(`${e}${I.J}`)).json(),n=t.map(((e,t)=>{let{documents:n,index:r}=e;return{type:t,documents:n,index:y().Index.load(r)}})),r=t.reduce(((e,t)=>{for(const n of t.index.invertedIndex)/\p{Unified_Ideograph}/u.test(n[0][0])&&e.add(n[0]);return e}),new Set);return{wrappedIndexes:n,zhDictionary:Array.from(r)}}}(n);b((()=>E(e,t,100)))}()}),[n]),r.createElement(r.Fragment,null,r.createElement(o.Z,null,r.createElement("meta",{property:"robots",content:"noindex, follow"}),r.createElement("title",null,v)),r.createElement("div",{className:"container margin-vert--lg"},r.createElement("h1",null,v),r.createElement("input",{type:"search",name:"q",className:P.searchQueryInput,"aria-label":"Search",onChange:R,value:g,autoComplete:"off",autoFocus:!0}),!x&&g&&r.createElement("div",null,r.createElement(T,null)),w&&(w.length>0?r.createElement("p",null,l(w.length,(0,c.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:w.length}))):r.createElement("p",null,(0,c.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),r.createElement("section",null,w&&w.map((e=>r.createElement(N,{key:e.document.i,searchResult:e}))))))}function N(e){let{searchResult:{document:t,type:n,page:s,tokens:l,metadata:o}}=e;const c=0===n,u=2===n,i=(c?t.b:s.b).slice(),h=u?t.s:t.t;return c||i.push(s.t),r.createElement("article",{className:P.searchResultItem},r.createElement("h2",null,r.createElement(a.Z,{to:t.u+(t.h||""),dangerouslySetInnerHTML:{__html:u?k(h,l):S(h,L(o,"t"),l,100)}})),i.length>0&&r.createElement("p",{className:P.searchResultItemPath},function(e){return e.join(" \u203a ")}(i)),u&&r.createElement("p",{className:P.searchResultItemSummary,dangerouslySetInnerHTML:{__html:S(t.t,L(o,"t"),l,100)}}))}const $=function(){return r.createElement(l.Z,null,r.createElement(U,null))}}}]);