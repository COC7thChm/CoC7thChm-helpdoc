---
lang: zh-cn
title: 在 Github 网站上上传编辑文件
---

# 在 Github 网站上传编辑文件

普通人还有计算机小白来说，在 Github 网站上修改上传文件最好入门。

不全书的 Github 仓库为： [https://github.com/COC7thChm/COC7thChm.git](https://github.com/COC7thChm/COC7thChm.git)

## 一 如何能够编辑 Github 库

为了防止仓库被恶意篡改，COC 不全书限制了普通游客编辑仓库的权力，非管理员的人员不可以直接编辑主仓库。那么普通游客该如何编辑仓库呢？这就要你 Fork （复制）不全书库，然后在你复制出来的仓库里编辑上传文件，然后再发合并请求，让管理员在审核后再将你的修改合并到主仓库里。

1.首先，来到不全书库： [https://github.com/COC7thChm/COC7thChm.git](https://github.com/COC7thChm/COC7thChm.git)

然后点击左上方的`Fork`，然后在弹出来的弹窗里点击`Create a new fork`。

<img alt="待加" src="./images/21.png" width="100%">

2.然后弹出这个界面，然后点击`Create fork`按钮。

<img alt="待加" src="./images/22.png" width="100%">

之后会弹出一个仓库界面，当下方图片两个框的位置里，是你的用户名时，你仓库复制成功了。

<img alt="待加" src="./images/33.png" width="100%">

## 二 如何 Github 网站上编辑文件

直接在 Github 上面编辑文件相对较复杂，步骤也相对繁琐，我们更推荐在 WinCHM 编辑文件后，再往 Github 库里上传新的文件。但我们依然会教你如何在 Github 网站上直接编辑文件。

1.首先点入你想编辑的文件。点击右上方的笔，就可以开始进行编辑了。

<img alt="待加" src="./images/23.png" width="100%">

2.编辑完后，点击右上方的`Commit changes`按钮。

<img alt="待加" src="./images/24.png" width="100%">

3.之后会弹出这个窗口，然后点击绿色的`Commit changes`按钮。

<img alt="待加" src="./images/25.png" width="100%">

这样就成功修改文件了。

<img alt="待加" src="./images/26.png" width="100%">

## 三 如何在 Github 网站上传文件

1.首先点入你想上传文件的文件夹，先点击右上方的`Add file`，然后在新弹出的弹窗里点击`Upload files`。

<img alt="待加" src="./images/27.png" width="100%">

2.跳转至下方界面后，打开你电脑的文件夹，选中你要上传的文件，拖至虚线框内。

<img alt="待加" src="./images/28.png" width="100%">

3.等文件传输完毕后，滚动鼠标至网页下方，点击绿色的`Commit changes`按钮。

<img alt="待加" src="./images/29.png" width="100%">

之后正常回到仓库主页时，就说明上传文件成功了。

## 四 在网站里新建文件夹或将文件拖入制定的文件夹里

Github 网页端不能上传整个文件夹，下面介绍一下如何在 Github 网页端新建文件夹或者将你的文件拖进你想放入的文件夹里。

注意：Github 网页端无法新建空白文件夹。

1.首先，新建一个文件，或者点入你想放进文件夹里的文件。

2.然后进入编辑模式，找到编辑框左上方的文件名，在这个蓝框里你可以编辑文件名。

<img alt="待加" src="./images/34.png" width="100%">

3.然后输入“**你想放进去的文件夹或新建的文件夹名字/”**(不要带引号)。

<img alt="待加" src="./images/37.png" width="100%">

4.然后可以看见文件名前面多了一个文件夹。

<img alt="待加" src="./images/35.png" width="100%">

5.最后点击保持，就成功了。

<img alt="待加" src="./images/36.png" width="100%">

反之如果你想删掉文件夹或者将文件从文件夹里取出，在编辑文件名一栏里输入**“../”** (不要带引号)。

## 五 删除库里面的文件跟文件夹

1.点开你想删掉的文件或者文件夹。

2.然后点击右上方的`...`按钮。

3.在新弹窗里选择`Delete directory`，然后保存文件。

<img alt="待加" src="./images/37.png" width="100%">

## 六 发送合并请求

以上步骤均只在你仓库里运行，主仓库并没有受到修改，如果想将你的修改穿到主仓库得向主仓库发送合并请求。

1.首先来到你仓库的主界面。在主页面中点击`Contribute`按钮。

然后在弹出的新按钮里点击绿色的`Open pull request`按钮。

<img alt="待加" src="./images/30.png" width="100%">

2.之后便会进入这个界面，在蓝框里填写你修改的情况。然后点击`Open pull request`。

<img alt="待加" src="./images/31.png" width="100%">

3.之后便会来到这个界面，当出现红框里面的内容时，就说明可以顺利合并了，等待管理员审核同意就可以了。

<img alt="待加" src="./images/32.png" width="100%">

## 六 与主文件同步

从主文件库里 frok 出来的文件是无法自动共享主文件库的更新的，这个需要我们手动跟主文件同步。

来到你仓库的主页面，然后点击`Sync frok`

<img alt="待加" src="./images/45.png" width="100%">
