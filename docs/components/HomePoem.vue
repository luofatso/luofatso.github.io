<template>
  <section class="home-page home-poem">
    <p class="font-18 title pb-4">
      <a href="/个人随笔/梦呓/追光者">《追光者》</a>
    </p>
    <div class="pt-6 pl-18">
      <p>那些混沌颠倒</p>
      <p>是熬啊 是数着</p>
      <p>满眼盈溢着的星光</p>
      <p>是憧憬 是过往</p>
      <p>期盼着过的时间里</p>

      <p class="pt-8">时间若鸿沟</p>
      <p>是从未感知</p>
      <p>从未拥有过的 温情</p>

      <p class="pt-8">其实早已悄然</p>
      <p>书写画描</p>
      <p>藏酝酵酿</p>

      <p class="pt-8">花开不待</p>
      <p>奇迹自然</p>

      <p class="font-14 pt-6 pl-8">
        2023-2-23
        <a href="/about">LuoFatso</a>
      </p>
    </div>
  </section>
</template>
<script setup></script>
<style scoped lang="scss">
.vp-doc p {
  line-height: normal;
  margin: 0;
}
.vp-doc h2 {
  border: none;
}
.home-page {
  height: calc(100vh - 64px);
  box-sizing: border-box;
}
.home-poem {
  width: 65%;
  margin: 0 auto;
  /* text-indent: 2em; */
  // padding-top: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .author {
    padding-left: 30px;
    margin-top: -30px;
  }
  pre {
    margin-left: -25px;
  }
  p {
    padding: 3px 0;
  }
}
</style>
