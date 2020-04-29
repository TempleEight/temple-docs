(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{127:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(1),i=(n(0),n(136)),r=n(138);const l={id:"getting-started",title:"Getting Started",sidebar_label:"Getting Started"},o={id:"getting-started",title:"Getting Started",description:"import useBaseUrl from '@docusaurus/useBaseUrl';",source:"@site/docs/getting-started.md",permalink:"/temple-docs/docs/getting-started",editUrl:"https://github.com/TempleEight/temple-docs/edit/master/TempleEight/docs/getting-started.md",sidebar_label:"Getting Started",sidebar:"docsSidebar",previous:{title:"Installation",permalink:"/temple-docs/docs/installation"},next:{title:"Access Control",permalink:"/temple-docs/docs/guide/access-control"}},c=[{value:"Project Setup",id:"project-setup",children:[]},{value:"Templefile",id:"templefile",children:[{value:"Project Block",id:"project-block",children:[]},{value:"Service Blocks",id:"service-blocks",children:[]}]},{value:"Running The Example",id:"running-the-example",children:[{value:"Validating the Templefile",id:"validating-the-templefile",children:[]},{value:"Generating Code",id:"generating-code",children:[]},{value:"Output Breakdown",id:"output-breakdown",children:[]}]},{value:"Application Description",id:"application-description",children:[]},{value:"Running the application",id:"running-the-application",children:[{value:"Making Requests",id:"making-requests",children:[]}]},{value:"Automated Testing",id:"automated-testing",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],p={rightToc:c};function b({components:e,...t}){return Object(i.b)("wrapper",Object(a.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Welcome to the complete Temple getting started guide!"),Object(i.b)("p",null,"This tutorial will walk you through developing your own applications with Temple, from start to finish."),Object(i.b)("p",null,"We're going to assume you've already installed the Temple CLI, as per the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"installation"}),"Installation")," instructions. "),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"If you'd like to verify this, run ",Object(i.b)("inlineCode",{parentName:"p"},"temple --version"),", output should be ",Object(i.b)("inlineCode",{parentName:"p"},"temple X.X.X (c) 2020 TempleEight"))),Object(i.b)("h2",{id:"project-setup"},"Project Setup"),Object(i.b)("p",null,"Temple projects start their life as an empty directory. Let's make one for this tutorial:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"~/Documents \u276f\u276f\u276f mkdir temple-tutorial\n~/Documents \u276f\u276f\u276f cd temple-tutorial\n~/Documents/temple-tutorial \u276f\u276f\u276f\n")),Object(i.b)("h2",{id:"templefile"},"Templefile"),Object(i.b)("p",null,"The Templefile is the heart of the project, it contains all of the information the Temple CLI uses to build your application files."),Object(i.b)("p",null,"A Templefile is any text file with the ",Object(i.b)("inlineCode",{parentName:"p"},".temple")," extension. "),Object(i.b)("p",null,"For a full reference of the Templefile language, check out the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"reference/templefile-spec"}),"Templefile Specification"),"."),Object(i.b)("p",null,"We'll build an example Templefile from the ground up with minimal features, and add more over the rest of the guides."),Object(i.b)("p",null,"The two top level entries in a Templefile are ",Object(i.b)("em",{parentName:"p"},"projects")," and ",Object(i.b)("em",{parentName:"p"},"services"),".\nA Templefile has exactly one project block, and can have many service blocks."),Object(i.b)("h3",{id:"project-block"},"Project Block"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"ExampleProject: project {\n  #language(go);\n  #database(postgres);\n  #provider(dockerCompose);\n}\n")),Object(i.b)("p",null,"The first thing required in a Templefile is the project block. This instantiates the whole project to Temple and gives some project-level metadata."),Object(i.b)("p",null,"At the top level, we write ",Object(i.b)("inlineCode",{parentName:"p"},"ExampleProject: project"),", which defines a new ",Object(i.b)("inlineCode",{parentName:"p"},"project")," called ",Object(i.b)("inlineCode",{parentName:"p"},"ExampleProject"),".\nThis is the name Temple uses for your project globally."),Object(i.b)("p",null,"Then, inside the project block there are a number of metadata items that tell us things about the project on a global scale."),Object(i.b)("p",null,"Metadata definitions begin with ",Object(i.b)("inlineCode",{parentName:"p"},"#")," characters and tell us something about a project or a service, and how it interacts with other services.\nFor a full list of all valid metadata, see the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"reference/templefile-spec"}),"Templefile Specification"),"."),Object(i.b)("p",null,"Here, we define the server language for all services to be Golang, and the database backing everything up to be Postgres.\nWhile these two blocks are defined on the project level, they can also be overridden at the service level, if you for example wanted a certain service to be in a different language.\nThe final metadata item is the ",Object(i.b)("inlineCode",{parentName:"p"},"#provider")," block, which specifies that all of the services in this project should be orchestrated with ",Object(i.b)("inlineCode",{parentName:"p"},"docker-compose"),".\nThis is a project level item only, and can't be overridden at the service level."),Object(i.b)("h3",{id:"service-blocks"},"Service Blocks"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"ExampleService: service {\n  foo: string;\n  bar: int;\n}\n")),Object(i.b)("p",null,"The next thing to add is a Service Block.\nEach service block in a Templefile defines one generated microservice. "),Object(i.b)("p",null,"The opening statement ",Object(i.b)("inlineCode",{parentName:"p"},"TestService: service")," defines a new service, named ",Object(i.b)("inlineCode",{parentName:"p"},"ExampleService"),", which is the name Temple will use to refer to this service."),Object(i.b)("p",null,"Service block can contain two kinds of declarations: ",Object(i.b)("em",{parentName:"p"},"Property definitions")," and ",Object(i.b)("em",{parentName:"p"},"metadata"),". "),Object(i.b)("p",null,"Property declarations tell us about the kind of data belonging to the entity this service describes.\nFor example, here we say that ",Object(i.b)("inlineCode",{parentName:"p"},"ExampleService")," has a ",Object(i.b)("inlineCode",{parentName:"p"},"foo"),"  which is a ",Object(i.b)("inlineCode",{parentName:"p"},"string")," property, and a ",Object(i.b)("inlineCode",{parentName:"p"},"bar"),", which is an ",Object(i.b)("inlineCode",{parentName:"p"},"int")," property.\nProperty declarations can either be a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"reference/templefile-primitives"}),Object(i.b)("em",{parentName:"a"},"primitive")," datatype"),", or be a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"guide/foreign-keys"}),Object(i.b)("em",{parentName:"a"},"foreign key"))," to another service."),Object(i.b)("p",null,"Every service in Temple also has an implicit ",Object(i.b)("inlineCode",{parentName:"p"},"id")," property, which assigns a ",Object(i.b)("inlineCode",{parentName:"p"},"UUID")," to each entity stored in a service, used for foreign keys and authentication."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note: Variable names (project names, service names and property names) can clash with reserved keywords in the languages Temple generates into.\nTo mitigate this, the Temple CLI will automatically rename any conflicting variables to ",Object(i.b)("inlineCode",{parentName:"p"},"$projectName-$variableName"),".")),Object(i.b)("p",null,"All together, our example Templefile is:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"ExampleProject: project {\n  #language(go);\n  #database(postgres);\n  #provider(dockerCompose);\n}\n\nExampleService: service {\n  foo: string;\n  bar: int;\n}\n")),Object(i.b)("h2",{id:"running-the-example"},"Running The Example"),Object(i.b)("p",null,"Now that we have created our example Templefile, save it in a file named ",Object(i.b)("inlineCode",{parentName:"p"},"example.temple"),", in our ",Object(i.b)("inlineCode",{parentName:"p"},"temple-tutorial")," directory created earlier."),Object(i.b)("h3",{id:"validating-the-templefile"},"Validating the Templefile"),Object(i.b)("p",null,"The Temple CLI contains a tool for validating your Templefile before generating any code. We can invoke this tool by running:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"~/Documents/temple-tutorial \u276f\u276f\u276f temple validate example.temple\nTemplefile validated correctly\n")),Object(i.b)("p",null,"This means our Templefile is syntactically correct, and we can begin to generate all the code we need."),Object(i.b)("h3",{id:"generating-code"},"Generating Code"),Object(i.b)("p",null,"At this point, we can begin to generate some code. Running the following will begin generating code: "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"~/Documents/temple-tutorial \u276f\u276f\u276f temple generate example.temple\n")),Object(i.b)("p",null,"The first thing we'll see is the CLI prompting us to give some further generation details that are specific to the metadata selections made in our Templefile. "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'~/Documents/temple-tutorial \u276f\u276f\u276f temple generate example.temple\nWhat should the Go module name be? (expected format "github.com/username/repo")\n')),Object(i.b)("p",null,"We need to enter the name of the Golang module we'll be generating into for our project, this can be anything, but standards dictate it should be the GitHub URL of where this project will be hosted. "),Object(i.b)("p",null,"For this example enter ",Object(i.b)("inlineCode",{parentName:"p"},"github.com/temple/tutorial"),". "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'~/Documents/temple-tutorial \u276f\u276f\u276f temple generate example.temple\nWhat should the Go module name be? (expected format "github.com/username/repo")\ngithub.com/temple/tutorial\nGenerated project in /path/Documents/temple-tutorial\n')),Object(i.b)("p",null,"Now we can view the generated outputs of our project:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"~/Documents/temple-tutorial \u276f\u276f\u276f ls -1\napi\ndeploy.sh\ndocker-compose.yml\nexample-service\nexample-service-db\nexample.temple\nkong\n")),Object(i.b)("h3",{id:"output-breakdown"},"Output Breakdown"),Object(i.b)("p",null,"We'll break these outputs down to understand what each one means. "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"/example-service/")," - This directory contains the Go code for the ",Object(i.b)("inlineCode",{parentName:"p"},"ExampleService")," we defined earlier.\nA full description of this can be seen in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"reference/golang"}),"Golang Reference"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"/example-service-db/")," - This directory contains the SQL init scripts for the database backing the ",Object(i.b)("inlineCode",{parentName:"p"},"ExampleService"),".\nThese scripts manage the database schema and define which fields are stored.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"/api/")," -This directory contains the OpenAPI specification for the project, used for generating target application code.\nFull details can be seen in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"reference/openapi"}),"OpenAPI Reference"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"/kong/")," - Temple projects use ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://konghq.com/kong/"}),"Kong")," as an API Gateway, which routes traffic from outside of the application to the correct microservice internally.\nThe ",Object(i.b)("inlineCode",{parentName:"p"},"kong")," directory contains a configuration script that needs to run after all services have been deployed.\nIt informs Kong on the hostnames of the services and which API endpoints route to which services.\nFull details are available in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"ingress"}),"Ingress Guide"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"/docker-compose.yml")," - This file defines how to orchestrate all of the services in ",Object(i.b)("inlineCode",{parentName:"p"},"docker-compose"),", including Kong.\nIf Kubernetes were used instead of ",Object(i.b)("inlineCode",{parentName:"p"},"docker-compose")," for orchestration, this file would be replaced with a ",Object(i.b)("inlineCode",{parentName:"p"},"kube")," folder.\nSee the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"guide/orchestration"}),"Orchestration Guide"),". ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"/deploy.sh")," - This shell script is an automated way to deploy the application ",Object(i.b)("strong",{parentName:"p"},"for local development")," , including running all initialization steps and setting environment variables. "))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Run ",Object(i.b)("inlineCode",{parentName:"p"},"source deploy.sh")," to bring up your orchestrated services and set required environment variables to make requests.")),Object(i.b)("h2",{id:"application-description"},"Application Description"),Object(i.b)("p",null,"What we've generated here is a microservice that exposes 4 API endpoints.\nEach endpoint performs one of the CRUD (Create, Read, Update, Delete) operations respectively, on valid data that matches the description given in the Templefile."),Object(i.b)("p",null,"As all of the HTTP requests are routed through the Kong API Gateway (See the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"ingress"}),"Ingress Guide"),"), we address the requests in the form Kong requires.\nThis format is: ",Object(i.b)("inlineCode",{parentName:"p"},"$KONG_ENTRY_URL/api/$service_name/$endpoint"),".\nThe ",Object(i.b)("inlineCode",{parentName:"p"},"$KONG_ENTRY_URL")," is set in an environment variable called ",Object(i.b)("inlineCode",{parentName:"p"},"$KONG_ENTRY")," automatically by the ",Object(i.b)("inlineCode",{parentName:"p"},"deploy.sh")," script."),Object(i.b)("p",null,"The (very simple) architecture of our system is described in the below diagram: "),Object(i.b)("img",{alt:"Tutorial System Architecture",src:Object(r.a)("img/tutorial-architecture.png")}),Object(i.b)("p",null,"In our example, we have one microservice: ",Object(i.b)("inlineCode",{parentName:"p"},"ExampleService"),".\nIt consists of a Go server, that listens for requests on 4 endpoints, processes the data, and interacts with it's database to serve the request appropriately."),Object(i.b)("p",null,"These 4 endpoints are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"POST /api/example-service")," - Create a new item in the example service.\nThe request should include data in JSON format, of a form that matches what we specified in the Templefile. That is:")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'{\n  "foo": string,\n  "bar": int\n}\n')),Object(i.b)("p",null,"  This returns a confirmation from the server of the form:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'200 OK\n{\n  "id": UUID,\n  "foo": string,\n  "bar": int\n}\n')),Object(i.b)("p",null,"  Showing that the request completed successfully.\nThe ",Object(i.b)("inlineCode",{parentName:"p"},"id")," returned can be used to make future queries on this data."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"GET /api/example-service/{id}")," - Query an existing item from the database with a given ",Object(i.b)("inlineCode",{parentName:"li"},"id"),".\nIf an item exists in the database with that ",Object(i.b)("inlineCode",{parentName:"li"},"id"),", it will be returned in the form:")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'200 OK\n{\n  "id": UUID,\n  "foo": string,\n  "bar": int\n}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"PATCH /api/example-service/{id}")," - Update an existing item in the database with a given ",Object(i.b)("inlineCode",{parentName:"li"},"id"),".\nThe request should contain data in JSON format, containing the new values to update the entry to.")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'{\n  "foo": string,\n  "bar": int\n}\n')),Object(i.b)("p",null,"If the entry exists in the database, the result will be:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'200 OK\n{\n  "id": UUID,\n  "foo": string,\n  "bar": int\n}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"DELETE /api/example-service/{id}")," - Delete an existing item in the database with a given ",Object(i.b)("inlineCode",{parentName:"li"},"id"),".\nIf the entry exist in the database, the result will be:")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"200 OK\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"The OpenAPI specification generated in the ",Object(i.b)("inlineCode",{parentName:"p"},"/api")," project folder contains a full API Schema of every endpoint available in your application, their parameters and return data.")),Object(i.b)("h2",{id:"running-the-application"},"Running the application"),Object(i.b)("p",null,"Now that we've generated some application code, we can run it and test that it works as we intended."),Object(i.b)("p",null,"Make sure the Docker daemon is running (",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.docker.com/get-docker/"}),"installation instructions"),") and follow along."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"~/Documents/temple-tutorial \u276f\u276f\u276f source deploy.sh\n")),Object(i.b)("p",null,"The following output details all of the microservices being built with Docker, automatic waiting until all services are available, and then running the ",Object(i.b)("inlineCode",{parentName:"p"},"kong")," initialisation scripts."),Object(i.b)("p",null,"Let's check that the services are running:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"~/Documents/temple-tutorial \u276f\u276f\u276f docker ps --format '{{.Image}}'\nkong:2.0.1\npostgres:12.1\npostgres:12.1\ntemple-tutorial_example-service\n")),Object(i.b)("p",null,"And everything seems to be looking good."),Object(i.b)("p",null,"We can check that the entry point environment variables are set correctly:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"~/Documents/temple-tutorial \u276f\u276f\u276f echo $KONG_ENTRY\nlocalhost:8000\n")),Object(i.b)("p",null,"This address is the Kong entrypoint. By addressing all of our API requests here, Kong will automatically forward it on to the correct microservice."),Object(i.b)("h3",{id:"making-requests"},"Making Requests"),Object(i.b)("p",null,"In order to make a request to the application, we send a HTTP request to the Kong entrypoint URL with the correct data. "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'~/Documents/temple-tutorial \u276f\u276f\u276f curl -X POST  $KONG_ENTRY/api/example-service -d \'{"foo" : "Hello Temple!", "bar" : 123}\'\n{"id":"e3621abe-7e40-11ea-9934-0242c0a88002","foo":"Hello Temple!","bar":123}\n')),Object(i.b)("p",null,"Shows that we have created a new entry in ",Object(i.b)("inlineCode",{parentName:"p"},"ExampleService"),", with the ",Object(i.b)("inlineCode",{parentName:"p"},"foo"),' property set to "Hello Temple!" and the ',Object(i.b)("inlineCode",{parentName:"p"},"bar")," property set to 123.\nThe response from the application also shows the ",Object(i.b)("inlineCode",{parentName:"p"},"UUID")," for this entity, automatically assigned by the service, which we can use to refer to this entity in further requests."),Object(i.b)("p",null,"For example, sending a ",Object(i.b)("inlineCode",{parentName:"p"},"GET")," request to the service with the entity's ",Object(i.b)("inlineCode",{parentName:"p"},"id"),", returns us the data."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'~/Documents/temple-tutorial \u276f\u276f\u276f curl -X GET $KONG_ENTRY/api/example-service/e3621abe-7e40-11ea-9934-0242c0a88002\n{"id":"e3621abe-7e40-11ea-9934-0242c0a88002","foo":"v","bar":1689563322}\n')),Object(i.b)("p",null,"The full list of all generated endpoints is detailed in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"ingress"}),"Ingress Guide"),"."),Object(i.b)("h2",{id:"automated-testing"},"Automated Testing"),Object(i.b)("p",null,"Another tool contained in the Temple CLI is the automated testing tool.\nTemple will take the data model defined in the Templefile, as well as the generated sources and will automatically make requests that meet the format of the data, verifying that the returned values is as expected.\nIt can be a very useful way of end-to-end testing the application, verifying all components are functioning correctly."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"~/Documents/temple-tutorial \u276f\u276f\u276f temple test example.temple\n\ud83d\udc33 Spinning up Docker Compose infrastructure...\n\ud83e\uddea Testing ExampleService service\n    \u2705 ExampleService create\n    \u2705 ExampleService read\n    \u2705 ExampleService update\n    \u2705 ExampleService delete\n\ud83c\udf89 Everything passed\n\ud83d\udc80 Shutting down Docker Compose infrastructure...\n")),Object(i.b)("h2",{id:"next-steps"},"Next Steps"),Object(i.b)("p",null,"This concludes our end to end walkthrough of the Temple ecosystem. For next steps, continue through the more advanced pages of the tutorial, or jump ahead:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Add ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"guide/access-control"}),"Access Control")," to your services, and learn to ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"enumeration"}),"Enumerate services by others")),Object(i.b)("li",{parentName:"ul"},"Implement security policies through through the ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"guide/authentication"}),"Authentication Guide")),Object(i.b)("li",{parentName:"ul"},"Create complex relationships between entities with the ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"guide/foreign-keys"}),"Cross-Service Communication Guide")),Object(i.b)("li",{parentName:"ul"},"Take a look at expanding the generated application with custom business logic in the ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"guide/hooks"}),"Business Logic Guide")),Object(i.b)("li",{parentName:"ul"},"Constrain the values allowed to be stored by your services in the ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"guide/value-constraints"}),"Value Constraints Guide")),Object(i.b)("li",{parentName:"ul"},"Try different orchestration methods, described in the ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"guide/rchestration"}),"Orchestration Guide")),Object(i.b)("li",{parentName:"ul"},"Implement a metrics monitoring suite, detailed in the ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"guide/metrics"}),"Metrics Guide"))))}b.isMDXComponent=!0},136:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),b=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},s=function(e){var t=b(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=b(n),u=a,m=s["".concat(l,".").concat(u)]||s[u]||d[u]||r;return n?i.a.createElement(m,o({ref:t},p,{components:n})):i.a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},137:function(e,t,n){"use strict";var a=n(0),i=n(34);t.a=function(){return Object(a.useContext)(i.a)}},138:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(137);function i(e){const{siteConfig:t}=Object(a.a)(),{baseUrl:n="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}}}]);