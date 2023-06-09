import{_ as n,o as s,c as a,a as t}from"./app-3d979d38.js";const p={},e=t(`<h1 id="流程控制" tabindex="-1"><a class="header-anchor" href="#流程控制" aria-hidden="true">#</a> 流程控制</h1><h2 id="使用if" tabindex="-1"><a class="header-anchor" href="#使用if" aria-hidden="true">#</a> 使用if</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">/* 定义局部变量 */</span>
   <span class="token keyword">var</span> a <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">100</span>
   <span class="token keyword">var</span> b <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">200</span>
   <span class="token comment">/* 判断条件 */</span>
   <span class="token keyword">if</span> a <span class="token operator">==</span> <span class="token number">100</span> <span class="token punctuation">{</span>
       <span class="token comment">/* if 条件语句为 true 执行 */</span>
       <span class="token keyword">if</span> b <span class="token operator">==</span> <span class="token number">200</span> <span class="token punctuation">{</span>
          <span class="token comment">/* if 条件语句为 true 执行 */</span>
          fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;a 的值为 100 ， b 的值为 200\\n&quot;</span> <span class="token punctuation">)</span>
       <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
   fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;a 值为 : %d\\n&quot;</span><span class="token punctuation">,</span> a <span class="token punctuation">)</span>
   fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;b 值为 : %d\\n&quot;</span><span class="token punctuation">,</span> b <span class="token punctuation">)</span>
<span class="token punctuation">}</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="switch语句" tabindex="-1"><a class="header-anchor" href="#switch语句" aria-hidden="true">#</a> switch语句</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">/* 定义局部变量 */</span>
   <span class="token keyword">var</span> grade <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;B&quot;</span>
   <span class="token keyword">var</span> marks <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">90</span>

   <span class="token keyword">switch</span> marks <span class="token punctuation">{</span>
      <span class="token keyword">case</span> <span class="token number">90</span><span class="token punctuation">:</span> grade <span class="token operator">=</span> <span class="token string">&quot;A&quot;</span>
      <span class="token keyword">case</span> <span class="token number">80</span><span class="token punctuation">:</span> grade <span class="token operator">=</span> <span class="token string">&quot;B&quot;</span>
      <span class="token keyword">case</span> <span class="token number">50</span><span class="token punctuation">,</span><span class="token number">60</span><span class="token punctuation">,</span><span class="token number">70</span> <span class="token punctuation">:</span> grade <span class="token operator">=</span> <span class="token string">&quot;C&quot;</span>
      <span class="token keyword">default</span><span class="token punctuation">:</span> grade <span class="token operator">=</span> <span class="token string">&quot;D&quot;</span>  
   <span class="token punctuation">}</span>

   <span class="token keyword">switch</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> grade <span class="token operator">==</span> <span class="token string">&quot;A&quot;</span> <span class="token punctuation">:</span>
         fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;优秀!\\n&quot;</span> <span class="token punctuation">)</span>     
      <span class="token keyword">case</span> grade <span class="token operator">==</span> <span class="token string">&quot;B&quot;</span><span class="token punctuation">,</span> grade <span class="token operator">==</span> <span class="token string">&quot;C&quot;</span> <span class="token punctuation">:</span>
         fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;良好\\n&quot;</span> <span class="token punctuation">)</span>      
      <span class="token keyword">case</span> grade <span class="token operator">==</span> <span class="token string">&quot;D&quot;</span> <span class="token punctuation">:</span>
         fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;及格\\n&quot;</span> <span class="token punctuation">)</span>      
      <span class="token keyword">case</span> grade <span class="token operator">==</span> <span class="token string">&quot;F&quot;</span><span class="token punctuation">:</span>
         fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;不及格\\n&quot;</span> <span class="token punctuation">)</span>
      <span class="token keyword">default</span><span class="token punctuation">:</span>
         fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;差\\n&quot;</span> <span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
   fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;你的等级是 %s\\n&quot;</span><span class="token punctuation">,</span> grade <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="type-switch" tabindex="-1"><a class="header-anchor" href="#type-switch" aria-hidden="true">#</a> type-switch</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">switch</span> x<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token keyword">type</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token keyword">type</span><span class="token punctuation">:</span>
       <span class="token function">statement</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>      
    <span class="token keyword">case</span> <span class="token keyword">type</span><span class="token punctuation">:</span>
       <span class="token function">statement</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
    <span class="token comment">/* 你可以定义任意个数的case */</span>
    <span class="token keyword">default</span><span class="token punctuation">:</span> <span class="token comment">/* 可选 */</span>
       <span class="token function">statement</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
<span class="token punctuation">}</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="for" tabindex="-1"><a class="header-anchor" href="#for" aria-hidden="true">#</a> for</h2><p>for可以</p><ul><li>遍历array和slice</li><li>遍历key为整型递增的map</li><li>遍历string</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">for</span> i<span class="token punctuation">,</span> n <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span> <span class="token comment">// 常见的 for 循环，支持初始化语句。</span>
    <span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">for</span> a <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> a <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> a<span class="token operator">++</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;a 的值为: %d\\n&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// for range</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    s <span class="token operator">:=</span> <span class="token string">&quot;abc&quot;</span>
    <span class="token comment">// 忽略 2nd value，支持 string/array/slice/map。</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token keyword">range</span> s <span class="token punctuation">{</span>
        <span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 忽略 index。</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> c <span class="token operator">:=</span> <span class="token keyword">range</span> s <span class="token punctuation">{</span>
        <span class="token function">println</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 忽略全部返回值，仅迭代。</span>
    <span class="token keyword">for</span> <span class="token keyword">range</span> s <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>

    m <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">}</span>
    <span class="token comment">// 返回 (key, value)。</span>
    <span class="token keyword">for</span> k<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> m <span class="token punctuation">{</span>
        <span class="token function">println</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span> v<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","flow-control.html.vue"]]);export{r as default};
