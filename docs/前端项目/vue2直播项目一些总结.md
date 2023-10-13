# 直播项目的一些总结

最近做了一个直播项目，记录一些在其中使用的技术，以便以后查阅。

## 多行文本自动撑大

- 自动无限撑大

```
<textarea
  :style="{ height: scrollHeight + 'px' }"
  v-model="detail"
  ref="textarea"
  @input="inputInfo"
></textarea>

inputInfo() {
  let textArea = this.$refs.textarea;
  let scrollHeight = 100;
  textArea.style.height = scrollHeight + "px";
  if (textArea.scrollHeight > 100) {
    scrollHeight = textArea.scrollHeight;
  }
  this.scrollHeight = scrollHeight;
  textArea.style.height = scrollHeight + "px";
},
```

这样做的话，编辑是没有问题的；但是如何后续还想查看在比较也一样的话，那我们就得知道之前的高度，所以我就在提交的放进了数据库，返回的后处理一下就好了。

```
const detail = `${content}<!-- scrollHeight -->${this.scrollHeight}`;

if (res.detail.includes("<!-- scrollHeight -->")) {
  const [detail, scrollHeight] = res.detail.split(
    "<!-- scrollHeight -->"
  );
  this.detail = detail;
  this.scrollHeight = scrollHeight;
}
```

- 撑大到一定时候就，出现滚动条

```
<textarea
  v-model="message"
  maxlength="200"
  ref="textarea"
  placeholder="Comment..."
  @blur="message = message.trim()"
  @keydown="listen($event)"
  @input="inputInfo"
></textarea>

inputInfo() {
  let textArea = this.$refs.textarea;
  textArea.style.height = "10px";
  let wSclollHeight = parseInt(textArea.scrollHeight);
  if (textArea.scrollHeight > 100) {
    wSclollHeight = 100;
  }
  if (wSclollHeight < 50) wSclollHeight = 50;
  this.textHeight = wSclollHeight + 20;
  textArea.style.height = wSclollHeight + "px";
},
```

## 关于全屏

```
// 全局监听是否全屏
[
  "fullscreenchange",
  "webkitfullscreenchange",
  "mozfullscreenchange",
].forEach((item) => {
  window.addEventListener(item, () => {
    this.liveFull =
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement
        ? true
        : false;
  });
});

// 开启全屏
fullScreen() {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  } else if (document.documentElement.mozRequestFullScreen) {
    document.documentElement.mozRequestFullScreen();
  } else if (document.documentElement.webkitRequestFullscreen) {
    document.documentElement.webkitRequestFullscreen();
  } else if (document.documentElement.msRequestFullscreen) {
    document.documentElement.msRequestFullscreen();
  }
},

// 关闭全屏
exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
},
```

## 关于一些正则或方法

```
export const getCache = (name) => {
  if (!name) return false;
  try {
    return JSON.parse(localStorage[name]);
  } catch (error) {
    return localStorage[name];
  }
};

export const setCache = (name, value) => {
  if (!name) return false;
  if (typeof value == 'object') {
    value = JSON.stringify(value);
  }
  localStorage[name] = value;
};

export const removeCache = (name) => {
  if (!name) return false;
  localStorage.removeItem(name);
};

export const getItem = (name) => {
  if (!name) return false;
  try {
    return JSON.parse(sessionStorage[name]);
  } catch (error) {
    return sessionStorage[name];
  }
};

export const setItem = (name, value) => {
  if (!name) return false;
  if (typeof value == 'object') {
    value = JSON.stringify(value);
  }
  sessionStorage[name] = value;
};

export const removeItem = (name) => {
  if (!name) return false;
  sessionStorage.removeItem(name);
};

export const getUTCTime = (date = new Date()) => {
  return new Date(
    new Date(date).getUTCFullYear(),
    new Date(date).getUTCMonth(),
    new Date(date).getUTCDate(),
    new Date(date).getUTCHours(),
    new Date(date).getUTCMinutes(),
    new Date(date).getUTCSeconds()
  ).getTime();
};

export const hasMobile = (phone) => {
  const re = /^[1][34587]\d{9}$/;
  if (re.test(phone)) {
    return true;
  } else {
    return false;
  }
};

export const hasEmail = (email) => {
  const re = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+.([A-Za-z]{2,4})+$/;
  if (re.test(email)) {
    return true;
  } else {
    return false;
  }
};

export const hasName = (name) => {
  // const re = /^[\u4e00-\u9fa5\x3130-\x318F\xAC00-\xD7A3\u0800-\u4e00A-z]+(\s+[\u4e00-\u9fa5\x3130-\x318F\xAC00-\xD7A3\u0800-\u4e00A-z]+)*$/;
  const re = /^[\u4e00-\u9fa5\u0800-\u4e00A-z0-9 ]+$/;
  if (re.test(name)) {
    return true;
  } else {
    return false;
  }
};

export const hasStr = (name) => {
  const re = /^\S.*\S$|(^\S{0,1}\S$)/;
  if (re.test(name)) {
    return true;
  } else {
    return false;
  }
};

export const hasContent = (name) => {
  const re = /^[\u0020-\u007E\u00A0-\u00BE\u2E80-\uA4CF\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFFEF\u0080-\u009F\u2000-\u201f\u2026\u2022\u20ac\r\n ]+$/;
  if (re.test(name)) {
    return true;
  } else {
    return false;
  }
};

export const hasPwd = (pwd) => {
  const re = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
  if (re.test(pwd)) {
    return true;
  } else {
    return false;
  }
};

// 防抖
export const debounce = (fn, t = 500) => {
  let timer;
  return function() {
    let args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, args);
    }, t);
  };
};
```

## 关于复制

```
yarn add vue-clipboard2

import VueClipboard from 'vue-clipboard2';

VueClipboard.config.autoSetContainer = true;// 关键-——处理弹框复制失败
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

## 关于 SVG 动画

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

## 关于钉钉等应用链接识别

注意分享的链接要是在线能访问的 http 域名（ip 也可以）

```
<meta property="og:title" content="应用名称 | 娃哈哈" />
<meta property="og:image" content="应用Logo" />
<meta property="og:description" content="应用的简介" />
```

## 关于聊天框、AntV 等

```
align-self: flex-start;

this.chart.changeData(this.handelData(data));// 更新饼图数据

// 饼图初始化
initChart() {
  const chart = (this.chart = new Chart({
    container: "container" + this.id,
    autoFit: true,
    width: 500,
    height: 300,
  }));

  chart.data(this.data);

  chart.coordinate("theta", {
    radius: 0.75,
    innerRadius: 0.6,
  });

  chart.legend({
    position: "right",
  });

  chart.tooltip({
    showTitle: false,
    showMarkers: false,
  });

  // 分享结果才加文本（头投票数）
  if (this.end) {
    // 辅助文本
    this.num = this.obj.votesNum;
    chart
      .annotation()
      .text({
        position: ["50%", "50%"],
        content: this.obj.votesNum,
        style: {
          fontSize: 22,
          fill: "#0C385E",
          textAlign: "center",
        },
        offsetY: -8,
      })
      .text({
        position: ["50%", "50%"],
        content: "votes",
        style: {
          fontSize: 12,
          fill: "#0C385E",
          textAlign: "center",
        },
        offsetY: 8,
      });
  }

  chart
    .interval()
    .adjust("stack")
    .position("value")
    .color("type", voteColor)
    .shape("slice-shape");

  chart.render();
},
```
