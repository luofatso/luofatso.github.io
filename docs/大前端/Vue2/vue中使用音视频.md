# vue2 中使用音视频（howler、TCplayerLite）

最近做了一个在线直播项目，其中使用了音视频相关技术，这里作为一点记录。

### 音频 howler.js

howler.js 是现代网络的音频库。它默认为 Web Audio API 并回退到 HTML5 Audio。这使得在 JavaScript 中处理音频在所有平台上都变得容易和可靠。

```
yarn add howler

import { Howl } from "howler";


// 初始化
sound = new Howl({
  src: ['sound.webm', 'sound.mp3']
  src: [require("../assets/test.mp3"), require("../assets/test2.mp3")],
  src: [`http://test${random(1, 6)}.mp3`],
  html5 : true, // 流式音频（用于实时音频或大文件）边加载边播放，不需要全部加载才播放
  autoplay: false,// 自动播放
  loop: false,// 循环
  preload: true,// 预加载
  volume: 0.5,// 音量0-1
  rate: 1,//播放速度 0.5 - 4
});

// 第一次调用
sound.once('load', function(){
  ...
});

// 播放结束调用
sound.on('end', function(){
  ...
});

sound.play();// 播放
sound.pause();// 暂停
```

当然也可以使用 vue-howler, 除了导入有点不一样，其它api基本都是一样的...

### 视频 TCplayerLite

视频推流这块的我们使用了腾讯的 TCplayerLite，因为直播会涉及礼物聊天弹幕等；然而腾讯 TCplayerLite 提供的 api 有限，很多功能都是自己补齐的；

项目弹幕和聊天基本一个逻辑，就是 socket 接受到后就直接 push 到列表；当然直接 push 肯定其它问题的，这里我们就不做介绍；这里主要记录一下响应、全屏及其它一些现实；

#### video 根据屏幕宽度响应变化

因为 TCplayerLite 并没有提供响应的 api，进过一些思绪...观察 DOM 节后，直接处理 DOM 的宽高解决；

```
window.onresize = () => {
  return (() => {
    const video = this.$refs.videoRef;
    this.videoSize = {
      w: video.offsetWidth,
      h: video.offsetHeight,
    };
  })();
};

document.getElementsByTagName("video")[0].style.height = val + "px !important";
document.querySelector(".vcp-player").style.height = val + "px !important";
```

大概思路就是这个样子啦，那就下班...晚上睡觉，我都直接改变了 DOM 的宽高了，那我为什么不直接改 css 还不用获取宽高后再改变...那么改良后就是这样...

```
document.getElementsByTagName("video")[0].classList.add("video-box__full");
document.querySelector(".vcp-player").classList.add("video-box__full");

::v-deep{
  .video-box{
    position: relative;
    width: 100%;
    height: 100%;
    &__full {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
}
```

#### video全屏

其实TCplayerLite自带全屏的，但是项目需求是全屏2/3视频,还有1/3他们要拿来聊天使用...我就呵呵了，但我我们也刚不过客户呀!!!最后就只能‘曲线救国了’————那就浏览器全屏(加上上面响应逻辑，基本不用调整多少代码)。。。

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

当然全局监听后，在退出当前组件时最好清除哟（为什么？...滚...）。

#### 其它注意事项

1. 视频封面或一些加载、文字提示等；
2. 进入直播页面正在加载的同时退出当前页面，视频会再加载成功后依然播放；

> 关于问题1 — 其实TCplayerLite是提供设置封面的方法的，只是不能达到我们的业务需求，我就在video盖一层，然后在相应的时间显示就好了。

> 关于问题2 — 我们在实例化的时候保存一个全局变量，在退出当前页面的时候，清空这个全局变量就好了。

关于直播其它的礼物、弹幕，其实就在video标签上面盖一层div设置想要的大小就好了，具体你想干什么那就干什么吧，当然了...肯定不可以色色噢！！！

其它的问题其实当时也蛮多的，只是后来处理了觉得也不是事了，如果你又什么其他的想法可以一起交流交流（如有不妥之处，请多指教）。
