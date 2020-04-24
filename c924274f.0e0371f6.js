(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{158:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var i=n(1),r=n(9),a=(n(0),n(165)),o=n(168),c={id:"service",title:"Service Architecture",sidebar_label:"Service Architecture"},l={id:"arch/service",title:"Service Architecture",description:"import useBaseUrl from '@docusaurus/useBaseUrl';",source:"@site/docs/arch/service.md",permalink:"/temple-docs/docs/arch/service",editUrl:"https://github.com/TempleEight/temple-docs/edit/master/TempleEight/docs/arch/service.md",sidebar_label:"Service Architecture",sidebar:"docsSidebar",previous:{title:"System Architecture",permalink:"/temple-docs/docs/arch/system"},next:{title:"TempleFile Specification",permalink:"/temple-docs/docs/reference/templefile-spec"}},s=[{value:"Libraries",id:"libraries",children:[]},{value:"Service File Tree",id:"service-file-tree",children:[]},{value:"The <code>main</code> Package",id:"the-main-package",children:[{value:"The <code>env</code> Object",id:"the-env-object",children:[]},{value:"Handlers",id:"handlers",children:[]}]},{value:"The <code>dao</code> Package",id:"the-dao-package",children:[]},{value:"Inter-Service Communication",id:"inter-service-communication",children:[]},{value:"Metrics",id:"metrics",children:[]},{value:"FAQ",id:"faq",children:[{value:"Why didn&#39;t you use ORM (Object-Relation Mapping)?",id:"why-didnt-you-use-orm-object-relation-mapping",children:[]}]}],b={rightToc:s};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This section will describe the architecture of an individual service.\nWe'll use the ",Object(a.b)("inlineCode",{parentName:"p"},"ExampleService")," from the the ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"/temple-docs/docs/getting-started"}),"Getting Started")," guide to illustrate the core service architecture.\nOnce covered, we'll look at how optional features such as inter-service communication and metrics slot in.\nFinally, there's an FAQ section to answer common questions about our architecture. "),Object(a.b)("h2",{id:"libraries"},"Libraries"),Object(a.b)("p",null,"Before we get started, here are the ",Object(a.b)("inlineCode",{parentName:"p"},"go")," libraries we're using:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/gorilla/mux"}),"gorilla/mux")," - for routing requests"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/lib/pq"}),"lib/pq")," - for interfacing with the backing datastore"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/go-playground/validator"}),"go-playground/validator")," - for validating request body parameters"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/google/uuid"}),"google/uuid")," - for handling all things UUID")),Object(a.b)("h2",{id:"service-file-tree"},"Service File Tree"),Object(a.b)("p",null,"As a reminder, here is the ",Object(a.b)("inlineCode",{parentName:"p"},"ExampleService")," block from the ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"/temple-docs/docs/getting-started"}),"Getting Started")," guide:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"ExampleService: service {\n  foo: string;\n  bar: int;\n}\n")),Object(a.b)("p",null,"Here is the corresponding generated file tree:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"\u251c\u2500\u2500 Dockerfile\n\u251c\u2500\u2500 config.json\n\u251c\u2500\u2500 dao\n\u2502   \u251c\u2500\u2500 dao.go\n\u2502   \u251c\u2500\u2500 datastore.go\n\u2502   \u2514\u2500\u2500 errors.go\n\u251c\u2500\u2500 example-service.go\n\u251c\u2500\u2500 go.mod\n\u251c\u2500\u2500 hook.go\n\u251c\u2500\u2500 setup.go\n\u2514\u2500\u2500 util\n    \u2514\u2500\u2500 util.go\n")),Object(a.b)("p",null,"We can ignore the ",Object(a.b)("inlineCode",{parentName:"p"},"Dockerfile"),", ",Object(a.b)("inlineCode",{parentName:"p"},"go.mod")," and ",Object(a.b)("inlineCode",{parentName:"p"},"config.json")," files for the purpose of illustrating the architecture.\nThis leaves us with files that fit into one of three packages:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"main")," - sets up the server environment and handles incoming requests and outgoing responses"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"dao")," - provides a common interface to the backing datastore, abstracting implementation details"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"util")," - houses miscellaneous utility functions")),Object(a.b)("h2",{id:"the-main-package"},"The ",Object(a.b)("inlineCode",{parentName:"h2"},"main")," Package"),Object(a.b)("p",null,"This package, as you would expect, does most of the heavy lifting. In our example, it includes the following files at the service root directory:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"\u251c\u2500\u2500 example-service.go\n\u251c\u2500\u2500 hook.go\n\u2514\u2500\u2500 setup.go\n")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"example-service.go")," contains the ",Object(a.b)("inlineCode",{parentName:"p"},"main")," function, the entrypoint to our service.\nThe ",Object(a.b)("inlineCode",{parentName:"p"},"main")," function's responsibility is to initialise the environment object and start the server."),Object(a.b)("h3",{id:"the-env-object"},"The ",Object(a.b)("inlineCode",{parentName:"h3"},"env")," Object"),Object(a.b)("p",null,"This environment object is fundamental to the architecture, encapsulating the server behaviour.\nIt stores the interface with the DAO, the defined hooks (see ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"/temple-docs/docs/guide/hooks"}),"Business Logic & Hooks"),"), and the validator for validating incoming request arguments.\nOptional features such as inter-service communication add interfaces to this object."),Object(a.b)("p",null,"Defined on the environment object are the handler functions, for handling requests to the endpoints.\nBefore starting the server, the ",Object(a.b)("inlineCode",{parentName:"p"},"main")," function calls the ",Object(a.b)("inlineCode",{parentName:"p"},"defaultRouter")," function to route incoming requests to their corresponding handler.\nThe resulting router is then passed to the ",Object(a.b)("inlineCode",{parentName:"p"},"setup")," function in ",Object(a.b)("inlineCode",{parentName:"p"},"setup.go"),", as discussed in ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"/temple-docs/docs/guide/adding-endpoints"}),"Adding Endpoints"),", and then the server is finally started."),Object(a.b)("h3",{id:"handlers"},"Handlers"),Object(a.b)("p",null,"For each route/endpoint a corresponding handler is defined in ",Object(a.b)("inlineCode",{parentName:"p"},"example-service.go"),".\nIn our example, four endpoints are defined, one for each CRUD (",Object(a.b)("inlineCode",{parentName:"p"},"Create"),", ",Object(a.b)("inlineCode",{parentName:"p"},"Read"),", ",Object(a.b)("inlineCode",{parentName:"p"},"Update"),", ",Object(a.b)("inlineCode",{parentName:"p"},"Delete"),") operation.\nIf enumeration is defined for the service, a ",Object(a.b)("inlineCode",{parentName:"p"},"List")," endpoint handler will be defined.\nIf authentication is defined for the service, an ",Object(a.b)("inlineCode",{parentName:"p"},"Identify")," endpoint handler will be defined.\nSee the guides for ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"/temple-docs/docs/guide/enumeration"}),"Enumeration")," and ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"/temple-docs/docs/guide/authentication"}),"Authentication")," respectively for instructions.\nFurthermore, as you would probably expect, omitted endpoints will not have routes or handlers defined, see the ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"/temple-docs/docs/guide/omitting-endpoints"}),"Omitting Endpoints")," guide for more details."),Object(a.b)("p",null,"When a request comes in, the router directs the request to the corresponding handler. A handler is responsible for a number of tasks:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Extracting the resource ID from the URL, if applicable (Read, Update, Delete operations)"),Object(a.b)("li",{parentName:"ul"},"Extracting the auth ID from the authorization header token, if applicable (project uses authorization)"),Object(a.b)("li",{parentName:"ul"},"Decoding and validating the incoming request body"),Object(a.b)("li",{parentName:"ul"},"Calling the inter-service communication functions to check foreign keys, if applicable (see ",Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"/temple-docs/docs/guide/foreign-keys"}),"Foreign Keys & Inter-Service Communication"),")"),Object(a.b)("li",{parentName:"ul"},"Checking authorization to perform the operation based on access control, if applicable (see ",Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"/temple-docs/docs/guide/access-control"}),"Access Control"),")"),Object(a.b)("li",{parentName:"ul"},"Calling the before operation hooks"),Object(a.b)("li",{parentName:"ul"},"Performing the DAO call to modify the datastore state"),Object(a.b)("li",{parentName:"ul"},"Calling the after operation hooks"),Object(a.b)("li",{parentName:"ul"},"Encoding the DAO response into JSON"),Object(a.b)("li",{parentName:"ul"},"Responding to the request")),Object(a.b)("p",null,"If any task fails, the handler responds to the request with a suitable status code and error message.\nTo visualise this entire process, the following diagram shows the flow of a create request in our example service:"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{alt:"Create Handler Diagram",src:Object(o.a)("img/create-handler.png"),width:"50%"})),Object(a.b)("p",null,"Though note that hooks have the ability to respond to the request themselves, as discussed in ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"/temple-docs/docs/guide/hooks"}),"Business Logic & Hooks"),"."),Object(a.b)("h2",{id:"the-dao-package"},"The ",Object(a.b)("inlineCode",{parentName:"h2"},"dao")," Package"),Object(a.b)("p",null,"The DAO is responsible for changing the state of the backing datastore, following the principles of the ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Data_access_object"}),"Data Access Object")," pattern.\nIt abstracts the implementation details, namely by being responsible for initialising and maintaining the datastore connection, and provides an interface for package users.\nBy default a DAO interface function is defined for each corresponding operation handler, declared in the ",Object(a.b)("inlineCode",{parentName:"p"},"BaseDatastore")," interface in ",Object(a.b)("inlineCode",{parentName:"p"},"dao.go"),".\nHowever additional DAO functions can be added by modifying the ",Object(a.b)("inlineCode",{parentName:"p"},"datastore")," interface in ",Object(a.b)("inlineCode",{parentName:"p"},"datastore.go"),", see ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"/temple-docs/docs/guide/adding-dao-functions"}),"Adding DAO Functions")," for instructions."),Object(a.b)("h2",{id:"inter-service-communication"},"Inter-Service Communication"),Object(a.b)("p",null,"If the service includes foreign key attributes, additional files are generated to facilitate inter-service communication.\nFor example, let us add a foreign key to our example service:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"ExampleService: service {\n  foo: string;\n  bar: int;\n  another: AnotherExampleService;\n}\n\nAnotherExampleService: service {\n  baz: bool;\n}\n")),Object(a.b)("p",null,"Which will add the following to our service file tree:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"\u2514\u2500\u2500 comm\n    \u2514\u2500\u2500 handler.go\n")),Object(a.b)("p",null,"This, has you might have guessed, makes up the ",Object(a.b)("inlineCode",{parentName:"p"},"comm")," package, which provides an interface for making requests to other services.\nIt is only created if foreign keys are defined for the service, see ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"/temple-docs/docs/guide/foreign-keys"}),"Foreign Keys & Inter-Service Communication"),".\nThe functions generated take a UUID as an argument, make a request to the target service, and return a boolean to the function caller depending on if a resource for that UUID exists."),Object(a.b)("p",null,"In the future we anticipate providing a similar mechanism to that in the ",Object(a.b)("inlineCode",{parentName:"p"},"dao")," to allow you the user to extend the ",Object(a.b)("inlineCode",{parentName:"p"},"Comm")," interface found in ",Object(a.b)("inlineCode",{parentName:"p"},"handler.go"),". In the meantime these calls can be added to hooks."),Object(a.b)("h2",{id:"metrics"},"Metrics"),Object(a.b)("p",null,"If the project has metrics defined for it, additional files are generated to facilitate them.\nFor example, let us add metrics to our example service:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"ExampleProject: project {\n  #language(go);\n  #database(postgres);\n  #provider(dockerCompose);\n  #metrics(prometheus);\n}\n\nExampleService: service {\n  foo: string;\n  bar: int;\n  another: AnotherExampleService;\n}\n\nAnotherExampleService: service {\n  baz: bool;\n}\n")),Object(a.b)("p",null,"Which will add the following to our service file tree"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"\u2514\u2500\u2500 metric\n    \u2514\u2500\u2500 metric.go\n")),Object(a.b)("p",null,"Which predictably makes up the ",Object(a.b)("inlineCode",{parentName:"p"},"metric")," package.\nThis simply provides predefined metric variables ready for invoking metric calls in the handlers, see ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"/temple-docs/docs/guide/metrics"}),"Metrics")," for more details."),Object(a.b)("h2",{id:"faq"},"FAQ"),Object(a.b)("h3",{id:"why-didnt-you-use-orm-object-relation-mapping"},"Why didn't you use ORM (Object-Relation Mapping)?"),Object(a.b)("p",null,"We have a few reasons for this:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"They abstract most of the database code meaning it can be hard to implement certain queries"),Object(a.b)("li",{parentName:"ul"},"They can be a bottleneck, by building our own database layer we can keep it simple and make future extensions easier"),Object(a.b)("li",{parentName:"ul"},"Some languages don't have a good ORM solution"),Object(a.b)("li",{parentName:"ul"},"It's yet another dependency, one you the developer may not want")))}d.isMDXComponent=!0},165:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=b(n),u=i,h=d["".concat(o,".").concat(u)]||d[u]||p[u]||a;return n?r.a.createElement(h,c({ref:t},s,{components:n})):r.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},166:function(e,t,n){"use strict";var i=n(0),r=n(50);t.a=function(){return Object(i.useContext)(r.a)}},168:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(173);var i=n(166);function r(e){var t=(Object(i.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},170:function(e,t,n){var i=n(70),r=n(23);e.exports=function(e,t,n){if(i(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(r(e))}},171:function(e,t,n){var i=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[i]=!1,!"/./"[e](t)}catch(r){}}return!0}},173:function(e,t,n){"use strict";var i=n(17),r=n(35),a=n(170),o="".startsWith;i(i.P+i.F*n(171)("startsWith"),"String",{startsWith:function(e){var t=a(this,e,"startsWith"),n=r(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),i=String(e);return o?o.call(t,i,n):t.slice(n,n+i.length)===i}})}}]);