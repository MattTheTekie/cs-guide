import{_ as t,r as o,o as p,c as l,d as s,e as n,b as e,a as r}from"./app-3d979d38.js";const i="/cs-guide/assets/1147484-20170604182524696-201939906-0ee81004.png",c="/cs-guide/assets/1147484-20170604182545868-246271450-8af4e7c7.png",d={},u=r(`<h1 id="管道" tabindex="-1"><a class="header-anchor" href="#管道" aria-hidden="true">#</a> 管道</h1><h2 id="_1-管道-pipeline-是什么" tabindex="-1"><a class="header-anchor" href="#_1-管道-pipeline-是什么" aria-hidden="true">#</a> 1. 管道（pipeline）是什么</h2><p>在Shell中一个重要的基本概念就是管道（pipeline），即在一组命令中，输出的命令结果成为下一个命令的输入参数。管道的概念与真实生活中的生产线比较相似：在不同的生产环节进行连续的再加工，如下图例子：</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment"># Get-ChildItem |Where-Object {$_.Length -gt 200}|Sort-Object -Descending Name</span>

    Directory: E:\\tmp\\<span class="token function">ps</span>

Mode                 LastWriteTime         Length Name
<span class="token operator">--</span><span class="token operator">--</span>                 <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>         <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span> <span class="token operator">--</span><span class="token operator">--</span>
<span class="token operator">-</span>a-<span class="token operator">--</span>            2022/4/2    23:34           4318 test<span class="token punctuation">.</span>txt
<span class="token operator">-</span>a-<span class="token operator">--</span>            2022/4/2    23:34           4318 Test<span class="token punctuation">.</span>md
<span class="token operator">-</span>a-<span class="token operator">--</span>            2022/4/2    23:34           4318 <span class="token function">test-name</span><span class="token punctuation">.</span>md
<span class="token operator">-</span>a-<span class="token operator">--</span>            2022/4/2    23:34           4318 <span class="token function">test-name</span> <span class="token operator">-</span> 副本<span class="token punctuation">.</span>md
<span class="token operator">-</span>a-<span class="token operator">--</span>            2022/4/2    23:34           4318 test <span class="token operator">-</span> 副本<span class="token punctuation">.</span>txt
<span class="token operator">-</span>a-<span class="token operator">--</span>            2022/4/2    23:34           4318 Test <span class="token operator">-</span> 副本<span class="token punctuation">.</span>md
<span class="token operator">-</span>a-<span class="token operator">--</span>           2022/5/11    10:11            559 teeResult<span class="token punctuation">.</span>txt
<span class="token operator">-</span>a-<span class="token operator">--</span>           2022/5/11    10:39            753 outfile<span class="token punctuation">.</span>txt
<span class="token operator">-</span>a-<span class="token operator">--</span>           2022/5/11    10:35            209 ateeResult<span class="token punctuation">.</span>txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token function">Get-ChildItem</span> <span class="token punctuation">|</span><span class="token function">Where-Object</span> <span class="token punctuation">{</span><span class="token variable">$_</span><span class="token punctuation">.</span>Length <span class="token operator">-gt</span> 200<span class="token punctuation">}</span><span class="token punctuation">|</span><span class="token function">Sort-Object</span> <span class="token operator">-</span>Descending Name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>Get-ChildItem</code>意思是获取当前路径的所有项目，<code>|Where-Object {$_.Length -gt 200}</code>意思是查看上一步结果，取所有长度大于200的项目， <code>|Sort-Object -Descending Name</code>意思是查看上一步结果，按照Name进行倒叙排列。</p><p><strong>在PowerShell<strong><strong>中，使用管道符号（|</strong></strong>）来划分管道中的每个命令，上述例子说明了管道的强大功能，同时PowerShell****在管道中传递的是高保真对象，不仅仅是文本描述。</strong></p><p>下面主要给大家介绍一下常用的管道处理命令。</p><h2 id="_2-where-object-过滤列表项或命令输出结果" tabindex="-1"><a class="header-anchor" href="#_2-where-object-过滤列表项或命令输出结果" aria-hidden="true">#</a> 2. Where-Object：过滤列表项或命令输出结果</h2><p>可以使用Where-Object（别名是where和?）从列表或者命令输出结果中过滤选择你需要的项目。</p><p>对于输入的每一项，Where-Object都会根据{}中定义的脚本块对输入进行计算，如果返回True，则输出，否则不输出。如下例子：</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>其中的where-object可以用where和?代替</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token function">Get-ChildItem</span> <span class="token punctuation">|</span>? <span class="token punctuation">{</span><span class="token variable">$_</span><span class="token punctuation">.</span>Length <span class="token operator">-gt</span> 200<span class="token punctuation">}</span><span class="token punctuation">|</span><span class="token function">Sort-Object</span> <span class="token operator">-</span>Descending Name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><p>{}表示一个脚本块，可以输入一系列PowerShell命令，其中<code>$_</code>代表当前输入对象，在这个例子中，<code>$_</code>就代表一个文件项目。-gt是比较操作符，意思是大于，关于比较操作符的介绍如下：</p><p>PowerShell中比较操作符是用于对表达式进行比较的。默认情况比较操作符不区分大小写，如果想要区分，需要使用-C前缀，不需要区分的，使用-I前缀。</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment"># Get-ChildItem|Where-Object {$_.Name -ilike &quot;Test*&quot;}</span>

    Directory: E:\\tmp\\<span class="token function">ps</span>

Mode                 LastWriteTime         Length Name
<span class="token operator">--</span><span class="token operator">--</span>                 <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>         <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span> <span class="token operator">--</span><span class="token operator">--</span>
<span class="token operator">-</span>a-<span class="token operator">--</span>            2022/4/2    23:34           4318 Test <span class="token operator">-</span> 副本<span class="token punctuation">.</span>md
<span class="token operator">-</span>a-<span class="token operator">--</span>            2022/4/2    23:34           4318 test <span class="token operator">-</span> 副本<span class="token punctuation">.</span>txt
<span class="token operator">-</span>a-<span class="token operator">--</span>            2022/4/2    23:34           4318 <span class="token function">test-name</span> <span class="token operator">-</span> 副本<span class="token punctuation">.</span>md
<span class="token operator">-</span>a-<span class="token operator">--</span>            2022/4/2    23:34           4318 <span class="token function">test-name</span><span class="token punctuation">.</span>md
<span class="token operator">-</span>a-<span class="token operator">--</span>            2022/4/2    23:34           4318 Test<span class="token punctuation">.</span>md
<span class="token operator">-</span>a-<span class="token operator">--</span>            2022/4/2    23:34           4318 test<span class="token punctuation">.</span>txt

<span class="token comment"># Get-ChildItem|Where-Object {$_.Name -clike &quot;Test*&quot;}</span>

    Directory: E:\\tmp\\<span class="token function">ps</span>

Mode                 LastWriteTime         Length Name
<span class="token operator">--</span><span class="token operator">--</span>                 <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>         <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span> <span class="token operator">--</span><span class="token operator">--</span>
<span class="token operator">-</span>a-<span class="token operator">--</span>            2022/4/2    23:34           4318 Test <span class="token operator">-</span> 副本<span class="token punctuation">.</span>md
<span class="token operator">-</span>a-<span class="token operator">--</span>            2022/4/2    23:34           4318 Test<span class="token punctuation">.</span>md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所有可用的比较操作符如下表格：</p><table><thead><tr><th>操作符</th><th>意义</th><th>返回True的例子</th></tr></thead><tbody><tr><td>-eq</td><td>相等符</td><td>10 -eq 10</td></tr><tr><td>-ne</td><td>不相等符</td><td>10 -ne 9</td></tr><tr><td>-ge</td><td>大于等于操作符</td><td>10 -ge 9</td></tr><tr><td>-gt</td><td>大于操作符</td><td>10 -gt 9</td></tr><tr><td>-lt</td><td>小于操作符</td><td>10 -lt 11</td></tr><tr><td>-le</td><td>小于等于操作符</td><td>10 -le 11</td></tr><tr><td>-like</td><td>相似操作符</td><td>&quot;Bob&quot; -like &quot;*ob&quot;</td></tr><tr><td>-notlike</td><td>非相似操作符</td><td>&quot;Bob&quot; -notlike &quot;1*ob&quot;</td></tr><tr><td>-match</td><td>匹配操作符</td><td>&quot;Bob&quot; -match &quot;B*ob&quot;</td></tr><tr><td>-notmatch</td><td>非匹配操作符</td><td>&quot;Bob&quot; -notmatch &quot;123*&quot;</td></tr><tr><td>-contains</td><td>包含操作符</td><td>&quot;Bob&quot;,&quot;Bob1&quot; -contains &quot;Bob&quot;</td></tr><tr><td>-notcontains</td><td>非包含操作符</td><td>&quot;Bob&quot;,&quot;Bob1&quot; -notcontains &quot;ob&quot;</td></tr><tr><td>-is</td><td>类型操作符</td><td>&quot;Bob&quot; -is &quot;System.String&quot;</td></tr><tr><td>-isnot</td><td>非类型操作符</td><td>&quot;Bob&quot; -isnot &quot;System.Int32&quot;</td></tr></tbody></table><h2 id="_3-foreach-object-处理列表或者命令输出的每一个项目" tabindex="-1"><a class="header-anchor" href="#_3-foreach-object-处理列表或者命令输出的每一个项目" aria-hidden="true">#</a> 3. ForEach-Object：处理列表或者命令输出的每一个项目</h2><p>使用ForEach-Object命令（别名是foreach和%）来处理列表中的每一项。</p><p>使用例子如下：</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment"># 1..10|ForEach-Object {$_ *5}</span>
5
10
15
20
25
30
35
40
45
50
<span class="token comment"># 1..10|% {$_ *5}</span>
5
10
15
20
25
30
35
40
45
50
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例子中1..10的意思是简单声明了一个1~10的一组数字。其中处理列表中每一项还可以用for、foreach、do和while等，以后会更详细的介绍。</p><h2 id="_4-select-object-选择列表项或输出结果只输出要的结果" tabindex="-1"><a class="header-anchor" href="#_4-select-object-选择列表项或输出结果只输出要的结果" aria-hidden="true">#</a> 4. Select-Object：选择列表项或输出结果只输出要的结果</h2><p>使用Select-Object（别名是select）对象可以选择一个对象或者一组对象的指定属性。还可以从对象的数组中选择唯一的对象，也可以从对象数组的开头或末尾选择指定个数的对象。</p><p>如果使用 Select-Object 来选择指定属性，则它会从输入对象中复制这些属性的值，并创建具有指定的属性和复制的值的新对象。使用 Property 参数指定您要选择的属性。或者，使用 First、Last、Unique、Skip 和 Index 参数从输入对象数组中选择特定对象。</p><p>使用例子如下：</p><p>a) 选择当前路径下所有项目的Name和Length属性：</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment"># Get-ChildItem|Select-Object Name,Length</span>

Name                Length
<span class="token operator">--</span><span class="token operator">--</span>                <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span>
ateeResult<span class="token punctuation">.</span>txt         209
outfile<span class="token punctuation">.</span>txt            753
teeResult<span class="token punctuation">.</span>txt          559
Test <span class="token operator">-</span> 副本<span class="token punctuation">.</span>md        4318
test <span class="token operator">-</span> 副本<span class="token punctuation">.</span>txt       4318
<span class="token function">test-name</span> <span class="token operator">-</span> 副本<span class="token punctuation">.</span>md   4318
<span class="token function">test-name</span><span class="token punctuation">.</span>md          4318
Test<span class="token punctuation">.</span>md               4318
test<span class="token punctuation">.</span>txt              4318
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>b) 选择当前路径下前2个项目：</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment">#  E:/tmp/ps</span>
<span class="token comment"># Get-ChildItem |Select-Object -First 2</span>

    Directory: E:\\tmp\\<span class="token function">ps</span>

Mode                 LastWriteTime         Length Name
<span class="token operator">--</span><span class="token operator">--</span>                 <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>         <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span> <span class="token operator">--</span><span class="token operator">--</span>
<span class="token operator">-</span>a-<span class="token operator">--</span>            2022/4/2    23:34           4318 <span class="token function">test-name</span><span class="token punctuation">.</span>md
<span class="token operator">-</span>a-<span class="token operator">--</span>            2022/4/2    23:34           4318 Test<span class="token punctuation">.</span>md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>c) 选择当前路径下所有项目的Name和自定义属性，名字叫做Last Modified Day，结果是通过LastWriteTime属性算出来的：</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment"># dir|select -Property @{Name=&quot;上次修改&quot;;Expression={$_.LastWriteTime.DayOfWeek}},Name</span>

 上次修改 Name
 <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span> <span class="token operator">--</span><span class="token operator">--</span>
Wednesday ateeResult<span class="token punctuation">.</span>txt
Wednesday outfile<span class="token punctuation">.</span>txt
Wednesday teeResult<span class="token punctuation">.</span>txt
 Saturday Test <span class="token operator">-</span> 副本<span class="token punctuation">.</span>md
 Saturday test <span class="token operator">-</span> 副本<span class="token punctuation">.</span>txt
 Saturday <span class="token function">test-name</span> <span class="token operator">-</span> 副本<span class="token punctuation">.</span>md
 Saturday <span class="token function">test-name</span><span class="token punctuation">.</span>md
 Saturday Test<span class="token punctuation">.</span>md
 Saturday test<span class="token punctuation">.</span>txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>d) 选择当前路径下第一个和第六个项目：</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment"># dir|Select-Object -Index 0,5</span>
 
    Directory: E:\\tmp\\<span class="token function">ps</span>

Mode                 LastWriteTime         Length Name
<span class="token operator">--</span><span class="token operator">--</span>                 <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>         <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span> <span class="token operator">--</span><span class="token operator">--</span>
<span class="token operator">-</span>a-<span class="token operator">--</span>            2022/4/2    23:34           4318 <span class="token function">test-name</span><span class="token punctuation">.</span>md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>e) 选择当前路径下除第五个项目外的所有项目：</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment"># dir|Select-Object -Skip 4</span>
 

    Directory: E:\\tmp\\<span class="token function">ps</span>

Mode                 LastWriteTime         Length Name
<span class="token operator">--</span><span class="token operator">--</span>                 <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>         <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span> <span class="token operator">--</span><span class="token operator">--</span>
<span class="token operator">-</span>a-<span class="token operator">--</span>            2022/4/2    23:34           4318 Test<span class="token punctuation">.</span>md
<span class="token operator">-</span>a-<span class="token operator">--</span>            2022/4/2    23:34           4318 test<span class="token punctuation">.</span>txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>f) 显示数组中的唯一数字：</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment"># 1,1,2,2,3,3,4,4,5,5,6,6,&quot;test&quot;|Select-Object -Unique</span>
1
2
3
4
5
6
test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-sort-object-对列表项或者输出结果进行排序" tabindex="-1"><a class="header-anchor" href="#_5-sort-object-对列表项或者输出结果进行排序" aria-hidden="true">#</a> 5. Sort-Object：对列表项或者输出结果进行排序</h2><p>使用Sort-Object（别名是sort）可以按照特定属性值对对象进行排序。您可以指定一个属性或多个属性（用于多键排序），也可以选择区分大小写或不区分大小写的排序。您还可以指示 Sort-Object 只显示对于特定属性具有唯一值的对象。</p><p>如果某个对象不具有所指定的属性之一，则 cmdlet 会将该对象的属性值解释为 NULL，并将其放置在排序顺序的末尾。</p><p>使用例子如下：</p><p>a) 对当前路径下所有的项目按照长度从小到大排序：</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>
<span class="token comment"># dir|Sort-Object -Property Length</span>

    Directory: E:\\tmp\\<span class="token function">ps</span>

Mode                 LastWriteTime         Length Name
<span class="token operator">--</span><span class="token operator">--</span>                 <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>         <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span> <span class="token operator">--</span><span class="token operator">--</span>
<span class="token operator">-</span>a-<span class="token operator">--</span>            2022/4/2    23:34           4318 Test <span class="token operator">-</span> 副本<span class="token punctuation">.</span>md
<span class="token operator">-</span>a-<span class="token operator">--</span>            2022/4/2    23:34           4318 test <span class="token operator">-</span> 副本<span class="token punctuation">.</span>txt
<span class="token operator">-</span>a-<span class="token operator">--</span>            2022/4/2    23:34           4318 <span class="token function">test-name</span> <span class="token operator">-</span> 副本<span class="token punctuation">.</span>md
<span class="token operator">-</span>a-<span class="token operator">--</span>            2022/4/2    23:34           4318 <span class="token function">test-name</span><span class="token punctuation">.</span>md
<span class="token operator">-</span>a-<span class="token operator">--</span>            2022/4/2    23:34           4318 Test<span class="token punctuation">.</span>md
<span class="token operator">-</span>a-<span class="token operator">--</span>            2022/4/2    23:34           4318 test<span class="token punctuation">.</span>txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>b) 对整个数组的唯一性数字按照降序排列：</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment"># 1,1,2,2,3,3,4,4,5,5,6,6,&quot;test&quot;|Sort-Object -Descending -Unique</span>
test
6
5
4
3
2
1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-tee-object-保存并输出列表项或者输出结果" tabindex="-1"><a class="header-anchor" href="#_6-tee-object-保存并输出列表项或者输出结果" aria-hidden="true">#</a> 6. Tee-Object：保存并输出列表项或者输出结果</h2><p>使用Tee-Object（别名是tee）命令可以将命令输出结果保存在文件或者变量中，同时将其显示在控制台中。</p><p>a) 将当前路径下所有大小大于900的项目都保存到文件中并显示在控制台中：</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment"># dir|where {$_.Length -gt 900}|Tee-Object -FilePath teeResult.txt</span>

    Directory: E:\\tmp\\<span class="token function">ps</span>

Mode                 LastWriteTime         Length Name
<span class="token operator">--</span><span class="token operator">--</span>                 <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>         <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span> <span class="token operator">--</span><span class="token operator">--</span>
<span class="token operator">-</span>a-<span class="token operator">--</span>            2022/4/2    23:34           4318 Test <span class="token operator">-</span> 副本<span class="token punctuation">.</span>md
<span class="token operator">-</span>a-<span class="token operator">--</span>            2022/4/2    23:34           4318 test <span class="token operator">-</span> 副本<span class="token punctuation">.</span>txt
<span class="token operator">-</span>a-<span class="token operator">--</span>            2022/4/2    23:34           4318 <span class="token function">test-name</span> <span class="token operator">-</span> 副本<span class="token punctuation">.</span>md
<span class="token operator">-</span>a-<span class="token operator">--</span>            2022/4/2    23:34           4318 <span class="token function">test-name</span><span class="token punctuation">.</span>md
<span class="token operator">-</span>a-<span class="token operator">--</span>            2022/4/2    23:34           4318 Test<span class="token punctuation">.</span>md
<span class="token operator">-</span>a-<span class="token operator">--</span>            2022/4/2    23:34           4318 test<span class="token punctuation">.</span>txt

 
<span class="token comment"># Get-Content .\\teeResult.txt</span>

    Directory: E:\\tmp\\<span class="token function">ps</span>

Mode                 LastWriteTime         Length Name
<span class="token operator">--</span><span class="token operator">--</span>                 <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>         <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span> <span class="token operator">--</span><span class="token operator">--</span>
<span class="token operator">-</span>a-<span class="token operator">--</span>            2022/4/2    23:34           4318 Test <span class="token operator">-</span> 副本<span class="token punctuation">.</span>md
<span class="token operator">-</span>a-<span class="token operator">--</span>            2022/4/2    23:34           4318 test <span class="token operator">-</span> 副本<span class="token punctuation">.</span>txt
<span class="token operator">-</span>a-<span class="token operator">--</span>            2022/4/2    23:34           4318 <span class="token function">test-name</span> <span class="token operator">-</span> 副本<span class="token punctuation">.</span>md
<span class="token operator">-</span>a-<span class="token operator">--</span>            2022/4/2    23:34           4318 <span class="token function">test-name</span><span class="token punctuation">.</span>md
<span class="token operator">-</span>a-<span class="token operator">--</span>            2022/4/2    23:34           4318 Test<span class="token punctuation">.</span>md
<span class="token operator">-</span>a-<span class="token operator">--</span>            2022/4/2    23:34           4318 test<span class="token punctuation">.</span>txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>b) 将当前路径下所有大小大于900的项目都保存在变量中并显示在控制台中：</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>
<span class="token comment"># $test=&quot;first&quot;</span>
 
<span class="token comment"># dir|where {$_.Length -gt 900}|Tee-Object -Variable $test</span>

    Directory: E:\\tmp\\<span class="token function">ps</span>

Mode                 LastWriteTime         Length Name
<span class="token operator">--</span><span class="token operator">--</span>                 <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>         <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span> <span class="token operator">--</span><span class="token operator">--</span>
<span class="token operator">-</span>a-<span class="token operator">--</span>            2022/4/2    23:34           4318 Test <span class="token operator">-</span> 副本<span class="token punctuation">.</span>md
<span class="token operator">-</span>a-<span class="token operator">--</span>            2022/4/2    23:34           4318 test <span class="token operator">-</span> 副本<span class="token punctuation">.</span>txt
<span class="token operator">-</span>a-<span class="token operator">--</span>            2022/4/2    23:34           4318 <span class="token function">test-name</span> <span class="token operator">-</span> 副本<span class="token punctuation">.</span>md
<span class="token operator">-</span>a-<span class="token operator">--</span>            2022/4/2    23:34           4318 <span class="token function">test-name</span><span class="token punctuation">.</span>md
<span class="token operator">-</span>a-<span class="token operator">--</span>            2022/4/2    23:34           4318 Test<span class="token punctuation">.</span>md
<span class="token operator">-</span>a-<span class="token operator">--</span>            2022/4/2    23:34           4318 test<span class="token punctuation">.</span>txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-group-object-对列表项或者输出结果进行分组" tabindex="-1"><a class="header-anchor" href="#_7-group-object-对列表项或者输出结果进行分组" aria-hidden="true">#</a> 7. Group-Object：对列表项或者输出结果进行分组</h2><p>使用Group-Object（group）对列表项或者输出结果进行分组，指定的属性包含相同值的组对象。Group-Object 返回一个表，其中每个属性值对应一行，同时一个列显示具有该值的项目数。</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment"># dir|Group-Object -Property Length</span>

Count Name                      <span class="token function">Group</span>
<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span> <span class="token operator">--</span><span class="token operator">--</span>                      <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>
    1 559                       <span class="token punctuation">{</span>E:\\tmp\\<span class="token function">ps</span>\\teeResult<span class="token punctuation">.</span>txt<span class="token punctuation">}</span>
    6 4318                      <span class="token punctuation">{</span>E:\\tmp\\<span class="token function">ps</span>\\Test <span class="token operator">-</span> 副本<span class="token punctuation">.</span>md<span class="token punctuation">,</span> E:\\tmp\\<span class="token function">ps</span>\\test <span class="token operator">-</span> 副本<span class="token punctuation">.</span>txt<span class="token punctuation">,</span> E:\\tmp\\<span class="token function">ps</span>\\<span class="token function">test-name</span> <span class="token operator">-</span> 副本<span class="token punctuation">.</span>md<span class="token punctuation">,</span> E…<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还可以让返回的对象是个HashTable——key-value的键值对数组，指定-AsHashTable参数：</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment"># dir|Group-Object -Property Length -AsHashTable -AsString</span>

Name                           Value
<span class="token operator">--</span><span class="token operator">--</span>                           <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>
559                            <span class="token punctuation">{</span>E:\\tmp\\<span class="token function">ps</span>\\teeResult<span class="token punctuation">.</span>txt<span class="token punctuation">}</span>
209                            <span class="token punctuation">{</span>E:\\tmp\\<span class="token function">ps</span>\\ateeResult<span class="token punctuation">.</span>txt<span class="token punctuation">}</span>
753                            <span class="token punctuation">{</span>E:\\tmp\\<span class="token function">ps</span>\\outfile<span class="token punctuation">.</span>txt<span class="token punctuation">}</span>
4318                           <span class="token punctuation">{</span>E:\\tmp\\<span class="token function">ps</span>\\Test <span class="token operator">-</span> 副本<span class="token punctuation">.</span>md<span class="token punctuation">,</span> E:\\tmp\\<span class="token function">ps</span>\\test <span class="token operator">-</span> 副本<span class="token punctuation">.</span>txt<span class="token punctuation">,</span> E:\\tmp\\<span class="token function">ps</span>\\<span class="token function">test-name</span> <span class="token operator">-</span> 副本<span class="token punctuation">.</span>md<span class="token punctuation">,</span> E<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-measure-object-对列表项或输出结果进行计算" tabindex="-1"><a class="header-anchor" href="#_8-measure-object-对列表项或输出结果进行计算" aria-hidden="true">#</a> 8. Measure-Object：对列表项或输出结果进行计算</h2><p>使用Measure-Object（measure）计算对象的数字属性以及字符串对象（如文本文件）中的字符数、单词数和行数。它计算某些类型对象的属性值。Measure-Object 执行三种类型测量，具体取决于命令中的参数。可以对对象计数并计算数字值的最小值、最大值、总和及平均值。对于文本对象，它可以计数并计算行数、单词数和字符数。</p><p>a) 计算当前路径下项目的总数：</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment"># dir |Measure-Object</span>

Count             : 7
Average           :
Sum               :
Maximum           :
Minimum           :
StandardDeviation :
Property          :
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>b) 计算当前路径下项目的长度的最小值、最大值以及平均值：</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment"># dir|Measure-Object -Property Length -Minimum -Maximum -Average</span>

Count             : 7
Average           : 3781
Sum               :
Maximum           : 4318
Minimum           : 559
StandardDeviation :
Property          : Length
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>c) 计算当前文件中字符、行、单词的总数：</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment"># Get-Content .\\teeResult.txt |measure -Character -Line -Word</span>

Lines Words Characters Property
<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span> <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span> <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span> <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span>
    9    46        523
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-compare-object-对两组对象进行比较" tabindex="-1"><a class="header-anchor" href="#_9-compare-object-对两组对象进行比较" aria-hidden="true">#</a> 9. Compare-Object：对两组对象进行比较</h2><p>用Compare-Object（别名是compare和diff）可以将两组对象进行比较，一组对象为Reference组，而另一组为Difference组。比较的结果将指示属性值是只出现在 Reference 组中的对象中（由 &lt;= 符号指示），或是只出现在 Difference 组中的对象中（由 =&gt; 符号指示），抑或（在指定了 IncludeEqual 参数的情况下）同时出现在这两个对象中（由 == 符号指示）。</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment"># $res=Get-Content .\\teeResult.txt</span>

<span class="token comment"># Get-Content .\\ateeResult.txt |Compare-Object $res|fl</span>

InputObject   : <span class="token operator">-</span>a-<span class="token operator">--</span>            2022/4/2    23:34           4318 Test <span class="token operator">-</span> <span class="token punctuation">.</span>md
SideIndicator : =&gt;

InputObject   : <span class="token operator">-</span>a-<span class="token operator">--</span>            2022/4/2    23:34           4318 test <span class="token operator">-</span> <span class="token punctuation">.</span>txt
SideIndicator : =&gt;

InputObject   : <span class="token operator">-</span>a-<span class="token operator">--</span>            2022/4/2    23:34           4318 Test <span class="token operator">-</span> 副本<span class="token punctuation">.</span>md
SideIndicator : &lt;=

InputObject   : <span class="token operator">-</span>a-<span class="token operator">--</span>            2022/4/2    23:34           4318 test <span class="token operator">-</span> 副本<span class="token punctuation">.</span>txt
SideIndicator : &lt;=
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-convertto-html-将对象转换为html" tabindex="-1"><a class="header-anchor" href="#_10-convertto-html-将对象转换为html" aria-hidden="true">#</a> 10. ConvertTo-Html：将对象转换为HTML</h2><p>用ConvertTo-Html可以将Microsoft.Net Framework对象转换为可在Web浏览器中显示的HTML：</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment"># Get-Date |ConvertTo-Html</span>
&lt;<span class="token operator">!</span>DOCTYPE html PUBLIC <span class="token string">&quot;-//W3C//DTD XHTML 1.0 Strict//EN&quot;</span>  <span class="token string">&quot;http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd&quot;</span>&gt;
&lt;html xmlns=<span class="token string">&quot;http://www.w3.org/1999/xhtml&quot;</span>&gt;
&lt;head&gt;
&lt;title&gt;HTML TABLE&lt;<span class="token operator">/</span>title&gt;
&lt;<span class="token operator">/</span>head&gt;&lt;body&gt;
&lt;table&gt;
&lt;colgroup&gt;&lt;col/&gt;&lt;col/&gt;&lt;col/&gt;&lt;col/&gt;&lt;col/&gt;&lt;col/&gt;&lt;col/&gt;&lt;col/&gt;&lt;col/&gt;&lt;col/&gt;&lt;col/&gt;&lt;col/&gt;&lt;col/&gt;&lt;col/&gt;&lt;col/&gt;&lt;<span class="token operator">/</span>colgroup&gt;
&lt;tr&gt;&lt;th&gt;DisplayHint&lt;<span class="token operator">/</span>th&gt;&lt;th&gt;DateTime&lt;<span class="token operator">/</span>th&gt;&lt;th&gt;Date&lt;<span class="token operator">/</span>th&gt;&lt;th&gt;Day&lt;<span class="token operator">/</span>th&gt;&lt;th&gt;DayOfWeek&lt;<span class="token operator">/</span>th&gt;&lt;th&gt;DayOfYear&lt;<span class="token operator">/</span>th&gt;&lt;th&gt;Hour&lt;<span class="token operator">/</span>th&gt;&lt;th&gt;Kind&lt;<span class="token operator">/</span>th&gt;&lt;th&gt;Millisecond&lt;<span class="token operator">/</span>th&gt;&lt;th&gt;Minute&lt;<span class="token operator">/</span>th&gt;&lt;th&gt;Month&lt;<span class="token operator">/</span>th&gt;&lt;th&gt;Second&lt;<span class="token operator">/</span>th&gt;&lt;th&gt;Ticks&lt;<span class="token operator">/</span>th&gt;&lt;th&gt;TimeOfDay&lt;<span class="token operator">/</span>th&gt;&lt;th&gt;Year&lt;<span class="token operator">/</span>th&gt;&lt;<span class="token operator">/</span>tr&gt;
&lt;tr&gt;&lt;td&gt;DateTime&lt;<span class="token operator">/</span>td&gt;&lt;td&gt;2022年5月11日 10:33:47&lt;<span class="token operator">/</span>td&gt;&lt;td&gt;2022/5/11 0:00:00&lt;<span class="token operator">/</span>td&gt;&lt;td&gt;11&lt;<span class="token operator">/</span>td&gt;&lt;td&gt;Wednesday&lt;<span class="token operator">/</span>td&gt;&lt;td&gt;131&lt;<span class="token operator">/</span>td&gt;&lt;td&gt;10&lt;<span class="token operator">/</span>td&gt;&lt;td&gt;Local&lt;<span class="token operator">/</span>td&gt;&lt;td&gt;288&lt;<span class="token operator">/</span>td&gt;&lt;td&gt;33&lt;<span class="token operator">/</span>td&gt;&lt;td&gt;5&lt;<span class="token operator">/</span>td&gt;&lt;td&gt;47&lt;<span class="token operator">/</span>td&gt;&lt;td&gt;637878620272889291&lt;<span class="token operator">/</span>td&gt;&lt;td&gt;10:33:47<span class="token punctuation">.</span>2889291&lt;<span class="token operator">/</span>td&gt;&lt;td&gt;2022&lt;<span class="token operator">/</span>td&gt;&lt;<span class="token operator">/</span>tr&gt;
&lt;<span class="token operator">/</span>table&gt;
&lt;<span class="token operator">/</span>body&gt;&lt;<span class="token operator">/</span>html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-export-csv-将对象转换为csv字符串存储在文件中" tabindex="-1"><a class="header-anchor" href="#_11-export-csv-将对象转换为csv字符串存储在文件中" aria-hidden="true">#</a> 11. Export-Csv：将对象转换为CSV字符串存储在文件中</h2><p>用Export-Csv（别名是epcsv）将 Microsoft .NET Framework 对象转换为一系列以逗号分隔的、长度可变的 (CSV) 字符串，并将这些字符串保存到一个 CSV 文件中。</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment"># dir|select Name,Length|Export-Csv -Path .\\ateeResult.txt</span>
<span class="token comment"># Get-Content .\\ateeResult.txt</span>
<span class="token string">&quot;Name&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Length&quot;</span>
<span class="token string">&quot;ateeResult.txt&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;0&quot;</span>
<span class="token string">&quot;teeResult.txt&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;559&quot;</span>
<span class="token string">&quot;Test - 副本.md&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;4318&quot;</span>
<span class="token string">&quot;test - 副本.txt&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;4318&quot;</span>
<span class="token string">&quot;test-name - 副本.md&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;4318&quot;</span>
<span class="token string">&quot;test-name.md&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;4318&quot;</span>
<span class="token string">&quot;Test.md&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;4318&quot;</span>
<span class="token string">&quot;test.txt&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;4318&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_12-format-list、format-table、format-wide-将输出结果格式化" tabindex="-1"><a class="header-anchor" href="#_12-format-list、format-table、format-wide-将输出结果格式化" aria-hidden="true">#</a> 12. Format-List、Format-Table、Format-Wide：将输出结果格式化</h2><p>Format-List（别名是fl）可以将输出的格式设置为属性列表，其中每个属性均各占一行显示：</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment"># dir|select -Index 0 |Format-List</span>

    Directory: E:\\tmp\\<span class="token function">ps</span>

Name           : ateeResult<span class="token punctuation">.</span>txt
Length         : 209
CreationTime   : 2022/5/11 10:26:19
LastWriteTime  : 2022/5/11 10:35:01
LastAccessTime : 2022/5/11 10:35:01
Mode           : <span class="token operator">-</span>a-<span class="token operator">--</span>
LinkType       :
Target         :
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Format-Table（别名是ft）可以将输出的格式设置为表：</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment"># dir|select -Index 0 |Format-Table</span>

    Directory: E:\\tmp\\<span class="token function">ps</span>

Mode                 LastWriteTime         Length Name
<span class="token operator">--</span><span class="token operator">--</span>                 <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>         <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span> <span class="token operator">--</span><span class="token operator">--</span>
<span class="token operator">-</span>a-<span class="token operator">--</span>           2022/5/11    10:35            209 ateeResult<span class="token punctuation">.</span>txt

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Format-Wide（别名是fw）可以将对象的格式设置为只能显示每个对象的一个属性的宽表：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># dir|select -Index 0,1,2,3,4,5 |Format-Wide -Column 3</span>

    Directory: E:<span class="token punctuation">\\</span>tmp<span class="token punctuation">\\</span>ps

ateeResult.txt                          teeResult.txt                           Test - 副本.md
<span class="token builtin class-name">test</span> - 副本.txt                         test-name - 副本.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_13-get-unique-获取输出结果的唯一值" tabindex="-1"><a class="header-anchor" href="#_13-get-unique-获取输出结果的唯一值" aria-hidden="true">#</a> 13. Get-Unique：获取输出结果的唯一值</h2><p>使用Get-Unique（别名是gu）可以从排序列表中返回唯一项目。</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment"># 1,1,2,2,3,3,4,4,5,5,6,6,&quot;test&quot;|Sort-Object -Descending|Get-Unique</span>
test
6
5
4
3
2
1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_14-out-file-将输出结果输出到文件" tabindex="-1"><a class="header-anchor" href="#_14-out-file-将输出结果输出到文件" aria-hidden="true">#</a> 14. Out-File：将输出结果输出到文件</h2><p>可以使用Out-File将输出发送到文件：</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment"># dir|Out-File outfile.txt</span>
<span class="token comment"># Get-Content .\\outfile.txt</span>

    Directory: E:\\tmp\\<span class="token function">ps</span>

Mode                 LastWriteTime         Length Name
<span class="token operator">--</span><span class="token operator">--</span>                 <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>         <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span> <span class="token operator">--</span><span class="token operator">--</span>
<span class="token operator">-</span>a-<span class="token operator">--</span>           2022/5/11    10:35            209 ateeResult<span class="token punctuation">.</span>txt
<span class="token operator">-</span>a-<span class="token operator">--</span>           2022/5/11    10:39              0 outfile<span class="token punctuation">.</span>txt
<span class="token operator">-</span>a-<span class="token operator">--</span>           2022/5/11    10:11            559 teeResult<span class="token punctuation">.</span>txt
<span class="token operator">-</span>a-<span class="token operator">--</span>            2022/4/2    23:34           4318 Test <span class="token operator">-</span> 副本<span class="token punctuation">.</span>md
<span class="token operator">-</span>a-<span class="token operator">--</span>            2022/4/2    23:34           4318 test <span class="token operator">-</span> 副本<span class="token punctuation">.</span>txt
<span class="token operator">-</span>a-<span class="token operator">--</span>            2022/4/2    23:34           4318 <span class="token function">test-name</span> <span class="token operator">-</span> 副本<span class="token punctuation">.</span>md
<span class="token operator">-</span>a-<span class="token operator">--</span>            2022/4/2    23:34           4318 <span class="token function">test-name</span><span class="token punctuation">.</span>md
<span class="token operator">-</span>a-<span class="token operator">--</span>            2022/4/2    23:34           4318 Test<span class="token punctuation">.</span>md
<span class="token operator">-</span>a-
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_15-get-member-如何获取管道操作对象的属性" tabindex="-1"><a class="header-anchor" href="#_15-get-member-如何获取管道操作对象的属性" aria-hidden="true">#</a> 15. Get-Member：如何获取管道操作对象的属性</h2><p>管道操作的时候经常会用到管道输入对象的属性，使用Get-Member（gm）来获取对象的属性和方法。</p><p>a) 获取对象的公有属性：</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment"># Get-Process -Name node |Get-Member -MemberType AliasProperty</span>

   TypeName: System<span class="token punctuation">.</span>Diagnostics<span class="token punctuation">.</span><span class="token keyword">Process</span>

Name    MemberType    Definition
<span class="token operator">--</span><span class="token operator">--</span>    <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span>    <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span>
Handles AliasProperty Handles = Handlecount
Name    AliasProperty Name = ProcessName
NPM     AliasProperty NPM = NonpagedSystemMemorySize64
PM      AliasProperty PM = PagedMemorySize64
<span class="token function">SI</span>      AliasProperty <span class="token function">SI</span> = SessionId
VM      AliasProperty VM = VirtualMemorySize64
WS      AliasProperty WS = WorkingSet64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>b) 获取对象的公有方法：</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment"># Get-Process -Name node |Get-Member -MemberType Method</span>

   TypeName: System<span class="token punctuation">.</span>Diagnostics<span class="token punctuation">.</span><span class="token keyword">Process</span>

Name                      MemberType Definition
<span class="token operator">--</span><span class="token operator">--</span>                      <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span> <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span>
BeginErrorReadLine        Method     void BeginErrorReadLine<span class="token punctuation">(</span><span class="token punctuation">)</span>
BeginOutputReadLine       Method     void BeginOutputReadLine<span class="token punctuation">(</span><span class="token punctuation">)</span>
CancelErrorRead           Method     void CancelErrorRead<span class="token punctuation">(</span><span class="token punctuation">)</span>
CancelOutputRead          Method     void CancelOutputRead<span class="token punctuation">(</span><span class="token punctuation">)</span>
Close                     Method     void Close<span class="token punctuation">(</span><span class="token punctuation">)</span>
CloseMainWindow           Method     bool CloseMainWindow<span class="token punctuation">(</span><span class="token punctuation">)</span>
Dispose                   Method     void Dispose<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> void IDisposable<span class="token punctuation">.</span>Dispose<span class="token punctuation">(</span><span class="token punctuation">)</span>
Equals                    Method     bool Equals<span class="token punctuation">(</span>System<span class="token punctuation">.</span>Object obj<span class="token punctuation">)</span>
GetHashCode               Method     int GetHashCode<span class="token punctuation">(</span><span class="token punctuation">)</span>
GetLifetimeService        Method     System<span class="token punctuation">.</span>Object GetLifetimeService<span class="token punctuation">(</span><span class="token punctuation">)</span>
GetType                   Method     <span class="token function">type</span> GetType<span class="token punctuation">(</span><span class="token punctuation">)</span>
InitializeLifetimeService Method     System<span class="token punctuation">.</span>Object InitializeLifetimeService<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">Kill</span>                      Method     void <span class="token function">Kill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> void <span class="token function">Kill</span><span class="token punctuation">(</span>bool entireProcessTree<span class="token punctuation">)</span>
Refresh                   Method     void Refresh<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">Start</span>                     Method     bool <span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
ToString                  Method     string ToString<span class="token punctuation">(</span><span class="token punctuation">)</span>
WaitForExit               Method     void WaitForExit<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> bool WaitForExit<span class="token punctuation">(</span>int milliseconds<span class="token punctuation">)</span>
WaitForExitAsync          Method     System<span class="token punctuation">.</span>Threading<span class="token punctuation">.</span>Tasks<span class="token punctuation">.</span>Task WaitForExitAsync<span class="token punctuation">(</span>System<span class="token punctuation">.</span>Threading<span class="token punctuation">.</span>CancellationToken c…
WaitForInputIdle          Method     bool WaitForInputIdle<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> bool WaitForInputIdle<span class="token punctuation">(</span>int milliseconds<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当得知对象的公有属性和方法的名字后，就可以在管道操作中使用了。</p><h2 id="_16-如何判断一个命令是否支持管道输入" tabindex="-1"><a class="header-anchor" href="#_16-如何判断一个命令是否支持管道输入" aria-hidden="true">#</a> 16. 如何判断一个命令是否支持管道输入</h2><p>学会使用管道后，得学会判断一个命令是否支持管道输入。使用Get-Help命令获取一个命令的使用方法，对于参数，可以看到是否支持管道输入，或者通过MSDN去查询命令帮助。</p>`,96),v={href:"https://msdn.microsoft.com/powershell/reference/5.1/microsoft.powershell.core/Where-Object",target:"_blank",rel:"noopener noreferrer"},m=s("p",null,"对于里面的-InputObject则是支持管道输入，-Is则不支持管道输入：",-1),k=s("p",null,[s("img",{src:i,alt:"1147484-20170604182524696-201939906.png"})],-1),b={href:"https://msdn.microsoft.com/powershell/reference/5.1/microsoft.powershell.management/Move-Item",target:"_blank",rel:"noopener noreferrer"},h=s("p",null,"对于里面的-Path则是支持管道输入，-UseTransaction则不支持管道输入：",-1),g=s("p",null,"对于没有任何一个参数支持管道输入的命令则是不支持管道输入的命令。",-1),f=s("h2",{id:"_17-自动化处理数据密集型任务",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_17-自动化处理数据密集型任务","aria-hidden":"true"},"#"),n(" 17. 自动化处理数据密集型任务")],-1),x=s("p",null,"如果要对大量的数据进行处理简单的任务，可以把数据保存在一个CSV文件里面，使用Import-Csv来导入数据，导入后为每一行自动创建对象，并将列的名字作为对象的属性，之后用foreach对数据的每一项进行操作。",-1),w=s("p",null,[s("img",{src:c,alt:"1147484-20170604182545868-246271450.png"})],-1),q=s("p",null,"如果你命名的CSV文件中的列的名字和管道使用的参数名一致，PowerShell可以实现这种部分或全部参数的映射。",-1),T=s("p",null,"PowerShell的一个主要的优点就是具有自动化重复性任务的能力。有时候，这些重复性的任务是动作密集的（如系统维护，操作注册表，或者文件清理），并且包括复杂的有顺序的互相调用的命令。在这种情况下，可以通过编写脚本将这些操作组合到一起，这样可以节省时间，降低错误的发生。",-1),_=s("p",null,"上述列举的只是常用的命令和使用方法，PowerShell强大的命令集完全不止这些。",-1);function S(y,M){const a=o("ExternalLinkIcon");return p(),l("div",null,[u,s("p",null,[n("比如PowerShell Core里面的Where-Object的MSDN的帮助站点是："),s("a",v,[n("msdn"),e(a)]),n("。")]),m,k,s("p",null,[n("比如PowerShell Core里面的Move-Item的MSDN的帮助站点是："),s("a",b,[n("msdn"),e(a)]),n("。")]),h,g,f,x,w,q,T,_])}const L=t(d,[["render",S],["__file","pipline.html.vue"]]);export{L as default};
