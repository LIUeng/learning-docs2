import{_ as a,o as s,c as e,Q as n}from"./chunks/framework.7c0fadea.js";const _=JSON.parse('{"title":"yarn 问题","description":"","frontmatter":{},"headers":[],"relativePath":"articles/problem/yarn.md","filePath":"articles/problem/yarn.md","lastUpdated":1670330848000}'),o={name:"articles/problem/yarn.md"},l=n('<h1 id="yarn-问题" tabindex="-1">yarn 问题 <a class="header-anchor" href="#yarn-问题" aria-label="Permalink to &quot;yarn 问题&quot;">​</a></h1><h2 id="spawn-e2big" tabindex="-1">spawn E2BIG <a class="header-anchor" href="#spawn-e2big" aria-label="Permalink to &quot;spawn E2BIG&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">An</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">unexpected</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">error</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">occurred:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;spawn E2BIG&quot;.</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">error</span><span style="color:#24292E;"> </span><span style="color:#032F62;">An</span><span style="color:#24292E;"> </span><span style="color:#032F62;">unexpected</span><span style="color:#24292E;"> </span><span style="color:#032F62;">error</span><span style="color:#24292E;"> </span><span style="color:#032F62;">occurred:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;spawn E2BIG&quot;.</span></span></code></pre></div><h3 id="问题描述" tabindex="-1">问题描述 <a class="header-anchor" href="#问题描述" aria-label="Permalink to &quot;问题描述&quot;">​</a></h3><ol><li>使用 yarn 启动脚本命令时，报 spawn E2BIG 错误</li></ol><h3 id="问题解决" tabindex="-1">问题解决 <a class="header-anchor" href="#问题解决" aria-label="Permalink to &quot;问题解决&quot;">​</a></h3><ol><li><p>根目录下存在以 notice notice. 命名的文件（删除或者更改名字）；</p></li><li><p>yarn 读取了 notice 文件作为 p<wbr>rocess.env.npm_package_noticeText 环境变量配置；</p></li><li><p>导致设置的 npm_package_noticeText 环境变量长度太大。</p></li></ol>',7),r=[l];function t(p,c,i,d,h,y){return s(),e("div",null,r)}const u=a(o,[["render",t]]);export{_ as __pageData,u as default};
