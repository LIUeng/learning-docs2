import{_ as s}from"./chunks/001.84b795d6.js";import{_ as a,c as n,o as e,a as p}from"./app.4843d9ce.js";const l="/learning-docs2/assets/images/002.png",c="/learning-docs2/assets/images/003.png",m=JSON.parse('{"title":"Event Loop","description":"","frontmatter":{},"headers":[{"level":2,"title":"CPU","slug":"cpu","link":"#cpu","children":[]},{"level":2,"title":"\u8FDB\u7A0B","slug":"\u8FDB\u7A0B","link":"#\u8FDB\u7A0B","children":[]},{"level":2,"title":"\u7EBF\u7A0B","slug":"\u7EBF\u7A0B","link":"#\u7EBF\u7A0B","children":[]},{"level":2,"title":"CPU\u3001\u8FDB\u7A0B\u3001\u7EBF\u7A0B\u4E4B\u95F4\u7684\u5173\u7CFB","slug":"cpu\u3001\u8FDB\u7A0B\u3001\u7EBF\u7A0B\u4E4B\u95F4\u7684\u5173\u7CFB","link":"#cpu\u3001\u8FDB\u7A0B\u3001\u7EBF\u7A0B\u4E4B\u95F4\u7684\u5173\u7CFB","children":[]},{"level":2,"title":"\u6D4F\u89C8\u5668\u662F\u591A\u8FDB\u7A0B\u7684","slug":"\u6D4F\u89C8\u5668\u662F\u591A\u8FDB\u7A0B\u7684","link":"#\u6D4F\u89C8\u5668\u662F\u591A\u8FDB\u7A0B\u7684","children":[]},{"level":2,"title":"\u6D4F\u89C8\u5668\u5305\u542B\u4E86\u54EA\u4E9B\u8FDB\u7A0B","slug":"\u6D4F\u89C8\u5668\u5305\u542B\u4E86\u54EA\u4E9B\u8FDB\u7A0B","link":"#\u6D4F\u89C8\u5668\u5305\u542B\u4E86\u54EA\u4E9B\u8FDB\u7A0B","children":[]},{"level":2,"title":"\u6D4F\u89C8\u5668\u5185\u6838\uFF08\u6E32\u67D3\u8FDB\u7A0B\uFF09","slug":"\u6D4F\u89C8\u5668\u5185\u6838-\u6E32\u67D3\u8FDB\u7A0B","link":"#\u6D4F\u89C8\u5668\u5185\u6838-\u6E32\u67D3\u8FDB\u7A0B","children":[]},{"level":2,"title":"JavaScript\u5355\u7EBF\u7A0B\uFF1F","slug":"javascript\u5355\u7EBF\u7A0B","link":"#javascript\u5355\u7EBF\u7A0B","children":[]},{"level":2,"title":"GUI\u6E32\u67D3\u7EBF\u7A0B\u4E0EJS\u5F15\u64CE\u7EBF\u7A0B\u4E92\u65A5\uFF1F","slug":"gui\u6E32\u67D3\u7EBF\u7A0B\u4E0Ejs\u5F15\u64CE\u7EBF\u7A0B\u4E92\u65A5","link":"#gui\u6E32\u67D3\u7EBF\u7A0B\u4E0Ejs\u5F15\u64CE\u7EBF\u7A0B\u4E92\u65A5","children":[]},{"level":2,"title":"Event Loop GO","slug":"event-loop-go","link":"#event-loop-go","children":[]}],"relativePath":"notes/javascript/event-loop.md"}'),o={name:"notes/javascript/event-loop.md"},i=p(`<h1 id="event-loop" tabindex="-1">Event Loop <a class="header-anchor" href="#event-loop" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">GO</p><p>\u{1F525}\u4E8B\u4EF6\u961F\u5217 \u5F02\u6B65 \u8FDB\u7A0B \u7EBF\u7A0B</p></div><h2 id="cpu" tabindex="-1">CPU <a class="header-anchor" href="#cpu" aria-hidden="true">#</a></h2><p><code>\uFF08\u4E2D\u592E\u5904\u7406\u5668central processing unit\uFF09\u4E00\u5EA7\u5DE5\u5382</code></p><h2 id="\u8FDB\u7A0B" tabindex="-1">\u8FDB\u7A0B <a class="header-anchor" href="#\u8FDB\u7A0B" aria-hidden="true">#</a></h2><p><code>\u4E00\u5EA7\u5DE5\u5382\u7684A\uFF0CB\uFF0CC...\u8F66\u95F4 A\u4E3A\u4E3B A\u8F66\u95F4\u8FD0\u884C\uFF0C\u5176\u4ED6\u8F66\u95F4\u505C\u6B62\u8FD0\u884C</code></p><h2 id="\u7EBF\u7A0B" tabindex="-1">\u7EBF\u7A0B <a class="header-anchor" href="#\u7EBF\u7A0B" aria-hidden="true">#</a></h2><p><code>\u4E00\u5EA7\u5DE5\u5382\u91CC\u9762\u7684\u5DE5\u4EBA\uFF0C\u5171\u540C\u8F85\u52A9\u534F\u8C03\u5B8C\u6210\u540C\u4E00\u9879\u5DE5\u4F5C</code></p><h2 id="cpu\u3001\u8FDB\u7A0B\u3001\u7EBF\u7A0B\u4E4B\u95F4\u7684\u5173\u7CFB" tabindex="-1">CPU\u3001\u8FDB\u7A0B\u3001\u7EBF\u7A0B\u4E4B\u95F4\u7684\u5173\u7CFB <a class="header-anchor" href="#cpu\u3001\u8FDB\u7A0B\u3001\u7EBF\u7A0B\u4E4B\u95F4\u7684\u5173\u7CFB" aria-hidden="true">#</a></h2><p>\u{1F436} <code>\u8FDB\u7A0B</code>\u662Fcpu\u8D44\u6E90\u5206\u914D\u7684\u6700\u5C0F\u5355\u5143\uFF08\u662F\u80FD\u62E5\u6709\u8D44\u6E90\u548C\u72EC\u7ACB\u8FD0\u884C\u7684\u6700\u5C0F\u5355\u4F4D\uFF09</p><p>\u{1F436} <code>\u7EBF\u7A0B</code>\u662Fcpu\u8C03\u5EA6\u7684\u6700\u5C0F\u5355\u4F4D\uFF08\u7EBF\u7A0B\u662F\u5EFA\u7ACB\u5728\u8FDB\u7A0B\u7684\u57FA\u7840\u4E0A\u7684\u4E00\u6B21\u7A0B\u5E8F\u8FD0\u884C\u5355\u4F4D\uFF0C\u4E00\u4E2A\u8FDB\u7A0B\u4E2D\u53EF\u4EE5\u6709\u591A\u4E2A\u7EBF\u7A0B\uFF09</p><p>\u{1F436} \u4E0D\u540C<code>\u8FDB\u7A0B</code>\u4E4B\u95F4\u4E5F\u53EF\u4EE5\u901A\u4FE1\uFF0C\u4EE3\u4EF7\u8F83\u5927</p><p>\u{1F436} <code>\u5355\u7EBF\u7A0B</code>\u4E0E<code>\u591A\u7EBF\u7A0B</code>\uFF0C\u90FD\u662F\u6307\u5728\u4E00\u4E2A<code>\u8FDB\u7A0B</code>\u5185\u7684\u5355\u548C\u591A</p><h2 id="\u6D4F\u89C8\u5668\u662F\u591A\u8FDB\u7A0B\u7684" tabindex="-1">\u6D4F\u89C8\u5668\u662F\u591A\u8FDB\u7A0B\u7684 <a class="header-anchor" href="#\u6D4F\u89C8\u5668\u662F\u591A\u8FDB\u7A0B\u7684" aria-hidden="true">#</a></h2><p>\u{1F004}\uFE0F \u6D4F\u89C8\u5668\u662F\u591A\u8FDB\u7A0B\u7684</p><p>\u{1F004}\uFE0F \u6BCF\u4E00\u4E2Atab\u9875\uFF0C\u5C31\u662F\u4E00\u4E2A\u72EC\u7ACB\u7684\u8FDB\u7A0B</p><h2 id="\u6D4F\u89C8\u5668\u5305\u542B\u4E86\u54EA\u4E9B\u8FDB\u7A0B" tabindex="-1">\u6D4F\u89C8\u5668\u5305\u542B\u4E86\u54EA\u4E9B\u8FDB\u7A0B <a class="header-anchor" href="#\u6D4F\u89C8\u5668\u5305\u542B\u4E86\u54EA\u4E9B\u8FDB\u7A0B" aria-hidden="true">#</a></h2><p>\u{1F004}\uFE0F \u4E3B\u8FDB\u7A0B</p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">  \u{1F44E} \u534F\u8C03\u63A7\u5236\u5176\u4ED6\u5B50\u8FDB\u7A0B\uFF08\u521B\u5EFA\u3001\u9500\u6BC1\uFF09</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  \u{1F44E} \u6D4F\u89C8\u5668\u754C\u9762\u663E\u793A\uFF0C\u7528\u6237\u4EA4\u4E92\uFF0C\u524D\u8FDB\u3001\u540E\u9000\u3001\u6536\u85CF</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  \u{1F44E} \u5C06\u6E32\u67D3\u8FDB\u7A0B\u5F97\u5230\u7684\u5185\u5B58\u4E2D\u7684bitmap\uFF0C\u7ED8\u5236\u5230\u7528\u6237\u754C\u9762\u4E0A</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  \u{1F44E} \u5904\u7406\u4E0D\u53EF\u89C1\u64CD\u4F5C\uFF0C\u7F51\u7EDC\u64CD\u4F5C\uFF0C\u6587\u4EF6\u8BBF\u95EE</span></span>
<span class="line"></span></code></pre></div><p>\u{1F004}\uFE0F \u7B2C\u4E09\u65B9\u63D2\u4EF6\u8FDB\u7A0B</p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">\u{1F44E} \u6BCF\u4E2A\u63D2\u4EF6\u4E00\u4E2A\u8FDB\u7A0B\uFF0C\u4F7F\u7528\u7684\u65F6\u5019\uFF0C\u8FDB\u7A0B\u88AB\u521B\u5EFA</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"></span></code></pre></div><p>\u{1F004}\uFE0F GPU\u8FDB\u7A0B</p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">  \u{1F44E} \u7528\u4E8E3D\u7ED8\u5236\u7B49</span></span>
<span class="line"></span></code></pre></div><p>\u{1F004}\uFE0F \u6E32\u67D3\u8FDB\u7A0B\uFF08\u6D4F\u89C8\u5668\u5185\u6838\uFF09</p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">  \u{1F44E} \u8D1F\u8D23\u9875\u9762\u6E32\u67D3\uFF0C\u811A\u672C\u6267\u884C\uFF0C\u4E8B\u4EF6\u5904\u7406\u7B49</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  \u{1F44E} \u6BCF\u4E2Atab\u9875\u4E00\u4E2A\u6E32\u67D3\u8FDB\u7A0B</span></span>
<span class="line"></span></code></pre></div><h2 id="\u6D4F\u89C8\u5668\u5185\u6838-\u6E32\u67D3\u8FDB\u7A0B" tabindex="-1">\u6D4F\u89C8\u5668\u5185\u6838\uFF08\u6E32\u67D3\u8FDB\u7A0B\uFF09 <a class="header-anchor" href="#\u6D4F\u89C8\u5668\u5185\u6838-\u6E32\u67D3\u8FDB\u7A0B" aria-hidden="true">#</a></h2><p>\u2705 GUI\u6E32\u67D3\u8FDB\u7A0B</p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">  \u{1F44E} \u8D1F\u8D23\u6E32\u67D3\u9875\u9762\uFF0C\u5E03\u5C40\u548C\u7ED8\u5236</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  \u{1F44E} \u9875\u9762\u9700\u8981\u91CD\u7ED8\u548C\u56DE\u6D41\u65F6\uFF0C\u8BE5\u7EBF\u7A0B\u5C31\u4F1A\u6267\u884C</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  \u{1F44E} \u4E0Ejs\u5F15\u64CE\u4E92\u65A5\uFF0C\u9632\u6B62\u6E32\u67D3\u7ED3\u679C\u4E0D\u53EF\u9884\u671F</span></span>
<span class="line"></span></code></pre></div><p>\u2705 JS\u5F15\u64CE\u7EBF\u7A0B</p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">  \u{1F44E} \u8D1F\u8D23\u5904\u7406\u89E3\u6790\u548C\u6267\u884CJavaScript\u811A\u672C\u7A0B\u5E8F</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  \u{1F44E} \u53EA\u6709\u4E00\u4E2AJS\u5F15\u64CE\u7EBF\u7A0B\uFF08\u5355\u7EBF\u7A0B\uFF09</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  \u{1F44E} \u4E0EGUI\u6E32\u67D3\u7EBF\u7A0B\u4E92\u65A5\uFF0C\u9632\u6B62\u6E32\u67D3\u7ED3\u679C\u4E0D\u53EF\u9884\u671F</span></span>
<span class="line"></span></code></pre></div><p>\u2705 \u4E8B\u4EF6\u89E6\u53D1\u7EBF\u7A0B</p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">  \u{1F44E} \u7528\u6765\u63A7\u5236\u4E8B\u4EF6\u5FAA\u73AF\uFF08\u9F20\u6807\u70B9\u51FB\uFF0CsetTimeout\uFF0Cajax\uFF09</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  \u{1F44E} \u5F53\u4E8B\u4EF6\u6EE1\u8DB3\u89E6\u53D1\u6761\u4EF6\u65F6\uFF0C\u5C06\u4E8B\u4EF6\u653E\u5165\u5230JS\u5F15\u64CE\u6240\u5728\u7684\u6267\u884C\u961F\u5217\u4E2D</span></span>
<span class="line"></span></code></pre></div><p>\u2705 \u5B9A\u65F6\u89E6\u53D1\u5668\u7EBF\u7A0B</p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">  \u{1F44E} setInterval \u4E0E setTimeout \u6240\u5728\u7684\u7EBF\u7A0B</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  \u{1F44E} \u5B9A\u65F6\u4EFB\u52A1\u5E76\u4E0D\u662F\u7531JS\u5F15\u64CE\u8BA1\u65F6\u7684\uFF0C\u662F\u7531\u5B9A\u65F6\u89E6\u53D1\u7EBF\u7A0B\u6765\u8BA1\u65F6\u7684</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  \u{1F44E} \u8BA1\u65F6\u5B8C\u6BD5\u540E\uFF0C\u901A\u77E5\u4E8B\u4EF6\u89E6\u53D1\u7EBF\u7A0B</span></span>
<span class="line"></span></code></pre></div><p>\u2705 \u5F02\u6B65http\u8BF7\u6C42\u7EBF\u7A0B</p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">  \u{1F44E} \u6D4F\u89C8\u5668\u6709\u4E00\u4E2A\u5355\u72EC\u7684\u7EBF\u7A0B\u7528\u4E8E\u5904\u7406AJAX\u8BF7\u6C42</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  \u{1F44E} \u5F53\u8BF7\u6C42\u5B8C\u6210\u65F6\uFF0C\u82E5\u6709\u56DE\u8C03\u51FD\u6570\uFF0C\u901A\u77E5\u65F6\u95F4\u89E6\u53D1\u7EBF\u7A0B</span></span>
<span class="line"></span></code></pre></div><h2 id="javascript\u5355\u7EBF\u7A0B" tabindex="-1">JavaScript\u5355\u7EBF\u7A0B\uFF1F <a class="header-anchor" href="#javascript\u5355\u7EBF\u7A0B" aria-hidden="true">#</a></h2><p><code>\u591A\u7EBF\u7A0B\u9700\u8981\u52A0\u9501\uFF0C\u540C\u65F6\u64CD\u4F5CDOM\uFF0C\u5728\u591A\u7EBF\u7A0B\u4E0D\u52A0\u9501\u7684\u60C5\u51B5\u4E0B\uFF0C\u6700\u7EC8\u4F1A\u5BFC\u81F4DOM\u6E32\u67D3\u7684\u7ED3\u679C\u4E0D\u53EF\u9884\u671F</code></p><h2 id="gui\u6E32\u67D3\u7EBF\u7A0B\u4E0Ejs\u5F15\u64CE\u7EBF\u7A0B\u4E92\u65A5" tabindex="-1">GUI\u6E32\u67D3\u7EBF\u7A0B\u4E0EJS\u5F15\u64CE\u7EBF\u7A0B\u4E92\u65A5\uFF1F <a class="header-anchor" href="#gui\u6E32\u67D3\u7EBF\u7A0B\u4E0Ejs\u5F15\u64CE\u7EBF\u7A0B\u4E92\u65A5" aria-hidden="true">#</a></h2><p><code>\u5F53JS\u5F15\u64CE\u7EBF\u7A0B\u6267\u884C\u65F6\uFF0CGUI\u6E32\u67D3\u7EBF\u7A0B\u4F1A\u88AB\u6302\u8D77\uFF0CGUI\u66F4\u65B0\u5219\u4F1A\u88AB\u4FDD\u5B58\u5728\u4E00\u4E2A\u961F\u5217\u4E2D\u7B49\u5F85JS\u5F15\u64CE\u7EBF\u7A0B\u7A7A\u95F2\u65F6\u7ACB\u5373\u88AB\u6267\u884C</code></p><h2 id="event-loop-go" tabindex="-1">Event Loop GO <a class="header-anchor" href="#event-loop-go" aria-hidden="true">#</a></h2><p>\u231A\uFE0F\u540C\u6B65\u4EFB\u52A1\u548C\u5F02\u6B65\u4EFB\u52A1</p><p>\u231A\uFE0F\u540C\u6B65\u4EFB\u52A1\u5728js\u5F15\u64CE\u7EBF\u7A0B\u4E0A\u6267\u884C\uFF0C\u5F62\u6210\u4E00\u4E2A\u6267\u884C\u6808</p><p>\u231A\uFE0F\u4E8B\u4EF6\u89E6\u53D1\u7EBF\u7A0B\u7BA1\u7406\u4E00\u4E2A\u4EFB\u52A1\u961F\u5217\uFF0C\u5F02\u6B65\u4EFB\u52A1\u89E6\u53D1\u6761\u4EF6\u8FBE\u6210\uFF0C\u5C06\u56DE\u8C03\u4E8B\u4EF6\u653E\u5230\u4EFB\u52A1\u961F\u5217\u4E2D</p><p>\u231A\uFE0F\u6267\u884C\u6808\u4E2D\u6240\u6709\u540C\u6B65\u4EFB\u52A1\u6267\u884C\u5B8C\u6BD5\uFF0Cjs\u5F15\u64CE\u7EBF\u7A0B\u7A7A\u95F2\uFF0C\u7CFB\u7EDF\u4F1A\u8BFB\u53D6</p><img src="`+s+'"><p>\u{1F44C}\u5B8F\u4EFB\u52A1 --&gt; \u4E8B\u4EF6\u961F\u5217\uFF08\u5FAA\u73AF\uFF09</p><p>\u{1F44C}\u5FAE\u4EFB\u52A1 --&gt; \u5FAE\u4EFB\u52A1\u961F\u5217</p><img src="'+l+'"><p><code>\u5B8F\u4EFB\u52A1\u5B8C\u6210\u7ACB\u5373\u6267\u884C\u5F53\u524D\u4E00\u8F6E\u7684\u5FAE\u4EFB\u52A1</code></p><p>\u{1F62F} \u6267\u884C\u4E00\u4E2A\u5B8F\u4EFB\u52A1\uFF08\u6808\u4E2D\u6CA1\u6709\u4ECE\u4E8B\u4EF6\u961F\u5217\u4E2D\u83B7\u53D6\uFF09</p><p>\u{1F62F} \u6267\u884C\u8FC7\u7A0B\u4E2D\u5982\u679C\u9047\u5230\u5FAE\u4EFB\u52A1\uFF0C\u6DFB\u52A0\u5230\u5FAE\u4EFB\u52A1\u5BF9\u5217</p><p>\u{1F62F} \u5B8F\u4EFB\u52A1\u6267\u884C\u5B8C\u6BD5\u540E\uFF0C\u7ACB\u5373\u6267\u884C\u5F53\u524D\u5FAE\u4EFB\u52A1\u961F\u5217\u7684\u6240\u6709\u5FAE\u4EFB\u52A1</p><p>\u{1F62F} \u5B8F\u4EFB\u52A1\u6267\u884C\u5B8C\u6BD5\uFF0C\u5F00\u59CB\u68C0\u67E5\u6E32\u67D3\uFF0C\u7136\u540EGUI\u7EBF\u7A0B\u63A5\u7BA1\u6E32\u67D3</p><p>\u{1F62F} \u6E32\u67D3\u5B8C\u6BD5\u540E\uFF0Cjs\u7EBF\u7A0B\u7EE7\u7EED\u63A5\u7BA1\uFF0C\u5F00\u59CB\u4E0B\u4E00\u4E2A\u5B8F\u4EFB\u52A1\uFF08\u4E8B\u4EF6\u961F\u5217\uFF09</p><img src="'+c+'">',56),t=[i];function d(r,h,u,C,g,v){return e(),n("div",null,t)}const b=a(o,[["render",d]]);export{m as __pageData,b as default};