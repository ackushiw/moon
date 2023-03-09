"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2687],{35318:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>d});var n=o(27378);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var a=n.createContext({}),p=function(e){var t=n.useContext(a),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},s=function(e){var t=p(e.components);return n.createElement(a.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,l=e.originalType,a=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(o),d=r,f=u["".concat(a,".").concat(d)]||u[d]||m[d]||l;return o?n.createElement(f,c(c({ref:t},s),{},{components:o})):n.createElement(f,c({ref:t},s))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=o.length,c=new Array(l);c[0]=u;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<l;p++)c[p]=o[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},48387:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=o(25773),r=(o(27378),o(35318));const l={title:"completions"},c=void 0,i={unversionedId:"proto/commands/completions",id:"proto/commands/completions",title:"completions",description:"The proto completions command will generate proto command and argument completions for your",source:"@site/docs/proto/commands/completions.mdx",sourceDirName:"proto/commands",slug:"/proto/commands/completions",permalink:"/docs/proto/commands/completions",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/proto/commands/completions.mdx",tags:[],version:"current",frontMatter:{title:"completions"},sidebar:"proto",previous:{title:"bin",permalink:"/docs/proto/commands/bin"},next:{title:"global",permalink:"/docs/proto/commands/global"}},a={},p=[{value:"Options",id:"options",level:3}],s={toc:p};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"proto completions")," command will generate proto command and argument completions for your\ncurrent shell. This command will write to stdout, which can then be redirected to a file of your\nchoice."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ proto completions > ~/.bash_completion.d/proto.sh\n")),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--shell"),' - Shell to explicitly generate for. Accepts "bash", "elvish", "fish", "powershell", or\n"zsh".')))}m.isMDXComponent=!0}}]);