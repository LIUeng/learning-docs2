# 伪元素 伪类

## 伪元素

伪元素是一个附加至选择器末的关键词，允许对被选择元素的特定部分修改样式

:::warning 注意
一个选择器中只能使用一个伪元素，伪元素必须跟在普通选择器和基础选择器之后；使用双冒号（::）以便区分伪元素（::）伪类（:）
:::

### 列举

- ::after
- ::before
- ::backdrop
- ::first-line
- ::first-letter
- ::cue
- ::grammar-error
- ::marker
- ::placeholder --- input::placeholder
- ::selection
- ::slotted()
- ::spelling-error

## 伪类

伪类是添加到选择器的关键词，指定要选择的元素的特殊状态

### 列举

| 伪类            | 伪类                |
| --------------- | ------------------- |
| :active         | :last-child         |
| :any-link       | :last-of-type       |
| :blank          | :left               |
| :checked        | :link               |
| :current        | :local-link         |
| :default        | :not()              |
| :defined        | :nth-child()        |
| :dir()          | :nth-col()          |
| :disabled       | :nth-last-child()   |
| :drop           | :nth-last-col()     |
| :empty          | :nth-last-of-type() |
| :enabled        | :nth-of-type()      |
| :first          | :only-child         |
| :first-child    | :only-of-type       |
| :first-of-type  | :optional           |
| :fullscreen     | :out-of-range       |
| :future         | :past               |
| :focus          | :placeholder-shown  |
| :focus-visible  | :read-only          |
| :focus-within   | :read-write         |
| :has()          | :required           |
| :host           | :right              |
| :host()         | :root               |
| :host-context() | :scope              |
| :hover          | :target             |
| :indeterminate  | :target-within      |
| :in-range       | :user-invalid       |
| :invalid        | :valid              |
| :is()           | :visited            |
| :lang()         | :where()            |
