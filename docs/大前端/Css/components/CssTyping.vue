<template>
  <div class="box-center typing">
    <div class="auto-typing">welcome to css autotyper!</div>
  </div>
</template>
<script setup lang='ts'>

</script>
<style lang='scss' scoped>
.typing {
  height: 300px;

  @mixin typing($count: 0, $duration: 0, $delay: 0) {
    line-height: 1em;
    overflow: hidden;
    border-right: 1px solid transparent;
    width: #{$count + 1}ch;
    font-family: Consolas, Monaco, monospace;
    white-space: nowrap;
    animation: typing #{$duration}s steps($count + 1) #{$delay}s infinite backwards,
    caret 500ms steps(1) #{$delay}s infinite forwards;
  }

  .auto-typing {
    font-weight: bold;
    font-size: 30px;
    color: #09f;
    @include typing(25, 5);
  }

  @keyframes caret {
    50% {
      border-right-color: currentColor;
    }
  }

  @keyframes typing {
    from {
      width: 0;
    }
  }
}</style>
