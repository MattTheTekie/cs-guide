import{_ as n,o as s,c as a,a as t}from"./app-3d979d38.js";const e={},i=t(`<h1 id="java到kotlin的用法" tabindex="-1"><a class="header-anchor" href="#java到kotlin的用法" aria-hidden="true">#</a> java到kotlin的用法</h1><h2 id="接口使用" tabindex="-1"><a class="header-anchor" href="#接口使用" aria-hidden="true">#</a> 接口使用</h2><p>java</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>button<span class="token punctuation">.</span><span class="token function">setOnClickListener</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">View<span class="token punctuation">.</span>OnClickListener</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onClick</span><span class="token punctuation">(</span><span class="token class-name">View</span> v<span class="token punctuation">)</span> <span class="token punctuation">{</span>

            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        button<span class="token punctuation">.</span><span class="token function">setOnClickListener</span><span class="token punctuation">(</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>kotlin</p><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code>
 

button<span class="token punctuation">.</span><span class="token function">setOnClickListener</span><span class="token punctuation">(</span><span class="token keyword">object</span> <span class="token operator">:</span> View<span class="token punctuation">.</span><span class="token function">OnClickListener</span><span class="token punctuation">{</span>
    <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">onClick</span><span class="token punctuation">(</span>v<span class="token operator">:</span> View<span class="token operator">?</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
     button<span class="token punctuation">.</span><span class="token function">setOnClickListener</span> <span class="token punctuation">{</span>

     <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="array" tabindex="-1"><a class="header-anchor" href="#array" aria-hidden="true">#</a> array</h2><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code><span class="token keyword">val</span> list <span class="token operator">=</span> ArrayList<span class="token operator">&lt;</span>String<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 非空（构造函数结果）</span>
list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;Item&quot;</span></span><span class="token punctuation">)</span>
<span class="token keyword">val</span> size <span class="token operator">=</span> list<span class="token punctuation">.</span>size <span class="token comment">// 非空（原生 int）</span>
<span class="token keyword">val</span> item <span class="token operator">=</span> list<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token comment">// 推断为平台类型（普通 Java 对象）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),p=[i];function o(c,l){return s(),a("div",null,p)}const r=n(e,[["render",o],["__file","java-to-kotlin.html.vue"]]);export{r as default};
