import{_ as s,o as n,c as a,a2 as p}from"./chunks/framework.DkMK-_fX.js";const h=JSON.parse('{"title":"vue transition","description":"","frontmatter":{},"headers":[],"relativePath":"大前端/Vue2/vue transition.md","filePath":"大前端/Vue2/vue transition.md","lastUpdated":1728700067000}'),e={name:"大前端/Vue2/vue transition.md"},l=p(`<h1 id="vue-transition" tabindex="-1">vue transition <a class="header-anchor" href="#vue-transition" aria-label="Permalink to &quot;vue transition&quot;">​</a></h1><p>Vue 提供了 transition 的封装组件,在下列情形中，可以给任何元素和组件添加进入/离开过渡:</p><ul><li>在 CSS 过渡和动画中自动应用 class</li><li>可以配合使用第三方 CSS 动画库，如 Animate.css</li><li>在过渡钩子函数中使用 JavaScript 直接操作 DOM</li><li>可以配合使用第三方 JavaScript 动画库，如 Velocity.js</li></ul><p>上述为官网原话，为了不成官网的搬用工，我就按自己的思路整理就记录，其实简单理解就是进入和离开的时候他会在相应的时间给你加上 css 的动画。</p><h3 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;div id=&quot;demo&quot;&gt;</span></span>
<span class="line"><span>  &lt;button @click=&quot;show = !show&quot;&gt;</span></span>
<span class="line"><span>    Toggle</span></span>
<span class="line"><span>  &lt;/button&gt;</span></span>
<span class="line"><span>  &lt;transition name=&quot;fade&quot;&gt;</span></span>
<span class="line"><span>    &lt;p v-if=&quot;show&quot;&gt;hello&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;/transition&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>new Vue({</span></span>
<span class="line"><span>  el: &#39;#demo&#39;,</span></span>
<span class="line"><span>  data: {</span></span>
<span class="line"><span>    show: true</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.fade-enter-active, .fade-leave-active {</span></span>
<span class="line"><span>  transition: opacity .5s;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.fade-enter, .fade-leave-to {</span></span>
<span class="line"><span>  opacity: 0;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h3 id="列表用法" tabindex="-1">列表用法 <a class="header-anchor" href="#列表用法" aria-label="Permalink to &quot;列表用法&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;transition-group tag=&quot;ul&quot; name=&quot;list&quot;&gt;</span></span>
<span class="line"><span>  &lt;li v-for=&quot;(it, i) in 10&quot; :key=&quot;i&quot;&gt;{{it}}&lt;/li&gt;</span></span>
<span class="line"><span>&lt;/transition-group&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.list-enter-active,</span></span>
<span class="line"><span>.list-leave-active {</span></span>
<span class="line"><span>  transition: all 0.5s;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.list-enter,</span></span>
<span class="line"><span>.list-leave-to {</span></span>
<span class="line"><span>  transform: translateX(100%);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="animate-css使用" tabindex="-1">Animate.css使用 <a class="header-anchor" href="#animate-css使用" aria-label="Permalink to &quot;Animate.css使用&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;transition enter-active-class=&quot;slideInUp&quot; leave-active-class=&quot;slideOutDown&quot;&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;animated&quot;&gt;</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/transition&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="拓展" tabindex="-1">拓展 <a class="header-anchor" href="#拓展" aria-label="Permalink to &quot;拓展&quot;">​</a></h3><p>vue组件切换动画库 transx</p><h3 id="路由切换动画" tabindex="-1">路由切换动画 <a class="header-anchor" href="#路由切换动画" aria-label="Permalink to &quot;路由切换动画&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;transition :name=&quot;transitionName&quot;&gt;</span></span>
<span class="line"><span>  &lt;router-view&gt;&lt;/router-view&gt;</span></span>
<span class="line"><span>&lt;/transition&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>watch: {</span></span>
<span class="line"><span>  //使用watch 监听$router的变化</span></span>
<span class="line"><span>  $route(to, from) {</span></span>
<span class="line"><span>    //如果to索引大于from索引,判断为前进状态,反之则为后退状态</span></span>
<span class="line"><span>    console.log(to, &quot;to&quot;);</span></span>
<span class="line"><span>    console.log(from, &quot;from&quot;);</span></span>
<span class="line"><span>    if (to.meta.index &gt; from.meta.index) {</span></span>
<span class="line"><span>      //设置动画名称</span></span>
<span class="line"><span>      this.transitionName = &quot;slide-left&quot;;</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>      this.transitionName = &quot;slide-right&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.slide-right-enter-active, .slide-right-leave-active, .slide-left-enter-active,</span></span>
<span class="line"><span>.slide-left-leave-active {</span></span>
<span class="line"><span>  will-change: transform;</span></span>
<span class="line"><span>  transition: all 500ms;</span></span>
<span class="line"><span>  position: absolute;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.slide-right-enter {</span></span>
<span class="line"><span>  opacity: 0;</span></span>
<span class="line"><span>  transform: translate3d(-100%, 0, 0);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.slide-right-leave-active {</span></span>
<span class="line"><span>  opacity: 0;</span></span>
<span class="line"><span>  transform: translate3d(100%, 0, 0);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.slide-left-enter {</span></span>
<span class="line"><span>  opacity: 0;</span></span>
<span class="line"><span>  transform: translate3d(100%, 0, 0);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.slide-left-leave-active {</span></span>
<span class="line"><span>  opacity: 0;</span></span>
<span class="line"><span>  transform: translate3d(-100%, 0, 0);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 如果to索引大于from索引,使用前进的动画,反之使用后退的动画。</span></span>
<span class="line"><span>const Help = () =&gt; import(&quot;./Help.vue&quot;);</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  path: &quot;/help&quot;,</span></span>
<span class="line"><span>  name: &quot;help&quot;,</span></span>
<span class="line"><span>  component: Help,</span></span>
<span class="line"><span>  meta: {</span></span>
<span class="line"><span>    index: 8,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>const StaffCard = () =&gt; import(&quot;./StaffCard.vue&quot;);</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  path: &quot;/staff-card&quot;,</span></span>
<span class="line"><span>  name: &quot;staff-card&quot;,</span></span>
<span class="line"><span>  component: StaffCard,</span></span>
<span class="line"><span>  meta: {</span></span>
<span class="line"><span>    index: 9,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br></div></div>`,14),i=[l];function r(t,c,b,u,o,m){return n(),a("div",null,i)}const v=s(e,[["render",r]]);export{h as __pageData,v as default};
