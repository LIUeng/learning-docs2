import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.0e8ae64e.js";const _=JSON.parse('{"title":"你不知道的 JS","description":"","frontmatter":{},"headers":[],"relativePath":"articles/advanced/knowledge.js.md","filePath":"articles/advanced/knowledge.js.md","lastUpdated":1670330848000}'),l={name:"articles/advanced/knowledge.js.md"},p=e(`<h1 id="你不知道的-js" tabindex="-1">你不知道的 JS <a class="header-anchor" href="#你不知道的-js" aria-label="Permalink to &quot;你不知道的 JS&quot;">​</a></h1><h2 id="matchmedia" tabindex="-1">matchMedia <a class="header-anchor" href="#matchmedia" aria-label="Permalink to &quot;matchMedia&quot;">​</a></h2><ul><li>匹配媒体属性相关的信息</li></ul><blockquote><p>比如</p></blockquote><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 获取系统主题</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> mediaQueryList </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> window.</span><span style="color:#B392F0;">matchMedia</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;(prefers-color-scheme: dark)&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * mediaQueryList</span></span>
<span class="line"><span style="color:#6A737D;"> * {</span></span>
<span class="line"><span style="color:#6A737D;"> * matches: boolean,</span></span>
<span class="line"><span style="color:#6A737D;"> * media: 查询属性</span></span>
<span class="line"><span style="color:#6A737D;"> * addListener</span></span>
<span class="line"><span style="color:#6A737D;"> * removeListener</span></span>
<span class="line"><span style="color:#6A737D;"> * onchange: null</span></span>
<span class="line"><span style="color:#6A737D;"> * }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 获取系统主题</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> mediaQueryList </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> window.</span><span style="color:#6F42C1;">matchMedia</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;(prefers-color-scheme: dark)&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * mediaQueryList</span></span>
<span class="line"><span style="color:#6A737D;"> * {</span></span>
<span class="line"><span style="color:#6A737D;"> * matches: boolean,</span></span>
<span class="line"><span style="color:#6A737D;"> * media: 查询属性</span></span>
<span class="line"><span style="color:#6A737D;"> * addListener</span></span>
<span class="line"><span style="color:#6A737D;"> * removeListener</span></span>
<span class="line"><span style="color:#6A737D;"> * onchange: null</span></span>
<span class="line"><span style="color:#6A737D;"> * }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div>`,5),o=[p];function c(t,r,i,d,y,h){return a(),n("div",null,o)}const A=s(l,[["render",c]]);export{_ as __pageData,A as default};
