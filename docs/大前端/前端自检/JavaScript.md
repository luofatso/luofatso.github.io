---
outline: [2, 3]
---

# 前端自检系列 --- JavaScript

[[TOC]]

## 1 变量和类型

### 1.1 JavaScript规定了几种语言类型

::: details 参考
JavaScript 规定了 7 种基本数据类型（Primitive）和 1 种复杂数据类型（Object），共计 8 种语言类型。

#### 基本数据类型（Primitive Data Types）：

1. **Number（数值）**：表示数字，包括整数和浮点数（IEEE 754 双精度 64 位）。
2. **String（字符串）**：表示文本字符串，不可变。
3. **Boolean（布尔值）**：表示 `true` 或 `false`。
4. **Null（空值）**：只有一个值 `null`，表示"空"。
5. **Undefined（未定义）**：只有一个值 `undefined`，表示"未赋值"。
6. **Symbol（符号）**：ES6 新增，表示唯一的标识符，用于创建对象的属性名。
7. **BigInt（大整数）**：ES2020 新增，表示任意精度的整数，后缀 `n`（如 `123n`）。

> 基本类型的 `typeof` 返回值：Number → `"number"`，String → `"string"`，Boolean → `"boolean"`，Null → `"object"`（历史遗留 Bug），Undefined → `"undefined"`，Symbol → `"symbol"`，BigInt → `"bigint"`。

#### 复杂数据类型（Complex Data Type）：

- **Object（对象）**：表示复合值，是键值对的集合（Object、Array、Function、Date、RegExp 等都属于对象类型）。`typeof` 对对象返回 `"object"`，对函数特殊返回 `"function"`（但函数本质也是对象）。

> 基本数据类型是按值传递的（复制值），复杂数据类型是按引用传递的（复制引用地址）。基本类型值不可变（immutable），对象是可变的（mutable）。
> :::

### 1.2 JavaScript对象的底层数据结构是什么

::: details 参考
JavaScript 对象的底层数据结构不是单一的哈希表，现代 JS 引擎（如 V8）采用多种存储策略来优化性能。

#### V8 引擎的对象存储模型

**1. 命名属性与元素属性分离：**

- **命名属性（Named Properties）**：对象的字符串/Symbol 键属性。根据对象形态不同，可能以内联存储（in-object）、快属性或慢属性（字典模式）存储。
- **元素属性（Elements）**：数组索引（整数键）属性，单独存储以实现高效的数组操作。

**2. 隐藏类（Hidden Classes / Map）：**
V8 使用隐藏类跟踪对象的"形状"（属性名及其顺序）。相同构造函数、相同属性初始化顺序的对象会共享同一个隐藏类，引擎通过隐藏类将属性名转换为固定的内存偏移量，实现 O(1) 的属性访问。这本质上是抽象语法树到运行时类型信息的 JIT 优化。

**3. 快属性 vs 慢属性：**

- **快属性（Fast Properties / In-object）**：属性存储在对象自身的连续内存块中（类似 C 结构体），通过隐藏类偏移量直接访问。
- **慢属性（Slow Properties / Dictionary Mode）**：当对象频繁动态增删属性，引擎会将存储降级为字典（哈希表）。字典访问比快属性慢 2~3 倍。

**4. 优化建议：**

- 在构造函数中一次性初始化所有属性（统一隐藏类）
- 避免 `delete obj.prop`（导致隐藏类分裂，应赋值为 `null` / `undefined`）
- 保持属性初始化顺序一致（不同顺序产生不同隐藏类）
- 避免使用 `__proto__` 或 `Object.setPrototypeOf()` 动态修改原型

:::

### 1.3 Symbol类型在实际开发中的应用、可手动实现一个简单的Symbol

::: details 参考

#### 核心特性

1. **唯一性**：`Symbol('desc') !== Symbol('desc')`，即使描述相同，每次调用都返回唯一值。
2. **不可隐式转换**：不能 `Symbol() + ''` 或 `${Symbol()}`，必须显式 `.toString()` 或 `.description`。
3. **不可枚举**：Symbol 属性不会出现在 `for...in`、`Object.keys()`、`JSON.stringify()` 中，只能通过 `Object.getOwnPropertySymbols()` 或 `Reflect.ownKeys()` 获取。
4. **全局共享**：`Symbol.for(key)` 在全局符号注册表中查找或创建 Symbol，`Symbol.keyFor(sym)` 反查 key。

#### 实际应用场景

**1. 消除魔术字符串：**

```javascript
// 不好的写法
if (type === 'success') { ... }  // 'success' 是魔术字符串

// 使用 Symbol
const TYPE = { SUCCESS: Symbol('success'), ERROR: Symbol('error') };
if (type === TYPE.SUCCESS) { ... }
```

**2. 定义半私有属性：**

```javascript
const _age = Symbol('age')
class Person {
  constructor(age) {
    this[_age] = age
  }
  getAge() {
    return this[_age]
  }
}
// 外部无法直接通过常规遍历获取 _age
// 注意：不是真正的私有，Object.getOwnPropertySymbols 仍可获取
```

**3. 扩展内置对象行为（Well-Known Symbols）：**

```javascript
// Symbol.iterator：自定义迭代器
const obj = {
  items: [1, 2, 3],
  [Symbol.iterator]() {
    return this.items[Symbol.iterator]()
  }
}

// Symbol.toPrimitive：自定义类型转换
const date = {
  [Symbol.toPrimitive](hint) {
    return hint === 'number' ? Date.now() : String(Date.now())
  }
}

// Symbol.hasInstance：自定义 instanceof 行为
// Symbol.toStringTag：自定义 Object.prototype.toString 返回的类型标签
class MyClass {
  get [Symbol.toStringTag]() {
    return 'MyClass'
  }
}
Object.prototype.toString.call(new MyClass()) // "[object MyClass]"
```

**4. 防止属性名冲突（库/框架开发中）：**

```javascript
// 给第三方对象挂载元数据时避免覆盖已有属性
export const META_KEY = Symbol.for('myLib.meta')
target[META_KEY] = { version: 1 }
```

#### 手动实现一个简单的 Symbol（模拟版本）

```javascript
;(function () {
  const symbolMap = new Map()
  let uid = 0

  function MySymbol(description) {
    if (this instanceof MySymbol) throw new TypeError('MySymbol is not a constructor')
    const sym = Object.create(null)
    sym.description = String(description)
    sym.__id__ = ++uid
    sym.toString = () => `Symbol(${sym.description})`
    return sym
  }

  MySymbol.for = (key) => {
    if (symbolMap.has(key)) return symbolMap.get(key)
    const sym = MySymbol(key)
    symbolMap.set(key, sym)
    return sym
  }
  MySymbol.keyFor = (sym) => {
    for (const [k, v] of symbolMap) {
      if (v === sym) return k
    }
    return undefined
  }

  // 挂载到全局（仅示意，实际 Symbol 功能远不至此）
  window.MySymbol = MySymbol
})()
```

> **与 ES2022 私有字段 `#` 的对比**：Symbol 提供的是"软私有"——可通过 `Object.getOwnPropertySymbols()` 获取；ES2022 的 `#privateField` 是"硬私有"，在语言层面完全不可从外部访问，是真正的私有属性。
> :::

### 1.4 JavaScript中的变量在内存中的具体存储形式

::: details 参考
对于基本数据类型（如数字、字符串、布尔值等），它们的值直接存储在变量所分配的内存空间中，称为栈（stack）内存。这意味着在变量被声明和初始化时，其值直接存储在栈内存中，并且在变量被销毁（超出作用域）时，栈内存会自动释放。

对于复杂数据类型（如对象、数组等），变量存储的实际是对象或数组的引用（或称为指针），而不是对象或数组的实际值。引用存储在栈内存中，而对象或数组的实际值则存储在堆（heap）内存中。堆内存是一块较大的内存区域，用于存储复杂数据类型的值。当变量被赋值为对象或数组时，实际上是将对象或数组在堆内存中的引用存储到变量的栈内存中。

这种通过栈内存存储引用的方式，使得 JavaScript 中的变量在赋值和传递时都是按值传递的，即复制的是引用而不是实际的对象或数组。这也是为什么在比较两个对象或数组时，实际比较的是它们的引用而不是内容。

需要注意的是，JavaScript 中的垃圾回收机制会自动清理不再被引用的堆内存，从而防止内存泄漏的发生。同时，JavaScript 引擎会对栈内存进行自动管理，包括变量的创建、销毁以及内存分配等操作，无需手动管理栈内存。
:::

### 1.5 基本类型对应的内置对象，以及他们之间的装箱拆箱操作

- 基本类型（也称为原始类型）对应的内置对象包括 Number、String、Boolean、Symbol 和 BigInt。这些基本类型和对应的内置对象之间可以进行装箱（Boxing）和拆箱（Unboxing）操作。

- null 和 undefined 是基本类型，但它们不是对象，因此没有对应的内置对象和装箱拆箱操作。

> 装箱是指将基本类型的值转换为对应的内置对象。

```
let num = 42; // 基本类型的数字
let numObj = new Number(42); // Number 对象
```

> 拆箱是指将内置对象中的值提取出来，转换为基本类型的值。

```
let numObj = new Number(42); // Number 对象
let num = numObj.valueOf(); // 42，拆箱操作
```

### 1.6 理解值类型和引用类型

::: details 参考

- 值类型：

  1. 存储在栈内存中，占用固定的内存空间。
  2. 通过复制值来传递，不会相互影响。
  3. 不可变性：值类型的数据在赋值后不会改变原始值，而是创建一个新的值。

- 引用类型：

  1. 存储在堆内存中，占用不定大小的内存空间。
  2. 通过复制引用地址来传递，多个变量可能引用同一个对象。
  3. 可变性：引用类型的对象可以在运行时被修改。
     :::

### 1.7 null和undefined的区别

::: details 参考
首先 Undefined 和 Null 都是基本数据类型，这两个基本数据类型分别都只有一个值，就是 undefined 和 null。

**undefined 代表的含义是未定义，null 代表的含义是空对象**（其实不是真的对象，请看下面的注意！）。一般变量声明了但还没有定义的时候会返回 undefined，null主要用于赋值给一些可能会返回对象的变量，作为初始化。

其实 null 不是对象，虽然 typeof null 会输出 object，但是这只是 JS 存在的一个悠久 Bug。在 JS 的最初版本中使用的是 32 位系统，为了性能考虑使用低位存储变量的类型信息，000 开头代表是对象，然而 null 表示为全零，所以将它错误的判断为 object 。虽然现在的内部类型判断代码已经改变了，但是对于这个 Bug 却是一直流传下来。

undefined 在 js 中不是一个保留字，这意味着我们可以使用 undefined 来作为一个变量名，这样的做法是非常危险的，它会影响我们对 undefined 值的判断。但是我们可以通过一些方法获得安全的 undefined 值，比如说 void 0。

当我们对两种类型使用 typeof 进行判断的时候，Null 类型化会返回 “object”，这是一个历史遗留的问题。当我们使用双等号对两种类型的值进行比较时会返回 true，使用三个等号时会返回 false。

#### undefined 与 undeclared 的区别？

已在作用域中声明但还没有赋值的变量，是 undefined。相反，还没有在作用域中声明过的变量，是 undeclared 的。

对于 undeclared 变量的引用，浏览器会报引用错误，如 ReferenceError: b is not defined 。但是我们可以使用 typeof 的安全防范机制来避免报错，因为对于 undeclared（或者 not defined ）变量，typeof 会返回 "undefined"。
:::

### 1.8 至少可以说出三种判断JavaScript数据类型的方式，以及他们的优缺点，如何准确的判断数组类型

::: details 参考

#### 1.typeof

typeof 对于原始类型来说，除了 null 都可以显示正确的类型

```
console.log(typeof 2);               // number
console.log(typeof true);            // boolean
console.log(typeof 'str');           // string
console.log(typeof []);              // object     []数组的数据类型在 typeof 中被解释为 object
console.log(typeof function(){});    // function
console.log(typeof {});              // object
console.log(typeof undefined);       // undefined
console.log(typeof null);            // object     null 的数据类型被 typeof 解释为 object
```

typeof 对于对象来说，除了函数都会显示 object，所以说 typeof 并不能准确判断变量到底是什么类型,所以想判断一个对象的正确类型，这时候可以考虑使用 instanceof

#### 2.instanceof

instanceof 操作符可以用来**判断一个对象是否属于某个构造函数创建的实例。**

```
console.log(2 instanceof Number);                    // false
console.log(true instanceof Boolean);                // false
console.log('str' instanceof String);                // false
console.log([] instanceof Array);                    // true
console.log(function(){} instanceof Function);       // true
console.log({} instanceof Object);                   // true
// console.log(undefined instanceof Undefined);
// console.log(null instanceof Null);
```

可以看出直接的字面量值判断数据类型，instanceof可以精准判断引用数据类型（Array，Function，Object），而基本数据类型不能被instanceof精准判断。

我们来看一下 instanceof 在MDN中的解释：instanceof 运算符用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性。其意思就是判断对象是否是某一数据类型（Array）的实例，请重点关注一下是判断一个对象是否是数据类型的实例。在这里字面量值，2， true ，'str'不是实例，所以判断值为false。

#### 3.constructor

**通过判断对象的构造函数来确定其类型**

```
console.log((2).constructor === Number); // true
console.log((true).constructor === Boolean); // true
console.log(('str').constructor === String); // true
console.log(([]).constructor === Array); // true
console.log((function() {}).constructor === Function); // true
console.log(({}).constructor === Object); // true
```

这里有一个坑，如果我创建一个对象，更改它的原型，constructor就会变得不可靠了

```
function Fn(){};

Fn.prototype=new Array();

var f=new Fn();

console.log(f.constructor===Fn);    // false
console.log(f.constructor===Array); // true
```

#### 4.Object.prototype.toString.call()

使用 Object 对象的原型方法 toString ，使用 call 进行狸猫换太子，借用Object的 toString 方法

```
var a = Object.prototype.toString;

console.log(a.call(2));
console.log(a.call(true));
console.log(a.call('str'));
console.log(a.call([]));
console.log(a.call(function(){}));
console.log(a.call({}));
console.log(a.call(undefined));
console.log(a.call(null));
```

:::

### 1.9 可能发生隐式类型转换的场景以及转换原则，应如何避免或巧妙应用

::: details 参考

#### 三大转换抽象操作

JavaScript 类型转换的核心是三个抽象操作（ECMA 规范定义）：

**1. ToPrimitive(input, PreferredType?)：原始值转换**

将引用类型转为原始值，分两步：

- 先调用 `input[Symbol.toPrimitive](hint)`（如果定义了该方法）
- 否则，按 PreferredType 顺序调用 `valueOf()` → `toString()`
  - hint 为 `"number"` 时：先 valueOf 后 toString
  - hint 为 `"string"` 时：先 toString 后 valueOf
  - hint 为 `"default"` 时：按 number 顺序（Date 对象例外，按 string 顺序）

**2. ToNumber(value)：数字转换**

| 输入类型         | 结果           |
| ---------------- | -------------- |
| `undefined`      | `NaN`          |
| `null`           | `0`            |
| `true` / `false` | `1` / `0`      |
| `""`（空字符串） | `0`            |
| `"123"`          | `123`          |
| `"123abc"`       | `NaN`          |
| Symbol           | 抛出 TypeError |

**3. ToString(value)：字符串转换**

| 输入类型         | 结果                                             |
| ---------------- | ------------------------------------------------ |
| `null`           | `"null"`                                         |
| `undefined`      | `"undefined"`                                    |
| `true` / `false` | `"true"` / `"false"`                             |
| Number           | 数字→字符串（如 `"123"`, `"Infinity"`, `"NaN"`） |
| Symbol           | 抛出 TypeError                                   |
| Object           | 调用 ToPrimitive(input, "string")                |

#### 常见隐式转换场景

**1. `+` 运算符 — 最复杂的转换规则：**

- 只要有一个操作数是字符串，优先字符串拼接（另一方转字符串）
- 否则，双方转 Number 后相加

```javascript
1 + '1' // "11"  (数字 + 字符串 → 字符串拼接)
1 + true // 2     (true → 1)
1 + false // 1     (false → 0)
1 + null // 1     (null → 0)
1 + undefined // NaN   (undefined → NaN)
'1' + null // "1null"
```

**2. `==` 抽象相等比较：**
按 ECMA 规范逐条判断：

- 类型相同 → 按 `===` 严格比较
- `null == undefined` → `true`（规范约定，双向成立）
- 一方是 Boolean → 先转 Number 再比较
- 一方是 String，一方是 Number → String 转 Number
- 一方是 Object，一方是 String/Number → Object 转原始值（ToPrimitive）

```javascript
[1] == 1       // true  (ToPrimitive([1]) → "1" → 1)
[1,2] == "1,2" // true  (ToPrimitive([1,2]) → "1,2")
[] == 0        // true  (ToPrimitive([]) → "" → 0)
[] == false    // true  (false → 0, [] → "" → 0)
[] == ![]      // true  (![] → false, [] → "" → 0, 0 == false → true)
```

**3. `if` / `while` / `!` / `&&` / `||` 条件判断 → Boolean 转换：**

falsy 值（共 8 个，转 `false`）：`false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`

其余所有值都是 truthy（包括 `{}`、`[]`、`"0"`、`"false"`、`new Boolean(false)`）。

**4. `-` / `*` / `/` / `%` 运算符 → 一律转 Number：**

```javascript
'6' - '2' // 4
'6' * '2' // 12
'6' / '2' // 3
```

#### 经典面试题解析

```javascript
[] + []        // ""      (ToPrimitive([]) → "" + "" → "")
[] + {}        // "[object Object]"  ("" + ToString({}))
{} + []        // 0        ({} 被解析为空代码块，+[] 转为 0)
true + true    // 2        (1 + 1)
1 + "1"        // "11"
1 - "1"        // 0
("b" + "a" + + "a" + "a").toLowerCase() // "banana"  (+"a" → NaN)
```

#### 如何避免与巧妙应用

- **避免**：始终使用 `===` 代替 `==`（除非显式判断 `x == null` 同时匹配 null 和 undefined）
- **巧妙应用**：
  - `+str` 快速转数字（`+"123"` → 123）
  - `!!val` 快速转布尔值（`!!"hello"` → true）
  - `"" + num` 快速转字符串（`"" + 456` → "456"）
  - `~~floatNum` 快速取整（向零截断，但仅限32位范围）
    :::

### 1.10 出现小数精度丢失的原因，JavaScript可以存储的最大数字、最大安全数字，JavaScript处理大数字的方法、避免精度丢失的方法

::: details 参考

#### 精度丢失原因

JavaScript 采用 IEEE 754 标准的**双精度 64 位浮点数**表示所有 Number 类型：

- 1 位符号位 + 11 位指数位 + 52 位尾数位
- 大多数十进制小数无法用二进制精确表示（如 0.1 在二进制中是无限循环小数 `0.000110011...`），被截断后产生舍入误差。

```javascript
0.1 + 0.2 === 0.3 // false，实际结果是 0.30000000000000004
0.1 + 0.7 === 0.8 // false，实际结果是 0.7999999999999999
```

#### JavaScript 中的关键数值

```javascript
Number.MAX_VALUE // 1.7976931348623157e+308  （最大可表示的正数）
Number.MIN_VALUE // 5e-324                    （最小可表示的正数，非零）
Number.MAX_SAFE_INTEGER // 9007199254740991 = 2^53-1 （最大安全整数）
Number.MIN_SAFE_INTEGER // -9007199254740991         （最小安全整数）
Number.EPSILON // 2.220446049250313e-16     （两个可表示数之间的最小差值）
Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2 // true！超过安全范围后精度丢失
```

#### 避免精度丢失的方法

**1. 转换为整数计算（金额场景）：**

```javascript
// 0.1 + 0.2
;(0.1 * 10 + 0.2 * 10) / 10 // 0.3

// 金额计算：统一用分（最小单位）存储
const amount = 1999 // 表示 19.99 元
```

**2. 使用 Number.EPSILON 进行近似比较：**

```javascript
function isEqual(a, b) {
  return Math.abs(a - b) < Number.EPSILON
}
isEqual(0.1 + 0.2, 0.3) // true
```

**3. 使用 toFixed / toPrecision（仅用于显示，不用于计算）：**

```javascript
;(0.1 + 0.2).toFixed(1) // "0.3"（注意返回字符串）
Number((0.1 + 0.2).toFixed(2)) // 0.3
```

**4. 使用第三方库（高精度计算）：**

- **decimal.js**：任意精度十进制运算
- **big.js**：轻量级精确小数运算
- **math.js**：数学计算库

**5. 超过安全整数使用 BigInt（ES2020）：**

````javascript
// 创建方式
const a = 9007199254740993n;          // n 后缀
const b = BigInt('9007199254740993');  // 构造函数（超出安全范围必须用字符串）

// 运算
a + b        // 18014398509481986n
a / 2n       // 4503599627370496n （除法自动舍去小数部分）

// 注意事项
// 不能与 Number 混合运算
// a + 1  // TypeError!
BigInt(a) + BigInt(1)  // OK

// 与 Number 比较
1n === 1     // false（类型不同，严格比较）
1n == 1      // true （宽松比较）
1n < 2       // true

// JSON.stringify 不支持 BigInt
// JSON.stringify({ val: 1n }); // TypeError!
// 解决方案：自定义 toJSON
BigInt.prototype.toJSON = function() { return Number(this); };
:::

### 1.11 深拷贝与浅拷贝

::: details 参考

#### 基本概念

- **浅拷贝**：复制对象的**第一层属性**，如果属性值是引用类型，则复制的是引用（新旧对象共享内部对象）。
- **深拷贝**：递归复制对象的所有层级，创建一个**完全独立**的副本，修改副本不影响原对象。

```javascript
const obj = { a: 1, b: { c: 2 } };

// 浅拷贝
const shallow = { ...obj };
shallow.b.c = 999;
console.log(obj.b.c);  // 999 — 原对象也被修改！

// 深拷贝（需要实现）
const deep = deepClone(obj);
deep.b.c = 888;
console.log(obj.b.c);  // 999 — 原对象不受影响
````

#### 浅拷贝的几种方式

| 方式                           | 适用场景          | 局限性 |
| ------------------------------ | ----------------- | ------ |
| 扩展运算符 `{ ...obj }`        | 普通对象          | 仅一层 |
| `Object.assign({}, obj)`       | 普通对象          | 仅一层 |
| `arr.slice()` / `arr.concat()` | 数组              | 仅一层 |
| `Array.from(arr)`              | 可迭代对象/类数组 | 仅一层 |

#### 深拷贝的实现

**1. JSON 序列化（最简单，但有严重局限性）：**

```javascript
const copy = JSON.parse(JSON.stringify(obj))
```

**无法处理的情况：**

- `undefined`、`Function`、`Symbol` → 直接丢失
- `NaN`、`Infinity` → 转为 `null`
- `Date` → 转为字符串（无法还原为 Date 对象）
- `RegExp`、`Map`、`Set` → 转为空对象 `{}`
- 循环引用 → 直接抛错
- `BigInt` → 直接抛错

**2. `structuredClone()`（现代推荐方案）：**

```javascript
const copy = structuredClone(obj)
```

**支持：** 循环引用、Date、Map、Set、ArrayBuffer、Blob、File 等。
**不支持：** Function、Symbol、DOM 节点、Error 对象、原型链会丢失（变成普通 Object）。
**兼容性：** Chrome 98+ / Firefox 94+ / Safari 15.4+ / Node.js 17+。

**3. 手写递归深拷贝（解决循环引用 + 多类型）：**

```javascript
function deepClone(target, cache = new WeakMap()) {
  // 基本类型和 null 直接返回
  if (typeof target !== 'object' || target === null) return target

  // 循环引用检查：已经克隆过就直接返回缓存
  if (cache.has(target)) return cache.get(target)

  // Date 和 RegExp 特殊处理
  if (target instanceof Date) return new Date(target)
  if (target instanceof RegExp) return new RegExp(target.source, target.flags)

  // Map
  if (target instanceof Map) {
    const clone = new Map()
    cache.set(target, clone)
    target.forEach((v, k) => clone.set(deepClone(k, cache), deepClone(v, cache)))
    return clone
  }

  // Set
  if (target instanceof Set) {
    const clone = new Set()
    cache.set(target, clone)
    target.forEach((v) => clone.add(deepClone(v, cache)))
    return clone
  }

  // 数组或普通对象
  const clone = Array.isArray(target) ? [] : Object.create(Object.getPrototypeOf(target))
  cache.set(target, clone)

  // 递归复制（包括 Symbol 属性）
  ;[...Object.keys(target), ...Object.getOwnPropertySymbols(target)].forEach((key) => {
    clone[key] = deepClone(target[key], cache)
  })

  return clone
}
```

#### 深拷贝性能考量

| 方案               | 性能                       | 适用场景                                |
| ------------------ | -------------------------- | --------------------------------------- |
| `JSON` 序列化      | 中等                       | 简单数据对象，无特殊类型                |
| `structuredClone`  | **最快**（浏览器原生实现） | 现代环境的首选                          |
| 手写递归           | 较慢（JS 层）              | 需要保留 Function/Symbol 或兼容旧浏览器 |
| `lodash.cloneDeep` | 中等                       | 最成熟的第三方方案，边缘情况处理最全面  |

> **总结**：优先用 `structuredClone()`；需要兼容旧浏览器或处理 Function 时用手写递归；简单场景（纯 JSON 数据）可以用 `JSON` 方式。
> :::

## 2 原型和原型链

### 2.1 理解原型设计模式以及JavaScript中的原型规则

::: details 参考
在 JavaScript 中，每个对象都有一个内部属性 `[[Prototype]]`，它指向另一个对象，这个对象就是该对象的原型。而原型本身也可以有自己的原型，形成了一个原型链（prototype chain）。

**核心关系：**

- 每个构造函数（Function）都有一个 `prototype` 属性，指向其原型对象
- 每个实例对象通过 `Object.getPrototypeOf(instance)` 可以访问其 `[[Prototype]]`（即构造函数的 `prototype`）
- 即：`Object.getPrototypeOf(instance) === Constructor.prototype`
- 原型链的终点是 `null`：`Object.getPrototypeOf(Object.prototype) === null`

**特点：** JavaScript 对象是通过引用来传递的，我们创建的每个新对象实体中并没有一份属于自己的原型副本，当我们修改原型时，与之相关的对象也会继承这一改变。

当我们需要一个属性时，JavaScript 引擎会先看当前对象中是否有这个属性，如果没有的话，就会沿着 `[[Prototype]]` 链向上查找，一直检索到 `Object.prototype`（最终到达 `null`）。

```javascript
function Func() {}
Func.prototype.name = '娃哈哈'
Func.prototype.getInfo = function () {
  return this.name
}
var person = new Func()
console.log(person.getInfo()) // "娃哈哈"
console.log(Func.prototype) // { name: "娃哈哈", getInfo: [Function] }
console.log(Object.getPrototypeOf(person) === Func.prototype) // true
```

> **注意**：不推荐使用已废弃的 `__proto__` 属性访问原型，应使用 `Object.getPrototypeOf()` / `Object.setPrototypeOf()` / `Object.create()`。

:::

### 2.2 instanceof的底层实现原理，手动实现一个instanceof

::: details 参考

#### 原理

`instanceof` 运算符用于检测**构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上**。它的机制是沿左侧对象的 `[[Prototype]]` 链逐级向上查找，判断是否能找到右侧构造函数的 `prototype`。

```javascript
[] instanceof Array      // true  — Array.prototype 在 [] 的原型链上
[] instanceof Object     // true  — Object.prototype 也在原链上
[] instanceof Function   // false
```

#### 手动实现

```javascript
function myInstanceof(instance, constructor) {
  // 基本类型直接返回 false
  if (typeof instance !== 'object' || instance === null) return false

  // 获取右侧构造函数的 prototype
  const prototype = constructor.prototype

  // 沿原型链向上查找
  let proto = Object.getPrototypeOf(instance)
  while (proto !== null) {
    if (proto === prototype) return true
    proto = Object.getPrototypeOf(proto)
  }
  return false
}

// 测试
myInstanceof([], Array) // true
myInstanceof([], Object) // true
myInstanceof(123, Number) // false（基本类型）
```

#### 注意事项

1. **跨 iframe / realm 失效**：不同 iframe 或 window 有独立的执行环境，各自的 `Array.prototype` 是不同的引用，`arr instanceof Array` 在跨环境时会返回 `false`。解决方案：使用 `Array.isArray()` 或 `Object.prototype.toString.call()`。

2. **`Symbol.hasInstance`（ES6）**：构造函数可以通过这个内置 Symbol 自定义 `instanceof` 行为：

```javascript
class MyClass {
  static [Symbol.hasInstance](instance) {
    return typeof instance === 'string'
  }
}
'hello' instanceof MyClass // true
```

:::

### 2.3 实现继承的几种方式以及他们的优缺点

::: details 参考

#### 1. 原型链继承（Prototype Inheritance）：

- **优点：**
  - 简单易懂，容易实现。
  - 可以实现基本的继承关系。
- **缺点：**
  - 所有实例共享原型对象，可能导致意外的属性和方法覆盖。
  - 不能传递参数给父类构造函数。
  - 无法实现多继承。

```
function Parent() {
  this.name = "Parent";
}
Parent.prototype.sayHello = function () {
  console.log("Hello, " + this.name);
};

function Child() {
  this.name = "Child";
}
Child.prototype = new Parent();
```

#### 2.构造函数继承（Constructor Inheritance）：

- **优点：**
  - 避免了原型链继承中的共享问题。
  - 可以传递参数给父类构造函数。
- **缺点：**
  - 无法继承父类原型上的方法。
  - 每个子类实例都有自己的一份父类的属性副本，可能浪费内存。

```
function Parent(name) {
  this.name = name || "Parent";
}

function Child(name) {
  Parent.call(this, name);
  this.childProp = "Child";
}
```

#### 3.组合继承（Combination Inheritance）：

- **优点：**
  - 同时使用构造函数继承和原型链继承的优点。
  - 可以继承父类的属性和方法，也可以传递参数给父类构造函数。
- **缺点：**
  - 调用了两次父类构造函数，可能导致性能问题和不必要的属性复制。

```
function Parent(name) {
  this.name = name || "Parent";
}
Parent.prototype.sayHello = function () {
  console.log("Hello, " + this.name);
};

function Child(name) {
  Parent.call(this, name);
  this.childProp = "Child";
}
Child.prototype = new Parent();
```

#### 4.原型式继承（Prototypal Inheritance）：

- **优点：**
  - 简单，可以通过现有对象创建新对象。
- **缺点：**
  - 共享原型，可能会导致属性和方法污染。

```
var parent = {
  name: "Parent",
  sayHello: function () {
    console.log("Hello, " + this.name);
  },
};

var child = Object.create(parent);
child.name = "Child";
```

#### 5.寄生式继承（Parasitic Inheritance）：

- **优点：**
  - 可以在不修改原对象的情况下扩展它。
- **缺点：**
  - 可能难以维护，不够清晰。

```
function createChild(parent) {
  var child = Object.create(parent);
  child.name = "Child";
  return child;
}
```

#### 6.寄生组合式继承（Parasitic Combination Inheritance）：

- **优点：**
  - 避免了组合继承中调用两次父类构造函数的问题。
  - 继承父类的属性和方法，同时不会共享原型。
    **缺点：**
  - 相对复杂。

```
function inherit(child, parent) {
  var prototype = Object.create(parent.prototype);
  prototype.constructor = child;
  child.prototype = prototype;
}
function Parent(name) {
  this.name = name || "Parent";
}
Parent.prototype.sayHello = function () {
  console.log("Hello, " + this.name);
};

function Child(name) {
  Parent.call(this, name);
  this.childProp = "Child";
}
inherit(Child, Parent);
```

:::

### 2.4 至少说出一种开源项目(如Node)中应用原型继承的案例

::: details 参考

#### 1. Node.js Stream 模块 — 四层继承链

Node.js 核心模块 `stream` 是最经典的 Node 源码中原型继承的应用：

```
Readable (可读流)
   ↖
   Duplex (双工流) → Transform (转换流)
   ↙
Writable (可写流)
```

源码中（简化）：

```javascript
// Node.js 内部实现
function Duplex(options) {
  Readable.call(this, options)
  Writable.call(this, options)
}
// Duplex.prototype 同时继承 Readable.prototype 和 Writable.prototype
Object.setPrototypeOf(Duplex.prototype, Readable.prototype)
// 再将 Writable 的方法混入 Duplex.prototype
Object.assign(Duplex.prototype, Writable.prototype)
```

这种设计的巧妙之处：`Duplex` 通过原型继承获得了 `Readable` 的 `pipe`/`read` 等能力，通过混入获得了 `Writable` 的 `write`/`end` 等能力，而 `Transform` 再次继承 `Duplex`，形成了清晰的能力层次。

#### 2. Vue.js 2.x — Object.create() 数据代理

Vue 2 的响应式系统中，每个响应式数据项的 `__ob__` 指向其对应的 Observer 实例，Observer 的原型上挂载了 `dep`（依赖收集器）和 `walk`/`observeArray` 等方法，这是典型的原型模式：所有 Observer 实例共享同一份依赖收集和通知的方法。

#### 3. Express.js — 中间件 req/res 原型扩展

Express 中，每个请求的 `req` 和 `res` 对象通过 `Object.create()` 继承自 `http.IncomingMessage.prototype` 和 `http.ServerResponse.prototype`，并在其原型上扩展了 `req.params`、`req.query`、`res.json()`、`res.status()` 等便捷方法，所有请求实例共享这些方法。

> **总结**：原型继承适用于构建能力层次模型（"A 是一种 B，并额外拥有某些能力"），现代开发中推荐使用 ES6 class extends 替代手动原型继承，但理解底层原理对阅读框架源码至关重要。
> :::

### 2.5 可以描述new一个对象的详细过程，手动实现一个new操作符

::: details 参考

1. 创建一个空对象；
2. 将空对象的 `[[Prototype]]` 指向构造函数的 `prototype` 属性：
   `const obj = Object.create(ClassA.prototype);`
3. 执行构造函数，将 `this` 指向新创建的对象：
   `const result = ClassA.apply(obj, args);`
4. 判断返回值：如果构造函数返回一个对象，则返回这个对象；否则返回新创建的对象。

#### 手动实现 `_new`

```javascript
function _new(constructor, ...args) {
  // 1+2. 创建空对象并设置原型
  const obj = Object.create(constructor.prototype)
  // 3. 执行构造函数，绑定 this
  const result = constructor.apply(obj, args)
  // 4. 判断返回值
  return typeof result === 'object' && result !== null ? result : obj
}

// 测试
function Person(name, age) {
  this.name = name
  this.age = age
}
const p = _new(Person, 'Alice', 25)
console.log(p.name) // "Alice"
console.log(Object.getPrototypeOf(p) === Person.prototype) // true
```

> **注意**：`new` 操作符不能与箭头函数一起使用，因为箭头函数没有自己的 `prototype` 属性，也没有 `[[Construct]]` 内部槽位。
> :::

### 2.6 call, apply, bind

::: details 参考

#### 三者核心区别

| 方法    | 参数传递                            | 是否立即执行       | 返回值               |
| ------- | ----------------------------------- | ------------------ | -------------------- |
| `call`  | 逐个传参 `fn.call(ctx, a, b, c)`    | 是                 | 函数执行结果         |
| `apply` | 数组传参 `fn.apply(ctx, [a, b, c])` | 是                 | 函数执行结果         |
| `bind`  | 逐个传参 `fn.bind(ctx, a, b)`       | **否**，返回新函数 | 绑定 this 后的新函数 |

#### 核心用途

1. **显式改变 this 指向**：`Array.prototype.slice.call(arguments)` 将类数组转为数组
2. **借用方法**：`Math.max.apply(null, [1, 2, 3])` 借用 Math.max 处理数组
3. **bind 用于固定参数（柯里化）**：`fn.bind(ctx, preArg1, preArg2)` 预先填充部分参数

#### 手写实现

**myCall：**

```javascript
Function.prototype.myCall = function (context, ...args) {
  // 处理 null/undefined 情况
  context = context == null ? globalThis : Object(context)
  // 用 Symbol 创建临时属性，避免覆盖原属性
  const fnKey = Symbol('fn')
  context[fnKey] = this // this 即调用 myCall 的函数
  const result = context[fnKey](...args)
  delete context[fnKey] // 清理
  return result
}
```

**myApply：**

```javascript
Function.prototype.myApply = function (context, args) {
  context = context == null ? globalThis : Object(context)
  const fnKey = Symbol('fn')
  context[fnKey] = this
  const result = args ? context[fnKey](...args) : context[fnKey]()
  delete context[fnKey]
  return result
}
```

**myBind：**

```javascript
Function.prototype.myBind = function (context, ...boundArgs) {
  const fn = this // 保存原函数

  function boundFn(...args) {
    // 如果作为构造函数调用（通过 new），this 是实例，不应用绑定的 context
    // 否则应用 context
    return fn.apply(this instanceof boundFn ? this : context, [...boundArgs, ...args])
  }

  // 维护原型链：让 boundFn 的实例能访问原函数的 prototype
  boundFn.prototype = Object.create(fn.prototype)
  return boundFn
}

// 测试
function greet(greeting, punctuation) {
  return `${greeting}, ${this.name}${punctuation}`
}
const obj = { name: 'World' }
const boundGreet = greet.myBind(obj, 'Hello')
boundGreet('!') // "Hello, World!"
```

#### bind 的特殊场景

````javascript
// bind 返回的函数作为构造函数时，this 指向新创建的实例
function Person(name) {
  this.name = name;
}
const BoundPerson = Person.bind({ fake: 'context' }, 'Alice');
const p = new BoundPerson();
console.log(p.name);  // "Alice" — bound 的 context 被忽略，this 指向实例
:::

### 2.7 理解es6 class构造以及继承的底层实现原理

::: details 参考

#### 1. ES6 class 的本质

class 语法本质上是**原型继承的语法糖**，底层仍然是 JavaScript 的原型链机制。但 class 在语法层面引入了几个关键约束：

- **必须使用 new 调用**：`Person()` 会抛出 TypeError，而传统构造函数可以当普通函数调用
- **不存在变量提升（TDZ）**：class 声明存在暂时性死区，不能在声明前使用
- **内部默认严格模式**：class 体内代码自动使用 `"use strict"`
- **方法不可枚举**：prototype 上的方法 `enumerable: false`（传统构造函数的 prototype 方法默认是可枚举的）
- **class 内不能直接定义属性**（ES2022 之前）：只能定义方法。ES2022 起正式支持 class fields

#### 2. Babel 编译对应关系

```javascript
// ES6 class
class Parent {
  constructor(name) { this.name = name; }
  sayHi() { return `Hi, ${this.name}`; }
}
class Child extends Parent {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
}

// Babel 编译为 ES5 等价代码（简化）：
function Parent(name) { this.name = name; }
Parent.prototype.sayHi = function() { return 'Hi, ' + this.name; };

function Child(name, age) {
  Parent.call(this, name);  // super(name) 的本质
  this.age = age;
}
// 寄生组合式继承
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;
````

#### 3. extends 继承的底层原理

**super() 的本质**：

- `super(arg)` 在构造函数中等同于 `Parent.call(this, arg)`，但只能在派生类的构造函数中使用
- JavaScript 为每个函数设置了 `[[ConstructorKind]]` 内部槽位，class 的值为 `"derived"`
- 派生类构造函数中，`super()` 调用前不能访问 `this`（`this` 未初始化）

**ES5 vs ES6 继承的关键区别**：

- **ES5 方式（先实例后修饰）**：先创建子类实例 `this`，再将父类属性/方法通过 `Parent.call(this)` 绑定上去
- **ES6 方式（先父类实例再修饰）**：先在父类构造函数中创建实例（由 `super()` 完成），子类再对这个实例进行扩展。这意味着内置类（如 Array、Error）可以被正确继承

```javascript
// ES5 方式无法正确继承 Array（经典问题）
function MyArrayES5() {
  Array.apply(this, arguments)
}
MyArrayES5.prototype = Object.create(Array.prototype)
var arr5 = new MyArrayES5(1, 2, 3)
arr5.length // 0 — 错误！Array 内部机制未被正确调用

// ES6 class extends 可以正确继承
class MyArray extends Array {}
const arr = new MyArray(1, 2, 3)
arr.length // 3 — 正确
```

#### 4. `super.method()` 与 `[[HomeObject]]`

当在子类方法中使用 `super.method()` 调用父类方法时，JavaScript 通过 `[[HomeObject]]` 内部槽位确定"父类是谁"：

```javascript
const parent = {
  name: 'Parent',
  sayHi() {
    return `Hi, ${this.name}`
  }
}
const child = {
  __proto__: parent,
  sayHi() {
    return super.sayHi() + ' — from child'
  }
  // super 会查找 [[HomeObject]]（即 child）的 proto（即 parent）
}
Object.setPrototypeOf(child, parent)
child.sayHi() // "Hi, undefined — from child"
```

#### 5. 手动实现 extends 的 `_inherits` 函数

````javascript
function _inherits(subClass, superClass) {
  // 寄生组合式继承
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  // 设置静态方法的继承
  Object.setPrototypeOf(subClass, superClass);
}

// 使用
function Animal(name) { this.name = name; }
function Dog(name, breed) {
  Animal.call(this, name);  // super(name)
  this.breed = breed;
}
_inherits(Dog, Animal);
:::

## 3 作用域和闭包

### 3.1 理解词法（静态）作用域和动态作用域

静态作用域：JavaScript 使用的是静态作用域，也被称为词法作用域。词法作用域是**在代码编写阶段确定的，变量作用域由其定义位置决定。**
动态作用域：动态作用域是在运行时根据函数调用链确定的，变量作用域由调用顺序决定。

### 3.2 理解JavaScript的作用域和作用域链

作用域：**定义了变量、函数及对象在代码中的可见性和访问范围**在 JavaScript 中，有全局作用域和局部作用域之分。全局作用域中声明的变量可以在整个脚本中访问，而局部作用域中声明的变量只能在其所在的函数或代码块中访问。ES6 引入的 let 和 const 关键字还引入了块级作用域。

作用域链： 作用域链的作用是保证对执行环境有权访问的所有变量和函数的有序访问，通过作用域链，我们可以访问到外层环境的变量和函数。

作用域链的本质上是一个指向变量对象的指针列表。变量对象是一个包含了执行环境中所有变量和函数的对象。作用域链的前端始终都是当前执行上下文的变量对象。全局执行上下文的变量对象（也就是全局对象）始终是作用域链的最后一个对象。

当我们查找一个变量时，如果当前执行环境中没有找到，我们可以沿着作用域链向后查找。

### 3.3 理解JavaScript的执行上下文栈，可以应用堆栈信息快速定位问题

::: details 参考

#### 三种执行上下文

JavaScript 中有三种执行上下文：

| 类型 | 创建时机 | 特点 |
|------|---------|------|
| **全局执行上下文** | 脚本加载时 | 一个程序只有一个，`this` 指向全局对象（浏览器是 `window`） |
| **函数执行上下文** | 每次函数调用时 | 每个函数调用创建一个新的上下文 |
| **Eval 执行上下文** | `eval()` 调用时 | 极少使用，严格模式下有独立作用域 |

#### 执行上下文栈（Call Stack / Execution Context Stack）

JavaScript 引擎使用**栈（LIFO）**来管理所有执行上下文：

```javascript
function foo() {
  console.log('foo');
  bar();
  console.log('foo end');
}
function bar() {
  console.log('bar');
  throw new Error('查看调用栈');
}
function baz() { foo(); }

baz();
// 栈变化过程：
// 1. [ Global EC ]   — 程序启动
// 2. [ Global EC, baz EC ]  — 调用 baz()
// 3. [ Global EC, baz EC, foo EC ] — 调用 foo()
// 4. [ Global EC, baz EC, foo EC, bar EC ] — 调用 bar()
// 5. bar 抛出错误，栈被打印（Error.stack）
// 6. bar 出栈 → foo 出栈 → baz 出栈 → Global
````

#### 每个执行上下文的三个属性

1. **变量对象（Variable Object / AO）**：包含当前上下文中的所有变量、函数声明、形参
2. **作用域链（Scope Chain）**：当前 AO + 所有外层上下文的 AO 列表
3. **this**：根据调用方式动态确定

#### 利用栈信息定位问题

**1. Error.stack（开发环境）：**

```javascript
try {
  // 可能出错的代码
} catch (e) {
  console.log(e.stack)
  // 输出类似：
  // Error: ...
  //   at bar (main.js:10:9)
  //   at foo (main.js:5:3)
  //   at baz (main.js:13:1)
  // 可逐层追溯调用来源
}
```

**2. DevTools Call Stack 面板**：在断点处查看当前调用栈，点击任意层级可跳转到对应源码位置。

**3. Source Map + 错误上报**：生产环境代码被压缩混淆，通过 Source Map 将压缩后的行列号映射回源码，配合 Sentry/Fundebug 等前端监控平台定位线上错误。
:::

### 3.4 this的原理以及几种不同使用场景的取值

```
在浏览器里，在全局范围内this 指向window对象；
在函数中，this永远指向最后调用他的那个对象；
构造函数中，this指向new出来的那个新的对象；
call、apply、bind中的this被强绑定在指定的那个对象上；
箭头函数中this比较特殊,箭头函数this为父作用域的this，不是调用时的this.要知道前四种方式,都是调用时确定,也就是动态的,而箭头函数的this指向是静态的,声明的时候就确定了下来；
apply、call、bind都是js给函数内置的一些API，调用他们可以为函数指定this的执行,同时也可以传参。
```

### 3.5 闭包的实现原理和作用，可以列举几个开发中闭包的实际应用

> - 闭包概念
>   有权访问另一个函数作用域内变量的函数。
>   或简单理解为定义在一个函数内部的函数，内部函数持有外部函数内变量的引用。

> - 闭包用途
>   1、读取函数内部的变量
>   2、让这些变量的值始终保持在内存中。不会再f1调用后被自动清除。
>   3、方便调用上下文的局部变量。利于代码封装。
>   原因：f1是f2的父函数，f2被赋给了一个全局变量，f2始终存在内存中，f2的存在依赖f1，因此f1也始终存在内存中，不会在调用结束后，被垃圾回收机制回收。

> - 闭包缺点
>   1、由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题，在IE中可能导致内存泄露。解决方法是，在退出函数之前，将不使用的局部变量全部删除。
>   2、闭包会在父函数外部，改变父函数内部变量的值。所以，如果你把父函数当作对象（object）使用，把闭包当作它的公用方法（Public Method），把内部变量当作它的私有属性（private value），这时一定要小心，不要随便改变父函数内部变量的值。

> - 闭包应用场景

```
  闭包应用场景之setTimeout
  //setTimeout传递的第一个函数不能带参数
  setTimeout((param) => {
      alert(param)
  }, 1000);

  //通过闭包可以实现传参效果
  function func(param) {
      return function() {
          alert(param)
      }
  }
  var f1 = func('娃哈哈');
  setTimeout(f1, 1000)//娃哈哈
```

### 3.6 理解堆栈溢出和内存泄漏的原理，如何防止

::: details 参考

#### 堆栈溢出（Stack Overflow）

调用栈的空间是有限的（Chrome V8 约 1MB），当递归过深或函数调用层级过多时会超出栈空间，抛出 `RangeError: Maximum call stack size exceeded`。

```javascript
function recursive() {
  recursive()
}
recursive() // RangeError: Maximum call stack size exceeded
```

**避免方案：**

1. **改为迭代代替递归**
2. **尾递归优化**（ES6 严格模式，要求 `return` 后只有递归调用，无额外运算；Safari 已支持，V8 有限支持）
3. **setTimeout / setImmediate 拆分递归**：将递归拆到下一个任务，每一层出栈后再入栈，避免栈累积

```javascript
// 尾递归写法（严格模式下）
function factorial(n, acc = 1) {
  'use strict';
  if (n <= 1) return acc;
  return factorial(n - 1, n * acc);  // 尾调用，可以优化
}
```

#### 内存泄漏（Memory Leak）

内存泄漏指不再使用的内存没有被 GC 回收，累积导致内存占用持续增大。

**四种常见场景：**

| 场景                        | 原因                                                            | 解决                                              |
| --------------------------- | --------------------------------------------------------------- | ------------------------------------------------- |
| **意外全局变量**            | `a = 1`（未声明）或 `window.a = ...` 不会被回收                 | 严格模式 + `const`/`let`                          |
| **忘记清除的定时器/监听器** | `setInterval`、`addEventListener` 未移除，回调保持对 DOM 的引用 | 组件销毁时 `clearInterval`、`removeEventListener` |
| **闭包引用**                | 闭包中持有了大对象的引用，即使只用了一个小属性                  | 不需要的引用手动置 `null`                         |
| **游离的 DOM 引用**         | JS 变量中保持了对已从 DOM 树移除的元素的引用                    | 删除 DOM 时同步释放 JS 引用                       |

```javascript
// 典型泄露：闭包持有了不需要的大对象
function outer() {
  const hugeData = new Array(10000000) // 大量数据
  return function () {
    return hugeData[0] // 只用了第一个元素，但整个数组都被保留
  }
}
```

#### V8 垃圾回收机制（简述）

- **新生代（New Space）**：Scavenge 算法（Cheney 复制），存活对象复制到空闲区，死对象丢弃。生存两轮的晋升到老生代。
- **老生代（Old Space）**：Mark-Sweep-Compact 三阶段——标记（可达对象）、清除（不可达对象）、整理（消除碎片）。配合增量标记减少 STW（Stop The World）时间。

#### 检测工具

- **Chrome DevTools → Memory**：Heap Snapshot（对比前后快照找增长）、Allocation instrumentation on timeline（查看分配时间线）、Allocation sampling（采样分析）
- **Performance Monitor**：持续观察 JS heap size 趋势
  :::

### 3.7 如何处理循环的异步操作

::: details 参考

#### 常见误区

```javascript
// ❌ forEach 中 async 回调不会等待，循环直接跑完
;[1, 2, 3].forEach(async (item) => {
  await fetch(`/api/${item}`) // 回调给了 fetch，但 forEach 不等 await
})

// ❌ map 返回的是 Promise 数组，不一定按顺序执行
const results = [1, 2, 3].map(async (item) => {
  return await fetchSomething(item)
})
// results 是 [Promise, Promise, Promise]，需要用 Promise.all 包裹
```

#### 四种处理方式

**1. 串行 — for...of + await（最推荐，最易读）：**

```javascript
async function processSerial(items) {
  for (const item of items) {
    const result = await fetchItem(item)
    console.log(result)
  }
}
// 上一个 fetch 完成才执行下一个
```

**2. 并行 — Promise.all（相互独立、不依赖顺序时最优）：**

```javascript
async function processParallel(items) {
  const results = await Promise.all(items.map((item) => fetchItem(item)))
  return results
}
// 所有请求同时发出，等待全部完成。但要注意不要同时发起过多请求
```

**3. 串行 — Array.reduce 链式：**

```javascript
async function processReduce(items) {
  await items.reduce((chain, item) => {
    return chain.then(() => fetchItem(item))
  }, Promise.resolve())
}
```

**4. 并发控制 — 限制同时运行 N 个（信号量模式）：**

```javascript
async function parallelLimit(tasks, limit = 3) {
  const results = []
  const executing = new Set()
  for (const task of tasks) {
    const p = Promise.resolve(task()).then((result) => {
      executing.delete(p)
      return result
    })
    executing.add(p)
    results.push(p)
    if (executing.size >= limit) {
      await Promise.race(executing) // 等有任意一个完成再继续
    }
  }
  return Promise.all(results)
}

// 使用：一次最多3个并发
const taskFns = urls.map((url) => () => fetch(url))
const data = await parallelLimit(taskFns, 3)
```

#### 串行 vs 并行选择原则

| 场景                              | 推荐                |
| --------------------------------- | ------------------- |
| 下一个请求依赖上一个的结果        | 串行                |
| 各请求相互独立                    | 并行（Promise.all） |
| 大量请求（几十+），避免压垮服务器 | 并发控制            |
| 需要保证执行顺序                  | 串行                |

:::

### 3.8 理解模块化解决的实际问题，可列举几个模块化方案并理解其中原理

::: details 参考

#### 模块化解决的问题

1. **命名冲突**：全局变量泛滥，"a.js 的变量覆盖了 b.js 的变量"
2. **依赖管理**：手动管理 `<script>` 顺序，依赖关系不清晰
3. **代码组织**：按功能拆分文件，提高可维护性和复用性
4. **作用域隔离**：模块内部变量不污染全局

#### 五种模块化方案

| 方案         | 出现时期 | 加载方式 | 特点                                                 |
| ------------ | -------- | -------- | ---------------------------------------------------- |
| **IIFE**     | 早期     | 同步     | 闭包隔离作用域，手动挂载到 window                    |
| **CommonJS** | Node.js  | 同步     | `require`/`module.exports`，值拷贝，有缓存           |
| **AMD**      | 浏览器   | 异步前置 | `require(['a'], fn)`，RequireJS 实现                 |
| **CMD**      | 浏览器   | 异步就近 | `define(fn)`，SeaJS 实现                             |
| **ESM**      | ES6      | 静态     | `import`/`export`，编译时确定依赖，支持 Tree Shaking |

#### CommonJS vs ESM 核心差异

|                  | CommonJS                                   | ES Module                                |
| ---------------- | ------------------------------------------ | ---------------------------------------- |
| **语法**         | `require()` / `module.exports`             | `import` / `export`                      |
| **加载时机**     | 运行时动态加载                             | 编译时静态分析                           |
| **值传递方式**   | **值的拷贝**（基础类型）或引用拷贝（对象） | **值的引用**（绑定，原模块值变化会反映） |
| **缓存**         | `require` 后缓存，二次 require 返回缓存    | 模块只执行一次，重新 import 返回同一引用 |
| **this 值**      | `this` 指向当前模块                        | `this` === `undefined`                   |
| **Tree Shaking** | 不支持                                     | 支持（静态依赖分析）                     |

#### Webpack 打包原理简述

Webpack 将所有模块编译到一个 IIFE 中，通过自实现的 `__webpack_require__` 函数模拟模块加载：

1. 每个模块分配一个 moduleId
2. 模块代码被 `eval()` 包裹（或直接内联），通过 `__webpack_require__` 引用其他模块
3. `__webpack_require__` 维护一个已加载模块缓存对象 `installedModules`
4. 首次加载时执行模块代码并缓存 `exports`，二次访问直接返回缓存
   :::

## 4 执行机制

### 4.1 为何try里面放return，finally还会执行，理解其内部机制

::: details 参考
当try块中包含return语句时，finally块依然会执行，因为finally块的主要目的是在退出try块**时执行必要的清理工作，而不仅仅是处理异常**。

理解其内部机制的关键点是：finally块中的代码是在try块执行完成后（包括正常执行和异常处理）立即执行的，然后才会将函数的返回值传递出去。
:::

### 4.2 JavaScript如何实现异步编程，可以详细描述EventLoop(事件循环)机制

::: details 参考

JavaScript事件循环（Event Loop）是JavaScript运行环境（浏览器或Node.js）中处理异步任务的机制。

事件循环的核心是一个事件队列，它存储待处理的事件或任务。当事件循环开始时，它会从事件队列中取出最先进入队列的事件，并执行相关的回调函数。如果事件队列中有多个事件，事件循环会按照顺序逐一取出并执行，直到队列为空。

除了事件队列外，事件循环还包括以下几个重要的组件：

- 宏任务队列：存储宏任务（MacroTask），例如setTimeout、setInterval、I/O操作等。
- 微任务队列：存储微任务（MicroTask），例如Promise、process.nextTick等。
- 当前正在执行的任务：即执行栈中的任务，通常为当前执行的回调函数。

**事件循环的执行顺序如下：**

1. 执行当前执行栈中的任务，直到执行栈为空。
2. 执行微任务队列中的所有任务，直到队列为空。
3. 取出宏任务队列中最先进入队列的任务，执行其相关回调函数。
4. 重复执行上述步骤，直到宏任务队列和微任务队列都为空。

:::

### 4.2.1 Promise 深入与 async/await 原理

::: details 参考

#### Promise

一句话概括 Promise：Promise 对象**用于异步操作，它表示一个尚未完成且预计在未来完成的异步操作**。

Promise 主要解决两个问题：

- **回调地狱**：避免嵌套过多的回调函数，提高代码的可读性
- **并行和错误处理**：更容易并行执行多个异步操作和统一错误处理

Promise 有三种状态：**pending（等待）、fulfilled（已完成）、rejected（已拒绝）**，状态一旦改变就不可逆。

**Promise 的简单实现：**

```javascript
class MyPromise {
  constructor(fn) {
    this.resolvedCallbacks = []
    this.rejectedCallbacks = []
    this.state = 'PADDING'
    this.value = ''
    fn(this.resolve.bind(this), this.reject.bind(this))
  }
  resolve(value) {
    if (this.state === 'PADDING') {
      this.state = 'RESOLVED'
      this.value = value
      this.resolvedCallbacks.forEach((cb) => cb())
    }
  }
  reject(value) {
    if (this.state === 'PADDING') {
      this.state = 'REJECTED'
      this.value = value
      this.rejectedCallbacks.forEach((cb) => cb())
    }
  }
  then(resolve = function () {}, reject = function () {}) {
    if (this.state === 'PADDING') {
      this.resolvedCallbacks.push(resolve)
      this.rejectedCallbacks.push(reject)
    }
    if (this.state === 'RESOLVED') {
      resolve(this.value)
    }
    if (this.state === 'REJECTED') {
      reject(this.value)
    }
  }
}
```

**静态方法一览：**

| 方法                           | 用途                      | 关注点                                              |
| ------------------------------ | ------------------------- | --------------------------------------------------- |
| `Promise.all([p1, p2])`        | 合并多个 Promise          | 等待**所有成功**，任一 reject 则整体 reject         |
| `Promise.allSettled([p1, p2])` | 合并多个 Promise          | 等待**所有完成**，不管成功失败，返回每条结果        |
| `Promise.race([p1, p2])`       | 合并多个 Promise          | **第一个完成**的（不论成功失败）                    |
| `Promise.any([p1, p2])`        | 合并多个 Promise          | **第一个成功**的，全失败才 reject（AggregateError） |
| `Promise.resolve(val)`         | 创建已 resolve 的 Promise | 快捷创建                                            |
| `Promise.reject(err)`          | 创建已 reject 的 Promise  | 快捷创建                                            |

#### async/await

一种处理异步操作的语法糖，使异步编程更加清晰和易于理解。`async` 定义异步函数，`await` 暂停函数执行，等待 Promise 解决后返回结果。

- **async/await 是 Generator 的语法糖**：`async function` 等价于 `co + generator`，`await` 等价于 `yield` + `.next()`
- **async/await 也是 Promise 之上的语法糖**：`async` 函数返回的始终是 Promise，`await` 本质是 `.then(res => ...)` 的同步写法

:::

### 4.2.2 Iterator 与 Generator 深入

::: details 参考

Generator 是理解 async/await 本质的关键 —— async/await 本质上是 Generator + 自动执行器（如 `co` 库）的语法糖。

#### 迭代器协议（Iterator Protocol）

任何对象实现了 `next()` 方法，返回 `{ value, done }` 结构，就是一个迭代器：

```javascript
function createIterator(arr) {
  let i = 0
  return {
    next() {
      return i < arr.length ? { value: arr[i++], done: false } : { value: undefined, done: true }
    }
  }
}
const it = createIterator([1, 2, 3])
it.next() // { value: 1, done: false }
it.next() // { value: 2, done: false }
it.next() // { value: 3, done: false }
it.next() // { value: undefined, done: true }
```

#### 可迭代协议（Iterable Protocol）

对象实现了 `[Symbol.iterator]` 方法，返回一个迭代器，就可以被 `for...of`、`...` 展开等消费：

```javascript
const range = {
  from: 1,
  to: 5,
  [Symbol.iterator]() {
    return {
      current: this.from,
      last: this.to,
      next() {
        return this.current <= this.last
          ? { value: this.current++, done: false }
          : { value: undefined, done: true }
      }
    }
  }
}
for (const n of range) {
  console.log(n)
} // 1 2 3 4 5
console.log([...range]) // [1, 2, 3, 4, 5]
```

#### Generator 函数（`function*`）

Generator 是生成迭代器最简洁的方式。`yield` 暂停执行，`.next()` 恢复执行：

```javascript
function* simpleGen() {
  console.log('start')
  const a = yield 1 // 第一次 next() 在此暂停并返回 { value: 1 }
  console.log('a =', a) // a = 传入第二次 next(arg) 的参数
  const b = yield 2
  console.log('b =', b)
  return 'done'
}

const gen = simpleGen()
gen.next() // { value: 1, done: false }  输出 'start'
gen.next('hello') // { value: 2, done: false }  输出 'a = hello'
gen.next('world') // { value: 'done', done: true } 输出 'b = world'
```

**关键特性：**

- `yield` 可以双向传递数据：`yield value` 向外传值，`next(arg)` 向**上一个 yield** 的暂停位置传入值
- `yield*` 委托给另一个 Generator 或可迭代对象：`yield* otherGen()` / `yield* [1, 2, 3]`
- `gen.return()` 提前结束，`gen.throw(err)` 在 yield 处抛出异常

#### Generator 实现 async/await 的原理（co 库核心）

```javascript
function co(generatorFn) {
  return new Promise((resolve, reject) => {
    const gen = generatorFn()

    function step(method, arg) {
      let result
      try {
        result = gen[method](arg) // next 或 throw
      } catch (err) {
        return reject(err)
      }

      const { value, done } = result
      if (done) {
        return resolve(value)
      }
      // 将 yield 的值包装为 Promise，完成后自动推进下一步
      Promise.resolve(value).then(
        (val) => step('next', val),
        (err) => step('throw', err)
      )
    }

    step('next')
  })
}

// 使用 co 模拟 async/await
co(function* () {
  const data = yield fetch('/api/user').then((r) => r.json())
  console.log(data)
  const more = yield fetch('/api/posts').then((r) => r.json())
  console.log(more)
  return 'done'
})
```

**本质：** `async/await` = `co` + `function*`。每次 `yield` 一个 Promise，co 自动等待 Promise 完成后调用 `gen.next(result)` 继续执行，实现了"同步写法驱动异步操作"。

#### 实际应用场景

1. **惰性求值 / 无限序列**：`function* fibonacci() { let [a, b] = [0, 1]; while (true) { yield a; [a, b] = [b, a + b]; } }`
2. **异步流程控制**：`co` 库、Redux Saga（`yield put()` / `yield take()`）
3. **自定义数据结构遍历**：树的 DFS/BFS 遍历器
4. **分页/无限滚动**：每次 `next()` 拉取下一页数据
   :::

### 4.3 宏任务和微任务分别有哪些

::: details 参考

#### 宏任务（MacroTask / Task）

由宿主环境（浏览器/Node.js）发起的任务，每个宏任务之间浏览器可能执行 UI 渲染。

| 来源                    | 示例                                   |
| ----------------------- | -------------------------------------- |
| `setTimeout`            | `setTimeout(fn, 0)`                    |
| `setInterval`           | `setInterval(fn, 100)`                 |
| I/O 操作                | 文件读取、网络请求回调                 |
| UI 渲染                 | DOM 渲染（浏览器特有）                 |
| `setImmediate`          | Node.js 特有，check 阶段执行           |
| `requestAnimationFrame` | 浏览器特有，下一帧渲染前执行           |
| `MessageChannel`        | `port.postMessage` 产生的回调          |
| `<script>` 标签         | 首个 JS 脚本的整体执行也属于宏任务级别 |
| 事件回调                | `click`、`keydown` 等 DOM 事件回调     |

#### 微任务（MicroTask / Job）

由 JS 引擎层面发起的任务，在当前宏任务执行完后**一次性清空**所有微任务队列中的任务（包括清空过程中新产生的微任务）。

| 来源                         | 示例                                        |
| ---------------------------- | ------------------------------------------- |
| `Promise.then/catch/finally` | `Promise.resolve().then(fn)`                |
| `async/await`                | `await` 之后的代码（等价于 `.then()` 回调） |
| `process.nextTick`           | **Node.js 特有**，优先级高于其他微任务      |
| `MutationObserver`           | 浏览器特有，DOM 变化观察回调                |
| `queueMicrotask()`           | ES2020 标准 API，`queueMicrotask(fn)`       |

#### 执行优先级（从高到低）

```
同步代码 > process.nextTick (Node) > 微任务（Promise.then 等） > 宏任务（setTimeout 等）
```

#### 经典对比输出

```javascript
console.log('1') // 同步

setTimeout(() => console.log('2'), 0) // 宏任务

Promise.resolve().then(() => console.log('3')) // 微任务

console.log('4') // 同步

// 输出：1 → 4 → 3 → 2
```

**核心规则**：微任务队列每次必须"清空到底"——执行过程中新产生的微任务也会在当前循环中被执行，直到微任务队列为空，才会进入下一个宏任务。
:::

### 4.4 可以快速分析一个复杂的异步嵌套逻辑，并掌握分析方法

::: details 参考

#### 四步分析法

1. **标同步**：找到所有同步代码，按从上到下顺序执行
2. **标微任务**：找到所有微任务（Promise.then、queueMicrotask、MutationObserver callback），在同步执行完后清空
3. **标宏任务**：找到所有宏任务（setTimeout、setInterval、I/O、事件回调），在微任务清空后逐个执行
4. **逐步模拟**：每执行一个宏任务后，重新检查是否有新的微任务产生并清空

#### 复杂混合示例

```javascript
async function async1() {
  console.log('A')
  await async2()
  console.log('B') // await 之后 = 微任务
}
async function async2() {
  console.log('C')
}
console.log('D') // 同步
setTimeout(() => {
  console.log('E') // 宏任务1
}, 0)
async1()
new Promise((resolve) => {
  console.log('F') // 同步（Promise 构造函数是同步执行的）
  resolve()
}).then(() => {
  console.log('G') // 微任务
})
console.log('H') // 同步
```

**分析过程：**

| 步骤                 | 输出      | 说明                                    |
| -------------------- | --------- | --------------------------------------- |
| 同步代码             | D A C F H | 依次执行 console.log + Promise 构造函数 |
| 微任务队列           | B G       | async1 的 await 后代码 + .then 回调     |
| 宏任务1 (setTimeout) | E         | setTimeout 回调                         |

**最终输出：D → A → C → F → H → B → G → E**

#### 常见分析误区

- `await` 之后的代码是微任务，不是同步执行
- `new Promise(fn)` 中的 `fn` 是同步执行的，只有 `.then()` 是微任务
- `setTimeout(fn, 0)` 的 0 是名义上的，实际最小延迟约 4ms（浏览器规范），且受嵌套层级递增
- 微任务中产生的微任务仍在"本轮"执行（不会推到下一轮），会一直清空到底
  :::

### 4.5 使用Promise实现串行

::: details 参考

#### 方式一：for await...of（最简洁）

```javascript
async function serial1(tasks) {
  for (const task of tasks) {
    const result = await task()
    console.log(result)
  }
}
```

#### 方式二：Array.reduce 链式链接

```javascript
function serial2(tasks) {
  return tasks.reduce(
    (chain, task) => chain.then((results) => task().then((r) => [...results, r])),
    Promise.resolve([])
  )
}
```

#### 方式三：手动递归

```javascript
function serial3(tasks) {
  const results = []
  function run(index) {
    if (index >= tasks.length) return Promise.resolve(results)
    return tasks[index]().then((r) => {
      results.push(r)
      return run(index + 1)
    })
  }
  return run(0)
}
```

#### 并发控制扩展（限制同时运行 N 个）

```javascript
async function parallelLimit(taskFns, limit) {
  const results = new Array(taskFns.length)
  let running = 0
  let index = 0

  return new Promise((resolve, reject) => {
    function next() {
      const i = index++
      if (i >= taskFns.length) {
        if (running === 0) resolve(results)
        return
      }
      running++
      taskFns[i]()
        .then((r) => {
          results[i] = r
        })
        .catch(reject)
        .finally(() => {
          running--
          next()
        })
    }
    for (let j = 0; j < limit && j < taskFns.length; j++) next()
  })
}
```

#### 串行 vs 并行适用场景

| 场景                                | 方案                        |
| ----------------------------------- | --------------------------- |
| 下一个请求依赖上一个的结果          | 串行                        |
| 各请求相互独立，数量不多            | `Promise.all`（并行）       |
| 大量请求（避免压垮服务器/触发限流） | `parallelLimit`（并发控制） |
| 需要按序输出                        | 串行                        |

:::

### 4.6 Node与浏览器EventLoop的差异

::: details 参考

#### 架构差异

|              | 浏览器                                      | Node.js                            |
| ------------ | ------------------------------------------- | ---------------------------------- |
| **规范来源** | HTML 标准（WHATWG）                         | libuv 实现，Node 文档描述          |
| **结构**     | 单一事件循环 + 渲染管线                     | 6 阶段事件循环                     |
| **渲染**     | 宏任务之间可插入 UI 渲染                    | 无渲染概念                         |
| **特有 API** | `requestAnimationFrame`、`MutationObserver` | `setImmediate`、`process.nextTick` |

#### Node.js 事件循环 6 阶段

```
   ┌───────────────────────┐
┌─>│        timers         │  setTimeout / setInterval 回调
│  └──────────┬────────────┘
│  ┌──────────┴────────────┐
│  │   pending callbacks   │  延迟的 I/O 回调（上轮推迟的）
│  └──────────┬────────────┘
│  ┌──────────┴────────────┐
│  │     idle, prepare     │  内部使用
│  └──────────┬────────────┘
│  ┌──────────┴────────────┐
│  │         poll          │  获取新的 I/O 事件；执行 I/O 回调
│  └──────────┬────────────┘
│  ┌──────────┴────────────┐
│  │         check         │  setImmediate 回调
│  └──────────┬────────────┘
│  ┌──────────┴────────────┐
└──┤    close callbacks    │  socket.on('close') 等
   └───────────────────────┘
```

#### 关键差异点

**1. `setImmediate` vs `setTimeout(fn, 0)`：**
执行顺序取决于当前所处的阶段。在 poll 阶段（如 I/O 回调）中，`setImmediate` 一定先于 `setTimeout`：

```javascript
const fs = require('fs')
fs.readFile('./test.txt', () => {
  setTimeout(() => console.log('timeout'), 0)
  setImmediate(() => console.log('immediate'))
  // 输出：immediate → timeout（确定顺序）
})
```

**2. `process.nextTick`（Node.js 独有）：**
不属于任何事件循环阶段，在每个阶段结束时**优先于**微任务执行。递归调用 `process.nextTick` 会造成"饿死"事件循环（永远等不到下一个阶段）。

**优先级：** `process.nextTick` > `Promise.then`（等微任务） > 下一阶段宏任务

**3. 微任务执行时机（Node 11 前后）：**

- **Node 10 及之前**：微任务在各阶段之间执行（一个阶段的所有宏任务执行完后）
- **Node 11 及之后**：与浏览器对齐，每个宏任务执行完立即清空微任务队列

#### 综合对比代码

```javascript
// Node.js 环境
setTimeout(() => console.log('1'), 0)
setImmediate(() => console.log('2'))
Promise.resolve().then(() => console.log('3'))
process.nextTick(() => console.log('4'))

// 主模块中：4 → 3 → 1,2（1 和 2 顺序不确定）
// I/O 回调中：4 → 3 → 2 → 1（setImmediate 一定先于 setTimeout）
```

:::

### 4.7 如何在保证页面运行流畅的情况下处理海量数据

::: details 参考

#### 核心问题分析

海量数据（10 万+ 条）直接渲染会导致：

1. **主线程长时间阻塞**：大量 DOM 创建、布局计算占用 JS 线程，页面卡死
2. **内存暴涨**：大量 DOM 节点占用极高内存
3. **首屏白屏时间长**

#### 方案一：时间分片（Time Slicing）

将大量渲染任务拆成小份，放入多个宏任务或 requestAnimationFrame 中，让浏览器有机会执行渲染和响应用户交互。

```javascript
// 使用 requestAnimationFrame 分片渲染
function renderBySlice(data, renderOne, batchSize = 20) {
  let index = 0
  function loop() {
    const end = Math.min(index + batchSize, data.length)
    for (let i = index; i < end; i++) {
      renderOne(data[i]) // 渲染单个数据项的 DOM
    }
    index = end
    if (index < data.length) {
      requestAnimationFrame(loop)
    }
  }
  requestAnimationFrame(loop)
}
```

React Fiber 架构本质上就是时间分片思想的体现：将渲染任务拆分为可中断的 Fiber 节点，在浏览器空闲时执行。

#### 方案二：虚拟列表（Virtual Scrolling）

**只渲染可视区域内的 DOM 节点**，通过滚动偏移模拟完整列表。

```javascript
// 虚拟列表核心逻辑
class VirtualList {
  constructor(container, itemHeight, totalCount) {
    this.container = container
    this.itemHeight = itemHeight
    this.totalCount = totalCount
    this.render()
  }
  render() {
    const visibleCount = Math.ceil(this.container.clientHeight / this.itemHeight)
    const startIndex = Math.floor(this.container.scrollTop / this.itemHeight)
    const endIndex = Math.min(startIndex + visibleCount + 2, this.totalCount) // +2 buffer
    this.visibleData = data.slice(startIndex, endIndex)

    this.inner.style.height = `${this.totalCount * this.itemHeight}px` // 撑开滚动条
    this.inner.style.transform = `translateY(${startIndex * this.itemHeight}px)` // 偏移可视区

    // 只渲染 visibleData 对应的 DOM
  }
}
```

核心公式（定高）：

- `startIndex = floor(scrollTop / itemHeight)`
- `endIndex = startIndex + visibleCount + buffer`
- `offsetY = startIndex * itemHeight`

动态高度则需要维护每一行的高度缓存 + 二分查找起始索引。

#### 方案三：Web Worker

将数据计算/处理逻辑放在 Worker 线程中，避免阻塞主线程。

```javascript
// main.js
const worker = new Worker('data-worker.js')
worker.postMessage(rawData)
worker.onmessage = (e) => {
  const processed = e.data
  // 渲染到 DOM（Worker 不能操作 DOM）
}

// data-worker.js
self.onmessage = (e) => {
  const processed = e.data.map(heavyTransform)
  self.postMessage(processed)
}
```

**限制**：Worker 不能访问 DOM / window / document，只能做纯计算。

#### 方案四：分页加载

服务端分页（`/?page=1&size=20`）或前端模拟分页（全部数据在前端但分页展示）。

#### 配套优化

- `Object.freeze()`：大数据对象冻结后，Vue/类似响应式系统不再设置 getter/setter
- `content-visibility: auto`：CSS 属性，浏览器跳过不可见区域的渲染
- 懒加载图片：只加载可视区内的图片

---

#### 防抖 & 节流（辅助技术）

**1. 防抖（Debounce）**：触发事件后 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则重新计时。

- search 搜索联想，用户停止输入后再发请求
- window resize，调整完后才重新计算布局

**非立即执行版**：触发后等 n 秒执行；**立即执行版**：触发时立即执行，n 秒内再次触发不执行。

```javascript
function debounce(fn, delay, immediate = false) {
  let timer
  return function (...args) {
    if (immediate && !timer) {
      fn.apply(this, args)
    }
    clearTimeout(timer)
    timer = setTimeout(() => {
      if (!immediate) {
        fn.apply(this, args)
      }
      timer = null
    }, delay)
  }
}
```

**2. 节流（Throttle）**：连续触发事件但在 n 秒中只执行一次，稀释执行频率。

- 鼠标 mousedown 连续点击
- 监听滚动事件，判断是否滑到底部加载更多

```javascript
function throttle(fn, delay) {
  let lastTime = 0
  return function (...args) {
    const now = Date.now()
    if (now - lastTime >= delay) {
      fn.apply(this, args)
      lastTime = now
    }
  }
}
```

:::

## 5 语法和API

### 5.1 理解ECMAScript和JavaScript的关系

::: details 参考

#### 定义

- **ECMAScript**：由 ECMA International 通过 TC39 委员会制定的脚本语言标准（ECMA-262），定义了语言核心语法、类型、对象、语句等。是**语法规范**。
- **JavaScript**：ECMAScript 标准的一种实现 = ECMAScript + DOM + BOM + Web API。是**编程语言**。

#### 历史时间线

| 年份    | 版本         | 里程碑                                                                  |
| ------- | ------------ | ----------------------------------------------------------------------- |
| 1995    | —            | Brendan Eich 用 10 天创建 Mocha（后改 LiveScript → JavaScript）         |
| 1997    | ES1          | 首次标准化                                                              |
| 1999    | ES3          | `try/catch`、`do-while`、正则                                           |
| 2009    | ES5          | 严格模式、`Array.prototype.forEach/map/filter`、`JSON`、`getter/setter` |
| 2015    | ES6 / ES2015 | 最大的里程碑：let/const、箭头函数、class、模块、Promise、解构等         |
| 2016 起 | ES2016+      | 每年 6 月发布新版本，不再跳跃                                           |

#### 相关术语辨析

| 术语             | 含义                                            |
| ---------------- | ----------------------------------------------- |
| **JavaScript**   | ES 实现 + DOM + BOM（浏览器环境通用称呼）       |
| **JScript**      | 微软早期 IE 中的 JS 实现（历史词，已废弃）      |
| **TypeScript**   | JavaScript 的超集，添加静态类型系统             |
| **Node.js**      | 服务端 JS 运行时 = ES + Node API（无 DOM/BOM）  |
| **ActionScript** | Adobe Flash 的脚本语言（基于 ES4 草案，已废弃） |

#### TC39 提案流程

每个新特性需要经过 5 个阶段才能进入正式规范：

1. **Stage 0 — Strawman**：想法的初始提案
2. **Stage 1 — Proposal**：正式提案，确定 Champion 负责推进
3. **Stage 2 — Draft**：草稿，有初步规范的文字描述和实验性实现
4. **Stage 3 — Candidate**：候选，规范文本完成，需要至少两个实现通过验收
5. **Stage 4 — Finished**：完成，测试全部通过，随下次发布进入规范
   :::

### 5.2 熟练运用es5、es6提供的语法规范，

::: details 参考

#### ES5 核心特性

| 类别         | 特性                                                                                                                                                      |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **严格模式** | `"use strict"` — 消除不安全操作（禁止意外全局变量、禁止 `with`、`eval` 不污染作用域等）                                                                   |
| **数组方法** | `forEach`、`map`、`filter`、`reduce`、`reduceRight`、`some`、`every`、`indexOf`、`lastIndexOf`                                                            |
| **对象方法** | `Object.keys()`、`Object.create()`、`Object.defineProperty()`、`Object.defineProperties()`、`Object.getPrototypeOf()`、`Object.freeze()`、`Object.seal()` |
| **JSON**     | `JSON.parse()`、`JSON.stringify()`                                                                                                                        |
| **属性访问** | getter / setter（`Object.defineProperty` 或字面量语法）                                                                                                   |
| **函数方法** | `Function.prototype.bind()`                                                                                                                               |
| **日期**     | `Date.now()`、`Date.prototype.toISOString()`                                                                                                              |
| **字符串**   | `String.prototype.trim()`                                                                                                                                 |
| **遍历**     | `Array.isArray()`                                                                                                                                         |

#### ES6（ES2015）核心特性

| 类别                              | 特性                                                                                                      |
| --------------------------------- | --------------------------------------------------------------------------------------------------------- |
| **变量声明**                      | `let`、`const`（块级作用域、TDZ、不可重复声明）                                                           |
| **箭头函数**                      | `() => expr`（无自己的 `this`/`arguments`/`prototype`）                                                   |
| **解构赋值**                      | `const { a, b } = obj` / `const [x, y] = arr`                                                             |
| **模板字符串**                    | `` `Hello, ${name}` `` （多行字符串、表达式嵌入）                                                         |
| **展开/剩余**                     | `...` 展开运算符 + rest 参数                                                                              |
| **默认参数**                      | `function fn(a = 1, b = 2) {}`                                                                            |
| **class**                         | `class` / `extends` / `super`（原型继承语法糖）                                                           |
| **模块**                          | `import` / `export`（ES Module）                                                                          |
| **Promise**                       | 异步编程核心，`then` / `catch` / `finally`                                                                |
| **Symbol**                        | 唯一标识符，内置 Well-Known Symbols                                                                       |
| **Map / Set / WeakMap / WeakSet** | 新的集合类型                                                                                              |
| **Generator**                     | `function*` / `yield`，与 `for...of` 配合                                                                 |
| **Proxy / Reflect**               | 元编程，拦截对象操作                                                                                      |
| **for...of**                      | 遍历可迭代对象                                                                                            |
| **新增 API**                      | `Object.assign`、`Array.from`、`Array.of`、`String.includes/startsWith/endsWith`、`Number.isNaN/isFinite` |

#### ES2016 ~ ES2022 关键新增

| 年份       | 关键特性                                                                                                   |
| ---------- | ---------------------------------------------------------------------------------------------------------- | --- | --- |
| **ES2016** | `Array.prototype.includes()`、指数运算符 `**`                                                              |
| **ES2017** | `async/await`、`Object.values/entries`、`String.padStart/padEnd`、`Object.getOwnPropertyDescriptors()`     |
| **ES2018** | 异步迭代 `for await...of`、Promise.finally、对象 rest/spread                                               |
| **ES2019** | `Array.flat/flatMap`、`Object.fromEntries`、`String.trimStart/trimEnd`、可选的 `catch` 绑定                |
| **ES2020** | **BigInt**、`Promise.allSettled`、`globalThis`、可选链 `?.`、空值合并 `??`、`import()` 动态导入            |
| **ES2021** | `String.replaceAll`、`Promise.any`、逻辑赋值 `??=` / `&&=` / `                                             |     | =`  |
| **ES2022** | `Array.at()`、`Object.hasOwn()`、class fields + private fields (`#`)、顶层 `await` (module)、`Error.cause` |

:::

### 5.3 熟练掌握JavaScript提供的全局对象（例如Date、Math）、全局函数（例如decodeURI、isNaN）、全局属性（例如Infinity、undefined）

::: details 参考

#### 全局对象

| 对象                       | 核心功能        | 注意事项                                                                                              |
| -------------------------- | --------------- | ----------------------------------------------------------------------------------------------------- |
| **Date**                   | 日期时间处理    | 月份从 0 开始（`new Date(2024, 0, 1)` = 1 月 1 日），`getMonth()` 返回 0~11，这是经典坑               |
| **Math**                   | 数学常量和函数  | `Math.random()` 生成 [0, 1) 的伪随机数，**不能用于安全相关场景**（应使用 `crypto.getRandomValues()`） |
| **JSON**                   | 序列化/反序列化 | `JSON.stringify` 会忽略 `undefined`、`Function`、`Symbol` 值；无法处理循环引用                        |
| **RegExp**                 | 正则表达式      | 字面量 `/pattern/flags` 和构造函数 `new RegExp(str, flags)` 两种方式                                  |
| **Map / Set**              | ES6 集合类型    | Map 的键可以是任意类型，Object 的键只能是 String/Symbol                                               |
| **WeakMap / WeakSet**      | 弱引用集合      | 键必须是对象，不可枚举，GC 不感知，常用于存储私有数据                                                 |
| **ArrayBuffer / DataView** | 二进制数据处理  | 配合 TypedArray（`Int8Array`、`Uint8Array` 等）操作二进制                                             |
| **Intl**                   | 国际化          | 日期格式化、数字格式化、排序比较                                                                      |
| **console**                | 调试输出        | `console.table()`、`console.group()`、`console.time/timeEnd()` 各有妙用                               |
| **Error**                  | 错误构造        | `Error` / `TypeError` / `RangeError` / `SyntaxError` 等内置错误类型                                   |
| **URL**                    | URL 解析        | 优先用 `new URL(urlString)` 而非正则解析                                                              |

#### 全局函数

| 函数                                       | 用途               | 注意事项                                                                                      |
| ------------------------------------------ | ------------------ | --------------------------------------------------------------------------------------------- |
| **encodeURI()**                            | 编码整个 URI       | 不编码 URI 保留字符（`: / ? # [ ] @`），用于完整 URI                                          |
| **encodeURIComponent()**                   | 编码 URI 组件      | 编码上述保留字符，适用于 query 参数值                                                         |
| **decodeURI()** / **decodeURIComponent()** | 解码               | 对应的解码函数                                                                                |
| **parseInt(str, radix)**                   | 字符串转整数       | **必须传第二个参数 radix**（如 `parseInt("08", 10)`），否则 `"0x"` 开头的字符串被当成 16 进制 |
| **parseFloat(str)**                        | 字符串转浮点数     | 只解析十进制                                                                                  |
| **isNaN(val)**                             | 判断是否 NaN       | 会隐式转换参数！`isNaN("abc")` = true。优先用 **`Number.isNaN()`**（无隐式转换）              |
| **Number.isFinite()**                      | 判断是否为有限数字 | 推荐代替 `isFinite()`                                                                         |
| **eval(str)**                              | 执行字符串代码     | **有严重安全风险**（XSS），应避免使用                                                         |
| **btoa()** / **atob()**                    | Base64 编码/解码   | 仅支持 Latin-1 字符，中文字符需要先 `encodeURIComponent`                                      |
| **setTimeout()** / **setInterval()**       | 定时器             | 非精确计时                                                                                    |

#### 全局属性

| 属性           | 说明                                                                           |
| -------------- | ------------------------------------------------------------------------------ |
| **Infinity**   | 正无穷（1 / 0 = Infinity，-1 / 0 = -Infinity）                                 |
| **NaN**        | Not a Number，`NaN !== NaN`（唯一不等于自身的值），用 `Number.isNaN()` 判断    |
| **undefined**  | 未定义值，是全局只读属性（ES5+）                                               |
| **globalThis** | ES2020 标准化，统一浏览器 `window`、Node.js `global`、Worker `self` 的访问方式 |

:::

### 5.4 熟练应用map、reduce、filter 等高阶函数解决问题

::: details 参考

#### 高阶函数定义

高阶函数是满足至少一项条件的函数：接收一个或多个函数作为参数，或返回一个函数。`map`、`filter`、`reduce` 是数组的三大核心高阶函数，它们都不改变原数组（返回新数组）。

#### 1. map — 转换每个元素

**基本用法：** 对数组每个元素执行回调，返回新数组，长度与原数组一致。

```javascript
const nums = [1, 2, 3]
const doubled = nums.map((n) => n * 2) // [2, 4, 6]

// 实际场景：提取对象属性
const users = [
  { id: 1, name: 'A' },
  { id: 2, name: 'B' }
]
const names = users.map((u) => u.name) // ['A', 'B']
```

**手写实现：**

```javascript
Array.prototype.myMap = function (callback, thisArg) {
  const result = []
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      // 跳过稀疏数组的空槽
      result[i] = callback.call(thisArg, this[i], i, this)
    }
  }
  return result
}
```

#### 2. filter — 筛选符合条件的元素

**基本用法：** 返回回调返回 truthy 的元素组成的新数组。

```javascript
const nums = [1, 2, 3, 4, 5]
const evens = nums.filter((n) => n % 2 === 0) // [2, 4]

// 实际场景：数据清洗（移除无效项）
const validUsers = users.filter((u) => u.name && u.id > 0)
```

**手写实现：**

```javascript
Array.prototype.myFilter = function (callback, thisArg) {
  const result = []
  for (let i = 0; i < this.length; i++) {
    if (i in this && callback.call(thisArg, this[i], i, this)) {
      result.push(this[i])
    }
  }
  return result
}
```

#### 3. reduce — 累积计算（最强大）

**基本用法：** 将数组归约为一个值（对象、数字、字符串、数组等）。

```javascript
const nums = [1, 2, 3, 4]
const sum = nums.reduce((acc, cur) => acc + cur, 0) // 10

// 实际场景1：数组平坦化
const nested = [[1, 2], [3, 4], [5]]
const flat = nested.reduce((acc, cur) => acc.concat(cur), []) // [1,2,3,4,5]

// 实际场景2：按属性分组
const users = [
  { name: 'A', role: 'admin' },
  { name: 'B', role: 'user' },
  { name: 'C', role: 'admin' }
]
const grouped = users.reduce((acc, u) => {
  ;(acc[u.role] ||= []).push(u)
  return acc
}, {})
// { admin: [{name:'A'}, {name:'C'}], user: [{name:'B'}] }

// 实际场景3：函数组合（compose）
const compose =
  (...fns) =>
  (arg) =>
    fns.reduceRight((v, fn) => fn(v), arg)

// 实际场景4：数组去重
const unique = arr.reduce((acc, cur) => (acc.includes(cur) ? acc : [...acc, cur]), [])

// 注意：没有初始值时，reduce 取第一个元素为初始值，跳过第一个元素迭代
```

**手写实现：**

```javascript
Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue
  let startIndex = 0

  // 没有初始值时，取数组第一个存在的元素
  if (accumulator === undefined) {
    if (this.length === 0) throw new TypeError('Reduce of empty array with no initial value')
    accumulator = this[0]
    startIndex = 1
  }

  for (let i = startIndex; i < this.length; i++) {
    if (i in this) {
      accumulator = callback(accumulator, this[i], i, this)
    }
  }
  return accumulator
}
```

#### 其它高阶函数速查

| 方法        | 用途                     | 示例                             |
| ----------- | ------------------------ | -------------------------------- |
| `some`      | 是否至少有一个满足条件   | `arr.some(n => n > 5)`           |
| `every`     | 是否所有元素都满足条件   | `arr.every(n => n > 0)`          |
| `find`      | 找到第一个满足条件的元素 | `arr.find(u => u.id === 1)`      |
| `findIndex` | 找到第一个满足条件的索引 | `arr.findIndex(u => u.id === 1)` |
| `flatMap`   | map + flat(1) 的组合     | `arr.flatMap(x => [x, x*2])`     |
| `sort`      | 排序（会改变原数组）     | `arr.sort((a, b) => a - b)`      |

#### 链式调用与性能

多次链式调用会产生中间数组，大型数据集有性能开销：

```javascript
const result = arr.filter(fn1).map(fn2) // 遍历两次，产生一个中间数组

// 可合并为单次 reduce（牺牲可读性换性能）
const result = arr.reduce((acc, item) => {
  if (fn1(item)) acc.push(fn2(item))
  return acc
}, [])
```

:::

### 5.5 setInterval需要注意的点，使用settimeout实现setInterval

::: details 参考

#### setInterval 的三个关键问题

**1. 回调堆积：** 如果回调的执行时间超过间隔时间，下一次触发时前一个可能尚未执行完毕，导致回调堆积 / 并行执行。

```javascript
setInterval(() => {
  heavyOperation() // 假设需要 300ms
}, 100) // 间隔仅 100ms，回调会在不到 100ms 时再次入队
```

**2. 不精确间隔：** 浏览器在 tab 非激活时会将最小间隔降至 1000ms（省电），且最小间隔为 4ms（嵌套层级>=5 时）。Node.js 中也有类似偏差。

**3. 不会自动清理：** 组件销毁或页面卸载时必须手动 `clearInterval`，否则导致内存泄漏。

#### 用 setTimeout 模拟 setInterval

```javascript
function mySetInterval(fn, delay) {
  let cancelled = false
  let timer

  function run() {
    if (cancelled) return
    fn()
    timer = setTimeout(run, delay)
  }

  timer = setTimeout(run, delay)

  // 返回清除方法
  return {
    clear: () => {
      cancelled = true
      clearTimeout(timer)
    }
  }
}

// 使用
const { clear } = mySetInterval(() => console.log('tick'), 1000)
// clear(); // 需要停止时调用
```

**优势：** 回调执行完成后才设置下一次定时器（不会堆积）、可在特定条件下动态决定是否继续、可调整间隔。

#### 精确计时补充方案

```javascript
// 方案1：requestAnimationFrame + 时间差修正
function preciseInterval(fn, delay) {
  let lastTime = performance.now()
  function loop(time) {
    if (time - lastTime >= delay) {
      fn()
      lastTime = time
    }
    requestAnimationFrame(loop)
  }
  requestAnimationFrame(loop)
}

// 方案2：Web Worker 中维护定时器（避免主线程阻塞导致的延时）
```

:::

### 5.6 JavaScript提供的正则表达式API、可以使用正则表达式（邮箱校验、URL解析、去重等）解决常见问题

::: details 参考

#### 两种创建方式

```javascript
// 1. 字面量（编译时机：脚本加载时，适用于固定模式）
const re1 = /hello/gi

// 2. 构造函数（编译时机：运行时，适用于动态模式）
const re2 = new RegExp('hello', 'gi')
```

#### 6 种 flags

| Flag | 含义                                         |
| ---- | -------------------------------------------- |
| `g`  | 全局匹配（不只停第一个）                     |
| `i`  | 忽略大小写                                   |
| `m`  | 多行模式（`^` `$` 匹配每行的开头结尾）       |
| `s`  | dotAll（`.` 也匹配换行符 `\n`）              |
| `u`  | Unicode 模式（正确处理 4 字节字符和 `\p{}`） |
| `y`  | 粘滞模式（从 `lastIndex` 位置严格匹配）      |

#### String 方法

| 方法                              | 返回值               | 说明                                                                  |
| --------------------------------- | -------------------- | --------------------------------------------------------------------- |
| `str.match(re)`                   | 匹配结果数组 或 null | 无 `g` 返回第一个匹配详情（含 groups）；有 `g` 返回所有完整匹配的数组 |
| `str.matchAll(re)`                | 迭代器               | 必须带 `g`，返回所有匹配的迭代器（含 groups）                         |
| `str.search(re)`                  | 索引或 -1            | 返回第一个匹配的位置                                                  |
| `str.replace(re, replacement)`    | 新字符串             | 配合 `g` 全局替换，replacement 支持 `$&` `$1` `$$` 等特殊变量         |
| `str.split(re)`                   | 数组                 | 按正则分割                                                            |
| `str.replaceAll(re, replacement)` | 新字符串             | ES2021，必须带 `g`，替换所有匹配                                      |

#### RegExp 方法

| 方法           | 返回值               | 说明                                                                             |
| -------------- | -------------------- | -------------------------------------------------------------------------------- |
| `re.test(str)` | boolean              | 是否存在匹配，**循环时注意 `lastIndex`**（带 `g` 时每次调用 `lastIndex` 会前进） |
| `re.exec(str)` | 匹配详情数组 或 null | 逐次返回下一个匹配，配合 `g` 使用；`lastIndex` 自动更新                          |

#### 实战场景

**1. 邮箱校验（简化版）：**

```javascript
;/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
// 注意：完全合规的邮箱正则可达百字符，实际多用 /^.+@.+\..+$/ 做基础校验 + 发送验证邮件确认
```

**2. URL 解析（推荐优先用 URL API，正则作为备用）：**

```javascript
const url = 'https://usr:pwd@example.com:8080/path?a=1&b=2#hash'
const parsed = url.match(/^(https?):\/\/([^:/]+):?(\d*)(\/[^?#]*)?(\?[^#]*)?(#.*)?/)
// parsed[1]=https, parsed[2]=usr:pwd@example.com, parsed[3]=8080, ...
// 更推荐：new URL(url) 直接拿到 protocol/hostname/pathname/search/hash
```

**3. 连续重复字符去重：**

```javascript
'aabbbcccc'.replace(/(.)\1+/g, '$1') // "abc"
```

**4. 模板字符串替换（简易模板引擎）：**

```javascript
const template = 'Hello, {{name}}! You are {{age}} years old.'
const data = { name: 'Alice', age: 25 }
template.replace(/\{\{(\w+)\}\}/g, (_, key) => data[key])
// "Hello, Alice! You are 25 years old."
```

**5. 千分位格式化：**

```javascript
'1234567890'.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
// "1,234,567,890"
```

**6. 驼峰与下划线互转：**

```javascript
// 驼峰 → 下划线
'myComponentName'.replace(/[A-Z]/g, (c) => '_' + c.toLowerCase()) // "my_component_name"
// 下划线 → 驼峰
'my_component_name'.replace(/_([a-z])/g, (_, c) => c.toUpperCase()) // "myComponentName"
```

#### 性能提醒

1. **灾难性回溯（Catastrophic Backtracking）**：嵌套量词如 `/(a+)+b/` 遇到 `aaaaaaaaaa`（无 b 结尾）时回溯次数指数增长，页面直接卡死。避免嵌套量词。
2. **循环中字面量正则 OK**（引擎会缓存），但 `new RegExp()` 每次重新编译，循环中应提到外部。
   :::

### 5.7 JavaScript异常处理的方式，统一的异常处理方案

::: details 参考

1. **try...catch...finally**：

```javascript
try {
  // 可能引发异常的代码
} catch (error) {
  // 处理异常
} finally {
  // 无论是否异常都会执行（常用于资源清理、关闭 loading）
}
```

注意：`try` 中 `return` 了，`finally` 依然会执行（且在 `return` 之前）。

2. **`finally` 块的用途**：资源清理（关闭连接、移除 loading）、确保状态一致性（无论成功失败都重置状态）。

3. **自定义错误类型**：

```javascript
class ApiError extends Error {
  constructor(message, code) {
    super(message)
    this.name = 'ApiError'
    this.code = code // 业务错误码
  }
}
throw new ApiError('用户不存在', 404)
```

4. **全局错误事件**：

- `window.addEventListener('error', fn)` — 捕获未处理的运行时错误
- `window.addEventListener('unhandledrejection', fn)` — 捕获未处理的 Promise 拒绝

```javascript
window.addEventListener('unhandledrejection', (event) => {
  console.error('未处理的 Promise 拒绝:', event.reason)
  event.preventDefault() // 阻止控制台默认报错
})
```

5. **Promise 错误处理**：

```javascript
somePromiseFunction()
  .then((result) => {
    /* 处理成功 */
  })
  .catch((error) => {
    /* 处理错误 */
  })
```

#### 统一异常处理方案

一个完善的前端错误处理体系通常包含：

1. **请求拦截层**（axios/fetch interceptor）：统一处理 HTTP 错误状态码（401→跳登录、500→提示），根据业务 code 给出不同反馈
2. **业务错误码体系**：定义 `code` 枚举（如 200=成功、1001=参数错误、1002=未授权），前端按 code 做分支处理
3. **框架级错误边界**：
   - React：Error Boundary 捕获组件渲染错误，防止整个应用白屏
   - Vue：`errorCaptured` / `onErrorCaptured` 生命周期
4. **全局兜底**：`window.onerror` + `unhandledrejection` 捕获剩余所有未处理错误
5. **错误日志上报**：Sentry / Fundebug / 自研平台采集 Error.stack + 用户操作链路 + 设备信息 + Source Map 映射
   :::

### 5.8 数组常用方法

#### 改变原数组的方法

| 方法                                   | 作用              | 返回值                 |
| -------------------------------------- | ----------------- | ---------------------- |
| `splice(start, deleteCount, ...items)` | 添加/删除数组元素 | 被删除元素组成的新数组 |
| `sort(compareFn)`                      | 数组排序          | 排序后的原数组引用     |
| `reverse()`                            | 颠倒元素顺序      | 颠倒后的原数组引用     |
| `pop()`                                | 删除最后一个元素  | 被删除的元素           |
| `shift()`                              | 删除第一个元素    | 被删除的元素           |
| `push(...items)`                       | 末尾添加元素      | 数组新长度             |
| `unshift(...items)`                    | 开头添加元素      | 数组新长度             |
| `copyWithin(target, start, end)`       | 内部复制元素      | 修改后的原数组引用     |
| `fill(value, start, end)`              | 填充数组          | 修改后的原数组引用     |

#### 不改变原数组的方法

| 方法                                            | 作用                               | 返回值            |
| ----------------------------------------------- | ---------------------------------- | ----------------- |
| `slice(start, end)`                             | 浅拷贝部分元素                     | 新数组            |
| `join(separator)`                               | 数组转字符串                       | 字符串            |
| `concat(...arrays)`                             | 合并数组                           | 新数组            |
| `indexOf(item, fromIndex)`                      | 查找元素位置                       | 索引 或 -1        |
| `lastIndexOf(item)`                             | 从后往前查找                       | 索引 或 -1        |
| `includes(item)`                                | 是否包含元素                       | boolean           |
| `find(callback)`                                | 查找第一个符合条件的元素           | 元素 或 undefined |
| `findIndex(callback)`                           | 查找第一个符合条件的索引           | 索引 或 -1        |
| `some(callback)`                                | 是否至少有一个满足                 | boolean           |
| `every(callback)`                               | 是否全部满足                       | boolean           |
| `flat(depth)`                                   | 扁平化                             | 新数组（ES2019）  |
| `flatMap(callback)`                             | map + flat(1)                      | 新数组（ES2019）  |
| `at(index)`                                     | 按索引取值（支持负索引）           | 元素（ES2022）    |
| `toSorted(cb)` / `toReversed()` / `toSpliced()` | 不改变原数组的 sort/reverse/splice | 新数组（ES2023）  |
| `filter(callback)`                              | 筛选                               | 新数组            |
| `map(callback)`                                 | 映射转换                           | 新数组            |
| `reduce(callback, init)`                        | 累积归约                           | 任意类型          |

#### 静态方法

| 方法                            | 作用                                                 |
| ------------------------------- | ---------------------------------------------------- |
| `Array.isArray(val)`            | 判断是否为数组（比 `instanceof` 更可靠）             |
| `Array.from(arrayLike, mapFn?)` | 类数组/可迭代对象 → 数组                             |
| `Array.of(...items)`            | 创建数组（与 `new Array(n)` 不同，不会创建稀疏数组） |

#### 遍历方法补充：for...in vs for...of

|              | for...in                                               | for...of                                                      |
| ------------ | ------------------------------------------------------ | ------------------------------------------------------------- |
| **遍历对象** | 对象的**可枚举属性名**（包括原型链）                   | 不可直接遍历普通对象（需要实现 `Symbol.iterator`）            |
| **遍历数组** | 返回索引（字符串），不推荐（顺序不固定、遍历原型属性） | 返回元素值，推荐                                              |
| **遍历范围** | 所有可枚举属性（含原型）                               | 可迭代对象（Array, Map, Set, String, arguments, NodeList 等） |
| **适用场景** | 遍历对象的 key                                         | 遍历可迭代对象的值                                            |

```javascript
// for...in — 遍历对象
for (const key in obj) {
  if (Object.hasOwn(obj, key)) {
    // 过滤掉原型链上的属性
    console.log(key, obj[key])
  }
}

// for...of — 遍历可迭代对象的值
for (const value of [1, 2, 3]) {
  console.log(value)
} // 数组
for (const [k, v] of new Map([['a', 1]])) {
  console.log(k, v)
} // Map
```

> 提示：如果迭代对象的变量值是 `null` 或 `undefined`，`for...in` 不执行循环体，建议遍历前先检查对象是否为 `null`/`undefined`。

### 5.9 数组扁平化、去重、乱序

::: details 参考

#### 1. 扁平化（Flatten）

**方法一：递归实现**

```javascript
function flatten(arr, depth = 1) {
  const result = []
  for (const item of arr) {
    if (Array.isArray(item) && depth > 0) {
      result.push(...flatten(item, depth - 1))
    } else {
      result.push(item)
    }
  }
  return result
}

const nested = [1, [2, [3, [4]]]]
flatten(nested, 2) // [1, 2, 3, [4]]
```

**方法二：Array.prototype.flat()（ES2019）**

```javascript
const nested = [1, [2, [3, [4]]]]
nested.flat() // [1, 2, [3, [4]]]  默认深度 1
nested.flat(2) // [1, 2, 3, [4]]
nested.flat(Infinity) // [1, 2, 3, 4]    彻底扁平化
```

**方法三：reduce 递归**

```javascript
function flattenByReduce(arr) {
  return arr.reduce((acc, cur) => acc.concat(Array.isArray(cur) ? flattenByReduce(cur) : cur), [])
}
```

#### 2. 去重

- 使用 Set：`[...new Set(array)]`（最简单，ES6，不可用于对象数组的去重）
- 使用 filter + indexOf：`array.filter((v, i, s) => s.indexOf(v) === i)`
- 使用 reduce + includes：逐步累积，可扩展为按特定属性去重
- 对象属性唯一性：`array.reduce((acc, cur) => ({ ...acc, [cur.id]: cur }), {})` → `Object.values()`

```javascript
// 对象数组按属性去重
const users = [
  { id: 1, name: 'A' },
  { id: 2, name: 'B' },
  { id: 1, name: 'C' }
]
const unique = Object.values(users.reduce((acc, u) => ({ ...acc, [u.id]: u }), {}))
console.log(unique) // [{ id: 1, name: 'C' }, { id: 2, name: 'B' }]
```

#### 3. 乱序（Shuffle）

**推荐：Fisher-Yates 洗牌算法** — O(n) 时间，等概率排列

```javascript
function shuffle(arr) {
  const result = [...arr]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)) // 0 ~ i 之间随机取一个
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}
```

原理：从后往前，每次从未处理部分随机选一个元素与当前位置交换。每个元素出现在每个位置的概率相等（n 个元素有 n! 种排列，每种概率相等）。

**不推荐**：`arr.sort(() => Math.random() - 0.5)` — 表面上能打乱，但得到的不是均匀分布的排列（`.sort()` 要求比较函数稳定，`Math.random()` 的随机性导致 sort 行为不确定），某些排列出现概率明显偏高。
:::

### 5.10 Proxy 与 Reflect

::: details 参考

#### Proxy 概述

Proxy 是 ES6 引入的**元编程**能力，用于创建对象的代理层，可以拦截并自定义对象的基本操作。

```javascript
const proxy = new Proxy(target, handler)
// target：被代理的对象
// handler：包含拦截器（trap）的对象，定义代理行为
```

#### 13 种拦截器

| 拦截器                                   | 拦截操作       | 触发场景                                        |
| ---------------------------------------- | -------------- | ----------------------------------------------- |
| `get(target, prop, receiver)`            | 读取属性       | `proxy.foo`、`proxy['foo']`                     |
| `set(target, prop, value, receiver)`     | 设置属性       | `proxy.foo = 1`                                 |
| `has(target, prop)`                      | `in` 操作符    | `'foo' in proxy`                                |
| `deleteProperty(target, prop)`           | `delete` 操作  | `delete proxy.foo`                              |
| `ownKeys(target)`                        | 获取自身属性名 | `Object.keys()`、`for...in`                     |
| `getOwnPropertyDescriptor(target, prop)` | 获取属性描述符 | `Object.getOwnPropertyDescriptor(proxy, 'foo')` |
| `defineProperty(target, prop, desc)`     | 定义属性       | `Object.defineProperty(proxy, 'foo', {})`       |
| `preventExtensions(target)`              | 阻止扩展       | `Object.preventExtensions(proxy)`               |
| `isExtensible(target)`                   | 判断是否可扩展 | `Object.isExtensible(proxy)`                    |
| `getPrototypeOf(target)`                 | 获取原型       | `Object.getPrototypeOf(proxy)`                  |
| `setPrototypeOf(target, proto)`          | 设置原型       | `Object.setPrototypeOf(proxy, proto)`           |
| `apply(target, thisArg, args)`           | 函数调用       | `proxy()`、`proxy.call()`、`proxy.apply()`      |
| `construct(target, args, newTarget)`     | `new` 操作     | `new proxy()`                                   |

#### 实际应用场景

**1. Vue 3 响应式原理（`reactive()` 简化版）：**

```javascript
function reactive(obj) {
  return new Proxy(obj, {
    get(target, key, receiver) {
      track(target, key) // 依赖收集
      const result = Reflect.get(target, key, receiver)
      if (typeof result === 'object' && result !== null) {
        return reactive(result) // 深度响应式（惰性）
      }
      return result
    },
    set(target, key, value, receiver) {
      const oldValue = target[key]
      const success = Reflect.set(target, key, value, receiver)
      if (oldValue !== value) {
        trigger(target, key) // 触发更新
      }
      return success
    }
  })
}
// 与 Vue 2 的 Object.defineProperty 对比：
// - Proxy 可以直接代理整个对象，无需遍历每个属性
// - Proxy 可以拦截新增/删除属性（defineProperty 不行）
// - Proxy 可以拦截数组索引操作（defineProperty 不行）
// - Proxy 不支持 IE
```

**2. 数据验证：**

```javascript
function createValidator(schema) {
  return new Proxy(
    {},
    {
      set(target, prop, value) {
        const rule = schema[prop]
        if (rule && !rule.test(value)) {
          throw new TypeError(`Invalid value for ${prop}: ${value}`)
        }
        target[prop] = value
        return true
      }
    }
  )
}
const user = createValidator({
  age: /^\d+$/,
  name: /^.{2,20}$/
})
user.name = 'A' // TypeError!
```

**3. 实现负索引数组：**

```javascript
function createNegativeArray(arr) {
  return new Proxy(arr, {
    get(target, index, receiver) {
      if (typeof index === 'string' && !isNaN(index)) {
        let i = Number(index)
        if (i < 0) i = target.length + i
        return Reflect.get(target, i, receiver)
      }
      return Reflect.get(target, index, receiver)
    }
  })
}
const arr = createNegativeArray([10, 20, 30])
arr[-1] // 30
arr[-2] // 20
```

**4. 操作日志 / 性能监控：**

```javascript
function createLogProxy(obj, name = 'obj') {
  return new Proxy(obj, {
    get(target, prop) {
      console.log(`[${name}] GET ${String(prop)}`)
      return Reflect.get(target, prop)
    },
    set(target, prop, value) {
      console.log(`[${name}] SET ${String(prop)} = ${value}`)
      return Reflect.set(target, prop, value)
    }
  })
}
```

#### Reflect

`Reflect` 是 ES6 配套 Proxy 引入的静态对象，提供了一组与 Proxy handler **一一对应**的方法。

**设计目的：**

1. 统一对象操作的 API 风格（替代 `delete obj.key` → `Reflect.deleteProperty(obj, key)`）
2. 让 `Object` 上内部方法标准化（如 `Reflect.defineProperty()` 返回 boolean 而不抛错）
3. 与 Proxy handler 方法签名完全一致，简化代理逻辑

```javascript
// 传统方式 vs Reflect 方式
try { Object.defineProperty(obj, key, desc); } catch (e) { /* ... */ }
// vs
if (Reflect.defineProperty(obj, key, desc)) { /* 成功 */ }

'prop' in obj        → Reflect.has(obj, 'prop')
delete obj.prop      → Reflect.deleteProperty(obj, 'prop')
obj.prop             → Reflect.get(obj, 'prop')
obj.prop = val       → Reflect.set(obj, 'prop', val)
```

**Proxy 中使用 Reflect 的最佳实践：**

```javascript
const proxy = new Proxy(target, {
  get(target, prop, receiver) {
    // receiver 确保 getter 中的 this 指向 proxy 而非 target
    return Reflect.get(target, prop, receiver)
  },
  set(target, prop, value, receiver) {
    return Reflect.set(target, prop, value, receiver)
  }
})
```

> 在 Proxy handler 中始终使用 `Reflect` 方法并**传递 `receiver` 参数**，确保 this 正确指向代理对象，否则嵌套的对象访问可能会绕过代理。
> :::

### 5.11 WeakMap / WeakSet 深入

::: details 参考

#### 核心特性："弱"的含义

`WeakMap` 和 `WeakSet` 中的**键**（WeakMap）或**值**（WeakSet）是对对象的**弱引用**——当一个对象只被 WeakMap/WeakSet 引用时，GC 仍可回收它，且回收后对应条目自动移除。

```javascript
let obj = { data: 'important' }
const wm = new WeakMap()
wm.set(obj, { meta: 'some info' })

obj = null // 此时 obj 没有其他引用，GC 会回收它
// wm 中的对应条目也会自动消失（具体时机由 GC 决定，JS 代码无法观测到内部变化）
```

#### WeakMap vs Map

|             | Map                                        | WeakMap                                      |
| ----------- | ------------------------------------------ | -------------------------------------------- |
| **键类型**  | 任意类型（包括原始值）                     | 只能是 Object（和 Symbol.for 产生的 Symbol） |
| **可枚举**  | 是（`.keys()`、`.values()`、`.entries()`） | **否** — 无法遍历                            |
| **大小**    | `.size` 属性                               | 无 `.size`（因为条目数会随 GC 变化）         |
| **GC 感知** | 强引用，阻止 GC                            | 弱引用，不阻止 GC                            |
| **方法**    | `set/get/has/delete` + 遍历方法            | 仅 `set/get/has/delete`                      |

#### 实际应用场景

**1. Vue 3 响应式依赖收集（核心场景）：**

```javascript
// 简化版 Vue3 依赖收集
const targetMap = new WeakMap() // target → key → effects

function track(target, key) {
  // 当组件卸载时，target 被 GC 回收 → targetMap 自动清理，不占内存
  let depsMap = targetMap.get(target)
  if (!depsMap) {
    targetMap.set(target, (depsMap = new Map()))
  }
  let deps = depsMap.get(key)
  if (!deps) {
    depsMap.set(key, (deps = new Set()))
  }
  deps.add(activeEffect)
}
// 为什么用 WeakMap？
// - 响应式对象被销毁时，对应的依赖关系自动清理
// - 如果是 Map，需要手动清理，容易造成内存泄漏
```

**2. 给 DOM 元素附加元数据（经典用例）：**

```javascript
const domMeta = new WeakMap()

function initPlugin(element) {
  const meta = { clickCount: 0, observer: null }
  domMeta.set(element, meta)
  element.addEventListener('click', () => meta.clickCount++)
}

// 当 element 从 DOM 移除且没有其他引用时
// → domMeta 中的对应条目自动被 GC 清理，无需手动维护
```

**3. 实现类私有属性（ES2022 `#` 出现前的方案）：**

```javascript
const _private = new WeakMap()

class MyClass {
  constructor(secret) {
    _private.set(this, { secret })
  }
  getSecret() {
    return _private.get(this).secret
  }
}
// 比 Symbol 更安全：外部完全无法遍历到 _private 中的数据
```

**4. 函数缓存（自动清理无效缓存）：**

```javascript
const cache = new WeakMap();
function computeExpensive(obj) {
  if (cache.has(obj)) return cache.get(obj);
  const result = /* 复杂计算 */;
  cache.set(obj, result);
  return result;
}
// 对象被 GC 回收时缓存自动清理，不会无限增长
// 对比 Map 缓存：需要手动实现 TTL 或 LRU 淘汰策略
```

#### WeakSet

与 WeakMap 类似，但只有值没有键。值为弱引用对象，不可遍历：

```javascript
const activeUsers = new WeakSet()

function login(user) {
  activeUsers.add(user)
}
function logout(user) {
  activeUsers.delete(user)
}
function isLoggedIn(user) {
  return activeUsers.has(user)
}

// 用户对象被销毁时，WeakSet 中自动清理
// 典型场景：标记"已处理过"的对象（避免重复操作，但不阻止 GC）
```

#### 何时用 Weak 版本？

| 场景                               | 推荐      |
| ---------------------------------- | --------- |
| 关联数据随目标对象生命周期一起消亡 | WeakMap   |
| 缓存计算结果，对象销毁后缓存也失效 | WeakMap   |
| 给第三方对象挂载元数据，不干扰 GC  | WeakMap   |
| 标记"已处理"状态，不干扰 GC        | WeakSet   |
| 需要遍历所有条目、获取大小         | Map / Set |
| 需要用原始值（字符串、数字）作为键 | Map       |

:::
