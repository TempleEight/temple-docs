(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{109:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return o})),r.d(n,"rightToc",(function(){return l})),r.d(n,"default",(function(){return p}));var t=r(1),a=(r(0),r(136));const i={id:"airbnb",title:"Airbnb",sidebar_label:"Airbnb"},o={id:"reference/example-templefiles/airbnb",title:"Airbnb",description:"The following Templefile captures Airbnb's core model, the online marketplace for arranging and offering lodging.",source:"@site/docs/reference/example-templefiles/airbnb.md",permalink:"/temple-docs/docs/reference/example-templefiles/airbnb",editUrl:"https://github.com/TempleEight/temple-docs/edit/master/TempleEight/docs/reference/example-templefiles/airbnb.md",sidebar_label:"Airbnb",sidebar:"docsSidebar",previous:{title:"Templefile Primitives",permalink:"/temple-docs/docs/reference/templefile-primitives"},next:{title:"Amazon",permalink:"/temple-docs/docs/reference/example-templefiles/amazon"}},l=[],c={rightToc:l};function p({components:e,...n}){return Object(a.b)("wrapper",Object(t.a)({},c,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The following Templefile captures Airbnb's core model, the online marketplace for arranging and offering lodging."),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{}),"Airbnb: project {\n  #language(go);\n  #database(postgres);\n  #authMethod(email);\n  #provider(dockerCompose);\n  #metrics(prometheus);\n}\n\n// Since the project has auth, #readable and #writable for all services default to (by: this)\n\nLandlord: service {\n  firstName: string;\n  lastName: string;\n  #auth;\n  #readable(by: all);\n}\n\nTenant: service {\n  firstName: string;\n  lastName: string;\n  #auth;\n}\n\nProperty: service {\n  landlord: Landlord;\n  address: string;\n  city: string;\n  postcode: string;\n  description: string;\n  pricePerNight: float;\n\n  Photo: struct {\n    image: data(5M);\n    caption: string;\n    #enumerable;\n  }\n\n  #enumerable;\n  #readable(by: all);\n}\n\nReservation: service {\n  tenant: Tenant;\n  property: Property;\n  startTime: datetime;\n  endTime: datetime;\n}\n\nReview: service {\n  property: Property;\n  tenant: Tenant;\n  reservation: Reservation;\n  stars: int(5, 0);\n  review: string;\n  #readable(by: all);\n}\n")))}p.isMDXComponent=!0},136:function(e,n,r){"use strict";r.d(n,"a",(function(){return b})),r.d(n,"b",(function(){return f}));var t=r(0),a=r.n(t);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var n=a.a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):l({},n,{},e)),r},b=function(e){var n=s(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=Object(t.forwardRef)((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(r),d=t,f=b["".concat(o,".").concat(d)]||b[d]||m[d]||i;return r?a.a.createElement(f,l({ref:n},p,{components:r})):a.a.createElement(f,l({ref:n},p))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:t,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);