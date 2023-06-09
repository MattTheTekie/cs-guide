import{_ as e,o as a,c as s,a as n}from"./app-3d979d38.js";const i={},r=n(`<h1 id="进程管理工具" tabindex="-1"><a class="header-anchor" href="#进程管理工具" aria-hidden="true">#</a> 进程管理工具</h1><div class="hint-container tip"><p class="hint-container-title">提示</p><p>这一节我们介绍进程管理工具；</p><p>使用进程管理工具，我们可以查询程序当前的运行状态，或终止一个进程；</p><p>任何进程都与文件关联；我们会用到lsof工具（list opened files），作用是列举系统中已经被打开的文件。在linux环境中，任何事物都是文件，设备是文件，目录是文件，甚至sockets也是文件。用好lsof命令，对日常的linux管理非常有帮助。</p></div><h2 id="查询进程" tabindex="-1"><a class="header-anchor" href="#查询进程" aria-hidden="true">#</a> 查询进程</h2><p>查询正在运行的进程信息 :</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ps</span> <span class="token parameter variable">-ef</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>eg:查询归属于用户colin115的进程 :</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> colin115
<span class="token function">ps</span> <span class="token parameter variable">-lu</span> colin115
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>查询进程ID（适合只记得部分进程字段） :</p><pre><code>$pgrep 查找进程

eg:查询进程名中含有re的进程
[/home/weber#]pgrep -l re
2 kthreadd
28 ecryptfs-kthrea
29515 redis-server
</code></pre><p>以完整的格式显示所有的进程 :</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ps</span> <span class="token parameter variable">-ajx</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>显示进程信息，并实时更新 :</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">top</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看端口占用的进程状态： :</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">lsof</span> <span class="token parameter variable">-i:3306</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看用户username的进程所打开的文件 :</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">lsof</span> <span class="token parameter variable">-u</span> username
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查询init进程当前打开的文件 :</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">lsof</span> <span class="token parameter variable">-c</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查询指定的进程ID(23295)打开的文件： :</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">lsof</span> <span class="token parameter variable">-p</span> <span class="token number">23295</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查询指定目录下被进程开启的文件（使用+D 递归目录）： :</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">lsof</span> +d mydir1/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="终止进程" tabindex="-1"><a class="header-anchor" href="#终止进程" aria-hidden="true">#</a> 终止进程</h2><p>杀死指定PID的进程 (PID为Process ID) :</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">kill</span> PID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>杀死相关进程 :</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">kill</span> <span class="token parameter variable">-9</span> <span class="token number">3434</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>杀死job工作 (job为job number) :</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">kill</span> %job
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="进程监控" tabindex="-1"><a class="header-anchor" href="#进程监控" aria-hidden="true">#</a> 进程监控</h2><p>查看系统中使用CPU、使用内存最多的进程； :</p><pre><code>$top
(-&gt;)P
</code></pre><p>输入top命令后，进入到交互界面；接着输入字符命令后显示相应的进程状态：</p><p>对于进程，平时我们最常想知道的就是哪些进程占用CPU最多，占用内存最多。以下两个命令就可以满足要求:</p><pre><code>P：根据CPU使用百分比大小进行排序。
M：根据驻留内存大小进行排序。
i：使top不显示任何闲置或者僵死进程。
</code></pre><p>这里介绍最使用的几个选项,对于更详细的使用，详见 <code>top</code>{.interpreted-text role=&quot;ref&quot;} ;</p><h2 id="分析线程栈" tabindex="-1"><a class="header-anchor" href="#分析线程栈" aria-hidden="true">#</a> 分析线程栈</h2><p>使用命令pmap，来输出进程内存的状况，可以用来分析线程堆栈； :</p><pre><code>$pmap PID

eg:
[/home/weber#]ps -fe| grep redis
weber    13508 13070  0 08:14 pts/0    00:00:00 grep --color=auto redis
weber    29515     1  0  2013 ?        02:55:59 ./redis-server redis.conf
[/home/weber#]pmap 29515
29515:   ./redis-server redis.conf
08048000    768K r-x--  /home/weber/soft/redis-2.6.16/src/redis-server
08108000      4K r----  /home/weber/soft/redis-2.6.16/src/redis-server
08109000     12K rw---  /home/weber/soft/redis-2.6.16/src/redis-server
</code></pre><h2 id="综合运用" tabindex="-1"><a class="header-anchor" href="#综合运用" aria-hidden="true">#</a> 综合运用</h2><p>将用户colin115下的所有进程名以av_开头的进程终止:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token function">ps</span> <span class="token parameter variable">-u</span> colin115 <span class="token operator">|</span>  <span class="token function">awk</span> <span class="token string">&#39;/av_/ {print &quot;kill -9 &quot; $1}&#39;</span> <span class="token operator">|</span> <span class="token function">sh</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>将用户colin115下所有进程名中包含HOST的进程终止:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ps</span> -fe<span class="token operator">|</span> <span class="token function">grep</span> colin115<span class="token operator">|</span><span class="token function">grep</span> HOST <span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">kill</span> -9<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>ps top lsof kill pmap</p>`,47),d=[r];function l(p,c){return a(),s("div",null,d)}const t=e(i,[["render",l],["__file","05_process_manage.html.vue"]]);export{t as default};
