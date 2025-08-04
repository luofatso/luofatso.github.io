---
outline: [2, 3]
---

# 前端自检系列 --- JavaScript

[[TOC]]

## 1 变量和类型

### 1.1 JavaScript规定了几种语言类型

::: details 参考
JavaScript 规定了七种基本数据类型和一种复杂数据类型，共计八种语言类型。

#### 基本数据类型（Primitive Data Types）：

- 数值（Number）：表示数字，包括整数和浮点数。
- 字符串（String）：表示文本字符串。
- 布尔值（Boolean）：表示 true 或 false。
- 空值（Null）：表示空值。
- 未定义（Undefined）：表示未定义的值。
  > BigInt 是 JavaScript 中的一种数据类型，但它不是语言类型，属于内置对象。

符号（Symbol）：表示唯一的标识符，用于创建对象的属性名。

#### 复杂数据类型（Complex Data Type）：

- 对象（Object）：表示一个复合值（Object、Array、Function、Date等），可以包含多个属性和方法。

> 需要注意的是，基本数据类型是按值传递的，而复杂数据类型是按引用传递的。这意味着基本数据类型在赋值和传递时是复制值的，而复杂数据类型在赋值和传递时是复制引用的。
> :::

### 1.2 JavaScript对象的底层数据结构是什么

::: details 参考
JavaScript 对象的底层数据结构通常是基于哈希表（Hash Table）或者称为散列表。哈希表是一种用于实现键值对映射关系的数据结构，其中每个键都会被哈希函数计算成一个索引，然后对应到一个存储位置，从而实现高效的查找和插入操作。

:::

### 1.3 Symbol类型在实际开发中的应用、可手动实现一个简单的Symbol

> 创建唯一的属性名, 用于创建私有属性或方法, 在迭代器中作为唯一的迭代器键（Iterator Key）

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

```js
let num = 42 // 基本类型的数字
let numObj = new Number(42) // Number 对象
```

> 拆箱是指将内置对象中的值提取出来，转换为基本类型的值。

```js
let numObj = new Number(42) // Number 对象
let num = numObj.valueOf() // 42，拆箱操作
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

```js
console.log(typeof 2) // number
console.log(typeof true) // boolean
console.log(typeof 'str') // string
console.log(typeof []) // object     []数组的数据类型在 typeof 中被解释为 object
console.log(typeof function () {}) // function
console.log(typeof {}) // object
console.log(typeof undefined) // undefined
console.log(typeof null) // object     null 的数据类型被 typeof 解释为 object
```

typeof 对于对象来说，除了函数都会显示 object，所以说 typeof 并不能准确判断变量到底是什么类型,所以想判断一个对象的正确类型，这时候可以考虑使用 instanceof

#### 2.instanceof

instanceof 操作符可以用来**判断一个对象是否属于某个构造函数创建的实例。**

```js
console.log(2 instanceof Number) // false
console.log(true instanceof Boolean) // false
console.log('str' instanceof String) // false
console.log([] instanceof Array) // true
console.log(function () {} instanceof Function) // true
console.log({} instanceof Object) // true
// console.log(undefined instanceof Undefined);
// console.log(null instanceof Null);
```

可以看出直接的字面量值判断数据类型，instanceof可以精准判断引用数据类型（Array，Function，Object），而基本数据类型不能被instanceof精准判断。

我们来看一下 instanceof 在MDN中的解释：instanceof 运算符用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性。其意思就是判断对象是否是某一数据类型（Array）的实例，请重点关注一下是判断一个对象是否是数据类型的实例。在这里字面量值，2， true ，'str'不是实例，所以判断值为false。

#### 3.constructor

**通过判断对象的构造函数来确定其类型**

```js
console.log((2).constructor === Number) // true
console.log(true.constructor === Boolean) // true
console.log('str'.constructor === String) // true
console.log([].constructor === Array) // true
console.log(function () {}.constructor === Function) // true
console.log({}.constructor === Object) // true
```

这里有一个坑，如果我创建一个对象，更改它的原型，constructor就会变得不可靠了

```js
function Fn() {}

Fn.prototype = new Array()

var f = new Fn()

console.log(f.constructor === Fn) // false
console.log(f.constructor === Array) // true
```

#### 4.Object.prototype.toString.call()

使用 Object 对象的原型方法 toString ，使用 call 进行狸猫换太子，借用Object的 toString 方法

```js
var a = Object.prototype.toString

console.log(a.call(2))
console.log(a.call(true))
console.log(a.call('str'))
console.log(a.call([]))
console.log(a.call(function () {}))
console.log(a.call({}))
console.log(a.call(undefined))
console.log(a.call(null))
```

:::

### 1.9 可能发生隐式类型转换的场景以及转换原则，应如何避免或巧妙应用

略~~~

### 1.10 出现小数精度丢失的原因，JavaScript可以存储的最大数字、最大安全数字，JavaScript处理大数字的方法、避免精度丢失的方法

> 小数精度丢失是由于 JavaScript 中的数字类型使用 IEEE 754 标准的浮点数表示法，而该表示法对于某些小数无法精确表示，导致精度丢失。这是一个常见的浮点数处理问题，也被称为浮点数舍入错误。

## 2 原型和原型链

### 2.1 理解原型设计模式以及JavaScript中的原型规则

::: details 参考
在 JavaScript 中，每个对象都有一个原型（prototype）属性，它指向另一个对象，这个对象就是该对象的原型。而原型本身也可以有自己的原型，形成了一个原型链（prototype chain）。

关系：instance.constructor.prototype = instance.proto

特点：JavaScript对象是通过引用来传递的，我们创建的每个新对象实体中并没有一份属于自己的原型副本，当我们修改原型时，与之相关的对象也会继承这一改变。

当我们需要一个属性时，JavaScript引擎会先看当前对象中是否有这个属性，如果没有的话，就会查找它的prototype对象是否有这个属性，如此递推下去，一致检索到Object内建对象。

```js
function Func() {}
Func.prototype.name = '娃哈哈'
Func.prototype.getInfo = function () {
  return this.name
}
var person = new Func()
console.log(person.getInfo()) //"娃哈哈"
console.log(Func.prototype) //Func { name = "娃哈哈", getInfo = function() }
```

:::

### 2.2 instanceof的底层实现原理，手动实现一个instanceof

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

```js
function Parent() {
  this.name = 'Parent'
}
Parent.prototype.sayHello = function () {
  console.log('Hello, ' + this.name)
}

function Child() {
  this.name = 'Child'
}
Child.prototype = new Parent()
```

#### 2.构造函数继承（Constructor Inheritance）：

- **优点：**
  - 避免了原型链继承中的共享问题。
  - 可以传递参数给父类构造函数。
- **缺点：**
  - 无法继承父类原型上的方法。
  - 每个子类实例都有自己的一份父类的属性副本，可能浪费内存。

```js
function Parent(name) {
  this.name = name || 'Parent'
}

function Child(name) {
  Parent.call(this, name)
  this.childProp = 'Child'
}
```

#### 3.组合继承（Combination Inheritance）：

- **优点：**
  - 同时使用构造函数继承和原型链继承的优点。
  - 可以继承父类的属性和方法，也可以传递参数给父类构造函数。
- **缺点：**
  - 调用了两次父类构造函数，可能导致性能问题和不必要的属性复制。

```js
function Parent(name) {
  this.name = name || 'Parent'
}
Parent.prototype.sayHello = function () {
  console.log('Hello, ' + this.name)
}

function Child(name) {
  Parent.call(this, name)
  this.childProp = 'Child'
}
Child.prototype = new Parent()
```

#### 4.原型式继承（Prototypal Inheritance）：

- **优点：**
  - 简单，可以通过现有对象创建新对象。
- **缺点：**
  - 共享原型，可能会导致属性和方法污染。

```js
var parent = {
  name: 'Parent',
  sayHello: function () {
    console.log('Hello, ' + this.name)
  }
}

var child = Object.create(parent)
child.name = 'Child'
```

#### 5.寄生式继承（Parasitic Inheritance）：

- **优点：**
  - 可以在不修改原对象的情况下扩展它。
- **缺点：**
  - 可能难以维护，不够清晰。

```js
function createChild(parent) {
  var child = Object.create(parent)
  child.name = 'Child'
  return child
}
```

#### 6.寄生组合式继承（Parasitic Combination Inheritance）：

- **优点：**
  - 避免了组合继承中调用两次父类构造函数的问题。
  - 继承父类的属性和方法，同时不会共享原型。
    **缺点：**
  - 相对复杂。

```js
function inherit(child, parent) {
  var prototype = Object.create(parent.prototype)
  prototype.constructor = child
  child.prototype = prototype
}
function Parent(name) {
  this.name = name || 'Parent'
}
Parent.prototype.sayHello = function () {
  console.log('Hello, ' + this.name)
}

function Child(name) {
  Parent.call(this, name)
  this.childProp = 'Child'
}
inherit(Child, Parent)
```

:::

### 2.4 至少说出一种开源项目(如Node)中应用原型继承的案例

### 2.5 可以描述new一个对象的详细过程，手动实现一个new操作符

::: details 参考

1. 创建空对象；
   var obj = {};
2. 将这个空对象的原型指向构造函数的 `prototype` 属性；
   obj.**proto** = ClassA.prototype;
3. 执行构造函数，将 `this` 关键字指向这个新创建的对象：
   ClassA.call(obj);//{}.构造函数();
4. 如果无返回值或者返回一个非对象值，则将新对象返回；如果返回值是一个新对象的话那么直接直接返回该对象。

```js
// 定义一个构造函数
function Person(name, age) {
  this.name = name
  this.age = age
}

// 使用 "new" 关键字创建对象实例
var person1 = new Person('Alice', 25)

// "new" 的详细过程：
// 1. 创建一个空的对象实例
// 2. 将新对象的原型指向构造函数的原型
// 3. 执行构造函数，并传入新对象作为上下文（this）
// 4. 构造函数内部设置实例的属性和方法
// 5. 返回新对象实例
```

:::

### 2.6 call, apply, bind

### 2.7 理解es6 class构造以及继承的底层实现原理

::: details 参考

#### 1. Promise

一句话概括Promise：Promise对象**用于异步操作，它表示一个尚未完成且预计在未来完成的异步操作**。
promise是用来解决两个问题的：

**回调地狱**：避免了嵌套过多的回调函数，提高了代码的可读性和可维护性。

**并行和错误处理**： 使得并行执行多个异步操作和处理错误变得更加容易，同时允许将多个Promise的结果组合起来进行处理。

这个promise可以解决异步的问题，本身不能说promise是异步的

**Promise有三种状态：等待（pending）、已完成（fulfilled）、已拒绝（rejected），分别表示异步操作的不同阶段。**

```js
/*Promise 的简单实现*/

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

一些方法：

- Promise.all()用于将多个Promise合并成一个新的Promise，关注的是**等待所有Promise都成功完成**
- Promise.allSettled()用于将多个Promise合并成一个新的Promise，关注的是**等待所有Promise都完成，不论成功或失败。**
- Promise.race()用于将多个Promise合并成一个新的Promise，关注的是**第一个完成的Promise**，不论是成功还是失败。它会返回第一个完成的Promise的状态（值或原因）。
- Promise.any()用于将多个Promise合并成一个新的Promise，关注的是**第一个成功完成的Promise**。只有当第一个成功的Promise完成时，它才会返回第一个成功的Promise的状态（值）。

#### 2.async/await

一种用于处理异步操作的语法糖，它**使异步编程更加清晰和易于理解**。async用于定义一个异步函数，而await用于暂停异步函数的执行，等待一个Promise解决（变为fulfilled）并返回其结果，然后继续执行后续代码。

- **拓展**
  - async/await 可以看作是 Generator 的语法糖，因为它们都是用于处理异步操作的工具，但 async/await 提供了更简洁和更易读的语法。这是因为 async/await 建立在 Generator 的基础上，并对其进行了改进，使异步代码看起来更像同步代码。
  - async/await 也可以看作是建立在 Promise 之上的语法糖，因为它是通过 Promise 来管理异步操作的。async/await 提供了一种更清晰、更同步化的方式来编写异步代码，将异步操作和错误处理看起来更像同步代码。

#### 3.class

class语法提供了**一种更简洁和面向对象的方式来定义对象构造函数和继承**。底层实现原理涉及了JavaScript中的**原型链**，提供了一种更面向对象的语法糖，使得对象构造和继承更加清晰和易于使用。
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

### 3.4 this的原理以及几种不同使用场景的取值

```js
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

```js
闭包应用场景之setTimeout
//setTimeout传递的第一个函数不能带参数
setTimeout((param) => {
  alert(param)
}, 1000)

//通过闭包可以实现传参效果
function func(param) {
  return function () {
    alert(param)
  }
}
var f1 = func('娃哈哈')
setTimeout(f1, 1000) //娃哈哈
```

### 3.6 理解堆栈溢出和内存泄漏的原理，如何防止

### 3.7 如何处理循环的异步操作

### 3.8 理解模块化解决的实际问题，可列举几个模块化方案并理解其中原理

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

### 4.3 宏任务和微任务分别有哪些

略~~~

### 4.4 可以快速分析一个复杂的异步嵌套逻辑，并掌握分析方法

### 4.5 使用Promise实现串行

略~~~

### 4.6 Node与浏览器EventLoop的差异

### 4.7 如何在保证页面运行流畅的情况下处理海量数据

- 综合应用场景

> 1. 防抖(debounce):就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。
>    > - search搜索联想，用户在不断输入值时，用防抖来节约请求资源。
>    > - window触发resize的时候，不断的调整浏览器窗口大小会不断的触发这个事件，用防抖来让其只触发一次

> 2. 节流(throttle):就是指连续触发事件但是在 n 秒中只执行一次函数。节流会稀释函数的执行频率。
>    > - 鼠标不断点击触发，mousedown(单位时间内只触发一次)
>    > - 监听滚动事件，比如是否滑到底部自动加载更多，用throttle来判断
>    >   所谓防抖，就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。

- 防抖函数分为非立即执行版和立即执行版。

> 非立即执行版的意思是触发事件后函数不会立即执行，而是在 n 秒后执行，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。
> 立即执行版的意思是触发事件后函数会立即执行，然后 n 秒内不触发事件才能继续执行函数的效果。

## 5 语法和API

### 5.1 理解ECMAScript和JavaScript的关系

### 5.2 熟练运用es5、es6提供的语法规范，

### 5.3 熟练掌握JavaScript提供的全局对象（例如Date、Math）、全局函数（例如decodeURI、isNaN）、全局属性（例如Infinity、undefined）

### 5.4 熟练应用map、reduce、filter 等高阶函数解决问题

```js
-#for in

1.一般用于遍历对象的可枚举属性。以及对象从构造函数原型中继承的属性。对于每个不同的属性，语句都会被执行。
2.不建议使用for in 遍历数组，因为输出的顺序是不固定的。
3.如果迭代的对象的变量值是null或者undefined, for in不执行循环体，建议在使用for in循环之前，先检查该对象的值是不是null或者undefined

# for of

1.for…of 语句在可迭代对象（包括 Array，Map，Set，String，TypedArray，arguments 对象等等）上创建一个迭代循环，调用自
```

### 5.5 setInterval需要注意的点，使用settimeout实现setInterval

### 5.6 JavaScript提供的正则表达式API、可以使用正则表达式（邮箱校验、URL解析、去重等）解决常见问题

### 5.7 JavaScript异常处理的方式，统一的异常处理方案

::: details 参考

1. try...catch 语句

```js
try {
  // 可能引发异常的代码
} catch (error) {
  // 处理异常的代码
}
```

2. 全局错误事件监听器

```js
window.addEventListener('error', function (event) {
  // 处理未捕获的全局错误
  console.error('Global error:', event.error)
})
```

3. Promise 错误处理：

```js
somePromiseFunction()
  .then((result) => {
    // 处理成功情况
  })
  .catch((error) => {
    // 处理错误情况
  })
```

:::

### 5.8 数组常用方法

```js
# 改变原数组

splice() 添加/删除数组元素 返回值: 如果有元素被删除,返回包含被删除项目的新数组。
sort() 数组排序 返回值: 返回包排序后的新数组。
pop() 删除一个数组中的最后的一个元素 返回值: 返回被删除的元素。
shift() 删除数组的第一个元素 返回值: 返回被删除的元素。
push() 向数组的末尾添加元素 返回值: arrayObject 的新长度。
unshift() 向数组的开头添加一个或更多元素 返回值: arrayObject 的新长度。
reverse() 颠倒数组中元素的顺序 返回值: 颠倒后的新数组。
copyWithin() 指定位置的成员复制到其他位置 返回值: 返回当前数组。
fill() 填充数组 返回值: 返回当前数组。


# 不改变原数组的方法

slice() 浅拷贝数组的元素 返回值: 返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新数组
join() 数组转字符串 返回值: 返回生成的字符串。
concat() 合并两个或多个数组 返回值: 返回返回合并后的新数组。
indexOf() 查找数组是否存在某个元素 返回值: 返回下标
lastIndexOf() 查找指定元素在数组中的最后一个位置 返回值: 方法返回指定元素,在数组中的最后一个的索引，如果不存在则返回 -1。（从数组后面往前查找）
includes() 查找数组是否包含某个元素 返回值: 返回布尔
```

### 5.9 数组扁平化、去重、乱序

::: details 参考

#### 1.扁平化

- 递归方法
- Array.prototype.flat() Infinity
- Array.prototype.reduce()

#### 2.去重

- 对象属性的唯一性
- 递归
- indexOf
- includes
- 使用Set：

```js
const array = [1, 2, 2, 3, 4, 4, 5]
const uniqueArray = [...new Set(array)]
console.log(uniqueArray) // 输出：[1, 2, 3, 4, 5]
```

- 使用filter方法：

```js
const array = [1, 2, 2, 3, 4, 4, 5]
const uniqueArray = array.filter((value, index, self) => {
  return self.indexOf(value) === index
})
console.log(uniqueArray) // 输出：[1, 2, 3, 4, 5]
```

- 使用reduce方法：

```js
const array = [1, 2, 2, 3, 4, 4, 5]
const uniqueArray = array.reduce((accumulator, currentValue) => {
  if (!accumulator.includes(currentValue)) {
    accumulator.push(currentValue)
  }
  return accumulator
}, [])
console.log(uniqueArray) // 输出：[1, 2, 3, 4, 5]
```

- 使用indexOf方法

```js
const array = [1, 2, 2, 3, 4, 4, 5]
const uniqueArray = []
for (let i = 0; i < array.length; i++) {
  if (uniqueArray.indexOf(array[i]) === -1) {
    uniqueArray.push(array[i])
  }
}
console.log(uniqueArray) // 输出：[1, 2, 3, 4, 5]
```

:::
