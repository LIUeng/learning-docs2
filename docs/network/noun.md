# 计算机网络名词

## 以太网

`拓扑结构`

计算机局域网技术（规定了包括物理层的连线、电子信号和介质访问层协议的内容）

- 经典以太网（运行速度 3 - 10Mbps)
- 交换式以太网（使用交换机 100、1000 和 10000Mbps 高速率）

## 交换机

`Switch 开关` 工作于 OSI 模型的第二层，数据链路层

用于电（光）信号转发的网络设备（为接入交换机的任意两个网络节点提供独享的电信号通路）

- 基于 MAC 地址识别，能完成封装转发数据帧功能的网络设备
- MAC 地址缓存

## 网关

`Gateway 网间连接器、协议转换器` 工作于应用层

网关在网络层以上实现网络互连，是复杂的网络互连设备，仅用于两个高层协议不同的网络互连

- 广域网互连、局域网互连
- 充当转换重任的计算机系统或设备（翻译器）
- 一个网络通向其他网络的 IP 地址

## 路由器

`Router` 网络层设备

连接两个或多个网络的硬件设备，起网关作用，是读取每一个数据包中的地址然后决定如何传送的专用智能性的网络设备

- 实现 IP、TCP、UDP、ICMP 等网络的互连
- 对数据进行处理（收发数据包、具有对数据的分组过滤、复用、加密、压缩及防护墙等各项功能）
- 依据路由表的信息，对数据包下一传输目的地进行选择
- 进行外部网关协议和其他自治域之间拓扑信息的交换
- 实现网络管理和系统支持功能

## MAC 地址

`Media Access Control Address` 媒体存取控制位址、局域网地址

用于确认网络设备位置的地址，位于数据链路层