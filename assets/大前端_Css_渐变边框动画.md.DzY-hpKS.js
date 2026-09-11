import{B as e}from"./chunks/BorderLine.CqFi0IYO.js";import{x as p,ag as l,o as r,l as a,t as n,u as i,s as t}from"./chunks/framework.D85dHE_g.js";const m=JSON.parse('{"title":"渐变边框动画","description":"","frontmatter":{},"headers":[],"relativePath":"大前端/Css/渐变边框动画.md","filePath":"大前端/Css/渐变边框动画.md","lastUpdated":1727401527000}'),c={name:"大前端/Css/渐变边框动画.md"},h=p({...c,setup(b){return(d,s)=>(l(),r("div",null,[s[0]||(s[0]=a("h1",{id:"渐变边框动画",tabindex:"-1"},[n("渐变边框动画 "),a("a",{class:"header-anchor",href:"#渐变边框动画","aria-label":'Permalink to "渐变边框动画"'},"​")],-1)),s[1]||(s[1]=a("p",null,"边框渐变的动画",-1)),s[2]||(s[2]=a("h2",{id:"效果",tabindex:"-1"},[n("效果 "),a("a",{class:"header-anchor",href:"#效果","aria-label":'Permalink to "效果"'},"​")],-1)),i(e),s[3]||(s[3]=t(`<h2 id="代码" tabindex="-1">代码 <a class="header-anchor" href="#代码" aria-label="Permalink to &quot;代码&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;div class=&quot;border-image-clip-path&quot;&gt;&lt;/div&gt;</span></span>
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
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>`,2))]))}});export{m as __pageData,h as default};
