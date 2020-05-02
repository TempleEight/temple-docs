(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{152:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return s}));var a=n(1),i=n(11),r=(n(0),n(176)),c={id:"access-control",title:"Access Control",sidebar_label:"Access Control"},o={id:"guide/access-control",title:"Access Control",description:"In this guide we'll look at how to add access control to your services.",source:"@site/docs/guide/access-control.md",permalink:"/temple-docs/docs/guide/access-control",editUrl:"https://github.com/TempleEight/temple-docs/edit/master/TempleEight/docs/guide/access-control.md",sidebar_label:"Access Control",sidebar:"docsSidebar",previous:{title:"Getting Started",permalink:"/temple-docs/docs/getting-started"},next:{title:"Adding DAO Functions",permalink:"/temple-docs/docs/guide/adding-dao-functions"}},b=[{value:"Metadata Tags",id:"metadata-tags",children:[]},{value:"Projects with Authentication",id:"projects-with-authentication",children:[{value:"Defaults",id:"defaults",children:[]}]},{value:"Projects without Authentication",id:"projects-without-authentication",children:[]},{value:"Structs",id:"structs",children:[]},{value:"Limitations",id:"limitations",children:[]}],l={rightToc:b};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"In this guide we'll look at how to add access control to your services.\nAccess control provides a means to restrict which entities can be accessed by different users, protecting sensitive information.\nFirst we'll cover the ",Object(r.b)("inlineCode",{parentName:"p"},"#readable")," and ",Object(r.b)("inlineCode",{parentName:"p"},"#writable")," metadata tags, then we'll look at their behaviour in projects with and without authentication configured.\nAfter that we'll see how these tags affect structs.\nFinally we'll mention the limitations of this access control support.\nIt's highly recommended you check out the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"authentication"}),"Authentication")," guide before following this guide."),Object(r.b)("h2",{id:"metadata-tags"},"Metadata Tags"),Object(r.b)("p",null,"We have two metadata tags for access control, ",Object(r.b)("inlineCode",{parentName:"p"},"#readable")," and ",Object(r.b)("inlineCode",{parentName:"p"},"#writable"),".\nThese tags define how specific users can access existing entities for different endpoints:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"})),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"th"},"#readable")),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"th"},"#writable")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},"Read")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"x"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},"Update")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"x")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},"Delete")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"x")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},"List")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"x"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))))),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"List")," endpoint is not generated by default, to find out how to add it, check out the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"enumeration"}),"Enumeration")," guide.\nThe ",Object(r.b)("inlineCode",{parentName:"p"},"Identify")," endpoint added to services with ",Object(r.b)("inlineCode",{parentName:"p"},"#auth")," defined, as discussed in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"authentication"}),"Authentication")," guide, is not applicable to these access control tags. This is because by definition the ",Object(r.b)("inlineCode",{parentName:"p"},"Identify")," endpoint is only accessible by the corresponding authenticated user."),Object(r.b)("p",null,"These tags can be set to either ",Object(r.b)("inlineCode",{parentName:"p"},"by: this")," or ",Object(r.b)("inlineCode",{parentName:"p"},"by: all"),".\nFor example, taking the ",Object(r.b)("inlineCode",{parentName:"p"},"ExampleService")," from the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../getting-started"}),"Getting Started")," guide, we would write:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"ExampleService: service {\n  foo: string;\n  bar: int;\n  #readable(by: all);\n}\n")),Object(r.b)("p",null,"But what do ",Object(r.b)("inlineCode",{parentName:"p"},"by: this")," and ",Object(r.b)("inlineCode",{parentName:"p"},"by: all")," mean? Let us consider a project with authentication."),Object(r.b)("h2",{id:"projects-with-authentication"},"Projects with Authentication"),Object(r.b)("p",null,"Here we've taken the ",Object(r.b)("inlineCode",{parentName:"p"},"ExampleProject")," from the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"authentication"}),"Authentication")," guide."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-templefile"}),"ExampleProject: project {\n  #language(go);\n  #database(postgres);\n  #provider(dockerCompose);\n  #authMethod(email);\n}\n\nExampleUser: service {\n  name: string;\n  #auth;\n}\n\nExampleService: service {\n  foo: string;\n  bar: int;\n}\n")),Object(r.b)("p",null,"Since the project has authentication, every service actually has implicit default access control tags defined:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-templefile"}),"ExampleUser: service {\n  name: string;\n  #auth;\n  // implicit #readable(by: this);\n  // implicit #writable(by: this);\n}\n\nExampleService: service {\n  foo: string;\n  bar: int;\n  // implicit #readable(by: this);\n  // implicit #writable(by: this);\n}\n")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"by: this")," means that only the authenticated user that created an entity in a service can be the one to read (make ",Object(r.b)("inlineCode",{parentName:"p"},"Read")," or ",Object(r.b)("inlineCode",{parentName:"p"},"List")," requests) the entity or write (make ",Object(r.b)("inlineCode",{parentName:"p"},"Update")," or ",Object(r.b)("inlineCode",{parentName:"p"},"Delete")," requests) to the entity."),Object(r.b)("p",null,"For example, if User A makes a ",Object(r.b)("inlineCode",{parentName:"p"},"Create")," request to the ",Object(r.b)("inlineCode",{parentName:"p"},"ExampleService")," service with their access token, the resulting entity created can only be read or written by User A.\nIf User B then tries to make an ",Object(r.b)("inlineCode",{parentName:"p"},"Update")," request to User A's entity with their own access token, User B will receive a ",Object(r.b)("inlineCode",{parentName:"p"},"401 Unauthorized")," error."),Object(r.b)("p",null,"If ",Object(r.b)("inlineCode",{parentName:"p"},"by: all")," is used, any user can make the corresponding requests unimpeded. So if instead we define ",Object(r.b)("inlineCode",{parentName:"p"},"ExampleService")," like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-templefile"}),"ExampleService: service {\n  foo: string;\n  bar: int;\n  #readable(by: all);\n  #writable(by: all);\n}\n")),Object(r.b)("p",null,"When User A makes a ",Object(r.b)("inlineCode",{parentName:"p"},"Create")," request to this ",Object(r.b)("inlineCode",{parentName:"p"},"ExampleService"),", the resulting entity can be read and written by any other authenticated user. Good news for User B."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"#readable")," and ",Object(r.b)("inlineCode",{parentName:"p"},"#writable")," tags can be set to differing values, for example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-templefile"}),"ExampleService: service {\n  foo: string;\n  bar: int;\n  #readable(by: all);\n  #writable(by: this);\n}\n")),Object(r.b)("p",null,"This means that any authenticated user can ",Object(r.b)("inlineCode",{parentName:"p"},"Read")," or ",Object(r.b)("inlineCode",{parentName:"p"},"List")," (if defined) a created ",Object(r.b)("inlineCode",{parentName:"p"},"ExampleService")," entity, but only the user that created the entity may ",Object(r.b)("inlineCode",{parentName:"p"},"Update")," or ",Object(r.b)("inlineCode",{parentName:"p"},"Delete")," it."),Object(r.b)("h3",{id:"defaults"},"Defaults"),Object(r.b)("p",null,"For projects with authentication, ",Object(r.b)("inlineCode",{parentName:"p"},"#readable")," and ",Object(r.b)("inlineCode",{parentName:"p"},"#writable")," behaviour defaults to ",Object(r.b)("inlineCode",{parentName:"p"},"by: this")," for security, forcing ",Object(r.b)("inlineCode",{parentName:"p"},"by: all")," to specified if desired.\nThis reduces the likelihood of entities being exposed to users that should not have access."),Object(r.b)("h2",{id:"projects-without-authentication"},"Projects without Authentication"),Object(r.b)("p",null,"For projects without authentication it doesn't really make sense to have access control, since users cannot be identified.\nTherefore all services have ",Object(r.b)("inlineCode",{parentName:"p"},"#readable(by: all)")," and ",Object(r.b)("inlineCode",{parentName:"p"},"#writable(by: all)")," implicitly defined on them:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-templefile"}),"ExampleProject: project {\n  #language(go);\n  #database(postgres);\n  #provider(dockerCompose);\n}\n\nExampleService: service {\n  foo: string;\n  bar: int;\n  // implicit #readable(by: all);\n  // implicit #writable(by: all);\n}\n")),Object(r.b)("h2",{id:"structs"},"Structs"),Object(r.b)("p",null,"Structs inherit ",Object(r.b)("inlineCode",{parentName:"p"},"#readable")," and ",Object(r.b)("inlineCode",{parentName:"p"},"#writable")," behaviour from their parent service.\nThe only exception to this is the ",Object(r.b)("inlineCode",{parentName:"p"},"Create")," endpoint.\nFor example, let's add a struct to the ",Object(r.b)("inlineCode",{parentName:"p"},"ExampleService")," service:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-templefile"}),"ExampleService: service {\n  foo: string;\n  bar: int;\n\n  Photo: struct {\n    image: data(5M);\n    caption: string;\n  }\n\n  #readable(by: this);\n  #writable(by: this);\n}\n")),Object(r.b)("p",null,"Making a ",Object(r.b)("inlineCode",{parentName:"p"},"Create")," request to create a ",Object(r.b)("inlineCode",{parentName:"p"},"Photo")," entity requires a parent ",Object(r.b)("inlineCode",{parentName:"p"},"ExampleService")," entity UUID in the URL, e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"/api/example-service/43cc65f5-823c-11ea-9dc4-0242ac180003/photo"),".\nIf like we have here, the parent service has ",Object(r.b)("inlineCode",{parentName:"p"},"#writable(by: this)")," defined, then only the creator of the parent entity can create struct entities on it.\nYou can think of struct entities as belonging to the creator of the parent service entity."),Object(r.b)("p",null,"For more details on structs check out the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"structs"}),"Structs")," guide."),Object(r.b)("h2",{id:"limitations"},"Limitations"),Object(r.b)("p",null,"We acknowledge that this current implementation is limited in the granularity of access control it can support.\nAccess roles is top of the list of features we wish to support next."),Object(r.b)("p",null,"In the meantime, for projects with auth, the authentication token of a request is exposed to the hooks, so you can add your own access control there.\nThough note in the hooks you can only restrict access further, not widen.\nFor more information on hooks, check out the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"hooks"}),"Business Logic & Hooks")," guide."))}s.isMDXComponent=!0},176:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),s=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},p=function(e){var t=s(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),p=s(n),u=a,m=p["".concat(c,".").concat(u)]||p[u]||d[u]||r;return n?i.a.createElement(m,o({ref:t},l,{components:n})):i.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=u;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<r;l++)c[l]=n[l];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);