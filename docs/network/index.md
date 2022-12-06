# 网络协议

## 常见网络协议

| 架构   | 网络协议例子                         |
| ------ | ------------------------------------ |
| 应用层 | DHCP HTTP HTTPS RTMP P2P DNS GTP RPC |
| 传输层 | UDP TCP                              |
| 网络层 | ICMP IP OSPF BGP IPSec GRE           |
| 链路层 | ARP VLAN STP                         |
| 物理层 | 网络跳线                             |

## IP 地址

> ifconfig/ipconfig

mac ifconfig

```bash
lo0: flags=8049<UP,LOOPBACK,RUNNING,MULTICAST> mtu 16384
	options=1203<RXCSUM,TXCSUM,TXSTATUS,SW_TIMESTAMP>
	inet 127.0.0.1 netmask 0xff000000
	inet6 ::1 prefixlen 128
	inet6 fe80::1%lo0 prefixlen 64 scopeid 0x1
	nd6 options=201<PERFORMNUD,DAD>
gif0: flags=8010<POINTOPOINT,MULTICAST> mtu 1280
stf0: flags=0<> mtu 1280
XHC20: flags=0<> mtu 0
en0: flags=8863<UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500
	options=400<CHANNEL_IO>
	ether 98:01:a7:a5:e7:01
	inet6 fe80::149c:8a3c:d2d:2d7c%en0 prefixlen 64 secured scopeid 0x5
	inet 192.168.63.83 netmask 0xffffff00 broadcast 192.168.63.255
	nd6 options=201<PERFORMNUD,DAD>
	media: autoselect
	status: active
en1: flags=8963<UP,BROADCAST,SMART,RUNNING,PROMISC,SIMPLEX,MULTICAST> mtu 1500
	options=460<TSO4,TSO6,CHANNEL_IO>
	ether 82:13:1a:8c:29:c0
	media: autoselect <full-duplex>
	status: inactive
en2: flags=8963<UP,BROADCAST,SMART,RUNNING,PROMISC,SIMPLEX,MULTICAST> mtu 1500
	options=460<TSO4,TSO6,CHANNEL_IO>
	ether 82:13:1a:8c:29:c1
	media: autoselect <full-duplex>
	status: inactive
bridge0: flags=8863<UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500
	options=63<RXCSUM,TXCSUM,TSO4,TSO6>
	ether 82:13:1a:8c:29:c0
	Configuration:
		id 0:0:0:0:0:0 priority 0 hellotime 0 fwddelay 0
		maxage 0 holdcnt 0 proto stp maxaddr 100 timeout 1200
		root id 0:0:0:0:0:0 priority 0 ifcost 0 port 0
		ipfilter disabled flags 0x2
	member: en1 flags=3<LEARNING,DISCOVER>
	        ifmaxaddr 0 port 6 priority 0 path cost 0
	member: en2 flags=3<LEARNING,DISCOVER>
	        ifmaxaddr 0 port 7 priority 0 path cost 0
	nd6 options=201<PERFORMNUD,DAD>
	media: <unknown type>
	status: inactive
p2p0: flags=8843<UP,BROADCAST,RUNNING,SIMPLEX,MULTICAST> mtu 2304
	options=400<CHANNEL_IO>
	ether 0a:01:a7:a5:e7:01
	media: autoselect
	status: inactive
awdl0: flags=8943<UP,BROADCAST,RUNNING,PROMISC,SIMPLEX,MULTICAST> mtu 1484
	options=400<CHANNEL_IO>
	ether 7a:f8:70:1a:9f:49
	inet6 fe80::78f8:70ff:fe1a:9f49%awdl0 prefixlen 64 scopeid 0xa
	nd6 options=201<PERFORMNUD,DAD>
	media: autoselect
	status: active
llw0: flags=8863<UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500
	options=400<CHANNEL_IO>
	ether 7a:f8:70:1a:9f:49
	inet6 fe80::78f8:70ff:fe1a:9f49%llw0 prefixlen 64 scopeid 0xb
	nd6 options=201<PERFORMNUD,DAD>
	media: autoselect
	status: active
utun0: flags=8051<UP,POINTOPOINT,RUNNING,MULTICAST> mtu 1380
	inet6 fe80::9f78:3a44:b57b:ea9d%utun0 prefixlen 64 scopeid 0xc
	nd6 options=201<PERFORMNUD,DAD>
utun1: flags=8051<UP,POINTOPOINT,RUNNING,MULTICAST> mtu 2000
	inet6 fe80::db9a:b93a:b24c:5234%utun1 prefixlen 64 scopeid 0xd
	nd6 options=201<PERFORMNUD,DAD>
```

### IPv4

192.0.0.1 分隔四个部分 每个部分 8 位 32 位

> 32 位的 IP 地址分配地址 5 类

| 类别 | 前几位    | 网络号            | 主机号 |
| ---- | --------- | ----------------- | ------ |
| A 类 | 0         | 7 位              | 24 位  |
| B 类 | 1 0       | 14 位             | 16 位  |
| C 类 | 1 1 0     | 21 位             | 8 位   |
| D 类 | 1 1 1 0   | 多播组号 28 位    |
| E 类 | 1 1 1 1 0 | 留待后用（27 位） |

> A B C 三类地址包含的主机数量

| 类别 | IP 地址范围               | 最大主机数 | 私有 IP 地址范围            |
| ---- | ------------------------- | ---------- | --------------------------- |
| A    | 0.0.0.0-127.255.255.255   | 16777214   | 10.0.0.0-10.255.255.255     |
| B    | 128.0.0.0-191.255.255.255 | 65534      | 172.16.0.0-172.31.255.255   |
| C    | 192.0.0.0-223.255.255.255 | 254        | 192.168.0.0-192.168.255.255 |

> 无类型域间选路 CIDR

`32位的IP地址一分为二，前面是网络号，后面是主机号`

- 10.100.122.2/24 => 类似这种形式 CIDR => 32 位中，前 24 位是网络号，后 8 位是主机号
- 广播地址 同一网络号里面的机器都能收到
- 子网掩码 255.255.255.0

::: tip 网络号的计算
子网掩码和 IP 地址按位计算 AND
:::

> D 类地址

- 组播地址：某个组的机器都能收到
- eth0 网卡 global => 可以对外，可以接收来自各个地方的包
- lo host 本机相互通信
  - loopback 环回接口
  - 127.0.0.1

### IPv6

128 位

### IP 地址如何计算广播地址、子网掩码

???

## MAC 地址

网卡的物理地址，十六进制，6 个 byte 表示

- MAC 地址号全局唯一（网卡生产出来就带着这个地址）
- 一个网络包从一个地方传到另一个地方，除了要有确定的地址，还需要有定位功能
- IP 地址才有远程定位功能
- MAC 地址像是身份证，是一个唯一的表示
- MAC 地址有一定定位功能的，范围非常有限

## 网络设备的状态标识

\<UP,BROADCAST,SMART,RUNNING,PROMISC,SIMPLEX,MULTICAST\> mtu 1500

- net_device_flags 网络设备的状态标识

| 类型             | 作用                                     |
| ---------------- | ---------------------------------------- |
| UP               | 网卡处于启动状态                         |
| BROADCAST        | 网卡有广播地址，可以发送广播包           |
| MULTICAST        | 网卡可以发送多播包                       |
| LOWER_UP         | L1 启动，网线插着                        |
| MTU              | 最大传输单元 MTU 为 1500，以太网的默认值 |
| qdisc_pfifo_fast | queueing discipline 排队规则             |

:::tip MTU
二层 MAC 层的概念，以太网规定 MAC 头带正文合起来不允许超过 1500 字节，正文里面有 IP 的头，TCP 的头，HTTP 的头，如果放不下，就需要分片来传输
:::

::: tip qdisc_pfifo_fast
内核如果需要通过某个网络接口发送数据包，它都需要按照为这个接口配置的 qdisc（排队规则）把数据包加入队列
:::
