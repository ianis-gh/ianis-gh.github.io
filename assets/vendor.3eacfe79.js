var H,u,N,x,W,B,A={},O=[],ae=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function b(e,_){for(var n in _)e[n]=_[n];return e}function z(e){var _=e.parentNode;_&&_.removeChild(e)}function pe(e,_,n){var o,l,t,i={};for(t in _)t=="key"?o=_[t]:t=="ref"?l=_[t]:i[t]=_[t];if(arguments.length>2&&(i.children=arguments.length>3?H.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(t in e.defaultProps)i[t]===void 0&&(i[t]=e.defaultProps[t]);return E(e,i,o,l,null)}function E(e,_,n,o,l){var t={type:e,props:_,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:l??++N};return l==null&&u.vnode!=null&&u.vnode(t),t}function T(e){return e.children}function P(e,_){this.props=e,this.context=_}function w(e,_){if(_==null)return e.__?w(e.__,e.__.__k.indexOf(e)+1):null;for(var n;_<e.__k.length;_++)if((n=e.__k[_])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?w(e):null}function G(e){var _,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,_=0;_<e.__k.length;_++)if((n=e.__k[_])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return G(e)}}function V(e){(!e.__d&&(e.__d=!0)&&x.push(e)&&!U.__r++||B!==u.debounceRendering)&&((B=u.debounceRendering)||W)(U)}function U(){for(var e;U.__r=x.length;)e=x.sort(function(_,n){return _.__v.__b-n.__v.__b}),x=[],e.some(function(_){var n,o,l,t,i,s;_.__d&&(i=(t=(n=_).__v).__e,(s=n.__P)&&(o=[],(l=b({},t)).__v=t.__v+1,I(s,t,l,n.__n,s.ownerSVGElement!==void 0,t.__h!=null?[i]:null,o,i??w(t),t.__h),ee(o,t),t.__e!=i&&G(t)))})}function J(e,_,n,o,l,t,i,s,f,d){var r,h,a,c,p,C,v,m=o&&o.__k||O,y=m.length;for(n.__k=[],r=0;r<_.length;r++)if((c=n.__k[r]=(c=_[r])==null||typeof c=="boolean"?null:typeof c=="string"||typeof c=="number"||typeof c=="bigint"?E(null,c,null,null,c):Array.isArray(c)?E(T,{children:c},null,null,null):c.__b>0?E(c.type,c.props,c.key,null,c.__v):c)!=null){if(c.__=n,c.__b=n.__b+1,(a=m[r])===null||a&&c.key==a.key&&c.type===a.type)m[r]=void 0;else for(h=0;h<y;h++){if((a=m[h])&&c.key==a.key&&c.type===a.type){m[h]=void 0;break}a=null}I(e,c,a=a||A,l,t,i,s,f,d),p=c.__e,(h=c.ref)&&a.ref!=h&&(v||(v=[]),a.ref&&v.push(a.ref,null,c),v.push(h,c.__c||p,c)),p!=null?(C==null&&(C=p),typeof c.type=="function"&&c.__k===a.__k?c.__d=f=Q(c,f,e):f=X(e,c,a,m,p,f),typeof n.type=="function"&&(n.__d=f)):f&&a.__e==f&&f.parentNode!=e&&(f=w(a))}for(n.__e=C,r=y;r--;)m[r]!=null&&(typeof n.type=="function"&&m[r].__e!=null&&m[r].__e==n.__d&&(n.__d=w(o,r+1)),ne(m[r],m[r]));if(v)for(r=0;r<v.length;r++)_e(v[r],v[++r],v[++r])}function Q(e,_,n){for(var o,l=e.__k,t=0;l&&t<l.length;t++)(o=l[t])&&(o.__=e,_=typeof o.type=="function"?Q(o,_,n):X(n,o,o,l,o.__e,_));return _}function X(e,_,n,o,l,t){var i,s,f;if(_.__d!==void 0)i=_.__d,_.__d=void 0;else if(n==null||l!=t||l.parentNode==null)e:if(t==null||t.parentNode!==e)e.appendChild(l),i=null;else{for(s=t,f=0;(s=s.nextSibling)&&f<o.length;f+=2)if(s==l)break e;e.insertBefore(l,t),i=t}return i!==void 0?i:l.nextSibling}function de(e,_,n,o,l){var t;for(t in n)t==="children"||t==="key"||t in _||D(e,t,null,n[t],o);for(t in _)l&&typeof _[t]!="function"||t==="children"||t==="key"||t==="value"||t==="checked"||n[t]===_[t]||D(e,t,_[t],n[t],o)}function Y(e,_,n){_[0]==="-"?e.setProperty(_,n):e[_]=n==null?"":typeof n!="number"||ae.test(_)?n:n+"px"}function D(e,_,n,o,l){var t;e:if(_==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(_ in o)n&&_ in n||Y(e.style,_,"");if(n)for(_ in n)o&&n[_]===o[_]||Y(e.style,_,n[_])}else if(_[0]==="o"&&_[1]==="n")t=_!==(_=_.replace(/Capture$/,"")),_=_.toLowerCase()in e?_.toLowerCase().slice(2):_.slice(2),e.l||(e.l={}),e.l[_+t]=n,n?o||e.addEventListener(_,t?K:Z,t):e.removeEventListener(_,t?K:Z,t);else if(_!=="dangerouslySetInnerHTML"){if(l)_=_.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(_!=="href"&&_!=="list"&&_!=="form"&&_!=="tabIndex"&&_!=="download"&&_ in e)try{e[_]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||_[0]==="a"&&_[1]==="r")?e.setAttribute(_,n):e.removeAttribute(_))}}function Z(e){this.l[e.type+!1](u.event?u.event(e):e)}function K(e){this.l[e.type+!0](u.event?u.event(e):e)}function I(e,_,n,o,l,t,i,s,f){var d,r,h,a,c,p,C,v,m,y,S,k=_.type;if(_.constructor!==void 0)return null;n.__h!=null&&(f=n.__h,s=_.__e=n.__e,_.__h=null,t=[s]),(d=u.__b)&&d(_);try{e:if(typeof k=="function"){if(v=_.props,m=(d=k.contextType)&&o[d.__c],y=d?m?m.props.value:d.__:o,n.__c?C=(r=_.__c=n.__c).__=r.__E:("prototype"in k&&k.prototype.render?_.__c=r=new k(v,y):(_.__c=r=new P(v,y),r.constructor=k,r.render=ve),m&&m.sub(r),r.props=v,r.state||(r.state={}),r.context=y,r.__n=o,h=r.__d=!0,r.__h=[]),r.__s==null&&(r.__s=r.state),k.getDerivedStateFromProps!=null&&(r.__s==r.state&&(r.__s=b({},r.__s)),b(r.__s,k.getDerivedStateFromProps(v,r.__s))),a=r.props,c=r.state,h)k.getDerivedStateFromProps==null&&r.componentWillMount!=null&&r.componentWillMount(),r.componentDidMount!=null&&r.__h.push(r.componentDidMount);else{if(k.getDerivedStateFromProps==null&&v!==a&&r.componentWillReceiveProps!=null&&r.componentWillReceiveProps(v,y),!r.__e&&r.shouldComponentUpdate!=null&&r.shouldComponentUpdate(v,r.__s,y)===!1||_.__v===n.__v){r.props=v,r.state=r.__s,_.__v!==n.__v&&(r.__d=!1),r.__v=_,_.__e=n.__e,_.__k=n.__k,_.__k.forEach(function($){$&&($.__=_)}),r.__h.length&&i.push(r);break e}r.componentWillUpdate!=null&&r.componentWillUpdate(v,r.__s,y),r.componentDidUpdate!=null&&r.__h.push(function(){r.componentDidUpdate(a,c,p)})}r.context=y,r.props=v,r.state=r.__s,(d=u.__r)&&d(_),r.__d=!1,r.__v=_,r.__P=e,d=r.render(r.props,r.state,r.context),r.state=r.__s,r.getChildContext!=null&&(o=b(b({},o),r.getChildContext())),h||r.getSnapshotBeforeUpdate==null||(p=r.getSnapshotBeforeUpdate(a,c)),S=d!=null&&d.type===T&&d.key==null?d.props.children:d,J(e,Array.isArray(S)?S:[S],_,n,o,l,t,i,s,f),r.base=_.__e,_.__h=null,r.__h.length&&i.push(r),C&&(r.__E=r.__=null),r.__e=!1}else t==null&&_.__v===n.__v?(_.__k=n.__k,_.__e=n.__e):_.__e=he(n.__e,_,n,o,l,t,i,f);(d=u.diffed)&&d(_)}catch($){_.__v=null,(f||t!=null)&&(_.__e=s,_.__h=!!f,t[t.indexOf(s)]=null),u.__e($,_,n)}}function ee(e,_){u.__c&&u.__c(_,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(o){o.call(n)})}catch(o){u.__e(o,n.__v)}})}function he(e,_,n,o,l,t,i,s){var f,d,r,h=n.props,a=_.props,c=_.type,p=0;if(c==="svg"&&(l=!0),t!=null){for(;p<t.length;p++)if((f=t[p])&&"setAttribute"in f==!!c&&(c?f.localName===c:f.nodeType===3)){e=f,t[p]=null;break}}if(e==null){if(c===null)return document.createTextNode(a);e=l?document.createElementNS("http://www.w3.org/2000/svg",c):document.createElement(c,a.is&&a),t=null,s=!1}if(c===null)h===a||s&&e.data===a||(e.data=a);else{if(t=t&&H.call(e.childNodes),d=(h=n.props||A).dangerouslySetInnerHTML,r=a.dangerouslySetInnerHTML,!s){if(t!=null)for(h={},p=0;p<e.attributes.length;p++)h[e.attributes[p].name]=e.attributes[p].value;(r||d)&&(r&&(d&&r.__html==d.__html||r.__html===e.innerHTML)||(e.innerHTML=r&&r.__html||""))}if(de(e,a,h,l,s),r)_.__k=[];else if(p=_.props.children,J(e,Array.isArray(p)?p:[p],_,n,o,l&&c!=="foreignObject",t,i,t?t[0]:n.__k&&w(n,0),s),t!=null)for(p=t.length;p--;)t[p]!=null&&z(t[p]);s||("value"in a&&(p=a.value)!==void 0&&(p!==h.value||p!==e.value||c==="progress"&&!p)&&D(e,"value",p,h.value,!1),"checked"in a&&(p=a.checked)!==void 0&&p!==e.checked&&D(e,"checked",p,h.checked,!1))}return e}function _e(e,_,n){try{typeof e=="function"?e(_):e.current=_}catch(o){u.__e(o,n)}}function ne(e,_,n){var o,l;if(u.unmount&&u.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||_e(o,null,_)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(t){u.__e(t,_)}o.base=o.__P=null}if(o=e.__k)for(l=0;l<o.length;l++)o[l]&&ne(o[l],_,typeof e.type!="function");n||e.__e==null||z(e.__e),e.__e=e.__d=void 0}function ve(e,_,n){return this.constructor(e,n)}function Ce(e,_,n){var o,l,t;u.__&&u.__(e,_),l=(o=typeof n=="function")?null:n&&n.__k||_.__k,t=[],I(_,e=(!o&&n||_).__k=pe(T,null,[e]),l||A,A,_.ownerSVGElement!==void 0,!o&&n?[n]:l?null:_.firstChild?H.call(_.childNodes):null,t,!o&&n?n:l?l.__e:_.firstChild,o),ee(t,e)}H=O.slice,u={__e:function(e,_){for(var n,o,l;_=_.__;)if((n=_.__c)&&!n.__)try{if((o=n.constructor)&&o.getDerivedStateFromError!=null&&(n.setState(o.getDerivedStateFromError(e)),l=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(e),l=n.__d),l)return n.__E=n}catch(t){e=t}throw e}},N=0,P.prototype.setState=function(e,_){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=b({},this.state),typeof e=="function"&&(e=e(b({},n),this.props)),e&&b(n,e),e!=null&&this.__v&&(_&&this.__h.push(_),V(this))},P.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),V(this))},P.prototype.render=T,x=[],W=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,U.__r=0;var te,g,oe,M=0,q=[],re=u.__b,le=u.__r,ie=u.diffed,ce=u.__c,fe=u.unmount;function me(e,_){u.__h&&u.__h(g,e,M||_),M=0;var n=g.__H||(g.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function we(e){return M=1,ye(se,e)}function ye(e,_,n){var o=me(te++,2);return o.t=e,o.__c||(o.__=[n?n(_):se(void 0,_),function(l){var t=o.t(o.__[0],l);o.__[0]!==t&&(o.__=[t,o.__[1]],o.__c.setState({}))}],o.__c=g),o.__}function ge(){q.forEach(function(e){if(e.__P)try{e.__H.__h.forEach(L),e.__H.__h.forEach(R),e.__H.__h=[]}catch(_){e.__H.__h=[],u.__e(_,e.__v)}}),q=[]}u.__b=function(e){g=null,re&&re(e)},u.__r=function(e){le&&le(e),te=0;var _=(g=e.__c).__H;_&&(_.__h.forEach(L),_.__h.forEach(R),_.__h=[])},u.diffed=function(e){ie&&ie(e);var _=e.__c;_&&_.__H&&_.__H.__h.length&&(q.push(_)!==1&&oe===u.requestAnimationFrame||((oe=u.requestAnimationFrame)||function(n){var o,l=function(){clearTimeout(t),ue&&cancelAnimationFrame(o),setTimeout(n)},t=setTimeout(l,100);ue&&(o=requestAnimationFrame(l))})(ge)),g=null},u.__c=function(e,_){_.some(function(n){try{n.__h.forEach(L),n.__h=n.__h.filter(function(o){return!o.__||R(o)})}catch(o){_.some(function(l){l.__h&&(l.__h=[])}),_=[],u.__e(o,n.__v)}}),ce&&ce(e,_)},u.unmount=function(e){fe&&fe(e);var _,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(o){try{L(o)}catch(l){_=l}}),_&&u.__e(_,n.__v))};var ue=typeof requestAnimationFrame=="function";function L(e){var _=g,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),g=_}function R(e){var _=g;e.__c=e.__(),g=_}function se(e,_){return typeof _=="function"?_(e):_}/*! js-cookie v3.0.1 | MIT */function F(e){for(var _=1;_<arguments.length;_++){var n=arguments[_];for(var o in n)e[o]=n[o]}return e}var ke={read:function(e){return e[0]==='"'&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function j(e,_){function n(l,t,i){if(typeof document!="undefined"){i=F({},_,i),typeof i.expires=="number"&&(i.expires=new Date(Date.now()+i.expires*864e5)),i.expires&&(i.expires=i.expires.toUTCString()),l=encodeURIComponent(l).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var s="";for(var f in i)!i[f]||(s+="; "+f,i[f]!==!0&&(s+="="+i[f].split(";")[0]));return document.cookie=l+"="+e.write(t,l)+s}}function o(l){if(!(typeof document=="undefined"||arguments.length&&!l)){for(var t=document.cookie?document.cookie.split("; "):[],i={},s=0;s<t.length;s++){var f=t[s].split("="),d=f.slice(1).join("=");try{var r=decodeURIComponent(f[0]);if(i[r]=e.read(d,r),l===r)break}catch{}}return l?i[l]:i}}return Object.create({set:n,get:o,remove:function(l,t){n(l,"",F({},t,{expires:-1}))},withAttributes:function(l){return j(this.converter,F({},this.attributes,l))},withConverter:function(l){return j(F({},this.converter,l),this.attributes)}},{attributes:{value:Object.freeze(_)},converter:{value:Object.freeze(e)}})}var xe=j(ke,{path:"/"}),be=0;function Se(e,_,n,o,l){var t,i,s={};for(i in _)i=="ref"?t=_[i]:s[i]=_[i];var f={type:e,props:s,key:n,ref:t,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--be,__source:o,__self:l};if(typeof e=="function"&&(t=e.defaultProps))for(i in t)s[i]===void 0&&(s[i]=t[i]);return u.vnode&&u.vnode(f),f}async function $e(e,_,n){const o=async()=>{var l,t;const i=document.querySelectorAll(`astro-root[uid="${e}"]`),s=(t=(l=i[0].querySelector("astro-fragment"))==null?void 0:l.innerHTML)!=null?t:null,f=await n();for(const d of i)f(d,s)};"requestIdleCallback"in window?window.requestIdleCallback(o):setTimeout(o,200)}async function He(e,_,n){var o,l;const t=document.querySelectorAll(`astro-root[uid="${e}"]`),i=(l=(o=t[0].querySelector("astro-fragment"))==null?void 0:o.innerHTML)!=null?l:null,s=await n();for(const f of t)s(f,i)}export{Ce as S,P as _,xe as a,He as b,Se as e,we as l,$e as o,pe as v};
