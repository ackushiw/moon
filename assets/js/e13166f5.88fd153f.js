"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[172],{5318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=s(n),d=o,m=f["".concat(p,".").concat(d)]||f[d]||l[d]||a;return n?r.createElement(m,c(c({ref:t},u),{},{components:n})):r.createElement(m,c({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8571:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l}});var r=n(5773),o=n(808),a=(n(7378),n(5318)),c=["components"],i={title:"Workspace"},p=void 0,s={unversionedId:"concepts/workspace",id:"concepts/workspace",title:"Workspace",description:"A workspace is a directory that contains projects, manages a toolchain,",source:"@site/docs/concepts/workspace.mdx",sourceDirName:"concepts",slug:"/concepts/workspace",permalink:"/docs/concepts/workspace",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/concepts/workspace.mdx",tags:[],version:"current",frontMatter:{title:"Workspace"},sidebar:"docs",previous:{title:"Concepts",permalink:"/docs/concepts"},next:{title:"Toolchain",permalink:"/docs/concepts/toolchain"}},u={},l=[{value:"Configuration",id:"configuration",level:2}],f={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A workspace is a directory that contains ",(0,a.kt)("a",{parentName:"p",href:"./project"},"projects"),", manages a ",(0,a.kt)("a",{parentName:"p",href:"./toolchain"},"toolchain"),",\nruns ",(0,a.kt)("a",{parentName:"p",href:"./task"},"tasks"),", and is coupled with a VCS repository. The root of a workspace is denoted by a\n",(0,a.kt)("inlineCode",{parentName:"p"},".moon")," folder and a ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,a.kt)("p",null,"By default moon has been designed for monorepos, but can also be used for polyrepos."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Configuration that's applied to the entire workspace is defined in\n",(0,a.kt)("a",{parentName:"p",href:"../config/workspace"},(0,a.kt)("inlineCode",{parentName:"a"},".moon/workspace.yml")),"."))}d.isMDXComponent=!0}}]);