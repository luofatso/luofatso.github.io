<template>
  <div id="vcomments"></div>
</template>

<script lang="ts" setup>
import { watch, onMounted } from "vue";
import { useRoute } from "vitepress";
import Valine from 'valine';

const route = useRoute();

const initValine = () => {
  let path = location.origin + location.pathname;
  // document.getElementsByClassName("leancloud-visitors")[0].id = path;
  new Valine({
    el: "#vcomments",
    appId: "F0hu8j3RsyXQN05lmGOSGvoX-gzGzoHsz", // your appId
    appKey: "s36p5UM4mFBhaf7efnqFBqQ6", // your appKey
    notify: false,
    verify: false,
    path,
    visitor: true,
    avatar: "mm",
    placeholder:
      "请在这里留下你的留言，如果上面填写了邮箱还能收到邮件哟，地址是点击头像跳转的地址",
  });
};

watch(
  () => route.path,
  () => {
    console.log("监听路由变化");
    initValine();
  }
);

onMounted(() => {
  remoteImport('//unpkg.com/valine/dist/Valine.min.js').then(() => initValine());
});

const remoteImport = (url:string) => {
  return new Promise<void>((resolve) => {
    var head = document.getElementsByTagName("head")[0];
    var script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", url);
    head.appendChild(script);

    script.onload = function () {
      resolve();
    };
  });
}


</script>
