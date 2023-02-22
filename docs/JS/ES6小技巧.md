# 记录一些ES6的使用小技巧

### 1.访问数组最后一个元素

ES2022 专门提供了一个 Array.prototype.at 方法，用于根据给定索引获取数组元素：

```
[1, 2, 3, 4, 5].at(-1); // 5
```

### 2.结构赋值
- 别名
```
const obj = {
  // 这个键名太长了，我们希望把它换掉
  aaa_bbb_ccc: {
    name: "dby",
    age: 12,
    sex: true
  }
}
const { aaa_bbb_ccc: user } = obj;
console.log(user); // { name: "dby", age: 12, sex: true }
```
- 默认值
```
fetchUserInfo()
  .then(({ aaa_bbb_ccc: user = {} }) => {
    // ...
  })
```
- 深度解构
```
let obj = {
  name: "dby",
  a: {
    b: 1
  }
}
const { a: { b } } = obj;
console.log(b); // 1
```
- 短路符防止报错
```
const {a,b,c,d,e} = obj || {};
```

### 3.检查属性是否存在对象中

```
Object.hasOwn(person, "salary")
```
> 注意是提案，浏览器兼容性 [提案地址](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn)