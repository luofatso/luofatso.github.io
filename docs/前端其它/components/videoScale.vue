import { onMounted } from 'vue';
<template>
  <div class="box">
    <div id="videoContainer">
      <video id="myVideo" src="https://media.w3.org/2010/05/sintel/trailer.mp4" controls playsinline></video>
    </div>
  </div>
</template>
<script setup lang='ts'>
import { ref, onMounted, watch } from 'vue'

const loadScript = (url: string) => {
  return new Promise<void>((resolve, reject) => {
    const script = document.createElement('script')
    script.src = url

    script.onload = () => {
      resolve()
    }

    script.onerror = () => {
      reject(new Error('Failed to load script.'))
    }

    document.head.appendChild(script)
  })
}

loadScript('https://player.live-video.net/1.14.0/amazon-ivs-player.min.js')


onMounted(() => {
  const videoContainer: any = document.getElementById('videoContainer');
  const video:any = document.getElementById('myVideo');
  let isDragging = false;
  let startX, startY, x, y, endX, endY;
  var videoWidth = videoContainer.offsetWidth,
    videoHeight = videoContainer.offsetHeight;

  // 计算移动位置
  videoContainer.addEventListener('mousedown', function (event) {
    isDragging = true;
    startX = event.clientX;
    startY = event.clientY;
  });

  videoContainer.addEventListener('mousemove', function (event) {
    if (isDragging) {
      endX = event.clientX - startX;
      endY = event.clientY - startY;
      // videoContainer.scrollLeft = offsetX - dx;
      // videoContainer.scrollTop = offsetY - dy;
      var newX = x - endX;
      var newY = y - endY;
      if (newX < 0) newX = 0;
      if (newY < 0) newY = 0;
      if (newX > videoWidth) newX = videoWidth;
      if (newY > videoHeight) newY = videoHeight;

      video.style.transformOrigin = newX + 'px ' + newY + 'px';
    }
  });

  videoContainer.addEventListener('mouseup', function () {
    x = x - endX;
    y = y - endY;
    isDragging = false;
  });

  videoContainer.addEventListener('mouseleave', function () {
    x = x - endX;
    y = y - endY;
    isDragging = false;
  });

  // 右键点击放大缩小
  videoContainer.addEventListener('contextmenu', function (event) {
    video.classList.toggle('video-enlarged');
    event.preventDefault(); // 阻止默认的右键菜单弹出
    // 放大后的定位到点击的位置
    if (video.classList.contains('video-enlarged')) {
      var rect = videoContainer.getBoundingClientRect();
      x = event.clientX - rect.left;
      y = event.clientY - rect.top;

      video.style.transformOrigin = x + 'px ' + y + 'px';
    }
  });

  // 阻止单点停止/开始播放
  video.addEventListener('click', function (event) {
    event.preventDefault();
    event.stopPropagation();
  });
})
</script>
<style lang='scss' scoped>
.box {
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;

  #videoContainer {
    width: 800px;
    height: 400px;
    overflow: hidden;
    position: relative;
    /* border: 1px solid; */
  }

  #myVideo {
    width: 100%;
    height: 100%;
    transition: transform 0.3s;
  }

  #myVideo.video-enlarged {
    transform: scale(4);
    transform-origin: top left;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
  }
}
</style>
