<template>
  <div class="page">
    <section class="page-edit">
      <div class="page-edit-read py-4 text-r">
        <!-- id 将作为查询条件 -->
        <span class="leancloud-visitors" data-flag-title="Your Article Title">
          <em class="post-meta-item-text">阅读量： </em>
          <i class="leancloud-visitors-count"></i>
        </span>
      </div>
      <div id="vcomments"></div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { watch, onMounted } from "vue";
import { useRoute } from "vitepress";
// import Valine from 'valine';

const route = useRoute();

const initValine = () => {
  let path = location.origin + location.pathname;
  document.getElementsByClassName("leancloud-visitors")[0].id = path;
  new Valine({
    el: "#vcomments",
    appId: "F0hu8j3RsyXQN05lmGOSGvoX-gzGzoHsz",
    appKey: "s36p5UM4mFBhaf7efnqFBqQ6",
    notify: false,
    verify: false,
    path,
    visitor: true,
    avatar: "mm",
    enableQQ: true,// 启用昵称框自动获取QQ昵称和QQ头像
    placeholder:
      "你来与不来，我就在这里，不远不近",
  });
};

watch(
  () => route.path,
  () => {
    initValine();
  }
);

onMounted(() => {
  remoteImport('//unpkg.com/valine/dist/Valine.min.js').then(() => initValine());
});

const remoteImport = (url: string) => {
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


<style lang='scss' scoped></style>
