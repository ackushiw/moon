(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6353],{1999:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>d});var n=a(25773),r=a(27378),s=a(38944),l=a(99213),c=a(20624),o=a(81884);const i="anchorWithStickyNavbar_JmGV",u="anchorWithHideOnScrollNavbar_pMLv";function d(e){let{as:t,id:a,...d}=e;const{navbar:{hideOnScroll:m}}=(0,c.L)();if("h1"===t||!a)return r.createElement(t,(0,n.Z)({},d,{id:void 0}));const f=(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof d.children?d.children:a});return r.createElement(t,(0,n.Z)({},d,{className:(0,s.Z)("anchor",m?u:i,d.className),id:a}),d.children,r.createElement(o.default,{className:"hash-link",to:`#${a}`,"aria-label":f,title:f},"\u200b"))}},96177:(e,t,a)=>{"use strict";a.d(t,{F:()=>c});var n=a(27378),r=a(41763);const s={attributes:!0,characterData:!0,childList:!0,subtree:!0};function l(e,t){const[a,l]=(0,n.useState)(),c=(0,n.useCallback)((()=>{l(e.current?.closest("[role=tabpanel][hidden]"))}),[e,l]);(0,n.useEffect)((()=>{c()}),[c]),function(e,t,a){void 0===a&&(a=s);const l=(0,r.zX)(t),c=(0,r.Ql)(a);(0,n.useEffect)((()=>{const t=new MutationObserver(l);return e&&t.observe(e,c),()=>t.disconnect()}),[e,l,c])}(a,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),c())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}function c(){const[e,t]=(0,n.useState)(!1),[a,r]=(0,n.useState)(!1),s=(0,n.useRef)(null),c=(0,n.useCallback)((()=>{const a=s.current.querySelector("code");e?a.removeAttribute("style"):(a.style.whiteSpace="pre-wrap",a.style.overflowWrap="anywhere"),t((e=>!e))}),[s,e]),o=(0,n.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=s.current,a=e>t||s.current.querySelector("code").hasAttribute("style");r(a)}),[s]);return l(s,o),(0,n.useEffect)((()=>{o()}),[e,o]),(0,n.useEffect)((()=>(window.addEventListener("resize",o,{passive:!0}),()=>{window.removeEventListener("resize",o)})),[o]),{codeBlockRef:s,isEnabled:e,isCodeScrollable:a,toggle:c}}},6499:(e,t,a)=>{"use strict";a.d(t,{p:()=>s});var n=a(55421),r=a(20624);function s(){const{prism:e}=(0,r.L)(),{colorMode:t}=(0,n.I)(),a=e.theme,s=e.darkTheme||a;return"dark"===t?s:a}},90433:(e,t,a)=>{"use strict";a.d(t,{QC:()=>f,Vo:()=>d,bc:()=>i,nZ:()=>m,nt:()=>u});var n=a(6324),r=a.n(n);const s=/title=(?<quote>["'])(?<title>.*?)\1/,l=/\{(?<range>[\d,-]+)\}/,c={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function o(e,t){const a=e.map((e=>{const{start:a,end:n}=c[e];return`(?:${a}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${n})`})).join("|");return new RegExp(`^\\s*(?:${a})\\s*$`)}function i(e){return e?.match(s)?.groups.title??""}function u(e){return Boolean(e?.includes("showLineNumbers"))}function d(e){return e.split(" ").find((e=>e.startsWith("language-")))?.replace(/language-/,"")}function m(e,t){let a=e.replace(/\n$/,"");const{language:n,magicComments:s,metastring:i}=t;if(i&&l.test(i)){const e=i.match(l).groups.range;if(0===s.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${i}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=s[0].className,n=r()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(n),code:a}}if(void 0===n)return{lineClassNames:{},code:a};const u=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return o(["js","jsBlock"],t);case"jsx":case"tsx":return o(["js","jsBlock","jsx"],t);case"html":return o(["js","jsBlock","html"],t);case"python":case"py":case"bash":return o(["bash"],t);case"markdown":case"md":return o(["html","jsx","bash"],t);default:return o(Object.keys(c),t)}}(n,s),d=a.split("\n"),m=Object.fromEntries(s.map((e=>[e.className,{start:0,range:""}]))),f=Object.fromEntries(s.filter((e=>e.line)).map((e=>{let{className:t,line:a}=e;return[a,t]}))),p=Object.fromEntries(s.filter((e=>e.block)).map((e=>{let{className:t,block:a}=e;return[a.start,t]}))),h=Object.fromEntries(s.filter((e=>e.block)).map((e=>{let{className:t,block:a}=e;return[a.end,t]})));for(let r=0;r<d.length;){const e=d[r].match(u);if(!e){r+=1;continue}const t=e.slice(1).find((e=>void 0!==e));f[t]?m[f[t]].range+=`${r},`:p[t]?m[p[t]].start=r:h[t]&&(m[h[t]].range+=`${m[h[t]].start}-${r-1},`),d.splice(r,1)}a=d.join("\n");const b={};return Object.entries(m).forEach((e=>{let[t,{range:a}]=e;r()(a).forEach((e=>{b[e]??=[],b[e].push(t)}))})),{lineClassNames:b,code:a}}function f(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},a={};return Object.entries(e.plain).forEach((e=>{let[n,r]=e;const s=t[n];s&&"string"==typeof r&&(a[s]=r)})),a}},51739:(e,t,a)=>{"use strict";const n=a(27378),r=a(81884),s=a(95709),l=a(12700),c=a(1999),o=a(64137),i=a(66498),u=a(66715),d=e=>e&&e.__esModule?e:{default:e},m=d(n),f=d(r),p=d(c);function h(e,t,a){if(!e.match(/api\/([\d.]+)/)&&!e.includes("api/next")&&a&&a.name!==t.version){const t="current"===a.name?"next":a.name;return e.endsWith("/api")?`${e}/${t}`:e.replace("/api/",`/api/${t}/`)}return e}e.exports=function(e){let{options:t,packages:a,history:r}=e;const c=l.useDocsVersion(),d=s.useDocsPreferredVersion(c.pluginId).preferredVersion;return n.useEffect((()=>{1===a.length?r.replace(h(a[0].entryPoints[0].reflection.permalink,c,d)):d&&r.replace(h(r.location.pathname,c,d))}),[a,r,c,d]),m.default.createElement("div",{className:"row"},m.default.createElement("div",{className:"col apiItemCol"},t.banner&&m.default.createElement("div",{className:"alert alert--info margin-bottom--md",role:"alert"},m.default.createElement("div",{dangerouslySetInnerHTML:{__html:t.banner}})),m.default.createElement(u.VersionBanner,null),m.default.createElement("div",{className:"apiItemContainer"},m.default.createElement("article",null,m.default.createElement("div",{className:"markdown"},m.default.createElement("header",null,m.default.createElement(p.default,{as:"h1"},"API")),m.default.createElement("section",{className:"tsd-panel"},m.default.createElement("h3",{className:"tsd-panel-header"},"Packages"),m.default.createElement("div",{className:"tsd-panel-content"},m.default.createElement("ul",{className:"tsd-index-list"},a.map((e=>m.default.createElement("li",{key:e.packageName,className:"tsd-truncate"},m.default.createElement(f.default,{className:"tsd-kind-icon",to:e.entryPoints[0].reflection.permalink},m.default.createElement("span",{className:"tsd-signature-symbol"},"v",e.packageVersion)," ",m.default.createElement("span",null,o.removeScopes(e.packageName,t.scopes)))))))))),m.default.createElement(i.Footer,null)))))}},66498:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=(e=>e&&e.__esModule?e:{default:e})(a(27378));t.Footer=function(){return n.default.createElement("footer",{className:"tsd-footer"},"Powered by"," ",n.default.createElement("a",{href:"https://github.com/milesj/docusaurus-plugin-typedoc-api"},"docusaurus-plugin-typedoc-api")," ","and ",n.default.createElement("a",{href:"https://typedoc.org/"},"TypeDoc"))}},66715:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a(27378),r=a(81884),s=a(62935),l=a(95709),c=a(12700),o=e=>e&&e.__esModule?e:{default:e},i=o(n),u=o(r);t.VersionBanner=function(){const e=c.useDocsVersion(),t=e.banner,a=e.docs,r=e.pluginId,o=e.version,d=s.useDocVersionSuggestions(r).latestVersionSuggestion,m=l.useDocsPreferredVersion(r).savePreferredVersionName,f=n.useCallback((()=>{m(d.name)}),[d.name,m]);if(!t||!d)return null;const p=a[d.label];return i.default.createElement("div",{className:`${l.ThemeClassNames.docs.docVersionBanner} alert alert--warning margin-bottom--md`,role:"alert"},i.default.createElement("div",null,"unreleased"===t&&i.default.createElement(i.default.Fragment,null,"This is documentation for an unreleased version."),"unmaintained"===t&&i.default.createElement(i.default.Fragment,null,"This is documentation for version ",i.default.createElement("b",null,o),".")," ","For the latest API, see version"," ",i.default.createElement("b",null,i.default.createElement(u.default,{to:p.id,onClick:f},p.title)),"."))}},64137:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.removeScopes=function(e,t){return 0===t.length?e:t.reduce(((e,t)=>e.replace(new RegExp(`^(${t}-|@${t}/)`),"")),e)}},6324:(e,t)=>{function a(e){let t,a=[];for(let n of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(n))a.push(parseInt(n,10));else if(t=n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,n,r,s]=t;if(n&&s){n=parseInt(n),s=parseInt(s);const e=n<s?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(s+=e);for(let t=n;t!==s;t+=e)a.push(t)}}return a}t.default=a,e.exports=a}}]);