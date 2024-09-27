# amazon-ivs-videojs-threejs广角修复 DEMO

公司一个管理系统使用了后端渲染，这个是给后端同学写的一个的DEMO

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title></title>
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/video.js/7.14.3/video-js.css"
      rel="stylesheet"
    />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/video.js/7.14.3/video.min.js"></script>
    <script src="https://unpkg.com/three@0.147.0/build/three.min.js"></script>
    <script src="https://unpkg.com/three@0.147.0/examples/js/controls/OrbitControls.js"></script>
    <script src="https://unpkg.com/three@0.147.0/examples/js/loaders/OBJLoader.js"></script>
    <!-- <script src="https://player.live-video.net/1.19.0/amazon-ivs-player.min.js"></script> -->
    <script src="https://player.live-video.net/1.19.0/amazon-ivs-videojs-tech.min.js"></script>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
    />
    <style>
      * {
        margin: 0;
        padding: 0;
      }
      body {
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      #video-player {
        display: none;
      }
      .video-box {
        position: relative;
        width: 65%;
        height: 65vh;
      }
      .my-canvas.flipped-y {
        transform: scaleY(-1);
      }
      .my-canvas.flipped-x {
        transform: scaleX(-1);
      }
      /* 定义播放器工具栏样式 */
      .player-toolbar {
        display: flex;
        height: 60px;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.6);
        color: white;
        z-index: 9;
        align-items: center;
        padding: 0 50px;
        box-sizing: border-box;
        /* display: none;  */
      }

      .player-toolbar > div {
        margin-right: 50px;
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <div class="video-box">
      <video
        id="video-player"
        controls
        autoplay
        playsinline
        crossorigin="anonymous"
      ></video>
    </div>

    <script>
      registerIVSTech(videojs)

      var player = videojs(
        'video-player',
        {
          techOrder: ['AmazonIVS'],
        },
        () => {
          var videoBox = document.querySelector('.video-box')
          var video = document.querySelector('.vjs-tech')
          video.loop = true
          video.muted = true
          video.autoplay = true
          video.playsinline = false
          video.crossOrigin = 'anonymous' // 设置跨域属性

          var scene = new THREE.Scene()
          scene.background = new THREE.Color(0xffffff)

          var camera = new THREE.PerspectiveCamera(
            90,
            videoBox.clientWidth / videoBox.clientHeight,
            0.1,
            1000
          )

          camera.position.set(0, 0, 1) // カメラの位置
          camera.lookAt(0, 0, 0) // 注視点

          var renderer = new THREE.WebGLRenderer()
          renderer.domElement.id = 'myCanvas'
          renderer.domElement.classList.add('my-canvas')

          // 获取渲染器生成的canvas元素
          const canvas = renderer.domElement

          // 创建播放器工具栏的HTML元素
          const playerToolbar = document.createElement('div')
          playerToolbar.classList.add('player-toolbar')

          const playButton = document.createElement('div')
          playButton.classList.add('play')
          playButton.innerHTML = 'Pause'
          playButton.addEventListener('click', togglePlay)

          const mute = document.createElement('div')
          mute.classList.add('mute')
          mute.innerHTML = 'mute-on'
          mute.addEventListener('click', onMute)

          const flippedX = document.createElement('div')
          flippedX.classList.add('flipped-x')
          flippedX.innerHTML = 'flip-x'
          flippedX.addEventListener('click', flipX)

          const flippedY = document.createElement('div')
          flippedY.classList.add('flipped-y')
          flippedY.innerHTML = 'flip-y'
          flippedY.addEventListener('click', flipY)

          const toggleFullscreenBtn = document.createElement('div')
          toggleFullscreenBtn.innerHTML = 'toggleFullscreen'
          toggleFullscreenBtn.addEventListener('click', toggleFullscreen)

          playerToolbar.appendChild(playButton)
          playerToolbar.appendChild(flippedX)
          playerToolbar.appendChild(flippedY)
          playerToolbar.appendChild(mute)
          playerToolbar.appendChild(toggleFullscreenBtn)
          videoBox.appendChild(playerToolbar)

          renderer.setSize(videoBox.clientWidth, videoBox.clientHeight)
          videoBox.appendChild(renderer.domElement)

          var texture = new THREE.VideoTexture(video)
          var material = new THREE.MeshBasicMaterial({ map: texture })
          var objLoader = new THREE.OBJLoader()
          var mesh = null
          objLoader.load('./V2_fishlens_timestamp.obj', function (obj) {
            obj.traverse(function (child) {
              if (child.isMesh) child.material = material
            })
            mesh = obj
            mesh.rotation.x = Math.PI / 1
            mesh.rotation.z = Math.PI / 2
            mesh.scale.y = -(16 / 9)
            mesh.position.x = 0
            mesh.position.y = 0
            mesh.position.z = 0
            scene.add(mesh)
          })

          function animate() {
            requestAnimationFrame(animate)
            renderer.render(scene, camera)
          }

          // var hls_url = 'https://n24-cdn-live.ntv.co.jp/ch01/index.m3u8'
          var hls_url =
            'https://stream7.iqilu.com/10339/upload_transcode/202002/18/20200218093206z8V1JuPlpe.mp4'
          player.src({
            src: hls_url,
            type: 'video/mp4',
            crossorigin: 'anonymous',
          })
          player.play()
          animate()

          // 监听窗口大小改变事件
          window.addEventListener('resize', function () {
            // 在窗口大小改变时更新Canvas的大小
            renderer.setSize(videoBox.clientWidth, videoBox.clientHeight)
            camera.aspect = videoBox.clientWidth / videoBox.clientHeight
            camera.updateProjectionMatrix()
          })

          // 示例点击播放/暂停按钮的功能
          let isPlaying = false
          function togglePlay() {
            isPlaying = !isPlaying
            if (isPlaying) {
              playButton.innerHTML = 'Pause'
              // 开始播放视频
              player.play()
            } else {
              playButton.innerHTML = 'Play'
              // 暂停视频
              player.pause()
            }
          }

          // 控制Canvas翻转状态的变量
          let isFlippedY = false
          let isFlippedX = false
          let isMute = true

          // 上下翻转函数
          function flipY() {
            document.getElementById('myCanvas').classList.toggle('flipped-y')
            isFlippedY = !isFlippedY
          }

          // 左右翻转函数
          function flipX() {
            document.getElementById('myCanvas').classList.toggle('flipped-x')
            isFlippedX = !isFlippedX
          }

          function onMute() {
            if (isMute) {
              video.muted = false
              mute.innerHTML = 'mute-off'
            } else {
              video.muted = true
              mute.innerHTML = 'mute-on'
            }
            isMute = !isMute
          }

          function toggleFullscreen() {
            if (!document.fullscreenElement) {
              // 如果当前没有元素处于全屏状态
              if (videoBox.requestFullscreen) {
                videoBox.requestFullscreen() // W3C标准方法
              } else if (videoBox.mozRequestFullScreen) {
                /* Firefox */
                videoBox.mozRequestFullScreen() // Firefox特有方法
              } else if (videoBox.webkitRequestFullscreen) {
                /* Chrome, Safari & Opera */
                videoBox.webkitRequestFullscreen() // Webkit引擎浏览器特有方法
              } else if (videoBox.msRequestFullscreen) {
                /* IE/Edge */
                videoBox.msRequestFullscreen() // IE/Edge特有方法
              }
            } else {
              if (document.exitFullscreen) {
                document.exitFullscreen() // 退出全屏
              } else if (document.mozCancelFullScreen) {
                /* Firefox */
                document.mozCancelFullScreen() // Firefox特有方法
              } else if (document.webkitExitFullscreen) {
                /* Chrome, Safari & Opera */
                document.webkitExitFullscreen() // Webkit引擎浏览器特有方法
              } else if (document.msExitFullscreen) {
                /* IE/Edge */
                document.msExitFullscreen() // IE/Edge特有方法
              }
            }
          }

          var statusBar = document.querySelector('.player-toolbar');
          var setTimeoutTools;

          function mouseHandle(flag) {
            if (setTimeoutTools) clearTimeout(setTimeoutTools);
            statusBar.style.opacity = '0.8'
            if(statusBar.parentElement.querySelector(':hover') !== statusBar || flag)
            setTimeoutTools = setTimeout(() => {
              statusBar.style.opacity = 0;
            }, 3000)
          }

          videoBox.addEventListener('mousemove', function(){
            mouseHandle(false)
          });
          videoBox.addEventListener('mouseout', function(){
            mouseHandle(true)
          });
        }
      )
    </script>
  </body>
</html>
```
