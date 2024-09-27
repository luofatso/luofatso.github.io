# path模块

Node.js 中的 path 模块提供了一些方法，用于处理文件路径。在不同的操作系统中，文件路径的表示方式有所不同，例如在 Windows 中使用反斜杠 \ 分隔目录，而在 Unix 和 Linux 系统中使用正斜杠 / 分隔目录。path 模块提供的方法可以解决这些跨平台的问题，使得代码可以在不同的操作系统中运行。

## node中路径分类

node 中的路径大致分 5 类，dirname,filename,process.cwd(),./,../,其中dirname,filename,process.cwd()绝对路径

- \_\_dirname： 获得当前执行文件所在目录的完整目录名
- \_\_filename： 获得当前执行文件的带有完整绝对路径的文件名
- process.cwd()：获得当前执行 node 命令时候的文件夹目录名
- ./： 不使用 require 时候，./与process.cwd()一样，使用require时候，与\_\_dirname一样

只有在 require() 时才使用相对路径(./, ../) 的写法，其他地方一律使用绝对路径，如下：

```
// 当前目录下
path.dirname(__filename) + '/path.js'
// 相邻目录下
path.resolve(__dirname, '../regx/regx.js')
```

## path 常用方法

官网路径[https://nodejs.org/api/path.html](https://nodejs.org/api/path.html)

- path.normalize

规范化路径，把不规范的路径规范化。

```
const path = require('path')

console.log(path.normalize('/Desktop//FatsoLuo//node/..'))

//
```
