import{_ as s,o as n,c as a,a2 as p}from"./chunks/framework.DkMK-_fX.js";const h=JSON.parse('{"title":"vue3知识点巩固","description":"","frontmatter":{},"headers":[],"relativePath":"大前端/Vue3/vue3知识点巩固.md","filePath":"大前端/Vue3/vue3知识点巩固.md","lastUpdated":1727401527000}'),l={name:"大前端/Vue3/vue3知识点巩固.md"},e=p(`<h1 id="vue3知识点巩固" tabindex="-1">vue3知识点巩固 <a class="header-anchor" href="#vue3知识点巩固" aria-label="Permalink to &quot;vue3知识点巩固&quot;">​</a></h1><ul><li><a href="https://cn-vuejs-challenges.netlify.app/challenges.html#category=Built-ins" target="_blank" rel="noreferrer">链接地址</a></li></ul><h2 id="_1-全局css-动态css" tabindex="-1">1.全局CSS/动态CSS <a class="header-anchor" href="#_1-全局css-动态css" aria-label="Permalink to &quot;1.全局CSS/动态CSS&quot;">​</a></h2><ul><li>全局</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>:global(body) {</span></span>
<span class="line"><span>  // ...</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li>动态</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;p&gt;hello&lt;/p&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref } from &quot;vue&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const theme = ref(&quot;red&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const colors = [&quot;blue&quot;, &quot;yellow&quot;, &quot;red&quot;, &quot;green&quot;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>setInterval(() =&gt; {</span></span>
<span class="line"><span>  theme.value = colors[Math.floor(Math.random() * 4)]</span></span>
<span class="line"><span>}, 1000)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style&gt;</span></span>
<span class="line"><span>p {</span></span>
<span class="line"><span>  color: v-bind(theme);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="_2-dom传送门" tabindex="-1">2.DOM传送门 <a class="header-anchor" href="#_2-dom传送门" aria-label="Permalink to &quot;2.DOM传送门&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;!-- 将以下元素渲染成\`body\`的子元素 --&gt;</span></span>
<span class="line"><span>  &lt;teleport to=&quot;body&quot;&gt;</span></span>
<span class="line"><span>    &lt;span&gt;{{ msg }}&lt;/span&gt;</span></span>
<span class="line"><span>  &lt;/teleport&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref } from &quot;vue&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const msg = ref(&#39;Hello World&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="_3-prop验证" tabindex="-1">3.Prop验证 <a class="header-anchor" href="#_3-prop验证" aria-label="Permalink to &quot;3.Prop验证&quot;">​</a></h2><ul><li>JS版本</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;button :type=&quot;type&quot;&gt;Button&lt;/button&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>defineProps({</span></span>
<span class="line"><span>  type: {</span></span>
<span class="line"><span>    type: String,</span></span>
<span class="line"><span>    default: &#39;default&#39;,</span></span>
<span class="line"><span>    validator: value =&gt; [&#39;primary&#39;, &#39;ghost&#39;, &#39;dashed&#39;, &#39;link&#39;, &#39;text&#39;, &#39;default&#39;].includes(value)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><ul><li>TS版本</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span>withDefaults(defineProps&lt;{</span></span>
<span class="line"><span>  type?: &#39;primary&#39; | &#39;ghost&#39; | &#39;dashed&#39; | &#39;link&#39; | &#39;text&#39; | &#39;default&#39;</span></span>
<span class="line"><span>}&gt;(), {</span></span>
<span class="line"><span>  type: &#39;default&#39;</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;button&gt;Button&lt;/button&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="_4-函数式组件" tabindex="-1">4.函数式组件 <a class="header-anchor" href="#_4-函数式组件" aria-label="Permalink to &quot;4.函数式组件&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span>import { ref, h } from &quot;vue&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 实现该函数式组件 :</span></span>
<span class="line"><span> * 1. 使用\`list\`数据渲染列表元素 (ul/li)</span></span>
<span class="line"><span> * 2. 当点击列表子元素时,将其文本颜色更改为红色</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>const ListComponent = (props, { emit }) =&gt; {</span></span>
<span class="line"><span>  const { list } = props;</span></span>
<span class="line"><span>  const children = list.map((item, idx) =&gt; {</span></span>
<span class="line"><span>    return h(</span></span>
<span class="line"><span>      &quot;li&quot;,</span></span>
<span class="line"><span>      { &quot;data-id&quot;: idx, class: props[&quot;active-index&quot;] === idx ? &quot;red&quot; : &quot;&quot; },</span></span>
<span class="line"><span>      item.name</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return h(</span></span>
<span class="line"><span>    &quot;ul&quot;,</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      onClick(e) {</span></span>
<span class="line"><span>        let id = e.target.dataset.id;</span></span>
<span class="line"><span>        emit(&quot;toggle&quot;, +id);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    children</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const list = [</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    name: &quot;John&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    name: &quot;Doe&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    name: &quot;Smith&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const activeIndex = ref(0);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function toggle(index: number) {</span></span>
<span class="line"><span>  activeIndex.value = index;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;list-component :list=&quot;list&quot; :active-index=&quot;activeIndex&quot; @toggle=&quot;toggle&quot; /&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style&gt;</span></span>
<span class="line"><span>ul li.red {</span></span>
<span class="line"><span>  color: red;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br></div></div><h2 id="_5-渲染函数-h" tabindex="-1">5.渲染函数-h() <a class="header-anchor" href="#_5-渲染函数-h" aria-label="Permalink to &quot;5.渲染函数-h()&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;MyButton :disabled=&quot;false&quot; @custom-click=&quot;onClick&quot;&gt;</span></span>
<span class="line"><span>    my button</span></span>
<span class="line"><span>  &lt;/MyButton&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span>import { defineComponent, h } from &quot;vue&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const onClick = () =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;onClick&#39;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const MyButton = defineComponent({</span></span>
<span class="line"><span>  name: &#39;MyButton&#39;,</span></span>
<span class="line"><span>  props: [&#39;disabled&#39;],</span></span>
<span class="line"><span>  render() {</span></span>
<span class="line"><span>    const that = this</span></span>
<span class="line"><span>    return h(&#39;button&#39;, {</span></span>
<span class="line"><span>      disabled: that.disabled,</span></span>
<span class="line"><span>      onClick() {</span></span>
<span class="line"><span>        that.$attrs.onCustomClick()</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }, that.$slots.default())</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h2 id="_6-首字母大写" tabindex="-1">6.首字母大写 <a class="header-anchor" href="#_6-首字母大写" aria-label="Permalink to &quot;6.首字母大写&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;input type=&quot;text&quot; v-model.trim.capitalize=&quot;v&quot; /&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span>// vue3 vue-model 自定义修饰符</span></span>
<span class="line"><span>import { ref, vModelText } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>vModelText.updated = (el, { value, modifiers: { capitalize } }) =&gt; {</span></span>
<span class="line"><span>  if (capitalize &amp;&amp; value) {</span></span>
<span class="line"><span>    // console.log(value, typeof value)</span></span>
<span class="line"><span>    el.value = value[0].toUpperCase() + value.slice(1)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const v = ref(&#39;&#39;)</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>`,20),i=[e];function r(t,c,b,u,o,m){return n(),a("div",null,i)}const g=s(l,[["render",r]]);export{h as __pageData,g as default};
