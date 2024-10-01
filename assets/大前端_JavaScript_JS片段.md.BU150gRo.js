import{_ as s,o as a,c as n,a2 as e}from"./chunks/framework.DkMK-_fX.js";const h=JSON.parse('{"title":"JS片段","description":"","frontmatter":{},"headers":[],"relativePath":"大前端/JavaScript/JS片段.md","filePath":"大前端/JavaScript/JS片段.md","lastUpdated":1727401527000}'),p={name:"大前端/JavaScript/JS片段.md"},l=e(`<h1 id="js片段" tabindex="-1">JS片段 <a class="header-anchor" href="#js片段" aria-label="Permalink to &quot;JS片段&quot;">​</a></h1><p>[TOC]</p><h2 id="检查当前用户是否为苹果设备" tabindex="-1">检查当前用户是否为苹果设备 <a class="header-anchor" href="#检查当前用户是否为苹果设备" aria-label="Permalink to &quot;检查当前用户是否为苹果设备&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);</span></span>
<span class="line"><span>console.log(isAppleDevice);</span></span>
<span class="line"><span>// Result: will return true if user is on an Apple device</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="根据子id查找所有父级id或name" tabindex="-1">根据子ID查找所有父级ID或name <a class="header-anchor" href="#根据子id查找所有父级id或name" aria-label="Permalink to &quot;根据子ID查找所有父级ID或name&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 根据子ID查找所有父级ID（此处为name）</span></span>
<span class="line"><span>findIds(array, id) {</span></span>
<span class="line"><span>  let stack = []</span></span>
<span class="line"><span>  let going = true</span></span>
<span class="line"><span>  let walker = (array, id) =&gt; {</span></span>
<span class="line"><span>    array.forEach((item) =&gt; {</span></span>
<span class="line"><span>      if (!going) return</span></span>
<span class="line"><span>      stack.push(item[&#39;serviceName&#39;])</span></span>
<span class="line"><span>      if (item[&#39;id&#39;] === id) {</span></span>
<span class="line"><span>        going = false</span></span>
<span class="line"><span>      } else if (item[&#39;children&#39;]) {</span></span>
<span class="line"><span>        walker(item[&#39;children&#39;], id)</span></span>
<span class="line"><span>      } else {</span></span>
<span class="line"><span>        stack.pop()</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>    if (going) stack.pop()</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  walker(array, id)</span></span>
<span class="line"><span>  return stack</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>`,6),i=[l];function r(c,t,d,b,o,u){return a(),n("div",null,i)}const _=s(p,[["render",r]]);export{h as __pageData,_ as default};
