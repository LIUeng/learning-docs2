# Typescript 文件结构定义

> 如何定义 typescript 类型文件（记录一些定义文件的细节）

## 模块化

es6/nodejs/umd/amd/SystemJs

## 模块模板

module.d.ts/module-class.d.ts/module-functon.d.ts/module-plugin.d.ts

### module.d.ts

- export = & import xx = require()

```ts
// tsconfig.json => esModuleInterop: true
declare function a(): string;
export default a;
// or
export = a;
```

- 可选的全局语法

```ts
export as namespace API;
```

- 包结构

包的目录以及文件 js 与.d.ts 一一对应

- 测试包
  - DefinitelyTyped/DefinitelyTyped 发布到正式环境
  ```md
  - root 根目录下创建[libname].d.ts
  - 添加 declare module "[libname]" {}
  - 在声明模块中添加模板
  ```

## 全局模板

global.d.ts 文件

- 引入全局依赖

```ts
/// <reference types="someLib">
```

- esModuleInterop: true

```ts
import app = require('express');
```

## DO's & DON'Ts

- 注意基本类型小写（number, string, boolean, sysmbol
- 能不使用 any 别用 any，使用 @ts-ignore 或者 unknown 类型
- 函数返回不要使用 any，使用 void 代替
- 函数返回 void 不要使用可选参数
- 函数能一个定义完，不使用负载 overloads
- 负载定义注意声明的顺序，防止出现多种情况
- 能一次性使用可选参数，不适用负载
- 使用联合类型

## DEEP DIVE

### 高级组合

- interface & class

```ts
class A {
  x: nubmer;
}
interface A {
  y: number;
}
let a: A = { x: 1, y: 2 };
// OK
console.log(a.x + a.y);
```

:::warning type
type 无法与 class 一起使用
:::

- class & namespace

```ts
class C {}
namespace C {
  export lex x: number;
  export interface D {};
}
// OK
let y = C.x;
// OK
let y: C.D;
```

- namespace 可以嵌套 namespace
- type & namespace

type 和 namespace 使用会出现多种不同的合并
