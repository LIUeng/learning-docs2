import{_ as s,c as a,o as n,a as e}from"./app.6c26ea93.js";const m=JSON.parse('{"title":"\u4F60\u4E0D\u77E5\u9053\u7684 JS","description":"","frontmatter":{},"headers":[{"level":2,"title":"matchMedia","slug":"matchmedia","link":"#matchmedia","children":[]}],"relativePath":"articles/advanced/knowledge.js.md"}'),l={name:"articles/advanced/knowledge.js.md"},p=e(`<h1 id="\u4F60\u4E0D\u77E5\u9053\u7684-js" tabindex="-1">\u4F60\u4E0D\u77E5\u9053\u7684 JS <a class="header-anchor" href="#\u4F60\u4E0D\u77E5\u9053\u7684-js" aria-hidden="true">#</a></h1><h2 id="matchmedia" tabindex="-1">matchMedia <a class="header-anchor" href="#matchmedia" aria-hidden="true">#</a></h2><ul><li>\u5339\u914D\u5A92\u4F53\u5C5E\u6027\u76F8\u5173\u7684\u4FE1\u606F</li></ul><blockquote><p>\u6BD4\u5982</p></blockquote><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// \u83B7\u53D6\u7CFB\u7EDF\u4E3B\u9898</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> mediaQueryList </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">matchMedia</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">(prefers-color-scheme: dark)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * mediaQueryList</span></span>
<span class="line"><span style="color:#676E95;"> * {</span></span>
<span class="line"><span style="color:#676E95;"> * matches: boolean,</span></span>
<span class="line"><span style="color:#676E95;"> * media: \u67E5\u8BE2\u5C5E\u6027</span></span>
<span class="line"><span style="color:#676E95;"> * addListener</span></span>
<span class="line"><span style="color:#676E95;"> * removeListener</span></span>
<span class="line"><span style="color:#676E95;"> * onchange: null</span></span>
<span class="line"><span style="color:#676E95;"> * }</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"></span></code></pre></div>`,5),o=[p];function c(t,r,i,d,h,_){return n(),a("div",null,o)}const u=s(l,[["render",c]]);export{m as __pageData,u as default};
