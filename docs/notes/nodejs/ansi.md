# ANSI escape sequences

:::tip C0 C1
C0 与 C1 是 ISO/IEC 2022 定义的控制字符集，C0 控制字符集的码位范围是 hex00-1F，C1 控制字符集的码位范围是 hex80-9F
:::

ANSI 转义序列

## 定义

一种带内信号的转义序列标准，用于控制视频文本终端上的的光标位置、颜色和其他选项

## 转义序列

所有序列都以 ASCII 字符 ESC（27/十六进制 0x1b）开头，第二个字节则是 0x40-0x5F（ASCII @A-Z[\\]^\_）范围内的字符

> 除 ESC 之外的其他 C0 代码

- BEL
- BS
- CR
- LF
- FF
- TAB
- VT
- SO
- SI

## CSI 序列

CSI 序列由 `ESC [`、若干个（包括 0 个）参数字节、若干个中间字节，以及一个最终字节组成

> CSI 序列在 `ESC [`之后各个组成部分的字符范围

| 组成部分 | 字符范围  | ASCII                   |
| -------- | --------- | ----------------------- |
| 参数字节 | 0x30–0x3F | 0–9:;\<=>?               |
| 中间字节 | 0x20–0x2F | 空格、!"#\$%&'()\*+,-./ |
| 最终字节 | 0x40–0x7E | @A–Z[\]^\_`a–z{|}~      |

> 部分 ANSI 控制序列

| 代码      | 名称               | 作用                                                          |
| --------- | ------------------ | ------------------------------------------------------------- |
| CSI n A   | 光标上移           | 光标向指定的方向移动 n 格，光标在屏幕边缘，无效               |
| CSI n B   | 光标下移           |                                                               |
| CSI n C   | 光标前移           |                                                               |
| CSI n D   | 光标后移           |                                                               |
| CSI n E   | 光标移到下一行     | 光标移动到下面第 n（默认 1）行的开头                          |
| CSI n F   | 光标移到上一行     | 光标移动到上面第 n（默认 1）行的开头                          |
| CSI n G   | 光标后移           | 光标移动到第 n（默认 1）列                                    |
| CSI n;m H | 光标位置           | 光标移动到第 n 行、第 m 列。值从 1 开始，且默认为 1（左上角） |
| CSI n J   | 擦除显示           | 清除屏幕的部分区域（取值 0 1 2）                              |
| CSI n K   | 擦除行             | 清除行内的部分区域（取值 0 1 2）                              |
| CSI n S   | 向上滚动           | 整页向上滚动 n（默认 1）行                                    |
| CSI n T   | 向下滚动           | 整页向下滚动 n（默认 1）行                                    |
| CSI n m   | SGR - 选择图形再现 | 设置 SGR 参数，包括文字颜色（CSI 0m 重置/常规）               |