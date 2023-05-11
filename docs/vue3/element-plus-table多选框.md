# element-plus-table多选框

vue3中使用element-plus table的多选框默认选择及禁止选择等

## 1.禁止选择

``` vue3{15,19-21}
<el-table
  ref="multipleTableRef"
  v-loading="tableLoad"
  :data="tableData"
  row-key="deviceName"
  size="large"
  :default-sort="{ prop: 'deviceName', order: 'ascending' }"
  @sort-change="sortTable"
  @selection-change="handleSelectionChange"
>
  <el-table-column
    type="selection"
    v-if="!!appStore.version.length"
    width="200"
    :selectable="selectable"
  />
</el-table>

const selectable = (row: IVersion) => {
  return !!row.appVersion
}
```

## 2.默认选中

```
import { ElTable } from 'element-plus'

const multipleTableRef = ref<InstanceType<typeof ElTable>>()

onMounted(() => {
  nextTick(() => {
    tableData.value.forEach((row:IVersion) => {
      if (row.appUpdateFlag === 1) {
        multipleTableRef.value!.toggleRowSelection(row, true)
      }
    })
  })
})

```

## 3.选择项目

```
const handleSelectionChange = (version: IVersion[]) => {
  optSelection.value = version.map((it: IVersion) => it.deviceName)
}
```

## 4.后端排序

``` vue3{14}
<el-table
  ref="multipleTableRef"
  v-loading="tableLoad"
  :data="tableData"
  row-key="deviceName"
  size="large"
  :default-sort="{ prop: 'deviceName', order: 'ascending' }"
  @sort-change="sortTable"
  @selection-change="handleSelectionChange"
>
  <el-table-column
    prop="deviceName"
    label="设备编号"
    sortable="custom"
    :sort-orders="['ascending', 'descending']"
    :class="{ descending: ruleForm.order === ESort.DESC }"
  />
</el-table>
```

## 5.表格默认排序

``` vue3{7,8,20-24}
<el-table
  ref="multipleTableRef"
  v-loading="tableLoad"
  :data="tableData"
  row-key="deviceName"
  size="large"
  :default-sort="{ prop: 'deviceName', order: 'ascending' }"
  @sort-change="sortTable"
  @selection-change="handleSelectionChange"
>
  <el-table-column
    prop="deviceName"
    label="设备编号"
    sortable="custom"
    :sort-orders="['ascending', 'descending']"
    :class="{ descending: ruleForm.order === ESort.DESC }"
  />
</el-table>

const sortTable = (col: any) => {
  ruleForm.value.orderBy = sortType[col.prop] as EAppOrderType.DEVICE_NAME // 排序键名
  ruleForm.value.order = col.order === 'ascending' ? ESort.ASC : ESort.DESC // 排序顺序
  getTabalData() // 按排序规则，重新搜索
}

multipleTableRef.value?.sort('deviceName', 'ascending') // 重置初始化排序

multipleTableRef.value?.clearSort() // 清空所有排序
```

> 具体了解：PDA-APP升级模块

