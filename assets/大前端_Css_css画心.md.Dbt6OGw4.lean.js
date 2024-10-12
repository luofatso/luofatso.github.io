import{_ as l,o as a,c as p,p as r,l as i,j as n,d as c,I as t,a as b,a2 as o}from"./chunks/framework.DkMK-_fX.js";const u={},m=s=>(r("data-v-12029b16"),s=s(),i(),s),d={class:"box box-center"},h=m(()=>n("div",{class:"heart-shape"},null,-1)),_=[h];function g(s,e){return a(),p("div",d,_)}const f=l(u,[["render",g],["__scopeId","data-v-12029b16"]]),v=n("h1",{id:"css画心",tabindex:"-1"},[b("css画心 "),n("a",{class:"header-anchor",href:"#css画心","aria-label":'Permalink to "css画心"'},"​")],-1),x=o(`<ol><li>方式一</li></ol><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;div class=&quot;heart&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.heart {</span></span>
<span class="line"><span>  position: relative;</span></span>
<span class="line"><span>  width: 100px;</span></span>
<span class="line"><span>  height: 90px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.heart:before,</span></span>
<span class="line"><span>.heart:after {</span></span>
<span class="line"><span>  position: absolute;</span></span>
<span class="line"><span>  content: &quot;&quot;;</span></span>
<span class="line"><span>  left: 50px;</span></span>
<span class="line"><span>  top: 0;</span></span>
<span class="line"><span>  width: 50px;</span></span>
<span class="line"><span>  height: 80px;</span></span>
<span class="line"><span>  background-color: red;</span></span>
<span class="line"><span>  border-radius: 50px 50px 0 0;</span></span>
<span class="line"><span>  transform: rotate(-45deg);</span></span>
<span class="line"><span>  transform-origin: 0 100%;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.heart:after {</span></span>
<span class="line"><span>  left: 0;</span></span>
<span class="line"><span>  transform: rotate(45deg);</span></span>
<span class="line"><span>  transform-origin: 100% 100%;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><ol start="2"><li>方式二</li></ol><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;div class=&quot;heart-shape&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>.heart-shape {</span></span>
<span class="line"><span>  position: relative;</span></span>
<span class="line"><span>  width: 100px;</span></span>
<span class="line"><span>  height: 100px;</span></span>
<span class="line"><span>  background-color: red;</span></span>
<span class="line"><span>  transform: rotate(45deg);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &amp;::before,</span></span>
<span class="line"><span>  &amp;::after {</span></span>
<span class="line"><span>    position: absolute;</span></span>
<span class="line"><span>    left: 0;</span></span>
<span class="line"><span>    top: 0;</span></span>
<span class="line"><span>    border-radius: 100%;</span></span>
<span class="line"><span>    width: 100%;</span></span>
<span class="line"><span>    height: 100%;</span></span>
<span class="line"><span>    background-color: red;</span></span>
<span class="line"><span>    content: &quot;&quot;;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &amp;::before {</span></span>
<span class="line"><span>    transform: translateX(-50%);</span></span>
<span class="line"><span>    // background-color: #fee;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &amp;::after {</span></span>
<span class="line"><span>    transform: translateY(-50%);</span></span>
<span class="line"><span>    // background-color: #999;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div>`,4),w=JSON.parse('{"title":"css画心","description":"","frontmatter":{},"headers":[],"relativePath":"大前端/Css/css画心.md","filePath":"大前端/Css/css画心.md","lastUpdated":1728700067000}'),k={name:"大前端/Css/css画心.md"},I=c({...k,setup(s){return(e,C)=>(a(),p("div",null,[v,t(f),x]))}});export{w as __pageData,I as default};
