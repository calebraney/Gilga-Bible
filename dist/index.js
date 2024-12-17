(()=>{var re=Object.defineProperty;var se=(e,t,i)=>t in e?re(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var q=(e,t,i)=>se(e,typeof t!="symbol"?t+"":t,i);(function(){function e(){for(var r=arguments.length,n=0;n<r;n++){var s=n<0||arguments.length<=n?void 0:arguments[n];s.nodeType===1||s.nodeType===11?this.appendChild(s):this.appendChild(document.createTextNode(String(s)))}}function t(){for(;this.lastChild;)this.removeChild(this.lastChild);arguments.length&&this.append.apply(this,arguments)}function i(){for(var r=this.parentNode,n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];var a=s.length;if(r)for(a||r.removeChild(this);a--;){var l=s[a];typeof l!="object"?l=this.ownerDocument.createTextNode(l):l.parentNode&&l.parentNode.removeChild(l),a?r.insertBefore(this.previousSibling,l):r.replaceChild(l,this)}}typeof Element<"u"&&(Element.prototype.append||(Element.prototype.append=e,DocumentFragment.prototype.append=e),Element.prototype.replaceChildren||(Element.prototype.replaceChildren=t,DocumentFragment.prototype.replaceChildren=t),Element.prototype.replaceWith||(Element.prototype.replaceWith=i,DocumentFragment.prototype.replaceWith=i))})();function ne(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function At(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function bt(e,t,i){return t&&At(e.prototype,t),i&&At(e,i),e}function oe(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function Et(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),i.push.apply(i,r)}return i}function wt(e){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?Et(Object(i),!0).forEach(function(r){oe(e,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):Et(Object(i)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(i,r))})}return e}function _t(e,t){return le(e)||he(e,t)||Ot(e,t)||de()}function z(e){return ae(e)||ce(e)||Ot(e)||ue()}function ae(e){if(Array.isArray(e))return at(e)}function le(e){if(Array.isArray(e))return e}function ce(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)}function he(e,t){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var i=[],r=!0,n=!1,s=void 0;try{for(var o=e[Symbol.iterator](),a;!(r=(a=o.next()).done)&&(i.push(a.value),!(t&&i.length===t));r=!0);}catch(l){n=!0,s=l}finally{try{!r&&o.return!=null&&o.return()}finally{if(n)throw s}}return i}}function Ot(e,t){if(e){if(typeof e=="string")return at(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);if(i==="Object"&&e.constructor&&(i=e.constructor.name),i==="Map"||i==="Set")return Array.from(e);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return at(e,t)}}function at(e,t){(t==null||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function ue(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function de(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X(e,t){return Object.getOwnPropertyNames(Object(e)).reduce(function(i,r){var n=Object.getOwnPropertyDescriptor(Object(e),r),s=Object.getOwnPropertyDescriptor(Object(t),r);return Object.defineProperty(i,r,s||n)},{})}function Q(e){return typeof e=="string"}function ut(e){return Array.isArray(e)}function tt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=X(e),i;return t.types!==void 0?i=t.types:t.split!==void 0&&(i=t.split),i!==void 0&&(t.types=(Q(i)||ut(i)?String(i):"").split(",").map(function(r){return String(r).trim()}).filter(function(r){return/((line)|(word)|(char))/i.test(r)})),(t.absolute||t.position)&&(t.absolute=t.absolute||/absolute/.test(e.position)),t}function dt(e){var t=Q(e)||ut(e)?String(e):"";return{none:!t,lines:/line/i.test(t),words:/word/i.test(t),chars:/char/i.test(t)}}function it(e){return e!==null&&typeof e=="object"}function fe(e){return it(e)&&/^(1|3|11)$/.test(e.nodeType)}function pe(e){return typeof e=="number"&&e>-1&&e%1===0}function ge(e){return it(e)&&pe(e.length)}function K(e){return ut(e)?e:e==null?[]:ge(e)?Array.prototype.slice.call(e):[e]}function xt(e){var t=e;return Q(e)&&(/^(#[a-z]\w+)$/.test(e.trim())?t=document.getElementById(e.trim().slice(1)):t=document.querySelectorAll(e)),K(t).reduce(function(i,r){return[].concat(z(i),z(K(r).filter(fe)))},[])}var ve=Object.entries,et="_splittype",U={},me=0;function Y(e,t,i){if(!it(e))return console.warn("[data.set] owner is not an object"),null;var r=e[et]||(e[et]=++me),n=U[r]||(U[r]={});return i===void 0?t&&Object.getPrototypeOf(t)===Object.prototype&&(U[r]=wt(wt({},n),t)):t!==void 0&&(n[t]=i),i}function V(e,t){var i=it(e)?e[et]:null,r=i&&U[i]||{};return t===void 0?r:r[t]}function Lt(e){var t=e&&e[et];t&&(delete e[t],delete U[t])}function Se(){Object.keys(U).forEach(function(e){delete U[e]})}function Te(){ve(U).forEach(function(e){var t=_t(e,2),i=t[0],r=t[1],n=r.isRoot,s=r.isSplit;(!n||!s)&&(U[i]=null,delete U[i])})}function ye(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:" ",i=e?String(e):"";return i.trim().replace(/\s+/g," ").split(t)}var ft="\\ud800-\\udfff",Rt="\\u0300-\\u036f\\ufe20-\\ufe23",Ct="\\u20d0-\\u20f0",It="\\ufe0e\\ufe0f",Ae="[".concat(ft,"]"),lt="[".concat(Rt).concat(Ct,"]"),ct="\\ud83c[\\udffb-\\udfff]",be="(?:".concat(lt,"|").concat(ct,")"),Nt="[^".concat(ft,"]"),kt="(?:\\ud83c[\\udde6-\\uddff]){2}",Mt="[\\ud800-\\udbff][\\udc00-\\udfff]",Dt="\\u200d",Wt="".concat(be,"?"),Pt="[".concat(It,"]?"),Ee="(?:"+Dt+"(?:"+[Nt,kt,Mt].join("|")+")"+Pt+Wt+")*",we=Pt+Wt+Ee,xe="(?:".concat(["".concat(Nt).concat(lt,"?"),lt,kt,Mt,Ae].join("|"),`
)`),_e=RegExp("".concat(ct,"(?=").concat(ct,")|").concat(xe).concat(we),"g"),Oe=[Dt,ft,Rt,Ct,It],Le=RegExp("[".concat(Oe.join(""),"]"));function Re(e){return e.split("")}function zt(e){return Le.test(e)}function Ce(e){return e.match(_e)||[]}function Ie(e){return zt(e)?Ce(e):Re(e)}function Ne(e){return e==null?"":String(e)}function ke(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return e=Ne(e),e&&Q(e)&&!t&&zt(e)?Ie(e):e.split(t)}function ht(e,t){var i=document.createElement(e);return t&&Object.keys(t).forEach(function(r){var n=t[r],s=Q(n)?n.trim():n;s===null||s===""||(r==="children"?i.append.apply(i,z(K(s))):i.setAttribute(r,s))}),i}var pt={splitClass:"",lineClass:"line",wordClass:"word",charClass:"char",types:["lines","words","chars"],absolute:!1,tagName:"div"};function Me(e,t){t=X(pt,t);var i=dt(t.types),r=t.tagName,n=e.nodeValue,s=document.createDocumentFragment(),o=[],a=[];return/^\s/.test(n)&&s.append(" "),o=ye(n).reduce(function(l,u,S,d){var y,f;return i.chars&&(f=ke(u).map(function(_){var h=ht(r,{class:"".concat(t.splitClass," ").concat(t.charClass),style:"display: inline-block;",children:_});return Y(h,"isChar",!0),a=[].concat(z(a),[h]),h})),i.words||i.lines?(y=ht(r,{class:"".concat(t.wordClass," ").concat(t.splitClass),style:"display: inline-block; ".concat(i.words&&t.absolute?"position: relative;":""),children:i.chars?f:u}),Y(y,{isWord:!0,isWordStart:!0,isWordEnd:!0}),s.appendChild(y)):f.forEach(function(_){s.appendChild(_)}),S<d.length-1&&s.append(" "),i.words?l.concat(y):l},[]),/\s$/.test(n)&&s.append(" "),e.replaceWith(s),{words:o,chars:a}}function Ht(e,t){var i=e.nodeType,r={words:[],chars:[]};if(!/(1|3|11)/.test(i))return r;if(i===3&&/\S/.test(e.nodeValue))return Me(e,t);var n=K(e.childNodes);if(n.length&&(Y(e,"isSplit",!0),!V(e).isRoot)){e.style.display="inline-block",e.style.position="relative";var s=e.nextSibling,o=e.previousSibling,a=e.textContent||"",l=s?s.textContent:" ",u=o?o.textContent:" ";Y(e,{isWordEnd:/\s$/.test(a)||/^\s/.test(l),isWordStart:/^\s/.test(a)||/\s$/.test(u)})}return n.reduce(function(S,d){var y=Ht(d,t),f=y.words,_=y.chars;return{words:[].concat(z(S.words),z(f)),chars:[].concat(z(S.chars),z(_))}},r)}function De(e,t,i,r){if(!i.absolute)return{top:t?e.offsetTop:null};var n=e.offsetParent,s=_t(r,2),o=s[0],a=s[1],l=0,u=0;if(n&&n!==document.body){var S=n.getBoundingClientRect();l=S.x+o,u=S.y+a}var d=e.getBoundingClientRect(),y=d.width,f=d.height,_=d.x,h=d.y,T=h+a-u,w=_+o-l;return{width:y,height:f,top:T,left:w}}function Bt(e){V(e).isWord?(Lt(e),e.replaceWith.apply(e,z(e.childNodes))):K(e.children).forEach(function(t){return Bt(t)})}var We=function(){return document.createDocumentFragment()};function Pe(e,t,i){var r=dt(t.types),n=t.tagName,s=e.getElementsByTagName("*"),o=[],a=[],l=null,u,S,d,y=[],f=e.parentElement,_=e.nextElementSibling,h=We(),T=window.getComputedStyle(e),w=T.textAlign,M=parseFloat(T.fontSize),C=M*.2;return t.absolute&&(d={left:e.offsetLeft,top:e.offsetTop,width:e.offsetWidth},S=e.offsetWidth,u=e.offsetHeight,Y(e,{cssWidth:e.style.width,cssHeight:e.style.height})),K(s).forEach(function(A){var p=A.parentElement===e,E=De(A,p,t,i),b=E.width,W=E.height,N=E.top,O=E.left;/^br$/i.test(A.nodeName)||(r.lines&&p&&((l===null||N-l>=C)&&(l=N,o.push(a=[])),a.push(A)),t.absolute&&Y(A,{top:N,left:O,width:b,height:W}))}),f&&f.removeChild(e),r.lines&&(y=o.map(function(A){var p=ht(n,{class:"".concat(t.splitClass," ").concat(t.lineClass),style:"display: block; text-align: ".concat(w,"; width: 100%;")});Y(p,"isLine",!0);var E={height:0,top:1e4};return h.appendChild(p),A.forEach(function(b,W,N){var O=V(b),L=O.isWordEnd,G=O.top,F=O.height,B=N[W+1];E.height=Math.max(E.height,F),E.top=Math.min(E.top,G),p.appendChild(b),L&&V(B).isWordStart&&p.append(" ")}),t.absolute&&Y(p,{height:E.height,top:E.top}),p}),r.words||Bt(h),e.replaceChildren(h)),t.absolute&&(e.style.width="".concat(e.style.width||S,"px"),e.style.height="".concat(u,"px"),K(s).forEach(function(A){var p=V(A),E=p.isLine,b=p.top,W=p.left,N=p.width,O=p.height,L=V(A.parentElement),G=!E&&L.isLine;A.style.top="".concat(G?b-L.top:b,"px"),A.style.left=E?"".concat(d.left,"px"):"".concat(W-(G?d.left:0),"px"),A.style.height="".concat(O,"px"),A.style.width=E?"".concat(d.width,"px"):"".concat(N,"px"),A.style.position="absolute"})),f&&(_?f.insertBefore(e,_):f.appendChild(e)),y}var Z=X(pt,{}),jt=function(){bt(e,null,[{key:"clearData",value:function(){Se()}},{key:"setDefaults",value:function(i){return Z=X(Z,tt(i)),pt}},{key:"revert",value:function(i){xt(i).forEach(function(r){var n=V(r),s=n.isSplit,o=n.html,a=n.cssWidth,l=n.cssHeight;s&&(r.innerHTML=o,r.style.width=a||"",r.style.height=l||"",Lt(r))})}},{key:"create",value:function(i,r){return new e(i,r)}},{key:"data",get:function(){return U}},{key:"defaults",get:function(){return Z},set:function(i){Z=X(Z,tt(i))}}]);function e(t,i){ne(this,e),this.isSplit=!1,this.settings=X(Z,tt(i)),this.elements=xt(t),this.split()}return bt(e,[{key:"split",value:function(i){var r=this;this.revert(),this.elements.forEach(function(o){Y(o,"html",o.innerHTML)}),this.lines=[],this.words=[],this.chars=[];var n=[window.pageXOffset,window.pageYOffset];i!==void 0&&(this.settings=X(this.settings,tt(i)));var s=dt(this.settings.types);s.none||(this.elements.forEach(function(o){Y(o,"isRoot",!0);var a=Ht(o,r.settings),l=a.words,u=a.chars;r.words=[].concat(z(r.words),z(l)),r.chars=[].concat(z(r.chars),z(u))}),this.elements.forEach(function(o){if(s.lines||r.settings.absolute){var a=Pe(o,r.settings,n);r.lines=[].concat(z(r.lines),z(a))}}),this.isSplit=!0,window.scrollTo(n[0],n[1]),Te())}},{key:"revert",value:function(){this.isSplit&&(this.lines=null,this.words=null,this.chars=null,this.isSplit=!1),e.revert(this.elements)}}]),e}();var m=function(e,t){let i=typeof e;return typeof t!="string"||t.trim()===""?e:t==="true"&&i==="boolean"?!0:t==="false"&&i==="boolean"?!1:isNaN(t)&&i==="string"?t:!isNaN(t)&&i==="number"?+t:e},R=function(e,t,i){let r=e.hasAttribute(t),n=m(i,e.getAttribute(t));if(r)return n},rt=function(e,t="lines, words"){if(e)return typeSplit=new jt(e,{types:t}),typeSplit},H=function(e,t,i){if(!e||!t||!i){console.error(`GSAP checkBreakpoints Error in ${t}`);return}let{isMobile:r,isTablet:n,isDesktop:s,reduceMotion:o}=i.conditions;if(r===void 0||n===void 0||s===void 0){console.error("GSAP Match Media Conditions Not Defined");return}let a=`data-ix-${t}-desktop`,l=`data-ix-${t}-tablet`,u=`data-ix-${t}-mobile`,S=`data-ix-${t}-run`;return runAll=m(!0,e.getAttribute(S)),runMobile=m(!0,e.getAttribute(u)),runTablet=m(!0,e.getAttribute(l)),runDesktop=m(!0,e.getAttribute(a)),!(runAll===!1||runMobile===!1&&r||runTablet===!1&&n||runDesktop===!1&&s)},J=function(e){let t=e,i={left:"polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",right:"polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",top:"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",bottom:"polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",full:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"};return e==="left"&&(t=i.left),e==="right"&&(t=i.right),e==="top"&&(t=i.top),e==="bottom"&&(t=i.bottom),e==="full"&&(t=i.full),t};var Gt=function(e){let t="clickactive",i='[data-ix-clickactive="wrap"]',r='[data-ix-clickactive="trigger"]',n='[data-ix-clickactive="target"]',s="data-ix-clickactive-id",o="data-ix-clickactive-class",a="data-ix-clickactive-start-active",l="data-ix-clickactive-first-active",u="data-ix-clickactive-one-active",S="data-ix-clickactive-keep-one-active",y="is-active",f=function(h){let T=Array.from(h.querySelectorAll(r)),w=y,M=!1,C=!1,A=!1;if(h!==document&&(w=m(y,h.getAttribute(o)),M=m(!1,h.getAttribute(l)),C=m(!1,h.getAttribute(u)),A=m(!1,h.getAttribute(S)),H(h,t,e)===!1))return;let p=function(b,W=!0){if(!b)return;let N=!0,O=b.getAttribute(s),L=h.querySelector(`${n}[${s}="${O}"]`);(!O||!L)&&(N=!1),W?(b.classList.add(w),N&&L.classList.add(w)):(b.classList.remove(w),N&&L.classList.remove(w))};T.forEach(b=>{if(!b)return;m(!1,b.getAttribute(a))?p(b):p(b,!1),b.addEventListener("click",function(N){let O=b.classList.contains(y);O||(C&&T.forEach(L=>{L===b?p(L):p(L,!1)}),C||p(b)),O&&!A&&p(b,!1),O&&A&&T.filter(function(G){return G.classList.contains(w)}).length>1&&p(b,!1),gsap.ScrollTrigger!==void 0&&setTimeout(()=>{ScrollTrigger.refresh()},800)})});let E=T[0];M&&p(E)},_=gsap.utils.toArray(i);_.length===0||_===void 0?f(document):_.forEach(h=>{f(h)})};var $t=function(e){let t="hoveractive",i='[data-ix-hoveractive="wrap"]',r='[data-ix-hoveractive="item"]',n='[data-ix-hoveractive="target"]',s="data-ix-hoveractive-id",o="data-ix-hoveractive-class",a="data-ix-hoveractive-keep-active",l="is-active",u=function(d){let y=[...d.querySelectorAll(r)],f=m(l,d.getAttribute(o)),_=m(!1,d.getAttribute(a));function h(T,w=!0){let M=!0,C=T.getAttribute(s),A=d.querySelector(`${n}[${s}="${C}"]`);(!C||!A)&&(M=!1),w?(T.classList.add(f),M&&A.classList.add(f)):(T.classList.remove(f),M&&A.classList.remove(f))}y.forEach(T=>{T.addEventListener("mouseover",function(w){y.forEach(M=>{M===T?h(T,!0):h(M,!1)})}),T.addEventListener("mouseleave",function(w){_||h(T,!1)})})},S=[...document.querySelectorAll(i)];if(S.length>=0)S.forEach(d=>{H(d,t,e)!==!1&&u(d)});else{let d=document.querySelector("body");u(d)}};function qt(e,t,i){return Math.max(e,Math.min(t,i))}var gt=class{advance(t){if(!this.isRunning)return;let i=!1;if(this.lerp)this.value=(r=this.value,n=this.to,s=60*this.lerp,o=t,function(a,l,u){return(1-u)*a+u*l}(r,n,1-Math.exp(-s*o))),Math.round(this.value)===this.to&&(this.value=this.to,i=!0);else{this.currentTime+=t;let a=qt(0,this.currentTime/this.duration,1);i=a>=1;let l=i?1:this.easing(a);this.value=this.from+(this.to-this.from)*l}var r,n,s,o;this.onUpdate?.(this.value,i),i&&this.stop()}stop(){this.isRunning=!1}fromTo(t,i,{lerp:r=.1,duration:n=1,easing:s=l=>l,onStart:o,onUpdate:a}){this.from=this.value=t,this.to=i,this.lerp=r,this.duration=n,this.easing=s,this.currentTime=0,this.isRunning=!0,o?.(),this.onUpdate=a}},vt=class{constructor({wrapper:t,content:i,autoResize:r=!0,debounce:n=250}={}){q(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});q(this,"onWrapperResize",()=>{this.wrapper===window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});q(this,"onContentResize",()=>{this.wrapper===window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=t,this.content=i,r&&(this.debouncedResize=function(s,o){let a;return function(){let l=arguments,u=this;clearTimeout(a),a=setTimeout(function(){s.apply(u,l)},o)}}(this.resize,n),this.wrapper===window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},st=class{constructor(){this.events={}}emit(t,...i){let r=this.events[t]||[];for(let n=0,s=r.length;n<s;n++)r[n](...i)}on(t,i){return this.events[t]?.push(i)||(this.events[t]=[i]),()=>{this.events[t]=this.events[t]?.filter(r=>i!==r)}}off(t,i){this.events[t]=this.events[t]?.filter(r=>i!==r)}destroy(){this.events={}}},Ut=100/6,mt=class{constructor(t,{wheelMultiplier:i=1,touchMultiplier:r=1}){q(this,"onTouchStart",t=>{let{clientX:i,clientY:r}=t.targetTouches?t.targetTouches[0]:t;this.touchStart.x=i,this.touchStart.y=r,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:t})});q(this,"onTouchMove",t=>{let{clientX:i,clientY:r}=t.targetTouches?t.targetTouches[0]:t,n=-(i-this.touchStart.x)*this.touchMultiplier,s=-(r-this.touchStart.y)*this.touchMultiplier;this.touchStart.x=i,this.touchStart.y=r,this.lastDelta={x:n,y:s},this.emitter.emit("scroll",{deltaX:n,deltaY:s,event:t})});q(this,"onTouchEnd",t=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:t})});q(this,"onWheel",t=>{let{deltaX:i,deltaY:r,deltaMode:n}=t;i*=n===1?Ut:n===2?this.windowWidth:1,r*=n===1?Ut:n===2?this.windowHeight:1,i*=this.wheelMultiplier,r*=this.wheelMultiplier,this.emitter.emit("scroll",{deltaX:i,deltaY:r,event:t})});q(this,"onWindowResize",()=>{this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight});this.element=t,this.wheelMultiplier=i,this.touchMultiplier=r,this.touchStart={x:null,y:null},this.emitter=new st,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,{passive:!1}),this.element.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.addEventListener("touchend",this.onTouchEnd,{passive:!1})}on(t,i){return this.emitter.on(t,i)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,{passive:!1}),this.element.removeEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.removeEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.removeEventListener("touchend",this.onTouchEnd,{passive:!1})}},nt=class{constructor({wrapper:t=window,content:i=document.documentElement,wheelEventsTarget:r=t,eventsTarget:n=r,smoothWheel:s=!0,syncTouch:o=!1,syncTouchLerp:a=.075,touchInertiaMultiplier:l=35,duration:u,easing:S=C=>Math.min(1,1.001-Math.pow(2,-10*C)),lerp:d=!u&&.1,infinite:y=!1,orientation:f="vertical",gestureOrientation:_="vertical",touchMultiplier:h=1,wheelMultiplier:T=1,autoResize:w=!0,__experimental__naiveDimensions:M=!1}={}){this.__isSmooth=!1,this.__isScrolling=!1,this.__isStopped=!1,this.__isLocked=!1,this.onVirtualScroll=({deltaX:C,deltaY:A,event:p})=>{if(p.ctrlKey)return;let E=p.type.includes("touch"),b=p.type.includes("wheel");if(this.options.syncTouch&&E&&p.type==="touchstart"&&!this.isStopped&&!this.isLocked)return void this.reset();let W=C===0&&A===0,N=this.options.gestureOrientation==="vertical"&&A===0||this.options.gestureOrientation==="horizontal"&&C===0;if(W||N)return;let O=p.composedPath();if(O=O.slice(0,O.indexOf(this.rootElement)),O.find(B=>{var c,g,v,k,P;return((c=B.hasAttribute)===null||c===void 0?void 0:c.call(B,"data-lenis-prevent"))||E&&((g=B.hasAttribute)===null||g===void 0?void 0:g.call(B,"data-lenis-prevent-touch"))||b&&((v=B.hasAttribute)===null||v===void 0?void 0:v.call(B,"data-lenis-prevent-wheel"))||((k=B.classList)===null||k===void 0?void 0:k.contains("lenis"))&&!(!((P=B.classList)===null||P===void 0)&&P.contains("lenis-stopped"))}))return;if(this.isStopped||this.isLocked)return void p.preventDefault();if(this.isSmooth=this.options.syncTouch&&E||this.options.smoothWheel&&b,!this.isSmooth)return this.isScrolling=!1,void this.animate.stop();p.preventDefault();let L=A;this.options.gestureOrientation==="both"?L=Math.abs(A)>Math.abs(C)?A:C:this.options.gestureOrientation==="horizontal"&&(L=C);let G=E&&this.options.syncTouch,F=E&&p.type==="touchend"&&Math.abs(L)>5;F&&(L=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+L,Object.assign({programmatic:!1},G?{lerp:F?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}))},this.onNativeScroll=()=>{if(!this.__preventNextScrollEvent&&!this.isScrolling){let C=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.direction=Math.sign(this.animatedScroll-C),this.emit()}},window.lenisVersion="1.0.42",t!==document.documentElement&&t!==document.body||(t=window),this.options={wrapper:t,content:i,wheelEventsTarget:r,eventsTarget:n,smoothWheel:s,syncTouch:o,syncTouchLerp:a,touchInertiaMultiplier:l,duration:u,easing:S,lerp:d,infinite:y,gestureOrientation:_,orientation:f,touchMultiplier:h,wheelMultiplier:T,autoResize:w,__experimental__naiveDimensions:M},this.animate=new gt,this.emitter=new st,this.dimensions=new vt({wrapper:t,content:i,autoResize:w}),this.toggleClassName("lenis",!0),this.velocity=0,this.isLocked=!1,this.isStopped=!1,this.isSmooth=o||s,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll=new mt(n,{touchMultiplier:h,wheelMultiplier:T}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.toggleClassName("lenis",!1),this.toggleClassName("lenis-smooth",!1),this.toggleClassName("lenis-scrolling",!1),this.toggleClassName("lenis-stopped",!1),this.toggleClassName("lenis-locked",!1)}on(t,i){return this.emitter.on(t,i)}off(t,i){return this.emitter.off(t,i)}setScroll(t){this.isHorizontal?this.rootElement.scrollLeft=t:this.rootElement.scrollTop=t}resize(){this.dimensions.resize()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.isStopped=!1,this.reset())}stop(){this.isStopped||(this.isStopped=!0,this.animate.stop(),this.reset())}raf(t){let i=t-(this.time||t);this.time=t,this.animate.advance(.001*i)}scrollTo(t,{offset:i=0,immediate:r=!1,lock:n=!1,duration:s=this.options.duration,easing:o=this.options.easing,lerp:a=!s&&this.options.lerp,onComplete:l,force:u=!1,programmatic:S=!0}={}){if(!this.isStopped&&!this.isLocked||u){if(["top","left","start"].includes(t))t=0;else if(["bottom","right","end"].includes(t))t=this.limit;else{let d;if(typeof t=="string"?d=document.querySelector(t):t?.nodeType&&(d=t),d){if(this.options.wrapper!==window){let f=this.options.wrapper.getBoundingClientRect();i-=this.isHorizontal?f.left:f.top}let y=d.getBoundingClientRect();t=(this.isHorizontal?y.left:y.top)+this.animatedScroll}}if(typeof t=="number"){if(t+=i,t=Math.round(t),this.options.infinite?S&&(this.targetScroll=this.animatedScroll=this.scroll):t=qt(0,t,this.limit),r)return this.animatedScroll=this.targetScroll=t,this.setScroll(this.scroll),this.reset(),void(l==null||l(this));if(!S){if(t===this.targetScroll)return;this.targetScroll=t}this.animate.fromTo(this.animatedScroll,t,{duration:s,easing:o,lerp:a,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling=!0},onUpdate:(d,y)=>{this.isScrolling=!0,this.velocity=d-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=d,this.setScroll(this.scroll),S&&(this.targetScroll=d),y||this.emit(),y&&(this.reset(),this.emit(),l?.(this),this.__preventNextScrollEvent=!0,requestAnimationFrame(()=>{delete this.__preventNextScrollEvent}))}})}}}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?(t=this.animatedScroll,i=this.limit,(t%i+i)%i):this.animatedScroll;var t,i}get progress(){return this.limit===0?1:this.scroll/this.limit}get isSmooth(){return this.__isSmooth}set isSmooth(t){this.__isSmooth!==t&&(this.__isSmooth=t,this.toggleClassName("lenis-smooth",t))}get isScrolling(){return this.__isScrolling}set isScrolling(t){this.__isScrolling!==t&&(this.__isScrolling=t,this.toggleClassName("lenis-scrolling",t))}get isStopped(){return this.__isStopped}set isStopped(t){this.__isStopped!==t&&(this.__isStopped=t,this.toggleClassName("lenis-stopped",t))}get isLocked(){return this.__isLocked}set isLocked(t){this.__isLocked!==t&&(this.__isLocked=t,this.toggleClassName("lenis-locked",t))}get className(){let t="lenis";return this.isStopped&&(t+=" lenis-stopped"),this.isLocked&&(t+=" lenis-locked"),this.isScrolling&&(t+=" lenis-scrolling"),this.isSmooth&&(t+=" lenis-smooth"),t}toggleClassName(t,i){this.rootElement.classList.toggle(t,i),this.emitter.emit("className change",this)}};var Yt=function(){let e=new nt({duration:1,easing:o=>o===1?1:1-Math.pow(2,-10*o),touchMultiplier:1.5});function t(o){e.raf(o),requestAnimationFrame(t)}requestAnimationFrame(t),e.on("scroll",()=>{ScrollTrigger&&ScrollTrigger.update()}),gsap.ticker.add(o=>{e.raf(o*1e3)}),gsap.ticker.lagSmoothing(0);function i(){let o=document.querySelectorAll("[scroll-to]");o?.forEach(a=>{let l=a.getAttribute("scroll-to"),u=document.getElementById(l);u&&a.addEventListener("click",S=>{e.scrollTo(u,{duration:1.85,easing:d=>d===1?1:1-Math.pow(2,-10*d)})})})}i();function r(){let o=document.querySelectorAll('[scroll="stop"]');o?.forEach(a=>{a.addEventListener("click",l=>{e.stop()})})}r();function n(){let o=document.querySelectorAll('[scroll="start"]');o?.forEach(a=>{a.addEventListener("click",l=>{e.start()})})}n();function s(){let o=document.querySelectorAll('[scroll="toggle"]');o?.forEach(a=>{let l=!1;a.addEventListener("click",u=>{l=!l,l?e.stop():e.start()})})}return s(),e};var Ft=function(e){let t="load",i="data-ix-load",r="heading",n="item",s="image",o="stagger",a="data-ix-load-position",l="<0.2",u=gsap.utils.toArray(`[${i}]`);if(u.length===0)return;let S=gsap.timeline({paused:!0,defaults:{ease:"power1.out",duration:.8}}),d=function(h){h.classList.contains("w-richtext")&&(h.style.opacity="1",h=h.firstChild);let T=rt(h);if(!T)return;let w=m("<",h.getAttribute(a));S.set(h,{opacity:1}),S.fromTo(T.words,{opacity:0,y:"50%",rotateX:45},{opacity:1,y:"0%",rotateX:0,stagger:{each:.1,from:"left"}},w)},y=function(h){let T=m(l,h.getAttribute(a));S.fromTo(h,{opacity:0,scale:.7},{opacity:1,scale:1},T)},f=function(h){let T=m(l,h.getAttribute(a));S.fromTo(h,{opacity:0,y:"2rem"},{opacity:1,y:"0rem"},T)},_=function(h){if(!h)return;let T=gsap.utils.toArray(h.children);T.length!==0&&T.forEach((w,M)=>{M===0&&(h.style.opacity=1),f(w)})};return u.forEach(h=>{if(!h||H(h,t,e)===!1)return;let w=h.getAttribute(i);w===r&&d(h),w===s&&y(h),w===n&&f(h),w===o&&_(h)}),S.play(0),S};var Xt=function(e){let t="typetext",i='[data-ix-typetext="wrap"]',r='[data-ix-typetext="item"]',n=[...document.querySelectorAll(i)],s=[...document.querySelectorAll(r)];if(s.length===0)return;let o=gsap.timeline({paused:!0,defaults:{duration:1,ease:"power2.out"}});ScrollTrigger.create({trigger:s[0],start:"center 90%",end:"bottom top",onEnter:a=>o.play()}),s.forEach(a=>{if(H(a,t,e)===!1)return;let u=a.textContent;o.fromTo(a,{text:"  "},{text:u},"-=.5")})};var Vt=function(e){let t="parallax",i='[data-ix-parallax="wrap"]',r='[data-ix-parallax="section"]',n='[data-ix-parallax="trigger"]',s="data-ix-parallax-type",o="data-ix-parallax-amount";gsap.utils.toArray(i).forEach(l=>{let u=l.querySelector(r),S=l.querySelector(n);if(!l||!u||!S)return;let d="uncover";if(d=m("uncover",l.getAttribute(s)),moveAmount=m(50,l.getAttribute(o)),H(l,t,e)===!1)return;let f={scrub:!0,start:"top bottom",end:"top top",moveStart:"-100vh",moveEnd:"0vh"};d==="cover"&&(f.start="bottom bottom",f.end="bottom top",f.moveStart="0vh",f.moveEnd="100vh"),d==="parallax"&&(f.moveStart=`-${moveAmount}vh`,f.moveEnd="0vh"),gsap.timeline({scrollTrigger:{trigger:S,markers:!1,start:f.start,end:f.end,scrub:f.scrub},defaults:{duration:1,ease:"none"},onStart:()=>{ScrollTrigger.refresh()}}).fromTo(u,{y:f.moveStart},{y:f.moveEnd})})};var Kt=function(e){let t="scrollin",i="data-ix-scrollin",r="heading",n="item",s="container",o="stagger",a="rich-text",l="image-wrap",u="image",S="line",d="data-ix-scrollin-toggle-actions",y="data-ix-scrollin-scrub",f="data-ix-scrollin-start",_="data-ix-scrollin-end",h="data-ix-scrollin-direction",T="data-ix-scrollin-stagger",A="power1.out",p=function(c){let g={scrub:!1,toggleActions:"play none none none",start:"top 90%",end:"top 75%"};return g.toggleActions=m(g.toggleActions,c.getAttribute(d)),g.scrub=m(g.scrub,c.getAttribute(y)),g.start=m(g.start,c.getAttribute(f)),g.end=m(g.end,c.getAttribute(_)),gsap.timeline({defaults:{duration:.6,ease:A},scrollTrigger:{trigger:c,start:g.start,end:g.end,toggleActions:g.toggleActions,scrub:g.scrub}})},E=function(c,g,v={}){let k={opacity:0,y:"2rem"},P={opacity:1,y:"0rem"};return v.stagger&&(P.stagger={each:v.stagger,from:"start"}),v.stagger==="small"&&(P.stagger={each:.1,from:"start"}),v.stagger==="large"&&(P.stagger={each:.3,from:"start"}),g.fromTo(c,k,P)},b=function(c){c.classList.contains("w-richtext")&&(c=c.firstChild);let g=rt(c);if(!g)return;let v=p(c),k=E(g.words,v,{stagger:"small"});ScrollTrigger.create({trigger:c,start:"top bottom",end:"bottom top",onLeave:P=>g.revert()})},W=function(c){if(c)if(c.classList.contains("w-richtext")){let g=gsap.utils.toArray(c.children);if(g.length===0)return;g.forEach(v=>{let k=p(v),P=E(v,k)})}else{let g=p(c),v=E(c,g)}},N=function(c){if(!c)return;let g=c.firstChild,v=p(c);v.fromTo(g,{scale:1.2},{scale:1,duration:1}),v.fromTo(c,{scale:.9},{scale:1,duration:1},"<")},O=function(c){if(!c)return;let g=m("left",c.getAttribute(h)),v=J(g),k=J("full");p(c).fromTo(c,{clipPath:v},{clipPath:k})},L=function(c){if(!c)return;let g=gsap.utils.toArray(c.children);g.length!==0&&g.forEach(v=>{let k=p(v),P=E(v,k)})},G=function(c){if(!c)return;let g=m(.3,c.getAttribute(T)),v=gsap.utils.toArray(c.children);if(v.length===0)return;let k=p(c),P=E(v,k,{stagger:g})},F=function(c){if(!c)return;let g=gsap.utils.toArray(c.children);g.length!==0&&g.forEach(v=>{let k=v.tagName;["H1","H2","H3","H4","H5","H6"].includes(k)&&b(v),k==="FIGURE"?N(v):W(v)})};gsap.utils.toArray(`[${i}]`).forEach(c=>{if(!c||H(c,t,e)===!1)return;let v=c.getAttribute(i);v===r&&b(c),v===n&&W(c),v===u&&N(c),v===S&&O(c),v===s&&L(c),v===o&&G(c),v===a&&F(c)})};var Zt=function(e){let t="scrolling",i='[data-ix-scrolling="wrap"]',r='[data-ix-scrolling="trigger"]',n='[data-ix-scrolling="layer"]',s="data-ix-scrolling-start",o="data-ix-scrolling-end",a="data-ix-scrolling-start-tablet",l="data-ix-scrolling-end-tablet",u="data-ix-scrolling-start-mobile",S="data-ix-scrolling-end-mobile",d="data-ix-scrolling-scrub",y="data-ix-scrolling-position",f="data-ix-scrolling-ease",_="data-ix-scrolling-x-start",h="data-ix-scrolling-x-end",T="data-ix-scrolling-y-start",w="data-ix-scrolling-y-end",M="data-ix-scrolling-scale-start",C="data-ix-scrolling-scale-end",A="data-ix-scrolling-width-start",p="data-ix-scrolling-width-end",E="data-ix-scrolling-height-start",b="data-ix-scrolling-height-end",W="data-ix-scrolling-rotate-x-start",N="data-ix-scrolling-rotate-x-end",O="data-ix-scrolling-rotate-y-start",L="data-ix-scrolling-rotate-y-end",G="data-ix-scrolling-rotate-z-start",F="data-ix-scrolling-rotate-z-end",B="data-ix-scrolling-opacity-start",c="data-ix-scrolling-opacity-end",g="data-ix-scrolling-radius-start",v="data-ix-scrolling-radius-end",k="data-ix-scrolling-clip-start",P="data-ix-scrolling-clip-end";gsap.utils.toArray(i).forEach(D=>{let St=D.querySelectorAll(n);if(!D||St.length===0)return;let ot=D.querySelector(r);if(ot||(ot=D),H(D,t,e)===!1)return;let{isMobile:Tt,isTablet:yt,isDesktop:He,reduceMotion:Be}=e.conditions,I={scrub:.5,start:"top bottom",end:"bottom top",ease:"none"};I.start=m(I.start,D.getAttribute(s)),I.end=m(I.end,D.getAttribute(o)),I.scrub=m(I.scrub,D.getAttribute(d)),I.ease=m(I.ease,D.getAttribute(f)),yt&&D.getAttribute(a)&&(I.start=m(I.start,D.getAttribute(a))),yt&&D.getAttribute(l)&&(I.start=m(I.start,D.getAttribute(l))),Tt&&D.getAttribute(u)&&(I.start=m(I.start,D.getAttribute(u))),Tt&&D.getAttribute(S)&&(I.start=m(I.start,D.getAttribute(S)));let Qt=gsap.timeline({scrollTrigger:{trigger:ot,start:I.start,end:I.end,scrub:I.scrub,markers:!1},defaults:{duration:1,ease:I.ease}});St.forEach(x=>{if(!x)return;let $={},j={};$.x=R(x,_,"0%"),j.x=R(x,h,"0%"),$.y=R(x,T,"0%"),j.y=R(x,w,"0%"),$.scale=R(x,M,1),j.scale=R(x,C,1),$.width=R(x,A,"0%"),j.width=R(x,p,"0%"),$.height=R(x,E,"0%"),j.height=R(x,b,"0%"),$.rotateX=R(x,W,0),j.rotateX=R(x,N,0),$.rotateY=R(x,O,0),j.rotateY=R(x,L,0),$.rotateZ=R(x,G,0),j.rotateZ=R(x,F,0),$.opacity=R(x,B,0),j.opacity=R(x,c,0),$.borderRadius=R(x,g,"string"),j.borderRadius=R(x,v,"string");let te=R(x,k,"left"),ee=R(x,P,"full");$.clipPath=J(te),j.clipPath=J(ee);let ie=m("<",x.getAttribute(y));j.ease=m(x,f,"none");let je=Qt.fromTo(x,$,j,ie)})})};document.addEventListener("DOMContentLoaded",function(){gsap.ScrollTrigger!==void 0&&gsap.registerPlugin(ScrollTrigger),gsap.Flip!==void 0&&gsap.registerPlugin(Flip),gsap.TextPlugin!==void 0&&gsap.registerPlugin(TextPlugin);let e,t=function(){let n="typesample",o=[...document.querySelectorAll('[data-ix-typesample="item"]')];o.length!==0&&o.forEach(a=>{let l=a.children;gsap.timeline({paused:!0,scrollTrigger:{trigger:a,start:"center 90%",end:"bottom top",toggleActions:"play none none none"},defaults:{duration:1,ease:"power2.inOut"}}).fromTo(l,{opacity:0},{opacity:1,stagger:{each:.02,from:"start"}})})};(function(){gsap.matchMedia().add({isMobile:"(max-width: 767px)",isTablet:"(min-width: 768px)  and (max-width: 991px)",isDesktop:"(min-width: 992px)",reduceMotion:"(prefers-reduced-motion: reduce)"},s=>{let{isMobile:o,isTablet:a,isDesktop:l,reduceMotion:u}=s.conditions;e=Yt(),Gt(s),$t(s),Ft(s),u||(Kt(s),Zt(s),Vt(s),Xt(s),t())})})(),function(){let n="[data-ix-reset]",s="data-ix-reset-time";document.querySelectorAll(n).forEach(function(a){a.addEventListener("click",function(l){if(ScrollTrigger.refresh(),a.hasAttribute(s)){let u=m(1e3,a.getAttribute(s));setTimeout(()=>{ScrollTrigger.refresh()},u)}})})}()});})();
