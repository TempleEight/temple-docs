/*! For license information please see 3b8c55ea.e8d1511d.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{163:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return O})),n.d(t,"metadata",(function(){return h})),n.d(t,"rightToc",(function(){return j})),n.d(t,"default",(function(){return y}));var r=n(1),a=n(9),o=n(0),l=n.n(o),i=n(164),c=(n(24),n(18),n(19),n(166)),s=n.n(c),u=n(140),b=n.n(u),p=37,m=39;var d=function(e){var t=e.block,n=e.children,r=e.defaultValue,a=e.values,i=Object(o.useState)(r),c=i[0],u=i[1],d=[];return l.a.createElement("div",null,l.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:s()("tabs",{"tabs--block":t})},a.map((function(e){var t=e.value,n=e.label;return l.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":c===t,className:s()("tab-item",b.a.tabItem,{"tab-item--active":c===t}),key:t,ref:function(e){return d.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case m:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case p:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(d,e.target,e)},onFocus:function(){return u(t)},onClick:function(){return u(t)}},n)}))),l.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},o.Children.toArray(n).filter((function(e){return e.props.value===c}))[0]))};var f=function(e){return l.a.createElement("div",null,e.children)},O={id:"installation",title:"Installation",sidebar_label:"Installation"},h={id:"installation",title:"Installation",description:"Welcome to the Temple installation guide!",source:"@site/docs/installation.md",permalink:"/temple-docs/docs/installation",editUrl:"https://github.com/TempleEight/temple-docs/edit/master/TempleEight/docs/installation.md",sidebar_label:"Installation",sidebar:"docsSidebar",previous:{title:"Introduction",permalink:"/temple-docs/docs/introduction"},next:{title:"Getting Started",permalink:"/temple-docs/docs/getting-started"}},j=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Installation Instructions",id:"installation-instructions",children:[]},{value:"Confirmation",id:"confirmation",children:[]}],v={rightToc:j};function y(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},v,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Welcome to the Temple installation guide!"),Object(i.b)("p",null,"In order to get using Temple, you'll need to install the ",Object(i.b)("em",{parentName:"p"},"Temple CLI"),". "),Object(i.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(i.b)("p",null,"The Temple CLI requires ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://java.com/en/download/help/download_options.xml"}),"Java")," to run."),Object(i.b)("p",null,"In order to build and orchestrate generated services, you'll need:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.docker.com/"}),"Docker")),Object(i.b)("li",{parentName:"ul"},"For projects orchestrated with Docker-Compose: ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.docker.com/compose/"}),"docker-compose")))),Object(i.b)("li",{parentName:"ul"},"For projects orchestrated with Kubernetes:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://minikube.sigs.k8s.io/docs/"}),"Minikube")," for local development"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/#verifying-kubectl-configuration"}),"Kubectl")," for managing Kubernetes clusters")))),Object(i.b)("h2",{id:"installation-instructions"},"Installation Instructions"),Object(i.b)(d,{defaultValue:"macos",values:[{label:"MacOS",value:"macos"},{label:"Linux",value:"linux"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(i.b)(f,{value:"macos",mdxType:"TabItem"},"Installation is via ",Object(i.b)("a",{href:"https://brew.sh/"},"Homebrew"),". To install, run:",Object(i.b)("code",null,"~ \u276f\u276f\u276f brew tap templeeight/temple"),Object(i.b)("br",null),Object(i.b)("code",null,"~ \u276f\u276f\u276f brew install temple")),Object(i.b)(f,{value:"linux",mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),Object(i.b)(f,{value:"windows",mdxType:"TabItem"},"This is a banana \ud83c\udf4c")),Object(i.b)("h2",{id:"confirmation"},"Confirmation"),Object(i.b)("p",null,"To confirm that the TempleCLI has been installed correctly, run:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"~ \u276f\u276f\u276f temple --version\ntemple 0.1.0 (c) 2020 TempleEight\n")))}y.isMDXComponent=!0},164:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(n),m=r,d=b["".concat(l,".").concat(m)]||b[m]||p[m]||o;return n?a.a.createElement(d,i({ref:t},s,{components:n})):a.a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},166:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var l=a.apply(null,r);l&&e.push(l)}else if("object"===o)for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()}}]);