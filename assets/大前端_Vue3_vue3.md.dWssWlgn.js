import{_ as s,o as n,c as a,a2 as p}from"./chunks/framework.DkMK-_fX.js";const h=JSON.parse('{"title":"vue相关","description":"","frontmatter":{},"headers":[],"relativePath":"大前端/Vue3/vue3.md","filePath":"大前端/Vue3/vue3.md","lastUpdated":1728700067000}'),e={name:"大前端/Vue3/vue3.md"},l=p(`<h1 id="vue相关" tabindex="-1">vue相关 <a class="header-anchor" href="#vue相关" aria-label="Permalink to &quot;vue相关&quot;">​</a></h1><h2 id="_1-defineprops" tabindex="-1">1.defineProps <a class="header-anchor" href="#_1-defineprops" aria-label="Permalink to &quot;1.defineProps&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-bAtnf" id="tab-y2l4h5P" checked><label for="tab-y2l4h5P">JavaScript</label><input type="radio" name="group-bAtnf" id="tab-Xjpxkh6"><label for="tab-Xjpxkh6">TypeScript</label></div><div class="blocks"><div class="language-vue3 vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue3</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>const props = defineProps({</span></span>
<span class="line"><span>  msg: String,</span></span>
<span class="line"><span>  title: {</span></span>
<span class="line"><span>    type: String,</span></span>
<span class="line"><span>    default: &#39;我是标题&#39;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  list: {</span></span>
<span class="line"><span>    type: Array,</span></span>
<span class="line"><span>    default: () =&gt; []</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 在 js 中使用 props 中的属性</span></span>
<span class="line"><span>console.log(props.msg)</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;!-- 在模板中直接使用 props 中声明的变量 --&gt;</span></span>
<span class="line"><span>  &lt;h1&gt;{{ msg }}&lt;/h1&gt;</span></span>
<span class="line"><span>  &lt;div&gt;{{ title }}&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><div class="language-vue3 vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue3</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span>interface ListItem {</span></span>
<span class="line"><span>  name: string</span></span>
<span class="line"><span>  age: number</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const props = defineProps&lt;{</span></span>
<span class="line"><span>  msg: string</span></span>
<span class="line"><span>  title: string</span></span>
<span class="line"><span>  list: ListItem[]</span></span>
<span class="line"><span>}&gt;()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 在 ts 中使用 props 中的属性，具有很好的类型推断能力</span></span>
<span class="line"><span>console.log(props.list[0].age)</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;h1&gt;{{ msg }}&lt;/h1&gt;</span></span>
<span class="line"><span>  &lt;div&gt;{{ title }}&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div></div></div><h2 id="_2-defineemits" tabindex="-1">2.defineEmits <a class="header-anchor" href="#_2-defineemits" aria-label="Permalink to &quot;2.defineEmits&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-pagEk" id="tab-F_73HSy" checked><label for="tab-F_73HSy">JavaScript</label><input type="radio" name="group-pagEk" id="tab-siAJ_BW"><label for="tab-siAJ_BW">TypeScript</label></div><div class="blocks"><div class="language-vue3 vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue3</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const emits = defineEmits([&#39;changeMsg&#39;])</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const handleChangeMsg = () =&gt; {</span></span>
<span class="line"><span>  emits(&#39;changeMsg&#39;, &#39;Hello TS&#39;)</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-vue3 vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue3</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const emits = defineEmits&lt;{</span></span>
<span class="line"><span>  (e: &#39;changeMsg&#39;, value: string): void</span></span>
<span class="line"><span>}&gt;()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const handleChangeMsg = () =&gt; {</span></span>
<span class="line"><span>  emits(&#39;changeMsg&#39;, &#39;Hello TS&#39;)</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></div></div><h2 id="_3-defineexpose" tabindex="-1">3.defineExpose <a class="header-anchor" href="#_3-defineexpose" aria-label="Permalink to &quot;3.defineExpose&quot;">​</a></h2><p>在 Vue3 中，默认不会暴露任何在 <code>&lt;script setup&gt;</code> 中声明的绑定，即不能通过模板 ref 获取到组件实例声明的绑定。</p><p>Vue3 提供了 defineExpose 编译器宏，可以显式地暴露需要暴露的组件中声明的变量和方法。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const msg = ref&lt;string&gt;(&#39;Hello Vue3&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const handleChangeMsg = (v: string) =&gt; {</span></span>
<span class="line"><span>  msg.value = v</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>defineExpose({</span></span>
<span class="line"><span>  msg,</span></span>
<span class="line"><span>  handleChangeMsg</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="_4-watch" tabindex="-1">4.watch <a class="header-anchor" href="#_4-watch" aria-label="Permalink to &quot;4.watch&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>watch(</span></span>
<span class="line"><span>  () =&gt; route,</span></span>
<span class="line"><span>  (newVal) =&gt; {</span></span>
<span class="line"><span>    state.currentPath = newVal.name === &#39;UserRole&#39; ? &#39;/user-role&#39; : newVal.path</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  { deep: true }</span></span>
<span class="line"><span>)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="_5-样式穿透" tabindex="-1">5.样式穿透 <a class="header-anchor" href="#_5-样式穿透" aria-label="Permalink to &quot;5.样式穿透&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>:deep(.el-breadcrumb__item) {</span></span>
<span class="line"><span>  .el-breadcrumb__inner.is-link {</span></span>
<span class="line"><span>    color: #909399 !important;</span></span>
<span class="line"><span>    font-weight: 500 !important;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &amp;:hover {</span></span>
<span class="line"><span>      color: #409eff !important;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,13),i=[l];function r(t,c,b,u,d,o){return n(),a("div",null,i)}const g=s(e,[["render",r]]);export{h as __pageData,g as default};
