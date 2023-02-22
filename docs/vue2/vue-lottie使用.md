# vue-lottie 使用记录

```
yarn add vue-lottie

// main.js
Vue.component('lottie', lottie);

// 组件中使用
import * as animationData from "../assets/lottie/love/data.json";

animationData.assets.forEach((item) => {
  item.u = "";
  if (item.w && item.h) {
    item.p = require(`@/assets/lottie/love/images/${item.p}`);
  }
}); // 获取静态资源

// data中
animation: { animationData: animationData.default },
anim: {},

// methods中
handleAnimation(anim) {
  this.anim = anim;
  // console.log(anim); //这里可以看到 lottie 对象的全部属性
},

//
<lottie
  class="lottie"
  :options="animation"
  :height="100"
  :width="100"
  :style="{
    top: 10,
    left: 10,
  }"
/>
```
