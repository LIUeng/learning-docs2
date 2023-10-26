import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.7c0fadea.js";const m=JSON.parse('{"title":"HtmlWepbackPlugin 源码分析","description":"","frontmatter":{},"headers":[],"relativePath":"articles/advanced/htmlWebpackPlugin.md","filePath":"articles/advanced/htmlWebpackPlugin.md","lastUpdated":1670330848000}'),p={name:"articles/advanced/htmlWebpackPlugin.md"},o=l(`<h1 id="htmlwepbackplugin-源码分析" tabindex="-1">HtmlWepbackPlugin 源码分析 <a class="header-anchor" href="#htmlwepbackplugin-源码分析" aria-label="Permalink to &quot;HtmlWepbackPlugin 源码分析&quot;">​</a></h1><p><strong>注：本文中 HWP 即 html-webpack-plugin 缩写</strong></p><p><code>html-webpack-plugin插件实现代码还是挺复杂的，需要与webpack源码配合起来，有兴趣可以查看webpack源码</code></p><hr><h2 id="简易的写一个-hwp-插件" tabindex="-1">简易的写一个 HWP 插件 <a class="header-anchor" href="#简易的写一个-hwp-插件" aria-label="Permalink to &quot;简易的写一个 HWP 插件&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 关于如何把webpack的输出文件注入到模板文件当中</span></span>
<span class="line"><span style="color:#6A737D;"> * 自己注入标签，无任何副作用，自由实现</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">HWP</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">apply</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">compiler</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    compiler.hooks.emit.</span><span style="color:#B392F0;">tapAsync</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">compilation</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">callback</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> html </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`</span></span>
<span class="line"><span style="color:#9ECBFF;">        &lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">        &lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">        &lt;head&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">            &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">            &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">            &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">        &lt;/head&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">        &lt;body&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">            &lt;div id=&quot;app&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">            &lt;!-- script here --&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">        &lt;/body&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">        &lt;/html&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">      \`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      compilation.assets[</span><span style="color:#9ECBFF;">&#39;index.html&#39;</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">source</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> html;</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> html.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">callback</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 关于如何把webpack的输出文件注入到模板文件当中</span></span>
<span class="line"><span style="color:#6A737D;"> * 自己注入标签，无任何副作用，自由实现</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">HWP</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">apply</span><span style="color:#24292E;">(</span><span style="color:#E36209;">compiler</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    compiler.hooks.emit.</span><span style="color:#6F42C1;">tapAsync</span><span style="color:#24292E;">((</span><span style="color:#E36209;">compilation</span><span style="color:#24292E;">, </span><span style="color:#E36209;">callback</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> html </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`</span></span>
<span class="line"><span style="color:#032F62;">        &lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#032F62;">        &lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#032F62;">        &lt;head&gt;</span></span>
<span class="line"><span style="color:#032F62;">            &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#032F62;">            &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span style="color:#032F62;">            &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span style="color:#032F62;">        &lt;/head&gt;</span></span>
<span class="line"><span style="color:#032F62;">        &lt;body&gt;</span></span>
<span class="line"><span style="color:#032F62;">            &lt;div id=&quot;app&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#032F62;">            &lt;!-- script here --&gt;</span></span>
<span class="line"><span style="color:#032F62;">        &lt;/body&gt;</span></span>
<span class="line"><span style="color:#032F62;">        &lt;/html&gt;</span></span>
<span class="line"><span style="color:#032F62;">      \`</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      compilation.assets[</span><span style="color:#032F62;">&#39;index.html&#39;</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">source</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> html;</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">size</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> html.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">callback</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="简易实现问题" tabindex="-1">简易实现问题 <a class="header-anchor" href="#简易实现问题" aria-label="Permalink to &quot;简易实现问题&quot;">​</a></h3><blockquote><p>利用了主 compiler，每次编译时都触发主 compiler emit 钩子，代价有点大</p></blockquote><p>HWP 优化处理 =&gt; 🍵 加入缓存处理，模板内容不改变，不再继续又生成一遍 index.html</p><blockquote><p>未能实时监听模板文件的改变</p></blockquote><p>HWP 优化处理 =&gt; 🍵 引入 compiler 钩子中的 thiscompilation，把模板文件加入进去</p><blockquote><p>如何使用额外的 compiler 创建的子 compiler 进行优化</p></blockquote><p>HWP 优化处理 =&gt; 🍵 引入 compilatoin 对象的 createChildCompiler 方法，这个在 thiscompilation 钩子中实现</p><hr><h2 id="hwp-源码实现" tabindex="-1">HWP 源码实现 <a class="header-anchor" href="#hwp-源码实现" aria-label="Permalink to &quot;HWP 源码实现&quot;">​</a></h2><h3 id="webpack-配置" tabindex="-1">Webpack 配置 <a class="header-anchor" href="#webpack-配置" aria-label="Permalink to &quot;Webpack 配置&quot;">​</a></h3><p><code>html-webpack-plugin使用在webpack配置中</code></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ...,</span></span>
<span class="line"><span style="color:#E1E4E8;">  plugins: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// html-webpack-plugin 常用配置</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">HtmlWebpackPlugin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">/* 输出文件名 */</span></span>
<span class="line"><span style="color:#E1E4E8;">      filename: </span><span style="color:#9ECBFF;">&#39;index.html&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">/* 模板地址 */</span></span>
<span class="line"><span style="color:#E1E4E8;">      template: </span><span style="color:#6A737D;">/* 绝对路径地址 */</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">/* script 标签插入位置 */</span></span>
<span class="line"><span style="color:#E1E4E8;">      inject: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">/* &#39;body&#39; | &#39;head&#39; */</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">/* 文档标题 document.title */</span></span>
<span class="line"><span style="color:#E1E4E8;">      title:  </span><span style="color:#6A737D;">/* &lt;title&gt;&lt;%= htmlWebpackPlugin.options.title %&gt;&lt;/title&gt; */</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">/* link rel=&quot;icon&quot; */</span></span>
<span class="line"><span style="color:#E1E4E8;">      favicon: </span><span style="color:#6A737D;">/* 绝对路径icon地址 */</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ...,</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ...,</span></span>
<span class="line"><span style="color:#24292E;">  plugins: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// html-webpack-plugin 常用配置</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">HtmlWebpackPlugin</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">/* 输出文件名 */</span></span>
<span class="line"><span style="color:#24292E;">      filename: </span><span style="color:#032F62;">&#39;index.html&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">/* 模板地址 */</span></span>
<span class="line"><span style="color:#24292E;">      template: </span><span style="color:#6A737D;">/* 绝对路径地址 */</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">/* script 标签插入位置 */</span></span>
<span class="line"><span style="color:#24292E;">      inject: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">/* &#39;body&#39; | &#39;head&#39; */</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">/* 文档标题 document.title */</span></span>
<span class="line"><span style="color:#24292E;">      title:  </span><span style="color:#6A737D;">/* &lt;title&gt;&lt;%= htmlWebpackPlugin.options.title %&gt;&lt;/title&gt; */</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">/* link rel=&quot;icon&quot; */</span></span>
<span class="line"><span style="color:#24292E;">      favicon: </span><span style="color:#6A737D;">/* 绝对路径icon地址 */</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ...,</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="写一个-webpack-插件" tabindex="-1">写一个 Webpack 插件 <a class="header-anchor" href="#写一个-webpack-插件" aria-label="Permalink to &quot;写一个 Webpack 插件&quot;">​</a></h3><p><a href="https://webpack.js.org/contribute/writing-a-plugin/" target="_blank" rel="noreferrer">webpack 写插件</a></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">HtmlWebpackPlugin</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">apply</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">compiler</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// handle here</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">HtmlWebpackPlugin</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">apply</span><span style="color:#24292E;">(</span><span style="color:#E36209;">compiler</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// handle here</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="使用到的-webpack-compiler" tabindex="-1">使用到的 webpack compiler <a class="header-anchor" href="#使用到的-webpack-compiler" aria-label="Permalink to &quot;使用到的 webpack compiler&quot;">​</a></h3><p><code>HWP 使用到的compiler hooks以及它使用在插件中的作用</code></p><h4 id="compiler-hooks-thiscompilation" tabindex="-1">compiler.hooks.thisCompilation <a class="header-anchor" href="#compiler-hooks-thiscompilation" aria-label="Permalink to &quot;compiler.hooks.thisCompilation&quot;">​</a></h4><p><code>thisCompilation hook 做了以下操作</code></p><ul><li><p>😡thisCompilation.tap(&#39;HWP&#39;, compilation)这里把模板文件 index.html 加入到编译当中，并且实时监听编译模板</p></li><li><p>😡 创建 childCompiler</p></li><li><p>😡 注意：thisCompilation hook 写了 loader 处理 index.html 文件</p></li><li><p>😡 加入入口文件：/xxx/inde.html!(loader 地址)，这种形式可以通过自定义的 loader 处理 index.html，返回 index.html webpack 编译后的内容</p><ul><li><p>compilation.hooks.additionalChunkAssets.tap()</p><ul><li>😡 把 childCompiler 中的文件加入到主 compiler 中去</li></ul></li></ul></li></ul><h4 id="compiler-hooks-make" tabindex="-1">compiler.hooks.make <a class="header-anchor" href="#compiler-hooks-make" aria-label="Permalink to &quot;compiler.hooks.make&quot;">​</a></h4><p><code>make hook 做了以下操作</code></p><ul><li><p>😡make.tapAsync(compilation, callback)在 compilation 完成之前执行</p></li><li><p>😡 开始编译，在编译中作缓存变量处理，同时返回编译模板返回的资源内容</p></li></ul><h4 id="compiler-hooks-emit" tabindex="-1">compiler.hooks.emit <a class="header-anchor" href="#compiler-hooks-emit" aria-label="Permalink to &quot;compiler.hooks.emit&quot;">​</a></h4><p><code>emit hook 做了以下操作</code></p><ul><li><p>😡emit.tapAsync(compilation, callback)这里处理输出文件到 webpack 配置的 output 文件夹</p></li><li><p>😡 引入 tapable 事件流机制，加入 hooks 到 compilation 对象中，为了 html-webpack-plugin 的灵活性，引入其他第三方插件</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">AsyncSeriesWaterfallHook</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;tapable&#39;</span><span style="color:#E1E4E8;">).AsyncSeriesWaterfallHook;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createHtmlWebpackPluginHooks</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// script｜link｜X 标签 资源文件 产生之前</span></span>
<span class="line"><span style="color:#E1E4E8;">    beforeAssetTagGeneration: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">AsyncSeriesWaterfallHook</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;pluginArgs&#39;</span><span style="color:#E1E4E8;">]),</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 改变 标签｜资源文件｜favicon</span></span>
<span class="line"><span style="color:#E1E4E8;">    alterAssetTags: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">AsyncSeriesWaterfallHook</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;pluginArgs&#39;</span><span style="color:#E1E4E8;">]),</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 改变生成标签组</span></span>
<span class="line"><span style="color:#E1E4E8;">    alterAssetTagGroups: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">AsyncSeriesWaterfallHook</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;pluginArgs&#39;</span><span style="color:#E1E4E8;">]),</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 在模板处理之后</span></span>
<span class="line"><span style="color:#E1E4E8;">    afterTemplateExecution: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">AsyncSeriesWaterfallHook</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;pluginArgs&#39;</span><span style="color:#E1E4E8;">]),</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 模板文件生成之前</span></span>
<span class="line"><span style="color:#E1E4E8;">    beforeEmit: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">AsyncSeriesWaterfallHook</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;pluginArgs&#39;</span><span style="color:#E1E4E8;">]),</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 模板文件生成之后</span></span>
<span class="line"><span style="color:#E1E4E8;">    afterEmit: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">AsyncSeriesWaterfallHook</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;pluginArgs&#39;</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">AsyncSeriesWaterfallHook</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;tapable&#39;</span><span style="color:#24292E;">).AsyncSeriesWaterfallHook;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createHtmlWebpackPluginHooks</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// script｜link｜X 标签 资源文件 产生之前</span></span>
<span class="line"><span style="color:#24292E;">    beforeAssetTagGeneration: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">AsyncSeriesWaterfallHook</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&#39;pluginArgs&#39;</span><span style="color:#24292E;">]),</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 改变 标签｜资源文件｜favicon</span></span>
<span class="line"><span style="color:#24292E;">    alterAssetTags: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">AsyncSeriesWaterfallHook</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&#39;pluginArgs&#39;</span><span style="color:#24292E;">]),</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 改变生成标签组</span></span>
<span class="line"><span style="color:#24292E;">    alterAssetTagGroups: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">AsyncSeriesWaterfallHook</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&#39;pluginArgs&#39;</span><span style="color:#24292E;">]),</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 在模板处理之后</span></span>
<span class="line"><span style="color:#24292E;">    afterTemplateExecution: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">AsyncSeriesWaterfallHook</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&#39;pluginArgs&#39;</span><span style="color:#24292E;">]),</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 模板文件生成之前</span></span>
<span class="line"><span style="color:#24292E;">    beforeEmit: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">AsyncSeriesWaterfallHook</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&#39;pluginArgs&#39;</span><span style="color:#24292E;">]),</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 模板文件生成之后</span></span>
<span class="line"><span style="color:#24292E;">    afterEmit: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">AsyncSeriesWaterfallHook</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&#39;pluginArgs&#39;</span><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#24292E;">  };</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="hwp-创建一个子解析器-childcompiler" tabindex="-1">HWP 创建一个子解析器 childCompiler <a class="header-anchor" href="#hwp-创建一个子解析器-childcompiler" aria-label="Permalink to &quot;HWP 创建一个子解析器 childCompiler&quot;">​</a></h3><blockquote><p><code>HWP 没有直接使用webpack插件提供的主compiler，而是利用compilation object创建了一个childCompiler</code></p></blockquote><h4 id="createchildcompiler" tabindex="-1">CreateChildCompiler <a class="header-anchor" href="#createchildcompiler" aria-label="Permalink to &quot;CreateChildCompiler&quot;">​</a></h4><blockquote><p><code>webpack允许创建一个webpack compiler子实例，并且支持运行，可以有不同的配置，与主compiler类似相同的api</code></p></blockquote><ul><li><p>webpack compilation object</p><p>👀createChildCompiler(name, ouputOptions, plugins)</p></li></ul><h2 id="动手实现一个-hwp-插件" tabindex="-1">动手实现一个 HWP 插件 <a class="header-anchor" href="#动手实现一个-hwp-插件" aria-label="Permalink to &quot;动手实现一个 HWP 插件&quot;">​</a></h2><p>🦐🦐🦐 解释性代码如下 源码可以点击下方链接</p><p><a href="https://github.com/jantimon/html-webpack-plugin" target="_blank" rel="noreferrer">html-webpck-plugin 源码移步这里</a></p><h3 id="创建-childcompiler" tabindex="-1">创建 childCompiler <a class="header-anchor" href="#创建-childcompiler" aria-label="Permalink to &quot;创建 childCompiler&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * if 假设（这里为了配置部分代码展示）</span></span>
<span class="line"><span style="color:#6A737D;"> * template绝对地址为：template = /A/B/C/public/index.html</span></span>
<span class="line"><span style="color:#6A737D;"> * loader绝对地址为：loader = /A/B/HWP/utils/loader.js</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">HWP</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">apply</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">compiler</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 模板 + loader</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">fullTemplate</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;/A/B/C/public/index.html!/A/B/HWP/utils/loader.js&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> childCompiler;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> compileTmplatePromise </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> compiler.hooks.thisCompilation.</span><span style="color:#B392F0;">tapAsync</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">      (</span><span style="color:#FFAB70;">compilation</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">callback</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 把模板文件加入到compiler编译文件队列中</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 加入模板文件入口</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;webpack/lib/SingleEntryPlugin&#39;</span><span style="color:#E1E4E8;">)(</span></span>
<span class="line"><span style="color:#E1E4E8;">          compilation.compiler.context,</span></span>
<span class="line"><span style="color:#E1E4E8;">          fullTemplate,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">&#39;name&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        ).</span><span style="color:#B392F0;">apply</span><span style="color:#E1E4E8;">(childCompiler);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        childCompiler </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> compilation.</span><span style="color:#B392F0;">createChildCompiler</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;compilerName&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">          filename: </span><span style="color:#9ECBFF;">&#39;xxx-[name]&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          publicPath: compilation.outputOptions.publicPath</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 开始编译添加的入口文件</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">         * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{Error}</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">err</span><span style="color:#6A737D;"> first 错误</span></span>
<span class="line"><span style="color:#6A737D;">         * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{Object}</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">entries</span><span style="color:#6A737D;"> 编译入口文件结果资源</span></span>
<span class="line"><span style="color:#6A737D;">         * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{Object}</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">childCompilaton</span><span style="color:#6A737D;"> compilation 对象</span></span>
<span class="line"><span style="color:#6A737D;">         */</span></span>
<span class="line"><span style="color:#E1E4E8;">        childCompiler.</span><span style="color:#B392F0;">runAsChild</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">entries</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">childCompilaton</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;">// 入口编译之后文件 index.html + loader 处理之后</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;">// 得到entries编译结果</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;">// 处理entries</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;">// handleEntries = () &gt; {}</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">compiledTemplate</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">handleEntries</span><span style="color:#E1E4E8;">(entries);</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;">// 代码不能运行 请移步HWP源码</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">(compiledTemplate.content);</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * if 假设（这里为了配置部分代码展示）</span></span>
<span class="line"><span style="color:#6A737D;"> * template绝对地址为：template = /A/B/C/public/index.html</span></span>
<span class="line"><span style="color:#6A737D;"> * loader绝对地址为：loader = /A/B/HWP/utils/loader.js</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">HWP</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">apply</span><span style="color:#24292E;">(</span><span style="color:#E36209;">compiler</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 模板 + loader</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">fullTemplate</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;/A/B/C/public/index.html!/A/B/HWP/utils/loader.js&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> childCompiler;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> compileTmplatePromise </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> compiler.hooks.thisCompilation.</span><span style="color:#6F42C1;">tapAsync</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">      (</span><span style="color:#E36209;">compilation</span><span style="color:#24292E;">, </span><span style="color:#E36209;">callback</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 把模板文件加入到compiler编译文件队列中</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 加入模板文件入口</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;webpack/lib/SingleEntryPlugin&#39;</span><span style="color:#24292E;">)(</span></span>
<span class="line"><span style="color:#24292E;">          compilation.compiler.context,</span></span>
<span class="line"><span style="color:#24292E;">          fullTemplate,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&#39;name&#39;</span></span>
<span class="line"><span style="color:#24292E;">        ).</span><span style="color:#6F42C1;">apply</span><span style="color:#24292E;">(childCompiler);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        childCompiler </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> compilation.</span><span style="color:#6F42C1;">createChildCompiler</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;compilerName&#39;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">          filename: </span><span style="color:#032F62;">&#39;xxx-[name]&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          publicPath: compilation.outputOptions.publicPath</span></span>
<span class="line"><span style="color:#24292E;">        });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 开始编译添加的入口文件</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">         * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{Error}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">err</span><span style="color:#6A737D;"> first 错误</span></span>
<span class="line"><span style="color:#6A737D;">         * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{Object}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">entries</span><span style="color:#6A737D;"> 编译入口文件结果资源</span></span>
<span class="line"><span style="color:#6A737D;">         * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{Object}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">childCompilaton</span><span style="color:#6A737D;"> compilation 对象</span></span>
<span class="line"><span style="color:#6A737D;">         */</span></span>
<span class="line"><span style="color:#24292E;">        childCompiler.</span><span style="color:#6F42C1;">runAsChild</span><span style="color:#24292E;">((</span><span style="color:#E36209;">err</span><span style="color:#24292E;">, </span><span style="color:#E36209;">entries</span><span style="color:#24292E;">, </span><span style="color:#E36209;">childCompilaton</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// 入口编译之后文件 index.html + loader 处理之后</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// 得到entries编译结果</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// 处理entries</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// handleEntries = () &gt; {}</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">compiledTemplate</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">handleEntries</span><span style="color:#24292E;">(entries);</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// 代码不能运行 请移步HWP源码</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">(compiledTemplate.content);</span></span>
<span class="line"><span style="color:#24292E;">        });</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    );</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="index-html-解析器-loader" tabindex="-1">index.html 解析器 loader <a class="header-anchor" href="#index-html-解析器-loader" aria-label="Permalink to &quot;index.html 解析器 loader&quot;">​</a></h3><p><a href="https://webpack.js.org/contribute/writing-a-loader/" target="_blank" rel="noreferrer">webpack 如何写一个 loader</a></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// loader 是一个函数</span></span>
<span class="line"><span style="color:#6A737D;">// webpack.config.js</span></span>
<span class="line"><span style="color:#6A737D;">// 示例1 这是一种配置</span></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  resolve: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    rule: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">html</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        loader: </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;../../loader.js&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#6A737D;">// 示例2 loader</span></span>
<span class="line"><span style="color:#6A737D;">// 这种方法webpack会解析入口文件中的loader并解析</span></span>
<span class="line"><span style="color:#6A737D;">// 引入最好使用绝对地址</span></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  entry: [</span><span style="color:#9ECBFF;">&#39;index.html!loader.js&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 开始写一个loader</span></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">source</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// source 即配置匹配的文件返回的utf-8字符串</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// source 自由处理规则</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> source;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// loader 是一个函数</span></span>
<span class="line"><span style="color:#6A737D;">// webpack.config.js</span></span>
<span class="line"><span style="color:#6A737D;">// 示例1 这是一种配置</span></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  resolve: {</span></span>
<span class="line"><span style="color:#24292E;">    rule: [</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">html</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        loader: </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;../../loader.js&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#6A737D;">// 示例2 loader</span></span>
<span class="line"><span style="color:#6A737D;">// 这种方法webpack会解析入口文件中的loader并解析</span></span>
<span class="line"><span style="color:#6A737D;">// 引入最好使用绝对地址</span></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  entry: [</span><span style="color:#032F62;">&#39;index.html!loader.js&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 开始写一个loader</span></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">source</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// source 即配置匹配的文件返回的utf-8字符串</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// source 自由处理规则</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> source;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="开始注入-js-css-favicon-文件" tabindex="-1">开始注入 js css favicon 文件 <a class="header-anchor" href="#开始注入-js-css-favicon-文件" aria-label="Permalink to &quot;开始注入 js css favicon 文件&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// emit hooks compilation</span></span>
<span class="line"><span style="color:#E1E4E8;">compilation.hooks.emit.</span><span style="color:#B392F0;">tapAsync</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">compilation</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">callback</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// compileTmplatePromise</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 插件如何处理favicon js css自由处理</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 可以自行参考源码</span></span>
<span class="line"><span style="color:#E1E4E8;">  compileTmplatePromise.</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">html</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 自由匹配规则插入到index.html模板中</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// emit hooks compilation</span></span>
<span class="line"><span style="color:#24292E;">compilation.hooks.emit.</span><span style="color:#6F42C1;">tapAsync</span><span style="color:#24292E;">((</span><span style="color:#E36209;">compilation</span><span style="color:#24292E;">, </span><span style="color:#E36209;">callback</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// compileTmplatePromise</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 插件如何处理favicon js css自由处理</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 可以自行参考源码</span></span>
<span class="line"><span style="color:#24292E;">  compileTmplatePromise.</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#E36209;">html</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 自由匹配规则插入到index.html模板中</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><h3 id="title-如何注入到-index-html-中" tabindex="-1">title 如何注入到 index.html 中 <a class="header-anchor" href="#title-如何注入到-index-html-中" aria-label="Permalink to &quot;title 如何注入到 index.html 中&quot;">​</a></h3><p>模板文件</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;!</span><span style="color:#85E89D;">DOCTYPE</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">html</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">html</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;en&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">head</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">meta</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">charset</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;UTF-8&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">meta</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;viewport&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">content</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;width=device-width, initial-scale=1.0&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">&gt;</span><span style="color:#FDAEB7;font-style:italic;">&lt;</span><span style="color:#E1E4E8;">%= htmlWebpackPlugin.options.title %&gt;&lt;/</span><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">head</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">body</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;app&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">body</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">html</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;!</span><span style="color:#22863A;">DOCTYPE</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">html</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">html</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;en&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">head</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">meta</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">charset</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;UTF-8&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">meta</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;viewport&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">content</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;width=device-width, initial-scale=1.0&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">title</span><span style="color:#24292E;">&gt;</span><span style="color:#B31D28;font-style:italic;">&lt;</span><span style="color:#24292E;">%= htmlWebpackPlugin.options.title %&gt;&lt;/</span><span style="color:#22863A;">title</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">head</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">body</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;app&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">body</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">html</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h4 id="nodejs-vm-模块" tabindex="-1">NodeJS VM 模块 <a class="header-anchor" href="#nodejs-vm-模块" aria-label="Permalink to &quot;NodeJS VM 模块&quot;">​</a></h4><p><a href="https://nodejs.org/dist/latest-v12.x/docs/api/vm.html" target="_blank" rel="noreferrer">关于 nodejs vm 模块</a></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">vm</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;vm&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">// html-webpack-plugin 利用nodejs vm模块</span></span>
<span class="line"><span style="color:#6A737D;">// vm 提供一个执行js环境</span></span>
<span class="line"><span style="color:#6A737D;">// index.html + loader 编译 代码示例如下</span></span>
<span class="line"><span style="color:#6A737D;">// 这里loader参照html-webpack-plugin/lib/loader.js</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ex</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">eval</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;module.exports = function (templateParams) { with(templateParams) {return (function(data) {</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">var __t, __p = </span><span style="color:#79B8FF;">\\&#39;\\&#39;</span><span style="color:#9ECBFF;">;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">__p += </span><span style="color:#79B8FF;">\\&#39;</span><span style="color:#9ECBFF;">&lt;!DOCTYPE html&gt;</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">n&lt;html lang=&quot;en&quot;&gt;</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">n&lt;head&gt;</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">n    &lt;meta charset=&quot;UTF-8&quot;&gt;</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">n    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">n    &lt;title&gt;</span><span style="color:#79B8FF;">\\&#39;</span><span style="color:#9ECBFF;"> +</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">((__t = ( htmlWebpackPlugin.options.title )) == null ? </span><span style="color:#79B8FF;">\\&#39;\\&#39;</span><span style="color:#9ECBFF;"> : __t) +</span><span style="color:#79B8FF;">\\n\\&#39;</span><span style="color:#9ECBFF;">&lt;/title&gt;</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">n&lt;/head&gt;</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">n&lt;body&gt;</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">n    &lt;div id=&quot;app&quot;&gt;&lt;/div&gt;</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">n&lt;/body&gt;</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">n&lt;/html&gt;</span><span style="color:#79B8FF;">\\&#39;</span><span style="color:#9ECBFF;">;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">return __p</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">})();}}</span><span style="color:#79B8FF;">\\n\\n</span><span style="color:#9ECBFF;">//# sourceURL=webpack:///./public/index.html?./plugins/html-webpack-plugin/utils/loader.js&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">source</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ex</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;/A/B/C/public/index.html&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// vm</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">vmContext</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> vm.</span><span style="color:#B392F0;">createContext</span><span style="color:#E1E4E8;">({ HTML_WEBPACK_PLUGIN: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">vmScript</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> vm.</span><span style="color:#B392F0;">Script</span><span style="color:#E1E4E8;">(source, { filename: template });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 这里得到一个函数</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">newSource</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> vmScript.</span><span style="color:#B392F0;">runInContext</span><span style="color:#E1E4E8;">(vmScript);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// newSource 执行 eval 代码</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> html </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">newSource</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  templateParams: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    htmlWebpackPlugin: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        title: </span><span style="color:#9ECBFF;">&#39;HELLO WORLD&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 得到结果</span></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;title&gt;HELLO WORLD&lt;/title&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;div id=&quot;app&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;/html&gt; </span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">vm</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;vm&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">// html-webpack-plugin 利用nodejs vm模块</span></span>
<span class="line"><span style="color:#6A737D;">// vm 提供一个执行js环境</span></span>
<span class="line"><span style="color:#6A737D;">// index.html + loader 编译 代码示例如下</span></span>
<span class="line"><span style="color:#6A737D;">// 这里loader参照html-webpack-plugin/lib/loader.js</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ex</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">eval</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;module.exports = function (templateParams) { with(templateParams) {return (function(data) {</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">var __t, __p = </span><span style="color:#005CC5;">\\&#39;\\&#39;</span><span style="color:#032F62;">;</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">__p += </span><span style="color:#005CC5;">\\&#39;</span><span style="color:#032F62;">&lt;!DOCTYPE html&gt;</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">n&lt;html lang=&quot;en&quot;&gt;</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">n&lt;head&gt;</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">n    &lt;meta charset=&quot;UTF-8&quot;&gt;</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">n    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">n    &lt;title&gt;</span><span style="color:#005CC5;">\\&#39;</span><span style="color:#032F62;"> +</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">((__t = ( htmlWebpackPlugin.options.title )) == null ? </span><span style="color:#005CC5;">\\&#39;\\&#39;</span><span style="color:#032F62;"> : __t) +</span><span style="color:#005CC5;">\\n\\&#39;</span><span style="color:#032F62;">&lt;/title&gt;</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">n&lt;/head&gt;</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">n&lt;body&gt;</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">n    &lt;div id=&quot;app&quot;&gt;&lt;/div&gt;</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">n&lt;/body&gt;</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">n&lt;/html&gt;</span><span style="color:#005CC5;">\\&#39;</span><span style="color:#032F62;">;</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">return __p</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">})();}}</span><span style="color:#005CC5;">\\n\\n</span><span style="color:#032F62;">//# sourceURL=webpack:///./public/index.html?./plugins/html-webpack-plugin/utils/loader.js&#39;</span></span>
<span class="line"><span style="color:#24292E;">  );</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">source</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ex</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">template</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;/A/B/C/public/index.html&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// vm</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">vmContext</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> vm.</span><span style="color:#6F42C1;">createContext</span><span style="color:#24292E;">({ HTML_WEBPACK_PLUGIN: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> });</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">vmScript</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> vm.</span><span style="color:#6F42C1;">Script</span><span style="color:#24292E;">(source, { filename: template });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 这里得到一个函数</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">newSource</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> vmScript.</span><span style="color:#6F42C1;">runInContext</span><span style="color:#24292E;">(vmScript);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// newSource 执行 eval 代码</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> html </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">newSource</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  templateParams: {</span></span>
<span class="line"><span style="color:#24292E;">    htmlWebpackPlugin: {</span></span>
<span class="line"><span style="color:#24292E;">      options: {</span></span>
<span class="line"><span style="color:#24292E;">        title: </span><span style="color:#032F62;">&#39;HELLO WORLD&#39;</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 得到结果</span></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;title&gt;HELLO WORLD&lt;/title&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;div id=&quot;app&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;/html&gt; </span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div><hr><p>关于许多细节点没有处理，可以自行参考 html-webpack-plugin 源码</p><ul><li>能跑一次绝不多跑（编译结果）</li><li>html-webpack-plugin 缓存优化</li></ul><hr>`,58),e=[o];function t(c,r,E,y,i,F){return n(),a("div",null,e)}const h=s(p,[["render",t]]);export{m as __pageData,h as default};
