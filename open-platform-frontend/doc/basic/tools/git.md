GIT
===

## 本地库
与svn不同的是，git是一个分布式的代码管理工具，
也就是说，每个人自己的电脑上，都有一个本地库，你的每次提交操作，都需要往自己的本地的代码库里提交，然后把自己的本地库推送到其他分布式远程库。
而svn则是直接提交到远程中央库。

### 下载项目

```
git clone ssh://git@118.190.8.227:52772/kyee/kyee-his.git
```
### 文件状态
文件状态可以使用status命令查看：
```
git status
```
git的文件状态分3种：
* `未跟踪（untracked）`: 当我们修改过代码但没有进行任何git操作时，新增或修改的代码就处于未跟踪状态，这些代码在执行*commit*操作后也不会被提交到git的本地库中。
* `待提交（changes to be commited）`: 当我们执行*git add <filePath>*方法后，<filePath>中的所有代码就处于待提交状态，这些代码在执行*commit*操作后会被提交到git的本地库中。
* `已提交`: 执行*commit*操作后，处于待提交状态的代码会被提交到git的本地库中。

### 分支
很多人看到这可能会有疑惑，为什么要有本地库的概念，git比svn方便在什么地方？
下面我们就介绍git的杀手锏：分支。通过branch命令，可以查看本地库目前有多少个分支，当前处于哪个分支下。
```
git branch
```
通过checkout命令可以切换到某个分支下：
```
git checkout <branchName>
```
我们知道，代码管理工具最复杂的地方就是多版本管理，同一时间，会有多个团队开发多个版本的需求。
如果使用svn，拉一个分支需要把整个中央代码库复制出来，然后每个代码再把整个项目代码都下载到本地当成一个新的项目。
这种方式，在不同的版本上开发成本很高，建立，切换不同的分支都需要很长的时间。最后版本合并时也十分耗时。

git有了本地库后，所有不同分支的代码差异都被保存到同一套本地库中，切换版本代码只需要一个checkout命令，就能在当前的项目里瞬间切换。


## 远程库
### 远程仓库
我们可以把分布式的其他仓库加入我们本地的远程仓库列表中。使用*remote*命令可以查看当前的远程仓库列表
```
git remote
```
一般来说，**clone**下来的远程项目，在远程仓库列表中会有一个名叫`origin`的远程仓库。

### 从远程仓库抓取数据
```
git fetch origin
```
执行完`fetch`命令，你就可以在本地访问该远程仓库中的所有分支,将其中某个分支合并到本地,或者只是取出某个分支,一探究竟。
*有一点很重要,需要记住,fetch 命令只是将远端的数据拉到本地仓库,并不自动合并到当前工作分支,只有当你确实准备好了,才能手工合并。*
```
git pull origin <branchName>
```
如果设置了某个分支用于跟踪某个远端仓库的分支(参见下节及第三章的内容),可以使用 git pull 命令自动抓取数据下来,然后将远端分支自动合并到本地仓库中当前分支。
在日常工作中我们经常这么用,既快且好。

### 推送数据到远程仓库
```
git push origin <branchName>
```

### 远程分支
远程分支(remote branch)是对远程仓库状态的索引。它们是一些无法移动的本地分支;只有在进行 Git 的网络活动时才会更新。远程分支就像是书签,提醒着你上次连接远
程仓库时上面各分支的位置。
我们用 (远程仓库名)/(分支名) 这样的形式表示远程分支。比如我们想看看上次同origin 仓库通讯时 master 的样子,就应该查看 origin/master 分支。

下载某个分支：
```
git fetch
git checkout <branchName>
git pull origin <branchName>
```

## 多版本控制

### 5种分支流程介绍
* **feature分支** 当产品要开发一个新需求的时候，组长从develop分支checkout下来一个feature-<功能名>分支，所有相关开发都在这个分支上提交开发代码。
* **develop分支** 当几个需求需要转测并一起发布上线时，组长把所有的feature分支合并到develop分支上，删除原有feature分支，
然后从develop分支checkout下一个release-<版本号>分支。
* **release分支** release分支产生后，交给测试在测试环境发布测试，提交的bug由开发在该release分支上修改代码，并提交。
* **master分支** 当release分支bug修改完毕，测试通过后，组长将该release分支同时合并到develop分支和master分支上，删除该release分支。在master分支上打tag-<版本号>，交运维发布。
* **hotfix分支** 当线上有紧急bug时，组长从master分支上checkout下来一个hotfix-<bug号>的分支，开发在该hotfix分支上修改代码，测试在该hotfix分支上转测，
测试通过后同时合并到develop分支和master分支上，删除该hotfix分支。在master分支上打tag-<版本号>，交运维发布。

### 5种分支权限和作用
* **master分支** 永久分支，代码永远是处于可发布状态，只有组长有推送代码的权限。
* **develop分支** 永久分支，代码永远是处于开发完成的状态，只有组长有推送代码的权限。
* **feature，release，hotfix分支** 临时分支，根据不同的版本产生其生命周期，开发可以在上面提交代码，该周期结束后由组长合并到相应的永久分支并删除。

### 具体命令流程
下面就从一个新需求（feature-new）从开发到上线的完整生命周期列出所有的命令（不喜欢命令的可以使用git界面工具操作）。


组长，建立新feature分支：
```
$ git checkout -b feature-new develop
$ git push origin feature-new
```
组员，下载新分支并且开发：
```
$ git fetch origin
$ git checkout feature-new
$ git pull origin feature-new
# ... coding ...
$ git push origin feature-new
```
所有组员开发完毕，准备转测。

组长，建立新release分支：
```
#合并到develop分支
$ git pull origin feature-new
$ git checkout develop
$ git pull origin develop
$ git merge --no-ff feature-new
$ git push origin develop

#删除该feature分支
$ git branch -d feature-new

#建立新release分支
$ git checkout -b release-1.2.0 develop
$ git push origin release-1.2.0
```
组员，删除feature分支，下载release分支：
```
$ git branch -d feature-new
$ git fetch origin
$ git checkout release-1.2.0
$ git pull origin release-1.2.0
# ... fix bug ...
$ git push origin release-1.2.0
```
测试通过，准备上线：

组长，将该release分支同时合并到develop分支和master分支上，删除该release分支：
```
#合并到develop分支
$ git checkout develop
$ git pull origin develop
$ git merge --no-ff release-1.2.0
$ git push origin develop

#合并到master分支
$ git checkout master
$ git pull origin master
$ git merge --no-ff release-1.2.0
$ git push origin master
$ git tag -a 1.2.0

#删除该release分支
$ git branch -d release-1.2.0
```

出现线上bug。
组长，建立新hotfix分支：
```
$ git checkout -b hotfix-1.2.1 master
$ git push origin hotfix-1.2.1
```
后续操作与feature分支基本相同，不过可以直接转测，不需要再拉release分支。