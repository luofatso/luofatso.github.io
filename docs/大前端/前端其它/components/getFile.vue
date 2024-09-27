<template>
  <div>
    <img :src="img" alt="" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const img = ref('')

fetch(window.location.protocol+'//'+window.location.host+'/test.jpg').then(function (response) {
  response.arrayBuffer().then((res) => {
    let type = 'image/*' // 资源类型
    /* 常见资源类型
    1.excel: type = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    2.图片: type = "image/*"
    3.视频: type = "video/*"
    4.音频: type = "audio/*"
    */
    let blob = new Blob([res], { type: type })
    // 获取的blob根据实际业务场景应用下载，或转化成其他格式的资源
    /* var objectUrl = URL.createObjectURL(blob);
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    a.href = objectUrl;
    a.click();
    document.body.removeChild(a);
    */
    var objectUrl = URL.createObjectURL(blob)
    img.value = URL.createObjectURL(blob)
    // var a = document.getElementById('img')
    // a.style = "display: none";
    // a.src = objectUrl
    // a.click();
    // document.body.removeChild(a);
  })
})
</script>
<style lang="scss" scoped></style>
