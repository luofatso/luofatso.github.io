# json转excel

开发中我们会有很多地方会需要将json文件转成excel文件的地方，这里记录一个简单的方法。

转回来请看后文：[excel转json](./excel转json.md)

## 代码实现

此例子以多语言为例，将本地中文的json文件转为Excel文件，方便有关人员用Excel文件去多语言翻译。

::: code-group

```js [server.js]
const express = require('express')
const XLSX = require('xlsx')
const fs = require('fs')

const app = express()
const PORT = 3000

app.get('/json-to-excel', (req, res) => {
  const jsonFilePath = 'zh.json' // 指定你的 JSON 文件路径

  fs.readFile(jsonFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading JSON file.')
    }

    const jsonData = JSON.parse(data)
    const result = []

    // 转换 JSON 格式
    for (const key in jsonData) {
      for (const subKey in jsonData[key]) {
        result.push({ key, subKey, value: jsonData[key][subKey] })
      }
    }

    const ws = XLSX.utils.json_to_sheet(result)
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1')

    const filePath = 'zh.xlsx'
    XLSX.writeFile(wb, filePath)

    res.download(filePath, (err) => {
      if (err) {
        console.error(err)
      }
      fs.unlinkSync(filePath) // 删除临时文件
    })
  })
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

## 本例子json格式

本例子使用的json格式如下, 包含了两个key，一个是key，一个是value。格式不一致可对应调整。

```
{
  "page1": {
    "key1": "中文1",
    "key2": "中文2"
  },
  "page2": {
    "key1": "中文3",
    "key2": "中文4"
  }
}
```

## 输出Excel格式

输出的Excel格式如下：

```
key     subKey    value
page1   key1      中文1
page1   key2      中文2
page2   key1      中文3
page2   key2      中文4
```
