<template>
  <div class="home">
    <div class="home-top">
      <h1 clas>FatsoLuo</h1>
      <p>不喜欢代码，想自由。</p>
      <p>但，谁又不是，</p>
      <p>生活在不一样的‘牢笼’之中呢</p>
    </div>
    <div class="home-main">
      <p>《追光者》</p>
      <pre>
        那些遥遥无期
        混沌颠倒
        满眼是光
        又憧憬着
        数着过的时间里

        时间若鸿沟
        是从未感知
        是从未拥有过的

        其实早已悄然
        书写画描
        藏酝酵酿
    
        奇迹不待
        花开自然
        只需静待
        </pre>
    </div>
  </div>
</template>
<script setup>


</script>
<style>
::-webkit-scrollbar {
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
}

/* ::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-corner {
  background: none;
}

::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background: #8D8D8D;
} */
.box-center{
  display: flex;
  align-items: center;
  justify-content: center;
}
.d-flex{
  display: flex;
}
.flex-col{
  flex-direction: column;
}
</style>
<style scoped lang="scss">
.home {
  &-top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 64px);
    background: no-repeat url('/bg.jpeg') center / cover;
    color: #fff;

    h1 {
      font-size: 48px;
      line-height: 64px;
      font-weight: 700;
      padding-bottom: 10px;
    }

    p {
      line-height: 2;
    }
  }

  &-main {
    width: 65%;
    margin: 0 auto;
    /* text-indent: 2em; */
    padding-top: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
