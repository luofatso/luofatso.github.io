import{B as n}from"./chunks/BorderLine.Bg6Sp7IW.js";import{d as e,o as p,c as l,I as i,j as s,a,a2 as r}from"./chunks/framework.DkMK-_fX.js";const t=s("h1",{id:"渐变边框动画",tabindex:"-1"},[a("渐变边框动画 "),s("a",{class:"header-anchor",href:"#渐变边框动画","aria-label":'Permalink to "渐变边框动画"'},"​")],-1),c=s("p",null,"边框渐变的动画",-1),o=s("h2",{id:"效果",tabindex:"-1"},[a("效果 "),s("a",{class:"header-anchor",href:"#效果","aria-label":'Permalink to "效果"'},"​")],-1),d=r(`<h2 id="代码" tabindex="-1">代码 <a class="header-anchor" href="#代码" aria-label="Permalink to &quot;代码&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;div class=&quot;border-image-clip-path&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.border-image-clip-path {</span></span>
<span class="line"><span>  width: 200px;</span></span>
<span class="line"><span>  height: 100px;</span></span>
<span class="line"><span>  margin: auto;</span></span>
<span class="line"><span>  border: 10px solid;</span></span>
<span class="line"><span>  border-image: linear-gradient(45deg, gold, deeppink) 1;</span></span>
<span class="line"><span>  clip-path: inset(0px round 10px);</span></span>
<span class="line"><span>  animation: huerotate 6s infinite linear;</span></span>
<span class="line"><span>  filter: hue-rotate(360deg);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@keyframes huerotate {</span></span>
<span class="line"><span>  0% {</span></span>
<span class="line"><span>      filter: hue-rotate(0deg);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  100% {</span></span>
<span class="line"><span>      filter: hue-rorate(360deg);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>`,2),f=JSON.parse('{"title":"渐变边框动画","description":"","frontmatter":{},"headers":[],"relativePath":"大前端/Css/渐变边框动画.md","filePath":"大前端/Css/渐变边框动画.md","lastUpdated":1728700067000}'),b={name:"大前端/Css/渐变边框动画.md"},x=e({...b,setup(m){return(u,h)=>(p(),l("div",null,[t,c,o,i(n),d]))}});export{f as __pageData,x as default};
