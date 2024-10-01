import{_ as s,o as n,c as a,a2 as p}from"./chunks/framework.DkMK-_fX.js";const h=JSON.parse('{"title":"vue3中mitt的使用","description":"","frontmatter":{},"headers":[],"relativePath":"大前端/Vue3/vue3中mitt的使用.md","filePath":"大前端/Vue3/vue3中mitt的使用.md","lastUpdated":1727401527000}'),e={name:"大前端/Vue3/vue3中mitt的使用.md"},l=p(`<h1 id="vue3中mitt的使用" tabindex="-1">vue3中mitt的使用 <a class="header-anchor" href="#vue3中mitt的使用" aria-label="Permalink to &quot;vue3中mitt的使用&quot;">​</a></h1><h2 id="方式一" tabindex="-1">方式一 <a class="header-anchor" href="#方式一" aria-label="Permalink to &quot;方式一&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// bus.js</span></span>
<span class="line"><span>import mitt from &#39;mitt&#39;</span></span>
<span class="line"><span>export default mitt()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 使用</span></span>
<span class="line"><span>import bus from &#39;@/utils/bus&#39;</span></span>
<span class="line"><span>bus.emit(&#39;reloadErrorPage&#39;, {})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>bus.on(&#39;reloadErrorPage&#39;, () =&gt; {</span></span>
<span class="line"><span>  selectPageReq()</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="方式二" tabindex="-1">方式二 <a class="header-anchor" href="#方式二" aria-label="Permalink to &quot;方式二&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// main.js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import mitt from &#39;mitt&#39;;</span></span>
<span class="line"><span>const emitter = mitt();</span></span>
<span class="line"><span>app.config.globalProperties.$bus = emitter;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 使用</span></span>
<span class="line"><span>import { getCurrentInstance } from &#39;vue&#39;;</span></span>
<span class="line"><span>const internalInstance = getCurrentInstance();</span></span>
<span class="line"><span>const bus = internalInstance.appContext.config.globalProperties.$bus;</span></span>
<span class="line"><span>// 发送事件</span></span>
<span class="line"><span>bus.emit(&#39;index&#39;, i);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 监听事件</span></span>
<span class="line"><span>bus.on(&#39;index&#39;, (data:unknown)=&gt;{</span></span>
<span class="line"><span>	console.log(&#39;选择的下标=&#39;, data);</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>onBeforeUnmount(() =&gt; {</span></span>
<span class="line"><span>  // 显式卸载</span></span>
<span class="line"><span>  bus.off(&#39;index&#39;)</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="封装使用" tabindex="-1">封装使用 <a class="header-anchor" href="#封装使用" aria-label="Permalink to &quot;封装使用&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { onUnmounted } from &#39;vue&#39;;</span></span>
<span class="line"><span>import mitt from &#39;mitt&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const emitter: mitt.Emitter = mitt();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 自定义触发器</span></span>
<span class="line"><span>const busEmit = (eventName) =&gt; {</span></span>
<span class="line"><span>  emitter.emit(eventName);</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 自定义接收器</span></span>
<span class="line"><span>const busOn = (eventName, callback) =&gt; {</span></span>
<span class="line"><span>  emitter.on(eventName, () =&gt; callback());</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 通知刷新表格数据</span></span>
<span class="line"><span>const toRefreshTable = () =&gt; {</span></span>
<span class="line"><span>  emitter.emit(&#39;reload&#39;);</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 刷新表格数据</span></span>
<span class="line"><span>const reloadTable = (callback) =&gt; {</span></span>
<span class="line"><span>  emitter.on(&#39;reload&#39;, () =&gt; callback());</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 通知刷新树结构数据</span></span>
<span class="line"><span>const toRefreshTree = () =&gt; {</span></span>
<span class="line"><span>  emitter.emit(&#39;refreshTree&#39;);</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 刷新树数据</span></span>
<span class="line"><span>const refreshTree = (callback) =&gt; {</span></span>
<span class="line"><span>  emitter.on(&#39;refreshTree&#39;, () =&gt; callback());</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export const useEventbus = () =&gt; {</span></span>
<span class="line"><span>  onUnmounted(() =&gt; {</span></span>
<span class="line"><span>    emitter.all.clear();</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>  return {</span></span>
<span class="line"><span>    busEmit,</span></span>
<span class="line"><span>    busOn,</span></span>
<span class="line"><span>    toRefreshTable,</span></span>
<span class="line"><span>    reloadTable,</span></span>
<span class="line"><span>    toRefreshTree,</span></span>
<span class="line"><span>    refreshTree,</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div>`,7),i=[l];function r(c,t,b,m,u,o){return n(),a("div",null,i)}const g=s(e,[["render",r]]);export{h as __pageData,g as default};
