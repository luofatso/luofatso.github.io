import{_ as s,o as n,c as a,a2 as e}from"./chunks/framework.DkMK-_fX.js";const h=JSON.parse('{"title":"js返回顶部的几种解决方案","description":"","frontmatter":{},"headers":[],"relativePath":"大前端/JavaScript/js返回顶部的几种解决方案.md","filePath":"大前端/JavaScript/js返回顶部的几种解决方案.md","lastUpdated":1728700067000}'),p={name:"大前端/JavaScript/js返回顶部的几种解决方案.md"},l=e(`<h1 id="js返回顶部的几种解决方案" tabindex="-1">js返回顶部的几种解决方案 <a class="header-anchor" href="#js返回顶部的几种解决方案" aria-label="Permalink to &quot;js返回顶部的几种解决方案&quot;">​</a></h1><p>[TOC]</p><h2 id="_1、纯js-无动画版本" tabindex="-1">1、纯js,无动画版本 <a class="header-anchor" href="#_1、纯js-无动画版本" aria-label="Permalink to &quot;1、纯js,无动画版本&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>window.scrollTo(x-coord, y-coord);</span></span>
<span class="line"><span>window.scrollTo(0,0);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="_2、纯js-带动画版本" tabindex="-1">2、纯js，带动画版本 <a class="header-anchor" href="#_2、纯js-带动画版本" aria-label="Permalink to &quot;2、纯js，带动画版本&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>生硬版：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var scrollToTop = window.setInterval(function() {</span></span>
<span class="line"><span>    var pos = window.pageYOffset;</span></span>
<span class="line"><span>    if ( pos &gt; 0 ) {</span></span>
<span class="line"><span>        window.scrollTo( 0, pos - 20 ); // how far to scroll on each step</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        window.clearInterval( scrollToTop );</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}, 16); // how fast to scroll (this equals roughly 60 fps)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>流畅版：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(function smoothscroll(){</span></span>
<span class="line"><span>    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;</span></span>
<span class="line"><span>    if (currentScroll &gt; 0) {</span></span>
<span class="line"><span>         window.requestAnimationFrame(smoothscroll);</span></span>
<span class="line"><span>         window.scrollTo (0,currentScroll - (currentScroll/5));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="_3、jquery-带动画版本" tabindex="-1">3、jQuery,带动画版本 <a class="header-anchor" href="#_3、jquery-带动画版本" aria-label="Permalink to &quot;3、jQuery,带动画版本&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>if ($(&quot;html&quot;).scrollTop()) {</span></span>
<span class="line"><span>  $(&quot;html&quot;).animate({ scrollTop: 0 }, 1000);</span></span>
<span class="line"><span>  return false;</span></span>
<span class="line"><span>} else {</span></span>
<span class="line"><span>  $(&quot;body&quot;).animate({ scrollTop: 0 }, 1000);</span></span>
<span class="line"><span>  return false;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,8),r=[l];function i(c,o,t,u,b,d){return n(),a("div",null,r)}const _=s(p,[["render",i]]);export{h as __pageData,_ as default};
