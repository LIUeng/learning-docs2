# Typescript 基础

## tsconfig.json/jsconfig.json 文件

### 配置参数

```md
# compilerOptions

> 常见配置介绍

- module commonjs/umd/amd/es2015
- target 编译 js 版本 es3/es5/es2015
- lib 指定了 target 版本，如果仍然想用更高版本的 api，可以使用 lib 选项 => ['es6', 'dom']'
- plugins 指定插件，提供插件相应的信息（编辑器）

- typeRoots 指定 ts 定义文件目录
- types 指定哪些包使用 node_modules 目录中的 @types/\* 定义
- baseUrl 配置路径
- paths 可以配置别名映射到目录（路径不报错），paths 相对于 baseUrl 路径目录
- allowSyntheticDefaultImports 允许使用 import React from 'react' 代替 import \* as React from 'react'

- outDir 指定输出目录
- outFile 指定输出文件（如果指定，所有文件会被编译成一个文件）不能编译=> => CommonJS 或者 ES6 模块
- rootDir 缩短文件目录路径 src/core/\* => 配置为 './src/core' => core 目录下面的文件输出到 dist 目录下
- rootDirs [] 虚拟目录（保证文件的相对应用不报错）

- mapRoots 配置站点（映射 source map 文件）
- sourceRoots 配置站点（映射源文件）

# files

文件绝对路经

# include

正则匹配(相对/绝对路径)

- \*
- ?
- \*\*/

# exclude

排除哪些文件不被编译或者类型检查

# extends

扩展配置

# references

default : false => 项目 ts 定义文件引用（极大缩端构建和编辑器的交互时间）

> 项目文件目录依赖关系，如下，test 为 src 目录的测试文件，使用 reference 保证 src 目录下的文件先编译再进行编译测试

your-project
├── tsconfig.base.json
├── src
│ └── index.js
│ └── tsconfig.js (reference: { path: ../test })
└─┬ test
├── tsconfig.json (composite: true)
└── index.spec.js

# typeAcquisition(jsconfig.json 文件)

default: false =? 编辑器自动从 node_modules 中@type/\*获取类型

json
{
"typeAcquisition": {
"enable": false,
"include": [],
"exclude": [],
}
}

# compileOnSave

boolean => IDE 中配置（需支持此配置）

# Schema
```

### CLI

tsc -w(watch) 监听文件编译

- preserveWatchOutput 是否保留命令行 watch 输出（清屏） default: false
- pretty 颜色输出不一样的信息 default: true

```bash
# 编译ts文件（根据自己目录下配置的tsconfig.json文件编译）
tsc
```

```bash
# 根据typescript默认配置编译文件
tsc index.ts
```

```bash
# 根据typescript默认配置编译src目录中所有ts文件
tsc src/*.ts
```

```bash
# 根据指定的tsconfig.json配置的文件编译
tsc --project tsconfig.json
```

## Basic Type

- Boolean
- Number
- String
- Array

```ts
let arr: Array<number> = [1, 2, 4];
let arr: number[] = [1, 2, 4];
```

- Tuple(元组)

```ts
// 指定下标元素类型，且不能越界方位
let x: [string, number] = ['1', 2];
```

- Enum(枚举)

```ts
// 序列化 取值0开始 也可以指定值
enum Color {
  Red,
  Green,
  Yellow
}
```

- Any
  <!-- 任何类型，方法不存在时，类型检查仍然通过 -->
- Void
  空类型

```ts
let a: void = undefined; // ok
let b: void = null; // ok 没开启 --strictNullChecks
```

- Null
- Undefined
- Never
  => never 类型是每种类型的子类型，并且可以分配给每种类型（不可逆）
- Object
  => 对象（引用类型）
- Type assertions(类型断言)
  两种表现形式

```ts
let someValue: any = 'hello world';
// first
let len: number = (<string>someValue).length;
// two
let len: number = (someValue as string).length;
```

- A note about let
  => typescript 建议使用 let 代替 var（如果支持）

## Interfaces

- optional properties(可选属性)
  => ?
- readonly properties(只读属性)
  => readonly

```ts
// ReadonlyArray 数组只读
let a: number[] = [1, 2, 4, 5];
let arr: ReadonlyArray<number> = a;
// 恢复 arr
a = arr as number[];
```

- excess property checks(多余属性检查)

```ts
interface A {
  width?: string;
  [propName: string]: string;
}
```

- function types(函数类型)

```ts
interface B {
  (a: string, b: string): boolean;
}
let b: B;
// 参数名字可以不一致 也可以不指定参数类型
b = function(c, d) {
  return true;
};
```

- indexable types(可索引属性)

```ts
// readonly 可加
interface C {
  readonly [index: number]: string;
}
let c: C = ['1', '12'];
```

- class types(类类型)
  => 类可以 implements 接口（接口实现）
- extends interfaces(接口继承)
  => 接口之间可以相互继承（继承多个逗号隔开）
- hybrid types(混合类型)
  => 一个对象既可以表现为函数形式，又可以表现为对象形式

```ts
interface Counter {
  (start: number): string;
  interval: number;
  reset: void;
}
function getCounter(): Counter {
  let counter = function(start: number) {} as Counter;
  counter.interval = 10;
  counter.reset = function() {};
  return counter;
}
let c = getCounter();
c(10);
c.interval = 2;
c.reset();
```

- interfaces extending classes(接口继承类)
  => 接口可以继承类的属性与方法（不能继承私有属性方法）

## Functions

- writing the function types

```ts
let add: (baseValue: number, increment: number) => number = function(
  x: number,
  y: number
): number {
  return x + y;
};
```

- optional and default parameters(可选默认参数)
- rest parameters(多个参数)
- this
  => 当不使用 this 时可以定义 this:void, 箭头函数中 this 的指向
- overloads(负载)
  => 函数可以重复定义类型，且不覆盖

## Literal Types

字面类型

- const/let
- string

```ts
type Ease = 'ease-in' | 'ease-out' | 'ease-in-out';
```

- Numeric

```ts
type Base = 1 | 2 | 3;
```

- Boolean

## Union and Intersection Types

| 联合类型 交集
& 交叉类型 并集

联合交叉类型

- Union Types 联合类型
  => 指定为 any 编译能通过运行会报错
- 联合类型（交集）

```ts
// 定义一个函数，包含 Brid 和 Fish 的共有属性
declare function hello(): Bird | Fish;
```

- 交叉类型（并集）

## Classes

类

- 继承 extends
- super 关键字
  - 只能用于子类
  - 作为函数调用时，代表父类的构造函数
    - 构造函数调用指定当前实例类（只能用于子类的构造函数中）
  - 作为对象时
    - 普通方法，指向父类的原型对象，this 指向当前类的实例对象
    - 静态方法，指向父类
    - 在子类的静态方法使用 super 调用父类的方法是，指向当前子类，而不是子类的实例对象
- public
- private 私有属性 本身引用 实例化对象和子类都无法访问
- protected 保护属性 本身和子类可以访问 实例化对象无法访问
- readonly
- 构造器
- 静态属性 类名以及子类访问
- 抽象类 不能被实例化 抽象方法(属性)必须在子类中实现
- 构造函数
- 类可以作为接口 interface

```ts
class A {
  x: number;
  y: number;
}
interface B extends A {
  z: number;
}
let a: B = { x: 1, y: 2, z: 3 };
```

## Enum

枚举

- Numeric 键值数字类型依次类推
- String 键值字符串
- 混合类型 string/number/boolean/null/undefined
- Computed 常量定义可以为结算

```ts
// +, -, *, /, %, <<, >>, >>>, &, |, ^
// +, -, ~
enum Enum {
  A = 'wewr'.length,
  B = 1 << 1
}
```

- 联合枚举 const 常量基本类型不能赋值
- 数字类型枚举 key \<-\> value 反转都能获取到值
- 使用 const 定义枚举值 可以直接定义获取到值
- Ambient enums 数字枚举类型 依次累加

## Generics

泛型

- 如果不能推断参数类型，不能直接使用参数类型相应的方法或者属性
- 函数泛型

```ts
function identity<T>(arg: T[]): T[] {
  return arg;
}
```

- 如何创建泛型

```ts
function identity<T>(arg: T): T {
  return arg;
}
// I
let myIdentityT: <T>(arg: T) => T = identity;
let myIdentityU: <U>(arg: U) => U = identity;
// II
let myIdentityII: { <T>(arg: T): T } = identity;
// III interface
interface GenericIdentityFn {
  <T>(arg: T): T;
}
let myIdentityIII: GenericIdentityFn = identity;
// or
interface GenericIdentityFn<T> {
  (arg: T): T;
}
let myIdentityIII: GenericIdentityFn<string> = identity;
```

- class Generic 类泛型

`类泛型只能作用实例化对象 静态属性方法无法引用`

```ts
// 类泛型只能作用实例化对象 静态属性方法无法引用
class GenericClass<T> {
  a: T;
  func(x: T, y: T) {}
}
let gc = new GenericClass<number>();
// or
let gc = new GenericClass<string>();
```

- 泛型约束条件
  - 不能使用推断类型的原型方法（除非指定）

```ts
interface Length {
  length: nubmer;
}
// generic
function generic<T extends Length>(arg: T): T {
  // true
  console.log(arg.length);
  return arg;
}
```

- 使用参数泛型类型的约束条件

```ts
function getKey<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
let x = { a: 1, b: 2 };
// true
get(x, 'a');
// false
get(x, 'x');
```

- 使用类泛型 => 创建实例

```ts
// create
function create<T>(c: { new (): T }): T {
  return new c();
}
```
