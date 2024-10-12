import{_ as s,o as n,c as a,a2 as p}from"./chunks/framework.DkMK-_fX.js";const h=JSON.parse('{"title":"直播项目的一些代码片段","description":"","frontmatter":{},"headers":[],"relativePath":"大前端/前端项目/vue2直播项目一些代码片段.md","filePath":"大前端/前端项目/vue2直播项目一些代码片段.md","lastUpdated":1728700067000}'),e={name:"大前端/前端项目/vue2直播项目一些代码片段.md"},l=p(`<h1 id="直播项目的一些代码片段" tabindex="-1">直播项目的一些代码片段 <a class="header-anchor" href="#直播项目的一些代码片段" aria-label="Permalink to &quot;直播项目的一些代码片段&quot;">​</a></h1><p>最近做了一个直播项目，记录一些在其中使用的代码片段。</p><h2 id="多行文本自动撑大" tabindex="-1">多行文本自动撑大 <a class="header-anchor" href="#多行文本自动撑大" aria-label="Permalink to &quot;多行文本自动撑大&quot;">​</a></h2><ul><li>自动无限撑大</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;textarea</span></span>
<span class="line"><span>  :style=&quot;{ height: scrollHeight + &#39;px&#39; }&quot;</span></span>
<span class="line"><span>  v-model=&quot;detail&quot;</span></span>
<span class="line"><span>  ref=&quot;textarea&quot;</span></span>
<span class="line"><span>  @input=&quot;inputInfo&quot;</span></span>
<span class="line"><span>&gt;&lt;/textarea&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>inputInfo() {</span></span>
<span class="line"><span>  let textArea = this.$refs.textarea;</span></span>
<span class="line"><span>  let scrollHeight = 100;</span></span>
<span class="line"><span>  textArea.style.height = scrollHeight + &quot;px&quot;;</span></span>
<span class="line"><span>  if (textArea.scrollHeight &gt; 100) {</span></span>
<span class="line"><span>    scrollHeight = textArea.scrollHeight;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  this.scrollHeight = scrollHeight;</span></span>
<span class="line"><span>  textArea.style.height = scrollHeight + &quot;px&quot;;</span></span>
<span class="line"><span>},</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>这样做的话，编辑是没有问题的；但是如何后续还想查看在比较也一样的话，那我们就得知道之前的高度，所以我就在提交的放进了数据库，返回的后处理一下就好了。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const detail = \`\${content}&lt;!-- scrollHeight --&gt;\${this.scrollHeight}\`;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (res.detail.includes(&quot;&lt;!-- scrollHeight --&gt;&quot;)) {</span></span>
<span class="line"><span>  const [detail, scrollHeight] = res.detail.split(</span></span>
<span class="line"><span>    &quot;&lt;!-- scrollHeight --&gt;&quot;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>  this.detail = detail;</span></span>
<span class="line"><span>  this.scrollHeight = scrollHeight;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li>撑大到一定时候就，出现滚动条</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;textarea</span></span>
<span class="line"><span>  v-model=&quot;message&quot;</span></span>
<span class="line"><span>  maxlength=&quot;200&quot;</span></span>
<span class="line"><span>  ref=&quot;textarea&quot;</span></span>
<span class="line"><span>  placeholder=&quot;Comment...&quot;</span></span>
<span class="line"><span>  @blur=&quot;message = message.trim()&quot;</span></span>
<span class="line"><span>  @keydown=&quot;listen($event)&quot;</span></span>
<span class="line"><span>  @input=&quot;inputInfo&quot;</span></span>
<span class="line"><span>&gt;&lt;/textarea&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>inputInfo() {</span></span>
<span class="line"><span>  let textArea = this.$refs.textarea;</span></span>
<span class="line"><span>  textArea.style.height = &quot;10px&quot;;</span></span>
<span class="line"><span>  let wSclollHeight = parseInt(textArea.scrollHeight);</span></span>
<span class="line"><span>  if (textArea.scrollHeight &gt; 100) {</span></span>
<span class="line"><span>    wSclollHeight = 100;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  if (wSclollHeight &lt; 50) wSclollHeight = 50;</span></span>
<span class="line"><span>  this.textHeight = wSclollHeight + 20;</span></span>
<span class="line"><span>  textArea.style.height = wSclollHeight + &quot;px&quot;;</span></span>
<span class="line"><span>},</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="关于全屏" tabindex="-1">关于全屏 <a class="header-anchor" href="#关于全屏" aria-label="Permalink to &quot;关于全屏&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 全局监听是否全屏</span></span>
<span class="line"><span>[</span></span>
<span class="line"><span>  &quot;fullscreenchange&quot;,</span></span>
<span class="line"><span>  &quot;webkitfullscreenchange&quot;,</span></span>
<span class="line"><span>  &quot;mozfullscreenchange&quot;,</span></span>
<span class="line"><span>].forEach((item) =&gt; {</span></span>
<span class="line"><span>  window.addEventListener(item, () =&gt; {</span></span>
<span class="line"><span>    this.liveFull =</span></span>
<span class="line"><span>      document.fullscreenElement ||</span></span>
<span class="line"><span>      document.webkitFullscreenElement ||</span></span>
<span class="line"><span>      document.mozFullScreenElement</span></span>
<span class="line"><span>        ? true</span></span>
<span class="line"><span>        : false;</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 开启全屏</span></span>
<span class="line"><span>fullScreen() {</span></span>
<span class="line"><span>  if (document.documentElement.requestFullscreen) {</span></span>
<span class="line"><span>    document.documentElement.requestFullscreen();</span></span>
<span class="line"><span>  } else if (document.documentElement.mozRequestFullScreen) {</span></span>
<span class="line"><span>    document.documentElement.mozRequestFullScreen();</span></span>
<span class="line"><span>  } else if (document.documentElement.webkitRequestFullscreen) {</span></span>
<span class="line"><span>    document.documentElement.webkitRequestFullscreen();</span></span>
<span class="line"><span>  } else if (document.documentElement.msRequestFullscreen) {</span></span>
<span class="line"><span>    document.documentElement.msRequestFullscreen();</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 关闭全屏</span></span>
<span class="line"><span>exitFullscreen() {</span></span>
<span class="line"><span>  if (document.exitFullscreen) {</span></span>
<span class="line"><span>    document.exitFullscreen();</span></span>
<span class="line"><span>  } else if (document.mozCancelFullScreen) {</span></span>
<span class="line"><span>    document.mozCancelFullScreen();</span></span>
<span class="line"><span>  } else if (document.webkitExitFullscreen) {</span></span>
<span class="line"><span>    document.webkitExitFullscreen();</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>},</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><h2 id="关于一些正则或方法" tabindex="-1">关于一些正则或方法 <a class="header-anchor" href="#关于一些正则或方法" aria-label="Permalink to &quot;关于一些正则或方法&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>export const getCache = (name) =&gt; {</span></span>
<span class="line"><span>  if (!name) return false;</span></span>
<span class="line"><span>  try {</span></span>
<span class="line"><span>    return JSON.parse(localStorage[name]);</span></span>
<span class="line"><span>  } catch (error) {</span></span>
<span class="line"><span>    return localStorage[name];</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export const setCache = (name, value) =&gt; {</span></span>
<span class="line"><span>  if (!name) return false;</span></span>
<span class="line"><span>  if (typeof value == &#39;object&#39;) {</span></span>
<span class="line"><span>    value = JSON.stringify(value);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  localStorage[name] = value;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export const removeCache = (name) =&gt; {</span></span>
<span class="line"><span>  if (!name) return false;</span></span>
<span class="line"><span>  localStorage.removeItem(name);</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export const getItem = (name) =&gt; {</span></span>
<span class="line"><span>  if (!name) return false;</span></span>
<span class="line"><span>  try {</span></span>
<span class="line"><span>    return JSON.parse(sessionStorage[name]);</span></span>
<span class="line"><span>  } catch (error) {</span></span>
<span class="line"><span>    return sessionStorage[name];</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export const setItem = (name, value) =&gt; {</span></span>
<span class="line"><span>  if (!name) return false;</span></span>
<span class="line"><span>  if (typeof value == &#39;object&#39;) {</span></span>
<span class="line"><span>    value = JSON.stringify(value);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  sessionStorage[name] = value;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export const removeItem = (name) =&gt; {</span></span>
<span class="line"><span>  if (!name) return false;</span></span>
<span class="line"><span>  sessionStorage.removeItem(name);</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export const getUTCTime = (date = new Date()) =&gt; {</span></span>
<span class="line"><span>  return new Date(</span></span>
<span class="line"><span>    new Date(date).getUTCFullYear(),</span></span>
<span class="line"><span>    new Date(date).getUTCMonth(),</span></span>
<span class="line"><span>    new Date(date).getUTCDate(),</span></span>
<span class="line"><span>    new Date(date).getUTCHours(),</span></span>
<span class="line"><span>    new Date(date).getUTCMinutes(),</span></span>
<span class="line"><span>    new Date(date).getUTCSeconds()</span></span>
<span class="line"><span>  ).getTime();</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export const hasMobile = (phone) =&gt; {</span></span>
<span class="line"><span>  const re = /^[1][34587]\\d{9}$/;</span></span>
<span class="line"><span>  if (re.test(phone)) {</span></span>
<span class="line"><span>    return true;</span></span>
<span class="line"><span>  } else {</span></span>
<span class="line"><span>    return false;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export const hasEmail = (email) =&gt; {</span></span>
<span class="line"><span>  const re = /^([A-Za-z0-9_\\-.])+@([A-Za-z0-9_\\-.])+.([A-Za-z]{2,4})+$/;</span></span>
<span class="line"><span>  if (re.test(email)) {</span></span>
<span class="line"><span>    return true;</span></span>
<span class="line"><span>  } else {</span></span>
<span class="line"><span>    return false;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export const hasName = (name) =&gt; {</span></span>
<span class="line"><span>  // const re = /^[\\u4e00-\\u9fa5\\x3130-\\x318F\\xAC00-\\xD7A3\\u0800-\\u4e00A-z]+(\\s+[\\u4e00-\\u9fa5\\x3130-\\x318F\\xAC00-\\xD7A3\\u0800-\\u4e00A-z]+)*$/;</span></span>
<span class="line"><span>  const re = /^[\\u4e00-\\u9fa5\\u0800-\\u4e00A-z0-9 ]+$/;</span></span>
<span class="line"><span>  if (re.test(name)) {</span></span>
<span class="line"><span>    return true;</span></span>
<span class="line"><span>  } else {</span></span>
<span class="line"><span>    return false;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export const hasStr = (name) =&gt; {</span></span>
<span class="line"><span>  const re = /^\\S.*\\S$|(^\\S{0,1}\\S$)/;</span></span>
<span class="line"><span>  if (re.test(name)) {</span></span>
<span class="line"><span>    return true;</span></span>
<span class="line"><span>  } else {</span></span>
<span class="line"><span>    return false;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export const hasContent = (name) =&gt; {</span></span>
<span class="line"><span>  const re = /^[\\u0020-\\u007E\\u00A0-\\u00BE\\u2E80-\\uA4CF\\uF900-\\uFAFF\\uFE30-\\uFE4F\\uFF00-\\uFFEF\\u0080-\\u009F\\u2000-\\u201f\\u2026\\u2022\\u20ac\\r\\n ]+$/;</span></span>
<span class="line"><span>  if (re.test(name)) {</span></span>
<span class="line"><span>    return true;</span></span>
<span class="line"><span>  } else {</span></span>
<span class="line"><span>    return false;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export const hasPwd = (pwd) =&gt; {</span></span>
<span class="line"><span>  const re = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;</span></span>
<span class="line"><span>  if (re.test(pwd)) {</span></span>
<span class="line"><span>    return true;</span></span>
<span class="line"><span>  } else {</span></span>
<span class="line"><span>    return false;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 防抖</span></span>
<span class="line"><span>export const debounce = (fn, t = 500) =&gt; {</span></span>
<span class="line"><span>  let timer;</span></span>
<span class="line"><span>  return function() {</span></span>
<span class="line"><span>    let args = arguments;</span></span>
<span class="line"><span>    if (timer) {</span></span>
<span class="line"><span>      clearTimeout(timer);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    timer = setTimeout(() =&gt; {</span></span>
<span class="line"><span>      timer = null;</span></span>
<span class="line"><span>      fn.apply(this, args);</span></span>
<span class="line"><span>    }, t);</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br></div></div><h2 id="关于复制" tabindex="-1">关于复制 <a class="header-anchor" href="#关于复制" aria-label="Permalink to &quot;关于复制&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>yarn add vue-clipboard2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import VueClipboard from &#39;vue-clipboard2&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>VueClipboard.config.autoSetContainer = true;// 关键-——处理弹框复制失败</span></span>
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
<span class="line"><span>},</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="关于-svg-动画" tabindex="-1">关于 SVG 动画 <a class="header-anchor" href="#关于-svg-动画" aria-label="Permalink to &quot;关于 SVG 动画&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>yarn add vue-lottie</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// main.js</span></span>
<span class="line"><span>Vue.component(&#39;lottie&#39;, lottie);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 组件中使用</span></span>
<span class="line"><span>import * as animationData from &quot;../assets/lottie/love/data.json&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>animationData.assets.forEach((item) =&gt; {</span></span>
<span class="line"><span>  item.u = &quot;&quot;;</span></span>
<span class="line"><span>  if (item.w &amp;&amp; item.h) {</span></span>
<span class="line"><span>    item.p = require(\`@/assets/lottie/love/images/\${item.p}\`);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}); // 获取静态资源</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// data中</span></span>
<span class="line"><span>animation: { animationData: animationData.default },</span></span>
<span class="line"><span>anim: {},</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// methods中</span></span>
<span class="line"><span>handleAnimation(anim) {</span></span>
<span class="line"><span>  this.anim = anim;</span></span>
<span class="line"><span>  // console.log(anim); //这里可以看到 lottie 对象的全部属性</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//</span></span>
<span class="line"><span>&lt;lottie</span></span>
<span class="line"><span>  class=&quot;lottie&quot;</span></span>
<span class="line"><span>  :options=&quot;animation&quot;</span></span>
<span class="line"><span>  :height=&quot;100&quot;</span></span>
<span class="line"><span>  :width=&quot;100&quot;</span></span>
<span class="line"><span>  :style=&quot;{</span></span>
<span class="line"><span>    top: 10,</span></span>
<span class="line"><span>    left: 10,</span></span>
<span class="line"><span>  }&quot;</span></span>
<span class="line"><span>/&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><h2 id="关于钉钉等应用链接识别" tabindex="-1">关于钉钉等应用链接识别 <a class="header-anchor" href="#关于钉钉等应用链接识别" aria-label="Permalink to &quot;关于钉钉等应用链接识别&quot;">​</a></h2><p>注意分享的链接要是在线能访问的 http 域名（ip 也可以）</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;meta property=&quot;og:title&quot; content=&quot;应用名称 | 娃哈哈&quot; /&gt;</span></span>
<span class="line"><span>&lt;meta property=&quot;og:image&quot; content=&quot;应用Logo&quot; /&gt;</span></span>
<span class="line"><span>&lt;meta property=&quot;og:description&quot; content=&quot;应用的简介&quot; /&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="关于聊天框、antv-等" tabindex="-1">关于聊天框、AntV 等 <a class="header-anchor" href="#关于聊天框、antv-等" aria-label="Permalink to &quot;关于聊天框、AntV 等&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>align-self: flex-start;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>this.chart.changeData(this.handelData(data));// 更新饼图数据</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 饼图初始化</span></span>
<span class="line"><span>initChart() {</span></span>
<span class="line"><span>  const chart = (this.chart = new Chart({</span></span>
<span class="line"><span>    container: &quot;container&quot; + this.id,</span></span>
<span class="line"><span>    autoFit: true,</span></span>
<span class="line"><span>    width: 500,</span></span>
<span class="line"><span>    height: 300,</span></span>
<span class="line"><span>  }));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  chart.data(this.data);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  chart.coordinate(&quot;theta&quot;, {</span></span>
<span class="line"><span>    radius: 0.75,</span></span>
<span class="line"><span>    innerRadius: 0.6,</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  chart.legend({</span></span>
<span class="line"><span>    position: &quot;right&quot;,</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  chart.tooltip({</span></span>
<span class="line"><span>    showTitle: false,</span></span>
<span class="line"><span>    showMarkers: false,</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 分享结果才加文本（头投票数）</span></span>
<span class="line"><span>  if (this.end) {</span></span>
<span class="line"><span>    // 辅助文本</span></span>
<span class="line"><span>    this.num = this.obj.votesNum;</span></span>
<span class="line"><span>    chart</span></span>
<span class="line"><span>      .annotation()</span></span>
<span class="line"><span>      .text({</span></span>
<span class="line"><span>        position: [&quot;50%&quot;, &quot;50%&quot;],</span></span>
<span class="line"><span>        content: this.obj.votesNum,</span></span>
<span class="line"><span>        style: {</span></span>
<span class="line"><span>          fontSize: 22,</span></span>
<span class="line"><span>          fill: &quot;#0C385E&quot;,</span></span>
<span class="line"><span>          textAlign: &quot;center&quot;,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        offsetY: -8,</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>      .text({</span></span>
<span class="line"><span>        position: [&quot;50%&quot;, &quot;50%&quot;],</span></span>
<span class="line"><span>        content: &quot;votes&quot;,</span></span>
<span class="line"><span>        style: {</span></span>
<span class="line"><span>          fontSize: 12,</span></span>
<span class="line"><span>          fill: &quot;#0C385E&quot;,</span></span>
<span class="line"><span>          textAlign: &quot;center&quot;,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        offsetY: 8,</span></span>
<span class="line"><span>      });</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  chart</span></span>
<span class="line"><span>    .interval()</span></span>
<span class="line"><span>    .adjust(&quot;stack&quot;)</span></span>
<span class="line"><span>    .position(&quot;value&quot;)</span></span>
<span class="line"><span>    .color(&quot;type&quot;, voteColor)</span></span>
<span class="line"><span>    .shape(&quot;slice-shape&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  chart.render();</span></span>
<span class="line"><span>},</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br></div></div>`,22),i=[l];function r(c,t,b,u,m,o){return n(),a("div",null,i)}const g=s(e,[["render",r]]);export{h as __pageData,g as default};
