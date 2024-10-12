import{_ as s,o as n,c as a,a2 as p}from"./chunks/framework.DkMK-_fX.js";const v=JSON.parse('{"title":"amazon-ivs-videojs-threejs广角修复 DEMO","description":"","frontmatter":{},"headers":[],"relativePath":"大前端/前端其它/amazon-ivs-videojs-threejs广角修复.md","filePath":"大前端/前端其它/amazon-ivs-videojs-threejs广角修复.md","lastUpdated":1728700067000}'),e={name:"大前端/前端其它/amazon-ivs-videojs-threejs广角修复.md"},l=p(`<h1 id="amazon-ivs-videojs-threejs广角修复-demo" tabindex="-1">amazon-ivs-videojs-threejs广角修复 DEMO <a class="header-anchor" href="#amazon-ivs-videojs-threejs广角修复-demo" aria-label="Permalink to &quot;amazon-ivs-videojs-threejs广角修复 DEMO&quot;">​</a></h1><p>公司一个管理系统使用了后端渲染，这个是给后端同学写的一个的DEMO</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html&gt;</span></span>
<span class="line"><span>  &lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot; /&gt;</span></span>
<span class="line"><span>    &lt;title&gt;&lt;/title&gt;</span></span>
<span class="line"><span>    &lt;link</span></span>
<span class="line"><span>      href=&quot;https://cdnjs.cloudflare.com/ajax/libs/video.js/7.14.3/video-js.css&quot;</span></span>
<span class="line"><span>      rel=&quot;stylesheet&quot;</span></span>
<span class="line"><span>    /&gt;</span></span>
<span class="line"><span>    &lt;script src=&quot;https://cdnjs.cloudflare.com/ajax/libs/video.js/7.14.3/video.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>    &lt;script src=&quot;https://unpkg.com/three@0.147.0/build/three.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>    &lt;script src=&quot;https://unpkg.com/three@0.147.0/examples/js/controls/OrbitControls.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>    &lt;script src=&quot;https://unpkg.com/three@0.147.0/examples/js/loaders/OBJLoader.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>    &lt;!-- &lt;script src=&quot;https://player.live-video.net/1.19.0/amazon-ivs-player.min.js&quot;&gt;&lt;/script&gt; --&gt;</span></span>
<span class="line"><span>    &lt;script src=&quot;https://player.live-video.net/1.19.0/amazon-ivs-videojs-tech.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>    &lt;link</span></span>
<span class="line"><span>      rel=&quot;stylesheet&quot;</span></span>
<span class="line"><span>      href=&quot;https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css&quot;</span></span>
<span class="line"><span>    /&gt;</span></span>
<span class="line"><span>    &lt;style&gt;</span></span>
<span class="line"><span>      * {</span></span>
<span class="line"><span>        margin: 0;</span></span>
<span class="line"><span>        padding: 0;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      body {</span></span>
<span class="line"><span>        width: 100vw;</span></span>
<span class="line"><span>        height: 100vh;</span></span>
<span class="line"><span>        display: flex;</span></span>
<span class="line"><span>        align-items: center;</span></span>
<span class="line"><span>        justify-content: center;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      #video-player {</span></span>
<span class="line"><span>        display: none;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      .video-box {</span></span>
<span class="line"><span>        position: relative;</span></span>
<span class="line"><span>        width: 65%;</span></span>
<span class="line"><span>        height: 65vh;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      .my-canvas.flipped-y {</span></span>
<span class="line"><span>        transform: scaleY(-1);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      .my-canvas.flipped-x {</span></span>
<span class="line"><span>        transform: scaleX(-1);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      /* 定义播放器工具栏样式 */</span></span>
<span class="line"><span>      .player-toolbar {</span></span>
<span class="line"><span>        display: flex;</span></span>
<span class="line"><span>        height: 60px;</span></span>
<span class="line"><span>        width: 100%;</span></span>
<span class="line"><span>        position: absolute;</span></span>
<span class="line"><span>        bottom: 0;</span></span>
<span class="line"><span>        left: 0;</span></span>
<span class="line"><span>        background-color: rgba(0, 0, 0, 0.6);</span></span>
<span class="line"><span>        color: white;</span></span>
<span class="line"><span>        z-index: 9;</span></span>
<span class="line"><span>        align-items: center;</span></span>
<span class="line"><span>        padding: 0 50px;</span></span>
<span class="line"><span>        box-sizing: border-box;</span></span>
<span class="line"><span>        /* display: none;  */</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      .player-toolbar &gt; div {</span></span>
<span class="line"><span>        margin-right: 50px;</span></span>
<span class="line"><span>        cursor: pointer;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    &lt;/style&gt;</span></span>
<span class="line"><span>  &lt;/head&gt;</span></span>
<span class="line"><span>  &lt;body&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;video-box&quot;&gt;</span></span>
<span class="line"><span>      &lt;video</span></span>
<span class="line"><span>        id=&quot;video-player&quot;</span></span>
<span class="line"><span>        controls</span></span>
<span class="line"><span>        autoplay</span></span>
<span class="line"><span>        playsinline</span></span>
<span class="line"><span>        crossorigin=&quot;anonymous&quot;</span></span>
<span class="line"><span>      &gt;&lt;/video&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>      registerIVSTech(videojs)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      var player = videojs(</span></span>
<span class="line"><span>        &#39;video-player&#39;,</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>          techOrder: [&#39;AmazonIVS&#39;],</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        () =&gt; {</span></span>
<span class="line"><span>          var videoBox = document.querySelector(&#39;.video-box&#39;)</span></span>
<span class="line"><span>          var video = document.querySelector(&#39;.vjs-tech&#39;)</span></span>
<span class="line"><span>          video.loop = true</span></span>
<span class="line"><span>          video.muted = true</span></span>
<span class="line"><span>          video.autoplay = true</span></span>
<span class="line"><span>          video.playsinline = false</span></span>
<span class="line"><span>          video.crossOrigin = &#39;anonymous&#39; // 设置跨域属性</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          var scene = new THREE.Scene()</span></span>
<span class="line"><span>          scene.background = new THREE.Color(0xffffff)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          var camera = new THREE.PerspectiveCamera(</span></span>
<span class="line"><span>            90,</span></span>
<span class="line"><span>            videoBox.clientWidth / videoBox.clientHeight,</span></span>
<span class="line"><span>            0.1,</span></span>
<span class="line"><span>            1000</span></span>
<span class="line"><span>          )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          camera.position.set(0, 0, 1) // カメラの位置</span></span>
<span class="line"><span>          camera.lookAt(0, 0, 0) // 注視点</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          var renderer = new THREE.WebGLRenderer()</span></span>
<span class="line"><span>          renderer.domElement.id = &#39;myCanvas&#39;</span></span>
<span class="line"><span>          renderer.domElement.classList.add(&#39;my-canvas&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          // 获取渲染器生成的canvas元素</span></span>
<span class="line"><span>          const canvas = renderer.domElement</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          // 创建播放器工具栏的HTML元素</span></span>
<span class="line"><span>          const playerToolbar = document.createElement(&#39;div&#39;)</span></span>
<span class="line"><span>          playerToolbar.classList.add(&#39;player-toolbar&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          const playButton = document.createElement(&#39;div&#39;)</span></span>
<span class="line"><span>          playButton.classList.add(&#39;play&#39;)</span></span>
<span class="line"><span>          playButton.innerHTML = &#39;Pause&#39;</span></span>
<span class="line"><span>          playButton.addEventListener(&#39;click&#39;, togglePlay)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          const mute = document.createElement(&#39;div&#39;)</span></span>
<span class="line"><span>          mute.classList.add(&#39;mute&#39;)</span></span>
<span class="line"><span>          mute.innerHTML = &#39;mute-on&#39;</span></span>
<span class="line"><span>          mute.addEventListener(&#39;click&#39;, onMute)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          const flippedX = document.createElement(&#39;div&#39;)</span></span>
<span class="line"><span>          flippedX.classList.add(&#39;flipped-x&#39;)</span></span>
<span class="line"><span>          flippedX.innerHTML = &#39;flip-x&#39;</span></span>
<span class="line"><span>          flippedX.addEventListener(&#39;click&#39;, flipX)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          const flippedY = document.createElement(&#39;div&#39;)</span></span>
<span class="line"><span>          flippedY.classList.add(&#39;flipped-y&#39;)</span></span>
<span class="line"><span>          flippedY.innerHTML = &#39;flip-y&#39;</span></span>
<span class="line"><span>          flippedY.addEventListener(&#39;click&#39;, flipY)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          const toggleFullscreenBtn = document.createElement(&#39;div&#39;)</span></span>
<span class="line"><span>          toggleFullscreenBtn.innerHTML = &#39;toggleFullscreen&#39;</span></span>
<span class="line"><span>          toggleFullscreenBtn.addEventListener(&#39;click&#39;, toggleFullscreen)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          playerToolbar.appendChild(playButton)</span></span>
<span class="line"><span>          playerToolbar.appendChild(flippedX)</span></span>
<span class="line"><span>          playerToolbar.appendChild(flippedY)</span></span>
<span class="line"><span>          playerToolbar.appendChild(mute)</span></span>
<span class="line"><span>          playerToolbar.appendChild(toggleFullscreenBtn)</span></span>
<span class="line"><span>          videoBox.appendChild(playerToolbar)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          renderer.setSize(videoBox.clientWidth, videoBox.clientHeight)</span></span>
<span class="line"><span>          videoBox.appendChild(renderer.domElement)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          var texture = new THREE.VideoTexture(video)</span></span>
<span class="line"><span>          var material = new THREE.MeshBasicMaterial({ map: texture })</span></span>
<span class="line"><span>          var objLoader = new THREE.OBJLoader()</span></span>
<span class="line"><span>          var mesh = null</span></span>
<span class="line"><span>          objLoader.load(&#39;./V2_fishlens_timestamp.obj&#39;, function (obj) {</span></span>
<span class="line"><span>            obj.traverse(function (child) {</span></span>
<span class="line"><span>              if (child.isMesh) child.material = material</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>            mesh = obj</span></span>
<span class="line"><span>            mesh.rotation.x = Math.PI / 1</span></span>
<span class="line"><span>            mesh.rotation.z = Math.PI / 2</span></span>
<span class="line"><span>            mesh.scale.y = -(16 / 9)</span></span>
<span class="line"><span>            mesh.position.x = 0</span></span>
<span class="line"><span>            mesh.position.y = 0</span></span>
<span class="line"><span>            mesh.position.z = 0</span></span>
<span class="line"><span>            scene.add(mesh)</span></span>
<span class="line"><span>          })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          function animate() {</span></span>
<span class="line"><span>            requestAnimationFrame(animate)</span></span>
<span class="line"><span>            renderer.render(scene, camera)</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          // var hls_url = &#39;https://n24-cdn-live.ntv.co.jp/ch01/index.m3u8&#39;</span></span>
<span class="line"><span>          var hls_url =</span></span>
<span class="line"><span>            &#39;https://stream7.iqilu.com/10339/upload_transcode/202002/18/20200218093206z8V1JuPlpe.mp4&#39;</span></span>
<span class="line"><span>          player.src({</span></span>
<span class="line"><span>            src: hls_url,</span></span>
<span class="line"><span>            type: &#39;video/mp4&#39;,</span></span>
<span class="line"><span>            crossorigin: &#39;anonymous&#39;,</span></span>
<span class="line"><span>          })</span></span>
<span class="line"><span>          player.play()</span></span>
<span class="line"><span>          animate()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          // 监听窗口大小改变事件</span></span>
<span class="line"><span>          window.addEventListener(&#39;resize&#39;, function () {</span></span>
<span class="line"><span>            // 在窗口大小改变时更新Canvas的大小</span></span>
<span class="line"><span>            renderer.setSize(videoBox.clientWidth, videoBox.clientHeight)</span></span>
<span class="line"><span>            camera.aspect = videoBox.clientWidth / videoBox.clientHeight</span></span>
<span class="line"><span>            camera.updateProjectionMatrix()</span></span>
<span class="line"><span>          })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          // 示例点击播放/暂停按钮的功能</span></span>
<span class="line"><span>          let isPlaying = false</span></span>
<span class="line"><span>          function togglePlay() {</span></span>
<span class="line"><span>            isPlaying = !isPlaying</span></span>
<span class="line"><span>            if (isPlaying) {</span></span>
<span class="line"><span>              playButton.innerHTML = &#39;Pause&#39;</span></span>
<span class="line"><span>              // 开始播放视频</span></span>
<span class="line"><span>              player.play()</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>              playButton.innerHTML = &#39;Play&#39;</span></span>
<span class="line"><span>              // 暂停视频</span></span>
<span class="line"><span>              player.pause()</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          // 控制Canvas翻转状态的变量</span></span>
<span class="line"><span>          let isFlippedY = false</span></span>
<span class="line"><span>          let isFlippedX = false</span></span>
<span class="line"><span>          let isMute = true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          // 上下翻转函数</span></span>
<span class="line"><span>          function flipY() {</span></span>
<span class="line"><span>            document.getElementById(&#39;myCanvas&#39;).classList.toggle(&#39;flipped-y&#39;)</span></span>
<span class="line"><span>            isFlippedY = !isFlippedY</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          // 左右翻转函数</span></span>
<span class="line"><span>          function flipX() {</span></span>
<span class="line"><span>            document.getElementById(&#39;myCanvas&#39;).classList.toggle(&#39;flipped-x&#39;)</span></span>
<span class="line"><span>            isFlippedX = !isFlippedX</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          function onMute() {</span></span>
<span class="line"><span>            if (isMute) {</span></span>
<span class="line"><span>              video.muted = false</span></span>
<span class="line"><span>              mute.innerHTML = &#39;mute-off&#39;</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>              video.muted = true</span></span>
<span class="line"><span>              mute.innerHTML = &#39;mute-on&#39;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            isMute = !isMute</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          function toggleFullscreen() {</span></span>
<span class="line"><span>            if (!document.fullscreenElement) {</span></span>
<span class="line"><span>              // 如果当前没有元素处于全屏状态</span></span>
<span class="line"><span>              if (videoBox.requestFullscreen) {</span></span>
<span class="line"><span>                videoBox.requestFullscreen() // W3C标准方法</span></span>
<span class="line"><span>              } else if (videoBox.mozRequestFullScreen) {</span></span>
<span class="line"><span>                /* Firefox */</span></span>
<span class="line"><span>                videoBox.mozRequestFullScreen() // Firefox特有方法</span></span>
<span class="line"><span>              } else if (videoBox.webkitRequestFullscreen) {</span></span>
<span class="line"><span>                /* Chrome, Safari &amp; Opera */</span></span>
<span class="line"><span>                videoBox.webkitRequestFullscreen() // Webkit引擎浏览器特有方法</span></span>
<span class="line"><span>              } else if (videoBox.msRequestFullscreen) {</span></span>
<span class="line"><span>                /* IE/Edge */</span></span>
<span class="line"><span>                videoBox.msRequestFullscreen() // IE/Edge特有方法</span></span>
<span class="line"><span>              }</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>              if (document.exitFullscreen) {</span></span>
<span class="line"><span>                document.exitFullscreen() // 退出全屏</span></span>
<span class="line"><span>              } else if (document.mozCancelFullScreen) {</span></span>
<span class="line"><span>                /* Firefox */</span></span>
<span class="line"><span>                document.mozCancelFullScreen() // Firefox特有方法</span></span>
<span class="line"><span>              } else if (document.webkitExitFullscreen) {</span></span>
<span class="line"><span>                /* Chrome, Safari &amp; Opera */</span></span>
<span class="line"><span>                document.webkitExitFullscreen() // Webkit引擎浏览器特有方法</span></span>
<span class="line"><span>              } else if (document.msExitFullscreen) {</span></span>
<span class="line"><span>                /* IE/Edge */</span></span>
<span class="line"><span>                document.msExitFullscreen() // IE/Edge特有方法</span></span>
<span class="line"><span>              }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          var statusBar = document.querySelector(&#39;.player-toolbar&#39;);</span></span>
<span class="line"><span>          var setTimeoutTools;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          function mouseHandle(flag) {</span></span>
<span class="line"><span>            if (setTimeoutTools) clearTimeout(setTimeoutTools);</span></span>
<span class="line"><span>            statusBar.style.opacity = &#39;0.8&#39;</span></span>
<span class="line"><span>            if(statusBar.parentElement.querySelector(&#39;:hover&#39;) !== statusBar || flag)</span></span>
<span class="line"><span>            setTimeoutTools = setTimeout(() =&gt; {</span></span>
<span class="line"><span>              statusBar.style.opacity = 0;</span></span>
<span class="line"><span>            }, 3000)</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          videoBox.addEventListener(&#39;mousemove&#39;, function(){</span></span>
<span class="line"><span>            mouseHandle(false)</span></span>
<span class="line"><span>          });</span></span>
<span class="line"><span>          videoBox.addEventListener(&#39;mouseout&#39;, function(){</span></span>
<span class="line"><span>            mouseHandle(true)</span></span>
<span class="line"><span>          });</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      )</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>  &lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br><span class="line-number">238</span><br><span class="line-number">239</span><br><span class="line-number">240</span><br><span class="line-number">241</span><br><span class="line-number">242</span><br><span class="line-number">243</span><br><span class="line-number">244</span><br><span class="line-number">245</span><br><span class="line-number">246</span><br><span class="line-number">247</span><br><span class="line-number">248</span><br><span class="line-number">249</span><br><span class="line-number">250</span><br><span class="line-number">251</span><br><span class="line-number">252</span><br><span class="line-number">253</span><br><span class="line-number">254</span><br><span class="line-number">255</span><br><span class="line-number">256</span><br><span class="line-number">257</span><br><span class="line-number">258</span><br><span class="line-number">259</span><br><span class="line-number">260</span><br><span class="line-number">261</span><br><span class="line-number">262</span><br><span class="line-number">263</span><br><span class="line-number">264</span><br><span class="line-number">265</span><br><span class="line-number">266</span><br><span class="line-number">267</span><br><span class="line-number">268</span><br><span class="line-number">269</span><br><span class="line-number">270</span><br><span class="line-number">271</span><br><span class="line-number">272</span><br><span class="line-number">273</span><br><span class="line-number">274</span><br><span class="line-number">275</span><br><span class="line-number">276</span><br><span class="line-number">277</span><br><span class="line-number">278</span><br><span class="line-number">279</span><br><span class="line-number">280</span><br><span class="line-number">281</span><br><span class="line-number">282</span><br><span class="line-number">283</span><br><span class="line-number">284</span><br><span class="line-number">285</span><br><span class="line-number">286</span><br><span class="line-number">287</span><br><span class="line-number">288</span><br><span class="line-number">289</span><br><span class="line-number">290</span><br><span class="line-number">291</span><br><span class="line-number">292</span><br><span class="line-number">293</span><br></div></div>`,3),i=[l];function r(c,b,t,u,m,o){return n(),a("div",null,i)}const h=s(e,[["render",r]]);export{v as __pageData,h as default};
