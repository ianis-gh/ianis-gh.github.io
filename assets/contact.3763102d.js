import{o as d}from"./vendor.aea05d62.js";const m="modulepreload",i={},f="/",l=function(n,r){return!r||r.length===0?n():Promise.all(r.map(e=>{if(e=`${f}${e}`,e in i)return;i[e]=!0;const o=e.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${a}`))return;const t=document.createElement("link");if(t.rel=o?"stylesheet":m,o||(t.as="script",t.crossOrigin=""),t.href=e,document.head.appendChild(t),o)return new Promise((c,u)=>{t.addEventListener("load",c),t.addEventListener("error",u)})})).then(()=>n())};d("Z1eTONh",{value:!0},async()=>{const[{default:s},{default:n}]=await Promise.all([l(()=>import("./index.8d0589d9.js"),["assets/index.8d0589d9.js","assets/vendor.aea05d62.js"]),l(()=>import("./client.f3c3e8ee.js"),["assets/client.f3c3e8ee.js","assets/vendor.aea05d62.js"])]);return(r,e)=>n(r)(s,{},e)});