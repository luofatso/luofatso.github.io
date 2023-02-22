<template>
  <div class="home">
    <div class="home-top">
      <h1>FatsoLuo</h1>
      <p>不喜欢代码，想自由。</p>
    </div>
    <div class="home-main">
      <p>
        越是期盼，越是数着过的日子，往往都是遥遥无期的、索然无味的；在那短短的一个月里，是我当时感知的那种从未有过的、无法逾越的日期鸿沟；那是自我两第一次见面分开后，我们决定一起再相遇北京的一个月，是期待与煎熬携手书写画描心动的一月，是酷暑与激情并肩藏酝酵酿爱情的一月。
      </p>
    </div>
  </div>
</template>
<script setup>


</script>
<style>
/* ::-webkit-scrollbar {
  width: 8px;
  height: 0;
  background: #fff;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.2);
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background: rgba(0, 0, 0, 0.1);
} */

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-corner {
  background: none;
}

::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background: #8D8D8D;
}

.home-top {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 64px);
  background: no-repeat url('/bg.jpeg') center / cover;
  color: #fff;
}

.home-top h1 {
  font-size: 48px;
  line-height: 64px;
  font-weight: 700;
  padding-bottom: 10px;
}

.home-main {
  width: 65%;
  margin: 0 auto;
  text-indent: 2em;
  padding-top: 200px;
}
</style>
