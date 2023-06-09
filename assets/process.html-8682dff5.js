import{_ as n,o as s,c as a,a as p}from"./app-3d979d38.js";const t={},e=p(`<h1 id="进程" tabindex="-1"><a class="header-anchor" href="#进程" aria-hidden="true">#</a> 进程</h1><p>Python 中的多线程其实并不是真正的多线程，如果想要充分地使用多核 CPU 的资源，在 Python 中大部分情况需要使用多进程。</p><p>Python 提供了非常好用的多进程包 multiprocessing，只需要定义一个函数，Python 会完成其他所有事情。</p><p>借助这个包，可以轻松完成从单进程到并发执行的转换。multiprocessing 支持子进程、通信和共享数据、执行不同形式的同步，提供了 Process、Queue、Pipe、Lock 等组件。</p><h2 id="_1、类-process" tabindex="-1"><a class="header-anchor" href="#_1、类-process" aria-hidden="true">#</a> 1、类 Process</h2><p>创建进程的类：<code>Process([group [, target [, name [, args [, kwargs]]]]])</code></p><ul><li>target 表示调用对象</li><li>args 表示调用对象的位置参数元组</li><li>kwargs表示调用对象的字典</li><li>name为别名</li><li>group实质上不使用</li></ul><p>下面看一个创建函数并将其作为多个进程的例子：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python3</span>
<span class="token comment"># -*- coding: UTF-8 -*-</span>

<span class="token keyword">import</span> multiprocessing
<span class="token keyword">import</span> time


<span class="token keyword">def</span> <span class="token function">worker</span><span class="token punctuation">(</span>interval<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">&#39;【start】&#39;</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span>interval<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">&#39;【end】&#39;</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    p1 <span class="token operator">=</span> multiprocessing<span class="token punctuation">.</span>Process<span class="token punctuation">(</span>target<span class="token operator">=</span>worker<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;两点水1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    p2 <span class="token operator">=</span> multiprocessing<span class="token punctuation">.</span>Process<span class="token punctuation">(</span>target<span class="token operator">=</span>worker<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;两点水2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    p3 <span class="token operator">=</span> multiprocessing<span class="token punctuation">.</span>Process<span class="token punctuation">(</span>target<span class="token operator">=</span>worker<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">&#39;两点水3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    p1<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    p2<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    p3<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;The number of CPU is:&quot;</span> <span class="token operator">+</span> <span class="token builtin">str</span><span class="token punctuation">(</span>multiprocessing<span class="token punctuation">.</span>cpu_count<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> p <span class="token keyword">in</span> multiprocessing<span class="token punctuation">.</span>active_children<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;child   p.name:&quot;</span> <span class="token operator">+</span> p<span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&quot;\\tp.id&quot;</span> <span class="token operator">+</span> <span class="token builtin">str</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>pid<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;END!!!!!!!!!!!!!!!!!&quot;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出的结果：</p><p><img src="http://twowaterimage.oss-cn-beijing.aliyuncs.com/2019-10-14-多进程输出结果.gif" alt=""></p><h2 id="_2、把进程创建成类" tabindex="-1"><a class="header-anchor" href="#_2、把进程创建成类" aria-hidden="true">#</a> 2、把进程创建成类</h2><p>当然我们也可以把进程创建成一个类，如下面的例子，当进程 p 调用 start() 时，自动调用 run() 方法。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># -*- coding: UTF-8 -*-</span>

<span class="token keyword">import</span> multiprocessing
<span class="token keyword">import</span> time


<span class="token keyword">class</span> <span class="token class-name">ClockProcess</span><span class="token punctuation">(</span>multiprocessing<span class="token punctuation">.</span>Process<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> interval<span class="token punctuation">)</span><span class="token punctuation">:</span>
        multiprocessing<span class="token punctuation">.</span>Process<span class="token punctuation">.</span>__init__<span class="token punctuation">(</span>self<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>interval <span class="token operator">=</span> interval

    <span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        n <span class="token operator">=</span> <span class="token number">5</span>
        <span class="token keyword">while</span> n <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;当前时间: {0}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>ctime<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span>self<span class="token punctuation">.</span>interval<span class="token punctuation">)</span>
            n <span class="token operator">-=</span> <span class="token number">1</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    p <span class="token operator">=</span> ClockProcess<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
    p<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果如下：</p><p><img src="http://twowaterimage.oss-cn-beijing.aliyuncs.com/2019-10-14-创建进程类.gif" alt=""></p><h2 id="_3、daemon-属性" tabindex="-1"><a class="header-anchor" href="#_3、daemon-属性" aria-hidden="true">#</a> 3、daemon 属性</h2><p>想知道 daemon 属性有什么用，看下下面两个例子吧，一个加了 daemon 属性，一个没有加，对比输出的结果：</p><p>没有加 deamon 属性的例子：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># -*- coding: UTF-8 -*-</span>
<span class="token keyword">import</span> multiprocessing
<span class="token keyword">import</span> time


<span class="token keyword">def</span> <span class="token function">worker</span><span class="token punctuation">(</span>interval<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;工作开始时间：{0}&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>ctime<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span>interval<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;工作结果时间：{0}&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>ctime<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    p <span class="token operator">=</span> multiprocessing<span class="token punctuation">.</span>Process<span class="token punctuation">(</span>target<span class="token operator">=</span>worker<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    p<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;【EMD】&#39;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果：</p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>【EMD】
工作开始时间：Mon Oct  9 17:47:06 2017
工作结果时间：Mon Oct  9 17:47:09 2017
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面示例中，进程 p 添加 daemon 属性：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># -*- coding: UTF-8 -*-</span>

<span class="token keyword">import</span> multiprocessing
<span class="token keyword">import</span> time


<span class="token keyword">def</span> <span class="token function">worker</span><span class="token punctuation">(</span>interval<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;工作开始时间：{0}&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>ctime<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span>interval<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;工作结果时间：{0}&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>ctime<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    p <span class="token operator">=</span> multiprocessing<span class="token punctuation">.</span>Process<span class="token punctuation">(</span>target<span class="token operator">=</span>worker<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    p<span class="token punctuation">.</span>daemon <span class="token operator">=</span> <span class="token boolean">True</span>
    p<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;【EMD】&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果：</p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>【EMD】
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>根据输出结果可见，如果在子进程中添加了 daemon 属性，那么当主进程结束的时候，子进程也会跟着结束。所以没有打印子进程的信息。</p><h2 id="_4、join-方法" tabindex="-1"><a class="header-anchor" href="#_4、join-方法" aria-hidden="true">#</a> 4、join 方法</h2><p>结合上面的例子继续，如果我们想要让子线程执行完该怎么做呢？</p><p>那么我们可以用到 join 方法，join 方法的主要作用是：阻塞当前进程，直到调用 join 方法的那个进程执行完，再继续执行当前进程。</p><p>因此看下加了 join 方法的例子：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> multiprocessing
<span class="token keyword">import</span> time


<span class="token keyword">def</span> <span class="token function">worker</span><span class="token punctuation">(</span>interval<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;工作开始时间：{0}&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>ctime<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span>interval<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;工作结果时间：{0}&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>ctime<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    p <span class="token operator">=</span> multiprocessing<span class="token punctuation">.</span>Process<span class="token punctuation">(</span>target<span class="token operator">=</span>worker<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    p<span class="token punctuation">.</span>daemon <span class="token operator">=</span> <span class="token boolean">True</span>
    p<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    p<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;【EMD】&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出的结果：</p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>工作开始时间：Tue Oct 10 11:30:08 2017
工作结果时间：Tue Oct 10 11:30:11 2017
【EMD】
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5、pool" tabindex="-1"><a class="header-anchor" href="#_5、pool" aria-hidden="true">#</a> 5、Pool</h2><p>如果需要很多的子进程，难道我们需要一个一个的去创建吗？</p><p>当然不用，我们可以使用进程池的方法批量创建子进程。</p><p>例子如下：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># -*- coding: UTF-8 -*-</span>

<span class="token keyword">from</span> multiprocessing <span class="token keyword">import</span> Pool
<span class="token keyword">import</span> os<span class="token punctuation">,</span> time<span class="token punctuation">,</span> random


<span class="token keyword">def</span> <span class="token function">long_time_task</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;进程的名称：{0} ；进程的PID: {1} &#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> os<span class="token punctuation">.</span>getpid<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    start <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span>random<span class="token punctuation">.</span>random<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">3</span><span class="token punctuation">)</span>
    end <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;进程 {0} 运行了 {1} 秒&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> <span class="token punctuation">(</span>end <span class="token operator">-</span> start<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;主进程的 PID：{0}&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>getpid<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    p <span class="token operator">=</span> Pool<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        p<span class="token punctuation">.</span>apply_async<span class="token punctuation">(</span>long_time_task<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    p<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment"># 等待所有子进程结束后在关闭主进程</span>
    p<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;【End】&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出的结果如下：</p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>主进程的 PID：7256
进程的名称：0 ；进程的PID: 1492
进程的名称：1 ；进程的PID: 12232
进程的名称：2 ；进程的PID: 4332
进程的名称：3 ；进程的PID: 11604
进程 2 运行了 0.6500370502471924 秒
进程的名称：4 ；进程的PID: 4332
进程 1 运行了 1.0830621719360352 秒
进程的名称：5 ；进程的PID: 12232
进程 5 运行了 0.029001712799072266 秒
进程 4 运行了 0.9720554351806641 秒
进程 0 运行了 2.3181326389312744 秒
进程 3 运行了 2.5331451892852783 秒
【End】
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里有一点需要注意： <code>Pool</code> 对象调用 <code>join()</code> 方法会等待所有子进程执行完毕，调用 <code>join()</code> 之前必须先调用 <code>close()</code> ，调用<code>close()</code> 之后就不能继续添加新的 Process 了。</p><p>请注意输出的结果，子进程 0，1，2，3是立刻执行的，而子进程 4 要等待前面某个子进程完成后才执行，这是因为 Pool 的默认大小在我的电脑上是 4，因此，最多同时执行 4 个进程。这是 Pool 有意设计的限制，并不是操作系统的限制。如果改成：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>p <span class="token operator">=</span> Pool<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>就可以同时跑 5 个进程。</p><h2 id="_6、进程间通信" tabindex="-1"><a class="header-anchor" href="#_6、进程间通信" aria-hidden="true">#</a> 6、进程间通信</h2><p>Process 之间肯定是需要通信的，操作系统提供了很多机制来实现进程间的通信。Python 的 multiprocessing 模块包装了底层的机制，提供了Queue、Pipes 等多种方式来交换数据。</p><p>以 Queue 为例，在父进程中创建两个子进程，一个往 Queue 里写数据，一个从 Queue 里读数据：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python3</span>
<span class="token comment"># -*- coding: UTF-8 -*-</span>

<span class="token keyword">from</span> multiprocessing <span class="token keyword">import</span> Process<span class="token punctuation">,</span> Queue
<span class="token keyword">import</span> os<span class="token punctuation">,</span> time<span class="token punctuation">,</span> random


<span class="token keyword">def</span> <span class="token function">write</span><span class="token punctuation">(</span>q<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 写数据进程</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;写进程的PID:{0}&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>getpid<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> value <span class="token keyword">in</span> <span class="token punctuation">[</span><span class="token string">&#39;两点水&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;三点水&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;四点水&#39;</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;写进 Queue 的值为：{0}&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span>
        q<span class="token punctuation">.</span>put<span class="token punctuation">(</span>value<span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span>random<span class="token punctuation">.</span>random<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">read</span><span class="token punctuation">(</span>q<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 读取数据进程</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;读进程的PID:{0}&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>getpid<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        value <span class="token operator">=</span> q<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token boolean">True</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;从 Queue 读取的值为：{0}&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token comment"># 父进程创建 Queue，并传给各个子进程</span>
    q <span class="token operator">=</span> Queue<span class="token punctuation">(</span><span class="token punctuation">)</span>
    pw <span class="token operator">=</span> Process<span class="token punctuation">(</span>target<span class="token operator">=</span>write<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span>q<span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    pr <span class="token operator">=</span> Process<span class="token punctuation">(</span>target<span class="token operator">=</span>read<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span>q<span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment"># 启动子进程 pw</span>
    pw<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment"># 启动子进程pr</span>
    pr<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment"># 等待pw结束:</span>
    pw<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment"># pr 进程里是死循环，无法等待其结束，只能强行终止</span>
    pr<span class="token punctuation">.</span>terminate<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出的结果为：</p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>读进程的PID:13208
写进程的PID:10864
写进 Queue 的值为：两点水
从 Queue 读取的值为：两点水
写进 Queue 的值为：三点水
从 Queue 读取的值为：三点水
写进 Queue 的值为：四点水
从 Queue 读取的值为：四点水
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,51),o=[e];function i(c,l){return s(),a("div",null,o)}const r=n(t,[["render",i],["__file","process.html.vue"]]);export{r as default};
