import{_ as s,o as n,c as a,a2 as p}from"./chunks/framework.DkMK-_fX.js";const v=JSON.parse('{"title":"live-flv-265直播","description":"","frontmatter":{},"headers":[],"relativePath":"大前端/前端其它/videojs-flvh265直播.md","filePath":"大前端/前端其它/videojs-flvh265直播.md","lastUpdated":1728700067000}'),l={name:"大前端/前端其它/videojs-flvh265直播.md"},e=p(`<h1 id="live-flv-265直播" tabindex="-1">live-flv-265直播 <a class="header-anchor" href="#live-flv-265直播" aria-label="Permalink to &quot;live-flv-265直播&quot;">​</a></h1><p>公司一个管理系统使用了后端渲染，这个是给后端同学写的一个的DEMO</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>  &lt;head&gt;</span></span>
<span class="line"><span>    &lt;title&gt;video&lt;/title&gt;</span></span>
<span class="line"><span>    &lt;!-- Video.js --&gt;</span></span>
<span class="line"><span>    &lt;link</span></span>
<span class="line"><span>      href=&quot;https://unpkg.com/video.js/dist/video-js.css&quot;</span></span>
<span class="line"><span>      rel=&quot;stylesheet&quot;</span></span>
<span class="line"><span>    /&gt;</span></span>
<span class="line"><span>    &lt;script src=&quot;https://unpkg.com/video.js/dist/video.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>    &lt;script src=&quot;./node_modules/videojs-flvh265/dist/videojs-flvh265.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>  &lt;/head&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &lt;body&gt;</span></span>
<span class="line"><span>    &lt;video</span></span>
<span class="line"><span>      id=&quot;player&quot;</span></span>
<span class="line"><span>      height=&quot;300&quot;</span></span>
<span class="line"><span>      width=&quot;600&quot;</span></span>
<span class="line"><span>      class=&quot;video-js vjs-big-play-centered&quot;</span></span>
<span class="line"><span>      controls</span></span>
<span class="line"><span>      autoplay</span></span>
<span class="line"><span>      loop</span></span>
<span class="line"><span>      ish265</span></span>
<span class="line"><span>      islive</span></span>
<span class="line"><span>      hasvideo</span></span>
<span class="line"><span>      hasaudio</span></span>
<span class="line"><span>    &gt;</span></span>
<span class="line"><span>      &lt;source src=&quot;http://35.74.26.231/live/F184903.live.flv&quot; type=&quot;video/x-flv&quot; /&gt;</span></span>
<span class="line"><span>    &lt;/video&gt;</span></span>
<span class="line"><span>  &lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>  var player = videojs(&#39;player&#39;, {</span></span>
<span class="line"><span>    techOrder: [&#39;html5&#39;, &#39;flvh265&#39;],</span></span>
<span class="line"><span>    controlBar: {</span></span>
<span class="line"><span>      pictureInPictureToggle: false, //sorry,we don&#39;t support pictureInPicture now</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><h2 id="video-js-结合-flv-js-播放flv视频" tabindex="-1">video.js 结合 flv.js 播放flv视频 <a class="header-anchor" href="#video-js-结合-flv-js-播放flv视频" aria-label="Permalink to &quot;video.js 结合 flv.js 播放flv视频&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;title&gt;video&lt;/title&gt;</span></span>
<span class="line"><span>    &lt;!-- Video.js --&gt;</span></span>
<span class="line"><span>    &lt;link href=&quot;https://unpkg.com/video.js/dist/video-js.css&quot; rel=&quot;stylesheet&quot;&gt;</span></span>
<span class="line"><span>    &lt;script src=&quot;https://unpkg.com/video.js/dist/video.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>    &lt;script src=&quot;https://unpkg.com/flv.js/dist/flv.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>    &lt;script src=&quot;https://unpkg.com/videojs-flvjs/dist/videojs-flvjs.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>        &lt;video id=&quot;videojs-flvjs-player&quot; class=&quot;video-js vjs-default-skin vjs-big-play-centered&quot;  width=&quot;1024&quot; height=&quot;768&quot;&gt; &lt;/video&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/html&gt;</span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>var flvUrl = &quot;https://mister-ben.github.io/videojs-flvjs/bbb.flv&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var player = videojs(&#39;videojs-flvjs-player&#39;, {</span></span>
<span class="line"><span>    techOrder: [&#39;html5&#39;, &#39;flvjs&#39;],</span></span>
<span class="line"><span>    flvjs: {</span></span>
<span class="line"><span>        mediaDataSource: {</span></span>
<span class="line"><span>            isLive: false,</span></span>
<span class="line"><span>            cors: true,</span></span>
<span class="line"><span>            withCredentials: false,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    sources: [{</span></span>
<span class="line"><span>        src: flvUrl,</span></span>
<span class="line"><span>        type: &#39;video/mp4&#39;</span></span>
<span class="line"><span>    }],</span></span>
<span class="line"><span>    controls: true,</span></span>
<span class="line"><span>    preload: &quot;none&quot;</span></span>
<span class="line"><span>}, function onPlayerReady() {</span></span>
<span class="line"><span>    console.log(&#39;player ready&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    player.on(&#39;error&#39;, (err) =&gt; {</span></span>
<span class="line"><span>        console.log(&#39;first source load fail&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        player.src({</span></span>
<span class="line"><span>            src: flvUrl,</span></span>
<span class="line"><span>            type: &#39;video/x-flv&#39;</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        player.ready(function() {</span></span>
<span class="line"><span>            console.log(&#39;player ready&#39;)</span></span>
<span class="line"><span>            player.load();</span></span>
<span class="line"><span>            player.play();</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br></div></div><ul><li><a href="https://www.jianshu.com/p/2b09fbfbeda5/" target="_blank" rel="noreferrer">参考文章1</a></li><li><a href="https://blog.csdn.net/boyit0/article/details/84395347" target="_blank" rel="noreferrer">参考文章2</a></li></ul>`,6),i=[e];function r(t,c,b,u,o,m){return n(),a("div",null,i)}const h=s(l,[["render",r]]);export{v as __pageData,h as default};
