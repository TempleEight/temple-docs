(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{152:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(1),i=t(9),a=(t(0),t(161)),o={id:"templefile-spec",title:"TempleFile Specification",sidebar_label:"Templefile Specification"},c={id:"reference/templefile-spec",title:"TempleFile Specification",description:"# TempleFile DSL Specification",source:"@site/docs/reference/templefile-spec.md",permalink:"/temple-docs/docs/reference/templefile-spec",editUrl:"https://github.com/TempleEight/temple-docs/edit/master/TempleEight/docs/reference/templefile-spec.md",sidebar_label:"Templefile Specification",sidebar:"someSidebar",previous:{title:"Reference Contents",permalink:"/temple-docs/docs/reference/contents"},next:{title:"Primitives",permalink:"/temple-docs/docs/reference/primitives"}},l=[{value:"Primitives",id:"primitives",children:[]},{value:"Annotations",id:"annotations",children:[]},{value:"Code Example @ Maximum Verbosity",id:"code-example--maximum-verbosity",children:[{value:"Other things to add",id:"other-things-to-add",children:[]},{value:"Changelog",id:"changelog",children:[]}]}],s={rightToc:l};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"templefile-dsl-specification"},"TempleFile DSL Specification"),Object(a.b)("h2",{id:"primitives"},"Primitives"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"bool\nstring(maxLength: int, minLength: int)\nint(max: int, min: int = 0)\nfloat(max: float, min: float = 0.0, precision: int = 8)\ndate\ntime\ndatetime\ndata(maxSize: int)\n")),Object(a.b)("h2",{id:"annotations"},"Annotations"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"@unique - This value is unique in this column throughout the datastore\n@server - This value is inaccessible to the client API\n@serverSet - This is set by the server, but returned in client responses \n@client - This value is communicated between the client and server, but not stored in the   database\n\n")),Object(a.b)("h2",{id:"code-example--maximum-verbosity"},"Code Example @ Maximum Verbosity"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"UserBookings: project {\n    #language(go);\n    #provider(aws);\n    #database(postgres);\n}\n\nDriverMobile: target {\n    #language(swift);\n    \n    #auth (\n        services: [\n            User\n        ]\n    );\n}\n\nUser: service {\n   username: string(maxLength: 3, minlength: 3) @unique;\n   \n    ratio: fixed(\n        max: 100,\n        min: 30,\n        places: 4,\n        precision: 4\n     )  @unique;\n    \n    #auth(\n        login: username\n    );\n    \n    #uses (\n        services: [\n            Orders,\n            Bookings\n        ]\n    );\n    \n    Pictures: subservice {\n        name: string @unique;\n        img: data(32M);\n    }\n    \n    #language(python);\n    #database(dynamo);\n}\n\nBookings: service {\n    user: User;\n    \n    createdAt: datetimetz @server;\n    \n    roomNumber: int;\n}\n")),Object(a.b)("h3",{id:"other-things-to-add"},"Other things to add"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Targets"),Object(a.b)("li",{parentName:"ul"},"Access control external/internal services"),Object(a.b)("li",{parentName:"ul"},"Inheritance of services")),Object(a.b)("h3",{id:"changelog"},"Changelog"),Object(a.b)("h4",{id:"2020-01-31"},"2020-01-31"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"remove primitive type ",Object(a.b)("inlineCode",{parentName:"li"},"fixed(max: float, min: float, places: int = 2, precision: int = 0)"),", because of poor language support")),Object(a.b)("h4",{id:"2020-02-04"},"2020-02-04"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"rename datetimetz to datetime"),Object(a.b)("li",{parentName:"ul"},"remove min and max from date and datetime")))}p.isMDXComponent=!0},161:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return d}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),p=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},m=function(e){var n=p(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(t),b=r,d=m["".concat(o,".").concat(b)]||m[b]||u[b]||a;return t?i.a.createElement(d,c({ref:n},s,{components:t})):i.a.createElement(d,c({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<a;s++)o[s]=t[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);