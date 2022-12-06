# ES6

::: warning 注意
记录一些之前没有注意的地方
:::

## let & const

**1. 暂时行死区**

```js
typeof x;
let x;
```

## 解构赋值

**1. 数组结构赋值**

`如果等号左边不是可遍历对象，报错！需要Iterator对象`

```js
// 报错
let [foo] = 1, flase, NaN, undefined, null, {};
```

`对象和数组结构赋值，默认值生效的条件，属性值严格等于 'undefined'`

**2. 对象结构赋值**

```js
// 函数参数默认值
{ a = 1 } = {}
```

## 正则的扩展

### match && exec && matchAll

`match 返回所有匹配的结果数组, 不包括位置信息; exec 返回当前匹配的数组, 继续匹配位置; matchAll 一次性匹配所有结果, 包括位置信息`

- 新增方法
  - RegExp.prototype.flags 返回正则表达式的修饰符
  - ...

**1. u（unicode）修饰符**

`大于0xFFFF的unicode字符码`

```js
/\u{20BB7}/u.test('𠮷'); // true
// RegExp.prototype.unicode 属性
const r1 = /hello/;
const r2 = /hello/u;
r1.unicode; // false
r2.unicode; // true
```

**2. sticky 修饰符（y)**

- g 匹配模式对比

  - 1. 开头^自带（头部开始）

  - 2. 从匹配的第一个位置再进行匹配

```js
// RegExp.prototype.sticky 属性
var r = /hello\d/y;
r.sticky; // true
```

**3. dotAll**

`针对 \. 不匹配换行符\n`

```js
// one
/foo[^]bar/.test('foo\nbar') / // true
  // two
  foo.bar /
  s.test('foo\nbar'); // true
```

**4. 后行断言**

```js
// 前行断言
/\d+(?=%)/.exec('100% of US presidents have been male')  // ["100"]
/\d+(?!%)/.exec('that’s all 44 of them')                 // ["44"]
```

```js
// 后行断言
/(?<=\$)\d+/.exec('Benjamin Franklin is on the $100 bill')  // ["100"]
/(?<!\$)\d+/.exec('it’s is worth about €90')

// ⚠️反斜杠与通常的顺序相反
/(?<=(o)d\1)r/.exec('hodor')  // null
/(?<=\1d(o))r/.exec('hodor')  // ["r", "o"]
```

**5. Unicode 属性类**

`\p`

```js
const regexGreekSymbol = /\p{Script=Greek}/u;
regexGreekSymbol.test('π'); // true
```

**6. 具名组匹配**

```js
let re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/u;
'2015-01-02'.replace(re, '$<day>/$<month>/$<year>'); // '02/01/2015'

// \k<组名>
const RE_TWICE = /^(?<word>[a-z]+)!\k<word>$/;
RE_TWICE.test('abc!abc'); // true
RE_TWICE.test('abc!ab'); // false

// 数字引用（\1）依然有效
const RE_TWICE = /^(?<word>[a-z]+)!\1$/;
RE_TWICE.test('abc!abc'); // true
RE_TWICE.test('abc!ab'); // false

// 同时使用
const RE_TWICE = /^(?<word>[a-z]+)!\k<word>!\1$/;
RE_TWICE.test('abc!abc!abc'); // true
RE_TWICE.test('abc!abc!ab');
```

## Symbol

`独一无二`

- 不能与其它类型进行运算
- 可以转为 bool 值
- Symbol.prototype.description
- 作为属性名，必须放在方括号中
- Object.getOwnPropertySymbols()
- Symbol.for() & Symbol.keyFor()

  ```js
  let s1 = Symbol.for('foo');
  let s2 = Symbol.for('foo');
  s1 === s2; // true
  Symbol.keyFor(s1); // "foo"
  ```

- 11 个内置的 Symbol 值，指向语言内部使用的方法
- ...

## Set && Map

- Set

`NaN === NaN true` 添加两次只有一个 NaN 值

`{} === {} false` 添加两次保持两次

- API(Set)

  - 方法

    - size
    - add
    - has
    - delete
    - clear

  - 遍历方法

    - keys
    - values
    - entries
    - forEach

  - 数组去重
    ```js
    var set = new Set([1, 1, 1, 3, 4, 6, 4, 5]);
    // spread
    console.log([...set]); // [1, 3, 4, 6, 5]
    // Array.from
    console.log(Array.from(set)); // [1, 3, 4, 6, 5]
    ```

- WeakSet

`值必须为对象（数值成员必须为对象），弱引用，不考虑垃圾回收机制，不支持遍历`

- API(WeakSet)

  - 方法
    - add
    - delete
    - has

- Map

`作为构造函数，Map 也可以接受一个数组作为参数。该数组的成员是一个个表示键值对的数组`

::: warning Object VS Map
传统的 JS 中的 Object 提供键值对集合（只能用字符串作为键值）
Map 提供值-值形式
:::

- API(Map)

  - 方法

    - set: f(key, value)
    - get: f(key)
    - size
    - has
    - delete
    - clear

  - 遍历方法
    - keys
    - values
    - entries
    - forEach

- WeakMap

`只接受键名为对象（null除外），不计入垃圾回收机制`

- API(WeakMap)
  - 方法
    - get
    - set
    - delete
    - has

## Generate

`* yeild`

- next 携带参数，表示上一个 yield 的返回值，第一次传参数无效
- for...of 遍历 return 值不在遍历值当中

```js
function* gen() {}
const g = gen();
```

- throw

  - 至少执行一次 `next()`
  - 捕获错误
    - 外部内部都存在 `try...catch`，捕获内部 --> 捕获外部
    - 内部
    - 外部
    - `throw & g.throw` 不同
    - 一旦抛出错误，没有被内部捕获，不会执行，此后再调用 `next()`，返回 `{ value: undefined, done: true }`

- return

  - 终结 generate 函数执行
  - 不提供参数，`return() ==> { value: undefined, done: true }`
  - 提供参数，`return('hello') ==> { value: 'hello', done: true }`
  - try...catch...finally 先执行 finally 再执行 return

- yield

`调用另一个generate函数，放在函数内部（手动遍历）返回遍历器对象（for...of）`

- 遇到 return 返回的结果给一个赋值变量

- this

  - g 返回的是一个遍历器对象，不是 this 对象
  - 不能与 new 命令使用，报错
  - 变通

  ```js
  // 1
  function* F() {
    this.a = 1;
    yield (this.b = 2);
    yield (this.c = 3);
  }
  var obj = {};
  var f = F.call(obj);

  f.next(); // Object {value: 2, done: false}
  f.next(); // Object {value: 3, done: false}
  f.next(); // Object {value: undefined, done: true}

  obj.a; // 1
  obj.b; // 2
  obj.c; // 3

  // 2 new
  function* gen() {
    this.a = 1;
    yield (this.b = 2);
    yield (this.c = 3);
  }

  function F() {
    return gen.call(gen.prototype);
  }

  var f = new F();

  f.next(); // Object {value: 2, done: false}
  f.next(); // Object {value: 3, done: false}
  f.next(); // Object {value: undefined, done: true}

  f.a; // 1
  f.b; // 2
  f.c; // 3
  ```

- 异步应用

诞生之前`回调函数 事件监听 发布/订阅 Promise`

- 协程（线程）

  - 1. 协程 A 开始执行
  - 2. 执行到一半，暂停执行，转交到协程 B
  - 3. 一段时间，协程 B 交还执行权
  - 4. 协程 A 恢复执行

- Thunk 函数(传名调用，只接受回调函数作为单参数)

  `（传值调用 🆚 传名调用）`

- CO 模块（自动执行器）

  ::: warning 自动执行器
  自动执行器注意的是，next 携带参数是作为上一个 yield 的返回值
  :::

## Class

- new.target

  `用在构造函数之中，返回new命令作用于的那个构造函数`

- 继承
  - super
    - 1. super 作为函数调用时，作为父类的构造对象
    - 2. super 作为对象时，在普通方法中，指向父类的原型对象；在静态方法中指向父类
      - 无法通过 super 调用父类的静态属性和方法
      - 子类普通方法中 super 调用父类的方法时，方法内部的 this 指向当前的子类实例
      - 用在静态方法中，指向父类，而不是父类的原型对象
      - 子类静态方法中 super 调用父类的方法时，方法内部的 this 指向子类，而不是子类实例
    - ⚠️super 必须显式指定作为函数还是作为对象使用，否则会报错

## ArrayBuffer

- DataView 视图

```js
const buf = new ArrayBuffer(32);
const dataView = new DataView(buf);
dataView.getUint8(0); // 0
```

- TypedArray 视图
  - 小端字节序（litte endian）：将最不重要的字节排在前面
  - 大端字节序（big endian）：将最重要的字节放在前面

`不是一个构造函数，一组构造函数组成`

```js
const buffer = new ArrayBuffer(12);

const x1 = new Int32Array(buffer);
x1[0] = 1;
const x2 = new Uint8Array(buffer);
x2[0] = 2;

x1[0]; // 2
```

- prototype 方法
  - byteLength
  - slice
  - isView(参数是否为 ArrayBuffer 的视图实例)

## CommonJS ES6

:::tip CommonJS
导入 --> require; 导出 --> exports module.exports
:::

```js
/**
 * commonjs exports 对象形式
 * function(module, exports, require) {}
 * commonjs(module & module.exports) 两个参数都要操作⚠️⚠️⚠️
 *
*/
let module = { exports: {} };
// a.js
let a = 1, b = 2, c = 3;
// 多个exports导出时
exports {a, b, c}; // 这里会导出一个对象 {a, b, c}
// 只允许一个module.exports
module.exports = {a};

// b.js
// 一个文件同时出现 exports 和 modules.exports 时 ⚠️⚠️⚠️
let lib = require('./a.js'); // {a: 1}
lib.cc = 'hello common js'; // exports ==> {a: 1, b: 2, c: 3}
// 改变 module.exports 属性时 a.js中 exports 对象属性不会变动
```

:::tip ES6
导入 --> import; 导出 --> export (export default)
:::

```js
// es6 规范主要对属性变化的是操作 module.exports 一个参数⚠️⚠️⚠️
let module = { exports: {} };
// a.js
let a = 1,
  b = 2,
  c = 3;
export { a, b, c };
export default a;

// b.js
import a from './a.js';
// es6 导出的对象 {a: 1, b: 2, c: 3}
// 存在默认default导出时 对象格式 {a: 1, b: 2, c: 3, default: 1}
```
