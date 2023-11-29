# webpack项目打包、保存内存泄漏

最近接触一个老项目，在保存代码的时候提示内存泄漏。报错问题如下：

```
CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory
```

频繁出现此种情况，项目太大，导致内存溢出，排除代码问题外，可参照以下方式解决

```
全局安装increase-memory-limit
npm install -g increase-memory-limit
进入工程目录，执行：
increase-memory-limit
```
