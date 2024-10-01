import{_ as a,o as e,c as s,a2 as n}from"./chunks/framework.DkMK-_fX.js";const u=JSON.parse('{"title":"webpack项目打包、保存内存泄漏","description":"","frontmatter":{},"headers":[],"relativePath":"大前端/前端工具/webpack项目打包、保存内存泄漏.md","filePath":"大前端/前端工具/webpack项目打包、保存内存泄漏.md","lastUpdated":1727401527000}'),p={name:"大前端/前端工具/webpack项目打包、保存内存泄漏.md"},i=n(`<h1 id="webpack项目打包、保存内存泄漏" tabindex="-1">webpack项目打包、保存内存泄漏 <a class="header-anchor" href="#webpack项目打包、保存内存泄漏" aria-label="Permalink to &quot;webpack项目打包、保存内存泄漏&quot;">​</a></h1><p>最近接触一个老项目，在保存代码的时候提示内存泄漏。报错问题如下：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>频繁出现此种情况，项目太大，导致内存溢出，排除代码问题外，可参照以下方式解决</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>全局安装increase-memory-limit</span></span>
<span class="line"><span>npm install -g increase-memory-limit</span></span>
<span class="line"><span>进入工程目录，执行：</span></span>
<span class="line"><span>increase-memory-limit</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,5),t=[i];function l(c,r,o,d,_,m){return e(),s("div",null,t)}const h=a(p,[["render",l]]);export{u as __pageData,h as default};
