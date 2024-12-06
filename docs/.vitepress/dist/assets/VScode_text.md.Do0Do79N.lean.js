import{_ as o,c,a3 as e,o as s}from"./chunks/framework.Bln4pwNK.js";const p="/COCchm-helpdoc/assets/1.DzF1J3Sm.png",d="/COCchm-helpdoc/assets/2.2fqdMw1b.png",a="/COCchm-helpdoc/assets/3.C-0xdfvD.png",h="/COCchm-helpdoc/assets/4.XmpXq-e_.png",l="/COCchm-helpdoc/assets/5.4eTHN_9U.png",m="/COCchm-helpdoc/assets/6.CF0DhgGT.png",r="/COCchm-helpdoc/assets/7.CjxhbkvV.png",i="/COCchm-helpdoc/assets/8.DuGRT7gR.png",n="/COCchm-helpdoc/assets/9.BDqaup4w.png",g="/COCchm-helpdoc/assets/10.B8eQlB8f.png",_="/COCchm-helpdoc/assets/11.Cc847HaE.png",C="/COCchm-helpdoc/assets/12.BmkLQv4W.png",w="/COCchm-helpdoc/assets/13.DovgRhA8.png",O="/COCchm-helpdoc/assets/14.BrZk4TaH.png",u="/COCchm-helpdoc/assets/15.DMP7PuEi.png",f="/COCchm-helpdoc/assets/17.CG6knthj.png",S="/COCchm-helpdoc/assets/18.Bea_nwUd.png",b="/COCchm-helpdoc/assets/19.NjrUWfEU.png",x="/COCchm-helpdoc/assets/20.D_cFb7RX.png",V="/COCchm-helpdoc/assets/21.DX1-i_4J.png",B=JSON.parse('{"title":"载入正文","description":"","frontmatter":{"lang":"zh-cn","title":"载入正文"},"headers":[],"relativePath":"VScode/text.md","filePath":"VScode/text.md"}'),k={name:"VScode/text.md"};function D(q,t,v,N,P,T){return s(),c("div",null,t[0]||(t[0]=[e('<h1 id="载入正文" tabindex="-1">载入正文 <a class="header-anchor" href="#载入正文" aria-label="Permalink to &quot;载入正文&quot;">​</a></h1><p>上面已经介绍了如何创建目录，下面将会介绍如何将原译文里面的文本，快速编辑成 html 格式，且用插件批量导出 htm 文件。</p><p>基本上只要结合word 的高级查找功能与 VScode 的正则匹配功能，就可以直接将文本改成 html 的代码，几天内搞完一本扩展。</p><p>不过在那之前，建议你看一遍前面的<a href="./code.html">html 教程</a>。如果你不想看的话，可以看一眼<a href="./html.html"><strong>最最基础且用得到的 html 知识</strong></a>。</p><h2 id="一-在-word-里的编辑" tabindex="-1">一.在 word 里的编辑 <a class="header-anchor" href="#一-在-word-里的编辑" aria-label="Permalink to &quot;一.在 word 里的编辑&quot;">​</a></h2><p>在 word 里，我们可以通过高级查找功能给标题加上结束标签，至于开始标签我们在 VScode 里再加上，下面会示例如何给标题还有所有的文段加上介绍标签。</p><p>首先，打开译文的 word 副本。然后打开<code>查找</code>，再打开<code>高级查找</code>。</p><img alt="" src="'+p+'" width="100%"><p>然后会弹出单独的弹窗，然后在弹窗内切换到<code>替换</code>页面，然后选择搜索栏，再打开<code>高级搜索</code>。</p><img alt="" src="'+d+'" width="100%"><p>然后查看标题的文字属性。</p><img alt="" src="'+a+'" width="100%"><p>然后回到弹窗，点击格式，让搜索的文字格式范围限定到标题的格式里。</p><img alt="" src="'+h+'" width="100%"><p>然后再选择查找，然后再点击<code>特殊格式</code>，输入段落标记。</p><img alt="" src="'+l+'" width="100%"><p>然后再填写替换项，如图所示输入<code>&lt;/FONT&gt;&lt;/STRONG&gt;^p</code>，然后全部替换。</p><img alt="" src="'+m+'" width="100%"><p>全部替换后可以看到标题全部加上后缀了。</p><img alt="" src="'+r+'" width="100%"><p>之后可以参照前面的示范，依次为别的标题后缀加上<code>&lt;/H2&gt;``&lt;/H3&gt;``&lt;/H4&gt;</code>……</p><p>等标题都处理完后，我们就可以给全部文段加上段落结束标签了，首先清除查找项的格式要求，然后输入<code>^p</code>，再设置替换项为<code> ^p</code>。</p><img alt="" src="'+i+'" width="100%"><p>然后可以看到全部文段结尾后面都加上 了，出现图下情况不用在意，我们只需要 word 里面的文本就好了，选中全书的文本，然后复制。</p><img alt="" src="'+n+'" width="100%"><h2 id="二-在-vscode-上的编辑" tabindex="-1">二.在 VScode 上的编辑 <a class="header-anchor" href="#二-在-vscode-上的编辑" aria-label="Permalink to &quot;二.在 VScode 上的编辑&quot;">​</a></h2><p>打开 VScode，右键点击标签页，选择新建文本文件。</p><img alt="" src="'+g+'" width="100%"><p>然后将之前 word 上编辑好的文本贴入其中。</p><img alt="" src="'+_+'" width="100%"><p>然后就可以进行进一步编辑了，我们可以先把开始标签补充上去。如下图，首先选中结束标签，然后再按<code>Ctrl</code>+<code>F2</code>键选中全部匹配项。</p><img alt="" src="'+C+'" width="100%"><p>之后再按<code>Home</code>选中改行开头，再输入开始标签。</p><img alt="" src="'+w+'" width="100%"><p>编辑时要注意，要修复一些重复或者冲突的的书签。</p><img alt="" src="'+O+'" width="100%"><p>之后在 VScode 上把可以一键编辑的编辑好，初步编辑后的成功如下图所示，然后保存。</p><img alt="" src="'+u+'" width="100%"><h2 id="三-用-py-插件批量输出-htm-文件" tabindex="-1">三.用 py 插件批量输出 htm 文件 <a class="header-anchor" href="#三-用-py-插件批量输出-htm-文件" aria-label="Permalink to &quot;三.用 py 插件批量输出 htm 文件&quot;">​</a></h2><p>然后确认保存的文本文件跟你克隆过来的仓库在同一个盘（指 C 盘或 D 盘）里，如果不在的话需要你靠过来一份。反正要确认文本跟插件<code>文本批量输出htm文件.py</code>在同一个盘里。</p><p>然后再用 VScode 打开跟插件同盘的文本文件。</p><img alt="" src="'+f+'" width="100%"><p>右键点击该文本文件的 VScode 里的标签页，然后点击复制路径。</p><img alt="" src="'+S+'" width="100%"><p>再点击<code>文本批量输出htm文件.py</code>（该插件需要用到 python，关于如何下载 py 请看<a href="./program.html">安装相关程序</a>）。然后在插件里右键贴上你的文本文件路径，然后回车。</p><img alt="" src="'+b+'" width="100%"><p>然后<code>文本批量输出htm文件.py</code>所处的文件夹里就会多出一个<code>output_files</code>文件夹，打开文件夹就可以看到里面的导出的 htm 文件了。</p><img alt="" src="'+x+'" width="100%"><p>然后自行将导出的 htm 文件转移到对应的文件夹。</p><img alt="" src="'+V+'" width="100%"><div class="tip custom-block"><p class="custom-block-title">可能遇到的问题</p><ol><li>没导出<code>output_files</code>文件夹或 htm 文件：可能是的文本文件第一行开头格式不是<code>&lt;P&gt;&lt;STRONG&gt;&lt;FONT color=#800000 size= 6&gt;标题&lt;/FONT&gt;&lt;/STRONG&gt;&lt;/P&gt;</code>，或是你页面标题格式不合规。</li><li>导出的 htm 文件名为 Default：你的标题里包含了非法字符，不能作用作为文件名使用，请自己更改文件名。</li><li>wcp 没法导向对应的 htm 文件：你 htm 与 wcp记录的 url 链接的不一样，手动更改文件名字或者 url 链接。</li></ol></div><p>导出 htm 文件后并不意味着结束了，还要在 wcp 里再检查一遍各个项目，看有没有疏漏与错误。要确保项目内容符合<a href="./../creed/creed.html">不全书的规范</a>。</p>',52)]))}const F=o(k,[["render",D]]);export{B as __pageData,F as default};