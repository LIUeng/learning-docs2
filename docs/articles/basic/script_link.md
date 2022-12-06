# Script Link 标签

`defer async 只适用于外部脚本中`

## defer

`延迟脚本`

兼容性：IE4、Firefox 3.5、Safari 5 和 Chrome

1. 多个延迟脚本按顺序执行，并先于 DOMContentLoaded 事件执行

2. 现实当中，多个延迟脚本不一定会按照顺序执行，也不一定会在 DOMContentLoaded 事件执行，因此最好包含一个延迟脚本

## async

`异步脚本`

兼容性：Firefox 3.6、Safari 5 和 Chrome

1. 多个异步脚本先后顺序不一致执行，最好不要在此修改 dom 操作

2. 异步脚本一定会在 load 事件之前执行，在 DOMContentLoaded 事件不一定之前还是之后

## crossorigin