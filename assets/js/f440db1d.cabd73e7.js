"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3535],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},27915:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(27378),o=n(83469),a=n(9619);function l(e){let{text:t}=e;return r.createElement(a.Z,{text:t,icon:o.SZw,variant:"success",className:"absolute right-0 top-1.5"})}},9619:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(27378),o=n(38944),a=n(31792);const l={failure:"bg-red-100 text-red-900",info:"bg-pink-100 text-pink-900",success:"bg-green-100 text-green-900",warning:"bg-orange-100 text-orange-900"};function i(e){let{className:t,icon:n,text:i,variant:s}=e;return r.createElement("span",{className:(0,o.Z)("inline-flex items-center px-1 py-0.5 rounded text-xs font-bold uppercase",s?l[s]:"bg-gray-100 text-gray-800",t)},n&&r.createElement(a.Z,{icon:n,className:"mr-1"}),i)}},10528:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(25773),o=(n(27378),n(35318)),a=n(27915);const l={title:"Install proto"},i=void 0,s={unversionedId:"proto/install",id:"proto/install",title:"Install proto",description:"The following guide can be used to install proto into your environment.",source:"@site/docs/proto/install.mdx",sourceDirName:"proto",slug:"/proto/install",permalink:"/docs/proto/install",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/proto/install.mdx",tags:[],version:"current",frontMatter:{title:"Install proto"},sidebar:"proto",previous:{title:"What is proto?",permalink:"/docs/proto/"},next:{title:"Version detection",permalink:"/docs/proto/detection"}},p={},c=[{value:"Installing",id:"installing",level:2},{value:"Linux, macOS, WSL",id:"linux-macos-wsl",level:3},{value:"Windows",id:"windows",level:3},{value:"Other",id:"other",level:3},{value:"Upgrading",id:"upgrading",level:2},{value:"Uninstalling",id:"uninstalling",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,{text:"1 min",mdxType:"HeaderLabel"}),(0,o.kt)("p",null,"The following guide can be used to install proto into your environment."),(0,o.kt)("h2",{id:"installing"},"Installing"),(0,o.kt)("p",null,"The entirety of proto is packaged and shipped as a single binary. It works on all ",(0,o.kt)("em",{parentName:"p"},"most")," operating\nsystems, and does not require any external dependencies. For convenience, we provide the following\nscripts to download and install proto."),(0,o.kt)("h3",{id:"linux-macos-wsl"},"Linux, macOS, WSL"),(0,o.kt)("p",null,"In a terminal that supports Bash, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl -fsSL https://moonrepo.dev/install/proto.sh | bash\n")),(0,o.kt)("h3",{id:"windows"},"Windows"),(0,o.kt)("p",null,"In Powershell or Windows Terminal, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"irm https://moonrepo.dev/install/proto.ps1 | iex\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Windows support is currently experimental. Please report any issues!")),(0,o.kt)("h3",{id:"other"},"Other"),(0,o.kt)("p",null,"proto can also be downloaded and installed manually, by downloading an asset from\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/moonrepo/proto/releases"},"https://github.com/moonrepo/proto/releases"),". Be sure to\nrename the file after downloading, and apply the executable bit (",(0,o.kt)("inlineCode",{parentName:"p"},"chmod +x"),") on macOS and Linux."),(0,o.kt)("h2",{id:"upgrading"},"Upgrading"),(0,o.kt)("p",null,"We provide no formal mechanism for upgrading the proto binary. However, you can re-run the install\nscripts above and it will download, install, and overwrite with the latest version."),(0,o.kt)("h2",{id:"uninstalling"},"Uninstalling"),(0,o.kt)("p",null,"To uninstall proto, delete the ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.proto")," directory."))}d.isMDXComponent=!0}}]);