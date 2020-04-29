(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{131:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return a})),n.d(r,"metadata",(function(){return o})),n.d(r,"rightToc",(function(){return l})),n.d(r,"default",(function(){return c}));var t=n(1),i=(n(0),n(136));const a={id:"deliveroo",title:"Deliveroo",sidebar_label:"Deliveroo"},o={id:"reference/example-templefiles/deliveroo",title:"Deliveroo",description:"The following Templefile captures Deliveroo's core model, the food delivery service.",source:"@site/docs/reference/example-templefiles/deliveroo.md",permalink:"/temple-docs/docs/reference/example-templefiles/deliveroo",editUrl:"https://github.com/TempleEight/temple-docs/edit/master/TempleEight/docs/reference/example-templefiles/deliveroo.md",sidebar_label:"Deliveroo",sidebar:"docsSidebar",previous:{title:"Amazon",permalink:"/temple-docs/docs/reference/example-templefiles/amazon"},next:{title:"5-a-Side",permalink:"/temple-docs/docs/reference/example-templefiles/five-a-side"}},l=[],s={rightToc:l};function c({components:e,...r}){return Object(i.b)("wrapper",Object(t.a)({},s,r,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The following Templefile captures Deliveroo's core model, the food delivery service."),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),"Deliveroo: project {\n  #language(go);\n  #database(postgres);\n  #authMethod(email);\n  #provider(dockerCompose);\n  #metrics(prometheus);\n}\n\n// Since the project has auth, #readable and #writable for all services default to (by: this)\n\n// Users order dishes, paid for with their billing account\nUser: service {\n  firstName: string;\n  lastName: string;\n  email: string;\n  address: string;\n  billingAccount: Billing;\n  #auth;\n}\n\n// Riders deliver orders, location included for the user to know where they are\nRider: service {\n  firstName: string;\n  lat: float(90.0, -90.0);\n  long: float(180.0, -180.0);\n  #auth;\n}\n\n// Restaurants make dishes to be picked up by riders\nRestaurant: service {\n  name: string;\n  address: string;\n  openTime: time;\n  closeTime: time;\n  #auth;\n  #enumerable;\n  #readable(by: all);\n}\n\n// An order marks a dish to be delivered by a rider from a restaurant to a user\nOrder: service {\n  user: User;\n  restaurant: Restaurant;\n  rider: Rider;\n  address: string;\n  orderTime: datetime @serverSet;\n  status: string;\n\n  // An order can have many dishes\n  OrderItem: struct {\n      dish: Dish;\n      #enumerable;\n  }\n\n  #omit[delete];\n  #enumerable;\n}\n\n// A dish is made by a restaurant and is delivered to a user\nDish: service {\n  name: string;\n  description: string;\n  price: float(0.0);\n  restaurant: Restaurant;\n\n  Img: struct {\n      img: data(4M);\n      #enumerable;\n  }\n  \n  #enumerable;\n  #readable(by: all)\n}\n\n// A billing account for a user, kept separately for security\nBilling: service {\n  creditCard: string(16,16); // creditCards must be exactly 16 chars long\n  expiry: date;\n  billingAddress: string;\n}\n")))}c.isMDXComponent=!0},136:function(e,r,n){"use strict";n.d(r,"a",(function(){return u})),n.d(r,"b",(function(){return f}));var t=n(0),i=n.n(t);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),d=function(e){var r=i.a.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):l({},r,{},e)),n},u=function(e){var r=d(e.components);return i.a.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return i.a.createElement(i.a.Fragment,{},r)}},m=Object(t.forwardRef)((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=t,f=u["".concat(o,".").concat(m)]||u[m]||p[m]||a;return n?i.a.createElement(f,l({ref:r},c,{components:n})):i.a.createElement(f,l({ref:r},c))}));function f(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:t,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);