import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.7c0fadea.js";const E=JSON.parse('{"title":"Linux 链接","description":"","frontmatter":{},"headers":[],"relativePath":"articles/basic/syslink.md","filePath":"articles/basic/syslink.md","lastUpdated":1670330848000}'),p={name:"articles/basic/syslink.md"},o=l(`<h1 id="linux-链接" tabindex="-1">Linux 链接 <a class="header-anchor" href="#linux-链接" aria-label="Permalink to &quot;Linux 链接&quot;">​</a></h1><p>Linux links</p><h2 id="soft-links" tabindex="-1">soft links <a class="header-anchor" href="#soft-links" aria-label="Permalink to &quot;soft links&quot;">​</a></h2><p>软链接，也称符号链接</p><h3 id="定义" tabindex="-1">定义 <a class="header-anchor" href="#定义" aria-label="Permalink to &quot;定义&quot;">​</a></h3><ul><li>在 Linux 系统中，软链接也被称为符号链接，是一种指向不同文件的特殊文件。在 Windows 系统中，可以视为快捷方式。</li><li>连接是逻辑连接，不是重复连接，可以指向整个目录或链接到远程计算机上的文件</li></ul><h3 id="工作" tabindex="-1">工作 <a class="header-anchor" href="#工作" aria-label="Permalink to &quot;工作&quot;">​</a></h3><p>举例说明</p><ol><li>创建文件 xx1(原始文件)，数据所在的位置</li><li>创建软链接 xx3，只指向 xx1 的名称，并不指向硬盘驱动器上的某个位置</li><li>删除原始文件，软链接将会无效</li></ol><h3 id="创建" tabindex="-1">创建 <a class="header-anchor" href="#创建" aria-label="Permalink to &quot;创建&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">ls</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">ln</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-s</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hardlink.txt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">softlink.txt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示 hardlink.txt softlink.txt</span></span>
<span class="line"><span style="color:#B392F0;">ls</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-l</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除原始文件</span></span>
<span class="line"><span style="color:#B392F0;">rm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hardlink.txt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 打开显示错误</span></span>
<span class="line"><span style="color:#B392F0;">cat</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">softlink.txt</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">ls</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">ln</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-s</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hardlink.txt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">softlink.txt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示 hardlink.txt softlink.txt</span></span>
<span class="line"><span style="color:#6F42C1;">ls</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-l</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除原始文件</span></span>
<span class="line"><span style="color:#6F42C1;">rm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hardlink.txt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 打开显示错误</span></span>
<span class="line"><span style="color:#6F42C1;">cat</span><span style="color:#24292E;"> </span><span style="color:#032F62;">softlink.txt</span></span></code></pre></div><h2 id="hard-links" tabindex="-1">hard links <a class="header-anchor" href="#hard-links" aria-label="Permalink to &quot;hard links&quot;">​</a></h2><p>硬链接</p><h3 id="定义-1" tabindex="-1">定义 <a class="header-anchor" href="#定义-1" aria-label="Permalink to &quot;定义&quot;">​</a></h3><ul><li>在 Linux 系统中，硬链接相当于存储在硬盘驱动器中的文件，实际引用或者指向硬盘驱动器上的某个点</li><li>硬链接是原始文件的镜像副本，删除原始文件不影响硬链接，但会导致软链接无法操作</li></ul><h3 id="工作-1" tabindex="-1">工作 <a class="header-anchor" href="#工作-1" aria-label="Permalink to &quot;工作&quot;">​</a></h3><p>举例说明</p><ol><li>硬盘中存在一个文件为 xx1(原始文件)，打开 xx1，可以访问数据，更改硬盘驱动器上的数据，文件也会更改</li><li>创建一个到 xx1 文件的硬链接（新文件 xx2），打开 xx2 数据与 xx1 相同，指向硬盘驱动器上完全相同的位置</li><li>编辑 xx1，xx2 将自动编辑，虽然是独立的文件，但指向硬盘驱动器上完全相同的位置</li><li>删除原始文件 xx1，xx2 完全可行</li></ol><h3 id="创建-1" tabindex="-1">创建 <a class="header-anchor" href="#创建-1" aria-label="Permalink to &quot;创建&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">ls</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">cat</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">xx1.txt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">ln</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">xx1.txt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hardlink.txt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示创建的 xx1.txt hardlink.txt 文件</span></span>
<span class="line"><span style="color:#B392F0;">ls</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-l</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除原始文件</span></span>
<span class="line"><span style="color:#B392F0;">rm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">xx1.txt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 依旧存在</span></span>
<span class="line"><span style="color:#B392F0;">ls</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">ls</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">cat</span><span style="color:#24292E;"> </span><span style="color:#032F62;">xx1.txt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">ln</span><span style="color:#24292E;"> </span><span style="color:#032F62;">xx1.txt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hardlink.txt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示创建的 xx1.txt hardlink.txt 文件</span></span>
<span class="line"><span style="color:#6F42C1;">ls</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-l</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除原始文件</span></span>
<span class="line"><span style="color:#6F42C1;">rm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">xx1.txt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 依旧存在</span></span>
<span class="line"><span style="color:#6F42C1;">ls</span></span></code></pre></div><h2 id="区别" tabindex="-1">区别 <a class="header-anchor" href="#区别" aria-label="Permalink to &quot;区别&quot;">​</a></h2><blockquote><p>本质上是在硬盘驱动器上引用文件的两种不同方式，硬链接指向文件本身（确切位置），软链接指向文件名（名称）</p></blockquote><blockquote><p>软链接是一个指向文件的指针，硬链接依然占据空间</p></blockquote>`,23),e=[o];function t(c,i,r,h,x,y){return a(),n("div",null,e)}const k=s(p,[["render",t]]);export{E as __pageData,k as default};
