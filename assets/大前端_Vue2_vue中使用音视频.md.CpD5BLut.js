import{_ as s,o as n,c as a,a2 as e}from"./chunks/framework.DkMK-_fX.js";const h=JSON.parse('{"title":"vue2 中使用音视频（howler、TCplayerLite）","description":"","frontmatter":{},"headers":[],"relativePath":"大前端/Vue2/vue中使用音视频.md","filePath":"大前端/Vue2/vue中使用音视频.md","lastUpdated":1728700067000}'),p={name:"大前端/Vue2/vue中使用音视频.md"},l=e(`<h1 id="vue2-中使用音视频-howler、tcplayerlite" tabindex="-1">vue2 中使用音视频（howler、TCplayerLite） <a class="header-anchor" href="#vue2-中使用音视频-howler、tcplayerlite" aria-label="Permalink to &quot;vue2 中使用音视频（howler、TCplayerLite）&quot;">​</a></h1><p>最近做了一个在线直播项目，其中使用了音视频相关技术，这里作为一点记录。</p><h3 id="音频-howler-js" tabindex="-1">音频 howler.js <a class="header-anchor" href="#音频-howler-js" aria-label="Permalink to &quot;音频 howler.js&quot;">​</a></h3><p>howler.js 是现代网络的音频库。它默认为 Web Audio API 并回退到 HTML5 Audio。这使得在 JavaScript 中处理音频在所有平台上都变得容易和可靠。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>yarn add howler</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import { Howl } from &quot;howler&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 初始化</span></span>
<span class="line"><span>sound = new Howl({</span></span>
<span class="line"><span>  src: [&#39;sound.webm&#39;, &#39;sound.mp3&#39;]</span></span>
<span class="line"><span>  src: [require(&quot;../assets/test.mp3&quot;), require(&quot;../assets/test2.mp3&quot;)],</span></span>
<span class="line"><span>  src: [\`http://test\${random(1, 6)}.mp3\`],</span></span>
<span class="line"><span>  html5 : true, // 流式音频（用于实时音频或大文件）边加载边播放，不需要全部加载才播放</span></span>
<span class="line"><span>  autoplay: false,// 自动播放</span></span>
<span class="line"><span>  loop: false,// 循环</span></span>
<span class="line"><span>  preload: true,// 预加载</span></span>
<span class="line"><span>  volume: 0.5,// 音量0-1</span></span>
<span class="line"><span>  rate: 1,//播放速度 0.5 - 4</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 第一次调用</span></span>
<span class="line"><span>sound.once(&#39;load&#39;, function(){</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 播放结束调用</span></span>
<span class="line"><span>sound.on(&#39;end&#39;, function(){</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sound.play();// 播放</span></span>
<span class="line"><span>sound.pause();// 暂停</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>当然也可以使用 vue-howler, 除了导入有点不一样，其它api基本都是一样的...</p><h3 id="视频-tcplayerlite" tabindex="-1">视频 TCplayerLite <a class="header-anchor" href="#视频-tcplayerlite" aria-label="Permalink to &quot;视频 TCplayerLite&quot;">​</a></h3><p>视频推流这块的我们使用了腾讯的 TCplayerLite，因为直播会涉及礼物聊天弹幕等；然而腾讯 TCplayerLite 提供的 api 有限，很多功能都是自己补齐的；</p><p>项目弹幕和聊天基本一个逻辑，就是 socket 接受到后就直接 push 到列表；当然直接 push 肯定其它问题的，这里我们就不做介绍；这里主要记录一下响应、全屏及其它一些现实；</p><h4 id="video-根据屏幕宽度响应变化" tabindex="-1">video 根据屏幕宽度响应变化 <a class="header-anchor" href="#video-根据屏幕宽度响应变化" aria-label="Permalink to &quot;video 根据屏幕宽度响应变化&quot;">​</a></h4><p>因为 TCplayerLite 并没有提供响应的 api，进过一些思绪...观察 DOM 节后，直接处理 DOM 的宽高解决；</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>window.onresize = () =&gt; {</span></span>
<span class="line"><span>  return (() =&gt; {</span></span>
<span class="line"><span>    const video = this.$refs.videoRef;</span></span>
<span class="line"><span>    this.videoSize = {</span></span>
<span class="line"><span>      w: video.offsetWidth,</span></span>
<span class="line"><span>      h: video.offsetHeight,</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>  })();</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>document.getElementsByTagName(&quot;video&quot;)[0].style.height = val + &quot;px !important&quot;;</span></span>
<span class="line"><span>document.querySelector(&quot;.vcp-player&quot;).style.height = val + &quot;px !important&quot;;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>大概思路就是这个样子啦，那就下班...晚上睡觉，我都直接改变了 DOM 的宽高了，那我为什么不直接改 css 还不用获取宽高后再改变...那么改良后就是这样...</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>document.getElementsByTagName(&quot;video&quot;)[0].classList.add(&quot;video-box__full&quot;);</span></span>
<span class="line"><span>document.querySelector(&quot;.vcp-player&quot;).classList.add(&quot;video-box__full&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>::v-deep{</span></span>
<span class="line"><span>  .video-box{</span></span>
<span class="line"><span>    position: relative;</span></span>
<span class="line"><span>    width: 100%;</span></span>
<span class="line"><span>    height: 100%;</span></span>
<span class="line"><span>    &amp;__full {</span></span>
<span class="line"><span>      position: absolute;</span></span>
<span class="line"><span>      top: 0;</span></span>
<span class="line"><span>      left: 0;</span></span>
<span class="line"><span>      width: 100%;</span></span>
<span class="line"><span>      height: 100%;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h4 id="video全屏" tabindex="-1">video全屏 <a class="header-anchor" href="#video全屏" aria-label="Permalink to &quot;video全屏&quot;">​</a></h4><p>其实TCplayerLite自带全屏的，但是项目需求是全屏2/3视频,还有1/3他们要拿来聊天使用...我就呵呵了，但我我们也刚不过客户呀!!!最后就只能‘曲线救国了’————那就浏览器全屏(加上上面响应逻辑，基本不用调整多少代码)。。。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 全局监听是否全屏</span></span>
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
<span class="line"><span>},</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><p>当然全局监听后，在退出当前组件时最好清除哟（为什么？...滚...）。</p><h4 id="其它注意事项" tabindex="-1">其它注意事项 <a class="header-anchor" href="#其它注意事项" aria-label="Permalink to &quot;其它注意事项&quot;">​</a></h4><ol><li>视频封面或一些加载、文字提示等；</li><li>进入直播页面正在加载的同时退出当前页面，视频会再加载成功后依然播放；</li></ol><blockquote><p>关于问题1 — 其实TCplayerLite是提供设置封面的方法的，只是不能达到我们的业务需求，我就在video盖一层，然后在相应的时间显示就好了。</p></blockquote><blockquote><p>关于问题2 — 我们在实例化的时候保存一个全局变量，在退出当前页面的时候，清空这个全局变量就好了。</p></blockquote><p>关于直播其它的礼物、弹幕，其实就在video标签上面盖一层div设置想要的大小就好了，具体你想干什么那就干什么吧，当然了...肯定不可以色色噢！！！</p><p>其它的问题其实当时也蛮多的，只是后来处理了觉得也不是事了，如果你又什么其他的想法可以一起交流交流（如有不妥之处，请多指教）。</p>`,24),i=[l];function r(c,t,u,b,o,m){return n(),a("div",null,i)}const v=s(p,[["render",r]]);export{h as __pageData,v as default};
