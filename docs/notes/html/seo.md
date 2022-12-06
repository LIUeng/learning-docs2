# SEO语义化

:::tip HTML语义
HTML语义化标签你知道多少

开发中正确使用SEO优化
:::

## aside

左侧侧边栏

## article

文章

## hgroup h1 h2

hgroup 是标题组
h1 ~ h6 分别为一级标题 二级标题 ...

## abbr

缩写

```html
<abbr title="World Wide Web">WWW</abbr>
```

## hr

下划线

## p

段落标签

## strong

强调

## blockquote q cite

引用

```html
<blockquote>What Apple?（段落引述内容）</blockquote>
<q>What Apple?（行内引述内容）</q>
<cite>What Apple?（引述作品名）</cite>
```

=>

<blockquote>What Apple?（段落引述内容）</blockquote>
<q>What Apple?（行内引述内容）</q>
<cite>What Apple?（引述作品名）</cite>

## time

时间

```html
<time datetime="2020-03-13">13 May 2020</time>
```

=>

<time datetime="2020-03-13">13 May 2020</time>

## figure figcaption

插画（主题相关）

## dfn

定义

## nav ol ul

序列

## pre samp code

文字代码html

```html
<pre>hello world</pre>

<pre><samp>
hello
world
</samp></pre>

<code>转义标签&lt;span&gt;hello world&lt;/span&gt;</code>
```

=> 

<pre>hello world</pre>
<pre><samp>
hello
world
</samp></pre>
<code>转义标签&lt;span&gt;hello world&lt;/span&gt;</code>

## 其他

<img src="/docs-page/assets/images/otherseo.jpg" alt="其它HTML语义化标签" />
