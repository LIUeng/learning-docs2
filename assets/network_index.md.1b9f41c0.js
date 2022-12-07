import{_ as s,c as a,o as n,a as t}from"./app.6c26ea93.js";const y=JSON.parse('{"title":"\u7F51\u7EDC\u534F\u8BAE","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5E38\u89C1\u7F51\u7EDC\u534F\u8BAE","slug":"\u5E38\u89C1\u7F51\u7EDC\u534F\u8BAE","link":"#\u5E38\u89C1\u7F51\u7EDC\u534F\u8BAE","children":[]},{"level":2,"title":"IP \u5730\u5740","slug":"ip-\u5730\u5740","link":"#ip-\u5730\u5740","children":[{"level":3,"title":"IPv4","slug":"ipv4","link":"#ipv4","children":[]},{"level":3,"title":"IPv6","slug":"ipv6","link":"#ipv6","children":[]},{"level":3,"title":"IP \u5730\u5740\u5982\u4F55\u8BA1\u7B97\u5E7F\u64AD\u5730\u5740\u3001\u5B50\u7F51\u63A9\u7801","slug":"ip-\u5730\u5740\u5982\u4F55\u8BA1\u7B97\u5E7F\u64AD\u5730\u5740\u3001\u5B50\u7F51\u63A9\u7801","link":"#ip-\u5730\u5740\u5982\u4F55\u8BA1\u7B97\u5E7F\u64AD\u5730\u5740\u3001\u5B50\u7F51\u63A9\u7801","children":[]}]},{"level":2,"title":"MAC \u5730\u5740","slug":"mac-\u5730\u5740","link":"#mac-\u5730\u5740","children":[]},{"level":2,"title":"\u7F51\u7EDC\u8BBE\u5907\u7684\u72B6\u6001\u6807\u8BC6","slug":"\u7F51\u7EDC\u8BBE\u5907\u7684\u72B6\u6001\u6807\u8BC6","link":"#\u7F51\u7EDC\u8BBE\u5907\u7684\u72B6\u6001\u6807\u8BC6","children":[]}],"relativePath":"network/index.md"}'),l={name:"network/index.md"},p=t(`<h1 id="\u7F51\u7EDC\u534F\u8BAE" tabindex="-1">\u7F51\u7EDC\u534F\u8BAE <a class="header-anchor" href="#\u7F51\u7EDC\u534F\u8BAE" aria-hidden="true">#</a></h1><h2 id="\u5E38\u89C1\u7F51\u7EDC\u534F\u8BAE" tabindex="-1">\u5E38\u89C1\u7F51\u7EDC\u534F\u8BAE <a class="header-anchor" href="#\u5E38\u89C1\u7F51\u7EDC\u534F\u8BAE" aria-hidden="true">#</a></h2><table><thead><tr><th>\u67B6\u6784</th><th>\u7F51\u7EDC\u534F\u8BAE\u4F8B\u5B50</th></tr></thead><tbody><tr><td>\u5E94\u7528\u5C42</td><td>DHCP HTTP HTTPS RTMP P2P DNS GTP RPC</td></tr><tr><td>\u4F20\u8F93\u5C42</td><td>UDP TCP</td></tr><tr><td>\u7F51\u7EDC\u5C42</td><td>ICMP IP OSPF BGP IPSec GRE</td></tr><tr><td>\u94FE\u8DEF\u5C42</td><td>ARP VLAN STP</td></tr><tr><td>\u7269\u7406\u5C42</td><td>\u7F51\u7EDC\u8DF3\u7EBF</td></tr></tbody></table><h2 id="ip-\u5730\u5740" tabindex="-1">IP \u5730\u5740 <a class="header-anchor" href="#ip-\u5730\u5740" aria-hidden="true">#</a></h2><blockquote><p>ifconfig/ipconfig</p></blockquote><p>mac ifconfig</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">lo0: flags=</span><span style="color:#89DDFF;">8049&lt;</span><span style="color:#A6ACCD;">UP,LOOPBACK,RUNNING,MULTICAST</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> mtu 16384</span></span>
<span class="line"><span style="color:#A6ACCD;">	options=</span><span style="color:#89DDFF;">1203&lt;</span><span style="color:#A6ACCD;">RXCSUM,TXCSUM,TXSTATUS,SW_TIMESTAMP</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	inet 127.0.0.1 netmask 0xff000000</span></span>
<span class="line"><span style="color:#A6ACCD;">	inet6 ::1 prefixlen 128</span></span>
<span class="line"><span style="color:#A6ACCD;">	inet6 fe80::1%lo0 prefixlen 64 scopeid 0x1</span></span>
<span class="line"><span style="color:#A6ACCD;">	nd6 options=</span><span style="color:#89DDFF;">201&lt;</span><span style="color:#A6ACCD;">PERFORMNUD,DAD</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">gif0: flags=</span><span style="color:#89DDFF;">8010&lt;</span><span style="color:#A6ACCD;">POINTOPOINT,MULTICAST</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> mtu 1280</span></span>
<span class="line"><span style="color:#A6ACCD;">stf0: flags=</span><span style="color:#89DDFF;">0&lt;&gt;</span><span style="color:#A6ACCD;"> mtu 1280</span></span>
<span class="line"><span style="color:#A6ACCD;">XHC20: flags=</span><span style="color:#89DDFF;">0&lt;&gt;</span><span style="color:#A6ACCD;"> mtu 0</span></span>
<span class="line"><span style="color:#A6ACCD;">en0: flags=</span><span style="color:#89DDFF;">8863&lt;</span><span style="color:#A6ACCD;">UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> mtu 1500</span></span>
<span class="line"><span style="color:#A6ACCD;">	options=</span><span style="color:#89DDFF;">400&lt;</span><span style="color:#A6ACCD;">CHANNEL_IO</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	ether 98:01:a7:a5:e7:01</span></span>
<span class="line"><span style="color:#A6ACCD;">	inet6 fe80::149c:8a3c:d2d:2d7c%en0 prefixlen 64 secured scopeid 0x5</span></span>
<span class="line"><span style="color:#A6ACCD;">	inet 192.168.63.83 netmask 0xffffff00 broadcast 192.168.63.255</span></span>
<span class="line"><span style="color:#A6ACCD;">	nd6 options=</span><span style="color:#89DDFF;">201&lt;</span><span style="color:#A6ACCD;">PERFORMNUD,DAD</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	media: autoselect</span></span>
<span class="line"><span style="color:#A6ACCD;">	status: active</span></span>
<span class="line"><span style="color:#A6ACCD;">en1: flags=</span><span style="color:#89DDFF;">8963&lt;</span><span style="color:#A6ACCD;">UP,BROADCAST,SMART,RUNNING,PROMISC,SIMPLEX,MULTICAST</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> mtu 1500</span></span>
<span class="line"><span style="color:#A6ACCD;">	options=</span><span style="color:#89DDFF;">460&lt;</span><span style="color:#A6ACCD;">TSO4,TSO6,CHANNEL_IO</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	ether 82:13:1a:8c:29:c0</span></span>
<span class="line"><span style="color:#A6ACCD;">	media: autoselect </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">full-duplex</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	status: inactive</span></span>
<span class="line"><span style="color:#A6ACCD;">en2: flags=</span><span style="color:#89DDFF;">8963&lt;</span><span style="color:#A6ACCD;">UP,BROADCAST,SMART,RUNNING,PROMISC,SIMPLEX,MULTICAST</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> mtu 1500</span></span>
<span class="line"><span style="color:#A6ACCD;">	options=</span><span style="color:#89DDFF;">460&lt;</span><span style="color:#A6ACCD;">TSO4,TSO6,CHANNEL_IO</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	ether 82:13:1a:8c:29:c1</span></span>
<span class="line"><span style="color:#A6ACCD;">	media: autoselect </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">full-duplex</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	status: inactive</span></span>
<span class="line"><span style="color:#A6ACCD;">bridge0: flags=</span><span style="color:#89DDFF;">8863&lt;</span><span style="color:#A6ACCD;">UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> mtu 1500</span></span>
<span class="line"><span style="color:#A6ACCD;">	options=</span><span style="color:#89DDFF;">63&lt;</span><span style="color:#A6ACCD;">RXCSUM,TXCSUM,TSO4,TSO</span><span style="color:#89DDFF;">6&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	ether 82:13:1a:8c:29:c0</span></span>
<span class="line"><span style="color:#A6ACCD;">	Configuration:</span></span>
<span class="line"><span style="color:#A6ACCD;">		id 0:0:0:0:0:0 priority 0 hellotime 0 fwddelay 0</span></span>
<span class="line"><span style="color:#A6ACCD;">		maxage 0 holdcnt 0 proto stp maxaddr 100 timeout 1200</span></span>
<span class="line"><span style="color:#A6ACCD;">		root id 0:0:0:0:0:0 priority 0 ifcost 0 port 0</span></span>
<span class="line"><span style="color:#A6ACCD;">		ipfilter disabled flags 0x2</span></span>
<span class="line"><span style="color:#A6ACCD;">	member: en1 flags=</span><span style="color:#89DDFF;">3&lt;</span><span style="color:#A6ACCD;">LEARNING,DISCOVER</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	        ifmaxaddr 0 port 6 priority 0 path cost 0</span></span>
<span class="line"><span style="color:#A6ACCD;">	member: en2 flags=</span><span style="color:#89DDFF;">3&lt;</span><span style="color:#A6ACCD;">LEARNING,DISCOVER</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	        ifmaxaddr 0 port 7 priority 0 path cost 0</span></span>
<span class="line"><span style="color:#A6ACCD;">	nd6 options=</span><span style="color:#89DDFF;">201&lt;</span><span style="color:#A6ACCD;">PERFORMNUD,DAD</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	media: </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">unknown type</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	status: inactive</span></span>
<span class="line"><span style="color:#A6ACCD;">p2p0: flags=</span><span style="color:#89DDFF;">8843&lt;</span><span style="color:#A6ACCD;">UP,BROADCAST,RUNNING,SIMPLEX,MULTICAST</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> mtu 2304</span></span>
<span class="line"><span style="color:#A6ACCD;">	options=</span><span style="color:#89DDFF;">400&lt;</span><span style="color:#A6ACCD;">CHANNEL_IO</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	ether 0a:01:a7:a5:e7:01</span></span>
<span class="line"><span style="color:#A6ACCD;">	media: autoselect</span></span>
<span class="line"><span style="color:#A6ACCD;">	status: inactive</span></span>
<span class="line"><span style="color:#A6ACCD;">awdl0: flags=</span><span style="color:#89DDFF;">8943&lt;</span><span style="color:#A6ACCD;">UP,BROADCAST,RUNNING,PROMISC,SIMPLEX,MULTICAST</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> mtu 1484</span></span>
<span class="line"><span style="color:#A6ACCD;">	options=</span><span style="color:#89DDFF;">400&lt;</span><span style="color:#A6ACCD;">CHANNEL_IO</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	ether 7a:f8:70:1a:9f:49</span></span>
<span class="line"><span style="color:#A6ACCD;">	inet6 fe80::78f8:70ff:fe1a:9f49%awdl0 prefixlen 64 scopeid 0xa</span></span>
<span class="line"><span style="color:#A6ACCD;">	nd6 options=</span><span style="color:#89DDFF;">201&lt;</span><span style="color:#A6ACCD;">PERFORMNUD,DAD</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	media: autoselect</span></span>
<span class="line"><span style="color:#A6ACCD;">	status: active</span></span>
<span class="line"><span style="color:#A6ACCD;">llw0: flags=</span><span style="color:#89DDFF;">8863&lt;</span><span style="color:#A6ACCD;">UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> mtu 1500</span></span>
<span class="line"><span style="color:#A6ACCD;">	options=</span><span style="color:#89DDFF;">400&lt;</span><span style="color:#A6ACCD;">CHANNEL_IO</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	ether 7a:f8:70:1a:9f:49</span></span>
<span class="line"><span style="color:#A6ACCD;">	inet6 fe80::78f8:70ff:fe1a:9f49%llw0 prefixlen 64 scopeid 0xb</span></span>
<span class="line"><span style="color:#A6ACCD;">	nd6 options=</span><span style="color:#89DDFF;">201&lt;</span><span style="color:#A6ACCD;">PERFORMNUD,DAD</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	media: autoselect</span></span>
<span class="line"><span style="color:#A6ACCD;">	status: active</span></span>
<span class="line"><span style="color:#A6ACCD;">utun0: flags=</span><span style="color:#89DDFF;">8051&lt;</span><span style="color:#A6ACCD;">UP,POINTOPOINT,RUNNING,MULTICAST</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> mtu 1380</span></span>
<span class="line"><span style="color:#A6ACCD;">	inet6 fe80::9f78:3a44:b57b:ea9d%utun0 prefixlen 64 scopeid 0xc</span></span>
<span class="line"><span style="color:#A6ACCD;">	nd6 options=</span><span style="color:#89DDFF;">201&lt;</span><span style="color:#A6ACCD;">PERFORMNUD,DAD</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">utun1: flags=</span><span style="color:#89DDFF;">8051&lt;</span><span style="color:#A6ACCD;">UP,POINTOPOINT,RUNNING,MULTICAST</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> mtu 2000</span></span>
<span class="line"><span style="color:#A6ACCD;">	inet6 fe80::db9a:b93a:b24c:5234%utun1 prefixlen 64 scopeid 0xd</span></span>
<span class="line"><span style="color:#A6ACCD;">	nd6 options=</span><span style="color:#89DDFF;">201&lt;</span><span style="color:#A6ACCD;">PERFORMNUD,DAD</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="ipv4" tabindex="-1">IPv4 <a class="header-anchor" href="#ipv4" aria-hidden="true">#</a></h3><p>192.0.0.1 \u5206\u9694\u56DB\u4E2A\u90E8\u5206 \u6BCF\u4E2A\u90E8\u5206 8 \u4F4D 32 \u4F4D</p><blockquote><p>32 \u4F4D\u7684 IP \u5730\u5740\u5206\u914D\u5730\u5740 5 \u7C7B</p></blockquote><table><thead><tr><th>\u7C7B\u522B</th><th>\u524D\u51E0\u4F4D</th><th>\u7F51\u7EDC\u53F7</th><th>\u4E3B\u673A\u53F7</th></tr></thead><tbody><tr><td>A \u7C7B</td><td>0</td><td>7 \u4F4D</td><td>24 \u4F4D</td></tr><tr><td>B \u7C7B</td><td>1 0</td><td>14 \u4F4D</td><td>16 \u4F4D</td></tr><tr><td>C \u7C7B</td><td>1 1 0</td><td>21 \u4F4D</td><td>8 \u4F4D</td></tr><tr><td>D \u7C7B</td><td>1 1 1 0</td><td>\u591A\u64AD\u7EC4\u53F7 28 \u4F4D</td><td></td></tr><tr><td>E \u7C7B</td><td>1 1 1 1 0</td><td>\u7559\u5F85\u540E\u7528\uFF0827 \u4F4D\uFF09</td><td></td></tr></tbody></table><blockquote><p>A B C \u4E09\u7C7B\u5730\u5740\u5305\u542B\u7684\u4E3B\u673A\u6570\u91CF</p></blockquote><table><thead><tr><th>\u7C7B\u522B</th><th>IP \u5730\u5740\u8303\u56F4</th><th>\u6700\u5927\u4E3B\u673A\u6570</th><th>\u79C1\u6709 IP \u5730\u5740\u8303\u56F4</th></tr></thead><tbody><tr><td>A</td><td>0.0.0.0-127.255.255.255</td><td>16777214</td><td>10.0.0.0-10.255.255.255</td></tr><tr><td>B</td><td>128.0.0.0-191.255.255.255</td><td>65534</td><td>172.16.0.0-172.31.255.255</td></tr><tr><td>C</td><td>192.0.0.0-223.255.255.255</td><td>254</td><td>192.168.0.0-192.168.255.255</td></tr></tbody></table><blockquote><p>\u65E0\u7C7B\u578B\u57DF\u95F4\u9009\u8DEF CIDR</p></blockquote><p><code>32\u4F4D\u7684IP\u5730\u5740\u4E00\u5206\u4E3A\u4E8C\uFF0C\u524D\u9762\u662F\u7F51\u7EDC\u53F7\uFF0C\u540E\u9762\u662F\u4E3B\u673A\u53F7</code></p><ul><li>10.100.122.2/24 =&gt; \u7C7B\u4F3C\u8FD9\u79CD\u5F62\u5F0F CIDR =&gt; 32 \u4F4D\u4E2D\uFF0C\u524D 24 \u4F4D\u662F\u7F51\u7EDC\u53F7\uFF0C\u540E 8 \u4F4D\u662F\u4E3B\u673A\u53F7</li><li>\u5E7F\u64AD\u5730\u5740 \u540C\u4E00\u7F51\u7EDC\u53F7\u91CC\u9762\u7684\u673A\u5668\u90FD\u80FD\u6536\u5230</li><li>\u5B50\u7F51\u63A9\u7801 255.255.255.0</li></ul><div class="tip custom-block"><p class="custom-block-title">\u7F51\u7EDC\u53F7\u7684\u8BA1\u7B97</p><p>\u5B50\u7F51\u63A9\u7801\u548C IP \u5730\u5740\u6309\u4F4D\u8BA1\u7B97 AND</p></div><blockquote><p>D \u7C7B\u5730\u5740</p></blockquote><ul><li>\u7EC4\u64AD\u5730\u5740\uFF1A\u67D0\u4E2A\u7EC4\u7684\u673A\u5668\u90FD\u80FD\u6536\u5230</li><li>eth0 \u7F51\u5361 global =&gt; \u53EF\u4EE5\u5BF9\u5916\uFF0C\u53EF\u4EE5\u63A5\u6536\u6765\u81EA\u5404\u4E2A\u5730\u65B9\u7684\u5305</li><li>lo host \u672C\u673A\u76F8\u4E92\u901A\u4FE1 <ul><li>loopback \u73AF\u56DE\u63A5\u53E3</li><li>127.0.0.1</li></ul></li></ul><h3 id="ipv6" tabindex="-1">IPv6 <a class="header-anchor" href="#ipv6" aria-hidden="true">#</a></h3><p>128 \u4F4D</p><h3 id="ip-\u5730\u5740\u5982\u4F55\u8BA1\u7B97\u5E7F\u64AD\u5730\u5740\u3001\u5B50\u7F51\u63A9\u7801" tabindex="-1">IP \u5730\u5740\u5982\u4F55\u8BA1\u7B97\u5E7F\u64AD\u5730\u5740\u3001\u5B50\u7F51\u63A9\u7801 <a class="header-anchor" href="#ip-\u5730\u5740\u5982\u4F55\u8BA1\u7B97\u5E7F\u64AD\u5730\u5740\u3001\u5B50\u7F51\u63A9\u7801" aria-hidden="true">#</a></h3><p>???</p><h2 id="mac-\u5730\u5740" tabindex="-1">MAC \u5730\u5740 <a class="header-anchor" href="#mac-\u5730\u5740" aria-hidden="true">#</a></h2><p>\u7F51\u5361\u7684\u7269\u7406\u5730\u5740\uFF0C\u5341\u516D\u8FDB\u5236\uFF0C6 \u4E2A byte \u8868\u793A</p><ul><li>MAC \u5730\u5740\u53F7\u5168\u5C40\u552F\u4E00\uFF08\u7F51\u5361\u751F\u4EA7\u51FA\u6765\u5C31\u5E26\u7740\u8FD9\u4E2A\u5730\u5740\uFF09</li><li>\u4E00\u4E2A\u7F51\u7EDC\u5305\u4ECE\u4E00\u4E2A\u5730\u65B9\u4F20\u5230\u53E6\u4E00\u4E2A\u5730\u65B9\uFF0C\u9664\u4E86\u8981\u6709\u786E\u5B9A\u7684\u5730\u5740\uFF0C\u8FD8\u9700\u8981\u6709\u5B9A\u4F4D\u529F\u80FD</li><li>IP \u5730\u5740\u624D\u6709\u8FDC\u7A0B\u5B9A\u4F4D\u529F\u80FD</li><li>MAC \u5730\u5740\u50CF\u662F\u8EAB\u4EFD\u8BC1\uFF0C\u662F\u4E00\u4E2A\u552F\u4E00\u7684\u8868\u793A</li><li>MAC \u5730\u5740\u6709\u4E00\u5B9A\u5B9A\u4F4D\u529F\u80FD\u7684\uFF0C\u8303\u56F4\u975E\u5E38\u6709\u9650</li></ul><h2 id="\u7F51\u7EDC\u8BBE\u5907\u7684\u72B6\u6001\u6807\u8BC6" tabindex="-1">\u7F51\u7EDC\u8BBE\u5907\u7684\u72B6\u6001\u6807\u8BC6 <a class="header-anchor" href="#\u7F51\u7EDC\u8BBE\u5907\u7684\u72B6\u6001\u6807\u8BC6" aria-hidden="true">#</a></h2><p>&lt;UP,BROADCAST,SMART,RUNNING,PROMISC,SIMPLEX,MULTICAST&gt; mtu 1500</p><ul><li>net_device_flags \u7F51\u7EDC\u8BBE\u5907\u7684\u72B6\u6001\u6807\u8BC6</li></ul><table><thead><tr><th>\u7C7B\u578B</th><th>\u4F5C\u7528</th></tr></thead><tbody><tr><td>UP</td><td>\u7F51\u5361\u5904\u4E8E\u542F\u52A8\u72B6\u6001</td></tr><tr><td>BROADCAST</td><td>\u7F51\u5361\u6709\u5E7F\u64AD\u5730\u5740\uFF0C\u53EF\u4EE5\u53D1\u9001\u5E7F\u64AD\u5305</td></tr><tr><td>MULTICAST</td><td>\u7F51\u5361\u53EF\u4EE5\u53D1\u9001\u591A\u64AD\u5305</td></tr><tr><td>LOWER_UP</td><td>L1 \u542F\u52A8\uFF0C\u7F51\u7EBF\u63D2\u7740</td></tr><tr><td>MTU</td><td>\u6700\u5927\u4F20\u8F93\u5355\u5143 MTU \u4E3A 1500\uFF0C\u4EE5\u592A\u7F51\u7684\u9ED8\u8BA4\u503C</td></tr><tr><td>qdisc_pfifo_fast</td><td>queueing discipline \u6392\u961F\u89C4\u5219</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">MTU</p><p>\u4E8C\u5C42 MAC \u5C42\u7684\u6982\u5FF5\uFF0C\u4EE5\u592A\u7F51\u89C4\u5B9A MAC \u5934\u5E26\u6B63\u6587\u5408\u8D77\u6765\u4E0D\u5141\u8BB8\u8D85\u8FC7 1500 \u5B57\u8282\uFF0C\u6B63\u6587\u91CC\u9762\u6709 IP \u7684\u5934\uFF0CTCP \u7684\u5934\uFF0CHTTP \u7684\u5934\uFF0C\u5982\u679C\u653E\u4E0D\u4E0B\uFF0C\u5C31\u9700\u8981\u5206\u7247\u6765\u4F20\u8F93</p></div><div class="tip custom-block"><p class="custom-block-title">qdisc_pfifo_fast</p><p>\u5185\u6838\u5982\u679C\u9700\u8981\u901A\u8FC7\u67D0\u4E2A\u7F51\u7EDC\u63A5\u53E3\u53D1\u9001\u6570\u636E\u5305\uFF0C\u5B83\u90FD\u9700\u8981\u6309\u7167\u4E3A\u8FD9\u4E2A\u63A5\u53E3\u914D\u7F6E\u7684 qdisc\uFF08\u6392\u961F\u89C4\u5219\uFF09\u628A\u6570\u636E\u5305\u52A0\u5165\u961F\u5217</p></div>`,32),e=[p];function o(c,r,A,i,C,D){return n(),a("div",null,e)}const F=s(l,[["render",o]]);export{y as __pageData,F as default};
