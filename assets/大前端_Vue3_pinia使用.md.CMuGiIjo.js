import{_ as n,o as s,c as a,a2 as p}from"./chunks/framework.DkMK-_fX.js";const h=JSON.parse('{"title":"pinia 快速入门","description":"","frontmatter":{},"headers":[],"relativePath":"大前端/Vue3/pinia使用.md","filePath":"大前端/Vue3/pinia使用.md","lastUpdated":1728700067000}'),e={name:"大前端/Vue3/pinia使用.md"},l=p(`<h1 id="pinia-快速入门" tabindex="-1">pinia 快速入门 <a class="header-anchor" href="#pinia-快速入门" aria-label="Permalink to &quot;pinia 快速入门&quot;">​</a></h1><p>小、快、易、直观等，更多请移步<a href="https://pinia.vuejs.org/" target="_blank" rel="noreferrer">官方文档</a></p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>yarn add pinia</span></span>
<span class="line"><span># or with npm</span></span>
<span class="line"><span>npm install pinia</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>在main.ts注册</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { createPinia } from &#39;pinia&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.use(createPinia())</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><ul><li>store 方式一</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// main.ts</span></span>
<span class="line"><span>import { defineStore } from &quot;pinia&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// defineStore 调用后返回一个函数，调用该函数获得 Store 实体</span></span>
<span class="line"><span>export default defineStore({</span></span>
<span class="line"><span>  // id: 必须的，在所有 Store 中唯一</span></span>
<span class="line"><span>  id: &quot;main&quot;,</span></span>
<span class="line"><span>  // state: 返回对象的函数</span></span>
<span class="line"><span>  state: ()=&gt; ({</span></span>
<span class="line"><span>    count: 1,</span></span>
<span class="line"><span>    name: &#39;超级管理员&#39;,</span></span>
<span class="line"><span>    items:[]</span></span>
<span class="line"><span>  }),</span></span>
<span class="line"><span>  getters: {</span></span>
<span class="line"><span>    // 方式一</span></span>
<span class="line"><span>    countPow2(state) {</span></span>
<span class="line"><span>      return state.count ** 2;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    方式二</span></span>
<span class="line"><span>    countPow2() {</span></span>
<span class="line"><span>      return this.count ** 2;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    // 传参</span></span>
<span class="line"><span>    addCount: (state) =&gt; {</span></span>
<span class="line"><span>      return (num: number) =&gt; state.count += num</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  actions: {</span></span>
<span class="line"><span>    increment() {</span></span>
<span class="line"><span>      this.count += 1</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    addNum(num: number) {</span></span>
<span class="line"><span>      this.count += num</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    editName(name: string) {</span></span>
<span class="line"><span>      this.name = name</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><ul><li>store 方式二</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// main.ts</span></span>
<span class="line"><span>import { defineStore } from &quot;pinia&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// defineStore 调用后返回一个函数，调用该函数获得 Store 实体</span></span>
<span class="line"><span>export default defineStore(&#39;main&#39;, () =&gt; {</span></span>
<span class="line"><span>  const count = ref(1)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const countPow2 = () =&gt; {</span></span>
<span class="line"><span>    return count.value ** 2</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  const increment = () =&gt; {</span></span>
<span class="line"><span>    count.value += 1</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return {</span></span>
<span class="line"><span>    countPow2,</span></span>
<span class="line"><span>    increment</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><ul><li>使用 Store</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>    {{store.count}}</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>  &lt;div&gt;{{ store.countPow2 }}&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;div&gt;{{ addCount(2) }}&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;button @click=&quot;add()&quot;&gt;加10&lt;/button&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span>&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span>import { mainStore } from &quot;@/store/main&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const store = mainStore()</span></span>
<span class="line"><span>const addCount = (num: number) =&gt; {</span></span>
<span class="line"><span>  return store.addCount(num)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const add = (num: number = 10) =&gt; {</span></span>
<span class="line"><span>  store.addNum(num)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><ul><li>其它修改方式</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 直接修改,但还是推荐在 actions 中操作，保证状态不被意外改变</span></span>
<span class="line"><span>store.name = &#39;娃哈哈名字被修改了&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// actions 修改方式</span></span>
<span class="line"><span>store.editName(&#39;娃哈哈名字被修改了1&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 同时修改多个值</span></span>
<span class="line"><span>store.$patch({</span></span>
<span class="line"><span>  name: &#39;娃哈哈名字被修改了123&#39;,</span></span>
<span class="line"><span>  count: 20</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 针对集合修改</span></span>
<span class="line"><span>mainStore.$patch((state) =&gt; {</span></span>
<span class="line"><span>  state.items.push({ name: &#39;shoes&#39;, quantity: 1 })</span></span>
<span class="line"><span>  state.count = 21</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// $state 可以通过将 store 的属性设置为新对象来替换 store 的整个状态</span></span>
<span class="line"><span>store.$state = {</span></span>
<span class="line"><span>  name: &#39;设置为新对象来替换商店的整个状态&#39;,</span></span>
<span class="line"><span>  count: 20</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><ul><li>直接重置store</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>store.$reset()</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>在 router 中使用</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { createPinia } from &#39;pinia&#39;</span></span>
<span class="line"><span>import useMainStore from &#39;@/store/main&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const store = useMainStore(createPinia())</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><blockquote><p>注意在router和axios中使用时，一定要在函数的内部去初始化；不然会报错pinia没有注册！</p></blockquote>`,20),i=[l];function r(c,t,b,u,m,o){return s(),a("div",null,i)}const g=n(e,[["render",r]]);export{h as __pageData,g as default};
