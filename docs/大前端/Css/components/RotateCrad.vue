<template>
  <div class="box-center pa-4">
    <div class="card-rotate">
      <div class="card-rotate-inner">
        <div class="card-rotate-front">
          <h3 class="card-rotate-title">移动鼠标试试</h3>
          <div class="card-rotate-image primary">这里可以是图片等内容</div>
          <!-- <img src="image.jpg" alt="image" class="card-rotate-image"> -->
        </div>
        <div class="card-rotate-back">
          <p class="card-rotate-text">这是一个使用 CSS 技术的 DEMO。</p>
          <p class="card-rotate-text">这是一个使用 CSS 技术的 DEMO。</p>
          <p class="card-rotate-text">这是一个使用 CSS 技术的 DEMO。</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang='ts'>

</script>
<style lang='scss' scoped>
.card-rotate {
  width: 300px;
  height: 200px;
  perspective: 1000px;
  margin-bottom: 20px;
}

.card-rotate-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease;
  transform-style: preserve-3d;
}

.card-rotate-front,
.card-rotate-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border: 1px solid #eee;
}

.card-rotate-front {
  // background-color: #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card-rotate-title {
  margin: 0;
}

.card-rotate-image {
  width: 150px;
  height: 150px;
  // background-color: #000;
  // object-fit: cover;
  // margin-bottom: 10px;
}

.card-rotate-back {
  transform: rotateY(180deg);
}

.card-rotate:hover .card-rotate-inner {
  transform: rotateY(180deg);
}
</style>
