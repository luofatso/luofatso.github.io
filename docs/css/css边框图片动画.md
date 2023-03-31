# css边框图片动画

图片边框的动画效果

## 效果

<script setup lang='ts'>
  import BorderImg from './components/BorderImg.vue'
</script>

<BorderImg />

## 代码

```
<div class="skulls"></div>

.skulls {
  position: relative;
  width: 260px;
  height: 150px;
  margin: auto;
  border: 24px solid;
  border-image: url(./img/border-img.svg);
  border-image-slice: 32;
  border-image-repeat: round;
}
```
