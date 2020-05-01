/*! For license information please see 3b8c55ea.2c920847.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{175:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return f})),n.d(t,"metadata",(function(){return O})),n.d(t,"rightToc",(function(){return j})),n.d(t,"default",(function(){return g}));var a=n(1),r=n(11),o=n(0),i=n.n(o),l=n(176),c=(n(28),n(19),n(20),n(179)),s=n.n(c),p=n(147),b=n.n(p),u=37,m=39;var d=function(e){var t=e.block,n=e.children,a=e.defaultValue,r=e.values,l=Object(o.useState)(a),c=l[0],p=l[1],d=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:s()("tabs",{"tabs--block":t})},r.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":c===t,className:s()("tab-item",b.a.tabItem,{"tab-item--active":c===t}),key:t,ref:function(e){return d.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case m:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(d,e.target,e)},onFocus:function(){return p(t)},onClick:function(){return p(t)}},n)}))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},o.Children.toArray(n).filter((function(e){return e.props.value===c}))[0]))};var h=function(e){return i.a.createElement("div",null,e.children)},f={id:"installation",title:"Installation",sidebar_label:"Installation"},O={id:"installation",title:"Installation",description:"Welcome to the Temple installation guide!",source:"@site/docs/installation.md",permalink:"/temple-docs/docs/installation",editUrl:"https://github.com/TempleEight/temple-docs/edit/master/TempleEight/docs/installation.md",sidebar_label:"Installation",sidebar:"docsSidebar",previous:{title:"Introduction",permalink:"/temple-docs/docs/introduction"},next:{title:"Getting Started",permalink:"/temple-docs/docs/getting-started"}},j=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Installation Instructions",id:"installation-instructions",children:[]},{value:"Confirmation",id:"confirmation",children:[]},{value:"Additional Information for Docker Users",id:"additional-information-for-docker-users",children:[]}],v={rightToc:j};function g(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},v,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Welcome to the Temple installation guide!"),Object(l.b)("p",null,"In order to get using Temple, you'll need to install the ",Object(l.b)("em",{parentName:"p"},"Temple CLI"),". "),Object(l.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(l.b)("p",null,"If installing locally, the Temple CLI requires ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://java.com/en/download/help/download_options.xml"}),"Java")," to run.\nWe also support installation via a ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.docker.com"}),"Docker")," image."),Object(l.b)("p",null,"In order to build and orchestrate generated services, you'll need:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.docker.com/"}),"Docker")),Object(l.b)("li",{parentName:"ul"},"For projects orchestrated with Docker-Compose: ",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.docker.com/compose/"}),"docker-compose")))),Object(l.b)("li",{parentName:"ul"},"For projects orchestrated with Kubernetes:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://minikube.sigs.k8s.io/docs/"}),"Minikube")," for local development"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/#verifying-kubectl-configuration"}),"Kubectl")," for managing Kubernetes clusters")))),Object(l.b)("h2",{id:"installation-instructions"},"Installation Instructions"),Object(l.b)("p",null,"We currently support direct installation on MacOS and Linux, as well as through a Docker container.\nWindows users are recommended to use the Docker container."),Object(l.b)(d,{defaultValue:"macos",values:[{label:"MacOS",value:"macos"},{label:"Linux",value:"linux"},{label:"Docker Image",value:"docker"}],mdxType:"Tabs"},Object(l.b)(h,{value:"macos",mdxType:"TabItem"},"Installation is via ",Object(l.b)("a",{href:"https://brew.sh/"},"Homebrew"),". To install, run:",Object(l.b)("code",null,"\u276f\u276f\u276f brew tap templeeight/temple"),Object(l.b)("code",null,"\u276f\u276f\u276f brew install temple")),Object(l.b)(h,{value:"linux",mdxType:"TabItem"},"Install by grabbing the latest release from ",Object(l.b)("a",{href:"https://github.com/TempleEight/temple/releases"},"GitHub"),":",Object(l.b)("code",null,"\u276f\u276f\u276f wget -O /usr/bin/temple https://github.com/TempleEight/temple/releases/download/v1.0.0/temple-latest "),Object(l.b)("code",null,"\u276f\u276f\u276f chmod +x /usr/bin/temple")),Object(l.b)(h,{value:"docker",mdxType:"TabItem"},"A Docker image is available on Docker Hub:",Object(l.b)("code",null,"\u276f\u276f\u276f docker run templeeight/temple:1.0 "))),Object(l.b)("h2",{id:"confirmation"},"Confirmation"),Object(l.b)("p",null,"To confirm that the Temple CLI has been installed locally, run:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"\u276f\u276f\u276f temple --version\ntemple 1.0.0 (c) 2020 TempleEight\n")),Object(l.b)("p",null,"If you're using Docker, any commands you pass after the image name will be executed within the container.\nTo invoke ",Object(l.b)("inlineCode",{parentName:"p"},"temple --version"),", run:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"\u276f\u276f\u276f docker run templeeight/temple:1.0 temple --version\ntemple 1.0.0 (c) 2020 TempleEight\n")),Object(l.b)("h2",{id:"additional-information-for-docker-users"},"Additional Information for Docker Users"),Object(l.b)("div",{className:"admonition admonition-important alert alert--info"},Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"Since the Temple project involves the generation of code, you will need to mount a directory into the container so that files can be synchronised between the two environments."),Object(l.b)("p",{parentName:"div"},"To do this, use the ",Object(l.b)("inlineCode",{parentName:"p"},"-v")," flag in ",Object(l.b)("inlineCode",{parentName:"p"},"docker run")," to create a bind mount from your local directory system into the container."),Object(l.b)("p",{parentName:"div"},"For example, the following command mounts the directory ",Object(l.b)("inlineCode",{parentName:"p"},"/Users/temple/project")," into the container at the location ",Object(l.b)("inlineCode",{parentName:"p"},"/home/project"),", runs the Temple image, and invokes the temple binary with the flag ",Object(l.b)("inlineCode",{parentName:"p"},"--version"),"."),Object(l.b)("pre",{parentName:"div"},Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker run \\\n-v /Users/temple/project:/home/project:rw \\\ntempleeight/temple:1.0 \\\ntemple --version\n")),Object(l.b)("p",{parentName:"div"},"This also means that any paths you provide to the Temple executable will need to be using the container's file system and not the host's:"),Object(l.b)("pre",{parentName:"div"},Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker run \\\n-v /Users/temple/project:/home/project:rw \\\ntempleeight/temple:1.0 \\\ntemple validate /home/project/example.templefile\n")))))}g.isMDXComponent=!0},176:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),m=a,d=b["".concat(i,".").concat(m)]||b[m]||u[m]||o;return n?r.a.createElement(d,l({ref:t},s,{components:n})):r.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},179:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var i=r.apply(null,a);i&&e.push(i)}else if("object"===o)for(var l in a)n.call(a,l)&&a[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()}}]);