# vue3打印

我们实际开发中多少会涉及到打印功能，这里简单记录一下实际开放遇到的一次简单打印功能。

## 效果

<script setup lang='ts'>
  import VuePrint from './components/VuePrint.vue'
</script>

<VuePrint />

## 代码

::: code-group

```template[template]
<el-button type="primary" v-print="'#print'">打印机型二维码</el-button>
<div class="print">
  <div id="print">
    <div
      v-for="it in printData"
      :key="it"
      style="page-break-after: always"
      class="full-v print-item"
    >
      <qrcode-vue :value="`$JX04/${it}`" :size="140" :render-as="'svg'" level="H" />
      <p>{{ it }}</p>
    </div>
  </div>
</div>
```

```setup[setup]
import QrcodeVue from 'qrcode.vue'
import print from 'vue3-print-nb'

const vPrint = print

const printData = ref(['GCV145H-A4G7-NH1-B', 'GCV145H-A4G7-NH1-A'])
```

```scss[scss]
.print {
  width: 0;
  height: 0;
  overflow: hidden;

  &-item {
    font-size: 28px;
    font-weight: bold;
    padding: 80px;
  }
  &-content {
    // height: 100%;
    height: calc(100vh - 160px);
    border: 1px solid #000;
  }
  &-tit {
    font-size: 32px;
    height: 100px;
  }
}
```

:::

::: warning 注意

- 强制断页: 在需要的地方可以使用 `css` 属性 `page-break-after: always` 进行强制断页。
- 隐藏预览: 我们很多打印都会有预览功能，本示例是把预览内容块进行了隐藏了。
  :::
