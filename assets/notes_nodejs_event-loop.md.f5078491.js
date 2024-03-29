import{_ as e,o as l,c as a,Q as s}from"./chunks/framework.0e8ae64e.js";const k=JSON.parse('{"title":"Nodejs 事件循环","description":"","frontmatter":{},"headers":[],"relativePath":"notes/nodejs/event-loop.md","filePath":"notes/nodejs/event-loop.md","lastUpdated":1698285484000}'),i={name:"notes/nodejs/event-loop.md"},t=s(`<h1 id="nodejs-事件循环" tabindex="-1">Nodejs 事件循环 <a class="header-anchor" href="#nodejs-事件循环" aria-label="Permalink to &quot;Nodejs 事件循环&quot;">​</a></h1><h2 id="理解" tabindex="-1">理解 <a class="header-anchor" href="#理解" aria-label="Permalink to &quot;理解&quot;">​</a></h2><h3 id="非阻塞-i-o-操作的设计机制" tabindex="-1">非阻塞 I/O 操作的设计机制 <a class="header-anchor" href="#非阻塞-i-o-操作的设计机制" aria-label="Permalink to &quot;非阻塞 I/O 操作的设计机制&quot;">​</a></h3><ul><li>Timer: 定时器运行 setTimeout setInterval</li><li>Pending Callback: 挂起的回调，执行延迟到下一个循环迭代的 I/O 回调(TCP 的错误处理延迟到这里执行)</li><li>Idle, Prepare: 仅在内部使用</li><li>Poll: 轮询，检索新的 I/O 事件，执行与 I/O 相关的回调（计时器和 setImmediated()调度之外） <ul><li>计算应该阻塞和轮询 I/O 的时间</li><li>处理轮询队列中的事件（没有被调度的计时器时） <ul><li>轮询队列为空 <ul><li>如果脚本被 setImmediate() 调度，则事件结束轮询阶段，并到 Check 阶段继续执行 setImmediate() 调度的脚本</li><li>未被 setImmediate() 调度，则事件循环将等待回调被添加到队列中，然后立即执行</li></ul></li><li>轮询队列不为空 <ul><li>事件循环将循环访问回调队列并执行他们，直到队列用尽，或者达到了与系统相关的硬性限制</li></ul></li></ul></li></ul></li><li>Check: setImmeidate 检查是否执行</li><li>Close Callback: 关闭的回调函数（socket.on(&#39;close))</li></ul><h3 id="process-nexttick-又是如何执行" tabindex="-1">process.nextTick 又是如何执行？ <a class="header-anchor" href="#process-nexttick-又是如何执行" aria-label="Permalink to &quot;process.nextTick 又是如何执行？&quot;">​</a></h3><ul><li>异步 API</li></ul><blockquote><p>任何时候再给定的阶段中调用 process.nextTick()，所以传递到 process.nextTick() 的回调将在事件循环继续之前解析。</p></blockquote><ul><li>造成任务饿死</li></ul><p>一直调用 process.nextTick() 从而导致事件循环无法到达轮询阶段（递归调用 process.nextTick() 不允许超过 V8 的最大调用堆栈大小）</p><div class="tip custom-block"><p class="custom-block-title">事件循环图</p><p>┌───────────────────────────┐ ┌─&gt;│ timers │ │ └─────────────┬─────────────┘ │ ┌─────────────┴─────────────┐ │ │ pending callbacks │ │ └─────────────┬─────────────┘ │ ┌─────────────┴─────────────┐ │ │ idle, prepare │ │ └─────────────┬─────────────┘ ┌───────────────┐ │ ┌─────────────┴─────────────┐ │ incoming: │ │ │ poll │&lt;─────┤ connections, │ │ └─────────────┬─────────────┘ │ data, etc. │ │ ┌─────────────┴─────────────┐ └───────────────┘ │ │ check │ │ └─────────────┬─────────────┘ │ ┌─────────────┴─────────────┐ └──┤ close callbacks │ └───────────────────────────┘</p></div><h2 id="定时器-timers" tabindex="-1">定时器 timers <a class="header-anchor" href="#定时器-timers" aria-label="Permalink to &quot;定时器 timers&quot;">​</a></h2><p>本阶段执行已经被 setTimeout() 和 setInterval() 的调度回调函数</p><ul><li>执行所提供的回调的阈值，而不是用户希望其执行的确切时间（计时器回调尽可能早的运行，但是操作系统调度或其它正在运行的回调可能会存在延迟）</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 100ms !== 阈值</span></span>
<span class="line"><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">() {}, </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 100ms !== 阈值</span></span>
<span class="line"><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;">() {}, </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">);</span></span></code></pre></div><ul><li>轮询阶段控制何时定时器执行</li></ul><h2 id="待定的回调-pending-callbacks" tabindex="-1">待定的回调 pending callbacks <a class="header-anchor" href="#待定的回调-pending-callbacks" aria-label="Permalink to &quot;待定的回调 pending callbacks&quot;">​</a></h2><p>执行延迟到下一个循环迭代的 I/O 回调</p><ul><li>挂起的回调函数（持续连接 TCP 套接字在尝试连接时接收到 <code>ECONNREFUSED</code>)</li></ul><h2 id="idle-prepare" tabindex="-1">idle prepare <a class="header-anchor" href="#idle-prepare" aria-label="Permalink to &quot;idle prepare&quot;">​</a></h2><p>系统内部使用</p><h2 id="轮询-poll" tabindex="-1">轮询 poll <a class="header-anchor" href="#轮询-poll" aria-label="Permalink to &quot;轮询 poll&quot;">​</a></h2><p>检索新的 I/O 事件，执行与 I/O 相关的回调（几乎所有情况下，除了关闭的回调函数，计时器和 setImmediate() 调度的之外）其余情况 node 将在适当的时候阻塞</p><ul><li><p>计算应该阻塞和轮询 I/O 的时间</p></li><li><p>处理轮询队列里的事件</p><ul><li>轮询队列不为空，事件循环将循环访问回调队列并同步执行他们，直到队列为空，或者达到了与系统相关的硬性限制</li><li>轮询队列为空，如果脚本被 setImmediate() 调度，则事件循环将结束轮询阶段，并继续检查阶段以执行哪些被调度的脚本；如果脚本未被 setImmediate() 调度，则事件循环将等待回调被添加到队列中，然后立即执行</li></ul></li><li><p>一旦轮询队列为空，事件循环将检查已达到阈值的计时器，如果一个或多个计时器已准备就绪，则事件循环将绕回计时器阶段以执行计时器回调</p></li></ul><h2 id="检测-check" tabindex="-1">检测 check <a class="header-anchor" href="#检测-check" aria-label="Permalink to &quot;检测 check&quot;">​</a></h2><p>setImmediate() 回调函数在这里执行</p><ul><li>轮询阶段完成后立即执行回调，轮询阶段变为空闲状态，脚本使用 setImmediate() 后被排列在队列中，则事件循环可能继续到检查阶段而不是等待</li><li>setImmediate() 事件循环中的单独阶段运行的特殊及时器（libuv API 安排回调在轮询阶段完成后立即执行）</li></ul><h2 id="关闭的回调函数-close-callbacks" tabindex="-1">关闭的回调函数 close callbacks <a class="header-anchor" href="#关闭的回调函数-close-callbacks" aria-label="Permalink to &quot;关闭的回调函数 close callbacks&quot;">​</a></h2><p>一些关闭的回调函数 socket.o(&#39;close&#39;, ...)</p><ul><li>套接字或处理函数关闭（socket.destroy())，close 事件在这个阶段发出，否则（process.nextTick()) 发出</li></ul><h2 id="settimeout-vs-setimmediate" tabindex="-1">setTimeout() VS setImmediate() <a class="header-anchor" href="#settimeout-vs-setimmediate" aria-label="Permalink to &quot;setTimeout() VS setImmediate()&quot;">​</a></h2><ul><li>setImmediate() 一旦在当前轮询阶段完成，就执行脚本</li><li>setTimeout() 轮询阶段计算出来的阈值（ms）过后运行脚本</li></ul><ol><li>主模块中运行（非确定性）</li><li>运行在 I/O 循环内调用，setImmediate 总是被优先调用</li></ol><h2 id="process-nexttick" tabindex="-1">process.nextTick <a class="header-anchor" href="#process-nexttick" aria-label="Permalink to &quot;process.nextTick&quot;">​</a></h2><ul><li><p>不是事件循环的一部分，在当前操作完成后处理 nextTickQueue，<code>允许通过递归调用来阻止I/O，阻止事件到达轮询阶段</code></p></li><li><p>保证用户代码的其余部分之后在让事件循环继续进行之前，执行其回调函数</p></li><li><p>回调置于 process.nextTick() 中，脚本仍具有运行完成的能力，允许在调用回调之前初始化所有的变量、函数</p></li><li><p>不让事件循环继续的优点，适用于让事件循环继续之前，警告用户发生错误的情况</p></li></ul><h3 id="process-nexttick-vs-setimmediate" tabindex="-1">process.nextTick() VS setImmediate() <a class="header-anchor" href="#process-nexttick-vs-setimmediate" aria-label="Permalink to &quot;process.nextTick() VS setImmediate()&quot;">​</a></h3><ul><li>process.nextTick() 在同一个阶段立即执行</li><li>setImmeidate() 在事件循环的接下来的 tick 上触发</li></ul><h3 id="为什么使用-process-nexttick" tabindex="-1">为什么使用 process.nextTick() <a class="header-anchor" href="#为什么使用-process-nexttick" aria-label="Permalink to &quot;为什么使用 process.nextTick()&quot;">​</a></h3><ol><li>允许用户处理错误，清理任何不需要的资源，或者在事件循环继续之前重试请求</li><li>让回调在栈展开后，但在事件循环继续之前运行的必要</li></ol>`,38),o=[t];function c(n,r,p,d,h,u){return l(),a("div",null,o)}const b=e(i,[["render",c]]);export{k as __pageData,b as default};