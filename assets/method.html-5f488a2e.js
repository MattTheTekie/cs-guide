import{_ as n,o as s,c as a,a as t}from"./app-3d979d38.js";const e={},p=t(`<h1 id="go方法和函数" tabindex="-1"><a class="header-anchor" href="#go方法和函数" aria-hidden="true">#</a> go方法和函数</h1><h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h2><p>go的函数和java,c#的方法一样,不过go没有private,public,protected之类的,小写函数名表示私有,大写函数名表示导出,其他包可以访问</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">test</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">,</span> s <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 类型相同的相邻参数，参数类型可合并。 多返回值必须用括号。</span>
    n <span class="token operator">:=</span> x <span class="token operator">+</span> y          
    <span class="token keyword">return</span> n<span class="token punctuation">,</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> n<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> Test <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// 无参数、无返回值</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>t Test<span class="token punctuation">)</span> <span class="token function">method0</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
<span class="token comment">// 单参数、无返回值</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>t Test<span class="token punctuation">)</span> <span class="token function">method1</span><span class="token punctuation">(</span>i <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
<span class="token comment">// 多参数、无返回值</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>t Test<span class="token punctuation">)</span> <span class="token function">method2</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方法接收者的值类型和指针类型" tabindex="-1"><a class="header-anchor" href="#方法接收者的值类型和指针类型" aria-hidden="true">#</a> 方法接收者的值类型和指针类型</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    age <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>u User<span class="token punctuation">)</span> <span class="token function">add</span><span class="token punctuation">(</span>v <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   u<span class="token punctuation">.</span>age <span class="token operator">+=</span> v
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    c <span class="token operator">:=</span> User<span class="token punctuation">{</span>age<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">}</span>
    c<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span> <span class="token string">&quot;age=&gt;&quot;</span><span class="token operator">+</span>c<span class="token punctuation">.</span>age<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为接受者是值类型,所以最后user的age是100,而不是150</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    age <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>u <span class="token operator">*</span>User<span class="token punctuation">)</span> <span class="token function">add</span><span class="token punctuation">(</span>v <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   u<span class="token punctuation">.</span>age <span class="token operator">+=</span> v
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    c <span class="token operator">:=</span> User<span class="token punctuation">{</span>age<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">}</span>
    c<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span> <span class="token string">&quot;age=&gt;&quot;</span><span class="token operator">+</span>c<span class="token punctuation">.</span>age<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而这种,因为接受者是引用类型,user.age是150</p>`,11),c=[p];function i(o,u){return s(),a("div",null,c)}const d=n(e,[["render",i],["__file","method.html.vue"]]);export{d as default};
