"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6352],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(n),h=o,d=c["".concat(p,".").concat(h)]||c[h]||m[h]||r;return n?a.createElement(d,l(l({ref:t},u),{},{components:n})):a.createElement(d,l({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},64851:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var a=n(25773),o=(n(27378),n(35318));const r={slug:"proto-v0.17",title:"proto v0.17 - Experimental Python support and canary releases",authors:["milesj"],tags:["proto","plugin","tool","canary","python"],image:"./img/proto/v0.17.png"},l=void 0,i={permalink:"/blog/proto-v0.17",editUrl:"https://github.com/moonrepo/moon/tree/master/website/blog/2023-09-11_proto-v0.17.mdx",source:"@site/blog/2023-09-11_proto-v0.17.mdx",title:"proto v0.17 - Experimental Python support and canary releases",description:"This release implements two long requested features, Python language support and canary releases.",date:"2023-09-11T00:00:00.000Z",formattedDate:"September 11, 2023",tags:[{label:"proto",permalink:"/blog/tags/proto"},{label:"plugin",permalink:"/blog/tags/plugin"},{label:"tool",permalink:"/blog/tags/tool"},{label:"canary",permalink:"/blog/tags/canary"},{label:"python",permalink:"/blog/tags/python"}],readingTime:2.39,hasTruncateMarker:!0,authors:[{name:"Miles Johnson",title:"Founder, developer",url:"https://github.com/milesj",imageURL:"/img/authors/miles.jpg",key:"milesj"}],frontMatter:{slug:"proto-v0.17",title:"proto v0.17 - Experimental Python support and canary releases",authors:["milesj"],tags:["proto","plugin","tool","canary","python"],image:"./img/proto/v0.17.png"},prevItem:{title:"proto v0.18 - List installed tools and configure HTTP client",permalink:"/blog/proto-v0.18"},nextItem:{title:"moon v1.13 - Toolchain now uses WASM plugins",permalink:"/blog/moon-v1.13"}},p={image:n(72679).Z,authorsImageUrls:[void 0]},s=[{value:"Experimental Python support",id:"experimental-python-support",level:2},{value:"Install canary releases",id:"install-canary-releases",level:2},{value:"Other changes",id:"other-changes",level:2}],u={toc:s};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This release implements two long requested features, Python language support and canary releases."),(0,o.kt)("h2",{id:"experimental-python-support"},"Experimental Python support"),(0,o.kt)("p",null,"It's been quite a while since we've introduced a new language into proto, and we're excited to\nannounce the highly requested language, Python! Since Python is now an\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/moonrepo/python-plugin"},"officially supported language"),", installing Python (and\npip) is as simple as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ proto install python\n")),(0,o.kt)("p",null,"However, we're marking language support as experimental for the time being. We expect our\nimplementation to work for modern Python versions, but may not work for older versions, especially\nPython 2. The reasons for this are as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"proto will install pre-built binaries from\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/indygreg/python-build-standalone"},"indygreg/python-build-standalone"),". This is\nan unofficial project, and ",(0,o.kt)("em",{parentName:"li"},"does not")," support all Python versions."),(0,o.kt)("li",{parentName:"ul"},"If ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/pyenv/pyenv/blob/master/plugins/python-build/README.md"},(0,o.kt)("inlineCode",{parentName:"a"},"python-build"))," is\navailable, we'll attempt to use it to build + install Python. This currently requires ",(0,o.kt)("inlineCode",{parentName:"li"},"pyenv")," to\nbe installed, and ",(0,o.kt)("em",{parentName:"li"},"does not")," work on Windows."),(0,o.kt)("li",{parentName:"ul"},"Furthermore, we only support ",(0,o.kt)("inlineCode",{parentName:"li"},"cpython")," at the moment, and do not support ",(0,o.kt)("inlineCode",{parentName:"li"},"pypy"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"jython"),", or\nother Python implementations. It's unknown whether this functionality should be in the core Python\nplugin, or another plugin entirely.")),(0,o.kt)("p",null,'In a future proto version, we want to support a true "build from source" approach for all tools.\nOnce that functionality has landed, we can properly support Python on all platforms, but until then,\nlet us know how this works for you!'),(0,o.kt)("h2",{id:"install-canary-releases"},"Install canary releases"),(0,o.kt)("p",null,"A canary release is a mechanism for rolling out new features and changes to a small subset of users,\nwithout it being an official release on an official channel. This allows users to opt-in and test\nfunctionality if they so choose. Canary releases are not meant to be used in production, and may\ncontain bugs or breaking changes. A canary is similar to a nightly (or weekly) release, depending on\nthe tool."),(0,o.kt)("p",null,"We now support this workflow in proto. To install a canary release, simply use the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/proto/commands/install"},(0,o.kt)("inlineCode",{parentName:"a"},"--canary")," flag when installing a tool"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ proto install <tool> --canary\n")),(0,o.kt)("p",null,"This will install the latest canary release to ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.proto/tools/<tool>/canary"),", and ",(0,o.kt)("em",{parentName:"p"},"only")," the latest\nrelease can be used. Re-installing with ",(0,o.kt)("inlineCode",{parentName:"p"},"--canary")," will overwrite the previous canary installation."),(0,o.kt)("p",null,"However, because we ",(0,o.kt)("a",{parentName:"p",href:"/docs/proto/detection"},"detect a version to run with at runtime"),", how should you\nactually run canary? The easiest way is to prefix the shim with an environment variable:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ PROTO_BUN_VERSION=canary bun ./index.ts\n")),(0,o.kt)("p",null,"Or to explicitly configure the version in ",(0,o.kt)("a",{parentName:"p",href:"/docs/proto/config"},(0,o.kt)("inlineCode",{parentName:"a"},".prototools")),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'bun = "canary"\n')),(0,o.kt)("h2",{id:"other-changes"},"Other changes"),(0,o.kt)("p",null,"View the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/moonrepo/proto/releases/tag/v0.17.0"},"official release")," for a full list\nof changes."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Added colors to command line ",(0,o.kt)("inlineCode",{parentName:"li"},"--help")," menus."),(0,o.kt)("li",{parentName:"ul"},"Updated the following locations to support partial versions and aliases:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Tool versions in ",(0,o.kt)("inlineCode",{parentName:"li"},".prototools"),"."),(0,o.kt)("li",{parentName:"ul"},"Pinning a default version with ",(0,o.kt)("inlineCode",{parentName:"li"},"proto install --pin"),"."),(0,o.kt)("li",{parentName:"ul"},"Setting global version with ",(0,o.kt)("inlineCode",{parentName:"li"},"proto global"),"."),(0,o.kt)("li",{parentName:"ul"},"Setting local version with ",(0,o.kt)("inlineCode",{parentName:"li"},"proto local"),"."))),(0,o.kt)("li",{parentName:"ul"},"Node, npm, pnpm, and yarn will again extract a version from ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json")," engines.")))}m.isMDXComponent=!0},72679:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/v0.17-c6f866913e8dd547a862c49630b6a96b.png"}}]);