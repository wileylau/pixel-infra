(self.webpackChunkpixel_infra=self.webpackChunkpixel_infra||[]).push([[722],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},993:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=["components"],l={sidebar_position:0},s="Beta 5",c={unversionedId:"notes/miatoll/latest",id:"notes/miatoll/latest",isDocsHomePage:!1,title:"Beta 5",description:"Changelogs",source:"@site/docs/notes/miatoll/latest.md",sourceDirName:"notes/miatoll",slug:"/notes/miatoll/latest",permalink:"/pixel-infra/docs/notes/miatoll/latest",editUrl:"https://github.com/JamieHoSzeYui/pixel-infra/edit/master/docs/notes/miatoll/latest.md",version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Reporting a bug",permalink:"/pixel-infra/docs/bug-reports/report"},next:{title:"Beta 5",permalink:"/pixel-infra/docs/notes/miatoll/five"}},u=[{value:"Changelogs",id:"changelogs",children:[]},{value:"Bugs",id:"bugs",children:[]},{value:"Notes",id:"notes",children:[]},{value:"Download",id:"download",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"beta-5"},"Beta 5"),(0,i.kt)("h3",{id:"changelogs"},"Changelogs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Vendor redo, fixes the following issues:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"  - Microphone malfunction when using speakers in call\n  - Zoom / Google Meet / Microsoft Teams meeting having high-pitched voice\n  - Nailshot (Having difficulty taking screenshots with hardware buttons)\n"))),(0,i.kt)("li",{parentName:"ul"},"Fix dual SIM card options in Settings."),(0,i.kt)("li",{parentName:"ul"},"Allow decryption by disabling binary format for XMLs."),(0,i.kt)("li",{parentName:"ul"},"Dropped inbuilt Google Camera that never worked.")),(0,i.kt)("h3",{id:"bugs"},"Bugs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"None. Report back with logcat.")),(0,i.kt)("h3",{id:"notes"},"Notes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"VNDK 30 build as for now. No other devices except Pixels are receiving VNDK 31 from their OEMs anyways.")),(0,i.kt)("h3",{id:"download"},"Download"),(0,i.kt)("p",null,"Please move to ",(0,i.kt)("a",{parentName:"p",href:"../../download/miatoll/latest"},"Downloads section")))}d.isMDXComponent=!0}}]);