import{d as _,y,o as g,c as f,p as x,l as C,j as e,_ as Y,I as E,a as h,a2 as X}from"./chunks/framework.DkMK-_fX.js";const L=t=>(x("data-v-3cd72474"),t=t(),C(),t),q={class:"box"},w=L(()=>e("div",{id:"videoContainer"},[e("video",{id:"myVideo",src:"https://media.w3.org/2010/05/sintel/trailer.mp4",controls:"",playsinline:""})],-1)),D=[w],V=_({__name:"videoScale",setup(t){return y(()=>{const s=document.getElementById("videoContainer"),p=document.getElementById("myVideo");let c=!1,d,u,l,i,o,b;var m=s.offsetWidth,v=s.offsetHeight;s.addEventListener("mousedown",function(n){c=!0,d=n.clientX,u=n.clientY}),s.addEventListener("mousemove",function(n){if(c){o=n.clientX-d,b=n.clientY-u;var a=l-o,r=i-b;a<0&&(a=0),r<0&&(r=0),a>m&&(a=m),r>v&&(r=v),p.style.transformOrigin=a+"px "+r+"px"}}),s.addEventListener("mouseup",function(){l=l-o,i=i-b,c=!1}),s.addEventListener("mouseleave",function(){l=l-o,i=i-b,c=!1}),s.addEventListener("contextmenu",function(n){if(p.classList.toggle("video-enlarged"),n.preventDefault(),p.classList.contains("video-enlarged")){var a=s.getBoundingClientRect();l=n.clientX-a.left,i=n.clientY-a.top,p.style.transformOrigin=l+"px "+i+"px"}}),p.addEventListener("click",function(n){n.preventDefault(),n.stopPropagation()})}),(s,p)=>(g(),f("div",q,D))}}),I=Y(V,[["__scopeId","data-v-3cd72474"]]),P=e("h1",{id:"点击视频放大",tabindex:"-1"},[h("点击视频放大 "),e("a",{class:"header-anchor",href:"#点击视频放大","aria-label":'Permalink to "点击视频放大"'},"​")],-1),S=e("p",null,"给一个后端同学做的一个简单DEMO，也适用于图片等",-1),T=e("h2",{id:"亲自试试",tabindex:"-1"},[h("亲自试试 "),e("a",{class:"header-anchor",href:"#亲自试试","aria-label":'Permalink to "亲自试试"'},"​")],-1),k=e("p",null,"右键点击视频查看效果",-1),B=X("",2),N=JSON.parse('{"title":"点击视频放大","description":"","frontmatter":{},"headers":[],"relativePath":"大前端/前端其它/视频点击放大.md","filePath":"大前端/前端其它/视频点击放大.md","lastUpdated":1727401527000}'),O={name:"大前端/前端其它/视频点击放大.md"},W=Object.assign(O,{setup(t){return(s,p)=>(g(),f("div",null,[P,S,T,k,E(I),B]))}});export{N as __pageData,W as default};
