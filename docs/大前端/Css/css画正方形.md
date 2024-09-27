# css画正方形

纯css实现画正方形的几种方式

## 先看效果

<script setup lang='ts'>
  import CssSquare from './components/CssSquare.vue'
</script>

<CssSquare />

## 1.固定宽高

```css
square {
  width: 200px;
  height: 200px;
  background-color: #3b8eed;
}
```

## 2.内边距

- 方式一

```css
.square {
  width: 200px;
  background-color: #549ced;
}

.square::before {
  content: '';
  display: block;
  padding-top: 100%;
}
```

- 方式二

```css
.square {
  width: 200px;
  display: flex;
  background-color: #50a2ff;
}
.square::after {
  content: '';
  padding-top: 100%;
}
```

> 两种方法基本一样，不一样的是方式二画的正方形可以直接使用内容区域。

## 3.vw

```css
.square {
  width: 10vw;
  height: 10vw;
  background-color: #3468a3;
}
```

## 4.aspect-ratio

语法：`aspect-ratio: width / height;` 浏览器根据设置的宽，然后根据设置的比例自动计算高。

```css
.square {
  width: 200px;
  aspect-ratio: 1 / 1;
  background-color: #255489;
}
```

> 使用前请注意兼容性
