# 原型

::: tip Prototype
关于原型的学习记录
:::

## 创建一个对象 <Badge text="FIRST" type="warn"/>

**1. 工厂模式**

```js
function createObject() {
  var o = new Object();
  o.name = 'Hello World';
  o.sayName = function() {
    console.log(this.name);
  };
  return o;
}
```

**2. 构造函数模式**

`new instance`

- 创建一个新对象 this
- 将这个函数的作用域赋给新对象 this
- 执行构造函数的代码
- 返回新对象（没有 return，有 return 直接返回这个 return 值）

```js
function Person(name) {
  this.name = name;
  // 👎
  this.sayName = function() {
    console.log(this.name);
  };
  // 👍
  this.sayName = sayName;
}
function sayName() {
  console.log(this.name);
}
var per1 = new Person('Hello');
var per2 = new Person('World');
per1 === per2; // 👎 false
per1 === per2; // 👍 true
```

:::warning Yes No
`👎 以这种方式创建函数，会导致不同的作用域链和标识符解析，不同实例的同名函数是不相等的`

`👍 创建一个全局函数，毫无封装性可言`
:::

**3. 原型模式**

`创建一个函数，就会创建一个prototype对象，[[Prototype]]指针指向这个函数`

```js
function Person() {}
// 1
Person.prototype.name = 'Hello';
Person.prototype.friends = ['a', 'b'];
Person.prototype.sayName = function() {
  console.log(this.name);
};
// 2
Person.prototype = {
  constructor: Person,
  name: 'Hello',
  friends: ['a', 'b'],
  sayName: function() {
    console.log(this.name);
  }
};
```

:::warning Yes No

重写 prototype 对象时，注意顺序覆盖，否则报错

所有属性被实例共享（引用对象，数组，对象）

不能传参数
:::

**4. 组合使用构造函数和原型模式**

```js
function Person(name) {
  this.name = name;
  this.friends = ['a', 'b'];
}
Person.prototype = {
  constructor: Person,
  sayName() {
    console.log(this.name);
  }
};
var per1 = new Person('Hello');
var per2 = new Person('World');
per1.friends.push('c');
per1.friends; // [a, b, c]
per2.friends; // [a, b]
per1.friends === per2.friends; // false
```

:::warning Yes No
使用最广泛，认同度最高的一种方法
:::

**5. 动态原型模式**

```js
function Person(name) {
  this.name = name;
  if (typeof this.sayName !== 'function') {
    Person.prototype.sayName = function() {
      console.log(this.name);
    };
  }
}
```

**7. 寄生构造函数模式**

```js
function Person(name) {
  var o = new Object();
  o.name = name;
  o.sayName = function() {
    console.log(this.name);
  };
  return o;
}
```

:::danger Yes No
返回的对象与构造函数或者构造函数属性没有关系

不能依赖 instanceof 操作符来确定对象类型
:::

**8. 稳妥构造函数模式**

```js
function Person(name) {
  var o = new Object();
  o.name = name;
  o.sayName = function() {
    console.log(name);
  };
  return o;
}
```

:::danger Yes No
禁止使用 new 和 this

instanceof 操作符毫无意义
:::

## 继承 <Badge text="SECOND" type="warn"/>

- 和原型有关的几个 API 方法
  - isPrototypeOf()
  - Object.setPrototypeOf()
  - Object.getprototypeOf()
  - Object.create()

**1. 原型链**

```js
function SuperType() {}
function SubType() {}
SubType.prototype = new SuperType();
// then ❌
SubType.prototype = {}; // 重写需要小心
```

:::warning Yes No
属性共享问题（引用）
:::

**2. 借用构造函数**

```js
function SuperType() {}
function SubType() {
  SuperType.call(this);
}
```

:::danger Yes No
函数复用无从谈起（函数都在构造函数中定义）

可以传参数
:::

**3. 组合继承**

```js
function SuperType(name) {
  this.name = name;
}
SuperType.prototype.sayName = function() {
  console.log(this.name);
};
function SubType(name, age) {
  SuperType.call(this, name); // 第一次调用SuperType
  this.age = age;
}
SubType.prototype = new SuperType(); // 第二次调用SuperType
SubType.prototype.sayAge = function() {
  console.log(this.age);
};
var subType = new SubType('Hell', 18);
```

:::warning Yes No
调用了两次 SuperType 构造函数
:::

**4. 原型式继承**

:::tip Object.create()
接收两个参数，第一个参数为一个对象，第二个参数允许使用类似 Object.defineProperty() 方式定义值

`Object.create({a: 1}, { name: { value: 'Hello', enumerable: true, writable: true, configurable} })`
:::

```js
function object(o) {
  var F = function() {};
  F.prototype = o;
  return new F();
}
```

:::danger Yes No
引用类型共享值问题
:::

**5.寄生式继承**

```js
function createAnother(original) {
  // 引用上面的object方法
  var clone = object(original); // 创建一个新对象方法都能用于此处，不固定实现
  clone.sayHi = function() {
    console.log('hi');
  };
  return clone;
}
```

:::warning Yes No
函数复用性问题与构造函数模式相似
:::

**6. 寄生组合式继承**

```js
// 巧借中间函数
function inheritPrototype(subType, superType) {
  var prototype = object(superType.prototype);
  prototype.constructor = subType;
  subType.prototype = prototype;
}
// inherit
function SubType() {}
function SuperType() {}
inheritPrototype(SubType, SuperType);
```

:::tip YES
最理想的继承范式
:::

## `__proto__` <Badge text="THIRD" type="warn"/>

ECMAScript 中的 prototype 是一个隐式引用，一些浏览器实现了 `__proto__` 这个属性，可以通过 `obj.__proto__` 访问到被定义为隐式属性的 `prototype`

:wrench: `__proto__渐渐被定义成规范`

`覆盖 Object.prototype.__proto__ 属性，访问普通对象的 __proto__ 属性会触发 get 方法`

```js
Object.defineProperty(Object.prototype, '__proto__', {
  get() {
    console.log('get');
  }
});
({}.__proto__); // get
```

## constructor <Badge text="FOURTH" type="warn"/>

`创建一个新函数，都会生成一个 constructor 属性指向函数`

:100: new 的实现

```js
// no __proto__
function createInstance(Constructor, ...args) {
  var instance = Constructor.prototype;
  var res = Constructor.apply(instance, args);
  return res ? res : instance;
}

// with __proto__
function createInstanceWithProto() {
  var _this = {};
  var constructor = [].shift.call(arguments);

  _this.__proto__ = constructor.prototype;

  var res = constructor.apply(_this, arguments);

  return res ? res : _this;
}

function User(name) {
  this.name = name;
}

var user = createInstance(User, 'hello');
var userWithProto = createInstanceWithProto(User, 'world')
user.name; // hello
```
