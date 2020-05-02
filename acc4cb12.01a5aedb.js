(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{161:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(1),a=(r(0),r(176)),i=r(178);const c={id:"system",title:"System Architecture",sidebar_label:"System Architecture"},o={id:"arch/system",title:"System Architecture",description:"import useBaseUrl from '@docusaurus/useBaseUrl';",source:"@site/docs/arch/system.md",permalink:"/temple-docs/docs/arch/system",editUrl:"https://github.com/TempleEight/temple-docs/edit/master/TempleEight/docs/arch/system.md",sidebar_label:"System Architecture",sidebar:"docsSidebar",previous:{title:"Value Constraints",permalink:"/temple-docs/docs/guide/value-constraints"},next:{title:"Service Architecture",permalink:"/temple-docs/docs/arch/service"}},s=[{value:"Minimal Example",id:"minimal-example",children:[{value:"Docker Compose",id:"docker-compose",children:[]},{value:"Kubernetes",id:"kubernetes",children:[]}]},{value:"Extending the basic example",id:"extending-the-basic-example",children:[{value:"Foreign Keys",id:"foreign-keys",children:[]},{value:"Structs",id:"structs",children:[]},{value:"Auth",id:"auth",children:[]},{value:"Metrics",id:"metrics",children:[]}]}],l={rightToc:s};function u({components:e,...t}){return Object(a.b)("wrapper",Object(n.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"On top of generating service-level application code, Temple produces orchestration configuration files to enable executing the services together as a whole system.\nThis guide will take you through how a Temple generated application is designed on the super-service level.\nWe'll look at how the system is organised and how it changes with more advanced features."),Object(a.b)("p",null,"The details of how the application code in each service is architected can be seen in the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"service"}),"Service Architecture")," reference."),Object(a.b)("h2",{id:"minimal-example"},"Minimal Example"),Object(a.b)("p",null,"We'll start with the example Templefile from the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"../getting-started"}),"Getting Started")," Guide."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-templefile"}),"ExampleProject: project {\n  #language(go);\n  #database(postgres);\n  #provider(dockerCompose);\n}\n\nExampleService: service {\n  foo: string;\n  bar: int;\n}\n")),Object(a.b)("p",null,"Also from the Getting Started Guide is this diagram outlining the system architecture:"),Object(a.b)("img",{alt:"Tutorial System Architecture",src:Object(i.a)("img/tutorial-architecture.png")}),Object(a.b)("p",null,"It shows a high level description of the system, detailing how the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://konghq.com/kong/"}),"Kong API Gateway")," sits between the client and the backend services, and how the service communicates with its database."),Object(a.b)("p",null,"Let's delve a little bit deeper into this architecture and see some finer details:"),Object(a.b)("img",{alt:"System Architecture Deeper",src:Object(i.a)("img/system-architecture-basic.png")}),Object(a.b)("p",null,"We can see that all components of our application are executed inside of ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.docker.com/"}),"Docker")," containers, including Kong.\nThis allows us to not have to worry about installing it locally, giving this job to our orchestration tool.\nContainers allow us to encapsulate our application components and their dependencies, allowing them to be easily ran anywhere, among many other benefits."),Object(a.b)("p",null,"We can also see that Kong uses it's own database to store information about which services exist and how to route requests to them.\nLike the rest of the Kong infrastructure, this database is orchestrated automatically by Temple.\nA ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.postgresql.org/"}),Object(a.b)("inlineCode",{parentName:"a"},"PostgreSQL"))," instance sits alongside Kong on a private network, so that only the Kong instance can communicate with it."),Object(a.b)("p",null,"All of the components of the system are deployed by the orchestration platform (see the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"../guide/orchestration"}),"Orchestration")," guide for full details), however the system architecture can change a little bit based on which platform is chosen. "),Object(a.b)("h3",{id:"docker-compose"},"Docker Compose"),Object(a.b)("p",null,"Since ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.docker.com/compose/"}),"Docker Compose")," is a minimal orchestration platform, the architecture doesn't change from what's mentioned above."),Object(a.b)("h3",{id:"kubernetes"},"Kubernetes"),Object(a.b)("p",null,"When ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://kubernetes.io/"}),"Kubernetes")," is used to orchestrate your platform, all of the Docker images used are required to be stored in a ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.docker.com/registry/"}),"Docker registry"),".\nTo solve this issue, Temple integrates a registry into the Kubernetes infrastructure, and pushes all of the locally generated application images to it during the deployment process.\nThird party images like Kong or the Database used are all already stored in public repositories like ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://hub.docker.com"}),"Docker Hub"),"."),Object(a.b)("p",null,"This changes our architecture diagram to look like this:"),Object(a.b)("img",{alt:"System Architecture Kube",src:Object(i.a)("img/system-architecture-kube.png")}),Object(a.b)("h2",{id:"extending-the-basic-example"},"Extending the basic example"),Object(a.b)("p",null,"As we add more features to our example Templefile, more infrastructure will be generated to support it."),Object(a.b)("h3",{id:"foreign-keys"},"Foreign Keys"),Object(a.b)("p",null,"Each additional service added to our Templefile results in an additional replica of the service specific infrastructure components seen above."),Object(a.b)("p",null,"Let's add an extra service to our Templefile as an example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-templefile",metastring:"{12-14}","{12-14}":!0}),"ExampleProject: project {\n  #language(go);\n  #database(postgres);\n  #provider(dockerCompose);\n}\n\nExampleService: service {\n  foo: string;\n  bar: int;\n}\n\nAnotherService: service {\n    baz: int;\n}\n")),Object(a.b)("p",null,"This results in the following changes to our architecture:"),Object(a.b)("img",{alt:"System Architecture Kube",src:Object(i.a)("img/system-architecture-two-services.png")}),Object(a.b)("p",null,"We can see that all of the existing infrastructure that supported ",Object(a.b)("inlineCode",{parentName:"p"},"ExampleService")," has been replicated for ",Object(a.b)("inlineCode",{parentName:"p"},"AnotherService"),", but everything else remains the same.\nWe can extend this further by making a Foreign Key reference between services (See the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"../guide/foreign-keys"}),"Foreign Keys & Inter-Service Communication")," guide for full details). "),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-templefile",metastring:"{10}","{10}":!0}),"ExampleProject: project {\n  #language(go);\n  #database(postgres);\n  #provider(dockerCompose);\n}\n\nExampleService: service {\n  foo: string;\n  bar: int;\n  foreignKey: AnotherService;\n}\n\nAnotherService: service {\n    baz: int;\n}\n")),Object(a.b)("p",null,"This has the effect of generating inter-service communication logic in the service-level application code.\nOn the project level, nothing changes, except the services use the hostname resolution of the orchestration platform to make HTTP requests to each other."),Object(a.b)("img",{alt:"System Architecture Kube",src:Object(i.a)("img/system-architecture-foreign-key.png")}),Object(a.b)("h3",{id:"structs"},"Structs"),Object(a.b)("p",null,"Adding a struct to a service in your Templefile represents two data items that are strongly coupled (see the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"../guide/structs"}),"Structs")," guide for details).\nThis is implemented in Temple generated projects by extending the parent's application executable to include the additional endpoints required to process struct requests.\nThe struct's data is stored in a separate table of the service's database.\nThis means that when adding structs to your Templefile, the overall system-level architecture doesn't change."),Object(a.b)("h3",{id:"auth"},"Auth"),Object(a.b)("p",null,"As per the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"../guide/authentication"}),"Authentication")," guide,\nauthentication can be added to your system by augmenting your Templefile to include ",Object(a.b)("inlineCode",{parentName:"p"},"#auth")," metadata on services, and a ",Object(a.b)("inlineCode",{parentName:"p"},"#authMethod")," tag on the project block.\nFor example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-templefile",metastring:"{5,10}","{5,10}":!0}),"ExampleProject: project {\n  #language(go);\n  #database(postgres);\n  #provider(dockerCompose);\n  #authMethod(email);\n}\n\nExampleService: service {\n  foo: string;\n  bar: int;\n  #auth;\n}\n")),Object(a.b)("p",null,"These changes result in an additional ",Object(a.b)("inlineCode",{parentName:"p"},"Auth")," service being generated automatically that stores and verifies user credentials, and issues authentication tokens to users for use with other services.\nThis is implemented by configuring Kong to check that any incoming requests have a valid ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://jwt.io/"}),"JWT"),", except those destined for the auth service.\nAny requests that are not correctly authenticated do not pass Kong, so the internal microservices can be sure that all traffic has been correctly authenticated."),Object(a.b)("p",null,"Visually, the changes to our architecture look like:"),Object(a.b)("img",{alt:"System Architecture Kube",src:Object(i.a)("img/system-architecture-auth.png")}),Object(a.b)("h3",{id:"metrics"},"Metrics"),Object(a.b)("p",null,"Temple also includes the ability to generate metrics monitoring suites, using ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://prometheus.io/"}),"Prometheus")," and ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://grafana.com/"}),"Grafana"),".\nFor full details of their use and implementations, check out the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"../guide/metrics"}),"Metrics")," guide."),Object(a.b)("p",null,"Let's add metrics to our example and see how the output changes."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-templefile",metastring:"{5}","{5}":!0}),"ExampleProject: project {\n  #language(go);\n  #database(postgres);\n  #provider(dockerCompose);\n  #metrics(prometheus);\n}\n\nExampleService: service {\n  foo: string;\n  bar: int;\n}\n")),Object(a.b)("p",null,"When a project has metrics, two more infrastructure components are needed, a Prometheus instance and a Grafana instance.\nPrometheus is a tool for aggregating metrics from all your services into one centralised place.\nEach service contains logic to aggregate metrics about its performance, which are pulled into Prometheus ready for querying.\nGrafana exposes a HTTP endpoint which allows an administrator to access a dashboard, populated with metrics pulled from Prometheus."),Object(a.b)("p",null,"This Grafana endpoint is not intended to be user-facing, so it is not routed through Kong.\nInstead, the orchestration platform exposes a separate URL that is routed directly to the Grafana instance.\nNo authentication is checked by default, so this endpoint should be kept secret and in a production grade system would be restricted to an internal network only."),Object(a.b)("p",null,"Graphically, the architecture now looks like:"),Object(a.b)("img",{alt:"System Architecture Kube",src:Object(i.a)("img/system-architecture-metrics.png")}))}u.isMDXComponent=!0},176:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o({},t,{},e)),r},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,m=p["".concat(c,".").concat(b)]||p[b]||h[b]||i;return r?a.a.createElement(m,o({ref:t},l,{components:r})):a.a.createElement(m,o({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<i;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},177:function(e,t,r){"use strict";var n=r(0),a=r(53);t.a=function(){return Object(n.useContext)(a.a)}},178:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r(182);var n=r(177);function a(e){var t=(Object(n.a)().siteConfig||{}).baseUrl,r=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?r+e.slice(1):r+e}},180:function(e,t,r){var n=r(52),a=r(27);e.exports=function(e,t,r){if(n(t))throw TypeError("String#"+r+" doesn't accept regex!");return String(a(e))}},181:function(e,t,r){var n=r(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[n]=!1,!"/./"[e](t)}catch(a){}}return!0}},182:function(e,t,r){"use strict";var n=r(18),a=r(35),i=r(180),c="".startsWith;n(n.P+n.F*r(181)("startsWith"),"String",{startsWith:function(e){var t=i(this,e,"startsWith"),r=a(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return c?c.call(t,n,r):t.slice(r,r+n.length)===n}})}}]);