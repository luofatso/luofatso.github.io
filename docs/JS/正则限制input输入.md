# 正则限制input输入

1. 限制input输入框只能输入大小写字母、数字、下划线的正则表达式：

```
<input type="text" onkeyup="this.value=this.value.replace(/[^\w_]/g,'');" /> 
```

2. 限制input输入框只能输入小写字母、数字、下划线的正则表达式：

```
<input type="text" onkeyup="this.value=this.value.replace(/[^a-z0-9_]/g,'');" /> 
```

3. 限制input输入框只能输入数字和点的正则表达式：

```
<input type="text" onkeyup="value=value.replace(/[^\d.]/g,'')" />
```

4. 限制input输入框只能输入中文的正则表达式：
```
<input type="text" onkeyup="this.value=this.value.replace(/[^\u4e00-\u9fa5]/g,'')" />  
```

5. 限制input输入框只能输入数字的正则表达式：

```
<input type="text" onkeyup="this.value=this.value.replace(/\D/g,'')" >
```

6. 限制input输入框只能输入英文的正则表达式：

```
<input type="text" onkeyup="this.value=this.value.replace(/[^a-zA-Z]/g,'')" />
```

7. 限制input输入框只能输入中文、数字、英文的正则表达式：

```
<input onkeyup="value=value.replace(/[^\w\u4E00-\u9FA5]/g, '')" />
```
8. 限制input输入框只能输入数字和字母的正则表达式：

```
<input onKeyUp="value=value.replace(/[\W]/g,'')" />
```

9. 限制input输入框除了英文的标点符号以外，其他的都可以。中文，英文字母，数字，中文标点的正则表达式：

```
<input type="text" onkeyup="this.value=this.value.replace(/^[^!@#$%^&*()-=+]/g,'')"/ >
```

10. 限制input输入框 只能输入数字代码(小数点也不能输入) 的正则表达式：

```
<input onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')"/ >
```

11. 限制input输入框只能输入数字，能输小数点的正则表达式：

```
<input onkeyup="if(isNaN(value))execCommand('undo')" onafterpaste="if(isNaN(value))execCommand('undo')"/ >
<input onchange="if(/\D/.test(this.value)){alert('只能输入数字');this.value='';}"/ >

或者

<input type="text" 
         onkeypress="if(!this.value.match(/^[\+\-]?\d*?\.?\d*?$/))this.value=this.t_value;ase this.t_value=this.value;if(this.value.match(/^(?:[\+\-]?\d+(?:\.\d+)?)?$/))this.o_value=this.value" 
         onkeyup="if(!this.value.match(/^[\+\-]?\d*?\.?\d*?$/))this.value=this.t_value;ase this.t_value=this.value;if(this.value.match(/^(?:[\+\-]?\d+(?:\.\d+)?)?$/))this.o_value=this.value" 
         onblur="if(!this.value.match(/^(?:[\+\-]?\d+(?:\.\d+)?|\.\d*?)?$/))this.value=this.o_value;ase{if(this.value.match(/^\.\d+$/))this.value=0+this.value;if(this.value.match(/^\.$/))this.value=0;this.o_value=this.value}"/ >
```

12. 限制input输入框只能输入字母和汉字的正则表达式：

```
<input onkeyup="value=value.replace(/[\d]/g,'') "onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[\d]/g,''))" maxlength=10 name="Numbers"/ >
```
13. 限制input输入框只能输入英文字母和数字，不能输入中文的正则表达式：

```
<input onkeyup="value=value.replace(/[^\w\.\/]/ig,'')"/ >
```

14. 限制input输入框只能输入数字和英文的正则表达式：

```
<input onKeyUp="value=value.replace(/[^\d|chun]/g,'')" >
```

15. 限制input输入框小数点后只能有最多两位(数字、中文都可输入)，不能输入字母和运算符号的正则表达式：

```
<input onKeyPress="if((event.keyCode<48 || event.keyCode>57) && event.keyCode!=46 || /\.\d\d$/.test(value))event.returnValue=false" >
```

16. 限制input输入框小数点后只能有最多两位(数字、字母、中文都可输入)，==可以输入运算符号:==的正则表达式：

```
<input onkeyup="this.value=this.value.replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3')" >
```

17. 不可输入中文

```
<input  onkeyup="this.value=this.value.replace(/[\u4E00-\u9FA5]/g,'')" >
```

18. 不可输入空格

```
<input onkeyup="onkeyup="value = value.replace(/\s+/g, '')">
```