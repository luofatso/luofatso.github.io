# doT.js -- JavaScript 模板引擎使用

最近维护了一个老项目，项目中使用了doT.js模板引擎；模板很久之前使用过，但是很多语法也忘记了，还特意去看了一下，其实也很简单。在这里记录一下方便以后查阅。

## 默认的定界符列表

```
{{ }}	用于求值(evaluation)
{{= }}	用于插值(interpolation) // {{=it.name || '默认信息'}}
{{! }}	用于编码求值
{{# }}	用于编译时求值/引入和局部模板
{{## #}}	用于编译时定义
{{? }}	条件语句  // {{？it.id === 1}}id=1{{ ?? it.id ===2}}id=2 {{??}}id=其他{{?}}
{{~ }}	数组迭代 // {{~ it:val:i}}
```

## 传对象

有时候业务需要也会传对象

```
发送：

  onclick="sendData('{{! JSON.stringify(it)}}')"

接收:

  function sendData(it){
     console.log('==='+JSON.stringify(it));
  }
```

## 直接循环数字

```
<script type="text/template" id="list_tpl">
  {{for(var i=1;i<25;i++){}}
    <option value="{{=i}}">{{=i}} 小时内</option>
  {{}}}
</script>
```
