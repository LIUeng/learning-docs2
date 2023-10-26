import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.7c0fadea.js";const h=JSON.parse('{"title":"Typescript 文件结构定义","description":"","frontmatter":{},"headers":[],"relativePath":"notes/typescript/lib-struct.md","filePath":"notes/typescript/lib-struct.md","lastUpdated":1670330848000}'),p={name:"notes/typescript/lib-struct.md"},o=l(`<h1 id="typescript-文件结构定义" tabindex="-1">Typescript 文件结构定义 <a class="header-anchor" href="#typescript-文件结构定义" aria-label="Permalink to &quot;Typescript 文件结构定义&quot;">​</a></h1><blockquote><p>如何定义 typescript 类型文件（记录一些定义文件的细节）</p></blockquote><h2 id="模块化" tabindex="-1">模块化 <a class="header-anchor" href="#模块化" aria-label="Permalink to &quot;模块化&quot;">​</a></h2><p>es6/nodejs/umd/amd/SystemJs</p><h2 id="模块模板" tabindex="-1">模块模板 <a class="header-anchor" href="#模块模板" aria-label="Permalink to &quot;模块模板&quot;">​</a></h2><p>module.d.ts/module-class.d.ts/module-functon.d.ts/module-plugin.d.ts</p><h3 id="module-d-ts" tabindex="-1">module.d.ts <a class="header-anchor" href="#module-d-ts" aria-label="Permalink to &quot;module.d.ts&quot;">​</a></h3><ul><li>export = &amp; import xx = require()</li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// tsconfig.json =&gt; esModuleInterop: true</span></span>
<span class="line"><span style="color:#F97583;">declare</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">a</span><span style="color:#E1E4E8;">()</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> a;</span></span>
<span class="line"><span style="color:#6A737D;">// or</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> a;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// tsconfig.json =&gt; esModuleInterop: true</span></span>
<span class="line"><span style="color:#D73A49;">declare</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">a</span><span style="color:#24292E;">()</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> a;</span></span>
<span class="line"><span style="color:#6A737D;">// or</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> a;</span></span></code></pre></div><ul><li>可选的全局语法</li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">namespace</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">API</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">namespace</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">API</span><span style="color:#24292E;">;</span></span></code></pre></div><ul><li>包结构</li></ul><p>包的目录以及文件 js 与.d.ts 一一对应</p><ul><li>测试包 <ul><li>DefinitelyTyped/DefinitelyTyped 发布到正式环境</li></ul><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#FFAB70;">-</span><span style="color:#E1E4E8;"> root 根目录下创建[</span><span style="color:#DBEDFF;text-decoration:underline;">libname</span><span style="color:#E1E4E8;">].d.ts</span></span>
<span class="line"><span style="color:#FFAB70;">-</span><span style="color:#E1E4E8;"> 添加 declare module &quot;[</span><span style="color:#DBEDFF;text-decoration:underline;">libname</span><span style="color:#E1E4E8;">]&quot; {}</span></span>
<span class="line"><span style="color:#FFAB70;">-</span><span style="color:#E1E4E8;"> 在声明模块中添加模板</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#E36209;">-</span><span style="color:#24292E;"> root 根目录下创建[</span><span style="color:#032F62;text-decoration:underline;">libname</span><span style="color:#24292E;">].d.ts</span></span>
<span class="line"><span style="color:#E36209;">-</span><span style="color:#24292E;"> 添加 declare module &quot;[</span><span style="color:#032F62;text-decoration:underline;">libname</span><span style="color:#24292E;">]&quot; {}</span></span>
<span class="line"><span style="color:#E36209;">-</span><span style="color:#24292E;"> 在声明模块中添加模板</span></span></code></pre></div></li></ul><h2 id="全局模板" tabindex="-1">全局模板 <a class="header-anchor" href="#全局模板" aria-label="Permalink to &quot;全局模板&quot;">​</a></h2><p>global.d.ts 文件</p><ul><li>引入全局依赖</li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/// &lt;reference types=&quot;someLib&quot;&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/// &lt;reference types=&quot;someLib&quot;&gt;</span></span></code></pre></div><ul><li>esModuleInterop: true</li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> app </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;express&#39;</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> app </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;express&#39;</span><span style="color:#24292E;">);</span></span></code></pre></div><h2 id="do-s-don-ts" tabindex="-1">DO&#39;s &amp; DON&#39;Ts <a class="header-anchor" href="#do-s-don-ts" aria-label="Permalink to &quot;DO&#39;s &amp; DON&#39;Ts&quot;">​</a></h2><ul><li>注意基本类型小写（number, string, boolean, sysmbol</li><li>能不使用 any 别用 any，使用 @ts-ignore 或者 unknown 类型</li><li>函数返回不要使用 any，使用 void 代替</li><li>函数返回 void 不要使用可选参数</li><li>函数能一个定义完，不使用负载 overloads</li><li>负载定义注意声明的顺序，防止出现多种情况</li><li>能一次性使用可选参数，不适用负载</li><li>使用联合类型</li></ul><h2 id="deep-dive" tabindex="-1">DEEP DIVE <a class="header-anchor" href="#deep-dive" aria-label="Permalink to &quot;DEEP DIVE&quot;">​</a></h2><h3 id="高级组合" tabindex="-1">高级组合 <a class="header-anchor" href="#高级组合" aria-label="Permalink to &quot;高级组合&quot;">​</a></h3><ul><li>interface &amp; class</li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">A</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">x</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">nubmer</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">A</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">y</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> a</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">A</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { x: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, y: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#6A737D;">// OK</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(a.x </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> a.y);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">A</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">x</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">nubmer</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">A</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">y</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> a</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">A</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> { x: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, y: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;"> };</span></span>
<span class="line"><span style="color:#6A737D;">// OK</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(a.x </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> a.y);</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">type</p><p>type 无法与 class 一起使用</p></div><ul><li>class &amp; namespace</li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">C</span><span style="color:#E1E4E8;"> {}</span></span>
<span class="line"><span style="color:#F97583;">namespace</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">C</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> lex x: number;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">D</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// OK</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> y </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">C</span><span style="color:#E1E4E8;">.x;</span></span>
<span class="line"><span style="color:#6A737D;">// OK</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> y</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">C</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">D</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">C</span><span style="color:#24292E;"> {}</span></span>
<span class="line"><span style="color:#D73A49;">namespace</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">C</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">export</span><span style="color:#24292E;"> lex x: number;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">D</span><span style="color:#24292E;"> {};</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// OK</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> y </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">C</span><span style="color:#24292E;">.x;</span></span>
<span class="line"><span style="color:#6A737D;">// OK</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> y</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">C</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">D</span><span style="color:#24292E;">;</span></span></code></pre></div><ul><li>namespace 可以嵌套 namespace</li><li>type &amp; namespace</li></ul><p>type 和 namespace 使用会出现多种不同的合并</p>`,31),e=[o];function t(c,r,y,i,E,d){return a(),n("div",null,e)}const F=s(p,[["render",t]]);export{h as __pageData,F as default};