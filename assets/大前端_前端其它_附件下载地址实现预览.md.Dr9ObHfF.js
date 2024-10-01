import{d as o,s as b,o as l,c as t,j as n,I as u,a as r,a2 as m}from"./chunks/framework.DkMK-_fX.js";const d=["src"],h=o({__name:"getFile",setup(c){const s=b("");return fetch(window.location.protocol+"//"+window.location.host+"/test.jpg").then(function(a){a.arrayBuffer().then(e=>{let i="image/*",p=new Blob([e],{type:i});URL.createObjectURL(p),s.value=URL.createObjectURL(p)})}),(a,e)=>(l(),t("div",null,[n("img",{src:s.value,alt:""},null,8,d)]))}}),_=n("h1",{id:"附件下载地址实现预览",tabindex:"-1"},[r("附件下载地址实现预览 "),n("a",{class:"header-anchor",href:"#附件下载地址实现预览","aria-label":'Permalink to "附件下载地址实现预览"'},"​")],-1),f=n("h2",{id:"效果",tabindex:"-1"},[r("效果 "),n("a",{class:"header-anchor",href:"#效果","aria-label":'Permalink to "效果"'},"​")],-1),q=m(`<h2 id="代码" tabindex="-1">代码 <a class="header-anchor" href="#代码" aria-label="Permalink to &quot;代码&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;img id=&quot;img&quot; src=&quot;&quot; /&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fetch(&#39;/test.jpg&#39;).then(function (response) {</span></span>
<span class="line"><span>  response.arrayBuffer().then(res =&gt; {</span></span>
<span class="line"><span>    let type = &quot;image/*&quot;  // 资源类型</span></span>
<span class="line"><span>    /* 常见资源类型</span></span>
<span class="line"><span>    1.excel: type = &quot;application/vnd.openxmlformats-officedocument.spreadsheetml.sheet&quot;</span></span>
<span class="line"><span>    2.图片: type = &quot;image/*&quot;</span></span>
<span class="line"><span>    3.视频: type = &quot;video/*&quot;</span></span>
<span class="line"><span>    4.音频: type = &quot;audio/*&quot;</span></span>
<span class="line"><span>    */</span></span>
<span class="line"><span>    let blob = new Blob([res], { type: type })</span></span>
<span class="line"><span>    // 获取的blob根据实际业务场景应用下载，或转化成其他格式的资源</span></span>
<span class="line"><span>    /* var objectUrl = URL.createObjectURL(blob);</span></span>
<span class="line"><span>    var a = document.createElement(&quot;a&quot;);</span></span>
<span class="line"><span>    document.body.appendChild(a);</span></span>
<span class="line"><span>    a.style = &quot;display: none&quot;;</span></span>
<span class="line"><span>    a.href = objectUrl;</span></span>
<span class="line"><span>    a.click();</span></span>
<span class="line"><span>    document.body.removeChild(a);</span></span>
<span class="line"><span>    */</span></span>
<span class="line"><span>    var objectUrl = URL.createObjectURL(blob)</span></span>
<span class="line"><span>    var a = document.getElementById(&quot;img&quot;)</span></span>
<span class="line"><span>    // a.style = &quot;display: none&quot;;</span></span>
<span class="line"><span>    a.src = objectUrl</span></span>
<span class="line"><span>    // a.click();</span></span>
<span class="line"><span>    // document.body.removeChild(a);</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div>`,2),y=JSON.parse('{"title":"附件下载地址实现预览","description":"","frontmatter":{},"headers":[],"relativePath":"大前端/前端其它/附件下载地址实现预览.md","filePath":"大前端/前端其它/附件下载地址实现预览.md","lastUpdated":1727401527000}'),g={name:"大前端/前端其它/附件下载地址实现预览.md"},U=Object.assign(g,{setup(c){return(s,a)=>(l(),t("div",null,[_,f,u(h),q]))}});export{y as __pageData,U as default};
