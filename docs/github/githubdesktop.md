---
lang: zh-cn
title: 在 GitHubDesktop 上传编辑文件
---

# 在 GitHub Desktop 上传编辑文件

## 一 什么是 GitHub Desktop

GitHub 使用 git 分布式版本控制系统，而 git 最初是 LinusTorvalds 为帮助 Linux 开发而创造的，它针对的是 Linux 平台，因此 git 和 Windows 从来不是最好的朋友，因为它一点也不像 Windows。GitHub 发布了 GitHub Desktop，为 Windows 平台开发者提供了一个易于使用的 Git 图形客户端。

GitHub for Windows 是一个 Metro 风格应用程序，集成了自包含版本的 Git，bash 命令行 shell，PowerShell 的 posh-git 扩展。

简单来说，GitHub Desktop 是 Github 的电脑应用版，在 GitHub Desktop 里编辑、上传、合并文件比网页版更加快捷。但是 GitHub Desktop 的用户引导较差，使用时看不懂英文的话很有可能茫然而不是所措。我们推荐配合汉化包使用。

汉化包地址： [https://Github.com/robotze/GithubDesktopZhTool](https://Github.com/robotze/GithubDesktopZhTool "汉化包地址 title")

## 二 如何下载 GitHub Desktop

安装包下载界面： [https://desktop.Github.com/download/](https://desktop.Github.com/download/ "安装包下载界面")

因为特殊原因，一些人可能不能正常进入官方的安装包下载界面，不过 COC 不全书群里有 GitHub Desktop 的安装包。

安装包下好后，点击安装包就可以安装了了。

如果由于电脑原因，GitHub Desktop 实在下不来，群里也有现成汉化的整个 GitHub Desktop 的压缩包，下载那个压缩包然后解压就好了。

为了方便理解，接下来的演示都会用汉化版进行展示。

## 三 在 GitHub Desktop 克隆文件

克隆文件，指的是将你 Github 上的文件复制到你的本地电脑上，之后你就可以在电脑上直接修改文件了。

1.首先，你要确保你在 Github 网站上注册了一个账号，并 fork 了不全书，自己仓库里有复制的不全书仓库。以上步骤请查看 [如何注册 Github 账号](./github.md)与[如何能够编辑 Github 库](./githubhttp.md)。

2.然后在你想存储的地方新建一个文件夹，然后打开 GitHub Desktop，点击右上方的`当前储存库`。

<img alt="待加" src="./images/38.png" width="100%">

3.然后点击`添加`按钮，然后在小弹窗内选择`克隆储存库`。

<img alt="待加" src="./images/39.jpg" width="100%">

4.之后会弹出新窗口，先选中你要编辑的不全书库，切记要选中你 fork 的哪个，然后在本地路径那一栏点击`选择...`，然后在弹出的选择文件夹窗口里选中你之前建的空白夹，最后点击`选择文件夹`。

<img alt="待加" src="./images/40.png" width="100%">

5.做完以上步骤后，再点击克隆。

<img alt="待加" src="./images/41.png" width="100%">

6.等待仓库复制完成后，会有弹窗询问你打算如何使用此 fork，确认选中的是上面的那条`为父项目做贡献`，然后点击`确认`。

<img alt="待加" src="./images/42.png" width="100%">

7.重新点击`当前储存库`，当下面出现你要克隆的库时，就说明你克隆成功了。

<img alt="待加" src="./images/43.png" width="100%">

前往你选择的文件夹，里面有你复制的库里面的全部文件，git 是 GitHub Desktop 的插件，用于连接你的网络上的库和本地文件夹，前往不要删掉。

在这个文件夹，你可以快捷的添加、删除文件，跟你编辑本地文件夹并无区别。

<img alt="待加" src="./images/46.png" width="100%">

## 四 通过 GitHub Desktop 上传修改

通过 GitHub Desktop ，你可以在本地修改你的库，但你本地的修改只存在于你本地电脑中，并没有上传至网络中的库里。

如果你想把本地的修改上传至库中，你需要以下步骤。

1.打开 GitHub Desktop，在`当前储藏库`中选中你修改的库，可以看到你本地的修改出现在了右边的区域里。

2.然后在`摘要`填写你修改的地方。填写后点击`Commit 到 main`。

<img alt="待加" src="./images/47.png" width="100%">

3.等右边的界面显示本地无更改后，点击`推送 origin`，就能将你本地的修改上传至你网站上的库里了。

<img alt="待加" src="./images/48.png" width="100%">

## 五 同步主仓库的更新

点击上方的`同步 origin`，就能同步更新了。

<img alt="待加" src="./images/44.png" width="100%">

## 六 在 GitHub Desktop 创建合并请求

1.点击上方的`分支`，然后在新弹出的窗口里点击`创建拉取（Pull）请求`。

<img alt="待加" src="./images/49.jpeg" width="100%">

2.然后游览器会弹出这个网站，在蓝框里填写你修改的情况。然后点击`Open pull request`。

<img alt="待加" src="./images/31.png" width="100%">

3.之后便会来到这个界面，当出现红框里面的内容时，就说明可以顺利合并了，等待管理员审核同意就可以了。

<img alt="待加" src="./images/32.png" width="100%">
