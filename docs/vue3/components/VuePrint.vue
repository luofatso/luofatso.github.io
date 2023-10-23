<template>
  <div>
    <el-button type="primary" v-print="'#print'">打印机型二维码</el-button>
    <div class="print">
      <div id="print">
        <div
          v-for="it in optSelection"
          :key="it"
          style="page-break-after: always"
          class="full-v print-item"
        >
          <div class="print-content d-flex flex-column">
            <div class="print-tit box-center" style="border-bottom: 1px solid #000">机型切换</div>
            <div class="print-subtit d-flex" style="border-bottom: 1px solid #000; height: 100px">
              <div class="box-center tit1" style="border-right: 1px solid #000; width: 100px">
                派生
              </div>
              <div class="box-center flex-1">{{ it }}</div>
            </div>
            <div class="flex-1 d-flex">
              <div
                class="box-center flex-column tit1 border-r"
                style="border-right: 1px solid #000; width: 100px"
              >
                机型
                <p class="mt-2">二维码</p>
              </div>
              <div
                class="box-center border-r tit2"
                style="border-right: 1px solid #000; width: 180px"
              >
                <qrcode-vue :value="`$JX04/${it}`" :size="140" :render-as="'svg'" level="H" />
              </div>
              <div class="d-flex flex-column flex-1">
                <div class="flex-1 d-flex" style="border-bottom: 1px solid #000">
                  <div
                    class="tit2 box-center border-r"
                    style="border-right: 1px solid #000; width: 140px"
                  >
                    号机段
                  </div>
                  <div class="flex-1"></div>
                </div>
                <div class="flex-1 d-flex">
                  <div
                    class="tit2 box-center border-r"
                    style="border-right: 1px solid #000; width: 140px"
                  >
                    生产台数
                  </div>
                  <div class="flex-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import print from 'vue3-print-nb'
import QrcodeVue from 'qrcode.vue'
import { ref } from 'vue'

const vPrint = print

const optSelection = ref(['GCV145H-A4G7-NH1-B', 'GCV145H-A4G7-NH1-A'])
</script>
<style lang="scss" scoped>
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
    height: calc(100vh - 160px);
    border: 1px solid #000;
  }
  &-tit {
    font-size: 32px;
    height: 100px;
  }
}
</style>
