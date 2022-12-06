# ESLint

> eslint优化完善项目代码

## 配置

- 注释
/* */
- 配置文件
./eslintrc.* 或者在package.json中配置eslintConfig
- 其他
environment/globals/rules

## 指定解析选项

- ecmaVersion: 2 | 3 | 4 | 5 | 6 => (3, 5 默认值) => Number[] | String
- sourceType: 'script'(默认值) | 'module'
- ecmaFeatures: 'globalReturn'(允许全局使用return语句) | 'impliedStrict'(严格模式) | 'jsx' => Boolean

## 指定解析

- parser: 'esprima'(默认值) | 'babel-eslint' | '@typescript-eslint/parser' | '自定义解析'

## 指定预处理器 processor

覆盖指定文件配置 overrides

```json
{
    "plugins": ["a-plugin"],
    "processor": "a-plugin/a-processor"
}
// overrides
{
    "plugins": ["a-plugin"],
    "overrides": [
        {
            "files": ["*.md"],
            "processor": "a-plugin/markdown"
        }
    ]
}
```

## 指定解析环境 env

可配置值

> browser, node, commonjs, amd, es6, es2017, es2020, jquery, worker, jest, shelljs ···

## 指定全局环境 globals

定义全局变量指定变量选项

```json
{
    "globals": {
        "var1": "writable",
        "var2": "readonly",
    }
}
```

## 配置插件 plugins

可以简写，也可以全称配置

```json
{
    "plugins": [
        "jquery", // eslint-plugin-jquery
        "@jquery/jquery", // @jquery/eslint-plugin-jquery
        "@abc", // @abc/eslint-plugin
    ]
}
// 使用插件配置规则配置如下
{
    "rules": {
        // 插件名 + 对应的规则
        "jquery/a-rule": true,
    }
}
```

## 配置规则 rules

- 'off' or 0
- 'warn' or 1
- 'error' or 2

### 使用注释规则

```js
/* eslint eqeqeq: "off", curly: "error" */
```

### 配置举例

```json
{
    "eqeqeq": "off",
    "quotes": ["error", "double"],
}
```

### 行内注释

```js
// 整个文件
/* eslint-disable */

// 忽略规则
/* eslint-disable no-console */

// 单行 // /*  + 指定规则 */
console.log(1); // eslint-disable-inline + 指定规则

// 下一行
// eslint-disable-next-line + 指定规则
/* eslint-disable-next-line + 指定规则 */
console.log(2);

// 插件规则 eslint-disable
foo(); // eslint-disable pluginA/a-rule
```

### 使用 overrides 对指定文件进行规则覆盖

```json
{
    "rules": {}, // ...
    "overrides": {
        "files": [],
        "rules: {},
    }
}
```

## 禁止使用 eslint-disable

- noInlineConfig: Boolean
- reportUnusedDisableDirectives: Boolean

## 共享配置 settings

```json
{
    "settings": {
        "sharedData": "Hello"
    }
}
```

## 配置项目文件结构

级联 | 层次结构

your-project
├── package.json
├── lib
│ └── source.js
└─┬ tests
  ├── .eslintrc => {root: true}
  └── test.js

## 扩展 extends

- eslint:recommended | eslint:all
1. 报告核心常见问题的规则子集（推荐规则只能eslint主要版本上更改）
2. 一些新的规则集，或者覆盖建议的规则
3. 插件扩展 plugin:react/recommended

## 配置忽略文件

1. ignorePatterns => ['temp.js', '**/src/*.js']

2. .eslintignore 正则匹配

> 在 vscode 中忽略文件不生效（代码）=> eslint ** => cli时是会忽略配置的文件

## CLI

```bash
eslint [options] file.js [file.js] [dir]

Basic configuration:
  --no-eslintrc                  Disable use of configuration from .eslintrc.*
  -c, --config path::String      Use this configuration, overriding .eslintrc.* config options if present
  --env [String]                 Specify environments
  --ext [String]                 Specify JavaScript file extensions - default: .js
  --global [String]              Define global variables
  --parser String                Specify the parser to be used
  --parser-options Object        Specify parser options
  --resolve-plugins-relative-to path::String  A folder where plugins should be resolved from, CWD by default

Specifying rules and plugins:
  --rulesdir [path::String]      Use additional rules from this directory
  --plugin [String]              Specify plugins
  --rule Object                  Specify rules

Fixing problems:
  --fix                          Automatically fix problems
  --fix-dry-run                  Automatically fix problems without saving the changes to the file system
  --fix-type Array               Specify the types of fixes to apply (problem, suggestion, layout)

Ignoring files:
  --ignore-path path::String     Specify path of ignore file
  --no-ignore                    Disable use of ignore files and patterns
  --ignore-pattern [String]      Pattern of files to ignore (in addition to those in .eslintignore)

Using stdin:
  --stdin                        Lint code provided on &lt;STDIN&gt; - default: false
  --stdin-filename String        Specify filename to process STDIN as

Handling warnings:
  --quiet                        Report errors only - default: false
  --max-warnings Int             Number of warnings to trigger nonzero exit code - default: -1

Output:
  -o, --output-file path::String  Specify file to write report to
  -f, --format String            Use a specific output format - default: stylish
  --color, --no-color            Force enabling/disabling of color

Inline configuration comments:
  --no-inline-config             Prevent comments from changing config or rules
  --report-unused-disable-directives  Adds reported errors for unused eslint-disable directives

Caching:
  --cache                        Only check changed files - default: false
  --cache-file path::String      Path to the cache file. Deprecated: use --cache-location - default: .eslintcache
  --cache-location path::String  Path to the cache file or directory

Miscellaneous:
  --init                         Run config initialization wizard - default: false
  --env-info                     Output execution environment information - default: false
  --no-error-on-unmatched-pattern  Prevent errors when pattern is unmatched - default: false
  --debug                        Output debugging information
  -h, --help                     Show help
  -v, --version                  Output the version number
  --print-config path::String    Print the configuration for the given file
```