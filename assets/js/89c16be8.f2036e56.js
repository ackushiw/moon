"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[969],{5318:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7378);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(t),d=a,m=h["".concat(c,".").concat(d)]||h[d]||p[d]||o;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=h;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},2134:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=t(5773),a=t(808),o=(t(7378),t(5318)),i=["components"],s={title:"Cache"},c=void 0,l={unversionedId:"concepts/cache",id:"concepts/cache",title:"Cache",description:"moon's able to achieve high performance and blazing speeds by implementing a cache that's powered by",source:"@site/docs/concepts/cache.mdx",sourceDirName:"concepts",slug:"/concepts/cache",permalink:"/docs/concepts/cache",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/concepts/cache.mdx",tags:[],version:"current",frontMatter:{title:"Cache"},sidebar:"docs",previous:{title:"Tokens",permalink:"/docs/concepts/token"},next:{title:"Config files",permalink:"/docs/config"}},u={},p=[{value:"Hashing",id:"hashing",level:2},{value:"File structure",id:"file-structure",level:2}],h={toc:p};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"moon's able to achieve high performance and blazing speeds by implementing a cache that's powered by\nour own unique smart hashing layer. All cache is stored in ",(0,o.kt)("inlineCode",{parentName:"p"},".moon/cache"),", relative from the\nworkspace root (be sure to git ignore this folder)."),(0,o.kt)("h2",{id:"hashing"},"Hashing"),(0,o.kt)("p",null,"Incremental builds are possible through a concept known as hashing, where in multiple sources are\naggregated to generate a unique hash. In the context of moon, each time a target is ran we generate\na hash, and if this hash already exists we abort early (cache hit), otherwise we continue the run\n(cache miss)."),(0,o.kt)("p",null,"The tiniest change may trigger a different hash, for example, changing a line of code (when an\ninput), or updating an npm package version, so don't worry if you see ",(0,o.kt)("em",{parentName:"p"},"a lot")," of hashes."),(0,o.kt)("p",null,"Our smart hashing currently takes the following sources into account:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Node.js version."),(0,o.kt)("li",{parentName:"ul"},"Command (",(0,o.kt)("inlineCode",{parentName:"li"},"command"),") being ran and its arguments (",(0,o.kt)("inlineCode",{parentName:"li"},"args"),")."),(0,o.kt)("li",{parentName:"ul"},"Input files (",(0,o.kt)("inlineCode",{parentName:"li"},"inputs"),")."),(0,o.kt)("li",{parentName:"ul"},"Environment variables (",(0,o.kt)("inlineCode",{parentName:"li"},"env"),")."),(0,o.kt)("li",{parentName:"ul"},"Dependencies between projects (",(0,o.kt)("inlineCode",{parentName:"li"},"dependsOn"),") and tasks (",(0,o.kt)("inlineCode",{parentName:"li"},"deps"),")."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"package.json")," dependencies (including development and peer)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"tsconfig.json")," compiler options (when applicable).")),(0,o.kt)("h2",{id:"file-structure"},"File structure"),(0,o.kt)("p",null,"The following diagram outlines our cache folder structure and why each piece exists."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},".moon/cache/\n    # State of the workspace. Mainly for tracking install times.\n    workspaceState.json\n\n    # Stores hashes of every ran task. Exists purely for debugging purposes.\n    hashes/\n        # Contents includes all sources used to generate the hash.\n        <hash>.json\n\n    # Task outputs that are hard linked between the cache and project,\n    # grouped by the tasks unique hash (same hash as above).\n    out/\n        <hash>/\n            ...\n\n    # State of targets that have been ran or are running, grouped by project and task.\n    runs/\n        <project>/\n            # Information about the project, its tasks, and its configs.\n            # Can be used at runtime by tasks that require this information.\n            runfile.json\n\n            <task>/\n                # Contents of the child process, including stdout, stderr, and exit code.\n                # Also contains the unique hash that is referenced above.\n                lastRunState.json\n")))}d.isMDXComponent=!0}}]);