# css画心

<script setup lang='ts'>
  import CssHeart from './components/CssHeart.vue'
</script>

<CssHeart />

1. 方式一

```
<div class="heart"></div>

.heart {
  position: relative;
  width: 100px;
  height: 90px;
}

.heart:before,
.heart:after {
  position: absolute;
  content: "";
  left: 50px;
  top: 0;
  width: 50px;
  height: 80px;
  background-color: red;
  border-radius: 50px 50px 0 0;
  transform: rotate(-45deg);
  transform-origin: 0 100%;
}

.heart:after {
  left: 0;
  transform: rotate(45deg);
  transform-origin: 100% 100%;
}
```

2. 方式二

```
<div class="heart-shape"></div>


.heart-shape {
  position: relative;
  width: 100px;
  height: 100px;
  background-color: red;
  transform: rotate(45deg);

  &::before,
  &::after {
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 100%;
    width: 100%;
    height: 100%;
    background-color: red;
    content: "";
  }

  &::before {
    transform: translateX(-50%);
    // background-color: #fee;
  }

  &::after {
    transform: translateY(-50%);
    // background-color: #999;
  }
}

```
