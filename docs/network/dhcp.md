# DHCP

动态主机配置协议（DHCP) - dynamic host configuration protocol

## 如何配置 IP 地址

> 手动配置

- net-tools

```bash
sudo ifconfig eth1 10.0.0.1/24
sudo ifconfig eth1 up
```

- iproute2

```bash
sudo ip addr add 10.0.0.1/24
sudo ip link set up eth1
```

> 配置文件

`CIDR 子网掩码 广播地址 网关地址`

## 动态主机配置协议（DHCP)

形象举例：租房 -> 退租

> 广播包分配一个地址

|        |                              |
| ------ | ---------------------------- |
| MAC 头 | 广播 MAC(ff:ff:ff:ff:ff:ff)  |
| IP 头  | 广播 IP 255.255.255.255      |
| UDP 头 | 源端口： 68 <br> 目标端口 67 |
| BOOTP  | BOOT request                 |
|        | 我的 MAC 是这个，我还没有 IP |

:::warn BOOTP
广播包封装了 UDP，UDP 封装了 BOOTP，DHCP 是 BOOTP 的增强版
:::

> DHCP offer

|        |                                                         |
| ------ | ------------------------------------------------------- |
| MAC 头 | 广播 MAC(ff:ff:ff:ff:ff:ff)                             |
| IP 头  | DHCP SERVER 的 IP：0.0.0.0 <br> 广播 IP 255.255.255.255 |
| UDP 头 | 源端口： 68 <br> 目标端口 67                            |
| BOOTP  | BOOT reply                                              |
|        | 这是你的 MAC，我分配了这个 IP，租给你                   |

> DHCP request

确认是否租用(接收 DHCP offer)

> ACK

当 DHCP Server 接收到客户机的 DHCP request 之后，广播返回给客户机一个 DHCP ACK 消息包，表明已经接受客户机的选择，并将 IP 地址的合法租用信息和其他配置的信息放入广播包

> IP 地址的收回和续租

DHCP request <-> DHCP ACK 更新配置

## PXE

预启动执行环境 Pre-boot Execution Environment

:::tip PXE
PXE 协议氛围客户端服务器端 <br>
客户端在 BIOS, 启动 BIOS 把 PXE 客户端调入内存，可以连接服务端
:::

- 系统

MBR 启动 GRUB -> GRUB 加载内核、加载作为根文件系统的 initramfs 文件 -> 内核启动

### 原理

- PXE 客户端需要有个 IP 地址
- DHCP request
- DHCP server ACK
- 配置文件

DHCP Server 配置(IP 地址段 子网掩码 网关地址 租期)

```bash
ddns-update-style interim;
ignore client-updates;
allow booting;
allow bootp;
subnet 192.168.1.0 netmask 255.255.255.0
{
	option routers 192.168.1.1;
	option subnet-mask 255.255.255.0;
	option time-offset -18000;
	default-lease-time 21600;
	max-lease-time 43200;
	range dynamic-bootp 192.168.1.240 192.168.1.250;
	filename "pxelinux.0";
	next-server 192.168.1.180;
}
```

- next-server

要使用 PXE，需要配置 next-server，指向 PXE 服务器的地址，另外要配置初始启动文件 filename

### PXE 工作过程

1. 启动 PXE 客户端
2. DHCP Server 分配一个 IP 地址、PXE 服务器的地址、启动文件 pxelinus.0
3. PXE 客户端向 TFTP 服务器请求下载文件
4. 下载完毕，执行文件（文件会指向 PXE 客户端，向 TFTP 服务器请求计算机的配置信息 pxelinux.cfg），TFTP 服务器会给 PXE 客户端一个配置文件包括内核、initramfs，PXE 客户端会请求这些文件
5. 启动 Linux 内核
