import{_ as a,o as e,c as t,Q as s}from"./chunks/framework.0e8ae64e.js";const i="/assets/images/time-complex.jpg",l="/assets/images/f(n).jpg",f=JSON.parse('{"title":"大 O 表示法","description":"","frontmatter":{},"headers":[],"relativePath":"alogrithm/basic/O.md","filePath":"alogrithm/basic/O.md","lastUpdated":1670379203000}'),o={name:"alogrithm/basic/O.md"},c=s('<h1 id="大-o-表示法" tabindex="-1">大 O 表示法 <a class="header-anchor" href="#大-o-表示法" aria-label="Permalink to &quot;大 O 表示法&quot;">​</a></h1><ul><li><p>所有代码执行的时间 T(n)与每行代码执行次数 n 成正比</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">T(n) = O(f(n))</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">T(n) = O(f(n))</span></span></code></pre></div></li></ul><h2 id="时间复杂度" tabindex="-1">时间复杂度 <a class="header-anchor" href="#时间复杂度" aria-label="Permalink to &quot;时间复杂度&quot;">​</a></h2><p><code>大O表示的并不是程序执行的时间，而是代码执行时间随着数据增长的变化趋势，渐进时间复杂度</code></p><ol><li>只关注循环最多的那一段代码</li><li>加法法则：总复杂度等于量级最大的那段代码的复杂度</li><li>乘法法则：嵌套代码的复杂度等于嵌套内外复杂度的乘积</li></ol><img src="'+i+'" alt="时间复杂度图"><h2 id="空间复杂度" tabindex="-1">空间复杂度 <a class="header-anchor" href="#空间复杂度" aria-label="Permalink to &quot;空间复杂度&quot;">​</a></h2><p><code>算法的执行时间与数据规模之间的增长关系，渐进空间复杂度</code></p><img src="'+l+'" alt="时间复杂度图"><ul><li>最好情况时间复杂度</li><li>最坏情况时间复杂度</li><li>平均情况时间复杂度</li><li>均摊时间复杂度</li></ul>',10),n=[c];function r(p,d,h,_,m,u){return e(),t("div",null,n)}const b=a(o,[["render",r]]);export{f as __pageData,b as default};