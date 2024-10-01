import{_ as s,o as n,c as a,a2 as e}from"./chunks/framework.DkMK-_fX.js";const _=JSON.parse('{"title":"插件记录","description":"","frontmatter":{},"headers":[],"relativePath":"大前端/Vue3/vue3好用的插件记录.md","filePath":"大前端/Vue3/vue3好用的插件记录.md","lastUpdated":1727401527000}'),p={name:"大前端/Vue3/vue3好用的插件记录.md"},r=e(`<h1 id="插件记录" tabindex="-1">插件记录 <a class="header-anchor" href="#插件记录" aria-label="Permalink to &quot;插件记录&quot;">​</a></h1><h2 id="用composition-api的思想封装nprogress" tabindex="-1">用Composition API的思想封装NProgress <a class="header-anchor" href="#用composition-api的思想封装nprogress" aria-label="Permalink to &quot;用Composition API的思想封装NProgress&quot;">​</a></h2><p>npm i nprogress @vueuse/integrations</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//router.js</span></span>
<span class="line"><span>import { createRouter, createWebHashHistory } from &#39;vue-router&#39;</span></span>
<span class="line"><span>import { useNProgress } from &#39;@vueuse/integrations/useNProgress&#39;</span></span>
<span class="line"><span>// 通过useNProgress，导出一个isLoading</span></span>
<span class="line"><span>const { isLoading } = useNProgress(null,{</span></span>
<span class="line"><span>  showSpinner: false</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const router = createRouter({</span></span>
<span class="line"><span>  history: createWebHashHistory(),</span></span>
<span class="line"><span>  routes:[/*省略路由*/]</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>// 在路由进入和离开的时候时候，改变isLoading</span></span>
<span class="line"><span>router.beforeEach((to, from, next)=&gt;{</span></span>
<span class="line"><span>  isLoading.value = true</span></span>
<span class="line"><span>  next()</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>router.afterEach((to, from, next)=&gt;{</span></span>
<span class="line"><span>  isLoading.value = false</span></span>
<span class="line"><span>  next()</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>export default router</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div>`,4),l=[r];function i(t,o,c,u,b,m){return n(),a("div",null,l)}const h=s(p,[["render",i]]);export{_ as __pageData,h as default};
