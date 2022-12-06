# JS 运算符

> 记录一些特殊的操作运算符

## 控制合并操作符 ??

空值合并操作符（??）是一个逻辑操作符，当左侧的操作数为 null 或者 undefined 时，返回其右侧操作数，否则返回左侧操作数

### 赋值

- 与逻辑或操作符（||）对比
- 逻辑或操作符（||）会在左侧操作数为假值时返回右侧操作数

```js
// ??
var n = null || undefined;
var o = n ?? 'here value';
// output: here value
var o = 0 ?? 'here value';
// output: 0
```

### 短路

与 OR 或 AND 逻辑操作符类似，当左表达式不为 null 或 undefined 时，不会对有表达式进行求值

```js
// ??
function A() { return null || undefined; }
function B() { return false; }
function C() { return ''; }
A() ?? B(); // A B 都会执行
B() ?? C() // B 执行
```

- 不能与 AND 或 OR 操作符共用

> 无法确定优先级（未定义）

```js
// 错误
null || undefined ?? 'here value'; // SyntaxError
true || undefined ?? 'here value'; // SyntaxError
// 正确
(null || undefined) ?? 'here value';
```

## 可选链式操作符 ?.

在引用对象（多层）的属性为 null 或 undefined 时不会引发错误；调用函数不存在时返回 undefined

### 比较

```js
// before
let obj = {};
let foo = obj && obj.foo && obj.foo.bar;
// after
let foo = obj?.foo?.bar;
```

### 函数调用

```js
let obj = {};
obj.func?.();
```

### 表达式

```js
let obj = {};
obj?.['foo' + 'bar'];
```

### 不能用于赋值

```js
let obj = {};
obj?.a = 1; // Uncaught SyntaxError: Invalid left-hand side in assignment
```

### 访问数组元素

```js
let arr = [];
arr?.[1];
```

## 运算符优先级

以下优先级从高到底

`左关联`相同操作符按照从左往右的顺序执行
`右关联`相同操作符按照从右往左的顺序执行

- 括号
- &&(左关联)
- ||(左关联)
- 三元运算符 ?:(右关联)
- ++, --
- +, -(左关联)
- =(右关联)
- 逗号表达式 ,