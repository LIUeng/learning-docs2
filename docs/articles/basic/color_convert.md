# 颜色值变换

## 十六进制转换成 RGB

- hex to rgb

```js
// hex to rgb
// hex 形式是 3位 4位 6位
// hex 多少位补位规则 === chrome css
// 3位 #efd = #eeffdd
// 4位 #efdd = #efd 最后一位表示透明度 alpha = decimal(d / f)
// 6位 正常
function hex2rgb(hex) {
  let color = hex.slice(1);
  let red = parseInt(color.slice(0, 2), 16);
  let green = parseInt(color.slice(2, 4), 16);
  let blue = parseInt(color.slice(4, 6), 16);
  return [red, green, blue];
}
```

- hex rgb alpha === rgb or hex

```js
// 十六进制颜色带透明度的颜色值
function hex2rgba(hex, alpha) {
  let color = hex.slice(1);
  let red = parseInt(color.slice(0, 2), 16);
  let green = parseInt(color.slice(2, 4), 16);
  let blue = parseInt(color.slice(4, 6), 16);
  
  red += Math.round(alpha * (255 - red));
  green += Math.round(alpha * (255 - green));
  blue += Math.round(alpha * (255 - blue));

  // rgb 形式
  // return [red, green, blue];

  // hex 形式
  red = red.toString(16);
  green = green.toString(16);
  blue = blue.toString(16);
  
  return `#${red}${green}${blue}`;
}
```

## RGB 转换成十六进制

- rgb to hex

```js
// rgb to hex
// rgb 形式 rgb(255, 255, 255)
function rgb2hex(red, green, blue) {
  red = red.toString(16);
  green = green.toString(16);
  blue = blue.toString(16);
  return `#${red}${green}${blue}`;
}
```

## HSL 转换成 RGB

> HSL

- h hue 色调 [0 - 360]
- s saturation 饱和度 [0 - 1]
- l lightless 亮度 [0 - 1]

```js
// h 参数为 0 - 360 的比例 h = h / 360 区间为 0 - 1
function hsl2rgb(h, s, l) {
  var r, g, b;

  if (s == 0) {
    r = g = b = l; // achromatic
  } else {
    function hue2rgb(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    }

    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;

    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return [r, g, b];
}
```

## RGB 转换成 HSL

```js
function rgb2hsl(r, g, b) {
  (r /= 255), (g /= 255), (b /= 255);

  var max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  var h,
    s,
    l = (max + min) / 2;

  if (max == min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }

    h /= 6;
  }

  return [h, s, l];
}
```
