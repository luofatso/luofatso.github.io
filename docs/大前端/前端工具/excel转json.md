# excel转json

前文记录了json文件转成excel文件，本文记录将做好的excel的文件转为json。

前文：[json转excel](./json转excel.md)

## 例子1

此例子以多语言为例，将相关人员做好的Excel文件转为我们使用的json，方便开发中使用。

### 代码

::: code-group

```js [server.js]
const express = require('express')
const XLSX = require('xlsx')
const fs = require('fs')

const app = express()
const PORT = 3000

// 将 Excel 转换为 JSON
app.get('/excel-to-json', (req, res) => {
  const excelFilePath = 'lang.xlsx' // 替换为你的 Excel 文件路径

  const workbook = XLSX.readFile(excelFilePath)
  const sheetName = workbook.SheetNames[0] // 获取第一个工作表
  const worksheet = workbook.Sheets[sheetName]

  const jsonData = XLSX.utils.sheet_to_json(worksheet)

  // 重新格式化 JSON 数据
  const result = {}

  jsonData.forEach((item) => {
    const { key, subKey, value, val } = item // 取出需要的字段
    if (!result[key]) {
      result[key] = {}
    }
    result[key][subKey] = val // 使用 val 字段的值
  })

  res.json(result) // 返回转换后的 JSON 数据
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
```

```js [install]
npm init -y

npm install express xlsx fs

node server.js
```

:::

### Excel数据格式

Excel文件内的格式如下：

```
key     subKey    value     val
page1   key1      中文1     lang1
page1   key2      中文2     lang2
page2   key1      中文3     lang3
page2   key2      中文4     lang4
```

### json数据格式

本例子得到的json格式如下, 包含了两个key，一个是key，一个是value。格式不一致可对应调整。

```
{
  "page1": {
    "key1": "lang1",
    "key2": "lang1"
  },
  "page2": {
    "key1": "lang3",
    "key2": "lang4"
  }
}
```

## 代码2

自用的埋点

### 代码

```
// 将 Excel 转换为 JSON 格式
app.get('/excel-to-json', (req, res) => {
  // const filePath = req.file.path;
  const filePath = '**.xlsx' // 替换为你的 Excel 文件路径

  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];

  const jsonData = XLSX.utils.sheet_to_json(worksheet);

  // 重新格式化 JSON 数据为指定格式
  const result = jsonData.map(item => {
    const { page, module, node, event, eventName } = item;
    return {
      page,
      module,
      node,
      event,
      eventName
    };
  });

  // 删除上传的临时文件
  fs.unlinkSync(filePath);

  res.json(result); // 返回转换后的 JSON 数据
});
```

### Excel数据格式

Excel文件内的格式如下：

```
page    module    node      event      eventName
page1   module1   node1     event1     eventName1
page1   module2   node2     event2     eventName2
page2   module3   node3     event3     eventName3
page2   module4   node4     event4     eventName4
```

### json数据格式

本例子得到的json格式如下, 包含了两个key，一个是key，一个是value。格式不一致可对应调整。

```
[
  {
    "page": "page1",
    "module": "module1",
    "node": "node1",
    "event": "event1",
    "eventName": "eventName1"
  },
  {
    "page": "page1",
    "module": "module2",
    "node": "node2",
    "event": "event2",
    "eventName": "eventName2"
  },
  {
    "page": "page2",
    "module": "module3",
    "node": "node3",
    "event": "event3",
    "eventName": "eventName3"
  },
  {
    "page": "page2",
    "module": "module4",
    "node": "node4",
    "event": "event4",
    "eventName": "eventName4"
  }
]
```
