# 可替换元素

replaced element / none-replaced element

## 定义

- 在 CSS 中，替换元素是表示形式超出 CSS 范围的元素，他们是外部对象，独立于 CSS 格式模型
- CSS 可影响可替换元素的位置，不会影响到可替换元素自身的内容
- 某些替换元素具有固有尺寸或定义的基线，只有可替换的元素才能具有固有尺寸

## 替换元素

- iframe
- video
- embed
- img

某些特殊情况下，以下元素也可以是替换元素

- opiton
- audio
- canvas
- object
- applet
- input type=image

## content 属性

> content 属性应用在元素的 ::before 和 ::after 伪元素中插入内容

### 取值

- normal 默认值
- none 不产生伪类元素
- string 文本内容
- url
- counter/counters 计数/嵌套计数
- attr 显示元素属性内容
- open-quote close-quote 增加去除引号
- no-open-quote no-close-quote 不产生任何内容（会改变引号层级）

### counter/counters

> 嵌套计数器，返回表示指定计数器当前值的拼接字符串

- 两种形式
  - counters(name, string)
  - counters(name, string, style)
- 通常与伪元素搭配使用 content 属性，理论上支持属性值为 string 的任何地方
- 生成的文本是具有给定名称的所有计数器的值，从最外层到最内层，之间由指定字符串分隔
- style 默认为十进制（upper-roman, lower-roman, decimal-leading-zero, lower-alpha)

## list-style 属性

> symbols 函数
