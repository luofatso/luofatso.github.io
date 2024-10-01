import{d as _,y,o as g,c as f,p as x,l as C,j as e,_ as Y,I as E,a as h,a2 as X}from"./chunks/framework.DkMK-_fX.js";const L=t=>(x("data-v-3cd72474"),t=t(),C(),t),q={class:"box"},w=L(()=>e("div",{id:"videoContainer"},[e("video",{id:"myVideo",src:"https://media.w3.org/2010/05/sintel/trailer.mp4",controls:"",playsinline:""})],-1)),D=[w],V=_({__name:"videoScale",setup(t){return y(()=>{const s=document.getElementById("videoContainer"),p=document.getElementById("myVideo");let c=!1,d,u,l,i,o,b;var m=s.offsetWidth,v=s.offsetHeight;s.addEventListener("mousedown",function(n){c=!0,d=n.clientX,u=n.clientY}),s.addEventListener("mousemove",function(n){if(c){o=n.clientX-d,b=n.clientY-u;var a=l-o,r=i-b;a<0&&(a=0),r<0&&(r=0),a>m&&(a=m),r>v&&(r=v),p.style.transformOrigin=a+"px "+r+"px"}}),s.addEventListener("mouseup",function(){l=l-o,i=i-b,c=!1}),s.addEventListener("mouseleave",function(){l=l-o,i=i-b,c=!1}),s.addEventListener("contextmenu",function(n){if(p.classList.toggle("video-enlarged"),n.preventDefault(),p.classList.contains("video-enlarged")){var a=s.getBoundingClientRect();l=n.clientX-a.left,i=n.clientY-a.top,p.style.transformOrigin=l+"px "+i+"px"}}),p.addEventListener("click",function(n){n.preventDefault(),n.stopPropagation()})}),(s,p)=>(g(),f("div",q,D))}}),I=Y(V,[["__scopeId","data-v-3cd72474"]]),P=e("h1",{id:"点击视频放大",tabindex:"-1"},[h("点击视频放大 "),e("a",{class:"header-anchor",href:"#点击视频放大","aria-label":'Permalink to "点击视频放大"'},"​")],-1),S=e("p",null,"给一个后端同学做的一个简单DEMO，也适用于图片等",-1),T=e("h2",{id:"亲自试试",tabindex:"-1"},[h("亲自试试 "),e("a",{class:"header-anchor",href:"#亲自试试","aria-label":'Permalink to "亲自试试"'},"​")],-1),k=e("p",null,"右键点击视频查看效果",-1),B=X(`<h2 id="代码示例" tabindex="-1">代码示例 <a class="header-anchor" href="#代码示例" aria-label="Permalink to &quot;代码示例&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>  &lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot; /&gt;</span></span>
<span class="line"><span>    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot; /&gt;</span></span>
<span class="line"><span>    &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span>    &lt;style&gt;</span></span>
<span class="line"><span>      * {</span></span>
<span class="line"><span>        margin: 0;</span></span>
<span class="line"><span>        padding: 0;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      body {</span></span>
<span class="line"><span>        width: 100vw;</span></span>
<span class="line"><span>        height: 100vh;</span></span>
<span class="line"><span>        display: flex;</span></span>
<span class="line"><span>        justify-content: center;</span></span>
<span class="line"><span>        align-items: center;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;/style&gt;</span></span>
<span class="line"><span>  &lt;/head&gt;</span></span>
<span class="line"><span>  &lt;body&gt;</span></span>
<span class="line"><span>    &lt;div id=&quot;videoContainer&quot;&gt;</span></span>
<span class="line"><span>      &lt;video id=&quot;myVideo&quot; controls playsinline&gt;&lt;/video&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;script src=&quot;https://player.live-video.net/1.14.0/amazon-ivs-player.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>      var videoContainer = document.getElementById(&#39;videoContainer&#39;);</span></span>
<span class="line"><span>      var video = document.getElementById(&#39;myVideo&#39;);</span></span>
<span class="line"><span>      var isDragging = false;</span></span>
<span class="line"><span>      var startX, startY, offsetX, offsetY, x, y, endX, endY;</span></span>
<span class="line"><span>      var videoWidth = videoContainer.offsetWidth,</span></span>
<span class="line"><span>        videoHeight = videoContainer.offsetHeight;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>      if (IVSPlayer.isPlayerSupported) {</span></span>
<span class="line"><span>        const player = IVSPlayer.create();</span></span>
<span class="line"><span>        player.attachHTMLVideoElement(video);</span></span>
<span class="line"><span>        player.load(&#39;https://media.w3.org/2010/05/sintel/trailer.mp4&#39;);</span></span>
<span class="line"><span>        player.play();</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      // 计算移动位置</span></span>
<span class="line"><span>      videoContainer.addEventListener(&#39;mousedown&#39;, function (event) {</span></span>
<span class="line"><span>        isDragging = true;</span></span>
<span class="line"><span>        startX = event.clientX;</span></span>
<span class="line"><span>        startY = event.clientY;</span></span>
<span class="line"><span>        // offsetX = videoContainer.scrollLeft;</span></span>
<span class="line"><span>        // offsetY = videoContainer.scrollTop;</span></span>
<span class="line"><span>      });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      videoContainer.addEventListener(&#39;mousemove&#39;, function (event) {</span></span>
<span class="line"><span>        if (isDragging) {</span></span>
<span class="line"><span>          endX = event.clientX - startX;</span></span>
<span class="line"><span>          endY = event.clientY - startY;</span></span>
<span class="line"><span>          // videoContainer.scrollLeft = offsetX - dx;</span></span>
<span class="line"><span>          // videoContainer.scrollTop = offsetY - dy;</span></span>
<span class="line"><span>          var newX = x - endX;</span></span>
<span class="line"><span>          var newY = y - endY;</span></span>
<span class="line"><span>          if (newX &lt; 0) newX = 0;</span></span>
<span class="line"><span>          if (newY &lt; 0) newY = 0;</span></span>
<span class="line"><span>          if (newX &gt; videoWidth) newX = videoWidth;</span></span>
<span class="line"><span>          if (newY &gt; videoHeight) newY = videoHeight;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          video.style.transformOrigin = newX + &#39;px &#39; + newY + &#39;px&#39;;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      videoContainer.addEventListener(&#39;mouseup&#39;, function () {</span></span>
<span class="line"><span>        x = x - endX;</span></span>
<span class="line"><span>        y = y - endY;</span></span>
<span class="line"><span>        isDragging = false;</span></span>
<span class="line"><span>      });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      videoContainer.addEventListener(&#39;mouseleave&#39;, function () {</span></span>
<span class="line"><span>        x = x - endX;</span></span>
<span class="line"><span>        y = y - endY;</span></span>
<span class="line"><span>        isDragging = false;</span></span>
<span class="line"><span>      });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      // 右键点击放大缩小</span></span>
<span class="line"><span>      videoContainer.addEventListener(&#39;contextmenu&#39;, function (event) {</span></span>
<span class="line"><span>        video.classList.toggle(&#39;video-enlarged&#39;);</span></span>
<span class="line"><span>        event.preventDefault(); // 阻止默认的右键菜单弹出</span></span>
<span class="line"><span>        // 放大后的定位到点击的位置</span></span>
<span class="line"><span>        if (video.classList.contains(&#39;video-enlarged&#39;)) {</span></span>
<span class="line"><span>          var rect = videoContainer.getBoundingClientRect();</span></span>
<span class="line"><span>          x = event.clientX - rect.left;</span></span>
<span class="line"><span>          y = event.clientY - rect.top;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          video.style.transformOrigin = x + &#39;px &#39; + y + &#39;px&#39;;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      // 阻止单点停止/开始播放</span></span>
<span class="line"><span>      video.addEventListener(&#39;click&#39;, function (event) {</span></span>
<span class="line"><span>        event.preventDefault();</span></span>
<span class="line"><span>        event.stopPropagation();</span></span>
<span class="line"><span>      });</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>  &lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br></div></div>`,2),N=JSON.parse('{"title":"点击视频放大","description":"","frontmatter":{},"headers":[],"relativePath":"大前端/前端其它/视频点击放大.md","filePath":"大前端/前端其它/视频点击放大.md","lastUpdated":1727401527000}'),O={name:"大前端/前端其它/视频点击放大.md"},W=Object.assign(O,{setup(t){return(s,p)=>(g(),f("div",null,[P,S,T,k,E(I),B]))}});export{N as __pageData,W as default};
