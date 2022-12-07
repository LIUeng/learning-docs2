# JS 相等性

:::warning 相等性
JavaScript中的相等性检查（有的转换会感觉很奇怪，目前记住规则）
:::

以下截图来源
[Github @dorey](https://github.com/dorey/JavaScript-Equality-Table)

## 相等 ==

`发生强制转换类型`

<img src="/assets/images/==.png" alt="相等" />

## 严格相等 ===

<img src="/assets/images/===.png" alt="严格相等" />

## 判断 if()

<img src="/assets/images/if().png" alt="if()" />

## 比较 > = <

`两边都会发生转换`

```js
var a = {b: 1};
var b = {c: 2};
a == b // false
a <= b // true
a >= b // true
```

THE END