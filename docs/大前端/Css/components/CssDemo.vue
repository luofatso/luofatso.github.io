<template>
  <!-- 新的 CSS 视口单位 lvh 和 svh -->
  <div class="cube">
    <div class="face front">1</div>
    <div class="face back">2</div>
    <div class="face left">3</div>
    <div class="face right">4</div>
    <div class="face top">5</div>
    <div class="face bottom">6</div>
  </div>

  <!-- 画心 -->
  <div class="heart"></div>

  <!-- 弹跳 -->
  <div class="bounce"></div>

  <!-- 旋转 -->
  <div class="spin"></div>

  <!-- 漂浮文字 -->
  <h1 class="floating">Hello, World!</h1>

  <!-- pulse button -->
  <button class="pulse">Click me!</button>

  <!-- 打字效果 -->
  <p class="typing">Hello, World!</p>

  <!-- 开幕效果 -->
  <div class="curtain">
    <div class="curtain-left"></div>
    <div class="curtain-right"></div>
  </div>

  <!-- 3d 按钮 -->
  <button class="btn btn-3d">Click me</button>

  <!-- 图片放大 -->
  <div class="img-container">
    <img src="../img/grid-auto-flow.png" alt="Image">
  </div>
  
  <!-- 背景图滚动 -->
  <div class="background-image"></div>
</template>
<script setup lang='ts'>

</script>
<style lang='scss' scoped>
// 背景图片动画效果
.background-image {
  background-image: url('../img/grid-auto-flow.png');
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100px;
  position: relative;
  animation: slide 20s linear infinite;
}

@keyframes slide {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-100%);
  }
}
// 背景图片动画效果 end



.img-container {
  position: relative;
  width: 300px;
  height: 200px;
  overflow: hidden;
}

.img-container img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease-in-out;
}

.img-container:hover img {
  transform: scale(1.2);
}

.btn-3d {
  position: relative;
  padding: 10px 20px;
  border: none;
  background-color: orange;
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.btn-3d::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 0;
  background-color: rgba(255, 255, 255, 0.5);
  transform: perspective(1000px) rotateX(-90deg);
  transform-origin: center bottom;
  transition: all 0.2s ease-in-out;
  z-index: -1;
}

.btn-3d:hover {
  transform: translate3d(0, -2px, 0);
}

.btn-3d:hover::before {
  height: 100%;
  transform: perspective(1000px) rotateX(0);
}

.typing {
  overflow: hidden;
  border-right: .15em solid orange;
  white-space: nowrap;
  font-size: 2rem;
  letter-spacing: .15em;
  // animation: typing 3s steps(40, end);
  animation: typing 3s steps(40, end) infinite;
}

@keyframes typing {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}

// 开幕效果 start
.curtain {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.curtain-left,
.curtain-right {
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  background-color: orange;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
}

.curtain-left {
  left: 0;
  animation-name: slide-left;
}

.curtain-right {
  right: 0;
  animation-name: slide-right;
}

@keyframes slide-left {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-100%);
  }
}

@keyframes slide-right {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(100%);
  }
}
// 开幕效果 end

// pulse start
.pulse {
  display: inline-block;
  padding: 12px 24px;
  font-size: 1.5rem;
  color: #ffffff;
  background-color: #4c4c4c;
  border: none;
  border-radius: 50px;
  box-shadow: 0 0 0 rgba(76, 76, 76, 0.4);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0% {
    transform: scale(0.9);
    box-shadow: 0 0 0 0 rgba(76, 76, 76, 0.4);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(76, 76, 76, 0);
  }

  100% {
    transform: scale(0.9);
    box-shadow: 0 0 0 0 rgba(76, 76, 76, 0);
  }
}
// pulse end

// 漂浮文字 start
.floating {
  font-size: 3rem;
  color: #ff9f1a;
  animation: floating 2s ease-in-out infinite;
}

@keyframes floating {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }

  100% {
    transform: translateY(0);
  }
}
// 漂浮文字 end

// 旋转 start
.spin {
  width: 50px;
  height: 50px;
  background-color: #36d7b7;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
// 旋转 end

// 弹跳 start
.bounce {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ff6384;
  animation: bounce 1s infinite;
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-100px);
  }

  100% {
    transform: translateY(0);
  }
}
// 弹跳 end

.heart {
  position: relative;
  width: 100px;
  height: 90px;
}

.heart:before,
.heart:after {
  position: absolute;
  content: "";
  left: 50px;
  top: 0;
  width: 50px;
  height: 80px;
  background-color: red;
  border-radius: 50px 50px 0 0;
  transform: rotate(-45deg);
  transform-origin: 0 100%;
}

.heart:after {
  left: 0;
  transform: rotate(45deg);
  transform-origin: 100% 100%;
}


.cube {
  position: relative;
  margin: 150px auto;
  height: 100px;
  width: 100px;
  transform-style: preserve-3d;
  animation: spin 5s infinite linear;
}

.face {
  position: absolute;
  height: 100px;
  width: 100px;
  line-height: 100px;
  text-align: center;
  font-size: 50px;
  color: white;
  opacity: 0.8;
}

.front {
  transform: translateZ(50px);
  background-color: red;
}

.back {
  transform: translateZ(-50px) rotateY(180deg);
  background-color: blue;
}

.left {
  transform: translateX(-50px) rotateY(-90deg);
  background-color: orange;
}

.right {
  transform: translateX(50px) rotateY(90deg);
  background-color: purple;
}

.top {
  transform: translateY(-50px) rotateX(90deg);
  background-color: yellow;
}

.bottom {
  transform: translateY(50px) rotateX(-90deg);
  background-color: green;
}

@keyframes spin {
  0% {
    transform: rotateY(0deg);
  }

  100% {
    transform: rotateY(360deg);
  }
}</style>
