"use strict";(self.webpackChunkcosmos_hub_docs_site=self.webpackChunkcosmos_hub_docs_site||[]).push([[4908],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),h=a,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||o;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1591:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={},l=void 0,i={unversionedId:"architecture/templates/adr-template",id:"architecture/templates/adr-template",title:"adr-template",description:"\x3c!--",source:"@site/docs/architecture/templates/adr-template.md",sourceDirName:"architecture/templates",slug:"/architecture/templates/adr-template",permalink:"/architecture/templates/adr-template",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ADR 003: Interchain Accounts Controller Module",permalink:"/architecture/adr/adr-003-ica-controller"},next:{title:"ADR Creation Process",permalink:"/architecture/PROCESS"}},c={},s=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Abstract",id:"abstract",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"References",id:"references",level:2}],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"adr-adr-number-title"},"ADR {ADR-NUMBER}: {TITLE}"),(0,a.kt)("h2",{id:"changelog"},"Changelog"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"{date}: {changelog}")),(0,a.kt)("h2",{id:"status"},"Status"),(0,a.kt)("p",null,"{DRAFT | PROPOSED} Not Implemented"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Please have a look at the ",(0,a.kt)("a",{parentName:"p",href:"/architecture/adr/PROCESS#adr-status"},"PROCESS")," page.\nUse DRAFT if the ADR is in a draft stage (draft PR) or PROPOSED if it's in review.")),(0,a.kt)("h2",{id:"abstract"},"Abstract"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\"If you can't explain it simply, you don't understand it well enough.\" Provide\na simplified and layman-accessible explanation of the ADR.\nA short (~200 word) description of the issue being addressed.")),(0,a.kt)("h2",{id:"context"},"Context"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This section contains all the context one needs to understand the current state, and why there is a problem.\nIt should be as succinct as possible and introduce the high level idea behind the solution.\nThe language in this section is value-neutral. It is simply describing facts.")),(0,a.kt)("h2",{id:"decision"},"Decision"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This section explains all of the details of the proposed solution, including implementation details.\nIt should also describe affects / corollary items that may need to be changed as a part of this.\nIf the proposed change will be large, please also indicate a way to do the change to maximize ease of review.\n(e.g. the optimal split of things to do between separate PR's)")),(0,a.kt)("h2",{id:"consequences"},"Consequences"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'This section describes the consequences, after applying the decision.\nAll consequences should be summarized here, not just the "positive" ones.')),(0,a.kt)("h3",{id:"positive"},"Positive"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"{positive consequences}")),(0,a.kt)("h3",{id:"negative"},"Negative"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"{negative consequences}")),(0,a.kt)("h3",{id:"neutral"},"Neutral"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"{neutral consequences}")),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Are there any relevant PR comments, issues that led up to this, or articles referrenced for why we made the given design choice? If so link them here!")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"{reference link}")))}d.isMDXComponent=!0}}]);