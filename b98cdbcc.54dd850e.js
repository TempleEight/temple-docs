(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{162:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(11),o=(n(0),n(176)),i={id:"regeneration",title:"Regeneration",sidebar_label:"Regeneration"},l={id:"guide/regeneration",title:"Regeneration",description:"In addition to generating code from a Templefile a single time at the beginning of project development, the Temple CLI also allows for regeneration of code later in the cycle.",source:"@site/docs/guide/regeneration.md",permalink:"/temple-docs/docs/guide/regeneration",editUrl:"https://github.com/TempleEight/temple-docs/edit/master/TempleEight/docs/guide/regeneration.md",sidebar_label:"Regeneration",sidebar:"docsSidebar",previous:{title:"Orchestration",permalink:"/temple-docs/docs/guide/orchestration"},next:{title:"Temple Test",permalink:"/temple-docs/docs/guide/temple-test"}},c=[],s={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In addition to generating code from a Templefile a single time at the beginning of project development, the Temple CLI also allows for regeneration of code later in the cycle.\nThis means that if you generate a project, but then want to later add an additional service, or a property on that service, Temple will allow you to regenerate code reflecting any changes to the original Templefile. "),Object(o.b)("p",null,"During this process, Temple will regenerate ",Object(o.b)("em",{parentName:"p"},"all")," project files, overwriting any existing ones, with a few key exceptions:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The ",Object(o.b)("em",{parentName:"p"},"setup")," source file, in any existing service")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The ",Object(o.b)("em",{parentName:"p"},"datastore")," source file, in any existing service")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Any file that belongs to a service that has been deleted from the Templefile since the last generation event."))),Object(o.b)("p",null,"As the setup and datastore source files do not change based on the contents of the Service they're generated from, they can be safely omitted from the regeneration process without risk of breaking changes. "),Object(o.b)("p",null,"This also allows the user to add their own custom business logic (as per the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"guides/business-logic"}),"Business Logic")," guide) in these two files, which persists between generation events.\nHowever it is very possible that the business logic that exists may not be correct after regeneration, reflecting changes to the properties of a service, etc."),Object(o.b)("p",null,"To invoke the regeneration process, simply run ",Object(o.b)("inlineCode",{parentName:"p"},"temple generate")," with an output directory that already contains an existing temple project."),Object(o.b)("p",null,"For example, first generate the project the first time:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'\u276f\u276f\u276f temple generate example.temple\nWhat should the Go module name be? (expected format "github.com/username/repo")\ngithub.com/temple/tutorial\nGenerated project in /path/Documents/temple-tutorial\n')),Object(o.b)("p",null,"Then, make some changes to a setup or datastore source file. We'll change the ",Object(o.b)("inlineCode",{parentName:"p"},"example-service/setup.go")," file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "fmt"\n\n    "github.com/gorilla/mux"\n)\n\nfunc (env *env) setup(router *mux.Router) {\n    // Add user defined code here\n    fmt.Printf("Hello, World!\\n")\n}\n')),Object(o.b)("p",null,"Next, we're going to regenerate the project, but we'll notice that the changes we just made will persist."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'\u276f\u276f\u276f temple generate example.temple\n\nWhat should the Go module name be? (expected format "github.com/username/repo")\ngithub.com/temple/tutorial\n\nThe output directory already contains some files that are going to be generated.\nThis process will overwrite them.\n\nThese files will not be touched to preserve business logic:\n\u27a4 example-service/dao/datastore.go\n\u27a4 example-service/setup.go\n\nDo you want to continue? (Y/N)\ny\n')),Object(o.b)("p",null," If we check the file we changed earlier, we'll see that the changes we made are still present."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "fmt"\n\n    "github.com/gorilla/mux"\n)\n\nfunc (env *env) setup(router *mux.Router) {\n    // Add user defined code here\n    fmt.Printf("Hello, World!\\n")\n}\n')))}p.isMDXComponent=!0},176:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return g}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,g=u["".concat(i,".").concat(b)]||u[b]||m[b]||o;return n?a.a.createElement(g,l({ref:t},s,{components:n})):a.a.createElement(g,l({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);