<template>
  <div class="flex-center flex-column">
    <el-form
      ref="ruleFormRef"
      :label-position="'top'"
      label-width="auto"
      :model="formLabelAlign"
      style="max-width: 600px; min-width: 300px"
    >
      <el-form-item label="红包总金额">
        <el-input-number :controls="false" v-model="formLabelAlign.total" />
      </el-form-item>
      <el-form-item label="红包总个数">
        <el-input-number :controls="false" v-model="formLabelAlign.num" />
      </el-form-item>
      <el-form-item align="center">
        <el-button type="primary" @click="submitForm(ruleFormRef)"> 确定 </el-button>
        <!-- <el-button @click="resetForm(ruleFormRef)">重置</el-button> -->
      </el-form-item>
    </el-form>
    <template v-if="!!redPacket.length">
      <div class="mb-2">每个红包如下：</div>
      <div class="box-item box-center flex-wrap">
        <el-tag v-for="item in redPacket" class="ml-2 mt-2" :key="item">{{ item }}</el-tag>
      </div>
    </template>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'

const ruleFormRef = ref()

const formLabelAlign = reactive({
  total: null,
  num: null
})

// https://juejin.cn/post/7512642238833360948
/**
 * 微信红包算法实现
 * @param {number} total 总金额（元）
 * @param {number} num 红包个数
 * @return {number[]} 红包金额数组
 */
function wechatRedPacket(total, num) {
  const packets = [] // 存储红包金额
  let restAmount = total // 剩余金额
  let restNum = num // 剩余红包个数

  // 分配前n-1个红包
  for (let i = 0; i < num - 1; i++) {
    // 计算当前最大可抢金额：二倍均值法
    // Math.random() 返回 [0, 1) 的数，所以理论上的随机金额范围是 [0, max)
    const max = (restAmount / restNum) * 2
    const amount = parseFloat((Math.random() * max).toFixed(2))

    // 关键：确保红包金额至少为0.01元，将随机范围的下限从0修正为0.01
    const finalAmount = Math.max(amount, 0.01)

    restAmount -= finalAmount
    restNum--
    packets.push(finalAmount)
  }

  // 最后一个红包直接取剩余金额，保证总和精确
  packets.push(parseFloat(restAmount.toFixed(2)))

  return packets
}

const redPacket = ref([])

// 优化版：解决浮点数精度问题
function optimizedRedPacket(total, num) {
  // 校验总金额是否足够分配每人至少0.01元
  if (total < num * 0.01) {
    ElMessage.error('单个红包金额不能小于0.01元')
    return
  }
  // 转为分计算，避免浮点误差
  let restAmount = total * 100
  const packets = []

  for (let i = 0; i < num - 1; i++) {
    const max = Math.floor((restAmount / (num - i)) * 2)
    const amount = Math.floor(Math.random() * max)
    // 确保至少1分钱
    const finalAmount = Math.max(amount, 1)
    restAmount -= finalAmount
    packets.push(finalAmount / 100)
  }
  packets.push(restAmount / 100)
  redPacket.value = packets
}

const resetForm = (formEl) => {
  console.log('=====1', formEl)

  if (!formEl) return
  console.log('=====11', formEl)
  formEl.resetFields()
  console.log('=====111', formEl)
}

const submitForm = async (formEl) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      optimizedRedPacket(formLabelAlign.total, formLabelAlign.num)
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>
<style lang="scss" scoped>
.box-item {
  width: 600px;
}
:deep(.el-input__wrapper) {
  min-width: 300px;
}
</style>
