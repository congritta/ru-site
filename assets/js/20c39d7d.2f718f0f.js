"use strict";(self.webpackChunkcongritta_ru_site=self.webpackChunkcongritta_ru_site||[]).push([[7729],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,f=s["".concat(p,".").concat(m)]||s[m]||g[m]||l;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2615:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const l={slug:"hotlinking",title:"\u0425\u043e\u0442\u043b\u0438\u043d\u043a\u0438\u043d\u0433 \u0438 \u043a\u0430\u043a \u043e\u0442 \u043d\u0435\u0433\u043e \u0437\u0430\u0449\u0438\u0442\u0438\u0442\u044c\u0441\u044f",authors:["congritta"],tags:["\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u0430\u044f \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u044c","infosec"],image:"./poster.jpg",date:"2023-11-10T18:00"},o=void 0,i={permalink:"/blog/hotlinking",source:"@site/blog/2023-11-10-hotlinking/index.md",title:"\u0425\u043e\u0442\u043b\u0438\u043d\u043a\u0438\u043d\u0433 \u0438 \u043a\u0430\u043a \u043e\u0442 \u043d\u0435\u0433\u043e \u0437\u0430\u0449\u0438\u0442\u0438\u0442\u044c\u0441\u044f",description:"\u041d\u0430\u0432\u0435\u0440\u043d\u043e\u0435 \u043c\u043d\u043e\u0433\u0438\u043c \u0434\u0435\u0440\u0436\u0430\u0442\u0435\u043b\u044f\u043c \u043e\u043d\u043b\u0430\u0439\u043d-\u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432 \u0437\u043d\u0430\u043a\u043e\u043c\u0430 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430, \u043a\u043e\u0433\u0434\u0430 \u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u0435 \u0441\u0430\u0439\u0442\u044b \u0432\u043e\u0440\u0443\u044e\u0442 \u0441\u0441\u044b\u043b\u043a\u0438 \u043d\u0430 \u0441\u043a\u0430\u0447\u0438\u0432\u0430\u043d\u0438\u0435",date:"2023-11-10T18:00:00.000Z",formattedDate:"10 \u043d\u043e\u044f\u0431\u0440\u044f 2023 \u0433.",tags:[{label:"\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u0430\u044f \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u044c",permalink:"/blog/tags/\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u0430\u044f-\u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u044c"},{label:"infosec",permalink:"/blog/tags/infosec"}],readingTime:3.055,hasTruncateMarker:!0,authors:[{name:"Alex Congritta",title:"React/Node Developer",url:"https://congritta.com",imageURL:"https://github.com/congritta.png",key:"congritta"}],frontMatter:{slug:"hotlinking",title:"\u0425\u043e\u0442\u043b\u0438\u043d\u043a\u0438\u043d\u0433 \u0438 \u043a\u0430\u043a \u043e\u0442 \u043d\u0435\u0433\u043e \u0437\u0430\u0449\u0438\u0442\u0438\u0442\u044c\u0441\u044f",authors:["congritta"],tags:["\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u0430\u044f \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u044c","infosec"],image:"./poster.jpg",date:"2023-11-10T18:00"},prevItem:{title:"\u042f \u043a\u0443\u043f\u0438\u043b WinRAR",permalink:"/blog/i-purchased-winrar"},nextItem:{title:"\u041f\u043e\u044f\u0441\u043d\u044f\u044e \u0437\u0430 Docker \u0441\u0432\u043e\u0438\u043c\u0438 \u0441\u043b\u043e\u0432\u0430\u043c\u0438",permalink:"/blog/docker"}},p={image:n(8288).Z,authorsImageUrls:[void 0]},c=[{value:"\u0427\u0435\u043c \u044d\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u043b\u043e\u0445\u043e?",id:"\u0447\u0435\u043c-\u044d\u0442\u043e-\u043c\u043e\u0436\u0435\u0442-\u0431\u044b\u0442\u044c-\u043f\u043b\u043e\u0445\u043e",level:2},{value:"\u041a\u0430\u043a \u0437\u0430\u0449\u0438\u0442\u0438\u0442\u044c\u0441\u044f \u043e\u0442 \u0442\u0430\u043a\u043e\u0433\u043e",id:"\u043a\u0430\u043a-\u0437\u0430\u0449\u0438\u0442\u0438\u0442\u044c\u0441\u044f-\u043e\u0442-\u0442\u0430\u043a\u043e\u0433\u043e",level:2},{value:"\u041a\u0430\u043a \u044d\u0442\u043e \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442",id:"\u043a\u0430\u043a-\u044d\u0442\u043e-\u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442",level:3},{value:"\u0412\u043e\u0442, \u043a\u0430\u043a \u044d\u0442\u043e \u0434\u0435\u043b\u0430\u0435\u0442\u0441\u044f \u043d\u0430 nginx:",id:"\u0432\u043e\u0442-\u043a\u0430\u043a-\u044d\u0442\u043e-\u0434\u0435\u043b\u0430\u0435\u0442\u0441\u044f-\u043d\u0430-nginx",level:4},{value:"\u0412\u043e\u0442, \u043a\u0430\u043a \u044d\u0442\u043e \u0434\u0435\u043b\u0430\u0435\u0442\u0441\u044f \u043d\u0430 Apache (.htaccess):",id:"\u0432\u043e\u0442-\u043a\u0430\u043a-\u044d\u0442\u043e-\u0434\u0435\u043b\u0430\u0435\u0442\u0441\u044f-\u043d\u0430-apache-htaccess",level:4},{value:"\u041a\u0430\u043a \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c, \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043b\u0438 \u0437\u0430\u0449\u0438\u0442\u0430 \u043e\u0442 \u0445\u043e\u0442\u043b\u0438\u043d\u043a\u0438\u043d\u0433\u0430",id:"\u043a\u0430\u043a-\u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c-\u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442-\u043b\u0438-\u0437\u0430\u0449\u0438\u0442\u0430-\u043e\u0442-\u0445\u043e\u0442\u043b\u0438\u043d\u043a\u0438\u043d\u0433\u0430",level:3}],u={toc:c},s="wrapper";function g(e){let{components:t,...l}=e;return(0,a.kt)(s,(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(8288).Z,width:"1440",height:"810"})),(0,a.kt)("p",null,"\u041d\u0430\u0432\u0435\u0440\u043d\u043e\u0435 \u043c\u043d\u043e\u0433\u0438\u043c \u0434\u0435\u0440\u0436\u0430\u0442\u0435\u043b\u044f\u043c \u043e\u043d\u043b\u0430\u0439\u043d-\u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432 \u0437\u043d\u0430\u043a\u043e\u043c\u0430 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430, \u043a\u043e\u0433\u0434\u0430 \u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u0435 \u0441\u0430\u0439\u0442\u044b \u0432\u043e\u0440\u0443\u044e\u0442 \u0441\u0441\u044b\u043b\u043a\u0438 \u043d\u0430 \u0441\u043a\u0430\u0447\u0438\u0432\u0430\u043d\u0438\u0435\n\u0444\u0430\u0439\u043b\u043e\u0432 \u0441 \u0432\u0430\u0448\u0435\u0433\u043e \u0441\u0430\u0439\u0442\u0430, \u0447\u0442\u043e\u0431\u044b \u043d\u0435 \u0445\u043e\u0441\u0442\u0438\u0442\u044c \u0438\u0445 \u0443 \u0441\u0435\u0431\u044f. \u0418\u043b\u0438 \u0436\u0435 \u0434\u0440\u0443\u0433\u0438\u0435 \u0441\u0430\u0439\u0442\u044b \u0431\u0435\u0440\u0443\u0442 \u043f\u0440\u044f\u043c\u044b\u0435 \u0441\u0441\u044b\u043b\u043a\u0438 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438, \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438 \u0438\n\u043f\u0440\u043e\u0447\u0443\u044e \u0441\u0442\u0430\u0442\u0438\u043a\u0443 \u0441 \u0432\u0430\u0448\u0435\u0433\u043e \u0441\u0430\u0439\u0442\u0430. \u0412 \u043b\u044e\u0431\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435, \u0441\u0435\u0440\u0432\u0435\u0440, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d \u0432\u0430\u0448 \u0441\u0430\u0439\u0442, \u0432\u044b\u043d\u0443\u0436\u0434\u0435\u043d \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441\u044b\n\u0441 \u0447\u0443\u0436\u0438\u0445 \u0441\u0430\u0439\u0442\u043e\u0432."),(0,a.kt)("p",null,"\u0412 \u044d\u0442\u043e\u0439 \u0441\u0442\u0430\u0442\u044c\u0435 \u0440\u0430\u0441\u0441\u043a\u0430\u0436\u0443 \u043a\u0430\u043a \u043f\u043e\u0440\u0435\u0448\u0430\u0442\u044c \u044d\u0442\u0443 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0443"),(0,a.kt)("h2",{id:"\u0447\u0435\u043c-\u044d\u0442\u043e-\u043c\u043e\u0436\u0435\u0442-\u0431\u044b\u0442\u044c-\u043f\u043b\u043e\u0445\u043e"},"\u0427\u0435\u043c \u044d\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u043b\u043e\u0445\u043e?"),(0,a.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0441\u0430\u0439\u0442\u044b \u043f\u0430\u0440\u0430\u0437\u0438\u0442\u0438\u0440\u0443\u044e\u0442 \u043d\u0430 \u0440\u0435\u0441\u0443\u0440\u0441\u0430\u0445 \u0432\u0430\u0448\u0435\u0433\u043e \u0441\u0430\u0439\u0442\u0430, \u044d\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u0432\u0435\u0441\u0442\u0438 \u043a \u0442\u043e\u043c\u0443, \u0447\u0442\u043e:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u0417\u0430\u0431\u044c\u0451\u0442\u0441\u044f \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0439 \u0432\u0430\u0448\u0435\u043c\u0443 \u0441\u0430\u0439\u0442\u0443/\u0440\u0435\u0441\u0443\u0440\u0441\u0443 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442-\u043a\u0430\u043d\u0430\u043b. \u041d\u0435 \u0432\u0430\u0436\u043d\u043e, \u0445\u043e\u0441\u0442\u0438\u043d\u0433 \u043b\u0438 \u0443 \u0432\u0430\u0441 \u0438\u043b\u0438 VPS/VDS, \u0432\u0430\u0448 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\n\u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0432\u0430\u0435\u0442 \u0432\u0430\u0448 \u0441\u0430\u0439\u0442 \u0432 \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u0438 \u0438, \u0438\u043d\u043e\u0433\u0434\u0430, \u0432 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0435 \u0442\u0440\u0430\u0444\u0438\u043a\u0430 \u0437\u0430 \u043c\u0435\u0441\u044f\u0446. \u041d\u0435 \u043d\u0443\u0436\u043d\u043e \u0437\u0430\u0431\u044b\u0432\u0430\u0442\u044c, \u0447\u0442\u043e \u0434\u0440\u0443\u0433\u0438\u0435 \u0441\u0430\u0439\u0442\u044b\n\u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043d\u0430\u043c\u043d\u043e\u0433\u043e \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u0435\u0435 \u0432\u0430\u0448\u0435\u0433\u043e (\u0441 \u0441\u043e\u0442\u043d\u044f\u043c\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u0432 \u0441\u0435\u043a\u0443\u043d\u0434\u0443 \u0438 \u0431\u043e\u043b\u044c\u0448\u0435). \u0415\u0441\u043b\u0438 \u0442\u0430\u043a\u043e\u0439 \u0441\u0430\u0439\u0442 \u043d\u0430\u0447\u043d\u0451\u0442 \u043a \u0441\u0435\u0431\u0435\n\u0432\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c \u043f\u0440\u044f\u043c\u044b\u0435 \u0441\u0441\u044b\u043b\u043a\u0438 \u043d\u0430 \u043a\u043e\u043d\u0442\u0435\u043d\u0442 \u0438\u0437 \u0432\u0430\u0448\u0435\u0433\u043e \u0441\u0430\u0439\u0442\u0430, \u0432\u0430\u0448 \u0441\u0430\u0439\u0442 \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043c\u0435\u0434\u043b\u0435\u043d\u043d\u0435\u0435, \u0430 \u0437\u0430 \u0445\u043e\u0441\u0442\u0438\u043d\u0433/\u0441\u0435\u0440\u0432\u0435\u0440\n\u043f\u0440\u0438\u0434\u0451\u0442\u0441\u044f \u043f\u043b\u0430\u0442\u0438\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435;"),(0,a.kt)("li",{parentName:"ol"},"\u0412\u043e\u0437\u0440\u0430\u0441\u0442\u0451\u0442 \u043d\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043d\u0430 \u0440\u0435\u0441\u0443\u0440\u0441\u044b \u0432\u0430\u0448\u0435\u0433\u043e \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u0435\u0441\u043b\u0438 \u0441\u0435\u0440\u0432\u0435\u0440 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u0442 \u0441\u0442\u0430\u0442\u0438\u043a\u0443 \u043f\u0435\u0440\u0435\u0434 \u0442\u0435\u043c, \u043a\u0430\u043a \u043e\u0442\u0434\u0430\u0442\u044c \u0435\u0451\n\u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u043e\u0439 \u0447\u0430\u0441\u0442\u0438 \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u0441\u0436\u0430\u0442\u0438\u0435 \u043a\u0430\u0440\u0442\u0438\u043d\u043e\u043a \u0438\u043b\u0438 \u043a\u043e\u0433\u0434\u0430 \u0432\u0430\u0448 \u0441\u0435\u0440\u0432\u0435\u0440 \u0434\u0435\u043b\u0430\u0435\u0442 \u0437\u0430\u043f\u0440\u043e\u0441 \u043d\u0430 \u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u0439\n\u0441\u0435\u0440\u0432\u0435\u0440 \u043f\u0435\u0440\u0435\u0434 \u0442\u0435\u043c, \u043a\u0430\u043a \u043e\u0442\u0434\u0430\u0442\u044c \u0441\u0442\u0430\u0442\u0438\u043a\u0443). \u041e\u043f\u044f\u0442\u044c \u0436\u0435, \u0432\u0430\u043c \u043f\u0440\u0438\u0434\u0451\u0442\u0441\u044f \u0440\u0430\u0441\u043a\u043e\u0448\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u043d\u0430 \u0431\u043e\u043b\u0435\u0435 \u043c\u043e\u0449\u043d\u044b\u0439 \u0441\u0435\u0440\u0432\u0432\u0435\u0440 \u0438 \u043d\u0430 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u044b\u0435\n\u043a\u0432\u043e\u0442\u044b \u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u0445 API")),(0,a.kt)("h2",{id:"\u043a\u0430\u043a-\u0437\u0430\u0449\u0438\u0442\u0438\u0442\u044c\u0441\u044f-\u043e\u0442-\u0442\u0430\u043a\u043e\u0433\u043e"},"\u041a\u0430\u043a \u0437\u0430\u0449\u0438\u0442\u0438\u0442\u044c\u0441\u044f \u043e\u0442 \u0442\u0430\u043a\u043e\u0433\u043e"),(0,a.kt)("p",null,"\u0422\u043e, \u0447\u0442\u043e \u043e\u043f\u0438\u0441\u0430\u043d\u043e \u0432\u044b\u0448\u0435, \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f ",(0,a.kt)("strong",{parentName:"p"},"\u0445\u043e\u0442\u043b\u0438\u043d\u043a\u0438\u043d\u0433"),". \u0415\u0441\u043b\u0438 \u0443 \u0432\u0430\u0448\u0435\u0433\u043e \u0441\u0430\u0439\u0442\u0430 \u043e\u0431\u044b\u0447\u043d\u044b\u0439 \u0445\u043e\u0441\u0442\u0438\u043d\u0433 (\u0442\u043e \u0435\u0441\u0442\u044c \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430\n\u043b\u0435\u0436\u0438\u0442 \u043d\u0430 \u0445\u043e\u0441\u0442\u0438\u043d\u0433-\u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0435), \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u044c\u0441\u044f \u0432 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0443 \u0438 \u043f\u043e\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u0437\u0430\u0449\u0438\u0442\u0438\u0442\u044c \u0432\u0430\u0448 \u0441\u0430\u0439\u0442 \u043e\u0442 \u0445\u043e\u0442\u043b\u0438\u043d\u043a\u0438\u043d\u0433\u0430. \u042d\u0442\u043e \u0434\u043e\u043b\u0436\u043d\u043e\n\u0431\u044b\u0442\u044c \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e, \u0445\u043e\u0442\u044f \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440 \u0432 \u043f\u0440\u0430\u0432\u0435 \u043f\u043e\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u0441 \u0432\u0430\u0441 500-1000 \u0440\u0443\u0431\u043b\u0435\u0439, \u0435\u0441\u043b\u0438 \u044d\u0442\u043e \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0441\u044f \u043a \u043f\u043b\u0430\u0442\u043d\u043e\u043c\u0443\n\u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044e \u0441\u0435\u0440\u0432\u0435\u0440\u0430 (\u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0432\u0430\u0448\u0435\u0433\u043e \u0445\u043e\u0441\u0442\u0438\u043d\u0433-\u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0430)."),(0,a.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0432\u0430\u043c \u0447\u0442\u043e-\u0442\u043e \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0441\u044f \u0441\u0434\u0435\u043b\u0430\u0442\u044c, \u043a\u0430\u043a \u043e\u043f\u0438\u0441\u0430\u043d\u043e \u0432 \u044d\u0442\u043e\u0439 \u0441\u0442\u0430\u0442\u044c\u0435 \u0438 \u0443 \u0432\u0430\u0441 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0441\u0435\u0440\u0432\u0435\u0440/VPS, \u0432\u044b \u0442\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u0435\u0442\u0435\n\u043f\u043e\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u043f\u043b\u0430\u0442\u043d\u043e\u0435 \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0443 \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0430 \u0438 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440 \u043f\u043e\u043c\u043e\u0436\u0435\u0442 \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0438\u0442\u044c \u0437\u0430\u0449\u0438\u0442\u0443 \u043e\u0442\n\u0445\u043e\u0442\u043b\u0438\u043d\u043a\u0438\u043d\u0433\u0430."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\u0410 \u0435\u0449\u0451 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u0432\u044f\u0437\u0430\u0442\u044c\u0441\u044f \u0441\u043e \u043c\u043d\u043e\u0439 \u043f\u043e \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430\u043c \u0432 \u043c\u0435\u043d\u044e \u0441\u0430\u0439\u0442\u0430 \u0438 \u0437\u0430\u0449\u0438\u0442\u0443 \u043e\u0442 \u0445\u043e\u0442\u043b\u0438\u043d\u043a\u0438\u043d\u0433\u0430 \u0441\u0434\u0435\u043b\u0430\u044e \u0432\u0430\u043c \u044f :)")),(0,a.kt)("p",null,"\u0423\u0447\u0442\u0438\u0442\u0435, \u0447\u0442\u043e \u0435\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0430 \u0437\u0430\u0449\u0438\u0442\u0430 \u043e\u0442 \u0445\u043e\u0442\u043b\u0438\u043d\u043a\u0438\u043d\u0433\u0430, \u0442\u043e \u043f\u043e\u0438\u0441\u043a\u043e\u0432\u0438\u043a\u0430\u043c \u0431\u0443\u0434\u0435\u0442 \u0441\u043b\u043e\u0436\u043d\u0435\u0435 \u0438\u043d\u0434\u0435\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438 \u043d\u0430 \u0432\u0430\u0448\u0435\u043c\n\u0441\u0430\u0439\u0442\u0435 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043f\u0435\u0440\u0435\u0441\u0442\u0430\u0442\u044c \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043f\u043e\u0434\u0433\u0440\u0443\u0437\u043a\u0430 \u043e\u0431\u043b\u043e\u0436\u043a\u0438 \u0441\u0430\u0439\u0442\u0430 (OGP Image). \u0422\u0430\u043a\u043e\u0435 \u0442\u043e\u0436\u0435 \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u0440\u0435\u0448\u0430\u0442\u044c, \u043d\u043e \u0443\u0436\u0435 \u0432\n\u0438\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u043b\u0443\u0447\u0430\u044f\u0445."),(0,a.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0436\u0435 \u0443 \u0432\u0430\u0441 VPS, VDS, \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0432 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 HTTP-\u0441\u0435\u0440\u0432\u0435\u0440\u0430 (Apache, Nginx \u0438 \u0442.\u0434.)."),(0,a.kt)("h3",{id:"\u043a\u0430\u043a-\u044d\u0442\u043e-\u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442"},"\u041a\u0430\u043a \u044d\u0442\u043e \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442"),(0,a.kt)("p",null,"\u041a\u043e\u0433\u0434\u0430 \u0447\u0435\u043b\u043e\u0432\u0435\u043a \u0437\u0430\u0445\u043e\u0434\u0438\u0442 \u043d\u0430 \u0432\u0430\u0448 \u0441\u0430\u0439\u0442, \u0431\u0440\u0430\u0443\u0437\u0435\u0440, \u043f\u043e\u043c\u0438\u043c\u043e \u043f\u043e\u0434\u0433\u0440\u0443\u0437\u043a\u0438 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b, \u043f\u043e\u0434\u0433\u0440\u0443\u0436\u0430\u0435\u0442 \u0432\u0441\u044e \u0441\u0442\u0430\u0442\u0438\u043a\u0443 (\u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438, CSS,\nJS-\u0444\u0430\u0439\u043b\u044b \u0438 \u0442.\u0434.). \u0412\u043e \u0432\u0440\u0435\u043c\u044f \u043f\u043e\u0434\u0433\u0440\u0443\u0437\u043a\u0438 \u0441\u0442\u0430\u0442\u0438\u043a\u0438, \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 HTTP-\u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a ",(0,a.kt)("em",{parentName:"p"},"Referer"),", \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u0439 \u0430\u0434\u0440\u0435\u0441 \u0441\u0430\u0439\u0442\u0430, \u0441\n\u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u043f\u0440\u0438\u043b\u0435\u0442\u0435\u043b \u0437\u0430\u043f\u0440\u043e\u0441 \u043a \u0432\u0430\u043c \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440. \u0412\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u043d\u0430 \u0441\u0442\u043e\u0440\u043e\u043d\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u044d\u0442\u043e\u0442 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0438 \u0435\u0441\u043b\u0438 \u0441\u0435\u0440\u0432\u0435\u0440\n\u043f\u043e\u043d\u0438\u043c\u0430\u0435\u0442, \u0447\u0442\u043e \u0437\u0430\u043f\u0440\u043e\u0441 \u043f\u0440\u0438\u043b\u0435\u0442\u0435\u043b \u0441 \u043b\u0435\u0432\u043e\u0433\u043e \u0441\u0430\u0439\u0442\u0430, \u0442\u043e \u043e\u0442\u0434\u0430\u0451\u043c 403 (\u043a\u043e\u043d\u0442\u0435\u043d\u0442 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d). \u0418\u043d\u0430\u0447\u0435 \u043e\u0442\u0434\u0430\u0451\u043c \u0441\u0430\u043c \u043a\u043e\u043d\u0442\u0435\u043d\u0442."),(0,a.kt)("h4",{id:"\u0432\u043e\u0442-\u043a\u0430\u043a-\u044d\u0442\u043e-\u0434\u0435\u043b\u0430\u0435\u0442\u0441\u044f-\u043d\u0430-nginx"},"\u0412\u043e\u0442, \u043a\u0430\u043a \u044d\u0442\u043e \u0434\u0435\u043b\u0430\u0435\u0442\u0441\u044f \u043d\u0430 nginx:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"location ~ \\.(jpe?g|png|gif|js|css)$ {\n  valid_referers none blocked congritta.ru *.congritta.ru;\n  if ($invalid_referer) {\n     return 403;\n  }\n}\n")),(0,a.kt)("p",null,"\u042d\u0442\u043e \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0432\u043f\u0438\u0445\u043d\u0443\u0442\u044c \u0432 .conf-\u0444\u0430\u0439\u043b, \u0433\u0434\u0435 \u043f\u0440\u043e\u043f\u0438\u0441\u0430\u043d\u0430 \u0441\u0442\u0430\u0442\u0438\u043a\u0430 \u0432\u0430\u0448\u0435\u0433\u043e \u0441\u0430\u0439\u0442\u0430. \u0413\u043b\u0430\u0437\u0430\u043c\u0438 \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u0439\u0442\u0438 \u0433\u0434\u0435 \u043f\u0440\u043e\u043f\u0438\u0441\u044b\u0432\u0430\u044e\u0442\u0441\u044f\n\u0440\u0430\u0437\u0440\u0435\u0448\u0451\u043d\u043d\u044b\u0435 \u0434\u043e\u043c\u0435\u043d\u044b \u0438 \u0432\u043c\u0435\u0441\u0442\u043e \u043c\u043e\u0438\u0445 \u0434\u043b\u044f \u043f\u0440\u0438\u043c\u0435\u0440\u0430 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u043f\u0438\u0441\u0430\u0442\u044c \u0441\u0432\u043e\u0438."),(0,a.kt)("p",null,"\u041f\u043e\u0441\u043b\u0435 \u0441\u043c\u0435\u043d\u044b \u0444\u0430\u0439\u043b\u0430 \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0439\u0442\u0435 \u0432\u0430\u0448 \u0441\u0435\u0440\u0432\u0435\u0440."),(0,a.kt)("h4",{id:"\u0432\u043e\u0442-\u043a\u0430\u043a-\u044d\u0442\u043e-\u0434\u0435\u043b\u0430\u0435\u0442\u0441\u044f-\u043d\u0430-apache-htaccess"},"\u0412\u043e\u0442, \u043a\u0430\u043a \u044d\u0442\u043e \u0434\u0435\u043b\u0430\u0435\u0442\u0441\u044f \u043d\u0430 Apache (.htaccess):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"RewriteEngine on\nRewriteCond %{HTTP_REFERER} !^$\nRewriteCond %{HTTP_REFERER} !^http(s)?://(www\\.)?congritta.ru [NC]\nRewriteCond %{HTTP_REFERER} !^http(s)?://(www\\.)?congritta.com [NC]\nRewriteRule \\.(jpg|jpeg|png|gif|css|js)$ - [NC,F,L]\n")),(0,a.kt)("h3",{id:"\u043a\u0430\u043a-\u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c-\u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442-\u043b\u0438-\u0437\u0430\u0449\u0438\u0442\u0430-\u043e\u0442-\u0445\u043e\u0442\u043b\u0438\u043d\u043a\u0438\u043d\u0433\u0430"},"\u041a\u0430\u043a \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c, \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043b\u0438 \u0437\u0430\u0449\u0438\u0442\u0430 \u043e\u0442 \u0445\u043e\u0442\u043b\u0438\u043d\u043a\u0438\u043d\u0433\u0430"),(0,a.kt)("p",null,"\u041e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 \u043b\u044e\u0431\u0443\u044e \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443 \u0441 \u0432\u0430\u0448\u0435\u0433\u043e \u0441\u0430\u0439\u0442\u0430 \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435 (\u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u043d\u044b\u0439 \u043f\u0443\u0442\u044c \u043a \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0435 \u0431\u044b\u043b \u0432 \u0430\u0434\u0440\u0435\u0441\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0435).\n\u0415\u0441\u043b\u0438 \u0441\u0435\u0440\u0432\u0435\u0440 \u0432\u044b\u0434\u0430\u043b 403, \u0443\u0436\u0435 \u0445\u043e\u0440\u043e\u0448\u043e. \u0415\u0441\u043b\u0438 \u043d\u0435\u0442 - \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0441\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0430\u0434\u0440\u0435\u0441 \u0438 \u043e\u0442\u043a\u0440\u044b\u0442\u044c \u0435\u0433\u043e \u0436\u0435 \u0432 \u043d\u043e\u0432\u043e\u0439 \u0432\u043a\u043b\u0430\u0434\u043a\u0435, \u0434\u043e\u043b\u0436\u043d\u043e\n\u0432\u044b\u0434\u0430\u0442\u044c 403. \u0415\u0441\u043b\u0438 \u0438 \u0442\u0430\u043a \u043d\u0435 \u0441\u0440\u0430\u0431\u043e\u0442\u0430\u043b\u043e, \u0437\u043d\u0430\u0447\u0438\u0442 \u0432\u044b \u043d\u0435 \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043b\u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 HTTP-\u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0438\u043b\u0438 \u0447\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u0412\u0435\u0440\u043d\u0438\u0442\u0435\n\u0432\u0441\u0451, \u043a\u0430\u043a \u0431\u044b\u043b\u043e \u0438 \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044c \u043a \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0443, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432 \u044d\u0442\u043e\u043c \u0440\u0430\u0437\u0431\u0438\u0440\u0430\u0435\u0442\u0441\u044f."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0423\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c, \u0447\u0442\u043e \u043f\u043e\u0441\u043b\u0435 \u043f\u0440\u043e\u0432\u0435\u0434\u0451\u043d\u043d\u044b\u0445 \u043c\u0430\u043d\u0438\u043f\u0443\u043b\u044f\u0446\u0438\u0439 \u0443 \u0432\u0430\u0441 \u0432\u0441\u0451 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442!")))}g.isMDXComponent=!0},8288:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/poster-d847855429228b60240e2b3a42773bab.jpg"}}]);