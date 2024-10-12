import{_ as s,o as a,c as n,a2 as e}from"./chunks/framework.DkMK-_fX.js";const m=JSON.parse('{"title":"vue3部分语法使用","description":"","frontmatter":{},"headers":[],"relativePath":"大前端/Vue3/vue3一些语法的使用.md","filePath":"大前端/Vue3/vue3一些语法的使用.md","lastUpdated":1728700067000}'),l={name:"大前端/Vue3/vue3一些语法的使用.md"},p=e(`<h1 id="vue3部分语法使用" tabindex="-1">vue3部分语法使用 <a class="header-anchor" href="#vue3部分语法使用" aria-label="Permalink to &quot;vue3部分语法使用&quot;">​</a></h1><h2 id="_1-toref、torefs" tabindex="-1">1. toRef、toRefs <a class="header-anchor" href="#_1-toref、torefs" aria-label="Permalink to &quot;1. toRef、toRefs&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const obj = {</span></span>
<span class="line"><span>  foo: 1,</span></span>
<span class="line"><span>  bar: 1</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const state = toRef(obj, &#39;bar&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const obj = reactive({</span></span>
<span class="line"><span>   foo: 1,</span></span>
<span class="line"><span>   bar: 1</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>let { foo, bar } = toRefs(obj)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="_2-shallowreactive-与-shallowref" tabindex="-1">2. shallowReactive 与 shallowRef <a class="header-anchor" href="#_2-shallowreactive-与-shallowref" aria-label="Permalink to &quot;2. shallowReactive 与 shallowRef&quot;">​</a></h2><ul><li>shallowReactive：只处理对象最外层属性的响应式（浅响应式）</li><li>shallowRef：只处理基本数据类型的响应式, 不进行对象的响应式处理。</li></ul><h2 id="_3-readonly-与shallowreadonly" tabindex="-1">3. readonly 与shallowReadonly <a class="header-anchor" href="#_3-readonly-与shallowreadonly" aria-label="Permalink to &quot;3. readonly 与shallowReadonly&quot;">​</a></h2><ul><li>readonly: 让一个响应式数据变为只读的（深只读）。</li><li>shallowReadonly：让一个响应式数据变为只读的（浅只读）。</li></ul><h2 id="_4-toraw-与-markraw" tabindex="-1">4. toRaw 与 markRaw <a class="header-anchor" href="#_4-toraw-与-markraw" aria-label="Permalink to &quot;4. toRaw 与 markRaw&quot;">​</a></h2><ul><li><p>toRaw</p><ul><li>作用：将一个由 reactive 生成的 响应式对象 转为 普通对象</li><li>使用场景：用于读取响应式对象=&gt;对应的普通对象,对这个普通对象的所有操作，不会引起页面的更新</li></ul></li><li><p>markRaw</p><ul><li>作用：标记一个对象，使用其永远不会再成为响应式对象</li><li>应用场景： <ul><li>有些值不应被设置为响应式的，例如复杂的第三方类库</li><li>当渲染具有不可变数据源的大列表时，跳过响应式转换可以提高性能</li></ul></li></ul></li></ul><h2 id="_5-teleport-与-suspense" tabindex="-1">5.Teleport 与 Suspense <a class="header-anchor" href="#_5-teleport-与-suspense" aria-label="Permalink to &quot;5.Teleport 与 Suspense&quot;">​</a></h2><ul><li>Teleport: 什么是 Teleport —— Teleport 是一种能够将我们的组件html结构移动到指定位置的技术</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;teleport to=&quot;移动位置&quot;&gt;</span></span>
<span class="line"><span>  &lt;div v-if=&quot;isShow&quot; class=&quot;mask&quot;&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;dialog&quot;&gt;</span></span>
<span class="line"><span>      &lt;h3&gt;我是一个弹窗&lt;/h3&gt;</span></span>
<span class="line"><span>      &lt;button @click=&quot;isShow = false&quot;&gt;关闭弹窗&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/teleport&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li>Suspense: 等待异步组件时渲染一些额外内容，让应用有更好的用户体验</li></ul><blockquote><p>使用Suspense包裹组件，并配置好default 与 fallback</p></blockquote><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import {defineAsyncComponent} from &#39;vue&#39;</span></span>
<span class="line"><span>const Child = defineAsyncComponent(()=&gt;import(&#39;./components/Child.vue&#39;))</span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;app&quot;&gt;</span></span>
<span class="line"><span>    &lt;h3&gt;我是App组件&lt;/h3&gt;</span></span>
<span class="line"><span>    &lt;Suspense&gt;</span></span>
<span class="line"><span>      &lt;template v-slot:default&gt;</span></span>
<span class="line"><span>        &lt;Child/&gt;</span></span>
<span class="line"><span>      &lt;/template&gt;</span></span>
<span class="line"><span>      &lt;template v-slot:fallback&gt;</span></span>
<span class="line"><span>        &lt;h3&gt;加载中.....&lt;/h3&gt;</span></span>
<span class="line"><span>      &lt;/template&gt;</span></span>
<span class="line"><span>    &lt;/Suspense&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>`,15),t=[p];function i(r,o,c,u,b,d){return a(),n("div",null,t)}const v=s(l,[["render",i]]);export{m as __pageData,v as default};
