<template>
  <div class="home vp-doc">
    <div class="home-top">
      <h1 clas>FatsoLuo</h1>
      <p>道阻且长，行则将至</p>
    </div>
    <div class="home-main">
      <p class="font-18 title pb-4">
        <a href="/个人随笔/梦呓/追光者">《追光者》</a>
      </p>
      <pre>
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

        <p class="font-14 author">
          2023-2-23
          <a href="/about">FatsoLuo</a>
        </p>
      </pre>
    </div>
  </div>
</template>
<script setup></script>
<style scoped lang="scss">
.vp-doc p {
  line-height: normal;
  margin: 0;
}
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
    .author {
      padding-left: 30px;
      margin-top: -30px;
    }
    pre {
      margin-left: -25px;
    }
  }
}
</style>
