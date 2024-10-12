import{_ as s,o as n,c as a,a2 as p}from"./chunks/framework.DkMK-_fX.js";const _=JSON.parse('{"title":"vue-clipboard2 使用记录","description":"","frontmatter":{},"headers":[],"relativePath":"大前端/Vue2/vue-clipboard2使用.md","filePath":"大前端/Vue2/vue-clipboard2使用.md","lastUpdated":1728700067000}'),e={name:"大前端/Vue2/vue-clipboard2使用.md"},l=p(`<h1 id="vue-clipboard2-使用记录" tabindex="-1">vue-clipboard2 使用记录 <a class="header-anchor" href="#vue-clipboard2-使用记录" aria-label="Permalink to &quot;vue-clipboard2 使用记录&quot;">​</a></h1><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>yarn add vue-clipboard2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import VueClipboard from &#39;vue-clipboard2&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>VueClipboard.config.autoSetContainer = true;// 处理弹框复制失败</span></span>
<span class="line"><span>Vue.use(VueClipboard);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 组件中使用</span></span>
<span class="line"><span>// copy中有需要换行的话，直接 \\n 就好了</span></span>
<span class="line"><span>this.$copyText(&#39;需要复制的内容&#39;).then(</span></span>
<span class="line"><span>  (e) =&gt; {</span></span>
<span class="line"><span>    console.log(&quot;复制成功&quot;, e.text);</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  (e) =&gt; {</span></span>
<span class="line"><span>    console.log(e);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 拓展 获取当前url</span></span>
<span class="line"><span>getTeamUrl() {</span></span>
<span class="line"><span>  return &quot;http://&quot; + window.location.host + &quot;/live?id=&quot; + this.id;</span></span>
<span class="line"><span>},</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div>`,2),i=[l];function r(c,t,o,b,u,d){return n(),a("div",null,i)}const h=s(e,[["render",r]]);export{_ as __pageData,h as default};
