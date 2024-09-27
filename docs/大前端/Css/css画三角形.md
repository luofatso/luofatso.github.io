# 纯 css 画三角形--border 方法

<script setup lang='ts'>
  import CssDelta from './components/CssDelta.vue'
</script>

## 1.triangle up 上三角形

<CssDelta id="triangle-up" />

```
#triangle-up {
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 100px solid black;
}
```

## 2.triangle down 下三角形

<CssDelta id="triangle-down" />

```
#triangle-down {
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-top: 100px solid black;
}
```

## 3.triangle left 左三角形

<CssDelta id="triangle-left" />

```
#triangle-left {
  width: 0;
  height: 0;
  border-top: 50px solid transparent;
  border-bottom: 50px solid transparent;
  border-right: 100px solid black;
}
```

## 4.triangle right 右三角形

<CssDelta id="triangle-right" />

```
#triangle-right {
  width: 0;
  height: 0;
  border-top: 50px solid transparent;
  border-bottom: 50px solid transparent;
  border-left: 100px solid black;
}

```

## 5.triangle top left 左上三角形

<CssDelta id="triangle-top-left" />

```
#triangle-top-left {
  width: 0;
  height: 0;
  border-top: 100px solid black;
  border-right: 100px solid transparent;
}

```

## 6.triangle top right 右上三角形

<CssDelta id="triangle-top-right" />

```
#triangle-top-right {
  width: 0;
  height: 0;
  border-top: 100px solid black;
  border-left: 100px solid transparent;
}
```

## 7.triangle bottom left 左下三角形

<CssDelta id="triangle-bottom-left" />

```
#triangle-bottom-left {
  width: 0;
  height: 0;
  border-bottom: 100px solid black;
  border-right: 100px solid transparent;
}
```

## 8.triangle bottom right 右下三角形

<CssDelta id="triangle-bottom-right" />

```
#triangle-bottom-right {
  width: 0;
  height: 0;
  border-bottom: 100px solid black;
  border-left: 100px solid transparent;
}
```
