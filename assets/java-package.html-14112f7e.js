import{_ as s,o as n,c as a,a as e}from"./app-3d979d38.js";const p={},t=e(`<h1 id="java打包的shell" tabindex="-1"><a class="header-anchor" href="#java打包的shell" aria-hidden="true">#</a> java打包的shell</h1><h2 id="注意一个问题" tabindex="-1"><a class="header-anchor" href="#注意一个问题" aria-hidden="true">#</a> 注意一个问题</h2><p>由于在DOS（windows系统）下，文本文件的换行符为CRLF，而在Linux下换行符为LF，使用git进行代码管理时，git会自动进行CRLF和LF之间的转换，这个我们不用操心。而有时候，我们需要将windows下的文件上传到linux上，例如shell脚本，执行的时候有时会出现奇怪的问题，这时候，就需要安装dos2unix软件。 ​</p><p>在centos下安装dos2unix：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> dos2unix

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>安装完成后，对文件进行转换</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>dos2unix xx.sh

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>​</p><p>或者把文本在vscode中编辑,再放回linux</p><h2 id="服务端运行jar包" tabindex="-1"><a class="header-anchor" href="#服务端运行jar包" aria-hidden="true">#</a> 服务端运行jar包</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>nohup java <span class="token operator">-</span>jar project<span class="token punctuation">.</span>jar <span class="token operator">&gt;&gt;</span> log<span class="token punctuation">.</span>out <span class="token number">2</span><span class="token operator">&gt;</span><span class="token operator">&amp;</span><span class="token number">1</span> <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>java -jar XXX.jar &amp;</code> 命令结尾没有 “&amp;” ，则变成 “java -jar XXX.jar ” ，表示在当前ssh窗口，可按CTRL + C打断程序运行，或者直接关闭窗口，则程序直接退出</p><p>命令结尾添加 “&amp;” ，则变成 “java -jar XXX.jar &amp;” ，表示在当窗口关闭时，程序才会中止运行。&amp;代表让该命令在后台执行。</p><p><code>nohup java -jar XXX.jar &gt; Log.log &amp;</code> 或者 <code>nohup java -jar XXX.jar &gt;&gt; Log.log &amp;</code> 命令 &quot;nohup java -jar XXX.jar &amp;&quot; 部分，表示不挂断运行命令,当账户退出或终端关闭时,程序仍然运行。注意，该作业的所有输出被重定向到nohup.out的文件中。</p><p>命令 <code>nohup java -jar XXX.jar &gt; Log.log &amp;</code> 部分，表示不挂断运行命令,当账户退出或终端关闭时,程序仍然运行，并且该作业的所有输出被重定向到Log.log的文件 中。 <code>&gt; Log.log</code> 该命令就是指定日志输出的文件。 <code>&gt;&gt;</code>表示将输出以追加的方式重定向到Log.log中。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">nohup</span> <span class="token function">java</span> <span class="token parameter variable">-jar</span> XXX.jar <span class="token operator">&gt;</span> Log.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">nohup</span> <span class="token function">java</span> <span class="token parameter variable">-jar</span> XXX.jar <span class="token operator">&gt;&gt;</span> Log.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">nohup</span> <span class="token function">java</span> <span class="token parameter variable">-jar</span> XXX.jar <span class="token operator">&gt;</span> /dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>标准输入文件(stdin)：stdin的文件描述符为0，Unix程序默认从stdin读取数据。 标准输出文件(stdout)：stdout 的文件描述符为1，Unix程序默认向stdout输出数据。 标准错误文件(stderr)：stderr的文件描述符为2，Unix程序会向stderr流中写入错误信息。 屏蔽输出，起到禁止输出作用：/dev/null 是一个特殊的文件，写入到它的内容都会被丢弃；如果尝试从该文件读取内容，那么什么也读不到。但是 /dev/null 文件非常有用，将命令的输出重定向到它，会起到&quot;禁止输出&quot;的效果。 <code>&gt; Log.log 2&gt;&amp;1</code> ：表示将 stdout 和 stderr 合并后重定向到 Log.log 备注：输出之后，可以使用“jobs”查看一下后台运行的任务。</p><h2 id="下面是一个bash命令" tabindex="-1"><a class="header-anchor" href="#下面是一个bash命令" aria-hidden="true">#</a> 下面是一个bash命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># 定义变量</span>
<span class="token comment"># 要运行的jar包路径，加不加引号都行。 注意：等号两边 不能 有空格，不然会提示command找不到</span>
<span class="token assign-left variable">JAR_NAME</span><span class="token operator">=</span><span class="token string">&quot;zfile-3.2.war&quot;</span>
<span class="token comment"># 日志路径，加不加引号都行。 注意：等号两边 不能 有空格，不然会提示command找不到</span>
<span class="token assign-left variable">LOG_PATH</span><span class="token operator">=</span><span class="token string">&quot;/opt/zfile.log&quot;</span>
<span class="token comment"># 若是输入格式不对，给出提示！</span>
<span class="token function-name function">tips</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;WARNING!!!......Tips, please use command: sh auto_deploy.sh [start|stop|restart|status]. For example: sh auto_deploy.sh start &quot;</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
 <span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
<span class="token comment"># 启动方法</span>
<span class="token function-name function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment"># 从新获取一下pid，由于其它操做如stop会致使pid的状态更新</span>
 <span class="token assign-left variable">pid</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> $JAR_NAME <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">grep</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token variable">\`</span></span>
        <span class="token comment"># -z 表示若是$pid为空时执行</span>
 <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token variable">$pid</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token function">nohup</span> <span class="token function">java</span> <span class="token parameter variable">-jar</span> <span class="token variable">$JAR_NAME</span> <span class="token operator">&gt;&gt;</span><span class="token variable">$LOG_PATH</span> <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>
        <span class="token assign-left variable">pid</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> $JAR_NAME <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">grep</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token variable">\`</span></span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;Service <span class="token variable">\${JAR_NAME}</span> is starting！pid=<span class="token variable">\${pid}</span>&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;........................Here is the log..............................&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;.....................................................................&quot;</span>
        <span class="token function">tail</span> <span class="token parameter variable">-f</span> <span class="token variable">$LOG_PATH</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;........................Start successfully！.........................&quot;</span>
 <span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Service <span class="token variable">\${JAR_NAME}</span> is already running,it&#39;s pid = <span class="token variable">\${pid}</span>. If necessary, please use command: sh auto_deploy.sh restart.&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
 <span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token comment"># 中止方法</span>
<span class="token function-name function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment"># 从新获取一下pid，由于其它操做如start会致使pid的状态更新</span>
 <span class="token assign-left variable">pid</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> $JAR_NAME <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">grep</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token variable">\`</span></span>
        <span class="token comment"># -z 表示若是$pid为空时执行。 注意：每一个命令和变量之间必定要先后加空格，不然会提示command找不到</span>
 <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token variable">$pid</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;Service <span class="token variable">\${JAR_NAME}</span> is not running! It&#39;s not necessary to stop it!&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
 <span class="token keyword">else</span>
  <span class="token function">kill</span> <span class="token parameter variable">-9</span> <span class="token variable">$pid</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Service stop successfully！pid:<span class="token variable">\${pid}</span> which has been killed forcibly!&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
 <span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token comment"># 输出运行状态方法</span>
<span class="token function-name function">status</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment"># 从新获取一下pid，由于其它操做如stop、restart、start等会致使pid的状态更新</span>
 <span class="token assign-left variable">pid</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> $JAR_NAME <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">grep</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token variable">\`</span></span>
        <span class="token comment"># -z 表示若是$pid为空时执行。注意：每一个命令和变量之间必定要先后加空格，不然会提示command找不到</span>
 <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token variable">$pid</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;Service <span class="token variable">\${JAR_NAME}</span> is not running!&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
 <span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;Service <span class="token variable">\${JAR_NAME}</span> is running. It&#39;s pid=<span class="token variable">\${pid}</span>&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
 <span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token comment"># 重启方法</span>
<span class="token function-name function">restart</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;.............................Restarting..............................&quot;</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;.....................................................................&quot;</span>
  <span class="token comment"># 从新获取一下pid，由于其它操做如start会致使pid的状态更新</span>
 <span class="token assign-left variable">pid</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> $JAR_NAME <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">grep</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token variable">\`</span></span>
        <span class="token comment"># -z 表示若是$pid为空时执行。 注意：每一个命令和变量之间必定要先后加空格，不然会提示command找不到</span>
 <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-z</span> <span class="token variable">$pid</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token function">kill</span> <span class="token parameter variable">-9</span> <span class="token variable">$pid</span>
 <span class="token keyword">fi</span>
 start
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;....................Restart successfully！...........................&quot;</span>
<span class="token punctuation">}</span>

<span class="token comment"># 根据输入参数执行对应方法，不输入则执行tips提示方法</span>
<span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token keyword">in</span>
   <span class="token string">&quot;start&quot;</span><span class="token punctuation">)</span>
     start
     <span class="token punctuation">;</span><span class="token punctuation">;</span>
   <span class="token string">&quot;stop&quot;</span><span class="token punctuation">)</span>
     stop
     <span class="token punctuation">;</span><span class="token punctuation">;</span>
   <span class="token string">&quot;status&quot;</span><span class="token punctuation">)</span>
     status
     <span class="token punctuation">;</span><span class="token punctuation">;</span>
   <span class="token string">&quot;restart&quot;</span><span class="token punctuation">)</span>
     restart
     <span class="token punctuation">;</span><span class="token punctuation">;</span>
   *<span class="token punctuation">)</span>
     tips
     <span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运行go文件的命令" tabindex="-1"><a class="header-anchor" href="#运行go文件的命令" aria-hidden="true">#</a> 运行go文件的命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># 定义变量</span>
<span class="token comment"># 要运行的jar包路径，加不加引号都行。 注意：等号两边 不能 有空格，不然会提示command找不到</span>
<span class="token assign-left variable">JAR_NAME</span><span class="token operator">=</span><span class="token string">&quot;family-server&quot;</span>
<span class="token comment"># 日志路径，加不加引号都行。 注意：等号两边 不能 有空格，不然会提示command找不到</span>
<span class="token assign-left variable">LOG_PATH</span><span class="token operator">=</span><span class="token string">&quot;/opt/family.log&quot;</span>
<span class="token comment"># 若是输入格式不对，给出提示！</span>
<span class="token function-name function">tips</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;WARNING!!!......Tips, please use command: sh auto_deploy.sh [start|stop|restart|status]. For example: sh auto_deploy.sh start &quot;</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
 <span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
<span class="token comment"># 启动方法</span>
<span class="token function-name function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment"># 从新获取一下pid，由于其它操做如stop会致使pid的状态更新</span>
 <span class="token assign-left variable">pid</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> $JAR_NAME <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">grep</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token variable">\`</span></span>
        <span class="token comment"># -z 表示若是$pid为空时执行</span>
 <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token variable">$pid</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token function">nohup</span>   ./<span class="token variable">$JAR_NAME</span> <span class="token operator">&gt;&gt;</span><span class="token variable">$LOG_PATH</span> <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>
        <span class="token assign-left variable">pid</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> $JAR_NAME <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">grep</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token variable">\`</span></span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;Service <span class="token variable">\${JAR_NAME}</span> is starting！pid=<span class="token variable">\${pid}</span>&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;........................Here is the log..............................&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;.....................................................................&quot;</span>
        <span class="token function">tail</span> <span class="token parameter variable">-f</span> <span class="token variable">$LOG_PATH</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;........................Start successfully！.........................&quot;</span>
 <span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Service <span class="token variable">\${JAR_NAME}</span> is already running,it&#39;s pid = <span class="token variable">\${pid}</span>. If necessary, please use command: sh auto_deploy.sh restart.&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
 <span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token comment"># 中止方法</span>
<span class="token function-name function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment"># 从新获取一下pid，由于其它操做如start会致使pid的状态更新</span>
 <span class="token assign-left variable">pid</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> $JAR_NAME <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">grep</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token variable">\`</span></span>
        <span class="token comment"># -z 表示若是$pid为空时执行。 注意：每一个命令和变量之间必定要先后加空格，不然会提示command找不到</span>
 <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token variable">$pid</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;Service <span class="token variable">\${JAR_NAME}</span> is not running! It&#39;s not necessary to stop it!&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
 <span class="token keyword">else</span>
  <span class="token function">kill</span> <span class="token parameter variable">-9</span> <span class="token variable">$pid</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Service stop successfully！pid:<span class="token variable">\${pid}</span> which has been killed forcibly!&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
 <span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token comment"># 输出运行状态方法</span>
<span class="token function-name function">status</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment"># 从新获取一下pid，由于其它操做如stop、restart、start等会致使pid的状态更新</span>
 <span class="token assign-left variable">pid</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> $JAR_NAME <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">grep</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token variable">\`</span></span>
        <span class="token comment"># -z 表示若是$pid为空时执行。注意：每一个命令和变量之间必定要先后加空格，不然会提示command找不到</span>
 <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token variable">$pid</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;Service <span class="token variable">\${JAR_NAME}</span> is not running!&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
 <span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;Service <span class="token variable">\${JAR_NAME}</span> is running. It&#39;s pid=<span class="token variable">\${pid}</span>&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
 <span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token comment"># 重启方法</span>
<span class="token function-name function">restart</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;.............................Restarting..............................&quot;</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;.....................................................................&quot;</span>
  <span class="token comment"># 从新获取一下pid，由于其它操做如start会致使pid的状态更新</span>
 <span class="token assign-left variable">pid</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> $JAR_NAME <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">grep</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token variable">\`</span></span>
        <span class="token comment"># -z 表示若是$pid为空时执行。 注意：每一个命令和变量之间必定要先后加空格，不然会提示command找不到</span>
 <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-z</span> <span class="token variable">$pid</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token function">kill</span> <span class="token parameter variable">-9</span> <span class="token variable">$pid</span>
 <span class="token keyword">fi</span>
 start
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;....................Restart successfully！...........................&quot;</span>
<span class="token punctuation">}</span>

<span class="token comment"># 根据输入参数执行对应方法，不输入则执行tips提示方法</span>
<span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token keyword">in</span>
   <span class="token string">&quot;start&quot;</span><span class="token punctuation">)</span>
     start
     <span class="token punctuation">;</span><span class="token punctuation">;</span>
   <span class="token string">&quot;stop&quot;</span><span class="token punctuation">)</span>
     stop
     <span class="token punctuation">;</span><span class="token punctuation">;</span>
   <span class="token string">&quot;status&quot;</span><span class="token punctuation">)</span>
     status
     <span class="token punctuation">;</span><span class="token punctuation">;</span>
   <span class="token string">&quot;restart&quot;</span><span class="token punctuation">)</span>
     restart
     <span class="token punctuation">;</span><span class="token punctuation">;</span>
   *<span class="token punctuation">)</span>
     tips
     <span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25),i=[t];function l(o,c){return n(),a("div",null,i)}const u=s(p,[["render",l],["__file","java-package.html.vue"]]);export{u as default};
