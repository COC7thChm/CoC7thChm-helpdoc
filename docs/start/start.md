---
lang: zh-cn
title: 如何编辑不全书
---

# 如何开始编辑不全书

## 一 什么是 CHM 文件？

CHM 是微软 HTML 帮助集，即编译的 HTML 帮助文件（英语：Microsoft Compiled HTML Help, CHM），是微软继承早先的 WinHelp 发展的一种文件格式，用来提供线上帮助，是一种应用较广泛的文件格式。因为 CHM 文件如一本书一样，可以提供内容目录、索引和搜索等功能，所以也常被用来制作电子书。而 COC 不全书及流传更早的 DND 不全书，就是采取这种文件格式。

## 二 如何编辑 CHM 文件

首先，你要安装 CHM 编辑器。市面上有各种各样的 CHM 编辑器，但我们推荐使用 WinCHM，原因如下：

1. 此编辑器网上有免费完整的汉化版。
2. 此编辑器可以可视化编辑 CHM，很适合新人入手。
3. 此编辑器的编辑的页面时的页面与输出的 chm 页面一致可以直接看出效果。
4. 三是这个编辑器的输出的文件较为简洁，方便后期校对修正。
接下来的教学，也以 WinCHM 为主。

如果你没有&nbsp;CHM 编辑器的话，请点击这里下面链接

优秀小巧的 CHM 编辑器 WinCHM Pro 5.492 中文免费版 - 大眼仔旭 (dayanzai.me) ：[https://www.dayanzai.me/winchm.html](https://www.dayanzai.me/winchm.html)

::: warning 注意

虽然 PDF 文件、Word 文件、Ex 文件可以导出 html 文件，这些 html 文件也可以汇入 chm 文件，但是用两个文件转出的 html 文件代码过于复杂，转过去后极难跟其他页面的格式统一，且转过去的文件内无用代码太多，而有用代码都十分零散。还可能会遇上各种 bug。所以为了照顾后期，也是为了减少各位的工程量，不要用 PDF、Word、EX 转的 html 文件！更不要把这些文件内的文字直接复制过来。关于如何洗掉多余的格式，请查看[更改标题](../Winchm/newfile.md)的内容。

:::

## 利用 chm 文件进行编辑

## 一  在 WinCHM 打开&nbsp;chm 文件

首先，你要有一份 chm 文件，打开 WinCHM。

1.首先点击右上角的打开

<img alt="待加" src="./images/1.png" width="100%">

2.点击你要编辑的 chm 文件，然后在下方点击打开。

<img alt="待加" src="./images/2.png" width="100%">

3.确定勾选的是**打开现有已编译的 HTML 帮助文件**。然后继续点击确认。

*注：这里推荐将项目文件夹位置改到系统 D 盘，因为 C 盘十分不稳定，可能有意外清空文件的风险。这意味着你的编辑成果可能会全部消失，找都找不回的那种。关于如何修改文件夹路径，请看下方。

<img alt="待加" src="./images/3.png" width="100%">

如果要修改文件夹路径的话，首先在你想保存的位置建立一个新的文件夹，然后回到编辑器，点击项目文件夹右边的方框，然后在弹出的界面里选中你要保存到的文件夹，最后点击确认。当项目文件夹里文件夹里的路径改成你选中的文件夹的路径时，这就说明你修改成功了。

<img alt="待加" src="./images/10.png" width="100%">

<img alt="待加" src="./images/11.png" width="100%">

然后就可以开始编辑 chm 文件了,关于使用 WinCHM 编辑器的更多细节，在[使用 Winchm 进行编辑](../Winchm/Winchm.md)页面里查看。

<img alt="待加" src="./images/4.png" width="100%">

## 二 保存并打开编辑后的 CHM 文件

离开文件时，会有弹窗询问你是否保持更改，点击是即可更改文件，也可以点击右上角的保存，来手动保存文件。

<img alt="待加" src="./images/5.png" width="100%">

<img alt="待加" src="./images/6.png" width="100%">

点击上方的浏览，就可以找到编辑文件对应的位置，之后再次编辑时，点击 wcp 文件，就可以继续进行编辑了。

<img alt="待加" src="./images/7.png" width="100%">

<img alt="待加" src="./images/8.png" width="100%">

<img alt="待加" src="./images/9.png" width="100%">

## 三 导出编辑后的 chm 文件

1.点击上方的构建。

<img alt="待加" src="./images/12.png" width="100%">

2.然后点击开始，如果要修改导出 chm 文件所处的文件夹的话，点击边缘文件最右边的方框，选中你要保存的文件夹。

<img alt="待加" src="./images/13.png" width="100%">

3.正常的话，之后就能导出新的 chm 文件了，如果遇到问题，可在群里询问解决办法。

<img alt="待加" src="./images/14.png" width="100%">
