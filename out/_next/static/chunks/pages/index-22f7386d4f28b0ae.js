(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5768)}])},3740:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(6495).Z,r=n(2648).Z,a=n(1598).Z,o=n(7273).Z,l=a(n(7294)),s=r(n(2636)),c=n(7757),d=n(3735),u=n(3341);n(4210);var f=r(n(7746));let h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function m(e){return void 0!==e.default}function g(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function p(e,t,n,r,a,o,l){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===n&&o(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,a=!1;r.current(i({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>a,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{a=!0,t.stopPropagation()}}))}(null==a?void 0:a.current)&&a.current(e)}})}let v=l.forwardRef((e,t)=>{var{imgAttributes:n,heightInt:r,widthInt:a,qualityInt:s,className:c,imgStyle:d,blurStyle:u,isLazy:f,fill:h,placeholder:m,loading:g,srcString:v,config:x,unoptimized:j,loader:_,onLoadRef:w,onLoadingCompleteRef:b,setBlurComplete:A,setShowAltText:y,onLoad:E,onError:C}=e,S=o(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return g=f?"lazy":g,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},S,{loading:g,width:a,height:r,decoding:"async","data-nimg":h?"fill":"1",className:c,style:i({},d,u)},n,{ref:l.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(C&&(e.src=e.src),e.complete&&p(e,v,m,w,b,A,j))},[v,m,w,b,A,C,j,t]),onLoad:e=>{let t=e.currentTarget;p(t,v,m,w,b,A,j)},onError:e=>{y(!0),"blur"===m&&A(!0),C&&C(e)}})))}),x=l.forwardRef((e,t)=>{let n,r;var a,{src:p,sizes:x,unoptimized:j=!1,priority:_=!1,loading:w,className:b,quality:A,width:y,height:E,fill:C,style:S,onLoad:N,onLoadingComplete:k,placeholder:z="empty",blurDataURL:O,layout:R,objectFit:F,objectPosition:P,lazyBoundary:I,lazyRoot:L}=e,U=o(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let B=l.useContext(u.ImageConfigContext),M=l.useMemo(()=>{let e=h||B||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return i({},e,{allSizes:t,deviceSizes:n})},[B]),T=U,D=T.loader||f.default;delete T.loader;let V="__next_img_default"in D;if(V){if("custom"===M.loader)throw Error('Image with src "'.concat(p,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=D;D=t=>{let{config:n}=t,i=o(t,["config"]);return e(i)}}if(R){"fill"===R&&(C=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[R];e&&(S=i({},S,e));let t={responsive:"100vw",fill:"100vw"}[R];t&&!x&&(x=t)}let W="",H=g(y),q=g(E);if("object"==typeof(a=p)&&(m(a)||void 0!==a.src)){let e=m(p)?p.default:p;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(n=e.blurWidth,r=e.blurHeight,O=O||e.blurDataURL,W=e.src,!C){if(H||q){if(H&&!q){let t=H/e.width;q=Math.round(e.height*t)}else if(!H&&q){let t=q/e.height;H=Math.round(e.width*t)}}else H=e.width,q=e.height}}let Y=!_&&("lazy"===w||void 0===w);((p="string"==typeof p?p:W).startsWith("data:")||p.startsWith("blob:"))&&(j=!0,Y=!1),M.unoptimized&&(j=!0),V&&p.endsWith(".svg")&&!M.dangerouslyAllowSVG&&(j=!0);let[J,Q]=l.useState(!1),[G,K]=l.useState(!1),Z=g(A),X=Object.assign(C?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:F,objectPosition:P}:{},G?{}:{color:"transparent"},S),$="blur"===z&&O&&!J?{backgroundSize:X.objectFit||"cover",backgroundPosition:X.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:H,heightInt:q,blurWidth:n,blurHeight:r,blurDataURL:O,objectFit:X.objectFit}),'")')}:{},ee=function(e){let{config:t,src:n,unoptimized:i,width:r,quality:a,sizes:o,loader:l}=e;if(i)return{src:n,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,n){let{deviceSizes:i,allSizes:r}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(n);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:r.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:r,kind:"w"}}if("number"!=typeof t)return{widths:i,kind:"w"};let a=[...new Set([t,2*t].map(e=>r.find(t=>t>=e)||r[r.length-1]))];return{widths:a,kind:"x"}}(t,r,o),d=s.length-1;return{sizes:o||"w"!==c?o:"100vw",srcSet:s.map((e,i)=>"".concat(l({config:t,src:n,quality:a,width:e})," ").concat("w"===c?e:i+1).concat(c)).join(", "),src:l({config:t,src:n,quality:a,width:s[d]})}}({config:M,src:p,unoptimized:j,width:H,quality:Z,sizes:x,loader:D}),et=p,en={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:T.crossOrigin},ei=l.useRef(N);l.useEffect(()=>{ei.current=N},[N]);let er=l.useRef(k);l.useEffect(()=>{er.current=k},[k]);let ea=i({isLazy:Y,imgAttributes:ee,heightInt:q,widthInt:H,qualityInt:Z,className:b,imgStyle:X,blurStyle:$,loading:w,config:M,fill:C,unoptimized:j,placeholder:z,loader:D,srcString:et,onLoadRef:ei,onLoadingCompleteRef:er,setBlurComplete:Q,setShowAltText:K},T);return l.default.createElement(l.default.Fragment,null,l.default.createElement(v,Object.assign({},ea,{ref:t})),_?l.default.createElement(s.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src},en))):null)});t.default=x,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7757:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:n,blurWidth:i,blurHeight:r,blurDataURL:a,objectFit:o}=e,l=i||t,s=r||n,c=a.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return l&&s?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(l," ").concat(s,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(i&&r?"1":"20","'/%3E").concat(c,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(a,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(a,"'/%3E%3C/svg%3E")}},7746:function(e,t){"use strict";function n(e){let{config:t,src:n,width:i,quality:r}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(r||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n.__next_img_default=!0,t.default=n},5768:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var i=n(5893),r=n(9008),a=n.n(r),o=n(9034),l=n.n(o),s=n(2584),c=n.n(s),d={src:"/_next/static/media/my-logo.f0c313f3.png",height:445,width:360,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAQAAABwz0azAAAAYklEQVR42iXHLRJFUBiA4fdef8nYgpFVJEm2AeuwAkE1zHC+U0VJsgVNURRrwfC0h/YPTVR5fGpbSeny6XM5ILXeqEWfkDhAF8ilN8is0ESN+pIVhp/vIPOTHSA2AClkAoAb0xwZim/2zzcAAAAASUVORK5CYII=",blurWidth:6,blurHeight:8},u=n(5675),f=n.n(u),h=function(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:c().navBarContainer,children:[(0,i.jsx)("div",{className:c().logo,children:(0,i.jsx)(f(),{width:"40",src:d,alt:"logo ajnash"})}),(0,i.jsx)("div",{className:c().linkSection,children:(0,i.jsxs)("div",{className:c().linkArray,children:[(0,i.jsx)("div",{className:c().link,children:(0,i.jsx)("span",{children:"About me"})}),(0,i.jsx)("div",{className:c().link,children:(0,i.jsx)("span",{children:"Works"})}),(0,i.jsx)("div",{className:c().link,children:(0,i.jsx)("span",{children:"MyStory"})}),(0,i.jsx)("div",{className:c().link,children:(0,i.jsx)("span",{children:"Blogs"})})]})})]})})},m=n(2747),g=n.n(m),p={src:"/_next/static/media/profile-pic (3).f44897ae.png",height:612,width:612,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA5ElEQVR42kWPu0oDURRFL36F3zClP6FgYy1qrTYRLAZfaCEINoZBEHzUfoFYqM0FH4UPTCEIiVHGRsWMOhKZnJyzzJ0mGzZs1qq2C6H9Exl4QELLnWdRKYEgW5jS+njj7+EK6rcEFpxTM8/jJU9bE8Xc+CiVQcfLxkhB4wbN3r2zuxNhpQdjx3kSc1xdoBkPQDKEtnNxpirUzrAlx/78FBeb07DqsO1hTDriAC/fnxxWxoq95VmO1iZpJDMF96eoqndgkXQ1q+4esLO+SL12za8oQNY16z9Jn5s+TV8FCPWd/KuU/9tiwlfpj/IgAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},v=function(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:g().HomeContainer,children:[(0,i.jsx)("div",{className:g().leftSec,children:(0,i.jsx)("div",{className:g().welcomeText,children:(0,i.jsx)("span",{children:"Hello, I’m Ajnash ibn umer ,a Full stack Engineer working full-time at Credot."})})}),(0,i.jsx)("div",{className:g().rightSec,children:(0,i.jsx)("div",{className:g().myPic,children:(0,i.jsx)(f(),{alt:"my-photo",src:p,width:500})})})]})})},x=n(7103),j=n.n(x),_=n(3750),w=n(8193),b=n(9583),A=function(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:j().FooterContainer,children:(0,i.jsxs)("div",{className:j().leftSec,children:[(0,i.jsxs)("div",{className:j().socials,children:[(0,i.jsx)("span",{children:(0,i.jsx)(_.rFR,{})}),(0,i.jsx)("span",{children:(0,i.jsx)(w.t0C,{})}),(0,i.jsx)("span",{children:(0,i.jsx)(_.NQh,{})}),(0,i.jsx)("span",{children:(0,i.jsx)(b.CUm,{})}),(0,i.jsx)("span",{children:(0,i.jsx)(_.meP,{})})]}),(0,i.jsx)("span",{children:"Copyright \xa9 2023-2029"}),(0,i.jsx)("span",{children:"ajnash.k02@gmail.com —— (+91) 9037 535152"})]})})})};function y(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a(),{children:[(0,i.jsx)("title",{children:"Create Next App"}),(0,i.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsxs)("main",{className:l().main,children:[(0,i.jsx)("div",{className:"navbar",children:(0,i.jsx)(h,{})}),(0,i.jsx)("section",{children:(0,i.jsx)(v,{})}),(0,i.jsx)("footer",{children:(0,i.jsx)(A,{})})]})]})}},7103:function(e){e.exports={FooterContainer:"footer_FooterContainer___50R3",leftSec:"footer_leftSec__7_tJn",socials:"footer_socials___mzPd",rightSec:"footer_rightSec__NP063"}},2747:function(e){e.exports={HomeContainer:"home_HomeContainer__1qfrO",leftSec:"home_leftSec__VfiL_",welcomeText:"home_welcomeText__f_dyn","anim-lineUp":"home_anim-lineUp__WIFPK",rightSec:"home_rightSec__zGupD"}},2584:function(e){e.exports={navBarContainer:"navbar_navBarContainer__4f2FI",logo:"navbar_logo__1on6v",linkSection:"navbar_linkSection__ogKrE",linkArray:"navbar_linkArray__u1YJX",link:"navbar_link__T1bBL"}},9034:function(e){e.exports={main:"Home_main__nLjiQ"}},9008:function(e,t,n){e.exports=n(2636)},5675:function(e,t,n){e.exports=n(3740)},8357:function(e,t,n){"use strict";n.d(t,{w_:function(){return s}});var i=n(7294),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=i.createContext&&i.createContext(r),o=function(){return(o=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},l=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,i=Object.getOwnPropertySymbols(e);r<i.length;r++)0>t.indexOf(i[r])&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]]);return n};function s(e){return function(t){return i.createElement(c,o({attr:o({},e.attr)},t),function e(t){return t&&t.map(function(t,n){return i.createElement(t.tag,o({key:n},t.attr),e(t.child))})}(e.child))}}function c(e){var t=function(t){var n,r=e.attr,a=e.size,s=e.title,c=l(e,["attr","size","title"]),d=a||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),i.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,c,{className:n,style:o(o({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),s&&i.createElement("title",null,s),e.children)};return void 0!==a?i.createElement(a.Consumer,null,function(e){return t(e)}):t(r)}}},function(e){e.O(0,[445,13,617,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);