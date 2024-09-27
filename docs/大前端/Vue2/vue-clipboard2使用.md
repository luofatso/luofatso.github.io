# vue-clipboard2 使用记录

```
yarn add vue-clipboard2

import VueClipboard from 'vue-clipboard2';

VueClipboard.config.autoSetContainer = true;// 处理弹框复制失败
Vue.use(VueClipboard);

// 组件中使用
// copy中有需要换行的话，直接 \n 就好了
this.$copyText('需要复制的内容').then(
  (e) => {
    console.log("复制成功", e.text);
  },
  (e) => {
    console.log(e);
  }
);

// 拓展 获取当前url
getTeamUrl() {
  return "http://" + window.location.host + "/live?id=" + this.id;
},
```
