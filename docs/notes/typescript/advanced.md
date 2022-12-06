# Typescript 高级

## Advanced Type

- 用户指定类型 user-defined
  - 标识符 is
- in 关键字
- typeof 关键字
- null/undefined types
  - null undefined 是两种不同的类型
  - 可选参数或者属性 --strictNullChecks 参数或者属性可以为 undefined 不能为 null
- 类型断言 type-assertion
  - ?? = a ? '' : '';
  - ! = user!.id!.length = undefined
- 类型别名 type-aliases
  - 树形结构
- interface VS type
  - 接口可以继承 type 可以使用交叉类型实现 &
  - 接口可以重复定义（相当于增加新的属性类型定义）type 不能重复定义会报错
- 索引类型
  - keyof 关键字
- 索引类型 索引签名
  - 对象键指定为 string = string | number, 指定为 number, 只能为 number 类型
- 映射类型 mapped types
  - 封装
  - 类似 for...in 操作符，对一个已定义的类型遍历操作
  - 不能添加新的属性定义，如果需要使用交叉类型 &
- 条件类型 conditional types
  - ?
  - 可以配合映射类型使用
- 推断类型 infer
  - infer 关键字配合 extends 使用

## Utility types

实体类型

- Partial<Type\> 部分属性
- Readonly<Type\> 只读属性
- Record<Keys, Type\> 记录一组 Type 类型存在 keys 的集合当中
- Pick<Type, Keys\> 选择 Type 类型中需要存在的 keys 集合
- Omit<Type, Keys\> 反向选择 Type 类型中存在的 keys 集合
- Exclude<Type, ExcludedUnion\> 排除 Type 类型中存在 ExcludedUnion 组合类型的值
- Extract<Type, Union\> 并集
- NonNullable<Type\> 去除 Type 类型中的 null undefined
- Parameters<Type\> 构造一组元组类型使用在函数参数当中
- ConstructorParameters<Type\> 构造一组元组类型或者数组类型使用在构造函数当中
- ReturnType<Type\> 返回类型
- InstanceType<Type\> 实例类型
- Required<Type\> 与 Partial 相反
- ThisParameterType<Type\> 用于 this 作为函数参数时使用
- OmitThisParameter<Type\> 如果没有 this 的绑定，可以使用此类型用作绑定 this
- ThisType<Type\> --noImplicitThis 如果没有指定规则，必须指定 this 强绑定

## Modules

import/export

> commonjs/requirejs(amd)/umd/system/es2015/esnext

### Import a moudle from side-effects only

> 有些模块使用了其他模块设置了一些全局状态（没有明显的导出 exports）

```ts
import './my-module.js';
```

### Importing Types

> typescript 3.8 可以使用 import type（为了配合 babel isolatedModules 配置）

```ts
// before
import { apiResponseType } from './api';
// now
import type { apiResponseType } from './api';
```

### Optional Module Loading

- 条件加载模块（仅在需要时加载模块）配合 typeof 使用（产生值的类型，模块的类型）

```ts
// node js
declare function require(moduleName: string): any;
if() {}
// require js
declare function require(moduleName: string[], onLoad: (...args: any[]) => void): void;
if() {}
// System js
declare const System: any;
if() {}
```

### Ambient Modules

```ts
// node.d.ts
declare module 'url' {
  export interface Url {
    protocol?: string;
  }
  export function parse({ urlStr: string }): Url;
}
```

引入

```ts
/// <referenct path="node.d.ts" />
import * as Url from 'url';
let myUrl = URL.parse('http://www.typescriptlang.org');
```

### UMD modules

- 通过导入或全局变量访问库
- 全局引用文件内不能包含 import/export 语法

```ts
// math-lib.d.ts
export function isPrime(x: number): boolean;
export as namespace mathLib;
// import
import { isPrime } from './math-lib';
isPrime(2);
mathLib.isPrime(2); // ERROR 全局引用不能和import一起
// 单独使用 OK
mathLib.isPirme(2);
```

## Module Resolution

模块路径解析

### 相对路径 & 非相对路径

- 非相对路径会根据 tsconfig.json 配置中的 baseUrl 来寻找，或者根据定义的 Ambient Modules 来查找

### 常见解析 classic

```ts
// /root/src/folder/A.ts
import { b } from 'moduleB';
```

- /root/src/folder/moduleB.ts
- /root/src/folder/moduleB.d.ts
- /root/src/moduleB.ts
- /root/src/moduleB.d.ts
- /root/moduleB.ts
- /root/moduleB.d.ts
- /moduleB.ts
- /moduleB.d.ts

### Node.js 解析

> 相对路径 /root/src/moduleA.js => var b = require('./moduleB');

- /root/src/moduleB.js 是否存在
- /root/src/moduleB/package.json 中的 main 属性指向哪里
- /root/src/moduelB/index.js 存在

> 非相对路径 /root/src/moduleA.js => var b = require('moduleB');

- /root/src/node_modules/moduleB.js
- /root/src/node_modules/moduleB/package.json (if it specifies a "main" property)
- /root/src/node_modules/moduleB/index.js

- /root/node_modules/moduleB.js
- /root/node_modules/moduleB/package.json (if it specifies a "main" property)
- /root/node_modules/moduleB/index.js

- /node_modules/moduleB.js
- /node_modules/moduleB/package.json (if it specifies a "main" property)
- /node_modules/moduleB/index.js

`出现以上情形，查找到为止`

### Typescript 解析

> 相对路径 /root/src/moduleA.ts => import { b } from "./moduleB"

- /root/src/moduleB.ts
- /root/src/moduleB.tsx
- /root/src/moduleB.d.ts
- /root/src/moduleB/package.json (if it specifies a "types" property)
- /root/src/moduleB/index.ts
- /root/src/moduleB/index.tsx
- /root/src/moduleB/index.d.ts

> 非相对路径 /root/src/moduleA.ts => import { b } from "moduleB"

- /root/src/node_modules/moduleB.ts
- /root/src/node_modules/moduleB.tsx
- /root/src/node_modules/moduleB.d.ts
- /root/src/node_modules/moduleB/package.json (if it specifies a "types" property)
- /root/src/node_modules/@types/moduleB.d.ts
- /root/src/node_modules/moduleB/index.ts
- /root/src/node_modules/moduleB/index.tsx
- /root/src/node_modules/moduleB/index.d.ts

- /root/node_modules/moduleB.ts
- /root/node_modules/moduleB.tsx
- /root/node_modules/moduleB.d.ts
- /root/node_modules/moduleB/package.json (if it specifies a "types" property)
- /root/node_modules/@types/moduleB.d.ts
- /root/node_modules/moduleB/index.ts
- /root/node_modules/moduleB/index.tsx
- /root/node_modules/moduleB/index.d.ts

- /node_modules/moduleB.ts
- /node_modules/moduleB.tsx
- /node_modules/moduleB.d.ts
- /node_modules/moduleB/package.json (if it specifies a "types" property)
- /node_modules/@types/moduleB.d.ts
- /node_modules/moduleB/index.ts
- /node_modules/moduleB/index.tsx
- /node_modules/moduleB/index.d.ts

`出现以上情形，查找到为止`

### baseUrl 配置

```json
{
  "compilerOptions": {
    "baseUrl": ".", // This must be specified if "paths" is.
    "paths": {
      "jquery": ["node_modules/jquery/dist/jquery"] // This mapping is relative to "baseUrl"
    }
  }
}
```

- rootDirs 配置（虚拟目录，保证相对引用正确）

```json
{
  "compilerOptions": {
    "rootDirs": ["src/views", "generated/templates/views"]
  }
}
```

```txt
day1-gulp1
├── README.md
├── gulpfile.js
├── js
│ └── main.js
├── package-lock.json
├── package.json
├── src
│ ├── css
│ │ ├── style.css
│ │ └── style1.css
│ ├── index.html
│ └── ts
│ └── main.ts
└── tsconfig.json
```

```txt
src
└── views
|--└── view1.ts (imports './template1')
|--└── view2.ts

generated
└── templates
|--└── views
|--|--└── template1.ts (imports './view2')
```

### 测试解析路径

```bash
tsc --traceResolution
tsc --noResolve
```

## Namespaces

命令空间

- 文件定义中多个 namesapce 可以合并

```ts
/// <reference path="Validation.ts" />
namespace Validation {
  const lettersRegexp = /^[A-Za-z]+$/;
  export class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string) {
      return lettersRegexp.test(s);
    }
  }
}
```

- 别名

```ts
namespace Shapes {
  export namespace Polygons {
    export class Triangle {}
    export class Square {}
  }
}
import polygons = Shapes.Polygons;
let sq = new polygons.Square();
```

- 可以配合其他包声明文件扩展

```ts
// D3.d.ts
declare namespace D3 {
  export interface Selector {}
}
```

## Namespaces & Modules

> Modules

- 可以包含代码和声明
- 依赖于模块加载器（CommonJs/Requre.js）或者 ES 模块的运行时

- 更好的代码重用性，更强的隔离性以及对捆绑的更好工具支持

> Namespaces

- 多个文件可以使用 namespace 合并
- 可以配合使用 --outFile

- 全局名称空间污染，很难识别组件依赖性

## Triple-Slash Directives

> 三斜杠指令

- 引入声明的文件（--out --outFile --noResolve)

```ts
/// <reference path="..." />
```

- 引入@type/文件

```ts
/// <reference types="..." />
```

- 引入系统声明文件

```ts
/// <reference lib="..." />
```

- 忽略 lib 检查（--noLib --skipDefaultLibCheck)

```ts
/// <reference no-default-lib="true" />
```

- amd 模式

```ts
/// <amd-module name="NamedModule" />
export class C {}
```

编译成 js 文件

```js
define('NamedModule', ['require', 'exports'], function (require, exports) {
  var C = (function () {
    function C() {}
    return C;
  })();
  exports.C = C;
});
```

- amd-dependency 已遗弃
