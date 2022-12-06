# GIT

:::tip GIT CMD
GIT 命令
:::

## git rebase

`重新 commit 依赖的上游 top 分支`

### API

```bash
git rebase [-i | --interactive][<options>] [--exec <cmd>][--onto <newbase> | --keep-base] [<upstream> [<branch>]]
git rebase [-i | --interactive][<options>] [--exec <cmd>][--onto <newbase>]
--root [<branch>]
git rebase (--continue | --skip | --abort | --quit | --edit-todo | --show-current-patch)
```

### 理解

- 精简提交记录（把不需要的提交记录修剪掉）
- 精简分支树（依赖于其他的分支可以回基到想要的分支上）
  - master A B 三个分支
  - A fork into master, B fork into A
  - git rebase --onto master A B 命令可以使得 B 的提交记录直接提交到 master 上，不依赖 A 分支了

> --onto 参数

`git rebase --onto <newbase>` 接多个分支或者分支的 HEAD 提交记录（从近到远的提交记录）

## git revert

`恢复存在的提交记录`

### API

```bash
git revert [--[no-]edit] [-n] [-m parent-number] [-s] [-S[<keyid>]] <commit>…​
git revert (--continue | --skip | --abort | --quit)
```

### 理解

- 重新恢复某个已经存在的提交，并且生成新的提交记录

## git restore

`恢复工作区的文件`

### API

```bash
git restore [<options>] [--source=<tree>] [--staged] [--worktree] [--] <pathspec>…​
git restore [<options>] [--source=<tree>] [--staged] [--worktree] --pathspec-from-file=<file> [--pathspec-file-nul]
git restore (-p|--patch) [<options>] [--source=<tree>] [--staged] [--worktree] [--] [<pathspec>…​]
```

### 理解

- 对已经提交到工作区的文件进行操作

git restore \* or . 放弃所有更改
git restore --staged \* or . 放弃已提交到工作区的所有文件

- -s --source 参数

git restore --soruce HEAD~1 文件名 这个可以使文件回到 1 个版本以前，工作区保持不变

### git reset

`重新设置当前 HEAD 到某个提交记录`

### API

```bash
git reset [-q] [<tree-ish>] [--] <pathspec>…​
git reset [-q] [--pathspec-from-file=<file> [--pathspec-file-nul]] [<tree-ish>]
git reset (--patch | -p) [<tree-ish>] [--] [<pathspec>…​]
git reset [--soft | --mixed [-N] | --hard | --merge | --keep] [-q] [<commit>]
```

### 理解

- 重新设置提交记录（soft hard mixed keep）
- reset 和 revert 区别 reset 的提交可以使得提交记录不存在 加上 --hard 参数
