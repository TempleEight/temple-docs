(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{158:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(1),i=n(9),a=(n(0),n(164)),o={id:"templefile-spec",title:"TempleFile Specification",sidebar_label:"Templefile Specification"},c={id:"reference/templefile-spec",title:"TempleFile Specification",description:"# TempleFile DSL Specification",source:"@site/docs/reference/templefile-spec.md",permalink:"/temple-docs/docs/reference/templefile-spec",editUrl:"https://github.com/TempleEight/temple-docs/edit/master/TempleEight/docs/reference/templefile-spec.md",sidebar_label:"Templefile Specification",sidebar:"docsSidebar",previous:{title:"Service Architecture",permalink:"/temple-docs/docs/arch/service"},next:{title:"Templefile Primitives",permalink:"/temple-docs/docs/reference/templefile-primitives"}},l=[{value:"Primitives",id:"primitives",children:[]},{value:"Annotations",id:"annotations",children:[]},{value:"Code Example @ Maximum Verbosity",id:"code-example--maximum-verbosity",children:[{value:"Other things to add",id:"other-things-to-add",children:[]},{value:"Changelog",id:"changelog",children:[]}]}],s={rightToc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"templefile-dsl-specification"},"TempleFile DSL Specification"),Object(a.b)("h2",{id:"primitives"},"Primitives"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"bool\nstring(maxLength: int, minLength: int)\nint(max: int, min: int = 0)\nfloat(max: float, min: float = 0.0, precision: int = 8)\ndate\ntime\ndatetime\ndata(maxSize: int)\n")),Object(a.b)("h2",{id:"annotations"},"Annotations"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"@unique - This value is unique in this column throughout the datastore\n@server - This value is inaccessible to the client API\n@serverSet - This is set by the server, but returned in client responses \n@client - This value is communicated between the client and server, but not stored in the   database\n\n")),Object(a.b)("h2",{id:"code-example--maximum-verbosity"},"Code Example @ Maximum Verbosity"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"UserBookings: project {\n    #language(go);\n    #provider(aws);\n    #database(postgres);\n}\n\nDriverMobile: target {\n    #language(swift);\n    \n    #auth (\n        services: [\n            User\n        ]\n    );\n}\n\nUser: service {\n   username: string(maxLength: 3, minlength: 3) @unique;\n   \n    ratio: fixed(\n        max: 100,\n        min: 30,\n        places: 4,\n        precision: 4\n     )  @unique;\n    \n    #auth(\n        login: username\n    );\n    \n    #uses (\n        services: [\n            Orders,\n            Bookings\n        ]\n    );\n    \n    Pictures: subservice {\n        name: string @unique;\n        img: data(32M);\n    }\n    \n    #language(python);\n    #database(dynamo);\n}\n\nBookings: service {\n    user: User;\n    \n    createdAt: datetimetz @server;\n    \n    roomNumber: int;\n}\n")),Object(a.b)("h3",{id:"other-things-to-add"},"Other things to add"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Targets"),Object(a.b)("li",{parentName:"ul"},"Access control external/internal services"),Object(a.b)("li",{parentName:"ul"},"Inheritance of services")),Object(a.b)("h3",{id:"changelog"},"Changelog"),Object(a.b)("h4",{id:"2020-01-31"},"2020-01-31"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"remove primitive type ",Object(a.b)("inlineCode",{parentName:"li"},"fixed(max: float, min: float, places: int = 2, precision: int = 0)"),", because of poor language support")),Object(a.b)("h4",{id:"2020-02-04"},"2020-02-04"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"rename datetimetz to datetime"),Object(a.b)("li",{parentName:"ul"},"remove min and max from date and datetime")))}p.isMDXComponent=!0},164:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},m=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),b=r,d=m["".concat(o,".").concat(b)]||m[b]||u[b]||a;return n?i.a.createElement(d,c({ref:t},s,{components:n})):i.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);