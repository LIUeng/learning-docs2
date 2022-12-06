# 关于 this

> this 提供一种优雅的方式来隐式传递一个对象的引用（自动引用合适的上下文对象）

:::tip this
this 的绑定和函数声明的位置没有任何关系，只取决函数的调用方式（当一个函数调用时，会创建一个活动记录 or 执行上下文, 这个记录会包含函数在哪里被调用、函数的调用、函数的参数等信息；this 就是记录其中的一个属性，会在函数执行的过程中调用）
:::

## 误解

- ❎ 指向函数（所有 JavaScript 函数都可以看成对象）本身

```js
// 具名函数
function foo() {
  // 不可行
  this.count++;
  // 可行
  foo.count++;
}
foo.count = 0;
// 执行
foo();
foo();
// foo.count 0

setTimeout(function() {
  // 匿名函数无法调用自身 arguments.callee 已经被弃用
});
```

- ❎ this 指向函数的作用域

```js
function foo() {
  var a = 2;
  this.bar();
}
function bar() {
  console.log(this.a);
}
// 不能使用 this 引用一个词法作用域内部的东西
foo(); // ReferenceError: a is not defined
```

## this 全面解析

### 调用位置

> this 是在调用时绑定的，取决于函数在哪调用（函数被调用的位置）

`分析调用栈（到达当前执行位置所调用的所有函数）`

### 绑定规则

?调用位置如何决定 this 的绑定对象

#### 默认绑定

- 严格模式与 foo()的调用位置无关

```js
// 非严格模式
function foo() {
  // 严格模式 TypeError: this is not defined
  'use strict';
  console.log(this.a);
}

// 可行
(function() {
  'use strict';
  foo(); // a = 1;
})();

var a = 1;
foo(); // a = 1; this 绑定的是全局对象 window
```

#### 隐式绑定

```js
function foo() {
  console.log(this.a);
}
var obj = {
  a: 1,
  foo: foo
};
obj.foo(); // 1

// 隐式丢失
// world 是对象 o 的引用，但其实是 hello 函数本身；world 是一个不带任何修饰符的函数调用，应用了默认绑定
// 参数传递也是此行为
function hello() {
  console.log(this.a);
}
var o = {
  a: 1,
  hello: hello
};
var world = o.hello;
var a = 'i am world';
world(); // i am world
```

#### 显式绑定

> JavaScript 提供的大多数函数以及自己创建的函数都能通过 apply call 来进行显式绑定

- call 接收绑定对象和 ...argsArr 参数
- apply 接收绑定对象和 argsArr 数组参数

`硬绑定`

```js
function hello() {
  console.log(this.a);
}
var obj = {
  a: 1
};
var a = 2;
hello.call(obj); // hello 一旦绑定为 obj 对象，就无法绑定其他 this 对象了
hell.call(window); // 无效
```

#### new 绑定

> 在 JavaScript 中，构造函数只是一些用 new 关键字时被调用的函数（被 new 调用的普通函数）

使用 new 来调用函数，发生以下步骤

- 创建一个新的对象
- 新对象会被执行[[原型 prototype]]连接
- 新对象会绑定到函数调用的 this
- 如果函数没有返回其他对象，即返回这个新对象

### 绑定优先级

- 显式绑定 > 隐式绑定 > 默认绑定
- new 绑定 > 隐式绑定
- new 绑定和显式绑定无法判定

#### bind

> new 绑定和显式绑定分析

bind polyfill 代码实现

```js
// myBind(fn, obj);
function myBind(fn, self, ...args) {
  return function bound(...aargs) {
    // return this instanceof bound ? this : fn.apply(self, aargs, args);
    return fn.apply(this instanceof bound ? this : self, aargs, args);
  };
}
```

```js
if (!Function.prototype.bind) {
  Function.prototype.bind = function(oThis) {
    if (typeof this !== 'function') {
      // 与 ECMAScript 5 最接近的 // 内部 IsCallable 函数
      throw new TypeError(
        'Function.prototype.bind - what is trying to be bound is not callable'
      );
    }
    var aArgs = Array.prototype.slice.call(arguments, 1);
    var fToBind = this;
    var fNOP = function() {};
    var fBound = function() {
      return fToBind.apply(
        this instanceof fNOP && oThis ? this : oThis,
        aArgs.concat(Array.prototype.slice.call(arguments))
      );
    };
    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();
    return fBound;
  };
}
```

### 注意点

#### 忽略的 this

> 如果绑定的对象为 null、undefine 时，应用的是默认绑定

:::tip 安全的 this
如果绑定为 null，会产生一些副作用，比如 window（产生默认绑定）

可以创建一个 DMZ（demilitarized zone 非军事区）对象 --- 空的非委托的对象
:::

#### 间接引用

间接引用采用的是默认绑定

```js
function foo() {}
var a = 1;
var obja = { a: 2 };
var objb = { a: 3, foo: foo };
(obja.foo = objb.foo)(); // 输出 1
```

#### 软绑定

> 默认绑定指定一个全局对象和 undefined 以外的值，可以实现和硬绑定相同的效果；同时保留隐式绑定或显示绑定修改 this 的能力

```js
if (!Function.prototype.softBind) {
  Function.prototype.softBind = function(obj) {
    var fn = this; // 捕获所有 curried 参数
    var curried = [].slice.call(arguments, 1);
    var bound = function() {
      return fn.apply(
        !this || this === (window || global) ? obj : this,
        curried.concat.apply(curried, arguments)
      );
    };
    bound.prototype = Object.create(fn.prototype);
    return bound;
  };
}
```

### es6 箭头函数

- 不适用以上绑定方式（无效）
- 箭头函数会继承外层函数调用的 this 绑定（外层函数或全局作用域）
