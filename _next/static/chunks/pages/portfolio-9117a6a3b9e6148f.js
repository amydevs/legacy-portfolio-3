(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[371],{8849:function(a,b,c){a.exports=function(b){var c={};function a(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return b[d].call(e.exports,e,e.exports,a),e.l=!0,e.exports}return a.m=b,a.c=c,a.d=function(b,c,d){a.o(b,c)||Object.defineProperty(b,c,{enumerable:!0,get:d})},a.r=function(a){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},a.t=function(b,c){if(1&c&&(b=a(b)),8&c||4&c&&"object"==typeof b&&b&&b.__esModule)return b;var d=Object.create(null);if(a.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:b}),2&c&&"string"!=typeof b)for(var e in b)a.d(d,e,(function(a){return b[a]}).bind(null,e));return d},a.n=function(c){var b=c&&c.__esModule?function(){return c.default}:function(){return c};return a.d(b,"a",b),b},a.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},a.p="",a(a.s=2)}([function(a,b){a.exports=c(5697)},function(a,b){a.exports=c(7294)},function(g,c,b){"use strict";b.r(c);var f=b(1),a=b(0),h=function(){return(h=Object.assign||function(d){for(var a,b=1,e=arguments.length;b<e;b++)for(var c in a=arguments[b])Object.prototype.hasOwnProperty.call(a,c)&&(d[c]=a[c]);return d}).apply(this,arguments)},i=function(b,e){var d={};for(var a in b)Object.prototype.hasOwnProperty.call(b,a)&&0>e.indexOf(a)&&(d[a]=b[a]);if(null!=b&&"function"==typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(b);c<a.length;c++)0>e.indexOf(a[c])&&Object.prototype.propertyIsEnumerable.call(b,a[c])&&(d[a[c]]=b[a[c]])}return d},j=0,d=f.forwardRef(function(a,x){var g=a.title,d=void 0===g?null:g,k=a.description,b=void 0===k?null:k,l=a.size,c=void 0===l?null:l,m=a.color,C=void 0===m?"currentColor":m,n=a.horizontal,D=void 0===n?null:n,o=a.vertical,E=void 0===o?null:o,p=a.rotate,F=void 0===p?null:p,q=a.spin,r=void 0===q?null:q,s=a.style,t=void 0===s?{}:s,y=a.children,z=i(a,["title","description","size","color","horizontal","vertical","rotate","spin","style","children"]);j++;var u,A=null!==r&&r,B=f.Children.map(y,function(d){var a=d;!0!==A&&(A=!0===(null===r?a.props.spin:r));var b=a.props.size;"number"==typeof c&&"number"==typeof a.props.size&&(b=a.props.size/c);var e={size:b,color:null===C?a.props.color:C,horizontal:null===D?a.props.horizontal:D,vertical:null===E?a.props.vertical:E,rotate:null===F?a.props.rotate:F,spin:null===r?a.props.spin:r,inStack:!0};return f.cloneElement(a,e)});null!==c&&(t.width="string"==typeof c?c:1.5*c+"rem");var v,e="stack_labelledby_"+j,w="stack_describedby_"+j;if(d)u=b?e+" "+w:e;else if(v="presentation",b)throw Error("title attribute required when description is set");return f.createElement("svg",h({ref:x,viewBox:"0 0 24 24",style:t,role:v,"aria-labelledby":u},z),d&&f.createElement("title",{id:e},d),b&&f.createElement("desc",{id:w},b),A&&f.createElement("style",null,"@keyframes spin { to { transform: rotate(360deg) } }","@keyframes spin-inverse { to { transform: rotate(-360deg) } }"),B)});d.displayName="Stack",d.propTypes={size:a.oneOfType([a.number,a.string]),color:a.string,horizontal:a.bool,vertical:a.bool,rotate:a.number,spin:a.oneOfType([a.bool,a.number]),children:a.oneOfType([a.arrayOf(a.node),a.node]).isRequired,className:a.string,style:a.object},d.defaultProps={size:null,color:null,horizontal:null,vertical:null,rotate:null,spin:null};var k=d;b.d(c,"Icon",function(){return e}),b.d(c,"Stack",function(){return k});var l=function(){return(l=Object.assign||function(d){for(var a,b=1,e=arguments.length;b<e;b++)for(var c in a=arguments[b])Object.prototype.hasOwnProperty.call(a,c)&&(d[c]=a[c]);return d}).apply(this,arguments)},m=function(b,e){var d={};for(var a in b)Object.prototype.hasOwnProperty.call(b,a)&&0>e.indexOf(a)&&(d[a]=b[a]);if(null!=b&&"function"==typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(b);c<a.length;c++)0>e.indexOf(a[c])&&Object.prototype.propertyIsEnumerable.call(b,a[c])&&(d[a[c]]=b[a[c]])}return d},n=0,e=f.forwardRef(function(a,N){var O=a.path,t=a.id,u=void 0===t?++n:t,v=a.title,j=void 0===v?null:v,w=a.description,h=void 0===w?null:w,x=a.size,e=void 0===x?null:x,y=a.color,z=void 0===y?"currentColor":y,A=a.horizontal,k=void 0!==A&&A,B=a.vertical,o=void 0!==B&&B,C=a.rotate,p=void 0===C?0:C,D=a.spin,g=void 0!==D&&D,E=a.style,b=void 0===E?{}:E,F=a.inStack,c=void 0!==F&&F,G=m(a,["path","id","title","description","size","color","horizontal","vertical","rotate","spin","style","inStack"]),H={},d=[];null!==e&&(c?d.push("scale("+e+")"):(b.width="string"==typeof e?e:1.5*e+"rem",b.height=b.width)),k&&d.push("scaleX(-1)"),o&&d.push("scaleY(-1)"),0!==p&&d.push("rotate("+p+"deg)"),null!==z&&(H.fill=z);var I=f.createElement("path",l({d:O,style:H},c?G:{})),q=I;d.length>0&&(b.transform=d.join(" "),b.transformOrigin="center",c&&(q=f.createElement("g",{style:b},I,f.createElement("rect",{width:"24",height:"24",fill:"transparent"}))));var J,r=q,K=!0===g||"number"!=typeof g?2:g,i=!c&&(k||o);if(K<0&&(i=!i),g&&(r=f.createElement("g",{style:{animation:"spin"+(i?"-inverse":"")+" linear "+Math.abs(K)+"s infinite",transformOrigin:"center"}},q,!(k||o||0!==p)&&f.createElement("rect",{width:"24",height:"24",fill:"transparent"}))),c)return r;var L,s="icon_labelledby_"+u,M="icon_describedby_"+u;if(j)J=h?s+" "+M:s;else if(L="presentation",h)throw Error("title attribute required when description is set");return f.createElement("svg",l({ref:N,viewBox:"0 0 24 24",style:b,role:L,"aria-labelledby":J},G),j&&f.createElement("title",{id:s},j),h&&f.createElement("desc",{id:M},h),!c&&g&&(i?f.createElement("style",null,"@keyframes spin-inverse { to { transform: rotate(-360deg) } }"):f.createElement("style",null,"@keyframes spin { to { transform: rotate(360deg) } }")),r)});e.displayName="Icon",e.propTypes={path:a.string.isRequired,size:a.oneOfType([a.number,a.string]),color:a.string,horizontal:a.bool,vertical:a.bool,rotate:a.number,spin:a.oneOfType([a.bool,a.number]),style:a.object,inStack:a.bool,className:a.string},e.defaultProps={size:null,color:"currentColor",horizontal:!1,vertical:!1,rotate:0,spin:!1},c.default=e}])},5073:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/portfolio",function(){return c(4908)}])},7156:function(c,b,a){"use strict";var d=a(5893),e=a(7294),f=1,g=1;b.Z=function(){var a=(0,e.useState)("Donut"),b=a[0],c=a[1],h=function(){var n=[],o=[];g+=.03;for(var b=Math.cos(f+=.07),d=Math.sin(f),p=Math.cos(g),q=Math.sin(g),a=0;a<1760;a++)n[a]=a%80==79?"\n":" ",o[a]=0;for(var e=0;e<6.28;e+=.07)for(var h=Math.cos(e),i=Math.sin(e),j=0;j<6.28;j+=.02){var k=Math.sin(j),r=Math.cos(j),l=h+2,m=1/(k*l*d+i*b+5),v=k*l*b-i*d,s=0|40+30*m*(r*l*p-v*q),t=0|12+15*m*(r*l*q+v*p),u=s+80*t,w=0|8*((i*d-k*h*b)*p-k*h*d-i*b-r*h*q);t<22&&t>=0&&s>=0&&s<79&&m>o[u]&&(o[u]=m,n[u]=".,-~:;=!*#$@"[w>0?w:0])}c(n.join(""))};return(0,e.useEffect)(function(){var a=setInterval(h,50);return function(){return clearInterval(a)}}),(0,d.jsx)("div",{children:(0,d.jsx)("pre",{id:"d",style:{backgroundColor:"black",color:"#ccc",fontSize:"10pt",width:"100%",overflow:"hidden",display:"flex",flexWrap:"nowrap",alignContent:"center",alignItems:"center",justifyItems:"center",justifyContent:"center",textAlign:"center"},children:b})})}},2031:function(f,b,a){"use strict";var g=a(5893),c=a(8849),h=a.n(c),d=a(1664),i=a.n(d),e=a(2211),j=a.n(e);b.Z=function(a){return(0,g.jsx)(i(),{href:a.href,children:(0,g.jsxs)("a",{className:j().icon_button,children:[(0,g.jsx)(h(),{path:a.icon,className:j().mdi}),a.text]})})}},4908:function(f,c,b){"use strict";b.r(c),b.d(c,{default:function(){return o}});var g=b(1799),h=b(5893),d=b(2935),i=b.n(d),j=b(7156),e=b(5941),k=b.n(e),l=b(2031),m=function(a){return(0,h.jsxs)("div",{className:k().card,children:[(0,h.jsx)("span",{className:"title",children:a.title}),(0,h.jsx)("div",{className:k().description,children:a.description}),(0,h.jsx)("div",{className:k().actions,children:a.actions.map(function(a,b){return(0,h.jsx)(l.Z,(0,g.Z)({},a),b)})})]})},a=b(3648),n=[{title:"Chip-8 Interpretting Emulator",description:"A Chip-8 Interpretting Emulator Written in Rust.",actions:[{text:"GitHub",href:"https://github.com/jy1263/chip-8-emu-rs",icon:a.LcO}]},{title:"Simple Australian Tax Calculator",description:"A simple tax calculator for the Australian taxation system. Built with Laravel and PHP.",actions:[{text:"GitHub",href:"https://github.com/jy1263/TaxCalculatorLaravel",icon:a.LcO},{text:"Demo",href:"https://austaxcalc.000webhostapp.com/",icon:a.m5Y}]},{title:"TapeSync",description:"A modification for the productivity and organization application Tape, to enable synchronization of items between different systems using existing sync services.",actions:[{text:"GitHub",href:"https://github.com/jy1263/TapeSync",icon:a.LcO}]},{title:"TapeMobile",description:"A modification for the productivity and organization application Tape, that ports it to mobile devices and the PWA platform.",actions:[{text:"GitHub",href:"https://github.com/jy1263/TapeMobile",icon:a.LcO}]},{title:"SRXDBepInExInstaller",description:"A installer for the modding framework BepInEx for the game Spin Rhythm XD written in Python and Tkinter.",actions:[{text:"GitHub",href:"https://github.com/SRXDModdingGroup/SRXDBepInExInstaller",icon:a.LcO}]},{title:"Exalta Launcher",description:"A third-party open-source launcher built in Rust for Realm of the Mad God Exalted.",actions:[{text:"GitHub",href:"https://github.com/jy1263/exalta",icon:a.LcO},{text:"Download",href:"https://github.com/jy1263/exalta/releases/latest",icon:a.OGU}]},{title:"SpinShare Client",description:"Former maintainer, contributer, and translator for the open-source SpinShare level-sharing client for Spin Rhythm XD.",actions:[{text:"GitHub",href:"https://github.com/SpinShare/client/",icon:a.LcO},{text:"Download",href:"https://spinsha.re/client/",icon:a.OGU}]},{title:"MaebeeTV Website",description:"Freelance work done for MaebeeTV in rebuilding their website using the Next.js, Tailwind, TRPC, Prisma stack. Backend for team and even organization is in process.",actions:[{text:"GitHub",href:"https://github.com/jy1263/maebeetv/",icon:a.LcO},{text:"Website",href:"https://maebeetv.vercel.app/",icon:a.m5Y}]}],o=function(){return(0,h.jsxs)("div",{className:"fullscreen ".concat(i().portfolio),children:[(0,h.jsx)("div",{className:i().projcontainer,children:n.map(function(a,b){return(0,h.jsx)(m,(0,g.Z)({},a),b)})}),(0,h.jsx)(j.Z,{}),(0,h.jsxs)("div",{style:{textAlign:"center",marginBottom:"10px"},children:["Spinning Donut Code is by\xa0",(0,h.jsx)("a",{href:"https://www.a1k0n.net/2011/07/20/donut-math.html",children:"a1k0n"})]})]})}},2935:function(a){a.exports={portfolio:"Portfolio_portfolio__Luew6",projcontainer:"Portfolio_projcontainer__LDWCs"}},2211:function(a){a.exports={icon_button:"IconButton_icon_button__HRKcV",mdi:"IconButton_mdi__FTg_4"}},5941:function(a){a.exports={card:"ProjectCard_card___M_vv",description:"ProjectCard_description__dnpqU",actions:"ProjectCard_actions__OxxWv"}},2703:function(a,e,b){"use strict";var f=b(414);function c(){}function d(){}d.resetWarningCache=c,a.exports=function(){function a(c,d,e,g,h,b){if(b!==f){var a=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function b(){return a}a.isRequired=a;var e={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:b,element:a,elementType:a,instanceOf:b,node:a,objectOf:b,oneOf:b,oneOfType:b,shape:b,exact:b,checkPropTypes:d,resetWarningCache:c};return e.PropTypes=e,e}},5697:function(a,c,b){a.exports=b(2703)()},414:function(a){"use strict";a.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(a){a.O(0,[702,774,888,179],function(){var b;return a(a.s=5073)}),_N_E=a.O()}])