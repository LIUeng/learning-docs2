# VuePress & VitePress

`部分 Markdown 文件编写格式`

[Vitepress 编辑](https://vitepress.vuejs.org/guide/markdown)

## 标题类

```
一级标题
# 一级标题名称

二级标题
## 二级标题名称

三级标题
### 三级标题名称

...
```

## 标签类

```md
- Hello Vuepress
```

## 输出类

**默认格式**

````
```
hello default
```
````

**html 格式**

````
```html
<html>
<head></head>
<body>
  <div id="app"></div>
</body>
</html>
```
````

**md 格式**

````
```md
hello md
```
````

**js 格式**

````
```js
function hello(){
  console.log('hello world');
}
```
````

**json,bash 格式支持**

用法类似

## 目录类

```
[[toc]]
```

## 链接类

```
[百度一下](https://www.baidu.com)
```

## 风格类

**普通文字**

```
hello world
```

**加粗文字**

```
**hello world**
```

**背景文字**

```
`hello world`
```

## 提示类

**轻提示**

```
::: tip 轻提示
我是轻提示
:::
```

**警告**

```
::: warning 警告
我是警告
:::
```

**危险**

```
::: danger 危险
我是危险
:::
```

## 表格类

```
| 1   | 2   | 3   |
| --- | --- | --- |
| 4   | 5   | 6   |
| 7   | 8   | 9   |
```

## 表情类

**部分**

| emoji        |   emoji name   |       emoji | emoji name    | emoji        |   emoji name   |
| ------------ | :------------: | ----------: | ------------- | ------------ | :------------: |
| :tada:       |    `:tada:`    |     :angry: | `:angry:`     | :apple:      |   `:apple:`    |
| :100:        |    `:100:`     | :anguished: | `:anguished:` | :basketball: | `:basketball:` |
| :+1:         |     `:+1:`     |        :-1: | `:-1:`        | :clock1:     |   `:clock1:`   |
| :facepunch:  | `:facepunch:`  |      :clap: | `:clap:`      | :coffee:     |   `:coffee:`   |
| :flushed:    |  `:flushed:`   |      :zero: | `:zero:`      | :unamused:   |  `:unamused:`  |
| :football:   |  `:football:`  |   :worried: | `:worried:`   | :walking:    |  `:walking:`   |
| :footprints: | `:footprints:` |    :wrench: | `:wrench:`    | :vs:         |     `:vs:`     |
| :four:       |    `:four:`    |         :x: | `:x:`         | :watch:      |   `:watch:`    |
| :zzz:        |    `:zzz:`     |      :wave: | `:wave:`      | :warning:    |  `:warning:`   |
| :sob:        |    `:sob:`     |    :scream: | `:scream:`    | :rose:       |    `:rose:`    |
