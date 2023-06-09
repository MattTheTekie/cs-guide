import{_ as n,o as s,c as a,a as e}from"./app-3d979d38.js";const t={},p=e(`<h1 id="闭包" tabindex="-1"><a class="header-anchor" href="#闭包" aria-hidden="true">#</a> 闭包</h1><p>网络上介绍 python 闭包的文章已经很多了，本文将通过解决一个需求问题来了解闭包。</p><p>这个需求是这样的，我们需要一直记录自己的学习时间，以分钟为单位。就好比我学习了 2 分钟，就返回 2 ，然后隔了一阵子，我学习了 10 分钟，那么就返回 12 ，像这样把学习时间一直累加下去。</p><p>面对这个需求，我们一般都会创建一个全局变量来记录时间，然后用一个方法来新增每次的学习时间，通常都会写成下面这个形式：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>time <span class="token operator">=</span> <span class="token number">0</span>

<span class="token keyword">def</span> <span class="token function">insert_time</span><span class="token punctuation">(</span><span class="token builtin">min</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    time <span class="token operator">=</span> time <span class="token operator">+</span> <span class="token builtin">min</span>
    <span class="token keyword">return</span>  time

<span class="token keyword">print</span><span class="token punctuation">(</span>insert_time<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>insert_time<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>认真想一下，会不会有什么问题呢？</p><p>其实，这个在 python 里面是会报错的。会报如下错误：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>UnboundLocalError: local variable &#39;time&#39; referenced before assignment
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>那是因为，在 python 中，如果一个函数使用了和全局变量相同的名字且改变了该变量的值，那么该变量就会变成局部变量，那么就会造成在函数中我们没有进行定义就引用了，所以会报该错误。</p><p>如果确实要引用全局变量，并在函数中对它进行修改，该怎么做呢？</p><p>我们可以使用 <code>global</code> 关键字,具体修改如下：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>time <span class="token operator">=</span> <span class="token number">0</span>


<span class="token keyword">def</span> <span class="token function">insert_time</span><span class="token punctuation">(</span><span class="token builtin">min</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">global</span>  time
    time <span class="token operator">=</span> time <span class="token operator">+</span> <span class="token builtin">min</span>
    <span class="token keyword">return</span>  time

<span class="token keyword">print</span><span class="token punctuation">(</span>insert_time<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>insert_time<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>2
12
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>可是啊，这里使用了全局变量，我们在开发中能尽量避免使用全局变量的就尽量避免使用。因为不同模块，不同函数都可以自由的访问全局变量，可能会造成全局变量的不可预知性。比如程序员甲修改了全局变量 <code>time</code> 的值，然后程序员乙同时也对 <code>time</code> 进行了修改，如果其中有错误，这种错误是很难发现和更正的。</p><p>全局变量降低了函数或模块之间的通用性，不同的函数或模块都要依赖于全局变量。同样，全局变量降低了代码的可读性，阅读者可能并不知道调用的某个变量是全局变量。</p><p>那有没有更好的方法呢？</p><p>这时候我们使用闭包来解决一下，先直接看代码：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>time <span class="token operator">=</span> <span class="token number">0</span>


<span class="token keyword">def</span> <span class="token function">study_time</span><span class="token punctuation">(</span>time<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">insert_time</span><span class="token punctuation">(</span><span class="token builtin">min</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">nonlocal</span>  time
        time <span class="token operator">=</span> time <span class="token operator">+</span> <span class="token builtin">min</span>
        <span class="token keyword">return</span> time

    <span class="token keyword">return</span> insert_time


f <span class="token operator">=</span> study_time<span class="token punctuation">(</span>time<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>f<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>time<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>f<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>time<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果如下:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>2
0
12
0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里最直接的表现就是全局变量 <code>time</code> 至此至终都没有修改过,这里还是用了 <code>nonlocal</code> 关键字,表示在函数或其他作用域中使用外层(非全局)变量。那么上面那段代码具体的运行流程是怎样的。我们可以看下下图：</p><p><img src="http://twowaterimage.oss-cn-beijing.aliyuncs.com/2019-10-14-python 闭包解决.png" alt=""></p><p>这种内部函数的局部作用域中可以访问外部函数局部作用域中变量的行为，我们称为： 闭包。更加直接的表达方式就是，当某个函数被当成对象返回时，夹带了外部变量，就形成了一个闭包。k</p><p>闭包避免了使用全局变量，此外，闭包允许将函数与其所操作的某些数据（环境）关连起来。而且使用闭包，可以使代码变得更加的优雅。而且下一篇讲到的装饰器，也是基于闭包实现的。</p><p>到这里，就会有一个问题了，你说它是闭包就是闭包了？有没有什么办法来验证一下这个函数就是闭包呢？</p><p>有的，所有函数都有一个 <code>__closure__</code> 属性，如果函数是闭包的话，那么它返回的是一个由 cell 组成的元组对象。cell 对象的 cell_contents 属性就是存储在闭包中的变量。</p><p>我们打印出来体验一下：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>time <span class="token operator">=</span> <span class="token number">0</span>


<span class="token keyword">def</span> <span class="token function">study_time</span><span class="token punctuation">(</span>time<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">insert_time</span><span class="token punctuation">(</span><span class="token builtin">min</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">nonlocal</span>  time
        time <span class="token operator">=</span> time <span class="token operator">+</span> <span class="token builtin">min</span>
        <span class="token keyword">return</span> time

    <span class="token keyword">return</span> insert_time


f <span class="token operator">=</span> study_time<span class="token punctuation">(</span>time<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>f<span class="token punctuation">.</span>__closure__<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>f<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>time<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>f<span class="token punctuation">.</span>__closure__<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>cell_contents<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>f<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>time<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>f<span class="token punctuation">.</span>__closure__<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>cell_contents<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印的结果为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(&lt;cell at 0x0000000000410C48: int object at 0x000000001D6AB420&gt;,)
2
0
2
12
0
12
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从打印结果可见，传进来的值一直存储在闭包的 cell_contents 中,因此，这也就是闭包的最大特点，可以将父函数的变量与其内部定义的函数绑定。就算生成闭包的父函数已经释放了，闭包仍然存在。</p><p>闭包的过程其实好比类（父函数）生成实例（闭包），不同的是父函数只在调用时执行，执行完毕后其环境就会释放，而类则在文件执行时创建，一般程序执行完毕后作用域才释放，因此对一些需要重用的功能且不足以定义为类的行为，使用闭包会比使用类占用更少的资源，且更轻巧灵活。</p>`,33),i=[p];function c(l,o){return s(),a("div",null,i)}const d=n(t,[["render",c],["__file","closure.html.vue"]]);export{d as default};