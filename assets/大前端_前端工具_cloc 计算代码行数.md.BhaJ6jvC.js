import{_ as a,o as e,c as s,a2 as n}from"./chunks/framework.DkMK-_fX.js";const m=JSON.parse('{"title":"cloc 计算代码行数","description":"","frontmatter":{},"headers":[],"relativePath":"大前端/前端工具/cloc 计算代码行数.md","filePath":"大前端/前端工具/cloc 计算代码行数.md","lastUpdated":1727401527000}'),t={name:"大前端/前端工具/cloc 计算代码行数.md"},i=n(`<h1 id="cloc-计算代码行数" tabindex="-1">cloc 计算代码行数 <a class="header-anchor" href="#cloc-计算代码行数" aria-label="Permalink to &quot;cloc 计算代码行数&quot;">​</a></h1><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npx cloc [options]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>npx cloc $(git ls-files)   // 查看当前开发文件的代码行数</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="计算代码行数" tabindex="-1">计算代码行数 <a class="header-anchor" href="#计算代码行数" aria-label="Permalink to &quot;计算代码行数&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git log --pretty=tformat: --numstat | awk &#39; { add += $1; subs += $2; loc += $1 - $2 } END { printf &quot;added lines: %s, removed lines: %s, total lines: %sn&quot;, add, subs, loc }&#39; -</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><a href="https://github.com/kentcdodds/cloc#readme" target="_blank" rel="noreferrer">工具链接</a></p><h2 id="查找大文件" tabindex="-1">查找大文件 <a class="header-anchor" href="#查找大文件" aria-label="Permalink to &quot;查找大文件&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git rev-list --objects --all | grep &quot;$(git verify-pack -v .git/objects/pack/*.idx | sort -k 3 -n | tail -15 | awk &#39;{print$1}&#39;)&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,7),l=[i];function c(o,r,p,d,h,u){return e(),s("div",null,l)}const _=a(t,[["render",c]]);export{m as __pageData,_ as default};
