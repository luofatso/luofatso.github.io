# Object相关api

[TOC]

## Object.defineProperty(obj,prop,descriptor)

方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。

- obj要定义属性的对象。
- prop要定义或修改的属性的名称或 Symbol 。
- descriptor要定义或修改的属性描述符。

```
const object1 = {};

Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false
});

object1.property1 = 77;
// throws an error in strict mode

console.log(object1.property1);
// expected output: 42
```

## Object.defineProperties（）

方法直接在一个对象上定义新的属性或修改现有属性，并返回该对象。

```
var obj = {};
Object.defineProperties(obj, {
  'property1': {
    value: true,
    writable: true
  },
  'property2': {
    value: 'Hello',
    writable: false
  }
  // etc. etc.
});
```

## Object.getOwnPropertyDescriptor（）

自有属性指的是直接称为该对象的属性，不需要从原型链上进行查找的属性。
返回指定对象所有自身属性（非继承属性）的描述对象。
方法会返回某个对象属性的描述对象（descriptor）。

> obj需要查找的目标对象
> prop目标对象内属性名称

```
const object1 = {
  property1: 42
};

const descriptor1 = Object.getOwnPropertyDescriptor(object1, 'property1');

console.log(descriptor1.configurable);
// expected output: true

console.log(descriptor1.value);
// expected output: 42

var o, d;

o = { get foo() { return 17; } };
d = Object.getOwnPropertyDescriptor(o, "foo");
// d {
//   configurable: true,
//   enumerable: true,
//   get: /*the getter function*/,
//   set: undefined
// }

o = { bar: 42 };
d = Object.getOwnPropertyDescriptor(o, "bar");
// d {
//   configurable: true,
//   enumerable: true,
//   value: 42,
//   writable: true
// }

o = {};
Object.defineProperty(o, "baz", {
  value: 8675309,
  writable: false,
  enumerable: false
});
d = Object.getOwnPropertyDescriptor(o, "baz");
// d {
//   value: 8675309,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }
```

## Object.getOwnPropertyDescriptors（）

方法用作获取一个对象的所有自身属性的替代。
方法，返回指定对象所有自身属性（非继承属性）的描述对象。

## Object.getPrototypeOf（）

方法用于读取一个对象的原型对象。

```
const prototype1 = {};
const object1 = Object.create(prototype1);

console.log(Object.getPrototypeOf(object1) === prototype1);
// expected output: true
```

## Object.setPrototypeOf（）

用来设置一个对象的原型对象（prototype），返回参数对象本身。

```
let proto = {};
let obj = { x: 10 };
Object.setPrototypeOf(obj, proto);

proto.y = 20;
proto.z = 40;

obj.x // 10
obj.y // 20
obj.z // 40
```

## Object.prototype.hasOwnProperty（）

方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性（也就是，是否有指定的键）。

```
const object1 = {};
object1.property1 = 42;

console.log(object1.hasOwnProperty('property1'));
// expected output: true

console.log(object1.hasOwnProperty('toString'));
// expected output: false

console.log(object1.hasOwnProperty('hasOwnProperty'));
// expected output: false
```
