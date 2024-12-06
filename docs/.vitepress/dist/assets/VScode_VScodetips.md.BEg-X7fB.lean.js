import{_ as e,c,a3 as t,o as s}from"./chunks/framework.Bln4pwNK.js";const d="/COCchm-helpdoc/assets/14.DvkN5F64.png",l="/COCchm-helpdoc/assets/15.BNX9cSwd.png",i="/COCchm-helpdoc/assets/12.BPsgFkzj.png",a="/COCchm-helpdoc/assets/1.oYTD6Xwv.png",r="/COCchm-helpdoc/assets/2.B5f5QX_Y.png",p="/COCchm-helpdoc/assets/3.BHIh3Dfw.png",n="/COCchm-helpdoc/assets/4.Bnb-u5l4.png",h="/COCchm-helpdoc/assets/13.BEZh-DKK.png",m="/COCchm-helpdoc/assets/5.By6lySrw.png",g="/COCchm-helpdoc/assets/8.DaQreTXr.png",C="/COCchm-helpdoc/assets/7.zNfSufcc.png",u="/COCchm-helpdoc/assets/16.DnU2SwRI.png",_="/COCchm-helpdoc/assets/9.DX-p-TeQ.png",S="/COCchm-helpdoc/assets/10.BLhLdhvL.png",b="/COCchm-helpdoc/assets/11.Dmj-4uvo.png",B=JSON.parse('{"title":"VScode使用技巧","description":"","frontmatter":{"lang":"zh-cn","title":"VScode使用技巧"},"headers":[],"relativePath":"VScode/VScodetips.md","filePath":"VScode/VScodetips.md"}'),V={name:"VScode/VScodetips.md"};function f(v,o,w,k,q,x){return s(),c("div",null,o[0]||(o[0]=[t('<h1 id="vscode-使用技巧" tabindex="-1">VScode 使用技巧 <a class="header-anchor" href="#vscode-使用技巧" aria-label="Permalink to &quot;VScode 使用技巧&quot;">​</a></h1><p>本节教大家一些 VScode 的使用技巧，来帮助大家快速上手。</p><div class="tip custom-block"><p class="custom-block-title">基础快捷指令</p><p>这里提供一些 VScode 上最基础的一些快捷指令，重点字符是最重要的几个快捷指令，如果指令都记不好的话，推荐不要顽强自己，尝试用编程的办法来编辑不全书。</p><p>（通用）：表示除了 VScode 之外，在别的编辑器也同样生效，如 word、Winchm</p><ul><li><strong>撤销（通用）：<code>Ctrl</code>+ Z</strong></li><li><strong>恢复：<code>Ctrl</code>+ Y</strong></li><li><strong>剪切（通用）：<code>Ctrl</code>+ Z</strong></li><li><strong>复制（通用）：<code>Ctrl</code>+ C</strong></li><li><strong>粘贴（通用）：<code>Ctrl</code>+ V</strong></li><li><strong>查找（通用）：<code>Ctrl</code>+ F</strong></li><li><strong>替换（通用）：<code>Ctrl</code>+ H</strong></li><li><strong>多选（VGcode、文件资源管理器可用）：长按<code>Ctrl</code>+ 鼠标点击</strong></li><li>选中全部匹配项：<code>Ctrl</code>+ F2（不打开替换弹窗时也可生效）/<code>Alt</code>+<code>Enter</code>（打开替换弹窗内才可生效）</li><li>下一个匹配项：<code>F3</code></li><li>上一个匹配项：<code>Shift</code>+ <code>F3</code></li><li>全选（通用）：<code>Ctrl</code>+ A</li><li>选中全行（通用）：选中结尾 +<code>Shift</code>+ <code>Home</code>/选中开头 +<code>Shift</code>+ <code>End</code></li><li>打开/关闭右侧工具栏：<code>Ctrl</code>+ B</li><li>保存（通用）：<code>Ctrl</code>+ S</li><li>另存为（通用）：<code>Ctrl</code>+<code>Shift</code>+ S</li><li>关闭当前文件（通用）：<code>Ctrl</code>+ W</li><li>关闭所有文件：<code>Ctrl</code>+ K +<code>W</code></li><li>转到该行开头：<code>Home</code></li><li>转到该行结尾：<code>End</code></li></ul></div><h3 id="一-vscode-打开文件夹" tabindex="-1">一.VScode 打开文件夹 <a class="header-anchor" href="#一-vscode-打开文件夹" aria-label="Permalink to &quot;一.VScode 打开文件夹&quot;">​</a></h3><p>VScode 可以打开全部的文件夹。</p><img alt="" src="'+d+'" width="100%"><p>这样的话可以在左侧资源管理器一栏里直接点击打开、编辑文件与文件夹，不用到文件资源管理器上编辑了。</p><img alt="" src="'+l+'" width="100%"><p>当你已经克隆仓库时，可通过 Github Desktop，让库在 VScode 里编辑。</p><img alt="" src="'+i+'" width="100%"><h3 id="二-自动保存" tabindex="-1">二.自动保存 <a class="header-anchor" href="#二-自动保存" aria-label="Permalink to &quot;二.自动保存&quot;">​</a></h3><p>大家编辑文件时，有时会遇到还没来得及保存时，程序奔溃关闭，而之前的心血全部白费的情况。因此一些程序考虑到这件事，推出了自动保存功能，vscode 就自带这种功能。</p><p>鼠标移到上方工具栏中文件一项，可以看到弹窗里有自动保存一项，自动保存旁边打钩的话就说明已经开启了。</p><img alt="" src="'+a+'" width="100%"><h3 id="三-列选择模式" tabindex="-1">三.列选择模式 <a class="header-anchor" href="#三-列选择模式" aria-label="Permalink to &quot;三.列选择模式&quot;">​</a></h3><p>有时我们只想编辑一行中的开头或者结尾或者中间，然而在一般情况下鼠标选中一列向下拖动的话会选中中间的全部文字，如果不想选中中间的文字的话，推荐开启列选择模式。</p><p>鼠标移到上方工具栏中选中一项，可以看到弹窗里有列选择模式一项，列选择模式旁边打钩的话就说明已经开启了。</p><img alt="" src="'+r+'" width="100%"><p>然后可以看到跟下图一样，在一行中往下拖动鼠标不会选中全行，只会选中相应的位置。通过列选中模式我们可以快捷的编辑同一列文字。</p><img alt="" src="'+p+'" width="100%"><p>在列选择模式下按住<code>Ctrl</code>键再向下拖动鼠标，可以正常的选中中间的文字。如果嫌弃麻烦的话，关闭列选择模式也是可以的。</p><img alt="" src="'+n+'" width="100%"><h3 id="四-自动换行" tabindex="-1">四.自动换行 <a class="header-anchor" href="#四-自动换行" aria-label="Permalink to &quot;四.自动换行&quot;">​</a></h3><p>Vscode 默认情况下，一行代码就占一行，这种情况下一行代码可以拖得很长的情况常常发生。</p><p>我们可以打开自动换行功能，这样可以方便我们查看文本，点击上方的工具栏里的查看，然后点击自动换行，自动换行旁边打钩的话就说明自动换行功能已经开启了。</p><p>在自动换行形式下编辑的话，建议关掉列选择模式。</p><img alt="" src="'+h+'" width="100%"><h3 id="五-选中全部匹配项" tabindex="-1">五.选中全部匹配项 <a class="header-anchor" href="#五-选中全部匹配项" aria-label="Permalink to &quot;五.选中全部匹配项&quot;">​</a></h3><p>Vscode 上可以在不打开替换弹窗的情况下直接编辑全部的匹配项。</p><p>首选用鼠标选中你要编辑的文字，然后按住<code>Ctrl</code>+ F2，就可以看到全部匹配项都被选中了。</p><p>然后点击<code>→</code>即可从匹配项末尾开始编辑，点击<code>←</code>即可在匹配性开头开始编辑。</p><img alt="" src="'+m+'" width="100%"><h3 id="六-在文件夹内查找替换" tabindex="-1">六.在文件夹内查找替换 <a class="header-anchor" href="#六-在文件夹内查找替换" aria-label="Permalink to &quot;六.在文件夹内查找替换&quot;">​</a></h3><p>VScode 相比其他编辑器先进的一点是，他可以查找一个文件夹内全部的匹配项*，并且替换文件夹内全部的匹配项。</p><p>首先在左侧的资源管理器里，右键点击你要修改的文件夹，然后选中在文件夹中查找。</p><img alt="" src="'+g+'" width="100%"><p>然后左侧资源管理器就会变成搜索栏，搜索栏的各项属性如下图所示，在文件列表点击文件即可查看替换前与替换后的对比。</p><div class="warning custom-block"><p class="custom-block-title">注意</p><p>VScode 可以查找多行文件，你可以复制多行文本在查找搜索栏与替换搜索栏中，你也可以在搜索栏中用<code>Ctrl</code>+<code>Enter</code>来手动换行。</p></div><img alt="" src="'+C+'" width="100%"><p>要注意的是，在多个文件内的替换不能撤销，所以替换多个文件前，务必查看替换结果保证能获得你想要的结果，替换前建议先利用 git 上传文件至云端，如果到时候替换结果不如意时，点击左侧分叉按钮，在源代码管理界面中按照下图所示放弃所有更改就好了。</p><img alt="" src="'+u+'" width="100%"><h3 id="七-正则匹配" tabindex="-1">七.正则匹配 <a class="header-anchor" href="#七-正则匹配" aria-label="Permalink to &quot;七.正则匹配&quot;">​</a></h3><p>之所以推荐利用编程源代码来编辑不全书，是因为文本编辑器有正则匹配功能，正则匹配配合 VScode 的在文件内查找的能力，能轻松的实现一些功能，如检查中英文排盘，批量更改句子格式等。</p><div class="tip custom-block"><p class="custom-block-title">什么是正则匹配</p><p>正则表达式(Regular Expression)是一种文本模式，包括普通字符（例如，a 到 z 之间的字母）和特殊字符（称为&quot;元字符&quot;），可以用来描述和匹配字符串的特定模式。正则表达式(regular expression)描述了一种字符串匹配的模式（pattern），可以用来检查一个串是否含有某种子串、将匹配的子串替换或者从某个串中取出符合某个条件的子串等，可以极大的提高处理字符串的效率。</p></div><p>在 VScode 里，搜索时在搜索栏中点击<code>。*</code>按钮，即可开启正则表达式。</p><img alt="" src="'+_+'" width="100%"><p>如图所示，利用正则表达式，可以快速选中既定格式的文本。</p><p>如下图，<code>.*</code>代表所有任意字符串，<code>(.*)</code>代表在匹配 &amp;nbsp; 中间的全部字符串（包含 &amp;nbsp;）。</p><p>其中 () 起到定义<code>.*</code>这个元素的作用，替换才用得到，在查询中并无实际意义。</p><img alt="" src="'+S+'" width="100%"><p>之后可以按照自己要求，对相应的匹配项进行相应的更改。</p><p>如下图，$1 代表着查找项中第一个 () 内的元素，也就是查找项中 .* 的内容。如下图所示，单个 $1 的替换结果就是，保留 &amp;nbsp; 中间的全部字符。</p><img alt="" src="'+b+'" width="100%"><p>之后的教程离，很多步骤会用到正则匹配，到时候会告诉你需要使用的查找项或者匹配项。</p><p>当然你也可以参考下方的链接参照如何使用正则匹配：<br><a href="https://blog.vlinyu.com/archives/regular-expression-vscode" title="https://blog.vlinyu.com/archives/regular-expression-vscode" target="_blank" rel="noreferrer">https://blog.vlinyu.com/archives/regular-expression-vscode</a></p><p>此外要注意的是，word 的正则匹配自成一系，不如 VScode 的正则匹配要方便，不要搞混。</p>',56)]))}const P=e(V,[["render",f]]);export{B as __pageData,P as default};