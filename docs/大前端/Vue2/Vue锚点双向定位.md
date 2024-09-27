# Vue锚点双向定位Demo

```
<template>
  <div class="hello">
    <nav :class="{fix: fix}">
      <ul>
        <li
          v-for="(it, i) in nav"
          :key="i"
          :class="{active: it.is}"
          @click="navTo('.nav'+(i-0+1),i)"
        >{{ it.name }}</li>
      </ul>
    </nav>
    <div class="nav1 box" ref="nav0">111111</div>
    <div class="nav2 box" ref="nav1">222222</div>
    <div class="nav3 box" ref="nav2">333333</div>
    <div class="nav4 box" ref="nav3">444444</div>
    <div class="nav5 box" ref="nav4">555555</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fix: false,
      nav: [
        { is: true, name: "导航一" },
        { is: false, name: "导航二" },
        { is: false, name: "导航三" },
        { is: false, name: "导航四" },
        { is: false, name: "导航五" }
      ]
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      // this.fix = scrollTop > 290 ? true : false;
      if (scrollTop < 290) {
        this.nav[0].is = true;
        this.fix = false;
      } else {
        this.fix = true;
        this.nav.map((it, i) => {
          return (it.is = false);
        });
        for (let i = this.nav.length - 1; i >= 0; i--) {
          if (scrollTop >= this.$refs["nav" + i].offsetTop) {
            this.nav[i].is = true;
            break;
          }
        }
      }
    },
    navTo(querry, i) {
      this.$el.querySelector(querry).scrollIntoView({
        behavior: "smooth", // 平滑过渡
        block: "start" // 上边框与视窗顶部平齐。默认值
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
* {
  padding: 0;
  margin: 0;
}
nav {
  &.fix {
    position: fixed;
    top: 0;
    z-index: 1;
  }
  ul {
    list-style: none;
    display: flex;
    flex-direction: row;

    li {
      height: 50px;
      width: 120px;
      border: 1px solid #000;
      &.active {
        color: red;
      }
    }
  }
}
.box {
  height: 500px;
  border: 1px solid #000;
}
</style>
```
