(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{166:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return s}));var a=n(1),i=n(11),r=(n(0),n(176)),c={id:"templefile-spec",title:"Templefile Specification",sidebar_label:"Templefile Specification"},o={id:"reference/templefile-spec",title:"Templefile Specification",description:"Temple determines what to generate by taking in a **Templefile**.",source:"@site/docs/reference/templefile-spec.md",permalink:"/temple-docs/docs/reference/templefile-spec",editUrl:"https://github.com/TempleEight/temple-docs/edit/master/TempleEight/docs/reference/templefile-spec.md",sidebar_label:"Templefile Specification",sidebar:"docsSidebar",previous:{title:"Service Architecture",permalink:"/temple-docs/docs/arch/service"},next:{title:"Templefile Primitives",permalink:"/temple-docs/docs/reference/templefile-primitives"}},b=[{value:"Syntax",id:"syntax",children:[]},{value:"Comments",id:"comments",children:[]},{value:"Blocks",id:"blocks",children:[{value:"Project Block",id:"project-block",children:[]},{value:"Service Blocks",id:"service-blocks",children:[]},{value:"Struct Blocks",id:"struct-blocks",children:[]}]},{value:"Attributes",id:"attributes",children:[{value:"Foreign attributes",id:"foreign-attributes",children:[]}]},{value:"Metadata",id:"metadata",children:[{value:"Types of metadata",id:"types-of-metadata",children:[]}]}],l={rightToc:b};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Temple determines what to generate by taking in a ",Object(r.b)("strong",{parentName:"p"},"Templefile"),".\nThis is a text file containing a specification of the system to build.\nIt consists of a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#project-block"}),"project block")," and one or more ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#service-blocks"}),"service blocks"),"."),Object(r.b)("h2",{id:"syntax"},"Syntax"),Object(r.b)("p",null,"Templefiles are not whitespace-sensitive (except to terminate single-line comments), and so indentation, spaces and line breaks are not required and may be inserted at any point between keywords, literals, punctuation, and identifiers.\nEvery declaration except for block declarations must end in a semicolon."),Object(r.b)("h2",{id:"comments"},"Comments"),Object(r.b)("p",null,"Comments are a way of providing information to the human reader, and have no effect on the compiled version.\nAny valid UTF-8 characters may occur within the comment, except for the character sequence marking the end of the comment.\nComments may be used at any point where whitespace is valid."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Line comments start with ",Object(r.b)("inlineCode",{parentName:"li"},"//"),", and end with a line break."),Object(r.b)("li",{parentName:"ul"},"Block comments start with ",Object(r.b)("inlineCode",{parentName:"li"},"/*")," and end with ",Object(r.b)("inlineCode",{parentName:"li"},"*/"),".\nNote that these may not be nested, e.g. ",Object(r.b)("inlineCode",{parentName:"li"},"/* outer /* inner */ end */"),".")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-templefile"}),"// line comment\n\n/* block comment */\n\n/*\nblock comment\n*/\n\n/* block\n * comment\n */\n")),Object(r.b)("h2",{id:"blocks"},"Blocks"),Object(r.b)("p",null,"Blocks are a way of grouping declarations.\nThere are three block types: ",Object(r.b)("inlineCode",{parentName:"p"},"project"),", ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#service-blocks"}),Object(r.b)("inlineCode",{parentName:"a"},"service"))," and ",Object(r.b)("inlineCode",{parentName:"p"},"struct"),".\nA block is specified with a block name, a colon, a block type and then curly braces around the content of the block.\nThe block name is an alphanumeric string starting with a capital letter (e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"Booking"),", ",Object(r.b)("inlineCode",{parentName:"p"},"OrderItem")," or ",Object(r.b)("inlineCode",{parentName:"p"},"ABC2Schema"),")."),Object(r.b)("p",null,"The block can then contain ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#attributes"}),"attributes"),", ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#metadata"}),"metadata")," and more blocks, depending on the block type."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-templefile"}),"// This project is called Example\nExample: project {\n  // metadata goes here\n}\n")),Object(r.b)("h3",{id:"project-block"},"Project Block"),Object(r.b)("p",null,"The project block is used for configuring an entire project.\nIt includes global configuration with ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#metadata"}),"metadata"),", some of which may be overwritten by the services and structs.\nBy convention this is the first entry in the file.\nIts name is the name of the project."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-templefile"}),"Example: project {\n  #provider(kube);\n}\n")),Object(r.b)("h3",{id:"service-blocks"},"Service Blocks"),Object(r.b)("p",null,"Service blocks represent entire microservices.\nThey may contain attributes, structs (other database tables to be handled by the same service), and ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#metadata"}),"metadata"),".\nBy convention they are named in the singular, to identify a single entry, e.g. Home."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-templefile",metastring:"{6-9}","{6-9}":!0}),"Example: project {\n  #provider(kube);\n  #authMethod(email);\n}\n\nHome: service {\n  address: string;\n  #auth;\n}\n")),Object(r.b)("h3",{id:"struct-blocks"},"Struct Blocks"),Object(r.b)("p",null,"Struct blocks represent tables stored in the same database as the main service.\nEvery instance of a struct has an implicit reference to its parent service, forming a many-to-one relationship.\nThey may contain attributes, and ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#metadata"}),"metadata"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-templefile",metastring:"{10-13}","{10-13}":!0}),"Example: project {\n  #authMethod(email);\n  #provider(kube);\n}\n\nHome: service {\n  address: string;\n  #auth;\n\n  Room: struct {\n    name: string;\n    #enumerable;\n  };\n}\n")),Object(r.b)("h2",{id:"attributes"},"Attributes"),Object(r.b)("p",null,"Services and structs can contain attributes, which are pieces of information that will be stored about every entity of this type."),Object(r.b)("p",null,"Attribute names are alphanumeric strings starting with a lower-case letter, for example ",Object(r.b)("inlineCode",{parentName:"p"},"name"),", ",Object(r.b)("inlineCode",{parentName:"p"},"bookingID")," or ",Object(r.b)("inlineCode",{parentName:"p"},"what3WordsLocation"),".\nAn attribute is specified by its name, a colon, its type and then any annotations, terminated by a semicolon."),Object(r.b)("p",null,"Every attribute will have a type, which will either be a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"templefile-primitives"}),"primitive type")," or a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#foreign-attributes"}),"reference to another service or ",Object(r.b)("em",{parentName:"a"},"neighbor struct")),".\nPrimitive types may be parameterized.\nAll parameters are optional, and may be given in order or by name.\nFor example, a string can be specified in the following ways:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"string")," if no length constraints are needed"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"string(10)")," or ",Object(r.b)("inlineCode",{parentName:"li"},"string(maxLength: 10)")," if only an upper bound is required."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"string(10, 5)"),",\n",Object(r.b)("inlineCode",{parentName:"li"},"string(maxLength: 10, minLength: 5)")," or",Object(r.b)("br",{parentName:"li"}),Object(r.b)("inlineCode",{parentName:"li"},"string(minLength: 5, maxLength: 10)")," if both bounds are needed.")),Object(r.b)("p",null,"Annotations are given with an ",Object(r.b)("inlineCode",{parentName:"p"},"@")," followed by the name of the annotation, for example ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../guide/access-control"}),Object(r.b)("inlineCode",{parentName:"a"},"@server"))," or ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../guide/value-constraints"}),Object(r.b)("inlineCode",{parentName:"a"},"@unique")),".\nThey may be used in combination without any separators."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-templefile"}),"ExampleService: service {\n  firstName: string;\n  lastName: string(20);\n  handle: string @serverSet @unique;\n  score: int(min: 0) @server;\n}\n")),Object(r.b)("h3",{id:"foreign-attributes"},"Foreign attributes"),Object(r.b)("p",null,"Attributes may also be references to other services.\nAdditionally, you may reference ",Object(r.b)("em",{parentName:"p"},"neighbor structs")," from inside a struct: this means structs inside the same service as the current struct.\nSimply use the name of the service as the type."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-templefile",metastring:"{7}","{7}":!0}),"Package: service {\n  width: int;\n  height: int;\n}\n\nDelivery: service {\n  box: Package @unique;\n  destination: string;\n}\n")),Object(r.b)("p",null,"Note that cycles and self-references are not legal, as it is impossible to initialize such a structure."),Object(r.b)("h2",{id:"metadata"},"Metadata"),Object(r.b)("p",null,"Blocks may contain metadata, identified by a leading ",Object(r.b)("inlineCode",{parentName:"p"},"#"),".\nThese are used to configure the block.\nSome metadata takes parameters, with the same syntax as with attribute type parameters.\nThe argument may be named (",Object(r.b)("inlineCode",{parentName:"p"},"#readable(by: this)"),"), or not (",Object(r.b)("inlineCode",{parentName:"p"},"#readable(this)"),").\nNo block may include the same metadata item twice."),Object(r.b)("p",null,"The parameters may be single words (e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"go"),"), or lists (e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"[delete, update]"),").\nThere is a short-hand syntax for lists: ",Object(r.b)("inlineCode",{parentName:"p"},"#omit[delete, update]")," is the same as ",Object(r.b)("inlineCode",{parentName:"p"},"#omit([delete, update])"),"."),Object(r.b)("h3",{id:"types-of-metadata"},"Types of metadata"),Object(r.b)("h4",{id:"providerprovider-prov"},Object(r.b)("inlineCode",{parentName:"h4"},"#provider(provider: prov)")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Blocks"),": Project"),Object(r.b)("p",null,"Specify the provider to use for orchestration code generated. If this is not given, no orchestration code is generated. See the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../guide/orchestration"}),"Orchestration")," guide."),Object(r.b)("p",null,"Possible values of ",Object(r.b)("inlineCode",{parentName:"p"},"provider"),":"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"kubernetes"),"/",Object(r.b)("inlineCode",{parentName:"li"},"kube"),"/",Object(r.b)("inlineCode",{parentName:"li"},"k8s"),": Use ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://kubernetes.io/"}),"Kubernetes"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"dockerCompose"),"/",Object(r.b)("inlineCode",{parentName:"li"},"dc"),": Use ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.docker.com/compose/"}),"Docker Compose"),".")),Object(r.b)("h4",{id:"metricsmetrics-m"},Object(r.b)("inlineCode",{parentName:"h4"},"#metrics(metrics: m)")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Blocks"),": Project"),Object(r.b)("p",null,"Specify the provider to use for recording metrics on the project. If this is not given, no measurement code is generated. See the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../guide/metrics"}),"Metrics")," guide."),Object(r.b)("p",null,"Possible values of ",Object(r.b)("inlineCode",{parentName:"p"},"m"),":"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"prometheus"),": Use ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://prometheus.io/"}),"Prometheus"),"."),Object(r.b)("li",{parentName:"ul"},"More providers are coming soon.")),Object(r.b)("h4",{id:"authmethodmethod-auth"},Object(r.b)("inlineCode",{parentName:"h4"},"#authMethod(method: auth)")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Blocks"),": Project"),Object(r.b)("p",null,"Enable authentication for this project, using the method provided. See the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/temple-docs/docs/guide/authentication"}),"Authentication")," guide."),Object(r.b)("p",null,"Possible values of ",Object(r.b)("inlineCode",{parentName:"p"},"auth"),":"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"email"),": Use email and password for login."),Object(r.b)("li",{parentName:"ul"},"More methods are coming soon.")),Object(r.b)("h4",{id:"languagelanguage-lang"},Object(r.b)("inlineCode",{parentName:"h4"},"#language(language: lang)")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Blocks"),": Service and Project"),Object(r.b)("p",null,"Specify the language to generate the service server in.\nIf it is not specified, it will fall back to the value given in the project block (which also specifies the language to use for the auth service, if applicable)."),Object(r.b)("p",null,"Possible values of ",Object(r.b)("inlineCode",{parentName:"p"},"lang"),":"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"go"),": Use ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://golang.org/"}),"Go")," as the language for the server."),Object(r.b)("li",{parentName:"ul"},"More languages are coming soon.")),Object(r.b)("h4",{id:"databasedatabase-db"},Object(r.b)("inlineCode",{parentName:"h4"},"#database(database: db)")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Blocks"),": Service and Project"),Object(r.b)("p",null,"Specify the database engine to use for the database backing the service.\nIf it is not specified, it will fall back to the value given in the project block (which also specifies the database engine to use for the auth service database, if applicable)."),Object(r.b)("p",null,"Possible values of ",Object(r.b)("inlineCode",{parentName:"p"},"db"),":"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"postgres"),": Use ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.postgresql.org/"}),"PostgreSQL")," as the database for the server."),Object(r.b)("li",{parentName:"ul"},"More databases are coming soon.")),Object(r.b)("h4",{id:"enumerable"},Object(r.b)("inlineCode",{parentName:"h4"},"#enumerable")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Blocks"),": Service and Struct"),Object(r.b)("p",null,"Generate a list endpoint for this service/struct. See the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../guide/enumeration"}),"Enumeration")," guide."),Object(r.b)("h4",{id:"auth"},Object(r.b)("inlineCode",{parentName:"h4"},"#auth")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Blocks"),": Service"),Object(r.b)("p",null,"Mark this service as one tied to an account, so there is a 1:1 mapping between a login account and an entry in this service."),Object(r.b)("h4",{id:"omitendpoints-endpoint"},Object(r.b)("inlineCode",{parentName:"h4"},"#omit(endpoints: [endpoint])")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Blocks"),": Service and Struct"),Object(r.b)("p",null,"Do not generate the specified endpoints. See the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../guide/omitting-endpoints"}),"Omitting Endpoints")," guide."),Object(r.b)("p",null,"Possible values of ",Object(r.b)("inlineCode",{parentName:"p"},"endpoint"),":"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"create")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"read")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"update")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"delete"))),Object(r.b)("h4",{id:"readableby-scope-writableby-scope"},Object(r.b)("inlineCode",{parentName:"h4"},"#readable(by: scope)"),", ",Object(r.b)("inlineCode",{parentName:"h4"},"#writable(by: scope)")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Blocks"),": Project and Service"),Object(r.b)("p",null,"Specify who is allowed to perform read/write operations on this service.\nThe fallback value can be given in the project block, otherwise it will be ",Object(r.b)("inlineCode",{parentName:"p"},"this")," for projects with auth, or ",Object(r.b)("inlineCode",{parentName:"p"},"all")," for projects without.\nSee the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../guide/access-control"}),"Access Control")," guide."),Object(r.b)("p",null,"Possible values of ",Object(r.b)("inlineCode",{parentName:"p"},"scope"),":"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"this")," Only the creator of this service entry may read/edit it."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"all")," Anyone may read/edit it.")))}s.isMDXComponent=!0},176:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),s=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},p=function(e){var t=s(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,u=p["".concat(c,".").concat(d)]||p[d]||m[d]||r;return n?i.a.createElement(u,o({ref:t},l,{components:n})):i.a.createElement(u,o({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=d;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<r;l++)c[l]=n[l];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);