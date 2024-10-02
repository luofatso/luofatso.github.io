<template>
  <section class="home-page home-start">
    <h1 class="blog-author" title="LuoFatso">LuoFatso</h1>
    <p>道阻且长，行则将至</p>
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
.home-start {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: no-repeat url('/bg.jpeg') center / cover;
  color: #fff;

  h1 {
    font-size: 48px;
    line-height: 64px;
    font-weight: 700;
    padding-bottom: 10px;

    filter: blur(10px);
    letter-spacing: -3rem;
    -webkit-text-stroke: 1px black;
    animation:
      glitch 1s 0.5s linear infinite,
      expand 1s forwards;
  }

  p {
    line-height: 2;
  }
}
.home-page {
  height: calc(100vh - 64px);
  box-sizing: border-box;
}

.blog-author:before,
.blog-author:after {
  content: attr(title);
  position: absolute;
  left: 0;
}

.blog-author:before {
  animation: glitchTop 1s 0.5s linear infinite;
  clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
}

.blog-author:after {
  animation: glitchBotom 1.5s 0.5s linear infinite;
  clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
}

@keyframes expand {
  to {
    letter-spacing: 0.4rem;
    filter: blur(0px);
  }
}

@keyframes glitch {
  2%,
  64% {
    transform: translate(2px, 0) skew(0deg);
  }

  4%,
  60% {
    transform: translate(-2px, 0) skew(0deg);
  }

  62% {
    transform: translate(0, 0) skew(5deg);
  }
}

@keyframes glitchTop {
  2%,
  64% {
    transform: translate(2px, -2px);
  }

  4%,
  60% {
    transform: translate(-2px, 2px);
  }

  62% {
    transform: translate(13px, -1px) skew(-13deg);
  }
}

@keyframes glitchBotom {
  2%,
  64% {
    transform: translate(-2px, 0);
  }

  4%,
  60% {
    transform: translate(-2px, 0);
  }

  62% {
    transform: translate(-22px, 5px) skew(21deg);
  }
}
</style>
