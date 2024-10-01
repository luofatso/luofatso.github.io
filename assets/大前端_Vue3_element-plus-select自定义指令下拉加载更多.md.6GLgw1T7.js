import{_ as s,o as n,c as a,a2 as e}from"./chunks/framework.DkMK-_fX.js";const _=JSON.parse('{"title":"element-plus-select自定义指令下拉加载更多","description":"","frontmatter":{},"headers":[],"relativePath":"大前端/Vue3/element-plus-select自定义指令下拉加载更多.md","filePath":"大前端/Vue3/element-plus-select自定义指令下拉加载更多.md","lastUpdated":1727401527000}'),p={name:"大前端/Vue3/element-plus-select自定义指令下拉加载更多.md"},l=e(`<h1 id="element-plus-select自定义指令下拉加载更多" tabindex="-1">element-plus-select自定义指令下拉加载更多 <a class="header-anchor" href="#element-plus-select自定义指令下拉加载更多" aria-label="Permalink to &quot;element-plus-select自定义指令下拉加载更多&quot;">​</a></h1><p>本文只做简单记录，全局注册指令同理修改容器为类名就行，同时修逻辑为循环</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-xybuR" id="tab-npuqWC7" checked><label for="tab-npuqWC7">template</label><input type="radio" name="group-xybuR" id="tab-tdBWFDv"><label for="tab-tdBWFDv">script-setup</label></div><div class="blocks"><div class="language-template vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>&lt;div id=&quot;moreJob&quot;&gt;</span></span>
<span class="line"><span>  &lt;el-select</span></span>
<span class="line"><span>    v-model=&quot;value&quot;</span></span>
<span class="line"><span>    filterable</span></span>
<span class="line"><span>    placeholder=&quot;请选择或输入关键字&quot;</span></span>
<span class="line"><span>    v-loadmore=&quot;loadmoreData&quot;</span></span>
<span class="line"><span>  &gt;</span></span>
<span class="line"><span>    &lt;div id=&quot;moreJobBox&quot;&gt;</span></span>
<span class="line"><span>      &lt;el-option v-for=&quot;it in options&quot; :key=&quot;it.id&quot; :label=&quot;it.name&quot; :value=&quot;it.id&quot; /&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  &lt;/el-select&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><div class="language-script-setup vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">script-setup</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { Directive } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const vLoadmore: Directive = {</span></span>
<span class="line"><span>  beforeMount(el, binding) {</span></span>
<span class="line"><span>    const box = document.getElementById(&#39;moreJobBox&#39;)</span></span>
<span class="line"><span>    const element = box?.closest(</span></span>
<span class="line"><span>      &#39;.el-select-dropdown__wrap.el-scrollbar__wrap.el-scrollbar__wrap--hidden-default&#39;</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    element?.addEventListener(&#39;scroll&#39;, () =&gt; {</span></span>
<span class="line"><span>      const { scrollTop, scrollHeight, clientHeight } = element</span></span>
<span class="line"><span>      const scrollDistance = scrollHeight - scrollTop - clientHeight</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      if (scrollDistance &lt;= 0) {</span></span>
<span class="line"><span>        binding.value()</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const loadmoreData = () =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;触底的时候触发loadmore&#39;)</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div></div></div>`,3),t=[l];function i(c,r,o,b,u,m){return n(),a("div",null,t)}const v=s(p,[["render",i]]);export{_ as __pageData,v as default};
