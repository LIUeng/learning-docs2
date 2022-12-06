# HtmlWepbackPlugin 源码分析

**注：本文中 HWP 即 html-webpack-plugin 缩写**

`html-webpack-plugin插件实现代码还是挺复杂的，需要与webpack源码配合起来，有兴趣可以查看webpack源码`

---

## 简易的写一个 HWP 插件

```js
/**
 * 关于如何把webpack的输出文件注入到模板文件当中
 * 自己注入标签，无任何副作用，自由实现
 */
class HWP {
  apply(compiler) {
    compiler.hooks.emit.tapAsync((compilation, callback) => {
      let html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <div id="app"></div>
            <!-- script here -->
        </body>
        </html>
      `;

      compilation.assets['index.html'] = {
        source() {
          return html;
        },
        size() {
          return html.length;
        }
      };

      callback();
    });
  }
}
```

### 简易实现问题

> 利用了主 compiler，每次编译时都触发主 compiler emit 钩子，代价有点大

HWP 优化处理 => 🍵 加入缓存处理，模板内容不改变，不再继续又生成一遍 index.html

> 未能实时监听模板文件的改变

HWP 优化处理 => 🍵 引入 compiler 钩子中的 thiscompilation，把模板文件加入进去

> 如何使用额外的 compiler 创建的子 compiler 进行优化

HWP 优化处理 => 🍵 引入 compilatoin 对象的 createChildCompiler 方法，这个在 thiscompilation 钩子中实现

---

## HWP 源码实现

### Webpack 配置

`html-webpack-plugin使用在webpack配置中`

```js
module.exports = {
  // ...,
  plugins: [
    // html-webpack-plugin 常用配置
    new HtmlWebpackPlugin({
      /* 输出文件名 */
      filename: 'index.html',
      /* 模板地址 */
      template: /* 绝对路径地址 */,
      /* script 标签插入位置 */
      inject: true, /* 'body' | 'head' */
      /* 文档标题 document.title */
      title:  /* <title><%= htmlWebpackPlugin.options.title %></title> */,
      /* link rel="icon" */
      favicon: /* 绝对路径icon地址 */,
    })
  ],
  // ...,
}
```

### 写一个 Webpack 插件

[webpack 写插件](https://webpack.js.org/contribute/writing-a-plugin/)

```js
class HtmlWebpackPlugin {
  apply(compiler) {
    // handle here
  }
}
```

### 使用到的 webpack compiler

`HWP 使用到的compiler hooks以及它使用在插件中的作用`

#### compiler.hooks.thisCompilation

`thisCompilation hook 做了以下操作`

- 😡thisCompilation.tap('HWP', compilation)这里把模板文件 index.html 加入到编译当中，并且实时监听编译模板

- 😡 创建 childCompiler

- 😡 注意：thisCompilation hook 写了 loader 处理 index.html 文件

- 😡 加入入口文件：/xxx/inde.html!(loader 地址)，这种形式可以通过自定义的 loader 处理 index.html，返回 index.html webpack 编译后的内容

  - compilation.hooks.additionalChunkAssets.tap()

    - 😡 把 childCompiler 中的文件加入到主 compiler 中去

#### compiler.hooks.make

`make hook 做了以下操作`

- 😡make.tapAsync(compilation, callback)在 compilation 完成之前执行

- 😡 开始编译，在编译中作缓存变量处理，同时返回编译模板返回的资源内容

#### compiler.hooks.emit

`emit hook 做了以下操作`

- 😡emit.tapAsync(compilation, callback)这里处理输出文件到 webpack 配置的 output 文件夹

- 😡 引入 tapable 事件流机制，加入 hooks 到 compilation 对象中，为了 html-webpack-plugin 的灵活性，引入其他第三方插件

```js
const AsyncSeriesWaterfallHook = require('tapable').AsyncSeriesWaterfallHook;

function createHtmlWebpackPluginHooks() {
  return {
    // script｜link｜X 标签 资源文件 产生之前
    beforeAssetTagGeneration: new AsyncSeriesWaterfallHook(['pluginArgs']),
    // 改变 标签｜资源文件｜favicon
    alterAssetTags: new AsyncSeriesWaterfallHook(['pluginArgs']),
    // 改变生成标签组
    alterAssetTagGroups: new AsyncSeriesWaterfallHook(['pluginArgs']),
    // 在模板处理之后
    afterTemplateExecution: new AsyncSeriesWaterfallHook(['pluginArgs']),
    // 模板文件生成之前
    beforeEmit: new AsyncSeriesWaterfallHook(['pluginArgs']),
    // 模板文件生成之后
    afterEmit: new AsyncSeriesWaterfallHook(['pluginArgs'])
  };
}
```

### HWP 创建一个子解析器 childCompiler

> `HWP 没有直接使用webpack插件提供的主compiler，而是利用compilation object创建了一个childCompiler`

#### CreateChildCompiler

> `webpack允许创建一个webpack compiler子实例，并且支持运行，可以有不同的配置，与主compiler类似相同的api`

- webpack compilation object

  👀createChildCompiler(name, ouputOptions, plugins)

## 动手实现一个 HWP 插件

🦐🦐🦐 解释性代码如下 源码可以点击下方链接

[html-webpck-plugin 源码移步这里](https://github.com/jantimon/html-webpack-plugin)

### 创建 childCompiler

```js
/**
 * if 假设（这里为了配置部分代码展示）
 * template绝对地址为：template = /A/B/C/public/index.html
 * loader绝对地址为：loader = /A/B/HWP/utils/loader.js
 */
class HWP {
  apply(compiler) {
    // 模板 + loader
    const fullTemplate = '/A/B/C/public/index.html!/A/B/HWP/utils/loader.js';

    let childCompiler;
    let compileTmplatePromise = compiler.hooks.thisCompilation.tapAsync(
      (compilation, callback) => {
        // 把模板文件加入到compiler编译文件队列中
        // 加入模板文件入口
        new require('webpack/lib/SingleEntryPlugin')(
          compilation.compiler.context,
          fullTemplate,
          'name'
        ).apply(childCompiler);

        childCompiler = compilation.createChildCompiler('compilerName', {
          filename: 'xxx-[name]',
          publicPath: compilation.outputOptions.publicPath
        });

        // 开始编译添加的入口文件
        /**
         * @param {Error} err first 错误
         * @param {Object} entries 编译入口文件结果资源
         * @param {Object} childCompilaton compilation 对象
         */
        childCompiler.runAsChild((err, entries, childCompilaton) => {
          // 入口编译之后文件 index.html + loader 处理之后
          // 得到entries编译结果
          // 处理entries
          // handleEntries = () > {}
          const compiledTemplate = handleEntries(entries);
          // 代码不能运行 请移步HWP源码
          return Promise(compiledTemplate.content);
        });
      }
    );
  }
}
```

### index.html 解析器 loader

[webpack 如何写一个 loader](https://webpack.js.org/contribute/writing-a-loader/)

```js
// loader 是一个函数
// webpack.config.js
// 示例1 这是一种配置
module.exports = {
  resolve: {
    rule: [
      {
        test: /\.html$/,
        loader: require('../../loader.js');
      }
    ]
  }
};
// 示例2 loader
// 这种方法webpack会解析入口文件中的loader并解析
// 引入最好使用绝对地址
module.exports = {
  entry: ['index.html!loader.js'],
};

// 开始写一个loader
module.exports = function(source) {
  // source 即配置匹配的文件返回的utf-8字符串
  // source 自由处理规则
  return source;
}
```

### 开始注入 js css favicon 文件

```js
// emit hooks compilation
compilation.hooks.emit.tapAsync((compilation, callback) => {
  // compileTmplatePromise
  // 插件如何处理favicon js css自由处理
  // 可以自行参考源码
  compileTmplatePromise.then(html => {
    // 自由匹配规则插入到index.html模板中
  });
});
```

### title 如何注入到 index.html 中

模板文件

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
```

#### NodeJS VM 模块

[关于 nodejs vm 模块](https://nodejs.org/dist/latest-v12.x/docs/api/vm.html)

```js
const vm = require('vm');
// html-webpack-plugin 利用nodejs vm模块
// vm 提供一个执行js环境
// index.html + loader 编译 代码示例如下
// 这里loader参照html-webpack-plugin/lib/loader.js
function ex() {
  return eval(
    'module.exports = function (templateParams) { with(templateParams) {return (function(data) {\nvar __t, __p = \'\';\n__p += \'<!DOCTYPE html>\\n<html lang="en">\\n<head>\\n    <meta charset="UTF-8">\\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\\n    <title>\' +\n((__t = ( htmlWebpackPlugin.options.title )) == null ? \'\' : __t) +\n\'</title>\\n</head>\\n<body>\\n    <div id="app"></div>\\n</body>\\n</html>\';\nreturn __p\n})();}}\n\n//# sourceURL=webpack:///./public/index.html?./plugins/html-webpack-plugin/utils/loader.js'
  );
}

const source = ex();
const template = '/A/B/C/public/index.html';

// vm
const vmContext = vm.createContext({ HTML_WEBPACK_PLUGIN: true });
const vmScript = vm.Script(source, { filename: template });

// 这里得到一个函数
const newSource = vmScript.runInContext(vmScript);

// newSource 执行 eval 代码
let html = newSource({
  templateParams: {
    htmlWebpackPlugin: {
      options: {
        title: 'HELLO WORLD'
      }
    }
  }
});

// 得到结果
/*
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HELLO WORLD</title>
</head>
<body>
    <div id="app"></div>
</body>
</html> 
 */
```

---

关于许多细节点没有处理，可以自行参考 html-webpack-plugin 源码

- 能跑一次绝不多跑（编译结果）
- html-webpack-plugin 缓存优化

---
