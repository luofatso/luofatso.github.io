---
outline: [2, 3]
---

# 前端甲骨文系列 --- JavaScript

[[TOC]]

## 1 变量和类型


### 1.1 JavaScript规定了几种语言类型

::: info
JavaScript 规定了七种基本数据类型和一种复杂数据类型，共计八种语言类型。

#### 基本数据类型（Primitive Data Types）：
数值（Number）：表示数字，包括整数和浮点数。
字符串（String）：表示文本字符串。
布尔值（Boolean）：表示 true 或 false。
空值（Null）：表示空值。
未定义（Undefined）：表示未定义的值。
符号（Symbol）：表示唯一的标识符，用于创建对象的属性名。
#### 复杂数据类型（Complex Data Type）：
对象（Object）：表示一个复合值（Object、Array、Function、Date等），可以包含多个属性和方法。

需要注意的是，基本数据类型是按值传递的，而复杂数据类型是按引用传递的。这意味着基本数据类型在赋值和传递时是复制值的，而复杂数据类型在赋值和传递时是复制引用的。
:::

### 1.2 JavaScript对象的底层数据结构是什么

::: info
JavaScript 对象的底层数据结构通常是基于哈希表（Hash Table）或者称为散列表。哈希表是一种用于实现键值对映射关系的数据结构，其中每个键都会被哈希函数计算成一个索引，然后对应到一个存储位置，从而实现高效的查找和插入操作。

:::


### 1.3 Symbol类型在实际开发中的应用、可手动实现一个简单的Symbol

> 创建唯一的属性名, 用于创建私有属性或方法, 在迭代器中作为唯一的迭代器键（Iterator Key）

### 1.4 JavaScript中的变量在内存中的具体存储形式


::: info
对于基本数据类型（如数字、字符串、布尔值等），它们的值直接存储在变量所分配的内存空间中，称为栈（stack）内存。这意味着在变量被声明和初始化时，其值直接存储在栈内存中，并且在变量被销毁（超出作用域）时，栈内存会自动释放。

对于复杂数据类型（如对象、数组等），变量存储的实际是对象或数组的引用（或称为指针），而不是对象或数组的实际值。引用存储在栈内存中，而对象或数组的实际值则存储在堆（heap）内存中。堆内存是一块较大的内存区域，用于存储复杂数据类型的值。当变量被赋值为对象或数组时，实际上是将对象或数组在堆内存中的引用存储到变量的栈内存中。

这种通过栈内存存储引用的方式，使得 JavaScript 中的变量在赋值和传递时都是按值传递的，即复制的是引用而不是实际的对象或数组。这也是为什么在比较两个对象或数组时，实际比较的是它们的引用而不是内容。

需要注意的是，JavaScript 中的垃圾回收机制会自动清理不再被引用的堆内存，从而防止内存泄漏的发生。同时，JavaScript 引擎会对栈内存进行自动管理，包括变量的创建、销毁以及内存分配等操作，无需手动管理栈内存。
:::

### 1.5 基本类型对应的内置对象，以及他们之间的装箱拆箱操作   


### 1.6 理解值类型和引用类型


### 1.7 null和undefined的区别

::: info
首先 Undefined 和 Null 都是基本数据类型，这两个基本数据类型分别都只有一个值，就是 undefined 和 null。

undefined 代表的含义是未定义，null 代表的含义是空对象（其实不是真的对象，请看下面的注意！）。一般变量声明了但还没有定义的时候会返回 undefined，null主要用于赋值给一些可能会返回对象的变量，作为初始化。

其实 null 不是对象，虽然 typeof null 会输出 object，但是这只是 JS 存在的一个悠久 Bug。在 JS 的最初版本中使用的是 32 位系统，为了性能考虑使用低位存储变量的类型信息，000 开头代表是对象，然而 null 表示为全零，所以将它错误的判断为 object 。虽然现在的内部类型判断代码已经改变了，但是对于这个 Bug 却是一直流传下来。

undefined 在 js 中不是一个保留字，这意味着我们可以使用 undefined 来作为一个变量名，这样的做法是非常危险的，它会影响我们对 undefined 值的判断。但是我们可以通过一些方法获得安全的 undefined 值，比如说 void 0。

当我们对两种类型使用 typeof 进行判断的时候，Null 类型化会返回 “object”，这是一个历史遗留的问题。当我们使用双等号对两种类型的值进行比较时会返回 true，使用三个等号时会返回 false。

#### undefined 与 undeclared 的区别？
已在作用域中声明但还没有赋值的变量，是 undefined。相反，还没有在作用域中声明过的变量，是 undeclared 的。

对于 undeclared 变量的引用，浏览器会报引用错误，如 ReferenceError: b is not defined 。但是我们可以使用 typeof 的安全防范机制来避免报错，因为对于 undeclared（或者 not defined ）变量，typeof 会返回 "undefined"。
:::

### 1.8 至少可以说出三种判断JavaScript数据类型的方式，以及他们的优缺点，如何准确的判断数组类型

:::info
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
instanceof 操作符可以用来判断一个对象是否属于某个构造函数创建的实例。
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
通过判断对象的构造函数来判断其类型
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
使用 Object 对象的原型方法 toString ，使用 call 进行狸猫换太子，借用Object的 toString  方法

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


### 1.10 出现小数精度丢失的原因，JavaScript可以存储的最大数字、最大安全数字，JavaScript处理大数字的方法、避免精度丢失的方法


## 2 原型和原型链

### 2.1 理解原型设计模式以及JavaScript中的原型规则

:::info
在 JavaScript 中，每个对象都有一个原型（prototype）属性，它指向另一个对象，这个对象就是该对象的原型。而原型本身也可以有自己的原型，形成了一个原型链（prototype chain）。

关系：instance.constructor.prototype = instance.proto

特点：JavaScript对象是通过引用来传递的，我们创建的每个新对象实体中并没有一份属于自己的原型副本，当我们修改原型时，与之相关的对象也会继承这一改变。

当我们需要一个属性时，JavaScript引擎会先看当前对象中是否有这个属性，如果没有的话，就会查找它的prototype对象是否有这个属性，如此递推下去，一致检索到Object内建对象。
```
function Func(){}
Func.prototype.name = "娃哈哈";
Func.prototype.getInfo = function() {
   return this.name;
}
var person = new Func();
console.log(person.getInfo());//"娃哈哈"
console.log(Func.prototype);//Func { name = "娃哈哈", getInfo = function() }
```
:::

### 2.2 instanceof的底层实现原理，手动实现一个instanceof


### 2.3 实现继承的几种方式以及他们的优缺点


### 2.4 至少说出一种开源项目(如Node)中应用原型继承的案例


### 2.5 可以描述new一个对象的详细过程，手动实现一个new操作符

::: info
1. 创建空对象；
var obj = {};
2. 设置新对象的constructor属性为构造函数的名称，设置新对象的__proto__属性指向构造函数的prototype对象；
obj.__proto__ = ClassA.prototype;
3. 使用新对象调用函数，函数中的this被指向新实例对象：
ClassA.call(obj);//{}.构造函数();          
4. 如果无返回值或者返回一个非对象值，则将新对象返回；如果返回值是一个新对象的话那么直接直接返回该对象。

```
// 定义一个构造函数
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// 使用 "new" 关键字创建对象实例
var person1 = new Person("Alice", 25);

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
- Promise

一句话概括Promise：Promise对象用于异步操作，它表示一个尚未完成且预计在未来完成的异步操作。
promise是用来解决两个问题的：

回调地狱，代码难以维护，常常第一个的函数的输出是第二个函数的输入这种现象
promise可以支持多个并发的请求，获取并发请求中的数据

这个promise可以解决异步的问题，本身不能说promise是异步的

```
/*Promise 的简单实现*/

class MyPromise {
    constructor(fn) {
        this.resolvedCallbacks = [];
        this.rejectedCallbacks = [];
        this.state = "PADDING";
        this.value = "";
        fn(this.resolve.bind(this), this.reject.bind(this));
    }
    resolve(value) {
        if (this.state === "PADDING") {
            this.state = "RESOLVED";
            this.value = value;
            this.resolvedCallbacks.forEach(cb => cb());
        }
    }
    reject(value) {
        if (this.state === "PADDING") {
            this.state = "REJECTED";
            this.value = value;
            this.rejectedCallbacks.forEach(cb => cb());
        }
    }
    then(resolve = function() {}, reject = function() {}) {
        if (this.state === "PADDING") {
            this.resolvedCallbacks.push(resolve);
            this.rejectedCallbacks.push(reject);
        }
        if (this.state === "RESOLVED") {
            resolve(this.value);
        }
        if (this.state === "REJECTED") {
            reject(this.value);
        }
    }
}
```

- async/await

## 3 作用域和闭包


### 3.1 理解词法作用域和动态作用域

作用域： 作用域是定义变量的区域，它有一套访问变量的规则，这套规则来管理浏览器引擎如何在当前作用域以及嵌套的作用域中根据变量（标识符）进行变量查找。

作用域链： 作用域链的作用是保证对执行环境有权访问的所有变量和函数的有序访问，通过作用域链，我们可以访问到外层环境的变量和
函数。


### 3.2 理解JavaScript的作用域和作用域链

作用域： 作用域是定义变量的区域，它有一套访问变量的规则，这套规则来管理浏览器引擎如何在当前作用域以及嵌套的作用域中根据变量（标识符）进行变量查找。

作用域链： 作用域链的作用是保证对执行环境有权访问的所有变量和函数的有序访问，通过作用域链，我们可以访问到外层环境的变量和函数。

作用域链的本质上是一个指向变量对象的指针列表。变量对象是一个包含了执行环境中所有变量和函数的对象。作用域链的前端始终都是当前执行上下文的变量对象。全局执行上下文的变量对象（也就是全局对象）始终是作用域链的最后一个对象。

当我们查找一个变量时，如果当前执行环境中没有找到，我们可以沿着作用域链向后查找。

作用域链的创建过程跟执行上下文的建立有关....

### 3.3 理解JavaScript的执行上下文栈，可以应用堆栈信息快速定位问题


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
有权访问另一个函数作用域内变量的函数。
或简单理解为定义在一个函数内部的函数，内部函数持有外部函数内变量的引用。

> - 闭包用途
  1、读取函数内部的变量
  2、让这些变量的值始终保持在内存中。不会再f1调用后被自动清除。
  3、方便调用上下文的局部变量。利于代码封装。
  原因：f1是f2的父函数，f2被赋给了一个全局变量，f2始终存在内存中，f2的存在依赖f1，因此f1也始终存在内存中，不会在调用结束后，被垃圾回收机制回收。

> - 闭包缺点
  1、由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题，在IE中可能导致内存泄露。解决方法是，在退出函数之前，将不使用的局部变量全部删除。
  2、闭包会在父函数外部，改变父函数内部变量的值。所以，如果你把父函数当作对象（object）使用，把闭包当作它的公用方法（Public Method），把内部变量当作它的私有属性（private value），这时一定要小心，不要随便改变父函数内部变量的值。

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


### 3.7 如何处理循环的异步操作


### 3.8 理解模块化解决的实际问题，可列举几个模块化方案并理解其中原理


## 4 执行机制


### 4.1 为何try里面放return，finally还会执行，理解其内部机制


### 4.2 JavaScript如何实现异步编程，可以详细描述EventLoop机制


### 4.3 宏任务和微任务分别有哪些


### 4.4 可以快速分析一个复杂的异步嵌套逻辑，并掌握分析方法


### 4.5 使用Promise实现串行


### 4.6 Node与浏览器EventLoop的差异


### 4.7 如何在保证页面运行流畅的情况下处理海量数据

- 综合应用场景

> 1. 防抖(debounce):就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。
  >> - search搜索联想，用户在不断输入值时，用防抖来节约请求资源。
  >> - window触发resize的时候，不断的调整浏览器窗口大小会不断的触发这个事件，用防抖来让其只触发一次

> 2. 节流(throttle):就是指连续触发事件但是在 n 秒中只执行一次函数。节流会稀释函数的执行频率。
  >> - 鼠标不断点击触发，mousedown(单位时间内只触发一次)
  >> - 监听滚动事件，比如是否滑到底部自动加载更多，用throttle来判断
所谓防抖，就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。



- 防抖函数分为非立即执行版和立即执行版。

> 非立即执行版的意思是触发事件后函数不会立即执行，而是在 n 秒后执行，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。
> 立即执行版的意思是触发事件后函数会立即执行，然后 n 秒内不触发事件才能继续执行函数的效果。


## 5 语法和API


### 5.1 理解ECMAScript和JavaScript的关系


### 5.2 熟练运用es5、es6提供的语法规范，


### 5.3 熟练掌握JavaScript提供的全局对象（例如Date、Math）、全局函数（例如decodeURI、isNaN）、全局属性（例如Infinity、undefined）


### 5.4 熟练应用map、reduce、filter 等高阶函数解决问题

```
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

### 5.8 数组常用方法

```
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