import{_ as n,o as s,c as a,a as e}from"./app-3d979d38.js";const p={},t=e(`<h1 id="枚举" tabindex="-1"><a class="header-anchor" href="#枚举" aria-hidden="true">#</a> 枚举</h1><p>2019年10月14日16:59:38 看了一下，还有五个章节就修改完基础部分了。</p><p>干就完事了。</p><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h1><p><img src="http://twowaterimage.oss-cn-beijing.aliyuncs.com/2019-10-14-枚举类.png" alt=""></p><h1 id="一、枚举类的使用" tabindex="-1"><a class="header-anchor" href="#一、枚举类的使用" aria-hidden="true">#</a> 一、枚举类的使用</h1><p>实际开发中，我们离不开定义常量，当我们需要定义常量时，其中一个办法是用大写变量通过整数来定义，例如月份：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>JAN <span class="token operator">=</span> <span class="token number">1</span>
FEB <span class="token operator">=</span> <span class="token number">2</span>
MAR <span class="token operator">=</span> <span class="token number">3</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
NOV <span class="token operator">=</span> <span class="token number">11</span>
DEC <span class="token operator">=</span> <span class="token number">12</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然这样做简单快捷，缺点是类型是 <code>int</code> ，并且仍然是变量。</p><p>那有没有什么好的方法呢？</p><p>这时候我们定义一个 class 类型，每个常量都是 class 里面唯一的实例。</p><p>正好 Python 提供了 Enum 类来实现这个功能如下：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python3</span>
<span class="token comment"># -*- coding: UTF-8 -*-</span>

<span class="token keyword">from</span> enum <span class="token keyword">import</span> Enum

Month <span class="token operator">=</span> Enum<span class="token punctuation">(</span><span class="token string">&#39;Month&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;Jan&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Feb&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Mar&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Apr&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;May&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Jun&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Jul&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Aug&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Sep&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Oct&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Nov&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Dec&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 遍历枚举类型</span>
<span class="token keyword">for</span> name<span class="token punctuation">,</span> member <span class="token keyword">in</span> Month<span class="token punctuation">.</span>__members__<span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> <span class="token string">&#39;---------&#39;</span><span class="token punctuation">,</span> member<span class="token punctuation">,</span> <span class="token string">&#39;----------&#39;</span><span class="token punctuation">,</span> member<span class="token punctuation">.</span>value<span class="token punctuation">)</span>

<span class="token comment"># 直接引用一个常量</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\\n&#39;</span><span class="token punctuation">,</span> Month<span class="token punctuation">.</span>Jan<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出的结果如下：</p><p><img src="http://twowaterimage.oss-cn-beijing.aliyuncs.com/2019-10-14-Python3 枚举类型的使用.png" alt=""></p><p>我们使用 <code>Enum</code> 来定义了一个枚举类。</p><p>上面的代码，我们创建了一个有关月份的枚举类型 Month ，这里要注意的是构造参数，第一个参数 Month 表示的是该枚举类的类名，第二个 tuple 参数，表示的是枚举类的值；当然，枚举类通过 <code>__members__</code> 遍历它的所有成员的方法。</p><p>注意的一点是 ， <code>member.value</code> 是自动赋给成员的 <code>int</code> 类型的常量，默认是从 1 开始的。</p><p><strong>而且 Enum 的成员均为单例（Singleton），并且不可实例化，不可更改</strong></p><h1 id="二、enum-的源码" tabindex="-1"><a class="header-anchor" href="#二、enum-的源码" aria-hidden="true">#</a> 二、Enum 的源码</h1><p>通过上面的实例可以知道通过 <code>__members__</code> 可以遍历枚举类的所有成员。</p><p>那有没有想过为什么呢？</p><p>当你看到那段代码的时候，有没有想过为什么通过 <code>__members__</code> 就能遍历枚举类型的所有成员出来？</p><p>我们可以先来大致看看 Enum 的源码是如何实现的；</p><p>Enum 在模块 enum.py 中，先来看看 Enum 类的片段</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Enum</span><span class="token punctuation">(</span>metaclass<span class="token operator">=</span>EnumMeta<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;Generic enumeration.
    Derive from this class to define new enumerations.
    &quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，Enum 是继承元类 EnumMeta 的；再看看 EnumMeta 的相关片段</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">EnumMeta</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;Metaclass for Enum&quot;&quot;&quot;</span>
    <span class="token decorator annotation punctuation">@property</span>
    <span class="token keyword">def</span> <span class="token function">__members__</span><span class="token punctuation">(</span>cls<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;Returns a mapping of member name-&gt;value.
        This mapping lists all enum members, including aliases. Note that this
        is a read-only view of the internal mapping.
        &quot;&quot;&quot;</span>
        <span class="token keyword">return</span> MappingProxyType<span class="token punctuation">(</span>cls<span class="token punctuation">.</span>_member_map_<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首先 <code>__members__</code> 方法返回的是一个包含一个 Dict 既 Map 的 MappingProxyType，并且通过 @property 将方法 <code>__members__(cls)</code> 的访问方式改变为了变量的的形式，那么就可以直接通过 <code>__members__</code> 来进行访问了</p><h1 id="三、自定义类型的枚举" tabindex="-1"><a class="header-anchor" href="#三、自定义类型的枚举" aria-hidden="true">#</a> 三、自定义类型的枚举</h1><p>但有些时候我们需要控制枚举的类型，那么我们可以 Enum 派生出自定义类来满足这种需要。通过修改上面的例子：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python3</span>
<span class="token comment"># -*- coding: UTF-8 -*-</span>
<span class="token keyword">from</span> enum <span class="token keyword">import</span> Enum<span class="token punctuation">,</span> unique

Enum<span class="token punctuation">(</span><span class="token string">&#39;Month&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;Jan&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Feb&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Mar&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Apr&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;May&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Jun&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Jul&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Aug&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Sep&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Oct&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Nov&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Dec&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token comment"># @unique 装饰器可以帮助我们检查保证没有重复值</span>
<span class="token decorator annotation punctuation">@unique</span>
<span class="token keyword">class</span> <span class="token class-name">Month</span><span class="token punctuation">(</span>Enum<span class="token punctuation">)</span><span class="token punctuation">:</span>
    Jan <span class="token operator">=</span> <span class="token string">&#39;January&#39;</span>
    Feb <span class="token operator">=</span> <span class="token string">&#39;February&#39;</span>
    Mar <span class="token operator">=</span> <span class="token string">&#39;March&#39;</span>
    Apr <span class="token operator">=</span> <span class="token string">&#39;April&#39;</span>
    May <span class="token operator">=</span> <span class="token string">&#39;May&#39;</span>
    Jun <span class="token operator">=</span> <span class="token string">&#39;June&#39;</span>
    Jul <span class="token operator">=</span> <span class="token string">&#39;July&#39;</span>
    Aug <span class="token operator">=</span> <span class="token string">&#39;August&#39;</span>
    Sep <span class="token operator">=</span> <span class="token string">&#39;September &#39;</span>
    Oct <span class="token operator">=</span> <span class="token string">&#39;October&#39;</span>
    Nov <span class="token operator">=</span> <span class="token string">&#39;November&#39;</span>
    Dec <span class="token operator">=</span> <span class="token string">&#39;December&#39;</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>Month<span class="token punctuation">.</span>Jan<span class="token punctuation">,</span> <span class="token string">&#39;----------&#39;</span><span class="token punctuation">,</span>
          Month<span class="token punctuation">.</span>Jan<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token string">&#39;----------&#39;</span><span class="token punctuation">,</span> Month<span class="token punctuation">.</span>Jan<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
    <span class="token keyword">for</span> name<span class="token punctuation">,</span> member <span class="token keyword">in</span> Month<span class="token punctuation">.</span>__members__<span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> <span class="token string">&#39;----------&#39;</span><span class="token punctuation">,</span> member<span class="token punctuation">,</span> <span class="token string">&#39;----------&#39;</span><span class="token punctuation">,</span> member<span class="token punctuation">.</span>value<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出的结果如下：</p><p><img src="http://twowaterimage.oss-cn-beijing.aliyuncs.com/2019-10-14-Python3 自定义类型的枚举类.png" alt=""></p><p>通过上面的例子，可以知道枚举模块定义了具有迭代 (interator) 和比较(comparison) 功能的枚举类型。 它可以用来为值创建明确定义的符号，而不是使用具体的整数或字符串。</p><h1 id="四、枚举的比较" tabindex="-1"><a class="header-anchor" href="#四、枚举的比较" aria-hidden="true">#</a> 四、枚举的比较</h1><p>因为枚举成员不是有序的，所以它们只支持通过标识(identity) 和相等性 (equality) 进行比较。下面来看看 <code>==</code> 和 <code>is</code> 的使用：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>
<span class="token comment">#!/usr/bin/env python3</span>
<span class="token comment"># -*- coding: UTF-8 -*-</span>
<span class="token keyword">from</span> enum <span class="token keyword">import</span> Enum


<span class="token keyword">class</span> <span class="token class-name">User</span><span class="token punctuation">(</span>Enum<span class="token punctuation">)</span><span class="token punctuation">:</span>
    Twowater <span class="token operator">=</span> <span class="token number">98</span>
    Liangdianshui <span class="token operator">=</span> <span class="token number">30</span>
    Tom <span class="token operator">=</span> <span class="token number">12</span>


Twowater <span class="token operator">=</span> User<span class="token punctuation">.</span>Twowater
Liangdianshui <span class="token operator">=</span> User<span class="token punctuation">.</span>Liangdianshui

<span class="token keyword">print</span><span class="token punctuation">(</span>Twowater <span class="token operator">==</span> Liangdianshui<span class="token punctuation">,</span> Twowater <span class="token operator">==</span> User<span class="token punctuation">.</span>Twowater<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>Twowater <span class="token keyword">is</span> Liangdianshui<span class="token punctuation">,</span> Twowater <span class="token keyword">is</span> User<span class="token punctuation">.</span>Twowater<span class="token punctuation">)</span>

<span class="token keyword">try</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\\n&#39;</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token string">&#39;  &#39;</span> <span class="token operator">+</span> s<span class="token punctuation">.</span>name <span class="token keyword">for</span> s <span class="token keyword">in</span> <span class="token builtin">sorted</span><span class="token punctuation">(</span>User<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">except</span> TypeError <span class="token keyword">as</span> err<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39; Error : {}&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出的结果：</p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>
False True
False True
 Error : &#39;&lt;&#39; not supported between instances of &#39;User&#39; and &#39;User&#39;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看看最后的输出结果，报了个异常，那是因为大于和小于比较运算符引发 TypeError 异常。也就是 <code>Enum</code> 类的枚举是不支持大小运算符的比较的。</p><p>那么能不能让枚举类进行大小的比较呢？</p><p>当然是可以的，使用 IntEnum 类进行枚举，就支持比较功能。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python3</span>
<span class="token comment"># -*- coding: UTF-8 -*-</span>
<span class="token keyword">import</span> enum


<span class="token keyword">class</span> <span class="token class-name">User</span><span class="token punctuation">(</span>enum<span class="token punctuation">.</span>IntEnum<span class="token punctuation">)</span><span class="token punctuation">:</span>
    Twowater <span class="token operator">=</span> <span class="token number">98</span>
    Liangdianshui <span class="token operator">=</span> <span class="token number">30</span>
    Tom <span class="token operator">=</span> <span class="token number">12</span>


<span class="token keyword">try</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\\n&#39;</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span>s<span class="token punctuation">.</span>name <span class="token keyword">for</span> s <span class="token keyword">in</span> <span class="token builtin">sorted</span><span class="token punctuation">(</span>User<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">except</span> TypeError <span class="token keyword">as</span> err<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39; Error : {}&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">)</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看看输出的结果：</p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>Tom
Liangdianshui
Twowater
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过输出的结果可以看到，枚举类的成员通过其值得大小进行了排序。也就是说可以进行大小的比较。</p>`,47),o=[t];function i(c,l){return s(),a("div",null,o)}const r=n(p,[["render",i],["__file","enum.html.vue"]]);export{r as default};
