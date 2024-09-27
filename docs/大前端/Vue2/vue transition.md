# vue transition

Vue 提供了 transition 的封装组件,在下列情形中，可以给任何元素和组件添加进入/离开过渡:

- 在 CSS 过渡和动画中自动应用 class
- 可以配合使用第三方 CSS 动画库，如 Animate.css
- 在过渡钩子函数中使用 JavaScript 直接操作 DOM
- 可以配合使用第三方 JavaScript 动画库，如 Velocity.js

上述为官网原话，为了不成官网的搬用工，我就按自己的思路整理就记录，其实简单理解就是进入和离开的时候他会在相应的时间给你加上 css 的动画。

### 基础用法

```
<div id="demo">
  <button @click="show = !show">
    Toggle
  </button>
  <transition name="fade">
    <p v-if="show">hello</p>
  </transition>
</div>

new Vue({
  el: '#demo',
  data: {
    show: true
  }
})

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
```

### 列表用法

```
<transition-group tag="ul" name="list">
  <li v-for="(it, i) in 10" :key="i">{{it}}</li>
</transition-group>

.list-enter-active,
.list-leave-active {
  transition: all 0.5s;
}
.list-enter,
.list-leave-to {
  transform: translateX(100%);
}
```

### Animate.css使用

```
<transition enter-active-class="slideInUp" leave-active-class="slideOutDown">
  <div class="animated">
    ...
  </div>
</transition>
```

### 拓展

vue组件切换动画库 transx

### 路由切换动画

```
<transition :name="transitionName">
  <router-view></router-view>
</transition>

watch: {
  //使用watch 监听$router的变化
  $route(to, from) {
    //如果to索引大于from索引,判断为前进状态,反之则为后退状态
    console.log(to, "to");
    console.log(from, "from");
    if (to.meta.index > from.meta.index) {
      //设置动画名称
      this.transitionName = "slide-left";
    } else {
      this.transitionName = "slide-right";
    }
  },
},

.slide-right-enter-active, .slide-right-leave-active, .slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}

.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

// 如果to索引大于from索引,使用前进的动画,反之使用后退的动画。
const Help = () => import("./Help.vue");
export default {
  path: "/help",
  name: "help",
  component: Help,
  meta: {
    index: 8,
  },
};
const StaffCard = () => import("./StaffCard.vue");
export default {
  path: "/staff-card",
  name: "staff-card",
  component: StaffCard,
  meta: {
    index: 9,
  },
};
```
