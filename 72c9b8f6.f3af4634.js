(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{144:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var o=n(1),a=(n(0),n(165));const r={id:"hooks",title:"Business Logic & Hooks",sidebar_label:"Business Logic & Hooks"},i={id:"guide/hooks",title:"Business Logic & Hooks",description:"We know that the code generated by Temple won't necessarily satisfy every use case.",source:"@site/docs/guide/hooks.md",permalink:"/temple-docs/docs/guide/hooks",editUrl:"https://github.com/TempleEight/temple-docs/edit/master/TempleEight/docs/guide/hooks.md",sidebar_label:"Business Logic & Hooks",sidebar:"docsSidebar",previous:{title:"Enumeration",permalink:"/temple-docs/docs/guide/enumeration"},next:{title:"Adding Endpoints",permalink:"/temple-docs/docs/guide/adding-endpoints"}},c=[{value:"Adding custom logic",id:"adding-custom-logic",children:[]},{value:"Registering a hook",id:"registering-a-hook",children:[]},{value:"Modifying the DAO request",id:"modifying-the-dao-request",children:[]},{value:"Conditionally updating the datastore input",id:"conditionally-updating-the-datastore-input",children:[]},{value:"Modifying the response to the client",id:"modifying-the-response-to-the-client",children:[]},{value:"Making additional DAO calls",id:"making-additional-dao-calls",children:[]},{value:"Aborting Requests",id:"aborting-requests",children:[]}],l={rightToc:c};function u({components:e,...t}){return Object(a.b)("wrapper",Object(o.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"We know that the code generated by Temple won't necessarily satisfy every use case.\nThat's why we made it easy to modify and extend the application logic, without sacrificing the ability to regenerate code after.\nThis short guide will walk you through how to add custom business logic to your application.\nWe'll be using the ",Object(a.b)("inlineCode",{parentName:"p"},"ExampleProject")," from the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/temple-docs/docs/getting-started"}),"Getting Started")," guide, and we'll assume you have a basic familiarity with Go syntax."),Object(a.b)("h2",{id:"adding-custom-logic"},"Adding custom logic"),Object(a.b)("p",null,"In the ",Object(a.b)("inlineCode",{parentName:"p"},"example-service")," directory, you'll find the following files and folders:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"~/Documents/temple-tutorial \u276f\u276f\u276f ls -1 example-service\nDockerfile\nconfig.json\ndao\nexample-service.go\ngo.mod\nhook.go\nsetup.go\nutil\n")),Object(a.b)("p",null,"We're most interested in ",Object(a.b)("inlineCode",{parentName:"p"},"setup.go")," for this guide, which is where you can add additional logic that won't be lost if you need to regenerate your Templefile."),Object(a.b)("p",null,"This file will start off looking fairly empty:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-go"}),'package main\n\nimport "github.com/gorilla/mux"\n\nfunc (env *env) setup(router *mux.Router) {\n    // Add user defined code here\n}\n')),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"setup")," method defined on ",Object(a.b)("inlineCode",{parentName:"p"},"env")," here is invoked before the HTTP server is started.\nIt gives you, the developer, the opportunity to:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"register hooks, to be executed before or after any database calls"),Object(a.b)("li",{parentName:"ul"},"register new endpoints with the router")),Object(a.b)("p",null,"Hooks provide an interface for you to define custom logic that is executed before or after a specific database interaction.\nThis may include logic for additional validation of request parameters or providing values to be stored that are not included in the request (see ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/temple-docs/docs/guide/value-annotations"}),"value annotations")," for more on this)."),Object(a.b)("h2",{id:"registering-a-hook"},"Registering a hook"),Object(a.b)("p",null,"Within the ",Object(a.b)("inlineCode",{parentName:"p"},"env")," object that the ",Object(a.b)("inlineCode",{parentName:"p"},"setup")," method is defined on, you will find an attribute called ",Object(a.b)("inlineCode",{parentName:"p"},"hook"),".\nHook is a struct that is defined in ",Object(a.b)("inlineCode",{parentName:"p"},"hook.go"),", which defines two methods for each endpoint. These are named ",Object(a.b)("inlineCode",{parentName:"p"},"Before<endpoint>")," and ",Object(a.b)("inlineCode",{parentName:"p"},"After<endpoint>"),", where ",Object(a.b)("inlineCode",{parentName:"p"},"<endpoint>")," may be any one of ",Object(a.b)("inlineCode",{parentName:"p"},"Create"),", ",Object(a.b)("inlineCode",{parentName:"p"},"Read"),", ",Object(a.b)("inlineCode",{parentName:"p"},"Update"),", ",Object(a.b)("inlineCode",{parentName:"p"},"Delete"),", ",Object(a.b)("inlineCode",{parentName:"p"},"List")," or ",Object(a.b)("inlineCode",{parentName:"p"},"Identify"),".\nMore information on these endpoints can be found in ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/temple-docs/docs/arch/service"}),"Service Architecture"),"."),Object(a.b)("p",null,"For our example project, the two methods for the ",Object(a.b)("inlineCode",{parentName:"p"},"Create")," endpoint are as follows:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-go"}),"func (h *Hook) BeforeCreate(hook func(env *env, req createExampleServiceRequest, input *dao.CreateExampleServiceInput) *HookError) {\n  ...\n}\n\nfunc (h *Hook) AfterCreate(hook func(env *env, exampleService *dao.ExampleService) *HookError) {\n  ...\n}\n\n")),Object(a.b)("p",null,"By defining a function that matches the argument type defined here, then passing it to the function, we are able to execute arbitrary code before or after the datastore interaction for each endpoint.\nThe types of each hook vary, depending on the operation they are defined for.\nFor example, where a request body is not provided, such as in a GET request, the ",Object(a.b)("inlineCode",{parentName:"p"},"req")," argument is omitted from the hook."),Object(a.b)("p",null,"If we modify our ",Object(a.b)("inlineCode",{parentName:"p"},"setup.go")," to include a new function called ",Object(a.b)("inlineCode",{parentName:"p"},"ourCustomHook"),", where the arguments to the function match those for the ",Object(a.b)("inlineCode",{parentName:"p"},"BeforeCreate")," argument, we can register a new hook that will be invoked every time a new create request is issued."),Object(a.b)("p",null,"Our code will now read:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "github.com/gorilla/mux"\n    "github.com/temple/tutorial/example-service/dao"\n)\n\nfunc (env *env) setup(router *mux.Router) {\n    env.hook.BeforeCreate(ourCustomBeforeHook)\n}\n\nfunc ourCustomBeforeHook(env *env, req createExampleServiceRequest, input *dao.CreateExampleServiceInput) *HookError {\n    return nil\n}\n')),Object(a.b)("h2",{id:"modifying-the-dao-request"},"Modifying the DAO request"),Object(a.b)("p",null,"Now that we have defined our custom hook, we can start populating it with additional logic.\nTo start, we will show how you can modify the DAO request.\nThe DAO provides a common interface to access a backing store, without directly exposing the implementation details of doing so.\nMore information about this can be found in ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/temple-docs/docs/arch/service"}),"Service Architecture"),"."),Object(a.b)("p",null,"The custom hook we defined takes 3 parameters:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"the environment, ",Object(a.b)("inlineCode",{parentName:"li"},"env")),Object(a.b)("li",{parentName:"ul"},"the request provided by the user, ",Object(a.b)("inlineCode",{parentName:"li"},"req")),Object(a.b)("li",{parentName:"ul"},"the input to the datastore request, ",Object(a.b)("inlineCode",{parentName:"li"},"input"))),Object(a.b)("p",null,"The input object is passed as a pointer, which gets directly passed to the DAO after the hook invocation and will be used as the query for the datastore.\nThis means if we update any attributes of this object, the data store call will be updated too.\nIn the following example, we modify all ",Object(a.b)("inlineCode",{parentName:"p"},"Create")," requests to the datastore so that each ",Object(a.b)("inlineCode",{parentName:"p"},"foo"),' property contains the string "Hello, World!".'),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "github.com/gorilla/mux"\n    "github.com/temple/tutorial/example-service/dao"\n)\n\nfunc (env *env) setup(router *mux.Router) {\n    env.hook.BeforeCreate(ourCustomBeforeHook)\n}\n\nfunc ourCustomBeforeHook(env *env, req createExampleServiceRequest, input *dao.CreateExampleServiceInput) *HookError {\n    input.Foo = "Hello, world!"\n    return nil\n}\n')),Object(a.b)("p",null,"If we perform some example requests, we see that our hook updates the object that is stored, irrespective of what was passed in the request:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),'# Create a new object\n\u276f\u276f\u276f curl -X POST $KONG_ENTRY/api/example-service -d \'{"foo": "abcd", "bar": 10}\'\n{"id":"43cc65f5-823c-11ea-9dc4-0242ac180003","foo":"Hello, world!","bar":10}\n\n# Retrieve that same object \n\u276f\u276f\u276f curl -X GET $KONG_ENTRY/api/example-service/43cc65f5-823c-11ea-9dc4-0242ac180003\n{"id":"43cc65f5-823c-11ea-9dc4-0242ac180003","foo":"Hello, world!","bar":10}\n')),Object(a.b)("h2",{id:"conditionally-updating-the-datastore-input"},"Conditionally updating the datastore input"),Object(a.b)("p",null,"As well as updating the datastore request, we could also use the user's request to conditionally update certain fields:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "github.com/gorilla/mux"\n    "github.com/temple/tutorial/example-service/dao"\n)\n\nfunc (env *env) setup(router *mux.Router) {\n    env.hook.BeforeCreate(ourCustomBeforeHook)\n}\n\nfunc ourCustomBeforeHook(env *env, req createExampleServiceRequest, input *dao.CreateExampleServiceInput) *HookError {\n    if (req.Bar == 5) {\n        input.Foo = "Hello, world!"\n    }\n    return nil\n}\n')),Object(a.b)("p",null,"This will only update the value of ",Object(a.b)("inlineCode",{parentName:"p"},"Foo")," if the value 5 is passed for bar: "),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),'# Create a new object where Bar != 5\n\u276f\u276f\u276f curl -X POST $KONG_ENTRY/api/example-service -d \'{"foo": "abcd", "bar": 10}\'\n{"id":"e8e2e06e-823c-11ea-84ea-0242ac170003","foo":"abcd","bar":10}\n\n# Create a new object where Bar == 5\n\u276f\u276f\u276f curl $KONG_ENTRY/api/example-service -d \'{"foo": "abcd", "bar": 5}\'\n{"id":"f244e8f0-823c-11ea-84ea-0242ac170003","foo":"Hello, world!","bar":5}\n')),Object(a.b)("h2",{id:"modifying-the-response-to-the-client"},"Modifying the response to the client"),Object(a.b)("p",null,"As well as creating a hook that is invoked before the datastore call, we are able to define a hook that is invoked after the datastore call.\nFor the same ",Object(a.b)("inlineCode",{parentName:"p"},"ExampleService")," as the previous examples, a hook invoked after creating an object would look like:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "github.com/gorilla/mux"\n    "github.com/temple/tutorial/example-service/dao"\n)\n\nfunc (env *env) setup(router *mux.Router) {\n    env.hook.AfterCreate(ourCustomAfterHook)\n}\n\nfunc ourCustomAfterHook(env *env, exampleService *dao.ExampleService) *HookError {\n    return nil\n}\n')),Object(a.b)("p",null,"There are only two arguments to this function:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"the environment, ",Object(a.b)("inlineCode",{parentName:"li"},"env")),Object(a.b)("li",{parentName:"ul"},"the newly created object, ",Object(a.b)("inlineCode",{parentName:"li"},"exampleService"))),Object(a.b)("p",null,"We are able to modify the object that has just been created, before it is returned to the client, by updating the attributes of the object ",Object(a.b)("inlineCode",{parentName:"p"},"exampleService"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "github.com/gorilla/mux"\n    "github.com/temple/tutorial/example-service/dao"\n)\n\nfunc (env *env) setup(router *mux.Router) {\n    env.hook.AfterCreate(ourCustomAfterHook)\n}\n\nfunc ourCustomAfterHook(env *env, exampleService *dao.ExampleService) *HookError {\n    exampleService.Bar = 42\n    return nil\n}\n')),Object(a.b)("p",null,"Since this only modifies the response to the client, and not what's stored in the datastore, the value will not be modified in any subsequent GET requests:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-shell"}),'# Create a new object\n\u276f\u276f\u276f curl $KONG_ENTRY/api/example-service -d \'{"foo": "abcd", "bar": 10}\'\n{"id":"12bff66e-8243-11ea-9908-0242ac180003","foo":"abcd","bar":42}\n\n# Retrieve that same object\n\u276f\u276f\u276f curl -X GET $KONG_ENTRY/api/example-service/12bff66e-8243-11ea-9908-0242ac180003\n{"id":"12bff66e-8243-11ea-9908-0242ac180003","foo":"abcd","bar":10}\n')),Object(a.b)("h2",{id:"making-additional-dao-calls"},"Making additional DAO calls"),Object(a.b)("p",null,"One thing we have not yet discussed is the ",Object(a.b)("inlineCode",{parentName:"p"},"env")," argument to each of the hooks.\nThe environment gives you access to the DAO as well as methods for accessing cross service communication."),Object(a.b)("p",null,"This means you can perform additional database requests as part of your ",Object(a.b)("inlineCode",{parentName:"p"},"Before")," or ",Object(a.b)("inlineCode",{parentName:"p"},"After")," hook."),Object(a.b)("p",null,"These can include the predefined database calls, or your own.\nFor more information on this, see ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"adding-dao-functions"}),"adding DAO functions"),"."),Object(a.b)("p",null,"For example, before updating a given entry, you may want to check what is already stored, and modify the update request accordingly:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "github.com/gorilla/mux"\n    "github.com/temple/tutorial/example-service/dao"\n)\n\nfunc (env *env) setup(router *mux.Router) {\n    env.hook.BeforeUpdate(ourCustomBeforeUpdateHook)\n}\n\nfunc ourCustomBeforeUpdateHook(env *env, req updateExampleServiceRequest, input *dao.UpdateExampleServiceInput) *HookError {\n    current, _ := env.dao.ReadExampleService(dao.ReadExampleServiceInput{\n        ID: input.ID,\n    })\n\n    // Modify the update query if what is currently stored is > 10\n    if current.Bar > 10 {\n        input.Bar = current.Bar\n    }\n\n    return nil\n}\n')),Object(a.b)("h2",{id:"aborting-requests"},"Aborting Requests"),Object(a.b)("p",null,"Finally, Hooks give you the ability to abort requests early, by returning a ",Object(a.b)("inlineCode",{parentName:"p"},"HookError")," from the hook."),Object(a.b)("p",null,"For example, we could use this to disallow any requests where the value of ",Object(a.b)("inlineCode",{parentName:"p"},"Bar")," is greater than 10:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "errors"\n    "net/http"\n\n    "github.com/gorilla/mux"\n    "github.com/temple/tutorial/example-service/dao"\n)\n\nfunc (env *env) setup(router *mux.Router) {\n    env.hook.BeforeCreate(ourCustomBeforeHook)\n}\n\nfunc ourCustomBeforeHook(env *env, req createExampleServiceRequest, input *dao.CreateExampleServiceInput) *HookError {\n    if input.Bar > 10 {\n        return &HookError{\n            statusCode: http.StatusBadRequest,\n            error:      errors.New("The value of bar must be less than or equal to 10"),\n        }\n    }\n    return nil\n}\n')),Object(a.b)("p",null,"Running some example requests:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),'# An example request where bar <= 10\n\u276f\u276f\u276f curl $KONG_ENTRY/api/example-service -d \'{"foo": "abcd", "bar": 5}\'\n{"id":"1ee638c1-8246-11ea-aef0-0242ac180003","foo":"abcd","bar":5}\n\n# An example request where bar > 10\n\u276f\u276f\u276f curl $KONG_ENTRY/api/example-service -d \'{"foo": "abcd", "bar": 15}\'\n{"error":"The value of bar must be less than or equal to 10"}\n\n')))}u.isMDXComponent=!0},165:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),b=o,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||r;return n?a.a.createElement(m,c({ref:t},u,{components:n})):a.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<r;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);