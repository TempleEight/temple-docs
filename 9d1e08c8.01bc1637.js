(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return c}));var i=n(1),a=n(9),r=(n(0),n(164)),l={id:"templefile-primitives",title:"Templefile Primitives",sidebar_label:"Templefile Primitives"},o={id:"reference/templefile-primitives",title:"Templefile Primitives",description:"TempleFile supports 8 primitive types, roughly aligned with those found in `SQL` style languages. Any property of a service can be of any of these types. ",source:"@site/docs/reference/templefile-primitives.md",permalink:"/temple-docs/docs/reference/templefile-primitives",editUrl:"https://github.com/TempleEight/temple-docs/edit/master/TempleEight/docs/reference/templefile-primitives.md",sidebar_label:"Templefile Primitives",sidebar:"docsSidebar",previous:{title:"TempleFile Specification",permalink:"/temple-docs/docs/reference/templefile-spec"},next:{title:"Airbnb",permalink:"/temple-docs/docs/reference/example-templefiles/airbnb"}},b=[{value:"Parameters",id:"parameters",children:[]},{value:"Primitives",id:"primitives",children:[{value:"<code>bool</code>",id:"bool",children:[]},{value:"<code>int(max: int, min: int = 0)</code>",id:"intmax-int-min-int--0",children:[]},{value:"<code>float(max: float, min: float = 0.0f, precision: int = 8)</code>",id:"floatmax-float-min-float--00f-precision-int--8",children:[]},{value:"<code>date</code>",id:"date",children:[]},{value:"<code>time</code>",id:"time",children:[]},{value:"<code>datetime</code>",id:"datetime",children:[]},{value:"<code>data(maxSize: long)</code>",id:"datamaxsize-long",children:[]}]}],p={rightToc:b};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"TempleFile supports 8 primitive types, roughly aligned with those found in ",Object(r.b)("inlineCode",{parentName:"p"},"SQL")," style languages. Any property of a service can be of any of these types. "),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-temple"}),"bool\nstring(maxLength: int, minLength: int)\nint(max: int, min: int = 0)\nfloat(max: float, min: float = 0.0f, precision: int = 8)\ndate\ntime\ndatetime\ndata(maxSize: long)\n")),Object(r.b)("h2",{id:"parameters"},"Parameters"),Object(r.b)("p",null,"Many types include optional parameterisations, which will be enforced as either column constraints on the database table, or as checks in server-side code."),Object(r.b)("p",null,"All parameters are optional, and many have defaults that can be overridden."),Object(r.b)("h2",{id:"primitives"},"Primitives"),Object(r.b)("h3",{id:"bool"},Object(r.b)("inlineCode",{parentName:"h3"},"bool")),Object(r.b)("p",null,"Used for storing Boolean truthfulness."),Object(r.b)("p",null,"Possible values: ",Object(r.b)("inlineCode",{parentName:"p"},"[true, false]")),Object(r.b)("p",null,"###",Object(r.b)("inlineCode",{parentName:"p"},"string(maxLength: int, minLength: int)")),Object(r.b)("p",null,"Used for storing textual data, equivalent to the ",Object(r.b)("inlineCode",{parentName:"p"},"TEXT")," datatype in ",Object(r.b)("inlineCode",{parentName:"p"},"SQL"),". "),Object(r.b)("h4",{id:"parameters-1"},"Parameters:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"maxLength: int"),": The maximum number of characters allowable in the string"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"minLength: int"),": The minimum number of characters allowable in the string")),Object(r.b)("p",null,"If only one parameter is provided, it defaults to ",Object(r.b)("inlineCode",{parentName:"p"},"maxLength"),"."),Object(r.b)("h3",{id:"intmax-int-min-int--0"},Object(r.b)("inlineCode",{parentName:"h3"},"int(max: int, min: int = 0)")),Object(r.b)("p",null,"Used for storing Integral numbers, equivalent to the ",Object(r.b)("inlineCode",{parentName:"p"},"INT")," datatype in ",Object(r.b)("inlineCode",{parentName:"p"},"SQL"),"."),Object(r.b)("h4",{id:"parameters-2"},"Parameters:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"max: int"),": The highest value allowed to be stored")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"min: int = 0"),": The lowest value allowed to be stored "))),Object(r.b)("p",null,"If one one parameter is provided, it defaults to ",Object(r.b)("inlineCode",{parentName:"p"},"max"),".\nThe default values for ",Object(r.b)("inlineCode",{parentName:"p"},"max")," and ",Object(r.b)("inlineCode",{parentName:"p"},"min")," are ",Object(r.b)("inlineCode",{parentName:"p"},"INT_MAX")," and ",Object(r.b)("inlineCode",{parentName:"p"},"INT_MIN")," respectively."),Object(r.b)("h3",{id:"floatmax-float-min-float--00f-precision-int--8"},Object(r.b)("inlineCode",{parentName:"h3"},"float(max: float, min: float = 0.0f, precision: int = 8)")),Object(r.b)("p",null,"Used for storing Integral numbers, equivalent to the ",Object(r.b)("inlineCode",{parentName:"p"},"INT")," datatype in ",Object(r.b)("inlineCode",{parentName:"p"},"SQL"),"."),Object(r.b)("h4",{id:"parameters-3"},"Parameters:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"max: float"),": The highest value allowed to be stored"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"min: float = 0.0f"),": The lowest value allowed to be stored "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"precision: int = 8"),": The number of bits used in the exponent of the floating point number. See ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Single-precision_floating-point_format"}),"here")," for more information.")),Object(r.b)("p",null,"If one one parameter is provided, it defaults to ",Object(r.b)("inlineCode",{parentName:"p"},"max"),".\nThe default values for ",Object(r.b)("inlineCode",{parentName:"p"},"max")," and ",Object(r.b)("inlineCode",{parentName:"p"},"min")," are ",Object(r.b)("inlineCode",{parentName:"p"},"FLOAT_MAX")," and ",Object(r.b)("inlineCode",{parentName:"p"},"FLOAT_MIN")," respectively."),Object(r.b)("h3",{id:"date"},Object(r.b)("inlineCode",{parentName:"h3"},"date")),Object(r.b)("p",null,"Used for representing calendar dates. Stored in ",Object(r.b)("inlineCode",{parentName:"p"},"YYYY-MM-DD")," format with values in possible range of ",Object(r.b)("inlineCode",{parentName:"p"},"0001-01-0"),"1 through ",Object(r.b)("inlineCode",{parentName:"p"},"9999-12-31"),"."),Object(r.b)("h3",{id:"time"},Object(r.b)("inlineCode",{parentName:"h3"},"time")),Object(r.b)("p",null,"Used for representing times of day, but does not refer to one specific moment in time. Stored in ",Object(r.b)("inlineCode",{parentName:"p"},"hh:mm:ss[.nnnnnnn]")," format with values in possible range of ",Object(r.b)("inlineCode",{parentName:"p"},"00:00:00.0000000")," through ",Object(r.b)("inlineCode",{parentName:"p"},"23:59:59.9999999"),"."),Object(r.b)("h3",{id:"datetime"},Object(r.b)("inlineCode",{parentName:"h3"},"datetime")),Object(r.b)("p",null,"Used for representing specific moments in time, with a particular timezone. Stored in ",Object(r.b)("inlineCode",{parentName:"p"},"'YYYY-MM-DD HH:MM:SS+TZ'")," format. ",Object(r.b)("inlineCode",{parentName:"p"},"TZ")," is the number of hours offset from ",Object(r.b)("inlineCode",{parentName:"p"},"UTC+0"),"."),Object(r.b)("h3",{id:"datamaxsize-long"},Object(r.b)("inlineCode",{parentName:"h3"},"data(maxSize: long)")),Object(r.b)("p",null,"Used for storing binary file objects."),Object(r.b)("h4",{id:"parameters-4"},"Parameters:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"maxSize: long"),": The maximum file size allowable in bytes.")))}c.isMDXComponent=!0},164:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),c=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},m=function(e){var t=c(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),m=c(n),s=i,u=m["".concat(l,".").concat(s)]||m[s]||d[s]||r;return n?a.a.createElement(u,o({ref:t},p,{components:n})):a.a.createElement(u,o({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=s;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);