---
lang: zh-cn
title: 用编程编辑不全书
---

# 用编程编辑不全书

## 一 不全书的原理

我们在前面介绍过，CHM 是微软的&nbsp;HTML 帮助集，即编译的 HTML 帮助文件。HTML 是超文本标记语言（英语：HyperText Markup Language，简称：HTML）是一种用于创建网页的标准标记语言，用于创建静态的页面，也是目前最好入门的前端语言，也是 wiki 页面通常使用的语言。而不全书的页面、格式都是通过&nbsp;HTML 里程序的组合实现的。

Winchm 的原理，就是在后端将你的编辑实时转换成代码，如果你会 HTML 语言的话（语言指的是编程格式），可以不用在 Winchm 上面编辑，而是在文本编辑器里编辑文件代码，然后利用 Winchm 来查看实际效果。我们十分推荐这么做，原因如下：

1. Winchm 上面的功能并不齐全，相比编程实现的功能有限。
2. Winchm 输出的源代码不如编程直接来的整洁，经常多出不必要的空格。
3. 你会 HTML 语言的话，可以利用正则匹配来批量贴上标签，然后把程序直接复制贴贴进文件，比在 Winchm 编辑少了很多步骤。例如在 Winchm 编辑要一个星期搞定的扩展，利用这种方法可以几天之内搞定。
4. 文本编辑器的功能相比 Winchm 更加丰富，你可以在文本编辑器里更加快捷的编辑不全书。
5. 不全书的`Generator`文件夹里有丰富的辅助编程不全书的插件，结合插件，编程可以起到事半功倍的效果。

关于 Winchm 相关，可查看[用 Winchm 编辑不全书](../Winchm/Winchm.md) 。

## 二 HTML 入门

如果你不会编程，但希望编辑更轻松一些，我们也推荐你去学习 HTML，HTML 并不难学，编辑不全书需要掌握的知识也并不多。

这是个教你入门 HTML 的编程入门学习网站：[https://www.runoob.com/html/html-tutorial.html](https://www.runoob.com/html/html-tutorial.html "https://www.runoob.com/html/html-tutorial.html")

编辑不全书要学会的也就这几块：

HTML 基础：[https://www.runoob.com/html/html-basic.html](https://www.runoob.com/html/html-basic.html "https://www.runoob.com/html/html-basic.html")

HTML 标题：[https://www.runoob.com/html/html-headings.html](https://www.runoob.com/html/html-headings.html "https://www.runoob.com/html/html-headings.html")

HTML 段落：[https://www.runoob.com/html/html-paragraphs.html](https://www.runoob.com/html/html-paragraphs.html "https://www.runoob.com/html/html-paragraphs.html")

HTML 文本格式化：[https://www.runoob.com/html/html-formatting.html](https://www.runoob.com/html/html-formatting.html "https://www.runoob.com/html/html-formatting.html")

HTML 链接：[https://www.runoob.com/html/html-links.html](https://www.runoob.com/html/html-links.html "https://www.runoob.com/html/html-links.html")

HTML 图像：[https://www.runoob.com/html/html-images.html](https://www.runoob.com/html/html-images.html "https://www.runoob.com/html/html-images.html")

HTML 表格：[https://www.runoob.com/html/html-tables.html](https://www.runoob.com/html/html-tables.html "https://www.runoob.com/html/html-tables.html")

HTML 列表：[https://www.runoob.com/html/html-lists.html](https://www.runoob.com/html/html-lists.html "https://www.runoob.com/html/html-lists.html")

看完这些并不困难，但是看完上面的内容后，可以事半功倍的编辑不全书！

如果不想看上面的教程，但也想尝试利用编程来批量编辑不全书的话，下面的条目将会介绍给你一些基础步骤。
