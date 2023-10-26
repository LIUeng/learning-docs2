import{_ as a,o as t,c as e,Q as d}from"./chunks/framework.7c0fadea.js";const u=JSON.parse('{"title":"IP 地址","description":"","frontmatter":{},"headers":[],"relativePath":"network/ip_addr.md","filePath":"network/ip_addr.md","lastUpdated":1670330848000}'),r={name:"network/ip_addr.md"},o=d('<h1 id="ip-地址" tabindex="-1">IP 地址 <a class="header-anchor" href="#ip-地址" aria-label="Permalink to &quot;IP 地址&quot;">​</a></h1><p>(Internet Protocol Address)互联网协议地址，网际协议地址</p><h2 id="ip-协议" tabindex="-1">IP 协议 <a class="header-anchor" href="#ip-协议" aria-label="Permalink to &quot;IP 协议&quot;">​</a></h2><p>计算机网络相互连接进行通信而设计的协议</p><h2 id="ip-地址-1" tabindex="-1">IP 地址 <a class="header-anchor" href="#ip-地址-1" aria-label="Permalink to &quot;IP 地址&quot;">​</a></h2><p>唯一地址</p><h2 id="ip-地址类型" tabindex="-1">IP 地址类型 <a class="header-anchor" href="#ip-地址类型" aria-label="Permalink to &quot;IP 地址类型&quot;">​</a></h2><h3 id="公有地址" tabindex="-1">公有地址 <a class="header-anchor" href="#公有地址" aria-label="Permalink to &quot;公有地址&quot;">​</a></h3><p>权威机构</p><h3 id="私有地址" tabindex="-1">私有地址 <a class="header-anchor" href="#私有地址" aria-label="Permalink to &quot;私有地址&quot;">​</a></h3><p>A 类 10.0.0.0--10.255.255.255 B 类 172.16.0.0--172.31.255.255 C 类 192.168.0.0--192.168.255.255</p><p>D、E 类为特殊地址</p><h2 id="ip-地址编址方式" tabindex="-1">IP 地址编址方式 <a class="header-anchor" href="#ip-地址编址方式" aria-label="Permalink to &quot;IP 地址编址方式&quot;">​</a></h2><table><thead><tr><th>类别</th><th>最大网络数</th><th>IP 地址范围</th><th>单个网段最大主机数</th><th>私有 IP 地址范围</th></tr></thead><tbody><tr><td>A</td><td>126(2^7-2)</td><td>1.0.0.1-127.255.255.254</td><td>16777214</td><td>10.0.0.0-10.255.255.255</td></tr><tr><td>B</td><td>16384(2^14)</td><td>128.0.0.1-191.255.255.254</td><td>65534</td><td>172.16.0.0-172.31.255.255</td></tr><tr><td>C</td><td>2097152(2^21)</td><td>192.0.0.1-223.255.255.254</td><td>254</td><td>192.168.0.0-192.168.255.255</td></tr></tbody></table><h3 id="a-类地址" tabindex="-1">A 类地址 <a class="header-anchor" href="#a-类地址" aria-label="Permalink to &quot;A 类地址&quot;">​</a></h3><p>1 字节的网络地址 + 3 字节主机地址 <code>网络地址的最高位必须为 0</code></p><h3 id="b-类地址" tabindex="-1">B 类地址 <a class="header-anchor" href="#b-类地址" aria-label="Permalink to &quot;B 类地址&quot;">​</a></h3><p>2 字节的网络地址 + 2 字节主机地址 <code>网络地址的最高位必须为 10</code></p><h3 id="c-类地址" tabindex="-1">C 类地址 <a class="header-anchor" href="#c-类地址" aria-label="Permalink to &quot;C 类地址&quot;">​</a></h3><p>3 字节的网络地址 + 1 字节的主机地址 <code>网络地址的最高位必须为 110</code></p><h3 id="d-类地址" tabindex="-1">D 类地址 <a class="header-anchor" href="#d-类地址" aria-label="Permalink to &quot;D 类地址&quot;">​</a></h3><p>多播地址，也称组播地址（<code>多播地址的最高位必须为 1110</code> === 224.0.0.0 - 239.255.255.255）</p><h3 id="e-类地址" tabindex="-1">E 类地址 <a class="header-anchor" href="#e-类地址" aria-label="Permalink to &quot;E 类地址&quot;">​</a></h3><p>试验用处 <code>最高位必须为 1111</code></p><h3 id="特殊的网址" tabindex="-1">特殊的网址 <a class="header-anchor" href="#特殊的网址" aria-label="Permalink to &quot;特殊的网址&quot;">​</a></h3><ol><li>每一个字节都为 0 的地址（0.0.0.0）对应于当前主机</li><li>IP 地址中的每一个字节都为 1 的 IP 地址（255．255．255．255）是当前子网的广播地址</li><li>IP 地址中凡是以 11110 开头的 E 类 IP 地址都保留用于将来和实验使用</li><li>IP 地址中不能以十进制 127 作为开头，该类地址中数字 127．0．0．1 到 127．255．255．255 用于回路测试，如：127.0.0.1 可以代表本机 IP 地址，用 127.0.0.1 就可以测试本机中配置的 Web 服务器</li><li>网络 ID 的第一个 6 位组也不能全置为 0，全 0 表示本地网络</li></ol><h2 id="ip-地址的分配" tabindex="-1">IP 地址的分配 <a class="header-anchor" href="#ip-地址的分配" aria-label="Permalink to &quot;IP 地址的分配&quot;">​</a></h2><p>TCP/IP 协议需要针对不同的网络进行不同的设置，且每个节点一般需要一个 IP 地址、一个子网掩码、一个默认网关</p>',28),i=[o];function h(l,n,c,p,s,P){return t(),e("div",null,i)}const _=a(r,[["render",h]]);export{u as __pageData,_ as default};
