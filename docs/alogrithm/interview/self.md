# 数据结构辅助记忆

> 适合自己的数据结构与算法的记忆方法

## 常见的数据结构

### 堆

小顶堆 大顶堆

- 数组存储
- 左字节点下标 i 对应的父节点为 2 \* i + 1
- 右字节点下标 i 对应的父节点为 2 \* i + 2
- 建堆
  - 自下向顶（递归父节点）
  - 自顶向下（递归左右子节点）
- 删除
  - 删除的元素（相同的元素）
  - 最后一个元素替换删除元素
  - 重新建堆
    - 没有左节点 自下向顶
    - 有左节点且（没有父节点或者当前删除的节点与父节点比较）自顶向下
- 实例方法
  - insert
  - delete
  - find
- 堆排序
  - 每次取堆顶元素，重新向下建堆
  - 直到堆为空

```js
// 建堆
class Heap {
  add(v) {}
  remove() {},
  heapifyUp(index) {}
  heapifyDown(index) {}
}
```

### Hash 表

- 设计 hash 算法
  - 大小
  - 存储方式（链表）
- 实例方法
  - set
  - get
  - has
  - delete
  - getKeys
  - getValues

```js
class HashTable {
  constructor(size) {
    this.keys = {};
    this.buckets = Array(size).map((bucket) => new LinkedList());
  }
  /* ... */
}
```

### 字典树

Trie

- 实例方法
  - addWord
  - deleteWord --- 深度优先遍历（递归）
  - suggestNextCharacters
  - doesWordExist
- 每个节点的属性
  - character
  - children --- HashTable
  - isCompleteWord

### 图

Graph

> 无向图 有向图

- 顶点
  - 当前顶点值
  - 存储（链表）
- 边
  - 开始顶点
  - 结束顶点

#### 探测环

> 无向图探测

- 记录访问过的顶点，以及各个顶点对应的前一个顶点
  - visited parents
- 注意判断成环的条件
- 利用以上变量遍历返回成环的对象

> 有向图探测

变量含义

1. white set 所有的顶点
2. gray set 记录进入时访问的节点
3. black set 记录离开时访问的节点

- 记录访问的当前节点以及对应的父亲节点
- 判断是否继续遍历的条件
  - !black[next]
- 存在 gray set 访问过的节点即存在环

### Disjoin Set

交并集

- 检测图是否存在环

### 链表

- prepend
- append
- insert
- delete
- find
- deleteTail
- deleteHead
- fromArray
- toArray
- toString
- reverse

#### 链表倒转

前后变量法

```js
let nextNode = null;
let prevNode = null;
while (currNode) {
  nextNode = currNode.next;

  currNode.next = prevNode;
  // doubly linked node if
  currNode.prev = nextNode;

  prevNode = currNode;
  currNode = nextNode;
}
```

### 树

二叉树

- BinarySearchTree
  - insert
  - contains
  - remove
  - toString
- BinarySearchTreeNode
  - insert
  - find
  - contains
  - remove
  - findMin
- BinaryTreeNode
  - get leftHeight
  - get rightHeight
  - get height
  - get balanceFactor
  - get uncle
  - setValue
  - setLeft
  - setRight
  - removeChild
  - replaceChild
  - static copyNode
  - traverseInOrder
  - toString

#### 注意点

- 删除节点
  - 存在左右节点
    - 右节点需要寻找最小节点作为当前删除节点
  - 不存在左右节点
  - 存在其中一个节点（左右）
- 遍历
  - 前序遍历（根 左 右）
  - 中序遍历（左 根 右）
  - 后续遍历（左 右 根）
- 计算当前节点的高度
  - 递归寻找