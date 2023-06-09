import{_ as a,r as e,o as l,c as p,d as s,e as i,b as t,a as o}from"./app-3d979d38.js";const c={},r=o(`<h1 id="第一批shell" tabindex="-1"><a class="header-anchor" href="#第一批shell" aria-hidden="true">#</a> 第一批shell</h1><h2 id="定时清空文件内容-定时记录文件大小" tabindex="-1"><a class="header-anchor" href="#定时清空文件内容-定时记录文件大小" aria-hidden="true">#</a> 定时清空文件内容，定时记录文件大小</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">################################################################</span>
<span class="token comment">#每小时执行一次脚本（任务计划），当时间为0点或12点时，将目标目录下的所有文件内</span>
<span class="token comment">#容清空，但不删除文件，其他时间则只统计各个文件的打小，一个文件一行，输出到以时</span>
<span class="token comment">#间和日期命名的文件中，需要考虑目标目录下二级、三级等子目录的文件</span>
<span class="token comment">################################################################</span>
<span class="token assign-left variable">logfile</span><span class="token operator">=</span>/tmp/<span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +%H-%F<span class="token variable">\`</span></span>.log
<span class="token assign-left variable">n</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +%H<span class="token variable">\`</span></span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$n</span> <span class="token parameter variable">-eq</span> 00 <span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">[</span> <span class="token variable">$n</span> <span class="token parameter variable">-eq</span> <span class="token number">12</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
<span class="token comment">#通过for循环，以find命令作为遍历条件，将目标目录下的所有文件进行遍历并做相应操作</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">find</span> /data/log/ <span class="token parameter variable">-type</span> f<span class="token variable">\`</span></span>
<span class="token keyword">do</span>
<span class="token boolean">true</span> <span class="token operator">&gt;</span> <span class="token variable">$i</span>
<span class="token keyword">done</span>
<span class="token keyword">else</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">find</span> /data/log/ <span class="token parameter variable">-type</span> f<span class="token variable">\`</span></span>
<span class="token keyword">do</span>
<span class="token function">du</span> <span class="token parameter variable">-sh</span> <span class="token variable">$i</span> <span class="token operator">&gt;&gt;</span> <span class="token variable">$logfile</span>
<span class="token keyword">done</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="检测网卡流量-并按规定格式记录在日志中" tabindex="-1"><a class="header-anchor" href="#检测网卡流量-并按规定格式记录在日志中" aria-hidden="true">#</a> 检测网卡流量，并按规定格式记录在日志中</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#######################################################</span>
<span class="token comment">#检测网卡流量，并按规定格式记录在日志中</span>
<span class="token comment">#规定一分钟记录一次</span>
<span class="token comment">#日志格式如下所示:</span>
<span class="token comment">#2019-08-12 20:40</span>
<span class="token comment">#ens33 input: 1234bps</span>
<span class="token comment">#ens33 output: 1235bps</span>
<span class="token comment">######################################################3</span>
<span class="token keyword">while</span> <span class="token builtin class-name">:</span>
<span class="token keyword">do</span>
<span class="token comment">#设置语言为英文，保障输出结果是英文，否则会出现bug</span>
<span class="token assign-left variable"><span class="token environment constant">LANG</span></span><span class="token operator">=</span>en
<span class="token assign-left variable">logfile</span><span class="token operator">=</span>/tmp/<span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +%d<span class="token variable">\`</span></span>.log
<span class="token comment">#将下面执行的命令结果输出重定向到logfile日志中</span>
<span class="token builtin class-name">exec</span> <span class="token operator">&gt;&gt;</span> <span class="token variable">$logfile</span>
<span class="token function">date</span> +<span class="token string">&quot;%F %H:%M&quot;</span>
<span class="token comment">#sar命令统计的流量单位为kb/s，日志格式为bps，因此要*1000*8</span>
sar <span class="token parameter variable">-n</span> DEV <span class="token number">1</span> <span class="token number">59</span><span class="token operator">|</span><span class="token function">grep</span> Average<span class="token operator">|</span><span class="token function">grep</span> ens33<span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{print $2,&quot;\\t&quot;,&quot;input:&quot;,&quot;\\t&quot;,$5*1000*8,&quot;bps&quot;,&quot;\\n&quot;,$2,&quot;\\t&quot;,&quot;output:&quot;,&quot;\\t&quot;,$6*1000*8,&quot;bps&quot;}&#39;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;####################&quot;</span>
<span class="token comment">#因为执行sar命令需要59秒，因此不需要sleep</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="计算文档每行出现的数字个数-并计算整个文档的数字总数" tabindex="-1"><a class="header-anchor" href="#计算文档每行出现的数字个数-并计算整个文档的数字总数" aria-hidden="true">#</a> 计算文档每行出现的数字个数，并计算整个文档的数字总数</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#########################################################</span>
<span class="token comment">#计算文档每行出现的数字个数，并计算整个文档的数字总数</span>
<span class="token comment">########################################################</span>
<span class="token comment">#使用awk只输出文档行数（截取第一段）</span>
<span class="token assign-left variable">n</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">wc</span> <span class="token parameter variable">-l</span> a.txt<span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{print $1}&#39;</span><span class="token variable">\`</span></span>
<span class="token assign-left variable">sum</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token comment">#文档中每一行可能存在空格，因此不能直接用文档内容进行遍历</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">seq</span> <span class="token number">1</span> $n<span class="token variable">\`</span></span>
<span class="token keyword">do</span>
<span class="token comment">#输出的行用变量表示时，需要用双引号</span>
<span class="token assign-left variable">line</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$i</span>&quot;</span>p a.txt<span class="token variable">\`</span></span>
<span class="token comment">#wc -L选项，统计最长行的长度</span>
<span class="token assign-left variable">n_n</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> $line<span class="token operator">|</span><span class="token function">sed</span> s<span class="token string">&#39;/[^0-9]//&#39;</span>g<span class="token operator">|</span><span class="token function">wc</span> <span class="token parameter variable">-L</span><span class="token variable">\`</span></span>
<span class="token builtin class-name">echo</span> <span class="token variable">$n_n</span>
<span class="token assign-left variable">sum</span><span class="token operator">=</span>$<span class="token punctuation">[</span><span class="token variable">$sum</span>+<span class="token variable">$n_n</span><span class="token punctuation">]</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;sum:<span class="token variable">$sum</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="杀死所有脚本" tabindex="-1"><a class="header-anchor" href="#杀死所有脚本" aria-hidden="true">#</a> 杀死所有脚本</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">################################################################</span>
<span class="token comment">#有一些脚本加入到了cron之中，存在脚本尚未运行完毕又有新任务需要执行的情况，</span>
<span class="token comment">#导致系统负载升高，因此可通过编写脚本，筛选出影响负载的进程一次性全部杀死。</span>
<span class="token comment">################################################################</span>
<span class="token function">ps</span> aux<span class="token operator">|</span><span class="token function">grep</span> 指定进程名<span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">grep</span><span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token operator">|</span><span class="token function">xargs</span> <span class="token function">kill</span> <span class="token parameter variable">-9</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="从ftp服务器下载文件" tabindex="-1"><a class="header-anchor" href="#从ftp服务器下载文件" aria-hidden="true">#</a> 从FTP服务器下载文件</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$#</span> <span class="token parameter variable">-ne</span> <span class="token number">1</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Usage: <span class="token variable">$0</span> filename&quot;</span>
<span class="token keyword">fi</span>
<span class="token assign-left variable">dir</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">dirname</span> $1<span class="token variable">)</span></span>
<span class="token assign-left variable">file</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">basename</span> $1<span class="token variable">)</span></span>
<span class="token function">ftp</span> <span class="token parameter variable">-n</span> <span class="token parameter variable">-v</span> <span class="token operator">&lt;&lt;</span> <span class="token string">EOF<span class="token bash punctuation">   <span class="token comment"># -n 自动登录</span></span>
open 192.168.1.10  # ftp服务器
user admin password
binary   # 设置ftp传输模式为二进制，避免MD5值不同或.tar.gz压缩包格式错误
cd <span class="token variable">$dir</span>
get &quot;<span class="token variable">$file</span>&quot;
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="连续输入5个100以内的数字-统计和、最小和最大" tabindex="-1"><a class="header-anchor" href="#连续输入5个100以内的数字-统计和、最小和最大" aria-hidden="true">#</a> 连续输入5个100以内的数字，统计和、最小和最大</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable">COUNT</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">SUM</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token assign-left variable">MIN</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token assign-left variable">MAX</span><span class="token operator">=</span><span class="token number">100</span>
<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token variable">$COUNT</span> <span class="token parameter variable">-le</span> <span class="token number">5</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
    <span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;请输入1-10个整数：&quot;</span> INT
    <span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token variable">$INT</span> <span class="token operator">=~</span> ^<span class="token punctuation">[</span><span class="token number">0</span>-9<span class="token punctuation">]</span>+$ <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;输入必须是整数！&quot;</span>
        <span class="token builtin class-name">exit</span> <span class="token number">1</span>
    <span class="token keyword">elif</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token variable">$INT</span> <span class="token parameter variable">-gt</span> <span class="token number">100</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;输入必须是100以内！&quot;</span>
        <span class="token builtin class-name">exit</span> <span class="token number">1</span>
    <span class="token keyword">fi</span>
    <span class="token assign-left variable">SUM</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>$SUM<span class="token operator">+</span>$INT<span class="token variable">))</span></span>
    <span class="token punctuation">[</span> <span class="token variable">$MIN</span> <span class="token parameter variable">-lt</span> <span class="token variable">$INT</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token assign-left variable">MIN</span><span class="token operator">=</span><span class="token variable">$INT</span>
    <span class="token punctuation">[</span> <span class="token variable">$MAX</span> <span class="token parameter variable">-gt</span> <span class="token variable">$INT</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token assign-left variable">MAX</span><span class="token operator">=</span><span class="token variable">$INT</span>
    <span class="token builtin class-name">let</span> COUNT++
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;SUM: <span class="token variable">$SUM</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;MIN: <span class="token variable">$MIN</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;MAX: <span class="token variable">$MAX</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="用户猜数字" tabindex="-1"><a class="header-anchor" href="#用户猜数字" aria-hidden="true">#</a> 用户猜数字</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash  # 脚本生成一个 100 以内的随机数,提示用户猜数字,根据用户的输入,提示用户猜对了,</span>
<span class="token comment"># 猜小了或猜大了,直至用户猜对脚本结束。</span>
<span class="token comment"># RANDOM 为系统自带的系统变量,值为 0‐32767的随机数</span>
<span class="token comment"># 使用取余算法将随机数变为 1‐100 的随机数num=$[RANDOM%100+1]echo &quot;$num&quot; </span>
<span class="token comment"># 使用 read 提示用户猜数字</span>
<span class="token comment"># 使用 if 判断用户猜数字的大小关系:‐eq(等于),‐ne(不等于),‐gt(大于),‐ge(大于等于),</span>
<span class="token comment"># ‐lt(小于),‐le(小于等于)</span>

<span class="token keyword">while</span> <span class="token builtin class-name">:</span>
  <span class="token keyword">do</span>     
    <span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;计算机生成了一个 1‐100 的随机数,你猜: &quot;</span> cai    
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$cai</span> <span class="token parameter variable">-eq</span> <span class="token variable">$num</span> <span class="token punctuation">]</span>    
    <span class="token keyword">then</span>        
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;恭喜,猜对了&quot;</span>           
        <span class="token builtin class-name">exit</span>        
    <span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token variable">$cai</span> <span class="token parameter variable">-gt</span> <span class="token variable">$num</span> <span class="token punctuation">]</span>       
    <span class="token keyword">then</span>            
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;Oops,猜大了&quot;</span>         
    <span class="token keyword">else</span>            
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;Oops,猜小了&quot;</span>     
    <span class="token keyword">fi</span>
  <span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="监测nginx访问日志502情况-并做相应动作" tabindex="-1"><a class="header-anchor" href="#监测nginx访问日志502情况-并做相应动作" aria-hidden="true">#</a> 监测Nginx访问日志502情况，并做相应动作</h2><p>假设服务器环境为lnmp，近期访问经常出现502现象，且502错误在重启php-fpm服务后消失，因此需要编写监控脚本，一旦出现502，则自动重启php-fpm服务。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#场景：</span>
<span class="token comment">#1.访问日志文件的路径：/data/log/access.log</span>
<span class="token comment">#2.脚本死循环，每10秒检测一次，10秒的日志条数为300条，出现502的比例不低于10%（30条）则需要重启php-fpm服务</span>
<span class="token comment">#3.重启命令为：/etc/init.d/php-fpm restart</span>
<span class="token comment">#!/bin/bash</span>
<span class="token comment">###########################################################</span>
<span class="token comment">#监测Nginx访问日志502情况，并做相应动作</span>
<span class="token comment">###########################################################</span>
<span class="token assign-left variable">log</span><span class="token operator">=</span>/data/log/access.log
<span class="token assign-left variable">N</span><span class="token operator">=</span><span class="token number">30</span> <span class="token comment">#设定阈值</span>
<span class="token keyword">while</span> <span class="token builtin class-name">:</span>
<span class="token keyword">do</span>
 <span class="token comment">#查看访问日志的最新300条，并统计502的次数</span>
 <span class="token assign-left variable">err</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">tail</span> <span class="token parameter variable">-n</span> <span class="token number">300</span> $log <span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-c</span> <span class="token string">&#39;502&quot; &#39;</span><span class="token variable">\`</span></span>
 <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$err</span> <span class="token parameter variable">-ge</span> <span class="token variable">$N</span> <span class="token punctuation">]</span>
 <span class="token keyword">then</span>
 /etc/init.d/php-fpm restart <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span> /dev/null
 <span class="token comment">#设定60s延迟防止脚本bug导致无限重启php-fpm服务</span>
  <span class="token function">sleep</span> <span class="token number">60</span>
 <span class="token keyword">fi</span>
 <span class="token function">sleep</span> <span class="token number">10</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="将结果分别赋值给变量" tabindex="-1"><a class="header-anchor" href="#将结果分别赋值给变量" aria-hidden="true">#</a> 将结果分别赋值给变量</h2><p>应用场景：希望将执行结果或者位置参数赋值给变量，以便后续使用。</p><p>方法1：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> <span class="token string">&quot;4 5 6&quot;</span><span class="token variable">)</span></span><span class="token punctuation">;</span> <span class="token keyword">do</span>
   <span class="token builtin class-name">eval</span> a<span class="token variable">$i</span><span class="token operator">=</span><span class="token variable">$i</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$a4</span> <span class="token variable">$a5</span> <span class="token variable">$a6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方法2：将位置参数192.168.1.1{1,2}拆分为到每个变量</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">num</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">eval</span> <span class="token builtin class-name">echo</span> $*<span class="token variable">)</span></span><span class="token punctuation">;</span><span class="token keyword">do</span>   <span class="token comment">#eval将{1,2}分解为1 2</span>
   <span class="token builtin class-name">let</span> <span class="token assign-left variable">num</span><span class="token operator">+=</span><span class="token number">1</span>
   <span class="token builtin class-name">eval</span> <span class="token function">node</span><span class="token variable">\${num}</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$i</span>&quot;</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$node1</span> <span class="token variable">$node2</span> <span class="token variable">$node3</span>
<span class="token comment"># bash a.sh 192.168.1.1{1,2}</span>
<span class="token number">192.168</span>.1.11 <span class="token number">192.168</span>.1.12
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方法3：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">arr</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">4</span> <span class="token number">5</span> <span class="token number">6</span><span class="token punctuation">)</span>
<span class="token assign-left variable">INDEX1</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> $<span class="token punctuation">{</span>arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token variable">)</span></span>
<span class="token assign-left variable">INDEX2</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> $<span class="token punctuation">{</span>arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token variable">)</span></span>
<span class="token assign-left variable">INDEX3</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> $<span class="token punctuation">{</span>arr<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token variable">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="批量修改文件名" tabindex="-1"><a class="header-anchor" href="#批量修改文件名" aria-hidden="true">#</a> 批量修改文件名</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>示例：

<span class="token comment"># touch article_{1..3}.html</span>
<span class="token comment"># ls</span>
article_1.html  article_2.html  article_3.html

目的：把article改为bbs

方法1：

<span class="token keyword">for</span> <span class="token for-or-select variable">file</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">ls</span> *html<span class="token variable">)</span></span><span class="token punctuation">;</span> <span class="token keyword">do</span>
    <span class="token function">mv</span> <span class="token variable">$file</span> bbs_<span class="token variable">\${file<span class="token operator">#</span>*_}</span>
    <span class="token comment"># mv $file $(echo $file |sed -r &#39;s/.*(_.*)/bbs\\1/&#39;)</span>
    <span class="token comment"># mv $file $(echo $file |echo bbs_$(cut -d_ -f2)</span>
<span class="token keyword">done</span>

方法2：

<span class="token keyword">for</span> <span class="token for-or-select variable">file</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-maxdepth</span> <span class="token number">1</span> <span class="token parameter variable">-name</span> <span class="token string">&quot;*html&quot;</span><span class="token variable">)</span></span><span class="token punctuation">;</span> <span class="token keyword">do</span>
     <span class="token function">mv</span> <span class="token variable">$file</span> bbs_<span class="token variable">\${file<span class="token operator">#</span>*_}</span>
<span class="token keyword">done</span>

方法3：

<span class="token comment"># rename article bbs *.html</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="安装的-rm-删除" tabindex="-1"><a class="header-anchor" href="#安装的-rm-删除" aria-hidden="true">#</a> 安装的 rm（删除）</h1><h2 id="由来" tabindex="-1"><a class="header-anchor" href="#由来" aria-hidden="true">#</a> 由来</h2><ul><li>我们都知道 <code>rm -rf</code> 是一个危险的操作，所以我们应该尽可能养成一个不要 rm 的习惯，而是 mv。</li></ul><h2 id="设置" tabindex="-1"><a class="header-anchor" href="#设置" aria-hidden="true">#</a> 设置</h2><ul><li>创建一个用来存放要被我们删除的文件夹存放地：<code>cd $home &amp;&amp; mkdir .trash</code></li><li>赋予最高权限（个人习惯）：<code>chmod 777 .trash</code></li><li>如果你使用 bash，你需要修改你的 home 目录下的：<code>.bashrc</code></li><li>我使用的是 zsh，所以我修改：<code>vim .zshrc</code>，在文件的最后面增加下面内容：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># rm transform</span>
<span class="token keyword">function</span> <span class="token function-name function">rm</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment"># garbage collect</span>
    <span class="token assign-left variable">now</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%s<span class="token variable">)</span></span>
    <span class="token keyword">for</span> <span class="token for-or-select variable">s</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">ls</span> --indicator-style<span class="token operator">=</span>none <span class="token environment constant">$HOME</span>/.trash/<span class="token variable">)</span></span> <span class="token punctuation">;</span><span class="token keyword">do</span>
        <span class="token assign-left variable">dir_name</span><span class="token operator">=</span><span class="token variable">\${s<span class="token operator">/</span><span class="token operator">/</span>_<span class="token operator">/</span>-}</span>
        <span class="token assign-left variable">dir_time</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%s <span class="token parameter variable">-d</span> $dir_name<span class="token variable">)</span></span>
        <span class="token comment"># if big than one month then delete</span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token number">0</span> <span class="token parameter variable">-eq</span> dir_time <span class="token operator">||</span> <span class="token variable"><span class="token variable">$((</span>$now <span class="token operator">-</span> $dir_time<span class="token variable">))</span></span> <span class="token parameter variable">-gt</span> <span class="token number">2592000</span> <span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">;</span><span class="token keyword">then</span>
            <span class="token builtin class-name">echo</span> <span class="token string">&quot;Trash &quot;</span> <span class="token variable">$dir_name</span> <span class="token string">&quot; has Gone &quot;</span>
            /bin/rm <span class="token variable">$s</span> <span class="token parameter variable">-rf</span>
        <span class="token keyword">fi</span>
    <span class="token keyword">done</span>
    
    <span class="token comment"># add new folder</span>
    <span class="token assign-left variable">prefix</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y_%m_%d<span class="token variable">)</span></span>
    <span class="token assign-left variable">hour</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%H<span class="token variable">)</span></span>
    <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token environment constant">$HOME</span>/.trash/<span class="token variable">$prefix</span>/<span class="token variable">$hour</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token variable">$1</span> <span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">;</span><span class="token keyword">then</span>
            <span class="token builtin class-name">echo</span> <span class="token string">&#39;Missing Args&#39;</span>
        <span class="token builtin class-name">return</span>
    <span class="token keyword">fi</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Hi, Trashing&quot;</span> <span class="token variable">$1</span> <span class="token string">&quot;to /root/.trash&quot;</span>
    <span class="token function">mv</span> <span class="token variable">$1</span> <span class="token environment constant">$HOME</span>/.trash/<span class="token variable">$prefix</span>/<span class="token variable">$hour</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>刷新配置：<code>source ~/.zshrc</code></li><li>然后断开终端，重新连接</li><li>此时如果你使用：<code>rm -rf a.txt</code> 会出现这样的提示：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Hi, Trashing -rf to /root/.trash
mv: invalid option -- &#39;r&#39;
Try &#39;mv --help&#39; for more information.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>现在我们删除一个测试文件：<code>rm a.txt</code>，会事显示：<code>Hi, Trashing a.txt to /root/.trash</code></li><li>因为我们上面的 shell 每次触发 rm 明白的时候都会去删除一个月前的目录，所以就不需要定时器来删除 .trash 里面的文件了。</li><li>如果你要强制删除，清空 .trash 目录，可以使用真正的 rm 命令：<code>/usr/bin/rm -rf ~/.trash/*</code></li></ul><h2 id="资料" tabindex="-1"><a class="header-anchor" href="#资料" aria-hidden="true">#</a> 资料</h2>`,38),d={href:"http://www.linuxde.net/2013/02/11915.html",target:"_blank",rel:"noopener noreferrer"};function v(k,u){const n=e("ExternalLinkIcon");return l(),p("div",null,[r,s("ul",null,[s("li",null,[s("a",d,[i("http://www.linuxde.net/2013/02/11915.html"),t(n)])])])])}const m=a(c,[["render",v],["__file","shell1.html.vue"]]);export{m as default};
