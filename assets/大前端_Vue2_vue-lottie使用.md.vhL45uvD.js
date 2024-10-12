import{_ as s,o as n,c as a,a2 as p}from"./chunks/framework.DkMK-_fX.js";const _=JSON.parse('{"title":"vue-lottie 使用记录","description":"","frontmatter":{},"headers":[],"relativePath":"大前端/Vue2/vue-lottie使用.md","filePath":"大前端/Vue2/vue-lottie使用.md","lastUpdated":1728700067000}'),e={name:"大前端/Vue2/vue-lottie使用.md"},l=p(`<h1 id="vue-lottie-使用记录" tabindex="-1">vue-lottie 使用记录 <a class="header-anchor" href="#vue-lottie-使用记录" aria-label="Permalink to &quot;vue-lottie 使用记录&quot;">​</a></h1><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>yarn add vue-lottie</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// main.js</span></span>
<span class="line"><span>Vue.component(&#39;lottie&#39;, lottie);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 组件中使用</span></span>
<span class="line"><span>import * as animationData from &quot;../assets/lottie/love/data.json&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>animationData.assets.forEach((item) =&gt; {</span></span>
<span class="line"><span>  item.u = &quot;&quot;;</span></span>
<span class="line"><span>  if (item.w &amp;&amp; item.h) {</span></span>
<span class="line"><span>    item.p = require(\`@/assets/lottie/love/images/\${item.p}\`);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}); // 获取静态资源</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// data中</span></span>
<span class="line"><span>animation: { animationData: animationData.default },</span></span>
<span class="line"><span>anim: {},</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// methods中</span></span>
<span class="line"><span>handleAnimation(anim) {</span></span>
<span class="line"><span>  this.anim = anim;</span></span>
<span class="line"><span>  // console.log(anim); //这里可以看到 lottie 对象的全部属性</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//</span></span>
<span class="line"><span>&lt;lottie</span></span>
<span class="line"><span>  class=&quot;lottie&quot;</span></span>
<span class="line"><span>  :options=&quot;animation&quot;</span></span>
<span class="line"><span>  :height=&quot;100&quot;</span></span>
<span class="line"><span>  :width=&quot;100&quot;</span></span>
<span class="line"><span>  :style=&quot;{</span></span>
<span class="line"><span>    top: 10,</span></span>
<span class="line"><span>    left: 10,</span></span>
<span class="line"><span>  }&quot;</span></span>
<span class="line"><span>/&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div>`,2),i=[l];function t(r,c,o,u,b,m){return n(),a("div",null,i)}const h=s(e,[["render",t]]);export{_ as __pageData,h as default};
