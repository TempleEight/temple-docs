(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{167:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(1),i=n(11),r=(n(0),n(176)),o=n(178),c={id:"getting-started",title:"Getting Started",sidebar_label:"Getting Started"},l={id:"getting-started",title:"Getting Started",description:"import useBaseUrl from '@docusaurus/useBaseUrl';",source:"@site/docs/getting-started.md",permalink:"/temple-docs/docs/getting-started",editUrl:"https://github.com/TempleEight/temple-docs/edit/master/TempleEight/docs/getting-started.md",sidebar_label:"Getting Started",sidebar:"docsSidebar",previous:{title:"Installation",permalink:"/temple-docs/docs/installation"},next:{title:"Access Control",permalink:"/temple-docs/docs/guide/access-control"}},p=[{value:"Project Definition",id:"project-definition",children:[{value:"Defining a Project",id:"defining-a-project",children:[]},{value:"Defining a Service",id:"defining-a-service",children:[]},{value:"Validating a Templefile",id:"validating-a-templefile",children:[]},{value:"Generating Code",id:"generating-code",children:[]},{value:"Viewing the Generated Project",id:"viewing-the-generated-project",children:[]}]},{value:"Generated Services",id:"generated-services",children:[]},{value:"System Architecture",id:"system-architecture",children:[]},{value:"Running the application",id:"running-the-application",children:[]},{value:"Making Requests",id:"making-requests",children:[{value:"Creating an Entity",id:"creating-an-entity",children:[]},{value:"Reading an Entity",id:"reading-an-entity",children:[]},{value:"Updating an Entity",id:"updating-an-entity",children:[]},{value:"Deleting an Entity",id:"deleting-an-entity",children:[]}]},{value:"Next Steps",id:"next-steps",children:[]}],s={rightToc:p};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,'This guide is a "Hello World"-style tutorial which will show you how to build a basic application using Temple.\nYou will define a simple data model, use Temple to generate a set of microservices, and then deploy the services locally to perform some sample requests.'),Object(r.b)("p",null,"Before getting started, make sure you have installed the Temple CLI according to the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"installation"}),"Installation")," guide."),Object(r.b)("h2",{id:"project-definition"},"Project Definition"),Object(r.b)("p",null,"Temple projects start by defining a data model in our custom Templefile.\nA data model expresses the different entities within a system, along with their attributes and any relationships between different types of data.\nThe Templefile also includes configuration for how the project will be structured, as well as the components that will be generated."),Object(r.b)("p",null,"Start by making a new directory, then move into it:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"~ \u276f\u276f\u276f mkdir temple-tutorial\n~ \u276f\u276f\u276f cd temple-tutorial\n~/temple-tutorial \u276f\u276f\u276f\n")),Object(r.b)("p",null,"In this new directory, create a plain text file called ",Object(r.b)("inlineCode",{parentName:"p"},"simple.temple"),".\nWithin this file we are going to define a new project and an example service."),Object(r.b)("h3",{id:"defining-a-project"},"Defining a Project"),Object(r.b)("p",null,"A Templefile must contain a single project block.\nThe project block gives the project a name, and defines the default configuration for generation."),Object(r.b)("p",null,"In the ",Object(r.b)("inlineCode",{parentName:"p"},"simple.temple")," file, let's define a project called ",Object(r.b)("inlineCode",{parentName:"p"},"ExampleProject"),", which sets the default language to ",Object(r.b)("inlineCode",{parentName:"p"},"go"),", the default database to ",Object(r.b)("inlineCode",{parentName:"p"},"postgres")," and configures Docker Compose to orchestrate the project:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-templefile"}),"ExampleProject: project {\n  #language(go);\n  #database(postgres);\n  #provider(dockerCompose);\n}\n")),Object(r.b)("p",null,"Each declaration that begins with a ",Object(r.b)("inlineCode",{parentName:"p"},"#")," is referred to as a metadata item."),Object(r.b)("h3",{id:"defining-a-service"},"Defining a Service"),Object(r.b)("p",null,"A Templefile can contain one or more service blocks.\nThe service block defines a single microservice within the project and has one or more attributes associated to it.\nYou can think of the attributes as you would columns stored in a database, with each entity in the service defining a value for each attribute.\nIn a database an ID column would usually be defined to uniquely identify each entity, however the Temple framework will automatically generate an ID attribute without needing to include it in the Templefile."),Object(r.b)("p",null,"Let's define a service called ",Object(r.b)("inlineCode",{parentName:"p"},"ExampleService"),", which has two attributes: a string named ",Object(r.b)("inlineCode",{parentName:"p"},"foo"),", and an integer named ",Object(r.b)("inlineCode",{parentName:"p"},"bar"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-templefile"}),"ExampleService: service {\n  foo: string;\n  bar: int;\n}\n")),Object(r.b)("p",null,"Temple has several built in types, such as ",Object(r.b)("inlineCode",{parentName:"p"},"string"),", ",Object(r.b)("inlineCode",{parentName:"p"},"int")," and ",Object(r.b)("inlineCode",{parentName:"p"},"float"),", a list of which can be found in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"reference/templefile-primitives"}),"Primitive Datatypes")," reference."),Object(r.b)("p",null,"In addition to this, attributes can also refer to other services, implying a foreign key relationship between the two.\nMore information about this can be found in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"guide/foreign-keys"}),"Foreign Key")," guide."),Object(r.b)("p",null,"Furthermore, services, like projects, can contain metadata items such as ",Object(r.b)("inlineCode",{parentName:"p"},"#language")," or ",Object(r.b)("inlineCode",{parentName:"p"},"#database"),".\nThis allows each service to override the project defaults.\nLater guides will explore these in more detail and a complete specification of the Templefile language can be found in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"reference/templefile-spec"}),"Templefile Specification"),"."),Object(r.b)("p",null,"All together, our Templefile reads:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-templefile"}),"ExampleProject: project {\n  #language(go);\n  #database(postgres);\n  #provider(dockerCompose);\n}\n\nExampleService: service {\n  foo: string;\n  bar: int;\n}\n")),Object(r.b)("h3",{id:"validating-a-templefile"},"Validating a Templefile"),Object(r.b)("p",null,"The Temple CLI contains a tool for validating your Templefile before generating any code.\nIt can be invoked by providing the path to a Templefile:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"~/temple-tutorial \u276f\u276f\u276f temple validate example.temple\nTemplefile validated correctly\n")),Object(r.b)("h3",{id:"generating-code"},"Generating Code"),Object(r.b)("p",null,"To begin code generation, execute ",Object(r.b)("inlineCode",{parentName:"p"},"temple"),", including a path to a Templefile as a trailing argument:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"~/temple-tutorial \u276f\u276f\u276f temple generate example.temple\n")),Object(r.b)("p",null,"During this stage, Temple will prompt for more details to customise the generated project.\nSince the project definition uses Go, you will be asked to input a Go module name to use for every service in the project.\nThis can take any value appropriate to your use case, however following Go convention to use the GitHub URL, we'll use ",Object(r.b)("inlineCode",{parentName:"p"},"github.com/temple/tutorial"),"."),Object(r.b)("h3",{id:"viewing-the-generated-project"},"Viewing the Generated Project"),Object(r.b)("p",null,"By default the project will be output to the current working directory:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),".\n\u251c\u2500\u2500 api/\n\u251c\u2500\u2500 deploy.sh\n\u251c\u2500\u2500 docker-compose.yml\n\u251c\u2500\u2500 example-service/\n\u251c\u2500\u2500 example-service-db/\n\u2514\u2500\u2500 kong/\n")),Object(r.b)("p",null,"Let's look at each directory and file in turn:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"/example-service/")," - contains the Go code for the ",Object(r.b)("inlineCode",{parentName:"p"},"ExampleService")," microservice we defined in the Templefile.\nA full description of this directory's contents can be seen in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"arch/service"}),"Service Architecture")," section.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"/example-service-db/")," - This directory contains the SQL init scripts for the database backing the ",Object(r.b)("inlineCode",{parentName:"p"},"ExampleService"),".\nThese scripts hold the database schema, defining which fields are stored.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"/api/")," - This directory contains the OpenAPI specification for the project, used for generating client application code.\nFor more information, check out the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"guide/open-api"}),"OpenAPI Generation")," guide.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"/kong/")," - Temple projects use ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://konghq.com/kong/"}),"Kong")," as an API Gateway, which routes incoming traffic correct microservice, via a single URL entry point.\nThe ",Object(r.b)("inlineCode",{parentName:"p"},"kong")," directory contains a configuration script which correctly configures Kong to forward traffic to the correct services, based on the URL.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"/docker-compose.yml")," - This file defines how to orchestrate all of the services in ",Object(r.b)("inlineCode",{parentName:"p"},"docker-compose"),", including Kong.\nMore information about this can be found in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"guide/orchestration"}),"Orchestration Guide")," guide.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"/deploy.sh")," - This shell script provides an automated way to deploy the application ",Object(r.b)("strong",{parentName:"p"},"for local development"),", including running all initialization steps and setting environment variables."))),Object(r.b)("h2",{id:"generated-services"},"Generated Services"),Object(r.b)("p",null,"By default, each service exposes exposes 4 API endpoints: one for each of the CRUD (Create, Read, Update, Delete) operations.\nThese 4 endpoints are defined at the following URLs:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"CREATE"),": ",Object(r.b)("inlineCode",{parentName:"li"},"POST /api/example-service")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"READ"),": ",Object(r.b)("inlineCode",{parentName:"li"},"GET /api/example-service/{id}")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"UPDATE"),": ",Object(r.b)("inlineCode",{parentName:"li"},"PUT /api/example-service/{id}")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"DELETE"),": ",Object(r.b)("inlineCode",{parentName:"li"},"DELETE /api/example-service/{id}"))),Object(r.b)("p",null,"Each of these endpoints use JSON encoding for requests and responses, which need to include the attributes defined in the Templefile in the object's body.\nWhere ",Object(r.b)("inlineCode",{parentName:"p"},"{id}")," is used in the path, this should be replaced with the ID of an existing entity in the service, which is returned in the body of a ",Object(r.b)("inlineCode",{parentName:"p"},"CREATE")," call."),Object(r.b)("p",null,"The OpenAPI specification generated in the ",Object(r.b)("inlineCode",{parentName:"p"},"/api")," project folder contains a full API Schema of every endpoint available in the application, including their parameters and possible responses.\nThis is also outlined in the ",Object(r.b)("inlineCode",{parentName:"p"},"README.md")," contained in the root of the project."),Object(r.b)("h2",{id:"system-architecture"},"System Architecture"),Object(r.b)("p",null,"The architecture of the generated project is described in the following diagram: "),Object(r.b)("img",{alt:"Tutorial System Architecture",src:Object(o.a)("img/tutorial-architecture.png")}),Object(r.b)("p",null,"For more information on how Temple generated systems are architected, check out the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"arch/system"}),"System Architecture")," section."),Object(r.b)("h2",{id:"running-the-application"},"Running the application"),Object(r.b)("p",null,"Before attempting to run the application, ensure ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.docker.com/get-docker/"}),"Docker is installed")," and the daemon is running."),Object(r.b)("p",null,"Firstly invoke the deployment script using ",Object(r.b)("inlineCode",{parentName:"p"},"source"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"~/temple-tutorial \u276f\u276f\u276f source deploy.sh\n")),Object(r.b)("p",null,"Using ",Object(r.b)("inlineCode",{parentName:"p"},"source")," allows the ",Object(r.b)("inlineCode",{parentName:"p"},"KONG_ENTRY")," environment variable to be set, which defines the base URL for requests to be made against:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"~/temple-tutorial \u276f\u276f\u276f echo $KONG_ENTRY\nlocalhost:8000\n")),Object(r.b)("h2",{id:"making-requests"},"Making Requests"),Object(r.b)("h3",{id:"creating-an-entity"},"Creating an Entity"),Object(r.b)("p",null,"To create a new entity in the service, invoke a POST request to service's base URL, providing a JSON object that defines a value for each attribute in the Templefile:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'~/temple-tutorial \u276f\u276f\u276f curl -X POST $KONG_ENTRY/api/example-service -d \'{"foo" : "Hello Temple!", "bar" : 123}\'\n{"id":"e3621abe-7e40-11ea-9934-0242c0a88002","foo":"Hello Temple!","bar":123}\n')),Object(r.b)("p",null,"The response from a ",Object(r.b)("inlineCode",{parentName:"p"},"CREATE")," request is the JSON object representing the entity stored, along with a unique identifier for that entity."),Object(r.b)("h3",{id:"reading-an-entity"},"Reading an Entity"),Object(r.b)("p",null,"To retrieve an existing entity from the service, invoke a GET request to the service's base URL, including the ID of the entity you want to examine:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'~/temple-tutorial \u276f\u276f\u276f curl -X GET $KONG_ENTRY/api/example-service/e3621abe-7e40-11ea-9934-0242c0a88002\n{"id":"e3621abe-7e40-11ea-9934-0242c0a88002","foo":"Hello Temple!","bar":123}\n')),Object(r.b)("p",null,"The response from the ",Object(r.b)("inlineCode",{parentName:"p"},"READ")," request is the JSON object representing the entity stored, or an error if it was not found."),Object(r.b)("h3",{id:"updating-an-entity"},"Updating an Entity"),Object(r.b)("p",null,"To update an existing entity, invoke a PUT request to the service's base URL, including the ID of the entity you want to update, as well as a JSON object of the new attributes to store:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'~/temple-tutorial \u276f\u276f\u276f curl -X PUT $KONG_ENTRY/api/example-service/e3621abe-7e40-11ea-9934-0242c0a88002 -d {"foo": "Goodbye Temple!", "bar": 456}\'\n{"id":"e3621abe-7e40-11ea-9934-0242c0a88002","foo":"Goodbye Temple!","bar":456}\n')),Object(r.b)("p",null,"The response from the ",Object(r.b)("inlineCode",{parentName:"p"},"UPDATE")," request is the JSON object representing the new entity stored, or an error if it was not found."),Object(r.b)("h3",{id:"deleting-an-entity"},"Deleting an Entity"),Object(r.b)("p",null,"To delete an existing entity, invoke a DELETE request to the service's base URL, including the ID of the entity you want to delete:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"~/temple-tutorial \u276f\u276f\u276f curl -X DELETE $KONG_ENTRY/api/example-service/e3621abe-7e40-11ea-9934-0242c0a88002\n{}\n")),Object(r.b)("p",null,"The response from the ",Object(r.b)("inlineCode",{parentName:"p"},"DELETE")," request is an empty JSON object."),Object(r.b)("h2",{id:"next-steps"},"Next Steps"),Object(r.b)("p",null,"In this guide, we defined a simple data model, used Temple to generate a microservice, deployed the services locally and then performed some sample requests.\nUsing this as a starting point, explore the full power of Temple:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"guide/authentication"}),"Add authentication")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"guide/access-control"}),"Enforce access control")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"guide/foreign-keys"}),"Reference other service entities with foreign keys")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"guide/hooks"}),"Add business logic with hooks")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"guide/value-constraints"}),"Constrain stored values")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"guide/open-api"}),"Generate frontend APIs with OpenAPI")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"guide/enumeration"}),"Add enumeration endpoints")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"guide/metrics"}),"Augment with metrics")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"guide/adding-endpoints"}),"Add your own endpoints")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"guide/adding-dao-functions"}),"Add your own database queries")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"guide/omitting-endpoints"}),"Remove endpoints from generation")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"guide/value-annotations"}),"Restrict attributes to be server or client facing")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"guide/orchestration"}),"Use alternative orchestration")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"guide/regeneration"}),"Make changes to your Templefile and regenerate without losing your changes")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"guide/temple-test"}),"Test your project with Temple Test"))))}b.isMDXComponent=!0},176:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),s=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=s(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(n),u=a,m=b["".concat(o,".").concat(u)]||b[u]||d[u]||r;return n?i.a.createElement(m,c({ref:t},p,{components:n})):i.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<r;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},177:function(e,t,n){"use strict";var a=n(0),i=n(53);t.a=function(){return Object(a.useContext)(i.a)}},178:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(182);var a=n(177);function i(e){var t=(Object(a.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},180:function(e,t,n){var a=n(52),i=n(27);e.exports=function(e,t,n){if(a(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(i(e))}},181:function(e,t,n){var a=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[a]=!1,!"/./"[e](t)}catch(i){}}return!0}},182:function(e,t,n){"use strict";var a=n(18),i=n(35),r=n(180),o="".startsWith;a(a.P+a.F*n(181)("startsWith"),"String",{startsWith:function(e){var t=r(this,e,"startsWith"),n=i(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),a=String(e);return o?o.call(t,a,n):t.slice(n,n+a.length)===a}})}}]);