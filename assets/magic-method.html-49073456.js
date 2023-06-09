import{_ as n,o as s,c as a,a as e}from"./app-3d979d38.js";const t={},p=e(`<h1 id="魔法方法" tabindex="-1"><a class="header-anchor" href="#魔法方法" aria-hidden="true">#</a> 魔法方法</h1><p>有时候修改文章，真的修改到想死。真的很耗时间，很烦的。</p><p>好吧，每次都是安慰自己，快完结了，快更新完了。</p><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h1><p><img src="http://twowaterimage.oss-cn-beijing.aliyuncs.com/2019-10-14-Python 的 Magic Method.png" alt=""></p><h1 id="一、python-的-magic-method" tabindex="-1"><a class="header-anchor" href="#一、python-的-magic-method" aria-hidden="true">#</a> 一、Python 的 Magic Method</h1><p>在 Python 中，所有以 &quot;__&quot; 双下划线包起来的方法，都统称为&quot;魔术方法&quot;。比如我们接触最多的 <code>__init__</code> 。</p><p>魔术方法有什么作用呢？</p><p>使用这些魔术方法，我们可以构造出优美的代码，将复杂的逻辑封装成简单的方法。</p><p>那么一个类中有哪些魔术方法呢？</p><p>我们可以使用 Python 内置的方法 <code>dir()</code> 来列出类中所有的魔术方法.示例如下：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python3</span>
<span class="token comment"># -*- coding: UTF-8 -*-</span>

<span class="token keyword">class</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">dir</span><span class="token punctuation">(</span>User<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出的结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[&#39;__class__&#39;, &#39;__delattr__&#39;, &#39;__dict__&#39;, &#39;__dir__&#39;, &#39;__doc__&#39;, &#39;__eq__&#39;, &#39;__format__&#39;, &#39;__ge__&#39;, &#39;__getattribute__&#39;, &#39;__gt__&#39;, &#39;__hash__&#39;, &#39;__init__&#39;, &#39;__init_subclass__&#39;, &#39;__le__&#39;, &#39;__lt__&#39;, &#39;__module__&#39;, &#39;__ne__&#39;, &#39;__new__&#39;, &#39;__reduce__&#39;, &#39;__reduce_ex__&#39;, &#39;__repr__&#39;, &#39;__setattr__&#39;, &#39;__sizeof__&#39;, &#39;__str__&#39;, &#39;__subclasshook__&#39;, &#39;__weakref__&#39;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以看到，一个类的魔术方法还是挺多的，不过我们只需要了解一些常见和常用的魔术方法就好了。</p><h1 id="二、构造-new-和初始化-init" tabindex="-1"><a class="header-anchor" href="#二、构造-new-和初始化-init" aria-hidden="true">#</a> 二、构造(<code>__new__</code>)和初始化(<code>__init__</code>)</h1><p>通过之前的学习，我们已经知道定义一个类时，我们经常会通过 <code>__init__(self)</code> 的方法在实例化对象的时候，对属性进行设置。</p><p>比如下面的例子：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python3</span>
<span class="token comment"># -*- coding: UTF-8 -*-</span>

<span class="token keyword">class</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        self<span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>

user<span class="token operator">=</span>User<span class="token punctuation">(</span><span class="token string">&#39;两点水&#39;</span><span class="token punctuation">,</span><span class="token number">23</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实际上，创建一个类的过程是分为两步的，一步是创建类的对象，还有一步就是对类进行初始化。</p><p><code>__new__</code> 是用来创建类并返回这个类的实例, 而<code>__init__</code> 只是将传入的参数来初始化该实例.<code>__new__</code> 在创建一个实例的过程中必定会被调用,但 <code>__init__</code> 就不一定，比如通过 pickle.load 的方式反序列化一个实例时就不会调用 <code>__init__</code> 方法。</p><p><img src="http://twowaterimage.oss-cn-beijing.aliyuncs.com/2019-10-14-Python类创建的过程.png" alt=""></p><p><code>def __new__(cls)</code> 是在 <code>def __init__(self)</code> 方法之前调用的，作用是返回一个实例对象。还有一点需要注意的是：<code>__new__</code> 方法总是需要返回该类的一个实例，而 <code>__init__</code> 不能返回除了 <code>None</code> 的任何值</p><p>具体的示例：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python3</span>
<span class="token comment"># -*- coding: UTF-8 -*-</span>

<span class="token keyword">class</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__new__</span><span class="token punctuation">(</span>cls<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 打印 __new__方法中的相关信息</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;调用了 def __new__ 方法&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span>
        <span class="token comment"># 最后返回父类的方法</span>
        <span class="token keyword">return</span> <span class="token builtin">super</span><span class="token punctuation">(</span>User<span class="token punctuation">,</span> cls<span class="token punctuation">)</span><span class="token punctuation">.</span>__new__<span class="token punctuation">(</span>cls<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;调用了 def __init__ 方法&#39;</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name
        self<span class="token punctuation">.</span>age <span class="token operator">=</span> age


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    usr <span class="token operator">=</span> User<span class="token punctuation">(</span><span class="token string">&#39;两点水&#39;</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看看输出的结果：</p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>调用了 def __new__ 方法
(&#39;两点水&#39;, 23)
调用了 def __init__ 方法
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过打印的结果来看，我们就可以知道一个类创建的过程是怎样的了，先是调用了 <code>__new__</code> 方法来创建一个对象，把参数传给 <code>__init__</code> 方法进行实例化。</p><p>其实在实际开发中，很少会用到 <code>__new__</code> 方法，除非你希望能够控制类的创建。通常讲到 <code>__new__</code> ，都是牵扯到 <code>metaclass</code>(元类)的。</p><p>当然当一个对象的生命周期结束的时候，析构函数 <code>__del__</code> 方法会被调用。但是这个方法是 Python 自己对对象进行垃圾回收的。</p><h1 id="三、属性的访问控制" tabindex="-1"><a class="header-anchor" href="#三、属性的访问控制" aria-hidden="true">#</a> 三、属性的访问控制</h1><p>之前也有讲到过，Python 没有真正意义上的私有属性。然后这就导致了对 Python 类的封装性比较差。我们有时候会希望 Python 能够定义私有属性，然后提供公共可访问的 get 方法和 set 方法。Python 其实可以通过魔术方法来实现封装。</p><table><thead><tr><th>方法</th><th>说明</th></tr></thead><tbody><tr><td><code>__getattr__(self, name)</code></td><td>该方法定义了你试图访问一个不存在的属性时的行为。因此，重载该方法可以实现捕获错误拼写然后进行重定向, 或者对一些废弃的属性进行警告。</td></tr><tr><td><code>__setattr__(self, name, value)</code></td><td>定义了对属性进行赋值和修改操作时的行为。不管对象的某个属性是否存在,都允许为该属性进行赋值.有一点需要注意，实现 <code>__setattr__</code> 时要避免&quot;无限递归&quot;的错误，</td></tr><tr><td><code>__delattr__(self, name)</code></td><td><code>__delattr__</code> 与 <code>__setattr__</code> 很像，只是它定义的是你删除属性时的行为。实现 <code>__delattr__</code> 是同时要避免&quot;无限递归&quot;的错误</td></tr><tr><td><code>__getattribute__(self, name)</code></td><td><code>__getattribute__</code> 定义了你的属性被访问时的行为，相比较，<code>__getattr__</code> 只有该属性不存在时才会起作用。因此，在支持 <code>__getattribute__ </code>的 Python 版本,调用<code>__getattr__</code> 前必定会调用 <code>__getattribute__\`\`__getattribute__</code> 同样要避免&quot;无限递归&quot;的错误。</td></tr></tbody></table><p>通过上面的方法表可以知道，在进行属性访问控制定义的时候你可能会很容易的引起一个错误，可以看看下面的示例：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">__setattr__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">:</span>
    self<span class="token punctuation">.</span>name <span class="token operator">=</span> value
    <span class="token comment"># 每当属性被赋值的时候， \`\`__setattr__()\`\` 会被调用，这样就造成了递归调用。</span>
    <span class="token comment"># 这意味这会调用 \`\`self.__setattr__(&#39;name&#39;, value)\`\` ，每次方法会调用自己。这样会造成程序崩溃。</span>

<span class="token keyword">def</span> <span class="token function">__setattr__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 给类中的属性名分配值</span>
    self<span class="token punctuation">.</span>__dict__<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> value  
    <span class="token comment"># 定制特有属性</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面方法的调用具体示例如下：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python3</span>
<span class="token comment"># -*- coding: UTF-8 -*-</span>

<span class="token keyword">class</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__getattr__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;调用了 __getattr__ 方法&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token builtin">super</span><span class="token punctuation">(</span>User<span class="token punctuation">,</span> self<span class="token punctuation">)</span><span class="token punctuation">.</span>__getattr__<span class="token punctuation">(</span>name<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">__setattr__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;调用了 __setattr__ 方法&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token builtin">super</span><span class="token punctuation">(</span>User<span class="token punctuation">,</span> self<span class="token punctuation">)</span><span class="token punctuation">.</span>__setattr__<span class="token punctuation">(</span>name<span class="token punctuation">,</span> value<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">__delattr__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;调用了 __delattr__ 方法&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token builtin">super</span><span class="token punctuation">(</span>User<span class="token punctuation">,</span> self<span class="token punctuation">)</span><span class="token punctuation">.</span>__delattr__<span class="token punctuation">(</span>name<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">__getattribute__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;调用了 __getattribute__ 方法&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token builtin">super</span><span class="token punctuation">(</span>User<span class="token punctuation">,</span> self<span class="token punctuation">)</span><span class="token punctuation">.</span>__getattribute__<span class="token punctuation">(</span>name<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    user <span class="token operator">=</span> User<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment"># 设置属性值，会调用 __setattr__</span>
    user<span class="token punctuation">.</span>attr1 <span class="token operator">=</span> <span class="token boolean">True</span>
    <span class="token comment"># 属性存在,只有__getattribute__调用</span>
    user<span class="token punctuation">.</span>attr1
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        <span class="token comment"># 属性不存在, 先调用__getattribute__, 后调用__getattr__</span>
        user<span class="token punctuation">.</span>attr2
    <span class="token keyword">except</span> AttributeError<span class="token punctuation">:</span>
        <span class="token keyword">pass</span>
    <span class="token comment"># __delattr__调用</span>
    <span class="token keyword">del</span> user<span class="token punctuation">.</span>attr1

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出的结果：</p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>调用了 __setattr__ 方法
调用了 __getattribute__ 方法
调用了 __getattribute__ 方法
调用了 __getattr__ 方法
调用了 __delattr__ 方法
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="四、对象的描述器" tabindex="-1"><a class="header-anchor" href="#四、对象的描述器" aria-hidden="true">#</a> 四、对象的描述器</h1><p>一般来说，一个描述器是一个有“绑定行为”的对象属性 (object attribute)，它的访问控制被描述器协议方法重写。</p><p>这些方法是 <code>__get__()</code>, <code>__set__()</code> , 和 <code>__delete__()</code> 。</p><p>有这些方法的对象叫做描述器。</p><p>默认对属性的访问控制是从对象的字典里面 (<code>__dict__</code>) 中获取 (get) , 设置 (set) 和删除 (delete) 。</p><p>举例来说， <code>a.x</code> 的查找顺序是, <code>a.__dict__[&#39;x&#39;]</code> , 然后 <code>type(a).__dict__[&#39;x&#39;]</code> , 然后找 <code>type(a)</code> 的父类 ( 不包括元类 (metaclass) ).如果查找到的值是一个描述器, Python 就会调用描述器的方法来重写默认的控制行为。</p><p>这个重写发生在这个查找环节的哪里取决于定义了哪个描述器方法。</p><p>注意, 只有在新式类中时描述器才会起作用。在之前的篇节中已经提到新式类和旧式类的，有兴趣可以查看之前的篇节来看看，至于新式类最大的特点就是所有类都继承自 type 或者 object 的类。</p><p>在面向对象编程时，如果一个类的属性有相互依赖的关系时，使用描述器来编写代码可以很巧妙的组织逻辑。在 Django 的 ORM 中,models.Model 中的 InterField 等字段, 就是通过描述器来实现功能的。</p><p>我们先看下下面的例子：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python3</span>
<span class="token comment"># -*- coding: UTF-8 -*-</span>

<span class="token keyword">class</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token operator">=</span><span class="token string">&#39;两点水&#39;</span><span class="token punctuation">,</span> sex<span class="token operator">=</span><span class="token string">&#39;男&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>sex <span class="token operator">=</span> sex
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name

    <span class="token keyword">def</span> <span class="token function">__get__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> obj<span class="token punctuation">,</span> objtype<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;获取 name 值&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>name

    <span class="token keyword">def</span> <span class="token function">__set__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> obj<span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;设置 name 值&#39;</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> val


<span class="token keyword">class</span> <span class="token class-name">MyClass</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    x <span class="token operator">=</span> User<span class="token punctuation">(</span><span class="token string">&#39;两点水&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;男&#39;</span><span class="token punctuation">)</span>
    y <span class="token operator">=</span> <span class="token number">5</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    m <span class="token operator">=</span> MyClass<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>m<span class="token punctuation">.</span>x<span class="token punctuation">)</span>

    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\\n&#39;</span><span class="token punctuation">)</span>

    m<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token string">&#39;三点水&#39;</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>m<span class="token punctuation">.</span>x<span class="token punctuation">)</span>

    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\\n&#39;</span><span class="token punctuation">)</span>

    <span class="token keyword">print</span><span class="token punctuation">(</span>m<span class="token punctuation">.</span>x<span class="token punctuation">)</span>

    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\\n&#39;</span><span class="token punctuation">)</span>

    <span class="token keyword">print</span><span class="token punctuation">(</span>m<span class="token punctuation">.</span>y<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出的结果如下：</p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>获取 name 值
两点水


设置 name 值
获取 name 值
三点水


获取 name 值
三点水


5

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过这个例子，可以很好的观察到这 <code>__get__()</code> 和 <code>__set__()</code> 这些方法的调用。</p><p>再看一个经典的例子</p><p>我们知道，距离既可以用单位&quot;米&quot;表示,也可以用单位&quot;英尺&quot;表示。 现在我们定义一个类来表示距离,它有两个属性: 米和英尺。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python3</span>
<span class="token comment"># -*- coding: UTF-8 -*-</span>


<span class="token keyword">class</span> <span class="token class-name">Meter</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> value<span class="token operator">=</span><span class="token number">0.0</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token builtin">float</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">__get__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> instance<span class="token punctuation">,</span> owner<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>value

    <span class="token keyword">def</span> <span class="token function">__set__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> instance<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token builtin">float</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">Foot</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__get__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> instance<span class="token punctuation">,</span> owner<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> instance<span class="token punctuation">.</span>meter <span class="token operator">*</span> <span class="token number">3.2808</span>

    <span class="token keyword">def</span> <span class="token function">__set__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> instance<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">:</span>
        instance<span class="token punctuation">.</span>meter <span class="token operator">=</span> <span class="token builtin">float</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">3.2808</span>


<span class="token keyword">class</span> <span class="token class-name">Distance</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    meter <span class="token operator">=</span> Meter<span class="token punctuation">(</span><span class="token punctuation">)</span>
    foot <span class="token operator">=</span> Foot<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    d <span class="token operator">=</span> Distance<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span>meter<span class="token punctuation">,</span> d<span class="token punctuation">.</span>foot<span class="token punctuation">)</span>
    d<span class="token punctuation">.</span>meter <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span>meter<span class="token punctuation">,</span> d<span class="token punctuation">.</span>foot<span class="token punctuation">)</span>
    d<span class="token punctuation">.</span>meter <span class="token operator">=</span> <span class="token number">2</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span>meter<span class="token punctuation">,</span> d<span class="token punctuation">.</span>foot<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出的结果：</p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>0.0 0.0
1.0 3.2808
2.0 6.5616
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面例子中,在还没有对 Distance 的实例赋值前, 我们认为 meter 和 foot 应该是各自类的实例对象, 但是输出却是数值。这是因为 <code>__get__</code> 发挥了作用.</p><p>我们只是修改了 meter ,并且将其赋值成为 int ，但 foot 也修改了。这是 <code>__set__</code> 发挥了作用.</p><p>描述器对象 (Meter、Foot) 不能独立存在, 它需要被另一个所有者类 (Distance) 所持有。描述器对象可以访问到其拥有者实例的属性，比如例子中 Foot 的 <code>instance.meter</code> 。</p><h1 id="五、自定义容器-container" tabindex="-1"><a class="header-anchor" href="#五、自定义容器-container" aria-hidden="true">#</a> 五、自定义容器（Container）</h1><p>经过之前编章的介绍，我们知道在 Python 中，常见的容器类型有: dict, tuple, list, string。其中也提到过可容器和不可变容器的概念。其中 tuple, string 是不可变容器，dict, list 是可变容器。</p><p>可变容器和不可变容器的区别在于，不可变容器一旦赋值后，不可对其中的某个元素进行修改。当然具体的介绍，可以看回之前的文章，有图文介绍。</p><p>那么这里先提出一个问题，这些数据结构就够我们开发使用吗？</p><p>不够的时候，或者说有些特殊的需求不能单单只使用这些基本的容器解决的时候，该怎么办呢？</p><p>这个时候就需要自定义容器了，那么具体我们该怎么做呢？</p><table><thead><tr><th>功能</th><th>说明</th></tr></thead><tbody><tr><td>自定义不可变容器类型</td><td>需要定义 <code>__len__</code> 和 <code>__getitem__</code> 方法</td></tr><tr><td>自定义可变类型容器</td><td>在不可变容器类型的基础上增加定义 <code>__setitem__</code> 和 <code>__delitem__</code></td></tr><tr><td>自定义的数据类型需要迭代</td><td>需定义 <code>__iter__</code></td></tr><tr><td>返回自定义容器的长度</td><td>需实现 <code>__len__(self)</code></td></tr><tr><td>自定义容器可以调用 <code>self[key]</code> ，如果 key 类型错误，抛出TypeError ，如果没法返回key对应的数值时,该方法应该抛出ValueError</td><td>需要实现 <code>__getitem__(self, key)</code></td></tr><tr><td>当执行 <code>self[key] = value</code> 时</td><td>调用是 <code>__setitem__(self, key, value)</code>这个方法</td></tr><tr><td>当执行 <code>del self[key]</code> 方法</td><td>其实调用的方法是 <code>__delitem__(self, key)</code></td></tr><tr><td>当你想你的容器可以执行 <code>for x in container:</code> 或者使用 <code>iter(container)</code> 时</td><td>需要实现 <code>__iter__(self)</code> ，该方法返回的是一个迭代器</td></tr></tbody></table><p>来看一下使用上面魔术方法实现 Haskell 语言中的一个数据结构：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python3</span>
<span class="token comment"># -*- coding: UTF-8 -*-</span>

<span class="token keyword">class</span> <span class="token class-name">FunctionalList</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&#39;&#39;&#39; 实现了内置类型list的功能,并丰富了一些其他方法: head, tail, init, last, drop, take&#39;&#39;&#39;</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> values<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> values <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>values <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>values <span class="token operator">=</span> values

    <span class="token keyword">def</span> <span class="token function">__len__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token builtin">len</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>values<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">__getitem__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>values<span class="token punctuation">[</span>key<span class="token punctuation">]</span>

    <span class="token keyword">def</span> <span class="token function">__setitem__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>values<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> value

    <span class="token keyword">def</span> <span class="token function">__delitem__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">del</span> self<span class="token punctuation">.</span>values<span class="token punctuation">[</span>key<span class="token punctuation">]</span>

    <span class="token keyword">def</span> <span class="token function">__iter__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token builtin">iter</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>values<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">__reversed__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> FunctionalList<span class="token punctuation">(</span><span class="token builtin">reversed</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>values<span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">append</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>values<span class="token punctuation">.</span>append<span class="token punctuation">(</span>value<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">head</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 获取第一个元素</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>values<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>

    <span class="token keyword">def</span> <span class="token function">tail</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 获取第一个元素之后的所有元素</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>values<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span>

    <span class="token keyword">def</span> <span class="token function">init</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 获取最后一个元素之前的所有元素</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>values<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>

    <span class="token keyword">def</span> <span class="token function">last</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 获取最后一个元素</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>values<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>

    <span class="token keyword">def</span> <span class="token function">drop</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 获取所有元素，除了前N个</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>values<span class="token punctuation">[</span>n<span class="token punctuation">:</span><span class="token punctuation">]</span>

    <span class="token keyword">def</span> <span class="token function">take</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 获取前N个元素</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>values<span class="token punctuation">[</span><span class="token punctuation">:</span>n<span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="六、运算符相关的魔术方法" tabindex="-1"><a class="header-anchor" href="#六、运算符相关的魔术方法" aria-hidden="true">#</a> 六、运算符相关的魔术方法</h1><p>运算符相关的魔术方法实在太多了,j就大概列举下面两类：</p><h2 id="_1、比较运算符" tabindex="-1"><a class="header-anchor" href="#_1、比较运算符" aria-hidden="true">#</a> 1、比较运算符</h2><table><thead><tr><th>魔术方法</th><th>说明</th></tr></thead><tbody><tr><td><code>__cmp__(self, other)</code></td><td>如果该方法返回负数，说明 <code>self &lt; other</code>; 返回正数，说明 <code>self &gt; other</code>; 返回 0 说明 <code>self == other </code>。强烈不推荐来定义 <code>__cmp__</code> , 取而代之, 最好分别定义 <code>__lt__</code>, <code>__eq__</code> 等方法从而实现比较功能。 <code>__cmp__</code> 在 Python3 中被废弃了。</td></tr><tr><td><code>__eq__(self, other)</code></td><td>定义了比较操作符 == 的行为</td></tr><tr><td><code>__ne__(self, other)</code></td><td>定义了比较操作符 != 的行为</td></tr><tr><td><code>__lt__(self, other)</code></td><td>定义了比较操作符 &lt; 的行为</td></tr><tr><td><code>__gt__(self, other)</code></td><td>定义了比较操作符 &gt; 的行为</td></tr><tr><td><code>__le__(self, other)</code></td><td>定义了比较操作符 &lt;= 的行为</td></tr><tr><td><code>__ge__(self, other)</code></td><td>定义了比较操作符 &gt;= 的行为</td></tr></tbody></table><p>来看个简单的例子就能理解了：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python3</span>
<span class="token comment"># -*- coding: UTF-8 -*-</span>

<span class="token keyword">class</span> <span class="token class-name">Number</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>value <span class="token operator">=</span> value

    <span class="token keyword">def</span> <span class="token function">__eq__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> other<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;__eq__&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>value <span class="token operator">==</span> other<span class="token punctuation">.</span>value

    <span class="token keyword">def</span> <span class="token function">__ne__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> other<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;__ne__&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>value <span class="token operator">!=</span> other<span class="token punctuation">.</span>value

    <span class="token keyword">def</span> <span class="token function">__lt__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> other<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;__lt__&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>value <span class="token operator">&lt;</span> other<span class="token punctuation">.</span>value

    <span class="token keyword">def</span> <span class="token function">__gt__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> other<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;__gt__&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>value <span class="token operator">&gt;</span> other<span class="token punctuation">.</span>value

    <span class="token keyword">def</span> <span class="token function">__le__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> other<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;__le__&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>value <span class="token operator">&lt;=</span> other<span class="token punctuation">.</span>value

    <span class="token keyword">def</span> <span class="token function">__ge__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> other<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;__ge__&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>value <span class="token operator">&gt;=</span> other<span class="token punctuation">.</span>value


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    num1 <span class="token operator">=</span> Number<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    num2 <span class="token operator">=</span> Number<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;num1 == num2 ? --------&gt; {} \\n&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>num1 <span class="token operator">==</span> num2<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;num1 != num2 ? --------&gt; {} \\n&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>num1 <span class="token operator">==</span> num2<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;num1 &lt; num2 ? --------&gt; {} \\n&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>num1 <span class="token operator">&lt;</span> num2<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;num1 &gt; num2 ? --------&gt; {} \\n&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>num1 <span class="token operator">&gt;</span> num2<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;num1 &lt;= num2 ? --------&gt; {} \\n&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>num1 <span class="token operator">&lt;=</span> num2<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;num1 &gt;= num2 ? --------&gt; {} \\n&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>num1 <span class="token operator">&gt;=</span> num2<span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出的结果为：</p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>__eq__
num1 == num2 ? --------&gt; False

__eq__
num1 != num2 ? --------&gt; False

__lt__
num1 &lt; num2 ? --------&gt; True

__gt__
num1 &gt; num2 ? --------&gt; False

__le__
num1 &lt;= num2 ? --------&gt; True

__ge__
num1 &gt;= num2 ? --------&gt; False

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2、算术运算符" tabindex="-1"><a class="header-anchor" href="#_2、算术运算符" aria-hidden="true">#</a> 2、算术运算符</h2><table><thead><tr><th>魔术方法</th><th>说明</th></tr></thead><tbody><tr><td><code>__add__(self, other)</code></td><td>实现了加号运算</td></tr><tr><td><code>__sub__(self, other)</code></td><td>实现了减号运算</td></tr><tr><td><code>__mul__(self, other)</code></td><td>实现了乘法运算</td></tr><tr><td><code>__floordiv__(self, other)</code></td><td>实现了 // 运算符</td></tr><tr><td><code>___div__(self, other)</code></td><td>实现了/运算符. 该方法在 Python3 中废弃. 原因是 Python3 中，division 默认就是 true division</td></tr><tr><td><code>__truediv__(self, other)</code></td><td>实现了 true division. 只有你声明了 <code>from __future__ import division</code> 该方法才会生效</td></tr><tr><td><code>__mod__(self, other)</code></td><td>实现了 % 运算符, 取余运算</td></tr><tr><td><code>__divmod__(self, other)</code></td><td>实现了 divmod() 內建函数</td></tr><tr><td><code>__pow__(self, other)</code></td><td>实现了 <code>**</code> 操作. N 次方操作</td></tr><tr><td><code>__lshift__(self, other)</code></td><td>实现了位操作 <code>&lt;&lt;</code></td></tr><tr><td><code>__rshift__(self, other)</code></td><td>实现了位操作 <code>&gt;&gt;</code></td></tr><tr><td><code>__and__(self, other)</code></td><td>实现了位操作 <code>&amp;</code></td></tr><tr><td><code>__or__(self, other)</code></td><td>实现了位操作 \`</td></tr><tr><td><code>__xor__(self, other)</code></td><td>实现了位操作 <code>^</code></td></tr></tbody></table><p>可以关注下公众号：</p><p>这个公号可能很少更新，但是一更新，就是把整理的一系列文章更新上去。</p><p><img src="http://twowaterimage.oss-cn-beijing.aliyuncs.com/2019-10-14-WechatIMG697.jpeg" alt=""></p>`,83),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","magic-method.html.vue"]]);export{d as default};
