import{_ as t,o as d,c as e,a as r}from"./app-3d979d38.js";const a={},c=r(`<h1 id="文件管理" tabindex="-1"><a class="header-anchor" href="#文件管理" aria-hidden="true">#</a> 文件管理</h1><h2 id="_1-查看文件信息-ls" tabindex="-1"><a class="header-anchor" href="#_1-查看文件信息-ls" aria-hidden="true">#</a> 1.查看文件信息：<code>ls</code></h2><p><strong>简介：</strong></p><p><code>ls</code> 是英文单词 list 的简写，其功能为列出目录的内容，是用户最常用的命令之一。</p><p>Linux 文件或者目录名称最长可以有 265 个字符，“.” 代表当前目录，“..” 代表上一级目录，以 “.” 开头的文件为隐藏文件，需要用 -a 参数才能显示。</p><p><strong>ls常用参数：</strong></p><table><thead><tr><th>参数</th><th>含义</th></tr></thead><tbody><tr><td>-a</td><td>显示指定目录下所有子目录与文件，包括隐藏文件</td></tr><tr><td>-l</td><td>以列表方式显示文件的详细信息</td></tr><tr><td>-h</td><td>配合 -l 以人性化的方式显示文件大小</td></tr></tbody></table><p><strong>ls 匹配通配符：</strong></p><p>与 DOS 下的文件操作类似，在 Unix/Linux 系统中，也同样允许使用特殊字符来同时引用多个文件名，这些特殊字符被称为通配符。</p><table><thead><tr><th>通配符</th><th>含义</th></tr></thead><tbody><tr><td>*</td><td>文件代表文件名中所有字符</td></tr><tr><td>ls te*</td><td>查找以 <code>te</code> 开头的文件</td></tr><tr><td>ls *html</td><td>查找结尾为 <code>html</code> 的文件</td></tr><tr><td>？</td><td>代表文件名中任意一个字符</td></tr><tr><td>ls ?.c</td><td>只找第一个字符任意，后缀为 <code>.c</code> 的文件</td></tr><tr><td>ls a.?</td><td>只找只有 3 个字符，前 2 字符为 <code>a.</code> ，最后一个字符任意的文件</td></tr><tr><td>[]</td><td><code>&quot;[”</code> 和 <code>“]”</code> 将字符组括起来，表示可以匹配字符组中的任意一个。<code>“-”</code> 用于表示字符范围。</td></tr><tr><td>[abc]</td><td>匹配 a、b、c 中的任意一个</td></tr><tr><td>[a-f]</td><td>匹配从 a 到 f 范围内的的任意一个字符</td></tr><tr><td>ls [a-f]*</td><td>找到从 a 到 f 范围内的的任意一个字符开头的文件</td></tr><tr><td>ls a-f</td><td>查找文件名为 a-f 的文件,当 <code>“-”</code> 处于方括号之外失去通配符的作用</td></tr><tr><td>\\</td><td>如果要使通配符作为普通字符使用，可以在其前面加上转义字符。<code>“?”</code> 和 <code>“*”</code> 处于方括号内时不用使用转义字符就失去通配符的作用。</td></tr><tr><td>ls *a</td><td>查找文件名为 <code>*a</code> 的文件</td></tr></tbody></table><p><img src="http://p1ceh5usj.bkt.clouddn.com/linux/文件管理模块/ls.jpeg" alt=""></p><h2 id="_2-输出重定向命令" tabindex="-1"><a class="header-anchor" href="#_2-输出重定向命令" aria-hidden="true">#</a> 2. 输出重定向命令：<code>&gt;</code></h2><p><strong>简介：</strong></p><p>Linux 允许将命令执行结果重定向到一个文件，本应显示在终端上的内容保存到指定文件中。</p><p>如：ls &gt; test.txt ( test.txt 如果不存在，则创建，存在则覆盖其内容 )</p><p>注意： <code>&gt; 输出重定向会覆盖原来的内容， &gt;&gt; 输出重定向则会追加到文件的尾部。</code></p><p><img src="http://p1ceh5usj.bkt.clouddn.com/linux/文件管理模块/重定向.jpeg" alt=""></p><h2 id="_3-分屏显示-more" tabindex="-1"><a class="header-anchor" href="#_3-分屏显示-more" aria-hidden="true">#</a> 3. 分屏显示：<code>more</code></h2><p><strong>简介：</strong></p><p>查看内容时，在信息过长无法在一屏上显示时，会出现快速滚屏，使得用户无法看清文件的内容，此时可以使用 <code>more</code> 命令，每次只显示一页，按下空格键可以显示下一页，按下 <code>q</code> 键退出显示，按下 <code>h</code> 键可以获取帮助。</p><h2 id="_4-管道" tabindex="-1"><a class="header-anchor" href="#_4-管道" aria-hidden="true">#</a> 4. 管道：<code>|</code></h2><p><strong>简介：</strong></p><p>管道：一个命令的输出可以通过管道做为另一个命令的输入。</p><p>管道我们可以理解现实生活中的管子，管子的一头塞东西进去，另一头取出来，这里 <code>|</code> 的左右分为两端，左端塞东西(写)，右端取东西(读)。</p><p><img src="http://p1ceh5usj.bkt.clouddn.com/linux/文件管理模块/管道.png" alt=""></p><h2 id="_5-清屏-clear" tabindex="-1"><a class="header-anchor" href="#_5-清屏-clear" aria-hidden="true">#</a> 5. 清屏：<code>clear</code></h2><p><code>clear</code> 作用为清除终端上的显示(类似于 DOS 的 cls 清屏功能)，也可使用快捷键：Ctrl + l ( “l” 为字母 “L” 的小写 )。</p><h2 id="_6-切换工作目录-cd" tabindex="-1"><a class="header-anchor" href="#_6-切换工作目录-cd" aria-hidden="true">#</a> 6. 切换工作目录：<code>cd</code></h2><p><strong>简介：</strong></p><p>在使用 Unix/Linux 的时候，经常需要更换工作目录。<code>cd</code> 命令可以帮助用户切换工作目录。<code>Linux 所有的目录和文件名大小写敏感</code></p><p><code>cd</code> 后面可跟绝对路径，也可以跟相对路径。如果省略目录，则默认切换到当前用户的主目录。</p><p><strong>cd 常用命令：</strong></p><table><thead><tr><th>命令</th><th>含义</th></tr></thead><tbody><tr><td><code>cd</code></td><td>切换到当前用户的主目录(/home/用户目录)，用户登陆的时候，默认的目录就是用户的主目录。</td></tr><tr><td><code>cd ~</code></td><td>切换到当前用户的主目录(/home/用户目录)</td></tr><tr><td><code>cd .</code></td><td>切换到当前目录</td></tr><tr><td><code>cd ..</code></td><td>切换到上级目录</td></tr><tr><td><code>cd -</code></td><td>可进入上次所在的目录</td></tr></tbody></table><p>注意：</p><ul><li>如果路径是从根路径开始的，则路径的前面需要加上 “ / ”，如 “ /mnt ”，通常进入某个目录里的文件夹，前面不用加 “ / ”。</li></ul><p><img src="http://p1ceh5usj.bkt.clouddn.com/linux/文件管理模块/cd.png" alt=""></p><h2 id="_7-显示当前路径-pwd" tabindex="-1"><a class="header-anchor" href="#_7-显示当前路径-pwd" aria-hidden="true">#</a> 7. 显示当前路径：<code>pwd</code></h2><p><strong>简介：</strong></p><p>使用 <code>pwd</code> 命令可以显示当前的工作目录，该命令很简单，直接输入 <code>pwd</code> 即可，后面不带参数。</p><h2 id="_8-创建目录-mkdir" tabindex="-1"><a class="header-anchor" href="#_8-创建目录-mkdir" aria-hidden="true">#</a> 8. 创建目录：<code>mkdir</code></h2><p><strong>简介：</strong></p><p>通过 <code>mkdir</code> 命令可以创建一个新的目录。参数 -p 可递归创建目录。</p><p>需要注意的是新建目录的名称不能与当前目录中已有的目录或文件同名，并且目录创建者必须对当前目录具有写权限。</p><p><img src="http://p1ceh5usj.bkt.clouddn.com/linux/文件管理模块/mkdir.png" alt=""></p><h2 id="_9-删除目录-rmdir" tabindex="-1"><a class="header-anchor" href="#_9-删除目录-rmdir" aria-hidden="true">#</a> 9. 删除目录：<code>rmdir</code></h2><p><strong>简介：</strong></p><p>可使用 <code>rmdir</code> 命令删除一个目录。必须离开目录，并且目录必须为空目录，不然提示删除失败。</p><p><img src="http://p1ceh5usj.bkt.clouddn.com/linux/文件管理模块/rmdir.png" alt=""></p><h2 id="_10-删除文件-rm" tabindex="-1"><a class="header-anchor" href="#_10-删除文件-rm" aria-hidden="true">#</a> 10. 删除文件：<code>rm</code></h2><p><strong>简介：</strong></p><p>可通过 <code>rm</code> 删除文件或目录。使用 <code>rm</code> 命令要小心，因为文件删除后不能恢复。为了防止文件误删，可以在 <code>rm</code> 后使用 <code>-i</code> 参数以逐个确认要删除的文件。</p><p><strong><code>rm</code> 常用参数：</strong></p><table><thead><tr><th>参数</th><th>含义</th></tr></thead><tbody><tr><td>-i</td><td>以进行交互式方式执行</td></tr><tr><td>-f</td><td>强制删除，忽略不存在的文件，无需提示</td></tr><tr><td>-r</td><td>递归地删除目录下的内容，删除文件夹时必须加此参数</td></tr></tbody></table><p><img src="http://p1ceh5usj.bkt.clouddn.com/linux/文件管理模块/rm.png" alt=""></p><h2 id="_11-建立链接文件-ln" tabindex="-1"><a class="header-anchor" href="#_11-建立链接文件-ln" aria-hidden="true">#</a> 11. 建立链接文件：<code>ln</code></h2><p><strong>简介：</strong></p><p>Linux 链接文件类似于 Windows 下的快捷方式。</p><p>链接文件分为软链接和硬链接。</p><p>软链接：软链接不占用磁盘空间，源文件删除则软链接失效。</p><p>硬链接：硬链接只能链接普通文件，不能链接目录。</p><p>使用格式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ln 源文件 链接文件
ln -s 源文件 链接文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果<code>没有-s</code>选项代表建立一个硬链接文件，两个文件占用相同大小的硬盘空间，即使删除了源文件，链接文件还是存在，所以-s选项是更常见的形式。</p><p>注意：如果软链接文件和源文件不在同一个目录，源文件要使用绝对路径，不能使用相对路径。</p><p><img src="http://p1ceh5usj.bkt.clouddn.com/linux/文件管理模块/ln.png" alt=""></p><h2 id="_12-查看或者合并文件内容-cat" tabindex="-1"><a class="header-anchor" href="#_12-查看或者合并文件内容-cat" aria-hidden="true">#</a> 12. 查看或者合并文件内容：<code>cat</code></h2><p><strong>简介：</strong></p><p>查看文件内容</p><h2 id="_13-文本搜索-grep" tabindex="-1"><a class="header-anchor" href="#_13-文本搜索-grep" aria-hidden="true">#</a> 13. 文本搜索：<code>grep</code></h2><p><strong>简介：</strong></p><p>Linux 系统中 grep 命令是一种强大的文本搜索工具，grep 允许对文本文件进行模式查找。如果找到匹配模式， grep 打印包含模式的所有行。</p><p>grep一般格式为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>grep [-选项] ‘搜索内容串’文件名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 grep 命令中输入字符串参数时，最好引号或双引号括起来。例如：grep‘a ’1.txt。</p><p><strong><code>grep</code> 常用参数：</strong></p><table><thead><tr><th>选项</th><th>含义</th></tr></thead><tbody><tr><td>-v</td><td>显示不包含匹配文本的所有行（相当于求反）</td></tr><tr><td>-n</td><td>显示匹配行及行号</td></tr><tr><td>-i</td><td>忽略大小写</td></tr></tbody></table><p>grep 搜索内容串可以是正则表达式。</p><p><strong>grep 常用正则表达式：</strong></p><table><thead><tr><th>参数</th><th>含义</th></tr></thead><tbody><tr><td>^a</td><td>行首,搜寻以 m 开头的行；grep -n &#39;^a&#39; 1.txt</td></tr><tr><td>ke$</td><td>行尾,搜寻以 ke 结束的行；grep -n &#39;ke$&#39; 1.txt</td></tr><tr><td>[Ss]igna[Ll]</td><td>匹配 [] 里中一系列字符中的一个；搜寻匹配单词signal、signaL、Signal、SignaL的行；grep -n &#39;[Ss]igna[Ll]&#39; 1.txt</td></tr><tr><td>.</td><td>(点)匹配一个非换行符的字符；匹配 e 和 e 之间有任意一个字符，可以匹配 eee，eae，eve，但是不匹配 ee，eaae；grep -n &#39;e.e&#39; 1.txt</td></tr></tbody></table><p><img src="http://p1ceh5usj.bkt.clouddn.com/linux/文件管理模块/grep.png" alt=""></p><h2 id="_14-查找文件-find" tabindex="-1"><a class="header-anchor" href="#_14-查找文件-find" aria-hidden="true">#</a> 14. 查找文件：<code>find</code></h2><p><strong>简介：</strong></p><p>find 命令功能非常强大，通常用来在特定的目录下搜索符合条件的文件，也可以用来搜索特定用户属主的文件。</p><p><strong>常用用法：</strong></p><table><thead><tr><th>命令</th><th>含义</th></tr></thead><tbody><tr><td>find ./ -name test.sh</td><td>查找当前目录下所有名为test.sh的文件</td></tr><tr><td>find ./ -name &#39;*.sh&#39;</td><td>查找当前目录下所有后缀为.sh的文件</td></tr><tr><td>find ./ -name &quot;[A-Z]*&quot;</td><td>查找当前目录下所有以大写字母开头的文件</td></tr><tr><td>find /tmp -size 2M</td><td>查找在/tmp 目录下等于2M的文件</td></tr><tr><td>find /tmp -size +2M</td><td>查找在/tmp 目录下大于2M的文件</td></tr><tr><td>find /tmp -size -2M</td><td>查找在/tmp 目录下小于2M的文件</td></tr><tr><td>find ./ -size +4k -size -5M</td><td>查找当前目录下大于4k，小于5M的文件</td></tr><tr><td>find ./ -perm 0777</td><td>查找当前目录下权限为 777 的文件或目录</td></tr></tbody></table><h2 id="_1-15-拷贝文件-cp" tabindex="-1"><a class="header-anchor" href="#_1-15-拷贝文件-cp" aria-hidden="true">#</a> 1.15 拷贝文件：<code>cp</code></h2><p><strong>简介：</strong></p><p><code>cp</code> 命令的功能是将给出的文件或目录复制到另一个文件或目录中，相当于 DOS 下的 copy 命令。</p><p><strong>常用参数说明：</strong></p><table><thead><tr><th>选项</th><th>含义</th></tr></thead><tbody><tr><td>-a</td><td>该选项通常在复制目录时使用，它保留链接、文件属性，并递归地复制目录，简单而言，保持文件原有属性。</td></tr><tr><td>-f</td><td>已经存在的目标文件而不提示</td></tr><tr><td>-i</td><td>交互式复制，在覆盖目标文件之前将给出提示要求用户确认</td></tr><tr><td>-r</td><td>若给出的源文件是目录文件，则cp将递归复制该目录下的所有子目录和文件，目标文件必须为一个目录名。</td></tr><tr><td>-v</td><td>显示拷贝进度</td></tr></tbody></table><p><img src="http://p1ceh5usj.bkt.clouddn.com/linux/文件管理模块/find.png" alt=""></p><h2 id="_16-移动文件-mv" tabindex="-1"><a class="header-anchor" href="#_16-移动文件-mv" aria-hidden="true">#</a> 16. 移动文件：<code>mv</code></h2><p><strong>简介：</strong></p><p>用户可以使用 <code>mv</code> 命令来移动文件或目录，也可以给文件或目录重命名。</p><p><strong>常用参数说明：</strong></p><table><thead><tr><th>选项</th><th>含义</th></tr></thead><tbody><tr><td>-f</td><td>禁止交互式操作，如有覆盖也不会给出提示</td></tr><tr><td>-i</td><td>确认交互方式操作，如果mv操作将导致对已存在的目标文件的覆盖，系统会询问是否重写，要求用户回答以避免误覆盖文件</td></tr><tr><td>-v</td><td>显示移动进度</td></tr></tbody></table><p><img src="http://p1ceh5usj.bkt.clouddn.com/linux/文件管理模块/mv.png" alt=""></p><h2 id="_17-归档管理-tar" tabindex="-1"><a class="header-anchor" href="#_17-归档管理-tar" aria-hidden="true">#</a> 17. 归档管理：<code>tar</code></h2><p><strong>简介：</strong></p><p>计算机中的数据经常需要备份，tar 是 Unix/Linux 中最常用的备份工具，此命令可以把一系列文件归档到一个大文件中，也可以把档案文件解开以恢复数据。其实说白了，就是打包。</p><p><strong><code>tar</code> 使用格式：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tar [参数] 打包文件名 文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong><code>tar</code> 常用参数：</strong></p><p>tar 命令很特殊，其参数前面可以使用“-”，也可以不使用。</p><table><thead><tr><th>参数</th><th>含义</th></tr></thead><tbody><tr><td>-c</td><td>生成档案文件，创建打包文件</td></tr><tr><td>-v</td><td>列出归档解档的详细过程，显示进度</td></tr><tr><td>-f</td><td>指定档案文件名称，f后面一定是.tar文件，所以必须放选项最后</td></tr><tr><td>-t</td><td>列出档案中包含的文件</td></tr><tr><td>-x</td><td>解开档案文件</td></tr></tbody></table><p>注意：除了f需要放在参数的最后，其它参数的顺序任意。</p><h2 id="_18-文件压缩解压-gzip" tabindex="-1"><a class="header-anchor" href="#_18-文件压缩解压-gzip" aria-hidden="true">#</a> 18. 文件压缩解压：<code>gzip</code></h2><p><strong>简介：</strong></p><p>tar 与 gzip 命令结合使用实现文件打包、压缩。 tar 只负责打包文件，但不压缩，用 gzip 压缩 tar 打包后的文件，其扩展名一般用xxxx.tar.gz。</p><p><strong><code>gzip</code> 使用格式如下：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>gzip  [选项]  被压缩文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>常用选项：</strong></p><table><thead><tr><th>选项</th><th>含义</th></tr></thead><tbody><tr><td>-d</td><td>解压</td></tr><tr><td>-r</td><td>压缩所有子目录</td></tr></tbody></table><p>tar这个命令并没有压缩的功能，它只是一个打包的命令，但是在tar命令中增加一个选项(-z)可以调用gzip实现了一个压缩的功能，实行一个先打包后压缩的过程。</p><p>压缩用法：tar cvzf 压缩包包名 文件1 文件2 ...</p><p><code>-z ：指定压缩包的格式为：file.tar.gz</code></p><p>解压用法： tar zxvf 压缩包包名</p><p><code>-z:指定压缩包的格式为：file.tar.gz</code></p><p>解压到指定目录：-C （大写字母“C”）</p><h2 id="_19-文件压缩解压-bzip2" tabindex="-1"><a class="header-anchor" href="#_19-文件压缩解压-bzip2" aria-hidden="true">#</a> 19. 文件压缩解压：<code>bzip2</code></h2><p><strong>简介：</strong></p><p>tar与bzip2命令结合使用实现文件打包、压缩(用法和gzip一样)。</p><p>tar只负责打包文件，但不压缩，用bzip2压缩tar打包后的文件，其扩展名一般用xxxx.tar.gz2。</p><p>在tar命令中增加一个选项(-j)可以调用bzip2实现了一个压缩的功能，实行一个先打包后压缩的过程。</p><p>压缩用法：tar -jcvf 压缩包包名 文件...(tar jcvf bk.tar.bz2 *.c)</p><p>解压用法：tar -jxvf 压缩包包名 (tar jxvf bk.tar.bz2)</p><h2 id="_20-文件压缩解压-zip-、unzip" tabindex="-1"><a class="header-anchor" href="#_20-文件压缩解压-zip-、unzip" aria-hidden="true">#</a> 20. 文件压缩解压：<code>zip</code> 、<code>unzip</code></h2><p>通过zip压缩文件的目标文件不需要指定扩展名，默认扩展名为zip。</p><p>压缩文件：zip [-r] 目标文件(没有扩展名) 源文件</p><p>解压文件：unzip -d 解压后目录文件 压缩文件</p><h2 id="_21-查看命令位置-which" tabindex="-1"><a class="header-anchor" href="#_21-查看命令位置-which" aria-hidden="true">#</a> 21. 查看命令位置：<code>which</code></h2><p><strong>简介：</strong></p><p>查看命令的路径</p><p><img src="http://p1ceh5usj.bkt.clouddn.com/linux/文件管理模块/which.png" alt=""></p>`,134),o=[c];function p(n,i){return d(),e("div",null,o)}const s=t(a,[["render",p],["__file","list-file.html.vue"]]);export{s as default};
