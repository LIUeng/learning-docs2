import{_ as a,o as e,c as t,Q as o}from"./chunks/framework.0e8ae64e.js";const p=JSON.parse('{"title":"JS 的存储结构","description":"","frontmatter":{},"headers":[],"relativePath":"notes/javascript/storage-struct.md","filePath":"notes/javascript/storage-struct.md","lastUpdated":1670330848000}'),r={name:"notes/javascript/storage-struct.md"},l=o('<h1 id="js-的存储结构" tabindex="-1">JS 的存储结构 <a class="header-anchor" href="#js-的存储结构" aria-label="Permalink to &quot;JS 的存储结构&quot;">​</a></h1><h2 id="栈结构" tabindex="-1">栈结构 <a class="header-anchor" href="#栈结构" aria-label="Permalink to &quot;栈结构&quot;">​</a></h2><h3 id="调用栈" tabindex="-1">调用栈 <a class="header-anchor" href="#调用栈" aria-label="Permalink to &quot;调用栈&quot;">​</a></h3><blockquote><p>管理函数调用的关系的一种数据结构</p></blockquote><h3 id="函数调用" tabindex="-1">函数调用 <a class="header-anchor" href="#函数调用" aria-label="Permalink to &quot;函数调用&quot;">​</a></h3><blockquote><p>运行一个函数，函数名称跟着一对小括号执行</p></blockquote><h3 id="栈" tabindex="-1">栈 <a class="header-anchor" href="#栈" aria-label="Permalink to &quot;栈&quot;">​</a></h3><blockquote><p>一种数据结构，后进先出</p></blockquote><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h3><blockquote><p>在执行上下文创建以后，JavaScript 引擎会将执行上下文压入栈中，把这种管理执行上下文称为执行上下文栈，即调用栈 函数执行完毕之后，JavaScript 引擎会将函数的上下文出栈</p></blockquote><h3 id="栈溢出" tabindex="-1">栈溢出 <a class="header-anchor" href="#栈溢出" aria-label="Permalink to &quot;栈溢出&quot;">​</a></h3><blockquote><p>调用栈是有大小的（容量限制），超过一定数目，就会栈溢出</p></blockquote><h2 id="内存空间" tabindex="-1">内存空间 <a class="header-anchor" href="#内存空间" aria-label="Permalink to &quot;内存空间&quot;">​</a></h2><p>代码空间、栈空间、堆空间</p><blockquote><p>基本原始类型</p></blockquote><p>Number, String, Boolean, Undefined, Null, Symbol, BigInt(存放安全数据，超出范围安全处理)</p><blockquote><p>引用类型</p></blockquote><p>Object</p><h3 id="代码空间" tabindex="-1">代码空间 <a class="header-anchor" href="#代码空间" aria-label="Permalink to &quot;代码空间&quot;">​</a></h3><p>存放可执行代码</p><h3 id="栈空间" tabindex="-1">栈空间 <a class="header-anchor" href="#栈空间" aria-label="Permalink to &quot;栈空间&quot;">​</a></h3><p>基本原始类型数据存放与栈空间中（调用栈）</p><h3 id="堆空间" tabindex="-1">堆空间 <a class="header-anchor" href="#堆空间" aria-label="Permalink to &quot;堆空间&quot;">​</a></h3><p>引用类型存放与堆空间中（存放的是引用地址）</p><h2 id="js-内存管理-变量分配" tabindex="-1">JS 内存管理 变量分配 <a class="header-anchor" href="#js-内存管理-变量分配" aria-label="Permalink to &quot;JS 内存管理 变量分配&quot;">​</a></h2><h3 id="静态区" tabindex="-1">静态区 <a class="header-anchor" href="#静态区" aria-label="Permalink to &quot;静态区&quot;">​</a></h3><ul><li>存放全局变量（基本类型）</li></ul><h3 id="调用栈-1" tabindex="-1">调用栈 <a class="header-anchor" href="#调用栈-1" aria-label="Permalink to &quot;调用栈&quot;">​</a></h3><ul><li>栈中执行上下文（作用域链 = 变量对象、this 指向环境）</li><li>只能读写自己栈帧的内存</li><li>调用栈调用结束自然销毁，实时性高</li></ul><h3 id="堆" tabindex="-1">堆 <a class="header-anchor" href="#堆" aria-label="Permalink to &quot;堆&quot;">​</a></h3><ul><li>对象、数组、函数（引用类型）</li><li>动态的读写</li><li>不具备很高的实时性，由单独的 gc 线程控制</li></ul>',31),i=[l];function h(c,n,s,d,u,b){return e(),t("div",null,i)}const k=a(r,[["render",h]]);export{p as __pageData,k as default};